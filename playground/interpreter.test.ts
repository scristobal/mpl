import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Query, Aggregate, Filter, MapType } from "@axiomhq/mpl-lang";
import type { Series } from "./datasets";

vi.mock("./datasets", () => ({
  loadSeries: vi.fn(),
}));

import { interpret } from "./interpreter";
import { loadSeries } from "./datasets";

const mockedLoadSeries = vi.mocked(loadSeries);

function s(tags: Record<string, string>, timestamps: number[], values: number[]): Series {
  const name = Object.entries(tags)
    .map(([k, v]) => `${k}=${v}`)
    .join(", ");
  return { tags, name, timestamps, values };
}

function simpleQuery(
  dataset: string,
  metric: string,
  filters: Filter[] = [],
  aggregates: Aggregate[] = [],
): Query {
  return {
    Simple: {
      source: {
        metric_id: { dataset: { Concrete: dataset }, metric },
        time: undefined,
      },
      filters,
      aggregates,
      directives: new Map(),
      params: [],
      sample: undefined,
    },
  };
}

beforeEach(() => {
  mockedLoadSeries.mockReset();
});

describe("interpret - simple query", () => {
  it("loads series and returns initial step", async () => {
    const data = [s({ host: "a" }, [0, 60], [10, 20])];
    mockedLoadSeries.mockResolvedValue(data);

    const steps = await interpret(simpleQuery("ds", "metric"));
    expect(steps).toHaveLength(1);
    expect(steps[0]).toHaveLength(1);
    expect(steps[0][0].values).toEqual([10, 20]);
  });

  it("throws on parameterized dataset", async () => {
    const query: Query = {
      Simple: {
        source: {
          metric_id: {
            dataset: {
              Param: {
                span: { offset: 0, length: 1 },
                param: { span: { offset: 0, length: 1 }, name: "ds", typ: "Dataset" },
              },
            },
            metric: "m",
          },
          time: undefined,
        },
        filters: [],
        aggregates: [],
        directives: new Map(),
        params: [],
        sample: undefined,
      },
    };
    await expect(interpret(query)).rejects.toThrow("Parameterized");
  });
});

