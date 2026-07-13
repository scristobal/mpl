//! Metrics Processing Language Command Line Interface
//!
//! The Metrics Processing Language Command Line Interface, MPL CLI, or
//! `mplc` is a command-line tool for working with mpl-lang, the Axion Metrics
//! Processing Language or MPL for short

use std::{
    collections::HashMap,
    fs,
    io::{self, Read as _},
    process,
};

use clap::{ArgGroup, Parser};
use miette::{Diagnostic as _, IntoDiagnostic, NamedSource, Report, Result, miette};
use mpl_lang::query::{ParamType, TerminalParamType, Warning};
use serde::Serialize;

/// Output format
#[derive(Clone, Copy, clap::ValueEnum)]
enum Format {
    /// JSON output
    Json,
    /// RON (Rusty Object Notation) output
    Ron,
    /// Debug output
    Debug,
}

#[derive(Parser)]
#[command(name = "mplc")]
#[command(about = "MPL Command Line Interface")]
#[command(version)]
struct Args {
    #[command(subcommand)]
    command: Command,
}

#[derive(clap::Subcommand)]
enum Command {
    /// Parse an MPL file and output the AST
    Parse {
        /// Path to a .mpl file to parse
        file: String,

        /// Output format
        #[arg(short, long, value_enum, default_value = "ron")]
        format: Format,

        /// Write output to a file
        #[arg(short, long)]
        output: Option<String>,
    },
    /// Check an MPL file and output diagnostics
    #[command(group(
        ArgGroup::new("input")
            .required(true)
            .args(["file", "stdin_filepath"])
    ))]
    Check {
        /// Path to a .mpl file to check
        file: Option<String>,

        /// Read source from stdin and report diagnostics using this path
        #[arg(long)]
        stdin_filepath: Option<String>,

        /// Output diagnostics as JSON Lines
        #[arg(long = "output-jsonl")]
        output_jsonl: bool,
    },
}

#[derive(Debug, Clone)]
struct SystemParams {
    inner: HashMap<String, ParamType>,
}

impl Default for SystemParams {
    fn default() -> Self {
        let mut inner = HashMap::new();
        inner.insert(
            "__interval".to_string(),
            ParamType::Terminal(TerminalParamType::Duration),
        );
        Self { inner }
    }
}

impl From<SystemParams> for HashMap<String, ParamType> {
    fn from(value: SystemParams) -> Self {
        value.inner
    }
}

fn main() -> Result<()> {
    let args = Args::parse();

    match args.command {
        Command::Parse {
            file,
            format,
            output,
        } => run_parse(file, format, output)?,
        Command::Check {
            file,
            stdin_filepath,
            output_jsonl,
        } => run_check(file, stdin_filepath, output_jsonl)?,
    }

    Ok(())
}

fn run_parse(file: String, format: Format, output: Option<String>) -> Result<()> {
    let content = fs::read_to_string(&file)
        .into_diagnostic()
        .map_err(|e| e.context(format!("Failed to read file '{file}'")))?;

    let system_params = SystemParams::default();

    let (parsed_query, _warnings) = mpl_lang::compile(&content, system_params.into())
        .map_err(|e| Report::new(e).with_source_code(NamedSource::new(&file, content.clone())))?;

    let output_str = match format {
        Format::Json => serde_json::to_string_pretty(&parsed_query)
            .into_diagnostic()
            .map_err(|e| e.context("Failed to serialize to JSON"))?,
        Format::Ron => ron::ser::to_string_pretty(&parsed_query, ron::ser::PrettyConfig::default())
            .into_diagnostic()
            .map_err(|e| e.context("Failed to serialize to RON"))?,
        Format::Debug => format!("{parsed_query:?}"),
    };

    match output {
        Some(path) => {
            fs::write(&path, &output_str)
                .into_diagnostic()
                .map_err(|e| e.context(format!("Failed to write to '{path}'")))?;
        }
        None => {
            let lang = match format {
                Format::Json => "json",
                Format::Ron => "ron",
                Format::Debug => {
                    println!("{output_str}");
                    return Ok(());
                }
            };

            let theme = arborium::theme::builtin::catppuccin_mocha();
            let mut hl = arborium::AnsiHighlighter::new(theme);

            match hl.highlight(lang, &output_str) {
                Ok(colored) => println!("{colored}"),
                Err(_) => println!("{output_str}"),
            }
        }
    }

    Ok(())
}

