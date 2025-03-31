import ee from "react";
var g = { exports: {} }, _ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function re() {
  if (F) return _;
  F = 1;
  var l = Symbol.for("react.transitional.element"), R = Symbol.for("react.fragment");
  function f(d, o, s) {
    var m = null;
    if (s !== void 0 && (m = "" + s), o.key !== void 0 && (m = "" + o.key), "key" in o) {
      s = {};
      for (var E in o)
        E !== "key" && (s[E] = o[E]);
    } else s = o;
    return o = s.ref, {
      $$typeof: l,
      type: d,
      key: m,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return _.Fragment = R, _.jsx = f, _.jsxs = f, _;
}
var v = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function te() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case p:
          return "Fragment";
        case z:
          return "Profiler";
        case U:
          return "StrictMode";
        case J:
          return "Suspense";
        case X:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case W:
            return "Portal";
          case q:
            return (e.displayName || "Context") + ".Provider";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case B:
            return r = e.displayName || null, r !== null ? r : l(e.type) || "Memo";
          case w:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function R(e) {
      return "" + e;
    }
    function f(e) {
      try {
        R(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), R(e);
      }
    }
    function d(e) {
      if (e === p) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === w)
        return "<...>";
      try {
        var r = l(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function E(e, r) {
      function t() {
        y || (y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function M() {
      var e = l(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function L(e, r, t, n, u, c, A, O) {
      return t = c.ref, e = {
        $$typeof: x,
        type: e,
        key: r,
        props: c,
        _owner: u
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: M
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function S(e, r, t, n, u, c, A, O) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (Q(a)) {
            for (n = 0; n < a.length; n++)
              P(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(a);
      if (N.call(r, "key")) {
        a = l(e);
        var i = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        n = 0 < i.length ? "{key: someKey, " + i.join(": ..., ") + ": ...}" : "{key: someKey}", $[a + n] || (i = 0 < i.length ? "{" + i.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          i,
          a
        ), $[a + n] = !0);
      }
      if (a = null, t !== void 0 && (f(t), a = "" + t), m(r) && (f(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var j in r)
          j !== "key" && (t[j] = r[j]);
      } else t = r;
      return a && E(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), L(
        e,
        a,
        c,
        u,
        o(),
        t,
        A,
        O
      );
    }
    function P(e) {
      typeof e == "object" && e !== null && e.$$typeof === x && e._store && (e._store.validated = 1);
    }
    var T = ee, x = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), q = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), k = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, Q = Array.isArray, h = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var y, C = {}, Y = T["react-stack-bottom-frame"].bind(
      T,
      s
    )(), I = h(d(s)), $ = {};
    v.Fragment = p, v.jsx = function(e, r, t, n, u) {
      var c = 1e4 > k.recentlyCreatedOwnerStacks++;
      return S(
        e,
        r,
        t,
        !1,
        n,
        u,
        c ? Error("react-stack-top-frame") : Y,
        c ? h(d(e)) : I
      );
    }, v.jsxs = function(e, r, t, n, u) {
      var c = 1e4 > k.recentlyCreatedOwnerStacks++;
      return S(
        e,
        r,
        t,
        !0,
        n,
        u,
        c ? Error("react-stack-top-frame") : Y,
        c ? h(d(e)) : I
      );
    };
  }()), v;
}
process.env.NODE_ENV === "production" ? g.exports = re() : g.exports = te();
var b = g.exports;
function ae(l) {
  return /* @__PURE__ */ b.jsx("div", { className: "agentica-chat-movie", children: /* @__PURE__ */ b.jsx("div", { className: "agentica-chat-movie__container", children: /* @__PURE__ */ b.jsx("div", { className: "agentica-chat-movie__container__header", children: /* @__PURE__ */ b.jsx("div", { className: "agentica-chat-movie__container__header__title", children: /* @__PURE__ */ b.jsx("h1", { children: "Agentica Chat" }) }) }) }) });
}
export {
  ae as AgenticaChatMovie
};