describe("filters", () => {
  it("Eq filter", async () => {
    mockedLoadSeries.mockResolvedValue([s({ host: "a" }, [0], [1]), s({ host: "b" }, [0], [2])]);
    const steps = await interpret(
      simpleQuery("ds", "m", [{ Cmp: { field: "host", rhs: { Eq: { Concrete: "a" } } } }]),
    );
    expect(steps[1]).toHaveLength(1);
    expect(steps[1][0].tags.host).toBe("a");
  });

  it("Ne filter", async () => {
    mockedLoadSeries.mockResolvedValue([s({ host: "a" }, [0], [1]), s({ host: "b" }, [0], [2])]);
    const steps = await interpret(
      simpleQuery("ds", "m", [{ Cmp: { field: "host", rhs: { Ne: { Concrete: "a" } } } }]),
    );
    expect(steps[1]).toHaveLength(1);
    expect(steps[1][0].tags.host).toBe("b");
  });

  it("Gt filter on numeric tags", async () => {
    mockedLoadSeries.mockResolvedValue([
      s({ code: "200" }, [0], [1]),
      s({ code: "500" }, [0], [2]),
    ]);
    const steps = await interpret(
      simpleQuery("ds", "m", [{ Cmp: { field: "code", rhs: { Gt: { Concrete: 300 } } } }]),
    );
    expect(steps[1]).toHaveLength(1);
    expect(steps[1][0].tags.code).toBe("500");
  });

  it("Ge filter", async () => {
    mockedLoadSeries.mockResolvedValue([
      s({ code: "200" }, [0], [1]),
      s({ code: "300" }, [0], [2]),
    ]);
    const steps = await interpret(
      simpleQuery("ds", "m", [{ Cmp: { field: "code", rhs: { Ge: { Concrete: 300 } } } }]),
    );
    expect(steps[1]).toHaveLength(1);
    expect(steps[1][0].tags.code).toBe("300");
  });

  it("Lt filter", async () => {
    mockedLoadSeries.mockResolvedValue([
      s({ code: "200" }, [0], [1]),
      s({ code: "500" }, [0], [2]),
    ]);
    const steps = await interpret(
      simpleQuery("ds", "m", [{ Cmp: { field: "code", rhs: { Lt: { Concrete: 300 } } } }]),
    );
    expect(steps[1]).toHaveLength(1);
    expect(steps[1][0].tags.code).toBe("200");
  });

  it("Le filter", async () => {
    mockedLoadSeries.mockResolvedValue([
      s({ code: "200" }, [0], [1]),
      s({ code: "300" }, [0], [2]),
      s({ code: "500" }, [0], [3]),
    ]);
    const steps = await interpret(
      simpleQuery("ds", "m", [{ Cmp: { field: "code", rhs: { Le: { Concrete: 300 } } } }]),
    );
    expect(steps[1]).toHaveLength(2);
  });

  it("RegEx filter", async () => {
    mockedLoadSeries.mockResolvedValue([
      s({ path: "/api/v1" }, [0], [1]),
      s({ path: "/health" }, [0], [2]),
    ]);
    const steps = await interpret(
      simpleQuery("ds", "m", [{ Cmp: { field: "path", rhs: { RegEx: { Concrete: /^\/api/ } } } }]),
    );
    expect(steps[1]).toHaveLength(1);
    expect(steps[1][0].tags.path).toBe("/api/v1");
  });

  it("RegExNot filter", async () => {
    mockedLoadSeries.mockResolvedValue([
      s({ path: "/api/v1" }, [0], [1]),
      s({ path: "/health" }, [0], [2]),
    ]);
    const steps = await interpret(
      simpleQuery("ds", "m", [
        { Cmp: { field: "path", rhs: { RegExNot: { Concrete: /^\/api/ } } } },
      ]),
    );
    expect(steps[1]).toHaveLength(1);
    expect(steps[1][0].tags.path).toBe("/health");
  });

  it("Is None filter", async () => {
    mockedLoadSeries.mockResolvedValue([s({ val: "" }, [0], [1]), s({ val: "x" }, [0], [2])]);
    const steps = await interpret(
      simpleQuery("ds", "m", [{ Cmp: { field: "val", rhs: { Is: "None" } } }]),
    );
    expect(steps[1]).toHaveLength(1);
    expect(steps[1][0].tags.val).toBe("");
  });

  it("Is Bool filter", async () => {
    mockedLoadSeries.mockResolvedValue([
      s({ flag: "true" }, [0], [1]),
      s({ flag: "yes" }, [0], [2]),
    ]);
    const steps = await interpret(
      simpleQuery("ds", "m", [{ Cmp: { field: "flag", rhs: { Is: "Bool" } } }]),
    );
    expect(steps[1]).toHaveLength(1);
  });

  it("Is Int filter", async () => {
    mockedLoadSeries.mockResolvedValue([s({ n: "42" }, [0], [1]), s({ n: "3.14" }, [0], [2])]);
    const steps = await interpret(
      simpleQuery("ds", "m", [{ Cmp: { field: "n", rhs: { Is: "Int" } } }]),
    );
    expect(steps[1]).toHaveLength(1);
    expect(steps[1][0].tags.n).toBe("42");
  });

  it("Is Float filter", async () => {
    mockedLoadSeries.mockResolvedValue([s({ n: "3.14" }, [0], [1]), s({ n: "abc" }, [0], [2])]);
    const steps = await interpret(
      simpleQuery("ds", "m", [{ Cmp: { field: "n", rhs: { Is: "Float" } } }]),
    );
    expect(steps[1]).toHaveLength(1);
  });

  it("Is String filter matches everything", async () => {
    mockedLoadSeries.mockResolvedValue([s({ x: "anything" }, [0], [1])]);
    const steps = await interpret(
      simpleQuery("ds", "m", [{ Cmp: { field: "x", rhs: { Is: "String" } } }]),
    );
    expect(steps[1]).toHaveLength(1);
  });

  it("missing tag returns false (filtered out)", async () => {
    mockedLoadSeries.mockResolvedValue([s({}, [0], [1])]);
    const steps = await interpret(
      simpleQuery("ds", "m", [{ Cmp: { field: "missing", rhs: { Eq: { Concrete: "x" } } } }]),
    );
    expect(steps[1]).toHaveLength(0);
  });

  it("And filter", async () => {
    mockedLoadSeries.mockResolvedValue([
      s({ a: "1", b: "2" }, [0], [1]),
      s({ a: "1", b: "3" }, [0], [2]),
    ]);
    const steps = await interpret(
      simpleQuery("ds", "m", [
        {
          And: [
            { Cmp: { field: "a", rhs: { Eq: { Concrete: "1" } } } },
            { Cmp: { field: "b", rhs: { Eq: { Concrete: "2" } } } },
          ],
        },
      ]),
    );
    expect(steps[1]).toHaveLength(1);
  });

  it("Or filter", async () => {
    mockedLoadSeries.mockResolvedValue([
      s({ x: "a" }, [0], [1]),
      s({ x: "b" }, [0], [2]),
      s({ x: "c" }, [0], [3]),
    ]);
    const steps = await interpret(
      simpleQuery("ds", "m", [
        {
          Or: [
            { Cmp: { field: "x", rhs: { Eq: { Concrete: "a" } } } },
            { Cmp: { field: "x", rhs: { Eq: { Concrete: "c" } } } },
          ],
        },
      ]),
    );
    expect(steps[1]).toHaveLength(2);
  });

  it("Not filter", async () => {
    mockedLoadSeries.mockResolvedValue([s({ x: "a" }, [0], [1]), s({ x: "b" }, [0], [2])]);
    const steps = await interpret(
      simpleQuery("ds", "m", [
        {
          Not: { Cmp: { field: "x", rhs: { Eq: { Concrete: "a" } } } },
        },
      ]),
    );
    expect(steps[1]).toHaveLength(1);
    expect(steps[1][0].tags.x).toBe("b");
  });
});

