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
})({"src/script/imageResult.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageResult = /*#__PURE__*/function () {
  function ImageResult(imageInfor, imagelink, mealId) {
    _classCallCheck(this, ImageResult);

    this.imageLink = imagelink;
    this.imageInfo = imageInfor;
    this.mealId = mealId;
  }

  _createClass(ImageResult, [{
    key: "toHTML",
    value: function toHTML() {
      return "<div class=\"imageResult\"><img src=\"".concat(this.imageLink, "\" alt=\"").concat(this.imageInfo, "\" mealId=\"").concat(this.mealId, "\"><div class=\"imageInfo\" mealId=\"").concat(this.mealId, "\"><h3 mealId=\"").concat(this.mealId, "\">").concat(this.imageInfo, "</h3></div></div>");
    }
  }]);

  return ImageResult;
}();

module.exports = ImageResult;
},{}],"src/script/mealsConverter.js":[function(require,module,exports) {
var ImageResult = require("./imageResult");

var mealsToImageResultConverter = function mealsToImageResultConverter(mealsResponse) {
  return mealsResponse.meals.map(function (meal) {
    var imageInfor = meal.strMeal;
    var mealId = meal.idMeal;
    var imageLink = meal.strMealThumb;
    return new ImageResult(imageInfor, imageLink, mealId);
  });
};

var mealsToImageResultHTMLConverter = function mealsToImageResultHTMLConverter(mealsResponse) {
  var imageResults = mealsToImageResultConverter(mealsResponse);
  return imageResults.map(function (i) {
    return i.toHTML();
  }).reduce(function (a, b) {
    return a + b;
  });
};

module.exports = mealsToImageResultConverter;
},{"./imageResult":"src/script/imageResult.js"}],"src/script/recepieResult.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RecepieResult = /*#__PURE__*/function () {
  function RecepieResult(recepieName, recepieImageLink, recepieTag, recepieMethod, recepieIngredients) {
    _classCallCheck(this, RecepieResult);

    this.recepieName = recepieName;
    this.recepieImageLink = recepieImageLink;
    this.recepieTag = recepieTag;
    this.recepieMethod = recepieMethod;
    this.recepieIngredients = recepieIngredients;
  }

  _createClass(RecepieResult, [{
    key: "toHTMl",
    value: function toHTMl() {
      var html = "<div class=\"recepieName\">" + "<h3>".concat(this.recepieName, "</h3></div>") + "<img class=\"recepieImage\" src=\"".concat(this.recepieImageLink, "\" alt=\"").concat(this.recepieName, "\">") + "<div class=\"recepieTag\"><h3>".concat(this.recepieTag, "</h3></div>") + "<div class=\"recepieMethod\">".concat(this.recepieMethod, "</div>") + "<div class=\"recepieIngredients\">" + this.getRecepieIngredientsHtml() + "</div>"; // console.log(html)

      return html;
    }
  }, {
    key: "getRecepieIngredientsHtml",
    value: function getRecepieIngredientsHtml() {
      // console.log(this.recepieIngredients)
      return this.recepieIngredients.map(function (b) {
        return "<div class=\"recepieIngredient\"><div class=\"ingredientName\">".concat(b.getIngredientName(), "</div><div class=\"ingredientQuantity\">").concat(b.getIngredientQuantity(), "</div></div>");
      }).reduce(function (a, b) {
        return a + b;
      });
    }
  }, {
    key: "testFunc",
    value: function testFunc() {
      return 10;
    }
  }]);

  return RecepieResult;
}();

module.exports = RecepieResult;
},{}],"src/script/Ingredients.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ingredient = /*#__PURE__*/function () {
  function Ingredient(ingredientName, ingredientQuantity) {
    _classCallCheck(this, Ingredient);

    this.ingredientName = ingredientName;
    this.ingredientQuantity = ingredientQuantity;
  }

  _createClass(Ingredient, [{
    key: "getIngredientName",
    value: function getIngredientName() {
      return this.ingredientName;
    }
  }, {
    key: "getIngredientQuantity",
    value: function getIngredientQuantity() {
      return this.ingredientQuantity;
    }
  }]);

  return Ingredient;
}();

