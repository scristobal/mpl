var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const s of r) if (s.type === "childList") for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: true, subtree: true });
  function t(r) {
    const s = {};
    return r.integrity && (s.integrity = r.integrity), r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function i(r) {
    if (r.ep) return;
    r.ep = true;
    const s = t(r);
    fetch(r.href, s);
  }
})();
let Kh = [], V0 = [];
(() => {
  let n = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < n.length; e++) (e % 2 ? V0 : Kh).push(t = t + n[e]);
})();
function lx(n) {
  if (n < 768) return false;
  for (let e = 0, t = Kh.length; ; ) {
    let i = e + t >> 1;
    if (n < Kh[i]) t = i;
    else if (n >= V0[i]) e = i + 1;
    else return true;
    if (e == t) return false;
  }
}
function Yp(n) {
  return n >= 127462 && n <= 127487;
}
const Jp = 8205;
function ax(n, e, t = true, i = true) {
  return (t ? z0 : cx)(n, e, i);
}
function z0(n, e, t) {
  if (e == n.length) return e;
  e && K0(n.charCodeAt(e)) && $0(n.charCodeAt(e - 1)) && e--;
  let i = Yf(n, e);
  for (e += Qp(i); e < n.length; ) {
    let r = Yf(n, e);
    if (i == Jp || r == Jp || t && lx(r)) e += Qp(r), i = r;
    else if (Yp(r)) {
      let s = 0, o = e - 2;
      for (; o >= 0 && Yp(Yf(n, o)); ) s++, o -= 2;
      if (s % 2 == 0) break;
      e += 2;
    } else break;
  }
  return e;
}
function cx(n, e, t) {
  for (; e > 0; ) {
    let i = z0(n, e - 2, t);
    if (i < e) return i;
    e--;
  }
  return 0;
}
function Yf(n, e) {
  let t = n.charCodeAt(e);
  if (!$0(t) || e + 1 == n.length) return t;
  let i = n.charCodeAt(e + 1);
  return K0(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function K0(n) {
  return n >= 56320 && n < 57344;
}
function $0(n) {
  return n >= 55296 && n < 56320;
}
function Qp(n) {
  return n < 65536 ? 1 : 2;
}
let Qe = class j0 {
  lineAt(e) {
    if (e < 0 || e > this.length) throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, false, 1, 0);
  }
  line(e) {
    if (e < 1 || e > this.lines) throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, true, 1, 0);
  }
  replace(e, t, i) {
    [e, t] = Mo(this, e, t);
    let r = [];
    return this.decompose(0, e, r, 2), i.length && i.decompose(0, i.length, r, 3), this.decompose(t, this.length, r, 1), ir.from(r, this.length - (t - e) + i.length);
  }
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  slice(e, t = this.length) {
    [e, t] = Mo(this, e, t);
    let i = [];
    return this.decompose(e, t, i, 0), ir.from(i, t - e);
  }
  eq(e) {
    if (e == this) return true;
    if (e.length != this.length || e.lines != this.lines) return false;
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), r = new _l(this), s = new _l(e);
    for (let o = t, l = t; ; ) {
      if (r.next(o), s.next(o), o = 0, r.lineBreak != s.lineBreak || r.done != s.done || r.value != s.value) return false;
      if (l += r.value.length, r.done || l >= i) return true;
    }
  }
  iter(e = 1) {
    return new _l(this, e);
  }
  iterRange(e, t = this.length) {
    return new U0(this, e, t);
  }
  iterLines(e, t) {
    let i;
    if (e == null) i = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let r = this.line(e).from;
      i = this.iterRange(r, Math.max(r, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new q0(i);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  constructor() {
  }
  static of(e) {
    if (e.length == 0) throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? j0.empty : e.length <= 32 ? new Dt(e) : ir.from(Dt.split(e, []));
  }
};
class Dt extends Qe {
  constructor(e, t = fx(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, i, r) {
    for (let s = 0; ; s++) {
      let o = this.text[s], l = r + o.length;
      if ((t ? i : l) >= e) return new hx(r, l, i, o);
      r = l + 1, i++;
    }
  }
  decompose(e, t, i, r) {
    let s = e <= 0 && t >= this.length ? this : new Dt(Xp(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (r & 1) {
      let o = i.pop(), l = hc(s.text, o.text.slice(), 0, s.length);
      if (l.length <= 32) i.push(new Dt(l, o.length + s.length));
      else {
        let a = l.length >> 1;
        i.push(new Dt(l.slice(0, a)), new Dt(l.slice(a)));
      }
    } else i.push(s);
  }
  replace(e, t, i) {
    if (!(i instanceof Dt)) return super.replace(e, t, i);
    [e, t] = Mo(this, e, t);
    let r = hc(this.text, hc(i.text, Xp(this.text, 0, e)), t), s = this.length + i.length - (t - e);
    return r.length <= 32 ? new Dt(r, s) : ir.from(Dt.split(r, []), s);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Mo(this, e, t);
    let r = "";
    for (let s = 0, o = 0; s <= t && o < this.text.length; o++) {
      let l = this.text[o], a = s + l.length;
      s > e && o && (r += i), e < a && t > s && (r += l.slice(Math.max(0, e - s), t - s)), s = a + 1;
    }
    return r;
  }
  flatten(e) {
    for (let t of this.text) e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let i = [], r = -1;
    for (let s of e) i.push(s), r += s.length + 1, i.length == 32 && (t.push(new Dt(i, r)), i = [], r = -1);
    return r > -1 && t.push(new Dt(i, r)), t;
  }
}
class ir extends Qe {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let i of e) this.lines += i.lines;
  }
  lineInner(e, t, i, r) {
    for (let s = 0; ; s++) {
      let o = this.children[s], l = r + o.length, a = i + o.lines - 1;
      if ((t ? a : l) >= e) return o.lineInner(e, t, i, r);
      r = l + 1, i = a + 1;
    }
  }
  decompose(e, t, i, r) {
    for (let s = 0, o = 0; o <= t && s < this.children.length; s++) {
      let l = this.children[s], a = o + l.length;
      if (e <= a && t >= o) {
        let f = r & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !f ? i.push(l) : l.decompose(e - o, t - o, i, f);
      }
      o = a + 1;
    }
  }
  replace(e, t, i) {
    if ([e, t] = Mo(this, e, t), i.lines < this.lines) for (let r = 0, s = 0; r < this.children.length; r++) {
      let o = this.children[r], l = s + o.length;
      if (e >= s && t <= l) {
        let a = o.replace(e - s, t - s, i), f = this.lines - o.lines + a.lines;
        if (a.lines < f >> 4 && a.lines > f >> 6) {
          let h = this.children.slice();
          return h[r] = a, new ir(h, this.length - (t - e) + i.length);
        }
        return super.replace(s, l, a);
      }
      s = l + 1;
    }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Mo(this, e, t);
    let r = "";
    for (let s = 0, o = 0; s < this.children.length && o <= t; s++) {
      let l = this.children[s], a = o + l.length;
      o > e && s && (r += i), e < a && t > o && (r += l.sliceString(e - o, t - o, i)), o = a + 1;
    }
    return r;
  }
  flatten(e) {
    for (let t of this.children) t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof ir)) return 0;
    let i = 0, [r, s, o, l] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; r += t, s += t) {
      if (r == o || s == l) return i;
      let a = this.children[r], f = e.children[s];
      if (a != f) return i + a.scanIdentical(f, t);
      i += a.length + 1;
    }
  }
  static from(e, t = e.reduce((i, r) => i + r.length + 1, -1)) {
    let i = 0;
    for (let b of e) i += b.lines;
    if (i < 32) {
      let b = [];
      for (let x of e) x.flatten(b);
      return new Dt(b, t);
    }
    let r = Math.max(32, i >> 5), s = r << 1, o = r >> 1, l = [], a = 0, f = -1, h = [];
    function p(b) {
      let x;
      if (b.lines > s && b instanceof ir) for (let C of b.children) p(C);
      else b.lines > o && (a > o || !a) ? (m(), l.push(b)) : b instanceof Dt && a && (x = h[h.length - 1]) instanceof Dt && b.lines + x.lines <= 32 ? (a += b.lines, f += b.length + 1, h[h.length - 1] = new Dt(x.text.concat(b.text), x.length + 1 + b.length)) : (a + b.lines > r && m(), a += b.lines, f += b.length + 1, h.push(b));
    }
    function m() {
      a != 0 && (l.push(h.length == 1 ? h[0] : ir.from(h, f)), f = -1, a = h.length = 0);
    }
    for (let b of e) p(b);
    return m(), l.length == 1 ? l[0] : new ir(l, t);
  }
}
Qe.empty = new Dt([""], 0);
function fx(n) {
  let e = -1;
  for (let t of n) e += t.length + 1;
  return e;
}
function hc(n, e, t = 0, i = 1e9) {
  for (let r = 0, s = 0, o = true; s < n.length && r <= i; s++) {
    let l = n[s], a = r + l.length;
    a >= t && (a > i && (l = l.slice(0, i - r)), r < t && (l = l.slice(t - r)), o ? (e[e.length - 1] += l, o = false) : e.push(l)), r = a + 1;
  }
  return e;
}
function Xp(n, e, t) {
  return hc(n, [""], e, t);
}
class _l {
  constructor(e, t = 1) {
    this.dir = t, this.done = false, this.lineBreak = false, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof Dt ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = false; ; ) {
      let i = this.nodes.length - 1, r = this.nodes[i], s = this.offsets[i], o = s >> 1, l = r instanceof Dt ? r.text.length : r.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (i == 0) return this.done = true, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((s & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0) return this.lineBreak = true, this.value = `
`, this;
        e--;
      } else if (r instanceof Dt) {
        let a = r.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, a.length > Math.max(0, e)) return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = r.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof Dt ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class U0 {
  constructor(e, t, i) {
    this.value = "", this.done = false, this.cursor = new _l(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = true, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let i = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), i -= e;
    let { value: r } = this.cursor.next(e);
    return this.pos += (r.length + e) * t, this.value = r.length <= i ? r : t < 0 ? r.slice(r.length - i) : r.slice(0, i), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class q0 {
  constructor(e) {
    this.inner = e, this.afterBreak = true, this.value = "", this.done = false;
  }
  next(e = 0) {
    let { done: t, lineBreak: i, value: r } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = false) : t ? (this.done = true, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = true, this.next()) : (this.value = r, this.afterBreak = false), this;
  }
  get lineBreak() {
    return false;
  }
}
typeof Symbol < "u" && (Qe.prototype[Symbol.iterator] = function() {
  return this.iter();
}, _l.prototype[Symbol.iterator] = U0.prototype[Symbol.iterator] = q0.prototype[Symbol.iterator] = function() {
  return this;
});
class hx {
  constructor(e, t, i, r) {
    this.from = e, this.to = t, this.number = i, this.text = r;
  }
  get length() {
    return this.to - this.from;
  }
}
function Mo(n, e, t) {
  return e = Math.max(0, Math.min(n.length, e)), [e, Math.max(e, Math.min(n.length, t))];
}
function en(n, e, t = true, i = true) {
  return ax(n, e, t, i);
}
function ux(n) {
  return n >= 56320 && n < 57344;
}
function dx(n) {
  return n >= 55296 && n < 56320;
}
function Wn(n, e) {
  let t = n.charCodeAt(e);
  if (!dx(t) || e + 1 == n.length) return t;
  let i = n.charCodeAt(e + 1);
  return ux(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function dd(n) {
  return n <= 65535 ? String.fromCharCode(n) : (n -= 65536, String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320));
}
function rr(n) {
  return n < 65536 ? 1 : 2;
}
const $h = /\r\n?|\n/;
var an = (function(n) {
  return n[n.Simple = 0] = "Simple", n[n.TrackDel = 1] = "TrackDel", n[n.TrackBefore = 2] = "TrackBefore", n[n.TrackAfter = 3] = "TrackAfter", n;
})(an || (an = {}));
class fr {
  constructor(e) {
    this.sections = e;
  }
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) e += this.sections[t];
    return e;
  }
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t + 1];
      e += i < 0 ? this.sections[t] : i;
    }
    return e;
  }
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  iterGaps(e) {
    for (let t = 0, i = 0, r = 0; t < this.sections.length; ) {
      let s = this.sections[t++], o = this.sections[t++];
      o < 0 ? (e(i, r, s), r += s) : r += o, i += s;
    }
  }
  iterChangedRanges(e, t = false) {
    jh(this, e, t);
  }
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], r = this.sections[t++];
      r < 0 ? e.push(i, r) : e.push(r, i);
    }
    return new fr(e);
  }
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : G0(this, e);
  }
  mapDesc(e, t = false) {
    return e.empty ? this : Uh(this, e, t);
  }
  mapPos(e, t = -1, i = an.Simple) {
    let r = 0, s = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], f = r + l;
      if (a < 0) {
        if (f > e) return s + (e - r);
        s += l;
      } else {
        if (i != an.Simple && f >= e && (i == an.TrackDel && r < e && f > e || i == an.TrackBefore && r < e || i == an.TrackAfter && f > e)) return null;
        if (f > e || f == e && t < 0 && !l) return e == r || t < 0 ? s : s + a;
        s += a;
      }
      r = f;
    }
    if (e > r) throw new RangeError(`Position ${e} is out of range for changeset of length ${r}`);
    return s;
  }
  touchesRange(e, t = e) {
    for (let i = 0, r = 0; i < this.sections.length && r <= t; ) {
      let s = this.sections[i++], o = this.sections[i++], l = r + s;
      if (o >= 0 && r <= t && l >= e) return r < e && l > t ? "cover" : true;
      r = l;
    }
    return false;
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], r = this.sections[t++];
      e += (e ? " " : "") + i + (r >= 0 ? ":" + r : "");
    }
    return e;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number")) throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new fr(e);
  }
  static create(e) {
    return new fr(e);
  }
}
class qt extends fr {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  apply(e) {
    if (this.length != e.length) throw new RangeError("Applying change set to a document with the wrong length");
    return jh(this, (t, i, r, s, o) => e = e.replace(r, r + (i - t), o), false), e;
  }
  mapDesc(e, t = false) {
    return Uh(this, e, t, true);
  }
  invert(e) {
    let t = this.sections.slice(), i = [];
    for (let r = 0, s = 0; r < t.length; r += 2) {
      let o = t[r], l = t[r + 1];
      if (l >= 0) {
        t[r] = l, t[r + 1] = o;
        let a = r >> 1;
        for (; i.length < a; ) i.push(Qe.empty);
        i.push(o ? e.slice(s, s + o) : Qe.empty);
      }
      s += o;
    }
    return new qt(t, i);
  }
  compose(e) {
    return this.empty ? e : e.empty ? this : G0(this, e, true);
  }
  map(e, t = false) {
    return e.empty ? this : Uh(this, e, t, true);
  }
  iterChanges(e, t = false) {
    jh(this, e, t);
  }
  get desc() {
    return fr.create(this.sections);
  }
  filter(e) {
    let t = [], i = [], r = [], s = new jl(this);
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++];
      for (; l < a || l == a && s.len == 0; ) {
        if (s.done) break e;
        let h = Math.min(s.len, a - l);
        gn(r, h, -1);
        let p = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0;
        gn(t, h, p), p > 0 && jr(i, t, s.text), s.forward(h), l += h;
      }
      let f = e[o++];
      for (; l < f; ) {
        if (s.done) break e;
        let h = Math.min(s.len, f - l);
        gn(t, h, -1), gn(r, h, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0), s.forward(h), l += h;
      }
    }
    return { changes: new qt(t, i), filtered: fr.create(r) };
  }
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t], r = this.sections[t + 1];
      r < 0 ? e.push(i) : r == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  static of(e, t, i) {
    let r = [], s = [], o = 0, l = null;
    function a(h = false) {
      if (!h && !r.length) return;
      o < t && gn(r, t - o, -1);
      let p = new qt(r, s);
      l = l ? l.compose(p.map(l)) : p, r = [], s = [], o = 0;
    }
    function f(h) {
      if (Array.isArray(h)) for (let p of h) f(p);
      else if (h instanceof qt) {
        if (h.length != t) throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${t})`);
        a(), l = l ? l.compose(h.map(l)) : h;
      } else {
        let { from: p, to: m = p, insert: b } = h;
        if (p > m || p < 0 || m > t) throw new RangeError(`Invalid change range ${p} to ${m} (in doc of length ${t})`);
        let x = b ? typeof b == "string" ? Qe.of(b.split(i || $h)) : b : Qe.empty, C = x.length;
        if (p == m && C == 0) return;
        p < o && a(), p > o && gn(r, p - o, -1), gn(r, m - p, C), jr(s, r, x), o = m;
      }
    }
    return f(e), a(!l), l;
  }
  static empty(e) {
    return new qt(e ? [e, -1] : [], []);
  }
  static fromJSON(e) {
    if (!Array.isArray(e)) throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], i = [];
    for (let r = 0; r < e.length; r++) {
      let s = e[r];
      if (typeof s == "number") t.push(s, -1);
      else {
        if (!Array.isArray(s) || typeof s[0] != "number" || s.some((o, l) => l && typeof o != "string")) throw new RangeError("Invalid JSON representation of ChangeSet");
        if (s.length == 1) t.push(s[0], 0);
        else {
          for (; i.length < r; ) i.push(Qe.empty);
          i[r] = Qe.of(s.slice(1)), t.push(s[0], i[r].length);
        }
      }
    }
    return new qt(t, i);
  }
  static createSet(e, t) {
    return new qt(e, t);
  }
}
function gn(n, e, t, i = false) {
  if (e == 0 && t <= 0) return;
  let r = n.length - 2;
  r >= 0 && t <= 0 && t == n[r + 1] ? n[r] += e : r >= 0 && e == 0 && n[r] == 0 ? n[r + 1] += t : i ? (n[r] += e, n[r + 1] += t) : n.push(e, t);
}
function jr(n, e, t) {
  if (t.length == 0) return;
  let i = e.length - 2 >> 1;
  if (i < n.length) n[n.length - 1] = n[n.length - 1].append(t);
  else {
    for (; n.length < i; ) n.push(Qe.empty);
    n.push(t);
  }
}
function jh(n, e, t) {
  let i = n.inserted;
  for (let r = 0, s = 0, o = 0; o < n.sections.length; ) {
    let l = n.sections[o++], a = n.sections[o++];
    if (a < 0) r += l, s += l;
    else {
      let f = r, h = s, p = Qe.empty;
      for (; f += l, h += a, a && i && (p = p.append(i[o - 2 >> 1])), !(t || o == n.sections.length || n.sections[o + 1] < 0); ) l = n.sections[o++], a = n.sections[o++];
      e(r, f, s, h, p), r = f, s = h;
    }
  }
}
function Uh(n, e, t, i = false) {
  let r = [], s = i ? [] : null, o = new jl(n), l = new jl(e);
  for (let a = -1; ; ) {
    if (o.done && l.len || l.done && o.len) throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && l.ins == -1) {
      let f = Math.min(o.len, l.len);
      gn(r, f, -1), o.forward(f), l.forward(f);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let f = l.len;
      for (gn(r, l.ins, -1); f; ) {
        let h = Math.min(o.len, f);
        o.ins >= 0 && a < o.i && o.len <= h && (gn(r, 0, o.ins), s && jr(s, r, o.text), a = o.i), o.forward(h), f -= h;
      }
      l.next();
    } else if (o.ins >= 0) {
      let f = 0, h = o.len;
      for (; h; ) if (l.ins == -1) {
        let p = Math.min(h, l.len);
        f += p, h -= p, l.forward(p);
      } else if (l.ins == 0 && l.len < h) h -= l.len, l.next();
      else break;
      gn(r, f, a < o.i ? o.ins : 0), s && a < o.i && jr(s, r, o.text), a = o.i, o.forward(o.len - h);
    } else {
      if (o.done && l.done) return s ? qt.createSet(r, s) : fr.create(r);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function G0(n, e, t = false) {
  let i = [], r = t ? [] : null, s = new jl(n), o = new jl(e);
  for (let l = false; ; ) {
    if (s.done && o.done) return r ? qt.createSet(i, r) : fr.create(i);
    if (s.ins == 0) gn(i, s.len, 0, l), s.next();
    else if (o.len == 0 && !o.done) gn(i, 0, o.ins, l), r && jr(r, i, o.text), o.next();
    else {
      if (s.done || o.done) throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(s.len2, o.len), f = i.length;
        if (s.ins == -1) {
          let h = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          gn(i, a, h, l), r && h && jr(r, i, o.text);
        } else o.ins == -1 ? (gn(i, s.off ? 0 : s.len, a, l), r && jr(r, i, s.textBit(a))) : (gn(i, s.off ? 0 : s.len, o.off ? 0 : o.ins, l), r && !o.off && jr(r, i, o.text));
        l = (s.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > f), s.forward2(a), o.forward(a);
      }
    }
  }
}
class jl {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, t = this.i - 2 >> 1;
    return t >= e.length ? Qe.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, i = this.i - 2 >> 1;
    return i >= t.length && !e ? Qe.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class Ms {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.flags = i;
  }
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  map(e, t = -1) {
    let i, r;
    return this.empty ? i = r = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), r = e.mapPos(this.to, -1)), i == this.from && r == this.to ? this : new Ms(i, r, this.flags);
  }
  extend(e, t = e, i = 0) {
    if (e <= this.anchor && t >= this.anchor) return j.range(e, t, void 0, void 0, i);
    let r = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return j.range(this.anchor, r, void 0, void 0, i);
  }
  eq(e, t = false) {
    return this.anchor == e.anchor && this.head == e.head && this.goalColumn == e.goalColumn && (!t || !this.empty || this.assoc == e.assoc);
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number") throw new RangeError("Invalid JSON representation for SelectionRange");
    return j.range(e.anchor, e.head);
  }
  static create(e, t, i) {
    return new Ms(e, t, i);
  }
}
class j {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  map(e, t = -1) {
    return e.empty ? this : j.create(this.ranges.map((i) => i.map(e, t)), this.mainIndex);
  }
  eq(e, t = false) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex) return false;
    for (let i = 0; i < this.ranges.length; i++) if (!this.ranges[i].eq(e.ranges[i], t)) return false;
    return true;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new j([this.main], 0);
  }
  addRange(e, t = true) {
    return j.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice();
    return i[t] = e, j.create(i, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length) throw new RangeError("Invalid JSON representation for EditorSelection");
    return new j(e.ranges.map((t) => Ms.fromJSON(t)), e.main);
  }
  static single(e, t = e) {
    return new j([j.range(e, t)], 0);
  }
  static create(e, t = 0) {
    if (e.length == 0) throw new RangeError("A selection needs at least one range");
    for (let i = 0, r = 0; r < e.length; r++) {
      let s = e[r];
      if (s.empty ? s.from <= i : s.from < i) return j.normalized(e.slice(), t);
      i = s.to;
    }
    return new j(e, t);
  }
  static cursor(e, t = 0, i, r) {
    return Ms.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (r ?? 16777215) << 6);
  }
  static range(e, t, i, r, s) {
    let o = (i ?? 16777215) << 6 | (r == null ? 7 : Math.min(6, r));
    return !s && e != t && (s = t < e ? 1 : -1), t < e ? Ms.create(t, e, 48 | o) : Ms.create(e, t, (s ? s < 0 ? 8 : 16 : 0) | o);
  }
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((r, s) => r.from - s.from), t = e.indexOf(i);
    for (let r = 1; r < e.length; r++) {
      let s = e[r], o = e[r - 1];
      if (s.empty ? s.from <= o.to : s.from < o.to) {
        let l = o.from, a = Math.max(s.to, o.to);
        r <= t && t--, e.splice(--r, 2, s.anchor > s.head ? j.range(a, l) : j.range(l, a));
      }
    }
    return new j(e, t);
  }
}
function Y0(n, e) {
  for (let t of n.ranges) if (t.to > e) throw new RangeError("Selection points outside of document");
}
let pd = 0;
class ve {
  constructor(e, t, i, r, s) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = r, this.id = pd++, this.default = e([]), this.extensions = typeof s == "function" ? s(this) : s;
  }
  get reader() {
    return this;
  }
  static define(e = {}) {
    return new ve(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : gd), !!e.static, e.enables);
  }
  of(e) {
    return new uc([], this, 0, e);
  }
  compute(e, t) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new uc(e, this, 1, t);
  }
  computeN(e, t) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new uc(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function gd(n, e) {
  return n == e || n.length == e.length && n.every((t, i) => t === e[i]);
}
class uc {
  constructor(e, t, i, r) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = r, this.id = pd++;
  }
  dynamicSlot(e) {
    var t;
    let i = this.value, r = this.facet.compareInput, s = this.id, o = e[s] >> 1, l = this.type == 2, a = false, f = false, h = [];
    for (let p of this.dependencies) p == "doc" ? a = true : p == "selection" ? f = true : (((t = e[p.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && h.push(e[p.id]);
    return { create(p) {
      return p.values[o] = i(p), 1;
    }, update(p, m) {
      if (a && m.docChanged || f && (m.docChanged || m.selection) || qh(p, h)) {
        let b = i(p);
        if (l ? !Zp(b, p.values[o], r) : !r(b, p.values[o])) return p.values[o] = b, 1;
      }
      return 0;
    }, reconfigure: (p, m) => {
      let b, x = m.config.address[s];
      if (x != null) {
        let C = Tc(m, x);
        if (this.dependencies.every((E) => E instanceof ve ? m.facet(E) === p.facet(E) : E instanceof tn ? m.field(E, false) == p.field(E, false) : true) || (l ? Zp(b = i(p), C, r) : r(b = i(p), C))) return p.values[o] = C, 0;
      } else b = i(p);
      return p.values[o] = b, 1;
    } };
  }
}
function Zp(n, e, t) {
  if (n.length != e.length) return false;
  for (let i = 0; i < n.length; i++) if (!t(n[i], e[i])) return false;
  return true;
}
function qh(n, e) {
  let t = false;
  for (let i of e) Ll(n, i) & 1 && (t = true);
  return t;
}
function px(n, e, t) {
  let i = t.map((a) => n[a.id]), r = t.map((a) => a.type), s = i.filter((a) => !(a & 1)), o = n[e.id] >> 1;
  function l(a) {
    let f = [];
    for (let h = 0; h < i.length; h++) {
      let p = Tc(a, i[h]);
      if (r[h] == 2) for (let m of p) f.push(m);
      else f.push(p);
    }
    return e.combine(f);
  }
  return { create(a) {
    for (let f of i) Ll(a, f);
    return a.values[o] = l(a), 1;
  }, update(a, f) {
    if (!qh(a, s)) return 0;
    let h = l(a);
    return e.compare(h, a.values[o]) ? 0 : (a.values[o] = h, 1);
  }, reconfigure(a, f) {
    let h = qh(a, i), p = f.config.facets[e.id], m = f.facet(e);
    if (p && !h && gd(t, p)) return a.values[o] = m, 0;
    let b = l(a);
    return e.compare(b, m) ? (a.values[o] = m, 0) : (a.values[o] = b, 1);
  } };
}
const Da = ve.define({ static: true });
class tn {
  constructor(e, t, i, r, s) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = r, this.spec = s, this.provides = void 0;
  }
  static define(e) {
    let t = new tn(pd++, e.create, e.update, e.compare || ((i, r) => i === r), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(Da).find((i) => i.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  slot(e) {
    let t = e[this.id] >> 1;
    return { create: (i) => (i.values[t] = this.create(i), 1), update: (i, r) => {
      let s = i.values[t], o = this.updateF(s, r);
      return this.compareF(s, o) ? 0 : (i.values[t] = o, 1);
    }, reconfigure: (i, r) => {
      let s = i.facet(Da), o = r.facet(Da), l;
      return (l = s.find((a) => a.field == this)) && l != o.find((a) => a.field == this) ? (i.values[t] = l.create(i), 1) : r.config.address[this.id] != null ? (i.values[t] = r.field(this), 0) : (i.values[t] = this.create(i), 1);
    } };
  }
  init(e) {
    return [this, Da.of({ field: this, create: e })];
  }
  get extension() {
    return this;
  }
}
const ks = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function fl(n) {
  return (e) => new J0(e, n);
}
const Tr = { highest: fl(ks.highest), high: fl(ks.high), default: fl(ks.default), low: fl(ks.low), lowest: fl(ks.lowest) };
class J0 {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class tr {
  of(e) {
    return new Gh(this, e);
  }
  reconfigure(e) {
    return tr.reconfigure.of({ compartment: this, extension: e });
  }
  get(e) {
    return e.config.compartments.get(this);
  }
}
class Gh {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class Ac {
  constructor(e, t, i, r, s, o) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = i, this.address = r, this.staticValues = s, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < i.length; ) this.statusTemplate.push(0);
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, i) {
    let r = [], s = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let m of gx(e, t, o)) m instanceof tn ? r.push(m) : (s[m.facet.id] || (s[m.facet.id] = [])).push(m);
    let l = /* @__PURE__ */ Object.create(null), a = [], f = [];
    for (let m of r) l[m.id] = f.length << 1, f.push((b) => m.slot(b));
    let h = i == null ? void 0 : i.config.facets;
    for (let m in s) {
      let b = s[m], x = b[0].facet, C = h && h[m] || [];
      if (b.every((E) => E.type == 0)) if (l[x.id] = a.length << 1 | 1, gd(C, b)) a.push(i.facet(x));
      else {
        let E = x.combine(b.map((D) => D.value));
        a.push(i && x.compare(E, i.facet(x)) ? i.facet(x) : E);
      }
      else {
        for (let E of b) E.type == 0 ? (l[E.id] = a.length << 1 | 1, a.push(E.value)) : (l[E.id] = f.length << 1, f.push((D) => E.dynamicSlot(D)));
        l[x.id] = f.length << 1, f.push((E) => px(E, x, b));
      }
    }
    let p = f.map((m) => m(l));
    return new Ac(e, o, p, l, a, s);
  }
}
function gx(n, e, t) {
  let i = [[], [], [], [], []], r = /* @__PURE__ */ new Map();
  function s(o, l) {
    let a = r.get(o);
    if (a != null) {
      if (a <= l) return;
      let f = i[a].indexOf(o);
      f > -1 && i[a].splice(f, 1), o instanceof Gh && t.delete(o.compartment);
    }
    if (r.set(o, l), Array.isArray(o)) for (let f of o) s(f, l);
    else if (o instanceof Gh) {
      if (t.has(o.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
      let f = e.get(o.compartment) || o.inner;
      t.set(o.compartment, f), s(f, l);
    } else if (o instanceof J0) s(o.inner, o.prec);
    else if (o instanceof tn) i[l].push(o), o.provides && s(o.provides, l);
    else if (o instanceof uc) i[l].push(o), o.facet.extensions && s(o.facet.extensions, ks.default);
    else {
      let f = o.extension;
      if (!f) throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      s(f, l);
    }
  }
  return s(n, ks.default), i.reduce((o, l) => o.concat(l));
}
function Ll(n, e) {
  if (e & 1) return 2;
  let t = e >> 1, i = n.status[t];
  if (i == 4) throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2) return i;
  n.status[t] = 4;
  let r = n.computeSlot(n, n.config.dynamicSlots[t]);
  return n.status[t] = 2 | r;
}
function Tc(n, e) {
  return e & 1 ? n.config.staticValues[e >> 1] : n.values[e >> 1];
}
const Q0 = ve.define(), Yh = ve.define({ combine: (n) => n.some((e) => e), static: true }), X0 = ve.define({ combine: (n) => n.length ? n[0] : void 0, static: true }), Z0 = ve.define(), ev = ve.define(), tv = ve.define(), nv = ve.define({ combine: (n) => n.length ? n[0] : false });
class Er {
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  static define() {
    return new mx();
  }
}
class mx {
  of(e) {
    return new Er(this, e);
  }
}
class vx {
  constructor(e) {
    this.map = e;
  }
  of(e) {
    return new Te(this, e);
  }
}
class Te {
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new Te(this.type, t);
  }
  is(e) {
    return this.type == e;
  }
  static define(e = {}) {
    return new vx(e.map || ((t) => t));
  }
  static mapEffects(e, t) {
    if (!e.length) return e;
    let i = [];
    for (let r of e) {
      let s = r.map(t);
      s && i.push(s);
    }
    return i;
  }
}
Te.reconfigure = Te.define();
Te.appendConfig = Te.define();
class Gt {
  constructor(e, t, i, r, s, o) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = r, this.annotations = s, this.scrollIntoView = o, this._doc = null, this._state = null, i && Y0(i, t.newLength), s.some((l) => l.type == Gt.time) || (this.annotations = s.concat(Gt.time.of(Date.now())));
  }
  static create(e, t, i, r, s, o) {
    return new Gt(e, t, i, r, s, o);
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  annotation(e) {
    for (let t of this.annotations) if (t.type == e) return t.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(e) {
    let t = this.annotation(Gt.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
Gt.time = Er.define();
Gt.userEvent = Er.define();
Gt.addToHistory = Er.define();
Gt.remote = Er.define();
function yx(n, e) {
  let t = [];
  for (let i = 0, r = 0; ; ) {
    let s, o;
    if (i < n.length && (r == e.length || e[r] >= n[i])) s = n[i++], o = n[i++];
    else if (r < e.length) s = e[r++], o = e[r++];
    else return t;
    !t.length || t[t.length - 1] < s ? t.push(s, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function iv(n, e, t) {
  var i;
  let r, s, o;
  return t ? (r = e.changes, s = qt.empty(e.changes.length), o = n.changes.compose(e.changes)) : (r = e.changes.map(n.changes), s = n.changes.mapDesc(e.changes, true), o = n.changes.compose(r)), { changes: o, selection: e.selection ? e.selection.map(s) : (i = n.selection) === null || i === void 0 ? void 0 : i.map(r), effects: Te.mapEffects(n.effects, r).concat(Te.mapEffects(e.effects, s)), annotations: n.annotations.length ? n.annotations.concat(e.annotations) : e.annotations, scrollIntoView: n.scrollIntoView || e.scrollIntoView };
}
function Jh(n, e, t) {
  let i = e.selection, r = go(e.annotations);
  return e.userEvent && (r = r.concat(Gt.userEvent.of(e.userEvent))), { changes: e.changes instanceof qt ? e.changes : qt.of(e.changes || [], t, n.facet(X0)), selection: i && (i instanceof j ? i : j.single(i.anchor, i.head)), effects: go(e.effects), annotations: r, scrollIntoView: !!e.scrollIntoView };
}
function rv(n, e, t) {
  let i = Jh(n, e.length ? e[0] : {}, n.doc.length);
  e.length && e[0].filter === false && (t = false);
  for (let s = 1; s < e.length; s++) {
    e[s].filter === false && (t = false);
    let o = !!e[s].sequential;
    i = iv(i, Jh(n, e[s], o ? i.changes.newLength : n.doc.length), o);
  }
  let r = Gt.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return wx(t ? bx(r) : r);
}
function bx(n) {
  let e = n.startState, t = true;
  for (let r of e.facet(Z0)) {
    let s = r(n);
    if (s === false) {
      t = false;
      break;
    }
    Array.isArray(s) && (t = t === true ? s : yx(t, s));
  }
  if (t !== true) {
    let r, s;
    if (t === false) s = n.changes.invertedDesc, r = qt.empty(e.doc.length);
    else {
      let o = n.changes.filter(t);
      r = o.changes, s = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    n = Gt.create(e, r, n.selection && n.selection.map(s), Te.mapEffects(n.effects, s), n.annotations, n.scrollIntoView);
  }
  let i = e.facet(ev);
  for (let r = i.length - 1; r >= 0; r--) {
    let s = i[r](n);
    s instanceof Gt ? n = s : Array.isArray(s) && s.length == 1 && s[0] instanceof Gt ? n = s[0] : n = rv(e, go(s), false);
  }
  return n;
}
function wx(n) {
  let e = n.startState, t = e.facet(tv), i = n;
  for (let r = t.length - 1; r >= 0; r--) {
    let s = t[r](n);
    s && Object.keys(s).length && (i = iv(i, Jh(e, s, n.changes.newLength), true));
  }
  return i == n ? n : Gt.create(e, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView);
}
const xx = [];
function go(n) {
  return n == null ? xx : Array.isArray(n) ? n : [n];
}
var kt = (function(n) {
  return n[n.Word = 0] = "Word", n[n.Space = 1] = "Space", n[n.Other = 2] = "Other", n;
})(kt || (kt = {}));
const kx = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Qh;
try {
  Qh = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function Sx(n) {
  if (Qh) return Qh.test(n);
  for (let e = 0; e < n.length; e++) {
    let t = n[e];
    if (/\w/.test(t) || t > "\x80" && (t.toUpperCase() != t.toLowerCase() || kx.test(t))) return true;
  }
  return false;
}
function Cx(n) {
  return (e) => {
    if (!/\S/.test(e)) return kt.Space;
    if (Sx(e)) return kt.Word;
    for (let t = 0; t < n.length; t++) if (e.indexOf(n[t]) > -1) return kt.Word;
    return kt.Other;
  };
}
class Ke {
  constructor(e, t, i, r, s, o) {
    this.config = e, this.doc = t, this.selection = i, this.values = r, this.status = e.statusTemplate.slice(), this.computeSlot = s, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++) Ll(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = true) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t) throw new RangeError("Field is not present in this state");
      return;
    }
    return Ll(this, i), Tc(this, i);
  }
  update(...e) {
    return rv(this, e, true);
  }
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: r } = t;
    for (let l of e.effects) l.is(tr.reconfigure) ? (t && (r = /* @__PURE__ */ new Map(), t.compartments.forEach((a, f) => r.set(f, a)), t = null), r.set(l.value.compartment, l.value.extension)) : l.is(Te.reconfigure) ? (t = null, i = l.value) : l.is(Te.appendConfig) && (t = null, i = go(i).concat(l.value));
    let s;
    t ? s = e.startState.values.slice() : (t = Ac.resolve(i, r, this), s = new Ke(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (a, f) => f.reconfigure(a, this), null).values);
    let o = e.startState.facet(Yh) ? e.newSelection : e.newSelection.asSingle();
    new Ke(t, e.newDoc, o, s, (l, a) => a.update(l, e), e);
  }
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({ changes: { from: t.from, to: t.to, insert: e }, range: j.cursor(t.from + e.length) }));
  }
  changeByRange(e) {
    let t = this.selection, i = e(t.ranges[0]), r = this.changes(i.changes), s = [i.range], o = go(i.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), f = this.changes(a.changes), h = f.map(r);
      for (let m = 0; m < l; m++) s[m] = s[m].map(h);
      let p = r.mapDesc(f, true);
      s.push(a.range.map(p)), r = r.compose(h), o = Te.mapEffects(o, h).concat(Te.mapEffects(go(a.effects), p));
    }
    return { changes: r, selection: j.create(s, t.mainIndex), effects: o };
  }
  changes(e = []) {
    return e instanceof qt ? e : qt.of(e, this.doc.length, this.facet(Ke.lineSeparator));
  }
  toText(e) {
    return Qe.of(e.split(this.facet(Ke.lineSeparator) || $h));
  }
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (Ll(this, t), Tc(this, t));
  }
  toJSON(e) {
    let t = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
    if (e) for (let i in e) {
      let r = e[i];
      r instanceof tn && this.config.address[r.id] != null && (t[i] = r.spec.toJSON(this.field(e[i]), this));
    }
    return t;
  }
  static fromJSON(e, t = {}, i) {
    if (!e || typeof e.doc != "string") throw new RangeError("Invalid JSON representation for EditorState");
    let r = [];
    if (i) {
      for (let s in i) if (Object.prototype.hasOwnProperty.call(e, s)) {
        let o = i[s], l = e[s];
        r.push(o.init((a) => o.spec.fromJSON(l, a)));
      }
    }
    return Ke.create({ doc: e.doc, selection: j.fromJSON(e.selection), extensions: t.extensions ? r.concat([t.extensions]) : r });
  }
  static create(e = {}) {
    let t = Ac.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof Qe ? e.doc : Qe.of((e.doc || "").split(t.staticFacet(Ke.lineSeparator) || $h)), r = e.selection ? e.selection instanceof j ? e.selection : j.single(e.selection.anchor, e.selection.head) : j.single(0);
    return Y0(r, i.length), t.staticFacet(Yh) || (r = r.asSingle()), new Ke(t, i, r, t.dynamicSlots.map(() => null), (s, o) => o.create(s), null);
  }
  get tabSize() {
    return this.facet(Ke.tabSize);
  }
  get lineBreak() {
    return this.facet(Ke.lineSeparator) || `
`;
  }
  get readOnly() {
    return this.facet(nv);
  }
  phrase(e, ...t) {
    for (let i of this.facet(Ke.phrases)) if (Object.prototype.hasOwnProperty.call(i, e)) {
      e = i[e];
      break;
    }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (i, r) => {
      if (r == "$") return "$";
      let s = +(r || 1);
      return !s || s > t.length ? i : t[s - 1];
    })), e;
  }
  languageDataAt(e, t, i = -1) {
    let r = [];
    for (let s of this.facet(Q0)) for (let o of s(this, t, i)) Object.prototype.hasOwnProperty.call(o, e) && r.push(o[e]);
    return r;
  }
  charCategorizer(e) {
    let t = this.languageDataAt("wordChars", e);
    return Cx(t.length ? t[0] : "");
  }
  wordAt(e) {
    let { text: t, from: i, length: r } = this.doc.lineAt(e), s = this.charCategorizer(e), o = e - i, l = e - i;
    for (; o > 0; ) {
      let a = en(t, o, false);
      if (s(t.slice(a, o)) != kt.Word) break;
      o = a;
    }
    for (; l < r; ) {
      let a = en(t, l);
      if (s(t.slice(l, a)) != kt.Word) break;
      l = a;
    }
    return o == l ? null : j.range(o + i, l + i);
  }
}
Ke.allowMultipleSelections = Yh;
Ke.tabSize = ve.define({ combine: (n) => n.length ? n[0] : 4 });
Ke.lineSeparator = X0;
Ke.readOnly = nv;
Ke.phrases = ve.define({ compare(n, e) {
  let t = Object.keys(n), i = Object.keys(e);
  return t.length == i.length && t.every((r) => n[r] == e[r]);
} });
Ke.languageData = Q0;
Ke.changeFilter = Z0;
Ke.transactionFilter = ev;
Ke.transactionExtender = tv;
tr.reconfigure = Te.define();
function Or(n, e, t = {}) {
  let i = {};
  for (let r of n) for (let s of Object.keys(r)) {
    let o = r[s], l = i[s];
    if (l === void 0) i[s] = o;
    else if (!(l === o || o === void 0)) if (Object.hasOwnProperty.call(t, s)) i[s] = t[s](l, o);
    else throw new Error("Config merge conflict for field " + s);
  }
  for (let r in e) i[r] === void 0 && (i[r] = e[r]);
  return i;
}
class Gr {
  eq(e) {
    return this == e;
  }
  range(e, t = e) {
    return Xh.create(e, t, this);
  }
}
Gr.prototype.startSide = Gr.prototype.endSide = 0;
Gr.prototype.point = false;
Gr.prototype.mapMode = an.TrackDel;
function md(n, e) {
  return n == e || n.constructor == e.constructor && n.eq(e);
}
let Xh = class sv {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  static create(e, t, i) {
    return new sv(e, t, i);
  }
};
function Zh(n, e) {
  return n.from - e.from || n.value.startSide - e.value.startSide;
}
class vd {
  constructor(e, t, i, r) {
    this.from = e, this.to = t, this.value = i, this.maxPoint = r;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(e, t, i, r = 0) {
    let s = i ? this.to : this.from;
    for (let o = r, l = s.length; ; ) {
      if (o == l) return o;
      let a = o + l >> 1, f = s[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o) return f >= 0 ? o : l;
      f >= 0 ? l = a : o = a + 1;
    }
  }
  between(e, t, i, r) {
    for (let s = this.findIndex(t, -1e9, true), o = this.findIndex(i, 1e9, false, s); s < o; s++) if (r(this.from[s] + e, this.to[s] + e, this.value[s]) === false) return false;
  }
  map(e, t) {
    let i = [], r = [], s = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let f = this.value[a], h = this.from[a] + e, p = this.to[a] + e, m, b;
      if (h == p) {
        let x = t.mapPos(h, f.startSide, f.mapMode);
        if (x == null || (m = b = x, f.startSide != f.endSide && (b = t.mapPos(h, f.endSide), b < m))) continue;
      } else if (m = t.mapPos(h, f.startSide), b = t.mapPos(p, f.endSide), m > b || m == b && f.startSide > 0 && f.endSide <= 0) continue;
      (b - m || f.endSide - f.startSide) < 0 || (o < 0 && (o = m), f.point && (l = Math.max(l, b - m)), i.push(f), r.push(m - o), s.push(b - o));
    }
    return { mapped: i.length ? new vd(r, s, i, l) : null, pos: o };
  }
}
class He {
  constructor(e, t, i, r) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = r;
  }
  static create(e, t, i, r) {
    return new He(e, t, i, r);
  }
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty) return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk) e += t.value.length;
    return e;
  }
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  update(e) {
    let { add: t = [], sort: i = false, filterFrom: r = 0, filterTo: s = this.length } = e, o = e.filter;
    if (t.length == 0 && !o) return this;
    if (i && (t = t.slice().sort(Zh)), this.isEmpty) return t.length ? He.of(t) : this;
    let l = new ov(this, null, -1).goto(0), a = 0, f = [], h = new Bi();
    for (; l.value || a < t.length; ) if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
      let p = t[a++];
      h.addInner(p.from, p.to, p.value) || f.push(p);
    } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || r > this.chunkEnd(l.chunkIndex) || s < this.chunkPos[l.chunkIndex]) && h.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || r > l.to || s < l.from || o(l.from, l.to, l.value)) && (h.addInner(l.from, l.to, l.value) || f.push(Xh.create(l.from, l.to, l.value))), l.next());
    return h.finishInner(this.nextLayer.isEmpty && !f.length ? He.empty : this.nextLayer.update({ add: f, filter: o, filterFrom: r, filterTo: s }));
  }
  map(e) {
    if (e.empty || this.isEmpty) return this;
    let t = [], i = [], r = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], f = e.touchesRange(l, l + a.length);
      if (f === false) r = Math.max(r, a.maxPoint), t.push(a), i.push(e.mapPos(l));
      else if (f === true) {
        let { mapped: h, pos: p } = a.map(l, e);
        h && (r = Math.max(r, h.maxPoint), t.push(h), i.push(p));
      }
    }
    let s = this.nextLayer.map(e);
    return t.length == 0 ? s : new He(i, t, s || He.empty, r);
  }
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let r = 0; r < this.chunk.length; r++) {
        let s = this.chunkPos[r], o = this.chunk[r];
        if (t >= s && e <= s + o.length && o.between(s, e - s, t - s, i) === false) return;
      }
      this.nextLayer.between(e, t, i);
    }
  }
  iter(e = 0) {
    return Ul.from([this]).goto(e);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e, t = 0) {
    return Ul.from(e).goto(t);
  }
  static compare(e, t, i, r, s = -1) {
    let o = e.filter((p) => p.maxPoint > 0 || !p.isEmpty && p.maxPoint >= s), l = t.filter((p) => p.maxPoint > 0 || !p.isEmpty && p.maxPoint >= s), a = eg(o, l, i), f = new hl(o, a, s), h = new hl(l, a, s);
    i.iterGaps((p, m, b) => tg(f, p, h, m, b, r)), i.empty && i.length == 0 && tg(f, 0, h, 0, 0, r);
  }
  static eq(e, t, i = 0, r) {
    r == null && (r = 999999999);
    let s = e.filter((h) => !h.isEmpty && t.indexOf(h) < 0), o = t.filter((h) => !h.isEmpty && e.indexOf(h) < 0);
    if (s.length != o.length) return false;
    if (!s.length) return true;
    let l = eg(s, o), a = new hl(s, l, 0).goto(i), f = new hl(o, l, 0).goto(i);
    for (; ; ) {
      if (a.to != f.to || !eu(a.active, f.active) || a.point && (!f.point || !md(a.point, f.point))) return false;
      if (a.to > r) return true;
      a.next(), f.next();
    }
  }
  static spans(e, t, i, r, s = -1) {
    let o = new hl(e, null, s).goto(t), l = t, a = o.openStart;
    for (; ; ) {
      let f = Math.min(o.to, i);
      if (o.point) {
        let h = o.activeForPoint(o.to), p = o.pointFrom < t ? h.length + 1 : o.point.startSide < 0 ? h.length : Math.min(h.length, a);
        r.point(l, f, o.point, h, p, o.pointRank), a = Math.min(o.openEnd(f), h.length);
      } else f > l && (r.span(l, f, o.active, a), a = o.openEnd(f));
      if (o.to > i) return a + (o.point && o.to > i ? 1 : 0);
      l = o.to, o.next();
    }
  }
  static of(e, t = false) {
    let i = new Bi();
    for (let r of e instanceof Xh ? [e] : t ? Mx(e) : e) i.add(r.from, r.to, r.value);
    return i.finish();
  }
  static join(e) {
    if (!e.length) return He.empty;
    let t = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--) for (let r = e[i]; r != He.empty; r = r.nextLayer) t = new He(r.chunkPos, r.chunk, t, Math.max(r.maxPoint, t.maxPoint));
    return t;
  }
}
He.empty = new He([], [], null, -1);
function Mx(n) {
  if (n.length > 1) for (let e = n[0], t = 1; t < n.length; t++) {
    let i = n[t];
    if (Zh(e, i) > 0) return n.slice().sort(Zh);
    e = i;
  }
  return n;
}
He.empty.nextLayer = He.empty;
class Bi {
  finishChunk(e) {
    this.chunks.push(new vd(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  add(e, t, i) {
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new Bi())).add(e, t, i);
  }
  addInner(e, t, i) {
    let r = e - this.lastTo || i.startSide - this.last.endSide;
    if (r <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return r < 0 ? false : (this.from.length == 250 && this.finishChunk(true), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = i, this.lastFrom = e, this.lastTo = t, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), true);
  }
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0) return false;
    this.from.length && this.finishChunk(true), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let i = t.value.length - 1;
    return this.last = t.value[i], this.lastFrom = t.from[i] + e, this.lastTo = t.to[i] + e, true;
  }
  finish() {
    return this.finishInner(He.empty);
  }
  finishInner(e) {
    if (this.from.length && this.finishChunk(false), this.chunks.length == 0) return e;
    let t = He.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function eg(n, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let s of n) for (let o = 0; o < s.chunk.length; o++) s.chunk[o].maxPoint <= 0 && i.set(s.chunk[o], s.chunkPos[o]);
  let r = /* @__PURE__ */ new Set();
  for (let s of e) for (let o = 0; o < s.chunk.length; o++) {
    let l = i.get(s.chunk[o]);
    l != null && (t ? t.mapPos(l) : l) == s.chunkPos[o] && !(t == null ? void 0 : t.touchesRange(l, l + s.chunk[o].length)) && r.add(s.chunk[o]);
  }
  return r;
}
class ov {
  constructor(e, t, i, r = 0) {
    this.layer = e, this.skip = t, this.minPoint = i, this.rank = r;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, false), this;
  }
  gotoInner(e, t, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let r = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(r) || this.layer.chunkEnd(this.chunkIndex) < e || r.maxPoint < this.minPoint)) break;
      this.chunkIndex++, i = false;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let r = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, true);
      (!i || this.rangeIndex < r) && this.setRangeIndex(r);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, true);
  }
  next() {
    for (; ; ) if (this.chunkIndex == this.layer.chunk.length) {
      this.from = this.to = 1e9, this.value = null;
      break;
    } else {
      let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], i = e + t.from[this.rangeIndex];
      if (this.from = i, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break;
    }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip) for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); ) this.chunkIndex++;
      this.rangeIndex = 0;
    } else this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class Ul {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let r = [];
    for (let s = 0; s < e.length; s++) for (let o = e[s]; !o.isEmpty; o = o.nextLayer) o.maxPoint >= i && r.push(new ov(o, t, i, s));
    return r.length == 1 ? r[0] : new Ul(r);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap) i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--) Jf(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap) i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--) Jf(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0) this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), Jf(this.heap, 0);
    }
  }
}
function Jf(n, e) {
  for (let t = n[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= n.length) break;
    let r = n[i];
    if (i + 1 < n.length && r.compare(n[i + 1]) >= 0 && (r = n[i + 1], i++), t.compare(r) < 0) break;
    n[i] = t, n[e] = r, e = i;
  }
}
class hl {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Ul.from(e, t, i);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; ) this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    Ra(this.active, e), Ra(this.activeTo, e), Ra(this.activeRank, e), this.minActive = ng(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: r, rank: s } = this.cursor;
    for (; t < this.activeRank.length && (s - this.activeRank[t] || r - this.activeTo[t]) > 0; ) t++;
    Ba(this.active, t, i), Ba(this.activeTo, t, r), Ba(this.activeRank, t, s), e && Ba(e, t, this.cursor.from), this.minActive = ng(this.active, this.activeTo);
  }
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let r = this.minActive;
      if (r > -1 && (this.activeTo[r] - this.cursor.from || this.active[r].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[r] > e) {
          this.to = this.activeTo[r], this.endSide = this.active[r].endSide;
          break;
        }
        this.removeActive(r), i && Ra(i, r);
      } else if (this.cursor.value) if (this.cursor.from > e) {
        this.to = this.cursor.from, this.endSide = this.cursor.startSide;
        break;
      } else {
        let s = this.cursor.value;
        if (!s.point) this.addActive(i), this.cursor.next();
        else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next();
        else {
          this.point = s, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = s.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
          break;
        }
      }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let r = i.length - 1; r >= 0 && i[r] < e; r--) this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length) return this.active;
    let t = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--) (this.activeTo[i] > e || this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide) && t.push(this.active[i]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--) t++;
    return t;
  }
}
function tg(n, e, t, i, r, s) {
  n.goto(e), t.goto(i);
  let o = i + r, l = i, a = i - e, f = !!s.boundChange;
  for (let h = false; ; ) {
    let p = n.to + a - t.to, m = p || n.endSide - t.endSide, b = m < 0 ? n.to + a : t.to, x = Math.min(b, o);
    if (n.point || t.point ? (n.point && t.point && md(n.point, t.point) && eu(n.activeForPoint(n.to), t.activeForPoint(t.to)) || s.comparePoint(l, x, n.point, t.point), h = false) : (h && s.boundChange(l), x > l && !eu(n.active, t.active) && s.compareRange(l, x, n.active, t.active), f && x < o && (p || n.openEnd(b) != t.openEnd(b)) && (h = true)), b > o) break;
    l = b, m <= 0 && n.next(), m >= 0 && t.next();
  }
}
function eu(n, e) {
  if (n.length != e.length) return false;
  for (let t = 0; t < n.length; t++) if (n[t] != e[t] && !md(n[t], e[t])) return false;
  return true;
}
function Ra(n, e) {
  for (let t = e, i = n.length - 1; t < i; t++) n[t] = n[t + 1];
  n.pop();
}
function Ba(n, e, t) {
  for (let i = n.length - 1; i >= e; i--) n[i + 1] = n[i];
  n[e] = t;
}
function ng(n, e) {
  let t = -1, i = 1e9;
  for (let r = 0; r < e.length; r++) (e[r] - i || n[r].endSide - n[t].endSide) < 0 && (t = r, i = e[r]);
  return t;
}
function No(n, e, t = n.length) {
  let i = 0;
  for (let r = 0; r < t && r < n.length; ) n.charCodeAt(r) == 9 ? (i += e - i % e, r++) : (i++, r = en(n, r));
  return i;
}
function tu(n, e, t, i) {
  for (let r = 0, s = 0; ; ) {
    if (s >= e) return r;
    if (r == n.length) break;
    s += n.charCodeAt(r) == 9 ? t - s % t : 1, r = en(n, r);
  }
  return i === true ? -1 : n.length;
}
const nu = "\u037C", ig = typeof Symbol > "u" ? "__" + nu : Symbol.for(nu), iu = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : /* @__PURE__ */ Symbol("styleSet"), rg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Yr {
  constructor(e, t) {
    this.rules = [];
    let { finish: i } = t || {};
    function r(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function s(o, l, a, f) {
      let h = [], p = /^@(\w+)\b/.exec(o[0]), m = p && p[1] == "keyframes";
      if (p && l == null) return a.push(o[0] + ";");
      for (let b in l) {
        let x = l[b];
        if (/&/.test(b)) s(b.split(/,\s*/).map((C) => o.map((E) => C.replace(/&/, E))).reduce((C, E) => C.concat(E)), x, a);
        else if (x && typeof x == "object") {
          if (!p) throw new RangeError("The value of a property (" + b + ") should be a primitive value.");
          s(r(b), x, h, m);
        } else x != null && h.push(b.replace(/_.*/, "").replace(/[A-Z]/g, (C) => "-" + C.toLowerCase()) + ": " + x + ";");
      }
      (h.length || m) && a.push((i && !p && !f ? o.map(i) : o).join(", ") + " {" + h.join(" ") + "}");
    }
    for (let o in e) s(r(o), e[o], this.rules);
  }
  getRules() {
    return this.rules.join(`
`);
  }
  static newName() {
    let e = rg[ig] || 1;
    return rg[ig] = e + 1, nu + e.toString(36);
  }
  static mount(e, t, i) {
    let r = e[iu], s = i && i.nonce;
    r ? s && r.setNonce(s) : r = new Ax(e, s), r.mount(Array.isArray(t) ? t : [t], e);
  }
}
let sg = /* @__PURE__ */ new Map();
class Ax {
  constructor(e, t) {
    let i = e.ownerDocument || e, r = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && r.CSSStyleSheet) {
      let s = sg.get(i);
      if (s) return e[iu] = s;
      this.sheet = new r.CSSStyleSheet(), sg.set(i, this);
    } else this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[iu] = this;
  }
  mount(e, t) {
    let i = this.sheet, r = 0, s = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = this.modules.indexOf(l);
      if (a < s && a > -1 && (this.modules.splice(a, 1), s--, a = -1), a == -1) {
        if (this.modules.splice(s++, 0, l), i) for (let f = 0; f < l.rules.length; f++) i.insertRule(l.rules[f], r++);
      } else {
        for (; s < a; ) r += this.modules[s++].rules.length;
        r += l.rules.length, s++;
      }
    }
    if (i) t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++) o += this.modules[a].getRules() + `
`;
      this.styleTag.textContent = o;
      let l = t.head || t;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var Jr = { 8: "Backspace", 9: "Tab", 10: "Enter", 12: "NumLock", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 44: "PrintScreen", 45: "Insert", 46: "Delete", 59: ";", 61: "=", 91: "Meta", 92: "Meta", 106: "*", 107: "+", 108: ",", 109: "-", 110: ".", 111: "/", 144: "NumLock", 145: "ScrollLock", 160: "Shift", 161: "Shift", 162: "Control", 163: "Control", 164: "Alt", 165: "Alt", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }, ql = { 48: ")", 49: "!", 50: "@", 51: "#", 52: "$", 53: "%", 54: "^", 55: "&", 56: "*", 57: "(", 59: ":", 61: "+", 173: "_", 186: ":", 187: "+", 188: "<", 189: "_", 190: ">", 191: "?", 192: "~", 219: "{", 220: "|", 221: "}", 222: '"' }, Tx = typeof navigator < "u" && /Mac/.test(navigator.platform), Ex = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var ln = 0; ln < 10; ln++) Jr[48 + ln] = Jr[96 + ln] = String(ln);
for (var ln = 1; ln <= 24; ln++) Jr[ln + 111] = "F" + ln;
for (var ln = 65; ln <= 90; ln++) Jr[ln] = String.fromCharCode(ln + 32), ql[ln] = String.fromCharCode(ln);
for (var Qf in Jr) ql.hasOwnProperty(Qf) || (ql[Qf] = Jr[Qf]);
function Ox(n) {
  var e = Tx && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || Ex && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? ql : Jr)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
function lt() {
  var n = arguments[0];
  typeof n == "string" && (n = document.createElement(n));
  var e = 1, t = arguments[1];
  if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
    for (var i in t) if (Object.prototype.hasOwnProperty.call(t, i)) {
      var r = t[i];
      typeof r == "string" ? n.setAttribute(i, r) : r != null && (n[i] = r);
    }
    e++;
  }
  for (; e < arguments.length; e++) lv(n, arguments[e]);
  return n;
}
function lv(n, e) {
  if (typeof e == "string") n.appendChild(document.createTextNode(e));
  else if (e != null) if (e.nodeType != null) n.appendChild(e);
  else if (Array.isArray(e)) for (var t = 0; t < e.length; t++) lv(n, e[t]);
  else throw new RangeError("Unsupported child node: " + e);
}
let Ln = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, ru = typeof document < "u" ? document : { documentElement: { style: {} } };
const su = /Edge\/(\d+)/.exec(Ln.userAgent), av = /MSIE \d/.test(Ln.userAgent), ou = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ln.userAgent), cf = !!(av || ou || su), og = !cf && /gecko\/(\d+)/i.test(Ln.userAgent), Xf = !cf && /Chrome\/(\d+)/.exec(Ln.userAgent), _x = "webkitFontSmoothing" in ru.documentElement.style, lu = !cf && /Apple Computer/.test(Ln.vendor), lg = lu && (/Mobile\/\w+/.test(Ln.userAgent) || Ln.maxTouchPoints > 2);
var pe = { mac: lg || /Mac/.test(Ln.platform), windows: /Win/.test(Ln.platform), linux: /Linux|X11/.test(Ln.platform), ie: cf, ie_version: av ? ru.documentMode || 6 : ou ? +ou[1] : su ? +su[1] : 0, gecko: og, gecko_version: og ? +(/Firefox\/(\d+)/.exec(Ln.userAgent) || [0, 0])[1] : 0, chrome: !!Xf, chrome_version: Xf ? +Xf[1] : 0, ios: lg, android: /Android\b/.test(Ln.userAgent), webkit_version: _x ? +(/\bAppleWebKit\/(\d+)/.exec(Ln.userAgent) || [0, 0])[1] : 0, safari: lu, safari_version: lu ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(Ln.userAgent) || [0, 0])[1] : 0, tabSize: ru.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size" };
function yd(n, e) {
  for (let t in n) t == "class" && e.class ? e.class += " " + n.class : t == "style" && e.style ? e.style += ";" + n.style : e[t] = n[t];
  return e;
}
const Ec = /* @__PURE__ */ Object.create(null);
function bd(n, e, t) {
  if (n == e) return true;
  n || (n = Ec), e || (e = Ec);
  let i = Object.keys(n), r = Object.keys(e);
  if (i.length - 0 != r.length - 0) return false;
  for (let s of i) if (s != t && (r.indexOf(s) == -1 || n[s] !== e[s])) return false;
  return true;
}
function Lx(n, e) {
  for (let t = n.attributes.length - 1; t >= 0; t--) {
    let i = n.attributes[t].name;
    e[i] == null && n.removeAttribute(i);
  }
  for (let t in e) {
    let i = e[t];
    t == "style" ? n.style.cssText = i : n.getAttribute(t) != i && n.setAttribute(t, i);
  }
}
function ag(n, e, t) {
  let i = false;
  if (e) for (let r in e) t && r in t || (i = true, r == "style" ? n.style.cssText = "" : n.removeAttribute(r));
  if (t) for (let r in t) e && e[r] == t[r] || (i = true, r == "style" ? n.style.cssText = t[r] : n.setAttribute(r, t[r]));
  return i;
}
function Dx(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < n.attributes.length; t++) {
    let i = n.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class wi {
  eq(e) {
    return false;
  }
  updateDOM(e, t, i) {
    return false;
  }
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(e) {
    return true;
  }
  coordsAt(e, t, i) {
    return null;
  }
  get isHidden() {
    return false;
  }
  get editable() {
    return false;
  }
  destroy(e) {
  }
}
var fn = (function(n) {
  return n[n.Text = 0] = "Text", n[n.WidgetBefore = 1] = "WidgetBefore", n[n.WidgetAfter = 2] = "WidgetAfter", n[n.WidgetRange = 3] = "WidgetRange", n;
})(fn || (fn = {}));
class be extends Gr {
  constructor(e, t, i, r) {
    super(), this.startSide = e, this.endSide = t, this.widget = i, this.spec = r;
  }
  get heightRelevant() {
    return false;
  }
  static mark(e) {
    return new aa(e);
  }
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return t += i && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new Ns(e, t, t, i, e.widget || null, false);
  }
  static replace(e) {
    let t = !!e.block, i, r;
    if (e.isBlockGap) i = -5e8, r = 4e8;
    else {
      let { start: s, end: o } = cv(e, t);
      i = (s ? t ? -3e8 : -1 : 5e8) - 1, r = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new Ns(e, i, r, t, e.widget || null, true);
  }
  static line(e) {
    return new ca(e);
  }
  static set(e, t = false) {
    return He.of(e, t);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : false;
  }
}
be.none = He.empty;
class aa extends be {
  constructor(e) {
    let { start: t, end: i } = cv(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.attrs = e.class && e.attributes ? yd(e.attributes, { class: e.class }) : e.class ? { class: e.class } : e.attributes || Ec;
  }
  eq(e) {
    return this == e || e instanceof aa && this.tagName == e.tagName && bd(this.attrs, e.attrs);
  }
  range(e, t = e) {
    if (e >= t) throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
aa.prototype.point = false;
class ca extends be {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof ca && this.spec.class == e.spec.class && bd(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e) throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
ca.prototype.mapMode = an.TrackBefore;
ca.prototype.point = true;
class Ns extends be {
  constructor(e, t, i, r, s, o) {
    super(t, i, s, e), this.block = r, this.isReplace = o, this.mapMode = r ? t <= 0 ? an.TrackBefore : an.TrackAfter : an.TrackDel;
  }
  get type() {
    return this.startSide != this.endSide ? fn.WidgetRange : this.startSide <= 0 ? fn.WidgetBefore : fn.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof Ns && Rx(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e) throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
Ns.prototype.point = true;
function cv(n, e = false) {
  let { inclusiveStart: t, inclusiveEnd: i } = n;
  return t == null && (t = n.inclusive), i == null && (i = n.inclusive), { start: t ?? e, end: i ?? e };
}
function Rx(n, e) {
  return n == e || !!(n && e && n.compare(e));
}
function mo(n, e, t, i = 0) {
  let r = t.length - 1;
  r >= 0 && t[r] + i >= n ? t[r] = Math.max(t[r], e) : t.push(n, e);
}
class Gl extends Gr {
  constructor(e, t) {
    super(), this.tagName = e, this.attributes = t;
  }
  eq(e) {
    return e == this || e instanceof Gl && this.tagName == e.tagName && bd(this.attributes, e.attributes);
  }
  static create(e) {
    return new Gl(e.tagName, e.attributes || Ec);
  }
  static set(e, t = false) {
    return He.of(e, t);
  }
}
Gl.prototype.startSide = Gl.prototype.endSide = -1;
function Yl(n) {
  let e;
  return n.nodeType == 11 ? e = n.getSelection ? n : n.ownerDocument : e = n, e.getSelection();
}
function au(n, e) {
  return e ? n == e || n.contains(e.nodeType != 1 ? e.parentNode : e) : false;
}
function Dl(n, e) {
  if (!e.anchorNode) return false;
  try {
    return au(n, e.anchorNode);
  } catch {
    return false;
  }
}
function dc(n) {
  return n.nodeType == 3 ? Jl(n, 0, n.nodeValue.length).getClientRects() : n.nodeType == 1 ? n.getClientRects() : [];
}
function Rl(n, e, t, i) {
  return t ? cg(n, e, t, i, -1) || cg(n, e, t, i, 1) : false;
}
function Qr(n) {
  for (var e = 0; ; e++) if (n = n.previousSibling, !n) return e;
}
function Oc(n) {
  return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
function cg(n, e, t, i, r) {
  for (; ; ) {
    if (n == t && e == i) return true;
    if (e == (r < 0 ? 0 : Cr(n))) {
      if (n.nodeName == "DIV") return false;
      let s = n.parentNode;
      if (!s || s.nodeType != 1) return false;
      e = Qr(n) + (r < 0 ? 0 : 1), n = s;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (r < 0 ? -1 : 0)], n.nodeType == 1 && n.contentEditable == "false") return false;
      e = r < 0 ? Cr(n) : 0;
    } else return false;
  }
}
function Cr(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function _c(n, e) {
  let t = e ? n.left : n.right;
  return { left: t, right: t, top: n.top, bottom: n.bottom };
}
function Bx(n) {
  let e = n.visualViewport;
  return e ? { left: 0, right: e.width, top: 0, bottom: e.height } : { left: 0, right: n.innerWidth, top: 0, bottom: n.innerHeight };
}
function fv(n, e) {
  let t = e.width / n.offsetWidth, i = e.height / n.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - n.offsetWidth) < 1) && (t = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - n.offsetHeight) < 1) && (i = 1), { scaleX: t, scaleY: i };
}
function Px(n, e, t, i, r, s, o, l) {
  let a = n.ownerDocument, f = a.defaultView || window;
  for (let h = n, p = false; h && !p; ) if (h.nodeType == 1) {
    let m, b = h == a.body, x = 1, C = 1;
    if (b) m = Bx(f);
    else {
      if (/^(fixed|sticky)$/.test(getComputedStyle(h).position) && (p = true), h.scrollHeight <= h.clientHeight && h.scrollWidth <= h.clientWidth) {
        h = h.assignedSlot || h.parentNode;
        continue;
      }
      let R = h.getBoundingClientRect();
      ({ scaleX: x, scaleY: C } = fv(h, R)), m = { left: R.left, right: R.left + h.clientWidth * x, top: R.top, bottom: R.top + h.clientHeight * C };
    }
    let E = 0, D = 0;
    if (r == "nearest") e.top < m.top ? (D = e.top - (m.top + o), t > 0 && e.bottom > m.bottom + D && (D = e.bottom - m.bottom + o)) : e.bottom > m.bottom && (D = e.bottom - m.bottom + o, t < 0 && e.top - D < m.top && (D = e.top - (m.top + o)));
    else {
      let R = e.bottom - e.top, I = m.bottom - m.top;
      D = (r == "center" && R <= I ? e.top + R / 2 - I / 2 : r == "start" || r == "center" && t < 0 ? e.top - o : e.bottom - I + o) - m.top;
    }
    if (i == "nearest" ? e.left < m.left ? (E = e.left - (m.left + s), t > 0 && e.right > m.right + E && (E = e.right - m.right + s)) : e.right > m.right && (E = e.right - m.right + s, t < 0 && e.left < m.left + E && (E = e.left - (m.left + s))) : E = (i == "center" ? e.left + (e.right - e.left) / 2 - (m.right - m.left) / 2 : i == "start" == l ? e.left - s : e.right - (m.right - m.left) + s) - m.left, E || D) if (b) f.scrollBy(E, D);
    else {
      let R = 0, I = 0;
      if (D) {
        let z = h.scrollTop;
        h.scrollTop += D / C, I = (h.scrollTop - z) * C;
      }
      if (E) {
        let z = h.scrollLeft;
        h.scrollLeft += E / x, R = (h.scrollLeft - z) * x;
      }
      e = { left: e.left - R, top: e.top - I, right: e.right - R, bottom: e.bottom - I }, R && Math.abs(R - E) < 1 && (i = "nearest"), I && Math.abs(I - D) < 1 && (r = "nearest");
    }
    if (b) break;
    (e.top < m.top || e.bottom > m.bottom || e.left < m.left || e.right > m.right) && (e = { left: Math.max(e.left, m.left), right: Math.min(e.right, m.right), top: Math.max(e.top, m.top), bottom: Math.min(e.bottom, m.bottom) }), h = h.assignedSlot || h.parentNode;
  } else if (h.nodeType == 11) h = h.host;
  else break;
}
function hv(n, e = true) {
  let t = n.ownerDocument, i = null, r = null;
  for (let s = n.parentNode; s && !(s == t.body || (!e || i) && r); ) if (s.nodeType == 1) !r && s.scrollHeight > s.clientHeight && (r = s), e && !i && s.scrollWidth > s.clientWidth && (i = s), s = s.assignedSlot || s.parentNode;
  else if (s.nodeType == 11) s = s.host;
  else break;
  return { x: i, y: r };
}
class Ix {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: i } = e;
    this.set(t, Math.min(e.anchorOffset, t ? Cr(t) : 0), i, Math.min(e.focusOffset, i ? Cr(i) : 0));
  }
  set(e, t, i, r) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = i, this.focusOffset = r;
  }
}
let ms = null;
pe.safari && pe.safari_version >= 26 && (ms = false);
function uv(n) {
  if (n.setActive) return n.setActive();
  if (ms) return n.focus(ms);
  let e = [];
  for (let t = n; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode) ;
  if (n.focus(ms == null ? { get preventScroll() {
    return ms = { preventScroll: true }, true;
  } } : void 0), !ms) {
    ms = false;
    for (let t = 0; t < e.length; ) {
      let i = e[t++], r = e[t++], s = e[t++];
      i.scrollTop != r && (i.scrollTop = r), i.scrollLeft != s && (i.scrollLeft = s);
    }
  }
}
let fg;
function Jl(n, e, t = e) {
  let i = fg || (fg = document.createRange());
  return i.setEnd(n, t), i.setStart(n, e), i;
}
function vo(n, e, t, i) {
  let r = { key: e, code: e, keyCode: t, which: t, cancelable: true };
  i && ({ altKey: r.altKey, ctrlKey: r.ctrlKey, shiftKey: r.shiftKey, metaKey: r.metaKey } = i);
  let s = new KeyboardEvent("keydown", r);
  s.synthetic = true, n.dispatchEvent(s);
  let o = new KeyboardEvent("keyup", r);
  return o.synthetic = true, n.dispatchEvent(o), s.defaultPrevented || o.defaultPrevented;
}
function Nx(n) {
  for (; n; ) {
    if (n && (n.nodeType == 9 || n.nodeType == 11 && n.host)) return n;
    n = n.assignedSlot || n.parentNode;
  }
  return null;
}
function Fx(n, e) {
  let t = e.focusNode, i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i) return false;
  for (i = Math.min(i, Cr(t)); ; ) if (i) {
    if (t.nodeType != 1) return false;
    let r = t.childNodes[i - 1];
    r.contentEditable == "false" ? i-- : (t = r, i = Cr(t));
  } else {
    if (t == n) return true;
    i = Qr(t), t = t.parentNode;
  }
}
function dv(n) {
  return n instanceof Window ? n.pageYOffset > Math.max(0, n.document.documentElement.scrollHeight - n.innerHeight - 4) : n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4);
}
function pv(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i > 0) return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false") return null;
      t = t.childNodes[i - 1], i = Cr(t);
    } else if (t.parentNode && !Oc(t)) i = Qr(t), t = t.parentNode;
    else return null;
  }
}
function gv(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length) return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false") return null;
      t = t.childNodes[i], i = 0;
    } else if (t.parentNode && !Oc(t)) i = Qr(t) + 1, t = t.parentNode;
    else return null;
  }
}
class Di {
  constructor(e, t, i = true) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new Di(e.parentNode, Qr(e), t);
  }
  static after(e, t) {
    return new Di(e.parentNode, Qr(e) + 1, t);
  }
}
var at = (function(n) {
  return n[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL", n;
})(at || (at = {}));
const Fs = at.LTR, wd = at.RTL;
function mv(n) {
  let e = [];
  for (let t = 0; t < n.length; t++) e.push(1 << +n[t]);
  return e;
}
const Hx = mv("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), Wx = mv("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), cu = /* @__PURE__ */ Object.create(null), qi = [];
for (let n of ["()", "[]", "{}"]) {
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  cu[e] = t, cu[t] = -e;
}
function vv(n) {
  return n <= 247 ? Hx[n] : 1424 <= n && n <= 1524 ? 2 : 1536 <= n && n <= 1785 ? Wx[n - 1536] : 1774 <= n && n <= 2220 ? 4 : 8192 <= n && n <= 8204 ? 256 : 64336 <= n && n <= 65023 ? 4 : 1;
}
const Vx = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class or {
  get dir() {
    return this.level % 2 ? wd : Fs;
  }
  constructor(e, t, i) {
    this.from = e, this.to = t, this.level = i;
  }
  side(e, t) {
    return this.dir == t == e ? this.to : this.from;
  }
  forward(e, t) {
    return e == (this.dir == t);
  }
  static find(e, t, i, r) {
    let s = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == i) return o;
        (s < 0 || (r != 0 ? r < 0 ? l.from < t : l.to > t : e[s].level > l.level)) && (s = o);
      }
    }
    if (s < 0) throw new RangeError("Index out of range");
    return s;
  }
}
function yv(n, e) {
  if (n.length != e.length) return false;
  for (let t = 0; t < n.length; t++) {
    let i = n[t], r = e[t];
    if (i.from != r.from || i.to != r.to || i.direction != r.direction || !yv(i.inner, r.inner)) return false;
  }
  return true;
}
const ft = [];
function zx(n, e, t, i, r) {
  for (let s = 0; s <= i.length; s++) {
    let o = s ? i[s - 1].to : e, l = s < i.length ? i[s].from : t, a = s ? 256 : r;
    for (let f = o, h = a, p = a; f < l; f++) {
      let m = vv(n.charCodeAt(f));
      m == 512 ? m = h : m == 8 && p == 4 && (m = 16), ft[f] = m == 4 ? 2 : m, m & 7 && (p = m), h = m;
    }
    for (let f = o, h = a, p = a; f < l; f++) {
      let m = ft[f];
      if (m == 128) f < l - 1 && h == ft[f + 1] && h & 24 ? m = ft[f] = h : ft[f] = 256;
      else if (m == 64) {
        let b = f + 1;
        for (; b < l && ft[b] == 64; ) b++;
        let x = f && h == 8 || b < t && ft[b] == 8 ? p == 1 ? 1 : 8 : 256;
        for (let C = f; C < b; C++) ft[C] = x;
        f = b - 1;
      } else m == 8 && p == 1 && (ft[f] = 1);
      h = m, m & 7 && (p = m);
    }
  }
}
function Kx(n, e, t, i, r) {
  let s = r == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let f = o ? i[o - 1].to : e, h = o < i.length ? i[o].from : t;
    for (let p = f, m, b, x; p < h; p++) if (b = cu[m = n.charCodeAt(p)]) if (b < 0) {
      for (let C = l - 3; C >= 0; C -= 3) if (qi[C + 1] == -b) {
        let E = qi[C + 2], D = E & 2 ? r : E & 4 ? E & 1 ? s : r : 0;
        D && (ft[p] = ft[qi[C]] = D), l = C;
        break;
      }
    } else {
      if (qi.length == 189) break;
      qi[l++] = p, qi[l++] = m, qi[l++] = a;
    }
    else if ((x = ft[p]) == 2 || x == 1) {
      let C = x == r;
      a = C ? 0 : 1;
      for (let E = l - 3; E >= 0; E -= 3) {
        let D = qi[E + 2];
        if (D & 2) break;
        if (C) qi[E + 2] |= 2;
        else {
          if (D & 4) break;
          qi[E + 2] |= 4;
        }
      }
    }
  }
}
function $x(n, e, t, i) {
  for (let r = 0, s = i; r <= t.length; r++) {
    let o = r ? t[r - 1].to : n, l = r < t.length ? t[r].from : e;
    for (let a = o; a < l; ) {
      let f = ft[a];
      if (f == 256) {
        let h = a + 1;
        for (; ; ) if (h == l) {
          if (r == t.length) break;
          h = t[r++].to, l = r < t.length ? t[r].from : e;
        } else if (ft[h] == 256) h++;
        else break;
        let p = s == 1, m = (h < e ? ft[h] : i) == 1, b = p == m ? p ? 1 : 2 : i;
        for (let x = h, C = r, E = C ? t[C - 1].to : n; x > a; ) x == E && (x = t[--C].from, E = C ? t[C - 1].to : n), ft[--x] = b;
        a = h;
      } else s = f, a++;
    }
  }
}
function fu(n, e, t, i, r, s, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == r % 2) for (let a = e, f = 0; a < t; ) {
    let h = true, p = false;
    if (f == s.length || a < s[f].from) {
      let C = ft[a];
      C != l && (h = false, p = C == 16);
    }
    let m = !h && l == 1 ? [] : null, b = h ? i : i + 1, x = a;
    e: for (; ; ) if (f < s.length && x == s[f].from) {
      if (p) break e;
      let C = s[f];
      if (!h) for (let E = C.to, D = f + 1; ; ) {
        if (E == t) break e;
        if (D < s.length && s[D].from == E) E = s[D++].to;
        else {
          if (ft[E] == l) break e;
          break;
        }
      }
      if (f++, m) m.push(C);
      else {
        C.from > a && o.push(new or(a, C.from, b));
        let E = C.direction == Fs != !(b % 2);
        hu(n, E ? i + 1 : i, r, C.inner, C.from, C.to, o), a = C.to;
      }
      x = C.to;
    } else {
      if (x == t || (h ? ft[x] != l : ft[x] == l)) break;
      x++;
    }
    m ? fu(n, a, x, i + 1, r, m, o) : a < x && o.push(new or(a, x, b)), a = x;
  }
  else for (let a = t, f = s.length; a > e; ) {
    let h = true, p = false;
    if (!f || a > s[f - 1].to) {
      let C = ft[a - 1];
      C != l && (h = false, p = C == 16);
    }
    let m = !h && l == 1 ? [] : null, b = h ? i : i + 1, x = a;
    e: for (; ; ) if (f && x == s[f - 1].to) {
      if (p) break e;
      let C = s[--f];
      if (!h) for (let E = C.from, D = f; ; ) {
        if (E == e) break e;
        if (D && s[D - 1].to == E) E = s[--D].from;
        else {
          if (ft[E - 1] == l) break e;
          break;
        }
      }
      if (m) m.push(C);
      else {
        C.to < a && o.push(new or(C.to, a, b));
        let E = C.direction == Fs != !(b % 2);
        hu(n, E ? i + 1 : i, r, C.inner, C.from, C.to, o), a = C.from;
      }
      x = C.from;
    } else {
      if (x == e || (h ? ft[x - 1] != l : ft[x - 1] == l)) break;
      x--;
    }
    m ? fu(n, x, a, i + 1, r, m, o) : x < a && o.push(new or(x, a, b)), a = x;
  }
}
function hu(n, e, t, i, r, s, o) {
  let l = e % 2 ? 2 : 1;
  zx(n, r, s, i, l), Kx(n, r, s, i, l), $x(r, s, i, l), fu(n, r, s, e, t, i, o);
}
function jx(n, e, t) {
  if (!n) return [new or(0, 0, e == wd ? 1 : 0)];
  if (e == Fs && !t.length && !Vx.test(n)) return bv(n.length);
  if (t.length) for (; n.length > ft.length; ) ft[ft.length] = 256;
  let i = [], r = e == Fs ? 0 : 1;
  return hu(n, r, r, t, 0, n.length, i), i;
}
function bv(n) {
  return [new or(0, n, 0)];
}
let wv = "";
function Ux(n, e, t, i, r) {
  var s;
  let o = i.head - n.from, l = or.find(e, o, (s = i.bidiLevel) !== null && s !== void 0 ? s : -1, i.assoc), a = e[l], f = a.side(r, t);
  if (o == f) {
    let m = l += r ? 1 : -1;
    if (m < 0 || m >= e.length) return null;
    a = e[l = m], o = a.side(!r, t), f = a.side(r, t);
  }
  let h = en(n.text, o, a.forward(r, t));
  (h < a.from || h > a.to) && (h = f), wv = n.text.slice(Math.min(o, h), Math.max(o, h));
  let p = l == (r ? e.length - 1 : 0) ? null : e[l + (r ? 1 : -1)];
  return p && h == f && p.level + (r ? 0 : 1) < a.level ? j.cursor(p.side(!r, t) + n.from, p.forward(r, t) ? 1 : -1, p.level) : j.cursor(h + n.from, a.forward(r, t) ? -1 : 1, a.level);
}
function qx(n, e, t) {
  for (let i = e; i < t; i++) {
    let r = vv(n.charCodeAt(i));
    if (r == 1) return Fs;
    if (r == 2 || r == 4) return wd;
  }
  return Fs;
}
const xv = ve.define(), kv = ve.define(), Sv = ve.define(), Cv = ve.define(), uu = ve.define(), Mv = ve.define(), Av = ve.define(), xd = ve.define(), kd = ve.define(), Tv = ve.define({ combine: (n) => n.some((e) => e) }), Ev = ve.define({ combine: (n) => n.some((e) => e) }), Ov = ve.define();
class yo {
  constructor(e, t = "nearest", i = "nearest", r = 5, s = 5, o = false) {
    this.range = e, this.y = t, this.x = i, this.yMargin = r, this.xMargin = s, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new yo(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new yo(j.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Pa = Te.define({ map: (n, e) => n.map(e) }), _v = Te.define();
function Dn(n, e, t) {
  let i = n.facet(Cv);
  i.length ? i[0](e) : window.onerror && window.onerror(String(e), t, void 0, void 0, e) || (t ? console.error(t + ":", e) : console.error(e));
}
const yr = ve.define({ combine: (n) => n.length ? n[0] : true });
let Gx = 0;
const uo = ve.define({ combine(n) {
  return n.filter((e, t) => {
    for (let i = 0; i < t; i++) if (n[i].plugin == e.plugin) return false;
    return true;
  });
} });
class xt {
  constructor(e, t, i, r, s) {
    this.id = e, this.create = t, this.domEventHandlers = i, this.domEventObservers = r, this.baseExtensions = s(this), this.extension = this.baseExtensions.concat(uo.of({ plugin: this, arg: void 0 }));
  }
  of(e) {
    return this.baseExtensions.concat(uo.of({ plugin: this, arg: e }));
  }
  static define(e, t) {
    const { eventHandlers: i, eventObservers: r, provide: s, decorations: o } = t || {};
    return new xt(Gx++, e, i, r, (l) => {
      let a = [];
      return o && a.push(ff.of((f) => {
        let h = f.plugin(l);
        return h ? o(h) : be.none;
      })), s && a.push(s(l)), a;
    });
  }
  static fromClass(e, t) {
    return xt.define((i, r) => new e(i, r), t);
  }
}
class Zf {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  get plugin() {
    return this.spec && this.spec.plugin;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update) try {
          this.value.update(t);
        } catch (i) {
          if (Dn(t.state, i, "CodeMirror plugin crashed"), this.value.destroy) try {
            this.value.destroy();
          } catch {
          }
          this.deactivate();
        }
      }
    } else if (this.spec) try {
      this.value = this.spec.plugin.create(e, this.spec.arg);
    } catch (t) {
      Dn(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
    }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy) try {
      this.value.destroy();
    } catch (i) {
      Dn(e.state, i, "CodeMirror plugin crashed");
    }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Lv = ve.define(), Sd = ve.define(), ff = ve.define(), Dv = ve.define(), Cd = ve.define(), fa = ve.define(), Rv = ve.define();
function hg(n, e) {
  let t = n.state.facet(Rv);
  if (!t.length) return t;
  let i = t.map((s) => s instanceof Function ? s(n) : s), r = [];
  return He.spans(i, e.from, e.to, { point() {
  }, span(s, o, l, a) {
    let f = s - e.from, h = o - e.from, p = r;
    for (let m = l.length - 1; m >= 0; m--, a--) {
      let b = l[m].spec.bidiIsolate, x;
      if (b == null && (b = qx(e.text, f, h)), a > 0 && p.length && (x = p[p.length - 1]).to == f && x.direction == b) x.to = h, p = x.inner;
      else {
        let C = { from: f, to: h, direction: b, inner: [] };
        p.push(C), p = C.inner;
      }
    }
  } }), r;
}
const Bv = ve.define();
function Md(n) {
  let e = 0, t = 0, i = 0, r = 0;
  for (let s of n.state.facet(Bv)) {
    let o = s(n);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (r = Math.max(r, o.bottom)));
  }
  return { left: e, right: t, top: i, bottom: r };
}
const wl = ve.define();
class pi {
  constructor(e, t, i, r) {
    this.fromA = e, this.toA = t, this.fromB = i, this.toB = r;
  }
  join(e) {
    return new pi(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, i = this;
    for (; t > 0; t--) {
      let r = e[t - 1];
      if (!(r.fromA > i.toA)) {
        if (r.toA < i.fromA) break;
        i = i.join(r), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, i), e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0) return e;
    let i = [];
    for (let r = 0, s = 0, o = 0; ; ) {
      let l = r < e.length ? e[r].fromB : 1e9, a = s < t.length ? t[s] : 1e9, f = Math.min(l, a);
      if (f == 1e9) break;
      let h = f + o, p = f, m = h;
      for (; ; ) if (s < t.length && t[s] <= p) {
        let b = t[s + 1];
        s += 2, p = Math.max(p, b);
        for (let x = r; x < e.length && e[x].fromB <= p; x++) o = e[x].toA - e[x].toB;
        m = Math.max(m, b + o);
      } else if (r < e.length && e[r].fromB <= p) {
        let b = e[r++];
        p = Math.max(p, b.toB), m = Math.max(m, b.toA), o = b.toA - b.toB;
      } else break;
      i.push(new pi(h, m, f, p));
    }
    return i;
  }
}
class Lc {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = qt.empty(this.startState.doc.length);
    for (let s of i) this.changes = this.changes.compose(s.changes);
    let r = [];
    this.changes.iterChangedRanges((s, o, l, a) => r.push(new pi(s, o, l, a))), this.changedRanges = r;
  }
  static create(e, t, i) {
    return new Lc(e, t, i);
  }
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
const Yx = [];
class Et {
  constructor(e, t, i = 0) {
    this.dom = e, this.length = t, this.flags = i, this.parent = null, e.cmTile = this;
  }
  get breakAfter() {
    return this.flags & 1;
  }
  get children() {
    return Yx;
  }
  isWidget() {
    return false;
  }
  get isHidden() {
    return false;
  }
  isComposite() {
    return false;
  }
  isLine() {
    return false;
  }
  isText() {
    return false;
  }
  isBlock() {
    return false;
  }
  get domAttrs() {
    return null;
  }
  sync(e) {
    if (this.flags |= 2, this.flags & 4) {
      this.flags &= -5;
      let t = this.domAttrs;
      t && Lx(this.dom, t);
    }
  }
  toString() {
    return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "");
  }
  destroy() {
    this.parent = null;
  }
  setDOM(e) {
    this.dom = e, e.cmTile = this;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e, t = this.posAtStart) {
    let i = t;
    for (let r of this.children) {
      if (r == e) return i;
      i += r.length + r.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  covers(e) {
    return true;
  }
  coordsIn(e, t) {
    return null;
  }
  domPosFor(e, t) {
    let i = Qr(this.dom), r = this.length ? e > 0 : t > 0;
    return new Di(this.parent.dom, i + (r ? 1 : 0), e == 0 || e == this.length);
  }
  markDirty(e) {
    this.flags &= -3, e && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(false);
  }
  get overrideDOMText() {
    return null;
  }
  get root() {
    for (let e = this; e; e = e.parent) if (e instanceof uf) return e;
    return null;
  }
  static get(e) {
    return e.cmTile;
  }
}
class hf extends Et {
  constructor(e) {
    super(e, 0), this._children = [];
  }
  isComposite() {
    return true;
  }
  get children() {
    return this._children;
  }
  get lastChild() {
    return this.children.length ? this.children[this.children.length - 1] : null;
  }
  append(e) {
    this.children.push(e), e.parent = this;
  }
  sync(e) {
    if (this.flags & 2) return;
    super.sync(e);
    let t = this.dom, i = null, r, s = (e == null ? void 0 : e.node) == t ? e : null, o = 0;
    for (let l of this.children) {
      if (l.sync(e), o += l.length + l.breakAfter, r = i ? i.nextSibling : t.firstChild, s && r != l.dom && (s.written = true), l.dom.parentNode == t) for (; r && r != l.dom; ) r = ug(r);
      else t.insertBefore(l.dom, r);
      i = l.dom;
    }
    for (r = i ? i.nextSibling : t.firstChild, s && r && (s.written = true); r; ) r = ug(r);
    this.length = o;
  }
}
function ug(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class uf extends hf {
  constructor(e, t) {
    super(t), this.view = e;
  }
  owns(e) {
    for (; e; e = e.parent) if (e == this) return true;
    return false;
  }
  isBlock() {
    return true;
  }
  nearest(e) {
    for (; ; ) {
      if (!e) return null;
      let t = Et.get(e);
      if (t && this.owns(t)) return t;
      e = e.parentNode;
    }
  }
  blockTiles(e) {
    for (let t = [], i = this, r = 0, s = 0; ; ) if (r == i.children.length) {
      if (!t.length) return;
      i = i.parent, i.breakAfter && s++, r = t.pop();
    } else {
      let o = i.children[r++];
      if (o instanceof wr) t.push(r), i = o, r = 0;
      else {
        let l = s + o.length, a = e(o, s);
        if (a !== void 0) return a;
        s = l + o.breakAfter;
      }
    }
  }
  resolveBlock(e, t) {
    let i, r = -1, s, o = -1;
    if (this.blockTiles((l, a) => {
      let f = a + l.length;
      if (e >= a && e <= f) {
        if (l.isWidget() && t >= -1 && t <= 1) {
          if (l.flags & 32) return true;
          l.flags & 16 && (i = void 0);
        }
        (a < e || e == f && (t < -1 ? l.length : l.covers(1))) && (!i || !l.isWidget() && i.isWidget()) && (i = l, r = e - a), (f > e || e == a && (t > 1 ? l.length : l.covers(-1))) && (!s || !l.isWidget() && s.isWidget()) && (s = l, o = e - a);
      }
    }), !i && !s) throw new Error("No tile at position " + e);
    return i && t < 0 || !s ? { tile: i, offset: r } : { tile: s, offset: o };
  }
}
class wr extends hf {
  constructor(e, t) {
    super(e), this.wrapper = t;
  }
  isBlock() {
    return true;
  }
  covers(e) {
    return this.children.length ? e < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1) : false;
  }
  get domAttrs() {
    return this.wrapper.attributes;
  }
  static of(e, t) {
    let i = new wr(t || document.createElement(e.tagName), e);
    return t || (i.flags |= 4), i;
  }
}
class Ao extends hf {
  constructor(e, t) {
    super(e), this.attrs = t;
  }
  isLine() {
    return true;
  }
  static start(e, t, i) {
    let r = new Ao(t || document.createElement("div"), e);
    return (!t || !i) && (r.flags |= 4), r;
  }
  get domAttrs() {
    return this.attrs;
  }
  resolveInline(e, t, i) {
    let r = null, s = -1, o = null, l = -1;
    function a(h, p) {
      for (let m = 0, b = 0; m < h.children.length && b <= p; m++) {
        let x = h.children[m], C = b + x.length;
        C >= p && (x.isComposite() ? a(x, p - b) : (!o || o.isHidden && (t > 0 || i && Qx(o, x))) && (C > p || x.flags & 32) ? (o = x, l = p - b) : (b < p || x.flags & 16 && !x.isHidden) && (r = x, s = p - b)), b = C;
      }
    }
    a(this, e);
    let f = (t < 0 ? r : o) || r || o;
    return f ? { tile: f, offset: f == r ? s : l } : null;
  }
  coordsIn(e, t) {
    let i = this.resolveInline(e, t, true);
    return i ? i.tile.coordsIn(Math.max(0, i.offset), t) : Jx(this);
  }
  domIn(e, t) {
    let i = this.resolveInline(e, t);
    if (i) {
      let { tile: r, offset: s } = i;
      if (this.dom.contains(r.dom)) return r.isText() ? new Di(r.dom, Math.min(r.dom.nodeValue.length, s)) : r.domPosFor(s, r.flags & 16 ? 1 : r.flags & 32 ? -1 : t);
      let o = i.tile.parent, l = false;
      for (let a of o.children) {
        if (l) return new Di(a.dom, 0);
        a == i.tile && (l = true);
      }
    }
    return new Di(this.dom, 0);
  }
}
function Jx(n) {
  let e = n.dom.lastChild;
  if (!e) return n.dom.getBoundingClientRect();
  let t = dc(e);
  return t[t.length - 1] || null;
}
function Qx(n, e) {
  let t = n.coordsIn(0, 1), i = e.coordsIn(0, 1);
  return t && i && i.top < t.bottom;
}
class zn extends hf {
  constructor(e, t) {
    super(e), this.mark = t;
  }
  get domAttrs() {
    return this.mark.attrs;
  }
  static of(e, t) {
    let i = new zn(t || document.createElement(e.tagName), e);
    return t || (i.flags |= 4), i;
  }
}
class As extends Et {
  constructor(e, t) {
    super(e, t.length), this.text = t;
  }
  sync(e) {
    this.flags & 2 || (super.sync(e), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = true), this.dom.nodeValue = this.text));
  }
  isText() {
    return true;
  }
  toString() {
    return JSON.stringify(this.text);
  }
  coordsIn(e, t) {
    let i = this.dom.nodeValue.length;
    e > i && (e = i);
    let r = e, s = e, o = 0;
    e == 0 && t < 0 || e == i && t >= 0 ? pe.chrome || pe.gecko || (e ? (r--, o = 1) : s < i && (s++, o = -1)) : t < 0 ? r-- : s < i && s++;
    let l = Jl(this.dom, r, s).getClientRects();
    if (!l.length) return null;
    let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
    return pe.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (f) => f.width) || a), o ? _c(a, o < 0) : a || null;
  }
  static of(e, t) {
    let i = new As(t || document.createTextNode(e), e);
    return t || (i.flags |= 2), i;
  }
}
class Hs extends Et {
  constructor(e, t, i, r) {
    super(e, t, r), this.widget = i;
  }
  isWidget() {
    return true;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  covers(e) {
    return this.flags & 48 ? false : (this.flags & (e < 0 ? 64 : 128)) > 0;
  }
  coordsIn(e, t) {
    return this.coordsInWidget(e, t, false);
  }
  coordsInWidget(e, t, i) {
    let r = this.widget.coordsAt(this.dom, e, t);
    if (r) return r;
    if (i) return _c(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0);
    {
      let s = this.dom.getClientRects(), o = null;
      if (!s.length) return null;
      let l = this.flags & 16 ? true : this.flags & 32 ? false : e > 0;
      for (let a = l ? s.length - 1 : 0; o = s[a], !(e > 0 ? a == 0 : a == s.length - 1 || o.top < o.bottom); a += l ? -1 : 1) ;
      return _c(o, !l);
    }
  }
  get overrideDOMText() {
    if (!this.length) return Qe.empty;
    let { root: e } = this;
    if (!e) return Qe.empty;
    let t = this.posAtStart;
    return e.view.state.doc.slice(t, t + this.length);
  }
  destroy() {
    super.destroy(), this.widget.destroy(this.dom);
  }
  static of(e, t, i, r, s) {
    return s || (s = e.toDOM(t), e.editable || (s.contentEditable = "false")), new Hs(s, i, e, r);
  }
}
class Dc extends Et {
  constructor(e) {
    let t = document.createElement("img");
    t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), super(t, 0, e);
  }
  get isHidden() {
    return true;
  }
  get overrideDOMText() {
    return Qe.empty;
  }
  coordsIn(e) {
    return this.dom.getBoundingClientRect();
  }
}
class Xx {
  constructor(e) {
    this.index = 0, this.beforeBreak = false, this.parents = [], this.tile = e;
  }
  advance(e, t, i) {
    let { tile: r, index: s, beforeBreak: o, parents: l } = this;
    for (; e || t > 0; ) if (r.isComposite()) if (o) {
      if (!e) break;
      i && i.break(), e--, o = false;
    } else if (s == r.children.length) {
      if (!e && !l.length) break;
      i && i.leave(r), o = !!r.breakAfter, { tile: r, index: s } = l.pop(), s++;
    } else {
      let a = r.children[s], f = a.breakAfter;
      (t > 0 ? a.length <= e : a.length < e) && (!i || i.skip(a, 0, a.length) !== false || !a.isComposite) ? (o = !!f, s++, e -= a.length) : (l.push({ tile: r, index: s }), r = a, s = 0, i && a.isComposite() && i.enter(a));
    }
    else if (s == r.length) o = !!r.breakAfter, { tile: r, index: s } = l.pop(), s++;
    else if (e) {
      let a = Math.min(e, r.length - s);
      i && i.skip(r, s, s + a), e -= a, s += a;
    } else break;
    return this.tile = r, this.index = s, this.beforeBreak = o, this;
  }
  get root() {
    return this.parents.length ? this.parents[0].tile : this.tile;
  }
}
class Zx {
  constructor(e, t, i, r) {
    this.from = e, this.to = t, this.wrapper = i, this.rank = r;
  }
}
class ek {
  constructor(e, t, i) {
    this.cache = e, this.root = t, this.blockWrappers = i, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
  }
  addText(e, t, i, r) {
    var s;
    this.flushBuffer();
    let o = this.ensureMarks(t, i), l = o.lastChild;
    if (l && l.isText() && !(l.flags & 8) && l.length + e.length < 512) {
      this.cache.reused.set(l, 2);
      let a = o.children[o.children.length - 1] = new As(l.dom, l.text + e);
      a.parent = o;
    } else o.append(r || As.of(e, (s = this.cache.find(As)) === null || s === void 0 ? void 0 : s.dom));
    this.pos += e.length, this.afterWidget = null;
  }
  addComposition(e, t) {
    let i = this.curLine;
    i.dom != t.line.dom && (i.setDOM(this.cache.reused.has(t.line) ? eh(t.line.dom) : t.line.dom), this.cache.reused.set(t.line, 2));
    let r = i;
    for (let l = t.marks.length - 1; l >= 0; l--) {
      let a = t.marks[l], f = r.lastChild;
      if (f instanceof zn && f.mark.eq(a.mark)) f.dom != a.dom && f.setDOM(eh(a.dom)), r = f;
      else {
        if (this.cache.reused.get(a)) {
          let p = Et.get(a.dom);
          p && p.setDOM(eh(a.dom));
        }
        let h = zn.of(a.mark, a.dom);
        r.append(h), r = h;
      }
      this.cache.reused.set(a, 2);
    }
    let s = Et.get(e.text);
    s && this.cache.reused.set(s, 2);
    let o = new As(e.text, e.text.nodeValue);
    o.flags |= 8, r.append(o);
  }
  addInlineWidget(e, t, i) {
    let r = this.afterWidget && e.flags & 48 && (this.afterWidget.flags & 48) == (e.flags & 48);
    r || this.flushBuffer();
    let s = this.ensureMarks(t, i);
    !r && !(e.flags & 16) && s.append(this.getBuffer(1)), s.append(e), this.pos += e.length, this.afterWidget = e;
  }
  addMark(e, t, i) {
    this.flushBuffer(), this.ensureMarks(t, i).append(e), this.pos += e.length, this.afterWidget = null;
  }
  addBlockWidget(e) {
    this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
  }
  continueWidget(e) {
    let t = this.afterWidget || this.lastBlock;
    t.length += e, this.pos += e;
  }
  addLineStart(e, t) {
    var i;
    e || (e = Pv);
    let r = Ao.start(e, t || ((i = this.cache.find(Ao)) === null || i === void 0 ? void 0 : i.dom), !!t);
    this.getBlockPos().append(this.lastBlock = this.curLine = r);
  }
  addLine(e) {
    this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
  }
  addBreak() {
    this.lastBlock.flags |= 1, this.endLine(), this.pos++;
  }
  addLineStartIfNotCovered(e) {
    this.blockPosCovered() || this.addLineStart(e);
  }
  ensureLine(e) {
    this.curLine || this.addLineStart(e);
  }
  ensureMarks(e, t) {
    var i;
    let r = this.curLine;
    for (let s = e.length - 1; s >= 0; s--) {
      let o = e[s], l;
      if (t > 0 && (l = r.lastChild) && l instanceof zn && l.mark.eq(o)) r = l, t--;
      else {
        let a = zn.of(o, (i = this.cache.find(zn, (f) => f.mark.eq(o))) === null || i === void 0 ? void 0 : i.dom);
        r.append(a), r = a, t = 0;
      }
    }
    return r;
  }
  endLine() {
    if (this.curLine) {
      this.flushBuffer();
      let e = this.curLine.lastChild;
      (!e || !dg(this.curLine, false) || e.dom.nodeName != "BR" && e.isWidget() && !(pe.ios && dg(this.curLine, true))) && this.curLine.append(this.cache.findWidget(th, 0, 32) || new Hs(th.toDOM(), 0, th, 32)), this.curLine = this.afterWidget = null;
    }
  }
  updateBlockWrappers() {
    this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
    for (let e = this.wrappers.length - 1; e >= 0; e--) this.wrappers[e].to < this.pos && this.wrappers.splice(e, 1);
    for (let e = this.blockWrappers; e.value && e.from <= this.pos; e.next()) if (e.to >= this.pos) {
      let t = new Zx(e.from, e.to, e.value, e.rank), i = this.wrappers.length;
      for (; i > 0 && (this.wrappers[i - 1].rank - t.rank || this.wrappers[i - 1].to - t.to) < 0; ) i--;
      this.wrappers.splice(i, 0, t);
    }
    this.wrapperPos = this.pos;
  }
  getBlockPos() {
    var e;
    this.updateBlockWrappers();
    let t = this.root;
    for (let i of this.wrappers) {
      let r = t.lastChild;
      if (i.from < this.pos && r instanceof wr && r.wrapper.eq(i.wrapper)) t = r;
      else {
        let s = wr.of(i.wrapper, (e = this.cache.find(wr, (o) => o.wrapper.eq(i.wrapper))) === null || e === void 0 ? void 0 : e.dom);
        t.append(s), t = s;
      }
    }
    return t;
  }
  blockPosCovered() {
    let e = this.lastBlock;
    return e != null && !e.breakAfter && (!e.isWidget() || (e.flags & 160) > 0);
  }
  getBuffer(e) {
    let t = 2 | (e < 0 ? 16 : 32), i = this.cache.find(Dc, void 0, 1);
    return i && (i.flags = t), i || new Dc(t);
  }
  flushBuffer() {
    this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
  }
}
class tk {
  constructor(e) {
    this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = e.iter();
  }
  skip(e) {
    this.textOff + e <= this.text.length ? this.textOff += e : (this.skipCount += e - (this.text.length - this.textOff), this.text = "", this.textOff = 0);
  }
  next(e) {
    if (this.textOff == this.text.length) {
      let { value: r, lineBreak: s, done: o } = this.cursor.next(this.skipCount);
      if (this.skipCount = 0, o) throw new Error("Ran out of text content when drawing inline views");
      this.text = r;
      let l = this.textOff = Math.min(e, r.length);
      return s ? null : r.slice(0, l);
    }
    let t = Math.min(this.text.length, this.textOff + e), i = this.text.slice(this.textOff, t);
    return this.textOff = t, i;
  }
}
const Rc = [Hs, Ao, As, zn, Dc, wr, uf];
for (let n = 0; n < Rc.length; n++) Rc[n].bucket = n;
class nk {
  constructor(e) {
    this.view = e, this.buckets = Rc.map(() => []), this.index = Rc.map(() => 0), this.reused = /* @__PURE__ */ new Map();
  }
  add(e) {
    let t = e.constructor.bucket, i = this.buckets[t];
    i.length < 6 ? i.push(e) : i[this.index[t] = (this.index[t] + 1) % 6] = e;
  }
  find(e, t, i = 2) {
    let r = e.bucket, s = this.buckets[r], o = this.index[r];
    for (let l = s.length - 1; l >= 0; l--) {
      let a = (l + o) % s.length, f = s[a];
      if ((!t || t(f)) && !this.reused.has(f)) return s.splice(a, 1), a < o && this.index[r]--, this.reused.set(f, i), f;
    }
    return null;
  }
  findWidget(e, t, i) {
    let r = this.buckets[0];
    if (r.length) for (let s = 0, o = 0; ; s++) {
      if (s == r.length) {
        if (o) return null;
        o = 1, s = 0;
      }
      let l = r[s];
      if (!this.reused.has(l) && (o == 0 ? l.widget.compare(e) : l.widget.constructor == e.constructor && e.updateDOM(l.dom, this.view, l.widget))) return r.splice(s, 1), s < this.index[0] && this.index[0]--, l.widget == e && l.length == t && (l.flags & 497) == i ? (this.reused.set(l, 1), l) : (this.reused.set(l, 2), new Hs(l.dom, t, e, l.flags & -498 | i));
    }
  }
  reuse(e) {
    return this.reused.set(e, 1), e;
  }
  maybeReuse(e, t = 2) {
    if (!this.reused.has(e)) return this.reused.set(e, t), e.dom;
  }
  clear() {
    for (let e = 0; e < this.buckets.length; e++) this.buckets[e].length = this.index[e] = 0;
  }
}
class ik {
  constructor(e, t, i, r, s) {
    this.view = e, this.decorations = r, this.disallowBlockEffectsFor = s, this.openWidget = false, this.openMarks = 0, this.cache = new nk(e), this.text = new tk(e.state.doc), this.builder = new ek(this.cache, new uf(e, e.contentDOM), He.iter(i)), this.cache.reused.set(t, 2), this.old = new Xx(t), this.reuseWalker = { skip: (o, l, a) => {
      if (this.cache.add(o), o.isComposite()) return false;
    }, enter: (o) => this.cache.add(o), leave: () => {
    }, break: () => {
    } };
  }
  run(e, t) {
    let i = t && this.getCompositionContext(t.text);
    for (let r = 0, s = 0, o = 0; ; ) {
      let l = o < e.length ? e[o++] : null, a = l ? l.fromA : this.old.root.length;
      if (a > r) {
        let f = a - r;
        this.preserve(f, !o, !l), r = a, s += f;
      }
      if (!l) break;
      t && l.fromA <= t.range.fromA && l.toA >= t.range.toA ? (this.forward(l.fromA, t.range.fromA, t.range.fromA < t.range.toA ? 1 : -1), this.emit(s, t.range.fromB), this.cache.clear(), this.builder.addComposition(t, i), this.text.skip(t.range.toB - t.range.fromB), this.forward(t.range.fromA, l.toA), this.emit(t.range.toB, l.toB)) : (this.forward(l.fromA, l.toA), this.emit(s, l.toB)), s = l.toB, r = l.toA;
    }
    return this.builder.curLine && this.builder.endLine(), this.builder.root;
  }
  preserve(e, t, i) {
    let r = ok(this.old), s = this.openMarks;
    this.old.advance(e, i ? 1 : -1, { skip: (o, l, a) => {
      if (o.isWidget()) if (this.openWidget) this.builder.continueWidget(a - l);
      else {
        let f = a > 0 || l < o.length ? Hs.of(o.widget, this.view, a - l, o.flags & 496, this.cache.maybeReuse(o)) : this.cache.reuse(o);
        f.flags & 256 ? (f.flags &= -2, this.builder.addBlockWidget(f)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(f, r, s), s = r.length);
      }
      else if (o.isText()) this.builder.ensureLine(null), !l && a == o.length && !this.cache.reused.has(o) ? this.builder.addText(o.text, r, s, this.cache.reuse(o)) : (this.cache.add(o), this.builder.addText(o.text.slice(l, a), r, s)), s = r.length;
      else if (o.isLine()) o.flags &= -2, this.cache.reused.set(o, 1), this.builder.addLine(o);
      else if (o instanceof Dc) this.cache.add(o);
      else if (o instanceof zn) this.builder.ensureLine(null), this.builder.addMark(o, r, s), this.cache.reused.set(o, 1), s = r.length;
      else return false;
      this.openWidget = false;
    }, enter: (o) => {
      o.isLine() ? this.builder.addLineStart(o.attrs, this.cache.maybeReuse(o)) : (this.cache.add(o), o instanceof zn && r.unshift(o.mark)), this.openWidget = false;
    }, leave: (o) => {
      o.isLine() ? r.length && (r.length = s = 0) : o instanceof zn && (r.shift(), s = Math.min(s, r.length));
    }, break: () => {
      this.builder.addBreak(), this.openWidget = false;
    } }), this.text.skip(e);
  }
  emit(e, t) {
    let i = null, r = this.builder, s = 0, o = He.spans(this.decorations, e, t, { point: (l, a, f, h, p, m) => {
      if (f instanceof Ns) {
        if (this.disallowBlockEffectsFor[m]) {
          if (f.block) throw new RangeError("Block decorations may not be specified via plugins");
          if (a > this.view.state.doc.lineAt(l).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
        }
        if (s = h.length, p > h.length) r.continueWidget(a - l);
        else {
          let b = f.widget || (f.block ? To.block : To.inline), x = rk(f), C = this.cache.findWidget(b, a - l, x) || Hs.of(b, this.view, a - l, x);
          f.block ? (f.startSide > 0 && r.addLineStartIfNotCovered(i), r.addBlockWidget(C)) : (r.ensureLine(i), r.addInlineWidget(C, h, p));
        }
        i = null;
      } else i = sk(i, f);
      a > l && this.text.skip(a - l);
    }, span: (l, a, f, h) => {
      for (let p = l; p < a; ) {
        let m = this.text.next(Math.min(512, a - p));
        m == null ? (r.addLineStartIfNotCovered(i), r.addBreak(), p++) : (r.ensureLine(i), r.addText(m, f, p == l ? h : f.length), p += m.length), i = null;
      }
    } });
    r.addLineStartIfNotCovered(i), this.openWidget = o > s, this.openMarks = o;
  }
  forward(e, t, i = 1) {
    t - e <= 10 ? this.old.advance(t - e, i, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(t - e - 10, -1), this.old.advance(5, i, this.reuseWalker));
  }
  getCompositionContext(e) {
    let t = [], i = null;
    for (let r = e.parentNode; ; r = r.parentNode) {
      let s = Et.get(r);
      if (r == this.view.contentDOM) break;
      s instanceof zn ? t.push(s) : (s == null ? void 0 : s.isLine()) ? i = s : s instanceof wr || (r.nodeName == "DIV" && !i && r != this.view.contentDOM ? i = new Ao(r, Pv) : i || t.push(zn.of(new aa({ tagName: r.nodeName.toLowerCase(), attributes: Dx(r) }), r)));
    }
    return { line: i, marks: t };
  }
}
function dg(n, e) {
  let t = (i) => {
    for (let r of i.children) if ((e ? r.isText() : r.length) || t(r)) return true;
    return false;
  };
  return t(n);
}
function rk(n) {
  let e = n.isReplace ? (n.startSide < 0 ? 64 : 0) | (n.endSide > 0 ? 128 : 0) : n.startSide > 0 ? 32 : 16;
  return n.block && (e |= 256), e;
}
const Pv = { class: "cm-line" };
function sk(n, e) {
  let t = e.spec.attributes, i = e.spec.class;
  return !t && !i || (n || (n = { class: "cm-line" }), t && yd(t, n), i && (n.class += " " + i)), n;
}
function ok(n) {
  let e = [];
  for (let t = n.parents.length; t > 1; t--) {
    let i = t == n.parents.length ? n.tile : n.parents[t].tile;
    i instanceof zn && e.push(i.mark);
  }
  return e;
}
function eh(n) {
  let e = Et.get(n);
  return e && e.setDOM(n.cloneNode()), n;
}
class To extends wi {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return true;
  }
}
To.inline = new To("span");
To.block = new To("div");
const th = new class extends wi {
  toDOM() {
    return document.createElement("br");
  }
  get isHidden() {
    return true;
  }
  get editable() {
    return true;
  }
}();
class pg {
  constructor(e) {
    this.view = e, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [false], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = be.none, this.lastCompositionAfterCursor = false, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = false, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new uf(e, e.contentDOM), this.updateInner([new pi(0, 0, 0, e.state.doc.length)], null);
  }
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: h, toA: p }) => p < this.minWidthFrom || h > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let r = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? r = this.domChanged.newSel.head : !gk(e.changes, this.hasComposition) && !e.selectionSet && (r = e.state.selection.main.head));
    let s = r > -1 ? ak(this.view, e.changes, r) : null;
    if (this.domChanged = null, this.hasComposition) {
      let { from: h, to: p } = this.hasComposition;
      i = new pi(h, p, e.changes.mapPos(h, -1), e.changes.mapPos(p, 1)).addToSet(i.slice());
    }
    this.hasComposition = s ? { from: s.range.fromB, to: s.range.toB } : null, (pe.ie || pe.chrome) && !s && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = true);
    let o = this.decorations, l = this.blockWrappers;
    this.updateDeco();
    let a = hk(o, this.decorations, e.changes);
    a.length && (i = pi.extendWithRanges(i, a));
    let f = dk(l, this.blockWrappers, e.changes);
    return f.length && (i = pi.extendWithRanges(i, f)), s && !i.some((h) => h.fromA <= s.range.fromA && h.toA >= s.range.toA) && (i = s.range.addToSet(i.slice())), this.tile.flags & 2 && i.length == 0 ? false : (this.updateInner(i, s), e.transactions.length && (this.lastUpdate = Date.now()), true);
  }
  updateInner(e, t) {
    this.view.viewState.mustMeasureContent = true;
    let { observer: i } = this.view;
    i.ignore(() => {
      if (t || e.length) {
        let o = this.tile, l = new ik(this.view, o, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
        t && Et.get(t.text) && l.cache.reused.set(Et.get(t.text), 2), this.tile = l.run(e, t), du(o, l.cache.reused);
      }
      this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let s = pe.chrome || pe.ios ? { node: i.selectionRange.focusNode, written: false } : void 0;
      this.tile.sync(s), s && (s.written || i.selectionRange.focusNode != s.node || !this.tile.dom.contains(s.node)) && (this.forceSelection = true), this.tile.dom.style.height = "";
    });
    let r = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let s of this.tile.children) s.isWidget() && s.widget instanceof nh && r.push(s.dom);
    i.updateGaps(r);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions) for (let i of t.effects) i.is(_v) && (this.editContextFormatting = i.value);
  }
  updateSelection(e = false, t = false) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let { dom: i } = this.tile, r = this.view.root.activeElement, s = r == i, o = !s && !(this.view.state.facet(yr) || i.tabIndex > -1) && Dl(i, this.view.observer.selectionRange) && !(r && i.contains(r));
    if (!(s || t || o)) return;
    let l = this.forceSelection;
    this.forceSelection = false;
    let a = this.view.state.selection.main, f, h;
    if (a.empty ? h = f = this.inlineDOMNearPos(a.anchor, a.assoc || 1) : (h = this.inlineDOMNearPos(a.head, a.head == a.from ? 1 : -1), f = this.inlineDOMNearPos(a.anchor, a.anchor == a.from ? 1 : -1)), pe.gecko && a.empty && !this.hasComposition && lk(f)) {
      let m = document.createTextNode("");
      this.view.observer.ignore(() => f.node.insertBefore(m, f.node.childNodes[f.offset] || null)), f = h = new Di(m, 0), l = true;
    }
    let p = this.view.observer.selectionRange;
    (l || !p.focusNode || (!Rl(f.node, f.offset, p.anchorNode, p.anchorOffset) || !Rl(h.node, h.offset, p.focusNode, p.focusOffset)) && !this.suppressWidgetCursorChange(p, a)) && (this.view.observer.ignore(() => {
      pe.android && pe.chrome && i.contains(p.focusNode) && pk(p.focusNode, i) && (i.blur(), i.focus({ preventScroll: true }));
      let m = Yl(this.view.root);
      if (m) if (a.empty) {
        if (pe.gecko) {
          let b = ck(f.node, f.offset);
          if (b && b != 3) {
            let x = (b == 1 ? pv : gv)(f.node, f.offset);
            x && (f = new Di(x.node, x.offset));
          }
        }
        m.collapse(f.node, f.offset), a.bidiLevel != null && m.caretBidiLevel !== void 0 && (m.caretBidiLevel = a.bidiLevel);
      } else if (m.extend) {
        m.collapse(f.node, f.offset);
        try {
          m.extend(h.node, h.offset);
        } catch {
        }
      } else {
        let b = document.createRange();
        a.anchor > a.head && ([f, h] = [h, f]), b.setEnd(h.node, h.offset), b.setStart(f.node, f.offset), m.removeAllRanges(), m.addRange(b);
      }
      o && this.view.root.activeElement == i && (i.blur(), r && r.focus());
    }), this.view.observer.setSelectionRange(f, h)), this.impreciseAnchor = f.precise ? null : new Di(p.anchorNode, p.anchorOffset), this.impreciseHead = h.precise ? null : new Di(p.focusNode, p.focusOffset);
  }
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && Rl(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition) return;
    let { view: e } = this, t = e.state.selection.main, i = Yl(e.root), { anchorNode: r, anchorOffset: s } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify) return;
    let o = this.lineAt(t.head, t.assoc);
    if (!o) return;
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length) return;
    let a = this.coordsAt(t.head, -1), f = this.coordsAt(t.head, 1);
    if (!a || !f || a.bottom > f.top) return;
    let h = this.domAtPos(t.head + t.assoc, t.assoc);
    i.collapse(h.node, h.offset), i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let p = e.observer.selectionRange;
    e.docView.posFromDOM(p.anchorNode, p.anchorOffset) != t.from && i.collapse(r, s);
  }
  posFromDOM(e, t) {
    let i = this.tile.nearest(e);
    if (!i) return this.tile.dom.compareDocumentPosition(e) & 2 ? 0 : this.view.state.doc.length;
    let r = i.posAtStart;
    if (i.isComposite()) {
      let s;
      if (e == i.dom) s = i.dom.childNodes[t];
      else {
        let o = Cr(e) == 0 ? 0 : t == 0 ? -1 : 1;
        for (; ; ) {
          let l = e.parentNode;
          if (l == i.dom) break;
          o == 0 && l.firstChild != l.lastChild && (e == l.firstChild ? o = -1 : o = 1), e = l;
        }
        o < 0 ? s = e : s = e.nextSibling;
      }
      if (s == i.dom.firstChild) return r;
      for (; s && !Et.get(s); ) s = s.nextSibling;
      if (!s) return r + i.length;
      for (let o = 0, l = r; ; o++) {
        let a = i.children[o];
        if (a.dom == s) return l;
        l += a.length + a.breakAfter;
      }
    } else return i.isText() ? e == i.dom ? r + t : r + (t ? i.length : 0) : r;
  }
  domAtPos(e, t) {
    let { tile: i, offset: r } = this.tile.resolveBlock(e, t);
    return i.isWidget() ? i.domPosFor(e, t) : i.domIn(r, t);
  }
  inlineDOMNearPos(e, t) {
    let i, r = -1, s = false, o, l = -1, a = false;
    return this.tile.blockTiles((f, h) => {
      if (f.isWidget()) {
        if (f.flags & 32 && h >= e) return true;
        f.flags & 16 && (s = true);
      } else {
        let p = h + f.length;
        if (h <= e && (i = f, r = e - h, s = p < e), p >= e && !o && (o = f, l = e - h, a = h > e), h > e && o) return true;
      }
    }), !i && !o ? this.domAtPos(e, t) : (s && o ? i = null : a && i && (o = null), i && t < 0 || !o ? i.domIn(r, t) : o.domIn(l, t));
  }
  coordsAt(e, t) {
    let { tile: i, offset: r } = this.tile.resolveBlock(e, t);
    return i.isWidget() ? i.widget instanceof nh ? null : i.coordsInWidget(r, t, true) : i.coordsIn(r, t);
  }
  lineAt(e, t) {
    let { tile: i } = this.tile.resolveBlock(e, t);
    return i.isLine() ? i : null;
  }
  coordsForChar(e) {
    let { tile: t, offset: i } = this.tile.resolveBlock(e, 1);
    if (!t.isLine()) return null;
    function r(s, o) {
      if (s.isComposite()) for (let l of s.children) {
        if (l.length >= o) {
          let a = r(l, o);
          if (a) return a;
        }
        if (o -= l.length, o < 0) break;
      }
      else if (s.isText() && o < s.length) {
        let l = en(s.text, o);
        if (l == o) return null;
        let a = Jl(s.dom, o, l).getClientRects();
        for (let f = 0; f < a.length; f++) {
          let h = a[f];
          if (f == a.length - 1 || h.top < h.bottom && h.left < h.right) return h;
        }
      }
      return null;
    }
    return r(t, i);
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: i, to: r } = e, s = this.view.contentDOM.clientWidth, o = s > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == at.LTR, f = 0, h = (p, m, b) => {
      for (let x = 0; x < p.children.length && !(m > r); x++) {
        let C = p.children[x], E = m + C.length, D = C.dom.getBoundingClientRect(), { height: R } = D;
        if (b && !x && (f += D.top - b.top), C instanceof wr) E > i && h(C, m, D);
        else if (m >= i && (f > 0 && t.push(-f), t.push(R + f), f = 0, o)) {
          let I = C.dom.lastChild, z = I ? dc(I) : [];
          if (z.length) {
            let K = z[z.length - 1], W = a ? K.right - D.left : D.right - K.left;
            W > l && (l = W, this.minWidth = s, this.minWidthFrom = m, this.minWidthTo = E);
          }
        }
        b && x == p.children.length - 1 && (f += b.bottom - D.bottom), m = E + C.breakAfter;
      }
    };
    return h(this.tile, 0, null), t;
  }
  textDirectionAt(e) {
    let { tile: t } = this.tile.resolveBlock(e, 1);
    return getComputedStyle(t.dom).direction == "rtl" ? at.RTL : at.LTR;
  }
  measureTextSize() {
    let e = this.tile.blockTiles((o) => {
      if (o.isLine() && o.children.length && o.length <= 20) {
        let l = 0, a;
        for (let f of o.children) {
          if (!f.isText() || /[^ -~]/.test(f.text)) return;
          let h = dc(f.dom);
          if (h.length != 1) return;
          l += h[0].width, a = h[0].height;
        }
        if (l) return { lineHeight: o.dom.getBoundingClientRect().height, charWidth: l / o.length, textHeight: a };
      }
    });
    if (e) return e;
    let t = document.createElement("div"), i, r, s;
    return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.tile.dom.appendChild(t);
      let o = dc(t.firstChild)[0];
      i = t.getBoundingClientRect().height, r = o && o.width ? o.width / 27 : 7, s = o && o.height ? o.height : i, t.remove();
    }), { lineHeight: i, charWidth: r, textHeight: s };
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, r = 0; ; r++) {
      let s = r == t.viewports.length ? null : t.viewports[r], o = s ? s.from - 1 : this.view.state.doc.length;
      if (o > i) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(be.replace({ widget: new nh(l), block: true, inclusive: true, isBlockGap: true }).range(i, o));
      }
      if (!s) break;
      i = s.to + 1;
    }
    return be.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(ff).map((s) => (this.dynamicDecorationMap[e++] = typeof s == "function") ? s(this.view) : s), i = false, r = this.view.state.facet(Cd).map((s, o) => {
      let l = typeof s == "function";
      return l && (i = true), l ? s(this.view) : s;
    });
    for (r.length && (this.dynamicDecorationMap[e++] = i, t.push(He.join(r))), this.decorations = [this.editContextFormatting, ...t, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; e < this.decorations.length; ) this.dynamicDecorationMap[e++] = false;
    this.blockWrappers = this.view.state.facet(Dv).map((s) => typeof s == "function" ? s(this.view) : s);
  }
  scrollIntoView(e) {
    var t;
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = h.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let h of this.view.state.facet(Ov)) try {
      if (h(this.view, e.range, e)) return true;
    } catch (p) {
      Dn(this.view.state, p, "scroll handler");
    }
    let { range: i } = e, r = this.coordsAt(i.head, (t = i.assoc) !== null && t !== void 0 ? t : i.empty ? 0 : i.head > i.anchor ? -1 : 1), s;
    if (!r) return;
    !i.empty && (s = this.coordsAt(i.anchor, i.anchor > i.head ? -1 : 1)) && (r = { left: Math.min(r.left, s.left), top: Math.min(r.top, s.top), right: Math.max(r.right, s.right), bottom: Math.max(r.bottom, s.bottom) });
    let o = Md(this.view), l = { left: r.left - o.left, top: r.top - o.top, right: r.right + o.right, bottom: r.bottom + o.bottom }, { offsetWidth: a, offsetHeight: f } = this.view.scrollDOM;
    if (Px(this.view.scrollDOM, l, i.head < i.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, a), -a), Math.max(Math.min(e.yMargin, f), -f), this.view.textDirection == at.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (r.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || r.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
      let h = this.view.docView.lineAt(i.head, 1);
      h && h.dom.scrollIntoView({ block: "nearest" });
    }
  }
  lineHasWidget(e) {
    let t = (i) => i.isWidget() || i.children.some(t);
    return t(this.tile.resolveBlock(e, 1).tile);
  }
  destroy() {
    du(this.tile);
  }
}
function du(n, e) {
  let t = e == null ? void 0 : e.get(n);
  if (t != 1) {
    t == null && n.destroy();
    for (let i of n.children) du(i, e);
  }
}
function lk(n) {
  return n.node.nodeType == 1 && n.node.firstChild && (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") && (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false");
}
function Iv(n, e) {
  let t = n.observer.selectionRange;
  if (!t.focusNode) return null;
  let i = pv(t.focusNode, t.focusOffset), r = gv(t.focusNode, t.focusOffset), s = i || r;
  if (r && i && r.node != i.node) {
    let l = Et.get(r.node);
    if (!l || l.isText() && l.text != r.node.nodeValue) s = r;
    else if (n.docView.lastCompositionAfterCursor) {
      let a = Et.get(i.node);
      !a || a.isText() && a.text != i.node.nodeValue || (s = r);
    }
  }
  if (n.docView.lastCompositionAfterCursor = s != i, !s) return null;
  let o = e - s.offset;
  return { from: o, to: o + s.node.nodeValue.length, node: s.node };
}
function ak(n, e, t) {
  let i = Iv(n, t);
  if (!i) return null;
  let { node: r, from: s, to: o } = i, l = r.nodeValue;
  if (/[\n\r]/.test(l) || n.state.doc.sliceString(i.from, i.to) != l) return null;
  let a = e.invertedDesc;
  return { range: new pi(a.mapPos(s), a.mapPos(o), s, o), text: r };
}
function ck(n, e) {
  return n.nodeType != 1 ? 0 : (e && n.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < n.childNodes.length && n.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let fk = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    mo(e, t, this.changes);
  }
  comparePoint(e, t) {
    mo(e, t, this.changes);
  }
  boundChange(e) {
    mo(e, e, this.changes);
  }
};
function hk(n, e, t) {
  let i = new fk();
  return He.compare(n, e, t, i), i.changes;
}
class uk {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    mo(e, t, this.changes);
  }
  comparePoint() {
  }
  boundChange(e) {
    mo(e, e, this.changes);
  }
}
function dk(n, e, t) {
  let i = new uk();
  return He.compare(n, e, t, i), i.changes;
}
function pk(n, e) {
  for (let t = n; t && t != e; t = t.assignedSlot || t.parentNode) if (t.nodeType == 1 && t.contentEditable == "false") return true;
  return false;
}
function gk(n, e) {
  let t = false;
  return e && n.iterChangedRanges((i, r) => {
    i < e.to && r > e.from && (t = true);
  }), t;
}
class nh extends wi {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return e.className = "cm-gap", this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", true;
  }
  get editable() {
    return true;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return false;
  }
}
function mk(n, e, t = 1) {
  let i = n.charCategorizer(e), r = n.doc.lineAt(e), s = e - r.from;
  if (r.length == 0) return j.cursor(e);
  s == 0 ? t = 1 : s == r.length && (t = -1);
  let o = s, l = s;
  t < 0 ? o = en(r.text, s, false) : l = en(r.text, s);
  let a = i(r.text.slice(o, l));
  for (; o > 0; ) {
    let f = en(r.text, o, false);
    if (i(r.text.slice(f, o)) != a) break;
    o = f;
  }
  for (; l < r.length; ) {
    let f = en(r.text, l);
    if (i(r.text.slice(l, f)) != a) break;
    l = f;
  }
  return j.range(o + r.from, l + r.from);
}
function vk(n, e, t, i, r) {
  let s = Math.round((i - e.left) * n.defaultCharacterWidth);
  if (n.lineWrapping && t.height > n.defaultLineHeight * 1.5) {
    let l = n.viewState.heightOracle.textHeight, a = Math.floor((r - t.top - (n.defaultLineHeight - l) * 0.5) / l);
    s += a * n.viewState.heightOracle.lineLength;
  }
  let o = n.state.sliceDoc(t.from, t.to);
  return t.from + tu(o, s, n.state.tabSize);
}
function pu(n, e, t) {
  let i = n.lineBlockAt(e);
  if (Array.isArray(i.type)) {
    let r;
    for (let s of i.type) {
      if (s.from > e) break;
      if (!(s.to < e)) {
        if (s.from < e && s.to > e) return s;
        (!r || s.type == fn.Text && (r.type != s.type || (t < 0 ? s.from < e : s.to > e))) && (r = s);
      }
    }
    return r || i;
  }
  return i;
}
function yk(n, e, t, i) {
  let r = pu(n, e.head, e.assoc || -1), s = !i || r.type != fn.Text || !(n.lineWrapping || r.widgetLineBreaks) ? null : n.coordsAtPos(e.assoc < 0 && e.head > r.from ? e.head - 1 : e.head);
  if (s) {
    let o = n.dom.getBoundingClientRect(), l = n.textDirectionAt(r.from), a = n.posAtCoords({ x: t == (l == at.LTR) ? o.right - 1 : o.left + 1, y: (s.top + s.bottom) / 2 });
    if (a != null) return j.cursor(a, t ? -1 : 1);
  }
  return j.cursor(t ? r.to : r.from, t ? -1 : 1);
}
function gg(n, e, t, i) {
  let r = n.state.doc.lineAt(e.head), s = n.bidiSpans(r), o = n.textDirectionAt(r.from);
  for (let l = e, a = null; ; ) {
    let f = Ux(r, s, o, l, t), h = wv;
    if (!f) {
      if (r.number == (t ? n.state.doc.lines : 1)) return l;
      h = `
`, r = n.state.doc.line(r.number + (t ? 1 : -1)), s = n.bidiSpans(r), f = n.visualLineSide(r, !t);
    }
    if (a) {
      if (!a(h)) return l;
    } else {
      if (!i) return f;
      a = i(h);
    }
    l = f;
  }
}
function bk(n, e, t) {
  let i = n.state.charCategorizer(e), r = i(t);
  return (s) => {
    let o = i(s);
    return r == kt.Space && (r = o), r == o;
  };
}
function wk(n, e, t, i) {
  let r = e.head, s = t ? 1 : -1;
  if (r == (t ? n.state.doc.length : 0)) return j.cursor(r, e.assoc);
  let o = e.goalColumn, l, a = n.contentDOM.getBoundingClientRect(), f = n.coordsAtPos(r, e.assoc || ((e.empty ? t : e.head == e.from) ? 1 : -1)), h = n.documentTop;
  if (f) o == null && (o = f.left - a.left), l = s < 0 ? f.top : f.bottom;
  else {
    let x = n.viewState.lineBlockAt(r);
    o == null && (o = Math.min(a.right - a.left, n.defaultCharacterWidth * (r - x.from))), l = (s < 0 ? x.top : x.bottom) + h;
  }
  let p = a.left + o, m = n.viewState.heightOracle.textHeight >> 1, b = i ?? m;
  for (let x = 0; ; x += m) {
    let C = l + (b + x) * s, E = gu(n, { x: p, y: C }, false, s);
    if (t ? C > a.bottom : C < a.top) return j.cursor(E.pos, E.assoc);
    let D = n.coordsAtPos(E.pos, E.assoc), R = D ? (D.top + D.bottom) / 2 : 0;
    if (!D || (t ? R > l : R < l)) return j.cursor(E.pos, E.assoc, void 0, o);
  }
}
function Bl(n, e, t) {
  for (; ; ) {
    let i = 0;
    for (let r of n) r.between(e - 1, e + 1, (s, o, l) => {
      if (e > s && e < o) {
        let a = i || t || (e - s < o - e ? -1 : 1);
        e = a < 0 ? s : o, i = a;
      }
    });
    if (!i) return e;
  }
}
function Nv(n, e) {
  let t = null;
  for (let i = 0; i < e.ranges.length; i++) {
    let r = e.ranges[i], s = null;
    if (r.empty) {
      let o = Bl(n, r.from, 0);
      o != r.from && (s = j.cursor(o, -1));
    } else {
      let o = Bl(n, r.from, -1), l = Bl(n, r.to, 1);
      (o != r.from || l != r.to) && (s = j.range(r.from == r.anchor ? o : l, r.from == r.head ? o : l));
    }
    s && (t || (t = e.ranges.slice()), t[i] = s);
  }
  return t ? j.create(t, e.mainIndex) : e;
}
function ih(n, e, t) {
  let i = Bl(n.state.facet(fa).map((r) => r(n)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : j.cursor(i, i < t.from ? 1 : -1);
}
class sr {
  constructor(e, t) {
    this.pos = e, this.assoc = t;
  }
}
function gu(n, e, t, i) {
  let r = n.contentDOM.getBoundingClientRect(), s = r.top + n.viewState.paddingTop, { x: o, y: l } = e, a = l - s, f;
  for (; ; ) {
    if (a < 0) return new sr(0, 1);
    if (a > n.viewState.docHeight) return new sr(n.state.doc.length, -1);
    if (f = n.elementAtHeight(a), i == null) break;
    if (f.type == fn.Text) {
      if (i < 0 ? f.to < n.viewport.from : f.from > n.viewport.to) break;
      let m = n.docView.coordsAt(i < 0 ? f.from : f.to, i > 0 ? -1 : 1);
      if (m && (i < 0 ? m.top <= a + s : m.bottom >= a + s)) break;
    }
    let p = n.viewState.heightOracle.textHeight / 2;
    a = i > 0 ? f.bottom + p : f.top - p;
  }
  if (n.viewport.from >= f.to || n.viewport.to <= f.from) {
    if (t) return null;
    if (f.type == fn.Text) {
      let p = vk(n, r, f, o, l);
      return new sr(p, p == f.from ? 1 : -1);
    }
  }
  if (f.type != fn.Text) return a < (f.top + f.bottom) / 2 ? new sr(f.from, 1) : new sr(f.to, -1);
  let h = n.docView.lineAt(f.from, 2);
  return (!h || h.length != f.length) && (h = n.docView.lineAt(f.from, -2)), new xk(n, o, l, n.textDirectionAt(f.from)).scanTile(h, f.from);
}
class xk {
  constructor(e, t, i, r) {
    this.view = e, this.x = t, this.y = i, this.baseDir = r, this.line = null, this.spans = null;
  }
  bidiSpansAt(e) {
    return (!this.line || this.line.from > e || this.line.to < e) && (this.line = this.view.state.doc.lineAt(e), this.spans = this.view.bidiSpans(this.line)), this;
  }
  baseDirAt(e, t) {
    let { line: i, spans: r } = this.bidiSpansAt(e);
    return r[or.find(r, e - i.from, -1, t)].level == this.baseDir;
  }
  dirAt(e, t) {
    let { line: i, spans: r } = this.bidiSpansAt(e);
    return r[or.find(r, e - i.from, -1, t)].dir;
  }
  bidiIn(e, t) {
    let { spans: i, line: r } = this.bidiSpansAt(e);
    return i.length > 1 || i.length && (i[0].level != this.baseDir || i[0].to + r.from < t);
  }
  scan(e, t) {
    let i = 0, r = e.length - 1, s = /* @__PURE__ */ new Set(), o = this.bidiIn(e[0], e[r]), l, a, f = -1, h = 1e9, p;
    e: for (; i < r; ) {
      let b = r - i, x = i + r >> 1;
      t: if (s.has(x)) {
        let E = i + Math.floor(Math.random() * b);
        for (let D = 0; D < b; D++) {
          if (!s.has(E)) {
            x = E;
            break t;
          }
          E++, E == r && (E = i);
        }
        break e;
      }
      s.add(x);
      let C = t(x);
      if (C) for (let E = 0; E < C.length; E++) {
        let D = C[E], R = 0;
        if (!(D.width == 0 && C.length > 1)) {
          if (D.bottom < this.y) (!l || l.bottom < D.bottom) && (l = D), R = 1;
          else if (D.top > this.y) (!a || a.top > D.top) && (a = D), R = -1;
          else {
            let I = D.left > this.x ? this.x - D.left : D.right < this.x ? this.x - D.right : 0, z = Math.abs(I);
            z < h && (f = x, h = z, p = D), I && (R = I < 0 == (this.baseDir == at.LTR) ? -1 : 1);
          }
          R == -1 && (!o || this.baseDirAt(e[x], 1)) ? r = x : R == 1 && (!o || this.baseDirAt(e[x + 1], -1)) && (i = x + 1);
        }
      }
    }
    if (!p) {
      let b = l && (!a || this.y - l.bottom < a.top - this.y) ? l : a;
      return this.y = (b.top + b.bottom) / 2, this.scan(e, t);
    }
    let m = (o ? this.dirAt(e[f], 1) : this.baseDir) == at.LTR;
    return { i: f, after: this.x > (p.left + p.right) / 2 == m };
  }
  scanText(e, t) {
    let i = [];
    for (let s = 0; s < e.length; s = en(e.text, s)) i.push(t + s);
    i.push(t + e.length);
    let r = this.scan(i, (s) => {
      let o = i[s] - t, l = i[s + 1] - t;
      return Jl(e.dom, o, l).getClientRects();
    });
    return r.after ? new sr(i[r.i + 1], -1) : new sr(i[r.i], 1);
  }
  scanTile(e, t) {
    if (!e.length) return new sr(t, 1);
    if (e.children.length == 1) {
      let l = e.children[0];
      if (l.isText()) return this.scanText(l, t);
      if (l.isComposite()) return this.scanTile(l, t);
    }
    let i = [t];
    for (let l = 0, a = t; l < e.children.length; l++) i.push(a += e.children[l].length);
    let r = this.scan(i, (l) => {
      let a = e.children[l];
      return a.flags & 48 ? null : (a.dom.nodeType == 1 ? a.dom : Jl(a.dom, 0, a.length)).getClientRects();
    }), s = e.children[r.i], o = i[r.i];
    return s.isText() ? this.scanText(s, o) : s.isComposite() ? this.scanTile(s, o) : r.after ? new sr(i[r.i + 1], -1) : new sr(o, 1);
  }
}
const lo = "\uFFFF";
class kk {
  constructor(e, t) {
    this.points = e, this.view = t, this.text = "", this.lineSeparator = t.state.facet(Ke.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += lo;
  }
  readRange(e, t) {
    if (!e) return this;
    let i = e.parentNode;
    for (let r = e; ; ) {
      this.findPointBefore(i, r);
      let s = this.text.length;
      this.readNode(r);
      let o = Et.get(r), l = r.nextSibling;
      if (l == t) {
        (o == null ? void 0 : o.breakAfter) && !l && i != this.view.contentDOM && this.lineBreak();
        break;
      }
      let a = Et.get(l);
      (o && a ? o.breakAfter : (o ? o.breakAfter : Oc(r)) || Oc(l) && (r.nodeName != "BR" || (o == null ? void 0 : o.isWidget())) && this.text.length > s) && !Ck(l, t) && this.lineBreak(), r = l;
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points) i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, r = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let s = -1, o = 1, l;
      if (this.lineSeparator ? (s = t.indexOf(this.lineSeparator, i), o = this.lineSeparator.length) : (l = r.exec(t)) && (s = l.index, o = l[0].length), this.append(t.slice(i, s < 0 ? t.length : s)), s < 0) break;
      if (this.lineBreak(), o > 1) for (let a of this.points) a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      i = s + o;
    }
  }
  readNode(e) {
    let t = Et.get(e), i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let r = i.iter(); !r.next().done; ) r.lineBreak ? this.lineBreak() : this.append(r.value);
    } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let i of this.points) i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let i of this.points) (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (Sk(e, i.node, i.offset) ? t : 0));
  }
}
function Sk(n, e, t) {
  for (; ; ) {
    if (!e || t < Cr(e)) return false;
    if (e == n) return true;
    t = Qr(e) + 1, e = e.parentNode;
  }
}
function Ck(n, e) {
  let t;
  for (; !(n == e || !n); n = n.nextSibling) {
    let i = Et.get(n);
    if (!(i == null ? void 0 : i.isWidget())) return false;
    i && (t || (t = [])).push(i);
  }
  if (t) for (let i of t) {
    let r = i.overrideDOMText;
    if (r == null ? void 0 : r.length) return false;
  }
  return true;
}
class mg {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class Mk {
  constructor(e, t, i, r) {
    this.typeOver = r, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: s, impreciseAnchor: o } = e.docView, l = e.state.selection;
    if (e.state.readOnly && t > -1) this.newSel = null;
    else if (t > -1 && (this.bounds = Fv(e.docView.tile, t, i, 0))) {
      let a = s || o ? [] : Tk(e), f = new kk(a, e);
      f.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = f.text, this.newSel = Ek(a, this.bounds.from);
    } else {
      let a = e.observer.selectionRange, f = s && s.node == a.focusNode && s.offset == a.focusOffset || !au(e.contentDOM, a.focusNode) ? l.main.head : e.docView.posFromDOM(a.focusNode, a.focusOffset), h = o && o.node == a.anchorNode && o.offset == a.anchorOffset || !au(e.contentDOM, a.anchorNode) ? l.main.anchor : e.docView.posFromDOM(a.anchorNode, a.anchorOffset), p = e.viewport;
      if ((pe.ios || pe.chrome) && l.main.empty && f != h && (p.from > 0 || p.to < e.state.doc.length)) {
        let m = Math.min(f, h), b = Math.max(f, h), x = p.from - m, C = p.to - b;
        (x == 0 || x == 1 || m == 0) && (C == 0 || C == -1 || b == e.state.doc.length) && (f = 0, h = e.state.doc.length);
      }
      if (e.inputState.composing > -1 && l.ranges.length > 1) this.newSel = l.replaceRange(j.range(h, f));
      else if (e.lineWrapping && h == f && !(l.main.empty && l.main.head == f) && e.inputState.lastTouchTime > Date.now() - 100) {
        let m = e.coordsAtPos(f, -1), b = 0;
        m && (b = e.inputState.lastTouchY <= m.bottom ? -1 : 1), this.newSel = j.create([j.cursor(f, b)]);
      } else this.newSel = j.single(h, f);
    }
  }
}
function Fv(n, e, t, i) {
  if (n.isComposite()) {
    let r = -1, s = -1, o = -1, l = -1;
    for (let a = 0, f = i, h = i; a < n.children.length; a++) {
      let p = n.children[a], m = f + p.length;
      if (f < e && m > t) return Fv(p, e, t, f);
      if (m >= e && r == -1 && (r = a, s = f), f > t && p.dom.parentNode == n.dom) {
        o = a, l = h;
        break;
      }
      h = m, f = m + p.breakAfter;
    }
    return { from: s, to: l < 0 ? i + n.length : l, startDOM: (r ? n.children[r - 1].dom.nextSibling : null) || n.dom.firstChild, endDOM: o < n.children.length && o >= 0 ? n.children[o].dom : null };
  } else return n.isText() ? { from: i, to: i + n.length, startDOM: n.dom, endDOM: n.dom.nextSibling } : null;
}
function Hv(n, e) {
  let t, { newSel: i } = e, { state: r } = n, s = r.selection.main, o = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: l, to: a } = e.bounds, f = s.from, h = null;
    (o === 8 || pe.android && e.text.length < a - l) && (f = s.to, h = "end");
    let p = r.doc.sliceString(l, a, lo), m, b;
    !s.empty && s.from >= l && s.to <= a && (e.typeOver || p != e.text) && p.slice(0, s.from - l) == e.text.slice(0, s.from - l) && p.slice(s.to - l) == e.text.slice(m = e.text.length - (p.length - (s.to - l))) ? t = { from: s.from, to: s.to, insert: Qe.of(e.text.slice(s.from - l, m).split(lo)) } : (b = Wv(p, e.text, f - l, h)) && (pe.chrome && o == 13 && b.toB == b.from + 2 && e.text.slice(b.from, b.toB) == lo + lo && b.toB--, t = { from: l + b.from, to: l + b.toA, insert: Qe.of(e.text.slice(b.from, b.toB).split(lo)) });
  } else i && (!n.hasFocus && r.facet(yr) || Bc(i, s)) && (i = null);
  if (!t && !i) return false;
  if ((pe.mac || pe.android) && t && t.from == t.to && t.from == s.head - 1 && /^\. ?$/.test(t.insert.toString()) && n.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = j.single(i.main.anchor - 1, i.main.head - 1)), t = { from: t.from, to: t.to, insert: Qe.of([t.insert.toString().replace(".", " ")]) }) : r.doc.lineAt(s.from).to < s.to && n.docView.lineHasWidget(s.to) && n.inputState.insertingTextAt > Date.now() - 50 ? t = { from: s.from, to: s.to, insert: r.toText(n.inputState.insertingText) } : pe.chrome && t && t.from == t.to && t.from == s.head && t.insert.toString() == `
 ` && n.lineWrapping && (i && (i = j.single(i.main.anchor - 1, i.main.head - 1)), t = { from: s.from, to: s.to, insert: Qe.of([" "]) }), t) return Ad(n, t, i, o);
  if (i && !Bc(i, s)) {
    let l = false, a = "select";
    return n.inputState.lastSelectionTime > Date.now() - 50 && (n.inputState.lastSelectionOrigin == "select" && (l = true), a = n.inputState.lastSelectionOrigin, a == "select.pointer" && (i = Nv(r.facet(fa).map((f) => f(n)), i))), n.dispatch({ selection: i, scrollIntoView: l, userEvent: a }), true;
  } else return false;
}
function Ad(n, e, t, i = -1) {
  if (pe.ios && n.inputState.flushIOSKey(e)) return true;
  let r = n.state.selection.main;
  if (pe.android && (e.to == r.to && (e.from == r.from || e.from == r.from - 1 && n.state.sliceDoc(e.from, r.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && vo(n.contentDOM, "Enter", 13) || (e.from == r.from - 1 && e.to == r.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > r.head) && vo(n.contentDOM, "Backspace", 8) || e.from == r.from && e.to == r.to + 1 && e.insert.length == 0 && vo(n.contentDOM, "Delete", 46))) return true;
  let s = e.insert.toString();
  n.inputState.composing >= 0 && n.inputState.composing++;
  let o, l = () => o || (o = Ak(n, e, t));
  return n.state.facet(Mv).some((a) => a(n, e.from, e.to, s, l)) || n.dispatch(l()), true;
}
function Ak(n, e, t) {
  let i, r = n.state, s = r.selection.main, o = -1;
  if (e.from == e.to && e.from < s.from || e.from > s.to) {
    let a = e.from < s.from ? -1 : 1, f = a < 0 ? s.from : s.to, h = Bl(r.facet(fa).map((p) => p(n)), f, a);
    e.from == h && (o = h);
  }
  if (o > -1) i = { changes: e, selection: j.cursor(e.from + e.insert.length, -1) };
  else if (e.from >= s.from && e.to <= s.to && e.to - e.from >= (s.to - s.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && n.inputState.composing < 0) {
    let a = s.from < e.from ? r.sliceDoc(s.from, e.from) : "", f = s.to > e.to ? r.sliceDoc(e.to, s.to) : "";
    i = r.replaceSelection(n.state.toText(a + e.insert.sliceString(0, void 0, n.state.lineBreak) + f));
  } else {
    let a = r.changes(e), f = t && t.main.to <= a.newLength ? t.main : void 0;
    if (r.selection.ranges.length > 1 && (n.inputState.composing >= 0 || n.inputState.compositionPendingChange) && e.to <= s.to + 10 && e.to >= s.to - 10) {
      let h = n.state.sliceDoc(e.from, e.to), p, m = t && Iv(n, t.main.head);
      if (m) {
        let x = e.insert.length - (e.to - e.from);
        p = { from: m.from, to: m.to - x };
      } else p = n.state.doc.lineAt(s.head);
      let b = s.to - e.to;
      i = r.changeByRange((x) => {
        if (x.from == s.from && x.to == s.to) return { changes: a, range: f || x.map(a) };
        let C = x.to - b, E = C - h.length;
        if (n.state.sliceDoc(E, C) != h || C >= p.from && E <= p.to) return { range: x };
        let D = r.changes({ from: E, to: C, insert: e.insert }), R = x.to - s.to;
        return { changes: D, range: f ? j.range(Math.max(0, f.anchor + R), Math.max(0, f.head + R)) : x.map(D) };
      });
    } else i = { changes: a, selection: f && r.selection.replaceRange(f) };
  }
  let l = "input.type";
  return (n.composing || n.inputState.compositionPendingChange && n.inputState.compositionEndedAt > Date.now() - 50) && (n.inputState.compositionPendingChange = false, l += ".compose", n.inputState.compositionFirstChange && (l += ".start", n.inputState.compositionFirstChange = false)), r.update(i, { userEvent: l, scrollIntoView: true });
}
function Wv(n, e, t, i) {
  let r = Math.min(n.length, e.length), s = 0;
  for (; s < r && n.charCodeAt(s) == e.charCodeAt(s); ) s++;
  if (s == r && n.length == e.length) return null;
  let o = n.length, l = e.length;
  for (; o > 0 && l > 0 && n.charCodeAt(o - 1) == e.charCodeAt(l - 1); ) o--, l--;
  if (i == "end") {
    let a = Math.max(0, s - Math.min(o, l));
    t -= o + a - s;
  }
  if (o < s && n.length < e.length) {
    let a = t <= s && t >= o ? s - t : 0;
    s -= a, l = s + (l - o), o = s;
  } else if (l < s) {
    let a = t <= s && t >= l ? s - t : 0;
    s -= a, o = s + (o - l), l = s;
  }
  return { from: s, toA: o, toB: l };
}
function Tk(n) {
  let e = [];
  if (n.root.activeElement != n.contentDOM) return e;
  let { anchorNode: t, anchorOffset: i, focusNode: r, focusOffset: s } = n.observer.selectionRange;
  return t && (e.push(new mg(t, i)), (r != t || s != i) && e.push(new mg(r, s))), e;
}
function Ek(n, e) {
  if (n.length == 0) return null;
  let t = n[0].pos, i = n.length == 2 ? n[1].pos : t;
  return t > -1 && i > -1 ? j.single(t + e, i + e) : null;
}
function Bc(n, e) {
  return e.head == n.main.head && e.anchor == n.main.anchor;
}
class Ok {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = false, this.compositionPendingChange = false, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, pe.safari && e.contentDOM.addEventListener("input", () => null), pe.gecko && $k(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !Nk(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
  }
  runHandlers(e, t) {
    let i = this.handlers[e];
    if (i) {
      for (let r of i.observers) r(this.view, t);
      for (let r of i.handlers) {
        if (t.defaultPrevented) break;
        if (r(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = _k(e), i = this.handlers, r = this.view.contentDOM;
    for (let s in t) if (s != "scroll") {
      let o = !t[s].handlers.length, l = i[s];
      l && o != !l.handlers.length && (r.removeEventListener(s, this.handleEvent), l = null), l || r.addEventListener(s, this.handleEvent, { passive: o });
    }
    for (let s in i) s != "scroll" && !t[s] && r.removeEventListener(s, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return true;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && zv.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), pe.android && pe.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8)) return this.view.observer.delayAndroidKey(e.key, e.keyCode), true;
    let t;
    return pe.ios && !e.synthetic && !e.altKey && !e.metaKey && !e.shiftKey && ((t = Vv.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || Lk.indexOf(e.key) > -1 && e.ctrlKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), true) : (e.keyCode != 229 && this.view.observer.forceFlush(), false);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? false : (this.pendingIOSKey = void 0, vo(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return !/^key/.test(e.type) || e.synthetic ? false : this.composing > 0 ? true : pe.safari && !pe.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = false, true) : false;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.view.observer.update(e), this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function vg(n, e) {
  return (t, i) => {
    try {
      return e.call(n, i, t);
    } catch (r) {
      Dn(t.state, r);
    }
  };
}
function _k(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of n) {
    let r = i.spec, s = r && r.plugin.domEventHandlers, o = r && r.plugin.domEventObservers;
    if (s) for (let l in s) {
      let a = s[l];
      a && t(l).handlers.push(vg(i.value, a));
    }
    if (o) for (let l in o) {
      let a = o[l];
      a && t(l).observers.push(vg(i.value, a));
    }
  }
  for (let i in Pi) t(i).handlers.push(Pi[i]);
  for (let i in $n) t(i).observers.push($n[i]);
  return e;
}
const Vv = [{ key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" }, { key: "Enter", keyCode: 13, inputType: "insertParagraph" }, { key: "Enter", keyCode: 13, inputType: "insertLineBreak" }, { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }], Lk = "dthko", zv = [16, 17, 18, 20, 91, 92, 224, 225], Ia = 6;
function Na(n) {
  return Math.max(0, n) * 0.7 + 8;
}
function Dk(n, e) {
  return Math.max(Math.abs(n.clientX - e.clientX), Math.abs(n.clientY - e.clientY));
}
class Rk {
  constructor(e, t, i, r) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = r, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = hv(e.contentDOM), this.atoms = e.state.facet(fa).map((o) => o(e));
    let s = e.contentDOM.ownerDocument;
    s.addEventListener("mousemove", this.move = this.move.bind(this)), s.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(Ke.allowMultipleSelections) && Bk(e, t), this.dragging = Ik(e, t) && jv(t) == 1 ? null : false;
  }
  start(e) {
    this.dragging === false && this.select(e);
  }
  move(e) {
    if (e.buttons == 0) return this.destroy();
    if (this.dragging || this.dragging == null && Dk(this.startEvent, e) < 10) return;
    this.select(this.lastEvent = e);
    let t = 0, i = 0, r = 0, s = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: r, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: s, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = Md(this.view);
    e.clientX - a.left <= r + Ia ? t = -Na(r - e.clientX) : e.clientX + a.right >= o - Ia && (t = Na(e.clientX - o)), e.clientY - a.top <= s + Ia ? i = -Na(s - e.clientY) : e.clientY + a.bottom >= l - Ia && (i = Na(e.clientY - l)), this.setScrollSpeed(t, i);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = { x: e, y: t }, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: e, y: t } = this.scrollSpeed;
    e && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e, e = 0), t && this.scrollParents.y && (this.scrollParents.y.scrollTop += t, t = 0), (e || t) && this.view.win.scrollBy(e, t), this.dragging === false && this.select(this.lastEvent);
  }
  select(e) {
    let { view: t } = this, i = Nv(this.atoms, this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection, this.dragging === false)) && this.view.dispatch({ selection: i, userEvent: "select.pointer" }), this.mustSelect = false;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function Bk(n, e) {
  let t = n.state.facet(xv);
  return t.length ? t[0](e) : pe.mac ? e.metaKey : e.ctrlKey;
}
function Pk(n, e) {
  let t = n.state.facet(kv);
  return t.length ? t[0](e) : pe.mac ? !e.altKey : !e.ctrlKey;
}
function Ik(n, e) {
  let { main: t } = n.state.selection;
  if (t.empty) return false;
  let i = Yl(n.root);
  if (!i || i.rangeCount == 0) return true;
  let r = i.getRangeAt(0).getClientRects();
  for (let s = 0; s < r.length; s++) {
    let o = r[s];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY) return true;
  }
  return false;
}
function Nk(n, e) {
  if (!e.bubbles) return true;
  if (e.defaultPrevented) return false;
  for (let t = e.target, i; t != n.contentDOM; t = t.parentNode) if (!t || t.nodeType == 11 || (i = Et.get(t)) && i.isWidget() && !i.isHidden && i.widget.ignoreEvent(e)) return false;
  return true;
}
const Pi = /* @__PURE__ */ Object.create(null), $n = /* @__PURE__ */ Object.create(null), Kv = pe.ie && pe.ie_version < 15 || pe.ios && pe.webkit_version < 604;
function Fk(n) {
  let e = n.dom.parentNode;
  if (!e) return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    n.focus(), t.remove(), $v(n, t.value);
  }, 50);
}
function df(n, e, t) {
  for (let i of n.facet(e)) t = i(t, n);
  return t;
}
function $v(n, e) {
  e = df(n.state, xd, e);
  let { state: t } = n, i, r = 1, s = t.toText(e), o = s.lines == t.selection.ranges.length;
  if (mu != null && t.selection.ranges.every((a) => a.empty) && mu == s.toString()) {
    let a = -1;
    i = t.changeByRange((f) => {
      let h = t.doc.lineAt(f.from);
      if (h.from == a) return { range: f };
      a = h.from;
      let p = t.toText((o ? s.line(r++).text : e) + t.lineBreak);
      return { changes: { from: h.from, insert: p }, range: j.cursor(f.from + p.length) };
    });
  } else o ? i = t.changeByRange((a) => {
    let f = s.line(r++);
    return { changes: { from: a.from, to: a.to, insert: f.text }, range: j.cursor(a.from + f.length) };
  }) : i = t.replaceSelection(s);
  n.dispatch(i, { userEvent: "input.paste", scrollIntoView: true });
}
$n.scroll = (n) => {
  n.inputState.lastScrollTop = n.scrollDOM.scrollTop, n.inputState.lastScrollLeft = n.scrollDOM.scrollLeft;
};
$n.wheel = $n.mousewheel = (n) => {
  n.inputState.lastWheelEvent = Date.now();
};
Pi.keydown = (n, e) => (n.inputState.setSelectionOrigin("select"), e.keyCode == 27 && n.inputState.tabFocusMode != 0 && (n.inputState.tabFocusMode = Date.now() + 2e3), false);
$n.touchstart = (n, e) => {
  let t = n.inputState, i = e.targetTouches[0];
  t.lastTouchTime = Date.now(), i && (t.lastTouchX = i.clientX, t.lastTouchY = i.clientY), t.setSelectionOrigin("select.pointer");
};
$n.touchmove = (n) => {
  n.inputState.setSelectionOrigin("select.pointer");
};
Pi.mousedown = (n, e) => {
  if (n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3) return false;
  let t = null;
  for (let i of n.state.facet(Sv)) if (t = i(n, e), t) break;
  if (!t && e.button == 0 && (t = Wk(n, e)), t) {
    let i = !n.hasFocus;
    n.inputState.startMouseSelection(new Rk(n, e, t, i)), i && n.observer.ignore(() => {
      uv(n.contentDOM);
      let s = n.root.activeElement;
      s && !s.contains(n.contentDOM) && s.blur();
    });
    let r = n.inputState.mouseSelection;
    if (r) return r.start(e), r.dragging === false;
  } else n.inputState.setSelectionOrigin("select.pointer");
  return false;
};
function yg(n, e, t, i) {
  if (i == 1) return j.cursor(e, t);
  if (i == 2) return mk(n.state, e, t);
  {
    let r = n.docView.lineAt(e, t), s = n.state.doc.lineAt(r ? r.posAtEnd : e), o = r ? r.posAtStart : s.from, l = r ? r.posAtEnd : s.to;
    return l < n.state.doc.length && l == s.to && l++, j.range(o, l);
  }
}
const Hk = pe.ie && pe.ie_version <= 11;
let bg = null, wg = 0, xg = 0;
function jv(n) {
  if (!Hk) return n.detail;
  let e = bg, t = xg;
  return bg = n, xg = Date.now(), wg = !e || t > Date.now() - 400 && Math.abs(e.clientX - n.clientX) < 2 && Math.abs(e.clientY - n.clientY) < 2 ? (wg + 1) % 3 : 1;
}
function Wk(n, e) {
  let t = n.posAndSideAtCoords({ x: e.clientX, y: e.clientY }, false), i = jv(e), r = n.state.selection;
  return { update(s) {
    s.docChanged && (t.pos = s.changes.mapPos(t.pos), r = r.map(s.changes));
  }, get(s, o, l) {
    let a = n.posAndSideAtCoords({ x: s.clientX, y: s.clientY }, false), f, h = yg(n, a.pos, a.assoc, i);
    if (t.pos != a.pos && !o) {
      let p = yg(n, t.pos, t.assoc, i), m = Math.min(p.from, h.from), b = Math.max(p.to, h.to);
      h = m < h.from ? j.range(m, b, h.assoc) : j.range(b, m, h.assoc);
    }
    return o ? r.replaceRange(r.main.extend(h.from, h.to, h.assoc)) : l && i == 1 && r.ranges.length > 1 && (f = Vk(r, a.pos)) ? f : l ? r.addRange(h) : j.create([h]);
  } };
}
function Vk(n, e) {
  for (let t = 0; t < n.ranges.length; t++) {
    let { from: i, to: r } = n.ranges[t];
    if (i <= e && r >= e) return j.create(n.ranges.slice(0, t).concat(n.ranges.slice(t + 1)), n.mainIndex == t ? 0 : n.mainIndex - (n.mainIndex > t ? 1 : 0));
  }
  return null;
}
Pi.dragstart = (n, e) => {
  let { selection: { main: t } } = n.state;
  if (e.target.draggable) {
    let r = n.docView.tile.nearest(e.target);
    if (r && r.isWidget()) {
      let s = r.posAtStart, o = s + r.length;
      (s >= t.to || o <= t.from) && (t = j.range(s, o));
    }
  }
  let { inputState: i } = n;
  return i.mouseSelection && (i.mouseSelection.dragging = true), i.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", df(n.state, kd, n.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), false;
};
Pi.dragend = (n) => (n.inputState.draggedContent = null, false);
function kg(n, e, t, i) {
  if (t = df(n.state, xd, t), !t) return;
  let r = n.posAtCoords({ x: e.clientX, y: e.clientY }, false), { draggedContent: s } = n.inputState, o = i && s && Pk(n, e) ? { from: s.from, to: s.to } : null, l = { from: r, insert: t }, a = n.state.changes(o ? [o, l] : l);
  n.focus(), n.dispatch({ changes: a, selection: { anchor: a.mapPos(r, -1), head: a.mapPos(r, 1) }, userEvent: o ? "move.drop" : "input.drop" }), n.inputState.draggedContent = null;
}
Pi.drop = (n, e) => {
  if (!e.dataTransfer) return false;
  if (n.state.readOnly) return true;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length), r = 0, s = () => {
      ++r == t.length && kg(n, e, i.filter((o) => o != null).join(n.state.lineBreak), false);
    };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      l.onerror = s, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), s();
      }, l.readAsText(t[o]);
    }
    return true;
  } else {
    let i = e.dataTransfer.getData("Text");
    if (i) return kg(n, e, i, true), true;
  }
  return false;
};
Pi.paste = (n, e) => {
  if (n.state.readOnly) return true;
  n.observer.flush();
  let t = Kv ? null : e.clipboardData;
  return t ? ($v(n, t.getData("text/plain") || t.getData("text/uri-list")), true) : (Fk(n), false);
};
function zk(n, e) {
  let t = n.dom.parentNode;
  if (!t) return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), n.focus();
  }, 50);
}
function Kk(n) {
  let e = [], t = [], i = false;
  for (let r of n.selection.ranges) r.empty || (e.push(n.sliceDoc(r.from, r.to)), t.push(r));
  if (!e.length) {
    let r = -1;
    for (let { from: s } of n.selection.ranges) {
      let o = n.doc.lineAt(s);
      o.number > r && (e.push(o.text), t.push({ from: o.from, to: Math.min(n.doc.length, o.to + 1) })), r = o.number;
    }
    i = true;
  }
  return { text: df(n, kd, e.join(n.lineBreak)), ranges: t, linewise: i };
}
let mu = null;
Pi.copy = Pi.cut = (n, e) => {
  if (!Dl(n.contentDOM, n.observer.selectionRange)) return false;
  let { text: t, ranges: i, linewise: r } = Kk(n.state);
  if (!t && !r) return false;
  mu = r ? t : null, e.type == "cut" && !n.state.readOnly && n.dispatch({ changes: i, scrollIntoView: true, userEvent: "delete.cut" });
  let s = Kv ? null : e.clipboardData;
  return s ? (s.clearData(), s.setData("text/plain", t), true) : (zk(n, t), false);
};
const Uv = Er.define();
function qv(n, e) {
  let t = [];
  for (let i of n.facet(Av)) {
    let r = i(n, e);
    r && t.push(r);
  }
  return t.length ? n.update({ effects: t, annotations: Uv.of(true) }) : null;
}
function Gv(n) {
  setTimeout(() => {
    let e = n.hasFocus;
    if (e != n.inputState.notifiedFocused) {
      let t = qv(n.state, e);
      t ? n.dispatch(t) : n.update([]);
    }
  }, 10);
}
$n.focus = (n) => {
  n.inputState.lastFocusTime = Date.now(), !n.scrollDOM.scrollTop && (n.inputState.lastScrollTop || n.inputState.lastScrollLeft) && (n.scrollDOM.scrollTop = n.inputState.lastScrollTop, n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft), Gv(n);
};
$n.blur = (n) => {
  n.observer.clearSelectionRange(), Gv(n);
};
$n.compositionstart = $n.compositionupdate = (n) => {
  n.observer.editContext || (n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = true), n.inputState.composing < 0 && (n.inputState.composing = 0));
};
$n.compositionend = (n) => {
  n.observer.editContext || (n.inputState.composing = -1, n.inputState.compositionEndedAt = Date.now(), n.inputState.compositionPendingKey = true, n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0, n.inputState.compositionFirstChange = null, pe.chrome && pe.android ? n.observer.flushSoon() : n.inputState.compositionPendingChange ? Promise.resolve().then(() => n.observer.flush()) : setTimeout(() => {
    n.inputState.composing < 0 && n.docView.hasComposition && n.update([]);
  }, 50));
};
$n.contextmenu = (n) => {
  n.inputState.lastContextMenu = Date.now();
};
Pi.beforeinput = (n, e) => {
  var t, i;
  if ((e.inputType == "insertText" || e.inputType == "insertCompositionText") && (n.inputState.insertingText = e.data, n.inputState.insertingTextAt = Date.now()), e.inputType == "insertReplacementText" && n.observer.editContext) {
    let s = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), o = e.getTargetRanges();
    if (s && o.length) {
      let l = o[0], a = n.posAtDOM(l.startContainer, l.startOffset), f = n.posAtDOM(l.endContainer, l.endOffset);
      return Ad(n, { from: a, to: f, insert: n.state.toText(s) }, null), true;
    }
  }
  let r;
  if (pe.chrome && pe.android && (r = Vv.find((s) => s.inputType == e.inputType)) && (n.observer.delayAndroidKey(r.key, r.keyCode), r.key == "Backspace" || r.key == "Delete")) {
    let s = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > s + 10 && n.hasFocus && (n.contentDOM.blur(), n.focus());
    }, 100);
  }
  return pe.ios && e.inputType == "deleteContentForward" && n.observer.flushSoon(), pe.safari && e.inputType == "insertText" && n.inputState.composing >= 0 && setTimeout(() => $n.compositionend(n, e), 20), false;
};
const Sg = /* @__PURE__ */ new Set();
function $k(n) {
  Sg.has(n) || (Sg.add(n), n.addEventListener("copy", () => {
  }), n.addEventListener("cut", () => {
  }));
}
const Cg = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let Eo = false;
function Mg() {
  Eo = false;
}
class jk {
  constructor(e) {
    this.lineWrapping = e, this.doc = Qe.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(e, t) {
    let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return Cg.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = false;
    for (let i = 0; i < e.length; i++) {
      let r = e[i];
      r < 0 ? i++ : this.heightSamples[Math.floor(r * 10)] || (t = true, this.heightSamples[Math.floor(r * 10)] = true);
    }
    return t;
  }
  refresh(e, t, i, r, s, o) {
    let l = Cg.indexOf(e) > -1, a = Math.abs(t - this.lineHeight) > 0.3 || this.lineWrapping != l || Math.abs(i - this.charWidth) > 0.1;
    if (this.lineWrapping = l, this.lineHeight = t, this.charWidth = i, this.textHeight = r, this.lineLength = s, a) {
      this.heightSamples = {};
      for (let f = 0; f < o.length; f++) {
        let h = o[f];
        h < 0 ? f++ : this.heightSamples[Math.floor(h * 10)] = true;
      }
    }
    return a;
  }
}
class Uk {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class _i {
  constructor(e, t, i, r, s) {
    this.from = e, this.length = t, this.top = i, this.height = r, this._content = s;
  }
  get type() {
    return typeof this._content == "number" ? fn.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof Ns ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new _i(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var pt = (function(n) {
  return n[n.ByPos = 0] = "ByPos", n[n.ByHeight = 1] = "ByHeight", n[n.ByPosNoHeight = 2] = "ByPosNoHeight", n;
})(pt || (pt = {}));
const pc = 1e-3;
class Bn {
  constructor(e, t, i = 2) {
    this.length = e, this.height = t, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > pc && (Eo = true), this.height = e);
  }
  replace(e, t, i) {
    return Bn.of(i);
  }
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, i, r) {
    let s = this, o = i.doc;
    for (let l = r.length - 1; l >= 0; l--) {
      let { fromA: a, toA: f, fromB: h, toB: p } = r[l], m = s.lineAt(a, pt.ByPosNoHeight, i.setDoc(t), 0, 0), b = m.to >= f ? m : s.lineAt(f, pt.ByPosNoHeight, i, 0, 0);
      for (p += b.to - f, f = b.to; l > 0 && m.from <= r[l - 1].toA; ) a = r[l - 1].fromA, h = r[l - 1].fromB, l--, a < m.from && (m = s.lineAt(a, pt.ByPosNoHeight, i, 0, 0));
      h += m.from - a, a = m.from;
      let x = Td.build(i.setDoc(o), e, h, p);
      s = Pc(s, s.replace(a, f, x));
    }
    return s.updateHeight(i, 0);
  }
  static empty() {
    return new ni(0, 0, 0);
  }
  static of(e) {
    if (e.length == 1) return e[0];
    let t = 0, i = e.length, r = 0, s = 0;
    for (; ; ) if (t == i) if (r > s * 2) {
      let l = e[t - 1];
      l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right), i += 1 + l.break, r -= l.size;
    } else if (s > r * 2) {
      let l = e[i];
      l.break ? e.splice(i, 1, l.left, null, l.right) : e.splice(i, 1, l.left, l.right), i += 2 + l.break, s -= l.size;
    } else break;
    else if (r < s) {
      let l = e[t++];
      l && (r += l.size);
    } else {
      let l = e[--i];
      l && (s += l.size);
    }
    let o = 0;
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, i++), new Gk(Bn.of(e.slice(0, t)), o, Bn.of(e.slice(i)));
  }
}
function Pc(n, e) {
  return n == e ? n : (n.constructor != e.constructor && (Eo = true), e);
}
Bn.prototype.size = 1;
const qk = be.replace({});
class Yv extends Bn {
  constructor(e, t, i) {
    super(e, t), this.deco = i, this.spaceAbove = 0;
  }
  mainBlock(e, t) {
    return new _i(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
  }
  blockAt(e, t, i, r) {
    return this.spaceAbove && e < i + this.spaceAbove ? new _i(r, 0, i, this.spaceAbove, qk) : this.mainBlock(i, r);
  }
  lineAt(e, t, i, r, s) {
    let o = this.mainBlock(r, s);
    return this.spaceAbove ? this.blockAt(0, i, r, s).join(o) : o;
  }
  forEachLine(e, t, i, r, s, o) {
    e <= s + this.length && t >= s && o(this.lineAt(0, pt.ByPos, i, r, s));
  }
  setMeasuredHeight(e) {
    let t = e.heights[e.index++];
    t < 0 ? (this.spaceAbove = -t, t = e.heights[e.index++]) : this.spaceAbove = 0, this.setHeight(t);
  }
  updateHeight(e, t = 0, i = false, r) {
    return r && r.from <= t && r.more && this.setMeasuredHeight(r), this.outdated = false, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class ni extends Yv {
  constructor(e, t, i) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = i;
  }
  mainBlock(e, t) {
    return new _i(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
  }
  replace(e, t, i) {
    let r = i[0];
    return i.length == 1 && (r instanceof ni || r instanceof on && r.flags & 4) && Math.abs(this.length - r.length) < 10 ? (r instanceof on ? r = new ni(r.length, this.height, this.spaceAbove) : r.height = this.height, this.outdated || (r.outdated = false), r) : Bn.of(i);
  }
  updateHeight(e, t = 0, i = false, r) {
    return r && r.from <= t && r.more ? this.setMeasuredHeight(r) : (i || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight)), this.outdated = false, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class on extends Bn {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let i = e.doc.lineAt(t).number, r = e.doc.lineAt(t + this.length).number, s = r - i + 1, o, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * s);
      o = a / s, this.length > s + 1 && (l = (this.height - a) / (this.length - s - 1));
    } else o = this.height / s;
    return { firstLine: i, lastLine: r, perLine: o, perChar: l };
  }
  blockAt(e, t, i, r) {
    let { firstLine: s, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(t, r);
    if (t.lineWrapping) {
      let f = r + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)), h = t.doc.lineAt(f), p = l + h.length * a, m = Math.max(i, e - p / 2);
      return new _i(h.from, h.length, m, p, 0);
    } else {
      let f = Math.max(0, Math.min(o - s, Math.floor((e - i) / l))), { from: h, length: p } = t.doc.line(s + f);
      return new _i(h, p, i + l * f, l, 0);
    }
  }
  lineAt(e, t, i, r, s) {
    if (t == pt.ByHeight) return this.blockAt(e, i, r, s);
    if (t == pt.ByPosNoHeight) {
      let { from: b, to: x } = i.doc.lineAt(e);
      return new _i(b, x - b, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, s), f = i.doc.lineAt(e), h = l + f.length * a, p = f.number - o, m = r + l * p + a * (f.from - s - p);
    return new _i(f.from, f.length, Math.max(r, Math.min(m, r + this.height - h)), h, 0);
  }
  forEachLine(e, t, i, r, s, o) {
    e = Math.max(e, s), t = Math.min(t, s + this.length);
    let { firstLine: l, perLine: a, perChar: f } = this.heightMetrics(i, s);
    for (let h = e, p = r; h <= t; ) {
      let m = i.doc.lineAt(h);
      if (h == e) {
        let x = m.number - l;
        p += a * x + f * (e - s - x);
      }
      let b = a + f * m.length;
      o(new _i(m.from, m.length, p, b, 0)), p += b, h = m.to + 1;
    }
  }
  replace(e, t, i) {
    let r = this.length - t;
    if (r > 0) {
      let s = i[i.length - 1];
      s instanceof on ? i[i.length - 1] = new on(s.length + r) : i.push(null, new on(r - 1));
    }
    if (e > 0) {
      let s = i[0];
      s instanceof on ? i[0] = new on(e + s.length) : i.unshift(new on(e - 1), null);
    }
    return Bn.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new on(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new on(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = false, r) {
    let s = t + this.length;
    if (r && r.from <= t + this.length && r.more) {
      let o = [], l = Math.max(t, r.from), a = -1;
      for (r.from > t && o.push(new on(r.from - t - 1).updateHeight(e, t)); l <= s && r.more; ) {
        let h = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let p = r.heights[r.index++], m = 0;
        p < 0 && (m = -p, p = r.heights[r.index++]), a == -1 ? a = p : Math.abs(p - a) >= pc && (a = -2);
        let b = new ni(h, p, m);
        b.outdated = false, o.push(b), l += h + 1;
      }
      l <= s && o.push(null, new on(s - l).updateHeight(e, l));
      let f = Bn.of(o);
      return (a < 0 || Math.abs(f.height - this.height) >= pc || Math.abs(a - this.heightMetrics(e, t).perLine) >= pc) && (Eo = true), Pc(this, f);
    } else (i || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = false);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class Gk extends Bn {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)), this.left = e, this.right = i, this.size = e.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, i, r) {
    let s = i + this.left.height;
    return e < s ? this.left.blockAt(e, t, i, r) : this.right.blockAt(e, t, s, r + this.left.length + this.break);
  }
  lineAt(e, t, i, r, s) {
    let o = r + this.left.height, l = s + this.left.length + this.break, a = t == pt.ByHeight ? e < o : e < l, f = a ? this.left.lineAt(e, t, i, r, s) : this.right.lineAt(e, t, i, o, l);
    if (this.break || (a ? f.to < l : f.from > l)) return f;
    let h = t == pt.ByPosNoHeight ? pt.ByPosNoHeight : pt.ByPos;
    return a ? f.join(this.right.lineAt(l, h, i, o, l)) : this.left.lineAt(l, h, i, r, s).join(f);
  }
  forEachLine(e, t, i, r, s, o) {
    let l = r + this.left.height, a = s + this.left.length + this.break;
    if (this.break) e < a && this.left.forEachLine(e, t, i, r, s, o), t >= a && this.right.forEachLine(e, t, i, l, a, o);
    else {
      let f = this.lineAt(a, pt.ByPos, i, r, s);
      e < f.from && this.left.forEachLine(e, f.from - 1, i, r, s, o), f.to >= e && f.from <= t && o(f), t > f.to && this.right.forEachLine(f.to + 1, t, i, l, a, o);
    }
  }
  replace(e, t, i) {
    let r = this.left.length + this.break;
    if (t < r) return this.balanced(this.left.replace(e, t, i), this.right);
    if (e > this.left.length) return this.balanced(this.left, this.right.replace(e - r, t - r, i));
    let s = [];
    e > 0 && this.decomposeLeft(e, s);
    let o = s.length;
    for (let l of i) s.push(l);
    if (e > 0 && Ag(s, o - 1), t < this.length) {
      let l = s.length;
      this.decomposeRight(t, s), Ag(s, l);
    }
    return Bn.of(s);
  }
  decomposeLeft(e, t) {
    let i = this.left.length;
    if (e <= i) return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (i++, e >= i && t.push(null)), e > i && this.right.decomposeLeft(e - i, t);
  }
  decomposeRight(e, t) {
    let i = this.left.length, r = i + this.break;
    if (e >= r) return this.right.decomposeRight(e - r, t);
    e < i && this.left.decomposeRight(e, t), this.break && e < r && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? Bn.of(this.break ? [e, null, t] : [e, t]) : (this.left = Pc(this.left, e), this.right = Pc(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = false, r) {
    let { left: s, right: o } = this, l = t + s.length + this.break, a = null;
    return r && r.from <= t + s.length && r.more ? a = s = s.updateHeight(e, t, i, r) : s.updateHeight(e, t, i), r && r.from <= l + o.length && r.more ? a = o = o.updateHeight(e, l, i, r) : o.updateHeight(e, l, i), a ? this.balanced(s, o) : (this.height = this.left.height + this.right.height, this.outdated = false, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Ag(n, e) {
  let t, i;
  n[e] == null && (t = n[e - 1]) instanceof on && (i = n[e + 1]) instanceof on && n.splice(e - 1, 3, new on(t.length + 1 + i.length));
}
const Yk = 5;
class Td {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), r = this.nodes[this.nodes.length - 1];
      r instanceof ni ? r.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new ni(i - this.pos, -1, 0)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let r = i.widget ? i.widget.estimatedHeight : 0, s = i.widget ? i.widget.lineBreaks : 0;
      r < 0 && (r = this.oracle.lineHeight);
      let o = t - e;
      i.block ? this.addBlock(new Yv(o, r, i)) : (o || s || r >= Yk) && this.addLineDeco(r, s, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1) return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new ni(this.pos - e, -1, 0)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new on(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof ni) return e;
    let t = new ni(0, -1, 0);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, i) {
    let r = this.ensureLine();
    r.length += i, r.collapsed += i, r.widgetHeight = Math.max(r.widgetHeight, e), r.breaks += t, this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof ni) && !this.isCovered ? this.nodes.push(new ni(0, -1, 0)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let r of this.nodes) r instanceof ni && r.updateHeight(this.oracle, i), i += r ? r.length : 1;
    return this.nodes;
  }
  static build(e, t, i, r) {
    let s = new Td(i, e);
    return He.spans(t, i, r, s, 0), s.finish(i);
  }
}
function Jk(n, e, t) {
  let i = new Qk();
  return He.compare(n, e, t, i, 0), i.changes;
}
class Qk {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, r) {
    (e < t || i && i.heightRelevant || r && r.heightRelevant) && mo(e, t, this.changes, 5);
  }
}
function Xk(n, e) {
  let t = n.getBoundingClientRect(), i = n.ownerDocument, r = i.defaultView || window, s = Math.max(0, t.left), o = Math.min(r.innerWidth, t.right), l = Math.max(0, t.top), a = Math.min(r.innerHeight, t.bottom);
  for (let f = n.parentNode; f && f != i.body; ) if (f.nodeType == 1) {
    let h = f, p = window.getComputedStyle(h);
    if ((h.scrollHeight > h.clientHeight || h.scrollWidth > h.clientWidth) && p.overflow != "visible") {
      let m = h.getBoundingClientRect();
      s = Math.max(s, m.left), o = Math.min(o, m.right), l = Math.max(l, m.top), a = Math.min(f == n.parentNode ? r.innerHeight : a, m.bottom);
    }
    f = p.position == "absolute" || p.position == "fixed" ? h.offsetParent : h.parentNode;
  } else if (f.nodeType == 11) f = f.host;
  else break;
  return { left: s - t.left, right: Math.max(s, o) - t.left, top: l - (t.top + e), bottom: Math.max(l, a) - (t.top + e) };
}
function Zk(n) {
  let e = n.getBoundingClientRect(), t = n.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function eS(n, e) {
  let t = n.getBoundingClientRect();
  return { left: 0, right: t.right - t.left, top: e, bottom: t.bottom - (t.top + e) };
}
class rh {
  constructor(e, t, i, r) {
    this.from = e, this.to = t, this.size = i, this.displaySize = r;
  }
  static same(e, t) {
    if (e.length != t.length) return false;
    for (let i = 0; i < e.length; i++) {
      let r = e[i], s = t[i];
      if (r.from != s.from || r.to != s.to || r.size != s.size) return false;
    }
    return true;
  }
  draw(e, t) {
    return be.replace({ widget: new tS(this.displaySize * (t ? e.scaleY : e.scaleX), t) }).range(this.from, this.to);
  }
}
class tS extends wi {
  constructor(e, t) {
    super(), this.size = e, this.vertical = t;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class Tg {
  constructor(e, t) {
    this.view = e, this.state = t, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = true, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = false, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Eg, this.scrollTarget = null, this.printing = false, this.mustMeasureContent = true, this.defaultTextDirection = at.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = false;
    let i = t.facet(Sd).some((r) => typeof r != "function" && r.class == "cm-lineWrapping");
    this.heightOracle = new jk(i), this.stateDeco = Og(t), this.heightMap = Bn.empty().applyChanges(this.stateDeco, Qe.empty, this.heightOracle.setDoc(t.doc), [new pi(0, 0, 0, t.doc.length)]);
    for (let r = 0; r < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); r++) ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = be.set(this.lineGaps.map((r) => r.draw(this, false))), this.scrollParent = e.scrollDOM, this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let r = i ? t.head : t.anchor;
      if (!e.some(({ from: s, to: o }) => r >= s && r <= o)) {
        let { from: s, to: o } = this.lineBlockAt(r);
        e.push(new Fa(s, o));
      }
    }
    return this.viewports = e.sort((i, r) => i.from - r.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? Eg : new Ed(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(xl(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = Og(this.state);
    let r = e.changedRanges, s = pi.extendWithRanges(r, Jk(i, this.stateDeco, e ? e.changes : qt.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
    Mg(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), s), (this.heightMap.height != o || Eo) && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = o);
    let a = s.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let f = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (f || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && (e.selectionSet || e.focusChanged) && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(Ev) && (this.mustEnforceCursorAssoc = true);
  }
  measure() {
    let { view: e } = this, t = e.contentDOM, i = window.getComputedStyle(t), r = this.heightOracle, s = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? at.RTL : at.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(s) || this.mustMeasureContent === "refresh", l = t.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = false;
    let f = 0, h = 0;
    if (l.width && l.height) {
      let { scaleX: K, scaleY: W } = fv(t, l);
      (K > 5e-3 && Math.abs(this.scaleX - K) > 5e-3 || W > 5e-3 && Math.abs(this.scaleY - W) > 5e-3) && (this.scaleX = K, this.scaleY = W, f |= 16, o = a = true);
    }
    let p = (parseInt(i.paddingTop) || 0) * this.scaleY, m = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != p || this.paddingBottom != m) && (this.paddingTop = p, this.paddingBottom = m, f |= 18), this.editorWidth != e.scrollDOM.clientWidth && (r.lineWrapping && (a = true), this.editorWidth = e.scrollDOM.clientWidth, f |= 16);
    let b = hv(this.view.contentDOM, false).y;
    b != this.scrollParent && (this.scrollParent = b, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
    let x = this.getScrollOffset();
    this.scrollOffset != x && (this.scrollAnchorHeight = -1, this.scrollOffset = x), this.scrolledToBottom = dv(this.scrollParent || e.win);
    let C = (this.printing ? eS : Xk)(t, this.paddingTop), E = C.top - this.pixelViewport.top, D = C.bottom - this.pixelViewport.bottom;
    this.pixelViewport = C;
    let R = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (R != this.inView && (this.inView = R, R && (a = true)), !this.inView && !this.scrollTarget && !Zk(e.dom)) return 0;
    let I = l.width;
    if ((this.contentDOMWidth != I || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, f |= 16), a) {
      let K = e.docView.measureVisibleLineHeights(this.viewport);
      if (r.mustRefreshForHeights(K) && (o = true), o || r.lineWrapping && Math.abs(I - this.contentDOMWidth) > r.charWidth) {
        let { lineHeight: W, charWidth: $, textHeight: ee } = e.docView.measureTextSize();
        o = W > 0 && r.refresh(s, W, $, ee, Math.max(5, I / $), K), o && (e.docView.minWidth = 0, f |= 16);
      }
      E > 0 && D > 0 ? h = Math.max(E, D) : E < 0 && D < 0 && (h = Math.min(E, D)), Mg();
      for (let W of this.viewports) {
        let $ = W.from == this.viewport.from ? K : e.docView.measureVisibleLineHeights(W);
        this.heightMap = (o ? Bn.empty().applyChanges(this.stateDeco, Qe.empty, this.heightOracle, [new pi(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(r, 0, o, new Uk(W.from, $));
      }
      Eo && (f |= 2);
    }
    let z = !this.viewportIsAppropriate(this.viewport, h) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return z && (f & 2 && (f |= this.updateScaler()), this.viewport = this.getViewport(h, this.scrollTarget), f |= this.updateForViewport()), (f & 2 || z) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), f |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = false, e.docView.enforceCursorAssoc()), f;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), r = this.heightMap, s = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new Fa(r.lineAt(o - i * 1e3, pt.ByHeight, s, 0, 0).from, r.lineAt(l + (1 - i) * 1e3, pt.ByHeight, s, 0, 0).to);
    if (t) {
      let { head: f } = t.range;
      if (f < a.from || f > a.to) {
        let h = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), p = r.lineAt(f, pt.ByPos, s, 0, 0), m;
        t.y == "center" ? m = (p.top + p.bottom) / 2 - h / 2 : t.y == "start" || t.y == "nearest" && f < a.from ? m = p.top : m = p.bottom - h, a = new Fa(r.lineAt(m - 1e3 / 2, pt.ByHeight, s, 0, 0).from, r.lineAt(m + h + 1e3 / 2, pt.ByHeight, s, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), r = t.mapPos(e.to, 1);
    return new Fa(this.heightMap.lineAt(i, pt.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(r, pt.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView) return true;
    let { top: r } = this.heightMap.lineAt(e, pt.ByPos, this.heightOracle, 0, 0), { bottom: s } = this.heightMap.lineAt(t, pt.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || r <= o - Math.max(10, Math.min(-i, 250))) && (t == this.state.doc.length || s >= l + Math.max(10, Math.min(i, 250))) && r > o - 2 * 1e3 && s < l + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty) return e;
    let i = [];
    for (let r of e) t.touchesRange(r.from, r.to) || i.push(new rh(t.mapPos(r.from), t.mapPos(r.to), r.size, r.displaySize));
    return i;
  }
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping, r = i ? 1e4 : 2e3, s = r >> 1, o = r << 1;
    if (this.defaultTextDirection != at.LTR && !i) return [];
    let l = [], a = (h, p, m, b) => {
      if (p - h < s) return;
      let x = this.state.selection.main, C = [x.from];
      x.empty || C.push(x.to);
      for (let D of C) if (D > h && D < p) {
        a(h, D - 10, m, b), a(D + 10, p, m, b);
        return;
      }
      let E = iS(e, (D) => D.from >= m.from && D.to <= m.to && Math.abs(D.from - h) < s && Math.abs(D.to - p) < s && !C.some((R) => D.from < R && D.to > R));
      if (!E) {
        if (p < m.to && t && i && t.visibleRanges.some((I) => I.from <= p && I.to >= p)) {
          let I = t.moveToLineBoundary(j.cursor(p), false, true).head;
          I > h && (p = I);
        }
        let D = this.gapSize(m, h, p, b), R = i || D < 2e6 ? D : 2e6;
        E = new rh(h, p, D, R);
      }
      l.push(E);
    }, f = (h) => {
      if (h.length < o || h.type != fn.Text) return;
      let p = nS(h.from, h.to, this.stateDeco);
      if (p.total < o) return;
      let m = this.scrollTarget ? this.scrollTarget.range.head : null, b, x;
      if (i) {
        let C = r / this.heightOracle.lineLength * this.heightOracle.lineHeight, E, D;
        if (m != null) {
          let R = Wa(p, m), I = ((this.visibleBottom - this.visibleTop) / 2 + C) / h.height;
          E = R - I, D = R + I;
        } else E = (this.visibleTop - h.top - C) / h.height, D = (this.visibleBottom - h.top + C) / h.height;
        b = Ha(p, E), x = Ha(p, D);
      } else {
        let C = p.total * this.heightOracle.charWidth, E = r * this.heightOracle.charWidth, D = 0;
        if (C > 2e6) for (let W of e) W.from >= h.from && W.from < h.to && W.size != W.displaySize && W.from * this.heightOracle.charWidth + D < this.pixelViewport.left && (D = W.size - W.displaySize);
        let R = this.pixelViewport.left + D, I = this.pixelViewport.right + D, z, K;
        if (m != null) {
          let W = Wa(p, m), $ = ((I - R) / 2 + E) / C;
          z = W - $, K = W + $;
        } else z = (R - E) / C, K = (I + E) / C;
        b = Ha(p, z), x = Ha(p, K);
      }
      b > h.from && a(h.from, b, h, p), x < h.to && a(x, h.to, h, p);
    };
    for (let h of this.viewportLines) Array.isArray(h.type) ? h.type.forEach(f) : f(h);
    return l;
  }
  gapSize(e, t, i, r) {
    let s = Wa(r, i) - Wa(r, t);
    return this.heightOracle.lineWrapping ? e.height * s : r.total * this.heightOracle.charWidth * s;
  }
  updateLineGaps(e) {
    rh.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = be.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let i = [];
    He.spans(t, this.viewport.from, this.viewport.to, { span(s, o) {
      i.push({ from: s, to: o });
    }, point() {
    } }, 20);
    let r = 0;
    if (i.length != this.visibleRanges.length) r = 12;
    else for (let s = 0; s < i.length && !(r & 8); s++) {
      let o = this.visibleRanges[s], l = i[s];
      (o.from != l.from || o.to != l.to) && (r |= 4, e && e.mapPos(o.from, -1) == l.from && e.mapPos(o.to, 1) == l.to || (r |= 8));
    }
    return this.visibleRanges = i, r;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || xl(this.heightMap.lineAt(e, pt.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || xl(this.heightMap.lineAt(this.scaler.fromDOM(e), pt.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  getScrollOffset() {
    return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY;
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return xl(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Fa {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function nS(n, e, t) {
  let i = [], r = n, s = 0;
  return He.spans(t, n, e, { span() {
  }, point(o, l) {
    o > r && (i.push({ from: r, to: o }), s += o - r), r = l;
  } }, 20), r < e && (i.push({ from: r, to: e }), s += e - r), { total: s, ranges: i };
}
function Ha({ total: n, ranges: e }, t) {
  if (t <= 0) return e[0].from;
  if (t >= 1) return e[e.length - 1].to;
  let i = Math.floor(n * t);
  for (let r = 0; ; r++) {
    let { from: s, to: o } = e[r], l = o - s;
    if (i <= l) return s + i;
    i -= l;
  }
}
function Wa(n, e) {
  let t = 0;
  for (let { from: i, to: r } of n.ranges) {
    if (e <= r) {
      t += e - i;
      break;
    }
    t += r - i;
  }
  return t / n.total;
}
function iS(n, e) {
  for (let t of n) if (e(t)) return t;
}
const Eg = { toDOM(n) {
  return n;
}, fromDOM(n) {
  return n;
}, scale: 1, eq(n) {
  return n == this;
} };
function Og(n) {
  let e = n.facet(ff).filter((i) => typeof i != "function"), t = n.facet(Cd).filter((i) => typeof i != "function");
  return t.length && e.push(He.join(t)), e;
}
class Ed {
  constructor(e, t, i) {
    let r = 0, s = 0, o = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let f = t.lineAt(l, pt.ByPos, e, 0, 0).top, h = t.lineAt(a, pt.ByPos, e, 0, 0).bottom;
      return r += h - f, { from: l, to: a, top: f, bottom: h, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - r) / (t.height - r);
    for (let l of this.viewports) l.domTop = o + (l.top - s) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), s = l.bottom;
  }
  toDOM(e) {
    for (let t = 0, i = 0, r = 0; ; t++) {
      let s = t < this.viewports.length ? this.viewports[t] : null;
      if (!s || e < s.top) return r + (e - i) * this.scale;
      if (e <= s.bottom) return s.domTop + (e - s.top);
      i = s.bottom, r = s.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, r = 0; ; t++) {
      let s = t < this.viewports.length ? this.viewports[t] : null;
      if (!s || e < s.domTop) return i + (e - r) / this.scale;
      if (e <= s.domBottom) return s.top + (e - s.domTop);
      i = s.bottom, r = s.domBottom;
    }
  }
  eq(e) {
    return e instanceof Ed ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to) : false;
  }
}
function xl(n, e) {
  if (e.scale == 1) return n;
  let t = e.toDOM(n.top), i = e.toDOM(n.bottom);
  return new _i(n.from, n.length, t, i - t, Array.isArray(n._content) ? n._content.map((r) => xl(r, e)) : n._content);
}
const Va = ve.define({ combine: (n) => n.join(" ") }), vu = ve.define({ combine: (n) => n.indexOf(true) > -1 }), yu = Yr.newName(), Jv = Yr.newName(), Qv = Yr.newName(), Xv = { "&light": "." + Jv, "&dark": "." + Qv };
function bu(n, e, t) {
  return new Yr(e, { finish(i) {
    return /&/.test(i) ? i.replace(/&\w*/, (r) => {
      if (r == "&") return n;
      if (!t || !t[r]) throw new RangeError(`Unsupported selector: ${r}`);
      return t[r];
    }) : n + " " + i;
  } });
}
const rS = bu("." + yu, { "&": { position: "relative !important", boxSizing: "border-box", "&.cm-focused": { outline: "1px dotted #212121" }, display: "flex !important", flexDirection: "column" }, ".cm-scroller": { display: "flex !important", alignItems: "flex-start !important", fontFamily: "monospace", lineHeight: 1.4, height: "100%", overflowX: "auto", position: "relative", zIndex: 0, overflowAnchor: "none" }, ".cm-content": { margin: 0, flexGrow: 2, flexShrink: 0, display: "block", whiteSpace: "pre", wordWrap: "normal", boxSizing: "border-box", minHeight: "100%", padding: "4px 0", outline: "none", "&[contenteditable=true]": { WebkitUserModify: "read-write-plaintext-only" } }, ".cm-lineWrapping": { whiteSpace_fallback: "pre-wrap", whiteSpace: "break-spaces", wordBreak: "break-word", overflowWrap: "anywhere", flexShrink: 1 }, "&light .cm-content": { caretColor: "black" }, "&dark .cm-content": { caretColor: "white" }, ".cm-line": { display: "block", padding: "0 2px 0 6px" }, ".cm-layer": { position: "absolute", left: 0, top: 0, contain: "size style", "& > *": { position: "absolute" } }, "&light .cm-selectionBackground": { background: "#d9d9d9" }, "&dark .cm-selectionBackground": { background: "#222" }, "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#d7d4f0" }, "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#233" }, ".cm-cursorLayer": { pointerEvents: "none" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer": { animation: "steps(1) cm-blink 1.2s infinite" }, "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, ".cm-cursor, .cm-dropCursor": { borderLeft: "1.2px solid black", marginLeft: "-0.6px", pointerEvents: "none" }, ".cm-cursor": { display: "none" }, "&dark .cm-cursor": { borderLeftColor: "#ddd" }, ".cm-selectionHandle": { backgroundColor: "currentColor", width: "1.5px" }, ".cm-selectionHandle-start::before, .cm-selectionHandle-end::before": { content: '""', backgroundColor: "inherit", borderRadius: "50%", width: "8px", height: "8px", position: "absolute", left: "-3.25px" }, ".cm-selectionHandle-start::before": { top: "-8px" }, ".cm-selectionHandle-end::before": { bottom: "-8px" }, ".cm-dropCursor": { position: "absolute" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: "block" }, ".cm-iso": { unicodeBidi: "isolate" }, ".cm-announced": { position: "fixed", top: "-10000px" }, "@media print": { ".cm-announced": { display: "none" } }, "&light .cm-activeLine": { backgroundColor: "#cceeff44" }, "&dark .cm-activeLine": { backgroundColor: "#99eeff33" }, "&light .cm-specialChar": { color: "red" }, "&dark .cm-specialChar": { color: "#f78" }, ".cm-gutters": { flexShrink: 0, display: "flex", height: "100%", boxSizing: "border-box", zIndex: 200 }, ".cm-gutters-before": { insetInlineStart: 0 }, ".cm-gutters-after": { insetInlineEnd: 0 }, "&light .cm-gutters": { backgroundColor: "#f5f5f5", color: "#6c6c6c", border: "0px solid #ddd", "&.cm-gutters-before": { borderRightWidth: "1px" }, "&.cm-gutters-after": { borderLeftWidth: "1px" } }, "&dark .cm-gutters": { backgroundColor: "#333338", color: "#ccc" }, ".cm-gutter": { display: "flex !important", flexDirection: "column", flexShrink: 0, boxSizing: "border-box", minHeight: "100%", overflow: "hidden" }, ".cm-gutterElement": { boxSizing: "border-box" }, ".cm-lineNumbers .cm-gutterElement": { padding: "0 3px 0 5px", minWidth: "20px", textAlign: "right", whiteSpace: "nowrap" }, "&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" }, "&dark .cm-activeLineGutter": { backgroundColor: "#222227" }, ".cm-panels": { boxSizing: "border-box", position: "sticky", left: 0, right: 0, zIndex: 300 }, "&light .cm-panels": { backgroundColor: "#f5f5f5", color: "black" }, "&light .cm-panels-top": { borderBottom: "1px solid #ddd" }, "&light .cm-panels-bottom": { borderTop: "1px solid #ddd" }, "&dark .cm-panels": { backgroundColor: "#333338", color: "white" }, ".cm-dialog": { padding: "2px 19px 4px 6px", position: "relative", "& label": { fontSize: "80%" } }, ".cm-dialog-close": { position: "absolute", top: "3px", right: "4px", backgroundColor: "inherit", border: "none", font: "inherit", fontSize: "14px", padding: "0" }, ".cm-tab": { display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }, ".cm-widgetBuffer": { verticalAlign: "text-top", height: "1em", width: 0, display: "inline" }, ".cm-placeholder": { color: "#888", display: "inline-block", verticalAlign: "top", userSelect: "none" }, ".cm-highlightSpace": { backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)", backgroundPosition: "center" }, ".cm-highlightTab": { backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`, backgroundSize: "auto 100%", backgroundPosition: "right 90%", backgroundRepeat: "no-repeat" }, ".cm-trailingSpace": { backgroundColor: "#ff332255" }, ".cm-button": { verticalAlign: "middle", color: "inherit", fontSize: "70%", padding: ".2em 1em", borderRadius: "1px" }, "&light .cm-button": { backgroundImage: "linear-gradient(#eff1f5, #d9d9df)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" } }, "&dark .cm-button": { backgroundImage: "linear-gradient(#393939, #111)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#111, #333)" } }, ".cm-textfield": { verticalAlign: "middle", color: "inherit", fontSize: "70%", border: "1px solid silver", padding: ".2em .5em" }, "&light .cm-textfield": { backgroundColor: "white" }, "&dark .cm-textfield": { border: "1px solid #555", backgroundColor: "inherit" } }, Xv), sS = { childList: true, characterData: true, subtree: true, attributes: true, characterDataOldValue: true }, sh = pe.ie && pe.ie_version <= 11;
class oS {
  constructor(e) {
    this.view = e, this.active = false, this.editContext = null, this.selectionRange = new Ix(), this.selectionChanged = false, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = false, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t) this.queue.push(i);
      (pe.ie && pe.ie_version <= 11 || pe.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && pe.android && e.constructor.EDIT_CONTEXT !== false && !(pe.chrome && pe.chrome_version < 126) && (this.editContext = new aS(e), e.state.facet(yr) && (e.contentDOM.editContext = this.editContext.editContext)), sh && (this.onCharData = (t) => {
      this.queue.push({ target: t.target, type: "characterData", oldValue: t.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var t;
      ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((t) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t) => {
      t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(false), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(e) {
    (e.type == "change" || !e.type) && !e.matches || (this.view.viewState.printing = true, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = false, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))) {
      this.gapIntersection.disconnect();
      for (let t of e) this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey) return;
    let { view: i } = this, r = this.selectionRange;
    if (i.state.facet(yr) ? i.root.activeElement != this.dom : !Dl(this.dom, r)) return;
    let s = r.anchorNode && i.docView.tile.nearest(r.anchorNode);
    if (s && s.isWidget() && s.widget.ignoreEvent(e)) {
      t || (this.selectionChanged = false);
      return;
    }
    (pe.ie && pe.ie_version <= 11 || pe.android && pe.chrome) && !i.state.selection.main.empty && r.focusNode && Rl(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset) ? this.flushSoon() : this.flush(false);
  }
  readSelectionRange() {
    let { view: e } = this, t = Yl(e.root);
    if (!t) return false;
    let i = pe.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && lS(this.view, t) || t;
    if (!i || this.selectionRange.eq(i)) return false;
    let r = Dl(this.dom, i);
    return r && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && Fx(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), false) : (this.selectionRange.setRange(i), r && (this.selectionChanged = true), true);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = false;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, t = null;
    for (let i = this.dom; i; ) if (i.nodeType == 1) !t && e < this.scrollTargets.length && this.scrollTargets[e] == i ? e++ : t || (t = this.scrollTargets.slice(0, e)), t && t.push(i), i = i.assignedSlot || i.parentNode;
    else if (i.nodeType == 11) i = i.host;
    else break;
    if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
      for (let i of this.scrollTargets) i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = t) i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active) return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, sS), sh && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = true);
  }
  stop() {
    this.active && (this.active = false, this.observer.disconnect(), sh && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = false;
  }
  delayAndroidKey(e, t) {
    var i;
    if (!this.delayedAndroidKey) {
      let r = () => {
        let s = this.delayedAndroidKey;
        s && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = s.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && s.force && vo(this.dom, s.key, s.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(r);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = { key: e, keyCode: t, force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force) });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords()) this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1, i = -1, r = false;
    for (let s of e) {
      let o = this.readMutation(s);
      o && (o.typeOver && (r = true), t == -1 ? { from: t, to: i } = o : (t = Math.min(o.from, t), i = Math.max(o.to, i)));
    }
    return { from: t, to: i, typeOver: r };
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(), r = this.selectionChanged && Dl(this.dom, this.selectionRange);
    if (e < 0 && !r) return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = false;
    let s = new Mk(this.view, e, t, i);
    return this.view.docView.domChanged = { newSel: s.newSel ? s.newSel.main : null }, s;
  }
  flush(e = true) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return false;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t) return this.view.requestMeasure(), false;
    let i = this.view.state, r = Hv(this.view, t);
    return this.view.state == i && (t.domChanged || t.newSel && !Bc(this.view.state.selection, t.newSel.main)) && this.view.update([]), r;
  }
  readMutation(e) {
    let t = this.view.docView.tile.nearest(e.target);
    if (!t || t.isWidget()) return null;
    if (t.markDirty(e.type == "attributes"), e.type == "childList") {
      let i = _g(t, e.previousSibling || e.target.previousSibling, -1), r = _g(t, e.nextSibling || e.target.nextSibling, 1);
      return { from: i ? t.posAfter(i) : t.posAtStart, to: r ? t.posBefore(r) : t.posAtEnd, typeOver: false };
    } else return e.type == "characterData" ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext && (this.editContext.update(e), e.startState.facet(yr) != e.state.facet(yr) && (e.view.contentDOM.editContext = e.state.facet(yr) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, i;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let r of this.scrollTargets) r.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function _g(n, e, t) {
  for (; e; ) {
    let i = Et.get(e);
    if (i && i.parent == n) return i;
    let r = e.parentNode;
    e = r != n.dom ? r : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Lg(n, e) {
  let t = e.startContainer, i = e.startOffset, r = e.endContainer, s = e.endOffset, o = n.docView.domAtPos(n.state.selection.main.anchor, 1);
  return Rl(o.node, o.offset, r, s) && ([t, i, r, s] = [r, s, t, i]), { anchorNode: t, anchorOffset: i, focusNode: r, focusOffset: s };
}
function lS(n, e) {
  if (e.getComposedRanges) {
    let r = e.getComposedRanges(n.root)[0];
    if (r) return Lg(n, r);
  }
  let t = null;
  function i(r) {
    r.preventDefault(), r.stopImmediatePropagation(), t = r.getTargetRanges()[0];
  }
  return n.contentDOM.addEventListener("beforeinput", i, true), n.dom.ownerDocument.execCommand("indent"), n.contentDOM.removeEventListener("beforeinput", i, true), t ? Lg(n, t) : null;
}
class aS {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({ text: e.state.doc.sliceString(this.from, this.to), selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))), selectionEnd: this.toContextPos(e.state.selection.main.head) });
    this.handlers.textupdate = (i) => {
      let r = e.state.selection.main, { anchor: s, head: o } = r, l = this.toEditorPos(i.updateRangeStart), a = this.toEditorPos(i.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: l, drifted: false });
      let f = a - l > i.text.length;
      l == this.from && s < this.from ? l = s : a == this.to && s > this.to && (a = s);
      let h = Wv(e.state.sliceDoc(l, a), i.text, (f ? r.from : r.to) - l, f ? "end" : null);
      if (!h) {
        let m = j.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        Bc(m, r) || e.dispatch({ selection: m, userEvent: "select" });
        return;
      }
      let p = { from: h.from + l, to: h.toA + l, insert: Qe.of(i.text.slice(h.from, h.toB).split(`
`)) };
      if ((pe.mac || pe.android) && p.from == o - 1 && /^\. ?$/.test(i.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (p = { from: l, to: a, insert: Qe.of([i.text.replace(".", " ")]) }), this.pendingContextChange = p, !e.state.readOnly) {
        let m = this.to - this.from + (p.to - p.from + p.insert.length);
        Ad(e, p, j.single(this.toEditorPos(i.selectionStart, m), this.toEditorPos(i.selectionEnd, m)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)), p.from < p.to && !p.insert.length && e.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0, i.updateRangeStart - 1), Math.min(t.text.length, i.updateRangeStart + 1))) && this.handlers.compositionend(i);
    }, this.handlers.characterboundsupdate = (i) => {
      let r = [], s = null;
      for (let o = this.toEditorPos(i.rangeStart), l = this.toEditorPos(i.rangeEnd); o < l; o++) {
        let a = e.coordsForChar(o);
        s = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || s || new DOMRect(), r.push(s);
      }
      t.updateCharacterBounds(i.rangeStart, r);
    }, this.handlers.textformatupdate = (i) => {
      let r = [];
      for (let s of i.getTextFormats()) {
        let o = s.underlineStyle, l = s.underlineThickness;
        if (!/none/i.test(o) && !/none/i.test(l)) {
          let a = this.toEditorPos(s.rangeStart), f = this.toEditorPos(s.rangeEnd);
          if (a < f) {
            let h = `text-decoration: underline ${/^[a-z]/.test(o) ? o + " " : o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${/thin/i.test(l) ? 1 : 2}px`;
            r.push(be.mark({ attributes: { style: h } }).range(a, f));
          }
        }
      }
      e.dispatch({ effects: _v.of(be.set(r)) });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = true);
    }, this.handlers.compositionend = () => {
      if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: i } = this.composing;
        this.composing = null, i && this.reset(e.state);
      }
    };
    for (let i in this.handlers) t.addEventListener(i, this.handlers[i]);
    this.measureReq = { read: (i) => {
      this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
      let r = Yl(i.root);
      r && r.rangeCount && this.editContext.updateSelectionBounds(r.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let t = 0, i = false, r = this.pendingContextChange;
    return e.changes.iterChanges((s, o, l, a, f) => {
      if (i) return;
      let h = f.length - (o - s);
      if (r && o >= r.to) if (r.from == s && r.to == o && r.insert.eq(f)) {
        r = this.pendingContextChange = null, t += h, this.to += h;
        return;
      } else r = null, this.revertPending(e.state);
      if (s += t, o += t, o <= this.from) this.from += h, this.to += h;
      else if (s < this.to) {
        if (s < this.from || o > this.to || this.to - this.from + f.length > 3e4) {
          i = true;
          return;
        }
        this.editContext.updateText(this.toContextPos(s), this.toContextPos(o), f.toString()), this.to += h;
      }
      t += h;
    }), r && !i && this.revertPending(e.state), !i;
  }
  update(e) {
    let t = this.pendingContextChange, i = e.startState.selection.main;
    this.composing && (this.composing.drifted || !e.changes.touchesRange(i.from, i.to) && e.transactions.some((r) => !r.isUserEvent("input.type") && r.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = true, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: t } = e.selection.main;
    this.from = Math.max(0, t - 1e4), this.to = Math.min(e.doc.length, t + 1e4);
  }
  reset(e) {
    this.resetRange(e), this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)), this.setSelection(e);
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(t.from), this.toContextPos(t.from + t.insert.length), e.doc.sliceString(t.from, t.to));
  }
  setSelection(e) {
    let { main: t } = e.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), r = this.toContextPos(t.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != r) && this.editContext.updateSelection(i, r);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(this.from > 0 && t - this.from < 500 || this.to < e.doc.length && this.to - t < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(e, t = this.to - this.from) {
    e = Math.min(e, t);
    let i = this.composing;
    return i && i.drifted ? i.editorBase + (e - i.contextBase) : e + this.from;
  }
  toContextPos(e) {
    let t = this.composing;
    return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from;
  }
  destroy() {
    for (let e in this.handlers) this.editContext.removeEventListener(e, this.handlers[e]);
  }
}
class he {
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return !!this.inputState && this.inputState.composing > 0;
  }
  get compositionStarted() {
    return !!this.inputState && this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  constructor(e = {}) {
    var t;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = false, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
    let { dispatch: i } = e;
    this.dispatchTransactions = e.dispatchTransactions || i && ((r) => r.forEach((s) => i(s, this))) || ((r) => this.update(r)), this.dispatch = this.dispatch.bind(this), this._root = e.root || Nx(e.parent) || document, this.viewState = new Tg(this, e.state || Ke.create(e)), e.scrollTo && e.scrollTo.is(Pa) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(uo).map((r) => new Zf(r));
    for (let r of this.plugins) r.update(this);
    this.observer = new oS(this), this.inputState = new Ok(this), this.inputState.ensureHandlers(this.plugins), this.docView = new pg(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => {
      this.viewState.mustMeasureContent = "refresh", this.requestMeasure();
    });
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof Gt ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  update(e) {
    if (this.updateState != 0) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t = false, i = false, r, s = this.state;
    for (let m of e) {
      if (m.startState != s) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      s = m.state;
    }
    if (this.destroyed) {
      this.viewState.state = s;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    e.some((m) => m.annotation(Uv)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = qv(s, o), a || (l = 1));
    let f = this.observer.delayedAndroidKey, h = null;
    if (f ? (this.observer.clearDelayedAndroidKey(), h = this.observer.readChange(), (h && !this.state.doc.eq(s.doc) || !this.state.selection.eq(s.selection)) && (h = null)) : this.observer.clear(), s.facet(Ke.phrases) != this.state.facet(Ke.phrases)) return this.setState(s);
    r = Lc.create(this, s, e), r.flags |= l;
    let p = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let m of e) {
        if (p && (p = p.map(m.changes)), m.scrollIntoView) {
          let { main: b } = m.state.selection;
          p = new yo(b.empty ? b : j.cursor(b.head, b.head > b.anchor ? -1 : 1));
        }
        for (let b of m.effects) b.is(Pa) && (p = b.value.clip(this.state));
      }
      this.viewState.update(r, p), this.bidiCache = Ic.update(this.bidiCache, r.changes), r.empty || (this.updatePlugins(r), this.inputState.update(r)), t = this.docView.update(r), this.state.facet(wl) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((m) => m.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (r.startState.facet(Va) != r.state.facet(Va) && (this.viewState.mustMeasureContent = true), (t || i || p || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !r.empty) for (let m of this.state.facet(uu)) try {
      m(r);
    } catch (b) {
      Dn(this.state, b, "update listener");
    }
    (a || h) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), h && !Hv(this, h) && f.force && vo(this.contentDOM, f.key, f.keyCode);
    });
  }
  setState(e) {
    if (this.updateState != 0) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let i of this.plugins) i.destroy(this);
      this.viewState = new Tg(this, e), this.plugins = e.facet(uo).map((i) => new Zf(i)), this.pluginMap.clear();
      for (let i of this.plugins) i.update(this);
      this.docView.destroy(), this.docView = new pg(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(uo), i = e.state.facet(uo);
    if (t != i) {
      let r = [];
      for (let s of i) {
        let o = t.indexOf(s);
        if (o < 0) r.push(new Zf(s));
        else {
          let l = this.plugins[o];
          l.mustUpdate = e, r.push(l);
        }
      }
      for (let s of this.plugins) s.mustUpdate != e && s.destroy(this);
      this.plugins = r, this.pluginMap.clear();
    } else for (let r of this.plugins) r.mustUpdate = e;
    for (let r = 0; r < this.plugins.length; r++) this.plugins[r].update(this);
    t != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate) try {
        t.docViewUpdate(this);
      } catch (i) {
        Dn(this.state, i, "doc view update listener");
      }
    }
  }
  measure(e = true) {
    if (this.destroyed) return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, e && this.observer.forceFlush();
    let t = null, i = this.viewState.scrollParent, r = this.viewState.getScrollOffset(), { scrollAnchorPos: s, scrollAnchorHeight: o } = this.viewState;
    Math.abs(r - this.viewState.scrollOffset) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0) if (dv(i || this.win)) s = -1, o = this.viewState.heightMap.height;
        else {
          let b = this.viewState.scrollAnchorAt(r);
          s = b.from, o = b.top;
        }
        this.updateState = 1;
        let a = this.viewState.measure();
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let f = [];
        a & 4 || ([this.measureRequests, f] = [f, this.measureRequests]);
        let h = f.map((b) => {
          try {
            return b.read(this);
          } catch (x) {
            return Dn(this.state, x), Dg;
          }
        }), p = Lc.create(this, this.state, []), m = false;
        p.flags |= a, t ? t.flags |= a : t = p, this.updateState = 2, p.empty || (this.updatePlugins(p), this.inputState.update(p), this.updateAttrs(), m = this.docView.update(p), m && this.docViewUpdate());
        for (let b = 0; b < f.length; b++) if (h[b] != Dg) try {
          let x = f[b];
          x.write && x.write(h[b], this);
        } catch (x) {
          Dn(this.state, x);
        }
        if (m && this.docView.updateSelection(true), !p.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight) if (this.viewState.scrollTarget) {
            this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
            continue;
          } else {
            let x = ((s < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(s).top) - o) / this.scaleY;
            if ((x > 1 || x < -1) && (i == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
              r = r + x, i ? i.scrollTop += x : this.win.scrollBy(0, x), o = -1;
              continue;
            }
          }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty) for (let l of this.state.facet(uu)) l(t);
  }
  get themeClasses() {
    return yu + " " + (this.state.facet(vu) ? Qv : Jv) + " " + this.state.facet(Va);
  }
  updateAttrs() {
    let e = Rg(this, Lv, { class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses }), t = { spellcheck: "false", autocorrect: "off", autocapitalize: "off", writingsuggestions: "false", translate: "no", contenteditable: this.state.facet(yr) ? "true" : "false", class: "cm-content", style: `${pe.tabSize}: ${this.state.tabSize}`, role: "textbox", "aria-multiline": "true" };
    this.state.readOnly && (t["aria-readonly"] = "true"), Rg(this, Sd, t);
    let i = this.observer.ignore(() => {
      let r = ag(this.contentDOM, this.contentAttrs, t), s = ag(this.dom, this.editorAttrs, e);
      return r || s;
    });
    return this.editorAttrs = e, this.contentAttrs = t, i;
  }
  showAnnouncements(e) {
    let t = true;
    for (let i of e) for (let r of i.effects) if (r.is(he.announce)) {
      t && (this.announceDOM.textContent = ""), t = false;
      let s = this.announceDOM.appendChild(document.createElement("div"));
      s.textContent = r.value;
    }
  }
  mountStyles() {
    this.styleModules = this.state.facet(wl);
    let e = this.state.facet(he.cspNonce);
    Yr.mount(this.root, this.styleModules.concat(rS).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2) throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(false);
  }
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1) return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++) if (this.measureRequests[t].key === e.key) {
          this.measureRequests[t] = e;
          return;
        }
      }
      this.measureRequests.push(e);
    }
  }
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (t === void 0 || t && t.plugin != e) && this.pluginMap.set(e, t = this.plugins.find((i) => i.plugin == e) || null), t && t.update(this).value;
  }
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  get scaleX() {
    return this.viewState.scaleX;
  }
  get scaleY() {
    return this.viewState.scaleY;
  }
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(e, t, i) {
    return ih(this, e, gg(this, e, t, i));
  }
  moveByGroup(e, t) {
    return ih(this, e, gg(this, e, t, (i) => bk(this, e.head, i)));
  }
  visualLineSide(e, t) {
    let i = this.bidiSpans(e), r = this.textDirectionAt(e.from), s = i[t ? i.length - 1 : 0];
    return j.cursor(s.side(t, r) + e.from, s.forward(!t, r) ? 1 : -1);
  }
  moveToLineBoundary(e, t, i = true) {
    return yk(this, e, t, i);
  }
  moveVertically(e, t, i) {
    return ih(this, e, wk(this, e, t, i));
  }
  domAtPos(e, t = 1) {
    return this.docView.domAtPos(e, t);
  }
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = true) {
    this.readMeasured();
    let i = gu(this, e, t);
    return i && i.pos;
  }
  posAndSideAtCoords(e, t = true) {
    return this.readMeasured(), gu(this, e, t);
  }
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, t);
    if (!i || i.left == i.right) return i;
    let r = this.state.doc.lineAt(e), s = this.bidiSpans(r), o = s[or.find(s, e - r.from, -1, t)];
    return _c(i, o.dir == at.LTR == t > 0);
  }
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(e) {
    return !this.state.facet(Tv) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(e) {
    if (e.length > cS) return bv(e.length);
    let t = this.textDirectionAt(e.from), i;
    for (let s of this.bidiCache) if (s.from == e.from && s.dir == t && (s.fresh || yv(s.isolates, i = hg(this, e)))) return s.order;
    i || (i = hg(this, e));
    let r = jx(e.text, t, i);
    return this.bidiCache.push(new Ic(e.from, e.to, t, i, true, r)), r;
  }
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || pe.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      uv(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins) e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = true;
  }
  static scrollIntoView(e, t = {}) {
    return Pa.of(new yo(typeof e == "number" ? j.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
  }
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM, i = this.viewState.scrollAnchorAt(e);
    return Pa.of(new yo(j.cursor(i.from), "start", "start", i.top - e, t, true));
  }
  setTabFocusMode(e) {
    e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == "boolean" ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
  }
  static domEventHandlers(e) {
    return xt.define(() => ({}), { eventHandlers: e });
  }
  static domEventObservers(e) {
    return xt.define(() => ({}), { eventObservers: e });
  }
  static theme(e, t) {
    let i = Yr.newName(), r = [Va.of(i), wl.of(bu(`.${i}`, e))];
    return t && t.dark && r.push(vu.of(true)), r;
  }
  static baseTheme(e) {
    return Tr.lowest(wl.of(bu("." + yu, e, Xv)));
  }
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), r = i && Et.get(i) || Et.get(e);
    return ((t = r == null ? void 0 : r.root) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
he.styleModule = wl;
he.inputHandler = Mv;
he.clipboardInputFilter = xd;
he.clipboardOutputFilter = kd;
he.scrollHandler = Ov;
he.focusChangeEffect = Av;
he.perLineTextDirection = Tv;
he.exceptionSink = Cv;
he.updateListener = uu;
he.editable = yr;
he.mouseSelectionStyle = Sv;
he.dragMovesSelection = kv;
he.clickAddsSelectionRange = xv;
he.decorations = ff;
he.blockWrappers = Dv;
he.outerDecorations = Cd;
he.atomicRanges = fa;
he.bidiIsolatedRanges = Rv;
he.scrollMargins = Bv;
he.darkTheme = vu;
he.cspNonce = ve.define({ combine: (n) => n.length ? n[0] : "" });
he.contentAttributes = Sd;
he.editorAttributes = Lv;
he.lineWrapping = he.contentAttributes.of({ class: "cm-lineWrapping" });
he.announce = Te.define();
const cS = 4096, Dg = {};
class Ic {
  constructor(e, t, i, r, s, o) {
    this.from = e, this.to = t, this.dir = i, this.isolates = r, this.fresh = s, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((s) => s.fresh)) return e;
    let i = [], r = e.length ? e[e.length - 1].dir : at.LTR;
    for (let s = Math.max(0, e.length - 10); s < e.length; s++) {
      let o = e[s];
      o.dir == r && !t.touchesRange(o.from, o.to) && i.push(new Ic(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, false, o.order));
    }
    return i;
  }
}
function Rg(n, e, t) {
  for (let i = n.state.facet(e), r = i.length - 1; r >= 0; r--) {
    let s = i[r], o = typeof s == "function" ? s(n) : s;
    o && yd(o, t);
  }
  return t;
}
const fS = pe.mac ? "mac" : pe.windows ? "win" : pe.linux ? "linux" : "key";
function hS(n, e) {
  const t = n.split(/-(?!$)/);
  let i = t[t.length - 1];
  i == "Space" && (i = " ");
  let r, s, o, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const f = t[a];
    if (/^(cmd|meta|m)$/i.test(f)) l = true;
    else if (/^a(lt)?$/i.test(f)) r = true;
    else if (/^(c|ctrl|control)$/i.test(f)) s = true;
    else if (/^s(hift)?$/i.test(f)) o = true;
    else if (/^mod$/i.test(f)) e == "mac" ? l = true : s = true;
    else throw new Error("Unrecognized modifier name: " + f);
  }
  return r && (i = "Alt-" + i), s && (i = "Ctrl-" + i), l && (i = "Meta-" + i), o && (i = "Shift-" + i), i;
}
function za(n, e, t) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t !== false && e.shiftKey && (n = "Shift-" + n), n;
}
const uS = Tr.default(he.domEventHandlers({ keydown(n, e) {
  return ey(Zv(e.state), n, e, "editor");
} })), pf = ve.define({ enables: uS }), Bg = /* @__PURE__ */ new WeakMap();
function Zv(n) {
  let e = n.facet(pf), t = Bg.get(e);
  return t || Bg.set(e, t = pS(e.reduce((i, r) => i.concat(r), []))), t;
}
function vs(n, e, t) {
  return ey(Zv(n.state), e, n, t);
}
let $r = null;
const dS = 4e3;
function pS(n, e = fS) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), r = (o, l) => {
    let a = i[o];
    if (a == null) i[o] = l;
    else if (a != l) throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, s = (o, l, a, f, h) => {
    var p, m;
    let b = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), x = l.split(/ (?!$)/).map((D) => hS(D, e));
    for (let D = 1; D < x.length; D++) {
      let R = x.slice(0, D).join(" ");
      r(R, true), b[R] || (b[R] = { preventDefault: true, stopPropagation: false, run: [(I) => {
        let z = $r = { view: I, prefix: R, scope: o };
        return setTimeout(() => {
          $r == z && ($r = null);
        }, dS), true;
      }] });
    }
    let C = x.join(" ");
    r(C, false);
    let E = b[C] || (b[C] = { preventDefault: false, stopPropagation: false, run: ((m = (p = b._any) === null || p === void 0 ? void 0 : p.run) === null || m === void 0 ? void 0 : m.slice()) || [] });
    a && E.run.push(a), f && (E.preventDefault = true), h && (E.stopPropagation = true);
  };
  for (let o of n) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any) for (let f of l) {
      let h = t[f] || (t[f] = /* @__PURE__ */ Object.create(null));
      h._any || (h._any = { preventDefault: false, stopPropagation: false, run: [] });
      let { any: p } = o;
      for (let m in h) h[m].run.push((b) => p(b, wu));
    }
    let a = o[e] || o.key;
    if (a) for (let f of l) s(f, a, o.run, o.preventDefault, o.stopPropagation), o.shift && s(f, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
let wu = null;
function ey(n, e, t, i) {
  wu = e;
  let r = Ox(e), s = Wn(r, 0), o = rr(s) == r.length && r != " ", l = "", a = false, f = false, h = false;
  $r && $r.view == t && $r.scope == i && (l = $r.prefix + " ", zv.indexOf(e.keyCode) < 0 && (f = true, $r = null));
  let p = /* @__PURE__ */ new Set(), m = (E) => {
    if (E) {
      for (let D of E.run) if (!p.has(D) && (p.add(D), D(t))) return E.stopPropagation && (h = true), true;
      E.preventDefault && (E.stopPropagation && (h = true), f = true);
    }
    return false;
  }, b = n[i], x, C;
  return b && (m(b[l + za(r, e, !o)]) ? a = true : o && (e.altKey || e.metaKey || e.ctrlKey) && !(pe.windows && e.ctrlKey && e.altKey) && !(pe.mac && e.altKey && !(e.ctrlKey || e.metaKey)) && (x = Jr[e.keyCode]) && x != r ? (m(b[l + za(x, e, true)]) || e.shiftKey && (C = ql[e.keyCode]) != r && C != x && m(b[l + za(C, e, false)])) && (a = true) : o && e.shiftKey && m(b[l + za(r, e, true)]) && (a = true), !a && m(b._any) && (a = true)), f && (a = true), a && h && e.stopPropagation(), wu = null, a;
}
class Os {
  constructor(e, t, i, r, s) {
    this.className = e, this.left = t, this.top = i, this.width = r, this.height = s;
  }
  draw() {
    let e = document.createElement("div");
    return e.className = this.className, this.adjust(e), e;
  }
  update(e, t) {
    return t.className != this.className ? false : (this.adjust(e), true);
  }
  adjust(e) {
    e.style.left = this.left + "px", e.style.top = this.top + "px", this.width != null && (e.style.width = this.width + "px"), e.style.height = this.height + "px";
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
  }
  static forRange(e, t, i) {
    if (i.empty) {
      let r = e.coordsAtPos(i.head, i.assoc || 1);
      if (!r) return [];
      let s = ty(e);
      return [new Os(t, r.left - s.left, r.top - s.top, null, r.bottom - r.top)];
    } else return gS(e, t, i);
  }
}
function ty(n) {
  let e = n.scrollDOM.getBoundingClientRect();
  return { left: (n.textDirection == at.LTR ? e.left : e.right - n.scrollDOM.clientWidth * n.scaleX) - n.scrollDOM.scrollLeft * n.scaleX, top: e.top - n.scrollDOM.scrollTop * n.scaleY };
}
function Pg(n, e, t, i) {
  let r = n.coordsAtPos(e, t * 2);
  if (!r) return i;
  let s = n.dom.getBoundingClientRect(), o = (r.top + r.bottom) / 2, l = n.posAtCoords({ x: s.left + 1, y: o }), a = n.posAtCoords({ x: s.right - 1, y: o });
  return l == null || a == null ? i : { from: Math.max(i.from, Math.min(l, a)), to: Math.min(i.to, Math.max(l, a)) };
}
function gS(n, e, t) {
  if (t.to <= n.viewport.from || t.from >= n.viewport.to) return [];
  let i = Math.max(t.from, n.viewport.from), r = Math.min(t.to, n.viewport.to), s = n.textDirection == at.LTR, o = n.contentDOM, l = o.getBoundingClientRect(), a = ty(n), f = o.querySelector(".cm-line"), h = f && window.getComputedStyle(f), p = l.left + (h ? parseInt(h.paddingLeft) + Math.min(0, parseInt(h.textIndent)) : 0), m = l.right - (h ? parseInt(h.paddingRight) : 0), b = pu(n, i, 1), x = pu(n, r, -1), C = b.type == fn.Text ? b : null, E = x.type == fn.Text ? x : null;
  if (C && (n.lineWrapping || b.widgetLineBreaks) && (C = Pg(n, i, 1, C)), E && (n.lineWrapping || x.widgetLineBreaks) && (E = Pg(n, r, -1, E)), C && E && C.from == E.from && C.to == E.to) return R(I(t.from, t.to, C));
  {
    let K = C ? I(t.from, null, C) : z(b, false), W = E ? I(null, t.to, E) : z(x, true), $ = [];
    return (C || b).to < (E || x).from - (C && E ? 1 : 0) || b.widgetLineBreaks > 1 && K.bottom + n.defaultLineHeight / 2 < W.top ? $.push(D(p, K.bottom, m, W.top)) : K.bottom < W.top && n.elementAtHeight((K.bottom + W.top) / 2).type == fn.Text && (K.bottom = W.top = (K.bottom + W.top) / 2), R(K).concat($).concat(R(W));
  }
  function D(K, W, $, ee) {
    return new Os(e, K - a.left, W - a.top, Math.max(0, $ - K), ee - W);
  }
  function R({ top: K, bottom: W, horizontal: $ }) {
    let ee = [];
    for (let le = 0; le < $.length; le += 2) ee.push(D($[le], K, $[le + 1], W));
    return ee;
  }
  function I(K, W, $) {
    let ee = 1e9, le = -1e9, re = [];
    function U(se, ie, Se, ae, te) {
      let Ee = n.coordsAtPos(se, se == $.to ? -2 : 2), Me = n.coordsAtPos(Se, Se == $.from ? 2 : -2);
      !Ee || !Me || (ee = Math.min(Ee.top, Me.top, ee), le = Math.max(Ee.bottom, Me.bottom, le), te == at.LTR ? re.push(s && ie ? p : Ee.left, s && ae ? m : Me.right) : re.push(!s && ae ? p : Me.left, !s && ie ? m : Ee.right));
    }
    let Z = K ?? $.from, J = W ?? $.to;
    for (let se of n.visibleRanges) if (se.to > Z && se.from < J) for (let ie = Math.max(se.from, Z), Se = Math.min(se.to, J); ; ) {
      let ae = n.state.doc.lineAt(ie);
      for (let te of n.bidiSpans(ae)) {
        let Ee = te.from + ae.from, Me = te.to + ae.from;
        if (Ee >= Se) break;
        Me > ie && U(Math.max(Ee, ie), K == null && Ee <= Z, Math.min(Me, Se), W == null && Me >= J, te.dir);
      }
      if (ie = ae.to + 1, ie >= Se) break;
    }
    return re.length == 0 && U(Z, K == null, J, W == null, n.textDirection), { top: ee, bottom: le, horizontal: re };
  }
  function z(K, W) {
    let $ = l.top + (W ? K.top : K.bottom);
    return { top: $, bottom: $, horizontal: [] };
  }
}
function mS(n, e) {
  return n.constructor == e.constructor && n.eq(e);
}
class vS {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(gc) != e.state.facet(gc) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== false && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0, i = e.facet(gc);
    for (; t < i.length && i[t] != this.layer; ) t++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: e, scaleY: t } = this.view;
    (e != this.scaleX || t != this.scaleY) && (this.scaleX = e, this.scaleY = t, this.dom.style.transform = `scale(${1 / e}, ${1 / t})`);
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((t, i) => !mS(t, this.drawn[i]))) {
      let t = this.dom.firstChild, i = 0;
      for (let r of e) r.update && t && r.constructor && this.drawn[i].constructor && r.update(t, this.drawn[i]) ? (t = t.nextSibling, i++) : this.dom.insertBefore(r.draw(), t);
      for (; t; ) {
        let r = t.nextSibling;
        t.remove(), t = r;
      }
      this.drawn = e, pe.safari && pe.safari_version >= 26 && (this.dom.style.display = this.dom.firstChild ? "" : "none");
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const gc = ve.define();
function ny(n) {
  return [xt.define((e) => new vS(e, n)), gc.of(n)];
}
const Ws = ve.define({ combine(n) {
  return Or(n, { cursorBlinkRate: 1200, drawRangeCursor: true, iosSelectionHandles: true }, { cursorBlinkRate: (e, t) => Math.min(e, t), drawRangeCursor: (e, t) => e || t });
} });
function yS(n = {}) {
  return [Ws.of(n), wS, xS, kS, Ev.of(true)];
}
function bS(n) {
  return n.facet(Ws);
}
function iy(n) {
  return n.startState.facet(Ws) != n.state.facet(Ws);
}
const wS = ny({ above: true, markers(n) {
  let { state: e } = n, t = e.facet(Ws), i = [];
  for (let r of e.selection.ranges) {
    let s = r == e.selection.main;
    if (r.empty || t.drawRangeCursor && !(s && pe.ios && t.iosSelectionHandles)) {
      let o = s ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = r.empty ? r : j.cursor(r.head, r.assoc);
      for (let a of Os.forRange(n, o, l)) i.push(a);
    }
  }
  return i;
}, update(n, e) {
  n.transactions.some((i) => i.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
  let t = iy(n);
  return t && Ig(n.state, e), n.docChanged || n.selectionSet || t;
}, mount(n, e) {
  Ig(e.state, n);
}, class: "cm-cursorLayer" });
function Ig(n, e) {
  e.style.animationDuration = n.facet(Ws).cursorBlinkRate + "ms";
}
const xS = ny({ above: false, markers(n) {
  let e = [], { main: t, ranges: i } = n.state.selection;
  for (let r of i) if (!r.empty) for (let s of Os.forRange(n, "cm-selectionBackground", r)) e.push(s);
  if (pe.ios && !t.empty && n.state.facet(Ws).iosSelectionHandles) {
    for (let r of Os.forRange(n, "cm-selectionHandle cm-selectionHandle-start", j.cursor(t.from, 1))) e.push(r);
    for (let r of Os.forRange(n, "cm-selectionHandle cm-selectionHandle-end", j.cursor(t.to, 1))) e.push(r);
  }
  return e;
}, update(n, e) {
  return n.docChanged || n.selectionSet || n.viewportChanged || iy(n);
}, class: "cm-selectionLayer" }), kS = Tr.highest(he.theme({ ".cm-line": { "& ::selection, &::selection": { backgroundColor: "transparent !important" }, caretColor: "transparent !important" }, ".cm-content": { caretColor: "transparent !important", "& :focus": { caretColor: "initial !important", "&::selection, & ::selection": { backgroundColor: "Highlight !important" } } } })), ry = Te.define({ map(n, e) {
  return n == null ? null : e.mapPos(n);
} }), kl = tn.define({ create() {
  return null;
}, update(n, e) {
  return n != null && (n = e.changes.mapPos(n)), e.effects.reduce((t, i) => i.is(ry) ? i.value : t, n);
} }), SS = xt.fromClass(class {
  constructor(n) {
    this.view = n, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(n) {
    var e;
    let t = n.state.field(kl);
    t == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (n.startState.field(kl) != t || n.docChanged || n.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: n } = this, e = n.state.field(kl), t = e != null && n.coordsAtPos(e);
    if (!t) return null;
    let i = n.scrollDOM.getBoundingClientRect();
    return { left: t.left - i.left + n.scrollDOM.scrollLeft * n.scaleX, top: t.top - i.top + n.scrollDOM.scrollTop * n.scaleY, height: t.bottom - t.top };
  }
  drawCursor(n) {
    if (this.cursor) {
      let { scaleX: e, scaleY: t } = this.view;
      n ? (this.cursor.style.left = n.left / e + "px", this.cursor.style.top = n.top / t + "px", this.cursor.style.height = n.height / t + "px") : this.cursor.style.left = "-100000px";
    }
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(n) {
    this.view.state.field(kl) != n && this.view.dispatch({ effects: ry.of(n) });
  }
}, { eventObservers: { dragover(n) {
  this.setDropPos(this.view.posAtCoords({ x: n.clientX, y: n.clientY }));
}, dragleave(n) {
  (n.target == this.view.contentDOM || !this.view.contentDOM.contains(n.relatedTarget)) && this.setDropPos(null);
}, dragend() {
  this.setDropPos(null);
}, drop() {
  this.setDropPos(null);
} } });
function CS() {
  return [kl, SS];
}
function Ng(n, e, t, i, r) {
  e.lastIndex = 0;
  for (let s = n.iterRange(t, i), o = t, l; !s.next().done; o += s.value.length) if (!s.lineBreak) for (; l = e.exec(s.value); ) r(o + l.index, l);
}
function MS(n, e) {
  let t = n.visibleRanges;
  if (t.length == 1 && t[0].from == n.viewport.from && t[0].to == n.viewport.to) return t;
  let i = [];
  for (let { from: r, to: s } of t) r = Math.max(n.state.doc.lineAt(r).from, r - e), s = Math.min(n.state.doc.lineAt(s).to, s + e), i.length && i[i.length - 1].to >= r ? i[i.length - 1].to = s : i.push({ from: r, to: s });
  return i;
}
class AS {
  constructor(e) {
    const { regexp: t, decoration: i, decorate: r, boundary: s, maxLength: o = 1e3 } = e;
    if (!t.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = t, r) this.addMatch = (l, a, f, h) => r(h, f, f + l[0].length, l, a);
    else if (typeof i == "function") this.addMatch = (l, a, f, h) => {
      let p = i(l, a, f);
      p && h(f, f + l[0].length, p);
    };
    else if (i) this.addMatch = (l, a, f, h) => h(f, f + l[0].length, i);
    else throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = s, this.maxLength = o;
  }
  createDeco(e) {
    let t = new Bi(), i = t.add.bind(t);
    for (let { from: r, to: s } of MS(e, this.maxLength)) Ng(e.state.doc, this.regexp, r, s, (o, l) => this.addMatch(l, e, o, i));
    return t.finish();
  }
  updateDeco(e, t) {
    let i = 1e9, r = -1;
    return e.docChanged && e.changes.iterChanges((s, o, l, a) => {
      a >= e.view.viewport.from && l <= e.view.viewport.to && (i = Math.min(l, i), r = Math.max(a, r));
    }), e.viewportMoved || r - i > 1e3 ? this.createDeco(e.view) : r > -1 ? this.updateRange(e.view, t.map(e.changes), i, r) : t;
  }
  updateRange(e, t, i, r) {
    for (let s of e.visibleRanges) {
      let o = Math.max(s.from, i), l = Math.min(s.to, r);
      if (l >= o) {
        let a = e.state.doc.lineAt(o), f = a.to < l ? e.state.doc.lineAt(l) : a, h = Math.max(s.from, a.from), p = Math.min(s.to, f.to);
        if (this.boundary) {
          for (; o > a.from; o--) if (this.boundary.test(a.text[o - 1 - a.from])) {
            h = o;
            break;
          }
          for (; l < f.to; l++) if (this.boundary.test(f.text[l - f.from])) {
            p = l;
            break;
          }
        }
        let m = [], b, x = (C, E, D) => m.push(D.range(C, E));
        if (a == f) for (this.regexp.lastIndex = h - a.from; (b = this.regexp.exec(a.text)) && b.index < p - a.from; ) this.addMatch(b, e, b.index + a.from, x);
        else Ng(e.state.doc, this.regexp, h, p, (C, E) => this.addMatch(E, e, C, x));
        t = t.update({ filterFrom: h, filterTo: p, filter: (C, E) => C < h || E > p, add: m });
      }
    }
    return t;
  }
}
const xu = /x/.unicode != null ? "gu" : "g", TS = new RegExp(`[\0-\b
-\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\u2066\u2067\u2069\uFEFF\uFFF9-\uFFFC]`, xu), ES = { 0: "null", 7: "bell", 8: "backspace", 10: "newline", 11: "vertical tab", 13: "carriage return", 27: "escape", 8203: "zero width space", 8204: "zero width non-joiner", 8205: "zero width joiner", 8206: "left-to-right mark", 8207: "right-to-left mark", 8232: "line separator", 8237: "left-to-right override", 8238: "right-to-left override", 8294: "left-to-right isolate", 8295: "right-to-left isolate", 8297: "pop directional isolate", 8233: "paragraph separator", 65279: "zero width no-break space", 65532: "object replacement" };
let oh = null;
function OS() {
  var n;
  if (oh == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    oh = ((n = e.tabSize) !== null && n !== void 0 ? n : e.MozTabSize) != null;
  }
  return oh || false;
}
const mc = ve.define({ combine(n) {
  let e = Or(n, { render: null, specialChars: TS, addSpecialChars: null });
  return (e.replaceTabs = !OS()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, xu)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, xu)), e;
} });
function _S(n = {}) {
  return [mc.of(n), LS()];
}
let Fg = null;
function LS() {
  return Fg || (Fg = xt.fromClass(class {
    constructor(n) {
      this.view = n, this.decorations = be.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(n.state.facet(mc)), this.decorations = this.decorator.createDeco(n);
    }
    makeDecorator(n) {
      return new AS({ regexp: n.specialChars, decoration: (e, t, i) => {
        let { doc: r } = t.state, s = Wn(e[0], 0);
        if (s == 9) {
          let o = r.lineAt(i), l = t.state.tabSize, a = No(o.text, l, i - o.from);
          return be.replace({ widget: new PS((l - a % l) * this.view.defaultCharacterWidth / this.view.scaleX) });
        }
        return this.decorationCache[s] || (this.decorationCache[s] = be.replace({ widget: new BS(n, s) }));
      }, boundary: n.replaceTabs ? void 0 : /[^]/ });
    }
    update(n) {
      let e = n.state.facet(mc);
      n.startState.facet(mc) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(n.view)) : this.decorations = this.decorator.updateDeco(n, this.decorations);
    }
  }, { decorations: (n) => n.decorations }));
}
const DS = "\u2022";
function RS(n) {
  return n >= 32 ? DS : n == 10 ? "\u2424" : String.fromCharCode(9216 + n);
}
class BS extends wi {
  constructor(e, t) {
    super(), this.options = e, this.code = t;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = RS(this.code), i = e.state.phrase("Control character") + " " + (ES[this.code] || "0x" + this.code.toString(16)), r = this.options.render && this.options.render(this.code, i, t);
    if (r) return r;
    let s = document.createElement("span");
    return s.textContent = t, s.title = i, s.setAttribute("aria-label", i), s.className = "cm-specialChar", s;
  }
  ignoreEvent() {
    return false;
  }
}
class PS extends wi {
  constructor(e) {
    super(), this.width = e;
  }
  eq(e) {
    return e.width == this.width;
  }
  toDOM() {
    let e = document.createElement("span");
    return e.textContent = "	", e.className = "cm-tab", e.style.width = this.width + "px", e;
  }
  ignoreEvent() {
    return false;
  }
}
function IS() {
  return FS;
}
const NS = be.line({ class: "cm-activeLine" }), FS = xt.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.docChanged || n.selectionSet) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let e = -1, t = [];
    for (let i of n.state.selection.ranges) {
      let r = n.lineBlockAt(i.head);
      r.from > e && (t.push(NS.range(r.from)), e = r.from);
    }
    return be.set(t);
  }
}, { decorations: (n) => n.decorations }), ku = 2e3;
function HS(n, e, t) {
  let i = Math.min(e.line, t.line), r = Math.max(e.line, t.line), s = [];
  if (e.off > ku || t.off > ku || e.col < 0 || t.col < 0) {
    let o = Math.min(e.off, t.off), l = Math.max(e.off, t.off);
    for (let a = i; a <= r; a++) {
      let f = n.doc.line(a);
      f.length <= l && s.push(j.range(f.from + o, f.to + l));
    }
  } else {
    let o = Math.min(e.col, t.col), l = Math.max(e.col, t.col);
    for (let a = i; a <= r; a++) {
      let f = n.doc.line(a), h = tu(f.text, o, n.tabSize, true);
      if (h < 0) s.push(j.cursor(f.to));
      else {
        let p = tu(f.text, l, n.tabSize);
        s.push(j.range(f.from + h, f.from + p));
      }
    }
  }
  return s;
}
function WS(n, e) {
  let t = n.coordsAtPos(n.viewport.from);
  return t ? Math.round(Math.abs((t.left - e) / n.defaultCharacterWidth)) : -1;
}
function Hg(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, false), i = n.state.doc.lineAt(t), r = t - i.from, s = r > ku ? -1 : r == i.length ? WS(n, e.clientX) : No(i.text, n.state.tabSize, t - i.from);
  return { line: i.number, col: s, off: r };
}
function VS(n, e) {
  let t = Hg(n, e), i = n.state.selection;
  return t ? { update(r) {
    if (r.docChanged) {
      let s = r.changes.mapPos(r.startState.doc.line(t.line).from), o = r.state.doc.lineAt(s);
      t = { line: o.number, col: t.col, off: Math.min(t.off, o.length) }, i = i.map(r.changes);
    }
  }, get(r, s, o) {
    let l = Hg(n, r);
    if (!l) return i;
    let a = HS(n.state, t, l);
    return a.length ? o ? j.create(a.concat(i.ranges)) : j.create(a) : i;
  } } : null;
}
function zS(n) {
  let e = ((t) => t.altKey && t.button == 0);
  return he.mouseSelectionStyle.of((t, i) => e(i) ? VS(t, i) : null);
}
const KS = { Alt: [18, (n) => !!n.altKey], Control: [17, (n) => !!n.ctrlKey], Shift: [16, (n) => !!n.shiftKey], Meta: [91, (n) => !!n.metaKey] }, $S = { style: "cursor: crosshair" };
function jS(n = {}) {
  let [e, t] = KS[n.key || "Alt"], i = xt.fromClass(class {
    constructor(r) {
      this.view = r, this.isDown = false;
    }
    set(r) {
      this.isDown != r && (this.isDown = r, this.view.update([]));
    }
  }, { eventObservers: { keydown(r) {
    this.set(r.keyCode == e || t(r));
  }, keyup(r) {
    (r.keyCode == e || !t(r)) && this.set(false);
  }, mousemove(r) {
    this.set(t(r));
  } } });
  return [i, he.contentAttributes.of((r) => {
    var s;
    return !((s = r.plugin(i)) === null || s === void 0) && s.isDown ? $S : null;
  })];
}
const Ka = "-10000px";
class sy {
  constructor(e, t, i, r) {
    this.facet = t, this.createTooltipView = i, this.removeTooltipView = r, this.input = e.state.facet(t), this.tooltips = this.input.filter((o) => o);
    let s = null;
    this.tooltipViews = this.tooltips.map((o) => s = i(o, s));
  }
  update(e, t) {
    var i;
    let r = e.state.facet(this.facet), s = r.filter((a) => a);
    if (r === this.input) {
      for (let a of this.tooltipViews) a.update && a.update(e);
      return false;
    }
    let o = [], l = t ? [] : null;
    for (let a = 0; a < s.length; a++) {
      let f = s[a], h = -1;
      if (f) {
        for (let p = 0; p < this.tooltips.length; p++) {
          let m = this.tooltips[p];
          m && m.create == f.create && (h = p);
        }
        if (h < 0) o[a] = this.createTooltipView(f, a ? o[a - 1] : null), l && (l[a] = !!f.above);
        else {
          let p = o[a] = this.tooltipViews[h];
          l && (l[a] = t[h]), p.update && p.update(e);
        }
      }
    }
    for (let a of this.tooltipViews) o.indexOf(a) < 0 && (this.removeTooltipView(a), (i = a.destroy) === null || i === void 0 || i.call(a));
    return t && (l.forEach((a, f) => t[f] = a), t.length = l.length), this.input = r, this.tooltips = s, this.tooltipViews = o, true;
  }
}
function US(n) {
  let e = n.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: e.clientHeight, right: e.clientWidth };
}
const lh = ve.define({ combine: (n) => {
  var e, t, i;
  return { position: pe.ios ? "absolute" : ((e = n.find((r) => r.position)) === null || e === void 0 ? void 0 : e.position) || "fixed", parent: ((t = n.find((r) => r.parent)) === null || t === void 0 ? void 0 : t.parent) || null, tooltipSpace: ((i = n.find((r) => r.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || US };
} }), Wg = /* @__PURE__ */ new WeakMap(), Od = xt.fromClass(class {
  constructor(n) {
    this.view = n, this.above = [], this.inView = true, this.madeAbsolute = false, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = n.state.facet(lh);
    this.position = e.position, this.parent = e.parent, this.classes = n.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new sy(n, gf, (t, i) => this.createTooltip(t, i), (t) => {
      this.resizeObserver && this.resizeObserver.unobserve(t.dom), t.dom.remove();
    }), this.above = this.manager.tooltips.map((t) => !!t.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((t) => {
      Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), n.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let n of this.manager.tooltipViews) this.intersectionObserver.observe(n.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(n) {
    n.transactions.length && (this.lastTransaction = Date.now());
    let e = this.manager.update(n, this.above);
    e && this.observeIntersection();
    let t = e || n.geometryChanged, i = n.state.facet(lh);
    if (i.position != this.position && !this.madeAbsolute) {
      this.position = i.position;
      for (let r of this.manager.tooltipViews) r.dom.style.position = this.position;
      t = true;
    }
    if (i.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
      for (let r of this.manager.tooltipViews) this.container.appendChild(r.dom);
      t = true;
    } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    t && this.maybeMeasure();
  }
  createTooltip(n, e) {
    let t = n.create(this.view), i = e ? e.dom : null;
    if (t.dom.classList.add("cm-tooltip"), n.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let r = document.createElement("div");
      r.className = "cm-tooltip-arrow", t.dom.appendChild(r);
    }
    return t.dom.style.position = this.position, t.dom.style.top = Ka, t.dom.style.left = "0px", this.container.insertBefore(t.dom, i), t.mount && t.mount(this.view), this.resizeObserver && this.resizeObserver.observe(t.dom), t;
  }
  destroy() {
    var n, e, t;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let i of this.manager.tooltipViews) i.dom.remove(), (n = i.destroy) === null || n === void 0 || n.call(i);
    this.parent && this.container.remove(), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), (t = this.intersectionObserver) === null || t === void 0 || t.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let n = 1, e = 1, t = false;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: s } = this.manager.tooltipViews[0];
      if (pe.safari) {
        let o = s.getBoundingClientRect();
        t = Math.abs(o.top + 1e4) > 1 || Math.abs(o.left) > 1;
      } else t = !!s.offsetParent && s.offsetParent != this.container.ownerDocument.body;
    }
    if (t || this.position == "absolute") if (this.parent) {
      let s = this.parent.getBoundingClientRect();
      s.width && s.height && (n = s.width / this.parent.offsetWidth, e = s.height / this.parent.offsetHeight);
    } else ({ scaleX: n, scaleY: e } = this.view.viewState);
    let i = this.view.scrollDOM.getBoundingClientRect(), r = Md(this.view);
    return { visible: { left: i.left + r.left, top: i.top + r.top, right: i.right - r.right, bottom: i.bottom - r.bottom }, parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(), pos: this.manager.tooltips.map((s, o) => {
      let l = this.manager.tooltipViews[o];
      return l.getCoords ? l.getCoords(s.pos) : this.view.coordsAtPos(s.pos);
    }), size: this.manager.tooltipViews.map(({ dom: s }) => s.getBoundingClientRect()), space: this.view.state.facet(lh).tooltipSpace(this.view), scaleX: n, scaleY: e, makeAbsolute: t };
  }
  writeMeasure(n) {
    var e;
    if (n.makeAbsolute) {
      this.madeAbsolute = true, this.position = "absolute";
      for (let l of this.manager.tooltipViews) l.dom.style.position = "absolute";
    }
    let { visible: t, space: i, scaleX: r, scaleY: s } = n, o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], f = this.manager.tooltipViews[l], { dom: h } = f, p = n.pos[l], m = n.size[l];
      if (!p || a.clip !== false && (p.bottom <= Math.max(t.top, i.top) || p.top >= Math.min(t.bottom, i.bottom) || p.right < Math.max(t.left, i.left) - 0.1 || p.left > Math.min(t.right, i.right) + 0.1)) {
        h.style.top = Ka;
        continue;
      }
      let b = a.arrow ? f.dom.querySelector(".cm-tooltip-arrow") : null, x = b ? 7 : 0, C = m.right - m.left, E = (e = Wg.get(f)) !== null && e !== void 0 ? e : m.bottom - m.top, D = f.offset || GS, R = this.view.textDirection == at.LTR, I = m.width > i.right - i.left ? R ? i.left : i.right - m.width : R ? Math.max(i.left, Math.min(p.left - (b ? 14 : 0) + D.x, i.right - C)) : Math.min(Math.max(i.left, p.left - C + (b ? 14 : 0) - D.x), i.right - C), z = this.above[l];
      !a.strictSide && (z ? p.top - E - x - D.y < i.top : p.bottom + E + x + D.y > i.bottom) && z == i.bottom - p.bottom > p.top - i.top && (z = this.above[l] = !z);
      let K = (z ? p.top - i.top : i.bottom - p.bottom) - x;
      if (K < E && f.resize !== false) {
        if (K < this.view.defaultLineHeight) {
          h.style.top = Ka;
          continue;
        }
        Wg.set(f, E), h.style.height = (E = K) / s + "px";
      } else h.style.height && (h.style.height = "");
      let W = z ? p.top - E - x - D.y : p.bottom + x + D.y, $ = I + C;
      if (f.overlap !== true) for (let ee of o) ee.left < $ && ee.right > I && ee.top < W + E && ee.bottom > W && (W = z ? ee.top - E - 2 - x : ee.bottom + x + 2);
      if (this.position == "absolute" ? (h.style.top = (W - n.parent.top) / s + "px", Vg(h, (I - n.parent.left) / r)) : (h.style.top = W / s + "px", Vg(h, I / r)), b) {
        let ee = p.left + (R ? D.x : -D.x) - (I + 14 - 7);
        b.style.left = ee / r + "px";
      }
      f.overlap !== true && o.push({ left: I, top: W, right: $, bottom: W + E }), h.classList.toggle("cm-tooltip-above", z), h.classList.toggle("cm-tooltip-below", !z), f.positioned && f.positioned(n.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) for (let n of this.manager.tooltipViews) n.dom.style.top = Ka;
  }
}, { eventObservers: { scroll() {
  this.maybeMeasure();
} } });
function Vg(n, e) {
  let t = parseInt(n.style.left, 10);
  (isNaN(t) || Math.abs(e - t) > 1) && (n.style.left = e + "px");
}
const qS = he.baseTheme({ ".cm-tooltip": { zIndex: 500, boxSizing: "border-box" }, "&light .cm-tooltip": { border: "1px solid #bbb", backgroundColor: "#f5f5f5" }, "&light .cm-tooltip-section:not(:first-child)": { borderTop: "1px solid #bbb" }, "&dark .cm-tooltip": { backgroundColor: "#333338", color: "white" }, ".cm-tooltip-arrow": { height: "7px", width: "14px", position: "absolute", zIndex: -1, overflow: "hidden", "&:before, &:after": { content: "''", position: "absolute", width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent" }, ".cm-tooltip-above &": { bottom: "-7px", "&:before": { borderTop: "7px solid #bbb" }, "&:after": { borderTop: "7px solid #f5f5f5", bottom: "1px" } }, ".cm-tooltip-below &": { top: "-7px", "&:before": { borderBottom: "7px solid #bbb" }, "&:after": { borderBottom: "7px solid #f5f5f5", top: "1px" } } }, "&dark .cm-tooltip .cm-tooltip-arrow": { "&:before": { borderTopColor: "#333338", borderBottomColor: "#333338" }, "&:after": { borderTopColor: "transparent", borderBottomColor: "transparent" } } }), GS = { x: 0, y: 0 }, gf = ve.define({ enables: [Od, qS] }), Nc = ve.define({ combine: (n) => n.reduce((e, t) => e.concat(t), []) });
class mf {
  static create(e) {
    return new mf(e);
  }
  constructor(e) {
    this.view = e, this.mounted = false, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new sy(e, Nc, (t, i) => this.createHostedView(t, i), (t) => t.dom.remove());
  }
  createHostedView(e, t) {
    let i = e.create(this.view);
    return i.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(i.dom, t ? t.dom.nextSibling : this.dom.firstChild), this.mounted && i.mount && i.mount(this.view), i;
  }
  mount(e) {
    for (let t of this.manager.tooltipViews) t.mount && t.mount(e);
    this.mounted = true;
  }
  positioned(e) {
    for (let t of this.manager.tooltipViews) t.positioned && t.positioned(e);
  }
  update(e) {
    this.manager.update(e);
  }
  destroy() {
    var e;
    for (let t of this.manager.tooltipViews) (e = t.destroy) === null || e === void 0 || e.call(t);
  }
  passProp(e) {
    let t;
    for (let i of this.manager.tooltipViews) {
      let r = i[e];
      if (r !== void 0) {
        if (t === void 0) t = r;
        else if (t !== r) return;
      }
    }
    return t;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const YS = gf.compute([Nc], (n) => {
  let e = n.facet(Nc);
  return e.length === 0 ? null : { pos: Math.min(...e.map((t) => t.pos)), end: Math.max(...e.map((t) => {
    var i;
    return (i = t.end) !== null && i !== void 0 ? i : t.pos;
  })), create: mf.create, above: e[0].above, arrow: e.some((t) => t.arrow) };
});
class JS {
  constructor(e, t, i, r, s) {
    this.view = e, this.source = t, this.field = i, this.setHover = r, this.hoverTime = s, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active.length) return;
    let e = Date.now() - this.lastMove.time;
    e < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: e, lastMove: t } = this, i = e.docView.tile.nearest(t.target);
    if (!i) return;
    let r, s = 1;
    if (i.isWidget()) r = i.posAtStart;
    else {
      if (r = e.posAtCoords(t), r == null) return;
      let l = e.coordsAtPos(r);
      if (!l || t.y < l.top || t.y > l.bottom || t.x < l.left - e.defaultCharacterWidth || t.x > l.right + e.defaultCharacterWidth) return;
      let a = e.bidiSpans(e.state.doc.lineAt(r)).find((h) => h.from <= r && h.to >= r), f = a && a.dir == at.RTL ? -1 : 1;
      s = t.x < l.left ? -f : f;
    }
    let o = this.source(e, r, s);
    if (o == null ? void 0 : o.then) {
      let l = this.pending = { pos: r };
      o.then((a) => {
        this.pending == l && (this.pending = null, a && !(Array.isArray(a) && !a.length) && e.dispatch({ effects: this.setHover.of(Array.isArray(a) ? a : [a]) }));
      }, (a) => Dn(e.state, a, "hover tooltip"));
    } else o && !(Array.isArray(o) && !o.length) && e.dispatch({ effects: this.setHover.of(Array.isArray(o) ? o : [o]) });
  }
  get tooltip() {
    let e = this.view.plugin(Od), t = e ? e.manager.tooltips.findIndex((i) => i.create == mf.create) : -1;
    return t > -1 ? e.manager.tooltipViews[t] : null;
  }
  mousemove(e) {
    var t, i;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: r, tooltip: s } = this;
    if (r.length && s && !QS(s.dom, e) || this.pending) {
      let { pos: o } = r[0] || this.pending, l = (i = (t = r[0]) === null || t === void 0 ? void 0 : t.end) !== null && i !== void 0 ? i : o;
      (o == l ? this.view.posAtCoords(this.lastMove) != o : !XS(this.view, o, l, e.clientX, e.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
    let { active: t } = this;
    if (t.length) {
      let { tooltip: i } = this;
      i && i.dom.contains(e.relatedTarget) ? this.watchTooltipLeave(i.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(e) {
    let t = (i) => {
      e.removeEventListener("mouseleave", t), this.active.length && !this.view.dom.contains(i.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
    };
    e.addEventListener("mouseleave", t);
  }
  destroy() {
    clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const $a = 4;
function QS(n, e) {
  let { left: t, right: i, top: r, bottom: s } = n.getBoundingClientRect(), o;
  if (o = n.querySelector(".cm-tooltip-arrow")) {
    let l = o.getBoundingClientRect();
    r = Math.min(l.top, r), s = Math.max(l.bottom, s);
  }
  return e.clientX >= t - $a && e.clientX <= i + $a && e.clientY >= r - $a && e.clientY <= s + $a;
}
function XS(n, e, t, i, r, s) {
  let o = n.scrollDOM.getBoundingClientRect(), l = n.documentTop + n.documentPadding.top + n.contentHeight;
  if (o.left > i || o.right < i || o.top > r || Math.min(o.bottom, l) < r) return false;
  let a = n.posAtCoords({ x: i, y: r }, false);
  return a >= e && a <= t;
}
function oy(n, e = {}) {
  let t = Te.define(), i = tn.define({ create() {
    return [];
  }, update(r, s) {
    if (r.length && (e.hideOnChange && (s.docChanged || s.selection) ? r = [] : e.hideOn && (r = r.filter((o) => !e.hideOn(s, o))), s.docChanged)) {
      let o = [];
      for (let l of r) {
        let a = s.changes.mapPos(l.pos, -1, an.TrackDel);
        if (a != null) {
          let f = Object.assign(/* @__PURE__ */ Object.create(null), l);
          f.pos = a, f.end != null && (f.end = s.changes.mapPos(f.end)), o.push(f);
        }
      }
      r = o;
    }
    for (let o of s.effects) o.is(t) && (r = o.value), o.is(ZS) && (r = []);
    return r;
  }, provide: (r) => Nc.from(r) });
  return { active: i, extension: [i, xt.define((r) => new JS(r, n, i, t, e.hoverTime || 300)), YS] };
}
function ly(n, e) {
  let t = n.plugin(Od);
  if (!t) return null;
  let i = t.manager.tooltips.indexOf(e);
  return i < 0 ? null : t.manager.tooltipViews[i];
}
const ZS = Te.define(), zg = ve.define({ combine(n) {
  let e, t;
  for (let i of n) e = e || i.topContainer, t = t || i.bottomContainer;
  return { topContainer: e, bottomContainer: t };
} });
function _d(n, e) {
  let t = n.plugin(ay), i = t ? t.specs.indexOf(e) : -1;
  return i > -1 ? t.panels[i] : null;
}
const ay = xt.fromClass(class {
  constructor(n) {
    this.input = n.state.facet(Vs), this.specs = this.input.filter((t) => t), this.panels = this.specs.map((t) => t(n));
    let e = n.state.facet(zg);
    this.top = new ja(n, true, e.topContainer), this.bottom = new ja(n, false, e.bottomContainer), this.top.sync(this.panels.filter((t) => t.top)), this.bottom.sync(this.panels.filter((t) => !t.top));
    for (let t of this.panels) t.dom.classList.add("cm-panel"), t.mount && t.mount();
  }
  update(n) {
    let e = n.state.facet(zg);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new ja(n.view, true, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new ja(n.view, false, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let t = n.state.facet(Vs);
    if (t != this.input) {
      let i = t.filter((a) => a), r = [], s = [], o = [], l = [];
      for (let a of i) {
        let f = this.specs.indexOf(a), h;
        f < 0 ? (h = a(n.view), l.push(h)) : (h = this.panels[f], h.update && h.update(n)), r.push(h), (h.top ? s : o).push(h);
      }
      this.specs = i, this.panels = r, this.top.sync(s), this.bottom.sync(o);
      for (let a of l) a.dom.classList.add("cm-panel"), a.mount && a.mount();
    } else for (let i of this.panels) i.update && i.update(n);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, { provide: (n) => he.scrollMargins.of((e) => {
  let t = e.plugin(n);
  return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() };
}) });
class ja {
  constructor(e, t, i) {
    this.view = e, this.top = t, this.container = i, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(e) {
    for (let t of this.panels) t.destroy && e.indexOf(t) < 0 && t.destroy();
    this.panels = e, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let t = this.container || this.view.dom;
      t.insertBefore(this.dom, this.top ? t.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let t of this.panels) if (t.dom.parentNode == this.dom) {
      for (; e != t.dom; ) e = Kg(e);
      e = e.nextSibling;
    } else this.dom.insertBefore(t.dom, e);
    for (; e; ) e = Kg(e);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let e of this.classes.split(" ")) e && this.container.classList.remove(e);
      for (let e of (this.classes = this.view.themeClasses).split(" ")) e && this.container.classList.add(e);
    }
  }
}
function Kg(n) {
  let e = n.nextSibling;
  return n.remove(), e;
}
const Vs = ve.define({ enables: ay });
function eC(n, e) {
  let t, i = new Promise((o) => t = o), r = (o) => tC(o, e, t);
  n.state.field(ah, false) ? n.dispatch({ effects: cy.of(r) }) : n.dispatch({ effects: Te.appendConfig.of(ah.init(() => [r])) });
  let s = fy.of(r);
  return { close: s, result: i.then((o) => ((n.win.queueMicrotask || ((a) => n.win.setTimeout(a, 10)))(() => {
    n.state.field(ah).indexOf(r) > -1 && n.dispatch({ effects: s });
  }), o)) };
}
const ah = tn.define({ create() {
  return [];
}, update(n, e) {
  for (let t of e.effects) t.is(cy) ? n = [t.value].concat(n) : t.is(fy) && (n = n.filter((i) => i != t.value));
  return n;
}, provide: (n) => Vs.computeN([n], (e) => e.field(n)) }), cy = Te.define(), fy = Te.define();
function tC(n, e, t) {
  let i = e.content ? e.content(n, () => o(null)) : null;
  if (!i) {
    if (i = lt("form"), e.input) {
      let l = lt("input", e.input);
      /^(text|password|number|email|tel|url)$/.test(l.type) && l.classList.add("cm-textfield"), l.name || (l.name = "input"), i.appendChild(lt("label", (e.label || "") + ": ", l));
    } else i.appendChild(document.createTextNode(e.label || ""));
    i.appendChild(document.createTextNode(" ")), i.appendChild(lt("button", { class: "cm-button", type: "submit" }, e.submitLabel || "OK"));
  }
  let r = i.nodeName == "FORM" ? [i] : i.querySelectorAll("form");
  for (let l = 0; l < r.length; l++) {
    let a = r[l];
    a.addEventListener("keydown", (f) => {
      f.keyCode == 27 ? (f.preventDefault(), o(null)) : f.keyCode == 13 && (f.preventDefault(), o(a));
    }), a.addEventListener("submit", (f) => {
      f.preventDefault(), o(a);
    });
  }
  let s = lt("div", i, lt("button", { onclick: () => o(null), "aria-label": n.state.phrase("close"), class: "cm-dialog-close", type: "button" }, ["\xD7"]));
  e.class && (s.className = e.class), s.classList.add("cm-dialog");
  function o(l) {
    s.contains(s.ownerDocument.activeElement) && n.focus(), t(l);
  }
  return { dom: s, top: e.top, mount: () => {
    if (e.focus) {
      let l;
      typeof e.focus == "string" ? l = i.querySelector(e.focus) : l = i.querySelector("input") || i.querySelector("button"), l && "select" in l ? l.select() : l && "focus" in l && l.focus();
    }
  } };
}
class Xr extends Gr {
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  eq(e) {
    return false;
  }
  destroy(e) {
  }
}
Xr.prototype.elementClass = "";
Xr.prototype.toDOM = void 0;
Xr.prototype.mapMode = an.TrackBefore;
Xr.prototype.startSide = Xr.prototype.endSide = -1;
Xr.prototype.point = true;
const vc = ve.define(), nC = ve.define(), iC = { class: "", renderEmptyElements: false, elementStyle: "", markers: () => He.empty, lineMarker: () => null, widgetMarker: () => null, lineMarkerChange: null, initialSpacer: null, updateSpacer: null, domEventHandlers: {}, side: "before" }, yc = ve.define();
function rC(n) {
  return [sC(), yc.of({ ...iC, ...n })];
}
const $g = ve.define({ combine: (n) => n.some((e) => e) });
function sC(n) {
  return [oC];
}
const oC = xt.fromClass(class {
  constructor(n) {
    this.view = n, this.domAfter = null, this.prevViewport = n.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = n.state.facet(yc).map((e) => new Ug(n, e)), this.fixed = !n.state.facet($g);
    for (let e of this.gutters) e.config.side == "after" ? this.getDOMAfter().appendChild(e.dom) : this.dom.appendChild(e.dom);
    this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(false), n.scrollDOM.insertBefore(this.dom, n.contentDOM);
  }
  getDOMAfter() {
    return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter;
  }
  update(n) {
    if (this.updateGutters(n)) {
      let e = this.prevViewport, t = n.view.viewport, i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(i < (t.to - t.from) * 0.8);
    }
    if (n.geometryChanged) {
      let e = this.view.contentHeight / this.view.scaleY + "px";
      this.dom.style.minHeight = e, this.domAfter && (this.domAfter.style.minHeight = e);
    }
    this.view.state.facet($g) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = n.view.viewport;
  }
  syncGutters(n) {
    let e = this.dom.nextSibling;
    n && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let t = He.iter(this.view.state.facet(vc), this.view.viewport.from), i = [], r = this.gutters.map((s) => new lC(s, this.view.viewport, -this.view.documentPadding.top));
    for (let s of this.view.viewportLineBlocks) if (i.length && (i = []), Array.isArray(s.type)) {
      let o = true;
      for (let l of s.type) if (l.type == fn.Text && o) {
        Su(t, i, l.from);
        for (let a of r) a.line(this.view, l, i);
        o = false;
      } else if (l.widget) for (let a of r) a.widget(this.view, l);
    } else if (s.type == fn.Text) {
      Su(t, i, s.from);
      for (let o of r) o.line(this.view, s, i);
    } else if (s.widget) for (let o of r) o.widget(this.view, s);
    for (let s of r) s.finish();
    n && (this.view.scrollDOM.insertBefore(this.dom, e), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(n) {
    let e = n.startState.facet(yc), t = n.state.facet(yc), i = n.docChanged || n.heightChanged || n.viewportChanged || !He.eq(n.startState.facet(vc), n.state.facet(vc), n.view.viewport.from, n.view.viewport.to);
    if (e == t) for (let r of this.gutters) r.update(n) && (i = true);
    else {
      i = true;
      let r = [];
      for (let s of t) {
        let o = e.indexOf(s);
        o < 0 ? r.push(new Ug(this.view, s)) : (this.gutters[o].update(n), r.push(this.gutters[o]));
      }
      for (let s of this.gutters) s.dom.remove(), r.indexOf(s) < 0 && s.destroy();
      for (let s of r) s.config.side == "after" ? this.getDOMAfter().appendChild(s.dom) : this.dom.appendChild(s.dom);
      this.gutters = r;
    }
    return i;
  }
  destroy() {
    for (let n of this.gutters) n.destroy();
    this.dom.remove(), this.domAfter && this.domAfter.remove();
  }
}, { provide: (n) => he.scrollMargins.of((e) => {
  let t = e.plugin(n);
  if (!t || t.gutters.length == 0 || !t.fixed) return null;
  let i = t.dom.offsetWidth * e.scaleX, r = t.domAfter ? t.domAfter.offsetWidth * e.scaleX : 0;
  return e.textDirection == at.LTR ? { left: i, right: r } : { right: i, left: r };
}) });
function jg(n) {
  return Array.isArray(n) ? n : [n];
}
function Su(n, e, t) {
  for (; n.value && n.from <= t; ) n.from == t && e.push(n.value), n.next();
}
class lC {
  constructor(e, t, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = He.iter(e.markers, t.from);
  }
  addElement(e, t, i) {
    let { gutter: r } = this, s = (t.top - this.height) / e.scaleY, o = t.height / e.scaleY;
    if (this.i == r.elements.length) {
      let l = new hy(e, o, s, i);
      r.elements.push(l), r.dom.appendChild(l.dom);
    } else r.elements[this.i].update(e, o, s, i);
    this.height = t.bottom, this.i++;
  }
  line(e, t, i) {
    let r = [];
    Su(this.cursor, r, t.from), i.length && (r = r.concat(i));
    let s = this.gutter.config.lineMarker(e, t, r);
    s && r.unshift(s);
    let o = this.gutter;
    r.length == 0 && !o.config.renderEmptyElements || this.addElement(e, t, r);
  }
  widget(e, t) {
    let i = this.gutter.config.widgetMarker(e, t.widget, t), r = i ? [i] : null;
    for (let s of e.state.facet(nC)) {
      let o = s(e, t.widget, t);
      o && (r || (r = [])).push(o);
    }
    r && this.addElement(e, t, r);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class Ug {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in t.domEventHandlers) this.dom.addEventListener(i, (r) => {
      let s = r.target, o;
      if (s != this.dom && this.dom.contains(s)) {
        for (; s.parentNode != this.dom; ) s = s.parentNode;
        let a = s.getBoundingClientRect();
        o = (a.top + a.bottom) / 2;
      } else o = r.clientY;
      let l = e.lineBlockAtHeight(o - e.documentTop);
      t.domEventHandlers[i](e, l, r) && r.preventDefault();
    });
    this.markers = jg(t.markers(e)), t.initialSpacer && (this.spacer = new hy(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = jg(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let r = this.config.updateSpacer(this.spacer.markers[0], e);
      r != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [r]);
    }
    let i = e.view.viewport;
    return !He.eq(this.markers, t, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : false);
  }
  destroy() {
    for (let e of this.elements) e.destroy();
  }
}
class hy {
  constructor(e, t, i, r) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, i, r);
  }
  update(e, t, i, r) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), aC(this.markers, r) || this.setMarkers(e, r);
  }
  setMarkers(e, t) {
    let i = "cm-gutterElement", r = this.dom.firstChild;
    for (let s = 0, o = 0; ; ) {
      let l = o, a = s < t.length ? t[s++] : null, f = false;
      if (a) {
        let h = a.elementClass;
        h && (i += " " + h);
        for (let p = o; p < this.markers.length; p++) if (this.markers[p].compare(a)) {
          l = p, f = true;
          break;
        }
      } else l = this.markers.length;
      for (; o < l; ) {
        let h = this.markers[o++];
        if (h.toDOM) {
          h.destroy(r);
          let p = r.nextSibling;
          r.remove(), r = p;
        }
      }
      if (!a) break;
      a.toDOM && (f ? r = r.nextSibling : this.dom.insertBefore(a.toDOM(e), r)), f && o++;
    }
    this.dom.className = i, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function aC(n, e) {
  if (n.length != e.length) return false;
  for (let t = 0; t < n.length; t++) if (!n[t].compare(e[t])) return false;
  return true;
}
const cC = new class extends Xr {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), fC = vc.compute(["selection"], (n) => {
  let e = [], t = -1;
  for (let i of n.selection.ranges) {
    let r = n.doc.lineAt(i.head).from;
    r > t && (t = r, e.push(cC.range(r)));
  }
  return He.of(e);
});
function hC() {
  return fC;
}
const uC = 1024;
let dC = 0;
class ch {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class ze {
  constructor(e = {}) {
    this.id = dC++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    }), this.combine = e.combine || null;
  }
  add(e) {
    if (this.perNode) throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = bi.match(e)), (t) => {
      let i = e(t);
      return i === void 0 ? null : [this, i];
    };
  }
}
ze.closedBy = new ze({ deserialize: (n) => n.split(" ") });
ze.openedBy = new ze({ deserialize: (n) => n.split(" ") });
ze.group = new ze({ deserialize: (n) => n.split(" ") });
ze.isolate = new ze({ deserialize: (n) => {
  if (n && n != "rtl" && n != "ltr" && n != "auto") throw new RangeError("Invalid value for isolate: " + n);
  return n || "auto";
} });
ze.contextHash = new ze({ perNode: true });
ze.lookAhead = new ze({ perNode: true });
ze.mounted = new ze({ perNode: true });
class Pl {
  constructor(e, t, i, r = false) {
    this.tree = e, this.overlay = t, this.parser = i, this.bracketed = r;
  }
  static get(e) {
    return e && e.props && e.props[ze.mounted.id];
  }
}
const pC = /* @__PURE__ */ Object.create(null);
class bi {
  constructor(e, t, i, r = 0) {
    this.name = e, this.props = t, this.id = i, this.flags = r;
  }
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : pC, i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), r = new bi(e.name || "", t, e.id, i);
    if (e.props) {
      for (let s of e.props) if (Array.isArray(s) || (s = s(r)), s) {
        if (s[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
        t[s[0].id] = s[1];
      }
    }
    return r;
  }
  prop(e) {
    return this.props[e.id];
  }
  get isTop() {
    return (this.flags & 1) > 0;
  }
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  get isError() {
    return (this.flags & 4) > 0;
  }
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  is(e) {
    if (typeof e == "string") {
      if (this.name == e) return true;
      let t = this.prop(ze.group);
      return t ? t.indexOf(e) > -1 : false;
    }
    return this.id == e;
  }
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e) for (let r of i.split(" ")) t[r] = e[i];
    return (i) => {
      for (let r = i.prop(ze.group), s = -1; s < (r ? r.length : 0); s++) {
        let o = t[s < 0 ? i.name : r[s]];
        if (o) return o;
      }
    };
  }
}
bi.none = new bi("", /* @__PURE__ */ Object.create(null), 0, 8);
const Ua = /* @__PURE__ */ new WeakMap(), qg = /* @__PURE__ */ new WeakMap();
var Rt;
(function(n) {
  n[n.ExcludeBuffers = 1] = "ExcludeBuffers", n[n.IncludeAnonymous = 2] = "IncludeAnonymous", n[n.IgnoreMounts = 4] = "IgnoreMounts", n[n.IgnoreOverlays = 8] = "IgnoreOverlays", n[n.EnterBracketed = 16] = "EnterBracketed";
})(Rt || (Rt = {}));
class cn {
  constructor(e, t, i, r, s) {
    if (this.type = e, this.children = t, this.positions = i, this.length = r, this.props = null, s && s.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of s) this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  toString() {
    let e = Pl.get(this);
    if (e && !e.overlay) return e.tree.toString();
    let t = "";
    for (let i of this.children) {
      let r = i.toString();
      r && (t && (t += ","), t += r);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  cursor(e = 0) {
    return new Mu(this.topNode, e);
  }
  cursorAt(e, t = 0, i = 0) {
    let r = Ua.get(this) || this.topNode, s = new Mu(r);
    return s.moveTo(e, t), Ua.set(this, s._tree), s;
  }
  get topNode() {
    return new yi(this, 0, 0, null);
  }
  resolve(e, t = 0) {
    let i = Ql(Ua.get(this) || this.topNode, e, t, false);
    return Ua.set(this, i), i;
  }
  resolveInner(e, t = 0) {
    let i = Ql(qg.get(this) || this.topNode, e, t, true);
    return qg.set(this, i), i;
  }
  resolveStack(e, t = 0) {
    return vC(this, e, t);
  }
  iterate(e) {
    let { enter: t, leave: i, from: r = 0, to: s = this.length } = e, o = e.mode || 0, l = (o & Rt.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | Rt.IncludeAnonymous); ; ) {
      let f = false;
      if (a.from <= s && a.to >= r && (!l && a.type.isAnonymous || t(a) !== false)) {
        if (a.firstChild()) continue;
        f = true;
      }
      for (; f && i && (l || !a.type.isAnonymous) && i(a), !a.nextSibling(); ) {
        if (!a.parent()) return;
        f = true;
      }
    }
  }
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  get propValues() {
    let e = [];
    if (this.props) for (let t in this.props) e.push([+t, this.props[t]]);
    return e;
  }
  balance(e = {}) {
    return this.children.length <= 8 ? this : Rd(bi.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, i, r) => new cn(this.type, t, i, r, this.propValues), e.makeTree || ((t, i, r) => new cn(bi.none, t, i, r)));
  }
  static build(e) {
    return yC(e);
  }
}
cn.empty = new cn(bi.none, [], [], 0);
class Ld {
  constructor(e, t) {
    this.buffer = e, this.index = t;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new Ld(this.buffer, this.index);
  }
}
class Zr {
  constructor(e, t, i) {
    this.buffer = e, this.length = t, this.set = i;
  }
  get type() {
    return bi.none;
  }
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; ) e.push(this.childString(t)), t = this.buffer[t + 3];
    return e.join(",");
  }
  childString(e) {
    let t = this.buffer[e], i = this.buffer[e + 3], r = this.set.types[t], s = r.name;
    if (/\W/.test(s) && !r.isError && (s = JSON.stringify(s)), e += 4, i == e) return s;
    let o = [];
    for (; e < i; ) o.push(this.childString(e)), e = this.buffer[e + 3];
    return s + "(" + o.join(",") + ")";
  }
  findChild(e, t, i, r, s) {
    let { buffer: o } = this, l = -1;
    for (let a = e; a != t && !(uy(s, r, o[a + 1], o[a + 2]) && (l = a, i > 0)); a = o[a + 3]) ;
    return l;
  }
  slice(e, t, i) {
    let r = this.buffer, s = new Uint16Array(t - e), o = 0;
    for (let l = e, a = 0; l < t; ) {
      s[a++] = r[l++], s[a++] = r[l++] - i;
      let f = s[a++] = r[l++] - i;
      s[a++] = r[l++] - e, o = Math.max(o, f);
    }
    return new Zr(s, o, this.set);
  }
}
function uy(n, e, t, i) {
  switch (n) {
    case -2:
      return t < e;
    case -1:
      return i >= e && t < e;
    case 0:
      return t < e && i > e;
    case 1:
      return t <= e && i > e;
    case 2:
      return i > e;
    case 4:
      return true;
  }
}
function Ql(n, e, t, i) {
  for (var r; n.from == n.to || (t < 1 ? n.from >= e : n.from > e) || (t > -1 ? n.to <= e : n.to < e); ) {
    let o = !i && n instanceof yi && n.index < 0 ? null : n.parent;
    if (!o) return n;
    n = o;
  }
  let s = i ? 0 : Rt.IgnoreOverlays;
  if (i) for (let o = n, l = o.parent; l; o = l, l = o.parent) o instanceof yi && o.index < 0 && ((r = l.enter(e, t, s)) === null || r === void 0 ? void 0 : r.from) != o.from && (n = l);
  for (; ; ) {
    let o = n.enter(e, t, s);
    if (!o) return n;
    n = o;
  }
}
class dy {
  cursor(e = 0) {
    return new Mu(this, e);
  }
  getChild(e, t = null, i = null) {
    let r = Gg(this, e, t, i);
    return r.length ? r[0] : null;
  }
  getChildren(e, t = null, i = null) {
    return Gg(this, e, t, i);
  }
  resolve(e, t = 0) {
    return Ql(this, e, t, false);
  }
  resolveInner(e, t = 0) {
    return Ql(this, e, t, true);
  }
  matchContext(e) {
    return Cu(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e), i = this;
    for (; t; ) {
      let r = t.lastChild;
      if (!r || r.to != t.to) break;
      r.type.isError && r.from == r.to ? (i = t, t = r.prevSibling) : t = r;
    }
    return i;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class yi extends dy {
  constructor(e, t, i, r) {
    super(), this._tree = e, this.from = t, this.index = i, this._parent = r;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, i, r, s = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, f = t > 0 ? l.length : -1; e != f; e += t) {
        let h = l[e], p = a[e] + o.from, m;
        if (!(!(s & Rt.EnterBracketed && h instanceof cn && (m = Pl.get(h)) && !m.overlay && m.bracketed && i >= p && i <= p + h.length) && !uy(r, i, p, p + h.length))) {
          if (h instanceof Zr) {
            if (s & Rt.ExcludeBuffers) continue;
            let b = h.findChild(0, h.buffer.length, t, i - p, r);
            if (b > -1) return new Ur(new gC(o, h, e, p), null, b);
          } else if (s & Rt.IncludeAnonymous || !h.type.isAnonymous || Dd(h)) {
            let b;
            if (!(s & Rt.IgnoreMounts) && (b = Pl.get(h)) && !b.overlay) return new yi(b.tree, p, e, o);
            let x = new yi(h, p, e, o);
            return s & Rt.IncludeAnonymous || !x.type.isAnonymous ? x : x.nextChild(t < 0 ? h.children.length - 1 : 0, t, i, r, s);
          }
        }
      }
      if (s & Rt.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + t : e = t < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o)) return null;
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4);
  }
  get lastChild() {
    return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
  }
  childAfter(e) {
    return this.nextChild(0, 1, e, 2);
  }
  childBefore(e) {
    return this.nextChild(this._tree.children.length - 1, -1, e, -2);
  }
  prop(e) {
    return this._tree.prop(e);
  }
  enter(e, t, i = 0) {
    let r;
    if (!(i & Rt.IgnoreOverlays) && (r = Pl.get(this._tree)) && r.overlay) {
      let s = e - this.from, o = i & Rt.EnterBracketed && r.bracketed;
      for (let { from: l, to: a } of r.overlay) if ((t > 0 || o ? l <= s : l < s) && (t < 0 || o ? a >= s : a > s)) return new yi(r.tree, r.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, i);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; ) e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  toString() {
    return this._tree.toString();
  }
}
function Gg(n, e, t, i) {
  let r = n.cursor(), s = [];
  if (!r.firstChild()) return s;
  if (t != null) {
    for (let o = false; !o; ) if (o = r.type.is(t), !r.nextSibling()) return s;
  }
  for (; ; ) {
    if (i != null && r.type.is(i)) return s;
    if (r.type.is(e) && s.push(r.node), !r.nextSibling()) return i == null ? s : [];
  }
}
function Cu(n, e, t = e.length - 1) {
  for (let i = n; t >= 0; i = i.parent) {
    if (!i) return false;
    if (!i.type.isAnonymous) {
      if (e[t] && e[t] != i.name) return false;
      t--;
    }
  }
  return true;
}
class gC {
  constructor(e, t, i, r) {
    this.parent = e, this.buffer = t, this.index = i, this.start = r;
  }
}
class Ur extends dy {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, i) {
    super(), this.context = e, this._parent = t, this.index = i, this.type = e.buffer.set.types[e.buffer.buffer[i]];
  }
  child(e, t, i) {
    let { buffer: r } = this.context, s = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.context.start, i);
    return s < 0 ? null : new Ur(this.context, this, s);
  }
  get firstChild() {
    return this.child(1, 0, 4);
  }
  get lastChild() {
    return this.child(-1, 0, 4);
  }
  childAfter(e) {
    return this.child(1, e, 2);
  }
  childBefore(e) {
    return this.child(-1, e, -2);
  }
  prop(e) {
    return this.type.prop(e);
  }
  enter(e, t, i = 0) {
    if (i & Rt.ExcludeBuffers) return null;
    let { buffer: r } = this.context, s = r.findChild(this.index + 4, r.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return s < 0 ? null : new Ur(this.context, this, s);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
  }
  get nextSibling() {
    let { buffer: e } = this.context, t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new Ur(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new Ur(this.context, this._parent, e.findChild(t, this.index, -1, 0, 4));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], t = [], { buffer: i } = this.context, r = this.index + 4, s = i.buffer[this.index + 3];
    if (s > r) {
      let o = i.buffer[this.index + 1];
      e.push(i.slice(r, s, o)), t.push(0);
    }
    return new cn(this.type, e, t, this.to - this.from);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function py(n) {
  if (!n.length) return null;
  let e = 0, t = n[0];
  for (let s = 1; s < n.length; s++) {
    let o = n[s];
    (o.from > t.from || o.to < t.to) && (t = o, e = s);
  }
  let i = t instanceof yi && t.index < 0 ? null : t.parent, r = n.slice();
  return i ? r[e] = i : r.splice(e, 1), new mC(r, t);
}
class mC {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return py(this.heads);
  }
}
function vC(n, e, t) {
  let i = n.resolveInner(e, t), r = null;
  for (let s = i instanceof yi ? i : i.context.parent; s; s = s.parent) if (s.index < 0) {
    let o = s.parent;
    (r || (r = [i])).push(o.resolve(e, t)), s = o;
  } else {
    let o = Pl.get(s.tree);
    if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
      let l = new yi(o.tree, o.overlay[0].from + s.from, -1, s);
      (r || (r = [i])).push(Ql(l, e, t, false));
    }
  }
  return r ? py(r) : i;
}
class Mu {
  get name() {
    return this.type.name;
  }
  constructor(e, t = 0) {
    if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = t & ~Rt.EnterBracketed, e instanceof yi) this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let i = e._parent; i; i = i._parent) this.stack.unshift(i.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, true) : false;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: i, buffer: r } = this.buffer;
    return this.type = t || r.set.types[r.buffer[e]], this.from = i + r.buffer[e + 1], this.to = i + r.buffer[e + 2], true;
  }
  yield(e) {
    return e ? e instanceof yi ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : false;
  }
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  enterChild(e, t, i) {
    if (!this.buffer) return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, i, this.mode));
    let { buffer: r } = this.buffer, s = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.buffer.start, i);
    return s < 0 ? false : (this.stack.push(this.index), this.yieldBuf(s));
  }
  firstChild() {
    return this.enterChild(1, 0, 4);
  }
  lastChild() {
    return this.enterChild(-1, 0, 4);
  }
  childAfter(e) {
    return this.enterChild(1, e, 2);
  }
  childBefore(e) {
    return this.enterChild(-1, e, -2);
  }
  enter(e, t, i = this.mode) {
    return this.buffer ? i & Rt.ExcludeBuffers ? false : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, i));
  }
  parent() {
    if (!this.buffer) return this.yieldNode(this.mode & Rt.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length) return this.yieldBuf(this.stack.pop());
    let e = this.mode & Rt.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  sibling(e) {
    if (!this.buffer) return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : false;
    let { buffer: t } = this.buffer, i = this.stack.length - 1;
    if (e < 0) {
      let r = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != r) return this.yieldBuf(t.findChild(r, this.index, -1, 0, 4));
    } else {
      let r = t.buffer[this.index + 3];
      if (r < (i < 0 ? t.buffer.length : t.buffer[this.stack[i] + 3])) return this.yieldBuf(r);
    }
    return i < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : false;
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t, i, { buffer: r } = this;
    if (r) {
      if (e > 0) {
        if (this.index < r.buffer.buffer.length) return false;
      } else for (let s = 0; s < this.index; s++) if (r.buffer.buffer[s + 3] < this.index) return false;
      ({ index: t, parent: i } = r);
    } else ({ index: t, _parent: i } = this._tree);
    for (; i; { index: t, _parent: i } = i) if (t > -1) for (let s = t + e, o = e < 0 ? -1 : i._tree.children.length; s != o; s += e) {
      let l = i._tree.children[s];
      if (this.mode & Rt.IncludeAnonymous || l instanceof Zr || !l.type.isAnonymous || Dd(l)) return false;
    }
    return true;
  }
  move(e, t) {
    if (t && this.enterChild(e, 0, 4)) return true;
    for (; ; ) {
      if (this.sibling(e)) return true;
      if (this.atLastNode(e) || !this.parent()) return false;
    }
  }
  next(e = true) {
    return this.move(1, e);
  }
  prev(e = true) {
    return this.move(-1, e);
  }
  moveTo(e, t = 0) {
    for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(); ) ;
    for (; this.enterChild(1, e, t); ) ;
    return this;
  }
  get node() {
    if (!this.buffer) return this._tree;
    let e = this.bufferNode, t = null, i = 0;
    if (e && e.context == this.buffer) e: for (let r = this.index, s = this.stack.length; s >= 0; ) {
      for (let o = e; o; o = o._parent) if (o.index == r) {
        if (r == this.index) return o;
        t = o, i = s + 1;
        break e;
      }
      r = this.stack[--s];
    }
    for (let r = i; r < this.stack.length; r++) t = new Ur(this.buffer, t, this.stack[r]);
    return this.bufferNode = new Ur(this.buffer, t, this.index);
  }
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  iterate(e, t) {
    for (let i = 0; ; ) {
      let r = false;
      if (this.type.isAnonymous || e(this) !== false) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (r = true);
      }
      for (; ; ) {
        if (r && t && t(this), r = this.type.isAnonymous, !i) return;
        if (this.nextSibling()) break;
        this.parent(), i--, r = true;
      }
    }
  }
  matchContext(e) {
    if (!this.buffer) return Cu(this.node.parent, e);
    let { buffer: t } = this.buffer, { types: i } = t.set;
    for (let r = e.length - 1, s = this.stack.length - 1; r >= 0; s--) {
      if (s < 0) return Cu(this._tree, e, r);
      let o = i[t.buffer[this.stack[s]]];
      if (!o.isAnonymous) {
        if (e[r] && e[r] != o.name) return false;
        r--;
      }
    }
    return true;
  }
}
function Dd(n) {
  return n.children.some((e) => e instanceof Zr || !e.type.isAnonymous || Dd(e));
}
function yC(n) {
  var e;
  let { buffer: t, nodeSet: i, maxBufferLength: r = uC, reused: s = [], minRepeatType: o = i.types.length } = n, l = Array.isArray(t) ? new Ld(t, t.length) : t, a = i.types, f = 0, h = 0;
  function p(K, W, $, ee, le, re) {
    let { id: U, start: Z, end: J, size: se } = l, ie = h, Se = f;
    if (se < 0) if (l.next(), se == -1) {
      let Le = s[U];
      $.push(Le), ee.push(Z - K);
      return;
    } else if (se == -3) {
      f = U;
      return;
    } else if (se == -4) {
      h = U;
      return;
    } else throw new RangeError(`Unrecognized record size: ${se}`);
    let ae = a[U], te, Ee, Me = Z - K;
    if (J - Z <= r && (Ee = E(l.pos - W, le))) {
      let Le = new Uint16Array(Ee.size - Ee.skip), ye = l.pos - Ee.size, fe = Le.length;
      for (; l.pos > ye; ) fe = D(Ee.start, Le, fe);
      te = new Zr(Le, J - Ee.start, i), Me = Ee.start - K;
    } else {
      let Le = l.pos - se;
      l.next();
      let ye = [], fe = [], $e = U >= o ? U : -1, De = 0, Ge = J;
      for (; l.pos > Le; ) $e >= 0 && l.id == $e && l.size >= 0 ? (l.end <= Ge - r && (x(ye, fe, Z, De, l.end, Ge, $e, ie, Se), De = ye.length, Ge = l.end), l.next()) : re > 2500 ? m(Z, Le, ye, fe) : p(Z, Le, ye, fe, $e, re + 1);
      if ($e >= 0 && De > 0 && De < ye.length && x(ye, fe, Z, De, Z, Ge, $e, ie, Se), ye.reverse(), fe.reverse(), $e > -1 && De > 0) {
        let Ne = b(ae, Se);
        te = Rd(ae, ye, fe, 0, ye.length, 0, J - Z, Ne, Ne);
      } else te = C(ae, ye, fe, J - Z, ie - J, Se);
    }
    $.push(te), ee.push(Me);
  }
  function m(K, W, $, ee) {
    let le = [], re = 0, U = -1;
    for (; l.pos > W; ) {
      let { id: Z, start: J, end: se, size: ie } = l;
      if (ie > 4) l.next();
      else {
        if (U > -1 && J < U) break;
        U < 0 && (U = se - r), le.push(Z, J, se), re++, l.next();
      }
    }
    if (re) {
      let Z = new Uint16Array(re * 4), J = le[le.length - 2];
      for (let se = le.length - 3, ie = 0; se >= 0; se -= 3) Z[ie++] = le[se], Z[ie++] = le[se + 1] - J, Z[ie++] = le[se + 2] - J, Z[ie++] = ie;
      $.push(new Zr(Z, le[2] - J, i)), ee.push(J - K);
    }
  }
  function b(K, W) {
    return ($, ee, le) => {
      let re = 0, U = $.length - 1, Z, J;
      if (U >= 0 && (Z = $[U]) instanceof cn) {
        if (!U && Z.type == K && Z.length == le) return Z;
        (J = Z.prop(ze.lookAhead)) && (re = ee[U] + Z.length + J);
      }
      return C(K, $, ee, le, re, W);
    };
  }
  function x(K, W, $, ee, le, re, U, Z, J) {
    let se = [], ie = [];
    for (; K.length > ee; ) se.push(K.pop()), ie.push(W.pop() + $ - le);
    K.push(C(i.types[U], se, ie, re - le, Z - re, J)), W.push(le - $);
  }
  function C(K, W, $, ee, le, re, U) {
    if (re) {
      let Z = [ze.contextHash, re];
      U = U ? [Z].concat(U) : [Z];
    }
    if (le > 25) {
      let Z = [ze.lookAhead, le];
      U = U ? [Z].concat(U) : [Z];
    }
    return new cn(K, W, $, ee, U);
  }
  function E(K, W) {
    let $ = l.fork(), ee = 0, le = 0, re = 0, U = $.end - r, Z = { size: 0, start: 0, skip: 0 };
    e: for (let J = $.pos - K; $.pos > J; ) {
      let se = $.size;
      if ($.id == W && se >= 0) {
        Z.size = ee, Z.start = le, Z.skip = re, re += 4, ee += 4, $.next();
        continue;
      }
      let ie = $.pos - se;
      if (se < 0 || ie < J || $.start < U) break;
      let Se = $.id >= o ? 4 : 0, ae = $.start;
      for ($.next(); $.pos > ie; ) {
        if ($.size < 0) if ($.size == -3 || $.size == -4) Se += 4;
        else break e;
        else $.id >= o && (Se += 4);
        $.next();
      }
      le = ae, ee += se, re += Se;
    }
    return (W < 0 || ee == K) && (Z.size = ee, Z.start = le, Z.skip = re), Z.size > 4 ? Z : void 0;
  }
  function D(K, W, $) {
    let { id: ee, start: le, end: re, size: U } = l;
    if (l.next(), U >= 0 && ee < o) {
      let Z = $;
      if (U > 4) {
        let J = l.pos - (U - 4);
        for (; l.pos > J; ) $ = D(K, W, $);
      }
      W[--$] = Z, W[--$] = re - K, W[--$] = le - K, W[--$] = ee;
    } else U == -3 ? f = ee : U == -4 && (h = ee);
    return $;
  }
  let R = [], I = [];
  for (; l.pos > 0; ) p(n.start || 0, n.bufferStart || 0, R, I, -1, 0);
  let z = (e = n.length) !== null && e !== void 0 ? e : R.length ? I[0] + R[0].length : 0;
  return new cn(a[n.topID], R.reverse(), I.reverse(), z);
}
const Yg = /* @__PURE__ */ new WeakMap();
function bc(n, e) {
  if (!n.isAnonymous || e instanceof Zr || e.type != n) return 1;
  let t = Yg.get(e);
  if (t == null) {
    t = 1;
    for (let i of e.children) {
      if (i.type != n || !(i instanceof cn)) {
        t = 1;
        break;
      }
      t += bc(n, i);
    }
    Yg.set(e, t);
  }
  return t;
}
function Rd(n, e, t, i, r, s, o, l, a) {
  let f = 0;
  for (let x = i; x < r; x++) f += bc(n, e[x]);
  let h = Math.ceil(f * 1.5 / 8), p = [], m = [];
  function b(x, C, E, D, R) {
    for (let I = E; I < D; ) {
      let z = I, K = C[I], W = bc(n, x[I]);
      for (I++; I < D; I++) {
        let $ = bc(n, x[I]);
        if (W + $ >= h) break;
        W += $;
      }
      if (I == z + 1) {
        if (W > h) {
          let $ = x[z];
          b($.children, $.positions, 0, $.children.length, C[z] + R);
          continue;
        }
        p.push(x[z]);
      } else {
        let $ = C[I - 1] + x[I - 1].length - K;
        p.push(Rd(n, x, C, z, I, K, $, null, a));
      }
      m.push(K + R - s);
    }
  }
  return b(e, t, i, r, 0), (l || a)(p, m, o);
}
class _s {
  constructor(e, t, i, r, s = false, o = false) {
    this.from = e, this.to = t, this.tree = i, this.offset = r, this.open = (s ? 1 : 0) | (o ? 2 : 0);
  }
  get openStart() {
    return (this.open & 1) > 0;
  }
  get openEnd() {
    return (this.open & 2) > 0;
  }
  static addTree(e, t = [], i = false) {
    let r = [new _s(0, e.length, e, 0, false, i)];
    for (let s of t) s.to > e.length && r.push(s);
    return r;
  }
  static applyChanges(e, t, i = 128) {
    if (!t.length) return e;
    let r = [], s = 1, o = e.length ? e[0] : null;
    for (let l = 0, a = 0, f = 0; ; l++) {
      let h = l < t.length ? t[l] : null, p = h ? h.fromA : 1e9;
      if (p - a >= i) for (; o && o.from < p; ) {
        let m = o;
        if (a >= m.from || p <= m.to || f) {
          let b = Math.max(m.from, a) - f, x = Math.min(m.to, p) - f;
          m = b >= x ? null : new _s(b, x, m.tree, m.offset + f, l > 0, !!h);
        }
        if (m && r.push(m), o.to > p) break;
        o = s < e.length ? e[s++] : null;
      }
      if (!h) break;
      a = h.toA, f = h.toA - h.toB;
    }
    return r;
  }
}
class bC {
  startParse(e, t, i) {
    return typeof e == "string" && (e = new wC(e)), i = i ? i.length ? i.map((r) => new ch(r.from, r.to)) : [new ch(0, 0)] : [new ch(0, e.length)], this.createParse(e, t || [], i);
  }
  parse(e, t, i) {
    let r = this.startParse(e, t, i);
    for (; ; ) {
      let s = r.advance();
      if (s) return s;
    }
  }
}
class wC {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return false;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
new ze({ perNode: true });
let xC = 0;
class di {
  constructor(e, t, i, r) {
    this.name = e, this.set = t, this.base = i, this.modified = r, this.id = xC++;
  }
  toString() {
    let { name: e } = this;
    for (let t of this.modified) t.name && (e = `${t.name}(${e})`);
    return e;
  }
  static define(e, t) {
    let i = typeof e == "string" ? e : "?";
    if (e instanceof di && (t = e), t == null ? void 0 : t.base) throw new Error("Can not derive from a modified tag");
    let r = new di(i, [], null, []);
    if (r.set.push(r), t) for (let s of t.set) r.set.push(s);
    return r;
  }
  static defineModifier(e) {
    let t = new Fc(e);
    return (i) => i.modified.indexOf(t) > -1 ? i : Fc.get(i.base || i, i.modified.concat(t).sort((r, s) => r.id - s.id));
  }
}
let kC = 0;
class Fc {
  constructor(e) {
    this.name = e, this.instances = [], this.id = kC++;
  }
  static get(e, t) {
    if (!t.length) return e;
    let i = t[0].instances.find((l) => l.base == e && SC(t, l.modified));
    if (i) return i;
    let r = [], s = new di(e.name, r, e, t);
    for (let l of t) l.instances.push(s);
    let o = CC(t);
    for (let l of e.set) if (!l.modified.length) for (let a of o) r.push(Fc.get(l, a));
    return s;
  }
}
function SC(n, e) {
  return n.length == e.length && n.every((t, i) => t == e[i]);
}
function CC(n) {
  let e = [[]];
  for (let t = 0; t < n.length; t++) for (let i = 0, r = e.length; i < r; i++) e.push(e[i].concat(n[t]));
  return e.sort((t, i) => i.length - t.length);
}
function MC(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let i = n[t];
    Array.isArray(i) || (i = [i]);
    for (let r of t.split(" ")) if (r) {
      let s = [], o = 2, l = r;
      for (let p = 0; ; ) {
        if (l == "..." && p > 0 && p + 3 == r.length) {
          o = 1;
          break;
        }
        let m = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
        if (!m) throw new RangeError("Invalid path: " + r);
        if (s.push(m[0] == "*" ? "" : m[0][0] == '"' ? JSON.parse(m[0]) : m[0]), p += m[0].length, p == r.length) break;
        let b = r[p++];
        if (p == r.length && b == "!") {
          o = 0;
          break;
        }
        if (b != "/") throw new RangeError("Invalid path: " + r);
        l = r.slice(p);
      }
      let a = s.length - 1, f = s[a];
      if (!f) throw new RangeError("Invalid path: " + r);
      let h = new Xl(i, o, a > 0 ? s.slice(0, a) : null);
      e[f] = h.sort(e[f]);
    }
  }
  return gy.add(e);
}
const gy = new ze({ combine(n, e) {
  let t, i, r;
  for (; n || e; ) {
    if (!n || e && n.depth >= e.depth ? (r = e, e = e.next) : (r = n, n = n.next), t && t.mode == r.mode && !r.context && !t.context) continue;
    let s = new Xl(r.tags, r.mode, r.context);
    t ? t.next = s : i = s, t = s;
  }
  return i;
} });
class Xl {
  constructor(e, t, i, r) {
    this.tags = e, this.mode = t, this.context = i, this.next = r;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
Xl.empty = new Xl([], 2, null);
function my(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let s of n) if (!Array.isArray(s.tag)) t[s.tag.id] = s.class;
  else for (let o of s.tag) t[o.id] = s.class;
  let { scope: i, all: r = null } = e || {};
  return { style: (s) => {
    let o = r;
    for (let l of s) for (let a of l.set) {
      let f = t[a.id];
      if (f) {
        o = o ? o + " " + f : f;
        break;
      }
    }
    return o;
  }, scope: i };
}
function AC(n, e) {
  let t = null;
  for (let i of n) {
    let r = i.style(e);
    r && (t = t ? t + " " + r : r);
  }
  return t;
}
function TC(n, e, t, i = 0, r = n.length) {
  let s = new EC(i, Array.isArray(e) ? e : [e], t);
  s.highlightRange(n.cursor(), i, r, "", s.highlighters), s.flush(r);
}
class EC {
  constructor(e, t, i) {
    this.at = e, this.highlighters = t, this.span = i, this.class = "";
  }
  startSpan(e, t) {
    t != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = t);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, i, r, s) {
    let { type: o, from: l, to: a } = e;
    if (l >= i || a <= t) return;
    o.isTop && (s = this.highlighters.filter((b) => !b.scope || b.scope(o)));
    let f = r, h = OC(e) || Xl.empty, p = AC(s, h.tags);
    if (p && (f && (f += " "), f += p, h.mode == 1 && (r += (r ? " " : "") + p)), this.startSpan(Math.max(t, l), f), h.opaque) return;
    let m = e.tree && e.tree.prop(ze.mounted);
    if (m && m.overlay) {
      let b = e.node.enter(m.overlay[0].from + l, 1), x = this.highlighters.filter((E) => !E.scope || E.scope(m.tree.type)), C = e.firstChild();
      for (let E = 0, D = l; ; E++) {
        let R = E < m.overlay.length ? m.overlay[E] : null, I = R ? R.from + l : a, z = Math.max(t, D), K = Math.min(i, I);
        if (z < K && C) for (; e.from < K && (this.highlightRange(e, z, K, r, s), this.startSpan(Math.min(K, e.to), f), !(e.to >= I || !e.nextSibling())); ) ;
        if (!R || I > i) break;
        D = R.to + l, D > t && (this.highlightRange(b.cursor(), Math.max(t, R.from + l), Math.min(i, D), "", x), this.startSpan(Math.min(i, D), f));
      }
      C && e.parent();
    } else if (e.firstChild()) {
      m && (r = "");
      do
        if (!(e.to <= t)) {
          if (e.from >= i) break;
          this.highlightRange(e, t, i, r, s), this.startSpan(Math.min(i, e.to), f);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function OC(n) {
  let e = n.type.prop(gy);
  for (; e && e.context && !n.matchContext(e.context); ) e = e.next;
  return e || null;
}
const oe = di.define, qa = oe(), Vr = oe(), Jg = oe(Vr), Qg = oe(Vr), zr = oe(), Ga = oe(zr), fh = oe(zr), Xi = oe(), ds = oe(Xi), Gi = oe(), Yi = oe(), Au = oe(), ul = oe(Au), Ya = oe(), q = { comment: qa, lineComment: oe(qa), blockComment: oe(qa), docComment: oe(qa), name: Vr, variableName: oe(Vr), typeName: Jg, tagName: oe(Jg), propertyName: Qg, attributeName: oe(Qg), className: oe(Vr), labelName: oe(Vr), namespace: oe(Vr), macroName: oe(Vr), literal: zr, string: Ga, docString: oe(Ga), character: oe(Ga), attributeValue: oe(Ga), number: fh, integer: oe(fh), float: oe(fh), bool: oe(zr), regexp: oe(zr), escape: oe(zr), color: oe(zr), url: oe(zr), keyword: Gi, self: oe(Gi), null: oe(Gi), atom: oe(Gi), unit: oe(Gi), modifier: oe(Gi), operatorKeyword: oe(Gi), controlKeyword: oe(Gi), definitionKeyword: oe(Gi), moduleKeyword: oe(Gi), operator: Yi, derefOperator: oe(Yi), arithmeticOperator: oe(Yi), logicOperator: oe(Yi), bitwiseOperator: oe(Yi), compareOperator: oe(Yi), updateOperator: oe(Yi), definitionOperator: oe(Yi), typeOperator: oe(Yi), controlOperator: oe(Yi), punctuation: Au, separator: oe(Au), bracket: ul, angleBracket: oe(ul), squareBracket: oe(ul), paren: oe(ul), brace: oe(ul), content: Xi, heading: ds, heading1: oe(ds), heading2: oe(ds), heading3: oe(ds), heading4: oe(ds), heading5: oe(ds), heading6: oe(ds), contentSeparator: oe(Xi), list: oe(Xi), quote: oe(Xi), emphasis: oe(Xi), strong: oe(Xi), link: oe(Xi), monospace: oe(Xi), strikethrough: oe(Xi), inserted: oe(), deleted: oe(), changed: oe(), invalid: oe(), meta: Ya, documentMeta: oe(Ya), annotation: oe(Ya), processingInstruction: oe(Ya), definition: di.defineModifier("definition"), constant: di.defineModifier("constant"), function: di.defineModifier("function"), standard: di.defineModifier("standard"), local: di.defineModifier("local"), special: di.defineModifier("special") };
for (let n in q) {
  let e = q[n];
  e instanceof di && (e.name = n);
}
my([{ tag: q.link, class: "tok-link" }, { tag: q.heading, class: "tok-heading" }, { tag: q.emphasis, class: "tok-emphasis" }, { tag: q.strong, class: "tok-strong" }, { tag: q.keyword, class: "tok-keyword" }, { tag: q.atom, class: "tok-atom" }, { tag: q.bool, class: "tok-bool" }, { tag: q.url, class: "tok-url" }, { tag: q.labelName, class: "tok-labelName" }, { tag: q.inserted, class: "tok-inserted" }, { tag: q.deleted, class: "tok-deleted" }, { tag: q.literal, class: "tok-literal" }, { tag: q.string, class: "tok-string" }, { tag: q.number, class: "tok-number" }, { tag: [q.regexp, q.escape, q.special(q.string)], class: "tok-string2" }, { tag: q.variableName, class: "tok-variableName" }, { tag: q.local(q.variableName), class: "tok-variableName tok-local" }, { tag: q.definition(q.variableName), class: "tok-variableName tok-definition" }, { tag: q.special(q.variableName), class: "tok-variableName2" }, { tag: q.definition(q.propertyName), class: "tok-propertyName tok-definition" }, { tag: q.typeName, class: "tok-typeName" }, { tag: q.namespace, class: "tok-namespace" }, { tag: q.className, class: "tok-className" }, { tag: q.macroName, class: "tok-macroName" }, { tag: q.propertyName, class: "tok-propertyName" }, { tag: q.operator, class: "tok-operator" }, { tag: q.comment, class: "tok-comment" }, { tag: q.meta, class: "tok-meta" }, { tag: q.invalid, class: "tok-invalid" }, { tag: q.punctuation, class: "tok-punctuation" }]);
var hh;
const Sl = new ze(), _C = new ze();
class Ri {
  constructor(e, t, i = [], r = "") {
    this.data = e, this.name = r, Ke.prototype.hasOwnProperty("tree") || Object.defineProperty(Ke.prototype, "tree", { get() {
      return vn(this);
    } }), this.parser = t, this.extension = [es.of(this), Ke.languageData.of((s, o, l) => {
      let a = Xg(s, o, l), f = a.type.prop(Sl);
      if (!f) return [];
      let h = s.facet(f), p = a.type.prop(_C);
      if (p) {
        let m = a.resolve(o - a.from, l);
        for (let b of p) if (b.test(m, s)) {
          let x = s.facet(b.facet);
          return b.type == "replace" ? x : x.concat(h);
        }
      }
      return h;
    })].concat(i);
  }
  isActiveAt(e, t, i = -1) {
    return Xg(e, t, i).type.prop(Sl) == this.data;
  }
  findRegions(e) {
    let t = e.facet(es);
    if ((t == null ? void 0 : t.data) == this.data) return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting) return [];
    let i = [], r = (s, o) => {
      if (s.prop(Sl) == this.data) {
        i.push({ from: o, to: o + s.length });
        return;
      }
      let l = s.prop(ze.mounted);
      if (l) {
        if (l.tree.prop(Sl) == this.data) {
          if (l.overlay) for (let a of l.overlay) i.push({ from: a.from + o, to: a.to + o });
          else i.push({ from: o, to: o + s.length });
          return;
        } else if (l.overlay) {
          let a = i.length;
          if (r(l.tree, l.overlay[0].from + o), i.length > a) return;
        }
      }
      for (let a = 0; a < s.children.length; a++) {
        let f = s.children[a];
        f instanceof cn && r(f, s.positions[a] + o);
      }
    };
    return r(vn(e), 0), i;
  }
  get allowsNesting() {
    return true;
  }
}
Ri.setState = Te.define();
function Xg(n, e, t) {
  let i = n.facet(es), r = vn(n).topNode;
  if (!i || i.allowsNesting) for (let s = r; s; s = s.enter(e, t, Rt.ExcludeBuffers | Rt.EnterBracketed)) s.type.isTop && (r = s);
  return r;
}
function vn(n) {
  let e = n.field(Ri.state, false);
  return e ? e.tree : cn.empty;
}
function vy(n, e, t = 50) {
  var i;
  let r = (i = n.field(Ri.state, false)) === null || i === void 0 ? void 0 : i.context;
  if (!r) return null;
  let s = r.viewport;
  r.updateViewport({ from: 0, to: e });
  let o = r.isDone(e) || r.work(t, e) ? r.tree : null;
  return r.updateViewport(s), o;
}
class LC {
  constructor(e) {
    this.doc = e, this.cursorPos = 0, this.string = "", this.cursor = e.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return true;
  }
  read(e, t) {
    let i = this.cursorPos - this.string.length;
    return e < i || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - i, t - i);
  }
}
let dl = null;
class Hc {
  constructor(e, t, i = [], r, s, o, l, a) {
    this.parser = e, this.state = t, this.fragments = i, this.tree = r, this.treeLen = s, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  static create(e, t, i) {
    return new Hc(e, t, [], cn.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new LC(this.state.doc), this.fragments);
  }
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != cn.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), true) : this.withContext(() => {
      var i;
      if (typeof e == "number") {
        let r = Date.now() + e;
        e = () => Date.now() > r;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let r = this.parse.advance();
        if (r) if (this.fragments = this.withoutTempSkipped(_s.addTree(r, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = r, this.parse = null, this.treeLen < (t ?? this.state.doc.length)) this.parse = this.startParse();
        else return true;
        if (e()) return false;
      }
    });
  }
  takeTree() {
    let e, t;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(t = this.parse.advance()); ) ;
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(_s.addTree(this.tree, this.fragments, true)), this.parse = null);
  }
  withContext(e) {
    let t = dl;
    dl = this;
    try {
      return e();
    } finally {
      dl = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); ) e = Zg(e, t.from, t.to);
    return e;
  }
  changes(e, t) {
    let { fragments: i, tree: r, treeLen: s, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((f, h, p, m) => a.push({ fromA: f, toA: h, fromB: p, toB: m })), i = _s.applyChanges(i, a), r = cn.empty, s = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let f of this.skipped) {
          let h = e.mapPos(f.from, 1), p = e.mapPos(f.to, -1);
          h < p && l.push({ from: h, to: p });
        }
      }
    }
    return new Hc(this.parser, t, i, r, s, o, l, this.scheduleOn);
  }
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to) return false;
    this.viewport = e;
    let t = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: r, to: s } = this.skipped[i];
      r < e.to && s > e.from && (this.fragments = Zg(this.fragments, r, s), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= t ? false : (this.reset(), true);
  }
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  static getSkippingParser(e) {
    return new class extends bC {
      createParse(t, i, r) {
        let s = r[0].from, o = r[r.length - 1].to;
        return { parsedPos: s, advance() {
          let a = dl;
          if (a) {
            for (let f of r) a.tempSkipped.push(f);
            e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
          }
          return this.parsedPos = o, new cn(bi.none, [], [], o - s);
        }, stoppedAt: null, stopAt() {
        } };
      }
    }();
  }
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  static get() {
    return dl;
  }
}
function Zg(n, e, t) {
  return _s.applyChanges(n, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class Oo {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree) return this;
    let t = this.context.changes(e.changes, e.state), i = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, i) || t.takeTree(), new Oo(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), i = Hc.create(e.facet(es).parser, e, { from: 0, to: t });
    return i.work(20, t) || i.takeTree(), new Oo(i);
  }
}
Ri.state = tn.define({ create: Oo.init, update(n, e) {
  for (let t of e.effects) if (t.is(Ri.setState)) return t.value;
  return e.startState.facet(es) != e.state.facet(es) ? Oo.init(e.state) : n.apply(e);
} });
let yy = (n) => {
  let e = setTimeout(() => n(), 500);
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (yy = (n) => {
  let e = -1, t = setTimeout(() => {
    e = requestIdleCallback(n, { timeout: 400 });
  }, 100);
  return () => e < 0 ? clearTimeout(t) : cancelIdleCallback(e);
});
const uh = typeof navigator < "u" && (!((hh = navigator.scheduling) === null || hh === void 0) && hh.isInputPending) ? () => navigator.scheduling.isInputPending() : null, DC = xt.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(Ri.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working) return;
    let { state: e } = this.view, t = e.field(Ri.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = yy(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
    let { state: i, viewport: { to: r } } = this.view, s = i.field(Ri.state);
    if (s.tree == s.context.tree && s.context.isDone(r + 1e5)) return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !uh ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = s.context.treeLen < r && i.doc.length > r + 1e3, a = s.context.work(() => uh && uh() || Date.now() > o, r + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (s.context.takeTree(), this.view.dispatch({ effects: Ri.setState.of(new Oo(s.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(s.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => Dn(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, { eventHandlers: { focus() {
  this.scheduleWork();
} } }), es = ve.define({ combine(n) {
  return n.length ? n[0] : null;
}, enables: (n) => [Ri.state, DC, he.contentAttributes.compute([n], (e) => {
  let t = e.facet(n);
  return t && t.name ? { "data-language": t.name } : {};
})] }), RC = ve.define(), Zl = ve.define({ combine: (n) => {
  if (!n.length) return "  ";
  let e = n[0];
  if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0])) throw new Error("Invalid indent unit: " + JSON.stringify(n[0]));
  return e;
} });
function Wc(n) {
  let e = n.facet(Zl);
  return e.charCodeAt(0) == 9 ? n.tabSize * e.length : e.length;
}
function ea(n, e) {
  let t = "", i = n.tabSize, r = n.facet(Zl)[0];
  if (r == "	") {
    for (; e >= i; ) t += "	", e -= i;
    r = " ";
  }
  for (let s = 0; s < e; s++) t += r;
  return t;
}
function Bd(n, e) {
  n instanceof Ke && (n = new vf(n));
  for (let i of n.state.facet(RC)) {
    let r = i(n, e);
    if (r !== void 0) return r;
  }
  let t = vn(n.state);
  return t.length >= e ? PC(n, t, e) : null;
}
class vf {
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = Wc(e);
  }
  lineAt(e, t = 1) {
    let i = this.state.doc.lineAt(e), { simulateBreak: r, simulateDoubleBreak: s } = this.options;
    return r != null && r >= i.from && r <= i.to ? s && r == e ? { text: "", from: e } : (t < 0 ? r < e : r <= e) ? { text: i.text.slice(r - i.from), from: r } : { text: i.text.slice(0, r - i.from), from: i.from } : i;
  }
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak) return "";
    let { text: i, from: r } = this.lineAt(e, t);
    return i.slice(e - r, Math.min(i.length, e + 100 - r));
  }
  column(e, t = 1) {
    let { text: i, from: r } = this.lineAt(e, t), s = this.countColumn(i, e - r), o = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1;
    return o > -1 && (s += o - this.countColumn(i, i.search(/\S|$/))), s;
  }
  countColumn(e, t = e.length) {
    return No(e, this.state.tabSize, t);
  }
  lineIndent(e, t = 1) {
    let { text: i, from: r } = this.lineAt(e, t), s = this.options.overrideIndentation;
    if (s) {
      let o = s(r);
      if (o > -1) return o;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const BC = new ze();
function PC(n, e, t) {
  let i = e.resolveStack(t), r = e.resolveInner(t, -1).resolve(t, 0).enterUnfinishedNodesBefore(t);
  if (r != i.node) {
    let s = [];
    for (let o = r; o && !(o.from < i.node.from || o.to > i.node.to || o.from == i.node.from && o.type == i.node.type); o = o.parent) s.push(o);
    for (let o = s.length - 1; o >= 0; o--) i = { node: s[o], next: i };
  }
  return by(i, n, t);
}
function by(n, e, t) {
  for (let i = n; i; i = i.next) {
    let r = NC(i.node);
    if (r) return r(Pd.create(e, t, i));
  }
  return 0;
}
function IC(n) {
  return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
}
function NC(n) {
  let e = n.type.prop(BC);
  if (e) return e;
  let t = n.firstChild, i;
  if (t && (i = t.type.prop(ze.closedBy))) {
    let r = n.lastChild, s = r && i.indexOf(r.name) > -1;
    return (o) => VC(o, true, 1, void 0, s && !IC(o) ? r.from : void 0);
  }
  return n.parent == null ? FC : null;
}
function FC() {
  return 0;
}
class Pd extends vf {
  constructor(e, t, i) {
    super(e.state, e.options), this.base = e, this.pos = t, this.context = i;
  }
  get node() {
    return this.context.node;
  }
  static create(e, t, i) {
    return new Pd(e, t, i);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    for (; ; ) {
      let i = e.resolve(t.from);
      for (; i.parent && i.parent.from == i.from; ) i = i.parent;
      if (HC(i, e)) break;
      t = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(t.from);
  }
  continue() {
    return by(this.context.next, this.base, this.pos);
  }
}
function HC(n, e) {
  for (let t = e; t; t = t.parent) if (n == t) return true;
  return false;
}
function WC(n) {
  let e = n.node, t = e.childAfter(e.from), i = e.lastChild;
  if (!t) return null;
  let r = n.options.simulateBreak, s = n.state.doc.lineAt(t.from), o = r == null || r <= s.from ? s.to : Math.min(s.to, r);
  for (let l = t.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == i) return null;
    if (!a.type.isSkipped) {
      if (a.from >= o) return null;
      let f = /^ */.exec(s.text.slice(t.to - s.from))[0].length;
      return { from: t.from, to: t.to + f };
    }
    l = a.to;
  }
}
function VC(n, e, t, i, r) {
  let s = n.textAfter, o = s.match(/^\s*/)[0].length, l = i && s.slice(o, o + i.length) == i || r == n.pos + o, a = WC(n);
  return a ? l ? n.column(a.from) : n.column(a.to) : n.baseIndent + (l ? 0 : n.unit * t);
}
const zC = 200;
function KC() {
  return Ke.transactionFilter.of((n) => {
    if (!n.docChanged || !n.isUserEvent("input.type") && !n.isUserEvent("input.complete")) return n;
    let e = n.startState.languageDataAt("indentOnInput", n.startState.selection.main.head);
    if (!e.length) return n;
    let t = n.newDoc, { head: i } = n.newSelection.main, r = t.lineAt(i);
    if (i > r.from + zC) return n;
    let s = t.sliceString(r.from, i);
    if (!e.some((f) => f.test(s))) return n;
    let { state: o } = n, l = -1, a = [];
    for (let { head: f } of o.selection.ranges) {
      let h = o.doc.lineAt(f);
      if (h.from == l) continue;
      l = h.from;
      let p = Bd(o, h.from);
      if (p == null) continue;
      let m = /^\s*/.exec(h.text)[0], b = ea(o, p);
      m != b && a.push({ from: h.from, to: h.from + m.length, insert: b });
    }
    return a.length ? [n, { changes: a, sequential: true }] : n;
  });
}
const $C = ve.define(), jC = new ze();
function UC(n, e, t) {
  let i = vn(n);
  if (i.length < t) return null;
  let r = i.resolveStack(t, 1), s = null;
  for (let o = r; o; o = o.next) {
    let l = o.node;
    if (l.to <= t || l.from > t) continue;
    if (s && l.from < e) break;
    let a = l.type.prop(jC);
    if (a && (l.to < i.length - 50 || i.length == n.doc.length || !qC(l))) {
      let f = a(l, n);
      f && f.from <= t && f.from >= e && f.to > t && (s = f);
    }
  }
  return s;
}
function qC(n) {
  let e = n.lastChild;
  return e && e.to == n.to && e.type.isError;
}
function Vc(n, e, t) {
  for (let i of n.facet($C)) {
    let r = i(n, e, t);
    if (r) return r;
  }
  return UC(n, e, t);
}
function wy(n, e) {
  let t = e.mapPos(n.from, 1), i = e.mapPos(n.to, -1);
  return t >= i ? void 0 : { from: t, to: i };
}
const yf = Te.define({ map: wy }), ha = Te.define({ map: wy });
function xy(n) {
  let e = [];
  for (let { head: t } of n.state.selection.ranges) e.some((i) => i.from <= t && i.to >= t) || e.push(n.lineBlockAt(t));
  return e;
}
const zs = tn.define({ create() {
  return be.none;
}, update(n, e) {
  e.isUserEvent("delete") && e.changes.iterChangedRanges((t, i) => n = em(n, t, i)), n = n.map(e.changes);
  for (let t of e.effects) if (t.is(yf) && !GC(n, t.value.from, t.value.to)) {
    let { preparePlaceholder: i } = e.state.facet(My), r = i ? be.replace({ widget: new eM(i(e.state, t.value)) }) : tm;
    n = n.update({ add: [r.range(t.value.from, t.value.to)] });
  } else t.is(ha) && (n = n.update({ filter: (i, r) => t.value.from != i || t.value.to != r, filterFrom: t.value.from, filterTo: t.value.to }));
  return e.selection && (n = em(n, e.selection.main.head)), n;
}, provide: (n) => he.decorations.from(n), toJSON(n, e) {
  let t = [];
  return n.between(0, e.doc.length, (i, r) => {
    t.push(i, r);
  }), t;
}, fromJSON(n) {
  if (!Array.isArray(n) || n.length % 2) throw new RangeError("Invalid JSON for fold state");
  let e = [];
  for (let t = 0; t < n.length; ) {
    let i = n[t++], r = n[t++];
    if (typeof i != "number" || typeof r != "number") throw new RangeError("Invalid JSON for fold state");
    e.push(tm.range(i, r));
  }
  return be.set(e, true);
} });
function em(n, e, t = e) {
  let i = false;
  return n.between(e, t, (r, s) => {
    r < t && s > e && (i = true);
  }), i ? n.update({ filterFrom: e, filterTo: t, filter: (r, s) => r >= t || s <= e }) : n;
}
function zc(n, e, t) {
  var i;
  let r = null;
  return (i = n.field(zs, false)) === null || i === void 0 || i.between(e, t, (s, o) => {
    (!r || r.from > s) && (r = { from: s, to: o });
  }), r;
}
function GC(n, e, t) {
  let i = false;
  return n.between(e, e, (r, s) => {
    r == e && s == t && (i = true);
  }), i;
}
function ky(n, e) {
  return n.field(zs, false) ? e : e.concat(Te.appendConfig.of(Ay()));
}
const Sy = (n) => {
  for (let e of xy(n)) {
    let t = Vc(n.state, e.from, e.to);
    if (t) return n.dispatch({ effects: ky(n.state, [yf.of(t), Cy(n, t)]) }), true;
  }
  return false;
}, YC = (n) => {
  if (!n.state.field(zs, false)) return false;
  let e = [];
  for (let t of xy(n)) {
    let i = zc(n.state, t.from, t.to);
    i && e.push(ha.of(i), Cy(n, i, false));
  }
  return e.length && n.dispatch({ effects: e }), e.length > 0;
};
function Cy(n, e, t = true) {
  let i = n.state.doc.lineAt(e.from).number, r = n.state.doc.lineAt(e.to).number;
  return he.announce.of(`${n.state.phrase(t ? "Folded lines" : "Unfolded lines")} ${i} ${n.state.phrase("to")} ${r}.`);
}
const JC = (n) => {
  let { state: e } = n, t = [];
  for (let i = 0; i < e.doc.length; ) {
    let r = n.lineBlockAt(i), s = Vc(e, r.from, r.to);
    s && t.push(yf.of(s)), i = (s ? n.lineBlockAt(s.to) : r).to + 1;
  }
  return t.length && n.dispatch({ effects: ky(n.state, t) }), !!t.length;
}, QC = (n) => {
  let e = n.state.field(zs, false);
  if (!e || !e.size) return false;
  let t = [];
  return e.between(0, n.state.doc.length, (i, r) => {
    t.push(ha.of({ from: i, to: r }));
  }), n.dispatch({ effects: t }), true;
}, XC = [{ key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: Sy }, { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: YC }, { key: "Ctrl-Alt-[", run: JC }, { key: "Ctrl-Alt-]", run: QC }], ZC = { placeholderDOM: null, preparePlaceholder: null, placeholderText: "\u2026" }, My = ve.define({ combine(n) {
  return Or(n, ZC);
} });
function Ay(n) {
  return [zs, iM];
}
function Ty(n, e) {
  let { state: t } = n, i = t.facet(My), r = (o) => {
    let l = n.lineBlockAt(n.posAtDOM(o.target)), a = zc(n.state, l.from, l.to);
    a && n.dispatch({ effects: ha.of(a) }), o.preventDefault();
  };
  if (i.placeholderDOM) return i.placeholderDOM(n, r, e);
  let s = document.createElement("span");
  return s.textContent = i.placeholderText, s.setAttribute("aria-label", t.phrase("folded code")), s.title = t.phrase("unfold"), s.className = "cm-foldPlaceholder", s.onclick = r, s;
}
const tm = be.replace({ widget: new class extends wi {
  toDOM(n) {
    return Ty(n, null);
  }
}() });
class eM extends wi {
  constructor(e) {
    super(), this.value = e;
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return Ty(e, this.value);
  }
}
const tM = { openText: "\u2304", closedText: "\u203A", markerDOM: null, domEventHandlers: {}, foldingChanged: () => false };
class dh extends Xr {
  constructor(e, t) {
    super(), this.config = e, this.open = t;
  }
  eq(e) {
    return this.config == e.config && this.open == e.open;
  }
  toDOM(e) {
    if (this.config.markerDOM) return this.config.markerDOM(this.open);
    let t = document.createElement("span");
    return t.textContent = this.open ? this.config.openText : this.config.closedText, t.title = e.state.phrase(this.open ? "Fold line" : "Unfold line"), t;
  }
}
function nM(n = {}) {
  let e = { ...tM, ...n }, t = new dh(e, true), i = new dh(e, false), r = xt.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(es) != o.state.facet(es) || o.startState.field(zs, false) != o.state.field(zs, false) || vn(o.startState) != vn(o.state) || e.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let l = new Bi();
      for (let a of o.viewportLineBlocks) {
        let f = zc(o.state, a.from, a.to) ? i : Vc(o.state, a.from, a.to) ? t : null;
        f && l.add(a.from, a.from, f);
      }
      return l.finish();
    }
  }), { domEventHandlers: s } = e;
  return [r, rC({ class: "cm-foldGutter", markers(o) {
    var l;
    return ((l = o.plugin(r)) === null || l === void 0 ? void 0 : l.markers) || He.empty;
  }, initialSpacer() {
    return new dh(e, false);
  }, domEventHandlers: { ...s, click: (o, l, a) => {
    if (s.click && s.click(o, l, a)) return true;
    let f = zc(o.state, l.from, l.to);
    if (f) return o.dispatch({ effects: ha.of(f) }), true;
    let h = Vc(o.state, l.from, l.to);
    return h ? (o.dispatch({ effects: yf.of(h) }), true) : false;
  } } }), Ay()];
}
const iM = he.baseTheme({ ".cm-foldPlaceholder": { backgroundColor: "#eee", border: "1px solid #ddd", color: "#888", borderRadius: ".2em", margin: "0 1px", padding: "0 1px", cursor: "pointer" }, ".cm-foldGutter span": { padding: "0 1px", cursor: "pointer" } });
class ua {
  constructor(e, t) {
    this.specs = e;
    let i;
    function r(l) {
      let a = Yr.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const s = typeof t.all == "string" ? t.all : t.all ? r(t.all) : void 0, o = t.scope;
    this.scope = o instanceof Ri ? (l) => l.prop(Sl) == o.data : o ? (l) => l == o : void 0, this.style = my(e.map((l) => ({ tag: l.tag, class: l.class || r(Object.assign({}, l, { tag: null })) })), { all: s }).style, this.module = i ? new Yr(i) : null, this.themeType = t.themeType;
  }
  static define(e, t) {
    return new ua(e, t || {});
  }
}
const Tu = ve.define(), Ey = ve.define({ combine(n) {
  return n.length ? [n[0]] : null;
} });
function ph(n) {
  let e = n.facet(Tu);
  return e.length ? e : n.facet(Ey);
}
function Oy(n, e) {
  let t = [sM], i;
  return n instanceof ua && (n.module && t.push(he.styleModule.of(n.module)), i = n.themeType), (e == null ? void 0 : e.fallback) ? t.push(Ey.of(n)) : i ? t.push(Tu.computeN([he.darkTheme], (r) => r.facet(he.darkTheme) == (i == "dark") ? [n] : [])) : t.push(Tu.of(n)), t;
}
class rM {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = vn(e.state), this.decorations = this.buildDeco(e, ph(e.state)), this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let t = vn(e.state), i = ph(e.state), r = i != ph(e.startState), { viewport: s } = e.view, o = e.changes.mapPos(this.decoratedTo, 1);
    t.length < s.to && !r && t.type == this.tree.type && o >= s.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = o) : (t != this.tree || e.viewportChanged || r) && (this.tree = t, this.decorations = this.buildDeco(e.view, i), this.decoratedTo = s.to);
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length) return be.none;
    let i = new Bi();
    for (let { from: r, to: s } of e.visibleRanges) TC(this.tree, t, (o, l, a) => {
      i.add(o, l, this.markCache[a] || (this.markCache[a] = be.mark({ class: a })));
    }, r, s);
    return i.finish();
  }
}
const sM = Tr.high(xt.fromClass(rM, { decorations: (n) => n.decorations })), oM = ua.define([{ tag: q.meta, color: "#404740" }, { tag: q.link, textDecoration: "underline" }, { tag: q.heading, textDecoration: "underline", fontWeight: "bold" }, { tag: q.emphasis, fontStyle: "italic" }, { tag: q.strong, fontWeight: "bold" }, { tag: q.strikethrough, textDecoration: "line-through" }, { tag: q.keyword, color: "#708" }, { tag: [q.atom, q.bool, q.url, q.contentSeparator, q.labelName], color: "#219" }, { tag: [q.literal, q.inserted], color: "#164" }, { tag: [q.string, q.deleted], color: "#a11" }, { tag: [q.regexp, q.escape, q.special(q.string)], color: "#e40" }, { tag: q.definition(q.variableName), color: "#00f" }, { tag: q.local(q.variableName), color: "#30a" }, { tag: [q.typeName, q.namespace], color: "#085" }, { tag: q.className, color: "#167" }, { tag: [q.special(q.variableName), q.macroName], color: "#256" }, { tag: q.definition(q.propertyName), color: "#00c" }, { tag: q.comment, color: "#940" }, { tag: q.invalid, color: "#f00" }]), lM = he.baseTheme({ "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" }, "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" } }), _y = 1e4, Ly = "()[]{}", Dy = ve.define({ combine(n) {
  return Or(n, { afterCursor: true, brackets: Ly, maxScanDistance: _y, renderMatch: fM });
} }), aM = be.mark({ class: "cm-matchingBracket" }), cM = be.mark({ class: "cm-nonmatchingBracket" });
function fM(n) {
  let e = [], t = n.matched ? aM : cM;
  return e.push(t.range(n.start.from, n.start.to)), n.end && e.push(t.range(n.end.from, n.end.to)), e;
}
function nm(n) {
  let e = [], t = n.facet(Dy);
  for (let i of n.selection.ranges) {
    if (!i.empty) continue;
    let r = gi(n, i.head, -1, t) || i.head > 0 && gi(n, i.head - 1, 1, t) || t.afterCursor && (gi(n, i.head, 1, t) || i.head < n.doc.length && gi(n, i.head + 1, -1, t));
    r && (e = e.concat(t.renderMatch(r, n)));
  }
  return be.set(e, true);
}
const hM = xt.fromClass(class {
  constructor(n) {
    this.paused = false, this.decorations = nm(n.state);
  }
  update(n) {
    (n.docChanged || n.selectionSet || this.paused) && (n.view.composing ? (this.decorations = this.decorations.map(n.changes), this.paused = true) : (this.decorations = nm(n.state), this.paused = false));
  }
}, { decorations: (n) => n.decorations }), uM = [hM, lM];
function dM(n = {}) {
  return [Dy.of(n), uM];
}
const pM = new ze();
function Eu(n, e, t) {
  let i = n.prop(e < 0 ? ze.openedBy : ze.closedBy);
  if (i) return i;
  if (n.name.length == 1) {
    let r = t.indexOf(n.name);
    if (r > -1 && r % 2 == (e < 0 ? 1 : 0)) return [t[r + e]];
  }
  return null;
}
function Ou(n) {
  let e = n.type.prop(pM);
  return e ? e(n.node) : n;
}
function gi(n, e, t, i = {}) {
  let r = i.maxScanDistance || _y, s = i.brackets || Ly, o = vn(n), l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let f = Eu(a.type, t, s);
    if (f && a.from < a.to) {
      let h = Ou(a);
      if (h && (t > 0 ? e >= h.from && e < h.to : e > h.from && e <= h.to)) return gM(n, e, t, a, h, f, s);
    }
  }
  return mM(n, e, t, o, l.type, r, s);
}
function gM(n, e, t, i, r, s, o) {
  let l = i.parent, a = { from: r.from, to: r.to }, f = 0, h = l == null ? void 0 : l.cursor();
  if (h && (t < 0 ? h.childBefore(i.from) : h.childAfter(i.to))) do
    if (t < 0 ? h.to <= i.from : h.from >= i.to) {
      if (f == 0 && s.indexOf(h.type.name) > -1 && h.from < h.to) {
        let p = Ou(h);
        return { start: a, end: p ? { from: p.from, to: p.to } : void 0, matched: true };
      } else if (Eu(h.type, t, o)) f++;
      else if (Eu(h.type, -t, o)) {
        if (f == 0) {
          let p = Ou(h);
          return { start: a, end: p && p.from < p.to ? { from: p.from, to: p.to } : void 0, matched: false };
        }
        f--;
      }
    }
  while (t < 0 ? h.prevSibling() : h.nextSibling());
  return { start: a, matched: false };
}
function mM(n, e, t, i, r, s, o) {
  if (t < 0 ? !e : e == n.doc.length) return null;
  let l = t < 0 ? n.sliceDoc(e - 1, e) : n.sliceDoc(e, e + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0) return null;
  let f = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, h = n.doc.iterRange(e, t > 0 ? n.doc.length : 0), p = 0;
  for (let m = 0; !h.next().done && m <= s; ) {
    let b = h.value;
    t < 0 && (m += b.length);
    let x = e + m * t;
    for (let C = t > 0 ? 0 : b.length - 1, E = t > 0 ? b.length : -1; C != E; C += t) {
      let D = o.indexOf(b[C]);
      if (!(D < 0 || i.resolveInner(x + C, 1).type != r)) if (D % 2 == 0 == t > 0) p++;
      else {
        if (p == 1) return { start: f, end: { from: x + C, to: x + C + 1 }, matched: D >> 1 == a >> 1 };
        p--;
      }
    }
    t > 0 && (m += b.length);
  }
  return h.done ? { start: f, matched: false } : null;
}
function im(n, e, t, i = 0, r = 0) {
  e == null && (e = n.search(/[^\s\u00a0]/), e == -1 && (e = n.length));
  let s = r;
  for (let o = i; o < e; o++) n.charCodeAt(o) == 9 ? s += t - s % t : s++;
  return s;
}
class vM {
  constructor(e, t, i, r) {
    this.string = e, this.tabSize = t, this.indentUnit = i, this.overrideIndent = r, this.pos = 0, this.start = 0, this.lastColumnPos = 0, this.lastColumnValue = 0;
  }
  eol() {
    return this.pos >= this.string.length;
  }
  sol() {
    return this.pos == 0;
  }
  peek() {
    return this.string.charAt(this.pos) || void 0;
  }
  next() {
    if (this.pos < this.string.length) return this.string.charAt(this.pos++);
  }
  eat(e) {
    let t = this.string.charAt(this.pos), i;
    if (typeof e == "string" ? i = t == e : i = t && (e instanceof RegExp ? e.test(t) : e(t)), i) return ++this.pos, t;
  }
  eatWhile(e) {
    let t = this.pos;
    for (; this.eat(e); ) ;
    return this.pos > t;
  }
  eatSpace() {
    let e = this.pos;
    for (; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
    return this.pos > e;
  }
  skipToEnd() {
    this.pos = this.string.length;
  }
  skipTo(e) {
    let t = this.string.indexOf(e, this.pos);
    if (t > -1) return this.pos = t, true;
  }
  backUp(e) {
    this.pos -= e;
  }
  column() {
    return this.lastColumnPos < this.start && (this.lastColumnValue = im(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue;
  }
  indentation() {
    var e;
    return (e = this.overrideIndent) !== null && e !== void 0 ? e : im(this.string, null, this.tabSize);
  }
  match(e, t, i) {
    if (typeof e == "string") {
      let r = (o) => i ? o.toLowerCase() : o, s = this.string.substr(this.pos, e.length);
      return r(s) == r(e) ? (t !== false && (this.pos += e.length), true) : null;
    } else {
      let r = this.string.slice(this.pos).match(e);
      return r && r.index > 0 ? null : (r && t !== false && (this.pos += r[0].length), r);
    }
  }
  current() {
    return this.string.slice(this.start, this.pos);
  }
}
const yM = /* @__PURE__ */ Object.create(null), rm = [bi.none], sm = [], om = /* @__PURE__ */ Object.create(null), bM = /* @__PURE__ */ Object.create(null);
for (let [n, e] of [["variable", "variableName"], ["variable-2", "variableName.special"], ["string-2", "string.special"], ["def", "variableName.definition"], ["tag", "tagName"], ["attribute", "attributeName"], ["type", "typeName"], ["builtin", "variableName.standard"], ["qualifier", "modifier"], ["error", "invalid"], ["header", "heading"], ["property", "propertyName"]]) bM[n] = wM(yM, e);
function gh(n, e) {
  sm.indexOf(n) > -1 || (sm.push(n), console.warn(e));
}
function wM(n, e) {
  let t = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let f of l.split(".")) {
      let h = n[f] || q[f];
      h ? typeof h == "function" ? a.length ? a = a.map(h) : gh(f, `Modifier ${f} used at start of tag`) : a.length ? gh(f, `Tag ${f} used as modifier`) : a = Array.isArray(h) ? h : [h] : gh(f, `Unknown highlighting tag ${f}`);
    }
    for (let f of a) t.push(f);
  }
  if (!t.length) return 0;
  let i = e.replace(/ /g, "_"), r = i + " " + t.map((l) => l.id), s = om[r];
  if (s) return s.id;
  let o = om[r] = bi.define({ id: rm.length, name: i, props: [MC({ [i]: t })] });
  return rm.push(o), o.id;
}
at.RTL, at.LTR;
const xM = (n) => {
  let { state: e } = n, t = e.doc.lineAt(e.selection.main.from), i = Nd(n.state, t.from);
  return i.line ? kM(n) : i.block ? CM(n) : false;
};
function Id(n, e) {
  return ({ state: t, dispatch: i }) => {
    if (t.readOnly) return false;
    let r = n(e, t);
    return r ? (i(t.update(r)), true) : false;
  };
}
const kM = Id(TM, 0), SM = Id(Ry, 0), CM = Id((n, e) => Ry(n, e, AM(e)), 0);
function Nd(n, e) {
  let t = n.languageDataAt("commentTokens", e, 1);
  return t.length ? t[0] : {};
}
const pl = 50;
function MM(n, { open: e, close: t }, i, r) {
  let s = n.sliceDoc(i - pl, i), o = n.sliceDoc(r, r + pl), l = /\s*$/.exec(s)[0].length, a = /^\s*/.exec(o)[0].length, f = s.length - l;
  if (s.slice(f - e.length, f) == e && o.slice(a, a + t.length) == t) return { open: { pos: i - l, margin: l && 1 }, close: { pos: r + a, margin: a && 1 } };
  let h, p;
  r - i <= 2 * pl ? h = p = n.sliceDoc(i, r) : (h = n.sliceDoc(i, i + pl), p = n.sliceDoc(r - pl, r));
  let m = /^\s*/.exec(h)[0].length, b = /\s*$/.exec(p)[0].length, x = p.length - b - t.length;
  return h.slice(m, m + e.length) == e && p.slice(x, x + t.length) == t ? { open: { pos: i + m + e.length, margin: /\s/.test(h.charAt(m + e.length)) ? 1 : 0 }, close: { pos: r - b - t.length, margin: /\s/.test(p.charAt(x - 1)) ? 1 : 0 } } : null;
}
function AM(n) {
  let e = [];
  for (let t of n.selection.ranges) {
    let i = n.doc.lineAt(t.from), r = t.to <= i.to ? i : n.doc.lineAt(t.to);
    r.from > i.from && r.from == t.to && (r = t.to == i.to + 1 ? i : n.doc.lineAt(t.to - 1));
    let s = e.length - 1;
    s >= 0 && e[s].to > i.from ? e[s].to = r.to : e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: r.to });
  }
  return e;
}
function Ry(n, e, t = e.selection.ranges) {
  let i = t.map((s) => Nd(e, s.from).block);
  if (!i.every((s) => s)) return null;
  let r = t.map((s, o) => MM(e, i[o], s.from, s.to));
  if (n != 2 && !r.every((s) => s)) return { changes: e.changes(t.map((s, o) => r[o] ? [] : [{ from: s.from, insert: i[o].open + " " }, { from: s.to, insert: " " + i[o].close }])) };
  if (n != 1 && r.some((s) => s)) {
    let s = [];
    for (let o = 0, l; o < r.length; o++) if (l = r[o]) {
      let a = i[o], { open: f, close: h } = l;
      s.push({ from: f.pos - a.open.length, to: f.pos + f.margin }, { from: h.pos - h.margin, to: h.pos + a.close.length });
    }
    return { changes: s };
  }
  return null;
}
function TM(n, e, t = e.selection.ranges) {
  let i = [], r = -1;
  e: for (let { from: s, to: o } of t) {
    let l = i.length, a = 1e9, f;
    for (let h = s; h <= o; ) {
      let p = e.doc.lineAt(h);
      if (f == null && (f = Nd(e, p.from).line, !f)) continue e;
      if (p.from > r && (s == o || o > p.from)) {
        r = p.from;
        let m = /^\s*/.exec(p.text)[0].length, b = m == p.length, x = p.text.slice(m, m + f.length) == f ? m : -1;
        m < p.text.length && m < a && (a = m), i.push({ line: p, comment: x, token: f, indent: m, empty: b, single: false });
      }
      h = p.to + 1;
    }
    if (a < 1e9) for (let h = l; h < i.length; h++) i[h].indent < i[h].line.text.length && (i[h].indent = a);
    i.length == l + 1 && (i[l].single = true);
  }
  if (n != 2 && i.some((s) => s.comment < 0 && (!s.empty || s.single))) {
    let s = [];
    for (let { line: l, token: a, indent: f, empty: h, single: p } of i) (p || !h) && s.push({ from: l.from + f, insert: a + " " });
    let o = e.changes(s);
    return { changes: o, selection: e.selection.map(o, 1) };
  } else if (n != 1 && i.some((s) => s.comment >= 0)) {
    let s = [];
    for (let { line: o, comment: l, token: a } of i) if (l >= 0) {
      let f = o.from + l, h = f + a.length;
      o.text[h - o.from] == " " && h++, s.push({ from: f, to: h });
    }
    return { changes: s };
  }
  return null;
}
const _u = Er.define(), EM = Er.define(), OM = ve.define(), By = ve.define({ combine(n) {
  return Or(n, { minDepth: 100, newGroupDelay: 500, joinToEvent: (e, t) => t }, { minDepth: Math.max, newGroupDelay: Math.min, joinToEvent: (e, t) => (i, r) => e(i, r) || t(i, r) });
} }), Py = tn.define({ create() {
  return lr.empty;
}, update(n, e) {
  let t = e.state.facet(By), i = e.annotation(_u);
  if (i) {
    let a = Kn.fromTransaction(e, i.selection), f = i.side, h = f == 0 ? n.undone : n.done;
    return a ? h = $c(h, h.length, t.minDepth, a) : h = Ny(h, e.startState.selection), new lr(f == 0 ? i.rest : h, f == 0 ? h : i.rest);
  }
  let r = e.annotation(EM);
  if ((r == "full" || r == "before") && (n = n.isolate()), e.annotation(Gt.addToHistory) === false) return e.changes.empty ? n : n.addMapping(e.changes.desc);
  let s = Kn.fromTransaction(e), o = e.annotation(Gt.time), l = e.annotation(Gt.userEvent);
  return s ? n = n.addChanges(s, o, l, t, e) : e.selection && (n = n.addSelection(e.startState.selection, o, l, t.newGroupDelay)), (r == "full" || r == "after") && (n = n.isolate()), n;
}, toJSON(n) {
  return { done: n.done.map((e) => e.toJSON()), undone: n.undone.map((e) => e.toJSON()) };
}, fromJSON(n) {
  return new lr(n.done.map(Kn.fromJSON), n.undone.map(Kn.fromJSON));
} });
function _M(n = {}) {
  return [Py, By.of(n), he.domEventHandlers({ beforeinput(e, t) {
    let i = e.inputType == "historyUndo" ? Fd : e.inputType == "historyRedo" ? Kc : null;
    return i ? (e.preventDefault(), i(t)) : false;
  } })];
}
function bf(n, e) {
  return function({ state: t, dispatch: i }) {
    if (!e && t.readOnly) return false;
    let r = t.field(Py, false);
    if (!r) return false;
    let s = r.pop(n, t, e);
    return s ? (i(s), true) : false;
  };
}
const Fd = bf(0, false), Kc = bf(1, false), LM = bf(0, true), DM = bf(1, true);
class Kn {
  constructor(e, t, i, r, s) {
    this.changes = e, this.effects = t, this.mapped = i, this.startSelection = r, this.selectionsAfter = s;
  }
  setSelAfter(e) {
    return new Kn(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, i;
    return { changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(), mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(), startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(), selectionsAfter: this.selectionsAfter.map((r) => r.toJSON()) };
  }
  static fromJSON(e) {
    return new Kn(e.changes && qt.fromJSON(e.changes), [], e.mapped && fr.fromJSON(e.mapped), e.startSelection && j.fromJSON(e.startSelection), e.selectionsAfter.map(j.fromJSON));
  }
  static fromTransaction(e, t) {
    let i = mi;
    for (let r of e.startState.facet(OM)) {
      let s = r(e);
      s.length && (i = i.concat(s));
    }
    return !i.length && e.changes.empty ? null : new Kn(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, mi);
  }
  static selection(e) {
    return new Kn(void 0, mi, void 0, void 0, e);
  }
}
function $c(n, e, t, i) {
  let r = e + 1 > t + 20 ? e - t - 1 : 0, s = n.slice(r, e);
  return s.push(i), s;
}
function RM(n, e) {
  let t = [], i = false;
  return n.iterChangedRanges((r, s) => t.push(r, s)), e.iterChangedRanges((r, s, o, l) => {
    for (let a = 0; a < t.length; ) {
      let f = t[a++], h = t[a++];
      l >= f && o <= h && (i = true);
    }
  }), i;
}
function BM(n, e) {
  return n.ranges.length == e.ranges.length && n.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0;
}
function Iy(n, e) {
  return n.length ? e.length ? n.concat(e) : n : e;
}
const mi = [], PM = 200;
function Ny(n, e) {
  if (n.length) {
    let t = n[n.length - 1], i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - PM));
    return i.length && i[i.length - 1].eq(e) ? n : (i.push(e), $c(n, n.length - 1, 1e9, t.setSelAfter(i)));
  } else return [Kn.selection([e])];
}
function IM(n) {
  let e = n[n.length - 1], t = n.slice();
  return t[n.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function mh(n, e) {
  if (!n.length) return n;
  let t = n.length, i = mi;
  for (; t; ) {
    let r = NM(n[t - 1], e, i);
    if (r.changes && !r.changes.empty || r.effects.length) {
      let s = n.slice(0, t);
      return s[t - 1] = r, s;
    } else e = r.mapped, t--, i = r.selectionsAfter;
  }
  return i.length ? [Kn.selection(i)] : mi;
}
function NM(n, e, t) {
  let i = Iy(n.selectionsAfter.length ? n.selectionsAfter.map((l) => l.map(e)) : mi, t);
  if (!n.changes) return Kn.selection(i);
  let r = n.changes.map(e), s = e.mapDesc(n.changes, true), o = n.mapped ? n.mapped.composeDesc(s) : s;
  return new Kn(r, Te.mapEffects(n.effects, e), o, n.startSelection.map(s), i);
}
const FM = /^(input\.type|delete)($|\.)/;
class lr {
  constructor(e, t, i = 0, r = void 0) {
    this.done = e, this.undone = t, this.prevTime = i, this.prevUserEvent = r;
  }
  isolate() {
    return this.prevTime ? new lr(this.done, this.undone) : this;
  }
  addChanges(e, t, i, r, s) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!i || FM.test(i)) && (!l.selectionsAfter.length && t - this.prevTime < r.newGroupDelay && r.joinToEvent(s, RM(l.changes, e.changes)) || i == "input.type.compose") ? o = $c(o, o.length - 1, r.minDepth, new Kn(e.changes.compose(l.changes), Iy(Te.mapEffects(e.effects, l.changes), l.effects), l.mapped, l.startSelection, mi)) : o = $c(o, o.length, r.minDepth, e), new lr(o, mi, t, i);
  }
  addSelection(e, t, i, r) {
    let s = this.done.length ? this.done[this.done.length - 1].selectionsAfter : mi;
    return s.length > 0 && t - this.prevTime < r && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && BM(s[s.length - 1], e) ? this : new lr(Ny(this.done, e), this.undone, t, i);
  }
  addMapping(e) {
    return new lr(mh(this.done, e), mh(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, i) {
    let r = e == 0 ? this.done : this.undone;
    if (r.length == 0) return null;
    let s = r[r.length - 1], o = s.selectionsAfter[0] || (s.startSelection ? s.startSelection.map(s.changes.invertedDesc, 1) : t.selection);
    if (i && s.selectionsAfter.length) return t.update({ selection: s.selectionsAfter[s.selectionsAfter.length - 1], annotations: _u.of({ side: e, rest: IM(r), selection: o }), userEvent: e == 0 ? "select.undo" : "select.redo", scrollIntoView: true });
    if (s.changes) {
      let l = r.length == 1 ? mi : r.slice(0, r.length - 1);
      return s.mapped && (l = mh(l, s.mapped)), t.update({ changes: s.changes, selection: s.startSelection, effects: s.effects, annotations: _u.of({ side: e, rest: l, selection: o }), filter: false, userEvent: e == 0 ? "undo" : "redo", scrollIntoView: true });
    } else return null;
  }
}
lr.empty = new lr(mi, mi);
const HM = [{ key: "Mod-z", run: Fd, preventDefault: true }, { key: "Mod-y", mac: "Mod-Shift-z", run: Kc, preventDefault: true }, { linux: "Ctrl-Shift-z", run: Kc, preventDefault: true }, { key: "Mod-u", run: LM, preventDefault: true }, { key: "Alt-u", mac: "Mod-Shift-u", run: DM, preventDefault: true }];
function Fo(n, e) {
  return j.create(n.ranges.map(e), n.mainIndex);
}
function Ni(n, e) {
  return n.update({ selection: e, scrollIntoView: true, userEvent: "select" });
}
function Fi({ state: n, dispatch: e }, t) {
  let i = Fo(n.selection, t);
  return i.eq(n.selection, true) ? false : (e(Ni(n, i)), true);
}
function wf(n, e) {
  return j.cursor(e ? n.to : n.from);
}
function Hd(n, e) {
  return Fi(n, (t) => t.empty ? n.moveByChar(t, e) : wf(t, e));
}
function yn(n) {
  return n.textDirectionAt(n.state.selection.main.head) == at.LTR;
}
const Wd = (n) => Hd(n, !yn(n)), Fy = (n) => Hd(n, yn(n)), WM = (n) => Hd(n, false);
function Hy(n, e) {
  return Fi(n, (t) => t.empty ? n.moveByGroup(t, e) : wf(t, e));
}
const VM = (n) => Hy(n, !yn(n)), zM = (n) => Hy(n, yn(n));
function KM(n, e, t) {
  if (e.type.prop(t)) return true;
  let i = e.to - e.from;
  return i && (i > 2 || /[^\s,.;:]/.test(n.sliceDoc(e.from, e.to))) || e.firstChild;
}
function xf(n, e, t) {
  let i = vn(n).resolveInner(e.head), r = t ? ze.closedBy : ze.openedBy;
  for (let a = e.head; ; ) {
    let f = t ? i.childAfter(a) : i.childBefore(a);
    if (!f) break;
    KM(n, f, r) ? i = f : a = t ? f.to : f.from;
  }
  let s = i.type.prop(r), o, l;
  return s && (o = t ? gi(n, i.from, 1) : gi(n, i.to, -1)) && o.matched ? l = t ? o.end.to : o.end.from : l = t ? i.to : i.from, j.cursor(l, t ? -1 : 1);
}
const $M = (n) => Fi(n, (e) => xf(n.state, e, !yn(n))), jM = (n) => Fi(n, (e) => xf(n.state, e, yn(n)));
function Wy(n, e) {
  return Fi(n, (t) => {
    if (!t.empty) return wf(t, e);
    let i = n.moveVertically(t, e);
    return i.head != t.head ? i : n.moveToLineBoundary(t, e);
  });
}
const Vy = (n) => Wy(n, false), zy = (n) => Wy(n, true);
function Ky(n) {
  let e = n.scrollDOM.clientHeight < n.scrollDOM.scrollHeight - 2, t = 0, i = 0, r;
  if (e) {
    for (let s of n.state.facet(he.scrollMargins)) {
      let o = s(n);
      (o == null ? void 0 : o.top) && (t = Math.max(o == null ? void 0 : o.top, t)), (o == null ? void 0 : o.bottom) && (i = Math.max(o == null ? void 0 : o.bottom, i));
    }
    r = n.scrollDOM.clientHeight - t - i;
  } else r = (n.dom.ownerDocument.defaultView || window).innerHeight;
  return { marginTop: t, marginBottom: i, selfScroll: e, height: Math.max(n.defaultLineHeight, r - 5) };
}
function $y(n, e) {
  let t = Ky(n), { state: i } = n, r = Fo(i.selection, (o) => o.empty ? n.moveVertically(o, e, t.height) : wf(o, e));
  if (r.eq(i.selection)) return false;
  let s;
  if (t.selfScroll) {
    let o = n.coordsAtPos(i.selection.main.head), l = n.scrollDOM.getBoundingClientRect(), a = l.top + t.marginTop, f = l.bottom - t.marginBottom;
    o && o.top > a && o.bottom < f && (s = he.scrollIntoView(r.main.head, { y: "start", yMargin: o.top - a }));
  }
  return n.dispatch(Ni(i, r), { effects: s }), true;
}
const lm = (n) => $y(n, false), Lu = (n) => $y(n, true);
function ls(n, e, t) {
  let i = n.lineBlockAt(e.head), r = n.moveToLineBoundary(e, t);
  if (r.head == e.head && r.head != (t ? i.to : i.from) && (r = n.moveToLineBoundary(e, t, false)), !t && r.head == i.from && i.length) {
    let s = /^\s*/.exec(n.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    s && e.head != i.from + s && (r = j.cursor(i.from + s));
  }
  return r;
}
const jy = (n) => Fi(n, (e) => ls(n, e, true)), Uy = (n) => Fi(n, (e) => ls(n, e, false)), UM = (n) => Fi(n, (e) => ls(n, e, !yn(n))), qM = (n) => Fi(n, (e) => ls(n, e, yn(n))), GM = (n) => Fi(n, (e) => j.cursor(n.lineBlockAt(e.head).from, 1)), YM = (n) => Fi(n, (e) => j.cursor(n.lineBlockAt(e.head).to, -1));
function JM(n, e, t) {
  let i = false, r = Fo(n.selection, (s) => {
    let o = gi(n, s.head, -1) || gi(n, s.head, 1) || s.head > 0 && gi(n, s.head - 1, 1) || s.head < n.doc.length && gi(n, s.head + 1, -1);
    if (!o || !o.end) return s;
    i = true;
    let l = o.start.from == s.head ? o.end.to : o.end.from;
    return j.cursor(l);
  });
  return i ? (e(Ni(n, r)), true) : false;
}
const QM = ({ state: n, dispatch: e }) => JM(n, e);
function xi(n, e) {
  let t = Fo(n.state.selection, (i) => {
    let r = e(i);
    return j.range(i.anchor, r.head, r.goalColumn, r.bidiLevel || void 0, r.assoc);
  });
  return t.eq(n.state.selection) ? false : (n.dispatch(Ni(n.state, t)), true);
}
function qy(n, e) {
  return xi(n, (t) => n.moveByChar(t, e));
}
const Gy = (n) => qy(n, !yn(n)), Yy = (n) => qy(n, yn(n));
function Jy(n, e) {
  return xi(n, (t) => n.moveByGroup(t, e));
}
const XM = (n) => Jy(n, !yn(n)), ZM = (n) => Jy(n, yn(n)), eA = (n) => xi(n, (e) => xf(n.state, e, !yn(n))), tA = (n) => xi(n, (e) => xf(n.state, e, yn(n)));
function Qy(n, e) {
  return xi(n, (t) => n.moveVertically(t, e));
}
const Xy = (n) => Qy(n, false), Zy = (n) => Qy(n, true);
function eb(n, e) {
  return xi(n, (t) => n.moveVertically(t, e, Ky(n).height));
}
const am = (n) => eb(n, false), cm = (n) => eb(n, true), nA = (n) => xi(n, (e) => ls(n, e, true)), iA = (n) => xi(n, (e) => ls(n, e, false)), rA = (n) => xi(n, (e) => ls(n, e, !yn(n))), sA = (n) => xi(n, (e) => ls(n, e, yn(n))), oA = (n) => xi(n, (e) => j.cursor(n.lineBlockAt(e.head).from)), lA = (n) => xi(n, (e) => j.cursor(n.lineBlockAt(e.head).to)), fm = ({ state: n, dispatch: e }) => (e(Ni(n, { anchor: 0 })), true), hm = ({ state: n, dispatch: e }) => (e(Ni(n, { anchor: n.doc.length })), true), um = ({ state: n, dispatch: e }) => (e(Ni(n, { anchor: n.selection.main.anchor, head: 0 })), true), dm = ({ state: n, dispatch: e }) => (e(Ni(n, { anchor: n.selection.main.anchor, head: n.doc.length })), true), aA = ({ state: n, dispatch: e }) => (e(n.update({ selection: { anchor: 0, head: n.doc.length }, userEvent: "select" })), true), cA = ({ state: n, dispatch: e }) => {
  let t = kf(n).map(({ from: i, to: r }) => j.range(i, Math.min(r + 1, n.doc.length)));
  return e(n.update({ selection: j.create(t), userEvent: "select" })), true;
}, fA = ({ state: n, dispatch: e }) => {
  let t = Fo(n.selection, (i) => {
    let r = vn(n), s = r.resolveStack(i.from, 1);
    if (i.empty) {
      let o = r.resolveStack(i.from, -1);
      o.node.from >= s.node.from && o.node.to <= s.node.to && (s = o);
    }
    for (let o = s; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < i.from && l.to >= i.to || l.to > i.to && l.from <= i.from) && o.next) return j.range(l.to, l.from);
    }
    return i;
  });
  return t.eq(n.selection) ? false : (e(Ni(n, t)), true);
};
function tb(n, e) {
  let { state: t } = n, i = t.selection, r = t.selection.ranges.slice();
  for (let s of t.selection.ranges) {
    let o = t.doc.lineAt(s.head);
    if (e ? o.to < n.state.doc.length : o.from > 0) for (let l = s; ; ) {
      let a = n.moveVertically(l, e);
      if (a.head < o.from || a.head > o.to) {
        r.some((f) => f.head == a.head) || r.push(a);
        break;
      } else {
        if (a.head == l.head) break;
        l = a;
      }
    }
  }
  return r.length == i.ranges.length ? false : (n.dispatch(Ni(t, j.create(r, r.length - 1))), true);
}
const hA = (n) => tb(n, false), uA = (n) => tb(n, true), dA = ({ state: n, dispatch: e }) => {
  let t = n.selection, i = null;
  return t.ranges.length > 1 ? i = j.create([t.main]) : t.main.empty || (i = j.create([j.cursor(t.main.head)])), i ? (e(Ni(n, i)), true) : false;
};
function da(n, e) {
  if (n.state.readOnly) return false;
  let t = "delete.selection", { state: i } = n, r = i.changeByRange((s) => {
    let { from: o, to: l } = s;
    if (o == l) {
      let a = e(s);
      a < o ? (t = "delete.backward", a = Ja(n, a, false)) : a > o && (t = "delete.forward", a = Ja(n, a, true)), o = Math.min(o, a), l = Math.max(l, a);
    } else o = Ja(n, o, false), l = Ja(n, l, true);
    return o == l ? { range: s } : { changes: { from: o, to: l }, range: j.cursor(o, o < s.head ? -1 : 1) };
  });
  return r.changes.empty ? false : (n.dispatch(i.update(r, { scrollIntoView: true, userEvent: t, effects: t == "delete.selection" ? he.announce.of(i.phrase("Selection deleted")) : void 0 })), true);
}
function Ja(n, e, t) {
  if (n instanceof he) for (let i of n.state.facet(he.atomicRanges).map((r) => r(n))) i.between(e, e, (r, s) => {
    r < e && s > e && (e = t ? s : r);
  });
  return e;
}
const nb = (n, e, t) => da(n, (i) => {
  let r = i.from, { state: s } = n, o = s.doc.lineAt(r), l, a;
  if (t && !e && r > o.from && r < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, r - o.from))) {
    if (l[l.length - 1] == "	") return r - 1;
    let f = No(l, s.tabSize), h = f % Wc(s) || Wc(s);
    for (let p = 0; p < h && l[l.length - 1 - p] == " "; p++) r--;
    a = r;
  } else a = en(o.text, r - o.from, e, e) + o.from, a == r && o.number != (e ? s.doc.lines : 1) ? a += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, r - o.from)) && (a = en(o.text, a - o.from, false, false) + o.from);
  return a;
}), Du = (n) => nb(n, false, true), ib = (n) => nb(n, true, false), rb = (n, e) => da(n, (t) => {
  let i = t.head, { state: r } = n, s = r.doc.lineAt(i), o = r.charCategorizer(i);
  for (let l = null; ; ) {
    if (i == (e ? s.to : s.from)) {
      i == t.head && s.number != (e ? r.doc.lines : 1) && (i += e ? 1 : -1);
      break;
    }
    let a = en(s.text, i - s.from, e) + s.from, f = s.text.slice(Math.min(i, a) - s.from, Math.max(i, a) - s.from), h = o(f);
    if (l != null && h != l) break;
    (f != " " || i != t.head) && (l = h), i = a;
  }
  return i;
}), sb = (n) => rb(n, false), pA = (n) => rb(n, true), gA = (n) => da(n, (e) => {
  let t = n.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
}), mA = (n) => da(n, (e) => {
  let t = n.moveToLineBoundary(e, false).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}), vA = (n) => da(n, (e) => {
  let t = n.moveToLineBoundary(e, true).head;
  return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
}), yA = ({ state: n, dispatch: e }) => {
  if (n.readOnly) return false;
  let t = n.changeByRange((i) => ({ changes: { from: i.from, to: i.to, insert: Qe.of(["", ""]) }, range: j.cursor(i.from) }));
  return e(n.update(t, { scrollIntoView: true, userEvent: "input" })), true;
}, bA = ({ state: n, dispatch: e }) => {
  if (n.readOnly) return false;
  let t = n.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == n.doc.length) return { range: i };
    let r = i.from, s = n.doc.lineAt(r), o = r == s.from ? r - 1 : en(s.text, r - s.from, false) + s.from, l = r == s.to ? r + 1 : en(s.text, r - s.from, true) + s.from;
    return { changes: { from: o, to: l, insert: n.doc.slice(r, l).append(n.doc.slice(o, r)) }, range: j.cursor(l) };
  });
  return t.changes.empty ? false : (e(n.update(t, { scrollIntoView: true, userEvent: "move.character" })), true);
};
function kf(n) {
  let e = [], t = -1;
  for (let i of n.selection.ranges) {
    let r = n.doc.lineAt(i.from), s = n.doc.lineAt(i.to);
    if (!i.empty && i.to == s.from && (s = n.doc.lineAt(i.to - 1)), t >= r.number) {
      let o = e[e.length - 1];
      o.to = s.to, o.ranges.push(i);
    } else e.push({ from: r.from, to: s.to, ranges: [i] });
    t = s.number + 1;
  }
  return e;
}
function ob(n, e, t) {
  if (n.readOnly) return false;
  let i = [], r = [];
  for (let s of kf(n)) {
    if (t ? s.to == n.doc.length : s.from == 0) continue;
    let o = n.doc.lineAt(t ? s.to + 1 : s.from - 1), l = o.length + 1;
    if (t) {
      i.push({ from: s.to, to: o.to }, { from: s.from, insert: o.text + n.lineBreak });
      for (let a of s.ranges) r.push(j.range(Math.min(n.doc.length, a.anchor + l), Math.min(n.doc.length, a.head + l)));
    } else {
      i.push({ from: o.from, to: s.from }, { from: s.to, insert: n.lineBreak + o.text });
      for (let a of s.ranges) r.push(j.range(a.anchor - l, a.head - l));
    }
  }
  return i.length ? (e(n.update({ changes: i, scrollIntoView: true, selection: j.create(r, n.selection.mainIndex), userEvent: "move.line" })), true) : false;
}
const wA = ({ state: n, dispatch: e }) => ob(n, e, false), xA = ({ state: n, dispatch: e }) => ob(n, e, true);
function lb(n, e, t) {
  if (n.readOnly) return false;
  let i = [];
  for (let s of kf(n)) t ? i.push({ from: s.from, insert: n.doc.slice(s.from, s.to) + n.lineBreak }) : i.push({ from: s.to, insert: n.lineBreak + n.doc.slice(s.from, s.to) });
  let r = n.changes(i);
  return e(n.update({ changes: r, selection: n.selection.map(r, t ? 1 : -1), scrollIntoView: true, userEvent: "input.copyline" })), true;
}
const kA = ({ state: n, dispatch: e }) => lb(n, e, false), SA = ({ state: n, dispatch: e }) => lb(n, e, true), CA = (n) => {
  if (n.state.readOnly) return false;
  let { state: e } = n, t = e.changes(kf(e).map(({ from: r, to: s }) => (r > 0 ? r-- : s < e.doc.length && s++, { from: r, to: s }))), i = Fo(e.selection, (r) => {
    let s;
    if (n.lineWrapping) {
      let o = n.lineBlockAt(r.head), l = n.coordsAtPos(r.head, r.assoc || 1);
      l && (s = o.bottom + n.documentTop - l.bottom + n.defaultLineHeight / 2);
    }
    return n.moveVertically(r, true, s);
  }).map(t);
  return n.dispatch({ changes: t, selection: i, scrollIntoView: true, userEvent: "delete.line" }), true;
};
function MA(n, e) {
  if (/\(\)|\[\]|\{\}/.test(n.sliceDoc(e - 1, e + 1))) return { from: e, to: e };
  let t = vn(n).resolveInner(e), i = t.childBefore(e), r = t.childAfter(e), s;
  return i && r && i.to <= e && r.from >= e && (s = i.type.prop(ze.closedBy)) && s.indexOf(r.name) > -1 && n.doc.lineAt(i.to).from == n.doc.lineAt(r.from).from && !/\S/.test(n.sliceDoc(i.to, r.from)) ? { from: i.to, to: r.from } : null;
}
const Ru = ab(false), AA = ab(true);
function ab(n) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly) return false;
    let i = e.changeByRange((r) => {
      let { from: s, to: o } = r, l = e.doc.lineAt(s), a = !n && s == o && MA(e, s);
      n && (s = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let f = new vf(e, { simulateBreak: s, simulateDoubleBreak: !!a }), h = Bd(f, s);
      for (h == null && (h = No(/^\s*/.exec(e.doc.lineAt(s).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); ) o++;
      a ? { from: s, to: o } = a : s > l.from && s < l.from + 100 && !/\S/.test(l.text.slice(0, s)) && (s = l.from);
      let p = ["", ea(e, h)];
      return a && p.push(ea(e, f.lineIndent(l.from, -1))), { changes: { from: s, to: o, insert: Qe.of(p) }, range: j.cursor(s + 1 + p[1].length) };
    });
    return t(e.update(i, { scrollIntoView: true, userEvent: "input" })), true;
  };
}
function Vd(n, e) {
  let t = -1;
  return n.changeByRange((i) => {
    let r = [];
    for (let o = i.from; o <= i.to; ) {
      let l = n.doc.lineAt(o);
      l.number > t && (i.empty || i.to > l.from) && (e(l, r, i), t = l.number), o = l.to + 1;
    }
    let s = n.changes(r);
    return { changes: r, range: j.range(s.mapPos(i.anchor, 1), s.mapPos(i.head, 1)) };
  });
}
const cb = ({ state: n, dispatch: e }) => {
  if (n.readOnly) return false;
  let t = /* @__PURE__ */ Object.create(null), i = new vf(n, { overrideIndentation: (s) => {
    let o = t[s];
    return o ?? -1;
  } }), r = Vd(n, (s, o, l) => {
    let a = Bd(i, s.from);
    if (a == null) return;
    /\S/.test(s.text) || (a = 0);
    let f = /^\s*/.exec(s.text)[0], h = ea(n, a);
    (f != h || l.from < s.from + f.length) && (t[s.from] = a, o.push({ from: s.from, to: s.from + f.length, insert: h }));
  });
  return r.changes.empty || e(n.update(r, { userEvent: "indent" })), true;
}, fb = ({ state: n, dispatch: e }) => n.readOnly ? false : (e(n.update(Vd(n, (t, i) => {
  i.push({ from: t.from, insert: n.facet(Zl) });
}), { userEvent: "input.indent" })), true), hb = ({ state: n, dispatch: e }) => n.readOnly ? false : (e(n.update(Vd(n, (t, i) => {
  let r = /^\s*/.exec(t.text)[0];
  if (!r) return;
  let s = No(r, n.tabSize), o = 0, l = ea(n, Math.max(0, s - Wc(n)));
  for (; o < r.length && o < l.length && r.charCodeAt(o) == l.charCodeAt(o); ) o++;
  i.push({ from: t.from + o, to: t.from + r.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), true), TA = (n) => (n.setTabFocusMode(), true), EA = [{ key: "Ctrl-b", run: Wd, shift: Gy, preventDefault: true }, { key: "Ctrl-f", run: Fy, shift: Yy }, { key: "Ctrl-p", run: Vy, shift: Xy }, { key: "Ctrl-n", run: zy, shift: Zy }, { key: "Ctrl-a", run: GM, shift: oA }, { key: "Ctrl-e", run: YM, shift: lA }, { key: "Ctrl-d", run: ib }, { key: "Ctrl-h", run: Du }, { key: "Ctrl-k", run: gA }, { key: "Ctrl-Alt-h", run: sb }, { key: "Ctrl-o", run: yA }, { key: "Ctrl-t", run: bA }, { key: "Ctrl-v", run: Lu }], OA = [{ key: "ArrowLeft", run: Wd, shift: Gy, preventDefault: true }, { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: VM, shift: XM, preventDefault: true }, { mac: "Cmd-ArrowLeft", run: UM, shift: rA, preventDefault: true }, { key: "ArrowRight", run: Fy, shift: Yy, preventDefault: true }, { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: zM, shift: ZM, preventDefault: true }, { mac: "Cmd-ArrowRight", run: qM, shift: sA, preventDefault: true }, { key: "ArrowUp", run: Vy, shift: Xy, preventDefault: true }, { mac: "Cmd-ArrowUp", run: fm, shift: um }, { mac: "Ctrl-ArrowUp", run: lm, shift: am }, { key: "ArrowDown", run: zy, shift: Zy, preventDefault: true }, { mac: "Cmd-ArrowDown", run: hm, shift: dm }, { mac: "Ctrl-ArrowDown", run: Lu, shift: cm }, { key: "PageUp", run: lm, shift: am }, { key: "PageDown", run: Lu, shift: cm }, { key: "Home", run: Uy, shift: iA, preventDefault: true }, { key: "Mod-Home", run: fm, shift: um }, { key: "End", run: jy, shift: nA, preventDefault: true }, { key: "Mod-End", run: hm, shift: dm }, { key: "Enter", run: Ru, shift: Ru }, { key: "Mod-a", run: aA }, { key: "Backspace", run: Du, shift: Du, preventDefault: true }, { key: "Delete", run: ib, preventDefault: true }, { key: "Mod-Backspace", mac: "Alt-Backspace", run: sb, preventDefault: true }, { key: "Mod-Delete", mac: "Alt-Delete", run: pA, preventDefault: true }, { mac: "Mod-Backspace", run: mA, preventDefault: true }, { mac: "Mod-Delete", run: vA, preventDefault: true }].concat(EA.map((n) => ({ mac: n.key, run: n.run, shift: n.shift }))), _A = [{ key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: $M, shift: eA }, { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: jM, shift: tA }, { key: "Alt-ArrowUp", run: wA }, { key: "Shift-Alt-ArrowUp", run: kA }, { key: "Alt-ArrowDown", run: xA }, { key: "Shift-Alt-ArrowDown", run: SA }, { key: "Mod-Alt-ArrowUp", run: hA }, { key: "Mod-Alt-ArrowDown", run: uA }, { key: "Escape", run: dA }, { key: "Mod-Enter", run: AA }, { key: "Alt-l", mac: "Ctrl-l", run: cA }, { key: "Mod-i", run: fA, preventDefault: true }, { key: "Mod-[", run: hb }, { key: "Mod-]", run: fb }, { key: "Mod-Alt-\\", run: cb }, { key: "Shift-Mod-k", run: CA }, { key: "Shift-Mod-\\", run: QM }, { key: "Mod-/", run: xM }, { key: "Alt-A", run: SM }, { key: "Ctrl-m", mac: "Shift-Alt-m", run: TA }].concat(OA), pm = typeof String.prototype.normalize == "function" ? (n) => n.normalize("NFKD") : (n) => n;
class _o {
  constructor(e, t, i = 0, r = e.length, s, o) {
    this.test = o, this.value = { from: 0, to: 0 }, this.done = false, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(i, r), this.bufferStart = i, this.normalize = s ? (l) => s(pm(l)) : pm, this.query = this.normalize(t);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return Wn(this.buffer, this.bufferPos);
  }
  next() {
    for (; this.matches.length; ) this.matches.pop();
    return this.nextOverlapping();
  }
  nextOverlapping() {
    for (; ; ) {
      let e = this.peek();
      if (e < 0) return this.done = true, this;
      let t = dd(e), i = this.bufferStart + this.bufferPos;
      this.bufferPos += rr(e);
      let r = this.normalize(t);
      if (r.length) for (let s = 0, o = i; ; s++) {
        let l = r.charCodeAt(s), a = this.match(l, o, this.bufferPos + this.bufferStart);
        if (s == r.length - 1) {
          if (a) return this.value = a, this;
          break;
        }
        o == i && s < t.length && t.charCodeAt(s) == l && o++;
      }
    }
  }
  match(e, t, i) {
    let r = null;
    for (let s = 0; s < this.matches.length; s += 2) {
      let o = this.matches[s], l = false;
      this.query.charCodeAt(o) == e && (o == this.query.length - 1 ? r = { from: this.matches[s + 1], to: i } : (this.matches[s]++, l = true)), l || (this.matches.splice(s, 2), s -= 2);
    }
    return this.query.charCodeAt(0) == e && (this.query.length == 1 ? r = { from: t, to: i } : this.matches.push(1, t)), r && this.test && !this.test(r.from, r.to, this.buffer, this.bufferStart) && (r = null), r;
  }
}
typeof Symbol < "u" && (_o.prototype[Symbol.iterator] = function() {
  return this;
});
const ub = { from: -1, to: -1, match: /.*/.exec("") }, zd = "gm" + (/x/.unicode == null ? "" : "u");
class Kd {
  constructor(e, t, i, r = 0, s = e.length) {
    if (this.text = e, this.to = s, this.curLine = "", this.done = false, this.value = ub, /\\[sWDnr]|\n|\r|\[\^/.test(t)) return new db(e, t, i, r, s);
    this.re = new RegExp(t, zd + ((i == null ? void 0 : i.ignoreCase) ? "i" : "")), this.test = i == null ? void 0 : i.test, this.iter = e.iter();
    let o = e.lineAt(r);
    this.curLineStart = o.from, this.matchPos = jc(e, r), this.getLine(this.curLineStart);
  }
  getLine(e) {
    this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  next() {
    for (let e = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = e;
      let t = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (t) {
        let i = this.curLineStart + t.index, r = i + t[0].length;
        if (this.matchPos = jc(this.text, r + (i == r ? 1 : 0)), i == this.curLineStart + this.curLine.length && this.nextLine(), (i < r || i > this.value.to) && (!this.test || this.test(i, r, t))) return this.value = { from: i, to: r, match: t }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to) this.nextLine(), e = 0;
      else return this.done = true, this;
    }
  }
}
const vh = /* @__PURE__ */ new WeakMap();
class bo {
  constructor(e, t) {
    this.from = e, this.text = t;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, i) {
    let r = vh.get(e);
    if (!r || r.from >= i || r.to <= t) {
      let l = new bo(t, e.sliceString(t, i));
      return vh.set(e, l), l;
    }
    if (r.from == t && r.to == i) return r;
    let { text: s, from: o } = r;
    return o > t && (s = e.sliceString(t, o) + s, o = t), r.to < i && (s += e.sliceString(r.to, i)), vh.set(e, new bo(o, s)), new bo(t, s.slice(t - o, i - o));
  }
}
class db {
  constructor(e, t, i, r, s) {
    this.text = e, this.to = s, this.done = false, this.value = ub, this.matchPos = jc(e, r), this.re = new RegExp(t, zd + ((i == null ? void 0 : i.ignoreCase) ? "i" : "")), this.test = i == null ? void 0 : i.test, this.flat = bo.get(e, r, this.chunkEnd(r + 5e3));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (; ; ) {
      let e = this.re.lastIndex = this.matchPos - this.flat.from, t = this.re.exec(this.flat.text);
      if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t) {
        let i = this.flat.from + t.index, r = i + t[0].length;
        if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(i, r, t))) return this.value = { from: i, to: r, match: t }, this.matchPos = jc(this.text, r + (i == r ? 1 : 0)), this;
      }
      if (this.flat.to == this.to) return this.done = true, this;
      this.flat = bo.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (Kd.prototype[Symbol.iterator] = db.prototype[Symbol.iterator] = function() {
  return this;
});
function LA(n) {
  try {
    return new RegExp(n, zd), true;
  } catch {
    return false;
  }
}
function jc(n, e) {
  if (e >= n.length) return e;
  let t = n.lineAt(e), i;
  for (; e < t.to && (i = t.text.charCodeAt(e - t.from)) >= 56320 && i < 57344; ) e++;
  return e;
}
const DA = (n) => {
  let { state: e } = n, t = String(e.doc.lineAt(n.state.selection.main.head).number), { close: i, result: r } = eC(n, { label: e.phrase("Go to line"), input: { type: "text", name: "line", value: t }, focus: true, submitLabel: e.phrase("go") });
  return r.then((s) => {
    let o = s && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(s.elements.line.value);
    if (!o) {
      n.dispatch({ effects: i });
      return;
    }
    let l = e.doc.lineAt(e.selection.main.head), [, a, f, h, p] = o, m = h ? +h.slice(1) : 0, b = f ? +f : l.number;
    if (f && p) {
      let E = b / 100;
      a && (E = E * (a == "-" ? -1 : 1) + l.number / e.doc.lines), b = Math.round(e.doc.lines * E);
    } else f && a && (b = b * (a == "-" ? -1 : 1) + l.number);
    let x = e.doc.line(Math.max(1, Math.min(e.doc.lines, b))), C = j.cursor(x.from + Math.max(0, Math.min(m, x.length)));
    n.dispatch({ effects: [i, he.scrollIntoView(C.from, { y: "center" })], selection: C });
  }), true;
}, RA = { highlightWordAroundCursor: false, minSelectionLength: 1, maxMatches: 100, wholeWords: false }, BA = ve.define({ combine(n) {
  return Or(n, RA, { highlightWordAroundCursor: (e, t) => e || t, minSelectionLength: Math.min, maxMatches: Math.min });
} });
function PA(n) {
  return [WA, HA];
}
const IA = be.mark({ class: "cm-selectionMatch" }), NA = be.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function gm(n, e, t, i) {
  return (t == 0 || n(e.sliceDoc(t - 1, t)) != kt.Word) && (i == e.doc.length || n(e.sliceDoc(i, i + 1)) != kt.Word);
}
function FA(n, e, t, i) {
  return n(e.sliceDoc(t, t + 1)) == kt.Word && n(e.sliceDoc(i - 1, i)) == kt.Word;
}
const HA = xt.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.selectionSet || n.docChanged || n.viewportChanged) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let e = n.state.facet(BA), { state: t } = n, i = t.selection;
    if (i.ranges.length > 1) return be.none;
    let r = i.main, s, o = null;
    if (r.empty) {
      if (!e.highlightWordAroundCursor) return be.none;
      let a = t.wordAt(r.head);
      if (!a) return be.none;
      o = t.charCategorizer(r.head), s = t.sliceDoc(a.from, a.to);
    } else {
      let a = r.to - r.from;
      if (a < e.minSelectionLength || a > 200) return be.none;
      if (e.wholeWords) {
        if (s = t.sliceDoc(r.from, r.to), o = t.charCategorizer(r.head), !(gm(o, t, r.from, r.to) && FA(o, t, r.from, r.to))) return be.none;
      } else if (s = t.sliceDoc(r.from, r.to), !s) return be.none;
    }
    let l = [];
    for (let a of n.visibleRanges) {
      let f = new _o(t.doc, s, a.from, a.to);
      for (; !f.next().done; ) {
        let { from: h, to: p } = f.value;
        if ((!o || gm(o, t, h, p)) && (r.empty && h <= r.from && p >= r.to ? l.push(NA.range(h, p)) : (h >= r.to || p <= r.from) && l.push(IA.range(h, p)), l.length > e.maxMatches)) return be.none;
      }
    }
    return be.set(l);
  }
}, { decorations: (n) => n.decorations }), WA = he.baseTheme({ ".cm-selectionMatch": { backgroundColor: "#99ff7780" }, ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" } }), VA = ({ state: n, dispatch: e }) => {
  let { selection: t } = n, i = j.create(t.ranges.map((r) => n.wordAt(r.head) || j.cursor(r.head)), t.mainIndex);
  return i.eq(t) ? false : (e(n.update({ selection: i })), true);
};
function zA(n, e) {
  let { main: t, ranges: i } = n.selection, r = n.wordAt(t.head), s = r && r.from == t.from && r.to == t.to;
  for (let o = false, l = new _o(n.doc, e, i[i.length - 1].to); ; ) if (l.next(), l.done) {
    if (o) return null;
    l = new _o(n.doc, e, 0, Math.max(0, i[i.length - 1].from - 1)), o = true;
  } else {
    if (o && i.some((a) => a.from == l.value.from)) continue;
    if (s) {
      let a = n.wordAt(l.value.from);
      if (!a || a.from != l.value.from || a.to != l.value.to) continue;
    }
    return l.value;
  }
}
const KA = ({ state: n, dispatch: e }) => {
  let { ranges: t } = n.selection;
  if (t.some((s) => s.from === s.to)) return VA({ state: n, dispatch: e });
  let i = n.sliceDoc(t[0].from, t[0].to);
  if (n.selection.ranges.some((s) => n.sliceDoc(s.from, s.to) != i)) return false;
  let r = zA(n, i);
  return r ? (e(n.update({ selection: n.selection.addRange(j.range(r.from, r.to), false), effects: he.scrollIntoView(r.to) })), true) : false;
}, Ho = ve.define({ combine(n) {
  return Or(n, { top: false, caseSensitive: false, literal: false, regexp: false, wholeWord: false, createPanel: (e) => new iT(e), scrollToMatch: (e) => he.scrollIntoView(e) });
} });
class $d {
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || LA(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord, this.test = e.test;
  }
  unquote(e) {
    return this.literal ? e : e.replace(/\\([nrt\\])/g, (t, i) => i == "n" ? `
` : i == "r" ? "\r" : i == "t" ? "	" : "\\");
  }
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord && this.test == e.test;
  }
  create() {
    return this.regexp ? new YA(this) : new UA(this);
  }
  getCursor(e, t = 0, i) {
    let r = e.doc ? e : Ke.create({ doc: e });
    return i == null && (i = r.doc.length), this.regexp ? co(this, r, t, i) : ao(this, r, t, i);
  }
}
class pb {
  constructor(e) {
    this.spec = e;
  }
}
function $A(n, e, t) {
  return (i, r, s, o) => {
    if (t && !t(i, r, s, o)) return false;
    let l = i >= o && r <= o + s.length ? s.slice(i - o, r - o) : e.doc.sliceString(i, r);
    return n(l, e, i, r);
  };
}
function ao(n, e, t, i) {
  let r;
  return n.wholeWord && (r = jA(e.doc, e.charCategorizer(e.selection.main.head))), n.test && (r = $A(n.test, e, r)), new _o(e.doc, n.unquoted, t, i, n.caseSensitive ? void 0 : (s) => s.toLowerCase(), r);
}
function jA(n, e) {
  return (t, i, r, s) => ((s > t || s + r.length < i) && (s = Math.max(0, t - 2), r = n.sliceString(s, Math.min(n.length, i + 2))), (e(Uc(r, t - s)) != kt.Word || e(qc(r, t - s)) != kt.Word) && (e(qc(r, i - s)) != kt.Word || e(Uc(r, i - s)) != kt.Word));
}
class UA extends pb {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, i) {
    let r = ao(this.spec, e, i, e.doc.length).nextOverlapping();
    if (r.done) {
      let s = Math.min(e.doc.length, t + this.spec.unquoted.length);
      r = ao(this.spec, e, 0, s).nextOverlapping();
    }
    return r.done || r.value.from == t && r.value.to == i ? null : r.value;
  }
  prevMatchInRange(e, t, i) {
    for (let r = i; ; ) {
      let s = Math.max(t, r - 1e4 - this.spec.unquoted.length), o = ao(this.spec, e, s, r), l = null;
      for (; !o.nextOverlapping().done; ) l = o.value;
      if (l) return l;
      if (s == t) return null;
      r -= 1e4;
    }
  }
  prevMatch(e, t, i) {
    let r = this.prevMatchInRange(e, 0, t);
    return r || (r = this.prevMatchInRange(e, Math.max(0, i - this.spec.unquoted.length), e.doc.length)), r && (r.from != t || r.to != i) ? r : null;
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, t) {
    let i = ao(this.spec, e, 0, e.doc.length), r = [];
    for (; !i.next().done; ) {
      if (r.length >= t) return null;
      r.push(i.value);
    }
    return r;
  }
  highlight(e, t, i, r) {
    let s = ao(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(i + this.spec.unquoted.length, e.doc.length));
    for (; !s.next().done; ) r(s.value.from, s.value.to);
  }
}
function qA(n, e, t) {
  return (i, r, s) => (!t || t(i, r, s)) && n(s[0], e, i, r);
}
function co(n, e, t, i) {
  let r;
  return n.wholeWord && (r = GA(e.charCategorizer(e.selection.main.head))), n.test && (r = qA(n.test, e, r)), new Kd(e.doc, n.search, { ignoreCase: !n.caseSensitive, test: r }, t, i);
}
function Uc(n, e) {
  return n.slice(en(n, e, false), e);
}
function qc(n, e) {
  return n.slice(e, en(n, e));
}
function GA(n) {
  return (e, t, i) => !i[0].length || (n(Uc(i.input, i.index)) != kt.Word || n(qc(i.input, i.index)) != kt.Word) && (n(qc(i.input, i.index + i[0].length)) != kt.Word || n(Uc(i.input, i.index + i[0].length)) != kt.Word);
}
class YA extends pb {
  nextMatch(e, t, i) {
    let r = co(this.spec, e, i, e.doc.length).next();
    return r.done && (r = co(this.spec, e, 0, t).next()), r.done ? null : r.value;
  }
  prevMatchInRange(e, t, i) {
    for (let r = 1; ; r++) {
      let s = Math.max(t, i - r * 1e4), o = co(this.spec, e, s, i), l = null;
      for (; !o.next().done; ) l = o.value;
      if (l && (s == t || l.from > s + 10)) return l;
      if (s == t) return null;
    }
  }
  prevMatch(e, t, i) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, i, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (t, i) => {
      if (i == "&") return e.match[0];
      if (i == "$") return "$";
      for (let r = i.length; r > 0; r--) {
        let s = +i.slice(0, r);
        if (s > 0 && s < e.match.length) return e.match[s] + i.slice(r);
      }
      return t;
    });
  }
  matchAll(e, t) {
    let i = co(this.spec, e, 0, e.doc.length), r = [];
    for (; !i.next().done; ) {
      if (r.length >= t) return null;
      r.push(i.value);
    }
    return r;
  }
  highlight(e, t, i, r) {
    let s = co(this.spec, e, Math.max(0, t - 250), Math.min(i + 250, e.doc.length));
    for (; !s.next().done; ) r(s.value.from, s.value.to);
  }
}
const ts = Te.define(), jd = Te.define(), qr = tn.define({ create(n) {
  return new yh(Bu(n).create(), null);
}, update(n, e) {
  for (let t of e.effects) t.is(ts) ? n = new yh(t.value.create(), n.panel) : t.is(jd) && (n = new yh(n.query, t.value ? Ud : null));
  return n;
}, provide: (n) => Vs.from(n, (e) => e.panel) });
class yh {
  constructor(e, t) {
    this.query = e, this.panel = t;
  }
}
const JA = be.mark({ class: "cm-searchMatch" }), QA = be.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), XA = xt.fromClass(class {
  constructor(n) {
    this.view = n, this.decorations = this.highlight(n.state.field(qr));
  }
  update(n) {
    let e = n.state.field(qr);
    (e != n.startState.field(qr) || n.docChanged || n.selectionSet || n.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: n, panel: e }) {
    if (!e || !n.spec.valid) return be.none;
    let { view: t } = this, i = new Bi();
    for (let r = 0, s = t.visibleRanges, o = s.length; r < o; r++) {
      let { from: l, to: a } = s[r];
      for (; r < o - 1 && a > s[r + 1].from - 500; ) a = s[++r].to;
      n.highlight(t.state, l, a, (f, h) => {
        let p = t.state.selection.ranges.some((m) => m.from == f && m.to == h);
        i.add(f, h, p ? QA : JA);
      });
    }
    return i.finish();
  }
}, { decorations: (n) => n.decorations });
function pa(n) {
  return (e) => {
    let t = e.state.field(qr, false);
    return t && t.query.spec.valid ? n(e, t) : vb(e);
  };
}
const Gc = pa((n, { query: e }) => {
  let { to: t } = n.state.selection.main, i = e.nextMatch(n.state, t, t);
  if (!i) return false;
  let r = j.single(i.from, i.to), s = n.state.facet(Ho);
  return n.dispatch({ selection: r, effects: [qd(n, i), s.scrollToMatch(r.main, n)], userEvent: "select.search" }), mb(n), true;
}), Yc = pa((n, { query: e }) => {
  let { state: t } = n, { from: i } = t.selection.main, r = e.prevMatch(t, i, i);
  if (!r) return false;
  let s = j.single(r.from, r.to), o = n.state.facet(Ho);
  return n.dispatch({ selection: s, effects: [qd(n, r), o.scrollToMatch(s.main, n)], userEvent: "select.search" }), mb(n), true;
}), ZA = pa((n, { query: e }) => {
  let t = e.matchAll(n.state, 1e3);
  return !t || !t.length ? false : (n.dispatch({ selection: j.create(t.map((i) => j.range(i.from, i.to))), userEvent: "select.search.matches" }), true);
}), eT = ({ state: n, dispatch: e }) => {
  let t = n.selection;
  if (t.ranges.length > 1 || t.main.empty) return false;
  let { from: i, to: r } = t.main, s = [], o = 0;
  for (let l = new _o(n.doc, n.sliceDoc(i, r)); !l.next().done; ) {
    if (s.length > 1e3) return false;
    l.value.from == i && (o = s.length), s.push(j.range(l.value.from, l.value.to));
  }
  return e(n.update({ selection: j.create(s, o), userEvent: "select.search.matches" })), true;
}, mm = pa((n, { query: e }) => {
  let { state: t } = n, { from: i, to: r } = t.selection.main;
  if (t.readOnly) return false;
  let s = e.nextMatch(t, i, i);
  if (!s) return false;
  let o = s, l = [], a, f, h = [];
  o.from == i && o.to == r && (f = t.toText(e.getReplacement(o)), l.push({ from: o.from, to: o.to, insert: f }), o = e.nextMatch(t, o.from, o.to), h.push(he.announce.of(t.phrase("replaced match on line $", t.doc.lineAt(i).number) + ".")));
  let p = n.state.changes(l);
  return o && (a = j.single(o.from, o.to).map(p), h.push(qd(n, o)), h.push(t.facet(Ho).scrollToMatch(a.main, n))), n.dispatch({ changes: p, selection: a, effects: h, userEvent: "input.replace" }), true;
}), tT = pa((n, { query: e }) => {
  if (n.state.readOnly) return false;
  let t = e.matchAll(n.state, 1e9).map((r) => {
    let { from: s, to: o } = r;
    return { from: s, to: o, insert: e.getReplacement(r) };
  });
  if (!t.length) return false;
  let i = n.state.phrase("replaced $ matches", t.length) + ".";
  return n.dispatch({ changes: t, effects: he.announce.of(i), userEvent: "input.replace.all" }), true;
});
function Ud(n) {
  return n.state.facet(Ho).createPanel(n);
}
function Bu(n, e) {
  var t, i, r, s, o;
  let l = n.selection.main, a = l.empty || l.to > l.from + 100 ? "" : n.sliceDoc(l.from, l.to);
  if (e && !a) return e;
  let f = n.facet(Ho);
  return new $d({ search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : f.literal) ? a : a.replace(/\n/g, "\\n"), caseSensitive: (i = e == null ? void 0 : e.caseSensitive) !== null && i !== void 0 ? i : f.caseSensitive, literal: (r = e == null ? void 0 : e.literal) !== null && r !== void 0 ? r : f.literal, regexp: (s = e == null ? void 0 : e.regexp) !== null && s !== void 0 ? s : f.regexp, wholeWord: (o = e == null ? void 0 : e.wholeWord) !== null && o !== void 0 ? o : f.wholeWord });
}
function gb(n) {
  let e = _d(n, Ud);
  return e && e.dom.querySelector("[main-field]");
}
function mb(n) {
  let e = gb(n);
  e && e == n.root.activeElement && e.select();
}
const vb = (n) => {
  let e = n.state.field(qr, false);
  if (e && e.panel) {
    let t = gb(n);
    if (t && t != n.root.activeElement) {
      let i = Bu(n.state, e.query.spec);
      i.valid && n.dispatch({ effects: ts.of(i) }), t.focus(), t.select();
    }
  } else n.dispatch({ effects: [jd.of(true), e ? ts.of(Bu(n.state, e.query.spec)) : Te.appendConfig.of(sT)] });
  return true;
}, yb = (n) => {
  let e = n.state.field(qr, false);
  if (!e || !e.panel) return false;
  let t = _d(n, Ud);
  return t && t.dom.contains(n.root.activeElement) && n.focus(), n.dispatch({ effects: jd.of(false) }), true;
}, nT = [{ key: "Mod-f", run: vb, scope: "editor search-panel" }, { key: "F3", run: Gc, shift: Yc, scope: "editor search-panel", preventDefault: true }, { key: "Mod-g", run: Gc, shift: Yc, scope: "editor search-panel", preventDefault: true }, { key: "Escape", run: yb, scope: "editor search-panel" }, { key: "Mod-Shift-l", run: eT }, { key: "Mod-Alt-g", run: DA }, { key: "Mod-d", run: KA, preventDefault: true }];
class iT {
  constructor(e) {
    this.view = e;
    let t = this.query = e.state.field(qr).query.spec;
    this.commit = this.commit.bind(this), this.searchField = lt("input", { value: t.search, placeholder: Zn(e, "Find"), "aria-label": Zn(e, "Find"), class: "cm-textfield", name: "search", form: "", "main-field": "true", onchange: this.commit, onkeyup: this.commit }), this.replaceField = lt("input", { value: t.replace, placeholder: Zn(e, "Replace"), "aria-label": Zn(e, "Replace"), class: "cm-textfield", name: "replace", form: "", onchange: this.commit, onkeyup: this.commit }), this.caseField = lt("input", { type: "checkbox", name: "case", form: "", checked: t.caseSensitive, onchange: this.commit }), this.reField = lt("input", { type: "checkbox", name: "re", form: "", checked: t.regexp, onchange: this.commit }), this.wordField = lt("input", { type: "checkbox", name: "word", form: "", checked: t.wholeWord, onchange: this.commit });
    function i(r, s, o) {
      return lt("button", { class: "cm-button", name: r, onclick: s, type: "button" }, o);
    }
    this.dom = lt("div", { onkeydown: (r) => this.keydown(r), class: "cm-search" }, [this.searchField, i("next", () => Gc(e), [Zn(e, "next")]), i("prev", () => Yc(e), [Zn(e, "previous")]), i("select", () => ZA(e), [Zn(e, "all")]), lt("label", null, [this.caseField, Zn(e, "match case")]), lt("label", null, [this.reField, Zn(e, "regexp")]), lt("label", null, [this.wordField, Zn(e, "by word")]), ...e.state.readOnly ? [] : [lt("br"), this.replaceField, i("replace", () => mm(e), [Zn(e, "replace")]), i("replaceAll", () => tT(e), [Zn(e, "replace all")])], lt("button", { name: "close", onclick: () => yb(e), "aria-label": Zn(e, "close"), type: "button" }, ["\xD7"])]);
  }
  commit() {
    let e = new $d({ search: this.searchField.value, caseSensitive: this.caseField.checked, regexp: this.reField.checked, wholeWord: this.wordField.checked, replace: this.replaceField.value });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: ts.of(e) }));
  }
  keydown(e) {
    vs(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? Yc : Gc)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), mm(this.view));
  }
  update(e) {
    for (let t of e.transactions) for (let i of t.effects) i.is(ts) && !i.value.eq(this.query) && this.setQuery(i.value);
  }
  setQuery(e) {
    this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp, this.wordField.checked = e.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(Ho).top;
  }
}
function Zn(n, e) {
  return n.state.phrase(e);
}
const Qa = 30, Xa = /[\s\.,:;?!]/;
function qd(n, { from: e, to: t }) {
  let i = n.state.doc.lineAt(e), r = n.state.doc.lineAt(t).to, s = Math.max(i.from, e - Qa), o = Math.min(r, t + Qa), l = n.state.sliceDoc(s, o);
  if (s != i.from) {
    for (let a = 0; a < Qa; a++) if (!Xa.test(l[a + 1]) && Xa.test(l[a])) {
      l = l.slice(a);
      break;
    }
  }
  if (o != r) {
    for (let a = l.length - 1; a > l.length - Qa; a--) if (!Xa.test(l[a - 1]) && Xa.test(l[a])) {
      l = l.slice(0, a);
      break;
    }
  }
  return he.announce.of(`${n.state.phrase("current match")}. ${l} ${n.state.phrase("on line")} ${i.number}.`);
}
const rT = he.baseTheme({ ".cm-panel.cm-search": { padding: "2px 6px 4px", position: "relative", "& [name=close]": { position: "absolute", top: "0", right: "4px", backgroundColor: "inherit", border: "none", font: "inherit", padding: 0, margin: 0 }, "& input, & button, & label": { margin: ".2em .6em .2em 0" }, "& input[type=checkbox]": { marginRight: ".2em" }, "& label": { fontSize: "80%", whiteSpace: "pre" } }, "&light .cm-searchMatch": { backgroundColor: "#ffff0054" }, "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" }, "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" }, "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" } }), sT = [qr, Tr.low(XA), rT];
class bb {
  constructor(e, t, i, r) {
    this.state = e, this.pos = t, this.explicit = i, this.view = r, this.abortListeners = [], this.abortOnDocChange = false;
  }
  tokenBefore(e) {
    let t = vn(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; ) t = t.parent;
    return t ? { from: t.from, to: this.pos, text: this.state.sliceDoc(t.from, this.pos), type: t.type } : null;
  }
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos), i = Math.max(t.from, this.pos - 250), r = t.text.slice(i - t.from, this.pos - t.from), s = r.search(wb(e, false));
    return s < 0 ? null : { from: i + s, to: this.pos, text: r.slice(s) };
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(e, t, i) {
    e == "abort" && this.abortListeners && (this.abortListeners.push(t), i && i.onDocChange && (this.abortOnDocChange = true));
  }
}
function vm(n) {
  let e = Object.keys(n).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function oT(n) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: r } of n) {
    e[r[0]] = true;
    for (let s = 1; s < r.length; s++) t[r[s]] = true;
  }
  let i = vm(e) + vm(t) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function lT(n) {
  let e = n.map((r) => typeof r == "string" ? { label: r } : r), [t, i] = e.every((r) => /^\w+$/.test(r.label)) ? [/\w*$/, /\w+$/] : oT(e);
  return (r) => {
    let s = r.matchBefore(i);
    return s || r.explicit ? { from: s ? s.from : r.pos, options: e, validFor: t } : null;
  };
}
class ym {
  constructor(e, t, i, r) {
    this.completion = e, this.source = t, this.match = i, this.score = r;
  }
}
function Ls(n) {
  return n.selection.main.from;
}
function wb(n, e) {
  var t;
  let { source: i } = n, r = e && i[0] != "^", s = i[i.length - 1] != "$";
  return !r && !s ? n : new RegExp(`${r ? "^" : ""}(?:${i})${s ? "$" : ""}`, (t = n.flags) !== null && t !== void 0 ? t : n.ignoreCase ? "i" : "");
}
const xb = Er.define();
function aT(n, e, t, i) {
  let { main: r } = n.selection, s = t - r.from, o = i - r.from;
  return { ...n.changeByRange((l) => {
    if (l != r && t != i && n.sliceDoc(l.from + s, l.from + o) != n.sliceDoc(t, i)) return { range: l };
    let a = n.toText(e);
    return { changes: { from: l.from + s, to: i == r.from ? l.to : l.from + o, insert: a }, range: j.cursor(l.from + s + a.length) };
  }), scrollIntoView: true, userEvent: "input.complete" };
}
const bm = /* @__PURE__ */ new WeakMap();
function cT(n) {
  if (!Array.isArray(n)) return n;
  let e = bm.get(n);
  return e || bm.set(n, e = lT(n)), e;
}
const Jc = Te.define(), ta = Te.define();
class fT {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let i = Wn(e, t), r = rr(i);
      this.chars.push(i);
      let s = e.slice(t, t + r), o = s.toUpperCase();
      this.folded.push(Wn(o == s ? s.toLowerCase() : o, 0)), t += r;
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, t) {
    return this.score = e, this.matched = t, this;
  }
  match(e) {
    if (this.pattern.length == 0) return this.ret(-100, []);
    if (e.length < this.pattern.length) return null;
    let { chars: t, folded: i, any: r, precise: s, byWord: o } = this;
    if (t.length == 1) {
      let R = Wn(e, 0), I = rr(R), z = I == e.length ? 0 : -100;
      if (R != t[0]) if (R == i[0]) z += -200;
      else return null;
      return this.ret(z, [0, I]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0) return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length, f = 0;
    if (l < 0) {
      for (let R = 0, I = Math.min(e.length, 200); R < I && f < a; ) {
        let z = Wn(e, R);
        (z == t[f] || z == i[f]) && (r[f++] = R), R += rr(z);
      }
      if (f < a) return null;
    }
    let h = 0, p = 0, m = false, b = 0, x = -1, C = -1, E = /[a-z]/.test(e), D = true;
    for (let R = 0, I = Math.min(e.length, 200), z = 0; R < I && p < a; ) {
      let K = Wn(e, R);
      l < 0 && (h < a && K == t[h] && (s[h++] = R), b < a && (K == t[b] || K == i[b] ? (b == 0 && (x = R), C = R + 1, b++) : b = 0));
      let W, $ = K < 255 ? K >= 48 && K <= 57 || K >= 97 && K <= 122 ? 2 : K >= 65 && K <= 90 ? 1 : 0 : (W = dd(K)) != W.toLowerCase() ? 1 : W != W.toUpperCase() ? 2 : 0;
      (!R || $ == 1 && E || z == 0 && $ != 0) && (t[p] == K || i[p] == K && (m = true) ? o[p++] = R : o.length && (D = false)), z = $, R += rr(K);
    }
    return p == a && o[0] == 0 && D ? this.result(-100 + (m ? -200 : 0), o, e) : b == a && x == 0 ? this.ret(-200 - e.length + (C == e.length ? 0 : -100), [0, C]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : b == a ? this.ret(-900 - e.length, [x, C]) : p == a ? this.result(-100 + (m ? -200 : 0) + -700 + (D ? 0 : -1100), o, e) : t.length == 2 ? null : this.result((r[0] ? -700 : 0) + -200 + -1100, r, e);
  }
  result(e, t, i) {
    let r = [], s = 0;
    for (let o of t) {
      let l = o + (this.astral ? rr(Wn(i, o)) : 1);
      s && r[s - 1] == o ? r[s - 1] = l : (r[s++] = o, r[s++] = l);
    }
    return this.ret(e - i.length, r);
  }
}
class hT {
  constructor(e) {
    this.pattern = e, this.matched = [], this.score = 0, this.folded = e.toLowerCase();
  }
  match(e) {
    if (e.length < this.pattern.length) return null;
    let t = e.slice(0, this.pattern.length), i = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
    return i == null ? null : (this.matched = [0, t.length], this.score = i + (e.length == this.pattern.length ? 0 : -100), this);
  }
}
const Zt = ve.define({ combine(n) {
  return Or(n, { activateOnTyping: true, activateOnCompletion: () => false, activateOnTypingDelay: 100, selectOnOpen: true, override: null, closeOnBlur: true, maxRenderedOptions: 100, defaultKeymap: true, tooltipClass: () => "", optionClass: () => "", aboveCursor: false, icons: true, addToOptions: [], positionInfo: uT, filterStrict: false, compareCompletions: (e, t) => (e.sortText || e.label).localeCompare(t.sortText || t.label), interactionDelay: 75, updateSyncTime: 100 }, { defaultKeymap: (e, t) => e && t, closeOnBlur: (e, t) => e && t, icons: (e, t) => e && t, tooltipClass: (e, t) => (i) => wm(e(i), t(i)), optionClass: (e, t) => (i) => wm(e(i), t(i)), addToOptions: (e, t) => e.concat(t), filterStrict: (e, t) => e || t });
} });
function wm(n, e) {
  return n ? e ? n + " " + e : n : e;
}
function uT(n, e, t, i, r, s) {
  let o = n.textDirection == at.RTL, l = o, a = false, f = "top", h, p, m = e.left - r.left, b = r.right - e.right, x = i.right - i.left, C = i.bottom - i.top;
  if (l && m < Math.min(x, b) ? l = false : !l && b < Math.min(x, m) && (l = true), x <= (l ? m : b)) h = Math.max(r.top, Math.min(t.top, r.bottom - C)) - e.top, p = Math.min(400, l ? m : b);
  else {
    a = true, p = Math.min(400, (o ? e.right : r.right - e.left) - 30);
    let R = r.bottom - e.bottom;
    R >= C || R > e.top ? h = t.bottom - e.top : (f = "bottom", h = e.bottom - t.top);
  }
  let E = (e.bottom - e.top) / s.offsetHeight, D = (e.right - e.left) / s.offsetWidth;
  return { style: `${f}: ${h / E}px; max-width: ${p / D}px`, class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right") };
}
const Gd = Te.define();
function dT(n) {
  let e = n.addToOptions.slice();
  return n.icons && e.push({ render(t) {
    let i = document.createElement("div");
    return i.classList.add("cm-completionIcon"), t.type && i.classList.add(...t.type.split(/\s+/g).map((r) => "cm-completionIcon-" + r)), i.setAttribute("aria-hidden", "true"), i;
  }, position: 20 }), e.push({ render(t, i, r, s) {
    let o = document.createElement("span");
    o.className = "cm-completionLabel";
    let l = t.displayLabel || t.label, a = 0;
    for (let f = 0; f < s.length; ) {
      let h = s[f++], p = s[f++];
      h > a && o.appendChild(document.createTextNode(l.slice(a, h)));
      let m = o.appendChild(document.createElement("span"));
      m.appendChild(document.createTextNode(l.slice(h, p))), m.className = "cm-completionMatchedText", a = p;
    }
    return a < l.length && o.appendChild(document.createTextNode(l.slice(a))), o;
  }, position: 50 }, { render(t) {
    if (!t.detail) return null;
    let i = document.createElement("span");
    return i.className = "cm-completionDetail", i.textContent = t.detail, i;
  }, position: 80 }), e.sort((t, i) => t.position - i.position).map((t) => t.render);
}
function bh(n, e, t) {
  if (n <= t) return { from: 0, to: n };
  if (e < 0 && (e = 0), e <= n >> 1) {
    let r = Math.floor(e / t);
    return { from: r * t, to: (r + 1) * t };
  }
  let i = Math.floor((n - e) / t);
  return { from: n - (i + 1) * t, to: n - i * t };
}
class pT {
  constructor(e, t, i) {
    this.view = e, this.stateField = t, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = { read: () => this.measureInfo(), write: (a) => this.placeInfo(a), key: this }, this.space = null, this.currentClass = "";
    let r = e.state.field(t), { options: s, selected: o } = r.open, l = e.state.facet(Zt);
    this.optionContent = dT(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = bh(s.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: f } = e.state.field(t).open;
      for (let h = a.target, p; h && h != this.dom; h = h.parentNode) if (h.nodeName == "LI" && (p = /-(\d+)$/.exec(h.id)) && +p[1] < f.length) {
        this.applyCompletion(e, f[+p[1]]), a.preventDefault();
        return;
      }
      if (a.target == this.list) {
        let h = this.list.classList.contains("cm-completionListIncompleteTop") && a.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && a.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
        h != null && (e.dispatch({ effects: Gd.of(h) }), a.preventDefault());
      }
    }), this.dom.addEventListener("focusout", (a) => {
      let f = e.state.field(this.stateField, false);
      f && f.tooltip && e.state.facet(Zt).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: ta.of(null) });
    }), this.showOptions(s, r.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(e, t) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(e, t, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(e) {
    var t;
    let i = e.state.field(this.stateField), r = e.startState.field(this.stateField);
    if (this.updateTooltipClass(e.state), i != r) {
      let { options: s, selected: o, disabled: l } = i.open;
      (!r.open || r.open.options != s) && (this.range = bh(s.length, o, e.state.facet(Zt).maxRenderedOptions), this.showOptions(s, i.id)), this.updateSel(), l != ((t = r.open) === null || t === void 0 ? void 0 : t.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
    }
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let i of this.currentClass.split(" ")) i && this.dom.classList.remove(i);
      for (let i of t.split(" ")) i && this.dom.classList.add(i);
      this.currentClass = t;
    }
  }
  positioned(e) {
    this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField), t = e.open;
    (t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = bh(t.options.length, t.selected, this.view.state.facet(Zt).maxRenderedOptions), this.showOptions(t.options, e.id));
    let i = this.updateSelectedOption(t.selected);
    if (i) {
      this.destroyInfo();
      let { completion: r } = t.options[t.selected], { info: s } = r;
      if (!s) return;
      let o = typeof s == "string" ? document.createTextNode(s) : s(r);
      if (!o) return;
      "then" in o ? o.then((l) => {
        l && this.view.state.field(this.stateField, false) == e && this.addInfoPane(l, r);
      }).catch((l) => Dn(this.view.state, l, "completion info")) : (this.addInfoPane(o, r), i.setAttribute("aria-describedby", this.info.id));
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let i = this.info = document.createElement("div");
    if (i.className = "cm-tooltip cm-completionInfo", i.id = "cm-completionInfo-" + Math.floor(Math.random() * 65535).toString(16), e.nodeType != null) i.appendChild(e), this.infoDestroy = null;
    else {
      let { dom: r, destroy: s } = e;
      i.appendChild(r), this.infoDestroy = s || null;
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let i = this.list.firstChild, r = this.range.from; i; i = i.nextSibling, r++) i.nodeName != "LI" || !i.id ? r-- : r == e ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), t = i) : i.hasAttribute("aria-selected") && (i.removeAttribute("aria-selected"), i.removeAttribute("aria-describedby"));
    return t && mT(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info) return null;
    let t = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), r = e.getBoundingClientRect(), s = this.space;
    if (!s) {
      let o = this.dom.ownerDocument.documentElement;
      s = { left: 0, top: 0, right: o.clientWidth, bottom: o.clientHeight };
    }
    return r.top > Math.min(s.bottom, t.bottom) - 10 || r.bottom < Math.max(s.top, t.top) + 10 ? null : this.view.state.facet(Zt).positionInfo(this.view, t, r, i, s, this.dom);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(e, t, i) {
    const r = document.createElement("ul");
    r.id = t, r.setAttribute("role", "listbox"), r.setAttribute("aria-expanded", "true"), r.setAttribute("aria-label", this.view.state.phrase("Completions")), r.addEventListener("mousedown", (o) => {
      o.target == r && o.preventDefault();
    });
    let s = null;
    for (let o = i.from; o < i.to; o++) {
      let { completion: l, match: a } = e[o], { section: f } = l;
      if (f) {
        let m = typeof f == "string" ? f : f.name;
        if (m != s && (o > i.from || i.from == 0)) if (s = m, typeof f != "string" && f.header) r.appendChild(f.header(f));
        else {
          let b = r.appendChild(document.createElement("completion-section"));
          b.textContent = m;
        }
      }
      const h = r.appendChild(document.createElement("li"));
      h.id = t + "-" + o, h.setAttribute("role", "option");
      let p = this.optionClass(l);
      p && (h.className = p);
      for (let m of this.optionContent) {
        let b = m(l, this.view.state, this.view, a);
        b && h.appendChild(b);
      }
    }
    return i.from && r.classList.add("cm-completionListIncompleteTop"), i.to < e.length && r.classList.add("cm-completionListIncompleteBottom"), r;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function gT(n, e) {
  return (t) => new pT(t, n, e);
}
function mT(n, e) {
  let t = n.getBoundingClientRect(), i = e.getBoundingClientRect(), r = t.height / n.offsetHeight;
  i.top < t.top ? n.scrollTop -= (t.top - i.top) / r : i.bottom > t.bottom && (n.scrollTop += (i.bottom - t.bottom) / r);
}
function xm(n) {
  return (n.boost || 0) * 100 + (n.apply ? 10 : 0) + (n.info ? 5 : 0) + (n.type ? 1 : 0);
}
function vT(n, e) {
  let t = [], i = null, r = null, s = (h) => {
    t.push(h);
    let { section: p } = h.completion;
    if (p) {
      i || (i = []);
      let m = typeof p == "string" ? p : p.name;
      i.some((b) => b.name == m) || i.push(typeof p == "string" ? { name: m } : p);
    }
  }, o = e.facet(Zt);
  for (let h of n) if (h.hasResult()) {
    let p = h.result.getMatch;
    if (h.result.filter === false) for (let m of h.result.options) s(new ym(m, h.source, p ? p(m) : [], 1e9 - t.length));
    else {
      let m = e.sliceDoc(h.from, h.to), b, x = o.filterStrict ? new hT(m) : new fT(m);
      for (let C of h.result.options) if (b = x.match(C.label)) {
        let E = C.displayLabel ? p ? p(C, b.matched) : [] : b.matched, D = b.score + (C.boost || 0);
        if (s(new ym(C, h.source, E, D)), typeof C.section == "object" && C.section.rank === "dynamic") {
          let { name: R } = C.section;
          r || (r = /* @__PURE__ */ Object.create(null)), r[R] = Math.max(D, r[R] || -1e9);
        }
      }
    }
  }
  if (i) {
    let h = /* @__PURE__ */ Object.create(null), p = 0, m = (b, x) => (b.rank === "dynamic" && x.rank === "dynamic" ? r[x.name] - r[b.name] : 0) || (typeof b.rank == "number" ? b.rank : 1e9) - (typeof x.rank == "number" ? x.rank : 1e9) || (b.name < x.name ? -1 : 1);
    for (let b of i.sort(m)) p -= 1e5, h[b.name] = p;
    for (let b of t) {
      let { section: x } = b.completion;
      x && (b.score += h[typeof x == "string" ? x : x.name]);
    }
  }
  let l = [], a = null, f = o.compareCompletions;
  for (let h of t.sort((p, m) => m.score - p.score || f(p.completion, m.completion))) {
    let p = h.completion;
    !a || a.label != p.label || a.detail != p.detail || a.type != null && p.type != null && a.type != p.type || a.apply != p.apply || a.boost != p.boost ? l.push(h) : xm(h.completion) > xm(a) && (l[l.length - 1] = h), a = h.completion;
  }
  return l;
}
class po {
  constructor(e, t, i, r, s, o) {
    this.options = e, this.attrs = t, this.tooltip = i, this.timestamp = r, this.selected = s, this.disabled = o;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new po(this.options, km(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, i, r, s, o) {
    if (r && !o && e.some((f) => f.isPending)) return r.setDisabled();
    let l = vT(e, t);
    if (!l.length) return r && e.some((f) => f.isPending) ? r.setDisabled() : null;
    let a = t.facet(Zt).selectOnOpen ? 0 : -1;
    if (r && r.selected != a && r.selected != -1) {
      let f = r.options[r.selected].completion;
      for (let h = 0; h < l.length; h++) if (l[h].completion == f) {
        a = h;
        break;
      }
    }
    return new po(l, km(i, a), { pos: e.reduce((f, h) => h.hasResult() ? Math.min(f, h.from) : f, 1e8), create: ST, above: s.aboveCursor }, r ? r.timestamp : Date.now(), a, false);
  }
  map(e) {
    return new po(this.options, this.attrs, { ...this.tooltip, pos: e.mapPos(this.tooltip.pos) }, this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new po(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, true);
  }
}
class Qc {
  constructor(e, t, i) {
    this.active = e, this.id = t, this.open = i;
  }
  static start() {
    return new Qc(xT, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, i = t.facet(Zt), s = (i.override || t.languageDataAt("autocomplete", Ls(t)).map(cT)).map((a) => (this.active.find((h) => h.source == a) || new vi(a, this.active.some((h) => h.state != 0) ? 1 : 0)).update(e, i));
    s.length == this.active.length && s.every((a, f) => a == this.active[f]) && (s = this.active);
    let o = this.open, l = e.effects.some((a) => a.is(Yd));
    o && e.docChanged && (o = o.map(e.changes)), e.selection || s.some((a) => a.hasResult() && e.changes.touchesRange(a.from, a.to)) || !yT(s, this.active) || l ? o = po.build(s, t, this.id, o, i, l) : o && o.disabled && !s.some((a) => a.isPending) && (o = null), !o && s.every((a) => !a.isPending) && s.some((a) => a.hasResult()) && (s = s.map((a) => a.hasResult() ? new vi(a.source, 0) : a));
    for (let a of e.effects) a.is(Gd) && (o = o && o.setSelected(a.value, this.id));
    return s == this.active && o == this.open ? this : new Qc(s, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? bT : wT;
  }
}
function yT(n, e) {
  if (n == e) return true;
  for (let t = 0, i = 0; ; ) {
    for (; t < n.length && !n[t].hasResult(); ) t++;
    for (; i < e.length && !e[i].hasResult(); ) i++;
    let r = t == n.length, s = i == e.length;
    if (r || s) return r == s;
    if (n[t++].result != e[i++].result) return false;
  }
}
const bT = { "aria-autocomplete": "list" }, wT = {};
function km(n, e) {
  let t = { "aria-autocomplete": "list", "aria-haspopup": "listbox", "aria-controls": n };
  return e > -1 && (t["aria-activedescendant"] = n + "-" + e), t;
}
const xT = [];
function kb(n, e) {
  if (n.isUserEvent("input.complete")) {
    let i = n.annotation(xb);
    if (i && e.activateOnCompletion(i)) return 12;
  }
  let t = n.isUserEvent("input.type");
  return t && e.activateOnTyping ? 5 : t ? 1 : n.isUserEvent("delete.backward") ? 2 : n.selection ? 8 : n.docChanged ? 16 : 0;
}
class vi {
  constructor(e, t, i = false) {
    this.source = e, this.state = t, this.explicit = i;
  }
  hasResult() {
    return false;
  }
  get isPending() {
    return this.state == 1;
  }
  update(e, t) {
    let i = kb(e, t), r = this;
    (i & 8 || i & 16 && this.touches(e)) && (r = new vi(r.source, 0)), i & 4 && r.state == 0 && (r = new vi(this.source, 1)), r = r.updateFor(e, i);
    for (let s of e.effects) if (s.is(Jc)) r = new vi(r.source, 1, s.value);
    else if (s.is(ta)) r = new vi(r.source, 0);
    else if (s.is(Yd)) for (let o of s.value) o.source == r.source && (r = o);
    return r;
  }
  updateFor(e, t) {
    return this.map(e.changes);
  }
  map(e) {
    return this;
  }
  touches(e) {
    return e.changes.touchesRange(Ls(e.state));
  }
}
class wo extends vi {
  constructor(e, t, i, r, s, o) {
    super(e, 3, t), this.limit = i, this.result = r, this.from = s, this.to = o;
  }
  hasResult() {
    return true;
  }
  updateFor(e, t) {
    var i;
    if (!(t & 3)) return this.map(e.changes);
    let r = this.result;
    r.map && !e.changes.empty && (r = r.map(r, e.changes));
    let s = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = Ls(e.state);
    if (l > o || !r || t & 2 && (Ls(e.startState) == this.from || l < this.limit)) return new vi(this.source, t & 4 ? 1 : 0);
    let a = e.changes.mapPos(this.limit);
    return kT(r.validFor, e.state, s, o) ? new wo(this.source, this.explicit, a, r, s, o) : r.update && (r = r.update(r, s, o, new bb(e.state, l, false))) ? new wo(this.source, this.explicit, a, r, r.from, (i = r.to) !== null && i !== void 0 ? i : Ls(e.state)) : new vi(this.source, 1, this.explicit);
  }
  map(e) {
    return e.empty ? this : (this.result.map ? this.result.map(this.result, e) : this.result) ? new wo(this.source, this.explicit, e.mapPos(this.limit), this.result, e.mapPos(this.from), e.mapPos(this.to, 1)) : new vi(this.source, 0);
  }
  touches(e) {
    return e.changes.touchesRange(this.from, this.to);
  }
}
function kT(n, e, t, i) {
  if (!n) return false;
  let r = e.sliceDoc(t, i);
  return typeof n == "function" ? n(r, t, i, e) : wb(n, true).test(r);
}
const Yd = Te.define({ map(n, e) {
  return n.map((t) => t.map(e));
} }), Vn = tn.define({ create() {
  return Qc.start();
}, update(n, e) {
  return n.update(e);
}, provide: (n) => [gf.from(n, (e) => e.tooltip), he.contentAttributes.from(n, (e) => e.attrs)] });
function Jd(n, e) {
  const t = e.completion.apply || e.completion.label;
  let i = n.state.field(Vn).active.find((r) => r.source == e.source);
  return i instanceof wo ? (typeof t == "string" ? n.dispatch({ ...aT(n.state, t, i.from, i.to), annotations: xb.of(e.completion) }) : t(n, e.completion, i.from, i.to), true) : false;
}
const ST = gT(Vn, Jd);
function Za(n, e = "option") {
  return (t) => {
    let i = t.state.field(Vn, false);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < t.state.facet(Zt).interactionDelay) return false;
    let r = 1, s;
    e == "page" && (s = ly(t, i.open.tooltip)) && (r = Math.max(2, Math.floor(s.dom.offsetHeight / s.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = i.open.options, l = i.open.selected > -1 ? i.open.selected + r * (n ? 1 : -1) : n ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), t.dispatch({ effects: Gd.of(l) }), true;
  };
}
const CT = (n) => {
  let e = n.state.field(Vn, false);
  return n.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < n.state.facet(Zt).interactionDelay ? false : Jd(n, e.open.options[e.open.selected]);
}, wh = (n) => n.state.field(Vn, false) ? (n.dispatch({ effects: Jc.of(true) }), true) : false, MT = (n) => {
  let e = n.state.field(Vn, false);
  return !e || !e.active.some((t) => t.state != 0) ? false : (n.dispatch({ effects: ta.of(null) }), true);
};
class AT {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const TT = 50, ET = 1e3, OT = xt.fromClass(class {
  constructor(n) {
    this.view = n, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = false, this.composing = 0;
    for (let e of n.state.field(Vn).active) e.isPending && this.startQuery(e);
  }
  update(n) {
    let e = n.state.field(Vn), t = n.state.facet(Zt);
    if (!n.selectionSet && !n.docChanged && n.startState.field(Vn) == e) return;
    let i = n.transactions.some((s) => {
      let o = kb(s, t);
      return o & 8 || (s.selection || s.docChanged) && !(o & 3);
    });
    for (let s = 0; s < this.running.length; s++) {
      let o = this.running[s];
      if (i || o.context.abortOnDocChange && n.docChanged || o.updates.length + n.transactions.length > TT && Date.now() - o.time > ET) {
        for (let l of o.context.abortListeners) try {
          l();
        } catch (a) {
          Dn(this.view.state, a);
        }
        o.context.abortListeners = null, this.running.splice(s--, 1);
      } else o.updates.push(...n.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), n.transactions.some((s) => s.effects.some((o) => o.is(Jc))) && (this.pendingStart = true);
    let r = this.pendingStart ? 50 : t.activateOnTypingDelay;
    if (this.debounceUpdate = e.active.some((s) => s.isPending && !this.running.some((o) => o.active.source == s.source)) ? setTimeout(() => this.startUpdate(), r) : -1, this.composing != 0) for (let s of n.transactions) s.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && s.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = false;
    let { state: n } = this.view, e = n.field(Vn);
    for (let t of e.active) t.isPending && !this.running.some((i) => i.active.source == t.source) && this.startQuery(t);
    this.running.length && e.open && e.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(Zt).updateSyncTime));
  }
  startQuery(n) {
    let { state: e } = this.view, t = Ls(e), i = new bb(e, t, n.explicit, this.view), r = new AT(n, i);
    this.running.push(r), Promise.resolve(n.source(i)).then((s) => {
      r.context.aborted || (r.done = s || null, this.scheduleAccept());
    }, (s) => {
      this.view.dispatch({ effects: ta.of(null) }), Dn(this.view.state, s);
    });
  }
  scheduleAccept() {
    this.running.every((n) => n.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(Zt).updateSyncTime));
  }
  accept() {
    var n;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], t = this.view.state.facet(Zt), i = this.view.state.field(Vn);
    for (let r = 0; r < this.running.length; r++) {
      let s = this.running[r];
      if (s.done === void 0) continue;
      if (this.running.splice(r--, 1), s.done) {
        let l = Ls(s.updates.length ? s.updates[0].startState : this.view.state), a = Math.min(l, s.done.from + (s.active.explicit ? 0 : 1)), f = new wo(s.active.source, s.active.explicit, a, s.done, s.done.from, (n = s.done.to) !== null && n !== void 0 ? n : l);
        for (let h of s.updates) f = f.update(h, t);
        if (f.hasResult()) {
          e.push(f);
          continue;
        }
      }
      let o = i.active.find((l) => l.source == s.active.source);
      if (o && o.isPending) if (s.done == null) {
        let l = new vi(s.active.source, 0);
        for (let a of s.updates) l = l.update(a, t);
        l.isPending || e.push(l);
      } else this.startQuery(o);
    }
    (e.length || i.open && i.open.disabled) && this.view.dispatch({ effects: Yd.of(e) });
  }
}, { eventHandlers: { blur(n) {
  let e = this.view.state.field(Vn, false);
  if (e && e.tooltip && this.view.state.facet(Zt).closeOnBlur) {
    let t = e.open && ly(this.view, e.open.tooltip);
    (!t || !t.dom.contains(n.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: ta.of(null) }), 10);
  }
}, compositionstart() {
  this.composing = 1;
}, compositionend() {
  this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Jc.of(false) }), 20), this.composing = 0;
} } }), _T = typeof navigator == "object" && /Win/.test(navigator.platform), LT = Tr.highest(he.domEventHandlers({ keydown(n, e) {
  let t = e.state.field(Vn, false);
  if (!t || !t.open || t.open.disabled || t.open.selected < 0 || n.key.length > 1 || n.ctrlKey && !(_T && n.altKey) || n.metaKey) return false;
  let i = t.open.options[t.open.selected], r = t.active.find((o) => o.source == i.source), s = i.completion.commitCharacters || r.result.commitCharacters;
  return s && s.indexOf(n.key) > -1 && Jd(e, i), false;
} })), DT = he.baseTheme({ ".cm-tooltip.cm-tooltip-autocomplete": { "& > ul": { fontFamily: "monospace", whiteSpace: "nowrap", overflow: "hidden auto", maxWidth_fallback: "700px", maxWidth: "min(700px, 95vw)", minWidth: "250px", maxHeight: "10em", height: "100%", listStyle: "none", margin: 0, padding: 0, "& > li, & > completion-section": { padding: "1px 3px", lineHeight: 1.2 }, "& > li": { overflowX: "hidden", textOverflow: "ellipsis", cursor: "pointer" }, "& > completion-section": { display: "list-item", borderBottom: "1px solid silver", paddingLeft: "0.5em", opacity: 0.7 } } }, "&light .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#17c", color: "white" }, "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#777" }, "&dark .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#347", color: "white" }, "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#444" }, ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": { content: '"\xB7\xB7\xB7"', opacity: 0.5, display: "block", textAlign: "center" }, ".cm-tooltip.cm-completionInfo": { position: "absolute", padding: "3px 9px", width: "max-content", maxWidth: "400px", boxSizing: "border-box", whiteSpace: "pre-line" }, ".cm-completionInfo.cm-completionInfo-left": { right: "100%" }, ".cm-completionInfo.cm-completionInfo-right": { left: "100%" }, ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" }, ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" }, "&light .cm-snippetField": { backgroundColor: "#00000022" }, "&dark .cm-snippetField": { backgroundColor: "#ffffff22" }, ".cm-snippetFieldPosition": { verticalAlign: "text-top", width: 0, height: "1.15em", display: "inline-block", margin: "0 -0.7px -.7em", borderLeft: "1.4px dotted #888" }, ".cm-completionMatchedText": { textDecoration: "underline" }, ".cm-completionDetail": { marginLeft: "0.5em", fontStyle: "italic" }, ".cm-completionIcon": { fontSize: "90%", width: ".8em", display: "inline-block", textAlign: "center", paddingRight: ".6em", opacity: "0.6", boxSizing: "content-box" }, ".cm-completionIcon-function, .cm-completionIcon-method": { "&:after": { content: "'\u0192'" } }, ".cm-completionIcon-class": { "&:after": { content: "'\u25CB'" } }, ".cm-completionIcon-interface": { "&:after": { content: "'\u25CC'" } }, ".cm-completionIcon-variable": { "&:after": { content: "'\u{1D465}'" } }, ".cm-completionIcon-constant": { "&:after": { content: "'\u{1D436}'" } }, ".cm-completionIcon-type": { "&:after": { content: "'\u{1D461}'" } }, ".cm-completionIcon-enum": { "&:after": { content: "'\u222A'" } }, ".cm-completionIcon-property": { "&:after": { content: "'\u25A1'" } }, ".cm-completionIcon-keyword": { "&:after": { content: "'\u{1F511}\uFE0E'" } }, ".cm-completionIcon-namespace": { "&:after": { content: "'\u25A2'" } }, ".cm-completionIcon-text": { "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" } } }), na = { brackets: ["(", "[", "{", "'", '"'], before: ")]}:;>", stringPrefixes: [] }, Ts = Te.define({ map(n, e) {
  let t = e.mapPos(n, -1, an.TrackAfter);
  return t ?? void 0;
} }), Qd = new class extends Gr {
}();
Qd.startSide = 1;
Qd.endSide = -1;
const Sb = tn.define({ create() {
  return He.empty;
}, update(n, e) {
  if (n = n.map(e.changes), e.selection) {
    let t = e.state.doc.lineAt(e.selection.main.head);
    n = n.update({ filter: (i) => i >= t.from && i <= t.to });
  }
  for (let t of e.effects) t.is(Ts) && (n = n.update({ add: [Qd.range(t.value, t.value + 1)] }));
  return n;
} });
function RT() {
  return [PT, Sb];
}
const xh = "()[]{}<>\xAB\xBB\xBB\xAB\uFF3B\uFF3D\uFF5B\uFF5D";
function Cb(n) {
  for (let e = 0; e < xh.length; e += 2) if (xh.charCodeAt(e) == n) return xh.charAt(e + 1);
  return dd(n < 128 ? n : n + 1);
}
function Mb(n, e) {
  return n.languageDataAt("closeBrackets", e)[0] || na;
}
const BT = typeof navigator == "object" && /Android\b/.test(navigator.userAgent), PT = he.inputHandler.of((n, e, t, i) => {
  if ((BT ? n.composing : n.compositionStarted) || n.state.readOnly) return false;
  let r = n.state.selection.main;
  if (i.length > 2 || i.length == 2 && rr(Wn(i, 0)) == 1 || e != r.from || t != r.to) return false;
  let s = FT(n.state, i);
  return s ? (n.dispatch(s), true) : false;
}), IT = ({ state: n, dispatch: e }) => {
  if (n.readOnly) return false;
  let i = Mb(n, n.selection.main.head).brackets || na.brackets, r = null, s = n.changeByRange((o) => {
    if (o.empty) {
      let l = HT(n.doc, o.head);
      for (let a of i) if (a == l && Sf(n.doc, o.head) == Cb(Wn(a, 0))) return { changes: { from: o.head - a.length, to: o.head + a.length }, range: j.cursor(o.head - a.length) };
    }
    return { range: r = o };
  });
  return r || e(n.update(s, { scrollIntoView: true, userEvent: "delete.backward" })), !r;
}, NT = [{ key: "Backspace", run: IT }];
function FT(n, e) {
  let t = Mb(n, n.selection.main.head), i = t.brackets || na.brackets;
  for (let r of i) {
    let s = Cb(Wn(r, 0));
    if (e == r) return s == r ? zT(n, r, i.indexOf(r + r + r) > -1, t) : WT(n, r, s, t.before || na.before);
    if (e == s && Ab(n, n.selection.main.from)) return VT(n, r, s);
  }
  return null;
}
function Ab(n, e) {
  let t = false;
  return n.field(Sb).between(0, n.doc.length, (i) => {
    i == e && (t = true);
  }), t;
}
function Sf(n, e) {
  let t = n.sliceString(e, e + 2);
  return t.slice(0, rr(Wn(t, 0)));
}
function HT(n, e) {
  let t = n.sliceString(e - 2, e);
  return rr(Wn(t, 0)) == t.length ? t : t.slice(1);
}
function WT(n, e, t, i) {
  let r = null, s = n.changeByRange((o) => {
    if (!o.empty) return { changes: [{ insert: e, from: o.from }, { insert: t, from: o.to }], effects: Ts.of(o.to + e.length), range: j.range(o.anchor + e.length, o.head + e.length) };
    let l = Sf(n.doc, o.head);
    return !l || /\s/.test(l) || i.indexOf(l) > -1 ? { changes: { insert: e + t, from: o.head }, effects: Ts.of(o.head + e.length), range: j.cursor(o.head + e.length) } : { range: r = o };
  });
  return r ? null : n.update(s, { scrollIntoView: true, userEvent: "input.type" });
}
function VT(n, e, t) {
  let i = null, r = n.changeByRange((s) => s.empty && Sf(n.doc, s.head) == t ? { changes: { from: s.head, to: s.head + t.length, insert: t }, range: j.cursor(s.head + t.length) } : i = { range: s });
  return i ? null : n.update(r, { scrollIntoView: true, userEvent: "input.type" });
}
function zT(n, e, t, i) {
  let r = i.stringPrefixes || na.stringPrefixes, s = null, o = n.changeByRange((l) => {
    if (!l.empty) return { changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }], effects: Ts.of(l.to + e.length), range: j.range(l.anchor + e.length, l.head + e.length) };
    let a = l.head, f = Sf(n.doc, a), h;
    if (f == e) {
      if (Sm(n, a)) return { changes: { insert: e + e, from: a }, effects: Ts.of(a + e.length), range: j.cursor(a + e.length) };
      if (Ab(n, a)) {
        let m = t && n.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
        return { changes: { from: a, to: a + m.length, insert: m }, range: j.cursor(a + m.length) };
      }
    } else {
      if (t && n.sliceDoc(a - 2 * e.length, a) == e + e && (h = Cm(n, a - 2 * e.length, r)) > -1 && Sm(n, h)) return { changes: { insert: e + e + e + e, from: a }, effects: Ts.of(a + e.length), range: j.cursor(a + e.length) };
      if (n.charCategorizer(a)(f) != kt.Word && Cm(n, a, r) > -1 && !KT(n, a, e, r)) return { changes: { insert: e + e, from: a }, effects: Ts.of(a + e.length), range: j.cursor(a + e.length) };
    }
    return { range: s = l };
  });
  return s ? null : n.update(o, { scrollIntoView: true, userEvent: "input.type" });
}
function Sm(n, e) {
  let t = vn(n).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function KT(n, e, t, i) {
  let r = vn(n).resolveInner(e, -1), s = i.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = n.sliceDoc(r.from, Math.min(r.to, r.from + t.length + s)), a = l.indexOf(t);
    if (!a || a > -1 && i.indexOf(l.slice(0, a)) > -1) {
      let h = r.firstChild;
      for (; h && h.from == r.from && h.to - h.from > t.length + a; ) {
        if (n.sliceDoc(h.to - t.length, h.to) == t) return false;
        h = h.firstChild;
      }
      return true;
    }
    let f = r.to == e && r.parent;
    if (!f) break;
    r = f;
  }
  return false;
}
function Cm(n, e, t) {
  let i = n.charCategorizer(e);
  if (i(n.sliceDoc(e - 1, e)) != kt.Word) return e;
  for (let r of t) {
    let s = e - r.length;
    if (n.sliceDoc(s, e) == r && i(n.sliceDoc(s - 1, s)) != kt.Word) return s;
  }
  return -1;
}
function Xd(n = {}) {
  return [LT, Vn, Zt.of(n), OT, $T, DT];
}
const Tb = [{ key: "Ctrl-Space", run: wh }, { mac: "Alt-`", run: wh }, { mac: "Alt-i", run: wh }, { key: "Escape", run: MT }, { key: "ArrowDown", run: Za(true) }, { key: "ArrowUp", run: Za(false) }, { key: "PageDown", run: Za(true, "page") }, { key: "PageUp", run: Za(false, "page") }, { key: "Enter", run: CT }], $T = Tr.highest(pf.computeN([Zt], (n) => n.facet(Zt).defaultKeymap ? [Tb] : []));
class Mm {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.diagnostic = i;
  }
}
class Ss {
  constructor(e, t, i) {
    this.diagnostics = e, this.panel = t, this.selected = i;
  }
  static init(e, t, i) {
    let r = i.facet(ar).markerFilter;
    r && (e = r(e, i));
    let s = e.slice().sort((b, x) => b.from - x.from || b.to - x.to), o = new Bi(), l = [], a = 0, f = i.doc.iter(), h = 0, p = i.doc.length;
    for (let b = 0; ; ) {
      let x = b == s.length ? null : s[b];
      if (!x && !l.length) break;
      let C, E;
      if (l.length) C = a, E = l.reduce((I, z) => Math.min(I, z.to), x && x.from > C ? x.from : 1e8);
      else {
        if (C = x.from, C > p) break;
        E = x.to, l.push(x), b++;
      }
      for (; b < s.length; ) {
        let I = s[b];
        if (I.from == C && (I.to > I.from || I.to == C)) l.push(I), b++, E = Math.min(I.to, E);
        else {
          E = Math.min(I.from, E);
          break;
        }
      }
      E = Math.min(E, p);
      let D = false;
      if (l.some((I) => I.from == C && (I.to == E || E == p)) && (D = C == E, !D && E - C < 10)) {
        let I = C - (h + f.value.length);
        I > 0 && (f.next(I), h = C);
        for (let z = C; ; ) {
          if (z >= E) {
            D = true;
            break;
          }
          if (!f.lineBreak && h + f.value.length > z) break;
          z = h + f.value.length, h += f.value.length, f.next();
        }
      }
      let R = oE(l);
      if (D) o.add(C, C, be.widget({ widget: new nE(R), diagnostics: l.slice() }));
      else {
        let I = l.reduce((z, K) => K.markClass ? z + " " + K.markClass : z, "");
        o.add(C, E, be.mark({ class: "cm-lintRange cm-lintRange-" + R + I, diagnostics: l.slice(), inclusiveEnd: l.some((z) => z.to > E) }));
      }
      if (a = E, a == p) break;
      for (let I = 0; I < l.length; I++) l[I].to <= a && l.splice(I--, 1);
    }
    let m = o.finish();
    return new Ss(m, t, ns(m));
  }
}
function ns(n, e = null, t = 0) {
  let i = null;
  return n.between(t, 1e9, (r, s, { spec: o }) => {
    if (!(e && o.diagnostics.indexOf(e) < 0)) if (!i) i = new Mm(r, s, e || o.diagnostics[0]);
    else {
      if (o.diagnostics.indexOf(i.diagnostic) < 0) return false;
      i = new Mm(i.from, s, i.diagnostic);
    }
  }), i;
}
function jT(n, e) {
  let t = e.pos, i = e.end || t, r = n.state.facet(ar).hideOn(n, t, i);
  if (r != null) return r;
  let s = n.startState.doc.lineAt(e.pos);
  return !!(n.effects.some((o) => o.is(Zd)) || n.changes.touchesRange(s.from, Math.max(s.to, i)));
}
function Eb(n, e) {
  return n.field(ii, false) ? e : e.concat(Te.appendConfig.of(Db));
}
function UT(n, e) {
  return { effects: Eb(n, [Zd.of(e)]) };
}
const Zd = Te.define(), ep = Te.define(), Ob = Te.define(), ii = tn.define({ create() {
  return new Ss(be.none, null, null);
}, update(n, e) {
  if (e.docChanged && n.diagnostics.size) {
    let t = n.diagnostics.map(e.changes), i = null, r = n.panel;
    if (n.selected) {
      let s = e.changes.mapPos(n.selected.from, 1);
      i = ns(t, n.selected.diagnostic, s) || ns(t, null, s);
    }
    !t.size && r && e.state.facet(ar).autoPanel && (r = null), n = new Ss(t, r, i);
  }
  for (let t of e.effects) if (t.is(Zd)) {
    let i = e.state.facet(ar).autoPanel ? t.value.length ? ia.open : null : n.panel;
    n = Ss.init(t.value, i, e.state);
  } else t.is(ep) ? n = new Ss(n.diagnostics, t.value ? ia.open : null, n.selected) : t.is(Ob) && (n = new Ss(n.diagnostics, n.panel, t.value));
  return n;
}, provide: (n) => [Vs.from(n, (e) => e.panel), he.decorations.from(n, (e) => e.diagnostics)] }), qT = be.mark({ class: "cm-lintRange cm-lintRange-active" });
function GT(n, e, t) {
  let { diagnostics: i } = n.state.field(ii), r, s = -1, o = -1;
  i.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, f, { spec: h }) => {
    if (e >= a && e <= f && (a == f || (e > a || t > 0) && (e < f || t < 0))) return r = h.diagnostics, s = a, o = f, false;
  });
  let l = n.state.facet(ar).tooltipFilter;
  return r && l && (r = l(r, n.state)), r ? { pos: s, end: o, above: n.state.doc.lineAt(s).to < o, create() {
    return { dom: YT(n, r) };
  } } : null;
}
function YT(n, e) {
  return lt("ul", { class: "cm-tooltip-lint" }, e.map((t) => Lb(n, t, false)));
}
const JT = (n) => {
  let e = n.state.field(ii, false);
  (!e || !e.panel) && n.dispatch({ effects: Eb(n.state, [ep.of(true)]) });
  let t = _d(n, ia.open);
  return t && t.dom.querySelector(".cm-panel-lint ul").focus(), true;
}, Am = (n) => {
  let e = n.state.field(ii, false);
  return !e || !e.panel ? false : (n.dispatch({ effects: ep.of(false) }), true);
}, QT = (n) => {
  let e = n.state.field(ii, false);
  if (!e) return false;
  let t = n.state.selection.main, i = ns(e.diagnostics, null, t.to + 1);
  return !i && (i = ns(e.diagnostics, null, 0), !i || i.from == t.from && i.to == t.to) ? false : (n.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: true }), true);
}, XT = [{ key: "Mod-Shift-m", run: JT, preventDefault: true }, { key: "F8", run: QT }], ZT = xt.fromClass(class {
  constructor(n) {
    this.view = n, this.timeout = -1, this.set = true;
    let { delay: e } = n.state.facet(ar);
    this.lintTime = Date.now() + e, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, e);
  }
  run() {
    clearTimeout(this.timeout);
    let n = Date.now();
    if (n < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - n);
    else {
      this.set = false;
      let { state: e } = this.view, { sources: t } = e.facet(ar);
      t.length && eE(t.map((i) => Promise.resolve(i(this.view))), (i) => {
        this.view.state.doc == e.doc && this.view.dispatch(UT(this.view.state, i.reduce((r, s) => r.concat(s))));
      }, (i) => {
        Dn(this.view.state, i);
      });
    }
  }
  update(n) {
    let e = n.state.facet(ar);
    (n.docChanged || e != n.startState.facet(ar) || e.needsRefresh && e.needsRefresh(n)) && (this.lintTime = Date.now() + e.delay, this.set || (this.set = true, this.timeout = setTimeout(this.run, e.delay)));
  }
  force() {
    this.set && (this.lintTime = Date.now(), this.run());
  }
  destroy() {
    clearTimeout(this.timeout);
  }
});
function eE(n, e, t) {
  let i = [], r = -1;
  for (let s of n) s.then((o) => {
    i.push(o), clearTimeout(r), i.length == n.length ? e(i) : r = setTimeout(() => e(i), 200);
  }, t);
}
const ar = ve.define({ combine(n) {
  return { sources: n.map((e) => e.source).filter((e) => e != null), ...Or(n.map((e) => e.config), { delay: 750, markerFilter: null, tooltipFilter: null, needsRefresh: null, hideOn: () => null }, { delay: Math.max, markerFilter: Tm, tooltipFilter: Tm, needsRefresh: (e, t) => e ? t ? (i) => e(i) || t(i) : e : t, hideOn: (e, t) => e ? t ? (i, r, s) => e(i, r, s) || t(i, r, s) : e : t, autoPanel: (e, t) => e || t }) };
} });
function Tm(n, e) {
  return n ? e ? (t, i) => e(n(t, i), i) : n : e;
}
function tE(n, e = {}) {
  return [ar.of({ source: n, config: e }), ZT, Db];
}
function _b(n) {
  let e = [];
  if (n) e: for (let { name: t } of n) {
    for (let i = 0; i < t.length; i++) {
      let r = t[i];
      if (/[a-zA-Z]/.test(r) && !e.some((s) => s.toLowerCase() == r.toLowerCase())) {
        e.push(r);
        continue e;
      }
    }
    e.push("");
  }
  return e;
}
function Lb(n, e, t) {
  var i;
  let r = t ? _b(e.actions) : [];
  return lt("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, lt("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage(n) : e.message), (i = e.actions) === null || i === void 0 ? void 0 : i.map((s, o) => {
    let l = false, a = (b) => {
      if (b.preventDefault(), l) return;
      l = true;
      let x = ns(n.state.field(ii).diagnostics, e);
      x && s.apply(n, x.from, x.to);
    }, { name: f } = s, h = r[o] ? f.indexOf(r[o]) : -1, p = h < 0 ? f : [f.slice(0, h), lt("u", f.slice(h, h + 1)), f.slice(h + 1)], m = s.markClass ? " " + s.markClass : "";
    return lt("button", { type: "button", class: "cm-diagnosticAction" + m, onclick: a, onmousedown: a, "aria-label": ` Action: ${f}${h < 0 ? "" : ` (access key "${r[o]})"`}.` }, p);
  }), e.source && lt("div", { class: "cm-diagnosticSource" }, e.source));
}
class nE extends wi {
  constructor(e) {
    super(), this.sev = e;
  }
  eq(e) {
    return e.sev == this.sev;
  }
  toDOM() {
    return lt("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
  }
}
class Em {
  constructor(e, t) {
    this.diagnostic = t, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = Lb(e, t, true), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class ia {
  constructor(e) {
    this.view = e, this.items = [];
    let t = (r) => {
      if (!(r.ctrlKey || r.altKey || r.metaKey)) {
        if (r.keyCode == 27) Am(this.view), this.view.focus();
        else if (r.keyCode == 38 || r.keyCode == 33) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
        else if (r.keyCode == 40 || r.keyCode == 34) this.moveSelection((this.selectedIndex + 1) % this.items.length);
        else if (r.keyCode == 36) this.moveSelection(0);
        else if (r.keyCode == 35) this.moveSelection(this.items.length - 1);
        else if (r.keyCode == 13) this.view.focus();
        else if (r.keyCode >= 65 && r.keyCode <= 90 && this.selectedIndex >= 0) {
          let { diagnostic: s } = this.items[this.selectedIndex], o = _b(s.actions);
          for (let l = 0; l < o.length; l++) if (o[l].toUpperCase().charCodeAt(0) == r.keyCode) {
            let a = ns(this.view.state.field(ii).diagnostics, s);
            a && s.actions[l].apply(e, a.from, a.to);
          }
        } else return;
        r.preventDefault();
      }
    }, i = (r) => {
      for (let s = 0; s < this.items.length; s++) this.items[s].dom.contains(r.target) && this.moveSelection(s);
    };
    this.list = lt("ul", { tabIndex: 0, role: "listbox", "aria-label": this.view.state.phrase("Diagnostics"), onkeydown: t, onclick: i }), this.dom = lt("div", { class: "cm-panel-lint" }, this.list, lt("button", { type: "button", name: "close", "aria-label": this.view.state.phrase("close"), onclick: () => Am(this.view) }, "\xD7")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(ii).selected;
    if (!e) return -1;
    for (let t = 0; t < this.items.length; t++) if (this.items[t].diagnostic == e.diagnostic) return t;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(ii), i = 0, r = false, s = null, o = /* @__PURE__ */ new Set();
    for (e.between(0, this.view.state.doc.length, (l, a, { spec: f }) => {
      for (let h of f.diagnostics) {
        if (o.has(h)) continue;
        o.add(h);
        let p = -1, m;
        for (let b = i; b < this.items.length; b++) if (this.items[b].diagnostic == h) {
          p = b;
          break;
        }
        p < 0 ? (m = new Em(this.view, h), this.items.splice(i, 0, m), r = true) : (m = this.items[p], p > i && (this.items.splice(i, p - i), r = true)), t && m.diagnostic == t.diagnostic ? m.dom.hasAttribute("aria-selected") || (m.dom.setAttribute("aria-selected", "true"), s = m) : m.dom.hasAttribute("aria-selected") && m.dom.removeAttribute("aria-selected"), i++;
      }
    }); i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); ) r = true, this.items.pop();
    this.items.length == 0 && (this.items.push(new Em(this.view, { from: -1, to: -1, severity: "info", message: this.view.state.phrase("No diagnostics") })), r = true), s ? (this.list.setAttribute("aria-activedescendant", s.id), this.view.requestMeasure({ key: this, read: () => ({ sel: s.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }), write: ({ sel: l, panel: a }) => {
      let f = a.height / this.list.offsetHeight;
      l.top < a.top ? this.list.scrollTop -= (a.top - l.top) / f : l.bottom > a.bottom && (this.list.scrollTop += (l.bottom - a.bottom) / f);
    } })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), r && this.sync();
  }
  sync() {
    let e = this.list.firstChild;
    function t() {
      let i = e;
      e = i.nextSibling, i.remove();
    }
    for (let i of this.items) if (i.dom.parentNode == this.list) {
      for (; e != i.dom; ) t();
      e = i.dom.nextSibling;
    } else this.list.insertBefore(i.dom, e);
    for (; e; ) t();
  }
  moveSelection(e) {
    if (this.selectedIndex < 0) return;
    let t = this.view.state.field(ii), i = ns(t.diagnostics, this.items[e].diagnostic);
    i && this.view.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: true, effects: Ob.of(i) });
  }
  static open(e) {
    return new ia(e);
  }
}
function iE(n, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(n)}</svg>')`;
}
function ec(n) {
  return iE(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${n}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const rE = he.baseTheme({ ".cm-diagnostic": { padding: "3px 6px 3px 8px", marginLeft: "-1px", display: "block", whiteSpace: "pre-wrap" }, ".cm-diagnostic-error": { borderLeft: "5px solid #d11" }, ".cm-diagnostic-warning": { borderLeft: "5px solid orange" }, ".cm-diagnostic-info": { borderLeft: "5px solid #999" }, ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" }, ".cm-diagnosticAction": { font: "inherit", border: "none", padding: "2px 4px", backgroundColor: "#444", color: "white", borderRadius: "3px", marginLeft: "8px", cursor: "pointer" }, ".cm-diagnosticSource": { fontSize: "70%", opacity: 0.7 }, ".cm-lintRange": { backgroundPosition: "left bottom", backgroundRepeat: "repeat-x", paddingBottom: "0.7px" }, ".cm-lintRange-error": { backgroundImage: ec("#d11") }, ".cm-lintRange-warning": { backgroundImage: ec("orange") }, ".cm-lintRange-info": { backgroundImage: ec("#999") }, ".cm-lintRange-hint": { backgroundImage: ec("#66d") }, ".cm-lintRange-active": { backgroundColor: "#ffdd9980" }, ".cm-tooltip-lint": { padding: 0, margin: 0 }, ".cm-lintPoint": { position: "relative", "&:after": { content: '""', position: "absolute", bottom: 0, left: "-2px", borderLeft: "3px solid transparent", borderRight: "3px solid transparent", borderBottom: "4px solid #d11" } }, ".cm-lintPoint-warning": { "&:after": { borderBottomColor: "orange" } }, ".cm-lintPoint-info": { "&:after": { borderBottomColor: "#999" } }, ".cm-lintPoint-hint": { "&:after": { borderBottomColor: "#66d" } }, ".cm-panel.cm-panel-lint": { position: "relative", "& ul": { maxHeight: "100px", overflowY: "auto", "& [aria-selected]": { backgroundColor: "#ddd", "& u": { textDecoration: "underline" } }, "&:focus [aria-selected]": { background_fallback: "#bdf", backgroundColor: "Highlight", color_fallback: "white", color: "HighlightText" }, "& u": { textDecoration: "none" }, padding: 0, margin: 0 }, "& [name=close]": { position: "absolute", top: "0", right: "2px", background: "inherit", border: "none", font: "inherit", padding: 0, margin: 0 } }, "&dark .cm-lintRange-active": { backgroundColor: "#86714a80" }, "&dark .cm-panel.cm-panel-lint ul": { "& [aria-selected]": { backgroundColor: "#2e343e" } } });
function sE(n) {
  return n == "error" ? 4 : n == "warning" ? 3 : n == "info" ? 2 : 1;
}
function oE(n) {
  let e = "hint", t = 1;
  for (let i of n) {
    let r = sE(i.severity);
    r > t && (t = r, e = i.severity);
  }
  return e;
}
const Db = [ii, he.decorations.compute([ii], (n) => {
  let { selected: e, panel: t } = n.field(ii);
  return !e || !t || e.from == e.to ? be.none : be.set([qT.range(e.from, e.to)]);
}), oy(GT, { hideOn: jT }), rE], lE = "#e5c07b", Om = "#e06c75", aE = "#56b6c2", cE = "#ffffff", wc = "#abb2bf", Pu = "#7d8799", fE = "#61afef", hE = "#98c379", _m = "#d19a66", uE = "#c678dd", dE = "#21252b", Lm = "#2c313a", Dm = "#282c34", kh = "#353a42", pE = "#3E4451", Rm = "#528bff", gE = he.theme({ "&": { color: wc, backgroundColor: Dm }, ".cm-content": { caretColor: Rm }, ".cm-cursor, .cm-dropCursor": { borderLeftColor: Rm }, "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: pE }, ".cm-panels": { backgroundColor: dE, color: wc }, ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" }, ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" }, ".cm-searchMatch": { backgroundColor: "#72a1ff59", outline: "1px solid #457dff" }, ".cm-searchMatch.cm-searchMatch-selected": { backgroundColor: "#6199ff2f" }, ".cm-activeLine": { backgroundColor: "#6699ff0b" }, ".cm-selectionMatch": { backgroundColor: "#aafe661a" }, "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bad0f847" }, ".cm-gutters": { backgroundColor: Dm, color: Pu, border: "none" }, ".cm-activeLineGutter": { backgroundColor: Lm }, ".cm-foldPlaceholder": { backgroundColor: "transparent", border: "none", color: "#ddd" }, ".cm-tooltip": { border: "none", backgroundColor: kh }, ".cm-tooltip .cm-tooltip-arrow:before": { borderTopColor: "transparent", borderBottomColor: "transparent" }, ".cm-tooltip .cm-tooltip-arrow:after": { borderTopColor: kh, borderBottomColor: kh }, ".cm-tooltip-autocomplete": { "& > ul > li[aria-selected]": { backgroundColor: Lm, color: wc } } }, { dark: true }), mE = ua.define([{ tag: q.keyword, color: uE }, { tag: [q.name, q.deleted, q.character, q.propertyName, q.macroName], color: Om }, { tag: [q.function(q.variableName), q.labelName], color: fE }, { tag: [q.color, q.constant(q.name), q.standard(q.name)], color: _m }, { tag: [q.definition(q.name), q.separator], color: wc }, { tag: [q.typeName, q.className, q.number, q.changed, q.annotation, q.modifier, q.self, q.namespace], color: lE }, { tag: [q.operator, q.operatorKeyword, q.url, q.escape, q.regexp, q.link, q.special(q.string)], color: aE }, { tag: [q.meta, q.comment], color: Pu }, { tag: q.strong, fontWeight: "bold" }, { tag: q.emphasis, fontStyle: "italic" }, { tag: q.strikethrough, textDecoration: "line-through" }, { tag: q.link, color: Pu, textDecoration: "underline" }, { tag: q.heading, fontWeight: "bold", color: Om }, { tag: [q.atom, q.bool, q.special(q.variableName)], color: _m }, { tag: [q.processingInstruction, q.string, q.inserted], color: hE }, { tag: q.invalid, color: cE }]), vE = [gE, Oy(mE)];
function yE(n) {
  var e = n.Pos;
  function t(c, u, d) {
    if (u.line === d.line && u.ch >= d.ch - 1) {
      var g = c.getLine(u.line), v = g.charCodeAt(u.ch);
      55296 <= v && v <= 55551 && (d.ch += 1);
    }
    return { start: u, end: d };
  }
  var i = [{ keys: "<Left>", type: "keyToKey", toKeys: "h" }, { keys: "<Right>", type: "keyToKey", toKeys: "l" }, { keys: "<Up>", type: "keyToKey", toKeys: "k" }, { keys: "<Down>", type: "keyToKey", toKeys: "j" }, { keys: "g<Up>", type: "keyToKey", toKeys: "gk" }, { keys: "g<Down>", type: "keyToKey", toKeys: "gj" }, { keys: "<Space>", type: "keyToKey", toKeys: "l" }, { keys: "<BS>", type: "keyToKey", toKeys: "h" }, { keys: "<Del>", type: "keyToKey", toKeys: "x" }, { keys: "<C-Space>", type: "keyToKey", toKeys: "W" }, { keys: "<C-BS>", type: "keyToKey", toKeys: "B" }, { keys: "<S-Space>", type: "keyToKey", toKeys: "w" }, { keys: "<S-BS>", type: "keyToKey", toKeys: "b" }, { keys: "<C-n>", type: "keyToKey", toKeys: "j" }, { keys: "<C-p>", type: "keyToKey", toKeys: "k" }, { keys: "<C-[>", type: "keyToKey", toKeys: "<Esc>" }, { keys: "<C-c>", type: "keyToKey", toKeys: "<Esc>" }, { keys: "<C-[>", type: "keyToKey", toKeys: "<Esc>", context: "insert" }, { keys: "<C-c>", type: "keyToKey", toKeys: "<Esc>", context: "insert" }, { keys: "<C-Esc>", type: "keyToKey", toKeys: "<Esc>" }, { keys: "<C-Esc>", type: "keyToKey", toKeys: "<Esc>", context: "insert" }, { keys: "s", type: "keyToKey", toKeys: "cl", context: "normal" }, { keys: "s", type: "keyToKey", toKeys: "c", context: "visual" }, { keys: "S", type: "keyToKey", toKeys: "cc", context: "normal" }, { keys: "S", type: "keyToKey", toKeys: "VdO", context: "visual" }, { keys: "<Home>", type: "keyToKey", toKeys: "0" }, { keys: "<End>", type: "keyToKey", toKeys: "$" }, { keys: "<PageUp>", type: "keyToKey", toKeys: "<C-b>" }, { keys: "<PageDown>", type: "keyToKey", toKeys: "<C-f>" }, { keys: "<CR>", type: "keyToKey", toKeys: "j^", context: "normal" }, { keys: "<Ins>", type: "keyToKey", toKeys: "i", context: "normal" }, { keys: "<Ins>", type: "action", action: "toggleOverwrite", context: "insert" }, { keys: "H", type: "motion", motion: "moveToTopLine", motionArgs: { linewise: true, toJumplist: true } }, { keys: "M", type: "motion", motion: "moveToMiddleLine", motionArgs: { linewise: true, toJumplist: true } }, { keys: "L", type: "motion", motion: "moveToBottomLine", motionArgs: { linewise: true, toJumplist: true } }, { keys: "h", type: "motion", motion: "moveByCharacters", motionArgs: { forward: false } }, { keys: "l", type: "motion", motion: "moveByCharacters", motionArgs: { forward: true } }, { keys: "j", type: "motion", motion: "moveByLines", motionArgs: { forward: true, linewise: true } }, { keys: "k", type: "motion", motion: "moveByLines", motionArgs: { forward: false, linewise: true } }, { keys: "gj", type: "motion", motion: "moveByDisplayLines", motionArgs: { forward: true } }, { keys: "gk", type: "motion", motion: "moveByDisplayLines", motionArgs: { forward: false } }, { keys: "w", type: "motion", motion: "moveByWords", motionArgs: { forward: true, wordEnd: false } }, { keys: "W", type: "motion", motion: "moveByWords", motionArgs: { forward: true, wordEnd: false, bigWord: true } }, { keys: "e", type: "motion", motion: "moveByWords", motionArgs: { forward: true, wordEnd: true, inclusive: true } }, { keys: "E", type: "motion", motion: "moveByWords", motionArgs: { forward: true, wordEnd: true, bigWord: true, inclusive: true } }, { keys: "b", type: "motion", motion: "moveByWords", motionArgs: { forward: false, wordEnd: false } }, { keys: "B", type: "motion", motion: "moveByWords", motionArgs: { forward: false, wordEnd: false, bigWord: true } }, { keys: "ge", type: "motion", motion: "moveByWords", motionArgs: { forward: false, wordEnd: true, inclusive: true } }, { keys: "gE", type: "motion", motion: "moveByWords", motionArgs: { forward: false, wordEnd: true, bigWord: true, inclusive: true } }, { keys: "{", type: "motion", motion: "moveByParagraph", motionArgs: { forward: false, toJumplist: true } }, { keys: "}", type: "motion", motion: "moveByParagraph", motionArgs: { forward: true, toJumplist: true } }, { keys: "(", type: "motion", motion: "moveBySentence", motionArgs: { forward: false } }, { keys: ")", type: "motion", motion: "moveBySentence", motionArgs: { forward: true } }, { keys: "<C-f>", type: "motion", motion: "moveByPage", motionArgs: { forward: true } }, { keys: "<C-b>", type: "motion", motion: "moveByPage", motionArgs: { forward: false } }, { keys: "<C-d>", type: "motion", motion: "moveByScroll", motionArgs: { forward: true, explicitRepeat: true } }, { keys: "<C-u>", type: "motion", motion: "moveByScroll", motionArgs: { forward: false, explicitRepeat: true } }, { keys: "gg", type: "motion", motion: "moveToLineOrEdgeOfDocument", motionArgs: { forward: false, explicitRepeat: true, linewise: true, toJumplist: true } }, { keys: "G", type: "motion", motion: "moveToLineOrEdgeOfDocument", motionArgs: { forward: true, explicitRepeat: true, linewise: true, toJumplist: true } }, { keys: "g$", type: "motion", motion: "moveToEndOfDisplayLine" }, { keys: "g^", type: "motion", motion: "moveToStartOfDisplayLine" }, { keys: "g0", type: "motion", motion: "moveToStartOfDisplayLine" }, { keys: "0", type: "motion", motion: "moveToStartOfLine" }, { keys: "^", type: "motion", motion: "moveToFirstNonWhiteSpaceCharacter" }, { keys: "+", type: "motion", motion: "moveByLines", motionArgs: { forward: true, toFirstChar: true } }, { keys: "-", type: "motion", motion: "moveByLines", motionArgs: { forward: false, toFirstChar: true } }, { keys: "_", type: "motion", motion: "moveByLines", motionArgs: { forward: true, toFirstChar: true, repeatOffset: -1 } }, { keys: "$", type: "motion", motion: "moveToEol", motionArgs: { inclusive: true } }, { keys: "%", type: "motion", motion: "moveToMatchedSymbol", motionArgs: { inclusive: true, toJumplist: true } }, { keys: "f<character>", type: "motion", motion: "moveToCharacter", motionArgs: { forward: true, inclusive: true } }, { keys: "F<character>", type: "motion", motion: "moveToCharacter", motionArgs: { forward: false } }, { keys: "t<character>", type: "motion", motion: "moveTillCharacter", motionArgs: { forward: true, inclusive: true } }, { keys: "T<character>", type: "motion", motion: "moveTillCharacter", motionArgs: { forward: false } }, { keys: ";", type: "motion", motion: "repeatLastCharacterSearch", motionArgs: { forward: true } }, { keys: ",", type: "motion", motion: "repeatLastCharacterSearch", motionArgs: { forward: false } }, { keys: "'<register>", type: "motion", motion: "goToMark", motionArgs: { toJumplist: true, linewise: true } }, { keys: "`<register>", type: "motion", motion: "goToMark", motionArgs: { toJumplist: true } }, { keys: "]`", type: "motion", motion: "jumpToMark", motionArgs: { forward: true } }, { keys: "[`", type: "motion", motion: "jumpToMark", motionArgs: { forward: false } }, { keys: "]'", type: "motion", motion: "jumpToMark", motionArgs: { forward: true, linewise: true } }, { keys: "['", type: "motion", motion: "jumpToMark", motionArgs: { forward: false, linewise: true } }, { keys: "]p", type: "action", action: "paste", isEdit: true, actionArgs: { after: true, isEdit: true, matchIndent: true } }, { keys: "[p", type: "action", action: "paste", isEdit: true, actionArgs: { after: false, isEdit: true, matchIndent: true } }, { keys: "]<character>", type: "motion", motion: "moveToSymbol", motionArgs: { forward: true, toJumplist: true } }, { keys: "[<character>", type: "motion", motion: "moveToSymbol", motionArgs: { forward: false, toJumplist: true } }, { keys: "|", type: "motion", motion: "moveToColumn" }, { keys: "o", type: "motion", motion: "moveToOtherHighlightedEnd", context: "visual" }, { keys: "O", type: "motion", motion: "moveToOtherHighlightedEnd", motionArgs: { sameLine: true }, context: "visual" }, { keys: "d", type: "operator", operator: "delete" }, { keys: "y", type: "operator", operator: "yank" }, { keys: "c", type: "operator", operator: "change" }, { keys: "=", type: "operator", operator: "indentAuto" }, { keys: ">", type: "operator", operator: "indent", operatorArgs: { indentRight: true } }, { keys: "<", type: "operator", operator: "indent", operatorArgs: { indentRight: false } }, { keys: "g~", type: "operator", operator: "changeCase" }, { keys: "gu", type: "operator", operator: "changeCase", operatorArgs: { toLower: true }, isEdit: true }, { keys: "gU", type: "operator", operator: "changeCase", operatorArgs: { toLower: false }, isEdit: true }, { keys: "n", type: "motion", motion: "findNext", motionArgs: { forward: true, toJumplist: true } }, { keys: "N", type: "motion", motion: "findNext", motionArgs: { forward: false, toJumplist: true } }, { keys: "gn", type: "motion", motion: "findAndSelectNextInclusive", motionArgs: { forward: true } }, { keys: "gN", type: "motion", motion: "findAndSelectNextInclusive", motionArgs: { forward: false } }, { keys: "gq", type: "operator", operator: "hardWrap" }, { keys: "gw", type: "operator", operator: "hardWrap", operatorArgs: { keepCursor: true } }, { keys: "g?", type: "operator", operator: "rot13" }, { keys: "x", type: "operatorMotion", operator: "delete", motion: "moveByCharacters", motionArgs: { forward: true }, operatorMotionArgs: { visualLine: false } }, { keys: "X", type: "operatorMotion", operator: "delete", motion: "moveByCharacters", motionArgs: { forward: false }, operatorMotionArgs: { visualLine: true } }, { keys: "D", type: "operatorMotion", operator: "delete", motion: "moveToEol", motionArgs: { inclusive: true }, context: "normal" }, { keys: "D", type: "operator", operator: "delete", operatorArgs: { linewise: true }, context: "visual" }, { keys: "Y", type: "operatorMotion", operator: "yank", motion: "expandToLine", motionArgs: { linewise: true }, context: "normal" }, { keys: "Y", type: "operator", operator: "yank", operatorArgs: { linewise: true }, context: "visual" }, { keys: "C", type: "operatorMotion", operator: "change", motion: "moveToEol", motionArgs: { inclusive: true }, context: "normal" }, { keys: "C", type: "operator", operator: "change", operatorArgs: { linewise: true }, context: "visual" }, { keys: "~", type: "operatorMotion", operator: "changeCase", motion: "moveByCharacters", motionArgs: { forward: true }, operatorArgs: { shouldMoveCursor: true }, context: "normal" }, { keys: "~", type: "operator", operator: "changeCase", context: "visual" }, { keys: "<C-u>", type: "operatorMotion", operator: "delete", motion: "moveToStartOfLine", context: "insert" }, { keys: "<C-w>", type: "operatorMotion", operator: "delete", motion: "moveByWords", motionArgs: { forward: false, wordEnd: false }, context: "insert" }, { keys: "<C-w>", type: "idle", context: "normal" }, { keys: "<C-i>", type: "action", action: "jumpListWalk", actionArgs: { forward: true } }, { keys: "<C-o>", type: "action", action: "jumpListWalk", actionArgs: { forward: false } }, { keys: "<C-e>", type: "action", action: "scroll", actionArgs: { forward: true, linewise: true } }, { keys: "<C-y>", type: "action", action: "scroll", actionArgs: { forward: false, linewise: true } }, { keys: "a", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "charAfter" }, context: "normal" }, { keys: "A", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "eol" }, context: "normal" }, { keys: "A", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "endOfSelectedArea" }, context: "visual" }, { keys: "i", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "inplace" }, context: "normal" }, { keys: "gi", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "lastEdit" }, context: "normal" }, { keys: "I", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "firstNonBlank" }, context: "normal" }, { keys: "gI", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "bol" }, context: "normal" }, { keys: "I", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "startOfSelectedArea" }, context: "visual" }, { keys: "o", type: "action", action: "newLineAndEnterInsertMode", isEdit: true, interlaceInsertRepeat: true, actionArgs: { after: true }, context: "normal" }, { keys: "O", type: "action", action: "newLineAndEnterInsertMode", isEdit: true, interlaceInsertRepeat: true, actionArgs: { after: false }, context: "normal" }, { keys: "v", type: "action", action: "toggleVisualMode" }, { keys: "V", type: "action", action: "toggleVisualMode", actionArgs: { linewise: true } }, { keys: "<C-v>", type: "action", action: "toggleVisualMode", actionArgs: { blockwise: true } }, { keys: "<C-q>", type: "action", action: "toggleVisualMode", actionArgs: { blockwise: true } }, { keys: "gv", type: "action", action: "reselectLastSelection" }, { keys: "J", type: "action", action: "joinLines", isEdit: true }, { keys: "gJ", type: "action", action: "joinLines", actionArgs: { keepSpaces: true }, isEdit: true }, { keys: "p", type: "action", action: "paste", isEdit: true, actionArgs: { after: true, isEdit: true } }, { keys: "P", type: "action", action: "paste", isEdit: true, actionArgs: { after: false, isEdit: true } }, { keys: "r<character>", type: "action", action: "replace", isEdit: true }, { keys: "@<register>", type: "action", action: "replayMacro" }, { keys: "q<register>", type: "action", action: "enterMacroRecordMode" }, { keys: "R", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { replace: true }, context: "normal" }, { keys: "R", type: "operator", operator: "change", operatorArgs: { linewise: true, fullLine: true }, context: "visual", exitVisualBlock: true }, { keys: "u", type: "action", action: "undo", context: "normal" }, { keys: "u", type: "operator", operator: "changeCase", operatorArgs: { toLower: true }, context: "visual", isEdit: true }, { keys: "U", type: "operator", operator: "changeCase", operatorArgs: { toLower: false }, context: "visual", isEdit: true }, { keys: "<C-r>", type: "action", action: "redo" }, { keys: "m<register>", type: "action", action: "setMark" }, { keys: '"<register>', type: "action", action: "setRegister" }, { keys: "<C-r><register>", type: "action", action: "insertRegister", context: "insert", isEdit: true }, { keys: "<C-o>", type: "action", action: "oneNormalCommand", context: "insert" }, { keys: "zz", type: "action", action: "scrollToCursor", actionArgs: { position: "center" } }, { keys: "z.", type: "action", action: "scrollToCursor", actionArgs: { position: "center" }, motion: "moveToFirstNonWhiteSpaceCharacter" }, { keys: "zt", type: "action", action: "scrollToCursor", actionArgs: { position: "top" } }, { keys: "z<CR>", type: "action", action: "scrollToCursor", actionArgs: { position: "top" }, motion: "moveToFirstNonWhiteSpaceCharacter" }, { keys: "zb", type: "action", action: "scrollToCursor", actionArgs: { position: "bottom" } }, { keys: "z-", type: "action", action: "scrollToCursor", actionArgs: { position: "bottom" }, motion: "moveToFirstNonWhiteSpaceCharacter" }, { keys: ".", type: "action", action: "repeatLastEdit" }, { keys: "<C-a>", type: "action", action: "incrementNumberToken", isEdit: true, actionArgs: { increase: true, backtrack: false } }, { keys: "<C-x>", type: "action", action: "incrementNumberToken", isEdit: true, actionArgs: { increase: false, backtrack: false } }, { keys: "<C-t>", type: "action", action: "indent", actionArgs: { indentRight: true }, context: "insert" }, { keys: "<C-d>", type: "action", action: "indent", actionArgs: { indentRight: false }, context: "insert" }, { keys: "a<register>", type: "motion", motion: "textObjectManipulation" }, { keys: "i<register>", type: "motion", motion: "textObjectManipulation", motionArgs: { textObjectInner: true } }, { keys: "/", type: "search", searchArgs: { forward: true, querySrc: "prompt", toJumplist: true } }, { keys: "?", type: "search", searchArgs: { forward: false, querySrc: "prompt", toJumplist: true } }, { keys: "*", type: "search", searchArgs: { forward: true, querySrc: "wordUnderCursor", wholeWordOnly: true, toJumplist: true } }, { keys: "#", type: "search", searchArgs: { forward: false, querySrc: "wordUnderCursor", wholeWordOnly: true, toJumplist: true } }, { keys: "g*", type: "search", searchArgs: { forward: true, querySrc: "wordUnderCursor", toJumplist: true } }, { keys: "g#", type: "search", searchArgs: { forward: false, querySrc: "wordUnderCursor", toJumplist: true } }, { keys: ":", type: "ex" }], r = /* @__PURE__ */ Object.create(null), s = i.length, o = [{ name: "colorscheme", shortName: "colo" }, { name: "map" }, { name: "imap", shortName: "im" }, { name: "nmap", shortName: "nm" }, { name: "vmap", shortName: "vm" }, { name: "omap", shortName: "om" }, { name: "noremap", shortName: "no" }, { name: "nnoremap", shortName: "nn" }, { name: "vnoremap", shortName: "vn" }, { name: "inoremap", shortName: "ino" }, { name: "onoremap", shortName: "ono" }, { name: "unmap" }, { name: "mapclear", shortName: "mapc" }, { name: "nmapclear", shortName: "nmapc" }, { name: "vmapclear", shortName: "vmapc" }, { name: "imapclear", shortName: "imapc" }, { name: "omapclear", shortName: "omapc" }, { name: "write", shortName: "w" }, { name: "undo", shortName: "u" }, { name: "redo", shortName: "red" }, { name: "set", shortName: "se" }, { name: "setlocal", shortName: "setl" }, { name: "setglobal", shortName: "setg" }, { name: "sort", shortName: "sor" }, { name: "substitute", shortName: "s", possiblyAsync: true }, { name: "startinsert", shortName: "start" }, { name: "nohlsearch", shortName: "noh" }, { name: "yank", shortName: "y" }, { name: "delmarks", shortName: "delm" }, { name: "marks", excludeFromCommandHistory: true }, { name: "registers", shortName: "reg", excludeFromCommandHistory: true }, { name: "vglobal", shortName: "v" }, { name: "delete", shortName: "d" }, { name: "join", shortName: "j" }, { name: "normal", shortName: "norm" }, { name: "global", shortName: "g" }], l = xn("");
  function a(c) {
    c.setOption("disableInput", true), c.setOption("showCursorWhenSelecting", false), n.signal(c, "vim-mode-change", { mode: "normal" }), c.on("cursorActivity", ll), ae(c), n.on(c.getInputField(), "paste", h(c));
  }
  function f(c) {
    c.setOption("disableInput", false), c.off("cursorActivity", ll), n.off(c.getInputField(), "paste", h(c)), c.state.vim = null, Ki && clearTimeout(Ki);
  }
  function h(c) {
    var u = c.state.vim;
    return u.onPasteFn || (u.onPasteFn = function() {
      u.insertMode || (c.setCursor(it(c.getCursor(), 0, 1)), dt.enterInsertMode(c, {}, u));
    }), u.onPasteFn;
  }
  var p = /[\d]/, m = [n.isWordChar, function(c) {
    return c && !n.isWordChar(c) && !/\s/.test(c);
  }], b = [function(c) {
    return /\S/.test(c);
  }], x = ["<", ">"], C = ["-", '"', ".", ":", "_", "/", "+"], E = /^\w$/, D = /^[A-Z]$/;
  try {
    D = new RegExp("^[\\p{Lu}]$", "u");
  } catch {
  }
  function R(c, u) {
    return u >= c.firstLine() && u <= c.lastLine();
  }
  function I(c) {
    return /^[a-z]$/.test(c);
  }
  function z(c) {
    return "()[]{}".indexOf(c) != -1;
  }
  function K(c) {
    return p.test(c);
  }
  function W(c) {
    return D.test(c);
  }
  function $(c) {
    return /^\s*$/.test(c);
  }
  function ee(c) {
    return ".?!".indexOf(c) != -1;
  }
  function le(c, u) {
    for (var d = 0; d < u.length; d++) if (u[d] == c) return true;
    return false;
  }
  var re = {};
  function U(c, u, d, g, v) {
    if (u === void 0 && !v) throw Error("defaultValue is required unless callback is provided");
    if (d || (d = "string"), re[c] = { type: d, defaultValue: u, callback: v }, g) for (var y = 0; y < g.length; y++) re[g[y]] = re[c];
    u && Z(c, u);
  }
  function Z(c, u, d, g) {
    var v = re[c];
    g = g || {};
    var y = g.scope;
    if (!v) return new Error("Unknown option: " + c);
    if (v.type == "boolean") {
      if (u && u !== true) return new Error("Invalid argument: " + c + "=" + u);
      u !== false && (u = true);
    }
    v.callback ? (y !== "local" && v.callback(u, void 0), y !== "global" && d && v.callback(u, d)) : (y !== "local" && (v.value = v.type == "boolean" ? !!u : u), y !== "global" && d && (d.state.vim.options[c] = { value: u }));
  }
  function J(c, u, d) {
    var g = re[c];
    d = d || {};
    var v = d.scope;
    if (!g) return new Error("Unknown option: " + c);
    if (g.callback) {
      let y = u && g.callback(void 0, u);
      return v !== "global" && y !== void 0 ? y : v !== "local" ? g.callback() : void 0;
    } else return (v !== "global" && u && u.state.vim.options[c] || v !== "local" && g || {}).value;
  }
  U("filetype", void 0, "string", ["ft"], function(c, u) {
    if (u !== void 0) if (c === void 0) {
      let d = u.getOption("mode");
      return d == "null" ? "" : d;
    } else {
      let d = c == "" ? "null" : c;
      u.setOption("mode", d);
    }
  }), U("textwidth", 80, "number", ["tw"], function(c, u) {
    if (u !== void 0) if (c === void 0) {
      var d = u.getOption("textwidth");
      return d;
    } else {
      var g = Math.round(c);
      g > 1 && u.setOption("textwidth", g);
    }
  });
  var se = function() {
    var c = 100, u = -1, d = 0, g = 0, v = new Array(c);
    function y(A, L, _) {
      var N = u % c, F = v[N];
      function H(Y) {
        var X = ++u % c, we = v[X];
        we && we.clear(), v[X] = A.setBookmark(Y);
      }
      if (F) {
        var P = F.find();
        P && !nn(P, L) && H(L);
      } else H(L);
      H(_), d = u, g = u - c + 1, g < 0 && (g = 0);
    }
    function S(A, L) {
      u += L, u > d ? u = d : u < g && (u = g);
      var _ = v[(c + u) % c];
      if (_ && !_.find()) {
        var N = L > 0 ? 1 : -1, F, H = A.getCursor();
        do
          if (u += N, _ = v[(c + u) % c], _ && (F = _.find()) && !nn(H, F)) break;
        while (u < d && u > g);
      }
      return _;
    }
    function M(A, L) {
      var _ = u, N = S(A, L);
      return u = _, N && N.find();
    }
    return { cachedCursor: void 0, add: y, find: M, move: S };
  }, ie = function(c) {
    return c ? { changes: c.changes, expectCursorActivityForChange: c.expectCursorActivityForChange } : { changes: [], expectCursorActivityForChange: false };
  };
  class Se {
    constructor() {
      this.latestRegister = void 0, this.isPlaying = false, this.isRecording = false, this.replaySearchQueries = [], this.onRecordingDone = void 0, this.lastInsertModeChanges = ie();
    }
    exitMacroRecordMode() {
      var u = te.macroModeState;
      u.onRecordingDone && u.onRecordingDone(), u.onRecordingDone = void 0, u.isRecording = false;
    }
    enterMacroRecordMode(u, d) {
      var g = te.registerController.getRegister(d);
      if (g) {
        if (g.clear(), this.latestRegister = d, u.openDialog) {
          var v = Yn("span", { class: "cm-vim-message" }, "recording @" + d);
          this.onRecordingDone = u.openDialog(v, function() {
          }, { bottom: true });
        }
        this.isRecording = true;
      }
    }
  }
  function ae(c) {
    return c.state.vim || (c.state.vim = { inputState: new ki(), lastEditInputState: void 0, lastEditActionCommand: void 0, lastHPos: -1, lastHSPos: -1, lastMotion: null, marks: {}, insertMode: false, insertModeReturn: false, insertModeRepeat: void 0, visualMode: false, visualLine: false, visualBlock: false, lastSelection: null, lastPastedText: void 0, sel: { anchor: new e(0, 0), head: new e(0, 0) }, options: {}, expectLiteralNext: false, status: "" }), c.state.vim;
  }
  var te;
  function Ee() {
    te = { searchQuery: null, searchIsReversed: false, lastSubstituteReplacePart: void 0, jumpList: se(), macroModeState: new Se(), lastCharacterSearch: { increment: 0, forward: true, selectedCharacter: "" }, registerController: new hr({}), searchHistoryController: new Jt(), exCommandHistoryController: new Jt() };
    for (var c in re) {
      var u = re[c];
      u.value = u.defaultValue;
    }
  }
  class Me {
    constructor(u, d) {
      this.keyName = u, this.key = d.key, this.ctrlKey = d.ctrlKey, this.altKey = d.altKey, this.metaKey = d.metaKey, this.shiftKey = d.shiftKey;
    }
  }
  var Le, ye = { enterVimMode: a, leaveVimMode: f, buildKeyMap: function() {
  }, getRegisterController: function() {
    return te.registerController;
  }, resetVimGlobalState_: Ee, getVimGlobalState_: function() {
    return te;
  }, maybeInitVimState_: ae, suppressErrorLogging: false, InsertModeKey: Me, map: function(c, u, d) {
    _t.map(c, u, d);
  }, unmap: function(c, u) {
    return _t.unmap(c, u);
  }, noremap: function(c, u, d) {
    _t.map(c, u, d, true);
  }, mapclear: function(c) {
    var u = i.length, d = s, g = i.slice(0, u - d);
    if (i = i.slice(u - d), c) for (var v = g.length - 1; v >= 0; v--) {
      var y = g[v];
      if (c !== y.context) if (y.context) this._mapCommand(y);
      else {
        var S = ["normal", "insert", "visual"];
        for (var M in S) if (S[M] !== c) {
          var A = Object.assign({}, y);
          A.context = S[M], this._mapCommand(A);
        }
      }
    }
  }, langmap: oi, vimKeyFromEvent: hn, setOption: Z, getOption: J, defineOption: U, defineEx: function(c, u, d) {
    if (!u) u = c;
    else if (c.indexOf(u) !== 0) throw new Error('(Vim.defineEx) "' + u + '" is not a prefix of "' + c + '", command not registered');
    Ta[c] = d, _t.commandMap_[u] = { name: c, shortName: u, type: "api" };
  }, handleKey: function(c, u, d) {
    var g = this.findKey(c, u, d);
    if (typeof g == "function") return g();
  }, multiSelectHandleKey: Wt, findKey: function(c, u, d) {
    var g = ae(c), v = c;
    function y() {
      var _ = te.macroModeState;
      if (_.isRecording) {
        if (u == "q") return _.exitMacroRecordMode(), mt(v), true;
        d != "mapping" && Ea(_, u);
      }
    }
    function S() {
      if (u == "<Esc>") {
        if (g.visualMode) rn(v);
        else if (g.insertMode) Si(v);
        else return;
        return mt(v), true;
      }
    }
    function M() {
      if (S()) return true;
      g.inputState.keyBuffer.push(u);
      var _ = g.inputState.keyBuffer.join(""), N = u.length == 1, F = In.matchCommand(_, i, g.inputState, "insert"), H = g.inputState.changeQueue;
      if (F.type == "none") return mt(v), false;
      if (F.type == "partial") {
        if (F.expectLiteralNext && (g.expectLiteralNext = true), Le && window.clearTimeout(Le), Le = N && window.setTimeout(function() {
          g.insertMode && g.inputState.keyBuffer.length && mt(v);
        }, J("insertModeEscKeysTimeout")), N) {
          var P = v.listSelections();
          (!H || H.removed.length != P.length) && (H = g.inputState.changeQueue = new Lr()), H.inserted += u;
          for (var Y = 0; Y < P.length; Y++) {
            var X = Ct(P[Y].anchor, P[Y].head), we = jn(P[Y].anchor, P[Y].head), ce = v.getRange(X, v.state.overwrite ? it(we, 0, 1) : we);
            H.removed[Y] = (H.removed[Y] || "") + ce;
          }
        }
        return !N;
      } else F.type == "full" && (g.inputState.keyBuffer.length = 0);
      if (g.expectLiteralNext = false, Le && window.clearTimeout(Le), F.command && H) {
        for (var P = v.listSelections(), Y = 0; Y < P.length; Y++) {
          var Ce = P[Y].head;
          v.replaceRange(H.removed[Y] || "", it(Ce, 0, -H.inserted.length), Ce, "+input");
        }
        te.macroModeState.lastInsertModeChanges.changes.pop();
      }
      return F.command || mt(v), F.command;
    }
    function A() {
      if (y() || S()) return true;
      g.inputState.keyBuffer.push(u);
      var _ = g.inputState.keyBuffer.join("");
      if (/^[1-9]\d*$/.test(_)) return true;
      var N = /^(\d*)(.*)$/.exec(_);
      if (!N) return mt(v), false;
      var F = g.visualMode ? "visual" : "normal", H = N[2] || N[1];
      g.inputState.operatorShortcut && g.inputState.operatorShortcut.slice(-1) == H && (H = g.inputState.operatorShortcut);
      var P = In.matchCommand(H, i, g.inputState, F);
      return P.type == "none" ? (mt(v), false) : P.type == "partial" ? (P.expectLiteralNext && (g.expectLiteralNext = true), true) : P.type == "clear" ? (mt(v), true) : (g.expectLiteralNext = false, g.inputState.keyBuffer.length = 0, N = /^(\d*)(.*)$/.exec(_), N && N[1] && N[1] != "0" && g.inputState.pushRepeatDigit(N[1]), P.command);
    }
    var L = g.insertMode ? M() : A();
    if (L === false) return !g.insertMode && (u.length === 1 || n.isMac && /<A-.>/.test(u)) ? function() {
      return true;
    } : void 0;
    if (L === true) return function() {
      return true;
    };
    if (L) return function() {
      return v.operation(function() {
        v.curOp.isVimOp = true;
        try {
          if (typeof L != "object") return;
          L.type == "keyToKey" ? Ne(v, L.toKeys, L) : In.processCommand(v, g, L);
        } catch (_) {
          throw v.state.vim = void 0, ae(v), ye.suppressErrorLogging || console.log(_), _;
        }
        return true;
      });
    };
  }, handleEx: function(c, u) {
    _t.processCommand(c, u);
  }, defineMotion: ur, defineAction: Dr, defineOperator: nt, mapCommand: Nr, _mapCommand: hs, defineRegister: Ys, exitVisualMode: rn, exitInsertMode: Si }, fe = [], $e = false, De;
  function Ge(c) {
    if (!De) throw new Error("No prompt to send key to");
    if (c[0] == "<") {
      var u = c.toLowerCase().slice(1, -1), d = u.split("-");
      if (u = d.pop() || "", u == "lt") c = "<";
      else if (u == "space") c = " ";
      else if (u == "cr") c = `
`;
      else if (Xe[u]) {
        var g = De.value || "", v = { key: Xe[u], target: { value: g, selectionEnd: g.length, selectionStart: g.length } };
        De.onKeyDown && De.onKeyDown(v, De.value, S), De && De.onKeyUp && De.onKeyUp(v, De.value, S);
        return;
      }
    }
    if (c == `
`) {
      var y = De;
      De = null, y.onClose && y.onClose(y.value);
    } else De.value = (De.value || "") + c;
    function S(M) {
      De && (typeof M == "string" ? De.value = M : De = null);
    }
  }
  function Ne(c, u, d) {
    var g = $e;
    if (d) {
      if (fe.indexOf(d) != -1) return;
      fe.push(d), $e = d.noremap != false;
    }
    try {
      for (var v = ae(c), y = /<(?:[CSMA]-)*\w+>|./gi, S; S = y.exec(u); ) {
        var M = S[0], A = v.insertMode;
        if (De) {
          Ge(M);
          continue;
        }
        var L = ye.handleKey(c, M, "mapping");
        if (!L && A && v.insertMode) {
          if (M[0] == "<") {
            var _ = M.toLowerCase().slice(1, -1), N = _.split("-");
            if (_ = N.pop() || "", _ == "lt") M = "<";
            else if (_ == "space") M = " ";
            else if (_ == "cr") M = `
`;
            else if (Xe.hasOwnProperty(_)) {
              M = Xe[_], Ci(c, M);
              continue;
            } else M = M[0], y.lastIndex = S.index + 1;
          }
          c.replaceSelection(M);
        }
      }
    } finally {
      if (fe.pop(), $e = fe.length ? g : false, !fe.length && De) {
        var F = De;
        De = null, eo(c, F);
      }
    }
  }
  var bn = { Return: "CR", Backspace: "BS", Delete: "Del", Escape: "Esc", Insert: "Ins", ArrowLeft: "Left", ArrowRight: "Right", ArrowUp: "Up", ArrowDown: "Down", Enter: "CR", " ": "Space" }, wn = { Shift: 1, Alt: 1, Command: 1, Control: 1, CapsLock: 1, AltGraph: 1, Dead: 1, Unidentified: 1 }, Xe = {};
  "Left|Right|Up|Down|End|Home".split("|").concat(Object.keys(bn)).forEach(function(c) {
    Xe[(bn[c] || "").toLowerCase()] = Xe[c.toLowerCase()] = c;
  });
  function hn(c, u) {
    var _a;
    var d = c.key;
    if (!wn[d]) {
      d.length > 1 && d[0] == "n" && (d = d.replace("Numpad", "")), d = bn[d] || d;
      var g = "";
      if (c.ctrlKey && (g += "C-"), c.altKey && (g += "A-"), c.metaKey && (g += "M-"), n.isMac && g == "A-" && d.length == 1 && (g = g.slice(2)), (g || d.length > 1) && c.shiftKey && (g += "S-"), u && !u.expectLiteralNext && d.length == 1) {
        if (l.keymap && d in l.keymap) (l.remapCtrl != false || !g) && (d = l.keymap[d]);
        else if (d.charCodeAt(0) > 128 && !r[d]) {
          var v = ((_a = c.code) == null ? void 0 : _a.slice(-1)) || "";
          c.shiftKey || (v = v.toLowerCase()), v && (d = v, !g && c.altKey && (g = "A-"));
        }
      }
      return g += d, g.length > 1 && (g = "<" + g + ">"), g;
    }
  }
  function oi(c, u) {
    l.string !== c && (l = xn(c)), l.remapCtrl = u;
  }
  function xn(c) {
    let u = {};
    if (!c) return { keymap: u, string: "" };
    function d(g) {
      return g.split(/\\?(.)/).filter(Boolean);
    }
    return c.split(/((?:[^\\,]|\\.)+),/).map((g) => {
      if (!g) return;
      const v = g.split(/((?:[^\\;]|\\.)+);/);
      if (v.length == 3) {
        const y = d(v[1]), S = d(v[2]);
        if (y.length !== S.length) return;
        for (let M = 0; M < y.length; ++M) u[y[M]] = S[M];
      } else if (v.length == 1) {
        const y = d(g);
        if (y.length % 2 !== 0) return;
        for (let S = 0; S < y.length; S += 2) u[y[S]] = y[S + 1];
      }
    }), { keymap: u, string: c };
  }
  U("langmap", void 0, "string", ["lmap"], function(c, u) {
    if (c === void 0) return l.string;
    oi(c);
  });
  class ki {
    constructor() {
      this.prefixRepeat = [], this.motionRepeat = [], this.operator = null, this.operatorArgs = null, this.motion = null, this.motionArgs = null, this.keyBuffer = [], this.registerName = void 0, this.changeQueue = null;
    }
    pushRepeatDigit(u) {
      this.operator ? this.motionRepeat = this.motionRepeat.concat(u) : this.prefixRepeat = this.prefixRepeat.concat(u);
    }
    getRepeat() {
      var u = 0;
      return (this.prefixRepeat.length > 0 || this.motionRepeat.length > 0) && (u = 1, this.prefixRepeat.length > 0 && (u *= parseInt(this.prefixRepeat.join(""), 10)), this.motionRepeat.length > 0 && (u *= parseInt(this.motionRepeat.join(""), 10))), u;
    }
  }
  function mt(c, u) {
    c.state.vim.inputState = new ki(), c.state.vim.expectLiteralNext = false, n.signal(c, "vim-command-done", u);
  }
  function Lr() {
    this.removed = [], this.inserted = "";
  }
  class un {
    constructor(u, d, g) {
      this.clear(), this.keyBuffer = [u || ""], this.insertModeChanges = [], this.searchQueries = [], this.linewise = !!d, this.blockwise = !!g;
    }
    setText(u, d, g) {
      this.keyBuffer = [u || ""], this.linewise = !!d, this.blockwise = !!g;
    }
    pushText(u, d) {
      d && (this.linewise || this.keyBuffer.push(`
`), this.linewise = true), this.keyBuffer.push(u);
    }
    pushInsertModeChanges(u) {
      this.insertModeChanges.push(ie(u));
    }
    pushSearchQuery(u) {
      this.searchQueries.push(u);
    }
    clear() {
      this.keyBuffer = [], this.insertModeChanges = [], this.searchQueries = [], this.linewise = false;
    }
    toString() {
      return this.keyBuffer.join("");
    }
  }
  function Ys(c, u) {
    var d = te.registerController.registers;
    if (!c || c.length != 1) throw Error("Register name must be 1 character");
    if (d[c]) throw Error("Register already defined " + c);
    d[c] = u, C.push(c);
  }
  class hr {
    constructor(u) {
      this.registers = u, this.unnamedRegister = u['"'] = new un(), u["."] = new un(), u[":"] = new un(), u["/"] = new un(), u["+"] = new un();
    }
    pushText(u, d, g, v, y) {
      if (u !== "_") {
        v && g.charAt(g.length - 1) !== `
` && (g += `
`);
        var S = this.isValidRegister(u) ? this.getRegister(u) : null;
        if (!S || !u) {
          switch (d) {
            case "yank":
              this.registers[0] = new un(g, v, y);
              break;
            case "delete":
            case "change":
              g.indexOf(`
`) == -1 ? this.registers["-"] = new un(g, v) : (this.shiftNumericRegisters_(), this.registers[1] = new un(g, v));
              break;
          }
          this.unnamedRegister.setText(g, v, y);
          return;
        }
        var M = W(u);
        M ? S.pushText(g, v) : S.setText(g, v, y), u === "+" && navigator.clipboard.writeText(g), this.unnamedRegister.setText(S.toString(), v);
      }
    }
    getRegister(u) {
      return this.isValidRegister(u) ? (u = u.toLowerCase(), this.registers[u] || (this.registers[u] = new un()), this.registers[u]) : this.unnamedRegister;
    }
    isValidRegister(u) {
      return u && (le(u, C) || E.test(u));
    }
    shiftNumericRegisters_() {
      for (var u = 9; u >= 2; u--) this.registers[u] = this.getRegister("" + (u - 1));
    }
  }
  class Jt {
    constructor() {
      this.historyBuffer = [], this.iterator = 0, this.initialPrefix = null;
    }
    nextMatch(u, d) {
      var g = this.historyBuffer, v = d ? -1 : 1;
      this.initialPrefix === null && (this.initialPrefix = u);
      for (var y = this.iterator + v; d ? y >= 0 : y < g.length; y += v) for (var S = g[y], M = 0; M <= S.length; M++) if (this.initialPrefix == S.substring(0, M)) return this.iterator = y, S;
      if (y >= g.length) return this.iterator = g.length, this.initialPrefix;
      if (y < 0) return u;
    }
    pushInput(u) {
      var d = this.historyBuffer.indexOf(u);
      d > -1 && this.historyBuffer.splice(d, 1), u.length && this.historyBuffer.push(u);
    }
    reset() {
      this.initialPrefix = null, this.iterator = this.historyBuffer.length;
    }
  }
  var In = { matchCommand: function(c, u, d, g) {
    var v = Sn(c, u, g, d), y = v.full[0];
    if (!y) return v.partial.length ? { type: "partial", expectLiteralNext: v.partial.length == 1 && v.partial[0].keys.slice(-11) == "<character>" } : { type: "none" };
    if (y.keys.slice(-11) == "<character>" || y.keys.slice(-10) == "<register>") {
      var S = dn(c);
      if (!S || S.length > 1) return { type: "clear" };
      d.selectedCharacter = S;
    }
    return { type: "full", command: y };
  }, processCommand: function(c, u, d) {
    switch (u.inputState.repeatOverride = d.repeatOverride, d.type) {
      case "motion":
        this.processMotion(c, u, d);
        break;
      case "operator":
        this.processOperator(c, u, d);
        break;
      case "operatorMotion":
        this.processOperatorMotion(c, u, d);
        break;
      case "action":
        this.processAction(c, u, d);
        break;
      case "search":
        this.processSearch(c, u, d);
        break;
      case "ex":
      case "keyToEx":
        this.processEx(c, u, d);
        break;
    }
  }, processMotion: function(c, u, d) {
    u.inputState.motion = d.motion, u.inputState.motionArgs = kn(d.motionArgs), this.evalInput(c, u);
  }, processOperator: function(c, u, d) {
    var g = u.inputState;
    if (g.operator) if (g.operator == d.operator) {
      g.motion = "expandToLine", g.motionArgs = { linewise: true, repeat: 1 }, this.evalInput(c, u);
      return;
    } else mt(c);
    g.operator = d.operator, g.operatorArgs = kn(d.operatorArgs), d.keys.length > 1 && (g.operatorShortcut = d.keys), d.exitVisualBlock && (u.visualBlock = false, Un(c)), u.visualMode && this.evalInput(c, u);
  }, processOperatorMotion: function(c, u, d) {
    var g = u.visualMode, v = kn(d.operatorMotionArgs);
    v && g && v.visualLine && (u.visualLine = true), this.processOperator(c, u, d), g || this.processMotion(c, u, d);
  }, processAction: function(c, u, d) {
    var g = u.inputState, v = g.getRepeat(), y = !!v, S = kn(d.actionArgs) || { repeat: 1 };
    g.selectedCharacter && (S.selectedCharacter = g.selectedCharacter), d.operator && this.processOperator(c, u, d), d.motion && this.processMotion(c, u, d), (d.motion || d.operator) && this.evalInput(c, u), S.repeat = v || 1, S.repeatIsExplicit = y, S.registerName = g.registerName, mt(c), u.lastMotion = null, d.isEdit && this.recordLastEdit(u, g, d), dt[d.action](c, S, u);
  }, processSearch: function(c, u, d) {
    if (!c.getSearchCursor) return;
    var g = d.searchArgs.forward, v = d.searchArgs.wholeWordOnly;
    An(c).setReversed(!g);
    var y = g ? "/" : "?", S = An(c).getQuery(), M = c.getScrollInfo(), A = "";
    function L(ce, Ce, Oe) {
      te.searchHistoryController.pushInput(ce), te.searchHistoryController.reset();
      try {
        pr(c, ce, Ce, Oe);
      } catch {
        Ve(c, "Invalid regex: " + ce), mt(c);
        return;
      }
      In.processMotion(c, u, { keys: "", type: "motion", motion: "findNext", motionArgs: { forward: true, toJumplist: d.searchArgs.toJumplist } });
    }
    function _(ce) {
      c.scrollTo(M.left, M.top), L(ce, true, true);
      var Ce = te.macroModeState;
      Ce.isRecording && Hr(Ce, ce);
    }
    function N() {
      return J("pcre") ? "(JavaScript regexp: set pcre)" : "(Vim regexp: set nopcre)";
    }
    function F(ce, Ce, Oe) {
      var Be = hn(ce), st, vt;
      Be == "<Up>" || Be == "<Down>" ? (st = Be == "<Up>", vt = ce.target ? ce.target.selectionEnd : 0, Ce = te.searchHistoryController.nextMatch(Ce, st) || "", Oe(Ce), vt && ce.target && (ce.target.selectionEnd = ce.target.selectionStart = Math.min(vt, ce.target.value.length))) : Be && Be != "<Left>" && Be != "<Right>" && te.searchHistoryController.reset(), A = Ce, H();
    }
    function H() {
      var ce;
      try {
        ce = pr(c, A, true, true);
      } catch {
      }
      ce ? c.scrollIntoView(no(c, !g, ce), 30) : (Ir(c), c.scrollTo(M.left, M.top));
    }
    function P(ce, Ce, Oe) {
      var Be = hn(ce);
      Be == "<Esc>" || Be == "<C-c>" || Be == "<C-[>" || Be == "<BS>" && Ce == "" ? (te.searchHistoryController.pushInput(Ce), te.searchHistoryController.reset(), pr(c, (S == null ? void 0 : S.source) || ""), Ir(c), c.scrollTo(M.left, M.top), n.e_stop(ce), mt(c), Oe(), c.focus()) : Be == "<Up>" || Be == "<Down>" ? n.e_stop(ce) : Be == "<C-u>" && (n.e_stop(ce), Oe(""));
    }
    switch (d.searchArgs.querySrc) {
      case "prompt":
        var Y = te.macroModeState;
        if (Y.isPlaying) {
          let Ce = Y.replaySearchQueries.shift();
          L(Ce || "", true, false);
        } else eo(c, { onClose: _, prefix: y, desc: Yn("span", { $cursor: "pointer", onmousedown: function(Ce) {
          Ce.preventDefault(), Z("pcre", !J("pcre")), this.textContent = N(), H();
        } }, N()), onKeyUp: F, onKeyDown: P });
        break;
      case "wordUnderCursor":
        var X = Yo(c, { noSymbol: true }), we = true;
        if (X || (X = Yo(c, { noSymbol: false }), we = false), !X) {
          Ve(c, "No word under cursor"), mt(c);
          return;
        }
        let ce = c.getLine(X.start.line).substring(X.start.ch, X.end.ch);
        we && v ? ce = "\\b" + ce + "\\b" : ce = Hf(ce), te.jumpList.cachedCursor = c.getCursor(), c.setCursor(X.start), L(ce, true, false);
        break;
    }
  }, processEx: function(c, u, d) {
    function g(M) {
      te.exCommandHistoryController.pushInput(M), te.exCommandHistoryController.reset(), _t.processCommand(c, M), c.state.vim && mt(c), Ir(c);
    }
    function v(M, A, L) {
      var _ = hn(M), N, F;
      (_ == "<Esc>" || _ == "<C-c>" || _ == "<C-[>" || _ == "<BS>" && A == "") && (te.exCommandHistoryController.pushInput(A), te.exCommandHistoryController.reset(), n.e_stop(M), mt(c), Ir(c), L(), c.focus()), _ == "<Up>" || _ == "<Down>" ? (n.e_stop(M), N = _ == "<Up>", F = M.target ? M.target.selectionEnd : 0, A = te.exCommandHistoryController.nextMatch(A, N) || "", L(A), F && M.target && (M.target.selectionEnd = M.target.selectionStart = Math.min(F, M.target.value.length))) : _ == "<C-u>" ? (n.e_stop(M), L("")) : _ && _ != "<Left>" && _ != "<Right>" && te.exCommandHistoryController.reset();
    }
    function y(M, A) {
      var L = new n.StringStream(A), _ = {};
      try {
        if (_t.parseInput_(c, L, _), _.commandName != "s") {
          Ir(c);
          return;
        }
        var N = _t.matchCommand_(_.commandName);
        if (!N || (_t.parseCommandArgs_(L, _, N), !_.argString)) return;
        var F = Ca(_.argString.slice(1), true, true);
        F && rl(c, F);
      } catch {
      }
    }
    if (d.type == "keyToEx") _t.processCommand(c, d.exArgs.input);
    else {
      var S = { onClose: g, onKeyDown: v, onKeyUp: y, prefix: ":" };
      u.visualMode && (S.value = "'<,'>", S.selectValueOnOpen = false), eo(c, S);
    }
  }, evalInput: function(c, u) {
    var d = u.inputState, g = d.motion, v = d.motionArgs || { repeat: 1 }, y = d.operator, S = d.operatorArgs || {}, M = d.registerName, A = u.sel, L = Ze(u.visualMode ? St(c, A.head) : c.getCursor("head")), _ = Ze(u.visualMode ? St(c, A.anchor) : c.getCursor("anchor")), N = Ze(L), F = Ze(_), H, P, Y;
    if (y && this.recordLastEdit(u, d), d.repeatOverride !== void 0 ? Y = d.repeatOverride : Y = d.getRepeat(), Y > 0 && v.explicitRepeat ? v.repeatIsExplicit = true : (v.noRepeat || !v.explicitRepeat && Y === 0) && (Y = 1, v.repeatIsExplicit = false), d.selectedCharacter && (v.selectedCharacter = S.selectedCharacter = d.selectedCharacter), v.repeat = Y, mt(c), g) {
      var X = Pt[g](c, L, v, u, d);
      if (u.lastMotion = Pt[g], !X) return;
      if (v.toJumplist) {
        var we = te.jumpList, ce = we.cachedCursor;
        ce ? (Vi(c, ce, X), delete we.cachedCursor) : Vi(c, L, X);
      }
      X instanceof Array ? (P = X[0], H = X[1]) : H = X, H || (H = Ze(L)), u.visualMode ? (u.visualBlock && H.ch === 1 / 0 || (H = St(c, H, N)), P && (P = St(c, P)), P = P || F, A.anchor = P, A.head = H, Un(c), Mn(c, u, "<", tt(P, H) ? P : H), Mn(c, u, ">", tt(P, H) ? H : P)) : y || (H = St(c, H, N), c.setCursor(H.line, H.ch));
    }
    if (y) {
      if (S.lastSel) {
        P = F;
        var Ce = S.lastSel, Oe = Math.abs(Ce.head.line - Ce.anchor.line), Be = Math.abs(Ce.head.ch - Ce.anchor.ch);
        Ce.visualLine ? H = new e(F.line + Oe, F.ch) : Ce.visualBlock ? H = new e(F.line + Oe, F.ch + Be) : Ce.head.line == Ce.anchor.line ? H = new e(F.line, F.ch + Be) : H = new e(F.line + Oe, F.ch), u.visualMode = true, u.visualLine = Ce.visualLine, u.visualBlock = Ce.visualBlock, A = u.sel = { anchor: P, head: H }, Un(c);
      } else u.visualMode && (S.lastSel = { anchor: Ze(A.anchor), head: Ze(A.head), visualBlock: u.visualBlock, visualLine: u.visualLine });
      var st, vt, Pe, ke, je;
      if (u.visualMode) {
        st = Ct(A.head, A.anchor), vt = jn(A.head, A.anchor), Pe = u.visualLine || S.linewise, ke = u.visualBlock ? "block" : Pe ? "line" : "char";
        var Tn = t(c, st, vt);
        if (je = Wi(c, { anchor: Tn.start, head: Tn.end }, ke), Pe) {
          var Lt = je.ranges;
          if (ke == "block") for (var pn = 0; pn < Lt.length; pn++) Lt[pn].head.ch = It(c, Lt[pn].head.line);
          else ke == "line" && (Lt[0].head = new e(Lt[0].head.line + 1, 0));
        }
      } else {
        if (st = Ze(P || F), vt = Ze(H || N), tt(vt, st)) {
          var Mi = st;
          st = vt, vt = Mi;
        }
        Pe = v.linewise || S.linewise, Pe ? wa(c, st, vt) : v.forward && Rr(c, st, vt), ke = "char";
        var _a = !v.inclusive || Pe, Tn = t(c, st, vt);
        je = Wi(c, { anchor: Tn.start, head: Tn.end }, ke, _a);
      }
      c.setSelections(je.ranges, je.primary), u.lastMotion = null, S.repeat = Y, S.registerName = M, S.linewise = Pe;
      var ro = ue[y](c, S, je.ranges, F, H);
      u.visualMode && rn(c, ro != null), ro && c.setCursor(ro);
    }
  }, recordLastEdit: function(c, u, d) {
    var g = te.macroModeState;
    g.isPlaying || (c.lastEditInputState = u, c.lastEditActionCommand = d, g.lastInsertModeChanges.changes = [], g.lastInsertModeChanges.expectCursorActivityForChange = false, g.lastInsertModeChanges.visualBlock = c.visualBlock ? c.sel.head.line - c.sel.anchor.line : 0);
  } }, Pt = { moveToTopLine: function(c, u, d) {
    var g = $i(c).top + d.repeat - 1;
    return new e(g, qn(c.getLine(g)));
  }, moveToMiddleLine: function(c) {
    var u = $i(c), d = Math.floor((u.top + u.bottom) * 0.5);
    return new e(d, qn(c.getLine(d)));
  }, moveToBottomLine: function(c, u, d) {
    var g = $i(c).bottom - d.repeat + 1;
    return new e(g, qn(c.getLine(g)));
  }, expandToLine: function(c, u, d) {
    var g = u;
    return new e(g.line + d.repeat - 1, 1 / 0);
  }, findNext: function(c, u, d) {
    var g = An(c), v = g.getQuery();
    if (v) {
      var y = !d.forward;
      y = g.isReversed() ? !y : y, rl(c, v);
      var S = no(c, y, v, d.repeat);
      return S || Ve(c, "No match found " + v + (J("pcre") ? " (set nopcre to use Vim regexps)" : "")), S;
    }
  }, findAndSelectNextInclusive: function(c, u, d, g, v) {
    var y = An(c), S = y.getQuery();
    if (S) {
      var M = !d.forward;
      M = y.isReversed() ? !M : M;
      var A = $f(c, M, S, d.repeat, g);
      if (A) {
        if (v.operator) return A;
        var L = A[0], _ = new e(A[1].line, A[1].ch - 1);
        if (g.visualMode) {
          (g.visualLine || g.visualBlock) && (g.visualLine = false, g.visualBlock = false, n.signal(c, "vim-mode-change", { mode: "visual", subMode: "" }));
          var N = g.sel.anchor;
          if (N) return y.isReversed() ? d.forward ? [N, L] : [N, _] : d.forward ? [N, _] : [N, L];
        } else g.visualMode = true, g.visualLine = false, g.visualBlock = false, n.signal(c, "vim-mode-change", { mode: "visual", subMode: "" });
        return M ? [_, L] : [L, _];
      }
    }
  }, goToMark: function(c, u, d, g) {
    var v = gr(c, g, d.selectedCharacter || "");
    return v ? d.linewise ? { line: v.line, ch: qn(c.getLine(v.line)) } : v : null;
  }, moveToOtherHighlightedEnd: function(c, u, d, g) {
    var v = g.sel;
    return g.visualBlock && d.sameLine ? [St(c, new e(v.anchor.line, v.head.ch)), St(c, new e(v.head.line, v.anchor.ch))] : [v.head, v.anchor];
  }, jumpToMark: function(c, u, d, g) {
    for (var v = u, y = 0; y < d.repeat; y++) {
      var S = v;
      for (var M in g.marks) if (I(M)) {
        var A = g.marks[M].find(), L = d.forward ? tt(A, S) : tt(S, A);
        if (!L && !(d.linewise && A.line == S.line)) {
          var _ = nn(S, v), N = d.forward ? Cn(S, A, v) : Cn(v, A, S);
          (_ || N) && (v = A);
        }
      }
    }
    return d.linewise && (v = new e(v.line, qn(c.getLine(v.line)))), v;
  }, moveByCharacters: function(c, u, d) {
    var g = u, v = d.repeat, y = d.forward ? g.ch + v : g.ch - v;
    return new e(g.line, y);
  }, moveByLines: function(c, u, d, g) {
    var v = u, y = v.ch;
    switch (g.lastMotion) {
      case this.moveByLines:
      case this.moveByDisplayLines:
      case this.moveByScroll:
      case this.moveToColumn:
      case this.moveToEol:
        y = g.lastHPos;
        break;
      default:
        g.lastHPos = y;
    }
    var S = d.repeat + (d.repeatOffset || 0), M = d.forward ? v.line + S : v.line - S, A = c.firstLine(), L = c.lastLine(), _ = c.findPosV(v, d.forward ? S : -S, "line", g.lastHSPos), N = d.forward ? _.line > M : _.line < M;
    return N && (M = _.line, y = _.ch), M < A && v.line == A ? this.moveToStartOfLine(c, u, d, g) : M > L && v.line == L ? Ot(c, u, d, g, true) : (d.toFirstChar && (y = qn(c.getLine(M)), g.lastHPos = y), g.lastHSPos = c.charCoords(new e(M, y), "div").left, new e(M, y));
  }, moveByDisplayLines: function(c, u, d, g) {
    var v = u;
    switch (g.lastMotion) {
      case this.moveByDisplayLines:
      case this.moveByScroll:
      case this.moveByLines:
      case this.moveToColumn:
      case this.moveToEol:
        break;
      default:
        g.lastHSPos = c.charCoords(v, "div").left;
    }
    var y = d.repeat, S = c.findPosV(v, d.forward ? y : -y, "line", g.lastHSPos);
    if (S.hitSide) if (d.forward) {
      var M = c.charCoords(S, "div"), A = { top: M.top + 8, left: g.lastHSPos };
      S = c.coordsChar(A, "div");
    } else {
      var L = c.charCoords(new e(c.firstLine(), 0), "div");
      L.left = g.lastHSPos, S = c.coordsChar(L, "div");
    }
    return g.lastHPos = S.ch, S;
  }, moveByPage: function(c, u, d) {
    var g = u, v = d.repeat;
    return c.findPosV(g, d.forward ? v : -v, "page");
  }, moveByParagraph: function(c, u, d) {
    var g = d.forward ? 1 : -1;
    return Qs(c, u, d.repeat, g).start;
  }, moveBySentence: function(c, u, d) {
    var g = d.forward ? 1 : -1;
    return Pr(c, u, d.repeat, g);
  }, moveByScroll: function(c, u, d, g) {
    var v = c.getScrollInfo(), y = null, S = d.repeat;
    S || (S = v.clientHeight / (2 * c.defaultTextHeight()));
    var M = c.charCoords(u, "local");
    if (d.repeat = S, y = Pt.moveByDisplayLines(c, u, d, g), !y) return null;
    var A = c.charCoords(y, "local");
    return c.scrollTo(null, v.top + A.top - M.top), y;
  }, moveByWords: function(c, u, d) {
    return Ft(c, u, d.repeat, !!d.forward, !!d.wordEnd, !!d.bigWord);
  }, moveTillCharacter: function(c, u, d) {
    var g = d.repeat, v = Br(c, g, d.forward, d.selectedCharacter, u), y = d.forward ? -1 : 1;
    return xa(y, d), v ? (v.ch += y, v) : null;
  }, moveToCharacter: function(c, u, d) {
    var g = d.repeat;
    return xa(0, d), Br(c, g, d.forward, d.selectedCharacter, u) || u;
  }, moveToSymbol: function(c, u, d) {
    var g = d.repeat;
    return d.selectedCharacter && zi(c, g, d.forward, d.selectedCharacter) || u;
  }, moveToColumn: function(c, u, d, g) {
    var v = d.repeat;
    return g.lastHPos = v - 1, g.lastHSPos = c.charCoords(u, "div").left, Gn(c, v);
  }, moveToEol: function(c, u, d, g) {
    return Ot(c, u, d, g, false);
  }, moveToFirstNonWhiteSpaceCharacter: function(c, u) {
    var d = u;
    return new e(d.line, qn(c.getLine(d.line)));
  }, moveToMatchedSymbol: function(c, u) {
    for (var d = u, g = d.line, v = d.ch, y = c.getLine(g), S; v < y.length; v++) if (S = y.charAt(v), S && z(S)) {
      var M = c.getTokenTypeAt(new e(g, v + 1));
      if (M !== "string" && M !== "comment") break;
    }
    if (v < y.length) {
      var A = S === "<" || S === ">" ? /[(){}[\]<>]/ : /[(){}[\]]/, L = c.findMatchingBracket(new e(g, v), { bracketRegex: A });
      return L.to;
    } else return d;
  }, moveToStartOfLine: function(c, u) {
    return new e(u.line, 0);
  }, moveToLineOrEdgeOfDocument: function(c, u, d) {
    var g = d.forward ? c.lastLine() : c.firstLine();
    return d.repeatIsExplicit && (g = d.repeat - c.getOption("firstLineNumber")), new e(g, qn(c.getLine(g)));
  }, moveToStartOfDisplayLine: function(c) {
    return c.execCommand("goLineLeft"), c.getCursor();
  }, moveToEndOfDisplayLine: function(c) {
    c.execCommand("goLineRight");
    var u = c.getCursor();
    return u.sticky == "before" && u.ch--, u;
  }, textObjectManipulation: function(c, u, d, g) {
    var v = { "(": ")", ")": "(", "{": "}", "}": "{", "[": "]", "]": "[", "<": ">", ">": "<" }, y = { "'": true, '"': true, "`": true }, S = d.selectedCharacter || "";
    S == "b" ? S = "(" : S == "B" && (S = "{");
    var M = !d.textObjectInner, A, L;
    if (v[S]) {
      if (L = true, A = Xs(c, u, S, M), !A) {
        var _ = c.getSearchCursor(new RegExp("\\" + S, "g"), u);
        _.find() && (A = Xs(c, _.from(), S, M));
      }
    } else if (y[S]) L = true, A = Qo(c, u, S, M);
    else if (S === "W" || S === "w") for (var N = d.repeat || 1; N-- > 0; ) {
      var F = Yo(c, { inclusive: M, innerWord: !M, bigWord: S === "W", noSymbol: S === "W", multiline: true }, A && A.end);
      F && (A || (A = F), A.end = F.end);
    }
    else if (S === "p") if (A = Qs(c, u, d.repeat, 0, M), d.linewise = true, g.visualMode) g.visualLine || (g.visualLine = true);
    else {
      var H = g.inputState.operatorArgs;
      H && (H.linewise = true), A.end.line--;
    }
    else if (S === "t") A = zf(c, u, M);
    else if (S === "s") {
      var P = c.getLine(u.line);
      u.ch > 0 && ee(P[u.ch]) && (u.ch -= 1);
      var Y = cs(c, u, d.repeat, 1, M), X = cs(c, u, d.repeat, -1, M);
      $(c.getLine(X.line)[X.ch]) && $(c.getLine(Y.line)[Y.ch - 1]) && (X = { line: X.line, ch: X.ch + 1 }), A = { start: X, end: Y };
    }
    return A ? c.state.vim.visualMode ? li(c, A.start, A.end, L) : [A.start, A.end] : null;
  }, repeatLastCharacterSearch: function(c, u, d) {
    var g = te.lastCharacterSearch, v = d.repeat, y = d.forward === g.forward, S = (g.increment ? 1 : 0) * (y ? -1 : 1);
    c.moveH(-S, "char"), d.inclusive = !!y;
    var M = Br(c, v, y, g.selectedCharacter);
    return M ? (M.ch += S, M) : (c.moveH(S, "char"), u);
  } };
  function ur(c, u) {
    Pt[c] = u;
  }
  function Re(c, u) {
    for (var d = [], g = 0; g < u; g++) d.push(c);
    return d;
  }
  var ue = { change: function(c, u, d) {
    var g, v, y = c.state.vim, S = d[0].anchor, M = d[0].head;
    if (y.visualMode) if (u.fullLine) M.ch = Number.MAX_VALUE, M.line--, c.setSelection(S, M), v = c.getSelection(), c.replaceSelection(""), g = S;
    else {
      v = c.getSelection();
      var _ = Re("", d.length);
      c.replaceSelections(_), g = Ct(d[0].head, d[0].anchor);
    }
    else {
      v = c.getRange(S, M);
      var A = y.lastEditInputState;
      if ((A == null ? void 0 : A.motion) == "moveByWords" && !$(v)) {
        var L = /\s+$/.exec(v);
        L && A.motionArgs && A.motionArgs.forward && (M = it(M, 0, -L[0].length), v = v.slice(0, -L[0].length));
      }
      u.linewise && (S = new e(S.line, qn(c.getLine(S.line))), M.line > S.line && (M = new e(M.line - 1, Number.MAX_VALUE))), c.replaceRange("", S, M), g = S;
    }
    te.registerController.pushText(u.registerName, "change", v, u.linewise, d.length > 1), dt.enterInsertMode(c, { head: g }, c.state.vim);
  }, delete: function(c, u, d) {
    var g, v, y = c.state.vim;
    if (y.visualBlock) {
      v = c.getSelection();
      var A = Re("", d.length);
      c.replaceSelections(A), g = Ct(d[0].head, d[0].anchor);
    } else {
      var S = d[0].anchor, M = d[0].head;
      u.linewise && M.line != c.firstLine() && S.line == c.lastLine() && S.line == M.line - 1 && (S.line == c.firstLine() ? S.ch = 0 : S = new e(S.line - 1, It(c, S.line - 1))), v = c.getRange(S, M), c.replaceRange("", S, M), g = S, u.linewise && (g = Pt.moveToFirstNonWhiteSpaceCharacter(c, S));
    }
    return te.registerController.pushText(u.registerName, "delete", v, u.linewise, y.visualBlock), St(c, g);
  }, indent: function(c, u, d) {
    var g = c.state.vim, v = g.visualMode && u.repeat || 1;
    if (g.visualBlock) {
      for (var y = c.getOption("tabSize"), S = c.getOption("indentWithTabs") ? "	" : " ".repeat(y), M, A = d.length - 1; A >= 0; A--) if (M = Ct(d[A].anchor, d[A].head), u.indentRight) c.replaceRange(S.repeat(v), M, M);
      else {
        for (var L = c.getLine(M.line), _ = 0, N = 0; N < v; N++) {
          var F = L[M.ch + _];
          if (F == "	") _++;
          else if (F == " ") {
            _++;
            for (var H = 1; H < S.length && (F = L[M.ch + _], F === " "); H++) _++;
          } else break;
        }
        c.replaceRange("", M, it(M, 0, _));
      }
      return M;
    } else if (c.indentMore) for (var N = 0; N < v; N++) u.indentRight ? c.indentMore() : c.indentLess();
    else {
      var P = d[0].anchor.line, Y = g.visualBlock ? d[d.length - 1].anchor.line : d[0].head.line;
      u.linewise && Y--;
      for (var A = P; A <= Y; A++) for (var N = 0; N < v; N++) c.indentLine(A, u.indentRight);
    }
    return Pt.moveToFirstNonWhiteSpaceCharacter(c, d[0].anchor);
  }, indentAuto: function(c, u, d) {
    return c.execCommand("indentAuto"), Pt.moveToFirstNonWhiteSpaceCharacter(c, d[0].anchor);
  }, hardWrap: function(c, u, d, g) {
    if (c.hardWrap) {
      var v = d[0].anchor.line, y = d[0].head.line;
      u.linewise && y--;
      var S = c.hardWrap({ from: v, to: y });
      return S > v && u.linewise && S--, u.keepCursor ? g : new e(S, 0);
    }
  }, changeCase: function(c, u, d, g, v) {
    for (var y = c.getSelections(), S = [], M = u.toLower, A = 0; A < y.length; A++) {
      var L = y[A], _ = "";
      if (M === true) _ = L.toLowerCase();
      else if (M === false) _ = L.toUpperCase();
      else for (var N = 0; N < L.length; N++) {
        var F = L.charAt(N);
        _ += W(F) ? F.toLowerCase() : F.toUpperCase();
      }
      S.push(_);
    }
    return c.replaceSelections(S), u.shouldMoveCursor ? v : !c.state.vim.visualMode && u.linewise && d[0].anchor.line + 1 == d[0].head.line ? Pt.moveToFirstNonWhiteSpaceCharacter(c, g) : u.linewise ? g : Ct(d[0].anchor, d[0].head);
  }, yank: function(c, u, d, g) {
    var v = c.state.vim, y = c.getSelection(), S = v.visualMode ? Ct(v.sel.anchor, v.sel.head, d[0].head, d[0].anchor) : g;
    return te.registerController.pushText(u.registerName, "yank", y, u.linewise, v.visualBlock), S;
  }, rot13: function(c, u, d, g, v) {
    for (var y = c.getSelections(), S = [], M = 0; M < y.length; M++) {
      const A = y[M].split("").map((L) => {
        const _ = L.charCodeAt(0);
        return _ >= 65 && _ <= 90 ? String.fromCharCode(65 + (_ - 65 + 13) % 26) : _ >= 97 && _ <= 122 ? String.fromCharCode(97 + (_ - 97 + 13) % 26) : L;
      }).join("");
      S.push(A);
    }
    return c.replaceSelections(S), u.shouldMoveCursor ? v : !c.state.vim.visualMode && u.linewise && d[0].anchor.line + 1 == d[0].head.line ? Pt.moveToFirstNonWhiteSpaceCharacter(c, g) : u.linewise ? g : Ct(d[0].anchor, d[0].head);
  } };
  function nt(c, u) {
    ue[c] = u;
  }
  var dt = { jumpListWalk: function(c, u, d) {
    if (!d.visualMode) {
      var g = u.repeat || 1, v = u.forward, y = te.jumpList, S = y.move(c, v ? g : -g), M = S ? S.find() : void 0;
      M = M || c.getCursor(), c.setCursor(M);
    }
  }, scroll: function(c, u, d) {
    if (!d.visualMode) {
      var g = u.repeat || 1, v = c.defaultTextHeight(), y = c.getScrollInfo().top, S = v * g, M = u.forward ? y + S : y - S, A = Ze(c.getCursor()), L = c.charCoords(A, "local");
      if (u.forward) M > L.top ? (A.line += (M - L.top) / v, A.line = Math.ceil(A.line), c.setCursor(A), L = c.charCoords(A, "local"), c.scrollTo(null, L.top)) : c.scrollTo(null, M);
      else {
        var _ = M + c.getScrollInfo().clientHeight;
        _ < L.bottom ? (A.line -= (L.bottom - _) / v, A.line = Math.floor(A.line), c.setCursor(A), L = c.charCoords(A, "local"), c.scrollTo(null, L.bottom - c.getScrollInfo().clientHeight)) : c.scrollTo(null, M);
      }
    }
  }, scrollToCursor: function(c, u) {
    var d = c.getCursor().line, g = c.charCoords(new e(d, 0), "local"), v = c.getScrollInfo().clientHeight, y = g.top;
    switch (u.position) {
      case "center":
        y = g.bottom - v / 2;
        break;
      case "bottom":
        var S = new e(d, c.getLine(d).length - 1), M = c.charCoords(S, "local"), A = M.bottom - y;
        y = y - v + A;
        break;
    }
    c.scrollTo(null, y);
  }, replayMacro: function(c, u, d) {
    var g = u.selectedCharacter || "", v = u.repeat || 1, y = te.macroModeState;
    for (g == "@" ? g = y.latestRegister || "" : y.latestRegister = g; v--; ) Fr(c, d, y, g);
  }, enterMacroRecordMode: function(c, u) {
    var d = te.macroModeState, g = u.selectedCharacter;
    te.registerController.isValidRegister(g) && d.enterMacroRecordMode(c, g);
  }, toggleOverwrite: function(c) {
    c.state.overwrite ? (c.toggleOverwrite(false), c.setOption("keyMap", "vim-insert"), n.signal(c, "vim-mode-change", { mode: "insert" })) : (c.toggleOverwrite(true), c.setOption("keyMap", "vim-replace"), n.signal(c, "vim-mode-change", { mode: "replace" }));
  }, enterInsertMode: function(c, u, d) {
    if (!c.getOption("readOnly")) {
      d.insertMode = true, d.insertModeRepeat = u && u.repeat || 1;
      var g = u ? u.insertAt : null, v = d.sel, y = u.head || c.getCursor("head"), S = c.listSelections().length;
      if (g == "eol") y = new e(y.line, It(c, y.line));
      else if (g == "bol") y = new e(y.line, 0);
      else if (g == "charAfter") {
        var M = t(c, y, it(y, 0, 1));
        y = M.end;
      } else if (g == "firstNonBlank") {
        var M = t(c, y, Pt.moveToFirstNonWhiteSpaceCharacter(c, y));
        y = M.end;
      } else if (g == "startOfSelectedArea") {
        if (!d.visualMode) return;
        d.visualBlock ? (y = new e(Math.min(v.head.line, v.anchor.line), Math.min(v.head.ch, v.anchor.ch)), S = Math.abs(v.head.line - v.anchor.line) + 1) : v.head.line < v.anchor.line ? y = v.head : y = new e(v.anchor.line, 0);
      } else if (g == "endOfSelectedArea") {
        if (!d.visualMode) return;
        d.visualBlock ? (y = new e(Math.min(v.head.line, v.anchor.line), Math.max(v.head.ch, v.anchor.ch) + 1), S = Math.abs(v.head.line - v.anchor.line) + 1) : v.head.line >= v.anchor.line ? y = it(v.head, 0, 1) : y = new e(v.anchor.line, 0);
      } else if (g == "inplace") {
        if (d.visualMode) return;
      } else g == "lastEdit" && (y = io(c) || y);
      c.setOption("disableInput", false), u && u.replace ? (c.toggleOverwrite(true), c.setOption("keyMap", "vim-replace"), n.signal(c, "vim-mode-change", { mode: "replace" })) : (c.toggleOverwrite(false), c.setOption("keyMap", "vim-insert"), n.signal(c, "vim-mode-change", { mode: "insert" })), te.macroModeState.isPlaying || (c.on("change", mr), d.insertEnd && d.insertEnd.clear(), d.insertEnd = c.setBookmark(y, { insertLeft: true }), n.on(c.getInputField(), "keydown", rt)), d.visualMode && rn(c), ba(c, y, S);
    }
  }, toggleVisualMode: function(c, u, d) {
    var g = u.repeat, v = c.getCursor(), y;
    if (d.visualMode) d.visualLine != !!u.linewise || d.visualBlock != !!u.blockwise ? (d.visualLine = !!u.linewise, d.visualBlock = !!u.blockwise, n.signal(c, "vim-mode-change", { mode: "visual", subMode: d.visualLine ? "linewise" : d.visualBlock ? "blockwise" : "" }), Un(c)) : rn(c);
    else {
      d.visualMode = true, d.visualLine = !!u.linewise, d.visualBlock = !!u.blockwise, y = St(c, new e(v.line, v.ch + g - 1));
      var S = t(c, v, y);
      d.sel = { anchor: S.start, head: S.end }, n.signal(c, "vim-mode-change", { mode: "visual", subMode: d.visualLine ? "linewise" : d.visualBlock ? "blockwise" : "" }), Un(c), Mn(c, d, "<", Ct(v, y)), Mn(c, d, ">", jn(v, y));
    }
  }, reselectLastSelection: function(c, u, d) {
    var g = d.lastSelection;
    if (d.visualMode && $t(c, d), g) {
      var v = g.anchorMark.find(), y = g.headMark.find();
      if (!v || !y) return;
      d.sel = { anchor: v, head: y }, d.visualMode = true, d.visualLine = g.visualLine, d.visualBlock = g.visualBlock, Un(c), Mn(c, d, "<", Ct(v, y)), Mn(c, d, ">", jn(v, y)), n.signal(c, "vim-mode-change", { mode: "visual", subMode: d.visualLine ? "linewise" : d.visualBlock ? "blockwise" : "" });
    }
  }, joinLines: function(c, u, d) {
    var g, v;
    if (d.visualMode) {
      if (g = c.getCursor("anchor"), v = c.getCursor("head"), tt(v, g)) {
        var y = v;
        v = g, g = y;
      }
      v.ch = It(c, v.line) - 1;
    } else {
      var S = Math.max(u.repeat, 2);
      g = c.getCursor(), v = St(c, new e(g.line + S - 1, 1 / 0));
    }
    for (var M = 0, A = g.line; A < v.line; A++) {
      M = It(c, g.line);
      var L = "", _ = 0;
      if (!u.keepSpaces) {
        var N = c.getLine(g.line + 1);
        _ = N.search(/\S/), _ == -1 ? _ = N.length : L = " ";
      }
      c.replaceRange(L, new e(g.line, M), new e(g.line + 1, _));
    }
    var F = St(c, new e(g.line, M));
    d.visualMode && rn(c, false), c.setCursor(F);
  }, newLineAndEnterInsertMode: function(c, u, d) {
    d.insertMode = true;
    var g = Ze(c.getCursor());
    if (g.line === c.firstLine() && !u.after) c.replaceRange(`
`, new e(c.firstLine(), 0)), c.setCursor(c.firstLine(), 0);
    else {
      g.line = u.after ? g.line : g.line - 1, g.ch = It(c, g.line), c.setCursor(g);
      var v = n.commands.newlineAndIndentContinueComment || n.commands.newlineAndIndent;
      v(c);
    }
    this.enterInsertMode(c, { repeat: u.repeat }, d);
  }, paste: function(c, u, d) {
    var g = te.registerController.getRegister(u.registerName);
    if (u.registerName === "+") navigator.clipboard.readText().then((y) => {
      this.continuePaste(c, u, d, y, g);
    });
    else {
      var v = g.toString();
      this.continuePaste(c, u, d, v, g);
    }
  }, continuePaste: function(c, u, d, g, v) {
    var y = Ze(c.getCursor());
    if (g) {
      if (u.matchIndent) {
        var S = c.getOption("tabSize"), M = function(Lt) {
          var pn = Lt.split("	").length - 1, Mi = Lt.split(" ").length - 1;
          return pn * S + Mi * 1;
        }, A = c.getLine(c.getCursor().line), L = M(A.match(/^\s*/)[0]), _ = g.replace(/\n$/, ""), N = g !== _, F = M(g.match(/^\s*/)[0]), g = _.replace(/^\s*/gm, function(Lt) {
          var pn = L + (M(Lt) - F);
          if (pn < 0) return "";
          if (c.getOption("indentWithTabs")) {
            var Mi = Math.floor(pn / S);
            return Array(Mi + 1).join("	");
          } else return Array(pn + 1).join(" ");
        });
        g += N ? `
` : "";
      }
      u.repeat > 1 && (g = Array(u.repeat + 1).join(g));
      var H = v.linewise, P = v.blockwise, Y = P ? g.split(`
`) : void 0;
      if (Y) {
        H && Y.pop();
        for (var X = 0; X < Y.length; X++) Y[X] = Y[X] == "" ? " " : Y[X];
        y.ch += u.after ? 1 : 0, y.ch = Math.min(It(c, y.line), y.ch);
      } else H ? d.visualMode ? g = d.visualLine ? g.slice(0, -1) : `
` + g.slice(0, g.length - 1) + `
` : u.after ? (g = `
` + g.slice(0, g.length - 1), y.ch = It(c, y.line)) : y.ch = 0 : y.ch += u.after ? 1 : 0;
      var we;
      if (d.visualMode) {
        d.lastPastedText = g;
        var ce, Ce = dr(c), Oe = Ce[0], Be = Ce[1], st = c.getSelection(), vt = c.listSelections(), Pe = new Array(vt.length).join("1").split("1");
        d.lastSelection && (ce = d.lastSelection.headMark.find()), te.registerController.unnamedRegister.setText(st), P ? (c.replaceSelections(Pe), Be = new e(Oe.line + g.length - 1, Oe.ch), c.setCursor(Oe), ya(c, Be), c.replaceSelections(g), we = Oe) : d.visualBlock ? (c.replaceSelections(Pe), c.setCursor(Oe), c.replaceRange(g, Oe, Oe), we = Oe) : (c.replaceRange(g, Oe, Be), we = c.posFromIndex(c.indexFromPos(Oe) + g.length - 1)), ce && (d.lastSelection.headMark = c.setBookmark(ce)), H && (we.ch = 0);
      } else if (P && Y) {
        c.setCursor(y);
        for (var X = 0; X < Y.length; X++) {
          var ke = y.line + X;
          ke > c.lastLine() && c.replaceRange(`
`, new e(ke, 0));
          var je = It(c, ke);
          je < y.ch && Wf(c, ke, y.ch);
        }
        c.setCursor(y), ya(c, new e(y.line + Y.length - 1, y.ch)), c.replaceSelections(Y), we = y;
      } else if (c.replaceRange(g, y), H) {
        var ke = u.after ? y.line + 1 : y.line;
        we = new e(ke, qn(c.getLine(ke)));
      } else we = Ze(y), /\n/.test(g) || (we.ch += g.length - (u.after ? 1 : 0));
      d.visualMode && rn(c, false), c.setCursor(we);
    }
  }, undo: function(c, u) {
    c.operation(function() {
      Fn(c, n.commands.undo, u.repeat)(), c.setCursor(St(c, c.getCursor("start")));
    });
  }, redo: function(c, u) {
    Fn(c, n.commands.redo, u.repeat)();
  }, setRegister: function(c, u, d) {
    d.inputState.registerName = u.selectedCharacter;
  }, insertRegister: function(c, u, d) {
    var g = u.selectedCharacter, v = te.registerController.getRegister(g), y = v && v.toString();
    y && c.replaceSelection(y);
  }, oneNormalCommand: function(c, u, d) {
    Si(c, true), d.insertModeReturn = true, n.on(c, "vim-command-done", function g() {
      d.visualMode || (d.insertModeReturn && (d.insertModeReturn = false, d.insertMode || dt.enterInsertMode(c, {}, d)), n.off(c, "vim-command-done", g));
    });
  }, setMark: function(c, u, d) {
    var g = u.selectedCharacter;
    g && Mn(c, d, g, c.getCursor());
  }, replace: function(c, u, d) {
    var g = u.selectedCharacter || "", v = c.getCursor(), y, S, M = c.listSelections();
    if (d.visualMode) v = c.getCursor("start"), S = c.getCursor("end");
    else {
      var A = c.getLine(v.line);
      y = v.ch + u.repeat, y > A.length && (y = A.length), S = new e(v.line, y);
    }
    var L = t(c, v, S);
    if (v = L.start, S = L.end, g == `
`) d.visualMode || c.replaceRange("", v, S), (n.commands.newlineAndIndentContinueComment || n.commands.newlineAndIndent)(c);
    else {
      var _ = c.getRange(v, S);
      if (_ = _.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, g), _ = _.replace(/[^\n]/g, g), d.visualBlock) {
        var N = new Array(c.getOption("tabSize") + 1).join(" ");
        _ = c.getSelection(), _ = _.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, g);
        var F = _.replace(/\t/g, N).replace(/[^\n]/g, g).split(`
`);
        c.replaceSelections(F);
      } else c.replaceRange(_, v, S);
      d.visualMode ? (v = tt(M[0].anchor, M[0].head) ? M[0].anchor : M[0].head, c.setCursor(v), rn(c, false)) : c.setCursor(it(S, 0, -1));
    }
  }, incrementNumberToken: function(c, u) {
    for (var d = c.getCursor(), g = c.getLine(d.line), v = /(-?)(?:(0x)([\da-f]+)|(0b|0|)(\d+))/gi, y, S, M, A; (y = v.exec(g)) !== null && (S = y.index, M = S + y[0].length, !(d.ch < M)); ) ;
    if (!(!u.backtrack && M <= d.ch)) {
      if (y) {
        var L = y[2] || y[4], _ = y[3] || y[5], N = u.increase ? 1 : -1, F = { "0b": 2, 0: 8, "": 10, "0x": 16 }[L.toLowerCase()], H = parseInt(y[1] + _, F) + N * u.repeat;
        A = H.toString(F);
        var P = L ? new Array(_.length - A.length + 1 + y[1].length).join("0") : "";
        A.charAt(0) === "-" ? A = "-" + L + P + A.substr(1) : A = L + P + A;
        var Y = new e(d.line, S), X = new e(d.line, M);
        c.replaceRange(A, Y, X);
      } else return;
      c.setCursor(new e(d.line, S + A.length - 1));
    }
  }, repeatLastEdit: function(c, u, d) {
    var g = d.lastEditInputState;
    if (g) {
      var v = u.repeat;
      v && u.repeatIsExplicit ? g.repeatOverride = v : v = g.repeatOverride || v, ct(c, d, v, false);
    }
  }, indent: function(c, u) {
    c.indentLine(c.getCursor().line, u.indentRight);
  }, exitInsertMode: function(c, u) {
    Si(c);
  } };
  function Dr(c, u) {
    dt[c] = u;
  }
  function St(c, u, d) {
    var g = c.state.vim, v = g.insertMode || g.visualMode, y = Math.min(Math.max(c.firstLine(), u.line), c.lastLine()), S = c.getLine(y), M = S.length - 1 + +!!v, A = Math.min(Math.max(0, u.ch), M), L = S.charCodeAt(A);
    if (56320 <= L && L <= 57343) {
      var _ = 1;
      d && d.line == y && d.ch > A && (_ = -1), A += _, A > M && (A -= 2);
    }
    return new e(y, A);
  }
  function kn(c) {
    var u = {};
    for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (u[d] = c[d]);
    return u;
  }
  function it(c, u, d) {
    return typeof u == "object" && (d = u.ch, u = u.line), new e(c.line + u, c.ch + d);
  }
  function Sn(c, u, d, g) {
    g.operator && (d = "operatorPending");
    for (var v, y = [], S = [], M = $e ? u.length - s : 0, A = M; A < u.length; A++) {
      var L = u[A];
      d == "insert" && L.context != "insert" || L.context && L.context != d || g.operator && L.type == "action" || !(v = Nn(c, L.keys)) || (v == "partial" && y.push(L), v == "full" && S.push(L));
    }
    return { partial: y, full: S };
  }
  function Nn(c, u) {
    const d = u.slice(-11) == "<character>", g = u.slice(-10) == "<register>";
    if (d || g) {
      var v = u.length - (d ? 11 : 10), y = c.slice(0, v), S = u.slice(0, v);
      return y == S && c.length > v ? "full" : S.indexOf(y) == 0 ? "partial" : false;
    } else return c == u ? "full" : u.indexOf(c) == 0 ? "partial" : false;
  }
  function dn(c) {
    var u = /^.*(<[^>]+>)$/.exec(c), d = u ? u[1] : c.slice(-1);
    if (d.length > 1) switch (d) {
      case "<CR>":
      case "<S-CR>":
        d = `
`;
        break;
      case "<Space>":
      case "<S-Space>":
        d = " ";
        break;
      default:
        d = "";
        break;
    }
    return d;
  }
  function Fn(c, u, d) {
    return function() {
      for (var g = 0; g < d; g++) u(c);
    };
  }
  function Ze(c) {
    return new e(c.line, c.ch);
  }
  function nn(c, u) {
    return c.ch == u.ch && c.line == u.line;
  }
  function tt(c, u) {
    return c.line < u.line || c.line == u.line && c.ch < u.ch;
  }
  function Ct(c, u) {
    return arguments.length > 2 && (u = Ct.apply(void 0, Array.prototype.slice.call(arguments, 1))), tt(c, u) ? c : u;
  }
  function jn(c, u) {
    return arguments.length > 2 && (u = jn.apply(void 0, Array.prototype.slice.call(arguments, 1))), tt(c, u) ? u : c;
  }
  function Cn(c, u, d) {
    var g = tt(c, u), v = tt(u, d);
    return g && v;
  }
  function It(c, u) {
    return c.getLine(u).length;
  }
  function Js(c) {
    return c.trim ? c.trim() : c.replace(/^\s+|\s+$/g, "");
  }
  function Hf(c) {
    return c.replace(/([.?*+$\[\]\/\\(){}|\-])/g, "\\$1");
  }
  function Wf(c, u, d) {
    var g = It(c, u), v = new Array(d - g + 1).join(" ");
    c.setCursor(new e(u, g)), c.replaceRange(v, c.getCursor());
  }
  function ya(c, u) {
    var d = [], g = c.listSelections(), v = Ze(c.clipPos(u)), y = !nn(u, v), S = c.getCursor("head"), M = Vf(g, S), A = nn(g[M].head, g[M].anchor), L = g.length - 1, _ = L - M > M ? L : 0, N = g[_].anchor, F = Math.min(N.line, v.line), H = Math.max(N.line, v.line), P = N.ch, Y = v.ch, X = g[_].head.ch - P, we = Y - P;
    X > 0 && we <= 0 ? (P++, y || Y--) : X < 0 && we >= 0 ? (P--, A || Y++) : X < 0 && we == -1 && (P--, Y++);
    for (var ce = F; ce <= H; ce++) {
      var Ce = { anchor: new e(ce, P), head: new e(ce, Y) };
      d.push(Ce);
    }
    return c.setSelections(d), u.ch = Y, N.ch = P, N;
  }
  function ba(c, u, d) {
    for (var g = [], v = 0; v < d; v++) {
      var y = it(u, v, 0);
      g.push({ anchor: y, head: y });
    }
    c.setSelections(g, 0);
  }
  function Vf(c, u, d) {
    for (var g = 0; g < c.length; g++) {
      var v = nn(c[g].anchor, u), y = nn(c[g].head, u);
      if (v || y) return g;
    }
    return -1;
  }
  function dr(c, u) {
    var d = c.listSelections(), g = d[0], v = d[d.length - 1], y = tt(g.anchor, g.head) ? g.anchor : g.head, S = tt(v.anchor, v.head) ? v.head : v.anchor;
    return [y, S];
  }
  function $t(c, u) {
    var d = u.sel.anchor, g = u.sel.head;
    u.lastPastedText && (g = c.posFromIndex(c.indexFromPos(d) + u.lastPastedText.length), u.lastPastedText = void 0), u.lastSelection = { anchorMark: c.setBookmark(d), headMark: c.setBookmark(g), anchor: Ze(d), head: Ze(g), visualMode: u.visualMode, visualLine: u.visualLine, visualBlock: u.visualBlock };
  }
  function li(c, u, d, g) {
    var v = c.state.vim.sel, y = g ? u : v.head, S = g ? u : v.anchor, M;
    return tt(d, u) && (M = d, d = u, u = M), tt(y, S) ? (y = Ct(u, y), S = jn(S, d)) : (S = Ct(u, S), y = jn(y, d), y = it(y, 0, -1), y.ch == -1 && y.line != c.firstLine() && (y = new e(y.line - 1, It(c, y.line - 1)))), [S, y];
  }
  function Un(c, u, d) {
    var g = c.state.vim;
    u = u || g.sel, d || (d = g.visualLine ? "line" : g.visualBlock ? "block" : "char");
    var v = Wi(c, u, d);
    c.setSelections(v.ranges, v.primary);
  }
  function Wi(c, u, d, g) {
    var v = Ze(u.head), y = Ze(u.anchor);
    if (d == "char") {
      var S = !g && !tt(u.head, u.anchor) ? 1 : 0, M = tt(u.head, u.anchor) ? 1 : 0;
      return v = it(u.head, 0, S), y = it(u.anchor, 0, M), { ranges: [{ anchor: y, head: v }], primary: 0 };
    } else if (d == "line") {
      if (tt(u.head, u.anchor)) v.ch = 0, y.ch = It(c, y.line);
      else {
        y.ch = 0;
        var A = c.lastLine();
        v.line > A && (v.line = A), v.ch = It(c, v.line);
      }
      return { ranges: [{ anchor: y, head: v }], primary: 0 };
    } else if (d == "block") {
      var L = Math.min(y.line, v.line), _ = y.ch, N = Math.max(y.line, v.line), F = v.ch;
      _ < F ? F += 1 : _ += 1;
      for (var H = N - L + 1, P = v.line == L ? 0 : H - 1, Y = [], X = 0; X < H; X++) Y.push({ anchor: new e(L + X, _), head: new e(L + X, F) });
      return { ranges: Y, primary: P };
    }
    throw "never happens";
  }
  function Hn(c) {
    var u = c.getCursor("head");
    return c.getSelection().length == 1 && (u = Ct(u, c.getCursor("anchor"))), u;
  }
  function rn(c, u) {
    var d = c.state.vim;
    u !== false && c.setCursor(St(c, d.sel.head)), $t(c, d), d.visualMode = false, d.visualLine = false, d.visualBlock = false, d.insertMode || n.signal(c, "vim-mode-change", { mode: "normal" });
  }
  function Rr(c, u, d) {
    var g = c.getRange(u, d);
    if (/\n\s*$/.test(g)) {
      var v = g.split(`
`);
      v.pop();
      for (var y = v.pop(); v.length > 0 && y && $(y); y = v.pop()) d.line--, d.ch = 0;
      y ? (d.line--, d.ch = It(c, d.line)) : d.ch = 0;
    }
  }
  function wa(c, u, d) {
    u.ch = 0, d.ch = 0, d.line++;
  }
  function qn(c) {
    if (!c) return 0;
    var u = c.search(/\S/);
    return u == -1 ? c.length : u;
  }
  function Yo(c, { inclusive: u, innerWord: d, bigWord: g, noSymbol: v, multiline: y }, S) {
    var M = S || Hn(c), A = c.getLine(M.line), L = A, _ = M.line, N = _, F = M.ch, H, P = v ? m[0] : b[0];
    if (d && /\s/.test(A.charAt(F))) P = function(Oe) {
      return /\s/.test(Oe);
    };
    else {
      for (; !P(A.charAt(F)); ) if (F++, F >= A.length) {
        if (!y) return null;
        F--, H = Nt(c, M, true, g, true);
        break;
      }
      g ? P = b[0] : (P = m[0], P(A.charAt(F)) || (P = m[1]));
    }
    for (var Y = F, X = F; P(A.charAt(X)) && X >= 0; ) X--;
    if (X++, H) Y = H.to, N = H.line, L = c.getLine(N), !L && Y == 0 && Y++;
    else for (; P(A.charAt(Y)) && Y < A.length; ) Y++;
    if (u) {
      var we = Y, ce = M.ch <= X && /\s/.test(A.charAt(M.ch));
      if (!ce) for (; /\s/.test(L.charAt(Y)) && Y < L.length; ) Y++;
      if (we == Y || ce) {
        for (var Ce = X; /\s/.test(A.charAt(X - 1)) && X > 0; ) X--;
        !X && !ce && (X = Ce);
      }
    }
    return { start: new e(_, X), end: new e(N, Y) };
  }
  function zf(c, u, d) {
    var g = u;
    if (!n.findMatchingTag || !n.findEnclosingTag) return { start: g, end: g };
    var v = n.findMatchingTag(c, u) || n.findEnclosingTag(c, u);
    return !v || !v.open || !v.close ? { start: g, end: g } : d ? { start: v.open.from, end: v.close.to } : { start: v.open.to, end: v.close.from };
  }
  function Vi(c, u, d) {
    nn(u, d) || te.jumpList.add(c, u, d);
  }
  function xa(c, u) {
    te.lastCharacterSearch.increment = c, te.lastCharacterSearch.forward = u.forward, te.lastCharacterSearch.selectedCharacter = u.selectedCharacter;
  }
  var as = { "(": "bracket", ")": "bracket", "{": "bracket", "}": "bracket", "[": "section", "]": "section", "*": "comment", "/": "comment", m: "method", M: "method", "#": "preprocess" }, Jo = { bracket: { isComplete: function(c) {
    if (c.nextCh === c.symb) {
      if (c.depth++, c.depth >= 1) return true;
    } else c.nextCh === c.reverseSymb && c.depth--;
    return false;
  } }, section: { init: function(c) {
    c.curMoveThrough = true, c.symb = (c.forward ? "]" : "[") === c.symb ? "{" : "}";
  }, isComplete: function(c) {
    return c.index === 0 && c.nextCh === c.symb;
  } }, comment: { isComplete: function(c) {
    var u = c.lastCh === "*" && c.nextCh === "/";
    return c.lastCh = c.nextCh, u;
  } }, method: { init: function(c) {
    c.symb = c.symb === "m" ? "{" : "}", c.reverseSymb = c.symb === "{" ? "}" : "{";
  }, isComplete: function(c) {
    return c.nextCh === c.symb;
  } }, preprocess: { init: function(c) {
    c.index = 0;
  }, isComplete: function(c) {
    var _a;
    if (c.nextCh === "#") {
      var u = (_a = c.lineText.match(/^#(\w+)/)) == null ? void 0 : _a[1];
      if (u === "endif") {
        if (c.forward && c.depth === 0) return true;
        c.depth++;
      } else if (u === "if") {
        if (!c.forward && c.depth === 0) return true;
        c.depth--;
      }
      if (u === "else" && c.depth === 0) return true;
    }
    return false;
  } } };
  function zi(c, u, d, g) {
    var v = Ze(c.getCursor()), y = d ? 1 : -1, S = d ? c.lineCount() : -1, M = v.ch, A = v.line, L = c.getLine(A), _ = { lineText: L, nextCh: L.charAt(M), lastCh: null, index: M, symb: g, reverseSymb: (d ? { ")": "(", "}": "{" } : { "(": ")", "{": "}" })[g], forward: d, depth: 0, curMoveThrough: false }, N = as[g];
    if (!N) return v;
    var F = Jo[N].init, H = Jo[N].isComplete;
    for (F && F(_); A !== S && u; ) {
      if (_.index += y, _.nextCh = _.lineText.charAt(_.index), !_.nextCh) {
        if (A += y, _.lineText = c.getLine(A) || "", y > 0) _.index = 0;
        else {
          var P = _.lineText.length;
          _.index = P > 0 ? P - 1 : 0;
        }
        _.nextCh = _.lineText.charAt(_.index);
      }
      H(_) && (v.line = A, v.ch = _.index, u--);
    }
    return _.nextCh || _.curMoveThrough ? new e(A, _.index) : v;
  }
  function Nt(c, u, d, g, v) {
    var y = u.line, S = u.ch, M = c.getLine(y), A = d ? 1 : -1, L = g ? b : m;
    if (v && M == "") {
      if (y += A, M = c.getLine(y), !R(c, y)) return null;
      S = d ? 0 : M.length;
    }
    for (; ; ) {
      if (v && M == "") return { from: 0, to: 0, line: y };
      for (var _ = A > 0 ? M.length : -1, N = _, F = _; S != _; ) {
        for (var H = false, P = 0; P < L.length && !H; ++P) if (L[P](M.charAt(S))) {
          for (N = S; S != _ && L[P](M.charAt(S)); ) S += A;
          if (F = S, H = N != F, N == u.ch && y == u.line && F == N + A) continue;
          return { from: Math.min(N, F + 1), to: Math.max(N, F), line: y };
        }
        H || (S += A);
      }
      if (y += A, !R(c, y)) return null;
      M = c.getLine(y), S = A > 0 ? 0 : M.length;
    }
  }
  function Ft(c, u, d, g, v, y) {
    var S = Ze(u), M = [];
    (g && !v || !g && v) && d++;
    for (var A = !(g && v), L = 0; L < d; L++) {
      var _ = Nt(c, u, g, y, A);
      if (!_) {
        var N = It(c, c.lastLine());
        M.push(g ? { line: c.lastLine(), from: N, to: N } : { line: 0, from: 0, to: 0 });
        break;
      }
      M.push(_), u = new e(_.line, g ? _.to - 1 : _.from);
    }
    var F = M.length != d, H = M[0], P = M.pop();
    return g && !v ? (!F && (H.from != S.ch || H.line != S.line) && (P = M.pop()), P && new e(P.line, P.from)) : g && v ? P && new e(P.line, P.to - 1) : !g && v ? (!F && (H.to != S.ch || H.line != S.line) && (P = M.pop()), P && new e(P.line, P.to)) : P && new e(P.line, P.from);
  }
  function Ot(c, u, d, g, v) {
    var y = u, S = new e(y.line + d.repeat - 1, 1 / 0), M = c.clipPos(S);
    return M.ch--, v || (g.lastHPos = 1 / 0, g.lastHSPos = c.charCoords(M, "div").left), S;
  }
  function Br(c, u, d, g, v) {
    if (g) {
      for (var y = v || c.getCursor(), S = y.ch, M, A = 0; A < u; A++) {
        var L = c.getLine(y.line);
        if (M = ka(S, L, g, d), M == -1) return;
        S = M;
      }
      if (M != null) return new e(c.getCursor().line, M);
    }
  }
  function Gn(c, u) {
    var d = c.getCursor().line;
    return St(c, new e(d, u - 1));
  }
  function Mn(c, u, d, g) {
    !le(d, x) && !E.test(d) || (u.marks[d] && u.marks[d].clear(), u.marks[d] = c.setBookmark(g));
  }
  function ka(c, u, d, g, v) {
    var y;
    return g ? y = u.indexOf(d, c + 1) : y = u.lastIndexOf(d, c - 1), y;
  }
  function Qs(c, u, d, g, v) {
    var y = u.line, S = c.firstLine(), M = c.lastLine(), A, L, _ = y;
    function N(X) {
      return !c.getLine(X);
    }
    function F(X, we, ce) {
      return ce ? N(X) != N(X + we) : !N(X) && N(X + we);
    }
    if (g) {
      for (; S <= _ && _ <= M && d > 0; ) F(_, g) && d--, _ += g;
      return { start: new e(_, 0), end: u };
    }
    var H = c.state.vim;
    if (H.visualLine && F(y, 1, true)) {
      var P = H.sel.anchor;
      F(P.line, -1, true) && (!v || P.line != y) && (y += 1);
    }
    var Y = N(y);
    for (_ = y; _ <= M && d; _++) F(_, 1, true) && (!v || N(_) != Y) && d--;
    for (L = new e(_, 0), _ > M && !Y ? Y = true : v = false, _ = y; _ > S && !((!v || N(_) == Y || _ == y) && F(_, -1, true)); _--) ;
    return A = new e(_, 0), { start: A, end: L };
  }
  function cs(c, u, d, g, v) {
    function y(L) {
      L.line !== null && (L.pos + L.dir < 0 || L.pos + L.dir >= L.line.length ? L.line = null : L.pos += L.dir);
    }
    function S(L, _, N, F) {
      var H = L.getLine(_), P = { line: H, ln: _, pos: N, dir: F };
      if (P.line === "") return { ln: P.ln, pos: P.pos };
      var Y = P.pos;
      for (y(P); P.line !== null; ) {
        if (Y = P.pos, ee(P.line[P.pos])) if (v) {
          for (y(P); P.line !== null && $(P.line[P.pos]); ) Y = P.pos, y(P);
          return { ln: P.ln, pos: Y + 1 };
        } else return { ln: P.ln, pos: P.pos + 1 };
        y(P);
      }
      return { ln: P.ln, pos: Y + 1 };
    }
    function M(L, _, N, F) {
      var H = L.getLine(_), P = { line: H, ln: _, pos: N, dir: F };
      if (P.line === "") return { ln: P.ln, pos: P.pos };
      var Y = P.pos;
      for (y(P); P.line !== null; ) {
        if (!$(P.line[P.pos]) && !ee(P.line[P.pos])) Y = P.pos;
        else if (ee(P.line[P.pos])) return v ? $(P.line[P.pos + 1]) ? { ln: P.ln, pos: P.pos + 1 } : { ln: P.ln, pos: Y } : { ln: P.ln, pos: Y };
        y(P);
      }
      return P.line = H, v && $(P.line[P.pos]) ? { ln: P.ln, pos: P.pos } : { ln: P.ln, pos: Y };
    }
    for (var A = { ln: u.line, pos: u.ch }; d > 0; ) g < 0 ? A = M(c, A.ln, A.pos, g) : A = S(c, A.ln, A.pos, g), d--;
    return new e(A.ln, A.pos);
  }
  function Pr(c, u, d, g) {
    function v(A, L) {
      if (L.line !== null) if (L.pos + L.dir < 0 || L.pos + L.dir >= L.line.length) {
        if (L.ln += L.dir, !R(A, L.ln)) {
          L.line = null;
          return;
        }
        L.line = A.getLine(L.ln), L.pos = L.dir > 0 ? 0 : L.line.length - 1;
      } else L.pos += L.dir;
    }
    function y(A, L, _, N) {
      var X = A.getLine(L), F = X === "", H = { line: X, ln: L, pos: _, dir: N }, P = { ln: H.ln, pos: H.pos }, Y = H.line === "";
      for (v(A, H); H.line !== null; ) {
        if (P.ln = H.ln, P.pos = H.pos, H.line === "" && !Y) return { ln: H.ln, pos: H.pos };
        if (F && H.line !== "" && !$(H.line[H.pos])) return { ln: H.ln, pos: H.pos };
        ee(H.line[H.pos]) && !F && (H.pos === H.line.length - 1 || $(H.line[H.pos + 1])) && (F = true), v(A, H);
      }
      var X = A.getLine(P.ln);
      P.pos = 0;
      for (var we = X.length - 1; we >= 0; --we) if (!$(X[we])) {
        P.pos = we;
        break;
      }
      return P;
    }
    function S(A, L, _, N) {
      var X = A.getLine(L), F = { line: X, ln: L, pos: _, dir: N }, H = F.ln, P = null, Y = F.line === "";
      for (v(A, F); F.line !== null; ) {
        if (F.line === "" && !Y) return P !== null ? { ln: H, pos: P } : { ln: F.ln, pos: F.pos };
        if (ee(F.line[F.pos]) && P !== null && !(F.ln === H && F.pos + 1 === P)) return { ln: H, pos: P };
        F.line !== "" && !$(F.line[F.pos]) && (Y = false, H = F.ln, P = F.pos), v(A, F);
      }
      var X = A.getLine(H);
      P = 0;
      for (var we = 0; we < X.length; ++we) if (!$(X[we])) {
        P = we;
        break;
      }
      return { ln: H, pos: P };
    }
    for (var M = { ln: u.line, pos: u.ch }; d > 0; ) g < 0 ? M = S(c, M.ln, M.pos, g) : M = y(c, M.ln, M.pos, g), d--;
    return new e(M.ln, M.pos);
  }
  function Xs(c, u, d, g) {
    var v = u, y = { "(": /[()]/, ")": /[()]/, "[": /[[\]]/, "]": /[[\]]/, "{": /[{}]/, "}": /[{}]/, "<": /[<>]/, ">": /[<>]/ }[d], S = { "(": "(", ")": "(", "[": "[", "]": "[", "{": "{", "}": "{", "<": "<", ">": "<" }[d], M = c.getLine(v.line).charAt(v.ch), A = M === S ? 1 : 0, L = c.scanForBracket(new e(v.line, v.ch + A), -1, void 0, { bracketRegex: y }), _ = c.scanForBracket(new e(v.line, v.ch + A), 1, void 0, { bracketRegex: y });
    if (!L || !_) return null;
    var N = L.pos, F = _.pos;
    if (N.line == F.line && N.ch > F.ch || N.line > F.line) {
      var H = N;
      N = F, F = H;
    }
    return g ? F.ch += 1 : N.ch += 1, { start: N, end: F };
  }
  function Qo(c, u, d, g) {
    var v = Ze(u), y = c.getLine(v.line), S = y.split(""), M, A, L, _, N = S.indexOf(d);
    if (v.ch < N) v.ch = N;
    else if (N < v.ch && S[v.ch] == d) {
      var F = /string/.test(c.getTokenTypeAt(it(u, 0, 1))), H = /string/.test(c.getTokenTypeAt(u)), P = F && !H;
      P || (A = v.ch, --v.ch);
    }
    if (S[v.ch] == d && !A) M = v.ch + 1;
    else for (L = v.ch; L > -1 && !M; L--) S[L] == d && (M = L + 1);
    if (M && !A) for (L = M, _ = S.length; L < _ && !A; L++) S[L] == d && (A = L);
    return !M || !A ? { start: v, end: v } : (g && (--M, ++A), { start: new e(v.line, M), end: new e(v.line, A) });
  }
  U("pcre", true, "boolean");
  class Xo {
    constructor() {
      this.highlightTimeout;
    }
    getQuery() {
      return te.query;
    }
    setQuery(u) {
      te.query = u;
    }
    getOverlay() {
      return this.searchOverlay;
    }
    setOverlay(u) {
      this.searchOverlay = u;
    }
    isReversed() {
      return te.isReversed;
    }
    setReversed(u) {
      te.isReversed = u;
    }
    getScrollbarAnnotate() {
      return this.annotate;
    }
    setScrollbarAnnotate(u) {
      this.annotate = u;
    }
  }
  function An(c) {
    var u = c.state.vim;
    return u.searchState_ || (u.searchState_ = new Xo());
  }
  function Zo(c) {
    return Zs(c, "/");
  }
  function el(c) {
    return sn(c, "/");
  }
  function Zs(c, u) {
    var d = sn(c, u) || [];
    if (!d.length) return [];
    var g = [];
    if (d[0] === 0) {
      for (var v = 0; v < d.length; v++) typeof d[v] == "number" && g.push(c.substring(d[v] + 1, d[v + 1]));
      return g;
    }
  }
  function sn(c, u) {
    u || (u = "/");
    for (var d = false, g = [], v = 0; v < c.length; v++) {
      var y = c.charAt(v);
      !d && y == u && g.push(v), d = !d && y == "\\";
    }
    return g;
  }
  function Sa(c) {
    var u = { V: "|(){+?*.[$^", M: "|(){+?*.[", m: "|(){+?", v: "<>" }, d = { ">": "(?<=[\\w])(?=[^\\w]|$)", "<": "(?<=[^\\w]|^)(?=[\\w])" }, g = u.m, v = c.replace(/\\.|[\[|(){+*?.$^<>]/g, function(S) {
      if (S[0] === "\\") {
        var M = S[1];
        return M === "}" || g.indexOf(M) != -1 ? M : M in u ? (g = u[M], "") : M in d ? d[M] : S;
      } else return g.indexOf(S) != -1 ? d[S] || "\\" + S : S;
    }), y = v.indexOf("\\zs");
    return y != -1 && (v = "(?<=" + v.slice(0, y) + ")" + v.slice(y + 3)), y = v.indexOf("\\ze"), y != -1 && (v = v.slice(0, y) + "(?=" + v.slice(y + 3) + ")"), v;
  }
  var tl = { "\\n": `
`, "\\r": "\r", "\\t": "	" };
  function nl(c) {
    for (var u = false, d = [], g = -1; g < c.length; g++) {
      var v = c.charAt(g) || "", y = c.charAt(g + 1) || "";
      tl[v + y] ? (d.push(tl[v + y]), g++) : u ? (d.push(v), u = false) : v === "\\" ? (u = true, K(y) || y === "$" ? d.push("$") : y !== "/" && y !== "\\" && d.push("\\")) : (v === "$" && d.push("$"), d.push(v), y === "/" && d.push("\\"));
    }
    return d.join("");
  }
  var il = { "\\/": "/", "\\\\": "\\", "\\n": `
`, "\\r": "\r", "\\t": "	", "\\&": "&" };
  function Kf(c) {
    for (var u = new n.StringStream(c), d = []; !u.eol(); ) {
      for (; u.peek() && u.peek() != "\\"; ) d.push(u.next());
      var g = false;
      for (var v in il) if (u.match(v, true)) {
        g = true, d.push(il[v]);
        break;
      }
      g || d.push(u.next());
    }
    return d.join("");
  }
  function Ca(c, u, d) {
    var g = te.registerController.getRegister("/");
    g.setText(c);
    var v = el(c), y, S;
    if (!v.length) y = c;
    else {
      y = c.substring(0, v[0]);
      var M = c.substring(v[0]);
      S = M.indexOf("i") != -1;
    }
    if (!y) return null;
    J("pcre") || (y = Sa(y)), d && (u = /^[^A-Z]*$/.test(y));
    var A = new RegExp(y, u || S ? "im" : "m");
    return A;
  }
  function Yn(c) {
    typeof c == "string" && (c = document.createElement(c));
    for (var u = 1; u < arguments.length; u++) {
      var d = arguments[u];
      if (d) if (typeof d != "object" && (d = document.createTextNode(d)), d.nodeType) c.appendChild(d);
      else for (var g in d) Object.prototype.hasOwnProperty.call(d, g) && (g[0] === "$" ? c.style[g.slice(1)] = d[g] : typeof d[g] == "function" ? c[g] = d[g] : c.setAttribute(g, d[g]));
    }
    return c;
  }
  function Ve(c, u, d) {
    var g = Yn("div", { $color: "red", $whiteSpace: "pre", class: "cm-vim-message" }, u);
    c.openNotification ? d ? (g = Yn("div", {}, g, Yn("div", {}, "Press ENTER or type command to continue")), c.state.closeVimNotification && c.state.closeVimNotification(), c.state.closeVimNotification = c.openNotification(g, { bottom: true, duration: 0 })) : c.openNotification(g, { bottom: true, duration: 15e3 }) : alert(g.innerText);
  }
  function Ma(c, u) {
    return Yn("div", { $display: "flex", $flex: 1 }, Yn("span", { $fontFamily: "monospace", $whiteSpace: "pre", $flex: 1, $display: "flex" }, c, Yn("input", { type: "text", autocorrect: "off", autocapitalize: "off", spellcheck: "false", $flex: 1 })), u && Yn("span", { $color: "#888" }, u));
  }
  function eo(c, u) {
    var _a;
    if (fe.length) {
      u.value || (u.value = ""), De = u;
      return;
    }
    var d = Ma(u.prefix, u.desc);
    if (c.openDialog) c.openDialog(d, u.onClose, { onKeyDown: u.onKeyDown, onKeyUp: u.onKeyUp, bottom: true, selectValueOnOpen: false, value: u.value });
    else {
      var g = "";
      typeof u.prefix != "string" && u.prefix && (g += u.prefix.textContent), u.desc && (g += " " + u.desc), (_a = u.onClose) == null ? void 0 : _a.call(u, prompt(g, ""));
    }
  }
  function Aa(c, u) {
    return c instanceof RegExp && u instanceof RegExp ? c.flags == u.flags && c.source == u.source : false;
  }
  function pr(c, u, d, g) {
    if (u) {
      var v = An(c), y = Ca(u, !!d, !!g);
      if (y) return rl(c, y), Aa(y, v.getQuery()) || v.setQuery(y), y;
    }
  }
  function to(c) {
    if (c.source.charAt(0) == "^") var u = true;
    return { token: function(d) {
      if (u && !d.sol()) {
        d.skipToEnd();
        return;
      }
      var g = d.match(c, false);
      if (g) return g[0].length == 0 ? (d.next(), "searching") : !d.sol() && (d.backUp(1), !c.exec(d.next() + g[0])) ? (d.next(), null) : (d.match(c), "searching");
      for (; !d.eol() && (d.next(), !d.match(c, false)); ) ;
    }, query: c };
  }
  var Ki = 0;
  function rl(c, u) {
    clearTimeout(Ki);
    var d = An(c);
    d.highlightTimeout = Ki, Ki = setTimeout(function() {
      if (c.state.vim) {
        var g = An(c);
        g.highlightTimeout = void 0;
        var v = g.getOverlay();
        (!v || u != v.query) && (v && c.removeOverlay(v), v = to(u), c.addOverlay(v), c.showMatchesOnScrollbar && (g.getScrollbarAnnotate() && g.getScrollbarAnnotate().clear(), g.setScrollbarAnnotate(c.showMatchesOnScrollbar(u))), g.setOverlay(v));
      }
    }, 50);
  }
  function no(c, u, d, g) {
    return c.operation(function() {
      g === void 0 && (g = 1);
      for (var v = c.getCursor(), y = c.getSearchCursor(d, v), S = 0; S < g; S++) {
        var M = y.find(u);
        if (S == 0 && M && nn(y.from(), v)) {
          var A = u ? y.from() : y.to();
          M = y.find(u), M && !M[0] && nn(y.from(), A) && c.getLine(A.line).length == A.ch && (M = y.find(u));
        }
        if (!M && (y = c.getSearchCursor(d, u ? new e(c.lastLine()) : new e(c.firstLine(), 0)), !y.find(u))) return;
      }
      return y.from();
    });
  }
  function $f(c, u, d, g, v) {
    return c.operation(function() {
      g === void 0 && (g = 1);
      var y = c.getCursor(), S = c.getSearchCursor(d, y), M = S.find(!u);
      !v.visualMode && M && nn(S.from(), y) && S.find(!u);
      for (var A = 0; A < g; A++) if (M = S.find(u), !M && (S = c.getSearchCursor(d, u ? new e(c.lastLine()) : new e(c.firstLine(), 0)), !S.find(u))) return;
      var L = S.from(), _ = S.to();
      return L && _ && [L, _];
    });
  }
  function Ir(c) {
    var u = An(c);
    u.highlightTimeout && (clearTimeout(u.highlightTimeout), u.highlightTimeout = void 0), c.removeOverlay(An(c).getOverlay()), u.setOverlay(null), u.getScrollbarAnnotate() && (u.getScrollbarAnnotate().clear(), u.setScrollbarAnnotate(null));
  }
  function jf(c, u, d) {
    return typeof c != "number" && (c = c.line), u instanceof Array ? le(c, u) : typeof d == "number" ? c >= u && c <= d : c == u;
  }
  function $i(c) {
    var u = c.getScrollInfo(), d = 6, g = 10, v = c.coordsChar({ left: 0, top: d + u.top }, "local"), y = u.clientHeight - g + u.top, S = c.coordsChar({ left: 0, top: y }, "local");
    return { top: v.line, bottom: S.line };
  }
  function gr(c, u, d) {
    if (d == "'" || d == "`") return te.jumpList.find(c, -1) || new e(0, 0);
    if (d == ".") return io(c);
    var g = u.marks[d];
    return g && g.find();
  }
  function io(c) {
    if (c.getLastEditEnd) return c.getLastEditEnd();
    for (var u = c.doc.history.done, d = u.length; d--; ) if (u[d].changes) return Ze(u[d].changes[0].to);
  }
  class fs {
    constructor() {
      this.commandMap_, this.buildCommandMap_();
    }
    processCommand(u, d, g) {
      var v = this;
      u.operation(function() {
        u.curOp && (u.curOp.isVimOp = true), v._processCommand(u, d, g);
      });
    }
    _processCommand(u, d, g) {
      var v = u.state.vim, y = te.registerController.getRegister(":"), S = y.toString(), M = new n.StringStream(d);
      y.setText(d);
      var A = g || {};
      A.input = d;
      try {
        this.parseInput_(u, M, A);
      } catch (N) {
        throw Ve(u, N + ""), N;
      }
      v.visualMode && rn(u);
      var L, _;
      if (!A.commandName) A.line !== void 0 && (_ = "move");
      else if (L = this.matchCommand_(A.commandName), L) {
        if (_ = L.name, L.excludeFromCommandHistory && y.setText(S), this.parseCommandArgs_(M, A, L), L.type == "exToKey") {
          Ne(u, L.toKeys || "", L);
          return;
        } else if (L.type == "exToEx") {
          this.processCommand(u, L.toInput || "");
          return;
        }
      }
      if (!_) {
        Ve(u, 'Not an editor command ":' + d + '"');
        return;
      }
      try {
        Ta[_](u, A), (!L || !L.possiblyAsync) && A.callback && A.callback();
      } catch (N) {
        throw Ve(u, N + ""), N;
      }
    }
    parseInput_(u, d, g) {
      var _a, _b2;
      d.eatWhile(":"), d.eat("%") ? (g.line = u.firstLine(), g.lineEnd = u.lastLine()) : (g.line = this.parseLineSpec_(u, d), g.line !== void 0 && d.eat(",") && (g.lineEnd = this.parseLineSpec_(u, d))), g.line == null ? u.state.vim.visualMode ? (g.selectionLine = (_a = gr(u, u.state.vim, "<")) == null ? void 0 : _a.line, g.selectionLineEnd = (_b2 = gr(u, u.state.vim, ">")) == null ? void 0 : _b2.line) : g.selectionLine = u.getCursor().line : (g.selectionLine = g.line, g.selectionLineEnd = g.lineEnd);
      var v = d.match(/^(\w+|!!|@@|[!#&*<=>@~])/);
      return v ? g.commandName = v[1] : g.commandName = (d.match(/.*/) || [""])[0], g;
    }
    parseLineSpec_(u, d) {
      var g = d.match(/^(\d+)/);
      if (g) return parseInt(g[1], 10) - 1;
      switch (d.next()) {
        case ".":
          return this.parseLineSpecOffset_(d, u.getCursor().line);
        case "$":
          return this.parseLineSpecOffset_(d, u.lastLine());
        case "'":
          var v = d.next() || "", y = gr(u, u.state.vim, v);
          if (!y) throw new Error("Mark not set");
          return this.parseLineSpecOffset_(d, y.line);
        case "-":
        case "+":
          return d.backUp(1), this.parseLineSpecOffset_(d, u.getCursor().line);
        default:
          d.backUp(1);
          return;
      }
    }
    parseLineSpecOffset_(u, d) {
      var g = u.match(/^([+-])?(\d+)/);
      if (g) {
        var v = parseInt(g[2], 10);
        g[1] == "-" ? d -= v : d += v;
      }
      return d;
    }
    parseCommandArgs_(u, d, g) {
      var _a;
      if (!u.eol()) {
        d.argString = (_a = u.match(/.*/)) == null ? void 0 : _a[0];
        var v = g.argDelimiter || /\s+/, y = Js(d.argString || "").split(v);
        y.length && y[0] && (d.args = y);
      }
    }
    matchCommand_(u) {
      for (var d = u.length; d > 0; d--) {
        var g = u.substring(0, d);
        if (this.commandMap_[g]) {
          var v = this.commandMap_[g];
          if (v.name.indexOf(u) === 0) return v;
        }
      }
    }
    buildCommandMap_() {
      this.commandMap_ = {};
      for (var u = 0; u < o.length; u++) {
        var d = o[u], g = d.shortName || d.name;
        this.commandMap_[g] = d;
      }
    }
    map(u, d, g, v) {
      if (u != ":" && u.charAt(0) == ":") {
        if (g) throw Error("Mode not supported for ex mappings");
        var y = u.substring(1);
        d != ":" && d.charAt(0) == ":" ? this.commandMap_[y] = { name: y, type: "exToEx", toInput: d.substring(1), user: true } : this.commandMap_[y] = { name: y, type: "exToKey", toKeys: d, user: true };
      } else {
        var S = { keys: u, type: "keyToKey", toKeys: d, noremap: !!v };
        g && (S.context = g), hs(S);
      }
    }
    unmap(u, d) {
      if (u != ":" && u.charAt(0) == ":") {
        if (d) throw Error("Mode not supported for ex mappings");
        var g = u.substring(1);
        if (this.commandMap_[g] && this.commandMap_[g].user) return delete this.commandMap_[g], true;
      } else for (var v = u, y = 0; y < i.length; y++) if (v == i[y].keys && i[y].context === d) return i.splice(y, 1), ol(v), true;
    }
  }
  var Ta = { colorscheme: function(c, u) {
    if (!u.args || u.args.length < 1) {
      Ve(c, c.getOption("theme"));
      return;
    }
    c.setOption("theme", u.args[0]);
  }, map: function(c, u, d, g) {
    var v = u.args;
    if (!v || v.length < 2) {
      c && Ve(c, "Invalid mapping: " + u.input);
      return;
    }
    _t.map(v[0], v[1], d, g);
  }, imap: function(c, u) {
    this.map(c, u, "insert");
  }, nmap: function(c, u) {
    this.map(c, u, "normal");
  }, vmap: function(c, u) {
    this.map(c, u, "visual");
  }, omap: function(c, u) {
    this.map(c, u, "operatorPending");
  }, noremap: function(c, u) {
    this.map(c, u, void 0, true);
  }, inoremap: function(c, u) {
    this.map(c, u, "insert", true);
  }, nnoremap: function(c, u) {
    this.map(c, u, "normal", true);
  }, vnoremap: function(c, u) {
    this.map(c, u, "visual", true);
  }, onoremap: function(c, u) {
    this.map(c, u, "operatorPending", true);
  }, unmap: function(c, u, d) {
    var g = u.args;
    (!g || g.length < 1 || !_t.unmap(g[0], d)) && c && Ve(c, "No such mapping: " + u.input);
  }, mapclear: function(c, u) {
    ye.mapclear();
  }, imapclear: function(c, u) {
    ye.mapclear("insert");
  }, nmapclear: function(c, u) {
    ye.mapclear("normal");
  }, vmapclear: function(c, u) {
    ye.mapclear("visual");
  }, omapclear: function(c, u) {
    ye.mapclear("operatorPending");
  }, move: function(c, u) {
    In.processCommand(c, c.state.vim, { keys: "", type: "motion", motion: "moveToLineOrEdgeOfDocument", motionArgs: { forward: false, explicitRepeat: true, linewise: true }, repeatOverride: u.line + 1 });
  }, set: function(c, u) {
    var d = u.args, g = u.setCfg || {};
    if (!d || d.length < 1) {
      c && Ve(c, "Invalid mapping: " + u.input);
      return;
    }
    var v = d[0].split("="), y = v.shift() || "", S = v.length > 0 ? v.join("=") : void 0, M = false, A = false;
    if (y.charAt(y.length - 1) == "?") {
      if (S) throw Error("Trailing characters: " + u.argString);
      y = y.substring(0, y.length - 1), M = true;
    } else y.charAt(y.length - 1) == "!" && (y = y.substring(0, y.length - 1), A = true);
    S === void 0 && y.substring(0, 2) == "no" && (y = y.substring(2), S = false);
    var L = re[y] && re[y].type == "boolean";
    if (L && (A ? S = !J(y, c, g) : S == null && (S = true)), !L && S === void 0 || M) {
      var _ = J(y, c, g);
      _ instanceof Error ? Ve(c, _.message) : _ === true || _ === false ? Ve(c, " " + (_ ? "" : "no") + y) : Ve(c, "  " + y + "=" + _);
    } else {
      var N = Z(y, S, c, g);
      N instanceof Error && Ve(c, N.message);
    }
  }, setlocal: function(c, u) {
    u.setCfg = { scope: "local" }, this.set(c, u);
  }, setglobal: function(c, u) {
    u.setCfg = { scope: "global" }, this.set(c, u);
  }, registers: function(c, u) {
    var d = u.args, g = te.registerController.registers, v = `----------Registers----------

`;
    if (d) for (var M = d.join(""), A = 0; A < M.length; A++) {
      var y = M.charAt(A);
      if (te.registerController.isValidRegister(y)) {
        var L = g[y] || new un();
        v += '"' + y + "    " + L.toString() + `
`;
      }
    }
    else for (var y in g) {
      var S = g[y].toString();
      S.length && (v += '"' + y + "    " + S + `
`);
    }
    Ve(c, v, true);
  }, marks: function(c, u) {
    var d = u.args, g = c.state.vim.marks, v = `-----------Marks-----------
mark	line	col

`;
    if (d) for (var M = d.join(""), A = 0; A < M.length; A++) {
      var y = M.charAt(A), S = g[y] && g[y].find();
      S && (v += y + "	" + S.line + "	" + S.ch + `
`);
    }
    else for (var y in g) {
      var S = g[y] && g[y].find();
      S && (v += y + "	" + S.line + "	" + S.ch + `
`);
    }
    Ve(c, v, true);
  }, sort: function(c, u) {
    var d, g, v, y, S;
    function M() {
      if (u.argString) {
        var Pe = new n.StringStream(u.argString);
        if (Pe.eat("!") && (d = true), Pe.eol()) return;
        if (!Pe.eatSpace()) return "Invalid arguments";
        var ke = Pe.match(/([dinuox]+)?\s*(\/.+\/)?\s*/);
        if (!ke || !Pe.eol()) return "Invalid arguments";
        if (ke[1]) {
          g = ke[1].indexOf("i") != -1, v = ke[1].indexOf("u") != -1;
          var je = ke[1].indexOf("d") != -1 || ke[1].indexOf("n") != -1, Tn = ke[1].indexOf("x") != -1, Lt = ke[1].indexOf("o") != -1;
          if (Number(je) + Number(Tn) + Number(Lt) > 1) return "Invalid arguments";
          y = je && "decimal" || Tn && "hex" || Lt && "octal";
        }
        ke[2] && (S = new RegExp(ke[2].substr(1, ke[2].length - 2), g ? "i" : ""));
      }
    }
    var A = M();
    if (A) {
      Ve(c, A + ": " + u.argString);
      return;
    }
    var L = u.line || c.firstLine(), _ = u.lineEnd || u.line || c.lastLine();
    if (L == _) return;
    var N = new e(L, 0), F = new e(_, It(c, _)), H = c.getRange(N, F).split(`
`), P = y == "decimal" ? /(-?)([\d]+)/ : y == "hex" ? /(-?)(?:0x)?([0-9a-f]+)/i : y == "octal" ? /([0-7]+)/ : null, Y = y == "decimal" ? 10 : y == "hex" ? 16 : y == "octal" ? 8 : void 0, X = [], we = [];
    if (y || S) for (var ce = 0; ce < H.length; ce++) {
      var Ce = S ? H[ce].match(S) : null;
      Ce && Ce[0] != "" ? X.push(Ce) : P && P.exec(H[ce]) ? X.push(H[ce]) : we.push(H[ce]);
    }
    else we = H;
    function Oe(Pe, ke) {
      if (d) {
        var je;
        je = Pe, Pe = ke, ke = je;
      }
      g && (Pe = Pe.toLowerCase(), ke = ke.toLowerCase());
      var Tn = P && P.exec(Pe), Lt = P && P.exec(ke);
      if (!Tn || !Lt) return Pe < ke ? -1 : 1;
      var pn = parseInt((Tn[1] + Tn[2]).toLowerCase(), Y), Mi = parseInt((Lt[1] + Lt[2]).toLowerCase(), Y);
      return pn - Mi;
    }
    function Be(Pe, ke) {
      if (d) {
        var je;
        je = Pe, Pe = ke, ke = je;
      }
      return g && (Pe[0] = Pe[0].toLowerCase(), ke[0] = ke[0].toLowerCase()), Pe[0] < ke[0] ? -1 : 1;
    }
    if (X.sort(S ? Be : Oe), S) for (var ce = 0; ce < X.length; ce++) X[ce] = X[ce].input;
    else y || we.sort(Oe);
    if (H = d ? X.concat(we) : we.concat(X), v) {
      var st = H, vt;
      H = [];
      for (var ce = 0; ce < st.length; ce++) st[ce] != vt && H.push(st[ce]), vt = st[ce];
    }
    c.replaceRange(H.join(`
`), N, F);
  }, vglobal: function(c, u) {
    this.global(c, u);
  }, normal: function(c, u) {
    var d = false, g = u.argString;
    if (g && g[0] == "!" && (g = g.slice(1), d = true), g = g.trimStart(), !g) {
      Ve(c, "Argument is required.");
      return;
    }
    var v = u.line;
    if (typeof v == "number") for (var y = isNaN(u.lineEnd) ? v : u.lineEnd, S = v; S <= y; S++) c.setCursor(S, 0), Ne(c, u.argString.trimStart(), { noremap: d }), c.state.vim.insertMode && Si(c, true);
    else Ne(c, u.argString.trimStart(), { noremap: d }), c.state.vim.insertMode && Si(c, true);
  }, global: function(c, u) {
    var d = u.argString;
    if (!d) {
      Ve(c, "Regular Expression missing from global");
      return;
    }
    var g = u.commandName[0] === "v";
    d[0] === "!" && u.commandName[0] === "g" && (g = true, d = d.slice(1));
    var v = u.line !== void 0 ? u.line : c.firstLine(), y = u.lineEnd || u.line || c.lastLine(), S = Zo(d), M = d, A = "";
    if (S && S.length && (M = S[0], A = S.slice(1, S.length).join("/")), M) try {
      pr(c, M, true, true);
    } catch {
      Ve(c, "Invalid regex: " + M);
      return;
    }
    for (var L = An(c).getQuery(), _ = [], N = v; N <= y; N++) {
      var F = c.getLine(N), H = L.test(F);
      H !== g && _.push(A ? c.getLineHandle(N) : F);
    }
    if (!A) {
      Ve(c, _.join(`
`));
      return;
    }
    var P = 0, Y = function() {
      if (P < _.length) {
        var X = _[P++], we = c.getLineNumber(X);
        if (we == null) {
          Y();
          return;
        }
        var ce = we + 1 + A;
        _t.processCommand(c, ce, { callback: Y });
      } else c.releaseLineHandles && c.releaseLineHandles();
    };
    Y();
  }, substitute: function(c, u) {
    if (!c.getSearchCursor) throw new Error("Search feature not available. Requires searchcursor.js or any other getSearchCursor implementation.");
    var d = u.argString, g = d ? Zs(d, d[0]) : [], v = "", y = "", S, M, A, L = false, _ = false;
    if (g && g.length) v = g[0], J("pcre") && v !== "" && (v = new RegExp(v).source), y = g[1], y !== void 0 && (J("pcre") ? y = Kf(y.replace(/([^\\])&/g, "$1$$&")) : y = nl(y), te.lastSubstituteReplacePart = y), S = g[2] ? g[2].split(" ") : [];
    else if (d && d.length) {
      Ve(c, "Substitutions should be of the form :s/pattern/replace/");
      return;
    }
    if (S && (M = S[0], A = parseInt(S[1]), M && (M.indexOf("c") != -1 && (L = true), M.indexOf("g") != -1 && (_ = true), J("pcre") ? v = v + "/" + M : v = v.replace(/\//g, "\\/") + "/" + M)), v) try {
      pr(c, v, true, true);
    } catch {
      Ve(c, "Invalid regex: " + v);
      return;
    }
    if (y = y || te.lastSubstituteReplacePart, y === void 0) {
      Ve(c, "No previous substitute regular expression");
      return;
    }
    var N = An(c), F = N.getQuery(), H = u.line !== void 0 ? u.line : c.getCursor().line, P = u.lineEnd || H;
    H == c.firstLine() && P == c.lastLine() && (P = 1 / 0), A && (H = P, P = H + A - 1);
    var Y = St(c, new e(H, 0)), X = c.getSearchCursor(F, Y);
    Uf(c, L, _, H, P, X, F, y, u.callback);
  }, startinsert: function(c, u) {
    Ne(c, u.argString == "!" ? "A" : "i", {});
  }, redo: n.commands.redo, undo: n.commands.undo, write: function(c) {
    n.commands.save ? n.commands.save(c) : c.save && c.save();
  }, nohlsearch: function(c) {
    Ir(c);
  }, yank: function(c) {
    var u = Ze(c.getCursor()), d = u.line, g = c.getLine(d);
    te.registerController.pushText("0", "yank", g, true, true);
  }, delete: function(c, u) {
    var d = u.selectionLine, g = isNaN(u.selectionLineEnd) ? d : u.selectionLineEnd;
    ue.delete(c, { linewise: true }, [{ anchor: new e(d, 0), head: new e(g + 1, 0) }]);
  }, join: function(c, u) {
    var d = u.selectionLine, g = isNaN(u.selectionLineEnd) ? d : u.selectionLineEnd;
    c.setCursor(new e(d, 0)), dt.joinLines(c, { repeat: g - d }, c.state.vim);
  }, delmarks: function(c, u) {
    if (!u.argString || !Js(u.argString)) {
      Ve(c, "Argument required");
      return;
    }
    for (var d = c.state.vim, g = new n.StringStream(Js(u.argString)); !g.eol(); ) {
      g.eatSpace();
      var v = g.pos;
      if (!g.match(/[a-zA-Z]/, false)) {
        Ve(c, "Invalid argument: " + u.argString.substring(v));
        return;
      }
      var y = g.next();
      if (g.match("-", true)) {
        if (!g.match(/[a-zA-Z]/, false)) {
          Ve(c, "Invalid argument: " + u.argString.substring(v));
          return;
        }
        var S = y, M = g.next();
        if (S && M && I(S) == I(M)) {
          var A = S.charCodeAt(0), L = M.charCodeAt(0);
          if (A >= L) {
            Ve(c, "Invalid argument: " + u.argString.substring(v));
            return;
          }
          for (var _ = 0; _ <= L - A; _++) {
            var N = String.fromCharCode(A + _);
            delete d.marks[N];
          }
        } else {
          Ve(c, "Invalid argument: " + S + "-");
          return;
        }
      } else y && delete d.marks[y];
    }
  } }, _t = new fs();
  ye.defineEx("version", "ve", (c) => {
    Ve(c, "Codemirror-vim version: 6.3.0");
  });
  function Uf(c, u, d, g, v, y, S, M, A) {
    c.state.vim.exMode = true;
    var L = false, _ = 0, N, F, H;
    function P() {
      c.operation(function() {
        for (; !L; ) Y(), we();
        ce();
      });
    }
    function Y() {
      var Oe = "", Be = y.match || y.pos && y.pos.match;
      if (Be) Oe = M.replace(/\$(\d{1,3}|[$&])/g, function(Pe, ke) {
        if (ke == "$") return "$";
        if (ke == "&") return Be[0];
        for (var je = ke; parseInt(je) >= Be.length && je.length > 0; ) je = je.slice(0, je.length - 1);
        return je ? Be[je] + ke.slice(je.length, ke.length) : Pe;
      });
      else {
        var st = c.getRange(y.from(), y.to());
        Oe = st.replace(S, M);
      }
      var vt = y.to().line;
      y.replace(Oe), F = y.to().line, v += F - vt, H = F < vt;
    }
    function X() {
      var Oe = N && Ze(y.to()), Be = y.findNext();
      return Be && !Be[0] && Oe && nn(y.from(), Oe) && (Be = y.findNext()), Be && _++, Be;
    }
    function we() {
      for (; X() && jf(y.from(), g, v); ) if (!(!d && y.from().line == F && !H)) {
        c.scrollIntoView(y.from(), 30), c.setSelection(y.from(), y.to()), N = y.from(), L = false;
        return;
      }
      L = true;
    }
    function ce(Oe) {
      if (Oe && Oe(), c.focus(), N) {
        c.setCursor(N);
        var Be = c.state.vim;
        Be.exMode = false, Be.lastHPos = Be.lastHSPos = N.ch;
      }
      A ? A() : L && Ve(c, (_ ? "Found " + _ + " matches" : "No matches found") + " for pattern: " + S + (J("pcre") ? " (set nopcre to use Vim regexps)" : ""));
    }
    function Ce(Oe, Be, st) {
      n.e_stop(Oe);
      var vt = hn(Oe);
      switch (vt) {
        case "y":
          Y(), we();
          break;
        case "n":
          we();
          break;
        case "a":
          var Pe = A;
          A = void 0, c.operation(P), A = Pe;
          break;
        case "l":
          Y();
        case "q":
        case "<Esc>":
        case "<C-c>":
        case "<C-[>":
          ce(st);
          break;
      }
      return L && ce(st), true;
    }
    if (we(), L) {
      Ve(c, "No matches for " + S + (J("pcre") ? " (set nopcre to use vim regexps)" : ""));
      return;
    }
    if (!u) {
      P(), A && A();
      return;
    }
    eo(c, { prefix: Yn("span", "replace with ", Yn("strong", M), " (y/n/a/q/l)"), onKeyDown: Ce });
  }
  function Si(c, u) {
    var d = c.state.vim, g = te.macroModeState, v = te.registerController.getRegister("."), y = g.isPlaying, S = g.lastInsertModeChanges;
    y || (c.off("change", mr), d.insertEnd && d.insertEnd.clear(), d.insertEnd = void 0, n.off(c.getInputField(), "keydown", rt)), !y && d.insertModeRepeat && d.insertModeRepeat > 1 && (ct(c, d, d.insertModeRepeat - 1, true), d.lastEditInputState.repeatOverride = d.insertModeRepeat), delete d.insertModeRepeat, d.insertMode = false, u || c.setCursor(c.getCursor().line, c.getCursor().ch - 1), c.setOption("keyMap", "vim"), c.setOption("disableInput", true), c.toggleOverwrite(false), v.setText(S.changes.join("")), n.signal(c, "vim-mode-change", { mode: "normal" }), g.isRecording && Oa(g);
  }
  function hs(c) {
    i.unshift(c), c.keys && sl(c.keys);
  }
  function sl(c) {
    c.split(/(<(?:[CSMA]-)*\w+>|.)/i).forEach(function(u) {
      u && (r[u] || (r[u] = 0), r[u]++);
    });
  }
  function ol(c) {
    c.split(/(<(?:[CSMA]-)*\w+>|.)/i).forEach(function(u) {
      r[u] && r[u]--;
    });
  }
  function Nr(c, u, d, g, v) {
    var y = { keys: c, type: u };
    y[u] = d, y[u + "Args"] = g;
    for (var S in v) y[S] = v[S];
    hs(y);
  }
  U("insertModeEscKeysTimeout", 200, "number");
  function Fr(c, u, d, g) {
    var v = te.registerController.getRegister(g);
    if (g == ":") {
      v.keyBuffer[0] && _t.processCommand(c, v.keyBuffer[0]), d.isPlaying = false;
      return;
    }
    var y = v.keyBuffer, S = 0;
    d.isPlaying = true, d.replaySearchQueries = v.searchQueries.slice(0);
    for (var M = 0; M < y.length; M++) for (var A = y[M], L, _, N = /<(?:[CSMA]-)*\w+>|./gi; L = N.exec(A); ) if (_ = L[0], ye.handleKey(c, _, "macro"), u.insertMode) {
      var F = v.insertModeChanges[S++].changes;
      te.macroModeState.lastInsertModeChanges.changes = F, Ht(c, F, 1), Si(c);
    }
    d.isPlaying = false;
  }
  function Ea(c, u) {
    if (!c.isPlaying) {
      var d = c.latestRegister, g = te.registerController.getRegister(d);
      g && g.pushText(u);
    }
  }
  function Oa(c) {
    if (!c.isPlaying) {
      var u = c.latestRegister, d = te.registerController.getRegister(u);
      d && d.pushInsertModeChanges && d.pushInsertModeChanges(c.lastInsertModeChanges);
    }
  }
  function Hr(c, u) {
    if (!c.isPlaying) {
      var d = c.latestRegister, g = te.registerController.getRegister(d);
      g && g.pushSearchQuery && g.pushSearchQuery(u);
    }
  }
  function mr(c, u) {
    var d = te.macroModeState, g = d.lastInsertModeChanges;
    if (!d.isPlaying) for (var v = c.state.vim; u; ) {
      if (g.expectCursorActivityForChange = true, g.ignoreCount > 1) g.ignoreCount--;
      else if (u.origin == "+input" || u.origin == "paste" || u.origin === void 0) {
        var y = c.listSelections().length;
        y > 1 && (g.ignoreCount = y);
        var S = u.text.join(`
`);
        if (g.maybeReset && (g.changes = [], g.maybeReset = false), S) if (c.state.overwrite && !/\n/.test(S)) g.changes.push([S]);
        else {
          if (S.length > 1) {
            var M = v && v.insertEnd && v.insertEnd.find(), A = c.getCursor();
            if (M && M.line == A.line) {
              var L = M.ch - A.ch;
              L > 0 && L < S.length && (g.changes.push([S, L]), S = "");
            }
          }
          S && g.changes.push(S);
        }
      }
      u = u.next;
    }
  }
  function ll(c) {
    var _a;
    var u = c.state.vim;
    if (u.insertMode) {
      var d = te.macroModeState;
      if (d.isPlaying) return;
      var g = d.lastInsertModeChanges;
      g.expectCursorActivityForChange ? g.expectCursorActivityForChange = false : (g.maybeReset = true, u.insertEnd && u.insertEnd.clear(), u.insertEnd = c.setBookmark(c.getCursor(), { insertLeft: true }));
    } else ((_a = c.curOp) == null ? void 0 : _a.isVimOp) || al(c, u);
  }
  function al(c, u) {
    var d = c.getCursor("anchor"), g = c.getCursor("head");
    if (u.visualMode && !c.somethingSelected() ? rn(c, false) : !u.visualMode && !u.insertMode && c.somethingSelected() && (u.visualMode = true, u.visualLine = false, n.signal(c, "vim-mode-change", { mode: "visual" })), u.visualMode) {
      var v = tt(g, d) ? 0 : -1, y = tt(g, d) ? -1 : 0;
      g = it(g, 0, v), d = it(d, 0, y), u.sel = { anchor: d, head: g }, Mn(c, u, "<", Ct(g, d)), Mn(c, u, ">", jn(g, d));
    } else u.insertMode || (u.lastHPos = c.getCursor().ch);
  }
  function rt(c) {
    var u = te.macroModeState, d = u.lastInsertModeChanges, g = n.keyName ? n.keyName(c) : c.key;
    g && (g.indexOf("Delete") != -1 || g.indexOf("Backspace") != -1) && (d.maybeReset && (d.changes = [], d.maybeReset = false), d.changes.push(new Me(g, c)));
  }
  function ct(c, u, d, g) {
    var v = te.macroModeState;
    v.isPlaying = true;
    var y = u.lastEditActionCommand, S = u.inputState;
    function M() {
      y ? In.processAction(c, u, y) : In.evalInput(c, u);
    }
    function A(_) {
      if (v.lastInsertModeChanges.changes.length > 0) {
        _ = u.lastEditActionCommand ? _ : 1;
        var N = v.lastInsertModeChanges;
        Ht(c, N.changes, _);
      }
    }
    if (u.inputState = u.lastEditInputState, y && y.interlaceInsertRepeat) for (var L = 0; L < d; L++) M(), A(1);
    else g || M(), A(d);
    u.inputState = S, u.insertMode && !g && Si(c), v.isPlaying = false;
  }
  function Ci(c, u) {
    n.lookupKey(u, "vim-insert", function(g) {
      return typeof g == "string" ? n.commands[g](c) : g(c), true;
    });
  }
  function Ht(c, u, d) {
    var g = c.getCursor("head"), v = te.macroModeState.lastInsertModeChanges.visualBlock;
    v && (ba(c, g, v + 1), d = c.listSelections().length, c.setCursor(g));
    for (var y = 0; y < d; y++) {
      v && c.setCursor(it(g, y, 0));
      for (var S = 0; S < u.length; S++) {
        var M = u[S];
        if (M instanceof Me) Ci(c, M.keyName);
        else if (typeof M == "string") c.replaceSelection(M);
        else {
          var A = c.getCursor(), L = it(A, 0, M[0].length - (M[1] || 0));
          c.replaceRange(M[0], A, M[1] ? A : L), c.setCursor(L);
        }
      }
    }
    v && c.setCursor(it(g, 0, 1));
  }
  function Mt(c) {
    var u = new c.constructor();
    return Object.keys(c).forEach(function(d) {
      if (d != "insertEnd") {
        var g = c[d];
        Array.isArray(g) ? g = g.slice() : g && typeof g == "object" && g.constructor != Object && (g = Mt(g)), u[d] = g;
      }
    }), c.sel && (u.sel = { head: c.sel.head && Ze(c.sel.head), anchor: c.sel.anchor && Ze(c.sel.anchor) }), u;
  }
  function Wt(c, u, d) {
    var y = ae(c), g = c, v = false, y = ye.maybeInitVimState_(g), S = y.visualBlock || y.wasInVisualBlock;
    if (g.state.closeVimNotification) {
      var M = g.state.closeVimNotification;
      if (g.state.closeVimNotification = null, M(), u == "<CR>") return mt(g), true;
    }
    var A = g.isInMultiSelectMode();
    if (y.wasInVisualBlock && !A ? y.wasInVisualBlock = false : A && y.visualBlock && (y.wasInVisualBlock = true), u == "<Esc>" && !y.insertMode && !y.visualMode && A && y.status == "<Esc>") mt(g);
    else if (S || !A || g.inVirtualSelectionMode) v = ye.handleKey(g, u, d);
    else {
      var L = Mt(y), _ = y.inputState.changeQueueList || [];
      g.operation(function() {
        var _a;
        g.curOp && (g.curOp.isVimOp = true);
        var N = 0;
        g.forEachSelection(function() {
          g.state.vim.inputState.changeQueue = _[N];
          var F = g.getCursor("head"), H = g.getCursor("anchor"), P = tt(F, H) ? 0 : -1, Y = tt(F, H) ? -1 : 0;
          F = it(F, 0, P), H = it(H, 0, Y), g.state.vim.sel.head = F, g.state.vim.sel.anchor = H, v = ye.handleKey(g, u, d), g.virtualSelection && (_[N] = g.state.vim.inputState.changeQueue, g.state.vim = Mt(L)), N++;
        }), ((_a = g.curOp) == null ? void 0 : _a.cursorActivity) && !v && (g.curOp.cursorActivity = false), g.state.vim = y, y.inputState.changeQueueList = _, y.inputState.changeQueue = null;
      }, true);
    }
    return v && !y.visualMode && !y.insertMode && y.visualMode != g.somethingSelected() && al(g, y), v;
  }
  return Ee(), ye;
}
function ei(n, e) {
  var t = e.ch, i = e.line + 1;
  i < 1 && (i = 1, t = 0), i > n.lines && (i = n.lines, t = Number.MAX_VALUE);
  var r = n.line(i);
  return Math.min(r.from + Math.max(0, t), r.to);
}
function hi(n, e) {
  let t = n.lineAt(e);
  return { line: t.number - 1, ch: e - t.from };
}
class nr {
  constructor(e, t) {
    this.line = e, this.ch = t;
  }
}
function Rb(n, e, t) {
  if (n.addEventListener) n.addEventListener(e, t, false);
  else {
    var i = n._handlers || (n._handlers = {});
    i[e] = (i[e] || []).concat(t);
  }
}
function Bb(n, e, t) {
  if (n.removeEventListener) n.removeEventListener(e, t, false);
  else {
    var i = n._handlers, r = i && i[e];
    if (r) {
      var s = r.indexOf(t);
      s > -1 && (i[e] = r.slice(0, s).concat(r.slice(s + 1)));
    }
  }
}
function Pb(n, e, ...t) {
  var i, r = (i = n._handlers) === null || i === void 0 ? void 0 : i[e];
  if (r) for (var s = 0; s < r.length; ++s) r[s](...t);
}
function Bm(n, ...e) {
  if (n) for (var t = 0; t < n.length; ++t) n[t](...e);
}
let Iu;
try {
  Iu = new RegExp("[\\w\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
  Iu = /[\w]/;
}
function Cl(n, e) {
  var t = n.cm6;
  if (!t.state.readOnly) {
    var i = "input.type.compose";
    if (n.curOp && (n.curOp.lastChange || (i = "input.type.compose.start")), e.annotations) try {
      e.annotations.some(function(r) {
        r.value == "input" && (r.value = i);
      });
    } catch (r) {
      console.error(r);
    }
    else e.userEvent = i;
    return t.dispatch(e);
  }
}
function Pm(n, e) {
  var t;
  n.curOp && (n.curOp.$changeStart = void 0), (e ? Fd : Kc)(n.cm6);
  let i = (t = n.curOp) === null || t === void 0 ? void 0 : t.$changeStart;
  i != null && n.cm6.dispatch({ selection: { anchor: i } });
}
var bE = { Left: (n) => vs(n.cm6, { key: "Left" }, "editor"), Right: (n) => vs(n.cm6, { key: "Right" }, "editor"), Up: (n) => vs(n.cm6, { key: "Up" }, "editor"), Down: (n) => vs(n.cm6, { key: "Down" }, "editor"), Backspace: (n) => vs(n.cm6, { key: "Backspace" }, "editor"), Delete: (n) => vs(n.cm6, { key: "Delete" }, "editor") };
class Ie {
  openDialog(e, t, i) {
    return xE(this, e, t, i);
  }
  openNotification(e, t) {
    return wE(this, e, t);
  }
  constructor(e) {
    this.state = {}, this.marks = /* @__PURE__ */ Object.create(null), this.$mid = 0, this.options = {}, this._handlers = {}, this.$lastChangeEndOffset = 0, this.virtualSelection = null, this.cm6 = e, this.onChange = this.onChange.bind(this), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  on(e, t) {
    Rb(this, e, t);
  }
  off(e, t) {
    Bb(this, e, t);
  }
  signal(e, t, i) {
    Pb(this, e, t, i);
  }
  indexFromPos(e) {
    return ei(this.cm6.state.doc, e);
  }
  posFromIndex(e) {
    return hi(this.cm6.state.doc, e);
  }
  foldCode(e) {
    let t = this.cm6, i = t.state.selection.ranges, r = this.cm6.state.doc, s = ei(r, e), o = j.create([j.range(s, s)], 0).ranges;
    t.state.selection.ranges = o, Sy(t), t.state.selection.ranges = i;
  }
  firstLine() {
    return 0;
  }
  lastLine() {
    return this.cm6.state.doc.lines - 1;
  }
  lineCount() {
    return this.cm6.state.doc.lines;
  }
  setCursor(e, t) {
    typeof e == "object" && (t = e.ch, e = e.line);
    var i = ei(this.cm6.state.doc, { line: e, ch: t || 0 });
    this.cm6.dispatch({ selection: { anchor: i } }, { scrollIntoView: !this.curOp }), this.curOp && !this.curOp.isVimOp && this.onBeforeEndOperation();
  }
  getCursor(e) {
    var t = this.cm6.state.selection.main, i = e == "head" || !e ? t.head : e == "anchor" ? t.anchor : e == "start" ? t.from : e == "end" ? t.to : null;
    if (i == null) throw new Error("Invalid cursor type");
    return this.posFromIndex(i);
  }
  listSelections() {
    var e = this.cm6.state.doc;
    return this.cm6.state.selection.ranges.map((t) => ({ anchor: hi(e, t.anchor), head: hi(e, t.head) }));
  }
  setSelections(e, t) {
    var i = this.cm6.state.doc, r = e.map((s) => {
      var o = ei(i, s.head), l = ei(i, s.anchor);
      return o == l ? j.cursor(o, 1) : j.range(l, o);
    });
    this.cm6.dispatch({ selection: j.create(r, t) });
  }
  setSelection(e, t, i) {
    this.setSelections([{ anchor: e, head: t }], 0), i && i.origin == "*mouse" && this.onBeforeEndOperation();
  }
  getLine(e) {
    var t = this.cm6.state.doc;
    return e < 0 || e >= t.lines ? "" : this.cm6.state.doc.line(e + 1).text;
  }
  getLineHandle(e) {
    return this.$lineHandleChanges || (this.$lineHandleChanges = []), { row: e, index: this.indexFromPos(new nr(e, 0)) };
  }
  getLineNumber(e) {
    var t = this.$lineHandleChanges;
    if (!t) return null;
    for (var i = e.index, r = 0; r < t.length; r++) if (i = t[r].changes.mapPos(i, 1, an.TrackAfter), i == null) return null;
    var s = this.posFromIndex(i);
    return s.ch == 0 ? s.line : null;
  }
  releaseLineHandles() {
    this.$lineHandleChanges = void 0;
  }
  getRange(e, t) {
    var i = this.cm6.state.doc;
    return this.cm6.state.sliceDoc(ei(i, e), ei(i, t));
  }
  replaceRange(e, t, i, r) {
    i || (i = t);
    var s = this.cm6.state.doc, o = ei(s, t), l = ei(s, i);
    Cl(this, { changes: { from: o, to: l, insert: e } });
  }
  replaceSelection(e) {
    Cl(this, this.cm6.state.replaceSelection(e));
  }
  replaceSelections(e) {
    var t = this.cm6.state.selection.ranges, i = t.map((r, s) => ({ from: r.from, to: r.to, insert: e[s] || "" }));
    Cl(this, { changes: i });
  }
  getSelection() {
    return this.getSelections().join(`
`);
  }
  getSelections() {
    var e = this.cm6;
    return e.state.selection.ranges.map((t) => e.state.sliceDoc(t.from, t.to));
  }
  somethingSelected() {
    return this.cm6.state.selection.ranges.some((e) => !e.empty);
  }
  getInputField() {
    return this.cm6.contentDOM;
  }
  clipPos(e) {
    var t = this.cm6.state.doc, i = e.ch, r = e.line + 1;
    r < 1 && (r = 1, i = 0), r > t.lines && (r = t.lines, i = Number.MAX_VALUE);
    var s = t.line(r);
    return i = Math.min(Math.max(0, i), s.to - s.from), new nr(r - 1, i);
  }
  getValue() {
    return this.cm6.state.doc.toString();
  }
  setValue(e) {
    var t = this.cm6;
    return t.dispatch({ changes: { from: 0, to: t.state.doc.length, insert: e }, selection: j.range(0, 0) });
  }
  focus() {
    return this.cm6.focus();
  }
  blur() {
    return this.cm6.contentDOM.blur();
  }
  defaultTextHeight() {
    return this.cm6.defaultLineHeight;
  }
  findMatchingBracket(e, t) {
    var i = this.cm6.state, r = ei(i.doc, e), s = gi(i, r + 1, -1);
    return s && s.end ? { to: hi(i.doc, s.end.from) } : (s = gi(i, r, 1), s && s.end ? { to: hi(i.doc, s.end.from) } : { to: void 0 });
  }
  scanForBracket(e, t, i, r) {
    return CE(this, e, t, i, r);
  }
  indentLine(e, t) {
    t ? this.indentMore() : this.indentLess();
  }
  indentMore() {
    fb(this.cm6);
  }
  indentLess() {
    hb(this.cm6);
  }
  execCommand(e) {
    if (e == "indentAuto") Ie.commands.indentAuto(this);
    else if (e == "goLineLeft") Uy(this.cm6);
    else if (e == "goLineRight") {
      jy(this.cm6);
      let t = this.cm6.state, i = t.selection.main.head;
      i < t.doc.length && t.sliceDoc(i, i + 1) !== `
` && WM(this.cm6);
    } else console.log(e + " is not implemented");
  }
  setBookmark(e, t) {
    var i = (t == null ? void 0 : t.insertLeft) ? 1 : -1, r = this.indexFromPos(e), s = new TE(this, r, i);
    return s;
  }
  addOverlay({ query: e }) {
    let t = new $d({ regexp: true, search: e.source, caseSensitive: !/i/.test(e.flags) });
    if (t.valid) {
      t.forVim = true, this.cm6Query = t;
      let i = ts.of(t);
      return this.cm6.dispatch({ effects: i }), t;
    }
  }
  removeOverlay(e) {
    if (!this.cm6Query) return;
    this.cm6Query.forVim = false;
    let t = ts.of(this.cm6Query);
    this.cm6.dispatch({ effects: t });
  }
  getSearchCursor(e, t) {
    var i = this, r = null, s = null, o = false;
    t.ch == null && (t.ch = Number.MAX_VALUE);
    var l = ei(i.cm6.state.doc, t), a = e.source.replace(/(\\.|{(?:\d+(?:,\d*)?|,\d+)})|[{}]/g, function(b, x) {
      return x || "\\" + b;
    });
    function f(b, x = 0, C = b.length) {
      return new Kd(b, a, { ignoreCase: e.ignoreCase }, x, C);
    }
    function h(b) {
      var x = i.cm6.state.doc;
      if (b > x.length) return null;
      let C = f(x, b).next();
      return C.done ? null : C.value;
    }
    var p = 1e4;
    function m(b, x) {
      var C = i.cm6.state.doc;
      for (let E = 1; ; E++) {
        let D = Math.max(b, x - E * p), R = f(C, D, x), I = null;
        for (; !R.next().done; ) I = R.value;
        if (I && (D == b || I.from > D + 10)) return I;
        if (D == b) return null;
      }
    }
    return { findNext: function() {
      return this.find(false);
    }, findPrevious: function() {
      return this.find(true);
    }, find: function(b) {
      var x = i.cm6.state.doc;
      if (b) {
        let C = r ? o ? r.to - 1 : r.from : l;
        r = m(0, C);
      } else {
        let C = r ? o ? r.to + 1 : r.to : l;
        r = h(C);
      }
      return s = r && { from: hi(x, r.from), to: hi(x, r.to), match: r.match }, o = r ? r.from == r.to : false, r && r.match;
    }, from: function() {
      return s == null ? void 0 : s.from;
    }, to: function() {
      return s == null ? void 0 : s.to;
    }, replace: function(b) {
      r && (Cl(i, { changes: { from: r.from, to: r.to, insert: b } }), r.to = r.from + b.length, s && (s.to = hi(i.cm6.state.doc, r.to)));
    }, get match() {
      return s && s.match;
    } };
  }
  findPosV(e, t, i, r) {
    let { cm6: s } = this;
    const o = s.state.doc;
    let l = i == "page" ? s.dom.clientHeight : 0;
    const a = ei(o, e);
    let f = j.cursor(a, 1, void 0, r), h = Math.round(Math.abs(t));
    for (let m = 0; m < h; m++) i == "page" ? f = s.moveVertically(f, t > 0, l) : i == "line" && (f = s.moveVertically(f, t > 0));
    let p = hi(o, f.head);
    return (t < 0 && f.head == 0 && r != 0 && e.line == 0 && e.ch != 0 || t > 0 && f.head == o.length && p.ch != r && e.line == p.line) && (p.hitSide = true), p;
  }
  charCoords(e, t) {
    var i = this.cm6.contentDOM.getBoundingClientRect(), r = ei(this.cm6.state.doc, e), s = this.cm6.coordsAtPos(r), o = -i.top;
    return { left: ((s == null ? void 0 : s.left) || 0) - i.left, top: ((s == null ? void 0 : s.top) || 0) + o, bottom: ((s == null ? void 0 : s.bottom) || 0) + o };
  }
  coordsChar(e, t) {
    var i = this.cm6.contentDOM.getBoundingClientRect(), r = this.cm6.posAtCoords({ x: e.left + i.left, y: e.top + i.top }) || 0;
    return hi(this.cm6.state.doc, r);
  }
  getScrollInfo() {
    var e = this.cm6.scrollDOM;
    return { left: e.scrollLeft, top: e.scrollTop, height: e.scrollHeight, width: e.scrollWidth, clientHeight: e.clientHeight, clientWidth: e.clientWidth };
  }
  scrollTo(e, t) {
    e != null && (this.cm6.scrollDOM.scrollLeft = e), t != null && (this.cm6.scrollDOM.scrollTop = t);
  }
  scrollIntoView(e, t) {
    if (e) {
      var i = this.indexFromPos(e);
      this.cm6.dispatch({ effects: he.scrollIntoView(i) });
    } else this.cm6.dispatch({ scrollIntoView: true, userEvent: "scroll" });
  }
  getWrapperElement() {
    return this.cm6.dom;
  }
  getMode() {
    return { name: this.getOption("mode") };
  }
  setSize(e, t) {
    this.cm6.dom.style.width = e + 4 + "px", this.cm6.dom.style.height = t + "px", this.refresh();
  }
  refresh() {
    this.cm6.measure();
  }
  destroy() {
    this.removeOverlay();
  }
  getLastEditEnd() {
    return this.posFromIndex(this.$lastChangeEndOffset);
  }
  onChange(e) {
    this.$lineHandleChanges && this.$lineHandleChanges.push(e);
    for (let i in this.marks) this.marks[i].update(e.changes);
    this.virtualSelection && (this.virtualSelection.ranges = this.virtualSelection.ranges.map((i) => i.map(e.changes)));
    var t = this.curOp = this.curOp || {};
    e.changes.iterChanges((i, r, s, o, l) => {
      (t.$changeStart == null || t.$changeStart > s) && (t.$changeStart = s), this.$lastChangeEndOffset = o;
      var a = { text: l.toJSON() };
      t.lastChange ? t.lastChange.next = t.lastChange = a : t.lastChange = t.change = a;
    }, true), t.changeHandlers || (t.changeHandlers = this._handlers.change && this._handlers.change.slice());
  }
  onSelectionChange() {
    var e = this.curOp = this.curOp || {};
    e.cursorActivityHandlers || (e.cursorActivityHandlers = this._handlers.cursorActivity && this._handlers.cursorActivity.slice()), this.curOp.cursorActivity = true;
  }
  operation(e, t) {
    this.curOp || (this.curOp = { $d: 0 }), this.curOp.$d++;
    try {
      var i = e();
    } finally {
      this.curOp && (this.curOp.$d--, this.curOp.$d || this.onBeforeEndOperation());
    }
    return i;
  }
  onBeforeEndOperation() {
    var e = this.curOp, t = false;
    e && (e.change && Bm(e.changeHandlers, this, e.change), e && e.cursorActivity && (Bm(e.cursorActivityHandlers, this, null), e.isVimOp && (t = true)), this.curOp = null), t && this.scrollIntoView();
  }
  moveH(e, t) {
    if (t == "char") {
      var i = this.getCursor();
      this.setCursor(i.line, i.ch + e);
    }
  }
  setOption(e, t) {
    switch (e) {
      case "keyMap":
        this.state.keyMap = t;
        break;
      case "textwidth":
        this.state.textwidth = t;
        break;
    }
  }
  getOption(e) {
    switch (e) {
      case "firstLineNumber":
        return 1;
      case "tabSize":
        return this.cm6.state.tabSize || 4;
      case "readOnly":
        return this.cm6.state.readOnly;
      case "indentWithTabs":
        return this.cm6.state.facet(Zl) == "	";
      case "indentUnit":
        return this.cm6.state.facet(Zl).length || 2;
      case "textwidth":
        return this.state.textwidth;
      case "keyMap":
        return this.state.keyMap || "vim";
    }
  }
  toggleOverwrite(e) {
    this.state.overwrite = e;
  }
  getTokenTypeAt(e) {
    var t, i = this.indexFromPos(e), r = vy(this.cm6.state, i), s = r == null ? void 0 : r.resolve(i), o = ((t = s == null ? void 0 : s.type) === null || t === void 0 ? void 0 : t.name) || "";
    return /comment/i.test(o) ? "comment" : /string/i.test(o) ? "string" : "";
  }
  overWriteSelection(e) {
    var t = this.cm6.state.doc, i = this.cm6.state.selection, r = i.ranges.map((s) => {
      if (s.empty) {
        var o = s.to < t.length ? t.sliceString(s.from, s.to + 1) : "";
        if (o && !/\n/.test(o)) return j.range(s.from, s.to + 1);
      }
      return s;
    });
    this.cm6.dispatch({ selection: j.create(r, i.mainIndex) }), this.replaceSelection(e);
  }
  isInMultiSelectMode() {
    return this.cm6.state.selection.ranges.length > 1;
  }
  virtualSelectionMode() {
    return !!this.virtualSelection;
  }
  forEachSelection(e) {
    var t = this.cm6.state.selection;
    this.virtualSelection = j.create(t.ranges, t.mainIndex);
    for (var i = 0; i < this.virtualSelection.ranges.length; i++) {
      var r = this.virtualSelection.ranges[i];
      r && (this.cm6.dispatch({ selection: j.create([r]) }), e(), this.virtualSelection.ranges[i] = this.cm6.state.selection.ranges[0]);
    }
    this.cm6.dispatch({ selection: this.virtualSelection }), this.virtualSelection = null;
  }
  hardWrap(e) {
    return EE(this, e);
  }
}
Ie.isMac = typeof navigator < "u" && /Mac/.test(navigator.platform);
Ie.Pos = nr;
Ie.StringStream = vM;
Ie.commands = { cursorCharLeft: function(n) {
  Wd(n.cm6);
}, redo: function(n) {
  Pm(n, false);
}, undo: function(n) {
  Pm(n, true);
}, newlineAndIndent: function(n) {
  Ru({ state: n.cm6.state, dispatch: (e) => Cl(n, e) });
}, indentAuto: function(n) {
  cb(n.cm6);
}, newlineAndIndentContinueComment: void 0, save: void 0 };
Ie.isWordChar = function(n) {
  return Iu.test(n);
};
Ie.keys = bE;
Ie.addClass = function(n, e) {
};
Ie.rmClass = function(n, e) {
};
Ie.e_preventDefault = function(n) {
  n.preventDefault();
};
Ie.e_stop = function(n) {
  var e, t;
  (e = n == null ? void 0 : n.stopPropagation) === null || e === void 0 || e.call(n), (t = n == null ? void 0 : n.preventDefault) === null || t === void 0 || t.call(n);
};
Ie.lookupKey = function(e, t, i) {
  var r = Ie.keys[e];
  !r && /^Arrow/.test(e) && (r = Ie.keys[e.slice(5)]), r && i(r);
};
Ie.on = Rb;
Ie.off = Bb;
Ie.signal = Pb;
Ie.findMatchingTag = ME;
Ie.findEnclosingTag = AE;
Ie.keyName = void 0;
function Ib(n, e, t) {
  var i = document.createElement("div");
  return i.appendChild(e), i;
}
function Nb(n, e) {
  n.state.currentNotificationClose && n.state.currentNotificationClose(), n.state.currentNotificationClose = e;
}
function wE(n, e, t) {
  Nb(n, l);
  var i = Ib(n, e, t && t.bottom), r = false, s, o = t && typeof t.duration < "u" ? t.duration : 5e3;
  function l() {
    r || (r = true, clearTimeout(s), i.remove(), Hb(n, i));
  }
  return i.onclick = function(a) {
    a.preventDefault(), l();
  }, Fb(n, i), o && (s = setTimeout(l, o)), l;
}
function Fb(n, e) {
  var t = n.state.dialog;
  n.state.dialog = e, e.style.flex = "1", e && t !== e && (t && t.contains(document.activeElement) && n.focus(), t && t.parentElement ? t.parentElement.replaceChild(e, t) : t && t.remove(), Ie.signal(n, "dialog"));
}
function Hb(n, e) {
  n.state.dialog == e && (n.state.dialog = null, Ie.signal(n, "dialog"));
}
function xE(n, e, t, i) {
  i || (i = {}), Nb(n, void 0);
  var r = Ib(n, e, i.bottom), s = false;
  Fb(n, r);
  function o(a) {
    if (typeof a == "string") l.value = a;
    else {
      if (s) return;
      s = true, Hb(n, r), n.state.dialog || n.focus(), i.onClose && i.onClose(r);
    }
  }
  var l = r.getElementsByTagName("input")[0];
  return l && (i.value && (l.value = i.value, i.selectValueOnOpen !== false && l.select()), i.onInput && Ie.on(l, "input", function(a) {
    i.onInput(a, l.value, o);
  }), i.onKeyUp && Ie.on(l, "keyup", function(a) {
    i.onKeyUp(a, l.value, o);
  }), Ie.on(l, "keydown", function(a) {
    i && i.onKeyDown && i.onKeyDown(a, l.value, o) || (a.keyCode == 13 && t && t(l.value), (a.keyCode == 27 || i.closeOnEnter !== false && a.keyCode == 13) && (l.blur(), Ie.e_stop(a), o()));
  }), i.closeOnBlur !== false && Ie.on(l, "blur", function() {
    setTimeout(function() {
      document.activeElement !== l && o();
    });
  }), l.focus()), o;
}
var kE = { "(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<", "<": ">>", ">": "<<" };
function SE(n) {
  return n && n.bracketRegex || /[(){}[\]]/;
}
function CE(n, e, t, i, r) {
  for (var s = r && r.maxScanLineLength || 1e4, o = r && r.maxScanLines || 1e3, l = [], a = SE(r), f = t > 0 ? Math.min(e.line + o, n.lastLine() + 1) : Math.max(n.firstLine() - 1, e.line - o), h = e.line; h != f; h += t) {
    var p = n.getLine(h);
    if (p) {
      var m = t > 0 ? 0 : p.length - 1, b = t > 0 ? p.length : -1;
      if (!(p.length > s)) for (h == e.line && (m = e.ch - (t < 0 ? 1 : 0)); m != b; m += t) {
        var x = p.charAt(m);
        if (a.test(x)) {
          var C = kE[x];
          if (C && C.charAt(1) == ">" == t > 0) l.push(x);
          else if (l.length) l.pop();
          else return { pos: new nr(h, m), ch: x };
        }
      }
    }
  }
  return h - t == (t > 0 ? n.lastLine() : n.firstLine()) ? false : null;
}
function ME(n, e) {
  return null;
}
function AE(n, e) {
  var t, i, r = n.cm6.state, s = n.indexFromPos(e);
  if (s < r.doc.length) {
    var o = r.sliceDoc(s, s + 1);
    o == "<" && s++;
  }
  for (var l = vy(r, s), a = (l == null ? void 0 : l.resolve(s)) || null; a; ) {
    if (((t = a.firstChild) === null || t === void 0 ? void 0 : t.type.name) == "OpenTag" && ((i = a.lastChild) === null || i === void 0 ? void 0 : i.type.name) == "CloseTag") return { open: Im(r.doc, a.firstChild), close: Im(r.doc, a.lastChild) };
    a = a.parent;
  }
}
function Im(n, e) {
  return { from: hi(n, e.from), to: hi(n, e.to) };
}
class TE {
  constructor(e, t, i) {
    this.cm = e, this.id = e.$mid++, this.offset = t, this.assoc = i, e.marks[this.id] = this;
  }
  clear() {
    delete this.cm.marks[this.id];
  }
  find() {
    return this.offset == null ? null : this.cm.posFromIndex(this.offset);
  }
  update(e) {
    this.offset != null && (this.offset = e.mapPos(this.offset, this.assoc, an.TrackDel));
  }
}
function EE(n, e) {
  for (var t, i = e.column || n.getOption("textwidth") || 80, r = e.allowMerge != false, s = Math.min(e.from, e.to), o = Math.max(e.from, e.to); s <= o; ) {
    var l = n.getLine(s);
    if (l.length > i) {
      var a = x(l, i, 5);
      if (a) {
        var f = (t = /^\s*/.exec(l)) === null || t === void 0 ? void 0 : t[0];
        n.replaceRange(`
` + f, new nr(s, a.start), new nr(s, a.end));
      }
      o++;
    } else if (r && /\S/.test(l) && s != o) {
      var h = n.getLine(s + 1);
      if (h && /\S/.test(h)) {
        var p = l.replace(/\s+$/, ""), m = h.replace(/^\s+/, ""), b = p + " " + m, a = x(b, i, 5);
        a && a.start > p.length || b.length < i ? (n.replaceRange(" ", new nr(s, p.length), new nr(s + 1, h.length - m.length)), s--, o--) : p.length < l.length && n.replaceRange("", new nr(s, p.length), new nr(s, l.length));
      }
    }
    s++;
  }
  return s;
  function x(C, E, D) {
    if (!(C.length < E)) {
      var R = C.slice(0, E), I = C.slice(E), z = /^(?:(\s+)|(\S+)(\s+))/.exec(I), K = /(?:(\s+)|(\s+)(\S+))$/.exec(R), W = 0, $ = 0;
      if (K && !K[2] && (W = E - K[1].length, $ = E), z && !z[2] && (W || (W = E), $ = E + z[1].length), W) return { start: W, end: $ };
      if (K && K[2] && K.index > D) return { start: K.index, end: K.index + K[2].length };
      if (z && z[2]) return W = E + z[2].length, { start: W, end: W + z[3].length };
    }
  }
}
let Nu = bS || /* @__PURE__ */ (function() {
  let n = { cursorBlinkRate: 1200 };
  return function() {
    return n;
  };
})();
class OE {
  constructor(e, t, i, r, s, o, l, a, f, h) {
    this.left = e, this.top = t, this.height = i, this.fontFamily = r, this.fontSize = s, this.fontWeight = o, this.color = l, this.className = a, this.letter = f, this.partial = h;
  }
  draw() {
    let e = document.createElement("div");
    return e.className = this.className, this.adjust(e), e;
  }
  adjust(e) {
    e.style.left = this.left + "px", e.style.top = this.top + "px", e.style.height = this.height + "px", e.style.lineHeight = this.height + "px", e.style.fontFamily = this.fontFamily, e.style.fontSize = this.fontSize, e.style.fontWeight = this.fontWeight, e.style.color = this.partial ? "transparent" : this.color, e.className = this.className, e.textContent = this.letter;
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.height == e.height && this.fontFamily == e.fontFamily && this.fontSize == e.fontSize && this.fontWeight == e.fontWeight && this.color == e.color && this.className == e.className && this.letter == e.letter;
  }
}
class _E {
  constructor(e, t) {
    this.view = e, this.rangePieces = [], this.cursors = [], this.cm = t, this.measureReq = { read: this.readPos.bind(this), write: this.drawSel.bind(this) }, this.cursorLayer = e.scrollDOM.appendChild(document.createElement("div")), this.cursorLayer.className = "cm-cursorLayer cm-vimCursorLayer", this.cursorLayer.setAttribute("aria-hidden", "true"), e.requestMeasure(this.measureReq), this.setBlinkRate();
  }
  setBlinkRate() {
    let t = Nu(this.cm.cm6.state).cursorBlinkRate;
    this.cursorLayer.style.animationDuration = t + "ms";
  }
  update(e) {
    (e.selectionSet || e.geometryChanged || e.viewportChanged) && (this.view.requestMeasure(this.measureReq), this.cursorLayer.style.animationName = this.cursorLayer.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink"), LE(e) && this.setBlinkRate();
  }
  scheduleRedraw() {
    this.view.requestMeasure(this.measureReq);
  }
  readPos() {
    let { state: e } = this.view, t = [];
    for (let i of e.selection.ranges) {
      let r = i == e.selection.main, s = PE(this.cm, this.view, i, r);
      s && t.push(s);
    }
    return { cursors: t };
  }
  drawSel({ cursors: e }) {
    if (e.length != this.cursors.length || e.some((t, i) => !t.eq(this.cursors[i]))) {
      let t = this.cursorLayer.children;
      if (t.length !== e.length) {
        this.cursorLayer.textContent = "";
        for (const i of e) this.cursorLayer.appendChild(i.draw());
      } else e.forEach((i, r) => i.adjust(t[r]));
      this.cursors = e;
    }
  }
  destroy() {
    this.cursorLayer.remove();
  }
}
function LE(n) {
  return Nu(n.startState) != Nu(n.state);
}
const DE = { ".cm-vimMode .cm-line": { "& ::selection": { backgroundColor: "transparent !important" }, "&::selection": { backgroundColor: "transparent !important" }, caretColor: "transparent !important" }, ".cm-fat-cursor": { position: "absolute", background: "#ff9696", border: "none", whiteSpace: "pre" }, "&:not(.cm-focused) .cm-fat-cursor": { background: "none", outline: "solid 1px #ff9696", color: "transparent !important" } }, RE = Tr.highest(he.theme(DE));
function BE(n) {
  let e = n.scrollDOM.getBoundingClientRect();
  return { left: (n.textDirection == at.LTR ? e.left : e.right - n.scrollDOM.clientWidth) - n.scrollDOM.scrollLeft * n.scaleX, top: e.top - n.scrollDOM.scrollTop * n.scaleY };
}
function PE(n, e, t, i) {
  var r, s, o, l;
  let a = t.head, f = false, h = 1, p = n.state.vim;
  if (p && (!p.insertMode || n.state.overwrite)) {
    if (f = true, p.visualBlock && !i) return null;
    t.anchor < t.head && (a < e.state.doc.length && e.state.sliceDoc(a, a + 1)) != `
` && a--, n.state.overwrite ? h = 0.2 : p.status && (h = 0.5);
  }
  if (f) {
    let b = a < e.state.doc.length && e.state.sliceDoc(a, a + 1);
    b && /[\uDC00-\uDFFF]/.test(b) && a > 1 && (a--, b = e.state.sliceDoc(a, a + 1));
    let x = e.coordsAtPos(a, 1);
    if (!x) return null;
    let C = BE(e), E = e.domAtPos(a), D = E ? E.node : e.contentDOM;
    for (D instanceof Text && E.offset >= D.data.length && !((r = D.parentElement) === null || r === void 0) && r.nextSibling && (D = (s = D.parentElement) === null || s === void 0 ? void 0 : s.nextSibling, E = { node: D, offset: 0 }); E && E.node instanceof HTMLElement; ) D = E.node, E = { node: E.node.childNodes[E.offset], offset: 0 };
    if (!(D instanceof HTMLElement)) {
      if (!D.parentNode) return null;
      D = D.parentNode;
    }
    let R = getComputedStyle(D), I = x.left, z = (l = (o = e).coordsForChar) === null || l === void 0 ? void 0 : l.call(o, a);
    if (z && (I = z.left), !b || b == `
` || b == "\r") b = "\xA0";
    else if (b == "	") {
      b = "\xA0";
      var m = e.coordsAtPos(a + 1, -1);
      m && (I = m.left - (m.left - x.left) / parseInt(R.tabSize));
    } else /[\uD800-\uDBFF]/.test(b) && a < e.state.doc.length - 1 && (b += e.state.sliceDoc(a + 1, a + 2));
    let K = x.bottom - x.top;
    return new OE((I - C.left) / e.scaleX, (x.top - C.top + K * (1 - h)) / e.scaleY, K * h / e.scaleY, R.fontFamily, R.fontSize, R.fontWeight, R.color, i ? "cm-fat-cursor cm-cursor-primary" : "cm-fat-cursor cm-cursor-secondary", b, h != 1);
  } else return null;
}
var IE = typeof navigator < "u" && /linux/i.test(navigator.platform) && / Gecko\/\d+/.exec(navigator.userAgent);
const ps = yE(Ie), NE = 250, FE = he.baseTheme({ ".cm-vimMode .cm-cursorLayer:not(.cm-vimCursorLayer)": { display: "none" }, ".cm-vim-panel": { padding: "0px 10px", fontFamily: "monospace", minHeight: "1.3em", display: "flex" }, ".cm-vim-panel input": { border: "none", outline: "none", backgroundColor: "inherit" }, "&light .cm-searchMatch": { backgroundColor: "#ffff0054" }, "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" } }), HE = xt.fromClass(class {
  constructor(n) {
    this.status = "", this.query = null, this.decorations = be.none, this.waitForCopy = false, this.lastKeydown = "", this.useNextTextInput = false, this.compositionText = "", this.view = n;
    const e = this.cm = new Ie(n);
    ps.enterVimMode(this.cm), this.view.cm = this.cm, this.cm.state.vimPlugin = this, this.blockCursor = new _E(n, e), this.updateClass(), this.cm.on("vim-command-done", () => {
      e.state.vim && (e.state.vim.status = ""), this.blockCursor.scheduleRedraw(), this.updateStatus();
    }), this.cm.on("vim-mode-change", (t) => {
      e.state.vim && (e.state.vim.mode = t.mode, t.subMode && (e.state.vim.mode += " block"), e.state.vim.status = "", this.blockCursor.scheduleRedraw(), this.updateClass(), this.updateStatus());
    }), this.cm.on("dialog", () => {
      this.cm.state.statusbar ? this.updateStatus() : n.dispatch({ effects: Wb.of(!!this.cm.state.dialog) });
    }), this.dom = document.createElement("span"), this.spacer = document.createElement("span"), this.spacer.style.flex = "1", this.statusButton = document.createElement("span"), this.statusButton.onclick = (t) => {
      ps.handleKey(this.cm, "<Esc>", "user"), this.cm.focus();
    }, this.statusButton.style.cssText = "cursor: pointer";
  }
  update(n) {
    var e;
    if ((n.viewportChanged || n.docChanged) && this.query && this.highlight(this.query), n.docChanged && this.cm.onChange(n), n.selectionSet && this.cm.onSelectionChange(), n.viewportChanged, this.cm.curOp && !this.cm.curOp.isVimOp && this.cm.onBeforeEndOperation(), n.transactions) {
      for (let t of n.transactions) for (let i of t.effects) if (i.is(ts)) if (!((e = i.value) === null || e === void 0 ? void 0 : e.forVim)) this.highlight(null);
      else {
        let s = i.value.create();
        this.highlight(s);
      }
    }
    this.blockCursor.update(n);
  }
  updateClass() {
    const n = this.cm.state;
    !n.vim || n.vim.insertMode && !n.overwrite ? this.view.scrollDOM.classList.remove("cm-vimMode") : this.view.scrollDOM.classList.add("cm-vimMode");
  }
  updateStatus() {
    let n = this.cm.state.statusbar, e = this.cm.state.vim;
    if (!n || !e) return;
    let t = this.cm.state.dialog;
    if (t) t.parentElement != n && (n.textContent = "", n.appendChild(t));
    else {
      n.textContent = "";
      var i = (e.mode || "normal").toUpperCase();
      e.insertModeReturn && (i += "(C-O)"), this.statusButton.textContent = `--${i}--`, n.appendChild(this.statusButton), n.appendChild(this.spacer);
    }
    this.dom.textContent = e.status, n.appendChild(this.dom);
  }
  destroy() {
    ps.leaveVimMode(this.cm), this.updateClass(), this.blockCursor.destroy(), delete this.view.cm;
  }
  highlight(n) {
    if (this.query = n, !n) return this.decorations = be.none;
    let { view: e } = this, t = new Bi();
    for (let i = 0, r = e.visibleRanges, s = r.length; i < s; i++) {
      let { from: o, to: l } = r[i];
      for (; i < s - 1 && l > r[i + 1].from - 2 * NE; ) l = r[++i].to;
      n.highlight(e.state, o, l, (a, f) => {
        t.add(a, f, VE);
      });
    }
    return this.decorations = t.finish();
  }
  handleKey(n, e) {
    const t = this.cm;
    let i = t.state.vim;
    if (!i) return;
    const r = ps.vimKeyFromEvent(n, i);
    if (Ie.signal(this.cm, "inputEvent", { type: "handleKey", key: r }), !r) return;
    if (r == "<Esc>" && !i.insertMode && !i.visualMode && this.query) {
      const l = i.searchState_;
      l && (t.removeOverlay(l.getOverlay()), l.setOverlay(null));
    }
    if (r === "<C-c>" && !Ie.isMac && t.somethingSelected()) return this.waitForCopy = true, true;
    i.status = (i.status || "") + r;
    let o = ps.multiSelectHandleKey(t, r, "user");
    return i = ps.maybeInitVimState_(t), !o && i.insertMode && t.state.overwrite && (n.key && n.key.length == 1 && !/\n/.test(n.key) ? (o = true, t.overWriteSelection(n.key)) : n.key == "Backspace" && (o = true, Ie.commands.cursorCharLeft(t))), o && (Ie.signal(this.cm, "vim-keypress", r), n.preventDefault(), n.stopPropagation(), this.blockCursor.scheduleRedraw()), this.updateStatus(), !!o;
  }
}, { eventHandlers: { copy: function(n, e) {
  this.waitForCopy && (this.waitForCopy = false, Promise.resolve().then(() => {
    var t = this.cm, i = t.state.vim;
    i && (i.insertMode ? t.setSelection(t.getCursor(), t.getCursor()) : t.operation(() => {
      t.curOp && (t.curOp.isVimOp = true), ps.handleKey(t, "<Esc>", "user");
    }));
  }));
}, compositionstart: function(n, e) {
  this.useNextTextInput = true, Ie.signal(this.cm, "inputEvent", n);
}, compositionupdate: function(n, e) {
  Ie.signal(this.cm, "inputEvent", n);
}, compositionend: function(n, e) {
  Ie.signal(this.cm, "inputEvent", n);
}, keypress: function(n, e) {
  Ie.signal(this.cm, "inputEvent", n), this.lastKeydown == "Dead" && this.handleKey(n, e);
}, keydown: function(n, e) {
  Ie.signal(this.cm, "inputEvent", n), this.lastKeydown = n.key, this.lastKeydown == "Unidentified" || this.lastKeydown == "Process" || this.lastKeydown == "Dead" ? this.useNextTextInput = true : (this.useNextTextInput = false, this.handleKey(n, e));
} }, provide: () => [he.inputHandler.of((n, e, t, i) => {
  var r, s, o = UE(n);
  if (!o) return false;
  var l = (r = o.state) === null || r === void 0 ? void 0 : r.vim, a = o.state.vimPlugin;
  if (l && !l.insertMode && !(!((s = o.curOp) === null || s === void 0) && s.isVimOp)) {
    if (i === "\0\0") return true;
    if (Ie.signal(o, "inputEvent", { type: "text", text: i, from: e, to: t }), i.length == 1 && a.useNextTextInput) {
      if (l.expectLiteralNext && n.composing) return a.compositionText = i, false;
      if (a.compositionText) {
        var f = a.compositionText;
        a.compositionText = "";
        var h = n.state.selection.main.head, p = n.state.sliceDoc(h - f.length, h);
        if (f === p) {
          var m = o.getCursor();
          o.replaceRange("", o.posFromIndex(h - f.length), m);
        }
      }
      return a.handleKey({ key: i, preventDefault: () => {
      }, stopPropagation: () => {
      } }), WE(n), true;
    }
  }
  return false;
})], decorations: (n) => n.decorations });
function WE(n) {
  var e = n.scrollDOM.parentElement;
  if (e) {
    if (IE) {
      n.contentDOM.textContent = "\0\0", n.contentDOM.dispatchEvent(new CustomEvent("compositionend"));
      return;
    }
    var t = n.scrollDOM.nextSibling, i = window.getSelection(), r = i && { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset };
    n.scrollDOM.remove(), e.insertBefore(n.scrollDOM, t);
    try {
      r && i && (i.setPosition(r.anchorNode, r.anchorOffset), r.focusNode && i.extend(r.focusNode, r.focusOffset));
    } catch (s) {
      console.error(s);
    }
    n.focus(), n.contentDOM.dispatchEvent(new CustomEvent("compositionend"));
  }
}
const VE = be.mark({ class: "cm-searchMatch" }), Wb = Te.define(), zE = tn.define({ create: () => false, update(n, e) {
  for (let t of e.effects) t.is(Wb) && (n = t.value);
  return n;
}, provide: (n) => Vs.from(n, (e) => e ? KE : null) });
function KE(n) {
  let e = document.createElement("div");
  e.className = "cm-vim-panel";
  let t = n.cm;
  return t.state.dialog && e.appendChild(t.state.dialog), { top: false, dom: e };
}
function $E(n) {
  let e = document.createElement("div");
  e.className = "cm-vim-panel";
  let t = n.cm;
  return t.state.statusbar = e, t.state.vimPlugin.updateStatus(), { dom: e };
}
function jE(n = {}) {
  return [FE, HE, RE, n.status ? Vs.of($E) : zE];
}
function UE(n) {
  return n.cm || null;
}
function Vb(n, e) {
  const t = Wo(n, gt.__wbindgen_export, gt.__wbindgen_export2), i = is, r = gt.completions(t, i, e);
  return cr(r);
}
function zb(n) {
  const e = Wo(n, gt.__wbindgen_export, gt.__wbindgen_export2), t = is, i = gt.diagnostics(e, t);
  return cr(i);
}
function qE(n) {
  const e = Wo(n, gt.__wbindgen_export, gt.__wbindgen_export2), t = is, i = gt.function_info(e, t);
  return cr(i);
}
function Kb(n) {
  try {
    const r = gt.__wbindgen_add_to_stack_pointer(-16), s = Wo(n, gt.__wbindgen_export, gt.__wbindgen_export2), o = is;
    gt.parse_wasm(r, s, o);
    var e = Il().getInt32(r + 0, true), t = Il().getInt32(r + 4, true), i = Il().getInt32(r + 8, true);
    if (i) throw cr(t);
    return cr(e);
  } finally {
    gt.__wbindgen_add_to_stack_pointer(16);
  }
}
function GE(n) {
  const e = Wo(n, gt.__wbindgen_export, gt.__wbindgen_export2), t = is, i = gt.tokenize(e, t);
  return cr(i);
}
function YE() {
  return { __proto__: null, "./mpl_lang_bg.js": { __proto__: null, __wbg_Error_83742b46f01ce22d: function(e, t) {
    const i = Error(Sh(e, t));
    return Ji(i);
  }, __wbg_Number_a5a435bd7bbec835: function(e) {
    return Number(Zi(e));
  }, __wbg_String_8564e559799eccda: function(e, t) {
    const i = String(Zi(t)), r = Wo(i, gt.__wbindgen_export, gt.__wbindgen_export2), s = is;
    Il().setInt32(e + 4, s, true), Il().setInt32(e + 0, r, true);
  }, __wbg___wbindgen_is_string_7ef6b97b02428fae: function(e) {
    return typeof Zi(e) == "string";
  }, __wbg___wbindgen_throw_6ddd609b62940d55: function(e, t) {
    throw new Error(Sh(e, t));
  }, __wbg_new_49d5571bd3f0c4d4: function() {
    return Ji(/* @__PURE__ */ new Map());
  }, __wbg_new_a70fbab9066b301f: function() {
    const e = new Array();
    return Ji(e);
  }, __wbg_new_ab79df5bd7c26067: function() {
    const e = new Object();
    return Ji(e);
  }, __wbg_set_282384002438957f: function(e, t, i) {
    Zi(e)[t >>> 0] = cr(i);
  }, __wbg_set_6be42768c690e380: function(e, t, i) {
    Zi(e)[cr(t)] = cr(i);
  }, __wbg_set_bf7251625df30a02: function(e, t, i) {
    const r = Zi(e).set(Zi(t), Zi(i));
    return Ji(r);
  }, __wbindgen_cast_0000000000000001: function(e) {
    return Ji(e);
  }, __wbindgen_cast_0000000000000002: function(e) {
    return Ji(e);
  }, __wbindgen_cast_0000000000000003: function(e, t) {
    const i = Sh(e, t);
    return Ji(i);
  }, __wbindgen_cast_0000000000000004: function(e) {
    const t = BigInt.asUintN(64, e);
    return Ji(t);
  }, __wbindgen_object_clone_ref: function(e) {
    const t = Zi(e);
    return Ji(t);
  }, __wbindgen_object_drop_ref: function(e) {
    cr(e);
  } } };
}
function Ji(n) {
  Nl === br.length && br.push(br.length + 1);
  const e = Nl;
  return Nl = br[e], br[e] = n, e;
}
function JE(n) {
  n < 1028 || (br[n] = Nl, Nl = n);
}
let ys = null;
function Il() {
  return (ys === null || ys.buffer.detached === true || ys.buffer.detached === void 0 && ys.buffer !== gt.memory.buffer) && (ys = new DataView(gt.memory.buffer)), ys;
}
function Sh(n, e) {
  return n = n >>> 0, XE(n, e);
}
let Ml = null;
function xc() {
  return (Ml === null || Ml.byteLength === 0) && (Ml = new Uint8Array(gt.memory.buffer)), Ml;
}
function Zi(n) {
  return br[n];
}
let br = new Array(1024).fill(void 0);
br.push(void 0, null, true, false);
let Nl = br.length;
function Wo(n, e, t) {
  if (t === void 0) {
    const l = Fl.encode(n), a = e(l.length, 1) >>> 0;
    return xc().subarray(a, a + l.length).set(l), is = l.length, a;
  }
  let i = n.length, r = e(i, 1) >>> 0;
  const s = xc();
  let o = 0;
  for (; o < i; o++) {
    const l = n.charCodeAt(o);
    if (l > 127) break;
    s[r + o] = l;
  }
  if (o !== i) {
    o !== 0 && (n = n.slice(o)), r = t(r, i, i = o + n.length * 3, 1) >>> 0;
    const l = xc().subarray(r + o, r + i), a = Fl.encodeInto(n, l);
    o += a.written, r = t(r, i, o, 1) >>> 0;
  }
  return is = o, r;
}
function cr(n) {
  const e = Zi(n);
  return JE(n), e;
}
let kc = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
kc.decode();
const QE = 2146435072;
let Ch = 0;
function XE(n, e) {
  return Ch += e, Ch >= QE && (kc = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), kc.decode(), Ch = e), kc.decode(xc().subarray(n, n + e));
}
const Fl = new TextEncoder();
"encodeInto" in Fl || (Fl.encodeInto = function(n, e) {
  const t = Fl.encode(n);
  return e.set(t), { read: n.length, written: t.length };
});
let is = 0, gt;
function ZE(n, e) {
  return gt = n.exports, ys = null, Ml = null, gt;
}
async function eO(n, e) {
  if (typeof Response == "function" && n instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(n, e);
    } catch (r) {
      if (n.ok && t(n.type) && n.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r;
    }
    const i = await n.arrayBuffer();
    return await WebAssembly.instantiate(i, e);
  } else {
    const i = await WebAssembly.instantiate(n, e);
    return i instanceof WebAssembly.Instance ? { instance: i, module: n } : i;
  }
  function t(i) {
    switch (i) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
async function tO(n) {
  if (gt !== void 0) return gt;
  n !== void 0 && (Object.getPrototypeOf(n) === Object.prototype ? { module_or_path: n } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), n === void 0 && (n = new URL("/assets/mpl_lang_bg-CTlf0oO4.wasm", import.meta.url));
  const e = YE();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const { instance: t, module: i } = await eO(await n, e);
  return ZE(t);
}
const Fu = /\b(filter|where|map|group|by|using|align|to|over|from|bucket|join|compute|set|replace|as|and|or|not|is|param|rate|increase|histogram|interpolate_delta_histogram|interpolate_cumulative_histogram|count|avg|sum|min|max)\b/g, nO = /\/\/[^\n]*/g, iO = /"(?:[^"\\]|\\.)*"/g, rO = /#s?\/(?:[^/\\]|\\.)*(?:\/(?:[^/\\]|\\.)*)?\//g, sO = /\b\d+(\.\d*)?([eE][+-]?\d+)?[smhdwMy]?\b/g, oO = /\b(true|false)\b/g, lO = /\b(string|int|float|bool|dataset|metric|duration|regex)\b/g, vr = { keyword: be.mark({ class: "mpl-keyword" }), variable: be.mark({ class: "mpl-variable" }), string: be.mark({ class: "mpl-string" }), number: be.mark({ class: "mpl-number" }), bool: be.mark({ class: "mpl-bool" }), regexp: be.mark({ class: "mpl-regexp" }), operator: be.mark({ class: "mpl-operator" }), punctuation: be.mark({ class: "mpl-punctuation" }), type: be.mark({ class: "mpl-type" }), comment: be.mark({ class: "mpl-comment" }) };
function gs(n, e, t, i, r) {
  n.lastIndex = 0;
  let s;
  for (; (s = n.exec(e)) !== null; ) r.push({ from: s.index, to: s.index + s[0].length, deco: t, priority: i });
}
function Nm(n) {
  const e = n.state.doc.toString(), t = [];
  gs(nO, e, vr.comment, 30, t);
  let i = null;
  try {
    i = GE(e);
  } catch {
  }
  if (i && i.length > 0) {
    for (const s of i) {
      const o = vr[s.type];
      o && t.push({ from: s.from, to: s.to, deco: o, priority: 20 });
    }
    const r = i.map((s) => [s.from, s.to]);
    aO(e, r, t);
  } else gs(iO, e, vr.string, 10, t), gs(rO, e, vr.regexp, 10, t), gs(oO, e, vr.bool, 10, t), gs(sO, e, vr.number, 5, t), gs(lO, e, vr.type, 10, t), gs(Fu, e, vr.keyword, 10, t);
  return cO(t);
}
function aO(n, e, t) {
  Fu.lastIndex = 0;
  let i;
  for (; (i = Fu.exec(n)) !== null; ) {
    const r = i.index, s = r + i[0].length;
    e.some(([o, l]) => r < l && s > o) || t.push({ from: r, to: s, deco: vr.keyword, priority: 10 });
  }
}
function cO(n) {
  n.sort((i, r) => r.priority - i.priority || i.from - r.from);
  const e = [];
  for (const i of n) e.some((r) => i.from < r.to && i.to > r.from) || e.push(i);
  e.sort((i, r) => i.from - r.from);
  const t = new Bi();
  for (const i of e) i.from < i.to && t.add(i.from, i.to, i.deco);
  return t.finish();
}
const fO = xt.fromClass(class {
  constructor(n) {
    __publicField(this, "decorations");
    this.decorations = Nm(n);
  }
  update(n) {
    (n.docChanged || n.viewportChanged) && (this.decorations = Nm(n.view));
  }
}, { decorations: (n) => n.decorations });
function xo(n) {
  if (n === "Float") return "float";
  if (typeof n == "object") {
    if ("Enum" in n) return `enum(${n.Enum.join(", ")})`;
    if ("Repeated" in n) {
      const { typ: e, min: t, max: i } = n.Repeated;
      let r = `repeated(${xo(e)}`;
      return t > 0 && (r += `, min=${t}`), i !== null && (r += `, max=${i}`), r + ")";
    }
    if ("OneOf" in n) return `one_of(${n.OneOf.map(xo).join(", ")})`;
    if ("Optional" in n) return `[${xo(n.Optional)}]`;
  }
  return "unknown";
}
function $b(n) {
  if (n.length !== 0) return `(${n.map((e) => `${e.name}: ${xo(e.type)}`).join(", ")})`;
}
const Mh = /* @__PURE__ */ new Map();
function jb(n) {
  if (Mh.has(n)) return Mh.get(n);
  let e = null;
  try {
    e = qE(n);
  } catch {
  }
  return Mh.set(n, e), e;
}
const hO = 3e4;
class Ah {
  constructor(e = hO) {
    __publicField(this, "entries", /* @__PURE__ */ new Map());
    __publicField(this, "ttlMs");
    this.ttlMs = e;
  }
  get(e) {
    if (this.ttlMs <= 0) return;
    const t = this.entries.get(e);
    if (t) {
      if (Date.now() - t.timestamp > this.ttlMs) {
        this.entries.delete(e);
        return;
      }
      return t.data;
    }
  }
  set(e, t) {
    this.ttlMs <= 0 || this.entries.set(e, { data: t, timestamp: Date.now() });
  }
}
const Ub = Ke.languageData.of(() => [{ wordChars: "`$" }]);
function uO(n) {
  const e = n.state.doc.toString();
  let t = null;
  try {
    t = Vb(e, n.pos);
  } catch {
    return null;
  }
  return t ? t.kind === "params" ? t.options.length === 0 ? null : { from: t.from, to: t.to, options: t.options.map((i) => ({ label: i.label, type: "variable", detail: i.type })), filter: false } : t.kind === "tag" ? { from: t.from, to: t.to, options: [{ label: `<tag for ${t.dataset}:${t.metric}>`, type: "variable", info: "Tag completions not yet connected" }], filter: false } : t.kind === "dataset" ? { from: t.from, to: t.to, options: [{ label: "<dataset>", type: "variable", info: "Dataset completions not yet connected" }], filter: false } : t.kind === "metric" ? { from: t.from, to: t.to, options: [{ label: `<metric for ${t.dataset}>`, type: "variable", info: "Metric completions not yet connected" }], filter: false } : t.options.length === 0 ? null : t.kind === "keywords" ? { from: t.from, to: t.to, options: t.options.map((i) => ({ label: i.label, ...i.apply ? { apply: i.apply } : {}, type: "keyword", info: i.info })), filter: false } : { from: t.from, to: t.to, options: t.options.map((i) => ({ label: i.label, type: "function", detail: $b(i.args), info: i.info })), filter: false } : null;
}
Xd({ override: [uO] });
function dO(n) {
  const e = new Ah(n.cacheTtlMs), t = new Ah(n.cacheTtlMs), i = new Ah(n.cacheTtlMs);
  return async (r) => {
    const s = r.state.doc.toString();
    let o = null;
    try {
      o = Vb(s, r.pos);
    } catch {
      return null;
    }
    if (!o) return null;
    if (o.kind === "params") return o.options.length === 0 ? null : { from: o.from, to: o.to, options: o.options.map((l) => ({ label: l.label, type: "variable", detail: l.type })), filter: false };
    if (o.kind === "tag") try {
      const l = `${o.dataset}\0${o.metric}`;
      let a = i.get(l);
      a || (a = await n.tags(o.dataset, o.metric), i.set(l, a));
      const f = o.from > 0 && s.charAt(o.from - 1) === "`";
      return { from: o.from, to: o.to, options: a.map((h) => {
        const p = Th(h, f);
        return p !== h ? { label: h, apply: p, type: "variable" } : { label: h, type: "variable" };
      }), filter: true };
    } catch {
      return null;
    }
    if (o.kind === "dataset") try {
      let l = e.get("");
      l || (l = await n.datasets(), e.set("", l));
      const a = o.from > 0 && s.charAt(o.from - 1) === "`";
      return { from: o.from, to: o.to, options: l.map((f) => {
        const h = Th(f, a);
        return h !== f ? { label: f, apply: h, type: "variable" } : { label: f, type: "variable" };
      }), filter: true };
    } catch {
      return null;
    }
    if (o.kind === "metric") try {
      let l = t.get(o.dataset);
      l || (l = await n.metrics(o.dataset), t.set(o.dataset, l));
      const a = o.from > 0 && s.charAt(o.from - 1) === "`";
      return { from: o.from, to: o.to, options: l.map((f) => {
        const h = Th(f, a);
        return h !== f ? { label: f, apply: h, type: "variable" } : { label: f, type: "variable" };
      }), filter: true };
    } catch {
      return null;
    }
    return o.options.length === 0 ? null : o.kind === "keywords" ? { from: o.from, to: o.to, options: o.options.map((l) => ({ label: l.label, ...l.apply ? { apply: l.apply } : {}, type: "keyword", info: l.info })), filter: false } : { from: o.from, to: o.to, options: o.options.map((l) => ({ label: l.label, type: "function", detail: $b(l.args), info: l.info })), filter: false };
  };
}
function pO(n) {
  return [Ub, Xd({ override: [dO(n)] })];
}
const gO = /^[A-Za-z][A-Za-z0-9_]*$/;
function mO(n) {
  return !gO.test(n);
}
function Th(n, e) {
  const t = n.replace(/\\/g, "\\\\").replace(/`/g, "\\`");
  return e ? t + "`" : mO(n) ? "`" + t + "`" : n;
}
function vO(n) {
  if (!(!n || n.length === 0)) return n.map((e) => ({ name: e.name, apply(t) {
    t.dispatch({ changes: { from: e.from, to: e.to, insert: e.insert } });
  } }));
}
function yO(n) {
  const e = n.state.doc.toString();
  let t;
  try {
    t = zb(e) ?? [];
  } catch {
    return [];
  }
  return t.map((i) => ({ from: i.from, to: Math.max(i.from + 1, i.to), severity: i.severity, message: i.help ? `${i.message}
${i.help}` : i.message, actions: vO(i.actions) }));
}
const bO = tE(yO);
function wO(n, e) {
  let t = 0, i = -1, r = e - 1;
  for (; r >= 0; ) {
    const m = n[r];
    if (m === '"') {
      for (r--; r >= 0; ) {
        if (n[r] === '"') {
          let b = 0, x = r - 1;
          for (; x >= 0 && n[x] === "\\"; ) b++, x--;
          if (b % 2 === 0) break;
        }
        r--;
      }
      r--;
      continue;
    }
    if (m === "/") {
      const b = r;
      let x = 1;
      for (r--; r >= 0; ) {
        if (n[r] === "/" && (r === 0 || n[r - 1] !== "\\")) {
          if (x++, r > 0 && n[r - 1] === "#") {
            r -= 2;
            break;
          }
          if (r > 1 && n[r - 1] === "s" && n[r - 2] === "#") {
            r -= 3;
            break;
          }
        }
        r--;
      }
      (r < -1 || r >= 0 && x < 2) && (r = b - 1);
      continue;
    }
    if (m === ")") t++;
    else if (m === "(") {
      if (t === 0) {
        i = r;
        break;
      }
      t--;
    }
    r--;
  }
  if (i < 0) return null;
  let o = i - 1;
  for (; o >= 0 && (n[o] === " " || n[o] === "	"); ) o--;
  if (o < 0) return null;
  const l = o + 1;
  for (; o >= 0 && /[\w:.]/.test(n[o]); ) o--;
  const a = o + 1;
  if (a >= l) return null;
  const f = n.slice(a, l);
  if (f.endsWith("::") || !/[a-zA-Z]/.test(f)) return null;
  let h = 0, p = 0;
  for (let m = i + 1; m < e; m++) {
    const b = n[m];
    if (b === "(") p++;
    else if (b === ")") p--;
    else if (b === "," && p === 0) h++;
    else if (b === '"') for (m++; m < e && n[m] !== '"'; ) n[m] === "\\" && m++, m++;
    else if (b === "#" && m + 1 < e && n[m + 1] === "/") for (m += 2; m < e && n[m] !== "/"; ) n[m] === "\\" && m++, m++;
    else if (b === "#" && m + 2 < e && n[m + 1] === "s" && n[m + 2] === "/") {
      m += 3;
      for (let x = 0; m < e && x < 2; ) n[m] === "\\" ? m++ : n[m] === "/" && x++, m++;
      m--;
    }
  }
  return { fnLabel: f, openParenPos: i, activeParam: h };
}
function xO(n, e) {
  const t = document.createElement("div");
  t.className = "mpl-signature-help";
  const i = document.createElement("div");
  i.className = "mpl-signature-sig";
  const r = document.createElement("span");
  if (r.className = "mpl-signature-fn", r.textContent = n.label, i.appendChild(r), i.appendChild(document.createTextNode("(")), n.args.forEach((s, o) => {
    o > 0 && i.appendChild(document.createTextNode(", "));
    const l = document.createElement("span");
    l.className = o === e ? "mpl-signature-param active" : "mpl-signature-param", l.textContent = `${s.name}: ${xo(s.type)}`, i.appendChild(l);
  }), i.appendChild(document.createTextNode(")")), t.appendChild(i), n.info) {
    const s = document.createElement("div");
    s.className = "mpl-signature-doc", s.textContent = n.info, t.appendChild(s);
  }
  return t;
}
function kO(n) {
  const e = n.selection.main.head, t = n.doc.toString(), i = wO(t, e);
  if (!i) return null;
  const r = jb(i.fnLabel);
  return !r || r.args.length === 0 ? null : { pos: i.openParenPos, above: true, arrow: true, create() {
    return { dom: xO(r, i.activeParam) };
  } };
}
const SO = gf.compute(["doc", "selection"], kO), CO = { filter: { description: "Filter time series by tag values", syntax: "| filter <tag> == <value>" }, where: { description: "Filter time series by tag values (alias for filter)", syntax: "| where <tag> == <value>" }, map: { description: "Apply a function to each data point", syntax: "| map <function>" }, group: { description: "Group time series by tags and aggregate", syntax: "| group by <tags> using <function>" }, align: { description: "Align time series to a regular time grid", syntax: "| align to <interval> using <function>" }, bucket: { description: "Bucket time series into histogram buckets", syntax: "| bucket by <tags> to <interval> using <function>(<specs>)" }, compute: { description: "Compute a new metric from two sources", syntax: "| compute <metric> using <function>" }, replace: { description: "Replace tag values using string operations", syntax: "| replace <tag> ~ #s/pattern/replacement/" }, join: { description: "Join two metric sources by tags", syntax: "| join <tags> from <metric_id> by <tags>" }, as: { description: "Rename the output metric", syntax: "| as <name>" }, set: { description: "Set query directives (time range, resolution)", syntax: "set <directive> = <value>;" }, by: { description: "Specify tags for grouping, bucketing, or joining" }, using: { description: "Specify the function to apply" }, to: { description: "Specify target time interval for align or bucket" }, over: { description: "Specify the window duration for alignment", syntax: "| align to <interval> over <window> using <function>" }, from: { description: "Specify the source metric for join" }, and: { description: "Logical AND in filter expressions" }, or: { description: "Logical OR in filter expressions" }, not: { description: "Logical NOT in filter expressions" } };
function MO(n, e) {
  if (e < 0 || e >= n.length) return null;
  const t = (o) => o >= 0 && o < n.length && /[\w]/.test(n[o]);
  if (!t(e)) return null;
  let i = e, r = e + 1;
  for (; i > 0 && t(i - 1); ) i--;
  for (; r < n.length && t(r); ) r++;
  for (; i >= 2 && n[i - 1] === ":" && n[i - 2] === ":"; ) {
    let o = i - 2;
    if (o > 0 && t(o - 1)) {
      for (o--; o > 0 && t(o - 1); ) o--;
      i = o;
    } else break;
  }
  for (; r + 1 < n.length && n[r] === ":" && n[r + 1] === ":"; ) {
    const o = r + 2;
    if (o < n.length && t(o)) for (r = o + 1; r < n.length && t(r); ) r++;
    else break;
  }
  const s = n.slice(i, r);
  return s.length === 0 || !/[a-zA-Z]/.test(s) ? null : { text: s, from: i, to: r };
}
function AO(n) {
  const e = document.createElement("div");
  e.className = "mpl-hover-tooltip";
  const t = document.createElement("div");
  t.className = "mpl-hover-sig";
  const i = document.createElement("span");
  if (i.className = "mpl-hover-fn", i.textContent = n.label, t.appendChild(i), n.args.length > 0 && (t.appendChild(document.createTextNode("(")), n.args.forEach((r, s) => {
    s > 0 && t.appendChild(document.createTextNode(", "));
    const o = document.createElement("span");
    o.className = "mpl-hover-param", o.textContent = `${r.name}: ${xo(r.type)}`, t.appendChild(o);
  }), t.appendChild(document.createTextNode(")"))), e.appendChild(t), n.info) {
    const r = document.createElement("div");
    r.className = "mpl-hover-doc", r.textContent = n.info, e.appendChild(r);
  }
  return e;
}
function TO(n, e) {
  const t = document.createElement("div");
  t.className = "mpl-hover-tooltip";
  const i = document.createElement("div"), r = document.createElement("span");
  r.className = "mpl-hover-keyword", r.textContent = n, i.appendChild(r), t.appendChild(i);
  const s = document.createElement("div");
  if (s.className = "mpl-hover-doc", s.textContent = e.description, t.appendChild(s), e.syntax) {
    const o = document.createElement("div");
    o.className = "mpl-hover-syntax", o.textContent = e.syntax, t.appendChild(o);
  }
  return t;
}
function EO(n, e, t) {
  const i = n.state.doc.toString(), r = MO(i, e);
  if (!r) return null;
  const s = jb(r.text);
  if (s) return { pos: r.from, end: r.to, above: true, create() {
    return { dom: AO(s) };
  } };
  const o = CO[r.text];
  return o ? { pos: r.from, end: r.to, above: true, create() {
    return { dom: TO(r.text, o) };
  } } : null;
}
const OO = oy(EO, { hideOnChange: true });
var Hu = false, Wu = false, Ds = [], Vu = -1, tp = false;
function _O(n) {
  RO(n);
}
function LO() {
  tp = true;
}
function DO() {
  tp = false, qb();
}
function RO(n) {
  Ds.includes(n) || Ds.push(n), qb();
}
function BO(n) {
  let e = Ds.indexOf(n);
  e !== -1 && e > Vu && Ds.splice(e, 1);
}
function qb() {
  if (!Wu && !Hu) {
    if (tp) return;
    Hu = true, queueMicrotask(PO);
  }
}
function PO() {
  Hu = false, Wu = true;
  for (let n = 0; n < Ds.length; n++) Ds[n](), Vu = n;
  Ds.length = 0, Vu = -1, Wu = false;
}
var Vo, qs, zo, Gb, zu = true;
function IO(n) {
  zu = false, n(), zu = true;
}
function NO(n) {
  Vo = n.reactive, zo = n.release, qs = (e) => n.effect(e, { scheduler: (t) => {
    zu ? _O(t) : t();
  } }), Gb = n.raw;
}
function Fm(n) {
  qs = n;
}
function FO(n) {
  let e = () => {
  };
  return [(i) => {
    let r = qs(i);
    return n._x_effects || (n._x_effects = /* @__PURE__ */ new Set(), n._x_runEffects = () => {
      n._x_effects.forEach((s) => s());
    }), n._x_effects.add(r), e = () => {
      r !== void 0 && (n._x_effects.delete(r), zo(r));
    }, r;
  }, () => {
    e();
  }];
}
function Yb(n, e) {
  let t = true, i, r, s = qs(() => {
    let o = n(), l = JSON.stringify(o);
    if (!t && (typeof o == "object" || o !== i)) {
      let a = typeof i == "object" ? JSON.parse(r) : i;
      queueMicrotask(() => {
        e(o, a);
      });
    }
    i = o, r = l, t = false;
  });
  return () => zo(s);
}
async function HO(n) {
  LO();
  try {
    await n(), await Promise.resolve();
  } finally {
    DO();
  }
}
var Jb = [], Qb = [], Xb = [];
function WO(n) {
  Xb.push(n);
}
function np(n, e) {
  typeof e == "function" ? (n._x_cleanups || (n._x_cleanups = []), n._x_cleanups.push(e)) : (e = n, Qb.push(e));
}
function Zb(n) {
  Jb.push(n);
}
function ew(n, e, t) {
  n._x_attributeCleanups || (n._x_attributeCleanups = {}), n._x_attributeCleanups[e] || (n._x_attributeCleanups[e] = []), n._x_attributeCleanups[e].push(t);
}
function tw(n, e) {
  n._x_attributeCleanups && Object.entries(n._x_attributeCleanups).forEach(([t, i]) => {
    (e === void 0 || e.includes(t)) && (i.forEach((r) => r()), delete n._x_attributeCleanups[t]);
  });
}
function VO(n) {
  var _a, _b2;
  for ((_a = n._x_effects) == null ? void 0 : _a.forEach(BO); (_b2 = n._x_cleanups) == null ? void 0 : _b2.length; ) n._x_cleanups.pop()();
}
var ip = new MutationObserver(lp), rp = false;
function sp() {
  ip.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true }), rp = true;
}
function nw() {
  zO(), ip.disconnect(), rp = false;
}
var gl = [];
function zO() {
  let n = ip.takeRecords();
  gl.push(() => n.length > 0 && lp(n));
  let e = gl.length;
  queueMicrotask(() => {
    if (gl.length === e) for (; gl.length > 0; ) gl.shift()();
  });
}
function Bt(n) {
  if (!rp) return n();
  nw();
  let e = n();
  return sp(), e;
}
var op = false, Xc = [];
function KO() {
  op = true;
}
function $O() {
  op = false, lp(Xc), Xc = [];
}
function lp(n) {
  if (op) {
    Xc = Xc.concat(n);
    return;
  }
  let e = [], t = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (let s = 0; s < n.length; s++) if (!n[s].target._x_ignoreMutationObserver && (n[s].type === "childList" && (n[s].removedNodes.forEach((o) => {
    o.nodeType === 1 && o._x_marker && t.add(o);
  }), n[s].addedNodes.forEach((o) => {
    if (o.nodeType === 1) {
      if (t.has(o)) {
        t.delete(o);
        return;
      }
      o._x_marker || e.push(o);
    }
  })), n[s].type === "attributes")) {
    let o = n[s].target, l = n[s].attributeName, a = n[s].oldValue, f = () => {
      i.has(o) || i.set(o, []), i.get(o).push({ name: l, value: o.getAttribute(l) });
    }, h = () => {
      r.has(o) || r.set(o, []), r.get(o).push(l);
    };
    o.hasAttribute(l) && a === null ? f() : o.hasAttribute(l) ? (h(), f()) : h();
  }
  r.forEach((s, o) => {
    tw(o, s);
  }), i.forEach((s, o) => {
    Jb.forEach((l) => l(o, s));
  });
  for (let s of t) e.some((o) => o.contains(s)) || Qb.forEach((o) => o(s));
  for (let s of e) s.isConnected && Xb.forEach((o) => o(s));
  e = null, t = null, i = null, r = null;
}
function iw(n) {
  return $s(Ks(n));
}
function ga(n, e, t) {
  return n._x_dataStack = [e, ...Ks(t || n)], () => {
    n._x_dataStack = n._x_dataStack.filter((i) => i !== e);
  };
}
function Ks(n) {
  return n._x_dataStack ? n._x_dataStack : typeof ShadowRoot == "function" && n instanceof ShadowRoot ? Ks(n.host) : n.parentNode ? Ks(n.parentNode) : [];
}
function $s(n) {
  return new Proxy({ objects: n }, jO);
}
function rw(n, e) {
  return n === null || n === Object.prototype ? null : Object.prototype.hasOwnProperty.call(n, e) ? n : rw(Object.getPrototypeOf(n), e);
}
var jO = { ownKeys({ objects: n }) {
  return Array.from(new Set(n.flatMap((e) => Object.keys(e))));
}, has({ objects: n }, e) {
  return e == Symbol.unscopables ? false : n.some((t) => Object.prototype.hasOwnProperty.call(t, e) || Reflect.has(t, e));
}, get({ objects: n }, e, t) {
  return e == "toJSON" ? UO : Reflect.get(n.find((i) => Reflect.has(i, e)) || {}, e, t);
}, set({ objects: n }, e, t, i) {
  let r;
  for (const o of n) if (r = rw(o, e), r) break;
  r || (r = n[n.length - 1]);
  const s = Object.getOwnPropertyDescriptor(r, e);
  return (s == null ? void 0 : s.set) && (s == null ? void 0 : s.get) ? s.set.call(i, t) || true : Reflect.set(r, e, t);
} };
function UO() {
  return Reflect.ownKeys(this).reduce((e, t) => (e[t] = Reflect.get(this, t), e), {});
}
function ap(n) {
  let e = (i) => typeof i == "object" && !Array.isArray(i) && i !== null, t = (i, r = "") => {
    Object.entries(Object.getOwnPropertyDescriptors(i)).forEach(([s, { value: o, enumerable: l }]) => {
      if (l === false || o === void 0 || typeof o == "object" && o !== null && o.__v_skip) return;
      let a = r === "" ? s : `${r}.${s}`;
      typeof o == "object" && o !== null && o._x_interceptor ? i[s] = o.initialize(n, a, s) : e(o) && o !== i && !(o instanceof Element) && t(o, a);
    });
  };
  return t(n);
}
function sw(n, e = () => {
}) {
  let t = { initialValue: void 0, _x_interceptor: true, initialize(i, r, s) {
    return n(this.initialValue, () => qO(i, r), (o) => Ku(i, r, o), r, s);
  } };
  return e(t), (i) => {
    if (typeof i == "object" && i !== null && i._x_interceptor) {
      let r = t.initialize.bind(t);
      t.initialize = (s, o, l) => {
        let a = i.initialize(s, o, l);
        return t.initialValue = a, r(s, o, l);
      };
    } else t.initialValue = i;
    return t;
  };
}
function qO(n, e) {
  return e.split(".").reduce((t, i) => t[i], n);
}
function Ku(n, e, t) {
  if (typeof e == "string" && (e = e.split(".")), e.length === 1) n[e[0]] = t;
  else {
    if (e.length === 0) throw error;
    return n[e[0]] || (n[e[0]] = {}), Ku(n[e[0]], e.slice(1), t);
  }
}
var ow = {};
function Hi(n, e) {
  ow[n] = e;
}
function ra(n, e) {
  let t = GO(e);
  return Object.entries(ow).forEach(([i, r]) => {
    Object.defineProperty(n, `$${i}`, { get() {
      return r(e, t);
    }, enumerable: false });
  }), n;
}
function GO(n) {
  let [e, t] = dw(n), i = { interceptor: sw, ...e };
  return np(n, t), i;
}
function YO(n, e, t, ...i) {
  try {
    return t(...i);
  } catch (r) {
    sa(r, n, e);
  }
}
function sa(...n) {
  return lw(...n);
}
var lw = QO;
function JO(n) {
  lw = n;
}
function QO(n, e, t = void 0) {
  n = Object.assign(n ?? { message: "No error message given." }, { el: e, expression: t }), console.warn(`Alpine Expression Error: ${n.message}

${t ? 'Expression: "' + t + `"

` : ""}`, e), setTimeout(() => {
    throw n;
  }, 0);
}
var ko = true;
function aw(n) {
  let e = ko;
  ko = false;
  let t = n();
  return ko = e, t;
}
function Rs(n, e, t = {}) {
  let i;
  return Pn(n, e)((r) => i = r, t), i;
}
function Pn(...n) {
  return cw(...n);
}
var cw = () => {
};
function XO(n) {
  cw = n;
}
var fw;
function ZO(n) {
  fw = n;
}
function e_(n, e) {
  let t = {};
  ra(t, n);
  let i = [t, ...Ks(n)], r = typeof e == "function" ? t_(i, e) : i_(i, e, n);
  return YO.bind(null, n, e, r);
}
function t_(n, e) {
  return (t = () => {
  }, { scope: i = {}, params: r = [], context: s } = {}) => {
    if (!ko) {
      oa(t, e, $s([i, ...n]), r);
      return;
    }
    let o = e.apply($s([i, ...n]), r);
    oa(t, o);
  };
}
var Eh = {};
function n_(n, e) {
  if (Eh[n]) return Eh[n];
  let t = Object.getPrototypeOf(async function() {
  }).constructor, i = /^[\n\s]*if.*\(.*\)/.test(n.trim()) || /^(let|const)\s/.test(n.trim()) ? `(async()=>{ ${n} })()` : n, s = (() => {
    try {
      let o = new t(["__self", "scope"], `with (scope) { __self.result = ${i} }; __self.finished = true; return __self.result;`);
      return Object.defineProperty(o, "name", { value: `[Alpine] ${n}` }), o;
    } catch (o) {
      return sa(o, e, n), Promise.resolve();
    }
  })();
  return Eh[n] = s, s;
}
function i_(n, e, t) {
  let i = n_(e, t);
  return (r = () => {
  }, { scope: s = {}, params: o = [], context: l } = {}) => {
    i.result = void 0, i.finished = false;
    let a = $s([s, ...n]);
    if (typeof i == "function") {
      let f = i.call(l, i, a).catch((h) => sa(h, t, e));
      i.finished ? (oa(r, i.result, a, o, t), i.result = void 0) : f.then((h) => {
        oa(r, h, a, o, t);
      }).catch((h) => sa(h, t, e)).finally(() => i.result = void 0);
    }
  };
}
function oa(n, e, t, i, r) {
  if (ko && typeof e == "function") {
    let s = e.apply(t, i);
    s instanceof Promise ? s.then((o) => oa(n, o, t, i)).catch((o) => sa(o, r, e)) : n(s);
  } else typeof e == "object" && e instanceof Promise ? e.then((s) => n(s)) : n(e);
}
function r_(...n) {
  return fw(...n);
}
function s_(n, e, t = {}) {
  let i = {};
  ra(i, n);
  let r = [i, ...Ks(n)], s = $s([t.scope ?? {}, ...r]), o = t.params ?? [];
  if (e.includes("await")) {
    let l = Object.getPrototypeOf(async function() {
    }).constructor, a = /^[\n\s]*if.*\(.*\)/.test(e.trim()) || /^(let|const)\s/.test(e.trim()) ? `(async()=>{ ${e} })()` : e;
    return new l(["scope"], `with (scope) { let __result = ${a}; return __result }`).call(t.context, s);
  } else {
    let l = /^[\n\s]*if.*\(.*\)/.test(e.trim()) || /^(let|const)\s/.test(e.trim()) ? `(()=>{ ${e} })()` : e, f = new Function(["scope"], `with (scope) { let __result = ${l}; return __result }`).call(t.context, s);
    return typeof f == "function" && ko ? f.apply(s, o) : f;
  }
}
var cp = "x-";
function Ko(n = "") {
  return cp + n;
}
function o_(n) {
  cp = n;
}
var Zc = {};
function Kt(n, e) {
  return Zc[n] = e, { before(t) {
    if (!Zc[t]) {
      console.warn(String.raw`Cannot find directive \`${t}\`. \`${n}\` will use the default order of execution`);
      return;
    }
    const i = Es.indexOf(t);
    Es.splice(i >= 0 ? i : Es.indexOf("DEFAULT"), 0, n);
  } };
}
function l_(n) {
  return Object.keys(Zc).includes(n);
}
function fp(n, e, t) {
  if (e = Array.from(e), n._x_virtualDirectives) {
    let s = Object.entries(n._x_virtualDirectives).map(([l, a]) => ({ name: l, value: a })), o = hw(s);
    s = s.map((l) => o.find((a) => a.name === l.name) ? { name: `x-bind:${l.name}`, value: `"${l.value}"` } : l), e = e.concat(s);
  }
  let i = {};
  return e.map(mw((s, o) => i[s] = o)).filter(yw).map(f_(i, t)).sort(h_).map((s) => c_(n, s));
}
function hw(n) {
  return Array.from(n).map(mw()).filter((e) => !yw(e));
}
var $u = false, Al = /* @__PURE__ */ new Map(), uw = /* @__PURE__ */ Symbol();
function a_(n) {
  $u = true;
  let e = /* @__PURE__ */ Symbol();
  uw = e, Al.set(e, []);
  let t = () => {
    for (; Al.get(e).length; ) Al.get(e).shift()();
    Al.delete(e);
  }, i = () => {
    $u = false, t();
  };
  n(t), i();
}
function dw(n) {
  let e = [], t = (l) => e.push(l), [i, r] = FO(n);
  return e.push(r), [{ Alpine: jo, effect: i, cleanup: t, evaluateLater: Pn.bind(Pn, n), evaluate: Rs.bind(Rs, n) }, () => e.forEach((l) => l())];
}
function c_(n, e) {
  let t = () => {
  }, i = Zc[e.type] || t, [r, s] = dw(n);
  ew(n, e.original, s);
  let o = () => {
    n._x_ignore || n._x_ignoreSelf || (i.inline && i.inline(n, e, r), i = i.bind(i, n, e, r), $u ? Al.get(uw).push(i) : i());
  };
  return o.runCleanups = s, o;
}
var pw = (n, e) => ({ name: t, value: i }) => (t.startsWith(n) && (t = t.replace(n, e)), { name: t, value: i }), gw = (n) => n;
function mw(n = () => {
}) {
  return ({ name: e, value: t }) => {
    let { name: i, value: r } = vw.reduce((s, o) => o(s), { name: e, value: t });
    return i !== e && n(i, e), { name: i, value: r };
  };
}
var vw = [];
function hp(n) {
  vw.push(n);
}
function yw({ name: n }) {
  return bw().test(n);
}
var bw = () => new RegExp(`^${cp}([^:^.]+)\\b`);
function f_(n, e) {
  return ({ name: t, value: i }) => {
    t === i && (i = "");
    let r = t.match(bw()), s = t.match(/:([a-zA-Z0-9\-_:]+)/), o = t.match(/\.[^.\]]+(?=[^\]]*$)/g) || [], l = e || n[t] || t;
    return { type: r ? r[1] : null, value: s ? s[1] : null, modifiers: o.map((a) => a.replace(".", "")), expression: i, original: l };
  };
}
var ju = "DEFAULT", Es = ["ignore", "ref", "data", "id", "anchor", "bind", "init", "for", "model", "modelable", "transition", "show", "if", ju, "teleport"];
function h_(n, e) {
  let t = Es.indexOf(n.type) === -1 ? ju : n.type, i = Es.indexOf(e.type) === -1 ? ju : e.type;
  return Es.indexOf(t) - Es.indexOf(i);
}
function Hl(n, e, t = {}, i = {}) {
  return n.dispatchEvent(new CustomEvent(e, { detail: t, bubbles: true, composed: true, cancelable: true, ...i }));
}
function js(n, e) {
  if (typeof ShadowRoot == "function" && n instanceof ShadowRoot) {
    Array.from(n.children).forEach((r) => js(r, e));
    return;
  }
  let t = false;
  if (e(n, () => t = true), t) return;
  let i = n.firstElementChild;
  for (; i; ) js(i, e), i = i.nextElementSibling;
}
function Mr(n, ...e) {
  console.warn(`Alpine Warning: ${n}`, ...e);
}
var Hm = false;
function u_() {
  Hm && Mr("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."), Hm = true, document.body || Mr("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"), Hl(document, "alpine:init"), Hl(document, "alpine:initializing"), sp(), WO((e) => Ar(e, js)), np((e) => $o(e)), Zb((e, t) => {
    fp(e, t).forEach((i) => i());
  });
  let n = (e) => !Cf(e.parentElement, true);
  Array.from(document.querySelectorAll(kw().join(","))).filter(n).forEach((e) => {
    Ar(e);
  }), Hl(document, "alpine:initialized"), setTimeout(() => {
    m_();
  });
}
var up = [], ww = [];
function xw() {
  return up.map((n) => n());
}
function kw() {
  return up.concat(ww).map((n) => n());
}
function Sw(n) {
  up.push(n);
}
function Cw(n) {
  ww.push(n);
}
function Cf(n, e = false) {
  return xr(n, (t) => {
    if ((e ? kw() : xw()).some((r) => t.matches(r))) return true;
  });
}
function xr(n, e) {
  if (n) {
    if (e(n)) return n;
    if (n._x_teleportBack) return xr(n._x_teleportBack, e);
    if (n.parentNode instanceof ShadowRoot) return xr(n.parentNode.host, e);
    if (n.parentElement) return xr(n.parentElement, e);
  }
}
function d_(n) {
  return xw().some((e) => n.matches(e));
}
var Mw = [];
function p_(n) {
  Mw.push(n);
}
var g_ = 1;
function Ar(n, e = js, t = () => {
}) {
  xr(n, (i) => i._x_ignore) || a_(() => {
    e(n, (i, r) => {
      i._x_marker || (t(i, r), Mw.forEach((s) => s(i, r)), fp(i, i.attributes).forEach((s) => s()), i._x_ignore || (i._x_marker = g_++), i._x_ignore && r());
    });
  });
}
function $o(n, e = js) {
  e(n, (t) => {
    VO(t), tw(t), delete t._x_marker;
  });
}
function m_() {
  [["ui", "dialog", ["[x-dialog], [x-popover]"]], ["anchor", "anchor", ["[x-anchor]"]], ["sort", "sort", ["[x-sort]"]]].forEach(([e, t, i]) => {
    l_(t) || i.some((r) => {
      if (document.querySelector(r)) return Mr(`found "${r}", but missing ${e} plugin`), true;
    });
  });
}
var Uu = [], dp = false;
function pp(n = () => {
}) {
  return queueMicrotask(() => {
    dp || setTimeout(() => {
      qu();
    });
  }), new Promise((e) => {
    Uu.push(() => {
      n(), e();
    });
  });
}
function qu() {
  for (dp = false; Uu.length; ) Uu.shift()();
}
function v_() {
  dp = true;
}
function gp(n, e) {
  return Array.isArray(e) ? Wm(n, e.join(" ")) : typeof e == "object" && e !== null ? y_(n, e) : typeof e == "function" ? gp(n, e()) : Wm(n, e);
}
function Gu(n) {
  return n.split(/\s/).filter(Boolean);
}
function Wm(n, e) {
  let t = (r) => Gu(r).filter((s) => !n.classList.contains(s)).filter(Boolean), i = (r) => (n.classList.add(...r), () => {
    n.classList.remove(...r);
  });
  return e = e === true ? e = "" : e || "", i(t(e));
}
function y_(n, e) {
  let t = Object.entries(e).flatMap(([o, l]) => l ? Gu(o) : false).filter(Boolean), i = Object.entries(e).flatMap(([o, l]) => l ? false : Gu(o)).filter(Boolean), r = [], s = [];
  return i.forEach((o) => {
    n.classList.contains(o) && (n.classList.remove(o), s.push(o));
  }), t.forEach((o) => {
    n.classList.contains(o) || (n.classList.add(o), r.push(o));
  }), () => {
    s.forEach((o) => n.classList.add(o)), r.forEach((o) => n.classList.remove(o));
  };
}
function Mf(n, e) {
  return typeof e == "object" && e !== null ? b_(n, e) : w_(n, e);
}
function b_(n, e) {
  let t = {};
  return Object.entries(e).forEach(([i, r]) => {
    t[i] = n.style[i], i.startsWith("--") || (i = x_(i)), n.style.setProperty(i, r);
  }), setTimeout(() => {
    n.style.length === 0 && n.removeAttribute("style");
  }), () => {
    Mf(n, t);
  };
}
function w_(n, e) {
  let t = n.getAttribute("style", e);
  return n.setAttribute("style", e), () => {
    n.setAttribute("style", t || "");
  };
}
function x_(n) {
  return n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function Yu(n, e = () => {
}) {
  let t = false;
  return function() {
    t ? e.apply(this, arguments) : (t = true, n.apply(this, arguments));
  };
}
Kt("transition", (n, { value: e, modifiers: t, expression: i }, { evaluate: r }) => {
  typeof i == "function" && (i = r(i)), i !== false && (!i || typeof i == "boolean" ? S_(n, t, e) : k_(n, i, e));
});
function k_(n, e, t) {
  Aw(n, gp, ""), { enter: (r) => {
    n._x_transition.enter.during = r;
  }, "enter-start": (r) => {
    n._x_transition.enter.start = r;
  }, "enter-end": (r) => {
    n._x_transition.enter.end = r;
  }, leave: (r) => {
    n._x_transition.leave.during = r;
  }, "leave-start": (r) => {
    n._x_transition.leave.start = r;
  }, "leave-end": (r) => {
    n._x_transition.leave.end = r;
  } }[t](e);
}
function S_(n, e, t) {
  Aw(n, Mf);
  let i = !e.includes("in") && !e.includes("out") && !t, r = i || e.includes("in") || ["enter"].includes(t), s = i || e.includes("out") || ["leave"].includes(t);
  e.includes("in") && !i && (e = e.filter((D, R) => R < e.indexOf("out"))), e.includes("out") && !i && (e = e.filter((D, R) => R > e.indexOf("out")));
  let o = !e.includes("opacity") && !e.includes("scale"), l = o || e.includes("opacity"), a = o || e.includes("scale"), f = l ? 0 : 1, h = a ? ml(e, "scale", 95) / 100 : 1, p = ml(e, "delay", 0) / 1e3, m = ml(e, "origin", "center"), b = "opacity, transform", x = ml(e, "duration", 150) / 1e3, C = ml(e, "duration", 75) / 1e3, E = "cubic-bezier(0.4, 0.0, 0.2, 1)";
  r && (n._x_transition.enter.during = { transformOrigin: m, transitionDelay: `${p}s`, transitionProperty: b, transitionDuration: `${x}s`, transitionTimingFunction: E }, n._x_transition.enter.start = { opacity: f, transform: `scale(${h})` }, n._x_transition.enter.end = { opacity: 1, transform: "scale(1)" }), s && (n._x_transition.leave.during = { transformOrigin: m, transitionDelay: `${p}s`, transitionProperty: b, transitionDuration: `${C}s`, transitionTimingFunction: E }, n._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }, n._x_transition.leave.end = { opacity: f, transform: `scale(${h})` });
}
function Aw(n, e, t = {}) {
  n._x_transition || (n._x_transition = { enter: { during: t, start: t, end: t }, leave: { during: t, start: t, end: t }, in(i = () => {
  }, r = () => {
  }) {
    Ju(n, e, { during: this.enter.during, start: this.enter.start, end: this.enter.end }, i, r);
  }, out(i = () => {
  }, r = () => {
  }) {
    Ju(n, e, { during: this.leave.during, start: this.leave.start, end: this.leave.end }, i, r);
  } });
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(n, e, t, i) {
  const r = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
  let s = () => r(t);
  if (e) {
    n._x_transition && (n._x_transition.enter || n._x_transition.leave) ? n._x_transition.enter && (Object.entries(n._x_transition.enter.during).length || Object.entries(n._x_transition.enter.start).length || Object.entries(n._x_transition.enter.end).length) ? n._x_transition.in(t) : s() : n._x_transition ? n._x_transition.in(t) : s();
    return;
  }
  n._x_hidePromise = n._x_transition ? new Promise((o, l) => {
    n._x_transition.out(() => {
    }, () => o(i)), n._x_transitioning && n._x_transitioning.beforeCancel(() => l({ isFromCancelledTransition: true }));
  }) : Promise.resolve(i), queueMicrotask(() => {
    let o = Tw(n);
    o ? (o._x_hideChildren || (o._x_hideChildren = []), o._x_hideChildren.push(n)) : r(() => {
      let l = (a) => {
        let f = Promise.all([a._x_hidePromise, ...(a._x_hideChildren || []).map(l)]).then(([h]) => h == null ? void 0 : h());
        return delete a._x_hidePromise, delete a._x_hideChildren, f;
      };
      l(n).catch((a) => {
        if (!a.isFromCancelledTransition) throw a;
      });
    });
  });
};
function Tw(n) {
  let e = n.parentNode;
  if (e) return e._x_hidePromise ? e : Tw(e);
}
function Ju(n, e, { during: t, start: i, end: r } = {}, s = () => {
}, o = () => {
}) {
  if (n._x_transitioning && n._x_transitioning.cancel(), Object.keys(t).length === 0 && Object.keys(i).length === 0 && Object.keys(r).length === 0) {
    s(), o();
    return;
  }
  let l, a, f;
  C_(n, { start() {
    l = e(n, i);
  }, during() {
    a = e(n, t);
  }, before: s, end() {
    l(), f = e(n, r);
  }, after: o, cleanup() {
    a(), f();
  } });
}
function C_(n, e) {
  let t, i, r, s = Yu(() => {
    Bt(() => {
      t = true, i || e.before(), r || (e.end(), qu()), e.after(), n.isConnected && e.cleanup(), delete n._x_transitioning;
    });
  });
  n._x_transitioning = { beforeCancels: [], beforeCancel(o) {
    this.beforeCancels.push(o);
  }, cancel: Yu(function() {
    for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
    s();
  }), finish: s }, Bt(() => {
    e.start(), e.during();
  }), v_(), requestAnimationFrame(() => {
    if (t) return;
    let o = Number(getComputedStyle(n).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3, l = Number(getComputedStyle(n).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
    o === 0 && (o = Number(getComputedStyle(n).animationDuration.replace("s", "")) * 1e3), Bt(() => {
      e.before();
    }), i = true, requestAnimationFrame(() => {
      t || (Bt(() => {
        e.end();
      }), qu(), setTimeout(n._x_transitioning.finish, o + l), r = true);
    });
  });
}
function ml(n, e, t) {
  if (n.indexOf(e) === -1) return t;
  const i = n[n.indexOf(e) + 1];
  if (!i || e === "scale" && isNaN(i)) return t;
  if (e === "duration" || e === "delay") {
    let r = i.match(/([0-9]+)ms/);
    if (r) return r[1];
  }
  return e === "origin" && ["top", "right", "left", "center", "bottom"].includes(n[n.indexOf(e) + 2]) ? [i, n[n.indexOf(e) + 2]].join(" ") : i;
}
var rs = false;
function _r(n, e = () => {
}) {
  return (...t) => rs ? e(...t) : n(...t);
}
function M_(n) {
  return (...e) => rs && n(...e);
}
var Ew = [];
function Af(n) {
  Ew.push(n);
}
function A_(n, e) {
  Ew.forEach((t) => t(n, e)), rs = true, Ow(() => {
    Ar(e, (t, i) => {
      i(t, () => {
      });
    });
  }), rs = false;
}
var Qu = false;
function T_(n, e) {
  e._x_dataStack || (e._x_dataStack = n._x_dataStack), rs = true, Qu = true, Ow(() => {
    E_(e);
  }), rs = false, Qu = false;
}
function E_(n) {
  let e = false;
  Ar(n, (i, r) => {
    js(i, (s, o) => {
      if (e && d_(s)) return o();
      e = true, r(s, o);
    });
  });
}
function Ow(n) {
  let e = qs;
  Fm((t, i) => {
    let r = e(t);
    return zo(r), () => {
    };
  }), n(), Fm(e);
}
function _w(n, e, t, i = []) {
  switch (n._x_bindings || (n._x_bindings = Vo({})), n._x_bindings[e] = t, e = i.includes("camel") ? I_(e) : e, e) {
    case "value":
      O_(n, t);
      break;
    case "style":
      L_(n, t);
      break;
    case "class":
      __(n, t);
      break;
    case "selected":
    case "checked":
      D_(n, e, t);
      break;
    default:
      Lw(n, e, t);
      break;
  }
}
function O_(n, e) {
  if (mp(n)) n.attributes.value === void 0 && (n.value = e);
  else if (ef(n)) Number.isInteger(e) ? n.value = e : !Array.isArray(e) && typeof e != "boolean" && ![null, void 0].includes(e) ? n.value = String(e) : Array.isArray(e) ? n.checked = e.some((t) => N_(t, n.value)) : n.checked = !!e;
  else if (n.tagName === "SELECT") P_(n, e);
  else {
    if (n.value === e) return;
    n.value = e === void 0 ? "" : e;
  }
}
function __(n, e) {
  n._x_undoAddedClasses && n._x_undoAddedClasses(), n._x_undoAddedClasses = gp(n, e);
}
function L_(n, e) {
  n._x_undoAddedStyles && n._x_undoAddedStyles(), n._x_undoAddedStyles = Mf(n, e);
}
function D_(n, e, t) {
  Lw(n, e, t), B_(n, e, t);
}
function Lw(n, e, t) {
  [null, void 0, false].includes(t) && H_(e) ? n.removeAttribute(e) : (Dw(e) && (t = e), R_(n, e, t));
}
function R_(n, e, t) {
  n.getAttribute(e) != t && n.setAttribute(e, t);
}
function B_(n, e, t) {
  n[e] !== t && (n[e] = t);
}
function P_(n, e) {
  const t = [].concat(e).map((i) => i + "");
  Array.from(n.options).forEach((i) => {
    i.selected = t.includes(i.value);
  });
}
function I_(n) {
  return n.toLowerCase().replace(/-(\w)/g, (e, t) => t.toUpperCase());
}
function N_(n, e) {
  return n == e;
}
function Sc(n) {
  return [1, "1", "true", "on", "yes", true].includes(n) ? true : [0, "0", "false", "off", "no", false].includes(n) ? false : n ? !!n : null;
}
var F_ = /* @__PURE__ */ new Set(["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "inert", "ismap", "itemscope", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected", "shadowrootclonable", "shadowrootdelegatesfocus", "shadowrootserializable"]);
function Dw(n) {
  return F_.has(n);
}
function H_(n) {
  return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(n);
}
function W_(n, e, t) {
  return n._x_bindings && n._x_bindings[e] !== void 0 ? n._x_bindings[e] : Rw(n, e, t);
}
function V_(n, e, t, i = true) {
  if (n._x_bindings && n._x_bindings[e] !== void 0) return n._x_bindings[e];
  if (n._x_inlineBindings && n._x_inlineBindings[e] !== void 0) {
    let r = n._x_inlineBindings[e];
    return r.extract = i, aw(() => Rs(n, r.expression));
  }
  return Rw(n, e, t);
}
function Rw(n, e, t) {
  let i = n.getAttribute(e);
  return i === null ? typeof t == "function" ? t() : t : i === "" ? true : Dw(e) ? !![e, "true"].includes(i) : i;
}
function ef(n) {
  return n.type === "checkbox" || n.localName === "ui-checkbox" || n.localName === "ui-switch";
}
function mp(n) {
  return n.type === "radio" || n.localName === "ui-radio";
}
function Bw(n, e) {
  let t;
  return function() {
    const i = this, r = arguments, s = function() {
      t = null, n.apply(i, r);
    };
    clearTimeout(t), t = setTimeout(s, e);
  };
}
function Pw(n, e) {
  let t;
  return function() {
    let i = this, r = arguments;
    t || (n.apply(i, r), t = true, setTimeout(() => t = false, e));
  };
}
function Iw({ get: n, set: e }, { get: t, set: i }) {
  let r = true, s, o = qs(() => {
    let l = n(), a = t();
    if (r) i(Oh(l)), r = false;
    else {
      let f = JSON.stringify(l), h = JSON.stringify(a);
      f !== s ? i(Oh(l)) : f !== h && e(Oh(a));
    }
    s = JSON.stringify(n()), JSON.stringify(t());
  });
  return () => {
    zo(o);
  };
}
function Oh(n) {
  return typeof n == "object" ? JSON.parse(JSON.stringify(n)) : n;
}
function z_(n) {
  (Array.isArray(n) ? n : [n]).forEach((t) => t(jo));
}
var bs = {}, Vm = false;
function K_(n, e) {
  if (Vm || (bs = Vo(bs), Vm = true), e === void 0) return bs[n];
  bs[n] = e, ap(bs[n]), typeof e == "object" && e !== null && e.hasOwnProperty("init") && typeof e.init == "function" && bs[n].init();
}
function $_() {
  return bs;
}
var Nw = {};
function j_(n, e) {
  let t = typeof e != "function" ? () => e : e;
  return n instanceof Element ? Fw(n, t()) : (Nw[n] = t, () => {
  });
}
function U_(n) {
  return Object.entries(Nw).forEach(([e, t]) => {
    Object.defineProperty(n, e, { get() {
      return (...i) => t(...i);
    } });
  }), n;
}
function Fw(n, e, t) {
  let i = [];
  for (; i.length; ) i.pop()();
  let r = Object.entries(e).map(([o, l]) => ({ name: o, value: l })), s = hw(r);
  return r = r.map((o) => s.find((l) => l.name === o.name) ? { name: `x-bind:${o.name}`, value: `"${o.value}"` } : o), fp(n, r, t).map((o) => {
    i.push(o.runCleanups), o();
  }), () => {
    for (; i.length; ) i.pop()();
  };
}
var Hw = {};
function q_(n, e) {
  Hw[n] = e;
}
function G_(n, e) {
  return Object.entries(Hw).forEach(([t, i]) => {
    Object.defineProperty(n, t, { get() {
      return (...r) => i.bind(e)(...r);
    }, enumerable: false });
  }), n;
}
var Y_ = { get reactive() {
  return Vo;
}, get release() {
  return zo;
}, get effect() {
  return qs;
}, get raw() {
  return Gb;
}, get transaction() {
  return HO;
}, version: "3.15.9", flushAndStopDeferringMutations: $O, dontAutoEvaluateFunctions: aw, disableEffectScheduling: IO, startObservingMutations: sp, stopObservingMutations: nw, setReactivityEngine: NO, onAttributeRemoved: ew, onAttributesAdded: Zb, closestDataStack: Ks, skipDuringClone: _r, onlyDuringClone: M_, addRootSelector: Sw, addInitSelector: Cw, setErrorHandler: JO, interceptClone: Af, addScopeToNode: ga, deferMutations: KO, mapAttributes: hp, evaluateLater: Pn, interceptInit: p_, initInterceptors: ap, injectMagics: ra, setEvaluator: XO, setRawEvaluator: ZO, mergeProxies: $s, extractProp: V_, findClosest: xr, onElRemoved: np, closestRoot: Cf, destroyTree: $o, interceptor: sw, transition: Ju, setStyles: Mf, mutateDom: Bt, directive: Kt, entangle: Iw, throttle: Pw, debounce: Bw, evaluate: Rs, evaluateRaw: r_, initTree: Ar, nextTick: pp, prefixed: Ko, prefix: o_, plugin: z_, magic: Hi, store: K_, start: u_, clone: T_, cloneNode: A_, bound: W_, $data: iw, watch: Yb, walk: js, data: q_, bind: j_ }, jo = Y_;
function J_(n, e) {
  const t = /* @__PURE__ */ Object.create(null), i = n.split(",");
  for (let r = 0; r < i.length; r++) t[i[r]] = true;
  return (r) => !!t[r];
}
var Q_ = Object.freeze({}), X_ = Object.prototype.hasOwnProperty, Tf = (n, e) => X_.call(n, e), Bs = Array.isArray, Wl = (n) => Ww(n) === "[object Map]", Z_ = (n) => typeof n == "string", vp = (n) => typeof n == "symbol", Ef = (n) => n !== null && typeof n == "object", eL = Object.prototype.toString, Ww = (n) => eL.call(n), Vw = (n) => Ww(n).slice(8, -1), yp = (n) => Z_(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, tL = (n) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t) => e[t] || (e[t] = n(t));
}, nL = tL((n) => n.charAt(0).toUpperCase() + n.slice(1)), zw = (n, e) => n !== e && (n === n || e === e), Xu = /* @__PURE__ */ new WeakMap(), vl = [], er, Ps = /* @__PURE__ */ Symbol("iterate"), Zu = /* @__PURE__ */ Symbol("Map key iterate");
function iL(n) {
  return n && n._isEffect === true;
}
function rL(n, e = Q_) {
  iL(n) && (n = n.raw);
  const t = lL(n, e);
  return e.lazy || t(), t;
}
function sL(n) {
  n.active && (Kw(n), n.options.onStop && n.options.onStop(), n.active = false);
}
var oL = 0;
function lL(n, e) {
  const t = function() {
    if (!t.active) return n();
    if (!vl.includes(t)) {
      Kw(t);
      try {
        return cL(), vl.push(t), er = t, n();
      } finally {
        vl.pop(), $w(), er = vl[vl.length - 1];
      }
    }
  };
  return t.id = oL++, t.allowRecurse = !!e.allowRecurse, t._isEffect = true, t.active = true, t.raw = n, t.deps = [], t.options = e, t;
}
function Kw(n) {
  const { deps: e } = n;
  if (e.length) {
    for (let t = 0; t < e.length; t++) e[t].delete(n);
    e.length = 0;
  }
}
var Lo = true, bp = [];
function aL() {
  bp.push(Lo), Lo = false;
}
function cL() {
  bp.push(Lo), Lo = true;
}
function $w() {
  const n = bp.pop();
  Lo = n === void 0 ? true : n;
}
function Ii(n, e, t) {
  if (!Lo || er === void 0) return;
  let i = Xu.get(n);
  i || Xu.set(n, i = /* @__PURE__ */ new Map());
  let r = i.get(t);
  r || i.set(t, r = /* @__PURE__ */ new Set()), r.has(er) || (r.add(er), er.deps.push(r), er.options.onTrack && er.options.onTrack({ effect: er, target: n, type: e, key: t }));
}
function ss(n, e, t, i, r, s) {
  const o = Xu.get(n);
  if (!o) return;
  const l = /* @__PURE__ */ new Set(), a = (h) => {
    h && h.forEach((p) => {
      (p !== er || p.allowRecurse) && l.add(p);
    });
  };
  if (e === "clear") o.forEach(a);
  else if (t === "length" && Bs(n)) o.forEach((h, p) => {
    (p === "length" || p >= i) && a(h);
  });
  else switch (t !== void 0 && a(o.get(t)), e) {
    case "add":
      Bs(n) ? yp(t) && a(o.get("length")) : (a(o.get(Ps)), Wl(n) && a(o.get(Zu)));
      break;
    case "delete":
      Bs(n) || (a(o.get(Ps)), Wl(n) && a(o.get(Zu)));
      break;
    case "set":
      Wl(n) && a(o.get(Ps));
      break;
  }
  const f = (h) => {
    h.options.onTrigger && h.options.onTrigger({ effect: h, target: n, key: t, type: e, newValue: i, oldValue: r, oldTarget: s }), h.options.scheduler ? h.options.scheduler(h) : h();
  };
  l.forEach(f);
}
var fL = J_("__proto__,__v_isRef,__isVue"), jw = new Set(Object.getOwnPropertyNames(Symbol).map((n) => Symbol[n]).filter(vp)), hL = Uw(), uL = Uw(true), zm = dL();
function dL() {
  const n = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    n[e] = function(...t) {
      const i = wt(this);
      for (let s = 0, o = this.length; s < o; s++) Ii(i, "get", s + "");
      const r = i[e](...t);
      return r === -1 || r === false ? i[e](...t.map(wt)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    n[e] = function(...t) {
      aL();
      const i = wt(this)[e].apply(this, t);
      return $w(), i;
    };
  }), n;
}
function Uw(n = false, e = false) {
  return function(i, r, s) {
    if (r === "__v_isReactive") return !n;
    if (r === "__v_isReadonly") return n;
    if (r === "__v_raw" && s === (n ? e ? TL : Jw : e ? AL : Yw).get(i)) return i;
    const o = Bs(i);
    if (!n && o && Tf(zm, r)) return Reflect.get(zm, r, s);
    const l = Reflect.get(i, r, s);
    return (vp(r) ? jw.has(r) : fL(r)) || (n || Ii(i, "get", r), e) ? l : ed(l) ? !o || !yp(r) ? l.value : l : Ef(l) ? n ? Qw(l) : Sp(l) : l;
  };
}
var pL = gL();
function gL(n = false) {
  return function(t, i, r, s) {
    let o = t[i];
    if (!n && (r = wt(r), o = wt(o), !Bs(t) && ed(o) && !ed(r))) return o.value = r, true;
    const l = Bs(t) && yp(i) ? Number(i) < t.length : Tf(t, i), a = Reflect.set(t, i, r, s);
    return t === wt(s) && (l ? zw(r, o) && ss(t, "set", i, r, o) : ss(t, "add", i, r)), a;
  };
}
function mL(n, e) {
  const t = Tf(n, e), i = n[e], r = Reflect.deleteProperty(n, e);
  return r && t && ss(n, "delete", e, void 0, i), r;
}
function vL(n, e) {
  const t = Reflect.has(n, e);
  return (!vp(e) || !jw.has(e)) && Ii(n, "has", e), t;
}
function yL(n) {
  return Ii(n, "iterate", Bs(n) ? "length" : Ps), Reflect.ownKeys(n);
}
var bL = { get: hL, set: pL, deleteProperty: mL, has: vL, ownKeys: yL }, wL = { get: uL, set(n, e) {
  return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`, n), true;
}, deleteProperty(n, e) {
  return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`, n), true;
} }, wp = (n) => Ef(n) ? Sp(n) : n, xp = (n) => Ef(n) ? Qw(n) : n, kp = (n) => n, Of = (n) => Reflect.getPrototypeOf(n);
function tc(n, e, t = false, i = false) {
  n = n.__v_raw;
  const r = wt(n), s = wt(e);
  e !== s && !t && Ii(r, "get", e), !t && Ii(r, "get", s);
  const { has: o } = Of(r), l = i ? kp : t ? xp : wp;
  if (o.call(r, e)) return l(n.get(e));
  if (o.call(r, s)) return l(n.get(s));
  n !== r && n.get(e);
}
function nc(n, e = false) {
  const t = this.__v_raw, i = wt(t), r = wt(n);
  return n !== r && !e && Ii(i, "has", n), !e && Ii(i, "has", r), n === r ? t.has(n) : t.has(n) || t.has(r);
}
function ic(n, e = false) {
  return n = n.__v_raw, !e && Ii(wt(n), "iterate", Ps), Reflect.get(n, "size", n);
}
function Km(n) {
  n = wt(n);
  const e = wt(this);
  return Of(e).has.call(e, n) || (e.add(n), ss(e, "add", n, n)), this;
}
function $m(n, e) {
  e = wt(e);
  const t = wt(this), { has: i, get: r } = Of(t);
  let s = i.call(t, n);
  s ? Gw(t, i, n) : (n = wt(n), s = i.call(t, n));
  const o = r.call(t, n);
  return t.set(n, e), s ? zw(e, o) && ss(t, "set", n, e, o) : ss(t, "add", n, e), this;
}
function jm(n) {
  const e = wt(this), { has: t, get: i } = Of(e);
  let r = t.call(e, n);
  r ? Gw(e, t, n) : (n = wt(n), r = t.call(e, n));
  const s = i ? i.call(e, n) : void 0, o = e.delete(n);
  return r && ss(e, "delete", n, void 0, s), o;
}
function Um() {
  const n = wt(this), e = n.size !== 0, t = Wl(n) ? new Map(n) : new Set(n), i = n.clear();
  return e && ss(n, "clear", void 0, void 0, t), i;
}
function rc(n, e) {
  return function(i, r) {
    const s = this, o = s.__v_raw, l = wt(o), a = e ? kp : n ? xp : wp;
    return !n && Ii(l, "iterate", Ps), o.forEach((f, h) => i.call(r, a(f), a(h), s));
  };
}
function sc(n, e, t) {
  return function(...i) {
    const r = this.__v_raw, s = wt(r), o = Wl(s), l = n === "entries" || n === Symbol.iterator && o, a = n === "keys" && o, f = r[n](...i), h = t ? kp : e ? xp : wp;
    return !e && Ii(s, "iterate", a ? Zu : Ps), { next() {
      const { value: p, done: m } = f.next();
      return m ? { value: p, done: m } : { value: l ? [h(p[0]), h(p[1])] : h(p), done: m };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function Wr(n) {
  return function(...e) {
    {
      const t = e[0] ? `on key "${e[0]}" ` : "";
      console.warn(`${nL(n)} operation ${t}failed: target is readonly.`, wt(this));
    }
    return n === "delete" ? false : this;
  };
}
function xL() {
  const n = { get(s) {
    return tc(this, s);
  }, get size() {
    return ic(this);
  }, has: nc, add: Km, set: $m, delete: jm, clear: Um, forEach: rc(false, false) }, e = { get(s) {
    return tc(this, s, false, true);
  }, get size() {
    return ic(this);
  }, has: nc, add: Km, set: $m, delete: jm, clear: Um, forEach: rc(false, true) }, t = { get(s) {
    return tc(this, s, true);
  }, get size() {
    return ic(this, true);
  }, has(s) {
    return nc.call(this, s, true);
  }, add: Wr("add"), set: Wr("set"), delete: Wr("delete"), clear: Wr("clear"), forEach: rc(true, false) }, i = { get(s) {
    return tc(this, s, true, true);
  }, get size() {
    return ic(this, true);
  }, has(s) {
    return nc.call(this, s, true);
  }, add: Wr("add"), set: Wr("set"), delete: Wr("delete"), clear: Wr("clear"), forEach: rc(true, true) };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    n[s] = sc(s, false, false), t[s] = sc(s, true, false), e[s] = sc(s, false, true), i[s] = sc(s, true, true);
  }), [n, t, e, i];
}
var [kL, SL] = xL();
function qw(n, e) {
  const t = n ? SL : kL;
  return (i, r, s) => r === "__v_isReactive" ? !n : r === "__v_isReadonly" ? n : r === "__v_raw" ? i : Reflect.get(Tf(t, r) && r in i ? t : i, r, s);
}
var CL = { get: qw(false) }, ML = { get: qw(true) };
function Gw(n, e, t) {
  const i = wt(t);
  if (i !== t && e.call(n, i)) {
    const r = Vw(n);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
var Yw = /* @__PURE__ */ new WeakMap(), AL = /* @__PURE__ */ new WeakMap(), Jw = /* @__PURE__ */ new WeakMap(), TL = /* @__PURE__ */ new WeakMap();
function EL(n) {
  switch (n) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function OL(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : EL(Vw(n));
}
function Sp(n) {
  return n && n.__v_isReadonly ? n : Xw(n, false, bL, CL, Yw);
}
function Qw(n) {
  return Xw(n, true, wL, ML, Jw);
}
function Xw(n, e, t, i, r) {
  if (!Ef(n)) return console.warn(`value cannot be made reactive: ${String(n)}`), n;
  if (n.__v_raw && !(e && n.__v_isReactive)) return n;
  const s = r.get(n);
  if (s) return s;
  const o = OL(n);
  if (o === 0) return n;
  const l = new Proxy(n, o === 2 ? i : t);
  return r.set(n, l), l;
}
function wt(n) {
  return n && wt(n.__v_raw) || n;
}
function ed(n) {
  return !!(n && n.__v_isRef === true);
}
Hi("nextTick", () => pp);
Hi("dispatch", (n) => Hl.bind(Hl, n));
Hi("watch", (n, { evaluateLater: e, cleanup: t }) => (i, r) => {
  let s = e(i), l = Yb(() => {
    let a;
    return s((f) => a = f), a;
  }, r);
  t(l);
});
Hi("store", $_);
Hi("data", (n) => iw(n));
Hi("root", (n) => Cf(n));
Hi("refs", (n) => (n._x_refs_proxy || (n._x_refs_proxy = $s(_L(n))), n._x_refs_proxy));
function _L(n) {
  let e = [];
  return xr(n, (t) => {
    t._x_refs && e.push(t._x_refs);
  }), e;
}
var _h = {};
function Zw(n) {
  return _h[n] || (_h[n] = 0), ++_h[n];
}
function LL(n, e) {
  return xr(n, (t) => {
    if (t._x_ids && t._x_ids[e]) return true;
  });
}
function DL(n, e) {
  n._x_ids || (n._x_ids = {}), n._x_ids[e] || (n._x_ids[e] = Zw(e));
}
Hi("id", (n, { cleanup: e }) => (t, i = null) => {
  let r = `${t}${i ? `-${i}` : ""}`;
  return RL(n, r, e, () => {
    let s = LL(n, t), o = s ? s._x_ids[t] : Zw(t);
    return i ? `${t}-${o}-${i}` : `${t}-${o}`;
  });
});
Af((n, e) => {
  n._x_id && (e._x_id = n._x_id);
});
function RL(n, e, t, i) {
  if (n._x_id || (n._x_id = {}), n._x_id[e]) return n._x_id[e];
  let r = i();
  return n._x_id[e] = r, t(() => {
    delete n._x_id[e];
  }), r;
}
Hi("el", (n) => n);
e1("Focus", "focus", "focus");
e1("Persist", "persist", "persist");
function e1(n, e, t) {
  Hi(e, (i) => Mr(`You can't use [$${e}] without first installing the "${n}" plugin here: https://alpinejs.dev/plugins/${t}`, i));
}
Kt("modelable", (n, { expression: e }, { effect: t, evaluateLater: i, cleanup: r }) => {
  let s = i(e), o = () => {
    let h;
    return s((p) => h = p), h;
  }, l = i(`${e} = __placeholder`), a = (h) => l(() => {
  }, { scope: { __placeholder: h } }), f = o();
  a(f), queueMicrotask(() => {
    if (!n._x_model) return;
    n._x_removeModelListeners.default();
    let h = n._x_model.get, p = n._x_model.setWithModifiers, m = Iw({ get() {
      return h();
    }, set(b) {
      p(b);
    } }, { get() {
      return o();
    }, set(b) {
      a(b);
    } });
    r(m);
  });
});
Kt("teleport", (n, { modifiers: e, expression: t }, { cleanup: i }) => {
  n.tagName.toLowerCase() !== "template" && Mr("x-teleport can only be used on a <template> tag", n);
  let r = qm(t), s = n.content.cloneNode(true).firstElementChild;
  n._x_teleport = s, s._x_teleportBack = n, n.setAttribute("data-teleport-template", true), s.setAttribute("data-teleport-target", true), n._x_forwardEvents && n._x_forwardEvents.forEach((l) => {
    s.addEventListener(l, (a) => {
      a.stopPropagation(), n.dispatchEvent(new a.constructor(a.type, a));
    });
  }), ga(s, {}, n);
  let o = (l, a, f) => {
    f.includes("prepend") ? a.parentNode.insertBefore(l, a) : f.includes("append") ? a.parentNode.insertBefore(l, a.nextSibling) : a.appendChild(l);
  };
  Bt(() => {
    o(s, r, e), _r(() => {
      Ar(s);
    })();
  }), n._x_teleportPutBack = () => {
    let l = qm(t);
    Bt(() => {
      o(n._x_teleport, l, e);
    });
  }, i(() => Bt(() => {
    s.remove(), $o(s);
  }));
});
var BL = document.createElement("div");
function qm(n) {
  let e = _r(() => document.querySelector(n), () => BL)();
  return e || Mr(`Cannot find x-teleport element for selector: "${n}"`), e;
}
var t1 = () => {
};
t1.inline = (n, { modifiers: e }, { cleanup: t }) => {
  e.includes("self") ? n._x_ignoreSelf = true : n._x_ignore = true, t(() => {
    e.includes("self") ? delete n._x_ignoreSelf : delete n._x_ignore;
  });
};
Kt("ignore", t1);
Kt("effect", _r((n, { expression: e }, { effect: t }) => {
  t(Pn(n, e));
}));
function fo(n, e, t, i) {
  let r = n, s = (a) => i(a), o = {}, l = (a, f) => (h) => f(a, h);
  return t.includes("dot") && (e = PL(e)), t.includes("camel") && (e = IL(e)), t.includes("capture") && (o.capture = true), t.includes("window") && (r = window), t.includes("document") && (r = document), t.includes("passive") && (o.passive = t[t.indexOf("passive") + 1] !== "false"), s = n1(t, s), t.includes("prevent") && (s = l(s, (a, f) => {
    f.preventDefault(), a(f);
  })), t.includes("stop") && (s = l(s, (a, f) => {
    f.stopPropagation(), a(f);
  })), t.includes("once") && (s = l(s, (a, f) => {
    a(f), r.removeEventListener(e, s, o);
  })), (t.includes("away") || t.includes("outside")) && (r = document, s = l(s, (a, f) => {
    n.contains(f.target) || f.target.isConnected !== false && (n.offsetWidth < 1 && n.offsetHeight < 1 || n._x_isShown !== false && a(f));
  })), t.includes("self") && (s = l(s, (a, f) => {
    f.target === n && a(f);
  })), e === "submit" && (s = l(s, (a, f) => {
    f.target._x_pendingModelUpdates && f.target._x_pendingModelUpdates.forEach((h) => h()), a(f);
  })), (FL(e) || i1(e)) && (s = l(s, (a, f) => {
    HL(f, t) || a(f);
  })), r.addEventListener(e, s, o), () => {
    r.removeEventListener(e, s, o);
  };
}
function n1(n, e) {
  if (n.includes("debounce")) {
    let t = n[n.indexOf("debounce") + 1] || "invalid-wait", i = tf(t.split("ms")[0]) ? Number(t.split("ms")[0]) : 250;
    e = Bw(e, i);
  }
  if (n.includes("throttle")) {
    let t = n[n.indexOf("throttle") + 1] || "invalid-wait", i = tf(t.split("ms")[0]) ? Number(t.split("ms")[0]) : 250;
    e = Pw(e, i);
  }
  return e;
}
function PL(n) {
  return n.replace(/-/g, ".");
}
function IL(n) {
  return n.toLowerCase().replace(/-(\w)/g, (e, t) => t.toUpperCase());
}
function tf(n) {
  return !Array.isArray(n) && !isNaN(n);
}
function NL(n) {
  return [" ", "_"].includes(n) ? n : n.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function FL(n) {
  return ["keydown", "keyup"].includes(n);
}
function i1(n) {
  return ["contextmenu", "click", "mouse"].some((e) => n.includes(e));
}
function HL(n, e) {
  let t = e.filter((s) => !["window", "document", "prevent", "stop", "once", "capture", "self", "away", "outside", "passive", "preserve-scroll", "blur", "change", "lazy"].includes(s));
  if (t.includes("debounce")) {
    let s = t.indexOf("debounce");
    t.splice(s, tf((t[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (t.includes("throttle")) {
    let s = t.indexOf("throttle");
    t.splice(s, tf((t[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (t.length === 0 || t.length === 1 && Gm(n.key).includes(t[0])) return false;
  const r = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((s) => t.includes(s));
  return t = t.filter((s) => !r.includes(s)), !(r.length > 0 && r.filter((o) => ((o === "cmd" || o === "super") && (o = "meta"), n[`${o}Key`])).length === r.length && (i1(n.type) || Gm(n.key).includes(t[0])));
}
function Gm(n) {
  if (!n) return [];
  n = NL(n);
  let e = { ctrl: "control", slash: "/", space: " ", spacebar: " ", cmd: "meta", esc: "escape", up: "arrow-up", down: "arrow-down", left: "arrow-left", right: "arrow-right", period: ".", comma: ",", equal: "=", minus: "-", underscore: "_" };
  return e[n] = n, Object.keys(e).map((t) => {
    if (e[t] === n) return t;
  }).filter((t) => t);
}
Kt("model", (n, { modifiers: e, expression: t }, { effect: i, cleanup: r }) => {
  let s = n;
  e.includes("parent") && (s = xr(n, (C) => C !== n));
  let o = Pn(s, t), l;
  typeof t == "string" ? l = Pn(s, `${t} = __placeholder`) : typeof t == "function" && typeof t() == "string" ? l = Pn(s, `${t()} = __placeholder`) : l = () => {
  };
  let a = () => {
    let C;
    return o((E) => C = E), Ym(C) ? C.get() : C;
  }, f = (C) => {
    let E;
    o((D) => E = D), Ym(E) ? E.set(C) : l(() => {
    }, { scope: { __placeholder: C } });
  };
  typeof t == "string" && n.type === "radio" && Bt(() => {
    n.hasAttribute("name") || n.setAttribute("name", t);
  });
  let h = e.includes("change") || e.includes("lazy"), p = e.includes("blur"), m = e.includes("enter"), b = h || p || m, x;
  if (rs) x = () => {
  };
  else if (b) {
    let C = [], E = (D) => f(oc(n, e, D, a()));
    if (h && C.push(fo(n, "change", e, E)), p && (C.push(fo(n, "blur", e, E)), n.form)) {
      let D = n.form, R = () => E({ target: n });
      D._x_pendingModelUpdates || (D._x_pendingModelUpdates = []), D._x_pendingModelUpdates.push(R), r(() => {
        D._x_pendingModelUpdates && D._x_pendingModelUpdates.splice(D._x_pendingModelUpdates.indexOf(R), 1);
      });
    }
    m && C.push(fo(n, "keydown", e, (D) => {
      D.key === "Enter" && E(D);
    })), x = () => C.forEach((D) => D());
  } else {
    let C = n.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(n.type) ? "change" : "input";
    x = fo(n, C, e, (E) => {
      f(oc(n, e, E, a()));
    });
  }
  if (e.includes("fill") && ([void 0, null, ""].includes(a()) || ef(n) && Array.isArray(a()) || n.tagName.toLowerCase() === "select" && n.multiple) && f(oc(n, e, { target: n }, a())), n._x_removeModelListeners || (n._x_removeModelListeners = {}), n._x_removeModelListeners.default = x, r(() => n._x_removeModelListeners.default()), n.form) {
    let C = fo(n.form, "reset", [], (E) => {
      pp(() => n._x_model && n._x_model.set(oc(n, e, { target: n }, a())));
    });
    r(() => C());
  }
  n._x_model = { get() {
    return a();
  }, set(C) {
    f(C);
  }, setWithModifiers: n1(e, f) }, n._x_forceModelUpdate = (C) => {
    C === void 0 && typeof t == "string" && t.match(/\./) && (C = ""), Bt(() => {
      ef(n) ? Array.isArray(C) ? n.checked = C.some((E) => E == n.value) : n.checked = !!C : mp(n) ? typeof C == "boolean" ? n.checked = Sc(n.value) === C : n.checked = n.value == C : _w(n, "value", C);
    });
  }, i(() => {
    let C = a();
    e.includes("unintrusive") && document.activeElement.isSameNode(n) || n._x_forceModelUpdate(C);
  });
});
function oc(n, e, t, i) {
  return Bt(() => {
    if (t instanceof CustomEvent && t.detail !== void 0) return t.detail !== null && t.detail !== void 0 ? t.detail : t.target.value;
    if (ef(n)) if (Array.isArray(i)) {
      let r = null;
      return e.includes("number") ? r = Lh(t.target.value) : e.includes("boolean") ? r = Sc(t.target.value) : r = t.target.value, t.target.checked ? i.includes(r) ? i : i.concat([r]) : i.filter((s) => !WL(s, r));
    } else return t.target.checked;
    else {
      if (n.tagName.toLowerCase() === "select" && n.multiple) return e.includes("number") ? Array.from(t.target.selectedOptions).map((r) => {
        let s = r.value || r.text;
        return Lh(s);
      }) : e.includes("boolean") ? Array.from(t.target.selectedOptions).map((r) => {
        let s = r.value || r.text;
        return Sc(s);
      }) : Array.from(t.target.selectedOptions).map((r) => r.value || r.text);
      {
        let r;
        return mp(n) ? t.target.checked ? r = t.target.value : r = i : r = t.target.value, e.includes("number") ? Lh(r) : e.includes("boolean") ? Sc(r) : e.includes("trim") ? r.trim() : r;
      }
    }
  });
}
function Lh(n) {
  let e = n ? parseFloat(n) : null;
  return VL(e) ? e : n;
}
function WL(n, e) {
  return n == e;
}
function VL(n) {
  return !Array.isArray(n) && !isNaN(n);
}
function Ym(n) {
  return n !== null && typeof n == "object" && typeof n.get == "function" && typeof n.set == "function";
}
Kt("cloak", (n) => queueMicrotask(() => Bt(() => n.removeAttribute(Ko("cloak")))));
Cw(() => `[${Ko("init")}]`);
Kt("init", _r((n, { expression: e }, { evaluate: t }) => typeof e == "string" ? !!e.trim() && t(e, {}, false) : t(e, {}, false)));
Kt("text", (n, { expression: e }, { effect: t, evaluateLater: i }) => {
  let r = i(e);
  t(() => {
    r((s) => {
      Bt(() => {
        n.textContent = s;
      });
    });
  });
});
Kt("html", (n, { expression: e }, { effect: t, evaluateLater: i }) => {
  let r = i(e);
  t(() => {
    r((s) => {
      Bt(() => {
        n.innerHTML = s ?? "", n._x_ignoreSelf = true, Ar(n), delete n._x_ignoreSelf;
      });
    });
  });
});
hp(pw(":", gw(Ko("bind:"))));
var r1 = (n, { value: e, modifiers: t, expression: i, original: r }, { effect: s, cleanup: o }) => {
  if (!e) {
    let a = {};
    U_(a), Pn(n, i)((h) => {
      Fw(n, h, r);
    }, { scope: a });
    return;
  }
  if (e === "key") return zL(n, i);
  if (n._x_inlineBindings && n._x_inlineBindings[e] && n._x_inlineBindings[e].extract) return;
  let l = Pn(n, i);
  s(() => l((a) => {
    a === void 0 && typeof i == "string" && i.match(/\./) && (a = ""), Bt(() => _w(n, e, a, t));
  })), o(() => {
    n._x_undoAddedClasses && n._x_undoAddedClasses(), n._x_undoAddedStyles && n._x_undoAddedStyles();
  });
};
r1.inline = (n, { value: e, modifiers: t, expression: i }) => {
  e && (n._x_inlineBindings || (n._x_inlineBindings = {}), n._x_inlineBindings[e] = { expression: i, extract: false });
};
Kt("bind", r1);
function zL(n, e) {
  n._x_keyExpression = e;
}
Sw(() => `[${Ko("data")}]`);
Kt("data", (n, { expression: e }, { cleanup: t }) => {
  if (KL(n)) return;
  e = e === "" ? "{}" : e;
  let i = {};
  ra(i, n);
  let r = {};
  G_(r, i);
  let s = Rs(n, e, { scope: r });
  (s === void 0 || s === true) && (s = {}), ra(s, n);
  let o = Vo(s);
  ap(o);
  let l = ga(n, o);
  o.init && Rs(n, o.init), t(() => {
    o.destroy && Rs(n, o.destroy), l();
  });
});
Af((n, e) => {
  n._x_dataStack && (e._x_dataStack = n._x_dataStack, e.setAttribute("data-has-alpine-state", true));
});
function KL(n) {
  return rs ? Qu ? true : n.hasAttribute("data-has-alpine-state") : false;
}
Kt("show", (n, { modifiers: e, expression: t }, { effect: i }) => {
  let r = Pn(n, t);
  n._x_doHide || (n._x_doHide = () => {
    Bt(() => {
      n.style.setProperty("display", "none", e.includes("important") ? "important" : void 0);
    });
  }), n._x_doShow || (n._x_doShow = () => {
    Bt(() => {
      n.style.length === 1 && n.style.display === "none" ? n.removeAttribute("style") : n.style.removeProperty("display");
    });
  });
  let s = () => {
    n._x_doHide(), n._x_isShown = false;
  }, o = () => {
    n._x_doShow(), n._x_isShown = true;
  }, l = () => setTimeout(o), a = Yu((p) => p ? o() : s(), (p) => {
    typeof n._x_toggleAndCascadeWithTransitions == "function" ? n._x_toggleAndCascadeWithTransitions(n, p, o, s) : p ? l() : s();
  }), f, h = true;
  i(() => r((p) => {
    !h && p === f || (e.includes("immediate") && (p ? l() : s()), a(p), f = p, h = false);
  }));
});
Kt("for", (n, { expression: e }, { effect: t, cleanup: i }) => {
  let r = UL(e), s = Pn(n, r.items), o = Pn(n, n._x_keyExpression || "index");
  n._x_lookup = /* @__PURE__ */ new Map(), t(() => jL(n, r, s, o)), i(() => {
    n._x_lookup.forEach((l) => Bt(() => {
      $o(l), l.remove();
    })), delete n._x_lookup;
  });
});
function $L(n) {
  return (e) => {
    Object.entries(e).forEach(([t, i]) => {
      n[t] = i;
    });
  };
}
function jL(n, e, t, i) {
  t((r) => {
    GL(r) && (r = Array.from({ length: r }, (f, h) => h + 1)), r === void 0 && (r = []), r instanceof Set && (r = Array.from(r)), r instanceof Map && (r = Array.from(r));
    let s = n._x_lookup, o = /* @__PURE__ */ new Map();
    n._x_lookup = o;
    let l = YL(r), a = Object.entries(r).map(([f, h]) => {
      l || (f = parseInt(f));
      let p = qL(e, h, f, r), m;
      return i((b) => {
        typeof b == "object" && Mr("x-for key cannot be an object, it must be a string or an integer", n), s.has(b) && (o.set(b, s.get(b)), s.delete(b)), m = b;
      }, { scope: { index: f, ...p } }), [m, p];
    });
    Bt(() => {
      s.forEach((p) => {
        $o(p), p.remove();
      });
      let f = /* @__PURE__ */ new Set(), h = n;
      a.forEach(([p, m]) => {
        if (o.has(p)) {
          let C = o.get(p);
          C._x_refreshXForScope(m), h.nextElementSibling !== C && (h.nextElementSibling && C.replaceWith(h.nextElementSibling), h.after(C)), h = C, C._x_currentIfEl && (C.nextElementSibling !== C._x_currentIfEl && h.after(C._x_currentIfEl), h = C._x_currentIfEl);
          return;
        }
        let b = document.importNode(n.content, true).firstElementChild, x = Vo(m);
        ga(b, x, n), b._x_refreshXForScope = $L(x), o.set(p, b), f.add(b), h.after(b), h = b;
      }), _r(() => f.forEach((p) => Ar(p)))();
    });
  });
}
function UL(n) {
  let e = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, t = /^\s*\(|\)\s*$/g, i = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, r = n.match(i);
  if (!r) return;
  let s = {};
  s.items = r[2].trim();
  let o = r[1].replace(t, "").trim(), l = o.match(e);
  return l ? (s.item = o.replace(e, "").trim(), s.index = l[1].trim(), l[2] && (s.collection = l[2].trim())) : s.item = o, s;
}
function qL(n, e, t, i) {
  let r = {};
  return /^\[.*\]$/.test(n.item) && Array.isArray(e) ? n.item.replace("[", "").replace("]", "").split(",").map((o) => o.trim()).forEach((o, l) => {
    r[o] = e[l];
  }) : /^\{.*\}$/.test(n.item) && !Array.isArray(e) && typeof e == "object" ? n.item.replace("{", "").replace("}", "").split(",").map((o) => o.trim()).forEach((o) => {
    r[o] = e[o];
  }) : r[n.item] = e, n.index && (r[n.index] = t), n.collection && (r[n.collection] = i), r;
}
function GL(n) {
  return !Array.isArray(n) && !isNaN(n);
}
function YL(n) {
  return typeof n == "object" && !Array.isArray(n);
}
function s1() {
}
s1.inline = _r((n, { expression: e }, { cleanup: t }) => {
  let i = Cf(n);
  i._x_refs || (i._x_refs = {}), i._x_refs[e] = n, t(() => delete i._x_refs[e]);
});
Kt("ref", s1);
Kt("if", (n, { expression: e }, { effect: t, cleanup: i }) => {
  n.tagName.toLowerCase() !== "template" && Mr("x-if can only be used on a <template> tag", n);
  let r = Pn(n, e), s = () => {
    if (n._x_currentIfEl) return n._x_currentIfEl;
    let l = n.content.cloneNode(true).firstElementChild;
    return ga(l, {}, n), Bt(() => {
      n.after(l), _r(() => Ar(l))();
    }), n._x_currentIfEl = l, n._x_undoIf = () => {
      Bt(() => {
        $o(l), l.remove();
      }), delete n._x_currentIfEl;
    }, l;
  }, o = () => {
    n._x_undoIf && (n._x_undoIf(), delete n._x_undoIf);
  };
  t(() => r((l) => {
    l ? s() : o();
  })), i(() => n._x_undoIf && n._x_undoIf());
});
Kt("id", (n, { expression: e }, { evaluate: t }) => {
  t(e).forEach((r) => DL(n, r));
});
Af((n, e) => {
  n._x_ids && (e._x_ids = n._x_ids);
});
hp(pw("@", gw(Ko("on:"))));
Kt("on", _r((n, { value: e, modifiers: t, expression: i }, { cleanup: r }) => {
  let s = i ? Pn(n, i) : () => {
  };
  n.tagName.toLowerCase() === "template" && (n._x_forwardEvents || (n._x_forwardEvents = []), n._x_forwardEvents.includes(e) || n._x_forwardEvents.push(e));
  let o = fo(n, e, t, (l) => {
    s(() => {
    }, { scope: { $event: l }, params: [l] });
  });
  r(() => o());
}));
_f("Collapse", "collapse", "collapse");
_f("Intersect", "intersect", "intersect");
_f("Focus", "trap", "focus");
_f("Mask", "mask", "mask");
function _f(n, e, t) {
  Kt(e, (i) => Mr(`You can't use [x-${e}] without first installing the "${n}" plugin here: https://alpinejs.dev/plugins/${t}`, i));
}
jo.setEvaluator(e_);
jo.setRawEvaluator(s_);
jo.setReactivityEngine({ reactive: Sp, effect: rL, release: sL, raw: wt });
var JL = jo, o1 = JL;
let Dh;
function l1(n) {
  return { lang: (n == null ? void 0 : n.lang) ?? (Dh == null ? void 0 : Dh.lang), message: n == null ? void 0 : n.message, abortEarly: (n == null ? void 0 : n.abortEarly) ?? (Dh == null ? void 0 : Dh.abortEarly), abortPipeEarly: (n == null ? void 0 : n.abortPipeEarly) ?? (Dh == null ? void 0 : Dh.abortPipeEarly) };
}
let QL;
function XL(n) {
  return QL == null ? void 0 : QL.get(n);
}
let ZL;
function e2(n) {
  return ZL == null ? void 0 : ZL.get(n);
}
let t2;
function n2(n, e) {
  var _a;
  return (_a = t2 == null ? void 0 : t2.get(n)) == null ? void 0 : _a.get(e);
}
function i2(n) {
  var _a, _b2;
  const e = typeof n;
  return e === "string" ? `"${n}"` : e === "number" || e === "bigint" || e === "boolean" ? `${n}` : e === "object" || e === "function" ? (n && ((_b2 = (_a = Object.getPrototypeOf(n)) == null ? void 0 : _a.constructor) == null ? void 0 : _b2.name)) ?? "null" : e;
}
function Do(n, e, t, i, r) {
  const s = r && "input" in r ? r.input : t.value, o = (r == null ? void 0 : r.expected) ?? n.expects ?? null, l = (r == null ? void 0 : r.received) ?? i2(s), a = { kind: n.kind, type: n.type, input: s, expected: o, received: l, message: `Invalid ${e}: ${o ? `Expected ${o} but r` : "R"}eceived ${l}`, requirement: n.requirement, path: r == null ? void 0 : r.path, issues: r == null ? void 0 : r.issues, lang: i.lang, abortEarly: i.abortEarly, abortPipeEarly: i.abortPipeEarly }, f = n.kind === "schema", h = (r == null ? void 0 : r.message) ?? n.message ?? n2(n.reference, a.lang) ?? (f ? e2(a.lang) : null) ?? i.message ?? XL(a.lang);
  h !== void 0 && (a.message = typeof h == "function" ? h(a) : h), f && (t.typed = false), t.issues ? t.issues.push(a) : t.issues = [a];
}
function ma(n) {
  return { version: 1, vendor: "valibot", validate(e) {
    return n["~run"]({ value: e }, l1());
  } };
}
function r2(n, e) {
  return Object.hasOwn(n, e) && e !== "__proto__" && e !== "prototype" && e !== "constructor";
}
var s2 = class extends Error {
  constructor(n) {
    super(n[0].message), this.name = "ValiError", this.issues = n;
  }
};
function o2(n, e, t) {
  return typeof n.fallback == "function" ? n.fallback(e, t) : n.fallback;
}
function l2(n, e, t) {
  return typeof n.default == "function" ? n.default(e, t) : n.default;
}
function nf(n, e) {
  return { kind: "schema", type: "array", reference: nf, expects: "Array", async: false, item: n, message: e, get "~standard"() {
    return ma(this);
  }, "~run"(t, i) {
    var _a;
    const r = t.value;
    if (Array.isArray(r)) {
      t.typed = true, t.value = [];
      for (let s = 0; s < r.length; s++) {
        const o = r[s], l = this.item["~run"]({ value: o }, i);
        if (l.issues) {
          const a = { type: "array", origin: "value", input: r, key: s, value: o };
          for (const f of l.issues) f.path ? f.path.unshift(a) : f.path = [a], (_a = t.issues) == null ? void 0 : _a.push(f);
          if (t.issues || (t.issues = l.issues), i.abortEarly) {
            t.typed = false;
            break;
          }
        }
        l.typed || (t.typed = false), t.value.push(l.value);
      }
    } else Do(this, "type", t, i);
    return t;
  } };
}
function td(n) {
  return { kind: "schema", type: "number", reference: td, expects: "number", async: false, message: n, get "~standard"() {
    return ma(this);
  }, "~run"(e, t) {
    return typeof e.value == "number" && !isNaN(e.value) ? e.typed = true : Do(this, "type", e, t), e;
  } };
}
function a1(n, e) {
  return { kind: "schema", type: "object", reference: a1, expects: "Object", async: false, entries: n, message: e, get "~standard"() {
    return ma(this);
  }, "~run"(t, i) {
    var _a;
    const r = t.value;
    if (r && typeof r == "object") {
      t.typed = true, t.value = {};
      for (const s in this.entries) {
        const o = this.entries[s];
        if (s in r || (o.type === "exact_optional" || o.type === "optional" || o.type === "nullish") && o.default !== void 0) {
          const l = s in r ? r[s] : l2(o), a = o["~run"]({ value: l }, i);
          if (a.issues) {
            const f = { type: "object", origin: "value", input: r, key: s, value: l };
            for (const h of a.issues) h.path ? h.path.unshift(f) : h.path = [f], (_a = t.issues) == null ? void 0 : _a.push(h);
            if (t.issues || (t.issues = a.issues), i.abortEarly) {
              t.typed = false;
              break;
            }
          }
          a.typed || (t.typed = false), t.value[s] = a.value;
        } else if (o.fallback !== void 0) t.value[s] = o2(o);
        else if (o.type !== "exact_optional" && o.type !== "optional" && o.type !== "nullish" && (Do(this, "key", t, i, { input: void 0, expected: `"${s}"`, path: [{ type: "object", origin: "key", input: r, key: s, value: r[s] }] }), i.abortEarly)) break;
      }
    } else Do(this, "type", t, i);
    return t;
  } };
}
function rf(n, e, t) {
  return { kind: "schema", type: "record", reference: rf, expects: "Object", async: false, key: n, value: e, message: t, get "~standard"() {
    return ma(this);
  }, "~run"(i, r) {
    var _a, _b2;
    const s = i.value;
    if (s && typeof s == "object") {
      i.typed = true, i.value = {};
      for (const o in s) if (r2(s, o)) {
        const l = s[o], a = this.key["~run"]({ value: o }, r);
        if (a.issues) {
          const h = { type: "object", origin: "key", input: s, key: o, value: l };
          for (const p of a.issues) p.path = [h], (_a = i.issues) == null ? void 0 : _a.push(p);
          if (i.issues || (i.issues = a.issues), r.abortEarly) {
            i.typed = false;
            break;
          }
        }
        const f = this.value["~run"]({ value: l }, r);
        if (f.issues) {
          const h = { type: "object", origin: "value", input: s, key: o, value: l };
          for (const p of f.issues) p.path ? p.path.unshift(h) : p.path = [h], (_b2 = i.issues) == null ? void 0 : _b2.push(p);
          if (i.issues || (i.issues = f.issues), r.abortEarly) {
            i.typed = false;
            break;
          }
        }
        (!a.typed || !f.typed) && (i.typed = false), a.typed && (i.value[a.value] = f.value);
      }
    } else Do(this, "type", i, r);
    return i;
  } };
}
function So(n) {
  return { kind: "schema", type: "string", reference: So, expects: "string", async: false, message: n, get "~standard"() {
    return ma(this);
  }, "~run"(e, t) {
    return typeof e.value == "string" ? e.typed = true : Do(this, "type", e, t), e;
  } };
}
function a2(n, e, t) {
  const i = n["~run"]({ value: e }, l1(t));
  if (i.issues) throw new s2(i.issues);
  return i.value;
}
const c2 = a1({ name: So(), tags: rf(So(), So()), timestamps: nf(td()), values: nf(td()) }), f2 = rf(So(), rf(So(), nf(c2)));
let lc = null;
async function c1() {
  if (lc) return lc;
  const n = await fetch("/datasets.json");
  return n.ok ? (lc = a2(f2, await n.json()), lc) : {};
}
async function Rh() {
  const n = await c1(), e = {};
  for (const [t, i] of Object.entries(n)) {
    e[t] = {};
    for (const [r, s] of Object.entries(i)) {
      const o = /* @__PURE__ */ new Set();
      for (const l of s) for (const a of Object.keys(l.tags)) o.add(a);
      e[t][r] = [...o].sort();
    }
  }
  return e;
}
async function h2(n, e) {
  var _a;
  return ((_a = (await c1())[n]) == null ? void 0 : _a[e]) ?? [];
}
async function nd(n) {
  return "Simple" in n ? b2(n.Simple) : "Compute" in n ? w2(n.Compute) : [];
}
function Vl(n) {
  if (n && typeof n == "object" && "Concrete" in n) return n.Concrete;
}
function va(n) {
  return n && typeof n == "object" && "Builtin" in n ? String(n.Builtin).toLowerCase() : typeof n == "string" ? n.toLowerCase() : "?";
}
const u2 = { Millisecond: 1e-3, Second: 1, Minute: 60, Hour: 3600, Day: 86400, Week: 604800 };
function d2(n) {
  return (n.value ?? 1) * (u2[n.unit] ?? 60);
}
function p2(n) {
  return n == null ? "" : String(n);
}
function g2(n) {
  const e = Object.entries(n);
  return e.length === 0 ? "series" : e.map(([t, i]) => `${t}=${i}`).join(", ");
}
function Cc(n, e) {
  if ("Cmp" in e) {
    const { field: t, rhs: i } = e.Cmp, r = n.tags[t];
    if (r == null) return false;
    const s = [["Eq", (o, l) => o === l], ["Ne", (o, l) => o !== l], ["Gt", (o, l) => Number(o) > Number(l)], ["Ge", (o, l) => Number(o) >= Number(l)], ["Lt", (o, l) => Number(o) < Number(l)], ["Le", (o, l) => Number(o) <= Number(l)]];
    for (const [o, l] of s) if (o in i) return l(r, p2(Vl(i[o])));
    if ("RegEx" in i) try {
      const o = Vl(i.RegEx);
      return (o instanceof RegExp ? o : new RegExp(String(o))).test(r);
    } catch {
      return true;
    }
    if ("RegExNot" in i) try {
      const o = Vl(i.RegExNot);
      return !(o instanceof RegExp ? o : new RegExp(String(o))).test(r);
    } catch {
      return true;
    }
    return true;
  }
  return "And" in e ? e.And.every((t) => Cc(n, t)) : "Or" in e ? e.Or.some((t) => Cc(n, t)) : "Not" in e ? !Cc(n, e.Not) : true;
}
function m2(n, e) {
  return n.filter((t) => e.every((i) => Cc(t, i)));
}
function f1(n, e) {
  if (n.length === 0) return 0;
  switch (e) {
    case "sum":
      return n.reduce((t, i) => t + i, 0);
    case "avg":
      return n.reduce((t, i) => t + i, 0) / n.length;
    case "min":
      return Math.min(...n);
    case "max":
      return Math.max(...n);
    case "count":
      return n.length;
    case "last":
      return n[n.length - 1];
    default:
      return n.reduce((t, i) => t + i, 0);
  }
}
function Jm(n, e) {
  if (n.length === 0) return [];
  const t = n[0].length, i = [];
  for (let r = 0; r < t; r++) {
    const s = n.map((o) => o[r]).filter((o) => o != null);
    i.push(f1(s, e));
  }
  return i;
}
function Qm(n, e) {
  var _a;
  const t = va(e.function), i = e.tags;
  if (i.length === 0) {
    const s = Jm(n.map((l) => l.values), t), o = ((_a = n[0]) == null ? void 0 : _a.timestamps) ?? [];
    return [{ tags: {}, name: `${t}(all)`, timestamps: [...o], values: s }];
  }
  const r = {};
  for (const s of n) {
    const o = i.map((l) => s.tags[l] ?? "").join("|");
    r[o] || (r[o] = []), r[o].push(s);
  }
  return Object.values(r).map((s) => {
    const o = Jm(s.map((f) => f.values), t), l = s[0].timestamps, a = {};
    for (const f of i) a[f] = s[0].tags[f] ?? "";
    return { tags: a, name: g2(a), timestamps: [...l], values: o };
  });
}
function v2(n, e) {
  const t = va(e.function).toLowerCase(), i = e.arg;
  return n.map((r) => {
    let s;
    if (t.startsWith("is")) {
      const o = t.replace("is", "");
      s = r.values.map((l) => {
        if (i == null) return l;
        switch (o) {
          case "lt":
            return l < i ? 1 : 0;
          case "gt":
            return l > i ? 1 : 0;
          case "eq":
            return l === i ? 1 : 0;
          case "ne":
            return l !== i ? 1 : 0;
          case "ge":
            return l >= i ? 1 : 0;
          case "le":
            return l <= i ? 1 : 0;
          default:
            return l < i ? 1 : 0;
        }
      });
    } else if (t.startsWith("filter")) {
      const o = t.replace("filter", "");
      s = r.values.map((l) => {
        if (i == null) return l;
        switch (o) {
          case "lt":
            return l < i ? l : NaN;
          case "gt":
            return l > i ? l : NaN;
          default:
            return l;
        }
      });
    } else if (t === "rate") s = r.values.map((o, l) => {
      if (l === 0) return 0;
      const a = r.timestamps[l] - r.timestamps[l - 1];
      return a > 0 ? (o - r.values[l - 1]) / a : 0;
    });
    else if (t === "increase") s = r.values.map((o, l) => l === 0 ? 0 : Math.max(0, o - r.values[l - 1]));
    else if (t === "abs") s = r.values.map(Math.abs);
    else if (t === "fillconst") s = r.values.map((o) => isNaN(o) ? i ?? 0 : o);
    else if (t === "fillprev") {
      let o = 0;
      s = r.values.map((l) => (isNaN(l) || (o = l), o));
    } else {
      const o = i ?? 1;
      switch (t) {
        case "add":
          s = r.values.map((l) => l + o);
          break;
        case "sub":
          s = r.values.map((l) => l - o);
          break;
        case "mul":
          s = r.values.map((l) => l * o);
          break;
        case "div":
          s = r.values.map((l) => o !== 0 ? l / o : 0);
          break;
        case "min":
          s = r.values.map((l) => Math.min(l, o));
          break;
        case "max":
          s = r.values.map((l) => Math.max(l, o));
          break;
        default:
          s = [...r.values];
          break;
      }
    }
    return { ...r, values: s };
  });
}
function Xm(n, e) {
  const t = va(e.function), i = Vl(e.time), r = i != null ? d2(i) : 300;
  return n.map((s) => {
    if (s.timestamps.length === 0) return s;
    const o = s.timestamps[0], l = s.timestamps[s.timestamps.length - 1], a = [], f = [];
    for (let h = o; h <= l; h += r) {
      a.push(h);
      const p = h + r, m = [];
      for (let b = 0; b < s.timestamps.length; b++) s.timestamps[b] >= h && s.timestamps[b] < p && !isNaN(s.values[b]) && m.push(s.values[b]);
      if (t === "rate") if (m.length < 2) f.push(0);
      else {
        let b = 0;
        for (let x = 1; x < m.length; x++) {
          const C = m[x] - m[x - 1];
          b += C < 0 ? m[x] : C;
        }
        f.push(b / r);
      }
      else f.push(f1(m, t));
    }
    return { ...s, timestamps: a, values: f };
  });
}
function y2(n, e, t, i) {
  const r = va(t), s = n[0], o = e[0];
  if (!s || !o) return n.length > 0 ? n : e;
  const l = Math.min(s.values.length, o.values.length), a = s.timestamps.slice(0, l), f = [];
  for (let h = 0; h < l; h++) {
    const p = s.values[h], m = o.values[h];
    switch (r) {
      case "div":
        f.push(m !== 0 ? p / m : 0);
        break;
      case "mul":
        f.push(p * m);
        break;
      case "add":
        f.push(p + m);
        break;
      case "sub":
        f.push(p - m);
        break;
      case "avg":
        f.push((p + m) / 2);
        break;
      case "min":
        f.push(Math.min(p, m));
        break;
      case "max":
        f.push(Math.max(p, m));
        break;
      default:
        f.push(p / (m || 1));
        break;
    }
  }
  return [{ tags: {}, name: i, timestamps: a, values: f }];
}
function zl(n) {
  return n.map((e) => ({ ...e, values: [...e.values], timestamps: [...e.timestamps] }));
}
function h1(n, e) {
  if ("Map" in e) return v2(n, e.Map);
  if ("Align" in e) return Xm(n, e.Align);
  if ("GroupBy" in e) return Qm(n, e.GroupBy);
  if ("Bucket" in e) {
    const t = e.Bucket, i = Qm(n, { span: t.span, function: t.function, tags: t.tags });
    return Xm(i, { function: t.function, time: t.time });
  }
  return "As" in e ? n.map((t) => ({ ...t, name: String(e.As.name ?? "?") })) : n;
}
async function b2(n) {
  const e = Vl(n.source.metric_id.dataset) ?? "?", t = String(n.source.metric_id.metric ?? "?"), i = [];
  let r = await h2(String(e), t);
  i.push(zl(r));
  for (const s of n.filters) r = m2(r, [s]), i.push(zl(r));
  for (const s of n.aggregates) r = h1(r, s), i.push(zl(r));
  return i;
}
async function w2(n) {
  const e = await nd(n.left), t = await nd(n.right), i = [...e, ...t];
  va(n.op);
  const r = String(n.name ?? "?"), s = e[e.length - 1] ?? [], o = t[t.length - 1] ?? [];
  let l = y2(s, o, n.op, r);
  i.push(zl(l));
  for (const a of n.aggregates) l = h1(l, a), i.push(zl(l));
  return i;
}
const x2 = true, Yt = "u-", k2 = "uplot", S2 = Yt + "hz", C2 = Yt + "vt", M2 = Yt + "title", A2 = Yt + "wrap", T2 = Yt + "under", E2 = Yt + "over", O2 = Yt + "axis", Cs = Yt + "off", _2 = Yt + "select", L2 = Yt + "cursor-x", D2 = Yt + "cursor-y", R2 = Yt + "cursor-pt", B2 = Yt + "legend", P2 = Yt + "live", I2 = Yt + "inline", N2 = Yt + "series", F2 = Yt + "marker", Zm = Yt + "label", H2 = Yt + "value", Tl = "width", El = "height", yl = "top", e0 = "bottom", oo = "left", Bh = "right", Cp = "#000", t0 = Cp + "0", Ph = "mousemove", n0 = "mousedown", Ih = "mouseup", i0 = "mouseenter", r0 = "mouseleave", s0 = "dblclick", W2 = "resize", V2 = "scroll", o0 = "change", sf = "dppxchange", Mp = "--", Uo = typeof window < "u", id = Uo ? document : null, Co = Uo ? window : null, z2 = Uo ? navigator : null;
let Je, ac;
function rd() {
  let n = devicePixelRatio;
  Je != n && (Je = n, ac && od(o0, ac, rd), ac = matchMedia(`(min-resolution: ${Je - 1e-3}dppx) and (max-resolution: ${Je + 1e-3}dppx)`), Is(o0, ac, rd), Co.dispatchEvent(new CustomEvent(sf)));
}
function ti(n, e) {
  if (e != null) {
    let t = n.classList;
    !t.contains(e) && t.add(e);
  }
}
function sd(n, e) {
  let t = n.classList;
  t.contains(e) && t.remove(e);
}
function bt(n, e, t) {
  n.style[e] = t + "px";
}
function Ei(n, e, t, i) {
  let r = id.createElement(n);
  return e != null && ti(r, e), t == null ? void 0 : t.insertBefore(r, i), r;
}
function fi(n, e) {
  return Ei("div", n, e);
}
const l0 = /* @__PURE__ */ new WeakMap();
function Qi(n, e, t, i, r) {
  let s = "translate(" + e + "px," + t + "px)", o = l0.get(n);
  s != o && (n.style.transform = s, l0.set(n, s), e < 0 || t < 0 || e > i || t > r ? ti(n, Cs) : sd(n, Cs));
}
const a0 = /* @__PURE__ */ new WeakMap();
function c0(n, e, t) {
  let i = e + t, r = a0.get(n);
  i != r && (a0.set(n, i), n.style.background = e, n.style.borderColor = t);
}
const f0 = /* @__PURE__ */ new WeakMap();
function h0(n, e, t, i) {
  let r = e + "" + t, s = f0.get(n);
  r != s && (f0.set(n, r), n.style.height = t + "px", n.style.width = e + "px", n.style.marginLeft = i ? -e / 2 + "px" : 0, n.style.marginTop = i ? -t / 2 + "px" : 0);
}
const Ap = { passive: true }, K2 = { ...Ap, capture: true };
function Is(n, e, t, i) {
  e.addEventListener(n, t, i ? K2 : Ap);
}
function od(n, e, t, i) {
  e.removeEventListener(n, t, Ap);
}
Uo && rd();
function Oi(n, e, t, i) {
  let r;
  t = t || 0, i = i || e.length - 1;
  let s = i <= 2147483647;
  for (; i - t > 1; ) r = s ? t + i >> 1 : ri((t + i) / 2), e[r] < n ? t = r : i = r;
  return n - e[t] <= e[i] - n ? t : i;
}
function u1(n) {
  return (t, i, r) => {
    let s = -1, o = -1;
    for (let l = i; l <= r; l++) if (n(t[l])) {
      s = l;
      break;
    }
    for (let l = r; l >= i; l--) if (n(t[l])) {
      o = l;
      break;
    }
    return [s, o];
  };
}
const d1 = (n) => n != null, p1 = (n) => n != null && n > 0, Lf = u1(d1), $2 = u1(p1);
function j2(n, e, t, i = 0, r = false) {
  let s = r ? $2 : Lf, o = r ? p1 : d1;
  [e, t] = s(n, e, t);
  let l = n[e], a = n[e];
  if (e > -1) if (i == 1) l = n[e], a = n[t];
  else if (i == -1) l = n[t], a = n[e];
  else for (let f = e; f <= t; f++) {
    let h = n[f];
    o(h) && (h < l ? l = h : h > a && (a = h));
  }
  return [l ?? ht, a ?? -ht];
}
function Df(n, e, t, i) {
  let r = p0(n), s = p0(e);
  n == e && (r == -1 ? (n *= t, e /= t) : (n /= t, e *= t));
  let o = t == 10 ? kr : g1, l = r == 1 ? ri : ui, a = s == 1 ? ui : ri, f = l(o(Ut(n))), h = a(o(Ut(e))), p = Ro(t, f), m = Ro(t, h);
  return t == 10 && (f < 0 && (p = ut(p, -f)), h < 0 && (m = ut(m, -h))), i || t == 2 ? (n = p * r, e = m * s) : (n = b1(n, p), e = Rf(e, m)), [n, e];
}
function Tp(n, e, t, i) {
  let r = Df(n, e, t, i);
  return n == 0 && (r[0] = 0), e == 0 && (r[1] = 0), r;
}
const Ep = 0.1, u0 = { mode: 3, pad: Ep }, Kl = { pad: 0, soft: null, mode: 0 }, U2 = { min: Kl, max: Kl };
function of(n, e, t, i) {
  return Bf(t) ? d0(n, e, t) : (Kl.pad = t, Kl.soft = i ? 0 : null, Kl.mode = i ? 3 : 0, d0(n, e, U2));
}
function qe(n, e) {
  return n ?? e;
}
function q2(n, e, t) {
  for (e = qe(e, 0), t = qe(t, n.length - 1); e <= t; ) {
    if (n[e] != null) return true;
    e++;
  }
  return false;
}
function d0(n, e, t) {
  let i = t.min, r = t.max, s = qe(i.pad, 0), o = qe(r.pad, 0), l = qe(i.hard, -ht), a = qe(r.hard, ht), f = qe(i.soft, ht), h = qe(r.soft, -ht), p = qe(i.mode, 0), m = qe(r.mode, 0), b = e - n, x = kr(b), C = Rn(Ut(n), Ut(e)), E = kr(C), D = Ut(E - x);
  (b < 1e-24 || D > 10) && (b = 0, (n == 0 || e == 0) && (b = 1e-24, p == 2 && f != ht && (s = 0), m == 2 && h != -ht && (o = 0)));
  let R = b || C || 1e3, I = kr(R), z = Ro(10, ri(I)), K = R * (b == 0 ? n == 0 ? 0.1 : 1 : s), W = ut(b1(n - K, z / 10), 24), $ = n >= f && (p == 1 || p == 3 && W <= f || p == 2 && W >= f) ? f : ht, ee = Rn(l, W < $ && n >= $ ? $ : Li($, W)), le = R * (b == 0 ? e == 0 ? 0.1 : 1 : o), re = ut(Rf(e + le, z / 10), 24), U = e <= h && (m == 1 || m == 3 && re >= h || m == 2 && re <= h) ? h : -ht, Z = Li(a, re > U && e <= U ? U : Rn(U, re));
  return ee == Z && ee == 0 && (Z = 100), [ee, Z];
}
const G2 = new Intl.NumberFormat(Uo ? z2.language : "en-US"), Op = (n) => G2.format(n), si = Math, Mc = si.PI, Ut = si.abs, ri = si.floor, jt = si.round, ui = si.ceil, Li = si.min, Rn = si.max, Ro = si.pow, p0 = si.sign, kr = si.log10, g1 = si.log2, Y2 = (n, e = 1) => si.sinh(n) * e, Nh = (n, e = 1) => si.asinh(n / e), ht = 1 / 0;
function g0(n) {
  return (kr((n ^ n >> 31) - (n >> 31)) | 0) + 1;
}
function ld(n, e, t) {
  return Li(Rn(n, e), t);
}
function m1(n) {
  return typeof n == "function";
}
function We(n) {
  return m1(n) ? n : () => n;
}
const J2 = () => {
}, v1 = (n) => n, y1 = (n, e) => e, Q2 = (n) => null, m0 = (n) => true, v0 = (n, e) => n == e, X2 = /\.\d*?(?=9{6,}|0{6,})/gm, Us = (n) => {
  if (x1(n) || os.has(n)) return n;
  const e = `${n}`, t = e.match(X2);
  if (t == null) return n;
  let i = t[0].length - 1;
  if (e.indexOf("e-") != -1) {
    let [r, s] = e.split("e");
    return +`${Us(r)}e${s}`;
  }
  return ut(n, i);
};
function ws(n, e) {
  return Us(ut(Us(n / e)) * e);
}
function Rf(n, e) {
  return Us(ui(Us(n / e)) * e);
}
function b1(n, e) {
  return Us(ri(Us(n / e)) * e);
}
function ut(n, e = 0) {
  if (x1(n)) return n;
  let t = 10 ** e, i = n * t * (1 + Number.EPSILON);
  return jt(i) / t;
}
const os = /* @__PURE__ */ new Map();
function w1(n) {
  return (("" + n).split(".")[1] || "").length;
}
function la(n, e, t, i) {
  let r = [], s = i.map(w1);
  for (let o = e; o < t; o++) {
    let l = Ut(o), a = ut(Ro(n, o), l);
    for (let f = 0; f < i.length; f++) {
      let h = n == 10 ? +`${i[f]}e${o}` : i[f] * a, p = (o >= 0 ? 0 : l) + (o >= s[f] ? 0 : s[f]), m = n == 10 ? h : ut(h, p);
      r.push(m), os.set(m, p);
    }
  }
  return r;
}
const $l = {}, _p = [], Bo = [null, null], Kr = Array.isArray, x1 = Number.isInteger, Z2 = (n) => n === void 0;
function y0(n) {
  return typeof n == "string";
}
function Bf(n) {
  let e = false;
  if (n != null) {
    let t = n.constructor;
    e = t == null || t == Object;
  }
  return e;
}
function eD(n) {
  return n != null && typeof n == "object";
}
const tD = Object.getPrototypeOf(Uint8Array), k1 = "__proto__";
function Po(n, e = Bf) {
  let t;
  if (Kr(n)) {
    let i = n.find((r) => r != null);
    if (Kr(i) || e(i)) {
      t = Array(n.length);
      for (let r = 0; r < n.length; r++) t[r] = Po(n[r], e);
    } else t = n.slice();
  } else if (n instanceof tD) t = n.slice();
  else if (e(n)) {
    t = {};
    for (let i in n) i != k1 && (t[i] = Po(n[i], e));
  } else t = n;
  return t;
}
function zt(n) {
  let e = arguments;
  for (let t = 1; t < e.length; t++) {
    let i = e[t];
    for (let r in i) r != k1 && (Bf(n[r]) ? zt(n[r], Po(i[r])) : n[r] = Po(i[r]));
  }
  return n;
}
const nD = 0, iD = 1, rD = 2;
function sD(n, e, t) {
  for (let i = 0, r, s = -1; i < e.length; i++) {
    let o = e[i];
    if (o > s) {
      for (r = o - 1; r >= 0 && n[r] == null; ) n[r--] = null;
      for (r = o + 1; r < t && n[r] == null; ) n[s = r++] = null;
    }
  }
}
function oD(n, e) {
  if (cD(n)) {
    let o = n[0].slice();
    for (let l = 1; l < n.length; l++) o.push(...n[l].slice(1));
    return fD(o[0]) || (o = aD(o)), o;
  }
  let t = /* @__PURE__ */ new Set();
  for (let o = 0; o < n.length; o++) {
    let a = n[o][0], f = a.length;
    for (let h = 0; h < f; h++) t.add(a[h]);
  }
  let i = [Array.from(t).sort((o, l) => o - l)], r = i[0].length, s = /* @__PURE__ */ new Map();
  for (let o = 0; o < r; o++) s.set(i[0][o], o);
  for (let o = 0; o < n.length; o++) {
    let l = n[o], a = l[0];
    for (let f = 1; f < l.length; f++) {
      let h = l[f], p = Array(r).fill(void 0), m = e ? e[o][f] : iD, b = [];
      for (let x = 0; x < h.length; x++) {
        let C = h[x], E = s.get(a[x]);
        C === null ? m != nD && (p[E] = C, m == rD && b.push(E)) : p[E] = C;
      }
      sD(p, b, r), i.push(p);
    }
  }
  return i;
}
const lD = typeof queueMicrotask > "u" ? (n) => Promise.resolve().then(n) : queueMicrotask;
function aD(n) {
  let e = n[0], t = e.length, i = Array(t);
  for (let s = 0; s < i.length; s++) i[s] = s;
  i.sort((s, o) => e[s] - e[o]);
  let r = [];
  for (let s = 0; s < n.length; s++) {
    let o = n[s], l = Array(t);
    for (let a = 0; a < t; a++) l[a] = o[i[a]];
    r.push(l);
  }
  return r;
}
function cD(n) {
  let e = n[0][0], t = e.length;
  for (let i = 1; i < n.length; i++) {
    let r = n[i][0];
    if (r.length != t) return false;
    if (r != e) {
      for (let s = 0; s < t; s++) if (r[s] != e[s]) return false;
    }
  }
  return true;
}
function fD(n, e = 100) {
  const t = n.length;
  if (t <= 1) return true;
  let i = 0, r = t - 1;
  for (; i <= r && n[i] == null; ) i++;
  for (; r >= i && n[r] == null; ) r--;
  if (r <= i) return true;
  const s = Rn(1, ri((r - i + 1) / e));
  for (let o = n[i], l = i + s; l <= r; l += s) {
    const a = n[l];
    if (a != null) {
      if (a <= o) return false;
      o = a;
    }
  }
  return true;
}
const S1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], C1 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function M1(n) {
  return n.slice(0, 3);
}
const hD = C1.map(M1), uD = S1.map(M1), dD = { MMMM: S1, MMM: uD, WWWW: C1, WWW: hD };
function bl(n) {
  return (n < 10 ? "0" : "") + n;
}
function pD(n) {
  return (n < 10 ? "00" : n < 100 ? "0" : "") + n;
}
const gD = { YYYY: (n) => n.getFullYear(), YY: (n) => (n.getFullYear() + "").slice(2), MMMM: (n, e) => e.MMMM[n.getMonth()], MMM: (n, e) => e.MMM[n.getMonth()], MM: (n) => bl(n.getMonth() + 1), M: (n) => n.getMonth() + 1, DD: (n) => bl(n.getDate()), D: (n) => n.getDate(), WWWW: (n, e) => e.WWWW[n.getDay()], WWW: (n, e) => e.WWW[n.getDay()], HH: (n) => bl(n.getHours()), H: (n) => n.getHours(), h: (n) => {
  let e = n.getHours();
  return e == 0 ? 12 : e > 12 ? e - 12 : e;
}, AA: (n) => n.getHours() >= 12 ? "PM" : "AM", aa: (n) => n.getHours() >= 12 ? "pm" : "am", a: (n) => n.getHours() >= 12 ? "p" : "a", mm: (n) => bl(n.getMinutes()), m: (n) => n.getMinutes(), ss: (n) => bl(n.getSeconds()), s: (n) => n.getSeconds(), fff: (n) => pD(n.getMilliseconds()) };
function Lp(n, e) {
  e = e || dD;
  let t = [], i = /\{([a-z]+)\}|[^{]+/gi, r;
  for (; r = i.exec(n); ) t.push(r[0][0] == "{" ? gD[r[1]] : r[0]);
  return (s) => {
    let o = "";
    for (let l = 0; l < t.length; l++) o += typeof t[l] == "string" ? t[l] : t[l](s, e);
    return o;
  };
}
const mD = new Intl.DateTimeFormat().resolvedOptions().timeZone;
function vD(n, e) {
  let t;
  return e == "UTC" || e == "Etc/UTC" ? t = new Date(+n + n.getTimezoneOffset() * 6e4) : e == mD ? t = n : (t = new Date(n.toLocaleString("en-US", { timeZone: e })), t.setMilliseconds(n.getMilliseconds())), t;
}
const A1 = (n) => n % 1 == 0, lf = [1, 2, 2.5, 5], yD = la(10, -32, 0, lf), T1 = la(10, 0, 32, lf), bD = T1.filter(A1), xs = yD.concat(T1), Dp = `
`, E1 = "{YYYY}", b0 = Dp + E1, O1 = "{M}/{D}", Ol = Dp + O1, cc = Ol + "/{YY}", _1 = "{aa}", wD = "{h}:{mm}", ho = wD + _1, w0 = Dp + ho, x0 = ":{ss}", et = null;
function L1(n) {
  let e = n * 1e3, t = e * 60, i = t * 60, r = i * 24, s = r * 30, o = r * 365, a = (n == 1 ? la(10, 0, 3, lf).filter(A1) : la(10, -3, 0, lf)).concat([e, e * 5, e * 10, e * 15, e * 30, t, t * 5, t * 10, t * 15, t * 30, i, i * 2, i * 3, i * 4, i * 6, i * 8, i * 12, r, r * 2, r * 3, r * 4, r * 5, r * 6, r * 7, r * 8, r * 9, r * 10, r * 15, s, s * 2, s * 3, s * 4, s * 6, o, o * 2, o * 5, o * 10, o * 25, o * 50, o * 100]);
  const f = [[o, E1, et, et, et, et, et, et, 1], [r * 28, "{MMM}", b0, et, et, et, et, et, 1], [r, O1, b0, et, et, et, et, et, 1], [i, "{h}" + _1, cc, et, Ol, et, et, et, 1], [t, ho, cc, et, Ol, et, et, et, 1], [e, x0, cc + " " + ho, et, Ol + " " + ho, et, w0, et, 1], [n, x0 + ".{fff}", cc + " " + ho, et, Ol + " " + ho, et, w0, et, 1]];
  function h(p) {
    return (m, b, x, C, E, D) => {
      let R = [], I = E >= o, z = E >= s && E < o, K = p(x), W = ut(K * n, 3), $ = Fh(K.getFullYear(), I ? 0 : K.getMonth(), z || I ? 1 : K.getDate()), ee = ut($ * n, 3);
      if (z || I) {
        let le = z ? E / s : 0, re = I ? E / o : 0, U = W == ee ? W : ut(Fh($.getFullYear() + re, $.getMonth() + le, 1) * n, 3), Z = new Date(jt(U / n)), J = Z.getFullYear(), se = Z.getMonth();
        for (let ie = 0; U <= C; ie++) {
          let Se = Fh(J + re * ie, se + le * ie, 1), ae = Se - p(ut(Se * n, 3));
          U = ut((+Se + ae) * n, 3), U <= C && R.push(U);
        }
      } else {
        let le = E >= r ? r : E, re = ri(x) - ri(W), U = ee + re + Rf(W - ee, le);
        R.push(U);
        let Z = p(U), J = Z.getHours() + Z.getMinutes() / t + Z.getSeconds() / i, se = E / i, ie = m.axes[b]._space, Se = D / ie;
        for (; U = ut(U + E, n == 1 ? 0 : 3), !(U > C); ) if (se > 1) {
          let ae = ri(ut(J + se, 6)) % 24, Me = p(U).getHours() - ae;
          Me > 1 && (Me = -1), U -= Me * i, J = (J + se) % 24;
          let Le = R[R.length - 1];
          ut((U - Le) / E, 3) * Se >= 0.7 && R.push(U);
        } else R.push(U);
      }
      return R;
    };
  }
  return [a, f, h];
}
const [xD, kD, SD] = L1(1), [CD, MD, AD] = L1(1e-3);
la(2, -53, 53, [1]);
function k0(n, e) {
  return n.map((t) => t.map((i, r) => r == 0 || r == 8 || i == null ? i : e(r == 1 || t[8] == 0 ? i : t[1] + i)));
}
function S0(n, e) {
  return (t, i, r, s, o) => {
    let l = e.find((x) => o >= x[0]) || e[e.length - 1], a, f, h, p, m, b;
    return i.map((x) => {
      let C = n(x), E = C.getFullYear(), D = C.getMonth(), R = C.getDate(), I = C.getHours(), z = C.getMinutes(), K = C.getSeconds(), W = E != a && l[2] || D != f && l[3] || R != h && l[4] || I != p && l[5] || z != m && l[6] || K != b && l[7] || l[1];
      return a = E, f = D, h = R, p = I, m = z, b = K, W(C);
    });
  };
}
function TD(n, e) {
  let t = Lp(e);
  return (i, r, s, o, l) => r.map((a) => t(n(a)));
}
function Fh(n, e, t) {
  return new Date(n, e, t);
}
function C0(n, e) {
  return e(n);
}
const ED = "{YYYY}-{MM}-{DD} {h}:{mm}{aa}";
function M0(n, e) {
  return (t, i, r, s) => s == null ? Mp : e(n(i));
}
function OD(n, e) {
  let t = n.series[e];
  return t.width ? t.stroke(n, e) : t.points.width ? t.points.stroke(n, e) : null;
}
function _D(n, e) {
  return n.series[e].fill(n, e);
}
const LD = { show: true, live: true, isolate: false, mount: J2, markers: { show: true, width: 2, stroke: OD, fill: _D, dash: "solid" }, idx: null, idxs: null, values: [] };
function DD(n, e) {
  let t = n.cursor.points, i = fi(), r = t.size(n, e);
  bt(i, Tl, r), bt(i, El, r);
  let s = r / -2;
  bt(i, "marginLeft", s), bt(i, "marginTop", s);
  let o = t.width(n, e, r);
  return o && bt(i, "borderWidth", o), i;
}
function RD(n, e) {
  let t = n.series[e].points;
  return t._fill || t._stroke;
}
function BD(n, e) {
  let t = n.series[e].points;
  return t._stroke || t._fill;
}
function PD(n, e) {
  return n.series[e].points.size;
}
const Hh = [0, 0];
function ID(n, e, t) {
  return Hh[0] = e, Hh[1] = t, Hh;
}
function fc(n, e, t, i = true) {
  return (r) => {
    r.button == 0 && (!i || r.target == e) && t(r);
  };
}
function Wh(n, e, t, i = true) {
  return (r) => {
    (!i || r.target == e) && t(r);
  };
}
const ND = { show: true, x: true, y: true, lock: false, move: ID, points: { one: false, show: DD, size: PD, width: 0, stroke: BD, fill: RD }, bind: { mousedown: fc, mouseup: fc, click: fc, dblclick: fc, mousemove: Wh, mouseleave: Wh, mouseenter: Wh }, drag: { setScale: true, x: true, y: false, dist: 0, uni: null, click: (n, e) => {
  e.stopPropagation(), e.stopImmediatePropagation();
}, _x: false, _y: false }, focus: { dist: (n, e, t, i, r) => i - r, prox: -1, bias: 0 }, hover: { skip: [void 0], prox: null, bias: 0 }, left: -10, top: -10, idx: null, dataIdx: null, idxs: null, event: null }, D1 = { show: true, stroke: "rgba(0,0,0,0.07)", width: 2 }, Rp = zt({}, D1, { filter: y1 }), R1 = zt({}, Rp, { size: 10 }), B1 = zt({}, D1, { show: false }), Bp = '12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', P1 = "bold " + Bp, I1 = 1.5, A0 = { show: true, scale: "x", stroke: Cp, space: 50, gap: 5, alignTo: 1, size: 50, labelGap: 0, labelSize: 30, labelFont: P1, side: 2, grid: Rp, ticks: R1, border: B1, font: Bp, lineGap: I1, rotate: 0 }, FD = "Value", HD = "Time", T0 = { show: true, scale: "x", auto: false, sorted: 1, min: ht, max: -ht, idxs: [] };
function WD(n, e, t, i, r) {
  return e.map((s) => s == null ? "" : Op(s));
}
function VD(n, e, t, i, r, s, o) {
  let l = [], a = os.get(r) || 0;
  t = o ? t : ut(Rf(t, r), a);
  for (let f = t; f <= i; f = ut(f + r, a)) l.push(Object.is(f, -0) ? 0 : f);
  return l;
}
function ad(n, e, t, i, r, s, o) {
  const l = [], a = n.scales[n.axes[e].scale].log, f = a == 10 ? kr : g1, h = ri(f(t));
  r = Ro(a, h), a == 10 && (r = xs[Oi(r, xs)]);
  let p = t, m = r * a;
  a == 10 && (m = xs[Oi(m, xs)]);
  do
    l.push(p), p = p + r, a == 10 && !os.has(p) && (p = ut(p, os.get(r))), p >= m && (r = p, m = r * a, a == 10 && (m = xs[Oi(m, xs)]));
  while (p <= i);
  return l;
}
function zD(n, e, t, i, r, s, o) {
  let a = n.scales[n.axes[e].scale].asinh, f = i > a ? ad(n, e, Rn(a, t), i, r) : [a], h = i >= 0 && t <= 0 ? [0] : [];
  return (t < -a ? ad(n, e, Rn(a, -i), -t, r) : [a]).reverse().map((m) => -m).concat(h, f);
}
const N1 = /./, KD = /[12357]/, $D = /[125]/, E0 = /1/, cd = (n, e, t, i) => n.map((r, s) => e == 4 && r == 0 || s % i == 0 && t.test(r.toExponential()[r < 0 ? 1 : 0]) ? r : null);
function jD(n, e, t, i, r) {
  let s = n.axes[t], o = s.scale, l = n.scales[o], a = n.valToPos, f = s._space, h = a(10, o), p = a(9, o) - h >= f ? N1 : a(7, o) - h >= f ? KD : a(5, o) - h >= f ? $D : E0;
  if (p == E0) {
    let m = Ut(a(1, o) - h);
    if (m < f) return cd(e.slice().reverse(), l.distr, p, ui(f / m)).reverse();
  }
  return cd(e, l.distr, p, 1);
}
function UD(n, e, t, i, r) {
  let s = n.axes[t], o = s.scale, l = s._space, a = n.valToPos, f = Ut(a(1, o) - a(2, o));
  return f < l ? cd(e.slice().reverse(), 3, N1, ui(l / f)).reverse() : e;
}
function qD(n, e, t, i) {
  return i == null ? Mp : e == null ? "" : Op(e);
}
const O0 = { show: true, scale: "y", stroke: Cp, space: 30, gap: 5, alignTo: 1, size: 50, labelGap: 0, labelSize: 30, labelFont: P1, side: 3, grid: Rp, ticks: R1, border: B1, font: Bp, lineGap: I1, rotate: 0 };
function GD(n, e) {
  let t = 3 + (n || 1) * 2;
  return ut(t * e, 3);
}
function YD(n, e) {
  let { scale: t, idxs: i } = n.series[0], r = n._data[0], s = n.valToPos(r[i[0]], t, true), o = n.valToPos(r[i[1]], t, true), l = Ut(o - s), a = n.series[e], f = l / (a.points.space * Je);
  return i[1] - i[0] <= f;
}
const _0 = { scale: null, auto: true, sorted: 0, min: ht, max: -ht }, F1 = (n, e, t, i, r) => r, L0 = { show: true, auto: true, sorted: 0, gaps: F1, alpha: 1, facets: [zt({}, _0, { scale: "x" }), zt({}, _0, { scale: "y" })] }, D0 = { scale: "y", auto: true, sorted: 0, show: true, spanGaps: false, gaps: F1, alpha: 1, points: { show: YD, filter: null }, values: null, min: ht, max: -ht, idxs: [], path: null, clip: null };
function JD(n, e, t, i, r) {
  return t / 10;
}
const H1 = { time: x2, auto: true, distr: 1, log: 10, asinh: 1, min: null, max: null, dir: 1, ori: 0 }, QD = zt({}, H1, { time: false, ori: 1 }), R0 = {};
function W1(n, e) {
  let t = R0[n];
  return t || (t = { key: n, plots: [], sub(i) {
    t.plots.push(i);
  }, unsub(i) {
    t.plots = t.plots.filter((r) => r != i);
  }, pub(i, r, s, o, l, a, f) {
    for (let h = 0; h < t.plots.length; h++) t.plots[h] != r && t.plots[h].pub(i, r, s, o, l, a, f);
  } }, n != null && (R0[n] = t)), t;
}
const Io = 1, fd = 2;
function Gs(n, e, t) {
  const i = n.mode, r = n.series[e], s = i == 2 ? n._data[e] : n._data, o = n.scales, l = n.bbox;
  let a = s[0], f = i == 2 ? s[1] : s[e], h = i == 2 ? o[r.facets[0].scale] : o[n.series[0].scale], p = i == 2 ? o[r.facets[1].scale] : o[r.scale], m = l.left, b = l.top, x = l.width, C = l.height, E = n.valToPosH, D = n.valToPosV;
  return h.ori == 0 ? t(r, a, f, h, p, E, D, m, b, x, C, If, qo, Ff, z1, $1) : t(r, a, f, h, p, D, E, b, m, C, x, Nf, Go, Np, K1, j1);
}
function Pp(n, e) {
  let t = 0, i = 0, r = qe(n.bands, _p);
  for (let s = 0; s < r.length; s++) {
    let o = r[s];
    o.series[0] == e ? t = o.dir : o.series[1] == e && (o.dir == 1 ? i |= 1 : i |= 2);
  }
  return [t, i == 1 ? -1 : i == 2 ? 1 : i == 3 ? 2 : 0];
}
function XD(n, e, t, i, r) {
  let s = n.mode, o = n.series[e], l = s == 2 ? o.facets[1].scale : o.scale, a = n.scales[l];
  return r == -1 ? a.min : r == 1 ? a.max : a.distr == 3 ? a.dir == 1 ? a.min : a.max : 0;
}
function Sr(n, e, t, i, r, s) {
  return Gs(n, e, (o, l, a, f, h, p, m, b, x, C, E) => {
    let D = o.pxRound;
    const R = f.dir * (f.ori == 0 ? 1 : -1), I = f.ori == 0 ? qo : Go;
    let z, K;
    R == 1 ? (z = t, K = i) : (z = i, K = t);
    let W = D(p(l[z], f, C, b)), $ = D(m(a[z], h, E, x)), ee = D(p(l[K], f, C, b)), le = D(m(s == 1 ? h.max : h.min, h, E, x)), re = new Path2D(r);
    return I(re, ee, le), I(re, W, le), I(re, W, $), re;
  });
}
function Pf(n, e, t, i, r, s) {
  let o = null;
  if (n.length > 0) {
    o = new Path2D();
    const l = e == 0 ? Ff : Np;
    let a = t;
    for (let p = 0; p < n.length; p++) {
      let m = n[p];
      if (m[1] > m[0]) {
        let b = m[0] - a;
        b > 0 && l(o, a, i, b, i + s), a = m[1];
      }
    }
    let f = t + r - a, h = 10;
    f > 0 && l(o, a, i - h / 2, f, i + s + h);
  }
  return o;
}
function ZD(n, e, t) {
  let i = n[n.length - 1];
  i && i[0] == e ? i[1] = t : n.push([e, t]);
}
function Ip(n, e, t, i, r, s, o) {
  let l = [], a = n.length;
  for (let f = r == 1 ? t : i; f >= t && f <= i; f += r) if (e[f] === null) {
    let p = f, m = f;
    if (r == 1) for (; ++f <= i && e[f] === null; ) m = f;
    else for (; --f >= t && e[f] === null; ) m = f;
    let b = s(n[p]), x = m == p ? b : s(n[m]), C = p - r;
    b = o <= 0 && C >= 0 && C < a ? s(n[C]) : b;
    let D = m + r;
    x = o >= 0 && D >= 0 && D < a ? s(n[D]) : x, x >= b && l.push([b, x]);
  }
  return l;
}
function B0(n) {
  return n == 0 ? v1 : n == 1 ? jt : (e) => ws(e, n);
}
function V1(n) {
  let e = n == 0 ? If : Nf, t = n == 0 ? (r, s, o, l, a, f) => {
    r.arcTo(s, o, l, a, f);
  } : (r, s, o, l, a, f) => {
    r.arcTo(o, s, a, l, f);
  }, i = n == 0 ? (r, s, o, l, a) => {
    r.rect(s, o, l, a);
  } : (r, s, o, l, a) => {
    r.rect(o, s, a, l);
  };
  return (r, s, o, l, a, f = 0, h = 0) => {
    f == 0 && h == 0 ? i(r, s, o, l, a) : (f = Li(f, l / 2, a / 2), h = Li(h, l / 2, a / 2), e(r, s + f, o), t(r, s + l, o, s + l, o + a, f), t(r, s + l, o + a, s, o + a, h), t(r, s, o + a, s, o, h), t(r, s, o, s + l, o, f), r.closePath());
  };
}
const If = (n, e, t) => {
  n.moveTo(e, t);
}, Nf = (n, e, t) => {
  n.moveTo(t, e);
}, qo = (n, e, t) => {
  n.lineTo(e, t);
}, Go = (n, e, t) => {
  n.lineTo(t, e);
}, Ff = V1(0), Np = V1(1), z1 = (n, e, t, i, r, s) => {
  n.arc(e, t, i, r, s);
}, K1 = (n, e, t, i, r, s) => {
  n.arc(t, e, i, r, s);
}, $1 = (n, e, t, i, r, s, o) => {
  n.bezierCurveTo(e, t, i, r, s, o);
}, j1 = (n, e, t, i, r, s, o) => {
  n.bezierCurveTo(t, e, r, i, o, s);
};
function U1(n) {
  return (e, t, i, r, s) => Gs(e, t, (o, l, a, f, h, p, m, b, x, C, E) => {
    let { pxRound: D, points: R } = o, I, z;
    f.ori == 0 ? (I = If, z = z1) : (I = Nf, z = K1);
    const K = ut(R.width * Je, 3);
    let W = (R.size - R.width) / 2 * Je, $ = ut(W * 2, 3), ee = new Path2D(), le = new Path2D(), { left: re, top: U, width: Z, height: J } = e.bbox;
    Ff(le, re - $, U - $, Z + $ * 2, J + $ * 2);
    const se = (ie) => {
      if (a[ie] != null) {
        let Se = D(p(l[ie], f, C, b)), ae = D(m(a[ie], h, E, x));
        I(ee, Se + W, ae), z(ee, Se, ae, W, 0, Mc * 2);
      }
    };
    if (s) s.forEach(se);
    else for (let ie = i; ie <= r; ie++) se(ie);
    return { stroke: K > 0 ? ee : null, fill: ee, clip: le, flags: Io | fd };
  });
}
function q1(n) {
  return (e, t, i, r, s, o) => {
    i != r && (s != i && o != i && n(e, t, i), s != r && o != r && n(e, t, r), n(e, t, o));
  };
}
const eR = q1(qo), tR = q1(Go);
function G1(n) {
  const e = qe(n == null ? void 0 : n.alignGaps, 0);
  return (t, i, r, s) => Gs(t, i, (o, l, a, f, h, p, m, b, x, C, E) => {
    [r, s] = Lf(a, r, s);
    let D = o.pxRound, R = (J) => D(p(J, f, C, b)), I = (J) => D(m(J, h, E, x)), z, K;
    f.ori == 0 ? (z = qo, K = eR) : (z = Go, K = tR);
    const W = f.dir * (f.ori == 0 ? 1 : -1), $ = { stroke: new Path2D(), fill: null, clip: null, band: null, gaps: null, flags: Io }, ee = $.stroke;
    let le = false;
    if (s - r >= C * 4) {
      let J = (fe) => t.posToVal(fe, f.key, true), se = null, ie = null, Se, ae, te, Ee = R(l[W == 1 ? r : s]), Me = R(l[r]), Le = R(l[s]), ye = J(W == 1 ? Me + 1 : Le - 1);
      for (let fe = W == 1 ? r : s; fe >= r && fe <= s; fe += W) {
        let $e = l[fe], Ge = (W == 1 ? $e < ye : $e > ye) ? Ee : R($e), Ne = a[fe];
        Ge == Ee ? Ne != null ? (ae = Ne, se == null ? (z(ee, Ge, I(ae)), Se = se = ie = ae) : ae < se ? se = ae : ae > ie && (ie = ae)) : Ne === null && (le = true) : (se != null && K(ee, Ee, I(se), I(ie), I(Se), I(ae)), Ne != null ? (ae = Ne, z(ee, Ge, I(ae)), se = ie = Se = ae) : (se = ie = null, Ne === null && (le = true)), Ee = Ge, ye = J(Ee + W));
      }
      se != null && se != ie && te != Ee && K(ee, Ee, I(se), I(ie), I(Se), I(ae));
    } else for (let J = W == 1 ? r : s; J >= r && J <= s; J += W) {
      let se = a[J];
      se === null ? le = true : se != null && z(ee, R(l[J]), I(se));
    }
    let [U, Z] = Pp(t, i);
    if (o.fill != null || U != 0) {
      let J = $.fill = new Path2D(ee), se = o.fillTo(t, i, o.min, o.max, U), ie = I(se), Se = R(l[r]), ae = R(l[s]);
      W == -1 && ([ae, Se] = [Se, ae]), z(J, ae, ie), z(J, Se, ie);
    }
    if (!o.spanGaps) {
      let J = [];
      le && J.push(...Ip(l, a, r, s, W, R, e)), $.gaps = J = o.gaps(t, i, r, s, J), $.clip = Pf(J, f.ori, b, x, C, E);
    }
    return Z != 0 && ($.band = Z == 2 ? [Sr(t, i, r, s, ee, -1), Sr(t, i, r, s, ee, 1)] : Sr(t, i, r, s, ee, Z)), $;
  });
}
function nR(n) {
  const e = qe(n.align, 1), t = qe(n.ascDesc, false), i = qe(n.alignGaps, 0), r = qe(n.extend, false);
  return (s, o, l, a) => Gs(s, o, (f, h, p, m, b, x, C, E, D, R, I) => {
    [l, a] = Lf(p, l, a);
    let z = f.pxRound, { left: K, width: W } = s.bbox, $ = (Me) => z(x(Me, m, R, E)), ee = (Me) => z(C(Me, b, I, D)), le = m.ori == 0 ? qo : Go;
    const re = { stroke: new Path2D(), fill: null, clip: null, band: null, gaps: null, flags: Io }, U = re.stroke, Z = m.dir * (m.ori == 0 ? 1 : -1);
    let J = ee(p[Z == 1 ? l : a]), se = $(h[Z == 1 ? l : a]), ie = se, Se = se;
    r && e == -1 && (Se = K, le(U, Se, J)), le(U, se, J);
    for (let Me = Z == 1 ? l : a; Me >= l && Me <= a; Me += Z) {
      let Le = p[Me];
      if (Le == null) continue;
      let ye = $(h[Me]), fe = ee(Le);
      e == 1 ? le(U, ye, J) : le(U, ie, fe), le(U, ye, fe), J = fe, ie = ye;
    }
    let ae = ie;
    r && e == 1 && (ae = K + W, le(U, ae, J));
    let [te, Ee] = Pp(s, o);
    if (f.fill != null || te != 0) {
      let Me = re.fill = new Path2D(U), Le = f.fillTo(s, o, f.min, f.max, te), ye = ee(Le);
      le(Me, ae, ye), le(Me, Se, ye);
    }
    if (!f.spanGaps) {
      let Me = [];
      Me.push(...Ip(h, p, l, a, Z, $, i));
      let Le = f.width * Je / 2, ye = t || e == 1 ? Le : -Le, fe = t || e == -1 ? -Le : Le;
      Me.forEach(($e) => {
        $e[0] += ye, $e[1] += fe;
      }), re.gaps = Me = f.gaps(s, o, l, a, Me), re.clip = Pf(Me, m.ori, E, D, R, I);
    }
    return Ee != 0 && (re.band = Ee == 2 ? [Sr(s, o, l, a, U, -1), Sr(s, o, l, a, U, 1)] : Sr(s, o, l, a, U, Ee)), re;
  });
}
function P0(n, e, t, i, r, s, o = ht) {
  if (n.length > 1) {
    let l = null;
    for (let a = 0, f = 1 / 0; a < n.length; a++) if (e[a] !== void 0) {
      if (l != null) {
        let h = Ut(n[a] - n[l]);
        h < f && (f = h, o = Ut(t(n[a], i, r, s) - t(n[l], i, r, s)));
      }
      l = a;
    }
  }
  return o;
}
function iR(n) {
  n = n || $l;
  const e = qe(n.size, [0.6, ht, 1]), t = n.align || 0, i = n.gap || 0;
  let r = n.radius;
  r = r == null ? [0, 0] : typeof r == "number" ? [r, 0] : r;
  const s = We(r), o = 1 - e[0], l = qe(e[1], ht), a = qe(e[2], 1), f = qe(n.disp, $l), h = qe(n.each, (b) => {
  }), { fill: p, stroke: m } = f;
  return (b, x, C, E) => Gs(b, x, (D, R, I, z, K, W, $, ee, le, re, U) => {
    let Z = D.pxRound, J = t, se = i * Je, ie = l * Je, Se = a * Je, ae, te;
    z.ori == 0 ? [ae, te] = s(b, x) : [te, ae] = s(b, x);
    const Ee = z.dir * (z.ori == 0 ? 1 : -1);
    let Me = z.ori == 0 ? Ff : Np, Le = z.ori == 0 ? h : (ue, nt, dt, Dr, St, kn, it) => {
      h(ue, nt, dt, St, Dr, it, kn);
    }, ye = qe(b.bands, _p).find((ue) => ue.series[0] == x), fe = ye != null ? ye.dir : 0, $e = D.fillTo(b, x, D.min, D.max, fe), De = Z($($e, K, U, le)), Ge, Ne, bn, wn = re, Xe = Z(D.width * Je), hn = false, oi = null, xn = null, ki = null, mt = null;
    p != null && (Xe == 0 || m != null) && (hn = true, oi = p.values(b, x, C, E), xn = /* @__PURE__ */ new Map(), new Set(oi).forEach((ue) => {
      ue != null && xn.set(ue, new Path2D());
    }), Xe > 0 && (ki = m.values(b, x, C, E), mt = /* @__PURE__ */ new Map(), new Set(ki).forEach((ue) => {
      ue != null && mt.set(ue, new Path2D());
    })));
    let { x0: Lr, size: un } = f;
    if (Lr != null && un != null) {
      J = 1, R = Lr.values(b, x, C, E), Lr.unit == 2 && (R = R.map((dt) => b.posToVal(ee + dt * re, z.key, true)));
      let ue = un.values(b, x, C, E);
      un.unit == 2 ? Ne = ue[0] * re : Ne = W(ue[0], z, re, ee) - W(0, z, re, ee), wn = P0(R, I, W, z, re, ee, wn), bn = wn - Ne + se;
    } else wn = P0(R, I, W, z, re, ee, wn), bn = wn * o + se, Ne = wn - bn;
    bn < 1 && (bn = 0), Xe >= Ne / 2 && (Xe = 0), bn < 5 && (Z = v1);
    let Ys = bn > 0, hr = wn - bn - (Ys ? Xe : 0);
    Ne = Z(ld(hr, Se, ie)), Ge = (J == 0 ? Ne / 2 : J == Ee ? 0 : Ne) - J * Ee * ((J == 0 ? se / 2 : 0) + (Ys ? Xe / 2 : 0));
    const Jt = { stroke: null, fill: null, clip: null, band: null, gaps: null, flags: 0 }, In = hn ? null : new Path2D();
    let Pt = null;
    if (ye != null) Pt = b.data[ye.series[1]];
    else {
      let { y0: ue, y1: nt } = f;
      ue != null && nt != null && (I = nt.values(b, x, C, E), Pt = ue.values(b, x, C, E));
    }
    let ur = ae * Ne, Re = te * Ne;
    for (let ue = Ee == 1 ? C : E; ue >= C && ue <= E; ue += Ee) {
      let nt = I[ue];
      if (nt == null) continue;
      if (Pt != null) {
        let dn = Pt[ue] ?? 0;
        if (nt - dn == 0) continue;
        De = $(dn, K, U, le);
      }
      let dt = z.distr != 2 || f != null ? R[ue] : ue, Dr = W(dt, z, re, ee), St = $(qe(nt, $e), K, U, le), kn = Z(Dr - Ge), it = Z(Rn(St, De)), Sn = Z(Li(St, De)), Nn = it - Sn;
      if (nt != null) {
        let dn = nt < 0 ? Re : ur, Fn = nt < 0 ? ur : Re;
        hn ? (Xe > 0 && ki[ue] != null && Me(mt.get(ki[ue]), kn, Sn + ri(Xe / 2), Ne, Rn(0, Nn - Xe), dn, Fn), oi[ue] != null && Me(xn.get(oi[ue]), kn, Sn + ri(Xe / 2), Ne, Rn(0, Nn - Xe), dn, Fn)) : Me(In, kn, Sn + ri(Xe / 2), Ne, Rn(0, Nn - Xe), dn, Fn), Le(b, x, ue, kn - Xe / 2, Sn, Ne + Xe, Nn);
      }
    }
    return Xe > 0 ? Jt.stroke = hn ? mt : In : hn || (Jt._fill = D.width == 0 ? D._fill : D._stroke ?? D._fill, Jt.width = 0), Jt.fill = hn ? xn : In, Jt;
  });
}
function rR(n, e) {
  const t = qe(e == null ? void 0 : e.alignGaps, 0);
  return (i, r, s, o) => Gs(i, r, (l, a, f, h, p, m, b, x, C, E, D) => {
    [s, o] = Lf(f, s, o);
    let R = l.pxRound, I = (ae) => R(m(ae, h, E, x)), z = (ae) => R(b(ae, p, D, C)), K, W, $;
    h.ori == 0 ? (K = If, $ = qo, W = $1) : (K = Nf, $ = Go, W = j1);
    const ee = h.dir * (h.ori == 0 ? 1 : -1);
    let le = I(a[ee == 1 ? s : o]), re = le, U = [], Z = [];
    for (let ae = ee == 1 ? s : o; ae >= s && ae <= o; ae += ee) if (f[ae] != null) {
      let Ee = a[ae], Me = I(Ee);
      U.push(re = Me), Z.push(z(f[ae]));
    }
    const J = { stroke: n(U, Z, K, $, W, R), fill: null, clip: null, band: null, gaps: null, flags: Io }, se = J.stroke;
    let [ie, Se] = Pp(i, r);
    if (l.fill != null || ie != 0) {
      let ae = J.fill = new Path2D(se), te = l.fillTo(i, r, l.min, l.max, ie), Ee = z(te);
      $(ae, re, Ee), $(ae, le, Ee);
    }
    if (!l.spanGaps) {
      let ae = [];
      ae.push(...Ip(a, f, s, o, ee, I, t)), J.gaps = ae = l.gaps(i, r, s, o, ae), J.clip = Pf(ae, h.ori, x, C, E, D);
    }
    return Se != 0 && (J.band = Se == 2 ? [Sr(i, r, s, o, se, -1), Sr(i, r, s, o, se, 1)] : Sr(i, r, s, o, se, Se)), J;
  });
}
function sR(n) {
  return rR(oR, n);
}
function oR(n, e, t, i, r, s) {
  const o = n.length;
  if (o < 2) return null;
  const l = new Path2D();
  if (t(l, n[0], e[0]), o == 2) i(l, n[1], e[1]);
  else {
    let a = Array(o), f = Array(o - 1), h = Array(o - 1), p = Array(o - 1);
    for (let m = 0; m < o - 1; m++) h[m] = e[m + 1] - e[m], p[m] = n[m + 1] - n[m], f[m] = h[m] / p[m];
    a[0] = f[0];
    for (let m = 1; m < o - 1; m++) f[m] === 0 || f[m - 1] === 0 || f[m - 1] > 0 != f[m] > 0 ? a[m] = 0 : (a[m] = 3 * (p[m - 1] + p[m]) / ((2 * p[m] + p[m - 1]) / f[m - 1] + (p[m] + 2 * p[m - 1]) / f[m]), isFinite(a[m]) || (a[m] = 0));
    a[o - 1] = f[o - 2];
    for (let m = 0; m < o - 1; m++) r(l, n[m] + p[m] / 3, e[m] + a[m] * p[m] / 3, n[m + 1] - p[m] / 3, e[m + 1] - a[m + 1] * p[m] / 3, n[m + 1], e[m + 1]);
  }
  return l;
}
const hd = /* @__PURE__ */ new Set();
function I0() {
  for (let n of hd) n.syncRect(true);
}
Uo && (Is(W2, Co, I0), Is(V2, Co, I0, true), Is(sf, Co, () => {
  mn.pxRatio = Je;
}));
const lR = G1(), aR = U1();
function N0(n, e, t, i) {
  return (i ? [n[0], n[1]].concat(n.slice(2)) : [n[0]].concat(n.slice(1))).map((s, o) => ud(s, o, e, t));
}
function cR(n, e) {
  return n.map((t, i) => i == 0 ? {} : zt({}, e, t));
}
function ud(n, e, t, i) {
  return zt({}, e == 0 ? t : i, n);
}
function Y1(n, e, t) {
  return e == null ? Bo : [e, t];
}
const fR = Y1;
function hR(n, e, t) {
  return e == null ? Bo : of(e, t, Ep, true);
}
function J1(n, e, t, i) {
  return e == null ? Bo : Df(e, t, n.scales[i].log, false);
}
const uR = J1;
function Q1(n, e, t, i) {
  return e == null ? Bo : Tp(e, t, n.scales[i].log, false);
}
const dR = Q1;
function pR(n, e, t, i, r) {
  let s = Rn(g0(n), g0(e)), o = e - n, l = Oi(r / i * o, t);
  do {
    let a = t[l], f = i * a / o;
    if (f >= r && s + (a < 5 ? os.get(a) : 0) <= 17) return [a, f];
  } while (++l < t.length);
  return [0, 0];
}
function F0(n) {
  let e, t;
  return n = n.replace(/(\d+)px/, (i, r) => (e = jt((t = +r) * Je)) + "px"), [n, e, t];
}
function gR(n) {
  n.show && [n.font, n.labelFont].forEach((e) => {
    let t = ut(e[2] * Je, 1);
    e[0] = e[0].replace(/[0-9.]+px/, t + "px"), e[1] = t;
  });
}
function mn(n, e, t) {
  const i = { mode: qe(n.mode, 1) }, r = i.mode;
  function s(w, k, T, O) {
    let B = k.valToPct(w);
    return O + T * (k.dir == -1 ? 1 - B : B);
  }
  function o(w, k, T, O) {
    let B = k.valToPct(w);
    return O + T * (k.dir == -1 ? B : 1 - B);
  }
  function l(w, k, T, O) {
    return k.ori == 0 ? s(w, k, T, O) : o(w, k, T, O);
  }
  i.valToPosH = s, i.valToPosV = o;
  let a = false;
  i.status = 0;
  const f = i.root = fi(k2);
  if (n.id != null && (f.id = n.id), ti(f, n.class), n.title) {
    let w = fi(M2, f);
    w.textContent = n.title;
  }
  const h = Ei("canvas"), p = i.ctx = h.getContext("2d"), m = fi(A2, f);
  Is("click", m, (w) => {
    w.target === x && (rt != Hr || ct != mr) && Ht.click(i, w);
  }, true);
  const b = i.under = fi(T2, m);
  m.appendChild(h);
  const x = i.over = fi(E2, m);
  n = Po(n);
  const C = +qe(n.pxAlign, 1), E = B0(C);
  (n.plugins || []).forEach((w) => {
    w.opts && (n = w.opts(i, n) || n);
  });
  const D = n.ms || 1e-3, R = i.series = r == 1 ? N0(n.series || [], T0, D0, false) : cR(n.series || [null], L0), I = i.axes = N0(n.axes || [], A0, O0, true), z = i.scales = {}, K = i.bands = n.bands || [];
  K.forEach((w) => {
    w.fill = We(w.fill || null), w.dir = qe(w.dir, -1);
  });
  const W = r == 2 ? R[1].facets[0].scale : R[0].scale, $ = { axes: jf, series: Yn }, ee = (n.drawOrder || ["axes", "series"]).map((w) => $[w]);
  function le(w) {
    const k = w.distr == 3 ? (T) => kr(T > 0 ? T : w.clamp(i, T, w.min, w.max, w.key)) : w.distr == 4 ? (T) => Nh(T, w.asinh) : w.distr == 100 ? (T) => w.fwd(T) : (T) => T;
    return (T) => {
      let O = k(T), { _min: B, _max: V } = w, G = V - B;
      return (O - B) / G;
    };
  }
  function re(w) {
    let k = z[w];
    if (k == null) {
      let T = (n.scales || $l)[w] || $l;
      if (T.from != null) {
        re(T.from);
        let O = zt({}, z[T.from], T, { key: w });
        O.valToPct = le(O), z[w] = O;
      } else {
        k = z[w] = zt({}, w == W ? H1 : QD, T), k.key = w;
        let O = k.time, B = k.range, V = Kr(B);
        if ((w != W || r == 2 && !O) && (V && (B[0] == null || B[1] == null) && (B = { min: B[0] == null ? u0 : { mode: 1, hard: B[0], soft: B[0] }, max: B[1] == null ? u0 : { mode: 1, hard: B[1], soft: B[1] } }, V = false), !V && Bf(B))) {
          let G = B;
          B = (Q, ne, de) => ne == null ? Bo : of(ne, de, G);
        }
        k.range = We(B || (O ? fR : w == W ? k.distr == 3 ? uR : k.distr == 4 ? dR : Y1 : k.distr == 3 ? J1 : k.distr == 4 ? Q1 : hR)), k.auto = We(V ? false : k.auto), k.clamp = We(k.clamp || JD), k._min = k._max = null, k.valToPct = le(k);
      }
    }
  }
  re("x"), re("y"), r == 1 && R.forEach((w) => {
    re(w.scale);
  }), I.forEach((w) => {
    re(w.scale);
  });
  for (let w in n.scales) re(w);
  const U = z[W], Z = U.distr;
  let J, se;
  U.ori == 0 ? (ti(f, S2), J = s, se = o) : (ti(f, C2), J = o, se = s);
  const ie = {};
  for (let w in z) {
    let k = z[w];
    (k.min != null || k.max != null) && (ie[w] = { min: k.min, max: k.max }, k.min = k.max = null);
  }
  const Se = n.tzDate || ((w) => new Date(jt(w / D))), ae = n.fmtDate || Lp, te = D == 1 ? SD(Se) : AD(Se), Ee = S0(Se, k0(D == 1 ? kD : MD, ae)), Me = M0(Se, C0(ED, ae)), Le = [], ye = i.legend = zt({}, LD, n.legend), fe = i.cursor = zt({}, ND, { drag: { y: r == 2 } }, n.cursor), $e = ye.show, De = fe.show, Ge = ye.markers;
  ye.idxs = Le, Ge.width = We(Ge.width), Ge.dash = We(Ge.dash), Ge.stroke = We(Ge.stroke), Ge.fill = We(Ge.fill);
  let Ne, bn, wn, Xe = [], hn = [], oi, xn = false, ki = {};
  if (ye.live) {
    const w = R[1] ? R[1].values : null;
    xn = w != null, oi = xn ? w(i, 1, 0) : { _: 0 };
    for (let k in oi) ki[k] = Mp;
  }
  if ($e) if (Ne = Ei("table", B2, f), wn = Ei("tbody", null, Ne), ye.mount(i, Ne), xn) {
    bn = Ei("thead", null, Ne, wn);
    let w = Ei("tr", null, bn);
    Ei("th", null, w);
    for (var mt in oi) Ei("th", Zm, w).textContent = mt;
  } else ti(Ne, I2), ye.live && ti(Ne, P2);
  const Lr = { show: true }, un = { show: false };
  function Ys(w, k) {
    if (k == 0 && (xn || !ye.live || r == 2)) return Bo;
    let T = [], O = Ei("tr", N2, wn, wn.childNodes[k]);
    ti(O, w.class), w.show || ti(O, Cs);
    let B = Ei("th", null, O);
    if (Ge.show) {
      let Q = fi(F2, B);
      if (k > 0) {
        let ne = Ge.width(i, k);
        ne && (Q.style.border = ne + "px " + Ge.dash(i, k) + " " + Ge.stroke(i, k)), Q.style.background = Ge.fill(i, k);
      }
    }
    let V = fi(Zm, B);
    w.label instanceof HTMLElement ? V.appendChild(w.label) : V.textContent = w.label, k > 0 && (Ge.show || (V.style.color = w.width > 0 ? Ge.stroke(i, k) : Ge.fill(i, k)), Jt("click", B, (Q) => {
      if (fe._lock) return;
      dr(Q);
      let ne = R.indexOf(w);
      if ((Q.ctrlKey || Q.metaKey) != ye.isolate) {
        let de = R.some((ge, me) => me > 0 && me != ne && ge.show);
        R.forEach((ge, me) => {
          me > 0 && y(me, de ? me == ne ? Lr : un : Lr, true, Vt.setSeries);
        });
      } else y(ne, { show: !w.show }, true, Vt.setSeries);
    }, false), Un && Jt(i0, B, (Q) => {
      fe._lock || (dr(Q), y(R.indexOf(w), H, true, Vt.setSeries));
    }, false));
    for (var G in oi) {
      let Q = Ei("td", H2, O);
      Q.textContent = "--", T.push(Q);
    }
    return [O, T];
  }
  const hr = /* @__PURE__ */ new Map();
  function Jt(w, k, T, O = true) {
    const B = hr.get(k) || {}, V = fe.bind[w](i, k, T, O);
    V && (Is(w, k, B[w] = V), hr.set(k, B));
  }
  function In(w, k, T) {
    const O = hr.get(k) || {};
    for (let B in O) (w == null || B == w) && (od(B, k, O[B]), delete O[B]);
    w == null && hr.delete(k);
  }
  let Pt = 0, ur = 0, Re = 0, ue = 0, nt = 0, dt = 0, Dr = nt, St = dt, kn = Re, it = ue, Sn = 0, Nn = 0, dn = 0, Fn = 0;
  i.bbox = {};
  let Ze = false, nn = false, tt = false, Ct = false, jn = false, Cn = false;
  function It(w, k, T) {
    (T || w != i.width || k != i.height) && Js(w, k), $i(false), tt = true, nn = true, _t();
  }
  function Js(w, k) {
    i.width = Pt = Re = w, i.height = ur = ue = k, nt = dt = 0, ba(), Vf();
    let T = i.bbox;
    Sn = T.left = ws(nt * Je, 0.5), Nn = T.top = ws(dt * Je, 0.5), dn = T.width = ws(Re * Je, 0.5), Fn = T.height = ws(ue * Je, 0.5);
  }
  const Hf = 3;
  function Wf() {
    let w = false, k = 0;
    for (; !w; ) {
      k++;
      let T = $f(k), O = Ir(k);
      w = k == Hf || T && O, w || (Js(i.width, i.height), nn = true);
    }
  }
  function ya({ width: w, height: k }) {
    It(w, k);
  }
  i.setSize = ya;
  function ba() {
    let w = false, k = false, T = false, O = false;
    I.forEach((B, V) => {
      if (B.show && B._show) {
        let { side: G, _size: Q } = B, ne = G % 2, de = B.label != null ? B.labelSize : 0, ge = Q + de;
        ge > 0 && (ne ? (Re -= ge, G == 3 ? (nt += ge, O = true) : T = true) : (ue -= ge, G == 0 ? (dt += ge, w = true) : k = true));
      }
    }), Vi[0] = w, Vi[1] = T, Vi[2] = k, Vi[3] = O, Re -= zi[1] + zi[3], nt += zi[3], ue -= zi[2] + zi[0], dt += zi[0];
  }
  function Vf() {
    let w = nt + Re, k = dt + ue, T = nt, O = dt;
    function B(V, G) {
      switch (V) {
        case 1:
          return w += G, w - G;
        case 2:
          return k += G, k - G;
        case 3:
          return T -= G, T + G;
        case 0:
          return O -= G, O + G;
      }
    }
    I.forEach((V, G) => {
      if (V.show && V._show) {
        let Q = V.side;
        V._pos = B(Q, V._size), V.label != null && (V._lpos = B(Q, V.labelSize));
      }
    });
  }
  if (fe.dataIdx == null) {
    let w = fe.hover, k = w.skip = new Set(w.skip ?? []);
    k.add(void 0);
    let T = w.prox = We(w.prox), O = w.bias ?? (w.bias = 0);
    fe.dataIdx = (B, V, G, Q) => {
      if (V == 0) return G;
      let ne = G, de = T(B, V, G, Q) ?? ht, ge = de >= 0 && de < ht, me = U.ori == 0 ? Re : ue, _e = fe.left, Ye = e[0], Ue = e[V];
      if (k.has(Ue[G])) {
        ne = null;
        let Fe = null, Ae = null, xe;
        if (O == 0 || O == -1) for (xe = G; Fe == null && xe-- > 0; ) k.has(Ue[xe]) || (Fe = xe);
        if (O == 0 || O == 1) for (xe = G; Ae == null && xe++ < Ue.length; ) k.has(Ue[xe]) || (Ae = xe);
        if (Fe != null || Ae != null) if (ge) {
          let yt = Fe == null ? -1 / 0 : J(Ye[Fe], U, me, 0), At = Ae == null ? 1 / 0 : J(Ye[Ae], U, me, 0), Xt = _e - yt, ot = At - _e;
          Xt <= ot ? Xt <= de && (ne = Fe) : ot <= de && (ne = Ae);
        } else ne = Ae == null ? Fe : Fe == null ? Ae : G - Fe <= Ae - G ? Fe : Ae;
      } else ge && Ut(_e - J(Ye[G], U, me, 0)) > de && (ne = null);
      return ne;
    };
  }
  const dr = (w) => {
    fe.event = w;
  };
  fe.idxs = Le, fe._lock = false;
  let $t = fe.points;
  $t.show = We($t.show), $t.size = We($t.size), $t.stroke = We($t.stroke), $t.width = We($t.width), $t.fill = We($t.fill);
  const li = i.focus = zt({}, n.focus || { alpha: 0.3 }, fe.focus), Un = li.prox >= 0, Wi = Un && $t.one;
  let Hn = [], rn = [], Rr = [];
  function wa(w, k) {
    let T = $t.show(i, k);
    if (T instanceof HTMLElement) return ti(T, R2), ti(T, w.class), Qi(T, -10, -10, Re, ue), x.insertBefore(T, Hn[k]), T;
  }
  function qn(w, k) {
    if (r == 1 || k > 0) {
      let T = r == 1 && z[w.scale].time, O = w.value;
      w.value = T ? y0(O) ? M0(Se, C0(O, ae)) : O || Me : O || qD, w.label = w.label || (T ? HD : FD);
    }
    if (Wi || k > 0) {
      w.width = w.width == null ? 1 : w.width, w.paths = w.paths || lR || Q2, w.fillTo = We(w.fillTo || XD), w.pxAlign = +qe(w.pxAlign, C), w.pxRound = B0(w.pxAlign), w.stroke = We(w.stroke || null), w.fill = We(w.fill || null), w._stroke = w._fill = w._paths = w._focus = null;
      let T = GD(Rn(1, w.width), 1), O = w.points = zt({}, { size: T, width: Rn(1, T * 0.2), stroke: w.stroke, space: T * 2, paths: aR, _stroke: null, _fill: null }, w.points);
      O.show = We(O.show), O.filter = We(O.filter), O.fill = We(O.fill), O.stroke = We(O.stroke), O.paths = We(O.paths), O.pxAlign = w.pxAlign;
    }
    if ($e) {
      let T = Ys(w, k);
      Xe.splice(k, 0, T[0]), hn.splice(k, 0, T[1]), ye.values.push(null);
    }
    if (De) {
      Le.splice(k, 0, null);
      let T = null;
      Wi ? k == 0 && (T = wa(w, k)) : k > 0 && (T = wa(w, k)), Hn.splice(k, 0, T), rn.splice(k, 0, 0), Rr.splice(k, 0, 0);
    }
    Qt("addSeries", k);
  }
  function Yo(w, k) {
    k = k ?? R.length, w = r == 1 ? ud(w, k, T0, D0) : ud(w, k, {}, L0), R.splice(k, 0, w), qn(R[k], k);
  }
  i.addSeries = Yo;
  function zf(w) {
    if (R.splice(w, 1), $e) {
      ye.values.splice(w, 1), hn.splice(w, 1);
      let k = Xe.splice(w, 1)[0];
      In(null, k.firstChild), k.remove();
    }
    De && (Le.splice(w, 1), Hn.splice(w, 1)[0].remove(), rn.splice(w, 1), Rr.splice(w, 1)), Qt("delSeries", w);
  }
  i.delSeries = zf;
  const Vi = [false, false, false, false];
  function xa(w, k) {
    if (w._show = w.show, w.show) {
      let T = w.side % 2, O = z[w.scale];
      O == null && (w.scale = T ? R[1].scale : W, O = z[w.scale]);
      let B = O.time;
      w.size = We(w.size), w.space = We(w.space), w.rotate = We(w.rotate), Kr(w.incrs) && w.incrs.forEach((G) => {
        !os.has(G) && os.set(G, w1(G));
      }), w.incrs = We(w.incrs || (O.distr == 2 ? bD : B ? D == 1 ? xD : CD : xs)), w.splits = We(w.splits || (B && O.distr == 1 ? te : O.distr == 3 ? ad : O.distr == 4 ? zD : VD)), w.stroke = We(w.stroke), w.grid.stroke = We(w.grid.stroke), w.ticks.stroke = We(w.ticks.stroke), w.border.stroke = We(w.border.stroke);
      let V = w.values;
      w.values = Kr(V) && !Kr(V[0]) ? We(V) : B ? Kr(V) ? S0(Se, k0(V, ae)) : y0(V) ? TD(Se, V) : V || Ee : V || WD, w.filter = We(w.filter || (O.distr >= 3 && O.log == 10 ? jD : O.distr == 3 && O.log == 2 ? UD : y1)), w.font = F0(w.font), w.labelFont = F0(w.labelFont), w._size = w.size(i, null, k, 0), w._space = w._rotate = w._incrs = w._found = w._splits = w._values = null, w._size > 0 && (Vi[k] = true, w._el = fi(O2, m));
    }
  }
  function as(w, k, T, O) {
    let [B, V, G, Q] = T, ne = k % 2, de = 0;
    return ne == 0 && (Q || V) && (de = k == 0 && !B || k == 2 && !G ? jt(A0.size / 3) : 0), ne == 1 && (B || G) && (de = k == 1 && !V || k == 3 && !Q ? jt(O0.size / 2) : 0), de;
  }
  const Jo = i.padding = (n.padding || [as, as, as, as]).map((w) => We(qe(w, as))), zi = i._padding = Jo.map((w, k) => w(i, k, Vi, 0));
  let Nt, Ft = null, Ot = null;
  const Br = r == 1 ? R[0].idxs : null;
  let Gn = null, Mn = false;
  function ka(w, k) {
    if (e = w ?? [], i.data = i._data = e, r == 2) {
      Nt = 0;
      for (let T = 1; T < R.length; T++) Nt += e[T][0].length;
    } else {
      e.length == 0 && (i.data = i._data = e = [[]]), Gn = e[0], Nt = Gn.length;
      let T = e;
      if (Z == 2) {
        T = e.slice();
        let O = T[0] = Array(Nt);
        for (let B = 0; B < Nt; B++) O[B] = B;
      }
      i._data = e = T;
    }
    if ($i(true), Qt("setData"), Z == 2 && (tt = true), k !== false) {
      let T = U;
      T.auto(i, Mn) ? Qs() : v(W, T.min, T.max), Ct = Ct || fe.left >= 0, Cn = true, _t();
    }
  }
  i.setData = ka;
  function Qs() {
    Mn = true;
    let w, k;
    r == 1 && (Nt > 0 ? (Ft = Br[0] = 0, Ot = Br[1] = Nt - 1, w = e[0][Ft], k = e[0][Ot], Z == 2 ? (w = Ft, k = Ot) : w == k && (Z == 3 ? [w, k] = Df(w, w, U.log, false) : Z == 4 ? [w, k] = Tp(w, w, U.log, false) : U.time ? k = w + jt(86400 / D) : [w, k] = of(w, k, Ep, true))) : (Ft = Br[0] = w = null, Ot = Br[1] = k = null)), v(W, w, k);
  }
  let cs, Pr, Xs, Qo, Xo, An, Zo, el, Zs, sn;
  function Sa(w, k, T, O, B, V) {
    w ?? (w = t0), T ?? (T = _p), O ?? (O = "butt"), B ?? (B = t0), V ?? (V = "round"), w != cs && (p.strokeStyle = cs = w), B != Pr && (p.fillStyle = Pr = B), k != Xs && (p.lineWidth = Xs = k), V != Xo && (p.lineJoin = Xo = V), O != An && (p.lineCap = An = O), T != Qo && p.setLineDash(Qo = T);
  }
  function tl(w, k, T, O) {
    k != Pr && (p.fillStyle = Pr = k), w != Zo && (p.font = Zo = w), T != el && (p.textAlign = el = T), O != Zs && (p.textBaseline = Zs = O);
  }
  function nl(w, k, T, O, B = 0) {
    if (O.length > 0 && w.auto(i, Mn) && (k == null || k.min == null)) {
      let V = qe(Ft, 0), G = qe(Ot, O.length - 1), Q = T.min == null ? j2(O, V, G, B, w.distr == 3) : [T.min, T.max];
      w.min = Li(w.min, T.min = Q[0]), w.max = Rn(w.max, T.max = Q[1]);
    }
  }
  const il = { min: null, max: null };
  function Kf() {
    for (let O in z) {
      let B = z[O];
      ie[O] == null && (B.min == null || ie[W] != null && B.auto(i, Mn)) && (ie[O] = il);
    }
    for (let O in z) {
      let B = z[O];
      ie[O] == null && B.from != null && ie[B.from] != null && (ie[O] = il);
    }
    ie[W] != null && $i(true);
    let w = {};
    for (let O in ie) {
      let B = ie[O];
      if (B != null) {
        let V = w[O] = Po(z[O], eD);
        if (B.min != null) zt(V, B);
        else if (O != W || r == 2) if (Nt == 0 && V.from == null) {
          let G = V.range(i, null, null, O);
          V.min = G[0], V.max = G[1];
        } else V.min = ht, V.max = -ht;
      }
    }
    if (Nt > 0) {
      R.forEach((O, B) => {
        if (r == 1) {
          let V = O.scale, G = ie[V];
          if (G == null) return;
          let Q = w[V];
          if (B == 0) {
            let ne = Q.range(i, Q.min, Q.max, V);
            Q.min = ne[0], Q.max = ne[1], Ft = Oi(Q.min, e[0]), Ot = Oi(Q.max, e[0]), Ot - Ft > 1 && (e[0][Ft] < Q.min && Ft++, e[0][Ot] > Q.max && Ot--), O.min = Gn[Ft], O.max = Gn[Ot];
          } else O.show && O.auto && nl(Q, G, O, e[B], O.sorted);
          O.idxs[0] = Ft, O.idxs[1] = Ot;
        } else if (B > 0 && O.show && O.auto) {
          let [V, G] = O.facets, Q = V.scale, ne = G.scale, [de, ge] = e[B], me = w[Q], _e = w[ne];
          me != null && nl(me, ie[Q], V, de, V.sorted), _e != null && nl(_e, ie[ne], G, ge, G.sorted), O.min = G.min, O.max = G.max;
        }
      });
      for (let O in w) {
        let B = w[O], V = ie[O];
        if (B.from == null && (V == null || V.min == null)) {
          let G = B.range(i, B.min == ht ? null : B.min, B.max == -ht ? null : B.max, O);
          B.min = G[0], B.max = G[1];
        }
      }
    }
    for (let O in w) {
      let B = w[O];
      if (B.from != null) {
        let V = w[B.from];
        if (V.min == null) B.min = B.max = null;
        else {
          let G = B.range(i, V.min, V.max, O);
          B.min = G[0], B.max = G[1];
        }
      }
    }
    let k = {}, T = false;
    for (let O in w) {
      let B = w[O], V = z[O];
      if (V.min != B.min || V.max != B.max) {
        V.min = B.min, V.max = B.max;
        let G = V.distr;
        V._min = G == 3 ? kr(V.min) : G == 4 ? Nh(V.min, V.asinh) : G == 100 ? V.fwd(V.min) : V.min, V._max = G == 3 ? kr(V.max) : G == 4 ? Nh(V.max, V.asinh) : G == 100 ? V.fwd(V.max) : V.max, k[O] = T = true;
      }
    }
    if (T) {
      R.forEach((O, B) => {
        r == 2 ? B > 0 && k.y && (O._paths = null) : k[O.scale] && (O._paths = null);
      });
      for (let O in k) tt = true, Qt("setScale", O);
      De && fe.left >= 0 && (Ct = Cn = true);
    }
    for (let O in ie) ie[O] = null;
  }
  function Ca(w) {
    let k = ld(Ft - 1, 0, Nt - 1), T = ld(Ot + 1, 0, Nt - 1);
    for (; w[k] == null && k > 0; ) k--;
    for (; w[T] == null && T < Nt - 1; ) T++;
    return [k, T];
  }
  function Yn() {
    if (Nt > 0) {
      let w = R.some((k) => k._focus) && sn != li.alpha;
      w && (p.globalAlpha = sn = li.alpha), R.forEach((k, T) => {
        if (T > 0 && k.show && (Ve(T, false), Ve(T, true), k._paths == null)) {
          let O = sn;
          sn != k.alpha && (p.globalAlpha = sn = k.alpha);
          let B = r == 2 ? [0, e[T][0].length - 1] : Ca(e[T]);
          k._paths = k.paths(i, T, B[0], B[1]), sn != O && (p.globalAlpha = sn = O);
        }
      }), R.forEach((k, T) => {
        if (T > 0 && k.show) {
          let O = sn;
          sn != k.alpha && (p.globalAlpha = sn = k.alpha), k._paths != null && Ma(T, false);
          {
            let B = k._paths != null ? k._paths.gaps : null, V = k.points.show(i, T, Ft, Ot, B), G = k.points.filter(i, T, V, B);
            (V || G) && (k.points._paths = k.points.paths(i, T, Ft, Ot, G), Ma(T, true));
          }
          sn != O && (p.globalAlpha = sn = O), Qt("drawSeries", T);
        }
      }), w && (p.globalAlpha = sn = 1);
    }
  }
  function Ve(w, k) {
    let T = k ? R[w].points : R[w];
    T._stroke = T.stroke(i, w), T._fill = T.fill(i, w);
  }
  function Ma(w, k) {
    let T = k ? R[w].points : R[w], { stroke: O, fill: B, clip: V, flags: G, _stroke: Q = T._stroke, _fill: ne = T._fill, _width: de = T.width } = T._paths;
    de = ut(de * Je, 3);
    let ge = null, me = de % 2 / 2;
    k && ne == null && (ne = de > 0 ? "#fff" : Q);
    let _e = T.pxAlign == 1 && me > 0;
    if (_e && p.translate(me, me), !k) {
      let Ye = Sn - de / 2, Ue = Nn - de / 2, Fe = dn + de, Ae = Fn + de;
      ge = new Path2D(), ge.rect(Ye, Ue, Fe, Ae);
    }
    k ? pr(Q, de, T.dash, T.cap, ne, O, B, G, V) : eo(w, Q, de, T.dash, T.cap, ne, O, B, G, ge, V), _e && p.translate(-me, -me);
  }
  function eo(w, k, T, O, B, V, G, Q, ne, de, ge) {
    let me = false;
    ne != 0 && K.forEach((_e, Ye) => {
      if (_e.series[0] == w) {
        let Ue = R[_e.series[1]], Fe = e[_e.series[1]], Ae = (Ue._paths || $l).band;
        Kr(Ae) && (Ae = _e.dir == 1 ? Ae[0] : Ae[1]);
        let xe, yt = null;
        Ue.show && Ae && q2(Fe, Ft, Ot) ? (yt = _e.fill(i, Ye) || V, xe = Ue._paths.clip) : Ae = null, pr(k, T, O, B, yt, G, Q, ne, de, ge, xe, Ae), me = true;
      }
    }), me || pr(k, T, O, B, V, G, Q, ne, de, ge);
  }
  const Aa = Io | fd;
  function pr(w, k, T, O, B, V, G, Q, ne, de, ge, me) {
    Sa(w, k, T, O, B), (ne || de || me) && (p.save(), ne && p.clip(ne), de && p.clip(de)), me ? (Q & Aa) == Aa ? (p.clip(me), ge && p.clip(ge), Ki(B, G), to(w, V, k)) : Q & fd ? (Ki(B, G), p.clip(me), to(w, V, k)) : Q & Io && (p.save(), p.clip(me), ge && p.clip(ge), Ki(B, G), p.restore(), to(w, V, k)) : (Ki(B, G), to(w, V, k)), (ne || de || me) && p.restore();
  }
  function to(w, k, T) {
    T > 0 && (k instanceof Map ? k.forEach((O, B) => {
      p.strokeStyle = cs = B, p.stroke(O);
    }) : k != null && w && p.stroke(k));
  }
  function Ki(w, k) {
    k instanceof Map ? k.forEach((T, O) => {
      p.fillStyle = Pr = O, p.fill(T);
    }) : k != null && w && p.fill(k);
  }
  function rl(w, k, T, O) {
    let B = I[w], V;
    if (O <= 0) V = [0, 0];
    else {
      let G = B._space = B.space(i, w, k, T, O), Q = B._incrs = B.incrs(i, w, k, T, O, G);
      V = pR(k, T, Q, O, G);
    }
    return B._found = V;
  }
  function no(w, k, T, O, B, V, G, Q, ne, de) {
    let ge = G % 2 / 2;
    C == 1 && p.translate(ge, ge), Sa(Q, G, ne, de, Q), p.beginPath();
    let me, _e, Ye, Ue, Fe = B + (O == 0 || O == 3 ? -V : V);
    T == 0 ? (_e = B, Ue = Fe) : (me = B, Ye = Fe);
    for (let Ae = 0; Ae < w.length; Ae++) k[Ae] != null && (T == 0 ? me = Ye = w[Ae] : _e = Ue = w[Ae], p.moveTo(me, _e), p.lineTo(Ye, Ue));
    p.stroke(), C == 1 && p.translate(-ge, -ge);
  }
  function $f(w) {
    let k = true;
    return I.forEach((T, O) => {
      if (!T.show) return;
      let B = z[T.scale];
      if (B.min == null) {
        T._show && (k = false, T._show = false, $i(false));
        return;
      } else T._show || (k = false, T._show = true, $i(false));
      let V = T.side, G = V % 2, { min: Q, max: ne } = B, [de, ge] = rl(O, Q, ne, G == 0 ? Re : ue);
      if (ge == 0) return;
      let me = B.distr == 2, _e = T._splits = T.splits(i, O, Q, ne, de, ge, me), Ye = B.distr == 2 ? _e.map((xe) => Gn[xe]) : _e, Ue = B.distr == 2 ? Gn[_e[1]] - Gn[_e[0]] : de, Fe = T._values = T.values(i, T.filter(i, Ye, O, ge, Ue), O, ge, Ue);
      T._rotate = V == 2 ? T.rotate(i, Fe, O, ge) : 0;
      let Ae = T._size;
      T._size = ui(T.size(i, Fe, O, w)), Ae != null && T._size != Ae && (k = false);
    }), k;
  }
  function Ir(w) {
    let k = true;
    return Jo.forEach((T, O) => {
      let B = T(i, O, Vi, w);
      B != zi[O] && (k = false), zi[O] = B;
    }), k;
  }
  function jf() {
    for (let w = 0; w < I.length; w++) {
      let k = I[w];
      if (!k.show || !k._show) continue;
      let T = k.side, O = T % 2, B, V, G = k.stroke(i, w), Q = T == 0 || T == 3 ? -1 : 1, [ne, de] = k._found;
      if (k.label != null) {
        let On = k.labelGap * Q, Xn = jt((k._lpos + On) * Je);
        tl(k.labelFont[0], G, "center", T == 2 ? yl : e0), p.save(), O == 1 ? (B = V = 0, p.translate(Xn, jt(Nn + Fn / 2)), p.rotate((T == 3 ? -Mc : Mc) / 2)) : (B = jt(Sn + dn / 2), V = Xn);
        let us = m1(k.label) ? k.label(i, w, ne, de) : k.label;
        p.fillText(us, B, V), p.restore();
      }
      if (de == 0) continue;
      let ge = z[k.scale], me = O == 0 ? dn : Fn, _e = O == 0 ? Sn : Nn, Ye = k._splits, Ue = ge.distr == 2 ? Ye.map((On) => Gn[On]) : Ye, Fe = ge.distr == 2 ? Gn[Ye[1]] - Gn[Ye[0]] : ne, Ae = k.ticks, xe = k.border, yt = Ae.show ? Ae.size : 0, At = jt(yt * Je), Xt = jt((k.alignTo == 2 ? k._size - yt - k.gap : k.gap) * Je), ot = k._rotate * -Mc / 180, Tt = E(k._pos * Je), Jn = (At + Xt) * Q, En = Tt + Jn;
      V = O == 0 ? En : 0, B = O == 1 ? En : 0;
      let ai = k.font[0], Ai = k.align == 1 ? oo : k.align == 2 ? Bh : ot > 0 ? oo : ot < 0 ? Bh : O == 0 ? "center" : T == 3 ? Bh : oo, ji = ot || O == 1 ? "middle" : T == 2 ? yl : e0;
      tl(ai, G, Ai, ji);
      let Qn = k.font[1] * k.lineGap, ci = Ye.map((On) => E(l(On, ge, me, _e))), Ti = k._values;
      for (let On = 0; On < Ti.length; On++) {
        let Xn = Ti[On];
        if (Xn != null) {
          O == 0 ? B = ci[On] : V = ci[On], Xn = "" + Xn;
          let us = Xn.indexOf(`
`) == -1 ? [Xn] : Xn.split(/\n/gm);
          for (let _n = 0; _n < us.length; _n++) {
            let Gp = us[_n];
            ot ? (p.save(), p.translate(B, V + _n * Qn), p.rotate(ot), p.fillText(Gp, 0, 0), p.restore()) : p.fillText(Gp, B, V + _n * Qn);
          }
        }
      }
      Ae.show && no(ci, Ae.filter(i, Ue, w, de, Fe), O, T, Tt, At, ut(Ae.width * Je, 3), Ae.stroke(i, w), Ae.dash, Ae.cap);
      let Ui = k.grid;
      Ui.show && no(ci, Ui.filter(i, Ue, w, de, Fe), O, O == 0 ? 2 : 1, O == 0 ? Nn : Sn, O == 0 ? Fn : dn, ut(Ui.width * Je, 3), Ui.stroke(i, w), Ui.dash, Ui.cap), xe.show && no([Tt], [1], O == 0 ? 1 : 0, O == 0 ? 1 : 2, O == 1 ? Nn : Sn, O == 1 ? Fn : dn, ut(xe.width * Je, 3), xe.stroke(i, w), xe.dash, xe.cap);
    }
    Qt("drawAxes");
  }
  function $i(w) {
    R.forEach((k, T) => {
      T > 0 && (k._paths = null, w && (r == 1 ? (k.min = null, k.max = null) : k.facets.forEach((O) => {
        O.min = null, O.max = null;
      })));
    });
  }
  let gr = false, io = false, fs = [];
  function Ta() {
    io = false;
    for (let w = 0; w < fs.length; w++) Qt(...fs[w]);
    fs.length = 0;
  }
  function _t() {
    gr || (lD(Si), gr = true);
  }
  function Uf(w, k = false) {
    gr = true, io = k, w(i), Si(), k && fs.length > 0 && queueMicrotask(Ta);
  }
  i.batch = Uf;
  function Si() {
    if (Ze && (Kf(), Ze = false), tt && (Wf(), tt = false), nn) {
      if (bt(b, oo, nt), bt(b, yl, dt), bt(b, Tl, Re), bt(b, El, ue), bt(x, oo, nt), bt(x, yl, dt), bt(x, Tl, Re), bt(x, El, ue), bt(m, Tl, Pt), bt(m, El, ur), h.width = jt(Pt * Je), h.height = jt(ur * Je), I.forEach(({ _el: w, _show: k, _size: T, _pos: O, side: B }) => {
        if (w != null) if (k) {
          let V = B === 3 || B === 0 ? T : 0, G = B % 2 == 1;
          bt(w, G ? "left" : "top", O - V), bt(w, G ? "width" : "height", T), bt(w, G ? "top" : "left", G ? dt : nt), bt(w, G ? "height" : "width", G ? ue : Re), sd(w, Cs);
        } else ti(w, Cs);
      }), cs = Pr = Xs = Xo = An = Zo = el = Zs = Qo = null, sn = 1, je(true), nt != Dr || dt != St || Re != kn || ue != it) {
        $i(false);
        let w = Re / kn, k = ue / it;
        if (De && !Ct && fe.left >= 0) {
          fe.left *= w, fe.top *= k, Nr && Qi(Nr, jt(fe.left), 0, Re, ue), Fr && Qi(Fr, 0, jt(fe.top), Re, ue);
          for (let T = 0; T < Hn.length; T++) {
            let O = Hn[T];
            O != null && (rn[T] *= w, Rr[T] *= k, Qi(O, ui(rn[T]), ui(Rr[T]), Re, ue));
          }
        }
        if (c.show && !jn && c.left >= 0 && c.width > 0) {
          c.left *= w, c.width *= w, c.top *= k, c.height *= k;
          for (let T in pn) bt(u, T, c[T]);
        }
        Dr = nt, St = dt, kn = Re, it = ue;
      }
      Qt("setSize"), nn = false;
    }
    Pt > 0 && ur > 0 && (p.clearRect(0, 0, h.width, h.height), Qt("drawClear"), ee.forEach((w) => w()), Qt("draw")), c.show && jn && (d(c), jn = false), De && Ct && (Pe(null, true, false), Ct = false), ye.show && ye.live && Cn && (st(), Cn = false), a || (a = true, i.status = 1, Qt("ready")), Mn = false, gr = false;
  }
  i.redraw = (w, k) => {
    tt = k || false, w !== false ? v(W, U.min, U.max) : _t();
  };
  function hs(w, k) {
    let T = z[w];
    if (T.from == null) {
      if (Nt == 0) {
        let O = T.range(i, k.min, k.max, w);
        k.min = O[0], k.max = O[1];
      }
      if (k.min > k.max) {
        let O = k.min;
        k.min = k.max, k.max = O;
      }
      if (Nt > 1 && k.min != null && k.max != null && k.max - k.min < 1e-16) return;
      w == W && T.distr == 2 && Nt > 0 && (k.min = Oi(k.min, e[0]), k.max = Oi(k.max, e[0]), k.min == k.max && k.max++), ie[w] = k, Ze = true, _t();
    }
  }
  i.setScale = hs;
  let sl, ol, Nr, Fr, Ea, Oa, Hr, mr, ll, al, rt, ct, Ci = false;
  const Ht = fe.drag;
  let Mt = Ht.x, Wt = Ht.y;
  De && (fe.x && (sl = fi(L2, x)), fe.y && (ol = fi(D2, x)), U.ori == 0 ? (Nr = sl, Fr = ol) : (Nr = ol, Fr = sl), rt = fe.left, ct = fe.top);
  const c = i.select = zt({ show: true, over: true, left: 0, width: 0, top: 0, height: 0 }, n.select), u = c.show ? fi(_2, c.over ? x : b) : null;
  function d(w, k) {
    if (c.show) {
      for (let T in w) c[T] = w[T], T in pn && bt(u, T, w[T]);
      k !== false && Qt("setSelect");
    }
  }
  i.setSelect = d;
  function g(w) {
    if (R[w].show) $e && sd(Xe[w], Cs);
    else if ($e && ti(Xe[w], Cs), De) {
      let T = Wi ? Hn[0] : Hn[w];
      T != null && Qi(T, -10, -10, Re, ue);
    }
  }
  function v(w, k, T) {
    hs(w, { min: k, max: T });
  }
  function y(w, k, T, O) {
    k.focus != null && P(w), k.show != null && R.forEach((B, V) => {
      V > 0 && (w == V || w == null) && (B.show = k.show, g(V), r == 2 ? (v(B.facets[0].scale, null, null), v(B.facets[1].scale, null, null)) : v(B.scale, null, null), _t());
    }), T !== false && Qt("setSeries", w, k), O && cl("setSeries", i, w, k);
  }
  i.setSeries = y;
  function S(w, k) {
    zt(K[w], k);
  }
  function M(w, k) {
    w.fill = We(w.fill || null), w.dir = qe(w.dir, -1), k = k ?? K.length, K.splice(k, 0, w);
  }
  function A(w) {
    w == null ? K.length = 0 : K.splice(w, 1);
  }
  i.addBand = M, i.setBand = S, i.delBand = A;
  function L(w, k) {
    R[w].alpha = k, De && Hn[w] != null && (Hn[w].style.opacity = k), $e && Xe[w] && (Xe[w].style.opacity = k);
  }
  let _, N, F;
  const H = { focus: true };
  function P(w) {
    if (w != F) {
      let k = w == null, T = li.alpha != 1;
      R.forEach((O, B) => {
        if (r == 1 || B > 0) {
          let V = k || B == 0 || B == w;
          O._focus = k ? null : V, T && L(B, V ? 1 : li.alpha);
        }
      }), F = w, T && _t();
    }
  }
  $e && Un && Jt(r0, Ne, (w) => {
    fe._lock || (dr(w), F != null && y(null, H, true, Vt.setSeries));
  });
  function Y(w, k, T) {
    let O = z[k];
    T && (w = w / Je - (O.ori == 1 ? dt : nt));
    let B = Re;
    O.ori == 1 && (B = ue, w = B - w), O.dir == -1 && (w = B - w);
    let V = O._min, G = O._max, Q = w / B, ne = V + (G - V) * Q, de = O.distr;
    return de == 3 ? Ro(10, ne) : de == 4 ? Y2(ne, O.asinh) : de == 100 ? O.bwd(ne) : ne;
  }
  function X(w, k) {
    let T = Y(w, W, k);
    return Oi(T, e[0], Ft, Ot);
  }
  i.valToIdx = (w) => Oi(w, e[0]), i.posToIdx = X, i.posToVal = Y, i.valToPos = (w, k, T) => z[k].ori == 0 ? s(w, z[k], T ? dn : Re, T ? Sn : 0) : o(w, z[k], T ? Fn : ue, T ? Nn : 0), i.setCursor = (w, k, T) => {
    rt = w.left, ct = w.top, Pe(null, k, T);
  };
  function we(w, k) {
    bt(u, oo, c.left = w), bt(u, Tl, c.width = k);
  }
  function ce(w, k) {
    bt(u, yl, c.top = w), bt(u, El, c.height = k);
  }
  let Ce = U.ori == 0 ? we : ce, Oe = U.ori == 1 ? we : ce;
  function Be() {
    if ($e && ye.live) for (let w = r == 2 ? 1 : 0; w < R.length; w++) {
      if (w == 0 && xn) continue;
      let k = ye.values[w], T = 0;
      for (let O in k) hn[w][T++].firstChild.nodeValue = k[O];
    }
  }
  function st(w, k) {
    if (w != null && (w.idxs ? w.idxs.forEach((T, O) => {
      Le[O] = T;
    }) : Z2(w.idx) || Le.fill(w.idx), ye.idx = Le[0]), $e && ye.live) {
      for (let T = 0; T < R.length; T++) (T > 0 || r == 1 && !xn) && vt(T, Le[T]);
      Be();
    }
    Cn = false, k !== false && Qt("setLegend");
  }
  i.setLegend = st;
  function vt(w, k) {
    let T = R[w], O = w == 0 && Z == 2 ? Gn : e[w], B;
    xn ? B = T.values(i, w, k) ?? ki : (B = T.value(i, k == null ? null : O[k], w, k), B = B == null ? ki : { _: B }), ye.values[w] = B;
  }
  function Pe(w, k, T) {
    ll = rt, al = ct, [rt, ct] = fe.move(i, rt, ct), fe.left = rt, fe.top = ct, De && (Nr && Qi(Nr, jt(rt), 0, Re, ue), Fr && Qi(Fr, 0, jt(ct), Re, ue));
    let O, B = Ft > Ot;
    _ = ht, N = null;
    let V = U.ori == 0 ? Re : ue, G = U.ori == 1 ? Re : ue;
    if (rt < 0 || Nt == 0 || B) {
      O = fe.idx = null;
      for (let Q = 0; Q < R.length; Q++) {
        let ne = Hn[Q];
        ne != null && Qi(ne, -10, -10, Re, ue);
      }
      Un && y(null, H, true, w == null && Vt.setSeries), ye.live && (Le.fill(O), Cn = true);
    } else {
      let Q, ne, de;
      r == 1 && (Q = U.ori == 0 ? rt : ct, ne = Y(Q, W), O = fe.idx = Oi(ne, e[0], Ft, Ot), de = J(e[0][O], U, V, 0));
      let ge = -10, me = -10, _e = 0, Ye = 0, Ue = true, Fe = "", Ae = "";
      for (let xe = r == 2 ? 1 : 0; xe < R.length; xe++) {
        let yt = R[xe], At = Le[xe], Xt = At == null ? null : r == 1 ? e[xe][At] : e[xe][1][At], ot = fe.dataIdx(i, xe, O, ne), Tt = ot == null ? null : r == 1 ? e[xe][ot] : e[xe][1][ot];
        if (Cn = Cn || Tt != Xt || ot != At, Le[xe] = ot, xe > 0 && yt.show) {
          let Jn = ot == null ? -10 : ot == O ? de : J(r == 1 ? e[0][ot] : e[xe][0][ot], U, V, 0), En = Tt == null ? -10 : se(Tt, r == 1 ? z[yt.scale] : z[yt.facets[1].scale], G, 0);
          if (Un && Tt != null) {
            let ai = U.ori == 1 ? rt : ct, Ai = Ut(li.dist(i, xe, ot, En, ai));
            if (Ai < _) {
              let ji = li.bias;
              if (ji != 0) {
                let Qn = Y(ai, yt.scale), ci = Tt >= 0 ? 1 : -1, Ti = Qn >= 0 ? 1 : -1;
                Ti == ci && (Ti == 1 ? ji == 1 ? Tt >= Qn : Tt <= Qn : ji == 1 ? Tt <= Qn : Tt >= Qn) && (_ = Ai, N = xe);
              } else _ = Ai, N = xe;
            }
          }
          if (Cn || Wi) {
            let ai, Ai;
            U.ori == 0 ? (ai = Jn, Ai = En) : (ai = En, Ai = Jn);
            let ji, Qn, ci, Ti, Ui, On, Xn = true, us = $t.bbox;
            if (us != null) {
              Xn = false;
              let _n = us(i, xe);
              ci = _n.left, Ti = _n.top, ji = _n.width, Qn = _n.height;
            } else ci = ai, Ti = Ai, ji = Qn = $t.size(i, xe);
            if (On = $t.fill(i, xe), Ui = $t.stroke(i, xe), Wi) xe == N && _ <= li.prox && (ge = ci, me = Ti, _e = ji, Ye = Qn, Ue = Xn, Fe = On, Ae = Ui);
            else {
              let _n = Hn[xe];
              _n != null && (rn[xe] = ci, Rr[xe] = Ti, h0(_n, ji, Qn, Xn), c0(_n, On, Ui), Qi(_n, ui(ci), ui(Ti), Re, ue));
            }
          }
        }
      }
      if (Wi) {
        let xe = li.prox, yt = F == null ? _ <= xe : _ > xe || N != F;
        if (Cn || yt) {
          let At = Hn[0];
          At != null && (rn[0] = ge, Rr[0] = me, h0(At, _e, Ye, Ue), c0(At, Fe, Ae), Qi(At, ui(ge), ui(me), Re, ue));
        }
      }
    }
    if (c.show && Ci) if (w != null) {
      let [Q, ne] = Vt.scales, [de, ge] = Vt.match, [me, _e] = w.cursor.sync.scales, Ye = w.cursor.drag;
      if (Mt = Ye._x, Wt = Ye._y, Mt || Wt) {
        let { left: Ue, top: Fe, width: Ae, height: xe } = w.select, yt = w.scales[me].ori, At = w.posToVal, Xt, ot, Tt, Jn, En, ai = Q != null && de(Q, me), Ai = ne != null && ge(ne, _e);
        ai && Mt ? (yt == 0 ? (Xt = Ue, ot = Ae) : (Xt = Fe, ot = xe), Tt = z[Q], Jn = J(At(Xt, me), Tt, V, 0), En = J(At(Xt + ot, me), Tt, V, 0), Ce(Li(Jn, En), Ut(En - Jn))) : Ce(0, V), Ai && Wt ? (yt == 1 ? (Xt = Ue, ot = Ae) : (Xt = Fe, ot = xe), Tt = z[ne], Jn = se(At(Xt, _e), Tt, G, 0), En = se(At(Xt + ot, _e), Tt, G, 0), Oe(Li(Jn, En), Ut(En - Jn))) : Oe(0, G);
      } else Mi();
    } else {
      let Q = Ut(ll - Ea), ne = Ut(al - Oa);
      if (U.ori == 1) {
        let _e = Q;
        Q = ne, ne = _e;
      }
      Mt = Ht.x && Q >= Ht.dist, Wt = Ht.y && ne >= Ht.dist;
      let de = Ht.uni;
      de != null ? Mt && Wt && (Mt = Q >= de, Wt = ne >= de, !Mt && !Wt && (ne > Q ? Wt = true : Mt = true)) : Ht.x && Ht.y && (Mt || Wt) && (Mt = Wt = true);
      let ge, me;
      Mt && (U.ori == 0 ? (ge = Hr, me = rt) : (ge = mr, me = ct), Ce(Li(ge, me), Ut(me - ge)), Wt || Oe(0, G)), Wt && (U.ori == 1 ? (ge = Hr, me = rt) : (ge = mr, me = ct), Oe(Li(ge, me), Ut(me - ge)), Mt || Ce(0, V)), !Mt && !Wt && (Ce(0, 0), Oe(0, 0));
    }
    if (Ht._x = Mt, Ht._y = Wt, w == null) {
      if (T) {
        if (qp != null) {
          let [Q, ne] = Vt.scales;
          Vt.values[0] = Q != null ? Y(U.ori == 0 ? rt : ct, Q) : null, Vt.values[1] = ne != null ? Y(U.ori == 1 ? rt : ct, ne) : null;
        }
        cl(Ph, i, rt, ct, Re, ue, O);
      }
      if (Un) {
        let Q = T && Vt.setSeries, ne = li.prox;
        F == null ? _ <= ne && y(N, H, true, Q) : _ > ne ? y(null, H, true, Q) : N != F && y(N, H, true, Q);
      }
    }
    Cn && (ye.idx = O, st()), k !== false && Qt("setCursor");
  }
  let ke = null;
  Object.defineProperty(i, "rect", { get() {
    return ke == null && je(false), ke;
  } });
  function je(w = false) {
    w ? ke = null : (ke = x.getBoundingClientRect(), Qt("syncRect", ke));
  }
  function Tn(w, k, T, O, B, V, G) {
    fe._lock || Ci && w != null && w.movementX == 0 && w.movementY == 0 || (Lt(w, k, T, O, B, V, G, false, w != null), w != null ? Pe(null, true, true) : Pe(k, true, false));
  }
  function Lt(w, k, T, O, B, V, G, Q, ne) {
    if (ke == null && je(false), dr(w), w != null) T = w.clientX - ke.left, O = w.clientY - ke.top;
    else {
      if (T < 0 || O < 0) {
        rt = -10, ct = -10;
        return;
      }
      let [de, ge] = Vt.scales, me = k.cursor.sync, [_e, Ye] = me.values, [Ue, Fe] = me.scales, [Ae, xe] = Vt.match, yt = k.axes[0].side % 2 == 1, At = U.ori == 0 ? Re : ue, Xt = U.ori == 1 ? Re : ue, ot = yt ? V : B, Tt = yt ? B : V, Jn = yt ? O : T, En = yt ? T : O;
      if (Ue != null ? T = Ae(de, Ue) ? l(_e, z[de], At, 0) : -10 : T = At * (Jn / ot), Fe != null ? O = xe(ge, Fe) ? l(Ye, z[ge], Xt, 0) : -10 : O = Xt * (En / Tt), U.ori == 1) {
        let ai = T;
        T = O, O = ai;
      }
    }
    ne && (k == null || k.cursor.event.type == Ph) && ((T <= 1 || T >= Re - 1) && (T = ws(T, Re)), (O <= 1 || O >= ue - 1) && (O = ws(O, ue))), Q ? (Ea = T, Oa = O, [Hr, mr] = fe.move(i, T, O)) : (rt = T, ct = O);
  }
  const pn = { width: 0, height: 0, left: 0, top: 0 };
  function Mi() {
    d(pn, false);
  }
  let _a, ro, Wp, Vp;
  function zp(w, k, T, O, B, V, G) {
    Ci = true, Mt = Wt = Ht._x = Ht._y = false, Lt(w, k, T, O, B, V, G, true, false), w != null && (Jt(Ih, id, Kp, false), cl(n0, i, Hr, mr, Re, ue, null));
    let { left: Q, top: ne, width: de, height: ge } = c;
    _a = Q, ro = ne, Wp = de, Vp = ge;
  }
  function Kp(w, k, T, O, B, V, G) {
    Ci = Ht._x = Ht._y = false, Lt(w, k, T, O, B, V, G, false, true);
    let { left: Q, top: ne, width: de, height: ge } = c, me = de > 0 || ge > 0, _e = _a != Q || ro != ne || Wp != de || Vp != ge;
    if (me && _e && d(c), Ht.setScale && me && _e) {
      let Ye = Q, Ue = de, Fe = ne, Ae = ge;
      if (U.ori == 1 && (Ye = ne, Ue = ge, Fe = Q, Ae = de), Mt && v(W, Y(Ye, W), Y(Ye + Ue, W)), Wt) for (let xe in z) {
        let yt = z[xe];
        xe != W && yt.from == null && yt.min != ht && v(xe, Y(Fe + Ae, xe), Y(Fe, xe));
      }
      Mi();
    } else fe.lock && (fe._lock = !fe._lock, Pe(k, true, w != null));
    w != null && (In(Ih, id), cl(Ih, i, rt, ct, Re, ue, null));
  }
  function rx(w, k, T, O, B, V, G) {
    if (fe._lock) return;
    dr(w);
    let Q = Ci;
    if (Ci) {
      let ne = true, de = true, ge = 10, me, _e;
      U.ori == 0 ? (me = Mt, _e = Wt) : (me = Wt, _e = Mt), me && _e && (ne = rt <= ge || rt >= Re - ge, de = ct <= ge || ct >= ue - ge), me && ne && (rt = rt < Hr ? 0 : Re), _e && de && (ct = ct < mr ? 0 : ue), Pe(null, true, true), Ci = false;
    }
    rt = -10, ct = -10, Le.fill(null), Pe(null, true, true), Q && (Ci = Q);
  }
  function $p(w, k, T, O, B, V, G) {
    fe._lock || (dr(w), Qs(), Mi(), w != null && cl(s0, i, rt, ct, Re, ue, null));
  }
  function jp() {
    I.forEach(gR), It(i.width, i.height, true);
  }
  Is(sf, Co, jp);
  const so = {};
  so.mousedown = zp, so.mousemove = Tn, so.mouseup = Kp, so.dblclick = $p, so.setSeries = (w, k, T, O) => {
    let B = Vt.match[2];
    T = B(i, k, T), T != -1 && y(T, O, true, false);
  }, De && (Jt(n0, x, zp), Jt(Ph, x, Tn), Jt(i0, x, (w) => {
    dr(w), je(false);
  }), Jt(r0, x, rx), Jt(s0, x, $p), hd.add(i), i.syncRect = je);
  const La = i.hooks = n.hooks || {};
  function Qt(w, k, T) {
    io ? fs.push([w, k, T]) : w in La && La[w].forEach((O) => {
      O.call(null, i, k, T);
    });
  }
  (n.plugins || []).forEach((w) => {
    for (let k in w.hooks) La[k] = (La[k] || []).concat(w.hooks[k]);
  });
  const Up = (w, k, T) => T, Vt = zt({ key: null, setSeries: false, filters: { pub: m0, sub: m0 }, scales: [W, R[1] ? R[1].scale : null], match: [v0, v0, Up], values: [null, null] }, fe.sync);
  Vt.match.length == 2 && Vt.match.push(Up), fe.sync = Vt;
  const qp = Vt.key, qf = W1(qp);
  function cl(w, k, T, O, B, V, G) {
    Vt.filters.pub(w, k, T, O, B, V, G) && qf.pub(w, k, T, O, B, V, G);
  }
  qf.sub(i);
  function sx(w, k, T, O, B, V, G) {
    Vt.filters.sub(w, k, T, O, B, V, G) && so[w](null, k, T, O, B, V, G);
  }
  i.pub = sx;
  function ox() {
    qf.unsub(i), hd.delete(i), hr.clear(), od(sf, Co, jp), f.remove(), Ne == null ? void 0 : Ne.remove(), Qt("destroy");
  }
  i.destroy = ox;
  function Gf() {
    Qt("init", n, e), ka(e || n.data, false), ie[W] ? hs(W, ie[W]) : Qs(), jn = c.show && (c.width > 0 || c.height > 0), Ct = Cn = true, It(n.width, n.height);
  }
  return R.forEach(qn), I.forEach(xa), t ? t instanceof HTMLElement ? (t.appendChild(f), Gf()) : t(i, Gf) : Gf(), i;
}
mn.assign = zt;
mn.fmtNum = Op;
mn.rangeNum = of;
mn.rangeLog = Df;
mn.rangeAsinh = Tp;
mn.orient = Gs;
mn.pxRatio = Je;
mn.join = oD;
mn.fmtDate = Lp, mn.tzDate = vD;
mn.sync = W1;
{
  mn.addGap = ZD, mn.clipGaps = Pf;
  let n = mn.paths = { points: U1 };
  n.linear = G1, n.stepped = nR, n.bars = iR, n.spline = sR;
}
const X1 = ["#2563eb", "#dc2626", "#16a34a", "#d97706", "#9333ea", "#0891b2", "#e11d48", "#65a30d"], Z1 = ["#60a5fa", "#f87171", "#4ade80", "#fbbf24", "#c084fc", "#22d3ee", "#fb7185", "#a3e635"];
function ex() {
  return document.documentElement.classList.contains("dark-theme");
}
function mR(n) {
  return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function vR() {
  let n = null, e = null;
  function t(o) {
    e = o.over, n = document.createElement("div"), n.className = "step-tooltip", n.style.display = "none", document.body.appendChild(n);
  }
  function i(o, l, a) {
    const f = o[l];
    if (f[a] != null) return f[a];
    for (let h = 1; h < 5; h++) {
      if (a - h >= 0 && f[a - h] != null) return f[a - h];
      if (a + h < f.length && f[a + h] != null) return f[a + h];
    }
    return null;
  }
  function r(o) {
    if (!n || !e) return;
    const l = o.cursor.idx;
    if (l == null) {
      n.style.display = "none";
      return;
    }
    const f = ex() ? Z1 : X1, h = [];
    for (let E = 1; E < o.series.length; E++) {
      const D = o.series[E];
      if (!D.show) continue;
      const R = i(o.data, E, l);
      if (R == null) continue;
      const I = f[(E - 1) % f.length], z = Number.isInteger(R) ? R.toString() : R.toFixed(2);
      h.push(`<span style="color:${I}">${mR(String(D.label ?? ""))}</span>: ${z}`);
    }
    if (h.length === 0) {
      n.style.display = "none";
      return;
    }
    n.innerHTML = h.join("<br>"), n.style.display = "block";
    const p = e.getBoundingClientRect(), m = o.cursor.left ?? 0, b = o.cursor.top ?? 0, x = n.offsetWidth, C = p.left + m + x + 16 > window.innerWidth ? p.left + m - x - 8 : p.left + m + 8;
    n.style.left = C + "px", n.style.top = p.top + b - 10 + "px";
  }
  function s() {
    n && (n.remove(), n = null);
  }
  return { hooks: { init: t, setCursor: r, destroy: s } };
}
function yR(n) {
  const e = /* @__PURE__ */ new Set();
  for (const r of n) for (const s of r.timestamps) e.add(s);
  const t = Float64Array.from([...e].sort((r, s) => r - s)), i = [t];
  for (const r of n) {
    const s = /* @__PURE__ */ new Map();
    for (let l = 0; l < r.timestamps.length; l++) s.set(r.timestamps[l], r.values[l]);
    const o = new Array(t.length);
    for (let l = 0; l < t.length; l++) {
      const a = s.get(t[l]);
      o[l] = a != null && !isNaN(a) ? a : null;
    }
    i.push(o);
  }
  return i;
}
function bR(n, e, t) {
  const i = ex(), r = i ? Z1 : X1, s = yR(e), o = [{ label: "Time" }, ...e.map((a, f) => ({ label: a.name, stroke: r[f % r.length], width: 2, spanGaps: true, points: { show: true, size: 6, fill: i ? "#1e1e1e" : "#ffffff" } }))], l = i ? "#2a2a2a" : "#f0f0f0";
  return new mn({ width: t, height: 120, cursor: { show: true, drag: { x: false, y: false }, points: { show: true, size: 8, width: 2, fill: (a, f) => String(a.series[f].stroke ?? ""), stroke: (a, f) => String(a.series[f].stroke ?? "") } }, legend: { show: false }, scales: { x: { time: true } }, axes: [{ show: true, stroke: i ? "#888" : "#999", grid: { stroke: l, width: 1 }, ticks: { stroke: l, width: 1 }, font: "10px system-ui, sans-serif", size: 28 }, { show: false, grid: { stroke: l, width: 1 } }], series: o, plugins: [vR()] }, s, n);
}
function wR(n, e) {
  const t = [], i = n.split(`
`);
  let r = 0, s = 0;
  for (let o = 0; o < i.length && r < e.length; o++) {
    const l = i[o], a = l.trim(), f = s, h = s + l.length;
    if (s = h + 1, !(a.length === 0 || a.startsWith("//") || a === "(" || a === ")" || a.startsWith("set ") || a.startsWith("param "))) {
      if (a.startsWith("|")) {
        r > 0 && (t.push({ stepIndex: r, lineStart: f, lineEnd: h, series: e[r] }), r++);
        continue;
      }
      t.push({ stepIndex: r, lineStart: f, lineEnd: h, series: e[r] }), r++;
    }
  }
  return t;
}
const Fp = Te.define(), Hp = Te.define(), tx = Te.define(), nx = Te.define(), ix = Te.define(), af = tn.define({ create() {
  return { mappings: [], collapsed: /* @__PURE__ */ new Set(), version: 0, errorAfterPos: null, errorMessage: "" };
}, update(n, e) {
  var _a, _b2;
  let { mappings: t, collapsed: i, version: r, errorAfterPos: s, errorMessage: o } = n;
  e.docChanged && t.length > 0 && (t = t.map((l) => ({ ...l, lineStart: e.changes.mapPos(l.lineStart, 1), lineEnd: e.changes.mapPos(l.lineEnd, -1) })).filter((l) => l.lineStart <= e.newDoc.length && l.lineEnd <= e.newDoc.length), s != null && (s = e.changes.mapPos(s, 1)));
  for (const l of e.effects) {
    if (l.is(tx) && (s = ((_a = l.value) == null ? void 0 : _a.pos) ?? null, o = ((_b2 = l.value) == null ? void 0 : _b2.message) ?? ""), l.is(Fp)) {
      s = null, o = "";
      const a = /* @__PURE__ */ new Set();
      for (const f of n.mappings) n.collapsed.has(f.stepIndex) || a.add(f.stepIndex);
      t = l.value, i = new Set(t.map((f) => f.stepIndex));
      for (const f of a) i.delete(f);
      r++;
    }
    l.is(Hp) && (i = new Set(i), i.has(l.value) ? i.delete(l.value) : i.add(l.value)), l.is(nx) && (i = new Set(t.map((a) => a.stepIndex))), l.is(ix) && (i = t.every((f) => i.has(f.stepIndex)) ? /* @__PURE__ */ new Set() : new Set(t.map((f) => f.stepIndex)));
  }
  return { mappings: t, collapsed: i, version: r, errorAfterPos: s, errorMessage: o };
} });
class xR extends wi {
  constructor(e, t) {
    super(), this.stepIndex = e, this.isCollapsed = t;
  }
  eq(e) {
    return this.stepIndex === e.stepIndex && this.isCollapsed === e.isCollapsed;
  }
  toDOM(e) {
    const t = document.createElement("span");
    return t.className = "cm-chart-toggle", t.textContent = this.isCollapsed ? "+" : "\u2212", t.addEventListener("mousedown", (i) => {
      i.preventDefault(), e.dispatch({ effects: Hp.of(this.stepIndex) });
    }), t;
  }
  ignoreEvent() {
    return false;
  }
}
class H0 extends wi {
  constructor(e) {
    super(), this.message = e;
  }
  eq(e) {
    return this.message === e.message;
  }
  toDOM() {
    const e = document.createElement("div");
    return e.className = "cm-chart-widget cm-chart-error", e.textContent = this.message, e;
  }
  ignoreEvent() {
    return true;
  }
}
class kR extends wi {
  constructor(e, t, i) {
    super(), this.step = e, this.stepIndex = t, this.version = i;
  }
  eq(e) {
    return this.stepIndex === e.stepIndex && this.version === e.version;
  }
  toDOM(e) {
    const t = document.createElement("div");
    if (t.className = "cm-chart-widget", t.dataset.stepIndex = String(this.stepIndex), this.step.length > 0 && this.step[0].timestamps.length > 0) {
      const i = Math.max(200, e.contentDOM.clientWidth - 40), r = bR(t, this.step, i);
      t.__uplot = r;
    } else t.textContent = "No data", t.classList.add("cm-chart-empty");
    return t;
  }
  destroy(e) {
    const t = e.__uplot;
    t && t.destroy();
  }
  get estimatedHeight() {
    return 152;
  }
  ignoreEvent() {
    return true;
  }
}
const SR = he.decorations.compute([af], (n) => {
  const { mappings: e, collapsed: t, version: i, errorAfterPos: r, errorMessage: s } = n.field(af), o = [];
  let l = false;
  for (const a of e) {
    if (a.lineStart > n.doc.length) continue;
    const f = r != null && a.lineEnd >= r;
    if (o.push(be.widget({ widget: new xR(a.stepIndex, t.has(a.stepIndex)), side: -1 }).range(a.lineStart)), !t.has(a.stepIndex) && a.lineEnd <= n.doc.length) {
      let h;
      f ? l ? h = new H0("skipped due to previous error") : (h = new H0(s), l = true) : h = new kR(a.series, a.stepIndex, i), o.push(be.widget({ widget: h, block: true, side: 1 }).range(a.lineEnd));
    }
  }
  return be.set(o, true);
}), CR = xt.fromClass(class {
  update(n) {
    if (!n.geometryChanged) return;
    const e = Math.max(200, n.view.dom.clientWidth - 80);
    n.view.dom.querySelectorAll(".cm-chart-widget").forEach((t) => {
      const i = t.__uplot;
      i && i.setSize({ width: e, height: 120 });
    });
  }
}), MR = Tr.highest(pf.of([{ key: "Ctrl-e", run(n) {
  const e = n.state.selection.main.head, i = n.state.field(af).mappings.find((r) => {
    const s = n.state.doc.lineAt(e);
    return r.lineStart <= s.from && r.lineEnd >= s.from;
  });
  return i ? (n.dispatch({ effects: Hp.of(i.stepIndex) }), true) : false;
} }, { key: "Ctrl-a", run(n) {
  return n.dispatch({ effects: ix.of() }), true;
} }]));
function AR() {
  return [af, SR, MR, CR];
}
function Vh(n) {
  return n === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : n;
}
async function TR() {
  try {
    const n = await fetch("/examples/index.json");
    return n.ok ? await n.json() : [];
  } catch {
    return [];
  }
}
const ER = { datasets: async () => {
  const n = await Rh();
  return Object.keys(n);
}, metrics: async (n) => {
  const e = await Rh();
  return Object.keys(e[n] ?? {});
}, tags: async (n, e) => {
  var _a;
  return ((_a = (await Rh())[n]) == null ? void 0 : _a[e]) ?? [];
} }, OR = pO(ER);
let W0 = 0, zh = null;
async function _R(n) {
  const e = n.state.doc.toString(), t = ++W0;
  try {
    const i = Kb(e), r = await nd(i);
    if (t !== W0) return;
    const s = wR(e, r);
    n.dispatch({ effects: Fp.of(s) });
  } catch {
  }
}
const LR = { editorMode: localStorage.getItem("mpl-editorMode") || "vim", theme: localStorage.getItem("mpl-theme") || "system", codeEditor: null, codeVimCompartment: new tr(), codeThemeCompartment: new tr(), codeCompletionCompartment: new tr(), codeDiagnosticsCompartment: new tr(), codeSignatureHelpCompartment: new tr(), codeHoverCompartment: new tr(), isInitialized: false, selectedExampleIndex: 0, examples: [], async init() {
  try {
    Vh(this.theme) === "dark" && document.documentElement.classList.add("dark-theme"), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      this.theme === "system" && this.onThemeChange();
    }), this.setupKeyboardShortcuts(), this.examples = await TR(), await tO(), this.isInitialized = true, await this.loadSelectedExample(), this.codeEditor && (this.parseEditorContent(this.codeEditor.state.doc.toString()), this.codeEditor.focus());
  } catch (n) {
    console.error("Failed to initialize:", n);
  }
}, setupKeyboardShortcuts() {
  document.addEventListener("keydown", (n) => {
    n.ctrlKey && n.key === "h" && (n.preventDefault(), this.codeEditor && this.codeEditor.focus());
  });
}, getVimExtension() {
  return this.editorMode === "vim" ? jE() : [];
}, getThemeExtension() {
  return Vh(this.theme) === "dark" ? vE : [];
}, getExtensions() {
  return [hC(), _S(), _M(), nM(), yS(), CS(), Ke.allowMultipleSelections.of(true), KC(), Oy(oM, { fallback: true }), dM(), RT(), Xd(), zS(), jS(), IS(), PA(), pf.of([...NT, ..._A, ...nT, ...HM, ...XC, ...Tb, ...XT]), this.codeVimCompartment.of(this.getVimExtension()), this.codeThemeCompartment.of(this.getThemeExtension()), he.lineWrapping, fO, this.codeCompletionCompartment.of(OR), this.codeDiagnosticsCompartment.of(bO), this.codeSignatureHelpCompartment.of(SO), this.codeHoverCompartment.of(OO), AR(), he.updateListener.of((n) => {
    n.docChanged && this.parseEditorContent(n.state.doc.toString());
  })];
}, initCodeEditor(n) {
  this.codeEditor = new he({ doc: "", extensions: this.getExtensions(), parent: n }), this.isInitialized && this.loadSelectedExample();
}, parseEditorContent(n) {
  var _a;
  if (this.isInitialized) {
    try {
      Kb(n);
    } catch {
      if (this.codeEditor) try {
        const t = (_a = zb(n)) == null ? void 0 : _a.find((i) => i.severity === "error");
        if (t) {
          const i = t.message ?? "parse error";
          this.codeEditor.dispatch({ effects: tx.of({ pos: t.from ?? 0, message: i }) });
        }
      } catch {
      }
      return;
    }
    zh && clearTimeout(zh), zh = setTimeout(() => {
      this.codeEditor && _R(this.codeEditor);
    }, 200);
  }
}, onEditorModeChange() {
  localStorage.setItem("mpl-editorMode", this.editorMode);
  const n = this.getVimExtension();
  this.codeEditor && this.codeEditor.dispatch({ effects: this.codeVimCompartment.reconfigure(n) });
}, cycleTheme() {
  const n = ["light", "system", "dark"], e = n.indexOf(this.theme);
  this.theme = n[(e + 1) % n.length], this.onThemeChange();
}, onThemeChange() {
  localStorage.setItem("mpl-theme", this.theme), Vh(this.theme) === "dark" ? document.documentElement.classList.add("dark-theme") : document.documentElement.classList.remove("dark-theme");
  const n = this.getThemeExtension();
  this.codeEditor && this.codeEditor.dispatch({ effects: this.codeThemeCompartment.reconfigure(n) }), this.codeEditor && this.isInitialized && this.parseEditorContent(this.codeEditor.state.doc.toString());
}, async loadSelectedExample() {
  const n = this.examples[this.selectedExampleIndex];
  if (n) try {
    const e = await fetch(`/examples/${n}`);
    if (!e.ok) throw new Error(`Failed to load example: ${e.statusText}`);
    const t = await e.text();
    this.codeEditor && (this.codeEditor.dispatch({ changes: { from: 0, to: this.codeEditor.state.doc.length, insert: t }, effects: [nx.of(), Fp.of([])] }), this.codeEditor.focus());
  } catch (e) {
    console.error("Error loading example:", e);
  }
}, async onExampleChange() {
  await this.loadSelectedExample();
} };
o1.store("playground", LR);
o1.start();