describe("map operations", () => {
  const ts = [0, 60, 120];

  function mapQuery(fn: MapType, arg?: number): Query {
    return simpleQuery("ds", "m", [], [{ Map: { function: { Builtin: fn }, arg } }]);
  }

  beforeEach(() => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, ts, [10, 20, 30])]);
  });

  it("IsLt", async () => {
    const steps = await interpret(mapQuery("IsLt", 20));
    expect(steps[1][0].values).toEqual([1, 0, 0]);
  });

  it("IsGt", async () => {
    const steps = await interpret(mapQuery("IsGt", 20));
    expect(steps[1][0].values).toEqual([0, 0, 1]);
  });

  it("IsEq", async () => {
    const steps = await interpret(mapQuery("IsEq", 20));
    expect(steps[1][0].values).toEqual([0, 1, 0]);
  });

  it("IsNe", async () => {
    const steps = await interpret(mapQuery("IsNe", 20));
    expect(steps[1][0].values).toEqual([1, 0, 1]);
  });

  it("IsGe", async () => {
    const steps = await interpret(mapQuery("IsGe", 20));
    expect(steps[1][0].values).toEqual([0, 1, 1]);
  });

  it("IsLe", async () => {
    const steps = await interpret(mapQuery("IsLe", 20));
    expect(steps[1][0].values).toEqual([1, 1, 0]);
  });

  it("FilterLt", async () => {
    const steps = await interpret(mapQuery("FilterLt", 25));
    expect(steps[1][0].values).toEqual([10, 20, NaN]);
  });

  it("FilterGt", async () => {
    const steps = await interpret(mapQuery("FilterGt", 15));
    expect(steps[1][0].values).toEqual([NaN, 20, 30]);
  });

  it("FilterEq", async () => {
    const steps = await interpret(mapQuery("FilterEq", 20));
    expect(steps[1][0].values).toEqual([NaN, 20, NaN]);
  });

  it("FilterNe", async () => {
    const steps = await interpret(mapQuery("FilterNe", 20));
    expect(steps[1][0].values).toEqual([10, NaN, 30]);
  });

  it("FilterGe", async () => {
    const steps = await interpret(mapQuery("FilterGe", 20));
    expect(steps[1][0].values).toEqual([NaN, 20, 30]);
  });

  it("FilterLe", async () => {
    const steps = await interpret(mapQuery("FilterLe", 20));
    expect(steps[1][0].values).toEqual([10, 20, NaN]);
  });

  it("Rate", async () => {
    const steps = await interpret(mapQuery("Rate"));
    const v = steps[1][0].values;
    expect(v[0]).toBeNaN();
    expect(v[1]).toBeCloseTo(10 / 60);
    expect(v[2]).toBeCloseTo(10 / 60);
  });

  it("Increase", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, ts, [10, 25, 20])]);
    const steps = await interpret(mapQuery("Increase"));
    const v = steps[1][0].values;
    expect(v[0]).toBeNaN();
    expect(v[1]).toBe(15);
    expect(v[2]).toBe(0);
  });

  it("Abs", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, ts, [-5, 0, 3])]);
    const steps = await interpret(mapQuery("Abs"));
    expect(steps[1][0].values).toEqual([5, 0, 3]);
  });

  it("FillConst", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, ts, [1, NaN, 3])]);
    const steps = await interpret(mapQuery("FillConst", 99));
    expect(steps[1][0].values).toEqual([1, 99, 3]);
  });

  it("FillPrev", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, ts, [5, NaN, NaN])]);
    const steps = await interpret(mapQuery("FillPrev"));
    expect(steps[1][0].values).toEqual([5, 5, 5]);
  });

  it("FillPrev throws if no previous value", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, ts, [NaN, 1, 2])]);
    await expect(interpret(mapQuery("FillPrev"))).rejects.toThrow("no previous value");
  });

  it("Add", async () => {
    const steps = await interpret(mapQuery("Add", 5));
    expect(steps[1][0].values).toEqual([15, 25, 35]);
  });

  it("Sub", async () => {
    const steps = await interpret(mapQuery("Sub", 5));
    expect(steps[1][0].values).toEqual([5, 15, 25]);
  });

  it("Mul", async () => {
    const steps = await interpret(mapQuery("Mul", 2));
    expect(steps[1][0].values).toEqual([20, 40, 60]);
  });

  it("Div", async () => {
    const steps = await interpret(mapQuery("Div", 10));
    expect(steps[1][0].values).toEqual([1, 2, 3]);
  });

  it("Div by zero throws", async () => {
    await expect(interpret(mapQuery("Div", 0))).rejects.toThrow("Division by zero");
  });

  it("Min", async () => {
    const steps = await interpret(mapQuery("Min", 15));
    expect(steps[1][0].values).toEqual([10, 15, 15]);
  });

  it("Max", async () => {
    const steps = await interpret(mapQuery("Max", 25));
    expect(steps[1][0].values).toEqual([25, 25, 30]);
  });

  it("InterpolateLinear", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0, 60, 120], [10, NaN, 30])]);
    const steps = await interpret(mapQuery("InterpolateLinear"));
    expect(steps[1][0].values).toEqual([10, 20, 30]);
  });

  it("InterpolateLinear throws with no bounding values", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0, 60], [NaN, 10])]);
    await expect(interpret(mapQuery("InterpolateLinear"))).rejects.toThrow("no bounding values");
  });

  it("map function without required arg throws", async () => {
    await expect(interpret(mapQuery("Add"))).rejects.toThrow("requires an argument");
  });
});

