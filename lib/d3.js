/********************************
 ** FILE: lib/d3.min.js
    ********************************/

(function() {
    function e(a) {
        var b = -1,
            c = a.length,
            d = [];
        while (++b < c) d.push(a[b]);
        return d
    }

    function f(a) {
        return Array.prototype.slice.call(a)
    }

    function i() {
        return this
    }

    function j(a, b, c) {
        return function() {
            var d = c.apply(b, arguments);
            return arguments.length ? a : d
        }
    }

    function k(a) {
        return a != null && !isNaN(a)
    }

    function l(a) {
        return a.length
    }

    function m(a) {
        return a == null
    }

    function n(a) {
        return a.replace(/(^\s+)|(\s+$)/g, "").replace(/\s+/g, " ")
    }

    function q() {}

    function r(a) {
        function d() {
            var c = b,
                d = -1,
                e = c.length,
                f;
            while (++d < e)(f = c[d].on) && f.apply(this, arguments);
            return a
        }
        var b = [],
            c = {};
        return d.on = function(d, e) {
            var f, g;
            if (arguments.length < 2) return (f = c[d]) && f.on;
            if (f = c[d]) f.on = null, b = b.slice(0, g = b.indexOf(f)).concat(b.slice(g + 1)), delete c[d];
            return e && b.push(c[d] = {
                on: e
            }), a
        }, d
    }

    function u(a, b) {
        return b - (a ? 1 + Math.floor(Math.log(a + Math.pow(10, 1 + Math.floor(Math.log(a) / Math.LN10) - b)) / Math.LN10) : 1)
    }

    function v(a) {
        return a + ""
    }

    function w(a) {
        var b = a.lastIndexOf("."),
            c = b >= 0 ? a.substring(b) : (b = a.length, ""),
            d = [];
        while (b > 0) d.push(a.substring(b -= 3, b + 3));
        return d.reverse().join(",") + c
    }

    function y(a, b) {
        return {
            scale: Math.pow(10, (8 - b) * 3),
            symbol: a
        }
    }

    function D(a) {
        return function(b) {
            return b <= 0 ? 0 : b >= 1 ? 1 : a(b)
        }
    }

    function E(a) {
        return function(b) {
            return 1 - a(1 - b)
        }
    }

    function F(a) {
        return function(b) {
            return .5 * (b < .5 ? a(2 * b) : 2 - a(2 - 2 * b))
        }
    }

    function G(a) {
        return a
    }

    function H(a) {
        return function(b) {
            return Math.pow(b, a)
        }
    }

    function I(a) {
        return 1 - Math.cos(a * Math.PI / 2)
    }

    function J(a) {
        return Math.pow(2, 10 * (a - 1))
    }

    function K(a) {
        return 1 - Math.sqrt(1 - a * a)
    }

    function L(a, b) {
        var c;
        return arguments.length < 2 && (b = .45), arguments.length < 1 ? (a = 1, c = b / 4) : c = b / (2 * Math.PI) * Math.asin(1 / a),
            function(d) {
                return 1 + a * Math.pow(2, 10 * -d) * Math.sin((d - c) * 2 * Math.PI / b)
            }
    }

    function M(a) {
        return a || (a = 1.70158),
            function(b) {
                return b * b * ((a + 1) * b - a)
            }
    }

    function N(a) {
        return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
    }

    function O() {
        d3.event.stopPropagation(), d3.event.preventDefault()
    }

    function Q(a) {
        return a == "transform" ? d3.interpolateTransform : d3.interpolate
    }

    function R(a, b) {
        return b = b - (a = +a) ? 1 / (b - a) : 0,
            function(c) {
                return (c - a) * b
            }
    }

    function S(a, b) {
        return b = b - (a = +a) ? 1 / (b - a) : 0,
            function(c) {
                return Math.max(0, Math.min(1, (c - a) * b))
            }
    }

    function T(a, b, c) {
        return new U(a, b, c)
    }

    function U(a, b, c) {
        this.r = a, this.g = b, this.b = c
    }

    function V(a) {
        return a < 16 ? "0" + Math.max(0, a).toString(16) : Math.min(255, a).toString(16)
    }

    function W(a, b, c) {
        var d = 0,
            e = 0,
            f = 0,
            g, h, i;
        g = /([a-z]+)\((.*)\)/i.exec(a);
        if (g) {
            h = g[2].split(",");
            switch (g[1]) {
                case "hsl":
                    return c(parseFloat(h[0]), parseFloat(h[1]) / 100, parseFloat(h[2]) / 100);
                case "rgb":
                    return b(Y(h[0]), Y(h[1]), Y(h[2]))
            }
        }
        return (i = Z[a]) ? b(i.r, i.g, i.b) : (a != null && a.charAt(0) === "#" && (a.length === 4 ? (d = a.charAt(1), d += d, e = a.charAt(2), e += e, f = a.charAt(3), f += f) : a.length === 7 && (d = a.substring(1, 3), e = a.substring(3, 5), f = a.substring(5, 7)), d = parseInt(d, 16), e = parseInt(e, 16), f = parseInt(f, 16)), b(d, e, f))
    }

    function X(a, b, c) {
        var d = Math.min(a /= 255, b /= 255, c /= 255),
            e = Math.max(a, b, c),
            f = e - d,
            g, h, i = (e + d) / 2;
        return f ? (h = i < .5 ? f / (e + d) : f / (2 - e - d), a == e ? g = (b - c) / f + (b < c ? 6 : 0) : b == e ? g = (c - a) / f + 2 : g = (a - b) / f + 4, g *= 60) : h = g = 0, _(g, h, i)
    }

    function Y(a) {
        var b = parseFloat(a);
        return a.charAt(a.length - 1) === "%" ? Math.round(b * 2.55) : b
    }

    function _(a, b, c) {
        return new ba(a, b, c)
    }

    function ba(a, b, c) {
        this.h = a, this.s = b, this.l = c
    }

    function bb(a, b, c) {
        function f(a) {
            return a > 360 ? a -= 360 : a < 0 && (a += 360), a < 60 ? d + (e - d) * a / 60 : a < 180 ? e : a < 240 ? d + (e - d) * (240 - a) / 60 : d
        }

        function g(a) {
            return Math.round(f(a) * 255)
        }
        var d, e;
        return a %= 360, a < 0 && (a += 360), b = b < 0 ? 0 : b > 1 ? 1 : b, c = c < 0 ? 0 : c > 1 ? 1 : c, e = c <= .5 ? c * (1 + b) : c + b - c * b, d = 2 * c - e, T(g(a + 120), g(a), g(a - 120))
    }

    function bc(a) {
        return h(a, bi), a
    }

    function bj(a) {
        return function() {
            return bd(a, this)
        }
    }

    function bk(a) {
        return function() {
            return be(a, this)
        }
    }

    function bm(a, b) {
        function f() {
            if (b = this.classList) return b.add(a);
            var b = this.className,
                d = b.baseVal != null,
                e = d ? b.baseVal : b;
            c.lastIndex = 0, c.test(e) || (e = n(e + " " + a), d ? b.baseVal = e : this.className = e)
        }

        function g() {
            if (b = this.classList) return b.remove(a);
            var b = this.className,
                d = b.baseVal != null,
                e = d ? b.baseVal : b;
            e = n(e.replace(c, " ")), d ? b.baseVal = e : this.className = e
        }

        function h() {
            (b.apply(this, arguments) ? f : g).call(this)
        }
        var c = new RegExp("(^|\\s+)" + d3.requote(a) + "(\\s+|$)", "g");
        if (arguments.length < 2) {
            var d = this.node();
            if (e = d.classList) return e.contains(a);
            var e = d.className;
            return c.lastIndex = 0, c.test(e.baseVal != null ? e.baseVal : e)
        }
        return this.each(typeof b == "function" ? h : b ? f : g)
    }

    function bn(a) {
        return {
            __data__: a
        }
    }

    function bo(a) {
        return function() {
            return bh(this, a)
        }
    }

    function bp(a) {
        return arguments.length || (a = d3.ascending),
            function(b, c) {
                return a(b && b.__data__, c && c.__data__)
            }
    }

    function br(a) {
        return h(a, bs), a
    }

    function bt(a, b, c) {
        h(a, bx);
        var d = {},
            e = d3.dispatch("start", "end"),
            f = bA;
        return a.id = b, a.time = c, a.tween = function(b, c) {
            return arguments.length < 2 ? d[b] : (c == null ? delete d[b] : d[b] = c, a)
        }, a.ease = function(b) {
            return arguments.length ? (f = typeof b == "function" ? b : d3.ease.apply(d3, arguments), a) : f
        }, a.each = function(b, c) {
            return arguments.length < 2 ? bB.call(a, b) : (e.on(b, c), a)
        }, d3.timer(function(g) {
            return a.each(function(h, i, j) {
                function p(a) {
                    if (o.active > b) return r();
                    o.active = b;
                    for (var f in d)(f = d[f].call(l, h, i)) && k.push(f);
                    return e.start.call(l, h, i), q(a) || d3.timer(q, 0, c), 1
                }

                function q(a) {
                    if (o.active !== b) return r();
                    var c = (a - m) / n,
                        d = f(c),
                        g = k.length;
                    while (g > 0) k[--g].call(l, d);
                    if (c >= 1) return r(), bz = b, e.end.call(l, h, i), bz = 0, 1
                }

                function r() {
                    return --o.count || delete l.__transition__, 1
                }
                var k = [],
                    l = this,
                    m = a[j][i].delay,
                    n = a[j][i].duration,
                    o = l.__transition__ || (l.__transition__ = {
                        active: 0,
                        count: 0
                    });
                ++o.count, m <= g ? p(g) : d3.timer(p, m, c)
            }), 1
        }, 0, c), a
    }

    function bv(a, b, c) {
        return c != "" && bu
    }

    function bw(a, b) {
        function d(a, d, e) {
            var f = b.call(this, a, d);
            return f == null ? e != "" && bu : e != f && c(e, f)
        }

        function e(a, d, e) {
            return e != b && c(e, b)
        }
        var c = Q(a);
        return typeof b == "function" ? d : b == null ? bv : (b += "", e)
    }

    function bB(a) {
        for (var b = 0, c = this.length; b < c; b++)
            for (var d = this[b], e = 0, f = d.length; e < f; e++) {
                var g = d[e];
                g && a.call(g = g.node, g.__data__, e, b)
            }
        return this
    }

    function bF() {
        var a, b = Date.now(),
            c = bC;
        while (c) a = b - c.then, a >= c.delay && (c.flush = c.callback(a)), c = c.next;
        var d = bG() - b;
        d > 24 ? (isFinite(d) && (clearTimeout(bE), bE = setTimeout(bF, d)), bD = 0) : (bD = 1, bH(bF))
    }

    function bG() {
        var a = null,
            b = bC,
            c = Infinity;
        while (b) b.flush ? b = a ? a.next = b.next : bC = b.next : (c = Math.min(c, b.then + b.delay), b = (a = b).next);
        return c
    }

    function bI(a) {
        var b = [a.a, a.b],
            c = [a.c, a.d],
            d = bK(b),
            e = bJ(b, c),
            f = bK(bL(c, b, -e)) || 0;
        b[0] * c[1] < c[0] * b[1] && (b[0] *= -1, b[1] *= -1, d *= -1, e *= -1), this.rotate = (d ? Math.atan2(b[1], b[0]) : Math.atan2(-c[0], c[1])) * bM, this.translate = [a.e, a.f], this.scale = [d, f], this.skew = f ? Math.atan2(e, f) * bM : 0
    }

    function bJ(a, b) {
        return a[0] * b[0] + a[1] * b[1]
    }

    function bK(a) {
        var b = Math.sqrt(bJ(a, a));
        return b && (a[0] /= b, a[1] /= b), b
    }

    function bL(a, b, c) {
        return a[0] += c * b[0], a[1] += c * b[1], a
    }

    function bN() {}

    function bO(a) {
        var b = a[0],
            c = a[a.length - 1];
        return b < c ? [b, c] : [c, b]
    }

    function bP(a) {
        return a.rangeExtent ? a.rangeExtent() : bO(a.range())
    }

    function bQ(a, b) {
        var c = 0,
            d = a.length - 1,
            e = a[c],
            f = a[d],
            g;
        f < e && (g = c, c = d, d = g, g = e, e = f, f = g);
        if (g = f - e) b = b(g), a[c] = b.floor(e), a[d] = b.ceil(f);
        return a
    }

    function bR() {
        return Math
    }

    function bS(a, b, c, d) {
        function g() {
            var g = a.length == 2 ? bY : bZ,
                i = d ? S : R;
            return e = g(a, b, i, c), f = g(b, a, i, d3.interpolate), h
        }

        function h(a) {
            return e(a)
        }
        var e, f;
        return h.invert = function(a) {
            return f(a)
        }, h.domain = function(b) {
            return arguments.length ? (a = b.map(Number), g()) : a
        }, h.range = function(a) {
            return arguments.length ? (b = a, g()) : b
        }, h.rangeRound = function(a) {
            return h.range(a).interpolate(d3.interpolateRound)
        }, h.clamp = function(a) {
            return arguments.length ? (d = a, g()) : d
        }, h.interpolate = function(a) {
            return arguments.length ? (c = a, g()) : c
        }, h.ticks = function(b) {
            return bW(a, b)
        }, h.tickFormat = function(b) {
            return bX(a, b)
        }, h.nice = function() {
            return bQ(a, bU), g()
        }, h.copy = function() {
            return bS(a, b, c, d)
        }, g()
    }

    function bT(a, b) {
        return d3.rebind(a, b, "range", "rangeRound", "interpolate", "clamp")
    }

    function bU(a) {
        return a = Math.pow(10, Math.round(Math.log(a) / Math.LN10) - 1), {
            floor: function(b) {
                return Math.floor(b / a) * a
            },
            ceil: function(b) {
                return Math.ceil(b / a) * a
            }
        }
    }

    function bV(a, b) {
        var c = bO(a),
            d = c[1] - c[0],
            e = Math.pow(10, Math.floor(Math.log(d / b) / Math.LN10)),
            f = b / d * e;
        return f <= .15 ? e *= 10 : f <= .35 ? e *= 5 : f <= .75 && (e *= 2), c[0] = Math.ceil(c[0] / e) * e, c[1] = Math.floor(c[1] / e) * e + e * .5, c[2] = e, c
    }

    function bW(a, b) {
        return d3.range.apply(d3, bV(a, b))
    }

    function bX(a, b) {
        return d3.format(",." + Math.max(0, -Math.floor(Math.log(bV(a, b)[2]) / Math.LN10 + .01)) + "f")
    }

    function bY(a, b, c, d) {
        var e = c(a[0], a[1]),
            f = d(b[0], b[1]);
        return function(a) {
            return f(e(a))
        }
    }

    function bZ(a, b, c, d) {
        var e = [],
            f = [],
            g = 0,
            h = a.length - 1;
        a[h] < a[0] && (a = a.slice().reverse(), b = b.slice().reverse());
        while (++g <= h) e.push(c(a[g - 1], a[g])), f.push(d(b[g - 1], b[g]));
        return function(b) {
            var c = d3.bisect(a, b, 1, h) - 1;
            return f[c](e[c](b))
        }
    }

    function b$(a, b) {
        function d(c) {
            return a(b(c))
        }
        var c = b.pow;
        return d.invert = function(b) {
            return c(a.invert(b))
        }, d.domain = function(e) {
            return arguments.length ? (b = e[0] < 0 ? cb : ca, c = b.pow, a.domain(e.map(b)), d) : a.domain().map(c)
        }, d.nice = function() {
            return a.domain(bQ(a.domain(), bR)), d
        }, d.ticks = function() {
            var d = bO(a.domain()),
                e = [];
            if (d.every(isFinite)) {
                var f = Math.floor(d[0]),
                    g = Math.ceil(d[1]),
                    h = c(d[0]),
                    i = c(d[1]);
                if (b === cb) {
                    e.push(c(f));
                    for (; f++ < g;)
                        for (var j = 9; j > 0; j--) e.push(c(f) * j)
                } else {
                    for (; f < g; f++)
                        for (var j = 1; j < 10; j++) e.push(c(f) * j);
                    e.push(c(f))
                }
                for (f = 0; e[f] < h; f++);
                for (g = e.length; e[g - 1] > i; g--);
                e = e.slice(f, g)
            }
            return e
        }, d.tickFormat = function(a, e) {
            arguments.length < 2 && (e = b_);
            if (arguments.length < 1) return e;
            var f = a / d.ticks().length,
                g = b === cb ? (h = -1e-12, Math.floor) : (h = 1e-12, Math.ceil),
                h;
            return function(a) {
                return a / c(g(b(a) + h)) < f ? e(a) : ""
            }
        }, d.copy = function() {
            return b$(a.copy(), b)
        }, bT(d, a)
    }

    function ca(a) {
        return Math.log(a < 0 ? 0 : a) / Math.LN10
    }

    function cb(a) {
        return -Math.log(a > 0 ? 0 : -a) / Math.LN10
    }

    function cc(a, b) {
        function e(b) {
            return a(c(b))
        }
        var c = cd(b),
            d = cd(1 / b);
        return e.invert = function(b) {
            return d(a.invert(b))
        }, e.domain = function(b) {
            return arguments.length ? (a.domain(b.map(c)), e) : a.domain().map(d)
        }, e.ticks = function(a) {
            return bW(e.domain(), a)
        }, e.tickFormat = function(a) {
            return bX(e.domain(), a)
        }, e.nice = function() {
            return e.domain(bQ(e.domain(), bU))
        }, e.exponent = function(a) {
            if (!arguments.length) return b;
            var f = e.domain();
            return c = cd(b = a), d = cd(1 / b), e.domain(f)
        }, e.copy = function() {
            return cc(a.copy(), b)
        }, bT(e, a)
    }

    function cd(a) {
        return function(b) {
            return b < 0 ? -Math.pow(-b, a) : Math.pow(b, a)
        }
    }

    function ce(a, b) {
        function f(b) {
            return d[((c[b] || (c[b] = a.push(b))) - 1) % d.length]
        }

        function g(b, c) {
            return d3.range(a.length).map(function(a) {
                return b + c * a
            })
        }
        var c, d, e;
        return f.domain = function(d) {
            if (!arguments.length) return a;
            a = [], c = {};
            var e = -1,
                g = d.length,
                h;
            while (++e < g) c[h = d[e]] || (c[h] = a.push(h));
            return f[b.t](b.x, b.p)
        }, f.range = function(a) {
            return arguments.length ? (d = a, e = 0, b = {
                t: "range",
                x: a
            }, f) : d
        }, f.rangePoints = function(c, h) {
            arguments.length < 2 && (h = 0);
            var i = c[0],
                j = c[1],
                k = (j - i) / (a.length - 1 + h);
            return d = g(a.length < 2 ? (i + j) / 2 : i + k * h / 2, k), e = 0, b = {
                t: "rangePoints",
                x: c,
                p: h
            }, f
        }, f.rangeBands = function(c, h) {
            arguments.length < 2 && (h = 0);
            var i = c[0],
                j = c[1],
                k = (j - i) / (a.length + h);
            return d = g(i + k * h, k), e = k * (1 - h), b = {
                t: "rangeBands",
                x: c,
                p: h
            }, f
        }, f.rangeRoundBands = function(c, h) {
            arguments.length < 2 && (h = 0);
            var i = c[0],
                j = c[1],
                k = Math.floor((j - i) / (a.length + h));
            return d = g(i + Math.round((j - i - (a.length - h) * k) / 2), k), e = Math.round(k * (1 - h)), b = {
                t: "rangeRoundBands",
                x: c,
                p: h
            }, f
        }, f.rangeBand = function() {
            return e
        }, f.rangeExtent = function() {
            return b.t === "range" ? bO(b.x) : b.x
        }, f.copy = function() {
            return ce(a, b)
        }, f.domain(a)
    }

    function cj(a, b) {
        function d() {
            var d = 0,
                f = a.length,
                g = b.length;
            c = [];
            while (++d < g) c[d - 1] = d3.quantile(a, d / g);
            return e
        }

        function e(a) {
            return isNaN(a = +a) ? NaN : b[d3.bisect(c, a)]
        }
        var c;
        return e.domain = function(b) {
            return arguments.length ? (a = b.filter(function(a) {
                return !isNaN(a)
            }).sort(d3.ascending), d()) : a
        }, e.range = function(a) {
            return arguments.length ? (b = a, d()) : b
        }, e.quantiles = function() {
            return c
        }, e.copy = function() {
            return cj(a, b)
        }, d()
    }

    function ck(a, b, c) {
        function f(b) {
            return c[Math.max(0, Math.min(e, Math.floor(d * (b - a))))]
        }

        function g() {
            return d = c.length / (b - a), e = c.length - 1, f
        }
        var d, e;
        return f.domain = function(c) {
            return arguments.length ? (a = +c[0], b = +c[c.length - 1], g()) : [a, b]
        }, f.range = function(a) {
            return arguments.length ? (c = a, g()) : c
        }, f.copy = function() {
            return ck(a, b, c)
        }, g()
    }

    function cn(a) {
        return a.innerRadius
    }

    function co(a) {
        return a.outerRadius
    }

    function cp(a) {
        return a.startAngle
    }

    function cq(a) {
        return a.endAngle
    }

    function cr(a) {
        function g(d) {
            return d.length < 1 ? null : "M" + e(a(cs(this, d, b, c)), f)
        }
        var b = ct,
            c = cu,
            d = "linear",
            e = cv[d],
            f = .7;
        return g.x = function(a) {
            return arguments.length ? (b = a, g) : b
        }, g.y = function(a) {
            return arguments.length ? (c = a, g) : c
        }, g.interpolate = function(a) {
            return arguments.length ? (e = cv[d = a], g) : d
        }, g.tension = function(a) {
            return arguments.length ? (f = a, g) : f
        }, g
    }

    function cs(a, b, c, d) {
        var e = [],
            f = -1,
            g = b.length,
            h = typeof c == "function",
            i = typeof d == "function",
            j;
        if (h && i)
            while (++f < g) e.push([c.call(a, j = b[f], f), d.call(a, j, f)]);
        else if (h)
            while (++f < g) e.push([c.call(a, b[f], f), d]);
        else if (i)
            while (++f < g) e.push([c, d.call(a, b[f], f)]);
        else
            while (++f < g) e.push([c, d]);
        return e
    }

    function ct(a) {
        return a[0]
    }

    function cu(a) {
        return a[1]
    }

    function cw(a) {
        var b = 0,
            c = a.length,
            d = a[0],
            e = [d[0], ",", d[1]];
        while (++b < c) e.push("L", (d = a[b])[0], ",", d[1]);
        return e.join("")
    }

    function cx(a) {
        var b = 0,
            c = a.length,
            d = a[0],
            e = [d[0], ",", d[1]];
        while (++b < c) e.push("V", (d = a[b])[1], "H", d[0]);
        return e.join("")
    }

    function cy(a) {
        var b = 0,
            c = a.length,
            d = a[0],
            e = [d[0], ",", d[1]];
        while (++b < c) e.push("H", (d = a[b])[0], "V", d[1]);
        return e.join("")
    }

    function cz(a, b) {
        return a.length < 4 ? cw(a) : a[1] + cC(a.slice(1, a.length - 1), cD(a, b))
    }

    function cA(a, b) {
        return a.length < 3 ? cw(a) : a[0] + cC((a.push(a[0]), a), cD([a[a.length - 2]].concat(a, [a[1]]), b))
    }

    function cB(a, b, c) {
        return a.length < 3 ? cw(a) : a[0] + cC(a, cD(a, b))
    }

    function cC(a, b) {
        if (b.length < 1 || a.length != b.length && a.length != b.length + 2) return cw(a);
        var c = a.length != b.length,
            d = "",
            e = a[0],
            f = a[1],
            g = b[0],
            h = g,
            i = 1;
        c && (d += "Q" + (f[0] - g[0] * 2 / 3) + "," + (f[1] - g[1] * 2 / 3) + "," + f[0] + "," + f[1], e = a[1], i = 2);
        if (b.length > 1) {
            h = b[1], f = a[i], i++, d += "C" + (e[0] + g[0]) + "," + (e[1] + g[1]) + "," + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1];
            for (var j = 2; j < b.length; j++, i++) f = a[i], h = b[j], d += "S" + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1]
        }
        if (c) {
            var k = a[i];
            d += "Q" + (f[0] + h[0] * 2 / 3) + "," + (f[1] + h[1] * 2 / 3) + "," + k[0] + "," + k[1]
        }
        return d
    }

    function cD(a, b) {
        var c = [],
            d = (1 - b) / 2,
            e, f = a[0],
            g = a[1],
            h = 1,
            i = a.length;
        while (++h < i) e = f, f = g, g = a[h], c.push([d * (g[0] - e[0]), d * (g[1] - e[1])]);
        return c
    }

    function cE(a) {
        if (a.length < 3) return cw(a);
        var b = 1,
            c = a.length,
            d = a[0],
            e = d[0],
            f = d[1],
            g = [e, e, e, (d = a[1])[0]],
            h = [f, f, f, d[1]],
            i = [e, ",", f];
        cM(i, g, h);
        while (++b < c) d = a[b], g.shift(), g.push(d[0]), h.shift(), h.push(d[1]), cM(i, g, h);
        b = -1;
        while (++b < 2) g.shift(), g.push(d[0]), h.shift(), h.push(d[1]), cM(i, g, h);
        return i.join("")
    }

    function cF(a) {
        if (a.length < 4) return cw(a);
        var b = [],
            c = -1,
            d = a.length,
            e, f = [0],
            g = [0];
        while (++c < 3) e = a[c], f.push(e[0]), g.push(e[1]);
        b.push(cI(cL, f) + "," + cI(cL, g)), --c;
        while (++c < d) e = a[c], f.shift(), f.push(e[0]), g.shift(), g.push(e[1]), cM(b, f, g);
        return b.join("")
    }

    function cG(a) {
        var b, c = -1,
            d = a.length,
            e = d + 4,
            f, g = [],
            h = [];
        while (++c < 4) f = a[c % d], g.push(f[0]), h.push(f[1]);
        b = [cI(cL, g), ",", cI(cL, h)], --c;
        while (++c < e) f = a[c % d], g.shift(), g.push(f[0]), h.shift(), h.push(f[1]), cM(b, g, h);
        return b.join("")
    }

    function cH(a, b) {
        var c = a.length - 1,
            d = a[0][0],
            e = a[0][1],
            f = a[c][0] - d,
            g = a[c][1] - e,
            h = -1,
            i, j;
        while (++h <= c) i = a[h], j = h / c, i[0] = b * i[0] + (1 - b) * (d + j * f), i[1] = b * i[1] + (1 - b) * (e + j * g);
        return cE(a)
    }

    function cI(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
    }

    function cM(a, b, c) {
        a.push("C", cI(cJ, b), ",", cI(cJ, c), ",", cI(cK, b), ",", cI(cK, c), ",", cI(cL, b), ",", cI(cL, c))
    }

    function cN(a, b) {
        return (b[1] - a[1]) / (b[0] - a[0])
    }

    function cO(a) {
        var b = 0,
            c = a.length - 1,
            d = [],
            e = a[0],
            f = a[1],
            g = d[0] = cN(e, f);
        while (++b < c) d[b] = g + (g = cN(e = f, f = a[b + 1]));
        return d[b] = g, d
    }

    function cP(a) {
        var b = [],
            c, d, e, f, g = cO(a),
            h = -1,
            i = a.length - 1;
        while (++h < i) c = cN(a[h], a[h + 1]), Math.abs(c) < 1e-6 ? g[h] = g[h + 1] = 0 : (d = g[h] / c, e = g[h + 1] / c, f = d * d + e * e, f > 9 && (f = c * 3 / Math.sqrt(f), g[h] = f * d, g[h + 1] = f * e));
        h = -1;
        while (++h <= i) f = (a[Math.min(i, h + 1)][0] - a[Math.max(0, h - 1)][0]) / (6 * (1 + g[h] * g[h])), b.push([f || 0, g[h] * f || 0]);
        return b
    }

    function cQ(a) {
        return a.length < 3 ? cw(a) : a[0] + cC(a, cP(a))
    }

    function cR(a) {
        var b, c = -1,
            d = a.length,
            e, f;
        while (++c < d) b = a[c], e = b[0], f = b[1] + cl, b[0] = e * Math.cos(f), b[1] = e * Math.sin(f);
        return a
    }

    function cS(a) {
        function j(f) {
            if (f.length < 1) return null;
            var j = cs(this, f, b, d),
                k = cs(this, f, b === c ? cT(j) : c, d === e ? cU(j) : e);
            return "M" + g(a(k), i) + "L" + h(a(j.reverse()), i) + "Z"
        }
        var b = ct,
            c = ct,
            d = 0,
            e = cu,
            f, g, h, i = .7;
        return j.x = function(a) {
            return arguments.length ? (b = c = a, j) : c
        }, j.x0 = function(a) {
            return arguments.length ? (b = a, j) : b
        }, j.x1 = function(a) {
            return arguments.length ? (c = a, j) : c
        }, j.y = function(a) {
            return arguments.length ? (d = e = a, j) : e
        }, j.y0 = function(a) {
            return arguments.length ? (d = a, j) : d
        }, j.y1 = function(a) {
            return arguments.length ? (e = a, j) : e
        }, j.interpolate = function(a) {
            return arguments.length ? (g = cv[f = a], h = g.reverse || g, j) : f
        }, j.tension = function(a) {
            return arguments.length ? (i = a, j) : i
        }, j.interpolate("linear")
    }

    function cT(a) {
        return function(b, c) {
            return a[c][0]
        }
    }

    function cU(a) {
        return function(b, c) {
            return a[c][1]
        }
    }

    function cV(a) {
        return a.source
    }

    function cW(a) {
        return a.target
    }

    function cX(a) {
        return a.radius
    }

    function cY(a) {
        return a.startAngle
    }

    function cZ(a) {
        return a.endAngle
    }

    function c$(a) {
        return [a.x, a.y]
    }

    function c_(a) {
        return function() {
            var b = a.apply(this, arguments),
                c = b[0],
                d = b[1] + cl;
            return [c * Math.cos(d), c * Math.sin(d)]
        }
    }

    function db(a, b) {
        var c = (a.ownerSVGElement || a).createSVGPoint();
        if (da < 0 && (window.scrollX || window.scrollY)) {
            var d = d3.select(document.body).append("svg").style("position", "absolute").style("top", 0).style("left", 0),
                e = d[0][0].getScreenCTM();
            da = !e.f && !e.e, d.remove()
        }
        return da ? (c.x = b.pageX, c.y = b.pageY) : (c.x = b.clientX, c.y = b.clientY), c = c.matrixTransform(a.getScreenCTM().inverse()), [c.x, c.y]
    }

    function dc() {
        return 64
    }

    function dd() {
        return "circle"
    }

    function dh(a, b) {
        a.attr("transform", function(a) {
            return "translate(" + b(a) + ",0)"
        })
    }

    function di(a, b) {
        a.attr("transform", function(a) {
            return "translate(0," + b(a) + ")"
        })
    }

    function dj(a, b, c) {
        e = [];
        if (c && b.length > 1) {
            var d = bO(a.domain()),
                e, f = -1,
                g = b.length,
                h = (b[1] - b[0]) / ++c,
                i, j;
            while (++f < g)
                for (i = c; --i > 0;)(j = +b[f] - i * h) >= d[0] && e.push(j);
            for (--f, i = 0; ++i < c && (j = +b[f] + i * h) < d[1];) e.push(j)
        }
        return e
    }

    function dv(a, b) {
        a.select(".extent").attr("x", b[0][0]), a.selectAll(".n,.s,.w,.nw,.sw").attr("x", b[0][0] - 2), a.selectAll(".e,.ne,.se").attr("x", b[1][0] - 3), a.selectAll(".extent,.n,.s").attr("width", b[1][0] - b[0][0])
    }

    function dw(a, b) {
        a.select(".extent").attr("y", b[0][1]), a.selectAll(".n,.e,.w,.nw,.ne").attr("y", b[0][1] - 3), a.selectAll(".s,.se,.sw").attr("y", b[1][1] - 4), a.selectAll(".extent,.e,.w").attr("height", b[1][1] - b[0][1])
    }

    function dx() {
        d3.event.keyCode == 32 && dm && !dr && (dt = null, du[0] -= dq[1][0], du[1] -= dq[1][1], dr = 2, O())
    }

    function dy() {
        d3.event.keyCode == 32 && dr == 2 && (du[0] += dq[1][0], du[1] += dq[1][1], dr = 0, O())
    }

    function dz() {
        if (du) {
            var a = d3.svg.mouse(dm),
                b = d3.select(dm);
            dr || (d3.event.altKey ? (dt || (dt = [(dq[0][0] + dq[1][0]) / 2, (dq[0][1] + dq[1][1]) / 2]), du[0] = dq[+(a[0] < dt[0])][0], du[1] = dq[+(a[1] < dt[1])][1]) : dt = null), dn && (dA(a, dn, 0), dv(b, dq)), dp && (dA(a, dp, 1), dw(b, dq)), dl("brush")
        }
    }

    function dA(a, b, c) {
        var d = bP(b),
            e = d[0],
            f = d[1],
            g = du[c],
            h = dq[1][c] - dq[0][c],
            i, j;
        dr && (e -= g, f -= h + g), i = Math.max(e, Math.min(f, a[c])), dr ? j = (i += g) + h : (dt && (g = Math.max(e, Math.min(f, 2 * dt[c] - i))), g < i ? (j = i, i = g) : j = g), dq[0][c] = i, dq[1][c] = j
    }

    function dB() {
        du && (dz(), d3.select(dm).selectAll(".resize").style("pointer-events", dk.empty() ? "none" : "all"), dl("brushend"), dk = dl = dm = dn = dp = dq = dr = ds = dt = du = null, O())
    }

    function dK(a) {
        var b = dL(),
            c = d3.event,
            d = d3.event = {
                type: a
            };
        b && (d.x = b[0] + dH[0], d.y = b[1] + dH[1], d.dx = b[0] - dI[0], d.dy = b[1] - dI[1], dJ |= d.dx | d.dy, dI = b);
        try {
            dD[a].apply(dF, dG)
        } finally {
            d3.event = c
        }
        c.stopPropagation(), c.preventDefault()
    }

    function dL() {
        var a = dF.parentNode,
            b = d3.event.changedTouches;
        return a && (b ? d3.svg.touches(a, b)[0] : d3.svg.mouse(a))
    }

    function dM() {
        if (!dF) return;
        var a = dF.parentNode;
        if (!a) return dN();
        dK("drag"), O()
    }

    function dN() {
        if (!dF) return;
        dK("dragend"), dJ && (O(), dJ = d3.event.target === dE), dD = dE = dF = dG = dH = dI = null
    }

    function dO() {
        dJ && (O(), dJ = 0)
    }

    function d_(a) {
        return [a[0] - dU[0], a[1] - dU[1], dU[2]]
    }

    function ea() {
        dP || (dP = d3.select("body").append("div").style("visibility", "hidden").style("top", 0).style("height", 0).style("width", 0).style("overflow-y", "scroll").append("div").style("height", "2000px").node().parentNode);
        var a = d3.event,
            b;
        try {
            dP.scrollTop = 1e3, dP.dispatchEvent(a), b = 1e3 - dP.scrollTop
        } catch (c) {
            b = a.wheelDelta || -a.detail * 5
        }
        return b * .005
    }

    function eb() {
        var a = d3.svg.touches(dY),
            b = -1,
            c = a.length,
            d;
        while (++b < c) dS[(d = a[b]).identifier] = d_(d);
        return a
    }

    function ec() {
        var a = d3.svg.touches(dY);
        switch (a.length) {
            case 1:
                var b = a[0];
                eg(dU[2], b, dS[b.identifier]);
                break;
            case 2:
                var c = a[0],
                    d = a[1],
                    e = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2],
                    f = dS[c.identifier],
                    g = dS[d.identifier],
                    h = [(f[0] + g[0]) / 2, (f[1] + g[1]) / 2, f[2]];
                eg(Math.log(d3.event.scale) / Math.LN2 + f[2], e, h)
        }
    }

    function ed() {
        dR = null, dQ && (d$ = 1, eg(dU[2], d3.svg.mouse(dY), dQ))
    }

    function ee() {
        dQ && (d$ && (O(), d$ = dX === d3.event.target), dU = dV = dW = dX = dY = dZ = dQ = null)
    }

    function ef() {
        d$ && (O(), d$ = 0)
    }

    function eg(a, b, c) {
        function l(a, b, c) {
            a.domain(a.range().map(function(f) {
                return a.invert((f - c) * d / e + b)
            }))
        }
        a = ei(a, 2);
        var d = Math.pow(2, dU[2]),
            e = Math.pow(2, a),
            f = Math.pow(2, (dU[2] = a) - c[2]),
            g = dU[0],
            h = dU[1],
            i = dU[0] = ei(b[0] - c[0] * f, 0, e),
            j = dU[1] = ei(b[1] - c[1] * f, 1, e),
            k = d3.event;
        d3.event = {
            scale: e,
            translate: [i, j],
            transform: function(a, b) {
                a && l(a, g, i), b && l(b, h, j)
            }
        };
        try {
            dW.apply(dY, dZ)
        } finally {
            d3.event = k
        }
        k.preventDefault()
    }

    function ei(a, b, c) {
        var d = dV[b],
            e = d[0],
            f = d[1];
        return arguments.length === 3 ? Math.max(f * (f === Infinity ? -Infinity : 1 / c - 1), Math.min(e === -Infinity ? Infinity : e, a / c)) * c : Math.max(e, Math.min(f, a))
    }
    Date.now || (Date.now = function() {
        return +(new Date)
    });
    try {
        document.createElement("div").style.setProperty("opacity", 0, "")
    } catch (a) {
        var b = CSSStyleDeclaration.prototype,
            c = b.setProperty;
        b.setProperty = function(a, b, d) {
            c.call(this, a, b + "", d)
        }
    }
    d3 = {
        version: "2.7.4"
    };
    var d = f;
    try {
        d(document.documentElement.childNodes)[0].nodeType
    } catch (g) {
        d = e
    }
    var h = [].__proto__ ? function(a, b) {
        a.__proto__ = b
    } : function(a, b) {
        for (var c in b) a[c] = b[c]
    };
    d3.functor = function(a) {
        return typeof a == "function" ? a : function() {
            return a
        }
    }, d3.rebind = function(a, b) {
        var c = 1,
            d = arguments.length,
            e;
        while (++c < d) a[e = arguments[c]] = j(a, b, b[e]);
        return a
    }, d3.ascending = function(a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN
    }, d3.descending = function(a, b) {
        return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN
    }, d3.mean = function(a, b) {
        var c = a.length,
            d, e = 0,
            f = -1,
            g = 0;
        if (arguments.length === 1)
            while (++f < c) k(d = a[f]) && (e += (d - e) / ++g);
        else
            while (++f < c) k(d = b.call(a, a[f], f)) && (e += (d - e) / ++g);
        return g ? e : undefined
    }, d3.median = function(a, b) {
        return arguments.length > 1 && (a = a.map(b)), a = a.filter(k), a.length ? d3.quantile(a.sort(d3.ascending), .5) : undefined
    }, d3.min = function(a, b) {
        var c = -1,
            d = a.length,
            e, f;
        if (arguments.length === 1) {
            while (++c < d && ((e = a[c]) == null || e != e)) e = undefined;
            while (++c < d)(f = a[c]) != null && e > f && (e = f)
        } else {
            while (++c < d && ((e = b.call(a, a[c], c)) == null || e != e)) e = undefined;
            while (++c < d)(f = b.call(a, a[c], c)) != null && e > f && (e = f)
        }
        return e
    }, d3.max = function(a, b) {
        var c = -1,
            d = a.length,
            e, f;
        if (arguments.length === 1) {
            while (++c < d && ((e = a[c]) == null || e != e)) e = undefined;
            while (++c < d)(f = a[c]) != null && f > e && (e = f)
        } else {
            while (++c < d && ((e = b.call(a, a[c], c)) == null || e != e)) e = undefined;
            while (++c < d)(f = b.call(a, a[c], c)) != null && f > e && (e = f)
        }
        return e
    }, d3.extent = function(a, b) {
        var c = -1,
            d = a.length,
            e, f, g;
        if (arguments.length === 1) {
            while (++c < d && ((e = g = a[c]) == null || e != e)) e = g = undefined;
            while (++c < d)(f = a[c]) != null && (e > f && (e = f), g < f && (g = f))
        } else {
            while (++c < d && ((e = g = b.call(a, a[c], c)) == null || e != e)) e = undefined;
            while (++c < d)(f = b.call(a, a[c], c)) != null && (e > f && (e = f), g < f && (g = f))
        }
        return [e, g]
    }, d3.random = {
        normal: function(a, b) {
            return arguments.length < 2 && (b = 1), arguments.length < 1 && (a = 0),
                function() {
                    var c, d, e;
                    do c = Math.random() * 2 - 1, d = Math.random() * 2 - 1, e = c * c + d * d; while (!e || e > 1);
                    return a + b * c * Math.sqrt(-2 * Math.log(e) / e)
                }
        }
    }, d3.sum = function(a, b) {
        var c = 0,
            d = a.length,
            e, f = -1;
        if (arguments.length === 1)
            while (++f < d) isNaN(e = +a[f]) || (c += e);
        else
            while (++f < d) isNaN(e = +b.call(a, a[f], f)) || (c += e);
        return c
    }, d3.quantile = function(a, b) {
        var c = (a.length - 1) * b + 1,
            d = Math.floor(c),
            e = a[d - 1],
            f = c - d;
        return f ? e + f * (a[d] - e) : e
    }, d3.transpose = function(a) {
        return d3.zip.apply(d3, a)
    }, d3.zip = function() {
        if (!(e = arguments.length)) return [];
        for (var a = -1, b = d3.min(arguments, l), c = new Array(b); ++a < b;)
            for (var d = -1, e, f = c[a] = new Array(e); ++d < e;) f[d] = arguments[d][a];
        return c
    }, d3.bisectLeft = function(a, b, c, d) {
        arguments.length < 3 && (c = 0), arguments.length < 4 && (d = a.length);
        while (c < d) {
            var e = c + d >> 1;
            a[e] < b ? c = e + 1 : d = e
        }
        return c
    }, d3.bisect = d3.bisectRight = function(a, b, c, d) {
        arguments.length < 3 && (c = 0), arguments.length < 4 && (d = a.length);
        while (c < d) {
            var e = c + d >> 1;
            b < a[e] ? d = e : c = e + 1
        }
        return c
    }, d3.first = function(a, b) {
        var c = 0,
            d = a.length,
            e = a[0],
            f;
        arguments.length === 1 && (b = d3.ascending);
        while (++c < d) b.call(a, e, f = a[c]) > 0 && (e = f);
        return e
    }, d3.last = function(a, b) {
        var c = 0,
            d = a.length,
            e = a[0],
            f;
        arguments.length === 1 && (b = d3.ascending);
        while (++c < d) b.call(a, e, f = a[c]) <= 0 && (e = f);
        return e
    }, d3.nest = function() {
        function f(c, g) {
            if (g >= b.length) return e ? e.call(a, c) : d ? c.sort(d) : c;
            var h = -1,
                i = c.length,
                j = b[g++],
                k, l, m = {};
            while (++h < i)(k = j(l = c[h])) in m ? m[k].push(l) : m[k] = [l];
            for (k in m) m[k] = f(m[k], g);
            return m
        }

        function g(a, d) {
            if (d >= b.length) return a;
            var e = [],
                f = c[d++],
                h;
            for (h in a) e.push({
                key: h,
                values: g(a[h], d)
            });
            return f && e.sort(function(a, b) {
                return f(a.key, b.key)
            }), e
        }
        var a = {},
            b = [],
            c = [],
            d, e;
        return a.map = function(a) {
            return f(a, 0)
        }, a.entries = function(a) {
            return g(f(a, 0), 0)
        }, a.key = function(c) {
            return b.push(c), a
        }, a.sortKeys = function(d) {
            return c[b.length - 1] = d, a
        }, a.sortValues = function(b) {
            return d = b, a
        }, a.rollup = function(b) {
            return e = b, a
        }, a
    }, d3.keys = function(a) {
        var b = [];
        for (var c in a) b.push(c);
        return b
    }, d3.values = function(a) {
        var b = [];
        for (var c in a) b.push(a[c]);
        return b
    }, d3.entries = function(a) {
        var b = [];
        for (var c in a) b.push({
            key: c,
            value: a[c]
        });
        return b
    }, d3.permute = function(a, b) {
        var c = [],
            d = -1,
            e = b.length;
        while (++d < e) c[d] = a[b[d]];
        return c
    }, d3.merge = function(a) {
        return Array.prototype.concat.apply([], a)
    }, d3.split = function(a, b) {
        var c = [],
            d = [],
            e, f = -1,
            g = a.length;
        arguments.length < 2 && (b = m);
        while (++f < g) b.call(d, e = a[f], f) ? d = [] : (d.length || c.push(d), d.push(e));
        return c
    }, d3.range = function(a, b, c) {
        arguments.length < 3 && (c = 1, arguments.length < 2 && (b = a, a = 0));
        if ((b - a) / c == Infinity) throw new Error("infinite range");
        var d = [],
            e = -1,
            f;
        if (c < 0)
            while ((f = a + c * ++e) > b) d.push(f);
        else
            while ((f = a + c * ++e) < b) d.push(f);
        return d
    }, d3.requote = function(a) {
        return a.replace(o, "\\$&")
    };
    var o = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    d3.round = function(a, b) {
        return b ? Math.round(a * (b = Math.pow(10, b))) / b : Math.round(a)
    }, d3.xhr = function(a, b, c) {
        var d = new XMLHttpRequest;
        arguments.length < 3 ? (c = b, b = null) : b && d.overrideMimeType && d.overrideMimeType(b), d.open("GET", a, !0), b && d.setRequestHeader("Accept", b), d.onreadystatechange = function() {
            d.readyState === 4 && c(d.status < 300 ? d : null)
        }, d.send(null)
    }, d3.text = function(a, b, c) {
        function d(a) {
            c(a && a.responseText)
        }
        arguments.length < 3 && (c = b, b = null), d3.xhr(a, b, d)
    }, d3.json = function(a, b) {
        d3.text(a, "application/json", function(a) {
            b(a ? JSON.parse(a) : null)
        })
    }, d3.html = function(a, b) {
        d3.text(a, "text/html", function(a) {
            if (a != null) {
                var c = document.createRange();
                c.selectNode(document.body), a = c.createContextualFragment(a)
            }
            b(a)
        })
    }, d3.xml = function(a, b, c) {
        function d(a) {
            c(a && a.responseXML)
        }
        arguments.length < 3 && (c = b, b = null), d3.xhr(a, b, d)
    };
    var p = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    d3.ns = {
        prefix: p,
        qualify: function(a) {
            var b = a.indexOf(":");
            return b < 0 ? a in p ? {
                space: p[a],
                local: a
            } : a : {
                space: p[a.substring(0, b)],
                local: a.substring(b + 1)
            }
        }
    }, d3.dispatch = function() {
        var a = new q,
            b = -1,
            c = arguments.length;
        while (++b < c) a[arguments[b]] = r(a);
        return a
    }, q.prototype.on = function(a, b) {
        var c = a.indexOf("."),
            d = "";
        return c > 0 && (d = a.substring(c + 1), a = a.substring(0, c)), arguments.length < 2 ? this[a].on(d) : this[a].on(d, b)
    }, d3.format = function(a) {
        var b = s.exec(a),
            c = b[1] || " ",
            d = b[3] || "",
            e = b[5],
            f = +b[6],
            g = b[7],
            h = b[8],
            i = b[9],
            j = 1,
            k = "",
            l = !1;
        h && (h = +h.substring(1)), e && (c = "0", g && (f -= Math.floor((f - 1) / 4)));
        switch (i) {
            case "n":
                g = !0, i = "g";
                break;
            case "%":
                j = 100, k = "%", i = "f";
                break;
            case "p":
                j = 100, k = "%", i = "r";
                break;
            case "d":
                l = !0, h = 0;
                break;
            case "s":
                j = -1, i = "r"
        }
        return i == "r" && !h && (i = "g"), i = t[i] || v,
            function(a) {
                if (l && a % 1) return "";
                var b = a < 0 && (a = -a) ? "&minus;" : d;
                if (j < 0) {
                    var m = d3.formatPrefix(a, h);
                    a *= m.scale, k = m.symbol
                } else a *= j;
                a = i(a, h);
                if (e) {
                    var n = a.length + b.length;
                    n < f && (a = (new Array(f - n + 1)).join(c) + a), g && (a = w(a)), a = b + a
                } else {
                    g && (a = w(a)), a = b + a;
                    var n = a.length;
                    n < f && (a = (new Array(f - n + 1)).join(c) + a)
                }
                return a + k
            }
    };
    var s = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/,
        t = {
            g: function(a, b) {
                return a.toPrecision(b)
            },
            e: function(a, b) {
                return a.toExponential(b)
            },
            f: function(a, b) {
                return a.toFixed(b)
            },
            r: function(a, b) {
                return d3.round(a, b = u(a, b)).toFixed(Math.max(0, Math.min(20, b)))
            }
        },
        x = ["y", "z", "a", "f", "p", "n", "&mu;", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(y);
    d3.formatPrefix = function(a, b) {
        var c = 0;
        return a && (a < 0 && (a *= -1), b && (a = d3.round(a, u(a, b))), c = 1 + Math.floor(1e-12 + Math.log(a) / Math.LN10), c = Math.max(-24, Math.min(24, Math.floor((c <= 0 ? c + 1 : c - 1) / 3) * 3))), x[8 + c / 3]
    };
    var z = H(2),
        A = H(3),
        B = {
            linear: function() {
                return G
            },
            poly: H,
            quad: function() {
                return z
            },
            cubic: function() {
                return A
            },
            sin: function() {
                return I
            },
            exp: function() {
                return J
            },
            circle: function() {
                return K
            },
            elastic: L,
            back: M,
            bounce: function() {
                return N
            }
        },
        C = {
            "in": function(a) {
                return a
            },
            out: E,
            "in-out": F,
            "out-in": function(a) {
                return F(E(a))
            }
        };
    d3.ease = function(a) {
        var b = a.indexOf("-"),
            c = b >= 0 ? a.substring(0, b) : a,
            d = b >= 0 ? a.substring(b + 1) : "in";
        return D(C[d](B[c].apply(null, Array.prototype.slice.call(arguments, 1))))
    }, d3.event = null, d3.interpolate = function(a, b) {
        var c = d3.interpolators.length,
            d;
        while (--c >= 0 && !(d = d3.interpolators[c](a, b)));
        return d
    }, d3.interpolateNumber = function(a, b) {
        return b -= a,
            function(c) {
                return a + b * c
            }
    }, d3.interpolateRound = function(a, b) {
        return b -= a,
            function(c) {
                return Math.round(a + b * c)
            }
    }, d3.interpolateString = function(a, b) {
        var c, d, e, f = 0,
            g = 0,
            h = [],
            i = [],
            j, k;
        P.lastIndex = 0;
        for (d = 0; c = P.exec(b); ++d) c.index && h.push(b.substring(f, g = c.index)), i.push({
            i: h.length,
            x: c[0]
        }), h.push(null), f = P.lastIndex;
        f < b.length && h.push(b.substring(f));
        for (d = 0, j = i.length;
            (c = P.exec(a)) && d < j; ++d) {
            k = i[d];
            if (k.x == c[0]) {
                if (k.i)
                    if (h[k.i + 1] == null) {
                        h[k.i - 1] += k.x, h.splice(k.i, 1);
                        for (e = d + 1; e < j; ++e) i[e].i--
                    } else {
                        h[k.i - 1] += k.x + h[k.i + 1], h.splice(k.i, 2);
                        for (e = d + 1; e < j; ++e) i[e].i -= 2
                    }
                else if (h[k.i + 1] == null) h[k.i] = k.x;
                else {
                    h[k.i] = k.x + h[k.i + 1], h.splice(k.i + 1, 1);
                    for (e = d + 1; e < j; ++e) i[e].i--
                }
                i.splice(d, 1), j--, d--
            } else k.x = d3.interpolateNumber(parseFloat(c[0]), parseFloat(k.x))
        }
        while (d < j) k = i.pop(), h[k.i + 1] == null ? h[k.i] = k.x : (h[k.i] = k.x + h[k.i + 1], h.splice(k.i + 1, 1)), j--;
        return h.length === 1 ? h[0] == null ? i[0].x : function() {
            return b
        } : function(a) {
            for (d = 0; d < j; ++d) h[(k = i[d]).i] = k.x(a);
            return h.join("")
        }
    }, d3.interpolateTransform = function(a, b) {
        var c = [],
            d = [],
            e, f = d3.transform(a),
            g = d3.transform(b),
            h = f.translate,
            i = g.translate,
            j = f.rotate,
            k = g.rotate,
            l = f.skew,
            m = g.skew,
            n = f.scale,
            o = g.scale;
        return h[0] != i[0] || h[1] != i[1] ? (c.push("translate(", null, ",", null, ")"), d.push({
                i: 1,
                x: d3.interpolateNumber(h[0], i[0])
            }, {
                i: 3,
                x: d3.interpolateNumber(h[1], i[1])
            })) : i[0] || i[1] ? c.push("translate(" + i + ")") : c.push(""), j != k ? d.push({
                i: c.push(c.pop() + "rotate(", null, ")") - 2,
                x: d3.interpolateNumber(j, k)
            }) : k && c.push(c.pop() + "rotate(" + k + ")"), l != m ? d.push({
                i: c.push(c.pop() + "skewX(", null, ")") - 2,
                x: d3.interpolateNumber(l, m)
            }) : m && c.push(c.pop() + "skewX(" + m + ")"), n[0] != o[0] || n[1] != o[1] ? (e = c.push(c.pop() + "scale(", null, ",", null, ")"), d.push({
                i: e - 4,
                x: d3.interpolateNumber(n[0], o[0])
            }, {
                i: e - 2,
                x: d3.interpolateNumber(n[1], o[1])
            })) : (o[0] != 1 || o[1] != 1) && c.push(c.pop() + "scale(" + o + ")"), e = d.length,
            function(a) {
                var b = -1,
                    f;
                while (++b < e) c[(f = d[b]).i] = f.x(a);
                return c.join("")
            }
    }, d3.interpolateRgb = function(a, b) {
        a = d3.rgb(a), b = d3.rgb(b);
        var c = a.r,
            d = a.g,
            e = a.b,
            f = b.r - c,
            g = b.g - d,
            h = b.b - e;
        return function(a) {
            return "#" + V(Math.round(c + f * a)) + V(Math.round(d + g * a)) + V(Math.round(e + h * a))
        }
    }, d3.interpolateHsl = function(a, b) {
        a = d3.hsl(a), b = d3.hsl(b);
        var c = a.h,
            d = a.s,
            e = a.l,
            f = b.h - c,
            g = b.s - d,
            h = b.l - e;
        return function(a) {
            return bb(c + f * a, d + g * a, e + h * a).toString()
        }
    }, d3.interpolateArray = function(a, b) {
        var c = [],
            d = [],
            e = a.length,
            f = b.length,
            g = Math.min(a.length, b.length),
            h;
        for (h = 0; h < g; ++h) c.push(d3.interpolate(a[h], b[h]));
        for (; h < e; ++h) d[h] = a[h];
        for (; h < f; ++h) d[h] = b[h];
        return function(a) {
            for (h = 0; h < g; ++h) d[h] = c[h](a);
            return d
        }
    }, d3.interpolateObject = function(a, b) {
        var c = {},
            d = {},
            e;
        for (e in a) e in b ? c[e] = Q(e)(a[e], b[e]) : d[e] = a[e];
        for (e in b) e in a || (d[e] = b[e]);
        return function(a) {
            for (e in c) d[e] = c[e](a);
            return d
        }
    };
    var P = /[-+]?(?:\d*\.?\d+)(?:[eE][-+]?\d+)?/g;
    d3.interpolators = [d3.interpolateObject, function(a, b) {
        return b instanceof Array && d3.interpolateArray(a, b)
    }, function(a, b) {
        return (typeof a == "string" || typeof b == "string") && d3.interpolateString(a + "", b + "")
    }, function(a, b) {
        return (typeof b == "string" ? b in Z || /^(#|rgb\(|hsl\()/.test(b) : b instanceof U || b instanceof ba) && d3.interpolateRgb(a, b)
    }, function(a, b) {
        return !isNaN(a = +a) && !isNaN(b = +b) && d3.interpolateNumber(a, b)
    }], d3.rgb = function(a, b, c) {
        return arguments.length === 1 ? a instanceof U ? T(a.r, a.g, a.b) : W("" + a, T, bb) : T(~~a, ~~b, ~~c)
    }, U.prototype.brighter = function(a) {
        a = Math.pow(.7, arguments.length ? a : 1);
        var b = this.r,
            c = this.g,
            d = this.b,
            e = 30;
        return !b && !c && !d ? T(e, e, e) : (b && b < e && (b = e), c && c < e && (c = e), d && d < e && (d = e), T(Math.min(255, Math.floor(b / a)), Math.min(255, Math.floor(c / a)), Math.min(255, Math.floor(d / a))))
    }, U.prototype.darker = function(a) {
        return a = Math.pow(.7, arguments.length ? a : 1), T(Math.floor(a * this.r), Math.floor(a * this.g), Math.floor(a * this.b))
    }, U.prototype.hsl = function() {
        return X(this.r, this.g, this.b)
    }, U.prototype.toString = function() {
        return "#" + V(this.r) + V(this.g) + V(this.b)
    };
    var Z = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };
    for (var $ in Z) Z[$] = W(Z[$], T, bb);
    d3.hsl = function(a, b, c) {
        return arguments.length === 1 ? a instanceof ba ? _(a.h, a.s, a.l) : W("" + a, X, _) : _(+a, +b, +c)
    }, ba.prototype.brighter = function(a) {
        return a = Math.pow(.7, arguments.length ? a : 1), _(this.h, this.s, this.l / a)
    }, ba.prototype.darker = function(a) {
        return a = Math.pow(.7, arguments.length ? a : 1), _(this.h, this.s, a * this.l)
    }, ba.prototype.rgb = function() {
        return bb(this.h, this.s, this.l)
    }, ba.prototype.toString = function() {
        return this.rgb().toString()
    };
    var bd = function(a, b) {
            return b.querySelector(a)
        },
        be = function(a, b) {
            return b.querySelectorAll(a)
        },
        bf = document.documentElement,
        bg = bf.matchesSelector || bf.webkitMatchesSelector || bf.mozMatchesSelector || bf.msMatchesSelector || bf.oMatchesSelector,
        bh = function(a, b) {
            return bg.call(a, b)
        };
    typeof Sizzle == "function" && (bd = function(a, b) {
        return Sizzle(a, b)[0]
    }, be = function(a, b) {
        return Sizzle.uniqueSort(Sizzle(a, b))
    }, bh = Sizzle.matchesSelector);
    var bi = [];
    d3.selection = function() {
        return bq
    }, d3.selection.prototype = bi, bi.select = function(a) {
        var b = [],
            c, d, e, f;
        typeof a != "function" && (a = bj(a));
        for (var g = -1, h = this.length; ++g < h;) {
            b.push(c = []), c.parentNode = (e = this[g]).parentNode;
            for (var i = -1, j = e.length; ++i < j;)(f = e[i]) ? (c.push(d = a.call(f, f.__data__, i)), d && "__data__" in f && (d.__data__ = f.__data__)) : c.push(null)
        }
        return bc(b)
    }, bi.selectAll = function(a) {
        var b = [],
            c, e;
        typeof a != "function" && (a = bk(a));
        for (var f = -1, g = this.length; ++f < g;)
            for (var h = this[f], i = -1, j = h.length; ++i < j;)
                if (e = h[i]) b.push(c = d(a.call(e, e.__data__, i))), c.parentNode = e;
        return bc(b)
    }, bi.attr = function(a, b) {
        function d() {
            this.removeAttribute(a)
        }

        function e() {
            this.removeAttributeNS(a.space, a.local)
        }

        function f() {
            this.setAttribute(a, b)
        }

        function g() {
            this.setAttributeNS(a.space, a.local, b)
        }

        function h() {
            var c = b.apply(this, arguments);
            c == null ? this.removeAttribute(a) : this.setAttribute(a, c)
        }

        function i() {
            var c = b.apply(this, arguments);
            c == null ? this.removeAttributeNS(a.space, a.local) : this.setAttributeNS(a.space, a.local, c)
        }
        a = d3.ns.qualify(a);
        if (arguments.length < 2) {
            var c = this.node();
            return a.local ? c.getAttributeNS(a.space, a.local) : c.getAttribute(a)
        }
        return this.each(b == null ? a.local ? e : d : typeof b == "function" ? a.local ? i : h : a.local ? g : f)
    }, bi.classed = function(a, b) {
        var c = a.split(bl),
            d = c.length,
            e = -1;
        if (arguments.length > 1) {
            while (++e < d) bm.call(this, c[e], b);
            return this
        }
        while (++e < d)
            if (!bm.call(this, c[e])) return !1;
        return !0
    };
    var bl = /\s+/g;
    bi.style = function(a, b, c) {
        function d() {
            this.style.removeProperty(a)
        }

        function e() {
            this.style.setProperty(a, b, c)
        }

        function f() {
            var d = b.apply(this, arguments);
            d == null ? this.style.removeProperty(a) : this.style.setProperty(a, d, c)
        }
        return arguments.length < 3 && (c = ""), arguments.length < 2 ? window.getComputedStyle(this.node(), null).getPropertyValue(a) : this.each(b == null ? d : typeof b == "function" ? f : e)
    }, bi.property = function(a, b) {
        function c() {
            delete this[a]
        }

        function d() {
            this[a] = b
        }

        function e() {
            var c = b.apply(this, arguments);
            c == null ? delete this[a] : this[a] = c
        }
        return arguments.length < 2 ? this.node()[a] : this.each(b == null ? c : typeof b == "function" ? e : d)
    }, bi.text = function(a) {
        return arguments.length < 1 ? this.node().textContent : this.each(typeof a == "function" ? function() {
            var b = a.apply(this, arguments);
            this.textContent = b == null ? "" : b
        } : a == null ? function() {
            this.textContent = ""
        } : function() {
            this.textContent = a
        })
    }, bi.html = function(a) {
        return arguments.length < 1 ? this.node().innerHTML : this.each(typeof a == "function" ? function() {
            var b = a.apply(this, arguments);
            this.innerHTML = b == null ? "" : b
        } : a == null ? function() {
            this.innerHTML = ""
        } : function() {
            this.innerHTML = a
        })
    }, bi.append = function(a) {
        function b() {
            return this.appendChild(document.createElementNS(this.namespaceURI, a))
        }

        function c() {
            return this.appendChild(document.createElementNS(a.space, a.local))
        }
        return a = d3.ns.qualify(a), this.select(a.local ? c : b)
    }, bi.insert = function(a, b) {
        function c() {
            return this.insertBefore(document.createElementNS(this.namespaceURI, a), bd(b, this))
        }

        function d() {
            return this.insertBefore(document.createElementNS(a.space, a.local), bd(b, this))
        }
        return a = d3.ns.qualify(a), this.select(a.local ? d : c)
    }, bi.remove = function() {
        return this.each(function() {
            var a = this.parentNode;
            a && a.removeChild(this)
        })
    }, bi.data = function(a, b) {
        function f(a, f) {
            var g, h = a.length,
                i = f.length,
                j = Math.min(h, i),
                k = Math.max(h, i),
                l = [],
                m = [],
                n = [],
                o, p;
            if (b) {
                var q = {},
                    r = [],
                    s, t = f.length;
                for (g = -1; ++g < h;) s = b.call(o = a[g], o.__data__, g), s in q ? n[t++] = o : q[s] = o, r.push(s);
                for (g = -1; ++g < i;) o = q[s = b.call(f, p = f[g], g)], o ? (o.__data__ = p, l[g] = o, m[g] = n[g] = null) : (m[g] = bn(p), l[g] = n[g] = null), delete q[s];
                for (g = -1; ++g < h;) r[g] in q && (n[g] = a[g])
            } else {
                for (g = -1; ++g < j;) o = a[g], p = f[g], o ? (o.__data__ = p, l[g] = o, m[g] = n[g] = null) : (m[g] = bn(p), l[g] = n[g] = null);
                for (; g < i; ++g) m[g] = bn(f[g]), l[g] = n[g] = null;
                for (; g < k; ++g) n[g] = a[g], m[g] = l[g] = null
            }
            m.update = l, m.parentNode = l.parentNode = n.parentNode = a.parentNode, c.push(m), d.push(l), e.push(n)
        }
        var c = [],
            d = [],
            e = [],
            g = -1,
            h = this.length,
            i;
        if (typeof a == "function")
            while (++g < h) f(i = this[g], a.call(i, i.parentNode.__data__, g));
        else
            while (++g < h) f(i = this[g], a);
        var j = bc(d);
        return j.enter = function() {
            return br(c)
        }, j.exit = function() {
            return bc(e)
        }, j
    }, bi.filter = function(a) {
        var b = [],
            c, d, e;
        typeof a != "function" && (a = bo(a));
        for (var f = 0, g = this.length; f < g; f++) {
            b.push(c = []), c.parentNode = (d = this[f]).parentNode;
            for (var h = 0, i = d.length; h < i; h++)(e = d[h]) && a.call(e, e.__data__, h) && c.push(e)
        }
        return bc(b)
    }, bi.map = function(a) {
        return this.each(function() {
            this.__data__ = a.apply(this, arguments)
        })
    }, bi.order = function() {
        for (var a = -1, b = this.length; ++a < b;)
            for (var c = this[a], d = c.length - 1, e = c[d], f; --d >= 0;)
                if (f = c[d]) e && e !== f.nextSibling && e.parentNode.insertBefore(f, e), e = f;
        return this
    }, bi.sort = function(a) {
        a = bp.apply(this, arguments);
        for (var b = -1, c = this.length; ++b < c;) this[b].sort(a);
        return this.order()
    }, bi.on = function(a, b, c) {
        arguments.length < 3 && (c = !1);
        var d = "__on" + a,
            e = a.indexOf(".");
        return e > 0 && (a = a.substring(0, e)), arguments.length < 2 ? (e = this.node()[d]) && e._ : this.each(function(e, f) {
            function h(a) {
                var c = d3.event;
                d3.event = a;
                try {
                    b.call(g, g.__data__, f)
                } finally {
                    d3.event = c
                }
            }
            var g = this;
            g[d] && g.removeEventListener(a, g[d], c), b && g.addEventListener(a, g[d] = h, c), h._ = b
        })
    }, bi.each = function(a) {
        for (var b = -1, c = this.length; ++b < c;)
            for (var d = this[b], e = -1, f = d.length; ++e < f;) {
                var g = d[e];
                g && a.call(g, g.__data__, e, b)
            }
        return this
    }, bi.call = function(a) {
        return a.apply(this, (arguments[0] = this, arguments)), this
    }, bi.empty = function() {
        return !this.node()
    }, bi.node = function(a) {
        for (var b = 0, c = this.length; b < c; b++)
            for (var d = this[b], e = 0, f = d.length; e < f; e++) {
                var g = d[e];
                if (g) return g
            }
        return null
    }, bi.transition = function() {
        var a = [],
            b, c;
        for (var d = -1, e = this.length; ++d < e;) {
            a.push(b = []);
            for (var f = this[d], g = -1, h = f.length; ++g < h;) b.push((c = f[g]) ? {
                node: c,
                delay: 0,
                duration: 250
            } : null)
        }
        return bt(a, bz || ++by, Date.now())
    };
    var bq = bc([
        [document]
    ]);
    bq[0].parentNode = bf, d3.select = function(a) {
        return typeof a == "string" ? bq.select(a) : bc([
            [a]
        ])
    }, d3.selectAll = function(a) {
        return typeof a == "string" ? bq.selectAll(a) : bc([d(a)])
    };
    var bs = [];
    bs.append = bi.append, bs.insert = bi.insert, bs.empty = bi.empty, bs.node = bi.node, bs.select = function(a) {
        var b = [],
            c, d, e, f, g;
        for (var h = -1, i = this.length; ++h < i;) {
            e = (f = this[h]).update, b.push(c = []), c.parentNode = f.parentNode;
            for (var j = -1, k = f.length; ++j < k;)(g = f[j]) ? (c.push(e[j] = d = a.call(f.parentNode, g.__data__, j)), d.__data__ = g.__data__) : c.push(null)
        }
        return bc(b)
    };
    var bu = {},
        bx = [],
        by = 0,
        bz = 0,
        bA = d3.ease("cubic-in-out");
    bx.call = bi.call, d3.transition = function() {
        return bq.transition()
    }, d3.transition.prototype = bx, bx.select = function(a) {
        var b = [],
            c, d, e;
        typeof a != "function" && (a = bj(a));
        for (var f = -1, g = this.length; ++f < g;) {
            b.push(c = []);
            for (var h = this[f], i = -1, j = h.length; ++i < j;)(e = h[i]) && (d = a.call(e.node, e.node.__data__, i)) ? ("__data__" in e.node && (d.__data__ = e.node.__data__), c.push({
                node: d,
                delay: e.delay,
                duration: e.duration
            })) : c.push(null)
        }
        return bt(b, this.id, this.time).ease(this.ease())
    }, bx.selectAll = function(a) {
        var b = [],
            c, d, e;
        typeof a != "function" && (a = bk(a));
        for (var f = -1, g = this.length; ++f < g;)
            for (var h = this[f], i = -1, j = h.length; ++i < j;)
                if (e = h[i]) {
                    d = a.call(e.node, e.node.__data__, i), b.push(c = []);
                    for (var k = -1, l = d.length; ++k < l;) c.push({
                        node: d[k],
                        delay: e.delay,
                        duration: e.duration
                    })
                }
        return bt(b, this.id, this.time).ease(this.ease())
    }, bx.attr = function(a, b) {
        return this.attrTween(a, bw(a, b))
    }, bx.attrTween = function(a, b) {
        function d(a, d) {
            var e = b.call(this, a, d, this.getAttribute(c));
            return e === bu ? (this.removeAttribute(c), null) : e && function(a) {
                this.setAttribute(c, e(a))
            }
        }

        function e(a, d) {
            var e = b.call(this, a, d, this.getAttributeNS(c.space, c.local));
            return e === bu ? (this.removeAttributeNS(c.space, c.local), null) : e && function(a) {
                this.setAttributeNS(c.space, c.local, e(a))
            }
        }
        var c = d3.ns.qualify(a);
        return this.tween("attr." + a, c.local ? e : d)
    }, bx.style = function(a, b, c) {
        return arguments.length < 3 && (c = ""), this.styleTween(a, bw(a, b), c)
    }, bx.styleTween = function(a, b, c) {
        return arguments.length < 3 && (c = ""), this.tween("style." + a, function(d, e) {
            var f = b.call(this, d, e, window.getComputedStyle(this, null).getPropertyValue(a));
            return f === bu ? (this.style.removeProperty(a), null) : f && function(b) {
                this.style.setProperty(a, f(b), c)
            }
        })
    }, bx.text = function(a) {
        return this.tween("text", function(b, c) {
            this.textContent = typeof a == "function" ? a.call(this, b, c) : a
        })
    }, bx.remove = function() {
        return this.each("end.transition", function() {
            var a;
            !this.__transition__ && (a = this.parentNode) && a.removeChild(this)
        })
    }, bx.delay = function(a) {
        var b = this;
        return b.each(typeof a == "function" ? function(c, d, e) {
            b[e][d].delay = +a.apply(this, arguments)
        } : (a = +a, function(c, d, e) {
            b[e][d].delay = a
        }))
    }, bx.duration = function(a) {
        var b = this;
        return b.each(typeof a == "function" ? function(c, d, e) {
            b[e][d].duration = +a.apply(this, arguments)
        } : (a = +a, function(c, d, e) {
            b[e][d].duration = a
        }))
    }, bx.transition = function() {
        return this.select(i)
    };
    var bC = null,
        bD, bE;
    d3.timer = function(a, b, c) {
        var d = !1,
            e, f = bC;
        if (arguments.length < 3) {
            if (arguments.length < 2) b = 0;
            else if (!isFinite(b)) return;
            c = Date.now()
        }
        while (f) {
            if (f.callback === a) {
                f.then = c, f.delay = b, d = !0;
                break
            }
            e = f, f = f.next
        }
        d || (bC = {
            callback: a,
            then: c,
            delay: b,
            next: bC
        }), bD || (bE = clearTimeout(bE), bD = 1, bH(bF))
    }, d3.timer.flush = function() {
        var a, b = Date.now(),
            c = bC;
        while (c) a = b - c.then, c.delay || (c.flush = c.callback(a)), c = c.next;
        bG()
    };
    var bH = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        setTimeout(a, 17)
    };
    d3.transform = function(a) {
        var b = document.createElementNS(d3.ns.prefix.svg, "g"),
            c = {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: 0,
                f: 0
            };
        return (d3.transform = function(a) {
            b.setAttribute("transform", a);
            var d = b.transform.baseVal.consolidate();
            return new bI(d ? d.matrix : c)
        })(a)
    }, bI.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var bM = 180 / Math.PI;
    d3.scale = {}, d3.scale.linear = function() {
        return bS([0, 1], [0, 1], d3.interpolate, !1)
    }, d3.scale.log = function() {
        return b$(d3.scale.linear(), ca)
    };
    var b_ = d3.format(".0e");
    ca.pow = function(a) {
        return Math.pow(10, a)
    }, cb.pow = function(a) {
        return -Math.pow(10, -a)
    }, d3.scale.pow = function() {
        return cc(d3.scale.linear(), 1)
    }, d3.scale.sqrt = function() {
        return d3.scale.pow().exponent(.5)
    }, d3.scale.ordinal = function() {
        return ce([], {
            t: "range",
            x: []
        })
    }, d3.scale.category10 = function() {
        return d3.scale.ordinal().range(cf)
    }, d3.scale.category20 = function() {
        return d3.scale.ordinal().range(cg)
    }, d3.scale.category20b = function() {
        return d3.scale.ordinal().range(ch)
    }, d3.scale.category20c = function() {
        return d3.scale.ordinal().range(ci)
    };
    var cf = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"],
        cg = ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"],
        ch = ["#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6"],
        ci = ["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476", "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9"];
    d3.scale.quantile = function() {
        return cj([], [])
    }, d3.scale.quantize = function() {
        return ck(0, 1, [0, 1])
    }, d3.svg = {}, d3.svg.arc = function() {
        function e() {
            var e = a.apply(this, arguments),
                f = b.apply(this, arguments),
                g = c.apply(this, arguments) + cl,
                h = d.apply(this, arguments) + cl,
                i = (h < g && (i = g, g = h, h = i), h - g),
                j = i < Math.PI ? "0" : "1",
                k = Math.cos(g),
                l = Math.sin(g),
                m = Math.cos(h),
                n = Math.sin(h);
            return i >= cm ? e ? "M0," + f + "A" + f + "," + f + " 0 1,1 0," + -f + "A" + f + "," + f + " 0 1,1 0," + f + "M0," + e + "A" + e + "," + e + " 0 1,0 0," + -e + "A" + e + "," + e + " 0 1,0 0," + e + "Z" : "M0," + f + "A" + f + "," + f + " 0 1,1 0," + -f + "A" + f + "," + f + " 0 1,1 0," + f + "Z" : e ? "M" + f * k + "," + f * l + "A" + f + "," + f + " 0 " + j + ",1 " + f * m + "," + f * n + "L" + e * m + "," + e * n + "A" + e + "," + e + " 0 " + j + ",0 " + e * k + "," + e * l + "Z" : "M" + f * k + "," + f * l + "A" + f + "," + f + " 0 " + j + ",1 " + f * m + "," + f * n + "L0,0" + "Z"
        }
        var a = cn,
            b = co,
            c = cp,
            d = cq;
        return e.innerRadius = function(b) {
            return arguments.length ? (a = d3.functor(b), e) : a
        }, e.outerRadius = function(a) {
            return arguments.length ? (b = d3.functor(a), e) : b
        }, e.startAngle = function(a) {
            return arguments.length ? (c = d3.functor(a), e) : c
        }, e.endAngle = function(a) {
            return arguments.length ? (d = d3.functor(a), e) : d
        }, e.centroid = function() {
            var e = (a.apply(this, arguments) + b.apply(this, arguments)) / 2,
                f = (c.apply(this, arguments) + d.apply(this, arguments)) / 2 + cl;
            return [Math.cos(f) * e, Math.sin(f) * e]
        }, e
    };
    var cl = -Math.PI / 2,
        cm = 2 * Math.PI - 1e-6;
    d3.svg.line = function() {
        return cr(Object)
    };
    var cv = {
            linear: cw,
            "step-before": cx,
            "step-after": cy,
            basis: cE,
            "basis-open": cF,
            "basis-closed": cG,
            bundle: cH,
            cardinal: cB,
            "cardinal-open": cz,
            "cardinal-closed": cA,
            monotone: cQ
        },
        cJ = [0, 2 / 3, 1 / 3, 0],
        cK = [0, 1 / 3, 2 / 3, 0],
        cL = [0, 1 / 6, 2 / 3, 1 / 6];
    d3.svg.line.radial = function() {
        var a = cr(cR);
        return a.radius = a.x, delete a.x, a.angle = a.y, delete a.y, a
    }, cx.reverse = cy, cy.reverse = cx, d3.svg.area = function() {
        return cS(Object)
    }, d3.svg.area.radial = function() {
        var a = cS(cR);
        return a.radius = a.x, delete a.x, a.innerRadius = a.x0, delete a.x0, a.outerRadius = a.x1, delete a.x1, a.angle = a.y, delete a.y, a.startAngle = a.y0, delete a.y0, a.endAngle = a.y1, delete a.y1, a
    }, d3.svg.chord = function() {
        function f(c, d) {
            var e = g(this, a, c, d),
                f = g(this, b, c, d);
            return "M" + e.p0 + i(e.r, e.p1, e.a1 - e.a0) + (h(e, f) ? j(e.r, e.p1, e.r, e.p0) : j(e.r, e.p1, f.r, f.p0) + i(f.r, f.p1, f.a1 - f.a0) + j(f.r, f.p1, e.r, e.p0)) + "Z"
        }

        function g(a, b, f, g) {
            var h = b.call(a, f, g),
                i = c.call(a, h, g),
                j = d.call(a, h, g) + cl,
                k = e.call(a, h, g) + cl;
            return {
                r: i,
                a0: j,
                a1: k,
                p0: [i * Math.cos(j), i * Math.sin(j)],
                p1: [i * Math.cos(k), i * Math.sin(k)]
            }
        }

        function h(a, b) {
            return a.a0 == b.a0 && a.a1 == b.a1
        }

        function i(a, b, c) {
            return "A" + a + "," + a + " 0 " + +(c > Math.PI) + ",1 " + b
        }

        function j(a, b, c, d) {
            return "Q 0,0 " + d
        }
        var a = cV,
            b = cW,
            c = cX,
            d = cp,
            e = cq;
        return f.radius = function(a) {
            return arguments.length ? (c = d3.functor(a), f) : c
        }, f.source = function(b) {
            return arguments.length ? (a = d3.functor(b), f) : a
        }, f.target = function(a) {
            return arguments.length ? (b = d3.functor(a), f) : b
        }, f.startAngle = function(a) {
            return arguments.length ? (d = d3.functor(a), f) : d
        }, f.endAngle = function(a) {
            return arguments.length ? (e = d3.functor(a), f) : e
        }, f
    }, d3.svg.diagonal = function() {
        function d(d, e) {
            var f = a.call(this, d, e),
                g = b.call(this, d, e),
                h = (f.y + g.y) / 2,
                i = [f, {
                    x: f.x,
                    y: h
                }, {
                    x: g.x,
                    y: h
                }, g];
            return i = i.map(c), "M" + i[0] + "C" + i[1] + " " + i[2] + " " + i[3]
        }
        var a = cV,
            b = cW,
            c = c$;
        return d.source = function(b) {
            return arguments.length ? (a = d3.functor(b), d) : a
        }, d.target = function(a) {
            return arguments.length ? (b = d3.functor(a), d) : b
        }, d.projection = function(a) {
            return arguments.length ? (c = a, d) : c
        }, d
    }, d3.svg.diagonal.radial = function() {
        var a = d3.svg.diagonal(),
            b = c$,
            c = a.projection;
        return a.projection = function(a) {
            return arguments.length ? c(c_(b = a)) : b
        }, a
    }, d3.svg.mouse = function(a) {
        return db(a, d3.event)
    };
    var da = /WebKit/.test(navigator.userAgent) ? -1 : 0;
    d3.svg.touches = function(a, b) {
        return arguments.length < 2 && (b = d3.event.touches), b ? d(b).map(function(b) {
            var c = db(a, b);
            return c.identifier = b.identifier, c
        }) : []
    }, d3.svg.symbol = function() {
        function c(c, d) {
            return (de[a.call(this, c, d)] || de.circle)(b.call(this, c, d))
        }
        var a = dd,
            b = dc;
        return c.type = function(b) {
            return arguments.length ? (a = d3.functor(b), c) : a
        }, c.size = function(a) {
            return arguments.length ? (b = d3.functor(a), c) : b
        }, c
    };
    var de = {
        circle: function(a) {
            var b = Math.sqrt(a / Math.PI);
            return "M0," + b + "A" + b + "," + b + " 0 1,1 0," + -b + "A" + b + "," + b + " 0 1,1 0," + b + "Z"
        },
        cross: function(a) {
            var b = Math.sqrt(a / 5) / 2;
            return "M" + -3 * b + "," + -b + "H" + -b + "V" + -3 * b + "H" + b + "V" + -b + "H" + 3 * b + "V" + b + "H" + b + "V" + 3 * b + "H" + -b + "V" + b + "H" + -3 * b + "Z"
        },
        diamond: function(a) {
            var b = Math.sqrt(a / (2 * dg)),
                c = b * dg;
            return "M0," + -b + "L" + c + ",0" + " 0," + b + " " + -c + ",0" + "Z"
        },
        square: function(a) {
            var b = Math.sqrt(a) / 2;
            return "M" + -b + "," + -b + "L" + b + "," + -b + " " + b + "," + b + " " + -b + "," + b + "Z"
        },
        "triangle-down": function(a) {
            var b = Math.sqrt(a / df),
                c = b * df / 2;
            return "M0," + c + "L" + b + "," + -c + " " + -b + "," + -c + "Z"
        },
        "triangle-up": function(a) {
            var b = Math.sqrt(a / df),
                c = b * df / 2;
            return "M0," + -c + "L" + b + "," + c + " " + -b + "," + c + "Z"
        }
    };
    d3.svg.symbolTypes = d3.keys(de);
    var df = Math.sqrt(3),
        dg = Math.tan(30 * Math.PI / 180);
    d3.svg.axis = function() {
        function j(j) {
            j.each(function(k, l, m) {
                var n = d3.select(this),
                    o = j.delay ? function(a) {
                        var b = bz;
                        try {
                            return bz = j.id, a.transition().delay(j[m][l].delay).duration(j[m][l].duration).ease(j.ease())
                        } finally {
                            bz = b
                        }
                    } : Object,
                    p = a.ticks ? a.ticks.apply(a, g) : a.domain(),
                    q = h == null ? a.tickFormat ? a.tickFormat.apply(a, g) : String : h,
                    r = dj(a, p, i),
                    s = n.selectAll(".minor").data(r, String),
                    t = s.enter().insert("line", "g").attr("class", "tick minor").style("opacity", 1e-6),
                    u = o(s.exit()).style("opacity", 1e-6).remove(),
                    v = o(s).style("opacity", 1),
                    w = n.selectAll("g").data(p, String),
                    x = w.enter().insert("g", "path").style("opacity", 1e-6),
                    y = o(w.exit()).style("opacity", 1e-6).remove(),
                    z = o(w).style("opacity", 1),
                    A, B = bP(a),
                    C = n.selectAll(".domain").data([0]),
                    D = C.enter().append("path").attr("class", "domain"),
                    E = o(C),
                    F = a.copy(),
                    G = this.__chart__ || F;
                this.__chart__ = F, x.append("line").attr("class", "tick"), x.append("text"), z.select("text").text(q);
                switch (b) {
                    case "bottom":
                        A = dh, t.attr("y2", d), v.attr("x2", 0).attr("y2", d), x.select("line").attr("y2", c), x.select("text").attr("y", Math.max(c, 0) + f), z.select("line").attr("x2", 0).attr("y2", c), z.select("text").attr("x", 0).attr("y", Math.max(c, 0) + f).attr("dy", ".71em").attr("text-anchor", "middle"), E.attr("d", "M" + B[0] + "," + e + "V0H" + B[1] + "V" + e);
                        break;
                    case "top":
                        A = dh, t.attr("y2", -d), v.attr("x2", 0).attr("y2", -d), x.select("line").attr("y2", -c), x.select("text").attr("y", -(Math.max(c, 0) + f)), z.select("line").attr("x2", 0).attr("y2", -c), z.select("text").attr("x", 0).attr("y", -(Math.max(c, 0) + f)).attr("dy", "0em").attr("text-anchor", "middle"), E.attr("d", "M" + B[0] + "," + -e + "V0H" + B[1] + "V" + -e);
                        break;
                    case "left":
                        A = di, t.attr("x2", -d), v.attr("x2", -d).attr("y2", 0), x.select("line").attr("x2", -c), x.select("text").attr("x", -(Math.max(c, 0) + f)), z.select("line").attr("x2", -c).attr("y2", 0), z.select("text").attr("x", -(Math.max(c, 0) + f)).attr("y", 0).attr("dy", ".32em").attr("text-anchor", "end"), E.attr("d", "M" + -e + "," + B[0] + "H0V" + B[1] + "H" + -e);
                        break;
                    case "right":
                        A = di, t.attr("x2", d), v.attr("x2", d).attr("y2", 0), x.select("line").attr("x2", c), x.select("text").attr("x", Math.max(c, 0) + f), z.select("line").attr("x2", c).attr("y2", 0), z.select("text").attr("x", Math.max(c, 0) + f).attr("y", 0).attr("dy", ".32em").attr("text-anchor", "start"), E.attr("d", "M" + e + "," + B[0] + "H0V" + B[1] + "H" + e)
                }
                if (a.ticks) x.call(A, G), z.call(A, F), y.call(A, F), t.call(A, G), v.call(A, F), u.call(A, F);
                else {
                    var H = F.rangeBand() / 2,
                        I = function(a) {
                            return F(a) + H
                        };
                    x.call(A, I), z.call(A, I)
                }
            })
        }
        var a = d3.scale.linear(),
            b = "bottom",
            c = 6,
            d = 6,
            e = 6,
            f = 3,
            g = [10],
            h, i = 0;
        return j.scale = function(b) {
            return arguments.length ? (a = b, j) : a
        }, j.orient = function(a) {
            return arguments.length ? (b = a, j) : b
        }, j.ticks = function() {
            return arguments.length ? (g = arguments, j) : g
        }, j.tickFormat = function(a) {
            return arguments.length ? (h = a, j) : h
        }, j.tickSize = function(a, b, f) {
            if (!arguments.length) return c;
            var g = arguments.length - 1;
            return c = +a, d = g > 1 ? +b : c, e = g > 0 ? +arguments[g] : c, j
        }, j.tickPadding = function(a) {
            return arguments.length ? (f = +a, j) : f
        }, j.tickSubdivide = function(a) {
            return arguments.length ? (i = +a, j) : i
        }, j
    }, d3.svg.brush = function() {
        function e(a) {
            var g = b && c ? ["n", "e", "s", "w", "nw", "ne", "se", "sw"] : b ? ["e", "w"] : c ? ["n", "s"] : [];
            a.each(function() {
                var a = d3.select(this).on("mousedown.brush", f),
                    h = a.selectAll(".background").data([0]),
                    i = a.selectAll(".extent").data([0]),
                    j = a.selectAll(".resize").data(g, String),
                    k;
                h.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("pointer-events", "all").style("cursor", "crosshair"), i.enter().append("rect").attr("class", "extent").style("cursor", "move"), j.enter().append("rect").attr("class", function(a) {
                    return "resize " + a
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden").style("cursor", function(a) {
                    return dC[a]
                }), j.style("pointer-events", e.empty() ? "none" : "all"), j.exit().remove(), b && (k = bP(b), h.attr("x", k[0]).attr("width", k[1] - k[0]), dv(a, d)), c && (k = bP(c), h.attr("y", k[0]).attr("height", k[1] - k[0]), dw(a, d))
            })
        }

        function f() {
            var a = d3.select(d3.event.target);
            dk = e, dm = this, dq = d, du = d3.svg.mouse(dm), (dr = a.classed("extent")) ? (du[0] = d[0][0] - du[0], du[1] = d[0][1] - du[1]) : a.classed("resize") ? (ds = d3.event.target.__data__, du[0] = d[+/w$/.test(ds)][0], du[1] = d[+/^n/.test(ds)][1]) : d3.event.altKey && (dt = du.slice()), dn = !/^(n|s)$/.test(ds) && b, dp = !/^(e|w)$/.test(ds) && c, dl = g(this, arguments), dl("brushstart"), dz(), O()
        }

        function g(b, c) {
            return function(d) {
                var f = d3.event;
                try {
                    d3.event = {
                        type: d,
                        target: e
                    }, a[d].apply(b, c)
                } finally {
                    d3.event = f
                }
            }
        }
        var a = d3.dispatch("brushstart", "brush", "brushend"),
            b, c, d = [
                [0, 0],
                [0, 0]
            ];
        return e.x = function(a) {
            return arguments.length ? (b = a, e) : b
        }, e.y = function(a) {
            return arguments.length ? (c = a, e) : c
        }, e.extent = function(a) {
            var f, g, h, i, j;
            return arguments.length ? (b && (f = a[0], g = a[1], c && (f = f[0], g = g[0]), b.invert && (f = b(f), g = b(g)), g < f && (j = f, f = g, g = j), d[0][0] = f, d[1][0] = g), c && (h = a[0], i = a[1], b && (h = h[1], i = i[1]), c.invert && (h = c(h), i = c(i)), i < h && (j = h, h = i, i = j), d[0][1] = h, d[1][1] = i), e) : (b && (f = d[0][0], g = d[1][0], b.invert && (f = b.invert(f), g = b.invert(g)), g < f && (j = f, f = g, g = j)), c && (h = d[0][1], i = d[1][1], c.invert && (h = c.invert(h), i = c.invert(i)), i < h && (j = h, h = i, i = j)), b && c ? [
                [f, h],
                [g, i]
            ] : b ? [f, g] : c && [h, i])
        }, e.clear = function() {
            return d[0][0] = d[0][1] = d[1][0] = d[1][1] = 0, e
        }, e.empty = function() {
            return b && d[0][0] === d[1][0] || c && d[0][1] === d[1][1]
        }, d3.select(window).on("mousemove.brush", dz).on("mouseup.brush", dB).on("keydown.brush", dx).on("keyup.brush", dy), d3.rebind(e, a, "on")
    };
    var dk, dl, dm, dn, dp, dq, dr, ds, dt, du, dC = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
    };
    d3.behavior = {}, d3.behavior.drag = function() {
        function c() {
            this.on("mousedown.drag", e).on("touchstart.drag", e), d3.select(window).on("mousemove.drag", dM).on("touchmove.drag", dM).on("mouseup.drag", dN, !0).on("touchend.drag", dN, !0).on("click.drag", dO, !0)
        }

        function d() {
            dD = a, dE = d3.event.target, dF = this, dG = arguments, dI = dL(), b ? (dH = b.apply(dF, dG), dH = [dH.x - dI[0], dH.y - dI[1]]) : dH = [0, 0], dJ = 0
        }

        function e() {
            d.apply(this, arguments), dK("dragstart")
        }
        var a = d3.dispatch("drag", "dragstart", "dragend"),
            b = null;
        return c.origin = function(a) {
            return arguments.length ? (b = a, c) : b
        }, d3.rebind(c, a, "on")
    };
    var dD, dE, dF, dG, dH, dI, dJ;
    d3.behavior.zoom = function() {
        function d() {
            this.on("mousedown.zoom", f).on("mousewheel.zoom", g).on("DOMMouseScroll.zoom", g).on("dblclick.zoom", h).on("touchstart.zoom", i), d3.select(window).on("mousemove.zoom", ed).on("mouseup.zoom", ee).on("touchmove.zoom", ec).on("touchend.zoom", eb).on("click.zoom", ef, !0)
        }

        function e() {
            dU = a, dV = c, dW = b.zoom, dX = d3.event.target, dY = this, dZ = arguments
        }

        function f() {
            e.apply(this, arguments), dQ = d_(d3.svg.mouse(dY)), d$ = 0, d3.event.preventDefault(), window.focus()
        }

        function g() {
            e.apply(this, arguments), dR || (dR = d_(d3.svg.mouse(dY))), eg(ea() + a[2], d3.svg.mouse(dY), dR)
        }

        function h() {
            e.apply(this, arguments);
            var b = d3.svg.mouse(dY);
            eg(d3.event.shiftKey ? Math.ceil(a[2] - 1) : Math.floor(a[2] + 1), b, d_(b))
        }

        function i() {
            e.apply(this, arguments);
            var b = eb(),
                c, d = Date.now();
            b.length === 1 && d - dT < 300 && eg(1 + Math.floor(a[2]), c = b[0], dS[c.identifier]), dT = d
        }
        var a = [0, 0, 0],
            b = d3.dispatch("zoom"),
            c = eh;
        return d.extent = function(a) {
            return arguments.length ? (c = a == null ? eh : a, d) : c
        }, d3.rebind(d, b, "on")
    };
    var dP, dQ, dR, dS = {},
        dT = 0,
        dU, dV, dW, dX, dY, dZ, d$, eh = [
            [-Infinity, Infinity],
            [-Infinity, Infinity],
            [-Infinity, Infinity]
        ]
})();