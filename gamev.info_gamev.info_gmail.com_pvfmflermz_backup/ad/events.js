(function (e) {
  var n = {};
  function t(i) {
    if (n[i]) return n[i].exports;
    var o = (n[i] = { i: i, l: !1, exports: {} });
    return e[i].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, i) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: i });
    }),
    (t.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && "object" === typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (t.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var o in e)
          t.d(
            i,
            o,
            function (n) {
              return e[n];
            }.bind(null, o)
          );
      return i;
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = "/"),
    t((t.s = 0));
})({
  0: function (e, n, t) {
    e.exports = t("cd49");
  },
  cd49: function (e, n, t) {
    "use strict";
    t.r(n);
    var i = function (e, n) {
        var t = "function" === typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var i,
          o,
          r = t.call(e),
          a = [];
        try {
          while ((void 0 === n || n-- > 0) && !(i = r.next()).done)
            a.push(i.value);
        } catch (l) {
          o = { error: l };
        } finally {
          try {
            i && !i.done && (t = r["return"]) && t.call(r);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      },
      o = function (e, n) {
        for (var t = 0, i = n.length, o = e.length; t < i; t++, o++)
          e[o] = n[t];
        return e;
      };
    function r(e, n) {
      var t = new RegExp("(^|&)" + n + "=([^&]*)(&|$)");
      if (!e.split("?")[1]) return "";
      var i = e.split("?")[1].match(t);
      return null != i ? i[2] : "";
    }
    function a(e) {
      for (var n = document.cookie.split("; "), t = 0; t < n.length; t++) {
        var i = n[t].split("=");
        if (i[0] === e) return unescape(i[1]);
      }
      return "";
    }
    function l(e) {
      var n, t;
      if (e && !e.parentElement) return [""];
      var r = [],
        a = function () {
          if ("" !== e.id) {
            var a = e.id[0];
            return (
              "string" !== typeof e.id &&
              (null ===
                (t =
                  null ===
                    (n = null === e || void 0 === e ? void 0 : e.attributes) ||
                  void 0 === n
                    ? void 0
                    : n.id) || void 0 === t
                ? void 0
                : t.value)
                ? r.push("#" + e.attributes.id.value)
                : isNaN(a)
                ? r.push("#" + e.id)
                : r.push("#\\3" + a + " " + e.id.slice(1)),
              "break"
            );
          }
          if (e === document.body) return r.push("body"), "break";
          var l = e.nodeName.toLowerCase();
          if ("html" === l) return r.push("html"), "break";
          if (e.parentElement) {
            var d = o([], i(e.parentElement.children));
            if (
              d.every(function (n) {
                return n === e || n.nodeName.toLowerCase() !== l;
              })
            )
              r.push(l);
            else if (
              e.className &&
              d.every(function (n) {
                return n === e || n.className !== e.className;
              })
            ) {
              var c = e.className.split(" ").filter(function (e) {
                return e;
              });
              r.push(l + "." + c.join("."));
            } else
              r.push(
                l +
                  ":nth-child(" +
                  (d.findIndex(function (n) {
                    return n === e;
                  }) +
                    1) +
                  ")"
              );
          }
          e = e.parentElement;
        };
      while (e) {
        var l = a();
        if ("break" === l) break;
      }
      var d = [],
        c = [];
      while (r.length) {
        var u = r.pop();
        u && (c.push(u), d.push(c.join(" > ")));
      }
      return d;
    }
    function d(e) {
      var n = history[e],
        t = new Event(e);
      return function () {
        var e = n.apply(this, arguments);
        return (t.arguments = arguments), window.dispatchEvent(t), e;
      };
    }
    function c(e) {
      if (performance) {
        var n = performance.timing;
        n &&
          ((e.wst = n.responseStart - n.navigationStart),
          n.domContentLoadedEventEnd &&
            (e.drt = n.domContentLoadedEventEnd - n.navigationStart),
          n.loadEventEnd && (e.tdt = n.loadEventEnd - n.navigationStart));
        var t =
          "function" === typeof performance.now
            ? performance.now()
            : +new Date() - n.navigationStart;
        e.lgt = Math.floor(t);
      } else e.lgt = Date.now() - window.$$baseConfig.it;
    }
    function u(e) {
      c(e.extra || {}),
        (e.extra = JSON.stringify(e.extra || {})),
        (e.pixel_id = "log_pixel_id"),
        s(e);
    }
    function s(e) {
      var n = Object.keys(e)
          .map(function (n) {
            return n + "=" + encodeURIComponent(e[n]);
          })
          .join("&"),
        t =
          "https://api.imotech.video/bigoad/" +
          (e.event_id ? "trackingevent" : "trackingview") +
          "?" +
          n;
      if (navigator.sendBeacon) navigator.sendBeacon(t);
      else {
        var i = new Image(1, 1);
        i.src = t;
      }
    }
    (history.pushState = d("pushState")),
      (history.replaceState = d("replaceState"));
    var f,
      v,
      p,
      g,
      w = function () {
        return (
          (w =
            Object.assign ||
            function (e) {
              for (var n, t = 1, i = arguments.length; t < i; t++)
                for (var o in ((n = arguments[t]), n))
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              return e;
            }),
          w.apply(this, arguments)
        );
      };
    (function (e) {
      (e["zh"] = "zh"), (e["en"] = "en");
    })(f || (f = {})),
      (function (e) {
        (e[(e["Click"] = 0)] = "Click"),
          (e[(e["PageView"] = 1)] = "PageView"),
          (e[(e["Modal"] = 2)] = "Modal");
      })(v || (v = {})),
      (function (e) {
        (e[(e["Equal"] = 1)] = "Equal"),
          (e[(e["NoEqual"] = 2)] = "NoEqual"),
          (e[(e["Include"] = 3)] = "Include"),
          (e[(e["NoInclude"] = 4)] = "NoInclude");
      })(p || (p = {})),
      (function (e) {
        (e[(e["Init"] = 0)] = "Init"),
          (e[(e["SelectMode"] = 1)] = "SelectMode"),
          (e[(e["PageViewMode"] = 2)] = "PageViewMode"),
          (e[(e["SelectElement"] = 3)] = "SelectElement"),
          (e[(e["RemoveElement"] = 4)] = "RemoveElement"),
          (e[(e["ChangeElement"] = 5)] = "ChangeElement"),
          (e[(e["UpdateAllElement"] = 6)] = "UpdateAllElement"),
          (e[(e["InitLanguage"] = 7)] = "InitLanguage");
      })(g || (g = {}));
    var h,
      m,
      y,
      b,
      x = f.en,
      I = [],
      E = null,
      $ = null,
      S = "";
    function k(e) {
      if ("string" !== typeof e && e.xpath) {
        var n = e;
        _(n),
          window.addEventListener(
            "hashchange",
            function () {
              _(n);
            },
            !1
          ),
          window.addEventListener(
            "popstate",
            function () {
              _(n);
            },
            !1
          ),
          window.addEventListener(
            "pushState",
            function () {
              _(n);
            },
            !1
          ),
          window.addEventListener(
            "replaceState",
            function () {
              _(n);
            },
            !1
          ),
          document.addEventListener(
            "click",
            function (e) {
              var t = l(e.target || e.srcElement);
              n.xpath.forEach(function (e) {
                var i = window.location.href.split("?")[0],
                  o = e.url.split("?")[0];
                "/" !== i[i.length - 1] && (i += "/"),
                  "/" !== o[o.length - 1] && (o += "/"),
                  e.type === v.Click &&
                    i &&
                    o &&
                    i.replace(/^https?/gi, "") === o.replace(/^https?/gi, "") &&
                    t.includes(e.jsPath) &&
                    bge(
                      "event",
                      e.eventType,
                      w(w({}, e.others), { xConfigId: n.configId })
                    );
              });
            },
            !0
          );
      }
    }
    function _(e) {
      var n = [];
      e.xpath.forEach(function (t) {
        t.type === v.PageView &&
          !n.includes(t.eventType) &&
          C(t) &&
          (setTimeout(function () {
            return bge(
              "event",
              t.eventType,
              w(w({}, t.others), { xConfigId: e.configId })
            );
          }, 10),
          n.push(t.eventType));
      }),
        (S = window.location.href);
    }
    function C(e) {
      if (window.location.href === S) return !1;
      switch (e.compare) {
        case p.Equal:
          return e.url === window.location.href;
        case p.NoEqual:
          return e.url !== window.location.href;
        case p.Include:
          return window.location.href.includes(e.url);
        case p.NoInclude:
          return !window.location.href.includes(e.url);
      }
      return !1;
    }
    function M() {
      q(g.Init),
        window.parent &&
          window.name.includes("bgeXpath") &&
          (window.addEventListener("message", B), j(), L(), P());
    }
    function P() {
      setInterval(function () {
        I.forEach(function (e) {
          try {
            var n = document.querySelector(e.jsPath);
            if (n) {
              var t = e.element.getBoundingClientRect(),
                i = e.cover.getBoundingClientRect();
              (Math.ceil(t.top) === Math.ceil(i.top) &&
                Math.ceil(t.left) === Math.ceil(i.left)) ||
                ((e.cover.style.top = t.top + "px"),
                (e.cover.style.left = t.left + "px"),
                (e.cover.style.position = "fixed"));
            }
          } catch (o) {}
        });
      }, 1e3);
    }
    function L() {
      var e = new MutationObserver(function (e, n) {
        if (0 !== I.length) {
          var t = e.some(function (e) {
            return "childList" === e.type && e.removedNodes.length;
          });
          t ||
            I.forEach(function (e) {
              try {
                var n = document.querySelector(e.jsPath);
                n || (e.cover.style.left = "-1000000px");
              } catch (t) {
                e.cover.style.left = "-1000000px";
              }
            });
        }
      });
      e.observe(document.body, { attributes: !1, childList: !0, subtree: !0 });
    }
    function j() {
      (m = document.createElement("div")),
        (m.style.left = "-100000px"),
        (m.style.position = "absolute"),
        (m.style.zIndex = "999999999999"),
        (m.style.borderRadius = "4px"),
        (m.style.boxSizing = "border-box"),
        (m.style.backgroundColor = "rgba(175, 212, 236, 0.3)"),
        (m.style.border = "1px solid rgb(98, 167, 213)"),
        (m.onclick = function () {
          I.length < 7 && T();
        }),
        (m.onmousemove = function (e) {
          clearTimeout(E),
            (E = setTimeout(function () {
              (m.style.display = "none"),
                O({ target: document.elementFromPoint(e.clientX, e.clientY) }),
                (m.style.display = "block");
            }, 100));
        }),
        document.documentElement.appendChild(m);
    }
    function O(e) {
      if ((clearTimeout(E), !b)) {
        var n = e.target || e.srcElement;
        n &&
          (I.some(function (e) {
            return e.cover === n;
          }) ||
          n === document.documentElement ||
          n === document.body
            ? (m.style.left = "-100000px")
            : (V(n, m), n !== m && (h = n)));
      }
    }
    function N() {
      var e = document.createElement("div");
      (e.innerHTML =
        '\n<div style="display: none;position: fixed;width: 100%;height: 100%;left: 0;top: 0;z-index: 999999999">\n<div style="position: absolute;width: 100%;height: 100%;left: 0;top: 0;background-color: rgba(0,0,0,0.5);z-index: 1"></div>\n<div style="position: absolute; z-index: 2;height: 107px;width: 178px;background-color: white;font-size: 14px;text-align: center;box-sizing: border-box;padding: 16px 0;left: 50%;top: 50%;transform: translate(-50%, -50%);box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);border-radius: 4px">\n    <div style="color: rgba(0, 0, 0, 0.65);margin-bottom: 16px;font-size: 14px;">' +
        (x === f.zh ? "是否选取此元素？" : "Track this element?") +
        '</div>\n    <div style="font-size: 0;">\n        <div\n            class="confirm-close-btn"\n            style="border: 1px solid #62A7D5;font-size: 14px;width: 65px;height: 32px;color: #62A7D5;line-height: 32px;margin-right: 10px;display: inline-block;border-radius: 4px;cursor: pointer;">\n         ' +
        (x === f.zh ? "取消" : "Cancel") +
        '\n         </div>\n        <div\n            class="confirm-ensure-btn"\n            style="border: 1px solid #62A7D5;font-size: 14px;width: 65px;height: 32px;color: #FFFFFF;line-height: 32px;display: inline-block;background-color: #62A7D5;border-radius: 4px;cursor: pointer;">\n         ' +
        (x === f.zh ? "确定" : "Confirm") +
        "\n         </div>\n    </div>\n</div>\n</div>\n"),
        (e = e.children[0]);
      var n = e.querySelector(".confirm-close-btn");
      n &&
        (n.onclick = function () {
          D();
        });
      var t = e.querySelector(".confirm-ensure-btn");
      return (
        t &&
          (t.onclick = function () {
            z();
          }),
        document.documentElement.appendChild(e),
        e
      );
    }
    function T() {
      I.every(function (e) {
        return e.cover !== m;
      }) &&
        y &&
        ((b = !0), (y.style.display = "block"));
    }
    function D() {
      (b = !1), (y.style.display = "none");
    }
    function z(e, n, t) {
      D();
      var i = l(h).pop() || t;
      "string" === typeof i &&
        (I.push({
          id:
            n ||
            (1e10 * Math.random()).toFixed() +
              "." +
              (Date.now() / 1e3).toFixed(),
          cover: m,
          jsPath: i,
          element: h,
        }),
        (m.onclick = null),
        (m.onmousemove = null),
        j(),
        e || H());
    }
    function q(e, n) {
      window.parent.postMessage(
        {
          isBgePixel: !0,
          type: e,
          url: window.location.href,
          name: window.name,
          extra: n || {},
        },
        "*"
      );
    }
    function B(e) {
      var n;
      if (
        null === (n = null === e || void 0 === e ? void 0 : e.data) ||
        void 0 === n
          ? void 0
          : n.isBgePixel
      ) {
        var t = e.data;
        switch (t.type) {
          case g.InitLanguage:
            (x = t.language || "zh"), (y = N());
            break;
          case g.SelectMode:
            document.addEventListener("mouseover", O),
              document.addEventListener("mouseleave", function (e) {
                clearTimeout(E), (m.style.display = "none");
              }),
              document.addEventListener("mouseenter", function (e) {
                m.style.display = "block";
              });
            break;
          case g.PageViewMode:
            (y.style.display = "none"),
              (m.style.left = "-1000000px"),
              (b = !1),
              document.removeEventListener("mouseover", O);
            break;
          case g.SelectElement:
            F(t);
            break;
          case g.RemoveElement:
            J(t);
            break;
          case g.ChangeElement:
            A(t);
            break;
        }
      }
    }
    function F(e) {
      if (e.extra.elementList) {
        var n = [];
        e.extra.elementList.forEach(function (e) {
          var t = e.id,
            i = e.jsPath;
          if (t && i)
            try {
              (h = document.querySelector(i)),
                h || n.push({ id: t, jsPath: i }),
                V(h, m);
            } catch (o) {
              h = document.createElement("div");
            }
          else h = document.createElement("div");
          z(!0, t, i);
        }),
          H(),
          R(n);
      }
    }
    function R(e) {
      if (0 !== e.length) {
        var n = new MutationObserver(function (n, t) {
          clearTimeout($),
            ($ = setTimeout(function () {
              var i = n.some(function (e) {
                return "childList" === e.type && e.addedNodes;
              });
              if (i) {
                for (var o = 0; o < e.length; o++) {
                  var r = e[o],
                    a = r.id,
                    l = r.jsPath;
                  try {
                    (h = document.querySelector(l)),
                      h &&
                        (A({
                          extra: { id: a, jsPath: l, originPath: l },
                          language: x,
                          type: g.ChangeElement,
                        }),
                        e.splice(o, 1),
                        o--);
                  } catch (d) {}
                }
                0 === e.length && t.disconnect();
              }
            }, 300));
        });
        n.observe(document.body, {
          attributes: !1,
          childList: !0,
          subtree: !1,
        });
      }
    }
    function J(e) {
      if (e.extra.id) {
        var n = I.find(function (n) {
          return n.id === e.extra.id;
        });
        n &&
          (document.documentElement.removeChild(n.cover),
          (I = I.filter(function (n) {
            return n.id !== e.extra.id;
          })),
          H());
      }
    }
    function A(e) {
      if ("jsPath" in e.extra && "id" in e.extra) {
        var n = I.find(function (n) {
          return n.id === e.extra.id;
        });
        if (n) {
          try {
            var t = document.querySelector(e.extra.jsPath);
            t
              ? ((n.element = t), V(t, n.cover))
              : (n.cover.style.left = "-1000000px");
          } catch (i) {
            n.cover.style.left = "-1000000px";
          }
          (n.jsPath = e.extra.jsPath), H();
        }
      }
    }
    function V(e, n) {
      var t = 0,
        i = 0,
        o = e;
      while (o) (t += o.offsetLeft), (i += o.offsetTop), (o = o.offsetParent);
      var r = e.getBoundingClientRect();
      (n.style.width = r.width + "px"),
        (n.style.height = r.height + "px"),
        (n.style.top = i + "px"),
        (n.style.left = t + "px");
      var a = document.body.style.padding,
        l = document.body.style.position;
      (document.body.style.padding = "100px"),
        (document.body.style.position = "relative");
      var d = e.getBoundingClientRect();
      (n.style.position =
        r.top === d.top && r.left === d.left ? "fixed" : "absolute"),
        (document.body.style.padding = a),
        (document.body.style.position = l),
        setTimeout(function () {
          var t = n.getBoundingClientRect(),
            i = e.getBoundingClientRect();
          (Math.ceil(i.top) === Math.ceil(t.top) &&
            Math.ceil(i.left) === Math.ceil(t.left)) ||
            ((n.style.top = i.top + "px"),
            (n.style.left = i.left + "px"),
            (n.style.position = "fixed"));
        });
    }
    function H() {
      I.forEach(function (e, n) {
        e.cover.innerHTML =
          '<div style="position: absolute; left: -1px; top: -1px; padding: 0 5px; color: white; background-color: #62a7d5; font-size: 12px; border-radius: 4px 0 4px 0; transform: scale(0.8); transform-origin: top left; white-space: nowrap;">\nElement ' +
          String(n + 1).padStart(2, "0") +
          "\n</div>";
      }),
        q(g.UpdateAllElement, {
          elementList: I.map(function (e) {
            return { id: e.id, jsPath: e.jsPath };
          }),
        });
    }
    function U(e) {
      return (
        (U =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        U(e)
      );
    }
    var G = function () {
        return (
          (G =
            Object.assign ||
            function (e) {
              for (var n, t = 1, i = arguments.length; t < i; t++)
                for (var o in ((n = arguments[t]), n))
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              return e;
            }),
          G.apply(this, arguments)
        );
      },
      W = function (e, n) {
        var t = "function" === typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var i,
          o,
          r = t.call(e),
          a = [];
        try {
          while ((void 0 === n || n-- > 0) && !(i = r.next()).done)
            a.push(i.value);
        } catch (l) {
          o = { error: l };
        } finally {
          try {
            i && !i.done && (t = r["return"]) && t.call(r);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      },
      Y = function (e, n) {
        for (var t = 0, i = n.length, o = e.length; t < i; t++, o++)
          e[o] = n[t];
        return e;
      };
    try {
      (function () {
        var e,
          n,
          t = "bge_eng_mt",
          i = "_bge_ci",
          o = "_bge_bbg",
          l = "bbg",
          d = {},
          f = 300,
          v = {
            only: ["ec_register"],
            xpath: [],
            configId: "903079465722450944",
          };
        (window.$$firstInitPixelId = window.$$firstInitPixelId
          ? window.$$firstInitPixelId
          : v.configId),
          window.$$configIdMap ||
            (window.$$configIdMap =
              ((e = {}), (e[window.$$firstInitPixelId] = []), e)),
          (window.$$baseConfig = window.$$baseConfig
            ? window.$$baseConfig
            : { it: Date.now() });
        var p = P(),
          g = window.bgdataLayer;
        if (g) {
          var w = g.filter(function (e) {
            return "init" === e[0];
          });
          w.length &&
            ((g = g.filter(function (e) {
              return "init" !== e[0];
            })),
            w.forEach(function (e) {
              I(e);
            }),
            I(["event", "init"]),
            I(["event", "page_view"]),
            (window.bgdataLayer = g));
        }
        var h = window.$$configIdMap[window.$$firstInitPixelId];
        if (v.configId !== window.$$firstInitPixelId) {
          var m = h.filter(function (e) {
            return e.cid === v.configId;
          });
          (null === m || void 0 === m ? void 0 : m.length) &&
            (window.$$configIdMap[v.configId] = (
              null === (n = window.$$configIdMap[v.configId]) || void 0 === n
                ? void 0
                : n.length
            )
              ? Y(Y([], W(window.$$configIdMap[v.configId])), W(m))
              : Y([], W(m))),
            null === m ||
              void 0 === m ||
              m.forEach(function (e) {
                var n = h.findIndex(function (n) {
                  return n.pid === e.pid;
                });
                h.splice(n, 1);
              });
        }
        function y() {
          var e, n;
          b(),
            k(v),
            M(),
            u({
              extra: {
                action: "log_page_loaded",
                pixel_num:
                  (null ===
                    (n =
                      null === (e = window.$$configIdMap) || void 0 === e
                        ? void 0
                        : e[v.configId]) || void 0 === n
                    ? void 0
                    : n.length) > 1
                    ? "multiple"
                    : "single",
              },
            }),
            window.addEventListener(
              "beforeunload",
              function () {
                x(1);
              },
              !1
            ),
            window.addEventListener(
              "pagehide",
              function () {
                x(2);
              },
              !1
            );
        }
        function b() {
          if (
            (g &&
              g.slice(0).forEach(function (e) {
                var n;
                I(e),
                  (e[2] &&
                    (null === (n = e[2]) || void 0 === n
                      ? void 0
                      : n.configId) !== v.configId) ||
                    g.splice(g.indexOf(e), 1);
              }),
            window.bge)
          ) {
            var e = window.bge;
            window.bge = function () {
              I(arguments), e.apply(void 0, Y([], W(arguments)));
            };
          }
        }
        function x(e) {
          I(["event", "leave", { type: e }]);
        }
        function I(e) {
          var n = W(e, 3),
            t = n[0],
            i = n[1],
            o = n[2];
          switch (t) {
            case "init":
              if (v.configId !== window.$$firstInitPixelId) break;
              window.$$configIdMap[window.$$firstInitPixelId] = Y(
                Y([], W(window.$$configIdMap[window.$$firstInitPixelId])),
                [
                  {
                    pid: i,
                    cid:
                      (null === o || void 0 === o ? void 0 : o.configId) || i,
                  },
                ]
              ).reduce(function (e, n) {
                return e.find(function (e) {
                  return (
                    (null === e || void 0 === e ? void 0 : e.pid) ===
                    (null === n || void 0 === n ? void 0 : n.pid)
                  );
                })
                  ? e
                  : Y(Y([], W(e)), [n]);
              }, []);
              break;
            case "event":
              E(i, o || {});
              break;
          }
        }
        function E(e, n) {
          if (
            ("init" === e && $(),
            -1 ===
              ["init", "page_view", "leave", "bmp_jump", "bmp_error"].indexOf(
                e
              ))
          ) {
            var t = G({}, n),
              i = 1;
            void 0 !== t.value && ((i = t.value), delete t.value),
              L({ event_id: e, value: i }, t);
          } else L(null, null, G({ action: e }, n));
        }
        function $() {
          S();
          var e = localStorage.getItem(t);
          if (e)
            try {
              var n = JSON.parse(e);
              if (Date.now() - 864e5 > n.sessionStartTime) return void C();
              Date.now() - 18e5 <= n.sessionStartTime &&
                n.sessionId &&
                (p.session_id = n.sessionId),
                (n.sessionStartTime = Date.now());
              var i = r(p.url, l),
                o = n.sessionDepth;
              if (i) {
                window.$$baseConfig.land_url = p.url;
                var a = o.indexOf(p.url);
                -1 !== a && o.splice(a, 1), o.push(p.url);
              } else
                o.length && (window.$$baseConfig.land_url = o[o.length - 1]);
              localStorage.setItem(t, JSON.stringify(n));
            } catch (d) {
              C();
            }
          else C();
        }
        function S() {
          var e, n;
          if (window.bge_ingore_bbg) _();
          else {
            var t = r(p.url, "bbg") || r(p.referer, "bbg") || a(o);
            if (t) _(t);
            else {
              var i = document.createElement("iframe");
              (i.onerror = c),
                (i.src = "https://api.imotech.video/ad/pixelfile.html"),
                (i.style.display = "none"),
                window.addEventListener("message", d),
                u({
                  extra: {
                    action: "log_iframe_bbg",
                    pixel_num:
                      (null ===
                        (n =
                          null === (e = window.$$configIdMap) || void 0 === e
                            ? void 0
                            : e[v.configId]) || void 0 === n
                        ? void 0
                        : n.length) > 1
                        ? "multiple"
                        : "single",
                  },
                }),
                document.body && document.body.appendChild(i);
              var l = setTimeout(c, 5e3);
            }
          }
          function d(e) {
            if (e && e.data && "object" === U(e.data) && "bbg" in e.data) {
              var n = e.data.updateTime;
              c(n + 864e5 > Date.now() ? e.data.bbg : null);
            }
          }
          function c(e) {
            clearTimeout(l),
              _(e),
              window.removeEventListener("message", d),
              document.body && document.body.removeChild(i);
          }
        }
        function _(e) {
          var n, t, i;
          if (((window.$$finishCheckBBG = !0), e)) {
            window.$$baseConfig.bbg = e;
            var r = new Date();
            r.setHours(r.getHours() + 2),
              (document.cookie =
                o + "=" + e + "; expires=" + r.toString() + "; path=/");
          } else
            u({
              extra: {
                action: "log_no_bbg",
                pixel_num:
                  (null ===
                    (t =
                      null === (n = window.$$configIdMap) || void 0 === n
                        ? void 0
                        : n[v.configId]) || void 0 === t
                    ? void 0
                    : t.length) > 1
                    ? "multiple"
                    : "single",
              },
            });
          null ===
            (i =
              null === window || void 0 === window
                ? void 0
                : window.$$requestStack) ||
            void 0 === i ||
            i.forEach(function (e) {
              var n = e.extra,
                t = e.params;
              (t = G(G({}, t), window.$$baseConfig)), s(t), j(n, t);
            });
        }
        function C() {
          var e = r(p.url, l),
            n = [];
          e && ((n = [p.url]), (window.$$baseConfig.land_url = p.url));
          var i = {
            sessionDepth: n,
            sessionStartTime: Date.now(),
            sessionId: p.session_id,
          };
          localStorage.setItem(t, JSON.stringify(i));
        }
        function P() {
          var e = a(i);
          e ||
            (e =
              "BA1.1." +
              (1e10 * Math.random()).toFixed() +
              "." +
              (Date.now() / 1e3).toFixed());
          var n = new Date();
          n.setFullYear(n.getFullYear() + 2),
            (document.cookie =
              i + "=" + e + "; expires=" + n.toString() + "; path=/");
          var t = {
            title: document.title || "",
            referer: document.referrer || "",
            resolution: window.screen
              ? (window.screen.height || 0) + "*" + (window.screen.width || 0)
              : "",
            lang:
              (null === navigator || void 0 === navigator
                ? void 0
                : navigator.language) ||
              (null === navigator || void 0 === navigator
                ? void 0
                : navigator.userLanguage) ||
              "",
            url:
              (null === location || void 0 === location
                ? void 0
                : location.href) || "",
            host:
              (null === location || void 0 === location
                ? void 0
                : location.host) || "",
            cookie_id: e,
            session_id:
              "BA1.1." +
              (1e10 * Math.random()).toFixed() +
              "." +
              (Date.now() / 1e3).toFixed(),
          };
          if (!t.referer)
            try {
              window.opener && (t.referer = window.opener.location.href);
            } catch (o) {}
          return t;
        }
        function L(e, n, t) {
          var i, o;
          if (
            !n ||
            !(null === (i = Object.keys(n)) || void 0 === i
              ? void 0
              : i.length) ||
            (null === v || void 0 === v ? void 0 : v.configId) ===
              (null === n || void 0 === n ? void 0 : n.configId) ||
            (null === v || void 0 === v ? void 0 : v.configId) ===
              (null === n || void 0 === n ? void 0 : n.xConfigId)
          ) {
            e &&
              e.event_id &&
              "string" !== typeof v &&
              v.only &&
              v.only.includes(e.event_id) &&
              (n || (n = {}), (n.only = 1));
            var r = "";
            if (
              (e
                ? (r = JSON.stringify(G(G({}, e), n)))
                : t && t.action && (r = t.action),
              r)
            ) {
              var a = d[r],
                l = Date.now();
              if (((d[r] = l), l - a < f)) return;
            }
            var u =
                null === (o = window.$$configIdMap[v.configId]) || void 0 === o
                  ? void 0
                  : o.map(function (e) {
                      return e.pid;
                    }),
              g =
                (null === n || void 0 === n ? void 0 : n.configId) &&
                (null === u || void 0 === u
                  ? void 0
                  : u.includes(
                      null === n || void 0 === n ? void 0 : n.configId
                    ))
                  ? [null === n || void 0 === n ? void 0 : n.configId]
                  : u;
            null === g ||
              void 0 === g ||
              g.forEach(function (i) {
                var o = G(
                  G(G(G({}, window.$$baseConfig), p), {
                    pixel_id: i,
                    ts: Date.now(),
                  }),
                  e
                );
                t || (t = {}),
                  c(t),
                  (o.extra = JSON.stringify(t)),
                  n &&
                    Object.keys(n).length &&
                    (o.event_extra = JSON.stringify(n)),
                  window.$$finishCheckBBG
                    ? (s(o), j(t, o))
                    : window.$$requestStack
                    ? window.$$requestStack.push({ extra: t, params: o })
                    : (window.$$requestStack = [{ extra: t, params: o }]);
              });
          }
        }
        function j(e, n) {
          var t = window.eventJs;
          try {
            e &&
              e.action &&
              t &&
              t.statWebViewEvent &&
              t.statWebViewEvent(e.action, JSON.stringify(n));
          } catch (i) {}
          try {
            e &&
              e.action &&
              window.webkit.messageHandlers.bigoad_doAction.postMessage(
                JSON.stringify({
                  type: "statWebViewEvent",
                  event: e.action,
                  data: JSON.stringify(n),
                })
              );
          } catch (i) {}
        }
        "complete" === document.readyState
          ? y()
          : "loading" === document.readyState
          ? window.addEventListener("DOMContentLoaded", function () {
              y();
            })
          : y();
      })();
    } catch (X) {
      u({
        extra: {
          action: "log_page_error",
          error:
            (null === X || void 0 === X ? void 0 : X.name) +
            ": " +
            (null === X || void 0 === X ? void 0 : X.message),
          url: window.location.href,
        },
      });
    }
  },
});