describe("group operations", () => {
  it("group by tag using Sum", async () => {
    mockedLoadSeries.mockResolvedValue([
      s({ region: "us" }, [0, 60], [10, 20]),
      s({ region: "us" }, [0, 60], [30, 40]),
      s({ region: "eu" }, [0, 60], [5, 15]),
    ]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            GroupBy: {
              span: { offset: 0, length: 0 },
              function: { Builtin: "Sum" },
              tags: ["region"],
            },
          },
        ],
      ),
    );
    expect(steps[1]).toHaveLength(2);
    const us = steps[1].find((s) => s.tags.region === "us");
    expect(us?.values).toEqual([40, 60]);
  });

  it("group all using Avg", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0], [10]), s({ h: "b" }, [0], [20])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [{ GroupBy: { span: { offset: 0, length: 0 }, function: { Builtin: "Avg" }, tags: [] } }],
      ),
    );
    expect(steps[1]).toHaveLength(1);
    expect(steps[1][0].values).toEqual([15]);
  });

  it("group using Count", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0], [10]), s({ h: "b" }, [0], [20])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [{ GroupBy: { span: { offset: 0, length: 0 }, function: { Builtin: "Count" }, tags: [] } }],
      ),
    );
    expect(steps[1][0].values).toEqual([2]);
  });

  it("group using Min", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0], [10]), s({ h: "b" }, [0], [20])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [{ GroupBy: { span: { offset: 0, length: 0 }, function: { Builtin: "Min" }, tags: [] } }],
      ),
    );
    expect(steps[1][0].values).toEqual([10]);
  });

  it("group using Max", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0], [10]), s({ h: "b" }, [0], [20])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [{ GroupBy: { span: { offset: 0, length: 0 }, function: { Builtin: "Max" }, tags: [] } }],
      ),
    );
    expect(steps[1][0].values).toEqual([20]);
  });

  it("group with missing tag throws", async () => {
    mockedLoadSeries.mockResolvedValue([s({}, [0], [1])]);
    await expect(
      interpret(
        simpleQuery(
          "ds",
          "m",
          [],
          [
            {
              GroupBy: {
                span: { offset: 0, length: 0 },
                function: { Builtin: "Sum" },
                tags: ["missing"],
              },
            },
          ],
        ),
      ),
    ).rejects.toThrow("Missing required tag");
  });
});

