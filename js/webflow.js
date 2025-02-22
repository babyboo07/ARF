/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var FE = Object.create;
  var Cn = Object.defineProperty;
  var qE = Object.getOwnPropertyDescriptor;
  var GE = Object.getOwnPropertyNames;
  var kE = Object.getPrototypeOf,
    XE = Object.prototype.hasOwnProperty;
  var Ee = (e, t) => () => (e && (t = e((e = 0))), t);
  var f = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Le = (e, t) => {
      for (var n in t) Cn(e, n, { get: t[n], enumerable: !0 });
    },
    ua = (e, t, n, r) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of GE(t))
          !XE.call(e, i) &&
            i !== n &&
            Cn(e, i, { get: () => t[i], enumerable: !(r = qE(t, i)) || r.enumerable });
      return e;
    };
  var le = (e, t, n) => (
      (n = e != null ? FE(kE(e)) : {}),
      ua(t || !e || !e.__esModule ? Cn(n, "default", { value: e, enumerable: !0 }) : n, e)
    ),
    Ke = (e) => ua(Cn({}, "__esModule", { value: !0 }), e);
  var Wr = f(() => {
    "use strict";
    window.tram = (function (e) {
      function t(c, y) {
        var T = new k.Bare();
        return T.init(c, y);
      }
      function n(c) {
        return c.replace(/[A-Z]/g, function (y) {
          return "-" + y.toLowerCase();
        });
      }
      function r(c) {
        var y = parseInt(c.slice(1), 16),
          T = (y >> 16) & 255,
          A = (y >> 8) & 255,
          _ = 255 & y;
        return [T, A, _];
      }
      function i(c, y, T) {
        return "#" + ((1 << 24) | (c << 16) | (y << 8) | T).toString(16).slice(1);
      }
      function o() {}
      function a(c, y) {
        l("Type warning: Expected: [" + c + "] Got: [" + typeof y + "] " + y);
      }
      function s(c, y, T) {
        l("Units do not match [" + c + "]: " + y + ", " + T);
      }
      function u(c, y, T) {
        if ((y !== void 0 && (T = y), c === void 0)) return T;
        var A = T;
        return (
          ht.test(c) || !tt.test(c)
            ? (A = parseInt(c, 10))
            : tt.test(c) && (A = 1e3 * parseFloat(c)),
          0 > A && (A = 0),
          A === A ? A : T
        );
      }
      function l(c) {
        ue.debug && window && window.console.warn(c);
      }
      function v(c) {
        for (var y = -1, T = c ? c.length : 0, A = []; ++y < T; ) {
          var _ = c[y];
          _ && A.push(_);
        }
        return A;
      }
      var p = (function (c, y, T) {
          function A(ne) {
            return typeof ne == "object";
          }
          function _(ne) {
            return typeof ne == "function";
          }
          function w() {}
          function $(ne, pe) {
            function U() {
              var Se = new ie();
              return _(Se.init) && Se.init.apply(Se, arguments), Se;
            }
            function ie() {}
            pe === T && ((pe = ne), (ne = Object)), (U.Bare = ie);
            var se,
              _e = (w[c] = ne[c]),
              ze = (ie[c] = U[c] = new w());
            return (
              (ze.constructor = U),
              (U.mixin = function (Se) {
                return (ie[c] = U[c] = $(U, Se)[c]), U;
              }),
              (U.open = function (Se) {
                if (
                  ((se = {}), _(Se) ? (se = Se.call(U, ze, _e, U, ne)) : A(Se) && (se = Se), A(se))
                )
                  for (var Jt in se) y.call(se, Jt) && (ze[Jt] = se[Jt]);
                return _(ze.init) || (ze.init = ne), U;
              }),
              U.open(pe)
            );
          }
          return $;
        })("prototype", {}.hasOwnProperty),
        d = {
          ease: [
            "ease",
            function (c, y, T, A) {
              var _ = (c /= A) * c,
                w = _ * c;
              return y + T * (-2.75 * w * _ + 11 * _ * _ + -15.5 * w + 8 * _ + 0.25 * c);
            },
          ],
          "ease-in": [
            "ease-in",
            function (c, y, T, A) {
              var _ = (c /= A) * c,
                w = _ * c;
              return y + T * (-1 * w * _ + 3 * _ * _ + -3 * w + 2 * _);
            },
          ],
          "ease-out": [
            "ease-out",
            function (c, y, T, A) {
              var _ = (c /= A) * c,
                w = _ * c;
              return y + T * (0.3 * w * _ + -1.6 * _ * _ + 2.2 * w + -1.8 * _ + 1.9 * c);
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (c, y, T, A) {
              var _ = (c /= A) * c,
                w = _ * c;
              return y + T * (2 * w * _ + -5 * _ * _ + 2 * w + 2 * _);
            },
          ],
          linear: [
            "linear",
            function (c, y, T, A) {
              return (T * c) / A + y;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (c, y, T, A) {
              return T * (c /= A) * c + y;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (c, y, T, A) {
              return -T * (c /= A) * (c - 2) + y;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (c, y, T, A) {
              return (c /= A / 2) < 1 ? (T / 2) * c * c + y : (-T / 2) * (--c * (c - 2) - 1) + y;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (c, y, T, A) {
              return T * (c /= A) * c * c + y;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (c, y, T, A) {
              return T * ((c = c / A - 1) * c * c + 1) + y;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (c, y, T, A) {
              return (c /= A / 2) < 1
                ? (T / 2) * c * c * c + y
                : (T / 2) * ((c -= 2) * c * c + 2) + y;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (c, y, T, A) {
              return T * (c /= A) * c * c * c + y;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (c, y, T, A) {
              return -T * ((c = c / A - 1) * c * c * c - 1) + y;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (c, y, T, A) {
              return (c /= A / 2) < 1
                ? (T / 2) * c * c * c * c + y
                : (-T / 2) * ((c -= 2) * c * c * c - 2) + y;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (c, y, T, A) {
              return T * (c /= A) * c * c * c * c + y;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (c, y, T, A) {
              return T * ((c = c / A - 1) * c * c * c * c + 1) + y;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (c, y, T, A) {
              return (c /= A / 2) < 1
                ? (T / 2) * c * c * c * c * c + y
                : (T / 2) * ((c -= 2) * c * c * c * c + 2) + y;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (c, y, T, A) {
              return -T * Math.cos((c / A) * (Math.PI / 2)) + T + y;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (c, y, T, A) {
              return T * Math.sin((c / A) * (Math.PI / 2)) + y;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (c, y, T, A) {
              return (-T / 2) * (Math.cos((Math.PI * c) / A) - 1) + y;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (c, y, T, A) {
              return c === 0 ? y : T * Math.pow(2, 10 * (c / A - 1)) + y;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (c, y, T, A) {
              return c === A ? y + T : T * (-Math.pow(2, (-10 * c) / A) + 1) + y;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (c, y, T, A) {
              return c === 0
                ? y
                : c === A
                ? y + T
                : (c /= A / 2) < 1
                ? (T / 2) * Math.pow(2, 10 * (c - 1)) + y
                : (T / 2) * (-Math.pow(2, -10 * --c) + 2) + y;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (c, y, T, A) {
              return -T * (Math.sqrt(1 - (c /= A) * c) - 1) + y;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (c, y, T, A) {
              return T * Math.sqrt(1 - (c = c / A - 1) * c) + y;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (c, y, T, A) {
              return (c /= A / 2) < 1
                ? (-T / 2) * (Math.sqrt(1 - c * c) - 1) + y
                : (T / 2) * (Math.sqrt(1 - (c -= 2) * c) + 1) + y;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (c, y, T, A, _) {
              return _ === void 0 && (_ = 1.70158), T * (c /= A) * c * ((_ + 1) * c - _) + y;
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (c, y, T, A, _) {
              return (
                _ === void 0 && (_ = 1.70158), T * ((c = c / A - 1) * c * ((_ + 1) * c + _) + 1) + y
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (c, y, T, A, _) {
              return (
                _ === void 0 && (_ = 1.70158),
                (c /= A / 2) < 1
                  ? (T / 2) * c * c * (((_ *= 1.525) + 1) * c - _) + y
                  : (T / 2) * ((c -= 2) * c * (((_ *= 1.525) + 1) * c + _) + 2) + y
              );
            },
          ],
        },
        E = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        m = document,
        b = window,
        O = "bkwld-tram",
        I = /[\-\.0-9]/g,
        C = /[A-Z]/,
        S = "number",
        D = /^(rgb|#)/,
        M = /(em|cm|mm|in|pt|pc|px)$/,
        P = /(em|cm|mm|in|pt|pc|px|%)$/,
        H = /(deg|rad|turn)$/,
        z = "unitless",
        K = /(all|none) 0s ease 0s/,
        Q = /^(width|height)$/,
        q = " ",
        x = m.createElement("a"),
        g = ["Webkit", "Moz", "O", "ms"],
        R = ["-webkit-", "-moz-", "-o-", "-ms-"],
        L = function (c) {
          if (c in x.style) return { dom: c, css: c };
          var y,
            T,
            A = "",
            _ = c.split("-");
          for (y = 0; y < _.length; y++) A += _[y].charAt(0).toUpperCase() + _[y].slice(1);
          for (y = 0; y < g.length; y++)
            if (((T = g[y] + A), T in x.style)) return { dom: T, css: R[y] + c };
        },
        G = (t.support = {
          bind: Function.prototype.bind,
          transform: L("transform"),
          transition: L("transition"),
          backface: L("backface-visibility"),
          timing: L("transition-timing-function"),
        });
      if (G.transition) {
        var Z = G.timing.dom;
        if (((x.style[Z] = d["ease-in-back"][0]), !x.style[Z])) for (var J in E) d[J][0] = E[J];
      }
      var N = (t.frame = (function () {
          var c =
            b.requestAnimationFrame ||
            b.webkitRequestAnimationFrame ||
            b.mozRequestAnimationFrame ||
            b.oRequestAnimationFrame ||
            b.msRequestAnimationFrame;
          return c && G.bind
            ? c.bind(b)
            : function (y) {
                b.setTimeout(y, 16);
              };
        })()),
        X = (t.now = (function () {
          var c = b.performance,
            y = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
          return y && G.bind
            ? y.bind(c)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        j = p(function (c) {
          function y(ee, ce) {
            var ye = v(("" + ee).split(q)),
              fe = ye[0];
            ce = ce || {};
            var Oe = B[fe];
            if (!Oe) return l("Unsupported property: " + fe);
            if (!ce.weak || !this.props[fe]) {
              var Ge = Oe[0],
                Pe = this.props[fe];
              return Pe || (Pe = this.props[fe] = new Ge.Bare()), Pe.init(this.$el, ye, Oe, ce), Pe;
            }
          }
          function T(ee, ce, ye) {
            if (ee) {
              var fe = typeof ee;
              if (
                (ce || (this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1)),
                fe == "number" && ce)
              )
                return (
                  (this.timer = new ae({ duration: ee, context: this, complete: w })),
                  void (this.active = !0)
                );
              if (fe == "string" && ce) {
                switch (ee) {
                  case "hide":
                    U.call(this);
                    break;
                  case "stop":
                    $.call(this);
                    break;
                  case "redraw":
                    ie.call(this);
                    break;
                  default:
                    y.call(this, ee, ye && ye[1]);
                }
                return w.call(this);
              }
              if (fe == "function") return void ee.call(this, this);
              if (fe == "object") {
                var Oe = 0;
                ze.call(
                  this,
                  ee,
                  function (Ie, ME) {
                    Ie.span > Oe && (Oe = Ie.span), Ie.stop(), Ie.animate(ME);
                  },
                  function (Ie) {
                    "wait" in Ie && (Oe = u(Ie.wait, 0));
                  }
                ),
                  _e.call(this),
                  Oe > 0 &&
                    ((this.timer = new ae({ duration: Oe, context: this })),
                    (this.active = !0),
                    ce && (this.timer.complete = w));
                var Ge = this,
                  Pe = !1,
                  Rn = {};
                N(function () {
                  ze.call(Ge, ee, function (Ie) {
                    Ie.active && ((Pe = !0), (Rn[Ie.name] = Ie.nextStyle));
                  }),
                    Pe && Ge.$el.css(Rn);
                });
              }
            }
          }
          function A(ee) {
            (ee = u(ee, 0)),
              this.active
                ? this.queue.push({ options: ee })
                : ((this.timer = new ae({ duration: ee, context: this, complete: w })),
                  (this.active = !0));
          }
          function _(ee) {
            return this.active
              ? (this.queue.push({ options: ee, args: arguments }), void (this.timer.complete = w))
              : l("No active transition timer. Use start() or wait() before then().");
          }
          function w() {
            if ((this.timer && this.timer.destroy(), (this.active = !1), this.queue.length)) {
              var ee = this.queue.shift();
              T.call(this, ee.options, !0, ee.args);
            }
          }
          function $(ee) {
            this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1);
            var ce;
            typeof ee == "string"
              ? ((ce = {}), (ce[ee] = 1))
              : (ce = typeof ee == "object" && ee != null ? ee : this.props),
              ze.call(this, ce, Se),
              _e.call(this);
          }
          function ne(ee) {
            $.call(this, ee), ze.call(this, ee, Jt, NE);
          }
          function pe(ee) {
            typeof ee != "string" && (ee = "block"), (this.el.style.display = ee);
          }
          function U() {
            $.call(this), (this.el.style.display = "none");
          }
          function ie() {
            this.el.offsetHeight;
          }
          function se() {
            $.call(this), e.removeData(this.el, O), (this.$el = this.el = null);
          }
          function _e() {
            var ee,
              ce,
              ye = [];
            this.upstream && ye.push(this.upstream);
            for (ee in this.props) (ce = this.props[ee]), ce.active && ye.push(ce.string);
            (ye = ye.join(",")),
              this.style !== ye && ((this.style = ye), (this.el.style[G.transition.dom] = ye));
          }
          function ze(ee, ce, ye) {
            var fe,
              Oe,
              Ge,
              Pe,
              Rn = ce !== Se,
              Ie = {};
            for (fe in ee)
              (Ge = ee[fe]),
                fe in ge
                  ? (Ie.transform || (Ie.transform = {}), (Ie.transform[fe] = Ge))
                  : (C.test(fe) && (fe = n(fe)),
                    fe in B ? (Ie[fe] = Ge) : (Pe || (Pe = {}), (Pe[fe] = Ge)));
            for (fe in Ie) {
              if (((Ge = Ie[fe]), (Oe = this.props[fe]), !Oe)) {
                if (!Rn) continue;
                Oe = y.call(this, fe);
              }
              ce.call(this, Oe, Ge);
            }
            ye && Pe && ye.call(this, Pe);
          }
          function Se(ee) {
            ee.stop();
          }
          function Jt(ee, ce) {
            ee.set(ce);
          }
          function NE(ee) {
            this.$el.css(ee);
          }
          function qe(ee, ce) {
            c[ee] = function () {
              return this.children
                ? DE.call(this, ce, arguments)
                : (this.el && ce.apply(this, arguments), this);
            };
          }
          function DE(ee, ce) {
            var ye,
              fe = this.children.length;
            for (ye = 0; fe > ye; ye++) ee.apply(this.children[ye], ce);
            return this;
          }
          (c.init = function (ee) {
            if (
              ((this.$el = e(ee)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ue.keepInherited && !ue.fallback)
            ) {
              var ce = V(this.el, "transition");
              ce && !K.test(ce) && (this.upstream = ce);
            }
            G.backface && ue.hideBackface && h(this.el, G.backface.css, "hidden");
          }),
            qe("add", y),
            qe("start", T),
            qe("wait", A),
            qe("then", _),
            qe("next", w),
            qe("stop", $),
            qe("set", ne),
            qe("show", pe),
            qe("hide", U),
            qe("redraw", ie),
            qe("destroy", se);
        }),
        k = p(j, function (c) {
          function y(T, A) {
            var _ = e.data(T, O) || e.data(T, O, new j.Bare());
            return _.el || _.init(T), A ? _.start(A) : _;
          }
          c.init = function (T, A) {
            var _ = e(T);
            if (!_.length) return this;
            if (_.length === 1) return y(_[0], A);
            var w = [];
            return (
              _.each(function ($, ne) {
                w.push(y(ne, A));
              }),
              (this.children = w),
              this
            );
          };
        }),
        F = p(function (c) {
          function y() {
            var w = this.get();
            this.update("auto");
            var $ = this.get();
            return this.update(w), $;
          }
          function T(w, $, ne) {
            return $ !== void 0 && (ne = $), w in d ? w : ne;
          }
          function A(w) {
            var $ = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(w);
            return ($ ? i($[1], $[2], $[3]) : w).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
          }
          var _ = { duration: 500, ease: "ease", delay: 0 };
          (c.init = function (w, $, ne, pe) {
            (this.$el = w), (this.el = w[0]);
            var U = $[0];
            ne[2] && (U = ne[2]),
              Y[U] && (U = Y[U]),
              (this.name = U),
              (this.type = ne[1]),
              (this.duration = u($[1], this.duration, _.duration)),
              (this.ease = T($[2], this.ease, _.ease)),
              (this.delay = u($[3], this.delay, _.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = Q.test(this.name)),
              (this.unit = pe.unit || this.unit || ue.defaultUnit),
              (this.angle = pe.angle || this.angle || ue.defaultAngle),
              ue.fallback || pe.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    q +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? q + d[this.ease][0] : "") +
                    (this.delay ? q + this.delay + "ms" : "")));
          }),
            (c.set = function (w) {
              (w = this.convert(w, this.type)), this.update(w), this.redraw();
            }),
            (c.transition = function (w) {
              (this.active = !0),
                (w = this.convert(w, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()),
                  w == "auto" && (w = y.call(this))),
                (this.nextStyle = w);
            }),
            (c.fallback = function (w) {
              var $ = this.el.style[this.name] || this.convert(this.get(), this.type);
              (w = this.convert(w, this.type)),
                this.auto &&
                  ($ == "auto" && ($ = this.convert(this.get(), this.type)),
                  w == "auto" && (w = y.call(this))),
                (this.tween = new te({
                  from: $,
                  to: w,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (c.get = function () {
              return V(this.el, this.name);
            }),
            (c.update = function (w) {
              h(this.el, this.name, w);
            }),
            (c.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1), (this.nextStyle = null), h(this.el, this.name, this.get()));
              var w = this.tween;
              w && w.context && w.destroy();
            }),
            (c.convert = function (w, $) {
              if (w == "auto" && this.auto) return w;
              var ne,
                pe = typeof w == "number",
                U = typeof w == "string";
              switch ($) {
                case S:
                  if (pe) return w;
                  if (U && w.replace(I, "") === "") return +w;
                  ne = "number(unitless)";
                  break;
                case D:
                  if (U) {
                    if (w === "" && this.original) return this.original;
                    if ($.test(w)) return w.charAt(0) == "#" && w.length == 7 ? w : A(w);
                  }
                  ne = "hex or rgb string";
                  break;
                case M:
                  if (pe) return w + this.unit;
                  if (U && $.test(w)) return w;
                  ne = "number(px) or string(unit)";
                  break;
                case P:
                  if (pe) return w + this.unit;
                  if (U && $.test(w)) return w;
                  ne = "number(px) or string(unit or %)";
                  break;
                case H:
                  if (pe) return w + this.angle;
                  if (U && $.test(w)) return w;
                  ne = "number(deg) or string(angle)";
                  break;
                case z:
                  if (pe || (U && P.test(w))) return w;
                  ne = "number(unitless) or string(unit or %)";
              }
              return a(ne, w), w;
            }),
            (c.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        W = p(F, function (c, y) {
          c.init = function () {
            y.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), D));
          };
        }),
        re = p(F, function (c, y) {
          (c.init = function () {
            y.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (c.get = function () {
              return this.$el[this.name]();
            }),
            (c.update = function (T) {
              this.$el[this.name](T);
            });
        }),
        oe = p(F, function (c, y) {
          function T(A, _) {
            var w, $, ne, pe, U;
            for (w in A)
              (pe = ge[w]),
                (ne = pe[0]),
                ($ = pe[1] || w),
                (U = this.convert(A[w], ne)),
                _.call(this, $, U, ne);
          }
          (c.init = function () {
            y.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                ge.perspective &&
                  ue.perspective &&
                  ((this.current.perspective = ue.perspective),
                  h(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (c.set = function (A) {
              T.call(this, A, function (_, w) {
                this.current[_] = w;
              }),
                h(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (c.transition = function (A) {
              var _ = this.values(A);
              this.tween = new ve({
                current: this.current,
                values: _,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var w,
                $ = {};
              for (w in this.current) $[w] = w in _ ? _[w] : this.current[w];
              (this.active = !0), (this.nextStyle = this.style($));
            }),
            (c.fallback = function (A) {
              var _ = this.values(A);
              this.tween = new ve({
                current: this.current,
                values: _,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (c.update = function () {
              h(this.el, this.name, this.style(this.current));
            }),
            (c.style = function (A) {
              var _,
                w = "";
              for (_ in A) w += _ + "(" + A[_] + ") ";
              return w;
            }),
            (c.values = function (A) {
              var _,
                w = {};
              return (
                T.call(this, A, function ($, ne, pe) {
                  (w[$] = ne),
                    this.current[$] === void 0 &&
                      ((_ = 0),
                      ~$.indexOf("scale") && (_ = 1),
                      (this.current[$] = this.convert(_, pe)));
                }),
                w
              );
            });
        }),
        te = p(function (c) {
          function y(U) {
            ne.push(U) === 1 && N(T);
          }
          function T() {
            var U,
              ie,
              se,
              _e = ne.length;
            if (_e) for (N(T), ie = X(), U = _e; U--; ) (se = ne[U]), se && se.render(ie);
          }
          function A(U) {
            var ie,
              se = e.inArray(U, ne);
            se >= 0 &&
              ((ie = ne.slice(se + 1)), (ne.length = se), ie.length && (ne = ne.concat(ie)));
          }
          function _(U) {
            return Math.round(U * pe) / pe;
          }
          function w(U, ie, se) {
            return i(
              U[0] + se * (ie[0] - U[0]),
              U[1] + se * (ie[1] - U[1]),
              U[2] + se * (ie[2] - U[2])
            );
          }
          var $ = { ease: d.ease[1], from: 0, to: 1 };
          (c.init = function (U) {
            (this.duration = U.duration || 0), (this.delay = U.delay || 0);
            var ie = U.ease || $.ease;
            d[ie] && (ie = d[ie][1]),
              typeof ie != "function" && (ie = $.ease),
              (this.ease = ie),
              (this.update = U.update || o),
              (this.complete = U.complete || o),
              (this.context = U.context || this),
              (this.name = U.name);
            var se = U.from,
              _e = U.to;
            se === void 0 && (se = $.from),
              _e === void 0 && (_e = $.to),
              (this.unit = U.unit || ""),
              typeof se == "number" && typeof _e == "number"
                ? ((this.begin = se), (this.change = _e - se))
                : this.format(_e, se),
              (this.value = this.begin + this.unit),
              (this.start = X()),
              U.autoplay !== !1 && this.play();
          }),
            (c.play = function () {
              this.active || (this.start || (this.start = X()), (this.active = !0), y(this));
            }),
            (c.stop = function () {
              this.active && ((this.active = !1), A(this));
            }),
            (c.render = function (U) {
              var ie,
                se = U - this.start;
              if (this.delay) {
                if (se <= this.delay) return;
                se -= this.delay;
              }
              if (se < this.duration) {
                var _e = this.ease(se, 0, 1, this.duration);
                return (
                  (ie = this.startRGB
                    ? w(this.startRGB, this.endRGB, _e)
                    : _(this.begin + _e * this.change)),
                  (this.value = ie + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ie = this.endHex || this.begin + this.change),
                (this.value = ie + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (c.format = function (U, ie) {
              if (((ie += ""), (U += ""), U.charAt(0) == "#"))
                return (
                  (this.startRGB = r(ie)),
                  (this.endRGB = r(U)),
                  (this.endHex = U),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var se = ie.replace(I, ""),
                  _e = U.replace(I, "");
                se !== _e && s("tween", ie, U), (this.unit = se);
              }
              (ie = parseFloat(ie)),
                (U = parseFloat(U)),
                (this.begin = this.value = ie),
                (this.change = U - ie);
            }),
            (c.destroy = function () {
              this.stop(), (this.context = null), (this.ease = this.update = this.complete = o);
            });
          var ne = [],
            pe = 1e3;
        }),
        ae = p(te, function (c) {
          (c.init = function (y) {
            (this.duration = y.duration || 0),
              (this.complete = y.complete || o),
              (this.context = y.context),
              this.play();
          }),
            (c.render = function (y) {
              var T = y - this.start;
              T < this.duration || (this.complete.call(this.context), this.destroy());
            });
        }),
        ve = p(te, function (c, y) {
          (c.init = function (T) {
            (this.context = T.context),
              (this.update = T.update),
              (this.tweens = []),
              (this.current = T.current);
            var A, _;
            for (A in T.values)
              (_ = T.values[A]),
                this.current[A] !== _ &&
                  this.tweens.push(
                    new te({
                      name: A,
                      from: this.current[A],
                      to: _,
                      duration: T.duration,
                      delay: T.delay,
                      ease: T.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (c.render = function (T) {
              var A,
                _,
                w = this.tweens.length,
                $ = !1;
              for (A = w; A--; )
                (_ = this.tweens[A]),
                  _.context && (_.render(T), (this.current[_.name] = _.value), ($ = !0));
              return $ ? void (this.update && this.update.call(this.context)) : this.destroy();
            }),
            (c.destroy = function () {
              if ((y.destroy.call(this), this.tweens)) {
                var T,
                  A = this.tweens.length;
                for (T = A; T--; ) this.tweens[T].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ue = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !G.transition,
          agentTests: [],
        });
      (t.fallback = function (c) {
        if (!G.transition) return (ue.fallback = !0);
        ue.agentTests.push("(" + c + ")");
        var y = new RegExp(ue.agentTests.join("|"), "i");
        ue.fallback = y.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (c) {
          return new te(c);
        }),
        (t.delay = function (c, y, T) {
          return new ae({ complete: y, duration: c, context: T });
        }),
        (e.fn.tram = function (c) {
          return t.call(null, this, c);
        });
      var h = e.style,
        V = e.css,
        Y = { transform: G.transform && G.transform.css },
        B = {
          color: [W, D],
          background: [W, D, "background-color"],
          "outline-color": [W, D],
          "border-color": [W, D],
          "border-top-color": [W, D],
          "border-right-color": [W, D],
          "border-bottom-color": [W, D],
          "border-left-color": [W, D],
          "border-width": [F, M],
          "border-top-width": [F, M],
          "border-right-width": [F, M],
          "border-bottom-width": [F, M],
          "border-left-width": [F, M],
          "border-spacing": [F, M],
          "letter-spacing": [F, M],
          margin: [F, M],
          "margin-top": [F, M],
          "margin-right": [F, M],
          "margin-bottom": [F, M],
          "margin-left": [F, M],
          padding: [F, M],
          "padding-top": [F, M],
          "padding-right": [F, M],
          "padding-bottom": [F, M],
          "padding-left": [F, M],
          "outline-width": [F, M],
          opacity: [F, S],
          top: [F, P],
          right: [F, P],
          bottom: [F, P],
          left: [F, P],
          "font-size": [F, P],
          "text-indent": [F, P],
          "word-spacing": [F, P],
          width: [F, P],
          "min-width": [F, P],
          "max-width": [F, P],
          height: [F, P],
          "min-height": [F, P],
          "max-height": [F, P],
          "line-height": [F, z],
          "scroll-top": [re, S, "scrollTop"],
          "scroll-left": [re, S, "scrollLeft"],
        },
        ge = {};
      G.transform &&
        ((B.transform = [oe]),
        (ge = {
          x: [P, "translateX"],
          y: [P, "translateY"],
          rotate: [H],
          rotateX: [H],
          rotateY: [H],
          scale: [S],
          scaleX: [S],
          scaleY: [S],
          skew: [H],
          skewX: [H],
          skewY: [H],
        })),
        G.transform &&
          G.backface &&
          ((ge.z = [P, "translateZ"]),
          (ge.rotateZ = [H]),
          (ge.scaleZ = [S]),
          (ge.perspective = [M]));
      var ht = /ms/,
        tt = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var la = f((mF, ca) => {
    "use strict";
    var VE = window.$,
      UE = Wr() && VE.tram;
    ca.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        n = Array.prototype,
        r = Object.prototype,
        i = Function.prototype,
        o = n.push,
        a = n.slice,
        s = n.concat,
        u = r.toString,
        l = r.hasOwnProperty,
        v = n.forEach,
        p = n.map,
        d = n.reduce,
        E = n.reduceRight,
        m = n.filter,
        b = n.every,
        O = n.some,
        I = n.indexOf,
        C = n.lastIndexOf,
        S = Array.isArray,
        D = Object.keys,
        M = i.bind,
        P =
          (e.each =
          e.forEach =
            function (g, R, L) {
              if (g == null) return g;
              if (v && g.forEach === v) g.forEach(R, L);
              else if (g.length === +g.length) {
                for (var G = 0, Z = g.length; G < Z; G++) if (R.call(L, g[G], G, g) === t) return;
              } else
                for (var J = e.keys(g), G = 0, Z = J.length; G < Z; G++)
                  if (R.call(L, g[J[G]], J[G], g) === t) return;
              return g;
            });
      (e.map = e.collect =
        function (g, R, L) {
          var G = [];
          return g == null
            ? G
            : p && g.map === p
            ? g.map(R, L)
            : (P(g, function (Z, J, N) {
                G.push(R.call(L, Z, J, N));
              }),
              G);
        }),
        (e.find = e.detect =
          function (g, R, L) {
            var G;
            return (
              H(g, function (Z, J, N) {
                if (R.call(L, Z, J, N)) return (G = Z), !0;
              }),
              G
            );
          }),
        (e.filter = e.select =
          function (g, R, L) {
            var G = [];
            return g == null
              ? G
              : m && g.filter === m
              ? g.filter(R, L)
              : (P(g, function (Z, J, N) {
                  R.call(L, Z, J, N) && G.push(Z);
                }),
                G);
          });
      var H =
        (e.some =
        e.any =
          function (g, R, L) {
            R || (R = e.identity);
            var G = !1;
            return g == null
              ? G
              : O && g.some === O
              ? g.some(R, L)
              : (P(g, function (Z, J, N) {
                  if (G || (G = R.call(L, Z, J, N))) return t;
                }),
                !!G);
          });
      (e.contains = e.include =
        function (g, R) {
          return g == null
            ? !1
            : I && g.indexOf === I
            ? g.indexOf(R) != -1
            : H(g, function (L) {
                return L === R;
              });
        }),
        (e.delay = function (g, R) {
          var L = a.call(arguments, 2);
          return setTimeout(function () {
            return g.apply(null, L);
          }, R);
        }),
        (e.defer = function (g) {
          return e.delay.apply(e, [g, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (g) {
          var R, L, G;
          return function () {
            R ||
              ((R = !0),
              (L = arguments),
              (G = this),
              UE.frame(function () {
                (R = !1), g.apply(G, L);
              }));
          };
        }),
        (e.debounce = function (g, R, L) {
          var G,
            Z,
            J,
            N,
            X,
            j = function () {
              var k = e.now() - N;
              k < R
                ? (G = setTimeout(j, R - k))
                : ((G = null), L || ((X = g.apply(J, Z)), (J = Z = null)));
            };
          return function () {
            (J = this), (Z = arguments), (N = e.now());
            var k = L && !G;
            return G || (G = setTimeout(j, R)), k && ((X = g.apply(J, Z)), (J = Z = null)), X;
          };
        }),
        (e.defaults = function (g) {
          if (!e.isObject(g)) return g;
          for (var R = 1, L = arguments.length; R < L; R++) {
            var G = arguments[R];
            for (var Z in G) g[Z] === void 0 && (g[Z] = G[Z]);
          }
          return g;
        }),
        (e.keys = function (g) {
          if (!e.isObject(g)) return [];
          if (D) return D(g);
          var R = [];
          for (var L in g) e.has(g, L) && R.push(L);
          return R;
        }),
        (e.has = function (g, R) {
          return l.call(g, R);
        }),
        (e.isObject = function (g) {
          return g === Object(g);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var z = /(.)^/,
        K = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
        Q = /\\|'|\r|\n|\u2028|\u2029/g,
        q = function (g) {
          return "\\" + K[g];
        },
        x = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (g, R, L) {
          !R && L && (R = L), (R = e.defaults({}, R, e.templateSettings));
          var G = RegExp(
              [(R.escape || z).source, (R.interpolate || z).source, (R.evaluate || z).source].join(
                "|"
              ) + "|$",
              "g"
            ),
            Z = 0,
            J = "__p+='";
          g.replace(G, function (k, F, W, re, oe) {
            return (
              (J += g.slice(Z, oe).replace(Q, q)),
              (Z = oe + k.length),
              F
                ? (J +=
                    `'+
((__t=(` +
                    F +
                    `))==null?'':_.escape(__t))+
'`)
                : W
                ? (J +=
                    `'+
((__t=(` +
                    W +
                    `))==null?'':__t)+
'`)
                : re &&
                  (J +=
                    `';
` +
                    re +
                    `
__p+='`),
              k
            );
          }),
            (J += `';
`);
          var N = R.variable;
          if (N) {
            if (!x.test(N)) throw new Error("variable is not a bare identifier: " + N);
          } else
            (J =
              `with(obj||{}){
` +
              J +
              `}
`),
              (N = "obj");
          J =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            J +
            `return __p;
`;
          var X;
          try {
            X = new Function(R.variable || "obj", "_", J);
          } catch (k) {
            throw ((k.source = J), k);
          }
          var j = function (k) {
            return X.call(this, k, e);
          };
          return (
            (j.source =
              "function(" +
              N +
              `){
` +
              J +
              "}"),
            j
          );
        }),
        e
      );
    })();
  });
  var Ve = f((_F, ya) => {
    "use strict";
    var de = {},
      At = {},
      wt = [],
      Kr = window.Webflow || [],
      st = window.jQuery,
      Xe = st(window),
      BE = st(document),
      je = st.isFunction,
      ke = (de._ = la()),
      da = (de.tram = Wr() && st.tram),
      Ln = !1,
      jr = !1;
    da.config.hideBackface = !1;
    da.config.keepInherited = !0;
    de.define = function (e, t, n) {
      At[e] && ga(At[e]);
      var r = (At[e] = t(st, ke, n) || {});
      return pa(r), r;
    };
    de.require = function (e) {
      return At[e];
    };
    function pa(e) {
      de.env() &&
        (je(e.design) && Xe.on("__wf_design", e.design),
        je(e.preview) && Xe.on("__wf_preview", e.preview)),
        je(e.destroy) && Xe.on("__wf_destroy", e.destroy),
        e.ready && je(e.ready) && HE(e);
    }
    function HE(e) {
      if (Ln) {
        e.ready();
        return;
      }
      ke.contains(wt, e.ready) || wt.push(e.ready);
    }
    function ga(e) {
      je(e.design) && Xe.off("__wf_design", e.design),
        je(e.preview) && Xe.off("__wf_preview", e.preview),
        je(e.destroy) && Xe.off("__wf_destroy", e.destroy),
        e.ready && je(e.ready) && WE(e);
    }
    function WE(e) {
      wt = ke.filter(wt, function (t) {
        return t !== e.ready;
      });
    }
    de.push = function (e) {
      if (Ln) {
        je(e) && e();
        return;
      }
      Kr.push(e);
    };
    de.env = function (e) {
      var t = window.__wf_design,
        n = typeof t < "u";
      if (!e) return n;
      if (e === "design") return n && t;
      if (e === "preview") return n && !t;
      if (e === "slug") return n && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var Pn = navigator.userAgent.toLowerCase(),
      ha = (de.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      zE = (de.env.chrome =
        /chrome/.test(Pn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(Pn.match(/chrome\/(\d+)\./)[1], 10)),
      KE = (de.env.ios = /(ipod|iphone|ipad)/.test(Pn));
    de.env.safari = /safari/.test(Pn) && !zE && !KE;
    var zr;
    ha &&
      BE.on("touchstart mousedown", function (e) {
        zr = e.target;
      });
    de.validClick = ha
      ? function (e) {
          return e === zr || st.contains(e, zr);
        }
      : function () {
          return !0;
        };
    var Ea = "resize.webflow orientationchange.webflow load.webflow",
      jE = "scroll.webflow " + Ea;
    de.resize = Yr(Xe, Ea);
    de.scroll = Yr(Xe, jE);
    de.redraw = Yr();
    function Yr(e, t) {
      var n = [],
        r = {};
      return (
        (r.up = ke.throttle(function (i) {
          ke.each(n, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, r.up),
        (r.on = function (i) {
          typeof i == "function" && (ke.contains(n, i) || n.push(i));
        }),
        (r.off = function (i) {
          if (!arguments.length) {
            n = [];
            return;
          }
          n = ke.filter(n, function (o) {
            return o !== i;
          });
        }),
        r
      );
    }
    de.location = function (e) {
      window.location = e;
    };
    de.env() && (de.location = function () {});
    de.ready = function () {
      (Ln = !0), jr ? YE() : ke.each(wt, fa), ke.each(Kr, fa), de.resize.up();
    };
    function fa(e) {
      je(e) && e();
    }
    function YE() {
      (jr = !1), ke.each(At, pa);
    }
    var Et;
    de.load = function (e) {
      Et.then(e);
    };
    function va() {
      Et && (Et.reject(), Xe.off("load", Et.resolve)),
        (Et = new st.Deferred()),
        Xe.on("load", Et.resolve);
    }
    de.destroy = function (e) {
      (e = e || {}),
        (jr = !0),
        Xe.triggerHandler("__wf_destroy"),
        e.domready != null && (Ln = e.domready),
        ke.each(At, ga),
        de.resize.off(),
        de.scroll.off(),
        de.redraw.off(),
        (wt = []),
        (Kr = []),
        Et.state() === "pending" && va();
    };
    st(de.ready);
    va();
    ya.exports = window.Webflow = de;
  });
  var Ia = f((IF, _a) => {
    "use strict";
    var ma = Ve();
    ma.define(
      "brand",
      (_a.exports = function (e) {
        var t = {},
          n = document,
          r = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          l;
        t.ready = function () {
          var E = r.attr("data-wf-status"),
            m = r.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(m) && a.hostname !== m && (E = !0),
            E && !s && ((l = l || p()), d(), setTimeout(d, 500), e(n).off(u, v).on(u, v));
        };
        function v() {
          var E =
            n.fullScreen ||
            n.mozFullScreen ||
            n.webkitIsFullScreen ||
            n.msFullscreenElement ||
            !!n.webkitFullscreenElement;
          e(l).attr("style", E ? "display: none !important;" : "");
        }
        function p() {
          var E = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            m = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            b = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return E.append(m, b), E[0];
        }
        function d() {
          var E = i.children(o),
            m = E.length && E.get(0) === l,
            b = ma.env("editor");
          if (m) {
            b && E.remove();
            return;
          }
          E.length && E.remove(), b || i.append(l);
        }
        return t;
      })
    );
  });
  var ba = f((TF, Ta) => {
    "use strict";
    var $E = Ve();
    $E.define(
      "focus-visible",
      (Ta.exports = function () {
        function e(n) {
          var r = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(S) {
            return !!(
              S &&
              S !== document &&
              S.nodeName !== "HTML" &&
              S.nodeName !== "BODY" &&
              "classList" in S &&
              "contains" in S.classList
            );
          }
          function u(S) {
            var D = S.type,
              M = S.tagName;
            return !!(
              (M === "INPUT" && a[D] && !S.readOnly) ||
              (M === "TEXTAREA" && !S.readOnly) ||
              S.isContentEditable
            );
          }
          function l(S) {
            S.getAttribute("data-wf-focus-visible") ||
              S.setAttribute("data-wf-focus-visible", "true");
          }
          function v(S) {
            S.getAttribute("data-wf-focus-visible") && S.removeAttribute("data-wf-focus-visible");
          }
          function p(S) {
            S.metaKey ||
              S.altKey ||
              S.ctrlKey ||
              (s(n.activeElement) && l(n.activeElement), (r = !0));
          }
          function d() {
            r = !1;
          }
          function E(S) {
            s(S.target) && (r || u(S.target)) && l(S.target);
          }
          function m(S) {
            s(S.target) &&
              S.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              v(S.target));
          }
          function b() {
            document.visibilityState === "hidden" && (i && (r = !0), O());
          }
          function O() {
            document.addEventListener("mousemove", C),
              document.addEventListener("mousedown", C),
              document.addEventListener("mouseup", C),
              document.addEventListener("pointermove", C),
              document.addEventListener("pointerdown", C),
              document.addEventListener("pointerup", C),
              document.addEventListener("touchmove", C),
              document.addEventListener("touchstart", C),
              document.addEventListener("touchend", C);
          }
          function I() {
            document.removeEventListener("mousemove", C),
              document.removeEventListener("mousedown", C),
              document.removeEventListener("mouseup", C),
              document.removeEventListener("pointermove", C),
              document.removeEventListener("pointerdown", C),
              document.removeEventListener("pointerup", C),
              document.removeEventListener("touchmove", C),
              document.removeEventListener("touchstart", C),
              document.removeEventListener("touchend", C);
          }
          function C(S) {
            (S.target.nodeName && S.target.nodeName.toLowerCase() === "html") || ((r = !1), I());
          }
          document.addEventListener("keydown", p, !0),
            document.addEventListener("mousedown", d, !0),
            document.addEventListener("pointerdown", d, !0),
            document.addEventListener("touchstart", d, !0),
            document.addEventListener("visibilitychange", b, !0),
            O(),
            n.addEventListener("focus", E, !0),
            n.addEventListener("blur", m, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Sa = f((bF, wa) => {
    "use strict";
    var Aa = Ve();
    Aa.define(
      "focus",
      (wa.exports = function () {
        var e = [],
          t = !1;
        function n(a) {
          t &&
            (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a));
        }
        function r(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          r(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Aa.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", n, !0),
            document.addEventListener("click", n, !0));
        }
        return { ready: o };
      })
    );
  });
  var Ra = f((AF, xa) => {
    "use strict";
    var $r = window.jQuery,
      Ye = {},
      Nn = [],
      Oa = ".w-ix",
      Dn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro || ((t.__wf_intro = !0), $r(t).triggerHandler(Ye.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro && ((t.__wf_intro = null), $r(t).triggerHandler(Ye.types.OUTRO));
        },
      };
    Ye.triggers = {};
    Ye.types = { INTRO: "w-ix-intro" + Oa, OUTRO: "w-ix-outro" + Oa };
    Ye.init = function () {
      for (var e = Nn.length, t = 0; t < e; t++) {
        var n = Nn[t];
        n[0](0, n[1]);
      }
      (Nn = []), $r.extend(Ye.triggers, Dn);
    };
    Ye.async = function () {
      for (var e in Dn) {
        var t = Dn[e];
        Dn.hasOwnProperty(e) &&
          (Ye.triggers[e] = function (n, r) {
            Nn.push([t, r]);
          });
      }
    };
    Ye.async();
    xa.exports = Ye;
  });
  var Fn = f((wF, La) => {
    "use strict";
    var Qr = Ra();
    function Ca(e, t) {
      var n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
    }
    var QE = window.jQuery,
      Mn = {},
      Pa = ".w-ix",
      ZE = {
        reset: function (e, t) {
          Qr.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Qr.triggers.intro(e, t), Ca(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Qr.triggers.outro(e, t), Ca(t, "COMPONENT_INACTIVE");
        },
      };
    Mn.triggers = {};
    Mn.types = { INTRO: "w-ix-intro" + Pa, OUTRO: "w-ix-outro" + Pa };
    QE.extend(Mn.triggers, ZE);
    La.exports = Mn;
  });
  var Zr = f((SF, Na) => {
    var JE = typeof global == "object" && global && global.Object === Object && global;
    Na.exports = JE;
  });
  var Ue = f((OF, Da) => {
    var ev = Zr(),
      tv = typeof self == "object" && self && self.Object === Object && self,
      nv = ev || tv || Function("return this")();
    Da.exports = nv;
  });
  var St = f((xF, Ma) => {
    var rv = Ue(),
      iv = rv.Symbol;
    Ma.exports = iv;
  });
  var ka = f((RF, Ga) => {
    var Fa = St(),
      qa = Object.prototype,
      ov = qa.hasOwnProperty,
      av = qa.toString,
      en = Fa ? Fa.toStringTag : void 0;
    function sv(e) {
      var t = ov.call(e, en),
        n = e[en];
      try {
        e[en] = void 0;
        var r = !0;
      } catch {}
      var i = av.call(e);
      return r && (t ? (e[en] = n) : delete e[en]), i;
    }
    Ga.exports = sv;
  });
  var Va = f((CF, Xa) => {
    var uv = Object.prototype,
      cv = uv.toString;
    function lv(e) {
      return cv.call(e);
    }
    Xa.exports = lv;
  });
  var ut = f((PF, Ha) => {
    var Ua = St(),
      fv = ka(),
      dv = Va(),
      pv = "[object Null]",
      gv = "[object Undefined]",
      Ba = Ua ? Ua.toStringTag : void 0;
    function hv(e) {
      return e == null ? (e === void 0 ? gv : pv) : Ba && Ba in Object(e) ? fv(e) : dv(e);
    }
    Ha.exports = hv;
  });
  var Jr = f((LF, Wa) => {
    function Ev(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    Wa.exports = Ev;
  });
  var ei = f((NF, za) => {
    var vv = Jr(),
      yv = vv(Object.getPrototypeOf, Object);
    za.exports = yv;
  });
  var nt = f((DF, Ka) => {
    function mv(e) {
      return e != null && typeof e == "object";
    }
    Ka.exports = mv;
  });
  var ti = f((MF, Ya) => {
    var _v = ut(),
      Iv = ei(),
      Tv = nt(),
      bv = "[object Object]",
      Av = Function.prototype,
      wv = Object.prototype,
      ja = Av.toString,
      Sv = wv.hasOwnProperty,
      Ov = ja.call(Object);
    function xv(e) {
      if (!Tv(e) || _v(e) != bv) return !1;
      var t = Iv(e);
      if (t === null) return !0;
      var n = Sv.call(t, "constructor") && t.constructor;
      return typeof n == "function" && n instanceof n && ja.call(n) == Ov;
    }
    Ya.exports = xv;
  });
  var $a = f((ni) => {
    "use strict";
    Object.defineProperty(ni, "__esModule", { value: !0 });
    ni.default = Rv;
    function Rv(e) {
      var t,
        n = e.Symbol;
      return (
        typeof n == "function"
          ? n.observable
            ? (t = n.observable)
            : ((t = n("observable")), (n.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var Qa = f((ii, ri) => {
    "use strict";
    Object.defineProperty(ii, "__esModule", { value: !0 });
    var Cv = $a(),
      Pv = Lv(Cv);
    function Lv(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Ot;
    typeof self < "u"
      ? (Ot = self)
      : typeof window < "u"
      ? (Ot = window)
      : typeof global < "u"
      ? (Ot = global)
      : typeof ri < "u"
      ? (Ot = ri)
      : (Ot = Function("return this")());
    var Nv = (0, Pv.default)(Ot);
    ii.default = Nv;
  });
  var oi = f((tn) => {
    "use strict";
    tn.__esModule = !0;
    tn.ActionTypes = void 0;
    tn.default = ts;
    var Dv = ti(),
      Mv = es(Dv),
      Fv = Qa(),
      Za = es(Fv);
    function es(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Ja = (tn.ActionTypes = { INIT: "@@redux/INIT" });
    function ts(e, t, n) {
      var r;
      if ((typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)), typeof n < "u")) {
        if (typeof n != "function") throw new Error("Expected the enhancer to be a function.");
        return n(ts)(e, t);
      }
      if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function l() {
        s === a && (s = a.slice());
      }
      function v() {
        return o;
      }
      function p(b) {
        if (typeof b != "function") throw new Error("Expected listener to be a function.");
        var O = !0;
        return (
          l(),
          s.push(b),
          function () {
            if (O) {
              (O = !1), l();
              var C = s.indexOf(b);
              s.splice(C, 1);
            }
          }
        );
      }
      function d(b) {
        if (!(0, Mv.default)(b))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof b.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, b));
        } finally {
          u = !1;
        }
        for (var O = (a = s), I = 0; I < O.length; I++) O[I]();
        return b;
      }
      function E(b) {
        if (typeof b != "function") throw new Error("Expected the nextReducer to be a function.");
        (i = b), d({ type: Ja.INIT });
      }
      function m() {
        var b,
          O = p;
        return (
          (b = {
            subscribe: function (C) {
              if (typeof C != "object")
                throw new TypeError("Expected the observer to be an object.");
              function S() {
                C.next && C.next(v());
              }
              S();
              var D = O(S);
              return { unsubscribe: D };
            },
          }),
          (b[Za.default] = function () {
            return this;
          }),
          b
        );
      }
      return (
        d({ type: Ja.INIT }),
        (r = { dispatch: d, subscribe: p, getState: v, replaceReducer: E }),
        (r[Za.default] = m),
        r
      );
    }
  });
  var si = f((ai) => {
    "use strict";
    ai.__esModule = !0;
    ai.default = qv;
    function qv(e) {
      typeof console < "u" && typeof console.error == "function" && console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var is = f((ui) => {
    "use strict";
    ui.__esModule = !0;
    ui.default = Uv;
    var ns = oi(),
      Gv = ti(),
      kF = rs(Gv),
      kv = si(),
      XF = rs(kv);
    function rs(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Xv(e, t) {
      var n = t && t.type,
        r = (n && '"' + n.toString() + '"') || "an action";
      return (
        "Given action " +
        r +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function Vv(e) {
      Object.keys(e).forEach(function (t) {
        var n = e[t],
          r = n(void 0, { type: ns.ActionTypes.INIT });
        if (typeof r > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof n(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " + ns.ActionTypes.INIT + ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function Uv(e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var i = t[r];
        typeof e[i] == "function" && (n[i] = e[i]);
      }
      var o = Object.keys(n);
      if (!1) var a;
      var s;
      try {
        Vv(n);
      } catch (u) {
        s = u;
      }
      return function () {
        var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
          v = arguments[1];
        if (s) throw s;
        if (!1) var p;
        for (var d = !1, E = {}, m = 0; m < o.length; m++) {
          var b = o[m],
            O = n[b],
            I = l[b],
            C = O(I, v);
          if (typeof C > "u") {
            var S = Xv(b, v);
            throw new Error(S);
          }
          (E[b] = C), (d = d || C !== I);
        }
        return d ? E : l;
      };
    }
  });
  var as = f((ci) => {
    "use strict";
    ci.__esModule = !0;
    ci.default = Bv;
    function os(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function Bv(e, t) {
      if (typeof e == "function") return os(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(e), r = {}, i = 0; i < n.length; i++) {
        var o = n[i],
          a = e[o];
        typeof a == "function" && (r[o] = os(a, t));
      }
      return r;
    }
  });
  var fi = f((li) => {
    "use strict";
    li.__esModule = !0;
    li.default = Hv;
    function Hv() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var r = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, r.apply(void 0, arguments));
      };
    }
  });
  var ss = f((di) => {
    "use strict";
    di.__esModule = !0;
    var Wv =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    di.default = Yv;
    var zv = fi(),
      Kv = jv(zv);
    function jv(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Yv() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return function (r) {
        return function (i, o, a) {
          var s = r(i, o, a),
            u = s.dispatch,
            l = [],
            v = {
              getState: s.getState,
              dispatch: function (d) {
                return u(d);
              },
            };
          return (
            (l = t.map(function (p) {
              return p(v);
            })),
            (u = Kv.default.apply(void 0, l)(s.dispatch)),
            Wv({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var pi = f((Fe) => {
    "use strict";
    Fe.__esModule = !0;
    Fe.compose =
      Fe.applyMiddleware =
      Fe.bindActionCreators =
      Fe.combineReducers =
      Fe.createStore =
        void 0;
    var $v = oi(),
      Qv = xt($v),
      Zv = is(),
      Jv = xt(Zv),
      ey = as(),
      ty = xt(ey),
      ny = ss(),
      ry = xt(ny),
      iy = fi(),
      oy = xt(iy),
      ay = si(),
      WF = xt(ay);
    function xt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Fe.createStore = Qv.default;
    Fe.combineReducers = Jv.default;
    Fe.bindActionCreators = ty.default;
    Fe.applyMiddleware = ry.default;
    Fe.compose = oy.default;
  });
  var Be,
    gi,
    $e,
    sy,
    uy,
    qn,
    cy,
    hi = Ee(() => {
      "use strict";
      (Be = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (gi = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        ($e = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (sy = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (uy = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (qn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (cy = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var xe,
    ly,
    Gn = Ee(() => {
      "use strict";
      (xe = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (ly = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var fy,
    us = Ee(() => {
      "use strict";
      fy = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var dy,
    py,
    gy,
    hy,
    Ey,
    vy,
    yy,
    Ei,
    cs = Ee(() => {
      "use strict";
      Gn();
      ({
        TRANSFORM_MOVE: dy,
        TRANSFORM_SCALE: py,
        TRANSFORM_ROTATE: gy,
        TRANSFORM_SKEW: hy,
        STYLE_SIZE: Ey,
        STYLE_FILTER: vy,
        STYLE_FONT_VARIATION: yy,
      } = xe),
        (Ei = { [dy]: !0, [py]: !0, [gy]: !0, [hy]: !0, [Ey]: !0, [vy]: !0, [yy]: !0 });
    });
  var Te = {};
  Le(Te, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => My,
    IX2_ANIMATION_FRAME_CHANGED: () => Ry,
    IX2_CLEAR_REQUESTED: () => Sy,
    IX2_ELEMENT_STATE_CHANGED: () => Dy,
    IX2_EVENT_LISTENER_ADDED: () => Oy,
    IX2_EVENT_STATE_CHANGED: () => xy,
    IX2_INSTANCE_ADDED: () => Py,
    IX2_INSTANCE_REMOVED: () => Ny,
    IX2_INSTANCE_STARTED: () => Ly,
    IX2_MEDIA_QUERIES_DEFINED: () => qy,
    IX2_PARAMETER_CHANGED: () => Cy,
    IX2_PLAYBACK_REQUESTED: () => Ay,
    IX2_PREVIEW_REQUESTED: () => by,
    IX2_RAW_DATA_IMPORTED: () => my,
    IX2_SESSION_INITIALIZED: () => _y,
    IX2_SESSION_STARTED: () => Iy,
    IX2_SESSION_STOPPED: () => Ty,
    IX2_STOP_REQUESTED: () => wy,
    IX2_TEST_FRAME_RENDERED: () => Gy,
    IX2_VIEWPORT_WIDTH_CHANGED: () => Fy,
  });
  var my,
    _y,
    Iy,
    Ty,
    by,
    Ay,
    wy,
    Sy,
    Oy,
    xy,
    Ry,
    Cy,
    Py,
    Ly,
    Ny,
    Dy,
    My,
    Fy,
    qy,
    Gy,
    ls = Ee(() => {
      "use strict";
      (my = "IX2_RAW_DATA_IMPORTED"),
        (_y = "IX2_SESSION_INITIALIZED"),
        (Iy = "IX2_SESSION_STARTED"),
        (Ty = "IX2_SESSION_STOPPED"),
        (by = "IX2_PREVIEW_REQUESTED"),
        (Ay = "IX2_PLAYBACK_REQUESTED"),
        (wy = "IX2_STOP_REQUESTED"),
        (Sy = "IX2_CLEAR_REQUESTED"),
        (Oy = "IX2_EVENT_LISTENER_ADDED"),
        (xy = "IX2_EVENT_STATE_CHANGED"),
        (Ry = "IX2_ANIMATION_FRAME_CHANGED"),
        (Cy = "IX2_PARAMETER_CHANGED"),
        (Py = "IX2_INSTANCE_ADDED"),
        (Ly = "IX2_INSTANCE_STARTED"),
        (Ny = "IX2_INSTANCE_REMOVED"),
        (Dy = "IX2_ELEMENT_STATE_CHANGED"),
        (My = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (Fy = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (qy = "IX2_MEDIA_QUERIES_DEFINED"),
        (Gy = "IX2_TEST_FRAME_RENDERED");
    });
  var we = {};
  Le(we, {
    ABSTRACT_NODE: () => Fm,
    AUTO: () => wm,
    BACKGROUND: () => mm,
    BACKGROUND_COLOR: () => ym,
    BAR_DELIMITER: () => xm,
    BORDER_COLOR: () => _m,
    BOUNDARY_SELECTOR: () => By,
    CHILDREN: () => Rm,
    COLON_DELIMITER: () => Om,
    COLOR: () => Im,
    COMMA_DELIMITER: () => Sm,
    CONFIG_UNIT: () => Qy,
    CONFIG_VALUE: () => Ky,
    CONFIG_X_UNIT: () => jy,
    CONFIG_X_VALUE: () => Hy,
    CONFIG_Y_UNIT: () => Yy,
    CONFIG_Y_VALUE: () => Wy,
    CONFIG_Z_UNIT: () => $y,
    CONFIG_Z_VALUE: () => zy,
    DISPLAY: () => Tm,
    FILTER: () => gm,
    FLEX: () => bm,
    FONT_VARIATION_SETTINGS: () => hm,
    HEIGHT: () => vm,
    HTML_ELEMENT: () => Dm,
    IMMEDIATE_CHILDREN: () => Cm,
    IX2_ID_DELIMITER: () => ky,
    OPACITY: () => pm,
    PARENT: () => Lm,
    PLAIN_OBJECT: () => Mm,
    PRESERVE_3D: () => Nm,
    RENDER_GENERAL: () => Gm,
    RENDER_PLUGIN: () => Xm,
    RENDER_STYLE: () => km,
    RENDER_TRANSFORM: () => qm,
    ROTATE_X: () => sm,
    ROTATE_Y: () => um,
    ROTATE_Z: () => cm,
    SCALE_3D: () => am,
    SCALE_X: () => rm,
    SCALE_Y: () => im,
    SCALE_Z: () => om,
    SIBLINGS: () => Pm,
    SKEW: () => lm,
    SKEW_X: () => fm,
    SKEW_Y: () => dm,
    TRANSFORM: () => Zy,
    TRANSLATE_3D: () => nm,
    TRANSLATE_X: () => Jy,
    TRANSLATE_Y: () => em,
    TRANSLATE_Z: () => tm,
    WF_PAGE: () => Xy,
    WIDTH: () => Em,
    WILL_CHANGE: () => Am,
    W_MOD_IX: () => Uy,
    W_MOD_JS: () => Vy,
  });
  var ky,
    Xy,
    Vy,
    Uy,
    By,
    Hy,
    Wy,
    zy,
    Ky,
    jy,
    Yy,
    $y,
    Qy,
    Zy,
    Jy,
    em,
    tm,
    nm,
    rm,
    im,
    om,
    am,
    sm,
    um,
    cm,
    lm,
    fm,
    dm,
    pm,
    gm,
    hm,
    Em,
    vm,
    ym,
    mm,
    _m,
    Im,
    Tm,
    bm,
    Am,
    wm,
    Sm,
    Om,
    xm,
    Rm,
    Cm,
    Pm,
    Lm,
    Nm,
    Dm,
    Mm,
    Fm,
    qm,
    Gm,
    km,
    Xm,
    fs = Ee(() => {
      "use strict";
      (ky = "|"),
        (Xy = "data-wf-page"),
        (Vy = "w-mod-js"),
        (Uy = "w-mod-ix"),
        (By = ".w-dyn-item"),
        (Hy = "xValue"),
        (Wy = "yValue"),
        (zy = "zValue"),
        (Ky = "value"),
        (jy = "xUnit"),
        (Yy = "yUnit"),
        ($y = "zUnit"),
        (Qy = "unit"),
        (Zy = "transform"),
        (Jy = "translateX"),
        (em = "translateY"),
        (tm = "translateZ"),
        (nm = "translate3d"),
        (rm = "scaleX"),
        (im = "scaleY"),
        (om = "scaleZ"),
        (am = "scale3d"),
        (sm = "rotateX"),
        (um = "rotateY"),
        (cm = "rotateZ"),
        (lm = "skew"),
        (fm = "skewX"),
        (dm = "skewY"),
        (pm = "opacity"),
        (gm = "filter"),
        (hm = "font-variation-settings"),
        (Em = "width"),
        (vm = "height"),
        (ym = "backgroundColor"),
        (mm = "background"),
        (_m = "borderColor"),
        (Im = "color"),
        (Tm = "display"),
        (bm = "flex"),
        (Am = "willChange"),
        (wm = "AUTO"),
        (Sm = ","),
        (Om = ":"),
        (xm = "|"),
        (Rm = "CHILDREN"),
        (Cm = "IMMEDIATE_CHILDREN"),
        (Pm = "SIBLINGS"),
        (Lm = "PARENT"),
        (Nm = "preserve-3d"),
        (Dm = "HTML_ELEMENT"),
        (Mm = "PLAIN_OBJECT"),
        (Fm = "ABSTRACT_NODE"),
        (qm = "RENDER_TRANSFORM"),
        (Gm = "RENDER_GENERAL"),
        (km = "RENDER_STYLE"),
        (Xm = "RENDER_PLUGIN");
    });
  var ds = {};
  Le(ds, {
    ActionAppliesTo: () => ly,
    ActionTypeConsts: () => xe,
    EventAppliesTo: () => gi,
    EventBasedOn: () => $e,
    EventContinuousMouseAxes: () => sy,
    EventLimitAffectedElements: () => uy,
    EventTypeConsts: () => Be,
    IX2EngineActionTypes: () => Te,
    IX2EngineConstants: () => we,
    InteractionTypeConsts: () => fy,
    QuickEffectDirectionConsts: () => cy,
    QuickEffectIds: () => qn,
    ReducedMotionTypes: () => Ei,
  });
  var Ne = Ee(() => {
    "use strict";
    hi();
    Gn();
    us();
    cs();
    ls();
    fs();
    Gn();
    hi();
  });
  var Vm,
    ps,
    gs = Ee(() => {
      "use strict";
      Ne();
      ({ IX2_RAW_DATA_IMPORTED: Vm } = Te),
        (ps = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case Vm:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Rt = f((me) => {
    "use strict";
    Object.defineProperty(me, "__esModule", { value: !0 });
    var Um =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    me.clone = Xn;
    me.addLast = vs;
    me.addFirst = ys;
    me.removeLast = ms;
    me.removeFirst = _s;
    me.insert = Is;
    me.removeAt = Ts;
    me.replaceAt = bs;
    me.getIn = Vn;
    me.set = Un;
    me.setIn = Bn;
    me.update = ws;
    me.updateIn = Ss;
    me.merge = Os;
    me.mergeDeep = xs;
    me.mergeIn = Rs;
    me.omit = Cs;
    me.addDefaults = Ps;
    var hs = "INVALID_ARGS";
    function Es(e) {
      throw new Error(e);
    }
    function vi(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t;
    }
    var Bm = {}.hasOwnProperty;
    function Xn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = vi(e), n = {}, r = 0; r < t.length; r++) {
        var i = t[r];
        n[i] = e[i];
      }
      return n;
    }
    function De(e, t, n) {
      var r = n;
      r == null && Es(hs);
      for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++)
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var l = a[u];
        if (l != null) {
          var v = vi(l);
          if (v.length)
            for (var p = 0; p <= v.length; p++) {
              var d = v[p];
              if (!(e && r[d] !== void 0)) {
                var E = l[d];
                t && kn(r[d]) && kn(E) && (E = De(e, t, r[d], E)),
                  !(E === void 0 || E === r[d]) && (i || ((i = !0), (r = Xn(r))), (r[d] = E));
              }
            }
        }
      }
      return r;
    }
    function kn(e) {
      var t = typeof e > "u" ? "undefined" : Um(e);
      return e != null && (t === "object" || t === "function");
    }
    function vs(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function ys(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function ms(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function _s(e) {
      return e.length ? e.slice(1) : e;
    }
    function Is(e, t, n) {
      return e
        .slice(0, t)
        .concat(Array.isArray(n) ? n : [n])
        .concat(e.slice(t));
    }
    function Ts(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function bs(e, t, n) {
      if (e[t] === n) return e;
      for (var r = e.length, i = Array(r), o = 0; o < r; o++) i[o] = e[o];
      return (i[t] = n), i;
    }
    function Vn(e, t) {
      if ((!Array.isArray(t) && Es(hs), e != null)) {
        for (var n = e, r = 0; r < t.length; r++) {
          var i = t[r];
          if (((n = n?.[i]), n === void 0)) return n;
        }
        return n;
      }
    }
    function Un(e, t, n) {
      var r = typeof t == "number" ? [] : {},
        i = e ?? r;
      if (i[t] === n) return i;
      var o = Xn(i);
      return (o[t] = n), o;
    }
    function As(e, t, n, r) {
      var i = void 0,
        o = t[r];
      if (r === t.length - 1) i = n;
      else {
        var a = kn(e) && kn(e[o]) ? e[o] : typeof t[r + 1] == "number" ? [] : {};
        i = As(a, t, n, r + 1);
      }
      return Un(e, o, i);
    }
    function Bn(e, t, n) {
      return t.length ? As(e, t, n, 0) : n;
    }
    function ws(e, t, n) {
      var r = e?.[t],
        i = n(r);
      return Un(e, t, i);
    }
    function Ss(e, t, n) {
      var r = Vn(e, t),
        i = n(r);
      return Bn(e, t, i);
    }
    function Os(e, t, n, r, i, o) {
      for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
        s[u - 6] = arguments[u];
      return s.length
        ? De.call.apply(De, [null, !1, !1, e, t, n, r, i, o].concat(s))
        : De(!1, !1, e, t, n, r, i, o);
    }
    function xs(e, t, n, r, i, o) {
      for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
        s[u - 6] = arguments[u];
      return s.length
        ? De.call.apply(De, [null, !1, !0, e, t, n, r, i, o].concat(s))
        : De(!1, !0, e, t, n, r, i, o);
    }
    function Rs(e, t, n, r, i, o, a) {
      var s = Vn(e, t);
      s == null && (s = {});
      for (var u = void 0, l = arguments.length, v = Array(l > 7 ? l - 7 : 0), p = 7; p < l; p++)
        v[p - 7] = arguments[p];
      return (
        v.length
          ? (u = De.call.apply(De, [null, !1, !1, s, n, r, i, o, a].concat(v)))
          : (u = De(!1, !1, s, n, r, i, o, a)),
        Bn(e, t, u)
      );
    }
    function Cs(e, t) {
      for (var n = Array.isArray(t) ? t : [t], r = !1, i = 0; i < n.length; i++)
        if (Bm.call(e, n[i])) {
          r = !0;
          break;
        }
      if (!r) return e;
      for (var o = {}, a = vi(e), s = 0; s < a.length; s++) {
        var u = a[s];
        n.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Ps(e, t, n, r, i, o) {
      for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
        s[u - 6] = arguments[u];
      return s.length
        ? De.call.apply(De, [null, !0, !1, e, t, n, r, i, o].concat(s))
        : De(!0, !1, e, t, n, r, i, o);
    }
    var Hm = {
      clone: Xn,
      addLast: vs,
      addFirst: ys,
      removeLast: ms,
      removeFirst: _s,
      insert: Is,
      removeAt: Ts,
      replaceAt: bs,
      getIn: Vn,
      set: Un,
      setIn: Bn,
      update: ws,
      updateIn: Ss,
      merge: Os,
      mergeDeep: xs,
      mergeIn: Rs,
      omit: Cs,
      addDefaults: Ps,
    };
    me.default = Hm;
  });
  var Ns,
    Wm,
    zm,
    Km,
    jm,
    Ym,
    Ls,
    Ds,
    Ms = Ee(() => {
      "use strict";
      Ne();
      (Ns = le(Rt())),
        ({
          IX2_PREVIEW_REQUESTED: Wm,
          IX2_PLAYBACK_REQUESTED: zm,
          IX2_STOP_REQUESTED: Km,
          IX2_CLEAR_REQUESTED: jm,
        } = Te),
        (Ym = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Ls = Object.create(null, {
          [Wm]: { value: "preview" },
          [zm]: { value: "playback" },
          [Km]: { value: "stop" },
          [jm]: { value: "clear" },
        })),
        (Ds = (e = Ym, t) => {
          if (t.type in Ls) {
            let n = [Ls[t.type]];
            return (0, Ns.setIn)(e, [n], { ...t.payload });
          }
          return e;
        });
    });
  var Re,
    $m,
    Qm,
    Zm,
    Jm,
    e_,
    t_,
    n_,
    r_,
    i_,
    o_,
    Fs,
    a_,
    qs,
    Gs = Ee(() => {
      "use strict";
      Ne();
      (Re = le(Rt())),
        ({
          IX2_SESSION_INITIALIZED: $m,
          IX2_SESSION_STARTED: Qm,
          IX2_TEST_FRAME_RENDERED: Zm,
          IX2_SESSION_STOPPED: Jm,
          IX2_EVENT_LISTENER_ADDED: e_,
          IX2_EVENT_STATE_CHANGED: t_,
          IX2_ANIMATION_FRAME_CHANGED: n_,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: r_,
          IX2_VIEWPORT_WIDTH_CHANGED: i_,
          IX2_MEDIA_QUERIES_DEFINED: o_,
        } = Te),
        (Fs = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (a_ = 20),
        (qs = (e = Fs, t) => {
          switch (t.type) {
            case $m: {
              let { hasBoundaryNodes: n, reducedMotion: r } = t.payload;
              return (0, Re.merge)(e, { hasBoundaryNodes: n, reducedMotion: r });
            }
            case Qm:
              return (0, Re.set)(e, "active", !0);
            case Zm: {
              let {
                payload: { step: n = a_ },
              } = t;
              return (0, Re.set)(e, "tick", e.tick + n);
            }
            case Jm:
              return Fs;
            case n_: {
              let {
                payload: { now: n },
              } = t;
              return (0, Re.set)(e, "tick", n);
            }
            case e_: {
              let n = (0, Re.addLast)(e.eventListeners, t.payload);
              return (0, Re.set)(e, "eventListeners", n);
            }
            case t_: {
              let { stateKey: n, newState: r } = t.payload;
              return (0, Re.setIn)(e, ["eventState", n], r);
            }
            case r_: {
              let { actionListId: n, isPlaying: r } = t.payload;
              return (0, Re.setIn)(e, ["playbackState", n], r);
            }
            case i_: {
              let { width: n, mediaQueries: r } = t.payload,
                i = r.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: l } = r[a];
                if (n >= u && n <= l) {
                  o = s;
                  break;
                }
              }
              return (0, Re.merge)(e, { viewportWidth: n, mediaQueryKey: o });
            }
            case o_:
              return (0, Re.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Xs = f((f2, ks) => {
    function s_() {
      (this.__data__ = []), (this.size = 0);
    }
    ks.exports = s_;
  });
  var Hn = f((d2, Vs) => {
    function u_(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Vs.exports = u_;
  });
  var nn = f((p2, Us) => {
    var c_ = Hn();
    function l_(e, t) {
      for (var n = e.length; n--; ) if (c_(e[n][0], t)) return n;
      return -1;
    }
    Us.exports = l_;
  });
  var Hs = f((g2, Bs) => {
    var f_ = nn(),
      d_ = Array.prototype,
      p_ = d_.splice;
    function g_(e) {
      var t = this.__data__,
        n = f_(t, e);
      if (n < 0) return !1;
      var r = t.length - 1;
      return n == r ? t.pop() : p_.call(t, n, 1), --this.size, !0;
    }
    Bs.exports = g_;
  });
  var zs = f((h2, Ws) => {
    var h_ = nn();
    function E_(e) {
      var t = this.__data__,
        n = h_(t, e);
      return n < 0 ? void 0 : t[n][1];
    }
    Ws.exports = E_;
  });
  var js = f((E2, Ks) => {
    var v_ = nn();
    function y_(e) {
      return v_(this.__data__, e) > -1;
    }
    Ks.exports = y_;
  });
  var $s = f((v2, Ys) => {
    var m_ = nn();
    function __(e, t) {
      var n = this.__data__,
        r = m_(n, e);
      return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
    }
    Ys.exports = __;
  });
  var rn = f((y2, Qs) => {
    var I_ = Xs(),
      T_ = Hs(),
      b_ = zs(),
      A_ = js(),
      w_ = $s();
    function Ct(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Ct.prototype.clear = I_;
    Ct.prototype.delete = T_;
    Ct.prototype.get = b_;
    Ct.prototype.has = A_;
    Ct.prototype.set = w_;
    Qs.exports = Ct;
  });
  var Js = f((m2, Zs) => {
    var S_ = rn();
    function O_() {
      (this.__data__ = new S_()), (this.size = 0);
    }
    Zs.exports = O_;
  });
  var tu = f((_2, eu) => {
    function x_(e) {
      var t = this.__data__,
        n = t.delete(e);
      return (this.size = t.size), n;
    }
    eu.exports = x_;
  });
  var ru = f((I2, nu) => {
    function R_(e) {
      return this.__data__.get(e);
    }
    nu.exports = R_;
  });
  var ou = f((T2, iu) => {
    function C_(e) {
      return this.__data__.has(e);
    }
    iu.exports = C_;
  });
  var Qe = f((b2, au) => {
    function P_(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    au.exports = P_;
  });
  var yi = f((A2, su) => {
    var L_ = ut(),
      N_ = Qe(),
      D_ = "[object AsyncFunction]",
      M_ = "[object Function]",
      F_ = "[object GeneratorFunction]",
      q_ = "[object Proxy]";
    function G_(e) {
      if (!N_(e)) return !1;
      var t = L_(e);
      return t == M_ || t == F_ || t == D_ || t == q_;
    }
    su.exports = G_;
  });
  var cu = f((w2, uu) => {
    var k_ = Ue(),
      X_ = k_["__core-js_shared__"];
    uu.exports = X_;
  });
  var du = f((S2, fu) => {
    var mi = cu(),
      lu = (function () {
        var e = /[^.]+$/.exec((mi && mi.keys && mi.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function V_(e) {
      return !!lu && lu in e;
    }
    fu.exports = V_;
  });
  var _i = f((O2, pu) => {
    var U_ = Function.prototype,
      B_ = U_.toString;
    function H_(e) {
      if (e != null) {
        try {
          return B_.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    pu.exports = H_;
  });
  var hu = f((x2, gu) => {
    var W_ = yi(),
      z_ = du(),
      K_ = Qe(),
      j_ = _i(),
      Y_ = /[\\^$.*+?()[\]{}|]/g,
      $_ = /^\[object .+?Constructor\]$/,
      Q_ = Function.prototype,
      Z_ = Object.prototype,
      J_ = Q_.toString,
      eI = Z_.hasOwnProperty,
      tI = RegExp(
        "^" +
          J_.call(eI)
            .replace(Y_, "\\$&")
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
          "$"
      );
    function nI(e) {
      if (!K_(e) || z_(e)) return !1;
      var t = W_(e) ? tI : $_;
      return t.test(j_(e));
    }
    gu.exports = nI;
  });
  var vu = f((R2, Eu) => {
    function rI(e, t) {
      return e?.[t];
    }
    Eu.exports = rI;
  });
  var ct = f((C2, yu) => {
    var iI = hu(),
      oI = vu();
    function aI(e, t) {
      var n = oI(e, t);
      return iI(n) ? n : void 0;
    }
    yu.exports = aI;
  });
  var Wn = f((P2, mu) => {
    var sI = ct(),
      uI = Ue(),
      cI = sI(uI, "Map");
    mu.exports = cI;
  });
  var on = f((L2, _u) => {
    var lI = ct(),
      fI = lI(Object, "create");
    _u.exports = fI;
  });
  var bu = f((N2, Tu) => {
    var Iu = on();
    function dI() {
      (this.__data__ = Iu ? Iu(null) : {}), (this.size = 0);
    }
    Tu.exports = dI;
  });
  var wu = f((D2, Au) => {
    function pI(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Au.exports = pI;
  });
  var Ou = f((M2, Su) => {
    var gI = on(),
      hI = "__lodash_hash_undefined__",
      EI = Object.prototype,
      vI = EI.hasOwnProperty;
    function yI(e) {
      var t = this.__data__;
      if (gI) {
        var n = t[e];
        return n === hI ? void 0 : n;
      }
      return vI.call(t, e) ? t[e] : void 0;
    }
    Su.exports = yI;
  });
  var Ru = f((F2, xu) => {
    var mI = on(),
      _I = Object.prototype,
      II = _I.hasOwnProperty;
    function TI(e) {
      var t = this.__data__;
      return mI ? t[e] !== void 0 : II.call(t, e);
    }
    xu.exports = TI;
  });
  var Pu = f((q2, Cu) => {
    var bI = on(),
      AI = "__lodash_hash_undefined__";
    function wI(e, t) {
      var n = this.__data__;
      return (this.size += this.has(e) ? 0 : 1), (n[e] = bI && t === void 0 ? AI : t), this;
    }
    Cu.exports = wI;
  });
  var Nu = f((G2, Lu) => {
    var SI = bu(),
      OI = wu(),
      xI = Ou(),
      RI = Ru(),
      CI = Pu();
    function Pt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Pt.prototype.clear = SI;
    Pt.prototype.delete = OI;
    Pt.prototype.get = xI;
    Pt.prototype.has = RI;
    Pt.prototype.set = CI;
    Lu.exports = Pt;
  });
  var Fu = f((k2, Mu) => {
    var Du = Nu(),
      PI = rn(),
      LI = Wn();
    function NI() {
      (this.size = 0),
        (this.__data__ = { hash: new Du(), map: new (LI || PI)(), string: new Du() });
    }
    Mu.exports = NI;
  });
  var Gu = f((X2, qu) => {
    function DI(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    qu.exports = DI;
  });
  var an = f((V2, ku) => {
    var MI = Gu();
    function FI(e, t) {
      var n = e.__data__;
      return MI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
    }
    ku.exports = FI;
  });
  var Vu = f((U2, Xu) => {
    var qI = an();
    function GI(e) {
      var t = qI(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Xu.exports = GI;
  });
  var Bu = f((B2, Uu) => {
    var kI = an();
    function XI(e) {
      return kI(this, e).get(e);
    }
    Uu.exports = XI;
  });
  var Wu = f((H2, Hu) => {
    var VI = an();
    function UI(e) {
      return VI(this, e).has(e);
    }
    Hu.exports = UI;
  });
  var Ku = f((W2, zu) => {
    var BI = an();
    function HI(e, t) {
      var n = BI(this, e),
        r = n.size;
      return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
    }
    zu.exports = HI;
  });
  var zn = f((z2, ju) => {
    var WI = Fu(),
      zI = Vu(),
      KI = Bu(),
      jI = Wu(),
      YI = Ku();
    function Lt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Lt.prototype.clear = WI;
    Lt.prototype.delete = zI;
    Lt.prototype.get = KI;
    Lt.prototype.has = jI;
    Lt.prototype.set = YI;
    ju.exports = Lt;
  });
  var $u = f((K2, Yu) => {
    var $I = rn(),
      QI = Wn(),
      ZI = zn(),
      JI = 200;
    function eT(e, t) {
      var n = this.__data__;
      if (n instanceof $I) {
        var r = n.__data__;
        if (!QI || r.length < JI - 1) return r.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new ZI(r);
      }
      return n.set(e, t), (this.size = n.size), this;
    }
    Yu.exports = eT;
  });
  var Ii = f((j2, Qu) => {
    var tT = rn(),
      nT = Js(),
      rT = tu(),
      iT = ru(),
      oT = ou(),
      aT = $u();
    function Nt(e) {
      var t = (this.__data__ = new tT(e));
      this.size = t.size;
    }
    Nt.prototype.clear = nT;
    Nt.prototype.delete = rT;
    Nt.prototype.get = iT;
    Nt.prototype.has = oT;
    Nt.prototype.set = aT;
    Qu.exports = Nt;
  });
  var Ju = f((Y2, Zu) => {
    var sT = "__lodash_hash_undefined__";
    function uT(e) {
      return this.__data__.set(e, sT), this;
    }
    Zu.exports = uT;
  });
  var tc = f(($2, ec) => {
    function cT(e) {
      return this.__data__.has(e);
    }
    ec.exports = cT;
  });
  var rc = f((Q2, nc) => {
    var lT = zn(),
      fT = Ju(),
      dT = tc();
    function Kn(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.__data__ = new lT(); ++t < n; ) this.add(e[t]);
    }
    Kn.prototype.add = Kn.prototype.push = fT;
    Kn.prototype.has = dT;
    nc.exports = Kn;
  });
  var oc = f((Z2, ic) => {
    function pT(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length; ++n < r; ) if (t(e[n], n, e)) return !0;
      return !1;
    }
    ic.exports = pT;
  });
  var sc = f((J2, ac) => {
    function gT(e, t) {
      return e.has(t);
    }
    ac.exports = gT;
  });
  var Ti = f((e1, uc) => {
    var hT = rc(),
      ET = oc(),
      vT = sc(),
      yT = 1,
      mT = 2;
    function _T(e, t, n, r, i, o) {
      var a = n & yT,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var l = o.get(e),
        v = o.get(t);
      if (l && v) return l == t && v == e;
      var p = -1,
        d = !0,
        E = n & mT ? new hT() : void 0;
      for (o.set(e, t), o.set(t, e); ++p < s; ) {
        var m = e[p],
          b = t[p];
        if (r) var O = a ? r(b, m, p, t, e, o) : r(m, b, p, e, t, o);
        if (O !== void 0) {
          if (O) continue;
          d = !1;
          break;
        }
        if (E) {
          if (
            !ET(t, function (I, C) {
              if (!vT(E, C) && (m === I || i(m, I, n, r, o))) return E.push(C);
            })
          ) {
            d = !1;
            break;
          }
        } else if (!(m === b || i(m, b, n, r, o))) {
          d = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), d;
    }
    uc.exports = _T;
  });
  var lc = f((t1, cc) => {
    var IT = Ue(),
      TT = IT.Uint8Array;
    cc.exports = TT;
  });
  var dc = f((n1, fc) => {
    function bT(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r, i) {
          n[++t] = [i, r];
        }),
        n
      );
    }
    fc.exports = bT;
  });
  var gc = f((r1, pc) => {
    function AT(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r) {
          n[++t] = r;
        }),
        n
      );
    }
    pc.exports = AT;
  });
  var mc = f((i1, yc) => {
    var hc = St(),
      Ec = lc(),
      wT = Hn(),
      ST = Ti(),
      OT = dc(),
      xT = gc(),
      RT = 1,
      CT = 2,
      PT = "[object Boolean]",
      LT = "[object Date]",
      NT = "[object Error]",
      DT = "[object Map]",
      MT = "[object Number]",
      FT = "[object RegExp]",
      qT = "[object Set]",
      GT = "[object String]",
      kT = "[object Symbol]",
      XT = "[object ArrayBuffer]",
      VT = "[object DataView]",
      vc = hc ? hc.prototype : void 0,
      bi = vc ? vc.valueOf : void 0;
    function UT(e, t, n, r, i, o, a) {
      switch (n) {
        case VT:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
          (e = e.buffer), (t = t.buffer);
        case XT:
          return !(e.byteLength != t.byteLength || !o(new Ec(e), new Ec(t)));
        case PT:
        case LT:
        case MT:
          return wT(+e, +t);
        case NT:
          return e.name == t.name && e.message == t.message;
        case FT:
        case GT:
          return e == t + "";
        case DT:
          var s = OT;
        case qT:
          var u = r & RT;
          if ((s || (s = xT), e.size != t.size && !u)) return !1;
          var l = a.get(e);
          if (l) return l == t;
          (r |= CT), a.set(e, t);
          var v = ST(s(e), s(t), r, i, o, a);
          return a.delete(e), v;
        case kT:
          if (bi) return bi.call(e) == bi.call(t);
      }
      return !1;
    }
    yc.exports = UT;
  });
  var jn = f((o1, _c) => {
    function BT(e, t) {
      for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
      return e;
    }
    _c.exports = BT;
  });
  var be = f((a1, Ic) => {
    var HT = Array.isArray;
    Ic.exports = HT;
  });
  var Ai = f((s1, Tc) => {
    var WT = jn(),
      zT = be();
    function KT(e, t, n) {
      var r = t(e);
      return zT(e) ? r : WT(r, n(e));
    }
    Tc.exports = KT;
  });
  var Ac = f((u1, bc) => {
    function jT(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
        var a = e[n];
        t(a, n, e) && (o[i++] = a);
      }
      return o;
    }
    bc.exports = jT;
  });
  var wi = f((c1, wc) => {
    function YT() {
      return [];
    }
    wc.exports = YT;
  });
  var Si = f((l1, Oc) => {
    var $T = Ac(),
      QT = wi(),
      ZT = Object.prototype,
      JT = ZT.propertyIsEnumerable,
      Sc = Object.getOwnPropertySymbols,
      eb = Sc
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                $T(Sc(e), function (t) {
                  return JT.call(e, t);
                }));
          }
        : QT;
    Oc.exports = eb;
  });
  var Rc = f((f1, xc) => {
    function tb(e, t) {
      for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
      return r;
    }
    xc.exports = tb;
  });
  var Pc = f((d1, Cc) => {
    var nb = ut(),
      rb = nt(),
      ib = "[object Arguments]";
    function ob(e) {
      return rb(e) && nb(e) == ib;
    }
    Cc.exports = ob;
  });
  var sn = f((p1, Dc) => {
    var Lc = Pc(),
      ab = nt(),
      Nc = Object.prototype,
      sb = Nc.hasOwnProperty,
      ub = Nc.propertyIsEnumerable,
      cb = Lc(
        (function () {
          return arguments;
        })()
      )
        ? Lc
        : function (e) {
            return ab(e) && sb.call(e, "callee") && !ub.call(e, "callee");
          };
    Dc.exports = cb;
  });
  var Fc = f((g1, Mc) => {
    function lb() {
      return !1;
    }
    Mc.exports = lb;
  });
  var Yn = f((un, Dt) => {
    var fb = Ue(),
      db = Fc(),
      kc = typeof un == "object" && un && !un.nodeType && un,
      qc = kc && typeof Dt == "object" && Dt && !Dt.nodeType && Dt,
      pb = qc && qc.exports === kc,
      Gc = pb ? fb.Buffer : void 0,
      gb = Gc ? Gc.isBuffer : void 0,
      hb = gb || db;
    Dt.exports = hb;
  });
  var $n = f((h1, Xc) => {
    var Eb = 9007199254740991,
      vb = /^(?:0|[1-9]\d*)$/;
    function yb(e, t) {
      var n = typeof e;
      return (
        (t = t ?? Eb),
        !!t && (n == "number" || (n != "symbol" && vb.test(e))) && e > -1 && e % 1 == 0 && e < t
      );
    }
    Xc.exports = yb;
  });
  var Qn = f((E1, Vc) => {
    var mb = 9007199254740991;
    function _b(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= mb;
    }
    Vc.exports = _b;
  });
  var Bc = f((v1, Uc) => {
    var Ib = ut(),
      Tb = Qn(),
      bb = nt(),
      Ab = "[object Arguments]",
      wb = "[object Array]",
      Sb = "[object Boolean]",
      Ob = "[object Date]",
      xb = "[object Error]",
      Rb = "[object Function]",
      Cb = "[object Map]",
      Pb = "[object Number]",
      Lb = "[object Object]",
      Nb = "[object RegExp]",
      Db = "[object Set]",
      Mb = "[object String]",
      Fb = "[object WeakMap]",
      qb = "[object ArrayBuffer]",
      Gb = "[object DataView]",
      kb = "[object Float32Array]",
      Xb = "[object Float64Array]",
      Vb = "[object Int8Array]",
      Ub = "[object Int16Array]",
      Bb = "[object Int32Array]",
      Hb = "[object Uint8Array]",
      Wb = "[object Uint8ClampedArray]",
      zb = "[object Uint16Array]",
      Kb = "[object Uint32Array]",
      he = {};
    he[kb] = he[Xb] = he[Vb] = he[Ub] = he[Bb] = he[Hb] = he[Wb] = he[zb] = he[Kb] = !0;
    he[Ab] =
      he[wb] =
      he[qb] =
      he[Sb] =
      he[Gb] =
      he[Ob] =
      he[xb] =
      he[Rb] =
      he[Cb] =
      he[Pb] =
      he[Lb] =
      he[Nb] =
      he[Db] =
      he[Mb] =
      he[Fb] =
        !1;
    function jb(e) {
      return bb(e) && Tb(e.length) && !!he[Ib(e)];
    }
    Uc.exports = jb;
  });
  var Wc = f((y1, Hc) => {
    function Yb(e) {
      return function (t) {
        return e(t);
      };
    }
    Hc.exports = Yb;
  });
  var Kc = f((cn, Mt) => {
    var $b = Zr(),
      zc = typeof cn == "object" && cn && !cn.nodeType && cn,
      ln = zc && typeof Mt == "object" && Mt && !Mt.nodeType && Mt,
      Qb = ln && ln.exports === zc,
      Oi = Qb && $b.process,
      Zb = (function () {
        try {
          var e = ln && ln.require && ln.require("util").types;
          return e || (Oi && Oi.binding && Oi.binding("util"));
        } catch {}
      })();
    Mt.exports = Zb;
  });
  var Zn = f((m1, $c) => {
    var Jb = Bc(),
      eA = Wc(),
      jc = Kc(),
      Yc = jc && jc.isTypedArray,
      tA = Yc ? eA(Yc) : Jb;
    $c.exports = tA;
  });
  var xi = f((_1, Qc) => {
    var nA = Rc(),
      rA = sn(),
      iA = be(),
      oA = Yn(),
      aA = $n(),
      sA = Zn(),
      uA = Object.prototype,
      cA = uA.hasOwnProperty;
    function lA(e, t) {
      var n = iA(e),
        r = !n && rA(e),
        i = !n && !r && oA(e),
        o = !n && !r && !i && sA(e),
        a = n || r || i || o,
        s = a ? nA(e.length, String) : [],
        u = s.length;
      for (var l in e)
        (t || cA.call(e, l)) &&
          !(
            a &&
            (l == "length" ||
              (i && (l == "offset" || l == "parent")) ||
              (o && (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
              aA(l, u))
          ) &&
          s.push(l);
      return s;
    }
    Qc.exports = lA;
  });
  var Jn = f((I1, Zc) => {
    var fA = Object.prototype;
    function dA(e) {
      var t = e && e.constructor,
        n = (typeof t == "function" && t.prototype) || fA;
      return e === n;
    }
    Zc.exports = dA;
  });
  var el = f((T1, Jc) => {
    var pA = Jr(),
      gA = pA(Object.keys, Object);
    Jc.exports = gA;
  });
  var er = f((b1, tl) => {
    var hA = Jn(),
      EA = el(),
      vA = Object.prototype,
      yA = vA.hasOwnProperty;
    function mA(e) {
      if (!hA(e)) return EA(e);
      var t = [];
      for (var n in Object(e)) yA.call(e, n) && n != "constructor" && t.push(n);
      return t;
    }
    tl.exports = mA;
  });
  var vt = f((A1, nl) => {
    var _A = yi(),
      IA = Qn();
    function TA(e) {
      return e != null && IA(e.length) && !_A(e);
    }
    nl.exports = TA;
  });
  var fn = f((w1, rl) => {
    var bA = xi(),
      AA = er(),
      wA = vt();
    function SA(e) {
      return wA(e) ? bA(e) : AA(e);
    }
    rl.exports = SA;
  });
  var ol = f((S1, il) => {
    var OA = Ai(),
      xA = Si(),
      RA = fn();
    function CA(e) {
      return OA(e, RA, xA);
    }
    il.exports = CA;
  });
  var ul = f((O1, sl) => {
    var al = ol(),
      PA = 1,
      LA = Object.prototype,
      NA = LA.hasOwnProperty;
    function DA(e, t, n, r, i, o) {
      var a = n & PA,
        s = al(e),
        u = s.length,
        l = al(t),
        v = l.length;
      if (u != v && !a) return !1;
      for (var p = u; p--; ) {
        var d = s[p];
        if (!(a ? d in t : NA.call(t, d))) return !1;
      }
      var E = o.get(e),
        m = o.get(t);
      if (E && m) return E == t && m == e;
      var b = !0;
      o.set(e, t), o.set(t, e);
      for (var O = a; ++p < u; ) {
        d = s[p];
        var I = e[d],
          C = t[d];
        if (r) var S = a ? r(C, I, d, t, e, o) : r(I, C, d, e, t, o);
        if (!(S === void 0 ? I === C || i(I, C, n, r, o) : S)) {
          b = !1;
          break;
        }
        O || (O = d == "constructor");
      }
      if (b && !O) {
        var D = e.constructor,
          M = t.constructor;
        D != M &&
          "constructor" in e &&
          "constructor" in t &&
          !(typeof D == "function" && D instanceof D && typeof M == "function" && M instanceof M) &&
          (b = !1);
      }
      return o.delete(e), o.delete(t), b;
    }
    sl.exports = DA;
  });
  var ll = f((x1, cl) => {
    var MA = ct(),
      FA = Ue(),
      qA = MA(FA, "DataView");
    cl.exports = qA;
  });
  var dl = f((R1, fl) => {
    var GA = ct(),
      kA = Ue(),
      XA = GA(kA, "Promise");
    fl.exports = XA;
  });
  var gl = f((C1, pl) => {
    var VA = ct(),
      UA = Ue(),
      BA = VA(UA, "Set");
    pl.exports = BA;
  });
  var Ri = f((P1, hl) => {
    var HA = ct(),
      WA = Ue(),
      zA = HA(WA, "WeakMap");
    hl.exports = zA;
  });
  var tr = f((L1, Tl) => {
    var Ci = ll(),
      Pi = Wn(),
      Li = dl(),
      Ni = gl(),
      Di = Ri(),
      Il = ut(),
      Ft = _i(),
      El = "[object Map]",
      KA = "[object Object]",
      vl = "[object Promise]",
      yl = "[object Set]",
      ml = "[object WeakMap]",
      _l = "[object DataView]",
      jA = Ft(Ci),
      YA = Ft(Pi),
      $A = Ft(Li),
      QA = Ft(Ni),
      ZA = Ft(Di),
      yt = Il;
    ((Ci && yt(new Ci(new ArrayBuffer(1))) != _l) ||
      (Pi && yt(new Pi()) != El) ||
      (Li && yt(Li.resolve()) != vl) ||
      (Ni && yt(new Ni()) != yl) ||
      (Di && yt(new Di()) != ml)) &&
      (yt = function (e) {
        var t = Il(e),
          n = t == KA ? e.constructor : void 0,
          r = n ? Ft(n) : "";
        if (r)
          switch (r) {
            case jA:
              return _l;
            case YA:
              return El;
            case $A:
              return vl;
            case QA:
              return yl;
            case ZA:
              return ml;
          }
        return t;
      });
    Tl.exports = yt;
  });
  var Cl = f((N1, Rl) => {
    var Mi = Ii(),
      JA = Ti(),
      e0 = mc(),
      t0 = ul(),
      bl = tr(),
      Al = be(),
      wl = Yn(),
      n0 = Zn(),
      r0 = 1,
      Sl = "[object Arguments]",
      Ol = "[object Array]",
      nr = "[object Object]",
      i0 = Object.prototype,
      xl = i0.hasOwnProperty;
    function o0(e, t, n, r, i, o) {
      var a = Al(e),
        s = Al(t),
        u = a ? Ol : bl(e),
        l = s ? Ol : bl(t);
      (u = u == Sl ? nr : u), (l = l == Sl ? nr : l);
      var v = u == nr,
        p = l == nr,
        d = u == l;
      if (d && wl(e)) {
        if (!wl(t)) return !1;
        (a = !0), (v = !1);
      }
      if (d && !v)
        return o || (o = new Mi()), a || n0(e) ? JA(e, t, n, r, i, o) : e0(e, t, u, n, r, i, o);
      if (!(n & r0)) {
        var E = v && xl.call(e, "__wrapped__"),
          m = p && xl.call(t, "__wrapped__");
        if (E || m) {
          var b = E ? e.value() : e,
            O = m ? t.value() : t;
          return o || (o = new Mi()), i(b, O, n, r, o);
        }
      }
      return d ? (o || (o = new Mi()), t0(e, t, n, r, i, o)) : !1;
    }
    Rl.exports = o0;
  });
  var Fi = f((D1, Nl) => {
    var a0 = Cl(),
      Pl = nt();
    function Ll(e, t, n, r, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Pl(e) && !Pl(t))
        ? e !== e && t !== t
        : a0(e, t, n, r, Ll, i);
    }
    Nl.exports = Ll;
  });
  var Ml = f((M1, Dl) => {
    var s0 = Ii(),
      u0 = Fi(),
      c0 = 1,
      l0 = 2;
    function f0(e, t, n, r) {
      var i = n.length,
        o = i,
        a = !r;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = n[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = n[i];
        var u = s[0],
          l = e[u],
          v = s[1];
        if (a && s[2]) {
          if (l === void 0 && !(u in e)) return !1;
        } else {
          var p = new s0();
          if (r) var d = r(l, v, u, e, t, p);
          if (!(d === void 0 ? u0(v, l, c0 | l0, r, p) : d)) return !1;
        }
      }
      return !0;
    }
    Dl.exports = f0;
  });
  var qi = f((F1, Fl) => {
    var d0 = Qe();
    function p0(e) {
      return e === e && !d0(e);
    }
    Fl.exports = p0;
  });
  var Gl = f((q1, ql) => {
    var g0 = qi(),
      h0 = fn();
    function E0(e) {
      for (var t = h0(e), n = t.length; n--; ) {
        var r = t[n],
          i = e[r];
        t[n] = [r, i, g0(i)];
      }
      return t;
    }
    ql.exports = E0;
  });
  var Gi = f((G1, kl) => {
    function v0(e, t) {
      return function (n) {
        return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
      };
    }
    kl.exports = v0;
  });
  var Vl = f((k1, Xl) => {
    var y0 = Ml(),
      m0 = Gl(),
      _0 = Gi();
    function I0(e) {
      var t = m0(e);
      return t.length == 1 && t[0][2]
        ? _0(t[0][0], t[0][1])
        : function (n) {
            return n === e || y0(n, e, t);
          };
    }
    Xl.exports = I0;
  });
  var dn = f((X1, Ul) => {
    var T0 = ut(),
      b0 = nt(),
      A0 = "[object Symbol]";
    function w0(e) {
      return typeof e == "symbol" || (b0(e) && T0(e) == A0);
    }
    Ul.exports = w0;
  });
  var rr = f((V1, Bl) => {
    var S0 = be(),
      O0 = dn(),
      x0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      R0 = /^\w*$/;
    function C0(e, t) {
      if (S0(e)) return !1;
      var n = typeof e;
      return n == "number" || n == "symbol" || n == "boolean" || e == null || O0(e)
        ? !0
        : R0.test(e) || !x0.test(e) || (t != null && e in Object(t));
    }
    Bl.exports = C0;
  });
  var zl = f((U1, Wl) => {
    var Hl = zn(),
      P0 = "Expected a function";
    function ki(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function")) throw new TypeError(P0);
      var n = function () {
        var r = arguments,
          i = t ? t.apply(this, r) : r[0],
          o = n.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, r);
        return (n.cache = o.set(i, a) || o), a;
      };
      return (n.cache = new (ki.Cache || Hl)()), n;
    }
    ki.Cache = Hl;
    Wl.exports = ki;
  });
  var jl = f((B1, Kl) => {
    var L0 = zl(),
      N0 = 500;
    function D0(e) {
      var t = L0(e, function (r) {
          return n.size === N0 && n.clear(), r;
        }),
        n = t.cache;
      return t;
    }
    Kl.exports = D0;
  });
  var $l = f((H1, Yl) => {
    var M0 = jl(),
      F0 =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      q0 = /\\(\\)?/g,
      G0 = M0(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(F0, function (n, r, i, o) {
            t.push(i ? o.replace(q0, "$1") : r || n);
          }),
          t
        );
      });
    Yl.exports = G0;
  });
  var Xi = f((W1, Ql) => {
    function k0(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; ) i[n] = t(e[n], n, e);
      return i;
    }
    Ql.exports = k0;
  });
  var rf = f((z1, nf) => {
    var Zl = St(),
      X0 = Xi(),
      V0 = be(),
      U0 = dn(),
      B0 = 1 / 0,
      Jl = Zl ? Zl.prototype : void 0,
      ef = Jl ? Jl.toString : void 0;
    function tf(e) {
      if (typeof e == "string") return e;
      if (V0(e)) return X0(e, tf) + "";
      if (U0(e)) return ef ? ef.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -B0 ? "-0" : t;
    }
    nf.exports = tf;
  });
  var af = f((K1, of) => {
    var H0 = rf();
    function W0(e) {
      return e == null ? "" : H0(e);
    }
    of.exports = W0;
  });
  var pn = f((j1, sf) => {
    var z0 = be(),
      K0 = rr(),
      j0 = $l(),
      Y0 = af();
    function $0(e, t) {
      return z0(e) ? e : K0(e, t) ? [e] : j0(Y0(e));
    }
    sf.exports = $0;
  });
  var qt = f((Y1, uf) => {
    var Q0 = dn(),
      Z0 = 1 / 0;
    function J0(e) {
      if (typeof e == "string" || Q0(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -Z0 ? "-0" : t;
    }
    uf.exports = J0;
  });
  var ir = f(($1, cf) => {
    var ew = pn(),
      tw = qt();
    function nw(e, t) {
      t = ew(t, e);
      for (var n = 0, r = t.length; e != null && n < r; ) e = e[tw(t[n++])];
      return n && n == r ? e : void 0;
    }
    cf.exports = nw;
  });
  var or = f((Q1, lf) => {
    var rw = ir();
    function iw(e, t, n) {
      var r = e == null ? void 0 : rw(e, t);
      return r === void 0 ? n : r;
    }
    lf.exports = iw;
  });
  var df = f((Z1, ff) => {
    function ow(e, t) {
      return e != null && t in Object(e);
    }
    ff.exports = ow;
  });
  var gf = f((J1, pf) => {
    var aw = pn(),
      sw = sn(),
      uw = be(),
      cw = $n(),
      lw = Qn(),
      fw = qt();
    function dw(e, t, n) {
      t = aw(t, e);
      for (var r = -1, i = t.length, o = !1; ++r < i; ) {
        var a = fw(t[r]);
        if (!(o = e != null && n(e, a))) break;
        e = e[a];
      }
      return o || ++r != i
        ? o
        : ((i = e == null ? 0 : e.length), !!i && lw(i) && cw(a, i) && (uw(e) || sw(e)));
    }
    pf.exports = dw;
  });
  var Ef = f((eq, hf) => {
    var pw = df(),
      gw = gf();
    function hw(e, t) {
      return e != null && gw(e, t, pw);
    }
    hf.exports = hw;
  });
  var yf = f((tq, vf) => {
    var Ew = Fi(),
      vw = or(),
      yw = Ef(),
      mw = rr(),
      _w = qi(),
      Iw = Gi(),
      Tw = qt(),
      bw = 1,
      Aw = 2;
    function ww(e, t) {
      return mw(e) && _w(t)
        ? Iw(Tw(e), t)
        : function (n) {
            var r = vw(n, e);
            return r === void 0 && r === t ? yw(n, e) : Ew(t, r, bw | Aw);
          };
    }
    vf.exports = ww;
  });
  var ar = f((nq, mf) => {
    function Sw(e) {
      return e;
    }
    mf.exports = Sw;
  });
  var Vi = f((rq, _f) => {
    function Ow(e) {
      return function (t) {
        return t?.[e];
      };
    }
    _f.exports = Ow;
  });
  var Tf = f((iq, If) => {
    var xw = ir();
    function Rw(e) {
      return function (t) {
        return xw(t, e);
      };
    }
    If.exports = Rw;
  });
  var Af = f((oq, bf) => {
    var Cw = Vi(),
      Pw = Tf(),
      Lw = rr(),
      Nw = qt();
    function Dw(e) {
      return Lw(e) ? Cw(Nw(e)) : Pw(e);
    }
    bf.exports = Dw;
  });
  var lt = f((aq, wf) => {
    var Mw = Vl(),
      Fw = yf(),
      qw = ar(),
      Gw = be(),
      kw = Af();
    function Xw(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? qw
        : typeof e == "object"
        ? Gw(e)
          ? Fw(e[0], e[1])
          : Mw(e)
        : kw(e);
    }
    wf.exports = Xw;
  });
  var Ui = f((sq, Sf) => {
    var Vw = lt(),
      Uw = vt(),
      Bw = fn();
    function Hw(e) {
      return function (t, n, r) {
        var i = Object(t);
        if (!Uw(t)) {
          var o = Vw(n, 3);
          (t = Bw(t)),
            (n = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, n, r);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Sf.exports = Hw;
  });
  var Bi = f((uq, Of) => {
    function Ww(e, t, n, r) {
      for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; ) if (t(e[o], o, e)) return o;
      return -1;
    }
    Of.exports = Ww;
  });
  var Rf = f((cq, xf) => {
    var zw = /\s/;
    function Kw(e) {
      for (var t = e.length; t-- && zw.test(e.charAt(t)); );
      return t;
    }
    xf.exports = Kw;
  });
  var Pf = f((lq, Cf) => {
    var jw = Rf(),
      Yw = /^\s+/;
    function $w(e) {
      return e && e.slice(0, jw(e) + 1).replace(Yw, "");
    }
    Cf.exports = $w;
  });
  var sr = f((fq, Df) => {
    var Qw = Pf(),
      Lf = Qe(),
      Zw = dn(),
      Nf = 0 / 0,
      Jw = /^[-+]0x[0-9a-f]+$/i,
      eS = /^0b[01]+$/i,
      tS = /^0o[0-7]+$/i,
      nS = parseInt;
    function rS(e) {
      if (typeof e == "number") return e;
      if (Zw(e)) return Nf;
      if (Lf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Lf(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = Qw(e);
      var n = eS.test(e);
      return n || tS.test(e) ? nS(e.slice(2), n ? 2 : 8) : Jw.test(e) ? Nf : +e;
    }
    Df.exports = rS;
  });
  var qf = f((dq, Ff) => {
    var iS = sr(),
      Mf = 1 / 0,
      oS = 17976931348623157e292;
    function aS(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = iS(e)), e === Mf || e === -Mf)) {
        var t = e < 0 ? -1 : 1;
        return t * oS;
      }
      return e === e ? e : 0;
    }
    Ff.exports = aS;
  });
  var Hi = f((pq, Gf) => {
    var sS = qf();
    function uS(e) {
      var t = sS(e),
        n = t % 1;
      return t === t ? (n ? t - n : t) : 0;
    }
    Gf.exports = uS;
  });
  var Xf = f((gq, kf) => {
    var cS = Bi(),
      lS = lt(),
      fS = Hi(),
      dS = Math.max;
    function pS(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var i = n == null ? 0 : fS(n);
      return i < 0 && (i = dS(r + i, 0)), cS(e, lS(t, 3), i);
    }
    kf.exports = pS;
  });
  var Wi = f((hq, Vf) => {
    var gS = Ui(),
      hS = Xf(),
      ES = gS(hS);
    Vf.exports = ES;
  });
  var Hf = {};
  Le(Hf, {
    ELEMENT_MATCHES: () => vS,
    FLEX_PREFIXED: () => zi,
    IS_BROWSER_ENV: () => He,
    TRANSFORM_PREFIXED: () => ft,
    TRANSFORM_STYLE_PREFIXED: () => cr,
    withBrowser: () => ur,
  });
  var Bf,
    He,
    ur,
    vS,
    zi,
    ft,
    Uf,
    cr,
    lr = Ee(() => {
      "use strict";
      (Bf = le(Wi())),
        (He = typeof window < "u"),
        (ur = (e, t) => (He ? e() : t)),
        (vS = ur(() =>
          (0, Bf.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (zi = ur(() => {
          let e = document.createElement("i"),
            t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
            n = "";
          try {
            let { length: r } = t;
            for (let i = 0; i < r; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return n;
          } catch {
            return n;
          }
        }, "flex")),
        (ft = ur(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              n = "Transform",
              { length: r } = t;
            for (let i = 0; i < r; i++) {
              let o = t[i] + n;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (Uf = ft.split("transform")[0]),
        (cr = Uf ? Uf + "TransformStyle" : "transformStyle");
    });
  var Ki = f((Eq, Yf) => {
    var yS = 4,
      mS = 0.001,
      _S = 1e-7,
      IS = 10,
      gn = 11,
      fr = 1 / (gn - 1),
      TS = typeof Float32Array == "function";
    function Wf(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function zf(e, t) {
      return 3 * t - 6 * e;
    }
    function Kf(e) {
      return 3 * e;
    }
    function dr(e, t, n) {
      return ((Wf(t, n) * e + zf(t, n)) * e + Kf(t)) * e;
    }
    function jf(e, t, n) {
      return 3 * Wf(t, n) * e * e + 2 * zf(t, n) * e + Kf(t);
    }
    function bS(e, t, n, r, i) {
      var o,
        a,
        s = 0;
      do (a = t + (n - t) / 2), (o = dr(a, r, i) - e), o > 0 ? (n = a) : (t = a);
      while (Math.abs(o) > _S && ++s < IS);
      return a;
    }
    function AS(e, t, n, r) {
      for (var i = 0; i < yS; ++i) {
        var o = jf(t, n, r);
        if (o === 0) return t;
        var a = dr(t, n, r) - e;
        t -= a / o;
      }
      return t;
    }
    Yf.exports = function (t, n, r, i) {
      if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = TS ? new Float32Array(gn) : new Array(gn);
      if (t !== n || r !== i) for (var a = 0; a < gn; ++a) o[a] = dr(a * fr, t, r);
      function s(u) {
        for (var l = 0, v = 1, p = gn - 1; v !== p && o[v] <= u; ++v) l += fr;
        --v;
        var d = (u - o[v]) / (o[v + 1] - o[v]),
          E = l + d * fr,
          m = jf(E, t, r);
        return m >= mS ? AS(u, E, t, r) : m === 0 ? E : bS(u, l, l + fr, t, r);
      }
      return function (l) {
        return t === n && r === i ? l : l === 0 ? 0 : l === 1 ? 1 : dr(s(l), n, i);
      };
    };
  });
  var En = {};
  Le(En, {
    bounce: () => aO,
    bouncePast: () => sO,
    ease: () => wS,
    easeIn: () => SS,
    easeInOut: () => xS,
    easeOut: () => OS,
    inBack: () => QS,
    inCirc: () => KS,
    inCubic: () => LS,
    inElastic: () => eO,
    inExpo: () => HS,
    inOutBack: () => JS,
    inOutCirc: () => YS,
    inOutCubic: () => DS,
    inOutElastic: () => nO,
    inOutExpo: () => zS,
    inOutQuad: () => PS,
    inOutQuart: () => qS,
    inOutQuint: () => XS,
    inOutSine: () => BS,
    inQuad: () => RS,
    inQuart: () => MS,
    inQuint: () => GS,
    inSine: () => VS,
    outBack: () => ZS,
    outBounce: () => $S,
    outCirc: () => jS,
    outCubic: () => NS,
    outElastic: () => tO,
    outExpo: () => WS,
    outQuad: () => CS,
    outQuart: () => FS,
    outQuint: () => kS,
    outSine: () => US,
    swingFrom: () => iO,
    swingFromTo: () => rO,
    swingTo: () => oO,
  });
  function RS(e) {
    return Math.pow(e, 2);
  }
  function CS(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function PS(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function LS(e) {
    return Math.pow(e, 3);
  }
  function NS(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function DS(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 3) : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function MS(e) {
    return Math.pow(e, 4);
  }
  function FS(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function qS(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 4) : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function GS(e) {
    return Math.pow(e, 5);
  }
  function kS(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function XS(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 5) : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function VS(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function US(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function BS(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function HS(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function WS(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function zS(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function KS(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function jS(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function YS(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function $S(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function QS(e) {
    let t = rt;
    return e * e * ((t + 1) * e - t);
  }
  function ZS(e) {
    let t = rt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function JS(e) {
    let t = rt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function eO(e) {
    let t = rt,
      n = 0,
      r = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (n || (n = 0.3),
        r < 1 ? ((r = 1), (t = n / 4)) : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
        -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / n)));
  }
  function tO(e) {
    let t = rt,
      n = 0,
      r = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (n || (n = 0.3),
        r < 1 ? ((r = 1), (t = n / 4)) : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
        r * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / n) + 1);
  }
  function nO(e) {
    let t = rt,
      n = 0,
      r = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (n || (n = 0.3 * 1.5),
        r < 1 ? ((r = 1), (t = n / 4)) : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
        e < 1
          ? -0.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / n))
          : r * Math.pow(2, -10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / n) * 0.5 + 1);
  }
  function rO(e) {
    let t = rt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function iO(e) {
    let t = rt;
    return e * e * ((t + 1) * e - t);
  }
  function oO(e) {
    let t = rt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function aO(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function sO(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var hn,
    rt,
    wS,
    SS,
    OS,
    xS,
    ji = Ee(() => {
      "use strict";
      (hn = le(Ki())),
        (rt = 1.70158),
        (wS = (0, hn.default)(0.25, 0.1, 0.25, 1)),
        (SS = (0, hn.default)(0.42, 0, 1, 1)),
        (OS = (0, hn.default)(0, 0, 0.58, 1)),
        (xS = (0, hn.default)(0.42, 0, 0.58, 1));
    });
  var Qf = {};
  Le(Qf, { applyEasing: () => cO, createBezierEasing: () => uO, optimizeFloat: () => vn });
  function vn(e, t = 5, n = 10) {
    let r = Math.pow(n, t),
      i = Number(Math.round(e * r) / r);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function uO(e) {
    return (0, $f.default)(...e);
  }
  function cO(e, t, n) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : vn(n ? (t > 0 ? n(t) : t) : t > 0 && e && En[e] ? En[e](t) : t);
  }
  var $f,
    Yi = Ee(() => {
      "use strict";
      ji();
      $f = le(Ki());
    });
  var ed = {};
  Le(ed, { createElementState: () => Jf, ixElements: () => bO, mergeActionState: () => $i });
  function Jf(e, t, n, r, i) {
    let o = n === lO ? (0, Gt.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, Gt.mergeIn)(e, [r], { id: r, ref: t, refId: o, refType: n });
  }
  function $i(e, t, n, r, i) {
    let o = wO(i);
    return (0, Gt.mergeIn)(e, [t, TO, n], r, o);
  }
  function wO(e) {
    let { config: t } = e;
    return AO.reduce((n, r) => {
      let i = r[0],
        o = r[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (n[o] = s), n;
    }, {});
  }
  var Gt,
    yq,
    lO,
    mq,
    fO,
    dO,
    pO,
    gO,
    hO,
    EO,
    vO,
    yO,
    mO,
    _O,
    IO,
    Zf,
    TO,
    bO,
    AO,
    td = Ee(() => {
      "use strict";
      Gt = le(Rt());
      Ne();
      ({
        HTML_ELEMENT: yq,
        PLAIN_OBJECT: lO,
        ABSTRACT_NODE: mq,
        CONFIG_X_VALUE: fO,
        CONFIG_Y_VALUE: dO,
        CONFIG_Z_VALUE: pO,
        CONFIG_VALUE: gO,
        CONFIG_X_UNIT: hO,
        CONFIG_Y_UNIT: EO,
        CONFIG_Z_UNIT: vO,
        CONFIG_UNIT: yO,
      } = we),
        ({ IX2_SESSION_STOPPED: mO, IX2_INSTANCE_ADDED: _O, IX2_ELEMENT_STATE_CHANGED: IO } = Te),
        (Zf = {}),
        (TO = "refState"),
        (bO = (e = Zf, t = {}) => {
          switch (t.type) {
            case mO:
              return Zf;
            case _O: {
              let { elementId: n, element: r, origin: i, actionItem: o, refType: a } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (0, Gt.getIn)(u, [n, r]) !== r && (u = Jf(u, r, a, n, o)), $i(u, n, s, i, o);
            }
            case IO: {
              let { elementId: n, actionTypeId: r, current: i, actionItem: o } = t.payload;
              return $i(e, n, r, i, o);
            }
            default:
              return e;
          }
        });
      AO = [
        [fO, hO],
        [dO, EO],
        [pO, vO],
        [gO, yO],
      ];
    });
  var nd = f((Qi) => {
    "use strict";
    Object.defineProperty(Qi, "__esModule", { value: !0 });
    function SO(e, t) {
      for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    SO(Qi, {
      clearPlugin: function () {
        return NO;
      },
      createPluginInstance: function () {
        return PO;
      },
      getPluginConfig: function () {
        return OO;
      },
      getPluginDestination: function () {
        return CO;
      },
      getPluginDuration: function () {
        return xO;
      },
      getPluginOrigin: function () {
        return RO;
      },
      renderPlugin: function () {
        return LO;
      },
    });
    var OO = (e) => e.value,
      xO = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let n = parseFloat(e.getAttribute("data-duration"));
        return n > 0 ? n * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      RO = (e) => e || { value: 0 },
      CO = (e) => ({ value: e.value }),
      PO = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      LO = (e, t, n) => {
        if (!e) return;
        let r = t[n.actionTypeId].value / 100;
        e.goToFrame(e.frames * r);
      },
      NO = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var id = f((Zi) => {
    "use strict";
    Object.defineProperty(Zi, "__esModule", { value: !0 });
    function DO(e, t) {
      for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    DO(Zi, {
      clearPlugin: function () {
        return HO;
      },
      createPluginInstance: function () {
        return UO;
      },
      getPluginConfig: function () {
        return GO;
      },
      getPluginDestination: function () {
        return VO;
      },
      getPluginDuration: function () {
        return kO;
      },
      getPluginOrigin: function () {
        return XO;
      },
      renderPlugin: function () {
        return BO;
      },
    });
    var MO = (e) => document.querySelector(`[data-w-id="${e}"]`),
      FO = () => window.Webflow.require("spline"),
      qO = (e, t) => e.filter((n) => !t.includes(n)),
      GO = (e, t) => e.value[t],
      kO = () => null,
      rd = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      XO = (e, t) => {
        let n = t.config.value,
          r = Object.keys(n);
        if (e) {
          let o = Object.keys(e),
            a = qO(r, o);
          return a.length ? a.reduce((u, l) => ((u[l] = rd[l]), u), e) : e;
        }
        return r.reduce((o, a) => ((o[a] = rd[a]), o), {});
      },
      VO = (e) => e.value,
      UO = (e, t) => {
        let n = t?.config?.target?.pluginElement;
        return n ? MO(n) : null;
      },
      BO = (e, t, n) => {
        let r = FO(),
          i = r.getInstance(e),
          o = n.config.target.objectId,
          a = (s) => {
            if (!s) throw new Error("Invalid spline app passed to renderSpline");
            let u = o && s.findObjectById(o);
            if (!u) return;
            let { PLUGIN_SPLINE: l } = t;
            l.positionX != null && (u.position.x = l.positionX),
              l.positionY != null && (u.position.y = l.positionY),
              l.positionZ != null && (u.position.z = l.positionZ),
              l.rotationX != null && (u.rotation.x = l.rotationX),
              l.rotationY != null && (u.rotation.y = l.rotationY),
              l.rotationZ != null && (u.rotation.z = l.rotationZ),
              l.scaleX != null && (u.scale.x = l.scaleX),
              l.scaleY != null && (u.scale.y = l.scaleY),
              l.scaleZ != null && (u.scale.z = l.scaleZ);
          };
        i ? a(i.spline) : r.setLoadHandler(e, a);
      },
      HO = () => null;
  });
  var od = f((to) => {
    "use strict";
    Object.defineProperty(to, "__esModule", { value: !0 });
    function WO(e, t) {
      for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    WO(to, {
      clearPlugin: function () {
        return ex;
      },
      createPluginInstance: function () {
        return ZO;
      },
      getPluginConfig: function () {
        return jO;
      },
      getPluginDestination: function () {
        return QO;
      },
      getPluginDuration: function () {
        return YO;
      },
      getPluginOrigin: function () {
        return $O;
      },
      renderPlugin: function () {
        return JO;
      },
    });
    var Ji = "--wf-rive-fit",
      eo = "--wf-rive-alignment",
      zO = (e) => document.querySelector(`[data-w-id="${e}"]`),
      KO = () => window.Webflow.require("rive"),
      jO = (e, t) => e.value.inputs[t],
      YO = () => null,
      $O = (e, t) => {
        if (e) return e;
        let n = {},
          { inputs: r = {} } = t.config.value;
        for (let i in r) r[i] == null && (n[i] = 0);
        return n;
      },
      QO = (e) => e.value.inputs ?? {},
      ZO = (e, t) => {
        if ((t.config?.target?.selectorGuids || []).length > 0) return e;
        let r = t?.config?.target?.pluginElement;
        return r ? zO(r) : null;
      },
      JO = (e, { PLUGIN_RIVE: t }, n) => {
        let r = KO(),
          i = r.getInstance(e),
          o = r.rive.StateMachineInputType,
          { name: a, inputs: s = {} } = n.config.value || {};
        function u(l) {
          if (l.loaded) v();
          else {
            let p = () => {
              v(), l?.off("load", p);
            };
            l?.on("load", p);
          }
          function v() {
            let p = l.stateMachineInputs(a);
            if (p != null) {
              if ((l.isPlaying || l.play(a, !1), Ji in s || eo in s)) {
                let d = l.layout,
                  E = s[Ji] ?? d.fit,
                  m = s[eo] ?? d.alignment;
                (E !== d.fit || m !== d.alignment) &&
                  (l.layout = d.copyWith({ fit: E, alignment: m }));
              }
              for (let d in s) {
                if (d === Ji || d === eo) continue;
                let E = p.find((m) => m.name === d);
                if (E != null)
                  switch (E.type) {
                    case o.Boolean: {
                      if (s[d] != null) {
                        let m = !!s[d];
                        E.value = m;
                      }
                      break;
                    }
                    case o.Number: {
                      let m = t[d];
                      m != null && (E.value = m);
                      break;
                    }
                    case o.Trigger: {
                      s[d] && E.fire();
                      break;
                    }
                  }
              }
            }
          }
        }
        i?.rive ? u(i.rive) : r.setLoadHandler(e, u);
      },
      ex = (e, t) => null;
  });
  var ro = f((no) => {
    "use strict";
    Object.defineProperty(no, "__esModule", { value: !0 });
    Object.defineProperty(no, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return tx;
      },
    });
    var ad = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function tx(e) {
      let t,
        n,
        r,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof ad[o] == "string" ? ad[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3 || u.length === 4
          ? ((t = parseInt(u[0] + u[0], 16)),
            (n = parseInt(u[1] + u[1], 16)),
            (r = parseInt(u[2] + u[2], 16)),
            u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255))
          : (u.length === 6 || u.length === 8) &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (n = parseInt(u.substring(2, 4), 16)),
            (r = parseInt(u.substring(4, 6), 16)),
            u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (n = parseInt(u[1], 10)),
          (r = parseInt(u[2], 10)),
          (i = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)), (n = parseInt(u[1], 10)), (r = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          v = parseFloat(u[1].replace("%", "")) / 100,
          p = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let d = (1 - Math.abs(2 * p - 1)) * v,
          E = d * (1 - Math.abs(((l / 60) % 2) - 1)),
          m = p - d / 2,
          b,
          O,
          I;
        l >= 0 && l < 60
          ? ((b = d), (O = E), (I = 0))
          : l >= 60 && l < 120
          ? ((b = E), (O = d), (I = 0))
          : l >= 120 && l < 180
          ? ((b = 0), (O = d), (I = E))
          : l >= 180 && l < 240
          ? ((b = 0), (O = E), (I = d))
          : l >= 240 && l < 300
          ? ((b = E), (O = 0), (I = d))
          : ((b = d), (O = 0), (I = E)),
          (t = Math.round((b + m) * 255)),
          (n = Math.round((O + m) * 255)),
          (r = Math.round((I + m) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          v = parseFloat(u[1].replace("%", "")) / 100,
          p = parseFloat(u[2].replace("%", "")) / 100,
          d = (1 - Math.abs(2 * p - 1)) * v,
          E = d * (1 - Math.abs(((l / 60) % 2) - 1)),
          m = p - d / 2,
          b,
          O,
          I;
        l >= 0 && l < 60
          ? ((b = d), (O = E), (I = 0))
          : l >= 60 && l < 120
          ? ((b = E), (O = d), (I = 0))
          : l >= 120 && l < 180
          ? ((b = 0), (O = d), (I = E))
          : l >= 180 && l < 240
          ? ((b = 0), (O = E), (I = d))
          : l >= 240 && l < 300
          ? ((b = E), (O = 0), (I = d))
          : ((b = d), (O = 0), (I = E)),
          (t = Math.round((b + m) * 255)),
          (n = Math.round((O + m) * 255)),
          (r = Math.round((I + m) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r))
        throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
      return { red: t, green: n, blue: r, alpha: i };
    }
  });
  var sd = f((io) => {
    "use strict";
    Object.defineProperty(io, "__esModule", { value: !0 });
    function nx(e, t) {
      for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    nx(io, {
      clearPlugin: function () {
        return lx;
      },
      createPluginInstance: function () {
        return ux;
      },
      getPluginConfig: function () {
        return ix;
      },
      getPluginDestination: function () {
        return sx;
      },
      getPluginDuration: function () {
        return ox;
      },
      getPluginOrigin: function () {
        return ax;
      },
      renderPlugin: function () {
        return cx;
      },
    });
    var rx = ro(),
      ix = (e, t) => e.value[t],
      ox = () => null,
      ax = (e, t) => {
        if (e) return e;
        let n = t.config.value,
          r = t.config.target.objectId,
          i = getComputedStyle(document.documentElement).getPropertyValue(r);
        if (n.size != null) return { size: parseInt(i, 10) };
        if (n.red != null && n.green != null && n.blue != null) return (0, rx.normalizeColor)(i);
      },
      sx = (e) => e.value,
      ux = () => null,
      cx = (e, t, n) => {
        let r = n.config.target.objectId,
          i = n.config.value.unit,
          { PLUGIN_VARIABLE: o } = t,
          { size: a, red: s, green: u, blue: l, alpha: v } = o,
          p;
        a != null && (p = a + i),
          s != null && l != null && u != null && v != null && (p = `rgba(${s}, ${u}, ${l}, ${v})`),
          p != null && document.documentElement.style.setProperty(r, p);
      },
      lx = (e, t) => {
        let n = t.config.target.objectId;
        document.documentElement.style.removeProperty(n);
      };
  });
  var cd = f((oo) => {
    "use strict";
    Object.defineProperty(oo, "__esModule", { value: !0 });
    Object.defineProperty(oo, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return hx;
      },
    });
    var pr = (Ne(), Ke(ds)),
      fx = gr(nd()),
      dx = gr(id()),
      px = gr(od()),
      gx = gr(sd());
    function ud(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (ud = function (r) {
        return r ? n : t;
      })(e);
    }
    function gr(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function")) return { default: e };
      var n = ud(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = e[o]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var hx = new Map([
      [pr.ActionTypeConsts.PLUGIN_LOTTIE, { ...fx }],
      [pr.ActionTypeConsts.PLUGIN_SPLINE, { ...dx }],
      [pr.ActionTypeConsts.PLUGIN_RIVE, { ...px }],
      [pr.ActionTypeConsts.PLUGIN_VARIABLE, { ...gx }],
    ]);
  });
  var ld = {};
  Le(ld, {
    clearPlugin: () => fo,
    createPluginInstance: () => vx,
    getPluginConfig: () => so,
    getPluginDestination: () => co,
    getPluginDuration: () => Ex,
    getPluginOrigin: () => uo,
    isPluginType: () => mt,
    renderPlugin: () => lo,
  });
  function mt(e) {
    return ao.pluginMethodMap.has(e);
  }
  var ao,
    _t,
    so,
    uo,
    Ex,
    co,
    vx,
    lo,
    fo,
    po = Ee(() => {
      "use strict";
      lr();
      ao = le(cd());
      (_t = (e) => (t) => {
        if (!He) return () => null;
        let n = ao.pluginMethodMap.get(t);
        if (!n) throw new Error(`IX2 no plugin configured for: ${t}`);
        let r = n[e];
        if (!r) throw new Error(`IX2 invalid plugin method: ${e}`);
        return r;
      }),
        (so = _t("getPluginConfig")),
        (uo = _t("getPluginOrigin")),
        (Ex = _t("getPluginDuration")),
        (co = _t("getPluginDestination")),
        (vx = _t("createPluginInstance")),
        (lo = _t("renderPlugin")),
        (fo = _t("clearPlugin"));
    });
  var dd = f((Oq, fd) => {
    function yx(e, t) {
      return e == null || e !== e ? t : e;
    }
    fd.exports = yx;
  });
  var gd = f((xq, pd) => {
    function mx(e, t, n, r) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (r && o && (n = e[++i]); ++i < o; ) n = t(n, e[i], i, e);
      return n;
    }
    pd.exports = mx;
  });
  var Ed = f((Rq, hd) => {
    function _x(e) {
      return function (t, n, r) {
        for (var i = -1, o = Object(t), a = r(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (n(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    hd.exports = _x;
  });
  var yd = f((Cq, vd) => {
    var Ix = Ed(),
      Tx = Ix();
    vd.exports = Tx;
  });
  var go = f((Pq, md) => {
    var bx = yd(),
      Ax = fn();
    function wx(e, t) {
      return e && bx(e, t, Ax);
    }
    md.exports = wx;
  });
  var Id = f((Lq, _d) => {
    var Sx = vt();
    function Ox(e, t) {
      return function (n, r) {
        if (n == null) return n;
        if (!Sx(n)) return e(n, r);
        for (
          var i = n.length, o = t ? i : -1, a = Object(n);
          (t ? o-- : ++o < i) && r(a[o], o, a) !== !1;

        );
        return n;
      };
    }
    _d.exports = Ox;
  });
  var ho = f((Nq, Td) => {
    var xx = go(),
      Rx = Id(),
      Cx = Rx(xx);
    Td.exports = Cx;
  });
  var Ad = f((Dq, bd) => {
    function Px(e, t, n, r, i) {
      return (
        i(e, function (o, a, s) {
          n = r ? ((r = !1), o) : t(n, o, a, s);
        }),
        n
      );
    }
    bd.exports = Px;
  });
  var Sd = f((Mq, wd) => {
    var Lx = gd(),
      Nx = ho(),
      Dx = lt(),
      Mx = Ad(),
      Fx = be();
    function qx(e, t, n) {
      var r = Fx(e) ? Lx : Mx,
        i = arguments.length < 3;
      return r(e, Dx(t, 4), n, i, Nx);
    }
    wd.exports = qx;
  });
  var xd = f((Fq, Od) => {
    var Gx = Bi(),
      kx = lt(),
      Xx = Hi(),
      Vx = Math.max,
      Ux = Math.min;
    function Bx(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var i = r - 1;
      return (
        n !== void 0 && ((i = Xx(n)), (i = n < 0 ? Vx(r + i, 0) : Ux(i, r - 1))),
        Gx(e, kx(t, 3), i, !0)
      );
    }
    Od.exports = Bx;
  });
  var Cd = f((qq, Rd) => {
    var Hx = Ui(),
      Wx = xd(),
      zx = Hx(Wx);
    Rd.exports = zx;
  });
  function Pd(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function Kx(e, t) {
    if (Pd(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    let n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let i = 0; i < n.length; i++)
      if (!Object.hasOwn(t, n[i]) || !Pd(e[n[i]], t[n[i]])) return !1;
    return !0;
  }
  var Eo,
    Ld = Ee(() => {
      "use strict";
      Eo = Kx;
    });
  var $d = {};
  Le($d, {
    cleanupHTMLElement: () => HR,
    clearAllStyles: () => BR,
    clearObjectCache: () => lR,
    getActionListProgress: () => zR,
    getAffectedElements: () => Io,
    getComputedStyle: () => yR,
    getDestinationValues: () => wR,
    getElementId: () => gR,
    getInstanceId: () => dR,
    getInstanceOrigin: () => IR,
    getItemConfigByKey: () => AR,
    getMaxDurationItemIndex: () => Yd,
    getNamespacedParameterId: () => YR,
    getRenderType: () => zd,
    getStyleProp: () => SR,
    mediaQueriesEqual: () => QR,
    observeStore: () => vR,
    reduceListToGroup: () => KR,
    reifyState: () => hR,
    renderHTMLElement: () => OR,
    shallowEqual: () => Eo,
    shouldAllowMediaQuery: () => $R,
    shouldNamespaceEventParameter: () => jR,
    stringifyTarget: () => ZR,
  });
  function lR() {
    hr.clear();
  }
  function dR() {
    return "i" + fR++;
  }
  function gR(e, t) {
    for (let n in e) {
      let r = e[n];
      if (r && r.ref === t) return r.id;
    }
    return "e" + pR++;
  }
  function hR({ events: e, actionLists: t, site: n } = {}) {
    let r = (0, mr.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = n && n.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      { ixData: { events: e, actionLists: t, eventTypeMap: r, mediaQueries: i, mediaQueryKeys: o } }
    );
  }
  function vR({ store: e, select: t, onChange: n, comparator: r = ER }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let l = t(i());
      if (l == null) {
        a();
        return;
      }
      r(l, s) || ((s = l), n(s, e));
    }
    return a;
  }
  function Md(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: n,
        objectId: r,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return { id: n, objectId: r, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s };
    }
    return {};
  }
  function Io({ config: e, event: t, eventTarget: n, elementRoot: r, elementApi: i }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (x, g) =>
          x.concat(
            Io({ config: { target: g }, event: t, eventTarget: n, elementRoot: r, elementApi: i })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: l,
        getSiblingElements: v,
        matchSelector: p,
        elementContains: d,
        isSiblingNode: E,
      } = i,
      { target: m } = e;
    if (!m) return [];
    let {
      id: b,
      objectId: O,
      selector: I,
      selectorGuids: C,
      appliesTo: S,
      useEventTarget: D,
    } = Md(m);
    if (O) return [hr.has(O) ? hr.get(O) : hr.set(O, {}).get(O)];
    if (S === gi.PAGE) {
      let x = a(b);
      return x ? [x] : [];
    }
    let P = (t?.action?.config?.affectedElements ?? {})[b || I] || {},
      H = !!(P.id || P.selector),
      z,
      K,
      Q,
      q = t && s(Md(t.target));
    if (
      (H
        ? ((z = P.limitAffectedElements), (K = q), (Q = s(P)))
        : (K = Q = s({ id: b, selector: I, selectorGuids: C })),
      t && D)
    ) {
      let x = n && (Q || D === !0) ? [n] : u(q);
      if (Q) {
        if (D === sR) return u(Q).filter((g) => x.some((R) => d(g, R)));
        if (D === Nd) return u(Q).filter((g) => x.some((R) => d(R, g)));
        if (D === Dd) return u(Q).filter((g) => x.some((R) => E(R, g)));
      }
      return x;
    }
    return K == null || Q == null
      ? []
      : He && r
      ? u(Q).filter((x) => r.contains(x))
      : z === Nd
      ? u(K, Q)
      : z === aR
      ? l(u(K)).filter(p(Q))
      : z === Dd
      ? v(u(K)).filter(p(Q))
      : u(Q);
  }
  function yR({ element: e, actionItem: t }) {
    if (!He) return {};
    let { actionTypeId: n } = t;
    switch (n) {
      case Bt:
      case Ht:
      case Wt:
      case zt:
      case Ir:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function IR(e, t = {}, n = {}, r, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = r;
    if (mt(a)) return uo(a)(t[a], r);
    switch (r.actionTypeId) {
      case Xt:
      case Vt:
      case Ut:
      case In:
        return t[r.actionTypeId] || To[r.actionTypeId];
      case Tn:
        return mR(t[r.actionTypeId], r.config.filters);
      case bn:
        return _R(t[r.actionTypeId], r.config.fontVariations);
      case Bd:
        return { value: (0, it.default)(parseFloat(o(e, vr)), 1) };
      case Bt: {
        let s = o(e, Ze),
          u = o(e, Je),
          l,
          v;
        return (
          r.config.widthUnit === dt
            ? (l = Fd.test(s) ? parseFloat(s) : parseFloat(n.width))
            : (l = (0, it.default)(parseFloat(s), parseFloat(n.width))),
          r.config.heightUnit === dt
            ? (v = Fd.test(u) ? parseFloat(u) : parseFloat(n.height))
            : (v = (0, it.default)(parseFloat(u), parseFloat(n.height))),
          { widthValue: l, heightValue: v }
        );
      }
      case Ht:
      case Wt:
      case zt:
        return XR({ element: e, actionTypeId: r.actionTypeId, computedStyle: n, getStyle: o });
      case Ir:
        return { value: (0, it.default)(o(e, yr), n.display) };
      case cR:
        return t[r.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function wR({ element: e, actionItem: t, elementApi: n }) {
    if (mt(t.actionTypeId)) return co(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case Xt:
      case Vt:
      case Ut:
      case In: {
        let { xValue: r, yValue: i, zValue: o } = t.config;
        return { xValue: r, yValue: i, zValue: o };
      }
      case Bt: {
        let { getStyle: r, setStyle: i, getProperty: o } = n,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: l } = t.config;
        if (!He) return { widthValue: u, heightValue: l };
        if (a === dt) {
          let v = r(e, Ze);
          i(e, Ze, ""), (u = o(e, "offsetWidth")), i(e, Ze, v);
        }
        if (s === dt) {
          let v = r(e, Je);
          i(e, Je, ""), (l = o(e, "offsetHeight")), i(e, Je, v);
        }
        return { widthValue: u, heightValue: l };
      }
      case Ht:
      case Wt:
      case zt: {
        let { rValue: r, gValue: i, bValue: o, aValue: a, globalSwatchId: s } = t.config;
        if (s && s.startsWith("--")) {
          let { getStyle: u } = n,
            l = u(e, s),
            v = (0, kd.normalizeColor)(l);
          return { rValue: v.red, gValue: v.green, bValue: v.blue, aValue: v.alpha };
        }
        return { rValue: r, gValue: i, bValue: o, aValue: a };
      }
      case Tn:
        return t.config.filters.reduce(TR, {});
      case bn:
        return t.config.fontVariations.reduce(bR, {});
      default: {
        let { value: r } = t.config;
        return { value: r };
      }
    }
  }
  function zd(e) {
    if (/^TRANSFORM_/.test(e)) return Vd;
    if (/^STYLE_/.test(e)) return mo;
    if (/^GENERAL_/.test(e)) return yo;
    if (/^PLUGIN_/.test(e)) return Ud;
  }
  function SR(e, t) {
    return e === mo ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function OR(e, t, n, r, i, o, a, s, u) {
    switch (s) {
      case Vd:
        return LR(e, t, n, i, a);
      case mo:
        return VR(e, t, n, i, o, a);
      case yo:
        return UR(e, i, a);
      case Ud: {
        let { actionTypeId: l } = i;
        if (mt(l)) return lo(l)(u, t, i);
      }
    }
  }
  function LR(e, t, n, r, i) {
    let o = PR.map((s) => {
        let u = To[s],
          {
            xValue: l = u.xValue,
            yValue: v = u.yValue,
            zValue: p = u.zValue,
            xUnit: d = "",
            yUnit: E = "",
            zUnit: m = "",
          } = t[s] || {};
        switch (s) {
          case Xt:
            return `${$x}(${l}${d}, ${v}${E}, ${p}${m})`;
          case Vt:
            return `${Qx}(${l}${d}, ${v}${E}, ${p}${m})`;
          case Ut:
            return `${Zx}(${l}${d}) ${Jx}(${v}${E}) ${eR}(${p}${m})`;
          case In:
            return `${tR}(${l}${d}, ${v}${E})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    It(e, ft, i), a(e, ft, o), MR(r, n) && a(e, cr, nR);
  }
  function NR(e, t, n, r) {
    let i = (0, mr.default)(t, (a, s, u) => `${a} ${u}(${s}${CR(u, n)})`, ""),
      { setStyle: o } = r;
    It(e, yn, r), o(e, yn, i);
  }
  function DR(e, t, n, r) {
    let i = (0, mr.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), []).join(", "),
      { setStyle: o } = r;
    It(e, mn, r), o(e, mn, i);
  }
  function MR({ actionTypeId: e }, { xValue: t, yValue: n, zValue: r }) {
    return (
      (e === Xt && r !== void 0) ||
      (e === Vt && r !== void 0) ||
      (e === Ut && (t !== void 0 || n !== void 0))
    );
  }
  function kR(e, t) {
    let n = e.exec(t);
    return n ? n[1] : "";
  }
  function XR({ element: e, actionTypeId: t, computedStyle: n, getStyle: r }) {
    let i = _o[t],
      o = r(e, i),
      a = qR.test(o) ? o : n[i],
      s = kR(GR, a).split(_n);
    return {
      rValue: (0, it.default)(parseInt(s[0], 10), 255),
      gValue: (0, it.default)(parseInt(s[1], 10), 255),
      bValue: (0, it.default)(parseInt(s[2], 10), 255),
      aValue: (0, it.default)(parseFloat(s[3]), 1),
    };
  }
  function VR(e, t, n, r, i, o) {
    let { setStyle: a } = o;
    switch (r.actionTypeId) {
      case Bt: {
        let { widthUnit: s = "", heightUnit: u = "" } = r.config,
          { widthValue: l, heightValue: v } = n;
        l !== void 0 && (s === dt && (s = "px"), It(e, Ze, o), a(e, Ze, l + s)),
          v !== void 0 && (u === dt && (u = "px"), It(e, Je, o), a(e, Je, v + u));
        break;
      }
      case Tn: {
        NR(e, n, r.config, o);
        break;
      }
      case bn: {
        DR(e, n, r.config, o);
        break;
      }
      case Ht:
      case Wt:
      case zt: {
        let s = _o[r.actionTypeId],
          u = Math.round(n.rValue),
          l = Math.round(n.gValue),
          v = Math.round(n.bValue),
          p = n.aValue;
        It(e, s, o), a(e, s, p >= 1 ? `rgb(${u},${l},${v})` : `rgba(${u},${l},${v},${p})`);
        break;
      }
      default: {
        let { unit: s = "" } = r.config;
        It(e, i, o), a(e, i, n.value + s);
        break;
      }
    }
  }
  function UR(e, t, n) {
    let { setStyle: r } = n;
    switch (t.actionTypeId) {
      case Ir: {
        let { value: i } = t.config;
        i === rR && He ? r(e, yr, zi) : r(e, yr, i);
        return;
      }
    }
  }
  function It(e, t, n) {
    if (!He) return;
    let r = Wd[t];
    if (!r) return;
    let { getStyle: i, setStyle: o } = n,
      a = i(e, kt);
    if (!a) {
      o(e, kt, r);
      return;
    }
    let s = a.split(_n).map(Hd);
    s.indexOf(r) === -1 && o(e, kt, s.concat(r).join(_n));
  }
  function Kd(e, t, n) {
    if (!He) return;
    let r = Wd[t];
    if (!r) return;
    let { getStyle: i, setStyle: o } = n,
      a = i(e, kt);
    !a ||
      a.indexOf(r) === -1 ||
      o(
        e,
        kt,
        a
          .split(_n)
          .map(Hd)
          .filter((s) => s !== r)
          .join(_n)
      );
  }
  function BR({ store: e, elementApi: t }) {
    let { ixData: n } = e.getState(),
      { events: r = {}, actionLists: i = {} } = n;
    Object.keys(r).forEach((o) => {
      let a = r[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        l = i[u];
      l && qd({ actionList: l, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        qd({ actionList: i[o], elementApi: t });
      });
  }
  function qd({ actionList: e = {}, event: t, elementApi: n }) {
    let { actionItemGroups: r, continuousParameterGroups: i } = e;
    r &&
      r.forEach((o) => {
        Gd({ actionGroup: o, event: t, elementApi: n });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            Gd({ actionGroup: s, event: t, elementApi: n });
          });
        });
  }
  function Gd({ actionGroup: e, event: t, elementApi: n }) {
    let { actionItems: r } = e;
    r.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      mt(o) ? (s = (u) => fo(o)(u, i)) : (s = jd({ effect: WR, actionTypeId: o, elementApi: n })),
        Io({ config: a, event: t, elementApi: n }).forEach(s);
    });
  }
  function HR(e, t, n) {
    let { setStyle: r, getStyle: i } = n,
      { actionTypeId: o } = t;
    if (o === Bt) {
      let { config: a } = t;
      a.widthUnit === dt && r(e, Ze, ""), a.heightUnit === dt && r(e, Je, "");
    }
    i(e, kt) && jd({ effect: Kd, actionTypeId: o, elementApi: n })(e);
  }
  function WR(e, t, n) {
    let { setStyle: r } = n;
    Kd(e, t, n), r(e, t, ""), t === ft && r(e, cr, "");
  }
  function Yd(e) {
    let t = 0,
      n = 0;
    return (
      e.forEach((r, i) => {
        let { config: o } = r,
          a = o.delay + o.duration;
        a >= t && ((t = a), (n = i));
      }),
      n
    );
  }
  function zR(e, t) {
    let { actionItemGroups: n, useFirstGroupAsInitialState: r } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      n.forEach((u, l) => {
        if (r && l === 0) return;
        let { actionItems: v } = u,
          p = v[Yd(v)],
          { config: d, actionTypeId: E } = p;
        i.id === p.id && (s = a + o);
        let m = zd(E) === yo ? 0 : d.duration;
        a += d.delay + m;
      }),
      a > 0 ? vn(s / a) : 0
    );
  }
  function KR({ actionList: e, actionItemId: t, rawData: n }) {
    let { actionItemGroups: r, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (o.push((0, _r.mergeIn)(s, ["config"], { delay: 0, duration: 0 })), s.id === t);
    return (
      r && r.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: l }) => l.some(a));
        }),
      (0, _r.setIn)(n, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function jR(e, { basedOn: t }) {
    return (
      (e === Be.SCROLLING_IN_VIEW && (t === $e.ELEMENT || t == null)) ||
      (e === Be.MOUSE_MOVE && t === $e.ELEMENT)
    );
  }
  function YR(e, t) {
    return e + uR + t;
  }
  function $R(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function QR(e, t) {
    return Eo(e && e.sort(), t && t.sort());
  }
  function ZR(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + vo + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: n = "", useEventTarget: r = "" } = e;
    return t + vo + n + vo + r;
  }
  var it,
    mr,
    Er,
    _r,
    kd,
    jx,
    Yx,
    $x,
    Qx,
    Zx,
    Jx,
    eR,
    tR,
    nR,
    rR,
    vr,
    yn,
    mn,
    Ze,
    Je,
    Xd,
    iR,
    oR,
    Nd,
    aR,
    Dd,
    sR,
    yr,
    kt,
    dt,
    _n,
    uR,
    vo,
    Vd,
    yo,
    mo,
    Ud,
    Xt,
    Vt,
    Ut,
    In,
    Bd,
    Tn,
    bn,
    Bt,
    Ht,
    Wt,
    zt,
    Ir,
    cR,
    Hd,
    _o,
    Wd,
    hr,
    fR,
    pR,
    ER,
    Fd,
    mR,
    _R,
    TR,
    bR,
    AR,
    To,
    xR,
    RR,
    CR,
    PR,
    FR,
    qR,
    GR,
    jd,
    Qd = Ee(() => {
      "use strict";
      (it = le(dd())), (mr = le(Sd())), (Er = le(Cd())), (_r = le(Rt()));
      Ne();
      Ld();
      Yi();
      kd = le(ro());
      po();
      lr();
      ({
        BACKGROUND: jx,
        TRANSFORM: Yx,
        TRANSLATE_3D: $x,
        SCALE_3D: Qx,
        ROTATE_X: Zx,
        ROTATE_Y: Jx,
        ROTATE_Z: eR,
        SKEW: tR,
        PRESERVE_3D: nR,
        FLEX: rR,
        OPACITY: vr,
        FILTER: yn,
        FONT_VARIATION_SETTINGS: mn,
        WIDTH: Ze,
        HEIGHT: Je,
        BACKGROUND_COLOR: Xd,
        BORDER_COLOR: iR,
        COLOR: oR,
        CHILDREN: Nd,
        IMMEDIATE_CHILDREN: aR,
        SIBLINGS: Dd,
        PARENT: sR,
        DISPLAY: yr,
        WILL_CHANGE: kt,
        AUTO: dt,
        COMMA_DELIMITER: _n,
        COLON_DELIMITER: uR,
        BAR_DELIMITER: vo,
        RENDER_TRANSFORM: Vd,
        RENDER_GENERAL: yo,
        RENDER_STYLE: mo,
        RENDER_PLUGIN: Ud,
      } = we),
        ({
          TRANSFORM_MOVE: Xt,
          TRANSFORM_SCALE: Vt,
          TRANSFORM_ROTATE: Ut,
          TRANSFORM_SKEW: In,
          STYLE_OPACITY: Bd,
          STYLE_FILTER: Tn,
          STYLE_FONT_VARIATION: bn,
          STYLE_SIZE: Bt,
          STYLE_BACKGROUND_COLOR: Ht,
          STYLE_BORDER: Wt,
          STYLE_TEXT_COLOR: zt,
          GENERAL_DISPLAY: Ir,
          OBJECT_VALUE: cR,
        } = xe),
        (Hd = (e) => e.trim()),
        (_o = Object.freeze({ [Ht]: Xd, [Wt]: iR, [zt]: oR })),
        (Wd = Object.freeze({
          [ft]: Yx,
          [Xd]: jx,
          [vr]: vr,
          [yn]: yn,
          [Ze]: Ze,
          [Je]: Je,
          [mn]: mn,
        })),
        (hr = new Map());
      fR = 1;
      pR = 1;
      ER = (e, t) => e === t;
      (Fd = /px/),
        (mR = (e, t) =>
          t.reduce((n, r) => (n[r.type] == null && (n[r.type] = xR[r.type]), n), e || {})),
        (_R = (e, t) =>
          t.reduce(
            (n, r) => (n[r.type] == null && (n[r.type] = RR[r.type] || r.defaultValue || 0), n),
            e || {}
          ));
      (TR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (bR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (AR = (e, t, n) => {
          if (mt(e)) return so(e)(n, t);
          switch (e) {
            case Tn: {
              let r = (0, Er.default)(n.filters, ({ type: i }) => i === t);
              return r ? r.value : 0;
            }
            case bn: {
              let r = (0, Er.default)(n.fontVariations, ({ type: i }) => i === t);
              return r ? r.value : 0;
            }
            default:
              return n[t];
          }
        });
      (To = {
        [Xt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Vt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [Ut]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [In]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (xR = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (RR = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (CR = (e, t) => {
          let n = (0, Er.default)(t.filters, ({ type: r }) => r === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (PR = Object.keys(To));
      (FR = "\\(([^)]+)\\)"), (qR = /^rgb/), (GR = RegExp(`rgba?${FR}`));
      jd =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (r) => {
          switch (t) {
            case Xt:
            case Vt:
            case Ut:
            case In:
              e(r, ft, n);
              break;
            case Tn:
              e(r, yn, n);
              break;
            case bn:
              e(r, mn, n);
              break;
            case Bd:
              e(r, vr, n);
              break;
            case Bt:
              e(r, Ze, n), e(r, Je, n);
              break;
            case Ht:
            case Wt:
            case zt:
              e(r, _o[t], n);
              break;
            case Ir:
              e(r, yr, n);
              break;
          }
        };
    });
  var Tt = f((bo) => {
    "use strict";
    Object.defineProperty(bo, "__esModule", { value: !0 });
    function JR(e, t) {
      for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    JR(bo, {
      IX2BrowserSupport: function () {
        return eC;
      },
      IX2EasingUtils: function () {
        return nC;
      },
      IX2Easings: function () {
        return tC;
      },
      IX2ElementsReducer: function () {
        return rC;
      },
      IX2VanillaPlugins: function () {
        return iC;
      },
      IX2VanillaUtils: function () {
        return oC;
      },
    });
    var eC = Kt((lr(), Ke(Hf))),
      tC = Kt((ji(), Ke(En))),
      nC = Kt((Yi(), Ke(Qf))),
      rC = Kt((td(), Ke(ed))),
      iC = Kt((po(), Ke(ld))),
      oC = Kt((Qd(), Ke($d)));
    function Zd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Zd = function (r) {
        return r ? n : t;
      })(e);
    }
    function Kt(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function")) return { default: e };
      var n = Zd(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = e[o]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
  });
  var br,
    ot,
    aC,
    sC,
    uC,
    cC,
    lC,
    fC,
    Tr,
    Jd,
    dC,
    pC,
    Ao,
    gC,
    hC,
    EC,
    vC,
    ep,
    tp = Ee(() => {
      "use strict";
      Ne();
      (br = le(Tt())),
        (ot = le(Rt())),
        ({
          IX2_RAW_DATA_IMPORTED: aC,
          IX2_SESSION_STOPPED: sC,
          IX2_INSTANCE_ADDED: uC,
          IX2_INSTANCE_STARTED: cC,
          IX2_INSTANCE_REMOVED: lC,
          IX2_ANIMATION_FRAME_CHANGED: fC,
        } = Te),
        ({ optimizeFloat: Tr, applyEasing: Jd, createBezierEasing: dC } = br.IX2EasingUtils),
        ({ RENDER_GENERAL: pC } = we),
        ({ getItemConfigByKey: Ao, getRenderType: gC, getStyleProp: hC } = br.IX2VanillaUtils),
        (EC = (e, t) => {
          let {
              position: n,
              parameterId: r,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: l,
              skipMotion: v,
              skipToValue: p,
            } = e,
            { parameters: d } = t.payload,
            E = Math.max(1 - a, 0.01),
            m = d[r];
          m == null && ((E = 1), (m = s));
          let b = Math.max(m, 0) || 0,
            O = Tr(b - n),
            I = v ? p : Tr(n + O * E),
            C = I * 100;
          if (I === n && e.current) return e;
          let S, D, M, P;
          for (let z = 0, { length: K } = i; z < K; z++) {
            let { keyframe: Q, actionItems: q } = i[z];
            if ((z === 0 && (S = q[0]), C >= Q)) {
              S = q[0];
              let x = i[z + 1],
                g = x && C !== Q;
              (D = g ? x.actionItems[0] : null), g && ((M = Q / 100), (P = (x.keyframe - Q) / 100));
            }
          }
          let H = {};
          if (S && !D)
            for (let z = 0, { length: K } = o; z < K; z++) {
              let Q = o[z];
              H[Q] = Ao(u, Q, S.config);
            }
          else if (S && D && M !== void 0 && P !== void 0) {
            let z = (I - M) / P,
              K = S.config.easing,
              Q = Jd(K, z, l);
            for (let q = 0, { length: x } = o; q < x; q++) {
              let g = o[q],
                R = Ao(u, g, S.config),
                Z = (Ao(u, g, D.config) - R) * Q + R;
              H[g] = Z;
            }
          }
          return (0, ot.merge)(e, { position: I, current: H });
        }),
        (vC = (e, t) => {
          let {
              active: n,
              origin: r,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: l,
              destinationKeys: v,
              pluginDuration: p,
              instanceDelay: d,
              customEasingFn: E,
              skipMotion: m,
            } = e,
            b = u.config.easing,
            { duration: O, delay: I } = u.config;
          p != null && (O = p), (I = d ?? I), a === pC ? (O = 0) : (o || m) && (O = I = 0);
          let { now: C } = t.payload;
          if (n && r) {
            let S = C - (i + I);
            if (s) {
              let z = C - i,
                K = O + I,
                Q = Tr(Math.min(Math.max(0, z / K), 1));
              e = (0, ot.set)(e, "verboseTimeElapsed", K * Q);
            }
            if (S < 0) return e;
            let D = Tr(Math.min(Math.max(0, S / O), 1)),
              M = Jd(b, D, E),
              P = {},
              H = null;
            return (
              v.length &&
                (H = v.reduce((z, K) => {
                  let Q = l[K],
                    q = parseFloat(r[K]) || 0,
                    g = (parseFloat(Q) - q) * M + q;
                  return (z[K] = g), z;
                }, {})),
              (P.current = H),
              (P.position = D),
              D === 1 && ((P.active = !1), (P.complete = !0)),
              (0, ot.merge)(e, P)
            );
          }
          return e;
        }),
        (ep = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case aC:
              return t.payload.ixInstances || Object.freeze({});
            case sC:
              return Object.freeze({});
            case uC: {
              let {
                  instanceId: n,
                  elementId: r,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: l,
                  isCarrier: v,
                  origin: p,
                  destination: d,
                  immediate: E,
                  verbose: m,
                  continuous: b,
                  parameterId: O,
                  actionGroups: I,
                  smoothing: C,
                  restingValue: S,
                  pluginInstance: D,
                  pluginDuration: M,
                  instanceDelay: P,
                  skipMotion: H,
                  skipToValue: z,
                } = t.payload,
                { actionTypeId: K } = i,
                Q = gC(K),
                q = hC(Q, K),
                x = Object.keys(d).filter((R) => d[R] != null && typeof d[R] != "string"),
                { easing: g } = i.config;
              return (0, ot.set)(e, n, {
                id: n,
                elementId: r,
                active: !1,
                position: 0,
                start: 0,
                origin: p,
                destination: d,
                destinationKeys: x,
                immediate: E,
                verbose: m,
                current: null,
                actionItem: i,
                actionTypeId: K,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: l,
                renderType: Q,
                isCarrier: v,
                styleProp: q,
                continuous: b,
                parameterId: O,
                actionGroups: I,
                smoothing: C,
                restingValue: S,
                pluginInstance: D,
                pluginDuration: M,
                instanceDelay: P,
                skipMotion: H,
                skipToValue: z,
                customEasingFn: Array.isArray(g) && g.length === 4 ? dC(g) : void 0,
              });
            }
            case cC: {
              let { instanceId: n, time: r } = t.payload;
              return (0, ot.mergeIn)(e, [n], { active: !0, complete: !1, start: r });
            }
            case lC: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let r = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== n && (r[s] = e[s]);
              }
              return r;
            }
            case fC: {
              let n = e,
                r = Object.keys(e),
                { length: i } = r;
              for (let o = 0; o < i; o++) {
                let a = r[o],
                  s = e[a],
                  u = s.continuous ? EC : vC;
                n = (0, ot.set)(n, a, u(s, t));
              }
              return n;
            }
            default:
              return e;
          }
        });
    });
  var yC,
    mC,
    _C,
    np,
    rp = Ee(() => {
      "use strict";
      Ne();
      ({ IX2_RAW_DATA_IMPORTED: yC, IX2_SESSION_STOPPED: mC, IX2_PARAMETER_CHANGED: _C } = Te),
        (np = (e = {}, t) => {
          switch (t.type) {
            case yC:
              return t.payload.ixParameters || {};
            case mC:
              return {};
            case _C: {
              let { key: n, value: r } = t.payload;
              return (e[n] = r), e;
            }
            default:
              return e;
          }
        });
    });
  var ap = {};
  Le(ap, { default: () => TC });
  var ip,
    op,
    IC,
    TC,
    sp = Ee(() => {
      "use strict";
      ip = le(pi());
      gs();
      Ms();
      Gs();
      op = le(Tt());
      tp();
      rp();
      ({ ixElements: IC } = op.IX2ElementsReducer),
        (TC = (0, ip.combineReducers)({
          ixData: ps,
          ixRequest: Ds,
          ixSession: qs,
          ixElements: IC,
          ixInstances: ep,
          ixParameters: np,
        }));
    });
  var cp = f((tG, up) => {
    var bC = ut(),
      AC = be(),
      wC = nt(),
      SC = "[object String]";
    function OC(e) {
      return typeof e == "string" || (!AC(e) && wC(e) && bC(e) == SC);
    }
    up.exports = OC;
  });
  var fp = f((nG, lp) => {
    var xC = Vi(),
      RC = xC("length");
    lp.exports = RC;
  });
  var pp = f((rG, dp) => {
    var CC = "\\ud800-\\udfff",
      PC = "\\u0300-\\u036f",
      LC = "\\ufe20-\\ufe2f",
      NC = "\\u20d0-\\u20ff",
      DC = PC + LC + NC,
      MC = "\\ufe0e\\ufe0f",
      FC = "\\u200d",
      qC = RegExp("[" + FC + CC + DC + MC + "]");
    function GC(e) {
      return qC.test(e);
    }
    dp.exports = GC;
  });
  var Tp = f((iG, Ip) => {
    var hp = "\\ud800-\\udfff",
      kC = "\\u0300-\\u036f",
      XC = "\\ufe20-\\ufe2f",
      VC = "\\u20d0-\\u20ff",
      UC = kC + XC + VC,
      BC = "\\ufe0e\\ufe0f",
      HC = "[" + hp + "]",
      wo = "[" + UC + "]",
      So = "\\ud83c[\\udffb-\\udfff]",
      WC = "(?:" + wo + "|" + So + ")",
      Ep = "[^" + hp + "]",
      vp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      yp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      zC = "\\u200d",
      mp = WC + "?",
      _p = "[" + BC + "]?",
      KC = "(?:" + zC + "(?:" + [Ep, vp, yp].join("|") + ")" + _p + mp + ")*",
      jC = _p + mp + KC,
      YC = "(?:" + [Ep + wo + "?", wo, vp, yp, HC].join("|") + ")",
      gp = RegExp(So + "(?=" + So + ")|" + YC + jC, "g");
    function $C(e) {
      for (var t = (gp.lastIndex = 0); gp.test(e); ) ++t;
      return t;
    }
    Ip.exports = $C;
  });
  var Ap = f((oG, bp) => {
    var QC = fp(),
      ZC = pp(),
      JC = Tp();
    function eP(e) {
      return ZC(e) ? JC(e) : QC(e);
    }
    bp.exports = eP;
  });
  var Sp = f((aG, wp) => {
    var tP = er(),
      nP = tr(),
      rP = vt(),
      iP = cp(),
      oP = Ap(),
      aP = "[object Map]",
      sP = "[object Set]";
    function uP(e) {
      if (e == null) return 0;
      if (rP(e)) return iP(e) ? oP(e) : e.length;
      var t = nP(e);
      return t == aP || t == sP ? e.size : tP(e).length;
    }
    wp.exports = uP;
  });
  var xp = f((sG, Op) => {
    var cP = "Expected a function";
    function lP(e) {
      if (typeof e != "function") throw new TypeError(cP);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Op.exports = lP;
  });
  var Oo = f((uG, Rp) => {
    var fP = ct(),
      dP = (function () {
        try {
          var e = fP(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Rp.exports = dP;
  });
  var xo = f((cG, Pp) => {
    var Cp = Oo();
    function pP(e, t, n) {
      t == "__proto__" && Cp
        ? Cp(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
        : (e[t] = n);
    }
    Pp.exports = pP;
  });
  var Np = f((lG, Lp) => {
    var gP = xo(),
      hP = Hn(),
      EP = Object.prototype,
      vP = EP.hasOwnProperty;
    function yP(e, t, n) {
      var r = e[t];
      (!(vP.call(e, t) && hP(r, n)) || (n === void 0 && !(t in e))) && gP(e, t, n);
    }
    Lp.exports = yP;
  });
  var Fp = f((fG, Mp) => {
    var mP = Np(),
      _P = pn(),
      IP = $n(),
      Dp = Qe(),
      TP = qt();
    function bP(e, t, n, r) {
      if (!Dp(e)) return e;
      t = _P(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = TP(t[i]),
          l = n;
        if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
        if (i != a) {
          var v = s[u];
          (l = r ? r(v, u, s) : void 0), l === void 0 && (l = Dp(v) ? v : IP(t[i + 1]) ? [] : {});
        }
        mP(s, u, l), (s = s[u]);
      }
      return e;
    }
    Mp.exports = bP;
  });
  var Gp = f((dG, qp) => {
    var AP = ir(),
      wP = Fp(),
      SP = pn();
    function OP(e, t, n) {
      for (var r = -1, i = t.length, o = {}; ++r < i; ) {
        var a = t[r],
          s = AP(e, a);
        n(s, a) && wP(o, SP(a, e), s);
      }
      return o;
    }
    qp.exports = OP;
  });
  var Xp = f((pG, kp) => {
    var xP = jn(),
      RP = ei(),
      CP = Si(),
      PP = wi(),
      LP = Object.getOwnPropertySymbols,
      NP = LP
        ? function (e) {
            for (var t = []; e; ) xP(t, CP(e)), (e = RP(e));
            return t;
          }
        : PP;
    kp.exports = NP;
  });
  var Up = f((gG, Vp) => {
    function DP(e) {
      var t = [];
      if (e != null) for (var n in Object(e)) t.push(n);
      return t;
    }
    Vp.exports = DP;
  });
  var Hp = f((hG, Bp) => {
    var MP = Qe(),
      FP = Jn(),
      qP = Up(),
      GP = Object.prototype,
      kP = GP.hasOwnProperty;
    function XP(e) {
      if (!MP(e)) return qP(e);
      var t = FP(e),
        n = [];
      for (var r in e) (r == "constructor" && (t || !kP.call(e, r))) || n.push(r);
      return n;
    }
    Bp.exports = XP;
  });
  var zp = f((EG, Wp) => {
    var VP = xi(),
      UP = Hp(),
      BP = vt();
    function HP(e) {
      return BP(e) ? VP(e, !0) : UP(e);
    }
    Wp.exports = HP;
  });
  var jp = f((vG, Kp) => {
    var WP = Ai(),
      zP = Xp(),
      KP = zp();
    function jP(e) {
      return WP(e, KP, zP);
    }
    Kp.exports = jP;
  });
  var $p = f((yG, Yp) => {
    var YP = Xi(),
      $P = lt(),
      QP = Gp(),
      ZP = jp();
    function JP(e, t) {
      if (e == null) return {};
      var n = YP(ZP(e), function (r) {
        return [r];
      });
      return (
        (t = $P(t)),
        QP(e, n, function (r, i) {
          return t(r, i[0]);
        })
      );
    }
    Yp.exports = JP;
  });
  var Zp = f((mG, Qp) => {
    var eL = lt(),
      tL = xp(),
      nL = $p();
    function rL(e, t) {
      return nL(e, tL(eL(t)));
    }
    Qp.exports = rL;
  });
  var eg = f((_G, Jp) => {
    var iL = er(),
      oL = tr(),
      aL = sn(),
      sL = be(),
      uL = vt(),
      cL = Yn(),
      lL = Jn(),
      fL = Zn(),
      dL = "[object Map]",
      pL = "[object Set]",
      gL = Object.prototype,
      hL = gL.hasOwnProperty;
    function EL(e) {
      if (e == null) return !0;
      if (
        uL(e) &&
        (sL(e) || typeof e == "string" || typeof e.splice == "function" || cL(e) || fL(e) || aL(e))
      )
        return !e.length;
      var t = oL(e);
      if (t == dL || t == pL) return !e.size;
      if (lL(e)) return !iL(e).length;
      for (var n in e) if (hL.call(e, n)) return !1;
      return !0;
    }
    Jp.exports = EL;
  });
  var ng = f((IG, tg) => {
    var vL = xo(),
      yL = go(),
      mL = lt();
    function _L(e, t) {
      var n = {};
      return (
        (t = mL(t, 3)),
        yL(e, function (r, i, o) {
          vL(n, i, t(r, i, o));
        }),
        n
      );
    }
    tg.exports = _L;
  });
  var ig = f((TG, rg) => {
    function IL(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; );
      return e;
    }
    rg.exports = IL;
  });
  var ag = f((bG, og) => {
    var TL = ar();
    function bL(e) {
      return typeof e == "function" ? e : TL;
    }
    og.exports = bL;
  });
  var ug = f((AG, sg) => {
    var AL = ig(),
      wL = ho(),
      SL = ag(),
      OL = be();
    function xL(e, t) {
      var n = OL(e) ? AL : wL;
      return n(e, SL(t));
    }
    sg.exports = xL;
  });
  var lg = f((wG, cg) => {
    var RL = Ue(),
      CL = function () {
        return RL.Date.now();
      };
    cg.exports = CL;
  });
  var pg = f((SG, dg) => {
    var PL = Qe(),
      Ro = lg(),
      fg = sr(),
      LL = "Expected a function",
      NL = Math.max,
      DL = Math.min;
    function ML(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l = 0,
        v = !1,
        p = !1,
        d = !0;
      if (typeof e != "function") throw new TypeError(LL);
      (t = fg(t) || 0),
        PL(n) &&
          ((v = !!n.leading),
          (p = "maxWait" in n),
          (o = p ? NL(fg(n.maxWait) || 0, t) : o),
          (d = "trailing" in n ? !!n.trailing : d));
      function E(P) {
        var H = r,
          z = i;
        return (r = i = void 0), (l = P), (a = e.apply(z, H)), a;
      }
      function m(P) {
        return (l = P), (s = setTimeout(I, t)), v ? E(P) : a;
      }
      function b(P) {
        var H = P - u,
          z = P - l,
          K = t - H;
        return p ? DL(K, o - z) : K;
      }
      function O(P) {
        var H = P - u,
          z = P - l;
        return u === void 0 || H >= t || H < 0 || (p && z >= o);
      }
      function I() {
        var P = Ro();
        if (O(P)) return C(P);
        s = setTimeout(I, b(P));
      }
      function C(P) {
        return (s = void 0), d && r ? E(P) : ((r = i = void 0), a);
      }
      function S() {
        s !== void 0 && clearTimeout(s), (l = 0), (r = u = i = s = void 0);
      }
      function D() {
        return s === void 0 ? a : C(Ro());
      }
      function M() {
        var P = Ro(),
          H = O(P);
        if (((r = arguments), (i = this), (u = P), H)) {
          if (s === void 0) return m(u);
          if (p) return clearTimeout(s), (s = setTimeout(I, t)), E(u);
        }
        return s === void 0 && (s = setTimeout(I, t)), a;
      }
      return (M.cancel = S), (M.flush = D), M;
    }
    dg.exports = ML;
  });
  var hg = f((OG, gg) => {
    var FL = pg(),
      qL = Qe(),
      GL = "Expected a function";
    function kL(e, t, n) {
      var r = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(GL);
      return (
        qL(n) && ((r = "leading" in n ? !!n.leading : r), (i = "trailing" in n ? !!n.trailing : i)),
        FL(e, t, { leading: r, maxWait: t, trailing: i })
      );
    }
    gg.exports = kL;
  });
  var vg = {};
  Le(vg, {
    actionListPlaybackChanged: () => Yt,
    animationFrameChanged: () => wr,
    clearRequested: () => lN,
    elementStateChanged: () => qo,
    eventListenerAdded: () => Ar,
    eventStateChanged: () => Do,
    instanceAdded: () => Mo,
    instanceRemoved: () => Fo,
    instanceStarted: () => Sr,
    mediaQueriesDefined: () => ko,
    parameterChanged: () => jt,
    playbackRequested: () => uN,
    previewRequested: () => sN,
    rawDataImported: () => Co,
    sessionInitialized: () => Po,
    sessionStarted: () => Lo,
    sessionStopped: () => No,
    stopRequested: () => cN,
    testFrameRendered: () => fN,
    viewportWidthChanged: () => Go,
  });
  var Eg,
    XL,
    VL,
    UL,
    BL,
    HL,
    WL,
    zL,
    KL,
    jL,
    YL,
    $L,
    QL,
    ZL,
    JL,
    eN,
    tN,
    nN,
    rN,
    iN,
    oN,
    aN,
    Co,
    Po,
    Lo,
    No,
    sN,
    uN,
    cN,
    lN,
    Ar,
    fN,
    Do,
    wr,
    jt,
    Mo,
    Sr,
    Fo,
    qo,
    Yt,
    Go,
    ko,
    Or = Ee(() => {
      "use strict";
      Ne();
      (Eg = le(Tt())),
        ({
          IX2_RAW_DATA_IMPORTED: XL,
          IX2_SESSION_INITIALIZED: VL,
          IX2_SESSION_STARTED: UL,
          IX2_SESSION_STOPPED: BL,
          IX2_PREVIEW_REQUESTED: HL,
          IX2_PLAYBACK_REQUESTED: WL,
          IX2_STOP_REQUESTED: zL,
          IX2_CLEAR_REQUESTED: KL,
          IX2_EVENT_LISTENER_ADDED: jL,
          IX2_TEST_FRAME_RENDERED: YL,
          IX2_EVENT_STATE_CHANGED: $L,
          IX2_ANIMATION_FRAME_CHANGED: QL,
          IX2_PARAMETER_CHANGED: ZL,
          IX2_INSTANCE_ADDED: JL,
          IX2_INSTANCE_STARTED: eN,
          IX2_INSTANCE_REMOVED: tN,
          IX2_ELEMENT_STATE_CHANGED: nN,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: rN,
          IX2_VIEWPORT_WIDTH_CHANGED: iN,
          IX2_MEDIA_QUERIES_DEFINED: oN,
        } = Te),
        ({ reifyState: aN } = Eg.IX2VanillaUtils),
        (Co = (e) => ({ type: XL, payload: { ...aN(e) } })),
        (Po = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: VL,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Lo = () => ({ type: UL })),
        (No = () => ({ type: BL })),
        (sN = ({ rawData: e, defer: t }) => ({ type: HL, payload: { defer: t, rawData: e } })),
        (uN = ({
          actionTypeId: e = xe.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: r,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: WL,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: a,
            eventId: r,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (cN = (e) => ({ type: zL, payload: { actionListId: e } })),
        (lN = () => ({ type: KL })),
        (Ar = (e, t) => ({ type: jL, payload: { target: e, listenerParams: t } })),
        (fN = (e = 1) => ({ type: YL, payload: { step: e } })),
        (Do = (e, t) => ({ type: $L, payload: { stateKey: e, newState: t } })),
        (wr = (e, t) => ({ type: QL, payload: { now: e, parameters: t } })),
        (jt = (e, t) => ({ type: ZL, payload: { key: e, value: t } })),
        (Mo = (e) => ({ type: JL, payload: { ...e } })),
        (Sr = (e, t) => ({ type: eN, payload: { instanceId: e, time: t } })),
        (Fo = (e) => ({ type: tN, payload: { instanceId: e } })),
        (qo = (e, t, n, r) => ({
          type: nN,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: r },
        })),
        (Yt = ({ actionListId: e, isPlaying: t }) => ({
          type: rN,
          payload: { actionListId: e, isPlaying: t },
        })),
        (Go = ({ width: e, mediaQueries: t }) => ({
          type: iN,
          payload: { width: e, mediaQueries: t },
        })),
        (ko = () => ({ type: oN }));
    });
  var Ce = {};
  Le(Ce, {
    elementContains: () => Uo,
    getChildElements: () => IN,
    getClosestElement: () => An,
    getProperty: () => EN,
    getQuerySelector: () => Vo,
    getRefType: () => Bo,
    getSiblingElements: () => TN,
    getStyle: () => hN,
    getValidDocument: () => yN,
    isSiblingNode: () => _N,
    matchSelector: () => vN,
    queryDocument: () => mN,
    setStyle: () => gN,
  });
  function gN(e, t, n) {
    e.style[t] = n;
  }
  function hN(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function EN(e, t) {
    return e[t];
  }
  function vN(e) {
    return (t) => t[Xo](e);
  }
  function Vo({ id: e, selector: t }) {
    if (e) {
      let n = e;
      if (e.indexOf(yg) !== -1) {
        let r = e.split(yg),
          i = r[0];
        if (((n = r[1]), i !== document.documentElement.getAttribute(_g))) return null;
      }
      return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`;
    }
    return t;
  }
  function yN(e) {
    return e == null || e === document.documentElement.getAttribute(_g) ? document : null;
  }
  function mN(e, t) {
    return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e));
  }
  function Uo(e, t) {
    return e.contains(t);
  }
  function _N(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function IN(e) {
    let t = [];
    for (let n = 0, { length: r } = e || []; n < r; n++) {
      let { children: i } = e[n],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function TN(e = []) {
    let t = [],
      n = [];
    for (let r = 0, { length: i } = e; r < i; r++) {
      let { parentNode: o } = e[r];
      if (!o || !o.children || !o.children.length || n.indexOf(o) !== -1) continue;
      n.push(o);
      let a = o.firstElementChild;
      for (; a != null; ) e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function Bo(e) {
    return e != null && typeof e == "object" ? (e instanceof Element ? dN : pN) : null;
  }
  var mg,
    Xo,
    yg,
    dN,
    pN,
    _g,
    An,
    Ig = Ee(() => {
      "use strict";
      mg = le(Tt());
      Ne();
      ({ ELEMENT_MATCHES: Xo } = mg.IX2BrowserSupport),
        ({ IX2_ID_DELIMITER: yg, HTML_ELEMENT: dN, PLAIN_OBJECT: pN, WF_PAGE: _g } = we);
      An = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[Xo] && n[Xo](t)) return n;
              n = n.parentNode;
            } while (n != null);
            return null;
          };
    });
  var Ho = f((CG, bg) => {
    var bN = Qe(),
      Tg = Object.create,
      AN = (function () {
        function e() {}
        return function (t) {
          if (!bN(t)) return {};
          if (Tg) return Tg(t);
          e.prototype = t;
          var n = new e();
          return (e.prototype = void 0), n;
        };
      })();
    bg.exports = AN;
  });
  var xr = f((PG, Ag) => {
    function wN() {}
    Ag.exports = wN;
  });
  var Cr = f((LG, wg) => {
    var SN = Ho(),
      ON = xr();
    function Rr(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Rr.prototype = SN(ON.prototype);
    Rr.prototype.constructor = Rr;
    wg.exports = Rr;
  });
  var Rg = f((NG, xg) => {
    var Sg = St(),
      xN = sn(),
      RN = be(),
      Og = Sg ? Sg.isConcatSpreadable : void 0;
    function CN(e) {
      return RN(e) || xN(e) || !!(Og && e && e[Og]);
    }
    xg.exports = CN;
  });
  var Lg = f((DG, Pg) => {
    var PN = jn(),
      LN = Rg();
    function Cg(e, t, n, r, i) {
      var o = -1,
        a = e.length;
      for (n || (n = LN), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && n(s) ? (t > 1 ? Cg(s, t - 1, n, r, i) : PN(i, s)) : r || (i[i.length] = s);
      }
      return i;
    }
    Pg.exports = Cg;
  });
  var Dg = f((MG, Ng) => {
    var NN = Lg();
    function DN(e) {
      var t = e == null ? 0 : e.length;
      return t ? NN(e, 1) : [];
    }
    Ng.exports = DN;
  });
  var Fg = f((FG, Mg) => {
    function MN(e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    }
    Mg.exports = MN;
  });
  var kg = f((qG, Gg) => {
    var FN = Fg(),
      qg = Math.max;
    function qN(e, t, n) {
      return (
        (t = qg(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (var r = arguments, i = -1, o = qg(r.length - t, 0), a = Array(o); ++i < o; )
            a[i] = r[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = r[i];
          return (s[t] = n(a)), FN(e, this, s);
        }
      );
    }
    Gg.exports = qN;
  });
  var Vg = f((GG, Xg) => {
    function GN(e) {
      return function () {
        return e;
      };
    }
    Xg.exports = GN;
  });
  var Hg = f((kG, Bg) => {
    var kN = Vg(),
      Ug = Oo(),
      XN = ar(),
      VN = Ug
        ? function (e, t) {
            return Ug(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: kN(t),
              writable: !0,
            });
          }
        : XN;
    Bg.exports = VN;
  });
  var zg = f((XG, Wg) => {
    var UN = 800,
      BN = 16,
      HN = Date.now;
    function WN(e) {
      var t = 0,
        n = 0;
      return function () {
        var r = HN(),
          i = BN - (r - n);
        if (((n = r), i > 0)) {
          if (++t >= UN) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    Wg.exports = WN;
  });
  var jg = f((VG, Kg) => {
    var zN = Hg(),
      KN = zg(),
      jN = KN(zN);
    Kg.exports = jN;
  });
  var $g = f((UG, Yg) => {
    var YN = Dg(),
      $N = kg(),
      QN = jg();
    function ZN(e) {
      return QN($N(e, void 0, YN), e + "");
    }
    Yg.exports = ZN;
  });
  var Jg = f((BG, Zg) => {
    var Qg = Ri(),
      JN = Qg && new Qg();
    Zg.exports = JN;
  });
  var th = f((HG, eh) => {
    function eD() {}
    eh.exports = eD;
  });
  var Wo = f((WG, rh) => {
    var nh = Jg(),
      tD = th(),
      nD = nh
        ? function (e) {
            return nh.get(e);
          }
        : tD;
    rh.exports = nD;
  });
  var oh = f((zG, ih) => {
    var rD = {};
    ih.exports = rD;
  });
  var zo = f((KG, sh) => {
    var ah = oh(),
      iD = Object.prototype,
      oD = iD.hasOwnProperty;
    function aD(e) {
      for (var t = e.name + "", n = ah[t], r = oD.call(ah, t) ? n.length : 0; r--; ) {
        var i = n[r],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    sh.exports = aD;
  });
  var Lr = f((jG, uh) => {
    var sD = Ho(),
      uD = xr(),
      cD = 4294967295;
    function Pr(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = cD),
        (this.__views__ = []);
    }
    Pr.prototype = sD(uD.prototype);
    Pr.prototype.constructor = Pr;
    uh.exports = Pr;
  });
  var lh = f((YG, ch) => {
    function lD(e, t) {
      var n = -1,
        r = e.length;
      for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
      return t;
    }
    ch.exports = lD;
  });
  var dh = f(($G, fh) => {
    var fD = Lr(),
      dD = Cr(),
      pD = lh();
    function gD(e) {
      if (e instanceof fD) return e.clone();
      var t = new dD(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = pD(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    fh.exports = gD;
  });
  var hh = f((QG, gh) => {
    var hD = Lr(),
      ph = Cr(),
      ED = xr(),
      vD = be(),
      yD = nt(),
      mD = dh(),
      _D = Object.prototype,
      ID = _D.hasOwnProperty;
    function Nr(e) {
      if (yD(e) && !vD(e) && !(e instanceof hD)) {
        if (e instanceof ph) return e;
        if (ID.call(e, "__wrapped__")) return mD(e);
      }
      return new ph(e);
    }
    Nr.prototype = ED.prototype;
    Nr.prototype.constructor = Nr;
    gh.exports = Nr;
  });
  var vh = f((ZG, Eh) => {
    var TD = Lr(),
      bD = Wo(),
      AD = zo(),
      wD = hh();
    function SD(e) {
      var t = AD(e),
        n = wD[t];
      if (typeof n != "function" || !(t in TD.prototype)) return !1;
      if (e === n) return !0;
      var r = bD(n);
      return !!r && e === r[0];
    }
    Eh.exports = SD;
  });
  var Ih = f((JG, _h) => {
    var yh = Cr(),
      OD = $g(),
      xD = Wo(),
      Ko = zo(),
      RD = be(),
      mh = vh(),
      CD = "Expected a function",
      PD = 8,
      LD = 32,
      ND = 128,
      DD = 256;
    function MD(e) {
      return OD(function (t) {
        var n = t.length,
          r = n,
          i = yh.prototype.thru;
        for (e && t.reverse(); r--; ) {
          var o = t[r];
          if (typeof o != "function") throw new TypeError(CD);
          if (i && !a && Ko(o) == "wrapper") var a = new yh([], !0);
        }
        for (r = a ? r : n; ++r < n; ) {
          o = t[r];
          var s = Ko(o),
            u = s == "wrapper" ? xD(o) : void 0;
          u && mh(u[0]) && u[1] == (ND | PD | LD | DD) && !u[4].length && u[9] == 1
            ? (a = a[Ko(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && mh(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var l = arguments,
            v = l[0];
          if (a && l.length == 1 && RD(v)) return a.plant(v).value();
          for (var p = 0, d = n ? t[p].apply(this, l) : v; ++p < n; ) d = t[p].call(this, d);
          return d;
        };
      });
    }
    _h.exports = MD;
  });
  var bh = f((ek, Th) => {
    var FD = Ih(),
      qD = FD();
    Th.exports = qD;
  });
  var wh = f((tk, Ah) => {
    function GD(e, t, n) {
      return (
        e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e
      );
    }
    Ah.exports = GD;
  });
  var Oh = f((nk, Sh) => {
    var kD = wh(),
      jo = sr();
    function XD(e, t, n) {
      return (
        n === void 0 && ((n = t), (t = void 0)),
        n !== void 0 && ((n = jo(n)), (n = n === n ? n : 0)),
        t !== void 0 && ((t = jo(t)), (t = t === t ? t : 0)),
        kD(jo(e), t, n)
      );
    }
    Sh.exports = XD;
  });
  var Fh,
    qh,
    Gh,
    kh,
    VD,
    UD,
    BD,
    HD,
    WD,
    zD,
    KD,
    jD,
    YD,
    $D,
    QD,
    ZD,
    JD,
    eM,
    tM,
    Xh,
    Vh,
    nM,
    rM,
    iM,
    Uh,
    oM,
    aM,
    Bh,
    sM,
    Yo,
    Hh,
    xh,
    Rh,
    Wh,
    Sn,
    uM,
    et,
    zh,
    cM,
    Me,
    We,
    On,
    Kh,
    $o,
    Ch,
    Qo,
    lM,
    wn,
    fM,
    dM,
    pM,
    jh,
    Ph,
    gM,
    Lh,
    hM,
    EM,
    vM,
    Nh,
    Dr,
    Mr,
    Dh,
    Mh,
    Yh,
    $h = Ee(() => {
      "use strict";
      (Fh = le(bh())), (qh = le(or())), (Gh = le(Oh()));
      Ne();
      Zo();
      Or();
      (kh = le(Tt())),
        ({
          MOUSE_CLICK: VD,
          MOUSE_SECOND_CLICK: UD,
          MOUSE_DOWN: BD,
          MOUSE_UP: HD,
          MOUSE_OVER: WD,
          MOUSE_OUT: zD,
          DROPDOWN_CLOSE: KD,
          DROPDOWN_OPEN: jD,
          SLIDER_ACTIVE: YD,
          SLIDER_INACTIVE: $D,
          TAB_ACTIVE: QD,
          TAB_INACTIVE: ZD,
          NAVBAR_CLOSE: JD,
          NAVBAR_OPEN: eM,
          MOUSE_MOVE: tM,
          PAGE_SCROLL_DOWN: Xh,
          SCROLL_INTO_VIEW: Vh,
          SCROLL_OUT_OF_VIEW: nM,
          PAGE_SCROLL_UP: rM,
          SCROLLING_IN_VIEW: iM,
          PAGE_FINISH: Uh,
          ECOMMERCE_CART_CLOSE: oM,
          ECOMMERCE_CART_OPEN: aM,
          PAGE_START: Bh,
          PAGE_SCROLL: sM,
        } = Be),
        (Yo = "COMPONENT_ACTIVE"),
        (Hh = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: xh } = we),
        ({ getNamespacedParameterId: Rh } = kh.IX2VanillaUtils),
        (Wh = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (Sn = Wh(({ element: e, nativeEvent: t }) => e === t.target)),
        (uM = Wh(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (et = (0, Fh.default)([Sn, uM])),
        (zh = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: r } = n,
              i = r[t];
            if (i && !lM[i.eventTypeId]) return i;
          }
          return null;
        }),
        (cM = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: r } = n.config;
          return !!zh(e, r);
        }),
        (Me = ({ store: e, event: t, element: n, eventStateKey: r }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            l = zh(e, u);
          return (
            l &&
              $t({
                store: e,
                eventId: u,
                eventTarget: n,
                eventStateKey: u + xh + r.split(xh)[1],
                actionListId: (0, qh.default)(l, "action.config.actionListId"),
              }),
            $t({ store: e, eventId: a, eventTarget: n, eventStateKey: r, actionListId: s }),
            xn({ store: e, eventId: a, eventTarget: n, eventStateKey: r, actionListId: s }),
            i
          );
        }),
        (We = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r),
        (On = { handler: We(et, Me) }),
        (Kh = { ...On, types: [Yo, Hh].join(" ") }),
        ($o = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Ch = "mouseover mouseout"),
        (Qo = { types: $o }),
        (lM = { PAGE_START: Bh, PAGE_FINISH: Uh }),
        (wn = (() => {
          let e = window.pageXOffset !== void 0,
            n = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : n.scrollLeft,
            scrollTop: e ? window.pageYOffset : n.scrollTop,
            stiffScrollTop: (0, Gh.default)(
              e ? window.pageYOffset : n.scrollTop,
              0,
              n.scrollHeight - window.innerHeight
            ),
            scrollWidth: n.scrollWidth,
            scrollHeight: n.scrollHeight,
            clientWidth: n.clientWidth,
            clientHeight: n.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (fM = (e, t) =>
          !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top)),
        (dM = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: r, relatedTarget: i } = t,
            o = e.contains(r);
          if (n === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(n === "mouseout" && o && a);
        }),
        (pM = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: r, clientHeight: i } = wn(),
            o = n.scrollOffsetValue,
            u = n.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return fM(t.getBoundingClientRect(), { left: 0, top: u, right: r, bottom: i - u });
        }),
        (jh = (e) => (t, n) => {
          let { type: r } = t.nativeEvent,
            i = [Yo, Hh].indexOf(r) !== -1 ? r === Yo : n.isActive,
            o = { ...n, isActive: i };
          return ((!n || o.isActive !== n.isActive) && e(t, o)) || o;
        }),
        (Ph = (e) => (t, n) => {
          let r = { elementHovered: dM(t) };
          return ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) && e(t, r)) || r;
        }),
        (gM = (e) => (t, n) => {
          let r = { ...n, elementVisible: pM(t) };
          return ((n ? r.elementVisible !== n.elementVisible : r.elementVisible) && e(t, r)) || r;
        }),
        (Lh =
          (e) =>
          (t, n = {}) => {
            let { stiffScrollTop: r, scrollHeight: i, innerHeight: o } = wn(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: l } = a,
              v = l === "PX",
              p = i - o,
              d = Number((r / p).toFixed(2));
            if (n && n.percentTop === d) return n;
            let E = (v ? u : (o * (u || 0)) / 100) / p,
              m,
              b,
              O = 0;
            n && ((m = d > n.percentTop), (b = n.scrollingDown !== m), (O = b ? d : n.anchorTop));
            let I = s === Xh ? d >= O + E : d <= O - E,
              C = { ...n, percentTop: d, inBounds: I, anchorTop: O, scrollingDown: m };
            return (n && I && (b || C.inBounds !== n.inBounds) && e(t, C)) || C;
          }),
        (hM = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom),
        (EM = (e) => (t, n) => {
          let r = { finished: document.readyState === "complete" };
          return r.finished && !(n && n.finshed) && e(t), r;
        }),
        (vM = (e) => (t, n) => {
          let r = { started: !0 };
          return n || e(t), r;
        }),
        (Nh =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let r = { clickCount: (n.clickCount % 2) + 1 };
            return (r.clickCount !== n.clickCount && e(t, r)) || r;
          }),
        (Dr = (e = !0) => ({
          ...Kh,
          handler: We(
            e ? et : Sn,
            jh((t, n) => (n.isActive ? On.handler(t, n) : n))
          ),
        })),
        (Mr = (e = !0) => ({
          ...Kh,
          handler: We(
            e ? et : Sn,
            jh((t, n) => (n.isActive ? n : On.handler(t, n)))
          ),
        })),
        (Dh = {
          ...Qo,
          handler: gM((e, t) => {
            let { elementVisible: n } = t,
              { event: r, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[r.action.config.autoStopEventId] && t.triggered
              ? t
              : (r.eventTypeId === Vh) === n
              ? (Me(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Mh = 0.05),
        (Yh = {
          [YD]: Dr(),
          [$D]: Mr(),
          [jD]: Dr(),
          [KD]: Mr(),
          [eM]: Dr(!1),
          [JD]: Mr(!1),
          [QD]: Dr(),
          [ZD]: Mr(),
          [aM]: { types: "ecommerce-cart-open", handler: We(et, Me) },
          [oM]: { types: "ecommerce-cart-close", handler: We(et, Me) },
          [VD]: {
            types: "click",
            handler: We(
              et,
              Nh((e, { clickCount: t }) => {
                cM(e) ? t === 1 && Me(e) : Me(e);
              })
            ),
          },
          [UD]: {
            types: "click",
            handler: We(
              et,
              Nh((e, { clickCount: t }) => {
                t === 2 && Me(e);
              })
            ),
          },
          [BD]: { ...On, types: "mousedown" },
          [HD]: { ...On, types: "mouseup" },
          [WD]: {
            types: Ch,
            handler: We(
              et,
              Ph((e, t) => {
                t.elementHovered && Me(e);
              })
            ),
          },
          [zD]: {
            types: Ch,
            handler: We(
              et,
              Ph((e, t) => {
                t.elementHovered || Me(e);
              })
            ),
          },
          [tM]: {
            types: "mousemove mouseout scroll",
            handler: (
              { store: e, element: t, eventConfig: n, nativeEvent: r, eventStateKey: i },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: l,
                  restingState: v = 0,
                } = n,
                {
                  clientX: p = o.clientX,
                  clientY: d = o.clientY,
                  pageX: E = o.pageX,
                  pageY: m = o.pageY,
                } = r,
                b = s === "X_AXIS",
                O = r.type === "mouseout",
                I = v / 100,
                C = u,
                S = !1;
              switch (a) {
                case $e.VIEWPORT: {
                  I = b
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(d, window.innerHeight) / window.innerHeight;
                  break;
                }
                case $e.PAGE: {
                  let { scrollLeft: D, scrollTop: M, scrollWidth: P, scrollHeight: H } = wn();
                  I = b ? Math.min(D + E, P) / P : Math.min(M + m, H) / H;
                  break;
                }
                case $e.ELEMENT:
                default: {
                  C = Rh(i, u);
                  let D = r.type.indexOf("mouse") === 0;
                  if (D && et({ element: t, nativeEvent: r }) !== !0) break;
                  let M = t.getBoundingClientRect(),
                    { left: P, top: H, width: z, height: K } = M;
                  if (!D && !hM({ left: p, top: d }, M)) break;
                  (S = !0), (I = b ? (p - P) / z : (d - H) / K);
                  break;
                }
              }
              return (
                O && (I > 1 - Mh || I < Mh) && (I = Math.round(I)),
                (a !== $e.ELEMENT || S || S !== o.elementHovered) &&
                  ((I = l ? 1 - I : I), e.dispatch(jt(C, I))),
                { elementHovered: S, clientX: p, clientY: d, pageX: E, pageY: m }
              );
            },
          },
          [sM]: {
            types: $o,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: r } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = wn(),
                s = i / (o - a);
              (s = r ? 1 - s : s), e.dispatch(jt(n, s));
            },
          },
          [iM]: {
            types: $o,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: r },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: l,
                } = wn(),
                {
                  basedOn: v,
                  selectedAxis: p,
                  continuousParameterGroupId: d,
                  startsEntering: E,
                  startsExiting: m,
                  addEndOffset: b,
                  addStartOffset: O,
                  addOffsetValue: I = 0,
                  endOffsetValue: C = 0,
                } = n,
                S = p === "X_AXIS";
              if (v === $e.VIEWPORT) {
                let D = S ? o / s : a / u;
                return D !== i.scrollPercent && t.dispatch(jt(d, D)), { scrollPercent: D };
              } else {
                let D = Rh(r, d),
                  M = e.getBoundingClientRect(),
                  P = (O ? I : 0) / 100,
                  H = (b ? C : 0) / 100;
                (P = E ? P : 1 - P), (H = m ? H : 1 - H);
                let z = M.top + Math.min(M.height * P, l),
                  Q = M.top + M.height * H - z,
                  q = Math.min(l + Q, u),
                  g = Math.min(Math.max(0, l - z), q) / q;
                return g !== i.scrollPercent && t.dispatch(jt(D, g)), { scrollPercent: g };
              }
            },
          },
          [Vh]: Dh,
          [nM]: Dh,
          [Xh]: {
            ...Qo,
            handler: Lh((e, t) => {
              t.scrollingDown && Me(e);
            }),
          },
          [rM]: {
            ...Qo,
            handler: Lh((e, t) => {
              t.scrollingDown || Me(e);
            }),
          },
          [Uh]: { types: "readystatechange IX2_PAGE_UPDATE", handler: We(Sn, EM(Me)) },
          [Bh]: { types: "readystatechange IX2_PAGE_UPDATE", handler: We(Sn, vM(Me)) },
        });
    });
  var pE = {};
  Le(pE, {
    observeRequests: () => qM,
    startActionGroup: () => xn,
    startEngine: () => Vr,
    stopActionGroup: () => $t,
    stopAllActionGroups: () => lE,
    stopEngine: () => Ur,
  });
  function qM(e) {
    bt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: XM }),
      bt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: VM }),
      bt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: UM }),
      bt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: BM });
  }
  function GM(e) {
    bt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Ur(e), aE({ store: e, elementApi: Ce }), Vr({ store: e, allowEvents: !0 }), sE();
      },
    });
  }
  function kM(e, t) {
    let n = bt({
      store: e,
      select: ({ ixSession: r }) => r.tick,
      onChange: (r) => {
        t(r), n();
      },
    });
  }
  function XM({ rawData: e, defer: t }, n) {
    let r = () => {
      Vr({ store: n, rawData: e, allowEvents: !0 }), sE();
    };
    t ? setTimeout(r, 0) : r();
  }
  function sE() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function VM(e, t) {
    let {
        actionTypeId: n,
        actionListId: r,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: l = !0,
      } = e,
      { rawData: v } = e;
    if (r && i && v && s) {
      let p = v.actionLists[r];
      p && (v = SM({ actionList: p, actionItemId: i, rawData: v }));
    }
    if (
      (Vr({ store: t, rawData: v, allowEvents: a, testManual: u }),
      (r && n === xe.GENERAL_START_ACTION) || Jo(n))
    ) {
      $t({ store: t, actionListId: r }), cE({ store: t, actionListId: r, eventId: o });
      let p = xn({ store: t, eventId: o, actionListId: r, immediate: s, verbose: l });
      l && p && t.dispatch(Yt({ actionListId: r, isPlaying: !s }));
    }
  }
  function UM({ actionListId: e }, t) {
    e ? $t({ store: t, actionListId: e }) : lE({ store: t }), Ur(t);
  }
  function BM(e, t) {
    Ur(t), aE({ store: t, elementApi: Ce });
  }
  function Vr({ store: e, rawData: t, allowEvents: n, testManual: r }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(Co(t)),
      i.active ||
        (e.dispatch(
          Po({
            hasBoundaryNodes: !!document.querySelector(qr),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        n && (YM(e), HM(), e.getState().ixSession.hasDefinedMediaQueries && GM(e)),
        e.dispatch(Lo()),
        WM(e, r));
  }
  function HM() {
    let { documentElement: e } = document;
    e.className.indexOf(Qh) === -1 && (e.className += ` ${Qh}`);
  }
  function WM(e, t) {
    let n = (r) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active && (e.dispatch(wr(r, o)), t ? kM(e, n) : requestAnimationFrame(n));
    };
    n(window.performance.now());
  }
  function Ur(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: n } = t;
      n.forEach(zM), CM(), e.dispatch(No());
    }
  }
  function zM({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function KM({
    store: e,
    eventStateKey: t,
    eventTarget: n,
    eventId: r,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: l, ixSession: v } = e.getState(),
      { events: p } = l,
      d = p[r],
      { eventTypeId: E } = d,
      m = {},
      b = {},
      O = [],
      { continuousActionGroups: I } = a,
      { id: C } = a;
    OM(E, i) && (C = xM(t, C));
    let S = v.hasBoundaryNodes && n ? An(n, qr) : null;
    I.forEach((D) => {
      let { keyframe: M, actionItems: P } = D;
      P.forEach((H) => {
        let { actionTypeId: z } = H,
          { target: K } = H.config;
        if (!K) return;
        let Q = K.boundaryMode ? S : null,
          q = PM(K) + ea + z;
        if (((b[q] = jM(b[q], M, H)), !m[q])) {
          m[q] = !0;
          let { config: x } = H;
          Gr({ config: x, event: d, eventTarget: n, elementRoot: Q, elementApi: Ce }).forEach(
            (g) => {
              O.push({ element: g, key: q });
            }
          );
        }
      });
    }),
      O.forEach(({ element: D, key: M }) => {
        let P = b[M],
          H = (0, at.default)(P, "[0].actionItems[0]", {}),
          { actionTypeId: z } = H,
          Q = (z === xe.PLUGIN_RIVE ? (H.config?.target?.selectorGuids || []).length === 0 : Xr(z))
            ? na(z)(D, H)
            : null,
          q = ta({ element: D, actionItem: H, elementApi: Ce }, Q);
        ra({
          store: e,
          element: D,
          eventId: r,
          actionListId: o,
          actionItem: H,
          destination: q,
          continuous: !0,
          parameterId: C,
          actionGroups: P,
          smoothing: s,
          restingValue: u,
          pluginInstance: Q,
        });
      });
  }
  function jM(e = [], t, n) {
    let r = [...e],
      i;
    return (
      r.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = r.length), r.push({ keyframe: t, actionItems: [] })),
      r[i].actionItems.push(n),
      r
    );
  }
  function YM(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: n } = t;
    uE(e),
      (0, Qt.default)(n, (i, o) => {
        let a = Yh[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        tF({ logic: a, store: e, events: i });
      });
    let { ixSession: r } = e.getState();
    r.eventListeners.length && QM(e);
  }
  function QM(e) {
    let t = () => {
      uE(e);
    };
    $M.forEach((n) => {
      window.addEventListener(n, t), e.dispatch(Ar(window, [n, t]));
    }),
      t();
  }
  function uE(e) {
    let { ixSession: t, ixData: n } = e.getState(),
      r = window.innerWidth;
    if (r !== t.viewportWidth) {
      let { mediaQueries: i } = n;
      e.dispatch(Go({ width: r, mediaQueries: i }));
    }
  }
  function tF({ logic: e, store: t, events: n }) {
    nF(n);
    let { types: r, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = ZM(n, eF);
    if (!(0, eE.default)(s)) return;
    (0, Qt.default)(s, (p, d) => {
      let E = n[d],
        { action: m, id: b, mediaQueries: O = o.mediaQueryKeys } = E,
        { actionListId: I } = m.config;
      LM(O, o.mediaQueryKeys) || t.dispatch(ko()),
        m.actionTypeId === xe.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(E.config) ? E.config : [E.config]).forEach((S) => {
            let { continuousParameterGroupId: D } = S,
              M = (0, at.default)(a, `${I}.continuousParameterGroups`, []),
              P = (0, Jh.default)(M, ({ id: K }) => K === D),
              H = (S.smoothing || 0) / 100,
              z = (S.restingState || 0) / 100;
            P &&
              p.forEach((K, Q) => {
                let q = b + ea + Q;
                KM({
                  store: t,
                  eventStateKey: q,
                  eventTarget: K,
                  eventId: b,
                  eventConfig: S,
                  actionListId: I,
                  parameterGroup: P,
                  smoothing: H,
                  restingValue: z,
                });
              });
          }),
        (m.actionTypeId === xe.GENERAL_START_ACTION || Jo(m.actionTypeId)) &&
          cE({ store: t, actionListId: I, eventId: b });
    });
    let u = (p) => {
        let { ixSession: d } = t.getState();
        JM(s, (E, m, b) => {
          let O = n[m],
            I = d.eventState[b],
            { action: C, mediaQueries: S = o.mediaQueryKeys } = O;
          if (!kr(S, d.mediaQueryKey)) return;
          let D = (M = {}) => {
            let P = i(
              { store: t, element: E, event: O, eventConfig: M, nativeEvent: p, eventStateKey: b },
              I
            );
            NM(P, I) || t.dispatch(Do(b, P));
          };
          C.actionTypeId === xe.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(O.config) ? O.config : [O.config]).forEach(D)
            : D();
        });
      },
      l = (0, iE.default)(u, FM),
      v = ({ target: p = document, types: d, throttle: E }) => {
        d.split(" ")
          .filter(Boolean)
          .forEach((m) => {
            let b = E ? l : u;
            p.addEventListener(m, b), t.dispatch(Ar(p, [m, b]));
          });
      };
    Array.isArray(r) ? r.forEach(v) : typeof r == "string" && v(e);
  }
  function nF(e) {
    if (!MM) return;
    let t = {},
      n = "";
    for (let r in e) {
      let { eventTypeId: i, target: o } = e[r],
        a = Vo(o);
      t[a] ||
        ((i === Be.MOUSE_CLICK || i === Be.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0), (n += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (n) {
      let r = document.createElement("style");
      (r.textContent = n), document.body.appendChild(r);
    }
  }
  function cE({ store: e, actionListId: t, eventId: n }) {
    let { ixData: r, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = r,
      s = a[n],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let l = (0, at.default)(u, "actionItemGroups[0].actionItems", []),
        v = (0, at.default)(s, "mediaQueries", r.mediaQueryKeys);
      if (!kr(v, i.mediaQueryKey)) return;
      l.forEach((p) => {
        let { config: d, actionTypeId: E } = p,
          m =
            d?.target?.useEventTarget === !0 && d?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : d,
          b = Gr({ config: m, event: s, elementApi: Ce }),
          O = Xr(E);
        b.forEach((I) => {
          let C = O ? na(E)(I, p) : null;
          ra({
            destination: ta({ element: I, actionItem: p, elementApi: Ce }, C),
            immediate: !0,
            store: e,
            element: I,
            eventId: n,
            actionItem: p,
            actionListId: t,
            pluginInstance: C,
          });
        });
      });
    }
  }
  function lE({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, Qt.default)(t, (n) => {
      if (!n.continuous) {
        let { actionListId: r, verbose: i } = n;
        ia(n, e), i && e.dispatch(Yt({ actionListId: r, isPlaying: !1 }));
      }
    });
  }
  function $t({ store: e, eventId: t, eventTarget: n, eventStateKey: r, actionListId: i }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && n ? An(n, qr) : null;
    (0, Qt.default)(o, (u) => {
      let l = (0, at.default)(u, "actionItem.config.target.boundaryMode"),
        v = r ? u.eventStateKey === r : !0;
      if (u.actionListId === i && u.eventId === t && v) {
        if (s && l && !Uo(s, u.element)) return;
        ia(u, e), u.verbose && e.dispatch(Yt({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function xn({
    store: e,
    eventId: t,
    eventTarget: n,
    eventStateKey: r,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: l } = e.getState(),
      { events: v } = u,
      p = v[t] || {},
      { mediaQueries: d = u.mediaQueryKeys } = p,
      E = (0, at.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: m, useFirstGroupAsInitialState: b } = E;
    if (!m || !m.length) return !1;
    o >= m.length && (0, at.default)(p, "config.loop") && (o = 0), o === 0 && b && o++;
    let I = (o === 0 || (o === 1 && b)) && Jo(p.action?.actionTypeId) ? p.config.delay : void 0,
      C = (0, at.default)(m, [o, "actionItems"], []);
    if (!C.length || !kr(d, l.mediaQueryKey)) return !1;
    let S = l.hasBoundaryNodes && n ? An(n, qr) : null,
      D = bM(C),
      M = !1;
    return (
      C.forEach((P, H) => {
        let { config: z, actionTypeId: K } = P,
          Q = Xr(K),
          { target: q } = z;
        if (!q) return;
        let x = q.boundaryMode ? S : null;
        Gr({ config: z, event: p, eventTarget: n, elementRoot: x, elementApi: Ce }).forEach(
          (R, L) => {
            let G = Q ? na(K)(R, P) : null,
              Z = Q ? DM(K)(R, P) : null;
            M = !0;
            let J = D === H && L === 0,
              N = AM({ element: R, actionItem: P }),
              X = ta({ element: R, actionItem: P, elementApi: Ce }, G);
            ra({
              store: e,
              element: R,
              actionItem: P,
              eventId: t,
              eventTarget: n,
              eventStateKey: r,
              actionListId: i,
              groupIndex: o,
              isCarrier: J,
              computedStyle: N,
              destination: X,
              immediate: a,
              verbose: s,
              pluginInstance: G,
              pluginDuration: Z,
              instanceDelay: I,
            });
          }
        );
      }),
      M
    );
  }
  function ra(e) {
    let { store: t, computedStyle: n, ...r } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: l,
        eventId: v,
      } = r,
      p = !u,
      d = IM(),
      { ixElements: E, ixSession: m, ixData: b } = t.getState(),
      O = _M(E, i),
      { refState: I } = E[O] || {},
      C = Bo(i),
      S = m.reducedMotion && Ei[o.actionTypeId],
      D;
    if (S && u)
      switch (b.events[v]?.eventTypeId) {
        case Be.MOUSE_MOVE:
        case Be.MOUSE_MOVE_IN_VIEWPORT:
          D = l;
          break;
        default:
          D = 0.5;
          break;
      }
    let M = wM(i, I, n, o, Ce, s);
    if (
      (t.dispatch(
        Mo({
          instanceId: d,
          elementId: O,
          origin: M,
          refType: C,
          skipMotion: S,
          skipToValue: D,
          ...r,
        })
      ),
      fE(document.body, "ix2-animation-started", d),
      a)
    ) {
      rF(t, d);
      return;
    }
    bt({ store: t, select: ({ ixInstances: P }) => P[d], onChange: dE }),
      p && t.dispatch(Sr(d, m.tick));
  }
  function ia(e, t) {
    fE(document.body, "ix2-animation-stopping", { instanceId: e.id, state: t.getState() });
    let { elementId: n, actionItem: r } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[n] || {};
    a === oE && RM(o, r, Ce), t.dispatch(Fo(e.id));
  }
  function fE(e, t, n) {
    let r = document.createEvent("CustomEvent");
    r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r);
  }
  function rF(e, t) {
    let { ixParameters: n } = e.getState();
    e.dispatch(Sr(t, 0)), e.dispatch(wr(performance.now(), n));
    let { ixInstances: r } = e.getState();
    dE(r[t], e);
  }
  function dE(e, t) {
    let {
        active: n,
        continuous: r,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: l,
        groupIndex: v,
        eventId: p,
        eventTarget: d,
        eventStateKey: E,
        actionListId: m,
        isCarrier: b,
        styleProp: O,
        verbose: I,
        pluginInstance: C,
      } = e,
      { ixData: S, ixSession: D } = t.getState(),
      { events: M } = S,
      P = M && M[p] ? M[p] : {},
      { mediaQueries: H = S.mediaQueryKeys } = P;
    if (kr(H, D.mediaQueryKey) && (r || n || i)) {
      if (l || (u === mM && i)) {
        t.dispatch(qo(o, s, l, a));
        let { ixElements: z } = t.getState(),
          { ref: K, refType: Q, refState: q } = z[o] || {},
          x = q && q[s];
        (Q === oE || Xr(s)) && TM(K, q, x, p, a, O, Ce, u, C);
      }
      if (i) {
        if (b) {
          let z = xn({
            store: t,
            eventId: p,
            eventTarget: d,
            eventStateKey: E,
            actionListId: m,
            groupIndex: v + 1,
            verbose: I,
          });
          I && !z && t.dispatch(Yt({ actionListId: m, isPlaying: !1 }));
        }
        ia(e, t);
      }
    }
  }
  var Jh,
    at,
    eE,
    tE,
    nE,
    rE,
    Qt,
    iE,
    Fr,
    yM,
    Jo,
    ea,
    qr,
    oE,
    mM,
    Qh,
    Gr,
    _M,
    ta,
    bt,
    IM,
    TM,
    aE,
    bM,
    AM,
    wM,
    SM,
    OM,
    xM,
    kr,
    RM,
    CM,
    PM,
    LM,
    NM,
    Xr,
    na,
    DM,
    Zh,
    MM,
    FM,
    $M,
    ZM,
    JM,
    eF,
    Zo = Ee(() => {
      "use strict";
      (Jh = le(Wi())),
        (at = le(or())),
        (eE = le(Sp())),
        (tE = le(Zp())),
        (nE = le(eg())),
        (rE = le(ng())),
        (Qt = le(ug())),
        (iE = le(hg()));
      Ne();
      Fr = le(Tt());
      Or();
      Ig();
      $h();
      (yM = Object.keys(qn)),
        (Jo = (e) => yM.includes(e)),
        ({
          COLON_DELIMITER: ea,
          BOUNDARY_SELECTOR: qr,
          HTML_ELEMENT: oE,
          RENDER_GENERAL: mM,
          W_MOD_IX: Qh,
        } = we),
        ({
          getAffectedElements: Gr,
          getElementId: _M,
          getDestinationValues: ta,
          observeStore: bt,
          getInstanceId: IM,
          renderHTMLElement: TM,
          clearAllStyles: aE,
          getMaxDurationItemIndex: bM,
          getComputedStyle: AM,
          getInstanceOrigin: wM,
          reduceListToGroup: SM,
          shouldNamespaceEventParameter: OM,
          getNamespacedParameterId: xM,
          shouldAllowMediaQuery: kr,
          cleanupHTMLElement: RM,
          clearObjectCache: CM,
          stringifyTarget: PM,
          mediaQueriesEqual: LM,
          shallowEqual: NM,
        } = Fr.IX2VanillaUtils),
        ({
          isPluginType: Xr,
          createPluginInstance: na,
          getPluginDuration: DM,
        } = Fr.IX2VanillaPlugins),
        (Zh = navigator.userAgent),
        (MM = Zh.match(/iPad/i) || Zh.match(/iPhone/)),
        (FM = 12);
      $M = ["resize", "orientationchange"];
      (ZM = (e, t) => (0, tE.default)((0, rE.default)(e, t), nE.default)),
        (JM = (e, t) => {
          (0, Qt.default)(e, (n, r) => {
            n.forEach((i, o) => {
              let a = r + ea + o;
              t(i, r, a);
            });
          });
        }),
        (eF = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Gr({ config: t, elementApi: Ce });
        });
    });
  var EE = f((aa) => {
    "use strict";
    Object.defineProperty(aa, "__esModule", { value: !0 });
    function iF(e, t) {
      for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    iF(aa, {
      actions: function () {
        return sF;
      },
      destroy: function () {
        return hE;
      },
      init: function () {
        return fF;
      },
      setEnv: function () {
        return lF;
      },
      store: function () {
        return Br;
      },
    });
    var oF = pi(),
      aF = uF((sp(), Ke(ap))),
      oa = (Zo(), Ke(pE)),
      sF = cF((Or(), Ke(vg)));
    function uF(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function gE(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (gE = function (r) {
        return r ? n : t;
      })(e);
    }
    function cF(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function")) return { default: e };
      var n = gE(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = e[o]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var Br = (0, oF.createStore)(aF.default);
    function lF(e) {
      e() && (0, oa.observeRequests)(Br);
    }
    function fF(e) {
      hE(), (0, oa.startEngine)({ store: Br, rawData: e, allowEvents: !0 });
    }
    function hE() {
      (0, oa.stopEngine)(Br);
    }
  });
  var _E = f((dk, mE) => {
    "use strict";
    var vE = Ve(),
      yE = EE();
    yE.setEnv(vE.env);
    vE.define(
      "ix2",
      (mE.exports = function () {
        return yE;
      })
    );
  });
  var TE = f((pk, IE) => {
    "use strict";
    var Zt = Ve();
    Zt.define(
      "links",
      (IE.exports = function (e, t) {
        var n = {},
          r = e(window),
          i,
          o = Zt.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          l = /index\.(html|php)$/,
          v = /\/$/,
          p,
          d;
        n.ready = n.design = n.preview = E;
        function E() {
          (i = o && Zt.env("design")),
            (d = Zt.env("slug") || a.pathname || ""),
            Zt.scroll.off(b),
            (p = []);
          for (var I = document.links, C = 0; C < I.length; ++C) m(I[C]);
          p.length && (Zt.scroll.on(b), b());
        }
        function m(I) {
          if (!I.getAttribute("hreflang")) {
            var C = (i && I.getAttribute("href-disabled")) || I.getAttribute("href");
            if (((s.href = C), !(C.indexOf(":") >= 0))) {
              var S = e(I);
              if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var D = e(s.hash);
                D.length && p.push({ link: S, sec: D, active: !1 });
                return;
              }
              if (!(C === "#" || C === "")) {
                var M = s.href === a.href || C === d || (l.test(C) && v.test(d));
                O(S, u, M);
              }
            }
          }
        }
        function b() {
          var I = r.scrollTop(),
            C = r.height();
          t.each(p, function (S) {
            if (!S.link.attr("hreflang")) {
              var D = S.link,
                M = S.sec,
                P = M.offset().top,
                H = M.outerHeight(),
                z = C * 0.5,
                K = M.is(":visible") && P + H - z >= I && P + z <= I + C;
              S.active !== K && ((S.active = K), O(D, u, K));
            }
          });
        }
        function O(I, C, S) {
          var D = I.hasClass(C);
          (S && D) || (!S && !D) || (S ? I.addClass(C) : I.removeClass(C));
        }
        return n;
      })
    );
  });
  var AE = f((gk, bE) => {
    "use strict";
    var Hr = Ve();
    Hr.define(
      "scroll",
      (bE.exports = function (e) {
        var t = { WF_CLICK_EMPTY: "click.wf-empty-link", WF_CLICK_SCROLL: "click.wf-scroll" },
          n = window.location,
          r = m() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (x) {
              window.setTimeout(x, 15);
            },
          u = Hr.env("editor") ? ".w-editor-body" : "body",
          l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
          v = 'a[href="#"]',
          p = 'a[href*="#"]:not(.w-tab-link):not(' + v + ")",
          d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          E = document.createElement("style");
        E.appendChild(document.createTextNode(d));
        function m() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var b = /^#[a-zA-Z0-9][\w:.-]*$/;
        function O(x) {
          return b.test(x.hash) && x.host + x.pathname === n.host + n.pathname;
        }
        let I =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function C() {
          return document.body.getAttribute("data-wf-scroll-motion") === "none" || I.matches;
        }
        function S(x, g) {
          var R;
          switch (g) {
            case "add":
              (R = x.attr("tabindex")),
                R ? x.attr("data-wf-tabindex-swap", R) : x.attr("tabindex", "-1");
              break;
            case "remove":
              (R = x.attr("data-wf-tabindex-swap")),
                R
                  ? (x.attr("tabindex", R), x.removeAttr("data-wf-tabindex-swap"))
                  : x.removeAttr("tabindex");
              break;
          }
          x.toggleClass("wf-force-outline-none", g === "add");
        }
        function D(x) {
          var g = x.currentTarget;
          if (
            !(Hr.env("design") || (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(g.className)))
          ) {
            var R = O(g) ? g.hash : "";
            if (R !== "") {
              var L = e(R);
              L.length &&
                (x && (x.preventDefault(), x.stopPropagation()),
                M(R, x),
                window.setTimeout(
                  function () {
                    P(L, function () {
                      S(L, "add"), L.get(0).focus({ preventScroll: !0 }), S(L, "remove");
                    });
                  },
                  x ? 0 : 300
                ));
            }
          }
        }
        function M(x) {
          if (n.hash !== x && r && r.pushState && !(Hr.env.chrome && n.protocol === "file:")) {
            var g = r.state && r.state.hash;
            g !== x && r.pushState({ hash: x }, "", x);
          }
        }
        function P(x, g) {
          var R = i.scrollTop(),
            L = H(x);
          if (R !== L) {
            var G = z(x, R, L),
              Z = Date.now(),
              J = function () {
                var N = Date.now() - Z;
                window.scroll(0, K(R, L, N, G)), N <= G ? s(J) : typeof g == "function" && g();
              };
            s(J);
          }
        }
        function H(x) {
          var g = e(l),
            R = g.css("position") === "fixed" ? g.outerHeight() : 0,
            L = x.offset().top - R;
          if (x.data("scroll") === "mid") {
            var G = i.height() - R,
              Z = x.outerHeight();
            Z < G && (L -= Math.round((G - Z) / 2));
          }
          return L;
        }
        function z(x, g, R) {
          if (C()) return 0;
          var L = 1;
          return (
            a.add(x).each(function (G, Z) {
              var J = parseFloat(Z.getAttribute("data-scroll-time"));
              !isNaN(J) && J >= 0 && (L = J);
            }),
            (472.143 * Math.log(Math.abs(g - R) + 125) - 2e3) * L
          );
        }
        function K(x, g, R, L) {
          return R > L ? g : x + (g - x) * Q(R / L);
        }
        function Q(x) {
          return x < 0.5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1;
        }
        function q() {
          var { WF_CLICK_EMPTY: x, WF_CLICK_SCROLL: g } = t;
          o.on(g, p, D),
            o.on(x, v, function (R) {
              R.preventDefault();
            }),
            document.head.insertBefore(E, document.head.firstChild);
        }
        return { ready: q };
      })
    );
  });
  var SE = f((hk, wE) => {
    "use strict";
    var dF = Ve();
    dF.define(
      "touch",
      (wE.exports = function (e) {
        var t = {},
          n = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (o = typeof o == "string" ? e(o).get(0) : o), o ? new r(o) : null;
          });
        function r(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            l,
            v;
          o.addEventListener("touchstart", p, !1),
            o.addEventListener("touchmove", d, !1),
            o.addEventListener("touchend", E, !1),
            o.addEventListener("touchcancel", m, !1),
            o.addEventListener("mousedown", p, !1),
            o.addEventListener("mousemove", d, !1),
            o.addEventListener("mouseup", E, !1),
            o.addEventListener("mouseout", m, !1);
          function p(O) {
            var I = O.touches;
            (I && I.length > 1) ||
              ((a = !0), I ? ((s = !0), (l = I[0].clientX)) : (l = O.clientX), (v = l));
          }
          function d(O) {
            if (a) {
              if (s && O.type === "mousemove") {
                O.preventDefault(), O.stopPropagation();
                return;
              }
              var I = O.touches,
                C = I ? I[0].clientX : O.clientX,
                S = C - v;
              (v = C),
                Math.abs(S) > u &&
                  n &&
                  String(n()) === "" &&
                  (i("swipe", O, { direction: S > 0 ? "right" : "left" }), m());
            }
          }
          function E(O) {
            if (a && ((a = !1), s && O.type === "mouseup")) {
              O.preventDefault(), O.stopPropagation(), (s = !1);
              return;
            }
          }
          function m() {
            a = !1;
          }
          function b() {
            o.removeEventListener("touchstart", p, !1),
              o.removeEventListener("touchmove", d, !1),
              o.removeEventListener("touchend", E, !1),
              o.removeEventListener("touchcancel", m, !1),
              o.removeEventListener("mousedown", p, !1),
              o.removeEventListener("mousemove", d, !1),
              o.removeEventListener("mouseup", E, !1),
              o.removeEventListener("mouseout", m, !1),
              (o = null);
          }
          this.destroy = b;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var xE = f((Ek, OE) => {
    "use strict";
    var sa = Ve(),
      pF = (e, t, n, r) => {
        let i = document.createElement("div");
        t.appendChild(i),
          turnstile.render(i, {
            sitekey: e,
            callback: function (o) {
              return n(o);
            },
            "error-callback": function () {
              r();
            },
          });
      };
    sa.define(
      "forms",
      (OE.exports = function (e, t) {
        var n = {},
          r = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          l = /e(-)?mail/i,
          v = /^\S+@\S+$/,
          p = window.alert,
          d = sa.env(),
          E,
          m,
          b,
          O = /list-manage[1-9]?.com/i,
          I = t.debounce(function () {
            p(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        n.ready =
          n.design =
          n.preview =
            function () {
              C(), !d && !E && D();
            };
        function C() {
          (u = e("html").attr("data-wf-site")),
            (m = "https://webflow.com/api/v1/form/" + u),
            a &&
              m.indexOf("https://webflow.com") >= 0 &&
              (m = m.replace("https://webflow.com", "https://formdata.webflow.com")),
            (b = `${m}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(S);
        }
        function S(N, X) {
          var j = e(X),
            k = e.data(X, s);
          k || (k = e.data(X, s, { form: j })), M(k);
          var F = j.closest("div.w-form");
          (k.done = F.find("> .w-form-done")),
            (k.fail = F.find("> .w-form-fail")),
            (k.fileUploads = F.find(".w-file-upload")),
            k.fileUploads.each(function (oe) {
              G(oe, k);
            });
          var W = k.form.attr("aria-label") || k.form.attr("data-name") || "Form";
          k.done.attr("aria-label") || k.form.attr("aria-label", W),
            k.done.attr("tabindex", "-1"),
            k.done.attr("role", "region"),
            k.done.attr("aria-label") || k.done.attr("aria-label", W + " success"),
            k.fail.attr("tabindex", "-1"),
            k.fail.attr("role", "region"),
            k.fail.attr("aria-label") || k.fail.attr("aria-label", W + " failure");
          var re = (k.action = j.attr("action"));
          if (((k.handler = null), (k.redirect = j.attr("data-redirect")), O.test(re))) {
            k.handler = g;
            return;
          }
          if (!re) {
            if (u) {
              k.handler = x;
              return;
            }
            I();
          }
        }
        function D() {
          E = !0;
          let N = r.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
          if (N) {
            let te = document.createElement("script");
            (te.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"),
              document.head.appendChild(te),
              (te.onload = () => {
                r.on("submit", s + " form", function (ae) {
                  var ve = e.data(this, s);
                  P(ve),
                    ve.handler &&
                      ((ve.evt = ae),
                      ae.preventDefault(),
                      pF(
                        N,
                        this,
                        (ue) => ve.handler({ ...ve, turnstileToken: ue }),
                        () => {
                          ve.fail.toggle(!0), ve.fail.focus(), M(ve);
                        }
                      ));
                });
              });
          } else
            r.on("submit", s + " form", function (te) {
              var ae = e.data(this, s);
              ae.handler && ((ae.evt = te), ae.handler(ae));
            });
          let X = ".w-checkbox-input",
            j = ".w-radio-input",
            k = "w--redirected-checked",
            F = "w--redirected-focus",
            W = "w--redirected-focus-visible",
            re = ":focus-visible, [data-wf-focus-visible]",
            oe = [
              ["checkbox", X],
              ["radio", j],
            ];
          r.on("change", s + ' form input[type="checkbox"]:not(' + X + ")", (te) => {
            e(te.target).siblings(X).toggleClass(k);
          }),
            r.on("change", s + ' form input[type="radio"]', (te) => {
              e(`input[name="${te.target.name}"]:not(${X})`).map((ve, ue) =>
                e(ue).siblings(j).removeClass(k)
              );
              let ae = e(te.target);
              ae.hasClass("w-radio-input") || ae.siblings(j).addClass(k);
            }),
            oe.forEach(([te, ae]) => {
              r.on("focus", s + ` form input[type="${te}"]:not(` + ae + ")", (ve) => {
                e(ve.target).siblings(ae).addClass(F),
                  e(ve.target).filter(re).siblings(ae).addClass(W);
              }),
                r.on("blur", s + ` form input[type="${te}"]:not(` + ae + ")", (ve) => {
                  e(ve.target).siblings(ae).removeClass(`${F} ${W}`);
                });
            });
        }
        function M(N) {
          var X = (N.btn = N.form.find(':input[type="submit"]'));
          (N.wait = N.btn.attr("data-wait") || null),
            (N.success = !1),
            X.prop("disabled", !1),
            N.label && X.val(N.label);
        }
        function P(N) {
          var X = N.btn,
            j = N.wait;
          X.prop("disabled", !0), j && ((N.label = X.val()), X.val(j));
        }
        function H(N, X) {
          var j = null;
          return (
            (X = X || {}),
            N.find(':input:not([type="submit"]):not([type="file"])').each(function (k, F) {
              var W = e(F),
                re = W.attr("type"),
                oe = W.attr("data-name") || W.attr("name") || "Field " + (k + 1);
              oe = encodeURIComponent(oe);
              var te = W.val();
              if (re === "checkbox") te = W.is(":checked");
              else if (re === "radio") {
                if (X[oe] === null || typeof X[oe] == "string") return;
                te = N.find('input[name="' + W.attr("name") + '"]:checked').val() || null;
              }
              typeof te == "string" && (te = e.trim(te)), (X[oe] = te), (j = j || q(W, re, oe, te));
            }),
            j
          );
        }
        function z(N) {
          var X = {};
          return (
            N.find(':input[type="file"]').each(function (j, k) {
              var F = e(k),
                W = F.attr("data-name") || F.attr("name") || "File " + (j + 1),
                re = F.attr("data-value");
              typeof re == "string" && (re = e.trim(re)), (X[W] = re);
            }),
            X
          );
        }
        let K = { _mkto_trk: "marketo" };
        function Q() {
          return document.cookie.split("; ").reduce(function (X, j) {
            let k = j.split("="),
              F = k[0];
            if (F in K) {
              let W = K[F],
                re = k.slice(1).join("=");
              X[W] = re;
            }
            return X;
          }, {});
        }
        function q(N, X, j, k) {
          var F = null;
          return (
            X === "password"
              ? (F = "Passwords cannot be submitted.")
              : N.attr("required")
              ? k
                ? l.test(N.attr("type")) &&
                  (v.test(k) || (F = "Please enter a valid email address for: " + j))
                : (F = "Please fill out the required field: " + j)
              : j === "g-recaptcha-response" &&
                !k &&
                (F = "Please confirm you\u2019re not a robot."),
            F
          );
        }
        function x(N) {
          L(N), R(N);
        }
        function g(N) {
          M(N);
          var X = N.form,
            j = {};
          if (/^https/.test(o.href) && !/^https/.test(N.action)) {
            X.attr("method", "post");
            return;
          }
          L(N);
          var k = H(X, j);
          if (k) return p(k);
          P(N);
          var F;
          t.each(j, function (te, ae) {
            l.test(ae) && (j.EMAIL = te),
              /^((full[ _-]?)?name)$/i.test(ae) && (F = te),
              /^(first[ _-]?name)$/i.test(ae) && (j.FNAME = te),
              /^(last[ _-]?name)$/i.test(ae) && (j.LNAME = te);
          }),
            F && !j.FNAME && ((F = F.split(" ")), (j.FNAME = F[0]), (j.LNAME = j.LNAME || F[1]));
          var W = N.action.replace("/post?", "/post-json?") + "&c=?",
            re = W.indexOf("u=") + 2;
          re = W.substring(re, W.indexOf("&", re));
          var oe = W.indexOf("id=") + 3;
          (oe = W.substring(oe, W.indexOf("&", oe))),
            (j["b_" + re + "_" + oe] = ""),
            e
              .ajax({ url: W, data: j, dataType: "jsonp" })
              .done(function (te) {
                (N.success = te.result === "success" || /already/.test(te.msg)),
                  N.success || console.info("MailChimp error: " + te.msg),
                  R(N);
              })
              .fail(function () {
                R(N);
              });
        }
        function R(N) {
          var X = N.form,
            j = N.redirect,
            k = N.success;
          if (k && j) {
            sa.location(j);
            return;
          }
          N.done.toggle(k),
            N.fail.toggle(!k),
            k ? N.done.focus() : N.fail.focus(),
            X.toggle(!k),
            M(N);
        }
        function L(N) {
          N.evt && N.evt.preventDefault(), (N.evt = null);
        }
        function G(N, X) {
          if (!X.fileUploads || !X.fileUploads[N]) return;
          var j,
            k = e(X.fileUploads[N]),
            F = k.find("> .w-file-upload-default"),
            W = k.find("> .w-file-upload-uploading"),
            re = k.find("> .w-file-upload-success"),
            oe = k.find("> .w-file-upload-error"),
            te = F.find(".w-file-upload-input"),
            ae = F.find(".w-file-upload-label"),
            ve = ae.children(),
            ue = oe.find(".w-file-upload-error-msg"),
            h = re.find(".w-file-upload-file"),
            V = re.find(".w-file-remove-link"),
            Y = h.find(".w-file-upload-file-name"),
            B = ue.attr("data-w-size-error"),
            ge = ue.attr("data-w-type-error"),
            ht = ue.attr("data-w-generic-error");
          if (
            (d ||
              ae.on("click keydown", function (_) {
                (_.type === "keydown" && _.which !== 13 && _.which !== 32) ||
                  (_.preventDefault(), te.click());
              }),
            ae.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            V.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            d)
          )
            te.on("click", function (_) {
              _.preventDefault();
            }),
              ae.on("click", function (_) {
                _.preventDefault();
              }),
              ve.on("click", function (_) {
                _.preventDefault();
              });
          else {
            V.on("click keydown", function (_) {
              if (_.type === "keydown") {
                if (_.which !== 13 && _.which !== 32) return;
                _.preventDefault();
              }
              te.removeAttr("data-value"),
                te.val(""),
                Y.html(""),
                F.toggle(!0),
                re.toggle(!1),
                ae.focus();
            }),
              te.on("change", function (_) {
                (j = _.target && _.target.files && _.target.files[0]),
                  j &&
                    (F.toggle(!1),
                    oe.toggle(!1),
                    W.toggle(!0),
                    W.focus(),
                    Y.text(j.name),
                    A() || P(X),
                    (X.fileUploads[N].uploading = !0),
                    Z(j, y));
              });
            var tt = ae.outerHeight();
            te.height(tt), te.width(1);
          }
          function c(_) {
            var w = _.responseJSON && _.responseJSON.msg,
              $ = ht;
            typeof w == "string" && w.indexOf("InvalidFileTypeError") === 0
              ? ($ = ge)
              : typeof w == "string" && w.indexOf("MaxFileSizeError") === 0 && ($ = B),
              ue.text($),
              te.removeAttr("data-value"),
              te.val(""),
              W.toggle(!1),
              F.toggle(!0),
              oe.toggle(!0),
              oe.focus(),
              (X.fileUploads[N].uploading = !1),
              A() || M(X);
          }
          function y(_, w) {
            if (_) return c(_);
            var $ = w.fileName,
              ne = w.postData,
              pe = w.fileId,
              U = w.s3Url;
            te.attr("data-value", pe), J(U, ne, j, $, T);
          }
          function T(_) {
            if (_) return c(_);
            W.toggle(!1),
              re.css("display", "inline-block"),
              re.focus(),
              (X.fileUploads[N].uploading = !1),
              A() || M(X);
          }
          function A() {
            var _ = (X.fileUploads && X.fileUploads.toArray()) || [];
            return _.some(function (w) {
              return w.uploading;
            });
          }
        }
        function Z(N, X) {
          var j = new URLSearchParams({ name: N.name, size: N.size });
          e.ajax({ type: "GET", url: `${b}?${j}`, crossDomain: !0 })
            .done(function (k) {
              X(null, k);
            })
            .fail(function (k) {
              X(k);
            });
        }
        function J(N, X, j, k, F) {
          var W = new FormData();
          for (var re in X) W.append(re, X[re]);
          W.append("file", j, k),
            e
              .ajax({ type: "POST", url: N, data: W, processData: !1, contentType: !1 })
              .done(function () {
                F(null);
              })
              .fail(function (oe) {
                F(oe);
              });
        }
        return n;
      })
    );
  });
  var CE = f((vk, RE) => {
    "use strict";
    var pt = Ve(),
      gF = Fn(),
      Ae = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    pt.define(
      "navbar",
      (RE.exports = function (e, t) {
        var n = {},
          r = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          u,
          l,
          v,
          p = pt.env(),
          d = '<div class="w-nav-overlay" data-wf-ignore />',
          E = ".w-nav",
          m = "w--open",
          b = "w--nav-dropdown-open",
          O = "w--nav-dropdown-toggle-open",
          I = "w--nav-dropdown-list-open",
          C = "w--nav-link-open",
          S = gF.triggers,
          D = e();
        (n.ready = n.design = n.preview = M),
          (n.destroy = function () {
            (D = e()), P(), u && u.length && u.each(Q);
          });
        function M() {
          (l = p && pt.env("design")),
            (v = pt.env("editor")),
            (s = e(document.body)),
            (u = o.find(E)),
            u.length && (u.each(K), P(), H());
        }
        function P() {
          pt.resize.off(z);
        }
        function H() {
          pt.resize.on(z);
        }
        function z() {
          u.each(F);
        }
        function K(h, V) {
          var Y = e(V),
            B = e.data(V, E);
          B || (B = e.data(V, E, { open: !1, el: Y, config: {}, selectedIdx: -1 })),
            (B.menu = Y.find(".w-nav-menu")),
            (B.links = B.menu.find(".w-nav-link")),
            (B.dropdowns = B.menu.find(".w-dropdown")),
            (B.dropdownToggle = B.menu.find(".w-dropdown-toggle")),
            (B.dropdownList = B.menu.find(".w-dropdown-list")),
            (B.button = Y.find(".w-nav-button")),
            (B.container = Y.find(".w-container")),
            (B.overlayContainerId = "w-nav-overlay-" + h),
            (B.outside = j(B));
          var ge = Y.find(".w-nav-brand");
          ge &&
            ge.attr("href") === "/" &&
            ge.attr("aria-label") == null &&
            ge.attr("aria-label", "home"),
            B.button.attr("style", "-webkit-user-select: text;"),
            B.button.attr("aria-label") == null && B.button.attr("aria-label", "menu"),
            B.button.attr("role", "button"),
            B.button.attr("tabindex", "0"),
            B.button.attr("aria-controls", B.overlayContainerId),
            B.button.attr("aria-haspopup", "menu"),
            B.button.attr("aria-expanded", "false"),
            B.el.off(E),
            B.button.off(E),
            B.menu.off(E),
            g(B),
            l
              ? (q(B), B.el.on("setting" + E, R(B)))
              : (x(B),
                B.button.on("click" + E, N(B)),
                B.menu.on("click" + E, "a", X(B)),
                B.button.on("keydown" + E, L(B)),
                B.el.on("keydown" + E, G(B))),
            F(h, V);
        }
        function Q(h, V) {
          var Y = e.data(V, E);
          Y && (q(Y), e.removeData(V, E));
        }
        function q(h) {
          h.overlay && (ue(h, !0), h.overlay.remove(), (h.overlay = null));
        }
        function x(h) {
          h.overlay ||
            ((h.overlay = e(d).appendTo(h.el)),
            h.overlay.attr("id", h.overlayContainerId),
            (h.parent = h.menu.parent()),
            ue(h, !0));
        }
        function g(h) {
          var V = {},
            Y = h.config || {},
            B = (V.animation = h.el.attr("data-animation") || "default");
          (V.animOver = /^over/.test(B)),
            (V.animDirect = /left$/.test(B) ? -1 : 1),
            Y.animation !== B && h.open && t.defer(J, h),
            (V.easing = h.el.attr("data-easing") || "ease"),
            (V.easing2 = h.el.attr("data-easing2") || "ease");
          var ge = h.el.attr("data-duration");
          (V.duration = ge != null ? Number(ge) : 400),
            (V.docHeight = h.el.attr("data-doc-height")),
            (h.config = V);
        }
        function R(h) {
          return function (V, Y) {
            Y = Y || {};
            var B = i.width();
            g(h),
              Y.open === !0 && ae(h, !0),
              Y.open === !1 && ue(h, !0),
              h.open &&
                t.defer(function () {
                  B !== i.width() && J(h);
                });
          };
        }
        function L(h) {
          return function (V) {
            switch (V.keyCode) {
              case Ae.SPACE:
              case Ae.ENTER:
                return N(h)(), V.preventDefault(), V.stopPropagation();
              case Ae.ESCAPE:
                return ue(h), V.preventDefault(), V.stopPropagation();
              case Ae.ARROW_RIGHT:
              case Ae.ARROW_DOWN:
              case Ae.HOME:
              case Ae.END:
                return h.open
                  ? (V.keyCode === Ae.END
                      ? (h.selectedIdx = h.links.length - 1)
                      : (h.selectedIdx = 0),
                    Z(h),
                    V.preventDefault(),
                    V.stopPropagation())
                  : (V.preventDefault(), V.stopPropagation());
            }
          };
        }
        function G(h) {
          return function (V) {
            if (h.open)
              switch (((h.selectedIdx = h.links.index(document.activeElement)), V.keyCode)) {
                case Ae.HOME:
                case Ae.END:
                  return (
                    V.keyCode === Ae.END
                      ? (h.selectedIdx = h.links.length - 1)
                      : (h.selectedIdx = 0),
                    Z(h),
                    V.preventDefault(),
                    V.stopPropagation()
                  );
                case Ae.ESCAPE:
                  return ue(h), h.button.focus(), V.preventDefault(), V.stopPropagation();
                case Ae.ARROW_LEFT:
                case Ae.ARROW_UP:
                  return (
                    (h.selectedIdx = Math.max(-1, h.selectedIdx - 1)),
                    Z(h),
                    V.preventDefault(),
                    V.stopPropagation()
                  );
                case Ae.ARROW_RIGHT:
                case Ae.ARROW_DOWN:
                  return (
                    (h.selectedIdx = Math.min(h.links.length - 1, h.selectedIdx + 1)),
                    Z(h),
                    V.preventDefault(),
                    V.stopPropagation()
                  );
              }
          };
        }
        function Z(h) {
          if (h.links[h.selectedIdx]) {
            var V = h.links[h.selectedIdx];
            V.focus(), X(V);
          }
        }
        function J(h) {
          h.open && (ue(h, !0), ae(h, !0));
        }
        function N(h) {
          return a(function () {
            h.open ? ue(h) : ae(h);
          });
        }
        function X(h) {
          return function (V) {
            var Y = e(this),
              B = Y.attr("href");
            if (!pt.validClick(V.currentTarget)) {
              V.preventDefault();
              return;
            }
            B && B.indexOf("#") === 0 && h.open && ue(h);
          };
        }
        function j(h) {
          return (
            h.outside && o.off("click" + E, h.outside),
            function (V) {
              var Y = e(V.target);
              (v && Y.closest(".w-editor-bem-EditorOverlay").length) || k(h, Y);
            }
          );
        }
        var k = a(function (h, V) {
          if (h.open) {
            var Y = V.closest(".w-nav-menu");
            h.menu.is(Y) || ue(h);
          }
        });
        function F(h, V) {
          var Y = e.data(V, E),
            B = (Y.collapsed = Y.button.css("display") !== "none");
          if ((Y.open && !B && !l && ue(Y, !0), Y.container.length)) {
            var ge = re(Y);
            Y.links.each(ge), Y.dropdowns.each(ge);
          }
          Y.open && ve(Y);
        }
        var W = "max-width";
        function re(h) {
          var V = h.container.css(W);
          return (
            V === "none" && (V = ""),
            function (Y, B) {
              (B = e(B)), B.css(W, ""), B.css(W) === "none" && B.css(W, V);
            }
          );
        }
        function oe(h, V) {
          V.setAttribute("data-nav-menu-open", "");
        }
        function te(h, V) {
          V.removeAttribute("data-nav-menu-open");
        }
        function ae(h, V) {
          if (h.open) return;
          (h.open = !0),
            h.menu.each(oe),
            h.links.addClass(C),
            h.dropdowns.addClass(b),
            h.dropdownToggle.addClass(O),
            h.dropdownList.addClass(I),
            h.button.addClass(m);
          var Y = h.config,
            B = Y.animation;
          (B === "none" || !r.support.transform || Y.duration <= 0) && (V = !0);
          var ge = ve(h),
            ht = h.menu.outerHeight(!0),
            tt = h.menu.outerWidth(!0),
            c = h.el.height(),
            y = h.el[0];
          if ((F(0, y), S.intro(0, y), pt.redraw.up(), l || o.on("click" + E, h.outside), V)) {
            _();
            return;
          }
          var T = "transform " + Y.duration + "ms " + Y.easing;
          if ((h.overlay && ((D = h.menu.prev()), h.overlay.show().append(h.menu)), Y.animOver)) {
            r(h.menu)
              .add(T)
              .set({ x: Y.animDirect * tt, height: ge })
              .start({ x: 0 })
              .then(_),
              h.overlay && h.overlay.width(tt);
            return;
          }
          var A = c + ht;
          r(h.menu).add(T).set({ y: -A }).start({ y: 0 }).then(_);
          function _() {
            h.button.attr("aria-expanded", "true");
          }
        }
        function ve(h) {
          var V = h.config,
            Y = V.docHeight ? o.height() : s.height();
          return (
            V.animOver
              ? h.menu.height(Y)
              : h.el.css("position") !== "fixed" && (Y -= h.el.outerHeight(!0)),
            h.overlay && h.overlay.height(Y),
            Y
          );
        }
        function ue(h, V) {
          if (!h.open) return;
          (h.open = !1), h.button.removeClass(m);
          var Y = h.config;
          if (
            ((Y.animation === "none" || !r.support.transform || Y.duration <= 0) && (V = !0),
            S.outro(0, h.el[0]),
            o.off("click" + E, h.outside),
            V)
          ) {
            r(h.menu).stop(), y();
            return;
          }
          var B = "transform " + Y.duration + "ms " + Y.easing2,
            ge = h.menu.outerHeight(!0),
            ht = h.menu.outerWidth(!0),
            tt = h.el.height();
          if (Y.animOver) {
            r(h.menu)
              .add(B)
              .start({ x: ht * Y.animDirect })
              .then(y);
            return;
          }
          var c = tt + ge;
          r(h.menu).add(B).start({ y: -c }).then(y);
          function y() {
            h.menu.height(""),
              r(h.menu).set({ x: 0, y: 0 }),
              h.menu.each(te),
              h.links.removeClass(C),
              h.dropdowns.removeClass(b),
              h.dropdownToggle.removeClass(O),
              h.dropdownList.removeClass(I),
              h.overlay &&
                h.overlay.children().length &&
                (D.length ? h.menu.insertAfter(D) : h.menu.prependTo(h.parent),
                h.overlay.attr("style", "").hide()),
              h.el.triggerHandler("w-close"),
              h.button.attr("aria-expanded", "false");
          }
        }
        return n;
      })
    );
  });
  var LE = f((yk, PE) => {
    "use strict";
    var gt = Ve(),
      hF = Fn();
    gt.define(
      "tabs",
      (PE.exports = function (e) {
        var t = {},
          n = e.tram,
          r = e(document),
          i,
          o,
          a = gt.env,
          s = a.safari,
          u = a(),
          l = "data-w-tab",
          v = "data-w-pane",
          p = ".w-tabs",
          d = "w--current",
          E = "w--tab-active",
          m = hF.triggers,
          b = !1;
        (t.ready = t.design = t.preview = O),
          (t.redraw = function () {
            (b = !0), O(), (b = !1);
          }),
          (t.destroy = function () {
            (i = r.find(p)), i.length && (i.each(S), I());
          });
        function O() {
          (o = u && gt.env("design")),
            (i = r.find(p)),
            i.length && (i.each(D), gt.env("preview") && !b && i.each(S), I(), C());
        }
        function I() {
          gt.redraw.off(t.redraw);
        }
        function C() {
          gt.redraw.on(t.redraw);
        }
        function S(q, x) {
          var g = e.data(x, p);
          g && (g.links && g.links.each(m.reset), g.panes && g.panes.each(m.reset));
        }
        function D(q, x) {
          var g = p.substr(1) + "-" + q,
            R = e(x),
            L = e.data(x, p);
          if (
            (L || (L = e.data(x, p, { el: R, config: {} })),
            (L.current = null),
            (L.tabIdentifier = g + "-" + l),
            (L.paneIdentifier = g + "-" + v),
            (L.menu = R.children(".w-tab-menu")),
            (L.links = L.menu.children(".w-tab-link")),
            (L.content = R.children(".w-tab-content")),
            (L.panes = L.content.children(".w-tab-pane")),
            L.el.off(p),
            L.links.off(p),
            L.menu.attr("role", "tablist"),
            L.links.attr("tabindex", "-1"),
            M(L),
            !o)
          ) {
            L.links.on("click" + p, H(L)), L.links.on("keydown" + p, z(L));
            var G = L.links.filter("." + d),
              Z = G.attr(l);
            Z && K(L, { tab: Z, immediate: !0 });
          }
        }
        function M(q) {
          var x = {};
          x.easing = q.el.attr("data-easing") || "ease";
          var g = parseInt(q.el.attr("data-duration-in"), 10);
          g = x.intro = g === g ? g : 0;
          var R = parseInt(q.el.attr("data-duration-out"), 10);
          (R = x.outro = R === R ? R : 0), (x.immediate = !g && !R), (q.config = x);
        }
        function P(q) {
          var x = q.current;
          return Array.prototype.findIndex.call(q.links, (g) => g.getAttribute(l) === x, null);
        }
        function H(q) {
          return function (x) {
            x.preventDefault();
            var g = x.currentTarget.getAttribute(l);
            g && K(q, { tab: g });
          };
        }
        function z(q) {
          return function (x) {
            var g = P(q),
              R = x.key,
              L = {
                ArrowLeft: g - 1,
                ArrowUp: g - 1,
                ArrowRight: g + 1,
                ArrowDown: g + 1,
                End: q.links.length - 1,
                Home: 0,
              };
            if (R in L) {
              x.preventDefault();
              var G = L[R];
              G === -1 && (G = q.links.length - 1), G === q.links.length && (G = 0);
              var Z = q.links[G],
                J = Z.getAttribute(l);
              J && K(q, { tab: J });
            }
          };
        }
        function K(q, x) {
          x = x || {};
          var g = q.config,
            R = g.easing,
            L = x.tab;
          if (L !== q.current) {
            q.current = L;
            var G;
            q.links.each(function (F, W) {
              var re = e(W);
              if (x.immediate || g.immediate) {
                var oe = q.panes[F];
                W.id || (W.id = q.tabIdentifier + "-" + F),
                  oe.id || (oe.id = q.paneIdentifier + "-" + F),
                  (W.href = "#" + oe.id),
                  W.setAttribute("role", "tab"),
                  W.setAttribute("aria-controls", oe.id),
                  W.setAttribute("aria-selected", "false"),
                  oe.setAttribute("role", "tabpanel"),
                  oe.setAttribute("aria-labelledby", W.id);
              }
              W.getAttribute(l) === L
                ? ((G = W),
                  re
                    .addClass(d)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(m.intro))
                : re.hasClass(d) &&
                  re
                    .removeClass(d)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(m.outro);
            });
            var Z = [],
              J = [];
            q.panes.each(function (F, W) {
              var re = e(W);
              W.getAttribute(l) === L ? Z.push(W) : re.hasClass(E) && J.push(W);
            });
            var N = e(Z),
              X = e(J);
            if (x.immediate || g.immediate) {
              N.addClass(E).each(m.intro), X.removeClass(E), b || gt.redraw.up();
              return;
            } else {
              var j = window.scrollX,
                k = window.scrollY;
              G.focus(), window.scrollTo(j, k);
            }
            X.length && g.outro
              ? (X.each(m.outro),
                n(X)
                  .add("opacity " + g.outro + "ms " + R, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => Q(g, X, N)))
              : Q(g, X, N);
          }
        }
        function Q(q, x, g) {
          if (
            (x
              .removeClass(E)
              .css({ opacity: "", transition: "", transform: "", width: "", height: "" }),
            g.addClass(E).each(m.intro),
            gt.redraw.up(),
            !q.intro)
          )
            return n(g).set({ opacity: 1 });
          n(g)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + q.intro + "ms " + q.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Ia();
  ba();
  Sa();
  Fn();
  _E();
  TE();
  AE();
  SE();
  xE();
  CE();
  LE();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-13",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "e444fc05-392d-3bc5-27d3-203cfffbccdc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        { id: "e444fc05-392d-3bc5-27d3-203cfffbccdc", appliesTo: "ELEMENT", styleBlockIds: [] },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726040713030,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "66c8212a336539dcc154e217|a695a0a2-6b3b-34f9-82a0-a3d44ad4be13",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|a695a0a2-6b3b-34f9-82a0-a3d44ad4be13",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726045078514,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "66c8212a336539dcc154e217|a695a0a2-6b3b-34f9-82a0-a3d44ad4be13",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|a695a0a2-6b3b-34f9-82a0-a3d44ad4be13",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726045078514,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-25",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "66c8212a336539dcc154e217|cd1e2c82-bd92-2088-a2ff-a2e73183421f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|cd1e2c82-bd92-2088-a2ff-a2e73183421f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726048479932,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "66c8212a336539dcc154e217|cd1e2c82-bd92-2088-a2ff-a2e73183421f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|cd1e2c82-bd92-2088-a2ff-a2e73183421f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726048479932,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-27",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66c8212a336539dcc154e217|108bd084-0f57-b54e-0105-22b04733cd41",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|108bd084-0f57-b54e-0105-22b04733cd41",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726049164011,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-26",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66c8212a336539dcc154e217|108bd084-0f57-b54e-0105-22b04733cd41",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|108bd084-0f57-b54e-0105-22b04733cd41",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726049164012,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66c8212a336539dcc154e217|ed0c78b8-3af1-487d-49e7-cc5b8a57952d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|ed0c78b8-3af1-487d-49e7-cc5b8a57952d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726049177537,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-28",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66c8212a336539dcc154e217|ed0c78b8-3af1-487d-49e7-cc5b8a57952d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|ed0c78b8-3af1-487d-49e7-cc5b8a57952d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726049177537,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-31",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66c8212a336539dcc154e217|32752cc4-541e-9aef-a976-71094e5d6bf0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|32752cc4-541e-9aef-a976-71094e5d6bf0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726049534546,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66c8212a336539dcc154e217|32752cc4-541e-9aef-a976-71094e5d6bf0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|32752cc4-541e-9aef-a976-71094e5d6bf0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726049534546,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-33",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66c8212a336539dcc154e217|06778f44-42d4-d014-152f-9ac6de5d4282",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|06778f44-42d4-d014-152f-9ac6de5d4282",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726049792987,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66c8212a336539dcc154e217|06778f44-42d4-d014-152f-9ac6de5d4282",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|06778f44-42d4-d014-152f-9ac6de5d4282",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726049792987,
    },
    "e-34": {
      id: "e-34",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-35",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66c8212a336539dcc154e217|5e5112e9-c291-a1ba-1728-31b23874c87c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|5e5112e9-c291-a1ba-1728-31b23874c87c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726049825019,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-34",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66c8212a336539dcc154e217|5e5112e9-c291-a1ba-1728-31b23874c87c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|5e5112e9-c291-a1ba-1728-31b23874c87c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726049825019,
    },
    "e-36": {
      id: "e-36",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66c8212a336539dcc154e217|288943b7-482e-34e9-de7a-b5b27e2f23d7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|288943b7-482e-34e9-de7a-b5b27e2f23d7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726049849337,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66c8212a336539dcc154e217|288943b7-482e-34e9-de7a-b5b27e2f23d7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|288943b7-482e-34e9-de7a-b5b27e2f23d7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726049849337,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-39",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66c8212a336539dcc154e217|d5b4feae-1ef8-aae9-1fcb-f720c1ca68ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|d5b4feae-1ef8-aae9-1fcb-f720c1ca68ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726050119257,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66c8212a336539dcc154e217|d5b4feae-1ef8-aae9-1fcb-f720c1ca68ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|d5b4feae-1ef8-aae9-1fcb-f720c1ca68ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726050119258,
    },
    "e-40": {
      id: "e-40",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-41",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66c8212a336539dcc154e217|7ffa706f-97f2-3f1a-5afa-940c750e271e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|7ffa706f-97f2-3f1a-5afa-940c750e271e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726050223705,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-40",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "66c8212a336539dcc154e217|7ffa706f-97f2-3f1a-5afa-940c750e271e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "66c8212a336539dcc154e217|7ffa706f-97f2-3f1a-5afa-940c750e271e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1726050223706,
    },
  },
  actionLists: {
    "a-7": {
      id: "a-7",
      title: "hover second",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n-6",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "66c8212a336539dcc154e217|108bd084-0f57-b54e-0105-22b04733cd41",
                },
                globalSwatchId: "--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-7-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "66c8212a336539dcc154e217|108bd084-0f57-b54e-0105-22b04733cd41",
                },
                globalSwatchId: "--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-7-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "bouncePast",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hover-circle.secondary",
                  selectorGuids: [
                    "e84b53e5-e9b9-ea83-0227-26395ec60914",
                    "40c45fa3-bc70-a95f-b3fa-08b4ae09c4fe",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-3",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "66c8212a336539dcc154e217|108bd084-0f57-b54e-0105-22b04733cd41",
                },
                globalSwatchId: "--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "66c8212a336539dcc154e217|108bd084-0f57-b54e-0105-22b04733cd41",
                },
                globalSwatchId: "--text--black-bg--heading",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-7-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hover-circle.secondary",
                  selectorGuids: [
                    "e84b53e5-e9b9-ea83-0227-26395ec60914",
                    "40c45fa3-bc70-a95f-b3fa-08b4ae09c4fe",
                  ],
                },
                xValue: 30,
                yValue: 14,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1726040716020,
    },
    "a-8": {
      id: "a-8",
      title: "hover second out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n-6",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "66c8212a336539dcc154e217|108bd084-0f57-b54e-0105-22b04733cd41",
                },
                globalSwatchId: "--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-8-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "66c8212a336539dcc154e217|108bd084-0f57-b54e-0105-22b04733cd41",
                },
                globalSwatchId: "--white",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-8-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [1, 0.007, 0.012, 1.007],
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hover-circle.secondary",
                  selectorGuids: [
                    "e84b53e5-e9b9-ea83-0227-26395ec60914",
                    "40c45fa3-bc70-a95f-b3fa-08b4ae09c4fe",
                  ],
                },
                xValue: 30,
                yValue: 30,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-8-n-8",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: true,
                  id: "66c8212a336539dcc154e217|108bd084-0f57-b54e-0105-22b04733cd41",
                },
                globalSwatchId: "--black",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 1,
              },
            },
            {
              id: "a-8-n-9",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  useEventTarget: true,
                  id: "66c8212a336539dcc154e217|108bd084-0f57-b54e-0105-22b04733cd41",
                },
                globalSwatchId: "--text--white-bg--heading",
                rValue: 37,
                bValue: 44,
                gValue: 37,
                aValue: 1,
              },
            },
            {
              id: "a-8-n-10",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hover-circle.secondary",
                  selectorGuids: [
                    "e84b53e5-e9b9-ea83-0227-26395ec60914",
                    "40c45fa3-bc70-a95f-b3fa-08b4ae09c4fe",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1726040716020,
    },
    "a-5": {
      id: "a-5",
      title: "button hover primary",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "TRANSFORM_SKEW",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hover-circle",
                  selectorGuids: ["e84b53e5-e9b9-ea83-0227-26395ec60914"],
                },
                xValue: 1,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-5-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hover-circle",
                  selectorGuids: ["e84b53e5-e9b9-ea83-0227-26395ec60914"],
                },
                xValue: 30,
                yValue: 15,
                zValue: null,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1726035866007,
    },
    "a-6": {
      id: "a-6",
      title: "button hover out primary",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hover-circle",
                  selectorGuids: ["e84b53e5-e9b9-ea83-0227-26395ec60914"],
                },
                xValue: 30,
                yValue: 15,
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hover-circle",
                  selectorGuids: ["e84b53e5-e9b9-ea83-0227-26395ec60914"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "TRANSFORM_SKEW",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".hover-circle",
                  selectorGuids: ["e84b53e5-e9b9-ea83-0227-26395ec60914"],
                },
                xValue: 1,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1726035866007,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
