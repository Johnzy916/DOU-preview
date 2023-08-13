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

},{"react-refresh/runtime":"786KC"}],"2J4hv":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0e808d4e84846b9e";
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

},{}],"62qSW":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$432b = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$432b.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _stateContext = require("../context/StateContext");
var _reactNotifications = require("react-notifications");
var _demandPreview = require("../../fixtures/demandPreview");
// dayjs
var _dayjs = require("dayjs");
var _customParseFormat = require("dayjs/plugin/customParseFormat");
var _customParseFormatDefault = parcelHelpers.interopDefault(_customParseFormat);
var _s = $RefreshSig$();
_dayjs().format();
// Extend dayjs with the customParseFormat plugin
_dayjs.extend(_customParseFormatDefault.default);
function Rates() {
    _s();
    // global state
    const { state , creditDispatch  } = _react.useContext(_stateContext.StateContext);
    const { actualBalance , demand , demandDateValue , billDateValue , saInputValue , billInputValue , isShowingDemandInfo , balanceInputValue  } = state;
    const { finalPerDiem , finalDemandAmount , demandDate: demandDate1 , lastBillDate: lastBillDate1 , totalCurrentlyDue , remainingCredit , flatChargesData: flatChargesData1 , meterChargesData: meterChargesData1 , daysSinceLastBill , daysSinceMeterBilled , finalCredit  } = demand;
    // refs
    const balanceInput = _react.useRef(null);
    const demandDateInput = _react.useRef(null);
    const lastBillDateInput = _react.useRef(null);
    const totalSAInput = _react.useRef(null);
    const prevBillSegInput = _react.useRef(null);
    // SET TEST DATA FOR PREVIEW
    _react.useEffect(()=>{
        creditDispatch({
            type: 'SET_BALANCE_INPUT',
            value: _demandPreview.balanceText
        });
        creditDispatch({
            type: 'SET_DEMAND_DATE',
            value: '08-04-2022'
        });
        creditDispatch({
            type: 'SET_BILL_DATE',
            value: '07-04-2022'
        });
        creditDispatch({
            type: 'SET_SA_INPUT',
            value: _demandPreview.demandSA
        });
        creditDispatch({
            type: 'SET_BILL_INPUT',
            value: _demandPreview.demandBill
        });
    }, []);
    const handleBalance = (e)=>{
        // get amounts
        const total = balanceInput.current.value.match(/(?<=\$)-?\d+.\d+(?=\s+\$)/g)?.map((str)=>{
            return roundDecimals(str);
        })?.filter((num)=>num >= 0
        )?.reduce((acc, cur)=>roundDecimals(acc + cur)
        );
        // set balance or throw error
        if (total) {
            creditDispatch({
                type: 'SET_ACTUAL_BALANCE',
                balance: total
            });
            balanceInput.current.value = '';
        } else {
            _reactNotifications.NotificationManager.warning('Paste SA Premise List', 'Invalid input data', 2000);
            balanceInput.current.value = '';
        }
    };
    const handleClear = (e)=>{
        creditDispatch({
            type: 'RESET_CREDIT_STATE'
        });
        creditDispatch({
            type: 'RESET_INPUT_VALUES'
        });
        creditDispatch({
            type: 'TOGGLE_IS_SHOWING_AMOUNT'
        });
    };
    const handleToggleMoreInfo = (e)=>{
        e.target.classList.toggle("active");
        const infoPanel = document.querySelector('.demand-explanation');
        if (infoPanel.style.maxHeight) infoPanel.style.maxHeight = null;
        else infoPanel.style.maxHeight = `${infoPanel.scrollHeight}px`;
    };
    // function for rounding to 2 decimal places.
    const roundDecimals = (num)=>{
        if (typeof num == 'string') num = parseFloat(num);
        return Number(`${Math.round(parseFloat(`${num}e2`))}e-2`);
    };
    const handleDemand = (e)=>{
        // temp storage
        let flatCharges = 0, meterCharges = 0, demandInfo = {
            finalPerDiem: 0,
            finalDemandAmount: 0
        }, dataPerType = {
            perDiem: 0,
            proratedAmount: 0,
            proratedWaterAmount: 0
        }, meterChargesData = {
            ...dataPerType
        }, flatChargesData = {
            ...dataPerType
        };
        // return if inputs are not all filled out
        if (!demandDateInput.current.value || !lastBillDateInput.current.value || !totalSAInput.current.value || !prevBillSegInput.current.value) return _reactNotifications.NotificationManager.warning('Provide all input data', 'Missing Info', 2000);
        // create DateTime from dates and push to demandInfo
        const demandDate = _dayjs(demandDateInput.current.value, 'MM-DD-YYYY');
        const lastBillDate = _dayjs(lastBillDateInput.current.value, 'MM-DD-YYYY');
        demandInfo['demandDate'] = demandDate.format('MM-DD-YYYY');
        demandInfo['lastBillDate'] = lastBillDate.format('MM-DD-YYYY');
        // return if dates are not valid
        if (!demandDate.isValid() || !lastBillDate.isValid()) return _reactNotifications.NotificationManager.warning('Use MM-DD-YYYY', 'Invalid date(s)', 2000);
        // return if dates are the same
        if (demandDate.diff(lastBillDate, 'day') == 0) return _reactNotifications.NotificationManager.warning('Dates cannot be the same', 'Invalid dates', 2000);
        // return if dates are reversed
        if (demandDate.diff(lastBillDate, 'day') < 0) return _reactNotifications.NotificationManager.warning('Demand date is prior to last bill', 'Invalid date(s)', 2000);
        // set number of days from last bill until demand
        demandInfo['daysSinceLastBill'] = demandDate.diff(lastBillDate, 'day');
        // get current balances     
        const currentAmounts = totalSAInput.current.value.match(/(?<=\$)-?\d+.\d+(?=\s+\$)/g)?.map((str)=>roundDecimals(str)
        );
        // throw error if amounts cannot be extracted
        if (!currentAmounts) return _reactNotifications.NotificationManager.warning('Paste SA premise info', 'Invalid SA data', 2000);
        // set current amount due (SAs not including water credit)
        demandInfo['totalCurrentlyDue'] = roundDecimals(currentAmounts?.filter((num)=>num >= 0
        )?.reduce((acc, cur)=>acc + cur
        ));
        // add current amount due to final demand amount
        demandInfo['finalDemandAmount'] += roundDecimals(demandInfo['totalCurrentlyDue']);
        // set remaining credit
        demandInfo['remainingCredit'] = Math.abs(currentAmounts?.filter((num)=>num < 0
        )[0] || 0);
        // set initial amount for final credit
        demandInfo['finalCredit'] = Math.abs(currentAmounts?.filter((num)=>num < 0
        )[0] || 0);
        // get last bill balances
        const segments = prevBillSegInput.current.value.match(/(?<=\/\s)[\w\s&-]+/g);
        const billAmounts = prevBillSegInput.current.value?.match(/(?<endDate>\d{2}-\d{2}-\d{4}),\s(?<segAmount>\$\d+.\d+)/g);
        // if segments don't match amounts, return
        if (segments?.length !== billAmounts?.length) return _reactNotifications.NotificationManager.warning('Paste full bill data', 'Invalid bill data', 2000);
        // function for pushing flat charges to temp storage
        const pushFlatCharges = (key, amount)=>{
            key && (demandInfo[key] = roundDecimals(amount));
            flatCharges = roundDecimals(flatCharges + amount);
        };
        // function for setting days since meter billed
        const setDaysSinceMeterBilled = (billedDate)=>{
            // push meter date to state
            const parsedBilledDate = _dayjs(billedDate, 'MM-DD-YYYY');
            demandInfo['meterDate'] = billedDate;
            demandInfo['daysSinceMeterBilled'] = _dayjs(demandDateInput.current.value, 'MM-DD-YYYY').diff(parsedBilledDate, 'day');
        };
        // parse amounts from bill
        segments.forEach((segment, i)=>{
            // get date and amount for the segment
            const [date, amount] = billAmounts[i].split(', $');
            const billAmount = roundDecimals(amount);
            // if water/wastewater/irrigation
            // check if it's metered or flat
            // and push the info to data storage
            if (segment.match(/water|wastewater|irrigation/i)) {
                if (segment.match(/wastewater/i)) {
                    if (segment.match(/treatment/i)) flatCharges = roundDecimals(flatCharges + billAmount);
                    else if (segment.match(/meter/i)) {
                        demandInfo['wasteMetered'] = billAmount;
                        meterCharges = roundDecimals(meterCharges + billAmount);
                        if (!demandInfo['daysSinceMeterBilled']) setDaysSinceMeterBilled(date);
                    } else pushFlatCharges('wasteFlat', billAmount);
                } else if (segment.match(/water/i)) {
                    if (segment.match(/meter/i)) {
                        demandInfo['waterMetered'] = billAmount;
                        meterCharges = roundDecimals(meterCharges + billAmount);
                        if (!demandInfo['daysSinceMeterBilled']) setDaysSinceMeterBilled(date);
                    } else pushFlatCharges('waterFlat', billAmount);
                } else if (segment.match(/meter/i)) {
                    demandInfo['irrigationMetered'] = billAmount;
                    meterCharges = roundDecimals(meterCharges + billAmount);
                    if (!demandInfo['daysSinceMeterBilled']) setDaysSinceMeterBilled(date);
                } else pushFlatCharges('irrigationFlat', billAmount);
            // else if overpayment -- do nothing
            } else if (segment.match(/overpayment/i)) ;
            else pushFlatCharges(null, billAmount);
        });
        // function for setting demand info
        const setDemandInfo = (dataObject, totalCharges, numOfDays, waterType)=>{
            // Per diem = total of charges for type / 30
            dataObject['perDiem'] = roundDecimals(totalCharges / 30);
            // add per diem to final numbers
            demandInfo['finalPerDiem'] = roundDecimals(demandInfo['finalPerDiem'] + dataObject['perDiem']);
            // prorated amount = per diem * number of days
            dataObject['proratedAmount'] = roundDecimals(roundDecimals(dataObject['perDiem']) * numOfDays);
            // prorated amount for water only
            dataObject['proratedWaterAmount'] = roundDecimals(roundDecimals((demandInfo[waterType] || 0) / 30) * numOfDays);
        };
        // function for handling water credit
        const handleCredit = (dataObject, waterType)=>{
            // check if the prorated amount of water is less than the remaining credit.
            // If so, remove prorated amount of water from total prorated amount
            // If not, subtract the difference of remaining credit and prorated water amount
            // Adjust remaining balance
            if (demandInfo[waterType]) {
                if (dataObject['proratedWaterAmount'] < demandInfo['finalCredit']) {
                    dataObject['proratedAmount'] = roundDecimals(dataObject['proratedAmount'] - dataObject['proratedWaterAmount']);
                    demandInfo['finalCredit'] = roundDecimals(demandInfo['finalCredit'] - dataObject['proratedWaterAmount']);
                } else {
                    dataObject['proratedAmount'] = roundDecimals(dataObject['proratedAmount'] - demandInfo['finalCredit']);
                    demandInfo['finalCredit'] = 0;
                }
            }
        };
        //// flat charges
        // set demand info for flat water
        setDemandInfo(flatChargesData, flatCharges, demandInfo['daysSinceLastBill'], 'waterFlat');
        // handle the water credit
        handleCredit(flatChargesData, 'waterFlat');
        //// meter charges
        // set demand info for metered water
        setDemandInfo(meterChargesData, meterCharges, demandInfo['daysSinceMeterBilled'], 'waterMetered');
        // handle water credit
        handleCredit(meterChargesData, 'waterMetered');
        // set final data
        demandInfo['finalPerDiem'] = roundDecimals(flatChargesData['perDiem'] + meterChargesData['perDiem']);
        // add flat prorated amount to final amount
        demandInfo['finalDemandAmount'] = roundDecimals(demandInfo['finalDemandAmount'] + flatChargesData['proratedAmount']);
        // add metered prorated amount to final amount
        demandInfo['finalDemandAmount'] = roundDecimals(demandInfo['finalDemandAmount'] + meterChargesData['proratedAmount']);
        // set the final amount to fixed decimals
        // demandInfo['finalDemandAmount'] = roundDecimals(demandInfo['finalDemandAmount']);
        // combine all data into one object
        demandInfo = {
            ...demand,
            ...demandInfo,
            flatCharges,
            meterCharges,
            flatChargesData,
            meterChargesData
        };
        // push info to the state
        creditDispatch({
            type: 'SET_DEMAND_INFO',
            demand: demandInfo
        });
        // UNCOMMENT FOR PROD /////////////////////////
        // clear inputs
        demandDateInput.current.value = '';
        lastBillDateInput.current.value = '';
        totalSAInput.current.value = '';
        prevBillSegInput.current.value = '';
        creditDispatch({
            type: 'RESET_INPUT_VALUES'
        });
        // hide form and show output data
        creditDispatch({
            type: 'TOGGLE_IS_SHOWING_AMOUNT'
        });
    // TESTING ///////////////////////////////////
    // console.log('demandInfo: ', demandInfo);
    };
    return(/*#__PURE__*/ _jsxDevRuntime.jsxDEV(_jsxDevRuntime.Fragment, {
        children: [
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                className: "credit-container",
                children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("section", {
                    children: [
                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("h2", {
                            children: "Quick balance"
                        }, void 0, false, {
                            fileName: "src/js/components/Credit.js",
                            lineNumber: 299,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("textarea", {
                            placeholder: "Paste SA Premise List...",
                            defaultValue: balanceInputValue,
                            ref: balanceInput
                        }, void 0, false, {
                            fileName: "src/js/components/Credit.js",
                            lineNumber: 300,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                            className: "quick-balance-footer",
                            children: [
                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("button", {
                                    className: "btn-secondary",
                                    onClick: (e)=>handleBalance(e)
                                    ,
                                    children: "Get actual balance"
                                }, void 0, false, {
                                    fileName: "src/js/components/Credit.js",
                                    lineNumber: 306,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                    className: "amount-due",
                                    children: [
                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                            children: "Balance:"
                                        }, void 0, false, {
                                            fileName: "src/js/components/Credit.js",
                                            lineNumber: 311,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                            className: "actual-balance",
                                            children: [
                                                "$",
                                                roundDecimals(actualBalance).toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/js/components/Credit.js",
                                            lineNumber: 312,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/js/components/Credit.js",
                                    lineNumber: 310,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/js/components/Credit.js",
                            lineNumber: 305,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/js/components/Credit.js",
                    lineNumber: 298,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "src/js/components/Credit.js",
                lineNumber: 297,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                className: "demand-container",
                children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("section", {
                    children: [
                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("h2", {
                            children: "Manual Demand"
                        }, void 0, false, {
                            fileName: "src/js/components/Credit.js",
                            lineNumber: 319,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("form", {
                            className: `${isShowingDemandInfo ? 'display-none' : ''}`,
                            children: [
                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                    className: "flexible-inputs",
                                    children: [
                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                            type: "text",
                                            ref: demandDateInput,
                                            placeholder: "Demand date",
                                            defaultValue: demandDateValue,
                                            onChange: (e)=>{
                                                creditDispatch({
                                                    type: 'SET_DEMAND_DATE',
                                                    value: e.target.value
                                                });
                                            }
                                        }, void 0, false, {
                                            fileName: "src/js/components/Credit.js",
                                            lineNumber: 322,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("input", {
                                            type: "text",
                                            ref: lastBillDateInput,
                                            placeholder: "Last bill date",
                                            defaultValue: billDateValue,
                                            onChange: (e)=>{
                                                creditDispatch({
                                                    type: 'SET_BILL_DATE',
                                                    value: e.target.value
                                                });
                                            }
                                        }, void 0, false, {
                                            fileName: "src/js/components/Credit.js",
                                            lineNumber: 331,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/js/components/Credit.js",
                                    lineNumber: 321,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("textarea", {
                                    placeholder: "Paste SA Premise List...",
                                    ref: totalSAInput,
                                    defaultValue: saInputValue,
                                    onChange: (e)=>{
                                        creditDispatch({
                                            type: 'SET_SA_INPUT',
                                            value: e.target.value
                                        });
                                    }
                                }, void 0, false, {
                                    fileName: "src/js/components/Credit.js",
                                    lineNumber: 341,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("textarea", {
                                    placeholder: "Paste Last Billed Segments...",
                                    ref: prevBillSegInput,
                                    defaultValue: billInputValue,
                                    onChange: (e)=>{
                                        creditDispatch({
                                            type: 'SET_BILL_INPUT',
                                            value: e.target.value
                                        });
                                    }
                                }, void 0, false, {
                                    fileName: "src/js/components/Credit.js",
                                    lineNumber: 349,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/js/components/Credit.js",
                            lineNumber: 320,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                            className: "manual-demand-footer",
                            children: [
                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                    className: "demand-buttons",
                                    children: [
                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("button", {
                                            className: `btn-secondary ${isShowingDemandInfo ? 'display-none' : ''}`,
                                            onClick: (e)=>handleDemand(e)
                                            ,
                                            children: "Get amounts"
                                        }, void 0, false, {
                                            fileName: "src/js/components/Credit.js",
                                            lineNumber: 360,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("button", {
                                            className: `btn-clear ${isShowingDemandInfo ? '' : 'display-none'}`,
                                            onClick: (e)=>handleClear(e)
                                            ,
                                            children: "Clear"
                                        }, void 0, false, {
                                            fileName: "src/js/components/Credit.js",
                                            lineNumber: 364,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/js/components/Credit.js",
                                    lineNumber: 359,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                    className: `demand-amounts ${isShowingDemandInfo ? '' : 'display-none'}`,
                                    children: [
                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                            children: [
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                    children: "Per diem:"
                                                }, void 0, false, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 371,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                    children: [
                                                        "$",
                                                        finalPerDiem.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 372,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/js/components/Credit.js",
                                            lineNumber: 370,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                            children: [
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                    children: "Total:"
                                                }, void 0, false, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 375,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                    children: [
                                                        "$",
                                                        finalDemandAmount.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 376,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/js/components/Credit.js",
                                            lineNumber: 374,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/js/components/Credit.js",
                                    lineNumber: 369,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/js/components/Credit.js",
                            lineNumber: 358,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                            className: `more-info-container ${isShowingDemandInfo ? '' : 'display-none'}`,
                            children: [
                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("section", {
                                    children: [
                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("h3", {
                                            children: "More Information"
                                        }, void 0, false, {
                                            fileName: "src/js/components/Credit.js",
                                            lineNumber: 382,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                            children: [
                                                "Account has received credit through the California Water and Wastewater Arrearage Program. Any remaining credit at the time of the owner change cannot be refunded and will be returned to the State. The prorated amount good through ",
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                    children: `${demandDate1}`
                                                }, void 0, false, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 383,
                                                    columnNumber: 263
                                                }, this),
                                                " is ",
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                    children: `$${finalDemandAmount.toFixed(2)}`
                                                }, void 0, false, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 383,
                                                    columnNumber: 297
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/js/components/Credit.js",
                                            lineNumber: 383,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/js/components/Credit.js",
                                    lineNumber: 381,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("button", {
                                    className: "accordion",
                                    onClick: (e)=>handleToggleMoreInfo(e)
                                    ,
                                    children: [
                                        "Why this amount?",
                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                            children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "currentColor",
                                                viewBox: "0 0 16 16",
                                                children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("path", {
                                                    d: "m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                                                }, void 0, false, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 390,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/js/components/Credit.js",
                                                lineNumber: 389,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/js/components/Credit.js",
                                            lineNumber: 388,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/js/components/Credit.js",
                                    lineNumber: 385,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("section", {
                                    className: "demand-explanation panel",
                                    children: [
                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                            children: [
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("h4", {
                                                    children: "From SA Premise List"
                                                }, void 0, false, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 395,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                                    children: [
                                                        `As of ${lastBillDate1}, amount due is: `,
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: `$${totalCurrentlyDue.toFixed(2)}`
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 396,
                                                            columnNumber: 78
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 396,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                                    children: [
                                                        "Water credit remaining: ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: `$${remainingCredit.toFixed(2)}`
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 397,
                                                            columnNumber: 60
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 397,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/js/components/Credit.js",
                                            lineNumber: 394,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                            children: [
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("h4", {
                                                    children: "From Last Bill Segment"
                                                }, void 0, false, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 400,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                                    children: [
                                                        "Per diem for the flat charges is: ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: `$${flatChargesData1?.perDiem.toFixed(2)}`
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 401,
                                                            columnNumber: 70
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 401,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                                    children: [
                                                        "Prorated flat charges for ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: `${daysSinceLastBill}`
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 402,
                                                            columnNumber: 62
                                                        }, this),
                                                        " days is ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: `$${roundDecimals(flatChargesData1?.perDiem * daysSinceLastBill).toFixed(2)}`
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 402,
                                                            columnNumber: 108
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 402,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                                    children: [
                                                        "Per diem for the metered charges is: ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: `$${meterChargesData1?.perDiem.toFixed(2)}`
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 403,
                                                            columnNumber: 73
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 403,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                                    children: [
                                                        "Prorated metered charges for ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: `${daysSinceMeterBilled}`
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 404,
                                                            columnNumber: 65
                                                        }, this),
                                                        " days is ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: `$${roundDecimals(meterChargesData1?.perDiem * daysSinceMeterBilled).toFixed(2)}`
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 404,
                                                            columnNumber: 114
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 404,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                                    children: [
                                                        "Sum of both prorated amounts: ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: `$${roundDecimals(flatChargesData1?.perDiem * daysSinceLastBill + meterChargesData1?.perDiem * daysSinceMeterBilled).toFixed(2)}`
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 405,
                                                            columnNumber: 66
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 405,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/js/components/Credit.js",
                                            lineNumber: 399,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                            children: [
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("h4", {
                                                    children: "Regarding the credit"
                                                }, void 0, false, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 408,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                                    children: [
                                                        "Prorated amount for flat water only is: ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: `$${flatChargesData1?.proratedWaterAmount.toFixed(2)}`
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 409,
                                                            columnNumber: 76
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 409,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                                    children: [
                                                        "Prorated amount for metered water only is: ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: `$${meterChargesData1?.proratedWaterAmount.toFixed(2)}`
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 410,
                                                            columnNumber: 79
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 410,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                                    children: [
                                                        "Total prorated amount for water is: ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: `$${roundDecimals(flatChargesData1?.proratedWaterAmount + meterChargesData1?.proratedWaterAmount).toFixed(2)}`
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 411,
                                                            columnNumber: 72
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 411,
                                                    columnNumber: 33
                                                }, this),
                                                flatChargesData1?.proratedWaterAmount + meterChargesData1?.proratedWaterAmount < remainingCredit ? /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                                    children: [
                                                        "Remaining credit is ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: "more"
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 415,
                                                            columnNumber: 64
                                                        }, this),
                                                        " than the prorated water amount",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("br", {
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 415,
                                                            columnNumber: 112
                                                        }, this),
                                                        "Therefore, subtract ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: "prorated water"
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 416,
                                                            columnNumber: 65
                                                        }, this),
                                                        " from the prorated sum"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 415,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                                    children: [
                                                        "Remaining credit is ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: "less"
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 417,
                                                            columnNumber: 64
                                                        }, this),
                                                        " than the prorated water amount",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("br", {
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 417,
                                                            columnNumber: 112
                                                        }, this),
                                                        "Therefore, subtract ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: "credit amount"
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 418,
                                                            columnNumber: 65
                                                        }, this),
                                                        " from the prorated sum"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 417,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/js/components/Credit.js",
                                            lineNumber: 407,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
                                            children: [
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("h4", {
                                                    children: "A little math..."
                                                }, void 0, false, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 422,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                                    children: [
                                                        "After the credit, the new prorated amount is: ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: `$${roundDecimals(flatChargesData1?.proratedAmount + meterChargesData1?.proratedAmount).toFixed(2)}`
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 423,
                                                            columnNumber: 82
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 423,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                                    children: [
                                                        "The final CWWAPP credit balance is: ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: `$${finalCredit.toFixed(2)}`
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 424,
                                                            columnNumber: 72
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 424,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                                    children: [
                                                        "Combine the two per diems (final): ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: `$${finalPerDiem.toFixed(2)}`
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 425,
                                                            columnNumber: 71
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 425,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ _jsxDevRuntime.jsxDEV("p", {
                                                    children: [
                                                        "Combine prorated amount with current amount due (final): ",
                                                        /*#__PURE__*/ _jsxDevRuntime.jsxDEV("span", {
                                                            children: `$${finalDemandAmount.toFixed(2)}`
                                                        }, void 0, false, {
                                                            fileName: "src/js/components/Credit.js",
                                                            lineNumber: 426,
                                                            columnNumber: 93
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/js/components/Credit.js",
                                                    lineNumber: 426,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/js/components/Credit.js",
                                            lineNumber: 421,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/js/components/Credit.js",
                                    lineNumber: 393,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/js/components/Credit.js",
                            lineNumber: 380,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/js/components/Credit.js",
                    lineNumber: 318,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "src/js/components/Credit.js",
                lineNumber: 317,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true));
}
exports.default = Rates;
_s(Rates, "KBMPGCXNIWqt+CABauvoJlUqw48=");
_c = Rates;
var _c;
$RefreshReg$(_c, "Rates");

  $parcel$ReactRefreshHelpers$432b.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../context/StateContext":"W4FOM","react-notifications":"bJ8Af","../../fixtures/demandPreview":"lLxkh","dayjs":"NJZFB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","dayjs/plugin/customParseFormat":"dmrpe"}],"lLxkh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "demandSA", ()=>demandSA
);
parcelHelpers.export(exports, "demandBill", ()=>demandBill
);
parcelHelpers.export(exports, "balanceText", ()=>balanceText
);
const demandSA = `This form is filled in with test data as an example.
In production, tables of data are pasted here.
Specific data is extracted and used to calculate a future prorated amount.
This takes the one-time state water credit into account.
Press the button below...


Some data...  $-362.96  $-362.96  Water - Residential - Metered, Some data...
Some data...  $96.53  $96.53  Garbage Residential, Some data...
Some data...  $44.30  $44.30  Lawn & Garden Services Res, Some data...
Some data...  $25.64  $25.64  Recycling Services - Res, Some data...
Some data...  $112.17  $112.17  Wastewater - Residential Flat, Some data...
Some data...  $40.08  $40.08  Storm Drainage Residential, Some data...
Some data...  $131.13  $131.13  Wastewater Treatment - Res, Some data... 
Some data...  $5.12  $5.12  Street Sweeping Residential, Some data...
`;
const demandBill = `This form is filled in with test data as an example.
In production, tables of data are pasted here.
Specific data is extracted and used to calculate a future prorated amount.
This takes the one-time state water credit into account.
Press the button below...


Some data... / Storm Drainage Residential, 04-27-2022, $11.31, Some data... 
Some data... / Wastewater Treatment - Res, 04-27-2022, $37.00, Some data... 
Some data... / Wastewater - Residential Flat, 04-27-2022, $31.65, Some data... 
Some data... / Garbage Residential, 04-27-2022, $28.02, Some data... 
Some data... / Lawn & Garden Services Res, 04-27-2022, $14.08, Some data... 
Some data... / Recycling Services - Res, 04-27-2022, $7.43, Some data... 
Some data... / Street Sweeping Residential, 04-27-2022, $1.51, Some data... 
Some data... / Water - Residential - Metered, 07-01-2022, $42.17, Some data... 
`;
const balanceText = `This form is filled in with test data as an example.
In production, tables of data are pasted here.
Specific data is extracted and used to calculate the actual balance owed.
This takes the one-time state water credit into account.
Press the button below...


Some data...  $-362.96  $-362.96  Water - Residential - Metered, Some data...
Some data...  $96.53  $96.53  Garbage Residential, Some data...
Some data...  $44.30  $44.30  Lawn & Garden Services Res, Some data...
Some data...  $25.64  $25.64  Recycling Services - Res, Some data...
Some data...  $112.17  $112.17  Wastewater - Residential Flat, Some data...
Some data...  $40.08  $40.08  Storm Drainage Residential, Some data...
Some data...  $131.13  $131.13  Wastewater Treatment - Res, Some data... 
Some data...  $5.12  $5.12  Street Sweeping Residential, Some data...
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"NJZFB":[function(require,module,exports) {
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
}(this, function() {
    "use strict";
    var t1 = 1000, e1 = 60000, n1 = 3600000, r1 = "millisecond", i1 = "second", s1 = "minute", u1 = "hour", a1 = "day", o1 = "week", f1 = "month", h1 = "quarter", c1 = "year", d1 = "date", $1 = "Invalid Date", l1 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y1 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M1 = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
    }, m1 = function(t, e, n) {
        var r = String(t);
        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    }, g1 = {
        s: m1,
        z: function(t) {
            var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
            return (e <= 0 ? "+" : "-") + m1(r, 2, "0") + ":" + m1(i, 2, "0");
        },
        m: function t(e, n) {
            if (e.date() < n.date()) return -t(n, e);
            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, f1), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), f1);
            return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
        },
        a: function(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function(t) {
            return ({
                M: f1,
                y: c1,
                w: o1,
                d: a1,
                D: d1,
                h: u1,
                m: s1,
                s: i1,
                ms: r1,
                Q: h1
            })[t] || String(t || "").toLowerCase().replace(/s$/, "");
        },
        u: function(t) {
            return void 0 === t;
        }
    }, v1 = "en", D1 = {
    };
    D1[v1] = M1;
    var p = function(t) {
        return t instanceof _;
    }, S = function t(e, n, r) {
        var i;
        if (!e) return v1;
        if ("string" == typeof e) {
            var s = e.toLowerCase();
            D1[s] && (i = s), n && (D1[s] = n, i = s);
            var u = e.split("-");
            if (!i && u.length > 1) return t(u[0]);
        } else {
            var a = e.name;
            D1[a] = e, i = a;
        }
        return !r && i && (v1 = i), i || !r && v1;
    }, w = function(t, e) {
        if (p(t)) return t.clone();
        var n = "object" == typeof e ? e : {
        };
        return n.date = t, n.args = arguments, new _(n);
    }, O = g1;
    O.l = S, O.i = p, O.w = function(t, e) {
        return w(t, {
            locale: e.$L,
            utc: e.$u,
            x: e.$x,
            $offset: e.$offset
        });
    };
    var _ = function() {
        function M2(t) {
            this.$L = S(t.locale, null, !0), this.parse(t);
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
            this.$d = (function(t) {
                var e = t.date, n = t.utc;
                if (null === e) return new Date(NaN);
                if (O.u(e)) return new Date;
                if (e instanceof Date) return new Date(e);
                if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match(l1);
                    if (r) {
                        var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                    }
                }
                return new Date(e);
            })(t2), this.$x = t2.x || {
            }, this.init();
        }, m2.init = function() {
            var t = this.$d;
            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, m2.$utils = function() {
            return O;
        }, m2.isValid = function() {
            return !(this.$d.toString() === $1);
        }, m2.isSame = function(t, e) {
            var n = w(t);
            return this.startOf(e) <= n && n <= this.endOf(e);
        }, m2.isAfter = function(t, e) {
            return w(t) < this.startOf(e);
        }, m2.isBefore = function(t, e) {
            return this.endOf(e) < w(t);
        }, m2.$g = function(t, e, n) {
            return O.u(t) ? this[e] : this.set(n, t);
        }, m2.unix = function() {
            return Math.floor(this.valueOf() / 1000);
        }, m2.valueOf = function() {
            return this.$d.getTime();
        }, m2.startOf = function(t3, e2) {
            var n = this, r = !!O.u(e2) || e2, h = O.p(t3), $ = function(t, e) {
                var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                return r ? i : i.endOf(a1);
            }, l = function(t, e) {
                return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [
                    0,
                    0,
                    0,
                    0
                ] : [
                    23,
                    59,
                    59,
                    999
                ]).slice(e)), n);
            }, y = this.$W, M = this.$M, m = this.$D, g = "set" + (this.$u ? "UTC" : "");
            switch(h){
                case c1:
                    return r ? $(1, 0) : $(31, 11);
                case f1:
                    return r ? $(1, M) : $(0, M + 1);
                case o1:
                    var v = this.$locale().weekStart || 0, D = (y < v ? y + 7 : y) - v;
                    return $(r ? m - D : m + (6 - D), M);
                case a1:
                case d1:
                    return l(g + "Hours", 0);
                case u1:
                    return l(g + "Minutes", 1);
                case s1:
                    return l(g + "Seconds", 2);
                case i1:
                    return l(g + "Milliseconds", 3);
                default:
                    return this.clone();
            }
        }, m2.endOf = function(t) {
            return this.startOf(t, !1);
        }, m2.$set = function(t, e) {
            var n, o = O.p(t), h = "set" + (this.$u ? "UTC" : ""), $ = (n = {
            }, n[a1] = h + "Date", n[d1] = h + "Date", n[f1] = h + "Month", n[c1] = h + "FullYear", n[u1] = h + "Hours", n[s1] = h + "Minutes", n[i1] = h + "Seconds", n[r1] = h + "Milliseconds", n)[o], l = o === a1 ? this.$D + (e - this.$W) : e;
            if (o === f1 || o === c1) {
                var y = this.clone().set(d1, 1);
                y.$d[$](l), y.init(), this.$d = y.set(d1, Math.min(this.$D, y.daysInMonth())).$d;
            } else $ && this.$d[$](l);
            return this.init(), this;
        }, m2.set = function(t, e) {
            return this.clone().$set(t, e);
        }, m2.get = function(t) {
            return this[O.p(t)]();
        }, m2.add = function(r, h) {
            var d, $ = this;
            r = Number(r);
            var l = O.p(h), y = function(t) {
                var e = w($);
                return O.w(e.date(e.date() + Math.round(t * r)), $);
            };
            if (l === f1) return this.set(f1, this.$M + r);
            if (l === c1) return this.set(c1, this.$y + r);
            if (l === a1) return y(1);
            if (l === o1) return y(7);
            var M = (d = {
            }, d[s1] = e1, d[u1] = n1, d[i1] = t1, d)[l] || 1, m = this.$d.getTime() + r * M;
            return O.w(m, this);
        }, m2.subtract = function(t, e) {
            return this.add(-1 * t, e);
        }, m2.format = function(t4) {
            var e3 = this, n2 = this.$locale();
            if (!this.isValid()) return n2.invalidDate || $1;
            var r2 = t4 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u = this.$m, a = this.$M, o = n2.weekdays, f = n2.months, h = function(t, n, i, s) {
                return t && (t[n] || t(e3, r2)) || i[n].slice(0, s);
            }, c = function(t) {
                return O.s(s2 % 12 || 12, t, "0");
            }, d = n2.meridiem || function(t, e, n) {
                var r = t < 12 ? "AM" : "PM";
                return n ? r.toLowerCase() : r;
            }, l = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: a + 1,
                MM: O.s(a + 1, 2, "0"),
                MMM: h(n2.monthsShort, a, f, 3),
                MMMM: h(f, a),
                D: this.$D,
                DD: O.s(this.$D, 2, "0"),
                d: String(this.$W),
                dd: h(n2.weekdaysMin, this.$W, o, 2),
                ddd: h(n2.weekdaysShort, this.$W, o, 3),
                dddd: o[this.$W],
                H: String(s2),
                HH: O.s(s2, 2, "0"),
                h: c(1),
                hh: c(2),
                a: d(s2, u, !0),
                A: d(s2, u, !1),
                m: String(u),
                mm: O.s(u, 2, "0"),
                s: String(this.$s),
                ss: O.s(this.$s, 2, "0"),
                SSS: O.s(this.$ms, 3, "0"),
                Z: i2
            };
            return r2.replace(y1, function(t, e) {
                return e || l[t] || i2.replace(":", "");
            });
        }, m2.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r, d, $) {
            var l, y = O.p(d), M = w(r), m = (M.utcOffset() - this.utcOffset()) * e1, g = this - M, v = O.m(this, M);
            return v = (l = {
            }, l[c1] = v / 12, l[f1] = v, l[h1] = v / 3, l[o1] = (g - m) / 604800000, l[a1] = (g - m) / 86400000, l[u1] = g / n1, l[s1] = g / e1, l[i1] = g / t1, l)[y] || g, $ ? v : O.a(v);
        }, m2.daysInMonth = function() {
            return this.endOf(f1).$D;
        }, m2.$locale = function() {
            return D1[this.$L];
        }, m2.locale = function(t, e) {
            if (!t) return this.$L;
            var n = this.clone(), r = S(t, e, !0);
            return r && (n.$L = r), n;
        }, m2.clone = function() {
            return O.w(this.$d, this);
        }, m2.toDate = function() {
            return new Date(this.valueOf());
        }, m2.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
            return this.$d.toISOString();
        }, m2.toString = function() {
            return this.$d.toUTCString();
        }, M2;
    }(), T = _.prototype;
    return w.prototype = T, [
        [
            "$ms",
            r1
        ],
        [
            "$s",
            i1
        ],
        [
            "$m",
            s1
        ],
        [
            "$H",
            u1
        ],
        [
            "$W",
            a1
        ],
        [
            "$M",
            f1
        ],
        [
            "$y",
            c1
        ],
        [
            "$D",
            d1
        ]
    ].forEach(function(t) {
        T[t[1]] = function(e) {
            return this.$g(e, t[0], t[1]);
        };
    }), w.extend = function(t, e) {
        return t.$i || (t(e, _, w), t.$i = !0), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function(t) {
        return w(1000 * t);
    }, w.en = D1[v1], w.Ls = D1, w.p = {
    }, w;
});

},{}],"dmrpe":[function(require,module,exports) {
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_customParseFormat = t();
}(this, function() {
    "use strict";
    var e1 = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, t1 = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n1 = /\d\d/, r1 = /\d\d?/, i1 = /\d*[^\s\d-_:/()]+/, o1 = {
    }, s1 = function(e) {
        return (e = +e) + (e > 68 ? 1900 : 2000);
    };
    var a1 = function(e) {
        return function(t) {
            this[e] = +t;
        };
    }, f1 = [
        /[+-]\d\d:?(\d\d)?|Z/,
        function(e2) {
            (this.zone || (this.zone = {
            })).offset = (function(e) {
                if (!e) return 0;
                if ("Z" === e) return 0;
                var t = e.match(/([+-]|\d\d)/g), n = 60 * t[1] + (+t[2] || 0);
                return 0 === n ? 0 : "+" === t[0] ? -n : n;
            })(e2);
        }
    ], h1 = function(e) {
        var t = o1[e];
        return t && (t.indexOf ? t : t.s.concat(t.f));
    }, u1 = function(e, t) {
        var n, r = o1.meridiem;
        if (r) {
            for(var i = 1; i <= 24; i += 1)if (e.indexOf(r(i, 0, t)) > -1) {
                n = i > 12;
                break;
            }
        } else n = e === (t ? "pm" : "PM");
        return n;
    }, d1 = {
        A: [
            i1,
            function(e) {
                this.afternoon = u1(e, !1);
            }
        ],
        a: [
            i1,
            function(e) {
                this.afternoon = u1(e, !0);
            }
        ],
        S: [
            /\d/,
            function(e) {
                this.milliseconds = 100 * +e;
            }
        ],
        SS: [
            n1,
            function(e) {
                this.milliseconds = 10 * +e;
            }
        ],
        SSS: [
            /\d{3}/,
            function(e) {
                this.milliseconds = +e;
            }
        ],
        s: [
            r1,
            a1("seconds")
        ],
        ss: [
            r1,
            a1("seconds")
        ],
        m: [
            r1,
            a1("minutes")
        ],
        mm: [
            r1,
            a1("minutes")
        ],
        H: [
            r1,
            a1("hours")
        ],
        h: [
            r1,
            a1("hours")
        ],
        HH: [
            r1,
            a1("hours")
        ],
        hh: [
            r1,
            a1("hours")
        ],
        D: [
            r1,
            a1("day")
        ],
        DD: [
            n1,
            a1("day")
        ],
        Do: [
            i1,
            function(e) {
                var t = o1.ordinal, n = e.match(/\d+/);
                if (this.day = n[0], t) for(var r = 1; r <= 31; r += 1)t(r).replace(/\[|\]/g, "") === e && (this.day = r);
            }
        ],
        M: [
            r1,
            a1("month")
        ],
        MM: [
            n1,
            a1("month")
        ],
        MMM: [
            i1,
            function(e3) {
                var t = h1("months"), n = (h1("monthsShort") || t.map(function(e) {
                    return e.slice(0, 3);
                })).indexOf(e3) + 1;
                if (n < 1) throw new Error;
                this.month = n % 12 || n;
            }
        ],
        MMMM: [
            i1,
            function(e) {
                var t = h1("months").indexOf(e) + 1;
                if (t < 1) throw new Error;
                this.month = t % 12 || t;
            }
        ],
        Y: [
            /[+-]?\d+/,
            a1("year")
        ],
        YY: [
            n1,
            function(e) {
                this.year = s1(e);
            }
        ],
        YYYY: [
            /\d{4}/,
            a1("year")
        ],
        Z: f1,
        ZZ: f1
    };
    function c1(n2) {
        var r2, i2;
        r2 = n2, i2 = o1 && o1.formats;
        for(var s = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t2, n3, r) {
            var o = r && r.toUpperCase();
            return n3 || i2[r] || e1[r] || i2[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e, t, n) {
                return t || n.slice(1);
            });
        })).match(t1), a = s.length, f2 = 0; f2 < a; f2 += 1){
            var h = s[f2], u = d1[h], c = u && u[0], l = u && u[1];
            s[f2] = l ? {
                regex: c,
                parser: l
            } : h.replace(/^\[|\]$/g, "");
        }
        return function(e4) {
            for(var t3 = {
            }, n4 = 0, r = 0; n4 < a; n4 += 1){
                var i = s[n4];
                if ("string" == typeof i) r += i.length;
                else {
                    var o = i.regex, f = i.parser, h = e4.slice(r), u = o.exec(h)[0];
                    f.call(t3, u), e4 = e4.replace(u, "");
                }
            }
            return (function(e) {
                var t = e.afternoon;
                if (void 0 !== t) {
                    var n = e.hours;
                    t ? n < 12 && (e.hours += 12) : 12 === n && (e.hours = 0), delete e.afternoon;
                }
            })(t3), t3;
        };
    }
    return function(e5, t4, n5) {
        n5.p.customParseFormat = !0, e5 && e5.parseTwoDigitYear && (s1 = e5.parseTwoDigitYear);
        var r3 = t4.prototype, i3 = r3.parse;
        r3.parse = function(e6) {
            var t5 = e6.date, r4 = e6.utc, s2 = e6.args;
            this.$u = r4;
            var a2 = s2[1];
            if ("string" == typeof a2) {
                var f3 = !0 === s2[2], h2 = !0 === s2[3], u2 = f3 || h2, d2 = s2[2];
                h2 && (d2 = s2[2]), o1 = this.$locale(), !f3 && d2 && (o1 = n5.Ls[d2]), this.$d = (function(e, t, n) {
                    try {
                        if ([
                            "x",
                            "X"
                        ].indexOf(t) > -1) return new Date(("X" === t ? 1000 : 1) * e);
                        var r = c1(t)(e), i = r.year, o = r.month, s = r.day, a = r.hours, f = r.minutes, h = r.seconds, u = r.milliseconds, d = r.zone, l = new Date, m = s || (i || o ? 1 : l.getDate()), M = i || l.getFullYear(), Y = 0;
                        i && !o || (Y = o > 0 ? o - 1 : l.getMonth());
                        var p = a || 0, v = f || 0, D = h || 0, g = u || 0;
                        return d ? new Date(Date.UTC(M, Y, m, p, v, D, g + 60 * d.offset * 1000)) : n ? new Date(Date.UTC(M, Y, m, p, v, D, g)) : new Date(M, Y, m, p, v, D, g);
                    } catch (e7) {
                        return new Date("");
                    }
                })(t5, a2, r4), this.init(), d2 && !0 !== d2 && (this.$L = this.locale(d2).$L), u2 && t5 != this.format(a2) && (this.$d = new Date("")), o1 = {
                };
            } else if (a2 instanceof Array) for(var l1 = a2.length, m1 = 1; m1 <= l1; m1 += 1){
                s2[1] = a2[m1 - 1];
                var M1 = n5.apply(this, s2);
                if (M1.isValid()) {
                    this.$d = M1.$d, this.$L = M1.$L, this.init();
                    break;
                }
                m1 === l1 && (this.$d = new Date(""));
            }
            else i3.call(this, e6);
        };
    };
});

},{}]},["kn9T2","2J4hv"], null, "parcelRequire630b")

//# sourceMappingURL=Credit.84846b9e.js.map