describe("align operations", () => {
  it("align using Sum", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0, 30, 60, 90], [1, 2, 3, 4])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Align: {
              function: { Builtin: "Sum" },
              time: { Concrete: { value: 60, unit: "Second" } },
            },
          },
        ],
      ),
    );
    expect(steps[1][0].values).toEqual([3, 7]);
  });

  it("align using Avg", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0, 30, 60, 90], [10, 20, 30, 40])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Align: {
              function: { Builtin: "Avg" },
              time: { Concrete: { value: 1, unit: "Minute" } },
            },
          },
        ],
      ),
    );
    expect(steps[1][0].values).toEqual([15, 35]);
  });

  it("align using Rate (prom::rate)", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0, 30, 60, 90], [0, 100, 200, 400])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Align: {
              function: { Builtin: "Rate" },
              time: { Concrete: { value: 60, unit: "Second" } },
            },
          },
        ],
      ),
    );
    const v = steps[1][0].values;
    expect(v[0]).toBeCloseTo(100 / 60);
    expect(v[1]).toBeCloseTo(200 / 60);
  });

  it("align Rate with counter reset", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0, 30, 60, 90], [100, 50, 60, 70])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Align: {
              function: { Builtin: "Rate" },
              time: { Concrete: { value: 60, unit: "Second" } },
            },
          },
        ],
      ),
    );
    // Window [0,60): 100 -> 50 (reset: +50), so increase = 50
    expect(steps[1][0].values[0]).toBeCloseTo(50 / 60);
  });

  it("align using Last", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0, 30, 60, 90], [1, 2, 3, 4])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Align: {
              function: { Builtin: "Last" },
              time: { Concrete: { value: 60, unit: "Second" } },
            },
          },
        ],
      ),
    );
    expect(steps[1][0].values).toEqual([2, 4]);
  });

  it("align with Month time unit throws", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0], [1])]);
    await expect(
      interpret(
        simpleQuery(
          "ds",
          "m",
          [],
          [
            {
              Align: {
                function: { Builtin: "Sum" },
                time: { Concrete: { value: 1, unit: "Month" } },
              },
            },
          ],
        ),
      ),
    ).rejects.toThrow("Month time unit is not supported");
  });
});

describe("as operation", () => {
  it("renames series", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0], [1])]);
    const steps = await interpret(simpleQuery("ds", "m", [], [{ As: { name: "new_name" } }]));
    expect(steps[1][0].name).toBe("new_name");
  });
});

