/*!
 * Likely 2.5.0 by Ilya Birman (ilyabirman.net)
 * Rewritten sans jQuery by Evgeny Steblinsky (volter9.github.io)
 * Supported by Ivan Akulov (iamakulov.com), Viktor Karpov (https://twitter.com/vitkarpov),
 * Nikolay Rys (linkedin.com/in/nikolay-rys) and contributors
 * Inspired by Social Likes by Artem Sapegin (sapegin.me)
 */
!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.likely = e() : t.likely = e()
}(this, function () {
    return function (t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {i: r, l: !1, exports: {}};
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }

        var n = {};
        return e.m = t, e.c = n, e.i = function (t) {
            return t
        }, e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: r})
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 22)
    }([function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), function (t) {
            n.d(e, "each", function () {
                return o
            }), n.d(e, "toArray", function () {
                return a
            }), n.d(e, "merge", function () {
                return c
            }), n.d(e, "extend", function () {
                return u
            }), n.d(e, "getDataset", function () {
                return s
            }), n.d(e, "bools", function () {
                return l
            }), n.d(e, "interpolateStr", function () {
                return p
            }), n.d(e, "interpolateUrl", function () {
                return f
            }), n.d(e, "query", function () {
                return d
            }), n.d(e, "registerGlobalCallback", function () {
                return h
            }), n.d(e, "getDefaultUrl", function () {
                return C
            }), n.d(e, "isBrowserEnv", function () {
                return v
            });
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, i = {yes: !0, no: !1}, o = function (t, e) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(t[n], n)
            }, a = function (t) {
                return Array.prototype.slice.call(t)
            }, c = function () {
                for (var t = {}, e = Array.prototype.slice.call(arguments), n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (r) for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                }
                return t
            }, u = function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t
            }, s = function (t) {
                if ("object" === r(t.dataset)) return t.dataset;
                var e = void 0, n = {}, i = t.attributes, o = void 0, a = void 0, c = function (t) {
                    return t.charAt(1).toUpperCase()
                };
                for (e = i.length - 1; e >= 0; e--) (o = i[e]) && o.name && /^data-\w[\w-]*$/.test(o.name) && (a = o.name.substr(5).replace(/-./g, c), n[a] = o.value);
                return n
            }, l = function (t) {
                var e = {}, n = s(t);
                for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
                    var o = n[r];
                    e[r] = o in i ? i[o] : o
                }
                return e
            }, p = function (t, e) {
                return t ? t.replace(/\{([^}]+)\}/g, function (t, n) {
                    return n in e ? e[n] : t
                }) : ""
            }, f = function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (e[n] = encodeURIComponent(e[n]));
                return p(t, e)
            }, d = function (t, e, n) {
                var i = encodeURIComponent, o = [];
                for (var a in t) "object" !== r(t[a]) && (Array.isArray(e) && !e.includes(a) && console.warn("Likely – DEPRECATION WARNING: unsupported parameter “%s” is provided for “%s” button. It will be ignored in version 3.0.", a, n), o.push(i(a) + "=" + i(t[a])));
                return o.join("&")
            }, h = function (e, n) {
                var r = e.split("."), i = null, o = t;
                r.forEach(function (t, e) {
                    void 0 === o[t] && (o[t] = {}), e !== r.length - 1 && (o = o[t]), i = t
                }), o[i] = n
            }, C = function () {
                var t = document.querySelector('link[rel="canonical"]');
                return t ? t.href : window.location.href.replace(window.location.hash, "")
            }, v = "undefined" != typeof window && "undefined" != typeof document && document.createElement
        }.call(e, n(21))
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), n.d(e, "global", function () {
            return o
        }), n.d(e, "wrapSVG", function () {
            return u
        }), n.d(e, "createNode", function () {
            return s
        }), n.d(e, "loadScript", function () {
            return l
        }), n.d(e, "getJSON", function () {
            return p
        }), n.d(e, "find", function () {
            return f
        }), n.d(e, "findAll", function () {
            return d
        }), n.d(e, "openPopup", function () {
            return h
        }), n.d(e, "createTempLink", function () {
            return C
        });
        var r = n(0), i = {}, o = r.isBrowserEnv ? window : i, a = r.isBrowserEnv ? document.createElement("div") : {},
            c = 0;
        o.__likelyCallbacks = {};
        var u = function (t) {
            return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M' + t + 'z"/></svg>'
        }, s = function (t) {
            return a.innerHTML = t, a.children[0]
        }, l = function (t) {
            var e = document.createElement("script"), n = document.head;
            e.type = "text/javascript", e.src = t, n.appendChild(e), n.removeChild(e)
        }, p = function (t, e) {
            var n = encodeURIComponent("random_fun_" + ++c),
                r = t.replace(/(callback|jsonp)=(\?)/, "$1=__likelyCallbacks." + n);
            o.__likelyCallbacks[n] = e, l(r)
        }, f = function (t, e) {
            return (e || document).querySelector(t)
        }, d = function (t, e) {
            return Array.prototype.slice.call((e || document).querySelectorAll(t))
        }, h = function (t, e, n, r) {
            var i = Math.round(screen.width / 2 - n / 2), o = 0;
            screen.height > r && (o = Math.round(screen.height / 3 - r / 2));
            var a = "left=" + i + ",top=" + o + ",width=" + n + ",height=" + r + ",personalbar=0,toolbar=0,scrollbars=1,resizable=1",
                c = window.open(t, e, a);
            return c ? (c.focus(), c) : (location.href = t, null)
        }, C = function (t) {
            var e = document.createElement("a");
            e.href = t, e.style = "display: none", document.body.appendChild(e), setTimeout(function () {
                e.click(), document.body.removeChild(e)
            })
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {name: "likely", prefix: "likely__"}
    }, function (t, e, n) {
        "use strict";
        var r = n(8), i = n(0), o = n(9), a = n(10), c = n(11), u = n(12), s = n(14), l = n(15), p = n(17), f = n(18),
            d = n(16), h = n(13), C = {
                facebook: o.a,
                linkedin: a.a,
                odnoklassniki: c.a,
                pinterest: u.a,
                telegram: s.a,
                twitter: l.a,
                vkontakte: p.a,
                whatsapp: f.a,
                viber: d.a,
                reddit: h.a
            };
        n.i(i.each)(C, function (t, e) {
            n.i(r.a)(t), t.name = e
        }), e.a = C
    }, function (t, e, n) {
        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        var i = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                return function (e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(), o = n(0), a = o.bools, c = o.getDefaultUrl, u = o.merge, s = n(19).default, l = n(2).default, p = n(1),
            f = p.findAll, d = n(7).default;
        n(20);
        var h = function (t, e) {
            var n = e || {}, r = {counters: !0, timeout: 1e3, zeroes: !1, title: document.title, wait: 700, url: c()},
                i = u({}, r, n, a(t)), o = t[l.name];
            return o ? o.update(i) : t[l.name] = new s(t, i), o
        }, C = function () {
            function t() {
                return r(this, t), console.warn("likely function is DEPRECATED and will be removed in 3.0. Use likely.initiate instead."), t.initiate.apply(t, arguments)
            }

            return i(t, null, [{
                key: "initate", value: function () {
                    return console.warn("likely.initate function is DEPRECATED and will be removed in 3.0. Use likely.initiate instead."), t.initiate.apply(t, arguments)
                }
            }, {
                key: "initiate", value: function (t, e) {
                    function n() {
                        r.forEach(function (t) {
                            h(t, i)
                        })
                    }

                    var r = void 0, i = void 0;
                    Array.isArray(t) ? (r = t, i = e) : t instanceof Node ? (r = [t], i = e) : (r = f("." + l.name), i = t), n(), d.onUrlChange(n)
                }
            }]), t
        }();
        t.exports = C
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        var i = n(1), o = n(0), a = n(2), c = n(6), u = n(3), s = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(), l = '<span class="{className}">{content}</span>', p = function () {
            function t(e, i, a) {
                r(this, t), this.widget = e, this.likely = i, this.options = n.i(o.merge)(a), this.serviceName = this.detectService(), this.detectParams()
            }

            return s(t, [{
                key: "prepare", value: function () {
                    this.serviceName && (this.initHtml(), this.registerAsCounted())
                }
            }, {
                key: "update", value: function (t) {
                    var e = "." + a.default.prefix + "counter", r = n.i(i.findAll)(e, this.widget);
                    n.i(o.extend)(this.options, n.i(o.merge)({forceUpdate: !1}, t)), r.forEach(function (t) {
                        t.parentNode.removeChild(t)
                    }), this.registerAsCounted()
                }
            }, {
                key: "detectService", value: function () {
                    var t = this.widget, e = n.i(o.getDataset)(t).service || Object.keys(u.a).filter(function (e) {
                        return t.classList.contains(e)
                    })[0];
                    return e && n.i(o.extend)(this.options, u.a[e]), e
                }
            }, {
                key: "detectParams", value: function () {
                    var t = this.options, e = n.i(o.getDataset)(this.widget);
                    if (e.counter) {
                        var r = parseInt(e.counter, 10);
                        isNaN(r) ? t.counterUrl = e.counter : t.counterNumber = r
                    }
                    t.title = e.title || t.title, t.url = e.url || t.url
                }
            }, {
                key: "initHtml", value: function () {
                    var t = this.options, e = this.widget, r = e.innerHTML;
                    e.addEventListener("click", this.click.bind(this)), e.classList.remove(this.serviceName), e.className += " " + this.className("widget");
                    var a = n.i(o.interpolateStr)(l, {className: this.className("button"), content: r}),
                        c = n.i(o.interpolateStr)(l, {
                            className: this.className("icon"),
                            content: n.i(i.wrapSVG)(t.svgIconPath)
                        });
                    e.innerHTML = c + a
                }
            }, {
                key: "registerAsCounted", value: function () {
                    var t = this.options;
                    t.counters && t.counterUrl && n.i(c.a)(this.serviceName, this.setDisplayedCounter.bind(this), t)
                }
            }, {
                key: "className", value: function (t) {
                    var e = a.default.prefix + t;
                    return e + " " + e + "_" + this.serviceName
                }
            }, {
                key: "setDisplayedCounter", value: function (t) {
                    var e = parseInt(t, 10) || 0, r = n.i(i.find)("." + a.default.name + "__counter", this.widget);
                    r && r.parentNode.removeChild(r);
                    var c = {className: this.className("counter"), content: e};
                    e || this.options.zeroes || (c.className += " " + a.default.prefix + "counter_empty", c.content = ""), this.widget.appendChild(n.i(i.createNode)(n.i(o.interpolateStr)(l, c))), this.likely.finalize()
                }
            }, {
                key: "click", value: function () {
                    var t = this.options;
                    if (t.click.call(this)) {
                        var e = n.i(o.interpolateUrl)(t.popupUrl, {url: t.url, title: t.title, content: t.content});
                        if (!1 === t.openPopup) return n.i(i.createTempLink)(this.addAdditionalParamsToUrl(e)), !1;
                        n.i(i.openPopup)(this.addAdditionalParamsToUrl(e), a.default.prefix + this.serviceName, t.popupWidth, t.popupHeight)
                    }
                    return !1
                }
            }, {
                key: "addAdditionalParamsToUrl", value: function (t) {
                    var e = n.i(o.query)(n.i(o.merge)(this.widget.dataset, this.options.data), this.options.knownParams, this.options.name),
                        r = -1 === t.indexOf("?") ? "?" : "&";
                    return "" === e ? t : t + r + e
                }
            }]), t
        }();
        e.a = p
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            this.url = n.i(i.interpolateUrl)(t, {url: e}), this.setters = [], this.value = void 0
        }

        var i = n(0), o = n(3), a = {};
        r.prototype.register = function (t) {
            this.setters.push(t), this.value && t(this.value)
        }, r.prototype.trigger = function (t) {
            this.value = t, this.setters.forEach(function (e) {
                e(t)
            })
        }, e.a = function (t, e, n) {
            a[t] || (a[t] = {});
            var i = a[t], c = i[n.url];
            c && !n.forceUpdate || (c = new r(n.counterUrl, n.url), o.a[t].fetch(c), i[n.url] = c), c.register(e)
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = [], i = function () {
            r.forEach(function (t) {
                t()
            })
        }, o = function () {
            var t = window.history.pushState;
            window.history.pushState = function () {
                return setTimeout(i, 0), t.apply(window.history, arguments)
            };
            var e = window.history.replaceState;
            window.history.replaceState = function () {
                return setTimeout(i, 0), e.apply(window.history, arguments)
            }, window.addEventListener("popstate", i)
        }, a = !1, c = {
            onUrlChange: function (t) {
                a || (o(), a = !0), r.push(t)
            }
        };
        e.default = c
    }, function (t, e, n) {
        "use strict";
        var r = n(1), i = function (t) {
            var e = this;
            n.i(r.getJSON)(t.url, function (n) {
                try {
                    var r = "function" == typeof e.convertNumber ? e.convertNumber(n) : n;
                    t.trigger(r)
                } catch (t) {
                }
            })
        };
        e.a = function (t) {
            t.fetch = r.global.__likelyFetchMock || t.fetch || i, t.click = t.click || function () {
                return !0
            }
        }
    }, function (t, e, n) {
        "use strict";
        e.a = {
            counterUrl: "https://graph.facebook.com/?id={url}&fields=og_object%7Bengagement%7Bcount%7D%7D&callback=?",
            convertNumber: function (t) {
                return t.og_object.engagement.count
            },
            popupUrl: "https://www.facebook.com/sharer/sharer.php?u={url}",
            popupWidth: 600,
            popupHeight: 500,
            knownParams: ["url"],
            svgIconPath: "15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"
        }
    }, function (t, e, n) {
        "use strict";
        e.a = {
            popupUrl: "https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}",
            popupWidth: 600,
            popupHeight: 500,
            knownParams: ["url", "title"],
            svgIconPath: "2.4,6h2.4v7.6H2.4V6z M3.6,2.2c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5C2.8,5,2.2,4.3,2.2,3.6C2.2,2.8,2.8,2.2,3.6,2.2C3.6,2.2,3.6,2.2,3.6,2.2 M6.2,6h2.3v1h0C9,6.2,9.9,5.8,10.8,5.8c2.4,0,2.8,1.6,2.8,3.6v4.2h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6z M13,0H3C1,0,0,1,0,3v10c0,2,1,3,3,3h10c2,0,3-1,3-3V3C16,1,15,0,13,0z"
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(0), i = n(1), o = {
            counterUrl: "https://connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}",
            fetch: function (t) {
                this.broadcasters.push(t), n.i(i.loadScript)(n.i(r.interpolateUrl)(t.url, {index: this.broadcasters.length - 1}))
            },
            broadcasters: [],
            popupUrl: "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}",
            popupWidth: 640,
            popupHeight: 400,
            knownParams: ["url"],
            svgIconPath: "8 6.107c.888 0 1.607-.72 1.607-1.607 0-.888-.72-1.607-1.607-1.607s-1.607.72-1.607 1.607c0 .888.72 1.607 1.607 1.607zM13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h10c2 0 3-1 3-3V3c0-2-1-3-3-3zM8 .75c2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75S4.25 6.57 4.25 4.5C4.25 2.43 5.93.75 8 .75zm3.826 12.634c.42.42.42 1.097 0 1.515-.21.208-.483.313-.758.313-.274 0-.548-.105-.758-.314L8 12.59 5.69 14.9c-.42.418-1.098.418-1.516 0s-.42-1.098 0-1.516L6.357 11.2c-1.303-.386-2.288-1.073-2.337-1.11-.473-.354-.57-1.025-.214-1.5.354-.47 1.022-.567 1.496-.216.03.022 1.4.946 2.698.946 1.31 0 2.682-.934 2.693-.943.474-.355 1.146-.258 1.5.213.355.474.26 1.146-.214 1.5-.05.036-1.035.723-2.338 1.11l2.184 2.184"
        };
        n.i(r.registerGlobalCallback)("ODKL.updateCount", function (t, e) {
            o.broadcasters[t].trigger(e)
        }), e.a = o
    }, function (t, e, n) {
        "use strict";
        e.a = {
            counterUrl: "https://api.pinterest.com/v1/urls/count.json?url={url}&callback=?",
            convertNumber: function (t) {
                return t.count
            },
            popupUrl: "https://pinterest.com/pin/create/button/?url={url}&description={title}",
            popupWidth: 630,
            popupHeight: 270,
            knownParams: ["url", "title", "media"],
            svgIconPath: "7.99 0c-4.417 0-8 3.582-8 8 0 3.39 2.11 6.284 5.086 7.45-.07-.633-.133-1.604.028-2.295.145-.624.938-3.977.938-3.977s-.24-.48-.24-1.188c0-1.112.645-1.943 1.448-1.943.683 0 1.012.512 1.012 1.127 0 .686-.437 1.713-.663 2.664-.19.796.398 1.446 1.184 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.255-3.343-3.255-2.276 0-3.612 1.707-3.612 3.472 0 .688.265 1.425.595 1.826.065.08.075.15.055.23-.06.252-.195.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.835-4.84 5.287-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.74 4.976-4.152 4.976-.81 0-1.573-.42-1.834-.92l-.498 1.903c-.18.695-.668 1.566-.994 2.097.75.232 1.544.357 2.37.357 4.417 0 8-3.582 8-8s-3.583-8-8-8"
        }
    }, function (t, e, n) {
        "use strict";
        e.a = {
            counterUrl: "https://www.reddit.com/api/info.json?url={url}&limit=1&jsonp=?",
            convertNumber: function (t) {
                var e = t.data.children[0] || {};
                return e.data.score ? e.data.score : void 0
            },
            popupUrl: "https://reddit.com/submit?url={url}&title={title}",
            popupWidth: 600,
            popupHeight: 500,
            svgIconPath: "16 8 C 16 12.418 12.418 16 8 16 C 3.582 16 0 12.418 0 8 C 0 3.582 3.582 0 8 0 C 12.418 0 16 3.582 16 8 Z  M 9.836 9.665 C 9.357 9.665 8.965 9.241 9.001 8.764 C 9.034 8.336 9.406 7.991 9.836 7.991 C 10.314 7.991 10.707 8.415 10.67 8.892 C 10.637 9.32 10.265 9.665 9.836 9.665 L 9.836 9.665 Z  M 9.98 11.033 C 9.413 11.6 8.324 11.645 8 11.645 C 7.676 11.645 6.587 11.6 6.02 11.033 C 5.939 10.952 5.939 10.808 6.02 10.727 C 6.101 10.646 6.245 10.646 6.326 10.727 C 6.686 11.087 7.451 11.213 8 11.213 C 8.549 11.213 9.314 11.087 9.674 10.727 C 9.755 10.646 9.899 10.646 9.98 10.727 C 10.061 10.808 10.061 10.952 9.98 11.033 Z  M 5.336 8.828 C 5.336 8.35 5.76 7.957 6.237 7.993 C 6.666 8.026 7.01 8.398 7.01 8.828 C 7.01 9.306 6.586 9.699 6.109 9.662 C 5.681 9.629 5.336 9.257 5.336 8.828 L 5.336 8.828 Z  M 13.336 7.991 C 13.336 7.343 12.814 6.821 12.166 6.821 C 11.852 6.821 11.564 6.947 11.357 7.145 C 10.556 6.569 9.458 6.2 8.234 6.155 L 8.765 3.654 L 10.502 4.022 C 10.52 4.463 10.889 4.814 11.33 4.814 C 11.789 4.814 12.166 4.445 12.166 3.978 C 12.166 3.519 11.798 3.141 11.33 3.141 C 11.006 3.141 10.718 3.33 10.583 3.609 L 8.648 3.195 C 8.537 3.176 8.424 3.241 8.405 3.357 L 8.405 3.357 L 7.811 6.146 C 6.569 6.182 5.453 6.551 4.643 7.136 C 4.436 6.938 4.148 6.812 3.834 6.812 C 3.186 6.812 2.664 7.334 2.664 7.982 C 2.664 8.459 2.943 8.864 3.357 9.044 C 3.339 9.161 3.33 9.278 3.33 9.395 C 3.33 11.186 5.417 12.643 8 12.643 C 10.574 12.643 12.67 11.186 12.67 9.395 C 12.67 9.278 12.661 9.161 12.643 9.044 C 13.048 8.864 13.336 8.45 13.336 7.982 L 13.336 7.991"
        }
    }, function (t, e, n) {
        "use strict";
        e.a = {
            popupUrl: "https://telegram.me/share/url?url={url}",
            popupWidth: 600,
            popupHeight: 500,
            knownParams: ["url", "text"],
            svgIconPath: "6,11.960784l-1,-3l11,-8l-15.378,5.914c0,0 -0.672,0.23 -0.619,0.655c0.053,0.425 0.602,0.619 0.602,0.619l3.575,1.203l1.62,5.154l2.742,-2.411l-0.007,-0.005l3.607,2.766c0.973,0.425 1.327,-0.46 1.327,-0.46l2.531,-13.435l-10,11z"
        }
    }, function (t, e, n) {
        "use strict";
        e.a = {
            popupUrl: "https://twitter.com/intent/tweet?url={url}&text={title}",
            popupWidth: 600,
            popupHeight: 450,
            click: function () {
                return /[.?:\-–—]\s*$/.test(this.options.title) || (this.options.title += ":"), !0
            },
            knownParams: ["url", "title", "via"],
            svgIconPath: "15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058"
        }
    }, function (t, e, n) {
        "use strict";
        e.a = {
            popupUrl: "viber://forward?text={content}",
            click: function () {
                return Object.prototype.hasOwnProperty.call(this.widget.dataset, "comment") ? this.options.content = this.options.url + "\n" + this.widget.dataset.comment : this.options.content = this.options.url, !0
            },
            openPopup: !1,
            knownParams: ["url", "comment"],
            svgIconPath: "5.24 12.7 C 5.24 12.7 5.24 13.21 5.24 13.21 C 5.24 13.21 5.21 13.61 5.21 13.61 C 5.21 13.61 5.21 15.65 5.21 15.65 C 5.21 15.65 5.21 15.81 5.21 15.81 C 5.24 15.98 5.36 16.05 5.5 15.95 C 5.63 15.87 5.91 15.54 6.02 15.41 C 6.02 15.41 7.34 13.83 7.34 13.83 C 7.34 13.83 7.74 13.35 7.74 13.35 C 7.78 13.29 7.86 13.17 7.93 13.16 C 7.93 13.16 8.27 13.16 8.27 13.16 C 8.27 13.16 9.55 13.16 9.55 13.16 C 9.55 13.16 9.84 13.13 9.84 13.13 C 10.69 13.1 11.54 12.97 12.37 12.75 C 13.36 12.49 14.01 12.3 14.74 11.5 C 15.42 10.75 15.71 9.75 15.85 8.76 C 15.85 8.76 15.95 7.64 15.95 7.64 C 15.95 7.64 15.97 7.37 15.97 7.37 C 15.97 7.37 16 6.78 16 6.78 C 16 6.78 16 6.08 16 6.08 C 16 6.08 15.97 5.57 15.97 5.57 C 15.97 5.57 15.95 5.31 15.95 5.31 C 15.92 4.88 15.86 4.47 15.78 4.05 C 15.59 3.05 15.22 2.1 14.49 1.4 C 14.18 1.1 13.65 0.86 13.26 0.7 C 12.59 0.43 11.85 0.26 11.14 0.16 C 11.14 0.16 10.18 0.05 10.18 0.05 C 10.18 0.05 9.68 0.03 9.68 0.03 C 9.68 0.03 9.16 0.03 9.16 0.03 C 9.16 0.03 8.82 0 8.82 0 C 8.82 0 8.24 0.03 8.24 0.03 C 8.24 0.03 7.98 0.03 7.98 0.03 C 7.98 0.03 7.72 0.05 7.72 0.05 C 6.73 0.12 5.75 0.29 4.82 0.67 C 4.35 0.86 3.77 1.19 3.41 1.55 C 2.51 2.48 2.2 3.83 2.07 5.09 C 2.07 5.09 2.03 5.71 2.03 5.71 C 2.03 5.71 2.03 6.16 2.03 6.16 C 2.03 6.16 2 6.57 2 6.57 C 2 6.57 2 7.45 2 7.45 C 2 7.45 2.03 7.99 2.03 7.99 C 2.03 7.99 2.1 8.74 2.1 8.74 C 2.25 9.81 2.6 10.87 3.36 11.65 C 3.59 11.89 3.89 12.11 4.17 12.27 C 4.43 12.43 4.94 12.66 5.24 12.7 Z M 8.82 1.94 C 9.21 1.88 9.98 2.02 10.36 2.15 C 11.72 2.62 12.71 3.58 13.17 4.98 C 13.35 5.53 13.41 6.11 13.44 6.67 C 13.46 7.04 13.16 7.08 13.03 6.94 C 12.95 6.84 12.97 6.71 12.97 6.59 C 12.97 6.59 12.95 6.32 12.95 6.32 C 12.89 5.58 12.69 4.84 12.29 4.21 C 11.7 3.29 10.73 2.66 9.68 2.47 C 9.68 2.47 9.18 2.41 9.18 2.41 C 9.06 2.41 8.85 2.42 8.74 2.34 C 8.62 2.24 8.63 2.02 8.82 1.94 Z M 5.79 2.45 C 6.24 2.4 6.34 2.6 6.6 2.92 C 6.9 3.29 7.09 3.56 7.34 3.97 C 7.46 4.17 7.59 4.38 7.61 4.64 C 7.62 4.72 7.6 4.8 7.58 4.88 C 7.43 5.4 6.92 5.37 6.81 5.84 C 6.75 6.1 6.99 6.58 7.12 6.81 C 7.55 7.61 8.19 8.35 9.03 8.72 C 9.23 8.81 9.6 8.99 9.81 8.94 C 10.15 8.86 10.25 8.54 10.47 8.31 C 10.6 8.18 10.75 8.13 10.93 8.12 C 11.25 8.11 11.38 8.23 11.64 8.39 C 12.05 8.65 12.36 8.89 12.74 9.2 C 12.95 9.38 13.17 9.58 13.14 9.89 C 13.12 10.16 12.94 10.43 12.78 10.64 C 12.65 10.8 12.48 11 12.32 11.13 C 12.11 11.29 11.87 11.41 11.61 11.44 C 11.45 11.45 11.24 11.37 11.09 11.32 C 10.72 11.19 10.29 10.97 9.94 10.79 C 8.96 10.29 8.03 9.67 7.22 8.9 C 7.22 8.9 7.02 8.71 7.02 8.71 C 6.15 7.79 5.5 6.74 4.95 5.6 C 4.78 5.26 4.61 4.92 4.49 4.56 C 4.43 4.38 4.38 4.29 4.38 4.1 C 4.37 3.78 4.5 3.49 4.7 3.24 C 4.82 3.09 5.01 2.92 5.16 2.8 C 5.36 2.64 5.54 2.5 5.79 2.45 Z M 9.18 3.12 C 9.44 3.07 9.9 3.18 10.15 3.25 C 11.1 3.53 11.8 4.21 12.12 5.17 C 12.19 5.39 12.26 5.72 12.26 5.95 C 12.27 6.05 12.28 6.36 12.25 6.43 C 12.2 6.54 12.06 6.59 11.95 6.53 C 11.79 6.45 11.83 6.27 11.82 6.11 C 11.82 6.11 11.79 5.9 11.79 5.9 C 11.76 5.47 11.61 5.04 11.37 4.69 C 11.03 4.2 10.53 3.85 9.97 3.7 C 9.97 3.7 9.52 3.6 9.52 3.6 C 9.45 3.59 9.24 3.57 9.18 3.54 C 9.02 3.47 9 3.23 9.18 3.12 Z M 9.55 4.33 C 9.69 4.3 9.8 4.32 9.94 4.35 C 10.45 4.45 10.84 4.75 11.02 5.25 C 11.09 5.44 11.15 5.73 11.14 5.92 C 11.13 6.08 11.04 6.18 10.88 6.16 C 10.76 6.14 10.72 6.06 10.69 5.95 C 10.63 5.68 10.68 5.56 10.52 5.28 C 10.38 5.04 10.15 4.88 9.89 4.82 C 9.71 4.79 9.43 4.81 9.38 4.58 C 9.36 4.45 9.44 4.37 9.55 4.33"
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(0), i = n(1), o = {
            counterUrl: "https://vk.com/share.php?act=count&url={url}&index={index}",
            fetch: function (t) {
                this.broadcasters.push(t), n.i(i.loadScript)(n.i(r.interpolateUrl)(t.url, {index: this.broadcasters.length - 1}))
            },
            broadcasters: [],
            popupUrl: "https://vk.com/share.php?url={url}&title={title}",
            popupWidth: 550,
            popupHeight: 330,
            knownParams: ["url", "title", "image", "description"],
            svgIconPath: "7.828 12.526h.957s.288-.032.436-.19c.14-.147.14-.42.14-.42s-.02-1.284.58-1.473c.59-.187 1.34 1.24 2.14 1.788.61.42 1.07.33 1.07.33l2.14-.03s1.12-.07.59-.95c-.04-.07-.3-.65-1.58-1.84-1.34-1.24-1.16-1.04.45-3.19.98-1.31 1.38-2.11 1.25-2.45-.11-.32-.84-.24-.84-.24l-2.4.02s-.18-.02-.31.06-.21.26-.21.26-.38 1.02-.89 1.88C10.27 7.9 9.84 8 9.67 7.88c-.403-.26-.3-1.053-.3-1.62 0-1.76.27-2.5-.52-2.69-.26-.06-.454-.1-1.123-.11-.86-.01-1.585.006-1.996.207-.27.135-.48.434-.36.45.16.02.52.098.71.358.25.337.24 1.09.24 1.09s.14 2.077-.33 2.335c-.33.174-.77-.187-1.73-1.837-.49-.84-.86-1.78-.86-1.78s-.07-.17-.2-.27c-.15-.11-.37-.15-.37-.15l-2.29.02s-.34.01-.46.16c-.11.13-.01.41-.01.41s1.79 4.19 3.82 6.3c1.86 1.935 3.97 1.81 3.97 1.81"
        };
        n.i(r.registerGlobalCallback)("VK.Share.count", function (t, e) {
            o.broadcasters[t].trigger(e)
        }), e.a = o
    }, function (t, e, n) {
        "use strict";
        e.a = {
            popupUrl: "whatsapp://send?text={title}%0D%0A%0D%0A{url}",
            openPopup: !1,
            knownParams: ["url", "title"],
            svgIconPath: "8.0292969 0 C 3.6412969 0 0.06940625 3.5557344 0.06640625 7.9277344 C 0.06640625 9.3247344 0.43385936 10.688578 1.1308594 11.892578 L 0 16 L 4.2226562 14.898438 C 5.3866562 15.528438 6.6962969 15.862281 8.0292969 15.863281 L 8.0332031 15.863281 C 12.423199 15.863281 15.998 12.306594 16 7.9335938 C 16 5.8165938 15.172922 3.8222186 13.669922 2.3242188 L 13.679688 2.3007812 C 12.159653 0.8307817 10.159297 -2.9605947e-016 8.0292969 0 z M 4.4589844 3.2382812 C 4.6263665 3.2382813 4.7936277 3.2373139 4.9394531 3.25 C 5.095423 3.25 5.306878 3.189055 5.5097656 3.6835938 C 5.7202615 4.1781321 6.2237071 5.418117 6.2871094 5.5449219 C 6.3505124 5.6717267 6.3922846 5.8107546 6.3085938 5.9882812 C 6.2223663 6.1531272 6.1809093 6.2560375 6.0566406 6.4082031 C 5.9298358 6.560369 5.7918587 6.7393913 5.6777344 6.8535156 C 5.5509298 6.9803204 5.4193132 7.1174841 5.5664062 7.3710938 C 5.7147679 7.6247032 6.220019 8.4490288 6.9707031 9.1210938 C 7.9344191 9.9833661 8.7483437 10.250149 9.0019531 10.376953 C 9.2530266 10.491078 9.3997816 10.477349 9.546875 10.3125 C 9.6939686 10.145117 10.178322 9.5818366 10.345703 9.3320312 C 10.514354 9.0784218 10.683278 9.1181658 10.914062 9.203125 C 11.146116 9.286816 12.383111 9.8946797 12.636719 10.021484 L 12.646484 9.9589844 C 12.900093 10.073108 13.06355 10.137829 13.126953 10.251953 C 13.190353 10.366078 13.192128 10.859096 12.976562 11.455078 C 12.766067 12.05106 11.759099 12.584074 11.273438 12.660156 C 10.838496 12.723556 10.287183 12.74881 9.6835938 12.558594 C 9.3158512 12.431788 8.8457781 12.280954 8.2421875 12.027344 C 5.7111649 10.936823 4.0584453 8.3992212 3.9316406 8.234375 C 3.8061039 8.0568483 2.9023438 6.8647716 2.9023438 5.6347656 C 2.9023438 4.4047596 3.5524185 3.7946251 3.7832031 3.5410156 C 4.0139878 3.3000865 4.2890659 3.2382812 4.4589844 3.2382812"
        }
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var i = n(5), o = n(2), a = n(0), c = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(), u = function () {
            function t(e, i) {
                r(this, t), this.container = e, this.options = i, this.countersLeft = 0, this.buttons = [], n.i(a.toArray)(this.container.children).forEach(this.addButton.bind(this)), this.options.counters ? (this.appearDelay = setTimeout(this.appear.bind(this), this.options.wait), this.readyDelay = setTimeout(this.ready.bind(this), this.options.timeout)) : (this.appear(), this.ready()), this.materializeButtons()
            }

            return c(t, [{
                key: "addButton", value: function (t) {
                    var e = new i.a(t, this, this.options);
                    this.buttons.push(e), e.options.counterUrl && this.countersLeft++
                }
            }, {
                key: "materializeButtons", value: function () {
                    this.buttons.forEach(function (t) {
                        return t.prepare()
                    })
                }
            }, {
                key: "update", value: function (t) {
                    (t.forceUpdate || t.url && t.url !== this.options.url) && (this.countersLeft = this.buttons.length, this.buttons.forEach(function (e) {
                        e.update(t)
                    }))
                }
            }, {
                key: "finalize", value: function () {
                    0 === --this.countersLeft && (this.appear(), this.ready())
                }
            }, {
                key: "appear", value: function () {
                    clearTimeout(this.appearDelay), this.container.classList.add(o.default.name + "_visible"), console.warn('DEPRECATION: "likely_visible" class will be removed in 3.0 and joined with likely_ready')
                }
            }, {
                key: "ready", value: function () {
                    clearTimeout(this.readyDelay), this.container.classList.add(o.default.name + "_ready")
                }
            }]), t
        }();
        e.default = u
    }, function (t, e) {
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
        var r = n(4);
        window.addEventListener("load", function () {
            r.initiate()
        }), t.exports = r
    }])
});