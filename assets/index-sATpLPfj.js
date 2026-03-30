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
let Ph = [], F0 = [];
(() => {
  let n = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < n.length; e++) (e % 2 ? F0 : Ph).push(t = t + n[e]);
})();
function cx(n) {
  if (n < 768) return false;
  for (let e = 0, t = Ph.length; ; ) {
    let i = e + t >> 1;
    if (n < Ph[i]) t = i;
    else if (n >= F0[i]) e = i + 1;
    else return true;
    if (e == t) return false;
  }
}
function Fp(n) {
  return n >= 127462 && n <= 127487;
}
const Hp = 8205;
function fx(n, e, t = true, i = true) {
  return (t ? H0 : hx)(n, e, i);
}
function H0(n, e, t) {
  if (e == n.length) return e;
  e && V0(n.charCodeAt(e)) && W0(n.charCodeAt(e - 1)) && e--;
  let i = $f(n, e);
  for (e += Vp(i); e < n.length; ) {
    let r = $f(n, e);
    if (i == Hp || r == Hp || t && cx(r)) e += Vp(r), i = r;
    else if (Fp(r)) {
      let s = 0, o = e - 2;
      for (; o >= 0 && Fp($f(n, o)); ) s++, o -= 2;
      if (s % 2 == 0) break;
      e += 2;
    } else break;
  }
  return e;
}
function hx(n, e, t) {
  for (; e > 0; ) {
    let i = H0(n, e - 2, t);
    if (i < e) return i;
    e--;
  }
  return 0;
}
function $f(n, e) {
  let t = n.charCodeAt(e);
  if (!W0(t) || e + 1 == n.length) return t;
  let i = n.charCodeAt(e + 1);
  return V0(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function V0(n) {
  return n >= 56320 && n < 57344;
}
function W0(n) {
  return n >= 55296 && n < 56320;
}
function Vp(n) {
  return n < 65536 ? 1 : 2;
}
let Qe = class $0 {
  lineAt(e) {
    if (e < 0 || e > this.length) throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, false, 1, 0);
  }
  line(e) {
    if (e < 1 || e > this.lines) throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, true, 1, 0);
  }
  replace(e, t, i) {
    [e, t] = yo(this, e, t);
    let r = [];
    return this.decompose(0, e, r, 2), i.length && i.decompose(0, i.length, r, 3), this.decompose(t, this.length, r, 1), rr.from(r, this.length - (t - e) + i.length);
  }
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  slice(e, t = this.length) {
    [e, t] = yo(this, e, t);
    let i = [];
    return this.decompose(e, t, i, 0), rr.from(i, t - e);
  }
  eq(e) {
    if (e == this) return true;
    if (e.length != this.length || e.lines != this.lines) return false;
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), r = new Al(this), s = new Al(e);
    for (let o = t, l = t; ; ) {
      if (r.next(o), s.next(o), o = 0, r.lineBreak != s.lineBreak || r.done != s.done || r.value != s.value) return false;
      if (l += r.value.length, r.done || l >= i) return true;
    }
  }
  iter(e = 1) {
    return new Al(this, e);
  }
  iterRange(e, t = this.length) {
    return new z0(this, e, t);
  }
  iterLines(e, t) {
    let i;
    if (e == null) i = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let r = this.line(e).from;
      i = this.iterRange(r, Math.max(r, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new K0(i);
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
    return e.length == 1 && !e[0] ? $0.empty : e.length <= 32 ? new Rt(e) : rr.from(Rt.split(e, []));
  }
};
class Rt extends Qe {
  constructor(e, t = ux(e)) {
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
      if ((t ? i : l) >= e) return new dx(r, l, i, o);
      r = l + 1, i++;
    }
  }
  decompose(e, t, i, r) {
    let s = e <= 0 && t >= this.length ? this : new Rt(Wp(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (r & 1) {
      let o = i.pop(), l = lc(s.text, o.text.slice(), 0, s.length);
      if (l.length <= 32) i.push(new Rt(l, o.length + s.length));
      else {
        let a = l.length >> 1;
        i.push(new Rt(l.slice(0, a)), new Rt(l.slice(a)));
      }
    } else i.push(s);
  }
  replace(e, t, i) {
    if (!(i instanceof Rt)) return super.replace(e, t, i);
    [e, t] = yo(this, e, t);
    let r = lc(this.text, lc(i.text, Wp(this.text, 0, e)), t), s = this.length + i.length - (t - e);
    return r.length <= 32 ? new Rt(r, s) : rr.from(Rt.split(r, []), s);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = yo(this, e, t);
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
    for (let s of e) i.push(s), r += s.length + 1, i.length == 32 && (t.push(new Rt(i, r)), i = [], r = -1);
    return r > -1 && t.push(new Rt(i, r)), t;
  }
}
class rr extends Qe {
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
    if ([e, t] = yo(this, e, t), i.lines < this.lines) for (let r = 0, s = 0; r < this.children.length; r++) {
      let o = this.children[r], l = s + o.length;
      if (e >= s && t <= l) {
        let a = o.replace(e - s, t - s, i), f = this.lines - o.lines + a.lines;
        if (a.lines < f >> 4 && a.lines > f >> 6) {
          let h = this.children.slice();
          return h[r] = a, new rr(h, this.length - (t - e) + i.length);
        }
        return super.replace(s, l, a);
      }
      s = l + 1;
    }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = yo(this, e, t);
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
    if (!(e instanceof rr)) return 0;
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
      for (let S of e) S.flatten(b);
      return new Rt(b, t);
    }
    let r = Math.max(32, i >> 5), s = r << 1, o = r >> 1, l = [], a = 0, f = -1, h = [];
    function p(b) {
      let S;
      if (b.lines > s && b instanceof rr) for (let M of b.children) p(M);
      else b.lines > o && (a > o || !a) ? (m(), l.push(b)) : b instanceof Rt && a && (S = h[h.length - 1]) instanceof Rt && b.lines + S.lines <= 32 ? (a += b.lines, f += b.length + 1, h[h.length - 1] = new Rt(S.text.concat(b.text), S.length + 1 + b.length)) : (a + b.lines > r && m(), a += b.lines, f += b.length + 1, h.push(b));
    }
    function m() {
      a != 0 && (l.push(h.length == 1 ? h[0] : rr.from(h, f)), f = -1, a = h.length = 0);
    }
    for (let b of e) p(b);
    return m(), l.length == 1 ? l[0] : new rr(l, t);
  }
}
Qe.empty = new Rt([""], 0);
function ux(n) {
  let e = -1;
  for (let t of n) e += t.length + 1;
  return e;
}
function lc(n, e, t = 0, i = 1e9) {
  for (let r = 0, s = 0, o = true; s < n.length && r <= i; s++) {
    let l = n[s], a = r + l.length;
    a >= t && (a > i && (l = l.slice(0, i - r)), r < t && (l = l.slice(t - r)), o ? (e[e.length - 1] += l, o = false) : e.push(l)), r = a + 1;
  }
  return e;
}
function Wp(n, e, t) {
  return lc(n, [""], e, t);
}
class Al {
  constructor(e, t = 1) {
    this.dir = t, this.done = false, this.lineBreak = false, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof Rt ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = false; ; ) {
      let i = this.nodes.length - 1, r = this.nodes[i], s = this.offsets[i], o = s >> 1, l = r instanceof Rt ? r.text.length : r.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (i == 0) return this.done = true, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((s & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0) return this.lineBreak = true, this.value = `
`, this;
        e--;
      } else if (r instanceof Rt) {
        let a = r.text[o + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, a.length > Math.max(0, e)) return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = r.children[o + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof Rt ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class z0 {
  constructor(e, t, i) {
    this.value = "", this.done = false, this.cursor = new Al(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
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
class K0 {
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
}, Al.prototype[Symbol.iterator] = z0.prototype[Symbol.iterator] = K0.prototype[Symbol.iterator] = function() {
  return this;
});
class dx {
  constructor(e, t, i, r) {
    this.from = e, this.to = t, this.number = i, this.text = r;
  }
  get length() {
    return this.to - this.from;
  }
}
function yo(n, e, t) {
  return e = Math.max(0, Math.min(n.length, e)), [e, Math.max(e, Math.min(n.length, t))];
}
function cn(n, e, t = true, i = true) {
  return fx(n, e, t, i);
}
function px(n) {
  return n >= 56320 && n < 57344;
}
function gx(n) {
  return n >= 55296 && n < 56320;
}
function $n(n, e) {
  let t = n.charCodeAt(e);
  if (!gx(t) || e + 1 == n.length) return t;
  let i = n.charCodeAt(e + 1);
  return px(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function cd(n) {
  return n <= 65535 ? String.fromCharCode(n) : (n -= 65536, String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320));
}
function sr(n) {
  return n < 65536 ? 1 : 2;
}
const Bh = /\r\n?|\n/;
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
    Ih(this, e, t);
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
    return this.empty ? e : e.empty ? this : j0(this, e);
  }
  mapDesc(e, t = false) {
    return e.empty ? this : Nh(this, e, t);
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
class Ut extends fr {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  apply(e) {
    if (this.length != e.length) throw new RangeError("Applying change set to a document with the wrong length");
    return Ih(this, (t, i, r, s, o) => e = e.replace(r, r + (i - t), o), false), e;
  }
  mapDesc(e, t = false) {
    return Nh(this, e, t, true);
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
    return new Ut(t, i);
  }
  compose(e) {
    return this.empty ? e : e.empty ? this : j0(this, e, true);
  }
  map(e, t = false) {
    return e.empty ? this : Nh(this, e, t, true);
  }
  iterChanges(e, t = false) {
    Ih(this, e, t);
  }
  get desc() {
    return fr.create(this.sections);
  }
  filter(e) {
    let t = [], i = [], r = [], s = new Vl(this);
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++];
      for (; l < a || l == a && s.len == 0; ) {
        if (s.done) break e;
        let h = Math.min(s.len, a - l);
        pn(r, h, -1);
        let p = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0;
        pn(t, h, p), p > 0 && Kr(i, t, s.text), s.forward(h), l += h;
      }
      let f = e[o++];
      for (; l < f; ) {
        if (s.done) break e;
        let h = Math.min(s.len, f - l);
        pn(t, h, -1), pn(r, h, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0), s.forward(h), l += h;
      }
    }
    return { changes: new Ut(t, i), filtered: fr.create(r) };
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
      o < t && pn(r, t - o, -1);
      let p = new Ut(r, s);
      l = l ? l.compose(p.map(l)) : p, r = [], s = [], o = 0;
    }
    function f(h) {
      if (Array.isArray(h)) for (let p of h) f(p);
      else if (h instanceof Ut) {
        if (h.length != t) throw new RangeError(`Mismatched change set length (got ${h.length}, expected ${t})`);
        a(), l = l ? l.compose(h.map(l)) : h;
      } else {
        let { from: p, to: m = p, insert: b } = h;
        if (p > m || p < 0 || m > t) throw new RangeError(`Invalid change range ${p} to ${m} (in doc of length ${t})`);
        let S = b ? typeof b == "string" ? Qe.of(b.split(i || Bh)) : b : Qe.empty, M = S.length;
        if (p == m && M == 0) return;
        p < o && a(), p > o && pn(r, p - o, -1), pn(r, m - p, M), Kr(s, r, S), o = m;
      }
    }
    return f(e), a(!l), l;
  }
  static empty(e) {
    return new Ut(e ? [e, -1] : [], []);
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
    return new Ut(t, i);
  }
  static createSet(e, t) {
    return new Ut(e, t);
  }
}
function pn(n, e, t, i = false) {
  if (e == 0 && t <= 0) return;
  let r = n.length - 2;
  r >= 0 && t <= 0 && t == n[r + 1] ? n[r] += e : r >= 0 && e == 0 && n[r] == 0 ? n[r + 1] += t : i ? (n[r] += e, n[r + 1] += t) : n.push(e, t);
}
function Kr(n, e, t) {
  if (t.length == 0) return;
  let i = e.length - 2 >> 1;
  if (i < n.length) n[n.length - 1] = n[n.length - 1].append(t);
  else {
    for (; n.length < i; ) n.push(Qe.empty);
    n.push(t);
  }
}
function Ih(n, e, t) {
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
function Nh(n, e, t, i = false) {
  let r = [], s = i ? [] : null, o = new Vl(n), l = new Vl(e);
  for (let a = -1; ; ) {
    if (o.done && l.len || l.done && o.len) throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && l.ins == -1) {
      let f = Math.min(o.len, l.len);
      pn(r, f, -1), o.forward(f), l.forward(f);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !t))) {
      let f = l.len;
      for (pn(r, l.ins, -1); f; ) {
        let h = Math.min(o.len, f);
        o.ins >= 0 && a < o.i && o.len <= h && (pn(r, 0, o.ins), s && Kr(s, r, o.text), a = o.i), o.forward(h), f -= h;
      }
      l.next();
    } else if (o.ins >= 0) {
      let f = 0, h = o.len;
      for (; h; ) if (l.ins == -1) {
        let p = Math.min(h, l.len);
        f += p, h -= p, l.forward(p);
      } else if (l.ins == 0 && l.len < h) h -= l.len, l.next();
      else break;
      pn(r, f, a < o.i ? o.ins : 0), s && a < o.i && Kr(s, r, o.text), a = o.i, o.forward(o.len - h);
    } else {
      if (o.done && l.done) return s ? Ut.createSet(r, s) : fr.create(r);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function j0(n, e, t = false) {
  let i = [], r = t ? [] : null, s = new Vl(n), o = new Vl(e);
  for (let l = false; ; ) {
    if (s.done && o.done) return r ? Ut.createSet(i, r) : fr.create(i);
    if (s.ins == 0) pn(i, s.len, 0, l), s.next();
    else if (o.len == 0 && !o.done) pn(i, 0, o.ins, l), r && Kr(r, i, o.text), o.next();
    else {
      if (s.done || o.done) throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(s.len2, o.len), f = i.length;
        if (s.ins == -1) {
          let h = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          pn(i, a, h, l), r && h && Kr(r, i, o.text);
        } else o.ins == -1 ? (pn(i, s.off ? 0 : s.len, a, l), r && Kr(r, i, s.textBit(a))) : (pn(i, s.off ? 0 : s.len, o.off ? 0 : o.ins, l), r && !o.off && Kr(r, i, o.text));
        l = (s.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > f), s.forward2(a), o.forward(a);
      }
    }
  }
}
class Vl {
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
class As {
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
    return this.empty ? i = r = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), r = e.mapPos(this.to, -1)), i == this.from && r == this.to ? this : new As(i, r, this.flags);
  }
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor) return j.range(e, t);
    let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return j.range(this.anchor, i);
  }
  eq(e, t = false) {
    return this.anchor == e.anchor && this.head == e.head && (!t || !this.empty || this.assoc == e.assoc);
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number") throw new RangeError("Invalid JSON representation for SelectionRange");
    return j.range(e.anchor, e.head);
  }
  static create(e, t, i) {
    return new As(e, t, i);
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
    return new j(e.ranges.map((t) => As.fromJSON(t)), e.main);
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
    return As.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (r ?? 16777215) << 6);
  }
  static range(e, t, i, r) {
    let s = (i ?? 16777215) << 6 | (r == null ? 7 : Math.min(6, r));
    return t < e ? As.create(t, e, 48 | s) : As.create(e, t, (t > e ? 8 : 0) | s);
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
function q0(n, e) {
  for (let t of n.ranges) if (t.to > e) throw new RangeError("Selection points outside of document");
}
let fd = 0;
class be {
  constructor(e, t, i, r, s) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = r, this.id = fd++, this.default = e([]), this.extensions = typeof s == "function" ? s(this) : s;
  }
  get reader() {
    return this;
  }
  static define(e = {}) {
    return new be(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : hd), !!e.static, e.enables);
  }
  of(e) {
    return new ac([], this, 0, e);
  }
  compute(e, t) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new ac(e, this, 1, t);
  }
  computeN(e, t) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new ac(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function hd(n, e) {
  return n == e || n.length == e.length && n.every((t, i) => t === e[i]);
}
class ac {
  constructor(e, t, i, r) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = r, this.id = fd++;
  }
  dynamicSlot(e) {
    var t;
    let i = this.value, r = this.facet.compareInput, s = this.id, o = e[s] >> 1, l = this.type == 2, a = false, f = false, h = [];
    for (let p of this.dependencies) p == "doc" ? a = true : p == "selection" ? f = true : (((t = e[p.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && h.push(e[p.id]);
    return { create(p) {
      return p.values[o] = i(p), 1;
    }, update(p, m) {
      if (a && m.docChanged || f && (m.docChanged || m.selection) || Fh(p, h)) {
        let b = i(p);
        if (l ? !$p(b, p.values[o], r) : !r(b, p.values[o])) return p.values[o] = b, 1;
      }
      return 0;
    }, reconfigure: (p, m) => {
      let b, S = m.config.address[s];
      if (S != null) {
        let M = Ac(m, S);
        if (this.dependencies.every((A) => A instanceof be ? m.facet(A) === p.facet(A) : A instanceof Yt ? m.field(A, false) == p.field(A, false) : true) || (l ? $p(b = i(p), M, r) : r(b = i(p), M))) return p.values[o] = M, 0;
      } else b = i(p);
      return p.values[o] = b, 1;
    } };
  }
}
function $p(n, e, t) {
  if (n.length != e.length) return false;
  for (let i = 0; i < n.length; i++) if (!t(n[i], e[i])) return false;
  return true;
}
function Fh(n, e) {
  let t = false;
  for (let i of e) El(n, i) & 1 && (t = true);
  return t;
}
function mx(n, e, t) {
  let i = t.map((a) => n[a.id]), r = t.map((a) => a.type), s = i.filter((a) => !(a & 1)), o = n[e.id] >> 1;
  function l(a) {
    let f = [];
    for (let h = 0; h < i.length; h++) {
      let p = Ac(a, i[h]);
      if (r[h] == 2) for (let m of p) f.push(m);
      else f.push(p);
    }
    return e.combine(f);
  }
  return { create(a) {
    for (let f of i) El(a, f);
    return a.values[o] = l(a), 1;
  }, update(a, f) {
    if (!Fh(a, s)) return 0;
    let h = l(a);
    return e.compare(h, a.values[o]) ? 0 : (a.values[o] = h, 1);
  }, reconfigure(a, f) {
    let h = Fh(a, i), p = f.config.facets[e.id], m = f.facet(e);
    if (p && !h && hd(t, p)) return a.values[o] = m, 0;
    let b = l(a);
    return e.compare(b, m) ? (a.values[o] = m, 0) : (a.values[o] = b, 1);
  } };
}
const Oa = be.define({ static: true });
class Yt {
  constructor(e, t, i, r, s) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = r, this.spec = s, this.provides = void 0;
  }
  static define(e) {
    let t = new Yt(fd++, e.create, e.update, e.compare || ((i, r) => i === r), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(Oa).find((i) => i.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  slot(e) {
    let t = e[this.id] >> 1;
    return { create: (i) => (i.values[t] = this.create(i), 1), update: (i, r) => {
      let s = i.values[t], o = this.updateF(s, r);
      return this.compareF(s, o) ? 0 : (i.values[t] = o, 1);
    }, reconfigure: (i, r) => {
      let s = i.facet(Oa), o = r.facet(Oa), l;
      return (l = s.find((a) => a.field == this)) && l != o.find((a) => a.field == this) ? (i.values[t] = l.create(i), 1) : r.config.address[this.id] != null ? (i.values[t] = r.field(this), 0) : (i.values[t] = this.create(i), 1);
    } };
  }
  init(e) {
    return [this, Oa.of({ field: this, create: e })];
  }
  get extension() {
    return this;
  }
}
const ks = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function rl(n) {
  return (e) => new U0(e, n);
}
const os = { highest: rl(ks.highest), high: rl(ks.high), default: rl(ks.default), low: rl(ks.low), lowest: rl(ks.lowest) };
class U0 {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class nr {
  of(e) {
    return new Hh(this, e);
  }
  reconfigure(e) {
    return nr.reconfigure.of({ compartment: this, extension: e });
  }
  get(e) {
    return e.config.compartments.get(this);
  }
}
class Hh {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class Mc {
  constructor(e, t, i, r, s, o) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = i, this.address = r, this.staticValues = s, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < i.length; ) this.statusTemplate.push(0);
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, i) {
    let r = [], s = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let m of yx(e, t, o)) m instanceof Yt ? r.push(m) : (s[m.facet.id] || (s[m.facet.id] = [])).push(m);
    let l = /* @__PURE__ */ Object.create(null), a = [], f = [];
    for (let m of r) l[m.id] = f.length << 1, f.push((b) => m.slot(b));
    let h = i == null ? void 0 : i.config.facets;
    for (let m in s) {
      let b = s[m], S = b[0].facet, M = h && h[m] || [];
      if (b.every((A) => A.type == 0)) if (l[S.id] = a.length << 1 | 1, hd(M, b)) a.push(i.facet(S));
      else {
        let A = S.combine(b.map((_) => _.value));
        a.push(i && S.compare(A, i.facet(S)) ? i.facet(S) : A);
      }
      else {
        for (let A of b) A.type == 0 ? (l[A.id] = a.length << 1 | 1, a.push(A.value)) : (l[A.id] = f.length << 1, f.push((_) => A.dynamicSlot(_)));
        l[S.id] = f.length << 1, f.push((A) => mx(A, S, b));
      }
    }
    let p = f.map((m) => m(l));
    return new Mc(e, o, p, l, a, s);
  }
}
function yx(n, e, t) {
  let i = [[], [], [], [], []], r = /* @__PURE__ */ new Map();
  function s(o, l) {
    let a = r.get(o);
    if (a != null) {
      if (a <= l) return;
      let f = i[a].indexOf(o);
      f > -1 && i[a].splice(f, 1), o instanceof Hh && t.delete(o.compartment);
    }
    if (r.set(o, l), Array.isArray(o)) for (let f of o) s(f, l);
    else if (o instanceof Hh) {
      if (t.has(o.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
      let f = e.get(o.compartment) || o.inner;
      t.set(o.compartment, f), s(f, l);
    } else if (o instanceof U0) s(o.inner, o.prec);
    else if (o instanceof Yt) i[l].push(o), o.provides && s(o.provides, l);
    else if (o instanceof ac) i[l].push(o), o.facet.extensions && s(o.facet.extensions, ks.default);
    else {
      let f = o.extension;
      if (!f) throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      s(f, l);
    }
  }
  return s(n, ks.default), i.reduce((o, l) => o.concat(l));
}
function El(n, e) {
  if (e & 1) return 2;
  let t = e >> 1, i = n.status[t];
  if (i == 4) throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2) return i;
  n.status[t] = 4;
  let r = n.computeSlot(n, n.config.dynamicSlots[t]);
  return n.status[t] = 2 | r;
}
function Ac(n, e) {
  return e & 1 ? n.config.staticValues[e >> 1] : n.values[e >> 1];
}
const G0 = be.define(), Vh = be.define({ combine: (n) => n.some((e) => e), static: true }), Y0 = be.define({ combine: (n) => n.length ? n[0] : void 0, static: true }), J0 = be.define(), Q0 = be.define(), X0 = be.define(), Z0 = be.define({ combine: (n) => n.length ? n[0] : false });
class Tr {
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  static define() {
    return new vx();
  }
}
class vx {
  of(e) {
    return new Tr(this, e);
  }
}
class bx {
  constructor(e) {
    this.map = e;
  }
  of(e) {
    return new Ee(this, e);
  }
}
class Ee {
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new Ee(this.type, t);
  }
  is(e) {
    return this.type == e;
  }
  static define(e = {}) {
    return new bx(e.map || ((t) => t));
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
Ee.reconfigure = Ee.define();
Ee.appendConfig = Ee.define();
class Gt {
  constructor(e, t, i, r, s, o) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = r, this.annotations = s, this.scrollIntoView = o, this._doc = null, this._state = null, i && q0(i, t.newLength), s.some((l) => l.type == Gt.time) || (this.annotations = s.concat(Gt.time.of(Date.now())));
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
Gt.time = Tr.define();
Gt.userEvent = Tr.define();
Gt.addToHistory = Tr.define();
Gt.remote = Tr.define();
function wx(n, e) {
  let t = [];
  for (let i = 0, r = 0; ; ) {
    let s, o;
    if (i < n.length && (r == e.length || e[r] >= n[i])) s = n[i++], o = n[i++];
    else if (r < e.length) s = e[r++], o = e[r++];
    else return t;
    !t.length || t[t.length - 1] < s ? t.push(s, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function ey(n, e, t) {
  var i;
  let r, s, o;
  return t ? (r = e.changes, s = Ut.empty(e.changes.length), o = n.changes.compose(e.changes)) : (r = e.changes.map(n.changes), s = n.changes.mapDesc(e.changes, true), o = n.changes.compose(r)), { changes: o, selection: e.selection ? e.selection.map(s) : (i = n.selection) === null || i === void 0 ? void 0 : i.map(r), effects: Ee.mapEffects(n.effects, r).concat(Ee.mapEffects(e.effects, s)), annotations: n.annotations.length ? n.annotations.concat(e.annotations) : e.annotations, scrollIntoView: n.scrollIntoView || e.scrollIntoView };
}
function Wh(n, e, t) {
  let i = e.selection, r = co(e.annotations);
  return e.userEvent && (r = r.concat(Gt.userEvent.of(e.userEvent))), { changes: e.changes instanceof Ut ? e.changes : Ut.of(e.changes || [], t, n.facet(Y0)), selection: i && (i instanceof j ? i : j.single(i.anchor, i.head)), effects: co(e.effects), annotations: r, scrollIntoView: !!e.scrollIntoView };
}
function ty(n, e, t) {
  let i = Wh(n, e.length ? e[0] : {}, n.doc.length);
  e.length && e[0].filter === false && (t = false);
  for (let s = 1; s < e.length; s++) {
    e[s].filter === false && (t = false);
    let o = !!e[s].sequential;
    i = ey(i, Wh(n, e[s], o ? i.changes.newLength : n.doc.length), o);
  }
  let r = Gt.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return Sx(t ? xx(r) : r);
}
function xx(n) {
  let e = n.startState, t = true;
  for (let r of e.facet(J0)) {
    let s = r(n);
    if (s === false) {
      t = false;
      break;
    }
    Array.isArray(s) && (t = t === true ? s : wx(t, s));
  }
  if (t !== true) {
    let r, s;
    if (t === false) s = n.changes.invertedDesc, r = Ut.empty(e.doc.length);
    else {
      let o = n.changes.filter(t);
      r = o.changes, s = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    n = Gt.create(e, r, n.selection && n.selection.map(s), Ee.mapEffects(n.effects, s), n.annotations, n.scrollIntoView);
  }
  let i = e.facet(Q0);
  for (let r = i.length - 1; r >= 0; r--) {
    let s = i[r](n);
    s instanceof Gt ? n = s : Array.isArray(s) && s.length == 1 && s[0] instanceof Gt ? n = s[0] : n = ty(e, co(s), false);
  }
  return n;
}
function Sx(n) {
  let e = n.startState, t = e.facet(X0), i = n;
  for (let r = t.length - 1; r >= 0; r--) {
    let s = t[r](n);
    s && Object.keys(s).length && (i = ey(i, Wh(e, s, n.changes.newLength), true));
  }
  return i == n ? n : Gt.create(e, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView);
}
const kx = [];
function co(n) {
  return n == null ? kx : Array.isArray(n) ? n : [n];
}
var St = (function(n) {
  return n[n.Word = 0] = "Word", n[n.Space = 1] = "Space", n[n.Other = 2] = "Other", n;
})(St || (St = {}));
const Cx = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let $h;
try {
  $h = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function Mx(n) {
  if ($h) return $h.test(n);
  for (let e = 0; e < n.length; e++) {
    let t = n[e];
    if (/\w/.test(t) || t > "\x80" && (t.toUpperCase() != t.toLowerCase() || Cx.test(t))) return true;
  }
  return false;
}
function Ax(n) {
  return (e) => {
    if (!/\S/.test(e)) return St.Space;
    if (Mx(e)) return St.Word;
    for (let t = 0; t < n.length; t++) if (e.indexOf(n[t]) > -1) return St.Word;
    return St.Other;
  };
}
class $e {
  constructor(e, t, i, r, s, o) {
    this.config = e, this.doc = t, this.selection = i, this.values = r, this.status = e.statusTemplate.slice(), this.computeSlot = s, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++) El(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = true) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t) throw new RangeError("Field is not present in this state");
      return;
    }
    return El(this, i), Ac(this, i);
  }
  update(...e) {
    return ty(this, e, true);
  }
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: r } = t;
    for (let l of e.effects) l.is(nr.reconfigure) ? (t && (r = /* @__PURE__ */ new Map(), t.compartments.forEach((a, f) => r.set(f, a)), t = null), r.set(l.value.compartment, l.value.extension)) : l.is(Ee.reconfigure) ? (t = null, i = l.value) : l.is(Ee.appendConfig) && (t = null, i = co(i).concat(l.value));
    let s;
    t ? s = e.startState.values.slice() : (t = Mc.resolve(i, r, this), s = new $e(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (a, f) => f.reconfigure(a, this), null).values);
    let o = e.startState.facet(Vh) ? e.newSelection : e.newSelection.asSingle();
    new $e(t, e.newDoc, o, s, (l, a) => a.update(l, e), e);
  }
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({ changes: { from: t.from, to: t.to, insert: e }, range: j.cursor(t.from + e.length) }));
  }
  changeByRange(e) {
    let t = this.selection, i = e(t.ranges[0]), r = this.changes(i.changes), s = [i.range], o = co(i.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), f = this.changes(a.changes), h = f.map(r);
      for (let m = 0; m < l; m++) s[m] = s[m].map(h);
      let p = r.mapDesc(f, true);
      s.push(a.range.map(p)), r = r.compose(h), o = Ee.mapEffects(o, h).concat(Ee.mapEffects(co(a.effects), p));
    }
    return { changes: r, selection: j.create(s, t.mainIndex), effects: o };
  }
  changes(e = []) {
    return e instanceof Ut ? e : Ut.of(e, this.doc.length, this.facet($e.lineSeparator));
  }
  toText(e) {
    return Qe.of(e.split(this.facet($e.lineSeparator) || Bh));
  }
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (El(this, t), Ac(this, t));
  }
  toJSON(e) {
    let t = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
    if (e) for (let i in e) {
      let r = e[i];
      r instanceof Yt && this.config.address[r.id] != null && (t[i] = r.spec.toJSON(this.field(e[i]), this));
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
    return $e.create({ doc: e.doc, selection: j.fromJSON(e.selection), extensions: t.extensions ? r.concat([t.extensions]) : r });
  }
  static create(e = {}) {
    let t = Mc.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof Qe ? e.doc : Qe.of((e.doc || "").split(t.staticFacet($e.lineSeparator) || Bh)), r = e.selection ? e.selection instanceof j ? e.selection : j.single(e.selection.anchor, e.selection.head) : j.single(0);
    return q0(r, i.length), t.staticFacet(Vh) || (r = r.asSingle()), new $e(t, i, r, t.dynamicSlots.map(() => null), (s, o) => o.create(s), null);
  }
  get tabSize() {
    return this.facet($e.tabSize);
  }
  get lineBreak() {
    return this.facet($e.lineSeparator) || `
`;
  }
  get readOnly() {
    return this.facet(Z0);
  }
  phrase(e, ...t) {
    for (let i of this.facet($e.phrases)) if (Object.prototype.hasOwnProperty.call(i, e)) {
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
    for (let s of this.facet(G0)) for (let o of s(this, t, i)) Object.prototype.hasOwnProperty.call(o, e) && r.push(o[e]);
    return r;
  }
  charCategorizer(e) {
    return Ax(this.languageDataAt("wordChars", e).join(""));
  }
  wordAt(e) {
    let { text: t, from: i, length: r } = this.doc.lineAt(e), s = this.charCategorizer(e), o = e - i, l = e - i;
    for (; o > 0; ) {
      let a = cn(t, o, false);
      if (s(t.slice(a, o)) != St.Word) break;
      o = a;
    }
    for (; l < r; ) {
      let a = cn(t, l);
      if (s(t.slice(l, a)) != St.Word) break;
      l = a;
    }
    return o == l ? null : j.range(o + i, l + i);
  }
}
$e.allowMultipleSelections = Vh;
$e.tabSize = be.define({ combine: (n) => n.length ? n[0] : 4 });
$e.lineSeparator = Y0;
$e.readOnly = Z0;
$e.phrases = be.define({ compare(n, e) {
  let t = Object.keys(n), i = Object.keys(e);
  return t.length == i.length && t.every((r) => n[r] == e[r]);
} });
$e.languageData = G0;
$e.changeFilter = J0;
$e.transactionFilter = Q0;
$e.transactionExtender = X0;
nr.reconfigure = Ee.define();
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
class Is {
  eq(e) {
    return this == e;
  }
  range(e, t = e) {
    return zh.create(e, t, this);
  }
}
Is.prototype.startSide = Is.prototype.endSide = 0;
Is.prototype.point = false;
Is.prototype.mapMode = an.TrackDel;
let zh = class ny {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  static create(e, t, i) {
    return new ny(e, t, i);
  }
};
function Kh(n, e) {
  return n.from - e.from || n.value.startSide - e.value.startSide;
}
class ud {
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
        let S = t.mapPos(h, f.startSide, f.mapMode);
        if (S == null || (m = b = S, f.startSide != f.endSide && (b = t.mapPos(h, f.endSide), b < m))) continue;
      } else if (m = t.mapPos(h, f.startSide), b = t.mapPos(p, f.endSide), m > b || m == b && f.startSide > 0 && f.endSide <= 0) continue;
      (b - m || f.endSide - f.startSide) < 0 || (o < 0 && (o = m), f.point && (l = Math.max(l, b - m)), i.push(f), r.push(m - o), s.push(b - o));
    }
    return { mapped: i.length ? new ud(r, s, i, l) : null, pos: o };
  }
}
class ze {
  constructor(e, t, i, r) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = r;
  }
  static create(e, t, i, r) {
    return new ze(e, t, i, r);
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
    if (i && (t = t.slice().sort(Kh)), this.isEmpty) return t.length ? ze.of(t) : this;
    let l = new iy(this, null, -1).goto(0), a = 0, f = [], h = new Ri();
    for (; l.value || a < t.length; ) if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
      let p = t[a++];
      h.addInner(p.from, p.to, p.value) || f.push(p);
    } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!o || r > this.chunkEnd(l.chunkIndex) || s < this.chunkPos[l.chunkIndex]) && h.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || r > l.to || s < l.from || o(l.from, l.to, l.value)) && (h.addInner(l.from, l.to, l.value) || f.push(zh.create(l.from, l.to, l.value))), l.next());
    return h.finishInner(this.nextLayer.isEmpty && !f.length ? ze.empty : this.nextLayer.update({ add: f, filter: o, filterFrom: r, filterTo: s }));
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
    return t.length == 0 ? s : new ze(i, t, s || ze.empty, r);
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
    return Wl.from([this]).goto(e);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e, t = 0) {
    return Wl.from(e).goto(t);
  }
  static compare(e, t, i, r, s = -1) {
    let o = e.filter((p) => p.maxPoint > 0 || !p.isEmpty && p.maxPoint >= s), l = t.filter((p) => p.maxPoint > 0 || !p.isEmpty && p.maxPoint >= s), a = zp(o, l, i), f = new sl(o, a, s), h = new sl(l, a, s);
    i.iterGaps((p, m, b) => Kp(f, p, h, m, b, r)), i.empty && i.length == 0 && Kp(f, 0, h, 0, 0, r);
  }
  static eq(e, t, i = 0, r) {
    r == null && (r = 999999999);
    let s = e.filter((h) => !h.isEmpty && t.indexOf(h) < 0), o = t.filter((h) => !h.isEmpty && e.indexOf(h) < 0);
    if (s.length != o.length) return false;
    if (!s.length) return true;
    let l = zp(s, o), a = new sl(s, l, 0).goto(i), f = new sl(o, l, 0).goto(i);
    for (; ; ) {
      if (a.to != f.to || !jh(a.active, f.active) || a.point && (!f.point || !a.point.eq(f.point))) return false;
      if (a.to > r) return true;
      a.next(), f.next();
    }
  }
  static spans(e, t, i, r, s = -1) {
    let o = new sl(e, null, s).goto(t), l = t, a = o.openStart;
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
    let i = new Ri();
    for (let r of e instanceof zh ? [e] : t ? Ex(e) : e) i.add(r.from, r.to, r.value);
    return i.finish();
  }
  static join(e) {
    if (!e.length) return ze.empty;
    let t = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--) for (let r = e[i]; r != ze.empty; r = r.nextLayer) t = new ze(r.chunkPos, r.chunk, t, Math.max(r.maxPoint, t.maxPoint));
    return t;
  }
}
ze.empty = new ze([], [], null, -1);
function Ex(n) {
  if (n.length > 1) for (let e = n[0], t = 1; t < n.length; t++) {
    let i = n[t];
    if (Kh(e, i) > 0) return n.slice().sort(Kh);
    e = i;
  }
  return n;
}
ze.empty.nextLayer = ze.empty;
class Ri {
  finishChunk(e) {
    this.chunks.push(new ud(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  add(e, t, i) {
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new Ri())).add(e, t, i);
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
    return this.finishInner(ze.empty);
  }
  finishInner(e) {
    if (this.from.length && this.finishChunk(false), this.chunks.length == 0) return e;
    let t = ze.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function zp(n, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let s of n) for (let o = 0; o < s.chunk.length; o++) s.chunk[o].maxPoint <= 0 && i.set(s.chunk[o], s.chunkPos[o]);
  let r = /* @__PURE__ */ new Set();
  for (let s of e) for (let o = 0; o < s.chunk.length; o++) {
    let l = i.get(s.chunk[o]);
    l != null && (t ? t.mapPos(l) : l) == s.chunkPos[o] && !(t == null ? void 0 : t.touchesRange(l, l + s.chunk[o].length)) && r.add(s.chunk[o]);
  }
  return r;
}
class iy {
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
class Wl {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let r = [];
    for (let s = 0; s < e.length; s++) for (let o = e[s]; !o.isEmpty; o = o.nextLayer) o.maxPoint >= i && r.push(new iy(o, t, i, s));
    return r.length == 1 ? r[0] : new Wl(r);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap) i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--) zf(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap) i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--) zf(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0) this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), zf(this.heap, 0);
    }
  }
}
function zf(n, e) {
  for (let t = n[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= n.length) break;
    let r = n[i];
    if (i + 1 < n.length && r.compare(n[i + 1]) >= 0 && (r = n[i + 1], i++), t.compare(r) < 0) break;
    n[i] = t, n[e] = r, e = i;
  }
}
class sl {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Wl.from(e, t, i);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; ) this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    _a(this.active, e), _a(this.activeTo, e), _a(this.activeRank, e), this.minActive = jp(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: r, rank: s } = this.cursor;
    for (; t < this.activeRank.length && (s - this.activeRank[t] || r - this.activeTo[t]) > 0; ) t++;
    La(this.active, t, i), La(this.activeTo, t, r), La(this.activeRank, t, s), e && La(e, t, this.cursor.from), this.minActive = jp(this.active, this.activeTo);
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
        this.removeActive(r), i && _a(i, r);
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
function Kp(n, e, t, i, r, s) {
  n.goto(e), t.goto(i);
  let o = i + r, l = i, a = i - e;
  for (; ; ) {
    let f = n.to + a - t.to, h = f || n.endSide - t.endSide, p = h < 0 ? n.to + a : t.to, m = Math.min(p, o);
    if (n.point || t.point ? n.point && t.point && (n.point == t.point || n.point.eq(t.point)) && jh(n.activeForPoint(n.to), t.activeForPoint(t.to)) || s.comparePoint(l, m, n.point, t.point) : m > l && !jh(n.active, t.active) && s.compareRange(l, m, n.active, t.active), p > o) break;
    (f || n.openEnd != t.openEnd) && s.boundChange && s.boundChange(p), l = p, h <= 0 && n.next(), h >= 0 && t.next();
  }
}
function jh(n, e) {
  if (n.length != e.length) return false;
  for (let t = 0; t < n.length; t++) if (n[t] != e[t] && !n[t].eq(e[t])) return false;
  return true;
}
function _a(n, e) {
  for (let t = e, i = n.length - 1; t < i; t++) n[t] = n[t + 1];
  n.pop();
}
function La(n, e, t) {
  for (let i = n.length - 1; i >= e; i--) n[i + 1] = n[i];
  n[e] = t;
}
function jp(n, e) {
  let t = -1, i = 1e9;
  for (let r = 0; r < e.length; r++) (e[r] - i || n[r].endSide - n[t].endSide) < 0 && (t = r, i = e[r]);
  return t;
}
function Do(n, e, t = n.length) {
  let i = 0;
  for (let r = 0; r < t && r < n.length; ) n.charCodeAt(r) == 9 ? (i += e - i % e, r++) : (i++, r = cn(n, r));
  return i;
}
function qh(n, e, t, i) {
  for (let r = 0, s = 0; ; ) {
    if (s >= e) return r;
    if (r == n.length) break;
    s += n.charCodeAt(r) == 9 ? t - s % t : 1, r = cn(n, r);
  }
  return i === true ? -1 : n.length;
}
const Uh = "\u037C", qp = typeof Symbol > "u" ? "__" + Uh : Symbol.for(Uh), Gh = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), Up = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
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
        let S = l[b];
        if (/&/.test(b)) s(b.split(/,\s*/).map((M) => o.map((A) => M.replace(/&/, A))).reduce((M, A) => M.concat(A)), S, a);
        else if (S && typeof S == "object") {
          if (!p) throw new RangeError("The value of a property (" + b + ") should be a primitive value.");
          s(r(b), S, h, m);
        } else S != null && h.push(b.replace(/_.*/, "").replace(/[A-Z]/g, (M) => "-" + M.toLowerCase()) + ": " + S + ";");
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
    let e = Up[qp] || 1;
    return Up[qp] = e + 1, Uh + e.toString(36);
  }
  static mount(e, t, i) {
    let r = e[Gh], s = i && i.nonce;
    r ? s && r.setNonce(s) : r = new Tx(e, s), r.mount(Array.isArray(t) ? t : [t], e);
  }
}
let Gp = /* @__PURE__ */ new Map();
class Tx {
  constructor(e, t) {
    let i = e.ownerDocument || e, r = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && r.CSSStyleSheet) {
      let s = Gp.get(i);
      if (s) return e[Gh] = s;
      this.sheet = new r.CSSStyleSheet(), Gp.set(i, this);
    } else this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[Gh] = this;
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
var Jr = { 8: "Backspace", 9: "Tab", 10: "Enter", 12: "NumLock", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 44: "PrintScreen", 45: "Insert", 46: "Delete", 59: ";", 61: "=", 91: "Meta", 92: "Meta", 106: "*", 107: "+", 108: ",", 109: "-", 110: ".", 111: "/", 144: "NumLock", 145: "ScrollLock", 160: "Shift", 161: "Shift", 162: "Control", 163: "Control", 164: "Alt", 165: "Alt", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }, $l = { 48: ")", 49: "!", 50: "@", 51: "#", 52: "$", 53: "%", 54: "^", 55: "&", 56: "*", 57: "(", 59: ":", 61: "+", 173: "_", 186: ":", 187: "+", 188: "<", 189: "_", 190: ">", 191: "?", 192: "~", 219: "{", 220: "|", 221: "}", 222: '"' }, Ox = typeof navigator < "u" && /Mac/.test(navigator.platform), _x = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var on = 0; on < 10; on++) Jr[48 + on] = Jr[96 + on] = String(on);
for (var on = 1; on <= 24; on++) Jr[on + 111] = "F" + on;
for (var on = 65; on <= 90; on++) Jr[on] = String.fromCharCode(on + 32), $l[on] = String.fromCharCode(on);
for (var Kf in Jr) $l.hasOwnProperty(Kf) || ($l[Kf] = Jr[Kf]);
function Lx(n) {
  var e = Ox && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || _x && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? $l : Jr)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
function ct() {
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
  for (; e < arguments.length; e++) ry(n, arguments[e]);
  return n;
}
function ry(n, e) {
  if (typeof e == "string") n.appendChild(document.createTextNode(e));
  else if (e != null) if (e.nodeType != null) n.appendChild(e);
  else if (Array.isArray(e)) for (var t = 0; t < e.length; t++) ry(n, e[t]);
  else throw new RangeError("Unsupported child node: " + e);
}
let Dn = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, Yh = typeof document < "u" ? document : { documentElement: { style: {} } };
const Jh = /Edge\/(\d+)/.exec(Dn.userAgent), sy = /MSIE \d/.test(Dn.userAgent), Qh = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Dn.userAgent), sf = !!(sy || Qh || Jh), Yp = !sf && /gecko\/(\d+)/i.test(Dn.userAgent), jf = !sf && /Chrome\/(\d+)/.exec(Dn.userAgent), Dx = "webkitFontSmoothing" in Yh.documentElement.style, Xh = !sf && /Apple Computer/.test(Dn.vendor), Jp = Xh && (/Mobile\/\w+/.test(Dn.userAgent) || Dn.maxTouchPoints > 2);
var ue = { mac: Jp || /Mac/.test(Dn.platform), windows: /Win/.test(Dn.platform), linux: /Linux|X11/.test(Dn.platform), ie: sf, ie_version: sy ? Yh.documentMode || 6 : Qh ? +Qh[1] : Jh ? +Jh[1] : 0, gecko: Yp, gecko_version: Yp ? +(/Firefox\/(\d+)/.exec(Dn.userAgent) || [0, 0])[1] : 0, chrome: !!jf, chrome_version: jf ? +jf[1] : 0, ios: Jp, android: /Android\b/.test(Dn.userAgent), webkit_version: Dx ? +(/\bAppleWebKit\/(\d+)/.exec(Dn.userAgent) || [0, 0])[1] : 0, safari: Xh, safari_version: Xh ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(Dn.userAgent) || [0, 0])[1] : 0, tabSize: Yh.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size" };
function zl(n) {
  let e;
  return n.nodeType == 11 ? e = n.getSelection ? n : n.ownerDocument : e = n, e.getSelection();
}
function Zh(n, e) {
  return e ? n == e || n.contains(e.nodeType != 1 ? e.parentNode : e) : false;
}
function cc(n, e) {
  if (!e.anchorNode) return false;
  try {
    return Zh(n, e.anchorNode);
  } catch {
    return false;
  }
}
function Kl(n) {
  return n.nodeType == 3 ? Fs(n, 0, n.nodeValue.length).getClientRects() : n.nodeType == 1 ? n.getClientRects() : [];
}
function Tl(n, e, t, i) {
  return t ? Qp(n, e, t, i, -1) || Qp(n, e, t, i, 1) : false;
}
function Ns(n) {
  for (var e = 0; ; e++) if (n = n.previousSibling, !n) return e;
}
function Ec(n) {
  return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
function Qp(n, e, t, i, r) {
  for (; ; ) {
    if (n == t && e == i) return true;
    if (e == (r < 0 ? 0 : ur(n))) {
      if (n.nodeName == "DIV") return false;
      let s = n.parentNode;
      if (!s || s.nodeType != 1) return false;
      e = Ns(n) + (r < 0 ? 0 : 1), n = s;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (r < 0 ? -1 : 0)], n.nodeType == 1 && n.contentEditable == "false") return false;
      e = r < 0 ? ur(n) : 0;
    } else return false;
  }
}
function ur(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function of(n, e) {
  let t = e ? n.left : n.right;
  return { left: t, right: t, top: n.top, bottom: n.bottom };
}
function Rx(n) {
  let e = n.visualViewport;
  return e ? { left: 0, right: e.width, top: 0, bottom: e.height } : { left: 0, right: n.innerWidth, top: 0, bottom: n.innerHeight };
}
function oy(n, e) {
  let t = e.width / n.offsetWidth, i = e.height / n.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - n.offsetWidth) < 1) && (t = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - n.offsetHeight) < 1) && (i = 1), { scaleX: t, scaleY: i };
}
function Px(n, e, t, i, r, s, o, l) {
  let a = n.ownerDocument, f = a.defaultView || window;
  for (let h = n, p = false; h && !p; ) if (h.nodeType == 1) {
    let m, b = h == a.body, S = 1, M = 1;
    if (b) m = Rx(f);
    else {
      if (/^(fixed|sticky)$/.test(getComputedStyle(h).position) && (p = true), h.scrollHeight <= h.clientHeight && h.scrollWidth <= h.clientWidth) {
        h = h.assignedSlot || h.parentNode;
        continue;
      }
      let R = h.getBoundingClientRect();
      ({ scaleX: S, scaleY: M } = oy(h, R)), m = { left: R.left, right: R.left + h.clientWidth * S, top: R.top, bottom: R.top + h.clientHeight * M };
    }
    let A = 0, _ = 0;
    if (r == "nearest") e.top < m.top ? (_ = e.top - (m.top + o), t > 0 && e.bottom > m.bottom + _ && (_ = e.bottom - m.bottom + o)) : e.bottom > m.bottom && (_ = e.bottom - m.bottom + o, t < 0 && e.top - _ < m.top && (_ = e.top - (m.top + o)));
    else {
      let R = e.bottom - e.top, N = m.bottom - m.top;
      _ = (r == "center" && R <= N ? e.top + R / 2 - N / 2 : r == "start" || r == "center" && t < 0 ? e.top - o : e.bottom - N + o) - m.top;
    }
    if (i == "nearest" ? e.left < m.left ? (A = e.left - (m.left + s), t > 0 && e.right > m.right + A && (A = e.right - m.right + s)) : e.right > m.right && (A = e.right - m.right + s, t < 0 && e.left < m.left + A && (A = e.left - (m.left + s))) : A = (i == "center" ? e.left + (e.right - e.left) / 2 - (m.right - m.left) / 2 : i == "start" == l ? e.left - s : e.right - (m.right - m.left) + s) - m.left, A || _) if (b) f.scrollBy(A, _);
    else {
      let R = 0, N = 0;
      if (_) {
        let B = h.scrollTop;
        h.scrollTop += _ / M, N = (h.scrollTop - B) * M;
      }
      if (A) {
        let B = h.scrollLeft;
        h.scrollLeft += A / S, R = (h.scrollLeft - B) * S;
      }
      e = { left: e.left - R, top: e.top - N, right: e.right - R, bottom: e.bottom - N }, R && Math.abs(R - A) < 1 && (i = "nearest"), N && Math.abs(N - _) < 1 && (r = "nearest");
    }
    if (b) break;
    (e.top < m.top || e.bottom > m.bottom || e.left < m.left || e.right > m.right) && (e = { left: Math.max(e.left, m.left), right: Math.min(e.right, m.right), top: Math.max(e.top, m.top), bottom: Math.min(e.bottom, m.bottom) }), h = h.assignedSlot || h.parentNode;
  } else if (h.nodeType == 11) h = h.host;
  else break;
}
function Bx(n) {
  let e = n.ownerDocument, t, i;
  for (let r = n.parentNode; r && !(r == e.body || t && i); ) if (r.nodeType == 1) !i && r.scrollHeight > r.clientHeight && (i = r), !t && r.scrollWidth > r.clientWidth && (t = r), r = r.assignedSlot || r.parentNode;
  else if (r.nodeType == 11) r = r.host;
  else break;
  return { x: t, y: i };
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
    this.set(t, Math.min(e.anchorOffset, t ? ur(t) : 0), i, Math.min(e.focusOffset, i ? ur(i) : 0));
  }
  set(e, t, i, r) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = i, this.focusOffset = r;
  }
}
let ys = null;
ue.safari && ue.safari_version >= 26 && (ys = false);
function ly(n) {
  if (n.setActive) return n.setActive();
  if (ys) return n.focus(ys);
  let e = [];
  for (let t = n; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode) ;
  if (n.focus(ys == null ? { get preventScroll() {
    return ys = { preventScroll: true }, true;
  } } : void 0), !ys) {
    ys = false;
    for (let t = 0; t < e.length; ) {
      let i = e[t++], r = e[t++], s = e[t++];
      i.scrollTop != r && (i.scrollTop = r), i.scrollLeft != s && (i.scrollLeft = s);
    }
  }
}
let Xp;
function Fs(n, e, t = e) {
  let i = Xp || (Xp = document.createRange());
  return i.setEnd(n, t), i.setStart(n, e), i;
}
function fo(n, e, t, i) {
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
function ay(n) {
  for (; n.attributes.length; ) n.removeAttributeNode(n.attributes[0]);
}
function Fx(n, e) {
  let t = e.focusNode, i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i) return false;
  for (i = Math.min(i, ur(t)); ; ) if (i) {
    if (t.nodeType != 1) return false;
    let r = t.childNodes[i - 1];
    r.contentEditable == "false" ? i-- : (t = r, i = ur(t));
  } else {
    if (t == n) return true;
    i = Ns(t), t = t.parentNode;
  }
}
function cy(n) {
  return n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4);
}
function fy(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i > 0) return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false") return null;
      t = t.childNodes[i - 1], i = ur(t);
    } else if (t.parentNode && !Ec(t)) i = Ns(t), t = t.parentNode;
    else return null;
  }
}
function hy(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length) return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false") return null;
      t = t.childNodes[i], i = 0;
    } else if (t.parentNode && !Ec(t)) i = Ns(t) + 1, t = t.parentNode;
    else return null;
  }
}
class gn {
  constructor(e, t, i = true) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new gn(e.parentNode, Ns(e), t);
  }
  static after(e, t) {
    return new gn(e.parentNode, Ns(e) + 1, t);
  }
}
const dd = [];
class lt {
  constructor() {
    this.parent = null, this.dom = null, this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e) {
    let t = this.posAtStart;
    for (let i of this.children) {
      if (i == e) return t;
      t += i.length + i.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  sync(e, t) {
    if (this.flags & 2) {
      let i = this.dom, r = null, s;
      for (let o of this.children) {
        if (o.flags & 7) {
          if (!o.dom && (s = r ? r.nextSibling : i.firstChild)) {
            let l = lt.get(s);
            (!l || !l.parent && l.canReuseDOM(o)) && o.reuseDOM(s);
          }
          o.sync(e, t), o.flags &= -8;
        }
        if (s = r ? r.nextSibling : i.firstChild, t && !t.written && t.node == i && s != o.dom && (t.written = true), o.dom.parentNode == i) for (; s && s != o.dom; ) s = Zp(s);
        else i.insertBefore(o.dom, s);
        r = o.dom;
      }
      for (s = r ? r.nextSibling : i.firstChild, s && t && t.node == i && (t.written = true); s; ) s = Zp(s);
    } else if (this.flags & 1) for (let i of this.children) i.flags & 7 && (i.sync(e, t), i.flags &= -8);
  }
  reuseDOM(e) {
  }
  localPosFromDOM(e, t) {
    let i;
    if (e == this.dom) i = this.dom.childNodes[t];
    else {
      let r = ur(e) == 0 ? 0 : t == 0 ? -1 : 1;
      for (; ; ) {
        let s = e.parentNode;
        if (s == this.dom) break;
        r == 0 && s.firstChild != s.lastChild && (e == s.firstChild ? r = -1 : r = 1), e = s;
      }
      r < 0 ? i = e : i = e.nextSibling;
    }
    if (i == this.dom.firstChild) return 0;
    for (; i && !lt.get(i); ) i = i.nextSibling;
    if (!i) return this.length;
    for (let r = 0, s = 0; ; r++) {
      let o = this.children[r];
      if (o.dom == i) return s;
      s += o.length + o.breakAfter;
    }
  }
  domBoundsAround(e, t, i = 0) {
    let r = -1, s = -1, o = -1, l = -1;
    for (let a = 0, f = i, h = i; a < this.children.length; a++) {
      let p = this.children[a], m = f + p.length;
      if (f < e && m > t) return p.domBoundsAround(e, t, f);
      if (m >= e && r == -1 && (r = a, s = f), f > t && p.dom.parentNode == this.dom) {
        o = a, l = h;
        break;
      }
      h = m, f = m + p.breakAfter;
    }
    return { from: s, to: l < 0 ? i + this.length : l, startDOM: (r ? this.children[r - 1].dom.nextSibling : null) || this.dom.firstChild, endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null };
  }
  markDirty(e = false) {
    this.flags |= 2, this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let t = this.parent; t; t = t.parent) {
      if (e && (t.flags |= 2), t.flags & 1) return;
      t.flags |= 1, e = false;
    }
  }
  setParent(e) {
    this.parent != e && (this.parent = e, this.flags & 7 && this.markParentsDirty(true));
  }
  setDOM(e) {
    this.dom != e && (this.dom && (this.dom.cmView = null), this.dom = e, e.cmView = this);
  }
  get rootView() {
    for (let e = this; ; ) {
      let t = e.parent;
      if (!t) return e;
      e = t;
    }
  }
  replaceChildren(e, t, i = dd) {
    this.markDirty();
    for (let r = e; r < t; r++) {
      let s = this.children[r];
      s.parent == this && i.indexOf(s) < 0 && s.destroy();
    }
    i.length < 250 ? this.children.splice(e, t - e, ...i) : this.children = [].concat(this.children.slice(0, e), i, this.children.slice(t));
    for (let r = 0; r < i.length; r++) i[r].setParent(this);
  }
  ignoreMutation(e) {
    return false;
  }
  ignoreEvent(e) {
    return false;
  }
  childCursor(e = this.length) {
    return new uy(this.children, e, this.children.length);
  }
  childPos(e, t = 1) {
    return this.childCursor().findPos(e, t);
  }
  toString() {
    let e = this.constructor.name.replace("View", "");
    return e + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (e == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(e) {
    return e.cmView;
  }
  get isEditable() {
    return true;
  }
  get isWidget() {
    return false;
  }
  get isHidden() {
    return false;
  }
  merge(e, t, i, r, s, o) {
    return false;
  }
  become(e) {
    return false;
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor && !((this.flags | e.flags) & 8);
  }
  getSide() {
    return 0;
  }
  destroy() {
    for (let e of this.children) e.parent == this && e.destroy();
    this.parent = null;
  }
}
lt.prototype.breakAfter = 0;
function Zp(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class uy {
  constructor(e, t, i) {
    this.children = e, this.pos = t, this.i = i, this.off = 0;
  }
  findPos(e, t = 1) {
    for (; ; ) {
      if (e > this.pos || e == this.pos && (t > 0 || this.i == 0 || this.children[this.i - 1].breakAfter)) return this.off = e - this.pos, this;
      let i = this.children[--this.i];
      this.pos -= i.length + i.breakAfter;
    }
  }
}
function dy(n, e, t, i, r, s, o, l, a) {
  let { children: f } = n, h = f.length ? f[e] : null, p = s.length ? s[s.length - 1] : null, m = p ? p.breakAfter : o;
  if (!(e == i && h && !o && !m && s.length < 2 && h.merge(t, r, s.length ? p : null, t == 0, l, a))) {
    if (i < f.length) {
      let b = f[i];
      b && (r < b.length || b.breakAfter && (p == null ? void 0 : p.breakAfter)) ? (e == i && (b = b.split(r), r = 0), !m && p && b.merge(0, r, p, true, 0, a) ? s[s.length - 1] = b : ((r || b.children.length && !b.children[0].length) && b.merge(0, r, null, false, 0, a), s.push(b))) : (b == null ? void 0 : b.breakAfter) && (p ? p.breakAfter = 1 : o = 1), i++;
    }
    for (h && (h.breakAfter = o, t > 0 && (!o && s.length && h.merge(t, h.length, s[0], false, l, 0) ? h.breakAfter = s.shift().breakAfter : (t < h.length || h.children.length && h.children[h.children.length - 1].length == 0) && h.merge(t, h.length, null, false, l, 0), e++)); e < i && s.length; ) if (f[i - 1].become(s[s.length - 1])) i--, s.pop(), a = s.length ? 0 : l;
    else if (f[e].become(s[0])) e++, s.shift(), l = s.length ? 0 : a;
    else break;
    !s.length && e && i < f.length && !f[e - 1].breakAfter && f[i].merge(0, 0, f[e - 1], false, l, a) && e--, (e < i || s.length) && n.replaceChildren(e, i, s);
  }
}
function py(n, e, t, i, r, s) {
  let o = n.childCursor(), { i: l, off: a } = o.findPos(t, 1), { i: f, off: h } = o.findPos(e, -1), p = e - t;
  for (let m of i) p += m.length;
  n.length += p, dy(n, f, h, l, a, i, 0, r, s);
}
const Hx = 256;
class Pi extends lt {
  constructor(e) {
    super(), this.text = e;
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e, t) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (t && t.node == this.dom && (t.written = true), this.dom.nodeValue = this.text);
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e);
  }
  merge(e, t, i) {
    return this.flags & 8 || i && (!(i instanceof Pi) || this.length - (t - e) + i.length > Hx || i.flags & 8) ? false : (this.text = this.text.slice(0, e) + (i ? i.text : "") + this.text.slice(t), this.markDirty(), true);
  }
  split(e) {
    let t = new Pi(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), t.flags |= this.flags & 8, t;
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new gn(this.dom, e);
  }
  domBoundsAround(e, t, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, t) {
    return Vx(this.dom, e, t);
  }
}
class Ar extends lt {
  constructor(e, t = [], i = 0) {
    super(), this.mark = e, this.children = t, this.length = i;
    for (let r of t) r.setParent(this);
  }
  setAttrs(e) {
    if (ay(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs) for (let t in this.mark.attrs) e.setAttribute(t, this.mark.attrs[t]);
    return e;
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !((this.flags | e.flags) & 8);
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(e, t);
  }
  merge(e, t, i, r, s, o) {
    return i && (!(i instanceof Ar && i.mark.eq(this.mark)) || e && s <= 0 || t < this.length && o <= 0) ? false : (py(this, e, t, i ? i.children.slice() : [], s - 1, o - 1), this.markDirty(), true);
  }
  split(e) {
    let t = [], i = 0, r = -1, s = 0;
    for (let l of this.children) {
      let a = i + l.length;
      a > e && t.push(i < e ? l.split(e - i) : l), r < 0 && i >= e && (r = s), i = a, s++;
    }
    let o = this.length - e;
    return this.length = e, r > -1 && (this.children.length = r, this.markDirty()), new Ar(this.mark, t, o);
  }
  domAtPos(e) {
    return gy(this, e);
  }
  coordsAt(e, t) {
    return yy(this, e, t);
  }
}
function Vx(n, e, t) {
  let i = n.nodeValue.length;
  e > i && (e = i);
  let r = e, s = e, o = 0;
  e == 0 && t < 0 || e == i && t >= 0 ? ue.chrome || ue.gecko || (e ? (r--, o = 1) : s < i && (s++, o = -1)) : t < 0 ? r-- : s < i && s++;
  let l = Fs(n, r, s).getClientRects();
  if (!l.length) return null;
  let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
  return ue.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (f) => f.width) || a), o ? of(a, o < 0) : a || null;
}
class jr extends lt {
  static create(e, t, i) {
    return new jr(e, t, i);
  }
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.side = i, this.prevWidget = null;
  }
  split(e) {
    let t = jr.create(this.widget, this.length - e, this.side);
    return this.length -= e, t;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(e, t, i, r, s, o) {
    return i && (!(i instanceof jr) || !this.widget.compare(i.widget) || e > 0 && s <= 0 || t < this.length && o <= 0) ? false : (this.length = e + (i ? i.length : 0) + (this.length - t), true);
  }
  become(e) {
    return e instanceof jr && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.compare(e.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, true) : false;
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0) return Qe.empty;
    let e = this;
    for (; e.parent; ) e = e.parent;
    let { view: t } = e, i = t && t.state.doc, r = this.posAtStart;
    return i ? i.slice(r, r + this.length) : Qe.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? gn.before(this.dom) : gn.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    if (i) return i;
    let r = this.dom.getClientRects(), s = null;
    if (!r.length) return null;
    let o = this.side ? this.side < 0 : e > 0;
    for (let l = o ? r.length - 1 : 0; s = r[l], !(e > 0 ? l == 0 : l == r.length - 1 || s.top < s.bottom); l += o ? -1 : 1) ;
    return of(s, !o);
  }
  get isEditable() {
    return false;
  }
  get isWidget() {
    return true;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class vo extends lt {
  constructor(e) {
    super(), this.side = e;
  }
  get length() {
    return 0;
  }
  merge() {
    return false;
  }
  become(e) {
    return e instanceof vo && e.side == this.side;
  }
  split() {
    return new vo(this.side);
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement("img");
      e.className = "cm-widgetBuffer", e.setAttribute("aria-hidden", "true"), this.setDOM(e);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(e) {
    return this.side > 0 ? gn.before(this.dom) : gn.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return Qe.empty;
  }
  get isHidden() {
    return true;
  }
}
Pi.prototype.children = jr.prototype.children = vo.prototype.children = dd;
function gy(n, e) {
  let t = n.dom, { children: i } = n, r = 0;
  for (let s = 0; r < i.length; r++) {
    let o = i[r], l = s + o.length;
    if (!(l == s && o.getSide() <= 0)) {
      if (e > s && e < l && o.dom.parentNode == t) return o.domAtPos(e - s);
      if (e <= s) break;
      s = l;
    }
  }
  for (let s = r; s > 0; s--) {
    let o = i[s - 1];
    if (o.dom.parentNode == t) return o.domAtPos(o.length);
  }
  for (let s = r; s < i.length; s++) {
    let o = i[s];
    if (o.dom.parentNode == t) return o.domAtPos(0);
  }
  return new gn(t, 0);
}
function my(n, e, t) {
  let i, { children: r } = n;
  t > 0 && e instanceof Ar && r.length && (i = r[r.length - 1]) instanceof Ar && i.mark.eq(e.mark) ? my(i, e.children[0], t - 1) : (r.push(e), e.setParent(n)), n.length += e.length;
}
function yy(n, e, t) {
  let i = null, r = -1, s = null, o = -1;
  function l(f, h) {
    for (let p = 0, m = 0; p < f.children.length && m <= h; p++) {
      let b = f.children[p], S = m + b.length;
      S >= h && (b.children.length ? l(b, h - m) : (!s || s.isHidden && (t > 0 || $x(s, b))) && (S > h || m == S && b.getSide() > 0) ? (s = b, o = h - m) : (m < h || m == S && b.getSide() < 0 && !b.isHidden) && (i = b, r = h - m)), m = S;
    }
  }
  l(n, e);
  let a = (t < 0 ? i : s) || i || s;
  return a ? a.coordsAt(Math.max(0, a == i ? r : o), t) : Wx(n);
}
function Wx(n) {
  let e = n.dom.lastChild;
  if (!e) return n.dom.getBoundingClientRect();
  let t = Kl(e);
  return t[t.length - 1] || null;
}
function $x(n, e) {
  let t = n.coordsAt(0, 1), i = e.coordsAt(0, 1);
  return t && i && i.top < t.bottom;
}
function eu(n, e) {
  for (let t in n) t == "class" && e.class ? e.class += " " + n.class : t == "style" && e.style ? e.style += ";" + n.style : e[t] = n[t];
  return e;
}
const eg = /* @__PURE__ */ Object.create(null);
function Tc(n, e, t) {
  if (n == e) return true;
  n || (n = eg), e || (e = eg);
  let i = Object.keys(n), r = Object.keys(e);
  if (i.length - (t && i.indexOf(t) > -1 ? 1 : 0) != r.length - (t && r.indexOf(t) > -1 ? 1 : 0)) return false;
  for (let s of i) if (s != t && (r.indexOf(s) == -1 || n[s] !== e[s])) return false;
  return true;
}
function tu(n, e, t) {
  let i = false;
  if (e) for (let r in e) t && r in t || (i = true, r == "style" ? n.style.cssText = "" : n.removeAttribute(r));
  if (t) for (let r in t) e && e[r] == t[r] || (i = true, r == "style" ? n.style.cssText = t[r] : n.setAttribute(r, t[r]));
  return i;
}
function zx(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < n.attributes.length; t++) {
    let i = n.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class Ni {
  eq(e) {
    return false;
  }
  updateDOM(e, t) {
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
var Bn = (function(n) {
  return n[n.Text = 0] = "Text", n[n.WidgetBefore = 1] = "WidgetBefore", n[n.WidgetAfter = 2] = "WidgetAfter", n[n.WidgetRange = 3] = "WidgetRange", n;
})(Bn || (Bn = {}));
class ve extends Is {
  constructor(e, t, i, r) {
    super(), this.startSide = e, this.endSide = t, this.widget = i, this.spec = r;
  }
  get heightRelevant() {
    return false;
  }
  static mark(e) {
    return new na(e);
  }
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return t += i && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new Qr(e, t, t, i, e.widget || null, false);
  }
  static replace(e) {
    let t = !!e.block, i, r;
    if (e.isBlockGap) i = -5e8, r = 4e8;
    else {
      let { start: s, end: o } = vy(e, t);
      i = (s ? t ? -3e8 : -1 : 5e8) - 1, r = (o ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new Qr(e, i, r, t, e.widget || null, true);
  }
  static line(e) {
    return new ia(e);
  }
  static set(e, t = false) {
    return ze.of(e, t);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : false;
  }
}
ve.none = ze.empty;
class na extends ve {
  constructor(e) {
    let { start: t, end: i } = vy(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var t, i;
    return this == e || e instanceof na && this.tagName == e.tagName && (this.class || ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) == (e.class || ((i = e.attrs) === null || i === void 0 ? void 0 : i.class)) && Tc(this.attrs, e.attrs, "class");
  }
  range(e, t = e) {
    if (e >= t) throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
na.prototype.point = false;
class ia extends ve {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof ia && this.spec.class == e.spec.class && Tc(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e) throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
ia.prototype.mapMode = an.TrackBefore;
ia.prototype.point = true;
class Qr extends ve {
  constructor(e, t, i, r, s, o) {
    super(t, i, s, e), this.block = r, this.isReplace = o, this.mapMode = r ? t <= 0 ? an.TrackBefore : an.TrackAfter : an.TrackDel;
  }
  get type() {
    return this.startSide != this.endSide ? Bn.WidgetRange : this.startSide <= 0 ? Bn.WidgetBefore : Bn.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof Qr && Kx(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e) throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
Qr.prototype.point = true;
function vy(n, e = false) {
  let { inclusiveStart: t, inclusiveEnd: i } = n;
  return t == null && (t = n.inclusive), i == null && (i = n.inclusive), { start: t ?? e, end: i ?? e };
}
function Kx(n, e) {
  return n == e || !!(n && e && n.compare(e));
}
function fc(n, e, t, i = 0) {
  let r = t.length - 1;
  r >= 0 && t[r] + i >= n ? t[r] = Math.max(t[r], e) : t.push(n, e);
}
class Wt extends lt {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  merge(e, t, i, r, s, o) {
    if (i) {
      if (!(i instanceof Wt)) return false;
      this.dom || i.transferDOM(this);
    }
    return r && this.setDeco(i ? i.attrs : null), py(this, e, t, i ? i.children.slice() : [], s, o), true;
  }
  split(e) {
    let t = new Wt();
    if (t.breakAfter = this.breakAfter, this.length == 0) return t;
    let { i, off: r } = this.childPos(e);
    r && (t.append(this.children[i].split(r), 0), this.children[i].merge(r, this.children[i].length, null, false, 0, 0), i++);
    for (let s = i; s < this.children.length; s++) t.append(this.children[s], 0);
    for (; i > 0 && this.children[i - 1].length == 0; ) this.children[--i].destroy();
    return this.children.length = i, this.markDirty(), this.length = e, t;
  }
  transferDOM(e) {
    this.dom && (this.markDirty(), e.setDOM(this.dom), e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(e) {
    Tc(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, t) {
    my(this, e, t);
  }
  addLineDeco(e) {
    let t = e.spec.attributes, i = e.spec.class;
    t && (this.attrs = eu(t, this.attrs || {})), i && (this.attrs = eu({ class: i }, this.attrs || {}));
  }
  domAtPos(e) {
    return gy(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    var i;
    this.dom ? this.flags & 4 && (ay(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (tu(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, t);
    let r = this.dom.lastChild;
    for (; r && lt.get(r) instanceof Ar; ) r = r.lastChild;
    if (!r || !this.length || r.nodeName != "BR" && ((i = lt.get(r)) === null || i === void 0 ? void 0 : i.isEditable) == false && (!ue.ios || !this.children.some((s) => s instanceof Pi))) {
      let s = document.createElement("BR");
      s.cmIgnore = true, this.dom.appendChild(s);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20) return null;
    let e = 0, t;
    for (let i of this.children) {
      if (!(i instanceof Pi) || /[^ -~]/.test(i.text)) return null;
      let r = Kl(i.dom);
      if (r.length != 1) return null;
      e += r[0].width, t = r[0].height;
    }
    return e ? { lineHeight: this.dom.getBoundingClientRect().height, charWidth: e / this.length, textHeight: t } : null;
  }
  coordsAt(e, t) {
    let i = yy(this, e, t);
    if (!this.children.length && i && this.parent) {
      let { heightOracle: r } = this.parent.view.viewState, s = i.bottom - i.top;
      if (Math.abs(s - r.lineHeight) < 2 && r.textHeight < s) {
        let o = (s - r.textHeight) / 2;
        return { top: i.top + o, bottom: i.bottom - o, left: i.left, right: i.left };
      }
    }
    return i;
  }
  become(e) {
    return e instanceof Wt && this.children.length == 0 && e.children.length == 0 && Tc(this.attrs, e.attrs) && this.breakAfter == e.breakAfter;
  }
  covers() {
    return true;
  }
  static find(e, t) {
    for (let i = 0, r = 0; i < e.children.length; i++) {
      let s = e.children[i], o = r + s.length;
      if (o >= t) {
        if (s instanceof Wt) return s;
        if (o > t) break;
      }
      r = o + s.breakAfter;
    }
    return null;
  }
}
class kr extends lt {
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.deco = i, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, t, i, r, s, o) {
    return i && (!(i instanceof kr) || !this.widget.compare(i.widget) || e > 0 && s <= 0 || t < this.length && o <= 0) ? false : (this.length = e + (i ? i.length : 0) + (this.length - t), true);
  }
  domAtPos(e) {
    return e == 0 ? gn.before(this.dom) : gn.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let i = new kr(this.widget, t, this.deco);
    return i.breakAfter = this.breakAfter, i;
  }
  get children() {
    return dd;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : Qe.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof kr && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.deco = e.deco, this.breakAfter = e.breakAfter, true) : false;
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get isEditable() {
    return false;
  }
  get isWidget() {
    return true;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    return i || (this.widget instanceof nu ? null : of(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0));
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(e) {
    let { startSide: t, endSide: i } = this.deco;
    return t == i ? false : e < 0 ? t < 0 : i > 0;
  }
}
class nu extends Ni {
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
class Ol {
  constructor(e, t, i, r) {
    this.doc = e, this.pos = t, this.end = i, this.disallowBlockEffectsFor = r, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = true, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = t;
  }
  posCovered() {
    if (this.content.length == 0) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || e instanceof kr && e.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new Wt()), this.atCursorPos = true), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(Da(new vo(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(e && this.content.length && this.content[this.content.length - 1] instanceof kr) && this.getLine();
  }
  buildText(e, t, i) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: o, lineBreak: l, done: a } = this.cursor.next(this.skip);
        if (this.skip = 0, a) throw new Error("Ran out of text content when drawing inline views");
        if (l) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = true, e--;
          continue;
        } else this.text = o, this.textOff = 0;
      }
      let r = Math.min(this.text.length - this.textOff, e), s = Math.min(r, 512);
      this.flushBuffer(t.slice(t.length - i)), this.getLine().append(Da(new Pi(this.text.slice(this.textOff, this.textOff + s)), t), i), this.atCursorPos = true, this.textOff += s, e -= s, i = r <= s ? 0 : t.length;
    }
  }
  span(e, t, i, r) {
    this.buildText(t - e, i, r), this.pos = t, this.openStart < 0 && (this.openStart = r);
  }
  point(e, t, i, r, s, o) {
    if (this.disallowBlockEffectsFor[o] && i instanceof Qr) {
      if (i.block) throw new RangeError("Block decorations may not be specified via plugins");
      if (t > this.doc.lineAt(this.pos).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = t - e;
    if (i instanceof Qr) if (i.block) i.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new kr(i.widget || bo.block, l, i));
    else {
      let a = jr.create(i.widget || bo.inline, l, l ? 0 : i.startSide), f = this.atCursorPos && !a.isEditable && s <= r.length && (e < t || i.startSide > 0), h = !a.isEditable && (e < t || s > r.length || i.startSide <= 0), p = this.getLine();
      this.pendingBuffer == 2 && !f && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(r), f && (p.append(Da(new vo(1), r), s), s = r.length + Math.max(0, s - r.length)), p.append(Da(a, r), s), this.atCursorPos = h, this.pendingBuffer = h ? e < t || s > r.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = r.slice());
    }
    else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = t), this.openStart < 0 && (this.openStart = s);
  }
  static build(e, t, i, r, s) {
    let o = new Ol(e, t, i, s);
    return o.openEnd = ze.spans(r, t, i, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
}
function Da(n, e) {
  for (let t of e) n = new Ar(t, [n], n.length);
  return n;
}
class bo extends Ni {
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
bo.inline = new bo("span");
bo.block = new bo("div");
var gt = (function(n) {
  return n[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL", n;
})(gt || (gt = {}));
const Hs = gt.LTR, pd = gt.RTL;
function by(n) {
  let e = [];
  for (let t = 0; t < n.length; t++) e.push(1 << +n[t]);
  return e;
}
const jx = by("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), qx = by("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), iu = /* @__PURE__ */ Object.create(null), Gi = [];
for (let n of ["()", "[]", "{}"]) {
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  iu[e] = t, iu[t] = -e;
}
function wy(n) {
  return n <= 247 ? jx[n] : 1424 <= n && n <= 1524 ? 2 : 1536 <= n && n <= 1785 ? qx[n - 1536] : 1774 <= n && n <= 2220 ? 4 : 8192 <= n && n <= 8204 ? 256 : 64336 <= n && n <= 65023 ? 4 : 1;
}
const Ux = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class qr {
  get dir() {
    return this.level % 2 ? pd : Hs;
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
function xy(n, e) {
  if (n.length != e.length) return false;
  for (let t = 0; t < n.length; t++) {
    let i = n[t], r = e[t];
    if (i.from != r.from || i.to != r.to || i.direction != r.direction || !xy(i.inner, r.inner)) return false;
  }
  return true;
}
const ft = [];
function Gx(n, e, t, i, r) {
  for (let s = 0; s <= i.length; s++) {
    let o = s ? i[s - 1].to : e, l = s < i.length ? i[s].from : t, a = s ? 256 : r;
    for (let f = o, h = a, p = a; f < l; f++) {
      let m = wy(n.charCodeAt(f));
      m == 512 ? m = h : m == 8 && p == 4 && (m = 16), ft[f] = m == 4 ? 2 : m, m & 7 && (p = m), h = m;
    }
    for (let f = o, h = a, p = a; f < l; f++) {
      let m = ft[f];
      if (m == 128) f < l - 1 && h == ft[f + 1] && h & 24 ? m = ft[f] = h : ft[f] = 256;
      else if (m == 64) {
        let b = f + 1;
        for (; b < l && ft[b] == 64; ) b++;
        let S = f && h == 8 || b < t && ft[b] == 8 ? p == 1 ? 1 : 8 : 256;
        for (let M = f; M < b; M++) ft[M] = S;
        f = b - 1;
      } else m == 8 && p == 1 && (ft[f] = 1);
      h = m, m & 7 && (p = m);
    }
  }
}
function Yx(n, e, t, i, r) {
  let s = r == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let f = o ? i[o - 1].to : e, h = o < i.length ? i[o].from : t;
    for (let p = f, m, b, S; p < h; p++) if (b = iu[m = n.charCodeAt(p)]) if (b < 0) {
      for (let M = l - 3; M >= 0; M -= 3) if (Gi[M + 1] == -b) {
        let A = Gi[M + 2], _ = A & 2 ? r : A & 4 ? A & 1 ? s : r : 0;
        _ && (ft[p] = ft[Gi[M]] = _), l = M;
        break;
      }
    } else {
      if (Gi.length == 189) break;
      Gi[l++] = p, Gi[l++] = m, Gi[l++] = a;
    }
    else if ((S = ft[p]) == 2 || S == 1) {
      let M = S == r;
      a = M ? 0 : 1;
      for (let A = l - 3; A >= 0; A -= 3) {
        let _ = Gi[A + 2];
        if (_ & 2) break;
        if (M) Gi[A + 2] |= 2;
        else {
          if (_ & 4) break;
          Gi[A + 2] |= 4;
        }
      }
    }
  }
}
function Jx(n, e, t, i) {
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
        for (let S = h, M = r, A = M ? t[M - 1].to : n; S > a; ) S == A && (S = t[--M].from, A = M ? t[M - 1].to : n), ft[--S] = b;
        a = h;
      } else s = f, a++;
    }
  }
}
function ru(n, e, t, i, r, s, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == r % 2) for (let a = e, f = 0; a < t; ) {
    let h = true, p = false;
    if (f == s.length || a < s[f].from) {
      let M = ft[a];
      M != l && (h = false, p = M == 16);
    }
    let m = !h && l == 1 ? [] : null, b = h ? i : i + 1, S = a;
    e: for (; ; ) if (f < s.length && S == s[f].from) {
      if (p) break e;
      let M = s[f];
      if (!h) for (let A = M.to, _ = f + 1; ; ) {
        if (A == t) break e;
        if (_ < s.length && s[_].from == A) A = s[_++].to;
        else {
          if (ft[A] == l) break e;
          break;
        }
      }
      if (f++, m) m.push(M);
      else {
        M.from > a && o.push(new qr(a, M.from, b));
        let A = M.direction == Hs != !(b % 2);
        su(n, A ? i + 1 : i, r, M.inner, M.from, M.to, o), a = M.to;
      }
      S = M.to;
    } else {
      if (S == t || (h ? ft[S] != l : ft[S] == l)) break;
      S++;
    }
    m ? ru(n, a, S, i + 1, r, m, o) : a < S && o.push(new qr(a, S, b)), a = S;
  }
  else for (let a = t, f = s.length; a > e; ) {
    let h = true, p = false;
    if (!f || a > s[f - 1].to) {
      let M = ft[a - 1];
      M != l && (h = false, p = M == 16);
    }
    let m = !h && l == 1 ? [] : null, b = h ? i : i + 1, S = a;
    e: for (; ; ) if (f && S == s[f - 1].to) {
      if (p) break e;
      let M = s[--f];
      if (!h) for (let A = M.from, _ = f; ; ) {
        if (A == e) break e;
        if (_ && s[_ - 1].to == A) A = s[--_].from;
        else {
          if (ft[A - 1] == l) break e;
          break;
        }
      }
      if (m) m.push(M);
      else {
        M.to < a && o.push(new qr(M.to, a, b));
        let A = M.direction == Hs != !(b % 2);
        su(n, A ? i + 1 : i, r, M.inner, M.from, M.to, o), a = M.from;
      }
      S = M.from;
    } else {
      if (S == e || (h ? ft[S - 1] != l : ft[S - 1] == l)) break;
      S--;
    }
    m ? ru(n, S, a, i + 1, r, m, o) : S < a && o.push(new qr(S, a, b)), a = S;
  }
}
function su(n, e, t, i, r, s, o) {
  let l = e % 2 ? 2 : 1;
  Gx(n, r, s, i, l), Yx(n, r, s, i, l), Jx(r, s, i, l), ru(n, r, s, e, t, i, o);
}
function Qx(n, e, t) {
  if (!n) return [new qr(0, 0, e == pd ? 1 : 0)];
  if (e == Hs && !t.length && !Ux.test(n)) return Sy(n.length);
  if (t.length) for (; n.length > ft.length; ) ft[ft.length] = 256;
  let i = [], r = e == Hs ? 0 : 1;
  return su(n, r, r, t, 0, n.length, i), i;
}
function Sy(n) {
  return [new qr(0, n, 0)];
}
let ky = "";
function Xx(n, e, t, i, r) {
  var s;
  let o = i.head - n.from, l = qr.find(e, o, (s = i.bidiLevel) !== null && s !== void 0 ? s : -1, i.assoc), a = e[l], f = a.side(r, t);
  if (o == f) {
    let m = l += r ? 1 : -1;
    if (m < 0 || m >= e.length) return null;
    a = e[l = m], o = a.side(!r, t), f = a.side(r, t);
  }
  let h = cn(n.text, o, a.forward(r, t));
  (h < a.from || h > a.to) && (h = f), ky = n.text.slice(Math.min(o, h), Math.max(o, h));
  let p = l == (r ? e.length - 1 : 0) ? null : e[l + (r ? 1 : -1)];
  return p && h == f && p.level + (r ? 0 : 1) < a.level ? j.cursor(p.side(!r, t) + n.from, p.forward(r, t) ? 1 : -1, p.level) : j.cursor(h + n.from, a.forward(r, t) ? -1 : 1, a.level);
}
function Zx(n, e, t) {
  for (let i = e; i < t; i++) {
    let r = wy(n.charCodeAt(i));
    if (r == 1) return Hs;
    if (r == 2 || r == 4) return pd;
  }
  return Hs;
}
const Cy = be.define(), My = be.define(), Ay = be.define(), Ey = be.define(), ou = be.define(), Ty = be.define(), Oy = be.define(), gd = be.define(), md = be.define(), _y = be.define({ combine: (n) => n.some((e) => e) }), Ly = be.define({ combine: (n) => n.some((e) => e) }), Dy = be.define();
class ho {
  constructor(e, t = "nearest", i = "nearest", r = 5, s = 5, o = false) {
    this.range = e, this.y = t, this.x = i, this.yMargin = r, this.xMargin = s, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new ho(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new ho(j.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Ra = Ee.define({ map: (n, e) => n.map(e) }), Ry = Ee.define();
function Rn(n, e, t) {
  let i = n.facet(Ey);
  i.length ? i[0](e) : window.onerror && window.onerror(String(e), t, void 0, void 0, e) || (t ? console.error(t + ":", e) : console.error(e));
}
const wr = be.define({ combine: (n) => n.length ? n[0] : true });
let eS = 0;
const lo = be.define({ combine(n) {
  return n.filter((e, t) => {
    for (let i = 0; i < t; i++) if (n[i].plugin == e.plugin) return false;
    return true;
  });
} });
class kt {
  constructor(e, t, i, r, s) {
    this.id = e, this.create = t, this.domEventHandlers = i, this.domEventObservers = r, this.baseExtensions = s(this), this.extension = this.baseExtensions.concat(lo.of({ plugin: this, arg: void 0 }));
  }
  of(e) {
    return this.baseExtensions.concat(lo.of({ plugin: this, arg: e }));
  }
  static define(e, t) {
    const { eventHandlers: i, eventObservers: r, provide: s, decorations: o } = t || {};
    return new kt(eS++, e, i, r, (l) => {
      let a = [];
      return o && a.push(jl.of((f) => {
        let h = f.plugin(l);
        return h ? o(h) : ve.none;
      })), s && a.push(s(l)), a;
    });
  }
  static fromClass(e, t) {
    return kt.define((i, r) => new e(i, r), t);
  }
}
class qf {
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
          if (Rn(t.state, i, "CodeMirror plugin crashed"), this.value.destroy) try {
            this.value.destroy();
          } catch {
          }
          this.deactivate();
        }
      }
    } else if (this.spec) try {
      this.value = this.spec.plugin.create(e, this.spec.arg);
    } catch (t) {
      Rn(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
    }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy) try {
      this.value.destroy();
    } catch (i) {
      Rn(e.state, i, "CodeMirror plugin crashed");
    }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Py = be.define(), yd = be.define(), jl = be.define(), By = be.define(), ra = be.define(), Iy = be.define();
function tg(n, e) {
  let t = n.state.facet(Iy);
  if (!t.length) return t;
  let i = t.map((s) => s instanceof Function ? s(n) : s), r = [];
  return ze.spans(i, e.from, e.to, { point() {
  }, span(s, o, l, a) {
    let f = s - e.from, h = o - e.from, p = r;
    for (let m = l.length - 1; m >= 0; m--, a--) {
      let b = l[m].spec.bidiIsolate, S;
      if (b == null && (b = Zx(e.text, f, h)), a > 0 && p.length && (S = p[p.length - 1]).to == f && S.direction == b) S.to = h, p = S.inner;
      else {
        let M = { from: f, to: h, direction: b, inner: [] };
        p.push(M), p = M.inner;
      }
    }
  } }), r;
}
const Ny = be.define();
function vd(n) {
  let e = 0, t = 0, i = 0, r = 0;
  for (let s of n.state.facet(Ny)) {
    let o = s(n);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (t = Math.max(t, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (r = Math.max(r, o.bottom)));
  }
  return { left: e, right: t, top: i, bottom: r };
}
const gl = be.define();
class vi {
  constructor(e, t, i, r) {
    this.fromA = e, this.toA = t, this.fromB = i, this.toB = r;
  }
  join(e) {
    return new vi(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
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
    for (let r = 0, s = 0, o = 0, l = 0; ; r++) {
      let a = r == e.length ? null : e[r], f = o - l, h = a ? a.fromB : 1e9;
      for (; s < t.length && t[s] < h; ) {
        let p = t[s], m = t[s + 1], b = Math.max(l, p), S = Math.min(h, m);
        if (b <= S && new vi(b + f, S + f, b, S).addToSet(i), m > h) break;
        s += 2;
      }
      if (!a) return i;
      new vi(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), o = a.toA, l = a.toB;
    }
  }
}
class Oc {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = Ut.empty(this.startState.doc.length);
    for (let s of i) this.changes = this.changes.compose(s.changes);
    let r = [];
    this.changes.iterChangedRanges((s, o, l, a) => r.push(new vi(s, o, l, a))), this.changedRanges = r;
  }
  static create(e, t, i) {
    return new Oc(e, t, i);
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
class ng extends lt {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [false], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = ve.none, this.lastCompositionAfterCursor = false, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = false, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new Wt()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new vi(0, 0, 0, e.state.doc.length)], 0, null);
  }
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: f, toA: h }) => h < this.minWidthFrom || f > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let r = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? r = this.domChanged.newSel.head : !lS(e.changes, this.hasComposition) && !e.selectionSet && (r = e.state.selection.main.head));
    let s = r > -1 ? nS(this.view, e.changes, r) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: f, to: h } = this.hasComposition;
      i = new vi(f, h, e.changes.mapPos(f, -1), e.changes.mapPos(h, 1)).addToSet(i.slice());
    }
    this.hasComposition = s ? { from: s.range.fromB, to: s.range.toB } : null, (ue.ie || ue.chrome) && !s && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = true);
    let o = this.decorations, l = this.updateDeco(), a = sS(o, l, e.changes);
    return i = vi.extendWithRanges(i, a), !(this.flags & 7) && i.length == 0 ? false : (this.updateInner(i, e.startState.doc.length, s), e.transactions.length && (this.lastUpdate = Date.now()), true);
  }
  updateInner(e, t, i) {
    this.view.viewState.mustMeasureContent = true, this.updateChildren(e, t, i);
    let { observer: r } = this.view;
    r.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = ue.chrome || ue.ios ? { node: r.selectionRange.focusNode, written: false } : void 0;
      this.sync(this.view, o), this.flags &= -8, o && (o.written || r.selectionRange.focusNode != o.node) && (this.forceSelection = true), this.dom.style.height = "";
    }), this.markedForComposition.forEach((o) => o.flags &= -9);
    let s = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let o of this.children) o instanceof kr && o.widget instanceof nu && s.push(o.dom);
    r.updateGaps(s);
  }
  updateChildren(e, t, i) {
    let r = i ? i.range.addToSet(e.slice()) : e, s = this.childCursor(t);
    for (let o = r.length - 1; ; o--) {
      let l = o >= 0 ? r[o] : null;
      if (!l) break;
      let { fromA: a, toA: f, fromB: h, toB: p } = l, m, b, S, M;
      if (i && i.range.fromB < p && i.range.toB > h) {
        let B = Ol.build(this.view.state.doc, h, i.range.fromB, this.decorations, this.dynamicDecorationMap), W = Ol.build(this.view.state.doc, i.range.toB, p, this.decorations, this.dynamicDecorationMap);
        b = B.breakAtStart, S = B.openStart, M = W.openEnd;
        let H = this.compositionView(i);
        W.breakAtStart ? H.breakAfter = 1 : W.content.length && H.merge(H.length, H.length, W.content[0], false, W.openStart, 0) && (H.breakAfter = W.content[0].breakAfter, W.content.shift()), B.content.length && H.merge(0, 0, B.content[B.content.length - 1], true, 0, B.openEnd) && B.content.pop(), m = B.content.concat(H).concat(W.content);
      } else ({ content: m, breakAtStart: b, openStart: S, openEnd: M } = Ol.build(this.view.state.doc, h, p, this.decorations, this.dynamicDecorationMap));
      let { i: A, off: _ } = s.findPos(f, 1), { i: R, off: N } = s.findPos(a, -1);
      dy(this, R, N, A, _, m, b, S, M);
    }
    i && this.fixCompositionDOM(i);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions) for (let i of t.effects) i.is(Ry) && (this.editContextFormatting = i.value);
  }
  compositionView(e) {
    let t = new Pi(e.text.nodeValue);
    t.flags |= 8;
    for (let { deco: r } of e.marks) t = new Ar(r, [t], t.length);
    let i = new Wt();
    return i.append(t, 0), i;
  }
  fixCompositionDOM(e) {
    let t = (s, o) => {
      o.flags |= 8 | (o.children.some((a) => a.flags & 7) ? 1 : 0), this.markedForComposition.add(o);
      let l = lt.get(s);
      l && l != o && (l.dom = null), o.setDOM(s);
    }, i = this.childPos(e.range.fromB, 1), r = this.children[i.i];
    t(e.line, r);
    for (let s = e.marks.length - 1; s >= -1; s--) i = r.childPos(i.off, 1), r = r.children[i.i], t(s >= 0 ? e.marks[s].node : e.text, r);
  }
  updateSelection(e = false, t = false) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement, r = i == this.dom, s = !r && !(this.view.state.facet(wr) || this.dom.tabIndex > -1) && cc(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
    if (!(r || t || s)) return;
    let o = this.forceSelection;
    this.forceSelection = false;
    let l = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(l.anchor)), f = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (ue.gecko && l.empty && !this.hasComposition && tS(a)) {
      let p = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(p, a.node.childNodes[a.offset] || null)), a = f = new gn(p, 0), o = true;
    }
    let h = this.view.observer.selectionRange;
    (o || !h.focusNode || (!Tl(a.node, a.offset, h.anchorNode, h.anchorOffset) || !Tl(f.node, f.offset, h.focusNode, h.focusOffset)) && !this.suppressWidgetCursorChange(h, l)) && (this.view.observer.ignore(() => {
      ue.android && ue.chrome && this.dom.contains(h.focusNode) && oS(h.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: true }));
      let p = zl(this.view.root);
      if (p) if (l.empty) {
        if (ue.gecko) {
          let m = iS(a.node, a.offset);
          if (m && m != 3) {
            let b = (m == 1 ? fy : hy)(a.node, a.offset);
            b && (a = new gn(b.node, b.offset));
          }
        }
        p.collapse(a.node, a.offset), l.bidiLevel != null && p.caretBidiLevel !== void 0 && (p.caretBidiLevel = l.bidiLevel);
      } else if (p.extend) {
        p.collapse(a.node, a.offset);
        try {
          p.extend(f.node, f.offset);
        } catch {
        }
      } else {
        let m = document.createRange();
        l.anchor > l.head && ([a, f] = [f, a]), m.setEnd(f.node, f.offset), m.setStart(a.node, a.offset), p.removeAllRanges(), p.addRange(m);
      }
      s && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
    }), this.view.observer.setSelectionRange(a, f)), this.impreciseAnchor = a.precise ? null : new gn(h.anchorNode, h.anchorOffset), this.impreciseHead = f.precise ? null : new gn(h.focusNode, h.focusOffset);
  }
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && Tl(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition) return;
    let { view: e } = this, t = e.state.selection.main, i = zl(e.root), { anchorNode: r, anchorOffset: s } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify) return;
    let o = Wt.find(this, t.head);
    if (!o) return;
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length) return;
    let a = this.coordsAt(t.head, -1), f = this.coordsAt(t.head, 1);
    if (!a || !f || a.bottom > f.top) return;
    let h = this.domAtPos(t.head + t.assoc);
    i.collapse(h.node, h.offset), i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let p = e.observer.selectionRange;
    e.docView.posFromDOM(p.anchorNode, p.anchorOffset) != t.from && i.collapse(r, s);
  }
  moveToLine(e) {
    let t = this.dom, i;
    if (e.node != t) return e;
    for (let r = e.offset; !i && r < t.childNodes.length; r++) {
      let s = lt.get(t.childNodes[r]);
      s instanceof Wt && (i = s.domAtPos(0));
    }
    for (let r = e.offset - 1; !i && r >= 0; r--) {
      let s = lt.get(t.childNodes[r]);
      s instanceof Wt && (i = s.domAtPos(s.length));
    }
    return i ? new gn(i.node, i.offset, true) : e;
  }
  nearest(e) {
    for (let t = e; t; ) {
      let i = lt.get(t);
      if (i && i.rootView == this) return i;
      t = t.parentNode;
    }
    return null;
  }
  posFromDOM(e, t) {
    let i = this.nearest(e);
    if (!i) throw new RangeError("Trying to find position for a DOM position outside of the document");
    return i.localPosFromDOM(e, t) + i.posAtStart;
  }
  domAtPos(e) {
    let { i: t, off: i } = this.childCursor().findPos(e, -1);
    for (; t < this.children.length - 1; ) {
      let r = this.children[t];
      if (i < r.length || r instanceof Wt) break;
      t++, i = 0;
    }
    return this.children[t].domAtPos(i);
  }
  coordsAt(e, t) {
    let i = null, r = 0;
    for (let s = this.length, o = this.children.length - 1; o >= 0; o--) {
      let l = this.children[o], a = s - l.breakAfter, f = a - l.length;
      if (a < e) break;
      if (f <= e && (f < e || l.covers(-1)) && (a > e || l.covers(1)) && (!i || l instanceof Wt && !(i instanceof Wt && t >= 0))) i = l, r = f;
      else if (i && f == e && a == e && l instanceof kr && Math.abs(t) < 2) {
        if (l.deco.startSide < 0) break;
        o && (i = null);
      }
      s = f;
    }
    return i ? i.coordsAt(e - r, t) : null;
  }
  coordsForChar(e) {
    let { i: t, off: i } = this.childPos(e, 1), r = this.children[t];
    if (!(r instanceof Wt)) return null;
    for (; r.children.length; ) {
      let { i: l, off: a } = r.childPos(i, 1);
      for (; ; l++) {
        if (l == r.children.length) return null;
        if ((r = r.children[l]).length) break;
      }
      i = a;
    }
    if (!(r instanceof Pi)) return null;
    let s = cn(r.text, i);
    if (s == i) return null;
    let o = Fs(r.dom, i, s).getClientRects();
    for (let l = 0; l < o.length; l++) {
      let a = o[l];
      if (l == o.length - 1 || a.top < a.bottom && a.left < a.right) return a;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: i, to: r } = e, s = this.view.contentDOM.clientWidth, o = s > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == gt.LTR;
    for (let f = 0, h = 0; h < this.children.length; h++) {
      let p = this.children[h], m = f + p.length;
      if (m > r) break;
      if (f >= i) {
        let b = p.dom.getBoundingClientRect();
        if (t.push(b.height), o) {
          let S = p.dom.lastChild, M = S ? Kl(S) : [];
          if (M.length) {
            let A = M[M.length - 1], _ = a ? A.right - b.left : b.right - A.left;
            _ > l && (l = _, this.minWidth = s, this.minWidthFrom = f, this.minWidthTo = m);
          }
        }
      }
      f = m + p.breakAfter;
    }
    return t;
  }
  textDirectionAt(e) {
    let { i: t } = this.childPos(e, 1);
    return getComputedStyle(this.children[t].dom).direction == "rtl" ? gt.RTL : gt.LTR;
  }
  measureTextSize() {
    for (let s of this.children) if (s instanceof Wt) {
      let o = s.measureTextSize();
      if (o) return o;
    }
    let e = document.createElement("div"), t, i, r;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let s = Kl(e.firstChild)[0];
      t = e.getBoundingClientRect().height, i = s ? s.width / 27 : 7, r = s ? s.height : t, e.remove();
    }), { lineHeight: t, charWidth: i, textHeight: r };
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new uy(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, r = 0; ; r++) {
      let s = r == t.viewports.length ? null : t.viewports[r], o = s ? s.from - 1 : this.length;
      if (o > i) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(ve.replace({ widget: new nu(l), block: true, inclusive: true, isBlockGap: true }).range(i, o));
      }
      if (!s) break;
      i = s.to + 1;
    }
    return ve.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(jl).map((s) => (this.dynamicDecorationMap[e++] = typeof s == "function") ? s(this.view) : s), i = false, r = this.view.state.facet(By).map((s, o) => {
      let l = typeof s == "function";
      return l && (i = true), l ? s(this.view) : s;
    });
    for (r.length && (this.dynamicDecorationMap[e++] = i, t.push(ze.join(r))), this.decorations = [this.editContextFormatting, ...t, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; e < this.decorations.length; ) this.dynamicDecorationMap[e++] = false;
    return this.decorations;
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let f = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = f.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let f of this.view.state.facet(Dy)) try {
      if (f(this.view, e.range, e)) return true;
    } catch (h) {
      Rn(this.view.state, h, "scroll handler");
    }
    let { range: t } = e, i = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1), r;
    if (!i) return;
    !t.empty && (r = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (i = { left: Math.min(i.left, r.left), top: Math.min(i.top, r.top), right: Math.max(i.right, r.right), bottom: Math.max(i.bottom, r.bottom) });
    let s = vd(this.view), o = { left: i.left - s.left, top: i.top - s.top, right: i.right + s.right, bottom: i.bottom + s.bottom }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    Px(this.view.scrollDOM, o, t.head < t.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, a), -a), this.view.textDirection == gt.LTR);
  }
}
function tS(n) {
  return n.node.nodeType == 1 && n.node.firstChild && (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") && (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false");
}
function Fy(n, e) {
  let t = n.observer.selectionRange;
  if (!t.focusNode) return null;
  let i = fy(t.focusNode, t.focusOffset), r = hy(t.focusNode, t.focusOffset), s = i || r;
  if (r && i && r.node != i.node) {
    let l = lt.get(r.node);
    if (!l || l instanceof Pi && l.text != r.node.nodeValue) s = r;
    else if (n.docView.lastCompositionAfterCursor) {
      let a = lt.get(i.node);
      !a || a instanceof Pi && a.text != i.node.nodeValue || (s = r);
    }
  }
  if (n.docView.lastCompositionAfterCursor = s != i, !s) return null;
  let o = e - s.offset;
  return { from: o, to: o + s.node.nodeValue.length, node: s.node };
}
function nS(n, e, t) {
  let i = Fy(n, t);
  if (!i) return null;
  let { node: r, from: s, to: o } = i, l = r.nodeValue;
  if (/[\n\r]/.test(l) || n.state.doc.sliceString(i.from, i.to) != l) return null;
  let a = e.invertedDesc, f = new vi(a.mapPos(s), a.mapPos(o), s, o), h = [];
  for (let p = r.parentNode; ; p = p.parentNode) {
    let m = lt.get(p);
    if (m instanceof Ar) h.push({ node: p, deco: m.mark });
    else {
      if (m instanceof Wt || p.nodeName == "DIV" && p.parentNode == n.contentDOM) return { range: f, text: r, marks: h, line: p };
      if (p != n.contentDOM) h.push({ node: p, deco: new na({ inclusive: true, attributes: zx(p), tagName: p.tagName.toLowerCase() }) });
      else return null;
    }
  }
}
function iS(n, e) {
  return n.nodeType != 1 ? 0 : (e && n.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < n.childNodes.length && n.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let rS = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    fc(e, t, this.changes);
  }
  comparePoint(e, t) {
    fc(e, t, this.changes);
  }
  boundChange(e) {
    fc(e, e, this.changes);
  }
};
function sS(n, e, t) {
  let i = new rS();
  return ze.compare(n, e, t, i), i.changes;
}
function oS(n, e) {
  for (let t = n; t && t != e; t = t.assignedSlot || t.parentNode) if (t.nodeType == 1 && t.contentEditable == "false") return true;
  return false;
}
function lS(n, e) {
  let t = false;
  return e && n.iterChangedRanges((i, r) => {
    i < e.to && r > e.from && (t = true);
  }), t;
}
function aS(n, e, t = 1) {
  let i = n.charCategorizer(e), r = n.doc.lineAt(e), s = e - r.from;
  if (r.length == 0) return j.cursor(e);
  s == 0 ? t = 1 : s == r.length && (t = -1);
  let o = s, l = s;
  t < 0 ? o = cn(r.text, s, false) : l = cn(r.text, s);
  let a = i(r.text.slice(o, l));
  for (; o > 0; ) {
    let f = cn(r.text, o, false);
    if (i(r.text.slice(f, o)) != a) break;
    o = f;
  }
  for (; l < r.length; ) {
    let f = cn(r.text, l);
    if (i(r.text.slice(l, f)) != a) break;
    l = f;
  }
  return j.range(o + r.from, l + r.from);
}
function cS(n, e) {
  return e.left > n ? e.left - n : Math.max(0, n - e.right);
}
function fS(n, e) {
  return e.top > n ? e.top - n : Math.max(0, n - e.bottom);
}
function Uf(n, e) {
  return n.top < e.bottom - 1 && n.bottom > e.top + 1;
}
function ig(n, e) {
  return e < n.top ? { top: e, left: n.left, right: n.right, bottom: n.bottom } : n;
}
function rg(n, e) {
  return e > n.bottom ? { top: n.top, left: n.left, right: n.right, bottom: e } : n;
}
function lu(n, e, t) {
  let i, r, s, o, l = false, a, f, h, p;
  for (let S = n.firstChild; S; S = S.nextSibling) {
    let M = Kl(S);
    for (let A = 0; A < M.length; A++) {
      let _ = M[A];
      r && Uf(r, _) && (_ = ig(rg(_, r.bottom), r.top));
      let R = cS(e, _), N = fS(t, _);
      if (R == 0 && N == 0) return S.nodeType == 3 ? sg(S, e, t) : lu(S, e, t);
      (!i || o > N || o == N && s > R) && (i = S, r = _, s = R, o = N, l = R ? e < _.left ? A > 0 : A < M.length - 1 : true), R == 0 ? t > _.bottom && (!h || h.bottom < _.bottom) ? (a = S, h = _) : t < _.top && (!p || p.top > _.top) && (f = S, p = _) : h && Uf(h, _) ? h = rg(h, _.bottom) : p && Uf(p, _) && (p = ig(p, _.top));
    }
  }
  if (h && h.bottom >= t ? (i = a, r = h) : p && p.top <= t && (i = f, r = p), !i) return { node: n, offset: 0 };
  let m = Math.max(r.left, Math.min(r.right, e));
  if (i.nodeType == 3) return sg(i, m, t);
  if (l && i.contentEditable != "false") return lu(i, m, t);
  let b = Array.prototype.indexOf.call(n.childNodes, i) + (e >= (r.left + r.right) / 2 ? 1 : 0);
  return { node: n, offset: b };
}
function sg(n, e, t) {
  let i = n.nodeValue.length, r = -1, s = 1e9, o = 0;
  for (let l = 0; l < i; l++) {
    let a = Fs(n, l, l + 1).getClientRects();
    for (let f = 0; f < a.length; f++) {
      let h = a[f];
      if (h.top == h.bottom) continue;
      o || (o = e - h.left);
      let p = (h.top > t ? h.top - t : t - h.bottom) - 1;
      if (h.left - 1 <= e && h.right + 1 >= e && p < s) {
        let m = e >= (h.left + h.right) / 2, b = m;
        if ((ue.chrome || ue.gecko) && Fs(n, l).getBoundingClientRect().left == h.right && (b = !m), p <= 0) return { node: n, offset: l + (b ? 1 : 0) };
        r = l + (b ? 1 : 0), s = p;
      }
    }
  }
  return { node: n, offset: r > -1 ? r : o > 0 ? n.nodeValue.length : 0 };
}
function Hy(n, e, t, i = -1) {
  var r, s;
  let o = n.contentDOM.getBoundingClientRect(), l = o.top + n.viewState.paddingTop, a, { docHeight: f } = n.viewState, { x: h, y: p } = e, m = p - l;
  if (m < 0) return 0;
  if (m > f) return n.state.doc.length;
  for (let B = n.viewState.heightOracle.textHeight / 2, W = false; a = n.elementAtHeight(m), a.type != Bn.Text; ) for (; m = i > 0 ? a.bottom + B : a.top - B, !(m >= 0 && m <= f); ) {
    if (W) return t ? null : 0;
    W = true, i = -i;
  }
  p = l + m;
  let b = a.from;
  if (b < n.viewport.from) return n.viewport.from == 0 ? 0 : t ? null : og(n, o, a, h, p);
  if (b > n.viewport.to) return n.viewport.to == n.state.doc.length ? n.state.doc.length : t ? null : og(n, o, a, h, p);
  let S = n.dom.ownerDocument, M = n.root.elementFromPoint ? n.root : S, A = M.elementFromPoint(h, p);
  A && !n.contentDOM.contains(A) && (A = null), A || (h = Math.max(o.left + 1, Math.min(o.right - 1, h)), A = M.elementFromPoint(h, p), A && !n.contentDOM.contains(A) && (A = null));
  let _, R = -1;
  if (A && ((r = n.docView.nearest(A)) === null || r === void 0 ? void 0 : r.isEditable) != false) {
    if (S.caretPositionFromPoint) {
      let B = S.caretPositionFromPoint(h, p);
      B && ({ offsetNode: _, offset: R } = B);
    } else if (S.caretRangeFromPoint) {
      let B = S.caretRangeFromPoint(h, p);
      B && ({ startContainer: _, startOffset: R } = B);
    }
    _ && (!n.contentDOM.contains(_) || ue.safari && hS(_, R, h) || ue.chrome && uS(_, R, h)) && (_ = void 0), _ && (R = Math.min(ur(_), R));
  }
  if (!_ || !n.docView.dom.contains(_)) {
    let B = Wt.find(n.docView, b);
    if (!B) return m > a.top + a.height / 2 ? a.to : a.from;
    ({ node: _, offset: R } = lu(B.dom, h, p));
  }
  let N = n.docView.nearest(_);
  if (!N) return null;
  if (N.isWidget && ((s = N.dom) === null || s === void 0 ? void 0 : s.nodeType) == 1) {
    let B = N.dom.getBoundingClientRect();
    return e.y < B.top || e.y <= B.bottom && e.x <= (B.left + B.right) / 2 ? N.posAtStart : N.posAtEnd;
  } else return N.localPosFromDOM(_, R) + N.posAtStart;
}
function og(n, e, t, i, r) {
  let s = Math.round((i - e.left) * n.defaultCharacterWidth);
  if (n.lineWrapping && t.height > n.defaultLineHeight * 1.5) {
    let l = n.viewState.heightOracle.textHeight, a = Math.floor((r - t.top - (n.defaultLineHeight - l) * 0.5) / l);
    s += a * n.viewState.heightOracle.lineLength;
  }
  let o = n.state.sliceDoc(t.from, t.to);
  return t.from + qh(o, s, n.state.tabSize);
}
function Vy(n, e, t) {
  let i, r = n;
  if (n.nodeType != 3 || e != (i = n.nodeValue.length)) return false;
  for (; ; ) {
    let s = r.nextSibling;
    if (s) {
      if (s.nodeName == "BR") break;
      return false;
    } else {
      let o = r.parentNode;
      if (!o || o.nodeName == "DIV") break;
      r = o;
    }
  }
  return Fs(n, i - 1, i).getBoundingClientRect().right > t;
}
function hS(n, e, t) {
  return Vy(n, e, t);
}
function uS(n, e, t) {
  if (e != 0) return Vy(n, e, t);
  for (let r = n; ; ) {
    let s = r.parentNode;
    if (!s || s.nodeType != 1 || s.firstChild != r) return false;
    if (s.classList.contains("cm-line")) break;
    r = s;
  }
  let i = n.nodeType == 1 ? n.getBoundingClientRect() : Fs(n, 0, Math.max(n.nodeValue.length, 1)).getBoundingClientRect();
  return t - i.left > 5;
}
function au(n, e, t) {
  let i = n.lineBlockAt(e);
  if (Array.isArray(i.type)) {
    let r;
    for (let s of i.type) {
      if (s.from > e) break;
      if (!(s.to < e)) {
        if (s.from < e && s.to > e) return s;
        (!r || s.type == Bn.Text && (r.type != s.type || (t < 0 ? s.from < e : s.to > e))) && (r = s);
      }
    }
    return r || i;
  }
  return i;
}
function dS(n, e, t, i) {
  let r = au(n, e.head, e.assoc || -1), s = !i || r.type != Bn.Text || !(n.lineWrapping || r.widgetLineBreaks) ? null : n.coordsAtPos(e.assoc < 0 && e.head > r.from ? e.head - 1 : e.head);
  if (s) {
    let o = n.dom.getBoundingClientRect(), l = n.textDirectionAt(r.from), a = n.posAtCoords({ x: t == (l == gt.LTR) ? o.right - 1 : o.left + 1, y: (s.top + s.bottom) / 2 });
    if (a != null) return j.cursor(a, t ? -1 : 1);
  }
  return j.cursor(t ? r.to : r.from, t ? -1 : 1);
}
function lg(n, e, t, i) {
  let r = n.state.doc.lineAt(e.head), s = n.bidiSpans(r), o = n.textDirectionAt(r.from);
  for (let l = e, a = null; ; ) {
    let f = Xx(r, s, o, l, t), h = ky;
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
function pS(n, e, t) {
  let i = n.state.charCategorizer(e), r = i(t);
  return (s) => {
    let o = i(s);
    return r == St.Space && (r = o), r == o;
  };
}
function gS(n, e, t, i) {
  let r = e.head, s = t ? 1 : -1;
  if (r == (t ? n.state.doc.length : 0)) return j.cursor(r, e.assoc);
  let o = e.goalColumn, l, a = n.contentDOM.getBoundingClientRect(), f = n.coordsAtPos(r, e.assoc || -1), h = n.documentTop;
  if (f) o == null && (o = f.left - a.left), l = s < 0 ? f.top : f.bottom;
  else {
    let b = n.viewState.lineBlockAt(r);
    o == null && (o = Math.min(a.right - a.left, n.defaultCharacterWidth * (r - b.from))), l = (s < 0 ? b.top : b.bottom) + h;
  }
  let p = a.left + o, m = i ?? n.viewState.heightOracle.textHeight >> 1;
  for (let b = 0; ; b += 10) {
    let S = l + (m + b) * s, M = Hy(n, { x: p, y: S }, false, s);
    if (S < a.top || S > a.bottom || (s < 0 ? M < r : M > r)) {
      let A = n.docView.coordsForChar(M), _ = !A || S < A.top ? -1 : 1;
      return j.cursor(M, _, void 0, o);
    }
  }
}
function _l(n, e, t) {
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
function Wy(n, e) {
  let t = null;
  for (let i = 0; i < e.ranges.length; i++) {
    let r = e.ranges[i], s = null;
    if (r.empty) {
      let o = _l(n, r.from, 0);
      o != r.from && (s = j.cursor(o, -1));
    } else {
      let o = _l(n, r.from, -1), l = _l(n, r.to, 1);
      (o != r.from || l != r.to) && (s = j.range(r.from == r.anchor ? o : l, r.from == r.head ? o : l));
    }
    s && (t || (t = e.ranges.slice()), t[i] = s);
  }
  return t ? j.create(t, e.mainIndex) : e;
}
function Gf(n, e, t) {
  let i = _l(n.state.facet(ra).map((r) => r(n)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : j.cursor(i, i < t.from ? 1 : -1);
}
const ml = "\uFFFF";
class mS {
  constructor(e, t) {
    this.points = e, this.text = "", this.lineSeparator = t.facet($e.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += ml;
  }
  readRange(e, t) {
    if (!e) return this;
    let i = e.parentNode;
    for (let r = e; ; ) {
      this.findPointBefore(i, r);
      let s = this.text.length;
      this.readNode(r);
      let o = r.nextSibling;
      if (o == t) break;
      let l = lt.get(r), a = lt.get(o);
      (l && a ? l.breakAfter : (l ? l.breakAfter : Ec(r)) || Ec(o) && (r.nodeName != "BR" || r.cmIgnore) && this.text.length > s) && !vS(o, t) && this.lineBreak(), r = o;
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
    if (e.cmIgnore) return;
    let t = lt.get(e), i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let r = i.iter(); !r.next().done; ) r.lineBreak ? this.lineBreak() : this.append(r.value);
    } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let i of this.points) i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let i of this.points) (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (yS(e, i.node, i.offset) ? t : 0));
  }
}
function yS(n, e, t) {
  for (; ; ) {
    if (!e || t < ur(e)) return false;
    if (e == n) return true;
    t = Ns(e) + 1, e = e.parentNode;
  }
}
function vS(n, e) {
  let t;
  for (; !(n == e || !n); n = n.nextSibling) {
    let i = lt.get(n);
    if (!((i == null ? void 0 : i.isWidget) || n.cmIgnore)) return false;
    i && (t || (t = [])).push(i);
  }
  if (t) for (let i of t) {
    let r = i.overrideDOMText;
    if (r == null ? void 0 : r.length) return false;
  }
  return true;
}
class ag {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class bS {
  constructor(e, t, i, r) {
    this.typeOver = r, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: s, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1) this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, i, 0))) {
      let l = s || o ? [] : xS(e), a = new mS(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = SS(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = s && s.node == l.focusNode && s.offset == l.focusOffset || !Zh(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), f = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !Zh(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset), h = e.viewport;
      if ((ue.ios || ue.chrome) && e.state.selection.main.empty && a != f && (h.from > 0 || h.to < e.state.doc.length)) {
        let p = Math.min(a, f), m = Math.max(a, f), b = h.from - p, S = h.to - m;
        (b == 0 || b == 1 || p == 0) && (S == 0 || S == -1 || m == e.state.doc.length) && (a = 0, f = e.state.doc.length);
      }
      this.newSel = j.single(f, a);
    }
  }
}
function $y(n, e) {
  let t, { newSel: i } = e, r = n.state.selection.main, s = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, a = r.from, f = null;
    (s === 8 || ue.android && e.text.length < l - o) && (a = r.to, f = "end");
    let h = zy(n.state.doc.sliceString(o, l, ml), e.text, a - o, f);
    h && (ue.chrome && s == 13 && h.toB == h.from + 2 && e.text.slice(h.from, h.toB) == ml + ml && h.toB--, t = { from: o + h.from, to: o + h.toA, insert: Qe.of(e.text.slice(h.from, h.toB).split(ml)) });
  } else i && (!n.hasFocus && n.state.facet(wr) || i.main.eq(r)) && (i = null);
  if (!t && !i) return false;
  if (!t && e.typeOver && !r.empty && i && i.main.empty ? t = { from: r.from, to: r.to, insert: n.state.doc.slice(r.from, r.to) } : (ue.mac || ue.android) && t && t.from == t.to && t.from == r.head - 1 && /^\. ?$/.test(t.insert.toString()) && n.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = j.single(i.main.anchor - 1, i.main.head - 1)), t = { from: t.from, to: t.to, insert: Qe.of([t.insert.toString().replace(".", " ")]) }) : t && t.from >= r.from && t.to <= r.to && (t.from != r.from || t.to != r.to) && r.to - r.from - (t.to - t.from) <= 4 ? t = { from: r.from, to: r.to, insert: n.state.doc.slice(r.from, t.from).append(t.insert).append(n.state.doc.slice(t.to, r.to)) } : ue.chrome && t && t.from == t.to && t.from == r.head && t.insert.toString() == `
 ` && n.lineWrapping && (i && (i = j.single(i.main.anchor - 1, i.main.head - 1)), t = { from: r.from, to: r.to, insert: Qe.of([" "]) }), t) return bd(n, t, i, s);
  if (i && !i.main.eq(r)) {
    let o = false, l = "select";
    return n.inputState.lastSelectionTime > Date.now() - 50 && (n.inputState.lastSelectionOrigin == "select" && (o = true), l = n.inputState.lastSelectionOrigin, l == "select.pointer" && (i = Wy(n.state.facet(ra).map((a) => a(n)), i))), n.dispatch({ selection: i, scrollIntoView: o, userEvent: l }), true;
  } else return false;
}
function bd(n, e, t, i = -1) {
  if (ue.ios && n.inputState.flushIOSKey(e)) return true;
  let r = n.state.selection.main;
  if (ue.android && (e.to == r.to && (e.from == r.from || e.from == r.from - 1 && n.state.sliceDoc(e.from, r.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && fo(n.contentDOM, "Enter", 13) || (e.from == r.from - 1 && e.to == r.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > r.head) && fo(n.contentDOM, "Backspace", 8) || e.from == r.from && e.to == r.to + 1 && e.insert.length == 0 && fo(n.contentDOM, "Delete", 46))) return true;
  let s = e.insert.toString();
  n.inputState.composing >= 0 && n.inputState.composing++;
  let o, l = () => o || (o = wS(n, e, t));
  return n.state.facet(Ty).some((a) => a(n, e.from, e.to, s, l)) || n.dispatch(l()), true;
}
function wS(n, e, t) {
  let i, r = n.state, s = r.selection.main, o = -1;
  if (e.from == e.to && e.from < s.from || e.from > s.to) {
    let a = e.from < s.from ? -1 : 1, f = a < 0 ? s.from : s.to, h = _l(r.facet(ra).map((p) => p(n)), f, a);
    e.from == h && (o = h);
  }
  if (o > -1) i = { changes: e, selection: j.cursor(e.from + e.insert.length, -1) };
  else if (e.from >= s.from && e.to <= s.to && e.to - e.from >= (s.to - s.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && n.inputState.composing < 0) {
    let a = s.from < e.from ? r.sliceDoc(s.from, e.from) : "", f = s.to > e.to ? r.sliceDoc(e.to, s.to) : "";
    i = r.replaceSelection(n.state.toText(a + e.insert.sliceString(0, void 0, n.state.lineBreak) + f));
  } else {
    let a = r.changes(e), f = t && t.main.to <= a.newLength ? t.main : void 0;
    if (r.selection.ranges.length > 1 && n.inputState.composing >= 0 && e.to <= s.to && e.to >= s.to - 10) {
      let h = n.state.sliceDoc(e.from, e.to), p, m = t && Fy(n, t.main.head);
      if (m) {
        let M = e.insert.length - (e.to - e.from);
        p = { from: m.from, to: m.to - M };
      } else p = n.state.doc.lineAt(s.head);
      let b = s.to - e.to, S = s.to - s.from;
      i = r.changeByRange((M) => {
        if (M.from == s.from && M.to == s.to) return { changes: a, range: f || M.map(a) };
        let A = M.to - b, _ = A - h.length;
        if (M.to - M.from != S || n.state.sliceDoc(_, A) != h || M.to >= p.from && M.from <= p.to) return { range: M };
        let R = r.changes({ from: _, to: A, insert: e.insert }), N = M.to - s.to;
        return { changes: R, range: f ? j.range(Math.max(0, f.anchor + N), Math.max(0, f.head + N)) : M.map(R) };
      });
    } else i = { changes: a, selection: f && r.selection.replaceRange(f) };
  }
  let l = "input.type";
  return (n.composing || n.inputState.compositionPendingChange && n.inputState.compositionEndedAt > Date.now() - 50) && (n.inputState.compositionPendingChange = false, l += ".compose", n.inputState.compositionFirstChange && (l += ".start", n.inputState.compositionFirstChange = false)), r.update(i, { userEvent: l, scrollIntoView: true });
}
function zy(n, e, t, i) {
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
function xS(n) {
  let e = [];
  if (n.root.activeElement != n.contentDOM) return e;
  let { anchorNode: t, anchorOffset: i, focusNode: r, focusOffset: s } = n.observer.selectionRange;
  return t && (e.push(new ag(t, i)), (r != t || s != i) && e.push(new ag(r, s))), e;
}
function SS(n, e) {
  if (n.length == 0) return null;
  let t = n[0].pos, i = n.length == 2 ? n[1].pos : t;
  return t > -1 && i > -1 ? j.single(t + e, i + e) : null;
}
class kS {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = false, this.compositionPendingChange = false, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, ue.safari && e.contentDOM.addEventListener("input", () => null), ue.gecko && HS(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !LS(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
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
    let t = CS(e), i = this.handlers, r = this.view.contentDOM;
    for (let s in t) if (s != "scroll") {
      let o = !t[s].handlers.length, l = i[s];
      l && o != !l.handlers.length && (r.removeEventListener(s, this.handleEvent), l = null), l || r.addEventListener(s, this.handleEvent, { passive: o });
    }
    for (let s in i) s != "scroll" && !t[s] && r.removeEventListener(s, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return true;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && jy.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), ue.android && ue.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8)) return this.view.observer.delayAndroidKey(e.key, e.keyCode), true;
    let t;
    return ue.ios && !e.synthetic && !e.altKey && !e.metaKey && ((t = Ky.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || MS.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), true) : (e.keyCode != 229 && this.view.observer.forceFlush(), false);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? false : (this.pendingIOSKey = void 0, fo(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return !/^key/.test(e.type) || e.synthetic ? false : this.composing > 0 ? true : ue.safari && !ue.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = false, true) : false;
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
function cg(n, e) {
  return (t, i) => {
    try {
      return e.call(n, i, t);
    } catch (r) {
      Rn(t.state, r);
    }
  };
}
function CS(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of n) {
    let r = i.spec, s = r && r.plugin.domEventHandlers, o = r && r.plugin.domEventObservers;
    if (s) for (let l in s) {
      let a = s[l];
      a && t(l).handlers.push(cg(i.value, a));
    }
    if (o) for (let l in o) {
      let a = o[l];
      a && t(l).observers.push(cg(i.value, a));
    }
  }
  for (let i in Bi) t(i).handlers.push(Bi[i]);
  for (let i in wi) t(i).observers.push(wi[i]);
  return e;
}
const Ky = [{ key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" }, { key: "Enter", keyCode: 13, inputType: "insertParagraph" }, { key: "Enter", keyCode: 13, inputType: "insertLineBreak" }, { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }], MS = "dthko", jy = [16, 17, 18, 20, 91, 92, 224, 225], Pa = 6;
function Ba(n) {
  return Math.max(0, n) * 0.7 + 8;
}
function AS(n, e) {
  return Math.max(Math.abs(n.clientX - e.clientX), Math.abs(n.clientY - e.clientY));
}
class ES {
  constructor(e, t, i, r) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = r, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = Bx(e.contentDOM), this.atoms = e.state.facet(ra).map((o) => o(e));
    let s = e.contentDOM.ownerDocument;
    s.addEventListener("mousemove", this.move = this.move.bind(this)), s.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet($e.allowMultipleSelections) && TS(e, t), this.dragging = _S(e, t) && Gy(t) == 1 ? null : false;
  }
  start(e) {
    this.dragging === false && this.select(e);
  }
  move(e) {
    if (e.buttons == 0) return this.destroy();
    if (this.dragging || this.dragging == null && AS(this.startEvent, e) < 10) return;
    this.select(this.lastEvent = e);
    let t = 0, i = 0, r = 0, s = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: r, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: s, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = vd(this.view);
    e.clientX - a.left <= r + Pa ? t = -Ba(r - e.clientX) : e.clientX + a.right >= o - Pa && (t = Ba(e.clientX - o)), e.clientY - a.top <= s + Pa ? i = -Ba(s - e.clientY) : e.clientY + a.bottom >= l - Pa && (i = Ba(e.clientY - l)), this.setScrollSpeed(t, i);
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
    let { view: t } = this, i = Wy(this.atoms, this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection, this.dragging === false)) && this.view.dispatch({ selection: i, userEvent: "select.pointer" }), this.mustSelect = false;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function TS(n, e) {
  let t = n.state.facet(Cy);
  return t.length ? t[0](e) : ue.mac ? e.metaKey : e.ctrlKey;
}
function OS(n, e) {
  let t = n.state.facet(My);
  return t.length ? t[0](e) : ue.mac ? !e.altKey : !e.ctrlKey;
}
function _S(n, e) {
  let { main: t } = n.state.selection;
  if (t.empty) return false;
  let i = zl(n.root);
  if (!i || i.rangeCount == 0) return true;
  let r = i.getRangeAt(0).getClientRects();
  for (let s = 0; s < r.length; s++) {
    let o = r[s];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY) return true;
  }
  return false;
}
function LS(n, e) {
  if (!e.bubbles) return true;
  if (e.defaultPrevented) return false;
  for (let t = e.target, i; t != n.contentDOM; t = t.parentNode) if (!t || t.nodeType == 11 || (i = lt.get(t)) && i.ignoreEvent(e)) return false;
  return true;
}
const Bi = /* @__PURE__ */ Object.create(null), wi = /* @__PURE__ */ Object.create(null), qy = ue.ie && ue.ie_version < 15 || ue.ios && ue.webkit_version < 604;
function DS(n) {
  let e = n.dom.parentNode;
  if (!e) return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    n.focus(), t.remove(), Uy(n, t.value);
  }, 50);
}
function lf(n, e, t) {
  for (let i of n.facet(e)) t = i(t, n);
  return t;
}
function Uy(n, e) {
  e = lf(n.state, gd, e);
  let { state: t } = n, i, r = 1, s = t.toText(e), o = s.lines == t.selection.ranges.length;
  if (cu != null && t.selection.ranges.every((a) => a.empty) && cu == s.toString()) {
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
wi.scroll = (n) => {
  n.inputState.lastScrollTop = n.scrollDOM.scrollTop, n.inputState.lastScrollLeft = n.scrollDOM.scrollLeft;
};
Bi.keydown = (n, e) => (n.inputState.setSelectionOrigin("select"), e.keyCode == 27 && n.inputState.tabFocusMode != 0 && (n.inputState.tabFocusMode = Date.now() + 2e3), false);
wi.touchstart = (n, e) => {
  n.inputState.lastTouchTime = Date.now(), n.inputState.setSelectionOrigin("select.pointer");
};
wi.touchmove = (n) => {
  n.inputState.setSelectionOrigin("select.pointer");
};
Bi.mousedown = (n, e) => {
  if (n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3) return false;
  let t = null;
  for (let i of n.state.facet(Ay)) if (t = i(n, e), t) break;
  if (!t && e.button == 0 && (t = BS(n, e)), t) {
    let i = !n.hasFocus;
    n.inputState.startMouseSelection(new ES(n, e, t, i)), i && n.observer.ignore(() => {
      ly(n.contentDOM);
      let s = n.root.activeElement;
      s && !s.contains(n.contentDOM) && s.blur();
    });
    let r = n.inputState.mouseSelection;
    if (r) return r.start(e), r.dragging === false;
  } else n.inputState.setSelectionOrigin("select.pointer");
  return false;
};
function fg(n, e, t, i) {
  if (i == 1) return j.cursor(e, t);
  if (i == 2) return aS(n.state, e, t);
  {
    let r = Wt.find(n.docView, e), s = n.state.doc.lineAt(r ? r.posAtEnd : e), o = r ? r.posAtStart : s.from, l = r ? r.posAtEnd : s.to;
    return l < n.state.doc.length && l == s.to && l++, j.range(o, l);
  }
}
let hg = (n, e, t) => e >= t.top && e <= t.bottom && n >= t.left && n <= t.right;
function RS(n, e, t, i) {
  let r = Wt.find(n.docView, e);
  if (!r) return 1;
  let s = e - r.posAtStart;
  if (s == 0) return 1;
  if (s == r.length) return -1;
  let o = r.coordsAt(s, -1);
  if (o && hg(t, i, o)) return -1;
  let l = r.coordsAt(s, 1);
  return l && hg(t, i, l) ? 1 : o && o.bottom >= i ? -1 : 1;
}
function ug(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, false);
  return { pos: t, bias: RS(n, t, e.clientX, e.clientY) };
}
const PS = ue.ie && ue.ie_version <= 11;
let dg = null, pg = 0, gg = 0;
function Gy(n) {
  if (!PS) return n.detail;
  let e = dg, t = gg;
  return dg = n, gg = Date.now(), pg = !e || t > Date.now() - 400 && Math.abs(e.clientX - n.clientX) < 2 && Math.abs(e.clientY - n.clientY) < 2 ? (pg + 1) % 3 : 1;
}
function BS(n, e) {
  let t = ug(n, e), i = Gy(e), r = n.state.selection;
  return { update(s) {
    s.docChanged && (t.pos = s.changes.mapPos(t.pos), r = r.map(s.changes));
  }, get(s, o, l) {
    let a = ug(n, s), f, h = fg(n, a.pos, a.bias, i);
    if (t.pos != a.pos && !o) {
      let p = fg(n, t.pos, t.bias, i), m = Math.min(p.from, h.from), b = Math.max(p.to, h.to);
      h = m < h.from ? j.range(m, b) : j.range(b, m);
    }
    return o ? r.replaceRange(r.main.extend(h.from, h.to)) : l && i == 1 && r.ranges.length > 1 && (f = IS(r, a.pos)) ? f : l ? r.addRange(h) : j.create([h]);
  } };
}
function IS(n, e) {
  for (let t = 0; t < n.ranges.length; t++) {
    let { from: i, to: r } = n.ranges[t];
    if (i <= e && r >= e) return j.create(n.ranges.slice(0, t).concat(n.ranges.slice(t + 1)), n.mainIndex == t ? 0 : n.mainIndex - (n.mainIndex > t ? 1 : 0));
  }
  return null;
}
Bi.dragstart = (n, e) => {
  let { selection: { main: t } } = n.state;
  if (e.target.draggable) {
    let r = n.docView.nearest(e.target);
    if (r && r.isWidget) {
      let s = r.posAtStart, o = s + r.length;
      (s >= t.to || o <= t.from) && (t = j.range(s, o));
    }
  }
  let { inputState: i } = n;
  return i.mouseSelection && (i.mouseSelection.dragging = true), i.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", lf(n.state, md, n.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), false;
};
Bi.dragend = (n) => (n.inputState.draggedContent = null, false);
function mg(n, e, t, i) {
  if (t = lf(n.state, gd, t), !t) return;
  let r = n.posAtCoords({ x: e.clientX, y: e.clientY }, false), { draggedContent: s } = n.inputState, o = i && s && OS(n, e) ? { from: s.from, to: s.to } : null, l = { from: r, insert: t }, a = n.state.changes(o ? [o, l] : l);
  n.focus(), n.dispatch({ changes: a, selection: { anchor: a.mapPos(r, -1), head: a.mapPos(r, 1) }, userEvent: o ? "move.drop" : "input.drop" }), n.inputState.draggedContent = null;
}
Bi.drop = (n, e) => {
  if (!e.dataTransfer) return false;
  if (n.state.readOnly) return true;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length), r = 0, s = () => {
      ++r == t.length && mg(n, e, i.filter((o) => o != null).join(n.state.lineBreak), false);
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
    if (i) return mg(n, e, i, true), true;
  }
  return false;
};
Bi.paste = (n, e) => {
  if (n.state.readOnly) return true;
  n.observer.flush();
  let t = qy ? null : e.clipboardData;
  return t ? (Uy(n, t.getData("text/plain") || t.getData("text/uri-list")), true) : (DS(n), false);
};
function NS(n, e) {
  let t = n.dom.parentNode;
  if (!t) return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), n.focus();
  }, 50);
}
function FS(n) {
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
  return { text: lf(n, md, e.join(n.lineBreak)), ranges: t, linewise: i };
}
let cu = null;
Bi.copy = Bi.cut = (n, e) => {
  let { text: t, ranges: i, linewise: r } = FS(n.state);
  if (!t && !r) return false;
  cu = r ? t : null, e.type == "cut" && !n.state.readOnly && n.dispatch({ changes: i, scrollIntoView: true, userEvent: "delete.cut" });
  let s = qy ? null : e.clipboardData;
  return s ? (s.clearData(), s.setData("text/plain", t), true) : (NS(n, t), false);
};
const Yy = Tr.define();
function Jy(n, e) {
  let t = [];
  for (let i of n.facet(Oy)) {
    let r = i(n, e);
    r && t.push(r);
  }
  return t.length ? n.update({ effects: t, annotations: Yy.of(true) }) : null;
}
function Qy(n) {
  setTimeout(() => {
    let e = n.hasFocus;
    if (e != n.inputState.notifiedFocused) {
      let t = Jy(n.state, e);
      t ? n.dispatch(t) : n.update([]);
    }
  }, 10);
}
wi.focus = (n) => {
  n.inputState.lastFocusTime = Date.now(), !n.scrollDOM.scrollTop && (n.inputState.lastScrollTop || n.inputState.lastScrollLeft) && (n.scrollDOM.scrollTop = n.inputState.lastScrollTop, n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft), Qy(n);
};
wi.blur = (n) => {
  n.observer.clearSelectionRange(), Qy(n);
};
wi.compositionstart = wi.compositionupdate = (n) => {
  n.observer.editContext || (n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = true), n.inputState.composing < 0 && (n.inputState.composing = 0));
};
wi.compositionend = (n) => {
  n.observer.editContext || (n.inputState.composing = -1, n.inputState.compositionEndedAt = Date.now(), n.inputState.compositionPendingKey = true, n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0, n.inputState.compositionFirstChange = null, ue.chrome && ue.android ? n.observer.flushSoon() : n.inputState.compositionPendingChange ? Promise.resolve().then(() => n.observer.flush()) : setTimeout(() => {
    n.inputState.composing < 0 && n.docView.hasComposition && n.update([]);
  }, 50));
};
wi.contextmenu = (n) => {
  n.inputState.lastContextMenu = Date.now();
};
Bi.beforeinput = (n, e) => {
  var t, i;
  if (e.inputType == "insertReplacementText" && n.observer.editContext) {
    let s = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), o = e.getTargetRanges();
    if (s && o.length) {
      let l = o[0], a = n.posAtDOM(l.startContainer, l.startOffset), f = n.posAtDOM(l.endContainer, l.endOffset);
      return bd(n, { from: a, to: f, insert: n.state.toText(s) }, null), true;
    }
  }
  let r;
  if (ue.chrome && ue.android && (r = Ky.find((s) => s.inputType == e.inputType)) && (n.observer.delayAndroidKey(r.key, r.keyCode), r.key == "Backspace" || r.key == "Delete")) {
    let s = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > s + 10 && n.hasFocus && (n.contentDOM.blur(), n.focus());
    }, 100);
  }
  return ue.ios && e.inputType == "deleteContentForward" && n.observer.flushSoon(), ue.safari && e.inputType == "insertText" && n.inputState.composing >= 0 && setTimeout(() => wi.compositionend(n, e), 20), false;
};
const yg = /* @__PURE__ */ new Set();
function HS(n) {
  yg.has(n) || (yg.add(n), n.addEventListener("copy", () => {
  }), n.addEventListener("cut", () => {
  }));
}
const vg = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let wo = false;
function bg() {
  wo = false;
}
class VS {
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
    return vg.indexOf(e) > -1 != this.lineWrapping;
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
    let l = vg.indexOf(e) > -1, a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
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
class WS {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class or {
  constructor(e, t, i, r, s) {
    this.from = e, this.length = t, this.top = i, this.height = r, this._content = s;
  }
  get type() {
    return typeof this._content == "number" ? Bn.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof Qr ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new or(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var wt = (function(n) {
  return n[n.ByPos = 0] = "ByPos", n[n.ByHeight = 1] = "ByHeight", n[n.ByPosNoHeight = 2] = "ByPosNoHeight", n;
})(wt || (wt = {}));
const hc = 1e-3;
class In {
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
    this.height != e && (Math.abs(this.height - e) > hc && (wo = true), this.height = e);
  }
  replace(e, t, i) {
    return In.of(i);
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
      let { fromA: a, toA: f, fromB: h, toB: p } = r[l], m = s.lineAt(a, wt.ByPosNoHeight, i.setDoc(t), 0, 0), b = m.to >= f ? m : s.lineAt(f, wt.ByPosNoHeight, i, 0, 0);
      for (p += b.to - f, f = b.to; l > 0 && m.from <= r[l - 1].toA; ) a = r[l - 1].fromA, h = r[l - 1].fromB, l--, a < m.from && (m = s.lineAt(a, wt.ByPosNoHeight, i, 0, 0));
      h += m.from - a, a = m.from;
      let S = wd.build(i.setDoc(o), e, h, p);
      s = _c(s, s.replace(a, f, S));
    }
    return s.updateHeight(i, 0);
  }
  static empty() {
    return new ni(0, 0);
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
    return e[t - 1] == null ? (o = 1, t--) : e[t] == null && (o = 1, i++), new $S(In.of(e.slice(0, t)), o, In.of(e.slice(i)));
  }
}
function _c(n, e) {
  return n == e ? n : (n.constructor != e.constructor && (wo = true), e);
}
In.prototype.size = 1;
class Xy extends In {
  constructor(e, t, i) {
    super(e, t), this.deco = i;
  }
  blockAt(e, t, i, r) {
    return new or(r, this.length, i, this.height, this.deco || 0);
  }
  lineAt(e, t, i, r, s) {
    return this.blockAt(0, i, r, s);
  }
  forEachLine(e, t, i, r, s, o) {
    e <= s + this.length && t >= s && o(this.blockAt(0, i, r, s));
  }
  updateHeight(e, t = 0, i = false, r) {
    return r && r.from <= t && r.more && this.setHeight(r.heights[r.index++]), this.outdated = false, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class ni extends Xy {
  constructor(e, t) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, t, i, r) {
    return new or(r, this.length, i, this.height, this.breaks);
  }
  replace(e, t, i) {
    let r = i[0];
    return i.length == 1 && (r instanceof ni || r instanceof sn && r.flags & 4) && Math.abs(this.length - r.length) < 10 ? (r instanceof sn ? r = new ni(r.length, this.height) : r.height = this.height, this.outdated || (r.outdated = false), r) : In.of(i);
  }
  updateHeight(e, t = 0, i = false, r) {
    return r && r.from <= t && r.more ? this.setHeight(r.heights[r.index++]) : (i || this.outdated) && this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = false, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class sn extends In {
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
      return new or(h.from, h.length, m, p, 0);
    } else {
      let f = Math.max(0, Math.min(o - s, Math.floor((e - i) / l))), { from: h, length: p } = t.doc.line(s + f);
      return new or(h, p, i + l * f, l, 0);
    }
  }
  lineAt(e, t, i, r, s) {
    if (t == wt.ByHeight) return this.blockAt(e, i, r, s);
    if (t == wt.ByPosNoHeight) {
      let { from: b, to: S } = i.doc.lineAt(e);
      return new or(b, S - b, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, s), f = i.doc.lineAt(e), h = l + f.length * a, p = f.number - o, m = r + l * p + a * (f.from - s - p);
    return new or(f.from, f.length, Math.max(r, Math.min(m, r + this.height - h)), h, 0);
  }
  forEachLine(e, t, i, r, s, o) {
    e = Math.max(e, s), t = Math.min(t, s + this.length);
    let { firstLine: l, perLine: a, perChar: f } = this.heightMetrics(i, s);
    for (let h = e, p = r; h <= t; ) {
      let m = i.doc.lineAt(h);
      if (h == e) {
        let S = m.number - l;
        p += a * S + f * (e - s - S);
      }
      let b = a + f * m.length;
      o(new or(m.from, m.length, p, b, 0)), p += b, h = m.to + 1;
    }
  }
  replace(e, t, i) {
    let r = this.length - t;
    if (r > 0) {
      let s = i[i.length - 1];
      s instanceof sn ? i[i.length - 1] = new sn(s.length + r) : i.push(null, new sn(r - 1));
    }
    if (e > 0) {
      let s = i[0];
      s instanceof sn ? i[0] = new sn(e + s.length) : i.unshift(new sn(e - 1), null);
    }
    return In.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new sn(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new sn(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = false, r) {
    let s = t + this.length;
    if (r && r.from <= t + this.length && r.more) {
      let o = [], l = Math.max(t, r.from), a = -1;
      for (r.from > t && o.push(new sn(r.from - t - 1).updateHeight(e, t)); l <= s && r.more; ) {
        let h = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let p = r.heights[r.index++];
        a == -1 ? a = p : Math.abs(p - a) >= hc && (a = -2);
        let m = new ni(h, p);
        m.outdated = false, o.push(m), l += h + 1;
      }
      l <= s && o.push(null, new sn(s - l).updateHeight(e, l));
      let f = In.of(o);
      return (a < 0 || Math.abs(f.height - this.height) >= hc || Math.abs(a - this.heightMetrics(e, t).perLine) >= hc) && (wo = true), _c(this, f);
    } else (i || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = false);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class $S extends In {
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
    let o = r + this.left.height, l = s + this.left.length + this.break, a = t == wt.ByHeight ? e < o : e < l, f = a ? this.left.lineAt(e, t, i, r, s) : this.right.lineAt(e, t, i, o, l);
    if (this.break || (a ? f.to < l : f.from > l)) return f;
    let h = t == wt.ByPosNoHeight ? wt.ByPosNoHeight : wt.ByPos;
    return a ? f.join(this.right.lineAt(l, h, i, o, l)) : this.left.lineAt(l, h, i, r, s).join(f);
  }
  forEachLine(e, t, i, r, s, o) {
    let l = r + this.left.height, a = s + this.left.length + this.break;
    if (this.break) e < a && this.left.forEachLine(e, t, i, r, s, o), t >= a && this.right.forEachLine(e, t, i, l, a, o);
    else {
      let f = this.lineAt(a, wt.ByPos, i, r, s);
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
    if (e > 0 && wg(s, o - 1), t < this.length) {
      let l = s.length;
      this.decomposeRight(t, s), wg(s, l);
    }
    return In.of(s);
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
    return e.size > 2 * t.size || t.size > 2 * e.size ? In.of(this.break ? [e, null, t] : [e, t]) : (this.left = _c(this.left, e), this.right = _c(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = false, r) {
    let { left: s, right: o } = this, l = t + s.length + this.break, a = null;
    return r && r.from <= t + s.length && r.more ? a = s = s.updateHeight(e, t, i, r) : s.updateHeight(e, t, i), r && r.from <= l + o.length && r.more ? a = o = o.updateHeight(e, l, i, r) : o.updateHeight(e, l, i), a ? this.balanced(s, o) : (this.height = this.left.height + this.right.height, this.outdated = false, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function wg(n, e) {
  let t, i;
  n[e] == null && (t = n[e - 1]) instanceof sn && (i = n[e + 1]) instanceof sn && n.splice(e - 1, 3, new sn(t.length + 1 + i.length));
}
const zS = 5;
class wd {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), r = this.nodes[this.nodes.length - 1];
      r instanceof ni ? r.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new ni(i - this.pos, -1)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let r = i.widget ? i.widget.estimatedHeight : 0, s = i.widget ? i.widget.lineBreaks : 0;
      r < 0 && (r = this.oracle.lineHeight);
      let o = t - e;
      i.block ? this.addBlock(new Xy(o, r, i)) : (o || s || r >= zS) && this.addLineDeco(r, s, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1) return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new ni(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new sn(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof ni) return e;
    let t = new ni(0, -1);
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
    this.lineStart > -1 && !(t instanceof ni) && !this.isCovered ? this.nodes.push(new ni(0, -1)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let r of this.nodes) r instanceof ni && r.updateHeight(this.oracle, i), i += r ? r.length : 1;
    return this.nodes;
  }
  static build(e, t, i, r) {
    let s = new wd(i, e);
    return ze.spans(t, i, r, s, 0), s.finish(i);
  }
}
function KS(n, e, t) {
  let i = new jS();
  return ze.compare(n, e, t, i, 0), i.changes;
}
class jS {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, r) {
    (e < t || i && i.heightRelevant || r && r.heightRelevant) && fc(e, t, this.changes, 5);
  }
}
function qS(n, e) {
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
function US(n) {
  let e = n.getBoundingClientRect(), t = n.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function GS(n, e) {
  let t = n.getBoundingClientRect();
  return { left: 0, right: t.right - t.left, top: e, bottom: t.bottom - (t.top + e) };
}
class Yf {
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
    return ve.replace({ widget: new YS(this.displaySize * (t ? e.scaleY : e.scaleX), t) }).range(this.from, this.to);
  }
}
class YS extends Ni {
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
class xg {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = true, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = false, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Sg, this.scrollTarget = null, this.printing = false, this.mustMeasureContent = true, this.defaultTextDirection = gt.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = false;
    let t = e.facet(yd).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new VS(t), this.stateDeco = e.facet(jl).filter((i) => typeof i != "function"), this.heightMap = In.empty().applyChanges(this.stateDeco, Qe.empty, this.heightOracle.setDoc(e.doc), [new vi(0, 0, 0, e.doc.length)]);
    for (let i = 0; i < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); i++) ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = ve.set(this.lineGaps.map((i) => i.draw(this, false))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let r = i ? t.head : t.anchor;
      if (!e.some(({ from: s, to: o }) => r >= s && r <= o)) {
        let { from: s, to: o } = this.lineBlockAt(r);
        e.push(new Ia(s, o));
      }
    }
    return this.viewports = e.sort((i, r) => i.from - r.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? Sg : new xd(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(yl(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(jl).filter((h) => typeof h != "function");
    let r = e.changedRanges, s = vi.extendWithRanges(r, KS(i, this.stateDeco, e ? e.changes : Ut.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    bg(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), s), (this.heightMap.height != o || wo) && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = o);
    let a = s.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let f = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (f || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(Ly) && (this.mustEnforceCursorAssoc = true);
  }
  measure(e) {
    let t = e.contentDOM, i = window.getComputedStyle(t), r = this.heightOracle, s = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? gt.RTL : gt.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(s), l = t.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = false;
    let f = 0, h = 0;
    if (l.width && l.height) {
      let { scaleX: B, scaleY: W } = oy(t, l);
      (B > 5e-3 && Math.abs(this.scaleX - B) > 5e-3 || W > 5e-3 && Math.abs(this.scaleY - W) > 5e-3) && (this.scaleX = B, this.scaleY = W, f |= 16, o = a = true);
    }
    let p = (parseInt(i.paddingTop) || 0) * this.scaleY, m = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != p || this.paddingBottom != m) && (this.paddingTop = p, this.paddingBottom = m, f |= 18), this.editorWidth != e.scrollDOM.clientWidth && (r.lineWrapping && (a = true), this.editorWidth = e.scrollDOM.clientWidth, f |= 16);
    let b = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != b && (this.scrollAnchorHeight = -1, this.scrollTop = b), this.scrolledToBottom = cy(e.scrollDOM);
    let S = (this.printing ? GS : qS)(t, this.paddingTop), M = S.top - this.pixelViewport.top, A = S.bottom - this.pixelViewport.bottom;
    this.pixelViewport = S;
    let _ = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (_ != this.inView && (this.inView = _, _ && (a = true)), !this.inView && !this.scrollTarget && !US(e.dom)) return 0;
    let R = l.width;
    if ((this.contentDOMWidth != R || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, f |= 16), a) {
      let B = e.docView.measureVisibleLineHeights(this.viewport);
      if (r.mustRefreshForHeights(B) && (o = true), o || r.lineWrapping && Math.abs(R - this.contentDOMWidth) > r.charWidth) {
        let { lineHeight: W, charWidth: H, textHeight: K } = e.docView.measureTextSize();
        o = W > 0 && r.refresh(s, W, H, K, Math.max(5, R / H), B), o && (e.docView.minWidth = 0, f |= 16);
      }
      M > 0 && A > 0 ? h = Math.max(M, A) : M < 0 && A < 0 && (h = Math.min(M, A)), bg();
      for (let W of this.viewports) {
        let H = W.from == this.viewport.from ? B : e.docView.measureVisibleLineHeights(W);
        this.heightMap = (o ? In.empty().applyChanges(this.stateDeco, Qe.empty, this.heightOracle, [new vi(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(r, 0, o, new WS(W.from, H));
      }
      wo && (f |= 2);
    }
    let N = !this.viewportIsAppropriate(this.viewport, h) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return N && (f & 2 && (f |= this.updateScaler()), this.viewport = this.getViewport(h, this.scrollTarget), f |= this.updateForViewport()), (f & 2 || N) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), f |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = false, e.docView.enforceCursorAssoc()), f;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), r = this.heightMap, s = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new Ia(r.lineAt(o - i * 1e3, wt.ByHeight, s, 0, 0).from, r.lineAt(l + (1 - i) * 1e3, wt.ByHeight, s, 0, 0).to);
    if (t) {
      let { head: f } = t.range;
      if (f < a.from || f > a.to) {
        let h = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), p = r.lineAt(f, wt.ByPos, s, 0, 0), m;
        t.y == "center" ? m = (p.top + p.bottom) / 2 - h / 2 : t.y == "start" || t.y == "nearest" && f < a.from ? m = p.top : m = p.bottom - h, a = new Ia(r.lineAt(m - 1e3 / 2, wt.ByHeight, s, 0, 0).from, r.lineAt(m + h + 1e3 / 2, wt.ByHeight, s, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), r = t.mapPos(e.to, 1);
    return new Ia(this.heightMap.lineAt(i, wt.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(r, wt.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView) return true;
    let { top: r } = this.heightMap.lineAt(e, wt.ByPos, this.heightOracle, 0, 0), { bottom: s } = this.heightMap.lineAt(t, wt.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || r <= o - Math.max(10, Math.min(-i, 250))) && (t == this.state.doc.length || s >= l + Math.max(10, Math.min(i, 250))) && r > o - 2 * 1e3 && s < l + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty) return e;
    let i = [];
    for (let r of e) t.touchesRange(r.from, r.to) || i.push(new Yf(t.mapPos(r.from), t.mapPos(r.to), r.size, r.displaySize));
    return i;
  }
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping, r = i ? 1e4 : 2e3, s = r >> 1, o = r << 1;
    if (this.defaultTextDirection != gt.LTR && !i) return [];
    let l = [], a = (h, p, m, b) => {
      if (p - h < s) return;
      let S = this.state.selection.main, M = [S.from];
      S.empty || M.push(S.to);
      for (let _ of M) if (_ > h && _ < p) {
        a(h, _ - 10, m, b), a(_ + 10, p, m, b);
        return;
      }
      let A = QS(e, (_) => _.from >= m.from && _.to <= m.to && Math.abs(_.from - h) < s && Math.abs(_.to - p) < s && !M.some((R) => _.from < R && _.to > R));
      if (!A) {
        if (p < m.to && t && i && t.visibleRanges.some((N) => N.from <= p && N.to >= p)) {
          let N = t.moveToLineBoundary(j.cursor(p), false, true).head;
          N > h && (p = N);
        }
        let _ = this.gapSize(m, h, p, b), R = i || _ < 2e6 ? _ : 2e6;
        A = new Yf(h, p, _, R);
      }
      l.push(A);
    }, f = (h) => {
      if (h.length < o || h.type != Bn.Text) return;
      let p = JS(h.from, h.to, this.stateDeco);
      if (p.total < o) return;
      let m = this.scrollTarget ? this.scrollTarget.range.head : null, b, S;
      if (i) {
        let M = r / this.heightOracle.lineLength * this.heightOracle.lineHeight, A, _;
        if (m != null) {
          let R = Fa(p, m), N = ((this.visibleBottom - this.visibleTop) / 2 + M) / h.height;
          A = R - N, _ = R + N;
        } else A = (this.visibleTop - h.top - M) / h.height, _ = (this.visibleBottom - h.top + M) / h.height;
        b = Na(p, A), S = Na(p, _);
      } else {
        let M = p.total * this.heightOracle.charWidth, A = r * this.heightOracle.charWidth, _ = 0;
        if (M > 2e6) for (let H of e) H.from >= h.from && H.from < h.to && H.size != H.displaySize && H.from * this.heightOracle.charWidth + _ < this.pixelViewport.left && (_ = H.size - H.displaySize);
        let R = this.pixelViewport.left + _, N = this.pixelViewport.right + _, B, W;
        if (m != null) {
          let H = Fa(p, m), K = ((N - R) / 2 + A) / M;
          B = H - K, W = H + K;
        } else B = (R - A) / M, W = (N + A) / M;
        b = Na(p, B), S = Na(p, W);
      }
      b > h.from && a(h.from, b, h, p), S < h.to && a(S, h.to, h, p);
    };
    for (let h of this.viewportLines) Array.isArray(h.type) ? h.type.forEach(f) : f(h);
    return l;
  }
  gapSize(e, t, i, r) {
    let s = Fa(r, i) - Fa(r, t);
    return this.heightOracle.lineWrapping ? e.height * s : r.total * this.heightOracle.charWidth * s;
  }
  updateLineGaps(e) {
    Yf.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = ve.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let i = [];
    ze.spans(t, this.viewport.from, this.viewport.to, { span(s, o) {
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
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || yl(this.heightMap.lineAt(e, wt.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || yl(this.heightMap.lineAt(this.scaler.fromDOM(e), wt.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return yl(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Ia {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function JS(n, e, t) {
  let i = [], r = n, s = 0;
  return ze.spans(t, n, e, { span() {
  }, point(o, l) {
    o > r && (i.push({ from: r, to: o }), s += o - r), r = l;
  } }, 20), r < e && (i.push({ from: r, to: e }), s += e - r), { total: s, ranges: i };
}
function Na({ total: n, ranges: e }, t) {
  if (t <= 0) return e[0].from;
  if (t >= 1) return e[e.length - 1].to;
  let i = Math.floor(n * t);
  for (let r = 0; ; r++) {
    let { from: s, to: o } = e[r], l = o - s;
    if (i <= l) return s + i;
    i -= l;
  }
}
function Fa(n, e) {
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
function QS(n, e) {
  for (let t of n) if (e(t)) return t;
}
const Sg = { toDOM(n) {
  return n;
}, fromDOM(n) {
  return n;
}, scale: 1, eq(n) {
  return n == this;
} };
class xd {
  constructor(e, t, i) {
    let r = 0, s = 0, o = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let f = t.lineAt(l, wt.ByPos, e, 0, 0).top, h = t.lineAt(a, wt.ByPos, e, 0, 0).bottom;
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
    return e instanceof xd ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to) : false;
  }
}
function yl(n, e) {
  if (e.scale == 1) return n;
  let t = e.toDOM(n.top), i = e.toDOM(n.bottom);
  return new or(n.from, n.length, t, i - t, Array.isArray(n._content) ? n._content.map((r) => yl(r, e)) : n._content);
}
const Ha = be.define({ combine: (n) => n.join(" ") }), fu = be.define({ combine: (n) => n.indexOf(true) > -1 }), hu = Yr.newName(), Zy = Yr.newName(), ev = Yr.newName(), tv = { "&light": "." + Zy, "&dark": "." + ev };
function uu(n, e, t) {
  return new Yr(e, { finish(i) {
    return /&/.test(i) ? i.replace(/&\w*/, (r) => {
      if (r == "&") return n;
      if (!t || !t[r]) throw new RangeError(`Unsupported selector: ${r}`);
      return t[r];
    }) : n + " " + i;
  } });
}
const XS = uu("." + hu, { "&": { position: "relative !important", boxSizing: "border-box", "&.cm-focused": { outline: "1px dotted #212121" }, display: "flex !important", flexDirection: "column" }, ".cm-scroller": { display: "flex !important", alignItems: "flex-start !important", fontFamily: "monospace", lineHeight: 1.4, height: "100%", overflowX: "auto", position: "relative", zIndex: 0, overflowAnchor: "none" }, ".cm-content": { margin: 0, flexGrow: 2, flexShrink: 0, display: "block", whiteSpace: "pre", wordWrap: "normal", boxSizing: "border-box", minHeight: "100%", padding: "4px 0", outline: "none", "&[contenteditable=true]": { WebkitUserModify: "read-write-plaintext-only" } }, ".cm-lineWrapping": { whiteSpace_fallback: "pre-wrap", whiteSpace: "break-spaces", wordBreak: "break-word", overflowWrap: "anywhere", flexShrink: 1 }, "&light .cm-content": { caretColor: "black" }, "&dark .cm-content": { caretColor: "white" }, ".cm-line": { display: "block", padding: "0 2px 0 6px" }, ".cm-layer": { position: "absolute", left: 0, top: 0, contain: "size style", "& > *": { position: "absolute" } }, "&light .cm-selectionBackground": { background: "#d9d9d9" }, "&dark .cm-selectionBackground": { background: "#222" }, "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#d7d4f0" }, "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#233" }, ".cm-cursorLayer": { pointerEvents: "none" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer": { animation: "steps(1) cm-blink 1.2s infinite" }, "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, ".cm-cursor, .cm-dropCursor": { borderLeft: "1.2px solid black", marginLeft: "-0.6px", pointerEvents: "none" }, ".cm-cursor": { display: "none" }, "&dark .cm-cursor": { borderLeftColor: "#ddd" }, ".cm-dropCursor": { position: "absolute" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: "block" }, ".cm-iso": { unicodeBidi: "isolate" }, ".cm-announced": { position: "fixed", top: "-10000px" }, "@media print": { ".cm-announced": { display: "none" } }, "&light .cm-activeLine": { backgroundColor: "#cceeff44" }, "&dark .cm-activeLine": { backgroundColor: "#99eeff33" }, "&light .cm-specialChar": { color: "red" }, "&dark .cm-specialChar": { color: "#f78" }, ".cm-gutters": { flexShrink: 0, display: "flex", height: "100%", boxSizing: "border-box", zIndex: 200 }, ".cm-gutters-before": { insetInlineStart: 0 }, ".cm-gutters-after": { insetInlineEnd: 0 }, "&light .cm-gutters": { backgroundColor: "#f5f5f5", color: "#6c6c6c", border: "0px solid #ddd", "&.cm-gutters-before": { borderRightWidth: "1px" }, "&.cm-gutters-after": { borderLeftWidth: "1px" } }, "&dark .cm-gutters": { backgroundColor: "#333338", color: "#ccc" }, ".cm-gutter": { display: "flex !important", flexDirection: "column", flexShrink: 0, boxSizing: "border-box", minHeight: "100%", overflow: "hidden" }, ".cm-gutterElement": { boxSizing: "border-box" }, ".cm-lineNumbers .cm-gutterElement": { padding: "0 3px 0 5px", minWidth: "20px", textAlign: "right", whiteSpace: "nowrap" }, "&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" }, "&dark .cm-activeLineGutter": { backgroundColor: "#222227" }, ".cm-panels": { boxSizing: "border-box", position: "sticky", left: 0, right: 0, zIndex: 300 }, "&light .cm-panels": { backgroundColor: "#f5f5f5", color: "black" }, "&light .cm-panels-top": { borderBottom: "1px solid #ddd" }, "&light .cm-panels-bottom": { borderTop: "1px solid #ddd" }, "&dark .cm-panels": { backgroundColor: "#333338", color: "white" }, ".cm-dialog": { padding: "2px 19px 4px 6px", position: "relative", "& label": { fontSize: "80%" } }, ".cm-dialog-close": { position: "absolute", top: "3px", right: "4px", backgroundColor: "inherit", border: "none", font: "inherit", fontSize: "14px", padding: "0" }, ".cm-tab": { display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }, ".cm-widgetBuffer": { verticalAlign: "text-top", height: "1em", width: 0, display: "inline" }, ".cm-placeholder": { color: "#888", display: "inline-block", verticalAlign: "top", userSelect: "none" }, ".cm-highlightSpace": { backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)", backgroundPosition: "center" }, ".cm-highlightTab": { backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`, backgroundSize: "auto 100%", backgroundPosition: "right 90%", backgroundRepeat: "no-repeat" }, ".cm-trailingSpace": { backgroundColor: "#ff332255" }, ".cm-button": { verticalAlign: "middle", color: "inherit", fontSize: "70%", padding: ".2em 1em", borderRadius: "1px" }, "&light .cm-button": { backgroundImage: "linear-gradient(#eff1f5, #d9d9df)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" } }, "&dark .cm-button": { backgroundImage: "linear-gradient(#393939, #111)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#111, #333)" } }, ".cm-textfield": { verticalAlign: "middle", color: "inherit", fontSize: "70%", border: "1px solid silver", padding: ".2em .5em" }, "&light .cm-textfield": { backgroundColor: "white" }, "&dark .cm-textfield": { border: "1px solid #555", backgroundColor: "inherit" } }, tv), ZS = { childList: true, characterData: true, subtree: true, attributes: true, characterDataOldValue: true }, Jf = ue.ie && ue.ie_version <= 11;
class ek {
  constructor(e) {
    this.view = e, this.active = false, this.editContext = null, this.selectionRange = new Ix(), this.selectionChanged = false, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = false, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t) this.queue.push(i);
      (ue.ie && ue.ie_version <= 11 || ue.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && ue.android && e.constructor.EDIT_CONTEXT !== false && !(ue.chrome && ue.chrome_version < 126) && (this.editContext = new nk(e), e.state.facet(wr) && (e.contentDOM.editContext = this.editContext.editContext)), Jf && (this.onCharData = (t) => {
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
    if (i.state.facet(wr) ? i.root.activeElement != this.dom : !cc(this.dom, r)) return;
    let s = r.anchorNode && i.docView.nearest(r.anchorNode);
    if (s && s.ignoreEvent(e)) {
      t || (this.selectionChanged = false);
      return;
    }
    (ue.ie && ue.ie_version <= 11 || ue.android && ue.chrome) && !i.state.selection.main.empty && r.focusNode && Tl(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset) ? this.flushSoon() : this.flush(false);
  }
  readSelectionRange() {
    let { view: e } = this, t = zl(e.root);
    if (!t) return false;
    let i = ue.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && tk(this.view, t) || t;
    if (!i || this.selectionRange.eq(i)) return false;
    let r = cc(this.dom, i);
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
    this.active || (this.observer.observe(this.dom, ZS), Jf && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = true);
  }
  stop() {
    this.active && (this.active = false, this.observer.disconnect(), Jf && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = false;
  }
  delayAndroidKey(e, t) {
    var i;
    if (!this.delayedAndroidKey) {
      let r = () => {
        let s = this.delayedAndroidKey;
        s && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = s.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && s.force && fo(this.dom, s.key, s.keyCode));
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
    let { from: e, to: t, typeOver: i } = this.processRecords(), r = this.selectionChanged && cc(this.dom, this.selectionRange);
    if (e < 0 && !r) return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = false;
    let s = new bS(this.view, e, t, i);
    return this.view.docView.domChanged = { newSel: s.newSel ? s.newSel.main : null }, s;
  }
  flush(e = true) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return false;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t) return this.view.requestMeasure(), false;
    let i = this.view.state, r = $y(this.view, t);
    return this.view.state == i && (t.domChanged || t.newSel && !t.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), r;
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e)) return null;
    if (t.markDirty(e.type == "attributes"), e.type == "attributes" && (t.flags |= 4), e.type == "childList") {
      let i = kg(t, e.previousSibling || e.target.previousSibling, -1), r = kg(t, e.nextSibling || e.target.nextSibling, 1);
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
    this.editContext && (this.editContext.update(e), e.startState.facet(wr) != e.state.facet(wr) && (e.view.contentDOM.editContext = e.state.facet(wr) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, i;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let r of this.scrollTargets) r.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function kg(n, e, t) {
  for (; e; ) {
    let i = lt.get(e);
    if (i && i.parent == n) return i;
    let r = e.parentNode;
    e = r != n.dom ? r : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function Cg(n, e) {
  let t = e.startContainer, i = e.startOffset, r = e.endContainer, s = e.endOffset, o = n.docView.domAtPos(n.state.selection.main.anchor);
  return Tl(o.node, o.offset, r, s) && ([t, i, r, s] = [r, s, t, i]), { anchorNode: t, anchorOffset: i, focusNode: r, focusOffset: s };
}
function tk(n, e) {
  if (e.getComposedRanges) {
    let r = e.getComposedRanges(n.root)[0];
    if (r) return Cg(n, r);
  }
  let t = null;
  function i(r) {
    r.preventDefault(), r.stopImmediatePropagation(), t = r.getTargetRanges()[0];
  }
  return n.contentDOM.addEventListener("beforeinput", i, true), n.dom.ownerDocument.execCommand("indent"), n.contentDOM.removeEventListener("beforeinput", i, true), t ? Cg(n, t) : null;
}
class nk {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({ text: e.state.doc.sliceString(this.from, this.to), selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))), selectionEnd: this.toContextPos(e.state.selection.main.head) });
    this.handlers.textupdate = (i) => {
      let r = e.state.selection.main, { anchor: s, head: o } = r, l = this.toEditorPos(i.updateRangeStart), a = this.toEditorPos(i.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: l, drifted: false });
      let f = a - l > i.text.length;
      l == this.from && s < this.from ? l = s : a == this.to && s > this.to && (a = s);
      let h = zy(e.state.sliceDoc(l, a), i.text, (f ? r.from : r.to) - l, f ? "end" : null);
      if (!h) {
        let m = j.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        m.main.eq(r) || e.dispatch({ selection: m, userEvent: "select" });
        return;
      }
      let p = { from: h.from + l, to: h.toA + l, insert: Qe.of(i.text.slice(h.from, h.toB).split(`
`)) };
      if ((ue.mac || ue.android) && p.from == o - 1 && /^\. ?$/.test(i.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (p = { from: l, to: a, insert: Qe.of([i.text.replace(".", " ")]) }), this.pendingContextChange = p, !e.state.readOnly) {
        let m = this.to - this.from + (p.to - p.from + p.insert.length);
        bd(e, p, j.single(this.toEditorPos(i.selectionStart, m), this.toEditorPos(i.selectionEnd, m)));
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
            r.push(ve.mark({ attributes: { style: h } }).range(a, f));
          }
        }
      }
      e.dispatch({ effects: Ry.of(ve.set(r)) });
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
      let r = zl(i.root);
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
    this.dispatchTransactions = e.dispatchTransactions || i && ((r) => r.forEach((s) => i(s, this))) || ((r) => this.update(r)), this.dispatch = this.dispatch.bind(this), this._root = e.root || Nx(e.parent) || document, this.viewState = new xg(e.state || $e.create(e)), e.scrollTo && e.scrollTo.is(Ra) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(lo).map((r) => new qf(r));
    for (let r of this.plugins) r.update(this);
    this.observer = new ek(this), this.inputState = new kS(this), this.inputState.ensureHandlers(this.plugins), this.docView = new ng(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => this.requestMeasure());
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
    e.some((m) => m.annotation(Yy)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = Jy(s, o), a || (l = 1));
    let f = this.observer.delayedAndroidKey, h = null;
    if (f ? (this.observer.clearDelayedAndroidKey(), h = this.observer.readChange(), (h && !this.state.doc.eq(s.doc) || !this.state.selection.eq(s.selection)) && (h = null)) : this.observer.clear(), s.facet($e.phrases) != this.state.facet($e.phrases)) return this.setState(s);
    r = Oc.create(this, s, e), r.flags |= l;
    let p = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let m of e) {
        if (p && (p = p.map(m.changes)), m.scrollIntoView) {
          let { main: b } = m.state.selection;
          p = new ho(b.empty ? b : j.cursor(b.head, b.head > b.anchor ? -1 : 1));
        }
        for (let b of m.effects) b.is(Ra) && (p = b.value.clip(this.state));
      }
      this.viewState.update(r, p), this.bidiCache = Lc.update(this.bidiCache, r.changes), r.empty || (this.updatePlugins(r), this.inputState.update(r)), t = this.docView.update(r), this.state.facet(gl) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((m) => m.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (r.startState.facet(Ha) != r.state.facet(Ha) && (this.viewState.mustMeasureContent = true), (t || i || p || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !r.empty) for (let m of this.state.facet(ou)) try {
      m(r);
    } catch (b) {
      Rn(this.state, b, "update listener");
    }
    (a || h) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), h && !$y(this, h) && f.force && fo(this.contentDOM, f.key, f.keyCode);
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
      this.viewState = new xg(e), this.plugins = e.facet(lo).map((i) => new qf(i)), this.pluginMap.clear();
      for (let i of this.plugins) i.update(this);
      this.docView.destroy(), this.docView = new ng(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(lo), i = e.state.facet(lo);
    if (t != i) {
      let r = [];
      for (let s of i) {
        let o = t.indexOf(s);
        if (o < 0) r.push(new qf(s));
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
        Rn(this.state, i, "doc view update listener");
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
    let t = null, i = this.scrollDOM, r = i.scrollTop * this.scaleY, { scrollAnchorPos: s, scrollAnchorHeight: o } = this.viewState;
    Math.abs(r - this.viewState.scrollTop) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0) if (cy(i)) s = -1, o = this.viewState.heightMap.height;
        else {
          let b = this.viewState.scrollAnchorAt(r);
          s = b.from, o = b.top;
        }
        this.updateState = 1;
        let a = this.viewState.measure(this);
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
          } catch (S) {
            return Rn(this.state, S), Mg;
          }
        }), p = Oc.create(this, this.state, []), m = false;
        p.flags |= a, t ? t.flags |= a : t = p, this.updateState = 2, p.empty || (this.updatePlugins(p), this.inputState.update(p), this.updateAttrs(), m = this.docView.update(p), m && this.docViewUpdate());
        for (let b = 0; b < f.length; b++) if (h[b] != Mg) try {
          let S = f[b];
          S.write && S.write(h[b], this);
        } catch (S) {
          Rn(this.state, S);
        }
        if (m && this.docView.updateSelection(true), !p.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight) if (this.viewState.scrollTarget) {
            this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
            continue;
          } else {
            let S = (s < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(s).top) - o;
            if (S > 1 || S < -1) {
              r = r + S, i.scrollTop = r / this.scaleY, o = -1;
              continue;
            }
          }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty) for (let l of this.state.facet(ou)) l(t);
  }
  get themeClasses() {
    return hu + " " + (this.state.facet(fu) ? ev : Zy) + " " + this.state.facet(Ha);
  }
  updateAttrs() {
    let e = Ag(this, Py, { class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses }), t = { spellcheck: "false", autocorrect: "off", autocapitalize: "off", writingsuggestions: "false", translate: "no", contenteditable: this.state.facet(wr) ? "true" : "false", class: "cm-content", style: `${ue.tabSize}: ${this.state.tabSize}`, role: "textbox", "aria-multiline": "true" };
    this.state.readOnly && (t["aria-readonly"] = "true"), Ag(this, yd, t);
    let i = this.observer.ignore(() => {
      let r = tu(this.contentDOM, this.contentAttrs, t), s = tu(this.dom, this.editorAttrs, e);
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
    this.styleModules = this.state.facet(gl);
    let e = this.state.facet(he.cspNonce);
    Yr.mount(this.root, this.styleModules.concat(XS).reverse(), e ? { nonce: e } : void 0);
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
    return Gf(this, e, lg(this, e, t, i));
  }
  moveByGroup(e, t) {
    return Gf(this, e, lg(this, e, t, (i) => pS(this, e.head, i)));
  }
  visualLineSide(e, t) {
    let i = this.bidiSpans(e), r = this.textDirectionAt(e.from), s = i[t ? i.length - 1 : 0];
    return j.cursor(s.side(t, r) + e.from, s.forward(!t, r) ? 1 : -1);
  }
  moveToLineBoundary(e, t, i = true) {
    return dS(this, e, t, i);
  }
  moveVertically(e, t, i) {
    return Gf(this, e, gS(this, e, t, i));
  }
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = true) {
    return this.readMeasured(), Hy(this, e, t);
  }
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, t);
    if (!i || i.left == i.right) return i;
    let r = this.state.doc.lineAt(e), s = this.bidiSpans(r), o = s[qr.find(s, e - r.from, -1, t)];
    return of(i, o.dir == gt.LTR == t > 0);
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
    return !this.state.facet(_y) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(e) {
    if (e.length > ik) return Sy(e.length);
    let t = this.textDirectionAt(e.from), i;
    for (let s of this.bidiCache) if (s.from == e.from && s.dir == t && (s.fresh || xy(s.isolates, i = tg(this, e)))) return s.order;
    i || (i = tg(this, e));
    let r = Qx(e.text, t, i);
    return this.bidiCache.push(new Lc(e.from, e.to, t, i, true, r)), r;
  }
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || ue.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      ly(this.contentDOM), this.docView.updateSelection();
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
    return Ra.of(new ho(typeof e == "number" ? j.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
  }
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM, i = this.viewState.scrollAnchorAt(e);
    return Ra.of(new ho(j.cursor(i.from), "start", "start", i.top - e, t, true));
  }
  setTabFocusMode(e) {
    e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == "boolean" ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
  }
  static domEventHandlers(e) {
    return kt.define(() => ({}), { eventHandlers: e });
  }
  static domEventObservers(e) {
    return kt.define(() => ({}), { eventObservers: e });
  }
  static theme(e, t) {
    let i = Yr.newName(), r = [Ha.of(i), gl.of(uu(`.${i}`, e))];
    return t && t.dark && r.push(fu.of(true)), r;
  }
  static baseTheme(e) {
    return os.lowest(gl.of(uu("." + hu, e, tv)));
  }
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), r = i && lt.get(i) || lt.get(e);
    return ((t = r == null ? void 0 : r.rootView) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
he.styleModule = gl;
he.inputHandler = Ty;
he.clipboardInputFilter = gd;
he.clipboardOutputFilter = md;
he.scrollHandler = Dy;
he.focusChangeEffect = Oy;
he.perLineTextDirection = _y;
he.exceptionSink = Ey;
he.updateListener = ou;
he.editable = wr;
he.mouseSelectionStyle = Ay;
he.dragMovesSelection = My;
he.clickAddsSelectionRange = Cy;
he.decorations = jl;
he.outerDecorations = By;
he.atomicRanges = ra;
he.bidiIsolatedRanges = Iy;
he.scrollMargins = Ny;
he.darkTheme = fu;
he.cspNonce = be.define({ combine: (n) => n.length ? n[0] : "" });
he.contentAttributes = yd;
he.editorAttributes = Py;
he.lineWrapping = he.contentAttributes.of({ class: "cm-lineWrapping" });
he.announce = Ee.define();
const ik = 4096, Mg = {};
class Lc {
  constructor(e, t, i, r, s, o) {
    this.from = e, this.to = t, this.dir = i, this.isolates = r, this.fresh = s, this.order = o;
  }
  static update(e, t) {
    if (t.empty && !e.some((s) => s.fresh)) return e;
    let i = [], r = e.length ? e[e.length - 1].dir : gt.LTR;
    for (let s = Math.max(0, e.length - 10); s < e.length; s++) {
      let o = e[s];
      o.dir == r && !t.touchesRange(o.from, o.to) && i.push(new Lc(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, false, o.order));
    }
    return i;
  }
}
function Ag(n, e, t) {
  for (let i = n.state.facet(e), r = i.length - 1; r >= 0; r--) {
    let s = i[r], o = typeof s == "function" ? s(n) : s;
    o && eu(o, t);
  }
  return t;
}
const rk = ue.mac ? "mac" : ue.windows ? "win" : ue.linux ? "linux" : "key";
function sk(n, e) {
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
function Va(n, e, t) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t !== false && e.shiftKey && (n = "Shift-" + n), n;
}
const ok = os.default(he.domEventHandlers({ keydown(n, e) {
  return iv(nv(e.state), n, e, "editor");
} })), Sd = be.define({ enables: ok }), Eg = /* @__PURE__ */ new WeakMap();
function nv(n) {
  let e = n.facet(Sd), t = Eg.get(e);
  return t || Eg.set(e, t = ak(e.reduce((i, r) => i.concat(r), []))), t;
}
function vs(n, e, t) {
  return iv(nv(n.state), e, n, t);
}
let zr = null;
const lk = 4e3;
function ak(n, e = rk) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), r = (o, l) => {
    let a = i[o];
    if (a == null) i[o] = l;
    else if (a != l) throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, s = (o, l, a, f, h) => {
    var p, m;
    let b = t[o] || (t[o] = /* @__PURE__ */ Object.create(null)), S = l.split(/ (?!$)/).map((_) => sk(_, e));
    for (let _ = 1; _ < S.length; _++) {
      let R = S.slice(0, _).join(" ");
      r(R, true), b[R] || (b[R] = { preventDefault: true, stopPropagation: false, run: [(N) => {
        let B = zr = { view: N, prefix: R, scope: o };
        return setTimeout(() => {
          zr == B && (zr = null);
        }, lk), true;
      }] });
    }
    let M = S.join(" ");
    r(M, false);
    let A = b[M] || (b[M] = { preventDefault: false, stopPropagation: false, run: ((m = (p = b._any) === null || p === void 0 ? void 0 : p.run) === null || m === void 0 ? void 0 : m.slice()) || [] });
    a && A.run.push(a), f && (A.preventDefault = true), h && (A.stopPropagation = true);
  };
  for (let o of n) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any) for (let f of l) {
      let h = t[f] || (t[f] = /* @__PURE__ */ Object.create(null));
      h._any || (h._any = { preventDefault: false, stopPropagation: false, run: [] });
      let { any: p } = o;
      for (let m in h) h[m].run.push((b) => p(b, du));
    }
    let a = o[e] || o.key;
    if (a) for (let f of l) s(f, a, o.run, o.preventDefault, o.stopPropagation), o.shift && s(f, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
let du = null;
function iv(n, e, t, i) {
  du = e;
  let r = Lx(e), s = $n(r, 0), o = sr(s) == r.length && r != " ", l = "", a = false, f = false, h = false;
  zr && zr.view == t && zr.scope == i && (l = zr.prefix + " ", jy.indexOf(e.keyCode) < 0 && (f = true, zr = null));
  let p = /* @__PURE__ */ new Set(), m = (A) => {
    if (A) {
      for (let _ of A.run) if (!p.has(_) && (p.add(_), _(t))) return A.stopPropagation && (h = true), true;
      A.preventDefault && (A.stopPropagation && (h = true), f = true);
    }
    return false;
  }, b = n[i], S, M;
  return b && (m(b[l + Va(r, e, !o)]) ? a = true : o && (e.altKey || e.metaKey || e.ctrlKey) && !(ue.windows && e.ctrlKey && e.altKey) && !(ue.mac && e.altKey && !(e.ctrlKey || e.metaKey)) && (S = Jr[e.keyCode]) && S != r ? (m(b[l + Va(S, e, true)]) || e.shiftKey && (M = $l[e.keyCode]) != r && M != S && m(b[l + Va(M, e, false)])) && (a = true) : o && e.shiftKey && m(b[l + Va(r, e, true)]) && (a = true), !a && m(b._any) && (a = true)), f && (a = true), a && h && e.stopPropagation(), du = null, a;
}
class sa {
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
      let s = rv(e);
      return [new sa(t, r.left - s.left, r.top - s.top, null, r.bottom - r.top)];
    } else return ck(e, t, i);
  }
}
function rv(n) {
  let e = n.scrollDOM.getBoundingClientRect();
  return { left: (n.textDirection == gt.LTR ? e.left : e.right - n.scrollDOM.clientWidth * n.scaleX) - n.scrollDOM.scrollLeft * n.scaleX, top: e.top - n.scrollDOM.scrollTop * n.scaleY };
}
function Tg(n, e, t, i) {
  let r = n.coordsAtPos(e, t * 2);
  if (!r) return i;
  let s = n.dom.getBoundingClientRect(), o = (r.top + r.bottom) / 2, l = n.posAtCoords({ x: s.left + 1, y: o }), a = n.posAtCoords({ x: s.right - 1, y: o });
  return l == null || a == null ? i : { from: Math.max(i.from, Math.min(l, a)), to: Math.min(i.to, Math.max(l, a)) };
}
function ck(n, e, t) {
  if (t.to <= n.viewport.from || t.from >= n.viewport.to) return [];
  let i = Math.max(t.from, n.viewport.from), r = Math.min(t.to, n.viewport.to), s = n.textDirection == gt.LTR, o = n.contentDOM, l = o.getBoundingClientRect(), a = rv(n), f = o.querySelector(".cm-line"), h = f && window.getComputedStyle(f), p = l.left + (h ? parseInt(h.paddingLeft) + Math.min(0, parseInt(h.textIndent)) : 0), m = l.right - (h ? parseInt(h.paddingRight) : 0), b = au(n, i, 1), S = au(n, r, -1), M = b.type == Bn.Text ? b : null, A = S.type == Bn.Text ? S : null;
  if (M && (n.lineWrapping || b.widgetLineBreaks) && (M = Tg(n, i, 1, M)), A && (n.lineWrapping || S.widgetLineBreaks) && (A = Tg(n, r, -1, A)), M && A && M.from == A.from && M.to == A.to) return R(N(t.from, t.to, M));
  {
    let W = M ? N(t.from, null, M) : B(b, false), H = A ? N(null, t.to, A) : B(S, true), K = [];
    return (M || b).to < (A || S).from - (M && A ? 1 : 0) || b.widgetLineBreaks > 1 && W.bottom + n.defaultLineHeight / 2 < H.top ? K.push(_(p, W.bottom, m, H.top)) : W.bottom < H.top && n.elementAtHeight((W.bottom + H.top) / 2).type == Bn.Text && (W.bottom = H.top = (W.bottom + H.top) / 2), R(W).concat(K).concat(R(H));
  }
  function _(W, H, K, ee) {
    return new sa(e, W - a.left, H - a.top, K - W, ee - H);
  }
  function R({ top: W, bottom: H, horizontal: K }) {
    let ee = [];
    for (let oe = 0; oe < K.length; oe += 2) ee.push(_(K[oe], W, K[oe + 1], H));
    return ee;
  }
  function N(W, H, K) {
    let ee = 1e9, oe = -1e9, re = [];
    function q(se, ie, ke, ae, te) {
      let Te = n.coordsAtPos(se, se == K.to ? -2 : 2), Me = n.coordsAtPos(ke, ke == K.from ? 2 : -2);
      !Te || !Me || (ee = Math.min(Te.top, Me.top, ee), oe = Math.max(Te.bottom, Me.bottom, oe), te == gt.LTR ? re.push(s && ie ? p : Te.left, s && ae ? m : Me.right) : re.push(!s && ae ? p : Me.left, !s && ie ? m : Te.right));
    }
    let Z = W ?? K.from, J = H ?? K.to;
    for (let se of n.visibleRanges) if (se.to > Z && se.from < J) for (let ie = Math.max(se.from, Z), ke = Math.min(se.to, J); ; ) {
      let ae = n.state.doc.lineAt(ie);
      for (let te of n.bidiSpans(ae)) {
        let Te = te.from + ae.from, Me = te.to + ae.from;
        if (Te >= ke) break;
        Me > ie && q(Math.max(Te, ie), W == null && Te <= Z, Math.min(Me, ke), H == null && Me >= J, te.dir);
      }
      if (ie = ae.to + 1, ie >= ke) break;
    }
    return re.length == 0 && q(Z, W == null, J, H == null, n.textDirection), { top: ee, bottom: oe, horizontal: re };
  }
  function B(W, H) {
    let K = l.top + (H ? W.top : W.bottom);
    return { top: K, bottom: K, horizontal: [] };
  }
}
function fk(n, e) {
  return n.constructor == e.constructor && n.eq(e);
}
class hk {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(uc) != e.state.facet(uc) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== false && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0, i = e.facet(uc);
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
    if (e.length != this.drawn.length || e.some((t, i) => !fk(t, this.drawn[i]))) {
      let t = this.dom.firstChild, i = 0;
      for (let r of e) r.update && t && r.constructor && this.drawn[i].constructor && r.update(t, this.drawn[i]) ? (t = t.nextSibling, i++) : this.dom.insertBefore(r.draw(), t);
      for (; t; ) {
        let r = t.nextSibling;
        t.remove(), t = r;
      }
      this.drawn = e, ue.ios && (this.dom.style.display = this.dom.firstChild ? "" : "none");
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const uc = be.define();
function sv(n) {
  return [kt.define((e) => new hk(e, n)), uc.of(n)];
}
const xo = be.define({ combine(n) {
  return Or(n, { cursorBlinkRate: 1200, drawRangeCursor: true }, { cursorBlinkRate: (e, t) => Math.min(e, t), drawRangeCursor: (e, t) => e || t });
} });
function uk(n = {}) {
  return [xo.of(n), pk, gk, mk, Ly.of(true)];
}
function dk(n) {
  return n.facet(xo);
}
function ov(n) {
  return n.startState.facet(xo) != n.state.facet(xo);
}
const pk = sv({ above: true, markers(n) {
  let { state: e } = n, t = e.facet(xo), i = [];
  for (let r of e.selection.ranges) {
    let s = r == e.selection.main;
    if (r.empty || t.drawRangeCursor) {
      let o = s ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = r.empty ? r : j.cursor(r.head, r.head > r.anchor ? -1 : 1);
      for (let a of sa.forRange(n, o, l)) i.push(a);
    }
  }
  return i;
}, update(n, e) {
  n.transactions.some((i) => i.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
  let t = ov(n);
  return t && Og(n.state, e), n.docChanged || n.selectionSet || t;
}, mount(n, e) {
  Og(e.state, n);
}, class: "cm-cursorLayer" });
function Og(n, e) {
  e.style.animationDuration = n.facet(xo).cursorBlinkRate + "ms";
}
const gk = sv({ above: false, markers(n) {
  return n.state.selection.ranges.map((e) => e.empty ? [] : sa.forRange(n, "cm-selectionBackground", e)).reduce((e, t) => e.concat(t));
}, update(n, e) {
  return n.docChanged || n.selectionSet || n.viewportChanged || ov(n);
}, class: "cm-selectionLayer" }), mk = os.highest(he.theme({ ".cm-line": { "& ::selection, &::selection": { backgroundColor: "transparent !important" }, caretColor: "transparent !important" }, ".cm-content": { caretColor: "transparent !important", "& :focus": { caretColor: "initial !important", "&::selection, & ::selection": { backgroundColor: "Highlight !important" } } } })), lv = Ee.define({ map(n, e) {
  return n == null ? null : e.mapPos(n);
} }), vl = Yt.define({ create() {
  return null;
}, update(n, e) {
  return n != null && (n = e.changes.mapPos(n)), e.effects.reduce((t, i) => i.is(lv) ? i.value : t, n);
} }), yk = kt.fromClass(class {
  constructor(n) {
    this.view = n, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(n) {
    var e;
    let t = n.state.field(vl);
    t == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (n.startState.field(vl) != t || n.docChanged || n.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: n } = this, e = n.state.field(vl), t = e != null && n.coordsAtPos(e);
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
    this.view.state.field(vl) != n && this.view.dispatch({ effects: lv.of(n) });
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
function vk() {
  return [vl, yk];
}
function _g(n, e, t, i, r) {
  e.lastIndex = 0;
  for (let s = n.iterRange(t, i), o = t, l; !s.next().done; o += s.value.length) if (!s.lineBreak) for (; l = e.exec(s.value); ) r(o + l.index, l);
}
function bk(n, e) {
  let t = n.visibleRanges;
  if (t.length == 1 && t[0].from == n.viewport.from && t[0].to == n.viewport.to) return t;
  let i = [];
  for (let { from: r, to: s } of t) r = Math.max(n.state.doc.lineAt(r).from, r - e), s = Math.min(n.state.doc.lineAt(s).to, s + e), i.length && i[i.length - 1].to >= r ? i[i.length - 1].to = s : i.push({ from: r, to: s });
  return i;
}
class wk {
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
    let t = new Ri(), i = t.add.bind(t);
    for (let { from: r, to: s } of bk(e, this.maxLength)) _g(e.state.doc, this.regexp, r, s, (o, l) => this.addMatch(l, e, o, i));
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
        let m = [], b, S = (M, A, _) => m.push(_.range(M, A));
        if (a == f) for (this.regexp.lastIndex = h - a.from; (b = this.regexp.exec(a.text)) && b.index < p - a.from; ) this.addMatch(b, e, b.index + a.from, S);
        else _g(e.state.doc, this.regexp, h, p, (M, A) => this.addMatch(A, e, M, S));
        t = t.update({ filterFrom: h, filterTo: p, filter: (M, A) => M < h || A > p, add: m });
      }
    }
    return t;
  }
}
const pu = /x/.unicode != null ? "gu" : "g", xk = new RegExp(`[\0-\b
-\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\u2066\u2067\u2069\uFEFF\uFFF9-\uFFFC]`, pu), Sk = { 0: "null", 7: "bell", 8: "backspace", 10: "newline", 11: "vertical tab", 13: "carriage return", 27: "escape", 8203: "zero width space", 8204: "zero width non-joiner", 8205: "zero width joiner", 8206: "left-to-right mark", 8207: "right-to-left mark", 8232: "line separator", 8237: "left-to-right override", 8238: "right-to-left override", 8294: "left-to-right isolate", 8295: "right-to-left isolate", 8297: "pop directional isolate", 8233: "paragraph separator", 65279: "zero width no-break space", 65532: "object replacement" };
let Qf = null;
function kk() {
  var n;
  if (Qf == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    Qf = ((n = e.tabSize) !== null && n !== void 0 ? n : e.MozTabSize) != null;
  }
  return Qf || false;
}
const dc = be.define({ combine(n) {
  let e = Or(n, { render: null, specialChars: xk, addSpecialChars: null });
  return (e.replaceTabs = !kk()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, pu)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, pu)), e;
} });
function Ck(n = {}) {
  return [dc.of(n), Mk()];
}
let Lg = null;
function Mk() {
  return Lg || (Lg = kt.fromClass(class {
    constructor(n) {
      this.view = n, this.decorations = ve.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(n.state.facet(dc)), this.decorations = this.decorator.createDeco(n);
    }
    makeDecorator(n) {
      return new wk({ regexp: n.specialChars, decoration: (e, t, i) => {
        let { doc: r } = t.state, s = $n(e[0], 0);
        if (s == 9) {
          let o = r.lineAt(i), l = t.state.tabSize, a = Do(o.text, l, i - o.from);
          return ve.replace({ widget: new Ok((l - a % l) * this.view.defaultCharacterWidth / this.view.scaleX) });
        }
        return this.decorationCache[s] || (this.decorationCache[s] = ve.replace({ widget: new Tk(n, s) }));
      }, boundary: n.replaceTabs ? void 0 : /[^]/ });
    }
    update(n) {
      let e = n.state.facet(dc);
      n.startState.facet(dc) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(n.view)) : this.decorations = this.decorator.updateDeco(n, this.decorations);
    }
  }, { decorations: (n) => n.decorations }));
}
const Ak = "\u2022";
function Ek(n) {
  return n >= 32 ? Ak : n == 10 ? "\u2424" : String.fromCharCode(9216 + n);
}
class Tk extends Ni {
  constructor(e, t) {
    super(), this.options = e, this.code = t;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = Ek(this.code), i = e.state.phrase("Control character") + " " + (Sk[this.code] || "0x" + this.code.toString(16)), r = this.options.render && this.options.render(this.code, i, t);
    if (r) return r;
    let s = document.createElement("span");
    return s.textContent = t, s.title = i, s.setAttribute("aria-label", i), s.className = "cm-specialChar", s;
  }
  ignoreEvent() {
    return false;
  }
}
class Ok extends Ni {
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
function _k() {
  return Dk;
}
const Lk = ve.line({ class: "cm-activeLine" }), Dk = kt.fromClass(class {
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
      r.from > e && (t.push(Lk.range(r.from)), e = r.from);
    }
    return ve.set(t);
  }
}, { decorations: (n) => n.decorations }), gu = 2e3;
function Rk(n, e, t) {
  let i = Math.min(e.line, t.line), r = Math.max(e.line, t.line), s = [];
  if (e.off > gu || t.off > gu || e.col < 0 || t.col < 0) {
    let o = Math.min(e.off, t.off), l = Math.max(e.off, t.off);
    for (let a = i; a <= r; a++) {
      let f = n.doc.line(a);
      f.length <= l && s.push(j.range(f.from + o, f.to + l));
    }
  } else {
    let o = Math.min(e.col, t.col), l = Math.max(e.col, t.col);
    for (let a = i; a <= r; a++) {
      let f = n.doc.line(a), h = qh(f.text, o, n.tabSize, true);
      if (h < 0) s.push(j.cursor(f.to));
      else {
        let p = qh(f.text, l, n.tabSize);
        s.push(j.range(f.from + h, f.from + p));
      }
    }
  }
  return s;
}
function Pk(n, e) {
  let t = n.coordsAtPos(n.viewport.from);
  return t ? Math.round(Math.abs((t.left - e) / n.defaultCharacterWidth)) : -1;
}
function Dg(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, false), i = n.state.doc.lineAt(t), r = t - i.from, s = r > gu ? -1 : r == i.length ? Pk(n, e.clientX) : Do(i.text, n.state.tabSize, t - i.from);
  return { line: i.number, col: s, off: r };
}
function Bk(n, e) {
  let t = Dg(n, e), i = n.state.selection;
  return t ? { update(r) {
    if (r.docChanged) {
      let s = r.changes.mapPos(r.startState.doc.line(t.line).from), o = r.state.doc.lineAt(s);
      t = { line: o.number, col: t.col, off: Math.min(t.off, o.length) }, i = i.map(r.changes);
    }
  }, get(r, s, o) {
    let l = Dg(n, r);
    if (!l) return i;
    let a = Rk(n.state, t, l);
    return a.length ? o ? j.create(a.concat(i.ranges)) : j.create(a) : i;
  } } : null;
}
function Ik(n) {
  let e = ((t) => t.altKey && t.button == 0);
  return he.mouseSelectionStyle.of((t, i) => e(i) ? Bk(t, i) : null);
}
const Nk = { Alt: [18, (n) => !!n.altKey], Control: [17, (n) => !!n.ctrlKey], Shift: [16, (n) => !!n.shiftKey], Meta: [91, (n) => !!n.metaKey] }, Fk = { style: "cursor: crosshair" };
function Hk(n = {}) {
  let [e, t] = Nk[n.key || "Alt"], i = kt.fromClass(class {
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
    return !((s = r.plugin(i)) === null || s === void 0) && s.isDown ? Fk : null;
  })];
}
const ol = "-10000px";
class av {
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
function Vk(n) {
  let e = n.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: e.clientHeight, right: e.clientWidth };
}
const Xf = be.define({ combine: (n) => {
  var e, t, i;
  return { position: ue.ios ? "absolute" : ((e = n.find((r) => r.position)) === null || e === void 0 ? void 0 : e.position) || "fixed", parent: ((t = n.find((r) => r.parent)) === null || t === void 0 ? void 0 : t.parent) || null, tooltipSpace: ((i = n.find((r) => r.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || Vk };
} }), Rg = /* @__PURE__ */ new WeakMap(), kd = kt.fromClass(class {
  constructor(n) {
    this.view = n, this.above = [], this.inView = true, this.madeAbsolute = false, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = n.state.facet(Xf);
    this.position = e.position, this.parent = e.parent, this.classes = n.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new av(n, af, (t, i) => this.createTooltip(t, i), (t) => {
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
    let t = e || n.geometryChanged, i = n.state.facet(Xf);
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
    return t.dom.style.position = this.position, t.dom.style.top = ol, t.dom.style.left = "0px", this.container.insertBefore(t.dom, i), t.mount && t.mount(this.view), this.resizeObserver && this.resizeObserver.observe(t.dom), t;
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
      if (ue.gecko) t = s.offsetParent != this.container.ownerDocument.body;
      else if (s.style.top == ol && s.style.left == "0px") {
        let o = s.getBoundingClientRect();
        t = Math.abs(o.top + 1e4) > 1 || Math.abs(o.left) > 1;
      }
    }
    if (t || this.position == "absolute") if (this.parent) {
      let s = this.parent.getBoundingClientRect();
      s.width && s.height && (n = s.width / this.parent.offsetWidth, e = s.height / this.parent.offsetHeight);
    } else ({ scaleX: n, scaleY: e } = this.view.viewState);
    let i = this.view.scrollDOM.getBoundingClientRect(), r = vd(this.view);
    return { visible: { left: i.left + r.left, top: i.top + r.top, right: i.right - r.right, bottom: i.bottom - r.bottom }, parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(), pos: this.manager.tooltips.map((s, o) => {
      let l = this.manager.tooltipViews[o];
      return l.getCoords ? l.getCoords(s.pos) : this.view.coordsAtPos(s.pos);
    }), size: this.manager.tooltipViews.map(({ dom: s }) => s.getBoundingClientRect()), space: this.view.state.facet(Xf).tooltipSpace(this.view), scaleX: n, scaleY: e, makeAbsolute: t };
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
        h.style.top = ol;
        continue;
      }
      let b = a.arrow ? f.dom.querySelector(".cm-tooltip-arrow") : null, S = b ? 7 : 0, M = m.right - m.left, A = (e = Rg.get(f)) !== null && e !== void 0 ? e : m.bottom - m.top, _ = f.offset || $k, R = this.view.textDirection == gt.LTR, N = m.width > i.right - i.left ? R ? i.left : i.right - m.width : R ? Math.max(i.left, Math.min(p.left - (b ? 14 : 0) + _.x, i.right - M)) : Math.min(Math.max(i.left, p.left - M + (b ? 14 : 0) - _.x), i.right - M), B = this.above[l];
      !a.strictSide && (B ? p.top - A - S - _.y < i.top : p.bottom + A + S + _.y > i.bottom) && B == i.bottom - p.bottom > p.top - i.top && (B = this.above[l] = !B);
      let W = (B ? p.top - i.top : i.bottom - p.bottom) - S;
      if (W < A && f.resize !== false) {
        if (W < this.view.defaultLineHeight) {
          h.style.top = ol;
          continue;
        }
        Rg.set(f, A), h.style.height = (A = W) / s + "px";
      } else h.style.height && (h.style.height = "");
      let H = B ? p.top - A - S - _.y : p.bottom + S + _.y, K = N + M;
      if (f.overlap !== true) for (let ee of o) ee.left < K && ee.right > N && ee.top < H + A && ee.bottom > H && (H = B ? ee.top - A - 2 - S : ee.bottom + S + 2);
      if (this.position == "absolute" ? (h.style.top = (H - n.parent.top) / s + "px", Pg(h, (N - n.parent.left) / r)) : (h.style.top = H / s + "px", Pg(h, N / r)), b) {
        let ee = p.left + (R ? _.x : -_.x) - (N + 14 - 7);
        b.style.left = ee / r + "px";
      }
      f.overlap !== true && o.push({ left: N, top: H, right: K, bottom: H + A }), h.classList.toggle("cm-tooltip-above", B), h.classList.toggle("cm-tooltip-below", !B), f.positioned && f.positioned(n.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) for (let n of this.manager.tooltipViews) n.dom.style.top = ol;
  }
}, { eventObservers: { scroll() {
  this.maybeMeasure();
} } });
function Pg(n, e) {
  let t = parseInt(n.style.left, 10);
  (isNaN(t) || Math.abs(e - t) > 1) && (n.style.left = e + "px");
}
const Wk = he.baseTheme({ ".cm-tooltip": { zIndex: 500, boxSizing: "border-box" }, "&light .cm-tooltip": { border: "1px solid #bbb", backgroundColor: "#f5f5f5" }, "&light .cm-tooltip-section:not(:first-child)": { borderTop: "1px solid #bbb" }, "&dark .cm-tooltip": { backgroundColor: "#333338", color: "white" }, ".cm-tooltip-arrow": { height: "7px", width: "14px", position: "absolute", zIndex: -1, overflow: "hidden", "&:before, &:after": { content: "''", position: "absolute", width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent" }, ".cm-tooltip-above &": { bottom: "-7px", "&:before": { borderTop: "7px solid #bbb" }, "&:after": { borderTop: "7px solid #f5f5f5", bottom: "1px" } }, ".cm-tooltip-below &": { top: "-7px", "&:before": { borderBottom: "7px solid #bbb" }, "&:after": { borderBottom: "7px solid #f5f5f5", top: "1px" } } }, "&dark .cm-tooltip .cm-tooltip-arrow": { "&:before": { borderTopColor: "#333338", borderBottomColor: "#333338" }, "&:after": { borderTopColor: "transparent", borderBottomColor: "transparent" } } }), $k = { x: 0, y: 0 }, af = be.define({ enables: [kd, Wk] }), Dc = be.define({ combine: (n) => n.reduce((e, t) => e.concat(t), []) });
class cf {
  static create(e) {
    return new cf(e);
  }
  constructor(e) {
    this.view = e, this.mounted = false, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new av(e, Dc, (t, i) => this.createHostedView(t, i), (t) => t.dom.remove());
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
const zk = af.compute([Dc], (n) => {
  let e = n.facet(Dc);
  return e.length === 0 ? null : { pos: Math.min(...e.map((t) => t.pos)), end: Math.max(...e.map((t) => {
    var i;
    return (i = t.end) !== null && i !== void 0 ? i : t.pos;
  })), create: cf.create, above: e[0].above, arrow: e.some((t) => t.arrow) };
});
class Kk {
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
    let { view: e, lastMove: t } = this, i = e.docView.nearest(t.target);
    if (!i) return;
    let r, s = 1;
    if (i instanceof jr) r = i.posAtStart;
    else {
      if (r = e.posAtCoords(t), r == null) return;
      let l = e.coordsAtPos(r);
      if (!l || t.y < l.top || t.y > l.bottom || t.x < l.left - e.defaultCharacterWidth || t.x > l.right + e.defaultCharacterWidth) return;
      let a = e.bidiSpans(e.state.doc.lineAt(r)).find((h) => h.from <= r && h.to >= r), f = a && a.dir == gt.RTL ? -1 : 1;
      s = t.x < l.left ? -f : f;
    }
    let o = this.source(e, r, s);
    if (o == null ? void 0 : o.then) {
      let l = this.pending = { pos: r };
      o.then((a) => {
        this.pending == l && (this.pending = null, a && !(Array.isArray(a) && !a.length) && e.dispatch({ effects: this.setHover.of(Array.isArray(a) ? a : [a]) }));
      }, (a) => Rn(e.state, a, "hover tooltip"));
    } else o && !(Array.isArray(o) && !o.length) && e.dispatch({ effects: this.setHover.of(Array.isArray(o) ? o : [o]) });
  }
  get tooltip() {
    let e = this.view.plugin(kd), t = e ? e.manager.tooltips.findIndex((i) => i.create == cf.create) : -1;
    return t > -1 ? e.manager.tooltipViews[t] : null;
  }
  mousemove(e) {
    var t, i;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: r, tooltip: s } = this;
    if (r.length && s && !jk(s.dom, e) || this.pending) {
      let { pos: o } = r[0] || this.pending, l = (i = (t = r[0]) === null || t === void 0 ? void 0 : t.end) !== null && i !== void 0 ? i : o;
      (o == l ? this.view.posAtCoords(this.lastMove) != o : !qk(this.view, o, l, e.clientX, e.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
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
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const Wa = 4;
function jk(n, e) {
  let { left: t, right: i, top: r, bottom: s } = n.getBoundingClientRect(), o;
  if (o = n.querySelector(".cm-tooltip-arrow")) {
    let l = o.getBoundingClientRect();
    r = Math.min(l.top, r), s = Math.max(l.bottom, s);
  }
  return e.clientX >= t - Wa && e.clientX <= i + Wa && e.clientY >= r - Wa && e.clientY <= s + Wa;
}
function qk(n, e, t, i, r, s) {
  let o = n.scrollDOM.getBoundingClientRect(), l = n.documentTop + n.documentPadding.top + n.contentHeight;
  if (o.left > i || o.right < i || o.top > r || Math.min(o.bottom, l) < r) return false;
  let a = n.posAtCoords({ x: i, y: r }, false);
  return a >= e && a <= t;
}
function cv(n, e = {}) {
  let t = Ee.define(), i = Yt.define({ create() {
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
    for (let o of s.effects) o.is(t) && (r = o.value), o.is(Uk) && (r = []);
    return r;
  }, provide: (r) => Dc.from(r) });
  return { active: i, extension: [i, kt.define((r) => new Kk(r, n, i, t, e.hoverTime || 300)), zk] };
}
function fv(n, e) {
  let t = n.plugin(kd);
  if (!t) return null;
  let i = t.manager.tooltips.indexOf(e);
  return i < 0 ? null : t.manager.tooltipViews[i];
}
const Uk = Ee.define(), Bg = be.define({ combine(n) {
  let e, t;
  for (let i of n) e = e || i.topContainer, t = t || i.bottomContainer;
  return { topContainer: e, bottomContainer: t };
} });
function ql(n, e) {
  let t = n.plugin(hv), i = t ? t.specs.indexOf(e) : -1;
  return i > -1 ? t.panels[i] : null;
}
const hv = kt.fromClass(class {
  constructor(n) {
    this.input = n.state.facet(Vs), this.specs = this.input.filter((t) => t), this.panels = this.specs.map((t) => t(n));
    let e = n.state.facet(Bg);
    this.top = new $a(n, true, e.topContainer), this.bottom = new $a(n, false, e.bottomContainer), this.top.sync(this.panels.filter((t) => t.top)), this.bottom.sync(this.panels.filter((t) => !t.top));
    for (let t of this.panels) t.dom.classList.add("cm-panel"), t.mount && t.mount();
  }
  update(n) {
    let e = n.state.facet(Bg);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new $a(n.view, true, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new $a(n.view, false, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
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
class $a {
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
      for (; e != t.dom; ) e = Ig(e);
      e = e.nextSibling;
    } else this.dom.insertBefore(t.dom, e);
    for (; e; ) e = Ig(e);
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
function Ig(n) {
  let e = n.nextSibling;
  return n.remove(), e;
}
const Vs = be.define({ enables: hv });
class Xr extends Is {
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
const pc = be.define(), Gk = be.define(), Yk = { class: "", renderEmptyElements: false, elementStyle: "", markers: () => ze.empty, lineMarker: () => null, widgetMarker: () => null, lineMarkerChange: null, initialSpacer: null, updateSpacer: null, domEventHandlers: {}, side: "before" }, gc = be.define();
function Jk(n) {
  return [Qk(), gc.of({ ...Yk, ...n })];
}
const Ng = be.define({ combine: (n) => n.some((e) => e) });
function Qk(n) {
  return [Xk];
}
const Xk = kt.fromClass(class {
  constructor(n) {
    this.view = n, this.domAfter = null, this.prevViewport = n.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = n.state.facet(gc).map((e) => new Hg(n, e)), this.fixed = !n.state.facet(Ng);
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
    this.view.state.facet(Ng) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = n.view.viewport;
  }
  syncGutters(n) {
    let e = this.dom.nextSibling;
    n && (this.dom.remove(), this.domAfter && this.domAfter.remove());
    let t = ze.iter(this.view.state.facet(pc), this.view.viewport.from), i = [], r = this.gutters.map((s) => new Zk(s, this.view.viewport, -this.view.documentPadding.top));
    for (let s of this.view.viewportLineBlocks) if (i.length && (i = []), Array.isArray(s.type)) {
      let o = true;
      for (let l of s.type) if (l.type == Bn.Text && o) {
        mu(t, i, l.from);
        for (let a of r) a.line(this.view, l, i);
        o = false;
      } else if (l.widget) for (let a of r) a.widget(this.view, l);
    } else if (s.type == Bn.Text) {
      mu(t, i, s.from);
      for (let o of r) o.line(this.view, s, i);
    } else if (s.widget) for (let o of r) o.widget(this.view, s);
    for (let s of r) s.finish();
    n && (this.view.scrollDOM.insertBefore(this.dom, e), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
  }
  updateGutters(n) {
    let e = n.startState.facet(gc), t = n.state.facet(gc), i = n.docChanged || n.heightChanged || n.viewportChanged || !ze.eq(n.startState.facet(pc), n.state.facet(pc), n.view.viewport.from, n.view.viewport.to);
    if (e == t) for (let r of this.gutters) r.update(n) && (i = true);
    else {
      i = true;
      let r = [];
      for (let s of t) {
        let o = e.indexOf(s);
        o < 0 ? r.push(new Hg(this.view, s)) : (this.gutters[o].update(n), r.push(this.gutters[o]));
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
  return e.textDirection == gt.LTR ? { left: i, right: r } : { right: i, left: r };
}) });
function Fg(n) {
  return Array.isArray(n) ? n : [n];
}
function mu(n, e, t) {
  for (; n.value && n.from <= t; ) n.from == t && e.push(n.value), n.next();
}
class Zk {
  constructor(e, t, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = ze.iter(e.markers, t.from);
  }
  addElement(e, t, i) {
    let { gutter: r } = this, s = (t.top - this.height) / e.scaleY, o = t.height / e.scaleY;
    if (this.i == r.elements.length) {
      let l = new uv(e, o, s, i);
      r.elements.push(l), r.dom.appendChild(l.dom);
    } else r.elements[this.i].update(e, o, s, i);
    this.height = t.bottom, this.i++;
  }
  line(e, t, i) {
    let r = [];
    mu(this.cursor, r, t.from), i.length && (r = r.concat(i));
    let s = this.gutter.config.lineMarker(e, t, r);
    s && r.unshift(s);
    let o = this.gutter;
    r.length == 0 && !o.config.renderEmptyElements || this.addElement(e, t, r);
  }
  widget(e, t) {
    let i = this.gutter.config.widgetMarker(e, t.widget, t), r = i ? [i] : null;
    for (let s of e.state.facet(Gk)) {
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
class Hg {
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
    this.markers = Fg(t.markers(e)), t.initialSpacer && (this.spacer = new uv(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = Fg(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let r = this.config.updateSpacer(this.spacer.markers[0], e);
      r != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [r]);
    }
    let i = e.view.viewport;
    return !ze.eq(this.markers, t, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : false);
  }
  destroy() {
    for (let e of this.elements) e.destroy();
  }
}
class uv {
  constructor(e, t, i, r) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, i, r);
  }
  update(e, t, i, r) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), eC(this.markers, r) || this.setMarkers(e, r);
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
function eC(n, e) {
  if (n.length != e.length) return false;
  for (let t = 0; t < n.length; t++) if (!n[t].compare(e[t])) return false;
  return true;
}
const tC = new class extends Xr {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), nC = pc.compute(["selection"], (n) => {
  let e = [], t = -1;
  for (let i of n.selection.ranges) {
    let r = n.doc.lineAt(i.head).from;
    r > t && (t = r, e.push(tC.range(r)));
  }
  return ze.of(e);
});
function iC() {
  return nC;
}
const rC = 1024;
let sC = 0;
class Zf {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class We {
  constructor(e = {}) {
    this.id = sC++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  add(e) {
    if (this.perNode) throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = xi.match(e)), (t) => {
      let i = e(t);
      return i === void 0 ? null : [this, i];
    };
  }
}
We.closedBy = new We({ deserialize: (n) => n.split(" ") });
We.openedBy = new We({ deserialize: (n) => n.split(" ") });
We.group = new We({ deserialize: (n) => n.split(" ") });
We.isolate = new We({ deserialize: (n) => {
  if (n && n != "rtl" && n != "ltr" && n != "auto") throw new RangeError("Invalid value for isolate: " + n);
  return n || "auto";
} });
We.contextHash = new We({ perNode: true });
We.lookAhead = new We({ perNode: true });
We.mounted = new We({ perNode: true });
class Rc {
  constructor(e, t, i) {
    this.tree = e, this.overlay = t, this.parser = i;
  }
  static get(e) {
    return e && e.props && e.props[We.mounted.id];
  }
}
const oC = /* @__PURE__ */ Object.create(null);
class xi {
  constructor(e, t, i, r = 0) {
    this.name = e, this.props = t, this.id = i, this.flags = r;
  }
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : oC, i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), r = new xi(e.name || "", t, e.id, i);
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
      let t = this.prop(We.group);
      return t ? t.indexOf(e) > -1 : false;
    }
    return this.id == e;
  }
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e) for (let r of i.split(" ")) t[r] = e[i];
    return (i) => {
      for (let r = i.prop(We.group), s = -1; s < (r ? r.length : 0); s++) {
        let o = t[s < 0 ? i.name : r[s]];
        if (o) return o;
      }
    };
  }
}
xi.none = new xi("", /* @__PURE__ */ Object.create(null), 0, 8);
const za = /* @__PURE__ */ new WeakMap(), Vg = /* @__PURE__ */ new WeakMap();
var ln;
(function(n) {
  n[n.ExcludeBuffers = 1] = "ExcludeBuffers", n[n.IncludeAnonymous = 2] = "IncludeAnonymous", n[n.IgnoreMounts = 4] = "IgnoreMounts", n[n.IgnoreOverlays = 8] = "IgnoreOverlays";
})(ln || (ln = {}));
class mn {
  constructor(e, t, i, r, s) {
    if (this.type = e, this.children = t, this.positions = i, this.length = r, this.props = null, s && s.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of s) this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  toString() {
    let e = Rc.get(this);
    if (e && !e.overlay) return e.tree.toString();
    let t = "";
    for (let i of this.children) {
      let r = i.toString();
      r && (t && (t += ","), t += r);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  cursor(e = 0) {
    return new vu(this.topNode, e);
  }
  cursorAt(e, t = 0, i = 0) {
    let r = za.get(this) || this.topNode, s = new vu(r);
    return s.moveTo(e, t), za.set(this, s._tree), s;
  }
  get topNode() {
    return new bi(this, 0, 0, null);
  }
  resolve(e, t = 0) {
    let i = Ul(za.get(this) || this.topNode, e, t, false);
    return za.set(this, i), i;
  }
  resolveInner(e, t = 0) {
    let i = Ul(Vg.get(this) || this.topNode, e, t, true);
    return Vg.set(this, i), i;
  }
  resolveStack(e, t = 0) {
    return cC(this, e, t);
  }
  iterate(e) {
    let { enter: t, leave: i, from: r = 0, to: s = this.length } = e, o = e.mode || 0, l = (o & ln.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | ln.IncludeAnonymous); ; ) {
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
    return this.children.length <= 8 ? this : Ad(xi.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, i, r) => new mn(this.type, t, i, r, this.propValues), e.makeTree || ((t, i, r) => new mn(xi.none, t, i, r)));
  }
  static build(e) {
    return fC(e);
  }
}
mn.empty = new mn(xi.none, [], [], 0);
class Cd {
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
    return new Cd(this.buffer, this.index);
  }
}
class Zr {
  constructor(e, t, i) {
    this.buffer = e, this.length = t, this.set = i;
  }
  get type() {
    return xi.none;
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
    for (let a = e; a != t && !(dv(s, r, o[a + 1], o[a + 2]) && (l = a, i > 0)); a = o[a + 3]) ;
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
function dv(n, e, t, i) {
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
function Ul(n, e, t, i) {
  for (var r; n.from == n.to || (t < 1 ? n.from >= e : n.from > e) || (t > -1 ? n.to <= e : n.to < e); ) {
    let o = !i && n instanceof bi && n.index < 0 ? null : n.parent;
    if (!o) return n;
    n = o;
  }
  let s = i ? 0 : ln.IgnoreOverlays;
  if (i) for (let o = n, l = o.parent; l; o = l, l = o.parent) o instanceof bi && o.index < 0 && ((r = l.enter(e, t, s)) === null || r === void 0 ? void 0 : r.from) != o.from && (n = l);
  for (; ; ) {
    let o = n.enter(e, t, s);
    if (!o) return n;
    n = o;
  }
}
class pv {
  cursor(e = 0) {
    return new vu(this, e);
  }
  getChild(e, t = null, i = null) {
    let r = Wg(this, e, t, i);
    return r.length ? r[0] : null;
  }
  getChildren(e, t = null, i = null) {
    return Wg(this, e, t, i);
  }
  resolve(e, t = 0) {
    return Ul(this, e, t, false);
  }
  resolveInner(e, t = 0) {
    return Ul(this, e, t, true);
  }
  matchContext(e) {
    return yu(this.parent, e);
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
class bi extends pv {
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
        let h = l[e], p = a[e] + o.from;
        if (dv(r, i, p, p + h.length)) {
          if (h instanceof Zr) {
            if (s & ln.ExcludeBuffers) continue;
            let m = h.findChild(0, h.buffer.length, t, i - p, r);
            if (m > -1) return new Ur(new lC(o, h, e, p), null, m);
          } else if (s & ln.IncludeAnonymous || !h.type.isAnonymous || Md(h)) {
            let m;
            if (!(s & ln.IgnoreMounts) && (m = Rc.get(h)) && !m.overlay) return new bi(m.tree, p, e, o);
            let b = new bi(h, p, e, o);
            return s & ln.IncludeAnonymous || !b.type.isAnonymous ? b : b.nextChild(t < 0 ? h.children.length - 1 : 0, t, i, r);
          }
        }
      }
      if (s & ln.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + t : e = t < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o)) return null;
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
  enter(e, t, i = 0) {
    let r;
    if (!(i & ln.IgnoreOverlays) && (r = Rc.get(this._tree)) && r.overlay) {
      let s = e - this.from;
      for (let { from: o, to: l } of r.overlay) if ((t > 0 ? o <= s : o < s) && (t < 0 ? l >= s : l > s)) return new bi(r.tree, r.overlay[0].from + this.from, -1, this);
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
function Wg(n, e, t, i) {
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
function yu(n, e, t = e.length - 1) {
  for (let i = n; t >= 0; i = i.parent) {
    if (!i) return false;
    if (!i.type.isAnonymous) {
      if (e[t] && e[t] != i.name) return false;
      t--;
    }
  }
  return true;
}
class lC {
  constructor(e, t, i, r) {
    this.parent = e, this.buffer = t, this.index = i, this.start = r;
  }
}
class Ur extends pv {
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
  enter(e, t, i = 0) {
    if (i & ln.ExcludeBuffers) return null;
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
    return new mn(this.type, e, t, this.to - this.from);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function gv(n) {
  if (!n.length) return null;
  let e = 0, t = n[0];
  for (let s = 1; s < n.length; s++) {
    let o = n[s];
    (o.from > t.from || o.to < t.to) && (t = o, e = s);
  }
  let i = t instanceof bi && t.index < 0 ? null : t.parent, r = n.slice();
  return i ? r[e] = i : r.splice(e, 1), new aC(r, t);
}
class aC {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return gv(this.heads);
  }
}
function cC(n, e, t) {
  let i = n.resolveInner(e, t), r = null;
  for (let s = i instanceof bi ? i : i.context.parent; s; s = s.parent) if (s.index < 0) {
    let o = s.parent;
    (r || (r = [i])).push(o.resolve(e, t)), s = o;
  } else {
    let o = Rc.get(s.tree);
    if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
      let l = new bi(o.tree, o.overlay[0].from + s.from, -1, s);
      (r || (r = [i])).push(Ul(l, e, t, false));
    }
  }
  return r ? gv(r) : i;
}
class vu {
  get name() {
    return this.type.name;
  }
  constructor(e, t = 0) {
    if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof bi) this.yieldNode(e);
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
    return e ? e instanceof bi ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : false;
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
    return this.buffer ? i & ln.ExcludeBuffers ? false : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, i));
  }
  parent() {
    if (!this.buffer) return this.yieldNode(this.mode & ln.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length) return this.yieldBuf(this.stack.pop());
    let e = this.mode & ln.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
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
      if (this.mode & ln.IncludeAnonymous || l instanceof Zr || !l.type.isAnonymous || Md(l)) return false;
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
    if (!this.buffer) return yu(this.node.parent, e);
    let { buffer: t } = this.buffer, { types: i } = t.set;
    for (let r = e.length - 1, s = this.stack.length - 1; r >= 0; s--) {
      if (s < 0) return yu(this._tree, e, r);
      let o = i[t.buffer[this.stack[s]]];
      if (!o.isAnonymous) {
        if (e[r] && e[r] != o.name) return false;
        r--;
      }
    }
    return true;
  }
}
function Md(n) {
  return n.children.some((e) => e instanceof Zr || !e.type.isAnonymous || Md(e));
}
function fC(n) {
  var e;
  let { buffer: t, nodeSet: i, maxBufferLength: r = rC, reused: s = [], minRepeatType: o = i.types.length } = n, l = Array.isArray(t) ? new Cd(t, t.length) : t, a = i.types, f = 0, h = 0;
  function p(W, H, K, ee, oe, re) {
    let { id: q, start: Z, end: J, size: se } = l, ie = h, ke = f;
    for (; se < 0; ) if (l.next(), se == -1) {
      let Le = s[q];
      K.push(Le), ee.push(Z - W);
      return;
    } else if (se == -3) {
      f = q;
      return;
    } else if (se == -4) {
      h = q;
      return;
    } else throw new RangeError(`Unrecognized record size: ${se}`);
    let ae = a[q], te, Te, Me = Z - W;
    if (J - Z <= r && (Te = A(l.pos - H, oe))) {
      let Le = new Uint16Array(Te.size - Te.skip), ye = l.pos - Te.size, fe = Le.length;
      for (; l.pos > ye; ) fe = _(Te.start, Le, fe);
      te = new Zr(Le, J - Te.start, i), Me = Te.start - W;
    } else {
      let Le = l.pos - se;
      l.next();
      let ye = [], fe = [], Ke = q >= o ? q : -1, De = 0, Ge = J;
      for (; l.pos > Le; ) Ke >= 0 && l.id == Ke && l.size >= 0 ? (l.end <= Ge - r && (S(ye, fe, Z, De, l.end, Ge, Ke, ie, ke), De = ye.length, Ge = l.end), l.next()) : re > 2500 ? m(Z, Le, ye, fe) : p(Z, Le, ye, fe, Ke, re + 1);
      if (Ke >= 0 && De > 0 && De < ye.length && S(ye, fe, Z, De, Z, Ge, Ke, ie, ke), ye.reverse(), fe.reverse(), Ke > -1 && De > 0) {
        let Ne = b(ae, ke);
        te = Ad(ae, ye, fe, 0, ye.length, 0, J - Z, Ne, Ne);
      } else te = M(ae, ye, fe, J - Z, ie - J, ke);
    }
    K.push(te), ee.push(Me);
  }
  function m(W, H, K, ee) {
    let oe = [], re = 0, q = -1;
    for (; l.pos > H; ) {
      let { id: Z, start: J, end: se, size: ie } = l;
      if (ie > 4) l.next();
      else {
        if (q > -1 && J < q) break;
        q < 0 && (q = se - r), oe.push(Z, J, se), re++, l.next();
      }
    }
    if (re) {
      let Z = new Uint16Array(re * 4), J = oe[oe.length - 2];
      for (let se = oe.length - 3, ie = 0; se >= 0; se -= 3) Z[ie++] = oe[se], Z[ie++] = oe[se + 1] - J, Z[ie++] = oe[se + 2] - J, Z[ie++] = ie;
      K.push(new Zr(Z, oe[2] - J, i)), ee.push(J - W);
    }
  }
  function b(W, H) {
    return (K, ee, oe) => {
      let re = 0, q = K.length - 1, Z, J;
      if (q >= 0 && (Z = K[q]) instanceof mn) {
        if (!q && Z.type == W && Z.length == oe) return Z;
        (J = Z.prop(We.lookAhead)) && (re = ee[q] + Z.length + J);
      }
      return M(W, K, ee, oe, re, H);
    };
  }
  function S(W, H, K, ee, oe, re, q, Z, J) {
    let se = [], ie = [];
    for (; W.length > ee; ) se.push(W.pop()), ie.push(H.pop() + K - oe);
    W.push(M(i.types[q], se, ie, re - oe, Z - re, J)), H.push(oe - K);
  }
  function M(W, H, K, ee, oe, re, q) {
    if (re) {
      let Z = [We.contextHash, re];
      q = q ? [Z].concat(q) : [Z];
    }
    if (oe > 25) {
      let Z = [We.lookAhead, oe];
      q = q ? [Z].concat(q) : [Z];
    }
    return new mn(W, H, K, ee, q);
  }
  function A(W, H) {
    let K = l.fork(), ee = 0, oe = 0, re = 0, q = K.end - r, Z = { size: 0, start: 0, skip: 0 };
    e: for (let J = K.pos - W; K.pos > J; ) {
      let se = K.size;
      if (K.id == H && se >= 0) {
        Z.size = ee, Z.start = oe, Z.skip = re, re += 4, ee += 4, K.next();
        continue;
      }
      let ie = K.pos - se;
      if (se < 0 || ie < J || K.start < q) break;
      let ke = K.id >= o ? 4 : 0, ae = K.start;
      for (K.next(); K.pos > ie; ) {
        if (K.size < 0) if (K.size == -3) ke += 4;
        else break e;
        else K.id >= o && (ke += 4);
        K.next();
      }
      oe = ae, ee += se, re += ke;
    }
    return (H < 0 || ee == W) && (Z.size = ee, Z.start = oe, Z.skip = re), Z.size > 4 ? Z : void 0;
  }
  function _(W, H, K) {
    let { id: ee, start: oe, end: re, size: q } = l;
    if (l.next(), q >= 0 && ee < o) {
      let Z = K;
      if (q > 4) {
        let J = l.pos - (q - 4);
        for (; l.pos > J; ) K = _(W, H, K);
      }
      H[--K] = Z, H[--K] = re - W, H[--K] = oe - W, H[--K] = ee;
    } else q == -3 ? f = ee : q == -4 && (h = ee);
    return K;
  }
  let R = [], N = [];
  for (; l.pos > 0; ) p(n.start || 0, n.bufferStart || 0, R, N, -1, 0);
  let B = (e = n.length) !== null && e !== void 0 ? e : R.length ? N[0] + R[0].length : 0;
  return new mn(a[n.topID], R.reverse(), N.reverse(), B);
}
const $g = /* @__PURE__ */ new WeakMap();
function mc(n, e) {
  if (!n.isAnonymous || e instanceof Zr || e.type != n) return 1;
  let t = $g.get(e);
  if (t == null) {
    t = 1;
    for (let i of e.children) {
      if (i.type != n || !(i instanceof mn)) {
        t = 1;
        break;
      }
      t += mc(n, i);
    }
    $g.set(e, t);
  }
  return t;
}
function Ad(n, e, t, i, r, s, o, l, a) {
  let f = 0;
  for (let S = i; S < r; S++) f += mc(n, e[S]);
  let h = Math.ceil(f * 1.5 / 8), p = [], m = [];
  function b(S, M, A, _, R) {
    for (let N = A; N < _; ) {
      let B = N, W = M[N], H = mc(n, S[N]);
      for (N++; N < _; N++) {
        let K = mc(n, S[N]);
        if (H + K >= h) break;
        H += K;
      }
      if (N == B + 1) {
        if (H > h) {
          let K = S[B];
          b(K.children, K.positions, 0, K.children.length, M[B] + R);
          continue;
        }
        p.push(S[B]);
      } else {
        let K = M[N - 1] + S[N - 1].length - W;
        p.push(Ad(n, S, M, B, N, W, K, null, a));
      }
      m.push(W + R - s);
    }
  }
  return b(e, t, i, r, 0), (l || a)(p, m, o);
}
class Os {
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
    let r = [new Os(0, e.length, e, 0, false, i)];
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
          let b = Math.max(m.from, a) - f, S = Math.min(m.to, p) - f;
          m = b >= S ? null : new Os(b, S, m.tree, m.offset + f, l > 0, !!h);
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
class hC {
  startParse(e, t, i) {
    return typeof e == "string" && (e = new uC(e)), i = i ? i.length ? i.map((r) => new Zf(r.from, r.to)) : [new Zf(0, 0)] : [new Zf(0, e.length)], this.createParse(e, t || [], i);
  }
  parse(e, t, i) {
    let r = this.startParse(e, t, i);
    for (; ; ) {
      let s = r.advance();
      if (s) return s;
    }
  }
}
class uC {
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
new We({ perNode: true });
let dC = 0;
class di {
  constructor(e, t, i, r) {
    this.name = e, this.set = t, this.base = i, this.modified = r, this.id = dC++;
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
    let t = new Pc(e);
    return (i) => i.modified.indexOf(t) > -1 ? i : Pc.get(i.base || i, i.modified.concat(t).sort((r, s) => r.id - s.id));
  }
}
let pC = 0;
class Pc {
  constructor(e) {
    this.name = e, this.instances = [], this.id = pC++;
  }
  static get(e, t) {
    if (!t.length) return e;
    let i = t[0].instances.find((l) => l.base == e && gC(t, l.modified));
    if (i) return i;
    let r = [], s = new di(e.name, r, e, t);
    for (let l of t) l.instances.push(s);
    let o = mC(t);
    for (let l of e.set) if (!l.modified.length) for (let a of o) r.push(Pc.get(l, a));
    return s;
  }
}
function gC(n, e) {
  return n.length == e.length && n.every((t, i) => t == e[i]);
}
function mC(n) {
  let e = [[]];
  for (let t = 0; t < n.length; t++) for (let i = 0, r = e.length; i < r; i++) e.push(e[i].concat(n[t]));
  return e.sort((t, i) => i.length - t.length);
}
function yC(n) {
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
      let h = new Bc(i, o, a > 0 ? s.slice(0, a) : null);
      e[f] = h.sort(e[f]);
    }
  }
  return mv.add(e);
}
const mv = new We();
class Bc {
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
Bc.empty = new Bc([], 2, null);
function yv(n, e) {
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
function vC(n, e) {
  let t = null;
  for (let i of n) {
    let r = i.style(e);
    r && (t = t ? t + " " + r : r);
  }
  return t;
}
function bC(n, e, t, i = 0, r = n.length) {
  let s = new wC(i, Array.isArray(e) ? e : [e], t);
  s.highlightRange(n.cursor(), i, r, "", s.highlighters), s.flush(r);
}
class wC {
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
    let f = r, h = xC(e) || Bc.empty, p = vC(s, h.tags);
    if (p && (f && (f += " "), f += p, h.mode == 1 && (r += (r ? " " : "") + p)), this.startSpan(Math.max(t, l), f), h.opaque) return;
    let m = e.tree && e.tree.prop(We.mounted);
    if (m && m.overlay) {
      let b = e.node.enter(m.overlay[0].from + l, 1), S = this.highlighters.filter((A) => !A.scope || A.scope(m.tree.type)), M = e.firstChild();
      for (let A = 0, _ = l; ; A++) {
        let R = A < m.overlay.length ? m.overlay[A] : null, N = R ? R.from + l : a, B = Math.max(t, _), W = Math.min(i, N);
        if (B < W && M) for (; e.from < W && (this.highlightRange(e, B, W, r, s), this.startSpan(Math.min(W, e.to), f), !(e.to >= N || !e.nextSibling())); ) ;
        if (!R || N > i) break;
        _ = R.to + l, _ > t && (this.highlightRange(b.cursor(), Math.max(t, R.from + l), Math.min(i, _), "", S), this.startSpan(Math.min(i, _), f));
      }
      M && e.parent();
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
function xC(n) {
  let e = n.type.prop(mv);
  for (; e && e.context && !n.matchContext(e.context); ) e = e.next;
  return e || null;
}
const le = di.define, Ka = le(), Vr = le(), zg = le(Vr), Kg = le(Vr), Wr = le(), ja = le(Wr), eh = le(Wr), Zi = le(), ps = le(Zi), Yi = le(), Ji = le(), bu = le(), ll = le(bu), qa = le(), U = { comment: Ka, lineComment: le(Ka), blockComment: le(Ka), docComment: le(Ka), name: Vr, variableName: le(Vr), typeName: zg, tagName: le(zg), propertyName: Kg, attributeName: le(Kg), className: le(Vr), labelName: le(Vr), namespace: le(Vr), macroName: le(Vr), literal: Wr, string: ja, docString: le(ja), character: le(ja), attributeValue: le(ja), number: eh, integer: le(eh), float: le(eh), bool: le(Wr), regexp: le(Wr), escape: le(Wr), color: le(Wr), url: le(Wr), keyword: Yi, self: le(Yi), null: le(Yi), atom: le(Yi), unit: le(Yi), modifier: le(Yi), operatorKeyword: le(Yi), controlKeyword: le(Yi), definitionKeyword: le(Yi), moduleKeyword: le(Yi), operator: Ji, derefOperator: le(Ji), arithmeticOperator: le(Ji), logicOperator: le(Ji), bitwiseOperator: le(Ji), compareOperator: le(Ji), updateOperator: le(Ji), definitionOperator: le(Ji), typeOperator: le(Ji), controlOperator: le(Ji), punctuation: bu, separator: le(bu), bracket: ll, angleBracket: le(ll), squareBracket: le(ll), paren: le(ll), brace: le(ll), content: Zi, heading: ps, heading1: le(ps), heading2: le(ps), heading3: le(ps), heading4: le(ps), heading5: le(ps), heading6: le(ps), contentSeparator: le(Zi), list: le(Zi), quote: le(Zi), emphasis: le(Zi), strong: le(Zi), link: le(Zi), monospace: le(Zi), strikethrough: le(Zi), inserted: le(), deleted: le(), changed: le(), invalid: le(), meta: qa, documentMeta: le(qa), annotation: le(qa), processingInstruction: le(qa), definition: di.defineModifier("definition"), constant: di.defineModifier("constant"), function: di.defineModifier("function"), standard: di.defineModifier("standard"), local: di.defineModifier("local"), special: di.defineModifier("special") };
for (let n in U) {
  let e = U[n];
  e instanceof di && (e.name = n);
}
yv([{ tag: U.link, class: "tok-link" }, { tag: U.heading, class: "tok-heading" }, { tag: U.emphasis, class: "tok-emphasis" }, { tag: U.strong, class: "tok-strong" }, { tag: U.keyword, class: "tok-keyword" }, { tag: U.atom, class: "tok-atom" }, { tag: U.bool, class: "tok-bool" }, { tag: U.url, class: "tok-url" }, { tag: U.labelName, class: "tok-labelName" }, { tag: U.inserted, class: "tok-inserted" }, { tag: U.deleted, class: "tok-deleted" }, { tag: U.literal, class: "tok-literal" }, { tag: U.string, class: "tok-string" }, { tag: U.number, class: "tok-number" }, { tag: [U.regexp, U.escape, U.special(U.string)], class: "tok-string2" }, { tag: U.variableName, class: "tok-variableName" }, { tag: U.local(U.variableName), class: "tok-variableName tok-local" }, { tag: U.definition(U.variableName), class: "tok-variableName tok-definition" }, { tag: U.special(U.variableName), class: "tok-variableName2" }, { tag: U.definition(U.propertyName), class: "tok-propertyName tok-definition" }, { tag: U.typeName, class: "tok-typeName" }, { tag: U.namespace, class: "tok-namespace" }, { tag: U.className, class: "tok-className" }, { tag: U.macroName, class: "tok-macroName" }, { tag: U.propertyName, class: "tok-propertyName" }, { tag: U.operator, class: "tok-operator" }, { tag: U.comment, class: "tok-comment" }, { tag: U.meta, class: "tok-meta" }, { tag: U.invalid, class: "tok-invalid" }, { tag: U.punctuation, class: "tok-punctuation" }]);
var th;
const bl = new We(), SC = new We();
class Di {
  constructor(e, t, i = [], r = "") {
    this.data = e, this.name = r, $e.prototype.hasOwnProperty("tree") || Object.defineProperty($e.prototype, "tree", { get() {
      return vn(this);
    } }), this.parser = t, this.extension = [es.of(this), $e.languageData.of((s, o, l) => {
      let a = jg(s, o, l), f = a.type.prop(bl);
      if (!f) return [];
      let h = s.facet(f), p = a.type.prop(SC);
      if (p) {
        let m = a.resolve(o - a.from, l);
        for (let b of p) if (b.test(m, s)) {
          let S = s.facet(b.facet);
          return b.type == "replace" ? S : S.concat(h);
        }
      }
      return h;
    })].concat(i);
  }
  isActiveAt(e, t, i = -1) {
    return jg(e, t, i).type.prop(bl) == this.data;
  }
  findRegions(e) {
    let t = e.facet(es);
    if ((t == null ? void 0 : t.data) == this.data) return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting) return [];
    let i = [], r = (s, o) => {
      if (s.prop(bl) == this.data) {
        i.push({ from: o, to: o + s.length });
        return;
      }
      let l = s.prop(We.mounted);
      if (l) {
        if (l.tree.prop(bl) == this.data) {
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
        f instanceof mn && r(f, s.positions[a] + o);
      }
    };
    return r(vn(e), 0), i;
  }
  get allowsNesting() {
    return true;
  }
}
Di.setState = Ee.define();
function jg(n, e, t) {
  let i = n.facet(es), r = vn(n).topNode;
  if (!i || i.allowsNesting) for (let s = r; s; s = s.enter(e, t, ln.ExcludeBuffers)) s.type.isTop && (r = s);
  return r;
}
function vn(n) {
  let e = n.field(Di.state, false);
  return e ? e.tree : mn.empty;
}
function vv(n, e, t = 50) {
  var i;
  let r = (i = n.field(Di.state, false)) === null || i === void 0 ? void 0 : i.context;
  if (!r) return null;
  let s = r.viewport;
  r.updateViewport({ from: 0, to: e });
  let o = r.isDone(e) || r.work(t, e) ? r.tree : null;
  return r.updateViewport(s), o;
}
class kC {
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
let al = null;
class Ic {
  constructor(e, t, i = [], r, s, o, l, a) {
    this.parser = e, this.state = t, this.fragments = i, this.tree = r, this.treeLen = s, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  static create(e, t, i) {
    return new Ic(e, t, [], mn.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new kC(this.state.doc), this.fragments);
  }
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != mn.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), true) : this.withContext(() => {
      var i;
      if (typeof e == "number") {
        let r = Date.now() + e;
        e = () => Date.now() > r;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let r = this.parse.advance();
        if (r) if (this.fragments = this.withoutTempSkipped(Os.addTree(r, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = r, this.parse = null, this.treeLen < (t ?? this.state.doc.length)) this.parse = this.startParse();
        else return true;
        if (e()) return false;
      }
    });
  }
  takeTree() {
    let e, t;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(t = this.parse.advance()); ) ;
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(Os.addTree(this.tree, this.fragments, true)), this.parse = null);
  }
  withContext(e) {
    let t = al;
    al = this;
    try {
      return e();
    } finally {
      al = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); ) e = qg(e, t.from, t.to);
    return e;
  }
  changes(e, t) {
    let { fragments: i, tree: r, treeLen: s, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((f, h, p, m) => a.push({ fromA: f, toA: h, fromB: p, toB: m })), i = Os.applyChanges(i, a), r = mn.empty, s = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let f of this.skipped) {
          let h = e.mapPos(f.from, 1), p = e.mapPos(f.to, -1);
          h < p && l.push({ from: h, to: p });
        }
      }
    }
    return new Ic(this.parser, t, i, r, s, o, l, this.scheduleOn);
  }
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to) return false;
    this.viewport = e;
    let t = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: r, to: s } = this.skipped[i];
      r < e.to && s > e.from && (this.fragments = qg(this.fragments, r, s), this.skipped.splice(i--, 1));
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
    return new class extends hC {
      createParse(t, i, r) {
        let s = r[0].from, o = r[r.length - 1].to;
        return { parsedPos: s, advance() {
          let a = al;
          if (a) {
            for (let f of r) a.tempSkipped.push(f);
            e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
          }
          return this.parsedPos = o, new mn(xi.none, [], [], o - s);
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
    return al;
  }
}
function qg(n, e, t) {
  return Os.applyChanges(n, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class So {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree) return this;
    let t = this.context.changes(e.changes, e.state), i = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, i) || t.takeTree(), new So(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), i = Ic.create(e.facet(es).parser, e, { from: 0, to: t });
    return i.work(20, t) || i.takeTree(), new So(i);
  }
}
Di.state = Yt.define({ create: So.init, update(n, e) {
  for (let t of e.effects) if (t.is(Di.setState)) return t.value;
  return e.startState.facet(es) != e.state.facet(es) ? So.init(e.state) : n.apply(e);
} });
let bv = (n) => {
  let e = setTimeout(() => n(), 500);
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (bv = (n) => {
  let e = -1, t = setTimeout(() => {
    e = requestIdleCallback(n, { timeout: 400 });
  }, 100);
  return () => e < 0 ? clearTimeout(t) : cancelIdleCallback(e);
});
const nh = typeof navigator < "u" && (!((th = navigator.scheduling) === null || th === void 0) && th.isInputPending) ? () => navigator.scheduling.isInputPending() : null, CC = kt.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(Di.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working) return;
    let { state: e } = this.view, t = e.field(Di.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = bv(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
    let { state: i, viewport: { to: r } } = this.view, s = i.field(Di.state);
    if (s.tree == s.context.tree && s.context.isDone(r + 1e5)) return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !nh ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = s.context.treeLen < r && i.doc.length > r + 1e3, a = s.context.work(() => nh && nh() || Date.now() > o, r + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (s.context.takeTree(), this.view.dispatch({ effects: Di.setState.of(new So(s.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(s.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => Rn(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, { eventHandlers: { focus() {
  this.scheduleWork();
} } }), es = be.define({ combine(n) {
  return n.length ? n[0] : null;
}, enables: (n) => [Di.state, CC, he.contentAttributes.compute([n], (e) => {
  let t = e.facet(n);
  return t && t.name ? { "data-language": t.name } : {};
})] }), MC = be.define(), Gl = be.define({ combine: (n) => {
  if (!n.length) return "  ";
  let e = n[0];
  if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0])) throw new Error("Invalid indent unit: " + JSON.stringify(n[0]));
  return e;
} });
function Nc(n) {
  let e = n.facet(Gl);
  return e.charCodeAt(0) == 9 ? n.tabSize * e.length : e.length;
}
function Yl(n, e) {
  let t = "", i = n.tabSize, r = n.facet(Gl)[0];
  if (r == "	") {
    for (; e >= i; ) t += "	", e -= i;
    r = " ";
  }
  for (let s = 0; s < e; s++) t += r;
  return t;
}
function Ed(n, e) {
  n instanceof $e && (n = new ff(n));
  for (let i of n.state.facet(MC)) {
    let r = i(n, e);
    if (r !== void 0) return r;
  }
  let t = vn(n.state);
  return t.length >= e ? EC(n, t, e) : null;
}
class ff {
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = Nc(e);
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
    return Do(e, this.state.tabSize, t);
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
const AC = new We();
function EC(n, e, t) {
  let i = e.resolveStack(t), r = e.resolveInner(t, -1).resolve(t, 0).enterUnfinishedNodesBefore(t);
  if (r != i.node) {
    let s = [];
    for (let o = r; o && !(o.from < i.node.from || o.to > i.node.to || o.from == i.node.from && o.type == i.node.type); o = o.parent) s.push(o);
    for (let o = s.length - 1; o >= 0; o--) i = { node: s[o], next: i };
  }
  return wv(i, n, t);
}
function wv(n, e, t) {
  for (let i = n; i; i = i.next) {
    let r = OC(i.node);
    if (r) return r(Td.create(e, t, i));
  }
  return 0;
}
function TC(n) {
  return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
}
function OC(n) {
  let e = n.type.prop(AC);
  if (e) return e;
  let t = n.firstChild, i;
  if (t && (i = t.type.prop(We.closedBy))) {
    let r = n.lastChild, s = r && i.indexOf(r.name) > -1;
    return (o) => RC(o, true, 1, void 0, s && !TC(o) ? r.from : void 0);
  }
  return n.parent == null ? _C : null;
}
function _C() {
  return 0;
}
class Td extends ff {
  constructor(e, t, i) {
    super(e.state, e.options), this.base = e, this.pos = t, this.context = i;
  }
  get node() {
    return this.context.node;
  }
  static create(e, t, i) {
    return new Td(e, t, i);
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
      if (LC(i, e)) break;
      t = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(t.from);
  }
  continue() {
    return wv(this.context.next, this.base, this.pos);
  }
}
function LC(n, e) {
  for (let t = e; t; t = t.parent) if (n == t) return true;
  return false;
}
function DC(n) {
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
function RC(n, e, t, i, r) {
  let s = n.textAfter, o = s.match(/^\s*/)[0].length, l = i && s.slice(o, o + i.length) == i || r == n.pos + o, a = DC(n);
  return a ? l ? n.column(a.from) : n.column(a.to) : n.baseIndent + (l ? 0 : n.unit * t);
}
const PC = 200;
function BC() {
  return $e.transactionFilter.of((n) => {
    if (!n.docChanged || !n.isUserEvent("input.type") && !n.isUserEvent("input.complete")) return n;
    let e = n.startState.languageDataAt("indentOnInput", n.startState.selection.main.head);
    if (!e.length) return n;
    let t = n.newDoc, { head: i } = n.newSelection.main, r = t.lineAt(i);
    if (i > r.from + PC) return n;
    let s = t.sliceString(r.from, i);
    if (!e.some((f) => f.test(s))) return n;
    let { state: o } = n, l = -1, a = [];
    for (let { head: f } of o.selection.ranges) {
      let h = o.doc.lineAt(f);
      if (h.from == l) continue;
      l = h.from;
      let p = Ed(o, h.from);
      if (p == null) continue;
      let m = /^\s*/.exec(h.text)[0], b = Yl(o, p);
      m != b && a.push({ from: h.from, to: h.from + m.length, insert: b });
    }
    return a.length ? [n, { changes: a, sequential: true }] : n;
  });
}
const IC = be.define(), NC = new We();
function FC(n, e, t) {
  let i = vn(n);
  if (i.length < t) return null;
  let r = i.resolveStack(t, 1), s = null;
  for (let o = r; o; o = o.next) {
    let l = o.node;
    if (l.to <= t || l.from > t) continue;
    if (s && l.from < e) break;
    let a = l.type.prop(NC);
    if (a && (l.to < i.length - 50 || i.length == n.doc.length || !HC(l))) {
      let f = a(l, n);
      f && f.from <= t && f.from >= e && f.to > t && (s = f);
    }
  }
  return s;
}
function HC(n) {
  let e = n.lastChild;
  return e && e.to == n.to && e.type.isError;
}
function Fc(n, e, t) {
  for (let i of n.facet(IC)) {
    let r = i(n, e, t);
    if (r) return r;
  }
  return FC(n, e, t);
}
function xv(n, e) {
  let t = e.mapPos(n.from, 1), i = e.mapPos(n.to, -1);
  return t >= i ? void 0 : { from: t, to: i };
}
const hf = Ee.define({ map: xv }), oa = Ee.define({ map: xv });
function Sv(n) {
  let e = [];
  for (let { head: t } of n.state.selection.ranges) e.some((i) => i.from <= t && i.to >= t) || e.push(n.lineBlockAt(t));
  return e;
}
const Ws = Yt.define({ create() {
  return ve.none;
}, update(n, e) {
  e.isUserEvent("delete") && e.changes.iterChangedRanges((t, i) => n = Ug(n, t, i)), n = n.map(e.changes);
  for (let t of e.effects) if (t.is(hf) && !VC(n, t.value.from, t.value.to)) {
    let { preparePlaceholder: i } = e.state.facet(Av), r = i ? ve.replace({ widget: new qC(i(e.state, t.value)) }) : Gg;
    n = n.update({ add: [r.range(t.value.from, t.value.to)] });
  } else t.is(oa) && (n = n.update({ filter: (i, r) => t.value.from != i || t.value.to != r, filterFrom: t.value.from, filterTo: t.value.to }));
  return e.selection && (n = Ug(n, e.selection.main.head)), n;
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
    e.push(Gg.range(i, r));
  }
  return ve.set(e, true);
} });
function Ug(n, e, t = e) {
  let i = false;
  return n.between(e, t, (r, s) => {
    r < t && s > e && (i = true);
  }), i ? n.update({ filterFrom: e, filterTo: t, filter: (r, s) => r >= t || s <= e }) : n;
}
function Hc(n, e, t) {
  var i;
  let r = null;
  return (i = n.field(Ws, false)) === null || i === void 0 || i.between(e, t, (s, o) => {
    (!r || r.from > s) && (r = { from: s, to: o });
  }), r;
}
function VC(n, e, t) {
  let i = false;
  return n.between(e, e, (r, s) => {
    r == e && s == t && (i = true);
  }), i;
}
function kv(n, e) {
  return n.field(Ws, false) ? e : e.concat(Ee.appendConfig.of(Ev()));
}
const Cv = (n) => {
  for (let e of Sv(n)) {
    let t = Fc(n.state, e.from, e.to);
    if (t) return n.dispatch({ effects: kv(n.state, [hf.of(t), Mv(n, t)]) }), true;
  }
  return false;
}, WC = (n) => {
  if (!n.state.field(Ws, false)) return false;
  let e = [];
  for (let t of Sv(n)) {
    let i = Hc(n.state, t.from, t.to);
    i && e.push(oa.of(i), Mv(n, i, false));
  }
  return e.length && n.dispatch({ effects: e }), e.length > 0;
};
function Mv(n, e, t = true) {
  let i = n.state.doc.lineAt(e.from).number, r = n.state.doc.lineAt(e.to).number;
  return he.announce.of(`${n.state.phrase(t ? "Folded lines" : "Unfolded lines")} ${i} ${n.state.phrase("to")} ${r}.`);
}
const $C = (n) => {
  let { state: e } = n, t = [];
  for (let i = 0; i < e.doc.length; ) {
    let r = n.lineBlockAt(i), s = Fc(e, r.from, r.to);
    s && t.push(hf.of(s)), i = (s ? n.lineBlockAt(s.to) : r).to + 1;
  }
  return t.length && n.dispatch({ effects: kv(n.state, t) }), !!t.length;
}, zC = (n) => {
  let e = n.state.field(Ws, false);
  if (!e || !e.size) return false;
  let t = [];
  return e.between(0, n.state.doc.length, (i, r) => {
    t.push(oa.of({ from: i, to: r }));
  }), n.dispatch({ effects: t }), true;
}, KC = [{ key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: Cv }, { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: WC }, { key: "Ctrl-Alt-[", run: $C }, { key: "Ctrl-Alt-]", run: zC }], jC = { placeholderDOM: null, preparePlaceholder: null, placeholderText: "\u2026" }, Av = be.define({ combine(n) {
  return Or(n, jC);
} });
function Ev(n) {
  return [Ws, YC];
}
function Tv(n, e) {
  let { state: t } = n, i = t.facet(Av), r = (o) => {
    let l = n.lineBlockAt(n.posAtDOM(o.target)), a = Hc(n.state, l.from, l.to);
    a && n.dispatch({ effects: oa.of(a) }), o.preventDefault();
  };
  if (i.placeholderDOM) return i.placeholderDOM(n, r, e);
  let s = document.createElement("span");
  return s.textContent = i.placeholderText, s.setAttribute("aria-label", t.phrase("folded code")), s.title = t.phrase("unfold"), s.className = "cm-foldPlaceholder", s.onclick = r, s;
}
const Gg = ve.replace({ widget: new class extends Ni {
  toDOM(n) {
    return Tv(n, null);
  }
}() });
class qC extends Ni {
  constructor(e) {
    super(), this.value = e;
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return Tv(e, this.value);
  }
}
const UC = { openText: "\u2304", closedText: "\u203A", markerDOM: null, domEventHandlers: {}, foldingChanged: () => false };
class ih extends Xr {
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
function GC(n = {}) {
  let e = { ...UC, ...n }, t = new ih(e, true), i = new ih(e, false), r = kt.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(es) != o.state.facet(es) || o.startState.field(Ws, false) != o.state.field(Ws, false) || vn(o.startState) != vn(o.state) || e.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let l = new Ri();
      for (let a of o.viewportLineBlocks) {
        let f = Hc(o.state, a.from, a.to) ? i : Fc(o.state, a.from, a.to) ? t : null;
        f && l.add(a.from, a.from, f);
      }
      return l.finish();
    }
  }), { domEventHandlers: s } = e;
  return [r, Jk({ class: "cm-foldGutter", markers(o) {
    var l;
    return ((l = o.plugin(r)) === null || l === void 0 ? void 0 : l.markers) || ze.empty;
  }, initialSpacer() {
    return new ih(e, false);
  }, domEventHandlers: { ...s, click: (o, l, a) => {
    if (s.click && s.click(o, l, a)) return true;
    let f = Hc(o.state, l.from, l.to);
    if (f) return o.dispatch({ effects: oa.of(f) }), true;
    let h = Fc(o.state, l.from, l.to);
    return h ? (o.dispatch({ effects: hf.of(h) }), true) : false;
  } } }), Ev()];
}
const YC = he.baseTheme({ ".cm-foldPlaceholder": { backgroundColor: "#eee", border: "1px solid #ddd", color: "#888", borderRadius: ".2em", margin: "0 1px", padding: "0 1px", cursor: "pointer" }, ".cm-foldGutter span": { padding: "0 1px", cursor: "pointer" } });
class la {
  constructor(e, t) {
    this.specs = e;
    let i;
    function r(l) {
      let a = Yr.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const s = typeof t.all == "string" ? t.all : t.all ? r(t.all) : void 0, o = t.scope;
    this.scope = o instanceof Di ? (l) => l.prop(bl) == o.data : o ? (l) => l == o : void 0, this.style = yv(e.map((l) => ({ tag: l.tag, class: l.class || r(Object.assign({}, l, { tag: null })) })), { all: s }).style, this.module = i ? new Yr(i) : null, this.themeType = t.themeType;
  }
  static define(e, t) {
    return new la(e, t || {});
  }
}
const wu = be.define(), Ov = be.define({ combine(n) {
  return n.length ? [n[0]] : null;
} });
function rh(n) {
  let e = n.facet(wu);
  return e.length ? e : n.facet(Ov);
}
function _v(n, e) {
  let t = [QC], i;
  return n instanceof la && (n.module && t.push(he.styleModule.of(n.module)), i = n.themeType), (e == null ? void 0 : e.fallback) ? t.push(Ov.of(n)) : i ? t.push(wu.computeN([he.darkTheme], (r) => r.facet(he.darkTheme) == (i == "dark") ? [n] : [])) : t.push(wu.of(n)), t;
}
class JC {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = vn(e.state), this.decorations = this.buildDeco(e, rh(e.state)), this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let t = vn(e.state), i = rh(e.state), r = i != rh(e.startState), { viewport: s } = e.view, o = e.changes.mapPos(this.decoratedTo, 1);
    t.length < s.to && !r && t.type == this.tree.type && o >= s.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = o) : (t != this.tree || e.viewportChanged || r) && (this.tree = t, this.decorations = this.buildDeco(e.view, i), this.decoratedTo = s.to);
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length) return ve.none;
    let i = new Ri();
    for (let { from: r, to: s } of e.visibleRanges) bC(this.tree, t, (o, l, a) => {
      i.add(o, l, this.markCache[a] || (this.markCache[a] = ve.mark({ class: a })));
    }, r, s);
    return i.finish();
  }
}
const QC = os.high(kt.fromClass(JC, { decorations: (n) => n.decorations })), XC = la.define([{ tag: U.meta, color: "#404740" }, { tag: U.link, textDecoration: "underline" }, { tag: U.heading, textDecoration: "underline", fontWeight: "bold" }, { tag: U.emphasis, fontStyle: "italic" }, { tag: U.strong, fontWeight: "bold" }, { tag: U.strikethrough, textDecoration: "line-through" }, { tag: U.keyword, color: "#708" }, { tag: [U.atom, U.bool, U.url, U.contentSeparator, U.labelName], color: "#219" }, { tag: [U.literal, U.inserted], color: "#164" }, { tag: [U.string, U.deleted], color: "#a11" }, { tag: [U.regexp, U.escape, U.special(U.string)], color: "#e40" }, { tag: U.definition(U.variableName), color: "#00f" }, { tag: U.local(U.variableName), color: "#30a" }, { tag: [U.typeName, U.namespace], color: "#085" }, { tag: U.className, color: "#167" }, { tag: [U.special(U.variableName), U.macroName], color: "#256" }, { tag: U.definition(U.propertyName), color: "#00c" }, { tag: U.comment, color: "#940" }, { tag: U.invalid, color: "#f00" }]), ZC = he.baseTheme({ "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" }, "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" } }), Lv = 1e4, Dv = "()[]{}", Rv = be.define({ combine(n) {
  return Or(n, { afterCursor: true, brackets: Dv, maxScanDistance: Lv, renderMatch: nM });
} }), eM = ve.mark({ class: "cm-matchingBracket" }), tM = ve.mark({ class: "cm-nonmatchingBracket" });
function nM(n) {
  let e = [], t = n.matched ? eM : tM;
  return e.push(t.range(n.start.from, n.start.to)), n.end && e.push(t.range(n.end.from, n.end.to)), e;
}
const iM = Yt.define({ create() {
  return ve.none;
}, update(n, e) {
  if (!e.docChanged && !e.selection) return n;
  let t = [], i = e.state.facet(Rv);
  for (let r of e.state.selection.ranges) {
    if (!r.empty) continue;
    let s = pi(e.state, r.head, -1, i) || r.head > 0 && pi(e.state, r.head - 1, 1, i) || i.afterCursor && (pi(e.state, r.head, 1, i) || r.head < e.state.doc.length && pi(e.state, r.head + 1, -1, i));
    s && (t = t.concat(i.renderMatch(s, e.state)));
  }
  return ve.set(t, true);
}, provide: (n) => he.decorations.from(n) }), rM = [iM, ZC];
function sM(n = {}) {
  return [Rv.of(n), rM];
}
const oM = new We();
function xu(n, e, t) {
  let i = n.prop(e < 0 ? We.openedBy : We.closedBy);
  if (i) return i;
  if (n.name.length == 1) {
    let r = t.indexOf(n.name);
    if (r > -1 && r % 2 == (e < 0 ? 1 : 0)) return [t[r + e]];
  }
  return null;
}
function Su(n) {
  let e = n.type.prop(oM);
  return e ? e(n.node) : n;
}
function pi(n, e, t, i = {}) {
  let r = i.maxScanDistance || Lv, s = i.brackets || Dv, o = vn(n), l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let f = xu(a.type, t, s);
    if (f && a.from < a.to) {
      let h = Su(a);
      if (h && (t > 0 ? e >= h.from && e < h.to : e > h.from && e <= h.to)) return lM(n, e, t, a, h, f, s);
    }
  }
  return aM(n, e, t, o, l.type, r, s);
}
function lM(n, e, t, i, r, s, o) {
  let l = i.parent, a = { from: r.from, to: r.to }, f = 0, h = l == null ? void 0 : l.cursor();
  if (h && (t < 0 ? h.childBefore(i.from) : h.childAfter(i.to))) do
    if (t < 0 ? h.to <= i.from : h.from >= i.to) {
      if (f == 0 && s.indexOf(h.type.name) > -1 && h.from < h.to) {
        let p = Su(h);
        return { start: a, end: p ? { from: p.from, to: p.to } : void 0, matched: true };
      } else if (xu(h.type, t, o)) f++;
      else if (xu(h.type, -t, o)) {
        if (f == 0) {
          let p = Su(h);
          return { start: a, end: p && p.from < p.to ? { from: p.from, to: p.to } : void 0, matched: false };
        }
        f--;
      }
    }
  while (t < 0 ? h.prevSibling() : h.nextSibling());
  return { start: a, matched: false };
}
function aM(n, e, t, i, r, s, o) {
  let l = t < 0 ? n.sliceDoc(e - 1, e) : n.sliceDoc(e, e + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0) return null;
  let f = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, h = n.doc.iterRange(e, t > 0 ? n.doc.length : 0), p = 0;
  for (let m = 0; !h.next().done && m <= s; ) {
    let b = h.value;
    t < 0 && (m += b.length);
    let S = e + m * t;
    for (let M = t > 0 ? 0 : b.length - 1, A = t > 0 ? b.length : -1; M != A; M += t) {
      let _ = o.indexOf(b[M]);
      if (!(_ < 0 || i.resolveInner(S + M, 1).type != r)) if (_ % 2 == 0 == t > 0) p++;
      else {
        if (p == 1) return { start: f, end: { from: S + M, to: S + M + 1 }, matched: _ >> 1 == a >> 1 };
        p--;
      }
    }
    t > 0 && (m += b.length);
  }
  return h.done ? { start: f, matched: false } : null;
}
function Yg(n, e, t, i = 0, r = 0) {
  e == null && (e = n.search(/[^\s\u00a0]/), e == -1 && (e = n.length));
  let s = r;
  for (let o = i; o < e; o++) n.charCodeAt(o) == 9 ? s += t - s % t : s++;
  return s;
}
class cM {
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
    return this.lastColumnPos < this.start && (this.lastColumnValue = Yg(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue;
  }
  indentation() {
    var e;
    return (e = this.overrideIndent) !== null && e !== void 0 ? e : Yg(this.string, null, this.tabSize);
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
const fM = /* @__PURE__ */ Object.create(null), Jg = [xi.none], Qg = [], Xg = /* @__PURE__ */ Object.create(null), hM = /* @__PURE__ */ Object.create(null);
for (let [n, e] of [["variable", "variableName"], ["variable-2", "variableName.special"], ["string-2", "string.special"], ["def", "variableName.definition"], ["tag", "tagName"], ["attribute", "attributeName"], ["type", "typeName"], ["builtin", "variableName.standard"], ["qualifier", "modifier"], ["error", "invalid"], ["header", "heading"], ["property", "propertyName"]]) hM[n] = uM(fM, e);
function sh(n, e) {
  Qg.indexOf(n) > -1 || (Qg.push(n), console.warn(e));
}
function uM(n, e) {
  let t = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let f of l.split(".")) {
      let h = n[f] || U[f];
      h ? typeof h == "function" ? a.length ? a = a.map(h) : sh(f, `Modifier ${f} used at start of tag`) : a.length ? sh(f, `Tag ${f} used as modifier`) : a = Array.isArray(h) ? h : [h] : sh(f, `Unknown highlighting tag ${f}`);
    }
    for (let f of a) t.push(f);
  }
  if (!t.length) return 0;
  let i = e.replace(/ /g, "_"), r = i + " " + t.map((l) => l.id), s = Xg[r];
  if (s) return s.id;
  let o = Xg[r] = xi.define({ id: Jg.length, name: i, props: [yC({ [i]: t })] });
  return Jg.push(o), o.id;
}
gt.RTL, gt.LTR;
const dM = (n) => {
  let { state: e } = n, t = e.doc.lineAt(e.selection.main.from), i = _d(n.state, t.from);
  return i.line ? pM(n) : i.block ? mM(n) : false;
};
function Od(n, e) {
  return ({ state: t, dispatch: i }) => {
    if (t.readOnly) return false;
    let r = n(e, t);
    return r ? (i(t.update(r)), true) : false;
  };
}
const pM = Od(bM, 0), gM = Od(Pv, 0), mM = Od((n, e) => Pv(n, e, vM(e)), 0);
function _d(n, e) {
  let t = n.languageDataAt("commentTokens", e, 1);
  return t.length ? t[0] : {};
}
const cl = 50;
function yM(n, { open: e, close: t }, i, r) {
  let s = n.sliceDoc(i - cl, i), o = n.sliceDoc(r, r + cl), l = /\s*$/.exec(s)[0].length, a = /^\s*/.exec(o)[0].length, f = s.length - l;
  if (s.slice(f - e.length, f) == e && o.slice(a, a + t.length) == t) return { open: { pos: i - l, margin: l && 1 }, close: { pos: r + a, margin: a && 1 } };
  let h, p;
  r - i <= 2 * cl ? h = p = n.sliceDoc(i, r) : (h = n.sliceDoc(i, i + cl), p = n.sliceDoc(r - cl, r));
  let m = /^\s*/.exec(h)[0].length, b = /\s*$/.exec(p)[0].length, S = p.length - b - t.length;
  return h.slice(m, m + e.length) == e && p.slice(S, S + t.length) == t ? { open: { pos: i + m + e.length, margin: /\s/.test(h.charAt(m + e.length)) ? 1 : 0 }, close: { pos: r - b - t.length, margin: /\s/.test(p.charAt(S - 1)) ? 1 : 0 } } : null;
}
function vM(n) {
  let e = [];
  for (let t of n.selection.ranges) {
    let i = n.doc.lineAt(t.from), r = t.to <= i.to ? i : n.doc.lineAt(t.to);
    r.from > i.from && r.from == t.to && (r = t.to == i.to + 1 ? i : n.doc.lineAt(t.to - 1));
    let s = e.length - 1;
    s >= 0 && e[s].to > i.from ? e[s].to = r.to : e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: r.to });
  }
  return e;
}
function Pv(n, e, t = e.selection.ranges) {
  let i = t.map((s) => _d(e, s.from).block);
  if (!i.every((s) => s)) return null;
  let r = t.map((s, o) => yM(e, i[o], s.from, s.to));
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
function bM(n, e, t = e.selection.ranges) {
  let i = [], r = -1;
  for (let { from: s, to: o } of t) {
    let l = i.length, a = 1e9, f = _d(e, s).line;
    if (f) {
      for (let h = s; h <= o; ) {
        let p = e.doc.lineAt(h);
        if (p.from > r && (s == o || o > p.from)) {
          r = p.from;
          let m = /^\s*/.exec(p.text)[0].length, b = m == p.length, S = p.text.slice(m, m + f.length) == f ? m : -1;
          m < p.text.length && m < a && (a = m), i.push({ line: p, comment: S, token: f, indent: m, empty: b, single: false });
        }
        h = p.to + 1;
      }
      if (a < 1e9) for (let h = l; h < i.length; h++) i[h].indent < i[h].line.text.length && (i[h].indent = a);
      i.length == l + 1 && (i[l].single = true);
    }
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
const ku = Tr.define(), wM = Tr.define(), xM = be.define(), Bv = be.define({ combine(n) {
  return Or(n, { minDepth: 100, newGroupDelay: 500, joinToEvent: (e, t) => t }, { minDepth: Math.max, newGroupDelay: Math.min, joinToEvent: (e, t) => (i, r) => e(i, r) || t(i, r) });
} }), Iv = Yt.define({ create() {
  return lr.empty;
}, update(n, e) {
  let t = e.state.facet(Bv), i = e.annotation(ku);
  if (i) {
    let a = Kn.fromTransaction(e, i.selection), f = i.side, h = f == 0 ? n.undone : n.done;
    return a ? h = Wc(h, h.length, t.minDepth, a) : h = Fv(h, e.startState.selection), new lr(f == 0 ? i.rest : h, f == 0 ? h : i.rest);
  }
  let r = e.annotation(wM);
  if ((r == "full" || r == "before") && (n = n.isolate()), e.annotation(Gt.addToHistory) === false) return e.changes.empty ? n : n.addMapping(e.changes.desc);
  let s = Kn.fromTransaction(e), o = e.annotation(Gt.time), l = e.annotation(Gt.userEvent);
  return s ? n = n.addChanges(s, o, l, t, e) : e.selection && (n = n.addSelection(e.startState.selection, o, l, t.newGroupDelay)), (r == "full" || r == "after") && (n = n.isolate()), n;
}, toJSON(n) {
  return { done: n.done.map((e) => e.toJSON()), undone: n.undone.map((e) => e.toJSON()) };
}, fromJSON(n) {
  return new lr(n.done.map(Kn.fromJSON), n.undone.map(Kn.fromJSON));
} });
function SM(n = {}) {
  return [Iv, Bv.of(n), he.domEventHandlers({ beforeinput(e, t) {
    let i = e.inputType == "historyUndo" ? Ld : e.inputType == "historyRedo" ? Vc : null;
    return i ? (e.preventDefault(), i(t)) : false;
  } })];
}
function uf(n, e) {
  return function({ state: t, dispatch: i }) {
    if (!e && t.readOnly) return false;
    let r = t.field(Iv, false);
    if (!r) return false;
    let s = r.pop(n, t, e);
    return s ? (i(s), true) : false;
  };
}
const Ld = uf(0, false), Vc = uf(1, false), kM = uf(0, true), CM = uf(1, true);
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
    return new Kn(e.changes && Ut.fromJSON(e.changes), [], e.mapped && fr.fromJSON(e.mapped), e.startSelection && j.fromJSON(e.startSelection), e.selectionsAfter.map(j.fromJSON));
  }
  static fromTransaction(e, t) {
    let i = gi;
    for (let r of e.startState.facet(xM)) {
      let s = r(e);
      s.length && (i = i.concat(s));
    }
    return !i.length && e.changes.empty ? null : new Kn(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, gi);
  }
  static selection(e) {
    return new Kn(void 0, gi, void 0, void 0, e);
  }
}
function Wc(n, e, t, i) {
  let r = e + 1 > t + 20 ? e - t - 1 : 0, s = n.slice(r, e);
  return s.push(i), s;
}
function MM(n, e) {
  let t = [], i = false;
  return n.iterChangedRanges((r, s) => t.push(r, s)), e.iterChangedRanges((r, s, o, l) => {
    for (let a = 0; a < t.length; ) {
      let f = t[a++], h = t[a++];
      l >= f && o <= h && (i = true);
    }
  }), i;
}
function AM(n, e) {
  return n.ranges.length == e.ranges.length && n.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0;
}
function Nv(n, e) {
  return n.length ? e.length ? n.concat(e) : n : e;
}
const gi = [], EM = 200;
function Fv(n, e) {
  if (n.length) {
    let t = n[n.length - 1], i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - EM));
    return i.length && i[i.length - 1].eq(e) ? n : (i.push(e), Wc(n, n.length - 1, 1e9, t.setSelAfter(i)));
  } else return [Kn.selection([e])];
}
function TM(n) {
  let e = n[n.length - 1], t = n.slice();
  return t[n.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function oh(n, e) {
  if (!n.length) return n;
  let t = n.length, i = gi;
  for (; t; ) {
    let r = OM(n[t - 1], e, i);
    if (r.changes && !r.changes.empty || r.effects.length) {
      let s = n.slice(0, t);
      return s[t - 1] = r, s;
    } else e = r.mapped, t--, i = r.selectionsAfter;
  }
  return i.length ? [Kn.selection(i)] : gi;
}
function OM(n, e, t) {
  let i = Nv(n.selectionsAfter.length ? n.selectionsAfter.map((l) => l.map(e)) : gi, t);
  if (!n.changes) return Kn.selection(i);
  let r = n.changes.map(e), s = e.mapDesc(n.changes, true), o = n.mapped ? n.mapped.composeDesc(s) : s;
  return new Kn(r, Ee.mapEffects(n.effects, e), o, n.startSelection.map(s), i);
}
const _M = /^(input\.type|delete)($|\.)/;
class lr {
  constructor(e, t, i = 0, r = void 0) {
    this.done = e, this.undone = t, this.prevTime = i, this.prevUserEvent = r;
  }
  isolate() {
    return this.prevTime ? new lr(this.done, this.undone) : this;
  }
  addChanges(e, t, i, r, s) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!i || _M.test(i)) && (!l.selectionsAfter.length && t - this.prevTime < r.newGroupDelay && r.joinToEvent(s, MM(l.changes, e.changes)) || i == "input.type.compose") ? o = Wc(o, o.length - 1, r.minDepth, new Kn(e.changes.compose(l.changes), Nv(Ee.mapEffects(e.effects, l.changes), l.effects), l.mapped, l.startSelection, gi)) : o = Wc(o, o.length, r.minDepth, e), new lr(o, gi, t, i);
  }
  addSelection(e, t, i, r) {
    let s = this.done.length ? this.done[this.done.length - 1].selectionsAfter : gi;
    return s.length > 0 && t - this.prevTime < r && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && AM(s[s.length - 1], e) ? this : new lr(Fv(this.done, e), this.undone, t, i);
  }
  addMapping(e) {
    return new lr(oh(this.done, e), oh(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, i) {
    let r = e == 0 ? this.done : this.undone;
    if (r.length == 0) return null;
    let s = r[r.length - 1], o = s.selectionsAfter[0] || t.selection;
    if (i && s.selectionsAfter.length) return t.update({ selection: s.selectionsAfter[s.selectionsAfter.length - 1], annotations: ku.of({ side: e, rest: TM(r), selection: o }), userEvent: e == 0 ? "select.undo" : "select.redo", scrollIntoView: true });
    if (s.changes) {
      let l = r.length == 1 ? gi : r.slice(0, r.length - 1);
      return s.mapped && (l = oh(l, s.mapped)), t.update({ changes: s.changes, selection: s.startSelection, effects: s.effects, annotations: ku.of({ side: e, rest: l, selection: o }), filter: false, userEvent: e == 0 ? "undo" : "redo", scrollIntoView: true });
    } else return null;
  }
}
lr.empty = new lr(gi, gi);
const LM = [{ key: "Mod-z", run: Ld, preventDefault: true }, { key: "Mod-y", mac: "Mod-Shift-z", run: Vc, preventDefault: true }, { linux: "Ctrl-Shift-z", run: Vc, preventDefault: true }, { key: "Mod-u", run: kM, preventDefault: true }, { key: "Alt-u", mac: "Mod-Shift-u", run: CM, preventDefault: true }];
function Ro(n, e) {
  return j.create(n.ranges.map(e), n.mainIndex);
}
function Fi(n, e) {
  return n.update({ selection: e, scrollIntoView: true, userEvent: "select" });
}
function Hi({ state: n, dispatch: e }, t) {
  let i = Ro(n.selection, t);
  return i.eq(n.selection, true) ? false : (e(Fi(n, i)), true);
}
function df(n, e) {
  return j.cursor(e ? n.to : n.from);
}
function Dd(n, e) {
  return Hi(n, (t) => t.empty ? n.moveByChar(t, e) : df(t, e));
}
function bn(n) {
  return n.textDirectionAt(n.state.selection.main.head) == gt.LTR;
}
const Rd = (n) => Dd(n, !bn(n)), Hv = (n) => Dd(n, bn(n)), DM = (n) => Dd(n, false);
function Vv(n, e) {
  return Hi(n, (t) => t.empty ? n.moveByGroup(t, e) : df(t, e));
}
const RM = (n) => Vv(n, !bn(n)), PM = (n) => Vv(n, bn(n));
function BM(n, e, t) {
  if (e.type.prop(t)) return true;
  let i = e.to - e.from;
  return i && (i > 2 || /[^\s,.;:]/.test(n.sliceDoc(e.from, e.to))) || e.firstChild;
}
function pf(n, e, t) {
  let i = vn(n).resolveInner(e.head), r = t ? We.closedBy : We.openedBy;
  for (let a = e.head; ; ) {
    let f = t ? i.childAfter(a) : i.childBefore(a);
    if (!f) break;
    BM(n, f, r) ? i = f : a = t ? f.to : f.from;
  }
  let s = i.type.prop(r), o, l;
  return s && (o = t ? pi(n, i.from, 1) : pi(n, i.to, -1)) && o.matched ? l = t ? o.end.to : o.end.from : l = t ? i.to : i.from, j.cursor(l, t ? -1 : 1);
}
const IM = (n) => Hi(n, (e) => pf(n.state, e, !bn(n))), NM = (n) => Hi(n, (e) => pf(n.state, e, bn(n)));
function Wv(n, e) {
  return Hi(n, (t) => {
    if (!t.empty) return df(t, e);
    let i = n.moveVertically(t, e);
    return i.head != t.head ? i : n.moveToLineBoundary(t, e);
  });
}
const $v = (n) => Wv(n, false), zv = (n) => Wv(n, true);
function Kv(n) {
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
function jv(n, e) {
  let t = Kv(n), { state: i } = n, r = Ro(i.selection, (o) => o.empty ? n.moveVertically(o, e, t.height) : df(o, e));
  if (r.eq(i.selection)) return false;
  let s;
  if (t.selfScroll) {
    let o = n.coordsAtPos(i.selection.main.head), l = n.scrollDOM.getBoundingClientRect(), a = l.top + t.marginTop, f = l.bottom - t.marginBottom;
    o && o.top > a && o.bottom < f && (s = he.scrollIntoView(r.main.head, { y: "start", yMargin: o.top - a }));
  }
  return n.dispatch(Fi(i, r), { effects: s }), true;
}
const Zg = (n) => jv(n, false), Cu = (n) => jv(n, true);
function ls(n, e, t) {
  let i = n.lineBlockAt(e.head), r = n.moveToLineBoundary(e, t);
  if (r.head == e.head && r.head != (t ? i.to : i.from) && (r = n.moveToLineBoundary(e, t, false)), !t && r.head == i.from && i.length) {
    let s = /^\s*/.exec(n.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    s && e.head != i.from + s && (r = j.cursor(i.from + s));
  }
  return r;
}
const qv = (n) => Hi(n, (e) => ls(n, e, true)), Uv = (n) => Hi(n, (e) => ls(n, e, false)), FM = (n) => Hi(n, (e) => ls(n, e, !bn(n))), HM = (n) => Hi(n, (e) => ls(n, e, bn(n))), VM = (n) => Hi(n, (e) => j.cursor(n.lineBlockAt(e.head).from, 1)), WM = (n) => Hi(n, (e) => j.cursor(n.lineBlockAt(e.head).to, -1));
function $M(n, e, t) {
  let i = false, r = Ro(n.selection, (s) => {
    let o = pi(n, s.head, -1) || pi(n, s.head, 1) || s.head > 0 && pi(n, s.head - 1, 1) || s.head < n.doc.length && pi(n, s.head + 1, -1);
    if (!o || !o.end) return s;
    i = true;
    let l = o.start.from == s.head ? o.end.to : o.end.from;
    return j.cursor(l);
  });
  return i ? (e(Fi(n, r)), true) : false;
}
const zM = ({ state: n, dispatch: e }) => $M(n, e);
function Si(n, e) {
  let t = Ro(n.state.selection, (i) => {
    let r = e(i);
    return j.range(i.anchor, r.head, r.goalColumn, r.bidiLevel || void 0);
  });
  return t.eq(n.state.selection) ? false : (n.dispatch(Fi(n.state, t)), true);
}
function Gv(n, e) {
  return Si(n, (t) => n.moveByChar(t, e));
}
const Yv = (n) => Gv(n, !bn(n)), Jv = (n) => Gv(n, bn(n));
function Qv(n, e) {
  return Si(n, (t) => n.moveByGroup(t, e));
}
const KM = (n) => Qv(n, !bn(n)), jM = (n) => Qv(n, bn(n)), qM = (n) => Si(n, (e) => pf(n.state, e, !bn(n))), UM = (n) => Si(n, (e) => pf(n.state, e, bn(n)));
function Xv(n, e) {
  return Si(n, (t) => n.moveVertically(t, e));
}
const Zv = (n) => Xv(n, false), eb = (n) => Xv(n, true);
function tb(n, e) {
  return Si(n, (t) => n.moveVertically(t, e, Kv(n).height));
}
const em = (n) => tb(n, false), tm = (n) => tb(n, true), GM = (n) => Si(n, (e) => ls(n, e, true)), YM = (n) => Si(n, (e) => ls(n, e, false)), JM = (n) => Si(n, (e) => ls(n, e, !bn(n))), QM = (n) => Si(n, (e) => ls(n, e, bn(n))), XM = (n) => Si(n, (e) => j.cursor(n.lineBlockAt(e.head).from)), ZM = (n) => Si(n, (e) => j.cursor(n.lineBlockAt(e.head).to)), nm = ({ state: n, dispatch: e }) => (e(Fi(n, { anchor: 0 })), true), im = ({ state: n, dispatch: e }) => (e(Fi(n, { anchor: n.doc.length })), true), rm = ({ state: n, dispatch: e }) => (e(Fi(n, { anchor: n.selection.main.anchor, head: 0 })), true), sm = ({ state: n, dispatch: e }) => (e(Fi(n, { anchor: n.selection.main.anchor, head: n.doc.length })), true), eA = ({ state: n, dispatch: e }) => (e(n.update({ selection: { anchor: 0, head: n.doc.length }, userEvent: "select" })), true), tA = ({ state: n, dispatch: e }) => {
  let t = gf(n).map(({ from: i, to: r }) => j.range(i, Math.min(r + 1, n.doc.length)));
  return e(n.update({ selection: j.create(t), userEvent: "select" })), true;
}, nA = ({ state: n, dispatch: e }) => {
  let t = Ro(n.selection, (i) => {
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
  return t.eq(n.selection) ? false : (e(Fi(n, t)), true);
};
function nb(n, e) {
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
  return r.length == i.ranges.length ? false : (n.dispatch(Fi(t, j.create(r, r.length - 1))), true);
}
const iA = (n) => nb(n, false), rA = (n) => nb(n, true), sA = ({ state: n, dispatch: e }) => {
  let t = n.selection, i = null;
  return t.ranges.length > 1 ? i = j.create([t.main]) : t.main.empty || (i = j.create([j.cursor(t.main.head)])), i ? (e(Fi(n, i)), true) : false;
};
function aa(n, e) {
  if (n.state.readOnly) return false;
  let t = "delete.selection", { state: i } = n, r = i.changeByRange((s) => {
    let { from: o, to: l } = s;
    if (o == l) {
      let a = e(s);
      a < o ? (t = "delete.backward", a = Ua(n, a, false)) : a > o && (t = "delete.forward", a = Ua(n, a, true)), o = Math.min(o, a), l = Math.max(l, a);
    } else o = Ua(n, o, false), l = Ua(n, l, true);
    return o == l ? { range: s } : { changes: { from: o, to: l }, range: j.cursor(o, o < s.head ? -1 : 1) };
  });
  return r.changes.empty ? false : (n.dispatch(i.update(r, { scrollIntoView: true, userEvent: t, effects: t == "delete.selection" ? he.announce.of(i.phrase("Selection deleted")) : void 0 })), true);
}
function Ua(n, e, t) {
  if (n instanceof he) for (let i of n.state.facet(he.atomicRanges).map((r) => r(n))) i.between(e, e, (r, s) => {
    r < e && s > e && (e = t ? s : r);
  });
  return e;
}
const ib = (n, e, t) => aa(n, (i) => {
  let r = i.from, { state: s } = n, o = s.doc.lineAt(r), l, a;
  if (t && !e && r > o.from && r < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, r - o.from))) {
    if (l[l.length - 1] == "	") return r - 1;
    let f = Do(l, s.tabSize), h = f % Nc(s) || Nc(s);
    for (let p = 0; p < h && l[l.length - 1 - p] == " "; p++) r--;
    a = r;
  } else a = cn(o.text, r - o.from, e, e) + o.from, a == r && o.number != (e ? s.doc.lines : 1) ? a += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, r - o.from)) && (a = cn(o.text, a - o.from, false, false) + o.from);
  return a;
}), Mu = (n) => ib(n, false, true), rb = (n) => ib(n, true, false), sb = (n, e) => aa(n, (t) => {
  let i = t.head, { state: r } = n, s = r.doc.lineAt(i), o = r.charCategorizer(i);
  for (let l = null; ; ) {
    if (i == (e ? s.to : s.from)) {
      i == t.head && s.number != (e ? r.doc.lines : 1) && (i += e ? 1 : -1);
      break;
    }
    let a = cn(s.text, i - s.from, e) + s.from, f = s.text.slice(Math.min(i, a) - s.from, Math.max(i, a) - s.from), h = o(f);
    if (l != null && h != l) break;
    (f != " " || i != t.head) && (l = h), i = a;
  }
  return i;
}), ob = (n) => sb(n, false), oA = (n) => sb(n, true), lA = (n) => aa(n, (e) => {
  let t = n.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
}), aA = (n) => aa(n, (e) => {
  let t = n.moveToLineBoundary(e, false).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}), cA = (n) => aa(n, (e) => {
  let t = n.moveToLineBoundary(e, true).head;
  return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
}), fA = ({ state: n, dispatch: e }) => {
  if (n.readOnly) return false;
  let t = n.changeByRange((i) => ({ changes: { from: i.from, to: i.to, insert: Qe.of(["", ""]) }, range: j.cursor(i.from) }));
  return e(n.update(t, { scrollIntoView: true, userEvent: "input" })), true;
}, hA = ({ state: n, dispatch: e }) => {
  if (n.readOnly) return false;
  let t = n.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == n.doc.length) return { range: i };
    let r = i.from, s = n.doc.lineAt(r), o = r == s.from ? r - 1 : cn(s.text, r - s.from, false) + s.from, l = r == s.to ? r + 1 : cn(s.text, r - s.from, true) + s.from;
    return { changes: { from: o, to: l, insert: n.doc.slice(r, l).append(n.doc.slice(o, r)) }, range: j.cursor(l) };
  });
  return t.changes.empty ? false : (e(n.update(t, { scrollIntoView: true, userEvent: "move.character" })), true);
};
function gf(n) {
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
function lb(n, e, t) {
  if (n.readOnly) return false;
  let i = [], r = [];
  for (let s of gf(n)) {
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
const uA = ({ state: n, dispatch: e }) => lb(n, e, false), dA = ({ state: n, dispatch: e }) => lb(n, e, true);
function ab(n, e, t) {
  if (n.readOnly) return false;
  let i = [];
  for (let r of gf(n)) t ? i.push({ from: r.from, insert: n.doc.slice(r.from, r.to) + n.lineBreak }) : i.push({ from: r.to, insert: n.lineBreak + n.doc.slice(r.from, r.to) });
  return e(n.update({ changes: i, scrollIntoView: true, userEvent: "input.copyline" })), true;
}
const pA = ({ state: n, dispatch: e }) => ab(n, e, false), gA = ({ state: n, dispatch: e }) => ab(n, e, true), mA = (n) => {
  if (n.state.readOnly) return false;
  let { state: e } = n, t = e.changes(gf(e).map(({ from: r, to: s }) => (r > 0 ? r-- : s < e.doc.length && s++, { from: r, to: s }))), i = Ro(e.selection, (r) => {
    let s;
    if (n.lineWrapping) {
      let o = n.lineBlockAt(r.head), l = n.coordsAtPos(r.head, r.assoc || 1);
      l && (s = o.bottom + n.documentTop - l.bottom + n.defaultLineHeight / 2);
    }
    return n.moveVertically(r, true, s);
  }).map(t);
  return n.dispatch({ changes: t, selection: i, scrollIntoView: true, userEvent: "delete.line" }), true;
};
function yA(n, e) {
  if (/\(\)|\[\]|\{\}/.test(n.sliceDoc(e - 1, e + 1))) return { from: e, to: e };
  let t = vn(n).resolveInner(e), i = t.childBefore(e), r = t.childAfter(e), s;
  return i && r && i.to <= e && r.from >= e && (s = i.type.prop(We.closedBy)) && s.indexOf(r.name) > -1 && n.doc.lineAt(i.to).from == n.doc.lineAt(r.from).from && !/\S/.test(n.sliceDoc(i.to, r.from)) ? { from: i.to, to: r.from } : null;
}
const Au = cb(false), vA = cb(true);
function cb(n) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly) return false;
    let i = e.changeByRange((r) => {
      let { from: s, to: o } = r, l = e.doc.lineAt(s), a = !n && s == o && yA(e, s);
      n && (s = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let f = new ff(e, { simulateBreak: s, simulateDoubleBreak: !!a }), h = Ed(f, s);
      for (h == null && (h = Do(/^\s*/.exec(e.doc.lineAt(s).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); ) o++;
      a ? { from: s, to: o } = a : s > l.from && s < l.from + 100 && !/\S/.test(l.text.slice(0, s)) && (s = l.from);
      let p = ["", Yl(e, h)];
      return a && p.push(Yl(e, f.lineIndent(l.from, -1))), { changes: { from: s, to: o, insert: Qe.of(p) }, range: j.cursor(s + 1 + p[1].length) };
    });
    return t(e.update(i, { scrollIntoView: true, userEvent: "input" })), true;
  };
}
function Pd(n, e) {
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
const fb = ({ state: n, dispatch: e }) => {
  if (n.readOnly) return false;
  let t = /* @__PURE__ */ Object.create(null), i = new ff(n, { overrideIndentation: (s) => {
    let o = t[s];
    return o ?? -1;
  } }), r = Pd(n, (s, o, l) => {
    let a = Ed(i, s.from);
    if (a == null) return;
    /\S/.test(s.text) || (a = 0);
    let f = /^\s*/.exec(s.text)[0], h = Yl(n, a);
    (f != h || l.from < s.from + f.length) && (t[s.from] = a, o.push({ from: s.from, to: s.from + f.length, insert: h }));
  });
  return r.changes.empty || e(n.update(r, { userEvent: "indent" })), true;
}, hb = ({ state: n, dispatch: e }) => n.readOnly ? false : (e(n.update(Pd(n, (t, i) => {
  i.push({ from: t.from, insert: n.facet(Gl) });
}), { userEvent: "input.indent" })), true), ub = ({ state: n, dispatch: e }) => n.readOnly ? false : (e(n.update(Pd(n, (t, i) => {
  let r = /^\s*/.exec(t.text)[0];
  if (!r) return;
  let s = Do(r, n.tabSize), o = 0, l = Yl(n, Math.max(0, s - Nc(n)));
  for (; o < r.length && o < l.length && r.charCodeAt(o) == l.charCodeAt(o); ) o++;
  i.push({ from: t.from + o, to: t.from + r.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), true), bA = (n) => (n.setTabFocusMode(), true), wA = [{ key: "Ctrl-b", run: Rd, shift: Yv, preventDefault: true }, { key: "Ctrl-f", run: Hv, shift: Jv }, { key: "Ctrl-p", run: $v, shift: Zv }, { key: "Ctrl-n", run: zv, shift: eb }, { key: "Ctrl-a", run: VM, shift: XM }, { key: "Ctrl-e", run: WM, shift: ZM }, { key: "Ctrl-d", run: rb }, { key: "Ctrl-h", run: Mu }, { key: "Ctrl-k", run: lA }, { key: "Ctrl-Alt-h", run: ob }, { key: "Ctrl-o", run: fA }, { key: "Ctrl-t", run: hA }, { key: "Ctrl-v", run: Cu }], xA = [{ key: "ArrowLeft", run: Rd, shift: Yv, preventDefault: true }, { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: RM, shift: KM, preventDefault: true }, { mac: "Cmd-ArrowLeft", run: FM, shift: JM, preventDefault: true }, { key: "ArrowRight", run: Hv, shift: Jv, preventDefault: true }, { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: PM, shift: jM, preventDefault: true }, { mac: "Cmd-ArrowRight", run: HM, shift: QM, preventDefault: true }, { key: "ArrowUp", run: $v, shift: Zv, preventDefault: true }, { mac: "Cmd-ArrowUp", run: nm, shift: rm }, { mac: "Ctrl-ArrowUp", run: Zg, shift: em }, { key: "ArrowDown", run: zv, shift: eb, preventDefault: true }, { mac: "Cmd-ArrowDown", run: im, shift: sm }, { mac: "Ctrl-ArrowDown", run: Cu, shift: tm }, { key: "PageUp", run: Zg, shift: em }, { key: "PageDown", run: Cu, shift: tm }, { key: "Home", run: Uv, shift: YM, preventDefault: true }, { key: "Mod-Home", run: nm, shift: rm }, { key: "End", run: qv, shift: GM, preventDefault: true }, { key: "Mod-End", run: im, shift: sm }, { key: "Enter", run: Au, shift: Au }, { key: "Mod-a", run: eA }, { key: "Backspace", run: Mu, shift: Mu, preventDefault: true }, { key: "Delete", run: rb, preventDefault: true }, { key: "Mod-Backspace", mac: "Alt-Backspace", run: ob, preventDefault: true }, { key: "Mod-Delete", mac: "Alt-Delete", run: oA, preventDefault: true }, { mac: "Mod-Backspace", run: aA, preventDefault: true }, { mac: "Mod-Delete", run: cA, preventDefault: true }].concat(wA.map((n) => ({ mac: n.key, run: n.run, shift: n.shift }))), SA = [{ key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: IM, shift: qM }, { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: NM, shift: UM }, { key: "Alt-ArrowUp", run: uA }, { key: "Shift-Alt-ArrowUp", run: pA }, { key: "Alt-ArrowDown", run: dA }, { key: "Shift-Alt-ArrowDown", run: gA }, { key: "Mod-Alt-ArrowUp", run: iA }, { key: "Mod-Alt-ArrowDown", run: rA }, { key: "Escape", run: sA }, { key: "Mod-Enter", run: vA }, { key: "Alt-l", mac: "Ctrl-l", run: tA }, { key: "Mod-i", run: nA, preventDefault: true }, { key: "Mod-[", run: ub }, { key: "Mod-]", run: hb }, { key: "Mod-Alt-\\", run: fb }, { key: "Shift-Mod-k", run: mA }, { key: "Shift-Mod-\\", run: zM }, { key: "Mod-/", run: dM }, { key: "Alt-A", run: gM }, { key: "Ctrl-m", mac: "Shift-Alt-m", run: bA }].concat(xA), om = typeof String.prototype.normalize == "function" ? (n) => n.normalize("NFKD") : (n) => n;
class ko {
  constructor(e, t, i = 0, r = e.length, s, o) {
    this.test = o, this.value = { from: 0, to: 0 }, this.done = false, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(i, r), this.bufferStart = i, this.normalize = s ? (l) => s(om(l)) : om, this.query = this.normalize(t);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return $n(this.buffer, this.bufferPos);
  }
  next() {
    for (; this.matches.length; ) this.matches.pop();
    return this.nextOverlapping();
  }
  nextOverlapping() {
    for (; ; ) {
      let e = this.peek();
      if (e < 0) return this.done = true, this;
      let t = cd(e), i = this.bufferStart + this.bufferPos;
      this.bufferPos += sr(e);
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
typeof Symbol < "u" && (ko.prototype[Symbol.iterator] = function() {
  return this;
});
const db = { from: -1, to: -1, match: /.*/.exec("") }, Bd = "gm" + (/x/.unicode == null ? "" : "u");
class Id {
  constructor(e, t, i, r = 0, s = e.length) {
    if (this.text = e, this.to = s, this.curLine = "", this.done = false, this.value = db, /\\[sWDnr]|\n|\r|\[\^/.test(t)) return new pb(e, t, i, r, s);
    this.re = new RegExp(t, Bd + ((i == null ? void 0 : i.ignoreCase) ? "i" : "")), this.test = i == null ? void 0 : i.test, this.iter = e.iter();
    let o = e.lineAt(r);
    this.curLineStart = o.from, this.matchPos = $c(e, r), this.getLine(this.curLineStart);
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
        if (this.matchPos = $c(this.text, r + (i == r ? 1 : 0)), i == this.curLineStart + this.curLine.length && this.nextLine(), (i < r || i > this.value.to) && (!this.test || this.test(i, r, t))) return this.value = { from: i, to: r, match: t }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to) this.nextLine(), e = 0;
      else return this.done = true, this;
    }
  }
}
const lh = /* @__PURE__ */ new WeakMap();
class uo {
  constructor(e, t) {
    this.from = e, this.text = t;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, i) {
    let r = lh.get(e);
    if (!r || r.from >= i || r.to <= t) {
      let l = new uo(t, e.sliceString(t, i));
      return lh.set(e, l), l;
    }
    if (r.from == t && r.to == i) return r;
    let { text: s, from: o } = r;
    return o > t && (s = e.sliceString(t, o) + s, o = t), r.to < i && (s += e.sliceString(r.to, i)), lh.set(e, new uo(o, s)), new uo(t, s.slice(t - o, i - o));
  }
}
class pb {
  constructor(e, t, i, r, s) {
    this.text = e, this.to = s, this.done = false, this.value = db, this.matchPos = $c(e, r), this.re = new RegExp(t, Bd + ((i == null ? void 0 : i.ignoreCase) ? "i" : "")), this.test = i == null ? void 0 : i.test, this.flat = uo.get(e, r, this.chunkEnd(r + 5e3));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (; ; ) {
      let e = this.re.lastIndex = this.matchPos - this.flat.from, t = this.re.exec(this.flat.text);
      if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t) {
        let i = this.flat.from + t.index, r = i + t[0].length;
        if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(i, r, t))) return this.value = { from: i, to: r, match: t }, this.matchPos = $c(this.text, r + (i == r ? 1 : 0)), this;
      }
      if (this.flat.to == this.to) return this.done = true, this;
      this.flat = uo.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (Id.prototype[Symbol.iterator] = pb.prototype[Symbol.iterator] = function() {
  return this;
});
function kA(n) {
  try {
    return new RegExp(n, Bd), true;
  } catch {
    return false;
  }
}
function $c(n, e) {
  if (e >= n.length) return e;
  let t = n.lineAt(e), i;
  for (; e < t.to && (i = t.text.charCodeAt(e - t.from)) >= 56320 && i < 57344; ) e++;
  return e;
}
function Eu(n) {
  let e = String(n.state.doc.lineAt(n.state.selection.main.head).number), t = ct("input", { class: "cm-textfield", name: "line", value: e }), i = ct("form", { class: "cm-gotoLine", onkeydown: (s) => {
    s.keyCode == 27 ? (s.preventDefault(), n.dispatch({ effects: Ll.of(false) }), n.focus()) : s.keyCode == 13 && (s.preventDefault(), r());
  }, onsubmit: (s) => {
    s.preventDefault(), r();
  } }, ct("label", n.state.phrase("Go to line"), ": ", t), " ", ct("button", { class: "cm-button", type: "submit" }, n.state.phrase("go")), ct("button", { name: "close", onclick: () => {
    n.dispatch({ effects: Ll.of(false) }), n.focus();
  }, "aria-label": n.state.phrase("close"), type: "button" }, ["\xD7"]));
  function r() {
    let s = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.value);
    if (!s) return;
    let { state: o } = n, l = o.doc.lineAt(o.selection.main.head), [, a, f, h, p] = s, m = h ? +h.slice(1) : 0, b = f ? +f : l.number;
    if (f && p) {
      let A = b / 100;
      a && (A = A * (a == "-" ? -1 : 1) + l.number / o.doc.lines), b = Math.round(o.doc.lines * A);
    } else f && a && (b = b * (a == "-" ? -1 : 1) + l.number);
    let S = o.doc.line(Math.max(1, Math.min(o.doc.lines, b))), M = j.cursor(S.from + Math.max(0, Math.min(m, S.length)));
    n.dispatch({ effects: [Ll.of(false), he.scrollIntoView(M.from, { y: "center" })], selection: M }), n.focus();
  }
  return { dom: i };
}
const Ll = Ee.define(), lm = Yt.define({ create() {
  return true;
}, update(n, e) {
  for (let t of e.effects) t.is(Ll) && (n = t.value);
  return n;
}, provide: (n) => Vs.from(n, (e) => e ? Eu : null) }), CA = (n) => {
  let e = ql(n, Eu);
  if (!e) {
    let t = [Ll.of(true)];
    n.state.field(lm, false) == null && t.push(Ee.appendConfig.of([lm, MA])), n.dispatch({ effects: t }), e = ql(n, Eu);
  }
  return e && e.dom.querySelector("input").select(), true;
}, MA = he.baseTheme({ ".cm-panel.cm-gotoLine": { padding: "2px 6px 4px", position: "relative", "& label": { fontSize: "80%" }, "& [name=close]": { position: "absolute", top: "0", bottom: "0", right: "4px", backgroundColor: "inherit", border: "none", font: "inherit", padding: "0" } } }), AA = { highlightWordAroundCursor: false, minSelectionLength: 1, maxMatches: 100, wholeWords: false }, EA = be.define({ combine(n) {
  return Or(n, AA, { highlightWordAroundCursor: (e, t) => e || t, minSelectionLength: Math.min, maxMatches: Math.min });
} });
function TA(n) {
  return [RA, DA];
}
const OA = ve.mark({ class: "cm-selectionMatch" }), _A = ve.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function am(n, e, t, i) {
  return (t == 0 || n(e.sliceDoc(t - 1, t)) != St.Word) && (i == e.doc.length || n(e.sliceDoc(i, i + 1)) != St.Word);
}
function LA(n, e, t, i) {
  return n(e.sliceDoc(t, t + 1)) == St.Word && n(e.sliceDoc(i - 1, i)) == St.Word;
}
const DA = kt.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.selectionSet || n.docChanged || n.viewportChanged) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let e = n.state.facet(EA), { state: t } = n, i = t.selection;
    if (i.ranges.length > 1) return ve.none;
    let r = i.main, s, o = null;
    if (r.empty) {
      if (!e.highlightWordAroundCursor) return ve.none;
      let a = t.wordAt(r.head);
      if (!a) return ve.none;
      o = t.charCategorizer(r.head), s = t.sliceDoc(a.from, a.to);
    } else {
      let a = r.to - r.from;
      if (a < e.minSelectionLength || a > 200) return ve.none;
      if (e.wholeWords) {
        if (s = t.sliceDoc(r.from, r.to), o = t.charCategorizer(r.head), !(am(o, t, r.from, r.to) && LA(o, t, r.from, r.to))) return ve.none;
      } else if (s = t.sliceDoc(r.from, r.to), !s) return ve.none;
    }
    let l = [];
    for (let a of n.visibleRanges) {
      let f = new ko(t.doc, s, a.from, a.to);
      for (; !f.next().done; ) {
        let { from: h, to: p } = f.value;
        if ((!o || am(o, t, h, p)) && (r.empty && h <= r.from && p >= r.to ? l.push(_A.range(h, p)) : (h >= r.to || p <= r.from) && l.push(OA.range(h, p)), l.length > e.maxMatches)) return ve.none;
      }
    }
    return ve.set(l);
  }
}, { decorations: (n) => n.decorations }), RA = he.baseTheme({ ".cm-selectionMatch": { backgroundColor: "#99ff7780" }, ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" } }), PA = ({ state: n, dispatch: e }) => {
  let { selection: t } = n, i = j.create(t.ranges.map((r) => n.wordAt(r.head) || j.cursor(r.head)), t.mainIndex);
  return i.eq(t) ? false : (e(n.update({ selection: i })), true);
};
function BA(n, e) {
  let { main: t, ranges: i } = n.selection, r = n.wordAt(t.head), s = r && r.from == t.from && r.to == t.to;
  for (let o = false, l = new ko(n.doc, e, i[i.length - 1].to); ; ) if (l.next(), l.done) {
    if (o) return null;
    l = new ko(n.doc, e, 0, Math.max(0, i[i.length - 1].from - 1)), o = true;
  } else {
    if (o && i.some((a) => a.from == l.value.from)) continue;
    if (s) {
      let a = n.wordAt(l.value.from);
      if (!a || a.from != l.value.from || a.to != l.value.to) continue;
    }
    return l.value;
  }
}
const IA = ({ state: n, dispatch: e }) => {
  let { ranges: t } = n.selection;
  if (t.some((s) => s.from === s.to)) return PA({ state: n, dispatch: e });
  let i = n.sliceDoc(t[0].from, t[0].to);
  if (n.selection.ranges.some((s) => n.sliceDoc(s.from, s.to) != i)) return false;
  let r = BA(n, i);
  return r ? (e(n.update({ selection: n.selection.addRange(j.range(r.from, r.to), false), effects: he.scrollIntoView(r.to) })), true) : false;
}, Po = be.define({ combine(n) {
  return Or(n, { top: false, caseSensitive: false, literal: false, regexp: false, wholeWord: false, createPanel: (e) => new GA(e), scrollToMatch: (e) => he.scrollIntoView(e) });
} });
class Nd {
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || kA(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord;
  }
  unquote(e) {
    return this.literal ? e : e.replace(/\\([nrt\\])/g, (t, i) => i == "n" ? `
` : i == "r" ? "\r" : i == "t" ? "	" : "\\");
  }
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord;
  }
  create() {
    return this.regexp ? new VA(this) : new FA(this);
  }
  getCursor(e, t = 0, i) {
    let r = e.doc ? e : $e.create({ doc: e });
    return i == null && (i = r.doc.length), this.regexp ? so(this, r, t, i) : ro(this, r, t, i);
  }
}
class gb {
  constructor(e) {
    this.spec = e;
  }
}
function ro(n, e, t, i) {
  return new ko(e.doc, n.unquoted, t, i, n.caseSensitive ? void 0 : (r) => r.toLowerCase(), n.wholeWord ? NA(e.doc, e.charCategorizer(e.selection.main.head)) : void 0);
}
function NA(n, e) {
  return (t, i, r, s) => ((s > t || s + r.length < i) && (s = Math.max(0, t - 2), r = n.sliceString(s, Math.min(n.length, i + 2))), (e(zc(r, t - s)) != St.Word || e(Kc(r, t - s)) != St.Word) && (e(Kc(r, i - s)) != St.Word || e(zc(r, i - s)) != St.Word));
}
class FA extends gb {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, i) {
    let r = ro(this.spec, e, i, e.doc.length).nextOverlapping();
    if (r.done) {
      let s = Math.min(e.doc.length, t + this.spec.unquoted.length);
      r = ro(this.spec, e, 0, s).nextOverlapping();
    }
    return r.done || r.value.from == t && r.value.to == i ? null : r.value;
  }
  prevMatchInRange(e, t, i) {
    for (let r = i; ; ) {
      let s = Math.max(t, r - 1e4 - this.spec.unquoted.length), o = ro(this.spec, e, s, r), l = null;
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
    let i = ro(this.spec, e, 0, e.doc.length), r = [];
    for (; !i.next().done; ) {
      if (r.length >= t) return null;
      r.push(i.value);
    }
    return r;
  }
  highlight(e, t, i, r) {
    let s = ro(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(i + this.spec.unquoted.length, e.doc.length));
    for (; !s.next().done; ) r(s.value.from, s.value.to);
  }
}
function so(n, e, t, i) {
  return new Id(e.doc, n.search, { ignoreCase: !n.caseSensitive, test: n.wholeWord ? HA(e.charCategorizer(e.selection.main.head)) : void 0 }, t, i);
}
function zc(n, e) {
  return n.slice(cn(n, e, false), e);
}
function Kc(n, e) {
  return n.slice(e, cn(n, e));
}
function HA(n) {
  return (e, t, i) => !i[0].length || (n(zc(i.input, i.index)) != St.Word || n(Kc(i.input, i.index)) != St.Word) && (n(Kc(i.input, i.index + i[0].length)) != St.Word || n(zc(i.input, i.index + i[0].length)) != St.Word);
}
class VA extends gb {
  nextMatch(e, t, i) {
    let r = so(this.spec, e, i, e.doc.length).next();
    return r.done && (r = so(this.spec, e, 0, t).next()), r.done ? null : r.value;
  }
  prevMatchInRange(e, t, i) {
    for (let r = 1; ; r++) {
      let s = Math.max(t, i - r * 1e4), o = so(this.spec, e, s, i), l = null;
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
    let i = so(this.spec, e, 0, e.doc.length), r = [];
    for (; !i.next().done; ) {
      if (r.length >= t) return null;
      r.push(i.value);
    }
    return r;
  }
  highlight(e, t, i, r) {
    let s = so(this.spec, e, Math.max(0, t - 250), Math.min(i + 250, e.doc.length));
    for (; !s.next().done; ) r(s.value.from, s.value.to);
  }
}
const ts = Ee.define(), Fd = Ee.define(), Gr = Yt.define({ create(n) {
  return new ah(Tu(n).create(), null);
}, update(n, e) {
  for (let t of e.effects) t.is(ts) ? n = new ah(t.value.create(), n.panel) : t.is(Fd) && (n = new ah(n.query, t.value ? Hd : null));
  return n;
}, provide: (n) => Vs.from(n, (e) => e.panel) });
class ah {
  constructor(e, t) {
    this.query = e, this.panel = t;
  }
}
const WA = ve.mark({ class: "cm-searchMatch" }), $A = ve.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), zA = kt.fromClass(class {
  constructor(n) {
    this.view = n, this.decorations = this.highlight(n.state.field(Gr));
  }
  update(n) {
    let e = n.state.field(Gr);
    (e != n.startState.field(Gr) || n.docChanged || n.selectionSet || n.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: n, panel: e }) {
    if (!e || !n.spec.valid) return ve.none;
    let { view: t } = this, i = new Ri();
    for (let r = 0, s = t.visibleRanges, o = s.length; r < o; r++) {
      let { from: l, to: a } = s[r];
      for (; r < o - 1 && a > s[r + 1].from - 500; ) a = s[++r].to;
      n.highlight(t.state, l, a, (f, h) => {
        let p = t.state.selection.ranges.some((m) => m.from == f && m.to == h);
        i.add(f, h, p ? $A : WA);
      });
    }
    return i.finish();
  }
}, { decorations: (n) => n.decorations });
function ca(n) {
  return (e) => {
    let t = e.state.field(Gr, false);
    return t && t.query.spec.valid ? n(e, t) : vb(e);
  };
}
const jc = ca((n, { query: e }) => {
  let { to: t } = n.state.selection.main, i = e.nextMatch(n.state, t, t);
  if (!i) return false;
  let r = j.single(i.from, i.to), s = n.state.facet(Po);
  return n.dispatch({ selection: r, effects: [Vd(n, i), s.scrollToMatch(r.main, n)], userEvent: "select.search" }), yb(n), true;
}), qc = ca((n, { query: e }) => {
  let { state: t } = n, { from: i } = t.selection.main, r = e.prevMatch(t, i, i);
  if (!r) return false;
  let s = j.single(r.from, r.to), o = n.state.facet(Po);
  return n.dispatch({ selection: s, effects: [Vd(n, r), o.scrollToMatch(s.main, n)], userEvent: "select.search" }), yb(n), true;
}), KA = ca((n, { query: e }) => {
  let t = e.matchAll(n.state, 1e3);
  return !t || !t.length ? false : (n.dispatch({ selection: j.create(t.map((i) => j.range(i.from, i.to))), userEvent: "select.search.matches" }), true);
}), jA = ({ state: n, dispatch: e }) => {
  let t = n.selection;
  if (t.ranges.length > 1 || t.main.empty) return false;
  let { from: i, to: r } = t.main, s = [], o = 0;
  for (let l = new ko(n.doc, n.sliceDoc(i, r)); !l.next().done; ) {
    if (s.length > 1e3) return false;
    l.value.from == i && (o = s.length), s.push(j.range(l.value.from, l.value.to));
  }
  return e(n.update({ selection: j.create(s, o), userEvent: "select.search.matches" })), true;
}, cm = ca((n, { query: e }) => {
  let { state: t } = n, { from: i, to: r } = t.selection.main;
  if (t.readOnly) return false;
  let s = e.nextMatch(t, i, i);
  if (!s) return false;
  let o = s, l = [], a, f, h = [];
  o.from == i && o.to == r && (f = t.toText(e.getReplacement(o)), l.push({ from: o.from, to: o.to, insert: f }), o = e.nextMatch(t, o.from, o.to), h.push(he.announce.of(t.phrase("replaced match on line $", t.doc.lineAt(i).number) + ".")));
  let p = n.state.changes(l);
  return o && (a = j.single(o.from, o.to).map(p), h.push(Vd(n, o)), h.push(t.facet(Po).scrollToMatch(a.main, n))), n.dispatch({ changes: p, selection: a, effects: h, userEvent: "input.replace" }), true;
}), qA = ca((n, { query: e }) => {
  if (n.state.readOnly) return false;
  let t = e.matchAll(n.state, 1e9).map((r) => {
    let { from: s, to: o } = r;
    return { from: s, to: o, insert: e.getReplacement(r) };
  });
  if (!t.length) return false;
  let i = n.state.phrase("replaced $ matches", t.length) + ".";
  return n.dispatch({ changes: t, effects: he.announce.of(i), userEvent: "input.replace.all" }), true;
});
function Hd(n) {
  return n.state.facet(Po).createPanel(n);
}
function Tu(n, e) {
  var t, i, r, s, o;
  let l = n.selection.main, a = l.empty || l.to > l.from + 100 ? "" : n.sliceDoc(l.from, l.to);
  if (e && !a) return e;
  let f = n.facet(Po);
  return new Nd({ search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : f.literal) ? a : a.replace(/\n/g, "\\n"), caseSensitive: (i = e == null ? void 0 : e.caseSensitive) !== null && i !== void 0 ? i : f.caseSensitive, literal: (r = e == null ? void 0 : e.literal) !== null && r !== void 0 ? r : f.literal, regexp: (s = e == null ? void 0 : e.regexp) !== null && s !== void 0 ? s : f.regexp, wholeWord: (o = e == null ? void 0 : e.wholeWord) !== null && o !== void 0 ? o : f.wholeWord });
}
function mb(n) {
  let e = ql(n, Hd);
  return e && e.dom.querySelector("[main-field]");
}
function yb(n) {
  let e = mb(n);
  e && e == n.root.activeElement && e.select();
}
const vb = (n) => {
  let e = n.state.field(Gr, false);
  if (e && e.panel) {
    let t = mb(n);
    if (t && t != n.root.activeElement) {
      let i = Tu(n.state, e.query.spec);
      i.valid && n.dispatch({ effects: ts.of(i) }), t.focus(), t.select();
    }
  } else n.dispatch({ effects: [Fd.of(true), e ? ts.of(Tu(n.state, e.query.spec)) : Ee.appendConfig.of(JA)] });
  return true;
}, bb = (n) => {
  let e = n.state.field(Gr, false);
  if (!e || !e.panel) return false;
  let t = ql(n, Hd);
  return t && t.dom.contains(n.root.activeElement) && n.focus(), n.dispatch({ effects: Fd.of(false) }), true;
}, UA = [{ key: "Mod-f", run: vb, scope: "editor search-panel" }, { key: "F3", run: jc, shift: qc, scope: "editor search-panel", preventDefault: true }, { key: "Mod-g", run: jc, shift: qc, scope: "editor search-panel", preventDefault: true }, { key: "Escape", run: bb, scope: "editor search-panel" }, { key: "Mod-Shift-l", run: jA }, { key: "Mod-Alt-g", run: CA }, { key: "Mod-d", run: IA, preventDefault: true }];
class GA {
  constructor(e) {
    this.view = e;
    let t = this.query = e.state.field(Gr).query.spec;
    this.commit = this.commit.bind(this), this.searchField = ct("input", { value: t.search, placeholder: Zn(e, "Find"), "aria-label": Zn(e, "Find"), class: "cm-textfield", name: "search", form: "", "main-field": "true", onchange: this.commit, onkeyup: this.commit }), this.replaceField = ct("input", { value: t.replace, placeholder: Zn(e, "Replace"), "aria-label": Zn(e, "Replace"), class: "cm-textfield", name: "replace", form: "", onchange: this.commit, onkeyup: this.commit }), this.caseField = ct("input", { type: "checkbox", name: "case", form: "", checked: t.caseSensitive, onchange: this.commit }), this.reField = ct("input", { type: "checkbox", name: "re", form: "", checked: t.regexp, onchange: this.commit }), this.wordField = ct("input", { type: "checkbox", name: "word", form: "", checked: t.wholeWord, onchange: this.commit });
    function i(r, s, o) {
      return ct("button", { class: "cm-button", name: r, onclick: s, type: "button" }, o);
    }
    this.dom = ct("div", { onkeydown: (r) => this.keydown(r), class: "cm-search" }, [this.searchField, i("next", () => jc(e), [Zn(e, "next")]), i("prev", () => qc(e), [Zn(e, "previous")]), i("select", () => KA(e), [Zn(e, "all")]), ct("label", null, [this.caseField, Zn(e, "match case")]), ct("label", null, [this.reField, Zn(e, "regexp")]), ct("label", null, [this.wordField, Zn(e, "by word")]), ...e.state.readOnly ? [] : [ct("br"), this.replaceField, i("replace", () => cm(e), [Zn(e, "replace")]), i("replaceAll", () => qA(e), [Zn(e, "replace all")])], ct("button", { name: "close", onclick: () => bb(e), "aria-label": Zn(e, "close"), type: "button" }, ["\xD7"])]);
  }
  commit() {
    let e = new Nd({ search: this.searchField.value, caseSensitive: this.caseField.checked, regexp: this.reField.checked, wholeWord: this.wordField.checked, replace: this.replaceField.value });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: ts.of(e) }));
  }
  keydown(e) {
    vs(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? qc : jc)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), cm(this.view));
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
    return this.view.state.facet(Po).top;
  }
}
function Zn(n, e) {
  return n.state.phrase(e);
}
const Ga = 30, Ya = /[\s\.,:;?!]/;
function Vd(n, { from: e, to: t }) {
  let i = n.state.doc.lineAt(e), r = n.state.doc.lineAt(t).to, s = Math.max(i.from, e - Ga), o = Math.min(r, t + Ga), l = n.state.sliceDoc(s, o);
  if (s != i.from) {
    for (let a = 0; a < Ga; a++) if (!Ya.test(l[a + 1]) && Ya.test(l[a])) {
      l = l.slice(a);
      break;
    }
  }
  if (o != r) {
    for (let a = l.length - 1; a > l.length - Ga; a--) if (!Ya.test(l[a - 1]) && Ya.test(l[a])) {
      l = l.slice(0, a);
      break;
    }
  }
  return he.announce.of(`${n.state.phrase("current match")}. ${l} ${n.state.phrase("on line")} ${i.number}.`);
}
const YA = he.baseTheme({ ".cm-panel.cm-search": { padding: "2px 6px 4px", position: "relative", "& [name=close]": { position: "absolute", top: "0", right: "4px", backgroundColor: "inherit", border: "none", font: "inherit", padding: 0, margin: 0 }, "& input, & button, & label": { margin: ".2em .6em .2em 0" }, "& input[type=checkbox]": { marginRight: ".2em" }, "& label": { fontSize: "80%", whiteSpace: "pre" } }, "&light .cm-searchMatch": { backgroundColor: "#ffff0054" }, "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" }, "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" }, "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" } }), JA = [Gr, os.low(zA), YA];
class wb {
  constructor(e, t, i, r) {
    this.state = e, this.pos = t, this.explicit = i, this.view = r, this.abortListeners = [], this.abortOnDocChange = false;
  }
  tokenBefore(e) {
    let t = vn(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; ) t = t.parent;
    return t ? { from: t.from, to: this.pos, text: this.state.sliceDoc(t.from, this.pos), type: t.type } : null;
  }
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos), i = Math.max(t.from, this.pos - 250), r = t.text.slice(i - t.from, this.pos - t.from), s = r.search(xb(e, false));
    return s < 0 ? null : { from: i + s, to: this.pos, text: r.slice(s) };
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(e, t, i) {
    e == "abort" && this.abortListeners && (this.abortListeners.push(t), i && i.onDocChange && (this.abortOnDocChange = true));
  }
}
function fm(n) {
  let e = Object.keys(n).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function QA(n) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: r } of n) {
    e[r[0]] = true;
    for (let s = 1; s < r.length; s++) t[r[s]] = true;
  }
  let i = fm(e) + fm(t) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function XA(n) {
  let e = n.map((r) => typeof r == "string" ? { label: r } : r), [t, i] = e.every((r) => /^\w+$/.test(r.label)) ? [/\w*$/, /\w+$/] : QA(e);
  return (r) => {
    let s = r.matchBefore(i);
    return s || r.explicit ? { from: s ? s.from : r.pos, options: e, validFor: t } : null;
  };
}
class hm {
  constructor(e, t, i, r) {
    this.completion = e, this.source = t, this.match = i, this.score = r;
  }
}
function _s(n) {
  return n.selection.main.from;
}
function xb(n, e) {
  var t;
  let { source: i } = n, r = e && i[0] != "^", s = i[i.length - 1] != "$";
  return !r && !s ? n : new RegExp(`${r ? "^" : ""}(?:${i})${s ? "$" : ""}`, (t = n.flags) !== null && t !== void 0 ? t : n.ignoreCase ? "i" : "");
}
const Sb = Tr.define();
function ZA(n, e, t, i) {
  let { main: r } = n.selection, s = t - r.from, o = i - r.from;
  return { ...n.changeByRange((l) => {
    if (l != r && t != i && n.sliceDoc(l.from + s, l.from + o) != n.sliceDoc(t, i)) return { range: l };
    let a = n.toText(e);
    return { changes: { from: l.from + s, to: i == r.from ? l.to : l.from + o, insert: a }, range: j.cursor(l.from + s + a.length) };
  }), scrollIntoView: true, userEvent: "input.complete" };
}
const um = /* @__PURE__ */ new WeakMap();
function eE(n) {
  if (!Array.isArray(n)) return n;
  let e = um.get(n);
  return e || um.set(n, e = XA(n)), e;
}
const Uc = Ee.define(), Jl = Ee.define();
class tE {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let i = $n(e, t), r = sr(i);
      this.chars.push(i);
      let s = e.slice(t, t + r), o = s.toUpperCase();
      this.folded.push($n(o == s ? s.toLowerCase() : o, 0)), t += r;
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
      let R = $n(e, 0), N = sr(R), B = N == e.length ? 0 : -100;
      if (R != t[0]) if (R == i[0]) B += -200;
      else return null;
      return this.ret(B, [0, N]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0) return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length, f = 0;
    if (l < 0) {
      for (let R = 0, N = Math.min(e.length, 200); R < N && f < a; ) {
        let B = $n(e, R);
        (B == t[f] || B == i[f]) && (r[f++] = R), R += sr(B);
      }
      if (f < a) return null;
    }
    let h = 0, p = 0, m = false, b = 0, S = -1, M = -1, A = /[a-z]/.test(e), _ = true;
    for (let R = 0, N = Math.min(e.length, 200), B = 0; R < N && p < a; ) {
      let W = $n(e, R);
      l < 0 && (h < a && W == t[h] && (s[h++] = R), b < a && (W == t[b] || W == i[b] ? (b == 0 && (S = R), M = R + 1, b++) : b = 0));
      let H, K = W < 255 ? W >= 48 && W <= 57 || W >= 97 && W <= 122 ? 2 : W >= 65 && W <= 90 ? 1 : 0 : (H = cd(W)) != H.toLowerCase() ? 1 : H != H.toUpperCase() ? 2 : 0;
      (!R || K == 1 && A || B == 0 && K != 0) && (t[p] == W || i[p] == W && (m = true) ? o[p++] = R : o.length && (_ = false)), B = K, R += sr(W);
    }
    return p == a && o[0] == 0 && _ ? this.result(-100 + (m ? -200 : 0), o, e) : b == a && S == 0 ? this.ret(-200 - e.length + (M == e.length ? 0 : -100), [0, M]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : b == a ? this.ret(-900 - e.length, [S, M]) : p == a ? this.result(-100 + (m ? -200 : 0) + -700 + (_ ? 0 : -1100), o, e) : t.length == 2 ? null : this.result((r[0] ? -700 : 0) + -200 + -1100, r, e);
  }
  result(e, t, i) {
    let r = [], s = 0;
    for (let o of t) {
      let l = o + (this.astral ? sr($n(i, o)) : 1);
      s && r[s - 1] == o ? r[s - 1] = l : (r[s++] = o, r[s++] = l);
    }
    return this.ret(e - i.length, r);
  }
}
class nE {
  constructor(e) {
    this.pattern = e, this.matched = [], this.score = 0, this.folded = e.toLowerCase();
  }
  match(e) {
    if (e.length < this.pattern.length) return null;
    let t = e.slice(0, this.pattern.length), i = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
    return i == null ? null : (this.matched = [0, t.length], this.score = i + (e.length == this.pattern.length ? 0 : -100), this);
  }
}
const en = be.define({ combine(n) {
  return Or(n, { activateOnTyping: true, activateOnCompletion: () => false, activateOnTypingDelay: 100, selectOnOpen: true, override: null, closeOnBlur: true, maxRenderedOptions: 100, defaultKeymap: true, tooltipClass: () => "", optionClass: () => "", aboveCursor: false, icons: true, addToOptions: [], positionInfo: iE, filterStrict: false, compareCompletions: (e, t) => e.label.localeCompare(t.label), interactionDelay: 75, updateSyncTime: 100 }, { defaultKeymap: (e, t) => e && t, closeOnBlur: (e, t) => e && t, icons: (e, t) => e && t, tooltipClass: (e, t) => (i) => dm(e(i), t(i)), optionClass: (e, t) => (i) => dm(e(i), t(i)), addToOptions: (e, t) => e.concat(t), filterStrict: (e, t) => e || t });
} });
function dm(n, e) {
  return n ? e ? n + " " + e : n : e;
}
function iE(n, e, t, i, r, s) {
  let o = n.textDirection == gt.RTL, l = o, a = false, f = "top", h, p, m = e.left - r.left, b = r.right - e.right, S = i.right - i.left, M = i.bottom - i.top;
  if (l && m < Math.min(S, b) ? l = false : !l && b < Math.min(S, m) && (l = true), S <= (l ? m : b)) h = Math.max(r.top, Math.min(t.top, r.bottom - M)) - e.top, p = Math.min(400, l ? m : b);
  else {
    a = true, p = Math.min(400, (o ? e.right : r.right - e.left) - 30);
    let R = r.bottom - e.bottom;
    R >= M || R > e.top ? h = t.bottom - e.top : (f = "bottom", h = e.bottom - t.top);
  }
  let A = (e.bottom - e.top) / s.offsetHeight, _ = (e.right - e.left) / s.offsetWidth;
  return { style: `${f}: ${h / A}px; max-width: ${p / _}px`, class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right") };
}
function rE(n) {
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
function ch(n, e, t) {
  if (n <= t) return { from: 0, to: n };
  if (e < 0 && (e = 0), e <= n >> 1) {
    let r = Math.floor(e / t);
    return { from: r * t, to: (r + 1) * t };
  }
  let i = Math.floor((n - e) / t);
  return { from: n - (i + 1) * t, to: n - i * t };
}
class sE {
  constructor(e, t, i) {
    this.view = e, this.stateField = t, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = { read: () => this.measureInfo(), write: (a) => this.placeInfo(a), key: this }, this.space = null, this.currentClass = "";
    let r = e.state.field(t), { options: s, selected: o } = r.open, l = e.state.facet(en);
    this.optionContent = rE(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = ch(s.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: f } = e.state.field(t).open;
      for (let h = a.target, p; h && h != this.dom; h = h.parentNode) if (h.nodeName == "LI" && (p = /-(\d+)$/.exec(h.id)) && +p[1] < f.length) {
        this.applyCompletion(e, f[+p[1]]), a.preventDefault();
        return;
      }
    }), this.dom.addEventListener("focusout", (a) => {
      let f = e.state.field(this.stateField, false);
      f && f.tooltip && e.state.facet(en).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: Jl.of(null) });
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
      (!r.open || r.open.options != s) && (this.range = ch(s.length, o, e.state.facet(en).maxRenderedOptions), this.showOptions(s, i.id)), this.updateSel(), l != ((t = r.open) === null || t === void 0 ? void 0 : t.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
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
    if ((t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = ch(t.options.length, t.selected, this.view.state.facet(en).maxRenderedOptions), this.showOptions(t.options, e.id)), this.updateSelectedOption(t.selected)) {
      this.destroyInfo();
      let { completion: i } = t.options[t.selected], { info: r } = i;
      if (!r) return;
      let s = typeof r == "string" ? document.createTextNode(r) : r(i);
      if (!s) return;
      "then" in s ? s.then((o) => {
        o && this.view.state.field(this.stateField, false) == e && this.addInfoPane(o, i);
      }).catch((o) => Rn(this.view.state, o, "completion info")) : this.addInfoPane(s, i);
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let i = this.info = document.createElement("div");
    if (i.className = "cm-tooltip cm-completionInfo", e.nodeType != null) i.appendChild(e), this.infoDestroy = null;
    else {
      let { dom: r, destroy: s } = e;
      i.appendChild(r), this.infoDestroy = s || null;
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let i = this.list.firstChild, r = this.range.from; i; i = i.nextSibling, r++) i.nodeName != "LI" || !i.id ? r-- : r == e ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), t = i) : i.hasAttribute("aria-selected") && i.removeAttribute("aria-selected");
    return t && lE(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info) return null;
    let t = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), r = e.getBoundingClientRect(), s = this.space;
    if (!s) {
      let o = this.dom.ownerDocument.documentElement;
      s = { left: 0, top: 0, right: o.clientWidth, bottom: o.clientHeight };
    }
    return r.top > Math.min(s.bottom, t.bottom) - 10 || r.bottom < Math.max(s.top, t.top) + 10 ? null : this.view.state.facet(en).positionInfo(this.view, t, r, i, s, this.dom);
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
function oE(n, e) {
  return (t) => new sE(t, n, e);
}
function lE(n, e) {
  let t = n.getBoundingClientRect(), i = e.getBoundingClientRect(), r = t.height / n.offsetHeight;
  i.top < t.top ? n.scrollTop -= (t.top - i.top) / r : i.bottom > t.bottom && (n.scrollTop += (i.bottom - t.bottom) / r);
}
function pm(n) {
  return (n.boost || 0) * 100 + (n.apply ? 10 : 0) + (n.info ? 5 : 0) + (n.type ? 1 : 0);
}
function aE(n, e) {
  let t = [], i = null, r = null, s = (h) => {
    t.push(h);
    let { section: p } = h.completion;
    if (p) {
      i || (i = []);
      let m = typeof p == "string" ? p : p.name;
      i.some((b) => b.name == m) || i.push(typeof p == "string" ? { name: m } : p);
    }
  }, o = e.facet(en);
  for (let h of n) if (h.hasResult()) {
    let p = h.result.getMatch;
    if (h.result.filter === false) for (let m of h.result.options) s(new hm(m, h.source, p ? p(m) : [], 1e9 - t.length));
    else {
      let m = e.sliceDoc(h.from, h.to), b, S = o.filterStrict ? new nE(m) : new tE(m);
      for (let M of h.result.options) if (b = S.match(M.label)) {
        let A = M.displayLabel ? p ? p(M, b.matched) : [] : b.matched, _ = b.score + (M.boost || 0);
        if (s(new hm(M, h.source, A, _)), typeof M.section == "object" && M.section.rank === "dynamic") {
          let { name: R } = M.section;
          r || (r = /* @__PURE__ */ Object.create(null)), r[R] = Math.max(_, r[R] || -1e9);
        }
      }
    }
  }
  if (i) {
    let h = /* @__PURE__ */ Object.create(null), p = 0, m = (b, S) => (b.rank === "dynamic" && S.rank === "dynamic" ? r[S.name] - r[b.name] : 0) || (typeof b.rank == "number" ? b.rank : 1e9) - (typeof S.rank == "number" ? S.rank : 1e9) || (b.name < S.name ? -1 : 1);
    for (let b of i.sort(m)) p -= 1e5, h[b.name] = p;
    for (let b of t) {
      let { section: S } = b.completion;
      S && (b.score += h[typeof S == "string" ? S : S.name]);
    }
  }
  let l = [], a = null, f = o.compareCompletions;
  for (let h of t.sort((p, m) => m.score - p.score || f(p.completion, m.completion))) {
    let p = h.completion;
    !a || a.label != p.label || a.detail != p.detail || a.type != null && p.type != null && a.type != p.type || a.apply != p.apply || a.boost != p.boost ? l.push(h) : pm(h.completion) > pm(a) && (l[l.length - 1] = h), a = h.completion;
  }
  return l;
}
class ao {
  constructor(e, t, i, r, s, o) {
    this.options = e, this.attrs = t, this.tooltip = i, this.timestamp = r, this.selected = s, this.disabled = o;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new ao(this.options, gm(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, i, r, s, o) {
    if (r && !o && e.some((f) => f.isPending)) return r.setDisabled();
    let l = aE(e, t);
    if (!l.length) return r && e.some((f) => f.isPending) ? r.setDisabled() : null;
    let a = t.facet(en).selectOnOpen ? 0 : -1;
    if (r && r.selected != a && r.selected != -1) {
      let f = r.options[r.selected].completion;
      for (let h = 0; h < l.length; h++) if (l[h].completion == f) {
        a = h;
        break;
      }
    }
    return new ao(l, gm(i, a), { pos: e.reduce((f, h) => h.hasResult() ? Math.min(f, h.from) : f, 1e8), create: pE, above: s.aboveCursor }, r ? r.timestamp : Date.now(), a, false);
  }
  map(e) {
    return new ao(this.options, this.attrs, { ...this.tooltip, pos: e.mapPos(this.tooltip.pos) }, this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new ao(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, true);
  }
}
class Gc {
  constructor(e, t, i) {
    this.active = e, this.id = t, this.open = i;
  }
  static start() {
    return new Gc(uE, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, i = t.facet(en), s = (i.override || t.languageDataAt("autocomplete", _s(t)).map(eE)).map((a) => (this.active.find((h) => h.source == a) || new mi(a, this.active.some((h) => h.state != 0) ? 1 : 0)).update(e, i));
    s.length == this.active.length && s.every((a, f) => a == this.active[f]) && (s = this.active);
    let o = this.open, l = e.effects.some((a) => a.is(Wd));
    o && e.docChanged && (o = o.map(e.changes)), e.selection || s.some((a) => a.hasResult() && e.changes.touchesRange(a.from, a.to)) || !cE(s, this.active) || l ? o = ao.build(s, t, this.id, o, i, l) : o && o.disabled && !s.some((a) => a.isPending) && (o = null), !o && s.every((a) => !a.isPending) && s.some((a) => a.hasResult()) && (s = s.map((a) => a.hasResult() ? new mi(a.source, 0) : a));
    for (let a of e.effects) a.is(Cb) && (o = o && o.setSelected(a.value, this.id));
    return s == this.active && o == this.open ? this : new Gc(s, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? fE : hE;
  }
}
function cE(n, e) {
  if (n == e) return true;
  for (let t = 0, i = 0; ; ) {
    for (; t < n.length && !n[t].hasResult(); ) t++;
    for (; i < e.length && !e[i].hasResult(); ) i++;
    let r = t == n.length, s = i == e.length;
    if (r || s) return r == s;
    if (n[t++].result != e[i++].result) return false;
  }
}
const fE = { "aria-autocomplete": "list" }, hE = {};
function gm(n, e) {
  let t = { "aria-autocomplete": "list", "aria-haspopup": "listbox", "aria-controls": n };
  return e > -1 && (t["aria-activedescendant"] = n + "-" + e), t;
}
const uE = [];
function kb(n, e) {
  if (n.isUserEvent("input.complete")) {
    let i = n.annotation(Sb);
    if (i && e.activateOnCompletion(i)) return 12;
  }
  let t = n.isUserEvent("input.type");
  return t && e.activateOnTyping ? 5 : t ? 1 : n.isUserEvent("delete.backward") ? 2 : n.selection ? 8 : n.docChanged ? 16 : 0;
}
class mi {
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
    (i & 8 || i & 16 && this.touches(e)) && (r = new mi(r.source, 0)), i & 4 && r.state == 0 && (r = new mi(this.source, 1)), r = r.updateFor(e, i);
    for (let s of e.effects) if (s.is(Uc)) r = new mi(r.source, 1, s.value);
    else if (s.is(Jl)) r = new mi(r.source, 0);
    else if (s.is(Wd)) for (let o of s.value) o.source == r.source && (r = o);
    return r;
  }
  updateFor(e, t) {
    return this.map(e.changes);
  }
  map(e) {
    return this;
  }
  touches(e) {
    return e.changes.touchesRange(_s(e.state));
  }
}
class po extends mi {
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
    let s = e.changes.mapPos(this.from), o = e.changes.mapPos(this.to, 1), l = _s(e.state);
    if (l > o || !r || t & 2 && (_s(e.startState) == this.from || l < this.limit)) return new mi(this.source, t & 4 ? 1 : 0);
    let a = e.changes.mapPos(this.limit);
    return dE(r.validFor, e.state, s, o) ? new po(this.source, this.explicit, a, r, s, o) : r.update && (r = r.update(r, s, o, new wb(e.state, l, false))) ? new po(this.source, this.explicit, a, r, r.from, (i = r.to) !== null && i !== void 0 ? i : _s(e.state)) : new mi(this.source, 1, this.explicit);
  }
  map(e) {
    return e.empty ? this : (this.result.map ? this.result.map(this.result, e) : this.result) ? new po(this.source, this.explicit, e.mapPos(this.limit), this.result, e.mapPos(this.from), e.mapPos(this.to, 1)) : new mi(this.source, 0);
  }
  touches(e) {
    return e.changes.touchesRange(this.from, this.to);
  }
}
function dE(n, e, t, i) {
  if (!n) return false;
  let r = e.sliceDoc(t, i);
  return typeof n == "function" ? n(r, t, i, e) : xb(n, true).test(r);
}
const Wd = Ee.define({ map(n, e) {
  return n.map((t) => t.map(e));
} }), Cb = Ee.define(), zn = Yt.define({ create() {
  return Gc.start();
}, update(n, e) {
  return n.update(e);
}, provide: (n) => [af.from(n, (e) => e.tooltip), he.contentAttributes.from(n, (e) => e.attrs)] });
function $d(n, e) {
  const t = e.completion.apply || e.completion.label;
  let i = n.state.field(zn).active.find((r) => r.source == e.source);
  return i instanceof po ? (typeof t == "string" ? n.dispatch({ ...ZA(n.state, t, i.from, i.to), annotations: Sb.of(e.completion) }) : t(n, e.completion, i.from, i.to), true) : false;
}
const pE = oE(zn, $d);
function Ja(n, e = "option") {
  return (t) => {
    let i = t.state.field(zn, false);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < t.state.facet(en).interactionDelay) return false;
    let r = 1, s;
    e == "page" && (s = fv(t, i.open.tooltip)) && (r = Math.max(2, Math.floor(s.dom.offsetHeight / s.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = i.open.options, l = i.open.selected > -1 ? i.open.selected + r * (n ? 1 : -1) : n ? 0 : o - 1;
    return l < 0 ? l = e == "page" ? 0 : o - 1 : l >= o && (l = e == "page" ? o - 1 : 0), t.dispatch({ effects: Cb.of(l) }), true;
  };
}
const gE = (n) => {
  let e = n.state.field(zn, false);
  return n.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < n.state.facet(en).interactionDelay ? false : $d(n, e.open.options[e.open.selected]);
}, fh = (n) => n.state.field(zn, false) ? (n.dispatch({ effects: Uc.of(true) }), true) : false, mE = (n) => {
  let e = n.state.field(zn, false);
  return !e || !e.active.some((t) => t.state != 0) ? false : (n.dispatch({ effects: Jl.of(null) }), true);
};
class yE {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const vE = 50, bE = 1e3, wE = kt.fromClass(class {
  constructor(n) {
    this.view = n, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = false, this.composing = 0;
    for (let e of n.state.field(zn).active) e.isPending && this.startQuery(e);
  }
  update(n) {
    let e = n.state.field(zn), t = n.state.facet(en);
    if (!n.selectionSet && !n.docChanged && n.startState.field(zn) == e) return;
    let i = n.transactions.some((s) => {
      let o = kb(s, t);
      return o & 8 || (s.selection || s.docChanged) && !(o & 3);
    });
    for (let s = 0; s < this.running.length; s++) {
      let o = this.running[s];
      if (i || o.context.abortOnDocChange && n.docChanged || o.updates.length + n.transactions.length > vE && Date.now() - o.time > bE) {
        for (let l of o.context.abortListeners) try {
          l();
        } catch (a) {
          Rn(this.view.state, a);
        }
        o.context.abortListeners = null, this.running.splice(s--, 1);
      } else o.updates.push(...n.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), n.transactions.some((s) => s.effects.some((o) => o.is(Uc))) && (this.pendingStart = true);
    let r = this.pendingStart ? 50 : t.activateOnTypingDelay;
    if (this.debounceUpdate = e.active.some((s) => s.isPending && !this.running.some((o) => o.active.source == s.source)) ? setTimeout(() => this.startUpdate(), r) : -1, this.composing != 0) for (let s of n.transactions) s.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && s.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = false;
    let { state: n } = this.view, e = n.field(zn);
    for (let t of e.active) t.isPending && !this.running.some((i) => i.active.source == t.source) && this.startQuery(t);
    this.running.length && e.open && e.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(en).updateSyncTime));
  }
  startQuery(n) {
    let { state: e } = this.view, t = _s(e), i = new wb(e, t, n.explicit, this.view), r = new yE(n, i);
    this.running.push(r), Promise.resolve(n.source(i)).then((s) => {
      r.context.aborted || (r.done = s || null, this.scheduleAccept());
    }, (s) => {
      this.view.dispatch({ effects: Jl.of(null) }), Rn(this.view.state, s);
    });
  }
  scheduleAccept() {
    this.running.every((n) => n.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(en).updateSyncTime));
  }
  accept() {
    var n;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], t = this.view.state.facet(en), i = this.view.state.field(zn);
    for (let r = 0; r < this.running.length; r++) {
      let s = this.running[r];
      if (s.done === void 0) continue;
      if (this.running.splice(r--, 1), s.done) {
        let l = _s(s.updates.length ? s.updates[0].startState : this.view.state), a = Math.min(l, s.done.from + (s.active.explicit ? 0 : 1)), f = new po(s.active.source, s.active.explicit, a, s.done, s.done.from, (n = s.done.to) !== null && n !== void 0 ? n : l);
        for (let h of s.updates) f = f.update(h, t);
        if (f.hasResult()) {
          e.push(f);
          continue;
        }
      }
      let o = i.active.find((l) => l.source == s.active.source);
      if (o && o.isPending) if (s.done == null) {
        let l = new mi(s.active.source, 0);
        for (let a of s.updates) l = l.update(a, t);
        l.isPending || e.push(l);
      } else this.startQuery(o);
    }
    (e.length || i.open && i.open.disabled) && this.view.dispatch({ effects: Wd.of(e) });
  }
}, { eventHandlers: { blur(n) {
  let e = this.view.state.field(zn, false);
  if (e && e.tooltip && this.view.state.facet(en).closeOnBlur) {
    let t = e.open && fv(this.view, e.open.tooltip);
    (!t || !t.dom.contains(n.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: Jl.of(null) }), 10);
  }
}, compositionstart() {
  this.composing = 1;
}, compositionend() {
  this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Uc.of(false) }), 20), this.composing = 0;
} } }), xE = typeof navigator == "object" && /Win/.test(navigator.platform), SE = os.highest(he.domEventHandlers({ keydown(n, e) {
  let t = e.state.field(zn, false);
  if (!t || !t.open || t.open.disabled || t.open.selected < 0 || n.key.length > 1 || n.ctrlKey && !(xE && n.altKey) || n.metaKey) return false;
  let i = t.open.options[t.open.selected], r = t.active.find((o) => o.source == i.source), s = i.completion.commitCharacters || r.result.commitCharacters;
  return s && s.indexOf(n.key) > -1 && $d(e, i), false;
} })), kE = he.baseTheme({ ".cm-tooltip.cm-tooltip-autocomplete": { "& > ul": { fontFamily: "monospace", whiteSpace: "nowrap", overflow: "hidden auto", maxWidth_fallback: "700px", maxWidth: "min(700px, 95vw)", minWidth: "250px", maxHeight: "10em", height: "100%", listStyle: "none", margin: 0, padding: 0, "& > li, & > completion-section": { padding: "1px 3px", lineHeight: 1.2 }, "& > li": { overflowX: "hidden", textOverflow: "ellipsis", cursor: "pointer" }, "& > completion-section": { display: "list-item", borderBottom: "1px solid silver", paddingLeft: "0.5em", opacity: 0.7 } } }, "&light .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#17c", color: "white" }, "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#777" }, "&dark .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#347", color: "white" }, "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#444" }, ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": { content: '"\xB7\xB7\xB7"', opacity: 0.5, display: "block", textAlign: "center" }, ".cm-tooltip.cm-completionInfo": { position: "absolute", padding: "3px 9px", width: "max-content", maxWidth: "400px", boxSizing: "border-box", whiteSpace: "pre-line" }, ".cm-completionInfo.cm-completionInfo-left": { right: "100%" }, ".cm-completionInfo.cm-completionInfo-right": { left: "100%" }, ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" }, ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" }, "&light .cm-snippetField": { backgroundColor: "#00000022" }, "&dark .cm-snippetField": { backgroundColor: "#ffffff22" }, ".cm-snippetFieldPosition": { verticalAlign: "text-top", width: 0, height: "1.15em", display: "inline-block", margin: "0 -0.7px -.7em", borderLeft: "1.4px dotted #888" }, ".cm-completionMatchedText": { textDecoration: "underline" }, ".cm-completionDetail": { marginLeft: "0.5em", fontStyle: "italic" }, ".cm-completionIcon": { fontSize: "90%", width: ".8em", display: "inline-block", textAlign: "center", paddingRight: ".6em", opacity: "0.6", boxSizing: "content-box" }, ".cm-completionIcon-function, .cm-completionIcon-method": { "&:after": { content: "'\u0192'" } }, ".cm-completionIcon-class": { "&:after": { content: "'\u25CB'" } }, ".cm-completionIcon-interface": { "&:after": { content: "'\u25CC'" } }, ".cm-completionIcon-variable": { "&:after": { content: "'\u{1D465}'" } }, ".cm-completionIcon-constant": { "&:after": { content: "'\u{1D436}'" } }, ".cm-completionIcon-type": { "&:after": { content: "'\u{1D461}'" } }, ".cm-completionIcon-enum": { "&:after": { content: "'\u222A'" } }, ".cm-completionIcon-property": { "&:after": { content: "'\u25A1'" } }, ".cm-completionIcon-keyword": { "&:after": { content: "'\u{1F511}\uFE0E'" } }, ".cm-completionIcon-namespace": { "&:after": { content: "'\u25A2'" } }, ".cm-completionIcon-text": { "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" } } }), Ql = { brackets: ["(", "[", "{", "'", '"'], before: ")]}:;>", stringPrefixes: [] }, Es = Ee.define({ map(n, e) {
  let t = e.mapPos(n, -1, an.TrackAfter);
  return t ?? void 0;
} }), zd = new class extends Is {
}();
zd.startSide = 1;
zd.endSide = -1;
const Mb = Yt.define({ create() {
  return ze.empty;
}, update(n, e) {
  if (n = n.map(e.changes), e.selection) {
    let t = e.state.doc.lineAt(e.selection.main.head);
    n = n.update({ filter: (i) => i >= t.from && i <= t.to });
  }
  for (let t of e.effects) t.is(Es) && (n = n.update({ add: [zd.range(t.value, t.value + 1)] }));
  return n;
} });
function CE() {
  return [AE, Mb];
}
const hh = "()[]{}<>\xAB\xBB\xBB\xAB\uFF3B\uFF3D\uFF5B\uFF5D";
function Ab(n) {
  for (let e = 0; e < hh.length; e += 2) if (hh.charCodeAt(e) == n) return hh.charAt(e + 1);
  return cd(n < 128 ? n : n + 1);
}
function Eb(n, e) {
  return n.languageDataAt("closeBrackets", e)[0] || Ql;
}
const ME = typeof navigator == "object" && /Android\b/.test(navigator.userAgent), AE = he.inputHandler.of((n, e, t, i) => {
  if ((ME ? n.composing : n.compositionStarted) || n.state.readOnly) return false;
  let r = n.state.selection.main;
  if (i.length > 2 || i.length == 2 && sr($n(i, 0)) == 1 || e != r.from || t != r.to) return false;
  let s = OE(n.state, i);
  return s ? (n.dispatch(s), true) : false;
}), EE = ({ state: n, dispatch: e }) => {
  if (n.readOnly) return false;
  let i = Eb(n, n.selection.main.head).brackets || Ql.brackets, r = null, s = n.changeByRange((o) => {
    if (o.empty) {
      let l = _E(n.doc, o.head);
      for (let a of i) if (a == l && mf(n.doc, o.head) == Ab($n(a, 0))) return { changes: { from: o.head - a.length, to: o.head + a.length }, range: j.cursor(o.head - a.length) };
    }
    return { range: r = o };
  });
  return r || e(n.update(s, { scrollIntoView: true, userEvent: "delete.backward" })), !r;
}, TE = [{ key: "Backspace", run: EE }];
function OE(n, e) {
  let t = Eb(n, n.selection.main.head), i = t.brackets || Ql.brackets;
  for (let r of i) {
    let s = Ab($n(r, 0));
    if (e == r) return s == r ? RE(n, r, i.indexOf(r + r + r) > -1, t) : LE(n, r, s, t.before || Ql.before);
    if (e == s && Tb(n, n.selection.main.from)) return DE(n, r, s);
  }
  return null;
}
function Tb(n, e) {
  let t = false;
  return n.field(Mb).between(0, n.doc.length, (i) => {
    i == e && (t = true);
  }), t;
}
function mf(n, e) {
  let t = n.sliceString(e, e + 2);
  return t.slice(0, sr($n(t, 0)));
}
function _E(n, e) {
  let t = n.sliceString(e - 2, e);
  return sr($n(t, 0)) == t.length ? t : t.slice(1);
}
function LE(n, e, t, i) {
  let r = null, s = n.changeByRange((o) => {
    if (!o.empty) return { changes: [{ insert: e, from: o.from }, { insert: t, from: o.to }], effects: Es.of(o.to + e.length), range: j.range(o.anchor + e.length, o.head + e.length) };
    let l = mf(n.doc, o.head);
    return !l || /\s/.test(l) || i.indexOf(l) > -1 ? { changes: { insert: e + t, from: o.head }, effects: Es.of(o.head + e.length), range: j.cursor(o.head + e.length) } : { range: r = o };
  });
  return r ? null : n.update(s, { scrollIntoView: true, userEvent: "input.type" });
}
function DE(n, e, t) {
  let i = null, r = n.changeByRange((s) => s.empty && mf(n.doc, s.head) == t ? { changes: { from: s.head, to: s.head + t.length, insert: t }, range: j.cursor(s.head + t.length) } : i = { range: s });
  return i ? null : n.update(r, { scrollIntoView: true, userEvent: "input.type" });
}
function RE(n, e, t, i) {
  let r = i.stringPrefixes || Ql.stringPrefixes, s = null, o = n.changeByRange((l) => {
    if (!l.empty) return { changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }], effects: Es.of(l.to + e.length), range: j.range(l.anchor + e.length, l.head + e.length) };
    let a = l.head, f = mf(n.doc, a), h;
    if (f == e) {
      if (mm(n, a)) return { changes: { insert: e + e, from: a }, effects: Es.of(a + e.length), range: j.cursor(a + e.length) };
      if (Tb(n, a)) {
        let m = t && n.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
        return { changes: { from: a, to: a + m.length, insert: m }, range: j.cursor(a + m.length) };
      }
    } else {
      if (t && n.sliceDoc(a - 2 * e.length, a) == e + e && (h = ym(n, a - 2 * e.length, r)) > -1 && mm(n, h)) return { changes: { insert: e + e + e + e, from: a }, effects: Es.of(a + e.length), range: j.cursor(a + e.length) };
      if (n.charCategorizer(a)(f) != St.Word && ym(n, a, r) > -1 && !PE(n, a, e, r)) return { changes: { insert: e + e, from: a }, effects: Es.of(a + e.length), range: j.cursor(a + e.length) };
    }
    return { range: s = l };
  });
  return s ? null : n.update(o, { scrollIntoView: true, userEvent: "input.type" });
}
function mm(n, e) {
  let t = vn(n).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function PE(n, e, t, i) {
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
function ym(n, e, t) {
  let i = n.charCategorizer(e);
  if (i(n.sliceDoc(e - 1, e)) != St.Word) return e;
  for (let r of t) {
    let s = e - r.length;
    if (n.sliceDoc(s, e) == r && i(n.sliceDoc(s - 1, s)) != St.Word) return s;
  }
  return -1;
}
function Kd(n = {}) {
  return [SE, zn, en.of(n), wE, BE, kE];
}
const Ob = [{ key: "Ctrl-Space", run: fh }, { mac: "Alt-`", run: fh }, { mac: "Alt-i", run: fh }, { key: "Escape", run: mE }, { key: "ArrowDown", run: Ja(true) }, { key: "ArrowUp", run: Ja(false) }, { key: "PageDown", run: Ja(true, "page") }, { key: "PageUp", run: Ja(false, "page") }, { key: "Enter", run: gE }], BE = os.highest(Sd.computeN([en], (n) => n.facet(en).defaultKeymap ? [Ob] : []));
class vm {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.diagnostic = i;
  }
}
class Cs {
  constructor(e, t, i) {
    this.diagnostics = e, this.panel = t, this.selected = i;
  }
  static init(e, t, i) {
    let r = i.facet(ar).markerFilter;
    r && (e = r(e, i));
    let s = e.slice().sort((h, p) => h.from - p.from || h.to - p.to), o = new Ri(), l = [], a = 0;
    for (let h = 0; ; ) {
      let p = h == s.length ? null : s[h];
      if (!p && !l.length) break;
      let m, b;
      for (l.length ? (m = a, b = l.reduce((M, A) => Math.min(M, A.to), p && p.from > m ? p.from : 1e8)) : (m = p.from, b = p.to, l.push(p), h++); h < s.length; ) {
        let M = s[h];
        if (M.from == m && (M.to > M.from || M.to == m)) l.push(M), h++, b = Math.min(M.to, b);
        else {
          b = Math.min(M.from, b);
          break;
        }
      }
      let S = QE(l);
      if (l.some((M) => M.from == M.to || M.from == M.to - 1 && i.doc.lineAt(M.from).to == M.from)) o.add(m, m, ve.widget({ widget: new UE(S), diagnostics: l.slice() }));
      else {
        let M = l.reduce((A, _) => _.markClass ? A + " " + _.markClass : A, "");
        o.add(m, b, ve.mark({ class: "cm-lintRange cm-lintRange-" + S + M, diagnostics: l.slice(), inclusiveEnd: l.some((A) => A.to > b) }));
      }
      a = b;
      for (let M = 0; M < l.length; M++) l[M].to <= a && l.splice(M--, 1);
    }
    let f = o.finish();
    return new Cs(f, t, Co(f));
  }
}
function Co(n, e = null, t = 0) {
  let i = null;
  return n.between(t, 1e9, (r, s, { spec: o }) => {
    if (!(e && o.diagnostics.indexOf(e) < 0)) if (!i) i = new vm(r, s, e || o.diagnostics[0]);
    else {
      if (o.diagnostics.indexOf(i.diagnostic) < 0) return false;
      i = new vm(i.from, s, i.diagnostic);
    }
  }), i;
}
function IE(n, e) {
  let t = e.pos, i = e.end || t, r = n.state.facet(ar).hideOn(n, t, i);
  if (r != null) return r;
  let s = n.startState.doc.lineAt(e.pos);
  return !!(n.effects.some((o) => o.is(jd)) || n.changes.touchesRange(s.from, Math.max(s.to, i)));
}
function _b(n, e) {
  return n.field(ii, false) ? e : e.concat(Ee.appendConfig.of(Pb));
}
function NE(n, e) {
  return { effects: _b(n, [jd.of(e)]) };
}
const jd = Ee.define(), qd = Ee.define(), Lb = Ee.define(), ii = Yt.define({ create() {
  return new Cs(ve.none, null, null);
}, update(n, e) {
  if (e.docChanged && n.diagnostics.size) {
    let t = n.diagnostics.map(e.changes), i = null, r = n.panel;
    if (n.selected) {
      let s = e.changes.mapPos(n.selected.from, 1);
      i = Co(t, n.selected.diagnostic, s) || Co(t, null, s);
    }
    !t.size && r && e.state.facet(ar).autoPanel && (r = null), n = new Cs(t, r, i);
  }
  for (let t of e.effects) if (t.is(jd)) {
    let i = e.state.facet(ar).autoPanel ? t.value.length ? Xl.open : null : n.panel;
    n = Cs.init(t.value, i, e.state);
  } else t.is(qd) ? n = new Cs(n.diagnostics, t.value ? Xl.open : null, n.selected) : t.is(Lb) && (n = new Cs(n.diagnostics, n.panel, t.value));
  return n;
}, provide: (n) => [Vs.from(n, (e) => e.panel), he.decorations.from(n, (e) => e.diagnostics)] }), FE = ve.mark({ class: "cm-lintRange cm-lintRange-active" });
function HE(n, e, t) {
  let { diagnostics: i } = n.state.field(ii), r, s = -1, o = -1;
  i.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, f, { spec: h }) => {
    if (e >= a && e <= f && (a == f || (e > a || t > 0) && (e < f || t < 0))) return r = h.diagnostics, s = a, o = f, false;
  });
  let l = n.state.facet(ar).tooltipFilter;
  return r && l && (r = l(r, n.state)), r ? { pos: s, end: o, above: n.state.doc.lineAt(s).to < o, create() {
    return { dom: VE(n, r) };
  } } : null;
}
function VE(n, e) {
  return ct("ul", { class: "cm-tooltip-lint" }, e.map((t) => Rb(n, t, false)));
}
const WE = (n) => {
  let e = n.state.field(ii, false);
  (!e || !e.panel) && n.dispatch({ effects: _b(n.state, [qd.of(true)]) });
  let t = ql(n, Xl.open);
  return t && t.dom.querySelector(".cm-panel-lint ul").focus(), true;
}, bm = (n) => {
  let e = n.state.field(ii, false);
  return !e || !e.panel ? false : (n.dispatch({ effects: qd.of(false) }), true);
}, $E = (n) => {
  let e = n.state.field(ii, false);
  if (!e) return false;
  let t = n.state.selection.main, i = e.diagnostics.iter(t.to + 1);
  return !i.value && (i = e.diagnostics.iter(0), !i.value || i.from == t.from && i.to == t.to) ? false : (n.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: true }), true);
}, zE = [{ key: "Mod-Shift-m", run: WE, preventDefault: true }, { key: "F8", run: $E }], KE = kt.fromClass(class {
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
      t.length && jE(t.map((i) => Promise.resolve(i(this.view))), (i) => {
        this.view.state.doc == e.doc && this.view.dispatch(NE(this.view.state, i.reduce((r, s) => r.concat(s))));
      }, (i) => {
        Rn(this.view.state, i);
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
function jE(n, e, t) {
  let i = [], r = -1;
  for (let s of n) s.then((o) => {
    i.push(o), clearTimeout(r), i.length == n.length ? e(i) : r = setTimeout(() => e(i), 200);
  }, t);
}
const ar = be.define({ combine(n) {
  return { sources: n.map((e) => e.source).filter((e) => e != null), ...Or(n.map((e) => e.config), { delay: 750, markerFilter: null, tooltipFilter: null, needsRefresh: null, hideOn: () => null }, { delay: Math.max, markerFilter: wm, tooltipFilter: wm, needsRefresh: (e, t) => e ? t ? (i) => e(i) || t(i) : e : t, hideOn: (e, t) => e ? t ? (i, r, s) => e(i, r, s) || t(i, r, s) : e : t, autoPanel: (e, t) => e || t }) };
} });
function wm(n, e) {
  return n ? e ? (t, i) => e(n(t, i), i) : n : e;
}
function qE(n, e = {}) {
  return [ar.of({ source: n, config: e }), KE, Pb];
}
function Db(n) {
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
function Rb(n, e, t) {
  var i;
  let r = t ? Db(e.actions) : [];
  return ct("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, ct("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage(n) : e.message), (i = e.actions) === null || i === void 0 ? void 0 : i.map((s, o) => {
    let l = false, a = (b) => {
      if (b.preventDefault(), l) return;
      l = true;
      let S = Co(n.state.field(ii).diagnostics, e);
      S && s.apply(n, S.from, S.to);
    }, { name: f } = s, h = r[o] ? f.indexOf(r[o]) : -1, p = h < 0 ? f : [f.slice(0, h), ct("u", f.slice(h, h + 1)), f.slice(h + 1)], m = s.markClass ? " " + s.markClass : "";
    return ct("button", { type: "button", class: "cm-diagnosticAction" + m, onclick: a, onmousedown: a, "aria-label": ` Action: ${f}${h < 0 ? "" : ` (access key "${r[o]})"`}.` }, p);
  }), e.source && ct("div", { class: "cm-diagnosticSource" }, e.source));
}
class UE extends Ni {
  constructor(e) {
    super(), this.sev = e;
  }
  eq(e) {
    return e.sev == this.sev;
  }
  toDOM() {
    return ct("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
  }
}
class xm {
  constructor(e, t) {
    this.diagnostic = t, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = Rb(e, t, true), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class Xl {
  constructor(e) {
    this.view = e, this.items = [];
    let t = (r) => {
      if (r.keyCode == 27) bm(this.view), this.view.focus();
      else if (r.keyCode == 38 || r.keyCode == 33) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
      else if (r.keyCode == 40 || r.keyCode == 34) this.moveSelection((this.selectedIndex + 1) % this.items.length);
      else if (r.keyCode == 36) this.moveSelection(0);
      else if (r.keyCode == 35) this.moveSelection(this.items.length - 1);
      else if (r.keyCode == 13) this.view.focus();
      else if (r.keyCode >= 65 && r.keyCode <= 90 && this.selectedIndex >= 0) {
        let { diagnostic: s } = this.items[this.selectedIndex], o = Db(s.actions);
        for (let l = 0; l < o.length; l++) if (o[l].toUpperCase().charCodeAt(0) == r.keyCode) {
          let a = Co(this.view.state.field(ii).diagnostics, s);
          a && s.actions[l].apply(e, a.from, a.to);
        }
      } else return;
      r.preventDefault();
    }, i = (r) => {
      for (let s = 0; s < this.items.length; s++) this.items[s].dom.contains(r.target) && this.moveSelection(s);
    };
    this.list = ct("ul", { tabIndex: 0, role: "listbox", "aria-label": this.view.state.phrase("Diagnostics"), onkeydown: t, onclick: i }), this.dom = ct("div", { class: "cm-panel-lint" }, this.list, ct("button", { type: "button", name: "close", "aria-label": this.view.state.phrase("close"), onclick: () => bm(this.view) }, "\xD7")), this.update();
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
        p < 0 ? (m = new xm(this.view, h), this.items.splice(i, 0, m), r = true) : (m = this.items[p], p > i && (this.items.splice(i, p - i), r = true)), t && m.diagnostic == t.diagnostic ? m.dom.hasAttribute("aria-selected") || (m.dom.setAttribute("aria-selected", "true"), s = m) : m.dom.hasAttribute("aria-selected") && m.dom.removeAttribute("aria-selected"), i++;
      }
    }); i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); ) r = true, this.items.pop();
    this.items.length == 0 && (this.items.push(new xm(this.view, { from: -1, to: -1, severity: "info", message: this.view.state.phrase("No diagnostics") })), r = true), s ? (this.list.setAttribute("aria-activedescendant", s.id), this.view.requestMeasure({ key: this, read: () => ({ sel: s.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }), write: ({ sel: l, panel: a }) => {
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
    let t = this.view.state.field(ii), i = Co(t.diagnostics, this.items[e].diagnostic);
    i && this.view.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: true, effects: Lb.of(i) });
  }
  static open(e) {
    return new Xl(e);
  }
}
function GE(n, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(n)}</svg>')`;
}
function Qa(n) {
  return GE(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${n}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const YE = he.baseTheme({ ".cm-diagnostic": { padding: "3px 6px 3px 8px", marginLeft: "-1px", display: "block", whiteSpace: "pre-wrap" }, ".cm-diagnostic-error": { borderLeft: "5px solid #d11" }, ".cm-diagnostic-warning": { borderLeft: "5px solid orange" }, ".cm-diagnostic-info": { borderLeft: "5px solid #999" }, ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" }, ".cm-diagnosticAction": { font: "inherit", border: "none", padding: "2px 4px", backgroundColor: "#444", color: "white", borderRadius: "3px", marginLeft: "8px", cursor: "pointer" }, ".cm-diagnosticSource": { fontSize: "70%", opacity: 0.7 }, ".cm-lintRange": { backgroundPosition: "left bottom", backgroundRepeat: "repeat-x", paddingBottom: "0.7px" }, ".cm-lintRange-error": { backgroundImage: Qa("#d11") }, ".cm-lintRange-warning": { backgroundImage: Qa("orange") }, ".cm-lintRange-info": { backgroundImage: Qa("#999") }, ".cm-lintRange-hint": { backgroundImage: Qa("#66d") }, ".cm-lintRange-active": { backgroundColor: "#ffdd9980" }, ".cm-tooltip-lint": { padding: 0, margin: 0 }, ".cm-lintPoint": { position: "relative", "&:after": { content: '""', position: "absolute", bottom: 0, left: "-2px", borderLeft: "3px solid transparent", borderRight: "3px solid transparent", borderBottom: "4px solid #d11" } }, ".cm-lintPoint-warning": { "&:after": { borderBottomColor: "orange" } }, ".cm-lintPoint-info": { "&:after": { borderBottomColor: "#999" } }, ".cm-lintPoint-hint": { "&:after": { borderBottomColor: "#66d" } }, ".cm-panel.cm-panel-lint": { position: "relative", "& ul": { maxHeight: "100px", overflowY: "auto", "& [aria-selected]": { backgroundColor: "#ddd", "& u": { textDecoration: "underline" } }, "&:focus [aria-selected]": { background_fallback: "#bdf", backgroundColor: "Highlight", color_fallback: "white", color: "HighlightText" }, "& u": { textDecoration: "none" }, padding: 0, margin: 0 }, "& [name=close]": { position: "absolute", top: "0", right: "2px", background: "inherit", border: "none", font: "inherit", padding: 0, margin: 0 } } });
function JE(n) {
  return n == "error" ? 4 : n == "warning" ? 3 : n == "info" ? 2 : 1;
}
function QE(n) {
  let e = "hint", t = 1;
  for (let i of n) {
    let r = JE(i.severity);
    r > t && (t = r, e = i.severity);
  }
  return e;
}
const Pb = [ii, he.decorations.compute([ii], (n) => {
  let { selected: e, panel: t } = n.field(ii);
  return !e || !t || e.from == e.to ? ve.none : ve.set([FE.range(e.from, e.to)]);
}), cv(HE, { hideOn: IE }), YE], XE = "#e5c07b", Sm = "#e06c75", ZE = "#56b6c2", eT = "#ffffff", yc = "#abb2bf", Ou = "#7d8799", tT = "#61afef", nT = "#98c379", km = "#d19a66", iT = "#c678dd", rT = "#21252b", Cm = "#2c313a", Mm = "#282c34", uh = "#353a42", sT = "#3E4451", Am = "#528bff", oT = he.theme({ "&": { color: yc, backgroundColor: Mm }, ".cm-content": { caretColor: Am }, ".cm-cursor, .cm-dropCursor": { borderLeftColor: Am }, "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: sT }, ".cm-panels": { backgroundColor: rT, color: yc }, ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" }, ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" }, ".cm-searchMatch": { backgroundColor: "#72a1ff59", outline: "1px solid #457dff" }, ".cm-searchMatch.cm-searchMatch-selected": { backgroundColor: "#6199ff2f" }, ".cm-activeLine": { backgroundColor: "#6699ff0b" }, ".cm-selectionMatch": { backgroundColor: "#aafe661a" }, "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bad0f847" }, ".cm-gutters": { backgroundColor: Mm, color: Ou, border: "none" }, ".cm-activeLineGutter": { backgroundColor: Cm }, ".cm-foldPlaceholder": { backgroundColor: "transparent", border: "none", color: "#ddd" }, ".cm-tooltip": { border: "none", backgroundColor: uh }, ".cm-tooltip .cm-tooltip-arrow:before": { borderTopColor: "transparent", borderBottomColor: "transparent" }, ".cm-tooltip .cm-tooltip-arrow:after": { borderTopColor: uh, borderBottomColor: uh }, ".cm-tooltip-autocomplete": { "& > ul > li[aria-selected]": { backgroundColor: Cm, color: yc } } }, { dark: true }), lT = la.define([{ tag: U.keyword, color: iT }, { tag: [U.name, U.deleted, U.character, U.propertyName, U.macroName], color: Sm }, { tag: [U.function(U.variableName), U.labelName], color: tT }, { tag: [U.color, U.constant(U.name), U.standard(U.name)], color: km }, { tag: [U.definition(U.name), U.separator], color: yc }, { tag: [U.typeName, U.className, U.number, U.changed, U.annotation, U.modifier, U.self, U.namespace], color: XE }, { tag: [U.operator, U.operatorKeyword, U.url, U.escape, U.regexp, U.link, U.special(U.string)], color: ZE }, { tag: [U.meta, U.comment], color: Ou }, { tag: U.strong, fontWeight: "bold" }, { tag: U.emphasis, fontStyle: "italic" }, { tag: U.strikethrough, textDecoration: "line-through" }, { tag: U.link, color: Ou, textDecoration: "underline" }, { tag: U.heading, fontWeight: "bold", color: Sm }, { tag: [U.atom, U.bool, U.special(U.variableName)], color: km }, { tag: [U.processingInstruction, U.string, U.inserted], color: nT }, { tag: U.invalid, color: eT }]), aT = [oT, _v(lT)];
function cT(n) {
  var e = n.Pos;
  function t(c, u, d) {
    if (u.line === d.line && u.ch >= d.ch - 1) {
      var g = c.getLine(u.line), y = g.charCodeAt(u.ch);
      55296 <= y && y <= 55551 && (d.ch += 1);
    }
    return { start: u, end: d };
  }
  var i = [{ keys: "<Left>", type: "keyToKey", toKeys: "h" }, { keys: "<Right>", type: "keyToKey", toKeys: "l" }, { keys: "<Up>", type: "keyToKey", toKeys: "k" }, { keys: "<Down>", type: "keyToKey", toKeys: "j" }, { keys: "g<Up>", type: "keyToKey", toKeys: "gk" }, { keys: "g<Down>", type: "keyToKey", toKeys: "gj" }, { keys: "<Space>", type: "keyToKey", toKeys: "l" }, { keys: "<BS>", type: "keyToKey", toKeys: "h" }, { keys: "<Del>", type: "keyToKey", toKeys: "x" }, { keys: "<C-Space>", type: "keyToKey", toKeys: "W" }, { keys: "<C-BS>", type: "keyToKey", toKeys: "B" }, { keys: "<S-Space>", type: "keyToKey", toKeys: "w" }, { keys: "<S-BS>", type: "keyToKey", toKeys: "b" }, { keys: "<C-n>", type: "keyToKey", toKeys: "j" }, { keys: "<C-p>", type: "keyToKey", toKeys: "k" }, { keys: "<C-[>", type: "keyToKey", toKeys: "<Esc>" }, { keys: "<C-c>", type: "keyToKey", toKeys: "<Esc>" }, { keys: "<C-[>", type: "keyToKey", toKeys: "<Esc>", context: "insert" }, { keys: "<C-c>", type: "keyToKey", toKeys: "<Esc>", context: "insert" }, { keys: "<C-Esc>", type: "keyToKey", toKeys: "<Esc>" }, { keys: "<C-Esc>", type: "keyToKey", toKeys: "<Esc>", context: "insert" }, { keys: "s", type: "keyToKey", toKeys: "cl", context: "normal" }, { keys: "s", type: "keyToKey", toKeys: "c", context: "visual" }, { keys: "S", type: "keyToKey", toKeys: "cc", context: "normal" }, { keys: "S", type: "keyToKey", toKeys: "VdO", context: "visual" }, { keys: "<Home>", type: "keyToKey", toKeys: "0" }, { keys: "<End>", type: "keyToKey", toKeys: "$" }, { keys: "<PageUp>", type: "keyToKey", toKeys: "<C-b>" }, { keys: "<PageDown>", type: "keyToKey", toKeys: "<C-f>" }, { keys: "<CR>", type: "keyToKey", toKeys: "j^", context: "normal" }, { keys: "<Ins>", type: "keyToKey", toKeys: "i", context: "normal" }, { keys: "<Ins>", type: "action", action: "toggleOverwrite", context: "insert" }, { keys: "H", type: "motion", motion: "moveToTopLine", motionArgs: { linewise: true, toJumplist: true } }, { keys: "M", type: "motion", motion: "moveToMiddleLine", motionArgs: { linewise: true, toJumplist: true } }, { keys: "L", type: "motion", motion: "moveToBottomLine", motionArgs: { linewise: true, toJumplist: true } }, { keys: "h", type: "motion", motion: "moveByCharacters", motionArgs: { forward: false } }, { keys: "l", type: "motion", motion: "moveByCharacters", motionArgs: { forward: true } }, { keys: "j", type: "motion", motion: "moveByLines", motionArgs: { forward: true, linewise: true } }, { keys: "k", type: "motion", motion: "moveByLines", motionArgs: { forward: false, linewise: true } }, { keys: "gj", type: "motion", motion: "moveByDisplayLines", motionArgs: { forward: true } }, { keys: "gk", type: "motion", motion: "moveByDisplayLines", motionArgs: { forward: false } }, { keys: "w", type: "motion", motion: "moveByWords", motionArgs: { forward: true, wordEnd: false } }, { keys: "W", type: "motion", motion: "moveByWords", motionArgs: { forward: true, wordEnd: false, bigWord: true } }, { keys: "e", type: "motion", motion: "moveByWords", motionArgs: { forward: true, wordEnd: true, inclusive: true } }, { keys: "E", type: "motion", motion: "moveByWords", motionArgs: { forward: true, wordEnd: true, bigWord: true, inclusive: true } }, { keys: "b", type: "motion", motion: "moveByWords", motionArgs: { forward: false, wordEnd: false } }, { keys: "B", type: "motion", motion: "moveByWords", motionArgs: { forward: false, wordEnd: false, bigWord: true } }, { keys: "ge", type: "motion", motion: "moveByWords", motionArgs: { forward: false, wordEnd: true, inclusive: true } }, { keys: "gE", type: "motion", motion: "moveByWords", motionArgs: { forward: false, wordEnd: true, bigWord: true, inclusive: true } }, { keys: "{", type: "motion", motion: "moveByParagraph", motionArgs: { forward: false, toJumplist: true } }, { keys: "}", type: "motion", motion: "moveByParagraph", motionArgs: { forward: true, toJumplist: true } }, { keys: "(", type: "motion", motion: "moveBySentence", motionArgs: { forward: false } }, { keys: ")", type: "motion", motion: "moveBySentence", motionArgs: { forward: true } }, { keys: "<C-f>", type: "motion", motion: "moveByPage", motionArgs: { forward: true } }, { keys: "<C-b>", type: "motion", motion: "moveByPage", motionArgs: { forward: false } }, { keys: "<C-d>", type: "motion", motion: "moveByScroll", motionArgs: { forward: true, explicitRepeat: true } }, { keys: "<C-u>", type: "motion", motion: "moveByScroll", motionArgs: { forward: false, explicitRepeat: true } }, { keys: "gg", type: "motion", motion: "moveToLineOrEdgeOfDocument", motionArgs: { forward: false, explicitRepeat: true, linewise: true, toJumplist: true } }, { keys: "G", type: "motion", motion: "moveToLineOrEdgeOfDocument", motionArgs: { forward: true, explicitRepeat: true, linewise: true, toJumplist: true } }, { keys: "g$", type: "motion", motion: "moveToEndOfDisplayLine" }, { keys: "g^", type: "motion", motion: "moveToStartOfDisplayLine" }, { keys: "g0", type: "motion", motion: "moveToStartOfDisplayLine" }, { keys: "0", type: "motion", motion: "moveToStartOfLine" }, { keys: "^", type: "motion", motion: "moveToFirstNonWhiteSpaceCharacter" }, { keys: "+", type: "motion", motion: "moveByLines", motionArgs: { forward: true, toFirstChar: true } }, { keys: "-", type: "motion", motion: "moveByLines", motionArgs: { forward: false, toFirstChar: true } }, { keys: "_", type: "motion", motion: "moveByLines", motionArgs: { forward: true, toFirstChar: true, repeatOffset: -1 } }, { keys: "$", type: "motion", motion: "moveToEol", motionArgs: { inclusive: true } }, { keys: "%", type: "motion", motion: "moveToMatchedSymbol", motionArgs: { inclusive: true, toJumplist: true } }, { keys: "f<character>", type: "motion", motion: "moveToCharacter", motionArgs: { forward: true, inclusive: true } }, { keys: "F<character>", type: "motion", motion: "moveToCharacter", motionArgs: { forward: false } }, { keys: "t<character>", type: "motion", motion: "moveTillCharacter", motionArgs: { forward: true, inclusive: true } }, { keys: "T<character>", type: "motion", motion: "moveTillCharacter", motionArgs: { forward: false } }, { keys: ";", type: "motion", motion: "repeatLastCharacterSearch", motionArgs: { forward: true } }, { keys: ",", type: "motion", motion: "repeatLastCharacterSearch", motionArgs: { forward: false } }, { keys: "'<register>", type: "motion", motion: "goToMark", motionArgs: { toJumplist: true, linewise: true } }, { keys: "`<register>", type: "motion", motion: "goToMark", motionArgs: { toJumplist: true } }, { keys: "]`", type: "motion", motion: "jumpToMark", motionArgs: { forward: true } }, { keys: "[`", type: "motion", motion: "jumpToMark", motionArgs: { forward: false } }, { keys: "]'", type: "motion", motion: "jumpToMark", motionArgs: { forward: true, linewise: true } }, { keys: "['", type: "motion", motion: "jumpToMark", motionArgs: { forward: false, linewise: true } }, { keys: "]p", type: "action", action: "paste", isEdit: true, actionArgs: { after: true, isEdit: true, matchIndent: true } }, { keys: "[p", type: "action", action: "paste", isEdit: true, actionArgs: { after: false, isEdit: true, matchIndent: true } }, { keys: "]<character>", type: "motion", motion: "moveToSymbol", motionArgs: { forward: true, toJumplist: true } }, { keys: "[<character>", type: "motion", motion: "moveToSymbol", motionArgs: { forward: false, toJumplist: true } }, { keys: "|", type: "motion", motion: "moveToColumn" }, { keys: "o", type: "motion", motion: "moveToOtherHighlightedEnd", context: "visual" }, { keys: "O", type: "motion", motion: "moveToOtherHighlightedEnd", motionArgs: { sameLine: true }, context: "visual" }, { keys: "d", type: "operator", operator: "delete" }, { keys: "y", type: "operator", operator: "yank" }, { keys: "c", type: "operator", operator: "change" }, { keys: "=", type: "operator", operator: "indentAuto" }, { keys: ">", type: "operator", operator: "indent", operatorArgs: { indentRight: true } }, { keys: "<", type: "operator", operator: "indent", operatorArgs: { indentRight: false } }, { keys: "g~", type: "operator", operator: "changeCase" }, { keys: "gu", type: "operator", operator: "changeCase", operatorArgs: { toLower: true }, isEdit: true }, { keys: "gU", type: "operator", operator: "changeCase", operatorArgs: { toLower: false }, isEdit: true }, { keys: "n", type: "motion", motion: "findNext", motionArgs: { forward: true, toJumplist: true } }, { keys: "N", type: "motion", motion: "findNext", motionArgs: { forward: false, toJumplist: true } }, { keys: "gn", type: "motion", motion: "findAndSelectNextInclusive", motionArgs: { forward: true } }, { keys: "gN", type: "motion", motion: "findAndSelectNextInclusive", motionArgs: { forward: false } }, { keys: "gq", type: "operator", operator: "hardWrap" }, { keys: "gw", type: "operator", operator: "hardWrap", operatorArgs: { keepCursor: true } }, { keys: "g?", type: "operator", operator: "rot13" }, { keys: "x", type: "operatorMotion", operator: "delete", motion: "moveByCharacters", motionArgs: { forward: true }, operatorMotionArgs: { visualLine: false } }, { keys: "X", type: "operatorMotion", operator: "delete", motion: "moveByCharacters", motionArgs: { forward: false }, operatorMotionArgs: { visualLine: true } }, { keys: "D", type: "operatorMotion", operator: "delete", motion: "moveToEol", motionArgs: { inclusive: true }, context: "normal" }, { keys: "D", type: "operator", operator: "delete", operatorArgs: { linewise: true }, context: "visual" }, { keys: "Y", type: "operatorMotion", operator: "yank", motion: "expandToLine", motionArgs: { linewise: true }, context: "normal" }, { keys: "Y", type: "operator", operator: "yank", operatorArgs: { linewise: true }, context: "visual" }, { keys: "C", type: "operatorMotion", operator: "change", motion: "moveToEol", motionArgs: { inclusive: true }, context: "normal" }, { keys: "C", type: "operator", operator: "change", operatorArgs: { linewise: true }, context: "visual" }, { keys: "~", type: "operatorMotion", operator: "changeCase", motion: "moveByCharacters", motionArgs: { forward: true }, operatorArgs: { shouldMoveCursor: true }, context: "normal" }, { keys: "~", type: "operator", operator: "changeCase", context: "visual" }, { keys: "<C-u>", type: "operatorMotion", operator: "delete", motion: "moveToStartOfLine", context: "insert" }, { keys: "<C-w>", type: "operatorMotion", operator: "delete", motion: "moveByWords", motionArgs: { forward: false, wordEnd: false }, context: "insert" }, { keys: "<C-w>", type: "idle", context: "normal" }, { keys: "<C-i>", type: "action", action: "jumpListWalk", actionArgs: { forward: true } }, { keys: "<C-o>", type: "action", action: "jumpListWalk", actionArgs: { forward: false } }, { keys: "<C-e>", type: "action", action: "scroll", actionArgs: { forward: true, linewise: true } }, { keys: "<C-y>", type: "action", action: "scroll", actionArgs: { forward: false, linewise: true } }, { keys: "a", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "charAfter" }, context: "normal" }, { keys: "A", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "eol" }, context: "normal" }, { keys: "A", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "endOfSelectedArea" }, context: "visual" }, { keys: "i", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "inplace" }, context: "normal" }, { keys: "gi", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "lastEdit" }, context: "normal" }, { keys: "I", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "firstNonBlank" }, context: "normal" }, { keys: "gI", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "bol" }, context: "normal" }, { keys: "I", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { insertAt: "startOfSelectedArea" }, context: "visual" }, { keys: "o", type: "action", action: "newLineAndEnterInsertMode", isEdit: true, interlaceInsertRepeat: true, actionArgs: { after: true }, context: "normal" }, { keys: "O", type: "action", action: "newLineAndEnterInsertMode", isEdit: true, interlaceInsertRepeat: true, actionArgs: { after: false }, context: "normal" }, { keys: "v", type: "action", action: "toggleVisualMode" }, { keys: "V", type: "action", action: "toggleVisualMode", actionArgs: { linewise: true } }, { keys: "<C-v>", type: "action", action: "toggleVisualMode", actionArgs: { blockwise: true } }, { keys: "<C-q>", type: "action", action: "toggleVisualMode", actionArgs: { blockwise: true } }, { keys: "gv", type: "action", action: "reselectLastSelection" }, { keys: "J", type: "action", action: "joinLines", isEdit: true }, { keys: "gJ", type: "action", action: "joinLines", actionArgs: { keepSpaces: true }, isEdit: true }, { keys: "p", type: "action", action: "paste", isEdit: true, actionArgs: { after: true, isEdit: true } }, { keys: "P", type: "action", action: "paste", isEdit: true, actionArgs: { after: false, isEdit: true } }, { keys: "r<character>", type: "action", action: "replace", isEdit: true }, { keys: "@<register>", type: "action", action: "replayMacro" }, { keys: "q<register>", type: "action", action: "enterMacroRecordMode" }, { keys: "R", type: "action", action: "enterInsertMode", isEdit: true, actionArgs: { replace: true }, context: "normal" }, { keys: "R", type: "operator", operator: "change", operatorArgs: { linewise: true, fullLine: true }, context: "visual", exitVisualBlock: true }, { keys: "u", type: "action", action: "undo", context: "normal" }, { keys: "u", type: "operator", operator: "changeCase", operatorArgs: { toLower: true }, context: "visual", isEdit: true }, { keys: "U", type: "operator", operator: "changeCase", operatorArgs: { toLower: false }, context: "visual", isEdit: true }, { keys: "<C-r>", type: "action", action: "redo" }, { keys: "m<register>", type: "action", action: "setMark" }, { keys: '"<register>', type: "action", action: "setRegister" }, { keys: "<C-r><register>", type: "action", action: "insertRegister", context: "insert", isEdit: true }, { keys: "<C-o>", type: "action", action: "oneNormalCommand", context: "insert" }, { keys: "zz", type: "action", action: "scrollToCursor", actionArgs: { position: "center" } }, { keys: "z.", type: "action", action: "scrollToCursor", actionArgs: { position: "center" }, motion: "moveToFirstNonWhiteSpaceCharacter" }, { keys: "zt", type: "action", action: "scrollToCursor", actionArgs: { position: "top" } }, { keys: "z<CR>", type: "action", action: "scrollToCursor", actionArgs: { position: "top" }, motion: "moveToFirstNonWhiteSpaceCharacter" }, { keys: "zb", type: "action", action: "scrollToCursor", actionArgs: { position: "bottom" } }, { keys: "z-", type: "action", action: "scrollToCursor", actionArgs: { position: "bottom" }, motion: "moveToFirstNonWhiteSpaceCharacter" }, { keys: ".", type: "action", action: "repeatLastEdit" }, { keys: "<C-a>", type: "action", action: "incrementNumberToken", isEdit: true, actionArgs: { increase: true, backtrack: false } }, { keys: "<C-x>", type: "action", action: "incrementNumberToken", isEdit: true, actionArgs: { increase: false, backtrack: false } }, { keys: "<C-t>", type: "action", action: "indent", actionArgs: { indentRight: true }, context: "insert" }, { keys: "<C-d>", type: "action", action: "indent", actionArgs: { indentRight: false }, context: "insert" }, { keys: "a<register>", type: "motion", motion: "textObjectManipulation" }, { keys: "i<register>", type: "motion", motion: "textObjectManipulation", motionArgs: { textObjectInner: true } }, { keys: "/", type: "search", searchArgs: { forward: true, querySrc: "prompt", toJumplist: true } }, { keys: "?", type: "search", searchArgs: { forward: false, querySrc: "prompt", toJumplist: true } }, { keys: "*", type: "search", searchArgs: { forward: true, querySrc: "wordUnderCursor", wholeWordOnly: true, toJumplist: true } }, { keys: "#", type: "search", searchArgs: { forward: false, querySrc: "wordUnderCursor", wholeWordOnly: true, toJumplist: true } }, { keys: "g*", type: "search", searchArgs: { forward: true, querySrc: "wordUnderCursor", toJumplist: true } }, { keys: "g#", type: "search", searchArgs: { forward: false, querySrc: "wordUnderCursor", toJumplist: true } }, { keys: ":", type: "ex" }], r = /* @__PURE__ */ Object.create(null), s = i.length, o = [{ name: "colorscheme", shortName: "colo" }, { name: "map" }, { name: "imap", shortName: "im" }, { name: "nmap", shortName: "nm" }, { name: "vmap", shortName: "vm" }, { name: "omap", shortName: "om" }, { name: "noremap", shortName: "no" }, { name: "nnoremap", shortName: "nn" }, { name: "vnoremap", shortName: "vn" }, { name: "inoremap", shortName: "ino" }, { name: "onoremap", shortName: "ono" }, { name: "unmap" }, { name: "mapclear", shortName: "mapc" }, { name: "nmapclear", shortName: "nmapc" }, { name: "vmapclear", shortName: "vmapc" }, { name: "imapclear", shortName: "imapc" }, { name: "omapclear", shortName: "omapc" }, { name: "write", shortName: "w" }, { name: "undo", shortName: "u" }, { name: "redo", shortName: "red" }, { name: "set", shortName: "se" }, { name: "setlocal", shortName: "setl" }, { name: "setglobal", shortName: "setg" }, { name: "sort", shortName: "sor" }, { name: "substitute", shortName: "s", possiblyAsync: true }, { name: "startinsert", shortName: "start" }, { name: "nohlsearch", shortName: "noh" }, { name: "yank", shortName: "y" }, { name: "delmarks", shortName: "delm" }, { name: "marks", excludeFromCommandHistory: true }, { name: "registers", shortName: "reg", excludeFromCommandHistory: true }, { name: "vglobal", shortName: "v" }, { name: "delete", shortName: "d" }, { name: "join", shortName: "j" }, { name: "normal", shortName: "norm" }, { name: "global", shortName: "g" }], l = Sn("");
  function a(c) {
    c.setOption("disableInput", true), c.setOption("showCursorWhenSelecting", false), n.signal(c, "vim-mode-change", { mode: "normal" }), c.on("cursorActivity", tl), ae(c), n.on(c.getInputField(), "paste", h(c));
  }
  function f(c) {
    c.setOption("disableInput", false), c.off("cursorActivity", tl), n.off(c.getInputField(), "paste", h(c)), c.state.vim = null, Ki && clearTimeout(Ki);
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
  }], S = ["<", ">"], M = ["-", '"', ".", ":", "_", "/", "+"], A = /^\w$/, _ = /^[A-Z]$/;
  try {
    _ = new RegExp("^[\\p{Lu}]$", "u");
  } catch {
  }
  function R(c, u) {
    return u >= c.firstLine() && u <= c.lastLine();
  }
  function N(c) {
    return /^[a-z]$/.test(c);
  }
  function B(c) {
    return "()[]{}".indexOf(c) != -1;
  }
  function W(c) {
    return p.test(c);
  }
  function H(c) {
    return _.test(c);
  }
  function K(c) {
    return /^\s*$/.test(c);
  }
  function ee(c) {
    return ".?!".indexOf(c) != -1;
  }
  function oe(c, u) {
    for (var d = 0; d < u.length; d++) if (u[d] == c) return true;
    return false;
  }
  var re = {};
  function q(c, u, d, g, y) {
    if (u === void 0 && !y) throw Error("defaultValue is required unless callback is provided");
    if (d || (d = "string"), re[c] = { type: d, defaultValue: u, callback: y }, g) for (var v = 0; v < g.length; v++) re[g[v]] = re[c];
    u && Z(c, u);
  }
  function Z(c, u, d, g) {
    var y = re[c];
    g = g || {};
    var v = g.scope;
    if (!y) return new Error("Unknown option: " + c);
    if (y.type == "boolean") {
      if (u && u !== true) return new Error("Invalid argument: " + c + "=" + u);
      u !== false && (u = true);
    }
    y.callback ? (v !== "local" && y.callback(u, void 0), v !== "global" && d && y.callback(u, d)) : (v !== "local" && (y.value = y.type == "boolean" ? !!u : u), v !== "global" && d && (d.state.vim.options[c] = { value: u }));
  }
  function J(c, u, d) {
    var g = re[c];
    d = d || {};
    var y = d.scope;
    if (!g) return new Error("Unknown option: " + c);
    if (g.callback) {
      let v = u && g.callback(void 0, u);
      return y !== "global" && v !== void 0 ? v : y !== "local" ? g.callback() : void 0;
    } else return (y !== "global" && u && u.state.vim.options[c] || y !== "local" && g || {}).value;
  }
  q("filetype", void 0, "string", ["ft"], function(c, u) {
    if (u !== void 0) if (c === void 0) {
      let d = u.getOption("mode");
      return d == "null" ? "" : d;
    } else {
      let d = c == "" ? "null" : c;
      u.setOption("mode", d);
    }
  }), q("textwidth", 80, "number", ["tw"], function(c, u) {
    if (u !== void 0) if (c === void 0) {
      var d = u.getOption("textwidth");
      return d;
    } else {
      var g = Math.round(c);
      g > 1 && u.setOption("textwidth", g);
    }
  });
  var se = function() {
    var c = 100, u = -1, d = 0, g = 0, y = new Array(c);
    function v(E, D, L) {
      var F = u % c, V = y[F];
      function $(Y) {
        var X = ++u % c, we = y[X];
        we && we.clear(), y[X] = E.setBookmark(Y);
      }
      if (V) {
        var I = V.find();
        I && !tn(I, D) && $(D);
      } else $(D);
      $(L), d = u, g = u - c + 1, g < 0 && (g = 0);
    }
    function k(E, D) {
      u += D, u > d ? u = d : u < g && (u = g);
      var L = y[(c + u) % c];
      if (L && !L.find()) {
        var F = D > 0 ? 1 : -1, V, $ = E.getCursor();
        do
          if (u += F, L = y[(c + u) % c], L && (V = L.find()) && !tn($, V)) break;
        while (u < d && u > g);
      }
      return L;
    }
    function C(E, D) {
      var L = u, F = k(E, D);
      return u = L, F && F.find();
    }
    return { cachedCursor: void 0, add: v, find: C, move: k };
  }, ie = function(c) {
    return c ? { changes: c.changes, expectCursorActivityForChange: c.expectCursorActivityForChange } : { changes: [], expectCursorActivityForChange: false };
  };
  class ke {
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
          var y = Yn("span", { class: "cm-vim-message" }, "recording @" + d);
          this.onRecordingDone = u.openDialog(y, function() {
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
  function Te() {
    te = { searchQuery: null, searchIsReversed: false, lastSubstituteReplacePart: void 0, jumpList: se(), macroModeState: new ke(), lastCharacterSearch: { increment: 0, forward: true, selectedCharacter: "" }, registerController: new dr({}), searchHistoryController: new Qt(), exCommandHistoryController: new Qt() };
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
  }, resetVimGlobalState_: Te, getVimGlobalState_: function() {
    return te;
  }, maybeInitVimState_: ae, suppressErrorLogging: false, InsertModeKey: Me, map: function(c, u, d) {
    Lt.map(c, u, d);
  }, unmap: function(c, u) {
    return Lt.unmap(c, u);
  }, noremap: function(c, u, d) {
    Lt.map(c, u, d, true);
  }, mapclear: function(c) {
    var u = i.length, d = s, g = i.slice(0, u - d);
    if (i = i.slice(u - d), c) for (var y = g.length - 1; y >= 0; y--) {
      var v = g[y];
      if (c !== v.context) if (v.context) this._mapCommand(v);
      else {
        var k = ["normal", "insert", "visual"];
        for (var C in k) if (k[C] !== c) {
          var E = Object.assign({}, v);
          E.context = k[C], this._mapCommand(E);
        }
      }
    }
  }, langmap: oi, vimKeyFromEvent: fn, setOption: Z, getOption: J, defineOption: q, defineEx: function(c, u, d) {
    if (!u) u = c;
    else if (c.indexOf(u) !== 0) throw new Error('(Vim.defineEx) "' + u + '" is not a prefix of "' + c + '", command not registered');
    Ca[c] = d, Lt.commandMap_[u] = { name: c, shortName: u, type: "api" };
  }, handleKey: function(c, u, d) {
    var g = this.findKey(c, u, d);
    if (typeof g == "function") return g();
  }, multiSelectHandleKey: Ht, findKey: function(c, u, d) {
    var g = ae(c), y = c;
    function v() {
      var L = te.macroModeState;
      if (L.isRecording) {
        if (u == "q") return L.exitMacroRecordMode(), mt(y), true;
        d != "mapping" && Ma(L, u);
      }
    }
    function k() {
      if (u == "<Esc>") {
        if (g.visualMode) nn(y);
        else if (g.insertMode) Ci(y);
        else return;
        return mt(y), true;
      }
    }
    function C() {
      if (k()) return true;
      g.inputState.keyBuffer.push(u);
      var L = g.inputState.keyBuffer.join(""), F = u.length == 1, V = Fn.matchCommand(L, i, g.inputState, "insert"), $ = g.inputState.changeQueue;
      if (V.type == "none") return mt(y), false;
      if (V.type == "partial") {
        if (V.expectLiteralNext && (g.expectLiteralNext = true), Le && window.clearTimeout(Le), Le = F && window.setTimeout(function() {
          g.insertMode && g.inputState.keyBuffer.length && mt(y);
        }, J("insertModeEscKeysTimeout")), F) {
          var I = y.listSelections();
          (!$ || $.removed.length != I.length) && ($ = g.inputState.changeQueue = new _r()), $.inserted += u;
          for (var Y = 0; Y < I.length; Y++) {
            var X = Mt(I[Y].anchor, I[Y].head), we = jn(I[Y].anchor, I[Y].head), ce = y.getRange(X, y.state.overwrite ? it(we, 0, 1) : we);
            $.removed[Y] = ($.removed[Y] || "") + ce;
          }
        }
        return !F;
      } else V.type == "full" && (g.inputState.keyBuffer.length = 0);
      if (g.expectLiteralNext = false, Le && window.clearTimeout(Le), V.command && $) {
        for (var I = y.listSelections(), Y = 0; Y < I.length; Y++) {
          var Ce = I[Y].head;
          y.replaceRange($.removed[Y] || "", it(Ce, 0, -$.inserted.length), Ce, "+input");
        }
        te.macroModeState.lastInsertModeChanges.changes.pop();
      }
      return V.command || mt(y), V.command;
    }
    function E() {
      if (v() || k()) return true;
      g.inputState.keyBuffer.push(u);
      var L = g.inputState.keyBuffer.join("");
      if (/^[1-9]\d*$/.test(L)) return true;
      var F = /^(\d*)(.*)$/.exec(L);
      if (!F) return mt(y), false;
      var V = g.visualMode ? "visual" : "normal", $ = F[2] || F[1];
      g.inputState.operatorShortcut && g.inputState.operatorShortcut.slice(-1) == $ && ($ = g.inputState.operatorShortcut);
      var I = Fn.matchCommand($, i, g.inputState, V);
      return I.type == "none" ? (mt(y), false) : I.type == "partial" ? (I.expectLiteralNext && (g.expectLiteralNext = true), true) : I.type == "clear" ? (mt(y), true) : (g.expectLiteralNext = false, g.inputState.keyBuffer.length = 0, F = /^(\d*)(.*)$/.exec(L), F && F[1] && F[1] != "0" && g.inputState.pushRepeatDigit(F[1]), I.command);
    }
    var D = g.insertMode ? C() : E();
    if (D === false) return !g.insertMode && (u.length === 1 || n.isMac && /<A-.>/.test(u)) ? function() {
      return true;
    } : void 0;
    if (D === true) return function() {
      return true;
    };
    if (D) return function() {
      return y.operation(function() {
        y.curOp.isVimOp = true;
        try {
          if (typeof D != "object") return;
          D.type == "keyToKey" ? Ne(y, D.toKeys, D) : Fn.processCommand(y, g, D);
        } catch (L) {
          throw y.state.vim = void 0, ae(y), ye.suppressErrorLogging || console.log(L), L;
        }
        return true;
      });
    };
  }, handleEx: function(c, u) {
    Lt.processCommand(c, u);
  }, defineMotion: pr, defineAction: Lr, defineOperator: nt, mapCommand: Ir, _mapCommand: us, defineRegister: qs, exitVisualMode: nn, exitInsertMode: Ci }, fe = [], Ke = false, De;
  function Ge(c) {
    if (!De) throw new Error("No prompt to send key to");
    if (c[0] == "<") {
      var u = c.toLowerCase().slice(1, -1), d = u.split("-");
      if (u = d.pop() || "", u == "lt") c = "<";
      else if (u == "space") c = " ";
      else if (u == "cr") c = `
`;
      else if (Xe[u]) {
        var g = De.value || "", y = { key: Xe[u], target: { value: g, selectionEnd: g.length, selectionStart: g.length } };
        De.onKeyDown && De.onKeyDown(y, De.value, k), De && De.onKeyUp && De.onKeyUp(y, De.value, k);
        return;
      }
    }
    if (c == `
`) {
      var v = De;
      De = null, v.onClose && v.onClose(v.value);
    } else De.value = (De.value || "") + c;
    function k(C) {
      De && (typeof C == "string" ? De.value = C : De = null);
    }
  }
  function Ne(c, u, d) {
    var g = Ke;
    if (d) {
      if (fe.indexOf(d) != -1) return;
      fe.push(d), Ke = d.noremap != false;
    }
    try {
      for (var y = ae(c), v = /<(?:[CSMA]-)*\w+>|./gi, k; k = v.exec(u); ) {
        var C = k[0], E = y.insertMode;
        if (De) {
          Ge(C);
          continue;
        }
        var D = ye.handleKey(c, C, "mapping");
        if (!D && E && y.insertMode) {
          if (C[0] == "<") {
            var L = C.toLowerCase().slice(1, -1), F = L.split("-");
            if (L = F.pop() || "", L == "lt") C = "<";
            else if (L == "space") C = " ";
            else if (L == "cr") C = `
`;
            else if (Xe.hasOwnProperty(L)) {
              C = Xe[L], Mi(c, C);
              continue;
            } else C = C[0], v.lastIndex = k.index + 1;
          }
          c.replaceSelection(C);
        }
      }
    } finally {
      if (fe.pop(), Ke = fe.length ? g : false, !fe.length && De) {
        var V = De;
        De = null, Qs(c, V);
      }
    }
  }
  var wn = { Return: "CR", Backspace: "BS", Delete: "Del", Escape: "Esc", Insert: "Ins", ArrowLeft: "Left", ArrowRight: "Right", ArrowUp: "Up", ArrowDown: "Down", Enter: "CR", " ": "Space" }, xn = { Shift: 1, Alt: 1, Command: 1, Control: 1, CapsLock: 1, AltGraph: 1, Dead: 1, Unidentified: 1 }, Xe = {};
  "Left|Right|Up|Down|End|Home".split("|").concat(Object.keys(wn)).forEach(function(c) {
    Xe[(wn[c] || "").toLowerCase()] = Xe[c.toLowerCase()] = c;
  });
  function fn(c, u) {
    var _a2;
    var d = c.key;
    if (!xn[d]) {
      d.length > 1 && d[0] == "n" && (d = d.replace("Numpad", "")), d = wn[d] || d;
      var g = "";
      if (c.ctrlKey && (g += "C-"), c.altKey && (g += "A-"), c.metaKey && (g += "M-"), n.isMac && g == "A-" && d.length == 1 && (g = g.slice(2)), (g || d.length > 1) && c.shiftKey && (g += "S-"), u && !u.expectLiteralNext && d.length == 1) {
        if (l.keymap && d in l.keymap) (l.remapCtrl != false || !g) && (d = l.keymap[d]);
        else if (d.charCodeAt(0) > 128 && !r[d]) {
          var y = ((_a2 = c.code) == null ? void 0 : _a2.slice(-1)) || "";
          c.shiftKey || (y = y.toLowerCase()), y && (d = y, !g && c.altKey && (g = "A-"));
        }
      }
      return g += d, g.length > 1 && (g = "<" + g + ">"), g;
    }
  }
  function oi(c, u) {
    l.string !== c && (l = Sn(c)), l.remapCtrl = u;
  }
  function Sn(c) {
    let u = {};
    if (!c) return { keymap: u, string: "" };
    function d(g) {
      return g.split(/\\?(.)/).filter(Boolean);
    }
    return c.split(/((?:[^\\,]|\\.)+),/).map((g) => {
      if (!g) return;
      const y = g.split(/((?:[^\\;]|\\.)+);/);
      if (y.length == 3) {
        const v = d(y[1]), k = d(y[2]);
        if (v.length !== k.length) return;
        for (let C = 0; C < v.length; ++C) u[v[C]] = k[C];
      } else if (y.length == 1) {
        const v = d(g);
        if (v.length % 2 !== 0) return;
        for (let k = 0; k < v.length; k += 2) u[v[k]] = v[k + 1];
      }
    }), { keymap: u, string: c };
  }
  q("langmap", void 0, "string", ["lmap"], function(c, u) {
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
  function _r() {
    this.removed = [], this.inserted = "";
  }
  class hn {
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
  function qs(c, u) {
    var d = te.registerController.registers;
    if (!c || c.length != 1) throw Error("Register name must be 1 character");
    if (d[c]) throw Error("Register already defined " + c);
    d[c] = u, M.push(c);
  }
  class dr {
    constructor(u) {
      this.registers = u, this.unnamedRegister = u['"'] = new hn(), u["."] = new hn(), u[":"] = new hn(), u["/"] = new hn(), u["+"] = new hn();
    }
    pushText(u, d, g, y, v) {
      if (u !== "_") {
        y && g.charAt(g.length - 1) !== `
` && (g += `
`);
        var k = this.isValidRegister(u) ? this.getRegister(u) : null;
        if (!k || !u) {
          switch (d) {
            case "yank":
              this.registers[0] = new hn(g, y, v);
              break;
            case "delete":
            case "change":
              g.indexOf(`
`) == -1 ? this.registers["-"] = new hn(g, y) : (this.shiftNumericRegisters_(), this.registers[1] = new hn(g, y));
              break;
          }
          this.unnamedRegister.setText(g, y, v);
          return;
        }
        var C = H(u);
        C ? k.pushText(g, y) : k.setText(g, y, v), u === "+" && navigator.clipboard.writeText(g), this.unnamedRegister.setText(k.toString(), y);
      }
    }
    getRegister(u) {
      return this.isValidRegister(u) ? (u = u.toLowerCase(), this.registers[u] || (this.registers[u] = new hn()), this.registers[u]) : this.unnamedRegister;
    }
    isValidRegister(u) {
      return u && (oe(u, M) || A.test(u));
    }
    shiftNumericRegisters_() {
      for (var u = 9; u >= 2; u--) this.registers[u] = this.getRegister("" + (u - 1));
    }
  }
  class Qt {
    constructor() {
      this.historyBuffer = [], this.iterator = 0, this.initialPrefix = null;
    }
    nextMatch(u, d) {
      var g = this.historyBuffer, y = d ? -1 : 1;
      this.initialPrefix === null && (this.initialPrefix = u);
      for (var v = this.iterator + y; d ? v >= 0 : v < g.length; v += y) for (var k = g[v], C = 0; C <= k.length; C++) if (this.initialPrefix == k.substring(0, C)) return this.iterator = v, k;
      if (v >= g.length) return this.iterator = g.length, this.initialPrefix;
      if (v < 0) return u;
    }
    pushInput(u) {
      var d = this.historyBuffer.indexOf(u);
      d > -1 && this.historyBuffer.splice(d, 1), u.length && this.historyBuffer.push(u);
    }
    reset() {
      this.initialPrefix = null, this.iterator = this.historyBuffer.length;
    }
  }
  var Fn = { matchCommand: function(c, u, d, g) {
    var y = Cn(c, u, g, d), v = y.full[0];
    if (!v) return y.partial.length ? { type: "partial", expectLiteralNext: y.partial.length == 1 && y.partial[0].keys.slice(-11) == "<character>" } : { type: "none" };
    if (v.keys.slice(-11) == "<character>" || v.keys.slice(-10) == "<register>") {
      var k = un(c);
      if (!k || k.length > 1) return { type: "clear" };
      d.selectedCharacter = k;
    }
    return { type: "full", command: v };
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
    g.operator = d.operator, g.operatorArgs = kn(d.operatorArgs), d.keys.length > 1 && (g.operatorShortcut = d.keys), d.exitVisualBlock && (u.visualBlock = false, qn(c)), u.visualMode && this.evalInput(c, u);
  }, processOperatorMotion: function(c, u, d) {
    var g = u.visualMode, y = kn(d.operatorMotionArgs);
    y && g && y.visualLine && (u.visualLine = true), this.processOperator(c, u, d), g || this.processMotion(c, u, d);
  }, processAction: function(c, u, d) {
    var g = u.inputState, y = g.getRepeat(), v = !!y, k = kn(d.actionArgs) || { repeat: 1 };
    g.selectedCharacter && (k.selectedCharacter = g.selectedCharacter), d.operator && this.processOperator(c, u, d), d.motion && this.processMotion(c, u, d), (d.motion || d.operator) && this.evalInput(c, u), k.repeat = y || 1, k.repeatIsExplicit = v, k.registerName = g.registerName, mt(c), u.lastMotion = null, d.isEdit && this.recordLastEdit(u, g, d), dt[d.action](c, k, u);
  }, processSearch: function(c, u, d) {
    if (!c.getSearchCursor) return;
    var g = d.searchArgs.forward, y = d.searchArgs.wholeWordOnly;
    En(c).setReversed(!g);
    var v = g ? "/" : "?", k = En(c).getQuery(), C = c.getScrollInfo(), E = "";
    function D(ce, Ce, Oe) {
      te.searchHistoryController.pushInput(ce), te.searchHistoryController.reset();
      try {
        mr(c, ce, Ce, Oe);
      } catch {
        Ve(c, "Invalid regex: " + ce), mt(c);
        return;
      }
      Fn.processMotion(c, u, { keys: "", type: "motion", motion: "findNext", motionArgs: { forward: true, toJumplist: d.searchArgs.toJumplist } });
    }
    function L(ce) {
      c.scrollTo(C.left, C.top), D(ce, true, true);
      var Ce = te.macroModeState;
      Ce.isRecording && Fr(Ce, ce);
    }
    function F() {
      return J("pcre") ? "(JavaScript regexp: set pcre)" : "(Vim regexp: set nopcre)";
    }
    function V(ce, Ce, Oe) {
      var Pe = fn(ce), st, yt;
      Pe == "<Up>" || Pe == "<Down>" ? (st = Pe == "<Up>", yt = ce.target ? ce.target.selectionEnd : 0, Ce = te.searchHistoryController.nextMatch(Ce, st) || "", Oe(Ce), yt && ce.target && (ce.target.selectionEnd = ce.target.selectionStart = Math.min(yt, ce.target.value.length))) : Pe && Pe != "<Left>" && Pe != "<Right>" && te.searchHistoryController.reset(), E = Ce, $();
    }
    function $() {
      var ce;
      try {
        ce = mr(c, E, true, true);
      } catch {
      }
      ce ? c.scrollIntoView(Zs(c, !g, ce), 30) : (Br(c), c.scrollTo(C.left, C.top));
    }
    function I(ce, Ce, Oe) {
      var Pe = fn(ce);
      Pe == "<Esc>" || Pe == "<C-c>" || Pe == "<C-[>" || Pe == "<BS>" && Ce == "" ? (te.searchHistoryController.pushInput(Ce), te.searchHistoryController.reset(), mr(c, (k == null ? void 0 : k.source) || ""), Br(c), c.scrollTo(C.left, C.top), n.e_stop(ce), mt(c), Oe(), c.focus()) : Pe == "<Up>" || Pe == "<Down>" ? n.e_stop(ce) : Pe == "<C-u>" && (n.e_stop(ce), Oe(""));
    }
    switch (d.searchArgs.querySrc) {
      case "prompt":
        var Y = te.macroModeState;
        if (Y.isPlaying) {
          let Ce = Y.replaySearchQueries.shift();
          D(Ce || "", true, false);
        } else Qs(c, { onClose: L, prefix: v, desc: Yn("span", { $cursor: "pointer", onmousedown: function(Ce) {
          Ce.preventDefault(), Z("pcre", !J("pcre")), this.textContent = F(), $();
        } }, F()), onKeyUp: V, onKeyDown: I });
        break;
      case "wordUnderCursor":
        var X = zo(c, { noSymbol: true }), we = true;
        if (X || (X = zo(c, { noSymbol: false }), we = false), !X) {
          Ve(c, "No word under cursor"), mt(c);
          return;
        }
        let ce = c.getLine(X.start.line).substring(X.start.ch, X.end.ch);
        we && y ? ce = "\\b" + ce + "\\b" : ce = Df(ce), te.jumpList.cachedCursor = c.getCursor(), c.setCursor(X.start), D(ce, true, false);
        break;
    }
  }, processEx: function(c, u, d) {
    function g(C) {
      te.exCommandHistoryController.pushInput(C), te.exCommandHistoryController.reset(), Lt.processCommand(c, C), c.state.vim && mt(c), Br(c);
    }
    function y(C, E, D) {
      var L = fn(C), F, V;
      (L == "<Esc>" || L == "<C-c>" || L == "<C-[>" || L == "<BS>" && E == "") && (te.exCommandHistoryController.pushInput(E), te.exCommandHistoryController.reset(), n.e_stop(C), mt(c), Br(c), D(), c.focus()), L == "<Up>" || L == "<Down>" ? (n.e_stop(C), F = L == "<Up>", V = C.target ? C.target.selectionEnd : 0, E = te.exCommandHistoryController.nextMatch(E, F) || "", D(E), V && C.target && (C.target.selectionEnd = C.target.selectionStart = Math.min(V, C.target.value.length))) : L == "<C-u>" ? (n.e_stop(C), D("")) : L && L != "<Left>" && L != "<Right>" && te.exCommandHistoryController.reset();
    }
    function v(C, E) {
      var D = new n.StringStream(E), L = {};
      try {
        if (Lt.parseInput_(c, D, L), L.commandName != "s") {
          Br(c);
          return;
        }
        var F = Lt.matchCommand_(L.commandName);
        if (!F || (Lt.parseCommandArgs_(D, L, F), !L.argString)) return;
        var V = xa(L.argString.slice(1), true, true);
        V && Xo(c, V);
      } catch {
      }
    }
    if (d.type == "keyToEx") Lt.processCommand(c, d.exArgs.input);
    else {
      var k = { onClose: g, onKeyDown: y, onKeyUp: v, prefix: ":" };
      u.visualMode && (k.value = "'<,'>", k.selectValueOnOpen = false), Qs(c, k);
    }
  }, evalInput: function(c, u) {
    var d = u.inputState, g = d.motion, y = d.motionArgs || { repeat: 1 }, v = d.operator, k = d.operatorArgs || {}, C = d.registerName, E = u.sel, D = Ze(u.visualMode ? Ct(c, E.head) : c.getCursor("head")), L = Ze(u.visualMode ? Ct(c, E.anchor) : c.getCursor("anchor")), F = Ze(D), V = Ze(L), $, I, Y;
    if (v && this.recordLastEdit(u, d), d.repeatOverride !== void 0 ? Y = d.repeatOverride : Y = d.getRepeat(), Y > 0 && y.explicitRepeat ? y.repeatIsExplicit = true : (y.noRepeat || !y.explicitRepeat && Y === 0) && (Y = 1, y.repeatIsExplicit = false), d.selectedCharacter && (y.selectedCharacter = k.selectedCharacter = d.selectedCharacter), y.repeat = Y, mt(c), g) {
      var X = Pt[g](c, D, y, u, d);
      if (u.lastMotion = Pt[g], !X) return;
      if (y.toJumplist) {
        var we = te.jumpList, ce = we.cachedCursor;
        ce ? ($i(c, ce, X), delete we.cachedCursor) : $i(c, D, X);
      }
      X instanceof Array ? (I = X[0], $ = X[1]) : $ = X, $ || ($ = Ze(D)), u.visualMode ? (u.visualBlock && $.ch === 1 / 0 || ($ = Ct(c, $, F)), I && (I = Ct(c, I)), I = I || V, E.anchor = I, E.head = $, qn(c), An(c, u, "<", tt(I, $) ? I : $), An(c, u, ">", tt(I, $) ? $ : I)) : v || ($ = Ct(c, $, F), c.setCursor($.line, $.ch));
    }
    if (v) {
      if (k.lastSel) {
        I = V;
        var Ce = k.lastSel, Oe = Math.abs(Ce.head.line - Ce.anchor.line), Pe = Math.abs(Ce.head.ch - Ce.anchor.ch);
        Ce.visualLine ? $ = new e(V.line + Oe, V.ch) : Ce.visualBlock ? $ = new e(V.line + Oe, V.ch + Pe) : Ce.head.line == Ce.anchor.line ? $ = new e(V.line, V.ch + Pe) : $ = new e(V.line + Oe, V.ch), u.visualMode = true, u.visualLine = Ce.visualLine, u.visualBlock = Ce.visualBlock, E = u.sel = { anchor: I, head: $ }, qn(c);
      } else u.visualMode && (k.lastSel = { anchor: Ze(E.anchor), head: Ze(E.head), visualBlock: u.visualBlock, visualLine: u.visualLine });
      var st, yt, Be, Se, je;
      if (u.visualMode) {
        st = Mt(E.head, E.anchor), yt = jn(E.head, E.anchor), Be = u.visualLine || k.linewise, Se = u.visualBlock ? "block" : Be ? "line" : "char";
        var Tn = t(c, st, yt);
        if (je = Wi(c, { anchor: Tn.start, head: Tn.end }, Se), Be) {
          var Dt = je.ranges;
          if (Se == "block") for (var dn = 0; dn < Dt.length; dn++) Dt[dn].head.ch = Bt(c, Dt[dn].head.line);
          else Se == "line" && (Dt[0].head = new e(Dt[0].head.line + 1, 0));
        }
      } else {
        if (st = Ze(I || V), yt = Ze($ || F), tt(yt, st)) {
          var Ai = st;
          st = yt, yt = Ai;
        }
        Be = y.linewise || k.linewise, Be ? ya(c, st, yt) : y.forward && Dr(c, st, yt), Se = "char";
        var Ea = !y.inclusive || Be, Tn = t(c, st, yt);
        je = Wi(c, { anchor: Tn.start, head: Tn.end }, Se, Ea);
      }
      c.setSelections(je.ranges, je.primary), u.lastMotion = null, k.repeat = Y, k.registerName = C, k.linewise = Be;
      var to = de[v](c, k, je.ranges, V, $);
      u.visualMode && nn(c, to != null), to && c.setCursor(to);
    }
  }, recordLastEdit: function(c, u, d) {
    var g = te.macroModeState;
    g.isPlaying || (c.lastEditInputState = u, c.lastEditActionCommand = d, g.lastInsertModeChanges.changes = [], g.lastInsertModeChanges.expectCursorActivityForChange = false, g.lastInsertModeChanges.visualBlock = c.visualBlock ? c.sel.head.line - c.sel.anchor.line : 0);
  } }, Pt = { moveToTopLine: function(c, u, d) {
    var g = ji(c).top + d.repeat - 1;
    return new e(g, Un(c.getLine(g)));
  }, moveToMiddleLine: function(c) {
    var u = ji(c), d = Math.floor((u.top + u.bottom) * 0.5);
    return new e(d, Un(c.getLine(d)));
  }, moveToBottomLine: function(c, u, d) {
    var g = ji(c).bottom - d.repeat + 1;
    return new e(g, Un(c.getLine(g)));
  }, expandToLine: function(c, u, d) {
    var g = u;
    return new e(g.line + d.repeat - 1, 1 / 0);
  }, findNext: function(c, u, d) {
    var g = En(c), y = g.getQuery();
    if (y) {
      var v = !d.forward;
      v = g.isReversed() ? !v : v, Xo(c, y);
      var k = Zs(c, v, y, d.repeat);
      return k || Ve(c, "No match found " + y + (J("pcre") ? " (set nopcre to use Vim regexps)" : "")), k;
    }
  }, findAndSelectNextInclusive: function(c, u, d, g, y) {
    var v = En(c), k = v.getQuery();
    if (k) {
      var C = !d.forward;
      C = v.isReversed() ? !C : C;
      var E = Nf(c, C, k, d.repeat, g);
      if (E) {
        if (y.operator) return E;
        var D = E[0], L = new e(E[1].line, E[1].ch - 1);
        if (g.visualMode) {
          (g.visualLine || g.visualBlock) && (g.visualLine = false, g.visualBlock = false, n.signal(c, "vim-mode-change", { mode: "visual", subMode: "" }));
          var F = g.sel.anchor;
          if (F) return v.isReversed() ? d.forward ? [F, D] : [F, L] : d.forward ? [F, L] : [F, D];
        } else g.visualMode = true, g.visualLine = false, g.visualBlock = false, n.signal(c, "vim-mode-change", { mode: "visual", subMode: "" });
        return C ? [L, D] : [D, L];
      }
    }
  }, goToMark: function(c, u, d, g) {
    var y = yr(c, g, d.selectedCharacter || "");
    return y ? d.linewise ? { line: y.line, ch: Un(c.getLine(y.line)) } : y : null;
  }, moveToOtherHighlightedEnd: function(c, u, d, g) {
    var y = g.sel;
    return g.visualBlock && d.sameLine ? [Ct(c, new e(y.anchor.line, y.head.ch)), Ct(c, new e(y.head.line, y.anchor.ch))] : [y.head, y.anchor];
  }, jumpToMark: function(c, u, d, g) {
    for (var y = u, v = 0; v < d.repeat; v++) {
      var k = y;
      for (var C in g.marks) if (N(C)) {
        var E = g.marks[C].find(), D = d.forward ? tt(E, k) : tt(k, E);
        if (!D && !(d.linewise && E.line == k.line)) {
          var L = tn(k, y), F = d.forward ? Mn(k, E, y) : Mn(y, E, k);
          (L || F) && (y = E);
        }
      }
    }
    return d.linewise && (y = new e(y.line, Un(c.getLine(y.line)))), y;
  }, moveByCharacters: function(c, u, d) {
    var g = u, y = d.repeat, v = d.forward ? g.ch + y : g.ch - y;
    return new e(g.line, v);
  }, moveByLines: function(c, u, d, g) {
    var y = u, v = y.ch;
    switch (g.lastMotion) {
      case this.moveByLines:
      case this.moveByDisplayLines:
      case this.moveByScroll:
      case this.moveToColumn:
      case this.moveToEol:
        v = g.lastHPos;
        break;
      default:
        g.lastHPos = v;
    }
    var k = d.repeat + (d.repeatOffset || 0), C = d.forward ? y.line + k : y.line - k, E = c.firstLine(), D = c.lastLine(), L = c.findPosV(y, d.forward ? k : -k, "line", g.lastHSPos), F = d.forward ? L.line > C : L.line < C;
    return F && (C = L.line, v = L.ch), C < E && y.line == E ? this.moveToStartOfLine(c, u, d, g) : C > D && y.line == D ? _t(c, u, d, g, true) : (d.toFirstChar && (v = Un(c.getLine(C)), g.lastHPos = v), g.lastHSPos = c.charCoords(new e(C, v), "div").left, new e(C, v));
  }, moveByDisplayLines: function(c, u, d, g) {
    var y = u;
    switch (g.lastMotion) {
      case this.moveByDisplayLines:
      case this.moveByScroll:
      case this.moveByLines:
      case this.moveToColumn:
      case this.moveToEol:
        break;
      default:
        g.lastHSPos = c.charCoords(y, "div").left;
    }
    var v = d.repeat, k = c.findPosV(y, d.forward ? v : -v, "line", g.lastHSPos);
    if (k.hitSide) if (d.forward) {
      var C = c.charCoords(k, "div"), E = { top: C.top + 8, left: g.lastHSPos };
      k = c.coordsChar(E, "div");
    } else {
      var D = c.charCoords(new e(c.firstLine(), 0), "div");
      D.left = g.lastHSPos, k = c.coordsChar(D, "div");
    }
    return g.lastHPos = k.ch, k;
  }, moveByPage: function(c, u, d) {
    var g = u, y = d.repeat;
    return c.findPosV(g, d.forward ? y : -y, "page");
  }, moveByParagraph: function(c, u, d) {
    var g = d.forward ? 1 : -1;
    return Gs(c, u, d.repeat, g).start;
  }, moveBySentence: function(c, u, d) {
    var g = d.forward ? 1 : -1;
    return Pr(c, u, d.repeat, g);
  }, moveByScroll: function(c, u, d, g) {
    var y = c.getScrollInfo(), v = null, k = d.repeat;
    k || (k = y.clientHeight / (2 * c.defaultTextHeight()));
    var C = c.charCoords(u, "local");
    if (d.repeat = k, v = Pt.moveByDisplayLines(c, u, d, g), !v) return null;
    var E = c.charCoords(v, "local");
    return c.scrollTo(null, y.top + E.top - C.top), v;
  }, moveByWords: function(c, u, d) {
    return Nt(c, u, d.repeat, !!d.forward, !!d.wordEnd, !!d.bigWord);
  }, moveTillCharacter: function(c, u, d) {
    var g = d.repeat, y = Rr(c, g, d.forward, d.selectedCharacter, u), v = d.forward ? -1 : 1;
    return va(v, d), y ? (y.ch += v, y) : null;
  }, moveToCharacter: function(c, u, d) {
    var g = d.repeat;
    return va(0, d), Rr(c, g, d.forward, d.selectedCharacter, u) || u;
  }, moveToSymbol: function(c, u, d) {
    var g = d.repeat;
    return d.selectedCharacter && zi(c, g, d.forward, d.selectedCharacter) || u;
  }, moveToColumn: function(c, u, d, g) {
    var y = d.repeat;
    return g.lastHPos = y - 1, g.lastHSPos = c.charCoords(u, "div").left, Gn(c, y);
  }, moveToEol: function(c, u, d, g) {
    return _t(c, u, d, g, false);
  }, moveToFirstNonWhiteSpaceCharacter: function(c, u) {
    var d = u;
    return new e(d.line, Un(c.getLine(d.line)));
  }, moveToMatchedSymbol: function(c, u) {
    for (var d = u, g = d.line, y = d.ch, v = c.getLine(g), k; y < v.length; y++) if (k = v.charAt(y), k && B(k)) {
      var C = c.getTokenTypeAt(new e(g, y + 1));
      if (C !== "string" && C !== "comment") break;
    }
    if (y < v.length) {
      var E = k === "<" || k === ">" ? /[(){}[\]<>]/ : /[(){}[\]]/, D = c.findMatchingBracket(new e(g, y), { bracketRegex: E });
      return D.to;
    } else return d;
  }, moveToStartOfLine: function(c, u) {
    return new e(u.line, 0);
  }, moveToLineOrEdgeOfDocument: function(c, u, d) {
    var g = d.forward ? c.lastLine() : c.firstLine();
    return d.repeatIsExplicit && (g = d.repeat - c.getOption("firstLineNumber")), new e(g, Un(c.getLine(g)));
  }, moveToStartOfDisplayLine: function(c) {
    return c.execCommand("goLineLeft"), c.getCursor();
  }, moveToEndOfDisplayLine: function(c) {
    c.execCommand("goLineRight");
    var u = c.getCursor();
    return u.sticky == "before" && u.ch--, u;
  }, textObjectManipulation: function(c, u, d, g) {
    var y = { "(": ")", ")": "(", "{": "}", "}": "{", "[": "]", "]": "[", "<": ">", ">": "<" }, v = { "'": true, '"': true, "`": true }, k = d.selectedCharacter || "";
    k == "b" ? k = "(" : k == "B" && (k = "{");
    var C = !d.textObjectInner, E, D;
    if (y[k]) {
      if (D = true, E = Ys(c, u, k, C), !E) {
        var L = c.getSearchCursor(new RegExp("\\" + k, "g"), u);
        L.find() && (E = Ys(c, L.from(), k, C));
      }
    } else if (v[k]) D = true, E = jo(c, u, k, C);
    else if (k === "W" || k === "w") for (var F = d.repeat || 1; F-- > 0; ) {
      var V = zo(c, { inclusive: C, innerWord: !C, bigWord: k === "W", noSymbol: k === "W", multiline: true }, E && E.end);
      V && (E || (E = V), E.end = V.end);
    }
    else if (k === "p") if (E = Gs(c, u, d.repeat, 0, C), d.linewise = true, g.visualMode) g.visualLine || (g.visualLine = true);
    else {
      var $ = g.inputState.operatorArgs;
      $ && ($.linewise = true), E.end.line--;
    }
    else if (k === "t") E = Bf(c, u, C);
    else if (k === "s") {
      var I = c.getLine(u.line);
      u.ch > 0 && ee(I[u.ch]) && (u.ch -= 1);
      var Y = fs(c, u, d.repeat, 1, C), X = fs(c, u, d.repeat, -1, C);
      K(c.getLine(X.line)[X.ch]) && K(c.getLine(Y.line)[Y.ch - 1]) && (X = { line: X.line, ch: X.ch + 1 }), E = { start: X, end: Y };
    }
    return E ? c.state.vim.visualMode ? li(c, E.start, E.end, D) : [E.start, E.end] : null;
  }, repeatLastCharacterSearch: function(c, u, d) {
    var g = te.lastCharacterSearch, y = d.repeat, v = d.forward === g.forward, k = (g.increment ? 1 : 0) * (v ? -1 : 1);
    c.moveH(-k, "char"), d.inclusive = !!v;
    var C = Rr(c, y, v, g.selectedCharacter);
    return C ? (C.ch += k, C) : (c.moveH(k, "char"), u);
  } };
  function pr(c, u) {
    Pt[c] = u;
  }
  function Re(c, u) {
    for (var d = [], g = 0; g < u; g++) d.push(c);
    return d;
  }
  var de = { change: function(c, u, d) {
    var g, y, v = c.state.vim, k = d[0].anchor, C = d[0].head;
    if (v.visualMode) if (u.fullLine) C.ch = Number.MAX_VALUE, C.line--, c.setSelection(k, C), y = c.getSelection(), c.replaceSelection(""), g = k;
    else {
      y = c.getSelection();
      var L = Re("", d.length);
      c.replaceSelections(L), g = Mt(d[0].head, d[0].anchor);
    }
    else {
      y = c.getRange(k, C);
      var E = v.lastEditInputState;
      if ((E == null ? void 0 : E.motion) == "moveByWords" && !K(y)) {
        var D = /\s+$/.exec(y);
        D && E.motionArgs && E.motionArgs.forward && (C = it(C, 0, -D[0].length), y = y.slice(0, -D[0].length));
      }
      u.linewise && (k = new e(k.line, Un(c.getLine(k.line))), C.line > k.line && (C = new e(C.line - 1, Number.MAX_VALUE))), c.replaceRange("", k, C), g = k;
    }
    te.registerController.pushText(u.registerName, "change", y, u.linewise, d.length > 1), dt.enterInsertMode(c, { head: g }, c.state.vim);
  }, delete: function(c, u, d) {
    var g, y, v = c.state.vim;
    if (v.visualBlock) {
      y = c.getSelection();
      var E = Re("", d.length);
      c.replaceSelections(E), g = Mt(d[0].head, d[0].anchor);
    } else {
      var k = d[0].anchor, C = d[0].head;
      u.linewise && C.line != c.firstLine() && k.line == c.lastLine() && k.line == C.line - 1 && (k.line == c.firstLine() ? k.ch = 0 : k = new e(k.line - 1, Bt(c, k.line - 1))), y = c.getRange(k, C), c.replaceRange("", k, C), g = k, u.linewise && (g = Pt.moveToFirstNonWhiteSpaceCharacter(c, k));
    }
    return te.registerController.pushText(u.registerName, "delete", y, u.linewise, v.visualBlock), Ct(c, g);
  }, indent: function(c, u, d) {
    var g = c.state.vim, y = g.visualMode && u.repeat || 1;
    if (g.visualBlock) {
      for (var v = c.getOption("tabSize"), k = c.getOption("indentWithTabs") ? "	" : " ".repeat(v), C, E = d.length - 1; E >= 0; E--) if (C = Mt(d[E].anchor, d[E].head), u.indentRight) c.replaceRange(k.repeat(y), C, C);
      else {
        for (var D = c.getLine(C.line), L = 0, F = 0; F < y; F++) {
          var V = D[C.ch + L];
          if (V == "	") L++;
          else if (V == " ") {
            L++;
            for (var $ = 1; $ < k.length && (V = D[C.ch + L], V === " "); $++) L++;
          } else break;
        }
        c.replaceRange("", C, it(C, 0, L));
      }
      return C;
    } else if (c.indentMore) for (var F = 0; F < y; F++) u.indentRight ? c.indentMore() : c.indentLess();
    else {
      var I = d[0].anchor.line, Y = g.visualBlock ? d[d.length - 1].anchor.line : d[0].head.line;
      u.linewise && Y--;
      for (var E = I; E <= Y; E++) for (var F = 0; F < y; F++) c.indentLine(E, u.indentRight);
    }
    return Pt.moveToFirstNonWhiteSpaceCharacter(c, d[0].anchor);
  }, indentAuto: function(c, u, d) {
    return c.execCommand("indentAuto"), Pt.moveToFirstNonWhiteSpaceCharacter(c, d[0].anchor);
  }, hardWrap: function(c, u, d, g) {
    if (c.hardWrap) {
      var y = d[0].anchor.line, v = d[0].head.line;
      u.linewise && v--;
      var k = c.hardWrap({ from: y, to: v });
      return k > y && u.linewise && k--, u.keepCursor ? g : new e(k, 0);
    }
  }, changeCase: function(c, u, d, g, y) {
    for (var v = c.getSelections(), k = [], C = u.toLower, E = 0; E < v.length; E++) {
      var D = v[E], L = "";
      if (C === true) L = D.toLowerCase();
      else if (C === false) L = D.toUpperCase();
      else for (var F = 0; F < D.length; F++) {
        var V = D.charAt(F);
        L += H(V) ? V.toLowerCase() : V.toUpperCase();
      }
      k.push(L);
    }
    return c.replaceSelections(k), u.shouldMoveCursor ? y : !c.state.vim.visualMode && u.linewise && d[0].anchor.line + 1 == d[0].head.line ? Pt.moveToFirstNonWhiteSpaceCharacter(c, g) : u.linewise ? g : Mt(d[0].anchor, d[0].head);
  }, yank: function(c, u, d, g) {
    var y = c.state.vim, v = c.getSelection(), k = y.visualMode ? Mt(y.sel.anchor, y.sel.head, d[0].head, d[0].anchor) : g;
    return te.registerController.pushText(u.registerName, "yank", v, u.linewise, y.visualBlock), k;
  }, rot13: function(c, u, d, g, y) {
    for (var v = c.getSelections(), k = [], C = 0; C < v.length; C++) {
      const E = v[C].split("").map((D) => {
        const L = D.charCodeAt(0);
        return L >= 65 && L <= 90 ? String.fromCharCode(65 + (L - 65 + 13) % 26) : L >= 97 && L <= 122 ? String.fromCharCode(97 + (L - 97 + 13) % 26) : D;
      }).join("");
      k.push(E);
    }
    return c.replaceSelections(k), u.shouldMoveCursor ? y : !c.state.vim.visualMode && u.linewise && d[0].anchor.line + 1 == d[0].head.line ? Pt.moveToFirstNonWhiteSpaceCharacter(c, g) : u.linewise ? g : Mt(d[0].anchor, d[0].head);
  } };
  function nt(c, u) {
    de[c] = u;
  }
  var dt = { jumpListWalk: function(c, u, d) {
    if (!d.visualMode) {
      var g = u.repeat || 1, y = u.forward, v = te.jumpList, k = v.move(c, y ? g : -g), C = k ? k.find() : void 0;
      C = C || c.getCursor(), c.setCursor(C);
    }
  }, scroll: function(c, u, d) {
    if (!d.visualMode) {
      var g = u.repeat || 1, y = c.defaultTextHeight(), v = c.getScrollInfo().top, k = y * g, C = u.forward ? v + k : v - k, E = Ze(c.getCursor()), D = c.charCoords(E, "local");
      if (u.forward) C > D.top ? (E.line += (C - D.top) / y, E.line = Math.ceil(E.line), c.setCursor(E), D = c.charCoords(E, "local"), c.scrollTo(null, D.top)) : c.scrollTo(null, C);
      else {
        var L = C + c.getScrollInfo().clientHeight;
        L < D.bottom ? (E.line -= (D.bottom - L) / y, E.line = Math.floor(E.line), c.setCursor(E), D = c.charCoords(E, "local"), c.scrollTo(null, D.bottom - c.getScrollInfo().clientHeight)) : c.scrollTo(null, C);
      }
    }
  }, scrollToCursor: function(c, u) {
    var d = c.getCursor().line, g = c.charCoords(new e(d, 0), "local"), y = c.getScrollInfo().clientHeight, v = g.top;
    switch (u.position) {
      case "center":
        v = g.bottom - y / 2;
        break;
      case "bottom":
        var k = new e(d, c.getLine(d).length - 1), C = c.charCoords(k, "local"), E = C.bottom - v;
        v = v - y + E;
        break;
    }
    c.scrollTo(null, v);
  }, replayMacro: function(c, u, d) {
    var g = u.selectedCharacter || "", y = u.repeat || 1, v = te.macroModeState;
    for (g == "@" ? g = v.latestRegister || "" : v.latestRegister = g; y--; ) Nr(c, d, v, g);
  }, enterMacroRecordMode: function(c, u) {
    var d = te.macroModeState, g = u.selectedCharacter;
    te.registerController.isValidRegister(g) && d.enterMacroRecordMode(c, g);
  }, toggleOverwrite: function(c) {
    c.state.overwrite ? (c.toggleOverwrite(false), c.setOption("keyMap", "vim-insert"), n.signal(c, "vim-mode-change", { mode: "insert" })) : (c.toggleOverwrite(true), c.setOption("keyMap", "vim-replace"), n.signal(c, "vim-mode-change", { mode: "replace" }));
  }, enterInsertMode: function(c, u, d) {
    if (!c.getOption("readOnly")) {
      d.insertMode = true, d.insertModeRepeat = u && u.repeat || 1;
      var g = u ? u.insertAt : null, y = d.sel, v = u.head || c.getCursor("head"), k = c.listSelections().length;
      if (g == "eol") v = new e(v.line, Bt(c, v.line));
      else if (g == "bol") v = new e(v.line, 0);
      else if (g == "charAfter") {
        var C = t(c, v, it(v, 0, 1));
        v = C.end;
      } else if (g == "firstNonBlank") {
        var C = t(c, v, Pt.moveToFirstNonWhiteSpaceCharacter(c, v));
        v = C.end;
      } else if (g == "startOfSelectedArea") {
        if (!d.visualMode) return;
        d.visualBlock ? (v = new e(Math.min(y.head.line, y.anchor.line), Math.min(y.head.ch, y.anchor.ch)), k = Math.abs(y.head.line - y.anchor.line) + 1) : y.head.line < y.anchor.line ? v = y.head : v = new e(y.anchor.line, 0);
      } else if (g == "endOfSelectedArea") {
        if (!d.visualMode) return;
        d.visualBlock ? (v = new e(Math.min(y.head.line, y.anchor.line), Math.max(y.head.ch, y.anchor.ch) + 1), k = Math.abs(y.head.line - y.anchor.line) + 1) : y.head.line >= y.anchor.line ? v = it(y.head, 0, 1) : v = new e(y.anchor.line, 0);
      } else if (g == "inplace") {
        if (d.visualMode) return;
      } else g == "lastEdit" && (v = eo(c) || v);
      c.setOption("disableInput", false), u && u.replace ? (c.toggleOverwrite(true), c.setOption("keyMap", "vim-replace"), n.signal(c, "vim-mode-change", { mode: "replace" })) : (c.toggleOverwrite(false), c.setOption("keyMap", "vim-insert"), n.signal(c, "vim-mode-change", { mode: "insert" })), te.macroModeState.isPlaying || (c.on("change", vr), d.insertEnd && d.insertEnd.clear(), d.insertEnd = c.setBookmark(v, { insertLeft: true }), n.on(c.getInputField(), "keydown", rt)), d.visualMode && nn(c), ma(c, v, k);
    }
  }, toggleVisualMode: function(c, u, d) {
    var g = u.repeat, y = c.getCursor(), v;
    if (d.visualMode) d.visualLine != !!u.linewise || d.visualBlock != !!u.blockwise ? (d.visualLine = !!u.linewise, d.visualBlock = !!u.blockwise, n.signal(c, "vim-mode-change", { mode: "visual", subMode: d.visualLine ? "linewise" : d.visualBlock ? "blockwise" : "" }), qn(c)) : nn(c);
    else {
      d.visualMode = true, d.visualLine = !!u.linewise, d.visualBlock = !!u.blockwise, v = Ct(c, new e(y.line, y.ch + g - 1));
      var k = t(c, y, v);
      d.sel = { anchor: k.start, head: k.end }, n.signal(c, "vim-mode-change", { mode: "visual", subMode: d.visualLine ? "linewise" : d.visualBlock ? "blockwise" : "" }), qn(c), An(c, d, "<", Mt(y, v)), An(c, d, ">", jn(y, v));
    }
  }, reselectLastSelection: function(c, u, d) {
    var g = d.lastSelection;
    if (d.visualMode && Kt(c, d), g) {
      var y = g.anchorMark.find(), v = g.headMark.find();
      if (!y || !v) return;
      d.sel = { anchor: y, head: v }, d.visualMode = true, d.visualLine = g.visualLine, d.visualBlock = g.visualBlock, qn(c), An(c, d, "<", Mt(y, v)), An(c, d, ">", jn(y, v)), n.signal(c, "vim-mode-change", { mode: "visual", subMode: d.visualLine ? "linewise" : d.visualBlock ? "blockwise" : "" });
    }
  }, joinLines: function(c, u, d) {
    var g, y;
    if (d.visualMode) {
      if (g = c.getCursor("anchor"), y = c.getCursor("head"), tt(y, g)) {
        var v = y;
        y = g, g = v;
      }
      y.ch = Bt(c, y.line) - 1;
    } else {
      var k = Math.max(u.repeat, 2);
      g = c.getCursor(), y = Ct(c, new e(g.line + k - 1, 1 / 0));
    }
    for (var C = 0, E = g.line; E < y.line; E++) {
      C = Bt(c, g.line);
      var D = "", L = 0;
      if (!u.keepSpaces) {
        var F = c.getLine(g.line + 1);
        L = F.search(/\S/), L == -1 ? L = F.length : D = " ";
      }
      c.replaceRange(D, new e(g.line, C), new e(g.line + 1, L));
    }
    var V = Ct(c, new e(g.line, C));
    d.visualMode && nn(c, false), c.setCursor(V);
  }, newLineAndEnterInsertMode: function(c, u, d) {
    d.insertMode = true;
    var g = Ze(c.getCursor());
    if (g.line === c.firstLine() && !u.after) c.replaceRange(`
`, new e(c.firstLine(), 0)), c.setCursor(c.firstLine(), 0);
    else {
      g.line = u.after ? g.line : g.line - 1, g.ch = Bt(c, g.line), c.setCursor(g);
      var y = n.commands.newlineAndIndentContinueComment || n.commands.newlineAndIndent;
      y(c);
    }
    this.enterInsertMode(c, { repeat: u.repeat }, d);
  }, paste: function(c, u, d) {
    var g = te.registerController.getRegister(u.registerName);
    if (u.registerName === "+") navigator.clipboard.readText().then((v) => {
      this.continuePaste(c, u, d, v, g);
    });
    else {
      var y = g.toString();
      this.continuePaste(c, u, d, y, g);
    }
  }, continuePaste: function(c, u, d, g, y) {
    var v = Ze(c.getCursor());
    if (g) {
      if (u.matchIndent) {
        var k = c.getOption("tabSize"), C = function(Dt) {
          var dn = Dt.split("	").length - 1, Ai = Dt.split(" ").length - 1;
          return dn * k + Ai * 1;
        }, E = c.getLine(c.getCursor().line), D = C(E.match(/^\s*/)[0]), L = g.replace(/\n$/, ""), F = g !== L, V = C(g.match(/^\s*/)[0]), g = L.replace(/^\s*/gm, function(Dt) {
          var dn = D + (C(Dt) - V);
          if (dn < 0) return "";
          if (c.getOption("indentWithTabs")) {
            var Ai = Math.floor(dn / k);
            return Array(Ai + 1).join("	");
          } else return Array(dn + 1).join(" ");
        });
        g += F ? `
` : "";
      }
      u.repeat > 1 && (g = Array(u.repeat + 1).join(g));
      var $ = y.linewise, I = y.blockwise, Y = I ? g.split(`
`) : void 0;
      if (Y) {
        $ && Y.pop();
        for (var X = 0; X < Y.length; X++) Y[X] = Y[X] == "" ? " " : Y[X];
        v.ch += u.after ? 1 : 0, v.ch = Math.min(Bt(c, v.line), v.ch);
      } else $ ? d.visualMode ? g = d.visualLine ? g.slice(0, -1) : `
` + g.slice(0, g.length - 1) + `
` : u.after ? (g = `
` + g.slice(0, g.length - 1), v.ch = Bt(c, v.line)) : v.ch = 0 : v.ch += u.after ? 1 : 0;
      var we;
      if (d.visualMode) {
        d.lastPastedText = g;
        var ce, Ce = gr(c), Oe = Ce[0], Pe = Ce[1], st = c.getSelection(), yt = c.listSelections(), Be = new Array(yt.length).join("1").split("1");
        d.lastSelection && (ce = d.lastSelection.headMark.find()), te.registerController.unnamedRegister.setText(st), I ? (c.replaceSelections(Be), Pe = new e(Oe.line + g.length - 1, Oe.ch), c.setCursor(Oe), ga(c, Pe), c.replaceSelections(g), we = Oe) : d.visualBlock ? (c.replaceSelections(Be), c.setCursor(Oe), c.replaceRange(g, Oe, Oe), we = Oe) : (c.replaceRange(g, Oe, Pe), we = c.posFromIndex(c.indexFromPos(Oe) + g.length - 1)), ce && (d.lastSelection.headMark = c.setBookmark(ce)), $ && (we.ch = 0);
      } else if (I && Y) {
        c.setCursor(v);
        for (var X = 0; X < Y.length; X++) {
          var Se = v.line + X;
          Se > c.lastLine() && c.replaceRange(`
`, new e(Se, 0));
          var je = Bt(c, Se);
          je < v.ch && Rf(c, Se, v.ch);
        }
        c.setCursor(v), ga(c, new e(v.line + Y.length - 1, v.ch)), c.replaceSelections(Y), we = v;
      } else if (c.replaceRange(g, v), $) {
        var Se = u.after ? v.line + 1 : v.line;
        we = new e(Se, Un(c.getLine(Se)));
      } else we = Ze(v), /\n/.test(g) || (we.ch += g.length - (u.after ? 1 : 0));
      d.visualMode && nn(c, false), c.setCursor(we);
    }
  }, undo: function(c, u) {
    c.operation(function() {
      Vn(c, n.commands.undo, u.repeat)(), c.setCursor(Ct(c, c.getCursor("start")));
    });
  }, redo: function(c, u) {
    Vn(c, n.commands.redo, u.repeat)();
  }, setRegister: function(c, u, d) {
    d.inputState.registerName = u.selectedCharacter;
  }, insertRegister: function(c, u, d) {
    var g = u.selectedCharacter, y = te.registerController.getRegister(g), v = y && y.toString();
    v && c.replaceSelection(v);
  }, oneNormalCommand: function(c, u, d) {
    Ci(c, true), d.insertModeReturn = true, n.on(c, "vim-command-done", function g() {
      d.visualMode || (d.insertModeReturn && (d.insertModeReturn = false, d.insertMode || dt.enterInsertMode(c, {}, d)), n.off(c, "vim-command-done", g));
    });
  }, setMark: function(c, u, d) {
    var g = u.selectedCharacter;
    g && An(c, d, g, c.getCursor());
  }, replace: function(c, u, d) {
    var g = u.selectedCharacter || "", y = c.getCursor(), v, k, C = c.listSelections();
    if (d.visualMode) y = c.getCursor("start"), k = c.getCursor("end");
    else {
      var E = c.getLine(y.line);
      v = y.ch + u.repeat, v > E.length && (v = E.length), k = new e(y.line, v);
    }
    var D = t(c, y, k);
    if (y = D.start, k = D.end, g == `
`) d.visualMode || c.replaceRange("", y, k), (n.commands.newlineAndIndentContinueComment || n.commands.newlineAndIndent)(c);
    else {
      var L = c.getRange(y, k);
      if (L = L.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, g), L = L.replace(/[^\n]/g, g), d.visualBlock) {
        var F = new Array(c.getOption("tabSize") + 1).join(" ");
        L = c.getSelection(), L = L.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, g);
        var V = L.replace(/\t/g, F).replace(/[^\n]/g, g).split(`
`);
        c.replaceSelections(V);
      } else c.replaceRange(L, y, k);
      d.visualMode ? (y = tt(C[0].anchor, C[0].head) ? C[0].anchor : C[0].head, c.setCursor(y), nn(c, false)) : c.setCursor(it(k, 0, -1));
    }
  }, incrementNumberToken: function(c, u) {
    for (var d = c.getCursor(), g = c.getLine(d.line), y = /(-?)(?:(0x)([\da-f]+)|(0b|0|)(\d+))/gi, v, k, C, E; (v = y.exec(g)) !== null && (k = v.index, C = k + v[0].length, !(d.ch < C)); ) ;
    if (!(!u.backtrack && C <= d.ch)) {
      if (v) {
        var D = v[2] || v[4], L = v[3] || v[5], F = u.increase ? 1 : -1, V = { "0b": 2, 0: 8, "": 10, "0x": 16 }[D.toLowerCase()], $ = parseInt(v[1] + L, V) + F * u.repeat;
        E = $.toString(V);
        var I = D ? new Array(L.length - E.length + 1 + v[1].length).join("0") : "";
        E.charAt(0) === "-" ? E = "-" + D + I + E.substr(1) : E = D + I + E;
        var Y = new e(d.line, k), X = new e(d.line, C);
        c.replaceRange(E, Y, X);
      } else return;
      c.setCursor(new e(d.line, k + E.length - 1));
    }
  }, repeatLastEdit: function(c, u, d) {
    var g = d.lastEditInputState;
    if (g) {
      var y = u.repeat;
      y && u.repeatIsExplicit ? g.repeatOverride = y : y = g.repeatOverride || y, at(c, d, y, false);
    }
  }, indent: function(c, u) {
    c.indentLine(c.getCursor().line, u.indentRight);
  }, exitInsertMode: function(c, u) {
    Ci(c);
  } };
  function Lr(c, u) {
    dt[c] = u;
  }
  function Ct(c, u, d) {
    var g = c.state.vim, y = g.insertMode || g.visualMode, v = Math.min(Math.max(c.firstLine(), u.line), c.lastLine()), k = c.getLine(v), C = k.length - 1 + +!!y, E = Math.min(Math.max(0, u.ch), C), D = k.charCodeAt(E);
    if (56320 <= D && D <= 57343) {
      var L = 1;
      d && d.line == v && d.ch > E && (L = -1), E += L, E > C && (E -= 2);
    }
    return new e(v, E);
  }
  function kn(c) {
    var u = {};
    for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (u[d] = c[d]);
    return u;
  }
  function it(c, u, d) {
    return typeof u == "object" && (d = u.ch, u = u.line), new e(c.line + u, c.ch + d);
  }
  function Cn(c, u, d, g) {
    g.operator && (d = "operatorPending");
    for (var y, v = [], k = [], C = Ke ? u.length - s : 0, E = C; E < u.length; E++) {
      var D = u[E];
      d == "insert" && D.context != "insert" || D.context && D.context != d || g.operator && D.type == "action" || !(y = Hn(c, D.keys)) || (y == "partial" && v.push(D), y == "full" && k.push(D));
    }
    return { partial: v, full: k };
  }
  function Hn(c, u) {
    const d = u.slice(-11) == "<character>", g = u.slice(-10) == "<register>";
    if (d || g) {
      var y = u.length - (d ? 11 : 10), v = c.slice(0, y), k = u.slice(0, y);
      return v == k && c.length > y ? "full" : k.indexOf(v) == 0 ? "partial" : false;
    } else return c == u ? "full" : u.indexOf(c) == 0 ? "partial" : false;
  }
  function un(c) {
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
  function Vn(c, u, d) {
    return function() {
      for (var g = 0; g < d; g++) u(c);
    };
  }
  function Ze(c) {
    return new e(c.line, c.ch);
  }
  function tn(c, u) {
    return c.ch == u.ch && c.line == u.line;
  }
  function tt(c, u) {
    return c.line < u.line || c.line == u.line && c.ch < u.ch;
  }
  function Mt(c, u) {
    return arguments.length > 2 && (u = Mt.apply(void 0, Array.prototype.slice.call(arguments, 1))), tt(c, u) ? c : u;
  }
  function jn(c, u) {
    return arguments.length > 2 && (u = jn.apply(void 0, Array.prototype.slice.call(arguments, 1))), tt(c, u) ? u : c;
  }
  function Mn(c, u, d) {
    var g = tt(c, u), y = tt(u, d);
    return g && y;
  }
  function Bt(c, u) {
    return c.getLine(u).length;
  }
  function Us(c) {
    return c.trim ? c.trim() : c.replace(/^\s+|\s+$/g, "");
  }
  function Df(c) {
    return c.replace(/([.?*+$\[\]\/\\(){}|\-])/g, "\\$1");
  }
  function Rf(c, u, d) {
    var g = Bt(c, u), y = new Array(d - g + 1).join(" ");
    c.setCursor(new e(u, g)), c.replaceRange(y, c.getCursor());
  }
  function ga(c, u) {
    var d = [], g = c.listSelections(), y = Ze(c.clipPos(u)), v = !tn(u, y), k = c.getCursor("head"), C = Pf(g, k), E = tn(g[C].head, g[C].anchor), D = g.length - 1, L = D - C > C ? D : 0, F = g[L].anchor, V = Math.min(F.line, y.line), $ = Math.max(F.line, y.line), I = F.ch, Y = y.ch, X = g[L].head.ch - I, we = Y - I;
    X > 0 && we <= 0 ? (I++, v || Y--) : X < 0 && we >= 0 ? (I--, E || Y++) : X < 0 && we == -1 && (I--, Y++);
    for (var ce = V; ce <= $; ce++) {
      var Ce = { anchor: new e(ce, I), head: new e(ce, Y) };
      d.push(Ce);
    }
    return c.setSelections(d), u.ch = Y, F.ch = I, F;
  }
  function ma(c, u, d) {
    for (var g = [], y = 0; y < d; y++) {
      var v = it(u, y, 0);
      g.push({ anchor: v, head: v });
    }
    c.setSelections(g, 0);
  }
  function Pf(c, u, d) {
    for (var g = 0; g < c.length; g++) {
      var y = tn(c[g].anchor, u), v = tn(c[g].head, u);
      if (y || v) return g;
    }
    return -1;
  }
  function gr(c, u) {
    var d = c.listSelections(), g = d[0], y = d[d.length - 1], v = tt(g.anchor, g.head) ? g.anchor : g.head, k = tt(y.anchor, y.head) ? y.head : y.anchor;
    return [v, k];
  }
  function Kt(c, u) {
    var d = u.sel.anchor, g = u.sel.head;
    u.lastPastedText && (g = c.posFromIndex(c.indexFromPos(d) + u.lastPastedText.length), u.lastPastedText = void 0), u.lastSelection = { anchorMark: c.setBookmark(d), headMark: c.setBookmark(g), anchor: Ze(d), head: Ze(g), visualMode: u.visualMode, visualLine: u.visualLine, visualBlock: u.visualBlock };
  }
  function li(c, u, d, g) {
    var y = c.state.vim.sel, v = g ? u : y.head, k = g ? u : y.anchor, C;
    return tt(d, u) && (C = d, d = u, u = C), tt(v, k) ? (v = Mt(u, v), k = jn(k, d)) : (k = Mt(u, k), v = jn(v, d), v = it(v, 0, -1), v.ch == -1 && v.line != c.firstLine() && (v = new e(v.line - 1, Bt(c, v.line - 1)))), [k, v];
  }
  function qn(c, u, d) {
    var g = c.state.vim;
    u = u || g.sel, d || (d = g.visualLine ? "line" : g.visualBlock ? "block" : "char");
    var y = Wi(c, u, d);
    c.setSelections(y.ranges, y.primary);
  }
  function Wi(c, u, d, g) {
    var y = Ze(u.head), v = Ze(u.anchor);
    if (d == "char") {
      var k = !g && !tt(u.head, u.anchor) ? 1 : 0, C = tt(u.head, u.anchor) ? 1 : 0;
      return y = it(u.head, 0, k), v = it(u.anchor, 0, C), { ranges: [{ anchor: v, head: y }], primary: 0 };
    } else if (d == "line") {
      if (tt(u.head, u.anchor)) y.ch = 0, v.ch = Bt(c, v.line);
      else {
        v.ch = 0;
        var E = c.lastLine();
        y.line > E && (y.line = E), y.ch = Bt(c, y.line);
      }
      return { ranges: [{ anchor: v, head: y }], primary: 0 };
    } else if (d == "block") {
      var D = Math.min(v.line, y.line), L = v.ch, F = Math.max(v.line, y.line), V = y.ch;
      L < V ? V += 1 : L += 1;
      for (var $ = F - D + 1, I = y.line == D ? 0 : $ - 1, Y = [], X = 0; X < $; X++) Y.push({ anchor: new e(D + X, L), head: new e(D + X, V) });
      return { ranges: Y, primary: I };
    }
    throw "never happens";
  }
  function Wn(c) {
    var u = c.getCursor("head");
    return c.getSelection().length == 1 && (u = Mt(u, c.getCursor("anchor"))), u;
  }
  function nn(c, u) {
    var d = c.state.vim;
    u !== false && c.setCursor(Ct(c, d.sel.head)), Kt(c, d), d.visualMode = false, d.visualLine = false, d.visualBlock = false, d.insertMode || n.signal(c, "vim-mode-change", { mode: "normal" });
  }
  function Dr(c, u, d) {
    var g = c.getRange(u, d);
    if (/\n\s*$/.test(g)) {
      var y = g.split(`
`);
      y.pop();
      for (var v = y.pop(); y.length > 0 && v && K(v); v = y.pop()) d.line--, d.ch = 0;
      v ? (d.line--, d.ch = Bt(c, d.line)) : d.ch = 0;
    }
  }
  function ya(c, u, d) {
    u.ch = 0, d.ch = 0, d.line++;
  }
  function Un(c) {
    if (!c) return 0;
    var u = c.search(/\S/);
    return u == -1 ? c.length : u;
  }
  function zo(c, { inclusive: u, innerWord: d, bigWord: g, noSymbol: y, multiline: v }, k) {
    var C = k || Wn(c), E = c.getLine(C.line), D = E, L = C.line, F = L, V = C.ch, $, I = y ? m[0] : b[0];
    if (d && /\s/.test(E.charAt(V))) I = function(Oe) {
      return /\s/.test(Oe);
    };
    else {
      for (; !I(E.charAt(V)); ) if (V++, V >= E.length) {
        if (!v) return null;
        V--, $ = It(c, C, true, g, true);
        break;
      }
      g ? I = b[0] : (I = m[0], I(E.charAt(V)) || (I = m[1]));
    }
    for (var Y = V, X = V; I(E.charAt(X)) && X >= 0; ) X--;
    if (X++, $) Y = $.to, F = $.line, D = c.getLine(F), !D && Y == 0 && Y++;
    else for (; I(E.charAt(Y)) && Y < E.length; ) Y++;
    if (u) {
      var we = Y, ce = C.ch <= X && /\s/.test(E.charAt(C.ch));
      if (!ce) for (; /\s/.test(D.charAt(Y)) && Y < D.length; ) Y++;
      if (we == Y || ce) {
        for (var Ce = X; /\s/.test(E.charAt(X - 1)) && X > 0; ) X--;
        !X && !ce && (X = Ce);
      }
    }
    return { start: new e(L, X), end: new e(F, Y) };
  }
  function Bf(c, u, d) {
    var g = u;
    if (!n.findMatchingTag || !n.findEnclosingTag) return { start: g, end: g };
    var y = n.findMatchingTag(c, u) || n.findEnclosingTag(c, u);
    return !y || !y.open || !y.close ? { start: g, end: g } : d ? { start: y.open.from, end: y.close.to } : { start: y.open.to, end: y.close.from };
  }
  function $i(c, u, d) {
    tn(u, d) || te.jumpList.add(c, u, d);
  }
  function va(c, u) {
    te.lastCharacterSearch.increment = c, te.lastCharacterSearch.forward = u.forward, te.lastCharacterSearch.selectedCharacter = u.selectedCharacter;
  }
  var cs = { "(": "bracket", ")": "bracket", "{": "bracket", "}": "bracket", "[": "section", "]": "section", "*": "comment", "/": "comment", m: "method", M: "method", "#": "preprocess" }, Ko = { bracket: { isComplete: function(c) {
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
    var _a2;
    if (c.nextCh === "#") {
      var u = (_a2 = c.lineText.match(/^#(\w+)/)) == null ? void 0 : _a2[1];
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
    var y = Ze(c.getCursor()), v = d ? 1 : -1, k = d ? c.lineCount() : -1, C = y.ch, E = y.line, D = c.getLine(E), L = { lineText: D, nextCh: D.charAt(C), lastCh: null, index: C, symb: g, reverseSymb: (d ? { ")": "(", "}": "{" } : { "(": ")", "{": "}" })[g], forward: d, depth: 0, curMoveThrough: false }, F = cs[g];
    if (!F) return y;
    var V = Ko[F].init, $ = Ko[F].isComplete;
    for (V && V(L); E !== k && u; ) {
      if (L.index += v, L.nextCh = L.lineText.charAt(L.index), !L.nextCh) {
        if (E += v, L.lineText = c.getLine(E) || "", v > 0) L.index = 0;
        else {
          var I = L.lineText.length;
          L.index = I > 0 ? I - 1 : 0;
        }
        L.nextCh = L.lineText.charAt(L.index);
      }
      $(L) && (y.line = E, y.ch = L.index, u--);
    }
    return L.nextCh || L.curMoveThrough ? new e(E, L.index) : y;
  }
  function It(c, u, d, g, y) {
    var v = u.line, k = u.ch, C = c.getLine(v), E = d ? 1 : -1, D = g ? b : m;
    if (y && C == "") {
      if (v += E, C = c.getLine(v), !R(c, v)) return null;
      k = d ? 0 : C.length;
    }
    for (; ; ) {
      if (y && C == "") return { from: 0, to: 0, line: v };
      for (var L = E > 0 ? C.length : -1, F = L, V = L; k != L; ) {
        for (var $ = false, I = 0; I < D.length && !$; ++I) if (D[I](C.charAt(k))) {
          for (F = k; k != L && D[I](C.charAt(k)); ) k += E;
          if (V = k, $ = F != V, F == u.ch && v == u.line && V == F + E) continue;
          return { from: Math.min(F, V + 1), to: Math.max(F, V), line: v };
        }
        $ || (k += E);
      }
      if (v += E, !R(c, v)) return null;
      C = c.getLine(v), k = E > 0 ? 0 : C.length;
    }
  }
  function Nt(c, u, d, g, y, v) {
    var k = Ze(u), C = [];
    (g && !y || !g && y) && d++;
    for (var E = !(g && y), D = 0; D < d; D++) {
      var L = It(c, u, g, v, E);
      if (!L) {
        var F = Bt(c, c.lastLine());
        C.push(g ? { line: c.lastLine(), from: F, to: F } : { line: 0, from: 0, to: 0 });
        break;
      }
      C.push(L), u = new e(L.line, g ? L.to - 1 : L.from);
    }
    var V = C.length != d, $ = C[0], I = C.pop();
    return g && !y ? (!V && ($.from != k.ch || $.line != k.line) && (I = C.pop()), I && new e(I.line, I.from)) : g && y ? I && new e(I.line, I.to - 1) : !g && y ? (!V && ($.to != k.ch || $.line != k.line) && (I = C.pop()), I && new e(I.line, I.to)) : I && new e(I.line, I.from);
  }
  function _t(c, u, d, g, y) {
    var v = u, k = new e(v.line + d.repeat - 1, 1 / 0), C = c.clipPos(k);
    return C.ch--, y || (g.lastHPos = 1 / 0, g.lastHSPos = c.charCoords(C, "div").left), k;
  }
  function Rr(c, u, d, g, y) {
    if (g) {
      for (var v = y || c.getCursor(), k = v.ch, C, E = 0; E < u; E++) {
        var D = c.getLine(v.line);
        if (C = ba(k, D, g, d), C == -1) return;
        k = C;
      }
      if (C != null) return new e(c.getCursor().line, C);
    }
  }
  function Gn(c, u) {
    var d = c.getCursor().line;
    return Ct(c, new e(d, u - 1));
  }
  function An(c, u, d, g) {
    !oe(d, S) && !A.test(d) || (u.marks[d] && u.marks[d].clear(), u.marks[d] = c.setBookmark(g));
  }
  function ba(c, u, d, g, y) {
    var v;
    return g ? v = u.indexOf(d, c + 1) : v = u.lastIndexOf(d, c - 1), v;
  }
  function Gs(c, u, d, g, y) {
    var v = u.line, k = c.firstLine(), C = c.lastLine(), E, D, L = v;
    function F(X) {
      return !c.getLine(X);
    }
    function V(X, we, ce) {
      return ce ? F(X) != F(X + we) : !F(X) && F(X + we);
    }
    if (g) {
      for (; k <= L && L <= C && d > 0; ) V(L, g) && d--, L += g;
      return { start: new e(L, 0), end: u };
    }
    var $ = c.state.vim;
    if ($.visualLine && V(v, 1, true)) {
      var I = $.sel.anchor;
      V(I.line, -1, true) && (!y || I.line != v) && (v += 1);
    }
    var Y = F(v);
    for (L = v; L <= C && d; L++) V(L, 1, true) && (!y || F(L) != Y) && d--;
    for (D = new e(L, 0), L > C && !Y ? Y = true : y = false, L = v; L > k && !((!y || F(L) == Y || L == v) && V(L, -1, true)); L--) ;
    return E = new e(L, 0), { start: E, end: D };
  }
  function fs(c, u, d, g, y) {
    function v(D) {
      D.line !== null && (D.pos + D.dir < 0 || D.pos + D.dir >= D.line.length ? D.line = null : D.pos += D.dir);
    }
    function k(D, L, F, V) {
      var $ = D.getLine(L), I = { line: $, ln: L, pos: F, dir: V };
      if (I.line === "") return { ln: I.ln, pos: I.pos };
      var Y = I.pos;
      for (v(I); I.line !== null; ) {
        if (Y = I.pos, ee(I.line[I.pos])) if (y) {
          for (v(I); I.line !== null && K(I.line[I.pos]); ) Y = I.pos, v(I);
          return { ln: I.ln, pos: Y + 1 };
        } else return { ln: I.ln, pos: I.pos + 1 };
        v(I);
      }
      return { ln: I.ln, pos: Y + 1 };
    }
    function C(D, L, F, V) {
      var $ = D.getLine(L), I = { line: $, ln: L, pos: F, dir: V };
      if (I.line === "") return { ln: I.ln, pos: I.pos };
      var Y = I.pos;
      for (v(I); I.line !== null; ) {
        if (!K(I.line[I.pos]) && !ee(I.line[I.pos])) Y = I.pos;
        else if (ee(I.line[I.pos])) return y ? K(I.line[I.pos + 1]) ? { ln: I.ln, pos: I.pos + 1 } : { ln: I.ln, pos: Y } : { ln: I.ln, pos: Y };
        v(I);
      }
      return I.line = $, y && K(I.line[I.pos]) ? { ln: I.ln, pos: I.pos } : { ln: I.ln, pos: Y };
    }
    for (var E = { ln: u.line, pos: u.ch }; d > 0; ) g < 0 ? E = C(c, E.ln, E.pos, g) : E = k(c, E.ln, E.pos, g), d--;
    return new e(E.ln, E.pos);
  }
  function Pr(c, u, d, g) {
    function y(E, D) {
      if (D.line !== null) if (D.pos + D.dir < 0 || D.pos + D.dir >= D.line.length) {
        if (D.ln += D.dir, !R(E, D.ln)) {
          D.line = null;
          return;
        }
        D.line = E.getLine(D.ln), D.pos = D.dir > 0 ? 0 : D.line.length - 1;
      } else D.pos += D.dir;
    }
    function v(E, D, L, F) {
      var X = E.getLine(D), V = X === "", $ = { line: X, ln: D, pos: L, dir: F }, I = { ln: $.ln, pos: $.pos }, Y = $.line === "";
      for (y(E, $); $.line !== null; ) {
        if (I.ln = $.ln, I.pos = $.pos, $.line === "" && !Y) return { ln: $.ln, pos: $.pos };
        if (V && $.line !== "" && !K($.line[$.pos])) return { ln: $.ln, pos: $.pos };
        ee($.line[$.pos]) && !V && ($.pos === $.line.length - 1 || K($.line[$.pos + 1])) && (V = true), y(E, $);
      }
      var X = E.getLine(I.ln);
      I.pos = 0;
      for (var we = X.length - 1; we >= 0; --we) if (!K(X[we])) {
        I.pos = we;
        break;
      }
      return I;
    }
    function k(E, D, L, F) {
      var X = E.getLine(D), V = { line: X, ln: D, pos: L, dir: F }, $ = V.ln, I = null, Y = V.line === "";
      for (y(E, V); V.line !== null; ) {
        if (V.line === "" && !Y) return I !== null ? { ln: $, pos: I } : { ln: V.ln, pos: V.pos };
        if (ee(V.line[V.pos]) && I !== null && !(V.ln === $ && V.pos + 1 === I)) return { ln: $, pos: I };
        V.line !== "" && !K(V.line[V.pos]) && (Y = false, $ = V.ln, I = V.pos), y(E, V);
      }
      var X = E.getLine($);
      I = 0;
      for (var we = 0; we < X.length; ++we) if (!K(X[we])) {
        I = we;
        break;
      }
      return { ln: $, pos: I };
    }
    for (var C = { ln: u.line, pos: u.ch }; d > 0; ) g < 0 ? C = k(c, C.ln, C.pos, g) : C = v(c, C.ln, C.pos, g), d--;
    return new e(C.ln, C.pos);
  }
  function Ys(c, u, d, g) {
    var y = u, v = { "(": /[()]/, ")": /[()]/, "[": /[[\]]/, "]": /[[\]]/, "{": /[{}]/, "}": /[{}]/, "<": /[<>]/, ">": /[<>]/ }[d], k = { "(": "(", ")": "(", "[": "[", "]": "[", "{": "{", "}": "{", "<": "<", ">": "<" }[d], C = c.getLine(y.line).charAt(y.ch), E = C === k ? 1 : 0, D = c.scanForBracket(new e(y.line, y.ch + E), -1, void 0, { bracketRegex: v }), L = c.scanForBracket(new e(y.line, y.ch + E), 1, void 0, { bracketRegex: v });
    if (!D || !L) return null;
    var F = D.pos, V = L.pos;
    if (F.line == V.line && F.ch > V.ch || F.line > V.line) {
      var $ = F;
      F = V, V = $;
    }
    return g ? V.ch += 1 : F.ch += 1, { start: F, end: V };
  }
  function jo(c, u, d, g) {
    var y = Ze(u), v = c.getLine(y.line), k = v.split(""), C, E, D, L, F = k.indexOf(d);
    if (y.ch < F) y.ch = F;
    else if (F < y.ch && k[y.ch] == d) {
      var V = /string/.test(c.getTokenTypeAt(it(u, 0, 1))), $ = /string/.test(c.getTokenTypeAt(u)), I = V && !$;
      I || (E = y.ch, --y.ch);
    }
    if (k[y.ch] == d && !E) C = y.ch + 1;
    else for (D = y.ch; D > -1 && !C; D--) k[D] == d && (C = D + 1);
    if (C && !E) for (D = C, L = k.length; D < L && !E; D++) k[D] == d && (E = D);
    return !C || !E ? { start: y, end: y } : (g && (--C, ++E), { start: new e(y.line, C), end: new e(y.line, E) });
  }
  q("pcre", true, "boolean");
  class qo {
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
  function En(c) {
    var u = c.state.vim;
    return u.searchState_ || (u.searchState_ = new qo());
  }
  function Uo(c) {
    return Js(c, "/");
  }
  function Go(c) {
    return rn(c, "/");
  }
  function Js(c, u) {
    var d = rn(c, u) || [];
    if (!d.length) return [];
    var g = [];
    if (d[0] === 0) {
      for (var y = 0; y < d.length; y++) typeof d[y] == "number" && g.push(c.substring(d[y] + 1, d[y + 1]));
      return g;
    }
  }
  function rn(c, u) {
    u || (u = "/");
    for (var d = false, g = [], y = 0; y < c.length; y++) {
      var v = c.charAt(y);
      !d && v == u && g.push(y), d = !d && v == "\\";
    }
    return g;
  }
  function wa(c) {
    var u = { V: "|(){+?*.[$^", M: "|(){+?*.[", m: "|(){+?", v: "<>" }, d = { ">": "(?<=[\\w])(?=[^\\w]|$)", "<": "(?<=[^\\w]|^)(?=[\\w])" }, g = u.m, y = c.replace(/\\.|[\[|(){+*?.$^<>]/g, function(k) {
      if (k[0] === "\\") {
        var C = k[1];
        return C === "}" || g.indexOf(C) != -1 ? C : C in u ? (g = u[C], "") : C in d ? d[C] : k;
      } else return g.indexOf(k) != -1 ? d[k] || "\\" + k : k;
    }), v = y.indexOf("\\zs");
    return v != -1 && (y = "(?<=" + y.slice(0, v) + ")" + y.slice(v + 3)), v = y.indexOf("\\ze"), v != -1 && (y = y.slice(0, v) + "(?=" + y.slice(v + 3) + ")"), y;
  }
  var Yo = { "\\n": `
`, "\\r": "\r", "\\t": "	" };
  function Jo(c) {
    for (var u = false, d = [], g = -1; g < c.length; g++) {
      var y = c.charAt(g) || "", v = c.charAt(g + 1) || "";
      Yo[y + v] ? (d.push(Yo[y + v]), g++) : u ? (d.push(y), u = false) : y === "\\" ? (u = true, W(v) || v === "$" ? d.push("$") : v !== "/" && v !== "\\" && d.push("\\")) : (y === "$" && d.push("$"), d.push(y), v === "/" && d.push("\\"));
    }
    return d.join("");
  }
  var Qo = { "\\/": "/", "\\\\": "\\", "\\n": `
`, "\\r": "\r", "\\t": "	", "\\&": "&" };
  function If(c) {
    for (var u = new n.StringStream(c), d = []; !u.eol(); ) {
      for (; u.peek() && u.peek() != "\\"; ) d.push(u.next());
      var g = false;
      for (var y in Qo) if (u.match(y, true)) {
        g = true, d.push(Qo[y]);
        break;
      }
      g || d.push(u.next());
    }
    return d.join("");
  }
  function xa(c, u, d) {
    var g = te.registerController.getRegister("/");
    g.setText(c);
    var y = Go(c), v, k;
    if (!y.length) v = c;
    else {
      v = c.substring(0, y[0]);
      var C = c.substring(y[0]);
      k = C.indexOf("i") != -1;
    }
    if (!v) return null;
    J("pcre") || (v = wa(v)), d && (u = /^[^A-Z]*$/.test(v));
    var E = new RegExp(v, u || k ? "im" : "m");
    return E;
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
  function Sa(c, u) {
    return Yn("div", { $display: "flex", $flex: 1 }, Yn("span", { $fontFamily: "monospace", $whiteSpace: "pre", $flex: 1, $display: "flex" }, c, Yn("input", { type: "text", autocorrect: "off", autocapitalize: "off", spellcheck: "false", $flex: 1 })), u && Yn("span", { $color: "#888" }, u));
  }
  function Qs(c, u) {
    var _a2;
    if (fe.length) {
      u.value || (u.value = ""), De = u;
      return;
    }
    var d = Sa(u.prefix, u.desc);
    if (c.openDialog) c.openDialog(d, u.onClose, { onKeyDown: u.onKeyDown, onKeyUp: u.onKeyUp, bottom: true, selectValueOnOpen: false, value: u.value });
    else {
      var g = "";
      typeof u.prefix != "string" && u.prefix && (g += u.prefix.textContent), u.desc && (g += " " + u.desc), (_a2 = u.onClose) == null ? void 0 : _a2.call(u, prompt(g, ""));
    }
  }
  function ka(c, u) {
    return c instanceof RegExp && u instanceof RegExp ? c.flags == u.flags && c.source == u.source : false;
  }
  function mr(c, u, d, g) {
    if (u) {
      var y = En(c), v = xa(u, !!d, !!g);
      if (v) return Xo(c, v), ka(v, y.getQuery()) || y.setQuery(v), v;
    }
  }
  function Xs(c) {
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
  function Xo(c, u) {
    clearTimeout(Ki);
    var d = En(c);
    d.highlightTimeout = Ki, Ki = setTimeout(function() {
      if (c.state.vim) {
        var g = En(c);
        g.highlightTimeout = void 0;
        var y = g.getOverlay();
        (!y || u != y.query) && (y && c.removeOverlay(y), y = Xs(u), c.addOverlay(y), c.showMatchesOnScrollbar && (g.getScrollbarAnnotate() && g.getScrollbarAnnotate().clear(), g.setScrollbarAnnotate(c.showMatchesOnScrollbar(u))), g.setOverlay(y));
      }
    }, 50);
  }
  function Zs(c, u, d, g) {
    return c.operation(function() {
      g === void 0 && (g = 1);
      for (var y = c.getCursor(), v = c.getSearchCursor(d, y), k = 0; k < g; k++) {
        var C = v.find(u);
        if (k == 0 && C && tn(v.from(), y)) {
          var E = u ? v.from() : v.to();
          C = v.find(u), C && !C[0] && tn(v.from(), E) && c.getLine(E.line).length == E.ch && (C = v.find(u));
        }
        if (!C && (v = c.getSearchCursor(d, u ? new e(c.lastLine()) : new e(c.firstLine(), 0)), !v.find(u))) return;
      }
      return v.from();
    });
  }
  function Nf(c, u, d, g, y) {
    return c.operation(function() {
      g === void 0 && (g = 1);
      var v = c.getCursor(), k = c.getSearchCursor(d, v), C = k.find(!u);
      !y.visualMode && C && tn(k.from(), v) && k.find(!u);
      for (var E = 0; E < g; E++) if (C = k.find(u), !C && (k = c.getSearchCursor(d, u ? new e(c.lastLine()) : new e(c.firstLine(), 0)), !k.find(u))) return;
      var D = k.from(), L = k.to();
      return D && L && [D, L];
    });
  }
  function Br(c) {
    var u = En(c);
    u.highlightTimeout && (clearTimeout(u.highlightTimeout), u.highlightTimeout = void 0), c.removeOverlay(En(c).getOverlay()), u.setOverlay(null), u.getScrollbarAnnotate() && (u.getScrollbarAnnotate().clear(), u.setScrollbarAnnotate(null));
  }
  function Ff(c, u, d) {
    return typeof c != "number" && (c = c.line), u instanceof Array ? oe(c, u) : typeof d == "number" ? c >= u && c <= d : c == u;
  }
  function ji(c) {
    var u = c.getScrollInfo(), d = 6, g = 10, y = c.coordsChar({ left: 0, top: d + u.top }, "local"), v = u.clientHeight - g + u.top, k = c.coordsChar({ left: 0, top: v }, "local");
    return { top: y.line, bottom: k.line };
  }
  function yr(c, u, d) {
    if (d == "'" || d == "`") return te.jumpList.find(c, -1) || new e(0, 0);
    if (d == ".") return eo(c);
    var g = u.marks[d];
    return g && g.find();
  }
  function eo(c) {
    if (c.getLastEditEnd) return c.getLastEditEnd();
    for (var u = c.doc.history.done, d = u.length; d--; ) if (u[d].changes) return Ze(u[d].changes[0].to);
  }
  class hs {
    constructor() {
      this.commandMap_, this.buildCommandMap_();
    }
    processCommand(u, d, g) {
      var y = this;
      u.operation(function() {
        u.curOp && (u.curOp.isVimOp = true), y._processCommand(u, d, g);
      });
    }
    _processCommand(u, d, g) {
      var y = u.state.vim, v = te.registerController.getRegister(":"), k = v.toString(), C = new n.StringStream(d);
      v.setText(d);
      var E = g || {};
      E.input = d;
      try {
        this.parseInput_(u, C, E);
      } catch (F) {
        throw Ve(u, F + ""), F;
      }
      y.visualMode && nn(u);
      var D, L;
      if (!E.commandName) E.line !== void 0 && (L = "move");
      else if (D = this.matchCommand_(E.commandName), D) {
        if (L = D.name, D.excludeFromCommandHistory && v.setText(k), this.parseCommandArgs_(C, E, D), D.type == "exToKey") {
          Ne(u, D.toKeys || "", D);
          return;
        } else if (D.type == "exToEx") {
          this.processCommand(u, D.toInput || "");
          return;
        }
      }
      if (!L) {
        Ve(u, 'Not an editor command ":' + d + '"');
        return;
      }
      try {
        Ca[L](u, E), (!D || !D.possiblyAsync) && E.callback && E.callback();
      } catch (F) {
        throw Ve(u, F + ""), F;
      }
    }
    parseInput_(u, d, g) {
      var _a2, _b2;
      d.eatWhile(":"), d.eat("%") ? (g.line = u.firstLine(), g.lineEnd = u.lastLine()) : (g.line = this.parseLineSpec_(u, d), g.line !== void 0 && d.eat(",") && (g.lineEnd = this.parseLineSpec_(u, d))), g.line == null ? u.state.vim.visualMode ? (g.selectionLine = (_a2 = yr(u, u.state.vim, "<")) == null ? void 0 : _a2.line, g.selectionLineEnd = (_b2 = yr(u, u.state.vim, ">")) == null ? void 0 : _b2.line) : g.selectionLine = u.getCursor().line : (g.selectionLine = g.line, g.selectionLineEnd = g.lineEnd);
      var y = d.match(/^(\w+|!!|@@|[!#&*<=>@~])/);
      return y ? g.commandName = y[1] : g.commandName = (d.match(/.*/) || [""])[0], g;
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
          var y = d.next() || "", v = yr(u, u.state.vim, y);
          if (!v) throw new Error("Mark not set");
          return this.parseLineSpecOffset_(d, v.line);
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
        var y = parseInt(g[2], 10);
        g[1] == "-" ? d -= y : d += y;
      }
      return d;
    }
    parseCommandArgs_(u, d, g) {
      var _a2;
      if (!u.eol()) {
        d.argString = (_a2 = u.match(/.*/)) == null ? void 0 : _a2[0];
        var y = g.argDelimiter || /\s+/, v = Us(d.argString || "").split(y);
        v.length && v[0] && (d.args = v);
      }
    }
    matchCommand_(u) {
      for (var d = u.length; d > 0; d--) {
        var g = u.substring(0, d);
        if (this.commandMap_[g]) {
          var y = this.commandMap_[g];
          if (y.name.indexOf(u) === 0) return y;
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
    map(u, d, g, y) {
      if (u != ":" && u.charAt(0) == ":") {
        if (g) throw Error("Mode not supported for ex mappings");
        var v = u.substring(1);
        d != ":" && d.charAt(0) == ":" ? this.commandMap_[v] = { name: v, type: "exToEx", toInput: d.substring(1), user: true } : this.commandMap_[v] = { name: v, type: "exToKey", toKeys: d, user: true };
      } else {
        var k = { keys: u, type: "keyToKey", toKeys: d, noremap: !!y };
        g && (k.context = g), us(k);
      }
    }
    unmap(u, d) {
      if (u != ":" && u.charAt(0) == ":") {
        if (d) throw Error("Mode not supported for ex mappings");
        var g = u.substring(1);
        if (this.commandMap_[g] && this.commandMap_[g].user) return delete this.commandMap_[g], true;
      } else for (var y = u, v = 0; v < i.length; v++) if (y == i[v].keys && i[v].context === d) return i.splice(v, 1), el(y), true;
    }
  }
  var Ca = { colorscheme: function(c, u) {
    if (!u.args || u.args.length < 1) {
      Ve(c, c.getOption("theme"));
      return;
    }
    c.setOption("theme", u.args[0]);
  }, map: function(c, u, d, g) {
    var y = u.args;
    if (!y || y.length < 2) {
      c && Ve(c, "Invalid mapping: " + u.input);
      return;
    }
    Lt.map(y[0], y[1], d, g);
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
    (!g || g.length < 1 || !Lt.unmap(g[0], d)) && c && Ve(c, "No such mapping: " + u.input);
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
    Fn.processCommand(c, c.state.vim, { keys: "", type: "motion", motion: "moveToLineOrEdgeOfDocument", motionArgs: { forward: false, explicitRepeat: true, linewise: true }, repeatOverride: u.line + 1 });
  }, set: function(c, u) {
    var d = u.args, g = u.setCfg || {};
    if (!d || d.length < 1) {
      c && Ve(c, "Invalid mapping: " + u.input);
      return;
    }
    var y = d[0].split("="), v = y.shift() || "", k = y.length > 0 ? y.join("=") : void 0, C = false, E = false;
    if (v.charAt(v.length - 1) == "?") {
      if (k) throw Error("Trailing characters: " + u.argString);
      v = v.substring(0, v.length - 1), C = true;
    } else v.charAt(v.length - 1) == "!" && (v = v.substring(0, v.length - 1), E = true);
    k === void 0 && v.substring(0, 2) == "no" && (v = v.substring(2), k = false);
    var D = re[v] && re[v].type == "boolean";
    if (D && (E ? k = !J(v, c, g) : k == null && (k = true)), !D && k === void 0 || C) {
      var L = J(v, c, g);
      L instanceof Error ? Ve(c, L.message) : L === true || L === false ? Ve(c, " " + (L ? "" : "no") + v) : Ve(c, "  " + v + "=" + L);
    } else {
      var F = Z(v, k, c, g);
      F instanceof Error && Ve(c, F.message);
    }
  }, setlocal: function(c, u) {
    u.setCfg = { scope: "local" }, this.set(c, u);
  }, setglobal: function(c, u) {
    u.setCfg = { scope: "global" }, this.set(c, u);
  }, registers: function(c, u) {
    var d = u.args, g = te.registerController.registers, y = `----------Registers----------

`;
    if (d) for (var C = d.join(""), E = 0; E < C.length; E++) {
      var v = C.charAt(E);
      if (te.registerController.isValidRegister(v)) {
        var D = g[v] || new hn();
        y += '"' + v + "    " + D.toString() + `
`;
      }
    }
    else for (var v in g) {
      var k = g[v].toString();
      k.length && (y += '"' + v + "    " + k + `
`);
    }
    Ve(c, y, true);
  }, marks: function(c, u) {
    var d = u.args, g = c.state.vim.marks, y = `-----------Marks-----------
mark	line	col

`;
    if (d) for (var C = d.join(""), E = 0; E < C.length; E++) {
      var v = C.charAt(E), k = g[v] && g[v].find();
      k && (y += v + "	" + k.line + "	" + k.ch + `
`);
    }
    else for (var v in g) {
      var k = g[v] && g[v].find();
      k && (y += v + "	" + k.line + "	" + k.ch + `
`);
    }
    Ve(c, y, true);
  }, sort: function(c, u) {
    var d, g, y, v, k;
    function C() {
      if (u.argString) {
        var Be = new n.StringStream(u.argString);
        if (Be.eat("!") && (d = true), Be.eol()) return;
        if (!Be.eatSpace()) return "Invalid arguments";
        var Se = Be.match(/([dinuox]+)?\s*(\/.+\/)?\s*/);
        if (!Se || !Be.eol()) return "Invalid arguments";
        if (Se[1]) {
          g = Se[1].indexOf("i") != -1, y = Se[1].indexOf("u") != -1;
          var je = Se[1].indexOf("d") != -1 || Se[1].indexOf("n") != -1, Tn = Se[1].indexOf("x") != -1, Dt = Se[1].indexOf("o") != -1;
          if (Number(je) + Number(Tn) + Number(Dt) > 1) return "Invalid arguments";
          v = je && "decimal" || Tn && "hex" || Dt && "octal";
        }
        Se[2] && (k = new RegExp(Se[2].substr(1, Se[2].length - 2), g ? "i" : ""));
      }
    }
    var E = C();
    if (E) {
      Ve(c, E + ": " + u.argString);
      return;
    }
    var D = u.line || c.firstLine(), L = u.lineEnd || u.line || c.lastLine();
    if (D == L) return;
    var F = new e(D, 0), V = new e(L, Bt(c, L)), $ = c.getRange(F, V).split(`
`), I = v == "decimal" ? /(-?)([\d]+)/ : v == "hex" ? /(-?)(?:0x)?([0-9a-f]+)/i : v == "octal" ? /([0-7]+)/ : null, Y = v == "decimal" ? 10 : v == "hex" ? 16 : v == "octal" ? 8 : void 0, X = [], we = [];
    if (v || k) for (var ce = 0; ce < $.length; ce++) {
      var Ce = k ? $[ce].match(k) : null;
      Ce && Ce[0] != "" ? X.push(Ce) : I && I.exec($[ce]) ? X.push($[ce]) : we.push($[ce]);
    }
    else we = $;
    function Oe(Be, Se) {
      if (d) {
        var je;
        je = Be, Be = Se, Se = je;
      }
      g && (Be = Be.toLowerCase(), Se = Se.toLowerCase());
      var Tn = I && I.exec(Be), Dt = I && I.exec(Se);
      if (!Tn || !Dt) return Be < Se ? -1 : 1;
      var dn = parseInt((Tn[1] + Tn[2]).toLowerCase(), Y), Ai = parseInt((Dt[1] + Dt[2]).toLowerCase(), Y);
      return dn - Ai;
    }
    function Pe(Be, Se) {
      if (d) {
        var je;
        je = Be, Be = Se, Se = je;
      }
      return g && (Be[0] = Be[0].toLowerCase(), Se[0] = Se[0].toLowerCase()), Be[0] < Se[0] ? -1 : 1;
    }
    if (X.sort(k ? Pe : Oe), k) for (var ce = 0; ce < X.length; ce++) X[ce] = X[ce].input;
    else v || we.sort(Oe);
    if ($ = d ? X.concat(we) : we.concat(X), y) {
      var st = $, yt;
      $ = [];
      for (var ce = 0; ce < st.length; ce++) st[ce] != yt && $.push(st[ce]), yt = st[ce];
    }
    c.replaceRange($.join(`
`), F, V);
  }, vglobal: function(c, u) {
    this.global(c, u);
  }, normal: function(c, u) {
    var d = false, g = u.argString;
    if (g && g[0] == "!" && (g = g.slice(1), d = true), g = g.trimStart(), !g) {
      Ve(c, "Argument is required.");
      return;
    }
    var y = u.line;
    if (typeof y == "number") for (var v = isNaN(u.lineEnd) ? y : u.lineEnd, k = y; k <= v; k++) c.setCursor(k, 0), Ne(c, u.argString.trimStart(), { noremap: d }), c.state.vim.insertMode && Ci(c, true);
    else Ne(c, u.argString.trimStart(), { noremap: d }), c.state.vim.insertMode && Ci(c, true);
  }, global: function(c, u) {
    var d = u.argString;
    if (!d) {
      Ve(c, "Regular Expression missing from global");
      return;
    }
    var g = u.commandName[0] === "v";
    d[0] === "!" && u.commandName[0] === "g" && (g = true, d = d.slice(1));
    var y = u.line !== void 0 ? u.line : c.firstLine(), v = u.lineEnd || u.line || c.lastLine(), k = Uo(d), C = d, E = "";
    if (k && k.length && (C = k[0], E = k.slice(1, k.length).join("/")), C) try {
      mr(c, C, true, true);
    } catch {
      Ve(c, "Invalid regex: " + C);
      return;
    }
    for (var D = En(c).getQuery(), L = [], F = y; F <= v; F++) {
      var V = c.getLine(F), $ = D.test(V);
      $ !== g && L.push(E ? c.getLineHandle(F) : V);
    }
    if (!E) {
      Ve(c, L.join(`
`));
      return;
    }
    var I = 0, Y = function() {
      if (I < L.length) {
        var X = L[I++], we = c.getLineNumber(X);
        if (we == null) {
          Y();
          return;
        }
        var ce = we + 1 + E;
        Lt.processCommand(c, ce, { callback: Y });
      } else c.releaseLineHandles && c.releaseLineHandles();
    };
    Y();
  }, substitute: function(c, u) {
    if (!c.getSearchCursor) throw new Error("Search feature not available. Requires searchcursor.js or any other getSearchCursor implementation.");
    var d = u.argString, g = d ? Js(d, d[0]) : [], y = "", v = "", k, C, E, D = false, L = false;
    if (g && g.length) y = g[0], J("pcre") && y !== "" && (y = new RegExp(y).source), v = g[1], v !== void 0 && (J("pcre") ? v = If(v.replace(/([^\\])&/g, "$1$$&")) : v = Jo(v), te.lastSubstituteReplacePart = v), k = g[2] ? g[2].split(" ") : [];
    else if (d && d.length) {
      Ve(c, "Substitutions should be of the form :s/pattern/replace/");
      return;
    }
    if (k && (C = k[0], E = parseInt(k[1]), C && (C.indexOf("c") != -1 && (D = true), C.indexOf("g") != -1 && (L = true), J("pcre") ? y = y + "/" + C : y = y.replace(/\//g, "\\/") + "/" + C)), y) try {
      mr(c, y, true, true);
    } catch {
      Ve(c, "Invalid regex: " + y);
      return;
    }
    if (v = v || te.lastSubstituteReplacePart, v === void 0) {
      Ve(c, "No previous substitute regular expression");
      return;
    }
    var F = En(c), V = F.getQuery(), $ = u.line !== void 0 ? u.line : c.getCursor().line, I = u.lineEnd || $;
    $ == c.firstLine() && I == c.lastLine() && (I = 1 / 0), E && ($ = I, I = $ + E - 1);
    var Y = Ct(c, new e($, 0)), X = c.getSearchCursor(V, Y);
    Hf(c, D, L, $, I, X, V, v, u.callback);
  }, startinsert: function(c, u) {
    Ne(c, u.argString == "!" ? "A" : "i", {});
  }, redo: n.commands.redo, undo: n.commands.undo, write: function(c) {
    n.commands.save ? n.commands.save(c) : c.save && c.save();
  }, nohlsearch: function(c) {
    Br(c);
  }, yank: function(c) {
    var u = Ze(c.getCursor()), d = u.line, g = c.getLine(d);
    te.registerController.pushText("0", "yank", g, true, true);
  }, delete: function(c, u) {
    var d = u.selectionLine, g = isNaN(u.selectionLineEnd) ? d : u.selectionLineEnd;
    de.delete(c, { linewise: true }, [{ anchor: new e(d, 0), head: new e(g + 1, 0) }]);
  }, join: function(c, u) {
    var d = u.selectionLine, g = isNaN(u.selectionLineEnd) ? d : u.selectionLineEnd;
    c.setCursor(new e(d, 0)), dt.joinLines(c, { repeat: g - d }, c.state.vim);
  }, delmarks: function(c, u) {
    if (!u.argString || !Us(u.argString)) {
      Ve(c, "Argument required");
      return;
    }
    for (var d = c.state.vim, g = new n.StringStream(Us(u.argString)); !g.eol(); ) {
      g.eatSpace();
      var y = g.pos;
      if (!g.match(/[a-zA-Z]/, false)) {
        Ve(c, "Invalid argument: " + u.argString.substring(y));
        return;
      }
      var v = g.next();
      if (g.match("-", true)) {
        if (!g.match(/[a-zA-Z]/, false)) {
          Ve(c, "Invalid argument: " + u.argString.substring(y));
          return;
        }
        var k = v, C = g.next();
        if (k && C && N(k) == N(C)) {
          var E = k.charCodeAt(0), D = C.charCodeAt(0);
          if (E >= D) {
            Ve(c, "Invalid argument: " + u.argString.substring(y));
            return;
          }
          for (var L = 0; L <= D - E; L++) {
            var F = String.fromCharCode(E + L);
            delete d.marks[F];
          }
        } else {
          Ve(c, "Invalid argument: " + k + "-");
          return;
        }
      } else v && delete d.marks[v];
    }
  } }, Lt = new hs();
  ye.defineEx("version", "ve", (c) => {
    Ve(c, "Codemirror-vim version: 6.3.0");
  });
  function Hf(c, u, d, g, y, v, k, C, E) {
    c.state.vim.exMode = true;
    var D = false, L = 0, F, V, $;
    function I() {
      c.operation(function() {
        for (; !D; ) Y(), we();
        ce();
      });
    }
    function Y() {
      var Oe = "", Pe = v.match || v.pos && v.pos.match;
      if (Pe) Oe = C.replace(/\$(\d{1,3}|[$&])/g, function(Be, Se) {
        if (Se == "$") return "$";
        if (Se == "&") return Pe[0];
        for (var je = Se; parseInt(je) >= Pe.length && je.length > 0; ) je = je.slice(0, je.length - 1);
        return je ? Pe[je] + Se.slice(je.length, Se.length) : Be;
      });
      else {
        var st = c.getRange(v.from(), v.to());
        Oe = st.replace(k, C);
      }
      var yt = v.to().line;
      v.replace(Oe), V = v.to().line, y += V - yt, $ = V < yt;
    }
    function X() {
      var Oe = F && Ze(v.to()), Pe = v.findNext();
      return Pe && !Pe[0] && Oe && tn(v.from(), Oe) && (Pe = v.findNext()), Pe && L++, Pe;
    }
    function we() {
      for (; X() && Ff(v.from(), g, y); ) if (!(!d && v.from().line == V && !$)) {
        c.scrollIntoView(v.from(), 30), c.setSelection(v.from(), v.to()), F = v.from(), D = false;
        return;
      }
      D = true;
    }
    function ce(Oe) {
      if (Oe && Oe(), c.focus(), F) {
        c.setCursor(F);
        var Pe = c.state.vim;
        Pe.exMode = false, Pe.lastHPos = Pe.lastHSPos = F.ch;
      }
      E ? E() : D && Ve(c, (L ? "Found " + L + " matches" : "No matches found") + " for pattern: " + k + (J("pcre") ? " (set nopcre to use Vim regexps)" : ""));
    }
    function Ce(Oe, Pe, st) {
      n.e_stop(Oe);
      var yt = fn(Oe);
      switch (yt) {
        case "y":
          Y(), we();
          break;
        case "n":
          we();
          break;
        case "a":
          var Be = E;
          E = void 0, c.operation(I), E = Be;
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
      return D && ce(st), true;
    }
    if (we(), D) {
      Ve(c, "No matches for " + k + (J("pcre") ? " (set nopcre to use vim regexps)" : ""));
      return;
    }
    if (!u) {
      I(), E && E();
      return;
    }
    Qs(c, { prefix: Yn("span", "replace with ", Yn("strong", C), " (y/n/a/q/l)"), onKeyDown: Ce });
  }
  function Ci(c, u) {
    var d = c.state.vim, g = te.macroModeState, y = te.registerController.getRegister("."), v = g.isPlaying, k = g.lastInsertModeChanges;
    v || (c.off("change", vr), d.insertEnd && d.insertEnd.clear(), d.insertEnd = void 0, n.off(c.getInputField(), "keydown", rt)), !v && d.insertModeRepeat && d.insertModeRepeat > 1 && (at(c, d, d.insertModeRepeat - 1, true), d.lastEditInputState.repeatOverride = d.insertModeRepeat), delete d.insertModeRepeat, d.insertMode = false, u || c.setCursor(c.getCursor().line, c.getCursor().ch - 1), c.setOption("keyMap", "vim"), c.setOption("disableInput", true), c.toggleOverwrite(false), y.setText(k.changes.join("")), n.signal(c, "vim-mode-change", { mode: "normal" }), g.isRecording && Aa(g);
  }
  function us(c) {
    i.unshift(c), c.keys && Zo(c.keys);
  }
  function Zo(c) {
    c.split(/(<(?:[CSMA]-)*\w+>|.)/i).forEach(function(u) {
      u && (r[u] || (r[u] = 0), r[u]++);
    });
  }
  function el(c) {
    c.split(/(<(?:[CSMA]-)*\w+>|.)/i).forEach(function(u) {
      r[u] && r[u]--;
    });
  }
  function Ir(c, u, d, g, y) {
    var v = { keys: c, type: u };
    v[u] = d, v[u + "Args"] = g;
    for (var k in y) v[k] = y[k];
    us(v);
  }
  q("insertModeEscKeysTimeout", 200, "number");
  function Nr(c, u, d, g) {
    var y = te.registerController.getRegister(g);
    if (g == ":") {
      y.keyBuffer[0] && Lt.processCommand(c, y.keyBuffer[0]), d.isPlaying = false;
      return;
    }
    var v = y.keyBuffer, k = 0;
    d.isPlaying = true, d.replaySearchQueries = y.searchQueries.slice(0);
    for (var C = 0; C < v.length; C++) for (var E = v[C], D, L, F = /<(?:[CSMA]-)*\w+>|./gi; D = F.exec(E); ) if (L = D[0], ye.handleKey(c, L, "macro"), u.insertMode) {
      var V = y.insertModeChanges[k++].changes;
      te.macroModeState.lastInsertModeChanges.changes = V, Ft(c, V, 1), Ci(c);
    }
    d.isPlaying = false;
  }
  function Ma(c, u) {
    if (!c.isPlaying) {
      var d = c.latestRegister, g = te.registerController.getRegister(d);
      g && g.pushText(u);
    }
  }
  function Aa(c) {
    if (!c.isPlaying) {
      var u = c.latestRegister, d = te.registerController.getRegister(u);
      d && d.pushInsertModeChanges && d.pushInsertModeChanges(c.lastInsertModeChanges);
    }
  }
  function Fr(c, u) {
    if (!c.isPlaying) {
      var d = c.latestRegister, g = te.registerController.getRegister(d);
      g && g.pushSearchQuery && g.pushSearchQuery(u);
    }
  }
  function vr(c, u) {
    var d = te.macroModeState, g = d.lastInsertModeChanges;
    if (!d.isPlaying) for (var y = c.state.vim; u; ) {
      if (g.expectCursorActivityForChange = true, g.ignoreCount > 1) g.ignoreCount--;
      else if (u.origin == "+input" || u.origin == "paste" || u.origin === void 0) {
        var v = c.listSelections().length;
        v > 1 && (g.ignoreCount = v);
        var k = u.text.join(`
`);
        if (g.maybeReset && (g.changes = [], g.maybeReset = false), k) if (c.state.overwrite && !/\n/.test(k)) g.changes.push([k]);
        else {
          if (k.length > 1) {
            var C = y && y.insertEnd && y.insertEnd.find(), E = c.getCursor();
            if (C && C.line == E.line) {
              var D = C.ch - E.ch;
              D > 0 && D < k.length && (g.changes.push([k, D]), k = "");
            }
          }
          k && g.changes.push(k);
        }
      }
      u = u.next;
    }
  }
  function tl(c) {
    var _a2;
    var u = c.state.vim;
    if (u.insertMode) {
      var d = te.macroModeState;
      if (d.isPlaying) return;
      var g = d.lastInsertModeChanges;
      g.expectCursorActivityForChange ? g.expectCursorActivityForChange = false : (g.maybeReset = true, u.insertEnd && u.insertEnd.clear(), u.insertEnd = c.setBookmark(c.getCursor(), { insertLeft: true }));
    } else ((_a2 = c.curOp) == null ? void 0 : _a2.isVimOp) || nl(c, u);
  }
  function nl(c, u) {
    var d = c.getCursor("anchor"), g = c.getCursor("head");
    if (u.visualMode && !c.somethingSelected() ? nn(c, false) : !u.visualMode && !u.insertMode && c.somethingSelected() && (u.visualMode = true, u.visualLine = false, n.signal(c, "vim-mode-change", { mode: "visual" })), u.visualMode) {
      var y = tt(g, d) ? 0 : -1, v = tt(g, d) ? -1 : 0;
      g = it(g, 0, y), d = it(d, 0, v), u.sel = { anchor: d, head: g }, An(c, u, "<", Mt(g, d)), An(c, u, ">", jn(g, d));
    } else u.insertMode || (u.lastHPos = c.getCursor().ch);
  }
  function rt(c) {
    var u = te.macroModeState, d = u.lastInsertModeChanges, g = n.keyName ? n.keyName(c) : c.key;
    g && (g.indexOf("Delete") != -1 || g.indexOf("Backspace") != -1) && (d.maybeReset && (d.changes = [], d.maybeReset = false), d.changes.push(new Me(g, c)));
  }
  function at(c, u, d, g) {
    var y = te.macroModeState;
    y.isPlaying = true;
    var v = u.lastEditActionCommand, k = u.inputState;
    function C() {
      v ? Fn.processAction(c, u, v) : Fn.evalInput(c, u);
    }
    function E(L) {
      if (y.lastInsertModeChanges.changes.length > 0) {
        L = u.lastEditActionCommand ? L : 1;
        var F = y.lastInsertModeChanges;
        Ft(c, F.changes, L);
      }
    }
    if (u.inputState = u.lastEditInputState, v && v.interlaceInsertRepeat) for (var D = 0; D < d; D++) C(), E(1);
    else g || C(), E(d);
    u.inputState = k, u.insertMode && !g && Ci(c), y.isPlaying = false;
  }
  function Mi(c, u) {
    n.lookupKey(u, "vim-insert", function(g) {
      return typeof g == "string" ? n.commands[g](c) : g(c), true;
    });
  }
  function Ft(c, u, d) {
    var g = c.getCursor("head"), y = te.macroModeState.lastInsertModeChanges.visualBlock;
    y && (ma(c, g, y + 1), d = c.listSelections().length, c.setCursor(g));
    for (var v = 0; v < d; v++) {
      y && c.setCursor(it(g, v, 0));
      for (var k = 0; k < u.length; k++) {
        var C = u[k];
        if (C instanceof Me) Mi(c, C.keyName);
        else if (typeof C == "string") c.replaceSelection(C);
        else {
          var E = c.getCursor(), D = it(E, 0, C[0].length - (C[1] || 0));
          c.replaceRange(C[0], E, C[1] ? E : D), c.setCursor(D);
        }
      }
    }
    y && c.setCursor(it(g, 0, 1));
  }
  function Et(c) {
    var u = new c.constructor();
    return Object.keys(c).forEach(function(d) {
      if (d != "insertEnd") {
        var g = c[d];
        Array.isArray(g) ? g = g.slice() : g && typeof g == "object" && g.constructor != Object && (g = Et(g)), u[d] = g;
      }
    }), c.sel && (u.sel = { head: c.sel.head && Ze(c.sel.head), anchor: c.sel.anchor && Ze(c.sel.anchor) }), u;
  }
  function Ht(c, u, d) {
    var v = ae(c), g = c, y = false, v = ye.maybeInitVimState_(g), k = v.visualBlock || v.wasInVisualBlock;
    if (g.state.closeVimNotification) {
      var C = g.state.closeVimNotification;
      if (g.state.closeVimNotification = null, C(), u == "<CR>") return mt(g), true;
    }
    var E = g.isInMultiSelectMode();
    if (v.wasInVisualBlock && !E ? v.wasInVisualBlock = false : E && v.visualBlock && (v.wasInVisualBlock = true), u == "<Esc>" && !v.insertMode && !v.visualMode && E && v.status == "<Esc>") mt(g);
    else if (k || !E || g.inVirtualSelectionMode) y = ye.handleKey(g, u, d);
    else {
      var D = Et(v), L = v.inputState.changeQueueList || [];
      g.operation(function() {
        var _a2;
        g.curOp && (g.curOp.isVimOp = true);
        var F = 0;
        g.forEachSelection(function() {
          g.state.vim.inputState.changeQueue = L[F];
          var V = g.getCursor("head"), $ = g.getCursor("anchor"), I = tt(V, $) ? 0 : -1, Y = tt(V, $) ? -1 : 0;
          V = it(V, 0, I), $ = it($, 0, Y), g.state.vim.sel.head = V, g.state.vim.sel.anchor = $, y = ye.handleKey(g, u, d), g.virtualSelection && (L[F] = g.state.vim.inputState.changeQueue, g.state.vim = Et(D)), F++;
        }), ((_a2 = g.curOp) == null ? void 0 : _a2.cursorActivity) && !y && (g.curOp.cursorActivity = false), g.state.vim = v, v.inputState.changeQueueList = L, v.inputState.changeQueue = null;
      }, true);
    }
    return y && !v.visualMode && !v.insertMode && v.visualMode != g.somethingSelected() && nl(g, v), y;
  }
  return Te(), ye;
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
class ir {
  constructor(e, t) {
    this.line = e, this.ch = t;
  }
}
function Bb(n, e, t) {
  if (n.addEventListener) n.addEventListener(e, t, false);
  else {
    var i = n._handlers || (n._handlers = {});
    i[e] = (i[e] || []).concat(t);
  }
}
function Ib(n, e, t) {
  if (n.removeEventListener) n.removeEventListener(e, t, false);
  else {
    var i = n._handlers, r = i && i[e];
    if (r) {
      var s = r.indexOf(t);
      s > -1 && (i[e] = r.slice(0, s).concat(r.slice(s + 1)));
    }
  }
}
function Nb(n, e, ...t) {
  var i, r = (i = n._handlers) === null || i === void 0 ? void 0 : i[e];
  if (r) for (var s = 0; s < r.length; ++s) r[s](...t);
}
function Em(n, ...e) {
  if (n) for (var t = 0; t < n.length; ++t) n[t](...e);
}
let _u;
try {
  _u = new RegExp("[\\w\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
  _u = /[\w]/;
}
function wl(n, e) {
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
function Tm(n, e) {
  var t;
  n.curOp && (n.curOp.$changeStart = void 0), (e ? Ld : Vc)(n.cm6);
  let i = (t = n.curOp) === null || t === void 0 ? void 0 : t.$changeStart;
  i != null && n.cm6.dispatch({ selection: { anchor: i } });
}
var fT = { Left: (n) => vs(n.cm6, { key: "Left" }, "editor"), Right: (n) => vs(n.cm6, { key: "Right" }, "editor"), Up: (n) => vs(n.cm6, { key: "Up" }, "editor"), Down: (n) => vs(n.cm6, { key: "Down" }, "editor"), Backspace: (n) => vs(n.cm6, { key: "Backspace" }, "editor"), Delete: (n) => vs(n.cm6, { key: "Delete" }, "editor") };
class Ie {
  openDialog(e, t, i) {
    return uT(this, e, t, i);
  }
  openNotification(e, t) {
    return hT(this, e, t);
  }
  constructor(e) {
    this.state = {}, this.marks = /* @__PURE__ */ Object.create(null), this.$mid = 0, this.options = {}, this._handlers = {}, this.$lastChangeEndOffset = 0, this.virtualSelection = null, this.cm6 = e, this.onChange = this.onChange.bind(this), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  on(e, t) {
    Bb(this, e, t);
  }
  off(e, t) {
    Ib(this, e, t);
  }
  signal(e, t, i) {
    Nb(this, e, t, i);
  }
  indexFromPos(e) {
    return ei(this.cm6.state.doc, e);
  }
  posFromIndex(e) {
    return hi(this.cm6.state.doc, e);
  }
  foldCode(e) {
    let t = this.cm6, i = t.state.selection.ranges, r = this.cm6.state.doc, s = ei(r, e), o = j.create([j.range(s, s)], 0).ranges;
    t.state.selection.ranges = o, Cv(t), t.state.selection.ranges = i;
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
    return this.$lineHandleChanges || (this.$lineHandleChanges = []), { row: e, index: this.indexFromPos(new ir(e, 0)) };
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
    wl(this, { changes: { from: o, to: l, insert: e } });
  }
  replaceSelection(e) {
    wl(this, this.cm6.state.replaceSelection(e));
  }
  replaceSelections(e) {
    var t = this.cm6.state.selection.ranges, i = t.map((r, s) => ({ from: r.from, to: r.to, insert: e[s] || "" }));
    wl(this, { changes: i });
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
    return i = Math.min(Math.max(0, i), s.to - s.from), new ir(r - 1, i);
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
    var i = this.cm6.state, r = ei(i.doc, e), s = pi(i, r + 1, -1);
    return s && s.end ? { to: hi(i.doc, s.end.from) } : (s = pi(i, r, 1), s && s.end ? { to: hi(i.doc, s.end.from) } : { to: void 0 });
  }
  scanForBracket(e, t, i, r) {
    return gT(this, e, t, i, r);
  }
  indentLine(e, t) {
    t ? this.indentMore() : this.indentLess();
  }
  indentMore() {
    hb(this.cm6);
  }
  indentLess() {
    ub(this.cm6);
  }
  execCommand(e) {
    if (e == "indentAuto") Ie.commands.indentAuto(this);
    else if (e == "goLineLeft") Uv(this.cm6);
    else if (e == "goLineRight") {
      qv(this.cm6);
      let t = this.cm6.state, i = t.selection.main.head;
      i < t.doc.length && t.sliceDoc(i, i + 1) !== `
` && DM(this.cm6);
    } else console.log(e + " is not implemented");
  }
  setBookmark(e, t) {
    var i = (t == null ? void 0 : t.insertLeft) ? 1 : -1, r = this.indexFromPos(e), s = new vT(this, r, i);
    return s;
  }
  addOverlay({ query: e }) {
    let t = new Nd({ regexp: true, search: e.source, caseSensitive: !/i/.test(e.flags) });
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
    var l = ei(i.cm6.state.doc, t), a = e.source.replace(/(\\.|{(?:\d+(?:,\d*)?|,\d+)})|[{}]/g, function(b, S) {
      return S || "\\" + b;
    });
    function f(b, S = 0, M = b.length) {
      return new Id(b, a, { ignoreCase: e.ignoreCase }, S, M);
    }
    function h(b) {
      var S = i.cm6.state.doc;
      if (b > S.length) return null;
      let M = f(S, b).next();
      return M.done ? null : M.value;
    }
    var p = 1e4;
    function m(b, S) {
      var M = i.cm6.state.doc;
      for (let A = 1; ; A++) {
        let _ = Math.max(b, S - A * p), R = f(M, _, S), N = null;
        for (; !R.next().done; ) N = R.value;
        if (N && (_ == b || N.from > _ + 10)) return N;
        if (_ == b) return null;
      }
    }
    return { findNext: function() {
      return this.find(false);
    }, findPrevious: function() {
      return this.find(true);
    }, find: function(b) {
      var S = i.cm6.state.doc;
      if (b) {
        let M = r ? o ? r.to - 1 : r.from : l;
        r = m(0, M);
      } else {
        let M = r ? o ? r.to + 1 : r.to : l;
        r = h(M);
      }
      return s = r && { from: hi(S, r.from), to: hi(S, r.to), match: r.match }, o = r ? r.from == r.to : false, r && r.match;
    }, from: function() {
      return s == null ? void 0 : s.from;
    }, to: function() {
      return s == null ? void 0 : s.to;
    }, replace: function(b) {
      r && (wl(i, { changes: { from: r.from, to: r.to, insert: b } }), r.to = r.from + b.length, s && (s.to = hi(i.cm6.state.doc, r.to)));
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
    e && (e.change && Em(e.changeHandlers, this, e.change), e && e.cursorActivity && (Em(e.cursorActivityHandlers, this, null), e.isVimOp && (t = true)), this.curOp = null), t && this.scrollIntoView();
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
        return this.cm6.state.facet(Gl) == "	";
      case "indentUnit":
        return this.cm6.state.facet(Gl).length || 2;
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
    var t, i = this.indexFromPos(e), r = vv(this.cm6.state, i), s = r == null ? void 0 : r.resolve(i), o = ((t = s == null ? void 0 : s.type) === null || t === void 0 ? void 0 : t.name) || "";
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
    return bT(this, e);
  }
}
Ie.isMac = typeof navigator < "u" && /Mac/.test(navigator.platform);
Ie.Pos = ir;
Ie.StringStream = cM;
Ie.commands = { cursorCharLeft: function(n) {
  Rd(n.cm6);
}, redo: function(n) {
  Tm(n, false);
}, undo: function(n) {
  Tm(n, true);
}, newlineAndIndent: function(n) {
  Au({ state: n.cm6.state, dispatch: (e) => wl(n, e) });
}, indentAuto: function(n) {
  fb(n.cm6);
}, newlineAndIndentContinueComment: void 0, save: void 0 };
Ie.isWordChar = function(n) {
  return _u.test(n);
};
Ie.keys = fT;
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
Ie.on = Bb;
Ie.off = Ib;
Ie.signal = Nb;
Ie.findMatchingTag = mT;
Ie.findEnclosingTag = yT;
Ie.keyName = void 0;
function Fb(n, e, t) {
  var i = document.createElement("div");
  return i.appendChild(e), i;
}
function Hb(n, e) {
  n.state.currentNotificationClose && n.state.currentNotificationClose(), n.state.currentNotificationClose = e;
}
function hT(n, e, t) {
  Hb(n, l);
  var i = Fb(n, e, t && t.bottom), r = false, s, o = t && typeof t.duration < "u" ? t.duration : 5e3;
  function l() {
    r || (r = true, clearTimeout(s), i.remove(), Wb(n, i));
  }
  return i.onclick = function(a) {
    a.preventDefault(), l();
  }, Vb(n, i), o && (s = setTimeout(l, o)), l;
}
function Vb(n, e) {
  var t = n.state.dialog;
  n.state.dialog = e, e.style.flex = "1", e && t !== e && (t && t.contains(document.activeElement) && n.focus(), t && t.parentElement ? t.parentElement.replaceChild(e, t) : t && t.remove(), Ie.signal(n, "dialog"));
}
function Wb(n, e) {
  n.state.dialog == e && (n.state.dialog = null, Ie.signal(n, "dialog"));
}
function uT(n, e, t, i) {
  i || (i = {}), Hb(n, void 0);
  var r = Fb(n, e, i.bottom), s = false;
  Vb(n, r);
  function o(a) {
    if (typeof a == "string") l.value = a;
    else {
      if (s) return;
      s = true, Wb(n, r), n.state.dialog || n.focus(), i.onClose && i.onClose(r);
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
var dT = { "(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<", "<": ">>", ">": "<<" };
function pT(n) {
  return n && n.bracketRegex || /[(){}[\]]/;
}
function gT(n, e, t, i, r) {
  for (var s = r && r.maxScanLineLength || 1e4, o = r && r.maxScanLines || 1e3, l = [], a = pT(r), f = t > 0 ? Math.min(e.line + o, n.lastLine() + 1) : Math.max(n.firstLine() - 1, e.line - o), h = e.line; h != f; h += t) {
    var p = n.getLine(h);
    if (p) {
      var m = t > 0 ? 0 : p.length - 1, b = t > 0 ? p.length : -1;
      if (!(p.length > s)) for (h == e.line && (m = e.ch - (t < 0 ? 1 : 0)); m != b; m += t) {
        var S = p.charAt(m);
        if (a.test(S)) {
          var M = dT[S];
          if (M && M.charAt(1) == ">" == t > 0) l.push(S);
          else if (l.length) l.pop();
          else return { pos: new ir(h, m), ch: S };
        }
      }
    }
  }
  return h - t == (t > 0 ? n.lastLine() : n.firstLine()) ? false : null;
}
function mT(n, e) {
  return null;
}
function yT(n, e) {
  var t, i, r = n.cm6.state, s = n.indexFromPos(e);
  if (s < r.doc.length) {
    var o = r.sliceDoc(s, s + 1);
    o == "<" && s++;
  }
  for (var l = vv(r, s), a = (l == null ? void 0 : l.resolve(s)) || null; a; ) {
    if (((t = a.firstChild) === null || t === void 0 ? void 0 : t.type.name) == "OpenTag" && ((i = a.lastChild) === null || i === void 0 ? void 0 : i.type.name) == "CloseTag") return { open: Om(r.doc, a.firstChild), close: Om(r.doc, a.lastChild) };
    a = a.parent;
  }
}
function Om(n, e) {
  return { from: hi(n, e.from), to: hi(n, e.to) };
}
class vT {
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
function bT(n, e) {
  for (var t, i = e.column || n.getOption("textwidth") || 80, r = e.allowMerge != false, s = Math.min(e.from, e.to), o = Math.max(e.from, e.to); s <= o; ) {
    var l = n.getLine(s);
    if (l.length > i) {
      var a = S(l, i, 5);
      if (a) {
        var f = (t = /^\s*/.exec(l)) === null || t === void 0 ? void 0 : t[0];
        n.replaceRange(`
` + f, new ir(s, a.start), new ir(s, a.end));
      }
      o++;
    } else if (r && /\S/.test(l) && s != o) {
      var h = n.getLine(s + 1);
      if (h && /\S/.test(h)) {
        var p = l.replace(/\s+$/, ""), m = h.replace(/^\s+/, ""), b = p + " " + m, a = S(b, i, 5);
        a && a.start > p.length || b.length < i ? (n.replaceRange(" ", new ir(s, p.length), new ir(s + 1, h.length - m.length)), s--, o--) : p.length < l.length && n.replaceRange("", new ir(s, p.length), new ir(s, l.length));
      }
    }
    s++;
  }
  return s;
  function S(M, A, _) {
    if (!(M.length < A)) {
      var R = M.slice(0, A), N = M.slice(A), B = /^(?:(\s+)|(\S+)(\s+))/.exec(N), W = /(?:(\s+)|(\s+)(\S+))$/.exec(R), H = 0, K = 0;
      if (W && !W[2] && (H = A - W[1].length, K = A), B && !B[2] && (H || (H = A), K = A + B[1].length), H) return { start: H, end: K };
      if (W && W[2] && W.index > _) return { start: W.index, end: W.index + W[2].length };
      if (B && B[2]) return H = A + B[2].length, { start: H, end: H + B[3].length };
    }
  }
}
let Lu = dk || /* @__PURE__ */ (function() {
  let n = { cursorBlinkRate: 1200 };
  return function() {
    return n;
  };
})();
class wT {
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
class xT {
  constructor(e, t) {
    this.view = e, this.rangePieces = [], this.cursors = [], this.cm = t, this.measureReq = { read: this.readPos.bind(this), write: this.drawSel.bind(this) }, this.cursorLayer = e.scrollDOM.appendChild(document.createElement("div")), this.cursorLayer.className = "cm-cursorLayer cm-vimCursorLayer", this.cursorLayer.setAttribute("aria-hidden", "true"), e.requestMeasure(this.measureReq), this.setBlinkRate();
  }
  setBlinkRate() {
    let t = Lu(this.cm.cm6.state).cursorBlinkRate;
    this.cursorLayer.style.animationDuration = t + "ms";
  }
  update(e) {
    (e.selectionSet || e.geometryChanged || e.viewportChanged) && (this.view.requestMeasure(this.measureReq), this.cursorLayer.style.animationName = this.cursorLayer.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink"), ST(e) && this.setBlinkRate();
  }
  scheduleRedraw() {
    this.view.requestMeasure(this.measureReq);
  }
  readPos() {
    let { state: e } = this.view, t = [];
    for (let i of e.selection.ranges) {
      let r = i == e.selection.main, s = AT(this.cm, this.view, i, r);
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
function ST(n) {
  return Lu(n.startState) != Lu(n.state);
}
const kT = { ".cm-vimMode .cm-line": { "& ::selection": { backgroundColor: "transparent !important" }, "&::selection": { backgroundColor: "transparent !important" }, caretColor: "transparent !important" }, ".cm-fat-cursor": { position: "absolute", background: "#ff9696", border: "none", whiteSpace: "pre" }, "&:not(.cm-focused) .cm-fat-cursor": { background: "none", outline: "solid 1px #ff9696", color: "transparent !important" } }, CT = os.highest(he.theme(kT));
function MT(n) {
  let e = n.scrollDOM.getBoundingClientRect();
  return { left: (n.textDirection == gt.LTR ? e.left : e.right - n.scrollDOM.clientWidth) - n.scrollDOM.scrollLeft * n.scaleX, top: e.top - n.scrollDOM.scrollTop * n.scaleY };
}
function AT(n, e, t, i) {
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
    let S = e.coordsAtPos(a, 1);
    if (!S) return null;
    let M = MT(e), A = e.domAtPos(a), _ = A ? A.node : e.contentDOM;
    for (_ instanceof Text && A.offset >= _.data.length && !((r = _.parentElement) === null || r === void 0) && r.nextSibling && (_ = (s = _.parentElement) === null || s === void 0 ? void 0 : s.nextSibling, A = { node: _, offset: 0 }); A && A.node instanceof HTMLElement; ) _ = A.node, A = { node: A.node.childNodes[A.offset], offset: 0 };
    if (!(_ instanceof HTMLElement)) {
      if (!_.parentNode) return null;
      _ = _.parentNode;
    }
    let R = getComputedStyle(_), N = S.left, B = (l = (o = e).coordsForChar) === null || l === void 0 ? void 0 : l.call(o, a);
    if (B && (N = B.left), !b || b == `
` || b == "\r") b = "\xA0";
    else if (b == "	") {
      b = "\xA0";
      var m = e.coordsAtPos(a + 1, -1);
      m && (N = m.left - (m.left - S.left) / parseInt(R.tabSize));
    } else /[\uD800-\uDBFF]/.test(b) && a < e.state.doc.length - 1 && (b += e.state.sliceDoc(a + 1, a + 2));
    let W = S.bottom - S.top;
    return new wT((N - M.left) / e.scaleX, (S.top - M.top + W * (1 - h)) / e.scaleY, W * h / e.scaleY, R.fontFamily, R.fontSize, R.fontWeight, R.color, i ? "cm-fat-cursor cm-cursor-primary" : "cm-fat-cursor cm-cursor-secondary", b, h != 1);
  } else return null;
}
var ET = typeof navigator < "u" && /linux/i.test(navigator.platform) && / Gecko\/\d+/.exec(navigator.userAgent);
const gs = cT(Ie), TT = 250, OT = he.baseTheme({ ".cm-vimMode .cm-cursorLayer:not(.cm-vimCursorLayer)": { display: "none" }, ".cm-vim-panel": { padding: "0px 10px", fontFamily: "monospace", minHeight: "1.3em", display: "flex" }, ".cm-vim-panel input": { border: "none", outline: "none", backgroundColor: "inherit" }, "&light .cm-searchMatch": { backgroundColor: "#ffff0054" }, "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" } }), _T = kt.fromClass(class {
  constructor(n) {
    this.status = "", this.query = null, this.decorations = ve.none, this.waitForCopy = false, this.lastKeydown = "", this.useNextTextInput = false, this.compositionText = "", this.view = n;
    const e = this.cm = new Ie(n);
    gs.enterVimMode(this.cm), this.view.cm = this.cm, this.cm.state.vimPlugin = this, this.blockCursor = new xT(n, e), this.updateClass(), this.cm.on("vim-command-done", () => {
      e.state.vim && (e.state.vim.status = ""), this.blockCursor.scheduleRedraw(), this.updateStatus();
    }), this.cm.on("vim-mode-change", (t) => {
      e.state.vim && (e.state.vim.mode = t.mode, t.subMode && (e.state.vim.mode += " block"), e.state.vim.status = "", this.blockCursor.scheduleRedraw(), this.updateClass(), this.updateStatus());
    }), this.cm.on("dialog", () => {
      this.cm.state.statusbar ? this.updateStatus() : n.dispatch({ effects: $b.of(!!this.cm.state.dialog) });
    }), this.dom = document.createElement("span"), this.spacer = document.createElement("span"), this.spacer.style.flex = "1", this.statusButton = document.createElement("span"), this.statusButton.onclick = (t) => {
      gs.handleKey(this.cm, "<Esc>", "user"), this.cm.focus();
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
    gs.leaveVimMode(this.cm), this.updateClass(), this.blockCursor.destroy(), delete this.view.cm;
  }
  highlight(n) {
    if (this.query = n, !n) return this.decorations = ve.none;
    let { view: e } = this, t = new Ri();
    for (let i = 0, r = e.visibleRanges, s = r.length; i < s; i++) {
      let { from: o, to: l } = r[i];
      for (; i < s - 1 && l > r[i + 1].from - 2 * TT; ) l = r[++i].to;
      n.highlight(e.state, o, l, (a, f) => {
        t.add(a, f, DT);
      });
    }
    return this.decorations = t.finish();
  }
  handleKey(n, e) {
    const t = this.cm;
    let i = t.state.vim;
    if (!i) return;
    const r = gs.vimKeyFromEvent(n, i);
    if (Ie.signal(this.cm, "inputEvent", { type: "handleKey", key: r }), !r) return;
    if (r == "<Esc>" && !i.insertMode && !i.visualMode && this.query) {
      const l = i.searchState_;
      l && (t.removeOverlay(l.getOverlay()), l.setOverlay(null));
    }
    if (r === "<C-c>" && !Ie.isMac && t.somethingSelected()) return this.waitForCopy = true, true;
    i.status = (i.status || "") + r;
    let o = gs.multiSelectHandleKey(t, r, "user");
    return i = gs.maybeInitVimState_(t), !o && i.insertMode && t.state.overwrite && (n.key && n.key.length == 1 && !/\n/.test(n.key) ? (o = true, t.overWriteSelection(n.key)) : n.key == "Backspace" && (o = true, Ie.commands.cursorCharLeft(t))), o && (Ie.signal(this.cm, "vim-keypress", r), n.preventDefault(), n.stopPropagation(), this.blockCursor.scheduleRedraw()), this.updateStatus(), !!o;
  }
}, { eventHandlers: { copy: function(n, e) {
  this.waitForCopy && (this.waitForCopy = false, Promise.resolve().then(() => {
    var t = this.cm, i = t.state.vim;
    i && (i.insertMode ? t.setSelection(t.getCursor(), t.getCursor()) : t.operation(() => {
      t.curOp && (t.curOp.isVimOp = true), gs.handleKey(t, "<Esc>", "user");
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
  var r, s, o = NT(n);
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
      } }), LT(n), true;
    }
  }
  return false;
})], decorations: (n) => n.decorations });
function LT(n) {
  var e = n.scrollDOM.parentElement;
  if (e) {
    if (ET) {
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
const DT = ve.mark({ class: "cm-searchMatch" }), $b = Ee.define(), RT = Yt.define({ create: () => false, update(n, e) {
  for (let t of e.effects) t.is($b) && (n = t.value);
  return n;
}, provide: (n) => Vs.from(n, (e) => e ? PT : null) });
function PT(n) {
  let e = document.createElement("div");
  e.className = "cm-vim-panel";
  let t = n.cm;
  return t.state.dialog && e.appendChild(t.state.dialog), { top: false, dom: e };
}
function BT(n) {
  let e = document.createElement("div");
  e.className = "cm-vim-panel";
  let t = n.cm;
  return t.state.statusbar = e, t.state.vimPlugin.updateStatus(), { dom: e };
}
function IT(n = {}) {
  return [OT, _T, CT, n.status ? Vs.of(BT) : RT];
}
function NT(n) {
  return n.cm || null;
}
function zb(n, e) {
  const t = Bo(n, pt.__wbindgen_export, pt.__wbindgen_export2), i = ns, r = pt.completions(t, i, e);
  return cr(r);
}
function Kb(n) {
  const e = Bo(n, pt.__wbindgen_export, pt.__wbindgen_export2), t = ns, i = pt.diagnostics(e, t);
  return cr(i);
}
function FT(n) {
  const e = Bo(n, pt.__wbindgen_export, pt.__wbindgen_export2), t = ns, i = pt.function_info(e, t);
  return cr(i);
}
function jb(n) {
  try {
    const r = pt.__wbindgen_add_to_stack_pointer(-16), s = Bo(n, pt.__wbindgen_export, pt.__wbindgen_export2), o = ns;
    pt.parse_wasm(r, s, o);
    var e = Dl().getInt32(r + 0, true), t = Dl().getInt32(r + 4, true), i = Dl().getInt32(r + 8, true);
    if (i) throw cr(t);
    return cr(e);
  } finally {
    pt.__wbindgen_add_to_stack_pointer(16);
  }
}
function HT(n) {
  const e = Bo(n, pt.__wbindgen_export, pt.__wbindgen_export2), t = ns, i = pt.tokenize(e, t);
  return cr(i);
}
function VT() {
  return { __proto__: null, "./mpl_lang_bg.js": { __proto__: null, __wbg_Error_83742b46f01ce22d: function(e, t) {
    const i = Error(dh(e, t));
    return Qi(i);
  }, __wbg_Number_a5a435bd7bbec835: function(e) {
    return Number(er(e));
  }, __wbg_String_8564e559799eccda: function(e, t) {
    const i = String(er(t)), r = Bo(i, pt.__wbindgen_export, pt.__wbindgen_export2), s = ns;
    Dl().setInt32(e + 4, s, true), Dl().setInt32(e + 0, r, true);
  }, __wbg___wbindgen_is_string_7ef6b97b02428fae: function(e) {
    return typeof er(e) == "string";
  }, __wbg___wbindgen_throw_6ddd609b62940d55: function(e, t) {
    throw new Error(dh(e, t));
  }, __wbg_new_49d5571bd3f0c4d4: function() {
    return Qi(/* @__PURE__ */ new Map());
  }, __wbg_new_a70fbab9066b301f: function() {
    const e = new Array();
    return Qi(e);
  }, __wbg_new_ab79df5bd7c26067: function() {
    const e = new Object();
    return Qi(e);
  }, __wbg_set_282384002438957f: function(e, t, i) {
    er(e)[t >>> 0] = cr(i);
  }, __wbg_set_6be42768c690e380: function(e, t, i) {
    er(e)[cr(t)] = cr(i);
  }, __wbg_set_bf7251625df30a02: function(e, t, i) {
    const r = er(e).set(er(t), er(i));
    return Qi(r);
  }, __wbindgen_cast_0000000000000001: function(e) {
    return Qi(e);
  }, __wbindgen_cast_0000000000000002: function(e) {
    return Qi(e);
  }, __wbindgen_cast_0000000000000003: function(e, t) {
    const i = dh(e, t);
    return Qi(i);
  }, __wbindgen_cast_0000000000000004: function(e) {
    const t = BigInt.asUintN(64, e);
    return Qi(t);
  }, __wbindgen_object_clone_ref: function(e) {
    const t = er(e);
    return Qi(t);
  }, __wbindgen_object_drop_ref: function(e) {
    cr(e);
  } } };
}
function Qi(n) {
  Rl === xr.length && xr.push(xr.length + 1);
  const e = Rl;
  return Rl = xr[e], xr[e] = n, e;
}
function WT(n) {
  n < 1028 || (xr[n] = Rl, Rl = n);
}
let bs = null;
function Dl() {
  return (bs === null || bs.buffer.detached === true || bs.buffer.detached === void 0 && bs.buffer !== pt.memory.buffer) && (bs = new DataView(pt.memory.buffer)), bs;
}
function dh(n, e) {
  return n = n >>> 0, zT(n, e);
}
let xl = null;
function vc() {
  return (xl === null || xl.byteLength === 0) && (xl = new Uint8Array(pt.memory.buffer)), xl;
}
function er(n) {
  return xr[n];
}
let xr = new Array(1024).fill(void 0);
xr.push(void 0, null, true, false);
let Rl = xr.length;
function Bo(n, e, t) {
  if (t === void 0) {
    const l = Pl.encode(n), a = e(l.length, 1) >>> 0;
    return vc().subarray(a, a + l.length).set(l), ns = l.length, a;
  }
  let i = n.length, r = e(i, 1) >>> 0;
  const s = vc();
  let o = 0;
  for (; o < i; o++) {
    const l = n.charCodeAt(o);
    if (l > 127) break;
    s[r + o] = l;
  }
  if (o !== i) {
    o !== 0 && (n = n.slice(o)), r = t(r, i, i = o + n.length * 3, 1) >>> 0;
    const l = vc().subarray(r + o, r + i), a = Pl.encodeInto(n, l);
    o += a.written, r = t(r, i, o, 1) >>> 0;
  }
  return ns = o, r;
}
function cr(n) {
  const e = er(n);
  return WT(n), e;
}
let bc = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
bc.decode();
const $T = 2146435072;
let ph = 0;
function zT(n, e) {
  return ph += e, ph >= $T && (bc = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), bc.decode(), ph = e), bc.decode(vc().subarray(n, n + e));
}
const Pl = new TextEncoder();
"encodeInto" in Pl || (Pl.encodeInto = function(n, e) {
  const t = Pl.encode(n);
  return e.set(t), { read: n.length, written: t.length };
});
let ns = 0, pt;
function KT(n, e) {
  return pt = n.exports, bs = null, xl = null, pt;
}
async function jT(n, e) {
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
async function qT(n) {
  if (pt !== void 0) return pt;
  n !== void 0 && (Object.getPrototypeOf(n) === Object.prototype ? { module_or_path: n } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), n === void 0 && (n = new URL("/assets/mpl_lang_bg-kn57nyCe.wasm", import.meta.url));
  const e = VT();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const { instance: t, module: i } = await jT(await n, e);
  return KT(t);
}
const Du = /\b(filter|where|map|group|by|using|align|to|over|from|bucket|join|compute|set|replace|as|and|or|not|is|param|rate|increase|histogram|interpolate_delta_histogram|interpolate_cumulative_histogram|count|avg|sum|min|max)\b/g, UT = /\/\/[^\n]*/g, GT = /"(?:[^"\\]|\\.)*"/g, YT = /#s?\/(?:[^/\\]|\\.)*(?:\/(?:[^/\\]|\\.)*)?\//g, JT = /\b\d+(\.\d*)?([eE][+-]?\d+)?[smhdwMy]?\b/g, QT = /\b(true|false)\b/g, XT = /\b(string|int|float|bool|dataset|metric|duration|regex)\b/g, br = { keyword: ve.mark({ class: "mpl-keyword" }), variable: ve.mark({ class: "mpl-variable" }), string: ve.mark({ class: "mpl-string" }), number: ve.mark({ class: "mpl-number" }), bool: ve.mark({ class: "mpl-bool" }), regexp: ve.mark({ class: "mpl-regexp" }), operator: ve.mark({ class: "mpl-operator" }), punctuation: ve.mark({ class: "mpl-punctuation" }), type: ve.mark({ class: "mpl-type" }), comment: ve.mark({ class: "mpl-comment" }) };
function ms(n, e, t, i, r) {
  n.lastIndex = 0;
  let s;
  for (; (s = n.exec(e)) !== null; ) r.push({ from: s.index, to: s.index + s[0].length, deco: t, priority: i });
}
function _m(n) {
  const e = n.state.doc.toString(), t = [];
  ms(UT, e, br.comment, 30, t);
  let i = null;
  try {
    i = HT(e);
  } catch {
  }
  if (i && i.length > 0) {
    for (const s of i) {
      const o = br[s.type];
      o && t.push({ from: s.from, to: s.to, deco: o, priority: 20 });
    }
    const r = i.map((s) => [s.from, s.to]);
    ZT(e, r, t);
  } else ms(GT, e, br.string, 10, t), ms(YT, e, br.regexp, 10, t), ms(QT, e, br.bool, 10, t), ms(JT, e, br.number, 5, t), ms(XT, e, br.type, 10, t), ms(Du, e, br.keyword, 10, t);
  return eO(t);
}
function ZT(n, e, t) {
  Du.lastIndex = 0;
  let i;
  for (; (i = Du.exec(n)) !== null; ) {
    const r = i.index, s = r + i[0].length;
    e.some(([o, l]) => r < l && s > o) || t.push({ from: r, to: s, deco: br.keyword, priority: 10 });
  }
}
function eO(n) {
  n.sort((i, r) => r.priority - i.priority || i.from - r.from);
  const e = [];
  for (const i of n) e.some((r) => i.from < r.to && i.to > r.from) || e.push(i);
  e.sort((i, r) => i.from - r.from);
  const t = new Ri();
  for (const i of e) i.from < i.to && t.add(i.from, i.to, i.deco);
  return t.finish();
}
const tO = kt.fromClass(class {
  constructor(n) {
    __publicField(this, "decorations");
    this.decorations = _m(n);
  }
  update(n) {
    (n.docChanged || n.viewportChanged) && (this.decorations = _m(n.view));
  }
}, { decorations: (n) => n.decorations });
function go(n) {
  if (n === "Float") return "float";
  if (typeof n == "object") {
    if ("Enum" in n) return `enum(${n.Enum.join(", ")})`;
    if ("Repeated" in n) {
      const { typ: e, min: t, max: i } = n.Repeated;
      let r = `repeated(${go(e)}`;
      return t > 0 && (r += `, min=${t}`), i !== null && (r += `, max=${i}`), r + ")";
    }
    if ("OneOf" in n) return `one_of(${n.OneOf.map(go).join(", ")})`;
    if ("Optional" in n) return `[${go(n.Optional)}]`;
  }
  return "unknown";
}
function qb(n) {
  if (n.length !== 0) return `(${n.map((e) => `${e.name}: ${go(e.type)}`).join(", ")})`;
}
const gh = /* @__PURE__ */ new Map();
function Ub(n) {
  if (gh.has(n)) return gh.get(n);
  let e = null;
  try {
    e = FT(n);
  } catch {
  }
  return gh.set(n, e), e;
}
const nO = 3e4;
class mh {
  constructor(e = nO) {
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
const Gb = $e.languageData.of(() => [{ wordChars: "`$" }]);
function iO(n) {
  const e = n.state.doc.toString();
  let t = null;
  try {
    t = zb(e, n.pos);
  } catch {
    return null;
  }
  return t ? t.kind === "params" ? t.options.length === 0 ? null : { from: t.from, to: t.to, options: t.options.map((i) => ({ label: i.label, type: "variable", detail: i.type })), filter: false } : t.kind === "tag" ? { from: t.from, to: t.to, options: [{ label: `<tag for ${t.dataset}:${t.metric}>`, type: "variable", info: "Tag completions not yet connected" }], filter: false } : t.kind === "dataset" ? { from: t.from, to: t.to, options: [{ label: "<dataset>", type: "variable", info: "Dataset completions not yet connected" }], filter: false } : t.kind === "metric" ? { from: t.from, to: t.to, options: [{ label: `<metric for ${t.dataset}>`, type: "variable", info: "Metric completions not yet connected" }], filter: false } : t.options.length === 0 ? null : t.kind === "keywords" ? { from: t.from, to: t.to, options: t.options.map((i) => ({ label: i.label, ...i.apply ? { apply: i.apply } : {}, type: "keyword", info: i.info })), filter: false } : { from: t.from, to: t.to, options: t.options.map((i) => ({ label: i.label, type: "function", detail: qb(i.args), info: i.info })), filter: false } : null;
}
Kd({ override: [iO] });
function rO(n) {
  const e = new mh(n.cacheTtlMs), t = new mh(n.cacheTtlMs), i = new mh(n.cacheTtlMs);
  return async (r) => {
    const s = r.state.doc.toString();
    let o = null;
    try {
      o = zb(s, r.pos);
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
        const p = yh(h, f);
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
        const h = yh(f, a);
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
        const h = yh(f, a);
        return h !== f ? { label: f, apply: h, type: "variable" } : { label: f, type: "variable" };
      }), filter: true };
    } catch {
      return null;
    }
    return o.options.length === 0 ? null : o.kind === "keywords" ? { from: o.from, to: o.to, options: o.options.map((l) => ({ label: l.label, ...l.apply ? { apply: l.apply } : {}, type: "keyword", info: l.info })), filter: false } : { from: o.from, to: o.to, options: o.options.map((l) => ({ label: l.label, type: "function", detail: qb(l.args), info: l.info })), filter: false };
  };
}
function sO(n) {
  return [Gb, Kd({ override: [rO(n)] })];
}
const oO = /^[A-Za-z][A-Za-z0-9_]*$/;
function lO(n) {
  return !oO.test(n);
}
function yh(n, e) {
  const t = n.replace(/\\/g, "\\\\").replace(/`/g, "\\`");
  return e ? t + "`" : lO(n) ? "`" + t + "`" : n;
}
function aO(n) {
  if (!(!n || n.length === 0)) return n.map((e) => ({ name: e.name, apply(t) {
    t.dispatch({ changes: { from: e.from, to: e.to, insert: e.insert } });
  } }));
}
function cO(n) {
  const e = n.state.doc.toString();
  let t;
  try {
    t = Kb(e) ?? [];
  } catch {
    return [];
  }
  return t.map((i) => ({ from: i.from, to: Math.max(i.from + 1, i.to), severity: i.severity, message: i.help ? `${i.message}
${i.help}` : i.message, actions: aO(i.actions) }));
}
const fO = qE(cO);
function hO(n, e) {
  let t = 0, i = -1, r = e - 1;
  for (; r >= 0; ) {
    const m = n[r];
    if (m === '"') {
      for (r--; r >= 0; ) {
        if (n[r] === '"') {
          let b = 0, S = r - 1;
          for (; S >= 0 && n[S] === "\\"; ) b++, S--;
          if (b % 2 === 0) break;
        }
        r--;
      }
      r--;
      continue;
    }
    if (m === "/") {
      const b = r;
      let S = 1;
      for (r--; r >= 0; ) {
        if (n[r] === "/" && (r === 0 || n[r - 1] !== "\\")) {
          if (S++, r > 0 && n[r - 1] === "#") {
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
      (r < -1 || r >= 0 && S < 2) && (r = b - 1);
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
      for (let S = 0; m < e && S < 2; ) n[m] === "\\" ? m++ : n[m] === "/" && S++, m++;
      m--;
    }
  }
  return { fnLabel: f, openParenPos: i, activeParam: h };
}
function uO(n, e) {
  const t = document.createElement("div");
  t.className = "mpl-signature-help";
  const i = document.createElement("div");
  i.className = "mpl-signature-sig";
  const r = document.createElement("span");
  if (r.className = "mpl-signature-fn", r.textContent = n.label, i.appendChild(r), i.appendChild(document.createTextNode("(")), n.args.forEach((s, o) => {
    o > 0 && i.appendChild(document.createTextNode(", "));
    const l = document.createElement("span");
    l.className = o === e ? "mpl-signature-param active" : "mpl-signature-param", l.textContent = `${s.name}: ${go(s.type)}`, i.appendChild(l);
  }), i.appendChild(document.createTextNode(")")), t.appendChild(i), n.info) {
    const s = document.createElement("div");
    s.className = "mpl-signature-doc", s.textContent = n.info, t.appendChild(s);
  }
  return t;
}
function dO(n) {
  const e = n.selection.main.head, t = n.doc.toString(), i = hO(t, e);
  if (!i) return null;
  const r = Ub(i.fnLabel);
  return !r || r.args.length === 0 ? null : { pos: i.openParenPos, above: true, arrow: true, create() {
    return { dom: uO(r, i.activeParam) };
  } };
}
const pO = af.compute(["doc", "selection"], dO), gO = { filter: { description: "Filter time series by tag values", syntax: "| filter <tag> == <value>" }, where: { description: "Filter time series by tag values (alias for filter)", syntax: "| where <tag> == <value>" }, map: { description: "Apply a function to each data point", syntax: "| map <function>" }, group: { description: "Group time series by tags and aggregate", syntax: "| group by <tags> using <function>" }, align: { description: "Align time series to a regular time grid", syntax: "| align to <interval> using <function>" }, bucket: { description: "Bucket time series into histogram buckets", syntax: "| bucket by <tags> to <interval> using <function>(<specs>)" }, compute: { description: "Compute a new metric from two sources", syntax: "| compute <metric> using <function>" }, replace: { description: "Replace tag values using string operations", syntax: "| replace <tag> ~ #s/pattern/replacement/" }, join: { description: "Join two metric sources by tags", syntax: "| join <tags> from <metric_id> by <tags>" }, as: { description: "Rename the output metric", syntax: "| as <name>" }, set: { description: "Set query directives (time range, resolution)", syntax: "set <directive> = <value>;" }, by: { description: "Specify tags for grouping, bucketing, or joining" }, using: { description: "Specify the function to apply" }, to: { description: "Specify target time interval for align or bucket" }, over: { description: "Specify the window duration for alignment", syntax: "| align to <interval> over <window> using <function>" }, from: { description: "Specify the source metric for join" }, and: { description: "Logical AND in filter expressions" }, or: { description: "Logical OR in filter expressions" }, not: { description: "Logical NOT in filter expressions" } };
function mO(n, e) {
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
function yO(n) {
  const e = document.createElement("div");
  e.className = "mpl-hover-tooltip";
  const t = document.createElement("div");
  t.className = "mpl-hover-sig";
  const i = document.createElement("span");
  if (i.className = "mpl-hover-fn", i.textContent = n.label, t.appendChild(i), n.args.length > 0 && (t.appendChild(document.createTextNode("(")), n.args.forEach((r, s) => {
    s > 0 && t.appendChild(document.createTextNode(", "));
    const o = document.createElement("span");
    o.className = "mpl-hover-param", o.textContent = `${r.name}: ${go(r.type)}`, t.appendChild(o);
  }), t.appendChild(document.createTextNode(")"))), e.appendChild(t), n.info) {
    const r = document.createElement("div");
    r.className = "mpl-hover-doc", r.textContent = n.info, e.appendChild(r);
  }
  return e;
}
function vO(n, e) {
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
function bO(n, e, t) {
  const i = n.state.doc.toString(), r = mO(i, e);
  if (!r) return null;
  const s = Ub(r.text);
  if (s) return { pos: r.from, end: r.to, above: true, create() {
    return { dom: yO(s) };
  } };
  const o = gO[r.text];
  return o ? { pos: r.from, end: r.to, above: true, create() {
    return { dom: vO(r.text, o) };
  } } : null;
}
const wO = cv(bO, { hideOnChange: true });
var Ru = false, Pu = false, Ls = [], Bu = -1;
function xO(n) {
  SO(n);
}
function SO(n) {
  Ls.includes(n) || Ls.push(n), CO();
}
function kO(n) {
  let e = Ls.indexOf(n);
  e !== -1 && e > Bu && Ls.splice(e, 1);
}
function CO() {
  !Pu && !Ru && (Ru = true, queueMicrotask(MO));
}
function MO() {
  Ru = false, Pu = true;
  for (let n = 0; n < Ls.length; n++) Ls[n](), Bu = n;
  Ls.length = 0, Bu = -1, Pu = false;
}
var Io, Ks, No, Yb, Iu = true;
function AO(n) {
  Iu = false, n(), Iu = true;
}
function EO(n) {
  Io = n.reactive, No = n.release, Ks = (e) => n.effect(e, { scheduler: (t) => {
    Iu ? xO(t) : t();
  } }), Yb = n.raw;
}
function Lm(n) {
  Ks = n;
}
function TO(n) {
  let e = () => {
  };
  return [(i) => {
    let r = Ks(i);
    return n._x_effects || (n._x_effects = /* @__PURE__ */ new Set(), n._x_runEffects = () => {
      n._x_effects.forEach((s) => s());
    }), n._x_effects.add(r), e = () => {
      r !== void 0 && (n._x_effects.delete(r), No(r));
    }, r;
  }, () => {
    e();
  }];
}
function Jb(n, e) {
  let t = true, i, r = Ks(() => {
    let s = n();
    JSON.stringify(s), t ? i = s : queueMicrotask(() => {
      e(s, i), i = s;
    }), t = false;
  });
  return () => No(r);
}
var Qb = [], Xb = [], Zb = [];
function OO(n) {
  Zb.push(n);
}
function Ud(n, e) {
  typeof e == "function" ? (n._x_cleanups || (n._x_cleanups = []), n._x_cleanups.push(e)) : (e = n, Xb.push(e));
}
function ew(n) {
  Qb.push(n);
}
function tw(n, e, t) {
  n._x_attributeCleanups || (n._x_attributeCleanups = {}), n._x_attributeCleanups[e] || (n._x_attributeCleanups[e] = []), n._x_attributeCleanups[e].push(t);
}
function nw(n, e) {
  n._x_attributeCleanups && Object.entries(n._x_attributeCleanups).forEach(([t, i]) => {
    (e === void 0 || e.includes(t)) && (i.forEach((r) => r()), delete n._x_attributeCleanups[t]);
  });
}
function _O(n) {
  var _a2, _b2;
  for ((_a2 = n._x_effects) == null ? void 0 : _a2.forEach(kO); (_b2 = n._x_cleanups) == null ? void 0 : _b2.length; ) n._x_cleanups.pop()();
}
var Gd = new MutationObserver(Xd), Yd = false;
function Jd() {
  Gd.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true }), Yd = true;
}
function iw() {
  LO(), Gd.disconnect(), Yd = false;
}
var fl = [];
function LO() {
  let n = Gd.takeRecords();
  fl.push(() => n.length > 0 && Xd(n));
  let e = fl.length;
  queueMicrotask(() => {
    if (fl.length === e) for (; fl.length > 0; ) fl.shift()();
  });
}
function At(n) {
  if (!Yd) return n();
  iw();
  let e = n();
  return Jd(), e;
}
var Qd = false, Yc = [];
function DO() {
  Qd = true;
}
function RO() {
  Qd = false, Xd(Yc), Yc = [];
}
function Xd(n) {
  if (Qd) {
    Yc = Yc.concat(n);
    return;
  }
  let e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (let s = 0; s < n.length; s++) if (!n[s].target._x_ignoreMutationObserver && (n[s].type === "childList" && (n[s].addedNodes.forEach((o) => o.nodeType === 1 && e.add(o)), n[s].removedNodes.forEach((o) => o.nodeType === 1 && t.add(o))), n[s].type === "attributes")) {
    let o = n[s].target, l = n[s].attributeName, a = n[s].oldValue, f = () => {
      i.has(o) || i.set(o, []), i.get(o).push({ name: l, value: o.getAttribute(l) });
    }, h = () => {
      r.has(o) || r.set(o, []), r.get(o).push(l);
    };
    o.hasAttribute(l) && a === null ? f() : o.hasAttribute(l) ? (h(), f()) : h();
  }
  r.forEach((s, o) => {
    nw(o, s);
  }), i.forEach((s, o) => {
    Qb.forEach((l) => l(o, s));
  });
  for (let s of t) e.has(s) || Xb.forEach((o) => o(s));
  e.forEach((s) => {
    s._x_ignoreSelf = true, s._x_ignore = true;
  });
  for (let s of e) t.has(s) || s.isConnected && (delete s._x_ignoreSelf, delete s._x_ignore, Zb.forEach((o) => o(s)), s._x_ignore = true, s._x_ignoreSelf = true);
  e.forEach((s) => {
    delete s._x_ignoreSelf, delete s._x_ignore;
  }), e = null, t = null, i = null, r = null;
}
function rw(n) {
  return ha(Mo(n));
}
function fa(n, e, t) {
  return n._x_dataStack = [e, ...Mo(t || n)], () => {
    n._x_dataStack = n._x_dataStack.filter((i) => i !== e);
  };
}
function Mo(n) {
  return n._x_dataStack ? n._x_dataStack : typeof ShadowRoot == "function" && n instanceof ShadowRoot ? Mo(n.host) : n.parentNode ? Mo(n.parentNode) : [];
}
function ha(n) {
  return new Proxy({ objects: n }, PO);
}
var PO = { ownKeys({ objects: n }) {
  return Array.from(new Set(n.flatMap((e) => Object.keys(e))));
}, has({ objects: n }, e) {
  return e == Symbol.unscopables ? false : n.some((t) => Object.prototype.hasOwnProperty.call(t, e) || Reflect.has(t, e));
}, get({ objects: n }, e, t) {
  return e == "toJSON" ? BO : Reflect.get(n.find((i) => Reflect.has(i, e)) || {}, e, t);
}, set({ objects: n }, e, t, i) {
  const r = n.find((o) => Object.prototype.hasOwnProperty.call(o, e)) || n[n.length - 1], s = Object.getOwnPropertyDescriptor(r, e);
  return (s == null ? void 0 : s.set) && (s == null ? void 0 : s.get) ? s.set.call(i, t) || true : Reflect.set(r, e, t);
} };
function BO() {
  return Reflect.ownKeys(this).reduce((e, t) => (e[t] = Reflect.get(this, t), e), {});
}
function sw(n) {
  let e = (i) => typeof i == "object" && !Array.isArray(i) && i !== null, t = (i, r = "") => {
    Object.entries(Object.getOwnPropertyDescriptors(i)).forEach(([s, { value: o, enumerable: l }]) => {
      if (l === false || o === void 0 || typeof o == "object" && o !== null && o.__v_skip) return;
      let a = r === "" ? s : `${r}.${s}`;
      typeof o == "object" && o !== null && o._x_interceptor ? i[s] = o.initialize(n, a, s) : e(o) && o !== i && !(o instanceof Element) && t(o, a);
    });
  };
  return t(n);
}
function ow(n, e = () => {
}) {
  let t = { initialValue: void 0, _x_interceptor: true, initialize(i, r, s) {
    return n(this.initialValue, () => IO(i, r), (o) => Nu(i, r, o), r, s);
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
function IO(n, e) {
  return e.split(".").reduce((t, i) => t[i], n);
}
function Nu(n, e, t) {
  if (typeof e == "string" && (e = e.split(".")), e.length === 1) n[e[0]] = t;
  else {
    if (e.length === 0) throw error;
    return n[e[0]] || (n[e[0]] = {}), Nu(n[e[0]], e.slice(1), t);
  }
}
var lw = {};
function Vi(n, e) {
  lw[n] = e;
}
function Fu(n, e) {
  let t = NO(e);
  return Object.entries(lw).forEach(([i, r]) => {
    Object.defineProperty(n, `$${i}`, { get() {
      return r(e, t);
    }, enumerable: false });
  }), n;
}
function NO(n) {
  let [e, t] = dw(n), i = { interceptor: ow, ...e };
  return Ud(n, t), i;
}
function FO(n, e, t, ...i) {
  try {
    return t(...i);
  } catch (r) {
    Zl(r, n, e);
  }
}
function Zl(n, e, t = void 0) {
  n = Object.assign(n ?? { message: "No error message given." }, { el: e, expression: t }), console.warn(`Alpine Expression Error: ${n.message}

${t ? 'Expression: "' + t + `"

` : ""}`, e), setTimeout(() => {
    throw n;
  }, 0);
}
var wc = true;
function aw(n) {
  let e = wc;
  wc = false;
  let t = n();
  return wc = e, t;
}
function Ds(n, e, t = {}) {
  let i;
  return Nn(n, e)((r) => i = r, t), i;
}
function Nn(...n) {
  return cw(...n);
}
var cw = fw;
function HO(n) {
  cw = n;
}
function fw(n, e) {
  let t = {};
  Fu(t, n);
  let i = [t, ...Mo(n)], r = typeof e == "function" ? VO(i, e) : $O(i, e, n);
  return FO.bind(null, n, e, r);
}
function VO(n, e) {
  return (t = () => {
  }, { scope: i = {}, params: r = [] } = {}) => {
    let s = e.apply(ha([i, ...n]), r);
    Jc(t, s);
  };
}
var vh = {};
function WO(n, e) {
  if (vh[n]) return vh[n];
  let t = Object.getPrototypeOf(async function() {
  }).constructor, i = /^[\n\s]*if.*\(.*\)/.test(n.trim()) || /^(let|const)\s/.test(n.trim()) ? `(async()=>{ ${n} })()` : n, s = (() => {
    try {
      let o = new t(["__self", "scope"], `with (scope) { __self.result = ${i} }; __self.finished = true; return __self.result;`);
      return Object.defineProperty(o, "name", { value: `[Alpine] ${n}` }), o;
    } catch (o) {
      return Zl(o, e, n), Promise.resolve();
    }
  })();
  return vh[n] = s, s;
}
function $O(n, e, t) {
  let i = WO(e, t);
  return (r = () => {
  }, { scope: s = {}, params: o = [] } = {}) => {
    i.result = void 0, i.finished = false;
    let l = ha([s, ...n]);
    if (typeof i == "function") {
      let a = i(i, l).catch((f) => Zl(f, t, e));
      i.finished ? (Jc(r, i.result, l, o, t), i.result = void 0) : a.then((f) => {
        Jc(r, f, l, o, t);
      }).catch((f) => Zl(f, t, e)).finally(() => i.result = void 0);
    }
  };
}
function Jc(n, e, t, i, r) {
  if (wc && typeof e == "function") {
    let s = e.apply(t, i);
    s instanceof Promise ? s.then((o) => Jc(n, o, t, i)).catch((o) => Zl(o, r, e)) : n(s);
  } else typeof e == "object" && e instanceof Promise ? e.then((s) => n(s)) : n(e);
}
var Zd = "x-";
function Fo(n = "") {
  return Zd + n;
}
function zO(n) {
  Zd = n;
}
var Qc = {};
function zt(n, e) {
  return Qc[n] = e, { before(t) {
    if (!Qc[t]) {
      console.warn(String.raw`Cannot find directive \`${t}\`. \`${n}\` will use the default order of execution`);
      return;
    }
    const i = Ts.indexOf(t);
    Ts.splice(i >= 0 ? i : Ts.indexOf("DEFAULT"), 0, n);
  } };
}
function KO(n) {
  return Object.keys(Qc).includes(n);
}
function ep(n, e, t) {
  if (e = Array.from(e), n._x_virtualDirectives) {
    let s = Object.entries(n._x_virtualDirectives).map(([l, a]) => ({ name: l, value: a })), o = hw(s);
    s = s.map((l) => o.find((a) => a.name === l.name) ? { name: `x-bind:${l.name}`, value: `"${l.value}"` } : l), e = e.concat(s);
  }
  let i = {};
  return e.map(mw((s, o) => i[s] = o)).filter(vw).map(UO(i, t)).sort(GO).map((s) => qO(n, s));
}
function hw(n) {
  return Array.from(n).map(mw()).filter((e) => !vw(e));
}
var Hu = false, Sl = /* @__PURE__ */ new Map(), uw = Symbol();
function jO(n) {
  Hu = true;
  let e = Symbol();
  uw = e, Sl.set(e, []);
  let t = () => {
    for (; Sl.get(e).length; ) Sl.get(e).shift()();
    Sl.delete(e);
  }, i = () => {
    Hu = false, t();
  };
  n(t), i();
}
function dw(n) {
  let e = [], t = (l) => e.push(l), [i, r] = TO(n);
  return e.push(r), [{ Alpine: da, effect: i, cleanup: t, evaluateLater: Nn.bind(Nn, n), evaluate: Ds.bind(Ds, n) }, () => e.forEach((l) => l())];
}
function qO(n, e) {
  let t = () => {
  }, i = Qc[e.type] || t, [r, s] = dw(n);
  tw(n, e.original, s);
  let o = () => {
    n._x_ignore || n._x_ignoreSelf || (i.inline && i.inline(n, e, r), i = i.bind(i, n, e, r), Hu ? Sl.get(uw).push(i) : i());
  };
  return o.runCleanups = s, o;
}
var pw = (n, e) => ({ name: t, value: i }) => (t.startsWith(n) && (t = t.replace(n, e)), { name: t, value: i }), gw = (n) => n;
function mw(n = () => {
}) {
  return ({ name: e, value: t }) => {
    let { name: i, value: r } = yw.reduce((s, o) => o(s), { name: e, value: t });
    return i !== e && n(i, e), { name: i, value: r };
  };
}
var yw = [];
function tp(n) {
  yw.push(n);
}
function vw({ name: n }) {
  return bw().test(n);
}
var bw = () => new RegExp(`^${Zd}([^:^.]+)\\b`);
function UO(n, e) {
  return ({ name: t, value: i }) => {
    let r = t.match(bw()), s = t.match(/:([a-zA-Z0-9\-_:]+)/), o = t.match(/\.[^.\]]+(?=[^\]]*$)/g) || [], l = e || n[t] || t;
    return { type: r ? r[1] : null, value: s ? s[1] : null, modifiers: o.map((a) => a.replace(".", "")), expression: i, original: l };
  };
}
var Vu = "DEFAULT", Ts = ["ignore", "ref", "data", "id", "anchor", "bind", "init", "for", "model", "modelable", "transition", "show", "if", Vu, "teleport"];
function GO(n, e) {
  let t = Ts.indexOf(n.type) === -1 ? Vu : n.type, i = Ts.indexOf(e.type) === -1 ? Vu : e.type;
  return Ts.indexOf(t) - Ts.indexOf(i);
}
function Bl(n, e, t = {}) {
  n.dispatchEvent(new CustomEvent(e, { detail: t, bubbles: true, composed: true, cancelable: true }));
}
function $s(n, e) {
  if (typeof ShadowRoot == "function" && n instanceof ShadowRoot) {
    Array.from(n.children).forEach((r) => $s(r, e));
    return;
  }
  let t = false;
  if (e(n, () => t = true), t) return;
  let i = n.firstElementChild;
  for (; i; ) $s(i, e), i = i.nextElementSibling;
}
function yi(n, ...e) {
  console.warn(`Alpine Warning: ${n}`, ...e);
}
var Dm = false;
function YO() {
  Dm && yi("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."), Dm = true, document.body || yi("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"), Bl(document, "alpine:init"), Bl(document, "alpine:initializing"), Jd(), OO((e) => Er(e, $s)), Ud((e) => Ho(e)), ew((e, t) => {
    ep(e, t).forEach((i) => i());
  });
  let n = (e) => !yf(e.parentElement, true);
  Array.from(document.querySelectorAll(Sw().join(","))).filter(n).forEach((e) => {
    Er(e);
  }), Bl(document, "alpine:initialized"), setTimeout(() => {
    XO();
  });
}
var np = [], ww = [];
function xw() {
  return np.map((n) => n());
}
function Sw() {
  return np.concat(ww).map((n) => n());
}
function kw(n) {
  np.push(n);
}
function Cw(n) {
  ww.push(n);
}
function yf(n, e = false) {
  return ua(n, (t) => {
    if ((e ? Sw() : xw()).some((r) => t.matches(r))) return true;
  });
}
function ua(n, e) {
  if (n) {
    if (e(n)) return n;
    if (n._x_teleportBack && (n = n._x_teleportBack), !!n.parentElement) return ua(n.parentElement, e);
  }
}
function JO(n) {
  return xw().some((e) => n.matches(e));
}
var Mw = [];
function QO(n) {
  Mw.push(n);
}
function Er(n, e = $s, t = () => {
}) {
  jO(() => {
    e(n, (i, r) => {
      t(i, r), Mw.forEach((s) => s(i, r)), ep(i, i.attributes).forEach((s) => s()), i._x_ignore && r();
    });
  });
}
function Ho(n, e = $s) {
  e(n, (t) => {
    _O(t), nw(t);
  });
}
function XO() {
  [["ui", "dialog", ["[x-dialog], [x-popover]"]], ["anchor", "anchor", ["[x-anchor]"]], ["sort", "sort", ["[x-sort]"]]].forEach(([e, t, i]) => {
    KO(t) || i.some((r) => {
      if (document.querySelector(r)) return yi(`found "${r}", but missing ${e} plugin`), true;
    });
  });
}
var Wu = [], ip = false;
function rp(n = () => {
}) {
  return queueMicrotask(() => {
    ip || setTimeout(() => {
      $u();
    });
  }), new Promise((e) => {
    Wu.push(() => {
      n(), e();
    });
  });
}
function $u() {
  for (ip = false; Wu.length; ) Wu.shift()();
}
function ZO() {
  ip = true;
}
function sp(n, e) {
  return Array.isArray(e) ? Rm(n, e.join(" ")) : typeof e == "object" && e !== null ? e_(n, e) : typeof e == "function" ? sp(n, e()) : Rm(n, e);
}
function Rm(n, e) {
  let t = (r) => r.split(" ").filter((s) => !n.classList.contains(s)).filter(Boolean), i = (r) => (n.classList.add(...r), () => {
    n.classList.remove(...r);
  });
  return e = e === true ? e = "" : e || "", i(t(e));
}
function e_(n, e) {
  let t = (l) => l.split(" ").filter(Boolean), i = Object.entries(e).flatMap(([l, a]) => a ? t(l) : false).filter(Boolean), r = Object.entries(e).flatMap(([l, a]) => a ? false : t(l)).filter(Boolean), s = [], o = [];
  return r.forEach((l) => {
    n.classList.contains(l) && (n.classList.remove(l), o.push(l));
  }), i.forEach((l) => {
    n.classList.contains(l) || (n.classList.add(l), s.push(l));
  }), () => {
    o.forEach((l) => n.classList.add(l)), s.forEach((l) => n.classList.remove(l));
  };
}
function vf(n, e) {
  return typeof e == "object" && e !== null ? t_(n, e) : n_(n, e);
}
function t_(n, e) {
  let t = {};
  return Object.entries(e).forEach(([i, r]) => {
    t[i] = n.style[i], i.startsWith("--") || (i = i_(i)), n.style.setProperty(i, r);
  }), setTimeout(() => {
    n.style.length === 0 && n.removeAttribute("style");
  }), () => {
    vf(n, t);
  };
}
function n_(n, e) {
  let t = n.getAttribute("style", e);
  return n.setAttribute("style", e), () => {
    n.setAttribute("style", t || "");
  };
}
function i_(n) {
  return n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function zu(n, e = () => {
}) {
  let t = false;
  return function() {
    t ? e.apply(this, arguments) : (t = true, n.apply(this, arguments));
  };
}
zt("transition", (n, { value: e, modifiers: t, expression: i }, { evaluate: r }) => {
  typeof i == "function" && (i = r(i)), i !== false && (!i || typeof i == "boolean" ? s_(n, t, e) : r_(n, i, e));
});
function r_(n, e, t) {
  Aw(n, sp, ""), { enter: (r) => {
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
function s_(n, e, t) {
  Aw(n, vf);
  let i = !e.includes("in") && !e.includes("out") && !t, r = i || e.includes("in") || ["enter"].includes(t), s = i || e.includes("out") || ["leave"].includes(t);
  e.includes("in") && !i && (e = e.filter((_, R) => R < e.indexOf("out"))), e.includes("out") && !i && (e = e.filter((_, R) => R > e.indexOf("out")));
  let o = !e.includes("opacity") && !e.includes("scale"), l = o || e.includes("opacity"), a = o || e.includes("scale"), f = l ? 0 : 1, h = a ? hl(e, "scale", 95) / 100 : 1, p = hl(e, "delay", 0) / 1e3, m = hl(e, "origin", "center"), b = "opacity, transform", S = hl(e, "duration", 150) / 1e3, M = hl(e, "duration", 75) / 1e3, A = "cubic-bezier(0.4, 0.0, 0.2, 1)";
  r && (n._x_transition.enter.during = { transformOrigin: m, transitionDelay: `${p}s`, transitionProperty: b, transitionDuration: `${S}s`, transitionTimingFunction: A }, n._x_transition.enter.start = { opacity: f, transform: `scale(${h})` }, n._x_transition.enter.end = { opacity: 1, transform: "scale(1)" }), s && (n._x_transition.leave.during = { transformOrigin: m, transitionDelay: `${p}s`, transitionProperty: b, transitionDuration: `${M}s`, transitionTimingFunction: A }, n._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }, n._x_transition.leave.end = { opacity: f, transform: `scale(${h})` });
}
function Aw(n, e, t = {}) {
  n._x_transition || (n._x_transition = { enter: { during: t, start: t, end: t }, leave: { during: t, start: t, end: t }, in(i = () => {
  }, r = () => {
  }) {
    Ku(n, e, { during: this.enter.during, start: this.enter.start, end: this.enter.end }, i, r);
  }, out(i = () => {
  }, r = () => {
  }) {
    Ku(n, e, { during: this.leave.during, start: this.leave.start, end: this.leave.end }, i, r);
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
    let o = Ew(n);
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
function Ew(n) {
  let e = n.parentNode;
  if (e) return e._x_hidePromise ? e : Ew(e);
}
function Ku(n, e, { during: t, start: i, end: r } = {}, s = () => {
}, o = () => {
}) {
  if (n._x_transitioning && n._x_transitioning.cancel(), Object.keys(t).length === 0 && Object.keys(i).length === 0 && Object.keys(r).length === 0) {
    s(), o();
    return;
  }
  let l, a, f;
  o_(n, { start() {
    l = e(n, i);
  }, during() {
    a = e(n, t);
  }, before: s, end() {
    l(), f = e(n, r);
  }, after: o, cleanup() {
    a(), f();
  } });
}
function o_(n, e) {
  let t, i, r, s = zu(() => {
    At(() => {
      t = true, i || e.before(), r || (e.end(), $u()), e.after(), n.isConnected && e.cleanup(), delete n._x_transitioning;
    });
  });
  n._x_transitioning = { beforeCancels: [], beforeCancel(o) {
    this.beforeCancels.push(o);
  }, cancel: zu(function() {
    for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
    s();
  }), finish: s }, At(() => {
    e.start(), e.during();
  }), ZO(), requestAnimationFrame(() => {
    if (t) return;
    let o = Number(getComputedStyle(n).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3, l = Number(getComputedStyle(n).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
    o === 0 && (o = Number(getComputedStyle(n).animationDuration.replace("s", "")) * 1e3), At(() => {
      e.before();
    }), i = true, requestAnimationFrame(() => {
      t || (At(() => {
        e.end();
      }), $u(), setTimeout(n._x_transitioning.finish, o + l), r = true);
    });
  });
}
function hl(n, e, t) {
  if (n.indexOf(e) === -1) return t;
  const i = n[n.indexOf(e) + 1];
  if (!i || e === "scale" && isNaN(i)) return t;
  if (e === "duration" || e === "delay") {
    let r = i.match(/([0-9]+)ms/);
    if (r) return r[1];
  }
  return e === "origin" && ["top", "right", "left", "center", "bottom"].includes(n[n.indexOf(e) + 2]) ? [i, n[n.indexOf(e) + 2]].join(" ") : i;
}
var is = false;
function as(n, e = () => {
}) {
  return (...t) => is ? e(...t) : n(...t);
}
function l_(n) {
  return (...e) => is && n(...e);
}
var Tw = [];
function bf(n) {
  Tw.push(n);
}
function a_(n, e) {
  Tw.forEach((t) => t(n, e)), is = true, Ow(() => {
    Er(e, (t, i) => {
      i(t, () => {
      });
    });
  }), is = false;
}
var ju = false;
function c_(n, e) {
  e._x_dataStack || (e._x_dataStack = n._x_dataStack), is = true, ju = true, Ow(() => {
    f_(e);
  }), is = false, ju = false;
}
function f_(n) {
  let e = false;
  Er(n, (i, r) => {
    $s(i, (s, o) => {
      if (e && JO(s)) return o();
      e = true, r(s, o);
    });
  });
}
function Ow(n) {
  let e = Ks;
  Lm((t, i) => {
    let r = e(t);
    return No(r), () => {
    };
  }), n(), Lm(e);
}
function _w(n, e, t, i = []) {
  switch (n._x_bindings || (n._x_bindings = Io({})), n._x_bindings[e] = t, e = i.includes("camel") ? v_(e) : e, e) {
    case "value":
      h_(n, t);
      break;
    case "style":
      d_(n, t);
      break;
    case "class":
      u_(n, t);
      break;
    case "selected":
    case "checked":
      p_(n, e, t);
      break;
    default:
      Lw(n, e, t);
      break;
  }
}
function h_(n, e) {
  if (Pw(n)) n.attributes.value === void 0 && (n.value = e), window.fromModel && (typeof e == "boolean" ? n.checked = xc(n.value) === e : n.checked = Pm(n.value, e));
  else if (op(n)) Number.isInteger(e) ? n.value = e : !Array.isArray(e) && typeof e != "boolean" && ![null, void 0].includes(e) ? n.value = String(e) : Array.isArray(e) ? n.checked = e.some((t) => Pm(t, n.value)) : n.checked = !!e;
  else if (n.tagName === "SELECT") y_(n, e);
  else {
    if (n.value === e) return;
    n.value = e === void 0 ? "" : e;
  }
}
function u_(n, e) {
  n._x_undoAddedClasses && n._x_undoAddedClasses(), n._x_undoAddedClasses = sp(n, e);
}
function d_(n, e) {
  n._x_undoAddedStyles && n._x_undoAddedStyles(), n._x_undoAddedStyles = vf(n, e);
}
function p_(n, e, t) {
  Lw(n, e, t), m_(n, e, t);
}
function Lw(n, e, t) {
  [null, void 0, false].includes(t) && w_(e) ? n.removeAttribute(e) : (Dw(e) && (t = e), g_(n, e, t));
}
function g_(n, e, t) {
  n.getAttribute(e) != t && n.setAttribute(e, t);
}
function m_(n, e, t) {
  n[e] !== t && (n[e] = t);
}
function y_(n, e) {
  const t = [].concat(e).map((i) => i + "");
  Array.from(n.options).forEach((i) => {
    i.selected = t.includes(i.value);
  });
}
function v_(n) {
  return n.toLowerCase().replace(/-(\w)/g, (e, t) => t.toUpperCase());
}
function Pm(n, e) {
  return n == e;
}
function xc(n) {
  return [1, "1", "true", "on", "yes", true].includes(n) ? true : [0, "0", "false", "off", "no", false].includes(n) ? false : n ? !!n : null;
}
var b_ = /* @__PURE__ */ new Set(["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "inert", "ismap", "itemscope", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected", "shadowrootclonable", "shadowrootdelegatesfocus", "shadowrootserializable"]);
function Dw(n) {
  return b_.has(n);
}
function w_(n) {
  return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(n);
}
function x_(n, e, t) {
  return n._x_bindings && n._x_bindings[e] !== void 0 ? n._x_bindings[e] : Rw(n, e, t);
}
function S_(n, e, t, i = true) {
  if (n._x_bindings && n._x_bindings[e] !== void 0) return n._x_bindings[e];
  if (n._x_inlineBindings && n._x_inlineBindings[e] !== void 0) {
    let r = n._x_inlineBindings[e];
    return r.extract = i, aw(() => Ds(n, r.expression));
  }
  return Rw(n, e, t);
}
function Rw(n, e, t) {
  let i = n.getAttribute(e);
  return i === null ? typeof t == "function" ? t() : t : i === "" ? true : Dw(e) ? !![e, "true"].includes(i) : i;
}
function op(n) {
  return n.type === "checkbox" || n.localName === "ui-checkbox" || n.localName === "ui-switch";
}
function Pw(n) {
  return n.type === "radio" || n.localName === "ui-radio";
}
function Bw(n, e) {
  var t;
  return function() {
    var i = this, r = arguments, s = function() {
      t = null, n.apply(i, r);
    };
    clearTimeout(t), t = setTimeout(s, e);
  };
}
function Iw(n, e) {
  let t;
  return function() {
    let i = this, r = arguments;
    t || (n.apply(i, r), t = true, setTimeout(() => t = false, e));
  };
}
function Nw({ get: n, set: e }, { get: t, set: i }) {
  let r = true, s, o = Ks(() => {
    let l = n(), a = t();
    if (r) i(bh(l)), r = false;
    else {
      let f = JSON.stringify(l), h = JSON.stringify(a);
      f !== s ? i(bh(l)) : f !== h && e(bh(a));
    }
    s = JSON.stringify(n()), JSON.stringify(t());
  });
  return () => {
    No(o);
  };
}
function bh(n) {
  return typeof n == "object" ? JSON.parse(JSON.stringify(n)) : n;
}
function k_(n) {
  (Array.isArray(n) ? n : [n]).forEach((t) => t(da));
}
var ws = {}, Bm = false;
function C_(n, e) {
  if (Bm || (ws = Io(ws), Bm = true), e === void 0) return ws[n];
  ws[n] = e, sw(ws[n]), typeof e == "object" && e !== null && e.hasOwnProperty("init") && typeof e.init == "function" && ws[n].init();
}
function M_() {
  return ws;
}
var Fw = {};
function A_(n, e) {
  let t = typeof e != "function" ? () => e : e;
  return n instanceof Element ? Hw(n, t()) : (Fw[n] = t, () => {
  });
}
function E_(n) {
  return Object.entries(Fw).forEach(([e, t]) => {
    Object.defineProperty(n, e, { get() {
      return (...i) => t(...i);
    } });
  }), n;
}
function Hw(n, e, t) {
  let i = [];
  for (; i.length; ) i.pop()();
  let r = Object.entries(e).map(([o, l]) => ({ name: o, value: l })), s = hw(r);
  return r = r.map((o) => s.find((l) => l.name === o.name) ? { name: `x-bind:${o.name}`, value: `"${o.value}"` } : o), ep(n, r, t).map((o) => {
    i.push(o.runCleanups), o();
  }), () => {
    for (; i.length; ) i.pop()();
  };
}
var Vw = {};
function T_(n, e) {
  Vw[n] = e;
}
function O_(n, e) {
  return Object.entries(Vw).forEach(([t, i]) => {
    Object.defineProperty(n, t, { get() {
      return (...r) => i.bind(e)(...r);
    }, enumerable: false });
  }), n;
}
var __ = { get reactive() {
  return Io;
}, get release() {
  return No;
}, get effect() {
  return Ks;
}, get raw() {
  return Yb;
}, version: "3.14.3", flushAndStopDeferringMutations: RO, dontAutoEvaluateFunctions: aw, disableEffectScheduling: AO, startObservingMutations: Jd, stopObservingMutations: iw, setReactivityEngine: EO, onAttributeRemoved: tw, onAttributesAdded: ew, closestDataStack: Mo, skipDuringClone: as, onlyDuringClone: l_, addRootSelector: kw, addInitSelector: Cw, interceptClone: bf, addScopeToNode: fa, deferMutations: DO, mapAttributes: tp, evaluateLater: Nn, interceptInit: QO, setEvaluator: HO, mergeProxies: ha, extractProp: S_, findClosest: ua, onElRemoved: Ud, closestRoot: yf, destroyTree: Ho, interceptor: ow, transition: Ku, setStyles: vf, mutateDom: At, directive: zt, entangle: Nw, throttle: Iw, debounce: Bw, evaluate: Ds, initTree: Er, nextTick: rp, prefixed: Fo, prefix: zO, plugin: k_, magic: Vi, store: C_, start: YO, clone: c_, cloneNode: a_, bound: x_, $data: rw, watch: Jb, walk: $s, data: T_, bind: A_ }, da = __;
function L_(n, e) {
  const t = /* @__PURE__ */ Object.create(null), i = n.split(",");
  for (let r = 0; r < i.length; r++) t[i[r]] = true;
  return (r) => !!t[r];
}
var D_ = Object.freeze({}), R_ = Object.prototype.hasOwnProperty, wf = (n, e) => R_.call(n, e), Rs = Array.isArray, Il = (n) => Ww(n) === "[object Map]", P_ = (n) => typeof n == "string", lp = (n) => typeof n == "symbol", xf = (n) => n !== null && typeof n == "object", B_ = Object.prototype.toString, Ww = (n) => B_.call(n), $w = (n) => Ww(n).slice(8, -1), ap = (n) => P_(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, I_ = (n) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t) => e[t] || (e[t] = n(t));
}, N_ = I_((n) => n.charAt(0).toUpperCase() + n.slice(1)), zw = (n, e) => n !== e && (n === n || e === e), qu = /* @__PURE__ */ new WeakMap(), ul = [], tr, Ps = Symbol("iterate"), Uu = Symbol("Map key iterate");
function F_(n) {
  return n && n._isEffect === true;
}
function H_(n, e = D_) {
  F_(n) && (n = n.raw);
  const t = $_(n, e);
  return e.lazy || t(), t;
}
function V_(n) {
  n.active && (Kw(n), n.options.onStop && n.options.onStop(), n.active = false);
}
var W_ = 0;
function $_(n, e) {
  const t = function() {
    if (!t.active) return n();
    if (!ul.includes(t)) {
      Kw(t);
      try {
        return K_(), ul.push(t), tr = t, n();
      } finally {
        ul.pop(), jw(), tr = ul[ul.length - 1];
      }
    }
  };
  return t.id = W_++, t.allowRecurse = !!e.allowRecurse, t._isEffect = true, t.active = true, t.raw = n, t.deps = [], t.options = e, t;
}
function Kw(n) {
  const { deps: e } = n;
  if (e.length) {
    for (let t = 0; t < e.length; t++) e[t].delete(n);
    e.length = 0;
  }
}
var Ao = true, cp = [];
function z_() {
  cp.push(Ao), Ao = false;
}
function K_() {
  cp.push(Ao), Ao = true;
}
function jw() {
  const n = cp.pop();
  Ao = n === void 0 ? true : n;
}
function Ii(n, e, t) {
  if (!Ao || tr === void 0) return;
  let i = qu.get(n);
  i || qu.set(n, i = /* @__PURE__ */ new Map());
  let r = i.get(t);
  r || i.set(t, r = /* @__PURE__ */ new Set()), r.has(tr) || (r.add(tr), tr.deps.push(r), tr.options.onTrack && tr.options.onTrack({ effect: tr, target: n, type: e, key: t }));
}
function rs(n, e, t, i, r, s) {
  const o = qu.get(n);
  if (!o) return;
  const l = /* @__PURE__ */ new Set(), a = (h) => {
    h && h.forEach((p) => {
      (p !== tr || p.allowRecurse) && l.add(p);
    });
  };
  if (e === "clear") o.forEach(a);
  else if (t === "length" && Rs(n)) o.forEach((h, p) => {
    (p === "length" || p >= i) && a(h);
  });
  else switch (t !== void 0 && a(o.get(t)), e) {
    case "add":
      Rs(n) ? ap(t) && a(o.get("length")) : (a(o.get(Ps)), Il(n) && a(o.get(Uu)));
      break;
    case "delete":
      Rs(n) || (a(o.get(Ps)), Il(n) && a(o.get(Uu)));
      break;
    case "set":
      Il(n) && a(o.get(Ps));
      break;
  }
  const f = (h) => {
    h.options.onTrigger && h.options.onTrigger({ effect: h, target: n, key: t, type: e, newValue: i, oldValue: r, oldTarget: s }), h.options.scheduler ? h.options.scheduler(h) : h();
  };
  l.forEach(f);
}
var j_ = L_("__proto__,__v_isRef,__isVue"), qw = new Set(Object.getOwnPropertyNames(Symbol).map((n) => Symbol[n]).filter(lp)), q_ = Uw(), U_ = Uw(true), Im = G_();
function G_() {
  const n = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    n[e] = function(...t) {
      const i = xt(this);
      for (let s = 0, o = this.length; s < o; s++) Ii(i, "get", s + "");
      const r = i[e](...t);
      return r === -1 || r === false ? i[e](...t.map(xt)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    n[e] = function(...t) {
      z_();
      const i = xt(this)[e].apply(this, t);
      return jw(), i;
    };
  }), n;
}
function Uw(n = false, e = false) {
  return function(i, r, s) {
    if (r === "__v_isReactive") return !n;
    if (r === "__v_isReadonly") return n;
    if (r === "__v_raw" && s === (n ? e ? a2 : Qw : e ? l2 : Jw).get(i)) return i;
    const o = Rs(i);
    if (!n && o && wf(Im, r)) return Reflect.get(Im, r, s);
    const l = Reflect.get(i, r, s);
    return (lp(r) ? qw.has(r) : j_(r)) || (n || Ii(i, "get", r), e) ? l : Gu(l) ? !o || !ap(r) ? l.value : l : xf(l) ? n ? Xw(l) : dp(l) : l;
  };
}
var Y_ = J_();
function J_(n = false) {
  return function(t, i, r, s) {
    let o = t[i];
    if (!n && (r = xt(r), o = xt(o), !Rs(t) && Gu(o) && !Gu(r))) return o.value = r, true;
    const l = Rs(t) && ap(i) ? Number(i) < t.length : wf(t, i), a = Reflect.set(t, i, r, s);
    return t === xt(s) && (l ? zw(r, o) && rs(t, "set", i, r, o) : rs(t, "add", i, r)), a;
  };
}
function Q_(n, e) {
  const t = wf(n, e), i = n[e], r = Reflect.deleteProperty(n, e);
  return r && t && rs(n, "delete", e, void 0, i), r;
}
function X_(n, e) {
  const t = Reflect.has(n, e);
  return (!lp(e) || !qw.has(e)) && Ii(n, "has", e), t;
}
function Z_(n) {
  return Ii(n, "iterate", Rs(n) ? "length" : Ps), Reflect.ownKeys(n);
}
var e2 = { get: q_, set: Y_, deleteProperty: Q_, has: X_, ownKeys: Z_ }, t2 = { get: U_, set(n, e) {
  return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`, n), true;
}, deleteProperty(n, e) {
  return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`, n), true;
} }, fp = (n) => xf(n) ? dp(n) : n, hp = (n) => xf(n) ? Xw(n) : n, up = (n) => n, Sf = (n) => Reflect.getPrototypeOf(n);
function Xa(n, e, t = false, i = false) {
  n = n.__v_raw;
  const r = xt(n), s = xt(e);
  e !== s && !t && Ii(r, "get", e), !t && Ii(r, "get", s);
  const { has: o } = Sf(r), l = i ? up : t ? hp : fp;
  if (o.call(r, e)) return l(n.get(e));
  if (o.call(r, s)) return l(n.get(s));
  n !== r && n.get(e);
}
function Za(n, e = false) {
  const t = this.__v_raw, i = xt(t), r = xt(n);
  return n !== r && !e && Ii(i, "has", n), !e && Ii(i, "has", r), n === r ? t.has(n) : t.has(n) || t.has(r);
}
function ec(n, e = false) {
  return n = n.__v_raw, !e && Ii(xt(n), "iterate", Ps), Reflect.get(n, "size", n);
}
function Nm(n) {
  n = xt(n);
  const e = xt(this);
  return Sf(e).has.call(e, n) || (e.add(n), rs(e, "add", n, n)), this;
}
function Fm(n, e) {
  e = xt(e);
  const t = xt(this), { has: i, get: r } = Sf(t);
  let s = i.call(t, n);
  s ? Yw(t, i, n) : (n = xt(n), s = i.call(t, n));
  const o = r.call(t, n);
  return t.set(n, e), s ? zw(e, o) && rs(t, "set", n, e, o) : rs(t, "add", n, e), this;
}
function Hm(n) {
  const e = xt(this), { has: t, get: i } = Sf(e);
  let r = t.call(e, n);
  r ? Yw(e, t, n) : (n = xt(n), r = t.call(e, n));
  const s = i ? i.call(e, n) : void 0, o = e.delete(n);
  return r && rs(e, "delete", n, void 0, s), o;
}
function Vm() {
  const n = xt(this), e = n.size !== 0, t = Il(n) ? new Map(n) : new Set(n), i = n.clear();
  return e && rs(n, "clear", void 0, void 0, t), i;
}
function tc(n, e) {
  return function(i, r) {
    const s = this, o = s.__v_raw, l = xt(o), a = e ? up : n ? hp : fp;
    return !n && Ii(l, "iterate", Ps), o.forEach((f, h) => i.call(r, a(f), a(h), s));
  };
}
function nc(n, e, t) {
  return function(...i) {
    const r = this.__v_raw, s = xt(r), o = Il(s), l = n === "entries" || n === Symbol.iterator && o, a = n === "keys" && o, f = r[n](...i), h = t ? up : e ? hp : fp;
    return !e && Ii(s, "iterate", a ? Uu : Ps), { next() {
      const { value: p, done: m } = f.next();
      return m ? { value: p, done: m } : { value: l ? [h(p[0]), h(p[1])] : h(p), done: m };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function Hr(n) {
  return function(...e) {
    {
      const t = e[0] ? `on key "${e[0]}" ` : "";
      console.warn(`${N_(n)} operation ${t}failed: target is readonly.`, xt(this));
    }
    return n === "delete" ? false : this;
  };
}
function n2() {
  const n = { get(s) {
    return Xa(this, s);
  }, get size() {
    return ec(this);
  }, has: Za, add: Nm, set: Fm, delete: Hm, clear: Vm, forEach: tc(false, false) }, e = { get(s) {
    return Xa(this, s, false, true);
  }, get size() {
    return ec(this);
  }, has: Za, add: Nm, set: Fm, delete: Hm, clear: Vm, forEach: tc(false, true) }, t = { get(s) {
    return Xa(this, s, true);
  }, get size() {
    return ec(this, true);
  }, has(s) {
    return Za.call(this, s, true);
  }, add: Hr("add"), set: Hr("set"), delete: Hr("delete"), clear: Hr("clear"), forEach: tc(true, false) }, i = { get(s) {
    return Xa(this, s, true, true);
  }, get size() {
    return ec(this, true);
  }, has(s) {
    return Za.call(this, s, true);
  }, add: Hr("add"), set: Hr("set"), delete: Hr("delete"), clear: Hr("clear"), forEach: tc(true, true) };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    n[s] = nc(s, false, false), t[s] = nc(s, true, false), e[s] = nc(s, false, true), i[s] = nc(s, true, true);
  }), [n, t, e, i];
}
var [i2, r2] = n2();
function Gw(n, e) {
  const t = n ? r2 : i2;
  return (i, r, s) => r === "__v_isReactive" ? !n : r === "__v_isReadonly" ? n : r === "__v_raw" ? i : Reflect.get(wf(t, r) && r in i ? t : i, r, s);
}
var s2 = { get: Gw(false) }, o2 = { get: Gw(true) };
function Yw(n, e, t) {
  const i = xt(t);
  if (i !== t && e.call(n, i)) {
    const r = $w(n);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
var Jw = /* @__PURE__ */ new WeakMap(), l2 = /* @__PURE__ */ new WeakMap(), Qw = /* @__PURE__ */ new WeakMap(), a2 = /* @__PURE__ */ new WeakMap();
function c2(n) {
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
function f2(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : c2($w(n));
}
function dp(n) {
  return n && n.__v_isReadonly ? n : Zw(n, false, e2, s2, Jw);
}
function Xw(n) {
  return Zw(n, true, t2, o2, Qw);
}
function Zw(n, e, t, i, r) {
  if (!xf(n)) return console.warn(`value cannot be made reactive: ${String(n)}`), n;
  if (n.__v_raw && !(e && n.__v_isReactive)) return n;
  const s = r.get(n);
  if (s) return s;
  const o = f2(n);
  if (o === 0) return n;
  const l = new Proxy(n, o === 2 ? i : t);
  return r.set(n, l), l;
}
function xt(n) {
  return n && xt(n.__v_raw) || n;
}
function Gu(n) {
  return !!(n && n.__v_isRef === true);
}
Vi("nextTick", () => rp);
Vi("dispatch", (n) => Bl.bind(Bl, n));
Vi("watch", (n, { evaluateLater: e, cleanup: t }) => (i, r) => {
  let s = e(i), l = Jb(() => {
    let a;
    return s((f) => a = f), a;
  }, r);
  t(l);
});
Vi("store", M_);
Vi("data", (n) => rw(n));
Vi("root", (n) => yf(n));
Vi("refs", (n) => (n._x_refs_proxy || (n._x_refs_proxy = ha(h2(n))), n._x_refs_proxy));
function h2(n) {
  let e = [];
  return ua(n, (t) => {
    t._x_refs && e.push(t._x_refs);
  }), e;
}
var wh = {};
function e1(n) {
  return wh[n] || (wh[n] = 0), ++wh[n];
}
function u2(n, e) {
  return ua(n, (t) => {
    if (t._x_ids && t._x_ids[e]) return true;
  });
}
function d2(n, e) {
  n._x_ids || (n._x_ids = {}), n._x_ids[e] || (n._x_ids[e] = e1(e));
}
Vi("id", (n, { cleanup: e }) => (t, i = null) => {
  let r = `${t}${i ? `-${i}` : ""}`;
  return p2(n, r, e, () => {
    let s = u2(n, t), o = s ? s._x_ids[t] : e1(t);
    return i ? `${t}-${o}-${i}` : `${t}-${o}`;
  });
});
bf((n, e) => {
  n._x_id && (e._x_id = n._x_id);
});
function p2(n, e, t, i) {
  if (n._x_id || (n._x_id = {}), n._x_id[e]) return n._x_id[e];
  let r = i();
  return n._x_id[e] = r, t(() => {
    delete n._x_id[e];
  }), r;
}
Vi("el", (n) => n);
t1("Focus", "focus", "focus");
t1("Persist", "persist", "persist");
function t1(n, e, t) {
  Vi(e, (i) => yi(`You can't use [$${e}] without first installing the "${n}" plugin here: https://alpinejs.dev/plugins/${t}`, i));
}
zt("modelable", (n, { expression: e }, { effect: t, evaluateLater: i, cleanup: r }) => {
  let s = i(e), o = () => {
    let h;
    return s((p) => h = p), h;
  }, l = i(`${e} = __placeholder`), a = (h) => l(() => {
  }, { scope: { __placeholder: h } }), f = o();
  a(f), queueMicrotask(() => {
    if (!n._x_model) return;
    n._x_removeModelListeners.default();
    let h = n._x_model.get, p = n._x_model.set, m = Nw({ get() {
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
zt("teleport", (n, { modifiers: e, expression: t }, { cleanup: i }) => {
  n.tagName.toLowerCase() !== "template" && yi("x-teleport can only be used on a <template> tag", n);
  let r = Wm(t), s = n.content.cloneNode(true).firstElementChild;
  n._x_teleport = s, s._x_teleportBack = n, n.setAttribute("data-teleport-template", true), s.setAttribute("data-teleport-target", true), n._x_forwardEvents && n._x_forwardEvents.forEach((l) => {
    s.addEventListener(l, (a) => {
      a.stopPropagation(), n.dispatchEvent(new a.constructor(a.type, a));
    });
  }), fa(s, {}, n);
  let o = (l, a, f) => {
    f.includes("prepend") ? a.parentNode.insertBefore(l, a) : f.includes("append") ? a.parentNode.insertBefore(l, a.nextSibling) : a.appendChild(l);
  };
  At(() => {
    o(s, r, e), as(() => {
      Er(s), s._x_ignore = true;
    })();
  }), n._x_teleportPutBack = () => {
    let l = Wm(t);
    At(() => {
      o(n._x_teleport, l, e);
    });
  }, i(() => At(() => {
    s.remove(), Ho(s);
  }));
});
var g2 = document.createElement("div");
function Wm(n) {
  let e = as(() => document.querySelector(n), () => g2)();
  return e || yi(`Cannot find x-teleport element for selector: "${n}"`), e;
}
var n1 = () => {
};
n1.inline = (n, { modifiers: e }, { cleanup: t }) => {
  e.includes("self") ? n._x_ignoreSelf = true : n._x_ignore = true, t(() => {
    e.includes("self") ? delete n._x_ignoreSelf : delete n._x_ignore;
  });
};
zt("ignore", n1);
zt("effect", as((n, { expression: e }, { effect: t }) => {
  t(Nn(n, e));
}));
function Yu(n, e, t, i) {
  let r = n, s = (a) => i(a), o = {}, l = (a, f) => (h) => f(a, h);
  if (t.includes("dot") && (e = m2(e)), t.includes("camel") && (e = y2(e)), t.includes("passive") && (o.passive = true), t.includes("capture") && (o.capture = true), t.includes("window") && (r = window), t.includes("document") && (r = document), t.includes("debounce")) {
    let a = t[t.indexOf("debounce") + 1] || "invalid-wait", f = Xc(a.split("ms")[0]) ? Number(a.split("ms")[0]) : 250;
    s = Bw(s, f);
  }
  if (t.includes("throttle")) {
    let a = t[t.indexOf("throttle") + 1] || "invalid-wait", f = Xc(a.split("ms")[0]) ? Number(a.split("ms")[0]) : 250;
    s = Iw(s, f);
  }
  return t.includes("prevent") && (s = l(s, (a, f) => {
    f.preventDefault(), a(f);
  })), t.includes("stop") && (s = l(s, (a, f) => {
    f.stopPropagation(), a(f);
  })), t.includes("once") && (s = l(s, (a, f) => {
    a(f), r.removeEventListener(e, s, o);
  })), (t.includes("away") || t.includes("outside")) && (r = document, s = l(s, (a, f) => {
    n.contains(f.target) || f.target.isConnected !== false && (n.offsetWidth < 1 && n.offsetHeight < 1 || n._x_isShown !== false && a(f));
  })), t.includes("self") && (s = l(s, (a, f) => {
    f.target === n && a(f);
  })), (b2(e) || i1(e)) && (s = l(s, (a, f) => {
    w2(f, t) || a(f);
  })), r.addEventListener(e, s, o), () => {
    r.removeEventListener(e, s, o);
  };
}
function m2(n) {
  return n.replace(/-/g, ".");
}
function y2(n) {
  return n.toLowerCase().replace(/-(\w)/g, (e, t) => t.toUpperCase());
}
function Xc(n) {
  return !Array.isArray(n) && !isNaN(n);
}
function v2(n) {
  return [" ", "_"].includes(n) ? n : n.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function b2(n) {
  return ["keydown", "keyup"].includes(n);
}
function i1(n) {
  return ["contextmenu", "click", "mouse"].some((e) => n.includes(e));
}
function w2(n, e) {
  let t = e.filter((s) => !["window", "document", "prevent", "stop", "once", "capture", "self", "away", "outside", "passive"].includes(s));
  if (t.includes("debounce")) {
    let s = t.indexOf("debounce");
    t.splice(s, Xc((t[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (t.includes("throttle")) {
    let s = t.indexOf("throttle");
    t.splice(s, Xc((t[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (t.length === 0 || t.length === 1 && $m(n.key).includes(t[0])) return false;
  const r = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((s) => t.includes(s));
  return t = t.filter((s) => !r.includes(s)), !(r.length > 0 && r.filter((o) => ((o === "cmd" || o === "super") && (o = "meta"), n[`${o}Key`])).length === r.length && (i1(n.type) || $m(n.key).includes(t[0])));
}
function $m(n) {
  if (!n) return [];
  n = v2(n);
  let e = { ctrl: "control", slash: "/", space: " ", spacebar: " ", cmd: "meta", esc: "escape", up: "arrow-up", down: "arrow-down", left: "arrow-left", right: "arrow-right", period: ".", comma: ",", equal: "=", minus: "-", underscore: "_" };
  return e[n] = n, Object.keys(e).map((t) => {
    if (e[t] === n) return t;
  }).filter((t) => t);
}
zt("model", (n, { modifiers: e, expression: t }, { effect: i, cleanup: r }) => {
  let s = n;
  e.includes("parent") && (s = n.parentNode);
  let o = Nn(s, t), l;
  typeof t == "string" ? l = Nn(s, `${t} = __placeholder`) : typeof t == "function" && typeof t() == "string" ? l = Nn(s, `${t()} = __placeholder`) : l = () => {
  };
  let a = () => {
    let m;
    return o((b) => m = b), zm(m) ? m.get() : m;
  }, f = (m) => {
    let b;
    o((S) => b = S), zm(b) ? b.set(m) : l(() => {
    }, { scope: { __placeholder: m } });
  };
  typeof t == "string" && n.type === "radio" && At(() => {
    n.hasAttribute("name") || n.setAttribute("name", t);
  });
  var h = n.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(n.type) || e.includes("lazy") ? "change" : "input";
  let p = is ? () => {
  } : Yu(n, h, e, (m) => {
    f(xh(n, e, m, a()));
  });
  if (e.includes("fill") && ([void 0, null, ""].includes(a()) || op(n) && Array.isArray(a()) || n.tagName.toLowerCase() === "select" && n.multiple) && f(xh(n, e, { target: n }, a())), n._x_removeModelListeners || (n._x_removeModelListeners = {}), n._x_removeModelListeners.default = p, r(() => n._x_removeModelListeners.default()), n.form) {
    let m = Yu(n.form, "reset", [], (b) => {
      rp(() => n._x_model && n._x_model.set(xh(n, e, { target: n }, a())));
    });
    r(() => m());
  }
  n._x_model = { get() {
    return a();
  }, set(m) {
    f(m);
  } }, n._x_forceModelUpdate = (m) => {
    m === void 0 && typeof t == "string" && t.match(/\./) && (m = ""), window.fromModel = true, At(() => _w(n, "value", m)), delete window.fromModel;
  }, i(() => {
    let m = a();
    e.includes("unintrusive") && document.activeElement.isSameNode(n) || n._x_forceModelUpdate(m);
  });
});
function xh(n, e, t, i) {
  return At(() => {
    if (t instanceof CustomEvent && t.detail !== void 0) return t.detail !== null && t.detail !== void 0 ? t.detail : t.target.value;
    if (op(n)) if (Array.isArray(i)) {
      let r = null;
      return e.includes("number") ? r = Sh(t.target.value) : e.includes("boolean") ? r = xc(t.target.value) : r = t.target.value, t.target.checked ? i.includes(r) ? i : i.concat([r]) : i.filter((s) => !x2(s, r));
    } else return t.target.checked;
    else {
      if (n.tagName.toLowerCase() === "select" && n.multiple) return e.includes("number") ? Array.from(t.target.selectedOptions).map((r) => {
        let s = r.value || r.text;
        return Sh(s);
      }) : e.includes("boolean") ? Array.from(t.target.selectedOptions).map((r) => {
        let s = r.value || r.text;
        return xc(s);
      }) : Array.from(t.target.selectedOptions).map((r) => r.value || r.text);
      {
        let r;
        return Pw(n) ? t.target.checked ? r = t.target.value : r = i : r = t.target.value, e.includes("number") ? Sh(r) : e.includes("boolean") ? xc(r) : e.includes("trim") ? r.trim() : r;
      }
    }
  });
}
function Sh(n) {
  let e = n ? parseFloat(n) : null;
  return S2(e) ? e : n;
}
function x2(n, e) {
  return n == e;
}
function S2(n) {
  return !Array.isArray(n) && !isNaN(n);
}
function zm(n) {
  return n !== null && typeof n == "object" && typeof n.get == "function" && typeof n.set == "function";
}
zt("cloak", (n) => queueMicrotask(() => At(() => n.removeAttribute(Fo("cloak")))));
Cw(() => `[${Fo("init")}]`);
zt("init", as((n, { expression: e }, { evaluate: t }) => typeof e == "string" ? !!e.trim() && t(e, {}, false) : t(e, {}, false)));
zt("text", (n, { expression: e }, { effect: t, evaluateLater: i }) => {
  let r = i(e);
  t(() => {
    r((s) => {
      At(() => {
        n.textContent = s;
      });
    });
  });
});
zt("html", (n, { expression: e }, { effect: t, evaluateLater: i }) => {
  let r = i(e);
  t(() => {
    r((s) => {
      At(() => {
        n.innerHTML = s, n._x_ignoreSelf = true, Er(n), delete n._x_ignoreSelf;
      });
    });
  });
});
tp(pw(":", gw(Fo("bind:"))));
var r1 = (n, { value: e, modifiers: t, expression: i, original: r }, { effect: s, cleanup: o }) => {
  if (!e) {
    let a = {};
    E_(a), Nn(n, i)((h) => {
      Hw(n, h, r);
    }, { scope: a });
    return;
  }
  if (e === "key") return k2(n, i);
  if (n._x_inlineBindings && n._x_inlineBindings[e] && n._x_inlineBindings[e].extract) return;
  let l = Nn(n, i);
  s(() => l((a) => {
    a === void 0 && typeof i == "string" && i.match(/\./) && (a = ""), At(() => _w(n, e, a, t));
  })), o(() => {
    n._x_undoAddedClasses && n._x_undoAddedClasses(), n._x_undoAddedStyles && n._x_undoAddedStyles();
  });
};
r1.inline = (n, { value: e, modifiers: t, expression: i }) => {
  e && (n._x_inlineBindings || (n._x_inlineBindings = {}), n._x_inlineBindings[e] = { expression: i, extract: false });
};
zt("bind", r1);
function k2(n, e) {
  n._x_keyExpression = e;
}
kw(() => `[${Fo("data")}]`);
zt("data", (n, { expression: e }, { cleanup: t }) => {
  if (C2(n)) return;
  e = e === "" ? "{}" : e;
  let i = {};
  Fu(i, n);
  let r = {};
  O_(r, i);
  let s = Ds(n, e, { scope: r });
  (s === void 0 || s === true) && (s = {}), Fu(s, n);
  let o = Io(s);
  sw(o);
  let l = fa(n, o);
  o.init && Ds(n, o.init), t(() => {
    o.destroy && Ds(n, o.destroy), l();
  });
});
bf((n, e) => {
  n._x_dataStack && (e._x_dataStack = n._x_dataStack, e.setAttribute("data-has-alpine-state", true));
});
function C2(n) {
  return is ? ju ? true : n.hasAttribute("data-has-alpine-state") : false;
}
zt("show", (n, { modifiers: e, expression: t }, { effect: i }) => {
  let r = Nn(n, t);
  n._x_doHide || (n._x_doHide = () => {
    At(() => {
      n.style.setProperty("display", "none", e.includes("important") ? "important" : void 0);
    });
  }), n._x_doShow || (n._x_doShow = () => {
    At(() => {
      n.style.length === 1 && n.style.display === "none" ? n.removeAttribute("style") : n.style.removeProperty("display");
    });
  });
  let s = () => {
    n._x_doHide(), n._x_isShown = false;
  }, o = () => {
    n._x_doShow(), n._x_isShown = true;
  }, l = () => setTimeout(o), a = zu((p) => p ? o() : s(), (p) => {
    typeof n._x_toggleAndCascadeWithTransitions == "function" ? n._x_toggleAndCascadeWithTransitions(n, p, o, s) : p ? l() : s();
  }), f, h = true;
  i(() => r((p) => {
    !h && p === f || (e.includes("immediate") && (p ? l() : s()), a(p), f = p, h = false);
  }));
});
zt("for", (n, { expression: e }, { effect: t, cleanup: i }) => {
  let r = A2(e), s = Nn(n, r.items), o = Nn(n, n._x_keyExpression || "index");
  n._x_prevKeys = [], n._x_lookup = {}, t(() => M2(n, r, s, o)), i(() => {
    Object.values(n._x_lookup).forEach((l) => At(() => {
      Ho(l), l.remove();
    })), delete n._x_prevKeys, delete n._x_lookup;
  });
});
function M2(n, e, t, i) {
  let r = (o) => typeof o == "object" && !Array.isArray(o), s = n;
  t((o) => {
    E2(o) && o >= 0 && (o = Array.from(Array(o).keys(), (A) => A + 1)), o === void 0 && (o = []);
    let l = n._x_lookup, a = n._x_prevKeys, f = [], h = [];
    if (r(o)) o = Object.entries(o).map(([A, _]) => {
      let R = Km(e, _, A, o);
      i((N) => {
        h.includes(N) && yi("Duplicate key on x-for", n), h.push(N);
      }, { scope: { index: A, ...R } }), f.push(R);
    });
    else for (let A = 0; A < o.length; A++) {
      let _ = Km(e, o[A], A, o);
      i((R) => {
        h.includes(R) && yi("Duplicate key on x-for", n), h.push(R);
      }, { scope: { index: A, ..._ } }), f.push(_);
    }
    let p = [], m = [], b = [], S = [];
    for (let A = 0; A < a.length; A++) {
      let _ = a[A];
      h.indexOf(_) === -1 && b.push(_);
    }
    a = a.filter((A) => !b.includes(A));
    let M = "template";
    for (let A = 0; A < h.length; A++) {
      let _ = h[A], R = a.indexOf(_);
      if (R === -1) a.splice(A, 0, _), p.push([M, A]);
      else if (R !== A) {
        let N = a.splice(A, 1)[0], B = a.splice(R - 1, 1)[0];
        a.splice(A, 0, B), a.splice(R, 0, N), m.push([N, B]);
      } else S.push(_);
      M = _;
    }
    for (let A = 0; A < b.length; A++) {
      let _ = b[A];
      _ in l && (At(() => {
        Ho(l[_]), l[_].remove();
      }), delete l[_]);
    }
    for (let A = 0; A < m.length; A++) {
      let [_, R] = m[A], N = l[_], B = l[R], W = document.createElement("div");
      At(() => {
        B || yi('x-for ":key" is undefined or invalid', s, R, l), B.after(W), N.after(B), B._x_currentIfEl && B.after(B._x_currentIfEl), W.before(N), N._x_currentIfEl && N.after(N._x_currentIfEl), W.remove();
      }), B._x_refreshXForScope(f[h.indexOf(R)]);
    }
    for (let A = 0; A < p.length; A++) {
      let [_, R] = p[A], N = _ === "template" ? s : l[_];
      N._x_currentIfEl && (N = N._x_currentIfEl);
      let B = f[R], W = h[R], H = document.importNode(s.content, true).firstElementChild, K = Io(B);
      fa(H, K, s), H._x_refreshXForScope = (ee) => {
        Object.entries(ee).forEach(([oe, re]) => {
          K[oe] = re;
        });
      }, At(() => {
        N.after(H), as(() => Er(H))();
      }), typeof W == "object" && yi("x-for key cannot be an object, it must be a string or an integer", s), l[W] = H;
    }
    for (let A = 0; A < S.length; A++) l[S[A]]._x_refreshXForScope(f[h.indexOf(S[A])]);
    s._x_prevKeys = h;
  });
}
function A2(n) {
  let e = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, t = /^\s*\(|\)\s*$/g, i = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, r = n.match(i);
  if (!r) return;
  let s = {};
  s.items = r[2].trim();
  let o = r[1].replace(t, "").trim(), l = o.match(e);
  return l ? (s.item = o.replace(e, "").trim(), s.index = l[1].trim(), l[2] && (s.collection = l[2].trim())) : s.item = o, s;
}
function Km(n, e, t, i) {
  let r = {};
  return /^\[.*\]$/.test(n.item) && Array.isArray(e) ? n.item.replace("[", "").replace("]", "").split(",").map((o) => o.trim()).forEach((o, l) => {
    r[o] = e[l];
  }) : /^\{.*\}$/.test(n.item) && !Array.isArray(e) && typeof e == "object" ? n.item.replace("{", "").replace("}", "").split(",").map((o) => o.trim()).forEach((o) => {
    r[o] = e[o];
  }) : r[n.item] = e, n.index && (r[n.index] = t), n.collection && (r[n.collection] = i), r;
}
function E2(n) {
  return !Array.isArray(n) && !isNaN(n);
}
function s1() {
}
s1.inline = (n, { expression: e }, { cleanup: t }) => {
  let i = yf(n);
  i._x_refs || (i._x_refs = {}), i._x_refs[e] = n, t(() => delete i._x_refs[e]);
};
zt("ref", s1);
zt("if", (n, { expression: e }, { effect: t, cleanup: i }) => {
  n.tagName.toLowerCase() !== "template" && yi("x-if can only be used on a <template> tag", n);
  let r = Nn(n, e), s = () => {
    if (n._x_currentIfEl) return n._x_currentIfEl;
    let l = n.content.cloneNode(true).firstElementChild;
    return fa(l, {}, n), At(() => {
      n.after(l), as(() => Er(l))();
    }), n._x_currentIfEl = l, n._x_undoIf = () => {
      At(() => {
        Ho(l), l.remove();
      }), delete n._x_currentIfEl;
    }, l;
  }, o = () => {
    n._x_undoIf && (n._x_undoIf(), delete n._x_undoIf);
  };
  t(() => r((l) => {
    l ? s() : o();
  })), i(() => n._x_undoIf && n._x_undoIf());
});
zt("id", (n, { expression: e }, { evaluate: t }) => {
  t(e).forEach((r) => d2(n, r));
});
bf((n, e) => {
  n._x_ids && (e._x_ids = n._x_ids);
});
tp(pw("@", gw(Fo("on:"))));
zt("on", as((n, { value: e, modifiers: t, expression: i }, { cleanup: r }) => {
  let s = i ? Nn(n, i) : () => {
  };
  n.tagName.toLowerCase() === "template" && (n._x_forwardEvents || (n._x_forwardEvents = []), n._x_forwardEvents.includes(e) || n._x_forwardEvents.push(e));
  let o = Yu(n, e, t, (l) => {
    s(() => {
    }, { scope: { $event: l }, params: [l] });
  });
  r(() => o());
}));
kf("Collapse", "collapse", "collapse");
kf("Intersect", "intersect", "intersect");
kf("Focus", "trap", "focus");
kf("Mask", "mask", "mask");
function kf(n, e, t) {
  zt(e, (i) => yi(`You can't use [x-${e}] without first installing the "${n}" plugin here: https://alpinejs.dev/plugins/${t}`, i));
}
da.setEvaluator(fw);
da.setReactivityEngine({ reactive: dp, effect: H_, release: V_, raw: xt });
var T2 = da, o1 = T2;
function hr(n) {
  if (n && typeof n == "object" && "Concrete" in n) return n.Concrete;
}
function Sr(n) {
  return n && typeof n == "object" && "Builtin" in n ? String(n.Builtin).toLowerCase() : typeof n == "string" ? n.toLowerCase() : "?";
}
const O2 = { Millisecond: "ms", Second: "s", Minute: "m", Hour: "h", Day: "d", Week: "w" };
function jm(n) {
  return `${n.value}${O2[n.unit] ?? n.unit}`;
}
const _2 = { Millisecond: 1e-3, Second: 1, Minute: 60, Hour: 3600, Day: 86400, Week: 604800 };
function L2(n) {
  return (n.value ?? 1) * (_2[n.unit] ?? 60);
}
function D2(n) {
  return n == null ? "" : String(n);
}
function R2(n) {
  return n == null ? "?" : typeof n == "string" ? `"${n}"` : String(n);
}
function qm(n) {
  return n instanceof RegExp ? n.source : String(n);
}
function P2(n, e) {
  const t = [["Eq", "=="], ["Ne", "!="], ["Gt", ">"], ["Ge", ">="], ["Lt", "<"], ["Le", "<="]];
  for (const [i, r] of t) if (i in e) return `${n} ${r} ${R2(hr(e[i]))}`;
  return "RegEx" in e ? `${n} == #/${qm(hr(e.RegEx))}/` : "RegExNot" in e ? `${n} != #/${qm(hr(e.RegExNot))}/` : "Is" in e ? `${n} is ${e.Is}` : `${n} ?`;
}
function Sc(n) {
  return "Cmp" in n ? P2(n.Cmp.field, n.Cmp.rhs) : "And" in n ? n.And.map(Sc).join(" and ") : "Or" in n ? n.Or.map(Sc).join(" or ") : "Not" in n ? `not ${Sc(n.Not)}` : "?";
}
function B2(n) {
  return `| where ${Sc(n)}`;
}
function l1(n) {
  if ("Map" in n) {
    const e = Sr(n.Map.function), t = n.Map.arg;
    return t != null ? `| map using ${e}(${t})` : `| map using ${e}`;
  }
  if ("Align" in n) {
    const e = Sr(n.Align.function);
    return `| align to ${jm(hr(n.Align.time))} using ${e}`;
  }
  if ("GroupBy" in n) {
    const e = Sr(n.GroupBy.function), t = n.GroupBy.tags;
    return t.length ? `| group by [${t.join(", ")}] using ${e}` : `| group using ${e}`;
  }
  if ("Bucket" in n) {
    const e = Sr(n.Bucket.function), t = jm(hr(n.Bucket.time)), i = n.Bucket.tags;
    return i.length ? `| bucket by [${i.join(", ")}] every ${t} using ${e}` : `| bucket every ${t} using ${e}`;
  }
  return "As" in n ? `| as ${n.As.name ?? "?"}` : "| ?";
}
function a1(n) {
  const e = Object.entries(n);
  return e.length === 0 ? "series" : e.map(([t, i]) => `${t}=${i}`).join(", ");
}
let kh;
function c1(n) {
  return { lang: (n == null ? void 0 : n.lang) ?? (kh == null ? void 0 : kh.lang), message: n == null ? void 0 : n.message, abortEarly: (n == null ? void 0 : n.abortEarly) ?? (kh == null ? void 0 : kh.abortEarly), abortPipeEarly: (n == null ? void 0 : n.abortPipeEarly) ?? (kh == null ? void 0 : kh.abortPipeEarly) };
}
let I2;
function N2(n) {
  return I2 == null ? void 0 : I2.get(n);
}
let F2;
function H2(n) {
  return F2 == null ? void 0 : F2.get(n);
}
let V2;
function W2(n, e) {
  var _a2;
  return (_a2 = V2 == null ? void 0 : V2.get(n)) == null ? void 0 : _a2.get(e);
}
function $2(n) {
  var _a2, _b2;
  const e = typeof n;
  return e === "string" ? `"${n}"` : e === "number" || e === "bigint" || e === "boolean" ? `${n}` : e === "object" || e === "function" ? (n && ((_b2 = (_a2 = Object.getPrototypeOf(n)) == null ? void 0 : _a2.constructor) == null ? void 0 : _b2.name)) ?? "null" : e;
}
function Eo(n, e, t, i, r) {
  const s = r && "input" in r ? r.input : t.value, o = (r == null ? void 0 : r.expected) ?? n.expects ?? null, l = (r == null ? void 0 : r.received) ?? $2(s), a = { kind: n.kind, type: n.type, input: s, expected: o, received: l, message: `Invalid ${e}: ${o ? `Expected ${o} but r` : "R"}eceived ${l}`, requirement: n.requirement, path: r == null ? void 0 : r.path, issues: r == null ? void 0 : r.issues, lang: i.lang, abortEarly: i.abortEarly, abortPipeEarly: i.abortPipeEarly }, f = n.kind === "schema", h = (r == null ? void 0 : r.message) ?? n.message ?? W2(n.reference, a.lang) ?? (f ? H2(a.lang) : null) ?? i.message ?? N2(a.lang);
  h !== void 0 && (a.message = typeof h == "function" ? h(a) : h), f && (t.typed = false), t.issues ? t.issues.push(a) : t.issues = [a];
}
function pa(n) {
  return { version: 1, vendor: "valibot", validate(e) {
    return n["~run"]({ value: e }, c1());
  } };
}
function z2(n, e) {
  return Object.hasOwn(n, e) && e !== "__proto__" && e !== "prototype" && e !== "constructor";
}
var K2 = class extends Error {
  constructor(n) {
    super(n[0].message), this.name = "ValiError", this.issues = n;
  }
};
function j2(n, e, t) {
  return typeof n.fallback == "function" ? n.fallback(e, t) : n.fallback;
}
function q2(n, e, t) {
  return typeof n.default == "function" ? n.default(e, t) : n.default;
}
function Zc(n, e) {
  return { kind: "schema", type: "array", reference: Zc, expects: "Array", async: false, item: n, message: e, get "~standard"() {
    return pa(this);
  }, "~run"(t, i) {
    var _a2;
    const r = t.value;
    if (Array.isArray(r)) {
      t.typed = true, t.value = [];
      for (let s = 0; s < r.length; s++) {
        const o = r[s], l = this.item["~run"]({ value: o }, i);
        if (l.issues) {
          const a = { type: "array", origin: "value", input: r, key: s, value: o };
          for (const f of l.issues) f.path ? f.path.unshift(a) : f.path = [a], (_a2 = t.issues) == null ? void 0 : _a2.push(f);
          if (t.issues || (t.issues = l.issues), i.abortEarly) {
            t.typed = false;
            break;
          }
        }
        l.typed || (t.typed = false), t.value.push(l.value);
      }
    } else Eo(this, "type", t, i);
    return t;
  } };
}
function Ju(n) {
  return { kind: "schema", type: "number", reference: Ju, expects: "number", async: false, message: n, get "~standard"() {
    return pa(this);
  }, "~run"(e, t) {
    return typeof e.value == "number" && !isNaN(e.value) ? e.typed = true : Eo(this, "type", e, t), e;
  } };
}
function f1(n, e) {
  return { kind: "schema", type: "object", reference: f1, expects: "Object", async: false, entries: n, message: e, get "~standard"() {
    return pa(this);
  }, "~run"(t, i) {
    var _a2;
    const r = t.value;
    if (r && typeof r == "object") {
      t.typed = true, t.value = {};
      for (const s in this.entries) {
        const o = this.entries[s];
        if (s in r || (o.type === "exact_optional" || o.type === "optional" || o.type === "nullish") && o.default !== void 0) {
          const l = s in r ? r[s] : q2(o), a = o["~run"]({ value: l }, i);
          if (a.issues) {
            const f = { type: "object", origin: "value", input: r, key: s, value: l };
            for (const h of a.issues) h.path ? h.path.unshift(f) : h.path = [f], (_a2 = t.issues) == null ? void 0 : _a2.push(h);
            if (t.issues || (t.issues = a.issues), i.abortEarly) {
              t.typed = false;
              break;
            }
          }
          a.typed || (t.typed = false), t.value[s] = a.value;
        } else if (o.fallback !== void 0) t.value[s] = j2(o);
        else if (o.type !== "exact_optional" && o.type !== "optional" && o.type !== "nullish" && (Eo(this, "key", t, i, { input: void 0, expected: `"${s}"`, path: [{ type: "object", origin: "key", input: r, key: s, value: r[s] }] }), i.abortEarly)) break;
      }
    } else Eo(this, "type", t, i);
    return t;
  } };
}
function ef(n, e, t) {
  return { kind: "schema", type: "record", reference: ef, expects: "Object", async: false, key: n, value: e, message: t, get "~standard"() {
    return pa(this);
  }, "~run"(i, r) {
    var _a2, _b2;
    const s = i.value;
    if (s && typeof s == "object") {
      i.typed = true, i.value = {};
      for (const o in s) if (z2(s, o)) {
        const l = s[o], a = this.key["~run"]({ value: o }, r);
        if (a.issues) {
          const h = { type: "object", origin: "key", input: s, key: o, value: l };
          for (const p of a.issues) p.path = [h], (_a2 = i.issues) == null ? void 0 : _a2.push(p);
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
    } else Eo(this, "type", i, r);
    return i;
  } };
}
function ea(n) {
  return { kind: "schema", type: "string", reference: ea, expects: "string", async: false, message: n, get "~standard"() {
    return pa(this);
  }, "~run"(e, t) {
    return typeof e.value == "string" ? e.typed = true : Eo(this, "type", e, t), e;
  } };
}
function U2(n, e, t) {
  const i = n["~run"]({ value: e }, c1(t));
  if (i.issues) throw new K2(i.issues);
  return i.value;
}
const G2 = f1({ tags: ef(ea(), ea()), timestamps: Zc(Ju()), values: Zc(Ju()) }), Y2 = ef(ea(), ef(ea(), Zc(G2)));
let ic = null;
async function h1() {
  if (ic) return ic;
  const n = await fetch("/datasets.json");
  return n.ok ? (ic = U2(Y2, await n.json()), ic) : {};
}
async function Ch() {
  const n = await h1(), e = {};
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
async function J2(n, e) {
  var _a2;
  const i = (_a2 = (await h1())[n]) == null ? void 0 : _a2[e];
  return i ? i.map((r) => ({ tags: r.tags, name: a1(r.tags), timestamps: r.timestamps, values: r.values })) : [];
}
function kc(n, e) {
  if ("Cmp" in e) {
    const { field: t, rhs: i } = e.Cmp, r = n.tags[t];
    if (r == null) return false;
    const s = [["Eq", (o, l) => o === l], ["Ne", (o, l) => o !== l], ["Gt", (o, l) => Number(o) > Number(l)], ["Ge", (o, l) => Number(o) >= Number(l)], ["Lt", (o, l) => Number(o) < Number(l)], ["Le", (o, l) => Number(o) <= Number(l)]];
    for (const [o, l] of s) if (o in i) return l(r, D2(hr(i[o])));
    if ("RegEx" in i) try {
      const o = hr(i.RegEx);
      return (o instanceof RegExp ? o : new RegExp(String(o))).test(r);
    } catch {
      return true;
    }
    if ("RegExNot" in i) try {
      const o = hr(i.RegExNot);
      return !(o instanceof RegExp ? o : new RegExp(String(o))).test(r);
    } catch {
      return true;
    }
    return true;
  }
  return "And" in e ? e.And.every((t) => kc(n, t)) : "Or" in e ? e.Or.some((t) => kc(n, t)) : "Not" in e ? !kc(n, e.Not) : true;
}
function Q2(n, e) {
  return n.filter((t) => e.every((i) => kc(t, i)));
}
function u1(n, e) {
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
function Um(n, e) {
  if (n.length === 0) return [];
  const t = n[0].length, i = [];
  for (let r = 0; r < t; r++) {
    const s = n.map((o) => o[r]).filter((o) => o != null);
    i.push(u1(s, e));
  }
  return i;
}
function Gm(n, e) {
  var _a2;
  const t = Sr(e.function), i = e.tags;
  if (i.length === 0) {
    const s = Um(n.map((l) => l.values), t), o = ((_a2 = n[0]) == null ? void 0 : _a2.timestamps) ?? [];
    return [{ tags: {}, name: `${t}(all)`, timestamps: [...o], values: s }];
  }
  const r = {};
  for (const s of n) {
    const o = i.map((l) => s.tags[l] ?? "").join("|");
    r[o] || (r[o] = []), r[o].push(s);
  }
  return Object.values(r).map((s) => {
    const o = Um(s.map((f) => f.values), t), l = s[0].timestamps, a = {};
    for (const f of i) a[f] = s[0].tags[f] ?? "";
    return { tags: a, name: a1(a), timestamps: [...l], values: o };
  });
}
function X2(n, e) {
  const t = Sr(e.function), i = e.arg;
  return n.map((r) => {
    let s;
    const o = t.toLowerCase();
    if (o.startsWith("is")) {
      const l = o.replace("is", "");
      s = r.values.map((a) => {
        if (i == null) return a;
        switch (l) {
          case "lt":
            return a < i ? 1 : 0;
          case "gt":
            return a > i ? 1 : 0;
          case "eq":
            return a === i ? 1 : 0;
          case "ne":
            return a !== i ? 1 : 0;
          case "ge":
            return a >= i ? 1 : 0;
          case "le":
            return a <= i ? 1 : 0;
          default:
            return a < i ? 1 : 0;
        }
      });
    } else if (o.startsWith("filter")) {
      const l = o.replace("filter", "");
      s = r.values.map((a) => {
        if (i == null) return a;
        switch (l) {
          case "lt":
            return a < i ? a : NaN;
          case "gt":
            return a > i ? a : NaN;
          default:
            return a;
        }
      });
    } else if (o === "rate") s = r.values.map((l, a) => {
      if (a === 0) return 0;
      const f = r.timestamps[a] - r.timestamps[a - 1];
      return f > 0 ? (l - r.values[a - 1]) / f : 0;
    });
    else if (o === "increase") s = r.values.map((l, a) => a === 0 ? 0 : Math.max(0, l - r.values[a - 1]));
    else if (o === "abs") s = r.values.map(Math.abs);
    else if (o === "fillconst") s = r.values.map((l) => isNaN(l) ? i ?? 0 : l);
    else if (o === "fillprev") {
      let l = 0;
      s = r.values.map((a) => (isNaN(a) || (l = a), l));
    } else {
      const l = i ?? 1;
      switch (o) {
        case "add":
          s = r.values.map((a) => a + l);
          break;
        case "sub":
          s = r.values.map((a) => a - l);
          break;
        case "mul":
          s = r.values.map((a) => a * l);
          break;
        case "div":
          s = r.values.map((a) => l !== 0 ? a / l : 0);
          break;
        case "min":
          s = r.values.map((a) => Math.min(a, l));
          break;
        case "max":
          s = r.values.map((a) => Math.max(a, l));
          break;
        default:
          s = [...r.values];
          break;
      }
    }
    return { ...r, values: s };
  });
}
function Ym(n, e) {
  const t = Sr(e.function), i = hr(e.time), r = i != null ? L2(i) : 300;
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
        for (let S = 1; S < m.length; S++) {
          const M = m[S] - m[S - 1];
          b += M < 0 ? m[S] : M;
        }
        f.push(b / r);
      }
      else f.push(u1(m, t));
    }
    return { ...s, timestamps: a, values: f };
  });
}
function Z2(n, e, t, i) {
  const r = Sr(t), s = n[0], o = e[0];
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
function eL(n) {
  return n.map((e) => ({ ...e, values: [...e.values], timestamps: [...e.timestamps] }));
}
function Nl(n, e) {
  return { expression: n, series: eL(e) };
}
function d1(n, e) {
  if ("Map" in e) return X2(n, e.Map);
  if ("Align" in e) return Ym(n, e.Align);
  if ("GroupBy" in e) return Gm(n, e.GroupBy);
  if ("Bucket" in e) {
    const t = e.Bucket, i = Gm(n, { span: t.span, function: t.function, tags: t.tags });
    return Ym(i, { function: t.function, time: t.time });
  }
  return "As" in e ? n.map((t) => ({ ...t, name: String(e.As.name ?? "?") })) : n;
}
async function tL(n) {
  const e = hr(n.source.metric_id.dataset) ?? "?", t = String(n.source.metric_id.metric ?? "?"), i = [];
  let r = await J2(String(e), t);
  i.push(Nl(`${e}:${t}`, r));
  for (const s of n.filters) r = Q2(r, [s]), i.push(Nl(B2(s), r));
  for (const s of n.aggregates) r = d1(r, s), i.push(Nl(l1(s), r));
  return i;
}
async function nL(n) {
  var _a2, _b2;
  const e = await Qu(n.left), t = await Qu(n.right), i = [...e, ...t], r = Sr(n.op), s = String(n.name ?? "?"), o = ((_a2 = e[e.length - 1]) == null ? void 0 : _a2.series) ?? [], l = ((_b2 = t[t.length - 1]) == null ? void 0 : _b2.series) ?? [];
  let a = Z2(o, l, n.op, s);
  const f = r === "div" ? "/" : r === "mul" ? "*" : r === "add" ? "+" : r === "sub" ? "-" : r;
  i.push(Nl(`| compute ${s} using ${f}`, a));
  for (const h of n.aggregates) a = d1(a, h), i.push(Nl(l1(h), a));
  return i;
}
async function Qu(n) {
  return "Simple" in n ? tL(n.Simple) : "Compute" in n ? nL(n.Compute) : [];
}
const iL = true, Jt = "u-", rL = "uplot", sL = Jt + "hz", oL = Jt + "vt", lL = Jt + "title", aL = Jt + "wrap", cL = Jt + "under", fL = Jt + "over", hL = Jt + "axis", Ms = Jt + "off", uL = Jt + "select", dL = Jt + "cursor-x", pL = Jt + "cursor-y", gL = Jt + "cursor-pt", mL = Jt + "legend", yL = Jt + "live", vL = Jt + "inline", bL = Jt + "series", wL = Jt + "marker", Jm = Jt + "label", xL = Jt + "value", kl = "width", Cl = "height", dl = "top", Qm = "bottom", io = "left", Mh = "right", pp = "#000", Xm = pp + "0", Ah = "mousemove", Zm = "mousedown", Eh = "mouseup", e0 = "mouseenter", t0 = "mouseleave", n0 = "dblclick", SL = "resize", kL = "scroll", i0 = "change", tf = "dppxchange", gp = "--", Vo = typeof window < "u", Xu = Vo ? document : null, mo = Vo ? window : null, CL = Vo ? navigator : null;
let Je, rc;
function Zu() {
  let n = devicePixelRatio;
  Je != n && (Je = n, rc && td(i0, rc, Zu), rc = matchMedia(`(min-resolution: ${Je - 1e-3}dppx) and (max-resolution: ${Je + 1e-3}dppx)`), Bs(i0, rc, Zu), mo.dispatchEvent(new CustomEvent(tf)));
}
function ti(n, e) {
  if (e != null) {
    let t = n.classList;
    !t.contains(e) && t.add(e);
  }
}
function ed(n, e) {
  let t = n.classList;
  t.contains(e) && t.remove(e);
}
function bt(n, e, t) {
  n.style[e] = t + "px";
}
function Oi(n, e, t, i) {
  let r = Xu.createElement(n);
  return e != null && ti(r, e), t == null ? void 0 : t.insertBefore(r, i), r;
}
function fi(n, e) {
  return Oi("div", n, e);
}
const r0 = /* @__PURE__ */ new WeakMap();
function Xi(n, e, t, i, r) {
  let s = "translate(" + e + "px," + t + "px)", o = r0.get(n);
  s != o && (n.style.transform = s, r0.set(n, s), e < 0 || t < 0 || e > i || t > r ? ti(n, Ms) : ed(n, Ms));
}
const s0 = /* @__PURE__ */ new WeakMap();
function o0(n, e, t) {
  let i = e + t, r = s0.get(n);
  i != r && (s0.set(n, i), n.style.background = e, n.style.borderColor = t);
}
const l0 = /* @__PURE__ */ new WeakMap();
function a0(n, e, t, i) {
  let r = e + "" + t, s = l0.get(n);
  r != s && (l0.set(n, r), n.style.height = t + "px", n.style.width = e + "px", n.style.marginLeft = i ? -e / 2 + "px" : 0, n.style.marginTop = i ? -t / 2 + "px" : 0);
}
const mp = { passive: true }, ML = { ...mp, capture: true };
function Bs(n, e, t, i) {
  e.addEventListener(n, t, i ? ML : mp);
}
function td(n, e, t, i) {
  e.removeEventListener(n, t, mp);
}
Vo && Zu();
function _i(n, e, t, i) {
  let r;
  t = t || 0, i = i || e.length - 1;
  let s = i <= 2147483647;
  for (; i - t > 1; ) r = s ? t + i >> 1 : ri((t + i) / 2), e[r] < n ? t = r : i = r;
  return n - e[t] <= e[i] - n ? t : i;
}
function p1(n) {
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
const g1 = (n) => n != null, m1 = (n) => n != null && n > 0, Cf = p1(g1), AL = p1(m1);
function EL(n, e, t, i = 0, r = false) {
  let s = r ? AL : Cf, o = r ? m1 : g1;
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
function Mf(n, e, t, i) {
  let r = h0(n), s = h0(e);
  n == e && (r == -1 ? (n *= t, e /= t) : (n /= t, e *= t));
  let o = t == 10 ? Cr : y1, l = r == 1 ? ri : ui, a = s == 1 ? ui : ri, f = l(o(qt(n))), h = a(o(qt(e))), p = To(t, f), m = To(t, h);
  return t == 10 && (f < 0 && (p = ut(p, -f)), h < 0 && (m = ut(m, -h))), i || t == 2 ? (n = p * r, e = m * s) : (n = x1(n, p), e = Af(e, m)), [n, e];
}
function yp(n, e, t, i) {
  let r = Mf(n, e, t, i);
  return n == 0 && (r[0] = 0), e == 0 && (r[1] = 0), r;
}
const vp = 0.1, c0 = { mode: 3, pad: vp }, Fl = { pad: 0, soft: null, mode: 0 }, TL = { min: Fl, max: Fl };
function nf(n, e, t, i) {
  return Ef(t) ? f0(n, e, t) : (Fl.pad = t, Fl.soft = i ? 0 : null, Fl.mode = i ? 3 : 0, f0(n, e, TL));
}
function Ue(n, e) {
  return n ?? e;
}
function OL(n, e, t) {
  for (e = Ue(e, 0), t = Ue(t, n.length - 1); e <= t; ) {
    if (n[e] != null) return true;
    e++;
  }
  return false;
}
function f0(n, e, t) {
  let i = t.min, r = t.max, s = Ue(i.pad, 0), o = Ue(r.pad, 0), l = Ue(i.hard, -ht), a = Ue(r.hard, ht), f = Ue(i.soft, ht), h = Ue(r.soft, -ht), p = Ue(i.mode, 0), m = Ue(r.mode, 0), b = e - n, S = Cr(b), M = Pn(qt(n), qt(e)), A = Cr(M), _ = qt(A - S);
  (b < 1e-24 || _ > 10) && (b = 0, (n == 0 || e == 0) && (b = 1e-24, p == 2 && f != ht && (s = 0), m == 2 && h != -ht && (o = 0)));
  let R = b || M || 1e3, N = Cr(R), B = To(10, ri(N)), W = R * (b == 0 ? n == 0 ? 0.1 : 1 : s), H = ut(x1(n - W, B / 10), 24), K = n >= f && (p == 1 || p == 3 && H <= f || p == 2 && H >= f) ? f : ht, ee = Pn(l, H < K && n >= K ? K : Li(K, H)), oe = R * (b == 0 ? e == 0 ? 0.1 : 1 : o), re = ut(Af(e + oe, B / 10), 24), q = e <= h && (m == 1 || m == 3 && re >= h || m == 2 && re <= h) ? h : -ht, Z = Li(a, re > q && e <= q ? q : Pn(q, re));
  return ee == Z && ee == 0 && (Z = 100), [ee, Z];
}
const _L = new Intl.NumberFormat(Vo ? CL.language : "en-US"), bp = (n) => _L.format(n), si = Math, Cc = si.PI, qt = si.abs, ri = si.floor, jt = si.round, ui = si.ceil, Li = si.min, Pn = si.max, To = si.pow, h0 = si.sign, Cr = si.log10, y1 = si.log2, LL = (n, e = 1) => si.sinh(n) * e, Th = (n, e = 1) => si.asinh(n / e), ht = 1 / 0;
function u0(n) {
  return (Cr((n ^ n >> 31) - (n >> 31)) | 0) + 1;
}
function nd(n, e, t) {
  return Li(Pn(n, e), t);
}
function v1(n) {
  return typeof n == "function";
}
function He(n) {
  return v1(n) ? n : () => n;
}
const DL = () => {
}, b1 = (n) => n, w1 = (n, e) => e, RL = (n) => null, d0 = (n) => true, p0 = (n, e) => n == e, PL = /\.\d*?(?=9{6,}|0{6,})/gm, zs = (n) => {
  if (k1(n) || ss.has(n)) return n;
  const e = `${n}`, t = e.match(PL);
  if (t == null) return n;
  let i = t[0].length - 1;
  if (e.indexOf("e-") != -1) {
    let [r, s] = e.split("e");
    return +`${zs(r)}e${s}`;
  }
  return ut(n, i);
};
function xs(n, e) {
  return zs(ut(zs(n / e)) * e);
}
function Af(n, e) {
  return zs(ui(zs(n / e)) * e);
}
function x1(n, e) {
  return zs(ri(zs(n / e)) * e);
}
function ut(n, e = 0) {
  if (k1(n)) return n;
  let t = 10 ** e, i = n * t * (1 + Number.EPSILON);
  return jt(i) / t;
}
const ss = /* @__PURE__ */ new Map();
function S1(n) {
  return (("" + n).split(".")[1] || "").length;
}
function ta(n, e, t, i) {
  let r = [], s = i.map(S1);
  for (let o = e; o < t; o++) {
    let l = qt(o), a = ut(To(n, o), l);
    for (let f = 0; f < i.length; f++) {
      let h = n == 10 ? +`${i[f]}e${o}` : i[f] * a, p = (o >= 0 ? 0 : l) + (o >= s[f] ? 0 : s[f]), m = n == 10 ? h : ut(h, p);
      r.push(m), ss.set(m, p);
    }
  }
  return r;
}
const Hl = {}, wp = [], Oo = [null, null], $r = Array.isArray, k1 = Number.isInteger, BL = (n) => n === void 0;
function g0(n) {
  return typeof n == "string";
}
function Ef(n) {
  let e = false;
  if (n != null) {
    let t = n.constructor;
    e = t == null || t == Object;
  }
  return e;
}
function IL(n) {
  return n != null && typeof n == "object";
}
const NL = Object.getPrototypeOf(Uint8Array), C1 = "__proto__";
function _o(n, e = Ef) {
  let t;
  if ($r(n)) {
    let i = n.find((r) => r != null);
    if ($r(i) || e(i)) {
      t = Array(n.length);
      for (let r = 0; r < n.length; r++) t[r] = _o(n[r], e);
    } else t = n.slice();
  } else if (n instanceof NL) t = n.slice();
  else if (e(n)) {
    t = {};
    for (let i in n) i != C1 && (t[i] = _o(n[i], e));
  } else t = n;
  return t;
}
function $t(n) {
  let e = arguments;
  for (let t = 1; t < e.length; t++) {
    let i = e[t];
    for (let r in i) r != C1 && (Ef(n[r]) ? $t(n[r], _o(i[r])) : n[r] = _o(i[r]));
  }
  return n;
}
const FL = 0, HL = 1, VL = 2;
function WL(n, e, t) {
  for (let i = 0, r, s = -1; i < e.length; i++) {
    let o = e[i];
    if (o > s) {
      for (r = o - 1; r >= 0 && n[r] == null; ) n[r--] = null;
      for (r = o + 1; r < t && n[r] == null; ) n[s = r++] = null;
    }
  }
}
function $L(n, e) {
  if (jL(n)) {
    let o = n[0].slice();
    for (let l = 1; l < n.length; l++) o.push(...n[l].slice(1));
    return qL(o[0]) || (o = KL(o)), o;
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
      let h = l[f], p = Array(r).fill(void 0), m = e ? e[o][f] : HL, b = [];
      for (let S = 0; S < h.length; S++) {
        let M = h[S], A = s.get(a[S]);
        M === null ? m != FL && (p[A] = M, m == VL && b.push(A)) : p[A] = M;
      }
      WL(p, b, r), i.push(p);
    }
  }
  return i;
}
const zL = typeof queueMicrotask > "u" ? (n) => Promise.resolve().then(n) : queueMicrotask;
function KL(n) {
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
function jL(n) {
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
function qL(n, e = 100) {
  const t = n.length;
  if (t <= 1) return true;
  let i = 0, r = t - 1;
  for (; i <= r && n[i] == null; ) i++;
  for (; r >= i && n[r] == null; ) r--;
  if (r <= i) return true;
  const s = Pn(1, ri((r - i + 1) / e));
  for (let o = n[i], l = i + s; l <= r; l += s) {
    const a = n[l];
    if (a != null) {
      if (a <= o) return false;
      o = a;
    }
  }
  return true;
}
const M1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], A1 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function E1(n) {
  return n.slice(0, 3);
}
const UL = A1.map(E1), GL = M1.map(E1), YL = { MMMM: M1, MMM: GL, WWWW: A1, WWW: UL };
function pl(n) {
  return (n < 10 ? "0" : "") + n;
}
function JL(n) {
  return (n < 10 ? "00" : n < 100 ? "0" : "") + n;
}
const QL = { YYYY: (n) => n.getFullYear(), YY: (n) => (n.getFullYear() + "").slice(2), MMMM: (n, e) => e.MMMM[n.getMonth()], MMM: (n, e) => e.MMM[n.getMonth()], MM: (n) => pl(n.getMonth() + 1), M: (n) => n.getMonth() + 1, DD: (n) => pl(n.getDate()), D: (n) => n.getDate(), WWWW: (n, e) => e.WWWW[n.getDay()], WWW: (n, e) => e.WWW[n.getDay()], HH: (n) => pl(n.getHours()), H: (n) => n.getHours(), h: (n) => {
  let e = n.getHours();
  return e == 0 ? 12 : e > 12 ? e - 12 : e;
}, AA: (n) => n.getHours() >= 12 ? "PM" : "AM", aa: (n) => n.getHours() >= 12 ? "pm" : "am", a: (n) => n.getHours() >= 12 ? "p" : "a", mm: (n) => pl(n.getMinutes()), m: (n) => n.getMinutes(), ss: (n) => pl(n.getSeconds()), s: (n) => n.getSeconds(), fff: (n) => JL(n.getMilliseconds()) };
function xp(n, e) {
  e = e || YL;
  let t = [], i = /\{([a-z]+)\}|[^{]+/gi, r;
  for (; r = i.exec(n); ) t.push(r[0][0] == "{" ? QL[r[1]] : r[0]);
  return (s) => {
    let o = "";
    for (let l = 0; l < t.length; l++) o += typeof t[l] == "string" ? t[l] : t[l](s, e);
    return o;
  };
}
const XL = new Intl.DateTimeFormat().resolvedOptions().timeZone;
function ZL(n, e) {
  let t;
  return e == "UTC" || e == "Etc/UTC" ? t = new Date(+n + n.getTimezoneOffset() * 6e4) : e == XL ? t = n : (t = new Date(n.toLocaleString("en-US", { timeZone: e })), t.setMilliseconds(n.getMilliseconds())), t;
}
const T1 = (n) => n % 1 == 0, rf = [1, 2, 2.5, 5], eD = ta(10, -32, 0, rf), O1 = ta(10, 0, 32, rf), tD = O1.filter(T1), Ss = eD.concat(O1), Sp = `
`, _1 = "{YYYY}", m0 = Sp + _1, L1 = "{M}/{D}", Ml = Sp + L1, sc = Ml + "/{YY}", D1 = "{aa}", nD = "{h}:{mm}", oo = nD + D1, y0 = Sp + oo, v0 = ":{ss}", et = null;
function R1(n) {
  let e = n * 1e3, t = e * 60, i = t * 60, r = i * 24, s = r * 30, o = r * 365, a = (n == 1 ? ta(10, 0, 3, rf).filter(T1) : ta(10, -3, 0, rf)).concat([e, e * 5, e * 10, e * 15, e * 30, t, t * 5, t * 10, t * 15, t * 30, i, i * 2, i * 3, i * 4, i * 6, i * 8, i * 12, r, r * 2, r * 3, r * 4, r * 5, r * 6, r * 7, r * 8, r * 9, r * 10, r * 15, s, s * 2, s * 3, s * 4, s * 6, o, o * 2, o * 5, o * 10, o * 25, o * 50, o * 100]);
  const f = [[o, _1, et, et, et, et, et, et, 1], [r * 28, "{MMM}", m0, et, et, et, et, et, 1], [r, L1, m0, et, et, et, et, et, 1], [i, "{h}" + D1, sc, et, Ml, et, et, et, 1], [t, oo, sc, et, Ml, et, et, et, 1], [e, v0, sc + " " + oo, et, Ml + " " + oo, et, y0, et, 1], [n, v0 + ".{fff}", sc + " " + oo, et, Ml + " " + oo, et, y0, et, 1]];
  function h(p) {
    return (m, b, S, M, A, _) => {
      let R = [], N = A >= o, B = A >= s && A < o, W = p(S), H = ut(W * n, 3), K = Oh(W.getFullYear(), N ? 0 : W.getMonth(), B || N ? 1 : W.getDate()), ee = ut(K * n, 3);
      if (B || N) {
        let oe = B ? A / s : 0, re = N ? A / o : 0, q = H == ee ? H : ut(Oh(K.getFullYear() + re, K.getMonth() + oe, 1) * n, 3), Z = new Date(jt(q / n)), J = Z.getFullYear(), se = Z.getMonth();
        for (let ie = 0; q <= M; ie++) {
          let ke = Oh(J + re * ie, se + oe * ie, 1), ae = ke - p(ut(ke * n, 3));
          q = ut((+ke + ae) * n, 3), q <= M && R.push(q);
        }
      } else {
        let oe = A >= r ? r : A, re = ri(S) - ri(H), q = ee + re + Af(H - ee, oe);
        R.push(q);
        let Z = p(q), J = Z.getHours() + Z.getMinutes() / t + Z.getSeconds() / i, se = A / i, ie = m.axes[b]._space, ke = _ / ie;
        for (; q = ut(q + A, n == 1 ? 0 : 3), !(q > M); ) if (se > 1) {
          let ae = ri(ut(J + se, 6)) % 24, Me = p(q).getHours() - ae;
          Me > 1 && (Me = -1), q -= Me * i, J = (J + se) % 24;
          let Le = R[R.length - 1];
          ut((q - Le) / A, 3) * ke >= 0.7 && R.push(q);
        } else R.push(q);
      }
      return R;
    };
  }
  return [a, f, h];
}
const [iD, rD, sD] = R1(1), [oD, lD, aD] = R1(1e-3);
ta(2, -53, 53, [1]);
function b0(n, e) {
  return n.map((t) => t.map((i, r) => r == 0 || r == 8 || i == null ? i : e(r == 1 || t[8] == 0 ? i : t[1] + i)));
}
function w0(n, e) {
  return (t, i, r, s, o) => {
    let l = e.find((S) => o >= S[0]) || e[e.length - 1], a, f, h, p, m, b;
    return i.map((S) => {
      let M = n(S), A = M.getFullYear(), _ = M.getMonth(), R = M.getDate(), N = M.getHours(), B = M.getMinutes(), W = M.getSeconds(), H = A != a && l[2] || _ != f && l[3] || R != h && l[4] || N != p && l[5] || B != m && l[6] || W != b && l[7] || l[1];
      return a = A, f = _, h = R, p = N, m = B, b = W, H(M);
    });
  };
}
function cD(n, e) {
  let t = xp(e);
  return (i, r, s, o, l) => r.map((a) => t(n(a)));
}
function Oh(n, e, t) {
  return new Date(n, e, t);
}
function x0(n, e) {
  return e(n);
}
const fD = "{YYYY}-{MM}-{DD} {h}:{mm}{aa}";
function S0(n, e) {
  return (t, i, r, s) => s == null ? gp : e(n(i));
}
function hD(n, e) {
  let t = n.series[e];
  return t.width ? t.stroke(n, e) : t.points.width ? t.points.stroke(n, e) : null;
}
function uD(n, e) {
  return n.series[e].fill(n, e);
}
const dD = { show: true, live: true, isolate: false, mount: DL, markers: { show: true, width: 2, stroke: hD, fill: uD, dash: "solid" }, idx: null, idxs: null, values: [] };
function pD(n, e) {
  let t = n.cursor.points, i = fi(), r = t.size(n, e);
  bt(i, kl, r), bt(i, Cl, r);
  let s = r / -2;
  bt(i, "marginLeft", s), bt(i, "marginTop", s);
  let o = t.width(n, e, r);
  return o && bt(i, "borderWidth", o), i;
}
function gD(n, e) {
  let t = n.series[e].points;
  return t._fill || t._stroke;
}
function mD(n, e) {
  let t = n.series[e].points;
  return t._stroke || t._fill;
}
function yD(n, e) {
  return n.series[e].points.size;
}
const _h = [0, 0];
function vD(n, e, t) {
  return _h[0] = e, _h[1] = t, _h;
}
function oc(n, e, t, i = true) {
  return (r) => {
    r.button == 0 && (!i || r.target == e) && t(r);
  };
}
function Lh(n, e, t, i = true) {
  return (r) => {
    (!i || r.target == e) && t(r);
  };
}
const bD = { show: true, x: true, y: true, lock: false, move: vD, points: { one: false, show: pD, size: yD, width: 0, stroke: mD, fill: gD }, bind: { mousedown: oc, mouseup: oc, click: oc, dblclick: oc, mousemove: Lh, mouseleave: Lh, mouseenter: Lh }, drag: { setScale: true, x: true, y: false, dist: 0, uni: null, click: (n, e) => {
  e.stopPropagation(), e.stopImmediatePropagation();
}, _x: false, _y: false }, focus: { dist: (n, e, t, i, r) => i - r, prox: -1, bias: 0 }, hover: { skip: [void 0], prox: null, bias: 0 }, left: -10, top: -10, idx: null, dataIdx: null, idxs: null, event: null }, P1 = { show: true, stroke: "rgba(0,0,0,0.07)", width: 2 }, kp = $t({}, P1, { filter: w1 }), B1 = $t({}, kp, { size: 10 }), I1 = $t({}, P1, { show: false }), Cp = '12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', N1 = "bold " + Cp, F1 = 1.5, k0 = { show: true, scale: "x", stroke: pp, space: 50, gap: 5, alignTo: 1, size: 50, labelGap: 0, labelSize: 30, labelFont: N1, side: 2, grid: kp, ticks: B1, border: I1, font: Cp, lineGap: F1, rotate: 0 }, wD = "Value", xD = "Time", C0 = { show: true, scale: "x", auto: false, sorted: 1, min: ht, max: -ht, idxs: [] };
function SD(n, e, t, i, r) {
  return e.map((s) => s == null ? "" : bp(s));
}
function kD(n, e, t, i, r, s, o) {
  let l = [], a = ss.get(r) || 0;
  t = o ? t : ut(Af(t, r), a);
  for (let f = t; f <= i; f = ut(f + r, a)) l.push(Object.is(f, -0) ? 0 : f);
  return l;
}
function id(n, e, t, i, r, s, o) {
  const l = [], a = n.scales[n.axes[e].scale].log, f = a == 10 ? Cr : y1, h = ri(f(t));
  r = To(a, h), a == 10 && (r = Ss[_i(r, Ss)]);
  let p = t, m = r * a;
  a == 10 && (m = Ss[_i(m, Ss)]);
  do
    l.push(p), p = p + r, a == 10 && !ss.has(p) && (p = ut(p, ss.get(r))), p >= m && (r = p, m = r * a, a == 10 && (m = Ss[_i(m, Ss)]));
  while (p <= i);
  return l;
}
function CD(n, e, t, i, r, s, o) {
  let a = n.scales[n.axes[e].scale].asinh, f = i > a ? id(n, e, Pn(a, t), i, r) : [a], h = i >= 0 && t <= 0 ? [0] : [];
  return (t < -a ? id(n, e, Pn(a, -i), -t, r) : [a]).reverse().map((m) => -m).concat(h, f);
}
const H1 = /./, MD = /[12357]/, AD = /[125]/, M0 = /1/, rd = (n, e, t, i) => n.map((r, s) => e == 4 && r == 0 || s % i == 0 && t.test(r.toExponential()[r < 0 ? 1 : 0]) ? r : null);
function ED(n, e, t, i, r) {
  let s = n.axes[t], o = s.scale, l = n.scales[o], a = n.valToPos, f = s._space, h = a(10, o), p = a(9, o) - h >= f ? H1 : a(7, o) - h >= f ? MD : a(5, o) - h >= f ? AD : M0;
  if (p == M0) {
    let m = qt(a(1, o) - h);
    if (m < f) return rd(e.slice().reverse(), l.distr, p, ui(f / m)).reverse();
  }
  return rd(e, l.distr, p, 1);
}
function TD(n, e, t, i, r) {
  let s = n.axes[t], o = s.scale, l = s._space, a = n.valToPos, f = qt(a(1, o) - a(2, o));
  return f < l ? rd(e.slice().reverse(), 3, H1, ui(l / f)).reverse() : e;
}
function OD(n, e, t, i) {
  return i == null ? gp : e == null ? "" : bp(e);
}
const A0 = { show: true, scale: "y", stroke: pp, space: 30, gap: 5, alignTo: 1, size: 50, labelGap: 0, labelSize: 30, labelFont: N1, side: 3, grid: kp, ticks: B1, border: I1, font: Cp, lineGap: F1, rotate: 0 };
function _D(n, e) {
  let t = 3 + (n || 1) * 2;
  return ut(t * e, 3);
}
function LD(n, e) {
  let { scale: t, idxs: i } = n.series[0], r = n._data[0], s = n.valToPos(r[i[0]], t, true), o = n.valToPos(r[i[1]], t, true), l = qt(o - s), a = n.series[e], f = l / (a.points.space * Je);
  return i[1] - i[0] <= f;
}
const E0 = { scale: null, auto: true, sorted: 0, min: ht, max: -ht }, V1 = (n, e, t, i, r) => r, T0 = { show: true, auto: true, sorted: 0, gaps: V1, alpha: 1, facets: [$t({}, E0, { scale: "x" }), $t({}, E0, { scale: "y" })] }, O0 = { scale: "y", auto: true, sorted: 0, show: true, spanGaps: false, gaps: V1, alpha: 1, points: { show: LD, filter: null }, values: null, min: ht, max: -ht, idxs: [], path: null, clip: null };
function DD(n, e, t, i, r) {
  return t / 10;
}
const W1 = { time: iL, auto: true, distr: 1, log: 10, asinh: 1, min: null, max: null, dir: 1, ori: 0 }, RD = $t({}, W1, { time: false, ori: 1 }), _0 = {};
function $1(n, e) {
  let t = _0[n];
  return t || (t = { key: n, plots: [], sub(i) {
    t.plots.push(i);
  }, unsub(i) {
    t.plots = t.plots.filter((r) => r != i);
  }, pub(i, r, s, o, l, a, f) {
    for (let h = 0; h < t.plots.length; h++) t.plots[h] != r && t.plots[h].pub(i, r, s, o, l, a, f);
  } }, n != null && (_0[n] = t)), t;
}
const Lo = 1, sd = 2;
function js(n, e, t) {
  const i = n.mode, r = n.series[e], s = i == 2 ? n._data[e] : n._data, o = n.scales, l = n.bbox;
  let a = s[0], f = i == 2 ? s[1] : s[e], h = i == 2 ? o[r.facets[0].scale] : o[n.series[0].scale], p = i == 2 ? o[r.facets[1].scale] : o[r.scale], m = l.left, b = l.top, S = l.width, M = l.height, A = n.valToPosH, _ = n.valToPosV;
  return h.ori == 0 ? t(r, a, f, h, p, A, _, m, b, S, M, Of, Wo, Lf, K1, q1) : t(r, a, f, h, p, _, A, b, m, M, S, _f, $o, Ep, j1, U1);
}
function Mp(n, e) {
  let t = 0, i = 0, r = Ue(n.bands, wp);
  for (let s = 0; s < r.length; s++) {
    let o = r[s];
    o.series[0] == e ? t = o.dir : o.series[1] == e && (o.dir == 1 ? i |= 1 : i |= 2);
  }
  return [t, i == 1 ? -1 : i == 2 ? 1 : i == 3 ? 2 : 0];
}
function PD(n, e, t, i, r) {
  let s = n.mode, o = n.series[e], l = s == 2 ? o.facets[1].scale : o.scale, a = n.scales[l];
  return r == -1 ? a.min : r == 1 ? a.max : a.distr == 3 ? a.dir == 1 ? a.min : a.max : 0;
}
function Mr(n, e, t, i, r, s) {
  return js(n, e, (o, l, a, f, h, p, m, b, S, M, A) => {
    let _ = o.pxRound;
    const R = f.dir * (f.ori == 0 ? 1 : -1), N = f.ori == 0 ? Wo : $o;
    let B, W;
    R == 1 ? (B = t, W = i) : (B = i, W = t);
    let H = _(p(l[B], f, M, b)), K = _(m(a[B], h, A, S)), ee = _(p(l[W], f, M, b)), oe = _(m(s == 1 ? h.max : h.min, h, A, S)), re = new Path2D(r);
    return N(re, ee, oe), N(re, H, oe), N(re, H, K), re;
  });
}
function Tf(n, e, t, i, r, s) {
  let o = null;
  if (n.length > 0) {
    o = new Path2D();
    const l = e == 0 ? Lf : Ep;
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
function BD(n, e, t) {
  let i = n[n.length - 1];
  i && i[0] == e ? i[1] = t : n.push([e, t]);
}
function Ap(n, e, t, i, r, s, o) {
  let l = [], a = n.length;
  for (let f = r == 1 ? t : i; f >= t && f <= i; f += r) if (e[f] === null) {
    let p = f, m = f;
    if (r == 1) for (; ++f <= i && e[f] === null; ) m = f;
    else for (; --f >= t && e[f] === null; ) m = f;
    let b = s(n[p]), S = m == p ? b : s(n[m]), M = p - r;
    b = o <= 0 && M >= 0 && M < a ? s(n[M]) : b;
    let _ = m + r;
    S = o >= 0 && _ >= 0 && _ < a ? s(n[_]) : S, S >= b && l.push([b, S]);
  }
  return l;
}
function L0(n) {
  return n == 0 ? b1 : n == 1 ? jt : (e) => xs(e, n);
}
function z1(n) {
  let e = n == 0 ? Of : _f, t = n == 0 ? (r, s, o, l, a, f) => {
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
const Of = (n, e, t) => {
  n.moveTo(e, t);
}, _f = (n, e, t) => {
  n.moveTo(t, e);
}, Wo = (n, e, t) => {
  n.lineTo(e, t);
}, $o = (n, e, t) => {
  n.lineTo(t, e);
}, Lf = z1(0), Ep = z1(1), K1 = (n, e, t, i, r, s) => {
  n.arc(e, t, i, r, s);
}, j1 = (n, e, t, i, r, s) => {
  n.arc(t, e, i, r, s);
}, q1 = (n, e, t, i, r, s, o) => {
  n.bezierCurveTo(e, t, i, r, s, o);
}, U1 = (n, e, t, i, r, s, o) => {
  n.bezierCurveTo(t, e, r, i, o, s);
};
function G1(n) {
  return (e, t, i, r, s) => js(e, t, (o, l, a, f, h, p, m, b, S, M, A) => {
    let { pxRound: _, points: R } = o, N, B;
    f.ori == 0 ? (N = Of, B = K1) : (N = _f, B = j1);
    const W = ut(R.width * Je, 3);
    let H = (R.size - R.width) / 2 * Je, K = ut(H * 2, 3), ee = new Path2D(), oe = new Path2D(), { left: re, top: q, width: Z, height: J } = e.bbox;
    Lf(oe, re - K, q - K, Z + K * 2, J + K * 2);
    const se = (ie) => {
      if (a[ie] != null) {
        let ke = _(p(l[ie], f, M, b)), ae = _(m(a[ie], h, A, S));
        N(ee, ke + H, ae), B(ee, ke, ae, H, 0, Cc * 2);
      }
    };
    if (s) s.forEach(se);
    else for (let ie = i; ie <= r; ie++) se(ie);
    return { stroke: W > 0 ? ee : null, fill: ee, clip: oe, flags: Lo | sd };
  });
}
function Y1(n) {
  return (e, t, i, r, s, o) => {
    i != r && (s != i && o != i && n(e, t, i), s != r && o != r && n(e, t, r), n(e, t, o));
  };
}
const ID = Y1(Wo), ND = Y1($o);
function J1(n) {
  const e = Ue(n == null ? void 0 : n.alignGaps, 0);
  return (t, i, r, s) => js(t, i, (o, l, a, f, h, p, m, b, S, M, A) => {
    [r, s] = Cf(a, r, s);
    let _ = o.pxRound, R = (J) => _(p(J, f, M, b)), N = (J) => _(m(J, h, A, S)), B, W;
    f.ori == 0 ? (B = Wo, W = ID) : (B = $o, W = ND);
    const H = f.dir * (f.ori == 0 ? 1 : -1), K = { stroke: new Path2D(), fill: null, clip: null, band: null, gaps: null, flags: Lo }, ee = K.stroke;
    let oe = false;
    if (s - r >= M * 4) {
      let J = (fe) => t.posToVal(fe, f.key, true), se = null, ie = null, ke, ae, te, Te = R(l[H == 1 ? r : s]), Me = R(l[r]), Le = R(l[s]), ye = J(H == 1 ? Me + 1 : Le - 1);
      for (let fe = H == 1 ? r : s; fe >= r && fe <= s; fe += H) {
        let Ke = l[fe], Ge = (H == 1 ? Ke < ye : Ke > ye) ? Te : R(Ke), Ne = a[fe];
        Ge == Te ? Ne != null ? (ae = Ne, se == null ? (B(ee, Ge, N(ae)), ke = se = ie = ae) : ae < se ? se = ae : ae > ie && (ie = ae)) : Ne === null && (oe = true) : (se != null && W(ee, Te, N(se), N(ie), N(ke), N(ae)), Ne != null ? (ae = Ne, B(ee, Ge, N(ae)), se = ie = ke = ae) : (se = ie = null, Ne === null && (oe = true)), Te = Ge, ye = J(Te + H));
      }
      se != null && se != ie && te != Te && W(ee, Te, N(se), N(ie), N(ke), N(ae));
    } else for (let J = H == 1 ? r : s; J >= r && J <= s; J += H) {
      let se = a[J];
      se === null ? oe = true : se != null && B(ee, R(l[J]), N(se));
    }
    let [q, Z] = Mp(t, i);
    if (o.fill != null || q != 0) {
      let J = K.fill = new Path2D(ee), se = o.fillTo(t, i, o.min, o.max, q), ie = N(se), ke = R(l[r]), ae = R(l[s]);
      H == -1 && ([ae, ke] = [ke, ae]), B(J, ae, ie), B(J, ke, ie);
    }
    if (!o.spanGaps) {
      let J = [];
      oe && J.push(...Ap(l, a, r, s, H, R, e)), K.gaps = J = o.gaps(t, i, r, s, J), K.clip = Tf(J, f.ori, b, S, M, A);
    }
    return Z != 0 && (K.band = Z == 2 ? [Mr(t, i, r, s, ee, -1), Mr(t, i, r, s, ee, 1)] : Mr(t, i, r, s, ee, Z)), K;
  });
}
function FD(n) {
  const e = Ue(n.align, 1), t = Ue(n.ascDesc, false), i = Ue(n.alignGaps, 0), r = Ue(n.extend, false);
  return (s, o, l, a) => js(s, o, (f, h, p, m, b, S, M, A, _, R, N) => {
    [l, a] = Cf(p, l, a);
    let B = f.pxRound, { left: W, width: H } = s.bbox, K = (Me) => B(S(Me, m, R, A)), ee = (Me) => B(M(Me, b, N, _)), oe = m.ori == 0 ? Wo : $o;
    const re = { stroke: new Path2D(), fill: null, clip: null, band: null, gaps: null, flags: Lo }, q = re.stroke, Z = m.dir * (m.ori == 0 ? 1 : -1);
    let J = ee(p[Z == 1 ? l : a]), se = K(h[Z == 1 ? l : a]), ie = se, ke = se;
    r && e == -1 && (ke = W, oe(q, ke, J)), oe(q, se, J);
    for (let Me = Z == 1 ? l : a; Me >= l && Me <= a; Me += Z) {
      let Le = p[Me];
      if (Le == null) continue;
      let ye = K(h[Me]), fe = ee(Le);
      e == 1 ? oe(q, ye, J) : oe(q, ie, fe), oe(q, ye, fe), J = fe, ie = ye;
    }
    let ae = ie;
    r && e == 1 && (ae = W + H, oe(q, ae, J));
    let [te, Te] = Mp(s, o);
    if (f.fill != null || te != 0) {
      let Me = re.fill = new Path2D(q), Le = f.fillTo(s, o, f.min, f.max, te), ye = ee(Le);
      oe(Me, ae, ye), oe(Me, ke, ye);
    }
    if (!f.spanGaps) {
      let Me = [];
      Me.push(...Ap(h, p, l, a, Z, K, i));
      let Le = f.width * Je / 2, ye = t || e == 1 ? Le : -Le, fe = t || e == -1 ? -Le : Le;
      Me.forEach((Ke) => {
        Ke[0] += ye, Ke[1] += fe;
      }), re.gaps = Me = f.gaps(s, o, l, a, Me), re.clip = Tf(Me, m.ori, A, _, R, N);
    }
    return Te != 0 && (re.band = Te == 2 ? [Mr(s, o, l, a, q, -1), Mr(s, o, l, a, q, 1)] : Mr(s, o, l, a, q, Te)), re;
  });
}
function D0(n, e, t, i, r, s, o = ht) {
  if (n.length > 1) {
    let l = null;
    for (let a = 0, f = 1 / 0; a < n.length; a++) if (e[a] !== void 0) {
      if (l != null) {
        let h = qt(n[a] - n[l]);
        h < f && (f = h, o = qt(t(n[a], i, r, s) - t(n[l], i, r, s)));
      }
      l = a;
    }
  }
  return o;
}
function HD(n) {
  n = n || Hl;
  const e = Ue(n.size, [0.6, ht, 1]), t = n.align || 0, i = n.gap || 0;
  let r = n.radius;
  r = r == null ? [0, 0] : typeof r == "number" ? [r, 0] : r;
  const s = He(r), o = 1 - e[0], l = Ue(e[1], ht), a = Ue(e[2], 1), f = Ue(n.disp, Hl), h = Ue(n.each, (b) => {
  }), { fill: p, stroke: m } = f;
  return (b, S, M, A) => js(b, S, (_, R, N, B, W, H, K, ee, oe, re, q) => {
    let Z = _.pxRound, J = t, se = i * Je, ie = l * Je, ke = a * Je, ae, te;
    B.ori == 0 ? [ae, te] = s(b, S) : [te, ae] = s(b, S);
    const Te = B.dir * (B.ori == 0 ? 1 : -1);
    let Me = B.ori == 0 ? Lf : Ep, Le = B.ori == 0 ? h : (de, nt, dt, Lr, Ct, kn, it) => {
      h(de, nt, dt, Ct, Lr, it, kn);
    }, ye = Ue(b.bands, wp).find((de) => de.series[0] == S), fe = ye != null ? ye.dir : 0, Ke = _.fillTo(b, S, _.min, _.max, fe), De = Z(K(Ke, W, q, oe)), Ge, Ne, wn, xn = re, Xe = Z(_.width * Je), fn = false, oi = null, Sn = null, ki = null, mt = null;
    p != null && (Xe == 0 || m != null) && (fn = true, oi = p.values(b, S, M, A), Sn = /* @__PURE__ */ new Map(), new Set(oi).forEach((de) => {
      de != null && Sn.set(de, new Path2D());
    }), Xe > 0 && (ki = m.values(b, S, M, A), mt = /* @__PURE__ */ new Map(), new Set(ki).forEach((de) => {
      de != null && mt.set(de, new Path2D());
    })));
    let { x0: _r, size: hn } = f;
    if (_r != null && hn != null) {
      J = 1, R = _r.values(b, S, M, A), _r.unit == 2 && (R = R.map((dt) => b.posToVal(ee + dt * re, B.key, true)));
      let de = hn.values(b, S, M, A);
      hn.unit == 2 ? Ne = de[0] * re : Ne = H(de[0], B, re, ee) - H(0, B, re, ee), xn = D0(R, N, H, B, re, ee, xn), wn = xn - Ne + se;
    } else xn = D0(R, N, H, B, re, ee, xn), wn = xn * o + se, Ne = xn - wn;
    wn < 1 && (wn = 0), Xe >= Ne / 2 && (Xe = 0), wn < 5 && (Z = b1);
    let qs = wn > 0, dr = xn - wn - (qs ? Xe : 0);
    Ne = Z(nd(dr, ke, ie)), Ge = (J == 0 ? Ne / 2 : J == Te ? 0 : Ne) - J * Te * ((J == 0 ? se / 2 : 0) + (qs ? Xe / 2 : 0));
    const Qt = { stroke: null, fill: null, clip: null, band: null, gaps: null, flags: 0 }, Fn = fn ? null : new Path2D();
    let Pt = null;
    if (ye != null) Pt = b.data[ye.series[1]];
    else {
      let { y0: de, y1: nt } = f;
      de != null && nt != null && (N = nt.values(b, S, M, A), Pt = de.values(b, S, M, A));
    }
    let pr = ae * Ne, Re = te * Ne;
    for (let de = Te == 1 ? M : A; de >= M && de <= A; de += Te) {
      let nt = N[de];
      if (nt == null) continue;
      if (Pt != null) {
        let un = Pt[de] ?? 0;
        if (nt - un == 0) continue;
        De = K(un, W, q, oe);
      }
      let dt = B.distr != 2 || f != null ? R[de] : de, Lr = H(dt, B, re, ee), Ct = K(Ue(nt, Ke), W, q, oe), kn = Z(Lr - Ge), it = Z(Pn(Ct, De)), Cn = Z(Li(Ct, De)), Hn = it - Cn;
      if (nt != null) {
        let un = nt < 0 ? Re : pr, Vn = nt < 0 ? pr : Re;
        fn ? (Xe > 0 && ki[de] != null && Me(mt.get(ki[de]), kn, Cn + ri(Xe / 2), Ne, Pn(0, Hn - Xe), un, Vn), oi[de] != null && Me(Sn.get(oi[de]), kn, Cn + ri(Xe / 2), Ne, Pn(0, Hn - Xe), un, Vn)) : Me(Fn, kn, Cn + ri(Xe / 2), Ne, Pn(0, Hn - Xe), un, Vn), Le(b, S, de, kn - Xe / 2, Cn, Ne + Xe, Hn);
      }
    }
    return Xe > 0 ? Qt.stroke = fn ? mt : Fn : fn || (Qt._fill = _.width == 0 ? _._fill : _._stroke ?? _._fill, Qt.width = 0), Qt.fill = fn ? Sn : Fn, Qt;
  });
}
function VD(n, e) {
  const t = Ue(e == null ? void 0 : e.alignGaps, 0);
  return (i, r, s, o) => js(i, r, (l, a, f, h, p, m, b, S, M, A, _) => {
    [s, o] = Cf(f, s, o);
    let R = l.pxRound, N = (ae) => R(m(ae, h, A, S)), B = (ae) => R(b(ae, p, _, M)), W, H, K;
    h.ori == 0 ? (W = Of, K = Wo, H = q1) : (W = _f, K = $o, H = U1);
    const ee = h.dir * (h.ori == 0 ? 1 : -1);
    let oe = N(a[ee == 1 ? s : o]), re = oe, q = [], Z = [];
    for (let ae = ee == 1 ? s : o; ae >= s && ae <= o; ae += ee) if (f[ae] != null) {
      let Te = a[ae], Me = N(Te);
      q.push(re = Me), Z.push(B(f[ae]));
    }
    const J = { stroke: n(q, Z, W, K, H, R), fill: null, clip: null, band: null, gaps: null, flags: Lo }, se = J.stroke;
    let [ie, ke] = Mp(i, r);
    if (l.fill != null || ie != 0) {
      let ae = J.fill = new Path2D(se), te = l.fillTo(i, r, l.min, l.max, ie), Te = B(te);
      K(ae, re, Te), K(ae, oe, Te);
    }
    if (!l.spanGaps) {
      let ae = [];
      ae.push(...Ap(a, f, s, o, ee, N, t)), J.gaps = ae = l.gaps(i, r, s, o, ae), J.clip = Tf(ae, h.ori, S, M, A, _);
    }
    return ke != 0 && (J.band = ke == 2 ? [Mr(i, r, s, o, se, -1), Mr(i, r, s, o, se, 1)] : Mr(i, r, s, o, se, ke)), J;
  });
}
function WD(n) {
  return VD($D, n);
}
function $D(n, e, t, i, r, s) {
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
const od = /* @__PURE__ */ new Set();
function R0() {
  for (let n of od) n.syncRect(true);
}
Vo && (Bs(SL, mo, R0), Bs(kL, mo, R0, true), Bs(tf, mo, () => {
  yn.pxRatio = Je;
}));
const zD = J1(), KD = G1();
function P0(n, e, t, i) {
  return (i ? [n[0], n[1]].concat(n.slice(2)) : [n[0]].concat(n.slice(1))).map((s, o) => ld(s, o, e, t));
}
function jD(n, e) {
  return n.map((t, i) => i == 0 ? {} : $t({}, e, t));
}
function ld(n, e, t, i) {
  return $t({}, e == 0 ? t : i, n);
}
function Q1(n, e, t) {
  return e == null ? Oo : [e, t];
}
const qD = Q1;
function UD(n, e, t) {
  return e == null ? Oo : nf(e, t, vp, true);
}
function X1(n, e, t, i) {
  return e == null ? Oo : Mf(e, t, n.scales[i].log, false);
}
const GD = X1;
function Z1(n, e, t, i) {
  return e == null ? Oo : yp(e, t, n.scales[i].log, false);
}
const YD = Z1;
function JD(n, e, t, i, r) {
  let s = Pn(u0(n), u0(e)), o = e - n, l = _i(r / i * o, t);
  do {
    let a = t[l], f = i * a / o;
    if (f >= r && s + (a < 5 ? ss.get(a) : 0) <= 17) return [a, f];
  } while (++l < t.length);
  return [0, 0];
}
function B0(n) {
  let e, t;
  return n = n.replace(/(\d+)px/, (i, r) => (e = jt((t = +r) * Je)) + "px"), [n, e, t];
}
function QD(n) {
  n.show && [n.font, n.labelFont].forEach((e) => {
    let t = ut(e[2] * Je, 1);
    e[0] = e[0].replace(/[0-9.]+px/, t + "px"), e[1] = t;
  });
}
function yn(n, e, t) {
  const i = { mode: Ue(n.mode, 1) }, r = i.mode;
  function s(w, x, T, O) {
    let P = x.valToPct(w);
    return O + T * (x.dir == -1 ? 1 - P : P);
  }
  function o(w, x, T, O) {
    let P = x.valToPct(w);
    return O + T * (x.dir == -1 ? P : 1 - P);
  }
  function l(w, x, T, O) {
    return x.ori == 0 ? s(w, x, T, O) : o(w, x, T, O);
  }
  i.valToPosH = s, i.valToPosV = o;
  let a = false;
  i.status = 0;
  const f = i.root = fi(rL);
  if (n.id != null && (f.id = n.id), ti(f, n.class), n.title) {
    let w = fi(lL, f);
    w.textContent = n.title;
  }
  const h = Oi("canvas"), p = i.ctx = h.getContext("2d"), m = fi(aL, f);
  Bs("click", m, (w) => {
    w.target === S && (rt != Fr || at != vr) && Ft.click(i, w);
  }, true);
  const b = i.under = fi(cL, m);
  m.appendChild(h);
  const S = i.over = fi(fL, m);
  n = _o(n);
  const M = +Ue(n.pxAlign, 1), A = L0(M);
  (n.plugins || []).forEach((w) => {
    w.opts && (n = w.opts(i, n) || n);
  });
  const _ = n.ms || 1e-3, R = i.series = r == 1 ? P0(n.series || [], C0, O0, false) : jD(n.series || [null], T0), N = i.axes = P0(n.axes || [], k0, A0, true), B = i.scales = {}, W = i.bands = n.bands || [];
  W.forEach((w) => {
    w.fill = He(w.fill || null), w.dir = Ue(w.dir, -1);
  });
  const H = r == 2 ? R[1].facets[0].scale : R[0].scale, K = { axes: Ff, series: Yn }, ee = (n.drawOrder || ["axes", "series"]).map((w) => K[w]);
  function oe(w) {
    const x = w.distr == 3 ? (T) => Cr(T > 0 ? T : w.clamp(i, T, w.min, w.max, w.key)) : w.distr == 4 ? (T) => Th(T, w.asinh) : w.distr == 100 ? (T) => w.fwd(T) : (T) => T;
    return (T) => {
      let O = x(T), { _min: P, _max: z } = w, G = z - P;
      return (O - P) / G;
    };
  }
  function re(w) {
    let x = B[w];
    if (x == null) {
      let T = (n.scales || Hl)[w] || Hl;
      if (T.from != null) {
        re(T.from);
        let O = $t({}, B[T.from], T, { key: w });
        O.valToPct = oe(O), B[w] = O;
      } else {
        x = B[w] = $t({}, w == H ? W1 : RD, T), x.key = w;
        let O = x.time, P = x.range, z = $r(P);
        if ((w != H || r == 2 && !O) && (z && (P[0] == null || P[1] == null) && (P = { min: P[0] == null ? c0 : { mode: 1, hard: P[0], soft: P[0] }, max: P[1] == null ? c0 : { mode: 1, hard: P[1], soft: P[1] } }, z = false), !z && Ef(P))) {
          let G = P;
          P = (Q, ne, pe) => ne == null ? Oo : nf(ne, pe, G);
        }
        x.range = He(P || (O ? qD : w == H ? x.distr == 3 ? GD : x.distr == 4 ? YD : Q1 : x.distr == 3 ? X1 : x.distr == 4 ? Z1 : UD)), x.auto = He(z ? false : x.auto), x.clamp = He(x.clamp || DD), x._min = x._max = null, x.valToPct = oe(x);
      }
    }
  }
  re("x"), re("y"), r == 1 && R.forEach((w) => {
    re(w.scale);
  }), N.forEach((w) => {
    re(w.scale);
  });
  for (let w in n.scales) re(w);
  const q = B[H], Z = q.distr;
  let J, se;
  q.ori == 0 ? (ti(f, sL), J = s, se = o) : (ti(f, oL), J = o, se = s);
  const ie = {};
  for (let w in B) {
    let x = B[w];
    (x.min != null || x.max != null) && (ie[w] = { min: x.min, max: x.max }, x.min = x.max = null);
  }
  const ke = n.tzDate || ((w) => new Date(jt(w / _))), ae = n.fmtDate || xp, te = _ == 1 ? sD(ke) : aD(ke), Te = w0(ke, b0(_ == 1 ? rD : lD, ae)), Me = S0(ke, x0(fD, ae)), Le = [], ye = i.legend = $t({}, dD, n.legend), fe = i.cursor = $t({}, bD, { drag: { y: r == 2 } }, n.cursor), Ke = ye.show, De = fe.show, Ge = ye.markers;
  ye.idxs = Le, Ge.width = He(Ge.width), Ge.dash = He(Ge.dash), Ge.stroke = He(Ge.stroke), Ge.fill = He(Ge.fill);
  let Ne, wn, xn, Xe = [], fn = [], oi, Sn = false, ki = {};
  if (ye.live) {
    const w = R[1] ? R[1].values : null;
    Sn = w != null, oi = Sn ? w(i, 1, 0) : { _: 0 };
    for (let x in oi) ki[x] = gp;
  }
  if (Ke) if (Ne = Oi("table", mL, f), xn = Oi("tbody", null, Ne), ye.mount(i, Ne), Sn) {
    wn = Oi("thead", null, Ne, xn);
    let w = Oi("tr", null, wn);
    Oi("th", null, w);
    for (var mt in oi) Oi("th", Jm, w).textContent = mt;
  } else ti(Ne, vL), ye.live && ti(Ne, yL);
  const _r = { show: true }, hn = { show: false };
  function qs(w, x) {
    if (x == 0 && (Sn || !ye.live || r == 2)) return Oo;
    let T = [], O = Oi("tr", bL, xn, xn.childNodes[x]);
    ti(O, w.class), w.show || ti(O, Ms);
    let P = Oi("th", null, O);
    if (Ge.show) {
      let Q = fi(wL, P);
      if (x > 0) {
        let ne = Ge.width(i, x);
        ne && (Q.style.border = ne + "px " + Ge.dash(i, x) + " " + Ge.stroke(i, x)), Q.style.background = Ge.fill(i, x);
      }
    }
    let z = fi(Jm, P);
    w.label instanceof HTMLElement ? z.appendChild(w.label) : z.textContent = w.label, x > 0 && (Ge.show || (z.style.color = w.width > 0 ? Ge.stroke(i, x) : Ge.fill(i, x)), Qt("click", P, (Q) => {
      if (fe._lock) return;
      gr(Q);
      let ne = R.indexOf(w);
      if ((Q.ctrlKey || Q.metaKey) != ye.isolate) {
        let pe = R.some((ge, me) => me > 0 && me != ne && ge.show);
        R.forEach((ge, me) => {
          me > 0 && v(me, pe ? me == ne ? _r : hn : _r, true, Vt.setSeries);
        });
      } else v(ne, { show: !w.show }, true, Vt.setSeries);
    }, false), qn && Qt(e0, P, (Q) => {
      fe._lock || (gr(Q), v(R.indexOf(w), $, true, Vt.setSeries));
    }, false));
    for (var G in oi) {
      let Q = Oi("td", xL, O);
      Q.textContent = "--", T.push(Q);
    }
    return [O, T];
  }
  const dr = /* @__PURE__ */ new Map();
  function Qt(w, x, T, O = true) {
    const P = dr.get(x) || {}, z = fe.bind[w](i, x, T, O);
    z && (Bs(w, x, P[w] = z), dr.set(x, P));
  }
  function Fn(w, x, T) {
    const O = dr.get(x) || {};
    for (let P in O) (w == null || P == w) && (td(P, x, O[P]), delete O[P]);
    w == null && dr.delete(x);
  }
  let Pt = 0, pr = 0, Re = 0, de = 0, nt = 0, dt = 0, Lr = nt, Ct = dt, kn = Re, it = de, Cn = 0, Hn = 0, un = 0, Vn = 0;
  i.bbox = {};
  let Ze = false, tn = false, tt = false, Mt = false, jn = false, Mn = false;
  function Bt(w, x, T) {
    (T || w != i.width || x != i.height) && Us(w, x), ji(false), tt = true, tn = true, Lt();
  }
  function Us(w, x) {
    i.width = Pt = Re = w, i.height = pr = de = x, nt = dt = 0, ma(), Pf();
    let T = i.bbox;
    Cn = T.left = xs(nt * Je, 0.5), Hn = T.top = xs(dt * Je, 0.5), un = T.width = xs(Re * Je, 0.5), Vn = T.height = xs(de * Je, 0.5);
  }
  const Df = 3;
  function Rf() {
    let w = false, x = 0;
    for (; !w; ) {
      x++;
      let T = Nf(x), O = Br(x);
      w = x == Df || T && O, w || (Us(i.width, i.height), tn = true);
    }
  }
  function ga({ width: w, height: x }) {
    Bt(w, x);
  }
  i.setSize = ga;
  function ma() {
    let w = false, x = false, T = false, O = false;
    N.forEach((P, z) => {
      if (P.show && P._show) {
        let { side: G, _size: Q } = P, ne = G % 2, pe = P.label != null ? P.labelSize : 0, ge = Q + pe;
        ge > 0 && (ne ? (Re -= ge, G == 3 ? (nt += ge, O = true) : T = true) : (de -= ge, G == 0 ? (dt += ge, w = true) : x = true));
      }
    }), $i[0] = w, $i[1] = T, $i[2] = x, $i[3] = O, Re -= zi[1] + zi[3], nt += zi[3], de -= zi[2] + zi[0], dt += zi[0];
  }
  function Pf() {
    let w = nt + Re, x = dt + de, T = nt, O = dt;
    function P(z, G) {
      switch (z) {
        case 1:
          return w += G, w - G;
        case 2:
          return x += G, x - G;
        case 3:
          return T -= G, T + G;
        case 0:
          return O -= G, O + G;
      }
    }
    N.forEach((z, G) => {
      if (z.show && z._show) {
        let Q = z.side;
        z._pos = P(Q, z._size), z.label != null && (z._lpos = P(Q, z.labelSize));
      }
    });
  }
  if (fe.dataIdx == null) {
    let w = fe.hover, x = w.skip = new Set(w.skip ?? []);
    x.add(void 0);
    let T = w.prox = He(w.prox), O = w.bias ?? (w.bias = 0);
    fe.dataIdx = (P, z, G, Q) => {
      if (z == 0) return G;
      let ne = G, pe = T(P, z, G, Q) ?? ht, ge = pe >= 0 && pe < ht, me = q.ori == 0 ? Re : de, _e = fe.left, Ye = e[0], qe = e[z];
      if (x.has(qe[G])) {
        ne = null;
        let Fe = null, Ae = null, xe;
        if (O == 0 || O == -1) for (xe = G; Fe == null && xe-- > 0; ) x.has(qe[xe]) || (Fe = xe);
        if (O == 0 || O == 1) for (xe = G; Ae == null && xe++ < qe.length; ) x.has(qe[xe]) || (Ae = xe);
        if (Fe != null || Ae != null) if (ge) {
          let vt = Fe == null ? -1 / 0 : J(Ye[Fe], q, me, 0), Tt = Ae == null ? 1 / 0 : J(Ye[Ae], q, me, 0), Zt = _e - vt, ot = Tt - _e;
          Zt <= ot ? Zt <= pe && (ne = Fe) : ot <= pe && (ne = Ae);
        } else ne = Ae == null ? Fe : Fe == null ? Ae : G - Fe <= Ae - G ? Fe : Ae;
      } else ge && qt(_e - J(Ye[G], q, me, 0)) > pe && (ne = null);
      return ne;
    };
  }
  const gr = (w) => {
    fe.event = w;
  };
  fe.idxs = Le, fe._lock = false;
  let Kt = fe.points;
  Kt.show = He(Kt.show), Kt.size = He(Kt.size), Kt.stroke = He(Kt.stroke), Kt.width = He(Kt.width), Kt.fill = He(Kt.fill);
  const li = i.focus = $t({}, n.focus || { alpha: 0.3 }, fe.focus), qn = li.prox >= 0, Wi = qn && Kt.one;
  let Wn = [], nn = [], Dr = [];
  function ya(w, x) {
    let T = Kt.show(i, x);
    if (T instanceof HTMLElement) return ti(T, gL), ti(T, w.class), Xi(T, -10, -10, Re, de), S.insertBefore(T, Wn[x]), T;
  }
  function Un(w, x) {
    if (r == 1 || x > 0) {
      let T = r == 1 && B[w.scale].time, O = w.value;
      w.value = T ? g0(O) ? S0(ke, x0(O, ae)) : O || Me : O || OD, w.label = w.label || (T ? xD : wD);
    }
    if (Wi || x > 0) {
      w.width = w.width == null ? 1 : w.width, w.paths = w.paths || zD || RL, w.fillTo = He(w.fillTo || PD), w.pxAlign = +Ue(w.pxAlign, M), w.pxRound = L0(w.pxAlign), w.stroke = He(w.stroke || null), w.fill = He(w.fill || null), w._stroke = w._fill = w._paths = w._focus = null;
      let T = _D(Pn(1, w.width), 1), O = w.points = $t({}, { size: T, width: Pn(1, T * 0.2), stroke: w.stroke, space: T * 2, paths: KD, _stroke: null, _fill: null }, w.points);
      O.show = He(O.show), O.filter = He(O.filter), O.fill = He(O.fill), O.stroke = He(O.stroke), O.paths = He(O.paths), O.pxAlign = w.pxAlign;
    }
    if (Ke) {
      let T = qs(w, x);
      Xe.splice(x, 0, T[0]), fn.splice(x, 0, T[1]), ye.values.push(null);
    }
    if (De) {
      Le.splice(x, 0, null);
      let T = null;
      Wi ? x == 0 && (T = ya(w, x)) : x > 0 && (T = ya(w, x)), Wn.splice(x, 0, T), nn.splice(x, 0, 0), Dr.splice(x, 0, 0);
    }
    Xt("addSeries", x);
  }
  function zo(w, x) {
    x = x ?? R.length, w = r == 1 ? ld(w, x, C0, O0) : ld(w, x, {}, T0), R.splice(x, 0, w), Un(R[x], x);
  }
  i.addSeries = zo;
  function Bf(w) {
    if (R.splice(w, 1), Ke) {
      ye.values.splice(w, 1), fn.splice(w, 1);
      let x = Xe.splice(w, 1)[0];
      Fn(null, x.firstChild), x.remove();
    }
    De && (Le.splice(w, 1), Wn.splice(w, 1)[0].remove(), nn.splice(w, 1), Dr.splice(w, 1)), Xt("delSeries", w);
  }
  i.delSeries = Bf;
  const $i = [false, false, false, false];
  function va(w, x) {
    if (w._show = w.show, w.show) {
      let T = w.side % 2, O = B[w.scale];
      O == null && (w.scale = T ? R[1].scale : H, O = B[w.scale]);
      let P = O.time;
      w.size = He(w.size), w.space = He(w.space), w.rotate = He(w.rotate), $r(w.incrs) && w.incrs.forEach((G) => {
        !ss.has(G) && ss.set(G, S1(G));
      }), w.incrs = He(w.incrs || (O.distr == 2 ? tD : P ? _ == 1 ? iD : oD : Ss)), w.splits = He(w.splits || (P && O.distr == 1 ? te : O.distr == 3 ? id : O.distr == 4 ? CD : kD)), w.stroke = He(w.stroke), w.grid.stroke = He(w.grid.stroke), w.ticks.stroke = He(w.ticks.stroke), w.border.stroke = He(w.border.stroke);
      let z = w.values;
      w.values = $r(z) && !$r(z[0]) ? He(z) : P ? $r(z) ? w0(ke, b0(z, ae)) : g0(z) ? cD(ke, z) : z || Te : z || SD, w.filter = He(w.filter || (O.distr >= 3 && O.log == 10 ? ED : O.distr == 3 && O.log == 2 ? TD : w1)), w.font = B0(w.font), w.labelFont = B0(w.labelFont), w._size = w.size(i, null, x, 0), w._space = w._rotate = w._incrs = w._found = w._splits = w._values = null, w._size > 0 && ($i[x] = true, w._el = fi(hL, m));
    }
  }
  function cs(w, x, T, O) {
    let [P, z, G, Q] = T, ne = x % 2, pe = 0;
    return ne == 0 && (Q || z) && (pe = x == 0 && !P || x == 2 && !G ? jt(k0.size / 3) : 0), ne == 1 && (P || G) && (pe = x == 1 && !z || x == 3 && !Q ? jt(A0.size / 2) : 0), pe;
  }
  const Ko = i.padding = (n.padding || [cs, cs, cs, cs]).map((w) => He(Ue(w, cs))), zi = i._padding = Ko.map((w, x) => w(i, x, $i, 0));
  let It, Nt = null, _t = null;
  const Rr = r == 1 ? R[0].idxs : null;
  let Gn = null, An = false;
  function ba(w, x) {
    if (e = w ?? [], i.data = i._data = e, r == 2) {
      It = 0;
      for (let T = 1; T < R.length; T++) It += e[T][0].length;
    } else {
      e.length == 0 && (i.data = i._data = e = [[]]), Gn = e[0], It = Gn.length;
      let T = e;
      if (Z == 2) {
        T = e.slice();
        let O = T[0] = Array(It);
        for (let P = 0; P < It; P++) O[P] = P;
      }
      i._data = e = T;
    }
    if (ji(true), Xt("setData"), Z == 2 && (tt = true), x !== false) {
      let T = q;
      T.auto(i, An) ? Gs() : y(H, T.min, T.max), Mt = Mt || fe.left >= 0, Mn = true, Lt();
    }
  }
  i.setData = ba;
  function Gs() {
    An = true;
    let w, x;
    r == 1 && (It > 0 ? (Nt = Rr[0] = 0, _t = Rr[1] = It - 1, w = e[0][Nt], x = e[0][_t], Z == 2 ? (w = Nt, x = _t) : w == x && (Z == 3 ? [w, x] = Mf(w, w, q.log, false) : Z == 4 ? [w, x] = yp(w, w, q.log, false) : q.time ? x = w + jt(86400 / _) : [w, x] = nf(w, x, vp, true))) : (Nt = Rr[0] = w = null, _t = Rr[1] = x = null)), y(H, w, x);
  }
  let fs, Pr, Ys, jo, qo, En, Uo, Go, Js, rn;
  function wa(w, x, T, O, P, z) {
    w ?? (w = Xm), T ?? (T = wp), O ?? (O = "butt"), P ?? (P = Xm), z ?? (z = "round"), w != fs && (p.strokeStyle = fs = w), P != Pr && (p.fillStyle = Pr = P), x != Ys && (p.lineWidth = Ys = x), z != qo && (p.lineJoin = qo = z), O != En && (p.lineCap = En = O), T != jo && p.setLineDash(jo = T);
  }
  function Yo(w, x, T, O) {
    x != Pr && (p.fillStyle = Pr = x), w != Uo && (p.font = Uo = w), T != Go && (p.textAlign = Go = T), O != Js && (p.textBaseline = Js = O);
  }
  function Jo(w, x, T, O, P = 0) {
    if (O.length > 0 && w.auto(i, An) && (x == null || x.min == null)) {
      let z = Ue(Nt, 0), G = Ue(_t, O.length - 1), Q = T.min == null ? EL(O, z, G, P, w.distr == 3) : [T.min, T.max];
      w.min = Li(w.min, T.min = Q[0]), w.max = Pn(w.max, T.max = Q[1]);
    }
  }
  const Qo = { min: null, max: null };
  function If() {
    for (let O in B) {
      let P = B[O];
      ie[O] == null && (P.min == null || ie[H] != null && P.auto(i, An)) && (ie[O] = Qo);
    }
    for (let O in B) {
      let P = B[O];
      ie[O] == null && P.from != null && ie[P.from] != null && (ie[O] = Qo);
    }
    ie[H] != null && ji(true);
    let w = {};
    for (let O in ie) {
      let P = ie[O];
      if (P != null) {
        let z = w[O] = _o(B[O], IL);
        if (P.min != null) $t(z, P);
        else if (O != H || r == 2) if (It == 0 && z.from == null) {
          let G = z.range(i, null, null, O);
          z.min = G[0], z.max = G[1];
        } else z.min = ht, z.max = -ht;
      }
    }
    if (It > 0) {
      R.forEach((O, P) => {
        if (r == 1) {
          let z = O.scale, G = ie[z];
          if (G == null) return;
          let Q = w[z];
          if (P == 0) {
            let ne = Q.range(i, Q.min, Q.max, z);
            Q.min = ne[0], Q.max = ne[1], Nt = _i(Q.min, e[0]), _t = _i(Q.max, e[0]), _t - Nt > 1 && (e[0][Nt] < Q.min && Nt++, e[0][_t] > Q.max && _t--), O.min = Gn[Nt], O.max = Gn[_t];
          } else O.show && O.auto && Jo(Q, G, O, e[P], O.sorted);
          O.idxs[0] = Nt, O.idxs[1] = _t;
        } else if (P > 0 && O.show && O.auto) {
          let [z, G] = O.facets, Q = z.scale, ne = G.scale, [pe, ge] = e[P], me = w[Q], _e = w[ne];
          me != null && Jo(me, ie[Q], z, pe, z.sorted), _e != null && Jo(_e, ie[ne], G, ge, G.sorted), O.min = G.min, O.max = G.max;
        }
      });
      for (let O in w) {
        let P = w[O], z = ie[O];
        if (P.from == null && (z == null || z.min == null)) {
          let G = P.range(i, P.min == ht ? null : P.min, P.max == -ht ? null : P.max, O);
          P.min = G[0], P.max = G[1];
        }
      }
    }
    for (let O in w) {
      let P = w[O];
      if (P.from != null) {
        let z = w[P.from];
        if (z.min == null) P.min = P.max = null;
        else {
          let G = P.range(i, z.min, z.max, O);
          P.min = G[0], P.max = G[1];
        }
      }
    }
    let x = {}, T = false;
    for (let O in w) {
      let P = w[O], z = B[O];
      if (z.min != P.min || z.max != P.max) {
        z.min = P.min, z.max = P.max;
        let G = z.distr;
        z._min = G == 3 ? Cr(z.min) : G == 4 ? Th(z.min, z.asinh) : G == 100 ? z.fwd(z.min) : z.min, z._max = G == 3 ? Cr(z.max) : G == 4 ? Th(z.max, z.asinh) : G == 100 ? z.fwd(z.max) : z.max, x[O] = T = true;
      }
    }
    if (T) {
      R.forEach((O, P) => {
        r == 2 ? P > 0 && x.y && (O._paths = null) : x[O.scale] && (O._paths = null);
      });
      for (let O in x) tt = true, Xt("setScale", O);
      De && fe.left >= 0 && (Mt = Mn = true);
    }
    for (let O in ie) ie[O] = null;
  }
  function xa(w) {
    let x = nd(Nt - 1, 0, It - 1), T = nd(_t + 1, 0, It - 1);
    for (; w[x] == null && x > 0; ) x--;
    for (; w[T] == null && T < It - 1; ) T++;
    return [x, T];
  }
  function Yn() {
    if (It > 0) {
      let w = R.some((x) => x._focus) && rn != li.alpha;
      w && (p.globalAlpha = rn = li.alpha), R.forEach((x, T) => {
        if (T > 0 && x.show && (Ve(T, false), Ve(T, true), x._paths == null)) {
          let O = rn;
          rn != x.alpha && (p.globalAlpha = rn = x.alpha);
          let P = r == 2 ? [0, e[T][0].length - 1] : xa(e[T]);
          x._paths = x.paths(i, T, P[0], P[1]), rn != O && (p.globalAlpha = rn = O);
        }
      }), R.forEach((x, T) => {
        if (T > 0 && x.show) {
          let O = rn;
          rn != x.alpha && (p.globalAlpha = rn = x.alpha), x._paths != null && Sa(T, false);
          {
            let P = x._paths != null ? x._paths.gaps : null, z = x.points.show(i, T, Nt, _t, P), G = x.points.filter(i, T, z, P);
            (z || G) && (x.points._paths = x.points.paths(i, T, Nt, _t, G), Sa(T, true));
          }
          rn != O && (p.globalAlpha = rn = O), Xt("drawSeries", T);
        }
      }), w && (p.globalAlpha = rn = 1);
    }
  }
  function Ve(w, x) {
    let T = x ? R[w].points : R[w];
    T._stroke = T.stroke(i, w), T._fill = T.fill(i, w);
  }
  function Sa(w, x) {
    let T = x ? R[w].points : R[w], { stroke: O, fill: P, clip: z, flags: G, _stroke: Q = T._stroke, _fill: ne = T._fill, _width: pe = T.width } = T._paths;
    pe = ut(pe * Je, 3);
    let ge = null, me = pe % 2 / 2;
    x && ne == null && (ne = pe > 0 ? "#fff" : Q);
    let _e = T.pxAlign == 1 && me > 0;
    if (_e && p.translate(me, me), !x) {
      let Ye = Cn - pe / 2, qe = Hn - pe / 2, Fe = un + pe, Ae = Vn + pe;
      ge = new Path2D(), ge.rect(Ye, qe, Fe, Ae);
    }
    x ? mr(Q, pe, T.dash, T.cap, ne, O, P, G, z) : Qs(w, Q, pe, T.dash, T.cap, ne, O, P, G, ge, z), _e && p.translate(-me, -me);
  }
  function Qs(w, x, T, O, P, z, G, Q, ne, pe, ge) {
    let me = false;
    ne != 0 && W.forEach((_e, Ye) => {
      if (_e.series[0] == w) {
        let qe = R[_e.series[1]], Fe = e[_e.series[1]], Ae = (qe._paths || Hl).band;
        $r(Ae) && (Ae = _e.dir == 1 ? Ae[0] : Ae[1]);
        let xe, vt = null;
        qe.show && Ae && OL(Fe, Nt, _t) ? (vt = _e.fill(i, Ye) || z, xe = qe._paths.clip) : Ae = null, mr(x, T, O, P, vt, G, Q, ne, pe, ge, xe, Ae), me = true;
      }
    }), me || mr(x, T, O, P, z, G, Q, ne, pe, ge);
  }
  const ka = Lo | sd;
  function mr(w, x, T, O, P, z, G, Q, ne, pe, ge, me) {
    wa(w, x, T, O, P), (ne || pe || me) && (p.save(), ne && p.clip(ne), pe && p.clip(pe)), me ? (Q & ka) == ka ? (p.clip(me), ge && p.clip(ge), Ki(P, G), Xs(w, z, x)) : Q & sd ? (Ki(P, G), p.clip(me), Xs(w, z, x)) : Q & Lo && (p.save(), p.clip(me), ge && p.clip(ge), Ki(P, G), p.restore(), Xs(w, z, x)) : (Ki(P, G), Xs(w, z, x)), (ne || pe || me) && p.restore();
  }
  function Xs(w, x, T) {
    T > 0 && (x instanceof Map ? x.forEach((O, P) => {
      p.strokeStyle = fs = P, p.stroke(O);
    }) : x != null && w && p.stroke(x));
  }
  function Ki(w, x) {
    x instanceof Map ? x.forEach((T, O) => {
      p.fillStyle = Pr = O, p.fill(T);
    }) : x != null && w && p.fill(x);
  }
  function Xo(w, x, T, O) {
    let P = N[w], z;
    if (O <= 0) z = [0, 0];
    else {
      let G = P._space = P.space(i, w, x, T, O), Q = P._incrs = P.incrs(i, w, x, T, O, G);
      z = JD(x, T, Q, O, G);
    }
    return P._found = z;
  }
  function Zs(w, x, T, O, P, z, G, Q, ne, pe) {
    let ge = G % 2 / 2;
    M == 1 && p.translate(ge, ge), wa(Q, G, ne, pe, Q), p.beginPath();
    let me, _e, Ye, qe, Fe = P + (O == 0 || O == 3 ? -z : z);
    T == 0 ? (_e = P, qe = Fe) : (me = P, Ye = Fe);
    for (let Ae = 0; Ae < w.length; Ae++) x[Ae] != null && (T == 0 ? me = Ye = w[Ae] : _e = qe = w[Ae], p.moveTo(me, _e), p.lineTo(Ye, qe));
    p.stroke(), M == 1 && p.translate(-ge, -ge);
  }
  function Nf(w) {
    let x = true;
    return N.forEach((T, O) => {
      if (!T.show) return;
      let P = B[T.scale];
      if (P.min == null) {
        T._show && (x = false, T._show = false, ji(false));
        return;
      } else T._show || (x = false, T._show = true, ji(false));
      let z = T.side, G = z % 2, { min: Q, max: ne } = P, [pe, ge] = Xo(O, Q, ne, G == 0 ? Re : de);
      if (ge == 0) return;
      let me = P.distr == 2, _e = T._splits = T.splits(i, O, Q, ne, pe, ge, me), Ye = P.distr == 2 ? _e.map((xe) => Gn[xe]) : _e, qe = P.distr == 2 ? Gn[_e[1]] - Gn[_e[0]] : pe, Fe = T._values = T.values(i, T.filter(i, Ye, O, ge, qe), O, ge, qe);
      T._rotate = z == 2 ? T.rotate(i, Fe, O, ge) : 0;
      let Ae = T._size;
      T._size = ui(T.size(i, Fe, O, w)), Ae != null && T._size != Ae && (x = false);
    }), x;
  }
  function Br(w) {
    let x = true;
    return Ko.forEach((T, O) => {
      let P = T(i, O, $i, w);
      P != zi[O] && (x = false), zi[O] = P;
    }), x;
  }
  function Ff() {
    for (let w = 0; w < N.length; w++) {
      let x = N[w];
      if (!x.show || !x._show) continue;
      let T = x.side, O = T % 2, P, z, G = x.stroke(i, w), Q = T == 0 || T == 3 ? -1 : 1, [ne, pe] = x._found;
      if (x.label != null) {
        let _n = x.labelGap * Q, Xn = jt((x._lpos + _n) * Je);
        Yo(x.labelFont[0], G, "center", T == 2 ? dl : Qm), p.save(), O == 1 ? (P = z = 0, p.translate(Xn, jt(Hn + Vn / 2)), p.rotate((T == 3 ? -Cc : Cc) / 2)) : (P = jt(Cn + un / 2), z = Xn);
        let ds = v1(x.label) ? x.label(i, w, ne, pe) : x.label;
        p.fillText(ds, P, z), p.restore();
      }
      if (pe == 0) continue;
      let ge = B[x.scale], me = O == 0 ? un : Vn, _e = O == 0 ? Cn : Hn, Ye = x._splits, qe = ge.distr == 2 ? Ye.map((_n) => Gn[_n]) : Ye, Fe = ge.distr == 2 ? Gn[Ye[1]] - Gn[Ye[0]] : ne, Ae = x.ticks, xe = x.border, vt = Ae.show ? Ae.size : 0, Tt = jt(vt * Je), Zt = jt((x.alignTo == 2 ? x._size - vt - x.gap : x.gap) * Je), ot = x._rotate * -Cc / 180, Ot = A(x._pos * Je), Jn = (Tt + Zt) * Q, On = Ot + Jn;
      z = O == 0 ? On : 0, P = O == 1 ? On : 0;
      let ai = x.font[0], Ei = x.align == 1 ? io : x.align == 2 ? Mh : ot > 0 ? io : ot < 0 ? Mh : O == 0 ? "center" : T == 3 ? Mh : io, qi = ot || O == 1 ? "middle" : T == 2 ? dl : Qm;
      Yo(ai, G, Ei, qi);
      let Qn = x.font[1] * x.lineGap, ci = Ye.map((_n) => A(l(_n, ge, me, _e))), Ti = x._values;
      for (let _n = 0; _n < Ti.length; _n++) {
        let Xn = Ti[_n];
        if (Xn != null) {
          O == 0 ? P = ci[_n] : z = ci[_n], Xn = "" + Xn;
          let ds = Xn.indexOf(`
`) == -1 ? [Xn] : Xn.split(/\n/gm);
          for (let Ln = 0; Ln < ds.length; Ln++) {
            let Np = ds[Ln];
            ot ? (p.save(), p.translate(P, z + Ln * Qn), p.rotate(ot), p.fillText(Np, 0, 0), p.restore()) : p.fillText(Np, P, z + Ln * Qn);
          }
        }
      }
      Ae.show && Zs(ci, Ae.filter(i, qe, w, pe, Fe), O, T, Ot, Tt, ut(Ae.width * Je, 3), Ae.stroke(i, w), Ae.dash, Ae.cap);
      let Ui = x.grid;
      Ui.show && Zs(ci, Ui.filter(i, qe, w, pe, Fe), O, O == 0 ? 2 : 1, O == 0 ? Hn : Cn, O == 0 ? Vn : un, ut(Ui.width * Je, 3), Ui.stroke(i, w), Ui.dash, Ui.cap), xe.show && Zs([Ot], [1], O == 0 ? 1 : 0, O == 0 ? 1 : 2, O == 1 ? Hn : Cn, O == 1 ? Vn : un, ut(xe.width * Je, 3), xe.stroke(i, w), xe.dash, xe.cap);
    }
    Xt("drawAxes");
  }
  function ji(w) {
    R.forEach((x, T) => {
      T > 0 && (x._paths = null, w && (r == 1 ? (x.min = null, x.max = null) : x.facets.forEach((O) => {
        O.min = null, O.max = null;
      })));
    });
  }
  let yr = false, eo = false, hs = [];
  function Ca() {
    eo = false;
    for (let w = 0; w < hs.length; w++) Xt(...hs[w]);
    hs.length = 0;
  }
  function Lt() {
    yr || (zL(Ci), yr = true);
  }
  function Hf(w, x = false) {
    yr = true, eo = x, w(i), Ci(), x && hs.length > 0 && queueMicrotask(Ca);
  }
  i.batch = Hf;
  function Ci() {
    if (Ze && (If(), Ze = false), tt && (Rf(), tt = false), tn) {
      if (bt(b, io, nt), bt(b, dl, dt), bt(b, kl, Re), bt(b, Cl, de), bt(S, io, nt), bt(S, dl, dt), bt(S, kl, Re), bt(S, Cl, de), bt(m, kl, Pt), bt(m, Cl, pr), h.width = jt(Pt * Je), h.height = jt(pr * Je), N.forEach(({ _el: w, _show: x, _size: T, _pos: O, side: P }) => {
        if (w != null) if (x) {
          let z = P === 3 || P === 0 ? T : 0, G = P % 2 == 1;
          bt(w, G ? "left" : "top", O - z), bt(w, G ? "width" : "height", T), bt(w, G ? "top" : "left", G ? dt : nt), bt(w, G ? "height" : "width", G ? de : Re), ed(w, Ms);
        } else ti(w, Ms);
      }), fs = Pr = Ys = qo = En = Uo = Go = Js = jo = null, rn = 1, je(true), nt != Lr || dt != Ct || Re != kn || de != it) {
        ji(false);
        let w = Re / kn, x = de / it;
        if (De && !Mt && fe.left >= 0) {
          fe.left *= w, fe.top *= x, Ir && Xi(Ir, jt(fe.left), 0, Re, de), Nr && Xi(Nr, 0, jt(fe.top), Re, de);
          for (let T = 0; T < Wn.length; T++) {
            let O = Wn[T];
            O != null && (nn[T] *= w, Dr[T] *= x, Xi(O, ui(nn[T]), ui(Dr[T]), Re, de));
          }
        }
        if (c.show && !jn && c.left >= 0 && c.width > 0) {
          c.left *= w, c.width *= w, c.top *= x, c.height *= x;
          for (let T in dn) bt(u, T, c[T]);
        }
        Lr = nt, Ct = dt, kn = Re, it = de;
      }
      Xt("setSize"), tn = false;
    }
    Pt > 0 && pr > 0 && (p.clearRect(0, 0, h.width, h.height), Xt("drawClear"), ee.forEach((w) => w()), Xt("draw")), c.show && jn && (d(c), jn = false), De && Mt && (Be(null, true, false), Mt = false), ye.show && ye.live && Mn && (st(), Mn = false), a || (a = true, i.status = 1, Xt("ready")), An = false, yr = false;
  }
  i.redraw = (w, x) => {
    tt = x || false, w !== false ? y(H, q.min, q.max) : Lt();
  };
  function us(w, x) {
    let T = B[w];
    if (T.from == null) {
      if (It == 0) {
        let O = T.range(i, x.min, x.max, w);
        x.min = O[0], x.max = O[1];
      }
      if (x.min > x.max) {
        let O = x.min;
        x.min = x.max, x.max = O;
      }
      if (It > 1 && x.min != null && x.max != null && x.max - x.min < 1e-16) return;
      w == H && T.distr == 2 && It > 0 && (x.min = _i(x.min, e[0]), x.max = _i(x.max, e[0]), x.min == x.max && x.max++), ie[w] = x, Ze = true, Lt();
    }
  }
  i.setScale = us;
  let Zo, el, Ir, Nr, Ma, Aa, Fr, vr, tl, nl, rt, at, Mi = false;
  const Ft = fe.drag;
  let Et = Ft.x, Ht = Ft.y;
  De && (fe.x && (Zo = fi(dL, S)), fe.y && (el = fi(pL, S)), q.ori == 0 ? (Ir = Zo, Nr = el) : (Ir = el, Nr = Zo), rt = fe.left, at = fe.top);
  const c = i.select = $t({ show: true, over: true, left: 0, width: 0, top: 0, height: 0 }, n.select), u = c.show ? fi(uL, c.over ? S : b) : null;
  function d(w, x) {
    if (c.show) {
      for (let T in w) c[T] = w[T], T in dn && bt(u, T, w[T]);
      x !== false && Xt("setSelect");
    }
  }
  i.setSelect = d;
  function g(w) {
    if (R[w].show) Ke && ed(Xe[w], Ms);
    else if (Ke && ti(Xe[w], Ms), De) {
      let T = Wi ? Wn[0] : Wn[w];
      T != null && Xi(T, -10, -10, Re, de);
    }
  }
  function y(w, x, T) {
    us(w, { min: x, max: T });
  }
  function v(w, x, T, O) {
    x.focus != null && I(w), x.show != null && R.forEach((P, z) => {
      z > 0 && (w == z || w == null) && (P.show = x.show, g(z), r == 2 ? (y(P.facets[0].scale, null, null), y(P.facets[1].scale, null, null)) : y(P.scale, null, null), Lt());
    }), T !== false && Xt("setSeries", w, x), O && il("setSeries", i, w, x);
  }
  i.setSeries = v;
  function k(w, x) {
    $t(W[w], x);
  }
  function C(w, x) {
    w.fill = He(w.fill || null), w.dir = Ue(w.dir, -1), x = x ?? W.length, W.splice(x, 0, w);
  }
  function E(w) {
    w == null ? W.length = 0 : W.splice(w, 1);
  }
  i.addBand = C, i.setBand = k, i.delBand = E;
  function D(w, x) {
    R[w].alpha = x, De && Wn[w] != null && (Wn[w].style.opacity = x), Ke && Xe[w] && (Xe[w].style.opacity = x);
  }
  let L, F, V;
  const $ = { focus: true };
  function I(w) {
    if (w != V) {
      let x = w == null, T = li.alpha != 1;
      R.forEach((O, P) => {
        if (r == 1 || P > 0) {
          let z = x || P == 0 || P == w;
          O._focus = x ? null : z, T && D(P, z ? 1 : li.alpha);
        }
      }), V = w, T && Lt();
    }
  }
  Ke && qn && Qt(t0, Ne, (w) => {
    fe._lock || (gr(w), V != null && v(null, $, true, Vt.setSeries));
  });
  function Y(w, x, T) {
    let O = B[x];
    T && (w = w / Je - (O.ori == 1 ? dt : nt));
    let P = Re;
    O.ori == 1 && (P = de, w = P - w), O.dir == -1 && (w = P - w);
    let z = O._min, G = O._max, Q = w / P, ne = z + (G - z) * Q, pe = O.distr;
    return pe == 3 ? To(10, ne) : pe == 4 ? LL(ne, O.asinh) : pe == 100 ? O.bwd(ne) : ne;
  }
  function X(w, x) {
    let T = Y(w, H, x);
    return _i(T, e[0], Nt, _t);
  }
  i.valToIdx = (w) => _i(w, e[0]), i.posToIdx = X, i.posToVal = Y, i.valToPos = (w, x, T) => B[x].ori == 0 ? s(w, B[x], T ? un : Re, T ? Cn : 0) : o(w, B[x], T ? Vn : de, T ? Hn : 0), i.setCursor = (w, x, T) => {
    rt = w.left, at = w.top, Be(null, x, T);
  };
  function we(w, x) {
    bt(u, io, c.left = w), bt(u, kl, c.width = x);
  }
  function ce(w, x) {
    bt(u, dl, c.top = w), bt(u, Cl, c.height = x);
  }
  let Ce = q.ori == 0 ? we : ce, Oe = q.ori == 1 ? we : ce;
  function Pe() {
    if (Ke && ye.live) for (let w = r == 2 ? 1 : 0; w < R.length; w++) {
      if (w == 0 && Sn) continue;
      let x = ye.values[w], T = 0;
      for (let O in x) fn[w][T++].firstChild.nodeValue = x[O];
    }
  }
  function st(w, x) {
    if (w != null && (w.idxs ? w.idxs.forEach((T, O) => {
      Le[O] = T;
    }) : BL(w.idx) || Le.fill(w.idx), ye.idx = Le[0]), Ke && ye.live) {
      for (let T = 0; T < R.length; T++) (T > 0 || r == 1 && !Sn) && yt(T, Le[T]);
      Pe();
    }
    Mn = false, x !== false && Xt("setLegend");
  }
  i.setLegend = st;
  function yt(w, x) {
    let T = R[w], O = w == 0 && Z == 2 ? Gn : e[w], P;
    Sn ? P = T.values(i, w, x) ?? ki : (P = T.value(i, x == null ? null : O[x], w, x), P = P == null ? ki : { _: P }), ye.values[w] = P;
  }
  function Be(w, x, T) {
    tl = rt, nl = at, [rt, at] = fe.move(i, rt, at), fe.left = rt, fe.top = at, De && (Ir && Xi(Ir, jt(rt), 0, Re, de), Nr && Xi(Nr, 0, jt(at), Re, de));
    let O, P = Nt > _t;
    L = ht, F = null;
    let z = q.ori == 0 ? Re : de, G = q.ori == 1 ? Re : de;
    if (rt < 0 || It == 0 || P) {
      O = fe.idx = null;
      for (let Q = 0; Q < R.length; Q++) {
        let ne = Wn[Q];
        ne != null && Xi(ne, -10, -10, Re, de);
      }
      qn && v(null, $, true, w == null && Vt.setSeries), ye.live && (Le.fill(O), Mn = true);
    } else {
      let Q, ne, pe;
      r == 1 && (Q = q.ori == 0 ? rt : at, ne = Y(Q, H), O = fe.idx = _i(ne, e[0], Nt, _t), pe = J(e[0][O], q, z, 0));
      let ge = -10, me = -10, _e = 0, Ye = 0, qe = true, Fe = "", Ae = "";
      for (let xe = r == 2 ? 1 : 0; xe < R.length; xe++) {
        let vt = R[xe], Tt = Le[xe], Zt = Tt == null ? null : r == 1 ? e[xe][Tt] : e[xe][1][Tt], ot = fe.dataIdx(i, xe, O, ne), Ot = ot == null ? null : r == 1 ? e[xe][ot] : e[xe][1][ot];
        if (Mn = Mn || Ot != Zt || ot != Tt, Le[xe] = ot, xe > 0 && vt.show) {
          let Jn = ot == null ? -10 : ot == O ? pe : J(r == 1 ? e[0][ot] : e[xe][0][ot], q, z, 0), On = Ot == null ? -10 : se(Ot, r == 1 ? B[vt.scale] : B[vt.facets[1].scale], G, 0);
          if (qn && Ot != null) {
            let ai = q.ori == 1 ? rt : at, Ei = qt(li.dist(i, xe, ot, On, ai));
            if (Ei < L) {
              let qi = li.bias;
              if (qi != 0) {
                let Qn = Y(ai, vt.scale), ci = Ot >= 0 ? 1 : -1, Ti = Qn >= 0 ? 1 : -1;
                Ti == ci && (Ti == 1 ? qi == 1 ? Ot >= Qn : Ot <= Qn : qi == 1 ? Ot <= Qn : Ot >= Qn) && (L = Ei, F = xe);
              } else L = Ei, F = xe;
            }
          }
          if (Mn || Wi) {
            let ai, Ei;
            q.ori == 0 ? (ai = Jn, Ei = On) : (ai = On, Ei = Jn);
            let qi, Qn, ci, Ti, Ui, _n, Xn = true, ds = Kt.bbox;
            if (ds != null) {
              Xn = false;
              let Ln = ds(i, xe);
              ci = Ln.left, Ti = Ln.top, qi = Ln.width, Qn = Ln.height;
            } else ci = ai, Ti = Ei, qi = Qn = Kt.size(i, xe);
            if (_n = Kt.fill(i, xe), Ui = Kt.stroke(i, xe), Wi) xe == F && L <= li.prox && (ge = ci, me = Ti, _e = qi, Ye = Qn, qe = Xn, Fe = _n, Ae = Ui);
            else {
              let Ln = Wn[xe];
              Ln != null && (nn[xe] = ci, Dr[xe] = Ti, a0(Ln, qi, Qn, Xn), o0(Ln, _n, Ui), Xi(Ln, ui(ci), ui(Ti), Re, de));
            }
          }
        }
      }
      if (Wi) {
        let xe = li.prox, vt = V == null ? L <= xe : L > xe || F != V;
        if (Mn || vt) {
          let Tt = Wn[0];
          Tt != null && (nn[0] = ge, Dr[0] = me, a0(Tt, _e, Ye, qe), o0(Tt, Fe, Ae), Xi(Tt, ui(ge), ui(me), Re, de));
        }
      }
    }
    if (c.show && Mi) if (w != null) {
      let [Q, ne] = Vt.scales, [pe, ge] = Vt.match, [me, _e] = w.cursor.sync.scales, Ye = w.cursor.drag;
      if (Et = Ye._x, Ht = Ye._y, Et || Ht) {
        let { left: qe, top: Fe, width: Ae, height: xe } = w.select, vt = w.scales[me].ori, Tt = w.posToVal, Zt, ot, Ot, Jn, On, ai = Q != null && pe(Q, me), Ei = ne != null && ge(ne, _e);
        ai && Et ? (vt == 0 ? (Zt = qe, ot = Ae) : (Zt = Fe, ot = xe), Ot = B[Q], Jn = J(Tt(Zt, me), Ot, z, 0), On = J(Tt(Zt + ot, me), Ot, z, 0), Ce(Li(Jn, On), qt(On - Jn))) : Ce(0, z), Ei && Ht ? (vt == 1 ? (Zt = qe, ot = Ae) : (Zt = Fe, ot = xe), Ot = B[ne], Jn = se(Tt(Zt, _e), Ot, G, 0), On = se(Tt(Zt + ot, _e), Ot, G, 0), Oe(Li(Jn, On), qt(On - Jn))) : Oe(0, G);
      } else Ai();
    } else {
      let Q = qt(tl - Ma), ne = qt(nl - Aa);
      if (q.ori == 1) {
        let _e = Q;
        Q = ne, ne = _e;
      }
      Et = Ft.x && Q >= Ft.dist, Ht = Ft.y && ne >= Ft.dist;
      let pe = Ft.uni;
      pe != null ? Et && Ht && (Et = Q >= pe, Ht = ne >= pe, !Et && !Ht && (ne > Q ? Ht = true : Et = true)) : Ft.x && Ft.y && (Et || Ht) && (Et = Ht = true);
      let ge, me;
      Et && (q.ori == 0 ? (ge = Fr, me = rt) : (ge = vr, me = at), Ce(Li(ge, me), qt(me - ge)), Ht || Oe(0, G)), Ht && (q.ori == 1 ? (ge = Fr, me = rt) : (ge = vr, me = at), Oe(Li(ge, me), qt(me - ge)), Et || Ce(0, z)), !Et && !Ht && (Ce(0, 0), Oe(0, 0));
    }
    if (Ft._x = Et, Ft._y = Ht, w == null) {
      if (T) {
        if (Ip != null) {
          let [Q, ne] = Vt.scales;
          Vt.values[0] = Q != null ? Y(q.ori == 0 ? rt : at, Q) : null, Vt.values[1] = ne != null ? Y(q.ori == 1 ? rt : at, ne) : null;
        }
        il(Ah, i, rt, at, Re, de, O);
      }
      if (qn) {
        let Q = T && Vt.setSeries, ne = li.prox;
        V == null ? L <= ne && v(F, $, true, Q) : L > ne ? v(null, $, true, Q) : F != V && v(F, $, true, Q);
      }
    }
    Mn && (ye.idx = O, st()), x !== false && Xt("setCursor");
  }
  let Se = null;
  Object.defineProperty(i, "rect", { get() {
    return Se == null && je(false), Se;
  } });
  function je(w = false) {
    w ? Se = null : (Se = S.getBoundingClientRect(), Xt("syncRect", Se));
  }
  function Tn(w, x, T, O, P, z, G) {
    fe._lock || Mi && w != null && w.movementX == 0 && w.movementY == 0 || (Dt(w, x, T, O, P, z, G, false, w != null), w != null ? Be(null, true, true) : Be(x, true, false));
  }
  function Dt(w, x, T, O, P, z, G, Q, ne) {
    if (Se == null && je(false), gr(w), w != null) T = w.clientX - Se.left, O = w.clientY - Se.top;
    else {
      if (T < 0 || O < 0) {
        rt = -10, at = -10;
        return;
      }
      let [pe, ge] = Vt.scales, me = x.cursor.sync, [_e, Ye] = me.values, [qe, Fe] = me.scales, [Ae, xe] = Vt.match, vt = x.axes[0].side % 2 == 1, Tt = q.ori == 0 ? Re : de, Zt = q.ori == 1 ? Re : de, ot = vt ? z : P, Ot = vt ? P : z, Jn = vt ? O : T, On = vt ? T : O;
      if (qe != null ? T = Ae(pe, qe) ? l(_e, B[pe], Tt, 0) : -10 : T = Tt * (Jn / ot), Fe != null ? O = xe(ge, Fe) ? l(Ye, B[ge], Zt, 0) : -10 : O = Zt * (On / Ot), q.ori == 1) {
        let ai = T;
        T = O, O = ai;
      }
    }
    ne && (x == null || x.cursor.event.type == Ah) && ((T <= 1 || T >= Re - 1) && (T = xs(T, Re)), (O <= 1 || O >= de - 1) && (O = xs(O, de))), Q ? (Ma = T, Aa = O, [Fr, vr] = fe.move(i, T, O)) : (rt = T, at = O);
  }
  const dn = { width: 0, height: 0, left: 0, top: 0 };
  function Ai() {
    d(dn, false);
  }
  let Ea, to, Op, _p;
  function Lp(w, x, T, O, P, z, G) {
    Mi = true, Et = Ht = Ft._x = Ft._y = false, Dt(w, x, T, O, P, z, G, true, false), w != null && (Qt(Eh, Xu, Dp, false), il(Zm, i, Fr, vr, Re, de, null));
    let { left: Q, top: ne, width: pe, height: ge } = c;
    Ea = Q, to = ne, Op = pe, _p = ge;
  }
  function Dp(w, x, T, O, P, z, G) {
    Mi = Ft._x = Ft._y = false, Dt(w, x, T, O, P, z, G, false, true);
    let { left: Q, top: ne, width: pe, height: ge } = c, me = pe > 0 || ge > 0, _e = Ea != Q || to != ne || Op != pe || _p != ge;
    if (me && _e && d(c), Ft.setScale && me && _e) {
      let Ye = Q, qe = pe, Fe = ne, Ae = ge;
      if (q.ori == 1 && (Ye = ne, qe = ge, Fe = Q, Ae = pe), Et && y(H, Y(Ye, H), Y(Ye + qe, H)), Ht) for (let xe in B) {
        let vt = B[xe];
        xe != H && vt.from == null && vt.min != ht && y(xe, Y(Fe + Ae, xe), Y(Fe, xe));
      }
      Ai();
    } else fe.lock && (fe._lock = !fe._lock, Be(x, true, w != null));
    w != null && (Fn(Eh, Xu), il(Eh, i, rt, at, Re, de, null));
  }
  function ox(w, x, T, O, P, z, G) {
    if (fe._lock) return;
    gr(w);
    let Q = Mi;
    if (Mi) {
      let ne = true, pe = true, ge = 10, me, _e;
      q.ori == 0 ? (me = Et, _e = Ht) : (me = Ht, _e = Et), me && _e && (ne = rt <= ge || rt >= Re - ge, pe = at <= ge || at >= de - ge), me && ne && (rt = rt < Fr ? 0 : Re), _e && pe && (at = at < vr ? 0 : de), Be(null, true, true), Mi = false;
    }
    rt = -10, at = -10, Le.fill(null), Be(null, true, true), Q && (Mi = Q);
  }
  function Rp(w, x, T, O, P, z, G) {
    fe._lock || (gr(w), Gs(), Ai(), w != null && il(n0, i, rt, at, Re, de, null));
  }
  function Pp() {
    N.forEach(QD), Bt(i.width, i.height, true);
  }
  Bs(tf, mo, Pp);
  const no = {};
  no.mousedown = Lp, no.mousemove = Tn, no.mouseup = Dp, no.dblclick = Rp, no.setSeries = (w, x, T, O) => {
    let P = Vt.match[2];
    T = P(i, x, T), T != -1 && v(T, O, true, false);
  }, De && (Qt(Zm, S, Lp), Qt(Ah, S, Tn), Qt(e0, S, (w) => {
    gr(w), je(false);
  }), Qt(t0, S, ox), Qt(n0, S, Rp), od.add(i), i.syncRect = je);
  const Ta = i.hooks = n.hooks || {};
  function Xt(w, x, T) {
    eo ? hs.push([w, x, T]) : w in Ta && Ta[w].forEach((O) => {
      O.call(null, i, x, T);
    });
  }
  (n.plugins || []).forEach((w) => {
    for (let x in w.hooks) Ta[x] = (Ta[x] || []).concat(w.hooks[x]);
  });
  const Bp = (w, x, T) => T, Vt = $t({ key: null, setSeries: false, filters: { pub: d0, sub: d0 }, scales: [H, R[1] ? R[1].scale : null], match: [p0, p0, Bp], values: [null, null] }, fe.sync);
  Vt.match.length == 2 && Vt.match.push(Bp), fe.sync = Vt;
  const Ip = Vt.key, Vf = $1(Ip);
  function il(w, x, T, O, P, z, G) {
    Vt.filters.pub(w, x, T, O, P, z, G) && Vf.pub(w, x, T, O, P, z, G);
  }
  Vf.sub(i);
  function lx(w, x, T, O, P, z, G) {
    Vt.filters.sub(w, x, T, O, P, z, G) && no[w](null, x, T, O, P, z, G);
  }
  i.pub = lx;
  function ax() {
    Vf.unsub(i), od.delete(i), dr.clear(), td(tf, mo, Pp), f.remove(), Ne == null ? void 0 : Ne.remove(), Xt("destroy");
  }
  i.destroy = ax;
  function Wf() {
    Xt("init", n, e), ba(e || n.data, false), ie[H] ? us(H, ie[H]) : Gs(), jn = c.show && (c.width > 0 || c.height > 0), Mt = Mn = true, Bt(n.width, n.height);
  }
  return R.forEach(Un), N.forEach(va), t ? t instanceof HTMLElement ? (t.appendChild(f), Wf()) : t(i, Wf) : Wf(), i;
}
yn.assign = $t;
yn.fmtNum = bp;
yn.rangeNum = nf;
yn.rangeLog = Mf;
yn.rangeAsinh = yp;
yn.orient = js;
yn.pxRatio = Je;
yn.join = $L;
yn.fmtDate = xp, yn.tzDate = ZL;
yn.sync = $1;
{
  yn.addGap = BD, yn.clipGaps = Tf;
  let n = yn.paths = { points: G1 };
  n.linear = J1, n.stepped = FD, n.bars = HD, n.spline = WD;
}
const ex = ["#2563eb", "#dc2626", "#16a34a", "#d97706", "#9333ea", "#0891b2", "#e11d48", "#65a30d"], tx = ["#60a5fa", "#f87171", "#4ade80", "#fbbf24", "#c084fc", "#22d3ee", "#fb7185", "#a3e635"];
function nx() {
  return document.documentElement.classList.contains("dark-theme");
}
function XD(n) {
  return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ZD() {
  let n = null, e = null;
  function t(s) {
    e = s.over, n = document.createElement("div"), n.className = "step-tooltip", n.style.display = "none", document.body.appendChild(n);
  }
  function i(s) {
    if (!n || !e) return;
    const o = s.cursor.idx;
    if (o == null) {
      n.style.display = "none";
      return;
    }
    const l = [];
    for (let b = 1; b < s.series.length; b++) {
      const S = s.series[b];
      if (!S.show) continue;
      const M = s.data[b][o];
      if (M == null) continue;
      const _ = nx() ? tx : ex, R = _[(b - 1) % _.length], N = Number.isInteger(M) ? M.toString() : M.toFixed(2);
      l.push(`<span style="color:${R}">${XD(String(S.label ?? ""))}</span>: ${N}`);
    }
    if (l.length === 0) {
      n.style.display = "none";
      return;
    }
    n.innerHTML = l.join("<br>"), n.style.display = "block";
    const a = e.getBoundingClientRect(), f = s.cursor.left ?? 0, h = s.cursor.top ?? 0, p = n.offsetWidth, m = a.left + f + p + 16 > window.innerWidth ? a.left + f - p - 8 : a.left + f + 8;
    n.style.left = m + "px", n.style.top = a.top + h - 10 + "px";
  }
  function r() {
    n && (n.remove(), n = null);
  }
  return { hooks: { init: t, setCursor: i, destroy: r } };
}
function eR(n, e, t) {
  var _a2;
  const i = nx(), r = e.series.length, s = ((_a2 = e.series[0]) == null ? void 0 : _a2.timestamps) ?? [], o = i ? tx : ex, l = [new Float64Array(s), ...e.series.map((h) => new Float64Array(h.values))], a = [{ label: "Time" }, ...e.series.map((h, p) => ({ label: h.name, stroke: o[p % o.length], width: 2, points: { show: r === 1 && s.length < 20 } }))], f = i ? "#2a2a2a" : "#f0f0f0";
  return new yn({ width: t, height: 120, cursor: { show: true, drag: { x: false, y: false } }, legend: { show: false }, scales: { x: { time: true } }, axes: [{ show: true, stroke: i ? "#888" : "#999", grid: { stroke: f, width: 1 }, ticks: { stroke: f, width: 1 }, font: "10px system-ui, sans-serif", size: 28 }, { show: false, grid: { stroke: f, width: 1 } }], series: a, plugins: [ZD()] }, l, n);
}
function tR(n, e) {
  const t = [], i = n.split(`
`);
  let r = 0, s = 0;
  for (let o = 0; o < i.length && r < e.length; o++) {
    const l = i[o], a = l.trim(), f = s, h = s + l.length;
    if (s = h + 1, !(a.length === 0 || a.startsWith("//") || a === "(" || a === ")" || a.startsWith("set ") || a.startsWith("param "))) {
      if (a.startsWith("|")) {
        r > 0 && (t.push({ stepIndex: r, lineStart: f, lineEnd: h, step: e[r] }), r++);
        continue;
      }
      t.push({ stepIndex: r, lineStart: f, lineEnd: h, step: e[r] }), r++;
    }
  }
  return t;
}
const Tp = Ee.define(), ix = Ee.define(), rx = Ee.define(), sx = Ee.define(), ad = Yt.define({ create() {
  return { mappings: [], collapsed: /* @__PURE__ */ new Set(), version: 0, errorAfterPos: null, errorMessage: "" };
}, update(n, e) {
  var _a2, _b2;
  let { mappings: t, collapsed: i, version: r, errorAfterPos: s, errorMessage: o } = n;
  e.docChanged && t.length > 0 && (t = t.map((l) => ({ ...l, lineStart: e.changes.mapPos(l.lineStart, 1), lineEnd: e.changes.mapPos(l.lineEnd, -1) })).filter((l) => l.lineStart <= e.newDoc.length && l.lineEnd <= e.newDoc.length), s != null && (s = e.changes.mapPos(s, 1)));
  for (const l of e.effects) {
    if (l.is(rx) && (s = ((_a2 = l.value) == null ? void 0 : _a2.pos) ?? null, o = ((_b2 = l.value) == null ? void 0 : _b2.message) ?? ""), l.is(Tp)) {
      s = null, o = "";
      const a = /* @__PURE__ */ new Set();
      for (const f of n.mappings) n.collapsed.has(f.stepIndex) || a.add(f.stepIndex);
      t = l.value, i = new Set(t.map((f) => f.stepIndex));
      for (const f of a) i.delete(f);
      r++;
    }
    l.is(ix) && (i = new Set(i), i.has(l.value) ? i.delete(l.value) : i.add(l.value)), l.is(sx) && (i = new Set(t.map((a) => a.stepIndex)));
  }
  return { mappings: t, collapsed: i, version: r, errorAfterPos: s, errorMessage: o };
} });
class nR extends Ni {
  constructor(e, t) {
    super(), this.stepIndex = e, this.isCollapsed = t;
  }
  eq(e) {
    return this.stepIndex === e.stepIndex && this.isCollapsed === e.isCollapsed;
  }
  toDOM(e) {
    const t = document.createElement("span");
    return t.className = "cm-chart-toggle", t.textContent = this.isCollapsed ? "+" : "\u2212", t.addEventListener("mousedown", (i) => {
      i.preventDefault(), e.dispatch({ effects: ix.of(this.stepIndex) });
    }), t;
  }
  ignoreEvent() {
    return false;
  }
}
class I0 extends Ni {
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
class iR extends Ni {
  constructor(e, t, i) {
    super(), this.step = e, this.stepIndex = t, this.version = i;
  }
  eq(e) {
    return this.stepIndex === e.stepIndex && this.version === e.version;
  }
  toDOM(e) {
    const t = document.createElement("div");
    if (t.className = "cm-chart-widget", t.dataset.stepIndex = String(this.stepIndex), this.step.series.length > 0 && this.step.series[0].timestamps.length > 0) {
      const i = Math.max(200, e.contentDOM.clientWidth - 40), r = eR(t, this.step, i);
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
const rR = he.decorations.compute([ad], (n) => {
  const { mappings: e, collapsed: t, version: i, errorAfterPos: r, errorMessage: s } = n.field(ad), o = [];
  let l = false;
  for (const a of e) {
    if (a.lineStart > n.doc.length) continue;
    const f = r != null && a.lineEnd >= r;
    if (o.push(ve.widget({ widget: new nR(a.stepIndex, t.has(a.stepIndex)), side: -1 }).range(a.lineStart)), !t.has(a.stepIndex) && a.lineEnd <= n.doc.length) {
      let h;
      f ? l ? h = new I0("skipped due to previous error") : (h = new I0(s), l = true) : h = new iR(a.step, a.stepIndex, i), o.push(ve.widget({ widget: h, block: true, side: 1 }).range(a.lineEnd));
    }
  }
  return ve.set(o, true);
}), sR = kt.fromClass(class {
  update(n) {
    if (!n.geometryChanged) return;
    const e = Math.max(200, n.view.dom.clientWidth - 80);
    n.view.dom.querySelectorAll(".cm-chart-widget").forEach((t) => {
      const i = t.__uplot;
      i && i.setSize({ width: e, height: 120 });
    });
  }
});
function oR() {
  return [ad, rR, sR];
}
function Dh(n) {
  return n === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : n;
}
async function lR() {
  try {
    const n = await fetch("/examples/index.json");
    return n.ok ? await n.json() : [];
  } catch {
    return [];
  }
}
const aR = { datasets: async () => {
  const n = await Ch();
  return Object.keys(n);
}, metrics: async (n) => {
  const e = await Ch();
  return Object.keys(e[n] ?? {});
}, tags: async (n, e) => {
  var _a2;
  return ((_a2 = (await Ch())[n]) == null ? void 0 : _a2[e]) ?? [];
} }, cR = sO(aR);
let N0 = 0, Rh = null;
async function fR(n) {
  const e = n.state.doc.toString(), t = ++N0;
  try {
    const i = jb(e), r = await Qu(i);
    if (t !== N0) return;
    const s = tR(e, r);
    n.dispatch({ effects: Tp.of(s) });
  } catch {
  }
}
const hR = { editorMode: localStorage.getItem("mpl-editorMode") || "vim", theme: localStorage.getItem("mpl-theme") || "system", codeEditor: null, codeVimCompartment: new nr(), codeThemeCompartment: new nr(), codeCompletionCompartment: new nr(), codeDiagnosticsCompartment: new nr(), codeSignatureHelpCompartment: new nr(), codeHoverCompartment: new nr(), isInitialized: false, selectedExampleIndex: 0, examples: [], async init() {
  try {
    Dh(this.theme) === "dark" && document.documentElement.classList.add("dark-theme"), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      this.theme === "system" && this.onThemeChange();
    }), this.setupKeyboardShortcuts(), this.examples = await lR(), await qT(), this.isInitialized = true, await this.loadSelectedExample(), this.codeEditor && (this.parseEditorContent(this.codeEditor.state.doc.toString()), this.codeEditor.focus());
  } catch (n) {
    console.error("Failed to initialize:", n);
  }
}, setupKeyboardShortcuts() {
  document.addEventListener("keydown", (n) => {
    n.ctrlKey && n.key === "h" && (n.preventDefault(), this.codeEditor && this.codeEditor.focus());
  });
}, getVimExtension() {
  return this.editorMode === "vim" ? IT() : [];
}, getThemeExtension() {
  return Dh(this.theme) === "dark" ? aT : [];
}, getExtensions() {
  return [iC(), Ck(), SM(), GC(), uk(), vk(), $e.allowMultipleSelections.of(true), BC(), _v(XC, { fallback: true }), sM(), CE(), Kd(), Ik(), Hk(), _k(), TA(), Sd.of([...TE, ...SA, ...UA, ...LM, ...KC, ...Ob, ...zE]), this.codeVimCompartment.of(this.getVimExtension()), this.codeThemeCompartment.of(this.getThemeExtension()), he.lineWrapping, tO, this.codeCompletionCompartment.of(cR), this.codeDiagnosticsCompartment.of(fO), this.codeSignatureHelpCompartment.of(pO), this.codeHoverCompartment.of(wO), oR(), he.updateListener.of((n) => {
    n.docChanged && this.parseEditorContent(n.state.doc.toString());
  })];
}, initCodeEditor(n) {
  this.codeEditor = new he({ doc: "", extensions: this.getExtensions(), parent: n }), this.isInitialized && this.loadSelectedExample();
}, parseEditorContent(n) {
  var _a2;
  if (this.isInitialized) {
    try {
      jb(n);
    } catch {
      if (this.codeEditor) try {
        const t = (_a2 = Kb(n)) == null ? void 0 : _a2.find((i) => i.severity === "error");
        if (t) {
          const i = t.message ?? "parse error";
          this.codeEditor.dispatch({ effects: rx.of({ pos: t.from ?? 0, message: i }) });
        }
      } catch {
      }
      return;
    }
    Rh && clearTimeout(Rh), Rh = setTimeout(() => {
      this.codeEditor && fR(this.codeEditor);
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
  localStorage.setItem("mpl-theme", this.theme), Dh(this.theme) === "dark" ? document.documentElement.classList.add("dark-theme") : document.documentElement.classList.remove("dark-theme");
  const n = this.getThemeExtension();
  this.codeEditor && this.codeEditor.dispatch({ effects: this.codeThemeCompartment.reconfigure(n) }), this.codeEditor && this.isInitialized && this.parseEditorContent(this.codeEditor.state.doc.toString());
}, async loadSelectedExample() {
  const n = this.examples[this.selectedExampleIndex];
  if (n) try {
    const e = await fetch(`/examples/${n}`);
    if (!e.ok) throw new Error(`Failed to load example: ${e.statusText}`);
    const t = await e.text();
    this.codeEditor && (this.codeEditor.dispatch({ changes: { from: 0, to: this.codeEditor.state.doc.length, insert: t }, effects: [sx.of(), Tp.of([])] }), this.codeEditor.focus());
  } catch (e) {
    console.error("Error loading example:", e);
  }
}, async onExampleChange() {
  await this.loadSelectedExample();
} };
o1.store("playground", hR);
o1.start();