describe("compute query", () => {
  it("computes division of two branches", async () => {
    mockedLoadSeries
      .mockResolvedValueOnce([s({ h: "a" }, [0, 60], [100, 200])])
      .mockResolvedValueOnce([s({ h: "a" }, [0, 60], [10, 20])]);

    const query: Query = {
      Compute: {
        left: simpleQuery("ds", "left"),
        right: simpleQuery("ds", "right"),
        name: "ratio",
        op: { Builtin: "Div" },
        aggregates: [],
        directives: new Map(),
        params: [],
      },
    };
    const steps = await interpret(query);
    const last = steps[steps.length - 1];
    expect(last[0].values).toEqual([10, 10]);
    expect(last[0].name).toBe("ratio");
  });

  it("compute Mul", async () => {
    mockedLoadSeries
      .mockResolvedValueOnce([s({ h: "a" }, [0], [3])])
      .mockResolvedValueOnce([s({ h: "a" }, [0], [4])]);

    const query: Query = {
      Compute: {
        left: simpleQuery("ds", "l"),
        right: simpleQuery("ds", "r"),
        name: "product",
        op: { Builtin: "Mul" },
        aggregates: [],
        directives: new Map(),
        params: [],
      },
    };
    const steps = await interpret(query);
    expect(steps[steps.length - 1][0].values).toEqual([12]);
  });

  it("compute Add", async () => {
    mockedLoadSeries
      .mockResolvedValueOnce([s({ h: "a" }, [0], [10])])
      .mockResolvedValueOnce([s({ h: "a" }, [0], [20])]);

    const query: Query = {
      Compute: {
        left: simpleQuery("ds", "l"),
        right: simpleQuery("ds", "r"),
        name: "sum",
        op: { Builtin: "Add" },
        aggregates: [],
        directives: new Map(),
        params: [],
      },
    };
    const steps = await interpret(query);
    expect(steps[steps.length - 1][0].values).toEqual([30]);
  });

  it("compute Sub", async () => {
    mockedLoadSeries
      .mockResolvedValueOnce([s({ h: "a" }, [0], [30])])
      .mockResolvedValueOnce([s({ h: "a" }, [0], [10])]);

    const query: Query = {
      Compute: {
        left: simpleQuery("ds", "l"),
        right: simpleQuery("ds", "r"),
        name: "diff",
        op: { Builtin: "Sub" },
        aggregates: [],
        directives: new Map(),
        params: [],
      },
    };
    const steps = await interpret(query);
    expect(steps[steps.length - 1][0].values).toEqual([20]);
  });

  it("compute Avg", async () => {
    mockedLoadSeries
      .mockResolvedValueOnce([s({ h: "a" }, [0], [10])])
      .mockResolvedValueOnce([s({ h: "a" }, [0], [30])]);

    const query: Query = {
      Compute: {
        left: simpleQuery("ds", "l"),
        right: simpleQuery("ds", "r"),
        name: "avg",
        op: { Builtin: "Avg" },
        aggregates: [],
        directives: new Map(),
        params: [],
      },
    };
    const steps = await interpret(query);
    expect(steps[steps.length - 1][0].values).toEqual([20]);
  });

  it("compute Min", async () => {
    mockedLoadSeries
      .mockResolvedValueOnce([s({ h: "a" }, [0], [10])])
      .mockResolvedValueOnce([s({ h: "a" }, [0], [5])]);

    const query: Query = {
      Compute: {
        left: simpleQuery("ds", "l"),
        right: simpleQuery("ds", "r"),
        name: "min",
        op: { Builtin: "Min" },
        aggregates: [],
        directives: new Map(),
        params: [],
      },
    };
    const steps = await interpret(query);
    expect(steps[steps.length - 1][0].values).toEqual([5]);
  });

  it("compute Max", async () => {
    mockedLoadSeries
      .mockResolvedValueOnce([s({ h: "a" }, [0], [10])])
      .mockResolvedValueOnce([s({ h: "a" }, [0], [50])]);

    const query: Query = {
      Compute: {
        left: simpleQuery("ds", "l"),
        right: simpleQuery("ds", "r"),
        name: "max",
        op: { Builtin: "Max" },
        aggregates: [],
        directives: new Map(),
        params: [],
      },
    };
    const steps = await interpret(query);
    expect(steps[steps.length - 1][0].values).toEqual([50]);
  });

  it("compute Div by zero throws", async () => {
    mockedLoadSeries
      .mockResolvedValueOnce([s({ h: "a" }, [0], [10])])
      .mockResolvedValueOnce([s({ h: "a" }, [0], [0])]);

    const query: Query = {
      Compute: {
        left: simpleQuery("ds", "l"),
        right: simpleQuery("ds", "r"),
        name: "ratio",
        op: { Builtin: "Div" },
        aggregates: [],
        directives: new Map(),
        params: [],
      },
    };
    await expect(interpret(query)).rejects.toThrow("Division by zero");
  });
});

describe("bucket operations", () => {
  it("bucket with percentile", async () => {
    mockedLoadSeries.mockResolvedValue([
      s({ handler: "api", le: "0.1" }, [0, 60], [10, 20]),
      s({ handler: "api", le: "0.5" }, [0, 60], [50, 80]),
      s({ handler: "api", le: "1.0" }, [0, 60], [100, 100]),
    ]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Bucket: {
              span: { offset: 0, length: 0 },
              function: "Histogram",
              time: { Concrete: { value: 120, unit: "Second" } },
              tags: ["handler"],
              spec: [{ Percentile: 0.5 }],
            },
          },
        ],
      ),
    );
    const last = steps[steps.length - 1];
    expect(last).toHaveLength(1);
    expect(last[0].tags.handler).toBe("api");
    expect(last[0].tags.spec).toBe("p50");
  });

  it("bucket with Count spec", async () => {
    mockedLoadSeries.mockResolvedValue([s({ handler: "api", le: "0.5" }, [0, 60], [10, 20])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Bucket: {
              span: { offset: 0, length: 0 },
              function: "Histogram",
              time: { Concrete: { value: 120, unit: "Second" } },
              tags: ["handler"],
              spec: ["Count"],
            },
          },
        ],
      ),
    );
    expect(steps[steps.length - 1][0].tags.spec).toBe("Count");
  });

  it("bucket with Sum spec", async () => {
    mockedLoadSeries.mockResolvedValue([s({ handler: "api", le: "0.5" }, [0, 60], [10, 20])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Bucket: {
              span: { offset: 0, length: 0 },
              function: "Histogram",
              time: { Concrete: { value: 120, unit: "Second" } },
              tags: ["handler"],
              spec: ["Sum"],
            },
          },
        ],
      ),
    );
    expect(steps[steps.length - 1][0].values[0]).toBe(30);
  });

  it("bucket with Avg spec", async () => {
    mockedLoadSeries.mockResolvedValue([s({ handler: "api", le: "0.5" }, [0, 60], [10, 20])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Bucket: {
              span: { offset: 0, length: 0 },
              function: "Histogram",
              time: { Concrete: { value: 120, unit: "Second" } },
              tags: ["handler"],
              spec: ["Avg"],
            },
          },
        ],
      ),
    );
    expect(steps[steps.length - 1][0].values[0]).toBe(15);
  });

  it("bucket with Min spec", async () => {
    mockedLoadSeries.mockResolvedValue([s({ handler: "api", le: "0.5" }, [0, 60], [10, 20])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Bucket: {
              span: { offset: 0, length: 0 },
              function: "Histogram",
              time: { Concrete: { value: 120, unit: "Second" } },
              tags: ["handler"],
              spec: ["Min"],
            },
          },
        ],
      ),
    );
    expect(steps[steps.length - 1][0].values[0]).toBe(10);
  });

  it("bucket with Max spec", async () => {
    mockedLoadSeries.mockResolvedValue([s({ handler: "api", le: "0.5" }, [0, 60], [10, 20])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Bucket: {
              span: { offset: 0, length: 0 },
              function: "Histogram",
              time: { Concrete: { value: 120, unit: "Second" } },
              tags: ["handler"],
              spec: ["Max"],
            },
          },
        ],
      ),
    );
    expect(steps[steps.length - 1][0].values[0]).toBe(20);
  });
});