module.exports = Ingredient;
},{}],"src/script/singleMealConverter.js":[function(require,module,exports) {
var RecepieResult = require('./recepieResult');

var Ingredient = require('./Ingredients');

var singleMealConverter = function singleMealConverter(mealInfo) {
  mealInfo = mealInfo.meals[0];
  var recepieName = mealInfo.strMeal;
  var recepieImageLink = mealInfo.strMealThumb;
  var recepieTag = mealInfo.strTags;
  var recepieMethod = mealInfo.strInstructions;
  var ingredients = [];
  var ingredientKey = 'strIngredient';
  var quantityKey = 'strMeasure';
  var i = 1;

  while (true) {
    // console.log(mealInfo[ingredientKey+i])
    if (mealInfo[ingredientKey + i] != null && mealInfo[ingredientKey + i] != undefined && mealInfo[ingredientKey + i] != '') {
      ingredients.push(new Ingredient(mealInfo["".concat(ingredientKey + i)], mealInfo["".concat(quantityKey + i)]));
    } else break;

    i++;
  }

  return new RecepieResult(recepieName, recepieImageLink, recepieTag, recepieMethod, ingredients);
};

module.exports = singleMealConverter;
},{"./recepieResult":"src/script/recepieResult.js","./Ingredients":"src/script/Ingredients.js"}],"src/script/script.js":[function(require,module,exports) {
//imports
var mealsResponseConverter = require("./mealsConverter");

var singleMealResponseConverter = require("./singleMealConverter");

var Ingredient = require("./Ingredients");

var ImageResult = require("./imageResult");

var RecepieResult = require("./recepieResult"); //constants
//dom refferneces


var elSearchBar;
var elSearchButton;
var elRandomRecepie;
var elImageSearchResult;
var elRecepieContainer; //init dom refferences & setup event listeners

var init = function init() {
  initDomRefferneces();
  setupEventListeners();
  resetDomValues();
};

var initDomRefferneces = function initDomRefferneces() {
  elSearchBar = document.querySelector(".searchBarInput");
  elSearchButton = document.querySelector(".search");
  elRandomRecepie = document.querySelector(".random");
  elImageSearchResult = document.querySelector(".imageSearchResult");
  elRecepieContainer = document.querySelector(".recepieContainer");
};

var setupEventListeners = function setupEventListeners() {
  elSearchButton.addEventListener("click", searchEVLWrapper);
};

var resetDomValues = function resetDomValues() {//   elSearchButton;
}; // event listeners


var searchEvL = function searchEvL(afterFunc) {
  searchText = getSearchText();
  searchResult = fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(searchText)).then(function (r) {
    return r.json();
  }).then(function (response) {
    setAndReturnHtml(mealsResponseConverter(response).map(function (i) {
      return i.toHTML();
    }).reduce(function (a, b) {
      return a + b;
    }), elImageSearchResult);
    afterFunc();
  });
};

var searchEVLWrapper = function searchEVLWrapper() {
  searchEvL(function () {
    document.querySelectorAll(".imageResult").forEach(function (el) {
      return el.addEventListener("click", searchRecepie);
    });
  });
};

var searchRecepie = function searchRecepie(event) {
  var mealId = getMealId(event.target);
  mealResponse = fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(mealId)).then(function (r) {
    return r.json();
  }).then(function (response) {
    setAndReturnHtml(singleMealResponseConverter(response).toHTMl(), elRecepieContainer);
    elRecepieContainer.scrollTop = elRecepieContainer.scrollHeight;
  });
};

var getSearchText = function getSearchText() {
  return elSearchBar.value;
};

var setAndReturnHtml = function setAndReturnHtml(html, element) {
  element.innerHTML = html;
  return html;
};

var getMealId = function getMealId(element) {
  return element.getAttribute("mealId");
};

window.onload = init;
console.log("script run ");
window.setInterval(function () {
  var elem = document.querySelector(".recepieContainer");
  elem.scrollTop = elem.scrollHeight;
}, 5000);
},{"./mealsConverter":"src/script/mealsConverter.js","./singleMealConverter":"src/script/singleMealConverter.js","./Ingredients":"src/script/Ingredients.js","./imageResult":"src/script/imageResult.js","./recepieResult":"src/script/recepieResult.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57884" + '/');

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
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/script/script.js"], null)
//# sourceMappingURL=/script.89e6092b.js.map