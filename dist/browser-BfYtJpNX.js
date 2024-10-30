import { e as Ft } from "./events-D2cUsYK1.js";
var Wn = { exports: {} }, Xt = { exports: {} }, je = {}, Dt = {};
Dt.byteLength = Gi;
Dt.toByteArray = Hi;
Dt.fromByteArray = zi;
var $e = [], xe = [], vi = typeof Uint8Array < "u" ? Uint8Array : Array, Jt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var lt = 0, ji = Jt.length; lt < ji; ++lt)
  $e[lt] = Jt[lt], xe[Jt.charCodeAt(lt)] = lt;
xe[45] = 62;
xe[95] = 63;
function vn(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var i = e.indexOf("=");
  i === -1 && (i = t);
  var l = i === t ? 0 : 4 - i % 4;
  return [i, l];
}
function Gi(e) {
  var t = vn(e), i = t[0], l = t[1];
  return (i + l) * 3 / 4 - l;
}
function Vi(e, t, i) {
  return (t + i) * 3 / 4 - i;
}
function Hi(e) {
  var t, i = vn(e), l = i[0], c = i[1], d = new vi(Vi(e, l, c)), p = 0, u = c > 0 ? l - 4 : l, R;
  for (R = 0; R < u; R += 4)
    t = xe[e.charCodeAt(R)] << 18 | xe[e.charCodeAt(R + 1)] << 12 | xe[e.charCodeAt(R + 2)] << 6 | xe[e.charCodeAt(R + 3)], d[p++] = t >> 16 & 255, d[p++] = t >> 8 & 255, d[p++] = t & 255;
  return c === 2 && (t = xe[e.charCodeAt(R)] << 2 | xe[e.charCodeAt(R + 1)] >> 4, d[p++] = t & 255), c === 1 && (t = xe[e.charCodeAt(R)] << 10 | xe[e.charCodeAt(R + 1)] << 4 | xe[e.charCodeAt(R + 2)] >> 2, d[p++] = t >> 8 & 255, d[p++] = t & 255), d;
}
function qi(e) {
  return $e[e >> 18 & 63] + $e[e >> 12 & 63] + $e[e >> 6 & 63] + $e[e & 63];
}
function Yi(e, t, i) {
  for (var l, c = [], d = t; d < i; d += 3)
    l = (e[d] << 16 & 16711680) + (e[d + 1] << 8 & 65280) + (e[d + 2] & 255), c.push(qi(l));
  return c.join("");
}
function zi(e) {
  for (var t, i = e.length, l = i % 3, c = [], d = 16383, p = 0, u = i - l; p < u; p += d)
    c.push(Yi(e, p, p + d > u ? u : p + d));
  return l === 1 ? (t = e[i - 1], c.push(
    $e[t >> 2] + $e[t << 4 & 63] + "=="
  )) : l === 2 && (t = (e[i - 2] << 8) + e[i - 1], c.push(
    $e[t >> 10] + $e[t >> 4 & 63] + $e[t << 2 & 63] + "="
  )), c.join("");
}
var $r = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
$r.read = function(e, t, i, l, c) {
  var d, p, u = c * 8 - l - 1, R = (1 << u) - 1, _ = R >> 1, m = -7, B = i ? c - 1 : 0, E = i ? -1 : 1, g = e[t + B];
  for (B += E, d = g & (1 << -m) - 1, g >>= -m, m += u; m > 0; d = d * 256 + e[t + B], B += E, m -= 8)
    ;
  for (p = d & (1 << -m) - 1, d >>= -m, m += l; m > 0; p = p * 256 + e[t + B], B += E, m -= 8)
    ;
  if (d === 0)
    d = 1 - _;
  else {
    if (d === R)
      return p ? NaN : (g ? -1 : 1) * (1 / 0);
    p = p + Math.pow(2, l), d = d - _;
  }
  return (g ? -1 : 1) * p * Math.pow(2, d - l);
};
$r.write = function(e, t, i, l, c, d) {
  var p, u, R, _ = d * 8 - c - 1, m = (1 << _) - 1, B = m >> 1, E = c === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, g = l ? 0 : d - 1, F = l ? 1 : -1, A = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (u = isNaN(t) ? 1 : 0, p = m) : (p = Math.floor(Math.log(t) / Math.LN2), t * (R = Math.pow(2, -p)) < 1 && (p--, R *= 2), p + B >= 1 ? t += E / R : t += E * Math.pow(2, 1 - B), t * R >= 2 && (p++, R /= 2), p + B >= m ? (u = 0, p = m) : p + B >= 1 ? (u = (t * R - 1) * Math.pow(2, c), p = p + B) : (u = t * Math.pow(2, B - 1) * Math.pow(2, c), p = 0)); c >= 8; e[i + g] = u & 255, g += F, u /= 256, c -= 8)
    ;
  for (p = p << c | u, _ += c; _ > 0; e[i + g] = p & 255, g += F, p /= 256, _ -= 8)
    ;
  e[i + g - F] |= A * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = Dt, i = $r, l = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = u, e.SlowBuffer = U, e.INSPECT_MAX_BYTES = 50;
  const c = 2147483647;
  e.kMaxLength = c, u.TYPED_ARRAY_SUPPORT = d(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function d() {
    try {
      const o = new Uint8Array(1), r = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(o, r), o.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(u.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (u.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(u.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (u.isBuffer(this))
        return this.byteOffset;
    }
  });
  function p(o) {
    if (o > c)
      throw new RangeError('The value "' + o + '" is invalid for option "size"');
    const r = new Uint8Array(o);
    return Object.setPrototypeOf(r, u.prototype), r;
  }
  function u(o, r, n) {
    if (typeof o == "number") {
      if (typeof r == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return B(o);
    }
    return R(o, r, n);
  }
  u.poolSize = 8192;
  function R(o, r, n) {
    if (typeof o == "string")
      return E(o, r);
    if (ArrayBuffer.isView(o))
      return F(o);
    if (o == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof o
      );
    if (C(o, ArrayBuffer) || o && C(o.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (C(o, SharedArrayBuffer) || o && C(o.buffer, SharedArrayBuffer)))
      return A(o, r, n);
    if (typeof o == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const f = o.valueOf && o.valueOf();
    if (f != null && f !== o)
      return u.from(f, r, n);
    const h = D(o);
    if (h) return h;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof o[Symbol.toPrimitive] == "function")
      return u.from(o[Symbol.toPrimitive]("string"), r, n);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof o
    );
  }
  u.from = function(o, r, n) {
    return R(o, r, n);
  }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array);
  function _(o) {
    if (typeof o != "number")
      throw new TypeError('"size" argument must be of type number');
    if (o < 0)
      throw new RangeError('The value "' + o + '" is invalid for option "size"');
  }
  function m(o, r, n) {
    return _(o), o <= 0 ? p(o) : r !== void 0 ? typeof n == "string" ? p(o).fill(r, n) : p(o).fill(r) : p(o);
  }
  u.alloc = function(o, r, n) {
    return m(o, r, n);
  };
  function B(o) {
    return _(o), p(o < 0 ? 0 : O(o) | 0);
  }
  u.allocUnsafe = function(o) {
    return B(o);
  }, u.allocUnsafeSlow = function(o) {
    return B(o);
  };
  function E(o, r) {
    if ((typeof r != "string" || r === "") && (r = "utf8"), !u.isEncoding(r))
      throw new TypeError("Unknown encoding: " + r);
    const n = I(o, r) | 0;
    let f = p(n);
    const h = f.write(o, r);
    return h !== n && (f = f.slice(0, h)), f;
  }
  function g(o) {
    const r = o.length < 0 ? 0 : O(o.length) | 0, n = p(r);
    for (let f = 0; f < r; f += 1)
      n[f] = o[f] & 255;
    return n;
  }
  function F(o) {
    if (C(o, Uint8Array)) {
      const r = new Uint8Array(o);
      return A(r.buffer, r.byteOffset, r.byteLength);
    }
    return g(o);
  }
  function A(o, r, n) {
    if (r < 0 || o.byteLength < r)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (o.byteLength < r + (n || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let f;
    return r === void 0 && n === void 0 ? f = new Uint8Array(o) : n === void 0 ? f = new Uint8Array(o, r) : f = new Uint8Array(o, r, n), Object.setPrototypeOf(f, u.prototype), f;
  }
  function D(o) {
    if (u.isBuffer(o)) {
      const r = O(o.length) | 0, n = p(r);
      return n.length === 0 || o.copy(n, 0, 0, r), n;
    }
    if (o.length !== void 0)
      return typeof o.length != "number" || Re(o.length) ? p(0) : g(o);
    if (o.type === "Buffer" && Array.isArray(o.data))
      return g(o.data);
  }
  function O(o) {
    if (o >= c)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + c.toString(16) + " bytes");
    return o | 0;
  }
  function U(o) {
    return +o != o && (o = 0), u.alloc(+o);
  }
  u.isBuffer = function(r) {
    return r != null && r._isBuffer === !0 && r !== u.prototype;
  }, u.compare = function(r, n) {
    if (C(r, Uint8Array) && (r = u.from(r, r.offset, r.byteLength)), C(n, Uint8Array) && (n = u.from(n, n.offset, n.byteLength)), !u.isBuffer(r) || !u.isBuffer(n))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (r === n) return 0;
    let f = r.length, h = n.length;
    for (let w = 0, S = Math.min(f, h); w < S; ++w)
      if (r[w] !== n[w]) {
        f = r[w], h = n[w];
        break;
      }
    return f < h ? -1 : h < f ? 1 : 0;
  }, u.isEncoding = function(r) {
    switch (String(r).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, u.concat = function(r, n) {
    if (!Array.isArray(r))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0)
      return u.alloc(0);
    let f;
    if (n === void 0)
      for (n = 0, f = 0; f < r.length; ++f)
        n += r[f].length;
    const h = u.allocUnsafe(n);
    let w = 0;
    for (f = 0; f < r.length; ++f) {
      let S = r[f];
      if (C(S, Uint8Array))
        w + S.length > h.length ? (u.isBuffer(S) || (S = u.from(S)), S.copy(h, w)) : Uint8Array.prototype.set.call(
          h,
          S,
          w
        );
      else if (u.isBuffer(S))
        S.copy(h, w);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      w += S.length;
    }
    return h;
  };
  function I(o, r) {
    if (u.isBuffer(o))
      return o.length;
    if (ArrayBuffer.isView(o) || C(o, ArrayBuffer))
      return o.byteLength;
    if (typeof o != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof o
      );
    const n = o.length, f = arguments.length > 2 && arguments[2] === !0;
    if (!f && n === 0) return 0;
    let h = !1;
    for (; ; )
      switch (r) {
        case "ascii":
        case "latin1":
        case "binary":
          return n;
        case "utf8":
        case "utf-8":
          return L(o).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return n * 2;
        case "hex":
          return n >>> 1;
        case "base64":
          return z(o).length;
        default:
          if (h)
            return f ? -1 : L(o).length;
          r = ("" + r).toLowerCase(), h = !0;
      }
  }
  u.byteLength = I;
  function K(o, r, n) {
    let f = !1;
    if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, r >>>= 0, n <= r))
      return "";
    for (o || (o = "utf8"); ; )
      switch (o) {
        case "hex":
          return ee(this, r, n);
        case "utf8":
        case "utf-8":
          return Y(this, r, n);
        case "ascii":
          return le(this, r, n);
        case "latin1":
        case "binary":
          return ae(this, r, n);
        case "base64":
          return T(this, r, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return fe(this, r, n);
        default:
          if (f) throw new TypeError("Unknown encoding: " + o);
          o = (o + "").toLowerCase(), f = !0;
      }
  }
  u.prototype._isBuffer = !0;
  function v(o, r, n) {
    const f = o[r];
    o[r] = o[n], o[n] = f;
  }
  u.prototype.swap16 = function() {
    const r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let n = 0; n < r; n += 2)
      v(this, n, n + 1);
    return this;
  }, u.prototype.swap32 = function() {
    const r = this.length;
    if (r % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let n = 0; n < r; n += 4)
      v(this, n, n + 3), v(this, n + 1, n + 2);
    return this;
  }, u.prototype.swap64 = function() {
    const r = this.length;
    if (r % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let n = 0; n < r; n += 8)
      v(this, n, n + 7), v(this, n + 1, n + 6), v(this, n + 2, n + 5), v(this, n + 3, n + 4);
    return this;
  }, u.prototype.toString = function() {
    const r = this.length;
    return r === 0 ? "" : arguments.length === 0 ? Y(this, 0, r) : K.apply(this, arguments);
  }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(r) {
    if (!u.isBuffer(r)) throw new TypeError("Argument must be a Buffer");
    return this === r ? !0 : u.compare(this, r) === 0;
  }, u.prototype.inspect = function() {
    let r = "";
    const n = e.INSPECT_MAX_BYTES;
    return r = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (r += " ... "), "<Buffer " + r + ">";
  }, l && (u.prototype[l] = u.prototype.inspect), u.prototype.compare = function(r, n, f, h, w) {
    if (C(r, Uint8Array) && (r = u.from(r, r.offset, r.byteLength)), !u.isBuffer(r))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r
      );
    if (n === void 0 && (n = 0), f === void 0 && (f = r ? r.length : 0), h === void 0 && (h = 0), w === void 0 && (w = this.length), n < 0 || f > r.length || h < 0 || w > this.length)
      throw new RangeError("out of range index");
    if (h >= w && n >= f)
      return 0;
    if (h >= w)
      return -1;
    if (n >= f)
      return 1;
    if (n >>>= 0, f >>>= 0, h >>>= 0, w >>>= 0, this === r) return 0;
    let S = w - h, j = f - n;
    const re = Math.min(S, j), J = this.slice(h, w), ne = r.slice(n, f);
    for (let q = 0; q < re; ++q)
      if (J[q] !== ne[q]) {
        S = J[q], j = ne[q];
        break;
      }
    return S < j ? -1 : j < S ? 1 : 0;
  };
  function ie(o, r, n, f, h) {
    if (o.length === 0) return -1;
    if (typeof n == "string" ? (f = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Re(n) && (n = h ? 0 : o.length - 1), n < 0 && (n = o.length + n), n >= o.length) {
      if (h) return -1;
      n = o.length - 1;
    } else if (n < 0)
      if (h) n = 0;
      else return -1;
    if (typeof r == "string" && (r = u.from(r, f)), u.isBuffer(r))
      return r.length === 0 ? -1 : we(o, r, n, f, h);
    if (typeof r == "number")
      return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? h ? Uint8Array.prototype.indexOf.call(o, r, n) : Uint8Array.prototype.lastIndexOf.call(o, r, n) : we(o, [r], n, f, h);
    throw new TypeError("val must be string, number or Buffer");
  }
  function we(o, r, n, f, h) {
    let w = 1, S = o.length, j = r.length;
    if (f !== void 0 && (f = String(f).toLowerCase(), f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le")) {
      if (o.length < 2 || r.length < 2)
        return -1;
      w = 2, S /= 2, j /= 2, n /= 2;
    }
    function re(ne, q) {
      return w === 1 ? ne[q] : ne.readUInt16BE(q * w);
    }
    let J;
    if (h) {
      let ne = -1;
      for (J = n; J < S; J++)
        if (re(o, J) === re(r, ne === -1 ? 0 : J - ne)) {
          if (ne === -1 && (ne = J), J - ne + 1 === j) return ne * w;
        } else
          ne !== -1 && (J -= J - ne), ne = -1;
    } else
      for (n + j > S && (n = S - j), J = n; J >= 0; J--) {
        let ne = !0;
        for (let q = 0; q < j; q++)
          if (re(o, J + q) !== re(r, q)) {
            ne = !1;
            break;
          }
        if (ne) return J;
      }
    return -1;
  }
  u.prototype.includes = function(r, n, f) {
    return this.indexOf(r, n, f) !== -1;
  }, u.prototype.indexOf = function(r, n, f) {
    return ie(this, r, n, f, !0);
  }, u.prototype.lastIndexOf = function(r, n, f) {
    return ie(this, r, n, f, !1);
  };
  function Q(o, r, n, f) {
    n = Number(n) || 0;
    const h = o.length - n;
    f ? (f = Number(f), f > h && (f = h)) : f = h;
    const w = r.length;
    f > w / 2 && (f = w / 2);
    let S;
    for (S = 0; S < f; ++S) {
      const j = parseInt(r.substr(S * 2, 2), 16);
      if (Re(j)) return S;
      o[n + S] = j;
    }
    return S;
  }
  function oe(o, r, n, f) {
    return _e(L(r, o.length - n), o, n, f);
  }
  function he(o, r, n, f) {
    return _e(X(r), o, n, f);
  }
  function pe(o, r, n, f) {
    return _e(z(r), o, n, f);
  }
  function H(o, r, n, f) {
    return _e(Z(r, o.length - n), o, n, f);
  }
  u.prototype.write = function(r, n, f, h) {
    if (n === void 0)
      h = "utf8", f = this.length, n = 0;
    else if (f === void 0 && typeof n == "string")
      h = n, f = this.length, n = 0;
    else if (isFinite(n))
      n = n >>> 0, isFinite(f) ? (f = f >>> 0, h === void 0 && (h = "utf8")) : (h = f, f = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const w = this.length - n;
    if ((f === void 0 || f > w) && (f = w), r.length > 0 && (f < 0 || n < 0) || n > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    h || (h = "utf8");
    let S = !1;
    for (; ; )
      switch (h) {
        case "hex":
          return Q(this, r, n, f);
        case "utf8":
        case "utf-8":
          return oe(this, r, n, f);
        case "ascii":
        case "latin1":
        case "binary":
          return he(this, r, n, f);
        case "base64":
          return pe(this, r, n, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return H(this, r, n, f);
        default:
          if (S) throw new TypeError("Unknown encoding: " + h);
          h = ("" + h).toLowerCase(), S = !0;
      }
  }, u.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function T(o, r, n) {
    return r === 0 && n === o.length ? t.fromByteArray(o) : t.fromByteArray(o.slice(r, n));
  }
  function Y(o, r, n) {
    n = Math.min(o.length, n);
    const f = [];
    let h = r;
    for (; h < n; ) {
      const w = o[h];
      let S = null, j = w > 239 ? 4 : w > 223 ? 3 : w > 191 ? 2 : 1;
      if (h + j <= n) {
        let re, J, ne, q;
        switch (j) {
          case 1:
            w < 128 && (S = w);
            break;
          case 2:
            re = o[h + 1], (re & 192) === 128 && (q = (w & 31) << 6 | re & 63, q > 127 && (S = q));
            break;
          case 3:
            re = o[h + 1], J = o[h + 2], (re & 192) === 128 && (J & 192) === 128 && (q = (w & 15) << 12 | (re & 63) << 6 | J & 63, q > 2047 && (q < 55296 || q > 57343) && (S = q));
            break;
          case 4:
            re = o[h + 1], J = o[h + 2], ne = o[h + 3], (re & 192) === 128 && (J & 192) === 128 && (ne & 192) === 128 && (q = (w & 15) << 18 | (re & 63) << 12 | (J & 63) << 6 | ne & 63, q > 65535 && q < 1114112 && (S = q));
        }
      }
      S === null ? (S = 65533, j = 1) : S > 65535 && (S -= 65536, f.push(S >>> 10 & 1023 | 55296), S = 56320 | S & 1023), f.push(S), h += j;
    }
    return V(f);
  }
  const G = 4096;
  function V(o) {
    const r = o.length;
    if (r <= G)
      return String.fromCharCode.apply(String, o);
    let n = "", f = 0;
    for (; f < r; )
      n += String.fromCharCode.apply(
        String,
        o.slice(f, f += G)
      );
    return n;
  }
  function le(o, r, n) {
    let f = "";
    n = Math.min(o.length, n);
    for (let h = r; h < n; ++h)
      f += String.fromCharCode(o[h] & 127);
    return f;
  }
  function ae(o, r, n) {
    let f = "";
    n = Math.min(o.length, n);
    for (let h = r; h < n; ++h)
      f += String.fromCharCode(o[h]);
    return f;
  }
  function ee(o, r, n) {
    const f = o.length;
    (!r || r < 0) && (r = 0), (!n || n < 0 || n > f) && (n = f);
    let h = "";
    for (let w = r; w < n; ++w)
      h += ht[o[w]];
    return h;
  }
  function fe(o, r, n) {
    const f = o.slice(r, n);
    let h = "";
    for (let w = 0; w < f.length - 1; w += 2)
      h += String.fromCharCode(f[w] + f[w + 1] * 256);
    return h;
  }
  u.prototype.slice = function(r, n) {
    const f = this.length;
    r = ~~r, n = n === void 0 ? f : ~~n, r < 0 ? (r += f, r < 0 && (r = 0)) : r > f && (r = f), n < 0 ? (n += f, n < 0 && (n = 0)) : n > f && (n = f), n < r && (n = r);
    const h = this.subarray(r, n);
    return Object.setPrototypeOf(h, u.prototype), h;
  };
  function W(o, r, n) {
    if (o % 1 !== 0 || o < 0) throw new RangeError("offset is not uint");
    if (o + r > n) throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(r, n, f) {
    r = r >>> 0, n = n >>> 0, f || W(r, n, this.length);
    let h = this[r], w = 1, S = 0;
    for (; ++S < n && (w *= 256); )
      h += this[r + S] * w;
    return h;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(r, n, f) {
    r = r >>> 0, n = n >>> 0, f || W(r, n, this.length);
    let h = this[r + --n], w = 1;
    for (; n > 0 && (w *= 256); )
      h += this[r + --n] * w;
    return h;
  }, u.prototype.readUint8 = u.prototype.readUInt8 = function(r, n) {
    return r = r >>> 0, n || W(r, 1, this.length), this[r];
  }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(r, n) {
    return r = r >>> 0, n || W(r, 2, this.length), this[r] | this[r + 1] << 8;
  }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(r, n) {
    return r = r >>> 0, n || W(r, 2, this.length), this[r] << 8 | this[r + 1];
  }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(r, n) {
    return r = r >>> 0, n || W(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
  }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(r, n) {
    return r = r >>> 0, n || W(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
  }, u.prototype.readBigUInt64LE = Te(function(r) {
    r = r >>> 0, b(r, "offset");
    const n = this[r], f = this[r + 7];
    (n === void 0 || f === void 0) && y(r, this.length - 8);
    const h = n + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, w = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + f * 2 ** 24;
    return BigInt(h) + (BigInt(w) << BigInt(32));
  }), u.prototype.readBigUInt64BE = Te(function(r) {
    r = r >>> 0, b(r, "offset");
    const n = this[r], f = this[r + 7];
    (n === void 0 || f === void 0) && y(r, this.length - 8);
    const h = n * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], w = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + f;
    return (BigInt(h) << BigInt(32)) + BigInt(w);
  }), u.prototype.readIntLE = function(r, n, f) {
    r = r >>> 0, n = n >>> 0, f || W(r, n, this.length);
    let h = this[r], w = 1, S = 0;
    for (; ++S < n && (w *= 256); )
      h += this[r + S] * w;
    return w *= 128, h >= w && (h -= Math.pow(2, 8 * n)), h;
  }, u.prototype.readIntBE = function(r, n, f) {
    r = r >>> 0, n = n >>> 0, f || W(r, n, this.length);
    let h = n, w = 1, S = this[r + --h];
    for (; h > 0 && (w *= 256); )
      S += this[r + --h] * w;
    return w *= 128, S >= w && (S -= Math.pow(2, 8 * n)), S;
  }, u.prototype.readInt8 = function(r, n) {
    return r = r >>> 0, n || W(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  }, u.prototype.readInt16LE = function(r, n) {
    r = r >>> 0, n || W(r, 2, this.length);
    const f = this[r] | this[r + 1] << 8;
    return f & 32768 ? f | 4294901760 : f;
  }, u.prototype.readInt16BE = function(r, n) {
    r = r >>> 0, n || W(r, 2, this.length);
    const f = this[r + 1] | this[r] << 8;
    return f & 32768 ? f | 4294901760 : f;
  }, u.prototype.readInt32LE = function(r, n) {
    return r = r >>> 0, n || W(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
  }, u.prototype.readInt32BE = function(r, n) {
    return r = r >>> 0, n || W(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
  }, u.prototype.readBigInt64LE = Te(function(r) {
    r = r >>> 0, b(r, "offset");
    const n = this[r], f = this[r + 7];
    (n === void 0 || f === void 0) && y(r, this.length - 8);
    const h = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (f << 24);
    return (BigInt(h) << BigInt(32)) + BigInt(n + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
  }), u.prototype.readBigInt64BE = Te(function(r) {
    r = r >>> 0, b(r, "offset");
    const n = this[r], f = this[r + 7];
    (n === void 0 || f === void 0) && y(r, this.length - 8);
    const h = (n << 24) + // Overflow
    this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
    return (BigInt(h) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + f);
  }), u.prototype.readFloatLE = function(r, n) {
    return r = r >>> 0, n || W(r, 4, this.length), i.read(this, r, !0, 23, 4);
  }, u.prototype.readFloatBE = function(r, n) {
    return r = r >>> 0, n || W(r, 4, this.length), i.read(this, r, !1, 23, 4);
  }, u.prototype.readDoubleLE = function(r, n) {
    return r = r >>> 0, n || W(r, 8, this.length), i.read(this, r, !0, 52, 8);
  }, u.prototype.readDoubleBE = function(r, n) {
    return r = r >>> 0, n || W(r, 8, this.length), i.read(this, r, !1, 52, 8);
  };
  function te(o, r, n, f, h, w) {
    if (!u.isBuffer(o)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > h || r < w) throw new RangeError('"value" argument is out of bounds');
    if (n + f > o.length) throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(r, n, f, h) {
    if (r = +r, n = n >>> 0, f = f >>> 0, !h) {
      const j = Math.pow(2, 8 * f) - 1;
      te(this, r, n, f, j, 0);
    }
    let w = 1, S = 0;
    for (this[n] = r & 255; ++S < f && (w *= 256); )
      this[n + S] = r / w & 255;
    return n + f;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(r, n, f, h) {
    if (r = +r, n = n >>> 0, f = f >>> 0, !h) {
      const j = Math.pow(2, 8 * f) - 1;
      te(this, r, n, f, j, 0);
    }
    let w = f - 1, S = 1;
    for (this[n + w] = r & 255; --w >= 0 && (S *= 256); )
      this[n + w] = r / S & 255;
    return n + f;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(r, n, f) {
    return r = +r, n = n >>> 0, f || te(this, r, n, 1, 255, 0), this[n] = r & 255, n + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(r, n, f) {
    return r = +r, n = n >>> 0, f || te(this, r, n, 2, 65535, 0), this[n] = r & 255, this[n + 1] = r >>> 8, n + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(r, n, f) {
    return r = +r, n = n >>> 0, f || te(this, r, n, 2, 65535, 0), this[n] = r >>> 8, this[n + 1] = r & 255, n + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(r, n, f) {
    return r = +r, n = n >>> 0, f || te(this, r, n, 4, 4294967295, 0), this[n + 3] = r >>> 24, this[n + 2] = r >>> 16, this[n + 1] = r >>> 8, this[n] = r & 255, n + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(r, n, f) {
    return r = +r, n = n >>> 0, f || te(this, r, n, 4, 4294967295, 0), this[n] = r >>> 24, this[n + 1] = r >>> 16, this[n + 2] = r >>> 8, this[n + 3] = r & 255, n + 4;
  };
  function P(o, r, n, f, h) {
    Pe(r, f, h, o, n, 7);
    let w = Number(r & BigInt(4294967295));
    o[n++] = w, w = w >> 8, o[n++] = w, w = w >> 8, o[n++] = w, w = w >> 8, o[n++] = w;
    let S = Number(r >> BigInt(32) & BigInt(4294967295));
    return o[n++] = S, S = S >> 8, o[n++] = S, S = S >> 8, o[n++] = S, S = S >> 8, o[n++] = S, n;
  }
  function se(o, r, n, f, h) {
    Pe(r, f, h, o, n, 7);
    let w = Number(r & BigInt(4294967295));
    o[n + 7] = w, w = w >> 8, o[n + 6] = w, w = w >> 8, o[n + 5] = w, w = w >> 8, o[n + 4] = w;
    let S = Number(r >> BigInt(32) & BigInt(4294967295));
    return o[n + 3] = S, S = S >> 8, o[n + 2] = S, S = S >> 8, o[n + 1] = S, S = S >> 8, o[n] = S, n + 8;
  }
  u.prototype.writeBigUInt64LE = Te(function(r, n = 0) {
    return P(this, r, n, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeBigUInt64BE = Te(function(r, n = 0) {
    return se(this, r, n, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeIntLE = function(r, n, f, h) {
    if (r = +r, n = n >>> 0, !h) {
      const re = Math.pow(2, 8 * f - 1);
      te(this, r, n, f, re - 1, -re);
    }
    let w = 0, S = 1, j = 0;
    for (this[n] = r & 255; ++w < f && (S *= 256); )
      r < 0 && j === 0 && this[n + w - 1] !== 0 && (j = 1), this[n + w] = (r / S >> 0) - j & 255;
    return n + f;
  }, u.prototype.writeIntBE = function(r, n, f, h) {
    if (r = +r, n = n >>> 0, !h) {
      const re = Math.pow(2, 8 * f - 1);
      te(this, r, n, f, re - 1, -re);
    }
    let w = f - 1, S = 1, j = 0;
    for (this[n + w] = r & 255; --w >= 0 && (S *= 256); )
      r < 0 && j === 0 && this[n + w + 1] !== 0 && (j = 1), this[n + w] = (r / S >> 0) - j & 255;
    return n + f;
  }, u.prototype.writeInt8 = function(r, n, f) {
    return r = +r, n = n >>> 0, f || te(this, r, n, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[n] = r & 255, n + 1;
  }, u.prototype.writeInt16LE = function(r, n, f) {
    return r = +r, n = n >>> 0, f || te(this, r, n, 2, 32767, -32768), this[n] = r & 255, this[n + 1] = r >>> 8, n + 2;
  }, u.prototype.writeInt16BE = function(r, n, f) {
    return r = +r, n = n >>> 0, f || te(this, r, n, 2, 32767, -32768), this[n] = r >>> 8, this[n + 1] = r & 255, n + 2;
  }, u.prototype.writeInt32LE = function(r, n, f) {
    return r = +r, n = n >>> 0, f || te(this, r, n, 4, 2147483647, -2147483648), this[n] = r & 255, this[n + 1] = r >>> 8, this[n + 2] = r >>> 16, this[n + 3] = r >>> 24, n + 4;
  }, u.prototype.writeInt32BE = function(r, n, f) {
    return r = +r, n = n >>> 0, f || te(this, r, n, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[n] = r >>> 24, this[n + 1] = r >>> 16, this[n + 2] = r >>> 8, this[n + 3] = r & 255, n + 4;
  }, u.prototype.writeBigInt64LE = Te(function(r, n = 0) {
    return P(this, r, n, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), u.prototype.writeBigInt64BE = Te(function(r, n = 0) {
    return se(this, r, n, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Se(o, r, n, f, h, w) {
    if (n + f > o.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("Index out of range");
  }
  function Me(o, r, n, f, h) {
    return r = +r, n = n >>> 0, h || Se(o, r, n, 4), i.write(o, r, n, f, 23, 4), n + 4;
  }
  u.prototype.writeFloatLE = function(r, n, f) {
    return Me(this, r, n, !0, f);
  }, u.prototype.writeFloatBE = function(r, n, f) {
    return Me(this, r, n, !1, f);
  };
  function ke(o, r, n, f, h) {
    return r = +r, n = n >>> 0, h || Se(o, r, n, 8), i.write(o, r, n, f, 52, 8), n + 8;
  }
  u.prototype.writeDoubleLE = function(r, n, f) {
    return ke(this, r, n, !0, f);
  }, u.prototype.writeDoubleBE = function(r, n, f) {
    return ke(this, r, n, !1, f);
  }, u.prototype.copy = function(r, n, f, h) {
    if (!u.isBuffer(r)) throw new TypeError("argument should be a Buffer");
    if (f || (f = 0), !h && h !== 0 && (h = this.length), n >= r.length && (n = r.length), n || (n = 0), h > 0 && h < f && (h = f), h === f || r.length === 0 || this.length === 0) return 0;
    if (n < 0)
      throw new RangeError("targetStart out of bounds");
    if (f < 0 || f >= this.length) throw new RangeError("Index out of range");
    if (h < 0) throw new RangeError("sourceEnd out of bounds");
    h > this.length && (h = this.length), r.length - n < h - f && (h = r.length - n + f);
    const w = h - f;
    return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(n, f, h) : Uint8Array.prototype.set.call(
      r,
      this.subarray(f, h),
      n
    ), w;
  }, u.prototype.fill = function(r, n, f, h) {
    if (typeof r == "string") {
      if (typeof n == "string" ? (h = n, n = 0, f = this.length) : typeof f == "string" && (h = f, f = this.length), h !== void 0 && typeof h != "string")
        throw new TypeError("encoding must be a string");
      if (typeof h == "string" && !u.isEncoding(h))
        throw new TypeError("Unknown encoding: " + h);
      if (r.length === 1) {
        const S = r.charCodeAt(0);
        (h === "utf8" && S < 128 || h === "latin1") && (r = S);
      }
    } else typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
    if (n < 0 || this.length < n || this.length < f)
      throw new RangeError("Out of range index");
    if (f <= n)
      return this;
    n = n >>> 0, f = f === void 0 ? this.length : f >>> 0, r || (r = 0);
    let w;
    if (typeof r == "number")
      for (w = n; w < f; ++w)
        this[w] = r;
    else {
      const S = u.isBuffer(r) ? r : u.from(r, h), j = S.length;
      if (j === 0)
        throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (w = 0; w < f - n; ++w)
        this[w + n] = S[w % j];
    }
    return this;
  };
  const me = {};
  function Ce(o, r, n) {
    me[o] = class extends n {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: r.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${o}]`, this.stack, delete this.name;
      }
      get code() {
        return o;
      }
      set code(h) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: h,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${o}]: ${this.message}`;
      }
    };
  }
  Ce(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(o) {
      return o ? `${o} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Ce(
    "ERR_INVALID_ARG_TYPE",
    function(o, r) {
      return `The "${o}" argument must be of type number. Received type ${typeof r}`;
    },
    TypeError
  ), Ce(
    "ERR_OUT_OF_RANGE",
    function(o, r, n) {
      let f = `The value of "${o}" is out of range.`, h = n;
      return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? h = ot(String(n)) : typeof n == "bigint" && (h = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (h = ot(h)), h += "n"), f += ` It must be ${r}. Received ${h}`, f;
    },
    RangeError
  );
  function ot(o) {
    let r = "", n = o.length;
    const f = o[0] === "-" ? 1 : 0;
    for (; n >= f + 4; n -= 3)
      r = `_${o.slice(n - 3, n)}${r}`;
    return `${o.slice(0, n)}${r}`;
  }
  function Ye(o, r, n) {
    b(r, "offset"), (o[r] === void 0 || o[r + n] === void 0) && y(r, o.length - (n + 1));
  }
  function Pe(o, r, n, f, h, w) {
    if (o > n || o < r) {
      const S = typeof r == "bigint" ? "n" : "";
      let j;
      throw r === 0 || r === BigInt(0) ? j = `>= 0${S} and < 2${S} ** ${(w + 1) * 8}${S}` : j = `>= -(2${S} ** ${(w + 1) * 8 - 1}${S}) and < 2 ** ${(w + 1) * 8 - 1}${S}`, new me.ERR_OUT_OF_RANGE("value", j, o);
    }
    Ye(f, h, w);
  }
  function b(o, r) {
    if (typeof o != "number")
      throw new me.ERR_INVALID_ARG_TYPE(r, "number", o);
  }
  function y(o, r, n) {
    throw Math.floor(o) !== o ? (b(o, n), new me.ERR_OUT_OF_RANGE("offset", "an integer", o)) : r < 0 ? new me.ERR_BUFFER_OUT_OF_BOUNDS() : new me.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${r}`,
      o
    );
  }
  const x = /[^+/0-9A-Za-z-_]/g;
  function k(o) {
    if (o = o.split("=")[0], o = o.trim().replace(x, ""), o.length < 2) return "";
    for (; o.length % 4 !== 0; )
      o = o + "=";
    return o;
  }
  function L(o, r) {
    r = r || 1 / 0;
    let n;
    const f = o.length;
    let h = null;
    const w = [];
    for (let S = 0; S < f; ++S) {
      if (n = o.charCodeAt(S), n > 55295 && n < 57344) {
        if (!h) {
          if (n > 56319) {
            (r -= 3) > -1 && w.push(239, 191, 189);
            continue;
          } else if (S + 1 === f) {
            (r -= 3) > -1 && w.push(239, 191, 189);
            continue;
          }
          h = n;
          continue;
        }
        if (n < 56320) {
          (r -= 3) > -1 && w.push(239, 191, 189), h = n;
          continue;
        }
        n = (h - 55296 << 10 | n - 56320) + 65536;
      } else h && (r -= 3) > -1 && w.push(239, 191, 189);
      if (h = null, n < 128) {
        if ((r -= 1) < 0) break;
        w.push(n);
      } else if (n < 2048) {
        if ((r -= 2) < 0) break;
        w.push(
          n >> 6 | 192,
          n & 63 | 128
        );
      } else if (n < 65536) {
        if ((r -= 3) < 0) break;
        w.push(
          n >> 12 | 224,
          n >> 6 & 63 | 128,
          n & 63 | 128
        );
      } else if (n < 1114112) {
        if ((r -= 4) < 0) break;
        w.push(
          n >> 18 | 240,
          n >> 12 & 63 | 128,
          n >> 6 & 63 | 128,
          n & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return w;
  }
  function X(o) {
    const r = [];
    for (let n = 0; n < o.length; ++n)
      r.push(o.charCodeAt(n) & 255);
    return r;
  }
  function Z(o, r) {
    let n, f, h;
    const w = [];
    for (let S = 0; S < o.length && !((r -= 2) < 0); ++S)
      n = o.charCodeAt(S), f = n >> 8, h = n % 256, w.push(h), w.push(f);
    return w;
  }
  function z(o) {
    return t.toByteArray(k(o));
  }
  function _e(o, r, n, f) {
    let h;
    for (h = 0; h < f && !(h + n >= r.length || h >= o.length); ++h)
      r[h + n] = o[h];
    return h;
  }
  function C(o, r) {
    return o instanceof r || o != null && o.constructor != null && o.constructor.name != null && o.constructor.name === r.name;
  }
  function Re(o) {
    return o !== o;
  }
  const ht = function() {
    const o = "0123456789abcdef", r = new Array(256);
    for (let n = 0; n < 16; ++n) {
      const f = n * 16;
      for (let h = 0; h < 16; ++h)
        r[f + h] = o[n] + o[h];
    }
    return r;
  }();
  function Te(o) {
    return typeof BigInt > "u" ? Vt : o;
  }
  function Vt() {
    throw new Error("BigInt not supported");
  }
})(je);
var ue = {
  ArrayIsArray(e) {
    return Array.isArray(e);
  },
  ArrayPrototypeIncludes(e, t) {
    return e.includes(t);
  },
  ArrayPrototypeIndexOf(e, t) {
    return e.indexOf(t);
  },
  ArrayPrototypeJoin(e, t) {
    return e.join(t);
  },
  ArrayPrototypeMap(e, t) {
    return e.map(t);
  },
  ArrayPrototypePop(e, t) {
    return e.pop(t);
  },
  ArrayPrototypePush(e, t) {
    return e.push(t);
  },
  ArrayPrototypeSlice(e, t, i) {
    return e.slice(t, i);
  },
  Error,
  FunctionPrototypeCall(e, t, ...i) {
    return e.call(t, ...i);
  },
  FunctionPrototypeSymbolHasInstance(e, t) {
    return Function.prototype[Symbol.hasInstance].call(e, t);
  },
  MathFloor: Math.floor,
  Number,
  NumberIsInteger: Number.isInteger,
  NumberIsNaN: Number.isNaN,
  NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
  NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
  NumberParseInt: Number.parseInt,
  ObjectDefineProperties(e, t) {
    return Object.defineProperties(e, t);
  },
  ObjectDefineProperty(e, t, i) {
    return Object.defineProperty(e, t, i);
  },
  ObjectGetOwnPropertyDescriptor(e, t) {
    return Object.getOwnPropertyDescriptor(e, t);
  },
  ObjectKeys(e) {
    return Object.keys(e);
  },
  ObjectSetPrototypeOf(e, t) {
    return Object.setPrototypeOf(e, t);
  },
  Promise,
  PromisePrototypeCatch(e, t) {
    return e.catch(t);
  },
  PromisePrototypeThen(e, t, i) {
    return e.then(t, i);
  },
  PromiseReject(e) {
    return Promise.reject(e);
  },
  PromiseResolve(e) {
    return Promise.resolve(e);
  },
  ReflectApply: Reflect.apply,
  RegExpPrototypeTest(e, t) {
    return e.test(t);
  },
  SafeSet: Set,
  String,
  StringPrototypeSlice(e, t, i) {
    return e.slice(t, i);
  },
  StringPrototypeToLowerCase(e) {
    return e.toLowerCase();
  },
  StringPrototypeToUpperCase(e) {
    return e.toUpperCase();
  },
  StringPrototypeTrim(e) {
    return e.trim();
  },
  Symbol,
  SymbolFor: Symbol.for,
  SymbolAsyncIterator: Symbol.asyncIterator,
  SymbolHasInstance: Symbol.hasInstance,
  SymbolIterator: Symbol.iterator,
  SymbolDispose: Symbol.dispose || Symbol("Symbol.dispose"),
  SymbolAsyncDispose: Symbol.asyncDispose || Symbol("Symbol.asyncDispose"),
  TypedArrayPrototypeSet(e, t, i) {
    return e.set(t, i);
  },
  Boolean,
  Uint8Array
}, jn = { exports: {} }, bt = { exports: {} }, Xr;
function gt() {
  if (Xr) return bt.exports;
  Xr = 1;
  const { AbortController: e, AbortSignal: t } = typeof self < "u" ? self : typeof window < "u" ? window : (
    /* otherwise */
    void 0
  );
  return bt.exports = e, bt.exports.AbortSignal = t, bt.exports.default = e, bt.exports;
}
(function(e) {
  const t = je, { kResistStopPropagation: i, SymbolDispose: l } = ue, c = globalThis.AbortSignal || gt().AbortSignal, d = globalThis.AbortController || gt().AbortController, p = Object.getPrototypeOf(async function() {
  }).constructor, u = globalThis.Blob || t.Blob, R = typeof u < "u" ? function(g) {
    return g instanceof u;
  } : function(g) {
    return !1;
  }, _ = (E, g) => {
    if (E !== void 0 && (E === null || typeof E != "object" || !("aborted" in E)))
      throw new ERR_INVALID_ARG_TYPE(g, "AbortSignal", E);
  }, m = (E, g) => {
    if (typeof E != "function") throw new ERR_INVALID_ARG_TYPE(g, "Function", E);
  };
  class B extends Error {
    constructor(g) {
      if (!Array.isArray(g))
        throw new TypeError(`Expected input to be an Array, got ${typeof g}`);
      let F = "";
      for (let A = 0; A < g.length; A++)
        F += `    ${g[A].stack}
`;
      super(F), this.name = "AggregateError", this.errors = g;
    }
  }
  e.exports = {
    AggregateError: B,
    kEmptyObject: Object.freeze({}),
    once(E) {
      let g = !1;
      return function(...F) {
        g || (g = !0, E.apply(this, F));
      };
    },
    createDeferredPromise: function() {
      let E, g;
      return {
        promise: new Promise((A, D) => {
          E = A, g = D;
        }),
        resolve: E,
        reject: g
      };
    },
    promisify(E) {
      return new Promise((g, F) => {
        E((A, ...D) => A ? F(A) : g(...D));
      });
    },
    debuglog() {
      return function() {
      };
    },
    format(E, ...g) {
      return E.replace(/%([sdifj])/g, function(...[F, A]) {
        const D = g.shift();
        return A === "f" ? D.toFixed(6) : A === "j" ? JSON.stringify(D) : A === "s" && typeof D == "object" ? `${D.constructor !== Object ? D.constructor.name : ""} {}`.trim() : D.toString();
      });
    },
    inspect(E) {
      switch (typeof E) {
        case "string":
          if (E.includes("'"))
            if (E.includes('"')) {
              if (!E.includes("`") && !E.includes("${"))
                return `\`${E}\``;
            } else return `"${E}"`;
          return `'${E}'`;
        case "number":
          return isNaN(E) ? "NaN" : Object.is(E, -0) ? String(E) : E;
        case "bigint":
          return `${String(E)}n`;
        case "boolean":
        case "undefined":
          return String(E);
        case "object":
          return "{}";
      }
    },
    types: {
      isAsyncFunction(E) {
        return E instanceof p;
      },
      isArrayBufferView(E) {
        return ArrayBuffer.isView(E);
      }
    },
    isBlob: R,
    deprecate(E, g) {
      return E;
    },
    addAbortListener: Ft.addAbortListener || function(g, F) {
      if (g === void 0)
        throw new ERR_INVALID_ARG_TYPE("signal", "AbortSignal", g);
      _(g, "signal"), m(F, "listener");
      let A;
      return g.aborted ? queueMicrotask(() => F()) : (g.addEventListener("abort", F, {
        __proto__: null,
        once: !0,
        [i]: !0
      }), A = () => {
        g.removeEventListener("abort", F);
      }), {
        __proto__: null,
        [l]() {
          var D;
          (D = A) === null || D === void 0 || D();
        }
      };
    },
    AbortSignalAny: c.any || function(g) {
      if (g.length === 1)
        return g[0];
      const F = new d(), A = () => F.abort();
      return g.forEach((D) => {
        _(D, "signals"), D.addEventListener("abort", A, {
          once: !0
        });
      }), F.signal.addEventListener(
        "abort",
        () => {
          g.forEach((D) => D.removeEventListener("abort", A));
        },
        {
          once: !0
        }
      ), F.signal;
    }
  }, e.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
})(jn);
var ge = jn.exports, Fr = {};
const { format: Ki, inspect: Bt, AggregateError: Xi } = ge, Ji = globalThis.AggregateError || Xi, Qi = Symbol("kIsNodeError"), Zi = [
  "string",
  "function",
  "number",
  "object",
  // Accept 'Function' and 'Object' as alternative to the lower cased version.
  "Function",
  "Object",
  "boolean",
  "bigint",
  "symbol"
], eo = /^([A-Z][a-z0-9]*)+$/, to = "__node_internal_", Lt = {};
function Ze(e, t) {
  if (!e)
    throw new Lt.ERR_INTERNAL_ASSERTION(t);
}
function Jr(e) {
  let t = "", i = e.length;
  const l = e[0] === "-" ? 1 : 0;
  for (; i >= l + 4; i -= 3)
    t = `_${e.slice(i - 3, i)}${t}`;
  return `${e.slice(0, i)}${t}`;
}
function ro(e, t, i) {
  if (typeof t == "function")
    return Ze(
      t.length <= i.length,
      // Default options do not count.
      `Code: ${e}; The provided arguments length (${i.length}) does not match the required ones (${t.length}).`
    ), t(...i);
  const l = (t.match(/%[dfijoOs]/g) || []).length;
  return Ze(
    l === i.length,
    `Code: ${e}; The provided arguments length (${i.length}) does not match the required ones (${l}).`
  ), i.length === 0 ? t : Ki(t, ...i);
}
function de(e, t, i) {
  i || (i = Error);
  class l extends i {
    constructor(...d) {
      super(ro(e, t, d));
    }
    toString() {
      return `${this.name} [${e}]: ${this.message}`;
    }
  }
  Object.defineProperties(l.prototype, {
    name: {
      value: i.name,
      writable: !0,
      enumerable: !1,
      configurable: !0
    },
    toString: {
      value() {
        return `${this.name} [${e}]: ${this.message}`;
      },
      writable: !0,
      enumerable: !1,
      configurable: !0
    }
  }), l.prototype.code = e, l.prototype[Qi] = !0, Lt[e] = l;
}
function Qr(e) {
  const t = to + e.name;
  return Object.defineProperty(e, "name", {
    value: t
  }), e;
}
function no(e, t) {
  if (e && t && e !== t) {
    if (Array.isArray(t.errors))
      return t.errors.push(e), t;
    const i = new Ji([t, e], t.message);
    return i.code = t.code, i;
  }
  return e || t;
}
let io = class extends Error {
  constructor(t = "The operation was aborted", i = void 0) {
    if (i !== void 0 && typeof i != "object")
      throw new Lt.ERR_INVALID_ARG_TYPE("options", "Object", i);
    super(t, i), this.code = "ABORT_ERR", this.name = "AbortError";
  }
};
de("ERR_ASSERTION", "%s", Error);
de(
  "ERR_INVALID_ARG_TYPE",
  (e, t, i) => {
    Ze(typeof e == "string", "'name' must be a string"), Array.isArray(t) || (t = [t]);
    let l = "The ";
    e.endsWith(" argument") ? l += `${e} ` : l += `"${e}" ${e.includes(".") ? "property" : "argument"} `, l += "must be ";
    const c = [], d = [], p = [];
    for (const R of t)
      Ze(typeof R == "string", "All expected entries have to be of type string"), Zi.includes(R) ? c.push(R.toLowerCase()) : eo.test(R) ? d.push(R) : (Ze(R !== "object", 'The value "object" should be written as "Object"'), p.push(R));
    if (d.length > 0) {
      const R = c.indexOf("object");
      R !== -1 && (c.splice(c, R, 1), d.push("Object"));
    }
    if (c.length > 0) {
      switch (c.length) {
        case 1:
          l += `of type ${c[0]}`;
          break;
        case 2:
          l += `one of type ${c[0]} or ${c[1]}`;
          break;
        default: {
          const R = c.pop();
          l += `one of type ${c.join(", ")}, or ${R}`;
        }
      }
      (d.length > 0 || p.length > 0) && (l += " or ");
    }
    if (d.length > 0) {
      switch (d.length) {
        case 1:
          l += `an instance of ${d[0]}`;
          break;
        case 2:
          l += `an instance of ${d[0]} or ${d[1]}`;
          break;
        default: {
          const R = d.pop();
          l += `an instance of ${d.join(", ")}, or ${R}`;
        }
      }
      p.length > 0 && (l += " or ");
    }
    switch (p.length) {
      case 0:
        break;
      case 1:
        p[0].toLowerCase() !== p[0] && (l += "an "), l += `${p[0]}`;
        break;
      case 2:
        l += `one of ${p[0]} or ${p[1]}`;
        break;
      default: {
        const R = p.pop();
        l += `one of ${p.join(", ")}, or ${R}`;
      }
    }
    if (i == null)
      l += `. Received ${i}`;
    else if (typeof i == "function" && i.name)
      l += `. Received function ${i.name}`;
    else if (typeof i == "object") {
      var u;
      if ((u = i.constructor) !== null && u !== void 0 && u.name)
        l += `. Received an instance of ${i.constructor.name}`;
      else {
        const R = Bt(i, {
          depth: -1
        });
        l += `. Received ${R}`;
      }
    } else {
      let R = Bt(i, {
        colors: !1
      });
      R.length > 25 && (R = `${R.slice(0, 25)}...`), l += `. Received type ${typeof i} (${R})`;
    }
    return l;
  },
  TypeError
);
de(
  "ERR_INVALID_ARG_VALUE",
  (e, t, i = "is invalid") => {
    let l = Bt(t);
    return l.length > 128 && (l = l.slice(0, 128) + "..."), `The ${e.includes(".") ? "property" : "argument"} '${e}' ${i}. Received ${l}`;
  },
  TypeError
);
de(
  "ERR_INVALID_RETURN_VALUE",
  (e, t, i) => {
    var l;
    const c = i != null && (l = i.constructor) !== null && l !== void 0 && l.name ? `instance of ${i.constructor.name}` : `type ${typeof i}`;
    return `Expected ${e} to be returned from the "${t}" function but got ${c}.`;
  },
  TypeError
);
de(
  "ERR_MISSING_ARGS",
  (...e) => {
    Ze(e.length > 0, "At least one arg needs to be specified");
    let t;
    const i = e.length;
    switch (e = (Array.isArray(e) ? e : [e]).map((l) => `"${l}"`).join(" or "), i) {
      case 1:
        t += `The ${e[0]} argument`;
        break;
      case 2:
        t += `The ${e[0]} and ${e[1]} arguments`;
        break;
      default:
        {
          const l = e.pop();
          t += `The ${e.join(", ")}, and ${l} arguments`;
        }
        break;
    }
    return `${t} must be specified`;
  },
  TypeError
);
de(
  "ERR_OUT_OF_RANGE",
  (e, t, i) => {
    Ze(t, 'Missing "range" argument');
    let l;
    return Number.isInteger(i) && Math.abs(i) > 2 ** 32 ? l = Jr(String(i)) : typeof i == "bigint" ? (l = String(i), (i > 2n ** 32n || i < -(2n ** 32n)) && (l = Jr(l)), l += "n") : l = Bt(i), `The value of "${e}" is out of range. It must be ${t}. Received ${l}`;
  },
  RangeError
);
de("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
de("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
de("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
de("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
de("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
de("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
de("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
de("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
de("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
de("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
de("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
var Ee = {
  AbortError: io,
  aggregateTwoErrors: Qr(no),
  hideStackFrames: Qr,
  codes: Lt
};
const {
  ArrayIsArray: Dr,
  ArrayPrototypeIncludes: Gn,
  ArrayPrototypeJoin: Vn,
  ArrayPrototypeMap: oo,
  NumberIsInteger: Lr,
  NumberIsNaN: lo,
  NumberMAX_SAFE_INTEGER: ao,
  NumberMIN_SAFE_INTEGER: fo,
  NumberParseInt: so,
  ObjectPrototypeHasOwnProperty: uo,
  RegExpPrototypeExec: Hn,
  String: co,
  StringPrototypeToUpperCase: ho,
  StringPrototypeTrim: po
} = ue, {
  hideStackFrames: Ie,
  codes: { ERR_SOCKET_BAD_PORT: bo, ERR_INVALID_ARG_TYPE: ye, ERR_INVALID_ARG_VALUE: ct, ERR_OUT_OF_RANGE: et, ERR_UNKNOWN_SIGNAL: Zr }
} = Ee, { normalizeEncoding: yo } = ge, { isAsyncFunction: wo, isArrayBufferView: go } = ge.types, en = {};
function _o(e) {
  return e === (e | 0);
}
function Eo(e) {
  return e === e >>> 0;
}
const So = /^[0-7]+$/, mo = "must be a 32-bit unsigned integer or an octal string";
function Ro(e, t, i) {
  if (typeof e > "u" && (e = i), typeof e == "string") {
    if (Hn(So, e) === null)
      throw new ct(t, e, mo);
    e = so(e, 8);
  }
  return qn(e, t), e;
}
const Ao = Ie((e, t, i = fo, l = ao) => {
  if (typeof e != "number") throw new ye(t, "number", e);
  if (!Lr(e)) throw new et(t, "an integer", e);
  if (e < i || e > l) throw new et(t, `>= ${i} && <= ${l}`, e);
}), xo = Ie((e, t, i = -2147483648, l = 2147483647) => {
  if (typeof e != "number")
    throw new ye(t, "number", e);
  if (!Lr(e))
    throw new et(t, "an integer", e);
  if (e < i || e > l)
    throw new et(t, `>= ${i} && <= ${l}`, e);
}), qn = Ie((e, t, i = !1) => {
  if (typeof e != "number")
    throw new ye(t, "number", e);
  if (!Lr(e))
    throw new et(t, "an integer", e);
  const l = i ? 1 : 0, c = 4294967295;
  if (e < l || e > c)
    throw new et(t, `>= ${l} && <= ${c}`, e);
});
function Mr(e, t) {
  if (typeof e != "string") throw new ye(t, "string", e);
}
function Io(e, t, i = void 0, l) {
  if (typeof e != "number") throw new ye(t, "number", e);
  if (i != null && e < i || l != null && e > l || (i != null || l != null) && lo(e))
    throw new et(
      t,
      `${i != null ? `>= ${i}` : ""}${i != null && l != null ? " && " : ""}${l != null ? `<= ${l}` : ""}`,
      e
    );
}
const To = Ie((e, t, i) => {
  if (!Gn(i, e)) {
    const c = "must be one of: " + Vn(
      oo(i, (d) => typeof d == "string" ? `'${d}'` : co(d)),
      ", "
    );
    throw new ct(t, e, c);
  }
});
function Yn(e, t) {
  if (typeof e != "boolean") throw new ye(t, "boolean", e);
}
function Qt(e, t, i) {
  return e == null || !uo(e, t) ? i : e[t];
}
const Bo = Ie((e, t, i = null) => {
  const l = Qt(i, "allowArray", !1), c = Qt(i, "allowFunction", !1);
  if (!Qt(i, "nullable", !1) && e === null || !l && Dr(e) || typeof e != "object" && (!c || typeof e != "function"))
    throw new ye(t, "Object", e);
}), No = Ie((e, t) => {
  if (e != null && typeof e != "object" && typeof e != "function")
    throw new ye(t, "a dictionary", e);
}), Mt = Ie((e, t, i = 0) => {
  if (!Dr(e))
    throw new ye(t, "Array", e);
  if (e.length < i) {
    const l = `must be longer than ${i}`;
    throw new ct(t, e, l);
  }
});
function $o(e, t) {
  Mt(e, t);
  for (let i = 0; i < e.length; i++)
    Mr(e[i], `${t}[${i}]`);
}
function Fo(e, t) {
  Mt(e, t);
  for (let i = 0; i < e.length; i++)
    Yn(e[i], `${t}[${i}]`);
}
function Do(e, t) {
  Mt(e, t);
  for (let i = 0; i < e.length; i++) {
    const l = e[i], c = `${t}[${i}]`;
    if (l == null)
      throw new ye(c, "AbortSignal", l);
    zn(l, c);
  }
}
function Lo(e, t = "signal") {
  if (Mr(e, t), en[e] === void 0)
    throw en[ho(e)] !== void 0 ? new Zr(e + " (signals must use all capital letters)") : new Zr(e);
}
const Mo = Ie((e, t = "buffer") => {
  if (!go(e))
    throw new ye(t, ["Buffer", "TypedArray", "DataView"], e);
});
function ko(e, t) {
  const i = yo(t), l = e.length;
  if (i === "hex" && l % 2 !== 0)
    throw new ct("encoding", t, `is invalid for data of length ${l}`);
}
function Co(e, t = "Port", i = !0) {
  if (typeof e != "number" && typeof e != "string" || typeof e == "string" && po(e).length === 0 || +e !== +e >>> 0 || e > 65535 || e === 0 && !i)
    throw new bo(t, e, i);
  return e | 0;
}
const zn = Ie((e, t) => {
  if (e !== void 0 && (e === null || typeof e != "object" || !("aborted" in e)))
    throw new ye(t, "AbortSignal", e);
}), Po = Ie((e, t) => {
  if (typeof e != "function") throw new ye(t, "Function", e);
}), Oo = Ie((e, t) => {
  if (typeof e != "function" || wo(e)) throw new ye(t, "Function", e);
}), Uo = Ie((e, t) => {
  if (e !== void 0) throw new ye(t, "undefined", e);
});
function Wo(e, t, i) {
  if (!Gn(i, e))
    throw new ye(t, `('${Vn(i, "|")}')`, e);
}
const vo = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
function tn(e, t) {
  if (typeof e > "u" || !Hn(vo, e))
    throw new ct(
      t,
      e,
      'must be an array or string of format "</styles.css>; rel=preload; as=style"'
    );
}
function jo(e) {
  if (typeof e == "string")
    return tn(e, "hints"), e;
  if (Dr(e)) {
    const t = e.length;
    let i = "";
    if (t === 0)
      return i;
    for (let l = 0; l < t; l++) {
      const c = e[l];
      tn(c, "hints"), i += c, l !== t - 1 && (i += ", ");
    }
    return i;
  }
  throw new ct(
    "hints",
    e,
    'must be an array or string of format "</styles.css>; rel=preload; as=style"'
  );
}
var _t = {
  isInt32: _o,
  isUint32: Eo,
  parseFileMode: Ro,
  validateArray: Mt,
  validateStringArray: $o,
  validateBooleanArray: Fo,
  validateAbortSignalArray: Do,
  validateBoolean: Yn,
  validateBuffer: Mo,
  validateDictionary: No,
  validateEncoding: ko,
  validateFunction: Po,
  validateInt32: xo,
  validateInteger: Ao,
  validateNumber: Io,
  validateObject: Bo,
  validateOneOf: To,
  validatePlainFunction: Oo,
  validatePort: Co,
  validateSignalName: Lo,
  validateString: Mr,
  validateUint32: qn,
  validateUndefined: Uo,
  validateUnion: Wo,
  validateAbortSignal: zn,
  validateLinkHeaderValue: jo
}, kr = { exports: {} }, Kn = { exports: {} }, ce = Kn.exports = {}, Be, Ne;
function yr() {
  throw new Error("setTimeout has not been defined");
}
function wr() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Be = setTimeout : Be = yr;
  } catch {
    Be = yr;
  }
  try {
    typeof clearTimeout == "function" ? Ne = clearTimeout : Ne = wr;
  } catch {
    Ne = wr;
  }
})();
function Xn(e) {
  if (Be === setTimeout)
    return setTimeout(e, 0);
  if ((Be === yr || !Be) && setTimeout)
    return Be = setTimeout, setTimeout(e, 0);
  try {
    return Be(e, 0);
  } catch {
    try {
      return Be.call(null, e, 0);
    } catch {
      return Be.call(this, e, 0);
    }
  }
}
function Go(e) {
  if (Ne === clearTimeout)
    return clearTimeout(e);
  if ((Ne === wr || !Ne) && clearTimeout)
    return Ne = clearTimeout, clearTimeout(e);
  try {
    return Ne(e);
  } catch {
    try {
      return Ne.call(null, e);
    } catch {
      return Ne.call(this, e);
    }
  }
}
var Ue = [], ft = !1, Qe, It = -1;
function Vo() {
  !ft || !Qe || (ft = !1, Qe.length ? Ue = Qe.concat(Ue) : It = -1, Ue.length && Jn());
}
function Jn() {
  if (!ft) {
    var e = Xn(Vo);
    ft = !0;
    for (var t = Ue.length; t; ) {
      for (Qe = Ue, Ue = []; ++It < t; )
        Qe && Qe[It].run();
      It = -1, t = Ue.length;
    }
    Qe = null, ft = !1, Go(e);
  }
}
ce.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var i = 1; i < arguments.length; i++)
      t[i - 1] = arguments[i];
  Ue.push(new Qn(e, t)), Ue.length === 1 && !ft && Xn(Jn);
};
function Qn(e, t) {
  this.fun = e, this.array = t;
}
Qn.prototype.run = function() {
  this.fun.apply(null, this.array);
};
ce.title = "browser";
ce.browser = !0;
ce.env = {};
ce.argv = [];
ce.version = "";
ce.versions = {};
function Ge() {
}
ce.on = Ge;
ce.addListener = Ge;
ce.once = Ge;
ce.off = Ge;
ce.removeListener = Ge;
ce.removeAllListeners = Ge;
ce.emit = Ge;
ce.prependListener = Ge;
ce.prependOnceListener = Ge;
ce.listeners = function(e) {
  return [];
};
ce.binding = function(e) {
  throw new Error("process.binding is not supported");
};
ce.cwd = function() {
  return "/";
};
ce.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
ce.umask = function() {
  return 0;
};
var tt = Kn.exports;
const { SymbolAsyncIterator: rn, SymbolIterator: nn, SymbolFor: rt } = ue, Zn = rt("nodejs.stream.destroyed"), ei = rt("nodejs.stream.errored"), gr = rt("nodejs.stream.readable"), _r = rt("nodejs.stream.writable"), ti = rt("nodejs.stream.disturbed"), Ho = rt("nodejs.webstream.isClosedPromise"), qo = rt("nodejs.webstream.controllerErrorFunction");
function kt(e, t = !1) {
  var i;
  return !!(e && typeof e.pipe == "function" && typeof e.on == "function" && (!t || typeof e.pause == "function" && typeof e.resume == "function") && (!e._writableState || ((i = e._readableState) === null || i === void 0 ? void 0 : i.readable) !== !1) && // Duplex
  (!e._writableState || e._readableState));
}
function Ct(e) {
  var t;
  return !!(e && typeof e.write == "function" && typeof e.on == "function" && (!e._readableState || ((t = e._writableState) === null || t === void 0 ? void 0 : t.writable) !== !1));
}
function Yo(e) {
  return !!(e && typeof e.pipe == "function" && e._readableState && typeof e.on == "function" && typeof e.write == "function");
}
function Le(e) {
  return e && (e._readableState || e._writableState || typeof e.write == "function" && typeof e.on == "function" || typeof e.pipe == "function" && typeof e.on == "function");
}
function ri(e) {
  return !!(e && !Le(e) && typeof e.pipeThrough == "function" && typeof e.getReader == "function" && typeof e.cancel == "function");
}
function ni(e) {
  return !!(e && !Le(e) && typeof e.getWriter == "function" && typeof e.abort == "function");
}
function ii(e) {
  return !!(e && !Le(e) && typeof e.readable == "object" && typeof e.writable == "object");
}
function zo(e) {
  return ri(e) || ni(e) || ii(e);
}
function Ko(e, t) {
  return e == null ? !1 : t === !0 ? typeof e[rn] == "function" : t === !1 ? typeof e[nn] == "function" : typeof e[rn] == "function" || typeof e[nn] == "function";
}
function Pt(e) {
  if (!Le(e)) return null;
  const t = e._writableState, i = e._readableState, l = t || i;
  return !!(e.destroyed || e[Zn] || l != null && l.destroyed);
}
function oi(e) {
  if (!Ct(e)) return null;
  if (e.writableEnded === !0) return !0;
  const t = e._writableState;
  return t != null && t.errored ? !1 : typeof (t == null ? void 0 : t.ended) != "boolean" ? null : t.ended;
}
function Xo(e, t) {
  if (!Ct(e)) return null;
  if (e.writableFinished === !0) return !0;
  const i = e._writableState;
  return i != null && i.errored ? !1 : typeof (i == null ? void 0 : i.finished) != "boolean" ? null : !!(i.finished || t === !1 && i.ended === !0 && i.length === 0);
}
function Jo(e) {
  if (!kt(e)) return null;
  if (e.readableEnded === !0) return !0;
  const t = e._readableState;
  return !t || t.errored ? !1 : typeof (t == null ? void 0 : t.ended) != "boolean" ? null : t.ended;
}
function li(e, t) {
  if (!kt(e)) return null;
  const i = e._readableState;
  return i != null && i.errored ? !1 : typeof (i == null ? void 0 : i.endEmitted) != "boolean" ? null : !!(i.endEmitted || t === !1 && i.ended === !0 && i.length === 0);
}
function ai(e) {
  return e && e[gr] != null ? e[gr] : typeof (e == null ? void 0 : e.readable) != "boolean" ? null : Pt(e) ? !1 : kt(e) && e.readable && !li(e);
}
function fi(e) {
  return e && e[_r] != null ? e[_r] : typeof (e == null ? void 0 : e.writable) != "boolean" ? null : Pt(e) ? !1 : Ct(e) && e.writable && !oi(e);
}
function Qo(e, t) {
  return Le(e) ? Pt(e) ? !0 : !((t == null ? void 0 : t.readable) !== !1 && ai(e) || (t == null ? void 0 : t.writable) !== !1 && fi(e)) : null;
}
function Zo(e) {
  var t, i;
  return Le(e) ? e.writableErrored ? e.writableErrored : (t = (i = e._writableState) === null || i === void 0 ? void 0 : i.errored) !== null && t !== void 0 ? t : null : null;
}
function el(e) {
  var t, i;
  return Le(e) ? e.readableErrored ? e.readableErrored : (t = (i = e._readableState) === null || i === void 0 ? void 0 : i.errored) !== null && t !== void 0 ? t : null : null;
}
function tl(e) {
  if (!Le(e))
    return null;
  if (typeof e.closed == "boolean")
    return e.closed;
  const t = e._writableState, i = e._readableState;
  return typeof (t == null ? void 0 : t.closed) == "boolean" || typeof (i == null ? void 0 : i.closed) == "boolean" ? (t == null ? void 0 : t.closed) || (i == null ? void 0 : i.closed) : typeof e._closed == "boolean" && si(e) ? e._closed : null;
}
function si(e) {
  return typeof e._closed == "boolean" && typeof e._defaultKeepAlive == "boolean" && typeof e._removedConnection == "boolean" && typeof e._removedContLen == "boolean";
}
function ui(e) {
  return typeof e._sent100 == "boolean" && si(e);
}
function rl(e) {
  var t;
  return typeof e._consuming == "boolean" && typeof e._dumped == "boolean" && ((t = e.req) === null || t === void 0 ? void 0 : t.upgradeOrConnect) === void 0;
}
function nl(e) {
  if (!Le(e)) return null;
  const t = e._writableState, i = e._readableState, l = t || i;
  return !l && ui(e) || !!(l && l.autoDestroy && l.emitClose && l.closed === !1);
}
function il(e) {
  var t;
  return !!(e && ((t = e[ti]) !== null && t !== void 0 ? t : e.readableDidRead || e.readableAborted));
}
function ol(e) {
  var t, i, l, c, d, p, u, R, _, m;
  return !!(e && ((t = (i = (l = (c = (d = (p = e[ei]) !== null && p !== void 0 ? p : e.readableErrored) !== null && d !== void 0 ? d : e.writableErrored) !== null && c !== void 0 ? c : (u = e._readableState) === null || u === void 0 ? void 0 : u.errorEmitted) !== null && l !== void 0 ? l : (R = e._writableState) === null || R === void 0 ? void 0 : R.errorEmitted) !== null && i !== void 0 ? i : (_ = e._readableState) === null || _ === void 0 ? void 0 : _.errored) !== null && t !== void 0 ? t : !((m = e._writableState) === null || m === void 0) && m.errored));
}
var Ve = {
  isDestroyed: Pt,
  kIsDestroyed: Zn,
  isDisturbed: il,
  kIsDisturbed: ti,
  isErrored: ol,
  kIsErrored: ei,
  isReadable: ai,
  kIsReadable: gr,
  kIsClosedPromise: Ho,
  kControllerErrorFunction: qo,
  kIsWritable: _r,
  isClosed: tl,
  isDuplexNodeStream: Yo,
  isFinished: Qo,
  isIterable: Ko,
  isReadableNodeStream: kt,
  isReadableStream: ri,
  isReadableEnded: Jo,
  isReadableFinished: li,
  isReadableErrored: el,
  isNodeStream: Le,
  isWebStream: zo,
  isWritable: fi,
  isWritableNodeStream: Ct,
  isWritableStream: ni,
  isWritableEnded: oi,
  isWritableFinished: Xo,
  isWritableErrored: Zo,
  isServerRequest: rl,
  isServerResponse: ui,
  willEmitClose: nl,
  isTransformStream: ii
};
const He = tt, { AbortError: ci, codes: ll } = Ee, { ERR_INVALID_ARG_TYPE: al, ERR_STREAM_PREMATURE_CLOSE: on } = ll, { kEmptyObject: Er, once: Sr } = ge, { validateAbortSignal: fl, validateFunction: sl, validateObject: ul, validateBoolean: cl } = _t, { Promise: dl, PromisePrototypeThen: hl, SymbolDispose: di } = ue, {
  isClosed: pl,
  isReadable: ln,
  isReadableNodeStream: Zt,
  isReadableStream: bl,
  isReadableFinished: an,
  isReadableErrored: fn,
  isWritable: sn,
  isWritableNodeStream: un,
  isWritableStream: yl,
  isWritableFinished: cn,
  isWritableErrored: dn,
  isNodeStream: wl,
  willEmitClose: gl,
  kIsClosedPromise: _l
} = Ve;
let st;
function El(e) {
  return e.setHeader && typeof e.abort == "function";
}
const mr = () => {
};
function hi(e, t, i) {
  var l, c;
  if (arguments.length === 2 ? (i = t, t = Er) : t == null ? t = Er : ul(t, "options"), sl(i, "callback"), fl(t.signal, "options.signal"), i = Sr(i), bl(e) || yl(e))
    return Sl(e, t, i);
  if (!wl(e))
    throw new al("stream", ["ReadableStream", "WritableStream", "Stream"], e);
  const d = (l = t.readable) !== null && l !== void 0 ? l : Zt(e), p = (c = t.writable) !== null && c !== void 0 ? c : un(e), u = e._writableState, R = e._readableState, _ = () => {
    e.writable || E();
  };
  let m = gl(e) && Zt(e) === d && un(e) === p, B = cn(e, !1);
  const E = () => {
    B = !0, e.destroyed && (m = !1), !(m && (!e.readable || d)) && (!d || g) && i.call(e);
  };
  let g = an(e, !1);
  const F = () => {
    g = !0, e.destroyed && (m = !1), !(m && (!e.writable || p)) && (!p || B) && i.call(e);
  }, A = (v) => {
    i.call(e, v);
  };
  let D = pl(e);
  const O = () => {
    D = !0;
    const v = dn(e) || fn(e);
    if (v && typeof v != "boolean")
      return i.call(e, v);
    if (d && !g && Zt(e, !0) && !an(e, !1))
      return i.call(e, new on());
    if (p && !B && !cn(e, !1))
      return i.call(e, new on());
    i.call(e);
  }, U = () => {
    D = !0;
    const v = dn(e) || fn(e);
    if (v && typeof v != "boolean")
      return i.call(e, v);
    i.call(e);
  }, I = () => {
    e.req.on("finish", E);
  };
  El(e) ? (e.on("complete", E), m || e.on("abort", O), e.req ? I() : e.on("request", I)) : p && !u && (e.on("end", _), e.on("close", _)), !m && typeof e.aborted == "boolean" && e.on("aborted", O), e.on("end", F), e.on("finish", E), t.error !== !1 && e.on("error", A), e.on("close", O), D ? He.nextTick(O) : u != null && u.errorEmitted || R != null && R.errorEmitted ? m || He.nextTick(U) : (!d && (!m || ln(e)) && (B || sn(e) === !1) || !p && (!m || sn(e)) && (g || ln(e) === !1) || R && e.req && e.aborted) && He.nextTick(U);
  const K = () => {
    i = mr, e.removeListener("aborted", O), e.removeListener("complete", E), e.removeListener("abort", O), e.removeListener("request", I), e.req && e.req.removeListener("finish", E), e.removeListener("end", _), e.removeListener("close", _), e.removeListener("finish", E), e.removeListener("end", F), e.removeListener("error", A), e.removeListener("close", O);
  };
  if (t.signal && !D) {
    const v = () => {
      const ie = i;
      K(), ie.call(
        e,
        new ci(void 0, {
          cause: t.signal.reason
        })
      );
    };
    if (t.signal.aborted)
      He.nextTick(v);
    else {
      st = st || ge.addAbortListener;
      const ie = st(t.signal, v), we = i;
      i = Sr((...Q) => {
        ie[di](), we.apply(e, Q);
      });
    }
  }
  return K;
}
function Sl(e, t, i) {
  let l = !1, c = mr;
  if (t.signal)
    if (c = () => {
      l = !0, i.call(
        e,
        new ci(void 0, {
          cause: t.signal.reason
        })
      );
    }, t.signal.aborted)
      He.nextTick(c);
    else {
      st = st || ge.addAbortListener;
      const p = st(t.signal, c), u = i;
      i = Sr((...R) => {
        p[di](), u.apply(e, R);
      });
    }
  const d = (...p) => {
    l || He.nextTick(() => i.apply(e, p));
  };
  return hl(e[_l].promise, d, d), mr;
}
function ml(e, t) {
  var i;
  let l = !1;
  return t === null && (t = Er), (i = t) !== null && i !== void 0 && i.cleanup && (cl(t.cleanup, "cleanup"), l = t.cleanup), new dl((c, d) => {
    const p = hi(e, t, (u) => {
      l && p(), u ? d(u) : c();
    });
  });
}
kr.exports = hi;
kr.exports.finished = ml;
var qe = kr.exports;
const Fe = tt, {
  aggregateTwoErrors: Rl,
  codes: { ERR_MULTIPLE_CALLBACK: Al },
  AbortError: xl
} = Ee, { Symbol: pi } = ue, { kIsDestroyed: Il, isDestroyed: Tl, isFinished: Bl, isServerRequest: Nl } = Ve, bi = pi("kDestroy"), Rr = pi("kConstruct");
function yi(e, t, i) {
  e && (e.stack, t && !t.errored && (t.errored = e), i && !i.errored && (i.errored = e));
}
function $l(e, t) {
  const i = this._readableState, l = this._writableState, c = l || i;
  return l != null && l.destroyed || i != null && i.destroyed ? (typeof t == "function" && t(), this) : (yi(e, l, i), l && (l.destroyed = !0), i && (i.destroyed = !0), c.constructed ? hn(this, e, t) : this.once(bi, function(d) {
    hn(this, Rl(d, e), t);
  }), this);
}
function hn(e, t, i) {
  let l = !1;
  function c(d) {
    if (l)
      return;
    l = !0;
    const p = e._readableState, u = e._writableState;
    yi(d, u, p), u && (u.closed = !0), p && (p.closed = !0), typeof i == "function" && i(d), d ? Fe.nextTick(Fl, e, d) : Fe.nextTick(wi, e);
  }
  try {
    e._destroy(t || null, c);
  } catch (d) {
    c(d);
  }
}
function Fl(e, t) {
  Ar(e, t), wi(e);
}
function wi(e) {
  const t = e._readableState, i = e._writableState;
  i && (i.closeEmitted = !0), t && (t.closeEmitted = !0), (i != null && i.emitClose || t != null && t.emitClose) && e.emit("close");
}
function Ar(e, t) {
  const i = e._readableState, l = e._writableState;
  l != null && l.errorEmitted || i != null && i.errorEmitted || (l && (l.errorEmitted = !0), i && (i.errorEmitted = !0), e.emit("error", t));
}
function Dl() {
  const e = this._readableState, t = this._writableState;
  e && (e.constructed = !0, e.closed = !1, e.closeEmitted = !1, e.destroyed = !1, e.errored = null, e.errorEmitted = !1, e.reading = !1, e.ended = e.readable === !1, e.endEmitted = e.readable === !1), t && (t.constructed = !0, t.destroyed = !1, t.closed = !1, t.closeEmitted = !1, t.errored = null, t.errorEmitted = !1, t.finalCalled = !1, t.prefinished = !1, t.ended = t.writable === !1, t.ending = t.writable === !1, t.finished = t.writable === !1);
}
function xr(e, t, i) {
  const l = e._readableState, c = e._writableState;
  if (c != null && c.destroyed || l != null && l.destroyed)
    return this;
  l != null && l.autoDestroy || c != null && c.autoDestroy ? e.destroy(t) : t && (t.stack, c && !c.errored && (c.errored = t), l && !l.errored && (l.errored = t), i ? Fe.nextTick(Ar, e, t) : Ar(e, t));
}
function Ll(e, t) {
  if (typeof e._construct != "function")
    return;
  const i = e._readableState, l = e._writableState;
  i && (i.constructed = !1), l && (l.constructed = !1), e.once(Rr, t), !(e.listenerCount(Rr) > 1) && Fe.nextTick(Ml, e);
}
function Ml(e) {
  let t = !1;
  function i(l) {
    if (t) {
      xr(e, l ?? new Al());
      return;
    }
    t = !0;
    const c = e._readableState, d = e._writableState, p = d || c;
    c && (c.constructed = !0), d && (d.constructed = !0), p.destroyed ? e.emit(bi, l) : l ? xr(e, l, !0) : Fe.nextTick(kl, e);
  }
  try {
    e._construct((l) => {
      Fe.nextTick(i, l);
    });
  } catch (l) {
    Fe.nextTick(i, l);
  }
}
function kl(e) {
  e.emit(Rr);
}
function pn(e) {
  return (e == null ? void 0 : e.setHeader) && typeof e.abort == "function";
}
function gi(e) {
  e.emit("close");
}
function Cl(e, t) {
  e.emit("error", t), Fe.nextTick(gi, e);
}
function Pl(e, t) {
  !e || Tl(e) || (!t && !Bl(e) && (t = new xl()), Nl(e) ? (e.socket = null, e.destroy(t)) : pn(e) ? e.abort() : pn(e.req) ? e.req.abort() : typeof e.destroy == "function" ? e.destroy(t) : typeof e.close == "function" ? e.close() : t ? Fe.nextTick(Cl, e, t) : Fe.nextTick(gi, e), e.destroyed || (e[Il] = !0));
}
var dt = {
  construct: Ll,
  destroyer: Pl,
  destroy: $l,
  undestroy: Dl,
  errorOrDestroy: xr
};
const { ArrayIsArray: Ol, ObjectSetPrototypeOf: _i } = ue, { EventEmitter: Ot } = Ft;
function Ut(e) {
  Ot.call(this, e);
}
_i(Ut.prototype, Ot.prototype);
_i(Ut, Ot);
Ut.prototype.pipe = function(e, t) {
  const i = this;
  function l(m) {
    e.writable && e.write(m) === !1 && i.pause && i.pause();
  }
  i.on("data", l);
  function c() {
    i.readable && i.resume && i.resume();
  }
  e.on("drain", c), !e._isStdio && (!t || t.end !== !1) && (i.on("end", p), i.on("close", u));
  let d = !1;
  function p() {
    d || (d = !0, e.end());
  }
  function u() {
    d || (d = !0, typeof e.destroy == "function" && e.destroy());
  }
  function R(m) {
    _(), Ot.listenerCount(this, "error") === 0 && this.emit("error", m);
  }
  Ir(i, "error", R), Ir(e, "error", R);
  function _() {
    i.removeListener("data", l), e.removeListener("drain", c), i.removeListener("end", p), i.removeListener("close", u), i.removeListener("error", R), e.removeListener("error", R), i.removeListener("end", _), i.removeListener("close", _), e.removeListener("close", _);
  }
  return i.on("end", _), i.on("close", _), e.on("close", _), e.emit("pipe", i), e;
};
function Ir(e, t, i) {
  if (typeof e.prependListener == "function") return e.prependListener(t, i);
  !e._events || !e._events[t] ? e.on(t, i) : Ol(e._events[t]) ? e._events[t].unshift(i) : e._events[t] = [i, e._events[t]];
}
var Cr = {
  Stream: Ut,
  prependListener: Ir
}, Ei = { exports: {} };
(function(e) {
  const { SymbolDispose: t } = ue, { AbortError: i, codes: l } = Ee, { isNodeStream: c, isWebStream: d, kControllerErrorFunction: p } = Ve, u = qe, { ERR_INVALID_ARG_TYPE: R } = l;
  let _;
  const m = (B, E) => {
    if (typeof B != "object" || !("aborted" in B))
      throw new R(E, "AbortSignal", B);
  };
  e.exports.addAbortSignal = function(E, g) {
    if (m(E, "signal"), !c(g) && !d(g))
      throw new R("stream", ["ReadableStream", "WritableStream", "Stream"], g);
    return e.exports.addAbortSignalNoValidate(E, g);
  }, e.exports.addAbortSignalNoValidate = function(B, E) {
    if (typeof B != "object" || !("aborted" in B))
      return E;
    const g = c(E) ? () => {
      E.destroy(
        new i(void 0, {
          cause: B.reason
        })
      );
    } : () => {
      E[p](
        new i(void 0, {
          cause: B.reason
        })
      );
    };
    if (B.aborted)
      g();
    else {
      _ = _ || ge.addAbortListener;
      const F = _(B, g);
      u(E, F[t]);
    }
    return E;
  };
})(Ei);
var Wt = Ei.exports;
const { StringPrototypeSlice: bn, SymbolIterator: Ul, TypedArrayPrototypeSet: mt, Uint8Array: Wl } = ue, { Buffer: er } = je, { inspect: vl } = ge;
var jl = class {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  push(t) {
    const i = {
      data: t,
      next: null
    };
    this.length > 0 ? this.tail.next = i : this.head = i, this.tail = i, ++this.length;
  }
  unshift(t) {
    const i = {
      data: t,
      next: this.head
    };
    this.length === 0 && (this.tail = i), this.head = i, ++this.length;
  }
  shift() {
    if (this.length === 0) return;
    const t = this.head.data;
    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
  }
  clear() {
    this.head = this.tail = null, this.length = 0;
  }
  join(t) {
    if (this.length === 0) return "";
    let i = this.head, l = "" + i.data;
    for (; (i = i.next) !== null; ) l += t + i.data;
    return l;
  }
  concat(t) {
    if (this.length === 0) return er.alloc(0);
    const i = er.allocUnsafe(t >>> 0);
    let l = this.head, c = 0;
    for (; l; )
      mt(i, l.data, c), c += l.data.length, l = l.next;
    return i;
  }
  // Consumes a specified amount of bytes or characters from the buffered data.
  consume(t, i) {
    const l = this.head.data;
    if (t < l.length) {
      const c = l.slice(0, t);
      return this.head.data = l.slice(t), c;
    }
    return t === l.length ? this.shift() : i ? this._getString(t) : this._getBuffer(t);
  }
  first() {
    return this.head.data;
  }
  *[Ul]() {
    for (let t = this.head; t; t = t.next)
      yield t.data;
  }
  // Consumes a specified amount of characters from the buffered data.
  _getString(t) {
    let i = "", l = this.head, c = 0;
    do {
      const d = l.data;
      if (t > d.length)
        i += d, t -= d.length;
      else {
        t === d.length ? (i += d, ++c, l.next ? this.head = l.next : this.head = this.tail = null) : (i += bn(d, 0, t), this.head = l, l.data = bn(d, t));
        break;
      }
      ++c;
    } while ((l = l.next) !== null);
    return this.length -= c, i;
  }
  // Consumes a specified amount of bytes from the buffered data.
  _getBuffer(t) {
    const i = er.allocUnsafe(t), l = t;
    let c = this.head, d = 0;
    do {
      const p = c.data;
      if (t > p.length)
        mt(i, p, l - t), t -= p.length;
      else {
        t === p.length ? (mt(i, p, l - t), ++d, c.next ? this.head = c.next : this.head = this.tail = null) : (mt(i, new Wl(p.buffer, p.byteOffset, t), l - t), this.head = c, c.data = p.slice(t));
        break;
      }
      ++d;
    } while ((c = c.next) !== null);
    return this.length -= d, i;
  }
  // Make sure the linked list only shows the minimal necessary information.
  [Symbol.for("nodejs.util.inspect.custom")](t, i) {
    return vl(this, {
      ...i,
      // Only inspect one level.
      depth: 0,
      // It should not recurse.
      customInspect: !1
    });
  }
};
const { MathFloor: Gl, NumberIsInteger: Vl } = ue, { validateInteger: Hl } = _t, { ERR_INVALID_ARG_VALUE: ql } = Ee.codes;
let Si = 16 * 1024, mi = 16;
function Yl(e, t, i) {
  return e.highWaterMark != null ? e.highWaterMark : t ? e[i] : null;
}
function Ri(e) {
  return e ? mi : Si;
}
function zl(e, t) {
  Hl(t, "value", 0), e ? mi = t : Si = t;
}
function Kl(e, t, i, l) {
  const c = Yl(t, l, i);
  if (c != null) {
    if (!Vl(c) || c < 0) {
      const d = l ? `options.${i}` : "options.highWaterMark";
      throw new ql(d, c);
    }
    return Gl(c);
  }
  return Ri(e.objectMode);
}
var vt = {
  getHighWaterMark: Kl,
  getDefaultHighWaterMark: Ri,
  setDefaultHighWaterMark: zl
}, Ai = {}, Tr = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(e, t) {
  var i = je, l = i.Buffer;
  function c(p, u) {
    for (var R in p)
      u[R] = p[R];
  }
  l.from && l.alloc && l.allocUnsafe && l.allocUnsafeSlow ? e.exports = i : (c(i, t), t.Buffer = d);
  function d(p, u, R) {
    return l(p, u, R);
  }
  d.prototype = Object.create(l.prototype), c(l, d), d.from = function(p, u, R) {
    if (typeof p == "number")
      throw new TypeError("Argument must not be a number");
    return l(p, u, R);
  }, d.alloc = function(p, u, R) {
    if (typeof p != "number")
      throw new TypeError("Argument must be a number");
    var _ = l(p);
    return u !== void 0 ? typeof R == "string" ? _.fill(u, R) : _.fill(u) : _.fill(0), _;
  }, d.allocUnsafe = function(p) {
    if (typeof p != "number")
      throw new TypeError("Argument must be a number");
    return l(p);
  }, d.allocUnsafeSlow = function(p) {
    if (typeof p != "number")
      throw new TypeError("Argument must be a number");
    return i.SlowBuffer(p);
  };
})(Tr, Tr.exports);
var Xl = Tr.exports, Pr = Xl.Buffer, yn = Pr.isEncoding || function(e) {
  switch (e = "" + e, e && e.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return !0;
    default:
      return !1;
  }
};
function Jl(e) {
  if (!e) return "utf8";
  for (var t; ; )
    switch (e) {
      case "utf8":
      case "utf-8":
        return "utf8";
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return "utf16le";
      case "latin1":
      case "binary":
        return "latin1";
      case "base64":
      case "ascii":
      case "hex":
        return e;
      default:
        if (t) return;
        e = ("" + e).toLowerCase(), t = !0;
    }
}
function Ql(e) {
  var t = Jl(e);
  if (typeof t != "string" && (Pr.isEncoding === yn || !yn(e))) throw new Error("Unknown encoding: " + e);
  return t || e;
}
Ai.StringDecoder = Et;
function Et(e) {
  this.encoding = Ql(e);
  var t;
  switch (this.encoding) {
    case "utf16le":
      this.text = ia, this.end = oa, t = 4;
      break;
    case "utf8":
      this.fillLast = ta, t = 4;
      break;
    case "base64":
      this.text = la, this.end = aa, t = 3;
      break;
    default:
      this.write = fa, this.end = sa;
      return;
  }
  this.lastNeed = 0, this.lastTotal = 0, this.lastChar = Pr.allocUnsafe(t);
}
Et.prototype.write = function(e) {
  if (e.length === 0) return "";
  var t, i;
  if (this.lastNeed) {
    if (t = this.fillLast(e), t === void 0) return "";
    i = this.lastNeed, this.lastNeed = 0;
  } else
    i = 0;
  return i < e.length ? t ? t + this.text(e, i) : this.text(e, i) : t || "";
};
Et.prototype.end = na;
Et.prototype.text = ra;
Et.prototype.fillLast = function(e) {
  if (this.lastNeed <= e.length)
    return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
};
function tr(e) {
  return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2;
}
function Zl(e, t, i) {
  var l = t.length - 1;
  if (l < i) return 0;
  var c = tr(t[l]);
  return c >= 0 ? (c > 0 && (e.lastNeed = c - 1), c) : --l < i || c === -2 ? 0 : (c = tr(t[l]), c >= 0 ? (c > 0 && (e.lastNeed = c - 2), c) : --l < i || c === -2 ? 0 : (c = tr(t[l]), c >= 0 ? (c > 0 && (c === 2 ? c = 0 : e.lastNeed = c - 3), c) : 0));
}
function ea(e, t, i) {
  if ((t[0] & 192) !== 128)
    return e.lastNeed = 0, "�";
  if (e.lastNeed > 1 && t.length > 1) {
    if ((t[1] & 192) !== 128)
      return e.lastNeed = 1, "�";
    if (e.lastNeed > 2 && t.length > 2 && (t[2] & 192) !== 128)
      return e.lastNeed = 2, "�";
  }
}
function ta(e) {
  var t = this.lastTotal - this.lastNeed, i = ea(this, e);
  if (i !== void 0) return i;
  if (this.lastNeed <= e.length)
    return e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length;
}
function ra(e, t) {
  var i = Zl(this, e, t);
  if (!this.lastNeed) return e.toString("utf8", t);
  this.lastTotal = i;
  var l = e.length - (i - this.lastNeed);
  return e.copy(this.lastChar, 0, l), e.toString("utf8", t, l);
}
function na(e) {
  var t = e && e.length ? this.write(e) : "";
  return this.lastNeed ? t + "�" : t;
}
function ia(e, t) {
  if ((e.length - t) % 2 === 0) {
    var i = e.toString("utf16le", t);
    if (i) {
      var l = i.charCodeAt(i.length - 1);
      if (l >= 55296 && l <= 56319)
        return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], i.slice(0, -1);
    }
    return i;
  }
  return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1);
}
function oa(e) {
  var t = e && e.length ? this.write(e) : "";
  if (this.lastNeed) {
    var i = this.lastTotal - this.lastNeed;
    return t + this.lastChar.toString("utf16le", 0, i);
  }
  return t;
}
function la(e, t) {
  var i = (e.length - t) % 3;
  return i === 0 ? e.toString("base64", t) : (this.lastNeed = 3 - i, this.lastTotal = 3, i === 1 ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - i));
}
function aa(e) {
  var t = e && e.length ? this.write(e) : "";
  return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t;
}
function fa(e) {
  return e.toString(this.encoding);
}
function sa(e) {
  return e && e.length ? this.write(e) : "";
}
const wn = tt, { PromisePrototypeThen: ua, SymbolAsyncIterator: gn, SymbolIterator: _n } = ue, { Buffer: ca } = je, { ERR_INVALID_ARG_TYPE: da, ERR_STREAM_NULL_VALUES: ha } = Ee.codes;
function pa(e, t, i) {
  let l;
  if (typeof t == "string" || t instanceof ca)
    return new e({
      objectMode: !0,
      ...i,
      read() {
        this.push(t), this.push(null);
      }
    });
  let c;
  if (t && t[gn])
    c = !0, l = t[gn]();
  else if (t && t[_n])
    c = !1, l = t[_n]();
  else
    throw new da("iterable", ["Iterable"], t);
  const d = new e({
    objectMode: !0,
    highWaterMark: 1,
    // TODO(ronag): What options should be allowed?
    ...i
  });
  let p = !1;
  d._read = function() {
    p || (p = !0, R());
  }, d._destroy = function(_, m) {
    ua(
      u(_),
      () => wn.nextTick(m, _),
      // nextTick is here in case cb throws
      (B) => wn.nextTick(m, B || _)
    );
  };
  async function u(_) {
    const m = _ != null, B = typeof l.throw == "function";
    if (m && B) {
      const { value: E, done: g } = await l.throw(_);
      if (await E, g)
        return;
    }
    if (typeof l.return == "function") {
      const { value: E } = await l.return();
      await E;
    }
  }
  async function R() {
    for (; ; ) {
      try {
        const { value: _, done: m } = c ? await l.next() : l.next();
        if (m)
          d.push(null);
        else {
          const B = _ && typeof _.then == "function" ? await _ : _;
          if (B === null)
            throw p = !1, new ha();
          if (d.push(B))
            continue;
          p = !1;
        }
      } catch (_) {
        d.destroy(_);
      }
      break;
    }
  }
  return d;
}
var xi = pa, rr, En;
function jt() {
  if (En) return rr;
  En = 1;
  const e = tt, {
    ArrayPrototypeIndexOf: t,
    NumberIsInteger: i,
    NumberIsNaN: l,
    NumberParseInt: c,
    ObjectDefineProperties: d,
    ObjectKeys: p,
    ObjectSetPrototypeOf: u,
    Promise: R,
    SafeSet: _,
    SymbolAsyncDispose: m,
    SymbolAsyncIterator: B,
    Symbol: E
  } = ue;
  rr = C, C.ReadableState = _e;
  const { EventEmitter: g } = Ft, { Stream: F, prependListener: A } = Cr, { Buffer: D } = je, { addAbortSignal: O } = Wt, U = qe;
  let I = ge.debuglog("stream", (a) => {
    I = a;
  });
  const K = jl, v = dt, { getHighWaterMark: ie, getDefaultHighWaterMark: we } = vt, {
    aggregateTwoErrors: Q,
    codes: {
      ERR_INVALID_ARG_TYPE: oe,
      ERR_METHOD_NOT_IMPLEMENTED: he,
      ERR_OUT_OF_RANGE: pe,
      ERR_STREAM_PUSH_AFTER_EOF: H,
      ERR_STREAM_UNSHIFT_AFTER_END_EVENT: T
    },
    AbortError: Y
  } = Ee, { validateObject: G } = _t, V = E("kPaused"), { StringDecoder: le } = Ai, ae = xi;
  u(C.prototype, F.prototype), u(C, F);
  const ee = () => {
  }, { errorOrDestroy: fe } = v, W = 1, te = 2, P = 4, se = 8, Se = 16, Me = 32, ke = 64, me = 128, Ce = 256, ot = 512, Ye = 1024, Pe = 2048, b = 4096, y = 8192, x = 16384, k = 32768, L = 65536, X = 1 << 17, Z = 1 << 18;
  function z(a) {
    return {
      enumerable: !1,
      get() {
        return (this.state & a) !== 0;
      },
      set(s) {
        s ? this.state |= a : this.state &= ~a;
      }
    };
  }
  d(_e.prototype, {
    objectMode: z(W),
    ended: z(te),
    endEmitted: z(P),
    reading: z(se),
    // Stream is still being constructed and cannot be
    // destroyed until construction finished or failed.
    // Async construction is opt in, therefore we start as
    // constructed.
    constructed: z(Se),
    // A flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    sync: z(Me),
    // Whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    needReadable: z(ke),
    emittedReadable: z(me),
    readableListening: z(Ce),
    resumeScheduled: z(ot),
    // True if the error was already emitted and should not be thrown again.
    errorEmitted: z(Ye),
    emitClose: z(Pe),
    autoDestroy: z(b),
    // Has it been destroyed.
    destroyed: z(y),
    // Indicates whether the stream has finished destroying.
    closed: z(x),
    // True if close has been emitted or would have been emitted
    // depending on emitClose.
    closeEmitted: z(k),
    multiAwaitDrain: z(L),
    // If true, a maybeReadMore has been scheduled.
    readingMore: z(X),
    dataEmitted: z(Z)
  });
  function _e(a, s, N) {
    typeof N != "boolean" && (N = s instanceof We()), this.state = Pe | b | Se | Me, a && a.objectMode && (this.state |= W), N && a && a.readableObjectMode && (this.state |= W), this.highWaterMark = a ? ie(this, a, "readableHighWaterMark", N) : we(!1), this.buffer = new K(), this.length = 0, this.pipes = [], this.flowing = null, this[V] = null, a && a.emitClose === !1 && (this.state &= ~Pe), a && a.autoDestroy === !1 && (this.state &= ~b), this.errored = null, this.defaultEncoding = a && a.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.decoder = null, this.encoding = null, a && a.encoding && (this.decoder = new le(a.encoding), this.encoding = a.encoding);
  }
  function C(a) {
    if (!(this instanceof C)) return new C(a);
    const s = this instanceof We();
    this._readableState = new _e(a, this, s), a && (typeof a.read == "function" && (this._read = a.read), typeof a.destroy == "function" && (this._destroy = a.destroy), typeof a.construct == "function" && (this._construct = a.construct), a.signal && !s && O(a.signal, this)), F.call(this, a), v.construct(this, () => {
      this._readableState.needReadable && h(this, this._readableState);
    });
  }
  C.prototype.destroy = v.destroy, C.prototype._undestroy = v.undestroy, C.prototype._destroy = function(a, s) {
    s(a);
  }, C.prototype[g.captureRejectionSymbol] = function(a) {
    this.destroy(a);
  }, C.prototype[m] = function() {
    let a;
    return this.destroyed || (a = this.readableEnded ? null : new Y(), this.destroy(a)), new R((s, N) => U(this, ($) => $ && $ !== a ? N($) : s(null)));
  }, C.prototype.push = function(a, s) {
    return Re(this, a, s, !1);
  }, C.prototype.unshift = function(a, s) {
    return Re(this, a, s, !0);
  };
  function Re(a, s, N, $) {
    I("readableAddChunk", s);
    const M = a._readableState;
    let be;
    if (M.state & W || (typeof s == "string" ? (N = N || M.defaultEncoding, M.encoding !== N && ($ && M.encoding ? s = D.from(s, N).toString(M.encoding) : (s = D.from(s, N), N = ""))) : s instanceof D ? N = "" : F._isUint8Array(s) ? (s = F._uint8ArrayToBuffer(s), N = "") : s != null && (be = new oe("chunk", ["string", "Buffer", "Uint8Array"], s))), be)
      fe(a, be);
    else if (s === null)
      M.state &= ~se, r(a, M);
    else if (M.state & W || s && s.length > 0)
      if ($)
        if (M.state & P) fe(a, new T());
        else {
          if (M.destroyed || M.errored) return !1;
          ht(a, M, s, !0);
        }
      else if (M.ended)
        fe(a, new H());
      else {
        if (M.destroyed || M.errored)
          return !1;
        M.state &= ~se, M.decoder && !N ? (s = M.decoder.write(s), M.objectMode || s.length !== 0 ? ht(a, M, s, !1) : h(a, M)) : ht(a, M, s, !1);
      }
    else $ || (M.state &= ~se, h(a, M));
    return !M.ended && (M.length < M.highWaterMark || M.length === 0);
  }
  function ht(a, s, N, $) {
    s.flowing && s.length === 0 && !s.sync && a.listenerCount("data") > 0 ? (s.state & L ? s.awaitDrainWriters.clear() : s.awaitDrainWriters = null, s.dataEmitted = !0, a.emit("data", N)) : (s.length += s.objectMode ? 1 : N.length, $ ? s.buffer.unshift(N) : s.buffer.push(N), s.state & ke && n(a)), h(a, s);
  }
  C.prototype.isPaused = function() {
    const a = this._readableState;
    return a[V] === !0 || a.flowing === !1;
  }, C.prototype.setEncoding = function(a) {
    const s = new le(a);
    this._readableState.decoder = s, this._readableState.encoding = this._readableState.decoder.encoding;
    const N = this._readableState.buffer;
    let $ = "";
    for (const M of N)
      $ += s.write(M);
    return N.clear(), $ !== "" && N.push($), this._readableState.length = $.length, this;
  };
  const Te = 1073741824;
  function Vt(a) {
    if (a > Te)
      throw new pe("size", "<= 1GiB", a);
    return a--, a |= a >>> 1, a |= a >>> 2, a |= a >>> 4, a |= a >>> 8, a |= a >>> 16, a++, a;
  }
  function o(a, s) {
    return a <= 0 || s.length === 0 && s.ended ? 0 : s.state & W ? 1 : l(a) ? s.flowing && s.length ? s.buffer.first().length : s.length : a <= s.length ? a : s.ended ? s.length : 0;
  }
  C.prototype.read = function(a) {
    I("read", a), a === void 0 ? a = NaN : i(a) || (a = c(a, 10));
    const s = this._readableState, N = a;
    if (a > s.highWaterMark && (s.highWaterMark = Vt(a)), a !== 0 && (s.state &= ~me), a === 0 && s.needReadable && ((s.highWaterMark !== 0 ? s.length >= s.highWaterMark : s.length > 0) || s.ended))
      return I("read: emitReadable", s.length, s.ended), s.length === 0 && s.ended ? Ht(this) : n(this), null;
    if (a = o(a, s), a === 0 && s.ended)
      return s.length === 0 && Ht(this), null;
    let $ = (s.state & ke) !== 0;
    if (I("need readable", $), (s.length === 0 || s.length - a < s.highWaterMark) && ($ = !0, I("length less than watermark", $)), s.ended || s.reading || s.destroyed || s.errored || !s.constructed)
      $ = !1, I("reading, ended or constructing", $);
    else if ($) {
      I("do read"), s.state |= se | Me, s.length === 0 && (s.state |= ke);
      try {
        this._read(s.highWaterMark);
      } catch (be) {
        fe(this, be);
      }
      s.state &= ~Me, s.reading || (a = o(N, s));
    }
    let M;
    return a > 0 ? M = Vr(a, s) : M = null, M === null ? (s.needReadable = s.length <= s.highWaterMark, a = 0) : (s.length -= a, s.multiAwaitDrain ? s.awaitDrainWriters.clear() : s.awaitDrainWriters = null), s.length === 0 && (s.ended || (s.needReadable = !0), N !== a && s.ended && Ht(this)), M !== null && !s.errorEmitted && !s.closeEmitted && (s.dataEmitted = !0, this.emit("data", M)), M;
  };
  function r(a, s) {
    if (I("onEofChunk"), !s.ended) {
      if (s.decoder) {
        const N = s.decoder.end();
        N && N.length && (s.buffer.push(N), s.length += s.objectMode ? 1 : N.length);
      }
      s.ended = !0, s.sync ? n(a) : (s.needReadable = !1, s.emittedReadable = !0, f(a));
    }
  }
  function n(a) {
    const s = a._readableState;
    I("emitReadable", s.needReadable, s.emittedReadable), s.needReadable = !1, s.emittedReadable || (I("emitReadable", s.flowing), s.emittedReadable = !0, e.nextTick(f, a));
  }
  function f(a) {
    const s = a._readableState;
    I("emitReadable_", s.destroyed, s.length, s.ended), !s.destroyed && !s.errored && (s.length || s.ended) && (a.emit("readable"), s.emittedReadable = !1), s.needReadable = !s.flowing && !s.ended && s.length <= s.highWaterMark, q(a);
  }
  function h(a, s) {
    !s.readingMore && s.constructed && (s.readingMore = !0, e.nextTick(w, a, s));
  }
  function w(a, s) {
    for (; !s.reading && !s.ended && (s.length < s.highWaterMark || s.flowing && s.length === 0); ) {
      const N = s.length;
      if (I("maybeReadMore read 0"), a.read(0), N === s.length)
        break;
    }
    s.readingMore = !1;
  }
  C.prototype._read = function(a) {
    throw new he("_read()");
  }, C.prototype.pipe = function(a, s) {
    const N = this, $ = this._readableState;
    $.pipes.length === 1 && ($.multiAwaitDrain || ($.multiAwaitDrain = !0, $.awaitDrainWriters = new _($.awaitDrainWriters ? [$.awaitDrainWriters] : []))), $.pipes.push(a), I("pipe count=%d opts=%j", $.pipes.length, s);
    const be = (!s || s.end !== !1) && a !== e.stdout && a !== e.stderr ? qr : pt;
    $.endEmitted ? e.nextTick(be) : N.once("end", be), a.on("unpipe", Ae);
    function Ae(Ke, Oe) {
      I("onunpipe"), Ke === N && Oe && Oe.hasUnpiped === !1 && (Oe.hasUnpiped = !0, Wi());
    }
    function qr() {
      I("onend"), a.end();
    }
    let ze, Yr = !1;
    function Wi() {
      I("cleanup"), a.removeListener("close", zt), a.removeListener("finish", Kt), ze && a.removeListener("drain", ze), a.removeListener("error", Yt), a.removeListener("unpipe", Ae), N.removeListener("end", qr), N.removeListener("end", pt), N.removeListener("data", Kr), Yr = !0, ze && $.awaitDrainWriters && (!a._writableState || a._writableState.needDrain) && ze();
    }
    function zr() {
      Yr || ($.pipes.length === 1 && $.pipes[0] === a ? (I("false write response, pause", 0), $.awaitDrainWriters = a, $.multiAwaitDrain = !1) : $.pipes.length > 1 && $.pipes.includes(a) && (I("false write response, pause", $.awaitDrainWriters.size), $.awaitDrainWriters.add(a)), N.pause()), ze || (ze = S(N, a), a.on("drain", ze));
    }
    N.on("data", Kr);
    function Kr(Ke) {
      I("ondata");
      const Oe = a.write(Ke);
      I("dest.write", Oe), Oe === !1 && zr();
    }
    function Yt(Ke) {
      if (I("onerror", Ke), pt(), a.removeListener("error", Yt), a.listenerCount("error") === 0) {
        const Oe = a._writableState || a._readableState;
        Oe && !Oe.errorEmitted ? fe(a, Ke) : a.emit("error", Ke);
      }
    }
    A(a, "error", Yt);
    function zt() {
      a.removeListener("finish", Kt), pt();
    }
    a.once("close", zt);
    function Kt() {
      I("onfinish"), a.removeListener("close", zt), pt();
    }
    a.once("finish", Kt);
    function pt() {
      I("unpipe"), N.unpipe(a);
    }
    return a.emit("pipe", N), a.writableNeedDrain === !0 ? zr() : $.flowing || (I("pipe resume"), N.resume()), a;
  };
  function S(a, s) {
    return function() {
      const $ = a._readableState;
      $.awaitDrainWriters === s ? (I("pipeOnDrain", 1), $.awaitDrainWriters = null) : $.multiAwaitDrain && (I("pipeOnDrain", $.awaitDrainWriters.size), $.awaitDrainWriters.delete(s)), (!$.awaitDrainWriters || $.awaitDrainWriters.size === 0) && a.listenerCount("data") && a.resume();
    };
  }
  C.prototype.unpipe = function(a) {
    const s = this._readableState, N = {
      hasUnpiped: !1
    };
    if (s.pipes.length === 0) return this;
    if (!a) {
      const M = s.pipes;
      s.pipes = [], this.pause();
      for (let be = 0; be < M.length; be++)
        M[be].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    const $ = t(s.pipes, a);
    return $ === -1 ? this : (s.pipes.splice($, 1), s.pipes.length === 0 && this.pause(), a.emit("unpipe", this, N), this);
  }, C.prototype.on = function(a, s) {
    const N = F.prototype.on.call(this, a, s), $ = this._readableState;
    return a === "data" ? ($.readableListening = this.listenerCount("readable") > 0, $.flowing !== !1 && this.resume()) : a === "readable" && !$.endEmitted && !$.readableListening && ($.readableListening = $.needReadable = !0, $.flowing = !1, $.emittedReadable = !1, I("on readable", $.length, $.reading), $.length ? n(this) : $.reading || e.nextTick(re, this)), N;
  }, C.prototype.addListener = C.prototype.on, C.prototype.removeListener = function(a, s) {
    const N = F.prototype.removeListener.call(this, a, s);
    return a === "readable" && e.nextTick(j, this), N;
  }, C.prototype.off = C.prototype.removeListener, C.prototype.removeAllListeners = function(a) {
    const s = F.prototype.removeAllListeners.apply(this, arguments);
    return (a === "readable" || a === void 0) && e.nextTick(j, this), s;
  };
  function j(a) {
    const s = a._readableState;
    s.readableListening = a.listenerCount("readable") > 0, s.resumeScheduled && s[V] === !1 ? s.flowing = !0 : a.listenerCount("data") > 0 ? a.resume() : s.readableListening || (s.flowing = null);
  }
  function re(a) {
    I("readable nexttick read 0"), a.read(0);
  }
  C.prototype.resume = function() {
    const a = this._readableState;
    return a.flowing || (I("resume"), a.flowing = !a.readableListening, J(this, a)), a[V] = !1, this;
  };
  function J(a, s) {
    s.resumeScheduled || (s.resumeScheduled = !0, e.nextTick(ne, a, s));
  }
  function ne(a, s) {
    I("resume", s.reading), s.reading || a.read(0), s.resumeScheduled = !1, a.emit("resume"), q(a), s.flowing && !s.reading && a.read(0);
  }
  C.prototype.pause = function() {
    return I("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (I("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState[V] = !0, this;
  };
  function q(a) {
    const s = a._readableState;
    for (I("flow", s.flowing); s.flowing && a.read() !== null; ) ;
  }
  C.prototype.wrap = function(a) {
    let s = !1;
    a.on("data", ($) => {
      !this.push($) && a.pause && (s = !0, a.pause());
    }), a.on("end", () => {
      this.push(null);
    }), a.on("error", ($) => {
      fe(this, $);
    }), a.on("close", () => {
      this.destroy();
    }), a.on("destroy", () => {
      this.destroy();
    }), this._read = () => {
      s && a.resume && (s = !1, a.resume());
    };
    const N = p(a);
    for (let $ = 1; $ < N.length; $++) {
      const M = N[$];
      this[M] === void 0 && typeof a[M] == "function" && (this[M] = a[M].bind(a));
    }
    return this;
  }, C.prototype[B] = function() {
    return Gr(this);
  }, C.prototype.iterator = function(a) {
    return a !== void 0 && G(a, "options"), Gr(this, a);
  };
  function Gr(a, s) {
    typeof a.read != "function" && (a = C.wrap(a, {
      objectMode: !0
    }));
    const N = Pi(a, s);
    return N.stream = a, N;
  }
  async function* Pi(a, s) {
    let N = ee;
    function $(Ae) {
      this === a ? (N(), N = ee) : N = Ae;
    }
    a.on("readable", $);
    let M;
    const be = U(
      a,
      {
        writable: !1
      },
      (Ae) => {
        M = Ae ? Q(M, Ae) : null, N(), N = ee;
      }
    );
    try {
      for (; ; ) {
        const Ae = a.destroyed ? null : a.read();
        if (Ae !== null)
          yield Ae;
        else {
          if (M)
            throw M;
          if (M === null)
            return;
          await new R($);
        }
      }
    } catch (Ae) {
      throw M = Q(M, Ae), M;
    } finally {
      (M || (s == null ? void 0 : s.destroyOnReturn) !== !1) && (M === void 0 || a._readableState.autoDestroy) ? v.destroyer(a, null) : (a.off("readable", $), be());
    }
  }
  d(C.prototype, {
    readable: {
      __proto__: null,
      get() {
        const a = this._readableState;
        return !!a && a.readable !== !1 && !a.destroyed && !a.errorEmitted && !a.endEmitted;
      },
      set(a) {
        this._readableState && (this._readableState.readable = !!a);
      }
    },
    readableDidRead: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.dataEmitted;
      }
    },
    readableAborted: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return !!(this._readableState.readable !== !1 && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
      }
    },
    readableHighWaterMark: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.highWaterMark;
      }
    },
    readableBuffer: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState && this._readableState.buffer;
      }
    },
    readableFlowing: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.flowing;
      },
      set: function(a) {
        this._readableState && (this._readableState.flowing = a);
      }
    },
    readableLength: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState.length;
      }
    },
    readableObjectMode: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.objectMode : !1;
      }
    },
    readableEncoding: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.encoding : null;
      }
    },
    errored: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.errored : null;
      }
    },
    closed: {
      __proto__: null,
      get() {
        return this._readableState ? this._readableState.closed : !1;
      }
    },
    destroyed: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.destroyed : !1;
      },
      set(a) {
        this._readableState && (this._readableState.destroyed = a);
      }
    },
    readableEnded: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.endEmitted : !1;
      }
    }
  }), d(_e.prototype, {
    // Legacy getter for `pipesCount`.
    pipesCount: {
      __proto__: null,
      get() {
        return this.pipes.length;
      }
    },
    // Legacy property for `paused`.
    paused: {
      __proto__: null,
      get() {
        return this[V] !== !1;
      },
      set(a) {
        this[V] = !!a;
      }
    }
  }), C._fromList = Vr;
  function Vr(a, s) {
    if (s.length === 0) return null;
    let N;
    return s.objectMode ? N = s.buffer.shift() : !a || a >= s.length ? (s.decoder ? N = s.buffer.join("") : s.buffer.length === 1 ? N = s.buffer.first() : N = s.buffer.concat(s.length), s.buffer.clear()) : N = s.buffer.consume(a, s.decoder), N;
  }
  function Ht(a) {
    const s = a._readableState;
    I("endReadable", s.endEmitted), s.endEmitted || (s.ended = !0, e.nextTick(Oi, s, a));
  }
  function Oi(a, s) {
    if (I("endReadableNT", a.endEmitted, a.length), !a.errored && !a.closeEmitted && !a.endEmitted && a.length === 0) {
      if (a.endEmitted = !0, s.emit("end"), s.writable && s.allowHalfOpen === !1)
        e.nextTick(Ui, s);
      else if (a.autoDestroy) {
        const N = s._writableState;
        (!N || N.autoDestroy && // We don't expect the writable to ever 'finish'
        // if writable is explicitly set to false.
        (N.finished || N.writable === !1)) && s.destroy();
      }
    }
  }
  function Ui(a) {
    a.writable && !a.writableEnded && !a.destroyed && a.end();
  }
  C.from = function(a, s) {
    return ae(C, a, s);
  };
  let qt;
  function Hr() {
    return qt === void 0 && (qt = {}), qt;
  }
  return C.fromWeb = function(a, s) {
    return Hr().newStreamReadableFromReadableStream(a, s);
  }, C.toWeb = function(a, s) {
    return Hr().newReadableStreamFromStreamReadable(a, s);
  }, C.wrap = function(a, s) {
    var N, $;
    return new C({
      objectMode: (N = ($ = a.readableObjectMode) !== null && $ !== void 0 ? $ : a.objectMode) !== null && N !== void 0 ? N : !0,
      ...s,
      destroy(M, be) {
        v.destroyer(a, M), be(M);
      }
    }).wrap(a);
  }, rr;
}
var nr, Sn;
function Or() {
  if (Sn) return nr;
  Sn = 1;
  const e = tt, {
    ArrayPrototypeSlice: t,
    Error: i,
    FunctionPrototypeSymbolHasInstance: l,
    ObjectDefineProperty: c,
    ObjectDefineProperties: d,
    ObjectSetPrototypeOf: p,
    StringPrototypeToLowerCase: u,
    Symbol: R,
    SymbolHasInstance: _
  } = ue;
  nr = G, G.WritableState = T;
  const { EventEmitter: m } = Ft, B = Cr.Stream, { Buffer: E } = je, g = dt, { addAbortSignal: F } = Wt, { getHighWaterMark: A, getDefaultHighWaterMark: D } = vt, {
    ERR_INVALID_ARG_TYPE: O,
    ERR_METHOD_NOT_IMPLEMENTED: U,
    ERR_MULTIPLE_CALLBACK: I,
    ERR_STREAM_CANNOT_PIPE: K,
    ERR_STREAM_DESTROYED: v,
    ERR_STREAM_ALREADY_FINISHED: ie,
    ERR_STREAM_NULL_VALUES: we,
    ERR_STREAM_WRITE_AFTER_END: Q,
    ERR_UNKNOWN_ENCODING: oe
  } = Ee.codes, { errorOrDestroy: he } = g;
  p(G.prototype, B.prototype), p(G, B);
  function pe() {
  }
  const H = R("kOnFinished");
  function T(b, y, x) {
    typeof x != "boolean" && (x = y instanceof We()), this.objectMode = !!(b && b.objectMode), x && (this.objectMode = this.objectMode || !!(b && b.writableObjectMode)), this.highWaterMark = b ? A(this, b, "writableHighWaterMark", x) : D(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    const k = !!(b && b.decodeStrings === !1);
    this.decodeStrings = !k, this.defaultEncoding = b && b.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = fe.bind(void 0, y), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, Y(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !b || b.emitClose !== !1, this.autoDestroy = !b || b.autoDestroy !== !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[H] = [];
  }
  function Y(b) {
    b.buffered = [], b.bufferedIndex = 0, b.allBuffers = !0, b.allNoop = !0;
  }
  T.prototype.getBuffer = function() {
    return t(this.buffered, this.bufferedIndex);
  }, c(T.prototype, "bufferedRequestCount", {
    __proto__: null,
    get() {
      return this.buffered.length - this.bufferedIndex;
    }
  });
  function G(b) {
    const y = this instanceof We();
    if (!y && !l(G, this)) return new G(b);
    this._writableState = new T(b, this, y), b && (typeof b.write == "function" && (this._write = b.write), typeof b.writev == "function" && (this._writev = b.writev), typeof b.destroy == "function" && (this._destroy = b.destroy), typeof b.final == "function" && (this._final = b.final), typeof b.construct == "function" && (this._construct = b.construct), b.signal && F(b.signal, this)), B.call(this, b), g.construct(this, () => {
      const x = this._writableState;
      x.writing || se(this, x), me(this, x);
    });
  }
  c(G, _, {
    __proto__: null,
    value: function(b) {
      return l(this, b) ? !0 : this !== G ? !1 : b && b._writableState instanceof T;
    }
  }), G.prototype.pipe = function() {
    he(this, new K());
  };
  function V(b, y, x, k) {
    const L = b._writableState;
    if (typeof x == "function")
      k = x, x = L.defaultEncoding;
    else {
      if (!x) x = L.defaultEncoding;
      else if (x !== "buffer" && !E.isEncoding(x)) throw new oe(x);
      typeof k != "function" && (k = pe);
    }
    if (y === null)
      throw new we();
    if (!L.objectMode)
      if (typeof y == "string")
        L.decodeStrings !== !1 && (y = E.from(y, x), x = "buffer");
      else if (y instanceof E)
        x = "buffer";
      else if (B._isUint8Array(y))
        y = B._uint8ArrayToBuffer(y), x = "buffer";
      else
        throw new O("chunk", ["string", "Buffer", "Uint8Array"], y);
    let X;
    return L.ending ? X = new Q() : L.destroyed && (X = new v("write")), X ? (e.nextTick(k, X), he(b, X, !0), X) : (L.pendingcb++, le(b, L, y, x, k));
  }
  G.prototype.write = function(b, y, x) {
    return V(this, b, y, x) === !0;
  }, G.prototype.cork = function() {
    this._writableState.corked++;
  }, G.prototype.uncork = function() {
    const b = this._writableState;
    b.corked && (b.corked--, b.writing || se(this, b));
  }, G.prototype.setDefaultEncoding = function(y) {
    if (typeof y == "string" && (y = u(y)), !E.isEncoding(y)) throw new oe(y);
    return this._writableState.defaultEncoding = y, this;
  };
  function le(b, y, x, k, L) {
    const X = y.objectMode ? 1 : x.length;
    y.length += X;
    const Z = y.length < y.highWaterMark;
    return Z || (y.needDrain = !0), y.writing || y.corked || y.errored || !y.constructed ? (y.buffered.push({
      chunk: x,
      encoding: k,
      callback: L
    }), y.allBuffers && k !== "buffer" && (y.allBuffers = !1), y.allNoop && L !== pe && (y.allNoop = !1)) : (y.writelen = X, y.writecb = L, y.writing = !0, y.sync = !0, b._write(x, k, y.onwrite), y.sync = !1), Z && !y.errored && !y.destroyed;
  }
  function ae(b, y, x, k, L, X, Z) {
    y.writelen = k, y.writecb = Z, y.writing = !0, y.sync = !0, y.destroyed ? y.onwrite(new v("write")) : x ? b._writev(L, y.onwrite) : b._write(L, X, y.onwrite), y.sync = !1;
  }
  function ee(b, y, x, k) {
    --y.pendingcb, k(x), P(y), he(b, x);
  }
  function fe(b, y) {
    const x = b._writableState, k = x.sync, L = x.writecb;
    if (typeof L != "function") {
      he(b, new I());
      return;
    }
    x.writing = !1, x.writecb = null, x.length -= x.writelen, x.writelen = 0, y ? (y.stack, x.errored || (x.errored = y), b._readableState && !b._readableState.errored && (b._readableState.errored = y), k ? e.nextTick(ee, b, x, y, L) : ee(b, x, y, L)) : (x.buffered.length > x.bufferedIndex && se(b, x), k ? x.afterWriteTickInfo !== null && x.afterWriteTickInfo.cb === L ? x.afterWriteTickInfo.count++ : (x.afterWriteTickInfo = {
      count: 1,
      cb: L,
      stream: b,
      state: x
    }, e.nextTick(W, x.afterWriteTickInfo)) : te(b, x, 1, L));
  }
  function W({ stream: b, state: y, count: x, cb: k }) {
    return y.afterWriteTickInfo = null, te(b, y, x, k);
  }
  function te(b, y, x, k) {
    for (!y.ending && !b.destroyed && y.length === 0 && y.needDrain && (y.needDrain = !1, b.emit("drain")); x-- > 0; )
      y.pendingcb--, k();
    y.destroyed && P(y), me(b, y);
  }
  function P(b) {
    if (b.writing)
      return;
    for (let L = b.bufferedIndex; L < b.buffered.length; ++L) {
      var y;
      const { chunk: X, callback: Z } = b.buffered[L], z = b.objectMode ? 1 : X.length;
      b.length -= z, Z(
        (y = b.errored) !== null && y !== void 0 ? y : new v("write")
      );
    }
    const x = b[H].splice(0);
    for (let L = 0; L < x.length; L++) {
      var k;
      x[L](
        (k = b.errored) !== null && k !== void 0 ? k : new v("end")
      );
    }
    Y(b);
  }
  function se(b, y) {
    if (y.corked || y.bufferProcessing || y.destroyed || !y.constructed)
      return;
    const { buffered: x, bufferedIndex: k, objectMode: L } = y, X = x.length - k;
    if (!X)
      return;
    let Z = k;
    if (y.bufferProcessing = !0, X > 1 && b._writev) {
      y.pendingcb -= X - 1;
      const z = y.allNoop ? pe : (C) => {
        for (let Re = Z; Re < x.length; ++Re)
          x[Re].callback(C);
      }, _e = y.allNoop && Z === 0 ? x : t(x, Z);
      _e.allBuffers = y.allBuffers, ae(b, y, !0, y.length, _e, "", z), Y(y);
    } else {
      do {
        const { chunk: z, encoding: _e, callback: C } = x[Z];
        x[Z++] = null;
        const Re = L ? 1 : z.length;
        ae(b, y, !1, Re, z, _e, C);
      } while (Z < x.length && !y.writing);
      Z === x.length ? Y(y) : Z > 256 ? (x.splice(0, Z), y.bufferedIndex = 0) : y.bufferedIndex = Z;
    }
    y.bufferProcessing = !1;
  }
  G.prototype._write = function(b, y, x) {
    if (this._writev)
      this._writev(
        [
          {
            chunk: b,
            encoding: y
          }
        ],
        x
      );
    else
      throw new U("_write()");
  }, G.prototype._writev = null, G.prototype.end = function(b, y, x) {
    const k = this._writableState;
    typeof b == "function" ? (x = b, b = null, y = null) : typeof y == "function" && (x = y, y = null);
    let L;
    if (b != null) {
      const X = V(this, b, y);
      X instanceof i && (L = X);
    }
    return k.corked && (k.corked = 1, this.uncork()), L || (!k.errored && !k.ending ? (k.ending = !0, me(this, k, !0), k.ended = !0) : k.finished ? L = new ie("end") : k.destroyed && (L = new v("end"))), typeof x == "function" && (L || k.finished ? e.nextTick(x, L) : k[H].push(x)), this;
  };
  function Se(b) {
    return b.ending && !b.destroyed && b.constructed && b.length === 0 && !b.errored && b.buffered.length === 0 && !b.finished && !b.writing && !b.errorEmitted && !b.closeEmitted;
  }
  function Me(b, y) {
    let x = !1;
    function k(L) {
      if (x) {
        he(b, L ?? I());
        return;
      }
      if (x = !0, y.pendingcb--, L) {
        const X = y[H].splice(0);
        for (let Z = 0; Z < X.length; Z++)
          X[Z](L);
        he(b, L, y.sync);
      } else Se(y) && (y.prefinished = !0, b.emit("prefinish"), y.pendingcb++, e.nextTick(Ce, b, y));
    }
    y.sync = !0, y.pendingcb++;
    try {
      b._final(k);
    } catch (L) {
      k(L);
    }
    y.sync = !1;
  }
  function ke(b, y) {
    !y.prefinished && !y.finalCalled && (typeof b._final == "function" && !y.destroyed ? (y.finalCalled = !0, Me(b, y)) : (y.prefinished = !0, b.emit("prefinish")));
  }
  function me(b, y, x) {
    Se(y) && (ke(b, y), y.pendingcb === 0 && (x ? (y.pendingcb++, e.nextTick(
      (k, L) => {
        Se(L) ? Ce(k, L) : L.pendingcb--;
      },
      b,
      y
    )) : Se(y) && (y.pendingcb++, Ce(b, y))));
  }
  function Ce(b, y) {
    y.pendingcb--, y.finished = !0;
    const x = y[H].splice(0);
    for (let k = 0; k < x.length; k++)
      x[k]();
    if (b.emit("finish"), y.autoDestroy) {
      const k = b._readableState;
      (!k || k.autoDestroy && // We don't expect the readable to ever 'end'
      // if readable is explicitly set to false.
      (k.endEmitted || k.readable === !1)) && b.destroy();
    }
  }
  d(G.prototype, {
    closed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.closed : !1;
      }
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.destroyed : !1;
      },
      set(b) {
        this._writableState && (this._writableState.destroyed = b);
      }
    },
    writable: {
      __proto__: null,
      get() {
        const b = this._writableState;
        return !!b && b.writable !== !1 && !b.destroyed && !b.errored && !b.ending && !b.ended;
      },
      set(b) {
        this._writableState && (this._writableState.writable = !!b);
      }
    },
    writableFinished: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.finished : !1;
      }
    },
    writableObjectMode: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.objectMode : !1;
      }
    },
    writableBuffer: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.getBuffer();
      }
    },
    writableEnded: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.ending : !1;
      }
    },
    writableNeedDrain: {
      __proto__: null,
      get() {
        const b = this._writableState;
        return b ? !b.destroyed && !b.ending && b.needDrain : !1;
      }
    },
    writableHighWaterMark: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.highWaterMark;
      }
    },
    writableCorked: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.corked : 0;
      }
    },
    writableLength: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.length;
      }
    },
    errored: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._writableState ? this._writableState.errored : null;
      }
    },
    writableAborted: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return !!(this._writableState.writable !== !1 && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
      }
    }
  });
  const ot = g.destroy;
  G.prototype.destroy = function(b, y) {
    const x = this._writableState;
    return !x.destroyed && (x.bufferedIndex < x.buffered.length || x[H].length) && e.nextTick(P, x), ot.call(this, b, y), this;
  }, G.prototype._undestroy = g.undestroy, G.prototype._destroy = function(b, y) {
    y(b);
  }, G.prototype[m.captureRejectionSymbol] = function(b) {
    this.destroy(b);
  };
  let Ye;
  function Pe() {
    return Ye === void 0 && (Ye = {}), Ye;
  }
  return G.fromWeb = function(b, y) {
    return Pe().newStreamWritableFromWritableStream(b, y);
  }, G.toWeb = function(b) {
    return Pe().newWritableStreamFromStreamWritable(b);
  }, nr;
}
var ir, mn;
function ba() {
  if (mn) return ir;
  mn = 1;
  const e = tt, t = je, {
    isReadable: i,
    isWritable: l,
    isIterable: c,
    isNodeStream: d,
    isReadableNodeStream: p,
    isWritableNodeStream: u,
    isDuplexNodeStream: R,
    isReadableStream: _,
    isWritableStream: m
  } = Ve, B = qe, {
    AbortError: E,
    codes: { ERR_INVALID_ARG_TYPE: g, ERR_INVALID_RETURN_VALUE: F }
  } = Ee, { destroyer: A } = dt, D = We(), O = jt(), U = Or(), { createDeferredPromise: I } = ge, K = xi, v = globalThis.Blob || t.Blob, ie = typeof v < "u" ? function(T) {
    return T instanceof v;
  } : function(T) {
    return !1;
  }, we = globalThis.AbortController || gt().AbortController, { FunctionPrototypeCall: Q } = ue;
  class oe extends D {
    constructor(T) {
      super(T), (T == null ? void 0 : T.readable) === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), (T == null ? void 0 : T.writable) === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0);
    }
  }
  ir = function H(T, Y) {
    if (R(T))
      return T;
    if (p(T))
      return pe({
        readable: T
      });
    if (u(T))
      return pe({
        writable: T
      });
    if (d(T))
      return pe({
        writable: !1,
        readable: !1
      });
    if (_(T))
      return pe({
        readable: O.fromWeb(T)
      });
    if (m(T))
      return pe({
        writable: U.fromWeb(T)
      });
    if (typeof T == "function") {
      const { value: V, write: le, final: ae, destroy: ee } = he(T);
      if (c(V))
        return K(oe, V, {
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          write: le,
          final: ae,
          destroy: ee
        });
      const fe = V == null ? void 0 : V.then;
      if (typeof fe == "function") {
        let W;
        const te = Q(
          fe,
          V,
          (P) => {
            if (P != null)
              throw new F("nully", "body", P);
          },
          (P) => {
            A(W, P);
          }
        );
        return W = new oe({
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          readable: !1,
          write: le,
          final(P) {
            ae(async () => {
              try {
                await te, e.nextTick(P, null);
              } catch (se) {
                e.nextTick(P, se);
              }
            });
          },
          destroy: ee
        });
      }
      throw new F("Iterable, AsyncIterable or AsyncFunction", Y, V);
    }
    if (ie(T))
      return H(T.arrayBuffer());
    if (c(T))
      return K(oe, T, {
        // TODO (ronag): highWaterMark?
        objectMode: !0,
        writable: !1
      });
    if (_(T == null ? void 0 : T.readable) && m(T == null ? void 0 : T.writable))
      return oe.fromWeb(T);
    if (typeof (T == null ? void 0 : T.writable) == "object" || typeof (T == null ? void 0 : T.readable) == "object") {
      const V = T != null && T.readable ? p(T == null ? void 0 : T.readable) ? T == null ? void 0 : T.readable : H(T.readable) : void 0, le = T != null && T.writable ? u(T == null ? void 0 : T.writable) ? T == null ? void 0 : T.writable : H(T.writable) : void 0;
      return pe({
        readable: V,
        writable: le
      });
    }
    const G = T == null ? void 0 : T.then;
    if (typeof G == "function") {
      let V;
      return Q(
        G,
        T,
        (le) => {
          le != null && V.push(le), V.push(null);
        },
        (le) => {
          A(V, le);
        }
      ), V = new oe({
        objectMode: !0,
        writable: !1,
        read() {
        }
      });
    }
    throw new g(
      Y,
      [
        "Blob",
        "ReadableStream",
        "WritableStream",
        "Stream",
        "Iterable",
        "AsyncIterable",
        "Function",
        "{ readable, writable } pair",
        "Promise"
      ],
      T
    );
  };
  function he(H) {
    let { promise: T, resolve: Y } = I();
    const G = new we(), V = G.signal;
    return {
      value: H(
        async function* () {
          for (; ; ) {
            const ae = T;
            T = null;
            const { chunk: ee, done: fe, cb: W } = await ae;
            if (e.nextTick(W), fe) return;
            if (V.aborted)
              throw new E(void 0, {
                cause: V.reason
              });
            ({ promise: T, resolve: Y } = I()), yield ee;
          }
        }(),
        {
          signal: V
        }
      ),
      write(ae, ee, fe) {
        const W = Y;
        Y = null, W({
          chunk: ae,
          done: !1,
          cb: fe
        });
      },
      final(ae) {
        const ee = Y;
        Y = null, ee({
          done: !0,
          cb: ae
        });
      },
      destroy(ae, ee) {
        G.abort(), ee(ae);
      }
    };
  }
  function pe(H) {
    const T = H.readable && typeof H.readable.read != "function" ? O.wrap(H.readable) : H.readable, Y = H.writable;
    let G = !!i(T), V = !!l(Y), le, ae, ee, fe, W;
    function te(P) {
      const se = fe;
      fe = null, se ? se(P) : P && W.destroy(P);
    }
    return W = new oe({
      // TODO (ronag): highWaterMark?
      readableObjectMode: !!(T != null && T.readableObjectMode),
      writableObjectMode: !!(Y != null && Y.writableObjectMode),
      readable: G,
      writable: V
    }), V && (B(Y, (P) => {
      V = !1, P && A(T, P), te(P);
    }), W._write = function(P, se, Se) {
      Y.write(P, se) ? Se() : le = Se;
    }, W._final = function(P) {
      Y.end(), ae = P;
    }, Y.on("drain", function() {
      if (le) {
        const P = le;
        le = null, P();
      }
    }), Y.on("finish", function() {
      if (ae) {
        const P = ae;
        ae = null, P();
      }
    })), G && (B(T, (P) => {
      G = !1, P && A(T, P), te(P);
    }), T.on("readable", function() {
      if (ee) {
        const P = ee;
        ee = null, P();
      }
    }), T.on("end", function() {
      W.push(null);
    }), W._read = function() {
      for (; ; ) {
        const P = T.read();
        if (P === null) {
          ee = W._read;
          return;
        }
        if (!W.push(P))
          return;
      }
    }), W._destroy = function(P, se) {
      !P && fe !== null && (P = new E()), ee = null, le = null, ae = null, fe === null ? se(P) : (fe = se, A(Y, P), A(T, P));
    }, W;
  }
  return ir;
}
var or, Rn;
function We() {
  if (Rn) return or;
  Rn = 1;
  const {
    ObjectDefineProperties: e,
    ObjectGetOwnPropertyDescriptor: t,
    ObjectKeys: i,
    ObjectSetPrototypeOf: l
  } = ue;
  or = p;
  const c = jt(), d = Or();
  l(p.prototype, c.prototype), l(p, c);
  {
    const m = i(d.prototype);
    for (let B = 0; B < m.length; B++) {
      const E = m[B];
      p.prototype[E] || (p.prototype[E] = d.prototype[E]);
    }
  }
  function p(m) {
    if (!(this instanceof p)) return new p(m);
    c.call(this, m), d.call(this, m), m ? (this.allowHalfOpen = m.allowHalfOpen !== !1, m.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), m.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0;
  }
  e(p.prototype, {
    writable: {
      __proto__: null,
      ...t(d.prototype, "writable")
    },
    writableHighWaterMark: {
      __proto__: null,
      ...t(d.prototype, "writableHighWaterMark")
    },
    writableObjectMode: {
      __proto__: null,
      ...t(d.prototype, "writableObjectMode")
    },
    writableBuffer: {
      __proto__: null,
      ...t(d.prototype, "writableBuffer")
    },
    writableLength: {
      __proto__: null,
      ...t(d.prototype, "writableLength")
    },
    writableFinished: {
      __proto__: null,
      ...t(d.prototype, "writableFinished")
    },
    writableCorked: {
      __proto__: null,
      ...t(d.prototype, "writableCorked")
    },
    writableEnded: {
      __proto__: null,
      ...t(d.prototype, "writableEnded")
    },
    writableNeedDrain: {
      __proto__: null,
      ...t(d.prototype, "writableNeedDrain")
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
      },
      set(m) {
        this._readableState && this._writableState && (this._readableState.destroyed = m, this._writableState.destroyed = m);
      }
    }
  });
  let u;
  function R() {
    return u === void 0 && (u = {}), u;
  }
  p.fromWeb = function(m, B) {
    return R().newStreamDuplexFromReadableWritablePair(m, B);
  }, p.toWeb = function(m) {
    return R().newReadableWritablePairFromDuplex(m);
  };
  let _;
  return p.from = function(m) {
    return _ || (_ = ba()), _(m, "body");
  }, or;
}
const { ObjectSetPrototypeOf: Ii, Symbol: ya } = ue;
var Ti = ve;
const { ERR_METHOD_NOT_IMPLEMENTED: wa } = Ee.codes, Ur = We(), { getHighWaterMark: ga } = vt;
Ii(ve.prototype, Ur.prototype);
Ii(ve, Ur);
const wt = ya("kCallback");
function ve(e) {
  if (!(this instanceof ve)) return new ve(e);
  const t = e ? ga(this, e, "readableHighWaterMark", !0) : null;
  t === 0 && (e = {
    ...e,
    highWaterMark: null,
    readableHighWaterMark: t,
    // TODO (ronag): 0 is not optimal since we have
    // a "bug" where we check needDrain before calling _write and not after.
    // Refs: https://github.com/nodejs/node/pull/32887
    // Refs: https://github.com/nodejs/node/pull/35941
    writableHighWaterMark: e.writableHighWaterMark || 0
  }), Ur.call(this, e), this._readableState.sync = !1, this[wt] = null, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", _a);
}
function Br(e) {
  typeof this._flush == "function" && !this.destroyed ? this._flush((t, i) => {
    if (t) {
      e ? e(t) : this.destroy(t);
      return;
    }
    i != null && this.push(i), this.push(null), e && e();
  }) : (this.push(null), e && e());
}
function _a() {
  this._final !== Br && Br.call(this);
}
ve.prototype._final = Br;
ve.prototype._transform = function(e, t, i) {
  throw new wa("_transform()");
};
ve.prototype._write = function(e, t, i) {
  const l = this._readableState, c = this._writableState, d = l.length;
  this._transform(e, t, (p, u) => {
    if (p) {
      i(p);
      return;
    }
    u != null && this.push(u), c.ended || // Backwards compat.
    d === l.length || // Backwards compat.
    l.length < l.highWaterMark ? i() : this[wt] = i;
  });
};
ve.prototype._read = function() {
  if (this[wt]) {
    const e = this[wt];
    this[wt] = null, e();
  }
};
const { ObjectSetPrototypeOf: Bi } = ue;
var Ni = ut;
const Wr = Ti;
Bi(ut.prototype, Wr.prototype);
Bi(ut, Wr);
function ut(e) {
  if (!(this instanceof ut)) return new ut(e);
  Wr.call(this, e);
}
ut.prototype._transform = function(e, t, i) {
  i(null, e);
};
const yt = tt, { ArrayIsArray: Ea, Promise: Sa, SymbolAsyncIterator: ma, SymbolDispose: Ra } = ue, Nt = qe, { once: Aa } = ge, xa = dt, An = We(), {
  aggregateTwoErrors: Ia,
  codes: {
    ERR_INVALID_ARG_TYPE: Nr,
    ERR_INVALID_RETURN_VALUE: lr,
    ERR_MISSING_ARGS: Ta,
    ERR_STREAM_DESTROYED: Ba,
    ERR_STREAM_PREMATURE_CLOSE: Na
  },
  AbortError: $a
} = Ee, { validateFunction: Fa, validateAbortSignal: Da } = _t, {
  isIterable: Je,
  isReadable: ar,
  isReadableNodeStream: Tt,
  isNodeStream: xn,
  isTransformStream: at,
  isWebStream: La,
  isReadableStream: fr,
  isReadableFinished: Ma
} = Ve, ka = globalThis.AbortController || gt().AbortController;
let sr, ur, cr;
function In(e, t, i) {
  let l = !1;
  e.on("close", () => {
    l = !0;
  });
  const c = Nt(
    e,
    {
      readable: t,
      writable: i
    },
    (d) => {
      l = !d;
    }
  );
  return {
    destroy: (d) => {
      l || (l = !0, xa.destroyer(e, d || new Ba("pipe")));
    },
    cleanup: c
  };
}
function Ca(e) {
  return Fa(e[e.length - 1], "streams[stream.length - 1]"), e.pop();
}
function dr(e) {
  if (Je(e))
    return e;
  if (Tt(e))
    return Pa(e);
  throw new Nr("val", ["Readable", "Iterable", "AsyncIterable"], e);
}
async function* Pa(e) {
  ur || (ur = jt()), yield* ur.prototype[ma].call(e);
}
async function Rt(e, t, i, { end: l }) {
  let c, d = null;
  const p = (_) => {
    if (_ && (c = _), d) {
      const m = d;
      d = null, m();
    }
  }, u = () => new Sa((_, m) => {
    c ? m(c) : d = () => {
      c ? m(c) : _();
    };
  });
  t.on("drain", p);
  const R = Nt(
    t,
    {
      readable: !1
    },
    p
  );
  try {
    t.writableNeedDrain && await u();
    for await (const _ of e)
      t.write(_) || await u();
    l && (t.end(), await u()), i();
  } catch (_) {
    i(c !== _ ? Ia(c, _) : _);
  } finally {
    R(), t.off("drain", p);
  }
}
async function hr(e, t, i, { end: l }) {
  at(t) && (t = t.writable);
  const c = t.getWriter();
  try {
    for await (const d of e)
      await c.ready, c.write(d).catch(() => {
      });
    await c.ready, l && await c.close(), i();
  } catch (d) {
    try {
      await c.abort(d), i(d);
    } catch (p) {
      i(p);
    }
  }
}
function Oa(...e) {
  return $i(e, Aa(Ca(e)));
}
function $i(e, t, i) {
  if (e.length === 1 && Ea(e[0]) && (e = e[0]), e.length < 2)
    throw new Ta("streams");
  const l = new ka(), c = l.signal, d = i == null ? void 0 : i.signal, p = [];
  Da(d, "options.signal");
  function u() {
    F(new $a());
  }
  cr = cr || ge.addAbortListener;
  let R;
  d && (R = cr(d, u));
  let _, m;
  const B = [];
  let E = 0;
  function g(U) {
    F(U, --E === 0);
  }
  function F(U, I) {
    var K;
    if (U && (!_ || _.code === "ERR_STREAM_PREMATURE_CLOSE") && (_ = U), !(!_ && !I)) {
      for (; B.length; )
        B.shift()(_);
      (K = R) === null || K === void 0 || K[Ra](), l.abort(), I && (_ || p.forEach((v) => v()), yt.nextTick(t, _, m));
    }
  }
  let A;
  for (let U = 0; U < e.length; U++) {
    const I = e[U], K = U < e.length - 1, v = U > 0, ie = K || (i == null ? void 0 : i.end) !== !1, we = U === e.length - 1;
    if (xn(I)) {
      let Q = function(oe) {
        oe && oe.name !== "AbortError" && oe.code !== "ERR_STREAM_PREMATURE_CLOSE" && g(oe);
      };
      if (ie) {
        const { destroy: oe, cleanup: he } = In(I, K, v);
        B.push(oe), ar(I) && we && p.push(he);
      }
      I.on("error", Q), ar(I) && we && p.push(() => {
        I.removeListener("error", Q);
      });
    }
    if (U === 0)
      if (typeof I == "function") {
        if (A = I({
          signal: c
        }), !Je(A))
          throw new lr("Iterable, AsyncIterable or Stream", "source", A);
      } else Je(I) || Tt(I) || at(I) ? A = I : A = An.from(I);
    else if (typeof I == "function") {
      if (at(A)) {
        var D;
        A = dr((D = A) === null || D === void 0 ? void 0 : D.readable);
      } else
        A = dr(A);
      if (A = I(A, {
        signal: c
      }), K) {
        if (!Je(A, !0))
          throw new lr("AsyncIterable", `transform[${U - 1}]`, A);
      } else {
        var O;
        sr || (sr = Ni);
        const Q = new sr({
          objectMode: !0
        }), oe = (O = A) === null || O === void 0 ? void 0 : O.then;
        if (typeof oe == "function")
          E++, oe.call(
            A,
            (H) => {
              m = H, H != null && Q.write(H), ie && Q.end(), yt.nextTick(g);
            },
            (H) => {
              Q.destroy(H), yt.nextTick(g, H);
            }
          );
        else if (Je(A, !0))
          E++, Rt(A, Q, g, {
            end: ie
          });
        else if (fr(A) || at(A)) {
          const H = A.readable || A;
          E++, Rt(H, Q, g, {
            end: ie
          });
        } else
          throw new lr("AsyncIterable or Promise", "destination", A);
        A = Q;
        const { destroy: he, cleanup: pe } = In(A, !1, !0);
        B.push(he), we && p.push(pe);
      }
    } else if (xn(I)) {
      if (Tt(A)) {
        E += 2;
        const Q = Ua(A, I, g, {
          end: ie
        });
        ar(I) && we && p.push(Q);
      } else if (at(A) || fr(A)) {
        const Q = A.readable || A;
        E++, Rt(Q, I, g, {
          end: ie
        });
      } else if (Je(A))
        E++, Rt(A, I, g, {
          end: ie
        });
      else
        throw new Nr(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          A
        );
      A = I;
    } else if (La(I)) {
      if (Tt(A))
        E++, hr(dr(A), I, g, {
          end: ie
        });
      else if (fr(A) || Je(A))
        E++, hr(A, I, g, {
          end: ie
        });
      else if (at(A))
        E++, hr(A.readable, I, g, {
          end: ie
        });
      else
        throw new Nr(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          A
        );
      A = I;
    } else
      A = An.from(I);
  }
  return (c != null && c.aborted || d != null && d.aborted) && yt.nextTick(u), A;
}
function Ua(e, t, i, { end: l }) {
  let c = !1;
  if (t.on("close", () => {
    c || i(new Na());
  }), e.pipe(t, {
    end: !1
  }), l) {
    let d = function() {
      c = !0, t.end();
    };
    Ma(e) ? yt.nextTick(d) : e.once("end", d);
  } else
    i();
  return Nt(
    e,
    {
      readable: !0,
      writable: !1
    },
    (d) => {
      const p = e._readableState;
      d && d.code === "ERR_STREAM_PREMATURE_CLOSE" && p && p.ended && !p.errored && !p.errorEmitted ? e.once("end", i).once("error", i) : i(d);
    }
  ), Nt(
    t,
    {
      readable: !1,
      writable: !0
    },
    i
  );
}
var vr = {
  pipelineImpl: $i,
  pipeline: Oa
};
const { pipeline: Wa } = vr, At = We(), { destroyer: va } = dt, {
  isNodeStream: xt,
  isReadable: Tn,
  isWritable: Bn,
  isWebStream: pr,
  isTransformStream: Xe,
  isWritableStream: Nn,
  isReadableStream: $n
} = Ve, {
  AbortError: ja,
  codes: { ERR_INVALID_ARG_VALUE: Fn, ERR_MISSING_ARGS: Ga }
} = Ee, Va = qe;
var Fi = function(...t) {
  if (t.length === 0)
    throw new Ga("streams");
  if (t.length === 1)
    return At.from(t[0]);
  const i = [...t];
  if (typeof t[0] == "function" && (t[0] = At.from(t[0])), typeof t[t.length - 1] == "function") {
    const g = t.length - 1;
    t[g] = At.from(t[g]);
  }
  for (let g = 0; g < t.length; ++g)
    if (!(!xt(t[g]) && !pr(t[g]))) {
      if (g < t.length - 1 && !(Tn(t[g]) || $n(t[g]) || Xe(t[g])))
        throw new Fn(`streams[${g}]`, i[g], "must be readable");
      if (g > 0 && !(Bn(t[g]) || Nn(t[g]) || Xe(t[g])))
        throw new Fn(`streams[${g}]`, i[g], "must be writable");
    }
  let l, c, d, p, u;
  function R(g) {
    const F = p;
    p = null, F ? F(g) : g ? u.destroy(g) : !E && !B && u.destroy();
  }
  const _ = t[0], m = Wa(t, R), B = !!(Bn(_) || Nn(_) || Xe(_)), E = !!(Tn(m) || $n(m) || Xe(m));
  if (u = new At({
    // TODO (ronag): highWaterMark?
    writableObjectMode: !!(_ != null && _.writableObjectMode),
    readableObjectMode: !!(m != null && m.readableObjectMode),
    writable: B,
    readable: E
  }), B) {
    if (xt(_))
      u._write = function(F, A, D) {
        _.write(F, A) ? D() : l = D;
      }, u._final = function(F) {
        _.end(), c = F;
      }, _.on("drain", function() {
        if (l) {
          const F = l;
          l = null, F();
        }
      });
    else if (pr(_)) {
      const A = (Xe(_) ? _.writable : _).getWriter();
      u._write = async function(D, O, U) {
        try {
          await A.ready, A.write(D).catch(() => {
          }), U();
        } catch (I) {
          U(I);
        }
      }, u._final = async function(D) {
        try {
          await A.ready, A.close().catch(() => {
          }), c = D;
        } catch (O) {
          D(O);
        }
      };
    }
    const g = Xe(m) ? m.readable : m;
    Va(g, () => {
      if (c) {
        const F = c;
        c = null, F();
      }
    });
  }
  if (E) {
    if (xt(m))
      m.on("readable", function() {
        if (d) {
          const g = d;
          d = null, g();
        }
      }), m.on("end", function() {
        u.push(null);
      }), u._read = function() {
        for (; ; ) {
          const g = m.read();
          if (g === null) {
            d = u._read;
            return;
          }
          if (!u.push(g))
            return;
        }
      };
    else if (pr(m)) {
      const F = (Xe(m) ? m.readable : m).getReader();
      u._read = async function() {
        for (; ; )
          try {
            const { value: A, done: D } = await F.read();
            if (!u.push(A))
              return;
            if (D) {
              u.push(null);
              return;
            }
          } catch {
            return;
          }
      };
    }
  }
  return u._destroy = function(g, F) {
    !g && p !== null && (g = new ja()), d = null, l = null, c = null, p === null ? F(g) : (p = F, xt(m) && va(m, g));
  }, u;
};
const Ha = globalThis.AbortController || gt().AbortController, {
  codes: { ERR_INVALID_ARG_VALUE: qa, ERR_INVALID_ARG_TYPE: St, ERR_MISSING_ARGS: Ya, ERR_OUT_OF_RANGE: za },
  AbortError: De
} = Ee, { validateAbortSignal: nt, validateInteger: Dn, validateObject: it } = _t, Ka = ue.Symbol("kWeak"), Xa = ue.Symbol("kResistStopPropagation"), { finished: Ja } = qe, Qa = Fi, { addAbortSignalNoValidate: Za } = Wt, { isWritable: ef, isNodeStream: tf } = Ve, { deprecate: rf } = ge, {
  ArrayPrototypePush: nf,
  Boolean: of,
  MathFloor: Ln,
  Number: lf,
  NumberIsNaN: af,
  Promise: Mn,
  PromiseReject: kn,
  PromiseResolve: ff,
  PromisePrototypeThen: Cn,
  Symbol: Di
} = ue, $t = Di("kEmpty"), Pn = Di("kEof");
function sf(e, t) {
  if (t != null && it(t, "options"), (t == null ? void 0 : t.signal) != null && nt(t.signal, "options.signal"), tf(e) && !ef(e))
    throw new qa("stream", e, "must be writable");
  const i = Qa(this, e);
  return t != null && t.signal && Za(t.signal, i), i;
}
function Gt(e, t) {
  if (typeof e != "function")
    throw new St("fn", ["Function", "AsyncFunction"], e);
  t != null && it(t, "options"), (t == null ? void 0 : t.signal) != null && nt(t.signal, "options.signal");
  let i = 1;
  (t == null ? void 0 : t.concurrency) != null && (i = Ln(t.concurrency));
  let l = i - 1;
  return (t == null ? void 0 : t.highWaterMark) != null && (l = Ln(t.highWaterMark)), Dn(i, "options.concurrency", 1), Dn(l, "options.highWaterMark", 0), l += i, (async function* () {
    const d = ge.AbortSignalAny(
      [t == null ? void 0 : t.signal].filter(of)
    ), p = this, u = [], R = {
      signal: d
    };
    let _, m, B = !1, E = 0;
    function g() {
      B = !0, F();
    }
    function F() {
      E -= 1, A();
    }
    function A() {
      m && !B && E < i && u.length < l && (m(), m = null);
    }
    async function D() {
      try {
        for await (let O of p) {
          if (B)
            return;
          if (d.aborted)
            throw new De();
          try {
            if (O = e(O, R), O === $t)
              continue;
            O = ff(O);
          } catch (U) {
            O = kn(U);
          }
          E += 1, Cn(O, F, g), u.push(O), _ && (_(), _ = null), !B && (u.length >= l || E >= i) && await new Mn((U) => {
            m = U;
          });
        }
        u.push(Pn);
      } catch (O) {
        const U = kn(O);
        Cn(U, F, g), u.push(U);
      } finally {
        B = !0, _ && (_(), _ = null);
      }
    }
    D();
    try {
      for (; ; ) {
        for (; u.length > 0; ) {
          const O = await u[0];
          if (O === Pn)
            return;
          if (d.aborted)
            throw new De();
          O !== $t && (yield O), u.shift(), A();
        }
        await new Mn((O) => {
          _ = O;
        });
      }
    } finally {
      B = !0, m && (m(), m = null);
    }
  }).call(this);
}
function uf(e = void 0) {
  return e != null && it(e, "options"), (e == null ? void 0 : e.signal) != null && nt(e.signal, "options.signal"), (async function* () {
    let i = 0;
    for await (const c of this) {
      var l;
      if (e != null && (l = e.signal) !== null && l !== void 0 && l.aborted)
        throw new De({
          cause: e.signal.reason
        });
      yield [i++, c];
    }
  }).call(this);
}
async function Li(e, t = void 0) {
  for await (const i of jr.call(this, e, t))
    return !0;
  return !1;
}
async function cf(e, t = void 0) {
  if (typeof e != "function")
    throw new St("fn", ["Function", "AsyncFunction"], e);
  return !await Li.call(
    this,
    async (...i) => !await e(...i),
    t
  );
}
async function df(e, t) {
  for await (const i of jr.call(this, e, t))
    return i;
}
async function hf(e, t) {
  if (typeof e != "function")
    throw new St("fn", ["Function", "AsyncFunction"], e);
  async function i(l, c) {
    return await e(l, c), $t;
  }
  for await (const l of Gt.call(this, i, t)) ;
}
function jr(e, t) {
  if (typeof e != "function")
    throw new St("fn", ["Function", "AsyncFunction"], e);
  async function i(l, c) {
    return await e(l, c) ? l : $t;
  }
  return Gt.call(this, i, t);
}
class pf extends Ya {
  constructor() {
    super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
  }
}
async function bf(e, t, i) {
  var l;
  if (typeof e != "function")
    throw new St("reducer", ["Function", "AsyncFunction"], e);
  i != null && it(i, "options"), (i == null ? void 0 : i.signal) != null && nt(i.signal, "options.signal");
  let c = arguments.length > 1;
  if (i != null && (l = i.signal) !== null && l !== void 0 && l.aborted) {
    const _ = new De(void 0, {
      cause: i.signal.reason
    });
    throw this.once("error", () => {
    }), await Ja(this.destroy(_)), _;
  }
  const d = new Ha(), p = d.signal;
  if (i != null && i.signal) {
    const _ = {
      once: !0,
      [Ka]: this,
      [Xa]: !0
    };
    i.signal.addEventListener("abort", () => d.abort(), _);
  }
  let u = !1;
  try {
    for await (const _ of this) {
      var R;
      if (u = !0, i != null && (R = i.signal) !== null && R !== void 0 && R.aborted)
        throw new De();
      c ? t = await e(t, _, {
        signal: p
      }) : (t = _, c = !0);
    }
    if (!u && !c)
      throw new pf();
  } finally {
    d.abort();
  }
  return t;
}
async function yf(e) {
  e != null && it(e, "options"), (e == null ? void 0 : e.signal) != null && nt(e.signal, "options.signal");
  const t = [];
  for await (const l of this) {
    var i;
    if (e != null && (i = e.signal) !== null && i !== void 0 && i.aborted)
      throw new De(void 0, {
        cause: e.signal.reason
      });
    nf(t, l);
  }
  return t;
}
function wf(e, t) {
  const i = Gt.call(this, e, t);
  return (async function* () {
    for await (const c of i)
      yield* c;
  }).call(this);
}
function Mi(e) {
  if (e = lf(e), af(e))
    return 0;
  if (e < 0)
    throw new za("number", ">= 0", e);
  return e;
}
function gf(e, t = void 0) {
  return t != null && it(t, "options"), (t == null ? void 0 : t.signal) != null && nt(t.signal, "options.signal"), e = Mi(e), (async function* () {
    var l;
    if (t != null && (l = t.signal) !== null && l !== void 0 && l.aborted)
      throw new De();
    for await (const d of this) {
      var c;
      if (t != null && (c = t.signal) !== null && c !== void 0 && c.aborted)
        throw new De();
      e-- <= 0 && (yield d);
    }
  }).call(this);
}
function _f(e, t = void 0) {
  return t != null && it(t, "options"), (t == null ? void 0 : t.signal) != null && nt(t.signal, "options.signal"), e = Mi(e), (async function* () {
    var l;
    if (t != null && (l = t.signal) !== null && l !== void 0 && l.aborted)
      throw new De();
    for await (const d of this) {
      var c;
      if (t != null && (c = t.signal) !== null && c !== void 0 && c.aborted)
        throw new De();
      if (e-- > 0 && (yield d), e <= 0)
        return;
    }
  }).call(this);
}
Fr.streamReturningOperators = {
  asIndexedPairs: rf(uf, "readable.asIndexedPairs will be removed in a future version."),
  drop: gf,
  filter: jr,
  flatMap: wf,
  map: Gt,
  take: _f,
  compose: sf
};
Fr.promiseReturningOperators = {
  every: cf,
  forEach: hf,
  reduce: bf,
  toArray: yf,
  some: Li,
  find: df
};
var br, On;
function ki() {
  if (On) return br;
  On = 1;
  const { ArrayPrototypePop: e, Promise: t } = ue, { isIterable: i, isNodeStream: l, isWebStream: c } = Ve, { pipelineImpl: d } = vr, { finished: p } = qe;
  Ci();
  function u(...R) {
    return new t((_, m) => {
      let B, E;
      const g = R[R.length - 1];
      if (g && typeof g == "object" && !l(g) && !i(g) && !c(g)) {
        const F = e(R);
        B = F.signal, E = F.end;
      }
      d(
        R,
        (F, A) => {
          F ? m(F) : _(A);
        },
        {
          signal: B,
          end: E
        }
      );
    });
  }
  return br = {
    finished: p,
    pipeline: u
  }, br;
}
var Un;
function Ci() {
  if (Un) return Xt.exports;
  Un = 1;
  const { Buffer: e } = je, { ObjectDefineProperty: t, ObjectKeys: i, ReflectApply: l } = ue, {
    promisify: { custom: c }
  } = ge, { streamReturningOperators: d, promiseReturningOperators: p } = Fr, {
    codes: { ERR_ILLEGAL_CONSTRUCTOR: u }
  } = Ee, R = Fi, { setDefaultHighWaterMark: _, getDefaultHighWaterMark: m } = vt, { pipeline: B } = vr, { destroyer: E } = dt, g = qe, F = ki(), A = Ve, D = Xt.exports = Cr.Stream;
  D.isDestroyed = A.isDestroyed, D.isDisturbed = A.isDisturbed, D.isErrored = A.isErrored, D.isReadable = A.isReadable, D.isWritable = A.isWritable, D.Readable = jt();
  for (const U of i(d)) {
    let K = function(...v) {
      if (new.target)
        throw u();
      return D.Readable.from(l(I, this, v));
    };
    const I = d[U];
    t(K, "name", {
      __proto__: null,
      value: I.name
    }), t(K, "length", {
      __proto__: null,
      value: I.length
    }), t(D.Readable.prototype, U, {
      __proto__: null,
      value: K,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  for (const U of i(p)) {
    let K = function(...v) {
      if (new.target)
        throw u();
      return l(I, this, v);
    };
    const I = p[U];
    t(K, "name", {
      __proto__: null,
      value: I.name
    }), t(K, "length", {
      __proto__: null,
      value: I.length
    }), t(D.Readable.prototype, U, {
      __proto__: null,
      value: K,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  D.Writable = Or(), D.Duplex = We(), D.Transform = Ti, D.PassThrough = Ni, D.pipeline = B;
  const { addAbortSignal: O } = Wt;
  return D.addAbortSignal = O, D.finished = g, D.destroy = E, D.compose = R, D.setDefaultHighWaterMark = _, D.getDefaultHighWaterMark = m, t(D, "promises", {
    __proto__: null,
    configurable: !0,
    enumerable: !0,
    get() {
      return F;
    }
  }), t(B, c, {
    __proto__: null,
    enumerable: !0,
    get() {
      return F.pipeline;
    }
  }), t(g, c, {
    __proto__: null,
    enumerable: !0,
    get() {
      return F.finished;
    }
  }), D.Stream = D, D._isUint8Array = function(I) {
    return I instanceof Uint8Array;
  }, D._uint8ArrayToBuffer = function(I) {
    return e.from(I.buffer, I.byteOffset, I.byteLength);
  }, Xt.exports;
}
(function(e) {
  const t = Ci(), i = ki(), l = t.Readable.destroy;
  e.exports = t.Readable, e.exports._uint8ArrayToBuffer = t._uint8ArrayToBuffer, e.exports._isUint8Array = t._isUint8Array, e.exports.isDisturbed = t.isDisturbed, e.exports.isErrored = t.isErrored, e.exports.isReadable = t.isReadable, e.exports.Readable = t.Readable, e.exports.Writable = t.Writable, e.exports.Duplex = t.Duplex, e.exports.Transform = t.Transform, e.exports.PassThrough = t.PassThrough, e.exports.addAbortSignal = t.addAbortSignal, e.exports.finished = t.finished, e.exports.destroy = t.destroy, e.exports.destroy = l, e.exports.pipeline = t.pipeline, e.exports.compose = t.compose, Object.defineProperty(t, "promises", {
    configurable: !0,
    enumerable: !0,
    get() {
      return i;
    }
  }), e.exports.Stream = t.Stream, e.exports.default = e.exports;
})(Wn);
var Af = Wn.exports;
export {
  Af as b
};