describe("time unit conversions", () => {
  it("Millisecond", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0, 1], [10, 20])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Align: {
              function: { Builtin: "Sum" },
              time: { Concrete: { value: 2000, unit: "Millisecond" } },
            },
          },
        ],
      ),
    );
    expect(steps[1][0].timestamps).toEqual([0]);
  });

  it("Hour", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0, 1800, 3600, 5400], [1, 2, 3, 4])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Align: { function: { Builtin: "Sum" }, time: { Concrete: { value: 1, unit: "Hour" } } },
          },
        ],
      ),
    );
    expect(steps[1][0].values).toEqual([3, 7]);
  });

  it("Year throws", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0], [1])]);
    await expect(
      interpret(
        simpleQuery(
          "ds",
          "m",
          [],
          [
            {
              Align: {
                function: { Builtin: "Sum" },
                time: { Concrete: { value: 1, unit: "Year" } },
              },
            },
          ],
        ),
      ),
    ).rejects.toThrow("Year time unit is not supported");
  });
});

describe("step cloning", () => {
  it("mutating returned series does not affect earlier steps", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0, 60], [10, 20])]);
    const steps = await interpret(
      simpleQuery("ds", "m", [], [{ Map: { function: { Builtin: "Mul" }, arg: 2 } }]),
    );
    expect(steps[0][0].values).toEqual([10, 20]);
    expect(steps[1][0].values).toEqual([20, 40]);
    steps[1][0].values[0] = 999;
    expect(steps[0][0].values[0]).toBe(10);
  });
});

describe("compute with post-aggregates", () => {
  it("applies map after compute", async () => {
    mockedLoadSeries
      .mockResolvedValueOnce([s({ h: "a" }, [0, 60], [10, 20])])
      .mockResolvedValueOnce([s({ h: "a" }, [0, 60], [2, 4])]);

    const query: Query = {
      Compute: {
        left: simpleQuery("ds", "l"),
        right: simpleQuery("ds", "r"),
        name: "ratio",
        op: { Builtin: "Div" },
        aggregates: [{ Map: { function: { Builtin: "Mul" }, arg: 100 } }],
        directives: new Map(),
        params: [],
      },
    };
    const steps = await interpret(query);
    const last = steps[steps.length - 1];
    expect(last[0].values).toEqual([500, 500]);
  });
});

