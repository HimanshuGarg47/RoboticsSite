this.index = this.index || {}, this.index.js = function(t) {
    "use strict";

    function e() {}

    function n(t) { return t() }

    function s() { return Object.create(null) }

    function o(t) { t.forEach(n) }

    function l(t) { return "function" == typeof t }

    function c(t, e) { return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t }

    function r(t, e) { t.appendChild(e) }

    function a(t, e, n) { t.insertBefore(e, n || null) }

    function i(t) { t.parentNode.removeChild(t) }

    function d(t, e) { for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e) }

    function h(t) { return document.createElement(t) }

    function u(t) { return document.createTextNode(t) }

    function m() { return u(" ") }

    function g(t, e, n, s) { return t.addEventListener(e, n, s), () => t.removeEventListener(e, n, s) }

    function p(t, e, n) { null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n) }

    function f(t, e) { e = "" + e, t.data !== e && (t.data = e) }

    function v(t, e) {
        (null != e || t.value) && (t.value = e)
    }

    function b(t, e) { for (let n = 0; n < t.options.length; n += 1) { const s = t.options[n]; if (s.__value === e) return void(s.selected = !0) } }

    function k(t) { const e = t.querySelector(":checked") || t.options[0]; return e && e.__value }
    let y;

    function $(t) { y = t }

    function _() { if (!y) throw new Error("Function called outside component initialization"); return y }

    function w(t) { _().$$.on_mount.push(t) }

    function x() {
        const t = _();
        return (e, n) => {
            const s = t.$$.callbacks[e];
            if (s) {
                const o = function(t, e) { const n = document.createEvent("CustomEvent"); return n.initCustomEvent(t, !1, !1, e), n }(e, n);
                s.slice().forEach(e => { e.call(t, o) })
            }
        }
    }
    const C = [],
        j = [],
        A = [],
        M = [],
        T = Promise.resolve();
    let L = !1;

    function P(t) { A.push(t) }
    const E = new Set;

    function H() {
        do {
            for (; C.length;) {
                const t = C.shift();
                $(t), D(t.$$)
            }
            for (; j.length;) j.pop()();
            for (let t = 0; t < A.length; t += 1) {
                const e = A[t];
                E.has(e) || (E.add(e), e())
            }
            A.length = 0
        } while (C.length);
        for (; M.length;) M.pop()();
        L = !1, E.clear()
    }

    function D(t) {
        if (null !== t.fragment) {
            t.update(), o(t.before_update);
            const e = t.dirty;
            t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(P)
        }
    }
    const B = new Set;
    let I, J;

    function R() { I = { r: 0, c: [], p: I } }

    function U() { I.r || o(I.c), I = I.p }

    function O(t, e) { t && t.i && (B.delete(t), t.i(e)) }

    function N(t, e, n, s) {
        if (t && t.o) {
            if (B.has(t)) return;
            B.add(t), I.c.push(() => { B.delete(t), s && (n && t.d(1), s()) }), t.o(e)
        }
    }

    function F(t) { t && t.c() }

    function S(t, e, s) {
        const { fragment: c, on_mount: r, on_destroy: a, after_update: i } = t.$$;
        c && c.m(e, s), P(() => {
            const e = r.map(n).filter(l);
            a ? a.push(...e) : o(e), t.$$.on_mount = []
        }), i.forEach(P)
    }

    function G(t, e) {
        const n = t.$$;
        null !== n.fragment && (o(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
    }

    function W(t, e) {-1 === t.$$.dirty[0] && (C.push(t), L || (L = !0, T.then(H)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31 }

    function Y(t, n, l, c, r, a, i = [-1]) {
        const d = y;
        $(t);
        const h = n.props || {},
            u = t.$$ = { fragment: null, ctx: null, props: a, update: e, not_equal: r, bound: s(), on_mount: [], on_destroy: [], before_update: [], after_update: [], context: new Map(d ? d.$$.context : []), callbacks: s(), dirty: i };
        let m = !1;
        u.ctx = l ? l(t, h, (e, n, ...s) => { const o = s.length ? s[0] : n; return u.ctx && r(u.ctx[e], u.ctx[e] = o) && (u.bound[e] && u.bound[e](o), m && W(t, e)), n }) : [], u.update(), m = !0, o(u.before_update), u.fragment = !!c && c(u.ctx), n.target && (n.hydrate ? u.fragment && u.fragment.l(function(t) { return Array.from(t.childNodes) }(n.target)) : u.fragment && u.fragment.c(), n.intro && O(t.$$.fragment), S(t, n.target, n.anchor), H()), $(d)
    }

    function K(t) { let e, n, s, o, l = t[0] && q(t); return { c() { e = h("a"), l && l.c(), n = m(), s = h("img"), s.src !== (o = t[1]) && p(s, "src", o), p(s, "alt", ""), p(s, "width", "100%"), p(e, "class", "d-block"), p(e, "target", "_blank"), p(e, "href", t[2]) }, m(t, o) { a(t, e, o), l && l.m(e, null), r(e, n), r(e, s) }, p(t, c) { t[0] ? l ? l.p(t, c) : (l = q(t), l.c(), l.m(e, n)) : l && (l.d(1), l = null), 2 & c && s.src !== (o = t[1]) && p(s, "src", o), 4 & c && p(e, "href", t[2]) }, d(t) { t && i(e), l && l.d() } } }

    function q(t) {
        let e, n, s;
        return {
            c() { e = h("img"), p(e, "class", "close-icon"), e.src !== (n = t[4]) && p(e, "src", n), p(e, "alt", "close") },
            m(n, o) {
                var l;
                a(n, e, o), s = g(e, "click", function(t) { return function(e) { return e.stopPropagation(), t.call(this, e) } }((l = t[5], function(t) { return t.preventDefault(), l.call(this, t) })), !0)
            },
            p(t, s) { 16 & s && e.src !== (n = t[4]) && p(e, "src", n) },
            d(t) { t && i(e), s() }
        }
    }

    function z(t) { let n, s = t[3] && K(t); return { c() { s && s.c(), n = u(""), this.c = e }, m(t, e) { s && s.m(t, e), a(t, n, e) }, p(t, [e]) { t[3] ? s ? s.p(t, e) : (s = K(t), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null) }, i: e, o: e, d(t) { s && s.d(t), t && i(n) } } }

    function V(t, e, n) {
        let s = "",
            o = "",
            l = !0,
            c = "",
            { showToggle: r = !0 } = e,
            { theme: a = "light" } = e;
        w(async() => {
            const t = await fetch("https://hack-api.codingblocks.com/api/v2/dashboard-banners"),
                { data: [e] } = await t.json(),
                l = e.attributes;
            n(1, s = l["image-url"]), n(2, o = l.link), n(4, c = "light" === a ? "https://minio.codingblocks.com/motley/wrong_g_white.min.png" : "https://minio.codingblocks.com/motley/wrong_g.png")
        });
        return t.$set = t => { "showToggle" in t && n(0, r = t.showToggle), "theme" in t && n(6, a = t.theme) }, [r, s, o, l, c, () => { n(3, l = !l) }, a]
    }
    "function" == typeof HTMLElement && (J = class extends HTMLElement {
        constructor() { super(), this.attachShadow({ mode: "open" }) }
        connectedCallback() { for (const t in this.$$.slotted) this.appendChild(this.$$.slotted[t]) }
        attributeChangedCallback(t, e, n) { this[t] = n }
        $destroy() { G(this, 1), this.$destroy = e }
        $on(t, e) { const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []); return n.push(e), () => { const t = n.indexOf(e); - 1 !== t && n.splice(t, 1) } }
        $set() {}
    });
    class Q extends J {
        constructor(t) { super(), this.shadowRoot.innerHTML = "<style>.d-block{display:block;position:relative}.close-icon{position:absolute;right:10px;cursor:pointer;top:10px;width:15px;transition:width 0.1s}.close-icon:hover{width:18px}</style>", Y(this, { target: this.shadowRoot }, V, z, c, { showToggle: 0, theme: 6 }), t && (t.target && a(t.target, this, t.anchor), t.props && (this.$set(t.props), H())) }
        static get observedAttributes() { return ["showToggle", "theme"] }
        get showToggle() { return this.$$.ctx[0] }
        set showToggle(t) { this.$set({ showToggle: t }), H() }
        get theme() { return this.$$.ctx[6] }
        set theme(t) { this.$set({ theme: t }), H() }
    }
    customElements.define("promotion-banner", Q);
    var Z = new class {
        constructor(t) { this.url = t }
        fetchUser() { return fetch(this.url + "/users/me?include=demographic", { credentials: "include" }).then(t => t.json()) }
        fetchColleges() { return fetch(this.url + "/colleges").then(t => t.json()) }
        fetchBranches() { return fetch(this.url + "/branches").then(t => t.json()) }
        updateUser(t) { return fetch(this.url + "/users/me/edit", { method: "PATCH", credentials: "include", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) }).then(t => t.json()) }
    }("https://account.codingblocks.com/api");

    function X(t, e, n) { const s = t.slice(); return s[15] = e[n], s }

    function tt(t, e, n) { const s = t.slice(); return s[18] = e[n], s }

    function et(t, e, n) { const s = t.slice(); return s[21] = e[n], s }

    function nt(t) {
        let e, n, s, l, c, u, f, v, k, y, $, _, w, x, C, j, A, M, T = t[4],
            L = [];
        for (let e = 0; e < T.length; e += 1) L[e] = st(et(t, T, e));
        let E = 1 === t[0] && ot(t),
            H = t[8],
            D = [];
        for (let e = 0; e < H.length; e += 1) D[e] = lt(tt(t, H, e));
        let B = t[5],
            I = [];
        for (let e = 0; e < B.length; e += 1) I[e] = ct(X(t, B, e));
        let J = t[7].error && rt(t);
        return {
            c() {
                e = h("div"), n = h("div"), n.innerHTML = '<div class="font-md bold">\n      Get INR 1000 Credits\n    </div> \n    <div class="mt-4">\n      Complete your Profile &amp; get INR 1000 credits in your wallet\n    </div>', s = m(), l = h("div"), c = h("select"), u = h("option"), u.textContent = "-- College --";
                for (let t = 0; t < L.length; t += 1) L[t].c();
                f = m(), E && E.c(), v = m(), k = h("select"), y = h("option"), y.textContent = "-- Graduation Year --";
                for (let t = 0; t < D.length; t += 1) D[t].c();
                $ = m(), _ = h("select"), w = h("option"), w.textContent = "-- Branch --";
                for (let t = 0; t < I.length; t += 1) I[t].c();
                x = m(), C = h("div"), j = h("button"), j.textContent = "Update Profile", A = m(), J && J.c(), p(n, "class", "bg-gradient-pink white p-4"), u.disabled = !0, u.selected = !0, u.__value = "", u.value = u.__value, p(c, "class", "input-text br-50 my-2"), void 0 === t[0] && P(() => t[11].call(c)), y.disabled = !0, y.selected = !0, y.__value = "", y.value = y.__value, p(k, "class", "input-text br-50 my-2"), void 0 === t[2] && P(() => t[13].call(k)), w.disabled = !0, w.selected = !0, w.__value = "", w.value = w.__value, p(_, "class", "input-text br-50 my-2"), void 0 === t[1] && P(() => t[14].call(_)), p(j, "id", "updatedButton"), p(j, "class", "button-solid button-orange"), p(C, "class", "d-flex justify-content-center mt-5"), p(l, "class", "py-4 px-5 t-align-center"), p(e, "class", "border-card b-red p-0")
            },
            m(o, i) {
                a(o, e, i), r(e, n), r(e, s), r(e, l), r(l, c), r(c, u);
                for (let t = 0; t < L.length; t += 1) L[t].m(c, null);
                b(c, t[0]), r(l, f), E && E.m(l, null), r(l, v), r(l, k), r(k, y);
                for (let t = 0; t < D.length; t += 1) D[t].m(k, null);
                b(k, t[2]), r(l, $), r(l, _), r(_, w);
                for (let t = 0; t < I.length; t += 1) I[t].m(_, null);
                b(_, t[1]), r(l, x), r(l, C), r(C, j), r(l, A), J && J.m(l, null), M = [g(c, "change", t[11]), g(k, "change", t[13]), g(_, "change", t[14]), g(j, "click", t[9])]
            },
            p(t, e) {
                if (17 & e) {
                    let n;
                    for (T = t[4], n = 0; n < T.length; n += 1) {
                        const s = et(t, T, n);
                        L[n] ? L[n].p(s, e) : (L[n] = st(s), L[n].c(), L[n].m(c, null))
                    }
                    for (; n < L.length; n += 1) L[n].d(1);
                    L.length = T.length
                }
                if (1 & e && b(c, t[0]), 1 === t[0] ? E ? E.p(t, e) : (E = ot(t), E.c(), E.m(l, v)) : E && (E.d(1), E = null), 260 & e) {
                    let n;
                    for (H = t[8], n = 0; n < H.length; n += 1) {
                        const s = tt(t, H, n);
                        D[n] ? D[n].p(s, e) : (D[n] = lt(s), D[n].c(), D[n].m(k, null))
                    }
                    for (; n < D.length; n += 1) D[n].d(1);
                    D.length = H.length
                }
                if (4 & e && b(k, t[2]), 34 & e) {
                    let n;
                    for (B = t[5], n = 0; n < B.length; n += 1) {
                        const s = X(t, B, n);
                        I[n] ? I[n].p(s, e) : (I[n] = ct(s), I[n].c(), I[n].m(_, null))
                    }
                    for (; n < I.length; n += 1) I[n].d(1);
                    I.length = B.length
                }
                2 & e && b(_, t[1]), t[7].error ? J ? J.p(t, e) : (J = rt(t), J.c(), J.m(l, null)) : J && (J.d(1), J = null)
            },
            d(t) { t && i(e), d(L, t), E && E.d(), d(D, t), d(I, t), J && J.d(), o(M) }
        }
    }

    function st(t) { let e, n, s, o, l, c = t[21].name + ""; return { c() { e = h("option"), n = u(c), s = m(), e.__value = o = t[21].id, e.value = e.__value, e.selected = l = t[21].id === t[0] }, m(t, o) { a(t, e, o), r(e, n), r(e, s) }, p(t, s) { 16 & s && c !== (c = t[21].name + "") && f(n, c), 16 & s && o !== (o = t[21].id) && (e.__value = o), e.value = e.__value, 17 & s && l !== (l = t[21].id === t[0]) && (e.selected = l) }, d(t) { t && i(e) } } }

    function ot(t) { let e, n; return { c() { e = h("input"), p(e, "type", "text"), p(e, "placeholder", "Other College Name"), p(e, "class", "input-text br-50 my-2") }, m(s, o) { a(s, e, o), v(e, t[3]), n = g(e, "input", t[12]) }, p(t, n) { 8 & n && e.value !== t[3] && v(e, t[3]) }, d(t) { t && i(e), n() } } }

    function lt(t) { let e, n, s, o, l, c = t[18] + ""; return { c() { e = h("option"), n = u(c), s = m(), e.__value = o = t[18], e.value = e.__value, e.selected = l = t[18] === t[2] }, m(t, o) { a(t, e, o), r(e, n), r(e, s) }, p(t, n) { 4 & n && l !== (l = t[18] === t[2]) && (e.selected = l) }, d(t) { t && i(e) } } }

    function ct(t) { let e, n, s, o, l, c = t[15].name + ""; return { c() { e = h("option"), n = u(c), s = m(), e.__value = o = t[15].id, e.value = e.__value, e.selected = l = t[15].id === t[1] }, m(t, o) { a(t, e, o), r(e, n), r(e, s) }, p(t, s) { 32 & s && c !== (c = t[15].name + "") && f(n, c), 32 & s && o !== (o = t[15].id) && (e.__value = o), e.value = e.__value, 34 & s && l !== (l = t[15].id === t[1]) && (e.selected = l) }, d(t) { t && i(e) } } }

    function rt(t) { let e, n, s, o = t[7].error + ""; return { c() { e = h("div"), n = h("p"), s = u(o), p(n, "class", "red"), p(e, "class", "row justify-content-center") }, m(t, o) { a(t, e, o), r(e, n), r(n, s) }, p(t, e) { 128 & e && o !== (o = t[7].error + "") && f(s, o) }, d(t) { t && i(e) } } }

    function at(t) { let n, s, o = t[6].id && nt(t); return { c() { o && o.c(), n = m(), s = h("link"), this.c = e, p(s, "rel", "stylesheet"), p(s, "href", "https://unpkg.com/@coding-blocks/motley@0.7.4/dist/online-cb/app.min.css") }, m(t, e) { o && o.m(t, e), a(t, n, e), a(t, s, e) }, p(t, [e]) { t[6].id ? o ? o.p(t, e) : (o = nt(t), o.c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null) }, i: e, o: e, d(t) { o && o.d(t), t && i(n), t && i(s) } } }

    function it(t, e, n) {
        let s = null,
            o = null,
            l = null,
            c = "",
            r = [],
            a = [],
            i = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2e3],
            d = {},
            h = { success: null, error: null };
        const u = x();
        w(async() => { n(6, d = await Z.fetchUser()), d.id && (n(4, r = await Z.fetchColleges()), n(5, a = await Z.fetchBranches()), n(2, l = d.graduationYear), n(0, s = d.demographic.collegeId), n(1, o = d.demographic.branchId), n(3, c = d.demographic.otherCollege)) });
        return [s, o, l, c, r, a, d, h, i, async() => {
            try {
                const t = await Z.updateUser({ gradYear: l, collegeId: s, branchId: o, otherCollege: c });
                u("updated", t), t.success = t.success
            } catch (t) { n(7, h.error = t, h) }
        }, u, function() { s = k(this), n(0, s), n(4, r) }, function() { c = this.value, n(3, c) }, function() { l = k(this), n(2, l), n(8, i) }, function() { o = k(this), n(1, o), n(5, a) }]
    }
    class dt extends J { constructor(t) { super(), Y(this, { target: this.shadowRoot }, it, at, c, {}), t && t.target && a(t.target, this, t.anchor) } }

    function ht(t) { let n; return { c() { n = h("div"), n.innerHTML = '<div class="mt-4"><div class="card-sm light extra-bold">Beginner Courses</div> \n\t\t<div class="card-sm light"><a href="https://codingblocks.com/classroom-courses/c-plus-plus-for-beginners.html">\n\t\t\t\tC++ For Beginners\n\t\t\t</a></div> \n\t\t<div class="card-sm light"><a href="https://codingblocks.com/classroom-courses/java-for-beginners.html">\n\t\t\t\tJava For Beginners\n\t\t\t</a></div> \n\t\t<div class="card-sm light"><a href="https://codingblocks.com/classroom-courses/python-app-dev.html">\n\t\t\t\tPython App Development\n\t\t\t</a></div></div> \n\t<div class="mt-3"><div class="card-sm light extra-bold">Development Courses</div> \n\t\t<div class="card-sm light"><a href="https://codingblocks.com/classroom-courses/android-app-development-using-kotlin-and-java.html">\n\t\t\t\tAndroid App Dev\n\t\t\t</a></div> \n\t\t<div class="card-sm light"><a href="https://codingblocks.com/classroom-courses/web-development-nodejs.html">\n\t\t\t\tFull Stack Web Dev\n\t\t\t</a></div> \n\t\t<div class="card-sm light"><a href="https://codingblocks.com/classroom-courses/web-development-django.html">\n\t\t\t\tPython Django\n\t\t\t</a></div> \n\t\t<div class="card-sm light"><a href="https://codingblocks.com/classroom-courses/unity-game-development.html">\n\t\t\t\tUnity Game Development\n\t\t\t</a></div></div> \n\t<div class="mt-3"><div class="card-sm light extra-bold">Advanced Courses</div> \n\t\t<div class="card-sm light"><a href="https://codingblocks.com/classroom-courses/android-app-development-using-kotlin-and-java.html">\n\t\t\t\tAlgo++\n\t\t\t</a></div> \n\t\t<div class="card-sm light"><a href="https://codingblocks.com/classroom-courses/web-development-nodejs.html">\n\t\t\t\tAlgo.JAVA\n\t\t\t</a></div> \n\t\t<div class="card-sm light"><a href="https://codingblocks.com/classroom-courses/web-development-django.html">\n\t\t\t\tCompetitive Programming\n\t\t\t</a></div> \n\t\t<div class="card-sm light"><a href="https://codingblocks.com/classroom-courses/unity-game-development.html">\n\t\t\t\tMachine Learning\n\t\t\t</a></div></div>', this.c = e, p(n, "class", "pl-4") }, m(t, e) { a(t, n, e) }, p: e, i: e, o: e, d(t) { t && i(n) } } }
    customElements.define("demographic-form", dt);
    class ut extends J { constructor(t) { super(), Y(this, { target: this.shadowRoot }, null, ht, c, {}), t && t.target && a(t.target, this, t.anchor) } }

    function mt(t) { let n; return { c() { n = h("div"), n.innerHTML = '<div class="mt-4"><div class="card-sm light extra-bold">Beginner Courses</div> \n          <div class="card-sm light"><a href="https://online.codingblocks.com/courses/c-plus-plus-online-course-for-beginners">\n              C++ Master Course | Launchpad\n            </a></div> \n          <div class="card-sm light"><a href="https://online.codingblocks.com/courses/complete-java-course-online">\n              Java Master Course | Crux\n            </a></div> \n          <div class="card-sm light"><a href="https://online.codingblocks.com/courses/python-for-beginners-developers">\n              Python For Developers\n            </a></div></div> \n        <div class="mt-3"><div class="card-sm light extra-bold">Advanced Courses</div> \n          <div class="card-sm light"><a href="https://online.codingblocks.com/courses/python-django">\n              Web Dev with Python-Django\n            </a></div> \n          <div class="card-sm light"><a href="https://online.codingblocks.com/courses/coding-interview-preparation-online">\n              Interview Prep Bootcamp\n            </a></div> \n          <div class="card-sm light"><a href="https://online.codingblocks.com/courses/data-structures-and-algorithms-online-course-java-algo">\n              Algo.Java Online\n            </a></div> \n          <div class="card-sm light"><a href="https://online.codingblocks.com/courses/android-app-training-online">\n              Android App Development Online\n            </a></div> \n          <div class="card-sm light"><a href="https://online.codingblocks.com/courses/telegram-chatbot-python-online">\n              Build Chatbots in Python\n            </a></div></div> \n        <div class="mt-3"><div class="card-sm light extra-bold">Expert Courses</div> \n          <div class="card-sm light"><a href="https://online.codingblocks.com/courses/competitive-programming-course-online">\n              Competitive Programming Online\n            </a></div> \n          <div class="card-sm light"><a href="https://online.codingblocks.com/courses/coding-interview-preparation-course-online-c-plus-plus">\n              Interview Preparation - C++\n            </a></div> \n          <div class="card-sm light"><a href="https://online.codingblocks.com/courses/machine-learning-course-online">\n              Machine Learning Master Course\n            </a></div> \n          <div class="card-sm light"><a href="https://online.codingblocks.com/courses/coding-interview-preparation-course-online-java">\n              Interview Preparation - Java\n            </a></div></div>', this.c = e, p(n, "class", "pl-4") }, m(t, e) { a(t, n, e) }, p: e, i: e, o: e, d(t) { t && i(n) } } }
    customElements.define("mobile-classroom-courses", ut);
    class gt extends J { constructor(t) { super(), Y(this, { target: this.shadowRoot }, null, mt, c, {}), t && t.target && a(t.target, this, t.anchor) } }

    function pt(t) { let e; const n = new ut({}); return { c() { F(n.$$.fragment) }, m(t, s) { S(n, t, s), e = !0 }, i(t) { e || (O(n.$$.fragment, t), e = !0) }, o(t) { N(n.$$.fragment, t), e = !1 }, d(t) { G(n, t) } } }

    function ft(t) { let e; const n = new gt({}); return { c() { F(n.$$.fragment) }, m(t, s) { S(n, t, s), e = !0 }, i(t) { e || (O(n.$$.fragment, t), e = !0) }, o(t) { N(n.$$.fragment, t), e = !1 }, d(t) { G(n, t) } } }

    function vt(t) {
        let n, s, l, c, d, u, f, v, b, k, y, $, _, w, x, C, j, A, M, T, L, P, E, H, D, B, I, J, F, S, G, W, Y, K, q, z, V, Q, Z, X, tt, et, nt, st = "classroom" == t[0] && pt(),
            ot = "online" == t[0] && ft();
        return {
            c() { n = h("link"), s = m(), l = h("link"), c = m(), d = h("div"), u = h("div"), f = h("img"), b = m(), k = h("img"), $ = m(), _ = h("div"), w = m(), x = h("slot"), C = m(), j = h("div"), A = h("div"), A.innerHTML = '<div class="card-md extra-bold orange">Courses</div> \n\t\t\t<a href="#" class="orange"><i class="fas fa-angle-up fa-lg"></i></a>', M = m(), T = h("div"), L = h("div"), P = h("div"), P.textContent = "Classroom Courses", E = m(), H = h("div"), H.innerHTML = '<a href="#" class="orange">Explore All</a>', B = m(), st && st.c(), I = m(), J = h("div"), F = h("div"), S = h("div"), S.textContent = "Online Courses", G = m(), W = h("div"), W.innerHTML = '<a href="#" class="orange">Explore All</a>', K = m(), ot && ot.c(), q = m(), z = h("div"), z.innerHTML = '<a href="https://codingblocks.com/campus-ambassador-program.html" target="blank">\n        Campus Ambassadors\n      </a>', V = m(), Q = h("div"), Q.innerHTML = '<a href="https://codingblocks.com/about" target="blank">\n        About Us\n      </a>', Z = m(), X = h("div"), X.innerHTML = '<a href="https://codingblocks.com/centres" target="blank">\n        Contact Us\n      </a>', this.c = e, p(n, "rel", "stylesheet"), p(n, "href", t[2]), p(l, "href", "https://minio.codingblocks.com/hackerblocks-images/Gilroy.ttf"), p(l, "rel", "stylesheet"), f.src !== (v = t[3]) && p(f, "src", v), p(f, "alt", "HB"), p(f, "class", "hamburger-nav__ham-logo ml-4"), k.src !== (y = "https://minio.codingblocks.com/amoeba/wrong-close.png") && p(k, "src", "https://minio.codingblocks.com/amoeba/wrong-close.png"), p(k, "alt", "#"), p(k, "class", "mr-4 hamburger-nav__cross pointer"), p(u, "class", "d-flex py-3 justify-content-between align-items-center hamburger-nav__top-bar"), p(_, "class", "divider-h"), p(A, "class", "d-flex justify-content-between"), p(P, "class", "card-md extra-bold"), p(H, "class", "card-sm light"), p(L, "class", D = "hamburger-nav__menu-element " + ("classroom" == t[0] && "active")), p(T, "class", "my-4 pl-4"), p(S, "class", "card-md extra-bold"), p(W, "class", "card-sm light"), p(F, "class", Y = "hamburger-nav__menu-element " + ("online" == t[0] && "active")), p(J, "class", "my-4 pl-4"), p(z, "class", "card-md light my-4"), p(Q, "class", "card-md light my-4"), p(X, "class", "card-md light my-4"), p(j, "class", "mt-4 px-4 overflow-y-auto no-scrollbar"), p(d, "class", tt = "hamburger-nav b-right overflow-y-auto no-scrollbar " + (!t[1] && "hamburger-nav--hidden") + " ") },
            m(e, o) { a(e, n, o), a(e, s, o), a(e, l, o), a(e, c, o), a(e, d, o), r(d, u), r(u, f), r(u, b), r(u, k), r(d, $), r(d, _), r(d, w), r(d, x), r(d, C), r(d, j), r(j, A), r(j, M), r(j, T), r(T, L), r(L, P), r(L, E), r(L, H), r(T, B), st && st.m(T, null), r(j, I), r(j, J), r(J, F), r(F, S), r(F, G), r(F, W), r(J, K), ot && ot.m(J, null), r(j, q), r(j, z), r(j, V), r(j, Q), r(j, Z), r(j, X), et = !0, nt = [g(k, "click", t[4]), g(P, "click", t[5]), g(S, "click", t[6])] },
            p(t, [e]) {
                (!et || 4 & e) && p(n, "href", t[2]), (!et || 8 & e && f.src !== (v = t[3])) && p(f, "src", v), (!et || 1 & e && D !== (D = "hamburger-nav__menu-element " + ("classroom" == t[0] && "active"))) && p(L, "class", D), "classroom" == t[0] ? st ? O(st, 1) : (st = pt(), st.c(), O(st, 1), st.m(T, null)) : st && (R(), N(st, 1, 1, () => { st = null }), U()), (!et || 1 & e && Y !== (Y = "hamburger-nav__menu-element " + ("online" == t[0] && "active"))) && p(F, "class", Y), "online" == t[0] ? ot ? O(ot, 1) : (ot = ft(), ot.c(), O(ot, 1), ot.m(J, null)) : ot && (R(), N(ot, 1, 1, () => { ot = null }), U()), (!et || 2 & e && tt !== (tt = "hamburger-nav b-right overflow-y-auto no-scrollbar " + (!t[1] && "hamburger-nav--hidden") + " ")) && p(d, "class", tt)
            },
            i(t) { et || (O(st), O(ot), et = !0) },
            o(t) { N(st), N(ot), et = !1 },
            d(t) { t && i(n), t && i(s), t && i(l), t && i(c), t && i(d), st && st.d(), ot && ot.d(), o(nt) }
        }
    }

    function bt(t, e, n) { let { css: s = "https://unpkg.com/@coding-blocks/motley/dist/app.min.css" } = e, { tab: o = "classroom" } = e, { showhamburger: l = !1 } = e, { logo: c = "https://codingblocks.com/assets/images/cb/cblogo.png" } = e; return t.$set = t => { "css" in t && n(2, s = t.css), "tab" in t && n(0, o = t.tab), "showhamburger" in t && n(1, l = t.showhamburger), "logo" in t && n(3, c = t.logo) }, [o, l, s, c, () => n(1, l = !l), () => n(0, o = "classroom"), () => n(0, o = "online")] }
    customElements.define("mobile-online-courses", gt);
    class kt extends J {
        constructor(t) { super(), Y(this, { target: this.shadowRoot }, bt, vt, c, { css: 2, tab: 0, showhamburger: 1, logo: 3 }), t && (t.target && a(t.target, this, t.anchor), t.props && (this.$set(t.props), H())) }
        static get observedAttributes() { return ["css", "tab", "showhamburger", "logo"] }
        get css() { return this.$$.ctx[2] }
        set css(t) { this.$set({ css: t }), H() }
        get tab() { return this.$$.ctx[0] }
        set tab(t) { this.$set({ tab: t }), H() }
        get showhamburger() { return this.$$.ctx[1] }
        set showhamburger(t) { this.$set({ showhamburger: t }), H() }
        get logo() { return this.$$.ctx[3] }
        set logo(t) { this.$set({ logo: t }), H() }
    }

    function yt(t) { let n; return { c() { n = h("div"), n.innerHTML = '<ul class="col-4"><li class="bold">Beginner Courses</li> \n      <li><a href="https://codingblocks.com/classroom-courses/c-plus-plus-for-beginners.html" target="_blank">\n            C++ For Beginners\n        </a></li> \n      <li><a href="https://codingblocks.com/classroom-courses/java-for-beginners.html" target="_blank">\n          Java For Beginners\n        </a></li> \n      <li><a href="https://codingblocks.com/classroom-courses/python-app-dev.html" target="_blank">\n          Python App Development\n        </a></li></ul> \n  <ul class="col-4"><li class="bold">Development Courses</li> \n      <li><a href="https://codingblocks.com/classroom-courses/android-app-development-using-kotlin-and-java.html" target="_blank">\n          Android App Dev\n        </a></li> \n      <li><a href="https://codingblocks.com/classroom-courses/web-development-nodejs.html" target="_blank">\n          Full Stack Web Dev\n        </a></li> \n      <li><a href="https://codingblocks.com/classroom-courses/web-development-django.html" target="_blank">\n          Python Django\n        </a></li> \n      <li><a href="https://codingblocks.com/classroom-courses/unity-game-development.html" target="_blank">\n          Unity Game Development\n        </a></li></ul> \n  <ul class="col-4"><li class="bold">Advanced Courses</li> \n      <li><a href="https://codingblocks.com/classroom-courses/advanced-data-structures-and-algorithms-for-interviews.html" target="_blank">\n          Algo++\n        </a></li> \n      <li><a href="https://codingblocks.com/classroom-courses/advanced-data-structures-and-algorithms-using-java.html" target="_blank">\n          Algo.Java\n        </a></li> \n      <li><a href="https://codingblocks.com/classroom-courses/competitive-programming.html" target="_blank">\n          Competitive Programming\n        </a></li> \n      <li><a href="https://codingblocks.com/classroom-courses/machine-learning-with-deep-learning.html">\n          Machine Learning\n        </a></li></ul> \n  <ul class="col-4"><li class="bold">Junior Courses</li> \n      <li><a href="https://codingblocks.com/classroom-courses/code4kids.html" target="_blank">\n          Code 4 Kids\n        </a></li> \n      <li><a href="https://codingblocks.com/classroom-courses/mathsgeeks.html" target="_blank">\n          Maths Geek\n        </a></li></ul> \n  <ul class="col-4"><li class="bold">Bootcamps</li> \n      <li><a href="https://codingblocks.com/bootcamps/react.html" target="_blank">React JS\n        </a></li> \n      <li><a href="https://codingblocks.com/bootcamps/blockchain.html" target="_blank">Blockchain\n        </a></li> \n      <li><a href="https://codingblocks.com/bootcamps/coding-interview-preparation.html" target="_blank">Interview Preparation\n        </a></li> \n      <li><a href="https://codingblocks.com/bootcamps/gamedev.html" target="_blank">Game Dev\n        </a></li> \n      <li><a href="https://codingblocks.com/bootcamps/chatbots.html" target="_blank">Chatbot\n        </a></li></ul> \n  <ul class="col-4"><li class="bold">\n        Professional\n      </li> \n      <li><a href="https://codingblocks.com/classroom-courses/six_months_ind_training.html" target="_blank">Industrial Training\n        </a></li></ul>', this.c = e, p(n, "class", "row justify-content-around m-5") }, m(t, e) { a(t, n, e) }, p: e, i: e, o: e, d(t) { t && i(n) } } }
    customElements.define("cb-mobile-navbar", kt);
    class $t extends J { constructor(t) { super(), Y(this, { target: this.shadowRoot }, null, yt, c, {}), t && t.target && a(t.target, this, t.anchor) } }

    function _t(t) { let n; return { c() { n = h("div"), n.innerHTML = '<ul class="col-4"><li class="bold mb-3">Beginner Courses</li> \n      <li><a href="https://online.codingblocks.com/courses/c-plus-plus-online-course-for-beginners">\n            C++ Master Course | Launchpad\n        </a></li> \n      <li><a href="https://online.codingblocks.com/courses/complete-java-course-online">\n            Java Master Course | Crux\n        </a></li> \n      <li><a href="https://online.codingblocks.com/courses/python-for-beginners-developers">\n            Python For Developers\n        </a></li></ul> \n  <ul class="col-4"><li class="bold mb-3">Advanced Courses</li> \n      <li><a href="https://online.codingblocks.com/courses/python-django">\n          Web Dev with Python-Django\n        </a></li> \n      <li><a href="https://online.codingblocks.com/courses/coding-interview-preparation-online">\n          Interview Prep Bootcamp\n        </a></li> \n      <li><a href="https://online.codingblocks.com/courses/data-structures-and-algorithms-online-course-java-algo">\n          Algo.Java Online\n        </a></li> \n      <li><a href="https://online.codingblocks.com/courses/android-app-training-online">\n          Android App Development Online\n        </a></li> \n      <li><a href="https://online.codingblocks.com/courses/telegram-chatbot-python-online">\n          Build Chatbots in Python\n        </a></li></ul> \n  <ul class="col-4"><li class="bold mb-3">Expert Courses</li> \n      <li><a href="https://online.codingblocks.com/courses/competitive-programming-course-online">\n          Competitive Programming Online\n        </a></li> \n      <li><a href="https://online.codingblocks.com/courses/coding-interview-preparation-course-online-c-plus-plus">\n          Interview Preparation - C++\n        </a></li> \n      <li><a href="https://online.codingblocks.com/courses/machine-learning-course-online">\n          Machine Learning Master Course\n        </a></li> \n      <li><a href="https://online.codingblocks.com/courses/coding-interview-preparation-course-online-java">\n          Interview Preparation - Java\n        </a></li></ul>', this.c = e, p(n, "class", "row justify-content-around m-5") }, m(t, e) { a(t, n, e) }, p: e, i: e, o: e, d(t) { t && i(n) } } }
    customElements.define("classroom-courses", $t);
    class wt extends J { constructor(t) { super(), Y(this, { target: this.shadowRoot }, null, _t, c, {}), t && t.target && a(t.target, this, t.anchor) } }

    function xt(t) {
        let e, n, s, l, c, d, u, f, v, b, k, y, $, _, w, x, C;
        const j = [jt, Ct],
            A = [];

        function M(t, e) { return "classroom" == t[1] ? 0 : 1 }
        return _ = M(t), w = A[_] = j[_](t), {
            c() {
                var o, r, a;
                e = h("div"), n = h("div"), s = h("div"), s.innerHTML = '<div class="font-lg my-4 offset-3">Our Courses</div>', l = m(), c = h("div"), d = h("div"), d.innerHTML = '<div>Online Courses</div> \n            <a href="https://online.codingblocks.com/courses" target="_blank" class="font-mds orange"> \n              Explore all \n            </a>', f = m(), v = h("div"), b = h("div"), b.innerHTML = '<div>Classroom Courses</div> \n            <a href="https://codingblocks.com/classroom-courses/" target="_blank" class="font-mds orange"> \n              Explore all \n            </a>', y = m(), $ = h("div"), w.c(), p(s, "class", "py-5 font-md bold hover-grey"), p(d, "class", "offset-3"), p(c, "class", u = "py-4 font-md bold hover-grey " + ("online" == t[1] && "selected")), p(b, "class", "offset-3"), p(v, "class", k = "py-4 font-md bold hover-grey " + ("classroom" == t[1] && "selected")), p(n, "class", "cb-navbar-side col-3"), p($, "class", "col-9 font-mds"), p(e, "class", "row no-gutters cb-navbar-expanded"), o = "overflow", r = "hidden", e.style.setProperty(o, r, a ? "important" : "")
            },
            m(o, i) { a(o, e, i), r(e, n), r(n, s), r(n, l), r(n, c), r(c, d), r(n, f), r(n, v), r(v, b), r(e, y), r(e, $), A[_].m($, null), x = !0, C = [g(c, "click", t[6]), g(v, "click", t[7])] },
            p(t, e) {
                (!x || 2 & e && u !== (u = "py-4 font-md bold hover-grey " + ("online" == t[1] && "selected"))) && p(c, "class", u), (!x || 2 & e && k !== (k = "py-4 font-md bold hover-grey " + ("classroom" == t[1] && "selected"))) && p(v, "class", k);
                let n = _;
                _ = M(t), _ !== n && (R(), N(A[n], 1, 1, () => { A[n] = null }), U(), w = A[_], w || (w = A[_] = j[_](t), w.c()), O(w, 1), w.m($, null))
            },
            i(t) { x || (O(w), x = !0) },
            o(t) { N(w), x = !1 },
            d(t) { t && i(e), A[_].d(), o(C) }
        }
    }

    function Ct(t) { let e; const n = new wt({}); return { c() { F(n.$$.fragment) }, m(t, s) { S(n, t, s), e = !0 }, i(t) { e || (O(n.$$.fragment, t), e = !0) }, o(t) { N(n.$$.fragment, t), e = !1 }, d(t) { G(n, t) } } }

    function jt(t) { let e; const n = new $t({}); return { c() { F(n.$$.fragment) }, m(t, s) { S(n, t, s), e = !0 }, i(t) { e || (O(n.$$.fragment, t), e = !0) }, o(t) { N(n.$$.fragment, t), e = !1 }, d(t) { G(n, t) } } }

    function At(t) {
        let n, s, o, l, c, d, f, v, b, k, y, $, _, w, x, C, j, A, M, T, L, P, E, H, D, B, I, J, F, S = t[0] && xt(t);
        return {
            c() { n = h("div"), s = h("div"), o = h("div"), l = h("span"), c = u("Courses\n        "), d = h("i"), v = m(), b = h("div"), b.innerHTML = '<a href="https://codingblocks.com/about.html" target="_blank">About Us</a>', k = m(), y = h("div"), y.innerHTML = '<a href="https://codingblocks.com/resources" target="_blank">Resources</a>', $ = m(), _ = h("div"), _.innerHTML = '<a href="https://codingblocks.com/campus-ambassador-program.html" target="_blank">Campus Ambassadors</a>', w = m(), x = h("div"), x.innerHTML = '<a href="https://codingblocks.com/centres/" target="_blank">Contact Us</a>', C = m(), j = h("slot"), M = m(), S && S.c(), T = m(), L = h("link"), P = m(), E = h("link"), H = m(), D = h("link"), B = m(), I = h("link"), this.c = e, p(d, "class", f = "ml-1 fas fa-chevron-" + (t[0] ? "up" : "down")), p(l, "class", "px-3 pointer"), p(b, "class", "px-3"), p(y, "class", "px-3"), p(_, "class", "px-3"), p(x, "class", "px-3"), p(j, "name", "header"), p(o, "class", A = "d-flex " + t[3] + " py-3 pr-5"), p(s, "class", "border"), p(n, "class", "a-hb d-md-block d-none"), p(L, "rel", "stylesheet"), p(L, "href", t[2]), p(E, "rel", "stylesheet"), p(E, "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"), p(E, "integrity", "sha256-UzFD2WYH2U1dQpKDjjZK72VtPeWP50NoJjd26rnAdUI="), p(E, "crossorigin", "anonymous"), p(D, "href", "https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700,800"), p(D, "rel", "stylesheet"), p(I, "href", "https://minio.codingblocks.com/hackerblocks-images/Gilroy.ttf"), p(I, "rel", "stylesheet") },
            m(e, i) { a(e, n, i), r(n, s), r(s, o), r(o, l), r(l, c), r(l, d), r(o, v), r(o, b), r(o, k), r(o, y), r(o, $), r(o, _), r(o, w), r(o, x), r(o, C), r(o, j), r(n, M), S && S.m(n, null), a(e, T, i), a(e, L, i), a(e, P, i), a(e, E, i), a(e, H, i), a(e, D, i), a(e, B, i), a(e, I, i), J = !0, F = g(l, "click", t[4]) },
            p(t, [e]) {
                (!J || 1 & e && f !== (f = "ml-1 fas fa-chevron-" + (t[0] ? "up" : "down"))) && p(d, "class", f), (!J || 8 & e && A !== (A = "d-flex " + t[3] + " py-3 pr-5")) && p(o, "class", A), t[0] ? S ? (S.p(t, e), O(S, 1)) : (S = xt(t), S.c(), O(S, 1), S.m(n, null)) : S && (R(), N(S, 1, 1, () => { S = null }), U()), (!J || 4 & e) && p(L, "href", t[2])
            },
            i(t) { J || (O(S), J = !0) },
            o(t) { N(S), J = !1 },
            d(t) { t && i(n), S && S.d(), t && i(T), t && i(L), t && i(P), t && i(E), t && i(H), t && i(D), t && i(B), t && i(I), F() }
        }
    }

    function Mt(t, e, n) {
        let { topalign: s = "center" } = e, { expanded: o = !1 } = e, { tab: l = "online" } = e, { css: c = "https://unpkg.com/@coding-blocks/motley/dist/app.min.css" } = e, r = "justify-content-center";
        return t.$set = t => { "topalign" in t && n(5, s = t.topalign), "expanded" in t && n(0, o = t.expanded), "tab" in t && n(1, l = t.tab), "css" in t && n(2, c = t.css) }, t.$$.update = () => {
            if (32 & t.$$.dirty) switch (s) {
                case "left":
                    n(3, r = "justify-content-start");
                    break;
                case "right":
                    n(3, r = "justify-content-end");
                    break;
                default:
                    n(3, r = "justify-content-center")
            }
        }, [o, l, c, r, () => n(0, o = !o), s, () => n(1, l = "online"), () => n(1, l = "classroom")]
    }
    customElements.define("online-courses", wt);
    class Tt extends J {
        constructor(t) { super(), this.shadowRoot.innerHTML = "<style>a:hover{text-decoration:underline}.hover-grey.selected:hover{background:unset}.a-hb{display:none}</style>", Y(this, { target: this.shadowRoot }, Mt, At, c, { topalign: 5, expanded: 0, tab: 1, css: 2 }), t && (t.target && a(t.target, this, t.anchor), t.props && (this.$set(t.props), H())) }
        static get observedAttributes() { return ["topalign", "expanded", "tab", "css"] }
        get topalign() { return this.$$.ctx[5] }
        set topalign(t) { this.$set({ topalign: t }), H() }
        get expanded() { return this.$$.ctx[0] }
        set expanded(t) { this.$set({ expanded: t }), H() }
        get tab() { return this.$$.ctx[1] }
        set tab(t) { this.$set({ tab: t }), H() }
        get css() { return this.$$.ctx[2] }
        set css(t) { this.$set({ css: t }), H() }
    }
    return customElements.define("cb-navbar", Tt), t.banner = Q, t.cb_navbar = Tt, t.demographic_form = dt, t.mobile_cb_navbar = kt, t
}({});