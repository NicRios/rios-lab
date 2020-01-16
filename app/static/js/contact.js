/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.4",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a) return k.call(a, b);
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h) return h.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = la(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                } return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                } k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                } return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                if (f = d.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return A.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    } return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = !0, c || j.disable(), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
        else {
            d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && d.documentElement
            } catch (e) {}
            c && c.doScroll && ! function f() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (b) {
                        return a.setTimeout(f, 50)
                    }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    }, n.ready.promise();
    var L;
    for (L in n(l)) break;
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c, e;
            c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
        }),
        function() {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
            a = null
        }();
    var M = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0;
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
            },
            data: function(a, b, c) {
                return R(a, b, c)
            },
            removeData: function(a, b) {
                return S(a, b)
            },
            _data: function(a, b, c) {
                return R(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return S(a, b, !0)
            }
        }), n.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    n.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    n.data(this, a, b)
                }) : f ? P(f, a, n.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    n.removeData(this, a)
                })
            }
        }), n.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function() {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return n._data(a, c) || n._data(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        n._removeData(a, b + "queue"), n._removeData(a, c)
                    })
                })
            }
        }), n.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        }),
        function() {
            var a;
            l.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
            }
        }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function X(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var Y = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) Y(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }! function() {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

    function ea(a, b) {
        var c, d, e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var ga = /<|&#?\w+;/,
        ha = /<tbody/i;

    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }

    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r], g || 0 === g)
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
            i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
            while (f--) i = i.lastChild;
            if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
            }
            n.merge(q, i.childNodes), i.textContent = "";
            while (i.firstChild) i.removeChild(i.firstChild);
            i = p.lastChild
        } else q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
            f = 0;
            while (g = i[f++]) _.test(g.type || "") && c.push(g)
        }
        return i = null, p
    }! function() {
        var b, c, e = d.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;

    function pa() {
        return !0
    }

    function qa() {
        return !1
    }

    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    } return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button,
                    h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ra() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
            })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !ka.test(this.nodeName)
        }
    }), l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));

    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
        });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }

    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
                else Fa(a, f);
            return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
        }
    }), n.fn.extend({
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return Y(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };

    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function Ma(a) {
        var b = d,
            c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
    }
    var Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Qa = d.documentElement;
    ! function() {
        var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                reliableHiddenOffsets: function() {
                    return null == b && k(), f
                },
                boxSizingReliable: function() {
                    return null == b && k(), e
                },
                pixelMarginRight: function() {
                    return null == b && k(), c
                },
                pixelPosition: function() {
                    return null == b && k(), b
                },
                reliableMarginRight: function() {
                    return null == b && k(), g
                },
                reliableMarginLeft: function() {
                    return null == b && k(), h
                }
            });

            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                    width: "4px"
                }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
    }) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Ua(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $a = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;

    function bb(a) {
        if (a in ab) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length;
        while (c--)
            if (a = _a[c] + b, a in ab) return a
    }

    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }

    function fb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Na.test(a) || (n.cssHooks[a + b].set = db)
    }), n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return cb(this, !0)
        },
        hide: function() {
            return cb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e)
    }
    n.Tween = gb, gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
        }
    }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = gb.prototype.init, n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;

    function lb() {
        return a.setTimeout(function() {
            hb = void 0
        }), hb = n.now()
    }

    function mb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], jb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function qb(a, b, c) {
        var d, e, f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: hb || lb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return X(c.elem, a, U.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
            },
            prefilters: [ob],
            prefilter: function(a, b) {
                b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(W).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = qb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: mb("show"),
            slideUp: mb("hide"),
            slideToggle: mb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), hb = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(ib), ib = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
        }();
    var rb = /\r/g,
        sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        } return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var tb, ub, vb = n.expr.attrHandle,
        wb = /^(?:checked|selected)$/i,
        xb = l.getSetAttribute,
        yb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
        }
    }), ub = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
            var e, f;
            return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
        } : vb[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), yb && xb || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
        }
    }), xb || (tb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, vb.id = vb.name = vb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: tb.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            tb.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var zb = /^(?:input|select|textarea|button|object)$/i,
        Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;

    function Cb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, Cb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, Cb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Db = a.location,
        Eb = n.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Hb = /#.*$/,
        Ib = /([?&])_=[^&]*/,
        Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lb = /^(?:GET|HEAD)$/,
        Mb = /^\/\//,
        Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ob = {},
        Pb = {},
        Qb = "*/".concat("*"),
        Rb = Db.href,
        Sb = Nb.exec(Rb.toLowerCase()) || [];

    function Tb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Ub(a, b, c, d) {
        var e = {},
            f = a === Pb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                } if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    } if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
                            }
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return j && j.abort(b), y(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
            i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, y)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    y(-1, x)
                }
            } else y(-1, "No Transport");

            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });

    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }

    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a)) return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var $b = /%20/g,
        _b = /\[\]$/,
        ac = /\r?\n/g,
        bc = /^(?:submit|button|image|reset|file)$/i,
        cc = /^(?:input|select|textarea|keygen)/i;

    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) dc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ac, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
    } : hc;
    var ec = 0,
        fc = {},
        gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in fc) fc[a](void 0, !0)
    }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(),
                        h = ++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            } j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });

    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = [],
        kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc) return lc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Qa
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var nc = a.jQuery,
        oc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
    }, b || (a.jQuery = a.$ = n), n
});
jQuery.noConflict();
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function e(b, c, e, f) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(f), e
                    },
                    set: function(a) {
                        d(f), e = a
                    }
                })
            } catch (g) {}
            a._definePropertyBroken = !0, b[c] = e
        }
        a.migrateVersion = "1.4.1";
        var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
            f = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", {
                size: 1
            }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() {
                return null
            },
            j = a.attrHooks.value && a.attrHooks.value.set || function() {
                return c
            },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get: function(b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set: function(b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
        }, a.attrHooks.value = {
            get: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
            },
            set: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
            }
        };
        var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, e, f) {
            var g, h;
            return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
        }, a.fn.init.prototype = a.fn, a.find = function(a) {
            var b = Array.prototype.slice.call(arguments);
            if ("string" == typeof a && u.test(a)) try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function(a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
            return r.apply(this, b)
        };
        var x;
        for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function(a) {
            return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
        }, a.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
            function b(a, c) {
                return new b.fn.init(a, c)
            }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                var f = a.fn.init.call(this, d, e, c);
                return f instanceof b ? f : b(f)
            }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b
        }, a.fn.size = function() {
            return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
        };
        var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
            var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function() {
                var a;
                return y = !0, a = d.apply(this, arguments), y = !1, a
            })
        }), a.swap = function(a, b, c, e) {
            var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated");
            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []);
            for (g in b) a.style[g] = h[g];
            return f
        }, a.ajaxSetup({
            converters: {
                "text json": a.parseJSON
            }
        });
        var z = a.fn.data;
        a.fn.data = function(b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
        };
        var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function(b, c, e, f) {
            c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
            var g, h, i, j, k = [];
            if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function(a) {
                        return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                    }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
            return k
        });
        var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function(b) {
                return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
            };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
            a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
        }, a.event.remove = function(a, b, c, d, e) {
            C.call(this, a, L(b) || "", c, d, e)
        }, a.each(["load", "unload", "error"], function(b, c) {
            a.fn[c] = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
            }
        }), a.fn.toggle = function(b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                };
            for (h.guid = f; g < e.length;) e[g++].guid = f;
            return this.click(h)
        }, a.fn.live = function(b, c, e) {
            return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
        }, a.fn.die = function(b, c) {
            return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
        }, a.event.trigger = function(a, b, c, e) {
            return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
        }, a.each(I.split("|"), function(b, c) {
            a.event.special[c] = {
                setup: function() {
                    var b = this;
                    return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                        a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                    }), a._data(this, c, a.guid++)), !1
                },
                teardown: function() {
                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                }
            }
        }), a.event.special.ready = {
            setup: function() {
                this === document && d("'ready' event is deprecated")
            }
        };
        var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find;
        if (a.fn.andSelf = function() {
                return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
            }, a.fn.find = function(a) {
                var b = N.apply(this, arguments);
                return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
            }, a.Callbacks) {
            var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function(b) {
                var c = O(),
                    e = c.promise();
                return c.pipe = e.pipe = function() {
                    var b = arguments;
                    return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                        a.each(P, function(f, g) {
                            var h = a.isFunction(b[f]) && b[f];
                            c[g[1]](function() {
                                var b = h && h.apply(this, arguments);
                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                            })
                        }), b = null
                    }).promise()
                }, c.isResolved = function() {
                    return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                }, c.isRejected = function() {
                    return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                }, b && b.call(c, c), c
            }
        }
    }(jQuery, window);
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(jQuery);
    }
}(function($) {
    var pluses = /\+/g;

    function raw(s) {
        return s;
    }

    function decoded(s) {
        return decodeURIComponent(s.replace(pluses, ' '));
    }

    function converted(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            return config.json ? JSON.parse(s) : s;
        } catch (er) {}
    }
    var config = $.cookie = function(key, value, options) {
        if (value !== undefined) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }
            value = config.json ? JSON.stringify(value) : String(value);
            return (document.cookie = [config.raw ? key : encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
        }
        var decode = config.raw ? raw : decoded;
        var cookies = document.cookie.split('; ');
        var result = key ? undefined : {};
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = decode(parts.join('='));
            if (key && key === name) {
                result = converted(cookie);
                break;
            }
            if (!key) {
                result[name] = converted(cookie);
            }
        }
        return result;
    };
    config.defaults = {};
    $.removeCookie = function(key, options) {
        if ($.cookie(key) !== undefined) {
            $.cookie(key, '', $.extend({}, options, {
                expires: -1
            }));
            return true;
        }
        return false;
    };
}));
var wpml_cookies = {
    "_icl_current_language": {
        "value": "en",
        "expires": 1,
        "path": "\/"
    }
};
var wpml_cookies = {
    "_icl_current_language": {
        "value": "en",
        "expires": 1,
        "path": "\/"
    }
};
jQuery('document').ready(function() {
    jQuery.each(wpml_cookies, function(cookieName, cookieData) {
        jQuery.cookie(cookieName, cookieData.value, {
            'expires': cookieData.expires,
            'path': cookieData.path
        });
    });
});
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.6", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.6", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }, g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide())
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
                top: 0,
                left: 0
            } : b.offset(),
            g = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            h = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.6", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);;
window.Modernizr = function(a, b, c) {
        function B(a) {
            j.cssText = a
        }

        function C(a, b) {
            return B(m.join(a + ";") + (b || ""))
        }

        function D(a, b) {
            return typeof a === b
        }

        function E(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function F(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!E(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function G(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : D(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function H(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + o.join(d + " ") + d).split(" ");
            return D(b, "string") || D(b, "undefined") ? F(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), G(e, b, c))
        }
        var d = "2.6.2",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = " -webkit- -moz- -o- -ms- ".split(" "),
            n = "Webkit Moz O ms",
            o = n.split(" "),
            p = n.toLowerCase().split(" "),
            q = {
                svg: "http://www.w3.org/2000/svg"
            },
            r = {},
            s = {},
            t = {},
            u = [],
            v = u.slice,
            w, x = function(a, c, d, e) {
                var f, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body");
                if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
                return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
            },
            y = function(b) {
                var c = a.matchMedia || a.msMatchMedia;
                if (c) return c(b).matches;
                var d;
                return x("@media " + b + " { #" + h + " { position: absolute; } }", function(b) {
                    d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
                }), d
            },
            z = {}.hasOwnProperty,
            A;
        !D(z, "undefined") && !D(z.call, "undefined") ? A = function(a, b) {
            return z.call(a, b)
        } : A = function(a, b) {
            return b in a && D(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = v.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(v.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(v.call(arguments)))
                };
            return e
        }), r.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : x(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = a.offsetTop === 9
            }), c
        }, r.csstransforms = function() {
            return !!H("transform")
        }, r.csstransforms3d = function() {
            var a = !!H("perspective");
            return a && "webkitPerspective" in g.style && x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
                a = b.offsetLeft === 9 && b.offsetHeight === 3
            }), a
        }, r.csstransitions = function() {
            return H("transition")
        }, r.svg = function() {
            return !!b.createElementNS && !!b.createElementNS(q.svg, "svg").createSVGRect
        };
        for (var I in r) A(r, I) && (w = I.toLowerCase(), e[w] = r[I](), u.push((e[w] ? "" : "no-") + w));
        return e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) A(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, B(""), i = k = null,
            function(a, b) {
                function k(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function l() {
                    var a = r.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function m(a) {
                    var b = i[a[g]];
                    return b || (b = {}, h++, a[g] = h, i[h] = b), b
                }

                function n(a, c, f) {
                    c || (c = b);
                    if (j) return c.createElement(a);
                    f || (f = m(c));
                    var g;
                    return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
                }

                function o(a, c) {
                    a || (a = b);
                    if (j) return a.createDocumentFragment();
                    c = c || m(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = l(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function p(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return r.shivMethods ? n(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(r, b.frag)
                }

                function q(a) {
                    a || (a = b);
                    var c = m(a);
                    return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
                }
                var c = a.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f, g = "_html5shiv",
                    h = 0,
                    i = {},
                    j;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        f = !0, j = !0
                    }
                })();
                var r = {
                    elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: c.shivCSS !== !1,
                    supportsUnknownElements: j,
                    shivMethods: c.shivMethods !== !1,
                    type: "default",
                    shivDocument: q,
                    createElement: n,
                    createDocumentFragment: o
                };
                a.html5 = r, q(b)
            }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.mq = y, e.testProp = function(a) {
                return F([a])
            }, e.testAllProps = H, e.testStyles = x, e.prefixed = function(a, b, c) {
                return b ? H(a, b, c) : H(a, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + u.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };;
(function($, window, document, undefined) {
    var drag, state, e;
    drag = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    };
    state = {
        isTouch: false,
        isScrolling: false,
        isSwiping: false,
        direction: false,
        inMotion: false
    };
    e = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    };

    function Owl(element, options) {
        this.settings = null;
        this.options = $.extend({}, Owl.Defaults, options);
        this.$element = $(element);
        this.drag = $.extend({}, drag);
        this.state = $.extend({}, state);
        this.e = $.extend({}, e);
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._invalidated = {};
        this._pipe = [];
        $.each(Owl.Plugins, $.proxy(function(key, plugin) {
            this._plugins[key[0].toLowerCase() + key.slice(1)] = new plugin(this);
        }, this));
        $.each(Owl.Pipe, $.proxy(function(priority, worker) {
            this._pipe.push({
                'filter': worker.filter,
                'run': $.proxy(worker.run, this)
            });
        }, this));
        this.setup();
        this.initialize();
    }
    Owl.Defaults = {
        items: 3,
        loop: false,
        center: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        margin: 0,
        stagePadding: 0,
        merge: false,
        mergeFit: true,
        autoWidth: false,
        startPosition: 0,
        rtl: false,
        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        responsiveClass: false,
        fallbackEasing: 'swing',
        info: false,
        nestedItemSelector: false,
        itemElement: 'div',
        stageElement: 'div',
        themeClass: 'owl-theme',
        baseClass: 'owl-carousel',
        itemClass: 'owl-item',
        centerClass: 'center',
        activeClass: 'active'
    };
    Owl.Width = {
        Default: 'default',
        Inner: 'inner',
        Outer: 'outer'
    };
    Owl.Plugins = {};
    Owl.Pipe = [{
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            cache.current = this._items && this._items[this.relative(this._current)];
        }
    }, {
        filter: ['items', 'settings'],
        run: function() {
            var cached = this._clones,
                clones = this.$stage.children('.cloned');
            if (clones.length !== cached.length || (!this.settings.loop && cached.length > 0)) {
                this.$stage.children('.cloned').remove();
                this._clones = [];
            }
        }
    }, {
        filter: ['items', 'settings'],
        run: function() {
            var i, n, clones = this._clones,
                items = this._items,
                delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;
            for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
                if (delta > 0) {
                    this.$stage.children().eq(items.length + clones.length - 1).remove();
                    clones.pop();
                    this.$stage.children().eq(0).remove();
                    clones.pop();
                } else {
                    clones.push(clones.length / 2);
                    this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
                    clones.push(items.length - 1 - (clones.length - 1) / 2);
                    this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
                }
            }
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function() {
            var rtl = (this.settings.rtl ? 1 : -1),
                width = (this.width() / this.settings.items).toFixed(3),
                coordinate = 0,
                merge, i, n;
            this._coordinates = [];
            for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
                merge = this._mergers[this.relative(i)];
                merge = (this.settings.mergeFit && Math.min(merge, this.settings.items)) || merge;
                coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;
                this._coordinates.push(coordinate);
            }
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function() {
            var i, n, width = (this.width() / this.settings.items).toFixed(3),
                css = {
                    'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
                    'padding-left': this.settings.stagePadding || '',
                    'padding-right': this.settings.stagePadding || ''
                };
            this.$stage.css(css);
            css = {
                'width': this.settings.autoWidth ? 'auto' : width - this.settings.margin
            };
            css[this.settings.rtl ? 'margin-left' : 'margin-right'] = this.settings.margin;
            if (!this.settings.autoWidth && $.grep(this._mergers, function(v) {
                    return v > 1
                }).length > 0) {
                for (i = 0, n = this._coordinates.length; i < n; i++) {
                    css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
                    this.$stage.children().eq(i).css(css);
                }
            } else {
                this.$stage.children().css(css);
            }
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function(cache) {
            cache.current && this.reset(this.$stage.children().index(cache.current));
        }
    }, {
        filter: ['position'],
        run: function() {
            this.animate(this.coordinates(this._current));
        }
    }, {
        filter: ['width', 'position', 'items', 'settings'],
        run: function() {
            var rtl = this.settings.rtl ? 1 : -1,
                padding = this.settings.stagePadding * 2,
                begin = this.coordinates(this.current()) + padding,
                end = begin + this.width() * rtl,
                inner, outer, matches = [],
                i, n;
            for (i = 0, n = this._coordinates.length; i < n; i++) {
                inner = this._coordinates[i - 1] || 0;
                outer = Math.abs(this._coordinates[i]) + padding * rtl;
                if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end))) || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
                    matches.push(i);
                }
            }
            this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
            this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);
            if (this.settings.center) {
                this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
                this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
            }
        }
    }];
    Owl.prototype.initialize = function() {
        this.trigger('initialize');
        this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass('owl-rtl', this.settings.rtl);
        this.browserSupport();
        if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find('img');
            nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
            width = this.$element.children(nestedSelector).width();
            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs);
                return false;
            }
        }
        this.$element.addClass('owl-loading');
        this.$stage = $('<' + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">');
        this.$element.append(this.$stage.parent());
        this.replace(this.$element.children().not(this.$stage.parent()));
        this._width = this.$element.width();
        this.refresh();
        this.$element.removeClass('owl-loading').addClass('owl-loaded');
        this.eventsCall();
        this.internalEvents();
        this.addTriggerableEvents();
        this.trigger('initialized');
    };
    Owl.prototype.setup = function() {
        var viewport = this.viewport(),
            overwrites = this.options.responsive,
            match = -1,
            settings = null;
        if (!overwrites) {
            settings = $.extend({}, this.options);
        } else {
            $.each(overwrites, function(breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint);
                }
            });
            settings = $.extend({}, this.options, overwrites[match]);
            delete settings.responsive;
            if (settings.responsiveClass) {
                this.$element.attr('class', function(i, c) {
                    return c.replace(/\b owl-responsive-\S+/g, '');
                }).addClass('owl-responsive-' + match);
            }
        }
        if (this.settings === null || this._breakpoint !== match) {
            this.trigger('change', {
                property: {
                    name: 'settings',
                    value: settings
                }
            });
            this._breakpoint = match;
            this.settings = settings;
            this.invalidate('settings');
            this.trigger('changed', {
                property: {
                    name: 'settings',
                    value: this.settings
                }
            });
        }
    };
    Owl.prototype.optionsLogic = function() {
        this.$element.toggleClass('owl-center', this.settings.center);
        if (this.settings.loop && this._items.length < this.settings.items) {
            this.settings.loop = false;
        }
        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
        }
    };
    Owl.prototype.prepare = function(item) {
        var event = this.trigger('prepare', {
            content: item
        });
        if (!event.data) {
            event.data = $('<' + this.settings.itemElement + '/>').addClass(this.settings.itemClass).append(item)
        }
        this.trigger('prepared', {
            content: event.data
        });
        return event.data;
    };
    Owl.prototype.update = function() {
        var i = 0,
            n = this._pipe.length,
            filter = $.proxy(function(p) {
                return this[p]
            }, this._invalidated),
            cache = {};
        while (i < n) {
            if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                this._pipe[i].run(cache);
            }
            i++;
        }
        this._invalidated = {};
    };
    Owl.prototype.width = function(dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
    };
    Owl.prototype.refresh = function() {
        if (this._items.length === 0) {
            return false;
        }
        var start = new Date().getTime();
        this.trigger('refresh');
        this.setup();
        this.optionsLogic();
        this.$stage.addClass('owl-refresh');
        this.update();
        this.$stage.removeClass('owl-refresh');
        this.state.orientation = window.orientation;
        this.watchVisibility();
        this.trigger('refreshed');
    };
    Owl.prototype.eventsCall = function() {
        this.e._onDragStart = $.proxy(function(e) {
            this.onDragStart(e);
        }, this);
        this.e._onDragMove = $.proxy(function(e) {
            this.onDragMove(e);
        }, this);
        this.e._onDragEnd = $.proxy(function(e) {
            this.onDragEnd(e);
        }, this);
        this.e._onResize = $.proxy(function(e) {
            this.onResize(e);
        }, this);
        this.e._transitionEnd = $.proxy(function(e) {
            this.transitionEnd(e);
        }, this);
        this.e._preventClick = $.proxy(function(e) {
            this.preventClick(e);
        }, this);
    };
    Owl.prototype.onThrottledResize = function() {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
    };
    Owl.prototype.onResize = function() {
        if (!this._items.length) {
            return false;
        }
        if (this._width === this.$element.width()) {
            return false;
        }
        if (this.trigger('resize').isDefaultPrevented()) {
            return false;
        }
        this._width = this.$element.width();
        this.invalidate('width');
        this.refresh();
        this.trigger('resized');
    };
    Owl.prototype.eventsRouter = function(event) {
        var type = event.type;
        if (type === "mousedown" || type === "touchstart") {
            this.onDragStart(event);
        } else if (type === "mousemove" || type === "touchmove") {
            this.onDragMove(event);
        } else if (type === "mouseup" || type === "touchend") {
            this.onDragEnd(event);
        } else if (type === "touchcancel") {
            this.onDragEnd(event);
        }
    };
    Owl.prototype.internalEvents = function() {
        var isTouch = isTouchSupport(),
            isTouchIE = isTouchSupportIE();
        if (this.settings.mouseDrag) {
            this.$stage.on('mousedown', $.proxy(function(event) {
                this.eventsRouter(event)
            }, this));
            this.$stage.on('dragstart', function() {
                return false
            });
            this.$stage.get(0).onselectstart = function() {
                return false
            };
        } else {
            this.$element.addClass('owl-text-select-on');
        }
        if (this.settings.touchDrag && !isTouchIE) {
            this.$stage.on('touchstart touchcancel', $.proxy(function(event) {
                this.eventsRouter(event)
            }, this));
        }
        if (this.transitionEndVendor) {
            this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
        }
        if (this.settings.responsive !== false) {
            this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
        }
    };
    Owl.prototype.onDragStart = function(event) {
        var ev, isTouchEvent, pageX, pageY, animatedPos;
        ev = event.originalEvent || event || window.event;
        if (ev.which === 3 || this.state.isTouch) {
            return false;
        }
        if (ev.type === 'mousedown') {
            this.$stage.addClass('owl-grab');
        }
        this.trigger('drag');
        this.drag.startTime = new Date().getTime();
        this.speed(0);
        this.state.isTouch = true;
        this.state.isScrolling = false;
        this.state.isSwiping = false;
        this.drag.distance = 0;
        pageX = getTouches(ev).x;
        pageY = getTouches(ev).y;
        this.drag.offsetX = this.$stage.position().left;
        this.drag.offsetY = this.$stage.position().top;
        if (this.settings.rtl) {
            this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() +
                this.settings.margin;
        }
        if (this.state.inMotion && this.support3d) {
            animatedPos = this.getTransformProperty();
            this.drag.offsetX = animatedPos;
            this.animate(animatedPos);
            this.state.inMotion = true;
        } else if (this.state.inMotion && !this.support3d) {
            this.state.inMotion = false;
            return false;
        }
        this.drag.startX = pageX - this.drag.offsetX;
        this.drag.startY = pageY - this.drag.offsetY;
        this.drag.start = pageX - this.drag.startX;
        this.drag.targetEl = ev.target || ev.srcElement;
        this.drag.updatedX = this.drag.start;
        if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
            this.drag.targetEl.draggable = false;
        }
        $(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function(event) {
            this.eventsRouter(event)
        }, this));
    };
    Owl.prototype.onDragMove = function(event) {
        var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;
        if (!this.state.isTouch) {
            return;
        }
        if (this.state.isScrolling) {
            return;
        }
        ev = event.originalEvent || event || window.event;
        pageX = getTouches(ev).x;
        pageY = getTouches(ev).y;
        this.drag.currentX = pageX - this.drag.startX;
        this.drag.currentY = pageY - this.drag.startY;
        this.drag.distance = this.drag.currentX - this.drag.offsetX;
        if (this.drag.distance < 0) {
            this.state.direction = this.settings.rtl ? 'right' : 'left';
        } else if (this.drag.distance > 0) {
            this.state.direction = this.settings.rtl ? 'left' : 'right';
        }
        if (this.settings.loop) {
            if (this.op(this.drag.currentX, '>', this.coordinates(this.minimum())) && this.state.direction === 'right') {
                this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
            } else if (this.op(this.drag.currentX, '<', this.coordinates(this.maximum())) && this.state.direction === 'left') {
                this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
            }
        } else {
            minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
            this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
        }
        if ((this.drag.distance > 8 || this.drag.distance < -8)) {
            if (ev.preventDefault !== undefined) {
                ev.preventDefault();
            } else {
                ev.returnValue = false;
            }
            this.state.isSwiping = true;
        }
        this.drag.updatedX = this.drag.currentX;
        if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
            this.state.isScrolling = true;
            this.drag.updatedX = this.drag.start;
        }
        this.animate(this.drag.updatedX);
    };
    Owl.prototype.onDragEnd = function(event) {
        var compareTimes, distanceAbs, closest;
        if (!this.state.isTouch) {
            return;
        }
        if (event.type === 'mouseup') {
            this.$stage.removeClass('owl-grab');
        }
        this.trigger('dragged');
        this.drag.targetEl.removeAttribute("draggable");
        this.state.isTouch = false;
        this.state.isScrolling = false;
        this.state.isSwiping = false;
        if (this.drag.distance === 0 && this.state.inMotion !== true) {
            this.state.inMotion = false;
            return false;
        }
        this.drag.endTime = new Date().getTime();
        compareTimes = this.drag.endTime - this.drag.startTime;
        distanceAbs = Math.abs(this.drag.distance);
        if (distanceAbs > 3 || compareTimes > 300) {
            this.removeClick(this.drag.targetEl);
        }
        closest = this.closest(this.drag.updatedX);
        this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
        this.current(closest);
        this.invalidate('position');
        this.update();
        if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
            this.transitionEnd();
        }
        this.drag.distance = 0;
        $(document).off('.owl.dragEvents');
    };
    Owl.prototype.removeClick = function(target) {
        this.drag.targetEl = target;
        $(target).on('click.preventClick', this.e._preventClick);
        window.setTimeout(function() {
            $(target).off('click.preventClick');
        }, 300);
    };
    Owl.prototype.preventClick = function(ev) {
        if (ev.preventDefault) {
            ev.preventDefault();
        } else {
            ev.returnValue = false;
        }
        if (ev.stopPropagation) {
            ev.stopPropagation();
        }
        $(ev.target).off('click.preventClick');
    };
    Owl.prototype.getTransformProperty = function() {
        var transform, matrix3d;
        transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
        transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
        matrix3d = transform.length === 16;
        return matrix3d !== true ? transform[4] : transform[12];
    };
    Owl.prototype.closest = function(coordinate) {
        var position = -1,
            pull = 30,
            width = this.width(),
            coordinates = this.coordinates();
        if (!this.settings.freeDrag) {
            $.each(coordinates, $.proxy(function(index, value) {
                if (coordinate > value - pull && coordinate < value + pull) {
                    position = index;
                } else if (this.op(coordinate, '<', value) && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
                    position = this.state.direction === 'left' ? index + 1 : index;
                }
                return position === -1;
            }, this));
        }
        if (!this.settings.loop) {
            if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }
        return position;
    };
    Owl.prototype.animate = function(coordinate) {
        this.trigger('translate');
        this.state.inMotion = this.speed() > 0;
        if (this.support3d) {
            this.$stage.css({
                transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
                transition: (this.speed() / 1000) + 's'
            });
        } else if (this.state.isTouch) {
            this.$stage.css({
                left: coordinate + 'px'
            });
        } else {
            this.$stage.animate({
                left: coordinate
            }, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function() {
                if (this.state.inMotion) {
                    this.transitionEnd();
                }
            }, this));
        }
    };
    Owl.prototype.current = function(position) {
        if (position === undefined) {
            return this._current;
        }
        if (this._items.length === 0) {
            return undefined;
        }
        position = this.normalize(position);
        if (this._current !== position) {
            var event = this.trigger('change', {
                property: {
                    name: 'position',
                    value: position
                }
            });
            if (event.data !== undefined) {
                position = this.normalize(event.data);
            }
            this._current = position;
            this.invalidate('position');
            this.trigger('changed', {
                property: {
                    name: 'position',
                    value: this._current
                }
            });
        }
        return this._current;
    };
    Owl.prototype.invalidate = function(part) {
        this._invalidated[part] = true;
    }
    Owl.prototype.reset = function(position) {
        position = this.normalize(position);
        if (position === undefined) {
            return;
        }
        this._speed = 0;
        this._current = position;
        this.suppress(['translate', 'translated']);
        this.animate(this.coordinates(position));
        this.release(['translate', 'translated']);
    };
    Owl.prototype.normalize = function(position, relative) {
        var n = (relative ? this._items.length : this._items.length + this._clones.length);
        if (!$.isNumeric(position) || n < 1) {
            return undefined;
        }
        if (this._clones.length) {
            position = ((position % n) + n) % n;
        } else {
            position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
        }
        return position;
    };
    Owl.prototype.relative = function(position) {
        position = this.normalize(position);
        position = position - this._clones.length / 2;
        return this.normalize(position, true);
    };
    Owl.prototype.maximum = function(relative) {
        var maximum, width, i = 0,
            coordinate, settings = this.settings;
        if (relative) {
            return this._items.length - 1;
        }
        if (!settings.loop && settings.center) {
            maximum = this._items.length - 1;
        } else if (!settings.loop && !settings.center) {
            maximum = this._items.length - settings.items;
        } else if (settings.loop || settings.center) {
            maximum = this._items.length + settings.items;
        } else if (settings.autoWidth || settings.merge) {
            revert = settings.rtl ? 1 : -1;
            width = this.$stage.width() - this.$element.width();
            while (coordinate = this.coordinates(i)) {
                if (coordinate * revert >= width) {
                    break;
                }
                maximum = ++i;
            }
        } else {
            throw 'Can not detect maximum absolute position.'
        }
        return maximum;
    };
    Owl.prototype.minimum = function(relative) {
        if (relative) {
            return 0;
        }
        return this._clones.length / 2;
    };
    Owl.prototype.items = function(position) {
        if (position === undefined) {
            return this._items.slice();
        }
        position = this.normalize(position, true);
        return this._items[position];
    };
    Owl.prototype.mergers = function(position) {
        if (position === undefined) {
            return this._mergers.slice();
        }
        position = this.normalize(position, true);
        return this._mergers[position];
    };
    Owl.prototype.clones = function(position) {
        var odd = this._clones.length / 2,
            even = odd + this._items.length,
            map = function(index) {
                return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2
            };
        if (position === undefined) {
            return $.map(this._clones, function(v, i) {
                return map(i)
            });
        }
        return $.map(this._clones, function(v, i) {
            return v === position ? map(i) : null
        });
    };
    Owl.prototype.speed = function(speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }
        return this._speed;
    };
    Owl.prototype.coordinates = function(position) {
        var coordinate = null;
        if (position === undefined) {
            return $.map(this._coordinates, $.proxy(function(coordinate, index) {
                return this.coordinates(index);
            }, this));
        }
        if (this.settings.center) {
            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
        } else {
            coordinate = this._coordinates[position - 1] || 0;
        }
        return coordinate;
    };
    Owl.prototype.duration = function(from, to, factor) {
        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
    };
    Owl.prototype.to = function(position, speed) {
        if (this.settings.loop) {
            var distance = position - this.relative(this.current()),
                revert = this.current(),
                before = this.current(),
                after = this.current() + distance,
                direction = before - after < 0 ? true : false,
                items = this._clones.length + this._items.length;
            if (after < this.settings.items && direction === false) {
                revert = before + this._items.length;
                this.reset(revert);
            } else if (after >= items - this.settings.items && direction === true) {
                revert = before - this._items.length;
                this.reset(revert);
            }
            window.clearTimeout(this.e._goToLoop);
            this.e._goToLoop = window.setTimeout($.proxy(function() {
                this.speed(this.duration(this.current(), revert + distance, speed));
                this.current(revert + distance);
                this.update();
            }, this), 30);
        } else {
            this.speed(this.duration(this.current(), position, speed));
            this.current(position);
            this.update();
        }
    };
    Owl.prototype.next = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };
    Owl.prototype.prev = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };
    Owl.prototype.transitionEnd = function(event) {
        if (event !== undefined) {
            event.stopPropagation();
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                return false;
            }
        }
        this.state.inMotion = false;
        this.trigger('translated');
    };
    Owl.prototype.viewport = function() {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width();
        } else if (window.innerWidth) {
            width = window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth;
        } else {
            throw 'Can not detect viewport width.';
        }
        return width;
    };
    Owl.prototype.replace = function(content) {
        this.$stage.empty();
        this._items = [];
        if (content) {
            content = (content instanceof jQuery) ? content : $(content);
        }
        if (this.settings.nestedItemSelector) {
            content = content.find('.' + this.settings.nestedItemSelector);
        }
        content.filter(function() {
            return this.nodeType === 1;
        }).each($.proxy(function(index, item) {
            item = this.prepare(item);
            this.$stage.append(item);
            this._items.push(item);
            this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
        }, this));
        this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate('items');
    };
    Owl.prototype.add = function(content, position) {
        position = position === undefined ? this._items.length : this.normalize(position, true);
        this.trigger('add', {
            content: content,
            position: position
        });
        if (this._items.length === 0 || position === this._items.length) {
            this.$stage.append(content);
            this._items.push(content);
            this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
        } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
        }
        this.invalidate('items');
        this.trigger('added', {
            content: content,
            position: position
        });
    };
    Owl.prototype.remove = function(position) {
        position = this.normalize(position, true);
        if (position === undefined) {
            return;
        }
        this.trigger('remove', {
            content: this._items[position],
            position: position
        });
        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);
        this.invalidate('items');
        this.trigger('removed', {
            content: null,
            position: position
        });
    };
    Owl.prototype.addTriggerableEvents = function() {
        var handler = $.proxy(function(callback, event) {
            return $.proxy(function(e) {
                if (e.relatedTarget !== this) {
                    this.suppress([event]);
                    callback.apply(this, [].slice.call(arguments, 1));
                    this.release([event]);
                }
            }, this);
        }, this);
        $.each({
            'next': this.next,
            'prev': this.prev,
            'to': this.to,
            'destroy': this.destroy,
            'refresh': this.refresh,
            'replace': this.replace,
            'add': this.add,
            'remove': this.remove
        }, $.proxy(function(event, callback) {
            this.$element.on(event + '.owl.carousel', handler(callback, event + '.owl.carousel'));
        }, this));
    };
    Owl.prototype.watchVisibility = function() {
        if (!isElVisible(this.$element.get(0))) {
            this.$element.addClass('owl-hidden');
            window.clearInterval(this.e._checkVisibile);
            this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
        }

        function isElVisible(el) {
            return el.offsetWidth > 0 && el.offsetHeight > 0;
        }

        function checkVisible() {
            if (isElVisible(this.$element.get(0))) {
                this.$element.removeClass('owl-hidden');
                this.refresh();
                window.clearInterval(this.e._checkVisibile);
            }
        }
    };
    Owl.prototype.preloadAutoWidthImages = function(imgs) {
        var loaded, that, $el, img;
        loaded = 0;
        that = this;
        imgs.each(function(i, el) {
            $el = $(el);
            img = new Image();
            img.onload = function() {
                loaded++;
                $el.attr('src', img.src);
                $el.css('opacity', 1);
                if (loaded >= imgs.length) {
                    that.state.imagesLoaded = true;
                    that.initialize();
                }
            };
            img.src = $el.attr('src') || $el.attr('data-src') || $el.attr('data-src-retina');
        });
    };
    Owl.prototype.destroy = function() {
        if (this.$element.hasClass(this.settings.themeClass)) {
            this.$element.removeClass(this.settings.themeClass);
        }
        if (this.settings.responsive !== false) {
            $(window).off('resize.owl.carousel');
        }
        if (this.transitionEndVendor) {
            this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        }
        for (var i in this._plugins) {
            this._plugins[i].destroy();
        }
        if (this.settings.mouseDrag || this.settings.touchDrag) {
            this.$stage.off('mousedown touchstart touchcancel');
            $(document).off('.owl.dragEvents');
            this.$stage.get(0).onselectstart = function() {};
            this.$stage.off('dragstart', function() {
                return false
            });
        }
        this.$element.off('.owl');
        this.$stage.children('.cloned').remove();
        this.e = null;
        this.$element.removeData('owlCarousel');
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$stage.unwrap();
    };
    Owl.prototype.op = function(a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case '<':
                return rtl ? a > b : a < b;
            case '>':
                return rtl ? a < b : a > b;
            case '>=':
                return rtl ? a <= b : a >= b;
            case '<=':
                return rtl ? a >= b : a <= b;
            default:
                break;
        }
    };
    Owl.prototype.on = function(element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, listener);
        }
    };
    Owl.prototype.off = function(element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
        } else if (element.detachEvent) {
            element.detachEvent('on' + event, listener);
        }
    };
    Owl.prototype.trigger = function(name, data, namespace) {
        var status = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            handler = $.camelCase($.grep(['on', name, namespace], function(v) {
                return v
            }).join('-').toLowerCase()),
            event = $.Event([name, 'owl', namespace || 'carousel'].join('.').toLowerCase(), $.extend({
                relatedTarget: this
            }, status, data));
        if (!this._supress[name]) {
            $.each(this._plugins, function(name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event);
                }
            });
            this.$element.trigger(event);
            if (this.settings && typeof this.settings[handler] === 'function') {
                this.settings[handler].apply(this, event);
            }
        }
        return event;
    };
    Owl.prototype.suppress = function(events) {
        $.each(events, $.proxy(function(index, event) {
            this._supress[event] = true;
        }, this));
    }
    Owl.prototype.release = function(events) {
        $.each(events, $.proxy(function(index, event) {
            delete this._supress[event];
        }, this));
    }
    Owl.prototype.browserSupport = function() {
        this.support3d = isPerspective();
        if (this.support3d) {
            this.transformVendor = isTransform();
            var endVendors = ['transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd'];
            this.transitionEndVendor = endVendors[isTransition()];
            this.vendorName = this.transformVendor.replace(/Transform/i, '');
            this.vendorName = this.vendorName !== '' ? '-' + this.vendorName.toLowerCase() + '-' : '';
        }
        this.state.orientation = window.orientation;
    };

    function getTouches(event) {
        if (event.touches !== undefined) {
            return {
                x: event.touches[0].pageX,
                y: event.touches[0].pageY
            };
        }
        if (event.touches === undefined) {
            if (event.pageX !== undefined) {
                return {
                    x: event.pageX,
                    y: event.pageY
                };
            }
            if (event.pageX === undefined) {
                return {
                    x: event.clientX,
                    y: event.clientY
                };
            }
        }
    }

    function isStyleSupported(array) {
        var p, s, fake = document.createElement('div'),
            list = array;
        for (p in list) {
            s = list[p];
            if (typeof fake.style[s] !== 'undefined') {
                fake = null;
                return [s, p];
            }
        }
        return [false];
    }

    function isTransition() {
        return isStyleSupported(['transition', 'WebkitTransition', 'MozTransition', 'OTransition'])[1];
    }

    function isTransform() {
        return isStyleSupported(['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'])[0];
    }

    function isPerspective() {
        return isStyleSupported(['perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective'])[0];
    }

    function isTouchSupport() {
        return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
    }

    function isTouchSupportIE() {
        return window.navigator.msPointerEnabled;
    }
    $.fn.owlCarousel = function(options) {
        return this.each(function() {
            if (!$(this).data('owlCarousel')) {
                $(this).data('owlCarousel', new Owl(this, options));
            }
        });
    };
    $.fn.owlCarousel.Constructor = Owl;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
    var Lazy = function(carousel) {
        this._core = carousel;
        this._loaded = [];
        this._handlers = {
            'initialized.owl.carousel change.owl.carousel': $.proxy(function(e) {
                if (!e.namespace) {
                    return;
                }
                if (!this._core.settings || !this._core.settings.lazyLoad) {
                    return;
                }
                if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
                    var settings = this._core.settings,
                        n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
                        i = ((settings.center && n * -1) || 0),
                        position = ((e.property && e.property.value) || this._core.current()) + i,
                        clones = this._core.clones().length,
                        load = $.proxy(function(i, v) {
                            this.load(v)
                        }, this);
                    if (settings.lazyLoadEager > 0) {
                        n += settings.lazyLoadEager;
                        if (settings.loop) {
                            position -= settings.lazyLoadEager;
                            n++;
                        }
                    }
                    while (i++ < n) {
                        this.load(clones / 2 + this._core.relative(position));
                        clones && $.each(this._core.clones(this._core.relative(position++)), load);
                    }
                }
            }, this)
        };
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
    }
    Lazy.Defaults = {
        lazyLoad: false,
        lazyLoadEager: 0
    }
    Lazy.prototype.load = function(position) {
        var $item = this._core.$stage.children().eq(position),
            $elements = $item && $item.find('.owl-lazy');
        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return;
        }
        $elements.each($.proxy(function(index, element) {
            var $element = $(element),
                image, url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');
            this._core.trigger('load', {
                element: $element,
                url: url
            }, 'lazy');
            if ($element.is('img')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    $element.css('opacity', 1);
                    this._core.trigger('loaded', {
                        element: $element,
                        url: url
                    }, 'lazy');
                }, this)).attr('src', url);
            } else {
                image = new Image();
                image.onload = $.proxy(function() {
                    $element.css({
                        'background-image': 'url(' + url + ')',
                        'opacity': '1'
                    });
                    this._core.trigger('loaded', {
                        element: $element,
                        url: url
                    }, 'lazy');
                }, this);
                image.src = url;
            }
        }, this));
        this._loaded.push($item.get(0));
    }
    Lazy.prototype.destroy = function() {
        var handler, property;
        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    }
    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
    var AutoHeight = function(carousel) {
        this._core = carousel;
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function() {
                if (this._core.settings.autoHeight) {
                    this.update();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (this._core.settings.autoHeight && e.property.name == 'position') {
                    this.update();
                }
            }, this),
            'loaded.owl.lazy': $.proxy(function(e) {
                if (this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current())) {
                    this.update();
                }
            }, this)
        };
        this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
    };
    AutoHeight.Defaults = {
        autoHeight: false,
        autoHeightClass: 'owl-height'
    };
    AutoHeight.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass);
    };
    AutoHeight.prototype.destroy = function() {
        var handler, property;
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
    var Video = function(carousel) {
        this._core = carousel;
        this._videos = {};
        this._playing = null;
        this._fullscreen = false;
        this._handlers = {
            'resize.owl.carousel': $.proxy(function(e) {
                if (this._core.settings.video && !this.isInFullScreen()) {
                    e.preventDefault();
                }
            }, this),
            'refresh.owl.carousel changed.owl.carousel': $.proxy(function(e) {
                if (this._playing) {
                    this.stop();
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function(e) {
                var $element = $(e.content).find('.owl-video');
                if ($element.length) {
                    $element.css('display', 'none');
                    this.fetch($element, $(e.content));
                }
            }, this)
        };
        this._core.options = $.extend({}, Video.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
            this.play(e);
        }, this));
    };
    Video.Defaults = {
        video: false,
        videoHeight: false,
        videoWidth: false
    };
    Video.prototype.fetch = function(target, item) {
        var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
            id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
            width = target.attr('data-width') || this._core.settings.videoWidth,
            height = target.attr('data-height') || this._core.settings.videoHeight,
            url = target.attr('href');
        if (url) {
            id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
            if (id[3].indexOf('youtu') > -1) {
                type = 'youtube';
            } else if (id[3].indexOf('vimeo') > -1) {
                type = 'vimeo';
            } else {
                throw new Error('Video URL not supported.');
            }
            id = id[6];
        } else {
            throw new Error('Missing video URL.');
        }
        this._videos[url] = {
            type: type,
            id: id,
            width: width,
            height: height
        };
        item.attr('data-video', url);
        this.thumbnail(target, this._videos[url]);
    };
    Video.prototype.thumbnail = function(target, video) {
        var tnLink, icon, path, dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
            customTn = target.find('img'),
            srcType = 'src',
            lazyClass = '',
            settings = this._core.settings,
            create = function(path) {
                icon = '<div class="owl-video-play-icon"></div>';
                if (settings.lazyLoad) {
                    tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
                } else {
                    tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
                }
                target.after(tnLink);
                target.after(icon);
            };
        target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');
        if (this._core.settings.lazyLoad) {
            srcType = 'data-src';
            lazyClass = 'owl-lazy';
        }
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
        }
        if (video.type === 'youtube') {
            path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path);
        } else if (video.type === 'vimeo') {
            $.ajax({
                type: 'GET',
                url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function(data) {
                    path = data[0].thumbnail_large;
                    create(path);
                }
            });
        }
    };
    Video.prototype.stop = function() {
        this._core.trigger('stop', null, 'video');
        this._playing.find('.owl-video-frame').remove();
        this._playing.removeClass('owl-video-playing');
        this._playing = null;
    };
    Video.prototype.play = function(ev) {
        this._core.trigger('play', null, 'video');
        if (this._playing) {
            this.stop();
        }
        var target = $(ev.target || ev.srcElement),
            item = target.closest('.' + this._core.settings.itemClass),
            video = this._videos[item.attr('data-video')],
            width = video.width || '100%',
            height = video.height || this._core.$stage.height(),
            html, wrap;
        if (video.type === 'youtube') {
            html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/' +
                video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
        } else if (video.type === 'vimeo') {
            html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width +
                '" height="' + height +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        }
        item.addClass('owl-video-playing');
        this._playing = item;
        wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">' +
            html + '</div>');
        target.after(wrap);
    };
    Video.prototype.isInFullScreen = function() {
        var element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
        if (element && $(element).parent().hasClass('owl-video-frame')) {
            this._core.speed(0);
            this._fullscreen = true;
        }
        if (element && this._fullscreen && this._playing) {
            return false;
        }
        if (this._fullscreen) {
            this._fullscreen = false;
            return false;
        }
        if (this._playing) {
            if (this._core.state.orientation !== window.orientation) {
                this._core.state.orientation = window.orientation;
                return false;
            }
        }
        return true;
    };
    Video.prototype.destroy = function() {
        var handler, property;
        this._core.$element.off('click.owl.video');
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
    var Animate = function(scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined;
        this.next = undefined;
        this.handlers = {
            'change.owl.carousel': $.proxy(function(e) {
                if (e.property.name == 'position') {
                    this.previous = this.core.current();
                    this.next = e.property.value;
                }
            }, this),
            'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
                this.swapping = e.type == 'translated';
            }, this),
            'translate.owl.carousel': $.proxy(function(e) {
                if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                    this.swap();
                }
            }, this)
        };
        this.core.$element.on(this.handlers);
    };
    Animate.Defaults = {
        animateOut: false,
        animateIn: false
    };
    Animate.prototype.swap = function() {
        if (this.core.settings.items !== 1 || !this.core.support3d) {
            return;
        }
        this.core.speed(0);
        var left, clear = $.proxy(this.clear, this),
            previous = this.core.$stage.children().eq(this.previous),
            next = this.core.$stage.children().eq(this.next),
            incoming = this.core.settings.animateIn,
            outgoing = this.core.settings.animateOut;
        if (this.core.current() === this.previous) {
            return;
        }
        if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.css({
                'left': left + 'px'
            }).addClass('animated owl-animated-out').addClass(outgoing).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
        }
        if (incoming) {
            next.addClass('animated owl-animated-in').addClass(incoming).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
        }
    };
    Animate.prototype.clear = function(e) {
        $(e.target).css({
            'left': ''
        }).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.transitionEnd();
    }
    Animate.prototype.destroy = function() {
        var handler, property;
        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
    var Autoplay = function(scope) {
        this.core = scope;
        this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);
        this.handlers = {
            'translated.owl.carousel refreshed.owl.carousel': $.proxy(function() {
                this.autoplay();
            }, this),
            'play.owl.autoplay': $.proxy(function(e, t, s) {
                this.play(t, s);
            }, this),
            'stop.owl.autoplay': $.proxy(function() {
                this.stop();
            }, this),
            'mouseover.owl.autoplay': $.proxy(function() {
                if (this.core.settings.autoplayHoverPause) {
                    this.pause();
                }
            }, this),
            'mouseleave.owl.autoplay': $.proxy(function() {
                if (this.core.settings.autoplayHoverPause) {
                    this.autoplay();
                }
            }, this)
        };
        this.core.$element.on(this.handlers);
    };
    Autoplay.Defaults = {
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoplaySpeed: false
    };
    Autoplay.prototype.autoplay = function() {
        if (this.core.settings.autoplay && !this.core.state.videoPlay) {
            window.clearInterval(this.interval);
            this.interval = window.setInterval($.proxy(function() {
                this.play();
            }, this), this.core.settings.autoplayTimeout);
        } else {
            window.clearInterval(this.interval);
        }
    };
    Autoplay.prototype.play = function(timeout, speed) {
        if (document.hidden === true) {
            return;
        }
        if (this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion) {
            return;
        }
        if (this.core.settings.autoplay === false) {
            window.clearInterval(this.interval);
            return;
        }
        this.core.next(this.core.settings.autoplaySpeed);
    };
    Autoplay.prototype.stop = function() {
        window.clearInterval(this.interval);
        this.core.settings.autoplay = false
    };
    Autoplay.prototype.pause = function() {
        window.clearInterval(this.interval);
    };
    Autoplay.prototype.destroy = function() {
        var handler, property;
        window.clearInterval(this.interval);
        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
    'use strict';
    var Navigation = function(carousel) {
        this._core = carousel;
        this._initialized = false;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };
        this._handlers = {
            'prepared.owl.carousel': $.proxy(function(e) {
                if (this._core.settings.dotsData) {
                    this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
                }
            }, this),
            'add.owl.carousel': $.proxy(function(e) {
                if (this._core.settings.dotsData) {
                    this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
                }
            }, this),
            'remove.owl.carousel prepared.owl.carousel': $.proxy(function(e) {
                if (this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1);
                }
            }, this),
            'change.owl.carousel': $.proxy(function(e) {
                if (e.property.name == 'position') {
                    if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                        var current = this._core.current(),
                            maximum = this._core.maximum(),
                            minimum = this._core.minimum();
                        e.data = e.property.value > maximum ? current >= maximum ? minimum : maximum : e.property.value < minimum ? maximum : e.property.value;
                    }
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.property.name == 'position') {
                    this.draw();
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function() {
                if (!this._initialized) {
                    this.initialize();
                    this._initialized = true;
                }
                this._core.trigger('refresh', null, 'navigation');
                this.update();
                this.draw();
                this._core.trigger('refreshed', null, 'navigation');
            }, this)
        };
        this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
        this.$element.on(this._handlers);
    }
    Navigation.Defaults = {
        nav: false,
        navRewind: true,
        navText: ['prev', 'next'],
        navSpeed: false,
        navElement: 'div',
        navContainer: false,
        navContainerClass: 'owl-nav',
        navClass: ['owl-prev', 'owl-next'],
        slideBy: 1,
        dotClass: 'owl-dot',
        dotsClass: 'owl-dots',
        dots: true,
        dotsEach: false,
        dotData: false,
        dotsSpeed: false,
        dotsContainer: false,
        controlsClass: 'owl-controls'
    }
    Navigation.prototype.initialize = function() {
        var $container, override, options = this._core.settings;
        if (!options.dotsData) {
            this._templates = [$('<div>').addClass(options.dotClass).append($('<span>')).prop('outerHTML')];
        }
        if (!options.navContainer || !options.dotsContainer) {
            this._controls.$container = $('<div>').addClass(options.controlsClass).appendTo(this.$element);
        }
        this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer) : $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);
        this._controls.$indicators.on('click', 'div', $.proxy(function(e) {
            var index = $(e.target).parent().is(this._controls.$indicators) ? $(e.target).index() : $(e.target).parent().index();
            e.preventDefault();
            this.to(index, options.dotsSpeed);
        }, this));
        $container = options.navContainer ? $(options.navContainer) : $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);
        this._controls.$next = $('<' + options.navElement + '>');
        this._controls.$previous = this._controls.$next.clone();
        this._controls.$previous.addClass(options.navClass[0]).html(options.navText[0]).hide().prependTo($container).on('click', $.proxy(function(e) {
            this.prev(options.navSpeed);
        }, this));
        this._controls.$next.addClass(options.navClass[1]).html(options.navText[1]).hide().appendTo($container).on('click', $.proxy(function(e) {
            this.next(options.navSpeed);
        }, this));
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this);
        }
    }
    Navigation.prototype.destroy = function() {
        var handler, control, property, override;
        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
            this._controls[control].remove();
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override];
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    }
    Navigation.prototype.update = function() {
        var i, j, k, options = this._core.settings,
            lower = this._core.clones().length / 2,
            upper = lower + this._core.items().length,
            size = options.center || options.autoWidth || options.dotData ? 1 : options.dotsEach || options.items;
        if (options.slideBy !== 'page') {
            options.slideBy = Math.min(options.slideBy, options.items);
        }
        if (options.dots || options.slideBy == 'page') {
            this._pages = [];
            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({
                        start: i - lower,
                        end: i - lower + size - 1
                    });
                    j = 0, ++k;
                }
                j += this._core.mergers(this._core.relative(i));
            }
        }
    }
    Navigation.prototype.draw = function() {
        var difference, i, html = '',
            options = this._core.settings,
            $items = this._core.$stage.children(),
            index = this._core.relative(this._core.current());
        if (options.nav && !options.loop && !options.navRewind) {
            this._controls.$previous.toggleClass('disabled', index <= 0);
            this._controls.$next.toggleClass('disabled', index >= this._core.maximum());
        }
        this._controls.$previous.toggle(options.nav);
        this._controls.$next.toggle(options.nav);
        if (options.dots) {
            difference = this._pages.length - this._controls.$indicators.children().length;
            if (options.dotData && difference !== 0) {
                for (i = 0; i < this._controls.$indicators.children().length; i++) {
                    html += this._templates[this._core.relative(i)];
                }
                this._controls.$indicators.html(html);
            } else if (difference > 0) {
                html = new Array(difference + 1).join(this._templates[0]);
                this._controls.$indicators.append(html);
            } else if (difference < 0) {
                this._controls.$indicators.children().slice(difference).remove();
            }
            this._controls.$indicators.find('.active').removeClass('active');
            this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
        }
        this._controls.$indicators.toggle(options.dots);
    }
    Navigation.prototype.onTrigger = function(event) {
        var settings = this._core.settings;
        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotData ? 1 : settings.dotsEach || settings.items)
        };
    }
    Navigation.prototype.current = function() {
        var index = this._core.relative(this._core.current());
        return $.grep(this._pages, function(o) {
            return o.start <= index && o.end >= index;
        }).pop();
    }
    Navigation.prototype.getPosition = function(successor) {
        var position, length, options = this._core.settings;
        if (options.slideBy == 'page') {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[((position % length) + length) % length].start;
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += options.slideBy : position -= options.slideBy;
        }
        return position;
    }
    Navigation.prototype.next = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    }
    Navigation.prototype.prev = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    }
    Navigation.prototype.to = function(position, speed, standard) {
        var length;
        if (!standard) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed);
        }
    }
    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
    'use strict';
    var Hash = function(carousel) {
        this._core = carousel;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function() {
                if (this._core.settings.startPosition == 'URLHash') {
                    $(window).trigger('hashchange.owl.navigation');
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function(e) {
                var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
                this._hashes[hash] = e.content;
            }, this)
        };
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);
        this.$element.on(this._handlers);
        $(window).on('hashchange.owl.navigation', $.proxy(function() {
            var hash = window.location.hash.substring(1),
                items = this._core.$stage.children(),
                position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;
            if (!hash) {
                return false;
            }
            this._core.to(position, false, true);
        }, this));
    }
    Hash.Defaults = {
        URLhashListener: false
    }
    Hash.prototype.destroy = function() {
        var handler, property;
        $(window).off('hashchange.owl.navigation');
        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    }
    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || window.jQuery, window, document);;
(function($, window, document, undefined) {
    var Linked = function(carousel) {
        this._core = carousel;
        this._handlers = {
            'dragged.owl.carousel changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.linked) {
                    this.update(e);
                }
            }, this),
            'linked.to.owl.carousel': $.proxy(function(e, index, speed, standard, propagate) {
                if (e.namespace && this._core.settings.linked) {
                    this.toSlide(index, speed, propagate);
                }
            }, this)
        };
        this._core.$element.on(this._handlers);
        this._core.options = $.extend({}, Linked.Defaults, this._core.options);
    };
    Linked.Defaults = {
        linked: false
    };
    Linked.prototype.update = function(e) {
        this.toSlide(e.relatedTarget.relative(e.item.index));
    };
    Linked.prototype.toSlide = function(index, speed, propagate) {
        var id = this._core.$element.attr('id'),
            linked = this._core.settings.linked.split(',');
        if (typeof propagate == 'undefined') {
            propagate = true;
        }
        index = index || 0;
        if (propagate) {
            $.each(linked, function(i, el) {
                $(el).trigger('linked.to.owl.carousel', [index, 300, true, false]);
            });
        } else {
            this._core.$element.trigger('to.owl.carousel', [index, 300, true]);
            if (this._core.settings.current) {
                this._core._plugins.current.switchTo(index);
            }
        }
    };
    Linked.prototype.destroy = function() {
        var handler, property;
        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.linked = Linked;
})(window.Zepto || window.jQuery, window, document);
/*!
 * VERSION: 1.7.5
 * DATE: 2015-02-26
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var t = document.documentElement,
        e = window,
        i = function(i, r) {
            var s = "x" === r ? "Width" : "Height",
                n = "scroll" + s,
                o = "client" + s,
                a = document.body;
            return i === e || i === t || i === a ? Math.max(t[n], a[n]) - (e["inner" + s] || t[o] || a[o]) : i[n] - i["offset" + s]
        },
        r = _gsScope._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            version: "1.7.5",
            init: function(t, r, s) {
                return this._wdw = t === e, this._target = t, this._tween = s, "object" != typeof r && (r = {
                    y: r
                }), this.vars = r, this._autoKill = r.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != r.x ? (this._addTween(this, "x", this.x, "max" === r.x ? i(t, "x") : r.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != r.y ? (this._addTween(this, "y", this.y, "max" === r.y ? i(t, "y") : r.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
            },
            set: function(t) {
                this._super.setRatio.call(this, t);
                var r = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                    s = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                    n = s - this.yPrev,
                    o = r - this.xPrev;
                this._autoKill && (!this.skipX && (o > 7 || -7 > o) && i(this._target, "x") > r && (this.skipX = !0), !this.skipY && (n > 7 || -7 > n) && i(this._target, "y") > s && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? e.scrollTo(this.skipX ? r : this.x, this.skipY ? s : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
            }
        }),
        s = r.prototype;
    r.max = i, s.getX = function() {
        return this._wdw ? null != e.pageXOffset ? e.pageXOffset : null != t.scrollLeft ? t.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
    }, s.getY = function() {
        return this._wdw ? null != e.pageYOffset ? e.pageYOffset : null != t.scrollTop ? t.scrollTop : document.body.scrollTop : this._target.scrollTop
    }, s._kill = function(t) {
        return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
    }
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
(function(root, factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
            return factory(root, $, false);
        });
        return;
    }
    factory(root, (root.jQuery || root.Zepto || root.ender || root.$), true);
}(this, function(root, $, patchJQuery) {
    "use strict";
    var scroolly;
    scroolly = {
        options: {
            timeout: null,
            meter: $('.scroolly'),
            body: document
        },
        theCSSPrefix: '',
        theDashedCSSPrefix: '',
        isMobile: false,
        isInitialized: false,
        animFrame: null,
        direction: 0,
        scrollTop: 0,
        scrollCenter: 0,
        scrollBottom: 0,
        docHeight: 0,
        docMiddle: 0,
        winHeight: $(window).height()
    };
    scroolly.scrollLayout = {};
    scroolly._isObject = function(val) {
        return typeof val === 'object';
    };
    scroolly._isArray = function(val) {
        return val instanceof Array;
    };
    scroolly._isNumber = function(val) {
        return val instanceof Number || typeof val === 'number';
    };
    scroolly._isString = function(val) {
        return val instanceof String || typeof val === 'string';
    };
    scroolly._default = function(obj, key, defaultValue) {
        if (defaultValue === undefined) {
            defaultValue = null;
        }
        var parts = (key + '').split('.');
        if (obj && (scroolly._isObject(obj) || scroolly._isArray(obj))) {
            var root = obj,
                part;
            for (var i in parts) {
                part = parts[i];
                if ((scroolly._isObject(root) || scroolly._isArray(root)) && root[part] !== undefined) {
                    root = root[part];
                } else {
                    return defaultValue;
                }
            }
            return root;
        }
        return defaultValue;
    };
    scroolly.parseCoords = function(boundry) {
        var strings = boundry.split(/\s*=\s*/),
            coordRel = strings[0] || 'doc-top',
            parsedCoordRel = scroolly.parseCoord(coordRel),
            coordVP = strings[1] || parsedCoordRel.anchor,
            parsedCoordVP = scroolly.parseCoord(coordVP);
        return [parsedCoordRel, parsedCoordVP];
    };
    scroolly.parseCoord = function(coord) {
        var reAnchor = /((vp|doc|el|con)-)?(top|center|bottom)?/i,
            reOffsetStr = '(\\+|-)?\\s*(\\d+)(\\%|vp|doc|el|con)?',
            reOffset = new RegExp(reOffsetStr, 'gi'),
            mA = coord.match(reAnchor),
            mO = coord.match(reOffset);
        if (!mA && !mO) {
            return false;
        }
        var subject = mA[1] ? mA[2] : 'vp',
            anchor = mA[3] || 'top',
            offsets = [];
        if (mO) {
            reOffset = new RegExp(reOffsetStr, 'i');
            var offsetStr, mO2, sign, offset, offsetSubject;
            for (var i = 0; i < mO.length; i++) {
                offsetStr = mO[i];
                mO2 = offsetStr.match(reOffset);
                sign = mO2[1] && mO2[1] === '-' ? -1 : 1;
                offset = mO2[2] && parseInt(mO2[2]) * sign || 0;
                offsetSubject = 'px';
                if (mO2[3]) {
                    offsetSubject = mO2[3] === '%' ? subject : mO2[3];
                }
                offsets.push({
                    offset: offset,
                    subject: offsetSubject
                });
            }
        }
        return {
            original: coord,
            subject: subject,
            anchor: anchor,
            offsets: offsets
        };
    };
    scroolly.calculateCoord = function(coord, $element, $container) {
        if (scroolly._isString(coord)) {
            coord = scroolly.parseCoord(coord);
        }
        var subjectCoord = 0;
        if ('vp' === coord.subject) {
            switch (coord.anchor) {
                case 'top':
                    subjectCoord = scroolly.scrollTop;
                    break;
                case 'center':
                    subjectCoord = scroolly.scrollCenter;
                    break;
                case 'bottom':
                    subjectCoord = scroolly.scrollBottom;
                    break;
            }
        } else if ('doc' === coord.subject) {
            switch (coord.anchor) {
                case 'top':
                    subjectCoord = 0;
                    break;
                case 'center':
                    subjectCoord = scroolly.docMiddle;
                    break;
                case 'bottom':
                    subjectCoord = scroolly.docHeight;
            }
        } else {
            var $subject = 'con' === coord.subject ? $container : $element,
                subjectHeight = $subject.outerHeight(),
                subjectTop = $subject.offset().top,
                subjectBottom = subjectTop + subjectHeight,
                subjectCenter = subjectTop + Math.floor(subjectHeight / 2);
            switch (coord.anchor) {
                case 'top':
                    subjectCoord = subjectTop;
                    break;
                case 'center':
                    subjectCoord = subjectCenter;
                    break;
                case 'bottom':
                    subjectCoord = subjectBottom;
                    break;
            }
        }
        var i, o, subjectOffset, relativeHeight;
        for (i = 0; i < coord.offsets.length; i++) {
            o = coord.offsets[i];
            subjectOffset = o.offset;
            if ('px' !== o.subject) {
                relativeHeight = 0;
                switch (o.subject) {
                    case 'vp':
                        relativeHeight = scroolly.winHeight;
                        break;
                    case 'doc':
                        relativeHeight = scroolly.docHeight;
                        break;
                    case 'el':
                        relativeHeight = $element.outerHeight();
                        break;
                    case 'con':
                        relativeHeight = $container.outerHeight();
                        break;
                }
                subjectOffset = Math.ceil(o.offset / 100 * relativeHeight);
            }
            subjectCoord += subjectOffset;
        }
        return subjectCoord;
    };
    scroolly.cmpCoords = function(coords, $element, $container) {
        return scroolly.calculateCoord(coords[0], $element, $container) - scroolly.calculateCoord(coords[1], $element, $container);
    };
    scroolly.isRuleInActiveWidthRange = function(rule) {
        var fromX = scroolly._default(rule, 'minWidth', 0),
            toX = scroolly._default(rule, 'maxWidth', 'infinity'),
            meter = scroolly._default(scroolly.options, 'meter'),
            width = $(window).width(),
            minWidthScrolly, maxWidthScrolly, checkinWidth;
        if (meter.length) {
            minWidthScrolly = meter.length ? parseInt(meter.css('min-width')) : 0;
            maxWidthScrolly = meter.length ? meter.css('max-width') : 'none';
            maxWidthScrolly = maxWidthScrolly === 'none' ? 'infinity' : parseInt(maxWidthScrolly);
            checkinWidth = fromX <= minWidthScrolly && (toX === 'infinity' || toX >= maxWidthScrolly);
            return checkinWidth;
        }
        return fromX < width && (toX === 'infinity' || toX >= width);
    };
    scroolly.isRuleActive = function(rule, $element, $container) {
        var checkinWidth = scroolly.isRuleInActiveWidthRange(rule);
        if (!checkinWidth) {
            return false;
        }
        var ruleDirection = scroolly._default(rule, 'direction', 0),
            scrollDirection = scroolly.direction;
        if (ruleDirection && (ruleDirection > 0 && scrollDirection < 0 || ruleDirection < 0 && scrollDirection >= 0)) {
            return false;
        }
        var fromY = scroolly._default(rule, 'from', '0'),
            toY = scroolly._default(rule, 'to', 'finish');
        var toTop = scroolly.cmpCoords(fromY, $element, $container);
        if (toTop > 0) {
            return false;
        }
        var toBottom = scroolly.cmpCoords(toY, $element, $container);
        if (toBottom <= 0) {
            return false;
        }
        return {
            offset: -toTop,
            length: toBottom - toTop
        };
    };
    scroolly.getScrollLayoutLength = function() {
        return (!Object.keys) ? $.map(scroolly.scrollLayout, function() {
            return 1;
        }).length : Object.keys(scroolly.scrollLayout).length
    };
    scroolly.addItem = function(id, $element, rules, $container) {
        if (!$element.length) {
            return false;
        }
        $container = $container || 'self';
        var rule, isAbsolute, fromY, toY, fromCss, toCss, cssOnScroll;
        cssOnScroll = function(element, offset, length, rule) {
            var progress = offset / length,
                fromCss = scroolly._default(rule, 'cssFrom'),
                toCss = scroolly._default(rule, 'cssTo'),
                css = {},
                fromProp, toProp;
            for (var property in fromCss) {
                fromProp = fromCss[property];
                toProp = scroolly._default(toCss, property, fromProp);
                css[property] = scroolly.getTransitionValue(fromProp, toProp, progress);
            }
            element.css(scroolly.extendCssWithPrefix(css));
        };
        for (var i in rules) {
            rule = rules[i];
            isAbsolute = !$container;
            fromY = scroolly._default(rule, 'from', 'doc-top');
            if (scroolly._isString(fromY) || scroolly._isNumber(fromY)) {
                fromY = scroolly.parseCoords('' + fromY);
                rule.from = fromY;
            }
            toY = scroolly._default(rule, 'to', 'doc-bottom');
            if (scroolly._isString(toY) || scroolly._isNumber(toY)) {
                toY = scroolly.parseCoords('' + toY);
                rule.to = toY;
            }
            fromCss = scroolly._default(rule, 'cssFrom');
            toCss = scroolly._default(rule, 'cssTo');
            if (fromCss && toCss) {
                rule.cssOnScroll = cssOnScroll;
            }
        }
        if ($element.length > 1) {
            $element.each(function(i) {
                var clonedRules = [],
                    rule, clonedRule, $con = null;
                for (var j = 0; j < rules.length; j++) {
                    rule = rules[j];
                    clonedRule = {};
                    $.extend(clonedRule, rule);
                    clonedRules.push(clonedRule);
                }
                if ($container) {
                    if ($container === 'self') {
                        $con = $container;
                    } else {
                        $con = $container.length > 1 && i < $container.length ? $($container[i]) : $container;
                    }
                }
                scroolly.addItem(id + '-' + i, $(this), clonedRules, $con);
            });
            return true;
        }
        var item = scroolly._default(scroolly.scrollLayout, id);
        if (item) {
            item.rules.concat(rules);
        } else {
            scroolly.scrollLayout[id] = {
                element: $element,
                container: $container,
                rules: rules
            };
        }
        return true;
    };
    scroolly.factory = function($element, rules, $container, id) {
        scroolly.init();
        if (!$element.length) {
            return false;
        }
        if (!rules) {
            return false;
        }
        id = id || $element[0].tagName + '_' + scroolly.getScrollLayoutLength();
        scroolly.addItem(id, $element, rules, $container, false);
    };
    scroolly.stickItem = function(id, $element, params) {
        scroolly.stickItemXY(id, $element, (params instanceof Array) ? params : [params]);
    };
    scroolly.stickItemXY = function(id, $element, params) {
        params = params || [];
        var rules = [],
            xRange, $bottomContainer, mode, offsetTop, offsetBottom, minWidth, maxWidth, isStatic;
        for (var x in params) {
            xRange = params[x];
            $bottomContainer = scroolly._default(xRange, '$bottomContainer', $('body'));
            mode = scroolly._default(xRange, 'mode');
            offsetTop = scroolly._default(xRange, 'offsetTop', 0);
            offsetBottom = scroolly._default(xRange, 'offsetBottom', 0);
            minWidth = scroolly._default(xRange, 'minWidth', 0);
            maxWidth = scroolly._default(xRange, 'maxWidth', 'infinity');
            isStatic = scroolly._default(xRange, 'static', false);
            if ('next' === $bottomContainer) {
                mode = mode || 'margin';
                $bottomContainer = $($element).next();
            } else if ('parent' === $bottomContainer || !$bottomContainer) {
                mode = mode || 'padding';
                $bottomContainer = $($element).parent();
            }
            if (!isStatic) {
                rules.push({
                    source: 'sticky',
                    alias: 'top',
                    minWidth: minWidth,
                    maxWidth: maxWidth,
                    offsetTop: offsetTop,
                    offsetBottom: offsetBottom,
                    bottomContainer: $bottomContainer,
                    mode: mode
                });
                rules.push({
                    source: 'sticky',
                    alias: 'fixed',
                    minWidth: minWidth,
                    maxWidth: maxWidth,
                    offsetTop: offsetTop,
                    offsetBottom: offsetBottom,
                    bottomContainer: $bottomContainer,
                    mode: mode
                });
                rules.push({
                    source: 'sticky',
                    alias: 'bottom',
                    minWidth: minWidth,
                    maxWidth: maxWidth,
                    offsetTop: offsetTop,
                    offsetBottom: offsetBottom,
                    bottomContainer: $bottomContainer,
                    mode: mode
                });
            } else {
                rules.push({
                    source: 'sticky',
                    alias: 'static',
                    minWidth: minWidth,
                    maxWidth: maxWidth,
                    bottomContainer: $bottomContainer
                });
            }
        }
        scroolly.addItem(id, $($element), rules);
    };
    scroolly.processStickyItemRange = function($element, rule) {
        rule = rule || {};
        var $bottomContainer = scroolly._default(rule, 'bottomContainer', $('body')),
            mode = scroolly._default(rule, 'mode'),
            offsetTop = scroolly._default(rule, 'offsetTop', 0),
            offsetBottom = scroolly._default(rule, 'offsetBottom', 0),
            itemHeight = parseInt($element.css('margin-top')) + $element.height() + parseInt($element.css('margin-bottom'));
        if ($element.css('box-sizing') === 'border-box') {
            itemHeight += parseInt($element.css('padding-top')) + parseInt($element.css('padding-bottom'));
        }
        var bottomContainerHeight = parseInt($bottomContainer.css('margin-top')) + $bottomContainer.height() + parseInt($bottomContainer.css('margin-bottom'));
        if ($bottomContainer.css('box-sizing') === 'border-box') {
            bottomContainerHeight += parseInt($bottomContainer.css('padding-top')) + parseInt($bottomContainer.css('padding-bottom'));
        }
        var offset_1 = Math.round($element.offset().top - parseInt($element.css('margin-top'))),
            offset_2 = Math.round($bottomContainer.offset().top + (bottomContainerHeight - itemHeight - offsetBottom));
        switch (rule.alias) {
            case 'top':
                rule.from = 0;
                rule.to = offset_1 - offsetTop;
                rule.css = {
                    'position': 'absolute',
                    'top': offset_1 + 'px'
                };
                rule.itemHeight = itemHeight;
                break;
            case 'fixed':
                rule.from = offset_1 - offsetTop;
                rule.to = offset_2;
                rule.css = {
                    'position': 'fixed',
                    'top': offsetTop + 'px'
                };
                rule.itemHeight = itemHeight;
                break;
            case 'bottom':
                rule.from = offset_2;
                rule.css = {
                    'position': 'absolute',
                    'top': (offset_2 + offsetTop) + 'px'
                };
                rule.itemHeight = itemHeight;
                break;
            case 'static':
                rule.from = 0;
                rule.css = {
                    'position': '',
                    'top': ''
                };
                rule.itemHeight = 0;
                break;
        }
        return rule;
    };
    scroolly.onResize = function() {
        scroolly.winHeight = $(window).height();
        scroolly.docHeight = scroolly.body.height();
        scroolly.docMiddle = Math.floor(scroolly.docHeight / 2);
        var needScroll = false;
        for (var id in scroolly.scrollLayout) {
            var item = scroolly.scrollLayout[id],
                rule, checkin, source;
            for (var i in item.rules) {
                rule = item.rules[i];
                checkin = scroolly.isRuleInActiveWidthRange(rule);
                needScroll |= checkin;
                if (checkin && rule.from === undefined) {
                    $(item.element).css('position', '');
                    $(item.element).css('top', '');
                    if (rule.bottomContainer) {
                        rule.bottomContainer.css('margin-top', '');
                    }
                    source = scroolly._default(rule, 'source');
                    if ('sticky' === source) {
                        item.rules[i] = scroolly.processStickyItemRange(item.element, rule);
                    }
                }
            }
        }
        if (needScroll) {
            scroolly.scrollLayout = scroolly.scrollLayout;
            setTimeout(function() {
                scroolly.onScroll(true);
            }, 0);
        }
        return true;
    };
    scroolly.getProgress = function(offset, length) {
        var relative = offset / length;
        return {
            offset: offset,
            length: length,
            relative: relative,
            left: length - offset,
            leftRelative: 1 - relative
        };
    };
    scroolly.getTransitionFloatValue = function(start, stop, progress) {
        if (progress <= 0) {
            return start;
        }
        if (progress >= 1) {
            return stop;
        }
        return start + (stop - start) * progress;
    };
    scroolly.getTransitionIntValue = function(start, stop, progress) {
        return Math.round(scroolly.getTransitionFloatValue(start, stop, progress));
    };
    scroolly.hashColor2rgb = function(color) {
        var m = color.match(/^#([0-9a-f]{3})$/i);
        if (m) {
            return [parseInt(m[1].charAt(0), 16) * 0x11, parseInt(m[1].charAt(1), 16) * 0x11, parseInt(m[1].charAt(2), 16) * 0x11];
        } else {
            m = color.match(/^#([0-9a-f]{6})$/i);
            if (m) {
                return [parseInt(m[1].substr(0, 2), 16), parseInt(m[1].substr(2, 2), 16), parseInt(m[1].substr(4, 2), 16)];
            }
        }
        return [0, 0, 0];
    };
    scroolly.rgb2HashColor = function(r, g, b) {
        var res = '#',
            c, hex;
        for (var i in arguments) {
            c = arguments[i];
            hex = c.toString(16);
            if (c < 16) {
                hex = '0' + hex;
            }
            res += hex;
        }
        return res;
    };
    scroolly.getTransitionColorValue = function(start, stop, progress) {
        if (progress <= 0) {
            return start;
        }
        if (progress >= 1) {
            return stop;
        }
        var startRGB = scroolly.hashColor2rgb(start),
            stopRGB = scroolly.hashColor2rgb(stop),
            r = scroolly.getTransitionIntValue(startRGB[0], stopRGB[0], progress),
            g = scroolly.getTransitionIntValue(startRGB[1], stopRGB[1], progress),
            b = scroolly.getTransitionIntValue(startRGB[2], stopRGB[2], progress);
        return scroolly.rgb2HashColor(r, g, b);
    };
    scroolly.getTransitionValue = function(start, stop, progress) {
        if (progress <= 0) {
            return start;
        }
        if (progress >= 1) {
            return stop;
        }
        var called = 0;
        if (scroolly._isNumber(start) && scroolly._isNumber(stop)) {
            return scroolly.getTransitionFloatValue(start, start, progress);
        }
        var re = /(\d*\.\d+)|(\d+)|(#[0-9a-f]{6})|(#[0-9a-f]{3})/gi,
            stops = ('' + stop).match(re);
        return ('' + start).replace(re, function(value, float, int, color6, color3) {
            var currentStop = stops[called];
            called++;
            if (int && int.length) {
                return /\d*\.\d+/.test(currentStop) ? scroolly.getTransitionFloatValue(parseFloat(value), parseFloat(currentStop), progress) : scroolly.getTransitionIntValue(parseInt(value), parseInt(currentStop), progress);
            }
            if (float && float.length) {
                return scroolly.getTransitionFloatValue(parseFloat(value), parseFloat(currentStop), progress);
            }
            if (color6 && color6.length || color3 && color3.length) {
                return scroolly.getTransitionColorValue(value, currentStop, progress);
            }
            return value;
        });
    };
    scroolly.onScroll = function(force) {
        var scrollPos = scroolly.body.scrollTop();
        if (!force && scrollPos === scroolly.scrollTop) {
            return false;
        }
        var prevPos = scroolly.scrollTop,
            prevDirection = scroolly.direction;
        scroolly.scrollTop = scrollPos;
        scroolly.scrollBottom = scrollPos + scroolly.winHeight;
        scroolly.scrollCenter = scrollPos + Math.floor(scroolly.winHeight / 2);
        scroolly.direction = scrollPos - prevPos;
        var directionChanged = !(scroolly.direction === prevDirection || scroolly.direction < 0 && prevDirection < 0 || scroolly.direction > 0 && prevDirection > 0),
            item, totalRules, checkedIn, checkedOut, active, id, i, l, j, rule, fromX, toX, container, $bottomContainer, mode, itemHeight;
        for (id in scroolly.scrollLayout) {
            item = scroolly.scrollLayout[id];
            totalRules = item.rules.length;
            checkedIn = [];
            checkedOut = [];
            active = [];
            for (i = 0; i < totalRules; i++) {
                rule = item.rules[i];
                fromX = scroolly._default(rule, 'minWidth', 0);
                toX = scroolly._default(rule, 'maxWidth', 'infinity');
                container = item.container === 'self' ? item.element : item.container;
                rule.checkin = scroolly.isRuleActive(rule, item.element, container);
                rule['class'] = rule['class'] || 'scroll-pos-' + (rule.alias) + ' window-width-' + fromX + '-to-' + toX;
                if (rule.checkin) {
                    active.push(i);
                    if (!rule.isActive) {
                        rule.isActive = true;
                        checkedIn.push(i);
                    }
                } else if (rule.isActive) {
                    rule.isActive = false;
                    checkedOut.push(i);
                }
                item.rules[i] = rule;
            }
            for (j = 0; j < checkedOut.length; j++) {
                i = checkedOut[j];
                rule = item.rules[i];
                item.element.removeClass(rule['class']);
                if (rule.cssOnScroll) {
                    l = rule.length || 0;
                    rule.cssOnScroll(item.element, scrollPos > prevPos ? l : 0, l, rule);
                }
                if (rule.onScroll) {
                    l = rule.length || 0;
                    rule.onScroll(item.element, scrollPos > prevPos ? l : 0, l, rule);
                }
                if (rule.onCheckOut) {
                    rule.onCheckOut(item.element, rule);
                }
                if (rule.onTopOut && scrollPos < prevPos) {
                    rule.onTopOut(item.element, rule);
                } else if (rule.onBottomOut && scrollPos > prevPos) {
                    rule.onBottomOut(item.element, rule);
                }
            }
            for (j = 0; j < checkedIn.length; j++) {
                i = checkedIn[j];
                rule = item.rules[i];
                if (rule.css) {
                    item.element.css(scroolly.extendCssWithPrefix(rule.css));
                }
                if (rule.addClass) {
                    item.element.addClass(rule.addClass);
                }
                if (rule.removeClass) {
                    item.element.removeClass(rule.removeClass);
                }
                item.element.addClass(rule['class']);
                $bottomContainer = scroolly._default(rule, 'bottomContainer');
                mode = scroolly._default(rule, 'mode');
                itemHeight = scroolly._default(rule, 'itemHeight');
                if ($bottomContainer && mode && itemHeight) {
                    $bottomContainer.css(mode + '-top', itemHeight + 'px');
                }
                if (rule.onCheckIn) {
                    rule.onCheckIn(item.element, rule);
                }
                if (rule.onTopIn && scrollPos > prevPos) {
                    rule.onTopIn(item.element, rule);
                } else if (rule.onBottomIn && scrollPos < prevPos) {
                    rule.onBottomIn(item.element, rule);
                }
                rule.length = rule.checkin.length;
            }
            for (j = 0; j < active.length; j++) {
                i = active[j];
                rule = item.rules[i];
                if (rule.cssOnScroll) {
                    rule.cssOnScroll(item.element, rule.checkin.offset, rule.checkin.length, rule);
                }
                if (rule.onScroll) {
                    rule.onScroll(item.element, rule.checkin.offset, rule.checkin.length, rule);
                }
                if (directionChanged && rule.onDirectionChanged) {
                    rule.onDirectionChanged(item.element, scroolly.direction, rule);
                }
            }
            scroolly.scrollLayout[id] = item;
        }
    };
    scroolly.detectCSSPrefix = function() {
        var rxPrefixes = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
        if (!window.getComputedStyle) {
            return;
        }
        var style = window.getComputedStyle(document.body, null);
        for (var k in style) {
            scroolly.theCSSPrefix = (k.match(rxPrefixes) || (+k === k && style[k].match(rxPrefixes)));
            if (scroolly.theCSSPrefix) {
                break;
            }
        }
        if (!scroolly.theCSSPrefix) {
            scroolly.theCSSPrefix = scroolly.theDashedCSSPrefix = '';
            return;
        }
        scroolly.theCSSPrefix = scroolly.theCSSPrefix[0];
        if (scroolly.theCSSPrefix.slice(0, 1) === '-') {
            scroolly.theDashedCSSPrefix = scroolly.theCSSPrefix;
            scroolly.theCSSPrefix = ({
                '-webkit-': 'webkit',
                '-moz-': 'Moz',
                '-ms-': 'ms',
                '-o-': 'O'
            })[scroolly.theCSSPrefix];
        } else {
            scroolly.theDashedCSSPrefix = '-' + scroolly.theCSSPrefix.toLowerCase() + '-';
        }
    };
    scroolly.cssPrefix = function(key) {
        return scroolly.theDashedCSSPrefix + key;
    };
    scroolly.extendCssWithPrefix = function(cssObj) {
        var cssExt = {},
            prop, re, m, newProp, val;
        for (prop in cssObj) {
            re = /^-(moz-|webkit-|o-|ms-)?/i;
            m = prop.match(re);
            newProp = prop.slice(1);
            if (m && !m[1]) {
                val = cssObj[prop];
                cssExt[newProp] = val;
                cssExt[scroolly.cssPrefix(newProp)] = val;
                delete cssObj[prop];
            }
        }
        $.extend(cssObj, cssExt);
        return cssObj;
    };
    scroolly.now = Date.now || function() {
        return +new Date();
    };
    scroolly.getRAF = function() {
        var requestAnimFrame = window.requestAnimationFrame || window[scroolly.theCSSPrefix.toLowerCase() + 'RequestAnimationFrame'],
            lastTime = scroolly.now();
        if (false && scroolly.isMobile || !requestAnimFrame) {
            requestAnimFrame = function(callback) {
                var deltaTime = scroolly.now() - lastTime,
                    delay = Math.max(0, 1000 / 60 - deltaTime);
                return window.setTimeout(function() {
                    lastTime = scroolly.now();
                    callback();
                }, delay);
            };
        }
        return requestAnimFrame;
    };
    scroolly.getCAF = function() {
        var cancelAnimFrame = window.cancelAnimationFrame || window[scroolly.theCSSPrefix.toLowerCase() + 'CancelAnimationFrame'];
        if (scroolly.isMobile || !cancelAnimFrame) {
            cancelAnimFrame = function(timeout) {
                return window.clearTimeout(timeout);
            };
        }
        return cancelAnimFrame;
    };
    scroolly.animLoop = function() {
        scroolly.onScroll();
        scroolly.animFrame = window.requestAnimFrame(scroolly.animLoop);
    };
    scroolly.init = function(options) {
        if (scroolly.isInitialized) {
            return false;
        }
        $.extend(scroolly.options, options);
        scroolly.isMobile = scroolly._default(scroolly.options, 'isMobile', (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera));
        scroolly.detectCSSPrefix();
        scroolly.body = $(scroolly.options.body);
        window.requestAnimFrame = scroolly.getRAF();
        window.cancelAnimFrame = scroolly.getCAF();
        scroolly.timesCalled = 0;
        $(document).ready(function() {
            $(window).resize(scroolly.onResize).resize();
            scroolly.animLoop();
        });
        scroolly.isInitialized = true;
    };
    scroolly.destroy = function() {
        window.cancelAnimFrame(scroolly.animFrame);
    };
    scroolly.factorySticky = function($element, params, id) {
        id = id || $element[0].tagName + '_' + scroolly.getScrollLayoutLength();
        return scroolly.stickItemXY(id, $element, (params instanceof Array) ? params : [params]) ? id : false;
    };
    if (patchJQuery) {
        $.scroolly = scroolly;
        $.fn.scroolly = function(rules, $container, id) {
            scroolly.factory(this, rules, $container, id);
            return this;
        };
        $.fn.scroollySticky = function(params, id) {
            scroolly.init();
            if (!this.length) {
                return false;
            }
            return scroolly.factorySticky(this, params, id);
        };
    }
    return scroolly;
}));
var Froogaloop = function() {
    function e(a) {
        return new e.fn.init(a)
    }

    function g(a, c, b) {
        if (!b.contentWindow.postMessage) return !1;
        a = JSON.stringify({
            method: a,
            value: c
        });
        b.contentWindow.postMessage(a, h)
    }

    function l(a) {
        var c, b;
        try {
            c = JSON.parse(a.data), b = c.event || c.method
        } catch (e) {}
        "ready" != b || k || (k = !0);
        if (!/^https?:\/\/player.vimeo.com/.test(a.origin)) return !1;
        "*" === h && (h = a.origin);
        a = c.value;
        var m = c.data,
            f = "" === f ? null : c.player_id;
        c = f ? d[f][b] : d[b];
        b = [];
        if (!c) return !1;
        void 0 !== a && b.push(a);
        m && b.push(m);
        f && b.push(f);
        return 0 < b.length ? c.apply(null, b) : c.call()
    }

    function n(a, c, b) {
        b ? (d[b] || (d[b] = {}), d[b][a] = c) : d[a] = c
    }
    var d = {},
        k = !1,
        h = "*";
    e.fn = e.prototype = {
        element: null,
        init: function(a) {
            "string" === typeof a && (a = document.getElementById(a));
            this.element = a;
            return this
        },
        api: function(a, c) {
            if (!this.element || !a) return !1;
            var b = this.element,
                d = "" !== b.id ? b.id : null,
                e = c && c.constructor && c.call && c.apply ? null : c,
                f = c && c.constructor && c.call && c.apply ? c : null;
            f && n(a, f, d);
            g(a, e, b);
            return this
        },
        addEvent: function(a, c) {
            if (!this.element) return !1;
            var b = this.element,
                d = "" !== b.id ? b.id : null;
            n(a, c, d);
            "ready" != a ? g("addEventListener", a, b) : "ready" == a && k && c.call(null, d);
            return this
        },
        removeEvent: function(a) {
            if (!this.element) return !1;
            var c = this.element,
                b = "" !== c.id ? c.id : null;
            a: {
                if (b && d[b]) {
                    if (!d[b][a]) {
                        b = !1;
                        break a
                    }
                    d[b][a] = null
                } else {
                    if (!d[a]) {
                        b = !1;
                        break a
                    }
                    d[a] = null
                }
                b = !0
            }
            "ready" != a && b && g("removeEventListener", a, c)
        }
    };
    e.fn.init.prototype = e.fn;
    window.addEventListener ? window.addEventListener("message", l, !1) : window.attachEvent("onmessage", l);
    return window.Froogaloop =
        window.$f = e
}();
jQuery(document).ready(function($) {
    "use strict";
    var body = $('body');
    var btContactTransition = $('.scroll-back-to-locations-wrapper');
    var backToTop = $('.scroll-back-to-top-wrapper');
    var mainMenu = $('.e-main-menu');
    var search = $('#search-form');
    var $window = $(window);
    var scrollingTag;
    var menuConatiner = $('#container__b-lang-sel');
    var subdomainLinks = $('#desktop-navbar .navbar-nav .nav-subdomain');
    $(window).resize(function(e) {
        if (menuConatiner.width() < 1140) {
            subdomainLinks.each(function() {
                var text = $(this).children('a').text();
                $(this).children('a').text(text.replace('Intetics.', ''));
            });
        } else if (!search.find('.e-search').hasClass('active')) {
            subdomainLinks.each(function() {
                var text = $(this).children('a').text();
                if (text.indexOf('Intetics.') == -1) {
                    $(this).children('a').text('Intetics.' + text);
                }
            });
        }
    });
    (function detectBrowser() {
        var ua = navigator.userAgent.toLowerCase();
        var safari = ua.indexOf('safari');
        scrollingTag = $('html');
        if (/Edge/.test(navigator.userAgent) || (safari != -1 && !/chrome/.test(ua))) {
            scrollingTag = $('body');
        } else {
            scrollingTag = $('html');
        }
    })();
    $('.panel .in').parent().addClass('active');

    function Accordion(attr) {
        var newsAcc = $(attr);
        newsAcc.on('shown.bs.collapse', function() {
            $(this).find('.panel.active').removeClass('active');
            $(this).find('.panel .in').parent().addClass('active');
        });
        newsAcc.on('hidden.bs.collapse', function() {
            $(this).find('.panel.active').removeClass('active');
        });
    }
    Accordion('#news-accordion');
    Accordion('.b-news .panel-group');
    var clElement = $('.close');
    clElement.on('click', function() {
        body.find($(this).attr('data-blockname')).toggleClass('c-hide');
    });
    search.on('click', '.search-icon', function() {
        if ($(this).parents('.e-search').hasClass('active')) {
            var searchQuery = searchFrom.find('.form-control').val();
            if (searchQuery != '') {
                searchFrom.submit();
                return;
            }
            $(this).parents('.e-search').removeClass('active');
            setTimeout(function() {
                $('#search-form').siblings('.navbar-nav').removeClass('search-active');
            }, 450);
            if (menuConatiner.width() >= 1140) {
                setTimeout(function() {
                    subdomainLinks.each(function() {
                        var text = $(this).children('a').text();
                        $(this).children('a').text('Intetics.' + text);
                    });
                }, 700);
            }
        } else {
            search.siblings('.navbar-nav').addClass('search-active');
            subdomainLinks.each(function() {
                var text = $(this).children('a').text();
                $(this).children('a').text(text.replace('Intetics.', ''));
            });
            setTimeout(function() {
                $('#search-form').children('.e-search').addClass('active');
            }, 300);
        }
    });
    var searchFrom = $('.form-search');

    function searchFilter(qry, errorBlock) {
        errorBlock.removeClass();
        if (qry == '') {
            errorBlock.addClass('empty');
            return false;
        } else if (qry.match(/^[~!@#$%^&*()_|+\-\s=?;:'",.<>\{\}\[\]\\\/]+$/)) {
            errorBlock.addClass('not-valid');
            return false;
        } else {
            return true;
        }
    }
    searchFrom.submit(function() {
        return searchFilter($(this).find('.form-control').val(), $(this).find('#error-message'));
    });
    searchFrom.focusout(function() {
        $(this).find('#error-message').removeClass();
    });

    function Parallax() {
        var parallaxElement = $('section[data-type="background"],div[data-type="background"]');
        parallaxElement.scroolly([{
            from: 'el-top = vp-bottom',
            to: 'el-bottom = vp-top',
            cssTo: {},
            onScroll: function(element, offset, length) {
                var progress = offset / length;
                element.css('background-position', 'center ' + $.scroolly.getTransitionFloatValue(0, 40, progress) + '%');
                if (backToTop.hasClass('show')) {
                    btContactTransition.hide();
                } else {
                    btContactTransition.show();
                }
            }
        }])
    }

    function HoverIpad() {
        mainMenu.on('touchend', function(e) {
            var o = e.originalEvent;
            var isTouch = o instanceof TouchEvent && o.changedTouches.length === 1;
            if (isTouch) {
                $(this).siblings().removeClass('active-main-menu');
                $(this).toggleClass('active-main-menu');
            }
            if ($(this).parents('#desktop-navbar').length != 0) {
                body.on('touchstart', function() {
                    mainMenu.removeClass('active-main-menu');
                });
            }
        });
    }

    function detectmob() {
        if (navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)) {
            body.find('[data-type="background"]').css({
                'background-attachment': 'scroll'
            });
            HoverIpad();
        } else if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            body.find('[data-type="background"]').css('background-attachment', 'scroll');
        } else if (window.innerWidth <= 1920) {
            Parallax();
        }
    }
    detectmob();
    $window.resize(function() {
        if (window.innerWidth <= 1920) {
            Parallax();
        }
    });
    var videoBtn = $('#video_popup_btn'),
        videoBtn2 = $('#video_popup_btn2'),
        videoPopUp = $('.video_popup'),
        shadow = $('#modal'),
        videoIframe = $('.video_frame iframe'),
        videoClose = $('.video_popup .close_video, #modal');
    videoBtn.click(function() {
        showVideoPopup('video_popup');
        return false;
    });
    videoBtn2.click(function() {
        showVideoPopup('video_popup2');
        return false;
    });
    videoClose.click(function() {
        videoIframe.each(function() {
            $(this).attr('src', $(this).attr('src'));
        });
        videoPopUp.hide();
        shadow.hide();
        return false;
    });

    function showVideoPopup(blockId) {
        shadow.show();
        $('#' + blockId).show();
        var leftPos = ($(window).width() - $('#' + blockId).outerWidth()) / 2;
        var topPos = ($(window).height() - $('#' + blockId).outerHeight()) / 2;
        $('#' + blockId).css('left', leftPos + 'px');
        $('#' + blockId).css('top', topPos + 'px');
    }
    var popUpIframe = $('iframe').attr('src');
    videoClose.click(function() {
        $(this).next('iframe').attr('src', popUpIframe);
    });
    var anchor = $('[data-anchor="True"]'),
        anchorStatus = false;
    var chooseButton = $('.c-choose-request'),
        formCollapse = $('#form-header'),
        selectTag = formCollapse.find('select');
    chooseButton.on('click', function() {
        if (!anchorStatus) {
            var value = $(this).attr('data-value'),
                selectedText = $('.styledSelect');
            formCollapse.collapse('show');
            selectTag.val(value);
            selectedText.text(value);
        }
    });
    anchor.on('click', function(event) {
        if (!anchorStatus) {
            anchorStatus = true;
            window.localStorage.setItem("detectAnchor", true);
            scrollingTag.smoothWheel.destroy();
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                if (hash) {
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 1100);
                } else {
                    $('html, body').animate({
                        scrollTop: $(this).offset().top
                    }, 1100);
                }
            }
            setTimeout(function() {
                scrollingTag.smoothWheel();
                anchorStatus = false;
            }, 1100);
        }
    });
    var formList = $('#gis-landing'),
        getFormElement = formList.find('input,textarea');
    getFormElement.focus('click', function() {
        $(this).addClass('active');
        $(this).focusout(function() {
            if ($(this).val().length === 0) $(this).removeClass('active');
        });
    });
    formList.submit(function() {
        var defaultValue = $('div.styledSelect');
        getFormElement.removeClass('active');
        if (defaultValue.hasClass('c-empty')) {
            defaultValue.prev('select').val(defaultValue.text());
        }
    });
    $(".wpcf7").on('wpcf7:invalid', function(e) {
        if ($(this).find('gdpr-contact-form')) {
            getFormElement.each(function() {
                if ($(this).val().length != 0) {
                    $(this).addClass('active');
                }
            })
        }
    });

    function SliderOwl() {
        var testimonialsBlock = $('.b-testimonials,.c-slider');
        if (testimonialsBlock) {
            testimonialsBlock.each(function() {
                var testimonials = $(this).find('#testimonials'),
                    arrowLeft = $(this).find('.arrow-left'),
                    arrowRight = $(this).find('.arrow-right'),
                    customSliderControl = $(this).find('.c-owl-custom-control');
                if (testimonials.length <= 0) {
                    testimonials = $(this).find('.testimonials');
                }
                arrowLeft.click(function() {
                    testimonials.trigger('prev.owl');
                });
                arrowRight.click(function() {
                    testimonials.trigger('next.owl');
                });
                if (!(testimonials.hasClass('events'))) {
                    testimonials.owlCarousel({
                        items: 1,
                        loop: true,
                        URLhashListener: true,
                        smartSpeed: 500,
                        autoplayTimeout: 10000,
                        autoplay: true,
                        startPosition: 'URLHash'
                    });
                    if (customSliderControl) {
                        var schemeItemContent = customSliderControl.find('a'),
                            schemeItem = schemeItemContent.parent();
                        testimonials.on('changed.owl.carousel', function(el) {
                            var currentItem = el.item.index;
                            var activeItem = testimonials.find('.owl-item').eq(currentItem);
                            var initialIndex = -2;
                            if (activeItem.hasClass('cloned')) {
                                var dataHash = activeItem.children('.owl-item__content').data('hash');
                                testimonials.find('.owl-item').each(function() {
                                    if (!$(this).hasClass('cloned') && $(this).children('.owl-item__content').data('hash') == dataHash) {
                                        initialIndex = initialIndex + testimonials.find('.owl-item').index($(this));
                                    }
                                });
                                activeSchemeItem(initialIndex, schemeItem);
                            } else {
                                currentItem = currentItem + initialIndex;
                                activeSchemeItem(currentItem, schemeItem);
                            }
                        });
                        schemeItemContent.on('click', function(e) {
                            e.preventDefault();
                            var index = $('.c-owl-custom-control').find('.item').index($(this).parent());
                            testimonials.trigger('to.owl.carousel', [index, 500]);
                        });
                        schemeItemContent.on('click', function() {
                            testimonials.trigger('stop.owl.autoplay');
                        })
                    }
                } else {
                    testimonials.on('initialize.owl.carousel initialized.owl.carousel ' + 'initialize.owl.carousel initialize.owl.carousel ' + 'resize.owl.carousel resized.owl.carousel ' + 'refresh.owl.carousel refreshed.owl.carousel ' + 'update.owl.carousel updated.owl.carousel ' + 'drag.owl.carousel dragged.owl.carousel ' + 'translate.owl.carousel translated.owl.carousel ' + 'to.owl.carousel changed.owl.carousel', function(e) {
                        $('.' + e.type).removeClass('secondary').addClass('success');
                        window.setTimeout(function() {
                            $('.' + e.type).removeClass('success').addClass('secondary');
                        }, 500);
                    });
                    testimonials.owlCarousel({
                        rtl: true,
                        loop: true,
                        smartSpeed: 500,
                        autoplayTimeout: 10000,
                        autoplay: true,
                        responsiveClass: true,
                        responsive: {
                            0: {
                                items: 2,
                                slideBy: 2
                            },
                            1200: {
                                items: 3,
                                slideBy: 3
                            }
                        }
                    });
                }
            });
        }
    }

    function isNumber(n) {
        return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
    }

    function activeSchemeItem(currentItem, schemeItem) {
        schemeItem.removeClass('active');
        if (isNumber(currentItem)) {
            schemeItem.eq(currentItem).addClass('active');
        } else {
            clearURL();
            currentItem.addClass('active');
        }
    }
    var mbDropDown = $("#nav .main-item-link");
    mbDropDown.click(function() {
        $("#nav ul ul").slideUp();
        $('#nav .menu-item-has-children .show-subpages').removeClass('active');
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
        }
        if ($(this).next().hasClass('sub-menu')) {
            return false;
        } else {
            return true;
        }
    });
    var mbSubPagesBtn = $('#nav .menu-item-has-children .show-subpages');
    mbSubPagesBtn.click(function() {
        if ($(this).hasClass('active')) {
            $(this).siblings('.sub-sub-menu').slideUp();
            $(this).removeClass('active');
        } else {
            $(this).siblings('.sub-sub-menu').slideDown();
            $(this).addClass('active');
        }
    });
    scrollingTag.smoothWheel();
    var modal = $('.modal.fade');
    modal.on('show.bs.modal', function(e) {
        scrollingTag.unbind("mousewheel");
        scrollingTag.unbind("DOMMouseScroll");
        window.localStorage.setItem("detectAnchor", true);
        scrollingTag.smoothWheel.destroy();
    });
    modal.on('hide.bs.modal', function(e) {
        scrollingTag.smoothWheel();
    });

    function PlayAnimation() {
        var animationCheck = $('.growth-graph,.b-schema-line,.c-process-schema,.c-start-animation,.b-pie-charts .row,.b-process .row,.b-it-consulting-model, .animated-schema');
        animationCheck.scroolly([{
            from: 'el-top = vp-bottom',
            addClass: 'animation-start',
            onScroll: function(element, offset, length) {
                var progress = offset / length;
                element.css('background-position', 'center ' + $.scroolly.getTransitionFloatValue(0, 40, progress) + '%');
            }
        }]);
    }
    PlayAnimation();
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        $(window).resize();
    });
    var SrvicesAcc = $('#services-accordion');
    SrvicesAcc.find('.btn-close').click(function(e) {
        e.preventDefault();
        $(this).parent().parent().toggleClass('active');
        $(this).parent().toggleClass("in");
    });
    SrvicesAcc.on('shown.bs.collapse', function(e) {
        SrvicesAcc.find('.acc.active').removeClass('active');
        SrvicesAcc.find('.acc .in').addClass("slideUp").parent().addClass('active');
        $('html, body').animate({
            scrollTop: $(e.target).offset().top - 260
        }, 500);
    });
    SrvicesAcc.on('hidden.bs.collapse', function() {
        SrvicesAcc.find('.acc.active').removeClass('active');
    });
    $('html').click(function(e) {
        var className = e.target.className;
        if (!(className.indexOf('plus') != -1 || className.indexOf('mobi') != -1)) {
            SrvicesAcc.find('.active').removeClass('active');
            SrvicesAcc.find('.popup-content.in').removeClass('in');
        }
        setTimeout(function() {
            $(window).resize();
        }, 1000);
    });
    SrvicesAcc.find('.popup-content').click(function(e) {
        e.stopPropagation();
    });
    $(document).ajaxSuccess(function() {
        SliderOwl();
        detectmob();
        PlayAnimation();
    });
    SliderOwl();
    btContactTransition.on('click', function() {
        $(this).slideToggle("slow");
    });

    function windowLoaded() {
        window.onload = function() {
            $('html').addClass('loaded');
            $('#preloader').addClass('loaded');
            clearURL(true);

        };
    }
    windowLoaded();
    var offset = 300,
        scroll_top_duration = 700,
        back_to_top = $('.scroll-back-to-top-wrapper');
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? back_to_top.addClass('show'): back_to_top.removeClass('show');
    });
    back_to_top.on('click', function(event) {
        window.localStorage.setItem("detectAnchor", true);
        scrollingTag.smoothWheel.destroy();
        event.preventDefault();
        $.when($('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration)).then(function() {
            scrollingTag.smoothWheel();
        });
    });
    $('.video-overlay').css('display', 'none');
    $('.share-btn').on('click', function() {
        $(this).siblings('.share-popup-content').toggleClass('hidden');
    });

    function openShareNewsPopup(linkObj, e, width, height, resize) {
        e.preventDefault();
        width = width || '500';
        height = height || '400';
        var resizable = (resize ? 'yes' : 'no');
        var dualScreenLeft = ((typeof window.screenLeft) !== 'undefined') ? window.screenLeft : screen.left,
            dualScreenTop = ((typeof window.screenTop) !== 'undefined') ? window.screenTop : screen.top;
        var wndWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var wndHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var left = ((wndWidth / 2) - (width / 2)) + dualScreenLeft;
        var top = ((wndHeight / 2) - (height / 2)) + dualScreenTop;
        var title = ((typeof linkObj.attr('title') !== 'undefined') ? linkObj.attr('title') : 'Share'),
            params = 'width=' + width + ',height=' + height + ',resizable=' + resizable + ',top=' + top + ',left=' + left,
            shareWindow = window.open(linkObj.attr('href'), title, params).focus();
    }
    $('.single-share-btn a').on('click', function(e) {
        openShareNewsPopup($(this), e);
    });
    $('#language-switcher').on('click', function() {
        $(this).find('.other-lang').toggleClass('active');
    });
    if ($('.countdown-timer').length > 0) {
        var endTime = $('.countdown-timer').data('end-time');
        startCountdownTimer(endTime, $('.countdown-timer'));
    }

    function startCountdownTimer(endTime, timerBlock) {
        var timer = setInterval(function() {
            var currentTime = Math.floor((new Date().getTime()) / 1000),
                distance = endTime - currentTime,
                days = Math.floor(distance / (60 * 60 * 24)),
                hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60)),
                minutes = Math.floor((distance % (60 * 60)) / 60),
                seconds = Math.floor(distance % 60);
            if (distance <= 0) {
                clearInterval(timer);
                timerBlock.parents('.gdpr-countdown-timer').addClass('timer-expired');
            } else {
                timerBlock.find('.days-left .count').text(days.toString());
                timerBlock.find('.hours-left .count').text(hours.toString());
                timerBlock.find('.minutes-left .count').text(minutes.toString());
                timerBlock.find('.seconds-left .count').text(seconds.toString());
            }
        }, 1000);
    }
    if ($('.download-fixed-link').length !== 0) {
        var downloadFixedLink = $('.download-fixed-link'),
            linkedBlock = $(downloadFixedLink.attr('href')),
            formCollapseBlock = linkedBlock.find('.collapse'),
            windowHeight = $(window).height();
        downloadFixedLink.on('click', function(e) {
            e.preventDefault();
            formCollapseBlock.collapse('show');
            $('html, body').animate({
                scrollTop: linkedBlock.offset().top
            }, 1500);
        });
        $(window).scroll(function() {
            if (scrollingTag.scrollTop() + windowHeight >= linkedBlock.offset().top) {
                downloadFixedLink.hide();
            } else {
                downloadFixedLink.show();
            }
        });
    }
    var startupLink = $('.startup-form-link, .call-to-action .form-link'),
        formBlock = $(startupLink.attr('href'));
    startupLink.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: formBlock.offset().top - 60
        }, 1500);
    });
});
(function(window, document, undefined) {
    var trim = function(str) {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
    };
    var hasClass = function(el, cn) {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    };
    var addClass = function(el, cn) {
        if (!hasClass(el, cn)) {
            el.className = (el.className === '') ? cn : el.className + ' ' + cn;
        }
    };
    var removeClass = function(el, cn) {
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    };
    var hasParent = function(el, id) {
        if (el) {
            do {
                if (el.id === id) {
                    return true;
                }
                if (el.nodeType === 9) {
                    break;
                }
            }
            while ((el = el.parentNode));
        }
        return false;
    };
    var doc = document.documentElement;
    var transform_prop = window.Modernizr.prefixed('transform'),
        transition_prop = window.Modernizr.prefixed('transition'),
        transition_end = (function() {
            var props = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd otransitionend',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            };
            return props.hasOwnProperty(transition_prop) ? props[transition_prop] : false;
        })();
    window.App = (function() {
        var _init = false,
            app = {};
        var inner = document.getElementById('inner-wrap'),
            nav_open = false,
            nav_class = 'js-nav';
        app.init = function() {
            inner = document.getElementById('inner-wrap');
            if (_init) {
                return;
            }
            _init = true;
            var closeNavEnd = function(e) {
                if (e && e.target === inner) {
                    document.removeEventListener(transition_end, closeNavEnd, false);
                }
                nav_open = false;
            };
            app.closeNav = function() {
                if (nav_open) {
                    var duration = (transition_end && transition_prop) ? parseFloat(window.getComputedStyle(inner, '')[transition_prop + 'Duration']) : 0;
                    if (duration > 0) {
                        document.addEventListener(transition_end, closeNavEnd, false);
                    } else {
                        closeNavEnd(null);
                    }
                }
                removeClass(doc, nav_class);
            };
            app.openNav = function() {
                if (nav_open) {
                    return;
                }
                addClass(doc, nav_class);
                nav_open = true;
            };
            app.toggleNav = function(e) {
                if (nav_open && hasClass(doc, nav_class)) {
                    app.closeNav();
                } else {
                    app.openNav();
                }
                if (e) {
                    e.preventDefault();
                }
            };
            document.getElementById('nav-open-btn').addEventListener('click', app.toggleNav, false);
            document.addEventListener('click', function(e) {
                if (nav_open && !hasParent(e.target, 'nav')) {
                    e.preventDefault();
                    app.closeNav();
                }
            }, true);
            addClass(doc, 'js-ready');
        };
        return app;
    })();
    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', window.App.init, false);
    }
})(window, window.document);

function deleteUtm() {
    var the_url = window.location.href,
        the_arr;
    if (the_url.search(/\?utm_.*/g) != -1) {
        the_arr = the_url.split('?utm_');
    } else {
        return false;
    }
    the_arr.pop();
    history.replaceState(null, null, the_arr.join());
}

function clearURL(isPayPal) {
    var the_url = window.location.href;
    var the_arr;
    if (the_url.search('#') != -1) {
        the_arr = the_url.split('#');
    } else if (isPayPal && the_url.search(/\?tx=.*/g) != -1) {
        the_arr = the_url.split('?tx=');
        jQuery(document).ready(function($) {
            $('#ms-from-send-successful').modal('show');
        });
    } else {
        return false;
    }
    if (the_arr[the_arr.length - 1] == 'vacancies') {
        return true;
    }
    the_arr.pop();
    history.replaceState(null, '', the_arr.join());
    return clearURL(isPayPal);
};
(function($) {
    var self = this,
        container, running = false,
        currentY = 0,
        targetY = 0,
        oldY = 0,
        maxScrollTop = 0,
        minScrollTop, direction, onRenderCallback = null,
        fricton = 0.93,
        vy = 0,
        stepAmt = 2,
        minMovement = 0.1,
        ts = 0.1;
    var updateScrollTarget = function(amt) {
        targetY += amt;
        vy += (targetY - oldY) * stepAmt;
        oldY = targetY;
    };
    var render = function() {
        if (vy < -(minMovement) || vy > minMovement) {
            $('.iframe-container').css('pointer-events', 'none');
            currentY = (currentY + vy);
            if (currentY > maxScrollTop) {
                currentY = vy = 0;
            } else if (currentY < minScrollTop) {
                vy = 0;
                currentY = minScrollTop;
            }
            container.scrollTop(-currentY);
            vy *= fricton;
            if (onRenderCallback) {
                onRenderCallback();
            }
        } else {
            $('.iframe-container').css('pointer-events', 'auto');
        }
    };
    var animateLoop = function() {
        if (!running || Boolean(window.localStorage.getItem("detectAnchor"))) {
            running = false;
            return;
        }
        requestAnimFrame(animateLoop);
        render();
    };
    var onWheel = function(e) {
        e.preventDefault();
        var evt = e.originalEvent;
        var delta = evt.detail ? evt.detail * -1 : evt.wheelDelta / 40;
        var dir = delta < 0 ? -1 : 1;
        if (dir != direction) {
            vy = 0;
            direction = dir;
        }
        currentY = -container.scrollTop();
        updateScrollTarget(delta);
        minScrollTop = container.get(0).clientHeight - container.get(0).scrollHeight;
    };
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();
    var normalizeWheelDelta = function() {
        var distribution = [],
            done = null,
            scale = 30;
        return function(n) {
            if (n == 0) return n;
            if (done != null) return n * done;
            var abs = Math.abs(n);
            outer: do {
                for (var i = 0; i < distribution.length; ++i) {
                    if (abs <= distribution[i]) {
                        distribution.splice(i, 0, abs);
                        break outer;
                    }
                }
                distribution.push(abs);
            } while (false);
            var factor = scale / distribution[Math.floor(distribution.length / 3)];
            if (distribution.length == 500) done = factor;
            return n * factor;
        };
    }();
    $.fn.smoothWheel = function() {
        $.fn.smoothWheel.destroy = function() {
            if (!('ontouchstart' in window)) {
                running = false;
                vy = 0;
                container.off("mousewheel", onWheel);
                container.off("DOMMouseScroll", onWheel);
            }
        };
        return this.each(function(index, elm) {
            if (!('ontouchstart' in window)) {
                container = $(this);
                container.on("mousewheel", onWheel);
                container.on("DOMMouseScroll", onWheel);
                window.localStorage.setItem("detectAnchor", '');
                targetY = oldY = container.get(0).scrollTop;
                currentY = -targetY;
                minScrollTop = container.get(0).clientHeight - container.get(0).scrollHeight;
                if (!running) {
                    running = true;
                    animateLoop();
                }
            }
        });
    };
})(jQuery);
! function(d, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("libphonenumber", [], t) : "object" == typeof exports ? exports.libphonenumber = t() : d.libphonenumber = t()
}(window, function() {
    return function(d) {
        var t = {};

        function e(r) {
            if (t[r]) return t[r].exports;
            var n = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return d[r].call(n.exports, n, n.exports, e), n.l = !0, n.exports
        }
        return e.m = d, e.c = t, e.d = function(d, t, r) {
            e.o(d, t) || Object.defineProperty(d, t, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, e.r = function(d) {
            Object.defineProperty(d, "__esModule", {
                value: !0
            })
        }, e.n = function(d) {
            var t = d && d.__esModule ? function() {
                return d.default
            } : function() {
                return d
            };
            return e.d(t, "a", t), t
        }, e.o = function(d, t) {
            return Object.prototype.hasOwnProperty.call(d, t)
        }, e.p = "", e(e.s = 38)
    }([function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(d) {
            return typeof d
        } : function(d) {
            return d && "function" == typeof Symbol && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d
        };
        t.validateMetadata = m, t.getExtPrefix = function(d, t) {
            if ((t = new f(t)).hasCountry(d)) return t.country(d).ext();
            return l
        }, t.getCountryCallingCode = function(d, t) {
            if ((t = new f(t)).hasCountry(d)) return t.country(d).countryCallingCode();
            throw new Error("Unknown country: " + d)
        }, t.isSupportedCountry = function(d, t) {
            return void 0 !== t.countries[d]
        };
        var n, $ = e(36),
            a = (n = $) && n.__esModule ? n : {
                default: n
            };
        var i = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function(d) {
                return void 0 === d ? "undefined" : r(d)
            } : function(d) {
                return d && "function" == typeof Symbol && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : void 0 === d ? "undefined" : r(d)
            },
            o = function() {
                function d(d, t) {
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(d, r.key, r)
                    }
                }
                return function(t, e, r) {
                    return e && d(t.prototype, e), r && d(t, r), t
                }
            }();

        function u(d, t) {
            if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var s = "1.2.0",
            l = " ext. ",
            f = function() {
                function d(t) {
                    u(this, d), m(t), this.metadata = t, this.v1 = !t.version, this.v2 = void 0 !== t.version && -1 === (0, a.default)(t.version, s), this.v3 = void 0 !== t.version
                }
                return o(d, [{
                    key: "hasCountry",
                    value: function(d) {
                        return void 0 !== this.metadata.countries[d]
                    }
                }, {
                    key: "country",
                    value: function(d) {
                        if (!d) return this._country = void 0, this.country_metadata = void 0, this;
                        if (!this.hasCountry(d)) throw new Error("Unknown country: " + d);
                        return this._country = d, this.country_metadata = this.metadata.countries[d], this
                    }
                }, {
                    key: "getDefaultCountryMetadataForRegion",
                    value: function() {
                        return this.metadata.countries[this.countryCallingCodes()[this.countryCallingCode()][0]]
                    }
                }, {
                    key: "countryCallingCode",
                    value: function() {
                        return this.country_metadata[0]
                    }
                }, {
                    key: "IDDPrefix",
                    value: function() {
                        if (!this.v1 && !this.v2) return this.country_metadata[1]
                    }
                }, {
                    key: "defaultIDDPrefix",
                    value: function() {
                        if (!this.v1 && !this.v2) return this.country_metadata[12]
                    }
                }, {
                    key: "nationalNumberPattern",
                    value: function() {
                        return this.v1 || this.v2 ? this.country_metadata[1] : this.country_metadata[2]
                    }
                }, {
                    key: "possibleLengths",
                    value: function() {
                        if (!this.v1) return this.country_metadata[this.v2 ? 2 : 3]
                    }
                }, {
                    key: "_getFormats",
                    value: function(d) {
                        return d[this.v1 ? 2 : this.v2 ? 3 : 4]
                    }
                }, {
                    key: "formats",
                    value: function() {
                        var d = this,
                            t = this._getFormats(this.country_metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
                        return t.map(function(t) {
                            return new c(t, d)
                        })
                    }
                }, {
                    key: "nationalPrefix",
                    value: function() {
                        return this.country_metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
                    }
                }, {
                    key: "_getNationalPrefixFormattingRule",
                    value: function(d) {
                        return d[this.v1 ? 4 : this.v2 ? 5 : 6]
                    }
                }, {
                    key: "nationalPrefixFormattingRule",
                    value: function() {
                        return this._getNationalPrefixFormattingRule(this.country_metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())
                    }
                }, {
                    key: "nationalPrefixForParsing",
                    value: function() {
                        return this.country_metadata[this.v1 ? 5 : this.v2 ? 6 : 7] || this.nationalPrefix()
                    }
                }, {
                    key: "nationalPrefixTransformRule",
                    value: function() {
                        return this.country_metadata[this.v1 ? 6 : this.v2 ? 7 : 8]
                    }
                }, {
                    key: "_getNationalPrefixIsOptionalWhenFormatting",
                    value: function() {
                        return !!this.country_metadata[this.v1 ? 7 : this.v2 ? 8 : 9]
                    }
                }, {
                    key: "nationalPrefixIsOptionalWhenFormatting",
                    value: function() {
                        return this._getNationalPrefixIsOptionalWhenFormatting(this.country_metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())
                    }
                }, {
                    key: "leadingDigits",
                    value: function() {
                        return this.country_metadata[this.v1 ? 8 : this.v2 ? 9 : 10]
                    }
                }, {
                    key: "types",
                    value: function() {
                        return this.country_metadata[this.v1 ? 9 : this.v2 ? 10 : 11]
                    }
                }, {
                    key: "hasTypes",
                    value: function() {
                        return (!this.types() || 0 !== this.types().length) && !!this.types()
                    }
                }, {
                    key: "type",
                    value: function(d) {
                        if (this.hasTypes() && y(this.types(), d)) return new h(y(this.types(), d), this)
                    }
                }, {
                    key: "ext",
                    value: function() {
                        return this.v1 || this.v2 ? l : this.country_metadata[13] || l
                    }
                }, {
                    key: "countryCallingCodes",
                    value: function() {
                        return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes
                    }
                }, {
                    key: "chooseCountryByCountryCallingCode",
                    value: function(d) {
                        var t = this.countryCallingCodes()[d][0];
                        this.hasCountry(t) && this.country(t)
                    }
                }, {
                    key: "selectedCountry",
                    value: function() {
                        return this._country
                    }
                }]), d
            }();
        t.default = f;
        var c = function() {
                function d(t, e) {
                    u(this, d), this._format = t, this.metadata = e
                }
                return o(d, [{
                    key: "pattern",
                    value: function() {
                        return this._format[0]
                    }
                }, {
                    key: "format",
                    value: function() {
                        return this._format[1]
                    }
                }, {
                    key: "leadingDigitsPatterns",
                    value: function() {
                        return this._format[2] || []
                    }
                }, {
                    key: "nationalPrefixFormattingRule",
                    value: function() {
                        return this._format[3] || this.metadata.nationalPrefixFormattingRule()
                    }
                }, {
                    key: "nationalPrefixIsOptionalWhenFormatting",
                    value: function() {
                        return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormatting()
                    }
                }, {
                    key: "nationalPrefixIsMandatoryWhenFormatting",
                    value: function() {
                        return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormatting()
                    }
                }, {
                    key: "usesNationalPrefix",
                    value: function() {
                        return this.nationalPrefixFormattingRule() && "$1" !== this.nationalPrefixFormattingRule() && /\d/.test(this.nationalPrefixFormattingRule().replace("$1", ""))
                    }
                }, {
                    key: "internationalFormat",
                    value: function() {
                        return this._format[5] || this.format()
                    }
                }]), d
            }(),
            h = function() {
                function d(t, e) {
                    u(this, d), this.type = t, this.metadata = e
                }
                return o(d, [{
                    key: "pattern",
                    value: function() {
                        return this.metadata.v1 ? this.type : this.type[0]
                    }
                }, {
                    key: "possibleLengths",
                    value: function() {
                        if (!this.metadata.v1) return this.type[1] || this.metadata.possibleLengths()
                    }
                }]), d
            }();

        function y(d, t) {
            switch (t) {
                case "FIXED_LINE":
                    return d[0];
                case "MOBILE":
                    return d[1];
                case "TOLL_FREE":
                    return d[2];
                case "PREMIUM_RATE":
                    return d[3];
                case "PERSONAL_NUMBER":
                    return d[4];
                case "VOICEMAIL":
                    return d[5];
                case "UAN":
                    return d[6];
                case "PAGER":
                    return d[7];
                case "VOIP":
                    return d[8];
                case "SHARED_COST":
                    return d[9]
            }
        }

        function m(d) {
            if (!d) throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
            if (!p(d) || !p(d.countries) || !p(d.country_calling_codes) && !p(d.country_phone_code_to_countries)) throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` and `.country_calling_codes` child object properties. Got " + (p(d) ? "an object of shape: { " + Object.keys(d).join(", ") + " }" : "a " + v(d) + ": " + d) + ".")
        }
        var p = function(d) {
                return "object" === (void 0 === d ? "undefined" : i(d))
            },
            v = function(d) {
                return void 0 === d ? "undefined" : i(d)
            }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.MIN_LENGTH_FOR_NSN = 2, t.MAX_LENGTH_FOR_NSN = 17, t.MAX_LENGTH_COUNTRY_CODE = 3, t.VALID_DIGITS = "0-9ï¼-ï¼™Ù -Ù©Û°-Û¹";
        var r = t.WHITESPACE = "  Â­â€‹â ã€€";
        t.VALID_PUNCTUATION = "-â€-â€•âˆ’ãƒ¼ï¼ï¼/ï¼Ž." + r + "()ï¼ˆï¼‰ï¼»ï¼½\\[\\]~â“âˆ¼ï½ž", t.PLUS_CHARS = "+ï¼‹"
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(d) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                e = arguments[2];
            if (!d.country) return;
            if (!(e = new $.default(e)).hasCountry(d.country)) throw new Error("Unknown country: " + d.country);
            var r = t.v2 ? d.nationalNumber : d.phone;
            if (e.country(d.country), !(0, a.matchesEntirely)(r, e.nationalNumberPattern())) return;
            if (o(r, "FIXED_LINE", e)) return e.type("MOBILE") && "" === e.type("MOBILE").pattern() ? "FIXED_LINE_OR_MOBILE" : e.type("MOBILE") ? o(r, "MOBILE", e) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE" : "FIXED_LINE_OR_MOBILE";
            for (var n = i, u = Array.isArray(n), s = 0, n = u ? n : n[Symbol.iterator]();;) {
                var l;
                if (u) {
                    if (s >= n.length) break;
                    l = n[s++]
                } else {
                    if ((s = n.next()).done) break;
                    l = s.value
                }
                var f = l;
                if (o(r, f, e)) return f
            }
        }, t.is_of_type = o, t.checkNumberLengthForType = function d(t, e, r) {
            var n = r.type(e);
            var $ = n && n.possibleLengths() || r.possibleLengths();
            if ("FIXED_LINE_OR_MOBILE" === e) {
                if (!r.type("FIXED_LINE")) return d(t, "MOBILE", r);
                var i = r.type("MOBILE");
                i && ($ = (0, a.mergeArrays)($, i.possibleLengths()))
            } else if (e && !n) return "INVALID_LENGTH";
            var o = t.length;
            var u = $[0];
            if (u === o) return "IS_POSSIBLE";
            if (u > o) return "TOO_SHORT";
            if ($[$.length - 1] < o) return "TOO_LONG";
            return $.indexOf(o, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH"
        };
        var r, n = e(0),
            $ = (r = n) && r.__esModule ? r : {
                default: r
            },
            a = e(3);
        var i = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];

        function o(d, t, e) {
            return !(!(t = e.type(t)) || !t.pattern()) && (!(t.possibleLengths() && t.possibleLengths().indexOf(d.length) < 0) && (0, a.matchesEntirely)(d, t.pattern()))
        }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.matchesEntirely = function() {
            var d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments[1];
            return new RegExp("^(?:" + t + ")$").test(d)
        }, t.mergeArrays = function(d, t) {
            for (var e = d.slice(), r = t, n = Array.isArray(r), $ = 0, r = n ? r : r[Symbol.iterator]();;) {
                var a;
                if (n) {
                    if ($ >= r.length) break;
                    a = r[$++]
                } else {
                    if (($ = r.next()).done) break;
                    a = $.value
                }
                var i = a;
                d.indexOf(i) < 0 && e.push(i)
            }
            return e.sort(function(d, t) {
                return d - t
            })
        }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.limit = function(d, t) {
            if (d < 0 || t <= 0 || t < d) throw new TypeError;
            return "{" + d + "," + t + "}"
        }, t.trimAfterFirstMatch = function(d, t) {
            var e = t.search(d);
            if (e >= 0) return t.slice(0, e);
            return t
        }, t.startsWith = function(d, t) {
            return 0 === d.indexOf(t)
        }, t.endsWith = function(d, t) {
            return d.indexOf(t, d.length - t.length) === d.length - t.length
        }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = o(e(0)),
            n = o(e(19)),
            $ = o(e(8)),
            a = (o(e(34)), o(e(2))),
            i = o(e(17));

        function o(d) {
            return d && d.__esModule ? d : {
                default: d
            }
        }
        var u = Object.assign || function(d) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = arguments[t];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (d[r] = e[r])
                }
                return d
            },
            s = function() {
                function d(d, t) {
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(d, r.key, r)
                    }
                }
                return function(t, e, r) {
                    return e && d(t.prototype, e), r && d(t, r), t
                }
            }();
        var l = function() {
            function d(t, e, n) {
                if (function(d, t) {
                        if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), !t) throw new TypeError("`countryCallingCode` not passed");
                if (!e) throw new TypeError("`nationalNumber` not passed");
                if (f(t)) {
                    this.country = t;
                    var $ = new r.default(n);
                    $.country(t), t = $.countryCallingCode()
                }
                this.countryCallingCode = t, this.nationalNumber = e, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.metadata = n
            }
            return s(d, [{
                key: "isPossible",
                value: function() {
                    return (0, n.default)(this, {
                        v2: !0
                    }, this.metadata)
                }
            }, {
                key: "isValid",
                value: function() {
                    return (0, $.default)(this, {
                        v2: !0
                    }, this.metadata)
                }
            }, {
                key: "getType",
                value: function() {
                    return (0, a.default)(this, {
                        v2: !0
                    }, this.metadata)
                }
            }, {
                key: "format",
                value: function(d, t) {
                    return (0, i.default)(this, d, t ? u({}, t, {
                        v2: !0
                    }) : {
                        v2: !0
                    }, this.metadata)
                }
            }, {
                key: "formatNational",
                value: function(d) {
                    return this.format("NATIONAL", d)
                }
            }, {
                key: "formatInternational",
                value: function(d) {
                    return this.format("INTERNATIONAL", d)
                }
            }, {
                key: "getURI",
                value: function(d) {
                    return this.format("RFC3966", d)
                }
            }]), d
        }();
        t.default = l;
        var f = function(d) {
            return /^[A-Z]{2}$/.test(d)
        }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(d) {
            return typeof d
        } : function(d) {
            return d && "function" == typeof Symbol && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d
        };
        t.default = function() {
            var d = s(arguments),
                t = d.text,
                e = d.options,
                r = d.metadata;
            return (0, a.default)(t, e, r)
        }, t.normalizeArguments = s;
        var n, $ = e(21),
            a = (n = $) && n.__esModule ? n : {
                default: n
            };
        var i = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function(d) {
                return void 0 === d ? "undefined" : r(d)
            } : function(d) {
                return d && "function" == typeof Symbol && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : void 0 === d ? "undefined" : r(d)
            },
            o = Object.assign || function(d) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = arguments[t];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (d[r] = e[r])
                }
                return d
            },
            u = function() {
                return function(d, t) {
                    if (Array.isArray(d)) return d;
                    if (Symbol.iterator in Object(d)) return function(d, t) {
                        var e = [],
                            r = !0,
                            n = !1,
                            $ = void 0;
                        try {
                            for (var a, i = d[Symbol.iterator](); !(r = (a = i.next()).done) && (e.push(a.value), !t || e.length !== t); r = !0);
                        } catch (d) {
                            n = !0, $ = d
                        } finally {
                            try {
                                !r && i.return && i.return()
                            } finally {
                                if (n) throw $
                            }
                        }
                        return e
                    }(d, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }();

        function s(d) {
            var t = Array.prototype.slice.call(d),
                e = u(t, 4),
                r = e[0],
                n = e[1],
                $ = e[2],
                a = e[3],
                i = void 0,
                s = void 0,
                f = void 0;
            if ("string" != typeof r) throw new TypeError("A text for parsing must be a string.");
            if (i = r, n && "string" != typeof n) {
                if (!l(n)) throw new Error("Invalid second argument: " + n);
                $ ? (s = n, f = $) : f = n
            } else a ? (s = $, f = a) : (s = void 0, f = $), n && (s = o({
                defaultCountry: n
            }, s));
            return {
                text: i,
                options: s,
                metadata: f
            }
        }
        var l = function(d) {
            return "object" === (void 0 === d ? "undefined" : i(d))
        }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = y(e(5)),
            n = e(1),
            $ = e(12),
            a = e(4),
            i = e(16),
            o = y(e(29)),
            u = y(e(28)),
            s = y(e(27)),
            l = e(26),
            f = y(l),
            c = e(0),
            h = y(e(13));

        function y(d) {
            return d && d.__esModule ? d : {
                default: d
            }
        }
        var m = Object.assign || function(d) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = arguments[t];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (d[r] = e[r])
                }
                return d
            },
            p = function() {
                function d(d, t) {
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(d, r.key, r)
                    }
                }
                return function(t, e, r) {
                    return e && d(t.prototype, e), r && d(t, r), t
                }
            }();
        var v = ["\\/+(.*)/", "(\\([^(]*)", "(?:" + i.pZ + "-|-" + i.pZ + ")" + i.pZ + "*(.+)", "[â€’-â€•ï¼]" + i.pZ + "*(.+)", "\\.+" + i.pZ + "*([^.]+)", i.pZ + "+(" + i.PZ + "+)"],
            _ = (0, a.limit)(0, 2),
            g = (0, a.limit)(0, 4),
            b = n.MAX_LENGTH_FOR_NSN + n.MAX_LENGTH_COUNTRY_CODE,
            C = (0, a.limit)(0, b),
            N = "[" + n.VALID_PUNCTUATION + "]" + g,
            P = i.pNd + (0, a.limit)(1, b),
            O = "(?:" + l.LEAD_CLASS + N + ")" + _ + P + "(?:" + N + P + ")" + C + "(?:" + $.EXTN_PATTERNS_FOR_MATCHING + ")?",
            I = new RegExp("[^" + i._pN + i._pL + "#]+$"),
            x = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
            E = function() {
                function d() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = arguments[2];
                    if (function(d, t) {
                            if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, d), this.state = "NOT_READY", this.searchIndex = 0, !(e = m({}, e, {
                            defaultCountry: e.defaultCountry && (0, c.isSupportedCountry)(e.defaultCountry, r) ? e.defaultCountry : void 0,
                            leniency: e.leniency || e.extended ? "POSSIBLE" : "VALID",
                            maxTries: e.maxTries || x
                        })).leniency) throw new TypeError("`Leniency` not supplied");
                    if (e.maxTries < 0) throw new TypeError("`maxTries` not supplied");
                    if (this.text = t, this.options = e, this.metadata = r, this.leniency = o.default[e.leniency], !this.leniency) throw new TypeError("Unknown leniency: " + e.leniency + ".");
                    this.maxTries = e.maxTries, this.PATTERN = new RegExp(O, "ig")
                }
                return p(d, [{
                    key: "find",
                    value: function() {
                        for (var d = void 0; this.maxTries > 0 && null !== (d = this.PATTERN.exec(this.text));) {
                            var t = d[0],
                                e = d.index;
                            if (t = (0, u.default)(t), (0, s.default)(t, e, this.text)) {
                                var n = this.parseAndVerify(t, e, this.text) || this.extractInnerMatch(t, e, this.text);
                                if (n) {
                                    if (this.options.v2) {
                                        var $ = new r.default(n.country, n.phone, this.metadata);
                                        return n.ext && ($.ext = n.ext), {
                                            startsAt: n.startsAt,
                                            endsAt: n.endsAt,
                                            number: $
                                        }
                                    }
                                    return n
                                }
                            }
                            this.maxTries--
                        }
                    }
                }, {
                    key: "extractInnerMatch",
                    value: function(d, t, e) {
                        var r = v,
                            n = Array.isArray(r),
                            $ = 0;
                        for (r = n ? r : r[Symbol.iterator]();;) {
                            var i;
                            if (n) {
                                if ($ >= r.length) break;
                                i = r[$++]
                            } else {
                                if (($ = r.next()).done) break;
                                i = $.value
                            }
                            for (var o = !0, u = void 0, s = new RegExp(i, "g"); null !== (u = s.exec(d)) && this.maxTries > 0;) {
                                if (o) {
                                    var l = (0, a.trimAfterFirstMatch)(I, d.slice(0, u.index)),
                                        f = this.parseAndVerify(l, t, e);
                                    if (f) return f;
                                    this.maxTries--, o = !1
                                }
                                var c = (0, a.trimAfterFirstMatch)(I, u[1]),
                                    h = this.parseAndVerify(c, t + u.index, e);
                                if (h) return h;
                                this.maxTries--
                            }
                        }
                    }
                }, {
                    key: "parseAndVerify",
                    value: function(d, t, e) {
                        if ((0, f.default)(d, t, e, this.options.leniency)) {
                            var r = (0, h.default)(d, {
                                extended: !0,
                                defaultCountry: this.options.defaultCountry
                            }, this.metadata);
                            if (r.possible && this.leniency(r, d, this.metadata)) {
                                var n = {
                                    startsAt: t,
                                    endsAt: t + d.length,
                                    country: r.country,
                                    phone: r.phone
                                };
                                return r.ext && (n.ext = r.ext), n
                            }
                        }
                    }
                }, {
                    key: "hasNext",
                    value: function() {
                        return "NOT_READY" === this.state && (this.lastMatch = this.find(), this.lastMatch ? this.state = "READY" : this.state = "DONE"), "READY" === this.state
                    }
                }, {
                    key: "next",
                    value: function() {
                        if (!this.hasNext()) throw new Error("No next element");
                        var d = this.lastMatch;
                        return this.lastMatch = null, this.state = "NOT_READY", d
                    }
                }]), d
            }();
        t.default = E
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(d) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                e = arguments[2];
            if (e = new r.default(e), !d.country) return !1;
            if (!e.hasCountry(d.country)) throw new Error("Unknown country: " + d.country);
            if (e.country(d.country), e.hasTypes()) return void 0 !== (0, $.default)(d, t, e.metadata);
            var a = t.v2 ? d.nationalNumber : d.phone;
            return (0, n.matchesEntirely)(a, e.nationalNumberPattern())
        };
        var r = a(e(0)),
            n = e(3),
            $ = a(e(2));

        function a(d) {
            return d && d.__esModule ? d : {
                default: d
            }
        }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.parseRFC3966 = function(d) {
            for (var t = void 0, e = void 0, r = (d = d.replace(/^tel:/, "tel=")).split(";"), n = Array.isArray(r), i = 0, r = n ? r : r[Symbol.iterator]();;) {
                var o;
                if (n) {
                    if (i >= r.length) break;
                    o = r[i++]
                } else {
                    if ((i = r.next()).done) break;
                    o = i.value
                }
                var u = o,
                    s = u.split("="),
                    l = a(s, 2),
                    f = l[0],
                    c = l[1];
                switch (f) {
                    case "tel":
                        t = c;
                        break;
                    case "ext":
                        e = c;
                        break;
                    case "phone-context":
                        "+" === c[0] && (t = c + t)
                }
            }
            if (!(0, $.default)(t)) return {};
            var h = {
                number: t
            };
            e && (h.ext = e);
            return h
        }, t.formatRFC3966 = function(d) {
            var t = d.number,
                e = d.ext;
            if (!t) return "";
            if ("+" !== t[0]) throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
            return "tel:" + t + (e ? ";ext=" + e : "")
        };
        var r, n = e(20),
            $ = (r = n) && r.__esModule ? r : {
                default: r
            };
        var a = function() {
            return function(d, t) {
                if (Array.isArray(d)) return d;
                if (Symbol.iterator in Object(d)) return function(d, t) {
                    var e = [],
                        r = !0,
                        n = !1,
                        $ = void 0;
                    try {
                        for (var a, i = d[Symbol.iterator](); !(r = (a = i.next()).done) && (e.push(a.value), !t || e.length !== t); r = !0);
                    } catch (d) {
                        n = !0, $ = d
                    } finally {
                        try {
                            !r && i.return && i.return()
                        } finally {
                            if (n) throw $
                        }
                    }
                    return e
                }(d, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.parseDigit = n, t.default = function(d) {
            for (var t = "", e = d.split(""), r = Array.isArray(e), $ = 0, e = r ? e : e[Symbol.iterator]();;) {
                var a;
                if (r) {
                    if ($ >= e.length) break;
                    a = e[$++]
                } else {
                    if (($ = e.next()).done) break;
                    a = $.value
                }
                var i = a,
                    o = n(i);
                o && (t += o)
            }
            return t
        };
        var r = t.DIGITS = {
            0: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            "ï¼": "0",
            "ï¼‘": "1",
            "ï¼’": "2",
            "ï¼“": "3",
            "ï¼”": "4",
            "ï¼•": "5",
            "ï¼–": "6",
            "ï¼—": "7",
            "ï¼˜": "8",
            "ï¼™": "9",
            "Ù ": "0",
            "Ù¡": "1",
            "Ù¢": "2",
            "Ù£": "3",
            "Ù¤": "4",
            "Ù¥": "5",
            "Ù¦": "6",
            "Ù§": "7",
            "Ù¨": "8",
            "Ù©": "9",
            "Û°": "0",
            "Û±": "1",
            "Û²": "2",
            "Û³": "3",
            "Û´": "4",
            "Ûµ": "5",
            "Û¶": "6",
            "Û·": "7",
            "Û¸": "8",
            "Û¹": "9"
        };

        function n(d) {
            return r[d]
        }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(d) {
            for (var t = "", e = d.split(""), r = Array.isArray(e), $ = 0, e = r ? e : e[Symbol.iterator]();;) {
                var a;
                if (r) {
                    if ($ >= e.length) break;
                    a = e[$++]
                } else {
                    if (($ = e.next()).done) break;
                    a = $.value
                }
                var i = a;
                t += n(i, t) || ""
            }
            return t
        }, t.parsePhoneNumberCharacter = n;
        var r = e(10);

        function n(d, t) {
            if ("+" === d) {
                if (t) return;
                return "+"
            }
            return (0, r.parseDigit)(d)
        }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EXTN_PATTERNS_FOR_MATCHING = t.EXTN_PATTERNS_FOR_PARSING = void 0, t.extractExtension = function(d) {
            var t = d.search(o);
            if (t < 0) return {};
            var e = d.slice(0, t),
                r = d.match(o),
                n = 1;
            for (; n < r.length;) {
                if (null != r[n] && r[n].length > 0) return {
                    number: e,
                    ext: r[n]
                };
                n++
            }
        };
        var r = e(1),
            n = ";ext=",
            $ = "([" + r.VALID_DIGITS + "]{1,7})";

        function a(d) {
            var t = "xï½˜#ï¼ƒ~ï½ž";
            switch (d) {
                case "parsing":
                    t = ",;" + t
            }
            return n + $ + "|[  \\t,]*(?:e?xt(?:ensi(?:oÌ?|Ã³))?n?|ï½…?ï½˜ï½”ï½Ž?|Ð´Ð¾Ð±|[" + t + "]|int|anexo|ï½‰ï½Žï½”)[:\\.ï¼Ž]?[  \\t,-]*" + $ + "#?|[- ]+([" + r.VALID_DIGITS + "]{1,5})#"
        }
        var i = t.EXTN_PATTERNS_FOR_PARSING = a("parsing"),
            o = (t.EXTN_PATTERNS_FOR_MATCHING = a("matching"), new RegExp("(?:" + i + ")$", "i"))
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(d) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                e = arguments[2];
            if (e = new a.default(e), t.defaultCountry && !e.hasCountry(t.defaultCountry)) {
                if (t.v2) throw new $.default("INVALID_COUNTRY");
                throw new Error("Unknown country: " + t.defaultCountry)
            }
            var f = function(d, t) {
                    if (d && 0 === d.indexOf("tel:")) return (0, y.parseRFC3966)(d);
                    var e = b(d, t);
                    if (!e || !(0, i.default)(e)) return {};
                    var r = (0, o.extractExtension)(e);
                    if (r.ext) return r;
                    return {
                        number: e
                    }
                }(d, t.v2),
                h = f.number,
                p = f.ext;
            if (!h) {
                if (t.v2) throw new $.default("NOT_A_NUMBER");
                return {}
            }
            var v = function(d, t, e) {
                    var r = P(d, t, e.metadata),
                        $ = r.countryCallingCode,
                        a = r.number;
                    if (!a) return {
                        countryCallingCode: $
                    };
                    var i = void 0;
                    if ($) e.chooseCountryByCountryCallingCode($);
                    else {
                        if (!t) return {};
                        e.country(t), i = t, $ = (0, s.default)(t, e.metadata)
                    }
                    var o = function(d, t) {
                            var e = (0, u.default)(d),
                                r = void 0,
                                $ = C(e, t),
                                a = $.number,
                                i = $.carrierCode;
                            if (t.possibleLengths()) switch ((0, l.checkNumberLengthForType)(a, void 0, t)) {
                                case "TOO_SHORT":
                                case "INVALID_LENGTH":
                                    break;
                                default:
                                    e = a, r = i
                            } else(0, n.matchesEntirely)(e, t.nationalNumberPattern()) && !(0, n.matchesEntirely)(a, t.nationalNumberPattern()) || (e = a, r = i);
                            return {
                                national_number: e,
                                carrier_code: r
                            }
                        }(a, e),
                        f = o.national_number,
                        c = o.carrier_code,
                        h = N($, f, e);
                    h && (i = h, e.country(i));
                    return {
                        country: i,
                        countryCallingCode: $,
                        national_number: f,
                        carrierCode: c
                    }
                }(h, t.defaultCountry, e),
                _ = v.country,
                g = v.national_number,
                O = v.countryCallingCode,
                I = v.carrierCode;
            if (!e.selectedCountry()) {
                if (t.v2) throw new $.default("INVALID_COUNTRY");
                return {}
            }
            if (g.length < r.MIN_LENGTH_FOR_NSN) {
                if (t.v2) throw new $.default("TOO_SHORT");
                return {}
            }
            if (g.length > r.MAX_LENGTH_FOR_NSN) {
                if (t.v2) throw new $.default("TOO_LONG");
                return {}
            }
            if (t.v2) {
                var x = new m.default(O, g, e.metadata);
                return _ && (x.country = _), I && (x.carrierCode = I), p && (x.ext = p), x
            }
            var E = !(!_ || !(0, n.matchesEntirely)(g, e.nationalNumberPattern()));
            if (!t.extended) return E ? function(d, t, e) {
                var r = {
                    country: d,
                    phone: t
                };
                e && (r.ext = e);
                return r
            }(_, g, p) : {};
            return {
                country: _,
                countryCallingCode: O,
                carrierCode: I,
                valid: E,
                possible: !!E || !0 === t.extended && e.possibleLengths() && (0, c.is_possible_number)(g, void 0 !== O, e),
                phone: g,
                ext: p
            }
        }, t.extract_formatted_phone_number = b, t.strip_national_prefix_and_carrier_code = C, t.find_country_code = N, t.extractCountryCallingCode = P;
        var r = e(1),
            n = e(3),
            $ = p(e(14)),
            a = p(e(0)),
            i = p(e(20)),
            o = e(12),
            u = p(e(11)),
            s = p(e(35)),
            l = e(2),
            f = p(l),
            c = e(19),
            h = e(18),
            y = e(9),
            m = p(e(5));

        function p(d) {
            return d && d.__esModule ? d : {
                default: d
            }
        }
        var v = 250,
            _ = new RegExp("[" + r.PLUS_CHARS + r.VALID_DIGITS + "]"),
            g = new RegExp("[^" + r.VALID_DIGITS + "]+$");

        function b(d, t) {
            if (d)
                if (d.length > v) {
                    if (t) throw new $.default("TOO_LONG")
                } else {
                    var e = d.search(_);
                    if (!(e < 0)) return d.slice(e).replace(g, "")
                }
        }

        function C(d, t) {
            if (!d || !t.nationalPrefixForParsing()) return {
                number: d
            };
            var e = new RegExp("^(?:" + t.nationalPrefixForParsing() + ")"),
                r = e.exec(d);
            if (!r) return {
                number: d
            };
            var n = void 0,
                $ = r.length - 1;
            n = t.nationalPrefixTransformRule() && r[$] ? d.replace(e, t.nationalPrefixTransformRule()) : d.slice(r[0].length);
            var a = void 0;
            return $ > 0 && (a = r[1]), {
                number: n,
                carrierCode: a
            }
        }

        function N(d, t, e) {
            var r = e.countryCallingCodes()[d];
            return 1 === r.length ? r[0] : function(d, t, e) {
                e = new a.default(e);
                for (var r = d, n = Array.isArray(r), $ = 0, r = n ? r : r[Symbol.iterator]();;) {
                    var i;
                    if (n) {
                        if ($ >= r.length) break;
                        i = r[$++]
                    } else {
                        if (($ = r.next()).done) break;
                        i = $.value
                    }
                    var o = i;
                    if (e.country(o), e.leadingDigits()) {
                        if (t && 0 === t.search(e.leadingDigits())) return o
                    } else if ((0, f.default)({
                            phone: t,
                            country: o
                        }, void 0, e.metadata)) return o
                }
            }(r, t, e.metadata)
        }

        function P(d, t, e) {
            if (!(d = (0, u.default)(d))) return {};
            if ("+" !== d[0]) {
                var n = (0, h.stripIDDPrefix)(d, t, e);
                if (!n || n === d) return {
                    number: d
                };
                d = "+" + n
            }
            if ("0" === d[1]) return {};
            e = new a.default(e);
            for (var $ = 2; $ - 1 <= r.MAX_LENGTH_COUNTRY_CODE && $ <= d.length;) {
                var i = d.slice(1, $);
                if (e.countryCallingCodes()[i]) return {
                    countryCallingCode: i,
                    number: d.slice($)
                };
                $++
            }
            return {}
        }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function d(t) {
            ! function(d, t) {
                if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, d), this.name = this.constructor.name, this.message = t, this.stack = new Error(t).stack
        };
        t.default = r, (r.prototype = Object.create(Error.prototype)).constructor = r
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DIGIT_PLACEHOLDER = void 0, t.strip_dangling_braces = C, t.cut_stripping_dangling_braces = N, t.close_dangling_braces = function(d, t) {
            var e = d.slice(0, t),
                r = P("(", e),
                n = P(")", e),
                $ = r - n;
            for (; $ > 0 && t < d.length;) ")" === d[t] && $--, t++;
            return d.slice(0, t)
        }, t.count_occurences = P, t.repeat = O;
        var r = l(e(0)),
            n = l(e(5)),
            $ = e(1),
            a = e(3),
            i = e(13),
            o = e(17),
            u = e(2),
            s = l(e(11));

        function l(d) {
            return d && d.__esModule ? d : {
                default: d
            }
        }
        var f = function() {
            function d(d, t) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(d, r.key, r)
                }
            }
            return function(t, e, r) {
                return e && d(t.prototype, e), r && d(t, r), t
            }
        }();
        var c = O("9", 15),
            h = t.DIGIT_PLACEHOLDER = "x",
            y = new RegExp(h),
            m = function() {
                return /\[([^\[\]])*\]/g
            },
            p = function() {
                return /\d(?=[^,}][^,}])/g
            },
            v = new RegExp("^[" + $.VALID_PUNCTUATION + "]*(\\$\\d[" + $.VALID_PUNCTUATION + "]*)+$"),
            _ = "[" + $.PLUS_CHARS + "]{0,1}[" + $.VALID_PUNCTUATION + $.VALID_DIGITS + "]*",
            g = new RegExp("^" + _ + "$", "i"),
            b = function() {
                function d(t, e) {
                    ! function(d, t) {
                        if (!(d instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), this.options = {}, this.metadata = new r.default(e), t && this.metadata.hasCountry(t) && (this.defaultCountry = t), this.reset()
                }
                return f(d, [{
                    key: "input",
                    value: function(d) {
                        var t = (0, i.extract_formatted_phone_number)(d) || "";
                        return t || d && d.indexOf("+") >= 0 && (t = "+"), g.test(t) ? this.processInput((0, s.default)(t)) : this.currentOutput
                    }
                }, {
                    key: "processInput",
                    value: function(d) {
                        if ("+" === d[0] && (this.parsedInput || (this.parsedInput += "+", this.resetCountriness()), d = d.slice(1)), this.parsedInput += d, this.nationalNumber += d, this.isInternational())
                            if (this.countryCallingCode) this.country || this.determineTheCountry();
                            else {
                                if (!this.nationalNumber) return this.parsedInput;
                                if (!this.extractCountryCallingCode()) return this.parsedInput;
                                this.initialize_phone_number_formats_for_this_country_calling_code(), this.resetFormat(), this.determineTheCountry()
                            }
                        else {
                            var t = this.nationalPrefix;
                            this.nationalNumber = this.nationalPrefix + this.nationalNumber, this.extractNationalPrefix(), this.nationalPrefix !== t && (this.matching_formats = void 0, this.resetFormat())
                        }
                        if (!this.nationalNumber) return this.format_as_non_formatted_number();
                        this.match_formats_by_leading_digits();
                        var e = this.formatNationalNumber(d);
                        return e ? this.formatFullNumber(e) : this.format_as_non_formatted_number()
                    }
                }, {
                    key: "format_as_non_formatted_number",
                    value: function() {
                        return this.isInternational() && this.countryCallingCode ? "+" + this.countryCallingCode + this.nationalNumber : this.parsedInput
                    }
                }, {
                    key: "formatNationalNumber",
                    value: function(d) {
                        var t = void 0;
                        this.chosenFormat && (t = this.formatNextNationalNumberDigits(d));
                        var e = this.attempt_to_format_complete_phone_number();
                        return e || (this.chooseAnotherFormat() ? this.reformatNationalNumber() : t)
                    }
                }, {
                    key: "reset",
                    value: function() {
                        return this.parsedInput = "", this.currentOutput = "", this.nationalPrefix = "", this.nationalNumber = "", this.carrierCode = "", this.resetCountriness(), this.resetFormat(), this
                    }
                }, {
                    key: "resetCountry",
                    value: function() {
                        this.isInternational() ? this.country = void 0 : this.country = this.defaultCountry
                    }
                }, {
                    key: "resetCountriness",
                    value: function() {
                        this.resetCountry(), this.defaultCountry && !this.isInternational() ? (this.metadata.country(this.defaultCountry), this.countryCallingCode = this.metadata.countryCallingCode(), this.initialize_phone_number_formats_for_this_country_calling_code()) : (this.metadata.country(void 0), this.countryCallingCode = void 0, this.available_formats = [], this.matching_formats = void 0)
                    }
                }, {
                    key: "resetFormat",
                    value: function() {
                        this.chosenFormat = void 0, this.template = void 0, this.partially_populated_template = void 0, this.last_match_position = -1
                    }
                }, {
                    key: "reformatNationalNumber",
                    value: function() {
                        return this.formatNextNationalNumberDigits(this.nationalNumber)
                    }
                }, {
                    key: "initialize_phone_number_formats_for_this_country_calling_code",
                    value: function() {
                        this.available_formats = this.metadata.formats().filter(function(d) {
                            return v.test(d.internationalFormat())
                        }), this.matching_formats = void 0
                    }
                }, {
                    key: "match_formats_by_leading_digits",
                    value: function() {
                        var d = this.nationalNumber,
                            t = d.length - 3;
                        t < 0 && (t = 0);
                        var e = this.had_enough_leading_digits && this.matching_formats || this.available_formats;
                        this.had_enough_leading_digits = this.shouldFormat(), this.matching_formats = e.filter(function(e) {
                            var r = e.leadingDigitsPatterns().length;
                            if (0 === r) return !0;
                            var n = Math.min(t, r - 1),
                                $ = e.leadingDigitsPatterns()[n];
                            return new RegExp("^(" + $ + ")").test(d)
                        }), this.chosenFormat && -1 === this.matching_formats.indexOf(this.chosenFormat) && this.resetFormat()
                    }
                }, {
                    key: "shouldFormat",
                    value: function() {
                        return this.nationalNumber.length >= 3
                    }
                }, {
                    key: "attempt_to_format_complete_phone_number",
                    value: function() {
                        var d = this.matching_formats,
                            t = Array.isArray(d),
                            e = 0;
                        for (d = t ? d : d[Symbol.iterator]();;) {
                            var r;
                            if (t) {
                                if (e >= d.length) break;
                                r = d[e++]
                            } else {
                                if ((e = d.next()).done) break;
                                r = e.value
                            }
                            var n = r;
                            if (new RegExp("^(?:" + n.pattern() + ")$").test(this.nationalNumber) && this.isFormatApplicable(n)) {
                                this.resetFormat(), this.chosenFormat = n;
                                var $ = (0, o.format_national_number_using_format)(this.nationalNumber, n, this.isInternational(), "" !== this.nationalPrefix, this.metadata);
                                if (this.nationalPrefix && "1" === this.countryCallingCode && ($ = "1 " + $), this.createFormattingTemplate(n)) this.reformatNationalNumber();
                                else {
                                    var a = this.formatFullNumber($);
                                    this.template = a.replace(/[\d\+]/g, h), this.partially_populated_template = a
                                }
                                return $
                            }
                        }
                    }
                }, {
                    key: "formatFullNumber",
                    value: function(d) {
                        return this.isInternational() ? "+" + this.countryCallingCode + " " + d : d
                    }
                }, {
                    key: "extractCountryCallingCode",
                    value: function() {
                        var d = (0, i.extractCountryCallingCode)(this.parsedInput, this.defaultCountry, this.metadata.metadata),
                            t = d.countryCallingCode,
                            e = d.number;
                        if (t) return this.countryCallingCode = t, this.nationalNumber = e, this.metadata.chooseCountryByCountryCallingCode(t), void 0 !== this.metadata.selectedCountry()
                    }
                }, {
                    key: "extractNationalPrefix",
                    value: function() {
                        if (this.nationalPrefix = "", this.metadata.selectedCountry()) {
                            var d = (0, i.strip_national_prefix_and_carrier_code)(this.nationalNumber, this.metadata),
                                t = d.number,
                                e = d.carrierCode;
                            if (e && (this.carrierCode = e), this.metadata.possibleLengths() && (!this.isPossibleNumber(this.nationalNumber) || this.isPossibleNumber(t)) || !(0, a.matchesEntirely)(this.nationalNumber, this.metadata.nationalNumberPattern()) || (0, a.matchesEntirely)(t, this.metadata.nationalNumberPattern())) return this.nationalPrefix = this.nationalNumber.slice(0, this.nationalNumber.length - t.length), this.nationalNumber = t, this.nationalPrefix
                        }
                    }
                }, {
                    key: "isPossibleNumber",
                    value: function(d) {
                        switch ((0, u.checkNumberLengthForType)(d, void 0, this.metadata)) {
                            case "IS_POSSIBLE":
                                return !0;
                            default:
                                return !1
                        }
                    }
                }, {
                    key: "chooseAnotherFormat",
                    value: function() {
                        var d = this.matching_formats,
                            t = Array.isArray(d),
                            e = 0;
                        for (d = t ? d : d[Symbol.iterator]();;) {
                            var r;
                            if (t) {
                                if (e >= d.length) break;
                                r = d[e++]
                            } else {
                                if ((e = d.next()).done) break;
                                r = e.value
                            }
                            var n = r;
                            if (this.chosenFormat === n) return;
                            if (this.isFormatApplicable(n) && this.createFormattingTemplate(n)) return this.chosenFormat = n, this.last_match_position = -1, !0
                        }
                        this.resetCountry(), this.resetFormat()
                    }
                }, {
                    key: "isFormatApplicable",
                    value: function(d) {
                        return !(!this.isInternational() && !this.nationalPrefix && d.nationalPrefixIsMandatoryWhenFormatting()) && !(this.nationalPrefix && !d.usesNationalPrefix() && !d.nationalPrefixIsOptionalWhenFormatting())
                    }
                }, {
                    key: "createFormattingTemplate",
                    value: function(d) {
                        if (!(d.pattern().indexOf("|") >= 0)) {
                            var t = this.getTemplateForNumberFormatPattern(d);
                            if (t) return this.partially_populated_template = t, this.isInternational() ? this.template = h + O(h, this.countryCallingCode.length) + " " + t : this.template = t.replace(/\d/g, h), this.template
                        }
                    }
                }, {
                    key: "getTemplateForNumberFormatPattern",
                    value: function(d) {
                        var t = d.pattern();
                        t = t.replace(m(), "\\d").replace(p(), "\\d");
                        var e = c.match(t)[0];
                        if (!(this.nationalNumber.length > e.length)) {
                            var r = this.getFormatFormat(d),
                                n = new RegExp("^" + t + "$"),
                                $ = this.nationalNumber.replace(/\d/g, "9");
                            return n.test($) && (e = $), e.replace(new RegExp(t), r).replace(new RegExp("9", "g"), h)
                        }
                    }
                }, {
                    key: "formatNextNationalNumberDigits",
                    value: function(d) {
                        var t = d.split(""),
                            e = Array.isArray(t),
                            r = 0;
                        for (t = e ? t : t[Symbol.iterator]();;) {
                            var n;
                            if (e) {
                                if (r >= t.length) break;
                                n = t[r++]
                            } else {
                                if ((r = t.next()).done) break;
                                n = r.value
                            }
                            var $ = n;
                            if (-1 === this.partially_populated_template.slice(this.last_match_position + 1).search(y)) return this.chosenFormat = void 0, this.template = void 0, void(this.partially_populated_template = void 0);
                            this.last_match_position = this.partially_populated_template.search(y), this.partially_populated_template = this.partially_populated_template.replace(y, $)
                        }
                        return N(this.partially_populated_template, this.last_match_position + 1)
                    }
                }, {
                    key: "isInternational",
                    value: function() {
                        return this.parsedInput && "+" === this.parsedInput[0]
                    }
                }, {
                    key: "getFormatFormat",
                    value: function(d) {
                        if (this.isInternational()) return (0, o.changeInternationalFormatStyle)(d.internationalFormat());
                        if (d.nationalPrefixFormattingRule()) {
                            if (this.nationalPrefix || !d.usesNationalPrefix()) return d.format().replace(o.FIRST_GROUP_PATTERN, d.nationalPrefixFormattingRule())
                        } else if ("1" === this.countryCallingCode && "1" === this.nationalPrefix) return "1 " + d.format();
                        return d.format()
                    }
                }, {
                    key: "determineTheCountry",
                    value: function() {
                        this.country = (0, i.find_country_code)(this.countryCallingCode, this.nationalNumber, this.metadata)
                    }
                }, {
                    key: "getNumber",
                    value: function() {
                        if (this.countryCallingCode && this.nationalNumber) {
                            var d = new n.default(this.country || this.countryCallingCode, this.nationalNumber, this.metadata.metadata);
                            return this.carrierCode && (d.carrierCode = this.carrierCode), d
                        }
                    }
                }, {
                    key: "getNationalNumber",
                    value: function() {
                        return this.nationalNumber
                    }
                }, {
                    key: "getTemplate",
                    value: function() {
                        if (this.template) {
                            for (var d = -1, t = 0; t < this.parsedInput.length;) d = this.template.indexOf(h, d + 1), t++;
                            return N(this.template, d + 1)
                        }
                    }
                }]), d
            }();

        function C(d) {
            for (var t = [], e = 0; e < d.length;) "(" === d[e] ? t.push(e) : ")" === d[e] && t.pop(), e++;
            var r = 0,
                n = "";
            t.push(d.length);
            var $ = t,
                a = Array.isArray($),
                i = 0;
            for ($ = a ? $ : $[Symbol.iterator]();;) {
                var o;
                if (a) {
                    if (i >= $.length) break;
                    o = $[i++]
                } else {
                    if ((i = $.next()).done) break;
                    o = i.value
                }
                var u = o;
                n += d.slice(r, u), r = u + 1
            }
            return n
        }

        function N(d, t) {
            return ")" === d[t] && t++, C(d.slice(0, t))
        }

        function P(d, t) {
            var e = 0,
                r = t.split(""),
                n = Array.isArray(r),
                $ = 0;
            for (r = n ? r : r[Symbol.iterator]();;) {
                var a;
                if (n) {
                    if ($ >= r.length) break;
                    a = r[$++]
                } else {
                    if (($ = r.next()).done) break;
                    a = $.value
                }
                a === d && e++
            }
            return e
        }

        function O(d, t) {
            if (t < 1) return "";
            for (var e = ""; t > 1;) 1 & t && (e += d), t >>= 1, d += d;
            return e + d
        }
        t.default = b
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isLatinLetter = function(d) {
            if (!$.test(d) && !i.test(d)) return !1;
            return o.test(d)
        }, t.isInvalidPunctuationSymbol = function(d) {
            return "%" === d || a.test(d)
        };

    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.FIRST_GROUP_PATTERN = void 0, t.default = function(d, t, e, r) {
            e = e ? s({}, l, e) : l;
            if (r = new i.default(r), d.country) {
                if (!r.hasCountry(d.country)) throw new Error("Unknown country: " + d.country);
                r.country(d.country)
            } else {
                if (!d.countryCallingCode) return d.phone || "";
                r.chooseCountryByCountryCallingCode(d.countryCallingCode)
            }
            var n = r.countryCallingCode(),
                $ = e.v2 ? d.nationalNumber : d.phone,
                a = void 0;
            switch (t) {
                case "NATIONAL":
                    return $ ? p(a = h($, "NATIONAL", r), d.ext, r, e.formatExtension) : "";
                case "INTERNATIONAL":
                    return $ ? (a = h($, "INTERNATIONAL", r), p(a = "+" + n + " " + a, d.ext, r, e.formatExtension)) : "+" + n;
                case "E.164":
                    return "+" + n + $;
                case "RFC3966":
                    return (0, u.formatRFC3966)({
                        number: "+" + n + $,
                        ext: d.ext
                    });
                case "IDD":
                    if (!e.fromCountry) return;
                    var f = (0, o.getIDDPrefix)(e.fromCountry, r.metadata);
                    if (!f) return;
                    if (e.humanReadable) {
                        var c = n && v($, r.countryCallingCode(), e.fromCountry, r);
                        return p(a = c || f + " " + n + " " + h($, "INTERNATIONAL", r), d.ext, r, e.formatExtension)
                    }
                    return "" + f + n + $;
                default:
                    throw new Error('Unknown "format" argument passed to "formatNumber()": "' + t + '"')
            }
        }, t.format_national_number_using_format = c, t.choose_format_for_number = y, t.changeInternationalFormatStyle = m, t.formatIDDSameCountryCallingCodeNumber = v;
        var r, n = e(1),
            $ = e(3),
            a = e(0),
            i = (r = a) && r.__esModule ? r : {
                default: r
            },
            o = e(18),
            u = e(9);
        var s = Object.assign || function(d) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = arguments[t];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (d[r] = e[r])
                }
                return d
            },
            l = {
                formatExtension: function(d, t, e) {
                    return "" + d + e.ext() + t
                }
            };
        var f = t.FIRST_GROUP_PATTERN = /(\$\d)/;

        function c(d, t, e, r, n) {
            var $ = d.replace(new RegExp(t.pattern()), e ? t.internationalFormat() : !t.nationalPrefixFormattingRule() || t.nationalPrefixIsOptionalWhenFormatting() && !r ? t.format() : t.format().replace(f, t.nationalPrefixFormattingRule()));
            return e ? m($) : $
        }

        function h(d, t, e) {
            var r = y(e.formats(), d);
            return r ? c(d, r, "INTERNATIONAL" === t, !0) : d
        }

        function y(d, t) {
            var e = d,
                r = Array.isArray(e),
                n = 0;
            for (e = r ? e : e[Symbol.iterator]();;) {
                var a;
                if (r) {
                    if (n >= e.length) break;
                    a = e[n++]
                } else {
                    if ((n = e.next()).done) break;
                    a = n.value
                }
                var i = a;
                if (i.leadingDigitsPatterns().length > 0) {
                    var o = i.leadingDigitsPatterns()[i.leadingDigitsPatterns().length - 1];
                    if (0 !== t.search(o)) continue
                }
                if ((0, $.matchesEntirely)(t, i.pattern())) return i
            }
        }

        function m(d) {
            return d.replace(new RegExp("[" + n.VALID_PUNCTUATION + "]+", "g"), " ").trim()
        }

        function p(d, t, e, r) {
            return t ? r(d, t, e) : d
        }

        function v(d, t, e, r) {
            var n = new i.default(r.metadata);
            if (n.country(e), t === n.countryCallingCode()) return "1" === t ? t + " " + h(d, "NATIONAL", r) : h(d, "NATIONAL", r)
        }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getIDDPrefix = function(d, t) {
            var e = new $.default(t);
            if (e.country(d), o.test(e.IDDPrefix())) return e.IDDPrefix();
            return e.defaultIDDPrefix()
        }, t.stripIDDPrefix = function(d, t, e) {
            if (!t) return;
            var r = new $.default(e);
            r.country(t);
            var n = new RegExp(r.IDDPrefix());
            if (0 !== d.search(n)) return;
            var a = (d = d.slice(d.match(n)[0].length)).match(i);
            if (a && null != a[1] && a[1].length > 0 && "0" === a[1]) return;
            return d
        };
        var r, n = e(0),
            $ = (r = n) && r.__esModule ? r : {
                default: r
            },
            a = e(1);
        var i = new RegExp("([" + a.VALID_DIGITS + "])"),
            o = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(d, t, e) {
            void 0 === t && (t = {});
            if (e = new $.default(e), t.v2) {
                if (!d.countryCallingCode) throw new Error("Invalid phone number object passed");
                e.chooseCountryByCountryCallingCode(d.countryCallingCode)
            } else {
                if (!d.phone) return !1;
                if (d.country) {
                    if (!e.hasCountry(d.country)) throw new Error("Unknown country: " + d.country);
                    e.country(d.country)
                } else {
                    if (!d.countryCallingCode) throw new Error("Invalid phone number object passed");
                    e.chooseCountryByCountryCallingCode(d.countryCallingCode)
                }
            }
            if (!e.possibleLengths()) throw new Error("Metadata too old");
            return i(d.phone || d.nationalNumber, void 0, e)
        }, t.is_possible_number = i;
        var r, n = e(0),
            $ = (r = n) && r.__esModule ? r : {
                default: r
            },
            a = e(2);

        function i(d, t, e) {
            switch ((0, a.checkNumberLengthForType)(d, void 0, e)) {
                case "IS_POSSIBLE":
                    return !0;
                default:
                    return !1
            }
        }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(d) {
            return d.length >= r.MIN_LENGTH_FOR_NSN && i.test(d)
        };
        var r = e(1),
            n = e(12),
            $ = "[" + r.VALID_DIGITS + "]{" + r.MIN_LENGTH_FOR_NSN + "}",
            a = "[" + r.PLUS_CHARS + "]{0,1}(?:[" + r.VALID_PUNCTUATION + "]*[" + r.VALID_DIGITS + "]){3,}[" + r.VALID_PUNCTUATION + r.VALID_DIGITS + "]*",
            i = new RegExp("^" + $ + "$|^" + a + "(?:" + n.EXTN_PATTERNS_FOR_PARSING + ")?$", "i")
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(d, t, e) {
            return (0, $.default)(d, a({}, t, {
                v2: !0
            }), e)
        };
        var r, n = e(13),
            $ = (r = n) && r.__esModule ? r : {
                default: r
            };
        var a = Object.assign || function(d) {
            for (var t = 1; t < arguments.length; t++) {
                var e = arguments[t];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (d[r] = e[r])
            }
            return d
        }
    }, function(d) {
        d.exports = {
            version: "1.7.8",
            country_calling_codes: {
                1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
                7: ["RU", "KZ"],
                20: ["EG"],
                27: ["ZA"],
                30: ["GR"],
                31: ["NL"],
                32: ["BE"],
                33: ["FR"],
                34: ["ES"],
                36: ["HU"],
                39: ["IT", "VA"],
                40: ["RO"],
                41: ["CH"],
                43: ["AT"],
                44: ["GB", "GG", "IM", "JE"],
                45: ["DK"],
                46: ["SE"],
                47: ["NO", "SJ"],
                48: ["PL"],
                49: ["DE"],
                51: ["PE"],
                52: ["MX"],
                53: ["CU"],
                54: ["AR"],
                55: ["BR"],
                56: ["CL"],
                57: ["CO"],
                58: ["VE"],
                60: ["MY"],
                61: ["AU", "CC", "CX"],
                62: ["ID"],
                63: ["PH"],
                64: ["NZ"],
                65: ["SG"],
                66: ["TH"],
                81: ["JP"],
                82: ["KR"],
                84: ["VN"],
                86: ["CN"],
                90: ["TR"],
                91: ["IN"],
                92: ["PK"],
                93: ["AF"],
                94: ["LK"],
                95: ["MM"],
                98: ["IR"],
                211: ["SS"],
                212: ["MA", "EH"],
                213: ["DZ"],
                216: ["TN"],
                218: ["LY"],
                220: ["GM"],
                221: ["SN"],
                222: ["MR"],
                223: ["ML"],
                224: ["GN"],
                225: ["CI"],
                226: ["BF"],
                227: ["NE"],
                228: ["TG"],
                229: ["BJ"],
                230: ["MU"],
                231: ["LR"],
                232: ["SL"],
                233: ["GH"],
                234: ["NG"],
                235: ["TD"],
                236: ["CF"],
                237: ["CM"],
                238: ["CV"],
                239: ["ST"],
                240: ["GQ"],
                241: ["GA"],
                242: ["CG"],
                243: ["CD"],
                244: ["AO"],
                245: ["GW"],
                246: ["IO"],
                247: ["AC"],
                248: ["SC"],
                249: ["SD"],
                250: ["RW"],
                251: ["ET"],
                252: ["SO"],
                253: ["DJ"],
                254: ["KE"],
                255: ["TZ"],
                256: ["UG"],
                257: ["BI"],
                258: ["MZ"],
                260: ["ZM"],
                261: ["MG"],
                262: ["RE", "YT"],
                263: ["ZW"],
                264: ["NA"],
                265: ["MW"],
                266: ["LS"],
                267: ["BW"],
                268: ["SZ"],
                269: ["KM"],
                290: ["SH", "TA"],
                291: ["ER"],
                297: ["AW"],
                298: ["FO"],
                299: ["GL"],
                350: ["GI"],
                351: ["PT"],
                352: ["LU"],
                353: ["IE"],
                354: ["IS"],
                355: ["AL"],
                356: ["MT"],
                357: ["CY"],
                358: ["FI", "AX"],
                359: ["BG"],
                370: ["LT"],
                371: ["LV"],
                372: ["EE"],
                373: ["MD"],
                374: ["AM"],
                375: ["BY"],
                376: ["AD"],
                377: ["MC"],
                378: ["SM"],
                380: ["UA"],
                381: ["RS"],
                382: ["ME"],
                383: ["XK"],
                385: ["HR"],
                386: ["SI"],
                387: ["BA"],
                389: ["MK"],
                420: ["CZ"],
                421: ["SK"],
                423: ["LI"],
                500: ["FK"],
                501: ["BZ"],
                502: ["GT"],
                503: ["SV"],
                504: ["HN"],
                505: ["NI"],
                506: ["CR"],
                507: ["PA"],
                508: ["PM"],
                509: ["HT"],
                590: ["GP", "BL", "MF"],
                591: ["BO"],
                592: ["GY"],
                593: ["EC"],
                594: ["GF"],
                595: ["PY"],
                596: ["MQ"],
                597: ["SR"],
                598: ["UY"],
                599: ["CW", "BQ"],
                670: ["TL"],
                672: ["NF"],
                673: ["BN"],
                674: ["NR"],
                675: ["PG"],
                676: ["TO"],
                677: ["SB"],
                678: ["VU"],
                679: ["FJ"],
                680: ["PW"],
                681: ["WF"],
                682: ["CK"],
                683: ["NU"],
                685: ["WS"],
                686: ["KI"],
                687: ["NC"],
                688: ["TV"],
                689: ["PF"],
                690: ["TK"],
                691: ["FM"],
                692: ["MH"],
                800: ["001"],
                808: ["001"],
                850: ["KP"],
                852: ["HK"],
                853: ["MO"],
                855: ["KH"],
                856: ["LA"],
                870: ["001"],
                878: ["001"],
                880: ["BD"],
                881: ["001"],
                882: ["001"],
                883: ["001"],
                886: ["TW"],
                888: ["001"],
                960: ["MV"],
                961: ["LB"],
                962: ["JO"],
                963: ["SY"],
                964: ["IQ"],
                965: ["KW"],
                966: ["SA"],
                967: ["YE"],
                968: ["OM"],
                970: ["PS"],
                971: ["AE"],
                972: ["IL"],
                973: ["BH"],
                974: ["QA"],
                975: ["BT"],
                976: ["MN"],
                977: ["NP"],
                979: ["001"],
                992: ["TJ"],
                993: ["TM"],
                994: ["AZ"],
                995: ["GE"],
                996: ["KG"],
                998: ["UZ"]
            },
            countries: {
                AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6], 0, 0, 0, 0, 0, 0, 0, [
                    ["6[2-467]\\d{3}", [5]],
                    ["4\\d{4}", [5]], 0, 0, 0, 0, ["[01589]\\d{5}", [6]]
                ]],
                AD: ["376", "00", "(?:1|6\\d)\\d{7}|[136-9]\\d{5}", [6, 8, 9],
                    [
                        ["(\\d{3})(\\d{3})", "$1 $2", ["[136-9]"]],
                        ["(\\d{4})(\\d{4})", "$1 $2", ["1"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["[78]\\d{5}", [6]],
                        ["690\\d{6}|[36]\\d{5}", [6, 9]],
                        ["180[02]\\d{4}", [8]],
                        ["[19]\\d{5}", [6]]
                    ]
                ],
                AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12],
                    [
                        ["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                        ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["[2-4679][2-8]\\d{6}", [8]],
                        ["5[024-68]\\d{7}", [9]],
                        ["400\\d{6}|800\\d{2,9}"],
                        ["900[02]\\d{5}", [9]], 0, 0, ["600[25]\\d{5}", [9]], 0, 0, ["700[05]\\d{5}", [9]]
                    ]
                ],
                AF: ["93", "00", "[2-7]\\d{8}", [9],
                    [
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}"],
                        ["7(?:[014-9]\\d|2[89]|3[01])\\d{6}"]
                    ]
                ],
                AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "268", [
                    ["268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}"],
                    ["268(?:464|7(?:1[3-9]|2\\d|3[246]|64|[78][0-689]))\\d{4}"],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, ["26840[69]\\d{4}"],
                    ["26848[01]\\d{4}"]
                ]],
                AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "264", [
                    ["2644(?:6[12]|9[78])\\d{4}"],
                    ["264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}"],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                ]],
                AL: ["355", "00", "(?:(?:[2-58]|6\\d)\\d\\d|700)\\d{5}|(?:8\\d{2,3}|900)\\d{3}", [6, 7, 8, 9],
                    [
                        ["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
                        ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:[2358](?:[16-9]\\d[2-9]|[2-5][2-9]\\d)|4(?:[2-57-9][2-9]|6\\d)\\d)\\d{4}", [8]],
                        ["6(?:[689][2-9]|7[2-6])\\d{6}", [9]],
                        ["800\\d{4}", [7]],
                        ["900[1-9]\\d\\d", [6]],
                        ["700[2-9]\\d{4}", [8]], 0, 0, 0, 0, ["808[1-9]\\d\\d", [6]]
                    ]
                ],
                AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8],
                    [
                        ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                        ["(\\d{3})(\\d{5})", "$1 $2", ["[23]"], "(0$1)"],
                        ["(\\d{2})(\\d{6})", "$1 $2", ["[4-7]|88|9[13-9]"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]"], "0 $1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:(?:1[0-2]|47)\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2)\\d{5}"],
                        ["(?:4[1349]|55|77|88|9[13-9])\\d{6}"],
                        ["800\\d{5}"],
                        ["90[016]\\d{5}"], 0, 0, 0, 0, ["60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|90)\\d{4}"],
                        ["80[1-4]\\d{5}"]
                    ]
                ],
                AO: ["244", "00", "[29]\\d{8}", [9],
                    [
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2\\d(?:[0134][25-9]|[25-9]\\d)\\d{5}"],
                        ["9[1-49]\\d{7}"]
                    ]
                ],
                AR: ["54", "00", "(?:11|(?:[2368]|9\\d)\\d)\\d{8}", [10, 11],
                    [
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])", "2(?:2(?:0[45]|[13])|3(?:04|[67])|49|6(?:[0136]|4[4-6])|8|9(?:[19]|[48][45]|7[4-6]))|3(?:36|4(?:[12]|[35][4-6]|84)|5(?:1|[38][4-6])|6|7[069]|8(?:[01]|3[45]|[58][3-6]|7[24-6]))", "2(?:2(?:0[45]|[13])|3(?:04|[67])|49|6(?:[0136]|4(?:[45]|6[0-36-9]))|8|9(?:[19]|4(?:4|5[039])|7[4-6]|8[45]))|3(?:36|4(?:[12]|3(?:4|5[0-47]|6[1-39])|5(?:4[0-379]|[56][02])|84)|5(?:1|3[4-6]|8(?:4[0-36-9]|5[013467]|6))|6|7[069]|8(?:[01]|3(?:4|5[12])|5(?:3|4[0-35-9]|5[0-37-9]|6[0-27-9])|7(?:[245]|6[0-37-9])|8(?:[34]|5[0-37-9]|6[0-28])))", "2(?:2(?:0[45]|[13])|3(?:04|[67])|49|6(?:[0136]|4(?:[45]|6[0-36-9]))|8|9(?:[19]|4(?:4|5(?:[09]|3[016-9]))|7[4-6]|8[45]))|3(?:36|4(?:[12]|3(?:4|5(?:[0-37]|4[347])|6[1-39])|5(?:4[0-379]|[56][02])|84)|5(?:1|3[4-6]|8(?:4(?:[0-37-9]|6[1-9])|5(?:[0137]|4[4-8]|6[0-35-9])|6))|6|7[069]|8(?:[01]|3(?:4|5[12])|5(?:3|4(?:[0-37-9]|5[0289]|6[0-7])|5[0-37-9]|6[0-27-9])|7(?:[245]|6[0-37-9])|8(?:[34]|5[0-37-9]|6[0-28])))"], "0$1", 1],
                        ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1],
                        ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"],
                        ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-4689]|3[3-8])", "9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))", "9(?:2(?:2(?:0[45]|[13])|3(?:04|[67])|49|6(?:[0136]|4[4-6])|8|9(?:[19]|[48][45]|7[4-6]))|3(?:36|4(?:[12]|[35][4-6]|84)|5(?:1|[38][4-6])|6|7[069]|8(?:[01]|3[45]|[58][3-6]|7[24-6])))", "9(?:2(?:2(?:0[45]|[13])|3(?:04|[67])|49|6(?:[0136]|4(?:[45]|6[0-36-9]))|8|9(?:[19]|4(?:4|5[039])|7[4-6]|8[45]))|3(?:36|4(?:[12]|3(?:4|5[0-47]|6[1-39])|5(?:4[0-379]|[56][02])|84)|5(?:1|3[4-6]|8(?:4[0-36-9]|5[013467]|6))|6|7[069]|8(?:[01]|3(?:4|5[12])|5(?:3|4[0-35-9]|5[0-37-9]|6[0-27-9])|7(?:[245]|6[0-37-9])|8(?:[34]|5[0-37-9]|6[0-28]))))", "9(?:2(?:2(?:0[45]|[13])|3(?:04|[67])|49|6(?:[0136]|4(?:[45]|6[0-36-9]))|8|9(?:[19]|4(?:4|5(?:[09]|3[016-9]))|7[4-6]|8[45]))|3(?:36|4(?:[12]|3(?:4|5(?:[0-37]|4[347])|6[1-39])|5(?:4[0-379]|[56][02])|84)|5(?:1|3[4-6]|8(?:4(?:[0-37-9]|6[1-9])|5(?:[0137]|4[4-8]|6[0-35-9])|6))|6|7[069]|8(?:[01]|3(?:4|5[12])|5(?:3|4(?:[0-37-9]|5[0289]|6[0-7])|5[0-37-9]|6[0-27-9])|7(?:[245]|6[0-37-9])|8(?:[34]|5[0-37-9]|6[0-28]))))"], "0$1", 0, "$1 $2 $3-$4"],
                        ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]
                    ], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1", 0, 0, [
                        ["(?:(?:11[2-7]|670)\\d\\d|2(?:2(?:0(?:2[4-6]|[45]\\d)|(?:1[2-6]|3[3-6])\\d|2(?:14|[3467][4-6]|[59][45])|4(?:[156][4-6]|[23]4|4[45])|5(?:2[45]|[45][4-6]|7[3-6])|6(?:[145]4|2[2-6]|[6-8][4-6])|7[1-4]4|8(?:1[3-6]|[356]4|4[2-7])|9(?:1[4-6]|[267]4))|3(?:0(?:2[2-6]|4\\d)|1(?:[47][4-6]|64)|2(?:[03][2-6]|4[3-6]|5[4-6]|6[45])|3[13-8]4|4(?:[24][45]|34|5[4-6]|6[3-6])|5(?:[25][4-6]|[346-8]4)|(?:64|7[45])\\d|9(?:2[3-6]|[3-5]4|6[4-6]))|4(?:7(?:3[45]|[48][4-6]|54|7[2-6])|94\\d)|6(?:(?:04|1[2-7]|[36][45])\\d|2(?:2[2-6]|[46]4|5[4-6])|4(?:[45]\\d|6[0-46-9]|[78]4)|5(?:[1568]4|7[2-7]))|80[45]\\d|9(?:0(?:1[3-6]|2[45]|34)|(?:1[4-6]|9[3-6])\\d|2(?:0[2-7]|[1457-9]4|[26][45]|3[3-6])|3(?:[1356]4|2[4-6]|4[45])|4(?:[08]4|2[2-6]|4\\d|5[02-69]|6[45])|5(?:[23]4|4[2-8])|6(?:[23]4|4[3-6]|6[2-7])|7(?:2[45]|[4-6]\\d)|8(?:24|3[2-6]|[45]\\d)))|3(?:3(?:2(?:7[45]|9[3-6])|64\\d|8[2578][4-6])|4(?:0[0-24-9][4-6]|(?:1[2-7]|2[4-6])\\d|3(?:4\\d|5[0-7]|6[1-69]|[78][4-6])|4(?:2[3-6]|[457][4-6]|6[2-6])|5(?:4[0-4679]|[56][024-6]|8[4-6])|6(?:[03-9][4-6]|2[2-6])|7(?:1[3-6]|2[4-6]|6[2-6])|8(?:[27][2-7]|3[4-6]|4\\d|9[2-6])|9(?:[136-8][4-6]|2[2-7]))|5(?:1[2-8]\\d|2(?:[124][4-6]|5[3-6])|3(?:[23][4-6]|[4-6]\\d|7[3-6])|4(?:1[2-6]|[2689][4-6]|[347][3-6])|6(?:[23][4-6]|4[2-6])|7(?:1[3-6]|[2-6][4-6])|8(?:[23][4-6]|[46]\\d|5[013-7]))|6(?:2[45]|44)\\d|7(?:[069][45]\\d|1(?:[15][46]|6[4-6]|8[3-6])|(?:2[15]|3[145]|4[13])[4-6]|5(?:[17][3-6]|[468][4-6]|5[2-7])|7(?:[2-5][4-6]|7[2-8])|8(?:1[46]|[26][4-6]))|8(?:(?:0[45]|1[2-6])\\d|2(?:1[46]|[5-7][4-6])|3(?:[278][4-6]|4\\d|5[124-6])|4(?:[16][46]|[3-5][4-6])|5(?:[34]\\d|5[0-46-9]|6[0-246-9]|[78][4-6])|6(?:[1-378][4-6]|5[2-8]|9[46])|7(?:[24-6]\\d|3[2-6]|7[4-6]|8[2-7])|8(?:[3-5]\\d|6[0-68]|7[4-6]|8[3-6])|9(?:[12][46]|4[4-6]))))\\d{5}", [10]],
                        ["(?:675\\d\\d|9(?:11[2-7]\\d\\d|2(?:2(?:0(?:2[4-6]|[45]\\d)|(?:1[2-6]|3[3-6])\\d|2(?:14|[3467][4-6]|[59][45])|4(?:[156][4-6]|[23]4|4[45])|5(?:2[45]|[45][4-6]|7[3-6])|6(?:[145]4|2[2-6]|[6-8][4-6])|7[1-4]4|8(?:1[3-6]|[356]4|4[2-7])|9(?:1[4-6]|[267]4))|3(?:0(?:2[2-6]|4\\d)|1(?:[47][4-6]|64)|2(?:[03][2-6]|4[3-6]|5[4-6]|6[45])|3[13-8]4|4(?:[24][45]|34|5[4-6]|6[3-6])|5(?:[25][4-6]|[346-8]4)|(?:64|7[45])\\d|9(?:2[3-6]|[3-5]4|6[4-6]))|4(?:7(?:3[45]|[48][4-6]|54|7[2-6])|94\\d)|6(?:(?:04|1[2-7]|[36][45])\\d|2(?:2[2-6]|[46]4|5[4-6])|4(?:[45]\\d|6[0-46-9]|[78]4)|5(?:[1568]4|7[2-7]))|80[45]\\d|9(?:0(?:1[3-6]|2[45]|34)|(?:1[4-6]|9[3-6])\\d|2(?:0[2-7]|[1457-9]4|[26][45]|3[3-6])|3(?:[1356]4|2[4-6]|4[45])|4(?:[08]4|2[2-6]|4\\d|5[02-69]|6[45])|5(?:[23]4|4[2-8])|6(?:[23]4|4[3-6]|6[2-7])|7(?:2[45]|[4-6]\\d)|8(?:24|3[2-6]|[45]\\d)))|3(?:3(?:2(?:7[45]|9[3-6])|64\\d|8[2578][4-6])|4(?:0[0-24-9][4-6]|(?:1[2-7]|2[4-6])\\d|3(?:4\\d|5[0-7]|6[1-69]|[78][4-6])|4(?:2[3-6]|[457][4-6]|6[2-6])|5(?:4[0-4679]|[56][024-6]|8[4-6])|6(?:[03-9][4-6]|2[2-6])|7(?:1[3-6]|2[4-6]|6[2-6])|8(?:[27][2-7]|3[4-6]|4\\d|9[2-6])|9(?:[136-8][4-6]|2[2-7]))|5(?:1[2-8]\\d|2(?:[124][4-6]|5[3-6])|3(?:[23][4-6]|[4-6]\\d|7[3-6])|4(?:1[2-6]|[2689][4-6]|[347][3-6])|6(?:[23][4-6]|4[2-6])|7(?:1[3-6]|[2-6][4-6])|8(?:[23][4-6]|[46]\\d|5[013-7]))|6(?:2[45]|44)\\d|7(?:[069][45]\\d|1(?:[15][46]|6[4-6]|8[3-6])|(?:2[15]|3[145]|4[13])[4-6]|5(?:[17][3-6]|[468][4-6]|5[2-7])|7(?:[2-5][4-6]|7[2-8])|8(?:1[46]|[26][4-6]))|8(?:(?:0[45]|1[2-6])\\d|2(?:1[46]|[5-7][4-6])|3(?:[278][4-6]|4\\d|5[124-6])|4(?:[16][46]|[3-5][4-6])|5(?:[34]\\d|5[0-46-9]|6[0-246-9]|[78][4-6])|6(?:[1-378][4-6]|5[2-8]|9[46])|7(?:[24-6]\\d|3[2-6]|7[4-6]|8[2-7])|8(?:[3-5]\\d|6[0-68]|7[4-6]|8[3-6])|9(?:[12][46]|4[4-6])))))\\d{5}"],
                        ["800\\d{7}", [10]],
                        ["60[04579]\\d{7}", [10]], 0, 0, ["810\\d{7}", [10]]
                    ]
                ],
                AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "684", [
                    ["6846(?:22|33|44|55|77|88|9[19])\\d{4}"],
                    ["684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}"],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                ]],
                AT: ["43", "00", "[1-35-9]\\d{8,12}|4(?:[0-24-9]\\d{4,11}|3(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7}))|[1-35-8]\\d{7}|[1-35-7]\\d{6}|[135-7]\\d{5}|[15]\\d{4}|1\\d{3}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                    [
                        ["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                        ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                        ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                        ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
                        ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                        ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:1(?:11|[2-9]\\d{2,10})|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-8]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|7(?:2[1-8]|3[25]|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{3,9}|4(?:(?:2[1-8]|35|7[1368]|8[2457])\\d{3,9}|63\\d{2,9})|5(?:12\\d{2,9}|(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])\\d{3,9})|6(?:(?:13|2[1-47]|4[135-8]|5[468])\\d{3,9}|62\\d{2,9}))\\d|(?:316|732)\\d{3}"],
                        ["6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}", [7, 8, 9, 10, 11, 12, 13]],
                        ["800\\d{6,10}", [9, 10, 11, 12, 13]],
                        ["9(?:0[01]|3[019])\\d{6,10}", [9, 10, 11, 12, 13]], 0, 0, 0, 0, ["5(?:0[1-9]|17|[79]\\d)\\d{2,10}|7[28]0\\d{6,10}", [5, 6, 7, 8, 9, 10, 11, 12, 13]],
                        ["8(?:10|2[018])\\d{6,10}|828\\d{5}", [8, 9, 10, 11, 12, 13]]
                    ]
                ],
                AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1\\d{4,9}|(?:[2-478]\\d\\d|550)\\d{6}", [5, 6, 7, 8, 9, 10],
                    [
                        ["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"],
                        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:[237]\\d{5}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|(?:[6-8]\\d{3}|9(?:[02-9]\\d\\d|1(?:[0-57-9]\\d|6[0135-9])))\\d))\\d{3}", [9]],
                        ["4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", [9]],
                        ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                        ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["16\\d{3,7}", [5, 6, 7, 8, 9]],
                        ["(?:14(?:5\\d|71)|550\\d)\\d{5}", [9]],
                        ["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", [6, 8, 10]]
                    ], "0011"
                ],
                AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["5(?:2\\d|8[1-9])\\d{4}"],
                        ["(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}"],
                        ["800\\d{4}"],
                        ["900\\d{4}"], 0, 0, 0, 0, ["(?:28\\d|501)\\d{4}"]
                    ]
                ],
                AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "(?:(?:[1247]\\d|3[0-46-9]|[56]0)\\d\\d|800)\\d{4,6}|(?:[1-47]\\d|50)\\d{4,5}|2\\d{4}", [5, 6, 7, 8, 9, 10], 0, "0", 0, 0, 0, 0, "18", [
                    ["18[1-8]\\d{3,6}", [6, 7, 8, 9]],
                    ["(?:4[0-8]|50)\\d{4,8}", [6, 7, 8, 9, 10]],
                    ["800\\d{4,6}", [7, 8, 9]],
                    ["[67]00\\d{5,6}", [8, 9]], 0, 0, ["(?:10|[23][09])\\d{4,8}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})|20[2-59]\\d\\d"]
                ], "00"],
                AZ: ["994", "00", "(?:(?:(?:[12457]\\d|60|88)\\d|365)\\d{3}|900200)\\d{3}", [9],
                    [
                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|365", "[12]|365", "[12]|365(?:[0-46-9]|5[0-35-9])"], "(0$1)"],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[3-8]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:(?:1[28]\\d|2(?:[045]2|1[24]|2[2-4]|33|6[23]))\\d\\d|365(?:[0-46-9]\\d|5[0-35-9]))\\d{4}"],
                        ["(?:36554|(?:4[04]|5[015]|60|7[07])\\d{3})\\d{4}"],
                        ["88\\d{7}"],
                        ["900200\\d{3}"]
                    ]
                ],
                BA: ["387", "00", "(?:[3589]\\d|49|6\\d\\d?|70)\\d{6}", [8, 9],
                    [
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"], "0$1"],
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}", [8]],
                        ["6(?:0(?:3\\d|40)|[1-356]\\d|44[0-6]|71[137])\\d{5}"],
                        ["8[08]\\d{6}", [8]],
                        ["9[0246]\\d{6}", [8]], 0, 0, ["70(?:3[0146]|[56]0)\\d{4}", [8]], 0, 0, ["8[12]\\d{6}", [8]]
                    ]
                ],
                BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "246", [
                    ["246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}"],
                    ["246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}"],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["(?:246976|900[2-9]\\d\\d)\\d{4}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, ["246(?:292|367|4(?:1[7-9]|3[01]|44|67)|7(?:36|53))\\d{4}"], 0, ["24631\\d{5}"]
                ]],
                BD: ["880", "00", "[13469]\\d{9}|8[0-79]\\d{7,8}|[2-7]\\d{8}|[2-9]\\d{7}|[3-689]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10],
                    [
                        ["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-7]|[459]1"], "0$1"],
                        ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[2-5]1|[67]|8[013-9])|4(?:[235]1|4[01346-9]|6[168]|7|[89][18])|5(?:[2-578]1|6[128]|9)|6(?:[0389]1|28|4[14]|5|6[01346-9])|7(?:[2-589]|61)|8(?:0[014-9]|[12]|[3-7]1)|9(?:[24]1|[358])"], "0$1"],
                        ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]"], "0$1"],
                        ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:(?:2(?:[45]\\d{3}|7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|[13][1-6]|2[0157-9]|41|6[1-35]|7[1-5]|8[1-8]|9[0-6])|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[01367]|7[15]|8[0146-9]))|7(?:02|21\\d|[3-589]1|6[12]|72[24])\\d|8(?:(?:[01]|217|3[12])\\d|4[12]|[5-7](?:1\\d|2)))\\d|3(?:(?:0(?:2[348]\\d|3[2-6])|(?:1(?:2[5-7]|[5-7])|3(?:1|24)|[5-7]1)\\d)\\d|2(?:1\\d\\d|2(?:[35]\\d\\d|4))|4(?:1\\d\\d|2(?:[25]\\d\\d|[47]))|8(?:1\\d\\d|2(?:(?:2\\d|4)\\d|3)))|4(?:0(?:2(?:[09]\\d|7)|33\\d\\d)|(?:1\\d|4(?:2[2-46]|5[25])|8(?:23|54))\\d\\d|2(?:1\\d\\d|2(?:[25]|[67]\\d\\d))|3(?:1\\d\\d(?:\\d{2})?|(?:2[236-9]|32)\\d\\d)|525|6(?:(?:[18]|2[3-6]|62)\\d\\d|5(?:[38]|[5-7]\\d\\d))|9(?:(?:[18]|2[2-5])\\d\\d|53\\d\\d?))|5(?:(?:02[03489]|1|22[2457]|32[35-79]|42[46]|[58]26|724)\\d\\d|6(?:(?:[18]|53)\\d\\d|2))|6(?:(?:(?:[04]2[34]|32[3478]|52[47]|[78]2[2-5]|92[2-6])\\d|6(?:[18]\\d|6(?:2(?:2|[34]\\d)|5[245]\\d)))\\d|2(?:(?:2[2-5]|8)\\d\\d|5(?:[3-5]\\d\\d|7)))|9(?:[24]1\\d\\d|[35]1))\\d{3}|(?:3(?:0(?:2[02-9]\\d|3[56])|(?:22[1-5]|32[2-6]|422)\\d|529)|(?:4(?:22[2-8]|32[02-9]|(?:[48][18]|71)\\d|5(?:1\\d|23)|6(?:2[467]|5[3-57]))|5(?:[2-47-9]1\\d|5(?:1\\d|26))|6(?:0(?:1\\d|24)|[3-589]1\\d|665[35])|81|9(?:[024]2|1\\d|81))\\d|732)\\d{3}|(?:4[46]23|5(?:222|32[37]))\\d{3}"],
                        ["(?:1[13-9]\\d|(?:3[78]|44)[02-9]|6(?:44|6[02-9]))\\d{7}", [10]],
                        ["80[03]\\d{7}", [10]], 0, 0, 0, 0, 0, ["96(?:0[469]|1[0-47]|3[389]|6[69]|7[78])\\d{6}", [10]]
                    ]
                ],
                BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9],
                    [
                        ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|4[23]|9[2-4]"], "0$1"],
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-7]|8(?:0[2-8]|[1-79])"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|9[2-4])\\d|8(?:0[2-8]|[1-79]\\d))\\d{5}", [8]],
                        ["4(?:5[56]|6[0135-8]|[79]\\d|8[3-9])\\d{6}", [9]],
                        ["800[1-9]\\d{4}", [8]],
                        ["(?:70(?:2[0-57]|3[0457]|44|69|7[0579])|90(?:0[0-35-8]|1[36]|2[0-3568]|3[0135689]|4[2-68]|5[1-68]|6[0-378]|7[23568]|9[34679]))\\d{4}", [8]], 0, 0, ["78(?:0[57]|1[0458]|2[25]|3[5-8]|48|[56]0|7[078])\\d{4}", [8]], 0, 0, ["7879\\d{4}", [8]]
                    ]
                ],
                BF: ["226", "00", "[25-7]\\d{7}", [8],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[25-7]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2(?:0(?:49|5[23]|6[56]|9[016-9])|4(?:4[569]|5[4-6]|6[56]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}"],
                        ["(?:5[124-8]|[67]\\d)\\d{6}"]
                    ]
                ],
                BG: ["359", "00", "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9],
                    [
                        ["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                        ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                        ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|70[1-9]"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["7|80"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:(?:[236]\\d|5[1-9]|8[1-6]|9[1-7])\\d|4(?:[124-7]\\d|3[1-6])|7(?:0[1-9]|[1-9]\\d))\\d{4,5}|2\\d{5}", [6, 7, 8]],
                        ["(?:4(?:3[07-9]|8\\d)|(?:8[7-9]\\d|9(?:8\\d|9[69]))\\d)\\d{5}", [8, 9]],
                        ["800\\d{5}", [8]],
                        ["90\\d{6}", [8]],
                        ["700\\d{5}", [8]]
                    ]
                ],
                BH: ["973", "00", "[136-9]\\d{7}", [8],
                    [
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9])|9[69][69])|7(?:1(?:11|78)|7\\d\\d))\\d{4}"],
                        ["(?:3(?:[1-4679]\\d|5[013-69]|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:3[03-9]|[69]\\d|7[0-6])))\\d{4}"],
                        ["80\\d{6}"],
                        ["(?:87|9[014578])\\d{6}"], 0, 0, 0, 0, 0, ["84\\d{6}"]
                    ]
                ],
                BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["22\\d{6}"],
                        ["(?:29|31|6[189]|7[125-9])\\d{6}"]
                    ]
                ],
                BJ: ["229", "00", "[2689]\\d{7}", [8],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2(?:02|1[037]|2[45]|3[68])\\d{5}"],
                        ["(?:6\\d|9[03-9])\\d{6}"], 0, 0, 0, 0, ["81\\d{6}"], 0, ["857[58]\\d{4}"]
                    ]
                ],
                BL: ["590", "00", "(?:590|69\\d)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [
                    ["590(?:2[7-9]|5[12]|87)\\d{4}"],
                    ["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"]
                ]],
                BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "441", [
                    ["441(?:2(?:02|23|[3479]\\d|61)|[46]\\d\\d|5(?:4\\d|60|89)|824)\\d{4}"],
                    ["441(?:[37]\\d|5[0-39])\\d{5}"],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                ]],
                BN: ["673", "00", "[2-578]\\d{6}", [7],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:2(?:[013-9]\\d|2[0-7])|[3-5]\\d\\d)\\d{4}"],
                        ["(?:22[89]|[78]\\d\\d)\\d{4}"]
                    ]
                ],
                BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d{3}|80017)\\d{4}", [8, 9],
                    [
                        ["(\\d)(\\d{7})", "$1 $2", ["[2-4]"]],
                        ["(\\d{8})", "$1", ["[67]"]],
                        ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]
                    ], "0", 0, "0(1\\d)?", 0, 0, 0, [
                        ["(?:2(?:2\\d\\d|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d\\d|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\\d\\d|6(?:11|[24689]\\d|72)))\\d{4}", [8]],
                        ["[67]\\d{7}", [8]],
                        ["80017\\d{4}", [9]]
                    ]
                ],
                BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]", [
                    ["(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}"],
                    ["(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}"]
                ]],
                BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11],
                    [
                        ["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "300|4(?:0(?:0|20)|370)"]],
                        ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1"],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)"],
                        ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]9"], "($1)"]
                    ], "0", 0, "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2", 0, 0, [
                        ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}", [10]],
                        ["(?:[189][1-9]|2[12478])(?:7|9\\d)\\d{7}|(?:3[1-578]|[46][1-9]|5[13-5]|7[13-579])(?:[6-9]|9\\d)\\d{7}", [10, 11]],
                        ["800\\d{6,7}", [9, 10]],
                        ["(?:300|[59]00\\d?)\\d{6}", [9, 10]], 0, 0, 0, 0, 0, ["(?:300\\d(?:\\d{2})?|4(?:0(?:0\\d|20)|370))\\d{4}", [8, 10]]
                    ]
                ],
                BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "242", [
                    ["242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}"],
                    ["242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}"],
                    ["(?:242300|8(?:00|33|44|55|66|77|88)[2-9]\\d\\d)\\d{4}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, ["242225[0-46-9]\\d{3}"]
                ]],
                BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8],
                    [
                        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[23568]|4[5-7]|7[246]"]],
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}", [7]],
                        ["(?:1[67]|77)\\d{6}", [8]]
                    ]
                ],
                BW: ["267", "00", "(?:(?:[2-6]|7\\d)\\d|90)\\d{5}", [7, 8],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]],
                        ["(\\d{2})(\\d{5})", "$1 $2", ["90"]],
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[01])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}", [7]],
                        ["7(?:[1-6]\\d{3}|7(?:[014-8]\\d\\d|200))\\d{3}", [8]], 0, ["90\\d{5}", [7]], 0, 0, 0, 0, ["79(?:1(?:[01]\\d|20)|2[0-2]\\d)\\d{3}", [8]]
                    ]
                ],
                BY: ["375", "810", "(?:(?:[12]|8[0-7]\\d)\\d|33|44|902)\\d{7}|8(?:[05-79]\\d|1[0-489])\\d{7}|8[0-79]\\d{5,7}|8\\d{5}", [6, 7, 8, 9, 10, 11],
                    [
                        ["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
                        ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])", "1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"], "8 0$1"],
                        ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:[56]|7[179])|2[1-3]", "1(?:[56]|7(?:1[3-9]|7|9[2-7]))|2[1-3]"], "8 0$1"],
                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
                        ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]
                    ], "8", 0, "0|80?", 0, 0, 0, [
                        ["(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}", [9]],
                        ["(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}", [9]],
                        ["8(?:0[013]|20\\d)\\d{7}|800\\d{3,6}"],
                        ["(?:810|902)\\d{7}", [10]], 0, 0, 0, 0, ["249\\d{6}", [9]]
                    ], "8~10"
                ],
                BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11],
                    [
                        ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                        ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:2(?:[02]\\d|36)|[3-58][02]\\d|7(?:[02]\\d|32))\\d{4}", [7]],
                        ["6[0-35-7]\\d{5}", [7]],
                        ["0800\\d{7}", [11]]
                    ]
                ],
                CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}", [10], 0, "1", 0, 0, 0, 0, 0, [
                    ["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}"],
                    [""],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}"], 0, 0, 0, ["600[2-9]\\d{6}"]
                ]],
                CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1\\d{5,9}|(?:[48]\\d\\d|550)\\d{6}", [6, 7, 8, 9, 10], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [
                    ["8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]],
                    ["4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", [9]],
                    ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                    ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["(?:14(?:5\\d|71)|550\\d)\\d{5}", [9]],
                    ["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", [6, 8, 10]]
                ], "0011"],
                CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9],
                    [
                        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                        ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["12\\d{7}|[1-6]\\d{6}"],
                        ["(?:8(?:[0-2459]\\d\\d|8)|9[017-9]\\d\\d)\\d{5}"]
                    ]
                ],
                CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2[12]\\d{6}"],
                        ["7[0257]\\d{6}"], 0, ["8776\\d{4}"]
                    ]
                ],
                CG: ["242", "00", "(?:(?:0\\d|80)\\d|222)\\d{6}", [9],
                    [
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["801"]],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]],
                        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["222[1-589]\\d{5}"],
                        ["0[14-6]\\d{7}"], 0, ["80(?:0\\d\\d|11[0-4])\\d{4}"]
                    ]
                ],
                CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9],
                    [
                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]|[89]1"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|9"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}"],
                        ["7[35-9]\\d{7}"],
                        ["800\\d{6}"],
                        ["90[016]\\d{6}"],
                        ["878\\d{6}"], 0, ["5[18]\\d{7}"],
                        ["74[0248]\\d{6}"], 0, ["84[0248]\\d{6}"]
                    ]
                ],
                CI: ["225", "00", "[02-8]\\d{7}", [8],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[02-8]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}"],
                        ["(?:[07][1-9]|[45]\\d|6[014-9]|8[4-9])\\d{6}"]
                    ]
                ],
                CK: ["682", "00", "[2-8]\\d{4}", [5],
                    [
                        ["(\\d{2})(\\d{3})", "$1 $2", ["[2-8]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:2\\d|3[13-7]|4[1-5])\\d{3}"],
                        ["[5-8]\\d{4}"]
                    ]
                ],
                CL: ["56", "(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0", "(?:1230|[2-57-9]\\d|6\\d{1,3})\\d{7}", [9, 10, 11],
                    [
                        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
                        ["(\\d{5})(\\d{4})", "$1 $2", ["2"], "($1)"],
                        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[68]00"]],
                        ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["600"]],
                        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:2(?:1962|(?:2\\d\\d|32[0-46-8])\\d)|(?:(?:3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|9[2-9])\\d|8(?:0[1-9]|[1-9]\\d))\\d\\d)\\d{4}", [9]],
                        ["", [9]],
                        ["(?:1230\\d|800)\\d{6}", [9, 11]], 0, 0, 0, 0, 0, ["44\\d{7}", [9]],
                        ["600\\d{7,8}", [10, 11]]
                    ]
                ],
                CM: ["237", "00", "(?:[26]\\d\\d|88)\\d{6}", [8, 9],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
                        ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2(?:22|33|4[23])\\d{6}", [9]],
                        ["6[5-9]\\d{7}", [9]],
                        ["88\\d{6}", [8]]
                    ]
                ],
                CN: ["86", "(?:1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))?00", "(?:(?:(?:1[03-68]|2\\d)\\d\\d|[3-79])\\d|8[0-57-9])\\d{7}|[1-579]\\d{10}|8[0-57-9]\\d{8,9}|[1-79]\\d{9}|[1-9]\\d{7}|[12]\\d{6}", [7, 8, 9, 10, 11, 12],
                    [
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"]],
                        ["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|9[56])", "(?:10|2\\d)(?:100|9[56])"], "0$1"],
                        ["(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d\\d[19]", "[3-9]\\d\\d(?:10|9[56])"], "0$1"],
                        ["(\\d{2})(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", 1],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"], "0$1", 1],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", 1],
                        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"], "0$1", 1],
                        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["807", "8078"], "0$1", 1],
                        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1(?:[3-57-9]|6[25-7])"]],
                        ["(\\d{5})(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"]],
                        ["(\\d{3})(\\d{7,8})", "$1 $2", ["950"]]
                    ], "0", 0, "0|(1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))", 0, 0, 0, [
                        ["21(?:100\\d{2}|95\\d{3,4}|\\d{8,10})|(?:10|2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98))(?:100\\d{2}|95\\d{3,4}|\\d{8})|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[3-9]|5[2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-4689]|6[2368]|9[02-9])|8(?:078|1[236-8]|2[5-7]|3\\d|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100\\d{2}|95\\d{3,4}|\\d{7})"],
                        ["1(?:[38]\\d{3}|4[57]\\d{2}|5[0-35-9]\\d{2}|6[25-7]\\d{2}|7(?:[0-35-8]\\d{2}|40[0-5])|9[189]\\d{2})\\d{6}", [11]],
                        ["(?:10)?800\\d{7}", [10, 12]],
                        ["16[08]\\d{5}", [8]], 0, 0, 0, 0, 0, ["400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[4789]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[3678]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}", [7, 8, 9, 10, 11]]
                    ], "00"
                ],
                CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:1\\d|3)\\d{9}|[124-8]\\d{7}", [8, 10, 11],
                    [
                        ["(\\d)(\\d{7})", "$1 $2", ["1(?:[2-79]|8[2-9])|[24-8]"], "($1)"],
                        ["(\\d{3})(\\d{7})", "$1 $2", ["3"]],
                        ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9)", "1(?:800|9)"], "0$1", 0, "$1 $2 $3"]
                    ], "0", 0, "0([3579]|4(?:[14]4|56))?", 0, 0, 0, [
                        ["[124-8][2-9]\\d{6}", [8]],
                        ["3(?:0[0-5]|1\\d|2[0-3]|5[01])\\d{7}", [10]],
                        ["1800\\d{7}", [11]],
                        ["19(?:0[01]|4[78])\\d{7}", [11]]
                    ]
                ],
                CR: ["506", "00", "(?:8\\d|90)\\d{8}|[24-8]\\d{7}", [8, 10],
                    [
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"]],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]
                    ], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))", 0, 0, 0, [
                        ["2(?:[024-7]\\d\\d|1(?:0[7-9]|[1-9]\\d))\\d{4}", [8]],
                        ["(?:(?:5(?:0[01]|7[0-3])|(?:7[0-3]|8[3-9])\\d)\\d\\d|6(?:[0-4]\\d{3}|500[01]))\\d{3}", [8]],
                        ["800\\d{7}", [10]],
                        ["90[059]\\d{7}", [10]], 0, 0, 0, 0, ["(?:210[0-6]|4\\d{3}|5100)\\d{4}", [8]]
                    ]
                ],
                CU: ["53", "119", "[2-57]\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8],
                    [
                        ["(\\d{2})(\\d{4,6})", "$1 $2", ["[2-4]"], "(0$1)"],
                        ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                        ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:2[1-4]|7\\d)\\d{5,6}|(?:3[1-3]|4[1-35-8])\\d{6}|3[23]\\d{4,5}|4[12578]\\d{5}|4[78]\\d{4}"],
                        ["5\\d{7}", [8]]
                    ]
                ],
                CV: ["238", "0", "[2-59]\\d{6}", [7],
                    [
                        ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-59]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}"],
                        ["(?:[34][36]|5[1-389]|9\\d)\\d{5}"]
                    ]
                ],
                CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]
                    ], 0, 0, 0, 0, 0, "[69]", [
                        ["9(?:4(?:3[0-5]|4[14]|6\\d)|50\\d|7(?:2[014]|3[02-9]|4[4-9]|6[357]|77|8[7-9])|8(?:3[39]|[46]\\d|7[01]|8[57-9]))\\d{4}"],
                        ["9(?:5(?:[12467]\\d|3[01])|6[5-9]\\d)\\d{4}"], 0, 0, 0, 0, 0, ["955\\d{5}", [8]], 0, ["60[0-2]\\d{4}", [7]]
                    ]
                ],
                CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1\\d{5,9}|(?:[48]\\d\\d|550)\\d{6}", [6, 7, 8, 9, 10], 0, "0", 0, "0|([59]\\d{7})$", "8$1", 0, 0, [
                    ["8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]],
                    ["4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", [9]],
                    ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
                    ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["(?:14(?:5\\d|71)|550\\d)\\d{5}", [9]],
                    ["13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", [6, 8, 10]]
                ], "0011"],
                CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8],
                    [
                        ["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2[2-6]\\d{6}"],
                        ["9[4-79]\\d{6}"],
                        ["800\\d{5}"],
                        ["90[09]\\d{5}"],
                        ["700\\d{5}"], 0, ["(?:50|77)\\d{6}"], 0, 0, ["80[1-9]\\d{5}"]
                    ]
                ],
                CZ: ["420", "00", "(?:[2-578]\\d|60|9\\d{1,4})\\d{7}", [9],
                    [
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                        ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                        ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:2\\d|3[1257-9]|4[16-9]|5[13-9])\\d{7}"],
                        ["(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}"],
                        ["800\\d{6}"],
                        ["9(?:0[05689]|76)\\d{6}"],
                        ["70[01]\\d{6}"], 0, ["9(?:5\\d|7[2-4])\\d{6}"], 0, ["9[17]0\\d{6}"],
                        ["8[134]\\d{7}"]
                    ]
                ],
                DE: ["49", "00", "(?:1|[235-9]\\d{11}|4(?:[0-8]\\d{2,10}|9(?:[05]\\d{7}|[46][1-8]\\d{2,6})))\\d{3}|[1-35-9]\\d{6,13}|49(?:(?:[0-25]\\d|3[1-689])\\d{4,8}|4[1-8]\\d{4}|6[0-8]\\d{3,4}|7[1-7]\\d{5,8})|497[0-7]\\d{4}|49(?:[0-2579]\\d|[34][1-9])\\d{3}|[1-9]\\d{5}|[13468]\\d{4}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                    [
                        ["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                        ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|(?:4[2-9]|[57][1-9]|[68][1-8])1|9(?:06|[1-9]1)", "2(?:0[1-389]|1(?:[14]|2[0-8])|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|(?:4[2-9]|[57][1-9]|[68][1-8])1|9(?:06|[1-9]1)"], "0$1"],
                        ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
                        ["(\\d{4})(\\d{3,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|7(?:0[2-8]|[1-9])|8(?:0[2-9]|[1-8])|9(?:0[7-9]|[1-9])", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[13468]|8[13568])|6(?:0[1356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|7(?:0[2-8]|[1-9])|8(?:0[2-9]|[1-8])|9(?:0[7-9]|[1-9])"], "0$1"],
                        ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                        ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
                        ["(\\d{5})(\\d{3,10})", "$1 $2", ["3"], "0$1"],
                        ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                        ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
                        ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
                        ["(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"],
                        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                        ["(\\d{3})(\\d{8})", "$1 $2", ["18[2-579]", "18[2-579]", "18(?:[2-479]|5(?:0[1-9]|[1-9]))"], "0$1"],
                        ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                        ["(\\d{5})(\\d{6})", "$1 $2", ["18"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15[013-68]"], "0$1"],
                        ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:2(?:0[1-689]|[1-3569]\\d|4[0-8]|7[1-7]|8[0-7])|5(?:0[2-8]|[124-6]\\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-3589]\\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|[29]\\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\\d|[589][0-7]|6[0-8]|7[0-467]))\\d{4,12}|3(?:(?:[03569]\\d|4[0-79]|7[1-7]|8[1-8])\\d{4,12}|2\\d{9})|4(?:(?:[02-48]\\d|1[02-9]|5[0-6]|6[0-8]|7[0-79])\\d{4,12}|9(?:[0-37]\\d{4,9}|[4-6]\\d{4,10}))|(?:2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:0\\d?|[35-9][15]|4[015])|4(?:0\\d?|[2-9]1)|[57][1-9]1|[68](?:[1-8]1|9\\d?)|9(?:06|[1-9]1))\\d{3}", [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]],
                        ["1(?:5[0-25-9]\\d{8}|(?:6[023]|7\\d)\\d{7,8})", [10, 11]],
                        ["800\\d{7,12}", [10, 11, 12, 13, 14, 15]],
                        ["(?:137[7-9]|900(?:[135]|9\\d))\\d{6}", [10, 11]],
                        ["700\\d{8}", [11]], 0, ["18(?:1\\d{5,11}|[2-9]\\d{8})", [8, 9, 10, 11, 12, 13, 14]],
                        ["16(?:4\\d{1,10}|[89]\\d{1,11})", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]], 0, ["1(?:3(?:7[1-6]\\d\\d|8)|80\\d{1,7})\\d{4}", [7, 8, 9, 10, 11, 12, 13, 14]]
                    ]
                ],
                DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2(?:1[2-5]|7[45])\\d{5}"],
                        ["77\\d{6}"]
                    ]
                ],
                DK: ["45", "00", "[2-9]\\d{7}", [8],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}"],
                        [""],
                        ["80\\d{6}"],
                        ["90\\d{6}"]
                    ]
                ],
                DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "767", [
                    ["767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}"],
                    ["767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-7])\\d{4}"],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                ]],
                DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8[024]9", [
                    ["8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}"],
                    ["8[024]9[2-9]\\d{6}"],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                ]],
                DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d|9619)\\d{5}"],
                        ["(?:(?:5[4-6]|7[7-9])\\d|6(?:[569]\\d|7[0-6]))\\d{6}", [9]],
                        ["800\\d{6}", [9]],
                        ["80[3-689]1\\d{5}", [9]], 0, 0, 0, 0, ["98[23]\\d{6}", [9]],
                        ["80[12]1\\d{5}", [9]]
                    ]
                ],
                EC: ["593", "00", "1800\\d{6,7}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11],
                    [
                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                        ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["[2-7][2-7]\\d{6}", [8]],
                        ["9(?:(?:39|[57][89]|[89]\\d)\\d|6(?:[0-27-9]\\d|30))\\d{5}", [9]],
                        ["1800\\d{6,7}", [10, 11]], 0, 0, 0, 0, 0, ["[2-7]890\\d{4}", [8]]
                    ]
                ],
                EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d\\d|900)\\d{4}", [7, 8, 10],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]],
                        ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-4])", "[45]|8(?:00[1-9]|[1-4])"]],
                        ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
                        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["80"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}", [7]],
                        ["(?:5\\d|8[1-4])\\d{6}|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}", [7, 8]],
                        ["800(?:(?:0\\d\\d|1)\\d|[2-9])\\d{3}"],
                        ["(?:40\\d\\d|900)\\d{4}", [7, 8]],
                        ["70[0-2]\\d{5}", [8]]
                    ]
                ],
                EG: ["20", "00", "(?:[189]\\d?|[24-6])\\d{8}|[135]\\d{7}", [8, 9, 10],
                    [
                        ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                        ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["1(?:3[23]\\d{6}|5\\d{6,7})|(?:(?:2[2-4]|3)\\d|4(?:0[2-5]|[578][23]|64)|6[24-689]3|8(?:2[2-57]|4[26]|6[237]|8[2-4])|9(?:2[27]|3[24]|52|6[2356]|7[2-4]))\\d{6}|5(?:(?:0[2-7]|5\\d)\\d{6}|7[23]\\d{5,6})", [8, 9]],
                        ["1[0-25]\\d{8}", [10]],
                        ["800\\d{7}", [10]],
                        ["900\\d{7}", [10]]
                    ]
                ],
                EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]", [
                    ["528[89]\\d{5}"],
                    ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}"],
                    ["80\\d{7}"],
                    ["89\\d{7}"], 0, 0, 0, 0, ["5924[01]\\d{4}"]
                ]],
                ER: ["291", "00", "[178]\\d{6}", [7],
                    [
                        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:1(?:1[12568]|[24]0|55|6[146])|8\\d\\d)\\d{4}"],
                        ["(?:17[1-3]|7\\d\\d)\\d{4}"]
                    ]
                ],
                ES: ["34", "00", "(?:51|[6-9]\\d)\\d{7}", [9],
                    [
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[568]|7[0-48]|9(?:0[12]|[1-8])"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:8(?:[1356]\\d|[28][0-8]|[47][1-9])\\d{4}|9(?:(?:(?:[135]\\d|[28][0-8]|4[1-9])\\d\\d|7(?:[124-9]\\d\\d|3(?:[0-8]\\d|9[1-9])))\\d\\d|6(?:[0-8]\\d{4}|9(?:0(?:[0-57-9]\\d\\d|6(?:0[0-8]|1[1-9]|[2-9]\\d))|[1-9]\\d{3}))))\\d\\d"],
                        ["(?:(?:6\\d|7[1-48])\\d{5}|9(?:6906(?:09|10)|7390\\d\\d))\\d\\d"],
                        ["[89]00\\d{6}"],
                        ["80[367]\\d{6}"],
                        ["70\\d{7}"], 0, ["51\\d{7}"], 0, 0, ["90[12]\\d{6}"]
                    ]
                ],
                ET: ["251", "00", "(?:11|[2-59]\\d)\\d{7}", [9],
                    [
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:18|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|(?:22|55)[0-6]|33[0134689]|44[04]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:(?:11|22)[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}"],
                        ["9\\d{8}"]
                    ]
                ],
                FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}|[1-35689]\\d{4}", [5, 6, 7, 8, 9, 10],
                    [
                        ["(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"],
                        ["(\\d{2})(\\d{4,8})", "$1 $2", ["1(?:0[1-9]|[3-9])|2(?:0[1-9]|9)|[45]|7[135]"], "0$1"],
                        ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:1|20)0|[36-8]"], "0$1"]
                    ], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", [
                        ["(?:1[3-79][1-8]|[235689][1-8]\\d)\\d{2,6}", [5, 6, 7, 8, 9]],
                        ["(?:4[0-8]|50)\\d{4,8}", [6, 7, 8, 9, 10]],
                        ["800\\d{4,6}", [7, 8, 9]],
                        ["[67]00\\d{5,6}", [8, 9]], 0, 0, ["(?:10|[23][09])\\d{4,8}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})|20[2-59]\\d\\d"]
                    ], "00"
                ],
                FJ: ["679", "0(?:0|52)", "(?:(?:0800\\d|[235-9])\\d|45)\\d{5}", [7, 11],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
                        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:(?:3[0-5]|8[58])\\d|6(?:03|[25-7]\\d))\\d{4}", [7]],
                        ["(?:[279]\\d|45|5[01568]|8[034679])\\d{5}", [7]],
                        ["0800\\d{7}", [11]]
                    ], "00"
                ],
                FK: ["500", "00", "[2-7]\\d{4}", [5], 0, 0, 0, 0, 0, 0, 0, [
                    ["[2-47]\\d{4}"],
                    ["[56]\\d{4}"]
                ]],
                FM: ["691", "00", "[39]\\d{6}", [7],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[39]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:3[2357]0[1-9]|9[2-6]\\d\\d)\\d{3}"],
                        ["(?:3[2357]0[1-9]|9[2-7]\\d\\d)\\d{3}"]
                    ]
                ],
                FO: ["298", "00", "(?:[2-8]\\d|90)\\d{4}", [6],
                    [
                        ["(\\d{6})", "$1", ["[2-9]"]]
                    ], 0, 0, "(10(?:01|[12]0|88))", 0, 0, 0, [
                        ["(?:20|[34]\\d|8[19])\\d{4}"],
                        ["(?:[27][1-9]|5\\d)\\d{4}"],
                        ["80[257-9]\\d{3}"],
                        ["90(?:[13-5][15-7]|2[125-7]|99)\\d\\d"], 0, 0, 0, 0, ["(?:6[0-36]|88)\\d{4}"]
                    ]
                ],
                FR: ["33", "00", "[1-9]\\d{8}", [9],
                    [
                        ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["[1-5]\\d{8}"],
                        ["(?:6\\d\\d|7(?:00|[3-9]\\d))\\d{6}"],
                        ["80[0-5]\\d{6}"],
                        ["8[129]\\d{7}"], 0, 0, ["80[6-9]\\d{6}"], 0, ["9\\d{8}"],
                        ["884\\d{6}"]
                    ]
                ],
                GA: ["241", "00", "(?:0\\d|[2-7])\\d{6}", [7, 8],
                    [
                        ["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["01\\d{6}", [8]],
                        ["(?:0[2-7]|[2-7])\\d{6}"]
                    ]
                ],
                GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10],
                    [
                        ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
                        ["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
                        ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
                        ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-79][02-9]|8)", "1(?:[24][02-9]|3(?:[02-79]|8[0-46-9])|5(?:[04-9]|2[024-9]|3[014-689])|6(?:[02-8]|9[0-24578])|7(?:[02-57-9]|6[013-9])|8|9(?:[0235-9]|4[2-9]))", "1(?:[24][02-9]|3(?:[02-79]|8(?:[0-4689]|7[0-24-9]))|5(?:[04-9]|2(?:[025-9]|4[013-9])|3(?:[014-68]|9[0-37-9]))|6(?:[02-8]|9(?:[0-2458]|7[0-25689]))|7(?:[02-57-9]|6(?:[013-79]|8[0-25689]))|8|9(?:[0235-9]|4(?:[2-57-9]|6[0-689])))"], "0$1"],
                        ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|7|94)"], "0$1"],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[024-9])", "[25]|7(?:0|6(?:[04-9]|2[356]))"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"],
                        ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:1(?:1(?:3[0-58]|4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])|2(?:0[024-9]|1[0-7]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))|2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d)\\d{6}|1(?:(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d|7(?:(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))\\d|6888[2-46-8]))\\d\\d", [9, 10]],
                        ["7(?:(?:[1-3]\\d\\d|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|8(?:[014-9]\\d|[23][0-8]))\\d|4(?:[0-46-9]\\d\\d|5(?:[0-689]\\d|7[0-57-9]))|7(?:0(?:0[01]|[1-9]\\d)|(?:[1-7]\\d|8[02-9]|9[0-689])\\d)|9(?:(?:[024-9]\\d|3[0-689])\\d|1(?:[02-9]\\d|1[028])))\\d{5}", [10]],
                        ["80[08]\\d{7}|800\\d{6}|8001111"],
                        ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]],
                        ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                        ["76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", [10]],
                        ["56\\d{8}", [10]]
                    ], 0, " x"
                ],
                GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "473", [
                    ["473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}"],
                    ["473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}"],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                ]],
                GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9],
                    [
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5|79"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}"],
                        ["(?:5(?:[14]4|5[0157-9]|68|7[0147-9]|9[1-35-9])|790)\\d{6}"],
                        ["800\\d{6}"], 0, 0, 0, 0, 0, ["706\\d{6}"]
                    ]
                ],
                GF: ["594", "00", "[56]94\\d{6}", [9],
                    [
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["594(?:[023]\\d|1[01]|4[03-9]|5[6-9]|6[0-3]|80|9[014])\\d{4}"],
                        ["694(?:[0-249]\\d|3[0-48])\\d{4}"]
                    ]
                ],
                GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "0|([25-9]\\d{5})$", "1481$1", 0, 0, [
                    ["1481[25-9]\\d{5}", [10]],
                    ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
                    ["80[08]\\d{7}|800\\d{6}|8001111"],
                    ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]],
                    ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]],
                    ["76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", [10]],
                    ["56\\d{8}", [10]]
                ]],
                GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9],
                    [
                        ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["3(?:0(?:[237]\\d|80)|[167](?:2[0-6]|7\\d|80)|2(?:2[0-5]|7\\d|80)|3(?:2[0-3]|7\\d|80)|4(?:2[013-9]|3[01]|7\\d|80)|5(?:2[0-7]|7\\d|80)|8(?:2[0-2]|7\\d|80)|9(?:[28]0|7\\d))\\d{5}", [9]],
                        ["(?:2[0346-8]\\d|5(?:[0457]\\d|6[01]))\\d{6}", [9]],
                        ["800\\d{5}", [8]]
                    ]
                ],
                GI: ["350", "00", "(?:[25]\\d\\d|629)\\d{5}", [8],
                    [
                        ["(\\d{3})(\\d{5})", "$1 $2", ["2"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2(?:(?:00\\d|2(?:2[2457]|50))\\d|1(?:6[24-7]\\d|90[0-2]))\\d{3}"],
                        ["(?:5[46-8]\\d|629)\\d{5}"]
                    ]
                ],
                GL: ["299", "00", "(?:19|[2-689]\\d)\\d{4}", [6],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-689]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:19|3[1-7]|6[14689]|8[14-79]|9\\d)\\d{4}"],
                        ["(?:[25][1-9]|4[2-9])\\d{4}"],
                        ["80\\d{4}"], 0, 0, 0, 0, 0, ["3[89]\\d{4}"]
                    ]
                ],
                GM: ["220", "00", "[2-9]\\d{6}", [7],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:4(?:[23]\\d\\d|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6[67]\\d|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}"],
                        ["(?:[23679]\\d|5[01])\\d{5}"]
                    ]
                ],
                GN: ["224", "00", "(?:30|6\\d\\d|722)\\d{6}", [8, 9],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}", [8]],
                        ["6[02356]\\d{7}", [9]], 0, 0, 0, 0, 0, 0, ["722\\d{6}", [9]]
                    ]
                ],
                GP: ["590", "00", "(?:590|69\\d)\\d{6}", [9],
                    [
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}"],
                        ["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"]
                    ]
                ],
                GQ: ["240", "00", "(?:222|(?:3\\d|55|[89]0)\\d)\\d{6}", [9],
                    [
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                        ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["3(?:3(?:[0-24-9]\\d[46]|3\\d[7-9])|5\\d\\d[7-9])\\d{4}"],
                        ["(?:222|55[015])\\d{6}"],
                        ["80\\d[1-9]\\d{5}"],
                        ["90\\d[1-9]\\d{5}"]
                    ]
                ],
                GR: ["30", "00", "(?:[268]\\d|[79]0)\\d{8}", [10],
                    [
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[3-8]1|[689]"]],
                        ["(\\d{4})(\\d{6})", "$1 $2", ["2"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2(?:1\\d\\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}"],
                        ["6(?:8[57-9]|9\\d)\\d{7}"],
                        ["800\\d{7}"],
                        ["90[19]\\d{7}"],
                        ["70\\d{8}"], 0, 0, 0, 0, ["8(?:0[16]|12|25)\\d{7}"]
                    ]
                ],
                GT: ["502", "00", "(?:1\\d{3}|[2-7])\\d{7}", [8, 11],
                    [
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
                        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["[267][2-9]\\d{6}", [8]],
                        ["[3-5]\\d{7}", [8]],
                        ["18[01]\\d{8}", [11]],
                        ["19\\d{9}", [11]]
                    ]
                ],
                GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "671", [
                    ["671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}"],
                    [""],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                ]],
                GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["443\\d{6}", [9]],
                        ["9(?:5\\d|6[569]|77)\\d{6}", [9]], 0, 0, 0, 0, 0, 0, ["40\\d{5}", [7]]
                    ]
                ],
                GY: ["592", "001", "(?:(?:(?:[2-46]\\d|77)\\d|862)\\d|9008)\\d{3}", [7],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}"],
                        ["6\\d{6}"],
                        ["(?:289|862)\\d{4}"],
                        ["9008\\d{3}"]
                    ]
                ],
                HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}", [5, 6, 7, 8, 9, 11],
                    [
                        ["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                        ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:2(?:[13-8]\\d|2[013-9]|9[0-24-9])\\d|3(?:(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69])\\d|8(?:4[04]|9\\d))|58(?:0[1-8]|1[2-9]))\\d{4}", [8]],
                        ["(?:46(?:0[0-6]|1[0-2]|4[0-57-9])|5(?:(?:[1-59][0-46-9]|6[0-4689])\\d|7(?:[0-2469]\\d|30))|6(?:(?:0[1-9]|[13-59]\\d|[68][0-57-9]|7[0-79])\\d|2(?:[0-57-9]\\d|6[01]))|707[1-5]|848[01]|9(?:(?:0[1-9]|1[02-9]|[358][0-8]|[467]\\d)\\d|2(?:[0-8]\\d|9[03-9])))\\d{4}", [8]],
                        ["800\\d{6}", [9]],
                        ["900(?:[0-24-9]\\d{7}|3\\d{1,4})", [5, 6, 7, 8, 11]],
                        ["8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}", [8]], 0, ["30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}", [8]],
                        ["7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}", [8]]
                    ], "00"
                ],
                HN: ["504", "00", "[237-9]\\d{7}", [8],
                    [
                        ["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2(?:2(?:0[019]|1[1-36]|[23]\\d|4[04-6]|5[57]|64|7[0135689]|8[01346-9]|9[0-2])|4(?:07|2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:08|16|4[03-5]|5\\d|6[4-6]|74|80)|6(?:[056]\\d|17|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034])|8(?:79|8[0-357-9]|9[1-57-9]))\\d{4}"],
                        ["[37-9]\\d{7}"]
                    ]
                ],
                HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
                        ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}", [8, 9]],
                        ["9(?:(?:01|[12589]\\d)\\d|7(?:[0679]\\d|51))\\d{5}|98\\d{6}", [8, 9]],
                        ["80[01]\\d{4,6}", [7, 8, 9]],
                        ["6[01459]\\d{6}|6[01]\\d{4,5}", [6, 7, 8]],
                        ["7[45]\\d{6}", [8]], 0, ["(?:62\\d?|72)\\d{6}", [8, 9]]
                    ]
                ],
                HT: ["509", "00", "[2-489]\\d{7}", [8],
                    [
                        ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2(?:2\\d|5[1-5]|81|9[149])\\d{5}"],
                        ["[34]\\d{7}"],
                        ["8\\d{7}"], 0, 0, 0, 0, 0, ["9(?:[67][0-4]|8[0-3589]|9\\d)\\d{5}"]
                    ]
                ],
                HU: ["36", "00", "[2357]\\d{8}|[1-9]\\d{7}", [8, 9],
                    [
                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "($1)"],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "($1)"]
                    ], "06", 0, 0, 0, 0, 0, [
                        ["(?:1\\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\\d{6}", [8]],
                        ["(?:[257]0|3[01])\\d{7}", [9]],
                        ["[48]0\\d{6}", [8]],
                        ["9[01]\\d{6}", [8]], 0, 0, ["38\\d{7}", [9]], 0, ["21\\d{7}", [9]]
                    ]
                ],
                ID: ["62", "0(?:0[17-9]|10(?:00|1[67]))", "(?:[1-36]|8\\d{5})\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12],
                    [
                        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
                        ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                        ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                        ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
                        ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                        ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                        ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
                        ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["2(?:[124]\\d{7,8}|(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])\\d{5,8})|(?:3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}|6(?:1(?:[0-8]\\d{4,7}|9\\d{4,8})|(?:[25]\\d|3[1-69]|4[1-6])\\d{5,8})|2(?:1(?:14|500)|2\\d{3})\\d{3}", [7, 8, 9, 10, 11]],
                        ["8[1-35-9]\\d{7,10}", [9, 10, 11, 12]],
                        ["(?:177\\d|800)\\d{5,7}", [8, 9, 10, 11]],
                        ["809\\d{7}", [10]], 0, 0, ["(?:1500|8071\\d{3})\\d{3}", [7, 10]], 0, 0, ["804\\d{7}", [10]]
                    ]
                ],
                IE: ["353", "00", "[148]\\d{9}|[124-9]\\d{8}|[124-69]\\d{7}|[24-69]\\d{6}", [7, 8, 9, 10],
                    [
                        ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
                        ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
                        ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["76|8[235-9]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"],
                        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                        ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:1\\d{2,3}|2(?:[13]\\d\\d|[24-9])|4(?:0[24]|(?:(?:[1-469]|8[0-46-9])\\d|5)\\d|7)|5(?:0[45]|(?:1|[23679]\\d)\\d|8)|6(?:[237-9]|[4-6]\\d\\d)|7[14]\\d\\d|9(?:[04]\\d\\d|[35-9]))\\d{5}|[269]1\\d{6}"],
                        ["8(?:22|[35-9]\\d)\\d{6}", [9]],
                        ["1800\\d{6}", [10]],
                        ["15(?:1[2-8]|[2-8]0|9[089])\\d{6}", [10]],
                        ["700\\d{6}", [9]], 0, ["818\\d{6}", [9]], 0, ["76\\d{7}", [9]],
                        ["18[59]0\\d{6}", [10]]
                    ]
                ],
                IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12],
                    [
                        ["(\\d{4})(\\d{3})", "$1-$2", ["125"]],
                        ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                        ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                        ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
                        ["(\\d{4})(\\d{6})", "$1-$2", ["159"]],
                        ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                        ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["1"]]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:153\\d\\d?|[2-489])\\d{7}", [8, 11, 12]],
                        ["5(?:(?:[0-489][2-9]|6\\d)\\d|5(?:01|2[2-5]|3[23]|4[45]|5[05689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}", [9]],
                        ["1(?:255|80[019]\\d{3})\\d{3}", [7, 10]],
                        ["1(?:2(?:00\\d\\d|12)|9(?:0[01]|19)\\d\\d)\\d{4}", [8, 10]], 0, 0, ["1599\\d{6}", [10]], 0, ["7(?:(?:18|2[23]|3[237]|47|6[58]|7\\d|9[2357-9])\\d|8(?:2\\d|33|55|77|81))\\d{5}", [9]],
                        ["1700\\d{6}", [10]]
                    ]
                ],
                IM: ["44", "00", "(?:1624|(?:[3578]\\d|90)\\d\\d)\\d{6}", [10], 0, "0", 0, "0|([5-8]\\d{5})$", "1624$1", 0, 0, [
                    ["1624[5-8]\\d{5}"],
                    ["7(?:4576|[59]24\\d|624[0-4689])\\d{5}"],
                    ["808162\\d{4}"],
                    ["(?:8(?:4(?:40[49]06|5624\\d)|7(?:0624|2299)\\d)|90[0167]624\\d)\\d{3}"],
                    ["70\\d{8}"], 0, ["(?:3(?:(?:08162|3\\d{4}|7(?:0624|2299))\\d|4(?:40[49]06|5624\\d))|55\\d{5})\\d{3}"], 0, ["56\\d{8}"]
                ]],
                IN: ["91", "00", "(?:00800|1\\d{0,5}|[2-9]\\d\\d)\\d{7}", [8, 9, 10, 11, 12, 13],
                    [
                        ["(\\d{8})", "$1", ["5[0236-8]"]],
                        ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"]],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)", "1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6(?:0[2-7]|[1-9])|7[1257]|8(?:[06][2-7]|[1-57-9]))|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5(?:1|2[2-7])|[78]1|9[15])|6(?:12[2-7]|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3(?:1[2-7]|[34][2-6])|4[47][2-7]|61[346]|88[0-8])|8(?:(?:16|2[014]|3[126]|6[136])[2-7]|7(?:0[2-6]|[78][2-7])|8(?:3[2-7]|4[235-7])|91[3-7])", "1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6(?:0[2-7]|[1-9])|7[1257]|8(?:[06][2-7]|[1-57-9]))|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5(?:1|2[2-7])|[78]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3(?:1(?:[2-6]|71)|[34][2-6])|4[47](?:[2-6]|7[19])|61[346]|88(?:[01][2-7]|[2-7]|82))|8(?:(?:16|2[014]|3[126]|6[136])(?:[2-6]|7[19])|7(?:0[2-6]|[78](?:[2-6]|7[19]))|8(?:3(?:[2-6]|7[19])|4(?:[2356]|7[19]))|91(?:[3-6]|7[19]))"], "0$1"],
                        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[23579]|4[236-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|(?:28[6-8]|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7])[2-7]|3(?:179|(?:2[0-49]|9[2-57])[2-7]))|807(?:1|9[1-3])"], "0$1"],
                        ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["14"]],
                        ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"]],
                        ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["1"]]
                    ], "0", 0, 0, 0, 1, 0, [
                        ["(?:1(?:1[2-7]\\d\\d|2(?:[0-249][2-7]\\d|[35-8]\\d[2-7])|3(?:[0-25][2-7]\\d|[346-9]\\d[2-7])|4(?:[145][2-7]\\d|[236-9]\\d[2-7])|[59](?:[0235-9]\\d[2-7]|[14][2-7]\\d)|6(?:[014][2-7]\\d|[235-9]\\d[2-7])|7(?:(?:0[24]|[1257][2-7])\\d|[34689]\\d[2-7])|8(?:[01346][2-7]\\d|[257-9]\\d[2-7]))|2(?:[02][2-7]\\d\\d|1(?:[134689]\\d[2-7]|[257][2-7]\\d)|3(?:[013][2-7]\\d|[24-8]\\d[2-7])|4(?:[01][2-7]\\d|[2-8]\\d[2-7])|5(?:[0137][2-7]\\d|[25689]\\d[2-7])|6(?:[0158][2-7]\\d|[2-4679]\\d[2-7])|7(?:[13-79]\\d[2-7]|8[2-7]\\d)|8(?:(?:0[13468]|[1568][2-7])\\d|[2-479]\\d[2-7])|9(?:(?:0\\d|[14][2-7])\\d|[235-9]\\d[2-7]))|3(?:(?:01|1[79])\\d[2-7]|2(?:[1-5]\\d[2-7]|6[2-7]\\d)|3[2-7]\\d\\d|4(?:[13][2-7]\\d|2(?:[0189][2-7]|[2-7]\\d)|[5-8]\\d[2-7])|5(?:[125689]\\d[2-7]|[34][2-7]\\d)|6(?:[01489][2-7]\\d|[235-7]\\d[2-7])|7(?:[02-46][2-7]\\d|[157-9]\\d[2-7])|8(?:(?:0\\d|[159][2-7])\\d|[2-46-8]\\d[2-7]))|4(?:[04][2-7]\\d\\d|1(?:[14578]\\d[2-7]|[36][2-7]\\d)|2(?:(?:0[24]|[1-47][2-7])\\d|[5689]\\d[2-7])|3(?:[15][2-7]\\d|[2-467]\\d[2-7])|5(?:[12][2-7]\\d|[4-7]\\d[2-7])|6(?:[0-26-9][2-7]\\d|[35]\\d[2-7])|7(?:(?:[014-9][2-7]|2[2-8])\\d|3\\d[2-7])|8(?:[013-57][2-7]\\d|[2689]\\d[2-7])|9(?:[014-7][2-7]\\d|[2389]\\d[2-7]))|5(?:1(?:[025][2-7]\\d|[146-9]\\d[2-7])|2(?:[14-8]\\d[2-7]|2[2-7]\\d)|3(?:[1346]\\d[2-7]|[25][2-7]\\d)|4(?:[14-69]\\d[2-7]|[28][2-7]\\d)|5(?:(?:1[2-7]|2[1-7])\\d|[46]\\d[2-7])|6(?:[146-9]\\d[2-7]|[25][2-7]\\d)|7(?:1[2-7]\\d|[2-4]\\d[2-7])|8(?:1[2-7]\\d|[2-8]\\d[2-7])|9(?:[15][2-7]\\d|[246]\\d[2-7]))|6(?:1(?:[1358]\\d[2-7]|2[2-7]\\d)|2(?:1[2-7]\\d|[2457]\\d[2-7])|3(?:1[2-7]\\d|[2-4]\\d[2-7])|4(?:1[2-7]\\d|[235-7]\\d[2-7])|5(?:[17][2-7]\\d|[2-689]\\d[2-7])|6(?:[13][2-7]\\d|[24578]\\d[2-7])|7(?:1[2-7]\\d|[235689]\\d[2-7]|4(?:[0189][2-7]|[2-7]\\d))|8(?:0[2-7]\\d|[1-6]\\d[2-7]))|7(?:1(?:[013-9]\\d[2-7]|2[2-7]\\d)|2(?:[0235-9]\\d[2-7]|[14][2-7]\\d)|3(?:[134][2-7]\\d|[2679]\\d[2-7])|4(?:[1-35689]\\d[2-7]|[47][2-7]\\d)|5(?:[15][2-7]\\d|[2-46-9]\\d[2-7])|[67](?:[02-9]\\d[2-7]|1[2-7]\\d)|8(?:(?:[013-7]\\d|2[0-6])[2-7]|8(?:[0189][2-7]|[2-7]\\d))|9(?:[0189]\\d[2-7]|[2-7]\\d\\d))|8(?:0[2-7]\\d\\d|1(?:[1357-9]\\d[2-7]|6[2-7]\\d)|2(?:[014][2-7]\\d|[235-8]\\d[2-7])|3(?:[03-57-9]\\d[2-7]|[126][2-7]\\d)|(?:4[0-24-9]|5\\d)\\d[2-7]|6(?:[136][2-7]\\d|[2457-9]\\d[2-7])|7(?:[078][2-7]\\d|[1-6]\\d[2-7])|8(?:[1256]\\d[2-7]|[34][2-7]\\d)|9(?:1[2-7]\\d|[2-4]\\d[2-7])))\\d{5}", [10]],
                        ["(?:6(?:(?:0(?:0[0-3569]|26|33)|2(?:[06]\\d|3[02589]|8[0-479]|9[0-79])|9(?:0[019]|13))\\d|1279|3(?:(?:0[0-79]|6[0-4679]|7[0-24-9]|[89]\\d)\\d|5(?:0[0-6]|[1-9]\\d)))|7(?:(?:0\\d\\d|19[0-5])\\d|2(?:(?:[0235-79]\\d|[14][017-9])\\d|8(?:[0-59]\\d|[6-8][089]))|3(?:(?:[05-8]\\d|3[017-9])\\d|1(?:[089]\\d|11|7[02-8])|2(?:[0-49][089]|[5-8]\\d)|4(?:[07-9]\\d|11)|9(?:[016-9]\\d|[2-5][089]))|4(?:0\\d\\d|1(?:[015-9]\\d|[2-4][089])|[29](?:[0-7][089]|[89]\\d)|3(?:[0-8][089]|9\\d)|[47](?:[089]\\d|11|7[02-8])|[56]\\d[089]|8(?:[0-24-7][089]|[389]\\d))|5(?:(?:[0346-8]\\d|5[017-9])\\d|1(?:[07-9]\\d|11)|2(?:[04-9]\\d|[1-3][089])|9(?:[0-6][089]|[7-9]\\d))|6(?:0(?:[0-47]\\d|[5689][089])|(?:1[0-257-9]|[6-9]\\d)\\d|2(?:[0-4]\\d|[5-9][089])|3(?:[02-8][089]|[19]\\d)|4\\d[089]|5(?:[0-367][089]|[4589]\\d))|7(?:0(?:0[02-9]|[13-7][089]|[289]\\d)|[1-9]\\d\\d)|8(?:[0-79]\\d\\d|8(?:[089]\\d|11|7[02-9]))|9(?:[089]\\d\\d|313|7(?:[02-8]\\d|9[07-9])))|8(?:0(?:(?:[01589]\\d|6[67])\\d|7(?:[02-8]\\d|9[04-9]))|1(?:[0-57-9]\\d\\d|6(?:[089]\\d|7[02-8]))|2(?:[014](?:[089]\\d|7[02-8])|[235-9]\\d\\d)|3(?:[03-57-9]\\d\\d|[126](?:[089]\\d|7[02-8]))|[45]\\d{3}|6(?:[02457-9]\\d\\d|[136](?:[089]\\d|7[02-8]))|7(?:(?:0[07-9]|[1-69]\\d)\\d|[78](?:[089]\\d|7[02-8]))|8(?:[0-25-9]\\d\\d|3(?:[089]\\d|7[02-8])|4(?:[0489]\\d|7[02-8]))|9(?:[02-9]\\d\\d|1(?:[0289]\\d|7[02-8])))|9\\d{4})\\d{5}", [10]],
                        ["(?:00800\\d|1(?:600|80[03]\\d{3}))\\d{6}|1800\\d{4,8}"],
                        ["186[12]\\d{9}", [13]], 0, 0, ["140\\d{7}", [10]], 0, 0, ["1860\\d{7}", [11]]
                    ]
                ],
                IO: ["246", "00", "3\\d{6}", [7],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["3"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["37\\d{5}"],
                        ["38\\d{5}"]
                    ]
                ],
                IQ: ["964", "00", "(?:1|[2-6]\\d?|7\\d\\d)\\d{7}", [8, 9, 10],
                    [
                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}", [8, 9]],
                        ["7[3-9]\\d{8}", [10]]
                    ]
                ],
                IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10],
                    [
                        ["(\\d{4,5})", "$1", ["96"], "0$1"],
                        ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])\\d{4}|94(?:(?:000|(?:11|2\\d)\\d|30[01])\\d|4(?:111|40\\d)))\\d{4}|(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:[16]|[289]\\d?)\\d{3}", [6, 7, 10]],
                        ["9(?:(?:0(?:[1-35]\\d|44)|(?:[13]\\d|2[0-2])\\d)\\d|9(?:(?:[01]\\d|44)\\d|510|8(?:1[01]|88)|9(?:0[013]|1[0134]|21|77|9[6-9])))\\d{5}", [10]], 0, 0, 0, 0, ["96(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19])", [4, 5]], 0, ["993\\d{7}", [10]]
                    ]
                ],
                IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}", [7]],
                        ["(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[027-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-8]\\d|9[0-3])|8(?:2[0-59]|[3469]\\d|5[1-9]|8[28]))\\d{4}"],
                        ["800\\d{4}", [7]],
                        ["90\\d{5}", [7]], 0, 0, ["809\\d{4}", [7]], 0, ["49\\d{5}", [7]]
                    ], "00"
                ],
                IT: ["39", "00", "0\\d{6}(?:\\d{4})?|3[0-8]\\d{9}|(?:[0138]\\d?|55)\\d{8}|[08]\\d{5}(?:\\d{2})?", [6, 7, 8, 9, 10, 11],
                    [
                        ["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                        ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],
                        ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                        ["(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                        ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[67]|99)|[38]"]],
                        ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]],
                        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]],
                        ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["0(?:(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d|6(?:[0-57-9]\\d\\d|6(?:[0-8]\\d|9[0-79])))\\d{1,6}"],
                        ["33\\d{9}|3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10, 11]],
                        ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
                        ["(?:(?:0878|1(?:44|6[346])\\d)\\d\\d|89(?:2|(?:4[5-9]|(?:5[5-9]|9)\\d\\d)\\d))\\d{3}|89[45][0-4]\\d\\d", [6, 8, 9, 10]],
                        ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]],
                        ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]
                    ]
                ],
                JE: ["44", "00", "(?:1534|(?:[3578]\\d|90)\\d\\d)\\d{6}", [10], 0, "0", 0, "0|([0-24-8]\\d{5})$", "1534$1", 0, 0, [
                    ["1534[0-24-8]\\d{5}"],
                    ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"],
                    ["80(?:07(?:35|81)|8901)\\d{4}"],
                    ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],
                    ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],
                    ["76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}"],
                    ["56\\d{8}"]
                ]],
                JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876", [
                    ["(?:658[2-9]\\d\\d|876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}"],
                    ["876(?:(?:2[14-9]|[348]\\d)\\d|5(?:0[3-9]|[2-57-9]\\d|6[0-24-9])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}"],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                ]],
                JO: ["962", "00", "(?:(?:(?:[268]|7\\d)\\d|32|53)\\d|900)\\d{5}", [8, 9],
                    [
                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                        ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
                        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7[457-9]"], "0$1"],
                        ["(\\d{2})(\\d{7})", "$1 $2", ["7"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[57][023]|6[03])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2[05]0|3(?:00|33)|4(?:0[0-25]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:[029]0|7[08]))\\d{4}", [8]],
                        ["7(?:55[0-49]|(?:7[025-9]|[89][0-25-9])\\d)\\d{5}", [9]],
                        ["80\\d{6}", [8]],
                        ["900\\d{5}", [8]],
                        ["70\\d{7}", [9]], 0, ["8(?:10|8\\d)\\d{5}", [8]],
                        ["74(?:66|77)\\d{5}", [9]], 0, ["85\\d{6}", [8]]
                    ]
                ],
                JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                    [
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                        ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["1(?:[2-46]|5[2-8]|7[2-689]|8[2-7]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])", "1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))", "1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))", "1(?:[2-46]|5(?:[236-8]|[45][2-69])|7[2-689]|8[2-7]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|[67]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)", "1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])", "1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:[34]7|[56]9|74|9[14-79])|82|993"], "0$1"],
                        ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["2[2-9]|4|7[235-9]|9[49]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]|80"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\\d|4(?:[2-578]\\d|6[02-8]|9[2-59])|5(?:[2-589]\\d|6[1-9]|7[2-8])|7(?:[25-9]\\d|3[4-9]|4[02-9])|8(?:[2679]\\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\\d|[679][1-9]))\\d{6}", [9]],
                        ["[7-9]0[1-9]\\d{7}", [10]],
                        ["(?:00(?:(?:37|66)\\d{4,11}|777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)|(?:120|800\\d)\\d{4})\\d\\d"],
                        ["990\\d{6}", [9]],
                        ["60\\d{7}", [9]], 0, ["570\\d{6}", [9]],
                        ["20\\d{8}", [10]],
                        ["50[1-9]\\d{7}", [10]]
                    ]
                ],
                KE: ["254", "000", "(?:(?:2|80)0\\d?|[4-7]\\d\\d|900)\\d{6}|[4-6]\\d{6,7}", [7, 8, 9, 10],
                    [
                        ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                        ["(\\d{3})(\\d{6})", "$1 $2", ["7"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["20\\d{6,7}|(?:4[0-6]|5\\d|6[0-24-9])\\d{7}|(?:4[0245]|6[014-9])\\d{6}|5[1-79]\\d{5,6}|(?:4[245]|6[01457-9])\\d{5}", [7, 8, 9]],
                        ["7\\d{8}", [9]],
                        ["800[24-8]\\d{5,6}", [9, 10]],
                        ["900[02-9]\\d{5}", [9]]
                    ]
                ],
                KG: ["996", "00", "(?:[235-7]\\d|99)\\d{7}|800\\d{6,7}", [9, 10],
                    [
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[25-79]|31[25]"], "0$1"],
                        ["(\\d{4})(\\d{5})", "$1 $2", ["3"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:3(?:1(?:[256]\\d|3[1-9]|47)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}", [9]],
                        ["(?:2(?:0[0-35]|2\\d)|5[0-24-7]\\d|7(?:[07]\\d|55)|99[69])\\d{6}", [9]],
                        ["800\\d{6,7}"]
                    ]
                ],
                KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10],
                    [
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:2(?:3(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)|[4-6](?:4[56]|[56]\\d)\\d)|(?:3[2-6]|4[2-4]|[5-7][2-5])(?:4[56]|[56]\\d)\\d)\\d{4}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])[236-9]\\d{5}", [8, 9]],
                        ["(?:(?:(?:1[28]|9[67])\\d|8(?:[013-79]|8\\d))\\d|(?:2[3-6]|4[2-4]|[56][2-5])48|3(?:[18]\\d\\d|[2-6]48)|7(?:(?:[07-9]|[16]\\d)\\d|[2-5]48))\\d{5}|(?:1\\d|6[016-9]|9[0-57-9])\\d{6}", [8, 9]],
                        ["1800(?:1\\d|2[019])\\d{4}", [10]],
                        ["1900(?:1\\d|2[09])\\d{4}", [10]]
                    ]
                ],
                KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0", 0, 0, 0, 0, 0, [
                    ["(?:[24]\\d|3[1-9]|50|65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d\\d|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500))|8[0-5])\\d{3}"],
                    ["(?:6(?:200[01]|30[01]\\d)|7(?:200[01]|3(?:0[0-5]\\d|140)))\\d{3}", [8]], 0, 0, 0, 0, 0, 0, ["30(?:0[01]\\d\\d|12(?:11|20))\\d\\d", [8]]
                ]],
                KM: ["269", "00", "[3478]\\d{6}", [7],
                    [
                        ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["7[4-7]\\d{5}"],
                        ["[34]\\d{6}"], 0, ["8\\d{6}"]
                    ]
                ],
                KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "869", [
                    ["869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}"],
                    ["869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}"],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                ]],
                KP: ["850", "00|99", "(?:(?:19\\d|2)\\d|85)\\d{6}", [8, 10],
                    [
                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:2\\d|85)\\d{6}", [8]],
                        ["19[1-3]\\d{7}", [10]]
                    ]
                ],
                KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "(?:00[1-9]\\d{2,4}|[12]|5\\d{3})\\d{7}|(?:(?:00|[13-6])\\d|70)\\d{8}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}", [5, 6, 8, 9, 10, 11, 12, 13, 14],
                    [
                        ["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"],
                        ["(\\d{4})(\\d{4})", "$1-$2", ["1(?:5[246-9]|6[046-8]|8[03579])", "1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))"]],
                        ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"],
                        ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                        ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]
                    ], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?", 0, 0, 0, [
                        ["(?:2|3[1-3]|[46][1-4]|5[1-5])[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])1\\d{2,3}", [5, 6, 8, 9, 10]],
                        ["1[0-26-9]\\d{7,8}", [9, 10]],
                        ["(?:00(?:3(?:08|68\\d)|798\\d{1,3})|80\\d)\\d{6}", [9, 11, 12, 13, 14]],
                        ["60[2-9]\\d{6}", [9]],
                        ["50\\d{8,9}", [10, 11]], 0, ["1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))\\d{4}", [8]],
                        ["15\\d{7,8}", [9, 10]],
                        ["70\\d{8}", [10]]
                    ]
                ],
                KW: ["965", "00", "(?:18|[2569]\\d\\d)\\d{5}", [7, 8],
                    [
                        ["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
                        ["(\\d{3})(\\d{5})", "$1 $2", ["[25]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2(?:[23]\\d\\d|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7]))\\d{4}", [8]],
                        ["(?:5(?:(?:[05]\\d|1[0-7]|6[56])\\d|2(?:22|5[25]))|6(?:(?:0[034679]|5[015-9]|6\\d)\\d|222|7(?:0[013-9]|[67]\\d)|9(?:[069]\\d|3[039]))|9(?:(?:0[09]|22|4[01479]|55|6[0679]|8[057-9]|9\\d)\\d|11[01]|7(?:02|[1-9]\\d)))\\d{4}", [8]],
                        ["18\\d{5}", [7]]
                    ]
                ],
                KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "345", [
                    ["345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}"],
                    ["345(?:32[1-9]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[67]|2[2-9]|3[689]))\\d{4}"],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["(?:345976|900[2-9]\\d\\d)\\d{4}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, ["345849\\d{4}"]
                ]],
                KZ: ["7", "810", "(?:33622|(?:7\\d|80)\\d{3})\\d{5}", [10], 0, "8", 0, 0, 0, 0, "33|7", [
                    ["(?:33622|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[2-4]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[2-4]\\d|5[139])|4(?:2\\d|3[1-35-9]|59)|5(?:[23]\\d|4[0-246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59))))\\d{5}"],
                    ["7(?:0[0-2578]|47|6[02-4]|7[15-8]|85)\\d{7}"],
                    ["800\\d{7}"],
                    ["809\\d{7}"],
                    ["808\\d{7}"], 0, 0, 0, ["751\\d{7}"]
                ], "8~10"],
                LA: ["856", "00", "(?:2\\d|3)\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10],
                    [
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"],
                        ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:2[13]|[35-7][14]|41|8[1468])\\d{6}", [8]],
                        ["20(?:[29]\\d|5[24-689]|7[6-8])\\d{6}", [10]], 0, 0, 0, 0, ["30\\d{7}", [9]]
                    ]
                ],
                LB: ["961", "00", "[7-9]\\d{7}|[13-9]\\d{6}", [7, 8],
                    [
                        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"]]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:(?:[14-69]\\d|8[02-9])\\d|7(?:[2-57]\\d|62|8[0-7]|9[04-9]))\\d{4}", [7]],
                        ["(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[1-3]))\\d{5}"], 0, ["9[01]\\d{6}", [8]], 0, 0, 0, 0, 0, ["80\\d{6}", [8]]
                    ]
                ],
                LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "758", [
                    ["758(?:4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}"],
                    ["758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[01]))\\d{4}"],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                ]],
                LI: ["423", "00", "(?:(?:[2378]|6\\d\\d)\\d|90)\\d{5}", [7, 9],
                    [
                        ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[237-9]"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[56]"]],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"]]
                    ], "0", 0, "0|(10(?:01|20|66))", 0, 0, 0, [
                        ["(?:2(?:01|1[27]|3\\d|6[02-578]|96)|3(?:7[0135-7]|8[048]|9[0269]))\\d{4}", [7]],
                        ["(?:6(?:5(?:09|1\\d|20)|6(?:0[0-6]|10|2[06-9]|39))\\d|7(?:[37-9]\\d|42|56))\\d{4}"],
                        ["80(?:02[28]|9\\d\\d)\\d\\d", [7]],
                        ["90(?:02[258]|1(?:23|3[14])|66[136])\\d\\d", [7]], 0, 0, ["870(?:28|87)\\d\\d", [7]]
                    ]
                ],
                LK: ["94", "00", "(?:[1-7]\\d|[89]1)\\d{7}", [9],
                    [
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:[189]1|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}"],
                        ["7[0-25-8]\\d{7}"], 0, 0, 0, 0, ["1973\\d{5}"]
                    ]
                ],
                LR: ["231", "00", "(?:2|33|5\\d|77|88)\\d{7}|[45]\\d{6}", [7, 8, 9],
                    [
                        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3578]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:2\\d{3}|33333)\\d{4}", [8, 9]],
                        ["(?:(?:330|555|(?:77|88)\\d)\\d|4[67])\\d{5}|5\\d{6}", [7, 9]], 0, ["332(?:02|[34]\\d)\\d{4}", [9]]
                    ]
                ],
                LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8],
                    [
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2\\d{7}"],
                        ["[56]\\d{7}"],
                        ["800[256]\\d{4}"]
                    ]
                ],
                LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8],
                    [
                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-79]"], "(8-$1)"],
                        ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)"],
                        ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)"],
                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1"]
                    ], "8", 0, "[08]", 0, 1, 0, [
                        ["(?:3[1478]|4[124-6]|52)\\d{6}"],
                        ["6\\d{7}"],
                        ["800\\d{5}"],
                        ["9(?:0[0239]|10)\\d{5}"],
                        ["700\\d{5}"], 0, ["70[67]\\d{5}"], 0, 0, ["808\\d{5}"]
                    ]
                ],
                LU: ["352", "00", "[2457-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5(?:[013-9]\\d{1,8}|2\\d{1,3}))|6\\d{8}", [4, 5, 6, 7, 8, 9, 10, 11],
                    [
                        ["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],
                        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]],
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]],
                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]],
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]],
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["2[2-9]|[3-57-9]"]]
                    ], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)", 0, 0, 0, [
                        ["(?:(?:2[2-9]|[457]\\d)\\d|3(?:[0-46-9]\\d|5[013-9])|8(?:0[2-9]|[13-9]\\d)|9(?:0[89]|[2-579]\\d))\\d{1,8}"],
                        ["6(?:[269][18]|5[158]|7[189]|81)\\d{6}", [9]],
                        ["800\\d{5}", [8]],
                        ["90[015]\\d{5}", [8]], 0, 0, 0, 0, ["20(?:1\\d{5}|[2-689]\\d{1,7})", [4, 5, 6, 7, 8, 9, 10]],
                        ["801\\d{5}", [8]]
                    ]
                ],
                LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8],
                    [
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["6\\d{7}"],
                        ["2\\d{7}"],
                        ["80\\d{6}"],
                        ["90\\d{6}"], 0, 0, 0, 0, 0, ["81\\d{6}"]
                    ]
                ],
                LY: ["218", "00", "(?:[2569]\\d|71)\\d{7}", [9],
                    [
                        ["(\\d{2})(\\d{7})", "$1-$2", ["[25-79]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:2[13-5]|5[1347]|6[1-479]|71)\\d{7}"],
                        ["9[1-6]\\d{7}"]
                    ]
                ],
                MA: ["212", "00", "[5-8]\\d{8}", [9],
                    [
                        ["(\\d{3})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|[67]"], "0$1"],
                        ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|9)|892"], "0$1"],
                        ["(\\d{5})(\\d{4})", "$1-$2", ["5[23]"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"], "0$1"],
                        ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"],
                        ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\d{6}"],
                        ["80\\d{7}"],
                        ["89\\d{7}"], 0, 0, 0, 0, ["5924[01]\\d{4}"]
                    ]
                ],
                MC: ["377", "00", "(?:(?:[349]|6\\d)\\d\\d|870)\\d{5}", [8, 9],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"]],
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                        ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:870|9[2-47-9]\\d)\\d{5}", [8]],
                        ["(?:(?:3|6\\d)\\d\\d|4(?:4\\d|5[1-9]))\\d{5}"],
                        ["90\\d{6}", [8]]
                    ]
                ],
                MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8],
                    [
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"],
                        ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}"],
                        ["(?:562|6\\d\\d|7(?:[189]\\d|6[07]|7[457-9]))\\d{5}"],
                        ["800\\d{5}"],
                        ["90[056]\\d{5}"], 0, 0, ["803\\d{5}"], 0, ["3[08]\\d{6}"],
                        ["808\\d{5}"]
                    ]
                ],
                ME: ["382", "00", "(?:20|[3-79]\\d|80\\d?)\\d{6}", [8, 9],
                    [
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:[01][2467]|2[2-467]))\\d{5}", [8]],
                        ["6(?:00|3[024]|6[0-25]|[7-9]\\d)\\d{5}", [8]],
                        ["80(?:[0-2578]|9\\d)\\d{5}"],
                        ["9(?:4[1568]|5[178])\\d{5}", [8]], 0, 0, ["77[1-9]\\d{5}", [8]], 0, ["78[1-49]\\d{5}", [8]]
                    ]
                ],
                MF: ["590", "00", "(?:590|69\\d)\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [
                    ["590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}"],
                    ["69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}"]
                ]],
                MG: ["261", "00", "[23]\\d{8}", [9],
                    [
                        ["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["20(?:(?:2\\d|4[47]|5[3467]|6[279]|8[268]|9[245])\\d|7(?:2[29]|[35]\\d))\\d{4}"],
                        ["3[2-49]\\d{7}"], 0, 0, 0, 0, 0, 0, ["22\\d{7}"]
                    ]
                ],
                MH: ["692", "011", "(?:(?:[256]\\d|45)\\d|329)\\d{4}", [7],
                    [
                        ["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]
                    ], "1", 0, 0, 0, 0, 0, [
                        ["(?:247|528|625)\\d{4}"],
                        ["(?:(?:23|54)5|329|45[56])\\d{4}"], 0, 0, 0, 0, 0, 0, ["635\\d{4}"]
                    ]
                ],
                MK: ["389", "00", "[2-578]\\d{7}", [8],
                    [
                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                        ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:2(?:[23]\\d|5[0-24578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}"],
                        ["7(?:(?:[0-25-8]\\d|3[2-4]|9[23])\\d|421)\\d{4}"],
                        ["800\\d{5}"],
                        ["5[02-9]\\d{6}"], 0, 0, 0, 0, 0, ["8(?:0[1-9]|[1-9]\\d)\\d{5}"]
                    ]
                ],
                ML: ["223", "00", "(?:[246-9]\\d|50)\\d{6}", [8],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:2(?:0(?:2\\d|7[0-8])|1(?:2[67]|[4-689]\\d))|4(?:0[0-4]|4[1-39])\\d)\\d{4}"],
                        ["(?:2(?:079|17\\d)|(?:50|[679]\\d|8[239])\\d\\d)\\d{4}"],
                        ["80\\d{6}"]
                    ]
                ],
                MM: ["95", "00", "(?:1|[24-7]\\d)\\d{5,7}|8\\d{6,9}|9(?:[0-46-9]\\d{6,8}|5\\d{6})|2\\d{5}", [6, 7, 8, 9, 10],
                    [
                        ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"],
                        ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
                        ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
                        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                        ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
                        ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:1(?:(?:2\\d|3[56]|[89][0-6])\\d|4(?:2[2-469]|39|6[25]|7[01])|6)|2(?:2(?:00|8[34])|4(?:0\\d|2[246]|39|62|7[01])|51\\d\\d)|4(?:2(?:2\\d\\d|480)|3(?:20\\d|470|56)|420\\d|5470)|5(?:2(?:2\\d\\d?|470)|4(?:2(?:1|86)|470)|522\\d|7(?:20\\d|480)|[89](?:20\\d|470))|6(?:0(?:[23]|88\\d)|(?:124|42[04]|[56]2\\d)\\d|3(?:20\\d|470)|7(?:(?:3\\d|8[01459])\\d|4(?:39|[67]0)))|7(?:0470|1(?:20\\d?|470)|4(?:25\\d|470)|5(?:202|470|96\\d))|8(?:[13](?:2\\d\\d|470)|[25]2\\d\\d))\\d{4}|(?:(?:1[2-6]\\d|4(?:2[24-8]|3[2-7]|[46][2-6]|5[3-5])|5(?:[27][2-8]|3[2-68]|4[24-8]|5[23]|6[2-4]|8[24-7]|9[2-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\\d)|7(?:[04][24-8]|[15][2-7]|22|3[2-4]))\\d|25\\d{2,3}|8(?:[135]2\\d\\d|2(?:2\\d\\d|320)))\\d{3}|(?:2[2-9]|6(?:1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:1[2-689]|2[2-8]|3[24]|4[24-7]|5[245]|6[23]))\\d{4}", [6, 7, 8, 9]],
                        ["(?:17[01]|9(?:2(?:[0-4]|[56]\\d\\d)|(?:3(?:[0-36]|4\\d)|(?:6[89]|89)\\d|7(?:3|5[0-2]|[6-9]\\d))\\d|4(?:(?:[0245]\\d|[1379])\\d|88)|5[0-6]|9(?:[089]|[5-7]\\d\\d))\\d)\\d{4}|9[69]1\\d{6}|9[68]\\d{6}", [7, 8, 9, 10]],
                        ["80080(?:[01][1-9]|2\\d)\\d{3}", [10]], 0, 0, 0, 0, 0, ["(?:1(?:333|468)|2468)\\d{4}", [8]]
                    ]
                ],
                MN: ["976", "001", "[12]\\d{8,9}|[1257-9]\\d{7}", [8, 9, 10],
                    [
                        ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"]],
                        ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                        ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"],
                        ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:[12](?:1|2[1-37]|(?:3[2-8]|4[2-68]|5[1-4689])\\d?)|5[0568])\\d{6}|[12]2[1-3]\\d{5}"],
                        ["(?:8(?:[05689]\\d|3[01])|9[013-9]\\d)\\d{5}", [8]], 0, 0, 0, 0, 0, 0, ["7[05-8]\\d{6}", [8]]
                    ]
                ],
                MO: ["853", "00", "(?:28|[68]\\d)\\d{6}", [8],
                    [
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:28[2-57-9]|8(?:11|[2-57-9]\\d))\\d{5}"],
                        ["6(?:[2356]\\d\\d|8(?:[02][5-9]|[1478]\\d|[356][0-4]))\\d{4}"]
                    ]
                ],
                MP: ["1", "011", "(?:[58]\\d\\d|(?:67|90)0)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "670", [
                    ["670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}"],
                    [""],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                ]],
                MQ: ["596", "00", "(?:596|69\\d)\\d{6}", [9],
                    [
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["596(?:0[0-7]|10|2[7-9]|3[05-9]|4[0-46-8]|[5-7]\\d|8[09]|9[4-8])\\d{4}"],
                        ["69(?:6(?:[0-47-9]\\d|5[0-6]|6[0-4])|727)\\d{4}"]
                    ]
                ],
                MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:25[08]|35\\d|45[1-7])\\d{5}"],
                        ["[2-4][0-46-9]\\d{6}"],
                        ["800\\d{5}"]
                    ]
                ],
                MS: ["1", "011", "(?:(?:[58]\\d\\d|900)\\d\\d|66449)\\d{5}", [10], 0, "1", 0, 0, 0, 0, "664", [
                    ["664491\\d{4}"],
                    ["66449[2-6]\\d{4}"],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                ]],
                MT: ["356", "00", "(?:(?:[2579]\\d\\d|800)\\d|3550)\\d{4}", [8],
                    [
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2(?:0(?:[169]\\d|3[1-4])|[1-357]\\d\\d)\\d{4}"],
                        ["(?:7(?:210|[79]\\d\\d)|9(?:2(?:1[01]|31)|69[67]|8(?:1[1-3]|89|97)|9\\d\\d))\\d{4}"],
                        ["800[3467]\\d{4}"],
                        ["5(?:0(?:0(?:37|43)|(?:6\\d|70|9[0168])\\d)|[12]\\d0[1-5])\\d{3}"], 0, 0, ["501\\d{5}"],
                        ["7117\\d{4}"],
                        ["3550\\d{4}"]
                    ]
                ],
                MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[2-468]|5\\d)\\d{6}", [7, 8],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8(?:0[0-2]|14|3[129])"]],
                        ["(\\d{4})(\\d{4})", "$1 $2", ["5"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:2(?:[03478]\\d|1[0-7]|6[0-79])|4(?:[013568]\\d|2[4-7])|54(?:4\\d|71)|6\\d\\d|8(?:14|3[129]))\\d{4}"],
                        ["5(?:(?:2[589]|7\\d|9[0-8])\\d|4(?:2[1-389]|[489]\\d|7[1-9])|8(?:[0-689]\\d|7[15-8]))\\d{4}", [8]],
                        ["80[0-2]\\d{4}", [7]],
                        ["30\\d{5}", [7]], 0, 0, 0, 0, ["3(?:20|9\\d)\\d{4}", [7]]
                    ], "020"
                ],
                MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10],
                    [
                        ["(\\d{3})(\\d{4})", "$1-$2", ["[367]|4(?:00|[56])|9[14-9]"]],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024-68]|8[024689]))\\d{4}", [7]],
                        ["(?:46[46]|(?:7[2-9]|9[14-9])\\d)\\d{4}", [7]],
                        ["800\\d{7}", [10]],
                        ["900\\d{7}", [10]], 0, 0, ["4[05]0\\d{4}", [7]]
                    ], "00"
                ],
                MW: ["265", "00", "1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}", [7, 9],
                    [
                        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[17-9]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:1[2-9]|21\\d\\d)\\d{5}"],
                        ["(?:111|(?:77|88|99)\\d)\\d{6}", [9]], 0, 0, 0, 0, 0, 0, ["31\\d{7}", [9]]
                    ]
                ],
                MX: ["52", "0[09]", "(?:1\\d|[2-9])\\d{9}", [10, 11],
                    [
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], "01 $1", 1],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], "01 $1", 1],
                        ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], "044 $1", 0, "$1 $2 $3 $4"],
                        ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], "044 $1", 0, "$1 $2 $3 $4"]
                    ], "01", 0, "0[12]|04[45]([2-9]\\d{9})$", "1$1", 0, 0, [
                        ["(?:2(?:0[01]|2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}", [10]],
                        ["1(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}", [11]],
                        ["8(?:00|88)\\d{7}", [10]],
                        ["900\\d{7}", [10]],
                        ["500\\d{7}", [10]], 0, 0, 0, 0, ["300\\d{7}", [10]]
                    ], "00"
                ],
                MY: ["60", "00", "(?:1\\d\\d?|3\\d|[4-9])\\d{7}", [8, 9, 10],
                    [
                        ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[0249]|[367][2-9]|8[1-9])|8"], "0$1"],
                        ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["11"], "0$1"],
                        ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1"]]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\\d|9[0-57])\\d|4(?:2[0-689]|[3-79]\\d|8[1-35689])|5(?:2[0-589]|[3468]\\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\\d|[3489][0-8]))\\d{5}", [8, 9]],
                        ["1(?:(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d))|(?:[23679][2-9]|59\\d)\\d)\\d|4(?:[235-9]\\d\\d|400)|8(?:(?:1[23]|[236]\\d|5[7-9]|7[016-9]|9[0-8])\\d|4(?:[06]\\d|7[0-4])|8(?:[01]\\d|[27][0-4])))\\d{4}", [9, 10]],
                        ["1[378]00\\d{6}", [10]],
                        ["1600\\d{6}", [10]], 0, 0, 0, 0, ["154(?:6(?:0\\d|1[0-3])|8(?:[25]1|4[0189]|7[0-4679]))\\d{4}", [10]]
                    ]
                ],
                MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9],
                    [
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-7]"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}", [8]],
                        ["8[2-7]\\d{7}", [9]],
                        ["800\\d{6}", [9]]
                    ]
                ],
                NA: ["264", "00", "[68]\\d{7,8}", [8, 9],
                    [
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8[0-5]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["6(?:1(?:[02-4]\\d\\d|17)|2(?:17|54\\d|69|70)|3(?:17|2[0237]\\d|34|6[289]|7[01]|81)|4(?:17|(?:27|41|5[25])\\d|69|7[01])|5(?:17|2[236-8]\\d|69|7[01])|6(?:17|26\\d|38|42|69|7[01])|7(?:17|(?:2[2-4]|30)\\d|6[89]|7[01]))\\d{4}|6(?:1(?:2[2-7]|3[01378]|4[0-4]|69|7[014])|25[0-46-8]|32\\d|4(?:2[0-27]|4[016]|5[0-357])|52[02-9]|62[56]|7(?:2[2-69]|3[013]))\\d{4}"],
                        ["(?:60|8[1245])\\d{7}", [9]],
                        ["80\\d{7}", [9]],
                        ["8701\\d{5}", [9]], 0, 0, 0, 0, ["8(?:3\\d\\d|86)\\d{5}"]
                    ]
                ],
                NC: ["687", "00", "[2-57-9]\\d{5}", [6],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-47-9]|5[0-4]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}"],
                        ["(?:5[0-4]|[79]\\d|8[0-79])\\d{4}"], 0, ["36\\d{4}"]
                    ]
                ],
                NE: ["227", "00", "[0289]\\d{7}", [8],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["09|2[01]|[89]"]],
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2(?:0(?:20|3[1-7]|4[13-5]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}"],
                        ["(?:8[04589]|9\\d)\\d{6}"],
                        ["08\\d{6}"],
                        ["09\\d{6}"]
                    ]
                ],
                NF: ["672", "00", "[13]\\d{5}", [6],
                    [
                        ["(\\d{2})(\\d{4})", "$1 $2", ["1"]],
                        ["(\\d)(\\d{5})", "$1 $2", ["3"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:1(?:06|17|28|39)|3[0-2]\\d)\\d{3}"],
                        ["3[58]\\d{4}"]
                    ]
                ],
                NG: ["234", "009", "[78]\\d{10,13}|[7-9]\\d{9}|[1-9]\\d{7}|[124-7]\\d{6}", [7, 8, 10, 11, 12, 13, 14],
                    [
                        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"],
                        ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
                        ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
                        ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:(?:[1-356]\\d|4[02-8]|7[0-79]|8[2-9])\\d|9(?:0[3-9]|[1-9]\\d))\\d{5}|(?:[12]\\d|4[147]|5[14579]|6[1578]|7[0-3578])\\d{5}", [7, 8]],
                        ["(?:70(?:[1-689]\\d|7[0-3])|8(?:0(?:1[01]|[2-9]\\d)|1(?:[0-8]\\d|9[01]))|90[235-9]\\d)\\d{6}", [10]],
                        ["800\\d{7,11}", [10, 11, 12, 13, 14]], 0, 0, 0, ["700\\d{7,11}", [10, 11, 12, 13, 14]]
                    ]
                ],
                NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8],
                    [
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2\\d{7}"],
                        ["(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}"],
                        ["1800\\d{4}"]
                    ]
                ],
                NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8])|[89]\\d{0,3})\\d{6}|1\\d{4,5}", [5, 6, 7, 8, 9, 10],
                    [
                        ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|[7-9]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-5]"], "0$1"],
                        ["(\\d)(\\d{8})", "$1 $2", ["6[1-58]"], "0$1"],
                        ["(\\d{2})(\\d{7})", "$1 $2", ["6"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d\\d)\\d{6}", [9]],
                        ["6[1-58]\\d{7}", [9]],
                        ["800\\d{4,7}", [7, 8, 9, 10]],
                        ["90[069]\\d{4,7}", [7, 8, 9, 10]], 0, 0, ["140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])|8[478]\\d{7}", [5, 6, 9]],
                        ["66\\d{7}", [9]],
                        ["(?:85|91)\\d{7}", [9]]
                    ]
                ],
                NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]],
                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]]
                    ], 0, 0, 0, 0, 0, "[02-689]|7[0-8]", [
                        ["(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", [8]],
                        ["(?:4[015-8]|5[89]|9\\d)\\d{6}", [8]],
                        ["80[01]\\d{5}", [8]],
                        ["82[09]\\d{5}", [8]],
                        ["880\\d{5}", [8]], 0, ["(?:0\\d|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}"], 0, ["85[0-5]\\d{5}", [8]],
                        ["810(?:0[0-6]|[2-8]\\d)\\d{3}", [8]]
                    ]
                ],
                NP: ["977", "00", "9\\d{9}|[1-9]\\d{7}", [8, 10],
                    [
                        ["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                        ["(\\d{2})(\\d{6})", "$1-$2", ["[1-8]|9(?:[1-579]|6[2-6])"], "0$1"],
                        ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:1[0-6]\\d|(?:2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-79])[2-6])\\d{5}", [8]],
                        ["9(?:6[0-3]|7[245]|8[0-24-68])\\d{7}", [10]]
                    ]
                ],
                NR: ["674", "00", "(?:444|55\\d|888)\\d{4}", [7],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[458]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:444|888)\\d{4}"],
                        ["55[4-9]\\d{4}"]
                    ]
                ],
                NU: ["683", "00", "(?:[47]|888\\d)\\d{3}", [4, 7],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["8"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["[47]\\d{3}", [4]],
                        ["888[4-9]\\d{3}", [7]]
                    ]
                ],
                NZ: ["64", "0(?:0|161)", "[28]\\d{7,9}|[346]\\d{7}|(?:508|[79]\\d)\\d{6,7}", [8, 9, 10],
                    [
                        ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80|9"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"],
                        ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["[278]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:24099|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{3})\\d{3}", [8]],
                        ["2(?:[0-28]\\d?|[79])\\d{7}|21\\d{6}"],
                        ["508\\d{6,7}|80\\d{6,8}"],
                        ["90\\d{6,7}", [8, 9]],
                        ["70\\d{7}", [9]], 0, 0, ["[28]6\\d{6,7}", [8, 9]]
                    ], "00"
                ],
                OM: ["968", "00", "(?:[279]\\d{3}|500|8007\\d?)\\d{4}", [7, 8, 9],
                    [
                        ["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
                        ["(\\d{2})(\\d{6})", "$1 $2", ["2"]],
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[79]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2[2-6]\\d{6}", [8]],
                        ["(?:7[129]\\d|9(?:0[1-9]|[1-9]\\d))\\d{5}", [8]],
                        ["(?:500|8007\\d?)\\d{4}"],
                        ["900\\d{5}", [8]]
                    ]
                ],
                PA: ["507", "00", "(?:[1-57-9]|6\\d)\\d{6}", [7, 8],
                    [
                        ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                        ["(\\d{4})(\\d{4})", "$1-$2", ["6"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|[68][58]|7[0167]|9[39])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[026-9])|3(?:[089]\\d|1[014-7]|2[0-35]|33|4[0-579]|55|6[068]|7[06-8])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[05]|7[0-24-9]|8[7-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}", [7]],
                        ["(?:1[16]1|21[89]|6(?:[02-9]\\d|1[0-6])\\d|8(?:1[01]|7[23]))\\d{4}"],
                        ["800\\d{4}", [7]],
                        ["(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}", [7]]
                    ]
                ],
                PE: ["51", "19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9],
                    [
                        ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                        ["(\\d{2})(\\d{6})", "$1 $2", ["[4-7]|8[2-4]"], "(0$1)"],
                        ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "(0$1)"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:1\\d|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}", [8]],
                        ["9\\d{8}", [9]],
                        ["800\\d{5}", [8]],
                        ["805\\d{5}", [8]],
                        ["80[24]\\d{5}", [8]], 0, 0, 0, 0, ["801\\d{5}", [8]]
                    ], 0, " Anexo "
                ],
                PF: ["689", "00", "[48]\\d{7}|4\\d{5}", [6, 8],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[48]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["4(?:[09][4-689]\\d|4)\\d{4}"],
                        ["8[79]\\d{6}", [8]]
                    ]
                ],
                PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:(?:3[0-2]|4[257]|5[34]|9[78])\\d|64[1-9]|77(?:[0-24]\\d|30)|85[02-46-9])\\d{4}"],
                        ["(?:7(?:[0-689]\\d|75)|81\\d)\\d{5}", [8]],
                        ["180\\d{4}", [7]], 0, 0, 0, 0, 0, ["2(?:0[0-47]|7[568])\\d{4}", [7]]
                    ], "00"
                ],
                PH: ["63", "00", "(?:1800\\d{2,4}|2|[89]\\d{4})\\d{5}|[3-8]\\d{8}|[28]\\d{7}", [6, 8, 9, 10, 11, 12, 13],
                    [
                        ["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                        ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-68]|4[2-9]|[5-7]|8[2-8]", "3(?:[23568]|4(?:[0-57-9]|6[02-8]))|4(?:2(?:[0-689]|7[0-8])|[3-8]|9(?:[0-246-9]|3[1-9]|5[0-57-9]))|[5-7]|8(?:[2-7]|8(?:[0-24-9]|3[0-35-9]))"], "(0$1)"],
                        ["(\\d{5})(\\d{4})", "$1 $2", ["[34]|88"], "(0$1)"],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                        ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:2\\d(?:\\d{2})?|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578])\\d{3}|88(?:22\\d\\d|42))\\d{4}|8[2-8]\\d{7}", [6, 8, 9, 10]],
                        ["(?:81[37]|9(?:0[5-9]|1[024-9]|2[0-35-9]|3[02-9]|4[235-9]|5[056]|6[5-7]|7[3-79]|89|9[4-9]))\\d{7}", [10]],
                        ["1800\\d{7,9}", [11, 12, 13]]
                    ]
                ],
                PK: ["92", "00", "(?:122|[24-8]\\d{4,5}|9(?:[013-9]\\d{2,4}|2(?:[01]\\d\\d|2(?:[025-8]\\d|1[01]))\\d))\\d{6}|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12],
                    [
                        ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]0"], "0$1"],
                        ["(\\d{4})(\\d{5})", "$1 $2", ["1"]],
                        ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
                        ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356]))[2-9]|9(?:2(?:2[2-9]|[3-8])|(?:3[27-9]|4[2-6]|6[3569])[2-9]|9(?:[25-7][2-9]|8))"], "(0$1)"],
                        ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
                        ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"],
                        ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["2(?:(?:1[2-9]\\d|[25][2-9])\\d{6}|(?:3[2358]|4[2-4]|9[2-8])[2-9]\\d{5,6})|4(?:(?:[0146-9][2-9]|2[2-9]\\d)\\d{6}|5[3479][2-9]\\d{5,6})|5(?:(?:[1-35-7][2-9]|8[126]\\d)\\d{6}|4[2-467][2-9]\\d{5,6})|6(?:0[468][2-9]\\d{5,6}|[1-8][2-9]\\d{6})|7(?:[14][2-9]\\d{6}|2[236][2-9]\\d{5,6})|8(?:[16][2-9]\\d{6}|(?:2[2-689]|3[23578]|4[3478]|5[2356])[2-9]\\d{5,6})|9(?:1[2-9]\\d{6}|(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])[2-9]\\d{5,6})", [9, 10]],
                        ["3(?:[014]\\d|2[0-5]|3[0-7]|55|64)\\d{7}", [10]],
                        ["800\\d{5}", [8]],
                        ["900\\d{5}", [8]],
                        ["122\\d{6}", [9]], 0, ["(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:0[468]|[1-8])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}", [11, 12]]
                    ]
                ],
                PL: ["48", "00", "[1-9]\\d{6}(?:\\d{2})?|6\\d{5}(?:\\d{2})?", [6, 7, 8, 9],
                    [
                        ["(\\d{5})", "$1", ["19"]],
                        ["(\\d{3})(\\d{3})", "$1 $2", ["11|64"]],
                        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
                        ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|2|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3-8]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])\\d{7}|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19\\d{3}", [7, 9]],
                        ["(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}", [9]],
                        ["800\\d{6}", [9]],
                        ["70[01346-8]\\d{6}", [9]], 0, 0, ["804\\d{6}", [9]],
                        ["64\\d{4,7}"],
                        ["39\\d{7}", [9]],
                        ["801\\d{6}", [9]]
                    ]
                ],
                PM: ["508", "00", "[45]\\d{5}", [6],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:4[1-3]|50)\\d{4}"],
                        ["(?:4[02-4]|5[05])\\d{4}"]
                    ]
                ],
                PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939", [
                    ["(?:787|939)[2-9]\\d{6}"],
                    [""],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                ]],
                PS: ["970", "00", "(?:(?:1\\d|5)\\d\\d|[2489]2)\\d{6}", [8, 9, 10],
                    [
                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
                        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:22[2-47-9]|42[45]|82[01458]|92[369])\\d{5}", [8]],
                        ["5[69]\\d{7}", [9]],
                        ["1800\\d{6}", [10]], 0, 0, 0, 0, 0, 0, ["1700\\d{6}", [10]]
                    ]
                ],
                PT: ["351", "00", "(?:[26-9]\\d|30)\\d{7}", [9],
                    [
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}"],
                        ["9(?:[1-36]\\d\\d|480)\\d{5}"],
                        ["80[02]\\d{6}"],
                        ["(?:6(?:0[178]|4[68])\\d|76(?:0[1-57]|1[2-47]|2[237]))\\d{5}"],
                        ["884[0-4689]\\d{5}"], 0, ["70(?:7\\d|8[17])\\d{5}"], 0, ["30\\d{7}"],
                        ["80(?:8\\d|9[1579])\\d{5}"]
                    ]
                ],
                PW: ["680", "01[12]", "(?:[25-8]\\d\\d|345|488|900)\\d{4}", [7],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}"],
                        ["(?:6[2-4689]0|77\\d|88[0-4])\\d{4}"]
                    ]
                ],
                PY: ["595", "00", "(?:[2-46-9]\\d|5[0-8])\\d{7}|[2-9]\\d{5,7}", [6, 7, 8, 9],
                    [
                        ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                        ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                        ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6[347]|7[46-8]|85"], "(0$1)"],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-7]|85"], "0$1"],
                        ["(\\d{3})(\\d{6})", "$1 $2", ["9"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:2(?:1\\d|2[4-68]|7[15]|9[1-5])|5(?:[1-4]\\d|5[02-4])|6(?:1\\d|3[1-3]|44|7[1-46-8]))\\d{5,6}|3(?:(?:18|3[167]|4[2357]|51)\\d{5,6}|[289]\\d{5,7})|4(?:[1246-8]\\d{5,7}|(?:3[12]|5[13]|9[1-47])\\d{5,6})|7(?:[1-3]\\d{5,7}|(?:4[0-4]|6[1-578]|75|8[0-8])\\d{5,6})|8(?:[1-36]\\d{5,7}|58\\d{5,6})|[26]1\\d{5}", [7, 8, 9]],
                        ["9(?:51|6[129]|[78][1-6]|9[1-5])\\d{6}", [9]], 0, 0, 0, 0, ["[2-9]0\\d{4,7}"], 0, ["8700[0-4]\\d{4}", [9]]
                    ]
                ],
                QA: ["974", "00", "(?:(?:2|[3-7]\\d)\\d\\d|800)\\d{4}", [7, 8],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]],
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["4[04]\\d{6}", [8]],
                        ["[35-7]\\d{7}", [8]],
                        ["800\\d{4}", [7]], 0, 0, 0, 0, ["2(?:[12]\\d|61)\\d{4}", [7]]
                    ]
                ],
                RE: ["262", "00", "(?:26|[68]\\d)\\d{7}", [9],
                    [
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"], "0$1"]
                    ], "0", 0, 0, 0, 0, "262|69|8", [
                        ["262\\d{6}"],
                        ["69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[05]|6[0-26]|7[0-27]|8[0-38]|9[0-479]))\\d{4}"],
                        ["80\\d{7}"],
                        ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, 0, ["8(?:1[019]|2[0156]|84|90)\\d{6}"]
                    ]
                ],
                RO: ["40", "00", "(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}", [6, 9],
                    [
                        ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
                        ["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["[23][13-6]\\d{7}|(?:2(?:19\\d|[3-6]\\d9)|31\\d\\d)\\d\\d"],
                        ["7(?:(?:[02-7]\\d|8[03-8]|99)\\d|1(?:[01]\\d|20))\\d{5}", [9]],
                        ["800\\d{6}", [9]],
                        ["90[036]\\d{6}", [9]], 0, 0, ["37\\d{7}", [9]], 0, 0, ["801\\d{6}", [9]]
                    ], 0, " int "
                ],
                RS: ["381", "00", "[127]\\d{6,11}|3(?:[0-79]\\d{5,10}|8(?:[02-9]\\d{4,9}|1\\d{4,5}))|6\\d{7,9}|800\\d{3,9}|90\\d{4,8}|7\\d{5}", [6, 7, 8, 9, 10, 11, 12],
                    [
                        ["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
                        ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:1(?:[02-9][2-9]|1[1-9])\\d|2(?:[0-24-7][2-9]\\d|[389](?:0[2-9]|[2-9]\\d))|3(?:[0-8][2-9]\\d|9(?:0[2-9]|[2-9]\\d)))\\d{3,8}", [7, 8, 9, 10, 11, 12]],
                        ["6(?:[0-689]|7\\d)\\d{6,7}", [8, 9, 10]],
                        ["800\\d{3,9}"],
                        ["(?:78\\d|90[0169])\\d{3,7}", [6, 7, 8, 9, 10]], 0, 0, ["7[06]\\d{4,10}"]
                    ]
                ],
                RU: ["7", "810", "[347-9]\\d{9}", [10],
                    [
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1],
                        ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)", 1]
                    ], "8", 0, 0, 0, 0, "3[04-689]|[489]", [
                        ["(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}"],
                        ["9\\d{9}"],
                        ["80[04]\\d{7}"],
                        ["80[39]\\d{7}"],
                        ["808\\d{7}"]
                    ], "8~10"
                ],
                RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:06|2[258]\\d)\\d{6}"],
                        ["7[238]\\d{7}", [9]],
                        ["800\\d{6}", [9]],
                        ["900\\d{6}", [9]]
                    ]
                ],
                SA: ["966", "00", "(?:(?:[15]|8\\d)\\d|92)\\d{7}", [9, 10],
                    [
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                        ["(\\d{4})(\\d{5})", "$1 $2", ["9"]],
                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}", [9]],
                        ["5(?:[013-689]\\d|7[0-36-8])\\d{6}", [9]],
                        ["800\\d{7}", [10]],
                        ["925\\d{6}", [9]], 0, 0, ["811\\d{7}", [10]], 0, 0, ["920\\d{6}", [9]]
                    ]
                ],
                SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7],
                    [
                        ["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:1[2-9]|2[013-9]|3[0-2]|[46]|5[0-46-9]|7[0-689]|8[0-79]|9[0-8])"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}", [5]],
                        ["(?:48|(?:(?:7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d)\\d{3}"],
                        ["1[38]\\d{3}", [5]], 0, 0, 0, 0, 0, ["5[12]\\d{3}", [5]]
                    ]
                ],
                SC: ["248", "0(?:[02]|10?)", "(?:(?:(?:[24]\\d|64)\\d|971)\\d|8000)\\d{3}", [7],
                    [
                        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["4[2-46]\\d{5}"],
                        ["2[5-8]\\d{5}"],
                        ["8000\\d{3}"], 0, 0, 0, 0, 0, ["(?:64\\d|971)\\d{4}"]
                    ], "00"
                ],
                SD: ["249", "00", "[19]\\d{8}", [9],
                    [
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["1(?:5[3-7]|8[35-7])\\d{6}"],
                        ["(?:1[0-2]|9[0-3569])\\d{7}"]
                    ]
                ],
                SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10],
                    [
                        ["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"],
                        ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"],
                        ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44)"], "0$1", 0, "$1 $2"],
                        ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                        ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"],
                        ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"],
                        ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:0|39|44)"], "0$1", 0, "$1 $2 $3"],
                        ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"],
                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["7"], "0$1", 0, "$1 $2 $3 $4"],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"],
                        ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["1(?:0[1-8]\\d{6}|(?:[13689]\\d|2[0-35]|4[0-4]|5[0-25-9]|7[13-6])\\d{5,6})|(?:2(?:[136]\\d|2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|[1356]\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01]))\\d{5,6}|4(?:[0246]\\d{5,7}|(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])\\d{5,6})|6(?:[03]\\d{5,7}|(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])\\d{5,6})|8\\d{6,8}|9(?:0[1-9]\\d{4,6}|(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8])\\d{5,6})|(?:[12][136]|3[356])\\d{5}", [7, 8, 9]],
                        ["7[02369]\\d{7}", [9]],
                        ["20\\d{4,7}", [6, 7, 8, 9]],
                        ["649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}", [7, 8, 9, 10]],
                        ["75[1-8]\\d{6}", [9]], 0, 0, ["74[02-9]\\d{6}", [9]], 0, ["77[0-7]\\d{6}", [9]]
                    ]
                ],
                SG: ["65", "0[0-3]\\d", "(?:1\\d{3}|[369]|7000|8(?:\\d{2})?)\\d{7}", [8, 10, 11],
                    [
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8[1-8]"]],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[89]"]],
                        ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["70"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["6[1-9]\\d{6}", [8]],
                        ["(?:8[1-8]|9[0-8])\\d{6}", [8]],
                        ["(?:18|8)00\\d{7}", [10, 11]],
                        ["1900\\d{7}", [11]], 0, 0, ["7000\\d{7}", [11]], 0, ["3[12]\\d{6}", [8]]
                    ]
                ],
                SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]", [
                    ["2(?:[0-57-9]\\d|6[4-9])\\d\\d"],
                    ["[56]\\d{4}", [5]], 0, 0, 0, 0, 0, 0, ["262\\d\\d", [5]]
                ]],
                SI: ["386", "00|10(?:22|66|88|99)", "[1-8]\\d{7}|90\\d{4,6}|8\\d{4,6}", [5, 6, 7, 8],
                    [
                        ["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
                        ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|[357][2-8]|4[24-8]"], "(0$1)"],
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3467]|51"], "0$1"],
                        ["(\\d{3})(\\d{5})", "$1 $2", ["[58]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:[1-357][2-8]|4[24-8])\\d{6}", [8]],
                        ["(?:(?:[37][01]|4[0139]|51)\\d\\d|6(?:[48]\\d\\d|5(?:1\\d|55|[67]0)|9(?:10|[69]\\d)))\\d{4}", [8]],
                        ["80\\d{4,6}", [6, 7, 8]],
                        ["89[1-3]\\d{2,5}|90\\d{4,6}"], 0, 0, 0, 0, ["(?:59\\d\\d|8(?:1(?:[67]\\d|8[01389])|2(?:0\\d|2[0378]|8[0-2489])|3[389]\\d))\\d{4}", [8]]
                    ], "00"
                ],
                SJ: ["47", "00", "(?:0|(?:[4589]\\d|79)\\d\\d)\\d{4}", [5, 8], 0, 0, 0, 0, 0, 0, "79", [
                    ["79\\d{6}", [8]],
                    ["(?:4[015-8]|5[89]|9\\d)\\d{6}", [8]],
                    ["80[01]\\d{5}", [8]],
                    ["82[09]\\d{5}", [8]],
                    ["880\\d{5}", [8]], 0, ["(?:0\\d|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}"], 0, ["85[0-5]\\d{5}", [8]],
                    ["810(?:0[0-6]|[2-8]\\d)\\d{3}", [8]]
                ]],
                SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9],
                    [
                        ["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                        ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
                        ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:2(?:16|[2-9]\\d{3})|[3-5][1-8]\\d{3})\\d{4}|(?:2|[3-5][1-8])1[67]\\d{3}|[3-5][1-8]16\\d\\d"],
                        ["9(?:0(?:[1-8]\\d|9[1-9])|(?:1[0-24-9]|[45]\\d)\\d)\\d{5}", [9]],
                        ["800\\d{6}", [9]],
                        ["9(?:00|[78]\\d)\\d{6}", [9]], 0, 0, ["96\\d{7}", [9]],
                        ["9090\\d{3}", [7]],
                        ["6(?:02|5[0-4]|9[0-6])\\d{6}", [9]],
                        ["8[5-9]\\d{7}", [9]]
                    ]
                ],
                SL: ["232", "00", "(?:[2-578]\\d|66|99)\\d{6}", [8],
                    [
                        ["(\\d{2})(\\d{6})", "$1 $2", ["[2-9]"], "(0$1)"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["[235]2[2-4][2-9]\\d{4}"],
                        ["(?:2[15]|3[013-5]|4[04]|5[05]|66|7[5-9]|8[08]|99)\\d{6}"]
                    ]
                ],
                SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                        ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]
                    ], 0, 0, "([89]\\d{5})$", "0549$1", 0, 0, [
                        ["0549(?:8[0157-9]|9\\d)\\d{4}", [10]],
                        ["6[16]\\d{6}", [8]], 0, ["7[178]\\d{6}", [8]], 0, 0, 0, 0, ["5[158]\\d{6}", [8]]
                    ]
                ],
                SN: ["221", "00", "(?:[378]\\d{4}|93330)\\d{4}", [9],
                    [
                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}"],
                        ["7(?:[06-8]\\d|21|90)\\d{6}"],
                        ["800\\d{6}"],
                        ["88[4689]\\d{6}"], 0, 0, 0, 0, ["(?:3(?:392|9[01]\\d)\\d|93330)\\d{4}"],
                        ["81[02468]\\d{6}"]
                    ]
                ],
                SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|(?:[1-4]\\d|59)\\d{5}|[1348]\\d{5}", [6, 7, 8, 9],
                    [
                        ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                        ["(\\d{6})", "$1", ["[134]"]],
                        ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],
                        ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79[0-8]|90"]],
                        ["(\\d{2})(\\d{5,7})", "$1 $2", ["[12679]"]]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|59)\\d{5}|(?:[134]\\d|8[125])\\d{4}", [6, 7]],
                        ["(?:(?:15|(?:3[59]|4[89]|6[1-9]|79|8[08])\\d|9(?:0[67]|[2-9]))\\d|2(?:4\\d|8))\\d{5}|(?:6\\d|7[1-9])\\d{6}", [7, 8, 9]]
                    ]
                ],
                SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7],
                    [
                        ["(\\d{3})(\\d{3})", "$1-$2", ["[2-4]|5[2-58]"]],
                        ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["5"]],
                        ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:2[1-3]|3[0-7]|(?:4|68)\\d|5[2-58])\\d{4}"],
                        ["(?:7[124-7]|8[125-9])\\d{5}", [7]], 0, 0, 0, 0, 0, 0, ["56\\d{4}", [6]]
                    ]
                ],
                SS: ["211", "00", "[19]\\d{8}", [9],
                    [
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["18\\d{7}"],
                        ["(?:12|9[1257])\\d{7}"]
                    ]
                ],
                ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["22\\d{5}"],
                        ["9(?:0(?:0[5-9]|[1-9]\\d)|[89]\\d\\d)\\d{3}"]
                    ]
                ],
                SV: ["503", "00", "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", [7, 8, 11],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2[1-6]\\d{6}", [8]],
                        ["[67]\\d{7}", [8]],
                        ["800\\d{4}(?:\\d{4})?", [7, 11]],
                        ["900\\d{4}(?:\\d{4})?", [7, 11]]
                    ]
                ],
                SX: ["1", "011", "(?:(?:[58]\\d\\d|900)\\d|7215)\\d{6}", [10], 0, "1", 0, 0, 0, 0, "721", [
                    ["7215(?:4[2-8]|8[239]|9[056])\\d{4}"],
                    ["7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}"],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                ]],
                SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9],
                    [
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                    ], "0", 0, 0, 0, 1, 0, [
                        ["(?:1[14]\\d|2(?:1\\d?|[235])|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}|1[1-356]\\d{6}"],
                        ["9(?:22|[3-589]\\d|6[024-9])\\d{6}", [9]]
                    ]
                ],
                SZ: ["268", "00", "(?:0800|(?:[237]\\d|900)\\d\\d)\\d{4}", [8, 9],
                    [
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
                        ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["[23][2-5]\\d{6}", [8]],
                        ["7[6-9]\\d{6}", [8]],
                        ["0800\\d{4}", [8]],
                        ["900\\d{6}", [9]], 0, 0, 0, 0, ["70\\d{6}", [8]]
                    ]
                ],
                TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8", [
                    ["8\\d{3}"]
                ]],
                TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "649", [
                    ["649(?:712|9(?:4\\d|50))\\d{4}"],
                    ["649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}"],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["64971[01]\\d{4}"]
                ]],
                TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["22(?:[37-9]0|5[0-5]|6[89])\\d{4}"],
                        ["(?:6[023568]|77|9\\d)\\d{6}"]
                    ], "00"
                ],
                TG: ["228", "00", "[279]\\d{7}", [8],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}"],
                        ["(?:7[09]|9[0-36-9])\\d{6}"]
                    ]
                ],
                TH: ["66", "00[1-9]", "(?:1\\d\\d?|[2-57]|[689]\\d)\\d{7}", [8, 9, 10],
                    [
                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"], "0$1"],
                        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}", [8]],
                        ["(?:14|6[1-6]|[89]\\d)\\d{7}", [9]],
                        ["1800\\d{6}", [10]],
                        ["1900\\d{6}", [10]], 0, 0, 0, 0, ["6[08]\\d{7}", [9]]
                    ]
                ],
                TJ: ["992", "810", "(?:[3-59]\\d|77|88)\\d{7}", [9],
                    [
                        ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])", "3(?:[1245]|3(?:1[0-689]|2))"]],
                        ["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["33"]],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["4[148]|[578]|9(?:[0235-9]|1[0-69])"]],
                        ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[349]"]]
                    ], "8", 0, 0, 0, 1, 0, [
                        ["(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}"],
                        ["(?:41[18]|(?:5[05]|77|88|9[0-35-9])\\d)\\d{6}"]
                    ], "8~10"
                ],
                TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7], 0, 0, 0, 0, 0, 0, 0, [
                    ["(?:2[2-4]|[34]\\d)\\d{2,5}"],
                    ["7[2-4]\\d{2,5}"]
                ]],
                TL: ["670", "00", "(?:[2-4]\\d|7\\d\\d?|[89]0)\\d{5}", [7, 8],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                        ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:2[1-5]|3[1-9]|4[1-4])\\d{5}", [7]],
                        ["7[3-8]\\d{6}", [8]],
                        ["80\\d{5}", [7]],
                        ["90\\d{5}", [7]],
                        ["70\\d{5}", [7]]
                    ]
                ],
                TM: ["993", "810", "[1-6]\\d{7}", [8],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
                        ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"],
                        ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"]
                    ], "8", 0, 0, 0, 0, 0, [
                        ["(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}"],
                        ["6[1-9]\\d{6}"]
                    ], "8~10"
                ],
                TN: ["216", "00", "[2-57-9]\\d{7}", [8],
                    [
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:(?:3[0-2]|7\\d)\\d{3}|81200)\\d{3}"],
                        ["(?:(?:[259]\\d|4[0-6])\\d\\d|3(?:001|1(?:[1-35]\\d|40)|240|(?:6[0-4]|91)\\d))\\d{4}"],
                        ["8010\\d{4}"],
                        ["88\\d{6}"], 0, 0, 0, 0, 0, ["8[12]10\\d{4}"]
                    ]
                ],
                TO: ["676", "00", "(?:(?:080|[56])0|[2-4]\\d|[78]\\d(?:\\d{2})?)\\d{3}", [5, 7],
                    [
                        ["(\\d{2})(\\d{3})", "$1-$2", ["[2-6]|7[014]|8[05]"]],
                        ["(\\d{3})(\\d{4})", "$1 $2", ["7[578]|8"]],
                        ["(\\d{4})(\\d{3})", "$1 $2", ["0"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:2\\d|3[1-8]|4[1-4]|[56]0|7[0149]|8[05])\\d{3}", [5]],
                        ["(?:7[578]|8[46-9])\\d{5}", [7]],
                        ["0800\\d{3}", [7]]
                    ]
                ],
                TR: ["90", "00", "(?:[2-58]\\d\\d|900)\\d{7}|4\\d{6}", [7, 10],
                    [
                        ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-4]"], "(0$1)"],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|[89]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"], "0$1"]
                    ], "0", 0, 0, 0, 1, 0, [
                        ["(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}", [10]],
                        ["5(?:(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d\\d|6161)\\d{5}", [10]],
                        ["800\\d{7}", [10]],
                        ["(?:8[89]8|900)\\d{7}", [10]],
                        ["592(?:21[12]|461)\\d{4}", [10]], 0, ["(?:444|850\\d{3})\\d{4}"],
                        ["512\\d{7}", [10]]
                    ]
                ],
                TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "868", [
                    ["868(?:2(?:01|1[89]|[23]\\d)|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}"],
                    ["868(?:2(?:6[6-9]|[7-9]\\d)|[37](?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d))\\d{4}"],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                ]],
                TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], 0, 0, 0, 0, 0, 0, 0, [
                    ["2[02-9]\\d{3}", [5]],
                    ["(?:7[01]\\d|90)\\d{4}", [6, 7]]
                ]],
                TW: ["886", "0(?:0[25-79]|19)", "(?:[24589]|7\\d)\\d{8}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10],
                    [
                        ["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
                        ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[25][2-8]|[346]|7[1-9]|8[27-9]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[258]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:(?:2[2-8]\\d|3[2-9]|4(?:[239]\\d|[78])|5[2-8]|6[235-79]|7[1-9])\\d\\d|8(?:2(?:3\\d|66)|[7-9]\\d\\d))\\d{4}|24\\d{6}", [8, 9]],
                        ["9[0-8]\\d{7}", [9]],
                        ["80[0-79]\\d{6}", [9]],
                        ["20(?:[013-9]\\d\\d|2)\\d{4}", [7, 9]],
                        ["99\\d{7}", [9]], 0, ["50[0-46-9]\\d{6}", [9]], 0, ["70\\d{8}", [10]]
                    ], 0, "#"
                ],
                TZ: ["255", "00[056]", "(?:[26-8]\\d|41|90)\\d{7}", [9],
                    [
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["2[2-8]\\d{7}"],
                        ["(?:6[2-9]|7[13-9])\\d{7}"],
                        ["80[08]\\d{6}"],
                        ["90\\d{7}"], 0, 0, 0, 0, ["41\\d{7}"],
                        ["8(?:40|6[01])\\d{6}"]
                    ]
                ],
                UA: ["380", "00", "[3-9]\\d{8}", [9],
                    [
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["(?:3[1-8]|4[136-8])2|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|[89]0", "3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|[89]0"], "0$1"],
                        ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-9]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}"],
                        ["(?:39|50|6[36-8]|7[1-3]|9[1-9])\\d{7}"],
                        ["800\\d{6}"],
                        ["900[2-49]\\d{5}"], 0, 0, 0, 0, ["89[1-579]\\d{6}"]
                    ], "0~0"
                ],
                UG: ["256", "00[057]", "(?:(?:[29]0|[347]\\d)\\d|800)\\d{6}", [9],
                    [
                        ["(\\d{2})(\\d{7})", "$1 $2", ["3|4(?:[0-5]|6[0-36-9])"], "0$1"],
                        ["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
                        ["(\\d{3})(\\d{6})", "$1 $2", ["[247-9]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:20(?:(?:(?:[0147]\\d|5[0-4]|8[0-2])\\d|2(?:40|[5-9]\\d)|3(?:0[0-4]|[2367]\\d))\\d|6(?:00[0-2]|30[0-4]|[5-9]\\d\\d))|[34]\\d{5})\\d{3}"],
                        ["7(?:(?:[0157-9]\\d|30|4[0-4])\\d|2(?:[03]\\d|60))\\d{5}"],
                        ["800[1-3]\\d{5}"],
                        ["90[1-3]\\d{6}"]
                    ]
                ],
                US: ["1", "011", "[2-9]\\d{9}", [10],
                    [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]
                    ], "1", 0, 0, 0, 0, 0, [
                        ["(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-2])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"],
                        [""],
                        ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                        ["900[2-9]\\d{6}"],
                        ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"], 0, ["710[2-9]\\d{6}"]
                    ]
                ],
                UY: ["598", "0(?:0|1[3-9]\\d)", "(?:[249]\\d\\d|80)\\d{5}|9\\d{6}", [7, 8],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["8|90"], "0$1"],
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[24]"]],
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:2\\d|4[2-7])\\d{6}", [8]],
                        ["9[1-9]\\d{6}", [8]],
                        ["80[05]\\d{4}", [7]],
                        ["90[0-8]\\d{4}", [7]]
                    ], "00", " int. "
                ],
                UZ: ["998", "810", "[679]\\d{8}", [9],
                    [
                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[679]"], "8 $1"]
                    ], "8", 0, 0, 0, 0, 0, [
                        ["(?:6(?:1(?:22|3[124]|4[1-4]|5[1-3578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d\\d|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[124-6]|9[135-8])|1[12]\\d|2(?:22|3[13-57-9]|4[1-3579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}"],
                        ["(?:6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|3[01]|5\\d|7[0-4])|(?:5[67]|7\\d)\\d|6(?:2[0-26]|8\\d)))|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))|9[0-57-9]\\d{3})\\d{4}"]
                    ], "8~10"
                ],
                VA: ["39", "00", "0\\d{6}(?:\\d{4})?|3[0-8]\\d{9}|(?:[0138]\\d?|55)\\d{8}|[08]\\d{5}(?:\\d{2})?", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698", [
                    ["06698\\d{1,6}"],
                    ["33\\d{9}|3[1-9]\\d{8}|3[2-9]\\d{7}", [9, 10, 11]],
                    ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
                    ["(?:(?:0878|1(?:44|6[346])\\d)\\d\\d|89(?:2|(?:4[5-9]|(?:5[5-9]|9)\\d\\d)\\d))\\d{3}|89[45][0-4]\\d\\d", [6, 8, 9, 10]],
                    ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]],
                    ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]
                ]],
                VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "784", [
                    ["784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}"],
                    ["784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4]))\\d{4}"],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                ]],
                VE: ["58", "00", "(?:(?:[24]\\d|50)\\d|[89]00)\\d{7}", [10],
                    [
                        ["(\\d{3})(\\d{7})", "$1-$2", ["[24589]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:2(?:12|3[457-9]|[467]\\d|[58][1-9]|9[1-6])|50[01])\\d{7}"],
                        ["4(?:1[24-8]|2[46])\\d{7}"],
                        ["800\\d{7}"],
                        ["900\\d{7}"]
                    ]
                ],
                VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "284", [
                    ["284(?:(?:229|774|8(?:52|6[459]))\\d|4(?:22\\d|9(?:[45]\\d|6[0-5])))\\d{3}"],
                    ["284(?:(?:3(?:0[0-3]|4[0-7]|68|9[34])|54[0-57])\\d|4(?:(?:4[0-6]|68)\\d|9(?:6[6-9]|9\\d)))\\d{3}"],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                ]],
                VI: ["1", "011", "(?:(?:34|90)0|[58]\\d\\d)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "340", [
                    ["340(?:2(?:01|2[06-8]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}"],
                    [""],
                    ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
                    ["900[2-9]\\d{6}"],
                    ["5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}"]
                ]],
                VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|(?:[16]\\d?|[78])\\d{6}", [7, 8, 9, 10],
                    [
                        ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1"],
                        ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"]],
                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1"],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1"],
                        ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1"]
                    ], "0", 0, 0, 0, 1, 0, [
                        ["2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|8[2-7]|9[0-4679])\\d{7}", [10]],
                        ["(?:(?:3\\d|7[06-9])\\d|5(?:2[238]|[689]\\d)|8(?:[1-58]\\d|6[5-9]|9[689])|9(?:[0-8]\\d|9[013-9]))\\d{6}", [9]],
                        ["1800\\d{4,6}", [8, 9, 10]],
                        ["1900\\d{4,6}", [8, 9, 10]], 0, 0, ["(?:[17]99|69\\d\\d?|80\\d)\\d{4}", [7, 8]], 0, ["672\\d{6}", [9]]
                    ]
                ],
                VU: ["678", "00", "(?:(?:[23]|(?:[57]\\d|90)\\d)\\d|[48]8)\\d{3}", [5, 7],
                    [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:(?:2[02-9]|88)\\d|3(?:[4-7]\\d|8[0-8])|48[4-9])\\d\\d", [5]],
                        ["(?:5(?:[0-689]\\d|7[2-5])|7[013-7]\\d)\\d{4}", [7]], 0, 0, 0, 0, ["(?:3[03]|900\\d)\\d{3}"], 0, ["90[1-9]\\d{4}", [7]]
                    ]
                ],
                WF: ["681", "00", "(?:[45]0|68|72|8\\d)\\d{4}", [6],
                    [
                        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[4-8]"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:50|68|72)\\d{4}"],
                        ["(?:50|68|72|8[23])\\d{4}"]
                    ]
                ],
                WS: ["685", "0", "(?:[2-6]|8\\d(?:\\d{4})?)\\d{4}|[78]\\d{6}", [5, 6, 7, 10],
                    [
                        ["(\\d{5})", "$1", ["[2-6]"]],
                        ["(\\d{3})(\\d{3,7})", "$1 $2", ["8"]],
                        ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                    ], 0, 0, 0, 0, 0, 0, [
                        ["(?:[2-5]\\d|6[1-9])\\d{3}", [5]],
                        ["(?:7[25-7]|8(?:[3-7]|9\\d{3}))\\d{5}", [7, 10]],
                        ["800\\d{3}", [6]]
                    ]
                ],
                XK: ["383", "00", "(?:[23]\\d{2,3}|4\\d\\d|[89]00)\\d{5}", [8, 9],
                    [
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
                        ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:2[89]|39)0\\d{6}|[23][89]\\d{6}"],
                        ["4[3-79]\\d{6}", [8]],
                        ["800\\d{5}", [8]],
                        ["900\\d{5}", [8]]
                    ]
                ],
                YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9],
                    [
                        ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["17\\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}", [7, 8]],
                        ["7[0137]\\d{7}", [9]]
                    ]
                ],
                YT: ["262", "00", "(?:(?:26|63)9|80\\d)\\d{6}", [9], 0, "0", 0, 0, 0, 0, "269|63", [
                    ["269(?:0[67]|5[01]|6\\d|[78]0)\\d{4}"],
                    ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|[45]0|9[04-79])\\d{4}"],
                    ["80\\d{7}"]
                ]],
                ZA: ["27", "00", "[1-9]\\d{8}|8\\d{4,7}", [5, 6, 7, 8, 9],
                    [
                        ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}", [9]],
                        ["(?:6\\d|7[0-46-9]|8[1-5])\\d{7}|8[1-4]\\d{3,6}"],
                        ["80\\d{7}", [9]],
                        ["(?:86[2-9]|9[0-2]\\d)\\d{6}", [9]], 0, 0, ["861\\d{6}", [9]], 0, ["87\\d{7}", [9]],
                        ["860\\d{6}", [9]]
                    ]
                ],
                ZM: ["260", "00", "(?:(?:21|76|9\\d)\\d|800)\\d{6}", [9],
                    [
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                        ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["21[1-8]\\d{6}"],
                        ["(?:76|9[5-8])\\d{7}"],
                        ["800\\d{6}"]
                    ]
                ],
                ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10],
                    [
                        ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
                        ["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8|[78])|3(?:[09]8|17|3[78]|[78])|5[15][78]|6(?:[29]8|37|[68][78]|75)"], "0$1"],
                        ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
                        ["(\\d{2})(\\d{7})", "$1 $2", ["2(?:[05-79]2|4)|(?:39|5[45]|6[15-8])2|8[13-59]", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
                        ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
                        ["(\\d{2})(\\d{3,5})", "$1 $2", ["[16]|2(?:[0-256]|9[0-79])|3(?:[09][0-79]|1[0-689]|[24-6]|3[0-69])|5[0-35-9]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29|[35]"], "0$1"],
                        ["(\\d{4})(\\d{3,5})", "$1 $2", ["[25]"], "0$1"]
                    ], "0", 0, 0, 0, 0, 0, [
                        ["(?:1(?:(?:3\\d|9)\\d|[4-8])|2(?:(?:(?:0(?:2[014]|5)|(?:2[0157]|31|84|9)\\d\\d|[56](?:[14]\\d\\d|20)|7(?:[089]|2[03]|[35]\\d\\d))\\d|4(?:2\\d\\d|8))\\d|1(?:2|[39]\\d{4}))|3(?:(?:123|(?:29\\d|92)\\d)\\d\\d|7(?:[19]|[56]\\d))|(?:4\\d\\d|9[2-9])\\d\\d?|5(?:0|1[2-478]|26|[37]2|4(?:2\\d{3}|83)|5(?:25\\d\\d|[78])|[689]\\d)|6(?:(?:[16-8]21|28|52[013])\\d\\d|[39])|8(?:[1349]28|523)\\d\\d)\\d{3}|(?:(?:2(?:(?:(?:0|8[146])\\d|7[1-7])\\d|2(?:[278]\\d|92)|58(?:2\\d|3))|3(?:[26]|9\\d{3})|5(?:4\\d|5)\\d\\d)\\d|6(?:(?:(?:[0-246]|[78]\\d)\\d|37)\\d|5[2-8]))\\d\\d|(?:2(?:[569]\\d|8[2-57-9])|3(?:[013-59]\\d|8[37])|6[89]8)\\d{3}"],
                        ["(?:7(?:1\\d|3[2-9]|7[1-9]|8[2-5])|8644)\\d{6}", [9, 10]],
                        ["80(?:[01]\\d|20|8[0-8])\\d{3}", [7]], 0, 0, 0, 0, 0, ["86(?:1[12]|30|55|77|8[368])\\d{6}", [10]]
                    ]
                ],
                "001": ["979", 0, "\\d{9}", [9],
                    [
                        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3"]
                    ], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["\\d{9}"]]
                ]
            }
        }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(d, t, e) {
            e || (e = t, t = void 0);
            return new $.default(t, e).input(d)
        };
        var r, n = e(15),
            $ = (r = n) && r.__esModule ? r : {
                default: r
            }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(d, t, e) {
            if (t[d]) return new $.default(d, t[d], e)
        };
        var r, n = e(5),
            $ = (r = n) && r.__esModule ? r : {
                default: r
            }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            var d = (0, n.normalizeArguments)(arguments),
                t = d.text,
                e = d.options,
                r = d.metadata,
                $ = new a.default(t, e, r);
            return function(d, t, e) {
                t in d ? Object.defineProperty(d, t, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : d[t] = e;
                return d
            }({}, Symbol.iterator, function() {
                return {
                    next: function() {
                        return $.hasNext() ? {
                            done: !1,
                            value: $.next()
                        } : {
                            done: !0
                        }
                    }
                }
            })
        };
        var r, n = e(6),
            $ = e(7),
            a = (r = $) && r.__esModule ? r : {
                default: r
            }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LEAD_CLASS = void 0, t.default = function(d, t, e, r) {
            if (!u.test(d) || s.test(d)) return;
            if ("POSSIBLE" !== r) {
                if (t > 0 && !i.test(d)) {
                    var n = e[t - 1];
                    if ((0, $.isInvalidPunctuationSymbol)(n) || (0, $.isLatinLetter)(n)) return !1
                }
                var a = t + d.length;
                if (a < e.length) {
                    var o = e[a];
                    if ((0, $.isInvalidPunctuationSymbol)(o) || (0, $.isLatinLetter)(o)) return !1
                }
            }
            return !0
        };
        var r = e(1),
            n = e(4),
            $ = e(16),
            a = t.LEAD_CLASS = "[(\\[ï¼ˆï¼»" + r.PLUS_CHARS + "]",
            i = new RegExp("^" + a),
            o = (0, n.limit)(0, 3),
            u = new RegExp("^(?:[(\\[ï¼ˆï¼»])?(?:[^(\\[ï¼ˆï¼»)\\]ï¼‰ï¼½]+[)\\]ï¼‰ï¼½])?[^(\\[ï¼ˆï¼»)\\]ï¼‰ï¼½]+(?:[(\\[ï¼ˆï¼»][^(\\[ï¼ˆï¼»)\\]ï¼‰ï¼½]+[)\\]ï¼‰ï¼½])" + o + "[^(\\[ï¼ˆï¼»)\\]ï¼‰ï¼½]*$"),
            s = /\d{1,5}-+\d{1,5}\s{0,4}\(\d{1,4}/
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(d, t, e) {
            if (r.test(d)) return !1;
            if (n.test(d)) {
                var a = e.slice(t + d.length);
                if ($.test(a)) return !1
            }
            return !0
        };
        var r = /(?:(?:[0-3]?\d\/[01]?\d)|(?:[01]?\d\/[0-3]?\d))\/(?:[12]\d)?\d{2}/,
            n = /[12]\d{3}[-/]?[01]\d[-/]?[0-3]\d +[0-2]\d$/,
            $ = /^:[0-5]\d/
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(d) {
            return (0, r.trimAfterFirstMatch)(n, d)
        };
        var r = e(4),
            n = /[\\/] *x/
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.containsMoreThanOneSlashInNationalNumber = u;
        var r = a(e(8)),
            n = a(e(10)),
            $ = e(4);

        function a(d) {
            return d && d.__esModule ? d : {
                default: d
            }
        }

        function i(d, t, e) {
            for (var r = 0; r < t.length - 1; r++) {
                var $ = t.charAt(r);
                if ("x" === $ || "X" === $) {
                    var a = t.charAt(r + 1);
                    if ("x" === a || "X" === a) {
                        if (r++, util.isNumberMatch(d, t.substring(r)) != MatchType.NSN_MATCH) return !1
                    } else if ((0, n.default)(t.substring(r)) !== d.ext) return !1
                }
            }
            return !0
        }

        function o(d, t) {
            if ("FROM_DEFAULT_COUNTRY" != d.getCountryCodeSource()) return !0;
            var e = util.getRegionCodeForCountryCode(d.getCountryCode()),
                r = util.getMetadataForRegion(e);
            if (null == r) return !0;
            var n = util.getNationalSignificantNumber(d),
                $ = util.chooseFormattingPatternForNumber(r.numberFormats(), n);
            if ($ && $.getNationalPrefixFormattingRule().length > 0) {
                if ($.getNationalPrefixOptionalWhenFormatting()) return !0;
                if (PhoneNumberUtil.formattingRuleHasFirstGroupOnly($.getNationalPrefixFormattingRule())) return !0;
                var a = PhoneNumberUtil.normalizeDigitsOnly(d.getRawInput());
                return util.maybeStripNationalPrefixAndCarrierCode(a, r, null)
            }
            return !0
        }

        function u(d, t) {
            var e = t.indexOf("/");
            if (e < 0) return !1;
            var r = t.indexOf("/", e + 1);
            return !(r < 0) && (!(d.getCountryCodeSource() === CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN || d.getCountryCodeSource() === CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN) || PhoneNumberUtil.normalizeDigitsOnly(t.substring(0, e)) !== String(d.getCountryCode()) || t.slice(r + 1).indexOf("/") >= 0)
        }

        function s(d, t, e, r) {
            var n = normalizeDigits(t, !0),
                $ = l(e, d, null);
            if (r(e, d, n, $)) return !0;
            var a = MetadataManager.getAlternateFormatsForCountry(d.getCountryCode());
            if (a) {
                var i = a.numberFormats(),
                    o = Array.isArray(i),
                    u = 0;
                for (i = o ? i : i[Symbol.iterator]();;) {
                    var s;
                    if (o) {
                        if (u >= i.length) break;
                        s = i[u++]
                    } else {
                        if ((u = i.next()).done) break;
                        s = u.value
                    }
                    if (r(e, d, n, $ = l(e, d, s))) return !0
                }
            }
            return !1
        }

        function l(d, t, e) {
            if (e) {
                var r = util.getNationalSignificantNumber(t);
                return util.formatNsnUsingPattern(r, e, "RFC3966", d).split("-")
            }
            var n = formatNumber(t, "RFC3966", d),
                $ = n.indexOf(";");
            $ < 0 && ($ = n.length);
            var a = n.indexOf("-") + 1;
            return n.slice(a, $).split("-")
        }

        function f(d, t, e, r) {
            var n = e.split(NON_DIGITS_PATTERN),
                a = t.hasExtension() ? n.length - 2 : n.length - 1;
            if (1 == n.length || n[a].contains(util.getNationalSignificantNumber(t))) return !0;
            for (var i = r.length - 1; i > 0 && a >= 0;) {
                if (n[a] !== r[i]) return !1;
                i--, a--
            }
            return a >= 0 && (0, $.endsWith)(n[a], r[0])
        }

        function c(d, t, e, r) {
            var n = 0;
            if (t.getCountryCodeSource() !== CountryCodeSource.FROM_DEFAULT_COUNTRY) {
                var a = String(t.getCountryCode());
                n = e.indexOf(a) + a.length()
            }
            for (var i = 0; i < r.length; i++) {
                if ((n = e.indexOf(r[i], n)) < 0) return !1;
                if (n += r[i].length(), 0 == i && n < e.length()) {
                    var o = util.getRegionCodeForCountryCode(t.getCountryCode());
                    if (null != util.getNddPrefixForRegion(o, !0) && Character.isDigit(e.charAt(n))) {
                        var u = util.getNationalSignificantNumber(t);
                        return (0, $.startsWith)(e.slice(n - r[i].length), u)
                    }
                }
            }
            return e.slice(n).contains(t.getExtension())
        }
        t.default = {
            POSSIBLE: function(d, t, e) {
                return !0
            },
            VALID: function(d, t, e) {
                return !(!(0, r.default)(d, void 0, e) || !i(d, t.toString(), e))
            },
            STRICT_GROUPING: function(d, t, e) {
                var n = t.toString();
                return !(!(0, r.default)(d, void 0, e) || !i(d, n, e) || u(d, n) || !o(d, e)) && s(d, t, e, c)
            },
            EXACT_GROUPING: function(d, t, e) {
                var n = t.toString();
                return !(!(0, r.default)(d, void 0, e) || !i(d, n, e) || u(d, n) || !o(d, e)) && s(d, t, e, f)
            }
        }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(d, t, e) {
            var r = new $.default(d, t, e),
                n = [];
            for (; r.hasNext();) n.push(r.next());
            return n
        };
        var r, n = e(7),
            $ = (r = n) && r.__esModule ? r : {
                default: r
            }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            var d = (0, a.normalizeArguments)(arguments),
                t = d.text,
                e = d.options,
                r = d.metadata;
            return (0, $.default)(t, e, r)
        };
        var r, n = e(30),
            $ = (r = n) && r.__esModule ? r : {
                default: r
            },
            a = e(6)
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(d, t, e) {
            t && t.defaultCountry && !(0, $.isSupportedCountry)(t.defaultCountry, e) && (t = i({}, t, {
                defaultCountry: void 0
            }));
            try {
                return (0, r.default)(d, t, e)
            } catch (d) {
                if (!(d instanceof n.default)) throw d
            }
        };
        var r = a(e(21)),
            n = a(e(14)),
            $ = e(0);

        function a(d) {
            return d && d.__esModule ? d : {
                default: d
            }
        }
        var i = Object.assign || function(d) {
            for (var t = 1; t < arguments.length; t++) {
                var e = arguments[t];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (d[r] = e[r])
            }
            return d
        }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            var d = (0, n.normalizeArguments)(arguments),
                t = d.text,
                e = d.options,
                r = d.metadata;
            return (0, a.default)(t, e, r)
        };
        var r, n = e(6),
            $ = e(32),
            a = (r = $) && r.__esModule ? r : {
                default: r
            }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(d, t) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = arguments[3];
            return d.country === t && (0, $.default)(d, e, r)
        };
        var r, n = e(8),
            $ = (r = n) && r.__esModule ? r : {
                default: r
            }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = e(0);
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return r.getCountryCallingCode
            }
        })
    }, function(d, t) {
        d.exports = function(d, t) {
            for (var e = d.split("."), r = t.split("."), n = 0; n < 3; n++) {
                var $ = Number(e[n]),
                    a = Number(r[n]);
                if ($ > a) return 1;
                if (a > $) return -1;
                if (!isNaN($) && isNaN(a)) return 1;
                if (isNaN($) && !isNaN(a)) return -1
            }
            return 0
        }
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = e(14);
        Object.defineProperty(t, "ParseError", {
            enumerable: !0,
            get: function() {
                return m(r).default
            }
        });
        var n = e(6);
        Object.defineProperty(t, "parsePhoneNumber", {
            enumerable: !0,
            get: function() {
                return m(n).default
            }
        });
        var $ = e(33);
        Object.defineProperty(t, "parsePhoneNumberFromString", {
            enumerable: !0,
            get: function() {
                return m($).default
            }
        });
        var a = e(31);
        Object.defineProperty(t, "findNumbers", {
            enumerable: !0,
            get: function() {
                return m(a).default
            }
        });
        var i = e(25);
        Object.defineProperty(t, "searchNumbers", {
            enumerable: !0,
            get: function() {
                return m(i).default
            }
        });
        var o = e(7);
        Object.defineProperty(t, "PhoneNumberMatcher", {
            enumerable: !0,
            get: function() {
                return m(o).default
            }
        });
        var u = e(15);
        Object.defineProperty(t, "AsYouType", {
            enumerable: !0,
            get: function() {
                return m(u).default
            }
        });
        var s = e(0);
        Object.defineProperty(t, "Metadata", {
            enumerable: !0,
            get: function() {
                return m(s).default
            }
        }), Object.defineProperty(t, "isSupportedCountry", {
            enumerable: !0,
            get: function() {
                return s.isSupportedCountry
            }
        }), Object.defineProperty(t, "getCountryCallingCode", {
            enumerable: !0,
            get: function() {
                return s.getCountryCallingCode
            }
        }), Object.defineProperty(t, "getExtPrefix", {
            enumerable: !0,
            get: function() {
                return s.getExtPrefix
            }
        });
        var l = e(24);
        Object.defineProperty(t, "getExampleNumber", {
            enumerable: !0,
            get: function() {
                return m(l).default
            }
        });
        var f = e(23);
        Object.defineProperty(t, "formatIncompletePhoneNumber", {
            enumerable: !0,
            get: function() {
                return m(f).default
            }
        });
        var c = e(11);
        Object.defineProperty(t, "parseIncompletePhoneNumber", {
            enumerable: !0,
            get: function() {
                return m(c).default
            }
        }), Object.defineProperty(t, "parsePhoneNumberCharacter", {
            enumerable: !0,
            get: function() {
                return c.parsePhoneNumberCharacter
            }
        });
        var h = e(10);
        Object.defineProperty(t, "parseDigits", {
            enumerable: !0,
            get: function() {
                return m(h).default
            }
        });
        var y = e(9);

        function m(d) {
            return d && d.__esModule ? d : {
                default: d
            }
        }
        Object.defineProperty(t, "parseRFC3966", {
            enumerable: !0,
            get: function() {
                return y.parseRFC3966
            }
        }), Object.defineProperty(t, "formatRFC3966", {
            enumerable: !0,
            get: function() {
                return y.formatRFC3966
            }
        })
    }, function(d, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.formatRFC3966 = t.parseRFC3966 = t.parseDigits = t.parsePhoneNumberCharacter = t.parseIncompletePhoneNumber = t.ParseError = void 0;
        var r = e(37);
        Object.defineProperty(t, "ParseError", {
            enumerable: !0,
            get: function() {
                return r.ParseError
            }
        }), Object.defineProperty(t, "parseIncompletePhoneNumber", {
            enumerable: !0,
            get: function() {
                return r.parseIncompletePhoneNumber
            }
        }), Object.defineProperty(t, "parsePhoneNumberCharacter", {
            enumerable: !0,
            get: function() {
                return r.parsePhoneNumberCharacter
            }
        }), Object.defineProperty(t, "parseDigits", {
            enumerable: !0,
            get: function() {
                return r.parseDigits
            }
        }), Object.defineProperty(t, "parseRFC3966", {
            enumerable: !0,
            get: function() {
                return r.parseRFC3966
            }
        }), Object.defineProperty(t, "formatRFC3966", {
            enumerable: !0,
            get: function() {
                return r.formatRFC3966
            }
        }), t.parsePhoneNumber = function() {
            return i(r.parsePhoneNumber, arguments)
        }, t.parsePhoneNumberFromString = function() {
            return i(r.parsePhoneNumberFromString, arguments)
        }, t.findNumbers = function() {
            return i(r.findNumbers, arguments)
        }, t.searchNumbers = function() {
            return i(r.searchNumbers, arguments)
        }, t.PhoneNumberMatcher = o, t.AsYouType = u, t.isSupportedCountry = function() {
            return i(r.isSupportedCountry, arguments)
        }, t.getCountryCallingCode = function() {
            return i(r.getCountryCallingCode, arguments)
        }, t.getExtPrefix = function(d) {
            return i(r.getExtPrefix, arguments)
        }, t.getExampleNumber = function() {
            return i(r.getExampleNumber, arguments)
        }, t.formatIncompletePhoneNumber = function() {
            return i(r.formatIncompletePhoneNumber, arguments)
        };
        var n, $ = e(22),
            a = (n = $) && n.__esModule ? n : {
                default: n
            };

        function i(d, t) {
            var e = Array.prototype.slice.call(t);
            return e.push(a.default), d.apply(this, e)
        }

        function o(d, t) {
            return r.PhoneNumberMatcher.call(this, d, t, a.default)
        }

        function u(d) {
            return r.AsYouType.call(this, d, a.default)
        }
        o.prototype = Object.create(r.PhoneNumberMatcher.prototype, {}), o.prototype.constructor = o, u.prototype = Object.create(r.AsYouType.prototype, {}), u.prototype.constructor = u
    }])
});;
/*var ajaxurl = "https:\/\/intetics.com\/wp-admin\/admin-ajax.php"; */
jQuery(document).ready(function($) {
    var contactForm = $('.wpcf7-form'),
        inputs = contactForm.find('.form-field input, .form-field textarea'),
        scrollingTag, ajaxObj, acceptPolicyCheckbox = contactForm.find('#accept-policy input'),
        submitBtn = $('.wpcf7-submit'),
        textareaField = contactForm.find('.form-field textarea'),
        textareaMaxLength = 0,
        languageCode = getCookie('_icl_current_language'),
        lengthLimitMsg, invalidInternationalPhoneMsg;
    if (textareaField.length !== 0) {
        textareaMaxLength = (typeof textareaField.attr('maxlength') !== 'undefined') ? parseInt(textareaField.attr('maxlength'), 10) : 0;
    }
    if (typeof languageCode !== 'undefined' && languageCode == 'de') {
        lengthLimitMsg = '<p class="notice-field-msg">Sie haben die maximale Anzahl von Zeichen im Nachrichtenfeld erreicht. Bitte verwenden Sie <a href="mailto:odt@intetics.com">odt@intetics.com</a>, um eine grÃ¶ÃŸere Nachricht zu senden.</p>';
        invalidInternationalPhoneMsg = '<p class="invalid-field-msg">Bitte geben Sie eine gÃ¼ltige Telefonnummer ein</p>';
    } else {
        lengthLimitMsg = '<p class="notice-field-msg">You\'ve reached the maximum number of characters in the message field. Please use <a href="mailto:odt@intetics.com">odt@intetics.com</a> to send a larger message.</p>';
        invalidInternationalPhoneMsg = '<p class="invalid-field-msg">Please enter a valid phone number</p>';
    }
    (function detectBrowser() {
        var ua = navigator.userAgent.toLowerCase();
        var safari = ua.indexOf('safari');
        scrollingTag = $('html');
        if (/Edge/.test(navigator.userAgent) || (safari != -1 && !/chrome/.test(ua))) {
            scrollingTag = $('body');
        } else {
            scrollingTag = $('html');
        }
    })();
    $(window).load(function() {
        inputs.each(function() {
            var inputField = $(this);
            if ($(this).val().length !== 0) {
                inputField.parent().siblings('.form-field__label').addClass('focused');
            }
        });
        submitBtn.prop('disabled', true);
    });
    $('.contact-us-page .wpcf7').on('wpcf7mailsent', function() {
        $('.form-field__label').not('.custom-phone-label').removeClass('focused');
        $(this).find('.notice-field-msg').remove();
        var ajaxLoader = submitBtn.siblings('.ajax-loader');
        submitBtn.prop('disabled', true);
        ajaxLoader.css('visibility', 'hidden');
        submitBtn.show();
        $('html, body').animate({
            scrollTop: scrollingTag.scrollTop() + 75
        }, 500);
    });
    $('#startup-form .wpcf7, #rpa-form .wpcf7').on('wpcf7mailsent', function() {
        $('.form-field__label').not('.custom-phone-label').removeClass('focused');
        $(this).find('.notice-field-msg').remove();
        var ajaxLoader = submitBtn.siblings('.ajax-loader');
        submitBtn.prop('disabled', true);
        ajaxLoader.css('visibility', 'hidden');
        submitBtn.show();
    });
    submitBtn.on('click', function(e) {
        e.preventDefault();
        var ajaxLoader = submitBtn.siblings('.ajax-loader');
        submitBtn.hide();
        ajaxLoader.css('visibility', 'visible');
        $('.wpcf7-response-output').css('display', 'none');

        if (typeof ajaxObj === 'undefined') {
            if (isFormValid()) {
                contactForm.submit();
            } else {
                ajaxLoader.css('visibility', 'hidden');
                submitBtn.show();
            }
        } else {
            ajaxObj.done(function() {
                if (isFormValid()) {
                    contactForm.submit();
                } else {
                    ajaxLoader.css('visibility', 'hidden');
                    submitBtn.show();
                }
            });
        }
    });
    inputs.on('focusin', function() {
        $(this).parent().siblings('.form-field__label').addClass('focused');
        $(this).removeClass('invalid-value');
        $(this).siblings('.invalid-field-msg').remove();
    });
    inputs.on('focusout', function() {
        var inputField = $(this);
        if (inputField.attr('name') === 'your-international-phone') {
            parseInternationalPhone(inputField);
        }
        if (inputField.val().length === 0) {
            inputField.parent().siblings('.form-field__label').removeClass('focused');
        }
        var isRequired = inputField.attr('aria-required') == 'true';
        if (isRequired || inputField.val().length !== 0) {
            inputField.prop('disabled', true);
            isFieldValueValid(inputField, isRequired);
            ajaxObj.done(function() {
                inputField.prop('disabled', false);
                if (isFormValid() && acceptPolicyCheckbox.is(':checked')) {
                    submitBtn.prop('disabled', false);
                } else {
                    submitBtn.prop('disabled', true);
                }
            });
        }
    });
    acceptPolicyCheckbox.on('change', function() {
        var isValidForm;
        if ($(this).is(':checked')) {
            if (typeof ajaxObj === 'undefined') {
                isValidForm = isFormValid();
                if (isValidForm) {
                    submitBtn.prop('disabled', false);
                }
            } else {
                ajaxObj.done(function() {
                    isValidForm = isFormValid();
                    if (isValidForm) {
                        submitBtn.prop('disabled', false);
                    }
                });
            }
        } else {
            submitBtn.prop('disabled', true);
        }
    });
    if (textareaMaxLength !== 0) {
        textareaField.on('keyup input paste cut', function() {
            var countEnteredSymbols = $(this).val().length;
            if (countEnteredSymbols >= textareaMaxLength) {
                if ($(this).siblings('.notice-field-msg').length == 0) {
                    $(this).after(lengthLimitMsg);
                }
            } else {
                $(this).siblings('.notice-field-msg').remove();
            }
        });
    }
    var chosenPhoneCode = contactForm.find('.form-field .chosen-country'),
        listOfCountries = chosenPhoneCode.siblings('.list-of-codes'),
        countryItem = listOfCountries.find('.country-item'),
        customPhoneInput = $('#custom-phone');
    chosenPhoneCode.click(function() {
        $(this).find('.arrow').toggleClass('open');
        listOfCountries.toggleClass('active');
        if (!listOfCountries.hasClass('active')) {
            if (customPhoneInput.val().length !== 0) {
                customPhoneInput.parent().siblings('.form-field__label').addClass('focused');
            }
            customPhoneInput.removeClass('invalid-value');
            customPhoneInput.siblings('.invalid-field-msg').remove();
        }
    });
    countryItem.click(function() {
        var chosenCountryCode = chosenPhoneCode.data('country-iso'),
            currentCountryCode = $(this).data('country-iso'),
            className = 'flag-',
            phoneCode = $(this).data('phone-code');
        chosenPhoneCode.data('country-iso', currentCountryCode);
        chosenPhoneCode.find('.flag').removeClass(className + chosenCountryCode).addClass(className + currentCountryCode);
        customPhoneInput.val(phoneCode);
        chosenPhoneCode.find('.arrow').removeClass('open');
        listOfCountries.removeClass('active');
        customPhoneInput.parent().siblings('.form-field__label').addClass('focused');
        customPhoneInput.removeClass('invalid-value');
        customPhoneInput.siblings('.invalid-field-msg').remove();
        if (isFormValid() && acceptPolicyCheckbox.is(':checked')) {
            submitBtn.prop('disabled', false);
        } else {
            submitBtn.prop('disabled', true);
        }
    });
    customPhoneInput.on('focusin', function() {
        chosenPhoneCode.find('.arrow').removeClass('open');
        listOfCountries.removeClass('active');
    });

    function parseInternationalPhone(phoneInput) {
        var enteredPhone = phoneInput.val();
        if (enteredPhone[0] !== '+') {
            enteredPhone = '+' + enteredPhone;
            phoneInput.val(enteredPhone);
        }
        var asYouType = new libphonenumber.AsYouType(chosenPhoneCode.data('country-iso').toUpperCase()),
            parsedInput = asYouType.input(enteredPhone);
        if (enteredPhone.length > 1 && parsedInput.length !== 0) {
            phoneInput.val(parsedInput);
        }
    }
    listOfCountries.mouseenter(function() {
        scrollingTag.unbind("mousewheel");
        scrollingTag.unbind("DOMMouseScroll");
        window.localStorage.setItem("detectAnchor", true);
        scrollingTag.smoothWheel.destroy();
    });
    listOfCountries.mouseleave(function() {
        scrollingTag.smoothWheel();
    });

    function isFormValid() {
        var requiredInputs = $('input[aria-required="true"], textarea[aria-required="true"]'),
            invalidFields = $('input[field-is-valid="false"], textarea[field-is-valid="false"]'),
            isValidForm = true;
        requiredInputs.each(function() {
            var value = $(this).val();
            if (value.length === 0) {
                isValidForm = false;
                return false;
            }
            if ($(this).attr('name') === 'your-international-phone') {
                var activePhoneCode = listOfCountries.find('[data-country-iso="' + chosenPhoneCode.data('country-iso') + '"]').data('phone-code');
                if (value === activePhoneCode) {
                    isValidForm = false;
                    return false;
                }
            }
        });
        if (invalidFields.length !== 0) {
            isValidForm = false;
        }
        return isValidForm;
    }

    function isFieldValueValid(inputField, isRequired) {
        var fieldValue = $.trim(inputField.val()),
            fieldName = inputField.attr('name'),
            fieldType = inputField.is('input') ? inputField.attr('type') : '',
            valueLength = fieldValue.length,
            minLength = (typeof inputField.attr('minlength') !== 'undefined') ? inputField.attr('minlength') : '',
            maxLength = (typeof inputField.attr('maxlength') !== 'undefined') ? inputField.attr('maxlength') : '';
        if (fieldName === 'your-international-phone') {
            var parsedNumber = new libphonenumber.parsePhoneNumberFromString(fieldValue, chosenPhoneCode.data('country-iso').toUpperCase()),
                isValidInternationalPhone = true;
            if ($.isEmptyObject(parsedNumber) || !parsedNumber.isValid()) {
                isValidInternationalPhone = false;
            }
        }
        ajaxObj = $.post(ajaxurl, {
            'action': 'verify_contact_form_field',
            'fieldType': fieldType,
            'fieldValue': fieldValue,
            'fieldName': fieldName,
            'isRequired': isRequired,
            'valueLength': valueLength,
            'minLength': minLength,
            'maxLength': maxLength
        }, function(response) {
            var verification = JSON.parse(response);
            if (verification.valid) {
                if (fieldName === 'your-international-phone' && !isValidInternationalPhone) {
                    inputField.siblings('.notice-field-msg').remove();
                    if (!inputField.hasClass('invalid-value')) {
                        inputField.addClass('invalid-value');
                        inputField.after(invalidInternationalPhoneMsg);
                        inputField.attr('field-is-valid', false);
                    }
                } else {
                    inputField.attr('field-is-valid', true);
                }
            } else {
                var errorElem = '<p class="invalid-field-msg">' + verification.message + '</p>';
                inputField.siblings('.notice-field-msg').remove();
                if (!inputField.hasClass('invalid-value')) {
                    inputField.addClass('invalid-value');
                    inputField.after(errorElem);
                    inputField.attr('field-is-valid', false);
                }
            }
        });
        return true;
    }

    function getCookie(name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
});
(function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl + '&gtm_auth=jSfqDAI7awR5EQdcLHBHsg&gtm_preview=env-2&gtm_cookies_win=x';
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-K7LWZ3');
! function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '179048616140217');
fbq('track', 'PageView');
! function(_window, _document) {
    var OB_ADV_ID = '004084ad01eac99858bbbb7ef99c725f20';
    if (_window.obApi) {
        var toArray = function(object) {
            return Object.prototype.toString.call(object) === '[object Array]' ? object : [object];
        };
        _window.obApi.marketerId = toArray(_window.obApi.marketerId).concat(toArray(OB_ADV_ID));
        return;
    }
    var api = _window.obApi = function() {
        api.dispatch ? api.dispatch.apply(api, arguments) : api.queue.push(arguments);
    };
    api.version = '1.1';
    api.loaded = true;
    api.marketerId = OB_ADV_ID;
    api.queue = [];
    var tag = _document.createElement('script');
    tag.async = true;
    tag.src = '//amplify.outbrain.com/cp/obtp.js';
    tag.type = 'text/javascript';
    var script = _document.getElementsByTagName('script')[0];
    script.parentNode.insertBefore(tag, script);
}(window, document);
obApi('track', 'PAGE_VIEW');
(function(h, o, t, j, a, r) {
    h.hj = h.hj || function() {
        (h.hj.q = h.hj.q || []).push(arguments)
    };
    h._hjSettings = {
        hjid: 1565476,
        hjsv: 6
    };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'AW-1010098503', {
    'send_page_view': false
});;
gtag('event', 'page_view', {
    'send_to': 'AW-1010098503',
    'dynx_itemid': 'replace with value',
    'dynx_itemid2': 'replace with value',
    'dynx_pagetype': 'replace with value',
    'dynx_totalvalue': 'replace with value'
});;
window.addEventListener('load', hidePreloader, false);

function hidePreloader() {
    document.querySelector('html').classList.add('loaded');
    document.querySelector('#preloader').classList.add('loaded');
};
var wpcf7 = {
    "apiSettings": {
        "root": "https:\/\/intetics.com\/wp-json\/contact-form-7\/v1",
        "namespace": "contact-form-7\/v1"
    },
    "recaptcha": {
        "messages": {
            "empty": "Please verify that you are not a robot."
        }
    },
    "cached": "1"
};
var wpcf7 = {
    "apiSettings": {
        "root": "https:\/\/intetics.com\/wp-json\/contact-form-7\/v1",
        "namespace": "contact-form-7\/v1"
    },
    "recaptcha": {
        "messages": {
            "empty": "Please verify that you are not a robot."
        }
    },
    "cached": "1"
};
(function($) {
    'use strict';
    if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
        return;
    }
    wpcf7 = $.extend({
        cached: 0,
        inputs: []
    }, wpcf7);
    $(function() {
        wpcf7.supportHtml5 = (function() {
            var features = {};
            var input = document.createElement('input');
            features.placeholder = 'placeholder' in input;
            var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
            $.each(inputTypes, function(index, value) {
                input.setAttribute('type', value);
                features[value] = input.type !== 'text';
            });
            return features;
        })();
        $('div.wpcf7 > form').each(function() {
            var $form = $(this);
            wpcf7.initForm($form);
            if (wpcf7.cached) {
                wpcf7.refill($form);
            }
        });
    });
    wpcf7.getId = function(form) {
        return parseInt($('input[name="_wpcf7"]', form).val(), 10);
    };
    wpcf7.initForm = function(form) {
        var $form = $(form);
        $form.submit(function(event) {
            if (typeof window.FormData !== 'function') {
                return;
            }
            wpcf7.submit($form);
            event.preventDefault();
        });
        $('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
        wpcf7.toggleSubmit($form);
        $form.on('click', '.wpcf7-acceptance', function() {
            wpcf7.toggleSubmit($form);
        });
        $('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function() {
            var name = $(this).attr('name');
            $form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
        $('.wpcf7-list-item.has-free-text', $form).each(function() {
            var $freetext = $(':input.wpcf7-free-text', this);
            var $wrap = $(this).closest('.wpcf7-form-control');
            if ($(':checkbox, :radio', this).is(':checked')) {
                $freetext.prop('disabled', false);
            } else {
                $freetext.prop('disabled', true);
            }
            $wrap.on('change', ':checkbox, :radio', function() {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
        if (!wpcf7.supportHtml5.placeholder) {
            $('[placeholder]', $form).each(function() {
                $(this).val($(this).attr('placeholder'));
                $(this).addClass('placeheld');
                $(this).focus(function() {
                    if ($(this).hasClass('placeheld')) {
                        $(this).val('').removeClass('placeheld');
                    }
                });
                $(this).blur(function() {
                    if ('' === $(this).val()) {
                        $(this).val($(this).attr('placeholder'));
                        $(this).addClass('placeheld');
                    }
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
            $form.find('input.wpcf7-date[type="date"]').each(function() {
                $(this).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date($(this).attr('min')),
                    maxDate: new Date($(this).attr('max'))
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
            $form.find('input.wpcf7-number[type="number"]').each(function() {
                $(this).spinner({
                    min: $(this).attr('min'),
                    max: $(this).attr('max'),
                    step: $(this).attr('step')
                });
            });
        }
        $('.wpcf7-character-count', $form).each(function() {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);
            var updateCount = function(target) {
                var $target = $(target);
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }
                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };
            $(':input[name="' + name + '"]', $form).each(function() {
                updateCount(this);
                $(this).keyup(function() {
                    updateCount(this);
                });
            });
        });
        $form.on('change', '.wpcf7-validates-as-url', function() {
            var val = $.trim($(this).val());
            if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }
            $(this).val(val);
        });
    };
    wpcf7.submit = function(form) {
        if (typeof window.FormData !== 'function') {
            return;
        }
        var $form = $(form);
        $('.ajax-loader', $form).addClass('is-active');
        $('[placeholder].placeheld', $form).each(function(i, n) {
            $(n).val('');
        });
        wpcf7.clearResponse($form);
        var formData = new FormData($form.get(0));
        var detail = {
            id: $form.closest('div.wpcf7').attr('id'),
            status: 'init',
            inputs: [],
            formData: formData
        };
        $.each($form.serializeArray(), function(i, field) {
            if ('_wpcf7' == field.name) {
                detail.contactFormId = field.value;
            } else if ('_wpcf7_version' == field.name) {
                detail.pluginVersion = field.value;
            } else if ('_wpcf7_locale' == field.name) {
                detail.contactFormLocale = field.value;
            } else if ('_wpcf7_unit_tag' == field.name) {
                detail.unitTag = field.value;
            } else if ('_wpcf7_container_post' == field.name) {
                detail.containerPostId = field.value;
            } else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
                var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
                detail.inputs.push({
                    name: owner + '-free-text',
                    value: field.value
                });
            } else if (field.name.match(/^_/)) {} else {
                detail.inputs.push(field);
            }
        });
        wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
        var ajaxSuccess = function(data, status, xhr, $form) {
            detail.id = $(data.into).attr('id');
            detail.status = data.status;
            detail.apiResponse = data;
            var $message = $('.wpcf7-response-output', $form);
            switch (data.status) {
                case 'validation_failed':
                    $.each(data.invalidFields, function(i, n) {
                        $(n.into, $form).each(function() {
                            wpcf7.notValidTip(this, n.message);
                            $('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
                            $('[aria-invalid]', this).attr('aria-invalid', 'true');
                        });
                    });
                    $message.addClass('wpcf7-validation-errors');
                    $form.addClass('invalid');
                    wpcf7.triggerEvent(data.into, 'invalid', detail);
                    break;
                case 'acceptance_missing':
                    $message.addClass('wpcf7-acceptance-missing');
                    $form.addClass('unaccepted');
                    wpcf7.triggerEvent(data.into, 'unaccepted', detail);
                    break;
                case 'spam':
                    $message.addClass('wpcf7-spam-blocked');
                    $form.addClass('spam');
                    $('[name="g-recaptcha-response"]', $form).each(function() {
                        if ('' === $(this).val()) {
                            var $recaptcha = $(this).closest('.wpcf7-form-control-wrap');
                            wpcf7.notValidTip($recaptcha, wpcf7.recaptcha.messages.empty);
                        }
                    });
                    wpcf7.triggerEvent(data.into, 'spam', detail);
                    break;
                case 'aborted':
                    $message.addClass('wpcf7-aborted');
                    $form.addClass('aborted');
                    wpcf7.triggerEvent(data.into, 'aborted', detail);
                    break;
                case 'mail_sent':
                    $message.addClass('wpcf7-mail-sent-ok');
                    $form.addClass('sent');
                    wpcf7.triggerEvent(data.into, 'mailsent', detail);
                    break;
                case 'mail_failed':
                    $message.addClass('wpcf7-mail-sent-ng');
                    $form.addClass('failed');
                    wpcf7.triggerEvent(data.into, 'mailfailed', detail);
                    break;
                default:
                    var customStatusClass = 'custom-' +
                        data.status.replace(/[^0-9a-z]+/i, '-');
                    $message.addClass('wpcf7-' + customStatusClass);
                    $form.addClass(customStatusClass);
            }
            wpcf7.refill($form, data);
            wpcf7.triggerEvent(data.into, 'submit', detail);
            if ('mail_sent' == data.status) {
                $form.each(function() {
                    this.reset();
                });
            }
            $form.find('[placeholder].placeheld').each(function(i, n) {
                $(n).val($(n).attr('placeholder'));
            });
            $message.html('').append(data.message).slideDown('fast');
            $message.attr('role', 'alert');
            $('.screen-reader-response', $form.closest('.wpcf7')).each(function() {
                var $response = $(this);
                $response.html('').attr('role', '').append(data.message);
                if (data.invalidFields) {
                    var $invalids = $('<ul></ul>');
                    $.each(data.invalidFields, function(i, n) {
                        if (n.idref) {
                            var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                        } else {
                            var $li = $('<li></li>').append(n.message);
                        }
                        $invalids.append($li);
                    });
                    $response.append($invalids);
                }
                $response.attr('role', 'alert').focus();
            });
        };
        $.ajax({
            type: 'POST',
            url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false
        }).done(function(data, status, xhr) {
            ajaxSuccess(data, status, xhr, $form);
            $('.ajax-loader', $form).removeClass('is-active');
        }).fail(function(xhr, status, error) {
            var $e = $('<div class="ajax-error"></div>').text(error.message);
            $form.after($e);
        });
    };
    wpcf7.triggerEvent = function(target, name, detail) {
        var $target = $(target);
        var event = new CustomEvent('wpcf7' + name, {
            bubbles: true,
            detail: detail
        });
        $target.get(0).dispatchEvent(event);
        $target.trigger('wpcf7:' + name, detail);
        $target.trigger(name + '.wpcf7', detail);
    };
    wpcf7.toggleSubmit = function(form, state) {
        var $form = $(form);
        var $submit = $('input:submit', $form);
        if (typeof state !== 'undefined') {
            $submit.prop('disabled', !state);
            return;
        }
        if ($form.hasClass('wpcf7-acceptance-as-validation')) {
            return;
        }
        $submit.prop('disabled', false);
        $('.wpcf7-acceptance', $form).each(function() {
            var $span = $(this);
            var $input = $('input:checkbox', $span);
            if (!$span.hasClass('optional')) {
                if ($span.hasClass('invert') && $input.is(':checked') || !$span.hasClass('invert') && !$input.is(':checked')) {
                    $submit.prop('disabled', true);
                    return false;
                }
            }
        });
    };
    wpcf7.notValidTip = function(target, message) {
        var $target = $(target);
        $('.wpcf7-not-valid-tip', $target).remove();
        $('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);
        if ($target.is('.use-floating-validation-tip *')) {
            var fadeOut = function(target) {
                $(target).not(':hidden').animate({
                    opacity: 0
                }, 'fast', function() {
                    $(this).css({
                        'z-index': -100
                    });
                });
            };
            $target.on('mouseover', '.wpcf7-not-valid-tip', function() {
                fadeOut(this);
            });
            $target.on('focus', ':input', function() {
                fadeOut($('.wpcf7-not-valid-tip', $target));
            });
        }
    };
    wpcf7.refill = function(form, data) {
        var $form = $(form);
        var refillCaptcha = function($form, items) {
            $.each(items, function(i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                $form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        };
        var refillQuiz = function($form, items) {
            $.each(items, function(i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                $form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        };
        if (typeof data === 'undefined') {
            $.ajax({
                type: 'GET',
                url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
                beforeSend: function(xhr) {
                    var nonce = $form.find(':input[name="_wpnonce"]').val();
                    if (nonce) {
                        xhr.setRequestHeader('X-WP-Nonce', nonce);
                    }
                },
                dataType: 'json'
            }).done(function(data, status, xhr) {
                if (data.captcha) {
                    refillCaptcha($form, data.captcha);
                }
                if (data.quiz) {
                    refillQuiz($form, data.quiz);
                }
            });
        } else {
            if (data.captcha) {
                refillCaptcha($form, data.captcha);
            }
            if (data.quiz) {
                refillQuiz($form, data.quiz);
            }
        }
    };
    wpcf7.clearResponse = function(form) {
        var $form = $(form);
        $form.removeClass('invalid spam sent failed');
        $form.siblings('.screen-reader-response').html('').attr('role', '');
        $('.wpcf7-not-valid-tip', $form).remove();
        $('[aria-invalid]', $form).attr('aria-invalid', 'false');
        $('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
        $('.wpcf7-response-output', $form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
    };
    wpcf7.apiSettings.getRoute = function(path) {
        var url = wpcf7.apiSettings.root;
        url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
        return url;
    };
})(jQuery);
(function() {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();
(function($) {
    'use strict';
    $(document).ready(function() {
        if ($('input[name="cmd"]').length > 0) {
            var cmdarray = ["_xclick", "_cart", "_oe-gift-certificate", "_xclick-subscriptions", "_xclick-auto-billing", "_xclick-payment-plan", "_donations", "_s-xclick"];
            if (cmdarray.indexOf($('input[name="cmd"]').val()) > -1) {
                if ($('input[name="bn"]').length > 0) {
                    $('input[name="bn"]').val("AngellEYE_SP_BM_WordPress");
                } else {
                    $('input[name="cmd"]').after("<input type='hidden' name='bn' value='AngellEYE_SP_BM_WordPress' />");
                }
            }
        }
    });
})(jQuery);
var ctcc_vars = {
    "expiry": "30",
    "method": "1",
    "version": "1"
};

function catapultSetCookie(cookieName, cookieValue, nDays) {
    var today = new Date();
    var expire = new Date();
    if (nDays == null || nDays == 0) nDays = 1;
    expire.setTime(today.getTime() + 3600000 * 24 * nDays);
    document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString() + "; path=/";
}

function catapultReadCookie(cookieName) {
    var theCookie = " " + document.cookie;
    var ind = theCookie.indexOf(" " + cookieName + "=");
    if (ind == -1) ind = theCookie.indexOf(";" + cookieName + "=");
    if (ind == -1 || cookieName == "") return "";
    var ind1 = theCookie.indexOf(";", ind + 1);
    if (ind1 == -1) ind1 = theCookie.length;
    return ctcc_vars.version == unescape(theCookie.substring(ind + cookieName.length + 2, ind1));
}

function catapultDeleteCookie(cookieName) {
    document.cookie = cookieName + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}

function catapultAcceptCookies() {
    catapultSetCookie('catAccCookies', ctcc_vars.version, ctcc_vars.expiry);
    jQuery("html").removeClass('has-cookie-bar');
    jQuery("html").css("margin-top", "0");
    jQuery("#catapult-cookie-bar").fadeOut();
}

function ctccCloseNotification() {
    catapultAcceptCookies();
}

function ctccFirstPage() {
    if (ctcc_vars.method) {
        catapultSetCookie('catAccCookies', ctcc_vars.version, ctcc_vars.expiry);
    }
}
jQuery(document).ready(function($) {
    $('.x_close').on('click', function() {
        catapultAcceptCookies();
    });
});
var cf7_extras = {
    "events": {
        "track-ga": [],
        "redirect-success": []
    },
    "forms": {
        "990": {
            "title": "Contact form",
            "redirect_url": ""
        }
    }
};
(function($) {
    if (!window.cf7_extras) {
        return;
    }
    var trackAnalyticsEvent = function(eventCategory, eventAction, eventTitle) {
        if ('function' === typeof ga) {
            ga('send', 'event', eventCategory, eventAction, eventTitle);
        } else if ('undefined' !== typeof _gaq) {
            _gaq.push(['_trackEvent', eventCategory, eventAction, eventTitle]);
        }
        if ('undefined' !== typeof _paq) {
            _paq.push(['trackEvent', eventCategory, eventAction, eventTitle]);
        }
    };
    var formEventEnabled = function(formId, eventName) {
        formId = parseInt(formId);
        if (!formId || !window.cf7_extras.events[eventName]) {
            return false;
        }
        if (-1 !== window.cf7_extras.events[eventName].indexOf(formId)) {
            return true;
        }
        return false;
    };
    var getFormConfig = function(formId) {
        formId = parseInt(formId);
        if (window.cf7_extras.forms && window.cf7_extras.forms[formId]) {
            return window.cf7_extras.forms[formId];
        }
        return false;
    }
    $(document).on('wpcf7:mailsent', function(event, form) {
        if (form.contactFormId && formEventEnabled(form.contactFormId, 'track-ga')) {
            var formConfig = getFormConfig(form.contactFormId);
            trackAnalyticsEvent('Contact Form', 'Sent', formConfig.title);
        }
    });
    $(document).on('wpcf7:mailfailed', function(event, form) {
        if (form.contactFormId && formEventEnabled(form.contactFormId, 'track-ga')) {
            var formConfig = getFormConfig(form.contactFormId);
            trackAnalyticsEvent('Contact Form', 'Error', formConfig.title);
        }
    });
    $(document).on('wpcf7:spam', function(event, form) {
        if (form.contactFormId && formEventEnabled(form.contactFormId, 'track-ga')) {
            var formConfig = getFormConfig(form.contactFormId);
            trackAnalyticsEvent('Contact Form', 'Spam', formConfig.title);
        }
    });
    $(document).on('wpcf7:submit', function(event, form) {
        if (form.contactFormId && formEventEnabled(form.contactFormId, 'track-ga')) {
            var formConfig = getFormConfig(form.contactFormId);
            trackAnalyticsEvent('Contact Form', 'Submit', formConfig.title);
        }
        if (form.contactFormId && 'mail_sent' === form.status && formEventEnabled(form.contactFormId, 'redirect-success')) {
            var formConfig = getFormConfig(form.contactFormId);
            if (formConfig.redirect_url) {
                window.location = formConfig.redirect_url;
            }
        }
    });
})(jQuery);
jQuery(document).ready(function($) {
    if (!catapultReadCookie("catAccCookies")) {
        $("html").addClass("has-cookie-bar");
        $("html").addClass("cookie-bar-bottom-bar");
        $("html").addClass("cookie-bar-bar");
    }
    ctccFirstPage();
});
document.addEventListener("DOMContentLoaded", init, false);

function init() {
    var canvas = document.getElementsByClassName("e-main-menu");
    for (var i = 0; i < canvas.length; i++) {
        canvas[i] = canvas[i].firstChild;
    }
    if ("ontouchstart" in document.documentElement) {
        for (var i = 0; i < canvas.length; i++) {
            canvas[i].addEventListener("touchstart", detect, false);
        }
    }
}

function detect() {};
document.addEventListener('wpcf7mailsent', function(event) {
    if (event.detail.contactFormId == 2474 || event.detail.contactFormId == 990 || event.detail.contactFormId == 1537) {
        dataLayer.push({
            'event': 'gtm4wp.contactForm7Submitted'
        });
    }
    if (event.detail.contactFormId == 3238 || event.detail.contactFormId == 5615) {
        location.replace('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XYJ79V3RK4UQG');
    }
}, false);