describe("coverage gaps", () => {
  it("Day time unit", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0, 43200, 86400, 129600], [1, 2, 3, 4])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Align: { function: { Builtin: "Sum" }, time: { Concrete: { value: 1, unit: "Day" } } },
          },
        ],
      ),
    );
    expect(steps[1][0].values).toEqual([3, 7]);
  });

  it("Week time unit", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0, 302400, 604800], [1, 2, 3])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Align: { function: { Builtin: "Sum" }, time: { Concrete: { value: 1, unit: "Week" } } },
          },
        ],
      ),
    );
    expect(steps[1][0].values).toEqual([3, 3]);
  });

  it("RegEx filter with string pattern (not RegExp object)", async () => {
    mockedLoadSeries.mockResolvedValue([
      s({ path: "/api" }, [0], [1]),
      s({ path: "/health" }, [0], [2]),
    ]);
    const steps = await interpret(
      simpleQuery("ds", "m", [
        { Cmp: { field: "path", rhs: { RegEx: { Concrete: "^/api" as unknown as RegExp } } } },
      ]),
    );
    expect(steps[1]).toHaveLength(1);
  });

  it("RegExNot filter with string pattern", async () => {
    mockedLoadSeries.mockResolvedValue([
      s({ path: "/api" }, [0], [1]),
      s({ path: "/health" }, [0], [2]),
    ]);
    const steps = await interpret(
      simpleQuery("ds", "m", [
        { Cmp: { field: "path", rhs: { RegExNot: { Concrete: "^/api" as unknown as RegExp } } } },
      ]),
    );
    expect(steps[1]).toHaveLength(1);
    expect(steps[1][0].tags.path).toBe("/health");
  });

  it("align with empty window produces NaN", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0, 200], [10, 20])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Align: {
              function: { Builtin: "Sum" },
              time: { Concrete: { value: 60, unit: "Second" } },
            },
          },
        ],
      ),
    );
    // Windows at 0, 60, 120, 180 — window 60 and 120 have no points
    expect(steps[1][0].values[0]).toBe(10);
    expect(steps[1][0].values[1]).toBeNaN();
  });

  it("align Rate with fewer than 2 points produces NaN", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0, 200], [10, 20])]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Align: {
              function: { Builtin: "Rate" },
              time: { Concrete: { value: 60, unit: "Second" } },
            },
          },
        ],
      ),
    );
    // Window at 0 has 1 point, window at 60 has 0 points — both NaN
    expect(steps[1][0].values[0]).toBeNaN();
  });

  it("align using Min, Max, Count, Last via reduceTimePts", async () => {
    mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0, 30, 60, 90], [5, 15, 25, 35])]);

    for (const fn of ["Min", "Max", "Count", "Last"] as const) {
      mockedLoadSeries.mockResolvedValue([s({ h: "a" }, [0, 30, 60, 90], [5, 15, 25, 35])]);
      const steps = await interpret(
        simpleQuery(
          "ds",
          "m",
          [],
          [
            {
              Align: {
                function: { Builtin: fn },
                time: { Concrete: { value: 60, unit: "Second" } },
              },
            },
          ],
        ),
      );
      const v = steps[1][0].values;
      switch (fn) {
        case "Min":
          expect(v).toEqual([5, 25]);
          break;
        case "Max":
          expect(v).toEqual([15, 35]);
          break;
        case "Count":
          expect(v).toEqual([2, 2]);
          break;
        case "Last":
          expect(v).toEqual([15, 35]);
          break;
      }
    }
  });

  it("computePercentile at first bucket (i === 0)", async () => {
    mockedLoadSeries.mockResolvedValue([
      s({ handler: "api", le: "0.1" }, [0, 60], [90, 90]),
      s({ handler: "api", le: "1.0" }, [0, 60], [100, 100]),
    ]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Bucket: {
              span: { offset: 0, length: 0 },
              function: "Histogram",
              time: { Concrete: { value: 120, unit: "Second" } },
              tags: ["handler"],
              spec: [{ Percentile: 0.5 }],
            },
          },
        ],
      ),
    );
    // 50th percentile should fall in the first bucket range
    expect(steps[steps.length - 1][0].values[0]).toBeLessThanOrEqual(0.1);
  });

  it("bucket with series missing le tag (skipped)", async () => {
    mockedLoadSeries.mockResolvedValue([
      s({ handler: "api", le: "0.5" }, [0, 60], [50, 80]),
      s({ handler: "api" }, [0, 60], [10, 20]), // no le tag — should be skipped for percentile
    ]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [
          {
            Bucket: {
              span: { offset: 0, length: 0 },
              function: "Histogram",
              time: { Concrete: { value: 120, unit: "Second" } },
              tags: ["handler"],
              spec: ["Count"],
            },
          },
        ],
      ),
    );
    expect(steps[steps.length - 1]).toHaveLength(1);
  });
});

describe("InterpolateLinear consecutive NaN gaps", () => {
  it("interpolates across multiple consecutive NaN values", async () => {
    mockedLoadSeries.mockResolvedValue([
      s({ h: "a" }, [0, 60, 120, 180, 240], [10, NaN, NaN, NaN, 50]),
    ]);
    const steps = await interpret(
      simpleQuery(
        "ds",
        "m",
        [],
        [{ Map: { function: { Builtin: "InterpolateLinear" }, arg: undefined } }],
      ),
    );
    const v = steps[1][0].values;
    expect(v[0]).toBe(10);
    expect(v[1]).toBe(20);
    expect(v[2]).toBe(30);
    expect(v[3]).toBe(40);
    expect(v[4]).toBe(50);
  });
});