fn run_check(
    file: Option<String>,
    stdin_filepath: Option<String>,
    output_jsonl: bool,
) -> Result<()> {
    let source = Source::new(file, stdin_filepath)?;

    let system_params = SystemParams::default();

    match mpl_lang::compile(&source.content, system_params.into()) {
        Ok((_parsed_query, warnings)) if output_jsonl => {
            let diagnostics: Vec<_> = warnings
                .as_slice()
                .iter()
                .map(|warning| DiagnosticItem::from_warning(source.path(), warning))
                .collect();
            for diagnostic in diagnostics {
                let output = serde_json::to_string(&diagnostic)
                    .into_diagnostic()
                    .map_err(|e| e.context("Failed to serialize to JSON Lines"))?;
                println!("{output}");
            }
        }
        Ok((_parsed_query, warnings)) => {
            for warning in warnings.as_slice() {
                println!("warning: {}", warning.warning());
            }
        }
        Err(error) if output_jsonl => {
            let diagnostics = vec![DiagnosticItem::from_compile_error(source.path(), &error)];
            for diagnostic in diagnostics {
                let output = serde_json::to_string(&diagnostic)
                    .into_diagnostic()
                    .map_err(|e| e.context("Failed to serialize to JSON Lines"))?;
                println!("{output}");
            }
            process::exit(1);
        }
        Err(error) => {
            return Err(Report::new(error).with_source_code(NamedSource::new(
                source.path().to_string(),
                source.content.clone(),
            )));
        }
    }

    Ok(())
}

enum SourcePath {
    File(String),
    Stdin(String),
}

impl SourcePath {
    fn new(file: Option<String>, stdin_filepath: Option<String>) -> Result<Self> {
        match (file, stdin_filepath) {
            (Some(file), None) => Ok(Self::File(file)),
            (None, Some(filepath)) => Ok(Self::Stdin(filepath)),
            _ => Err(miette!("expected exactly one check input")),
        }
    }

    fn read_content(&self) -> io::Result<String> {
        match self {
            Self::File(path) => fs::read_to_string(path),
            Self::Stdin(_) => {
                let mut content = String::new();
                io::stdin().read_to_string(&mut content)?;
                Ok(content)
            }
        }
    }
}

impl AsRef<str> for SourcePath {
    fn as_ref(&self) -> &str {
        match self {
            Self::File(path) | Self::Stdin(path) => path,
        }
    }
}

struct Source {
    path: SourcePath,
    content: String,
}

impl Source {
    fn new(file: Option<String>, stdin_filepath: Option<String>) -> Result<Self> {
        let path = SourcePath::new(file, stdin_filepath)?;
        let content = path
            .read_content()
            .into_diagnostic()
            .map_err(|e| e.context(format!("Failed to read '{}'", path.as_ref())))?;

        Ok(Self { path, content })
    }

    fn path(&self) -> &str {
        self.path.as_ref()
    }
}

#[derive(Debug, Serialize)]
struct DiagnosticSpan {
    offset: usize,
    length: usize,
    end: usize,
    label: Option<String>,
    primary: bool,
}

#[derive(Debug, Serialize)]
struct DiagnosticItem {
    file: Option<String>,
    severity: miette::Severity,
    message: String,
    code: Option<String>,
    help: Option<String>,
    spans: Vec<DiagnosticSpan>,
}

impl DiagnosticItem {
    fn from_warning(file: &str, warning: &Warning) -> Self {
        let spans = warning
            .source()
            .map(|span| {
                vec![DiagnosticSpan {
                    offset: span.offset(),
                    length: span.len(),
                    end: span.offset() + span.len(),
                    label: None,
                    primary: true,
                }]
            })
            .unwrap_or_default();

        Self {
            file: Some(file.to_string()),
            severity: miette::Severity::Warning,
            message: warning.warning().to_string(),
            code: None,
            help: None,
            spans,
        }
    }

    fn from_compile_error(file: &str, error: &mpl_lang::CompileError) -> Self {
        let spans = error
            .labels()
            .map(|labels| {
                labels
                    .map(|label| DiagnosticSpan {
                        offset: label.offset(),
                        length: label.len(),
                        end: label.offset() + label.len(),
                        label: label.label().map(ToString::to_string),
                        primary: label.primary(),
                    })
                    .collect()
            })
            .unwrap_or_default();

        Self {
            file: Some(file.to_string()),
            severity: error.severity().unwrap_or_default(),
            message: error.to_string(),
            code: error.code().map(|code| code.to_string()),
            help: error.help().map(|help| help.to_string()),
            spans,
        }
    }
}
