/********************************
 ** FILE: lib/d3.geom.min.js
    ********************************/

(function() {
    function c(a) {
        var b = 0,
            c = 0;
        for (;;) {
            if (a(b, c)) return [b, c];
            b === 0 ? (b = c + 1, c = 0) : (b -= 1, c += 1)
        }
    }

    function d(a, b, c, d) {
        var e, f, g, h, i, j, k;
        return e = d[a], f = e[0], g = e[1], e = d[b], h = e[0], i = e[1], e = d[c], j = e[0], k = e[1], (k - g) * (h - f) - (i - g) * (j - f) > 0
    }

    function e(a, b, c) {
        return (c[0] - b[0]) * (a[1] - b[1]) < (c[1] - b[1]) * (a[0] - b[0])
    }

    function f(a, b, c, d) {
        var e = a[0],
            f = b[0],
            g = c[0],
            h = d[0],
            i = a[1],
            j = b[1],
            k = c[1],
            l = d[1],
            m = e - g,
            n = f - e,
            o = h - g,
            p = i - k,
            q = j - i,
            r = l - k,
            s = (o * p - r * m) / (r * n - o * q);
        return [e + s * n, i + s * q]
    }

    function h(a, b) {
        var c = {
                list: a.map(function(a, b) {
                    return {
                        index: b,
                        x: a[0],
                        y: a[1]
                    }
                }).sort(function(a, b) {
                    return a.y < b.y ? -1 : a.y > b.y ? 1 : a.x < b.x ? -1 : a.x > b.x ? 1 : 0
                }),
                bottomSite: null
            },
            d = {
                list: [],
                leftEnd: null,
                rightEnd: null,
                init: function() {
                    d.leftEnd = d.createHalfEdge(null, "l"), d.rightEnd = d.createHalfEdge(null, "l"), d.leftEnd.r = d.rightEnd, d.rightEnd.l = d.leftEnd, d.list.unshift(d.leftEnd, d.rightEnd)
                },
                createHalfEdge: function(a, b) {
                    return {
                        edge: a,
                        side: b,
                        vertex: null,
                        l: null,
                        r: null
                    }
                },
                insert: function(a, b) {
                    b.l = a, b.r = a.r, a.r.l = b, a.r = b
                },
                leftBound: function(a) {
                    var b = d.leftEnd;
                    do b = b.r; while (b != d.rightEnd && e.rightOf(b, a));
                    return b = b.l, b
                },
                del: function(a) {
                    a.l.r = a.r, a.r.l = a.l, a.edge = null
                },
                right: function(a) {
                    return a.r
                },
                left: function(a) {
                    return a.l
                },
                leftRegion: function(a) {
                    return a.edge == null ? c.bottomSite : a.edge.region[a.side]
                },
                rightRegion: function(a) {
                    return a.edge == null ? c.bottomSite : a.edge.region[g[a.side]]
                }
            },
            e = {
                bisect: function(a, b) {
                    var c = {
                            region: {
                                l: a,
                                r: b
                            },
                            ep: {
                                l: null,
                                r: null
                            }
                        },
                        d = b.x - a.x,
                        e = b.y - a.y,
                        f = d > 0 ? d : -d,
                        g = e > 0 ? e : -e;
                    return c.c = a.x * d + a.y * e + (d * d + e * e) * .5, f > g ? (c.a = 1, c.b = e / d, c.c /= d) : (c.b = 1, c.a = d / e, c.c /= e), c
                },
                intersect: function(a, b) {
                    var c = a.edge,
                        d = b.edge;
                    if (!c || !d || c.region.r == d.region.r) return null;
                    var e = c.a * d.b - c.b * d.a;
                    if (Math.abs(e) < 1e-10) return null;
                    var f = (c.c * d.b - d.c * c.b) / e,
                        g = (d.c * c.a - c.c * d.a) / e,
                        h = c.region.r,
                        i = d.region.r,
                        j, k;
                    h.y < i.y || h.y == i.y && h.x < i.x ? (j = a, k = c) : (j = b, k = d);
                    var l = f >= k.region.r.x;
                    return l && j.side === "l" || !l && j.side === "r" ? null : {
                        x: f,
                        y: g
                    }
                },
                rightOf: function(a, b) {
                    var c = a.edge,
                        d = c.region.r,
                        e = b.x > d.x;
                    if (e && a.side === "l") return 1;
                    if (!e && a.side === "r") return 0;
                    if (c.a === 1) {
                        var f = b.y - d.y,
                            g = b.x - d.x,
                            h = 0,
                            i = 0;
                        !e && c.b < 0 || e && c.b >= 0 ? i = h = f >= c.b * g : (i = b.x + b.y * c.b > c.c, c.b < 0 && (i = !i), i || (h = 1));
                        if (!h) {
                            var j = d.x - c.region.l.x;
                            i = c.b * (g * g - f * f) < j * f * (1 + 2 * g / j + c.b * c.b), c.b < 0 && (i = !i)
                        }
                    } else {
                        var k = c.c - c.a * b.x,
                            l = b.y - k,
                            m = b.x - d.x,
                            n = k - d.y;
                        i = l * l > m * m + n * n
                    }
                    return a.side === "l" ? i : !i
                },
                endPoint: function(a, c, d) {
                    a.ep[c] = d;
                    if (!a.ep[g[c]]) return;
                    b(a)
                },
                distance: function(a, b) {
                    var c = a.x - b.x,
                        d = a.y - b.y;
                    return Math.sqrt(c * c + d * d)
                }
            },
            f = {
                list: [],
                insert: function(a, b, c) {
                    a.vertex = b, a.ystar = b.y + c;
                    for (var d = 0, e = f.list, g = e.length; d < g; d++) {
                        var h = e[d];
                        if (a.ystar > h.ystar || a.ystar == h.ystar && b.x > h.vertex.x) continue;
                        break
                    }
                    e.splice(d, 0, a)
                },
                del: function(a) {
                    for (var b = 0, c = f.list, d = c.length; b < d && c[b] != a; ++b);
                    c.splice(b, 1)
                },
                empty: function() {
                    return f.list.length === 0
                },
                nextEvent: function(a) {
                    for (var b = 0, c = f.list, d = c.length; b < d; ++b)
                        if (c[b] == a) return c[b + 1];
                    return null
                },
                min: function() {
                    var a = f.list[0];
                    return {
                        x: a.vertex.x,
                        y: a.ystar
                    }
                },
                extractMin: function() {
                    return f.list.shift()
                }
            };
        d.init(), c.bottomSite = c.list.shift();
        var h = c.list.shift(),
            i, j, k, l, m, n, o, p, q, r, s, t, u;
        for (;;) {
            f.empty() || (i = f.min());
            if (h && (f.empty() || h.y < i.y || h.y == i.y && h.x < i.x)) j = d.leftBound(h), k = d.right(j), o = d.rightRegion(j), t = e.bisect(o, h), n = d.createHalfEdge(t, "l"), d.insert(j, n), r = e.intersect(j, n), r && (f.del(j), f.insert(j, r, e.distance(r, h))), j = n, n = d.createHalfEdge(t, "r"), d.insert(j, n), r = e.intersect(n, k), r && f.insert(n, r, e.distance(r, h)), h = c.list.shift();
            else if (!f.empty()) j = f.extractMin(), l = d.left(j), k = d.right(j), m = d.right(k), o = d.leftRegion(j), p = d.rightRegion(k), s = j.vertex, e.endPoint(j.edge, j.side, s), e.endPoint(k.edge, k.side, s), d.del(j), f.del(k), d.del(k), u = "l", o.y > p.y && (q = o, o = p, p = q, u = "r"), t = e.bisect(o, p), n = d.createHalfEdge(t, u), d.insert(l, n), e.endPoint(t, g[u], s), r = e.intersect(l, n), r && (f.del(l), f.insert(l, r, e.distance(r, o))), r = e.intersect(n, m), r && f.insert(n, r, e.distance(r, o));
            else break
        }
        for (j = d.right(d.leftEnd); j != d.rightEnd; j = d.right(j)) b(j.edge)
    }

    function i() {
        return {
            leaf: !0,
            nodes: [],
            point: null
        }
    }

    function j(a, b, c, d, e, f) {
        if (!a(b, c, d, e, f)) {
            var g = (c + e) * .5,
                h = (d + f) * .5,
                i = b.nodes;
            i[0] && j(a, i[0], c, d, g, h), i[1] && j(a, i[1], g, d, e, h), i[2] && j(a, i[2], c, h, g, f), i[3] && j(a, i[3], g, h, e, f)
        }
    }

    function k(a) {
        return {
            x: a[0],
            y: a[1]
        }
    }
    d3.geom = {}, d3.geom.contour = function(d, e) {
        var f = e || c(d),
            g = [],
            h = f[0],
            i = f[1],
            j = 0,
            k = 0,
            l = NaN,
            m = NaN,
            n = 0;
        do n = 0, d(h - 1, i - 1) && (n += 1), d(h, i - 1) && (n += 2), d(h - 1, i) && (n += 4), d(h, i) && (n += 8), n === 6 ? (j = m === -1 ? -1 : 1, k = 0) : n === 9 ? (j = 0, k = l === 1 ? -1 : 1) : (j = a[n], k = b[n]), j != l && k != m && (g.push([h, i]), l = j, m = k), h += j, i += k; while (f[0] != h || f[1] != i);
        return g
    };
    var a = [1, 0, 1, 1, -1, 0, -1, 1, 0, 0, 0, 0, -1, 0, -1, NaN],
        b = [0, -1, 0, 0, 0, -1, 0, 0, 1, -1, 1, 1, 0, -1, 0, NaN];
    d3.geom.hull = function(a) {
        if (a.length < 3) return [];
        var b = a.length,
            c = b - 1,
            e = [],
            f = [],
            g, h, i = 0,
            j, k, l, m, n, o, p, q;
        for (g = 1; g < b; ++g) a[g][1] < a[i][1] ? i = g : a[g][1] == a[i][1] && (i = a[g][0] < a[i][0] ? g : i);
        for (g = 0; g < b; ++g) {
            if (g === i) continue;
            k = a[g][1] - a[i][1], j = a[g][0] - a[i][0], e.push({
                angle: Math.atan2(k, j),
                index: g
            })
        }
        e.sort(function(a, b) {
            return a.angle - b.angle
        }), p = e[0].angle, o = e[0].index, n = 0;
        for (g = 1; g < c; ++g) h = e[g].index, p == e[g].angle ? (j = a[o][0] - a[i][0], k = a[o][1] - a[i][1], l = a[h][0] - a[i][0], m = a[h][1] - a[i][1], j * j + k * k >= l * l + m * m ? e[g].index = -1 : (e[n].index = -1, p = e[g].angle, n = g, o = h)) : (p = e[g].angle, n = g, o = h);
        f.push(i);
        for (g = 0, h = 0; g < 2; ++h) e[h].index !== -1 && (f.push(e[h].index), g++);
        q = f.length;
        for (; h < c; ++h) {
            if (e[h].index === -1) continue;
            while (!d(f[q - 2], f[q - 1], e[h].index, a)) --q;
            f[q++] = e[h].index
        }
        var r = [];
        for (g = 0; g < q; ++g) r.push(a[f[g]]);
        return r
    }, d3.geom.polygon = function(a) {
        return a.area = function() {
            var b = 0,
                c = a.length,
                d = a[c - 1][0] * a[0][1],
                e = a[c - 1][1] * a[0][0];
            while (++b < c) d += a[b - 1][0] * a[b][1], e += a[b - 1][1] * a[b][0];
            return (e - d) * .5
        }, a.centroid = function(b) {
            var c = -1,
                d = a.length,
                e = 0,
                f = 0,
                g, h = a[d - 1],
                i;
            arguments.length || (b = -1 / (6 * a.area()));
            while (++c < d) g = h, h = a[c], i = g[0] * h[1] - h[0] * g[1], e += (g[0] + h[0]) * i, f += (g[1] + h[1]) * i;
            return [e * b, f * b]
        }, a.clip = function(b) {
            var c, d = -1,
                g = a.length,
                h, i, j = a[g - 1],
                k, l, m;
            while (++d < g) {
                c = b.slice(), b.length = 0, k = a[d], l = c[(i = c.length) - 1], h = -1;
                while (++h < i) m = c[h], e(m, j, k) ? (e(l, j, k) || b.push(f(l, m, j, k)), b.push(m)) : e(l, j, k) && b.push(f(l, m, j, k)), l = m;
                j = k
            }
            return b
        }, a
    }, d3.geom.voronoi = function(a) {
        var b = a.map(function() {
            return []
        });
        return h(a, function(a) {
            var c, d, e, f, g, h;
            a.a === 1 && a.b >= 0 ? (c = a.ep.r, d = a.ep.l) : (c = a.ep.l, d = a.ep.r), a.a === 1 ? (g = c ? c.y : -1e6, e = a.c - a.b * g, h = d ? d.y : 1e6, f = a.c - a.b * h) : (e = c ? c.x : -1e6, g = a.c - a.a * e, f = d ? d.x : 1e6, h = a.c - a.a * f);
            var i = [e, g],
                j = [f, h];
            b[a.region.l.index].push(i, j), b[a.region.r.index].push(i, j)
        }), b.map(function(b, c) {
            var d = a[c][0],
                e = a[c][1];
            return b.forEach(function(a) {
                a.angle = Math.atan2(a[0] - d, a[1] - e)
            }), b.sort(function(a, b) {
                return a.angle - b.angle
            }).filter(function(a, c) {
                return !c || a.angle - b[c - 1].angle > 1e-10
            })
        })
    };
    var g = {
        l: "r",
        r: "l"
    };
    d3.geom.delaunay = function(a) {
        var b = a.map(function() {
                return []
            }),
            c = [];
        return h(a, function(c) {
            b[c.region.l.index].push(a[c.region.r.index])
        }), b.forEach(function(b, d) {
            var e = a[d],
                f = e[0],
                g = e[1];
            b.forEach(function(a) {
                a.angle = Math.atan2(a[0] - f, a[1] - g)
            }), b.sort(function(a, b) {
                return a.angle - b.angle
            });
            for (var h = 0, i = b.length - 1; h < i; h++) c.push([e, b[h], b[h + 1]])
        }), c
    }, d3.geom.quadtree = function(a, b, c, d, e) {
        function n(a, b, c, d, e, f) {
            if (isNaN(b.x) || isNaN(b.y)) return;
            if (a.leaf) {
                var g = a.point;
                g ? Math.abs(g.x - b.x) + Math.abs(g.y - b.y) < .01 ? o(a, b, c, d, e, f) : (a.point = null, o(a, g, c, d, e, f), o(a, b, c, d, e, f)) : a.point = b
            } else o(a, b, c, d, e, f)
        }

        function o(a, b, c, d, e, f) {
            var g = (c + e) * .5,
                h = (d + f) * .5,
                j = b.x >= g,
                k = b.y >= h,
                l = (k << 1) + j;
            a.leaf = !1, a = a.nodes[l] || (a.nodes[l] = i()), j ? c = g : e = g, k ? d = h : f = h, n(a, b, c, d, e, f)
        }
        var f, g = -1,
            h = a.length;
        h && isNaN(a[0].x) && (a = a.map(k));
        if (arguments.length < 5)
            if (arguments.length === 3) e = d = c, c = b;
            else {
                b = c = Infinity, d = e = -Infinity;
                while (++g < h) f = a[g], f.x < b && (b = f.x), f.y < c && (c = f.y), f.x > d && (d = f.x), f.y > e && (e = f.y);
                var l = d - b,
                    m = e - c;
                l > m ? e = c + l : d = b + m
            }
        var p = i();
        return p.add = function(a) {
            n(p, a, b, c, d, e)
        }, p.visit = function(a) {
            j(a, p, b, c, d, e)
        }, a.forEach(p.add), p
    }
})();