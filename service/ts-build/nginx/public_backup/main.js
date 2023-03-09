"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*! For license information please see main.js.LICENSE.txt */
(() => { var e = { 711: function (e) { e.exports = function (e) { function t(i) { if (n[i])
        return n[i].exports; var o = n[i] = { exports: {}, id: i, loaded: !1 }; return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports; } var n = {}; return t.m = e, t.c = n, t.p = "dist/", t(0); }([function (e, t, n) {
            "use strict";
            function i(e) { return e && e.__esModule ? e : { default: e }; }
            var o = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            } return e; }, r = (i(n(1)), n(6)), s = i(r), a = i(n(7)), l = i(n(8)), c = i(n(9)), u = i(n(10)), d = i(n(11)), f = i(n(14)), p = [], h = !1, g = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 }, m = function () { if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (h = !0), h)
                return p = (0, d.default)(p, g), (0, u.default)(p, g.once), p; }, v = function () { p = (0, f.default)(), m(); };
            e.exports = { init: function (e) { g = o(g, e), p = (0, f.default)(); var t = document.all && !window.atob; return function (e) { return !0 === e || "mobile" === e && c.default.mobile() || "phone" === e && c.default.phone() || "tablet" === e && c.default.tablet() || "function" == typeof e && !0 === e(); }(g.disable) || t ? void p.forEach((function (e, t) { e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay"); })) : (g.disableMutationObserver || l.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), g.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", g.easing), document.querySelector("body").setAttribute("data-aos-duration", g.duration), document.querySelector("body").setAttribute("data-aos-delay", g.delay), "DOMContentLoaded" === g.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? m(!0) : "load" === g.startEvent ? window.addEventListener(g.startEvent, (function () { m(!0); })) : document.addEventListener(g.startEvent, (function () { m(!0); })), window.addEventListener("resize", (0, a.default)(m, g.debounceDelay, !0)), window.addEventListener("orientationchange", (0, a.default)(m, g.debounceDelay, !0)), window.addEventListener("scroll", (0, s.default)((function () { (0, u.default)(p, g.once); }), g.throttleDelay)), g.disableMutationObserver || l.default.ready("[data-aos]", v), p); }, refresh: m, refreshHard: v };
        }, function (e, t) { }, , , , , function (e, t) { (function (t) {
            "use strict";
            function n(e, t, n) { function o(t) { var n = f, i = p; return f = p = void 0, y = t, g = e.apply(i, n); } function s(e) { return y = e, m = setTimeout(c, t), x ? o(e) : g; } function l(e) { var n = e - v; return void 0 === v || n >= t || n < 0 || T && e - y >= h; } function c() { var e = w(); return l(e) ? u(e) : void (m = setTimeout(c, function (e) { var n = t - (e - v); return T ? _(n, h - (e - y)) : n; }(e))); } function u(e) { return m = void 0, E && f ? o(e) : (f = p = void 0, g); } function d() { var e = w(), n = l(e); if (f = arguments, p = this, v = e, n) {
                if (void 0 === m)
                    return s(v);
                if (T)
                    return m = setTimeout(c, t), o(v);
            } return void 0 === m && (m = setTimeout(c, t)), g; } var f, p, h, g, m, v, y = 0, x = !1, T = !1, E = !0; if ("function" != typeof e)
                throw new TypeError(a); return t = r(t) || 0, i(n) && (x = !!n.leading, h = (T = "maxWait" in n) ? b(r(n.maxWait) || 0, t) : h, E = "trailing" in n ? !!n.trailing : E), d.cancel = function () { void 0 !== m && clearTimeout(m), y = 0, f = v = p = m = void 0; }, d.flush = function () { return void 0 === m ? g : u(w()); }, d; }
            function i(e) { var t = void 0 === e ? "undefined" : s(e); return !!e && ("object" == t || "function" == t); }
            function o(e) { return "symbol" == (void 0 === e ? "undefined" : s(e)) || function (e) { return !!e && "object" == (void 0 === e ? "undefined" : s(e)); }(e) && y.call(e) == c; }
            function r(e) { if ("number" == typeof e)
                return e; if (o(e))
                return l; if (i(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = i(t) ? t + "" : t;
            } if ("string" != typeof e)
                return 0 === e ? e : +e; e = e.replace(u, ""); var n = f.test(e); return n || p.test(e) ? h(e.slice(2), n ? 2 : 8) : d.test(e) ? l : +e; }
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, a = "Expected a function", l = NaN, c = "[object Symbol]", u = /^\s+|\s+$/g, d = /^[-+]0x[0-9a-f]+$/i, f = /^0b[01]+$/i, p = /^0o[0-7]+$/i, h = parseInt, g = "object" == (void 0 === t ? "undefined" : s(t)) && t && t.Object === Object && t, m = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self, v = g || m || Function("return this")(), y = Object.prototype.toString, b = Math.max, _ = Math.min, w = function () { return v.Date.now(); };
            e.exports = function (e, t, o) { var r = !0, s = !0; if ("function" != typeof e)
                throw new TypeError(a); return i(o) && (r = "leading" in o ? !!o.leading : r, s = "trailing" in o ? !!o.trailing : s), n(e, t, { leading: r, maxWait: t, trailing: s }); };
        }).call(t, function () { return this; }()); }, function (e, t) { (function (t) {
            "use strict";
            function n(e) { var t = void 0 === e ? "undefined" : r(e); return !!e && ("object" == t || "function" == t); }
            function i(e) { return "symbol" == (void 0 === e ? "undefined" : r(e)) || function (e) { return !!e && "object" == (void 0 === e ? "undefined" : r(e)); }(e) && v.call(e) == l; }
            function o(e) { if ("number" == typeof e)
                return e; if (i(e))
                return a; if (n(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = n(t) ? t + "" : t;
            } if ("string" != typeof e)
                return 0 === e ? e : +e; e = e.replace(c, ""); var o = d.test(e); return o || f.test(e) ? p(e.slice(2), o ? 2 : 8) : u.test(e) ? a : +e; }
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, s = "Expected a function", a = NaN, l = "[object Symbol]", c = /^\s+|\s+$/g, u = /^[-+]0x[0-9a-f]+$/i, d = /^0b[01]+$/i, f = /^0o[0-7]+$/i, p = parseInt, h = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t, g = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self, m = h || g || Function("return this")(), v = Object.prototype.toString, y = Math.max, b = Math.min, _ = function () { return m.Date.now(); };
            e.exports = function (e, t, i) { function r(t) { var n = f, i = p; return f = p = void 0, w = t, g = e.apply(i, n); } function a(e) { return w = e, m = setTimeout(c, t), x ? r(e) : g; } function l(e) { var n = e - v; return void 0 === v || n >= t || n < 0 || T && e - w >= h; } function c() { var e = _(); return l(e) ? u(e) : void (m = setTimeout(c, function (e) { var n = t - (e - v); return T ? b(n, h - (e - w)) : n; }(e))); } function u(e) { return m = void 0, E && f ? r(e) : (f = p = void 0, g); } function d() { var e = _(), n = l(e); if (f = arguments, p = this, v = e, n) {
                if (void 0 === m)
                    return a(v);
                if (T)
                    return m = setTimeout(c, t), r(v);
            } return void 0 === m && (m = setTimeout(c, t)), g; } var f, p, h, g, m, v, w = 0, x = !1, T = !1, E = !0; if ("function" != typeof e)
                throw new TypeError(s); return t = o(t) || 0, n(i) && (x = !!i.leading, h = (T = "maxWait" in i) ? y(o(i.maxWait) || 0, t) : h, E = "trailing" in i ? !!i.trailing : E), d.cancel = function () { void 0 !== m && clearTimeout(m), w = 0, f = v = p = m = void 0; }, d.flush = function () { return void 0 === m ? g : u(_()); }, d; };
        }).call(t, function () { return this; }()); }, function (e, t) {
            "use strict";
            function n(e) { var t = void 0, i = void 0; for (t = 0; t < e.length; t += 1) {
                if ((i = e[t]).dataset && i.dataset.aos)
                    return !0;
                if (i.children && n(i.children))
                    return !0;
            } return !1; }
            function i() { return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver; }
            function o(e) { e && e.forEach((function (e) { var t = Array.prototype.slice.call(e.addedNodes), i = Array.prototype.slice.call(e.removedNodes); if (n(t.concat(i)))
                return r(); })); }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = function () { };
            t.default = { isSupported: function () { return !!i(); }, ready: function (e, t) { var n = window.document, s = new (i())(o); r = t, s.observe(n.documentElement, { childList: !0, subtree: !0, removedNodes: !0 }); } };
        }, function (e, t) {
            "use strict";
            function n() { return navigator.userAgent || navigator.vendor || window.opera || ""; }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = function () { function e(e, t) { for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            } } return function (t, n, i) { return n && e(t.prototype, n), i && e(t, i), t; }; }(), o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, l = function () { function e() { !function (e, t) { if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function"); }(this, e); } return i(e, [{ key: "phone", value: function () { var e = n(); return !(!o.test(e) && !r.test(e.substr(0, 4))); } }, { key: "mobile", value: function () { var e = n(); return !(!s.test(e) && !a.test(e.substr(0, 4))); } }, { key: "tablet", value: function () { return this.mobile() && !this.phone(); } }]), e; }();
            t.default = new l;
        }, function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.default = function (e, t) { var n = window.pageYOffset, i = window.innerHeight; e.forEach((function (e, o) { !function (e, t, n) { var i = e.node.getAttribute("data-aos-once"); t > e.position ? e.node.classList.add("aos-animate") : void 0 !== i && ("false" === i || !n && "true" !== i) && e.node.classList.remove("aos-animate"); }(e, i + n, t); })); };
        }, function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = function (e) { return e && e.__esModule ? e : { default: e }; }(n(12));
            t.default = function (e, t) { return e.forEach((function (e, n) { e.node.classList.add("aos-init"), e.position = (0, i.default)(e.node, t.offset); })), e; };
        }, function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = function (e) { return e && e.__esModule ? e : { default: e }; }(n(13));
            t.default = function (e, t) { var n = 0, o = 0, r = window.innerHeight, s = { offset: e.getAttribute("data-aos-offset"), anchor: e.getAttribute("data-aos-anchor"), anchorPlacement: e.getAttribute("data-aos-anchor-placement") }; switch (s.offset && !isNaN(s.offset) && (o = parseInt(s.offset)), s.anchor && document.querySelectorAll(s.anchor) && (e = document.querySelectorAll(s.anchor)[0]), n = (0, i.default)(e).top, s.anchorPlacement) {
                case "top-bottom": break;
                case "center-bottom":
                    n += e.offsetHeight / 2;
                    break;
                case "bottom-bottom":
                    n += e.offsetHeight;
                    break;
                case "top-center":
                    n += r / 2;
                    break;
                case "bottom-center":
                    n += r / 2 + e.offsetHeight;
                    break;
                case "center-center":
                    n += r / 2 + e.offsetHeight / 2;
                    break;
                case "top-top":
                    n += r;
                    break;
                case "bottom-top":
                    n += e.offsetHeight + r;
                    break;
                case "center-top": n += e.offsetHeight / 2 + r;
            } return s.anchorPlacement || s.offset || isNaN(t) || (o = t), n + o; };
        }, function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.default = function (e) { for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);)
                t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent; return { top: n, left: t }; };
        }, function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.default = function (e) { return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, (function (e) { return { node: e }; })); };
        }]); }, 755: function (e, t) { var n; !function (t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) { if (!e.document)
            throw new Error("jQuery requires a window with a document"); return n(e); } : n(t);
    }("undefined" != typeof window ? window : this, (function (i, o) {
        "use strict";
        var r = [], s = Object.getPrototypeOf, a = r.slice, l = r.flat ? function (e) { return r.flat.call(e); } : function (e) { return r.concat.apply([], e); }, c = r.push, u = r.indexOf, d = {}, f = d.toString, p = d.hasOwnProperty, h = p.toString, g = h.call(Object), m = {}, v = function (e) { return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item; }, y = function (e) { return null != e && e === e.window; }, b = i.document, _ = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function w(e, t, n) { var i, o, r = (n = n || b).createElement("script"); if (r.text = e, t)
            for (i in _)
                (o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o); n.head.appendChild(r).parentNode.removeChild(r); }
        function x(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[f.call(e)] || "object" : typeof e; }
        var T = "3.6.2", E = function (e, t) { return new E.fn.init(e, t); };
        function C(e) { var t = !!e && "length" in e && e.length, n = x(e); return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e); }
        E.fn = E.prototype = { jquery: T, constructor: E, length: 0, toArray: function () { return a.call(this); }, get: function (e) { return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]; }, pushStack: function (e) { var t = E.merge(this.constructor(), e); return t.prevObject = this, t; }, each: function (e) { return E.each(this, e); }, map: function (e) { return this.pushStack(E.map(this, (function (t, n) { return e.call(t, n, t); }))); }, slice: function () { return this.pushStack(a.apply(this, arguments)); }, first: function () { return this.eq(0); }, last: function () { return this.eq(-1); }, even: function () { return this.pushStack(E.grep(this, (function (e, t) { return (t + 1) % 2; }))); }, odd: function () { return this.pushStack(E.grep(this, (function (e, t) { return t % 2; }))); }, eq: function (e) { var t = this.length, n = +e + (e < 0 ? t : 0); return this.pushStack(n >= 0 && n < t ? [this[n]] : []); }, end: function () { return this.prevObject || this.constructor(); }, push: c, sort: r.sort, splice: r.splice }, E.extend = E.fn.extend = function () { var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1; for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    i = e[t], "__proto__" !== t && s !== i && (c && i && (E.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[t], r = o && !Array.isArray(n) ? [] : o || E.isPlainObject(n) ? n : {}, o = !1, s[t] = E.extend(c, r, i)) : void 0 !== i && (s[t] = i)); return s; }, E.extend({ expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) { throw new Error(e); }, noop: function () { }, isPlainObject: function (e) { var t, n; return !(!e || "[object Object]" !== f.call(e) || (t = s(e)) && ("function" != typeof (n = p.call(t, "constructor") && t.constructor) || h.call(n) !== g)); }, isEmptyObject: function (e) { var t; for (t in e)
                return !1; return !0; }, globalEval: function (e, t, n) { w(e, { nonce: t && t.nonce }, n); }, each: function (e, t) { var n, i = 0; if (C(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break; return e; }, makeArray: function (e, t) { var n = t || []; return null != e && (C(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n; }, inArray: function (e, t, n) { return null == t ? -1 : u.call(t, e, n); }, merge: function (e, t) { for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                e[o++] = t[i]; return e.length = o, e; }, grep: function (e, t, n) { for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
                !t(e[o], o) !== s && i.push(e[o]); return i; }, map: function (e, t, n) { var i, o, r = 0, s = []; if (C(e))
                for (i = e.length; r < i; r++)
                    null != (o = t(e[r], r, n)) && s.push(o);
            else
                for (r in e)
                    null != (o = t(e[r], r, n)) && s.push(o); return l(s); }, guid: 1, support: m }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = r[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) { d["[object " + t + "]"] = t.toLowerCase(); }));
        var A = function (e) { var t, n, i, o, r, s, a, l, c, u, d, f, p, h, g, m, v, y, b, _ = "sizzle" + 1 * new Date, w = e.document, x = 0, T = 0, E = le(), C = le(), A = le(), k = le(), S = function (e, t) { return e === t && (d = !0), 0; }, O = {}.hasOwnProperty, L = [], D = L.pop, j = L.push, N = L.push, I = L.slice, P = function (e, t) { for (var n = 0, i = e.length; n < i; n++)
            if (e[n] === t)
                return n; return -1; }, M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", $ = "[\\x20\\t\\r\\n\\f]", q = "(?:\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", H = "\\[" + $ + "*(" + q + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + $ + "*\\]", R = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)", B = new RegExp($ + "+", "g"), F = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"), W = new RegExp("^" + $ + "*," + $ + "*"), z = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"), V = new RegExp($ + "|>"), U = new RegExp(R), X = new RegExp("^" + q + "$"), Y = { ID: new RegExp("^#(" + q + ")"), CLASS: new RegExp("^\\.(" + q + ")"), TAG: new RegExp("^(" + q + "|[*])"), ATTR: new RegExp("^" + H), PSEUDO: new RegExp("^" + R), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)", "i"), bool: new RegExp("^(?:" + M + ")$", "i"), needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)", "i") }, K = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\([^\\r\\n\\f])", "g"), ne = function (e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)); }, ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function (e, t) { return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e; }, re = function () { f(); }, se = _e((function (e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase(); }), { dir: "parentNode", next: "legend" }); try {
            N.apply(L = I.call(w.childNodes), w.childNodes), L[w.childNodes.length].nodeType;
        }
        catch (e) {
            N = { apply: L.length ? function (e, t) { j.apply(e, I.call(t)); } : function (e, t) { for (var n = e.length, i = 0; e[n++] = t[i++];)
                    ; e.length = n - 1; } };
        } function ae(e, t, i, o) { var r, a, c, u, d, h, v, y = t && t.ownerDocument, w = t ? t.nodeType : 9; if (i = i || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w)
            return i; if (!o && (f(t), t = t || p, g)) {
            if (11 !== w && (d = Z.exec(e)))
                if (r = d[1]) {
                    if (9 === w) {
                        if (!(c = t.getElementById(r)))
                            return i;
                        if (c.id === r)
                            return i.push(c), i;
                    }
                    else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r)
                        return i.push(c), i;
                }
                else {
                    if (d[2])
                        return N.apply(i, t.getElementsByTagName(e)), i;
                    if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName)
                        return N.apply(i, t.getElementsByClassName(r)), i;
                }
            if (n.qsa && !k[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                if (v = e, y = t, 1 === w && (V.test(e) || z.test(e))) {
                    for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(ie, oe) : t.setAttribute("id", u = _)), a = (h = s(e)).length; a--;)
                        h[a] = (u ? "#" + u : ":scope") + " " + be(h[a]);
                    v = h.join(",");
                }
                try {
                    if (n.cssSupportsSelector && !CSS.supports("selector(" + v + ")"))
                        throw new Error;
                    return N.apply(i, y.querySelectorAll(v)), i;
                }
                catch (t) {
                    k(e, !0);
                }
                finally {
                    u === _ && t.removeAttribute("id");
                }
            }
        } return l(e.replace(F, "$1"), t, i, o); } function le() { var e = []; return function t(n, o) { return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o; }; } function ce(e) { return e[_] = !0, e; } function ue(e) { var t = p.createElement("fieldset"); try {
            return !!e(t);
        }
        catch (e) {
            return !1;
        }
        finally {
            t.parentNode && t.parentNode.removeChild(t), t = null;
        } } function de(e, t) { for (var n = e.split("|"), o = n.length; o--;)
            i.attrHandle[n[o]] = t; } function fe(e, t) { var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (i)
            return i; if (n)
            for (; n = n.nextSibling;)
                if (n === t)
                    return -1; return e ? 1 : -1; } function pe(e) { return function (t) { return "input" === t.nodeName.toLowerCase() && t.type === e; }; } function he(e) { return function (t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e; }; } function ge(e) { return function (t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e; }; } function me(e) { return ce((function (t) { return t = +t, ce((function (n, i) { for (var o, r = e([], n.length, t), s = r.length; s--;)
            n[o = r[s]] && (n[o] = !(i[o] = n[o])); })); })); } function ve(e) { return e && void 0 !== e.getElementsByTagName && e; } for (t in n = ae.support = {}, r = ae.isXML = function (e) { var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement; return !K.test(t || n && n.nodeName || "HTML"); }, f = ae.setDocument = function (e) { var t, o, s = e ? e.ownerDocument || e : w; return s != p && 9 === s.nodeType && s.documentElement ? (h = (p = s).documentElement, g = !r(p), w != p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), n.scope = ue((function (e) { return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length; })), n.cssSupportsSelector = ue((function () { return CSS.supports("selector(*)") && p.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))"); })), n.attributes = ue((function (e) { return e.className = "i", !e.getAttribute("className"); })), n.getElementsByTagName = ue((function (e) { return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length; })), n.getElementsByClassName = J.test(p.getElementsByClassName), n.getById = ue((function (e) { return h.appendChild(e).id = _, !p.getElementsByName || !p.getElementsByName(_).length; })), n.getById ? (i.filter.ID = function (e) { var t = e.replace(te, ne); return function (e) { return e.getAttribute("id") === t; }; }, i.find.ID = function (e, t) { if (void 0 !== t.getElementById && g) {
            var n = t.getElementById(e);
            return n ? [n] : [];
        } }) : (i.filter.ID = function (e) { var t = e.replace(te, ne); return function (e) { var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t; }; }, i.find.ID = function (e, t) { if (void 0 !== t.getElementById && g) {
            var n, i, o, r = t.getElementById(e);
            if (r) {
                if ((n = r.getAttributeNode("id")) && n.value === e)
                    return [r];
                for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                    if ((n = r.getAttributeNode("id")) && n.value === e)
                        return [r];
            }
            return [];
        } }), i.find.TAG = n.getElementsByTagName ? function (e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0; } : function (e, t) { var n, i = [], o = 0, r = t.getElementsByTagName(e); if ("*" === e) {
            for (; n = r[o++];)
                1 === n.nodeType && i.push(n);
            return i;
        } return r; }, i.find.CLASS = n.getElementsByClassName && function (e, t) { if (void 0 !== t.getElementsByClassName && g)
            return t.getElementsByClassName(e); }, v = [], m = [], (n.qsa = J.test(p.querySelectorAll)) && (ue((function (e) { var t; h.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + $ + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + $ + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + $ + "*name" + $ + "*=" + $ + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]"); })), ue((function (e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = p.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + $ + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:"); }))), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue((function (e) { n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", R); })), n.cssSupportsSelector || m.push(":has"), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function (e, t) { var n = 9 === e.nodeType && e.documentElement || e, i = t && t.parentNode; return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))); } : function (e, t) { if (t)
            for (; t = t.parentNode;)
                if (t === e)
                    return !0; return !1; }, S = t ? function (e, t) { if (e === t)
            return d = !0, 0; var i = !e.compareDocumentPosition - !t.compareDocumentPosition; return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == p || e.ownerDocument == w && b(w, e) ? -1 : t == p || t.ownerDocument == w && b(w, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & i ? -1 : 1); } : function (e, t) { if (e === t)
            return d = !0, 0; var n, i = 0, o = e.parentNode, r = t.parentNode, s = [e], a = [t]; if (!o || !r)
            return e == p ? -1 : t == p ? 1 : o ? -1 : r ? 1 : u ? P(u, e) - P(u, t) : 0; if (o === r)
            return fe(e, t); for (n = e; n = n.parentNode;)
            s.unshift(n); for (n = t; n = n.parentNode;)
            a.unshift(n); for (; s[i] === a[i];)
            i++; return i ? fe(s[i], a[i]) : s[i] == w ? -1 : a[i] == w ? 1 : 0; }, p) : p; }, ae.matches = function (e, t) { return ae(e, null, null, t); }, ae.matchesSelector = function (e, t) { if (f(e), n.matchesSelector && g && !k[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t)))
            try {
                var i = y.call(e, t);
                if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                    return i;
            }
            catch (e) {
                k(t, !0);
            } return ae(t, p, null, [e]).length > 0; }, ae.contains = function (e, t) { return (e.ownerDocument || e) != p && f(e), b(e, t); }, ae.attr = function (e, t) { (e.ownerDocument || e) != p && f(e); var o = i.attrHandle[t.toLowerCase()], r = o && O.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0; return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null; }, ae.escape = function (e) { return (e + "").replace(ie, oe); }, ae.error = function (e) { throw new Error("Syntax error, unrecognized expression: " + e); }, ae.uniqueSort = function (e) { var t, i = [], o = 0, r = 0; if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(S), d) {
            for (; t = e[r++];)
                t === e[r] && (o = i.push(r));
            for (; o--;)
                e.splice(i[o], 1);
        } return u = null, e; }, o = ae.getText = function (e) { var t, n = "", i = 0, r = e.nodeType; if (r) {
            if (1 === r || 9 === r || 11 === r) {
                if ("string" == typeof e.textContent)
                    return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling)
                    n += o(e);
            }
            else if (3 === r || 4 === r)
                return e.nodeValue;
        }
        else
            for (; t = e[i++];)
                n += o(t); return n; }, i = ae.selectors = { cacheLength: 50, createPseudo: ce, match: Y, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4); }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e; }, PSEUDO: function (e) { var t, n = !e[6] && e[2]; return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)); } }, filter: { TAG: function (e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function () { return !0; } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t; }; }, CLASS: function (e) { var t = E[e + " "]; return t || (t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && E(e, (function (e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || ""); })); }, ATTR: function (e, t, n) { return function (i) { var o = ae.attr(i, e); return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-")); }; }, CHILD: function (e, t, n, i, o) { var r = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t; return 1 === i && 0 === o ? function (e) { return !!e.parentNode; } : function (t, n, l) { var c, u, d, f, p, h, g = r !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1; if (m) {
                    if (r) {
                        for (; g;) {
                            for (f = t; f = f[g];)
                                if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                    return !1;
                            h = g = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                    }
                    if (h = [s ? m.firstChild : m.lastChild], s && y) {
                        for (b = (p = (c = (u = (d = (f = m)[_] || (f[_] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (b = p = 0) || h.pop();)
                            if (1 === f.nodeType && ++b && f === t) {
                                u[e] = [x, p, b];
                                break;
                            }
                    }
                    else if (y && (b = p = (c = (u = (d = (f = t)[_] || (f[_] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === b)
                        for (; (f = ++p && f && f[g] || (b = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((u = (d = f[_] || (f[_] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [x, b]), f !== t));)
                            ;
                    return (b -= o) === i || b % i == 0 && b / i >= 0;
                } }; }, PSEUDO: function (e, t) { var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e); return o[_] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function (e, n) { for (var i, r = o(e, t), s = r.length; s--;)
                    e[i = P(e, r[s])] = !(n[i] = r[s]); })) : function (e) { return o(e, 0, n); }) : o; } }, pseudos: { not: ce((function (e) { var t = [], n = [], i = a(e.replace(F, "$1")); return i[_] ? ce((function (e, t, n, o) { for (var r, s = i(e, null, o, []), a = e.length; a--;)
                    (r = s[a]) && (e[a] = !(t[a] = r)); })) : function (e, o, r) { return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop(); }; })), has: ce((function (e) { return function (t) { return ae(e, t).length > 0; }; })), contains: ce((function (e) { return e = e.replace(te, ne), function (t) { return (t.textContent || o(t)).indexOf(e) > -1; }; })), lang: ce((function (e) { return X.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) { var n; do {
                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                        return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                } while ((t = t.parentNode) && 1 === t.nodeType); return !1; }; })), target: function (t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id; }, root: function (e) { return e === h; }, focus: function (e) { return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex); }, enabled: ge(!1), disabled: ge(!0), checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected; }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected; }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6)
                        return !1; return !0; }, parent: function (e) { return !i.pseudos.empty(e); }, header: function (e) { return G.test(e.nodeName); }, input: function (e) { return Q.test(e.nodeName); }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t; }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()); }, first: me((function () { return [0]; })), last: me((function (e, t) { return [t - 1]; })), eq: me((function (e, t, n) { return [n < 0 ? n + t : n]; })), even: me((function (e, t) { for (var n = 0; n < t; n += 2)
                    e.push(n); return e; })), odd: me((function (e, t) { for (var n = 1; n < t; n += 2)
                    e.push(n); return e; })), lt: me((function (e, t, n) { for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;)
                    e.push(i); return e; })), gt: me((function (e, t, n) { for (var i = n < 0 ? n + t : n; ++i < t;)
                    e.push(i); return e; })) } }, i.pseudos.nth = i.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
            i.pseudos[t] = pe(t); for (t in { submit: !0, reset: !0 })
            i.pseudos[t] = he(t); function ye() { } function be(e) { for (var t = 0, n = e.length, i = ""; t < n; t++)
            i += e[t].value; return i; } function _e(e, t, n) { var i = t.dir, o = t.next, r = o || i, s = n && "parentNode" === r, a = T++; return t.first ? function (t, n, o) { for (; t = t[i];)
            if (1 === t.nodeType || s)
                return e(t, n, o); return !1; } : function (t, n, l) { var c, u, d, f = [x, a]; if (l) {
            for (; t = t[i];)
                if ((1 === t.nodeType || s) && e(t, n, l))
                    return !0;
        }
        else
            for (; t = t[i];)
                if (1 === t.nodeType || s)
                    if (u = (d = t[_] || (t[_] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase())
                        t = t[i] || t;
                    else {
                        if ((c = u[r]) && c[0] === x && c[1] === a)
                            return f[2] = c[2];
                        if (u[r] = f, f[2] = e(t, n, l))
                            return !0;
                    } return !1; }; } function we(e) { return e.length > 1 ? function (t, n, i) { for (var o = e.length; o--;)
            if (!e[o](t, n, i))
                return !1; return !0; } : e[0]; } function xe(e, t, n, i, o) { for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
            (r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a))); return s; } function Te(e, t, n, i, o, r) { return i && !i[_] && (i = Te(i)), o && !o[_] && (o = Te(o, r)), ce((function (r, s, a, l) { var c, u, d, f = [], p = [], h = s.length, g = r || function (e, t, n) { for (var i = 0, o = t.length; i < o; i++)
            ae(e, t[i], n); return n; }(t || "*", a.nodeType ? [a] : a, []), m = !e || !r && t ? g : xe(g, f, e, a, l), v = n ? o || (r ? e : h || i) ? [] : s : m; if (n && n(m, v, a, l), i)
            for (c = xe(v, p), i(c, [], a, l), u = c.length; u--;)
                (d = c[u]) && (v[p[u]] = !(m[p[u]] = d)); if (r) {
            if (o || e) {
                if (o) {
                    for (c = [], u = v.length; u--;)
                        (d = v[u]) && c.push(m[u] = d);
                    o(null, v = [], c, l);
                }
                for (u = v.length; u--;)
                    (d = v[u]) && (c = o ? P(r, d) : f[u]) > -1 && (r[c] = !(s[c] = d));
            }
        }
        else
            v = xe(v === s ? v.splice(h, v.length) : v), o ? o(null, s, v, l) : N.apply(s, v); })); } function Ee(e) { for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = _e((function (e) { return e === t; }), a, !0), d = _e((function (e) { return P(t, e) > -1; }), a, !0), f = [function (e, n, i) { var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i)); return t = null, o; }]; l < r; l++)
            if (n = i.relative[e[l].type])
                f = [_e(we(f), n)];
            else {
                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                    for (o = ++l; o < r && !i.relative[e[o].type]; o++)
                        ;
                    return Te(l > 1 && we(f), l > 1 && be(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(F, "$1"), n, l < o && Ee(e.slice(l, o)), o < r && Ee(e = e.slice(o)), o < r && be(e));
                }
                f.push(n);
            } return we(f); } return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function (e, t) { var n, o, r, s, a, l, c, u = C[e + " "]; if (u)
            return t ? 0 : u.slice(0); for (a = e, l = [], c = i.preFilter; a;) {
            for (s in n && !(o = W.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = z.exec(a)) && (n = o.shift(), r.push({ value: n, type: o[0].replace(F, " ") }), a = a.slice(n.length)), i.filter)
                !(o = Y[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({ value: n, type: s, matches: o }), a = a.slice(n.length));
            if (!n)
                break;
        } return t ? a.length : a ? ae.error(e) : C(e, l).slice(0); }, a = ae.compile = function (e, t) { var n, o = [], r = [], a = A[e + " "]; if (!a) {
            for (t || (t = s(e)), n = t.length; n--;)
                (a = Ee(t[n]))[_] ? o.push(a) : r.push(a);
            a = A(e, function (e, t) { var n = t.length > 0, o = e.length > 0, r = function (r, s, a, l, u) { var d, h, m, v = 0, y = "0", b = r && [], _ = [], w = c, T = r || o && i.find.TAG("*", u), E = x += null == w ? 1 : Math.random() || .1, C = T.length; for (u && (c = s == p || s || u); y !== C && null != (d = T[y]); y++) {
                if (o && d) {
                    for (h = 0, s || d.ownerDocument == p || (f(d), a = !g); m = e[h++];)
                        if (m(d, s || p, a)) {
                            l.push(d);
                            break;
                        }
                    u && (x = E);
                }
                n && ((d = !m && d) && v--, r && b.push(d));
            } if (v += y, n && y !== v) {
                for (h = 0; m = t[h++];)
                    m(b, _, s, a);
                if (r) {
                    if (v > 0)
                        for (; y--;)
                            b[y] || _[y] || (_[y] = D.call(l));
                    _ = xe(_);
                }
                N.apply(l, _), u && !r && _.length > 0 && v + t.length > 1 && ae.uniqueSort(l);
            } return u && (x = E, c = w), b; }; return n ? ce(r) : r; }(r, o)), a.selector = e;
        } return a; }, l = ae.select = function (e, t, n, o) { var r, l, c, u, d, f = "function" == typeof e && e, p = !o && s(e = f.selector || e); if (n = n || [], 1 === p.length) {
            if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                    return n;
                f && (t = t.parentNode), e = e.slice(l.shift().value.length);
            }
            for (r = Y.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);)
                if ((d = i.find[u]) && (o = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                    if (l.splice(r, 1), !(e = o.length && be(l)))
                        return N.apply(n, o), n;
                    break;
                }
        } return (f || a(e, p))(o, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n; }, n.sortStable = _.split("").sort(S).join("") === _, n.detectDuplicates = !!d, f(), n.sortDetached = ue((function (e) { return 1 & e.compareDocumentPosition(p.createElement("fieldset")); })), ue((function (e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href"); })) || de("type|href|height|width", (function (e, t, n) { if (!n)
            return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2); })), n.attributes && ue((function (e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value"); })) || de("value", (function (e, t, n) { if (!n && "input" === e.nodeName.toLowerCase())
            return e.defaultValue; })), ue((function (e) { return null == e.getAttribute("disabled"); })) || de(M, (function (e, t, n) { var i; if (!n)
            return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null; })), ae; }(i);
        E.find = A, E.expr = A.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = A.uniqueSort, E.text = A.getText, E.isXMLDoc = A.isXML, E.contains = A.contains, E.escapeSelector = A.escape;
        var k = function (e, t, n) { for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (o && E(e).is(n))
                    break;
                i.push(e);
            } return i; }, S = function (e, t) { for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e); return n; }, O = E.expr.match.needsContext;
        function L(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase(); }
        var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function j(e, t, n) { return v(t) ? E.grep(e, (function (e, i) { return !!t.call(e, i, e) !== n; })) : t.nodeType ? E.grep(e, (function (e) { return e === t !== n; })) : "string" != typeof t ? E.grep(e, (function (e) { return u.call(t, e) > -1 !== n; })) : E.filter(t, e, n); }
        E.filter = function (e, t, n) { var i = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? E.find.matchesSelector(i, e) ? [i] : [] : E.find.matches(e, E.grep(t, (function (e) { return 1 === e.nodeType; }))); }, E.fn.extend({ find: function (e) { var t, n, i = this.length, o = this; if ("string" != typeof e)
                return this.pushStack(E(e).filter((function () { for (t = 0; t < i; t++)
                    if (E.contains(o[t], this))
                        return !0; }))); for (n = this.pushStack([]), t = 0; t < i; t++)
                E.find(e, o[t], n); return i > 1 ? E.uniqueSort(n) : n; }, filter: function (e) { return this.pushStack(j(this, e || [], !1)); }, not: function (e) { return this.pushStack(j(this, e || [], !0)); }, is: function (e) { return !!j(this, "string" == typeof e && O.test(e) ? E(e) : e || [], !1).length; } });
        var N, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (E.fn.init = function (e, t, n) { var i, o; if (!e)
            return this; if (n = n || N, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), D.test(i[1]) && E.isPlainObject(t))
                    for (i in t)
                        v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (o = b.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
        } return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this); }).prototype = E.fn, N = E(b);
        var P = /^(?:parents|prev(?:Until|All))/, M = { children: !0, contents: !0, next: !0, prev: !0 };
        function $(e, t) { for (; (e = e[t]) && 1 !== e.nodeType;)
            ; return e; }
        E.fn.extend({ has: function (e) { var t = E(e, this), n = t.length; return this.filter((function () { for (var e = 0; e < n; e++)
                if (E.contains(this, t[e]))
                    return !0; })); }, closest: function (e, t) { var n, i = 0, o = this.length, r = [], s = "string" != typeof e && E(e); if (!O.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            r.push(n);
                            break;
                        } return this.pushStack(r.length > 1 ? E.uniqueSort(r) : r); }, index: function (e) { return e ? "string" == typeof e ? u.call(E(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1; }, add: function (e, t) { return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t)))); }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)); } }), E.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null; }, parents: function (e) { return k(e, "parentNode"); }, parentsUntil: function (e, t, n) { return k(e, "parentNode", n); }, next: function (e) { return $(e, "nextSibling"); }, prev: function (e) { return $(e, "previousSibling"); }, nextAll: function (e) { return k(e, "nextSibling"); }, prevAll: function (e) { return k(e, "previousSibling"); }, nextUntil: function (e, t, n) { return k(e, "nextSibling", n); }, prevUntil: function (e, t, n) { return k(e, "previousSibling", n); }, siblings: function (e) { return S((e.parentNode || {}).firstChild, e); }, children: function (e) { return S(e.firstChild); }, contents: function (e) { return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (L(e, "template") && (e = e.content || e), E.merge([], e.childNodes)); } }, (function (e, t) { E.fn[e] = function (n, i) { var o = E.map(this, t, n); return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = E.filter(i, o)), this.length > 1 && (M[e] || E.uniqueSort(o), P.test(e) && o.reverse()), this.pushStack(o); }; }));
        var q = /[^\x20\t\r\n\f]+/g;
        function H(e) { return e; }
        function R(e) { throw e; }
        function B(e, t, n, i) { var o; try {
            e && v(o = e.promise) ? o.call(e).done(t).fail(n) : e && v(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i));
        }
        catch (e) {
            n.apply(void 0, [e]);
        } }
        E.Callbacks = function (e) { e = "string" == typeof e ? function (e) { var t = {}; return E.each(e.match(q) || [], (function (e, n) { t[n] = !0; })), t; }(e) : E.extend({}, e); var t, n, i, o, r = [], s = [], a = -1, l = function () { for (o = o || e.once, i = t = !0; s.length; a = -1)
            for (n = s.shift(); ++a < r.length;)
                !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, n = !1); e.memory || (n = !1), t = !1, o && (r = n ? [] : ""); }, c = { add: function () { return r && (n && !t && (a = r.length - 1, s.push(n)), function t(n) { E.each(n, (function (n, i) { v(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== x(i) && t(i); })); }(arguments), n && !t && l()), this; }, remove: function () { return E.each(arguments, (function (e, t) { for (var n; (n = E.inArray(t, r, n)) > -1;)
                r.splice(n, 1), n <= a && a--; })), this; }, has: function (e) { return e ? E.inArray(e, r) > -1 : r.length > 0; }, empty: function () { return r && (r = []), this; }, disable: function () { return o = s = [], r = n = "", this; }, disabled: function () { return !r; }, lock: function () { return o = s = [], n || t || (r = n = ""), this; }, locked: function () { return !!o; }, fireWith: function (e, n) { return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this; }, fire: function () { return c.fireWith(this, arguments), this; }, fired: function () { return !!i; } }; return c; }, E.extend({ Deferred: function (e) { var t = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]], n = "pending", o = { state: function () { return n; }, always: function () { return r.done(arguments).fail(arguments), this; }, catch: function (e) { return o.then(null, e); }, pipe: function () { var e = arguments; return E.Deferred((function (n) { E.each(t, (function (t, i) { var o = v(e[i[4]]) && e[i[4]]; r[i[1]]((function () { var e = o && o.apply(this, arguments); e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments); })); })), e = null; })).promise(); }, then: function (e, n, o) { var r = 0; function s(e, t, n, o) { return function () { var a = this, l = arguments, c = function () { var i, c; if (!(e < r)) {
                    if ((i = n.apply(a, l)) === t.promise())
                        throw new TypeError("Thenable self-resolution");
                    c = i && ("object" == typeof i || "function" == typeof i) && i.then, v(c) ? o ? c.call(i, s(r, t, H, o), s(r, t, R, o)) : (r++, c.call(i, s(r, t, H, o), s(r, t, R, o), s(r, t, H, t.notifyWith))) : (n !== H && (a = void 0, l = [i]), (o || t.resolveWith)(a, l));
                } }, u = o ? c : function () { try {
                    c();
                }
                catch (i) {
                    E.Deferred.exceptionHook && E.Deferred.exceptionHook(i, u.stackTrace), e + 1 >= r && (n !== R && (a = void 0, l = [i]), t.rejectWith(a, l));
                } }; e ? u() : (E.Deferred.getStackHook && (u.stackTrace = E.Deferred.getStackHook()), i.setTimeout(u)); }; } return E.Deferred((function (i) { t[0][3].add(s(0, i, v(o) ? o : H, i.notifyWith)), t[1][3].add(s(0, i, v(e) ? e : H)), t[2][3].add(s(0, i, v(n) ? n : R)); })).promise(); }, promise: function (e) { return null != e ? E.extend(e, o) : o; } }, r = {}; return E.each(t, (function (e, i) { var s = i[2], a = i[5]; o[i[1]] = s.add, a && s.add((function () { n = a; }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(i[3].fire), r[i[0]] = function () { return r[i[0] + "With"](this === r ? void 0 : this, arguments), this; }, r[i[0] + "With"] = s.fireWith; })), o.promise(r), e && e.call(r, r), r; }, when: function (e) { var t = arguments.length, n = t, i = Array(n), o = a.call(arguments), r = E.Deferred(), s = function (e) { return function (n) { i[e] = this, o[e] = arguments.length > 1 ? a.call(arguments) : n, --t || r.resolveWith(i, o); }; }; if (t <= 1 && (B(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || v(o[n] && o[n].then)))
                return r.then(); for (; n--;)
                B(o[n], s(n), r.reject); return r.promise(); } });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        E.Deferred.exceptionHook = function (e, t) { i.console && i.console.warn && e && F.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t); }, E.readyException = function (e) { i.setTimeout((function () { throw e; })); };
        var W = E.Deferred();
        function z() { b.removeEventListener("DOMContentLoaded", z), i.removeEventListener("load", z), E.ready(); }
        E.fn.ready = function (e) { return W.then(e).catch((function (e) { E.readyException(e); })), this; }, E.extend({ isReady: !1, readyWait: 1, ready: function (e) { (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0, !0 !== e && --E.readyWait > 0 || W.resolveWith(b, [E])); } }), E.ready.then = W.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? i.setTimeout(E.ready) : (b.addEventListener("DOMContentLoaded", z), i.addEventListener("load", z));
        var V = function (e, t, n, i, o, r, s) { var a = 0, l = e.length, c = null == n; if ("object" === x(n))
            for (a in o = !0, n)
                V(e, t, a, n[a], !0, r, s);
        else if (void 0 !== i && (o = !0, v(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) { return c.call(E(e), n); })), t))
            for (; a < l; a++)
                t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n))); return o ? e : c ? t.call(e) : l ? t(e[0], n) : r; }, U = /^-ms-/, X = /-([a-z])/g;
        function Y(e, t) { return t.toUpperCase(); }
        function K(e) { return e.replace(U, "ms-").replace(X, Y); }
        var Q = function (e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType; };
        function G() { this.expando = E.expando + G.uid++; }
        G.uid = 1, G.prototype = { cache: function (e) { var t = e[this.expando]; return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t; }, set: function (e, t, n) { var i, o = this.cache(e); if ("string" == typeof t)
                o[K(t)] = n;
            else
                for (i in t)
                    o[K(i)] = t[i]; return o; }, get: function (e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)]; }, access: function (e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t); }, remove: function (e, t) { var n, i = e[this.expando]; if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in i ? [t] : t.match(q) || []).length;
                    for (; n--;)
                        delete i[t[n]];
                }
                (void 0 === t || E.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            } }, hasData: function (e) { var t = e[this.expando]; return void 0 !== t && !E.isEmptyObject(t); } };
        var J = new G, Z = new G, ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, te = /[A-Z]/g;
        function ne(e, t, n) { var i; if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = function (e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e); }(n);
                }
                catch (e) { }
                Z.set(e, t, n);
            }
            else
                n = void 0; return n; }
        E.extend({ hasData: function (e) { return Z.hasData(e) || J.hasData(e); }, data: function (e, t, n) { return Z.access(e, t, n); }, removeData: function (e, t) { Z.remove(e, t); }, _data: function (e, t, n) { return J.access(e, t, n); }, _removeData: function (e, t) { J.remove(e, t); } }), E.fn.extend({ data: function (e, t) { var n, i, o, r = this[0], s = r && r.attributes; if (void 0 === e) {
                if (this.length && (o = Z.get(r), 1 === r.nodeType && !J.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;)
                        s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = K(i.slice(5)), ne(r, i, o[i]));
                    J.set(r, "hasDataAttrs", !0);
                }
                return o;
            } return "object" == typeof e ? this.each((function () { Z.set(this, e); })) : V(this, (function (t) { var n; if (r && void 0 === t)
                return void 0 !== (n = Z.get(r, e)) || void 0 !== (n = ne(r, e)) ? n : void 0; this.each((function () { Z.set(this, e, t); })); }), null, t, arguments.length > 1, null, !0); }, removeData: function (e) { return this.each((function () { Z.remove(this, e); })); } }), E.extend({ queue: function (e, t, n) { var i; if (e)
                return t = (t || "fx") + "queue", i = J.get(e, t), n && (!i || Array.isArray(n) ? i = J.access(e, t, E.makeArray(n)) : i.push(n)), i || []; }, dequeue: function (e, t) { t = t || "fx"; var n = E.queue(e, t), i = n.length, o = n.shift(), r = E._queueHooks(e, t); "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, (function () { E.dequeue(e, t); }), r)), !i && r && r.empty.fire(); }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return J.get(e, n) || J.access(e, n, { empty: E.Callbacks("once memory").add((function () { J.remove(e, [t + "queue", n]); })) }); } }), E.fn.extend({ queue: function (e, t) { var n = 2; return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? E.queue(this[0], e) : void 0 === t ? this : this.each((function () { var n = E.queue(this, e, t); E._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e); })); }, dequeue: function (e) { return this.each((function () { E.dequeue(this, e); })); }, clearQueue: function (e) { return this.queue(e || "fx", []); }, promise: function (e, t) { var n, i = 1, o = E.Deferred(), r = this, s = this.length, a = function () { --i || o.resolveWith(r, [r]); }; for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)
                (n = J.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a)); return a(), o.promise(t); } });
        var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, oe = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"), re = ["Top", "Right", "Bottom", "Left"], se = b.documentElement, ae = function (e) { return E.contains(e.ownerDocument, e); }, le = { composed: !0 };
        se.getRootNode && (ae = function (e) { return E.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument; });
        var ce = function (e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === E.css(e, "display"); };
        function ue(e, t, n, i) { var o, r, s = 20, a = i ? function () { return i.cur(); } : function () { return E.css(e, t, ""); }, l = a(), c = n && n[3] || (E.cssNumber[t] ? "" : "px"), u = e.nodeType && (E.cssNumber[t] || "px" !== c && +l) && oe.exec(E.css(e, t)); if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;)
                E.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
            u *= 2, E.style(e, t, u + c), n = n || [];
        } return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o; }
        var de = {};
        function fe(e) { var t, n = e.ownerDocument, i = e.nodeName, o = de[i]; return o || (t = n.body.appendChild(n.createElement(i)), o = E.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), de[i] = o, o); }
        function pe(e, t) { for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
            (i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = J.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && ce(i) && (o[r] = fe(i))) : "none" !== n && (o[r] = "none", J.set(i, "display", n))); for (r = 0; r < s; r++)
            null != o[r] && (e[r].style.display = o[r]); return e; }
        E.fn.extend({ show: function () { return pe(this, !0); }, hide: function () { return pe(this); }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () { ce(this) ? E(this).show() : E(this).hide(); })); } });
        var he, ge, me = /^(?:checkbox|radio)$/i, ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ye = /^$|^module$|\/(?:java|ecma)script/i;
        he = b.createDocumentFragment().appendChild(b.createElement("div")), (ge = b.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), he.appendChild(ge), m.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue, he.innerHTML = "<option></option>", m.option = !!he.lastChild;
        var be = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        function _e(e, t) { var n; return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && L(e, t) ? E.merge([e], n) : n; }
        function we(e, t) { for (var n = 0, i = e.length; n < i; n++)
            J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval")); }
        be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, be.th = be.td, m.option || (be.optgroup = be.option = [1, "<select multiple='multiple'>", "</select>"]);
        var xe = /<|&#?\w+;/;
        function Te(e, t, n, i, o) { for (var r, s, a, l, c, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
            if ((r = e[p]) || 0 === r)
                if ("object" === x(r))
                    E.merge(f, r.nodeType ? [r] : r);
                else if (xe.test(r)) {
                    for (s = s || d.appendChild(t.createElement("div")), a = (ve.exec(r) || ["", ""])[1].toLowerCase(), l = be[a] || be._default, s.innerHTML = l[1] + E.htmlPrefilter(r) + l[2], u = l[0]; u--;)
                        s = s.lastChild;
                    E.merge(f, s.childNodes), (s = d.firstChild).textContent = "";
                }
                else
                    f.push(t.createTextNode(r)); for (d.textContent = "", p = 0; r = f[p++];)
            if (i && E.inArray(r, i) > -1)
                o && o.push(r);
            else if (c = ae(r), s = _e(d.appendChild(r), "script"), c && we(s), n)
                for (u = 0; r = s[u++];)
                    ye.test(r.type || "") && n.push(r); return d; }
        var Ee = /^([^.]*)(?:\.(.+)|)/;
        function Ce() { return !0; }
        function Ae() { return !1; }
        function ke(e, t) { return e === function () { try {
            return b.activeElement;
        }
        catch (e) { } }() == ("focus" === t); }
        function Se(e, t, n, i, o, r) { var s, a; if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t)
                Se(e, a, n, i, t[a], r);
            return e;
        } if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o)
            o = Ae;
        else if (!o)
            return e; return 1 === r && (s = o, o = function (e) { return E().off(e), s.apply(this, arguments); }, o.guid = s.guid || (s.guid = E.guid++)), e.each((function () { E.event.add(this, t, o, i, n); })); }
        function Oe(e, t, n) { n ? (J.set(e, t, !1), E.event.add(e, t, { namespace: !1, handler: function (e) { var i, o, r = J.get(this, t); if (1 & e.isTrigger && this[t]) {
                if (r.length)
                    (E.event.special[t] || {}).delegateType && e.stopPropagation();
                else if (r = a.call(arguments), J.set(this, t, r), i = n(this, t), this[t](), r !== (o = J.get(this, t)) || i ? J.set(this, t, !1) : o = {}, r !== o)
                    return e.stopImmediatePropagation(), e.preventDefault(), o && o.value;
            }
            else
                r.length && (J.set(this, t, { value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation()); } })) : void 0 === J.get(e, t) && E.event.add(e, t, Ce); }
        E.event = { global: {}, add: function (e, t, n, i, o) { var r, s, a, l, c, u, d, f, p, h, g, m = J.get(e); if (Q(e))
                for (n.handler && (n = (r = n).handler, o = r.selector), o && E.find.matchesSelector(se, o), n.guid || (n.guid = E.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function (t) { return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0; }), c = (t = (t || "").match(q) || [""]).length; c--;)
                    p = g = (a = Ee.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), p && (d = E.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = E.event.special[p] || {}, u = E.extend({ type: p, origType: g, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && E.expr.match.needsContext.test(o), namespace: h.join(".") }, r), (f = l[p]) || ((f = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(p, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), E.event.global[p] = !0); }, remove: function (e, t, n, i, o) { var r, s, a, l, c, u, d, f, p, h, g, m = J.hasData(e) && J.get(e); if (m && (l = m.events)) {
                for (c = (t = (t || "").match(q) || [""]).length; c--;)
                    if (p = g = (a = Ee.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), p) {
                        for (d = E.event.special[p] || {}, f = l[p = (i ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = f.length; r--;)
                            u = f[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || E.removeEvent(e, p, m.handle), delete l[p]);
                    }
                    else
                        for (p in l)
                            E.event.remove(e, p + t[c], n, i, !0);
                E.isEmptyObject(l) && J.remove(e, "handle events");
            } }, dispatch: function (e) { var t, n, i, o, r, s, a = new Array(arguments.length), l = E.event.fix(e), c = (J.get(this, "events") || Object.create(null))[l.type] || [], u = E.event.special[l.type] || {}; for (a[0] = l, t = 1; t < arguments.length; t++)
                a[t] = arguments[t]; if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                for (s = E.event.handlers.call(this, l, c), t = 0; (o = s[t++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();)
                        l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (i = ((E.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result;
            } }, handlers: function (e, t) { var n, i, o, r, s, a = [], l = t.delegateCount, c = e.target; if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++)
                            void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? E(o, this).index(c) > -1 : E.find(o, this, null, [c]).length), s[o] && r.push(i);
                        r.length && a.push({ elem: c, handlers: r });
                    } return c = this, l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a; }, addProp: function (e, t) { Object.defineProperty(E.Event.prototype, e, { enumerable: !0, configurable: !0, get: v(t) ? function () { if (this.originalEvent)
                    return t(this.originalEvent); } : function () { if (this.originalEvent)
                    return this.originalEvent[e]; }, set: function (t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }); } }); }, fix: function (e) { return e[E.expando] ? e : new E.Event(e); }, special: { load: { noBubble: !0 }, click: { setup: function (e) { var t = this || e; return me.test(t.type) && t.click && L(t, "input") && Oe(t, "click", Ce), !1; }, trigger: function (e) { var t = this || e; return me.test(t.type) && t.click && L(t, "input") && Oe(t, "click"), !0; }, _default: function (e) { var t = e.target; return me.test(t.type) && t.click && L(t, "input") && J.get(t, "click") || L(t, "a"); } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result); } } } }, E.removeEvent = function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n); }, E.Event = function (e, t) { if (!(this instanceof E.Event))
            return new E.Event(e, t); e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ae, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0; }, E.Event.prototype = { constructor: E.Event, isDefaultPrevented: Ae, isPropagationStopped: Ae, isImmediatePropagationStopped: Ae, isSimulated: !1, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault(); }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation(); }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation(); } }, E.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, E.event.addProp), E.each({ focus: "focusin", blur: "focusout" }, (function (e, t) { E.event.special[e] = { setup: function () { return Oe(this, e, ke), !1; }, trigger: function () { return Oe(this, e), !0; }, _default: function (t) { return J.get(t.target, e); }, delegateType: t }; })), E.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, (function (e, t) { E.event.special[e] = { delegateType: t, bindType: t, handle: function (e) { var n, i = this, o = e.relatedTarget, r = e.handleObj; return o && (o === i || E.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n; } }; })), E.fn.extend({ on: function (e, t, n, i) { return Se(this, e, t, n, i); }, one: function (e, t, n, i) { return Se(this, e, t, n, i, 1); }, off: function (e, t, n) { var i, o; if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj, E(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this;
            } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ae), this.each((function () { E.event.remove(this, e, n, t); })); } });
        var Le = /<script|<style|<link/i, De = /checked\s*(?:[^=]|=\s*.checked.)/i, je = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function Ne(e, t) { return L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e; }
        function Ie(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e; }
        function Pe(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e; }
        function Me(e, t) { var n, i, o, r, s, a; if (1 === t.nodeType) {
            if (J.hasData(e) && (a = J.get(e).events))
                for (o in J.remove(t, "handle events"), a)
                    for (n = 0, i = a[o].length; n < i; n++)
                        E.event.add(t, o, a[o][n]);
            Z.hasData(e) && (r = Z.access(e), s = E.extend({}, r), Z.set(t, s));
        } }
        function $e(e, t) { var n = t.nodeName.toLowerCase(); "input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue); }
        function qe(e, t, n, i) { t = l(t); var o, r, s, a, c, u, d = 0, f = e.length, p = f - 1, h = t[0], g = v(h); if (g || f > 1 && "string" == typeof h && !m.checkClone && De.test(h))
            return e.each((function (o) { var r = e.eq(o); g && (t[0] = h.call(this, o, r.html())), qe(r, t, n, i); })); if (f && (r = (o = Te(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
            for (a = (s = E.map(_e(o, "script"), Ie)).length; d < f; d++)
                c = o, d !== p && (c = E.clone(c, !0, !0), a && E.merge(s, _e(c, "script"))), n.call(e[d], c, d);
            if (a)
                for (u = s[s.length - 1].ownerDocument, E.map(s, Pe), d = 0; d < a; d++)
                    c = s[d], ye.test(c.type || "") && !J.access(c, "globalEval") && E.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? E._evalUrl && !c.noModule && E._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") }, u) : w(c.textContent.replace(je, ""), c, u));
        } return e; }
        function He(e, t, n) { for (var i, o = t ? E.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || E.cleanData(_e(i)), i.parentNode && (n && ae(i) && we(_e(i, "script")), i.parentNode.removeChild(i)); return e; }
        E.extend({ htmlPrefilter: function (e) { return e; }, clone: function (e, t, n) { var i, o, r, s, a = e.cloneNode(!0), l = ae(e); if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (s = _e(a), i = 0, o = (r = _e(e)).length; i < o; i++)
                    $e(r[i], s[i]); if (t)
                if (n)
                    for (r = r || _e(e), s = s || _e(a), i = 0, o = r.length; i < o; i++)
                        Me(r[i], s[i]);
                else
                    Me(e, a); return (s = _e(a, "script")).length > 0 && we(s, !l && _e(e, "script")), a; }, cleanData: function (e) { for (var t, n, i, o = E.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (Q(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (i in t.events)
                                o[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
                        n[J.expando] = void 0;
                    }
                    n[Z.expando] && (n[Z.expando] = void 0);
                } } }), E.fn.extend({ detach: function (e) { return He(this, e, !0); }, remove: function (e) { return He(this, e); }, text: function (e) { return V(this, (function (e) { return void 0 === e ? E.text(this) : this.empty().each((function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e); })); }), null, e, arguments.length); }, append: function () { return qe(this, arguments, (function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e); })); }, prepend: function () { return qe(this, arguments, (function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = Ne(this, e);
                t.insertBefore(e, t.firstChild);
            } })); }, before: function () { return qe(this, arguments, (function (e) { this.parentNode && this.parentNode.insertBefore(e, this); })); }, after: function () { return qe(this, arguments, (function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling); })); }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (E.cleanData(_e(e, !1)), e.textContent = ""); return this; }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map((function () { return E.clone(this, e, t); })); }, html: function (e) { return V(this, (function (e) { var t = this[0] || {}, n = 0, i = this.length; if (void 0 === e && 1 === t.nodeType)
                return t.innerHTML; if ("string" == typeof e && !Le.test(e) && !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                e = E.htmlPrefilter(e);
                try {
                    for (; n < i; n++)
                        1 === (t = this[n] || {}).nodeType && (E.cleanData(_e(t, !1)), t.innerHTML = e);
                    t = 0;
                }
                catch (e) { }
            } t && this.empty().append(e); }), null, e, arguments.length); }, replaceWith: function () { var e = []; return qe(this, arguments, (function (t) { var n = this.parentNode; E.inArray(this, e) < 0 && (E.cleanData(_e(this)), n && n.replaceChild(t, this)); }), e); } }), E.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, (function (e, t) { E.fn[e] = function (e) { for (var n, i = [], o = E(e), r = o.length - 1, s = 0; s <= r; s++)
            n = s === r ? this : this.clone(!0), E(o[s])[t](n), c.apply(i, n.get()); return this.pushStack(i); }; }));
        var Re = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"), Be = /^--/, Fe = function (e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = i), t.getComputedStyle(e); }, We = function (e, t, n) { var i, o, r = {}; for (o in t)
            r[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.call(e), t)
            e.style[o] = r[o]; return i; }, ze = new RegExp(re.join("|"), "i"), Ve = "[\\x20\\t\\r\\n\\f]", Ue = new RegExp("^" + Ve + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Ve + "+$", "g");
        function Xe(e, t, n) { var i, o, r, s, a = Be.test(t), l = e.style; return (n = n || Fe(e)) && (s = n.getPropertyValue(t) || n[t], a && s && (s = s.replace(Ue, "$1") || void 0), "" !== s || ae(e) || (s = E.style(e, t)), !m.pixelBoxStyles() && Re.test(s) && ze.test(t) && (i = l.width, o = l.minWidth, r = l.maxWidth, l.minWidth = l.maxWidth = l.width = s, s = n.width, l.width = i, l.minWidth = o, l.maxWidth = r)), void 0 !== s ? s + "" : s; }
        function Ye(e, t) { return { get: function () { if (!e())
                return (this.get = t).apply(this, arguments); delete this.get; } }; }
        !function () { function e() { if (u) {
            c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(c).appendChild(u);
            var e = i.getComputedStyle(u);
            n = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", s = 36 === t(e.right), o = 36 === t(e.width), u.style.position = "absolute", r = 12 === t(u.offsetWidth / 3), se.removeChild(c), u = null;
        } } function t(e) { return Math.round(parseFloat(e)); } var n, o, r, s, a, l, c = b.createElement("div"), u = b.createElement("div"); u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === u.style.backgroundClip, E.extend(m, { boxSizingReliable: function () { return e(), o; }, pixelBoxStyles: function () { return e(), s; }, pixelPosition: function () { return e(), n; }, reliableMarginLeft: function () { return e(), l; }, scrollboxSize: function () { return e(), r; }, reliableTrDimensions: function () { var e, t, n, o; return null == a && (e = b.createElement("table"), t = b.createElement("tr"), n = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", se.appendChild(e).appendChild(t).appendChild(n), o = i.getComputedStyle(t), a = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === t.offsetHeight, se.removeChild(e)), a; } })); }();
        var Ke = ["Webkit", "Moz", "ms"], Qe = b.createElement("div").style, Ge = {};
        function Je(e) { return E.cssProps[e] || Ge[e] || (e in Qe ? e : Ge[e] = function (e) { for (var t = e[0].toUpperCase() + e.slice(1), n = Ke.length; n--;)
            if ((e = Ke[n] + t) in Qe)
                return e; }(e) || e); }
        var Ze = /^(none|table(?!-c[ea]).+)/, et = { position: "absolute", visibility: "hidden", display: "block" }, tt = { letterSpacing: "0", fontWeight: "400" };
        function nt(e, t, n) { var i = oe.exec(t); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t; }
        function it(e, t, n, i, o, r) { var s = "width" === t ? 1 : 0, a = 0, l = 0; if (n === (i ? "border" : "content"))
            return 0; for (; s < 4; s += 2)
            "margin" === n && (l += E.css(e, n + re[s], !0, o)), i ? ("content" === n && (l -= E.css(e, "padding" + re[s], !0, o)), "margin" !== n && (l -= E.css(e, "border" + re[s] + "Width", !0, o))) : (l += E.css(e, "padding" + re[s], !0, o), "padding" !== n ? l += E.css(e, "border" + re[s] + "Width", !0, o) : a += E.css(e, "border" + re[s] + "Width", !0, o)); return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l; }
        function ot(e, t, n) { var i = Fe(e), o = (!m.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, i), r = o, s = Xe(e, t, i), a = "offset" + t[0].toUpperCase() + t.slice(1); if (Re.test(s)) {
            if (!n)
                return s;
            s = "auto";
        } return (!m.boxSizingReliable() && o || !m.reliableTrDimensions() && L(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === E.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === E.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + it(e, t, n || (o ? "border" : "content"), r, i, s) + "px"; }
        function rt(e, t, n, i, o) { return new rt.prototype.init(e, t, n, i, o); }
        E.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) {
                        var n = Xe(e, "opacity");
                        return "" === n ? "1" : n;
                    } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (e, t, n, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = K(t), l = Be.test(t), c = e.style;
                if (l || (t = Je(a)), s = E.cssHooks[t] || E.cssHooks[a], void 0 === n)
                    return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                "string" == (r = typeof n) && (o = oe.exec(n)) && o[1] && (n = ue(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (E.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n));
            } }, css: function (e, t, n, i) { var o, r, s, a = K(t); return Be.test(t) || (t = Je(a)), (s = E.cssHooks[t] || E.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = Xe(e, t, i)), "normal" === o && t in tt && (o = tt[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o; } }), E.each(["height", "width"], (function (e, t) { E.cssHooks[t] = { get: function (e, n, i) { if (n)
                return !Ze.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, t, i) : We(e, et, (function () { return ot(e, t, i); })); }, set: function (e, n, i) { var o, r = Fe(e), s = !m.scrollboxSize() && "absolute" === r.position, a = (s || i) && "border-box" === E.css(e, "boxSizing", !1, r), l = i ? it(e, t, i, a, r) : 0; return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - it(e, t, "border", !1, r) - .5)), l && (o = oe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = E.css(e, t)), nt(0, n, l); } }; })), E.cssHooks.marginLeft = Ye(m.reliableMarginLeft, (function (e, t) { if (t)
            return (parseFloat(Xe(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, { marginLeft: 0 }, (function () { return e.getBoundingClientRect().left; }))) + "px"; })), E.each({ margin: "", padding: "", border: "Width" }, (function (e, t) { E.cssHooks[e + t] = { expand: function (n) { for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                o[e + re[i] + t] = r[i] || r[i - 2] || r[0]; return o; } }, "margin" !== e && (E.cssHooks[e + t].set = nt); })), E.fn.extend({ css: function (e, t) { return V(this, (function (e, t, n) { var i, o, r = {}, s = 0; if (Array.isArray(t)) {
                for (i = Fe(e), o = t.length; s < o; s++)
                    r[t[s]] = E.css(e, t[s], !1, i);
                return r;
            } return void 0 !== n ? E.style(e, t, n) : E.css(e, t); }), e, t, arguments.length > 1); } }), E.Tween = rt, rt.prototype = { constructor: rt, init: function (e, t, n, i, o, r) { this.elem = e, this.prop = n, this.easing = o || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (E.cssNumber[n] ? "" : "px"); }, cur: function () { var e = rt.propHooks[this.prop]; return e && e.get ? e.get(this) : rt.propHooks._default.get(this); }, run: function (e) { var t, n = rt.propHooks[this.prop]; return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rt.propHooks._default.set(this), this; } }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0; }, set: function (e) { E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit); } } }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now); } }, E.easing = { linear: function (e) { return e; }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2; }, _default: "swing" }, E.fx = rt.prototype.init, E.fx.step = {};
        var st, at, lt = /^(?:toggle|show|hide)$/, ct = /queueHooks$/;
        function ut() { at && (!1 === b.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(ut) : i.setTimeout(ut, E.fx.interval), E.fx.tick()); }
        function dt() { return i.setTimeout((function () { st = void 0; })), st = Date.now(); }
        function ft(e, t) { var n, i = 0, o = { height: e }; for (t = t ? 1 : 0; i < 4; i += 2 - t)
            o["margin" + (n = re[i])] = o["padding" + n] = e; return t && (o.opacity = o.width = e), o; }
        function pt(e, t, n) { for (var i, o = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e))
                return i; }
        function ht(e, t, n) { var i, o, r = 0, s = ht.prefilters.length, a = E.Deferred().always((function () { delete l.elem; })), l = function () { if (o)
            return !1; for (var t = st || dt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++)
            c.tweens[r].run(i); return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1); }, c = a.promise({ elem: e, props: E.extend({}, t), opts: E.extend(!0, { specialEasing: {}, easing: E.easing._default }, n), originalProperties: t, originalOptions: n, startTime: st || dt(), duration: n.duration, tweens: [], createTween: function (t, n) { var i = E.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing); return c.tweens.push(i), i; }, stop: function (t) { var n = 0, i = t ? c.tweens.length : 0; if (o)
                return this; for (o = !0; n < i; n++)
                c.tweens[n].run(1); return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this; } }), u = c.props; for (function (e, t) { var n, i, o, r, s; for (n in e)
            if (o = t[i = K(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = E.cssHooks[i]) && "expand" in s)
                for (n in r = s.expand(r), delete e[i], r)
                    n in e || (e[n] = r[n], t[n] = o);
            else
                t[i] = o; }(u, c.opts.specialEasing); r < s; r++)
            if (i = ht.prefilters[r].call(c, e, u, c.opts))
                return v(i.stop) && (E._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i; return E.map(u, pt, c), v(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), E.fx.timer(E.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c; }
        E.Animation = E.extend(ht, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return ue(n.elem, e, oe.exec(t), n), n; }] }, tweener: function (e, t) { v(e) ? (t = e, e = ["*"]) : e = e.match(q); for (var n, i = 0, o = e.length; i < o; i++)
                n = e[i], ht.tweeners[n] = ht.tweeners[n] || [], ht.tweeners[n].unshift(t); }, prefilters: [function (e, t, n) { var i, o, r, s, a, l, c, u, d = "width" in t || "height" in t, f = this, p = {}, h = e.style, g = e.nodeType && ce(e), m = J.get(e, "fxshow"); for (i in n.queue || (null == (s = E._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () { s.unqueued || a(); }), s.unqueued++, f.always((function () { f.always((function () { s.unqueued--, E.queue(e, "fx").length || s.empty.fire(); })); }))), t)
                    if (o = t[i], lt.test(o)) {
                        if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                            if ("show" !== o || !m || void 0 === m[i])
                                continue;
                            g = !0;
                        }
                        p[i] = m && m[i] || E.style(e, i);
                    } if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(p))
                    for (i in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = J.get(e, "display")), "none" === (u = E.css(e, "display")) && (c ? u = c : (pe([e], !0), c = e.style.display || c, u = E.css(e, "display"), pe([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === E.css(e, "float") && (l || (f.done((function () { h.display = c; })), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always((function () { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]; }))), l = !1, p)
                        l || (m ? "hidden" in m && (g = m.hidden) : m = J.access(e, "fxshow", { display: c }), r && (m.hidden = !g), g && pe([e], !0), f.done((function () { for (i in g || pe([e]), J.remove(e, "fxshow"), p)
                            E.style(e, i, p[i]); }))), l = pt(g ? m[i] : 0, i, f), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0)); }], prefilter: function (e, t) { t ? ht.prefilters.unshift(e) : ht.prefilters.push(e); } }), E.speed = function (e, t, n) { var i = e && "object" == typeof e ? E.extend({}, e) : { complete: n || !n && t || v(e) && e, duration: e, easing: n && t || t && !v(t) && t }; return E.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in E.fx.speeds ? i.duration = E.fx.speeds[i.duration] : i.duration = E.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () { v(i.old) && i.old.call(this), i.queue && E.dequeue(this, i.queue); }, i; }, E.fn.extend({ fadeTo: function (e, t, n, i) { return this.filter(ce).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i); }, animate: function (e, t, n, i) { var o = E.isEmptyObject(e), r = E.speed(t, n, i), s = function () { var t = ht(this, E.extend({}, e), r); (o || J.get(this, "finish")) && t.stop(!0); }; return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s); }, stop: function (e, t, n) { var i = function (e) { var t = e.stop; delete e.stop, t(n); }; return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function () { var t = !0, o = null != e && e + "queueHooks", r = E.timers, s = J.get(this); if (o)
                s[o] && s[o].stop && i(s[o]);
            else
                for (o in s)
                    s[o] && s[o].stop && ct.test(o) && i(s[o]); for (o = r.length; o--;)
                r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1)); !t && n || E.dequeue(this, e); })); }, finish: function (e) { return !1 !== e && (e = e || "fx"), this.each((function () { var t, n = J.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = E.timers, s = i ? i.length : 0; for (n.finish = !0, E.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;)
                r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1)); for (t = 0; t < s; t++)
                i[t] && i[t].finish && i[t].finish.call(this); delete n.finish; })); } }), E.each(["toggle", "show", "hide"], (function (e, t) { var n = E.fn[t]; E.fn[t] = function (e, i, o) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, i, o); }; })), E.each({ slideDown: ft("show"), slideUp: ft("hide"), slideToggle: ft("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, (function (e, t) { E.fn[e] = function (e, n, i) { return this.animate(t, e, n, i); }; })), E.timers = [], E.fx.tick = function () { var e, t = 0, n = E.timers; for (st = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1); n.length || E.fx.stop(), st = void 0; }, E.fx.timer = function (e) { E.timers.push(e), E.fx.start(); }, E.fx.interval = 13, E.fx.start = function () { at || (at = !0, ut()); }, E.fx.stop = function () { at = null; }, E.fx.speeds = { slow: 600, fast: 200, _default: 400 }, E.fn.delay = function (e, t) { return e = E.fx && E.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function (t, n) { var o = i.setTimeout(t, e); n.stop = function () { i.clearTimeout(o); }; })); }, function () { var e = b.createElement("input"), t = b.createElement("select").appendChild(b.createElement("option")); e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", m.radioValue = "t" === e.value; }();
        var gt, mt = E.expr.attrHandle;
        E.fn.extend({ attr: function (e, t) { return V(this, E.attr, e, t, arguments.length > 1); }, removeAttr: function (e) { return this.each((function () { E.removeAttr(this, e); })); } }), E.extend({ attr: function (e, t, n) { var i, o, r = e.nodeType; if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === r && E.isXMLDoc(e) || (o = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = E.find.attr(e, t)) ? void 0 : i); }, attrHooks: { type: { set: function (e, t) { if (!m.radioValue && "radio" === t && L(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    } } } }, removeAttr: function (e, t) { var n, i = 0, o = t && t.match(q); if (o && 1 === e.nodeType)
                for (; n = o[i++];)
                    e.removeAttribute(n); } }), gt = { set: function (e, t, n) { return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n; } }, E.each(E.expr.match.bool.source.match(/\w+/g), (function (e, t) { var n = mt[t] || E.find.attr; mt[t] = function (e, t, i) { var o, r, s = t.toLowerCase(); return i || (r = mt[s], mt[s] = o, o = null != n(e, t, i) ? s : null, mt[s] = r), o; }; }));
        var vt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
        function bt(e) { return (e.match(q) || []).join(" "); }
        function _t(e) { return e.getAttribute && e.getAttribute("class") || ""; }
        function wt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(q) || []; }
        E.fn.extend({ prop: function (e, t) { return V(this, E.prop, e, t, arguments.length > 1); }, removeProp: function (e) { return this.each((function () { delete this[E.propFix[e] || e]; })); } }), E.extend({ prop: function (e, t, n) { var i, o, r = e.nodeType; if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && E.isXMLDoc(e) || (t = E.propFix[t] || t, o = E.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]; }, propHooks: { tabIndex: { get: function (e) { var t = E.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1; } } }, propFix: { for: "htmlFor", class: "className" } }), m.optSelected || (E.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null; }, set: function (e) { var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex); } }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () { E.propFix[this.toLowerCase()] = this; })), E.fn.extend({ addClass: function (e) { var t, n, i, o, r, s; return v(e) ? this.each((function (t) { E(this).addClass(e.call(this, t, _t(this))); })) : (t = wt(e)).length ? this.each((function () { if (i = _t(this), n = 1 === this.nodeType && " " + bt(i) + " ") {
                for (r = 0; r < t.length; r++)
                    o = t[r], n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                s = bt(n), i !== s && this.setAttribute("class", s);
            } })) : this; }, removeClass: function (e) { var t, n, i, o, r, s; return v(e) ? this.each((function (t) { E(this).removeClass(e.call(this, t, _t(this))); })) : arguments.length ? (t = wt(e)).length ? this.each((function () { if (i = _t(this), n = 1 === this.nodeType && " " + bt(i) + " ") {
                for (r = 0; r < t.length; r++)
                    for (o = t[r]; n.indexOf(" " + o + " ") > -1;)
                        n = n.replace(" " + o + " ", " ");
                s = bt(n), i !== s && this.setAttribute("class", s);
            } })) : this : this.attr("class", ""); }, toggleClass: function (e, t) { var n, i, o, r, s = typeof e, a = "string" === s || Array.isArray(e); return v(e) ? this.each((function (n) { E(this).toggleClass(e.call(this, n, _t(this), t), t); })) : "boolean" == typeof t && a ? t ? this.addClass(e) : this.removeClass(e) : (n = wt(e), this.each((function () { if (a)
                for (r = E(this), o = 0; o < n.length; o++)
                    i = n[o], r.hasClass(i) ? r.removeClass(i) : r.addClass(i);
            else
                void 0 !== e && "boolean" !== s || ((i = _t(this)) && J.set(this, "__className__", i), this.setAttribute && this.setAttribute("class", i || !1 === e ? "" : J.get(this, "__className__") || "")); }))); }, hasClass: function (e) { var t, n, i = 0; for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + bt(_t(n)) + " ").indexOf(t) > -1)
                    return !0; return !1; } });
        var xt = /\r/g;
        E.fn.extend({ val: function (e) { var t, n, i, o = this[0]; return arguments.length ? (i = v(e), this.each((function (n) { var o; 1 === this.nodeType && (null == (o = i ? e.call(this, n, E(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = E.map(o, (function (e) { return null == e ? "" : e + ""; }))), (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o)); }))) : o ? (t = E.valHooks[o.type] || E.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(xt, "") : null == n ? "" : n : void 0; } }), E.extend({ valHooks: { option: { get: function (e) { var t = E.find.attr(e, "value"); return null != t ? t : bt(E.text(e)); } }, select: { get: function (e) { var t, n, i, o = e.options, r = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], l = s ? r + 1 : o.length; for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                        if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))) {
                            if (t = E(n).val(), s)
                                return t;
                            a.push(t);
                        } return a; }, set: function (e, t) { for (var n, i, o = e.options, r = E.makeArray(t), s = o.length; s--;)
                        ((i = o[s]).selected = E.inArray(E.valHooks.option.get(i), r) > -1) && (n = !0); return n || (e.selectedIndex = -1), r; } } } }), E.each(["radio", "checkbox"], (function () { E.valHooks[this] = { set: function (e, t) { if (Array.isArray(t))
                return e.checked = E.inArray(E(e).val(), t) > -1; } }, m.checkOn || (E.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value; }); })), m.focusin = "onfocusin" in i;
        var Tt = /^(?:focusinfocus|focusoutblur)$/, Et = function (e) { e.stopPropagation(); };
        E.extend(E.event, { trigger: function (e, t, n, o) { var r, s, a, l, c, u, d, f, h = [n || b], g = p.call(e, "type") ? e.type : e, m = p.call(e, "namespace") ? e.namespace.split(".") : []; if (s = f = a = n = n || b, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(g + E.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), c = g.indexOf(":") < 0 && "on" + g, (e = e[E.expando] ? e : new E.Event(g, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), d = E.event.special[g] || {}, o || !d.trigger || !1 !== d.trigger.apply(n, t))) {
                if (!o && !d.noBubble && !y(n)) {
                    for (l = d.delegateType || g, Tt.test(l + g) || (s = s.parentNode); s; s = s.parentNode)
                        h.push(s), a = s;
                    a === (n.ownerDocument || b) && h.push(a.defaultView || a.parentWindow || i);
                }
                for (r = 0; (s = h[r++]) && !e.isPropagationStopped();)
                    f = s, e.type = r > 1 ? l : d.bindType || g, (u = (J.get(s, "events") || Object.create(null))[e.type] && J.get(s, "handle")) && u.apply(s, t), (u = c && s[c]) && u.apply && Q(s) && (e.result = u.apply(s, t), !1 === e.result && e.preventDefault());
                return e.type = g, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), t) || !Q(n) || c && v(n[g]) && !y(n) && ((a = n[c]) && (n[c] = null), E.event.triggered = g, e.isPropagationStopped() && f.addEventListener(g, Et), n[g](), e.isPropagationStopped() && f.removeEventListener(g, Et), E.event.triggered = void 0, a && (n[c] = a)), e.result;
            } }, simulate: function (e, t, n) { var i = E.extend(new E.Event, n, { type: e, isSimulated: !0 }); E.event.trigger(i, null, t); } }), E.fn.extend({ trigger: function (e, t) { return this.each((function () { E.event.trigger(e, t, this); })); }, triggerHandler: function (e, t) { var n = this[0]; if (n)
                return E.event.trigger(e, t, n, !0); } }), m.focusin || E.each({ focus: "focusin", blur: "focusout" }, (function (e, t) { var n = function (e) { E.event.simulate(t, e.target, E.event.fix(e)); }; E.event.special[t] = { setup: function () { var i = this.ownerDocument || this.document || this, o = J.access(i, t); o || i.addEventListener(e, n, !0), J.access(i, t, (o || 0) + 1); }, teardown: function () { var i = this.ownerDocument || this.document || this, o = J.access(i, t) - 1; o ? J.access(i, t, o) : (i.removeEventListener(e, n, !0), J.remove(i, t)); } }; }));
        var Ct = i.location, At = { guid: Date.now() }, kt = /\?/;
        E.parseXML = function (e) { var t, n; if (!e || "string" != typeof e)
            return null; try {
            t = (new i.DOMParser).parseFromString(e, "text/xml");
        }
        catch (e) { } return n = t && t.getElementsByTagName("parsererror")[0], t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, (function (e) { return e.textContent; })).join("\n") : e)), t; };
        var St = /\[\]$/, Ot = /\r?\n/g, Lt = /^(?:submit|button|image|reset|file)$/i, Dt = /^(?:input|select|textarea|keygen)/i;
        function jt(e, t, n, i) { var o; if (Array.isArray(t))
            E.each(t, (function (t, o) { n || St.test(e) ? i(e, o) : jt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i); }));
        else if (n || "object" !== x(t))
            i(e, t);
        else
            for (o in t)
                jt(e + "[" + o + "]", t[o], n, i); }
        E.param = function (e, t) { var n, i = [], o = function (e, t) { var n = v(t) ? t() : t; i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n); }; if (null == e)
            return ""; if (Array.isArray(e) || e.jquery && !E.isPlainObject(e))
            E.each(e, (function () { o(this.name, this.value); }));
        else
            for (n in e)
                jt(n, e[n], t, o); return i.join("&"); }, E.fn.extend({ serialize: function () { return E.param(this.serializeArray()); }, serializeArray: function () { return this.map((function () { var e = E.prop(this, "elements"); return e ? E.makeArray(e) : this; })).filter((function () { var e = this.type; return this.name && !E(this).is(":disabled") && Dt.test(this.nodeName) && !Lt.test(e) && (this.checked || !me.test(e)); })).map((function (e, t) { var n = E(this).val(); return null == n ? null : Array.isArray(n) ? E.map(n, (function (e) { return { name: t.name, value: e.replace(Ot, "\r\n") }; })) : { name: t.name, value: n.replace(Ot, "\r\n") }; })).get(); } });
        var Nt = /%20/g, It = /#.*$/, Pt = /([?&])_=[^&]*/, Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm, $t = /^(?:GET|HEAD)$/, qt = /^\/\//, Ht = {}, Rt = {}, Bt = "*/".concat("*"), Ft = b.createElement("a");
        function Wt(e) { return function (t, n) { "string" != typeof t && (n = t, t = "*"); var i, o = 0, r = t.toLowerCase().match(q) || []; if (v(n))
            for (; i = r[o++];)
                "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n); }; }
        function zt(e, t, n, i) { var o = {}, r = e === Rt; function s(a) { var l; return o[a] = !0, E.each(e[a] || [], (function (e, a) { var c = a(t, n, i); return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1); })), l; } return s(t.dataTypes[0]) || !o["*"] && s("*"); }
        function Vt(e, t) { var n, i, o = E.ajaxSettings.flatOptions || {}; for (n in t)
            void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]); return i && E.extend(!0, e, i), e; }
        Ft.href = Ct.href, E.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Bt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": E.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? Vt(Vt(e, E.ajaxSettings), t) : Vt(E.ajaxSettings, e); }, ajaxPrefilter: Wt(Ht), ajaxTransport: Wt(Rt), ajax: function (e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var n, o, r, s, a, l, c, u, d, f, p = E.ajaxSetup({}, t), h = p.context || p, g = p.context && (h.nodeType || h.jquery) ? E(h) : E.event, m = E.Deferred(), v = E.Callbacks("once memory"), y = p.statusCode || {}, _ = {}, w = {}, x = "canceled", T = { readyState: 0, getResponseHeader: function (e) { var t; if (c) {
                    if (!s)
                        for (s = {}; t = Mt.exec(r);)
                            s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                    t = s[e.toLowerCase() + " "];
                } return null == t ? null : t.join(", "); }, getAllResponseHeaders: function () { return c ? r : null; }, setRequestHeader: function (e, t) { return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, _[e] = t), this; }, overrideMimeType: function (e) { return null == c && (p.mimeType = e), this; }, statusCode: function (e) { var t; if (e)
                    if (c)
                        T.always(e[T.status]);
                    else
                        for (t in e)
                            y[t] = [y[t], e[t]]; return this; }, abort: function (e) { var t = e || x; return n && n.abort(t), C(0, t), this; } }; if (m.promise(T), p.url = ((e || p.url || Ct.href) + "").replace(qt, Ct.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(q) || [""], null == p.crossDomain) {
                l = b.createElement("a");
                try {
                    l.href = p.url, l.href = l.href, p.crossDomain = Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host;
                }
                catch (e) {
                    p.crossDomain = !0;
                }
            } if (p.data && p.processData && "string" != typeof p.data && (p.data = E.param(p.data, p.traditional)), zt(Ht, p, t, T), c)
                return T; for (d in (u = E.event && p.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !$t.test(p.type), o = p.url.replace(It, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Nt, "+")) : (f = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (kt.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Pt, "$1"), f = (kt.test(o) ? "&" : "?") + "_=" + At.guid++ + f), p.url = o + f), p.ifModified && (E.lastModified[o] && T.setRequestHeader("If-Modified-Since", E.lastModified[o]), E.etag[o] && T.setRequestHeader("If-None-Match", E.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : p.accepts["*"]), p.headers)
                T.setRequestHeader(d, p.headers[d]); if (p.beforeSend && (!1 === p.beforeSend.call(h, T, p) || c))
                return T.abort(); if (x = "abort", v.add(p.complete), T.done(p.success), T.fail(p.error), n = zt(Rt, p, t, T)) {
                if (T.readyState = 1, u && g.trigger("ajaxSend", [T, p]), c)
                    return T;
                p.async && p.timeout > 0 && (a = i.setTimeout((function () { T.abort("timeout"); }), p.timeout));
                try {
                    c = !1, n.send(_, C);
                }
                catch (e) {
                    if (c)
                        throw e;
                    C(-1, e);
                }
            }
            else
                C(-1, "No Transport"); function C(e, t, s, l) { var d, f, b, _, w, x = t; c || (c = !0, a && i.clearTimeout(a), n = void 0, r = l || "", T.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, s && (_ = function (e, t, n) { for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];)
                l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type")); if (i)
                for (o in a)
                    if (a[o] && a[o].test(i)) {
                        l.unshift(o);
                        break;
                    } if (l[0] in n)
                r = l[0];
            else {
                for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                        r = o;
                        break;
                    }
                    s || (s = o);
                }
                r = r || s;
            } if (r)
                return r !== l[0] && l.unshift(r), n[r]; }(p, T, s)), !d && E.inArray("script", p.dataTypes) > -1 && E.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function () { }), _ = function (e, t, n, i) { var o, r, s, a, l, c = {}, u = e.dataTypes.slice(); if (u[1])
                for (s in e.converters)
                    c[s.toLowerCase()] = e.converters[s]; for (r = u.shift(); r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                    if ("*" === r)
                        r = l;
                    else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                    break;
                                }
                        if (!0 !== s)
                            if (s && e.throws)
                                t = s(t);
                            else
                                try {
                                    t = s(t);
                                }
                                catch (e) {
                                    return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r };
                                }
                    } return { state: "success", data: t }; }(p, _, T, d), d ? (p.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (E.lastModified[o] = w), (w = T.getResponseHeader("etag")) && (E.etag[o] = w)), 204 === e || "HEAD" === p.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = _.state, f = _.data, d = !(b = _.error))) : (b = x, !e && x || (x = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || x) + "", d ? m.resolveWith(h, [f, x, T]) : m.rejectWith(h, [T, x, b]), T.statusCode(y), y = void 0, u && g.trigger(d ? "ajaxSuccess" : "ajaxError", [T, p, d ? f : b]), v.fireWith(h, [T, x]), u && (g.trigger("ajaxComplete", [T, p]), --E.active || E.event.trigger("ajaxStop"))); } return T; }, getJSON: function (e, t, n) { return E.get(e, t, n, "json"); }, getScript: function (e, t) { return E.get(e, void 0, t, "script"); } }), E.each(["get", "post"], (function (e, t) { E[t] = function (e, n, i, o) { return v(n) && (o = o || i, i = n, n = void 0), E.ajax(E.extend({ url: e, type: t, dataType: o, data: n, success: i }, E.isPlainObject(e) && e)); }; })), E.ajaxPrefilter((function (e) { var t; for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || ""); })), E._evalUrl = function (e, t, n) { return E.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function () { } }, dataFilter: function (e) { E.globalEval(e, t, n); } }); }, E.fn.extend({ wrapAll: function (e) { var t; return this[0] && (v(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () { for (var e = this; e.firstElementChild;)
                e = e.firstElementChild; return e; })).append(this)), this; }, wrapInner: function (e) { return v(e) ? this.each((function (t) { E(this).wrapInner(e.call(this, t)); })) : this.each((function () { var t = E(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e); })); }, wrap: function (e) { var t = v(e); return this.each((function (n) { E(this).wrapAll(t ? e.call(this, n) : e); })); }, unwrap: function (e) { return this.parent(e).not("body").each((function () { E(this).replaceWith(this.childNodes); })), this; } }), E.expr.pseudos.hidden = function (e) { return !E.expr.pseudos.visible(e); }, E.expr.pseudos.visible = function (e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length); }, E.ajaxSettings.xhr = function () { try {
            return new i.XMLHttpRequest;
        }
        catch (e) { } };
        var Ut = { 0: 200, 1223: 204 }, Xt = E.ajaxSettings.xhr();
        m.cors = !!Xt && "withCredentials" in Xt, m.ajax = Xt = !!Xt, E.ajaxTransport((function (e) { var t, n; if (m.cors || Xt && !e.crossDomain)
            return { send: function (o, r) { var s, a = e.xhr(); if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (s in e.xhrFields)
                        a[s] = e.xhrFields[s]; for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o)
                    a.setRequestHeader(s, o[s]); t = function (e) { return function () { t && (t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ut[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders())); }; }, a.onload = t(), n = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () { 4 === a.readyState && i.setTimeout((function () { t && n(); })); }, t = t("abort"); try {
                    a.send(e.hasContent && e.data || null);
                }
                catch (e) {
                    if (t)
                        throw e;
                } }, abort: function () { t && t(); } }; })), E.ajaxPrefilter((function (e) { e.crossDomain && (e.contents.script = !1); })), E.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return E.globalEval(e), e; } } }), E.ajaxPrefilter("script", (function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET"); })), E.ajaxTransport("script", (function (e) { var t, n; if (e.crossDomain || e.scriptAttrs)
            return { send: function (i, o) { t = E("<script>").attr(e.scriptAttrs || {}).prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function (e) { t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type); }), b.head.appendChild(t[0]); }, abort: function () { n && n(); } }; }));
        var Yt, Kt = [], Qt = /(=)\?(?=&|$)|\?\?/;
        E.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = Kt.pop() || E.expando + "_" + At.guid++; return this[e] = !0, e; } }), E.ajaxPrefilter("json jsonp", (function (e, t, n) { var o, r, s, a = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0])
            return o = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Qt, "$1" + o) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () { return s || E.error(o + " was not called"), s[0]; }, e.dataTypes[0] = "json", r = i[o], i[o] = function () { s = arguments; }, n.always((function () { void 0 === r ? E(i).removeProp(o) : i[o] = r, e[o] && (e.jsonpCallback = t.jsonpCallback, Kt.push(o)), s && v(r) && r(s[0]), s = r = void 0; })), "script"; })), m.createHTMLDocument = ((Yt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Yt.childNodes.length), E.parseHTML = function (e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(i)) : t = b), r = !n && [], (o = D.exec(e)) ? [t.createElement(o[1])] : (o = Te([e], t, r), r && r.length && E(r).remove(), E.merge([], o.childNodes))); var i, o, r; }, E.fn.load = function (e, t, n) { var i, o, r, s = this, a = e.indexOf(" "); return a > -1 && (i = bt(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && E.ajax({ url: e, type: o || "GET", dataType: "html", data: t }).done((function (e) { r = arguments, s.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e); })).always(n && function (e, t) { s.each((function () { n.apply(this, r || [e.responseText, t, e]); })); }), this; }, E.expr.pseudos.animated = function (e) { return E.grep(E.timers, (function (t) { return e === t.elem; })).length; }, E.offset = { setOffset: function (e, t, n) { var i, o, r, s, a, l, c = E.css(e, "position"), u = E(e), d = {}; "static" === c && (e.style.position = "relative"), a = u.offset(), r = E.css(e, "top"), l = E.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), v(t) && (t = t.call(e, n, E.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d); } }, E.fn.extend({ offset: function (e) { if (arguments.length)
                return void 0 === e ? this : this.each((function (t) { E.offset.setOffset(this, e, t); })); var t, n, i = this[0]; return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0; }, position: function () { if (this[0]) {
                var e, t, n, i = this[0], o = { top: 0, left: 0 };
                if ("fixed" === E.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");)
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = E(e).offset()).top += E.css(e, "borderTopWidth", !0), o.left += E.css(e, "borderLeftWidth", !0));
                }
                return { top: t.top - o.top - E.css(i, "marginTop", !0), left: t.left - o.left - E.css(i, "marginLeft", !0) };
            } }, offsetParent: function () { return this.map((function () { for (var e = this.offsetParent; e && "static" === E.css(e, "position");)
                e = e.offsetParent; return e || se; })); } }), E.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, (function (e, t) { var n = "pageYOffset" === t; E.fn[e] = function (i) { return V(this, (function (e, i, o) { var r; if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o)
            return r ? r[t] : e[i]; r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o; }), e, i, arguments.length); }; })), E.each(["top", "left"], (function (e, t) { E.cssHooks[t] = Ye(m.pixelPosition, (function (e, n) { if (n)
            return n = Xe(e, t), Re.test(n) ? E(e).position()[t] + "px" : n; })); })), E.each({ Height: "height", Width: "width" }, (function (e, t) { E.each({ padding: "inner" + e, content: t, "": "outer" + e }, (function (n, i) { E.fn[i] = function (o, r) { var s = arguments.length && (n || "boolean" != typeof o), a = n || (!0 === o || !0 === r ? "margin" : "border"); return V(this, (function (t, n, o) { var r; return y(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? E.css(t, n, a) : E.style(t, n, o, a); }), t, s ? o : void 0, s); }; })); })), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) { E.fn[t] = function (e) { return this.on(t, e); }; })), E.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n); }, unbind: function (e, t) { return this.off(e, null, t); }, delegate: function (e, t, n, i) { return this.on(t, e, n, i); }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n); }, hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e); } }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) { E.fn[t] = function (e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t); }; }));
        var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        E.proxy = function (e, t) { var n, i, o; if ("string" == typeof t && (n = e[t], t = e, e = n), v(e))
            return i = a.call(arguments, 2), o = function () { return e.apply(t || this, i.concat(a.call(arguments))); }, o.guid = e.guid = e.guid || E.guid++, o; }, E.holdReady = function (e) { e ? E.readyWait++ : E.ready(!0); }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = L, E.isFunction = v, E.isWindow = y, E.camelCase = K, E.type = x, E.now = Date.now, E.isNumeric = function (e) { var t = E.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)); }, E.trim = function (e) { return null == e ? "" : (e + "").replace(Gt, "$1"); }, void 0 === (n = function () { return E; }.apply(t, [])) || (e.exports = n);
        var Jt = i.jQuery, Zt = i.$;
        return E.noConflict = function (e) { return i.$ === E && (i.$ = Zt), e && i.jQuery === E && (i.jQuery = Jt), E; }, void 0 === o && (i.jQuery = i.$ = E), E;
    })); } }, t = {}; function n(i) { var o = t[i]; if (void 0 !== o)
    return o.exports; var r = t[i] = { exports: {} }; return e[i].call(r.exports, r, r.exports, n), r.exports; } n.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return n.d(t, { a: t }), t; }, n.d = (e, t) => { for (var i in t)
    n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] }); }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, (() => {
    "use strict";
    var e = {};
    n.r(e), n.d(e, { afterMain: () => w, afterRead: () => y, afterWrite: () => E, applyStyles: () => D, arrow: () => G, auto: () => s, basePlacements: () => a, beforeMain: () => b, beforeRead: () => m, beforeWrite: () => x, bottom: () => i, clippingParents: () => u, computeStyles: () => te, createPopper: () => Le, createPopperBase: () => Oe, createPopperLite: () => De, detectOverflow: () => me, end: () => c, eventListeners: () => ie, flip: () => ve, hide: () => _e, left: () => r, main: () => _, modifierPhases: () => C, offset: () => we, placements: () => g, popper: () => f, popperGenerator: () => Se, popperOffsets: () => xe, preventOverflow: () => Te, read: () => v, reference: () => p, right: () => o, start: () => l, top: () => t, variationPlacements: () => h, viewport: () => d, write: () => T });
    var t = "top", i = "bottom", o = "right", r = "left", s = "auto", a = [t, i, o, r], l = "start", c = "end", u = "clippingParents", d = "viewport", f = "popper", p = "reference", h = a.reduce((function (e, t) { return e.concat([t + "-" + l, t + "-" + c]); }), []), g = [].concat(a, [s]).reduce((function (e, t) { return e.concat([t, t + "-" + l, t + "-" + c]); }), []), m = "beforeRead", v = "read", y = "afterRead", b = "beforeMain", _ = "main", w = "afterMain", x = "beforeWrite", T = "write", E = "afterWrite", C = [m, v, y, b, _, w, x, T, E];
    function A(e) { return e ? (e.nodeName || "").toLowerCase() : null; }
    function k(e) { if (null == e)
        return window; if ("[object Window]" !== e.toString()) {
        var t = e.ownerDocument;
        return t && t.defaultView || window;
    } return e; }
    function S(e) { return e instanceof k(e).Element || e instanceof Element; }
    function O(e) { return e instanceof k(e).HTMLElement || e instanceof HTMLElement; }
    function L(e) { return "undefined" != typeof ShadowRoot && (e instanceof k(e).ShadowRoot || e instanceof ShadowRoot); }
    const D = { name: "applyStyles", enabled: !0, phase: "write", fn: function (e) { var t = e.state; Object.keys(t.elements).forEach((function (e) { var n = t.styles[e] || {}, i = t.attributes[e] || {}, o = t.elements[e]; O(o) && A(o) && (Object.assign(o.style, n), Object.keys(i).forEach((function (e) { var t = i[e]; !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t); }))); })); }, effect: function (e) { var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} }; return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function () { Object.keys(t.elements).forEach((function (e) { var i = t.elements[e], o = t.attributes[e] || {}, r = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function (e, t) { return e[t] = "", e; }), {}); O(i) && A(i) && (Object.assign(i.style, r), Object.keys(o).forEach((function (e) { i.removeAttribute(e); }))); })); }; }, requires: ["computeStyles"] };
    function j(e) { return e.split("-")[0]; }
    var N = Math.max, I = Math.min, P = Math.round;
    function M() { var e = navigator.userAgentData; return null != e && e.brands ? e.brands.map((function (e) { return e.brand + "/" + e.version; })).join(" ") : navigator.userAgent; }
    function $() { return !/^((?!chrome|android).)*safari/i.test(M()); }
    function q(e, t, n) { void 0 === t && (t = !1), void 0 === n && (n = !1); var i = e.getBoundingClientRect(), o = 1, r = 1; t && O(e) && (o = e.offsetWidth > 0 && P(i.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && P(i.height) / e.offsetHeight || 1); var s = (S(e) ? k(e) : window).visualViewport, a = !$() && n, l = (i.left + (a && s ? s.offsetLeft : 0)) / o, c = (i.top + (a && s ? s.offsetTop : 0)) / r, u = i.width / o, d = i.height / r; return { width: u, height: d, top: c, right: l + u, bottom: c + d, left: l, x: l, y: c }; }
    function H(e) { var t = q(e), n = e.offsetWidth, i = e.offsetHeight; return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: i }; }
    function R(e, t) { var n = t.getRootNode && t.getRootNode(); if (e.contains(t))
        return !0; if (n && L(n)) {
        var i = t;
        do {
            if (i && e.isSameNode(i))
                return !0;
            i = i.parentNode || i.host;
        } while (i);
    } return !1; }
    function B(e) { return k(e).getComputedStyle(e); }
    function F(e) { return ["table", "td", "th"].indexOf(A(e)) >= 0; }
    function W(e) { return ((S(e) ? e.ownerDocument : e.document) || window.document).documentElement; }
    function z(e) { return "html" === A(e) ? e : e.assignedSlot || e.parentNode || (L(e) ? e.host : null) || W(e); }
    function V(e) { return O(e) && "fixed" !== B(e).position ? e.offsetParent : null; }
    function U(e) { for (var t = k(e), n = V(e); n && F(n) && "static" === B(n).position;)
        n = V(n); return n && ("html" === A(n) || "body" === A(n) && "static" === B(n).position) ? t : n || function (e) { var t = /firefox/i.test(M()); if (/Trident/i.test(M()) && O(e) && "fixed" === B(e).position)
        return null; var n = z(e); for (L(n) && (n = n.host); O(n) && ["html", "body"].indexOf(A(n)) < 0;) {
        var i = B(n);
        if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || t && "filter" === i.willChange || t && i.filter && "none" !== i.filter)
            return n;
        n = n.parentNode;
    } return null; }(e) || t; }
    function X(e) { return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"; }
    function Y(e, t, n) { return N(e, I(t, n)); }
    function K(e) { return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e); }
    function Q(e, t) { return t.reduce((function (t, n) { return t[n] = e, t; }), {}); }
    const G = { name: "arrow", enabled: !0, phase: "main", fn: function (e) { var n, s = e.state, l = e.name, c = e.options, u = s.elements.arrow, d = s.modifiersData.popperOffsets, f = j(s.placement), p = X(f), h = [r, o].indexOf(f) >= 0 ? "height" : "width"; if (u && d) {
            var g = function (e, t) { return K("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, { placement: t.placement })) : e) ? e : Q(e, a)); }(c.padding, s), m = H(u), v = "y" === p ? t : r, y = "y" === p ? i : o, b = s.rects.reference[h] + s.rects.reference[p] - d[p] - s.rects.popper[h], _ = d[p] - s.rects.reference[p], w = U(u), x = w ? "y" === p ? w.clientHeight || 0 : w.clientWidth || 0 : 0, T = b / 2 - _ / 2, E = g[v], C = x - m[h] - g[y], A = x / 2 - m[h] / 2 + T, k = Y(E, A, C), S = p;
            s.modifiersData[l] = ((n = {})[S] = k, n.centerOffset = k - A, n);
        } }, effect: function (e) { var t = e.state, n = e.options.element, i = void 0 === n ? "[data-popper-arrow]" : n; null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && R(t.elements.popper, i) && (t.elements.arrow = i); }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
    function J(e) { return e.split("-")[1]; }
    var Z = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function ee(e) { var n, s = e.popper, a = e.popperRect, l = e.placement, u = e.variation, d = e.offsets, f = e.position, p = e.gpuAcceleration, h = e.adaptive, g = e.roundOffsets, m = e.isFixed, v = d.x, y = void 0 === v ? 0 : v, b = d.y, _ = void 0 === b ? 0 : b, w = "function" == typeof g ? g({ x: y, y: _ }) : { x: y, y: _ }; y = w.x, _ = w.y; var x = d.hasOwnProperty("x"), T = d.hasOwnProperty("y"), E = r, C = t, A = window; if (h) {
        var S = U(s), O = "clientHeight", L = "clientWidth";
        S === k(s) && "static" !== B(S = W(s)).position && "absolute" === f && (O = "scrollHeight", L = "scrollWidth"), (l === t || (l === r || l === o) && u === c) && (C = i, _ -= (m && S === A && A.visualViewport ? A.visualViewport.height : S[O]) - a.height, _ *= p ? 1 : -1), l !== r && (l !== t && l !== i || u !== c) || (E = o, y -= (m && S === A && A.visualViewport ? A.visualViewport.width : S[L]) - a.width, y *= p ? 1 : -1);
    } var D, j = Object.assign({ position: f }, h && Z), N = !0 === g ? function (e) { var t = e.x, n = e.y, i = window.devicePixelRatio || 1; return { x: P(t * i) / i || 0, y: P(n * i) / i || 0 }; }({ x: y, y: _ }) : { x: y, y: _ }; return y = N.x, _ = N.y, p ? Object.assign({}, j, ((D = {})[C] = T ? "0" : "", D[E] = x ? "0" : "", D.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + _ + "px)" : "translate3d(" + y + "px, " + _ + "px, 0)", D)) : Object.assign({}, j, ((n = {})[C] = T ? _ + "px" : "", n[E] = x ? y + "px" : "", n.transform = "", n)); }
    const te = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (e) { var t = e.state, n = e.options, i = n.gpuAcceleration, o = void 0 === i || i, r = n.adaptive, s = void 0 === r || r, a = n.roundOffsets, l = void 0 === a || a, c = { placement: j(t.placement), variation: J(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: "fixed" === t.options.strategy }; null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, ee(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, ee(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }); }, data: {} };
    var ne = { passive: !0 };
    const ie = { name: "eventListeners", enabled: !0, phase: "write", fn: function () { }, effect: function (e) { var t = e.state, n = e.instance, i = e.options, o = i.scroll, r = void 0 === o || o, s = i.resize, a = void 0 === s || s, l = k(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper); return r && c.forEach((function (e) { e.addEventListener("scroll", n.update, ne); })), a && l.addEventListener("resize", n.update, ne), function () { r && c.forEach((function (e) { e.removeEventListener("scroll", n.update, ne); })), a && l.removeEventListener("resize", n.update, ne); }; }, data: {} };
    var oe = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function re(e) { return e.replace(/left|right|bottom|top/g, (function (e) { return oe[e]; })); }
    var se = { start: "end", end: "start" };
    function ae(e) { return e.replace(/start|end/g, (function (e) { return se[e]; })); }
    function le(e) { var t = k(e); return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset }; }
    function ce(e) { return q(W(e)).left + le(e).scrollLeft; }
    function ue(e) { var t = B(e), n = t.overflow, i = t.overflowX, o = t.overflowY; return /auto|scroll|overlay|hidden/.test(n + o + i); }
    function de(e) { return ["html", "body", "#document"].indexOf(A(e)) >= 0 ? e.ownerDocument.body : O(e) && ue(e) ? e : de(z(e)); }
    function fe(e, t) { var n; void 0 === t && (t = []); var i = de(e), o = i === (null == (n = e.ownerDocument) ? void 0 : n.body), r = k(i), s = o ? [r].concat(r.visualViewport || [], ue(i) ? i : []) : i, a = t.concat(s); return o ? a : a.concat(fe(z(s))); }
    function pe(e) { return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height }); }
    function he(e, t, n) { return t === d ? pe(function (e, t) { var n = k(e), i = W(e), o = n.visualViewport, r = i.clientWidth, s = i.clientHeight, a = 0, l = 0; if (o) {
        r = o.width, s = o.height;
        var c = $();
        (c || !c && "fixed" === t) && (a = o.offsetLeft, l = o.offsetTop);
    } return { width: r, height: s, x: a + ce(e), y: l }; }(e, n)) : S(t) ? function (e, t) { var n = q(e, !1, "fixed" === t); return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n; }(t, n) : pe(function (e) { var t, n = W(e), i = le(e), o = null == (t = e.ownerDocument) ? void 0 : t.body, r = N(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = N(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -i.scrollLeft + ce(e), l = -i.scrollTop; return "rtl" === B(o || n).direction && (a += N(n.clientWidth, o ? o.clientWidth : 0) - r), { width: r, height: s, x: a, y: l }; }(W(e))); }
    function ge(e) { var n, s = e.reference, a = e.element, u = e.placement, d = u ? j(u) : null, f = u ? J(u) : null, p = s.x + s.width / 2 - a.width / 2, h = s.y + s.height / 2 - a.height / 2; switch (d) {
        case t:
            n = { x: p, y: s.y - a.height };
            break;
        case i:
            n = { x: p, y: s.y + s.height };
            break;
        case o:
            n = { x: s.x + s.width, y: h };
            break;
        case r:
            n = { x: s.x - a.width, y: h };
            break;
        default: n = { x: s.x, y: s.y };
    } var g = d ? X(d) : null; if (null != g) {
        var m = "y" === g ? "height" : "width";
        switch (f) {
            case l:
                n[g] = n[g] - (s[m] / 2 - a[m] / 2);
                break;
            case c: n[g] = n[g] + (s[m] / 2 - a[m] / 2);
        }
    } return n; }
    function me(e, n) { void 0 === n && (n = {}); var r = n, s = r.placement, l = void 0 === s ? e.placement : s, c = r.strategy, h = void 0 === c ? e.strategy : c, g = r.boundary, m = void 0 === g ? u : g, v = r.rootBoundary, y = void 0 === v ? d : v, b = r.elementContext, _ = void 0 === b ? f : b, w = r.altBoundary, x = void 0 !== w && w, T = r.padding, E = void 0 === T ? 0 : T, C = K("number" != typeof E ? E : Q(E, a)), k = _ === f ? p : f, L = e.rects.popper, D = e.elements[x ? k : _], j = function (e, t, n, i) { var o = "clippingParents" === t ? function (e) { var t = fe(z(e)), n = ["absolute", "fixed"].indexOf(B(e).position) >= 0 && O(e) ? U(e) : e; return S(n) ? t.filter((function (e) { return S(e) && R(e, n) && "body" !== A(e); })) : []; }(e) : [].concat(t), r = [].concat(o, [n]), s = r[0], a = r.reduce((function (t, n) { var o = he(e, n, i); return t.top = N(o.top, t.top), t.right = I(o.right, t.right), t.bottom = I(o.bottom, t.bottom), t.left = N(o.left, t.left), t; }), he(e, s, i)); return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a; }(S(D) ? D : D.contextElement || W(e.elements.popper), m, y, h), P = q(e.elements.reference), M = ge({ reference: P, element: L, strategy: "absolute", placement: l }), $ = pe(Object.assign({}, L, M)), H = _ === f ? $ : P, F = { top: j.top - H.top + C.top, bottom: H.bottom - j.bottom + C.bottom, left: j.left - H.left + C.left, right: H.right - j.right + C.right }, V = e.modifiersData.offset; if (_ === f && V) {
        var X = V[l];
        Object.keys(F).forEach((function (e) { var n = [o, i].indexOf(e) >= 0 ? 1 : -1, r = [t, i].indexOf(e) >= 0 ? "y" : "x"; F[e] += X[r] * n; }));
    } return F; }
    const ve = { name: "flip", enabled: !0, phase: "main", fn: function (e) { var n = e.state, c = e.options, u = e.name; if (!n.modifiersData[u]._skip) {
            for (var d = c.mainAxis, f = void 0 === d || d, p = c.altAxis, m = void 0 === p || p, v = c.fallbackPlacements, y = c.padding, b = c.boundary, _ = c.rootBoundary, w = c.altBoundary, x = c.flipVariations, T = void 0 === x || x, E = c.allowedAutoPlacements, C = n.options.placement, A = j(C), k = v || (A !== C && T ? function (e) { if (j(e) === s)
                return []; var t = re(e); return [ae(e), t, ae(t)]; }(C) : [re(C)]), S = [C].concat(k).reduce((function (e, t) { return e.concat(j(t) === s ? function (e, t) { void 0 === t && (t = {}); var n = t, i = n.placement, o = n.boundary, r = n.rootBoundary, s = n.padding, l = n.flipVariations, c = n.allowedAutoPlacements, u = void 0 === c ? g : c, d = J(i), f = d ? l ? h : h.filter((function (e) { return J(e) === d; })) : a, p = f.filter((function (e) { return u.indexOf(e) >= 0; })); 0 === p.length && (p = f); var m = p.reduce((function (t, n) { return t[n] = me(e, { placement: n, boundary: o, rootBoundary: r, padding: s })[j(n)], t; }), {}); return Object.keys(m).sort((function (e, t) { return m[e] - m[t]; })); }(n, { placement: t, boundary: b, rootBoundary: _, padding: y, flipVariations: T, allowedAutoPlacements: E }) : t); }), []), O = n.rects.reference, L = n.rects.popper, D = new Map, N = !0, I = S[0], P = 0; P < S.length; P++) {
                var M = S[P], $ = j(M), q = J(M) === l, H = [t, i].indexOf($) >= 0, R = H ? "width" : "height", B = me(n, { placement: M, boundary: b, rootBoundary: _, altBoundary: w, padding: y }), F = H ? q ? o : r : q ? i : t;
                O[R] > L[R] && (F = re(F));
                var W = re(F), z = [];
                if (f && z.push(B[$] <= 0), m && z.push(B[F] <= 0, B[W] <= 0), z.every((function (e) { return e; }))) {
                    I = M, N = !1;
                    break;
                }
                D.set(M, z);
            }
            if (N)
                for (var V = function (e) { var t = S.find((function (t) { var n = D.get(t); if (n)
                    return n.slice(0, e).every((function (e) { return e; })); })); if (t)
                    return I = t, "break"; }, U = T ? 3 : 1; U > 0 && "break" !== V(U); U--)
                    ;
            n.placement !== I && (n.modifiersData[u]._skip = !0, n.placement = I, n.reset = !0);
        } }, requiresIfExists: ["offset"], data: { _skip: !1 } };
    function ye(e, t, n) { return void 0 === n && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x }; }
    function be(e) { return [t, o, i, r].some((function (t) { return e[t] >= 0; })); }
    const _e = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (e) { var t = e.state, n = e.name, i = t.rects.reference, o = t.rects.popper, r = t.modifiersData.preventOverflow, s = me(t, { elementContext: "reference" }), a = me(t, { altBoundary: !0 }), l = ye(s, i), c = ye(a, o, r), u = be(l), d = be(c); t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: u, hasPopperEscaped: d }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": u, "data-popper-escaped": d }); } }, we = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (e) { var n = e.state, i = e.options, s = e.name, a = i.offset, l = void 0 === a ? [0, 0] : a, c = g.reduce((function (e, i) { return e[i] = function (e, n, i) { var s = j(e), a = [r, t].indexOf(s) >= 0 ? -1 : 1, l = "function" == typeof i ? i(Object.assign({}, n, { placement: e })) : i, c = l[0], u = l[1]; return c = c || 0, u = (u || 0) * a, [r, o].indexOf(s) >= 0 ? { x: u, y: c } : { x: c, y: u }; }(i, n.rects, l), e; }), {}), u = c[n.placement], d = u.x, f = u.y; null != n.modifiersData.popperOffsets && (n.modifiersData.popperOffsets.x += d, n.modifiersData.popperOffsets.y += f), n.modifiersData[s] = c; } }, xe = { name: "popperOffsets", enabled: !0, phase: "read", fn: function (e) { var t = e.state, n = e.name; t.modifiersData[n] = ge({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement }); }, data: {} }, Te = { name: "preventOverflow", enabled: !0, phase: "main", fn: function (e) { var n = e.state, s = e.options, a = e.name, c = s.mainAxis, u = void 0 === c || c, d = s.altAxis, f = void 0 !== d && d, p = s.boundary, h = s.rootBoundary, g = s.altBoundary, m = s.padding, v = s.tether, y = void 0 === v || v, b = s.tetherOffset, _ = void 0 === b ? 0 : b, w = me(n, { boundary: p, rootBoundary: h, padding: m, altBoundary: g }), x = j(n.placement), T = J(n.placement), E = !T, C = X(x), A = "x" === C ? "y" : "x", k = n.modifiersData.popperOffsets, S = n.rects.reference, O = n.rects.popper, L = "function" == typeof _ ? _(Object.assign({}, n.rects, { placement: n.placement })) : _, D = "number" == typeof L ? { mainAxis: L, altAxis: L } : Object.assign({ mainAxis: 0, altAxis: 0 }, L), P = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null, M = { x: 0, y: 0 }; if (k) {
            if (u) {
                var $, q = "y" === C ? t : r, R = "y" === C ? i : o, B = "y" === C ? "height" : "width", F = k[C], W = F + w[q], z = F - w[R], V = y ? -O[B] / 2 : 0, K = T === l ? S[B] : O[B], Q = T === l ? -O[B] : -S[B], G = n.elements.arrow, Z = y && G ? H(G) : { width: 0, height: 0 }, ee = n.modifiersData["arrow#persistent"] ? n.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, te = ee[q], ne = ee[R], ie = Y(0, S[B], Z[B]), oe = E ? S[B] / 2 - V - ie - te - D.mainAxis : K - ie - te - D.mainAxis, re = E ? -S[B] / 2 + V + ie + ne + D.mainAxis : Q + ie + ne + D.mainAxis, se = n.elements.arrow && U(n.elements.arrow), ae = se ? "y" === C ? se.clientTop || 0 : se.clientLeft || 0 : 0, le = null != ($ = null == P ? void 0 : P[C]) ? $ : 0, ce = F + re - le, ue = Y(y ? I(W, F + oe - le - ae) : W, F, y ? N(z, ce) : z);
                k[C] = ue, M[C] = ue - F;
            }
            if (f) {
                var de, fe = "x" === C ? t : r, pe = "x" === C ? i : o, he = k[A], ge = "y" === A ? "height" : "width", ve = he + w[fe], ye = he - w[pe], be = -1 !== [t, r].indexOf(x), _e = null != (de = null == P ? void 0 : P[A]) ? de : 0, we = be ? ve : he - S[ge] - O[ge] - _e + D.altAxis, xe = be ? he + S[ge] + O[ge] - _e - D.altAxis : ye, Te = y && be ? function (e, t, n) { var i = Y(e, t, n); return i > n ? n : i; }(we, he, xe) : Y(y ? we : ve, he, y ? xe : ye);
                k[A] = Te, M[A] = Te - he;
            }
            n.modifiersData[a] = M;
        } }, requiresIfExists: ["offset"] };
    function Ee(e, t, n) { void 0 === n && (n = !1); var i, o, r = O(t), s = O(t) && function (e) { var t = e.getBoundingClientRect(), n = P(t.width) / e.offsetWidth || 1, i = P(t.height) / e.offsetHeight || 1; return 1 !== n || 1 !== i; }(t), a = W(t), l = q(e, s, n), c = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 }; return (r || !r && !n) && (("body" !== A(t) || ue(a)) && (c = (i = t) !== k(i) && O(i) ? { scrollLeft: (o = i).scrollLeft, scrollTop: o.scrollTop } : le(i)), O(t) ? ((u = q(t, !0)).x += t.clientLeft, u.y += t.clientTop) : a && (u.x = ce(a))), { x: l.left + c.scrollLeft - u.x, y: l.top + c.scrollTop - u.y, width: l.width, height: l.height }; }
    function Ce(e) { var t = new Map, n = new Set, i = []; function o(e) { n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function (e) { if (!n.has(e)) {
        var i = t.get(e);
        i && o(i);
    } })), i.push(e); } return e.forEach((function (e) { t.set(e.name, e); })), e.forEach((function (e) { n.has(e.name) || o(e); })), i; }
    var Ae = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function ke() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]; return !t.some((function (e) { return !(e && "function" == typeof e.getBoundingClientRect); })); }
    function Se(e) { void 0 === e && (e = {}); var t = e, n = t.defaultModifiers, i = void 0 === n ? [] : n, o = t.defaultOptions, r = void 0 === o ? Ae : o; return function (e, t, n) { void 0 === n && (n = r); var o, s, a = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ae, r), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} }, l = [], c = !1, u = { state: a, setOptions: function (n) { var o = "function" == typeof n ? n(a.options) : n; d(), a.options = Object.assign({}, r, a.options, o), a.scrollParents = { reference: S(e) ? fe(e) : e.contextElement ? fe(e.contextElement) : [], popper: fe(t) }; var s, c, f = function (e) { var t = Ce(e); return C.reduce((function (e, n) { return e.concat(t.filter((function (e) { return e.phase === n; }))); }), []); }((s = [].concat(i, a.options.modifiers), c = s.reduce((function (e, t) { var n = e[t.name]; return e[t.name] = n ? Object.assign({}, n, t, { options: Object.assign({}, n.options, t.options), data: Object.assign({}, n.data, t.data) }) : t, e; }), {}), Object.keys(c).map((function (e) { return c[e]; })))); return a.orderedModifiers = f.filter((function (e) { return e.enabled; })), a.orderedModifiers.forEach((function (e) { var t = e.name, n = e.options, i = void 0 === n ? {} : n, o = e.effect; if ("function" == typeof o) {
            var r = o({ state: a, name: t, instance: u, options: i });
            l.push(r || function () { });
        } })), u.update(); }, forceUpdate: function () { if (!c) {
            var e = a.elements, t = e.reference, n = e.popper;
            if (ke(t, n)) {
                a.rects = { reference: Ee(t, U(n), "fixed" === a.options.strategy), popper: H(n) }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function (e) { return a.modifiersData[e.name] = Object.assign({}, e.data); }));
                for (var i = 0; i < a.orderedModifiers.length; i++)
                    if (!0 !== a.reset) {
                        var o = a.orderedModifiers[i], r = o.fn, s = o.options, l = void 0 === s ? {} : s, d = o.name;
                        "function" == typeof r && (a = r({ state: a, options: l, name: d, instance: u }) || a);
                    }
                    else
                        a.reset = !1, i = -1;
            }
        } }, update: (o = function () { return new Promise((function (e) { u.forceUpdate(), e(a); })); }, function () { return s || (s = new Promise((function (e) { Promise.resolve().then((function () { s = void 0, e(o()); })); }))), s; }), destroy: function () { d(), c = !0; } }; if (!ke(e, t))
        return u; function d() { l.forEach((function (e) { return e(); })), l = []; } return u.setOptions(n).then((function (e) { !c && n.onFirstUpdate && n.onFirstUpdate(e); })), u; }; }
    var Oe = Se(), Le = Se({ defaultModifiers: [ie, xe, te, D, we, ve, Te, G, _e] }), De = Se({ defaultModifiers: [ie, xe, te, D] });
    const je = "transitionend", Ne = e => { let t = e.getAttribute("data-bs-target"); if (!t || "#" === t) {
        let n = e.getAttribute("href");
        if (!n || !n.includes("#") && !n.startsWith("."))
            return null;
        n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && "#" !== n ? n.trim() : null;
    } return t; }, Ie = e => { const t = Ne(e); return t && document.querySelector(t) ? t : null; }, Pe = e => { const t = Ne(e); return t ? document.querySelector(t) : null; }, Me = e => { e.dispatchEvent(new Event(je)); }, $e = e => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType), qe = e => $e(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(e) : null, He = e => { if (!$e(e) || 0 === e.getClientRects().length)
        return !1; const t = "visible" === getComputedStyle(e).getPropertyValue("visibility"), n = e.closest("details:not([open])"); if (!n)
        return t; if (n !== e) {
        const t = e.closest("summary");
        if (t && t.parentNode !== n)
            return !1;
        if (null === t)
            return !1;
    } return t; }, Re = e => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")), Be = e => { if (!document.documentElement.attachShadow)
        return null; if ("function" == typeof e.getRootNode) {
        const t = e.getRootNode();
        return t instanceof ShadowRoot ? t : null;
    } return e instanceof ShadowRoot ? e : e.parentNode ? Be(e.parentNode) : null; }, Fe = () => { }, We = e => { e.offsetHeight; }, ze = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Ve = [], Ue = () => "rtl" === document.documentElement.dir, Xe = e => { var t; t = () => { const t = ze(); if (t) {
        const n = e.NAME, i = t.fn[n];
        t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = i, e.jQueryInterface);
    } }, "loading" === document.readyState ? (Ve.length || document.addEventListener("DOMContentLoaded", (() => { for (const e of Ve)
        e(); })), Ve.push(t)) : t(); }, Ye = e => { "function" == typeof e && e(); }, Ke = (e, t, n = !0) => { if (!n)
        return void Ye(e); const i = (e => { if (!e)
        return 0; let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e); const i = Number.parseFloat(t), o = Number.parseFloat(n); return i || o ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(n))) : 0; })(t) + 5; let o = !1; const r = ({ target: n }) => { n === t && (o = !0, t.removeEventListener(je, r), Ye(e)); }; t.addEventListener(je, r), setTimeout((() => { o || Me(t); }), i); }, Qe = (e, t, n, i) => { const o = e.length; let r = e.indexOf(t); return -1 === r ? !n && i ? e[o - 1] : e[0] : (r += n ? 1 : -1, i && (r = (r + o) % o), e[Math.max(0, Math.min(r, o - 1))]); }, Ge = /[^.]*(?=\..*)\.|.*/, Je = /\..*/, Ze = /::\d+$/, et = {};
    let tt = 1;
    const nt = { mouseenter: "mouseover", mouseleave: "mouseout" }, it = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function ot(e, t) { return t && `${t}::${tt++}` || e.uidEvent || tt++; }
    function rt(e) { const t = ot(e); return e.uidEvent = t, et[t] = et[t] || {}, et[t]; }
    function st(e, t, n = null) { return Object.values(e).find((e => e.callable === t && e.delegationSelector === n)); }
    function at(e, t, n) { const i = "string" == typeof t, o = i ? n : t || n; let r = dt(e); return it.has(r) || (r = e), [i, o, r]; }
    function lt(e, t, n, i, o) { if ("string" != typeof t || !e)
        return; let [r, s, a] = at(t, n, i); if (t in nt) {
        const e = e => function (t) { if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget))
            return e.call(this, t); };
        s = e(s);
    } const l = rt(e), c = l[a] || (l[a] = {}), u = st(c, s, r ? n : null); if (u)
        return void (u.oneOff = u.oneOff && o); const d = ot(s, t.replace(Ge, "")), f = r ? function (e, t, n) { return function i(o) { const r = e.querySelectorAll(t); for (let { target: s } = o; s && s !== this; s = s.parentNode)
        for (const a of r)
            if (a === s)
                return pt(o, { delegateTarget: s }), i.oneOff && ft.off(e, o.type, t, n), n.apply(s, [o]); }; }(e, n, s) : function (e, t) { return function n(i) { return pt(i, { delegateTarget: e }), n.oneOff && ft.off(e, i.type, t), t.apply(e, [i]); }; }(e, s); f.delegationSelector = r ? n : null, f.callable = s, f.oneOff = o, f.uidEvent = d, c[d] = f, e.addEventListener(a, f, r); }
    function ct(e, t, n, i, o) { const r = st(t[n], i, o); r && (e.removeEventListener(n, r, Boolean(o)), delete t[n][r.uidEvent]); }
    function ut(e, t, n, i) { const o = t[n] || {}; for (const r of Object.keys(o))
        if (r.includes(i)) {
            const i = o[r];
            ct(e, t, n, i.callable, i.delegationSelector);
        } }
    function dt(e) { return e = e.replace(Je, ""), nt[e] || e; }
    const ft = { on(e, t, n, i) { lt(e, t, n, i, !1); }, one(e, t, n, i) { lt(e, t, n, i, !0); }, off(e, t, n, i) { if ("string" != typeof t || !e)
            return; const [o, r, s] = at(t, n, i), a = s !== t, l = rt(e), c = l[s] || {}, u = t.startsWith("."); if (void 0 === r) {
            if (u)
                for (const n of Object.keys(l))
                    ut(e, l, n, t.slice(1));
            for (const n of Object.keys(c)) {
                const i = n.replace(Ze, "");
                if (!a || t.includes(i)) {
                    const t = c[n];
                    ct(e, l, s, t.callable, t.delegationSelector);
                }
            }
        }
        else {
            if (!Object.keys(c).length)
                return;
            ct(e, l, s, r, o ? n : null);
        } }, trigger(e, t, n) { if ("string" != typeof t || !e)
            return null; const i = ze(); let o = null, r = !0, s = !0, a = !1; t !== dt(t) && i && (o = i.Event(t, n), i(e).trigger(o), r = !o.isPropagationStopped(), s = !o.isImmediatePropagationStopped(), a = o.isDefaultPrevented()); let l = new Event(t, { bubbles: r, cancelable: !0 }); return l = pt(l, n), a && l.preventDefault(), s && e.dispatchEvent(l), l.defaultPrevented && o && o.preventDefault(), l; } };
    function pt(e, t) { for (const [n, i] of Object.entries(t || {}))
        try {
            e[n] = i;
        }
        catch (t) {
            Object.defineProperty(e, n, { configurable: !0, get: () => i });
        } return e; }
    const ht = new Map, gt = { set(e, t, n) { ht.has(e) || ht.set(e, new Map); const i = ht.get(e); i.has(t) || 0 === i.size ? i.set(t, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`); }, get: (e, t) => ht.has(e) && ht.get(e).get(t) || null, remove(e, t) { if (!ht.has(e))
            return; const n = ht.get(e); n.delete(t), 0 === n.size && ht.delete(e); } };
    function mt(e) { if ("true" === e)
        return !0; if ("false" === e)
        return !1; if (e === Number(e).toString())
        return Number(e); if ("" === e || "null" === e)
        return null; if ("string" != typeof e)
        return e; try {
        return JSON.parse(decodeURIComponent(e));
    }
    catch (t) {
        return e;
    } }
    function vt(e) { return e.replace(/[A-Z]/g, (e => `-${e.toLowerCase()}`)); }
    const yt = { setDataAttribute(e, t, n) { e.setAttribute(`data-bs-${vt(t)}`, n); }, removeDataAttribute(e, t) { e.removeAttribute(`data-bs-${vt(t)}`); }, getDataAttributes(e) { if (!e)
            return {}; const t = {}, n = Object.keys(e.dataset).filter((e => e.startsWith("bs") && !e.startsWith("bsConfig"))); for (const i of n) {
            let n = i.replace(/^bs/, "");
            n = n.charAt(0).toLowerCase() + n.slice(1, n.length), t[n] = mt(e.dataset[i]);
        } return t; }, getDataAttribute: (e, t) => mt(e.getAttribute(`data-bs-${vt(t)}`)) };
    class bt {
        static get Default() { return {}; }
        static get DefaultType() { return {}; }
        static get NAME() { throw new Error('You have to implement the static method "NAME", for each component!'); }
        _getConfig(e) { return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e; }
        _configAfterMerge(e) { return e; }
        _mergeConfigObj(e, t) { const n = $e(t) ? yt.getDataAttribute(t, "config") : {}; return Object.assign(Object.assign(Object.assign(Object.assign({}, this.constructor.Default), "object" == typeof n ? n : {}), $e(t) ? yt.getDataAttributes(t) : {}), "object" == typeof e ? e : {}); }
        _typeCheckConfig(e, t = this.constructor.DefaultType) { for (const i of Object.keys(t)) {
            const o = t[i], r = e[i], s = $e(r) ? "element" : null == (n = r) ? `${n}` : Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();
            if (!new RegExp(o).test(s))
                throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${s}" but expected type "${o}".`);
        } var n; }
    }
    class _t extends bt {
        constructor(e, t) { super(), (e = qe(e)) && (this._element = e, this._config = this._getConfig(t), gt.set(this._element, this.constructor.DATA_KEY, this)); }
        dispose() { gt.remove(this._element, this.constructor.DATA_KEY), ft.off(this._element, this.constructor.EVENT_KEY); for (const e of Object.getOwnPropertyNames(this))
            this[e] = null; }
        _queueCallback(e, t, n = !0) { Ke(e, t, n); }
        _getConfig(e) { return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e; }
        static getInstance(e) { return gt.get(qe(e), this.DATA_KEY); }
        static getOrCreateInstance(e, t = {}) { return this.getInstance(e) || new this(e, "object" == typeof t ? t : null); }
        static get VERSION() { return "5.2.3"; }
        static get DATA_KEY() { return `bs.${this.NAME}`; }
        static get EVENT_KEY() { return `.${this.DATA_KEY}`; }
        static eventName(e) { return `${e}${this.EVENT_KEY}`; }
    }
    const wt = (e, t = "hide") => { const n = `click.dismiss${e.EVENT_KEY}`, i = e.NAME; ft.on(document, n, `[data-bs-dismiss="${i}"]`, (function (n) { if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), Re(this))
        return; const o = Pe(this) || this.closest(`.${i}`); e.getOrCreateInstance(o)[t](); })); }, xt = ".bs.alert", Tt = `close${xt}`, Et = `closed${xt}`;
    class Ct extends _t {
        static get NAME() { return "alert"; }
        close() { if (ft.trigger(this._element, Tt).defaultPrevented)
            return; this._element.classList.remove("show"); const e = this._element.classList.contains("fade"); this._queueCallback((() => this._destroyElement()), this._element, e); }
        _destroyElement() { this._element.remove(), ft.trigger(this._element, Et), this.dispose(); }
        static jQueryInterface(e) { return this.each((function () { const t = Ct.getOrCreateInstance(this); if ("string" == typeof e) {
            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw new TypeError(`No method named "${e}"`);
            t[e](this);
        } })); }
    }
    wt(Ct, "close"), Xe(Ct);
    const At = '[data-bs-toggle="button"]';
    class kt extends _t {
        static get NAME() { return "button"; }
        toggle() { this._element.setAttribute("aria-pressed", this._element.classList.toggle("active")); }
        static jQueryInterface(e) { return this.each((function () { const t = kt.getOrCreateInstance(this); "toggle" === e && t[e](); })); }
    }
    ft.on(document, "click.bs.button.data-api", At, (e => { e.preventDefault(); const t = e.target.closest(At); kt.getOrCreateInstance(t).toggle(); })), Xe(kt);
    const St = { find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)), findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e), children: (e, t) => [].concat(...e.children).filter((e => e.matches(t))), parents(e, t) { const n = []; let i = e.parentNode.closest(t); for (; i;)
            n.push(i), i = i.parentNode.closest(t); return n; }, prev(e, t) { let n = e.previousElementSibling; for (; n;) {
            if (n.matches(t))
                return [n];
            n = n.previousElementSibling;
        } return []; }, next(e, t) { let n = e.nextElementSibling; for (; n;) {
            if (n.matches(t))
                return [n];
            n = n.nextElementSibling;
        } return []; }, focusableChildren(e) { const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e => `${e}:not([tabindex^="-"])`)).join(","); return this.find(t, e).filter((e => !Re(e) && He(e))); } }, Ot = ".bs.swipe", Lt = `touchstart${Ot}`, Dt = `touchmove${Ot}`, jt = `touchend${Ot}`, Nt = `pointerdown${Ot}`, It = `pointerup${Ot}`, Pt = { endCallback: null, leftCallback: null, rightCallback: null }, Mt = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
    class $t extends bt {
        constructor(e, t) { super(), this._element = e, e && $t.isSupported() && (this._config = this._getConfig(t), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents()); }
        static get Default() { return Pt; }
        static get DefaultType() { return Mt; }
        static get NAME() { return "swipe"; }
        dispose() { ft.off(this._element, Ot); }
        _start(e) { this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : this._deltaX = e.touches[0].clientX; }
        _end(e) { this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), Ye(this._config.endCallback); }
        _move(e) { this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX; }
        _handleSwipe() { const e = Math.abs(this._deltaX); if (e <= 40)
            return; const t = e / this._deltaX; this._deltaX = 0, t && Ye(t > 0 ? this._config.rightCallback : this._config.leftCallback); }
        _initEvents() { this._supportPointerEvents ? (ft.on(this._element, Nt, (e => this._start(e))), ft.on(this._element, It, (e => this._end(e))), this._element.classList.add("pointer-event")) : (ft.on(this._element, Lt, (e => this._start(e))), ft.on(this._element, Dt, (e => this._move(e))), ft.on(this._element, jt, (e => this._end(e)))); }
        _eventIsPointerPenTouch(e) { return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType); }
        static isSupported() { return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0; }
    }
    const qt = ".bs.carousel", Ht = ".data-api", Rt = "next", Bt = "prev", Ft = "left", Wt = "right", zt = `slide${qt}`, Vt = `slid${qt}`, Ut = `keydown${qt}`, Xt = `mouseenter${qt}`, Yt = `mouseleave${qt}`, Kt = `dragstart${qt}`, Qt = `load${qt}${Ht}`, Gt = `click${qt}${Ht}`, Jt = "carousel", Zt = "active", en = ".active", tn = ".carousel-item", nn = en + tn, on = { ArrowLeft: Wt, ArrowRight: Ft }, rn = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 }, sn = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
    class an extends _t {
        constructor(e, t) { super(e, t), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = St.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === Jt && this.cycle(); }
        static get Default() { return rn; }
        static get DefaultType() { return sn; }
        static get NAME() { return "carousel"; }
        next() { this._slide(Rt); }
        nextWhenVisible() { !document.hidden && He(this._element) && this.next(); }
        prev() { this._slide(Bt); }
        pause() { this._isSliding && Me(this._element), this._clearInterval(); }
        cycle() { this._clearInterval(), this._updateInterval(), this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval); }
        _maybeEnableCycle() { this._config.ride && (this._isSliding ? ft.one(this._element, Vt, (() => this.cycle())) : this.cycle()); }
        to(e) { const t = this._getItems(); if (e > t.length - 1 || e < 0)
            return; if (this._isSliding)
            return void ft.one(this._element, Vt, (() => this.to(e))); const n = this._getItemIndex(this._getActive()); if (n === e)
            return; const i = e > n ? Rt : Bt; this._slide(i, t[e]); }
        dispose() { this._swipeHelper && this._swipeHelper.dispose(), super.dispose(); }
        _configAfterMerge(e) { return e.defaultInterval = e.interval, e; }
        _addEventListeners() { this._config.keyboard && ft.on(this._element, Ut, (e => this._keydown(e))), "hover" === this._config.pause && (ft.on(this._element, Xt, (() => this.pause())), ft.on(this._element, Yt, (() => this._maybeEnableCycle()))), this._config.touch && $t.isSupported() && this._addTouchEventListeners(); }
        _addTouchEventListeners() { for (const e of St.find(".carousel-item img", this._element))
            ft.on(e, Kt, (e => e.preventDefault())); const e = { leftCallback: () => this._slide(this._directionToOrder(Ft)), rightCallback: () => this._slide(this._directionToOrder(Wt)), endCallback: () => { "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval)); } }; this._swipeHelper = new $t(this._element, e); }
        _keydown(e) { if (/input|textarea/i.test(e.target.tagName))
            return; const t = on[e.key]; t && (e.preventDefault(), this._slide(this._directionToOrder(t))); }
        _getItemIndex(e) { return this._getItems().indexOf(e); }
        _setActiveIndicatorElement(e) { if (!this._indicatorsElement)
            return; const t = St.findOne(en, this._indicatorsElement); t.classList.remove(Zt), t.removeAttribute("aria-current"); const n = St.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement); n && (n.classList.add(Zt), n.setAttribute("aria-current", "true")); }
        _updateInterval() { const e = this._activeElement || this._getActive(); if (!e)
            return; const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10); this._config.interval = t || this._config.defaultInterval; }
        _slide(e, t = null) { if (this._isSliding)
            return; const n = this._getActive(), i = e === Rt, o = t || Qe(this._getItems(), n, i, this._config.wrap); if (o === n)
            return; const r = this._getItemIndex(o), s = t => ft.trigger(this._element, t, { relatedTarget: o, direction: this._orderToDirection(e), from: this._getItemIndex(n), to: r }); if (s(zt).defaultPrevented)
            return; if (!n || !o)
            return; const a = Boolean(this._interval); this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(r), this._activeElement = o; const l = i ? "carousel-item-start" : "carousel-item-end", c = i ? "carousel-item-next" : "carousel-item-prev"; o.classList.add(c), We(o), n.classList.add(l), o.classList.add(l), this._queueCallback((() => { o.classList.remove(l, c), o.classList.add(Zt), n.classList.remove(Zt, c, l), this._isSliding = !1, s(Vt); }), n, this._isAnimated()), a && this.cycle(); }
        _isAnimated() { return this._element.classList.contains("slide"); }
        _getActive() { return St.findOne(nn, this._element); }
        _getItems() { return St.find(tn, this._element); }
        _clearInterval() { this._interval && (clearInterval(this._interval), this._interval = null); }
        _directionToOrder(e) { return Ue() ? e === Ft ? Bt : Rt : e === Ft ? Rt : Bt; }
        _orderToDirection(e) { return Ue() ? e === Bt ? Ft : Wt : e === Bt ? Wt : Ft; }
        static jQueryInterface(e) { return this.each((function () { const t = an.getOrCreateInstance(this, e); if ("number" != typeof e) {
            if ("string" == typeof e) {
                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                    throw new TypeError(`No method named "${e}"`);
                t[e]();
            }
        }
        else
            t.to(e); })); }
    }
    ft.on(document, Gt, "[data-bs-slide], [data-bs-slide-to]", (function (e) { const t = Pe(this); if (!t || !t.classList.contains(Jt))
        return; e.preventDefault(); const n = an.getOrCreateInstance(t), i = this.getAttribute("data-bs-slide-to"); return i ? (n.to(i), void n._maybeEnableCycle()) : "next" === yt.getDataAttribute(this, "slide") ? (n.next(), void n._maybeEnableCycle()) : (n.prev(), void n._maybeEnableCycle()); })), ft.on(window, Qt, (() => { const e = St.find('[data-bs-ride="carousel"]'); for (const t of e)
        an.getOrCreateInstance(t); })), Xe(an);
    const ln = ".bs.collapse", cn = `show${ln}`, un = `shown${ln}`, dn = `hide${ln}`, fn = `hidden${ln}`, pn = `click${ln}.data-api`, hn = "show", gn = "collapse", mn = "collapsing", vn = `:scope .${gn} .${gn}`, yn = '[data-bs-toggle="collapse"]', bn = { parent: null, toggle: !0 }, _n = { parent: "(null|element)", toggle: "boolean" };
    class wn extends _t {
        constructor(e, t) { super(e, t), this._isTransitioning = !1, this._triggerArray = []; const n = St.find(yn); for (const e of n) {
            const t = Ie(e), n = St.find(t).filter((e => e === this._element));
            null !== t && n.length && this._triggerArray.push(e);
        } this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle(); }
        static get Default() { return bn; }
        static get DefaultType() { return _n; }
        static get NAME() { return "collapse"; }
        toggle() { this._isShown() ? this.hide() : this.show(); }
        show() { if (this._isTransitioning || this._isShown())
            return; let e = []; if (this._config.parent && (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e => e !== this._element)).map((e => wn.getOrCreateInstance(e, { toggle: !1 })))), e.length && e[0]._isTransitioning)
            return; if (ft.trigger(this._element, cn).defaultPrevented)
            return; for (const t of e)
            t.hide(); const t = this._getDimension(); this._element.classList.remove(gn), this._element.classList.add(mn), this._element.style[t] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0; const n = `scroll${t[0].toUpperCase() + t.slice(1)}`; this._queueCallback((() => { this._isTransitioning = !1, this._element.classList.remove(mn), this._element.classList.add(gn, hn), this._element.style[t] = "", ft.trigger(this._element, un); }), this._element, !0), this._element.style[t] = `${this._element[n]}px`; }
        hide() { if (this._isTransitioning || !this._isShown())
            return; if (ft.trigger(this._element, dn).defaultPrevented)
            return; const e = this._getDimension(); this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, We(this._element), this._element.classList.add(mn), this._element.classList.remove(gn, hn); for (const e of this._triggerArray) {
            const t = Pe(e);
            t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1);
        } this._isTransitioning = !0, this._element.style[e] = "", this._queueCallback((() => { this._isTransitioning = !1, this._element.classList.remove(mn), this._element.classList.add(gn), ft.trigger(this._element, fn); }), this._element, !0); }
        _isShown(e = this._element) { return e.classList.contains(hn); }
        _configAfterMerge(e) { return e.toggle = Boolean(e.toggle), e.parent = qe(e.parent), e; }
        _getDimension() { return this._element.classList.contains("collapse-horizontal") ? "width" : "height"; }
        _initializeChildren() { if (!this._config.parent)
            return; const e = this._getFirstLevelChildren(yn); for (const t of e) {
            const e = Pe(t);
            e && this._addAriaAndCollapsedClass([t], this._isShown(e));
        } }
        _getFirstLevelChildren(e) { const t = St.find(vn, this._config.parent); return St.find(e, this._config.parent).filter((e => !t.includes(e))); }
        _addAriaAndCollapsedClass(e, t) { if (e.length)
            for (const n of e)
                n.classList.toggle("collapsed", !t), n.setAttribute("aria-expanded", t); }
        static jQueryInterface(e) { const t = {}; return "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1), this.each((function () { const n = wn.getOrCreateInstance(this, t); if ("string" == typeof e) {
            if (void 0 === n[e])
                throw new TypeError(`No method named "${e}"`);
            n[e]();
        } })); }
    }
    ft.on(document, pn, yn, (function (e) { ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault(); const t = Ie(this), n = St.find(t); for (const e of n)
        wn.getOrCreateInstance(e, { toggle: !1 }).toggle(); })), Xe(wn);
    const xn = "dropdown", Tn = ".bs.dropdown", En = ".data-api", Cn = "ArrowUp", An = "ArrowDown", kn = `hide${Tn}`, Sn = `hidden${Tn}`, On = `show${Tn}`, Ln = `shown${Tn}`, Dn = `click${Tn}${En}`, jn = `keydown${Tn}${En}`, Nn = `keyup${Tn}${En}`, In = "show", Pn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Mn = `${Pn}.${In}`, $n = ".dropdown-menu", qn = Ue() ? "top-end" : "top-start", Hn = Ue() ? "top-start" : "top-end", Rn = Ue() ? "bottom-end" : "bottom-start", Bn = Ue() ? "bottom-start" : "bottom-end", Fn = Ue() ? "left-start" : "right-start", Wn = Ue() ? "right-start" : "left-start", zn = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, Vn = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
    class Un extends _t {
        constructor(e, t) { super(e, t), this._popper = null, this._parent = this._element.parentNode, this._menu = St.next(this._element, $n)[0] || St.prev(this._element, $n)[0] || St.findOne($n, this._parent), this._inNavbar = this._detectNavbar(); }
        static get Default() { return zn; }
        static get DefaultType() { return Vn; }
        static get NAME() { return xn; }
        toggle() { return this._isShown() ? this.hide() : this.show(); }
        show() { if (Re(this._element) || this._isShown())
            return; const e = { relatedTarget: this._element }; if (!ft.trigger(this._element, On, e).defaultPrevented) {
            if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                for (const e of [].concat(...document.body.children))
                    ft.on(e, "mouseover", Fe);
            this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(In), this._element.classList.add(In), ft.trigger(this._element, Ln, e);
        } }
        hide() { if (Re(this._element) || !this._isShown())
            return; const e = { relatedTarget: this._element }; this._completeHide(e); }
        dispose() { this._popper && this._popper.destroy(), super.dispose(); }
        update() { this._inNavbar = this._detectNavbar(), this._popper && this._popper.update(); }
        _completeHide(e) { if (!ft.trigger(this._element, kn, e).defaultPrevented) {
            if ("ontouchstart" in document.documentElement)
                for (const e of [].concat(...document.body.children))
                    ft.off(e, "mouseover", Fe);
            this._popper && this._popper.destroy(), this._menu.classList.remove(In), this._element.classList.remove(In), this._element.setAttribute("aria-expanded", "false"), yt.removeDataAttribute(this._menu, "popper"), ft.trigger(this._element, Sn, e);
        } }
        _getConfig(e) { if ("object" == typeof (e = super._getConfig(e)).reference && !$e(e.reference) && "function" != typeof e.reference.getBoundingClientRect)
            throw new TypeError(`${xn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`); return e; }
        _createPopper() { if (void 0 === e)
            throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)"); let t = this._element; "parent" === this._config.reference ? t = this._parent : $e(this._config.reference) ? t = qe(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference); const n = this._getPopperConfig(); this._popper = Le(t, this._menu, n); }
        _isShown() { return this._menu.classList.contains(In); }
        _getPlacement() { const e = this._parent; if (e.classList.contains("dropend"))
            return Fn; if (e.classList.contains("dropstart"))
            return Wn; if (e.classList.contains("dropup-center"))
            return "top"; if (e.classList.contains("dropdown-center"))
            return "bottom"; const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim(); return e.classList.contains("dropup") ? t ? Hn : qn : t ? Bn : Rn; }
        _detectNavbar() { return null !== this._element.closest(".navbar"); }
        _getOffset() { const { offset: e } = this._config; return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e; }
        _getPopperConfig() { const e = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] }; return (this._inNavbar || "static" === this._config.display) && (yt.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{ name: "applyStyles", enabled: !1 }]), Object.assign(Object.assign({}, e), "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig); }
        _selectMenuItem({ key: e, target: t }) { const n = St.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((e => He(e))); n.length && Qe(n, t, e === An, !n.includes(t)).focus(); }
        static jQueryInterface(e) { return this.each((function () { const t = Un.getOrCreateInstance(this, e); if ("string" == typeof e) {
            if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
            t[e]();
        } })); }
        static clearMenus(e) { if (2 === e.button || "keyup" === e.type && "Tab" !== e.key)
            return; const t = St.find(Mn); for (const n of t) {
            const t = Un.getInstance(n);
            if (!t || !1 === t._config.autoClose)
                continue;
            const i = e.composedPath(), o = i.includes(t._menu);
            if (i.includes(t._element) || "inside" === t._config.autoClose && !o || "outside" === t._config.autoClose && o)
                continue;
            if (t._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName)))
                continue;
            const r = { relatedTarget: t._element };
            "click" === e.type && (r.clickEvent = e), t._completeHide(r);
        } }
        static dataApiKeydownHandler(e) { const t = /input|textarea/i.test(e.target.tagName), n = "Escape" === e.key, i = [Cn, An].includes(e.key); if (!i && !n)
            return; if (t && !n)
            return; e.preventDefault(); const o = this.matches(Pn) ? this : St.prev(this, Pn)[0] || St.next(this, Pn)[0] || St.findOne(Pn, e.delegateTarget.parentNode), r = Un.getOrCreateInstance(o); if (i)
            return e.stopPropagation(), r.show(), void r._selectMenuItem(e); r._isShown() && (e.stopPropagation(), r.hide(), o.focus()); }
    }
    ft.on(document, jn, Pn, Un.dataApiKeydownHandler), ft.on(document, jn, $n, Un.dataApiKeydownHandler), ft.on(document, Dn, Un.clearMenus), ft.on(document, Nn, Un.clearMenus), ft.on(document, Dn, Pn, (function (e) { e.preventDefault(), Un.getOrCreateInstance(this).toggle(); })), Xe(Un);
    const Xn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Yn = ".sticky-top", Kn = "padding-right", Qn = "margin-right";
    class Gn {
        constructor() { this._element = document.body; }
        getWidth() { const e = document.documentElement.clientWidth; return Math.abs(window.innerWidth - e); }
        hide() { const e = this.getWidth(); this._disableOverFlow(), this._setElementAttributes(this._element, Kn, (t => t + e)), this._setElementAttributes(Xn, Kn, (t => t + e)), this._setElementAttributes(Yn, Qn, (t => t - e)); }
        reset() { this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Kn), this._resetElementAttributes(Xn, Kn), this._resetElementAttributes(Yn, Qn); }
        isOverflowing() { return this.getWidth() > 0; }
        _disableOverFlow() { this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"; }
        _setElementAttributes(e, t, n) { const i = this.getWidth(); this._applyManipulationCallback(e, (e => { if (e !== this._element && window.innerWidth > e.clientWidth + i)
            return; this._saveInitialAttribute(e, t); const o = window.getComputedStyle(e).getPropertyValue(t); e.style.setProperty(t, `${n(Number.parseFloat(o))}px`); })); }
        _saveInitialAttribute(e, t) { const n = e.style.getPropertyValue(t); n && yt.setDataAttribute(e, t, n); }
        _resetElementAttributes(e, t) { this._applyManipulationCallback(e, (e => { const n = yt.getDataAttribute(e, t); null !== n ? (yt.removeDataAttribute(e, t), e.style.setProperty(t, n)) : e.style.removeProperty(t); })); }
        _applyManipulationCallback(e, t) { if ($e(e))
            t(e);
        else
            for (const n of St.find(e, this._element))
                t(n); }
    }
    const Jn = "backdrop", Zn = "show", ei = `mousedown.bs.${Jn}`, ti = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" }, ni = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
    class ii extends bt {
        constructor(e) { super(), this._config = this._getConfig(e), this._isAppended = !1, this._element = null; }
        static get Default() { return ti; }
        static get DefaultType() { return ni; }
        static get NAME() { return Jn; }
        show(e) { if (!this._config.isVisible)
            return void Ye(e); this._append(); const t = this._getElement(); this._config.isAnimated && We(t), t.classList.add(Zn), this._emulateAnimation((() => { Ye(e); })); }
        hide(e) { this._config.isVisible ? (this._getElement().classList.remove(Zn), this._emulateAnimation((() => { this.dispose(), Ye(e); }))) : Ye(e); }
        dispose() { this._isAppended && (ft.off(this._element, ei), this._element.remove(), this._isAppended = !1); }
        _getElement() { if (!this._element) {
            const e = document.createElement("div");
            e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e;
        } return this._element; }
        _configAfterMerge(e) { return e.rootElement = qe(e.rootElement), e; }
        _append() { if (this._isAppended)
            return; const e = this._getElement(); this._config.rootElement.append(e), ft.on(e, ei, (() => { Ye(this._config.clickCallback); })), this._isAppended = !0; }
        _emulateAnimation(e) { Ke(e, this._getElement(), this._config.isAnimated); }
    }
    const oi = ".bs.focustrap", ri = `focusin${oi}`, si = `keydown.tab${oi}`, ai = "backward", li = { autofocus: !0, trapElement: null }, ci = { autofocus: "boolean", trapElement: "element" };
    class ui extends bt {
        constructor(e) { super(), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null; }
        static get Default() { return li; }
        static get DefaultType() { return ci; }
        static get NAME() { return "focustrap"; }
        activate() { this._isActive || (this._config.autofocus && this._config.trapElement.focus(), ft.off(document, oi), ft.on(document, ri, (e => this._handleFocusin(e))), ft.on(document, si, (e => this._handleKeydown(e))), this._isActive = !0); }
        deactivate() { this._isActive && (this._isActive = !1, ft.off(document, oi)); }
        _handleFocusin(e) { const { trapElement: t } = this._config; if (e.target === document || e.target === t || t.contains(e.target))
            return; const n = St.focusableChildren(t); 0 === n.length ? t.focus() : this._lastTabNavDirection === ai ? n[n.length - 1].focus() : n[0].focus(); }
        _handleKeydown(e) { "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? ai : "forward"); }
    }
    const di = ".bs.modal", fi = `hide${di}`, pi = `hidePrevented${di}`, hi = `hidden${di}`, gi = `show${di}`, mi = `shown${di}`, vi = `resize${di}`, yi = `click.dismiss${di}`, bi = `mousedown.dismiss${di}`, _i = `keydown.dismiss${di}`, wi = `click${di}.data-api`, xi = "modal-open", Ti = "show", Ei = "modal-static", Ci = { backdrop: !0, focus: !0, keyboard: !0 }, Ai = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
    class ki extends _t {
        constructor(e, t) { super(e, t), this._dialog = St.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Gn, this._addEventListeners(); }
        static get Default() { return Ci; }
        static get DefaultType() { return Ai; }
        static get NAME() { return "modal"; }
        toggle(e) { return this._isShown ? this.hide() : this.show(e); }
        show(e) { this._isShown || this._isTransitioning || ft.trigger(this._element, gi, { relatedTarget: e }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(xi), this._adjustDialog(), this._backdrop.show((() => this._showElement(e)))); }
        hide() { this._isShown && !this._isTransitioning && (ft.trigger(this._element, fi).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Ti), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated()))); }
        dispose() { for (const e of [window, this._dialog])
            ft.off(e, di); this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose(); }
        handleUpdate() { this._adjustDialog(); }
        _initializeBackDrop() { return new ii({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() }); }
        _initializeFocusTrap() { return new ui({ trapElement: this._element }); }
        _showElement(e) { document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0; const t = St.findOne(".modal-body", this._dialog); t && (t.scrollTop = 0), We(this._element), this._element.classList.add(Ti), this._queueCallback((() => { this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, ft.trigger(this._element, mi, { relatedTarget: e }); }), this._dialog, this._isAnimated()); }
        _addEventListeners() { ft.on(this._element, _i, (e => { if ("Escape" === e.key)
            return this._config.keyboard ? (e.preventDefault(), void this.hide()) : void this._triggerBackdropTransition(); })), ft.on(window, vi, (() => { this._isShown && !this._isTransitioning && this._adjustDialog(); })), ft.on(this._element, bi, (e => { ft.one(this._element, yi, (t => { this._element === e.target && this._element === t.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition()); })); })); }
        _hideModal() { this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => { document.body.classList.remove(xi), this._resetAdjustments(), this._scrollBar.reset(), ft.trigger(this._element, hi); })); }
        _isAnimated() { return this._element.classList.contains("fade"); }
        _triggerBackdropTransition() { if (ft.trigger(this._element, pi).defaultPrevented)
            return; const e = this._element.scrollHeight > document.documentElement.clientHeight, t = this._element.style.overflowY; "hidden" === t || this._element.classList.contains(Ei) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(Ei), this._queueCallback((() => { this._element.classList.remove(Ei), this._queueCallback((() => { this._element.style.overflowY = t; }), this._dialog); }), this._dialog), this._element.focus()); }
        _adjustDialog() { const e = this._element.scrollHeight > document.documentElement.clientHeight, t = this._scrollBar.getWidth(), n = t > 0; if (n && !e) {
            const e = Ue() ? "paddingLeft" : "paddingRight";
            this._element.style[e] = `${t}px`;
        } if (!n && e) {
            const e = Ue() ? "paddingRight" : "paddingLeft";
            this._element.style[e] = `${t}px`;
        } }
        _resetAdjustments() { this._element.style.paddingLeft = "", this._element.style.paddingRight = ""; }
        static jQueryInterface(e, t) { return this.each((function () { const n = ki.getOrCreateInstance(this, e); if ("string" == typeof e) {
            if (void 0 === n[e])
                throw new TypeError(`No method named "${e}"`);
            n[e](t);
        } })); }
    }
    ft.on(document, wi, '[data-bs-toggle="modal"]', (function (e) { const t = Pe(this); ["A", "AREA"].includes(this.tagName) && e.preventDefault(), ft.one(t, gi, (e => { e.defaultPrevented || ft.one(t, hi, (() => { He(this) && this.focus(); })); })); const n = St.findOne(".modal.show"); n && ki.getInstance(n).hide(), ki.getOrCreateInstance(t).toggle(this); })), wt(ki), Xe(ki);
    const Si = ".bs.offcanvas", Oi = ".data-api", Li = `load${Si}${Oi}`, Di = "show", ji = "showing", Ni = "hiding", Ii = ".offcanvas.show", Pi = `show${Si}`, Mi = `shown${Si}`, $i = `hide${Si}`, qi = `hidePrevented${Si}`, Hi = `hidden${Si}`, Ri = `resize${Si}`, Bi = `click${Si}${Oi}`, Fi = `keydown.dismiss${Si}`, Wi = { backdrop: !0, keyboard: !0, scroll: !1 }, zi = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
    class Vi extends _t {
        constructor(e, t) { super(e, t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners(); }
        static get Default() { return Wi; }
        static get DefaultType() { return zi; }
        static get NAME() { return "offcanvas"; }
        toggle(e) { return this._isShown ? this.hide() : this.show(e); }
        show(e) { this._isShown || ft.trigger(this._element, Pi, { relatedTarget: e }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new Gn).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(ji), this._queueCallback((() => { this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Di), this._element.classList.remove(ji), ft.trigger(this._element, Mi, { relatedTarget: e }); }), this._element, !0)); }
        hide() { this._isShown && (ft.trigger(this._element, $i).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Ni), this._backdrop.hide(), this._queueCallback((() => { this._element.classList.remove(Di, Ni), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new Gn).reset(), ft.trigger(this._element, Hi); }), this._element, !0))); }
        dispose() { this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose(); }
        _initializeBackDrop() { const e = Boolean(this._config.backdrop); return new ii({ className: "offcanvas-backdrop", isVisible: e, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: e ? () => { "static" !== this._config.backdrop ? this.hide() : ft.trigger(this._element, qi); } : null }); }
        _initializeFocusTrap() { return new ui({ trapElement: this._element }); }
        _addEventListeners() { ft.on(this._element, Fi, (e => { "Escape" === e.key && (this._config.keyboard ? this.hide() : ft.trigger(this._element, qi)); })); }
        static jQueryInterface(e) { return this.each((function () { const t = Vi.getOrCreateInstance(this, e); if ("string" == typeof e) {
            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw new TypeError(`No method named "${e}"`);
            t[e](this);
        } })); }
    }
    ft.on(document, Bi, '[data-bs-toggle="offcanvas"]', (function (e) { const t = Pe(this); if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), Re(this))
        return; ft.one(t, Hi, (() => { He(this) && this.focus(); })); const n = St.findOne(Ii); n && n !== t && Vi.getInstance(n).hide(), Vi.getOrCreateInstance(t).toggle(this); })), ft.on(window, Li, (() => { for (const e of St.find(Ii))
        Vi.getOrCreateInstance(e).show(); })), ft.on(window, Ri, (() => { for (const e of St.find("[aria-modal][class*=show][class*=offcanvas-]"))
        "fixed" !== getComputedStyle(e).position && Vi.getOrCreateInstance(e).hide(); })), wt(Vi), Xe(Vi);
    const Ui = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Xi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Yi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Ki = (e, t) => { const n = e.nodeName.toLowerCase(); return t.includes(n) ? !Ui.has(n) || Boolean(Xi.test(e.nodeValue) || Yi.test(e.nodeValue)) : t.filter((e => e instanceof RegExp)).some((e => e.test(n))); }, Qi = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Gi = { allowList: Qi, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" }, Ji = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, Zi = { entry: "(string|element|function|null)", selector: "(string|element)" };
    class eo extends bt {
        constructor(e) { super(), this._config = this._getConfig(e); }
        static get Default() { return Gi; }
        static get DefaultType() { return Ji; }
        static get NAME() { return "TemplateFactory"; }
        getContent() { return Object.values(this._config.content).map((e => this._resolvePossibleFunction(e))).filter(Boolean); }
        hasContent() { return this.getContent().length > 0; }
        changeContent(e) { return this._checkContent(e), this._config.content = Object.assign(Object.assign({}, this._config.content), e), this; }
        toHtml() { const e = document.createElement("div"); e.innerHTML = this._maybeSanitize(this._config.template); for (const [t, n] of Object.entries(this._config.content))
            this._setContent(e, n, t); const t = e.children[0], n = this._resolvePossibleFunction(this._config.extraClass); return n && t.classList.add(...n.split(" ")), t; }
        _typeCheckConfig(e) { super._typeCheckConfig(e), this._checkContent(e.content); }
        _checkContent(e) { for (const [t, n] of Object.entries(e))
            super._typeCheckConfig({ selector: t, entry: n }, Zi); }
        _setContent(e, t, n) { const i = St.findOne(n, e); i && ((t = this._resolvePossibleFunction(t)) ? $e(t) ? this._putElementInTemplate(qe(t), i) : this._config.html ? i.innerHTML = this._maybeSanitize(t) : i.textContent = t : i.remove()); }
        _maybeSanitize(e) { return this._config.sanitize ? function (e, t, n) { if (!e.length)
            return e; if (n && "function" == typeof n)
            return n(e); const i = (new window.DOMParser).parseFromString(e, "text/html"), o = [].concat(...i.body.querySelectorAll("*")); for (const e of o) {
            const n = e.nodeName.toLowerCase();
            if (!Object.keys(t).includes(n)) {
                e.remove();
                continue;
            }
            const i = [].concat(...e.attributes), o = [].concat(t["*"] || [], t[n] || []);
            for (const t of i)
                Ki(t, o) || e.removeAttribute(t.nodeName);
        } return i.body.innerHTML; }(e, this._config.allowList, this._config.sanitizeFn) : e; }
        _resolvePossibleFunction(e) { return "function" == typeof e ? e(this) : e; }
        _putElementInTemplate(e, t) { if (this._config.html)
            return t.innerHTML = "", void t.append(e); t.textContent = e.textContent; }
    }
    const to = new Set(["sanitize", "allowList", "sanitizeFn"]), no = "fade", io = "show", oo = ".modal", ro = "hide.bs.modal", so = "hover", ao = "focus", lo = { AUTO: "auto", TOP: "top", RIGHT: Ue() ? "left" : "right", BOTTOM: "bottom", LEFT: Ue() ? "right" : "left" }, co = { allowList: Qi, animation: !0, boundary: "clippingParents", container: !1, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: !1, offset: [0, 0], placement: "top", popperConfig: null, sanitize: !0, sanitizeFn: null, selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, uo = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
    class fo extends _t {
        constructor(t, n) { if (void 0 === e)
            throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)"); super(t, n), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle(); }
        static get Default() { return co; }
        static get DefaultType() { return uo; }
        static get NAME() { return "tooltip"; }
        enable() { this._isEnabled = !0; }
        disable() { this._isEnabled = !1; }
        toggleEnabled() { this._isEnabled = !this._isEnabled; }
        toggle() { this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter()); }
        dispose() { clearTimeout(this._timeout), ft.off(this._element.closest(oo), ro, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose(); }
        show() { if ("none" === this._element.style.display)
            throw new Error("Please use show on visible elements"); if (!this._isWithContent() || !this._isEnabled)
            return; const e = ft.trigger(this._element, this.constructor.eventName("show")), t = (Be(this._element) || this._element.ownerDocument.documentElement).contains(this._element); if (e.defaultPrevented || !t)
            return; this._disposePopper(); const n = this._getTipElement(); this._element.setAttribute("aria-describedby", n.getAttribute("id")); const { container: i } = this._config; if (this._element.ownerDocument.documentElement.contains(this.tip) || (i.append(n), ft.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(n), n.classList.add(io), "ontouchstart" in document.documentElement)
            for (const e of [].concat(...document.body.children))
                ft.on(e, "mouseover", Fe); this._queueCallback((() => { ft.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1; }), this.tip, this._isAnimated()); }
        hide() { if (this._isShown() && !ft.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
            if (this._getTipElement().classList.remove(io), "ontouchstart" in document.documentElement)
                for (const e of [].concat(...document.body.children))
                    ft.off(e, "mouseover", Fe);
            this._activeTrigger.click = !1, this._activeTrigger[ao] = !1, this._activeTrigger[so] = !1, this._isHovered = null, this._queueCallback((() => { this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), ft.trigger(this._element, this.constructor.eventName("hidden"))); }), this.tip, this._isAnimated());
        } }
        update() { this._popper && this._popper.update(); }
        _isWithContent() { return Boolean(this._getTitle()); }
        _getTipElement() { return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip; }
        _createTipElement(e) { const t = this._getTemplateFactory(e).toHtml(); if (!t)
            return null; t.classList.remove(no, io), t.classList.add(`bs-${this.constructor.NAME}-auto`); const n = (e => { do {
            e += Math.floor(1e6 * Math.random());
        } while (document.getElementById(e)); return e; })(this.constructor.NAME).toString(); return t.setAttribute("id", n), this._isAnimated() && t.classList.add(no), t; }
        setContent(e) { this._newContent = e, this._isShown() && (this._disposePopper(), this.show()); }
        _getTemplateFactory(e) { return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new eo(Object.assign(Object.assign({}, this._config), { content: e, extraClass: this._resolvePossibleFunction(this._config.customClass) })), this._templateFactory; }
        _getContentForTemplate() { return { ".tooltip-inner": this._getTitle() }; }
        _getTitle() { return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title"); }
        _initializeOnDelegatedTarget(e) { return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig()); }
        _isAnimated() { return this._config.animation || this.tip && this.tip.classList.contains(no); }
        _isShown() { return this.tip && this.tip.classList.contains(io); }
        _createPopper(e) { const t = "function" == typeof this._config.placement ? this._config.placement.call(this, e, this._element) : this._config.placement, n = lo[t.toUpperCase()]; return Le(this._element, e, this._getPopperConfig(n)); }
        _getOffset() { const { offset: e } = this._config; return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e; }
        _resolvePossibleFunction(e) { return "function" == typeof e ? e.call(this._element) : e; }
        _getPopperConfig(e) { const t = { placement: e, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: !0, phase: "beforeMain", fn: e => { this._getTipElement().setAttribute("data-popper-placement", e.state.placement); } }] }; return Object.assign(Object.assign({}, t), "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig); }
        _setListeners() { const e = this._config.trigger.split(" "); for (const t of e)
            if ("click" === t)
                ft.on(this._element, this.constructor.eventName("click"), this._config.selector, (e => { this._initializeOnDelegatedTarget(e).toggle(); }));
            else if ("manual" !== t) {
                const e = t === so ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), n = t === so ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                ft.on(this._element, e, this._config.selector, (e => { const t = this._initializeOnDelegatedTarget(e); t._activeTrigger["focusin" === e.type ? ao : so] = !0, t._enter(); })), ft.on(this._element, n, this._config.selector, (e => { const t = this._initializeOnDelegatedTarget(e); t._activeTrigger["focusout" === e.type ? ao : so] = t._element.contains(e.relatedTarget), t._leave(); }));
            } this._hideModalHandler = () => { this._element && this.hide(); }, ft.on(this._element.closest(oo), ro, this._hideModalHandler); }
        _fixTitle() { const e = this._element.getAttribute("title"); e && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e), this._element.setAttribute("data-bs-original-title", e), this._element.removeAttribute("title")); }
        _enter() { this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => { this._isHovered && this.show(); }), this._config.delay.show)); }
        _leave() { this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => { this._isHovered || this.hide(); }), this._config.delay.hide)); }
        _setTimeout(e, t) { clearTimeout(this._timeout), this._timeout = setTimeout(e, t); }
        _isWithActiveTrigger() { return Object.values(this._activeTrigger).includes(!0); }
        _getConfig(e) { const t = yt.getDataAttributes(this._element); for (const e of Object.keys(t))
            to.has(e) && delete t[e]; return e = Object.assign(Object.assign({}, t), "object" == typeof e && e ? e : {}), e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e; }
        _configAfterMerge(e) { return e.container = !1 === e.container ? document.body : qe(e.container), "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), e; }
        _getDelegateConfig() { const e = {}; for (const t in this._config)
            this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]); return e.selector = !1, e.trigger = "manual", e; }
        _disposePopper() { this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null); }
        static jQueryInterface(e) { return this.each((function () { const t = fo.getOrCreateInstance(this, e); if ("string" == typeof e) {
            if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
            t[e]();
        } })); }
    }
    Xe(fo);
    const po = Object.assign(Object.assign({}, fo.Default), { content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }), ho = Object.assign(Object.assign({}, fo.DefaultType), { content: "(null|string|element|function)" });
    class go extends fo {
        static get Default() { return po; }
        static get DefaultType() { return ho; }
        static get NAME() { return "popover"; }
        _isWithContent() { return this._getTitle() || this._getContent(); }
        _getContentForTemplate() { return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() }; }
        _getContent() { return this._resolvePossibleFunction(this._config.content); }
        static jQueryInterface(e) { return this.each((function () { const t = go.getOrCreateInstance(this, e); if ("string" == typeof e) {
            if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
            t[e]();
        } })); }
    }
    Xe(go);
    const mo = ".bs.scrollspy", vo = `activate${mo}`, yo = `click${mo}`, bo = `load${mo}.data-api`, _o = "active", wo = "[href]", xo = ".nav-link", To = `${xo}, .nav-item > ${xo}, .list-group-item`, Eo = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [.1, .5, 1] }, Co = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
    class Ao extends _t {
        constructor(e, t) { super(e, t), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh(); }
        static get Default() { return Eo; }
        static get DefaultType() { return Co; }
        static get NAME() { return "scrollspy"; }
        refresh() { this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver(); for (const e of this._observableSections.values())
            this._observer.observe(e); }
        dispose() { this._observer.disconnect(), super.dispose(); }
        _configAfterMerge(e) { return e.target = qe(e.target) || document.body, e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin, "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map((e => Number.parseFloat(e)))), e; }
        _maybeEnableSmoothScroll() { this._config.smoothScroll && (ft.off(this._config.target, yo), ft.on(this._config.target, yo, wo, (e => { const t = this._observableSections.get(e.target.hash); if (t) {
            e.preventDefault();
            const n = this._rootElement || window, i = t.offsetTop - this._element.offsetTop;
            if (n.scrollTo)
                return void n.scrollTo({ top: i, behavior: "smooth" });
            n.scrollTop = i;
        } }))); }
        _getNewObserver() { const e = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin }; return new IntersectionObserver((e => this._observerCallback(e)), e); }
        _observerCallback(e) { const t = e => this._targetLinks.get(`#${e.target.id}`), n = e => { this._previousScrollData.visibleEntryTop = e.target.offsetTop, this._process(t(e)); }, i = (this._rootElement || document.documentElement).scrollTop, o = i >= this._previousScrollData.parentScrollTop; this._previousScrollData.parentScrollTop = i; for (const r of e) {
            if (!r.isIntersecting) {
                this._activeTarget = null, this._clearActiveClass(t(r));
                continue;
            }
            const e = r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (o && e) {
                if (n(r), !i)
                    return;
            }
            else
                o || e || n(r);
        } }
        _initializeTargetsAndObservables() { this._targetLinks = new Map, this._observableSections = new Map; const e = St.find(wo, this._config.target); for (const t of e) {
            if (!t.hash || Re(t))
                continue;
            const e = St.findOne(t.hash, this._element);
            He(e) && (this._targetLinks.set(t.hash, t), this._observableSections.set(t.hash, e));
        } }
        _process(e) { this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(_o), this._activateParents(e), ft.trigger(this._element, vo, { relatedTarget: e })); }
        _activateParents(e) { if (e.classList.contains("dropdown-item"))
            St.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(_o);
        else
            for (const t of St.parents(e, ".nav, .list-group"))
                for (const e of St.prev(t, To))
                    e.classList.add(_o); }
        _clearActiveClass(e) { e.classList.remove(_o); const t = St.find(`${wo}.${_o}`, e); for (const e of t)
            e.classList.remove(_o); }
        static jQueryInterface(e) { return this.each((function () { const t = Ao.getOrCreateInstance(this, e); if ("string" == typeof e) {
            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw new TypeError(`No method named "${e}"`);
            t[e]();
        } })); }
    }
    ft.on(window, bo, (() => { for (const e of St.find('[data-bs-spy="scroll"]'))
        Ao.getOrCreateInstance(e); })), Xe(Ao);
    const ko = ".bs.tab", So = `hide${ko}`, Oo = `hidden${ko}`, Lo = `show${ko}`, Do = `shown${ko}`, jo = `click${ko}`, No = `keydown${ko}`, Io = `load${ko}`, Po = "ArrowLeft", Mo = "ArrowRight", $o = "ArrowUp", qo = "ArrowDown", Ho = "active", Ro = "fade", Bo = "show", Fo = ":not(.dropdown-toggle)", Wo = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', zo = `.nav-link${Fo}, .list-group-item${Fo}, [role="tab"]${Fo}, ${Wo}`, Vo = `.${Ho}[data-bs-toggle="tab"], .${Ho}[data-bs-toggle="pill"], .${Ho}[data-bs-toggle="list"]`;
    class Uo extends _t {
        constructor(e) { super(e), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), ft.on(this._element, No, (e => this._keydown(e)))); }
        static get NAME() { return "tab"; }
        show() { const e = this._element; if (this._elemIsActive(e))
            return; const t = this._getActiveElem(), n = t ? ft.trigger(t, So, { relatedTarget: e }) : null; ft.trigger(e, Lo, { relatedTarget: t }).defaultPrevented || n && n.defaultPrevented || (this._deactivate(t, e), this._activate(e, t)); }
        _activate(e, t) { e && (e.classList.add(Ho), this._activate(Pe(e)), this._queueCallback((() => { "tab" === e.getAttribute("role") ? (e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), ft.trigger(e, Do, { relatedTarget: t })) : e.classList.add(Bo); }), e, e.classList.contains(Ro))); }
        _deactivate(e, t) { e && (e.classList.remove(Ho), e.blur(), this._deactivate(Pe(e)), this._queueCallback((() => { "tab" === e.getAttribute("role") ? (e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), ft.trigger(e, Oo, { relatedTarget: t })) : e.classList.remove(Bo); }), e, e.classList.contains(Ro))); }
        _keydown(e) { if (![Po, Mo, $o, qo].includes(e.key))
            return; e.stopPropagation(), e.preventDefault(); const t = [Mo, qo].includes(e.key), n = Qe(this._getChildren().filter((e => !Re(e))), e.target, t, !0); n && (n.focus({ preventScroll: !0 }), Uo.getOrCreateInstance(n).show()); }
        _getChildren() { return St.find(zo, this._parent); }
        _getActiveElem() { return this._getChildren().find((e => this._elemIsActive(e))) || null; }
        _setInitialAttributes(e, t) { this._setAttributeIfNotExists(e, "role", "tablist"); for (const e of t)
            this._setInitialAttributesOnChild(e); }
        _setInitialAttributesOnChild(e) { e = this._getInnerElement(e); const t = this._elemIsActive(e), n = this._getOuterElement(e); e.setAttribute("aria-selected", t), n !== e && this._setAttributeIfNotExists(n, "role", "presentation"), t || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e); }
        _setInitialAttributesOnTargetPanel(e) { const t = Pe(e); t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `#${e.id}`)); }
        _toggleDropDown(e, t) { const n = this._getOuterElement(e); if (!n.classList.contains("dropdown"))
            return; const i = (e, i) => { const o = St.findOne(e, n); o && o.classList.toggle(i, t); }; i(".dropdown-toggle", Ho), i(".dropdown-menu", Bo), n.setAttribute("aria-expanded", t); }
        _setAttributeIfNotExists(e, t, n) { e.hasAttribute(t) || e.setAttribute(t, n); }
        _elemIsActive(e) { return e.classList.contains(Ho); }
        _getInnerElement(e) { return e.matches(zo) ? e : St.findOne(zo, e); }
        _getOuterElement(e) { return e.closest(".nav-item, .list-group-item") || e; }
        static jQueryInterface(e) { return this.each((function () { const t = Uo.getOrCreateInstance(this); if ("string" == typeof e) {
            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
                throw new TypeError(`No method named "${e}"`);
            t[e]();
        } })); }
    }
    ft.on(document, jo, Wo, (function (e) { ["A", "AREA"].includes(this.tagName) && e.preventDefault(), Re(this) || Uo.getOrCreateInstance(this).show(); })), ft.on(window, Io, (() => { for (const e of St.find(Vo))
        Uo.getOrCreateInstance(e); })), Xe(Uo);
    const Xo = ".bs.toast", Yo = `mouseover${Xo}`, Ko = `mouseout${Xo}`, Qo = `focusin${Xo}`, Go = `focusout${Xo}`, Jo = `hide${Xo}`, Zo = `hidden${Xo}`, er = `show${Xo}`, tr = `shown${Xo}`, nr = "hide", ir = "show", or = "showing", rr = { animation: "boolean", autohide: "boolean", delay: "number" }, sr = { animation: !0, autohide: !0, delay: 5e3 };
    class ar extends _t {
        constructor(e, t) { super(e, t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners(); }
        static get Default() { return sr; }
        static get DefaultType() { return rr; }
        static get NAME() { return "toast"; }
        show() { ft.trigger(this._element, er).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(nr), We(this._element), this._element.classList.add(ir, or), this._queueCallback((() => { this._element.classList.remove(or), ft.trigger(this._element, tr), this._maybeScheduleHide(); }), this._element, this._config.animation)); }
        hide() { this.isShown() && (ft.trigger(this._element, Jo).defaultPrevented || (this._element.classList.add(or), this._queueCallback((() => { this._element.classList.add(nr), this._element.classList.remove(or, ir), ft.trigger(this._element, Zo); }), this._element, this._config.animation))); }
        dispose() { this._clearTimeout(), this.isShown() && this._element.classList.remove(ir), super.dispose(); }
        isShown() { return this._element.classList.contains(ir); }
        _maybeScheduleHide() { this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => { this.hide(); }), this._config.delay))); }
        _onInteraction(e, t) { switch (e.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = t;
                break;
            case "focusin":
            case "focusout": this._hasKeyboardInteraction = t;
        } if (t)
            return void this._clearTimeout(); const n = e.relatedTarget; this._element === n || this._element.contains(n) || this._maybeScheduleHide(); }
        _setListeners() { ft.on(this._element, Yo, (e => this._onInteraction(e, !0))), ft.on(this._element, Ko, (e => this._onInteraction(e, !1))), ft.on(this._element, Qo, (e => this._onInteraction(e, !0))), ft.on(this._element, Go, (e => this._onInteraction(e, !1))); }
        _clearTimeout() { clearTimeout(this._timeout), this._timeout = null; }
        static jQueryInterface(e) { return this.each((function () { const t = ar.getOrCreateInstance(this, e); if ("string" == typeof e) {
            if (void 0 === t[e])
                throw new TypeError(`No method named "${e}"`);
            t[e](this);
        } })); }
    }
    wt(ar), Xe(ar);
    var lr = n(755), cr = n.n(lr), ur = n(711), dr = n.n(ur);
    cr()((function () {
        var _a, _b, _c, _d, _f, _g, _h, _j, _k, _l, _m, _p;
        return __awaiter(this, void 0, void 0, function* () { console.log("page loaded"); let e = (_a = document.getElementById("Navbar")) !== null && _a !== void 0 ? _a : null, t = (_b = document.getElementById("open-login-form")) !== null && _b !== void 0 ? _b : null, n = (_c = document.getElementById("login-form-container")) !== null && _c !== void 0 ? _c : null, i = (_d = document.getElementById("close-login-form")) !== null && _d !== void 0 ? _d : null, o = (_f = document.getElementById("submit-login-form")) !== null && _f !== void 0 ? _f : null, r = (_g = document.getElementById("to-signup-link")) !== null && _g !== void 0 ? _g : null, s = (_h = document.getElementById("signup-form-container")) !== null && _h !== void 0 ? _h : null, a = (_j = document.getElementById("submit-signup-form")) !== null && _j !== void 0 ? _j : null, l = (_k = document.getElementById("close-signup-form")) !== null && _k !== void 0 ? _k : null, c = (_l = document.getElementById("to-login-link")) !== null && _l !== void 0 ? _l : null, u = (_m = document.getElementById("login-username-input")) !== null && _m !== void 0 ? _m : null, d = (_p = document.getElementById("login-password-input")) !== null && _p !== void 0 ? _p : null; document.getElementById("signup-username-input"), document.getElementById("signup-email-input"), document.getElementById("signup-password-input"), document.getElementById("signup-password2-input"), console.log(t), e && window.addEventListener("scroll", ((t) => __awaiter(this, void 0, void 0, function* () { window.scrollY <= 70 ? (e.classList.contains("bg-none") || (e.classList.add("bg-none"), e.dispatchEvent(new Event("hover"))), e.classList.contains("add-border-to-bottom-of-nav") && e.classList.remove("add-border-to-bottom-of-nav")) : (e.classList.contains("bg-none") && e.classList.remove("bg-none"), e.classList.contains("add-border-to-bottom-of-nav") || e.classList.add("add-border-to-bottom-of-nav")); }))), window.dispatchEvent(new Event("scroll")), window.tos = document.getElementById("TermsOfService"), "yes" !== localStorage.getItem("KUROCO-TOS-ACCEPTED") && window.tos.classList.toggle("d-none"), window.acceptTOS = function () {
            return __awaiter(this, void 0, void 0, function* () { window.tos.classList.toggle("d-none"), localStorage.setItem("KUROCO-TOS-ACCEPTED", "yes"), console.log("You accepted our TOS? What an Idiot."); });
        }, setTimeout((function () { window.dispatchEvent(new Event("scroll")), dr().init({ disable: "mobile" }); }), 100), t && t.addEventListener("click", ((e) => __awaiter(this, void 0, void 0, function* () { console.log("Toggling Login Form"), t.classList.toggle("disabled"), n.classList.toggle("d-none"); }))), l && l.addEventListener("click", ((e) => __awaiter(this, void 0, void 0, function* () { console.log("Closing Signup Form..."), s.classList.toggle("d-none"), t.classList.toggle("disabled"); }))), i && i.addEventListener("click", ((e) => __awaiter(this, void 0, void 0, function* () { console.log("Closing Login Form..."), n.classList.toggle("d-none"), t.classList.toggle("disabled"); }))), r && r.addEventListener("click", ((e) => __awaiter(this, void 0, void 0, function* () { console.log("To Signup Form..."), n.classList.toggle("d-none"), s.classList.toggle("d-none"); }))), c && c.addEventListener("click", ((e) => __awaiter(this, void 0, void 0, function* () { console.log("To Login Form..."), s.classList.toggle("d-none"), n.classList.toggle("d-none"); }))), o && o.addEventListener("click", ((e) => __awaiter(this, void 0, void 0, function* () { console.log("Trying to Submit Login Form..."); let i = u.value, o = d.value; try {
            let e = yield function (e, t) {
                return __awaiter(this, void 0, void 0, function* () { console.log("trying to authenticate user: ", e); const n = yield fetch("/api/auth/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ username: e, password: t }) }); return yield n.json(); });
            }(i, o);
            if (console.log(e), !e.success)
                throw new Error("User Authentication Failed!");
            !function (e, t) {
                return __awaiter(this, void 0, void 0, function* () { localStorage.setItem("KUROCO_CRED_USER", e), localStorage.setItem("KUROCO_CRED_AUTH_TOKEN", t); });
            }(i, e), console.log(i, e), n.classList.toggle("d-none"), t.classList.toggle("disabled");
        }
        catch (e) {
            alert("Error! Invalid Credentials");
        } }))), a && a.addEventListener("click", ((e) => __awaiter(this, void 0, void 0, function* () { console.log("Trying to Submit Signup Form"), s.classList.toggle("d-none"), t.classList.toggle("disabled"); }))); });
    }));
})(); })();
