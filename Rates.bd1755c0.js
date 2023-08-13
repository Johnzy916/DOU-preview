// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kn9T2":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"786KC"}],"7uu2t":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "3c57a7edbd1755c0";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"26I6N":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$6f26 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$6f26.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactDropdown = require("react-dropdown");
var _reactDropdownDefault = parcelHelpers.interopDefault(_reactDropdown);
var _stateContext = require("../context/StateContext");
var _getStaticData = require("../utils/getStaticData");
var _getStaticDataDefault = parcelHelpers.interopDefault(_getStaticData);
var _s = $RefreshSig$();
function Rates() {
    _s();
    // global state
    const { state , ratesDispatch  } = _react.useContext(_stateContext.StateContext);
    const { rates: rates1  } = state;
    // local state
    const [bwpTotal, setBwpTotal] = _react.useState(0);
    const [rsTotal, setRsTotal] = _react.useState({
        total: ()=>0
        ,
        bags: [
            '0'
        ],
        add: 0
    });
    const [bagsPrice, setBagsPrice] = _react.useState(0);
    const [gcTotal, setGcTotal] = _react.useState({
        total: ()=>0
        ,
        add: 0
    });
    const [recycleTotal, setRecycleTotal] = _react.useState(0);
    const [ywTotal, setYwTotal] = _react.useState(0);
    // reference second dropdown to reset them when first is changed
    const returnServiceAddRef = _react.useRef(null);
    const garbageCanAddRef = _react.useRef(null);
    // get rates and set default prices
    _react.useEffect(async ()=>{
        const rates = await _getStaticDataDefault.default('rates.json', 'Unable to load rates', 'Please reload the page');
        ratesDispatch({
            type: 'SET_RATES',
            rates
        });
        setBwpTotal(rates.bwp);
        setRsTotal({
            title: 'return64',
            can: rates.return64,
            add: 0,
            bags: [
                '0',
                '1-2',
                '3-4',
                '5-6'
            ],
            total () {
                return this.can + this.add * rates[`${this.title}_add`];
            }
        });
        setBagsPrice(rates.bags_1_2);
        setGcTotal({
            title: 'garbage64',
            can: rates.garbage64,
            add: 0,
            total () {
                return this.can + this.add * rates[`${this.title}_add`];
            }
        });
        setRecycleTotal(rates.recycle);
        setYwTotal(rates.yw);
    }, []);
    return(/*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
        className: "rates-container",
        children: [
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("section", {
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-title",
                        children: "Bulky Waste Pickup"
                    }, void 0, false, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-additional",
                        children: [
                            "1 Load ",
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                className: "plus-symbol",
                                children: "+"
                            }, void 0, false, {
                                fileName: "src/js/components/Rates.js",
                                lineNumber: 60,
                                columnNumber: 28
                            }, this),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactDropdownDefault.default, {
                                options: [
                                    0,
                                    1,
                                    2,
                                    3
                                ],
                                onChange: (e)=>setBwpTotal(rates1.bwp + rates1.bwp_add * e.value)
                                ,
                                placeholder: 0
                            }, void 0, false, {
                                fileName: "src/js/components/Rates.js",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                className: "tooltip",
                                children: [
                                    "Oversized load(s)",
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                        className: "tooltip-text",
                                        children: [
                                            "$",
                                            rates1.bwp_add
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/js/components/Rates.js",
                                        lineNumber: 68,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/js/components/Rates.js",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-amount",
                        children: `$${bwpTotal?.toFixed(2)}`
                    }, void 0, false, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/js/components/Rates.js",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("section", {
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-title",
                        children: "Return Service"
                    }, void 0, false, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-additional",
                        children: [
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactDropdownDefault.default, {
                                options: [
                                    96,
                                    64,
                                    32
                                ],
                                onChange: (e)=>{
                                    setRsTotal({
                                        ...rsTotal,
                                        title: `return${e.value}`,
                                        can: rates1[`return${e.value}`],
                                        add: 0
                                    });
                                    // reset the second dropdown
                                    returnServiceAddRef.current.state.selected = {
                                        value: 0,
                                        label: 0
                                    };
                                },
                                placeholder: 64
                            }, void 0, false, {
                                fileName: "src/js/components/Rates.js",
                                lineNumber: 76,
                                columnNumber: 21
                            }, this),
                            "Can ",
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                className: "plus-symbol",
                                children: "+"
                            }, void 0, false, {
                                fileName: "src/js/components/Rates.js",
                                lineNumber: 92,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactDropdownDefault.default, {
                                ref: returnServiceAddRef,
                                options: [
                                    0,
                                    1,
                                    2,
                                    3
                                ],
                                onChange: (e)=>{
                                    setRsTotal({
                                        ...rsTotal,
                                        add: e.value
                                    });
                                },
                                placeholder: 0
                            }, void 0, false, {
                                fileName: "src/js/components/Rates.js",
                                lineNumber: 93,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                className: "tooltip",
                                children: [
                                    ` Cans / ${rsTotal?.bags[rsTotal?.add]} Bags`,
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                        className: "tooltip-text",
                                        children: [
                                            "$",
                                            rates1[`${rsTotal?.title}_add`]
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/js/components/Rates.js",
                                        lineNumber: 106,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/js/components/Rates.js",
                                lineNumber: 104,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-amount",
                        children: `$${rsTotal.total().toFixed(2)}`
                    }, void 0, false, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/js/components/Rates.js",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("section", {
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-title",
                        children: "Bag Service"
                    }, void 0, false, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-additional",
                        children: [
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactDropdownDefault.default, {
                                options: [
                                    '1 - 2',
                                    '3 - 4',
                                    '5 - 6'
                                ],
                                onChange: (e)=>setBagsPrice(rates1[`bags_${e.value.replace(' - ', '_')}`])
                                ,
                                placeholder: '1 - 2'
                            }, void 0, false, {
                                fileName: "src/js/components/Rates.js",
                                lineNumber: 114,
                                columnNumber: 21
                            }, this),
                            "Bags"
                        ]
                    }, void 0, true, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 113,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-amount",
                        children: `$${bagsPrice?.toFixed(2)}`
                    }, void 0, false, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 121,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/js/components/Rates.js",
                lineNumber: 111,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("section", {
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-title",
                        children: "Garbage Can"
                    }, void 0, false, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 124,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-additional",
                        children: [
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactDropdownDefault.default, {
                                options: [
                                    96,
                                    64,
                                    32
                                ],
                                onChange: (e)=>{
                                    setGcTotal({
                                        ...rsTotal,
                                        title: `garbage${e.value}`,
                                        can: rates1[`garbage${e.value}`],
                                        add: 0
                                    });
                                    // reset the second dropdown
                                    garbageCanAddRef.current.state.selected = {
                                        value: 0,
                                        label: 0
                                    };
                                },
                                placeholder: 64
                            }, void 0, false, {
                                fileName: "src/js/components/Rates.js",
                                lineNumber: 126,
                                columnNumber: 21
                            }, this),
                            "Can ",
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                className: "plus-symbol",
                                children: "+"
                            }, void 0, false, {
                                fileName: "src/js/components/Rates.js",
                                lineNumber: 142,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactDropdownDefault.default, {
                                ref: garbageCanAddRef,
                                options: [
                                    0,
                                    1,
                                    2,
                                    3
                                ],
                                onChange: (e)=>{
                                    setGcTotal({
                                        ...gcTotal,
                                        add: e.value
                                    });
                                },
                                placeholder: 0
                            }, void 0, false, {
                                fileName: "src/js/components/Rates.js",
                                lineNumber: 143,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                className: "tooltip",
                                children: [
                                    "Additional can(s)",
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                        className: "tooltip-text",
                                        children: [
                                            "$",
                                            rates1[`${gcTotal?.title}_add`]
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/js/components/Rates.js",
                                        lineNumber: 156,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/js/components/Rates.js",
                                lineNumber: 154,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 125,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-amount",
                        children: `$${gcTotal.total().toFixed(2)}`
                    }, void 0, false, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 159,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/js/components/Rates.js",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("section", {
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-title",
                        children: "Recycle Can"
                    }, void 0, false, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 162,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-additional",
                        children: [
                            "96 or 64 Gal ",
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                className: "plus-symbol",
                                children: "+"
                            }, void 0, false, {
                                fileName: "src/js/components/Rates.js",
                                lineNumber: 164,
                                columnNumber: 34
                            }, this),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactDropdownDefault.default, {
                                options: [
                                    0,
                                    1,
                                    2,
                                    3
                                ],
                                onChange: (e)=>{
                                    setRecycleTotal(rates1.recycle + rates1.recycle_add * e.value);
                                },
                                placeholder: 0
                            }, void 0, false, {
                                fileName: "src/js/components/Rates.js",
                                lineNumber: 165,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                className: "tooltip",
                                children: [
                                    "Additional can(s)",
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                        className: "tooltip-text",
                                        children: [
                                            "$",
                                            rates1.recycle_add
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/js/components/Rates.js",
                                        lineNumber: 174,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/js/components/Rates.js",
                                lineNumber: 172,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 163,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-amount",
                        children: `$${recycleTotal.toFixed(2)}`
                    }, void 0, false, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 177,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/js/components/Rates.js",
                lineNumber: 161,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("section", {
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-title",
                        children: "Yard Waste Can"
                    }, void 0, false, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 180,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-additional",
                        children: [
                            "96 Gal ",
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                className: "plus-symbol",
                                children: "+"
                            }, void 0, false, {
                                fileName: "src/js/components/Rates.js",
                                lineNumber: 182,
                                columnNumber: 28
                            }, this),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactDropdownDefault.default, {
                                options: [
                                    0,
                                    1,
                                    2,
                                    3
                                ],
                                onChange: (e)=>{
                                    setYwTotal(rates1.yw + rates1.yw_add * e.value);
                                },
                                placeholder: 0
                            }, void 0, false, {
                                fileName: "src/js/components/Rates.js",
                                lineNumber: 183,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                className: "tooltip",
                                children: [
                                    "Additional can(s)",
                                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                        className: "tooltip-text",
                                        children: [
                                            "$",
                                            rates1.yw_add
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/js/components/Rates.js",
                                        lineNumber: 192,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/js/components/Rates.js",
                                lineNumber: 190,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 181,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-amount",
                        children: `$${ywTotal.toFixed(2)}`
                    }, void 0, false, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 195,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/js/components/Rates.js",
                lineNumber: 179,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("section", {
                children: [
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-title",
                        children: "Food Waste Only"
                    }, void 0, false, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 198,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-additional",
                        children: "Any size container"
                    }, void 0, false, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 199,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                        className: "rate-amount",
                        children: `$${rates1.food_only?.toFixed(2)}`
                    }, void 0, false, {
                        fileName: "src/js/components/Rates.js",
                        lineNumber: 202,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/js/components/Rates.js",
                lineNumber: 197,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/js/components/Rates.js",
        lineNumber: 56,
        columnNumber: 9
    }, this));
}
exports.default = Rates;
_s(Rates, "QGNozaLTO7TrHF4txaVB7kMKERk=");
_c = Rates;
var _c;
$RefreshReg$(_c, "Rates");

  $parcel$ReactRefreshHelpers$6f26.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-dropdown":"gbCO1","../context/StateContext":"W4FOM","../utils/getStaticData":"iWzMk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"gbCO1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
var DEFAULT_PLACEHOLDER_STRING = 'Select...';
var Dropdown = /*#__PURE__*/ function(_Component) {
    _inherits(Dropdown1, _Component);
    function Dropdown1(props) {
        var _this;
        _classCallCheck(this, Dropdown1);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown1).call(this, props));
        _this.state = {
            selected: _this.parseValue(props.value, props.options) || {
                label: typeof props.placeholder === 'undefined' ? DEFAULT_PLACEHOLDER_STRING : props.placeholder,
                value: ''
            },
            isOpen: false
        };
        _this.dropdownRef = (0, _react.createRef)();
        _this.mounted = true;
        _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
        _this.fireChangeEvent = _this.fireChangeEvent.bind(_assertThisInitialized(_this));
        return _this;
    }
    _createClass(Dropdown1, [
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                if (this.props.value !== prevProps.value) {
                    if (this.props.value) {
                        var selected = this.parseValue(this.props.value, this.props.options);
                        if (selected !== this.state.selected) this.setState({
                            selected: selected
                        });
                    } else this.setState({
                        selected: {
                            label: typeof this.props.placeholder === 'undefined' ? DEFAULT_PLACEHOLDER_STRING : this.props.placeholder,
                            value: ''
                        }
                    });
                }
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                document.addEventListener('click', this.handleDocumentClick, false);
                document.addEventListener('touchend', this.handleDocumentClick, false);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.mounted = false;
                document.removeEventListener('click', this.handleDocumentClick, false);
                document.removeEventListener('touchend', this.handleDocumentClick, false);
            }
        },
        {
            key: "handleMouseDown",
            value: function handleMouseDown(event) {
                if (this.props.onFocus && typeof this.props.onFocus === 'function') this.props.onFocus(this.state.isOpen);
                if (event.type === 'mousedown' && event.button !== 0) return;
                event.stopPropagation();
                event.preventDefault();
                if (!this.props.disabled) this.setState({
                    isOpen: !this.state.isOpen
                });
            }
        },
        {
            key: "parseValue",
            value: function parseValue(value, options) {
                var option;
                if (typeof value === 'string') for(var i = 0, num = options.length; i < num; i++){
                    if (options[i].type === 'group') {
                        var match = options[i].items.filter(function(item) {
                            return item.value === value;
                        });
                        if (match.length) option = match[0];
                    } else if (typeof options[i].value !== 'undefined' && options[i].value === value) option = options[i];
                }
                return option || value;
            }
        },
        {
            key: "setValue",
            value: function setValue(value, label) {
                var newState = {
                    selected: {
                        value: value,
                        label: label
                    },
                    isOpen: false
                };
                this.fireChangeEvent(newState);
                this.setState(newState);
            }
        },
        {
            key: "fireChangeEvent",
            value: function fireChangeEvent(newState) {
                if (newState.selected !== this.state.selected && this.props.onChange) this.props.onChange(newState.selected);
            }
        },
        {
            key: "renderOption",
            value: function renderOption(option) {
                var _classes;
                var value = option.value;
                if (typeof value === 'undefined') value = option.label || option;
                var label = option.label || option.value || option;
                var isSelected = value === this.state.selected.value || value === this.state.selected;
                var classes = (_classes = {
                }, _defineProperty(_classes, "".concat(this.props.baseClassName, "-option"), true), _defineProperty(_classes, option.className, !!option.className), _defineProperty(_classes, 'is-selected', isSelected), _classes);
                var optionClass = (0, _classnames["default"])(classes);
                return _react["default"].createElement("div", {
                    key: value,
                    className: optionClass,
                    onMouseDown: this.setValue.bind(this, value, label),
                    onClick: this.setValue.bind(this, value, label),
                    role: "option",
                    "aria-selected": isSelected ? 'true' : 'false'
                }, label);
            }
        },
        {
            key: "buildMenu",
            value: function buildMenu() {
                var _this2 = this;
                var _this$props = this.props, options = _this$props.options, baseClassName = _this$props.baseClassName;
                var ops = options.map(function(option) {
                    if (option.type === 'group') {
                        var groupTitle = _react["default"].createElement("div", {
                            className: "".concat(baseClassName, "-title")
                        }, option.name);
                        var _options = option.items.map(function(item) {
                            return _this2.renderOption(item);
                        });
                        return _react["default"].createElement("div", {
                            className: "".concat(baseClassName, "-group"),
                            key: option.name,
                            role: "listbox",
                            tabIndex: "-1"
                        }, groupTitle, _options);
                    } else return _this2.renderOption(option);
                });
                return ops.length ? ops : _react["default"].createElement("div", {
                    className: "".concat(baseClassName, "-noresults")
                }, "No options found");
            }
        },
        {
            key: "handleDocumentClick",
            value: function handleDocumentClick(event) {
                if (this.mounted) {
                    if (!this.dropdownRef.current.contains(event.target)) {
                        if (this.state.isOpen) this.setState({
                            isOpen: false
                        });
                    }
                }
            }
        },
        {
            key: "isValueSelected",
            value: function isValueSelected() {
                return typeof this.state.selected === 'string' || this.state.selected.value !== '';
            }
        },
        {
            key: "render",
            value: function render() {
                var _classNames, _classNames2, _classNames3, _classNames4, _classNames5;
                var _this$props2 = this.props, baseClassName = _this$props2.baseClassName, controlClassName = _this$props2.controlClassName, placeholderClassName = _this$props2.placeholderClassName, menuClassName = _this$props2.menuClassName, arrowClassName = _this$props2.arrowClassName, arrowClosed = _this$props2.arrowClosed, arrowOpen = _this$props2.arrowOpen, className = _this$props2.className;
                var disabledClass = this.props.disabled ? 'Dropdown-disabled' : '';
                var placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label;
                var dropdownClass = (0, _classnames["default"])((_classNames = {
                }, _defineProperty(_classNames, "".concat(baseClassName, "-root"), true), _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, 'is-open', this.state.isOpen), _classNames));
                var controlClass = (0, _classnames["default"])((_classNames2 = {
                }, _defineProperty(_classNames2, "".concat(baseClassName, "-control"), true), _defineProperty(_classNames2, controlClassName, !!controlClassName), _defineProperty(_classNames2, disabledClass, !!disabledClass), _classNames2));
                var placeholderClass = (0, _classnames["default"])((_classNames3 = {
                }, _defineProperty(_classNames3, "".concat(baseClassName, "-placeholder"), true), _defineProperty(_classNames3, placeholderClassName, !!placeholderClassName), _defineProperty(_classNames3, 'is-selected', this.isValueSelected()), _classNames3));
                var menuClass = (0, _classnames["default"])((_classNames4 = {
                }, _defineProperty(_classNames4, "".concat(baseClassName, "-menu"), true), _defineProperty(_classNames4, menuClassName, !!menuClassName), _classNames4));
                var arrowClass = (0, _classnames["default"])((_classNames5 = {
                }, _defineProperty(_classNames5, "".concat(baseClassName, "-arrow"), true), _defineProperty(_classNames5, arrowClassName, !!arrowClassName), _classNames5));
                var value = _react["default"].createElement("div", {
                    className: placeholderClass
                }, placeHolderValue);
                var menu = this.state.isOpen ? _react["default"].createElement("div", {
                    className: menuClass,
                    "aria-expanded": "true"
                }, this.buildMenu()) : null;
                return _react["default"].createElement("div", {
                    ref: this.dropdownRef,
                    className: dropdownClass
                }, _react["default"].createElement("div", {
                    className: controlClass,
                    onMouseDown: this.handleMouseDown.bind(this),
                    onTouchEnd: this.handleMouseDown.bind(this),
                    "aria-haspopup": "listbox"
                }, value, _react["default"].createElement("div", {
                    className: "".concat(baseClassName, "-arrow-wrapper")
                }, arrowOpen && arrowClosed ? this.state.isOpen ? arrowOpen : arrowClosed : _react["default"].createElement("span", {
                    className: arrowClass
                }))), menu);
            }
        }
    ]);
    return Dropdown1;
}(_react.Component);
Dropdown.defaultProps = {
    baseClassName: 'Dropdown'
};
var _default = Dropdown;
exports["default"] = _default;

},{"react":"21dqq","classnames":"jocGM"}],"iWzMk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _notificationManager = require("react-notifications/lib/NotificationManager");
var _notificationManagerDefault = parcelHelpers.interopDefault(_notificationManager);
exports.default = async (fileName, errorText, errorTitle)=>{
    // get location origin to fetch whether dev or prod
    const origin = '';
    try {
        // get file, but append random param to prevent browser caching
        const response = await fetch(`${origin}/${fileName}?nocache=${new Date().getTime()}`);
        const data = await response.json();
        return data;
    } catch (e) {
        _notificationManagerDefault.default.error(`${errorTitle}`, `${errorText}`, 2000);
        return false;
    }
};

},{"react-notifications/lib/NotificationManager":"e5lRA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kn9T2","7uu2t"], null, "parcelRequire630b")

//# sourceMappingURL=Rates.bd1755c0.js.map
