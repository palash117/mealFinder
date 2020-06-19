// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"dist/script.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "Q0RO": [function (require, module, exports) {
    function e(e, n) {
      if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
    }

    function n(e, n) {
      for (var a = 0; a < n.length; a++) {
        var t = n[a];
        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
      }
    }

    function a(e, a, t) {
      return a && n(e.prototype, a), t && n(e, t), e;
    }

    var t = function () {
      function n(a, t, i) {
        e(this, n), this.imageLink = t, this.imageInfo = a, this.mealId = i;
      }

      return a(n, [{
        key: "toHTML",
        value: function value() {
          return '<div class="imageResult"><img src="'.concat(this.imageLink, '" alt="').concat(this.imageInfo, '" mealId="').concat(this.mealId, '"><div class="imageInfo" mealId="').concat(this.mealId, '"><h3 mealId="').concat(this.mealId, '">').concat(this.imageInfo, "</h3></div></div>");
        }
      }]), n;
    }();

    module.exports = t;
  }, {}],
  "OtAu": [function (require, module, exports) {
    var e = require("./imageResult"),
        r = function r(_r) {
      return _r.meals.map(function (r) {
        var n = r.strMeal,
            t = r.idMeal,
            u = r.strMealThumb;
        return new e(n, u, t);
      });
    },
        n = function n(e) {
      return r(e).map(function (e) {
        return e.toHTML();
      }).reduce(function (e, r) {
        return e + r;
      });
    };

    module.exports = r;
  }, {
    "./imageResult": "Q0RO"
  }],
  "pybd": [function (require, module, exports) {
    function e(e, i) {
      if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function");
    }

    function i(e, i) {
      for (var t = 0; t < i.length; t++) {
        var n = i[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function t(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    }

    var n = function () {
      function i(t, n, c, r, a) {
        e(this, i), this.recepieName = t, this.recepieImageLink = n, this.recepieTag = c, this.recepieMethod = r, this.recepieIngredients = a;
      }

      return t(i, [{
        key: "toHTMl",
        value: function value() {
          return '<div class="recepieName">' + "<h3>".concat(this.recepieName, "</h3></div>") + '<img class="recepieImage" src="'.concat(this.recepieImageLink, '" alt="').concat(this.recepieName, '">') + this.recepieTag == null ? "" : '<div class="recepieTag"><h3>'.concat(this.recepieTag, "</h3></div>") + '<div class="recepieMethod">'.concat(this.recepieMethod, "</div>") + '<div class="recepieIngredients">' + this.getRecepieIngredientsHtml() + "</div>";
        }
      }, {
        key: "getRecepieIngredientsHtml",
        value: function value() {
          return this.recepieIngredients.map(function (e) {
            return '<div class="recepieIngredient"><div class="ingredientName">'.concat(e.getIngredientName(), '</div><div class="ingredientQuantity">').concat(e.getIngredientQuantity(), "</div></div>");
          }).reduce(function (e, i) {
            return e + i;
          });
        }
      }, {
        key: "testFunc",
        value: function value() {
          return 10;
        }
      }]), i;
    }();

    module.exports = n;
  }, {}],
  "yyXK": [function (require, module, exports) {
    function e(e, n) {
      if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
    }

    function n(e, n) {
      for (var t = 0; t < n.length; t++) {
        var i = n[t];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }

    function t(e, t, i) {
      return t && n(e.prototype, t), i && n(e, i), e;
    }

    var i = function () {
      function n(t, i) {
        e(this, n), this.ingredientName = t, this.ingredientQuantity = i;
      }

      return t(n, [{
        key: "getIngredientName",
        value: function value() {
          return this.ingredientName;
        }
      }, {
        key: "getIngredientQuantity",
        value: function value() {
          return this.ingredientQuantity;
        }
      }]), n;
    }();

    module.exports = i;
  }, {}],
  "oX13": [function (require, module, exports) {
    var e = require("./recepieResult"),
        r = require("./Ingredients"),
        t = function t(_t) {
      for (var n = (_t = _t.meals[0]).strMeal, s = _t.strMealThumb, u = _t.strTags, i = _t.strInstructions, a = [], l = 1; null != _t["strIngredient" + l] && null != _t["strIngredient" + l] && "" != _t["strIngredient" + l];) {
        a.push(new r(_t["".concat("strIngredient" + l)], _t["".concat("strMeasure" + l)])), l++;
      }

      return new e(n, s, u, i, a);
    };

    module.exports = t;
  }, {
    "./recepieResult": "pybd",
    "./Ingredients": "yyXK"
  }],
  "mpVp": [function (require, module, exports) {
    var e,
        n,
        t,
        r,
        o,
        c = require("./modules/mealsConverter"),
        u = require("./modules/singleMealConverter"),
        i = require("./modules/Ingredients"),
        l = require("./modules/imageResult"),
        s = require("./modules/recepieResult"),
        a = function a() {
      d(), m(), f();
    },
        d = function d() {
      e = document.querySelector(".searchBarInput"), n = document.querySelector(".search"), t = document.querySelector(".random"), r = document.querySelector(".imageSearchResult"), o = document.querySelector(".recepieContainer");
    },
        m = function m() {
      n.addEventListener("click", p);
    },
        f = function f() {},
        h = function h(e) {
      searchText = v(), searchResult = fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(searchText)).then(function (e) {
        return e.json();
      }).then(function (n) {
        g(c(n).map(function (e) {
          return e.toHTML();
        }).reduce(function (e, n) {
          return e + n;
        }), r), e();
      });
    },
        p = function p() {
      h(function () {
        document.querySelectorAll(".imageResult").forEach(function (e) {
          return e.addEventListener("click", q);
        });
      });
    },
        q = function q(e) {
      var n = w(e.target);
      mealResponse = fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(n)).then(function (e) {
        return e.json();
      }).then(function (e) {
        g(u(e).toHTMl(), o), o.scrollTop = o.scrollHeight;
      });
    },
        v = function v() {
      return e.value;
    },
        g = function g(e, n) {
      return n.innerHTML = e, e;
    },
        w = function w(e) {
      return e.getAttribute("mealId");
    };

    window.onload = a, console.log("script run "), window.setInterval(function () {
      var e = document.querySelector(".recepieContainer");
      e.scrollTop = e.scrollHeight;
    }, 5e3);
  }, {
    "./modules/mealsConverter": "OtAu",
    "./modules/singleMealConverter": "oX13",
    "./modules/Ingredients": "yyXK",
    "./modules/imageResult": "Q0RO",
    "./modules/recepieResult": "pybd"
  }]
}, {}, ["mpVp"], null);
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59607" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dist/script.js"], null)
//# sourceMappingURL=/script.834ed2f9.js.map