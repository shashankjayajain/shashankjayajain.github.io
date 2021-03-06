var irma = function (t) {
    function e(e) {
        for (var n, o, i = e[0], a = e[1], s = 0, c = []; s < i.length; s++) o = i[s], r[o] && c.push(r[o][0]), r[o] = 0;
        for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
        for (u && u(e); c.length;) c.shift()()
    }

    var n = {}, r = {1: 0};

    function o(e) {
        if (n[e]) return n[e].exports;
        var r = n[e] = {i: e, l: !1, exports: {}};
        return t[e].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }

    o.e = function (t) {
        var e = [], n = r[t];
        if (0 !== n) if (n) e.push(n[2]); else {
            var i = new Promise(function (e, o) {
                n = r[t] = [e, o]
            });
            e.push(n[2] = i);
            var a, s = document.getElementsByTagName("head")[0], u = document.createElement("script");
            u.charset = "utf-8", u.timeout = 120, o.nc && u.setAttribute("nonce", o.nc), u.src = function (t) {
                return o.p + "" + ({0: "jwt", 2: "vendors~jwt"}[t] || t) + ".js"
            }(t), a = function (e) {
                u.onerror = u.onload = null, clearTimeout(c);
                var n = r[t];
                if (0 !== n) {
                    if (n) {
                        var o = e && ("load" === e.type ? "missing" : e.type), i = e && e.target && e.target.src,
                            a = new Error("Loading chunk " + t + " failed.\n(" + o + ": " + i + ")");
                        a.type = o, a.request = i, n[1](a)
                    }
                    r[t] = void 0
                }
            };
            var c = setTimeout(function () {
                a({type: "timeout", target: u})
            }, 12e4);
            u.onerror = u.onload = a, s.appendChild(u)
        }
        return Promise.all(e)
    }, o.m = t, o.c = n, o.d = function (t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, o.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var r in t) o.d(n, r, function (e) {
            return t[e]
        }.bind(null, r));
        return n
    }, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "", o.oe = function (t) {
        throw console.error(t), t
    };
    var i = window.webpackJsonpirma = window.webpackJsonpirma || [], a = i.push.bind(i);
    i.push = e, i = i.slice();
    for (var s = 0; s < i.length; s++) e(i[s]);
    var u = a;
    return o(o.s = 47)
}([function (t, e) {
    var n,
        r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
    e.getSymbolSize = function (t) {
        if (!t) throw new Error('"version" cannot be null or undefined');
        if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
        return 4 * t + 17
    }, e.getSymbolTotalCodewords = function (t) {
        return r[t]
    }, e.getBCHDigit = function (t) {
        for (var e = 0; 0 !== t;) e++, t >>>= 1;
        return e
    }, e.setToSJISFunction = function (t) {
        if ("function" != typeof t) throw new Error('"toSJISFunc" is not a valid function.');
        n = t
    }, e.isKanjiModeEnabled = function () {
        return void 0 !== n
    }, e.toSJIS = function (t) {
        return n(t)
    }
}, function (t, e, n) {
    var r = n(9), o = n(10);
    e.NUMERIC = {id: "Numeric", bit: 1, ccBits: [10, 12, 14]}, e.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 2,
        ccBits: [9, 11, 13]
    }, e.BYTE = {id: "Byte", bit: 4, ccBits: [8, 16, 16]}, e.KANJI = {
        id: "Kanji",
        bit: 8,
        ccBits: [8, 10, 12]
    }, e.MIXED = {bit: -1}, e.getCharCountIndicator = function (t, e) {
        if (!t.ccBits) throw new Error("Invalid mode: " + t);
        if (!r.isValid(e)) throw new Error("Invalid version: " + e);
        return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2]
    }, e.getBestModeForData = function (t) {
        return o.testNumeric(t) ? e.NUMERIC : o.testAlphanumeric(t) ? e.ALPHANUMERIC : o.testKanji(t) ? e.KANJI : e.BYTE
    }, e.toString = function (t) {
        if (t && t.id) return t.id;
        throw new Error("Invalid mode")
    }, e.isValid = function (t) {
        return t && t.bit && t.ccBits
    }, e.from = function (t, n) {
        if (e.isValid(t)) return t;
        try {
            return function (t) {
                if ("string" != typeof t) throw new Error("Param is not a string");
                switch (t.toLowerCase()) {
                    case"numeric":
                        return e.NUMERIC;
                    case"alphanumeric":
                        return e.ALPHANUMERIC;
                    case"kanji":
                        return e.KANJI;
                    case"byte":
                        return e.BYTE;
                    default:
                        throw new Error("Unknown mode: " + t)
                }
            }(t)
        } catch (t) {
            return n
        }
    }
}, function (t, e, n) {
    "use strict";
    var r = n(3);
    i.TYPED_ARRAY_SUPPORT = function () {
        try {
            var t = new Uint8Array(1);
            return t.__proto__ = {
                __proto__: Uint8Array.prototype, foo: function () {
                    return 42
                }
            }, 42 === t.foo()
        } catch (t) {
            return !1
        }
    }();
    var o = i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

    function i(t, e, n) {
        return i.TYPED_ARRAY_SUPPORT || this instanceof i ? "number" == typeof t ? u(this, t) : function (t, e, n, r) {
            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
            if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer) return function (t, e, n, r) {
                if (n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                var o;
                o = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
                i.TYPED_ARRAY_SUPPORT ? o.__proto__ = i.prototype : o = c(t, o);
                return o
            }(t, e, n, r);
            if ("string" == typeof e) return function (t, e) {
                var n = 0 | l(e), r = s(t, n), o = r.write(e);
                o !== n && (r = r.slice(0, o));
                return r
            }(t, e);
            return function (t, e) {
                if (i.isBuffer(e)) {
                    var n = 0 | a(e.length), r = s(t, n);
                    return 0 === r.length ? r : (e.copy(r, 0, 0, n), r)
                }
                if (e) {
                    if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || function (t) {
                        return t != t
                    }(e.length) ? s(t, 0) : c(t, e);
                    if ("Buffer" === e.type && Array.isArray(e.data)) return c(t, e.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(t, e)
        }(this, t, e, n) : new i(t, e, n)
    }

    function a(t) {
        if (t >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
        return 0 | t
    }

    function s(t, e) {
        var n;
        return i.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(e)).__proto__ = i.prototype : (null === (n = t) && (n = new i(e)), n.length = e), n
    }

    function u(t, e) {
        var n = s(t, e < 0 ? 0 : 0 | a(e));
        if (!i.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) n[r] = 0;
        return n
    }

    function c(t, e) {
        for (var n = e.length < 0 ? 0 : 0 | a(e.length), r = s(t, n), o = 0; o < n; o += 1) r[o] = 255 & e[o];
        return r
    }

    function f(t, e) {
        var n;
        e = e || 1 / 0;
        for (var r = t.length, o = null, i = [], a = 0; a < r; ++a) {
            if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
                if (!o) {
                    if (n > 56319) {
                        (e -= 3) > -1 && i.push(239, 191, 189);
                        continue
                    }
                    if (a + 1 === r) {
                        (e -= 3) > -1 && i.push(239, 191, 189);
                        continue
                    }
                    o = n;
                    continue
                }
                if (n < 56320) {
                    (e -= 3) > -1 && i.push(239, 191, 189), o = n;
                    continue
                }
                n = 65536 + (o - 55296 << 10 | n - 56320)
            } else o && (e -= 3) > -1 && i.push(239, 191, 189);
            if (o = null, n < 128) {
                if ((e -= 1) < 0) break;
                i.push(n)
            } else if (n < 2048) {
                if ((e -= 2) < 0) break;
                i.push(n >> 6 | 192, 63 & n | 128)
            } else if (n < 65536) {
                if ((e -= 3) < 0) break;
                i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
            } else {
                if (!(n < 1114112)) throw new Error("Invalid code point");
                if ((e -= 4) < 0) break;
                i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
            }
        }
        return i
    }

    function l(t) {
        return i.isBuffer(t) ? t.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer) ? t.byteLength : ("string" != typeof t && (t = "" + t), 0 === t.length ? 0 : f(t).length)
    }

    i.TYPED_ARRAY_SUPPORT && (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, {
        value: null,
        configurable: !0,
        enumerable: !1,
        writable: !1
    })), i.prototype.write = function (t, e, n) {
        void 0 === e ? (n = this.length, e = 0) : void 0 === n && "string" == typeof e ? (n = this.length, e = 0) : isFinite(e) && (e |= 0, isFinite(n) ? n |= 0 : n = void 0);
        var r = this.length - e;
        if ((void 0 === n || n > r) && (n = r), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        return function (t, e, n, r) {
            return function (t, e, n, r) {
                for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
                return o
            }(f(e, t.length - n), t, n, r)
        }(this, t, e, n)
    }, i.prototype.slice = function (t, e) {
        var n, r = this.length;
        if (t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), i.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e)).__proto__ = i.prototype; else {
            var o = e - t;
            n = new i(o, void 0);
            for (var a = 0; a < o; ++a) n[a] = this[a + t]
        }
        return n
    }, i.prototype.copy = function (t, e, n, r) {
        if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
        if (0 === t.length || 0 === this.length) return 0;
        if (e < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
        if (r < 0) throw new RangeError("sourceEnd out of bounds");
        r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
        var o, a = r - n;
        if (this === t && n < e && e < r) for (o = a - 1; o >= 0; --o) t[o + e] = this[o + n]; else if (a < 1e3 || !i.TYPED_ARRAY_SUPPORT) for (o = 0; o < a; ++o) t[o + e] = this[o + n]; else Uint8Array.prototype.set.call(t, this.subarray(n, n + a), e);
        return a
    }, i.prototype.fill = function (t, e, n) {
        if ("string" == typeof t) {
            if ("string" == typeof e ? (e = 0, n = this.length) : "string" == typeof n && (n = this.length), 1 === t.length) {
                var r = t.charCodeAt(0);
                r < 256 && (t = r)
            }
        } else "number" == typeof t && (t &= 255);
        if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
        if (n <= e) return this;
        var o;
        if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t) for (o = e; o < n; ++o) this[o] = t; else {
            var a = i.isBuffer(t) ? t : new i(t), s = a.length;
            for (o = 0; o < n - e; ++o) this[o + e] = a[o % s]
        }
        return this
    }, i.concat = function (t, e) {
        if (!r(t)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === t.length) return s(null, 0);
        var n;
        if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
        var o = u(null, e), a = 0;
        for (n = 0; n < t.length; ++n) {
            var c = t[n];
            if (!i.isBuffer(c)) throw new TypeError('"list" argument must be an Array of Buffers');
            c.copy(o, a), a += c.length
        }
        return o
    }, i.byteLength = l, i.prototype._isBuffer = !0, i.isBuffer = function (t) {
        return !(null == t || !t._isBuffer)
    }, t.exports = i
}, function (t, e) {
    var n = {}.toString;
    t.exports = Array.isArray || function (t) {
        return "[object Array]" == n.call(t)
    }
}, function (t, e) {
    e.L = {bit: 1}, e.M = {bit: 0}, e.Q = {bit: 3}, e.H = {bit: 2}, e.isValid = function (t) {
        return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4
    }, e.from = function (t, n) {
        if (e.isValid(t)) return t;
        try {
            return function (t) {
                if ("string" != typeof t) throw new Error("Param is not a string");
                switch (t.toLowerCase()) {
                    case"l":
                    case"low":
                        return e.L;
                    case"m":
                    case"medium":
                        return e.M;
                    case"q":
                    case"quartile":
                        return e.Q;
                    case"h":
                    case"high":
                        return e.H;
                    default:
                        throw new Error("Unknown EC Level: " + t)
                }
            }(t)
        } catch (t) {
            return n
        }
    }
}, function (t, e, n) {
    n(19), t.exports = self.fetch.bind(self)
}, function (t, e, n) {
    var r = n(20), o = n(22), i = n(39), a = n(40);

    function s(t, e, n, i, a) {
        var s = [].slice.call(arguments, 1), u = s.length, c = "function" == typeof s[u - 1];
        if (!c && !r()) throw new Error("Callback required as last argument");
        if (!c) {
            if (u < 1) throw new Error("Too few arguments provided");
            return 1 === u ? (n = e, e = i = void 0) : 2 !== u || e.getContext || (i = n, n = e, e = void 0), new Promise(function (r, a) {
                try {
                    var s = o.create(n, i);
                    r(t(s, e, i))
                } catch (t) {
                    a(t)
                }
            })
        }
        if (u < 2) throw new Error("Too few arguments provided");
        2 === u ? (a = n, n = e, e = i = void 0) : 3 === u && (e.getContext && void 0 === a ? (a = i, i = void 0) : (a = i, i = n, n = e, e = void 0));
        try {
            var f = o.create(n, i);
            a(null, t(f, e, i))
        } catch (t) {
            a(t)
        }
    }

    e.create = o.create, e.toCanvas = s.bind(null, i.render), e.toDataURL = s.bind(null, i.renderToDataURL), e.toString = s.bind(null, function (t, e, n) {
        return a.render(t, n)
    })
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e, n) {
    var r = n(4),
        o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
        i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
    e.getBlocksCount = function (t, e) {
        switch (e) {
            case r.L:
                return o[4 * (t - 1) + 0];
            case r.M:
                return o[4 * (t - 1) + 1];
            case r.Q:
                return o[4 * (t - 1) + 2];
            case r.H:
                return o[4 * (t - 1) + 3];
            default:
                return
        }
    }, e.getTotalCodewordsCount = function (t, e) {
        switch (e) {
            case r.L:
                return i[4 * (t - 1) + 0];
            case r.M:
                return i[4 * (t - 1) + 1];
            case r.Q:
                return i[4 * (t - 1) + 2];
            case r.H:
                return i[4 * (t - 1) + 3];
            default:
                return
        }
    }
}, function (t, e) {
    e.isValid = function (t) {
        return !isNaN(t) && t >= 1 && t <= 40
    }
}, function (t, e) {
    var n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        r = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
    e.KANJI = new RegExp(n, "g"), e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), e.BYTE = new RegExp(r, "g"), e.NUMERIC = new RegExp("[0-9]+", "g"), e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
    var o = new RegExp("^" + n + "$"), i = new RegExp("^[0-9]+$"), a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    e.testKanji = function (t) {
        return o.test(t)
    }, e.testNumeric = function (t) {
        return i.test(t)
    }, e.testAlphanumeric = function (t) {
        return a.test(t)
    }
}, function (t, e) {
    function n(t) {
        if ("string" != typeof t) throw new Error("Color should be defined as hex string");
        var e = t.slice().replace("#", "").split("");
        if (e.length < 3 || 5 === e.length || e.length > 8) throw new Error("Invalid hex color: " + t);
        3 !== e.length && 4 !== e.length || (e = Array.prototype.concat.apply([], e.map(function (t) {
            return [t, t]
        }))), 6 === e.length && e.push("F", "F");
        var n = parseInt(e.join(""), 16);
        return {r: n >> 24 & 255, g: n >> 16 & 255, b: n >> 8 & 255, a: 255 & n, hex: "#" + e.slice(0, 6).join("")}
    }

    e.getOptions = function (t) {
        t || (t = {}), t.color || (t.color = {});
        var e = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
            r = t.width && t.width >= 21 ? t.width : void 0, o = t.scale || 4;
        return {
            width: r,
            scale: r ? 4 : o,
            margin: e,
            color: {dark: n(t.color.dark || "#000000ff"), light: n(t.color.light || "#ffffffff")},
            type: t.type,
            rendererOpts: t.rendererOpts || {}
        }
    }, e.getScale = function (t, e) {
        return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale
    }, e.getImageWidth = function (t, n) {
        var r = e.getScale(t, n);
        return Math.floor((t + 2 * n.margin) * r)
    }, e.qrToImageData = function (t, n, r) {
        for (var o = n.modules.size, i = n.modules.data, a = e.getScale(o, r), s = Math.floor((o + 2 * r.margin) * a), u = r.margin * a, c = [r.color.light, r.color.dark], f = 0; f < s; f++) for (var l = 0; l < s; l++) {
            var h = 4 * (f * s + l), d = r.color.light;
            if (f >= u && l >= u && f < s - u && l < s - u) d = c[i[Math.floor((f - u) / a) * o + Math.floor((l - u) / a)] ? 1 : 0];
            t[h++] = d.r, t[h++] = d.g, t[h++] = d.b, t[h] = d.a
        }
    }
}, function (t, e) {
    t.exports = "data:image/png;base64,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"
}, function (t, e, n) {
    t.exports = "  <div class='irma-dialog'>\n    <div class='modal-content'>\n      <div class='modal-body'>\n        <div class='irma-page'>\n          <div class='irma-content'>\n            <img src='" + n(46) + "' class='irma-logo-top' alt='IRMA logo' id='irma-logo' />\n            <div class='irma-title' id='irma-title'>Disclose attributes</div>\n            <p id='irma-text'>A website requested that you disclose some IRMA attributes. Please scan the QR code with your phone.</p>\n            <div class='irma-option-container'>\n              <canvas id='modal-irmaqr' class='irma-option-box'></canvas>\n            </div>\n          </div>\n          <div class='irma-button-box'>\n            <button class='irma-button' id='irma-cancel-button'>Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n"
}, function (t, e) {
    var n, r, o = t.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }

    !function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
            r = a
        }
    }();
    var u, c = [], f = !1, l = -1;

    function h() {
        f && u && (f = !1, u.length ? c = u.concat(c) : l = -1, c.length && d())
    }

    function d() {
        if (!f) {
            var t = s(h);
            f = !0;
            for (var e = c.length; e;) {
                for (u = c, c = []; ++l < e;) u && u[l].run();
                l = -1, e = c.length
            }
            u = null, f = !1, function (t) {
                if (r === clearTimeout) return clearTimeout(t);
                if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                try {
                    r(t)
                } catch (e) {
                    try {
                        return r.call(null, t)
                    } catch (e) {
                        return r.call(this, t)
                    }
                }
            }(t)
        }
    }

    function p(t, e) {
        this.fun = t, this.array = e
    }

    function g() {
    }

    o.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new p(t, e)), 1 !== c.length || f || s(d)
    }, p.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = g, o.addListener = g, o.once = g, o.off = g, o.removeListener = g, o.removeAllListeners = g, o.emit = g, o.prependListener = g, o.prependOnceListener = g, o.listeners = function (t) {
        return []
    }, o.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function () {
        return "/"
    }, o.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function () {
        return 0
    }
}, function (t, e, n) {
    (function (e, n) {
        /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */
        !function (e, n) {
            t.exports = n()
        }(0, function () {
            "use strict";

            function t(t) {
                return "function" == typeof t
            }

            var r = Array.isArray ? Array.isArray : function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }, o = 0, i = void 0, a = void 0, s = function (t, e) {
                p[o] = t, p[o + 1] = e, 2 === (o += 2) && (a ? a(g) : A())
            };
            var u = "undefined" != typeof window ? window : void 0, c = u || {},
                f = c.MutationObserver || c.WebKitMutationObserver,
                l = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
                h = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

            function d() {
                var t = setTimeout;
                return function () {
                    return t(g, 1)
                }
            }

            var p = new Array(1e3);

            function g() {
                for (var t = 0; t < o; t += 2) {
                    (0, p[t])(p[t + 1]), p[t] = void 0, p[t + 1] = void 0
                }
                o = 0
            }

            var A = void 0;

            function v(t, e) {
                var n = this, r = new this.constructor(y);
                void 0 === r[m] && D(r);
                var o = n._state;
                if (o) {
                    var i = arguments[o - 1];
                    s(function () {
                        return M(o, r, i, n._result)
                    })
                } else S(n, r, t, e);
                return r
            }

            function w(t) {
                if (t && "object" == typeof t && t.constructor === this) return t;
                var e = new this(y);
                return I(e, t), e
            }

            A = l ? function () {
                return e.nextTick(g)
            } : f ? function () {
                var t = 0, e = new f(g), n = document.createTextNode("");
                return e.observe(n, {characterData: !0}), function () {
                    n.data = t = ++t % 2
                }
            }() : h ? function () {
                var t = new MessageChannel;
                return t.port1.onmessage = g, function () {
                    return t.port2.postMessage(0)
                }
            }() : void 0 === u ? function () {
                try {
                    var t = Function("return this")().require("vertx");
                    return void 0 !== (i = t.runOnLoop || t.runOnContext) ? function () {
                        i(g)
                    } : d()
                } catch (t) {
                    return d()
                }
            }() : d();
            var m = Math.random().toString(36).substring(2);

            function y() {
            }

            var b = void 0, E = 1, R = 2, C = {error: null};

            function B(t) {
                try {
                    return t.then
                } catch (t) {
                    return C.error = t, C
                }
            }

            function x(e, n, r) {
                n.constructor === e.constructor && r === v && n.constructor.resolve === w ? function (t, e) {
                    e._state === E ? T(t, e._result) : e._state === R ? P(t, e._result) : S(e, void 0, function (e) {
                        return I(t, e)
                    }, function (e) {
                        return P(t, e)
                    })
                }(e, n) : r === C ? (P(e, C.error), C.error = null) : void 0 === r ? T(e, n) : t(r) ? function (t, e, n) {
                    s(function (t) {
                        var r = !1, o = function (t, e, n, r) {
                            try {
                                t.call(e, n, r)
                            } catch (t) {
                                return t
                            }
                        }(n, e, function (n) {
                            r || (r = !0, e !== n ? I(t, n) : T(t, n))
                        }, function (e) {
                            r || (r = !0, P(t, e))
                        }, t._label);
                        !r && o && (r = !0, P(t, o))
                    }, t)
                }(e, n, r) : T(e, n)
            }

            function I(t, e) {
                t === e ? P(t, new TypeError("You cannot resolve a promise with itself")) : !function (t) {
                    var e = typeof t;
                    return null !== t && ("object" === e || "function" === e)
                }(e) ? T(t, e) : x(t, e, B(e))
            }

            function O(t) {
                t._onerror && t._onerror(t._result), U(t)
            }

            function T(t, e) {
                t._state === b && (t._result = e, t._state = E, 0 !== t._subscribers.length && s(U, t))
            }

            function P(t, e) {
                t._state === b && (t._state = R, t._result = e, s(O, t))
            }

            function S(t, e, n, r) {
                var o = t._subscribers, i = o.length;
                t._onerror = null, o[i] = e, o[i + E] = n, o[i + R] = r, 0 === i && t._state && s(U, t)
            }

            function U(t) {
                var e = t._subscribers, n = t._state;
                if (0 !== e.length) {
                    for (var r = void 0, o = void 0, i = t._result, a = 0; a < e.length; a += 3) r = e[a], o = e[a + n], r ? M(n, r, o, i) : o(i);
                    t._subscribers.length = 0
                }
            }

            function M(e, n, r, o) {
                var i = t(r), a = void 0, s = void 0, u = void 0, c = void 0;
                if (i) {
                    if ((a = function (t, e) {
                        try {
                            return t(e)
                        } catch (t) {
                            return C.error = t, C
                        }
                    }(r, o)) === C ? (c = !0, s = a.error, a.error = null) : u = !0, n === a) return void P(n, new TypeError("A promises callback cannot return that same promise."))
                } else a = o, u = !0;
                n._state !== b || (i && u ? I(n, a) : c ? P(n, s) : e === E ? T(n, a) : e === R && P(n, a))
            }

            var j = 0;

            function D(t) {
                t[m] = j++, t._state = void 0, t._result = void 0, t._subscribers = []
            }

            var Y = function () {
                function t(t, e) {
                    this._instanceConstructor = t, this.promise = new t(y), this.promise[m] || D(this.promise), r(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? T(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && T(this.promise, this._result))) : P(this.promise, new Error("Array Methods must be provided an Array"))
                }

                return t.prototype._enumerate = function (t) {
                    for (var e = 0; this._state === b && e < t.length; e++) this._eachEntry(t[e], e)
                }, t.prototype._eachEntry = function (t, e) {
                    var n = this._instanceConstructor, r = n.resolve;
                    if (r === w) {
                        var o = B(t);
                        if (o === v && t._state !== b) this._settledAt(t._state, e, t._result); else if ("function" != typeof o) this._remaining--, this._result[e] = t; else if (n === L) {
                            var i = new n(y);
                            x(i, t, o), this._willSettleAt(i, e)
                        } else this._willSettleAt(new n(function (e) {
                            return e(t)
                        }), e)
                    } else this._willSettleAt(r(t), e)
                }, t.prototype._settledAt = function (t, e, n) {
                    var r = this.promise;
                    r._state === b && (this._remaining--, t === R ? P(r, n) : this._result[e] = n), 0 === this._remaining && T(r, this._result)
                }, t.prototype._willSettleAt = function (t, e) {
                    var n = this;
                    S(t, void 0, function (t) {
                        return n._settledAt(E, e, t)
                    }, function (t) {
                        return n._settledAt(R, e, t)
                    })
                }, t
            }();
            var L = function () {
                function e(t) {
                    this[m] = j++, this._result = this._state = void 0, this._subscribers = [], y !== t && ("function" != typeof t && function () {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }(), this instanceof e ? function (t, e) {
                        try {
                            e(function (e) {
                                I(t, e)
                            }, function (e) {
                                P(t, e)
                            })
                        } catch (e) {
                            P(t, e)
                        }
                    }(this, t) : function () {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }())
                }

                return e.prototype.catch = function (t) {
                    return this.then(null, t)
                }, e.prototype.finally = function (e) {
                    var n = this.constructor;
                    return t(e) ? this.then(function (t) {
                        return n.resolve(e()).then(function () {
                            return t
                        })
                    }, function (t) {
                        return n.resolve(e()).then(function () {
                            throw t
                        })
                    }) : this.then(e, e)
                }, e
            }();
            return L.prototype.then = v, L.all = function (t) {
                return new Y(this, t).promise
            }, L.race = function (t) {
                var e = this;
                return r(t) ? new e(function (n, r) {
                    for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r)
                }) : new e(function (t, e) {
                    return e(new TypeError("You must pass an array to race."))
                })
            }, L.resolve = w, L.reject = function (t) {
                var e = new this(y);
                return P(e, t), e
            }, L._setScheduler = function (t) {
                a = t
            }, L._setAsap = function (t) {
                s = t
            }, L._asap = s, L.polyfill = function () {
                var t = void 0;
                if (void 0 !== n) t = n; else if ("undefined" != typeof self) t = self; else try {
                    t = Function("return this")()
                } catch (t) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var e = t.Promise;
                if (e) {
                    var r = null;
                    try {
                        r = Object.prototype.toString.call(e.resolve())
                    } catch (t) {
                    }
                    if ("[object Promise]" === r && !e.cast) return
                }
                t.Promise = L
            }, L.Promise = L, L
        })
    }).call(this, n(14), n(7))
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object");
        for (var n = Object(t), r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            if (void 0 !== o && null !== o) for (var i = Object.keys(Object(o)), a = 0, s = i.length; a < s; a++) {
                var u = i[a], c = Object.getOwnPropertyDescriptor(o, u);
                void 0 !== c && c.enumerable && (n[u] = o[u])
            }
        }
        return n
    }

    t.exports = {
        assign: r, polyfill: function () {
            Object.assign || Object.defineProperty(Object, "assign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: r
            })
        }
    }
}, function (t, e) {
    t.exports = qrcode
}, function (t, e) {
    t.exports = EventSource
}, function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "Headers", function () {
        return c
    }), n.d(e, "Request", function () {
        return A
    }), n.d(e, "Response", function () {
        return w
    }), n.d(e, "DOMException", function () {
        return y
    }), n.d(e, "fetch", function () {
        return b
    });
    var r = {
        searchParams: "URLSearchParams" in self,
        iterable: "Symbol" in self && "iterator" in Symbol,
        blob: "FileReader" in self && "Blob" in self && function () {
            try {
                return new Blob, !0
            } catch (t) {
                return !1
            }
        }(),
        formData: "FormData" in self,
        arrayBuffer: "ArrayBuffer" in self
    };
    if (r.arrayBuffer) var o = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
        i = ArrayBuffer.isView || function (t) {
            return t && o.indexOf(Object.prototype.toString.call(t)) > -1
        };

    function a(t) {
        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
        return t.toLowerCase()
    }

    function s(t) {
        return "string" != typeof t && (t = String(t)), t
    }

    function u(t) {
        var e = {
            next: function () {
                var e = t.shift();
                return {done: void 0 === e, value: e}
            }
        };
        return r.iterable && (e[Symbol.iterator] = function () {
            return e
        }), e
    }

    function c(t) {
        this.map = {}, t instanceof c ? t.forEach(function (t, e) {
            this.append(e, t)
        }, this) : Array.isArray(t) ? t.forEach(function (t) {
            this.append(t[0], t[1])
        }, this) : t && Object.getOwnPropertyNames(t).forEach(function (e) {
            this.append(e, t[e])
        }, this)
    }

    function f(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0
    }

    function l(t) {
        return new Promise(function (e, n) {
            t.onload = function () {
                e(t.result)
            }, t.onerror = function () {
                n(t.error)
            }
        })
    }

    function h(t) {
        var e = new FileReader, n = l(e);
        return e.readAsArrayBuffer(t), n
    }

    function d(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer
    }

    function p() {
        return this.bodyUsed = !1, this._initBody = function (t) {
            this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : r.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : r.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : r.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : r.arrayBuffer && r.blob && function (t) {
                return t && DataView.prototype.isPrototypeOf(t)
            }(t) ? (this._bodyArrayBuffer = d(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : r.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || i(t)) ? this._bodyArrayBuffer = d(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, r.blob && (this.blob = function () {
            var t = f(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function () {
            return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(h)
        }), this.text = function () {
            var t = f(this);
            if (t) return t;
            if (this._bodyBlob) return function (t) {
                var e = new FileReader, n = l(e);
                return e.readAsText(t), n
            }(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(function (t) {
                for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]);
                return n.join("")
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, r.formData && (this.formData = function () {
            return this.text().then(v)
        }), this.json = function () {
            return this.text().then(JSON.parse)
        }, this
    }

    c.prototype.append = function (t, e) {
        t = a(t), e = s(e);
        var n = this.map[t];
        this.map[t] = n ? n + ", " + e : e
    }, c.prototype.delete = function (t) {
        delete this.map[a(t)]
    }, c.prototype.get = function (t) {
        return t = a(t), this.has(t) ? this.map[t] : null
    }, c.prototype.has = function (t) {
        return this.map.hasOwnProperty(a(t))
    }, c.prototype.set = function (t, e) {
        this.map[a(t)] = s(e)
    }, c.prototype.forEach = function (t, e) {
        for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
    }, c.prototype.keys = function () {
        var t = [];
        return this.forEach(function (e, n) {
            t.push(n)
        }), u(t)
    }, c.prototype.values = function () {
        var t = [];
        return this.forEach(function (e) {
            t.push(e)
        }), u(t)
    }, c.prototype.entries = function () {
        var t = [];
        return this.forEach(function (e, n) {
            t.push([n, e])
        }), u(t)
    }, r.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
    var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

    function A(t, e) {
        var n = (e = e || {}).body;
        if (t instanceof A) {
            if (t.bodyUsed) throw new TypeError("Already read");
            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new c(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0)
        } else this.url = String(t);
        if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new c(e.headers)), this.method = function (t) {
            var e = t.toUpperCase();
            return g.indexOf(e) > -1 ? e : t
        }(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(n)
    }

    function v(t) {
        var e = new FormData;
        return t.trim().split("&").forEach(function (t) {
            if (t) {
                var n = t.split("="), r = n.shift().replace(/\+/g, " "), o = n.join("=").replace(/\+/g, " ");
                e.append(decodeURIComponent(r), decodeURIComponent(o))
            }
        }), e
    }

    function w(t, e) {
        e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new c(e.headers), this.url = e.url || "", this._initBody(t)
    }

    A.prototype.clone = function () {
        return new A(this, {body: this._bodyInit})
    }, p.call(A.prototype), p.call(w.prototype), w.prototype.clone = function () {
        return new w(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new c(this.headers),
            url: this.url
        })
    }, w.error = function () {
        var t = new w(null, {status: 0, statusText: ""});
        return t.type = "error", t
    };
    var m = [301, 302, 303, 307, 308];
    w.redirect = function (t, e) {
        if (-1 === m.indexOf(e)) throw new RangeError("Invalid status code");
        return new w(null, {status: e, headers: {location: t}})
    };
    var y = self.DOMException;
    try {
        new y
    } catch (t) {
        (y = function (t, e) {
            this.message = t, this.name = e;
            var n = Error(t);
            this.stack = n.stack
        }).prototype = Object.create(Error.prototype), y.prototype.constructor = y
    }

    function b(t, e) {
        return new Promise(function (n, o) {
            var i = new A(t, e);
            if (i.signal && i.signal.aborted) return o(new y("Aborted", "AbortError"));
            var a = new XMLHttpRequest;

            function s() {
                a.abort()
            }

            a.onload = function () {
                var t = {
                    status: a.status, statusText: a.statusText, headers: function (t) {
                        var e = new c;
                        return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function (t) {
                            var n = t.split(":"), r = n.shift().trim();
                            if (r) {
                                var o = n.join(":").trim();
                                e.append(r, o)
                            }
                        }), e
                    }(a.getAllResponseHeaders() || "")
                };
                t.url = "responseURL" in a ? a.responseURL : t.headers.get("X-Request-URL");
                var e = "response" in a ? a.response : a.responseText;
                n(new w(e, t))
            }, a.onerror = function () {
                o(new TypeError("Network request failed"))
            }, a.ontimeout = function () {
                o(new TypeError("Network request failed"))
            }, a.onabort = function () {
                o(new y("Aborted", "AbortError"))
            }, a.open(i.method, i.url, !0), "include" === i.credentials ? a.withCredentials = !0 : "omit" === i.credentials && (a.withCredentials = !1), "responseType" in a && r.blob && (a.responseType = "blob"), i.headers.forEach(function (t, e) {
                a.setRequestHeader(e, t)
            }), i.signal && (i.signal.addEventListener("abort", s), a.onreadystatechange = function () {
                4 === a.readyState && i.signal.removeEventListener("abort", s)
            }), a.send(void 0 === i._bodyInit ? null : i._bodyInit)
        })
    }

    b.polyfill = !0, self.fetch || (self.fetch = b, self.Headers = c, self.Request = A, self.Response = w)
}, function (t, e, n) {
    "use strict";
    var r = n(21);
    t.exports = function () {
        return "function" == typeof r.Promise && "function" == typeof r.Promise.prototype.then
    }
}, function (t, e, n) {
    "use strict";
    (function (e) {
        t.exports = "object" == typeof self && self.self === self && self || "object" == typeof e && e.global === e && e || this
    }).call(this, n(7))
}, function (t, e, n) {
    var r = n(2), o = n(0), i = n(4), a = n(23), s = n(24), u = n(25), c = n(26), f = n(27), l = n(8), h = n(28),
        d = n(31), p = n(32), g = n(1), A = n(33), v = n(3);

    function w(t, e, n) {
        var r, o, i = t.size, a = p.getEncodedBits(e, n);
        for (r = 0; r < 15; r++) o = 1 == (a >> r & 1), r < 6 ? t.set(r, 8, o, !0) : r < 8 ? t.set(r + 1, 8, o, !0) : t.set(i - 15 + r, 8, o, !0), r < 8 ? t.set(8, i - r - 1, o, !0) : r < 9 ? t.set(8, 15 - r - 1 + 1, o, !0) : t.set(8, 15 - r - 1, o, !0);
        t.set(i - 8, 8, 1, !0)
    }

    function m(t, e, n) {
        var i = new a;
        n.forEach(function (e) {
            i.put(e.mode.bit, 4), i.put(e.getLength(), g.getCharCountIndicator(e.mode, t)), e.write(i)
        });
        var s = 8 * (o.getSymbolTotalCodewords(t) - l.getTotalCodewordsCount(t, e));
        for (i.getLengthInBits() + 4 <= s && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(0);
        for (var u = (s - i.getLengthInBits()) / 8, c = 0; c < u; c++) i.put(c % 2 ? 17 : 236, 8);
        return function (t, e, n) {
            for (var i = o.getSymbolTotalCodewords(e), a = l.getTotalCodewordsCount(e, n), s = i - a, u = l.getBlocksCount(e, n), c = u - i % u, f = Math.floor(i / u), d = Math.floor(s / u), p = d + 1, g = f - d, A = new h(g), v = 0, w = new Array(u), m = new Array(u), y = 0, b = new r(t.buffer), E = 0; E < u; E++) {
                var R = E < c ? d : p;
                w[E] = b.slice(v, v + R), m[E] = A.encode(w[E]), v += R, y = Math.max(y, R)
            }
            var C, B, x = new r(i), I = 0;
            for (C = 0; C < y; C++) for (B = 0; B < u; B++) C < w[B].length && (x[I++] = w[B][C]);
            for (C = 0; C < g; C++) for (B = 0; B < u; B++) x[I++] = m[B][C];
            return x
        }(i, t, e)
    }

    function y(t, e, n, r) {
        var i;
        if (v(t)) i = A.fromArray(t); else {
            if ("string" != typeof t) throw new Error("Invalid data");
            var a = e;
            if (!a) {
                var l = A.rawSplit(t);
                a = d.getBestVersionForData(l, n)
            }
            i = A.fromString(t, a || 40)
        }
        var h = d.getBestVersionForData(i, n);
        if (!h) throw new Error("The amount of data is too big to be stored in a QR Code");
        if (e) {
            if (e < h) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + h + ".\n")
        } else e = h;
        var p = m(e, n, i), g = o.getSymbolSize(e), y = new s(g);
        return function (t, e) {
            for (var n = t.size, r = c.getPositions(e), o = 0; o < r.length; o++) for (var i = r[o][0], a = r[o][1], s = -1; s <= 7; s++) if (!(i + s <= -1 || n <= i + s)) for (var u = -1; u <= 7; u++) a + u <= -1 || n <= a + u || (s >= 0 && s <= 6 && (0 === u || 6 === u) || u >= 0 && u <= 6 && (0 === s || 6 === s) || s >= 2 && s <= 4 && u >= 2 && u <= 4 ? t.set(i + s, a + u, !0, !0) : t.set(i + s, a + u, !1, !0))
        }(y, e), function (t) {
            for (var e = t.size, n = 8; n < e - 8; n++) {
                var r = n % 2 == 0;
                t.set(n, 6, r, !0), t.set(6, n, r, !0)
            }
        }(y), function (t, e) {
            for (var n = u.getPositions(e), r = 0; r < n.length; r++) for (var o = n[r][0], i = n[r][1], a = -2; a <= 2; a++) for (var s = -2; s <= 2; s++) -2 === a || 2 === a || -2 === s || 2 === s || 0 === a && 0 === s ? t.set(o + a, i + s, !0, !0) : t.set(o + a, i + s, !1, !0)
        }(y, e), w(y, n, 0), e >= 7 && function (t, e) {
            for (var n, r, o, i = t.size, a = d.getEncodedBits(e), s = 0; s < 18; s++) n = Math.floor(s / 3), r = s % 3 + i - 8 - 3, o = 1 == (a >> s & 1), t.set(n, r, o, !0), t.set(r, n, o, !0)
        }(y, e), function (t, e) {
            for (var n = t.size, r = -1, o = n - 1, i = 7, a = 0, s = n - 1; s > 0; s -= 2) for (6 === s && s--; ;) {
                for (var u = 0; u < 2; u++) if (!t.isReserved(o, s - u)) {
                    var c = !1;
                    a < e.length && (c = 1 == (e[a] >>> i & 1)), t.set(o, s - u, c), -1 == --i && (a++, i = 7)
                }
                if ((o += r) < 0 || n <= o) {
                    o -= r, r = -r;
                    break
                }
            }
        }(y, p), isNaN(r) && (r = f.getBestMask(y, w.bind(null, y, n))), f.applyMask(r, y), w(y, n, r), {
            modules: y,
            version: e,
            errorCorrectionLevel: n,
            maskPattern: r,
            segments: i
        }
    }

    e.create = function (t, e) {
        if (void 0 === t || "" === t) throw new Error("No input text");
        var n, r, a = i.M;
        return void 0 !== e && (a = i.from(e.errorCorrectionLevel, i.M), n = d.from(e.version), r = f.from(e.maskPattern), e.toSJISFunc && o.setToSJISFunction(e.toSJISFunc)), y(t, n, a, r)
    }
}, function (t, e) {
    function n() {
        this.buffer = [], this.length = 0
    }

    n.prototype = {
        get: function (t) {
            var e = Math.floor(t / 8);
            return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
        }, put: function (t, e) {
            for (var n = 0; n < e; n++) this.putBit(1 == (t >>> e - n - 1 & 1))
        }, getLengthInBits: function () {
            return this.length
        }, putBit: function (t) {
            var e = Math.floor(this.length / 8);
            this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
        }
    }, t.exports = n
}, function (t, e, n) {
    var r = n(2);

    function o(t) {
        if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
        this.size = t, this.data = new r(t * t), this.data.fill(0), this.reservedBit = new r(t * t), this.reservedBit.fill(0)
    }

    o.prototype.set = function (t, e, n, r) {
        var o = t * this.size + e;
        this.data[o] = n, r && (this.reservedBit[o] = !0)
    }, o.prototype.get = function (t, e) {
        return this.data[t * this.size + e]
    }, o.prototype.xor = function (t, e, n) {
        this.data[t * this.size + e] ^= n
    }, o.prototype.isReserved = function (t, e) {
        return this.reservedBit[t * this.size + e]
    }, t.exports = o
}, function (t, e, n) {
    var r = n(0).getSymbolSize;
    e.getRowColCoords = function (t) {
        if (1 === t) return [];
        for (var e = Math.floor(t / 7) + 2, n = r(t), o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2)), i = [n - 7], a = 1; a < e - 1; a++) i[a] = i[a - 1] - o;
        return i.push(6), i.reverse()
    }, e.getPositions = function (t) {
        for (var n = [], r = e.getRowColCoords(t), o = r.length, i = 0; i < o; i++) for (var a = 0; a < o; a++) 0 === i && 0 === a || 0 === i && a === o - 1 || i === o - 1 && 0 === a || n.push([r[i], r[a]]);
        return n
    }
}, function (t, e, n) {
    var r = n(0).getSymbolSize;
    e.getPositions = function (t) {
        var e = r(t);
        return [[0, 0], [e - 7, 0], [0, e - 7]]
    }
}, function (t, e) {
    e.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    var n = 3, r = 3, o = 40, i = 10;

    function a(t, n, r) {
        switch (t) {
            case e.Patterns.PATTERN000:
                return (n + r) % 2 == 0;
            case e.Patterns.PATTERN001:
                return n % 2 == 0;
            case e.Patterns.PATTERN010:
                return r % 3 == 0;
            case e.Patterns.PATTERN011:
                return (n + r) % 3 == 0;
            case e.Patterns.PATTERN100:
                return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
            case e.Patterns.PATTERN101:
                return n * r % 2 + n * r % 3 == 0;
            case e.Patterns.PATTERN110:
                return (n * r % 2 + n * r % 3) % 2 == 0;
            case e.Patterns.PATTERN111:
                return (n * r % 3 + (n + r) % 2) % 2 == 0;
            default:
                throw new Error("bad maskPattern:" + t)
        }
    }

    e.isValid = function (t) {
        return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7
    }, e.from = function (t) {
        return e.isValid(t) ? parseInt(t, 10) : void 0
    }, e.getPenaltyN1 = function (t) {
        for (var e = t.size, r = 0, o = 0, i = 0, a = null, s = null, u = 0; u < e; u++) {
            o = i = 0, a = s = null;
            for (var c = 0; c < e; c++) {
                var f = t.get(u, c);
                f === a ? o++ : (o >= 5 && (r += n + (o - 5)), a = f, o = 1), (f = t.get(c, u)) === s ? i++ : (i >= 5 && (r += n + (i - 5)), s = f, i = 1)
            }
            o >= 5 && (r += n + (o - 5)), i >= 5 && (r += n + (i - 5))
        }
        return r
    }, e.getPenaltyN2 = function (t) {
        for (var e = t.size, n = 0, o = 0; o < e - 1; o++) for (var i = 0; i < e - 1; i++) {
            var a = t.get(o, i) + t.get(o, i + 1) + t.get(o + 1, i) + t.get(o + 1, i + 1);
            4 !== a && 0 !== a || n++
        }
        return n * r
    }, e.getPenaltyN3 = function (t) {
        for (var e = t.size, n = 0, r = 0, i = 0, a = 0; a < e; a++) {
            r = i = 0;
            for (var s = 0; s < e; s++) r = r << 1 & 2047 | t.get(a, s), s >= 10 && (1488 === r || 93 === r) && n++, i = i << 1 & 2047 | t.get(s, a), s >= 10 && (1488 === i || 93 === i) && n++
        }
        return n * o
    }, e.getPenaltyN4 = function (t) {
        for (var e = 0, n = t.data.length, r = 0; r < n; r++) e += t.data[r];
        return Math.abs(Math.ceil(100 * e / n / 5) - 10) * i
    }, e.applyMask = function (t, e) {
        for (var n = e.size, r = 0; r < n; r++) for (var o = 0; o < n; o++) e.isReserved(o, r) || e.xor(o, r, a(t, o, r))
    }, e.getBestMask = function (t, n) {
        for (var r = Object.keys(e.Patterns).length, o = 0, i = 1 / 0, a = 0; a < r; a++) {
            n(a), e.applyMask(a, t);
            var s = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
            e.applyMask(a, t), s < i && (i = s, o = a)
        }
        return o
    }
}, function (t, e, n) {
    var r = n(2), o = n(29);

    function i(t) {
        this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree)
    }

    i.prototype.initialize = function (t) {
        this.degree = t, this.genPoly = o.generateECPolynomial(this.degree)
    }, i.prototype.encode = function (t) {
        if (!this.genPoly) throw new Error("Encoder not initialized");
        var e = new r(this.degree);
        e.fill(0);
        var n = r.concat([t, e], t.length + this.degree), i = o.mod(n, this.genPoly), a = this.degree - i.length;
        if (a > 0) {
            var s = new r(this.degree);
            return s.fill(0), i.copy(s, a), s
        }
        return i
    }, t.exports = i
}, function (t, e, n) {
    var r = n(2), o = n(30);
    e.mul = function (t, e) {
        var n = new r(t.length + e.length - 1);
        n.fill(0);
        for (var i = 0; i < t.length; i++) for (var a = 0; a < e.length; a++) n[i + a] ^= o.mul(t[i], e[a]);
        return n
    }, e.mod = function (t, e) {
        for (var n = new r(t); n.length - e.length >= 0;) {
            for (var i = n[0], a = 0; a < e.length; a++) n[a] ^= o.mul(e[a], i);
            for (var s = 0; s < n.length && 0 === n[s];) s++;
            n = n.slice(s)
        }
        return n
    }, e.generateECPolynomial = function (t) {
        for (var n = new r([1]), i = 0; i < t; i++) n = e.mul(n, [1, o.exp(i)]);
        return n
    }
}, function (t, e, n) {
    var r = n(2), o = new r(512), i = new r(256);
    !function () {
        for (var t = 1, e = 0; e < 255; e++) o[e] = t, i[t] = e, 256 & (t <<= 1) && (t ^= 285);
        for (e = 255; e < 512; e++) o[e] = o[e - 255]
    }(), e.log = function (t) {
        if (t < 1) throw new Error("log(" + t + ")");
        return i[t]
    }, e.exp = function (t) {
        return o[t]
    }, e.mul = function (t, e) {
        return 0 === t || 0 === e ? 0 : o[i[t] + i[e]]
    }
}, function (t, e, n) {
    var r = n(0), o = n(8), i = n(4), a = n(1), s = n(9), u = n(3), c = r.getBCHDigit(7973);

    function f(t, e) {
        return a.getCharCountIndicator(t, e) + 4
    }

    function l(t, e) {
        var n = 0;
        return t.forEach(function (t) {
            var r = f(t.mode, e);
            n += r + t.getBitsLength()
        }), n
    }

    e.from = function (t, e) {
        return s.isValid(t) ? parseInt(t, 10) : e
    }, e.getCapacity = function (t, e, n) {
        if (!s.isValid(t)) throw new Error("Invalid QR Code version");
        void 0 === n && (n = a.BYTE);
        var i = 8 * (r.getSymbolTotalCodewords(t) - o.getTotalCodewordsCount(t, e));
        if (n === a.MIXED) return i;
        var u = i - f(n, t);
        switch (n) {
            case a.NUMERIC:
                return Math.floor(u / 10 * 3);
            case a.ALPHANUMERIC:
                return Math.floor(u / 11 * 2);
            case a.KANJI:
                return Math.floor(u / 13);
            case a.BYTE:
            default:
                return Math.floor(u / 8)
        }
    }, e.getBestVersionForData = function (t, n) {
        var r, o = i.from(n, i.M);
        if (u(t)) {
            if (t.length > 1) return function (t, n) {
                for (var r = 1; r <= 40; r++) if (l(t, r) <= e.getCapacity(r, n, a.MIXED)) return r
            }(t, o);
            if (0 === t.length) return 1;
            r = t[0]
        } else r = t;
        return function (t, n, r) {
            for (var o = 1; o <= 40; o++) if (n <= e.getCapacity(o, r, t)) return o
        }(r.mode, r.getLength(), o)
    }, e.getEncodedBits = function (t) {
        if (!s.isValid(t) || t < 7) throw new Error("Invalid QR Code version");
        for (var e = t << 12; r.getBCHDigit(e) - c >= 0;) e ^= 7973 << r.getBCHDigit(e) - c;
        return t << 12 | e
    }
}, function (t, e, n) {
    var r = n(0), o = r.getBCHDigit(1335);
    e.getEncodedBits = function (t, e) {
        for (var n = t.bit << 3 | e, i = n << 10; r.getBCHDigit(i) - o >= 0;) i ^= 1335 << r.getBCHDigit(i) - o;
        return 21522 ^ (n << 10 | i)
    }
}, function (t, e, n) {
    var r = n(1), o = n(34), i = n(35), a = n(36), s = n(37), u = n(10), c = n(0), f = n(38);

    function l(t) {
        return unescape(encodeURIComponent(t)).length
    }

    function h(t, e, n) {
        for (var r, o = []; null !== (r = t.exec(n));) o.push({
            data: r[0],
            index: r.index,
            mode: e,
            length: r[0].length
        });
        return o
    }

    function d(t) {
        var e, n, o = h(u.NUMERIC, r.NUMERIC, t), i = h(u.ALPHANUMERIC, r.ALPHANUMERIC, t);
        return c.isKanjiModeEnabled() ? (e = h(u.BYTE, r.BYTE, t), n = h(u.KANJI, r.KANJI, t)) : (e = h(u.BYTE_KANJI, r.BYTE, t), n = []), o.concat(i, e, n).sort(function (t, e) {
            return t.index - e.index
        }).map(function (t) {
            return {data: t.data, mode: t.mode, length: t.length}
        })
    }

    function p(t, e) {
        switch (e) {
            case r.NUMERIC:
                return o.getBitsLength(t);
            case r.ALPHANUMERIC:
                return i.getBitsLength(t);
            case r.KANJI:
                return s.getBitsLength(t);
            case r.BYTE:
                return a.getBitsLength(t)
        }
    }

    function g(t, e) {
        var n, u = r.getBestModeForData(t);
        if ((n = r.from(e, u)) !== r.BYTE && n.bit < u.bit) throw new Error('"' + t + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(u));
        switch (n !== r.KANJI || c.isKanjiModeEnabled() || (n = r.BYTE), n) {
            case r.NUMERIC:
                return new o(t);
            case r.ALPHANUMERIC:
                return new i(t);
            case r.KANJI:
                return new s(t);
            case r.BYTE:
                return new a(t)
        }
    }

    e.fromArray = function (t) {
        return t.reduce(function (t, e) {
            return "string" == typeof e ? t.push(g(e, null)) : e.data && t.push(g(e.data, e.mode)), t
        }, [])
    }, e.fromString = function (t, n) {
        for (var o = function (t, e) {
            for (var n = {}, o = {start: {}}, i = ["start"], a = 0; a < t.length; a++) {
                for (var s = t[a], u = [], c = 0; c < s.length; c++) {
                    var f = s[c], l = "" + a + c;
                    u.push(l), n[l] = {node: f, lastCount: 0}, o[l] = {};
                    for (var h = 0; h < i.length; h++) {
                        var d = i[h];
                        n[d] && n[d].node.mode === f.mode ? (o[d][l] = p(n[d].lastCount + f.length, f.mode) - p(n[d].lastCount, f.mode), n[d].lastCount += f.length) : (n[d] && (n[d].lastCount = f.length), o[d][l] = p(f.length, f.mode) + 4 + r.getCharCountIndicator(f.mode, e))
                    }
                }
                i = u
            }
            for (h = 0; h < i.length; h++) o[i[h]].end = 0;
            return {map: o, table: n}
        }(function (t) {
            for (var e = [], n = 0; n < t.length; n++) {
                var o = t[n];
                switch (o.mode) {
                    case r.NUMERIC:
                        e.push([o, {data: o.data, mode: r.ALPHANUMERIC, length: o.length}, {
                            data: o.data,
                            mode: r.BYTE,
                            length: o.length
                        }]);
                        break;
                    case r.ALPHANUMERIC:
                        e.push([o, {data: o.data, mode: r.BYTE, length: o.length}]);
                        break;
                    case r.KANJI:
                        e.push([o, {data: o.data, mode: r.BYTE, length: l(o.data)}]);
                        break;
                    case r.BYTE:
                        e.push([{data: o.data, mode: r.BYTE, length: l(o.data)}])
                }
            }
            return e
        }(d(t, c.isKanjiModeEnabled())), n), i = f.find_path(o.map, "start", "end"), a = [], s = 1; s < i.length - 1; s++) a.push(o.table[i[s]].node);
        return e.fromArray(function (t) {
            return t.reduce(function (t, e) {
                var n = t.length - 1 >= 0 ? t[t.length - 1] : null;
                return n && n.mode === e.mode ? (t[t.length - 1].data += e.data, t) : (t.push(e), t)
            }, [])
        }(a))
    }, e.rawSplit = function (t) {
        return e.fromArray(d(t, c.isKanjiModeEnabled()))
    }
}, function (t, e, n) {
    var r = n(1);

    function o(t) {
        this.mode = r.NUMERIC, this.data = t.toString()
    }

    o.getBitsLength = function (t) {
        return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
    }, o.prototype.getLength = function () {
        return this.data.length
    }, o.prototype.getBitsLength = function () {
        return o.getBitsLength(this.data.length)
    }, o.prototype.write = function (t) {
        var e, n, r;
        for (e = 0; e + 3 <= this.data.length; e += 3) n = this.data.substr(e, 3), r = parseInt(n, 10), t.put(r, 10);
        var o = this.data.length - e;
        o > 0 && (n = this.data.substr(e), r = parseInt(n, 10), t.put(r, 3 * o + 1))
    }, t.exports = o
}, function (t, e, n) {
    var r = n(1),
        o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

    function i(t) {
        this.mode = r.ALPHANUMERIC, this.data = t
    }

    i.getBitsLength = function (t) {
        return 11 * Math.floor(t / 2) + t % 2 * 6
    }, i.prototype.getLength = function () {
        return this.data.length
    }, i.prototype.getBitsLength = function () {
        return i.getBitsLength(this.data.length)
    }, i.prototype.write = function (t) {
        var e;
        for (e = 0; e + 2 <= this.data.length; e += 2) {
            var n = 45 * o.indexOf(this.data[e]);
            n += o.indexOf(this.data[e + 1]), t.put(n, 11)
        }
        this.data.length % 2 && t.put(o.indexOf(this.data[e]), 6)
    }, t.exports = i
}, function (t, e, n) {
    var r = n(2), o = n(1);

    function i(t) {
        this.mode = o.BYTE, this.data = new r(t)
    }

    i.getBitsLength = function (t) {
        return 8 * t
    }, i.prototype.getLength = function () {
        return this.data.length
    }, i.prototype.getBitsLength = function () {
        return i.getBitsLength(this.data.length)
    }, i.prototype.write = function (t) {
        for (var e = 0, n = this.data.length; e < n; e++) t.put(this.data[e], 8)
    }, t.exports = i
}, function (t, e, n) {
    var r = n(1), o = n(0);

    function i(t) {
        this.mode = r.KANJI, this.data = t
    }

    i.getBitsLength = function (t) {
        return 13 * t
    }, i.prototype.getLength = function () {
        return this.data.length
    }, i.prototype.getBitsLength = function () {
        return i.getBitsLength(this.data.length)
    }, i.prototype.write = function (t) {
        var e;
        for (e = 0; e < this.data.length; e++) {
            var n = o.toSJIS(this.data[e]);
            if (n >= 33088 && n <= 40956) n -= 33088; else {
                if (!(n >= 57408 && n <= 60351)) throw new Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                n -= 49472
            }
            n = 192 * (n >>> 8 & 255) + (255 & n), t.put(n, 13)
        }
    }, t.exports = i
}, function (t, e, n) {
    "use strict";
    var r = {
        single_source_shortest_paths: function (t, e, n) {
            var o = {}, i = {};
            i[e] = 0;
            var a, s, u, c, f, l, h, d = r.PriorityQueue.make();
            for (d.push(e, 0); !d.empty();) for (u in s = (a = d.pop()).value, c = a.cost, f = t[s] || {}) f.hasOwnProperty(u) && (l = c + f[u], h = i[u], (void 0 === i[u] || h > l) && (i[u] = l, d.push(u, l), o[u] = s));
            if (void 0 !== n && void 0 === i[n]) {
                var p = ["Could not find a path from ", e, " to ", n, "."].join("");
                throw new Error(p)
            }
            return o
        }, extract_shortest_path_from_predecessor_list: function (t, e) {
            for (var n = [], r = e; r;) n.push(r), t[r], r = t[r];
            return n.reverse(), n
        }, find_path: function (t, e, n) {
            var o = r.single_source_shortest_paths(t, e, n);
            return r.extract_shortest_path_from_predecessor_list(o, n)
        }, PriorityQueue: {
            make: function (t) {
                var e, n = r.PriorityQueue, o = {};
                for (e in t = t || {}, n) n.hasOwnProperty(e) && (o[e] = n[e]);
                return o.queue = [], o.sorter = t.sorter || n.default_sorter, o
            }, default_sorter: function (t, e) {
                return t.cost - e.cost
            }, push: function (t, e) {
                var n = {value: t, cost: e};
                this.queue.push(n), this.queue.sort(this.sorter)
            }, pop: function () {
                return this.queue.shift()
            }, empty: function () {
                return 0 === this.queue.length
            }
        }
    };
    t.exports = r
}, function (t, e, n) {
    var r = n(11);
    e.render = function (t, e, n) {
        var o = n, i = e;
        void 0 !== o || e && e.getContext || (o = e, e = void 0), e || (i = function () {
            try {
                return document.createElement("canvas")
            } catch (t) {
                throw new Error("You need to specify a canvas element")
            }
        }()), o = r.getOptions(o);
        var a = r.getImageWidth(t.modules.size, o), s = i.getContext("2d"), u = s.createImageData(a, a);
        return r.qrToImageData(u.data, t, o), function (t, e, n) {
            t.clearRect(0, 0, e.width, e.height), e.style || (e.style = {}), e.height = n, e.width = n, e.style.height = n + "px", e.style.width = n + "px"
        }(s, i, a), s.putImageData(u, 0, 0), i
    }, e.renderToDataURL = function (t, n, r) {
        var o = r;
        void 0 !== o || n && n.getContext || (o = n, n = void 0), o || (o = {});
        var i = e.render(t, n, o), a = o.type || "image/png", s = o.rendererOpts || {};
        return i.toDataURL(a, s.quality)
    }
}, function (t, e, n) {
    var r = n(11);

    function o(t, e) {
        var n = t.a / 255, r = e + '="' + t.hex + '"';
        return n < 1 ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
    }

    function i(t, e, n) {
        var r = t + e;
        return void 0 !== n && (r += " " + n), r
    }

    e.render = function (t, e, n) {
        var a = r.getOptions(e), s = t.modules.size, u = t.modules.data, c = s + 2 * a.margin,
            f = a.color.light.a ? "<path " + o(a.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
            l = "<path " + o(a.color.dark, "stroke") + ' d="' + function (t, e, n) {
                for (var r = "", o = 0, a = !1, s = 0, u = 0; u < t.length; u++) {
                    var c = Math.floor(u % e), f = Math.floor(u / e);
                    c || a || (a = !0), t[u] ? (s++, u > 0 && c > 0 && t[u - 1] || (r += a ? i("M", c + n, .5 + f + n) : i("m", o, 0), o = 0, a = !1), c + 1 < e && t[u + 1] || (r += i("h", s), s = 0)) : o++
                }
                return r
            }(u, s, a.margin) + '"/>', h = 'viewBox="0 0 ' + c + " " + c + '"',
            d = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + h + ' shape-rendering="crispEdges">' + f + l + "</svg>\n";
        return "function" == typeof n && n(null, d), d
    }
}, function (t, e, n) {
    var r = n(42);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    var o = {hmr: !0, transform: void 0, insertInto: void 0};
    n(44)(r, o);
    r.locals && (t.exports = r.locals)
}, function (t, e, n) {
    (t.exports = n(43)(!1)).push([t.i, "#irma-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  height: auto;\n  z-index: 2000;\n  visibility: hidden;\n  backface-visibility: hidden;\n  transform: translateX(-50%) translateY(-50%); }\n  #irma-modal #modal-irmaqr {\n    width: 230px;\n    height: 230px; }\n  #irma-modal .modal-content {\n    font: 100% Ubuntu, sans-serif;\n    font-size: 14px;\n    background-color: #004289;\n    padding: 10px 10px 30px 10px; }\n  #irma-modal p#irma-text {\n    color: #004289;\n    height: 75px;\n    line-height: 130%; }\n  #irma-modal .irma-page {\n    margin: 0px auto; }\n  #irma-modal .irma-content {\n    background-color: white;\n    position: relative;\n    left: 0px;\n    width: 330px;\n    margin: 40px;\n    box-sizing: content-box;\n    border-style: solid;\n    border-width: 0px;\n    border-color: #004289;\n    border-radius: 5px;\n    padding: 20px;\n    font-weight: 200;\n    z-index: 1; }\n  #irma-modal .irma-button-box {\n    width: 370px;\n    box-sizing: content-box;\n    padding-top: 5px;\n    margin-left: 40px;\n    margin-top: -40px;\n    margin-right: 40px;\n    text-align: right; }\n  #irma-modal .irma-logo-top {\n    position: absolute;\n    left: -40px;\n    top: -40px;\n    width: 160px;\n    box-sizing: content-box;\n    z-index: 2; }\n  #irma-modal .irma-title {\n    position: absolute;\n    top: -30px;\n    right: 0px;\n    height: 40px;\n    box-sizing: content-box;\n    text-align: right;\n    color: white;\n    font-weight: 700;\n    text-transform: uppercase;\n    font-size: 20px; }\n  #irma-modal .irma-option-container {\n    text-align: center;\n    margin: 30px auto; }\n  #irma-modal .irma-option-box {\n    width: 230px;\n    height: 230px;\n    box-sizing: content-box;\n    border-style: solid;\n    border-width: medium;\n    border-color: #d0d0d0;\n    border-radius: 6px;\n    padding: 6px;\n    display: inline-block;\n    margin: 5px; }\n  #irma-modal .irma-button {\n    height: 40px;\n    display: inline-block;\n    box-sizing: content-box;\n    margin: 0;\n    padding: 0 0.5em;\n    color: white;\n    font-weight: 700;\n    text-transform: uppercase;\n    font-size: 16px;\n    text-align: center;\n    background-color: #888;\n    border-radius: 5px;\n    border: 0px none;\n    cursor: pointer; }\n  #irma-modal #irma-text {\n    text-align: justify;\n    padding-left: 125px; }\n  #irma-modal .irma-dialog {\n    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);\n    -webkit-transform: translateY(-30%);\n    -moz-transform: translateY(-30%);\n    -ms-transform: translateY(-30%);\n    transform: translateY(-30%);\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    transition: all 0.3s; }\n  #irma-modal.irma-show .irma-dialog {\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; }\n\n.irma-show {\n  visibility: visible !important; }\n\n.irma-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.5);\n  transition: all 0.3s; }\n\n.irma-show ~ .irma-overlay {\n  opacity: 1;\n  visibility: visible; }\n", ""])
}, function (t, e) {
    t.exports = function (t) {
        var e = [];
        return e.toString = function () {
            return this.map(function (e) {
                var n = function (t, e) {
                    var n = t[1] || "", r = t[3];
                    if (!r) return n;
                    if (e && "function" == typeof btoa) {
                        var o = function (t) {
                            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
                        }(r), i = r.sources.map(function (t) {
                            return "/*# sourceURL=" + r.sourceRoot + t + " */"
                        });
                        return [n].concat(i).concat([o]).join("\n")
                    }
                    return [n].join("\n")
                }(e, t);
                return e[2] ? "@media " + e[2] + "{" + n + "}" : n
            }).join("")
        }, e.i = function (t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                "number" == typeof i && (r[i] = !0)
            }
            for (o = 0; o < t.length; o++) {
                var a = t[o];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
            }
        }, e
    }
}, function (t, e, n) {
    var r = {}, o = function (t) {
        var e;
        return function () {
            return void 0 === e && (e = t.apply(this, arguments)), e
        }
    }(function () {
        return window && document && document.all && !window.atob
    }), i = function (t) {
        var e = {};
        return function (t, n) {
            if ("function" == typeof t) return t();
            if (void 0 === e[t]) {
                var r = function (t, e) {
                    return e ? e.querySelector(t) : document.querySelector(t)
                }.call(this, t, n);
                if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                    r = r.contentDocument.head
                } catch (t) {
                    r = null
                }
                e[t] = r
            }
            return e[t]
        }
    }(), a = null, s = 0, u = [], c = n(45);

    function f(t, e) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n], i = r[o.id];
            if (i) {
                i.refs++;
                for (var a = 0; a < i.parts.length; a++) i.parts[a](o.parts[a]);
                for (; a < o.parts.length; a++) i.parts.push(A(o.parts[a], e))
            } else {
                var s = [];
                for (a = 0; a < o.parts.length; a++) s.push(A(o.parts[a], e));
                r[o.id] = {id: o.id, refs: 1, parts: s}
            }
        }
    }

    function l(t, e) {
        for (var n = [], r = {}, o = 0; o < t.length; o++) {
            var i = t[o], a = e.base ? i[0] + e.base : i[0], s = {css: i[1], media: i[2], sourceMap: i[3]};
            r[a] ? r[a].parts.push(s) : n.push(r[a] = {id: a, parts: [s]})
        }
        return n
    }

    function h(t, e) {
        var n = i(t.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = u[u.length - 1];
        if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), u.push(e); else if ("bottom" === t.insertAt) n.appendChild(e); else {
            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = i(t.insertAt.before, n);
            n.insertBefore(e, o)
        }
    }

    function d(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = u.indexOf(t);
        e >= 0 && u.splice(e, 1)
    }

    function p(t) {
        var e = document.createElement("style");
        if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
            var r = function () {
                0;
                return n.nc
            }();
            r && (t.attrs.nonce = r)
        }
        return g(e, t.attrs), h(t, e), e
    }

    function g(t, e) {
        Object.keys(e).forEach(function (n) {
            t.setAttribute(n, e[n])
        })
    }

    function A(t, e) {
        var n, r, o, i;
        if (e.transform && t.css) {
            if (!(i = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () {
            };
            t.css = i
        }
        if (e.singleton) {
            var u = s++;
            n = a || (a = p(e)), r = w.bind(null, n, u, !1), o = w.bind(null, n, u, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
            var e = document.createElement("link");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", g(e, t.attrs), h(t, e), e
        }(e), r = function (t, e, n) {
            var r = n.css, o = n.sourceMap, i = void 0 === e.convertToAbsoluteUrls && o;
            (e.convertToAbsoluteUrls || i) && (r = c(r));
            o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var a = new Blob([r], {type: "text/css"}), s = t.href;
            t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }.bind(null, n, e), o = function () {
            d(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = p(e), r = function (t, e) {
            var n = e.css, r = e.media;
            r && t.setAttribute("media", r);
            if (t.styleSheet) t.styleSheet.cssText = n; else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), o = function () {
            d(n)
        });
        return r(t), function (e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                r(t = e)
            } else o()
        }
    }

    t.exports = function (t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = o()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var n = l(t, e);
        return f(n, e), function (t) {
            for (var o = [], i = 0; i < n.length; i++) {
                var a = n[i];
                (s = r[a.id]).refs--, o.push(s)
            }
            t && f(l(t, e), e);
            for (i = 0; i < o.length; i++) {
                var s;
                if (0 === (s = o[i]).refs) {
                    for (var u = 0; u < s.parts.length; u++) s.parts[u]();
                    delete r[s.id]
                }
            }
        }
    };
    var v = function () {
        var t = [];
        return function (e, n) {
            return t[e] = n, t.filter(Boolean).join("\n")
        }
    }();

    function w(t, e, n, r) {
        var o = n ? "" : r.css;
        if (t.styleSheet) t.styleSheet.cssText = v(e, o); else {
            var i = document.createTextNode(o), a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var n = e.protocol + "//" + e.host, r = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
            var o, i = e.trim().replace(/^"(.*)"$/, function (t, e) {
                return e
            }).replace(/^'(.*)'$/, function (t, e) {
                return e
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
        })
    }
}, function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABHNCSVQICAgIfAhkiAAAAAZiS0dEAAAAAAAA+UO7fwAAIABJREFUeJztnXd8XOWV97/P9FG1umRZLmBM74RubIwLmA4BQhLIQhISQrLZ7Ju8KZvNJtnUd3dDGgnZFEICCSHU0I0N2Mamk9C7u2XJsmxLsjR9zvvH1eDBWLbu1YzuHel8Px+FWJrn3jMz9557nvP8nnNAURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFKTGM2wYoigIicgJwFtA0xEt8wBJgtTFm5agZ5jHUYSmKC4jIR4HDgdOBaUAACO9lWAZIAwngFSwH9pAx5vEimqooylhHRMwu/46IyPki8ksRWSUiKdlJVuyR//puEXlCRD7o1ntVFGWMICIXi8jNIvLWCBzUcHlGRK5y+z0rilIiiMhEEblKRG4XkY1Fckx74zUROd/tz6IYaA5LUUaIiEwDjgE+CcwA2rCS5G6SBG4BrjHG7HDZloKhDktRHCIihwC/AKZiOSkv8rYxZj+3jSgU6rAUxQYi8mFgIXA+UOayOcNlFXCMMWab24aMFHVYirIHRKQemA/MBeYBzVgSBAChdO6h14H5xpj1bhsyEkrlw1aUoiEixhgju/zuInY6qolAyA3bCsybxpj93TZiJKjDUpRBRORq4DhgDt7NSY2U14GTjDFb3TbECeqwlHGLiNQCH8ZyUKcAde5aNGo8Zow51W0jnKAOSxlXiMhE4Fjg08CBwGR3LXKNrxtjvuu2EXZRh6WMC0TkKOCbwGHAFHet2TObElm6ElkAGsM+msNFkXRtBY41xrxTjIMXC3VYyphFROYAn8Ca8g1VBcFVMsDL21M8tTnO7zYleKo7+f4XGTiqJsg1k6Kc3BRmRmWwUKdfZIxZUKiDjQbqsJQxg4iEgAXALOBMrOleTivlGQnCQEZ4szfFyi1J/tYeY2lfhng6C8YMbaEAItQHfVzaHOZzMyrZrzIwxIttcbYx5t5CHGg08MQXqCgjQURmYQk55wD74lFB54s9KZZ3JbivPc4DPWlIZ8G3Byc1FFmBgI8/H1bFxZPLRroH6HFjzMyRHWL0UIellCQicjGWTuoUwLNbT57blmRlV5IfrRtgzY6M5Wx8ZuQ7DQVIC1+YVsZ/HTUBv/MjJYAzjDGPjtCiUaEgMaWijAaDYs4zsBTnLTCS+7Q4DGSENX1p7uuIc/OGGC8MDDopM+ikfAWKEQwQNFy7doB4VvjFMTVOjxQGLgNKwmFphKV4GhE5FuuGWghMwoOK87QIm+MZ/rw2xtLOBPf0pCAjzqZ7Tkhl+ePRE/jo1HKnR+gwxrQU0qRioQ5L8RwiMhn4KnACVhlhT7I2luH+9QPc3ZHgoS1J624aLSe1KwbWzGlgSrmjSVMa+LQx5rcFtqrgqMNSPIGILMCa7p2FlTj3HLGs8EZfmsc2xfnzpjhPb09Zf3DLSeWTFS5vjnDj8bVOj3CDMebK3e2r9BJuf8zKOGVwW8xJwGlYUoRJQEXuz7h4bYoIxlin788I7/SlWbw5zuKOBCv60vQmHa7uFRsDL5xcx2E1jmbNW4wxDYU2qdBo0l0ZVUTkGOBTWNO96ey+U4yrrsAYwws9KZZ3xrmjI8GjPSlI5yXO/V7zVIOkhVvXx5w6rHoRmW+MWVRoswqJRz95ZSwhIhcA5+DxKgjPb0uyYnOCb6wdYHt/xvqlFyOpoRCoCBp6FjY7VU38whhzTWGNKiwaYSlFQay2U7OBc7G2xRRsP0mhSGSFtTvSPNyZ4PdrBng2nrEiKZ/xbhS1JwzsSGZ5vCvBKQ17a3G4W+aKSL0xZkuhTSsU6rAURwxR9O4grCoIs4CD8aBOKi3QHktzX3ucJe1xbt++iwShFB3VLiztjDt1WFOwVmWXFNaiwlH6347iKoNVEK7ASqAf6bI5u0WAt/vTLN4Y4/aOBEtyG4xLabo3XASqIj62zW8c1KjafoO3GWMuKrxhhUEjLMUWIhLFWtWbh7XCNwOP3Pb5S4sDGWFNf5r72+Pc0xlnWU96p+J8DERRQ2KgN5Zh+ZYks5xFWceLyARjzPZCm1YI1GEpuyV/yjfYiOForA3GpwKtgGNZdSHJd1KJrLBhIMOdG2Is35Lg4Z408VTWekUht8V4HYFlmxNOHVYL8CHg+sIaVRjGyTeoOEFEjgSuAWZiSRDcbg66W94ZyPDQhgHu7EiwOJeTypVqGY9XuMAJlQHum1lHTdDRV3aLMebSQptVCMbj16nsARE5HchVQmh12ZwhebknxZOb43xrTYwNvanBfFQBqiCMIR45roZTmyJOhvYZY6oKbU8h0CmhgoicibWydwnQAETdtej9JAXW7UizvCvBX9cP8EBfBlKDinNnUcTYJiss3pxw6rAqReRTxphfFdqskaIR1jhFRA7DWt2bibWU7ZGH186slACr+jM8tjnOoo0xbt2W2qmT0it3zwgcUeZn+ZwGKpwtMtxqjLmk0GaNFP3axxEicipWFHUsnpMgWI5KgJd7Uzy+OcFf2uMs7U5af/Krk3LCshNrmVnvKPneD1R6bSO0R56qSrEYrMw5F2vK58nEeX9GWN+f5m/tcf7WGWdFb9pKnGNJEAyWz1JskhUWt8edOqxyrJ6NNxfWqJGhz6wxhoiUAx8APoLlpCaz+w3GrpLMCh2xDLduiLF0c4J7cxuM0cR5wRAIhn0kT3fcMGiJMWZuIU0aKRphjRFE5GDgX7FyUp6tcb4+nuG+tQPc3hFn8dbBelKFLh+sANbHmupP80JPisOrHW3lPEhEDjTGvFZo25yiDquEEZGFWGrzDwETXTZntwjwem+Kp7sSXLs2xgs9eUXvxrLi3AMIgN9w77oBDj+02skhWrB2NHjGYekVU2IM6qROxSrX0sZOxbln+u4lslbRuxXdSe7bEOOxvjQ9Xi16N9YROKrCz6On1FPlTP7xoDHmjEKb5RSNsEqAwQ3GH8GqJ3UAkBPX5OeiXXcFb/WnWbE5wb3tMW7fWiJF78Y6Bp7vSbNmR9ppYb+jRaTRGLO50KY5QR2WRxGR87Hqm58AHDjEy1z3Ai/1pFjZleDXG2I8t31wg3FOgqBOyhsY+O3qAX7isBIpcBFwXWGNcoY6LA8x6KTOxlrda8OjRe/W7UizZHOCP22IsXxH2uq5Apo49yo+w4ruJN3JLHUh29NCg9UcxBMOS68ulxnsu3clVvJ8Kh58iGSB7kSGOzbEWNIe5689KUip4rykEFhxQg0nNjraqtNtjKkvtElO8NzNMR4Qkf2BLwLHA4e4bM6QbEpkWbJxgL+2x/lb16Di3Kc5qZJEhF+tjXFiY8TJ6kydVxpU6FU3SohILh91GVYVBM/JIxMCa3ekWd4Z55b2OIu3pUDySrUopYsAQUPs9CYizqbtfzPGnFtgq2yjEVaREJEI1qreycB5WDmp/L57rrG7onePbI7z0KYET/SmaI/nSRCMeqoxgQGSWZZ3JZjnrILDoSIy2RizrsCW2UIdVoEZlCBcCZyCVT7Ye333gDf70yzfnLD2721PQSK7M2mu070xy+KOuFOHNQ04BnDVYemVWQBE5ELgTKxNxp7tu/dST4onuxL8YO0Aq3rTgzkpdMo3XhBoivp449QGqp2JSO8xxpxTaLPsoBGWQ0TkbCy1+QKsvnuORC7FJCWwoT/No51xblkf4+Ed6Z1iTo2ixh8GOndkeHZbitMaHe2Hd70kkTosG4hIK/DvWHmpA/Bg3z2ArkSGBzfFeXhjnD9uTVqeKyfmVJ3U+MbAI51xpw6rVUSuNsb8stBmDRe9eveCiBwN/BOWkzrCXWuGZtVAmuWb4tzWkeDezoT1Sz+aNFfei8Bx5X7un1VPrbNp4R3GmAsLbdZw0at5F0QkgKXsPXXwv9PxYCQ6kBU29Gd4pDPOnZviLHq3WwxgtOidsgdksEFFs6Pke8IY42hgIfDcjTha7NJ3rxIrgpoLLAQmsVOC4Cr5EoSUCB2xLPduirGkM8Gj21NsTWR3TvXypnvqrJQhEeHhzQmnDissIp8wxvym0GYNh3EdYYnIKVi1pE4D9sWjOan2eIYH22Pc1R7nnu1pSGZ1dU9xjsDUsI/XFjQScZYycK3kzLi73EXkXOBcrNU9Txa9A3izL83zWxL895oBnutJDYZa47g5qFJYBBYdW8O8FkdRVg8ww42SM+NiSigi87Cmehfg0b57WaC9P83KLUluWzfAw71ptueK3unKnlJoRHi0M+7UYVVj7d7438IatXfG7J0gIhOA7wLHYelHPLd3D6wNxks74zyyKc6vuxJWx1BtaaWMBgbk7Bano+81xpxdSHOGw5iKsETkROCjwIlYzUE9yVs70qzsSnB7e5x7NicG++4BGAiop1KKjwEkaXWHnutMk3W0iBxmjHmxwKbtkZJ2WIMbjM/E2mQ8C2vvnieK3uWv7sWzwvr+DI9ujnP3pgQrelL0pMWqhKB99xQXsBpUwJINA04dVjPWftlRdVgl8TjPlyAM/vsUrCaPM7E2ZXouJ5WRwaJ3G2M80pngtu0pJJm1/qire4oXEJgc8fHs7AYawo4yJncbY84rtFl7oiQiLGOMDDqpy7G8umf77nUksizeOMCf2+Pc3520sum5Mi2aPFe8hIF1Axle2Z5ktrMKDieLSJkxZqDQpg2Fpx3WoARhNpZWqtlda4ZmTX+aZ7sS/GztAMu25UkQfMajyi5FGcTAjesGnDqsGqyZzqiJSD3nsETkVGA+lgRhElDmrkXvJy2wYSDNk91J/rY+xvLeFBviKkFQShBjeGpbmk3xDC0R209XH5ZcaHw5rMEqCP8Ha7p3GDsT557KRa+NZVjRleCh9jh/2JKEVN62GC3XopQiBl6LZXhle4qWZkfTgRMKbdKecO0uE5H5wMVYOinPNmJ4tTfF410J/twe57FcTkqrIChjiazwweYIfz2+1ukRFoxWg4pRvetE5DR2bouZzM4Oxh7AEiKkBTYOpFnWleAvG+Is2Z4inhmUIPhUgqCMQQQIGLbOb6TG4yVnij4lHJzu/RNwPnAQHpQgAPSmhHvaYyxuj/H7rSlrugd5+/cs367OShlzGCCR5dltKeY502QdJSJTjDFrC2zZ+yiawxKRH2IVvJtfrHOMlC2pLI9vinPzhhi3dSbeW+Nck+fKeMIH9wyKSB1c+VOxGlQU3WEV7K4UkcOB07FWDY7HgzXO0wIbYhme35LgD+tjPLgtSSIt74mgFGVcIjA56uO5WQ3UOxORjkrJmRFFWCJSjVVL6jNYe/fqwFtpnrRAZzzDsq4ED7bHWdGT4p2BjEZSipKPgXX9GV7sSTLHWTv7USkf7thhicg1wFVYMoRdcd0LrI9nWNaZ4L5Ncf68NQXxjPbdU5Q9YeBvG+JOHVaziHzBGHNtoc3Kx7bDEpHLgW9hzVs9xet9aZ7dkuD69TFWbEtBNm+6p1UQFGXP+AxLu5N0JLI0O5sWzgOu3XXvbyGxdReLyJ+AC/FIfioLdA5YVRDu2hjnoZ4UvcnBzXuerH6lKB4nK1aDihZHi/lZY0xRN6MNO8ISkaeAY4toy7DZkc7y4KY4SzbGuL5rsO+e5qQUpSD8pT3u1GH5ROS7xph/K7RNOfZ6d4tIGfA4Lnd93RDP8OTmBHe2x/lTe9z6Za7onfooRSkYAQN9ZzYTcfbwX2yMmVdom3Ls0SIRqQcewNJYjCqJrNARz/JEV4JbN1o5qc25vXvad09RikdWuP/YGs6Y6CjKSgDHGWNeKLBVwN6nhIsZxVLDGYGOeIZHNidYtCnO0u0p1scy2ndPUUaZ+9vjTh1WGEuLWRSHNWSEJSIvsHvJQsHZlMjwcHucO9rj3L0tpX33FMVtBAbOaibqTAK0xBgzt9AmwRARlog8Q5Gd1ZqBDC91J7h29QCP7tJmXSUIiuIyGeFv7TEuaXNUju4YEZltjHmswFa932GJyFcoUs5qSzzDyu4kd6wbYMn2NBvimcGVPVTMqShewgdLO+Nc1FbmRCFUjVU26rECW/XeCZeITAf+AZQX6gQ9aWHp5jiPtce5tiMxtqd7ThJrI/0MRjOZJ2KJ33KC3FxecbS/R7vvOdfCyO3rzel35YbdAg1hHy/Mqqcl6khadZsx5qJCm7VrhPVTCuCsupJZHu2Ic29HnD+2x99b9G6sTvcy8MejJ3BKY5hkdnhXZkXAcMUz23iwK2FfP5YVDq8MsOiUBnpzpXCKTH9a6Ell2RLP0BXP8sTWJMu6k6yOZ6wpfcBX3JsrK5xYHeSmE+rIDPMz9g82Wrjkia10DnNMsagKGO47vpaWqH9YvssAYgxXrtzC8h2Z0XVcBroG9+BeMtnRtPCkQpsEeQ5rsLjeiHZb96Wz3Lh6gJ+u6ueteHZn0Tvf+FjVawr7mByxF0BHR6DIDxhDY9DQGHSn08WV+5QTywiv96ZY3JngjvUxnutP74ygi0DEZ5hm8zOeFvVzxeQoP3irH4IuPTAzwuemlHFynf1NIhEXK4nc3+HYYTWKyP7GmDcKaU/+N//lkRzojd40F6/cyude7rWcVW7KwPhwVgBZsf9ORxQbufzBBo0VNRxbG+JrB1by4Ox6/nL0BI6IBqyIqwg4/bw+vk+5FW65+Jl9fLr9yUsGELeMFsj1pRD717Yf+FyBLbIcloicAByNw69zUWecA5Zt4cGtSeuiGKOzPmXP1Id8XDy5jOfmN/JfB1QO5rvctsq6qKdXBPhUW8TKv7lgwJemlDGt3BM9X2zxscHoyjiL8greoCIXYS0EanHgalZ0J1jwxFbriar7+BSsi+qLB1byypx6jqosXrQ1XHJX5edmVLoTZaWFT+xfOconHSECx1UHOXBCcO+vHZqjRKSg8qicw/qYk8EbYxk+9tz2sbnip4yYg6qCPHRyHSdNCLoT2ezCwZUBPtgQtnKro0VG+EhrhBnlJdZRNyuc1RR22pQiH0e+ZSh8IjILqHcy+Fsv9/JO/yivXiglRX3Yx/0z6zncA5EWwFf2rxjdmYCBq6dXjN75CoUIl0wpiLppQSEOksOHVYfd9qahJR1xfr0proJPZa9UBQyPnjI4PXQ50jq6NsSnmsOjY0dauKwlwon1nigfN3wEZtaGmV4xPPnF7o/w7tCDRKRgLcB8QJuTgdet6nf94lNKh5qgj+uOnOCJaPyzo5VP8sEV08q98JbtIcLVU6Ij1dqavP+eVgCrAMth7W93UHsiy52bHYgdlXHN8XUhvrNfhdUZxEUOrg7yT43h4ibfM8LZ9SFOKLXoCsAYZjur1PDuEXb5d8G66fhwsG9waXvMdQ2QUpp8/oBKCLurJDbA5w6psraJFYss/MuMSqdF8NwjCxc2hmlxVtN9KJpF5EOFOJAjYcjqvrQnQnvFPj0p4dXtSZtCdENZ0NAU9dMQ8o2oXH6Fz/Dz/Sr47Cu9ruY/j6oKckZzhAe6izBTEDhsQpA5jeF3tzGWDsLVUxwp2/dEBJgJ3DLSA9l2WFngHzvUYZUqr/elOHHFVvvfn89wVNBwxIQgH5xSxuymMFGHN/o5bVH+e1U/axJZV6+jf55eYTmsQiPwnf2tlcFSu02Oivo5tDjT2IWFOIjth2VWYFOq9J4bioXJ/Y/dHxGeT2b5XUechSu6OWPZFqsarAPaon7m1IZGVw+1G05rDnN6baiwcguBQ8v9nDlpRDkgd0gL85ojNIaK0nJqqoiMWOKgzbAUe/gMhHws3Z5i8sOb+cf2lKPDXD6lzPVtO0EDn9+vwBqprPCjQ6pK88YycJGzjc7D5f+M9AC2P1efgYaAtoAY9/gMZIXPP7eNLQ6S1/tXBaA4T3JbzGwMs6AuVDCJzoLqICc0hgtyrFFF4OSqIAdUFXW/47EiMqKW9vYdFnBERYltM1CKg8+wrCfNTav7bQ8tD/o41QPbVcr9ho9PK7fKIoyURJZP7ldBeSmKqdPCOZMixba9Gjh7JAdw9IibXhV0PZxXPELA8P23+m3f75UBwzFlftcDdQEuaovSUhkYsS2HVgdY2BopiF2jj3BW66jk3WaOZLAPSNsddHxTWHPuyrtsTmcd5bKqIz7XE++5y/i6AypGNi1MZ/nijErHK6eukhWOrAlxYMWolL85YiQVHHzASruD9ikLcHRV0PWno+IdNu6w/dwjEnY/wspxZlsZB5Y7tEegKeLn3LYSXBkEEPjklFGzvYERKN99wFtOBl7VFtW9hMq7JNOlnSMIGfiP/SudSRyywpf2Lae6FHNXArUhH3Ob7E1ll3Un2Thg/yE1yMlOB/qwOrTa/pZObAxTV1j5vlLChB3UTRKPyfkWTooyq9rmtEjg4HI/lxamFMvokxXOrA+xn83p4E2rB3iwPe7kjAKc6WQgWA7rbmAHNp3WvpUBji9AolIZG0xykP+IJwqxNFc4Kv2GK/cpBztdiDLChyeVMdFmYwwvcaHNZHtvRrivI86iLUmnpzQicpWTgT5jzDrgZWw+66I+w+nNEU8UZVPcpSHo4/Bq+6V0t8WzReuu45Tz2spoKxvmg1iAoI/LpxVVbFk8BOqjfk5ssKcbe2pLkvZUlke2JmlP2E4F5L7wD9odCDtlDXc7GbygJeL6znvFZVLCd2ZU2NbH9KSFJwa8FWGBVWzwG/tXwHByclnhu/uWMclZo1H3EeHqlggNNlM7960fAANbklke3RRzevYTRKTV7qCcpYuBzXYHt5X5WVil08JxS1aYXxfk4qn28zd9iSxPeHQT/YWTy6iM+Iclubh6RgmWP2bwY08LF0y1Fx0mRfjJxvi7FS4WbXa8ebwCByJSH4Ax5jngbbuDIz7D2RNdap2kuEtWqA/6uO6YGiY4aE66sjvheiG/oagJGP51b3sds8KXp5VTEyjN3JUI1FYGOMLmVH5JZwJSWcvh+Qx/aI+zw/n3eIXdAfmf9p+dnPG05ohuoR4vCNbDKSVcWB/m9flNTHcoNvzj2gFPV6z9xPRypkSH1mVV+31cvX9pRlcACPw/m7k3Ae5bOwBBs7POVxYe6nC0Wgiwn4jYkjjku5q7gR47gwXYrzzAPrpaWDJI7n9zbQKG++MzfKDczxfbojwxu57bTq6jzmHb92e2Jrl3e2rUHnTrYxnesClsnRTxc2VbdPeLShnhM5OjlkOzwTs70rzjQGBbDPwGZrXac1ibYhmu25J8d6FEAPzw6MaY09u/BpuarHcfj8aY9SLyBnDscAfnLtcvTIryudf6PLfio7yfQ6qCvDK7wbavCPgME8I+6gtQYeHat3aMauPdZEb4zzd2cNPRE2yNu3xqOf+xZsCauuabGvBx2TT7ebsfvb2DTznI9xWcrDCvNsR0m5vPl25OQCILgbwPwxiu607y9ViGZmeLDx8GfjDcF+8az9+LDYeVY2ZTBN7coVFWCVAeMBzkQIJQKJ7ZluTPG+PvveiLTMBv+MuGGP+2f4Wt/XJTy/18vS3Kd97p31nOOS38y5QoB9osw/JmX5pfbIzz2X284LDgMgfbiP6yPrb7qDieZcWWBBe2OZJ3tIlIszGmYzgv3vX0ORGpLQ6fEOQ0nRYqe2FLMsulT28b/VruAmkf/PjVXttD/+XA97cE+5SN3FXulvjeq32QEYwHlkVnRHyc3GxvK84rvSnu3p7a/SzKZ/jD6gGn5kwAPjfcF7/HYRljXgTWODnrB1uHmO8rCpAU+PcXelzrFF7vM/zvhjhv28wh1QV9fG3a4IphVrhiUpQDbERpBni5L8WNG2PeWGTICHMaw7TanL4t22ytDu72uzPwRF+at5zn504d7gt3F+Dd7uSMC5rDoxrmK6XFN17o4foNMdeuEZ8I+ODnr/fZHnvl9Er8PkDgin3tTemywK/eGixw6IXbI2PVvRquu8qFID9eGxvafgNdySzPb3GsyTp0uC/cncN6CrD9rbZVBrmszv3GAoq3SApc8dRWfriq39W2XgD4DD/ZEOfv2+ztgdu3ws81rVHm1oWYWWevo8yL21P8fF3Meu9u3xoCrRUBZtrYimOAl/rSvNmT2nOE6DN8e9VA7jR2qRCRLw/nhe9zWMaYB4DVds8YAOa1RsCdiF/xIC/3pDhnaRe/bx/dJPueEX7oIMr6xPRyvnVwle1x//tOv6Vd88Lbzwgfa41QZfO7eKwzsXcvZODVvjRrYxmnb/WU4bxoqDXqO52c8YyWCCCuP0gUd+lLC//zWh+HLtvCQ9tT7kdW+fgMf+lK8uxWe1HWodVBTrQZXb3Qk+LG9sFpsBduCgMLWuytDsazwl3rB4b3wMkKK7scTws/ICJH7e1FQzmsu5ycsS7s58LmiE4LxynrBjL88LU+9lnUyRdf7XtXcOo5ssKXXrairGJeqT95YwcDuW0rbn8MWaG2zM8pNpukvt6b5pGe1PDsN3DrhhgpZ/d/A8Ook7Vbh2WM+Qew3O4ZDXBuS8QbTxNlSIYjbHfCy1uTfOWVXrakxGr651V8hse6EizvThbNj7yxI80N62PeiS4FvuqgBf1DHfHhr/4bw11bU2yKOa4+e8neXrAn2fLDTs44szninS9JeR9pge3JLD2poX+2J7OOnNZprRHObwqXxgPLB9e/tYNkkWz92Wt93roPgj5Ob7GnverNCIs3xmG4G7wNkMry6GbHewsni8geu+oMKSgxxvyniHwbdu5zHA5To37mTgiyuDvpzenAOOfFnhTHP7WN+j18NZsywjPH1XBMrb3pQ9gYPr1fBXdu3ur9795v+NOmOP+8LclxNt/n3nhzR5rr1rsn4XgfWThzQsD2DofXe1IstlsCyMDijgQfmVLu5O1XAqexh9nd3lznIhzMvi+eWKq92cY+qayQiqXZFMsM+UMiw7+/1Gu//xtW9Y4PtYRLpuTQ91/tK2iUlQX+86Veb1UwyQqXTS2zbdK9G2L2xeA+w0PbkrYFunl8dI+H38vgZ5yccVbV+LKYAAAa1ElEQVRjhNqQViL1Igas7RWGoX98hge3p1juoGyIH7hm/0rP1rp6D37D3d1JHndehO59PN+d5KauhLcizLCP2Y32yiCngOvXDYpFM2Lrp6s/wxOdjhtU7CsiQ6pz97bH4GbgM1j7fYb9DUwq8zOrOsidXQmt4FCqiPCtN3Zwqs09ZwAn14U4sSHMym0lkBYQ4Udv7mBOk70beih++OYOK7r0yvsW+EJjmKaIva04r/akmVLmZ4YvgN3IIynwqrPy17kP7YfAZ3f3gj06LGPMayLyKnCSnbOW+Q3zmsPc2ZnwVmisDB+fYenWJMu2JDil3v7N/P8OruLkFd1FMKzA+Az3bY7zRHeSE2zqrHbl6W1Jbuv0TnRlAElmOd9BKZzDqwM8M6dhhBY47uM2pL8Zjju5x8kZT2+KeHtpW9k7Bn7w+g6cPCtPqg/xkaYSyWUFfHz75Z49VkQeDt9/zXa3vKIiApT5Odmm9qpwOL7/jxiqEulwHNYSwPajsrXMzzm1oT3XxVa8jc/wwOYET3Y76z/3xf0rPBNt7BEDD25JssK5Spsnt6a4qyPurfebFb7ZFnVds+qQi3b3y706LGPMs8BLds8W8hnObQmr6r3UMfD7Vc6irMNqQnyquXSirB+90UfCwfWaBv73rR3uq9l3xcD8SfYL9XmE+bv75XAzTI5EpAtby7z3JSr28Bt+0x7naQdRlg/4xmETSiPKNnBXV5LHNtmPsp7ckuSGdg+p2gGywszqIEfXuDUdHDFTROSsXX85XId1I2CrY6IAzWEfR1YHvTStV5yQhV++ZbsQLQATIz6+PG0vLbO8gjF88/U+2/qzXzn8bIpKVrhgYoSQh3yoTaLAgl1/OSyHZYzZiM2SM7nP6atTy0pjSqAMjd/wx44EL/WmHA3/9AGVlMRTywdP9qR4oH34GqJnt6a4aXPcW9EVQNDHgtIXcL9vtdCO6OCXTs54ZGPYditsxZtc+6r9OlJgbdf6t33KS6OEtjF8/pXeYefsvv5yD57Le2SES+rDTCt3r9lIgZghIu+pRmrHk9wP2K7iP708wOyqgCbfSx0f3LAxzpsOt1x8fHoFk0vhweWD1T0p/ro+xpZklo7E7n82J7Ms607yUFfSc/6KLJw5MUKkBD7uvVAOnJf/i2FX0zfGrBKRF4A97qbeHRe0lfHXzUkbZ1M8iR9+9Xof/31Mje17dFqZn09PLeNrr/VB0ON3UtDHJ1/sYZ+Qb8iJrAE2prLe2eCcQ4CQsV2ZwcOcBvxn7h92Xch9OHBYMxtCEPJpLqvU8Rl+1B7n6r400yvtP30u36ecr73TbyXgPXafvwcDOzLCi7FhTAy99j5EuLwpSoPNhrdZ4O2BTFFkZCJQGzDUOWvCe5SINBljOsG+w3oA+ALQZGdQS1mATzaE+PUmjwnrFPtkhe+91sfvjq2xPbQ14udH+1fyry/16i6IInLpZPvaq0e3JJn7UCeEHXVv3jMiHNsQ4qnZDU4261QCFwM/A5s7/Qb7Fr5p73zWSea0RGCItmZKCWEMN3QmeGG7sxXDj00rh7BW8igKArUhH6c22ZsOCrBowwCU+SFsivDj4+neNB2JrNP7/4O5/+MkRvutkzPOaYqAX6/TkscA6Sw/f6ff0fDaoOHH+5VreqAYiPDRlghhm16hO5nl3o7EzlZkhf4BSAsrnPct3E9EDgZnDuteHKwWNoZ9fLgpohfqWMBn+M26Ad7Y4aiECJfvU8GhFQF9ehUan+Gqqfbrtr+0Lcmr/Y4L7g0PH9yxPkbK2XfeApwzeBh7GGO6gUednPXMlrDWxxoLGEDg1287U3jXBA1f3FejrIIisLAywL4T7G/FuW00mmUYwwPbUlZFW2fMA+fVqnJ7C21dccc1hKnwQgdcZeQEDP+zPsYqh0/m8yeXcUyF6lwKRkY4ozVKxKbf6UplWbllFAotGtgWy/C8za7bgwjWaqEzaZkx5jqsvYW23uW+ZQHm1gVVRDpWSGa4afWAo6GVAcPXDqyEpONErJKP33Bhm/3VwRe6EvwjPkobPQ3cucHWluS8kVQCV4xEwfeAk0HnOSi5q3iUoI9frRlgVb+zMP/8SVEOqw7q82ukCHyyMUxT1L4k4RdrBhi1KY/fsHJbirXOyif7gBkjcVgrcfBOT24IU6kNKsYM7aksf1zlbMUQ4D8OqNRc1khJZjljStR2fqcvI1bfhVHURr4dz/DCVserhSNyWDcBXXYHTSkPcF6tTgvHDH7DN1f10+2wS87ZbVFOqg6q0xoJAWPJhmyyuD3mStmfG9c7mhYCHOPYYQ1K5Z+0Oy5gYE7z2GxnH3TwpPKPYNXUyYPRiY17RYRfv25b6QJAEPj2wVXDfr0THXbQb/B5IVNm7G+j9MOebc8In50cpdrBKt8tG+Kjr+T2Ge7Y7KzkNtA40mWaRQzqI4aPcFZLBF50doF7FgP3b4rT3p8mKXu/Dqz+AIa1A2lnUg9j2JLKcuu6AXakZVjnCxp4qz9T+IvUZ/jq6gFaygJksH/4lMDksJ91qb087o1hQyLDDav7kWF8xoOm0ZXI0u+FiD4Lt6+P2Sq3JMCG5B4+Fx/EBW5aM0Ayu/frIHdMBG7d4l6Hn83JLI0O9haOyNpB9ekSbOwtFKzo/+KV3dzhtYaTIyUj9kPsAM61aYL9hqWG4lUYcKgKBCybhnu3ZcRehF7M92yXtAPb/Xv5bJxcd25+JgKvzGngIAcb6EcUYRljXhGR54Ezhj0G6/O/dFKUOwrYcdcT+I2zOYtTDN7aRDwatnjJ+TihGLaP9nVXAJw+owtRmOhuJ4PmtUbHVnSlKMqwaXRYzHHEDssY8yvA9tb96oDhrPqQrg4pynjDB3UOiziOyGGJSC5EesLJ+GumRMfkaqGiKEOQFRbWOW89NiKHZYzJuZuHnIw/tD7MAWUlNvlWFGVEXNHquLnr84Uqrv1HHJScaY34OWGCigYVZVwgMC3i55gGxxHWWwVxWMaY9cBrTsZeMClaGk02FUUZGVnh0okRppY5FiesK2T7kl85GXRMXYimMi1FqihjGoHmqJ/PzahweoQYsKiQDus5oNPuoIaIn/O15IyijG0ywo1HVNMccZyz7jPGLC6YwxpsUPGC3XF+YH5rVBtUKMpYJSt8c0Y580dWWuoVKIxwNJ/fORl0Un0YAkZnhYoylhjcOvaDGRV845DqkRwpiZM2X8PgXmCb3UGNIR9nq4hUUcYGg/s9I0HDPcfV8OWDqkY6e3odeBAK7LCMMf3A407GXjYpqg0qFKUEefeuHaxsUBs0fHZqGS+fUs9ZzjVX+fzaGBODEW5+HoIHgLPtDjq6PkxTyEdnUpNZilJKyGD1jEMnBLlqUoT5E6PMKFyDkdXGmJ/n/lEU1yAifYDt9cuPPrWVm7WdvaJ4m1yNKAMX1IdZ0BzmjElR2pyvAO6Jzxhjfpn7R7H6LC0GzrM76IKJEcthKYriLXJOKmA4oyrAwtYoZ7eEaS4LEC5egHF/vrOC4jmsJ3HgsI6rCxMJ+YinhllOUlGU4vFuJGWYVu7nc21R5jaFObAmVDTHkUcX8I1df1msKeEBWN2hm22NAz779FZ+0a7TQkUZdST3I+AzfKA6wGUtEY5vCvMBBx2lR8hVxphf7/rLojhKY8zrIvJ3bFQiBct7zm+N8osN8cILLhRF2T2DkVQo5GNeVYDTmsLMbYqwf2WA0GDgICKY4q/iC5Yb+ObunBUUb0oIVh7LlsMCmNccsUq+KopSPAYjqZDfcEJVgPNbIsxpjjCtIkDFbu6/UXJWaeBnxphvDfWiolkhIlOB54Eau2OveWYbv9gY02mhohSSXE5KhGNqQlw1KcrJzWH2qwyORk5qb5YZ4HvGmH/b0wuL6hFE5GFgrt1xD7bHOOPpbeqwFGWk5EkQFtaGOLM5zHmTy5hYHAnCSPiKMeaHe3tRsR3rfThwWCc2RagIGHZonSxFsU8uce43nFoZ4IyWCBe0RmgpC1DmvXTLVqyc1c+G8+LiT0zFWd2Yy57ayk0qIlWU4ZGLpIC68gBfmBTh9OYIh9eEvNwV7THgy8aYp4c7oJg5LGOMEafTwsWb4sx7aqs6LEUZipyT8hlmTQhwTnOEmU0RPjAhuMuLPHcPbQCuNcb8yO7Aok0J8xpUPIoDh3VobYgjywP8faAIrdUVpVTJTfcCPhZWBZjfHObkhjCHTggS2u1KnmdunhTwDnAL8BtjzEYnBxmNKWE9Vr33Orvn++xz27huva4WKuOcPDHnEeV+rpwU5aTGMAdUBynz/r2xFWvq97Ax5vqRHqzoq5nGmC0i8gowy+7YhROjXLc2piJSZfyRm+5lhENqgnymNcqs1igHVbosQBge/Vg6zLuNMTcU8sCj9e5/Bpxk93wfqA0xqcLPhpiWnFHGAXk5qdOqA8xvDHPRlDKmlZeEk9oEdABfBR4frI1XcEbrk3gIWAXMsDOoNuzjrLoQ16+PaXE/ZUxhGGwUlSdBOLHSz5yGCB9uizKx3E91wPNTiy6s+/pGYMVgX4eiMioOyxizQ0Qex6bD8gOnt0S4XqeFylhCQLJW0bu2qgCfaokwryXCIRNKIifVAzyDFYTcaoxZN5onH7VPR0ROwnb5ZKE/CxUPdEJaS84oJUzedO/0miALWyKc2hzhkPfkpDwlQcg3ZgPwNHBvoXNSdhnVT0dE3gKmD/v1WAae/0Q3d3UmdLVQKS3yit4trApwekuUU5vC7FsZIOrNazl3y6WBbmAJsBRYZIxZ46Jd7zLa2byV2HBYua/045PLuKszWRyLFKWQ5O3dmxL188WpZcxsDHPw6BS9Gylp4B4s7eQfjDG9LtvzPkb7M7wfuAybkd0RtSGmRXysTuhqoeJB8rbFHFwV4DOtUU5ojnDkexTnnmUAWA48YIz5idvG7I1Rv/1F5G1gX7vjPv70Vn6nlUgVr5A33TutKsjs+hAXTY6yT0WAoPdXtDuA1cAvgUecqs7dwI0o9UUcOKyPTi7jd1qJVHGB90kQfIZjKwOcWh/ig5Oi7FcVeFeC4NFWwMJOJ3Uj8Lwx5ll3TXKGGw7rLqwGFbYeQ4fUhGgu89Oh00JllMn13TugOsCHm8Oc2VrGjMohKnO6YN8e6AL+DtyBpTrvcNmeEeOGw1oEvIVNTVZD2MdVzWG+vWZARaRKcclLnC+oCTG/KcwZrVZzUO+VkwLeK0FYBzwL3GKM+at7JhWHUXdYxpiOwTyWLYcFMKc1yrffGcD4PBt6K6VKzkn5DaeU+zmzNco5E8O0VQQp96iXymML1gr8ncAyY8xql+0pGq58EyJyOlZLe1tkRAjc2wFZPBd7KyVI3uoeYR/fmxJlfnOUQ2tDhErj+rod+Lsx5rtuGzJauCUNeQboBJrsDPIbw9faonxPp4WKU/KmewdWBriiJcJJzRFOrB31vntO6AdWYEkQfuy2MW7g2l0vIrcDF9gd93BHnPlPbdMISxk+OScV9HFqhZ9TG8PMa4pwxIQgkcHpnqc2xewki7W69wpwN/CgMead3B9zVX3dMs4N3BTf3oADh3VsfZi2oGG9trNX9kSeBOGoSj/nNkU4oyXCflUBJuymCoKHLiUBtmHNQu4GnjLGPL+7F443ZwUuf08ishUHfQs//4/t/HTNgIpIlfeSi6SywuETgnykJcLc1igHVQUJe/9S2Qi8DNwE3G6Miblsjydxe3vT7cAn7A46oynMT9fq96nwnpzUvAlB5jaEuWhqGZPLPCtByGc91nTvZ8BDxpiMy/Z4Hrcd1sPAh4EyO4MOrwlxeLmfF/q1QcW4JF9xXubn9JZc0bsAlR7uaTVID/AP4GasbTHv7OX1Sh6uf7si0oHN1UKAL/5jO/+zeoBSeIwqBeDdNutAxMe3JlsShCPrgoRLY8X4fuBpY8y33DaklHE7wgLrSfOvdgfNb4lYDksZu+QVvTu6MsBFLRFmN4c5ria0y4s8yXasMi3LjTHXum3MWMELDutJJ4NOrAtRW+Zna1z3Fo4p8mqcz6oMML8pzCmNYY6uCRHdbTTtqS9/G1ZLuwexEuev5v4wHiUIxcALDusR4E1sbtUpD/i4rDHMT9aqiLTkyTkpA1Mjfj45KcrMhhBH1IWp9P6UP4W1d+8R4DZjzD929yJ1VoXBdYdljOkWkSXYdFgGOKMlwk/W6LSwJMmTIEyvCnL1xDCzWqMcPaEkFOeCVTr4aWPMl902ZjzhiceX072F8SxEH+jQBhWlQi6SAk6qCjCnLsyHplmlWgLej5J7gbXAn4GbjDHrXbZnXOKZq0RENgIT7Y678plt3LBR29l7ljwJwmFlfmbWhfjklDLaKgPUBj1fjTGOVfTuLqxW64+6bM+4x/UpYR5LgUvtDrq8LcoNG1RE6inyJAg1FX4+0RThnNYIh9eESiEnJcBLwH1Ye/eWuWyPkoeXHNYS4BJsFkE+rC7EB8oDPBNTEamr5EkQTqwKcHZzmDnNEY6uCeF327a9sw14A2vv3p3GmDdctkcZAk/d4iKyHphkd9wXnt/Oj9fp3sJRJ0+CcHKZn4UTI8xpjHBAdZBqbyrO84sybMeSIPwNeNwYY7PJr+IGXoqwAJ7DgcO6dHKUH6/uV4c1GuQXvQv5+OG0cmY1hjmsNuTV5qD5GOApLJ3UXUNJEBTv4jWHdSdwrt1BB0wIcvSEIM/t0GlhUXhXggDTqgJ8ZmKYk1uiHF8aRe+yWG3WHzfGfMltY5SR4TWHdR/wDjbbgFUFfJzXEOa5vn4VkRaKvBrnJ1b6mV0f5sJJUQ6sDg6hOPcUfcAarP17vzXGvOWuOUqh8NyVJyIPA3Ptjntme5Jjl3Rhgj7v7i7zKO/ru2cMh1T4mVMb4tK2KPtVBakL7ey757mLxiKO1Y3pAWCxMeZhl+1RioDnrj0RORYrz2CLtEAwJyJVhs+7EgRhRlWQCxrDXNAW5YCqYClIEBLAC1grzLcbY55z2R6lyHjyihSRtcBku+P+/cUevrNKk+97Ja/o3czqIHPqQ5zVFuWQqiARb352+YFdToLwJ6x6Uq+4ZpUy6ngth5XjcazCfrY4rTnCd3Rv4dBkrJzUMVEfZ0yMcH5LlGlVASZ4U3Ge76R6sXJSv8dqs65iznGKVx3Wjdh2WMIhNUH2j/h4I6YlZ4D3Fr3zG76+bzmnN0c4qr5kJAjPYNWU+oNGUgp4+LYWkQ1Aq91x//fFHv7rnf7xW4k0b7rXUubn0y0RZrVEmFUfdtuy4ZDC2hazyBjzVbeNUbyHVyMsgEXAFXYHLWgK81/jbVqYpzj/QLmfOQ1h5jeHObY2REXA86t7vVire48BNxtj/u6uOYqX8bLDehhrM3TEzqDDJoQ4KOrn1YGxKyI1DFZpGZQgTC/zcW5jmLNbIhw0IURDyNN998CKpP6Olau8zxjziMv2KCWCx67jnYhIGGs1aIrdsV97sYfvj8VpYc5JpYUDJwS5qDHMgtYoR9QEKfN+TiqOlZN6DLjBGLPaXXOUUsTTV7mI/BL4tN1xy7oSzHq8e2w4rJyTEjilOsjsuhAXTStj3/JAKSjOtwOvA7cCDxhjXnfZHqXE8fKUEKxp4SewaeextSFCUT/JRImuFuZN9w6O+JjbGOaKKWVMqfSsBCGfGFaD0OuxJAhLXbZHGUN43WE9AWwC2uwMivgNX50Y4VurSmhvYb4EIeTjS5OinDUxytH1Icq9P90Dq836g1iJc62CoBQFz98JInI98Cm745Z3JThlRbe3Ve95Re/2LfNxWUuEWU0RZjWEvf/FWJHUy1jbYn5ojNnusj3KOMDrERZYwkGbDkuY2RBmetTP217rW7iLBOH0pginNoY5qiZIdd50z6MyhF6sonePYGmlHnPXHGW84cF74v04bVBxy5p+Lv17j/vJ97zEeWXYxz+3RTmtKczhNaFSaMSQxZqarwDuMMbY3piuKIXC0w4r1y1XRH4FXGV3fEKECx/v5r7u5OhPDXNOKiNMqgzw6eYIMydGOLk+bK9ovTuksDRSK4wx/+62MYqSw9MOK4eInIfVD86WiBTgzd4U+y/dYsUJxX63eZHUMZUBZteGuHhqGYdWB4m4HeXtne3AOuBm4G5txKB4Ec/fRTlEZB02VwtzLOqIs2DlVmtqWOh3nCdBmBb2MasuxCenRtmvKkRD2POxVAqrwusdWDkplSAonqaUHNb3AMcbYv+yboAPPT+4kDXS6WG+BCHq56qGEB+aHOXI2jATvNktJh8BXgXuxcpJPe2yPYoybDx/d+UQkROxyt9WOT3Gs9uSfOnFXh7bkoSAzWgrrwrCkZUBTm8IM7clwol1Ia8WvctnO/A2Vo3zm7TGuVKqeP5Oy0dE/oSD7tD59KWz/Padfn6zZoBXcs1XhxKX5rdZD/s4a2KEeY0RDqkJUr+bDcYeoxd4BXgIWKoSBGUsUFIOC0BEMtjsDr07upJZVnbG+eumODd3JHZfC77Mz3+0RpjdGObIurBXm4PuygqsDcZ/Nca84LItilJQSuIOzEdEvg98mQLb3pcRNsYyDGSE2pCPSVF/SahqgQywElhmjPm628YoSjEpOYcFICJrcFB2ZgzRB6zFajx7pxa9U8YLpeqwLgD+CJS5bcsokmZn3737jTFLXLZHUUadknRYACJyLfAvbttRZBJYNc4fw1rd05yUMq4pWYcFICL3AGe5bUeB6QZWYRW9e1SbgyrKTkraYYHz1vYeIL8gQx+WTuoWYKUx5nHXrFIUD1PyDgtARO4DFrpthwOexCqf8ztjzNtuG6MoXmdMOCwAEbkFuMRtO/ZCCngRq765VkFQFJuMGYcFICI/xWpaEXTbljz6sTYYL8Lau/eEy/YoSskyphwWgIj8E/AVYH8Xzciws3zwYmPMAy7aoiiK1xGRa0Vku4weO0RkhYh8R0TcdJaKMmYZcxFWPoOO4xos6cO03K8Z2fvOH78VS8x5G/CIMeb5ERxXUZS9MKYdVj4i8nXgJGA2EMb5e48Bq4EbgKeMMcsLYqCiKHtl3DisfETkGuBIYD/gIKB+Dy+PYbVYXwu8gdVmvb3oRiqKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKopQ+/x/zmhlPQirucQAAAABJRU5ErkJggg=="
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(5), o = n.n(r), i = n(6), a = n.n(i), s = (n(41), n(12)), u = n.n(s), c = n(13), f = n.n(c), l = {
        en: {
            Common: {WaitData: "Waiting for data...", Cancel: "Cancel"},
            Messages: {FollowInstructions: "Please follow the instructions in your IRMA app"},
            Sign: {
                Title: "signing",
                Body: "A website requests that you sign a message using some IRMA attributes. Please scan the QR code with your IRMA app."
            },
            Verify: {
                Title: "showing attribute(s)",
                Body: "A website requests that you disclose some IRMA attributes. Please scan the QR code with your IRMA app."
            },
            Issue: {
                Title: "issuing attribute(s)",
                Body: "A website wants to issue some IRMA attributes to you. Please scan the QR code with your IRMA app."
            }
        },
        nl: {
            Common: {WaitData: "Wachten op data...", Cancel: "Annuleren"},
            Messages: {FollowInstructions: "Volg de instructies in uw IRMA app."},
            Sign: {
                Title: "ondertekenen",
                Body: "Een website vraagt u een bericht te ondertekenen met enkele IRMA attributen. Scan de QR code met uw IRMA app."
            },
            Verify: {
                Title: "attributen tonen",
                Body: "Een website vraagt u enkele IRMA attributen te tonen. Scan de QR code met uw IRMA app."
            },
            Issue: {
                Title: "attributen uitgeven",
                Body: "Een website wil u enkele IRMA attributen geven. Scan de QR code met uw IRMA app."
            }
        }
    };

    function h(t) {
        return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    n.d(e, "SessionStatus", function () {
        return A
    }), n.d(e, "handleSession", function () {
        return w
    }), n.d(e, "setupSession", function () {
        return m
    }), n.d(e, "finishSession", function () {
        return y
    }), n.d(e, "startSession", function () {
        return b
    }), n.d(e, "signSessionRequest", function () {
        return E
    }), n.d(e, "waitConnected", function () {
        return R
    }), n.d(e, "waitDone", function () {
        return C
    }), n.d(e, "UserAgent", function () {
        return I
    }), n.d(e, "detectUserAgent", function () {
        return j
    }), n(15).polyfill(), n(16).polyfill();
    var d = "undefined" != typeof window, p = d ? void 0 : n(17), g = d ? void 0 : n(18), A = {
        Initialized: "INITIALIZED",
        Connected: "CONNECTED",
        Cancelled: "CANCELLED",
        Done: "DONE",
        Timeout: "TIMEOUT"
    }, v = {
        method: "popup",
        element: "irmaqr",
        language: "en",
        showConnectedIcon: !0,
        returnStatus: A.Done,
        server: "",
        token: "",
        resultJwt: !1,
        disableMobile: !1
    };

    function w(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {};
        return m(t, n, e).then(function (t) {
            return y(t, n)
        })
    }

    function m(t, e, n) {
        return e.qr = t, e.done = !1, Promise.resolve().then(function () {
            switch (S("Session started", e.qr), e.options = function (t) {
                S("Options:", t);
                var e = Object.assign({}, v, t);
                e.userAgent = j(), d && !e.disableMobile && e.userAgent !== I.Desktop && ("mobile" !== e.method && S("On mobile; using method mobile instead of " + e.method), e.method = "mobile");
                switch (e.method) {
                    case"url":
                        break;
                    case"mobile":
                        if (e.returnStatus !== A.Done) throw new Error("On mobile sessions, returnStatus must be Done");
                        break;
                    case"popup":
                        if (!d) throw new Error("Cannot use method popup in node");
                        if (!(e.language in l)) throw new Error("Unsupported language, currently supported: " + Object.keys(l).join(", "));
                        e.element = "modal-irmaqr", e.returnStatus = A.Done;
                        break;
                    case"canvas":
                        if (!d) throw new Error("Cannot use method canvas in node");
                        if ("string" != typeof e.element || "" === e.element) throw new Error("canvas method requires `element` to be provided in options");
                        break;
                    case"console":
                        if (d) throw new Error("Cannot use console method in browser");
                        break;
                    default:
                        throw new Error("Unsupported method")
                }
                if ("string" != typeof e.server) throw new Error("server must be a string (URL)");
                if (e.server.length > 0 && e.returnStatus !== A.Done) throw new Error("If server option is used, returnStatus option must be SessionStatus.Done");
                if (e.server.length > 0 && ("string" != typeof e.token || 0 === e.token.length)) throw new Error("if server option is used, providing token option is required");
                if (e.resultJwt && 0 === e.server.length) throw new Error("resultJwt option was enabled but no server to retrieve result from was provided");
                return e
            }(n), e.method = e.options.method, e.method) {
                case"url":
                    return e.done = !0, a.a.toDataURL(JSON.stringify(e.qr));
                case"mobile":
                    !function (t, e) {
                        var n = "qr/json/" + encodeURIComponent(JSON.stringify(t));
                        if (e === I.Android) {
                            var r = "intent://" + n + "#Intent;package=org.irmacard.cardemu;scheme=cardemu;l.timestamp=" + Date.now() + ";S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dorg.irmacard.cardemu;end";
                            S("Navigating:", r), window.location.href = r
                        } else e === I.iOS && (S("Navigating:", "irma://" + n), window.location.href = "irma://" + n)
                    }(t, e.options.userAgent);
                    break;
                case"popup":
                    !function (t, e) {
                        (function () {
                            if (!d || window.document.getElementById("irma-modal")) return;
                            var t = window.document.createElement("div");
                            t.id = "irma-modal", t.innerHTML = f.a, window.document.body.appendChild(t);
                            var e = window.document.createElement("div");
                            e.classList.add("irma-overlay"), window.document.body.appendChild(e), t.offsetHeight
                        })(), function (t, e) {
                            M("irma-cancel-button", "Common.Cancel", e), M("irma-title", U[t] + ".Title", e), M("irma-text", U[t] + ".Body", e)
                        }(t.irmaqr, e), window.document.getElementById("irma-modal").classList.add("irma-show");
                        var n = window.document.getElementById("irma-cancel-button");
                        n.addEventListener("click", function e() {
                            o()(t.u, {method: "DELETE"}), n.removeEventListener("click", e)
                        })
                    }(t, e.options.language);
                case"canvas":
                    if (e.canvas = window.document.getElementById(e.options.element), !e.canvas) return Promise.reject("Specified canvas not found in DOM");
                    !function (t, e) {
                        a.a.toCanvas(t, JSON.stringify(e), {width: "230", margin: "1"}, function (t) {
                            if (t) throw t
                        })
                    }(e.canvas, e.qr);
                    break;
                case"console":
                    p.generate(JSON.stringify(e.qr))
            }
            return e.options.returnStatus === A.Initialized ? (e.done = !0, A.Initialized) : R(e.qr.u)
        })
    }

    function y(t, e) {
        return Promise.resolve().then(function () {
            if (e.done) return t;
            switch (S("Session state changed", t, e.qr.u), e.method) {
                case"popup":
                    M("irma-text", "Messages.FollowInstructions", e.options.language);
                case"canvas":
                    !function (t, e) {
                        var n = t.getContext("2d");
                        if (n.clearRect(0, 0, t.width, t.height), e) {
                            var r = window.devicePixelRatio;
                            t.width = 230 * r, t.height = 230 * r, n.scale(r, r);
                            var o = new Image;
                            o.onload = function () {
                                return n.drawImage(o, 75.5, 40, 79, 150)
                            }, o.src = u.a
                        }
                    }(e.canvas, e.options.showConnectedIcon)
            }
            return e.options.returnStatus === A.Connected ? (e.done = !0, A.Connected) : C(e.qr.u)
        }).then(function (t) {
            return e.done ? t : ("popup" === e.method && P(), 0 === e.options.server.length ? (e.done = !0, t) : T("".concat(e.options.server, "/session/").concat(e.options.token, "/").concat(e.options.resultJwt ? "result-jwt" : "result")))
        }).then(function (t) {
            return e.done ? t : e.options.resultJwt ? t.text() : t.json()
        }).catch(function (t) {
            throw S("Error or unexpected status", t), "popup" === e.method && P(), t
        })
    }

    function b(t, e, n, r, o) {
        return Promise.resolve().then(function () {
            return "object" === h(e) ? "publickey" == n || "hmac" == n ? E(e, n, r, o) : JSON.stringify(e) : e
        }).then(function (e) {
            var o = {};
            switch (n) {
                case void 0:
                case"none":
                    o["Content-Type"] = "application/json";
                    break;
                case"token":
                    o.Authorization = r, o["Content-Type"] = "application/json";
                    break;
                case"publickey":
                case"hmac":
                    o["Content-Type"] = "text/plain";
                    break;
                default:
                    throw new Error("Unsupported authentication method")
            }
            return T("".concat(t, "/session"), {method: "POST", headers: o, body: e})
        }).then(function (t) {
            return t.json()
        })
    }

    function E(t, e, r, o) {
        return Promise.all([n.e(2), n.e(0)]).then(n.t.bind(null, 231, 7)).then(function (n) {
            var i, a;
            if (t.type ? (i = t.type, a = {request: t}) : t.request && (i = t.request.type, a = t), "disclosing" !== i && "issuing" !== i && "signing" !== i) throw new Error("Not an IRMA session request");
            if ("publickey" !== e && "hmac" !== e) throw new Error("Unsupported signing method");
            var s = {
                algorithm: "publickey" === e ? "RS256" : "HS256",
                issuer: o,
                subject: {disclosing: "verification_request", issuing: "issue_request", signing: "signature_request"}[i]
            };
            return n.sign(function (t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }({}, {disclosing: "sprequest", issuing: "iprequest", signing: "absrequest"}[i], a), r, s)
        })
    }

    function R(t) {
        return B(t, A.Initialized).then(function (t) {
            return t !== A.Connected ? Promise.reject(t) : t
        })
    }

    function C(t) {
        return B(t, A.Connected).then(function (t) {
            return t !== A.Done ? Promise.reject(t) : t
        })
    }

    function B(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.Initialized;
        return new Promise(function (n, r) {
            var o = d ? window.EventSource : g;
            if (!o) return S("No support for EventSource, fallback to polling"), void x("".concat(t, "/status"), e, n, r);
            var i = new o("".concat(t, "/statusevents")), a = setTimeout(function () {
                return r("no open message received")
            }, 500);
            i.onopen = function () {
                clearTimeout(a)
            }, i.onmessage = function (t) {
                clearTimeout(a), i.close(), n(JSON.parse(t.data))
            }, i.onerror = function (t) {
                clearTimeout(a), S("Received server event error", t), i.close(), r(t)
            }
        }).catch(function (n) {
            return S("error in server sent event, falling back to polling:", n), function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.Initialized;
                return new Promise(function (n, r) {
                    return x(t, e, n, r)
                })
            }("".concat(t, "/status"), e)
        })
    }

    var x = function t(e, n, r, o) {
        return T(e).then(function (t) {
            return t.json()
        }).then(function (i) {
            return i !== n ? r(i) : setTimeout(t, 500, e, n, r, o)
        }).catch(function (t) {
            return o(t)
        })
    }, I = {Desktop: "Desktop", Android: "Android", iOS: "iOS"};

    function O(t) {
        return t.ok ? t : t.text().then(function (e) {
            throw function () {
                console.warn.apply(console, arguments)
            }("Server returned error:", e), new Error(t.statusText)
        })
    }

    function T() {
        return o.a.apply(null, arguments).then(O)
    }

    function P() {
        d && window.document.getElementById("irma-modal") && window.document.getElementById("irma-modal").classList.remove("irma-show")
    }

    function S() {
        console.log.apply(console, arguments)
    }

    var U = {disclosing: "Verify", issuing: "Issue", signing: "Sign"};

    function M(t, e, n) {
        window.document.getElementById(t).innerText = function (t, e) {
            var n = t.split("."), r = l[e];
            for (var o in n) {
                if (void 0 === r) break;
                r = r[n[o]]
            }
            if (void 0 === r) for (o in r = l[v.language], n) {
                if (void 0 === r) break;
                r = r[n[o]]
            }
            return void 0 === r ? "" : r
        }(e, n)
    }

    function j() {
        return d ? window.MSInputMethodContext && document.documentMode ? (S("Detected IE11"), I.Desktop) : /Android/i.test(window.navigator.userAgent) ? (S("Detected Android"), I.Android) : /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream ? (S("Detected iOS"), I.iOS) : (S("Neither Android nor iOS, assuming desktop"), I.Desktop) : null
    }
}]);