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

},{"react-refresh/runtime":"786KC"}],"k0hny":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "e2c2bd9c1f0746f0";
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

},{}],"87y3x":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$0cef = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$0cef.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _react1 = require("@fullcalendar/react");
var _reactDefault1 = parcelHelpers.interopDefault(_react1);
var _rrule = require("@fullcalendar/rrule");
var _rruleDefault = parcelHelpers.interopDefault(_rrule);
var _daygrid = require("@fullcalendar/daygrid");
var _daygridDefault = parcelHelpers.interopDefault(_daygrid);
var _stateContext = require("../context/StateContext");
var _rrule1 = require("../utils/rrule");
var _s = $RefreshSig$();
function Calendar() {
    _s();
    const { state , calendarDispatch  } = _react.useContext(_stateContext.StateContext);
    _react.useEffect(()=>{
        calendarDispatch({
            type: 'SET_CALENDAR_EVENTS',
            events: {
                'A': _rrule1.eventGenerator('A'),
                'B': _rrule1.eventGenerator('B'),
                'ODD': _rrule1.eventGenerator('ODD'),
                'EVEN': _rrule1.eventGenerator('EVEN')
            }
        });
    }, []);
    const handleClick = (e, type)=>{
        e.preventDefault();
        calendarDispatch({
            type: 'SET_ACTIVE_EVENTS',
            activeEvents: type
        });
    };
    const removeActiveClasses = ()=>{
        const aButton = document.querySelector('.fc-aButton-button');
        const bButton = document.querySelector('.fc-bButton-button');
        const oddButton = document.querySelector('.fc-oddButton-button');
        const evenButton = document.querySelector('.fc-evenButton-button');
        [
            aButton,
            bButton,
            oddButton,
            evenButton
        ].forEach((button)=>{
            button.classList.remove('active--recycle');
            button.classList.remove('active--watering');
        });
    };
    return(/*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
        className: "calendar-content",
        children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
            className: "calendar-container",
            children: /*#__PURE__*/ _jsxDevRuntime.jsxDEV(_reactDefault1.default, {
                plugins: [
                    _rruleDefault.default,
                    _daygridDefault.default
                ],
                initialView: "dayGridMonth",
                fixedWeekCount: false,
                events: state.events[state.activeEvents],
                height: "auto",
                customButtons: {
                    aButton: {
                        text: 'A',
                        hint: 'Recycling group A',
                        click: (e)=>{
                            removeActiveClasses();
                            e.target.classList.add('active--recycle');
                            handleClick(e, 'A');
                        }
                    },
                    bButton: {
                        text: 'B',
                        hint: 'Recycling group B',
                        click: (e)=>{
                            removeActiveClasses();
                            e.target.classList.add('active--recycle');
                            handleClick(e, 'B');
                        }
                    },
                    oddButton: {
                        text: 'ODD',
                        hint: 'Odd watering days',
                        click: (e)=>{
                            removeActiveClasses();
                            e.target.classList.add('active--watering');
                            handleClick(e, 'ODD');
                        }
                    },
                    evenButton: {
                        text: 'EVEN',
                        hint: 'Even watering days',
                        click: (e)=>{
                            removeActiveClasses();
                            e.target.classList.add('active--watering');
                            handleClick(e, 'EVEN');
                        }
                    }
                },
                headerToolbar: {
                    left: 'title',
                    center: 'aButton,bButton oddButton,evenButton',
                    right: 'prev,next'
                }
            }, void 0, false, {
                fileName: "src/js/components/Calendar.js",
                lineNumber: 40,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "src/js/components/Calendar.js",
            lineNumber: 39,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "src/js/components/Calendar.js",
        lineNumber: 38,
        columnNumber: 9
    }, this));
}
exports.default = Calendar;
_s(Calendar, "CzL1NpGAExyjuEqWx5hvtBpM77w=");
_c = Calendar;
var _c;
$RefreshReg$(_c, "Calendar");

  $parcel$ReactRefreshHelpers$0cef.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@fullcalendar/react":"h7RaJ","@fullcalendar/rrule":"8tgFI","@fullcalendar/daygrid":"8pL9M","../context/StateContext":"W4FOM","../utils/rrule":"hbTZq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"h7RaJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tslib = require("tslib");
var _vdom = require("./vdom");
var _react = require("react");
var _common = require("@fullcalendar/common");
// export all important utils/types
parcelHelpers.exportAll(_common, exports);
var FullCalendar = function(_super) {
    _tslib.__extends(FullCalendar1, _super);
    function FullCalendar1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._calendarApi = new _common.CalendarApi();
        return _this;
    }
    FullCalendar1.prototype.render = function() {
        return _react.createElement(_common.CalendarDataProvider, {
            optionOverrides: this.props,
            calendarApi: this._calendarApi
        }, function(data) {
            return _react.createElement(_common.CalendarRoot, {
                options: data.calendarOptions,
                theme: data.theme,
                emitter: data.emitter
            }, function(classNames, height, isHeightAuto, forPrint) {
                return _react.createElement("div", {
                    className: classNames.join(' '),
                    style: {
                        height: height
                    }
                }, _react.createElement(_common.CalendarContent, _tslib.__assign({
                    isHeightAuto: isHeightAuto,
                    forPrint: forPrint
                }, data)));
            });
        });
    };
    FullCalendar1.prototype.getApi = function() {
        return this._calendarApi;
    };
    return FullCalendar1;
}(_react.Component);
exports.default = FullCalendar;

},{"tslib":"lRdW5","./vdom":"i5N8v","react":"21dqq","@fullcalendar/common":"2E3LE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRdW5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends
);
parcelHelpers.export(exports, "__assign", ()=>__assign
);
parcelHelpers.export(exports, "__rest", ()=>__rest
);
parcelHelpers.export(exports, "__decorate", ()=>__decorate
);
parcelHelpers.export(exports, "__param", ()=>__param
);
parcelHelpers.export(exports, "__metadata", ()=>__metadata
);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter
);
parcelHelpers.export(exports, "__generator", ()=>__generator
);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding
);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar
);
parcelHelpers.export(exports, "__values", ()=>__values
);
parcelHelpers.export(exports, "__read", ()=>__read
);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread
);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays
);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray
);
parcelHelpers.export(exports, "__await", ()=>__await
);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator
);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator
);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues
);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject
);
parcelHelpers.export(exports, "__importStar", ()=>__importStar
);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault
);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet
);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {
    };
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
    return i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
}
function __asyncDelegator(o) {
    var i, p;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
    return i = {
    }, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i5N8v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "flushToDom", ()=>flushToDom
);
var _react = require("react");
var _reactDom = require("react-dom");
(typeof globalThis !== 'undefined' ? globalThis : window).FullCalendarVDom = {
    Component: _react.Component,
    createElement: _react.createElement,
    render: _reactDom.render,
    createRef: _react.createRef,
    Fragment: _react.Fragment,
    createContext: _react.createContext,
    createPortal: _reactDom.createPortal,
    flushToDom: flushToDom,
    unmountComponentAtNode: _reactDom.unmountComponentAtNode
};
function flushToDom() {
// always sync from top-level
}

},{"react":"21dqq","react-dom":"j6uA9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2E3LE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BASE_OPTION_DEFAULTS", ()=>BASE_OPTION_DEFAULTS
);
parcelHelpers.export(exports, "BASE_OPTION_REFINERS", ()=>BASE_OPTION_REFINERS
);
parcelHelpers.export(exports, "BaseComponent", ()=>BaseComponent
);
parcelHelpers.export(exports, "BgEvent", ()=>BgEvent
);
parcelHelpers.export(exports, "CalendarApi", ()=>CalendarApi
);
parcelHelpers.export(exports, "CalendarContent", ()=>CalendarContent
);
parcelHelpers.export(exports, "CalendarDataManager", ()=>CalendarDataManager
);
parcelHelpers.export(exports, "CalendarDataProvider", ()=>CalendarDataProvider
);
parcelHelpers.export(exports, "CalendarRoot", ()=>CalendarRoot
);
parcelHelpers.export(exports, "ContentHook", ()=>ContentHook
);
parcelHelpers.export(exports, "CustomContentRenderContext", ()=>CustomContentRenderContext
);
parcelHelpers.export(exports, "DateComponent", ()=>DateComponent
);
parcelHelpers.export(exports, "DateEnv", ()=>DateEnv
);
parcelHelpers.export(exports, "DateProfileGenerator", ()=>DateProfileGenerator
);
parcelHelpers.export(exports, "DayCellContent", ()=>DayCellContent
);
parcelHelpers.export(exports, "DayCellRoot", ()=>DayCellRoot
);
parcelHelpers.export(exports, "DayHeader", ()=>DayHeader
);
parcelHelpers.export(exports, "DaySeriesModel", ()=>DaySeriesModel
);
parcelHelpers.export(exports, "DayTableModel", ()=>DayTableModel
);
parcelHelpers.export(exports, "DelayedRunner", ()=>DelayedRunner
);
parcelHelpers.export(exports, "ElementDragging", ()=>ElementDragging
);
parcelHelpers.export(exports, "ElementScrollController", ()=>ElementScrollController
);
parcelHelpers.export(exports, "Emitter", ()=>Emitter
);
parcelHelpers.export(exports, "EventApi", ()=>EventApi
);
parcelHelpers.export(exports, "EventRoot", ()=>EventRoot
);
parcelHelpers.export(exports, "EventSourceApi", ()=>EventSourceApi
);
parcelHelpers.export(exports, "Interaction", ()=>Interaction
);
parcelHelpers.export(exports, "MoreLinkRoot", ()=>MoreLinkRoot
);
parcelHelpers.export(exports, "MountHook", ()=>MountHook
);
parcelHelpers.export(exports, "NamedTimeZoneImpl", ()=>NamedTimeZoneImpl
);
parcelHelpers.export(exports, "NowIndicatorRoot", ()=>NowIndicatorRoot
);
parcelHelpers.export(exports, "NowTimer", ()=>NowTimer
);
parcelHelpers.export(exports, "PositionCache", ()=>PositionCache
);
parcelHelpers.export(exports, "RefMap", ()=>RefMap
);
parcelHelpers.export(exports, "RenderHook", ()=>RenderHook
);
parcelHelpers.export(exports, "ScrollController", ()=>ScrollController
);
parcelHelpers.export(exports, "ScrollResponder", ()=>ScrollResponder
);
parcelHelpers.export(exports, "Scroller", ()=>Scroller
);
parcelHelpers.export(exports, "SegHierarchy", ()=>SegHierarchy
);
parcelHelpers.export(exports, "SimpleScrollGrid", ()=>SimpleScrollGrid
);
parcelHelpers.export(exports, "Slicer", ()=>Slicer
);
parcelHelpers.export(exports, "Splitter", ()=>Splitter
);
parcelHelpers.export(exports, "StandardEvent", ()=>StandardEvent
);
parcelHelpers.export(exports, "TableDateCell", ()=>TableDateCell
);
parcelHelpers.export(exports, "TableDowCell", ()=>TableDowCell
);
parcelHelpers.export(exports, "Theme", ()=>Theme
);
parcelHelpers.export(exports, "ViewApi", ()=>ViewApi
);
parcelHelpers.export(exports, "ViewContextType", ()=>ViewContextType
);
parcelHelpers.export(exports, "ViewRoot", ()=>ViewRoot
);
parcelHelpers.export(exports, "WeekNumberRoot", ()=>WeekNumberRoot
);
parcelHelpers.export(exports, "WindowScrollController", ()=>WindowScrollController
);
parcelHelpers.export(exports, "addDays", ()=>addDays
);
parcelHelpers.export(exports, "addDurations", ()=>addDurations
);
parcelHelpers.export(exports, "addMs", ()=>addMs
);
parcelHelpers.export(exports, "addWeeks", ()=>addWeeks
);
parcelHelpers.export(exports, "allowContextMenu", ()=>allowContextMenu
);
parcelHelpers.export(exports, "allowSelection", ()=>allowSelection
);
parcelHelpers.export(exports, "applyMutationToEventStore", ()=>applyMutationToEventStore
);
parcelHelpers.export(exports, "applyStyle", ()=>applyStyle
);
parcelHelpers.export(exports, "applyStyleProp", ()=>applyStyleProp
);
parcelHelpers.export(exports, "asCleanDays", ()=>asCleanDays
);
parcelHelpers.export(exports, "asRoughMinutes", ()=>asRoughMinutes
);
parcelHelpers.export(exports, "asRoughMs", ()=>asRoughMs
);
parcelHelpers.export(exports, "asRoughSeconds", ()=>asRoughSeconds
);
parcelHelpers.export(exports, "binarySearch", ()=>binarySearch
);
parcelHelpers.export(exports, "buildClassNameNormalizer", ()=>buildClassNameNormalizer
);
parcelHelpers.export(exports, "buildEntryKey", ()=>buildEntryKey
);
parcelHelpers.export(exports, "buildEventApis", ()=>buildEventApis
);
parcelHelpers.export(exports, "buildEventRangeKey", ()=>buildEventRangeKey
);
parcelHelpers.export(exports, "buildHashFromArray", ()=>buildHashFromArray
);
parcelHelpers.export(exports, "buildIsoString", ()=>buildIsoString
);
parcelHelpers.export(exports, "buildNavLinkAttrs", ()=>buildNavLinkAttrs
);
parcelHelpers.export(exports, "buildSegCompareObj", ()=>buildSegCompareObj
);
parcelHelpers.export(exports, "buildSegTimeText", ()=>buildSegTimeText
);
parcelHelpers.export(exports, "collectFromHash", ()=>collectFromHash
);
parcelHelpers.export(exports, "combineEventUis", ()=>combineEventUis
);
parcelHelpers.export(exports, "compareByFieldSpec", ()=>compareByFieldSpec
);
parcelHelpers.export(exports, "compareByFieldSpecs", ()=>compareByFieldSpecs
);
parcelHelpers.export(exports, "compareNumbers", ()=>compareNumbers
);
parcelHelpers.export(exports, "compareObjs", ()=>compareObjs
);
parcelHelpers.export(exports, "computeEarliestSegStart", ()=>computeEarliestSegStart
);
parcelHelpers.export(exports, "computeEdges", ()=>computeEdges
);
parcelHelpers.export(exports, "computeFallbackHeaderFormat", ()=>computeFallbackHeaderFormat
);
parcelHelpers.export(exports, "computeHeightAndMargins", ()=>computeHeightAndMargins
);
parcelHelpers.export(exports, "computeInnerRect", ()=>computeInnerRect
);
parcelHelpers.export(exports, "computeRect", ()=>computeRect
);
parcelHelpers.export(exports, "computeSegDraggable", ()=>computeSegDraggable
);
parcelHelpers.export(exports, "computeSegEndResizable", ()=>computeSegEndResizable
);
parcelHelpers.export(exports, "computeSegStartResizable", ()=>computeSegStartResizable
);
parcelHelpers.export(exports, "computeShrinkWidth", ()=>computeShrinkWidth
);
parcelHelpers.export(exports, "computeSmallestCellWidth", ()=>computeSmallestCellWidth
);
parcelHelpers.export(exports, "computeVisibleDayRange", ()=>computeVisibleDayRange
);
parcelHelpers.export(exports, "config", ()=>config
);
parcelHelpers.export(exports, "constrainPoint", ()=>constrainPoint
);
parcelHelpers.export(exports, "createAriaClickAttrs", ()=>createAriaClickAttrs
);
parcelHelpers.export(exports, "createDuration", ()=>createDuration
);
parcelHelpers.export(exports, "createEmptyEventStore", ()=>createEmptyEventStore
);
parcelHelpers.export(exports, "createEventInstance", ()=>createEventInstance
);
parcelHelpers.export(exports, "createEventUi", ()=>createEventUi
);
parcelHelpers.export(exports, "createFormatter", ()=>createFormatter
);
parcelHelpers.export(exports, "createPlugin", ()=>createPlugin
);
parcelHelpers.export(exports, "diffDates", ()=>diffDates
);
parcelHelpers.export(exports, "diffDayAndTime", ()=>diffDayAndTime
);
parcelHelpers.export(exports, "diffDays", ()=>diffDays
);
parcelHelpers.export(exports, "diffPoints", ()=>diffPoints
);
parcelHelpers.export(exports, "diffWeeks", ()=>diffWeeks
);
parcelHelpers.export(exports, "diffWholeDays", ()=>diffWholeDays
);
parcelHelpers.export(exports, "diffWholeWeeks", ()=>diffWholeWeeks
);
parcelHelpers.export(exports, "disableCursor", ()=>disableCursor
);
parcelHelpers.export(exports, "elementClosest", ()=>elementClosest
);
parcelHelpers.export(exports, "elementMatches", ()=>elementMatches
);
parcelHelpers.export(exports, "enableCursor", ()=>enableCursor
);
parcelHelpers.export(exports, "eventTupleToStore", ()=>eventTupleToStore
);
parcelHelpers.export(exports, "filterEventStoreDefs", ()=>filterEventStoreDefs
);
parcelHelpers.export(exports, "filterHash", ()=>filterHash
);
parcelHelpers.export(exports, "findDirectChildren", ()=>findDirectChildren
);
parcelHelpers.export(exports, "findElements", ()=>findElements
);
parcelHelpers.export(exports, "flexibleCompare", ()=>flexibleCompare
);
parcelHelpers.export(exports, "formatDate", ()=>formatDate
);
parcelHelpers.export(exports, "formatDayString", ()=>formatDayString
);
parcelHelpers.export(exports, "formatIsoTimeString", ()=>formatIsoTimeString
);
parcelHelpers.export(exports, "formatRange", ()=>formatRange
);
parcelHelpers.export(exports, "getAllowYScrolling", ()=>getAllowYScrolling
);
parcelHelpers.export(exports, "getCanVGrowWithinCell", ()=>getCanVGrowWithinCell
);
parcelHelpers.export(exports, "getClippingParents", ()=>getClippingParents
);
parcelHelpers.export(exports, "getDateMeta", ()=>getDateMeta
);
parcelHelpers.export(exports, "getDayClassNames", ()=>getDayClassNames
);
parcelHelpers.export(exports, "getDefaultEventEnd", ()=>getDefaultEventEnd
);
parcelHelpers.export(exports, "getElRoot", ()=>getElRoot
);
parcelHelpers.export(exports, "getElSeg", ()=>getElSeg
);
parcelHelpers.export(exports, "getEntrySpanEnd", ()=>getEntrySpanEnd
);
parcelHelpers.export(exports, "getEventClassNames", ()=>getEventClassNames
);
parcelHelpers.export(exports, "getEventTargetViaRoot", ()=>getEventTargetViaRoot
);
parcelHelpers.export(exports, "getIsRtlScrollbarOnLeft", ()=>getIsRtlScrollbarOnLeft
);
parcelHelpers.export(exports, "getRectCenter", ()=>getRectCenter
);
parcelHelpers.export(exports, "getRelevantEvents", ()=>getRelevantEvents
);
parcelHelpers.export(exports, "getScrollGridClassNames", ()=>getScrollGridClassNames
);
parcelHelpers.export(exports, "getScrollbarWidths", ()=>getScrollbarWidths
);
parcelHelpers.export(exports, "getSectionClassNames", ()=>getSectionClassNames
);
parcelHelpers.export(exports, "getSectionHasLiquidHeight", ()=>getSectionHasLiquidHeight
);
parcelHelpers.export(exports, "getSegAnchorAttrs", ()=>getSegAnchorAttrs
);
parcelHelpers.export(exports, "getSegMeta", ()=>getSegMeta
);
parcelHelpers.export(exports, "getSlotClassNames", ()=>getSlotClassNames
);
parcelHelpers.export(exports, "getStickyFooterScrollbar", ()=>getStickyFooterScrollbar
);
parcelHelpers.export(exports, "getStickyHeaderDates", ()=>getStickyHeaderDates
);
parcelHelpers.export(exports, "getUnequalProps", ()=>getUnequalProps
);
parcelHelpers.export(exports, "getUniqueDomId", ()=>getUniqueDomId
);
parcelHelpers.export(exports, "globalLocales", ()=>globalLocales
);
parcelHelpers.export(exports, "globalPlugins", ()=>globalPlugins
);
parcelHelpers.export(exports, "greatestDurationDenominator", ()=>greatestDurationDenominator
);
parcelHelpers.export(exports, "groupIntersectingEntries", ()=>groupIntersectingEntries
);
parcelHelpers.export(exports, "guid", ()=>guid
);
parcelHelpers.export(exports, "hasBgRendering", ()=>hasBgRendering
);
parcelHelpers.export(exports, "hasShrinkWidth", ()=>hasShrinkWidth
);
parcelHelpers.export(exports, "identity", ()=>identity
);
parcelHelpers.export(exports, "interactionSettingsStore", ()=>interactionSettingsStore
);
parcelHelpers.export(exports, "interactionSettingsToStore", ()=>interactionSettingsToStore
);
parcelHelpers.export(exports, "intersectRanges", ()=>intersectRanges
);
parcelHelpers.export(exports, "intersectRects", ()=>intersectRects
);
parcelHelpers.export(exports, "intersectSpans", ()=>intersectSpans
);
parcelHelpers.export(exports, "isArraysEqual", ()=>isArraysEqual
);
parcelHelpers.export(exports, "isColPropsEqual", ()=>isColPropsEqual
);
parcelHelpers.export(exports, "isDateSelectionValid", ()=>isDateSelectionValid
);
parcelHelpers.export(exports, "isDateSpansEqual", ()=>isDateSpansEqual
);
parcelHelpers.export(exports, "isInt", ()=>isInt
);
parcelHelpers.export(exports, "isInteractionValid", ()=>isInteractionValid
);
parcelHelpers.export(exports, "isMultiDayRange", ()=>isMultiDayRange
);
parcelHelpers.export(exports, "isPropsEqual", ()=>isPropsEqual
);
parcelHelpers.export(exports, "isPropsValid", ()=>isPropsValid
);
parcelHelpers.export(exports, "isValidDate", ()=>isValidDate
);
parcelHelpers.export(exports, "joinSpans", ()=>joinSpans
);
parcelHelpers.export(exports, "listenBySelector", ()=>listenBySelector
);
parcelHelpers.export(exports, "mapHash", ()=>mapHash
);
parcelHelpers.export(exports, "memoize", ()=>memoize
);
parcelHelpers.export(exports, "memoizeArraylike", ()=>memoizeArraylike
);
parcelHelpers.export(exports, "memoizeHashlike", ()=>memoizeHashlike
);
parcelHelpers.export(exports, "memoizeObjArg", ()=>memoizeObjArg
);
parcelHelpers.export(exports, "mergeEventStores", ()=>mergeEventStores
);
parcelHelpers.export(exports, "multiplyDuration", ()=>multiplyDuration
);
parcelHelpers.export(exports, "padStart", ()=>padStart
);
parcelHelpers.export(exports, "parseBusinessHours", ()=>parseBusinessHours
);
parcelHelpers.export(exports, "parseClassNames", ()=>parseClassNames
);
parcelHelpers.export(exports, "parseDragMeta", ()=>parseDragMeta
);
parcelHelpers.export(exports, "parseEventDef", ()=>parseEventDef
);
parcelHelpers.export(exports, "parseFieldSpecs", ()=>parseFieldSpecs
);
parcelHelpers.export(exports, "parseMarker", ()=>parse
);
parcelHelpers.export(exports, "pointInsideRect", ()=>pointInsideRect
);
parcelHelpers.export(exports, "preventContextMenu", ()=>preventContextMenu
);
parcelHelpers.export(exports, "preventDefault", ()=>preventDefault
);
parcelHelpers.export(exports, "preventSelection", ()=>preventSelection
);
parcelHelpers.export(exports, "rangeContainsMarker", ()=>rangeContainsMarker
);
parcelHelpers.export(exports, "rangeContainsRange", ()=>rangeContainsRange
);
parcelHelpers.export(exports, "rangesEqual", ()=>rangesEqual
);
parcelHelpers.export(exports, "rangesIntersect", ()=>rangesIntersect
);
parcelHelpers.export(exports, "refineEventDef", ()=>refineEventDef
);
parcelHelpers.export(exports, "refineProps", ()=>refineProps
);
parcelHelpers.export(exports, "removeElement", ()=>removeElement
);
parcelHelpers.export(exports, "removeExact", ()=>removeExact
);
parcelHelpers.export(exports, "renderChunkContent", ()=>renderChunkContent
);
parcelHelpers.export(exports, "renderFill", ()=>renderFill
);
parcelHelpers.export(exports, "renderMicroColGroup", ()=>renderMicroColGroup
);
parcelHelpers.export(exports, "renderScrollShim", ()=>renderScrollShim
);
parcelHelpers.export(exports, "requestJson", ()=>requestJson
);
parcelHelpers.export(exports, "sanitizeShrinkWidth", ()=>sanitizeShrinkWidth
);
parcelHelpers.export(exports, "setElSeg", ()=>setElSeg
);
parcelHelpers.export(exports, "setRef", ()=>setRef
);
parcelHelpers.export(exports, "sliceEventStore", ()=>sliceEventStore
);
parcelHelpers.export(exports, "sliceEvents", ()=>sliceEvents
);
parcelHelpers.export(exports, "sortEventSegs", ()=>sortEventSegs
);
parcelHelpers.export(exports, "startOfDay", ()=>startOfDay
);
parcelHelpers.export(exports, "translateRect", ()=>translateRect
);
parcelHelpers.export(exports, "triggerDateSelect", ()=>triggerDateSelect
);
parcelHelpers.export(exports, "unpromisify", ()=>unpromisify
);
parcelHelpers.export(exports, "version", ()=>version
);
parcelHelpers.export(exports, "whenTransitionDone", ()=>whenTransitionDone
);
parcelHelpers.export(exports, "wholeDivideDurations", ()=>wholeDivideDurations
);
/*!
FullCalendar v5.10.1
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/ var _mainCss = require("./main.css");
var _tslib = require("tslib");
var _vdomJs = require("./vdom.js");
parcelHelpers.exportAll(_vdomJs, exports);
// no public types yet. when there are, export from:
// import {} from './api-type-deps'
var EventSourceApi = function() {
    function EventSourceApi1(context, internalEventSource) {
        this.context = context;
        this.internalEventSource = internalEventSource;
    }
    EventSourceApi1.prototype.remove = function() {
        this.context.dispatch({
            type: 'REMOVE_EVENT_SOURCE',
            sourceId: this.internalEventSource.sourceId
        });
    };
    EventSourceApi1.prototype.refetch = function() {
        this.context.dispatch({
            type: 'FETCH_EVENT_SOURCES',
            sourceIds: [
                this.internalEventSource.sourceId
            ],
            isRefetch: true
        });
    };
    Object.defineProperty(EventSourceApi1.prototype, "id", {
        get: function() {
            return this.internalEventSource.publicId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventSourceApi1.prototype, "url", {
        get: function() {
            return this.internalEventSource.meta.url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventSourceApi1.prototype, "format", {
        get: function() {
            return this.internalEventSource.meta.format; // TODO: bad. not guaranteed
        },
        enumerable: false,
        configurable: true
    });
    return EventSourceApi1;
}();
function removeElement(el) {
    if (el.parentNode) el.parentNode.removeChild(el);
}
// Querying
// ----------------------------------------------------------------------------------------------------------------
function elementClosest(el, selector) {
    if (el.closest) return el.closest(selector);
    if (!document.documentElement.contains(el)) return null;
    do {
        if (elementMatches(el, selector)) return el;
        el = el.parentElement || el.parentNode;
    }while (el !== null && el.nodeType === 1)
    return null;
}
function elementMatches(el, selector) {
    var method = el.matches || el.matchesSelector || el.msMatchesSelector;
    return method.call(el, selector);
}
// accepts multiple subject els
// returns a real array. good for methods like forEach
// TODO: accept the document
function findElements(container, selector) {
    var containers = container instanceof HTMLElement ? [
        container
    ] : container;
    var allMatches = [];
    for(var i = 0; i < containers.length; i += 1){
        var matches = containers[i].querySelectorAll(selector);
        for(var j = 0; j < matches.length; j += 1)allMatches.push(matches[j]);
    }
    return allMatches;
}
// accepts multiple subject els
// only queries direct child elements // TODO: rename to findDirectChildren!
function findDirectChildren(parent, selector) {
    var parents = parent instanceof HTMLElement ? [
        parent
    ] : parent;
    var allMatches = [];
    for(var i = 0; i < parents.length; i += 1){
        var childNodes = parents[i].children; // only ever elements
        for(var j = 0; j < childNodes.length; j += 1){
            var childNode = childNodes[j];
            if (!selector || elementMatches(childNode, selector)) allMatches.push(childNode);
        }
    }
    return allMatches;
}
// Style
// ----------------------------------------------------------------------------------------------------------------
var PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;
function applyStyle(el, props) {
    for(var propName in props)applyStyleProp(el, propName, props[propName]);
}
function applyStyleProp(el, name, val) {
    if (val == null) el.style[name] = '';
    else if (typeof val === 'number' && PIXEL_PROP_RE.test(name)) el.style[name] = val + "px";
    else el.style[name] = val;
}
// Event Handling
// ----------------------------------------------------------------------------------------------------------------
// if intercepting bubbled events at the document/window/body level,
// and want to see originating element (the 'target'), use this util instead
// of `ev.target` because it goes within web-component boundaries.
function getEventTargetViaRoot(ev) {
    var _a, _b;
    return (_b = (_a = ev.composedPath) === null || _a === void 0 ? void 0 : _a.call(ev)[0]) !== null && _b !== void 0 ? _b : ev.target;
}
// Shadow DOM consuderations
// ----------------------------------------------------------------------------------------------------------------
function getElRoot(el) {
    return el.getRootNode ? el.getRootNode() : document;
}
// Unique ID for DOM attribute
var guid$1 = 0;
function getUniqueDomId() {
    guid$1 += 1;
    return 'fc-dom-' + guid$1;
}
// Stops a mouse/touch event from doing it's native browser action
function preventDefault(ev) {
    ev.preventDefault();
}
// Event Delegation
// ----------------------------------------------------------------------------------------------------------------
function buildDelegationHandler(selector, handler) {
    return function(ev) {
        var matchedChild = elementClosest(ev.target, selector);
        if (matchedChild) handler.call(matchedChild, ev, matchedChild);
    };
}
function listenBySelector(container, eventType, selector, handler) {
    var attachedHandler = buildDelegationHandler(selector, handler);
    container.addEventListener(eventType, attachedHandler);
    return function() {
        container.removeEventListener(eventType, attachedHandler);
    };
}
function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
    var currentMatchedChild;
    return listenBySelector(container, 'mouseover', selector, function(mouseOverEv, matchedChild) {
        if (matchedChild !== currentMatchedChild) {
            currentMatchedChild = matchedChild;
            onMouseEnter(mouseOverEv, matchedChild);
            var realOnMouseLeave_1 = function(mouseLeaveEv) {
                currentMatchedChild = null;
                onMouseLeave(mouseLeaveEv, matchedChild);
                matchedChild.removeEventListener('mouseleave', realOnMouseLeave_1);
            };
            // listen to the next mouseleave, and then unattach
            matchedChild.addEventListener('mouseleave', realOnMouseLeave_1);
        }
    });
}
// Animation
// ----------------------------------------------------------------------------------------------------------------
var transitionEventNames = [
    'webkitTransitionEnd',
    'otransitionend',
    'oTransitionEnd',
    'msTransitionEnd',
    'transitionend', 
];
// triggered only when the next single subsequent transition finishes
function whenTransitionDone(el, callback) {
    var realCallback = function(ev) {
        callback(ev);
        transitionEventNames.forEach(function(eventName) {
            el.removeEventListener(eventName, realCallback);
        });
    };
    transitionEventNames.forEach(function(eventName) {
        el.addEventListener(eventName, realCallback); // cross-browser way to determine when the transition finishes
    });
}
// ARIA workarounds
// ----------------------------------------------------------------------------------------------------------------
function createAriaClickAttrs(handler) {
    return _tslib.__assign({
        onClick: handler
    }, createAriaKeyboardAttrs(handler));
}
function createAriaKeyboardAttrs(handler) {
    return {
        tabIndex: 0,
        onKeyDown: function(ev) {
            if (ev.key === 'Enter' || ev.key === ' ') {
                handler(ev);
                ev.preventDefault(); // if space, don't scroll down page
            }
        }
    };
}
var guidNumber = 0;
function guid() {
    guidNumber += 1;
    return String(guidNumber);
}
/* FullCalendar-specific DOM Utilities
----------------------------------------------------------------------------------------------------------------------*/ // Make the mouse cursor express that an event is not allowed in the current area
function disableCursor() {
    document.body.classList.add('fc-not-allowed');
}
// Returns the mouse cursor to its original look
function enableCursor() {
    document.body.classList.remove('fc-not-allowed');
}
/* Selection
----------------------------------------------------------------------------------------------------------------------*/ function preventSelection(el) {
    el.classList.add('fc-unselectable');
    el.addEventListener('selectstart', preventDefault);
}
function allowSelection(el) {
    el.classList.remove('fc-unselectable');
    el.removeEventListener('selectstart', preventDefault);
}
/* Context Menu
----------------------------------------------------------------------------------------------------------------------*/ function preventContextMenu(el) {
    el.addEventListener('contextmenu', preventDefault);
}
function allowContextMenu(el) {
    el.removeEventListener('contextmenu', preventDefault);
}
function parseFieldSpecs(input) {
    var specs = [];
    var tokens = [];
    var i;
    var token;
    if (typeof input === 'string') tokens = input.split(/\s*,\s*/);
    else if (typeof input === 'function') tokens = [
        input
    ];
    else if (Array.isArray(input)) tokens = input;
    for(i = 0; i < tokens.length; i += 1){
        token = tokens[i];
        if (typeof token === 'string') specs.push(token.charAt(0) === '-' ? {
            field: token.substring(1),
            order: -1
        } : {
            field: token,
            order: 1
        });
        else if (typeof token === 'function') specs.push({
            func: token
        });
    }
    return specs;
}
function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
    var i;
    var cmp;
    for(i = 0; i < fieldSpecs.length; i += 1){
        cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i]);
        if (cmp) return cmp;
    }
    return 0;
}
function compareByFieldSpec(obj0, obj1, fieldSpec) {
    if (fieldSpec.func) return fieldSpec.func(obj0, obj1);
    return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field]) * (fieldSpec.order || 1);
}
function flexibleCompare(a, b) {
    if (!a && !b) return 0;
    if (b == null) return -1;
    if (a == null) return 1;
    if (typeof a === 'string' || typeof b === 'string') return String(a).localeCompare(String(b));
    return a - b;
}
/* String Utilities
----------------------------------------------------------------------------------------------------------------------*/ function padStart(val, len) {
    var s = String(val);
    return '000'.substr(0, len - s.length) + s;
}
function formatWithOrdinals(formatter, args, fallbackText) {
    if (typeof formatter === 'function') return formatter.apply(void 0, args);
    if (typeof formatter === 'string') return args.reduce(function(str, arg, index) {
        return str.replace('$' + index, arg || '');
    }, formatter);
    return fallbackText;
}
/* Number Utilities
----------------------------------------------------------------------------------------------------------------------*/ function compareNumbers(a, b) {
    return a - b;
}
function isInt(n) {
    return n % 1 === 0;
}
/* FC-specific DOM dimension stuff
----------------------------------------------------------------------------------------------------------------------*/ function computeSmallestCellWidth(cellEl) {
    var allWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-frame');
    var contentWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-cushion');
    if (!allWidthEl) throw new Error('needs fc-scrollgrid-shrink-frame className'); // TODO: use const
    if (!contentWidthEl) throw new Error('needs fc-scrollgrid-shrink-cushion className');
    return cellEl.getBoundingClientRect().width - allWidthEl.getBoundingClientRect().width + contentWidthEl.getBoundingClientRect().width;
}
var DAY_IDS = [
    'sun',
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat'
];
// Adding
function addWeeks(m, n) {
    var a = dateToUtcArray(m);
    a[2] += n * 7;
    return arrayToUtcDate(a);
}
function addDays(m, n) {
    var a = dateToUtcArray(m);
    a[2] += n;
    return arrayToUtcDate(a);
}
function addMs(m, n) {
    var a = dateToUtcArray(m);
    a[6] += n;
    return arrayToUtcDate(a);
}
// Diffing (all return floats)
// TODO: why not use ranges?
function diffWeeks(m0, m1) {
    return diffDays(m0, m1) / 7;
}
function diffDays(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / 86400000;
}
function diffHours(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / 3600000;
}
function diffMinutes(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / 60000;
}
function diffSeconds(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / 1000;
}
function diffDayAndTime(m0, m1) {
    var m0day = startOfDay(m0);
    var m1day = startOfDay(m1);
    return {
        years: 0,
        months: 0,
        days: Math.round(diffDays(m0day, m1day)),
        milliseconds: m1.valueOf() - m1day.valueOf() - (m0.valueOf() - m0day.valueOf())
    };
}
// Diffing Whole Units
function diffWholeWeeks(m0, m1) {
    var d = diffWholeDays(m0, m1);
    if (d !== null && d % 7 === 0) return d / 7;
    return null;
}
function diffWholeDays(m0, m1) {
    if (timeAsMs(m0) === timeAsMs(m1)) return Math.round(diffDays(m0, m1));
    return null;
}
// Start-Of
function startOfDay(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate(), 
    ]);
}
function startOfHour(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate(),
        m.getUTCHours(), 
    ]);
}
function startOfMinute(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate(),
        m.getUTCHours(),
        m.getUTCMinutes(), 
    ]);
}
function startOfSecond(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate(),
        m.getUTCHours(),
        m.getUTCMinutes(),
        m.getUTCSeconds(), 
    ]);
}
// Week Computation
function weekOfYear(marker, dow, doy) {
    var y = marker.getUTCFullYear();
    var w = weekOfGivenYear(marker, y, dow, doy);
    if (w < 1) return weekOfGivenYear(marker, y - 1, dow, doy);
    var nextW = weekOfGivenYear(marker, y + 1, dow, doy);
    if (nextW >= 1) return Math.min(w, nextW);
    return w;
}
function weekOfGivenYear(marker, year, dow, doy) {
    var firstWeekStart = arrayToUtcDate([
        year,
        0,
        1 + firstWeekOffset(year, dow, doy)
    ]);
    var dayStart = startOfDay(marker);
    var days = Math.round(diffDays(firstWeekStart, dayStart));
    return Math.floor(days / 7) + 1; // zero-indexed
}
// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    // first-week day -- which january is always in the first week (4 for iso, 1 for other)
    var fwd = 7 + dow - doy;
    // first-week day local weekday -- which local weekday is fwd
    var fwdlw = (7 + arrayToUtcDate([
        year,
        0,
        fwd
    ]).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
}
// Array Conversion
function dateToLocalArray(date) {
    return [
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds(), 
    ];
}
function arrayToLocalDate(a) {
    return new Date(a[0], a[1] || 0, a[2] == null ? 1 : a[2], a[3] || 0, a[4] || 0, a[5] || 0);
}
function dateToUtcArray(date) {
    return [
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
        date.getUTCMilliseconds(), 
    ];
}
function arrayToUtcDate(a) {
    // according to web standards (and Safari), a month index is required.
    // massage if only given a year.
    if (a.length === 1) a = a.concat([
        0
    ]);
    return new Date(Date.UTC.apply(Date, a));
}
// Other Utils
function isValidDate(m) {
    return !isNaN(m.valueOf());
}
function timeAsMs(m) {
    return m.getUTCHours() * 3600000 + m.getUTCMinutes() * 60000 + m.getUTCSeconds() * 1000 + m.getUTCMilliseconds();
}
function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
    return {
        instanceId: guid(),
        defId: defId,
        range: range,
        forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
        forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo
    };
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
// Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.
function mergeProps(propObjs, complexPropsMap) {
    var dest = {
    };
    if (complexPropsMap) for(var name_1 in complexPropsMap){
        var complexObjs = [];
        // collect the trailing object values, stopping when a non-object is discovered
        for(var i = propObjs.length - 1; i >= 0; i -= 1){
            var val = propObjs[i][name_1];
            if (typeof val === 'object' && val) complexObjs.unshift(val);
            else if (val !== undefined) {
                dest[name_1] = val; // if there were no objects, this value will be used
                break;
            }
        }
        // if the trailing values were objects, use the merged value
        if (complexObjs.length) dest[name_1] = mergeProps(complexObjs);
    }
    // copy values into the destination, going from last to first
    for(var i = propObjs.length - 1; i >= 0; i -= 1){
        var props = propObjs[i];
        for(var name_2 in props)if (!(name_2 in dest)) dest[name_2] = props[name_2];
    }
    return dest;
}
function filterHash(hash, func) {
    var filtered = {
    };
    for(var key in hash)if (func(hash[key], key)) filtered[key] = hash[key];
    return filtered;
}
function mapHash(hash, func) {
    var newHash = {
    };
    for(var key in hash)newHash[key] = func(hash[key], key);
    return newHash;
}
function arrayToHash(a) {
    var hash = {
    };
    for(var _i = 0, a_1 = a; _i < a_1.length; _i++){
        var item = a_1[_i];
        hash[item] = true;
    }
    return hash;
}
function buildHashFromArray(a, func) {
    var hash = {
    };
    for(var i = 0; i < a.length; i += 1){
        var tuple = func(a[i], i);
        hash[tuple[0]] = tuple[1];
    }
    return hash;
}
function hashValuesToArray(obj) {
    var a = [];
    for(var key in obj)a.push(obj[key]);
    return a;
}
function isPropsEqual(obj0, obj1) {
    if (obj0 === obj1) return true;
    for(var key in obj0)if (hasOwnProperty.call(obj0, key)) {
        if (!(key in obj1)) return false;
    }
    for(var key in obj1)if (hasOwnProperty.call(obj1, key)) {
        if (obj0[key] !== obj1[key]) return false;
    }
    return true;
}
function getUnequalProps(obj0, obj1) {
    var keys = [];
    for(var key in obj0){
        if (hasOwnProperty.call(obj0, key)) {
            if (!(key in obj1)) keys.push(key);
        }
    }
    for(var key in obj1){
        if (hasOwnProperty.call(obj1, key)) {
            if (obj0[key] !== obj1[key]) keys.push(key);
        }
    }
    return keys;
}
function compareObjs(oldProps, newProps, equalityFuncs) {
    if (equalityFuncs === void 0) equalityFuncs = {
    };
    if (oldProps === newProps) return true;
    for(var key in newProps){
        if (key in oldProps && isObjValsEqual(oldProps[key], newProps[key], equalityFuncs[key])) ;
        else return false;
    }
    // check for props that were omitted in the new
    for(var key in oldProps){
        if (!(key in newProps)) return false;
    }
    return true;
}
/*
assumed "true" equality for handler names like "onReceiveSomething"
*/ function isObjValsEqual(val0, val1, comparator) {
    if (val0 === val1 || comparator === true) return true;
    if (comparator) return comparator(val0, val1);
    return false;
}
function collectFromHash(hash, startIndex, endIndex, step) {
    if (startIndex === void 0) startIndex = 0;
    if (step === void 0) step = 1;
    var res = [];
    if (endIndex == null) endIndex = Object.keys(hash).length;
    for(var i = startIndex; i < endIndex; i += step){
        var val = hash[i];
        if (val !== undefined) res.push(val);
    }
    return res;
}
function parseRecurring(refined, defaultAllDay, dateEnv, recurringTypes) {
    for(var i = 0; i < recurringTypes.length; i += 1){
        var parsed = recurringTypes[i].parse(refined, dateEnv);
        if (parsed) {
            var allDay = refined.allDay;
            if (allDay == null) {
                allDay = defaultAllDay;
                if (allDay == null) {
                    allDay = parsed.allDayGuess;
                    if (allDay == null) allDay = false;
                }
            }
            return {
                allDay: allDay,
                duration: parsed.duration,
                typeData: parsed.typeData,
                typeId: i
            };
        }
    }
    return null;
}
function expandRecurring(eventStore, framingRange, context) {
    var dateEnv = context.dateEnv, pluginHooks = context.pluginHooks, options = context.options;
    var defs = eventStore.defs, instances = eventStore.instances;
    // remove existing recurring instances
    // TODO: bad. always expand events as a second step
    instances = filterHash(instances, function(instance) {
        return !defs[instance.defId].recurringDef;
    });
    for(var defId in defs){
        var def = defs[defId];
        if (def.recurringDef) {
            var duration = def.recurringDef.duration;
            if (!duration) duration = def.allDay ? options.defaultAllDayEventDuration : options.defaultTimedEventDuration;
            var starts = expandRecurringRanges(def, duration, framingRange, dateEnv, pluginHooks.recurringTypes);
            for(var _i = 0, starts_1 = starts; _i < starts_1.length; _i++){
                var start = starts_1[_i];
                var instance = createEventInstance(defId, {
                    start: start,
                    end: dateEnv.add(start, duration)
                });
                instances[instance.instanceId] = instance;
            }
        }
    }
    return {
        defs: defs,
        instances: instances
    };
}
/*
Event MUST have a recurringDef
*/ function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
    var typeDef = recurringTypes[eventDef.recurringDef.typeId];
    var markers = typeDef.expand(eventDef.recurringDef.typeData, {
        start: dateEnv.subtract(framingRange.start, duration),
        end: framingRange.end
    }, dateEnv);
    // the recurrence plugins don't guarantee that all-day events are start-of-day, so we have to
    if (eventDef.allDay) markers = markers.map(startOfDay);
    return markers;
}
var INTERNAL_UNITS = [
    'years',
    'months',
    'days',
    'milliseconds'
];
var PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
// Parsing and Creation
function createDuration(input, unit) {
    var _a;
    if (typeof input === 'string') return parseString(input);
    if (typeof input === 'object' && input) return parseObject(input);
    if (typeof input === 'number') return parseObject((_a = {
    }, _a[unit || 'milliseconds'] = input, _a));
    return null;
}
function parseString(s) {
    var m = PARSE_RE.exec(s);
    if (m) {
        var sign = m[1] ? -1 : 1;
        return {
            years: 0,
            months: 0,
            days: sign * (m[2] ? parseInt(m[2], 10) : 0),
            milliseconds: sign * ((m[3] ? parseInt(m[3], 10) : 0) * 3600000 + (m[4] ? parseInt(m[4], 10) : 0) * 60000 + (m[5] ? parseInt(m[5], 10) : 0) * 1000 + (m[6] ? parseInt(m[6], 10) : 0) // ms
            )
        };
    }
    return null;
}
function parseObject(obj) {
    var duration = {
        years: obj.years || obj.year || 0,
        months: obj.months || obj.month || 0,
        days: obj.days || obj.day || 0,
        milliseconds: (obj.hours || obj.hour || 0) * 3600000 + (obj.minutes || obj.minute || 0) * 60000 + (obj.seconds || obj.second || 0) * 1000 + (obj.milliseconds || obj.millisecond || obj.ms || 0)
    };
    var weeks = obj.weeks || obj.week;
    if (weeks) {
        duration.days += weeks * 7;
        duration.specifiedWeeks = true;
    }
    return duration;
}
// Equality
function durationsEqual(d0, d1) {
    return d0.years === d1.years && d0.months === d1.months && d0.days === d1.days && d0.milliseconds === d1.milliseconds;
}
function asCleanDays(dur) {
    if (!dur.years && !dur.months && !dur.milliseconds) return dur.days;
    return 0;
}
// Simple Math
function addDurations(d0, d1) {
    return {
        years: d0.years + d1.years,
        months: d0.months + d1.months,
        days: d0.days + d1.days,
        milliseconds: d0.milliseconds + d1.milliseconds
    };
}
function subtractDurations(d1, d0) {
    return {
        years: d1.years - d0.years,
        months: d1.months - d0.months,
        days: d1.days - d0.days,
        milliseconds: d1.milliseconds - d0.milliseconds
    };
}
function multiplyDuration(d, n) {
    return {
        years: d.years * n,
        months: d.months * n,
        days: d.days * n,
        milliseconds: d.milliseconds * n
    };
}
// Conversions
// "Rough" because they are based on average-case Gregorian months/years
function asRoughYears(dur) {
    return asRoughDays(dur) / 365;
}
function asRoughMonths(dur) {
    return asRoughDays(dur) / 30;
}
function asRoughDays(dur) {
    return asRoughMs(dur) / 86400000;
}
function asRoughMinutes(dur) {
    return asRoughMs(dur) / 60000;
}
function asRoughSeconds(dur) {
    return asRoughMs(dur) / 1000;
}
function asRoughMs(dur) {
    return dur.years * 31536000000 + dur.months * 2592000000 + dur.days * 86400000 + dur.milliseconds;
}
// Advanced Math
function wholeDivideDurations(numerator, denominator) {
    var res = null;
    for(var i = 0; i < INTERNAL_UNITS.length; i += 1){
        var unit = INTERNAL_UNITS[i];
        if (denominator[unit]) {
            var localRes = numerator[unit] / denominator[unit];
            if (!isInt(localRes) || res !== null && res !== localRes) return null;
            res = localRes;
        } else if (numerator[unit]) // needs to divide by something but can't!
        return null;
    }
    return res;
}
function greatestDurationDenominator(dur) {
    var ms = dur.milliseconds;
    if (ms) {
        if (ms % 1000 !== 0) return {
            unit: 'millisecond',
            value: ms
        };
        if (ms % 60000 !== 0) return {
            unit: 'second',
            value: ms / 1000
        };
        if (ms % 3600000 !== 0) return {
            unit: 'minute',
            value: ms / 60000
        };
        if (ms) return {
            unit: 'hour',
            value: ms / 3600000
        };
    }
    if (dur.days) {
        if (dur.specifiedWeeks && dur.days % 7 === 0) return {
            unit: 'week',
            value: dur.days / 7
        };
        return {
            unit: 'day',
            value: dur.days
        };
    }
    if (dur.months) return {
        unit: 'month',
        value: dur.months
    };
    if (dur.years) return {
        unit: 'year',
        value: dur.years
    };
    return {
        unit: 'millisecond',
        value: 0
    };
}
// timeZoneOffset is in minutes
function buildIsoString(marker, timeZoneOffset, stripZeroTime) {
    if (stripZeroTime === void 0) stripZeroTime = false;
    var s = marker.toISOString();
    s = s.replace('.000', '');
    if (stripZeroTime) s = s.replace('T00:00:00Z', '');
    if (s.length > 10) {
        if (timeZoneOffset == null) s = s.replace('Z', '');
        else if (timeZoneOffset !== 0) s = s.replace('Z', formatTimeZoneOffset(timeZoneOffset, true));
    // otherwise, its UTC-0 and we want to keep the Z
    }
    return s;
}
// formats the date, but with no time part
// TODO: somehow merge with buildIsoString and stripZeroTime
// TODO: rename. omit "string"
function formatDayString(marker) {
    return marker.toISOString().replace(/T.*$/, '');
}
// TODO: use Date::toISOString and use everything after the T?
function formatIsoTimeString(marker) {
    return padStart(marker.getUTCHours(), 2) + ':' + padStart(marker.getUTCMinutes(), 2) + ':' + padStart(marker.getUTCSeconds(), 2);
}
function formatTimeZoneOffset(minutes, doIso) {
    if (doIso === void 0) doIso = false;
    var sign = minutes < 0 ? '-' : '+';
    var abs = Math.abs(minutes);
    var hours = Math.floor(abs / 60);
    var mins = Math.round(abs % 60);
    if (doIso) return sign + padStart(hours, 2) + ":" + padStart(mins, 2);
    return "GMT" + sign + hours + (mins ? ":" + padStart(mins, 2) : '');
}
// TODO: new util arrayify?
function removeExact(array, exactVal) {
    var removeCnt = 0;
    var i = 0;
    while(i < array.length)if (array[i] === exactVal) {
        array.splice(i, 1);
        removeCnt += 1;
    } else i += 1;
    return removeCnt;
}
function isArraysEqual(a0, a1, equalityFunc) {
    if (a0 === a1) return true;
    var len = a0.length;
    var i;
    if (len !== a1.length) return false;
    for(i = 0; i < len; i += 1){
        if (!(equalityFunc ? equalityFunc(a0[i], a1[i]) : a0[i] === a1[i])) return false;
    }
    return true;
}
function memoize(workerFunc, resEquality, teardownFunc) {
    var currentArgs;
    var currentRes;
    return function() {
        var newArgs = [];
        for(var _i = 0; _i < arguments.length; _i++)newArgs[_i] = arguments[_i];
        if (!currentArgs) currentRes = workerFunc.apply(this, newArgs);
        else if (!isArraysEqual(currentArgs, newArgs)) {
            if (teardownFunc) teardownFunc(currentRes);
            var res = workerFunc.apply(this, newArgs);
            if (!resEquality || !resEquality(res, currentRes)) currentRes = res;
        }
        currentArgs = newArgs;
        return currentRes;
    };
}
function memoizeObjArg(workerFunc, resEquality, teardownFunc) {
    var _this = this;
    var currentArg;
    var currentRes;
    return function(newArg) {
        if (!currentArg) currentRes = workerFunc.call(_this, newArg);
        else if (!isPropsEqual(currentArg, newArg)) {
            if (teardownFunc) teardownFunc(currentRes);
            var res = workerFunc.call(_this, newArg);
            if (!resEquality || !resEquality(res, currentRes)) currentRes = res;
        }
        currentArg = newArg;
        return currentRes;
    };
}
function memoizeArraylike(workerFunc, resEquality, teardownFunc) {
    var _this = this;
    var currentArgSets = [];
    var currentResults = [];
    return function(newArgSets) {
        var currentLen = currentArgSets.length;
        var newLen = newArgSets.length;
        var i = 0;
        for(; i < currentLen; i += 1){
            if (!newArgSets[i]) {
                if (teardownFunc) teardownFunc(currentResults[i]);
            } else if (!isArraysEqual(currentArgSets[i], newArgSets[i])) {
                if (teardownFunc) teardownFunc(currentResults[i]);
                var res = workerFunc.apply(_this, newArgSets[i]);
                if (!resEquality || !resEquality(res, currentResults[i])) currentResults[i] = res;
            }
        }
        for(; i < newLen; i += 1)currentResults[i] = workerFunc.apply(_this, newArgSets[i]);
        currentArgSets = newArgSets;
        currentResults.splice(newLen); // remove excess
        return currentResults;
    };
}
function memoizeHashlike(workerFunc, resEquality, teardownFunc) {
    var _this = this;
    var currentArgHash = {
    };
    var currentResHash = {
    };
    return function(newArgHash) {
        var newResHash = {
        };
        for(var key in newArgHash){
            if (!currentResHash[key]) newResHash[key] = workerFunc.apply(_this, newArgHash[key]);
            else if (!isArraysEqual(currentArgHash[key], newArgHash[key])) {
                if (teardownFunc) teardownFunc(currentResHash[key]);
                var res = workerFunc.apply(_this, newArgHash[key]);
                newResHash[key] = resEquality && resEquality(res, currentResHash[key]) ? currentResHash[key] : res;
            } else newResHash[key] = currentResHash[key];
        }
        currentArgHash = newArgHash;
        currentResHash = newResHash;
        return newResHash;
    };
}
var EXTENDED_SETTINGS_AND_SEVERITIES = {
    week: 3,
    separator: 0,
    omitZeroMinute: 0,
    meridiem: 0,
    omitCommas: 0
};
var STANDARD_DATE_PROP_SEVERITIES = {
    timeZoneName: 7,
    era: 6,
    year: 5,
    month: 4,
    day: 2,
    weekday: 2,
    hour: 1,
    minute: 1,
    second: 1
};
var MERIDIEM_RE = /\s*([ap])\.?m\.?/i; // eats up leading spaces too
var COMMA_RE = /,/g; // we need re for globalness
var MULTI_SPACE_RE = /\s+/g;
var LTR_RE = /\u200e/g; // control character
var UTC_RE = /UTC|GMT/;
var NativeFormatter = function() {
    function NativeFormatter1(formatSettings) {
        var standardDateProps = {
        };
        var extendedSettings = {
        };
        var severity = 0;
        for(var name_1 in formatSettings)if (name_1 in EXTENDED_SETTINGS_AND_SEVERITIES) {
            extendedSettings[name_1] = formatSettings[name_1];
            severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name_1], severity);
        } else {
            standardDateProps[name_1] = formatSettings[name_1];
            if (name_1 in STANDARD_DATE_PROP_SEVERITIES) severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name_1], severity);
        }
        this.standardDateProps = standardDateProps;
        this.extendedSettings = extendedSettings;
        this.severity = severity;
        this.buildFormattingFunc = memoize(buildFormattingFunc);
    }
    NativeFormatter1.prototype.format = function(date, context) {
        return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
    };
    NativeFormatter1.prototype.formatRange = function(start, end, context, betterDefaultSeparator) {
        var _a = this, standardDateProps = _a.standardDateProps, extendedSettings = _a.extendedSettings;
        var diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);
        if (!diffSeverity) return this.format(start, context);
        var biggestUnitForPartial = diffSeverity;
        if (biggestUnitForPartial > 1 && (standardDateProps.year === 'numeric' || standardDateProps.year === '2-digit') && (standardDateProps.month === 'numeric' || standardDateProps.month === '2-digit') && (standardDateProps.day === 'numeric' || standardDateProps.day === '2-digit')) biggestUnitForPartial = 1; // make it look like the dates are only different in terms of time
        var full0 = this.format(start, context);
        var full1 = this.format(end, context);
        if (full0 === full1) return full0;
        var partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
        var partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
        var partial0 = partialFormattingFunc(start);
        var partial1 = partialFormattingFunc(end);
        var insertion = findCommonInsertion(full0, partial0, full1, partial1);
        var separator = extendedSettings.separator || betterDefaultSeparator || context.defaultSeparator || '';
        if (insertion) return insertion.before + partial0 + separator + partial1 + insertion.after;
        return full0 + separator + full1;
    };
    NativeFormatter1.prototype.getLargestUnit = function() {
        switch(this.severity){
            case 7:
            case 6:
            case 5:
                return 'year';
            case 4:
                return 'month';
            case 3:
                return 'week';
            case 2:
                return 'day';
            default:
                return 'time'; // really?
        }
    };
    return NativeFormatter1;
}();
function buildFormattingFunc(standardDateProps, extendedSettings, context) {
    var standardDatePropCnt = Object.keys(standardDateProps).length;
    if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === 'short') return function(date) {
        return formatTimeZoneOffset(date.timeZoneOffset);
    };
    if (standardDatePropCnt === 0 && extendedSettings.week) return function(date) {
        return formatWeekNumber(context.computeWeekNumber(date.marker), context.weekText, context.weekTextLong, context.locale, extendedSettings.week);
    };
    return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
}
function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
    standardDateProps = _tslib.__assign({
    }, standardDateProps); // copy
    extendedSettings = _tslib.__assign({
    }, extendedSettings); // copy
    sanitizeSettings(standardDateProps, extendedSettings);
    standardDateProps.timeZone = 'UTC'; // we leverage the only guaranteed timeZone for our UTC markers
    var normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
    var zeroFormat; // needed?
    if (extendedSettings.omitZeroMinute) {
        var zeroProps = _tslib.__assign({
        }, standardDateProps);
        delete zeroProps.minute; // seconds and ms were already considered in sanitizeSettings
        zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
    }
    return function(date) {
        var marker = date.marker;
        var format;
        if (zeroFormat && !marker.getUTCMinutes()) format = zeroFormat;
        else format = normalFormat;
        var s = format.format(marker);
        return postProcess(s, date, standardDateProps, extendedSettings, context);
    };
}
function sanitizeSettings(standardDateProps, extendedSettings) {
    // deal with a browser inconsistency where formatting the timezone
    // requires that the hour/minute be present.
    if (standardDateProps.timeZoneName) {
        if (!standardDateProps.hour) standardDateProps.hour = '2-digit';
        if (!standardDateProps.minute) standardDateProps.minute = '2-digit';
    }
    // only support short timezone names
    if (standardDateProps.timeZoneName === 'long') standardDateProps.timeZoneName = 'short';
    // if requesting to display seconds, MUST display minutes
    if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) delete extendedSettings.omitZeroMinute;
}
function postProcess(s, date, standardDateProps, extendedSettings, context) {
    s = s.replace(LTR_RE, ''); // remove left-to-right control chars. do first. good for other regexes
    if (standardDateProps.timeZoneName === 'short') s = injectTzoStr(s, context.timeZone === 'UTC' || date.timeZoneOffset == null ? 'UTC' : formatTimeZoneOffset(date.timeZoneOffset));
    if (extendedSettings.omitCommas) s = s.replace(COMMA_RE, '').trim();
    if (extendedSettings.omitZeroMinute) s = s.replace(':00', ''); // zeroFormat doesn't always achieve this
    // ^ do anything that might create adjacent spaces before this point,
    // because MERIDIEM_RE likes to eat up loading spaces
    if (extendedSettings.meridiem === false) s = s.replace(MERIDIEM_RE, '').trim();
    else if (extendedSettings.meridiem === 'narrow') s = s.replace(MERIDIEM_RE, function(m0, m1) {
        return m1.toLocaleLowerCase();
    });
    else if (extendedSettings.meridiem === 'short') s = s.replace(MERIDIEM_RE, function(m0, m1) {
        return m1.toLocaleLowerCase() + "m";
    });
    else if (extendedSettings.meridiem === 'lowercase') s = s.replace(MERIDIEM_RE, function(m0) {
        return m0.toLocaleLowerCase();
    });
    s = s.replace(MULTI_SPACE_RE, ' ');
    s = s.trim();
    return s;
}
function injectTzoStr(s, tzoStr) {
    var replaced = false;
    s = s.replace(UTC_RE, function() {
        replaced = true;
        return tzoStr;
    });
    // IE11 doesn't include UTC/GMT in the original string, so append to end
    if (!replaced) s += " " + tzoStr;
    return s;
}
function formatWeekNumber(num, weekText, weekTextLong, locale, display) {
    var parts = [];
    if (display === 'long') parts.push(weekTextLong);
    else if (display === 'short' || display === 'narrow') parts.push(weekText);
    if (display === 'long' || display === 'short') parts.push(' ');
    parts.push(locale.simpleNumberFormat.format(num));
    if (locale.options.direction === 'rtl') parts.reverse();
    return parts.join('');
}
// Range Formatting Utils
// 0 = exactly the same
// 1 = different by time
// and bigger
function computeMarkerDiffSeverity(d0, d1, ca) {
    if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) return 5;
    if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) return 4;
    if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) return 2;
    if (timeAsMs(d0) !== timeAsMs(d1)) return 1;
    return 0;
}
function computePartialFormattingOptions(options, biggestUnit) {
    var partialOptions = {
    };
    for(var name_2 in options)if (!(name_2 in STANDARD_DATE_PROP_SEVERITIES) || STANDARD_DATE_PROP_SEVERITIES[name_2] <= biggestUnit) partialOptions[name_2] = options[name_2];
    return partialOptions;
}
function findCommonInsertion(full0, partial0, full1, partial1) {
    var i0 = 0;
    while(i0 < full0.length){
        var found0 = full0.indexOf(partial0, i0);
        if (found0 === -1) break;
        var before0 = full0.substr(0, found0);
        i0 = found0 + partial0.length;
        var after0 = full0.substr(i0);
        var i1 = 0;
        while(i1 < full1.length){
            var found1 = full1.indexOf(partial1, i1);
            if (found1 === -1) break;
            var before1 = full1.substr(0, found1);
            i1 = found1 + partial1.length;
            var after1 = full1.substr(i1);
            if (before0 === before1 && after0 === after1) return {
                before: before0,
                after: after0
            };
        }
    }
    return null;
}
function expandZonedMarker(dateInfo, calendarSystem) {
    var a = calendarSystem.markerToArray(dateInfo.marker);
    return {
        marker: dateInfo.marker,
        timeZoneOffset: dateInfo.timeZoneOffset,
        array: a,
        year: a[0],
        month: a[1],
        day: a[2],
        hour: a[3],
        minute: a[4],
        second: a[5],
        millisecond: a[6]
    };
}
function createVerboseFormattingArg(start, end, context, betterDefaultSeparator) {
    var startInfo = expandZonedMarker(start, context.calendarSystem);
    var endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
    return {
        date: startInfo,
        start: startInfo,
        end: endInfo,
        timeZone: context.timeZone,
        localeCodes: context.locale.codes,
        defaultSeparator: betterDefaultSeparator || context.defaultSeparator
    };
}
/*
TODO: fix the terminology of "formatter" vs "formatting func"
*/ /*
At the time of instantiation, this object does not know which cmd-formatting system it will use.
It receives this at the time of formatting, as a setting.
*/ var CmdFormatter = function() {
    function CmdFormatter1(cmdStr) {
        this.cmdStr = cmdStr;
    }
    CmdFormatter1.prototype.format = function(date, context, betterDefaultSeparator) {
        return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
    };
    CmdFormatter1.prototype.formatRange = function(start, end, context, betterDefaultSeparator) {
        return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
    };
    return CmdFormatter1;
}();
var FuncFormatter = function() {
    function FuncFormatter1(func) {
        this.func = func;
    }
    FuncFormatter1.prototype.format = function(date, context, betterDefaultSeparator) {
        return this.func(createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
    };
    FuncFormatter1.prototype.formatRange = function(start, end, context, betterDefaultSeparator) {
        return this.func(createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
    };
    return FuncFormatter1;
}();
function createFormatter(input) {
    if (typeof input === 'object' && input) return new NativeFormatter(input);
    if (typeof input === 'string') return new CmdFormatter(input);
    if (typeof input === 'function') return new FuncFormatter(input);
    return null;
}
// base options
// ------------
var BASE_OPTION_REFINERS = {
    navLinkDayClick: identity,
    navLinkWeekClick: identity,
    duration: createDuration,
    bootstrapFontAwesome: identity,
    buttonIcons: identity,
    customButtons: identity,
    defaultAllDayEventDuration: createDuration,
    defaultTimedEventDuration: createDuration,
    nextDayThreshold: createDuration,
    scrollTime: createDuration,
    scrollTimeReset: Boolean,
    slotMinTime: createDuration,
    slotMaxTime: createDuration,
    dayPopoverFormat: createFormatter,
    slotDuration: createDuration,
    snapDuration: createDuration,
    headerToolbar: identity,
    footerToolbar: identity,
    defaultRangeSeparator: String,
    titleRangeSeparator: String,
    forceEventDuration: Boolean,
    dayHeaders: Boolean,
    dayHeaderFormat: createFormatter,
    dayHeaderClassNames: identity,
    dayHeaderContent: identity,
    dayHeaderDidMount: identity,
    dayHeaderWillUnmount: identity,
    dayCellClassNames: identity,
    dayCellContent: identity,
    dayCellDidMount: identity,
    dayCellWillUnmount: identity,
    initialView: String,
    aspectRatio: Number,
    weekends: Boolean,
    weekNumberCalculation: identity,
    weekNumbers: Boolean,
    weekNumberClassNames: identity,
    weekNumberContent: identity,
    weekNumberDidMount: identity,
    weekNumberWillUnmount: identity,
    editable: Boolean,
    viewClassNames: identity,
    viewDidMount: identity,
    viewWillUnmount: identity,
    nowIndicator: Boolean,
    nowIndicatorClassNames: identity,
    nowIndicatorContent: identity,
    nowIndicatorDidMount: identity,
    nowIndicatorWillUnmount: identity,
    showNonCurrentDates: Boolean,
    lazyFetching: Boolean,
    startParam: String,
    endParam: String,
    timeZoneParam: String,
    timeZone: String,
    locales: identity,
    locale: identity,
    themeSystem: String,
    dragRevertDuration: Number,
    dragScroll: Boolean,
    allDayMaintainDuration: Boolean,
    unselectAuto: Boolean,
    dropAccept: identity,
    eventOrder: parseFieldSpecs,
    eventOrderStrict: Boolean,
    handleWindowResize: Boolean,
    windowResizeDelay: Number,
    longPressDelay: Number,
    eventDragMinDistance: Number,
    expandRows: Boolean,
    height: identity,
    contentHeight: identity,
    direction: String,
    weekNumberFormat: createFormatter,
    eventResizableFromStart: Boolean,
    displayEventTime: Boolean,
    displayEventEnd: Boolean,
    weekText: String,
    weekTextLong: String,
    progressiveEventRendering: Boolean,
    businessHours: identity,
    initialDate: identity,
    now: identity,
    eventDataTransform: identity,
    stickyHeaderDates: identity,
    stickyFooterScrollbar: identity,
    viewHeight: identity,
    defaultAllDay: Boolean,
    eventSourceFailure: identity,
    eventSourceSuccess: identity,
    eventDisplay: String,
    eventStartEditable: Boolean,
    eventDurationEditable: Boolean,
    eventOverlap: identity,
    eventConstraint: identity,
    eventAllow: identity,
    eventBackgroundColor: String,
    eventBorderColor: String,
    eventTextColor: String,
    eventColor: String,
    eventClassNames: identity,
    eventContent: identity,
    eventDidMount: identity,
    eventWillUnmount: identity,
    selectConstraint: identity,
    selectOverlap: identity,
    selectAllow: identity,
    droppable: Boolean,
    unselectCancel: String,
    slotLabelFormat: identity,
    slotLaneClassNames: identity,
    slotLaneContent: identity,
    slotLaneDidMount: identity,
    slotLaneWillUnmount: identity,
    slotLabelClassNames: identity,
    slotLabelContent: identity,
    slotLabelDidMount: identity,
    slotLabelWillUnmount: identity,
    dayMaxEvents: identity,
    dayMaxEventRows: identity,
    dayMinWidth: Number,
    slotLabelInterval: createDuration,
    allDayText: String,
    allDayClassNames: identity,
    allDayContent: identity,
    allDayDidMount: identity,
    allDayWillUnmount: identity,
    slotMinWidth: Number,
    navLinks: Boolean,
    eventTimeFormat: createFormatter,
    rerenderDelay: Number,
    moreLinkText: identity,
    moreLinkHint: identity,
    selectMinDistance: Number,
    selectable: Boolean,
    selectLongPressDelay: Number,
    eventLongPressDelay: Number,
    selectMirror: Boolean,
    eventMaxStack: Number,
    eventMinHeight: Number,
    eventMinWidth: Number,
    eventShortHeight: Number,
    slotEventOverlap: Boolean,
    plugins: identity,
    firstDay: Number,
    dayCount: Number,
    dateAlignment: String,
    dateIncrement: createDuration,
    hiddenDays: identity,
    monthMode: Boolean,
    fixedWeekCount: Boolean,
    validRange: identity,
    visibleRange: identity,
    titleFormat: identity,
    eventInteractive: Boolean,
    // only used by list-view, but languages define the value, so we need it in base options
    noEventsText: String,
    viewHint: identity,
    navLinkHint: identity,
    closeHint: String,
    timeHint: String,
    eventHint: String,
    moreLinkClick: identity,
    moreLinkClassNames: identity,
    moreLinkContent: identity,
    moreLinkDidMount: identity,
    moreLinkWillUnmount: identity
};
// do NOT give a type here. need `typeof BASE_OPTION_DEFAULTS` to give real results.
// raw values.
var BASE_OPTION_DEFAULTS = {
    eventDisplay: 'auto',
    defaultRangeSeparator: ' - ',
    titleRangeSeparator: ' \u2013 ',
    defaultTimedEventDuration: '01:00:00',
    defaultAllDayEventDuration: {
        day: 1
    },
    forceEventDuration: false,
    nextDayThreshold: '00:00:00',
    dayHeaders: true,
    initialView: '',
    aspectRatio: 1.35,
    headerToolbar: {
        start: 'title',
        center: '',
        end: 'today prev,next'
    },
    weekends: true,
    weekNumbers: false,
    weekNumberCalculation: 'local',
    editable: false,
    nowIndicator: false,
    scrollTime: '06:00:00',
    scrollTimeReset: true,
    slotMinTime: '00:00:00',
    slotMaxTime: '24:00:00',
    showNonCurrentDates: true,
    lazyFetching: true,
    startParam: 'start',
    endParam: 'end',
    timeZoneParam: 'timeZone',
    timeZone: 'local',
    locales: [],
    locale: '',
    themeSystem: 'standard',
    dragRevertDuration: 500,
    dragScroll: true,
    allDayMaintainDuration: false,
    unselectAuto: true,
    dropAccept: '*',
    eventOrder: 'start,-duration,allDay,title',
    dayPopoverFormat: {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    },
    handleWindowResize: true,
    windowResizeDelay: 100,
    longPressDelay: 1000,
    eventDragMinDistance: 5,
    expandRows: false,
    navLinks: false,
    selectable: false,
    eventMinHeight: 15,
    eventMinWidth: 30,
    eventShortHeight: 30
};
// calendar listeners
// ------------------
var CALENDAR_LISTENER_REFINERS = {
    datesSet: identity,
    eventsSet: identity,
    eventAdd: identity,
    eventChange: identity,
    eventRemove: identity,
    windowResize: identity,
    eventClick: identity,
    eventMouseEnter: identity,
    eventMouseLeave: identity,
    select: identity,
    unselect: identity,
    loading: identity,
    // internal
    _unmount: identity,
    _beforeprint: identity,
    _afterprint: identity,
    _noEventDrop: identity,
    _noEventResize: identity,
    _resize: identity,
    _scrollRequest: identity
};
// calendar-specific options
// -------------------------
var CALENDAR_OPTION_REFINERS = {
    buttonText: identity,
    buttonHints: identity,
    views: identity,
    plugins: identity,
    initialEvents: identity,
    events: identity,
    eventSources: identity
};
var COMPLEX_OPTION_COMPARATORS = {
    headerToolbar: isBoolComplexEqual,
    footerToolbar: isBoolComplexEqual,
    buttonText: isBoolComplexEqual,
    buttonHints: isBoolComplexEqual,
    buttonIcons: isBoolComplexEqual
};
function isBoolComplexEqual(a, b) {
    if (typeof a === 'object' && typeof b === 'object' && a && b) return isPropsEqual(a, b);
    return a === b;
}
// view-specific options
// ---------------------
var VIEW_OPTION_REFINERS = {
    type: String,
    component: identity,
    buttonText: String,
    buttonTextKey: String,
    dateProfileGeneratorClass: identity,
    usesMinMaxTime: Boolean,
    classNames: identity,
    content: identity,
    didMount: identity,
    willUnmount: identity
};
// util funcs
// ----------------------------------------------------------------------------------------------------
function mergeRawOptions(optionSets) {
    return mergeProps(optionSets, COMPLEX_OPTION_COMPARATORS);
}
function refineProps(input, refiners) {
    var refined = {
    };
    var extra = {
    };
    for(var propName in refiners)if (propName in input) refined[propName] = refiners[propName](input[propName]);
    for(var propName in input)if (!(propName in refiners)) extra[propName] = input[propName];
    return {
        refined: refined,
        extra: extra
    };
}
function identity(raw) {
    return raw;
}
function parseEvents(rawEvents, eventSource, context, allowOpenRange) {
    var eventStore = createEmptyEventStore();
    var eventRefiners = buildEventRefiners(context);
    for(var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++){
        var rawEvent = rawEvents_1[_i];
        var tuple = parseEvent(rawEvent, eventSource, context, allowOpenRange, eventRefiners);
        if (tuple) eventTupleToStore(tuple, eventStore);
    }
    return eventStore;
}
function eventTupleToStore(tuple, eventStore) {
    if (eventStore === void 0) eventStore = createEmptyEventStore();
    eventStore.defs[tuple.def.defId] = tuple.def;
    if (tuple.instance) eventStore.instances[tuple.instance.instanceId] = tuple.instance;
    return eventStore;
}
// retrieves events that have the same groupId as the instance specified by `instanceId`
// or they are the same as the instance.
// why might instanceId not be in the store? an event from another calendar?
function getRelevantEvents(eventStore, instanceId) {
    var instance = eventStore.instances[instanceId];
    if (instance) {
        var def_1 = eventStore.defs[instance.defId];
        // get events/instances with same group
        var newStore = filterEventStoreDefs(eventStore, function(lookDef) {
            return isEventDefsGrouped(def_1, lookDef);
        });
        // add the original
        // TODO: wish we could use eventTupleToStore or something like it
        newStore.defs[def_1.defId] = def_1;
        newStore.instances[instance.instanceId] = instance;
        return newStore;
    }
    return createEmptyEventStore();
}
function isEventDefsGrouped(def0, def1) {
    return Boolean(def0.groupId && def0.groupId === def1.groupId);
}
function createEmptyEventStore() {
    return {
        defs: {
        },
        instances: {
        }
    };
}
function mergeEventStores(store0, store1) {
    return {
        defs: _tslib.__assign(_tslib.__assign({
        }, store0.defs), store1.defs),
        instances: _tslib.__assign(_tslib.__assign({
        }, store0.instances), store1.instances)
    };
}
function filterEventStoreDefs(eventStore, filterFunc) {
    var defs = filterHash(eventStore.defs, filterFunc);
    var instances = filterHash(eventStore.instances, function(instance) {
        return defs[instance.defId] // still exists?
        ;
    });
    return {
        defs: defs,
        instances: instances
    };
}
function excludeSubEventStore(master, sub) {
    var defs = master.defs, instances = master.instances;
    var filteredDefs = {
    };
    var filteredInstances = {
    };
    for(var defId in defs)if (!sub.defs[defId]) filteredDefs[defId] = defs[defId];
    for(var instanceId in instances)if (!sub.instances[instanceId] && filteredDefs[instances[instanceId].defId] // def wasn't filtered away
    ) filteredInstances[instanceId] = instances[instanceId];
    return {
        defs: filteredDefs,
        instances: filteredInstances
    };
}
function normalizeConstraint(input, context) {
    if (Array.isArray(input)) return parseEvents(input, null, context, true); // allowOpenRange=true
    if (typeof input === 'object' && input) return parseEvents([
        input
    ], null, context, true); // allowOpenRange=true
    if (input != null) return String(input);
    return null;
}
function parseClassNames(raw) {
    if (Array.isArray(raw)) return raw;
    if (typeof raw === 'string') return raw.split(/\s+/);
    return [];
}
// TODO: better called "EventSettings" or "EventConfig"
// TODO: move this file into structs
// TODO: separate constraint/overlap/allow, because selection uses only that, not other props
var EVENT_UI_REFINERS = {
    display: String,
    editable: Boolean,
    startEditable: Boolean,
    durationEditable: Boolean,
    constraint: identity,
    overlap: identity,
    allow: identity,
    className: parseClassNames,
    classNames: parseClassNames,
    color: String,
    backgroundColor: String,
    borderColor: String,
    textColor: String
};
var EMPTY_EVENT_UI = {
    display: null,
    startEditable: null,
    durationEditable: null,
    constraints: [],
    overlap: null,
    allows: [],
    backgroundColor: '',
    borderColor: '',
    textColor: '',
    classNames: []
};
function createEventUi(refined, context) {
    var constraint = normalizeConstraint(refined.constraint, context);
    return {
        display: refined.display || null,
        startEditable: refined.startEditable != null ? refined.startEditable : refined.editable,
        durationEditable: refined.durationEditable != null ? refined.durationEditable : refined.editable,
        constraints: constraint != null ? [
            constraint
        ] : [],
        overlap: refined.overlap != null ? refined.overlap : null,
        allows: refined.allow != null ? [
            refined.allow
        ] : [],
        backgroundColor: refined.backgroundColor || refined.color || '',
        borderColor: refined.borderColor || refined.color || '',
        textColor: refined.textColor || '',
        classNames: (refined.className || []).concat(refined.classNames || [])
    };
}
// TODO: prevent against problems with <2 args!
function combineEventUis(uis) {
    return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
}
function combineTwoEventUis(item0, item1) {
    return {
        display: item1.display != null ? item1.display : item0.display,
        startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
        durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
        constraints: item0.constraints.concat(item1.constraints),
        overlap: typeof item1.overlap === 'boolean' ? item1.overlap : item0.overlap,
        allows: item0.allows.concat(item1.allows),
        backgroundColor: item1.backgroundColor || item0.backgroundColor,
        borderColor: item1.borderColor || item0.borderColor,
        textColor: item1.textColor || item0.textColor,
        classNames: item0.classNames.concat(item1.classNames)
    };
}
var EVENT_NON_DATE_REFINERS = {
    id: String,
    groupId: String,
    title: String,
    url: String,
    interactive: Boolean
};
var EVENT_DATE_REFINERS = {
    start: identity,
    end: identity,
    date: identity,
    allDay: Boolean
};
var EVENT_REFINERS = _tslib.__assign(_tslib.__assign(_tslib.__assign({
}, EVENT_NON_DATE_REFINERS), EVENT_DATE_REFINERS), {
    extendedProps: identity
});
function parseEvent(raw, eventSource, context, allowOpenRange, refiners) {
    if (refiners === void 0) refiners = buildEventRefiners(context);
    var _a = refineEventDef(raw, context, refiners), refined = _a.refined, extra = _a.extra;
    var defaultAllDay = computeIsDefaultAllDay(eventSource, context);
    var recurringRes = parseRecurring(refined, defaultAllDay, context.dateEnv, context.pluginHooks.recurringTypes);
    if (recurringRes) {
        var def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', recurringRes.allDay, Boolean(recurringRes.duration), context);
        def.recurringDef = {
            typeId: recurringRes.typeId,
            typeData: recurringRes.typeData,
            duration: recurringRes.duration
        };
        return {
            def: def,
            instance: null
        };
    }
    var singleRes = parseSingle(refined, defaultAllDay, context, allowOpenRange);
    if (singleRes) {
        var def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', singleRes.allDay, singleRes.hasEnd, context);
        var instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
        return {
            def: def,
            instance: instance
        };
    }
    return null;
}
function refineEventDef(raw, context, refiners) {
    if (refiners === void 0) refiners = buildEventRefiners(context);
    return refineProps(raw, refiners);
}
function buildEventRefiners(context) {
    return _tslib.__assign(_tslib.__assign(_tslib.__assign({
    }, EVENT_UI_REFINERS), EVENT_REFINERS), context.pluginHooks.eventRefiners);
}
/*
Will NOT populate extendedProps with the leftover properties.
Will NOT populate date-related props.
*/ function parseEventDef(refined, extra, sourceId, allDay, hasEnd, context) {
    var def = {
        title: refined.title || '',
        groupId: refined.groupId || '',
        publicId: refined.id || '',
        url: refined.url || '',
        recurringDef: null,
        defId: guid(),
        sourceId: sourceId,
        allDay: allDay,
        hasEnd: hasEnd,
        interactive: refined.interactive,
        ui: createEventUi(refined, context),
        extendedProps: _tslib.__assign(_tslib.__assign({
        }, refined.extendedProps || {
        }), extra)
    };
    for(var _i = 0, _a = context.pluginHooks.eventDefMemberAdders; _i < _a.length; _i++){
        var memberAdder = _a[_i];
        _tslib.__assign(def, memberAdder(refined));
    }
    // help out EventApi from having user modify props
    Object.freeze(def.ui.classNames);
    Object.freeze(def.extendedProps);
    return def;
}
function parseSingle(refined, defaultAllDay, context, allowOpenRange) {
    var allDay = refined.allDay;
    var startMeta;
    var startMarker = null;
    var hasEnd = false;
    var endMeta;
    var endMarker = null;
    var startInput = refined.start != null ? refined.start : refined.date;
    startMeta = context.dateEnv.createMarkerMeta(startInput);
    if (startMeta) startMarker = startMeta.marker;
    else if (!allowOpenRange) return null;
    if (refined.end != null) endMeta = context.dateEnv.createMarkerMeta(refined.end);
    if (allDay == null) {
        if (defaultAllDay != null) allDay = defaultAllDay;
        else // fall back to the date props LAST
        allDay = (!startMeta || startMeta.isTimeUnspecified) && (!endMeta || endMeta.isTimeUnspecified);
    }
    if (allDay && startMarker) startMarker = startOfDay(startMarker);
    if (endMeta) {
        endMarker = endMeta.marker;
        if (allDay) endMarker = startOfDay(endMarker);
        if (startMarker && endMarker <= startMarker) endMarker = null;
    }
    if (endMarker) hasEnd = true;
    else if (!allowOpenRange) {
        hasEnd = context.options.forceEventDuration || false;
        endMarker = context.dateEnv.add(startMarker, allDay ? context.options.defaultAllDayEventDuration : context.options.defaultTimedEventDuration);
    }
    return {
        allDay: allDay,
        hasEnd: hasEnd,
        range: {
            start: startMarker,
            end: endMarker
        },
        forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
        forcedEndTzo: endMeta ? endMeta.forcedTzo : null
    };
}
function computeIsDefaultAllDay(eventSource, context) {
    var res = null;
    if (eventSource) res = eventSource.defaultAllDay;
    if (res == null) res = context.options.defaultAllDay;
    return res;
}
/* Date stuff that doesn't belong in datelib core
----------------------------------------------------------------------------------------------------------------------*/ // given a timed range, computes an all-day range that has the same exact duration,
// but whose start time is aligned with the start of the day.
function computeAlignedDayRange(timedRange) {
    var dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
    var start = startOfDay(timedRange.start);
    var end = addDays(start, dayCnt);
    return {
        start: start,
        end: end
    };
}
// given a timed range, computes an all-day range based on how for the end date bleeds into the next day
// TODO: give nextDayThreshold a default arg
function computeVisibleDayRange(timedRange, nextDayThreshold) {
    if (nextDayThreshold === void 0) nextDayThreshold = createDuration(0);
    var startDay = null;
    var endDay = null;
    if (timedRange.end) {
        endDay = startOfDay(timedRange.end);
        var endTimeMS = timedRange.end.valueOf() - endDay.valueOf(); // # of milliseconds into `endDay`
        // If the end time is actually inclusively part of the next day and is equal to or
        // beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
        // Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
        if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) endDay = addDays(endDay, 1);
    }
    if (timedRange.start) {
        startDay = startOfDay(timedRange.start); // the beginning of the day the range starts
        // If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.
        if (endDay && endDay <= startDay) endDay = addDays(startDay, 1);
    }
    return {
        start: startDay,
        end: endDay
    };
}
// spans from one day into another?
function isMultiDayRange(range) {
    var visibleRange = computeVisibleDayRange(range);
    return diffDays(visibleRange.start, visibleRange.end) > 1;
}
function diffDates(date0, date1, dateEnv, largeUnit) {
    if (largeUnit === 'year') return createDuration(dateEnv.diffWholeYears(date0, date1), 'year');
    if (largeUnit === 'month') return createDuration(dateEnv.diffWholeMonths(date0, date1), 'month');
    return diffDayAndTime(date0, date1); // returns a duration
}
function parseRange(input, dateEnv) {
    var start = null;
    var end = null;
    if (input.start) start = dateEnv.createMarker(input.start);
    if (input.end) end = dateEnv.createMarker(input.end);
    if (!start && !end) return null;
    if (start && end && end < start) return null;
    return {
        start: start,
        end: end
    };
}
// SIDE-EFFECT: will mutate ranges.
// Will return a new array result.
function invertRanges(ranges, constraintRange) {
    var invertedRanges = [];
    var start = constraintRange.start; // the end of the previous range. the start of the new range
    var i;
    var dateRange;
    // ranges need to be in order. required for our date-walking algorithm
    ranges.sort(compareRanges);
    for(i = 0; i < ranges.length; i += 1){
        dateRange = ranges[i];
        // add the span of time before the event (if there is any)
        if (dateRange.start > start) invertedRanges.push({
            start: start,
            end: dateRange.start
        });
        if (dateRange.end > start) start = dateRange.end;
    }
    // add the span of time after the last event (if there is any)
    if (start < constraintRange.end) invertedRanges.push({
        start: start,
        end: constraintRange.end
    });
    return invertedRanges;
}
function compareRanges(range0, range1) {
    return range0.start.valueOf() - range1.start.valueOf(); // earlier ranges go first
}
function intersectRanges(range0, range1) {
    var start = range0.start, end = range0.end;
    var newRange = null;
    if (range1.start !== null) {
        if (start === null) start = range1.start;
        else start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
    }
    if (range1.end != null) {
        if (end === null) end = range1.end;
        else end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
    }
    if (start === null || end === null || start < end) newRange = {
        start: start,
        end: end
    };
    return newRange;
}
function rangesEqual(range0, range1) {
    return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) && (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
}
function rangesIntersect(range0, range1) {
    return (range0.end === null || range1.start === null || range0.end > range1.start) && (range0.start === null || range1.end === null || range0.start < range1.end);
}
function rangeContainsRange(outerRange, innerRange) {
    return (outerRange.start === null || innerRange.start !== null && innerRange.start >= outerRange.start) && (outerRange.end === null || innerRange.end !== null && innerRange.end <= outerRange.end);
}
function rangeContainsMarker(range, date) {
    return (range.start === null || date >= range.start) && (range.end === null || date < range.end);
}
// If the given date is not within the given range, move it inside.
// (If it's past the end, make it one millisecond before the end).
function constrainMarkerToRange(date, range) {
    if (range.start != null && date < range.start) return range.start;
    if (range.end != null && date >= range.end) return new Date(range.end.valueOf() - 1);
    return date;
}
/*
Specifying nextDayThreshold signals that all-day ranges should be sliced.
*/ function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
    var inverseBgByGroupId = {
    };
    var inverseBgByDefId = {
    };
    var defByGroupId = {
    };
    var bgRanges = [];
    var fgRanges = [];
    var eventUis = compileEventUis(eventStore.defs, eventUiBases);
    for(var defId in eventStore.defs){
        var def = eventStore.defs[defId];
        var ui = eventUis[def.defId];
        if (ui.display === 'inverse-background') {
            if (def.groupId) {
                inverseBgByGroupId[def.groupId] = [];
                if (!defByGroupId[def.groupId]) defByGroupId[def.groupId] = def;
            } else inverseBgByDefId[defId] = [];
        }
    }
    for(var instanceId in eventStore.instances){
        var instance = eventStore.instances[instanceId];
        var def = eventStore.defs[instance.defId];
        var ui = eventUis[def.defId];
        var origRange = instance.range;
        var normalRange = !def.allDay && nextDayThreshold ? computeVisibleDayRange(origRange, nextDayThreshold) : origRange;
        var slicedRange = intersectRanges(normalRange, framingRange);
        if (slicedRange) {
            if (ui.display === 'inverse-background') {
                if (def.groupId) inverseBgByGroupId[def.groupId].push(slicedRange);
                else inverseBgByDefId[instance.defId].push(slicedRange);
            } else if (ui.display !== 'none') (ui.display === 'background' ? bgRanges : fgRanges).push({
                def: def,
                ui: ui,
                instance: instance,
                range: slicedRange,
                isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
                isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf()
            });
        }
    }
    for(var groupId in inverseBgByGroupId){
        var ranges = inverseBgByGroupId[groupId];
        var invertedRanges = invertRanges(ranges, framingRange);
        for(var _i = 0, invertedRanges_1 = invertedRanges; _i < invertedRanges_1.length; _i++){
            var invertedRange = invertedRanges_1[_i];
            var def = defByGroupId[groupId];
            var ui = eventUis[def.defId];
            bgRanges.push({
                def: def,
                ui: ui,
                instance: null,
                range: invertedRange,
                isStart: false,
                isEnd: false
            });
        }
    }
    for(var defId in inverseBgByDefId){
        var ranges = inverseBgByDefId[defId];
        var invertedRanges = invertRanges(ranges, framingRange);
        for(var _a = 0, invertedRanges_2 = invertedRanges; _a < invertedRanges_2.length; _a++){
            var invertedRange = invertedRanges_2[_a];
            bgRanges.push({
                def: eventStore.defs[defId],
                ui: eventUis[defId],
                instance: null,
                range: invertedRange,
                isStart: false,
                isEnd: false
            });
        }
    }
    return {
        bg: bgRanges,
        fg: fgRanges
    };
}
function hasBgRendering(def) {
    return def.ui.display === 'background' || def.ui.display === 'inverse-background';
}
function setElSeg(el, seg) {
    el.fcSeg = seg;
}
function getElSeg(el) {
    return el.fcSeg || el.parentNode.fcSeg || null;
}
// event ui computation
function compileEventUis(eventDefs, eventUiBases) {
    return mapHash(eventDefs, function(eventDef) {
        return compileEventUi(eventDef, eventUiBases);
    });
}
function compileEventUi(eventDef, eventUiBases) {
    var uis = [];
    if (eventUiBases['']) uis.push(eventUiBases['']);
    if (eventUiBases[eventDef.defId]) uis.push(eventUiBases[eventDef.defId]);
    uis.push(eventDef.ui);
    return combineEventUis(uis);
}
function sortEventSegs(segs, eventOrderSpecs) {
    var objs = segs.map(buildSegCompareObj);
    objs.sort(function(obj0, obj1) {
        return compareByFieldSpecs(obj0, obj1, eventOrderSpecs);
    });
    return objs.map(function(c) {
        return c._seg;
    });
}
// returns a object with all primitive props that can be compared
function buildSegCompareObj(seg) {
    var eventRange = seg.eventRange;
    var eventDef = eventRange.def;
    var range = eventRange.instance ? eventRange.instance.range : eventRange.range;
    var start = range.start ? range.start.valueOf() : 0; // TODO: better support for open-range events
    var end = range.end ? range.end.valueOf() : 0; // "
    return _tslib.__assign(_tslib.__assign(_tslib.__assign({
    }, eventDef.extendedProps), eventDef), {
        id: eventDef.publicId,
        start: start,
        end: end,
        duration: end - start,
        allDay: Number(eventDef.allDay),
        _seg: seg
    });
}
function computeSegDraggable(seg, context) {
    var pluginHooks = context.pluginHooks;
    var transformers = pluginHooks.isDraggableTransformers;
    var _a = seg.eventRange, def = _a.def, ui = _a.ui;
    var val = ui.startEditable;
    for(var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++){
        var transformer = transformers_1[_i];
        val = transformer(val, def, ui, context);
    }
    return val;
}
function computeSegStartResizable(seg, context) {
    return seg.isStart && seg.eventRange.ui.durationEditable && context.options.eventResizableFromStart;
}
function computeSegEndResizable(seg, context) {
    return seg.isEnd && seg.eventRange.ui.durationEditable;
}
function buildSegTimeText(seg, timeFormat, context, defaultDisplayEventTime, defaultDisplayEventEnd, startOverride, endOverride) {
    var dateEnv = context.dateEnv, options = context.options;
    var displayEventTime = options.displayEventTime, displayEventEnd = options.displayEventEnd;
    var eventDef = seg.eventRange.def;
    var eventInstance = seg.eventRange.instance;
    if (displayEventTime == null) displayEventTime = defaultDisplayEventTime !== false;
    if (displayEventEnd == null) displayEventEnd = defaultDisplayEventEnd !== false;
    var wholeEventStart = eventInstance.range.start;
    var wholeEventEnd = eventInstance.range.end;
    var segStart = startOverride || seg.start || seg.eventRange.range.start;
    var segEnd = endOverride || seg.end || seg.eventRange.range.end;
    var isStartDay = startOfDay(wholeEventStart).valueOf() === startOfDay(segStart).valueOf();
    var isEndDay = startOfDay(addMs(wholeEventEnd, -1)).valueOf() === startOfDay(addMs(segEnd, -1)).valueOf();
    if (displayEventTime && !eventDef.allDay && (isStartDay || isEndDay)) {
        segStart = isStartDay ? wholeEventStart : segStart;
        segEnd = isEndDay ? wholeEventEnd : segEnd;
        if (displayEventEnd && eventDef.hasEnd) return dateEnv.formatRange(segStart, segEnd, timeFormat, {
            forcedStartTzo: startOverride ? null : eventInstance.forcedStartTzo,
            forcedEndTzo: endOverride ? null : eventInstance.forcedEndTzo
        });
        return dateEnv.format(segStart, timeFormat, {
            forcedTzo: startOverride ? null : eventInstance.forcedStartTzo
        });
    }
    return '';
}
function getSegMeta(seg, todayRange, nowDate) {
    var segRange = seg.eventRange.range;
    return {
        isPast: segRange.end < (nowDate || todayRange.start),
        isFuture: segRange.start >= (nowDate || todayRange.end),
        isToday: todayRange && rangeContainsMarker(todayRange, segRange.start)
    };
}
function getEventClassNames(props) {
    var classNames = [
        'fc-event'
    ];
    if (props.isMirror) classNames.push('fc-event-mirror');
    if (props.isDraggable) classNames.push('fc-event-draggable');
    if (props.isStartResizable || props.isEndResizable) classNames.push('fc-event-resizable');
    if (props.isDragging) classNames.push('fc-event-dragging');
    if (props.isResizing) classNames.push('fc-event-resizing');
    if (props.isSelected) classNames.push('fc-event-selected');
    if (props.isStart) classNames.push('fc-event-start');
    if (props.isEnd) classNames.push('fc-event-end');
    if (props.isPast) classNames.push('fc-event-past');
    if (props.isToday) classNames.push('fc-event-today');
    if (props.isFuture) classNames.push('fc-event-future');
    return classNames;
}
function buildEventRangeKey(eventRange) {
    return eventRange.instance ? eventRange.instance.instanceId : eventRange.def.defId + ":" + eventRange.range.start.toISOString();
// inverse-background events don't have specific instances. TODO: better solution
}
function getSegAnchorAttrs(seg, context) {
    var _a = seg.eventRange, def = _a.def, instance = _a.instance;
    var url = def.url;
    if (url) return {
        href: url
    };
    var emitter = context.emitter, options = context.options;
    var eventInteractive = options.eventInteractive;
    if (eventInteractive == null) {
        eventInteractive = def.interactive;
        if (eventInteractive == null) eventInteractive = Boolean(emitter.hasHandlers('eventClick'));
    }
    // mock what happens in EventClicking
    if (eventInteractive) // only attach keyboard-related handlers because click handler is already done in EventClicking
    return createAriaKeyboardAttrs(function(ev) {
        emitter.trigger('eventClick', {
            el: ev.target,
            event: new EventApi(context, def, instance),
            jsEvent: ev,
            view: context.viewApi
        });
    });
    return {
    };
}
var STANDARD_PROPS = {
    start: identity,
    end: identity,
    allDay: Boolean
};
function parseDateSpan(raw, dateEnv, defaultDuration) {
    var span = parseOpenDateSpan(raw, dateEnv);
    var range = span.range;
    if (!range.start) return null;
    if (!range.end) {
        if (defaultDuration == null) return null;
        range.end = dateEnv.add(range.start, defaultDuration);
    }
    return span;
}
/*
TODO: somehow combine with parseRange?
Will return null if the start/end props were present but parsed invalidly.
*/ function parseOpenDateSpan(raw, dateEnv) {
    var _a = refineProps(raw, STANDARD_PROPS), standardProps = _a.refined, extra = _a.extra;
    var startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
    var endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
    var allDay = standardProps.allDay;
    if (allDay == null) allDay = startMeta && startMeta.isTimeUnspecified && (!endMeta || endMeta.isTimeUnspecified);
    return _tslib.__assign({
        range: {
            start: startMeta ? startMeta.marker : null,
            end: endMeta ? endMeta.marker : null
        },
        allDay: allDay
    }, extra);
}
function isDateSpansEqual(span0, span1) {
    return rangesEqual(span0.range, span1.range) && span0.allDay === span1.allDay && isSpanPropsEqual(span0, span1);
}
// the NON-DATE-RELATED props
function isSpanPropsEqual(span0, span1) {
    for(var propName in span1)if (propName !== 'range' && propName !== 'allDay') {
        if (span0[propName] !== span1[propName]) return false;
    }
    // are there any props that span0 has that span1 DOESN'T have?
    // both have range/allDay, so no need to special-case.
    for(var propName in span0){
        if (!(propName in span1)) return false;
    }
    return true;
}
function buildDateSpanApi(span, dateEnv) {
    return _tslib.__assign(_tslib.__assign({
    }, buildRangeApi(span.range, dateEnv, span.allDay)), {
        allDay: span.allDay
    });
}
function buildRangeApiWithTimeZone(range, dateEnv, omitTime) {
    return _tslib.__assign(_tslib.__assign({
    }, buildRangeApi(range, dateEnv, omitTime)), {
        timeZone: dateEnv.timeZone
    });
}
function buildRangeApi(range, dateEnv, omitTime) {
    return {
        start: dateEnv.toDate(range.start),
        end: dateEnv.toDate(range.end),
        startStr: dateEnv.formatIso(range.start, {
            omitTime: omitTime
        }),
        endStr: dateEnv.formatIso(range.end, {
            omitTime: omitTime
        })
    };
}
function fabricateEventRange(dateSpan, eventUiBases, context) {
    var res = refineEventDef({
        editable: false
    }, context);
    var def = parseEventDef(res.refined, res.extra, '', dateSpan.allDay, true, context);
    return {
        def: def,
        ui: compileEventUi(def, eventUiBases),
        instance: createEventInstance(def.defId, dateSpan.range),
        range: dateSpan.range,
        isStart: true,
        isEnd: true
    };
}
function triggerDateSelect(selection, pev, context) {
    context.emitter.trigger('select', _tslib.__assign(_tslib.__assign({
    }, buildDateSpanApiWithContext(selection, context)), {
        jsEvent: pev ? pev.origEvent : null,
        view: context.viewApi || context.calendarApi.view
    }));
}
function triggerDateUnselect(pev, context) {
    context.emitter.trigger('unselect', {
        jsEvent: pev ? pev.origEvent : null,
        view: context.viewApi || context.calendarApi.view
    });
}
function buildDateSpanApiWithContext(dateSpan, context) {
    var props = {
    };
    for(var _i = 0, _a = context.pluginHooks.dateSpanTransforms; _i < _a.length; _i++){
        var transform = _a[_i];
        _tslib.__assign(props, transform(dateSpan, context));
    }
    _tslib.__assign(props, buildDateSpanApi(dateSpan, context.dateEnv));
    return props;
}
// Given an event's allDay status and start date, return what its fallback end date should be.
// TODO: rename to computeDefaultEventEnd
function getDefaultEventEnd(allDay, marker, context) {
    var dateEnv = context.dateEnv, options = context.options;
    var end = marker;
    if (allDay) {
        end = startOfDay(end);
        end = dateEnv.add(end, options.defaultAllDayEventDuration);
    } else end = dateEnv.add(end, options.defaultTimedEventDuration);
    return end;
}
// applies the mutation to ALL defs/instances within the event store
function applyMutationToEventStore(eventStore, eventConfigBase, mutation, context) {
    var eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
    var dest = createEmptyEventStore();
    for(var defId in eventStore.defs){
        var def = eventStore.defs[defId];
        dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, context);
    }
    for(var instanceId in eventStore.instances){
        var instance = eventStore.instances[instanceId];
        var def = dest.defs[instance.defId]; // important to grab the newly modified def
        dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, context);
    }
    return dest;
}
function applyMutationToEventDef(eventDef, eventConfig, mutation, context) {
    var standardProps = mutation.standardProps || {
    };
    // if hasEnd has not been specified, guess a good value based on deltas.
    // if duration will change, there's no way the default duration will persist,
    // and thus, we need to mark the event as having a real end
    if (standardProps.hasEnd == null && eventConfig.durationEditable && (mutation.startDelta || mutation.endDelta)) standardProps.hasEnd = true; // TODO: is this mutation okay?
    var copy = _tslib.__assign(_tslib.__assign(_tslib.__assign({
    }, eventDef), standardProps), {
        ui: _tslib.__assign(_tslib.__assign({
        }, eventDef.ui), standardProps.ui)
    });
    if (mutation.extendedProps) copy.extendedProps = _tslib.__assign(_tslib.__assign({
    }, copy.extendedProps), mutation.extendedProps);
    for(var _i = 0, _a = context.pluginHooks.eventDefMutationAppliers; _i < _a.length; _i++){
        var applier = _a[_i];
        applier(copy, mutation, context);
    }
    if (!copy.hasEnd && context.options.forceEventDuration) copy.hasEnd = true;
    return copy;
}
function applyMutationToEventInstance(eventInstance, eventDef, eventConfig, mutation, context) {
    var dateEnv = context.dateEnv;
    var forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
    var clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
    var copy = _tslib.__assign({
    }, eventInstance);
    if (forceAllDay) copy.range = computeAlignedDayRange(copy.range);
    if (mutation.datesDelta && eventConfig.startEditable) copy.range = {
        start: dateEnv.add(copy.range.start, mutation.datesDelta),
        end: dateEnv.add(copy.range.end, mutation.datesDelta)
    };
    if (mutation.startDelta && eventConfig.durationEditable) copy.range = {
        start: dateEnv.add(copy.range.start, mutation.startDelta),
        end: copy.range.end
    };
    if (mutation.endDelta && eventConfig.durationEditable) copy.range = {
        start: copy.range.start,
        end: dateEnv.add(copy.range.end, mutation.endDelta)
    };
    if (clearEnd) copy.range = {
        start: copy.range.start,
        end: getDefaultEventEnd(eventDef.allDay, copy.range.start, context)
    };
    // in case event was all-day but the supplied deltas were not
    // better util for this?
    if (eventDef.allDay) copy.range = {
        start: startOfDay(copy.range.start),
        end: startOfDay(copy.range.end)
    };
    // handle invalid durations
    if (copy.range.end < copy.range.start) copy.range.end = getDefaultEventEnd(eventDef.allDay, copy.range.start, context);
    return copy;
}
// no public types yet. when there are, export from:
// import {} from './api-type-deps'
var ViewApi = function() {
    function ViewApi1(type, getCurrentData, dateEnv) {
        this.type = type;
        this.getCurrentData = getCurrentData;
        this.dateEnv = dateEnv;
    }
    Object.defineProperty(ViewApi1.prototype, "calendar", {
        get: function() {
            return this.getCurrentData().calendarApi;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewApi1.prototype, "title", {
        get: function() {
            return this.getCurrentData().viewTitle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewApi1.prototype, "activeStart", {
        get: function() {
            return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewApi1.prototype, "activeEnd", {
        get: function() {
            return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewApi1.prototype, "currentStart", {
        get: function() {
            return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewApi1.prototype, "currentEnd", {
        get: function() {
            return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
        },
        enumerable: false,
        configurable: true
    });
    ViewApi1.prototype.getOption = function(name) {
        return this.getCurrentData().options[name]; // are the view-specific options
    };
    return ViewApi1;
}();
var EVENT_SOURCE_REFINERS = {
    id: String,
    defaultAllDay: Boolean,
    url: String,
    format: String,
    events: identity,
    eventDataTransform: identity,
    // for any network-related sources
    success: identity,
    failure: identity
};
function parseEventSource(raw, context, refiners) {
    if (refiners === void 0) refiners = buildEventSourceRefiners(context);
    var rawObj;
    if (typeof raw === 'string') rawObj = {
        url: raw
    };
    else if (typeof raw === 'function' || Array.isArray(raw)) rawObj = {
        events: raw
    };
    else if (typeof raw === 'object' && raw) rawObj = raw;
    if (rawObj) {
        var _a = refineProps(rawObj, refiners), refined = _a.refined, extra = _a.extra;
        var metaRes = buildEventSourceMeta(refined, context);
        if (metaRes) return {
            _raw: raw,
            isFetching: false,
            latestFetchId: '',
            fetchRange: null,
            defaultAllDay: refined.defaultAllDay,
            eventDataTransform: refined.eventDataTransform,
            success: refined.success,
            failure: refined.failure,
            publicId: refined.id || '',
            sourceId: guid(),
            sourceDefId: metaRes.sourceDefId,
            meta: metaRes.meta,
            ui: createEventUi(refined, context),
            extendedProps: extra
        };
    }
    return null;
}
function buildEventSourceRefiners(context) {
    return _tslib.__assign(_tslib.__assign(_tslib.__assign({
    }, EVENT_UI_REFINERS), EVENT_SOURCE_REFINERS), context.pluginHooks.eventSourceRefiners);
}
function buildEventSourceMeta(raw, context) {
    var defs = context.pluginHooks.eventSourceDefs;
    for(var i = defs.length - 1; i >= 0; i -= 1){
        var def = defs[i];
        var meta = def.parseMeta(raw);
        if (meta) return {
            sourceDefId: i,
            meta: meta
        };
    }
    return null;
}
function reduceCurrentDate(currentDate, action) {
    switch(action.type){
        case 'CHANGE_DATE':
            return action.dateMarker;
        default:
            return currentDate;
    }
}
function getInitialDate(options, dateEnv) {
    var initialDateInput = options.initialDate;
    // compute the initial ambig-timezone date
    if (initialDateInput != null) return dateEnv.createMarker(initialDateInput);
    return getNow(options.now, dateEnv); // getNow already returns unzoned
}
function getNow(nowInput, dateEnv) {
    if (typeof nowInput === 'function') nowInput = nowInput();
    if (nowInput == null) return dateEnv.createNowMarker();
    return dateEnv.createMarker(nowInput);
}
var CalendarApi = function() {
    function CalendarApi1() {
    }
    CalendarApi1.prototype.getCurrentData = function() {
        return this.currentDataManager.getCurrentData();
    };
    CalendarApi1.prototype.dispatch = function(action) {
        return this.currentDataManager.dispatch(action);
    };
    Object.defineProperty(CalendarApi1.prototype, "view", {
        get: function() {
            return this.getCurrentData().viewApi;
        } // for public API
        ,
        enumerable: false,
        configurable: true
    });
    CalendarApi1.prototype.batchRendering = function(callback) {
        callback();
    };
    CalendarApi1.prototype.updateSize = function() {
        this.trigger('_resize', true);
    };
    // Options
    // -----------------------------------------------------------------------------------------------------------------
    CalendarApi1.prototype.setOption = function(name, val) {
        this.dispatch({
            type: 'SET_OPTION',
            optionName: name,
            rawOptionValue: val
        });
    };
    CalendarApi1.prototype.getOption = function(name) {
        return this.currentDataManager.currentCalendarOptionsInput[name];
    };
    CalendarApi1.prototype.getAvailableLocaleCodes = function() {
        return Object.keys(this.getCurrentData().availableRawLocales);
    };
    // Trigger
    // -----------------------------------------------------------------------------------------------------------------
    CalendarApi1.prototype.on = function(handlerName, handler) {
        var currentDataManager = this.currentDataManager;
        if (currentDataManager.currentCalendarOptionsRefiners[handlerName]) currentDataManager.emitter.on(handlerName, handler);
        else console.warn("Unknown listener name '" + handlerName + "'");
    };
    CalendarApi1.prototype.off = function(handlerName, handler) {
        this.currentDataManager.emitter.off(handlerName, handler);
    };
    // not meant for public use
    CalendarApi1.prototype.trigger = function(handlerName) {
        var _a;
        var args = [];
        for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
        (_a = this.currentDataManager.emitter).trigger.apply(_a, _tslib.__spreadArray([
            handlerName
        ], args));
    };
    // View
    // -----------------------------------------------------------------------------------------------------------------
    CalendarApi1.prototype.changeView = function(viewType, dateOrRange) {
        var _this = this;
        this.batchRendering(function() {
            _this.unselect();
            if (dateOrRange) {
                if (dateOrRange.start && dateOrRange.end) {
                    _this.dispatch({
                        type: 'CHANGE_VIEW_TYPE',
                        viewType: viewType
                    });
                    _this.dispatch({
                        type: 'SET_OPTION',
                        optionName: 'visibleRange',
                        rawOptionValue: dateOrRange
                    });
                } else {
                    var dateEnv = _this.getCurrentData().dateEnv;
                    _this.dispatch({
                        type: 'CHANGE_VIEW_TYPE',
                        viewType: viewType,
                        dateMarker: dateEnv.createMarker(dateOrRange)
                    });
                }
            } else _this.dispatch({
                type: 'CHANGE_VIEW_TYPE',
                viewType: viewType
            });
        });
    };
    // Forces navigation to a view for the given date.
    // `viewType` can be a specific view name or a generic one like "week" or "day".
    // needs to change
    CalendarApi1.prototype.zoomTo = function(dateMarker, viewType) {
        var state = this.getCurrentData();
        var spec;
        viewType = viewType || 'day'; // day is default zoom
        spec = state.viewSpecs[viewType] || this.getUnitViewSpec(viewType);
        this.unselect();
        if (spec) this.dispatch({
            type: 'CHANGE_VIEW_TYPE',
            viewType: spec.type,
            dateMarker: dateMarker
        });
        else this.dispatch({
            type: 'CHANGE_DATE',
            dateMarker: dateMarker
        });
    };
    // Given a duration singular unit, like "week" or "day", finds a matching view spec.
    // Preference is given to views that have corresponding buttons.
    CalendarApi1.prototype.getUnitViewSpec = function(unit) {
        var _a = this.getCurrentData(), viewSpecs = _a.viewSpecs, toolbarConfig = _a.toolbarConfig;
        var viewTypes = [].concat(toolbarConfig.header ? toolbarConfig.header.viewsWithButtons : [], toolbarConfig.footer ? toolbarConfig.footer.viewsWithButtons : []);
        var i;
        var spec;
        for(var viewType in viewSpecs)viewTypes.push(viewType);
        for(i = 0; i < viewTypes.length; i += 1){
            spec = viewSpecs[viewTypes[i]];
            if (spec) {
                if (spec.singleUnit === unit) return spec;
            }
        }
        return null;
    };
    // Current Date
    // -----------------------------------------------------------------------------------------------------------------
    CalendarApi1.prototype.prev = function() {
        this.unselect();
        this.dispatch({
            type: 'PREV'
        });
    };
    CalendarApi1.prototype.next = function() {
        this.unselect();
        this.dispatch({
            type: 'NEXT'
        });
    };
    CalendarApi1.prototype.prevYear = function() {
        var state = this.getCurrentData();
        this.unselect();
        this.dispatch({
            type: 'CHANGE_DATE',
            dateMarker: state.dateEnv.addYears(state.currentDate, -1)
        });
    };
    CalendarApi1.prototype.nextYear = function() {
        var state = this.getCurrentData();
        this.unselect();
        this.dispatch({
            type: 'CHANGE_DATE',
            dateMarker: state.dateEnv.addYears(state.currentDate, 1)
        });
    };
    CalendarApi1.prototype.today = function() {
        var state = this.getCurrentData();
        this.unselect();
        this.dispatch({
            type: 'CHANGE_DATE',
            dateMarker: getNow(state.calendarOptions.now, state.dateEnv)
        });
    };
    CalendarApi1.prototype.gotoDate = function(zonedDateInput) {
        var state = this.getCurrentData();
        this.unselect();
        this.dispatch({
            type: 'CHANGE_DATE',
            dateMarker: state.dateEnv.createMarker(zonedDateInput)
        });
    };
    CalendarApi1.prototype.incrementDate = function(deltaInput) {
        var state = this.getCurrentData();
        var delta = createDuration(deltaInput);
        if (delta) {
            this.unselect();
            this.dispatch({
                type: 'CHANGE_DATE',
                dateMarker: state.dateEnv.add(state.currentDate, delta)
            });
        }
    };
    // for external API
    CalendarApi1.prototype.getDate = function() {
        var state = this.getCurrentData();
        return state.dateEnv.toDate(state.currentDate);
    };
    // Date Formatting Utils
    // -----------------------------------------------------------------------------------------------------------------
    CalendarApi1.prototype.formatDate = function(d, formatter) {
        var dateEnv = this.getCurrentData().dateEnv;
        return dateEnv.format(dateEnv.createMarker(d), createFormatter(formatter));
    };
    // `settings` is for formatter AND isEndExclusive
    CalendarApi1.prototype.formatRange = function(d0, d1, settings) {
        var dateEnv = this.getCurrentData().dateEnv;
        return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings), settings);
    };
    CalendarApi1.prototype.formatIso = function(d, omitTime) {
        var dateEnv = this.getCurrentData().dateEnv;
        return dateEnv.formatIso(dateEnv.createMarker(d), {
            omitTime: omitTime
        });
    };
    // Date Selection / Event Selection / DayClick
    // -----------------------------------------------------------------------------------------------------------------
    // this public method receives start/end dates in any format, with any timezone
    // NOTE: args were changed from v3
    CalendarApi1.prototype.select = function(dateOrObj, endDate) {
        var selectionInput;
        if (endDate == null) {
            if (dateOrObj.start != null) selectionInput = dateOrObj;
            else selectionInput = {
                start: dateOrObj,
                end: null
            };
        } else selectionInput = {
            start: dateOrObj,
            end: endDate
        };
        var state = this.getCurrentData();
        var selection = parseDateSpan(selectionInput, state.dateEnv, createDuration({
            days: 1
        }));
        if (selection) {
            this.dispatch({
                type: 'SELECT_DATES',
                selection: selection
            });
            triggerDateSelect(selection, null, state);
        }
    };
    // public method
    CalendarApi1.prototype.unselect = function(pev) {
        var state = this.getCurrentData();
        if (state.dateSelection) {
            this.dispatch({
                type: 'UNSELECT_DATES'
            });
            triggerDateUnselect(pev, state);
        }
    };
    // Public Events API
    // -----------------------------------------------------------------------------------------------------------------
    CalendarApi1.prototype.addEvent = function(eventInput, sourceInput) {
        if (eventInput instanceof EventApi) {
            var def = eventInput._def;
            var instance = eventInput._instance;
            var currentData = this.getCurrentData();
            // not already present? don't want to add an old snapshot
            if (!currentData.eventStore.defs[def.defId]) {
                this.dispatch({
                    type: 'ADD_EVENTS',
                    eventStore: eventTupleToStore({
                        def: def,
                        instance: instance
                    })
                });
                this.triggerEventAdd(eventInput);
            }
            return eventInput;
        }
        var state = this.getCurrentData();
        var eventSource;
        if (sourceInput instanceof EventSourceApi) eventSource = sourceInput.internalEventSource;
        else if (typeof sourceInput === 'boolean') {
            if (sourceInput) eventSource = hashValuesToArray(state.eventSources)[0];
        } else if (sourceInput != null) {
            var sourceApi = this.getEventSourceById(sourceInput); // TODO: use an internal function
            if (!sourceApi) {
                console.warn("Could not find an event source with ID \"" + sourceInput + "\""); // TODO: test
                return null;
            }
            eventSource = sourceApi.internalEventSource;
        }
        var tuple = parseEvent(eventInput, eventSource, state, false);
        if (tuple) {
            var newEventApi = new EventApi(state, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
            this.dispatch({
                type: 'ADD_EVENTS',
                eventStore: eventTupleToStore(tuple)
            });
            this.triggerEventAdd(newEventApi);
            return newEventApi;
        }
        return null;
    };
    CalendarApi1.prototype.triggerEventAdd = function(eventApi) {
        var _this = this;
        var emitter = this.getCurrentData().emitter;
        emitter.trigger('eventAdd', {
            event: eventApi,
            relatedEvents: [],
            revert: function() {
                _this.dispatch({
                    type: 'REMOVE_EVENTS',
                    eventStore: eventApiToStore(eventApi)
                });
            }
        });
    };
    // TODO: optimize
    CalendarApi1.prototype.getEventById = function(id) {
        var state = this.getCurrentData();
        var _a = state.eventStore, defs = _a.defs, instances = _a.instances;
        id = String(id);
        for(var defId in defs){
            var def = defs[defId];
            if (def.publicId === id) {
                if (def.recurringDef) return new EventApi(state, def, null);
                for(var instanceId in instances){
                    var instance = instances[instanceId];
                    if (instance.defId === def.defId) return new EventApi(state, def, instance);
                }
            }
        }
        return null;
    };
    CalendarApi1.prototype.getEvents = function() {
        var currentData = this.getCurrentData();
        return buildEventApis(currentData.eventStore, currentData);
    };
    CalendarApi1.prototype.removeAllEvents = function() {
        this.dispatch({
            type: 'REMOVE_ALL_EVENTS'
        });
    };
    // Public Event Sources API
    // -----------------------------------------------------------------------------------------------------------------
    CalendarApi1.prototype.getEventSources = function() {
        var state = this.getCurrentData();
        var sourceHash = state.eventSources;
        var sourceApis = [];
        for(var internalId in sourceHash)sourceApis.push(new EventSourceApi(state, sourceHash[internalId]));
        return sourceApis;
    };
    CalendarApi1.prototype.getEventSourceById = function(id) {
        var state = this.getCurrentData();
        var sourceHash = state.eventSources;
        id = String(id);
        for(var sourceId in sourceHash){
            if (sourceHash[sourceId].publicId === id) return new EventSourceApi(state, sourceHash[sourceId]);
        }
        return null;
    };
    CalendarApi1.prototype.addEventSource = function(sourceInput) {
        var state = this.getCurrentData();
        if (sourceInput instanceof EventSourceApi) {
            // not already present? don't want to add an old snapshot
            if (!state.eventSources[sourceInput.internalEventSource.sourceId]) this.dispatch({
                type: 'ADD_EVENT_SOURCES',
                sources: [
                    sourceInput.internalEventSource
                ]
            });
            return sourceInput;
        }
        var eventSource = parseEventSource(sourceInput, state);
        if (eventSource) {
            this.dispatch({
                type: 'ADD_EVENT_SOURCES',
                sources: [
                    eventSource
                ]
            });
            return new EventSourceApi(state, eventSource);
        }
        return null;
    };
    CalendarApi1.prototype.removeAllEventSources = function() {
        this.dispatch({
            type: 'REMOVE_ALL_EVENT_SOURCES'
        });
    };
    CalendarApi1.prototype.refetchEvents = function() {
        this.dispatch({
            type: 'FETCH_EVENT_SOURCES',
            isRefetch: true
        });
    };
    // Scroll
    // -----------------------------------------------------------------------------------------------------------------
    CalendarApi1.prototype.scrollToTime = function(timeInput) {
        var time = createDuration(timeInput);
        if (time) this.trigger('_scrollRequest', {
            time: time
        });
    };
    return CalendarApi1;
}();
var EventApi = function() {
    // instance will be null if expressing a recurring event that has no current instances,
    // OR if trying to validate an incoming external event that has no dates assigned
    function EventApi1(context, def, instance) {
        this._context = context;
        this._def = def;
        this._instance = instance || null;
    }
    /*
    TODO: make event struct more responsible for this
    */ EventApi1.prototype.setProp = function(name, val) {
        var _a, _b;
        if (name in EVENT_DATE_REFINERS) console.warn('Could not set date-related prop \'name\'. Use one of the date-related methods instead.');
        else if (name === 'id') {
            val = EVENT_NON_DATE_REFINERS[name](val);
            this.mutate({
                standardProps: {
                    publicId: val
                }
            });
        } else if (name in EVENT_NON_DATE_REFINERS) {
            val = EVENT_NON_DATE_REFINERS[name](val);
            this.mutate({
                standardProps: (_a = {
                }, _a[name] = val, _a)
            });
        } else if (name in EVENT_UI_REFINERS) {
            var ui = EVENT_UI_REFINERS[name](val);
            if (name === 'color') ui = {
                backgroundColor: val,
                borderColor: val
            };
            else if (name === 'editable') ui = {
                startEditable: val,
                durationEditable: val
            };
            else ui = (_b = {
            }, _b[name] = val, _b);
            this.mutate({
                standardProps: {
                    ui: ui
                }
            });
        } else console.warn("Could not set prop '" + name + "'. Use setExtendedProp instead.");
    };
    EventApi1.prototype.setExtendedProp = function(name, val) {
        var _a;
        this.mutate({
            extendedProps: (_a = {
            }, _a[name] = val, _a)
        });
    };
    EventApi1.prototype.setStart = function(startInput, options) {
        if (options === void 0) options = {
        };
        var dateEnv = this._context.dateEnv;
        var start = dateEnv.createMarker(startInput);
        if (start && this._instance) {
            var instanceRange = this._instance.range;
            var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity); // what if parsed bad!?
            if (options.maintainDuration) this.mutate({
                datesDelta: startDelta
            });
            else this.mutate({
                startDelta: startDelta
            });
        }
    };
    EventApi1.prototype.setEnd = function(endInput, options) {
        if (options === void 0) options = {
        };
        var dateEnv = this._context.dateEnv;
        var end;
        if (endInput != null) {
            end = dateEnv.createMarker(endInput);
            if (!end) return; // TODO: warning if parsed bad
        }
        if (this._instance) {
            if (end) {
                var endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
                this.mutate({
                    endDelta: endDelta
                });
            } else this.mutate({
                standardProps: {
                    hasEnd: false
                }
            });
        }
    };
    EventApi1.prototype.setDates = function(startInput, endInput, options) {
        if (options === void 0) options = {
        };
        var dateEnv = this._context.dateEnv;
        var standardProps = {
            allDay: options.allDay
        };
        var start = dateEnv.createMarker(startInput);
        var end;
        if (!start) return; // TODO: warning if parsed bad
        if (endInput != null) {
            end = dateEnv.createMarker(endInput);
            if (!end) return;
        }
        if (this._instance) {
            var instanceRange = this._instance.range;
            // when computing the diff for an event being converted to all-day,
            // compute diff off of the all-day values the way event-mutation does.
            if (options.allDay === true) instanceRange = computeAlignedDayRange(instanceRange);
            var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
            if (end) {
                var endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);
                if (durationsEqual(startDelta, endDelta)) this.mutate({
                    datesDelta: startDelta,
                    standardProps: standardProps
                });
                else this.mutate({
                    startDelta: startDelta,
                    endDelta: endDelta,
                    standardProps: standardProps
                });
            } else {
                standardProps.hasEnd = false;
                this.mutate({
                    datesDelta: startDelta,
                    standardProps: standardProps
                });
            }
        }
    };
    EventApi1.prototype.moveStart = function(deltaInput) {
        var delta = createDuration(deltaInput);
        if (delta) this.mutate({
            startDelta: delta
        });
    };
    EventApi1.prototype.moveEnd = function(deltaInput) {
        var delta = createDuration(deltaInput);
        if (delta) this.mutate({
            endDelta: delta
        });
    };
    EventApi1.prototype.moveDates = function(deltaInput) {
        var delta = createDuration(deltaInput);
        if (delta) this.mutate({
            datesDelta: delta
        });
    };
    EventApi1.prototype.setAllDay = function(allDay, options) {
        if (options === void 0) options = {
        };
        var standardProps = {
            allDay: allDay
        };
        var maintainDuration = options.maintainDuration;
        if (maintainDuration == null) maintainDuration = this._context.options.allDayMaintainDuration;
        if (this._def.allDay !== allDay) standardProps.hasEnd = maintainDuration;
        this.mutate({
            standardProps: standardProps
        });
    };
    EventApi1.prototype.formatRange = function(formatInput) {
        var dateEnv = this._context.dateEnv;
        var instance = this._instance;
        var formatter = createFormatter(formatInput);
        if (this._def.hasEnd) return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
            forcedStartTzo: instance.forcedStartTzo,
            forcedEndTzo: instance.forcedEndTzo
        });
        return dateEnv.format(instance.range.start, formatter, {
            forcedTzo: instance.forcedStartTzo
        });
    };
    EventApi1.prototype.mutate = function(mutation) {
        var instance = this._instance;
        if (instance) {
            var def = this._def;
            var context_1 = this._context;
            var eventStore_1 = context_1.getCurrentData().eventStore;
            var relevantEvents = getRelevantEvents(eventStore_1, instance.instanceId);
            var eventConfigBase = {
                '': {
                    display: '',
                    startEditable: true,
                    durationEditable: true,
                    constraints: [],
                    overlap: null,
                    allows: [],
                    backgroundColor: '',
                    borderColor: '',
                    textColor: '',
                    classNames: []
                }
            };
            relevantEvents = applyMutationToEventStore(relevantEvents, eventConfigBase, mutation, context_1);
            var oldEvent = new EventApi1(context_1, def, instance); // snapshot
            this._def = relevantEvents.defs[def.defId];
            this._instance = relevantEvents.instances[instance.instanceId];
            context_1.dispatch({
                type: 'MERGE_EVENTS',
                eventStore: relevantEvents
            });
            context_1.emitter.trigger('eventChange', {
                oldEvent: oldEvent,
                event: this,
                relatedEvents: buildEventApis(relevantEvents, context_1, instance),
                revert: function() {
                    context_1.dispatch({
                        type: 'RESET_EVENTS',
                        eventStore: eventStore_1
                    });
                }
            });
        }
    };
    EventApi1.prototype.remove = function() {
        var context = this._context;
        var asStore = eventApiToStore(this);
        context.dispatch({
            type: 'REMOVE_EVENTS',
            eventStore: asStore
        });
        context.emitter.trigger('eventRemove', {
            event: this,
            relatedEvents: [],
            revert: function() {
                context.dispatch({
                    type: 'MERGE_EVENTS',
                    eventStore: asStore
                });
            }
        });
    };
    Object.defineProperty(EventApi1.prototype, "source", {
        get: function() {
            var sourceId = this._def.sourceId;
            if (sourceId) return new EventSourceApi(this._context, this._context.getCurrentData().eventSources[sourceId]);
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "start", {
        get: function() {
            return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "end", {
        get: function() {
            return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "startStr", {
        get: function() {
            var instance = this._instance;
            if (instance) return this._context.dateEnv.formatIso(instance.range.start, {
                omitTime: this._def.allDay,
                forcedTzo: instance.forcedStartTzo
            });
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "endStr", {
        get: function() {
            var instance = this._instance;
            if (instance && this._def.hasEnd) return this._context.dateEnv.formatIso(instance.range.end, {
                omitTime: this._def.allDay,
                forcedTzo: instance.forcedEndTzo
            });
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "id", {
        // computable props that all access the def
        // TODO: find a TypeScript-compatible way to do this at scale
        get: function() {
            return this._def.publicId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "groupId", {
        get: function() {
            return this._def.groupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "allDay", {
        get: function() {
            return this._def.allDay;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "title", {
        get: function() {
            return this._def.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "url", {
        get: function() {
            return this._def.url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "display", {
        get: function() {
            return this._def.ui.display || 'auto';
        } // bad. just normalize the type earlier
        ,
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "startEditable", {
        get: function() {
            return this._def.ui.startEditable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "durationEditable", {
        get: function() {
            return this._def.ui.durationEditable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "constraint", {
        get: function() {
            return this._def.ui.constraints[0] || null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "overlap", {
        get: function() {
            return this._def.ui.overlap;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "allow", {
        get: function() {
            return this._def.ui.allows[0] || null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "backgroundColor", {
        get: function() {
            return this._def.ui.backgroundColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "borderColor", {
        get: function() {
            return this._def.ui.borderColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "textColor", {
        get: function() {
            return this._def.ui.textColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "classNames", {
        // NOTE: user can't modify these because Object.freeze was called in event-def parsing
        get: function() {
            return this._def.ui.classNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi1.prototype, "extendedProps", {
        get: function() {
            return this._def.extendedProps;
        },
        enumerable: false,
        configurable: true
    });
    EventApi1.prototype.toPlainObject = function(settings) {
        if (settings === void 0) settings = {
        };
        var def = this._def;
        var ui = def.ui;
        var _a = this, startStr = _a.startStr, endStr = _a.endStr;
        var res = {
        };
        if (def.title) res.title = def.title;
        if (startStr) res.start = startStr;
        if (endStr) res.end = endStr;
        if (def.publicId) res.id = def.publicId;
        if (def.groupId) res.groupId = def.groupId;
        if (def.url) res.url = def.url;
        if (ui.display && ui.display !== 'auto') res.display = ui.display;
        // TODO: what about recurring-event properties???
        // TODO: include startEditable/durationEditable/constraint/overlap/allow
        if (settings.collapseColor && ui.backgroundColor && ui.backgroundColor === ui.borderColor) res.color = ui.backgroundColor;
        else {
            if (ui.backgroundColor) res.backgroundColor = ui.backgroundColor;
            if (ui.borderColor) res.borderColor = ui.borderColor;
        }
        if (ui.textColor) res.textColor = ui.textColor;
        if (ui.classNames.length) res.classNames = ui.classNames;
        if (Object.keys(def.extendedProps).length) {
            if (settings.collapseExtendedProps) _tslib.__assign(res, def.extendedProps);
            else res.extendedProps = def.extendedProps;
        }
        return res;
    };
    EventApi1.prototype.toJSON = function() {
        return this.toPlainObject();
    };
    return EventApi1;
}();
function eventApiToStore(eventApi) {
    var _a, _b;
    var def = eventApi._def;
    var instance = eventApi._instance;
    return {
        defs: (_a = {
        }, _a[def.defId] = def, _a),
        instances: instance ? (_b = {
        }, _b[instance.instanceId] = instance, _b) : {
        }
    };
}
function buildEventApis(eventStore, context, excludeInstance) {
    var defs = eventStore.defs, instances = eventStore.instances;
    var eventApis = [];
    var excludeInstanceId = excludeInstance ? excludeInstance.instanceId : '';
    for(var id in instances){
        var instance = instances[id];
        var def = defs[instance.defId];
        if (instance.instanceId !== excludeInstanceId) eventApis.push(new EventApi(context, def, instance));
    }
    return eventApis;
}
var calendarSystemClassMap = {
};
function registerCalendarSystem(name, theClass) {
    calendarSystemClassMap[name] = theClass;
}
function createCalendarSystem(name) {
    return new calendarSystemClassMap[name]();
}
var GregorianCalendarSystem = function() {
    function GregorianCalendarSystem1() {
    }
    GregorianCalendarSystem1.prototype.getMarkerYear = function(d) {
        return d.getUTCFullYear();
    };
    GregorianCalendarSystem1.prototype.getMarkerMonth = function(d) {
        return d.getUTCMonth();
    };
    GregorianCalendarSystem1.prototype.getMarkerDay = function(d) {
        return d.getUTCDate();
    };
    GregorianCalendarSystem1.prototype.arrayToMarker = function(arr) {
        return arrayToUtcDate(arr);
    };
    GregorianCalendarSystem1.prototype.markerToArray = function(marker) {
        return dateToUtcArray(marker);
    };
    return GregorianCalendarSystem1;
}();
registerCalendarSystem('gregory', GregorianCalendarSystem);
var ISO_RE = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function parse(str) {
    var m = ISO_RE.exec(str);
    if (m) {
        var marker = new Date(Date.UTC(Number(m[1]), m[3] ? Number(m[3]) - 1 : 0, Number(m[5] || 1), Number(m[7] || 0), Number(m[8] || 0), Number(m[10] || 0), m[12] ? Number("0." + m[12]) * 1000 : 0));
        if (isValidDate(marker)) {
            var timeZoneOffset = null;
            if (m[13]) timeZoneOffset = (m[15] === '-' ? -1 : 1) * (Number(m[16] || 0) * 60 + Number(m[18] || 0));
            return {
                marker: marker,
                isTimeUnspecified: !m[6],
                timeZoneOffset: timeZoneOffset
            };
        }
    }
    return null;
}
var DateEnv = function() {
    function DateEnv1(settings) {
        var timeZone = this.timeZone = settings.timeZone;
        var isNamedTimeZone = timeZone !== 'local' && timeZone !== 'UTC';
        if (settings.namedTimeZoneImpl && isNamedTimeZone) this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
        this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
        this.calendarSystem = createCalendarSystem(settings.calendarSystem);
        this.locale = settings.locale;
        this.weekDow = settings.locale.week.dow;
        this.weekDoy = settings.locale.week.doy;
        if (settings.weekNumberCalculation === 'ISO') {
            this.weekDow = 1;
            this.weekDoy = 4;
        }
        if (typeof settings.firstDay === 'number') this.weekDow = settings.firstDay;
        if (typeof settings.weekNumberCalculation === 'function') this.weekNumberFunc = settings.weekNumberCalculation;
        this.weekText = settings.weekText != null ? settings.weekText : settings.locale.options.weekText;
        this.weekTextLong = (settings.weekTextLong != null ? settings.weekTextLong : settings.locale.options.weekTextLong) || this.weekText;
        this.cmdFormatter = settings.cmdFormatter;
        this.defaultSeparator = settings.defaultSeparator;
    }
    // Creating / Parsing
    DateEnv1.prototype.createMarker = function(input) {
        var meta = this.createMarkerMeta(input);
        if (meta === null) return null;
        return meta.marker;
    };
    DateEnv1.prototype.createNowMarker = function() {
        if (this.canComputeOffset) return this.timestampToMarker(new Date().valueOf());
        // if we can't compute the current date val for a timezone,
        // better to give the current local date vals than UTC
        return arrayToUtcDate(dateToLocalArray(new Date()));
    };
    DateEnv1.prototype.createMarkerMeta = function(input) {
        if (typeof input === 'string') return this.parse(input);
        var marker = null;
        if (typeof input === 'number') marker = this.timestampToMarker(input);
        else if (input instanceof Date) {
            input = input.valueOf();
            if (!isNaN(input)) marker = this.timestampToMarker(input);
        } else if (Array.isArray(input)) marker = arrayToUtcDate(input);
        if (marker === null || !isValidDate(marker)) return null;
        return {
            marker: marker,
            isTimeUnspecified: false,
            forcedTzo: null
        };
    };
    DateEnv1.prototype.parse = function(s) {
        var parts = parse(s);
        if (parts === null) return null;
        var marker = parts.marker;
        var forcedTzo = null;
        if (parts.timeZoneOffset !== null) {
            if (this.canComputeOffset) marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60000);
            else forcedTzo = parts.timeZoneOffset;
        }
        return {
            marker: marker,
            isTimeUnspecified: parts.isTimeUnspecified,
            forcedTzo: forcedTzo
        };
    };
    // Accessors
    DateEnv1.prototype.getYear = function(marker) {
        return this.calendarSystem.getMarkerYear(marker);
    };
    DateEnv1.prototype.getMonth = function(marker) {
        return this.calendarSystem.getMarkerMonth(marker);
    };
    // Adding / Subtracting
    DateEnv1.prototype.add = function(marker, dur) {
        var a = this.calendarSystem.markerToArray(marker);
        a[0] += dur.years;
        a[1] += dur.months;
        a[2] += dur.days;
        a[6] += dur.milliseconds;
        return this.calendarSystem.arrayToMarker(a);
    };
    DateEnv1.prototype.subtract = function(marker, dur) {
        var a = this.calendarSystem.markerToArray(marker);
        a[0] -= dur.years;
        a[1] -= dur.months;
        a[2] -= dur.days;
        a[6] -= dur.milliseconds;
        return this.calendarSystem.arrayToMarker(a);
    };
    DateEnv1.prototype.addYears = function(marker, n) {
        var a = this.calendarSystem.markerToArray(marker);
        a[0] += n;
        return this.calendarSystem.arrayToMarker(a);
    };
    DateEnv1.prototype.addMonths = function(marker, n) {
        var a = this.calendarSystem.markerToArray(marker);
        a[1] += n;
        return this.calendarSystem.arrayToMarker(a);
    };
    // Diffing Whole Units
    DateEnv1.prototype.diffWholeYears = function(m0, m1) {
        var calendarSystem = this.calendarSystem;
        if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) && calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
        return null;
    };
    DateEnv1.prototype.diffWholeMonths = function(m0, m1) {
        var calendarSystem = this.calendarSystem;
        if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) return calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0) + (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
        return null;
    };
    // Range / Duration
    DateEnv1.prototype.greatestWholeUnit = function(m0, m1) {
        var n = this.diffWholeYears(m0, m1);
        if (n !== null) return {
            unit: 'year',
            value: n
        };
        n = this.diffWholeMonths(m0, m1);
        if (n !== null) return {
            unit: 'month',
            value: n
        };
        n = diffWholeWeeks(m0, m1);
        if (n !== null) return {
            unit: 'week',
            value: n
        };
        n = diffWholeDays(m0, m1);
        if (n !== null) return {
            unit: 'day',
            value: n
        };
        n = diffHours(m0, m1);
        if (isInt(n)) return {
            unit: 'hour',
            value: n
        };
        n = diffMinutes(m0, m1);
        if (isInt(n)) return {
            unit: 'minute',
            value: n
        };
        n = diffSeconds(m0, m1);
        if (isInt(n)) return {
            unit: 'second',
            value: n
        };
        return {
            unit: 'millisecond',
            value: m1.valueOf() - m0.valueOf()
        };
    };
    DateEnv1.prototype.countDurationsBetween = function(m0, m1, d) {
        // TODO: can use greatestWholeUnit
        var diff;
        if (d.years) {
            diff = this.diffWholeYears(m0, m1);
            if (diff !== null) return diff / asRoughYears(d);
        }
        if (d.months) {
            diff = this.diffWholeMonths(m0, m1);
            if (diff !== null) return diff / asRoughMonths(d);
        }
        if (d.days) {
            diff = diffWholeDays(m0, m1);
            if (diff !== null) return diff / asRoughDays(d);
        }
        return (m1.valueOf() - m0.valueOf()) / asRoughMs(d);
    };
    // Start-Of
    // these DON'T return zoned-dates. only UTC start-of dates
    DateEnv1.prototype.startOf = function(m, unit) {
        if (unit === 'year') return this.startOfYear(m);
        if (unit === 'month') return this.startOfMonth(m);
        if (unit === 'week') return this.startOfWeek(m);
        if (unit === 'day') return startOfDay(m);
        if (unit === 'hour') return startOfHour(m);
        if (unit === 'minute') return startOfMinute(m);
        if (unit === 'second') return startOfSecond(m);
        return null;
    };
    DateEnv1.prototype.startOfYear = function(m) {
        return this.calendarSystem.arrayToMarker([
            this.calendarSystem.getMarkerYear(m), 
        ]);
    };
    DateEnv1.prototype.startOfMonth = function(m) {
        return this.calendarSystem.arrayToMarker([
            this.calendarSystem.getMarkerYear(m),
            this.calendarSystem.getMarkerMonth(m), 
        ]);
    };
    DateEnv1.prototype.startOfWeek = function(m) {
        return this.calendarSystem.arrayToMarker([
            this.calendarSystem.getMarkerYear(m),
            this.calendarSystem.getMarkerMonth(m),
            m.getUTCDate() - (m.getUTCDay() - this.weekDow + 7) % 7, 
        ]);
    };
    // Week Number
    DateEnv1.prototype.computeWeekNumber = function(marker) {
        if (this.weekNumberFunc) return this.weekNumberFunc(this.toDate(marker));
        return weekOfYear(marker, this.weekDow, this.weekDoy);
    };
    // TODO: choke on timeZoneName: long
    DateEnv1.prototype.format = function(marker, formatter, dateOptions) {
        if (dateOptions === void 0) dateOptions = {
        };
        return formatter.format({
            marker: marker,
            timeZoneOffset: dateOptions.forcedTzo != null ? dateOptions.forcedTzo : this.offsetForMarker(marker)
        }, this);
    };
    DateEnv1.prototype.formatRange = function(start, end, formatter, dateOptions) {
        if (dateOptions === void 0) dateOptions = {
        };
        if (dateOptions.isEndExclusive) end = addMs(end, -1);
        return formatter.formatRange({
            marker: start,
            timeZoneOffset: dateOptions.forcedStartTzo != null ? dateOptions.forcedStartTzo : this.offsetForMarker(start)
        }, {
            marker: end,
            timeZoneOffset: dateOptions.forcedEndTzo != null ? dateOptions.forcedEndTzo : this.offsetForMarker(end)
        }, this, dateOptions.defaultSeparator);
    };
    /*
    DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
    might as well use buildIsoString or some other util directly
    */ DateEnv1.prototype.formatIso = function(marker, extraOptions) {
        if (extraOptions === void 0) extraOptions = {
        };
        var timeZoneOffset = null;
        if (!extraOptions.omitTimeZoneOffset) {
            if (extraOptions.forcedTzo != null) timeZoneOffset = extraOptions.forcedTzo;
            else timeZoneOffset = this.offsetForMarker(marker);
        }
        return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
    };
    // TimeZone
    DateEnv1.prototype.timestampToMarker = function(ms) {
        if (this.timeZone === 'local') return arrayToUtcDate(dateToLocalArray(new Date(ms)));
        if (this.timeZone === 'UTC' || !this.namedTimeZoneImpl) return new Date(ms);
        return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
    };
    DateEnv1.prototype.offsetForMarker = function(m) {
        if (this.timeZone === 'local') return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset(); // convert "inverse" offset to "normal" offset
        if (this.timeZone === 'UTC') return 0;
        if (this.namedTimeZoneImpl) return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));
        return null;
    };
    // Conversion
    DateEnv1.prototype.toDate = function(m, forcedTzo) {
        if (this.timeZone === 'local') return arrayToLocalDate(dateToUtcArray(m));
        if (this.timeZone === 'UTC') return new Date(m.valueOf()); // make sure it's a copy
        if (!this.namedTimeZoneImpl) return new Date(m.valueOf() - (forcedTzo || 0));
        return new Date(m.valueOf() - this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m)) * 60000);
    };
    return DateEnv1;
}();
var globalLocales = [];
var MINIMAL_RAW_EN_LOCALE = {
    code: 'en',
    week: {
        dow: 0,
        doy: 4
    },
    direction: 'ltr',
    buttonText: {
        prev: 'prev',
        next: 'next',
        prevYear: 'prev year',
        nextYear: 'next year',
        year: 'year',
        today: 'today',
        month: 'month',
        week: 'week',
        day: 'day',
        list: 'list'
    },
    weekText: 'W',
    weekTextLong: 'Week',
    closeHint: 'Close',
    timeHint: 'Time',
    eventHint: 'Event',
    allDayText: 'all-day',
    moreLinkText: 'more',
    noEventsText: 'No events to display'
};
var RAW_EN_LOCALE = _tslib.__assign(_tslib.__assign({
}, MINIMAL_RAW_EN_LOCALE), {
    // Includes things we don't want other locales to inherit,
    // things that derive from other translatable strings.
    buttonHints: {
        prev: 'Previous $0',
        next: 'Next $0',
        today: function(buttonText, unit) {
            return unit === 'day' ? 'Today' : "This " + buttonText;
        }
    },
    viewHint: '$0 view',
    navLinkHint: 'Go to $0',
    moreLinkHint: function(eventCnt) {
        return "Show " + eventCnt + " more event" + (eventCnt === 1 ? '' : 's');
    }
});
function organizeRawLocales(explicitRawLocales) {
    var defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : 'en';
    var allRawLocales = globalLocales.concat(explicitRawLocales);
    var rawLocaleMap = {
        en: RAW_EN_LOCALE
    };
    for(var _i = 0, allRawLocales_1 = allRawLocales; _i < allRawLocales_1.length; _i++){
        var rawLocale = allRawLocales_1[_i];
        rawLocaleMap[rawLocale.code] = rawLocale;
    }
    return {
        map: rawLocaleMap,
        defaultCode: defaultCode
    };
}
function buildLocale(inputSingular, available) {
    if (typeof inputSingular === 'object' && !Array.isArray(inputSingular)) return parseLocale(inputSingular.code, [
        inputSingular.code
    ], inputSingular);
    return queryLocale(inputSingular, available);
}
function queryLocale(codeArg, available) {
    var codes = [].concat(codeArg || []); // will convert to array
    var raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
    return parseLocale(codeArg, codes, raw);
}
function queryRawLocale(codes, available) {
    for(var i = 0; i < codes.length; i += 1){
        var parts = codes[i].toLocaleLowerCase().split('-');
        for(var j = parts.length; j > 0; j -= 1){
            var simpleId = parts.slice(0, j).join('-');
            if (available[simpleId]) return available[simpleId];
        }
    }
    return null;
}
function parseLocale(codeArg, codes, raw) {
    var merged = mergeProps([
        MINIMAL_RAW_EN_LOCALE,
        raw
    ], [
        'buttonText'
    ]);
    delete merged.code; // don't want this part of the options
    var week = merged.week;
    delete merged.week;
    return {
        codeArg: codeArg,
        codes: codes,
        week: week,
        simpleNumberFormat: new Intl.NumberFormat(codeArg),
        options: merged
    };
}
function formatDate(dateInput, options) {
    if (options === void 0) options = {
    };
    var dateEnv = buildDateEnv$1(options);
    var formatter = createFormatter(options);
    var dateMeta = dateEnv.createMarkerMeta(dateInput);
    if (!dateMeta) return '';
    return dateEnv.format(dateMeta.marker, formatter, {
        forcedTzo: dateMeta.forcedTzo
    });
}
function formatRange(startInput, endInput, options) {
    var dateEnv = buildDateEnv$1(typeof options === 'object' && options ? options : {
    }); // pass in if non-null object
    var formatter = createFormatter(options);
    var startMeta = dateEnv.createMarkerMeta(startInput);
    var endMeta = dateEnv.createMarkerMeta(endInput);
    if (!startMeta || !endMeta) return '';
    return dateEnv.formatRange(startMeta.marker, endMeta.marker, formatter, {
        forcedStartTzo: startMeta.forcedTzo,
        forcedEndTzo: endMeta.forcedTzo,
        isEndExclusive: options.isEndExclusive,
        defaultSeparator: BASE_OPTION_DEFAULTS.defaultRangeSeparator
    });
}
// TODO: more DRY and optimized
function buildDateEnv$1(settings) {
    var locale = buildLocale(settings.locale || 'en', organizeRawLocales([]).map); // TODO: don't hardcode 'en' everywhere
    return new DateEnv(_tslib.__assign(_tslib.__assign({
        timeZone: BASE_OPTION_DEFAULTS.timeZone,
        calendarSystem: 'gregory'
    }, settings), {
        locale: locale
    }));
}
var DEF_DEFAULTS = {
    startTime: '09:00',
    endTime: '17:00',
    daysOfWeek: [
        1,
        2,
        3,
        4,
        5
    ],
    display: 'inverse-background',
    classNames: 'fc-non-business',
    groupId: '_businessHours'
};
/*
TODO: pass around as EventDefHash!!!
*/ function parseBusinessHours(input, context) {
    return parseEvents(refineInputs(input), null, context);
}
function refineInputs(input) {
    var rawDefs;
    if (input === true) rawDefs = [
        {
        }
    ]; // will get DEF_DEFAULTS verbatim
    else if (Array.isArray(input)) // if specifying an array, every sub-definition NEEDS a day-of-week
    rawDefs = input.filter(function(rawDef) {
        return rawDef.daysOfWeek;
    });
    else if (typeof input === 'object' && input) rawDefs = [
        input
    ];
    else rawDefs = [];
    rawDefs = rawDefs.map(function(rawDef) {
        return _tslib.__assign(_tslib.__assign({
        }, DEF_DEFAULTS), rawDef);
    });
    return rawDefs;
}
function pointInsideRect(point, rect) {
    return point.left >= rect.left && point.left < rect.right && point.top >= rect.top && point.top < rect.bottom;
}
// Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
function intersectRects(rect1, rect2) {
    var res = {
        left: Math.max(rect1.left, rect2.left),
        right: Math.min(rect1.right, rect2.right),
        top: Math.max(rect1.top, rect2.top),
        bottom: Math.min(rect1.bottom, rect2.bottom)
    };
    if (res.left < res.right && res.top < res.bottom) return res;
    return false;
}
function translateRect(rect, deltaX, deltaY) {
    return {
        left: rect.left + deltaX,
        right: rect.right + deltaX,
        top: rect.top + deltaY,
        bottom: rect.bottom + deltaY
    };
}
// Returns a new point that will have been moved to reside within the given rectangle
function constrainPoint(point, rect) {
    return {
        left: Math.min(Math.max(point.left, rect.left), rect.right),
        top: Math.min(Math.max(point.top, rect.top), rect.bottom)
    };
}
// Returns a point that is the center of the given rectangle
function getRectCenter(rect) {
    return {
        left: (rect.left + rect.right) / 2,
        top: (rect.top + rect.bottom) / 2
    };
}
// Subtracts point2's coordinates from point1's coordinates, returning a delta
function diffPoints(point1, point2) {
    return {
        left: point1.left - point2.left,
        top: point1.top - point2.top
    };
}
var canVGrowWithinCell;
function getCanVGrowWithinCell() {
    if (canVGrowWithinCell == null) canVGrowWithinCell = computeCanVGrowWithinCell();
    return canVGrowWithinCell;
}
function computeCanVGrowWithinCell() {
    // for SSR, because this function is call immediately at top-level
    // TODO: just make this logic execute top-level, immediately, instead of doing lazily
    if (typeof document === 'undefined') return true;
    var el = document.createElement('div');
    el.style.position = 'absolute';
    el.style.top = '0px';
    el.style.left = '0px';
    el.innerHTML = '<table><tr><td><div></div></td></tr></table>';
    el.querySelector('table').style.height = '100px';
    el.querySelector('div').style.height = '100%';
    document.body.appendChild(el);
    var div = el.querySelector('div');
    var possible = div.offsetHeight > 0;
    document.body.removeChild(el);
    return possible;
}
var EMPTY_EVENT_STORE = createEmptyEventStore(); // for purecomponents. TODO: keep elsewhere
var Splitter = function() {
    function Splitter1() {
        this.getKeysForEventDefs = memoize(this._getKeysForEventDefs);
        this.splitDateSelection = memoize(this._splitDateSpan);
        this.splitEventStore = memoize(this._splitEventStore);
        this.splitIndividualUi = memoize(this._splitIndividualUi);
        this.splitEventDrag = memoize(this._splitInteraction);
        this.splitEventResize = memoize(this._splitInteraction);
        this.eventUiBuilders = {
        }; // TODO: typescript protection
    }
    Splitter1.prototype.splitProps = function(props) {
        var _this = this;
        var keyInfos = this.getKeyInfo(props);
        var defKeys = this.getKeysForEventDefs(props.eventStore);
        var dateSelections = this.splitDateSelection(props.dateSelection);
        var individualUi = this.splitIndividualUi(props.eventUiBases, defKeys); // the individual *bases*
        var eventStores = this.splitEventStore(props.eventStore, defKeys);
        var eventDrags = this.splitEventDrag(props.eventDrag);
        var eventResizes = this.splitEventResize(props.eventResize);
        var splitProps = {
        };
        this.eventUiBuilders = mapHash(keyInfos, function(info, key) {
            return _this.eventUiBuilders[key] || memoize(buildEventUiForKey);
        });
        for(var key in keyInfos){
            var keyInfo = keyInfos[key];
            var eventStore = eventStores[key] || EMPTY_EVENT_STORE;
            var buildEventUi = this.eventUiBuilders[key];
            splitProps[key] = {
                businessHours: keyInfo.businessHours || props.businessHours,
                dateSelection: dateSelections[key] || null,
                eventStore: eventStore,
                eventUiBases: buildEventUi(props.eventUiBases[''], keyInfo.ui, individualUi[key]),
                eventSelection: eventStore.instances[props.eventSelection] ? props.eventSelection : '',
                eventDrag: eventDrags[key] || null,
                eventResize: eventResizes[key] || null
            };
        }
        return splitProps;
    };
    Splitter1.prototype._splitDateSpan = function(dateSpan) {
        var dateSpans = {
        };
        if (dateSpan) {
            var keys = this.getKeysForDateSpan(dateSpan);
            for(var _i = 0, keys_1 = keys; _i < keys_1.length; _i++){
                var key = keys_1[_i];
                dateSpans[key] = dateSpan;
            }
        }
        return dateSpans;
    };
    Splitter1.prototype._getKeysForEventDefs = function(eventStore) {
        var _this = this;
        return mapHash(eventStore.defs, function(eventDef) {
            return _this.getKeysForEventDef(eventDef);
        });
    };
    Splitter1.prototype._splitEventStore = function(eventStore, defKeys) {
        var defs = eventStore.defs, instances = eventStore.instances;
        var splitStores = {
        };
        for(var defId in defs)for(var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++){
            var key = _a[_i];
            if (!splitStores[key]) splitStores[key] = createEmptyEventStore();
            splitStores[key].defs[defId] = defs[defId];
        }
        for(var instanceId in instances){
            var instance = instances[instanceId];
            for(var _b = 0, _c = defKeys[instance.defId]; _b < _c.length; _b++){
                var key = _c[_b];
                if (splitStores[key]) splitStores[key].instances[instanceId] = instance;
            }
        }
        return splitStores;
    };
    Splitter1.prototype._splitIndividualUi = function(eventUiBases, defKeys) {
        var splitHashes = {
        };
        for(var defId in eventUiBases){
            if (defId) for(var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++){
                var key = _a[_i];
                if (!splitHashes[key]) splitHashes[key] = {
                };
                splitHashes[key][defId] = eventUiBases[defId];
            }
        }
        return splitHashes;
    };
    Splitter1.prototype._splitInteraction = function(interaction) {
        var splitStates = {
        };
        if (interaction) {
            var affectedStores_1 = this._splitEventStore(interaction.affectedEvents, this._getKeysForEventDefs(interaction.affectedEvents));
            // can't rely on defKeys because event data is mutated
            var mutatedKeysByDefId = this._getKeysForEventDefs(interaction.mutatedEvents);
            var mutatedStores_1 = this._splitEventStore(interaction.mutatedEvents, mutatedKeysByDefId);
            var populate = function(key) {
                if (!splitStates[key]) splitStates[key] = {
                    affectedEvents: affectedStores_1[key] || EMPTY_EVENT_STORE,
                    mutatedEvents: mutatedStores_1[key] || EMPTY_EVENT_STORE,
                    isEvent: interaction.isEvent
                };
            };
            for(var key in affectedStores_1)populate(key);
            for(var key in mutatedStores_1)populate(key);
        }
        return splitStates;
    };
    return Splitter1;
}();
function buildEventUiForKey(allUi, eventUiForKey, individualUi) {
    var baseParts = [];
    if (allUi) baseParts.push(allUi);
    if (eventUiForKey) baseParts.push(eventUiForKey);
    var stuff = {
        '': combineEventUis(baseParts)
    };
    if (individualUi) _tslib.__assign(stuff, individualUi);
    return stuff;
}
function getDateMeta(date, todayRange, nowDate, dateProfile) {
    return {
        dow: date.getUTCDay(),
        isDisabled: Boolean(dateProfile && !rangeContainsMarker(dateProfile.activeRange, date)),
        isOther: Boolean(dateProfile && !rangeContainsMarker(dateProfile.currentRange, date)),
        isToday: Boolean(todayRange && rangeContainsMarker(todayRange, date)),
        isPast: Boolean(nowDate ? date < nowDate : todayRange ? date < todayRange.start : false),
        isFuture: Boolean(nowDate ? date > nowDate : todayRange ? date >= todayRange.end : false)
    };
}
function getDayClassNames(meta, theme) {
    var classNames = [
        'fc-day',
        "fc-day-" + DAY_IDS[meta.dow], 
    ];
    if (meta.isDisabled) classNames.push('fc-day-disabled');
    else {
        if (meta.isToday) {
            classNames.push('fc-day-today');
            classNames.push(theme.getClass('today'));
        }
        if (meta.isPast) classNames.push('fc-day-past');
        if (meta.isFuture) classNames.push('fc-day-future');
        if (meta.isOther) classNames.push('fc-day-other');
    }
    return classNames;
}
function getSlotClassNames(meta, theme) {
    var classNames = [
        'fc-slot',
        "fc-slot-" + DAY_IDS[meta.dow], 
    ];
    if (meta.isDisabled) classNames.push('fc-slot-disabled');
    else {
        if (meta.isToday) {
            classNames.push('fc-slot-today');
            classNames.push(theme.getClass('today'));
        }
        if (meta.isPast) classNames.push('fc-slot-past');
        if (meta.isFuture) classNames.push('fc-slot-future');
    }
    return classNames;
}
var DAY_FORMAT = createFormatter({
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
var WEEK_FORMAT = createFormatter({
    week: 'long'
});
function buildNavLinkAttrs(context, dateMarker, viewType, isTabbable) {
    if (viewType === void 0) viewType = 'day';
    if (isTabbable === void 0) isTabbable = true;
    var dateEnv = context.dateEnv, options = context.options, calendarApi = context.calendarApi;
    var dateStr = dateEnv.format(dateMarker, viewType === 'week' ? WEEK_FORMAT : DAY_FORMAT);
    if (options.navLinks) {
        var zonedDate = dateEnv.toDate(dateMarker);
        var handleInteraction = function(ev) {
            var customAction = viewType === 'day' ? options.navLinkDayClick : viewType === 'week' ? options.navLinkWeekClick : null;
            if (typeof customAction === 'function') customAction.call(calendarApi, dateEnv.toDate(dateMarker), ev);
            else {
                if (typeof customAction === 'string') viewType = customAction;
                calendarApi.zoomTo(dateMarker, viewType);
            }
        };
        return _tslib.__assign({
            title: formatWithOrdinals(options.navLinkHint, [
                dateStr,
                zonedDate
            ], dateStr),
            'data-navlink': ''
        }, isTabbable ? createAriaClickAttrs(handleInteraction) : {
            onClick: handleInteraction
        });
    }
    return {
        'aria-label': dateStr
    };
}
var _isRtlScrollbarOnLeft = null;
function getIsRtlScrollbarOnLeft() {
    if (_isRtlScrollbarOnLeft === null) _isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
    return _isRtlScrollbarOnLeft;
}
function computeIsRtlScrollbarOnLeft() {
    var outerEl = document.createElement('div');
    applyStyle(outerEl, {
        position: 'absolute',
        top: -1000,
        left: 0,
        border: 0,
        padding: 0,
        overflow: 'scroll',
        direction: 'rtl'
    });
    outerEl.innerHTML = '<div></div>';
    document.body.appendChild(outerEl);
    var innerEl = outerEl.firstChild;
    var res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
    removeElement(outerEl);
    return res;
}
var _scrollbarWidths;
function getScrollbarWidths() {
    if (!_scrollbarWidths) _scrollbarWidths = computeScrollbarWidths();
    return _scrollbarWidths;
}
function computeScrollbarWidths() {
    var el = document.createElement('div');
    el.style.overflow = 'scroll';
    el.style.position = 'absolute';
    el.style.top = '-9999px';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    var res = computeScrollbarWidthsForEl(el);
    document.body.removeChild(el);
    return res;
}
// WARNING: will include border
function computeScrollbarWidthsForEl(el) {
    return {
        x: el.offsetHeight - el.clientHeight,
        y: el.offsetWidth - el.clientWidth
    };
}
function computeEdges(el, getPadding) {
    if (getPadding === void 0) getPadding = false;
    var computedStyle = window.getComputedStyle(el);
    var borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
    var borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
    var borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
    var borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
    var badScrollbarWidths = computeScrollbarWidthsForEl(el); // includes border!
    var scrollbarLeftRight = badScrollbarWidths.y - borderLeft - borderRight;
    var scrollbarBottom = badScrollbarWidths.x - borderTop - borderBottom;
    var res = {
        borderLeft: borderLeft,
        borderRight: borderRight,
        borderTop: borderTop,
        borderBottom: borderBottom,
        scrollbarBottom: scrollbarBottom,
        scrollbarLeft: 0,
        scrollbarRight: 0
    };
    if (getIsRtlScrollbarOnLeft() && computedStyle.direction === 'rtl') res.scrollbarLeft = scrollbarLeftRight;
    else res.scrollbarRight = scrollbarLeftRight;
    if (getPadding) {
        res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
        res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
        res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
        res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
    }
    return res;
}
function computeInnerRect(el, goWithinPadding, doFromWindowViewport) {
    if (goWithinPadding === void 0) goWithinPadding = false;
    var outerRect = doFromWindowViewport ? el.getBoundingClientRect() : computeRect(el);
    var edges = computeEdges(el, goWithinPadding);
    var res = {
        left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
        right: outerRect.right - edges.borderRight - edges.scrollbarRight,
        top: outerRect.top + edges.borderTop,
        bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom
    };
    if (goWithinPadding) {
        res.left += edges.paddingLeft;
        res.right -= edges.paddingRight;
        res.top += edges.paddingTop;
        res.bottom -= edges.paddingBottom;
    }
    return res;
}
function computeRect(el) {
    var rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.pageXOffset,
        top: rect.top + window.pageYOffset,
        right: rect.right + window.pageXOffset,
        bottom: rect.bottom + window.pageYOffset
    };
}
function computeClippedClientRect(el) {
    var clippingParents = getClippingParents(el);
    var rect = el.getBoundingClientRect();
    for(var _i = 0, clippingParents_1 = clippingParents; _i < clippingParents_1.length; _i++){
        var clippingParent = clippingParents_1[_i];
        var intersection = intersectRects(rect, clippingParent.getBoundingClientRect());
        if (intersection) rect = intersection;
        else return null;
    }
    return rect;
}
function computeHeightAndMargins(el) {
    return el.getBoundingClientRect().height + computeVMargins(el);
}
function computeVMargins(el) {
    var computed = window.getComputedStyle(el);
    return parseInt(computed.marginTop, 10) + parseInt(computed.marginBottom, 10);
}
// does not return window
function getClippingParents(el) {
    var parents = [];
    while(el instanceof HTMLElement){
        var computedStyle = window.getComputedStyle(el);
        if (computedStyle.position === 'fixed') break;
        if (/(auto|scroll)/.test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) parents.push(el);
        el = el.parentNode;
    }
    return parents;
}
// given a function that resolves a result asynchronously.
// the function can either call passed-in success and failure callbacks,
// or it can return a promise.
// if you need to pass additional params to func, bind them first.
function unpromisify(func, success, failure) {
    // guard against success/failure callbacks being called more than once
    // and guard against a promise AND callback being used together.
    var isResolved = false;
    var wrappedSuccess = function() {
        if (!isResolved) {
            isResolved = true;
            success.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }
    };
    var wrappedFailure = function() {
        if (!isResolved) {
            isResolved = true;
            if (failure) failure.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }
    };
    var res = func(wrappedSuccess, wrappedFailure);
    if (res && typeof res.then === 'function') res.then(wrappedSuccess, wrappedFailure);
}
var Emitter = function() {
    function Emitter1() {
        this.handlers = {
        };
        this.thisContext = null;
    }
    Emitter1.prototype.setThisContext = function(thisContext) {
        this.thisContext = thisContext;
    };
    Emitter1.prototype.setOptions = function(options) {
        this.options = options;
    };
    Emitter1.prototype.on = function(type, handler) {
        addToHash(this.handlers, type, handler);
    };
    Emitter1.prototype.off = function(type, handler) {
        removeFromHash(this.handlers, type, handler);
    };
    Emitter1.prototype.trigger = function(type) {
        var args = [];
        for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
        var attachedHandlers = this.handlers[type] || [];
        var optionHandler = this.options && this.options[type];
        var handlers = [].concat(optionHandler || [], attachedHandlers);
        for(var _a = 0, handlers_1 = handlers; _a < handlers_1.length; _a++){
            var handler = handlers_1[_a];
            handler.apply(this.thisContext, args);
        }
    };
    Emitter1.prototype.hasHandlers = function(type) {
        return Boolean(this.handlers[type] && this.handlers[type].length || this.options && this.options[type]);
    };
    return Emitter1;
}();
function addToHash(hash, type, handler) {
    (hash[type] || (hash[type] = [])).push(handler);
}
function removeFromHash(hash, type, handler) {
    if (handler) {
        if (hash[type]) hash[type] = hash[type].filter(function(func) {
            return func !== handler;
        });
    } else delete hash[type]; // remove all handler funcs for this type
}
/*
Records offset information for a set of elements, relative to an origin element.
Can record the left/right OR the top/bottom OR both.
Provides methods for querying the cache by position.
*/ var PositionCache = function() {
    function PositionCache1(originEl, els, isHorizontal, isVertical) {
        this.els = els;
        var originClientRect = this.originClientRect = originEl.getBoundingClientRect(); // relative to viewport top-left
        if (isHorizontal) this.buildElHorizontals(originClientRect.left);
        if (isVertical) this.buildElVerticals(originClientRect.top);
    }
    // Populates the left/right internal coordinate arrays
    PositionCache1.prototype.buildElHorizontals = function(originClientLeft) {
        var lefts = [];
        var rights = [];
        for(var _i = 0, _a = this.els; _i < _a.length; _i++){
            var el = _a[_i];
            var rect = el.getBoundingClientRect();
            lefts.push(rect.left - originClientLeft);
            rights.push(rect.right - originClientLeft);
        }
        this.lefts = lefts;
        this.rights = rights;
    };
    // Populates the top/bottom internal coordinate arrays
    PositionCache1.prototype.buildElVerticals = function(originClientTop) {
        var tops = [];
        var bottoms = [];
        for(var _i = 0, _a = this.els; _i < _a.length; _i++){
            var el = _a[_i];
            var rect = el.getBoundingClientRect();
            tops.push(rect.top - originClientTop);
            bottoms.push(rect.bottom - originClientTop);
        }
        this.tops = tops;
        this.bottoms = bottoms;
    };
    // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
    // If no intersection is made, returns undefined.
    PositionCache1.prototype.leftToIndex = function(leftPosition) {
        var _a = this, lefts = _a.lefts, rights = _a.rights;
        var len = lefts.length;
        var i;
        for(i = 0; i < len; i += 1){
            if (leftPosition >= lefts[i] && leftPosition < rights[i]) return i;
        }
        return undefined; // TODO: better
    };
    // Given a top offset (from document top), returns the index of the el that it vertically intersects.
    // If no intersection is made, returns undefined.
    PositionCache1.prototype.topToIndex = function(topPosition) {
        var _a = this, tops = _a.tops, bottoms = _a.bottoms;
        var len = tops.length;
        var i;
        for(i = 0; i < len; i += 1){
            if (topPosition >= tops[i] && topPosition < bottoms[i]) return i;
        }
        return undefined; // TODO: better
    };
    // Gets the width of the element at the given index
    PositionCache1.prototype.getWidth = function(leftIndex) {
        return this.rights[leftIndex] - this.lefts[leftIndex];
    };
    // Gets the height of the element at the given index
    PositionCache1.prototype.getHeight = function(topIndex) {
        return this.bottoms[topIndex] - this.tops[topIndex];
    };
    return PositionCache1;
}();
/* eslint max-classes-per-file: "off" */ /*
An object for getting/setting scroll-related information for an element.
Internally, this is done very differently for window versus DOM element,
so this object serves as a common interface.
*/ var ScrollController = function() {
    function ScrollController1() {
    }
    ScrollController1.prototype.getMaxScrollTop = function() {
        return this.getScrollHeight() - this.getClientHeight();
    };
    ScrollController1.prototype.getMaxScrollLeft = function() {
        return this.getScrollWidth() - this.getClientWidth();
    };
    ScrollController1.prototype.canScrollVertically = function() {
        return this.getMaxScrollTop() > 0;
    };
    ScrollController1.prototype.canScrollHorizontally = function() {
        return this.getMaxScrollLeft() > 0;
    };
    ScrollController1.prototype.canScrollUp = function() {
        return this.getScrollTop() > 0;
    };
    ScrollController1.prototype.canScrollDown = function() {
        return this.getScrollTop() < this.getMaxScrollTop();
    };
    ScrollController1.prototype.canScrollLeft = function() {
        return this.getScrollLeft() > 0;
    };
    ScrollController1.prototype.canScrollRight = function() {
        return this.getScrollLeft() < this.getMaxScrollLeft();
    };
    return ScrollController1;
}();
var ElementScrollController = function(_super) {
    _tslib.__extends(ElementScrollController1, _super);
    function ElementScrollController1(el) {
        var _this = _super.call(this) || this;
        _this.el = el;
        return _this;
    }
    ElementScrollController1.prototype.getScrollTop = function() {
        return this.el.scrollTop;
    };
    ElementScrollController1.prototype.getScrollLeft = function() {
        return this.el.scrollLeft;
    };
    ElementScrollController1.prototype.setScrollTop = function(top) {
        this.el.scrollTop = top;
    };
    ElementScrollController1.prototype.setScrollLeft = function(left) {
        this.el.scrollLeft = left;
    };
    ElementScrollController1.prototype.getScrollWidth = function() {
        return this.el.scrollWidth;
    };
    ElementScrollController1.prototype.getScrollHeight = function() {
        return this.el.scrollHeight;
    };
    ElementScrollController1.prototype.getClientHeight = function() {
        return this.el.clientHeight;
    };
    ElementScrollController1.prototype.getClientWidth = function() {
        return this.el.clientWidth;
    };
    return ElementScrollController1;
}(ScrollController);
var WindowScrollController = function(_super) {
    _tslib.__extends(WindowScrollController1, _super);
    function WindowScrollController1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowScrollController1.prototype.getScrollTop = function() {
        return window.pageYOffset;
    };
    WindowScrollController1.prototype.getScrollLeft = function() {
        return window.pageXOffset;
    };
    WindowScrollController1.prototype.setScrollTop = function(n) {
        window.scroll(window.pageXOffset, n);
    };
    WindowScrollController1.prototype.setScrollLeft = function(n) {
        window.scroll(n, window.pageYOffset);
    };
    WindowScrollController1.prototype.getScrollWidth = function() {
        return document.documentElement.scrollWidth;
    };
    WindowScrollController1.prototype.getScrollHeight = function() {
        return document.documentElement.scrollHeight;
    };
    WindowScrollController1.prototype.getClientHeight = function() {
        return document.documentElement.clientHeight;
    };
    WindowScrollController1.prototype.getClientWidth = function() {
        return document.documentElement.clientWidth;
    };
    return WindowScrollController1;
}(ScrollController);
var Theme = function() {
    function Theme1(calendarOptions) {
        if (this.iconOverrideOption) this.setIconOverride(calendarOptions[this.iconOverrideOption]);
    }
    Theme1.prototype.setIconOverride = function(iconOverrideHash) {
        var iconClassesCopy;
        var buttonName;
        if (typeof iconOverrideHash === 'object' && iconOverrideHash) {
            iconClassesCopy = _tslib.__assign({
            }, this.iconClasses);
            for(buttonName in iconOverrideHash)iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
            this.iconClasses = iconClassesCopy;
        } else if (iconOverrideHash === false) this.iconClasses = {
        };
    };
    Theme1.prototype.applyIconOverridePrefix = function(className) {
        var prefix = this.iconOverridePrefix;
        if (prefix && className.indexOf(prefix) !== 0) className = prefix + className;
        return className;
    };
    Theme1.prototype.getClass = function(key) {
        return this.classes[key] || '';
    };
    Theme1.prototype.getIconClass = function(buttonName, isRtl) {
        var className;
        if (isRtl && this.rtlIconClasses) className = this.rtlIconClasses[buttonName] || this.iconClasses[buttonName];
        else className = this.iconClasses[buttonName];
        if (className) return this.baseIconClass + " " + className;
        return '';
    };
    Theme1.prototype.getCustomButtonIconClass = function(customButtonProps) {
        var className;
        if (this.iconOverrideCustomButtonOption) {
            className = customButtonProps[this.iconOverrideCustomButtonOption];
            if (className) return this.baseIconClass + " " + this.applyIconOverridePrefix(className);
        }
        return '';
    };
    return Theme1;
}();
Theme.prototype.classes = {
};
Theme.prototype.iconClasses = {
};
Theme.prototype.baseIconClass = '';
Theme.prototype.iconOverridePrefix = '';
var ScrollResponder = function() {
    function ScrollResponder1(execFunc, emitter, scrollTime, scrollTimeReset) {
        var _this = this;
        this.execFunc = execFunc;
        this.emitter = emitter;
        this.scrollTime = scrollTime;
        this.scrollTimeReset = scrollTimeReset;
        this.handleScrollRequest = function(request) {
            _this.queuedRequest = _tslib.__assign({
            }, _this.queuedRequest || {
            }, request);
            _this.drain();
        };
        emitter.on('_scrollRequest', this.handleScrollRequest);
        this.fireInitialScroll();
    }
    ScrollResponder1.prototype.detach = function() {
        this.emitter.off('_scrollRequest', this.handleScrollRequest);
    };
    ScrollResponder1.prototype.update = function(isDatesNew) {
        if (isDatesNew && this.scrollTimeReset) this.fireInitialScroll(); // will drain
        else this.drain();
    };
    ScrollResponder1.prototype.fireInitialScroll = function() {
        this.handleScrollRequest({
            time: this.scrollTime
        });
    };
    ScrollResponder1.prototype.drain = function() {
        if (this.queuedRequest && this.execFunc(this.queuedRequest)) this.queuedRequest = null;
    };
    return ScrollResponder1;
}();
var ViewContextType = _vdomJs.createContext({
}); // for Components
function buildViewContext(viewSpec, viewApi, viewOptions, dateProfileGenerator, dateEnv, theme, pluginHooks, dispatch, getCurrentData, emitter, calendarApi, registerInteractiveComponent, unregisterInteractiveComponent) {
    return {
        dateEnv: dateEnv,
        options: viewOptions,
        pluginHooks: pluginHooks,
        emitter: emitter,
        dispatch: dispatch,
        getCurrentData: getCurrentData,
        calendarApi: calendarApi,
        viewSpec: viewSpec,
        viewApi: viewApi,
        dateProfileGenerator: dateProfileGenerator,
        theme: theme,
        isRtl: viewOptions.direction === 'rtl',
        addResizeHandler: function(handler) {
            emitter.on('_resize', handler);
        },
        removeResizeHandler: function(handler) {
            emitter.off('_resize', handler);
        },
        createScrollResponder: function(execFunc) {
            return new ScrollResponder(execFunc, emitter, createDuration(viewOptions.scrollTime), viewOptions.scrollTimeReset);
        },
        registerInteractiveComponent: registerInteractiveComponent,
        unregisterInteractiveComponent: unregisterInteractiveComponent
    };
}
/* eslint max-classes-per-file: off */ var PureComponent = function(_super) {
    _tslib.__extends(PureComponent1, _super);
    function PureComponent1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PureComponent1.prototype.shouldComponentUpdate = function(nextProps, nextState) {
        if (this.debug) // eslint-disable-next-line no-console
        console.log(getUnequalProps(nextProps, this.props), getUnequalProps(nextState, this.state));
        return !compareObjs(this.props, nextProps, this.propEquality) || !compareObjs(this.state, nextState, this.stateEquality);
    };
    PureComponent1.addPropsEquality = addPropsEquality;
    PureComponent1.addStateEquality = addStateEquality;
    PureComponent1.contextType = ViewContextType;
    return PureComponent1;
}(_vdomJs.Component);
PureComponent.prototype.propEquality = {
};
PureComponent.prototype.stateEquality = {
};
var BaseComponent = function(_super) {
    _tslib.__extends(BaseComponent1, _super);
    function BaseComponent1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseComponent1.contextType = ViewContextType;
    return BaseComponent1;
}(PureComponent);
function addPropsEquality(propEquality) {
    var hash = Object.create(this.prototype.propEquality);
    _tslib.__assign(hash, propEquality);
    this.prototype.propEquality = hash;
}
function addStateEquality(stateEquality) {
    var hash = Object.create(this.prototype.stateEquality);
    _tslib.__assign(hash, stateEquality);
    this.prototype.stateEquality = hash;
}
// use other one
function setRef(ref, current) {
    if (typeof ref === 'function') ref(current);
    else if (ref) // see https://github.com/facebook/react/issues/13029
    ref.current = current;
}
/*
an INTERACTABLE date component

PURPOSES:
- hook up to fg, fill, and mirror renderers
- interface for dragging and hits
*/ var DateComponent = function(_super) {
    _tslib.__extends(DateComponent1, _super);
    function DateComponent1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uid = guid();
        return _this;
    }
    // Hit System
    // -----------------------------------------------------------------------------------------------------------------
    DateComponent1.prototype.prepareHits = function() {
    };
    DateComponent1.prototype.queryHit = function(positionLeft, positionTop, elWidth, elHeight) {
        return null; // this should be abstract
    };
    // Pointer Interaction Utils
    // -----------------------------------------------------------------------------------------------------------------
    DateComponent1.prototype.isValidSegDownEl = function(el) {
        return !this.props.eventDrag && !this.props.eventResize && !elementClosest(el, '.fc-event-mirror');
    };
    DateComponent1.prototype.isValidDateDownEl = function(el) {
        return !elementClosest(el, '.fc-event:not(.fc-bg-event)') && !elementClosest(el, '.fc-more-link') && !elementClosest(el, 'a[data-navlink]') && !elementClosest(el, '.fc-popover'); // hack
    };
    return DateComponent1;
}(BaseComponent);
// TODO: easier way to add new hooks? need to update a million things
function createPlugin(input) {
    return {
        id: guid(),
        deps: input.deps || [],
        reducers: input.reducers || [],
        isLoadingFuncs: input.isLoadingFuncs || [],
        contextInit: [].concat(input.contextInit || []),
        eventRefiners: input.eventRefiners || {
        },
        eventDefMemberAdders: input.eventDefMemberAdders || [],
        eventSourceRefiners: input.eventSourceRefiners || {
        },
        isDraggableTransformers: input.isDraggableTransformers || [],
        eventDragMutationMassagers: input.eventDragMutationMassagers || [],
        eventDefMutationAppliers: input.eventDefMutationAppliers || [],
        dateSelectionTransformers: input.dateSelectionTransformers || [],
        datePointTransforms: input.datePointTransforms || [],
        dateSpanTransforms: input.dateSpanTransforms || [],
        views: input.views || {
        },
        viewPropsTransformers: input.viewPropsTransformers || [],
        isPropsValid: input.isPropsValid || null,
        externalDefTransforms: input.externalDefTransforms || [],
        viewContainerAppends: input.viewContainerAppends || [],
        eventDropTransformers: input.eventDropTransformers || [],
        componentInteractions: input.componentInteractions || [],
        calendarInteractions: input.calendarInteractions || [],
        themeClasses: input.themeClasses || {
        },
        eventSourceDefs: input.eventSourceDefs || [],
        cmdFormatter: input.cmdFormatter,
        recurringTypes: input.recurringTypes || [],
        namedTimeZonedImpl: input.namedTimeZonedImpl,
        initialView: input.initialView || '',
        elementDraggingImpl: input.elementDraggingImpl,
        optionChangeHandlers: input.optionChangeHandlers || {
        },
        scrollGridImpl: input.scrollGridImpl || null,
        contentTypeHandlers: input.contentTypeHandlers || {
        },
        listenerRefiners: input.listenerRefiners || {
        },
        optionRefiners: input.optionRefiners || {
        },
        propSetHandlers: input.propSetHandlers || {
        }
    };
}
function buildPluginHooks(pluginDefs, globalDefs) {
    var isAdded = {
    };
    var hooks = {
        reducers: [],
        isLoadingFuncs: [],
        contextInit: [],
        eventRefiners: {
        },
        eventDefMemberAdders: [],
        eventSourceRefiners: {
        },
        isDraggableTransformers: [],
        eventDragMutationMassagers: [],
        eventDefMutationAppliers: [],
        dateSelectionTransformers: [],
        datePointTransforms: [],
        dateSpanTransforms: [],
        views: {
        },
        viewPropsTransformers: [],
        isPropsValid: null,
        externalDefTransforms: [],
        viewContainerAppends: [],
        eventDropTransformers: [],
        componentInteractions: [],
        calendarInteractions: [],
        themeClasses: {
        },
        eventSourceDefs: [],
        cmdFormatter: null,
        recurringTypes: [],
        namedTimeZonedImpl: null,
        initialView: '',
        elementDraggingImpl: null,
        optionChangeHandlers: {
        },
        scrollGridImpl: null,
        contentTypeHandlers: {
        },
        listenerRefiners: {
        },
        optionRefiners: {
        },
        propSetHandlers: {
        }
    };
    function addDefs(defs) {
        for(var _i = 0, defs_1 = defs; _i < defs_1.length; _i++){
            var def = defs_1[_i];
            if (!isAdded[def.id]) {
                isAdded[def.id] = true;
                addDefs(def.deps);
                hooks = combineHooks(hooks, def);
            }
        }
    }
    if (pluginDefs) addDefs(pluginDefs);
    addDefs(globalDefs);
    return hooks;
}
function buildBuildPluginHooks() {
    var currentOverrideDefs = [];
    var currentGlobalDefs = [];
    var currentHooks;
    return function(overrideDefs, globalDefs) {
        if (!currentHooks || !isArraysEqual(overrideDefs, currentOverrideDefs) || !isArraysEqual(globalDefs, currentGlobalDefs)) currentHooks = buildPluginHooks(overrideDefs, globalDefs);
        currentOverrideDefs = overrideDefs;
        currentGlobalDefs = globalDefs;
        return currentHooks;
    };
}
function combineHooks(hooks0, hooks1) {
    return {
        reducers: hooks0.reducers.concat(hooks1.reducers),
        isLoadingFuncs: hooks0.isLoadingFuncs.concat(hooks1.isLoadingFuncs),
        contextInit: hooks0.contextInit.concat(hooks1.contextInit),
        eventRefiners: _tslib.__assign(_tslib.__assign({
        }, hooks0.eventRefiners), hooks1.eventRefiners),
        eventDefMemberAdders: hooks0.eventDefMemberAdders.concat(hooks1.eventDefMemberAdders),
        eventSourceRefiners: _tslib.__assign(_tslib.__assign({
        }, hooks0.eventSourceRefiners), hooks1.eventSourceRefiners),
        isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
        eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
        eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
        dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
        datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
        dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
        views: _tslib.__assign(_tslib.__assign({
        }, hooks0.views), hooks1.views),
        viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
        isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
        externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
        viewContainerAppends: hooks0.viewContainerAppends.concat(hooks1.viewContainerAppends),
        eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
        calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
        componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
        themeClasses: _tslib.__assign(_tslib.__assign({
        }, hooks0.themeClasses), hooks1.themeClasses),
        eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
        cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
        recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
        namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
        initialView: hooks0.initialView || hooks1.initialView,
        elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
        optionChangeHandlers: _tslib.__assign(_tslib.__assign({
        }, hooks0.optionChangeHandlers), hooks1.optionChangeHandlers),
        scrollGridImpl: hooks1.scrollGridImpl || hooks0.scrollGridImpl,
        contentTypeHandlers: _tslib.__assign(_tslib.__assign({
        }, hooks0.contentTypeHandlers), hooks1.contentTypeHandlers),
        listenerRefiners: _tslib.__assign(_tslib.__assign({
        }, hooks0.listenerRefiners), hooks1.listenerRefiners),
        optionRefiners: _tslib.__assign(_tslib.__assign({
        }, hooks0.optionRefiners), hooks1.optionRefiners),
        propSetHandlers: _tslib.__assign(_tslib.__assign({
        }, hooks0.propSetHandlers), hooks1.propSetHandlers)
    };
}
var StandardTheme = function(_super) {
    _tslib.__extends(StandardTheme1, _super);
    function StandardTheme1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StandardTheme1;
}(Theme);
StandardTheme.prototype.classes = {
    root: 'fc-theme-standard',
    tableCellShaded: 'fc-cell-shaded',
    buttonGroup: 'fc-button-group',
    button: 'fc-button fc-button-primary',
    buttonActive: 'fc-button-active'
};
StandardTheme.prototype.baseIconClass = 'fc-icon';
StandardTheme.prototype.iconClasses = {
    close: 'fc-icon-x',
    prev: 'fc-icon-chevron-left',
    next: 'fc-icon-chevron-right',
    prevYear: 'fc-icon-chevrons-left',
    nextYear: 'fc-icon-chevrons-right'
};
StandardTheme.prototype.rtlIconClasses = {
    prev: 'fc-icon-chevron-right',
    next: 'fc-icon-chevron-left',
    prevYear: 'fc-icon-chevrons-right',
    nextYear: 'fc-icon-chevrons-left'
};
StandardTheme.prototype.iconOverrideOption = 'buttonIcons'; // TODO: make TS-friendly
StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';
function compileViewDefs(defaultConfigs, overrideConfigs) {
    var hash = {
    };
    var viewType;
    for(viewType in defaultConfigs)ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
    for(viewType in overrideConfigs)ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
    return hash;
}
function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
    if (hash[viewType]) return hash[viewType];
    var viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);
    if (viewDef) hash[viewType] = viewDef;
    return viewDef;
}
function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
    var defaultConfig = defaultConfigs[viewType];
    var overrideConfig = overrideConfigs[viewType];
    var queryProp = function(name) {
        return defaultConfig && defaultConfig[name] !== null ? defaultConfig[name] : overrideConfig && overrideConfig[name] !== null ? overrideConfig[name] : null;
    };
    var theComponent = queryProp('component');
    var superType = queryProp('superType');
    var superDef = null;
    if (superType) {
        if (superType === viewType) throw new Error('Can\'t have a custom view type that references itself');
        superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
    }
    if (!theComponent && superDef) theComponent = superDef.component;
    if (!theComponent) return null; // don't throw a warning, might be settings for a single-unit view
    return {
        type: viewType,
        component: theComponent,
        defaults: _tslib.__assign(_tslib.__assign({
        }, superDef ? superDef.defaults : {
        }), defaultConfig ? defaultConfig.rawOptions : {
        }),
        overrides: _tslib.__assign(_tslib.__assign({
        }, superDef ? superDef.overrides : {
        }), overrideConfig ? overrideConfig.rawOptions : {
        })
    };
}
/* eslint max-classes-per-file: off */ // NOTE: in JSX, you should always use this class with <HookProps> arg. otherwise, will default to any???
var RenderHook = function(_super) {
    _tslib.__extends(RenderHook1, _super);
    function RenderHook1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootElRef = _vdomJs.createRef();
        _this.handleRootEl = function(el) {
            setRef(_this.rootElRef, el);
            if (_this.props.elRef) setRef(_this.props.elRef, el);
        };
        return _this;
    }
    RenderHook1.prototype.render = function() {
        var _this = this;
        var props = this.props;
        var hookProps = props.hookProps;
        return _vdomJs.createElement(MountHook, {
            hookProps: hookProps,
            didMount: props.didMount,
            willUnmount: props.willUnmount,
            elRef: this.handleRootEl
        }, function(rootElRef) {
            return _vdomJs.createElement(ContentHook, {
                hookProps: hookProps,
                content: props.content,
                defaultContent: props.defaultContent,
                backupElRef: _this.rootElRef
            }, function(innerElRef, innerContent) {
                return props.children(rootElRef, normalizeClassNames(props.classNames, hookProps), innerElRef, innerContent);
            });
        });
    };
    return RenderHook1;
}(BaseComponent);
// TODO: rename to be about function, not default. use in above type
// for forcing rerender of components that use the ContentHook
var CustomContentRenderContext = _vdomJs.createContext(0);
function ContentHook(props) {
    return _vdomJs.createElement(CustomContentRenderContext.Consumer, null, function(renderId) {
        return _vdomJs.createElement(ContentHookInner, _tslib.__assign({
            renderId: renderId
        }, props));
    });
}
var ContentHookInner = function(_super) {
    _tslib.__extends(ContentHookInner1, _super);
    function ContentHookInner1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.innerElRef = _vdomJs.createRef();
        return _this;
    }
    ContentHookInner1.prototype.render = function() {
        return this.props.children(this.innerElRef, this.renderInnerContent());
    };
    ContentHookInner1.prototype.componentDidMount = function() {
        this.updateCustomContent();
    };
    ContentHookInner1.prototype.componentDidUpdate = function() {
        this.updateCustomContent();
    };
    ContentHookInner1.prototype.componentWillUnmount = function() {
        if (this.customContentInfo && this.customContentInfo.destroy) this.customContentInfo.destroy();
    };
    ContentHookInner1.prototype.renderInnerContent = function() {
        var customContentInfo = this.customContentInfo; // only populated if using non-[p]react node(s)
        var innerContent = this.getInnerContent();
        var meta = this.getContentMeta(innerContent);
        // initial run, or content-type changing? (from vue -> react for example)
        if (!customContentInfo || customContentInfo.contentKey !== meta.contentKey) {
            // clearing old value
            if (customContentInfo) {
                if (customContentInfo.destroy) customContentInfo.destroy();
                customContentInfo = this.customContentInfo = null;
            }
            // assigning new value
            if (meta.contentKey) customContentInfo = this.customContentInfo = _tslib.__assign({
                contentKey: meta.contentKey,
                contentVal: innerContent[meta.contentKey]
            }, meta.buildLifecycleFuncs());
        // updating
        } else if (customContentInfo) customContentInfo.contentVal = innerContent[meta.contentKey];
        return customContentInfo ? [] // signal that something was specified
         : innerContent; // assume a [p]react vdom node. use it
    };
    ContentHookInner1.prototype.getInnerContent = function() {
        var props = this.props;
        var innerContent = normalizeContent(props.content, props.hookProps);
        if (innerContent === undefined) innerContent = normalizeContent(props.defaultContent, props.hookProps);
        return innerContent == null ? null : innerContent; // convert undefined to null (better for React)
    };
    ContentHookInner1.prototype.getContentMeta = function(innerContent) {
        var contentTypeHandlers = this.context.pluginHooks.contentTypeHandlers;
        var contentKey = '';
        var buildLifecycleFuncs = null;
        if (innerContent) {
            for(var searchKey in contentTypeHandlers)if (innerContent[searchKey] !== undefined) {
                contentKey = searchKey;
                buildLifecycleFuncs = contentTypeHandlers[searchKey];
                break;
            }
        }
        return {
            contentKey: contentKey,
            buildLifecycleFuncs: buildLifecycleFuncs
        };
    };
    ContentHookInner1.prototype.updateCustomContent = function() {
        if (this.customContentInfo) this.customContentInfo.render(this.innerElRef.current || this.props.backupElRef.current, this.customContentInfo.contentVal);
    };
    return ContentHookInner1;
}(BaseComponent);
var MountHook = function(_super) {
    _tslib.__extends(MountHook1, _super);
    function MountHook1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleRootEl = function(rootEl) {
            _this.rootEl = rootEl;
            if (_this.props.elRef) setRef(_this.props.elRef, rootEl);
        };
        return _this;
    }
    MountHook1.prototype.render = function() {
        return this.props.children(this.handleRootEl);
    };
    MountHook1.prototype.componentDidMount = function() {
        var callback = this.props.didMount;
        if (callback) callback(_tslib.__assign(_tslib.__assign({
        }, this.props.hookProps), {
            el: this.rootEl
        }));
    };
    MountHook1.prototype.componentWillUnmount = function() {
        var callback = this.props.willUnmount;
        if (callback) callback(_tslib.__assign(_tslib.__assign({
        }, this.props.hookProps), {
            el: this.rootEl
        }));
    };
    return MountHook1;
}(BaseComponent);
function buildClassNameNormalizer() {
    var currentGenerator;
    var currentHookProps;
    var currentClassNames = [];
    return function(generator, hookProps) {
        if (!currentHookProps || !isPropsEqual(currentHookProps, hookProps) || generator !== currentGenerator) {
            currentGenerator = generator;
            currentHookProps = hookProps;
            currentClassNames = normalizeClassNames(generator, hookProps);
        }
        return currentClassNames;
    };
}
function normalizeClassNames(classNames, hookProps) {
    if (typeof classNames === 'function') classNames = classNames(hookProps);
    return parseClassNames(classNames);
}
function normalizeContent(input, hookProps) {
    if (typeof input === 'function') return input(hookProps, _vdomJs.createElement); // give the function the vdom-creation func
    return input;
}
var ViewRoot = function(_super) {
    _tslib.__extends(ViewRoot1, _super);
    function ViewRoot1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.normalizeClassNames = buildClassNameNormalizer();
        return _this;
    }
    ViewRoot1.prototype.render = function() {
        var _a = this, props = _a.props, context = _a.context;
        var options = context.options;
        var hookProps = {
            view: context.viewApi
        };
        var customClassNames = this.normalizeClassNames(options.viewClassNames, hookProps);
        return _vdomJs.createElement(MountHook, {
            hookProps: hookProps,
            didMount: options.viewDidMount,
            willUnmount: options.viewWillUnmount,
            elRef: props.elRef
        }, function(rootElRef) {
            return props.children(rootElRef, [
                "fc-" + props.viewSpec.type + "-view",
                'fc-view'
            ].concat(customClassNames));
        });
    };
    return ViewRoot1;
}(BaseComponent);
function parseViewConfigs(inputs) {
    return mapHash(inputs, parseViewConfig);
}
function parseViewConfig(input) {
    var rawOptions = typeof input === 'function' ? {
        component: input
    } : input;
    var component = rawOptions.component;
    if (rawOptions.content) component = createViewHookComponent(rawOptions);
    return {
        superType: rawOptions.type,
        component: component,
        rawOptions: rawOptions
    };
}
function createViewHookComponent(options) {
    return function(viewProps) {
        return _vdomJs.createElement(ViewContextType.Consumer, null, function(context) {
            return _vdomJs.createElement(ViewRoot, {
                viewSpec: context.viewSpec
            }, function(viewElRef, viewClassNames) {
                var hookProps = _tslib.__assign(_tslib.__assign({
                }, viewProps), {
                    nextDayThreshold: context.options.nextDayThreshold
                });
                return _vdomJs.createElement(RenderHook, {
                    hookProps: hookProps,
                    classNames: options.classNames,
                    content: options.content,
                    didMount: options.didMount,
                    willUnmount: options.willUnmount,
                    elRef: viewElRef
                }, function(rootElRef, customClassNames, innerElRef, innerContent) {
                    return _vdomJs.createElement("div", {
                        className: viewClassNames.concat(customClassNames).join(' '),
                        ref: rootElRef
                    }, innerContent);
                });
            });
        });
    };
}
function buildViewSpecs(defaultInputs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
    var defaultConfigs = parseViewConfigs(defaultInputs);
    var overrideConfigs = parseViewConfigs(optionOverrides.views);
    var viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
    return mapHash(viewDefs, function(viewDef) {
        return buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults);
    });
}
function buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
    var durationInput = viewDef.overrides.duration || viewDef.defaults.duration || dynamicOptionOverrides.duration || optionOverrides.duration;
    var duration = null;
    var durationUnit = '';
    var singleUnit = '';
    var singleUnitOverrides = {
    };
    if (durationInput) {
        duration = createDurationCached(durationInput);
        if (duration) {
            var denom = greatestDurationDenominator(duration);
            durationUnit = denom.unit;
            if (denom.value === 1) {
                singleUnit = durationUnit;
                singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].rawOptions : {
                };
            }
        }
    }
    var queryButtonText = function(optionsSubset) {
        var buttonTextMap = optionsSubset.buttonText || {
        };
        var buttonTextKey = viewDef.defaults.buttonTextKey;
        if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) return buttonTextMap[buttonTextKey];
        if (buttonTextMap[viewDef.type] != null) return buttonTextMap[viewDef.type];
        if (buttonTextMap[singleUnit] != null) return buttonTextMap[singleUnit];
        return null;
    };
    var queryButtonTitle = function(optionsSubset) {
        var buttonHints = optionsSubset.buttonHints || {
        };
        var buttonKey = viewDef.defaults.buttonTextKey; // use same key as text
        if (buttonKey != null && buttonHints[buttonKey] != null) return buttonHints[buttonKey];
        if (buttonHints[viewDef.type] != null) return buttonHints[viewDef.type];
        if (buttonHints[singleUnit] != null) return buttonHints[singleUnit];
        return null;
    };
    return {
        type: viewDef.type,
        component: viewDef.component,
        duration: duration,
        durationUnit: durationUnit,
        singleUnit: singleUnit,
        optionDefaults: viewDef.defaults,
        optionOverrides: _tslib.__assign(_tslib.__assign({
        }, singleUnitOverrides), viewDef.overrides),
        buttonTextOverride: queryButtonText(dynamicOptionOverrides) || queryButtonText(optionOverrides) || viewDef.overrides.buttonText,
        buttonTextDefault: queryButtonText(localeDefaults) || viewDef.defaults.buttonText || queryButtonText(BASE_OPTION_DEFAULTS) || viewDef.type,
        // not DRY
        buttonTitleOverride: queryButtonTitle(dynamicOptionOverrides) || queryButtonTitle(optionOverrides) || viewDef.overrides.buttonHint,
        buttonTitleDefault: queryButtonTitle(localeDefaults) || viewDef.defaults.buttonHint || queryButtonTitle(BASE_OPTION_DEFAULTS)
    };
}
// hack to get memoization working
var durationInputMap = {
};
function createDurationCached(durationInput) {
    var json = JSON.stringify(durationInput);
    var res = durationInputMap[json];
    if (res === undefined) {
        res = createDuration(durationInput);
        durationInputMap[json] = res;
    }
    return res;
}
var DateProfileGenerator = function() {
    function DateProfileGenerator1(props) {
        this.props = props;
        this.nowDate = getNow(props.nowInput, props.dateEnv);
        this.initHiddenDays();
    }
    /* Date Range Computation
    ------------------------------------------------------------------------------------------------------------------*/ // Builds a structure with info about what the dates/ranges will be for the "prev" view.
    DateProfileGenerator1.prototype.buildPrev = function(currentDateProfile, currentDate, forceToValid) {
        var dateEnv = this.props.dateEnv;
        var prevDate = dateEnv.subtract(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), currentDateProfile.dateIncrement);
        return this.build(prevDate, -1, forceToValid);
    };
    // Builds a structure with info about what the dates/ranges will be for the "next" view.
    DateProfileGenerator1.prototype.buildNext = function(currentDateProfile, currentDate, forceToValid) {
        var dateEnv = this.props.dateEnv;
        var nextDate = dateEnv.add(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), currentDateProfile.dateIncrement);
        return this.build(nextDate, 1, forceToValid);
    };
    // Builds a structure holding dates/ranges for rendering around the given date.
    // Optional direction param indicates whether the date is being incremented/decremented
    // from its previous value. decremented = -1, incremented = 1 (default).
    DateProfileGenerator1.prototype.build = function(currentDate, direction, forceToValid) {
        if (forceToValid === void 0) forceToValid = true;
        var props = this.props;
        var validRange;
        var currentInfo;
        var isRangeAllDay;
        var renderRange;
        var activeRange;
        var isValid;
        validRange = this.buildValidRange();
        validRange = this.trimHiddenDays(validRange);
        if (forceToValid) currentDate = constrainMarkerToRange(currentDate, validRange);
        currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
        isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
        renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
        renderRange = this.trimHiddenDays(renderRange);
        activeRange = renderRange;
        if (!props.showNonCurrentDates) activeRange = intersectRanges(activeRange, currentInfo.range);
        activeRange = this.adjustActiveRange(activeRange);
        activeRange = intersectRanges(activeRange, validRange); // might return null
        // it's invalid if the originally requested date is not contained,
        // or if the range is completely outside of the valid range.
        isValid = rangesIntersect(currentInfo.range, validRange);
        return {
            // constraint for where prev/next operations can go and where events can be dragged/resized to.
            // an object with optional start and end properties.
            validRange: validRange,
            // range the view is formally responsible for.
            // for example, a month view might have 1st-31st, excluding padded dates
            currentRange: currentInfo.range,
            // name of largest unit being displayed, like "month" or "week"
            currentRangeUnit: currentInfo.unit,
            isRangeAllDay: isRangeAllDay,
            // dates that display events and accept drag-n-drop
            // will be `null` if no dates accept events
            activeRange: activeRange,
            // date range with a rendered skeleton
            // includes not-active days that need some sort of DOM
            renderRange: renderRange,
            // Duration object that denotes the first visible time of any given day
            slotMinTime: props.slotMinTime,
            // Duration object that denotes the exclusive visible end time of any given day
            slotMaxTime: props.slotMaxTime,
            isValid: isValid,
            // how far the current date will move for a prev/next operation
            dateIncrement: this.buildDateIncrement(currentInfo.duration)
        };
    };
    // Builds an object with optional start/end properties.
    // Indicates the minimum/maximum dates to display.
    // not responsible for trimming hidden days.
    DateProfileGenerator1.prototype.buildValidRange = function() {
        var input = this.props.validRangeInput;
        var simpleInput = typeof input === 'function' ? input.call(this.props.calendarApi, this.nowDate) : input;
        return this.refineRange(simpleInput) || {
            start: null,
            end: null
        }; // completely open-ended
    };
    // Builds a structure with info about the "current" range, the range that is
    // highlighted as being the current month for example.
    // See build() for a description of `direction`.
    // Guaranteed to have `range` and `unit` properties. `duration` is optional.
    DateProfileGenerator1.prototype.buildCurrentRangeInfo = function(date, direction) {
        var props = this.props;
        var duration = null;
        var unit = null;
        var range = null;
        var dayCount;
        if (props.duration) {
            duration = props.duration;
            unit = props.durationUnit;
            range = this.buildRangeFromDuration(date, direction, duration, unit);
        } else if (dayCount = this.props.dayCount) {
            unit = 'day';
            range = this.buildRangeFromDayCount(date, direction, dayCount);
        } else if (range = this.buildCustomVisibleRange(date)) unit = props.dateEnv.greatestWholeUnit(range.start, range.end).unit;
        else {
            duration = this.getFallbackDuration();
            unit = greatestDurationDenominator(duration).unit;
            range = this.buildRangeFromDuration(date, direction, duration, unit);
        }
        return {
            duration: duration,
            unit: unit,
            range: range
        };
    };
    DateProfileGenerator1.prototype.getFallbackDuration = function() {
        return createDuration({
            day: 1
        });
    };
    // Returns a new activeRange to have time values (un-ambiguate)
    // slotMinTime or slotMaxTime causes the range to expand.
    DateProfileGenerator1.prototype.adjustActiveRange = function(range) {
        var _a = this.props, dateEnv = _a.dateEnv, usesMinMaxTime = _a.usesMinMaxTime, slotMinTime = _a.slotMinTime, slotMaxTime = _a.slotMaxTime;
        var start = range.start, end = range.end;
        if (usesMinMaxTime) {
            // expand active range if slotMinTime is negative (why not when positive?)
            if (asRoughDays(slotMinTime) < 0) {
                start = startOfDay(start); // necessary?
                start = dateEnv.add(start, slotMinTime);
            }
            // expand active range if slotMaxTime is beyond one day (why not when negative?)
            if (asRoughDays(slotMaxTime) > 1) {
                end = startOfDay(end); // necessary?
                end = addDays(end, -1);
                end = dateEnv.add(end, slotMaxTime);
            }
        }
        return {
            start: start,
            end: end
        };
    };
    // Builds the "current" range when it is specified as an explicit duration.
    // `unit` is the already-computed greatestDurationDenominator unit of duration.
    DateProfileGenerator1.prototype.buildRangeFromDuration = function(date, direction, duration, unit) {
        var _a = this.props, dateEnv = _a.dateEnv, dateAlignment = _a.dateAlignment;
        var start;
        var end;
        var res;
        // compute what the alignment should be
        if (!dateAlignment) {
            var dateIncrement = this.props.dateIncrement;
            if (dateIncrement) {
                // use the smaller of the two units
                if (asRoughMs(dateIncrement) < asRoughMs(duration)) dateAlignment = greatestDurationDenominator(dateIncrement).unit;
                else dateAlignment = unit;
            } else dateAlignment = unit;
        }
        // if the view displays a single day or smaller
        if (asRoughDays(duration) <= 1) {
            if (this.isHiddenDay(start)) {
                start = this.skipHiddenDays(start, direction);
                start = startOfDay(start);
            }
        }
        function computeRes() {
            start = dateEnv.startOf(date, dateAlignment);
            end = dateEnv.add(start, duration);
            res = {
                start: start,
                end: end
            };
        }
        computeRes();
        // if range is completely enveloped by hidden days, go past the hidden days
        if (!this.trimHiddenDays(res)) {
            date = this.skipHiddenDays(date, direction);
            computeRes();
        }
        return res;
    };
    // Builds the "current" range when a dayCount is specified.
    DateProfileGenerator1.prototype.buildRangeFromDayCount = function(date, direction, dayCount) {
        var _a = this.props, dateEnv = _a.dateEnv, dateAlignment = _a.dateAlignment;
        var runningCount = 0;
        var start = date;
        var end;
        if (dateAlignment) start = dateEnv.startOf(start, dateAlignment);
        start = startOfDay(start);
        start = this.skipHiddenDays(start, direction);
        end = start;
        do {
            end = addDays(end, 1);
            if (!this.isHiddenDay(end)) runningCount += 1;
        }while (runningCount < dayCount)
        return {
            start: start,
            end: end
        };
    };
    // Builds a normalized range object for the "visible" range,
    // which is a way to define the currentRange and activeRange at the same time.
    DateProfileGenerator1.prototype.buildCustomVisibleRange = function(date) {
        var props = this.props;
        var input = props.visibleRangeInput;
        var simpleInput = typeof input === 'function' ? input.call(props.calendarApi, props.dateEnv.toDate(date)) : input;
        var range = this.refineRange(simpleInput);
        if (range && (range.start == null || range.end == null)) return null;
        return range;
    };
    // Computes the range that will represent the element/cells for *rendering*,
    // but which may have voided days/times.
    // not responsible for trimming hidden days.
    DateProfileGenerator1.prototype.buildRenderRange = function(currentRange, currentRangeUnit, isRangeAllDay) {
        return currentRange;
    };
    // Compute the duration value that should be added/substracted to the current date
    // when a prev/next operation happens.
    DateProfileGenerator1.prototype.buildDateIncrement = function(fallback) {
        var dateIncrement = this.props.dateIncrement;
        var customAlignment;
        if (dateIncrement) return dateIncrement;
        if (customAlignment = this.props.dateAlignment) return createDuration(1, customAlignment);
        if (fallback) return fallback;
        return createDuration({
            days: 1
        });
    };
    DateProfileGenerator1.prototype.refineRange = function(rangeInput) {
        if (rangeInput) {
            var range = parseRange(rangeInput, this.props.dateEnv);
            if (range) range = computeVisibleDayRange(range);
            return range;
        }
        return null;
    };
    /* Hidden Days
    ------------------------------------------------------------------------------------------------------------------*/ // Initializes internal variables related to calculating hidden days-of-week
    DateProfileGenerator1.prototype.initHiddenDays = function() {
        var hiddenDays = this.props.hiddenDays || []; // array of day-of-week indices that are hidden
        var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
        var dayCnt = 0;
        var i;
        if (this.props.weekends === false) hiddenDays.push(0, 6); // 0=sunday, 6=saturday
        for(i = 0; i < 7; i += 1)if (!(isHiddenDayHash[i] = hiddenDays.indexOf(i) !== -1)) dayCnt += 1;
        if (!dayCnt) throw new Error('invalid hiddenDays'); // all days were hidden? bad.
        this.isHiddenDayHash = isHiddenDayHash;
    };
    // Remove days from the beginning and end of the range that are computed as hidden.
    // If the whole range is trimmed off, returns null
    DateProfileGenerator1.prototype.trimHiddenDays = function(range) {
        var start = range.start, end = range.end;
        if (start) start = this.skipHiddenDays(start);
        if (end) end = this.skipHiddenDays(end, -1, true);
        if (start == null || end == null || start < end) return {
            start: start,
            end: end
        };
        return null;
    };
    // Is the current day hidden?
    // `day` is a day-of-week index (0-6), or a Date (used for UTC)
    DateProfileGenerator1.prototype.isHiddenDay = function(day) {
        if (day instanceof Date) day = day.getUTCDay();
        return this.isHiddenDayHash[day];
    };
    // Incrementing the current day until it is no longer a hidden day, returning a copy.
    // DOES NOT CONSIDER validRange!
    // If the initial value of `date` is not a hidden day, don't do anything.
    // Pass `isExclusive` as `true` if you are dealing with an end date.
    // `inc` defaults to `1` (increment one day forward each time)
    DateProfileGenerator1.prototype.skipHiddenDays = function(date, inc, isExclusive) {
        if (inc === void 0) inc = 1;
        if (isExclusive === void 0) isExclusive = false;
        while(this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7])date = addDays(date, inc);
        return date;
    };
    return DateProfileGenerator1;
}();
function reduceViewType(viewType, action) {
    switch(action.type){
        case 'CHANGE_VIEW_TYPE':
            viewType = action.viewType;
    }
    return viewType;
}
function reduceDynamicOptionOverrides(dynamicOptionOverrides, action) {
    var _a;
    switch(action.type){
        case 'SET_OPTION':
            return _tslib.__assign(_tslib.__assign({
            }, dynamicOptionOverrides), (_a = {
            }, _a[action.optionName] = action.rawOptionValue, _a));
        default:
            return dynamicOptionOverrides;
    }
}
function reduceDateProfile(currentDateProfile, action, currentDate, dateProfileGenerator) {
    var dp;
    switch(action.type){
        case 'CHANGE_VIEW_TYPE':
            return dateProfileGenerator.build(action.dateMarker || currentDate);
        case 'CHANGE_DATE':
            return dateProfileGenerator.build(action.dateMarker);
        case 'PREV':
            dp = dateProfileGenerator.buildPrev(currentDateProfile, currentDate);
            if (dp.isValid) return dp;
            break;
        case 'NEXT':
            dp = dateProfileGenerator.buildNext(currentDateProfile, currentDate);
            if (dp.isValid) return dp;
            break;
    }
    return currentDateProfile;
}
function initEventSources(calendarOptions, dateProfile, context) {
    var activeRange = dateProfile ? dateProfile.activeRange : null;
    return addSources({
    }, parseInitialSources(calendarOptions, context), activeRange, context);
}
function reduceEventSources(eventSources, action, dateProfile, context) {
    var activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?
    switch(action.type){
        case 'ADD_EVENT_SOURCES':
            return addSources(eventSources, action.sources, activeRange, context);
        case 'REMOVE_EVENT_SOURCE':
            return removeSource(eventSources, action.sourceId);
        case 'PREV':
        case 'NEXT':
        case 'CHANGE_DATE':
        case 'CHANGE_VIEW_TYPE':
            if (dateProfile) return fetchDirtySources(eventSources, activeRange, context);
            return eventSources;
        case 'FETCH_EVENT_SOURCES':
            return fetchSourcesByIds(eventSources, action.sourceIds ? arrayToHash(action.sourceIds) : excludeStaticSources(eventSources, context), activeRange, action.isRefetch || false, context);
        case 'RECEIVE_EVENTS':
        case 'RECEIVE_EVENT_ERROR':
            return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);
        case 'REMOVE_ALL_EVENT_SOURCES':
            return {
            };
        default:
            return eventSources;
    }
}
function reduceEventSourcesNewTimeZone(eventSources, dateProfile, context) {
    var activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?
    return fetchSourcesByIds(eventSources, excludeStaticSources(eventSources, context), activeRange, true, context);
}
function computeEventSourcesLoading(eventSources) {
    for(var sourceId in eventSources){
        if (eventSources[sourceId].isFetching) return true;
    }
    return false;
}
function addSources(eventSourceHash, sources, fetchRange, context) {
    var hash = {
    };
    for(var _i = 0, sources_1 = sources; _i < sources_1.length; _i++){
        var source = sources_1[_i];
        hash[source.sourceId] = source;
    }
    if (fetchRange) hash = fetchDirtySources(hash, fetchRange, context);
    return _tslib.__assign(_tslib.__assign({
    }, eventSourceHash), hash);
}
function removeSource(eventSourceHash, sourceId) {
    return filterHash(eventSourceHash, function(eventSource) {
        return eventSource.sourceId !== sourceId;
    });
}
function fetchDirtySources(sourceHash, fetchRange, context) {
    return fetchSourcesByIds(sourceHash, filterHash(sourceHash, function(eventSource) {
        return isSourceDirty(eventSource, fetchRange, context);
    }), fetchRange, false, context);
}
function isSourceDirty(eventSource, fetchRange, context) {
    if (!doesSourceNeedRange(eventSource, context)) return !eventSource.latestFetchId;
    return !context.options.lazyFetching || !eventSource.fetchRange || eventSource.isFetching || fetchRange.start < eventSource.fetchRange.start || fetchRange.end > eventSource.fetchRange.end;
}
function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, isRefetch, context) {
    var nextSources = {
    };
    for(var sourceId in prevSources){
        var source = prevSources[sourceId];
        if (sourceIdHash[sourceId]) nextSources[sourceId] = fetchSource(source, fetchRange, isRefetch, context);
        else nextSources[sourceId] = source;
    }
    return nextSources;
}
function fetchSource(eventSource, fetchRange, isRefetch, context) {
    var options = context.options, calendarApi = context.calendarApi;
    var sourceDef = context.pluginHooks.eventSourceDefs[eventSource.sourceDefId];
    var fetchId = guid();
    sourceDef.fetch({
        eventSource: eventSource,
        range: fetchRange,
        isRefetch: isRefetch,
        context: context
    }, function(res) {
        var rawEvents = res.rawEvents;
        if (options.eventSourceSuccess) rawEvents = options.eventSourceSuccess.call(calendarApi, rawEvents, res.xhr) || rawEvents;
        if (eventSource.success) rawEvents = eventSource.success.call(calendarApi, rawEvents, res.xhr) || rawEvents;
        context.dispatch({
            type: 'RECEIVE_EVENTS',
            sourceId: eventSource.sourceId,
            fetchId: fetchId,
            fetchRange: fetchRange,
            rawEvents: rawEvents
        });
    }, function(error) {
        console.warn(error.message, error);
        if (options.eventSourceFailure) options.eventSourceFailure.call(calendarApi, error);
        if (eventSource.failure) eventSource.failure(error);
        context.dispatch({
            type: 'RECEIVE_EVENT_ERROR',
            sourceId: eventSource.sourceId,
            fetchId: fetchId,
            fetchRange: fetchRange,
            error: error
        });
    });
    return _tslib.__assign(_tslib.__assign({
    }, eventSource), {
        isFetching: true,
        latestFetchId: fetchId
    });
}
function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
    var _a;
    var eventSource = sourceHash[sourceId];
    if (eventSource && fetchId === eventSource.latestFetchId) return _tslib.__assign(_tslib.__assign({
    }, sourceHash), (_a = {
    }, _a[sourceId] = _tslib.__assign(_tslib.__assign({
    }, eventSource), {
        isFetching: false,
        fetchRange: fetchRange
    }), _a));
    return sourceHash;
}
function excludeStaticSources(eventSources, context) {
    return filterHash(eventSources, function(eventSource) {
        return doesSourceNeedRange(eventSource, context);
    });
}
function parseInitialSources(rawOptions, context) {
    var refiners = buildEventSourceRefiners(context);
    var rawSources = [].concat(rawOptions.eventSources || []);
    var sources = []; // parsed
    if (rawOptions.initialEvents) rawSources.unshift(rawOptions.initialEvents);
    if (rawOptions.events) rawSources.unshift(rawOptions.events);
    for(var _i = 0, rawSources_1 = rawSources; _i < rawSources_1.length; _i++){
        var rawSource = rawSources_1[_i];
        var source = parseEventSource(rawSource, context, refiners);
        if (source) sources.push(source);
    }
    return sources;
}
function doesSourceNeedRange(eventSource, context) {
    var defs = context.pluginHooks.eventSourceDefs;
    return !defs[eventSource.sourceDefId].ignoreRange;
}
function reduceEventStore(eventStore, action, eventSources, dateProfile, context) {
    switch(action.type){
        case 'RECEIVE_EVENTS':
            return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, context);
        case 'ADD_EVENTS':
            return addEvent(eventStore, action.eventStore, dateProfile ? dateProfile.activeRange : null, context);
        case 'RESET_EVENTS':
            return action.eventStore;
        case 'MERGE_EVENTS':
            return mergeEventStores(eventStore, action.eventStore);
        case 'PREV':
        case 'NEXT':
        case 'CHANGE_DATE':
        case 'CHANGE_VIEW_TYPE':
            if (dateProfile) return expandRecurring(eventStore, dateProfile.activeRange, context);
            return eventStore;
        case 'REMOVE_EVENTS':
            return excludeSubEventStore(eventStore, action.eventStore);
        case 'REMOVE_EVENT_SOURCE':
            return excludeEventsBySourceId(eventStore, action.sourceId);
        case 'REMOVE_ALL_EVENT_SOURCES':
            return filterEventStoreDefs(eventStore, function(eventDef) {
                return !eventDef.sourceId // only keep events with no source id
                ;
            });
        case 'REMOVE_ALL_EVENTS':
            return createEmptyEventStore();
        default:
            return eventStore;
    }
}
function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, context) {
    if (eventSource && fetchId === eventSource.latestFetchId // TODO: wish this logic was always in event-sources
    ) {
        var subset = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context);
        if (fetchRange) subset = expandRecurring(subset, fetchRange, context);
        return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
    }
    return eventStore;
}
function transformRawEvents(rawEvents, eventSource, context) {
    var calEachTransform = context.options.eventDataTransform;
    var sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;
    if (sourceEachTransform) rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
    if (calEachTransform) rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
    return rawEvents;
}
function transformEachRawEvent(rawEvents, func) {
    var refinedEvents;
    if (!func) refinedEvents = rawEvents;
    else {
        refinedEvents = [];
        for(var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++){
            var rawEvent = rawEvents_1[_i];
            var refinedEvent = func(rawEvent);
            if (refinedEvent) refinedEvents.push(refinedEvent);
            else if (refinedEvent == null) refinedEvents.push(rawEvent);
             // if a different falsy value, do nothing
        }
    }
    return refinedEvents;
}
function addEvent(eventStore, subset, expandRange, context) {
    if (expandRange) subset = expandRecurring(subset, expandRange, context);
    return mergeEventStores(eventStore, subset);
}
function rezoneEventStoreDates(eventStore, oldDateEnv, newDateEnv) {
    var defs = eventStore.defs;
    var instances = mapHash(eventStore.instances, function(instance) {
        var def = defs[instance.defId];
        if (def.allDay || def.recurringDef) return instance; // isn't dependent on timezone
        return _tslib.__assign(_tslib.__assign({
        }, instance), {
            range: {
                start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
                end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo))
            },
            forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo,
            forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo
        });
    });
    return {
        defs: defs,
        instances: instances
    };
}
function excludeEventsBySourceId(eventStore, sourceId) {
    return filterEventStoreDefs(eventStore, function(eventDef) {
        return eventDef.sourceId !== sourceId;
    });
}
// QUESTION: why not just return instances? do a general object-property-exclusion util
function excludeInstances(eventStore, removals) {
    return {
        defs: eventStore.defs,
        instances: filterHash(eventStore.instances, function(instance) {
            return !removals[instance.instanceId];
        })
    };
}
function reduceDateSelection(currentSelection, action) {
    switch(action.type){
        case 'UNSELECT_DATES':
            return null;
        case 'SELECT_DATES':
            return action.selection;
        default:
            return currentSelection;
    }
}
function reduceSelectedEvent(currentInstanceId, action) {
    switch(action.type){
        case 'UNSELECT_EVENT':
            return '';
        case 'SELECT_EVENT':
            return action.eventInstanceId;
        default:
            return currentInstanceId;
    }
}
function reduceEventDrag(currentDrag, action) {
    var newDrag;
    switch(action.type){
        case 'UNSET_EVENT_DRAG':
            return null;
        case 'SET_EVENT_DRAG':
            newDrag = action.state;
            return {
                affectedEvents: newDrag.affectedEvents,
                mutatedEvents: newDrag.mutatedEvents,
                isEvent: newDrag.isEvent
            };
        default:
            return currentDrag;
    }
}
function reduceEventResize(currentResize, action) {
    var newResize;
    switch(action.type){
        case 'UNSET_EVENT_RESIZE':
            return null;
        case 'SET_EVENT_RESIZE':
            newResize = action.state;
            return {
                affectedEvents: newResize.affectedEvents,
                mutatedEvents: newResize.mutatedEvents,
                isEvent: newResize.isEvent
            };
        default:
            return currentResize;
    }
}
function parseToolbars(calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
    var header = calendarOptions.headerToolbar ? parseToolbar(calendarOptions.headerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
    var footer = calendarOptions.footerToolbar ? parseToolbar(calendarOptions.footerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
    return {
        header: header,
        footer: footer
    };
}
function parseToolbar(sectionStrHash, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
    var sectionWidgets = {
    };
    var viewsWithButtons = [];
    var hasTitle = false;
    for(var sectionName in sectionStrHash){
        var sectionStr = sectionStrHash[sectionName];
        var sectionRes = parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi);
        sectionWidgets[sectionName] = sectionRes.widgets;
        viewsWithButtons.push.apply(viewsWithButtons, sectionRes.viewsWithButtons);
        hasTitle = hasTitle || sectionRes.hasTitle;
    }
    return {
        sectionWidgets: sectionWidgets,
        viewsWithButtons: viewsWithButtons,
        hasTitle: hasTitle
    };
}
/*
BAD: querying icons and text here. should be done at render time
*/ function parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
    var isRtl = calendarOptions.direction === 'rtl';
    var calendarCustomButtons = calendarOptions.customButtons || {
    };
    var calendarButtonTextOverrides = calendarOptionOverrides.buttonText || {
    };
    var calendarButtonText = calendarOptions.buttonText || {
    };
    var calendarButtonHintOverrides = calendarOptionOverrides.buttonHints || {
    };
    var calendarButtonHints = calendarOptions.buttonHints || {
    };
    var sectionSubstrs = sectionStr ? sectionStr.split(' ') : [];
    var viewsWithButtons = [];
    var hasTitle = false;
    var widgets = sectionSubstrs.map(function(buttonGroupStr) {
        return buttonGroupStr.split(',').map(function(buttonName) {
            if (buttonName === 'title') {
                hasTitle = true;
                return {
                    buttonName: buttonName
                };
            }
            var customButtonProps;
            var viewSpec;
            var buttonClick;
            var buttonIcon; // only one of these will be set
            var buttonText; // "
            var buttonHint;
            // ^ for the title="" attribute, for accessibility
            if (customButtonProps = calendarCustomButtons[buttonName]) {
                buttonClick = function(ev) {
                    if (customButtonProps.click) customButtonProps.click.call(ev.target, ev, ev.target); // TODO: use Calendar this context?
                };
                (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = customButtonProps.text);
                buttonHint = customButtonProps.hint || customButtonProps.text;
            } else if (viewSpec = viewSpecs[buttonName]) {
                viewsWithButtons.push(buttonName);
                buttonClick = function() {
                    calendarApi.changeView(buttonName);
                };
                (buttonText = viewSpec.buttonTextOverride) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = viewSpec.buttonTextDefault);
                var textFallback = viewSpec.buttonTextOverride || viewSpec.buttonTextDefault;
                buttonHint = formatWithOrdinals(viewSpec.buttonTitleOverride || viewSpec.buttonTitleDefault || calendarOptions.viewHint, [
                    textFallback,
                    buttonName
                ], textFallback);
            } else if (calendarApi[buttonName]) {
                buttonClick = function() {
                    calendarApi[buttonName]();
                };
                (buttonText = calendarButtonTextOverrides[buttonName]) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = calendarButtonText[buttonName]); // everything else is considered default
                if (buttonName === 'prevYear' || buttonName === 'nextYear') {
                    var prevOrNext = buttonName === 'prevYear' ? 'prev' : 'next';
                    buttonHint = formatWithOrdinals(calendarButtonHintOverrides[prevOrNext] || calendarButtonHints[prevOrNext], [
                        calendarButtonText.year || 'year',
                        'year', 
                    ], calendarButtonText[buttonName]);
                } else buttonHint = function(navUnit) {
                    return formatWithOrdinals(calendarButtonHintOverrides[buttonName] || calendarButtonHints[buttonName], [
                        calendarButtonText[navUnit] || navUnit,
                        navUnit, 
                    ], calendarButtonText[buttonName]);
                };
            }
            return {
                buttonName: buttonName,
                buttonClick: buttonClick,
                buttonIcon: buttonIcon,
                buttonText: buttonText,
                buttonHint: buttonHint
            };
        });
    });
    return {
        widgets: widgets,
        viewsWithButtons: viewsWithButtons,
        hasTitle: hasTitle
    };
}
var eventSourceDef$2 = {
    ignoreRange: true,
    parseMeta: function(refined) {
        if (Array.isArray(refined.events)) return refined.events;
        return null;
    },
    fetch: function(arg, success) {
        success({
            rawEvents: arg.eventSource.meta
        });
    }
};
var arrayEventSourcePlugin = createPlugin({
    eventSourceDefs: [
        eventSourceDef$2
    ]
});
var eventSourceDef$1 = {
    parseMeta: function(refined) {
        if (typeof refined.events === 'function') return refined.events;
        return null;
    },
    fetch: function(arg, success, failure) {
        var dateEnv = arg.context.dateEnv;
        var func = arg.eventSource.meta;
        unpromisify(func.bind(null, buildRangeApiWithTimeZone(arg.range, dateEnv)), function(rawEvents) {
            success({
                rawEvents: rawEvents
            }); // needs an object response
        }, failure);
    }
};
var funcEventSourcePlugin = createPlugin({
    eventSourceDefs: [
        eventSourceDef$1
    ]
});
function requestJson(method, url, params, successCallback, failureCallback) {
    method = method.toUpperCase();
    var body = null;
    if (method === 'GET') url = injectQueryStringParams(url, params);
    else body = encodeParams(params);
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    if (method !== 'GET') xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            var parsed = false;
            var res = void 0;
            try {
                res = JSON.parse(xhr.responseText);
                parsed = true;
            } catch (err) {
            // will handle parsed=false
            }
            if (parsed) successCallback(res, xhr);
            else failureCallback('Failure parsing JSON', xhr);
        } else failureCallback('Request failed', xhr);
    };
    xhr.onerror = function() {
        failureCallback('Request failed', xhr);
    };
    xhr.send(body);
}
function injectQueryStringParams(url, params) {
    return url + (url.indexOf('?') === -1 ? '?' : '&') + encodeParams(params);
}
function encodeParams(params) {
    var parts = [];
    for(var key in params)parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
    return parts.join('&');
}
var JSON_FEED_EVENT_SOURCE_REFINERS = {
    method: String,
    extraParams: identity,
    startParam: String,
    endParam: String,
    timeZoneParam: String
};
var eventSourceDef = {
    parseMeta: function(refined) {
        if (refined.url && (refined.format === 'json' || !refined.format)) return {
            url: refined.url,
            format: 'json',
            method: (refined.method || 'GET').toUpperCase(),
            extraParams: refined.extraParams,
            startParam: refined.startParam,
            endParam: refined.endParam,
            timeZoneParam: refined.timeZoneParam
        };
        return null;
    },
    fetch: function(arg, success, failure) {
        var meta = arg.eventSource.meta;
        var requestParams = buildRequestParams(meta, arg.range, arg.context);
        requestJson(meta.method, meta.url, requestParams, function(rawEvents, xhr) {
            success({
                rawEvents: rawEvents,
                xhr: xhr
            });
        }, function(errorMessage, xhr) {
            failure({
                message: errorMessage,
                xhr: xhr
            });
        });
    }
};
var jsonFeedEventSourcePlugin = createPlugin({
    eventSourceRefiners: JSON_FEED_EVENT_SOURCE_REFINERS,
    eventSourceDefs: [
        eventSourceDef
    ]
});
function buildRequestParams(meta, range, context) {
    var dateEnv = context.dateEnv, options = context.options;
    var startParam;
    var endParam;
    var timeZoneParam;
    var customRequestParams;
    var params = {
    };
    startParam = meta.startParam;
    if (startParam == null) startParam = options.startParam;
    endParam = meta.endParam;
    if (endParam == null) endParam = options.endParam;
    timeZoneParam = meta.timeZoneParam;
    if (timeZoneParam == null) timeZoneParam = options.timeZoneParam;
    // retrieve any outbound GET/POST data from the options
    if (typeof meta.extraParams === 'function') // supplied as a function that returns a key/value object
    customRequestParams = meta.extraParams();
    else // probably supplied as a straight key/value object
    customRequestParams = meta.extraParams || {
    };
    _tslib.__assign(params, customRequestParams);
    params[startParam] = dateEnv.formatIso(range.start);
    params[endParam] = dateEnv.formatIso(range.end);
    if (dateEnv.timeZone !== 'local') params[timeZoneParam] = dateEnv.timeZone;
    return params;
}
var SIMPLE_RECURRING_REFINERS = {
    daysOfWeek: identity,
    startTime: createDuration,
    endTime: createDuration,
    duration: createDuration,
    startRecur: identity,
    endRecur: identity
};
var recurring = {
    parse: function(refined, dateEnv) {
        if (refined.daysOfWeek || refined.startTime || refined.endTime || refined.startRecur || refined.endRecur) {
            var recurringData = {
                daysOfWeek: refined.daysOfWeek || null,
                startTime: refined.startTime || null,
                endTime: refined.endTime || null,
                startRecur: refined.startRecur ? dateEnv.createMarker(refined.startRecur) : null,
                endRecur: refined.endRecur ? dateEnv.createMarker(refined.endRecur) : null
            };
            var duration = void 0;
            if (refined.duration) duration = refined.duration;
            if (!duration && refined.startTime && refined.endTime) duration = subtractDurations(refined.endTime, refined.startTime);
            return {
                allDayGuess: Boolean(!refined.startTime && !refined.endTime),
                duration: duration,
                typeData: recurringData
            };
        }
        return null;
    },
    expand: function(typeData, framingRange, dateEnv) {
        var clippedFramingRange = intersectRanges(framingRange, {
            start: typeData.startRecur,
            end: typeData.endRecur
        });
        if (clippedFramingRange) return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
        return [];
    }
};
var simpleRecurringEventsPlugin = createPlugin({
    recurringTypes: [
        recurring
    ],
    eventRefiners: SIMPLE_RECURRING_REFINERS
});
function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
    var dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
    var dayMarker = startOfDay(framingRange.start);
    var endMarker = framingRange.end;
    var instanceStarts = [];
    while(dayMarker < endMarker){
        var instanceStart = void 0;
        // if everyday, or this particular day-of-week
        if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
            if (startTime) instanceStart = dateEnv.add(dayMarker, startTime);
            else instanceStart = dayMarker;
            instanceStarts.push(instanceStart);
        }
        dayMarker = addDays(dayMarker, 1);
    }
    return instanceStarts;
}
var changeHandlerPlugin = createPlugin({
    optionChangeHandlers: {
        events: function(events, context) {
            handleEventSources([
                events
            ], context);
        },
        eventSources: handleEventSources
    }
});
/*
BUG: if `event` was supplied, all previously-given `eventSources` will be wiped out
*/ function handleEventSources(inputs, context) {
    var unfoundSources = hashValuesToArray(context.getCurrentData().eventSources);
    var newInputs = [];
    for(var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++){
        var input = inputs_1[_i];
        var inputFound = false;
        for(var i = 0; i < unfoundSources.length; i += 1)if (unfoundSources[i]._raw === input) {
            unfoundSources.splice(i, 1); // delete
            inputFound = true;
            break;
        }
        if (!inputFound) newInputs.push(input);
    }
    for(var _a = 0, unfoundSources_1 = unfoundSources; _a < unfoundSources_1.length; _a++){
        var unfoundSource = unfoundSources_1[_a];
        context.dispatch({
            type: 'REMOVE_EVENT_SOURCE',
            sourceId: unfoundSource.sourceId
        });
    }
    for(var _b = 0, newInputs_1 = newInputs; _b < newInputs_1.length; _b++){
        var newInput = newInputs_1[_b];
        context.calendarApi.addEventSource(newInput);
    }
}
function handleDateProfile(dateProfile, context) {
    context.emitter.trigger('datesSet', _tslib.__assign(_tslib.__assign({
    }, buildRangeApiWithTimeZone(dateProfile.activeRange, context.dateEnv)), {
        view: context.viewApi
    }));
}
function handleEventStore(eventStore, context) {
    var emitter = context.emitter;
    if (emitter.hasHandlers('eventsSet')) emitter.trigger('eventsSet', buildEventApis(eventStore, context));
}
/*
this array is exposed on the root namespace so that UMD plugins can add to it.
see the rollup-bundles script.
*/ var globalPlugins = [
    arrayEventSourcePlugin,
    funcEventSourcePlugin,
    jsonFeedEventSourcePlugin,
    simpleRecurringEventsPlugin,
    changeHandlerPlugin,
    createPlugin({
        isLoadingFuncs: [
            function(state) {
                return computeEventSourcesLoading(state.eventSources);
            }, 
        ],
        contentTypeHandlers: {
            html: buildHtmlRenderer,
            domNodes: buildDomNodeRenderer
        },
        propSetHandlers: {
            dateProfile: handleDateProfile,
            eventStore: handleEventStore
        }
    }), 
];
function buildHtmlRenderer() {
    var currentEl = null;
    var currentHtml = '';
    function render(el, html) {
        if (el !== currentEl || html !== currentHtml) el.innerHTML = html;
        currentEl = el;
        currentHtml = html;
    }
    function destroy() {
        currentEl.innerHTML = '';
        currentEl = null;
        currentHtml = '';
    }
    return {
        render: render,
        destroy: destroy
    };
}
function buildDomNodeRenderer() {
    var currentEl = null;
    var currentDomNodes = [];
    function render(el, domNodes) {
        var newDomNodes = Array.prototype.slice.call(domNodes);
        if (el !== currentEl || !isArraysEqual(currentDomNodes, newDomNodes)) {
            // append first, remove second (for scroll resetting)
            for(var _i = 0, newDomNodes_1 = newDomNodes; _i < newDomNodes_1.length; _i++){
                var newNode = newDomNodes_1[_i];
                el.appendChild(newNode);
            }
            destroy();
        }
        currentEl = el;
        currentDomNodes = newDomNodes;
    }
    function destroy() {
        currentDomNodes.forEach(removeElement);
        currentDomNodes = [];
        currentEl = null;
    }
    return {
        render: render,
        destroy: destroy
    };
}
var DelayedRunner = function() {
    function DelayedRunner1(drainedOption) {
        this.drainedOption = drainedOption;
        this.isRunning = false;
        this.isDirty = false;
        this.pauseDepths = {
        };
        this.timeoutId = 0;
    }
    DelayedRunner1.prototype.request = function(delay) {
        this.isDirty = true;
        if (!this.isPaused()) {
            this.clearTimeout();
            if (delay == null) this.tryDrain();
            else this.timeoutId = setTimeout(this.tryDrain.bind(this), delay);
        }
    };
    DelayedRunner1.prototype.pause = function(scope) {
        if (scope === void 0) scope = '';
        var pauseDepths = this.pauseDepths;
        pauseDepths[scope] = (pauseDepths[scope] || 0) + 1;
        this.clearTimeout();
    };
    DelayedRunner1.prototype.resume = function(scope, force) {
        if (scope === void 0) scope = '';
        var pauseDepths = this.pauseDepths;
        if (scope in pauseDepths) {
            if (force) delete pauseDepths[scope];
            else {
                pauseDepths[scope] -= 1;
                var depth = pauseDepths[scope];
                if (depth <= 0) delete pauseDepths[scope];
            }
            this.tryDrain();
        }
    };
    DelayedRunner1.prototype.isPaused = function() {
        return Object.keys(this.pauseDepths).length;
    };
    DelayedRunner1.prototype.tryDrain = function() {
        if (!this.isRunning && !this.isPaused()) {
            this.isRunning = true;
            while(this.isDirty){
                this.isDirty = false;
                this.drained(); // might set isDirty to true again
            }
            this.isRunning = false;
        }
    };
    DelayedRunner1.prototype.clear = function() {
        this.clearTimeout();
        this.isDirty = false;
        this.pauseDepths = {
        };
    };
    DelayedRunner1.prototype.clearTimeout = function() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = 0;
        }
    };
    DelayedRunner1.prototype.drained = function() {
        if (this.drainedOption) this.drainedOption();
    };
    return DelayedRunner1;
}();
var TaskRunner = function() {
    function TaskRunner1(runTaskOption, drainedOption) {
        this.runTaskOption = runTaskOption;
        this.drainedOption = drainedOption;
        this.queue = [];
        this.delayedRunner = new DelayedRunner(this.drain.bind(this));
    }
    TaskRunner1.prototype.request = function(task, delay) {
        this.queue.push(task);
        this.delayedRunner.request(delay);
    };
    TaskRunner1.prototype.pause = function(scope) {
        this.delayedRunner.pause(scope);
    };
    TaskRunner1.prototype.resume = function(scope, force) {
        this.delayedRunner.resume(scope, force);
    };
    TaskRunner1.prototype.drain = function() {
        var queue = this.queue;
        while(queue.length){
            var completedTasks = [];
            var task = void 0;
            while(task = queue.shift()){
                this.runTask(task);
                completedTasks.push(task);
            }
            this.drained(completedTasks);
        } // keep going, in case new tasks were added in the drained handler
    };
    TaskRunner1.prototype.runTask = function(task) {
        if (this.runTaskOption) this.runTaskOption(task);
    };
    TaskRunner1.prototype.drained = function(completedTasks) {
        if (this.drainedOption) this.drainedOption(completedTasks);
    };
    return TaskRunner1;
}();
// Computes what the title at the top of the calendarApi should be for this view
function buildTitle(dateProfile, viewOptions, dateEnv) {
    var range;
    // for views that span a large unit of time, show the proper interval, ignoring stray days before and after
    if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) range = dateProfile.currentRange;
    else range = dateProfile.activeRange;
    return dateEnv.formatRange(range.start, range.end, createFormatter(viewOptions.titleFormat || buildTitleFormat(dateProfile)), {
        isEndExclusive: dateProfile.isRangeAllDay,
        defaultSeparator: viewOptions.titleRangeSeparator
    });
}
// Generates the format string that should be used to generate the title for the current date range.
// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
function buildTitleFormat(dateProfile) {
    var currentRangeUnit = dateProfile.currentRangeUnit;
    if (currentRangeUnit === 'year') return {
        year: 'numeric'
    };
    if (currentRangeUnit === 'month') return {
        year: 'numeric',
        month: 'long'
    }; // like "September 2014"
    var days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);
    if (days !== null && days > 1) // multi-day range. shorter, like "Sep 9 - 10 2014"
    return {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    // one day. longer, like "September 9 2014"
    return {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
}
// in future refactor, do the redux-style function(state=initial) for initial-state
// also, whatever is happening in constructor, have it happen in action queue too
var CalendarDataManager = function() {
    function CalendarDataManager1(props) {
        var _this = this;
        this.computeOptionsData = memoize(this._computeOptionsData);
        this.computeCurrentViewData = memoize(this._computeCurrentViewData);
        this.organizeRawLocales = memoize(organizeRawLocales);
        this.buildLocale = memoize(buildLocale);
        this.buildPluginHooks = buildBuildPluginHooks();
        this.buildDateEnv = memoize(buildDateEnv);
        this.buildTheme = memoize(buildTheme);
        this.parseToolbars = memoize(parseToolbars);
        this.buildViewSpecs = memoize(buildViewSpecs);
        this.buildDateProfileGenerator = memoizeObjArg(buildDateProfileGenerator);
        this.buildViewApi = memoize(buildViewApi);
        this.buildViewUiProps = memoizeObjArg(buildViewUiProps);
        this.buildEventUiBySource = memoize(buildEventUiBySource, isPropsEqual);
        this.buildEventUiBases = memoize(buildEventUiBases);
        this.parseContextBusinessHours = memoizeObjArg(parseContextBusinessHours);
        this.buildTitle = memoize(buildTitle);
        this.emitter = new Emitter();
        this.actionRunner = new TaskRunner(this._handleAction.bind(this), this.updateData.bind(this));
        this.currentCalendarOptionsInput = {
        };
        this.currentCalendarOptionsRefined = {
        };
        this.currentViewOptionsInput = {
        };
        this.currentViewOptionsRefined = {
        };
        this.currentCalendarOptionsRefiners = {
        };
        this.getCurrentData = function() {
            return _this.data;
        };
        this.dispatch = function(action) {
            _this.actionRunner.request(action); // protects against recursive calls to _handleAction
        };
        this.props = props;
        this.actionRunner.pause();
        var dynamicOptionOverrides = {
        };
        var optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
        var currentViewType = optionsData.calendarOptions.initialView || optionsData.pluginHooks.initialView;
        var currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
        // wire things up
        // TODO: not DRY
        props.calendarApi.currentDataManager = this;
        this.emitter.setThisContext(props.calendarApi);
        this.emitter.setOptions(currentViewData.options);
        var currentDate = getInitialDate(optionsData.calendarOptions, optionsData.dateEnv);
        var dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
        if (!rangeContainsMarker(dateProfile.activeRange, currentDate)) currentDate = dateProfile.currentRange.start;
        var calendarContext = {
            dateEnv: optionsData.dateEnv,
            options: optionsData.calendarOptions,
            pluginHooks: optionsData.pluginHooks,
            calendarApi: props.calendarApi,
            dispatch: this.dispatch,
            emitter: this.emitter,
            getCurrentData: this.getCurrentData
        };
        // needs to be after setThisContext
        for(var _i = 0, _a = optionsData.pluginHooks.contextInit; _i < _a.length; _i++){
            var callback = _a[_i];
            callback(calendarContext);
        }
        // NOT DRY
        var eventSources = initEventSources(optionsData.calendarOptions, dateProfile, calendarContext);
        var initialState = {
            dynamicOptionOverrides: dynamicOptionOverrides,
            currentViewType: currentViewType,
            currentDate: currentDate,
            dateProfile: dateProfile,
            businessHours: this.parseContextBusinessHours(calendarContext),
            eventSources: eventSources,
            eventUiBases: {
            },
            eventStore: createEmptyEventStore(),
            renderableEventStore: createEmptyEventStore(),
            dateSelection: null,
            eventSelection: '',
            eventDrag: null,
            eventResize: null,
            selectionConfig: this.buildViewUiProps(calendarContext).selectionConfig
        };
        var contextAndState = _tslib.__assign(_tslib.__assign({
        }, calendarContext), initialState);
        for(var _b = 0, _c = optionsData.pluginHooks.reducers; _b < _c.length; _b++){
            var reducer = _c[_b];
            _tslib.__assign(initialState, reducer(null, null, contextAndState));
        }
        if (computeIsLoading(initialState, calendarContext)) this.emitter.trigger('loading', true); // NOT DRY
        this.state = initialState;
        this.updateData();
        this.actionRunner.resume();
    }
    CalendarDataManager1.prototype.resetOptions = function(optionOverrides, append) {
        var props = this.props;
        props.optionOverrides = append ? _tslib.__assign(_tslib.__assign({
        }, props.optionOverrides), optionOverrides) : optionOverrides;
        this.actionRunner.request({
            type: 'NOTHING'
        });
    };
    CalendarDataManager1.prototype._handleAction = function(action) {
        var _a = this, props = _a.props, state = _a.state, emitter = _a.emitter;
        var dynamicOptionOverrides = reduceDynamicOptionOverrides(state.dynamicOptionOverrides, action);
        var optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
        var currentViewType = reduceViewType(state.currentViewType, action);
        var currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
        // wire things up
        // TODO: not DRY
        props.calendarApi.currentDataManager = this;
        emitter.setThisContext(props.calendarApi);
        emitter.setOptions(currentViewData.options);
        var calendarContext = {
            dateEnv: optionsData.dateEnv,
            options: optionsData.calendarOptions,
            pluginHooks: optionsData.pluginHooks,
            calendarApi: props.calendarApi,
            dispatch: this.dispatch,
            emitter: emitter,
            getCurrentData: this.getCurrentData
        };
        var currentDate = state.currentDate, dateProfile = state.dateProfile;
        if (this.data && this.data.dateProfileGenerator !== currentViewData.dateProfileGenerator) dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
        currentDate = reduceCurrentDate(currentDate, action);
        dateProfile = reduceDateProfile(dateProfile, action, currentDate, currentViewData.dateProfileGenerator);
        if (action.type === 'PREV' || action.type === 'NEXT' || !rangeContainsMarker(dateProfile.currentRange, currentDate)) currentDate = dateProfile.currentRange.start;
        var eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendarContext);
        var eventStore = reduceEventStore(state.eventStore, action, eventSources, dateProfile, calendarContext);
        var isEventsLoading = computeEventSourcesLoading(eventSources); // BAD. also called in this func in computeIsLoading
        var renderableEventStore = isEventsLoading && !currentViewData.options.progressiveEventRendering ? state.renderableEventStore || eventStore : eventStore;
        var _b = this.buildViewUiProps(calendarContext), eventUiSingleBase = _b.eventUiSingleBase, selectionConfig = _b.selectionConfig; // will memoize obj
        var eventUiBySource = this.buildEventUiBySource(eventSources);
        var eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
        var newState = {
            dynamicOptionOverrides: dynamicOptionOverrides,
            currentViewType: currentViewType,
            currentDate: currentDate,
            dateProfile: dateProfile,
            eventSources: eventSources,
            eventStore: eventStore,
            renderableEventStore: renderableEventStore,
            selectionConfig: selectionConfig,
            eventUiBases: eventUiBases,
            businessHours: this.parseContextBusinessHours(calendarContext),
            dateSelection: reduceDateSelection(state.dateSelection, action),
            eventSelection: reduceSelectedEvent(state.eventSelection, action),
            eventDrag: reduceEventDrag(state.eventDrag, action),
            eventResize: reduceEventResize(state.eventResize, action)
        };
        var contextAndState = _tslib.__assign(_tslib.__assign({
        }, calendarContext), newState);
        for(var _i = 0, _c = optionsData.pluginHooks.reducers; _i < _c.length; _i++){
            var reducer = _c[_i];
            _tslib.__assign(newState, reducer(state, action, contextAndState)); // give the OLD state, for old value
        }
        var wasLoading = computeIsLoading(state, calendarContext);
        var isLoading = computeIsLoading(newState, calendarContext);
        // TODO: use propSetHandlers in plugin system
        if (!wasLoading && isLoading) emitter.trigger('loading', true);
        else if (wasLoading && !isLoading) emitter.trigger('loading', false);
        this.state = newState;
        if (props.onAction) props.onAction(action);
    };
    CalendarDataManager1.prototype.updateData = function() {
        var _a = this, props = _a.props, state = _a.state;
        var oldData = this.data;
        var optionsData = this.computeOptionsData(props.optionOverrides, state.dynamicOptionOverrides, props.calendarApi);
        var currentViewData = this.computeCurrentViewData(state.currentViewType, optionsData, props.optionOverrides, state.dynamicOptionOverrides);
        var data = this.data = _tslib.__assign(_tslib.__assign(_tslib.__assign({
            viewTitle: this.buildTitle(state.dateProfile, currentViewData.options, optionsData.dateEnv),
            calendarApi: props.calendarApi,
            dispatch: this.dispatch,
            emitter: this.emitter,
            getCurrentData: this.getCurrentData
        }, optionsData), currentViewData), state);
        var changeHandlers = optionsData.pluginHooks.optionChangeHandlers;
        var oldCalendarOptions = oldData && oldData.calendarOptions;
        var newCalendarOptions = optionsData.calendarOptions;
        if (oldCalendarOptions && oldCalendarOptions !== newCalendarOptions) {
            if (oldCalendarOptions.timeZone !== newCalendarOptions.timeZone) {
                // hack
                state.eventSources = data.eventSources = reduceEventSourcesNewTimeZone(data.eventSources, state.dateProfile, data);
                state.eventStore = data.eventStore = rezoneEventStoreDates(data.eventStore, oldData.dateEnv, data.dateEnv);
            }
            for(var optionName in changeHandlers)if (oldCalendarOptions[optionName] !== newCalendarOptions[optionName]) changeHandlers[optionName](newCalendarOptions[optionName], data);
        }
        if (props.onData) props.onData(data);
    };
    CalendarDataManager1.prototype._computeOptionsData = function(optionOverrides, dynamicOptionOverrides, calendarApi) {
        // TODO: blacklist options that are handled by optionChangeHandlers
        var _a = this.processRawCalendarOptions(optionOverrides, dynamicOptionOverrides), refinedOptions = _a.refinedOptions, pluginHooks = _a.pluginHooks, localeDefaults = _a.localeDefaults, availableLocaleData = _a.availableLocaleData, extra = _a.extra;
        warnUnknownOptions(extra);
        var dateEnv = this.buildDateEnv(refinedOptions.timeZone, refinedOptions.locale, refinedOptions.weekNumberCalculation, refinedOptions.firstDay, refinedOptions.weekText, pluginHooks, availableLocaleData, refinedOptions.defaultRangeSeparator);
        var viewSpecs = this.buildViewSpecs(pluginHooks.views, optionOverrides, dynamicOptionOverrides, localeDefaults);
        var theme = this.buildTheme(refinedOptions, pluginHooks);
        var toolbarConfig = this.parseToolbars(refinedOptions, optionOverrides, theme, viewSpecs, calendarApi);
        return {
            calendarOptions: refinedOptions,
            pluginHooks: pluginHooks,
            dateEnv: dateEnv,
            viewSpecs: viewSpecs,
            theme: theme,
            toolbarConfig: toolbarConfig,
            localeDefaults: localeDefaults,
            availableRawLocales: availableLocaleData.map
        };
    };
    // always called from behind a memoizer
    CalendarDataManager1.prototype.processRawCalendarOptions = function(optionOverrides, dynamicOptionOverrides) {
        var _a = mergeRawOptions([
            BASE_OPTION_DEFAULTS,
            optionOverrides,
            dynamicOptionOverrides, 
        ]), locales = _a.locales, locale = _a.locale;
        var availableLocaleData = this.organizeRawLocales(locales);
        var availableRawLocales = availableLocaleData.map;
        var localeDefaults = this.buildLocale(locale || availableLocaleData.defaultCode, availableRawLocales).options;
        var pluginHooks = this.buildPluginHooks(optionOverrides.plugins || [], globalPlugins);
        var refiners = this.currentCalendarOptionsRefiners = _tslib.__assign(_tslib.__assign(_tslib.__assign(_tslib.__assign(_tslib.__assign({
        }, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
        var extra = {
        };
        var raw = mergeRawOptions([
            BASE_OPTION_DEFAULTS,
            localeDefaults,
            optionOverrides,
            dynamicOptionOverrides, 
        ]);
        var refined = {
        };
        var currentRaw = this.currentCalendarOptionsInput;
        var currentRefined = this.currentCalendarOptionsRefined;
        var anyChanges = false;
        for(var optionName in raw)if (optionName !== 'plugins') {
            if (raw[optionName] === currentRaw[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && optionName in currentRaw && COMPLEX_OPTION_COMPARATORS[optionName](currentRaw[optionName], raw[optionName])) refined[optionName] = currentRefined[optionName];
            else if (refiners[optionName]) {
                refined[optionName] = refiners[optionName](raw[optionName]);
                anyChanges = true;
            } else extra[optionName] = currentRaw[optionName];
        }
        if (anyChanges) {
            this.currentCalendarOptionsInput = raw;
            this.currentCalendarOptionsRefined = refined;
        }
        return {
            rawOptions: this.currentCalendarOptionsInput,
            refinedOptions: this.currentCalendarOptionsRefined,
            pluginHooks: pluginHooks,
            availableLocaleData: availableLocaleData,
            localeDefaults: localeDefaults,
            extra: extra
        };
    };
    CalendarDataManager1.prototype._computeCurrentViewData = function(viewType, optionsData, optionOverrides, dynamicOptionOverrides) {
        var viewSpec = optionsData.viewSpecs[viewType];
        if (!viewSpec) throw new Error("viewType \"" + viewType + "\" is not available. Please make sure you've loaded all neccessary plugins");
        var _a = this.processRawViewOptions(viewSpec, optionsData.pluginHooks, optionsData.localeDefaults, optionOverrides, dynamicOptionOverrides), refinedOptions = _a.refinedOptions, extra = _a.extra;
        warnUnknownOptions(extra);
        var dateProfileGenerator = this.buildDateProfileGenerator({
            dateProfileGeneratorClass: viewSpec.optionDefaults.dateProfileGeneratorClass,
            duration: viewSpec.duration,
            durationUnit: viewSpec.durationUnit,
            usesMinMaxTime: viewSpec.optionDefaults.usesMinMaxTime,
            dateEnv: optionsData.dateEnv,
            calendarApi: this.props.calendarApi,
            slotMinTime: refinedOptions.slotMinTime,
            slotMaxTime: refinedOptions.slotMaxTime,
            showNonCurrentDates: refinedOptions.showNonCurrentDates,
            dayCount: refinedOptions.dayCount,
            dateAlignment: refinedOptions.dateAlignment,
            dateIncrement: refinedOptions.dateIncrement,
            hiddenDays: refinedOptions.hiddenDays,
            weekends: refinedOptions.weekends,
            nowInput: refinedOptions.now,
            validRangeInput: refinedOptions.validRange,
            visibleRangeInput: refinedOptions.visibleRange,
            monthMode: refinedOptions.monthMode,
            fixedWeekCount: refinedOptions.fixedWeekCount
        });
        var viewApi = this.buildViewApi(viewType, this.getCurrentData, optionsData.dateEnv);
        return {
            viewSpec: viewSpec,
            options: refinedOptions,
            dateProfileGenerator: dateProfileGenerator,
            viewApi: viewApi
        };
    };
    CalendarDataManager1.prototype.processRawViewOptions = function(viewSpec, pluginHooks, localeDefaults, optionOverrides, dynamicOptionOverrides) {
        var raw = mergeRawOptions([
            BASE_OPTION_DEFAULTS,
            viewSpec.optionDefaults,
            localeDefaults,
            optionOverrides,
            viewSpec.optionOverrides,
            dynamicOptionOverrides, 
        ]);
        var refiners = _tslib.__assign(_tslib.__assign(_tslib.__assign(_tslib.__assign(_tslib.__assign(_tslib.__assign({
        }, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), VIEW_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
        var refined = {
        };
        var currentRaw = this.currentViewOptionsInput;
        var currentRefined = this.currentViewOptionsRefined;
        var anyChanges = false;
        var extra = {
        };
        for(var optionName in raw)if (raw[optionName] === currentRaw[optionName]) refined[optionName] = currentRefined[optionName];
        else {
            if (raw[optionName] === this.currentCalendarOptionsInput[optionName]) {
                if (optionName in this.currentCalendarOptionsRefined) refined[optionName] = this.currentCalendarOptionsRefined[optionName];
            } else if (refiners[optionName]) refined[optionName] = refiners[optionName](raw[optionName]);
            else extra[optionName] = raw[optionName];
            anyChanges = true;
        }
        if (anyChanges) {
            this.currentViewOptionsInput = raw;
            this.currentViewOptionsRefined = refined;
        }
        return {
            rawOptions: this.currentViewOptionsInput,
            refinedOptions: this.currentViewOptionsRefined,
            extra: extra
        };
    };
    return CalendarDataManager1;
}();
function buildDateEnv(timeZone, explicitLocale, weekNumberCalculation, firstDay, weekText, pluginHooks, availableLocaleData, defaultSeparator) {
    var locale = buildLocale(explicitLocale || availableLocaleData.defaultCode, availableLocaleData.map);
    return new DateEnv({
        calendarSystem: 'gregory',
        timeZone: timeZone,
        namedTimeZoneImpl: pluginHooks.namedTimeZonedImpl,
        locale: locale,
        weekNumberCalculation: weekNumberCalculation,
        firstDay: firstDay,
        weekText: weekText,
        cmdFormatter: pluginHooks.cmdFormatter,
        defaultSeparator: defaultSeparator
    });
}
function buildTheme(options, pluginHooks) {
    var ThemeClass = pluginHooks.themeClasses[options.themeSystem] || StandardTheme;
    return new ThemeClass(options);
}
function buildDateProfileGenerator(props) {
    var DateProfileGeneratorClass = props.dateProfileGeneratorClass || DateProfileGenerator;
    return new DateProfileGeneratorClass(props);
}
function buildViewApi(type, getCurrentData, dateEnv) {
    return new ViewApi(type, getCurrentData, dateEnv);
}
function buildEventUiBySource(eventSources) {
    return mapHash(eventSources, function(eventSource) {
        return eventSource.ui;
    });
}
function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
    var eventUiBases = {
        '': eventUiSingleBase
    };
    for(var defId in eventDefs){
        var def = eventDefs[defId];
        if (def.sourceId && eventUiBySource[def.sourceId]) eventUiBases[defId] = eventUiBySource[def.sourceId];
    }
    return eventUiBases;
}
function buildViewUiProps(calendarContext) {
    var options = calendarContext.options;
    return {
        eventUiSingleBase: createEventUi({
            display: options.eventDisplay,
            editable: options.editable,
            startEditable: options.eventStartEditable,
            durationEditable: options.eventDurationEditable,
            constraint: options.eventConstraint,
            overlap: typeof options.eventOverlap === 'boolean' ? options.eventOverlap : undefined,
            allow: options.eventAllow,
            backgroundColor: options.eventBackgroundColor,
            borderColor: options.eventBorderColor,
            textColor: options.eventTextColor,
            color: options.eventColor
        }, calendarContext),
        selectionConfig: createEventUi({
            constraint: options.selectConstraint,
            overlap: typeof options.selectOverlap === 'boolean' ? options.selectOverlap : undefined,
            allow: options.selectAllow
        }, calendarContext)
    };
}
function computeIsLoading(state, context) {
    for(var _i = 0, _a = context.pluginHooks.isLoadingFuncs; _i < _a.length; _i++){
        var isLoadingFunc = _a[_i];
        if (isLoadingFunc(state)) return true;
    }
    return false;
}
function parseContextBusinessHours(calendarContext) {
    return parseBusinessHours(calendarContext.options.businessHours, calendarContext);
}
function warnUnknownOptions(options, viewName) {
    for(var optionName in options)console.warn("Unknown option '" + optionName + "'" + (viewName ? " for view '" + viewName + "'" : ''));
}
// TODO: move this to react plugin?
var CalendarDataProvider = function(_super) {
    _tslib.__extends(CalendarDataProvider1, _super);
    function CalendarDataProvider1(props) {
        var _this = _super.call(this, props) || this;
        _this.handleData = function(data) {
            if (!_this.dataManager) // eslint-disable-next-line react/no-direct-mutation-state
            _this.state = data; // can't use setState yet
            else _this.setState(data);
        };
        _this.dataManager = new CalendarDataManager({
            optionOverrides: props.optionOverrides,
            calendarApi: props.calendarApi,
            onData: _this.handleData
        });
        return _this;
    }
    CalendarDataProvider1.prototype.render = function() {
        return this.props.children(this.state);
    };
    CalendarDataProvider1.prototype.componentDidUpdate = function(prevProps) {
        var newOptionOverrides = this.props.optionOverrides;
        if (newOptionOverrides !== prevProps.optionOverrides) this.dataManager.resetOptions(newOptionOverrides);
    };
    return CalendarDataProvider1;
}(_vdomJs.Component);
// HELPERS
/*
if nextDayThreshold is specified, slicing is done in an all-day fashion.
you can get nextDayThreshold from context.nextDayThreshold
*/ function sliceEvents(props, allDay) {
    return sliceEventStore(props.eventStore, props.eventUiBases, props.dateProfile.activeRange, allDay ? props.nextDayThreshold : null).fg;
}
var NamedTimeZoneImpl = function() {
    function NamedTimeZoneImpl1(timeZoneName) {
        this.timeZoneName = timeZoneName;
    }
    return NamedTimeZoneImpl1;
}();
var SegHierarchy = function() {
    function SegHierarchy1() {
        // settings
        this.strictOrder = false;
        this.allowReslicing = false;
        this.maxCoord = -1; // -1 means no max
        this.maxStackCnt = -1; // -1 means no max
        this.levelCoords = []; // ordered
        this.entriesByLevel = []; // parallel with levelCoords
        this.stackCnts = {
        }; // TODO: use better technique!?
    }
    SegHierarchy1.prototype.addSegs = function(inputs) {
        var hiddenEntries = [];
        for(var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++){
            var input = inputs_1[_i];
            this.insertEntry(input, hiddenEntries);
        }
        return hiddenEntries;
    };
    SegHierarchy1.prototype.insertEntry = function(entry, hiddenEntries) {
        var insertion = this.findInsertion(entry);
        if (this.isInsertionValid(insertion, entry)) {
            this.insertEntryAt(entry, insertion);
            return 1;
        }
        return this.handleInvalidInsertion(insertion, entry, hiddenEntries);
    };
    SegHierarchy1.prototype.isInsertionValid = function(insertion, entry) {
        return (this.maxCoord === -1 || insertion.levelCoord + entry.thickness <= this.maxCoord) && (this.maxStackCnt === -1 || insertion.stackCnt < this.maxStackCnt);
    };
    // returns number of new entries inserted
    SegHierarchy1.prototype.handleInvalidInsertion = function(insertion, entry, hiddenEntries) {
        if (this.allowReslicing && insertion.touchingEntry) return this.splitEntry(entry, insertion.touchingEntry, hiddenEntries);
        hiddenEntries.push(entry);
        return 0;
    };
    SegHierarchy1.prototype.splitEntry = function(entry, barrier, hiddenEntries) {
        var partCnt = 0;
        var splitHiddenEntries = [];
        var entrySpan = entry.span;
        var barrierSpan = barrier.span;
        if (entrySpan.start < barrierSpan.start) partCnt += this.insertEntry({
            index: entry.index,
            thickness: entry.thickness,
            span: {
                start: entrySpan.start,
                end: barrierSpan.start
            }
        }, splitHiddenEntries);
        if (entrySpan.end > barrierSpan.end) partCnt += this.insertEntry({
            index: entry.index,
            thickness: entry.thickness,
            span: {
                start: barrierSpan.end,
                end: entrySpan.end
            }
        }, splitHiddenEntries);
        if (partCnt) {
            hiddenEntries.push.apply(hiddenEntries, _tslib.__spreadArray([
                {
                    index: entry.index,
                    thickness: entry.thickness,
                    span: intersectSpans(barrierSpan, entrySpan)
                }
            ], splitHiddenEntries));
            return partCnt;
        }
        hiddenEntries.push(entry);
        return 0;
    };
    SegHierarchy1.prototype.insertEntryAt = function(entry, insertion) {
        var _a = this, entriesByLevel = _a.entriesByLevel, levelCoords = _a.levelCoords;
        if (insertion.lateral === -1) {
            // create a new level
            insertAt(levelCoords, insertion.level, insertion.levelCoord);
            insertAt(entriesByLevel, insertion.level, [
                entry
            ]);
        } else // insert into existing level
        insertAt(entriesByLevel[insertion.level], insertion.lateral, entry);
        this.stackCnts[buildEntryKey(entry)] = insertion.stackCnt;
    };
    SegHierarchy1.prototype.findInsertion = function(newEntry) {
        var _a = this, levelCoords = _a.levelCoords, entriesByLevel = _a.entriesByLevel, strictOrder = _a.strictOrder, stackCnts = _a.stackCnts;
        var levelCnt = levelCoords.length;
        var candidateCoord = 0;
        var touchingLevel = -1;
        var touchingLateral = -1;
        var touchingEntry = null;
        var stackCnt = 0;
        for(var trackingLevel = 0; trackingLevel < levelCnt; trackingLevel += 1){
            var trackingCoord = levelCoords[trackingLevel];
            // if the current level is past the placed entry, we have found a good empty space and can stop.
            // if strictOrder, keep finding more lateral intersections.
            if (!strictOrder && trackingCoord >= candidateCoord + newEntry.thickness) break;
            var trackingEntries = entriesByLevel[trackingLevel];
            var trackingEntry = void 0;
            var searchRes = binarySearch(trackingEntries, newEntry.span.start, getEntrySpanEnd); // find first entry after newEntry's end
            var lateralIndex = searchRes[0] + searchRes[1]; // if exact match (which doesn't collide), go to next one
            while((trackingEntry = trackingEntries[lateralIndex]) && trackingEntry.span.start < newEntry.span.end // and not entirely past newEntry
            ){
                var trackingEntryBottom = trackingCoord + trackingEntry.thickness;
                // intersects into the top of the candidate?
                if (trackingEntryBottom > candidateCoord) {
                    candidateCoord = trackingEntryBottom;
                    touchingEntry = trackingEntry;
                    touchingLevel = trackingLevel;
                    touchingLateral = lateralIndex;
                }
                // butts up against top of candidate? (will happen if just intersected as well)
                if (trackingEntryBottom === candidateCoord) // accumulate the highest possible stackCnt of the trackingEntries that butt up
                stackCnt = Math.max(stackCnt, stackCnts[buildEntryKey(trackingEntry)] + 1);
                lateralIndex += 1;
            }
        }
        // the destination level will be after touchingEntry's level. find it
        var destLevel = 0;
        if (touchingEntry) {
            destLevel = touchingLevel + 1;
            while(destLevel < levelCnt && levelCoords[destLevel] < candidateCoord)destLevel += 1;
        }
        // if adding to an existing level, find where to insert
        var destLateral = -1;
        if (destLevel < levelCnt && levelCoords[destLevel] === candidateCoord) destLateral = binarySearch(entriesByLevel[destLevel], newEntry.span.end, getEntrySpanEnd)[0];
        return {
            touchingLevel: touchingLevel,
            touchingLateral: touchingLateral,
            touchingEntry: touchingEntry,
            stackCnt: stackCnt,
            levelCoord: candidateCoord,
            level: destLevel,
            lateral: destLateral
        };
    };
    // sorted by levelCoord (lowest to highest)
    SegHierarchy1.prototype.toRects = function() {
        var _a = this, entriesByLevel = _a.entriesByLevel, levelCoords = _a.levelCoords;
        var levelCnt = entriesByLevel.length;
        var rects = [];
        for(var level = 0; level < levelCnt; level += 1){
            var entries = entriesByLevel[level];
            var levelCoord = levelCoords[level];
            for(var _i = 0, entries_1 = entries; _i < entries_1.length; _i++){
                var entry = entries_1[_i];
                rects.push(_tslib.__assign(_tslib.__assign({
                }, entry), {
                    levelCoord: levelCoord
                }));
            }
        }
        return rects;
    };
    return SegHierarchy1;
}();
function getEntrySpanEnd(entry) {
    return entry.span.end;
}
function buildEntryKey(entry) {
    return entry.index + ':' + entry.span.start;
}
// returns groups with entries sorted by input order
function groupIntersectingEntries(entries) {
    var merges = [];
    for(var _i = 0, entries_2 = entries; _i < entries_2.length; _i++){
        var entry = entries_2[_i];
        var filteredMerges = [];
        var hungryMerge = {
            span: entry.span,
            entries: [
                entry
            ]
        };
        for(var _a = 0, merges_1 = merges; _a < merges_1.length; _a++){
            var merge = merges_1[_a];
            if (intersectSpans(merge.span, hungryMerge.span)) hungryMerge = {
                entries: merge.entries.concat(hungryMerge.entries),
                span: joinSpans(merge.span, hungryMerge.span)
            };
            else filteredMerges.push(merge);
        }
        filteredMerges.push(hungryMerge);
        merges = filteredMerges;
    }
    return merges;
}
function joinSpans(span0, span1) {
    return {
        start: Math.min(span0.start, span1.start),
        end: Math.max(span0.end, span1.end)
    };
}
function intersectSpans(span0, span1) {
    var start = Math.max(span0.start, span1.start);
    var end = Math.min(span0.end, span1.end);
    if (start < end) return {
        start: start,
        end: end
    };
    return null;
}
// general util
// ---------------------------------------------------------------------------------------------------------------------
function insertAt(arr, index, item) {
    arr.splice(index, 0, item);
}
function binarySearch(a, searchVal, getItemVal) {
    var startIndex = 0;
    var endIndex = a.length; // exclusive
    if (!endIndex || searchVal < getItemVal(a[startIndex])) return [
        0,
        0
    ];
    if (searchVal > getItemVal(a[endIndex - 1])) return [
        endIndex,
        0
    ];
    while(startIndex < endIndex){
        var middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
        var middleVal = getItemVal(a[middleIndex]);
        if (searchVal < middleVal) endIndex = middleIndex;
        else if (searchVal > middleVal) startIndex = middleIndex + 1;
        else return [
            middleIndex,
            1
        ];
    }
    return [
        startIndex,
        0
    ];
}
var Interaction = function() {
    function Interaction1(settings) {
        this.component = settings.component;
        this.isHitComboAllowed = settings.isHitComboAllowed || null;
    }
    Interaction1.prototype.destroy = function() {
    };
    return Interaction1;
}();
function parseInteractionSettings(component, input) {
    return {
        component: component,
        el: input.el,
        useEventCenter: input.useEventCenter != null ? input.useEventCenter : true,
        isHitComboAllowed: input.isHitComboAllowed || null
    };
}
function interactionSettingsToStore(settings) {
    var _a;
    return _a = {
    }, _a[settings.component.uid] = settings, _a;
}
// global state
var interactionSettingsStore = {
};
/*
An abstraction for a dragging interaction originating on an event.
Does higher-level things than PointerDragger, such as possibly:
- a "mirror" that moves with the pointer
- a minimum number of pixels or other criteria for a true drag to begin

subclasses must emit:
- pointerdown
- dragstart
- dragmove
- pointerup
- dragend
*/ var ElementDragging = function() {
    function ElementDragging1(el, selector) {
        this.emitter = new Emitter();
    }
    ElementDragging1.prototype.destroy = function() {
    };
    ElementDragging1.prototype.setMirrorIsVisible = function(bool) {
    // optional if subclass doesn't want to support a mirror
    };
    ElementDragging1.prototype.setMirrorNeedsRevert = function(bool) {
    // optional if subclass doesn't want to support a mirror
    };
    ElementDragging1.prototype.setAutoScrollEnabled = function(bool) {
    // optional
    };
    return ElementDragging1;
}();
// TODO: get rid of this in favor of options system,
// tho it's really easy to access this globally rather than pass thru options.
var config = {
};
/*
Information about what will happen when an external element is dragged-and-dropped
onto a calendar. Contains information for creating an event.
*/ var DRAG_META_REFINERS = {
    startTime: createDuration,
    duration: createDuration,
    create: Boolean,
    sourceId: String
};
function parseDragMeta(raw) {
    var _a = refineProps(raw, DRAG_META_REFINERS), refined = _a.refined, extra = _a.extra;
    return {
        startTime: refined.startTime || null,
        duration: refined.duration || null,
        create: refined.create != null ? refined.create : true,
        sourceId: refined.sourceId,
        leftoverProps: extra
    };
}
var ToolbarSection = function(_super) {
    _tslib.__extends(ToolbarSection1, _super);
    function ToolbarSection1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolbarSection1.prototype.render = function() {
        var _this = this;
        var children = this.props.widgetGroups.map(function(widgetGroup) {
            return _this.renderWidgetGroup(widgetGroup);
        });
        return _vdomJs.createElement.apply(void 0, _tslib.__spreadArray([
            'div',
            {
                className: 'fc-toolbar-chunk'
            }
        ], children));
    };
    ToolbarSection1.prototype.renderWidgetGroup = function(widgetGroup) {
        var props = this.props;
        var theme = this.context.theme;
        var children = [];
        var isOnlyButtons = true;
        for(var _i = 0, widgetGroup_1 = widgetGroup; _i < widgetGroup_1.length; _i++){
            var widget = widgetGroup_1[_i];
            var buttonName = widget.buttonName, buttonClick = widget.buttonClick, buttonText = widget.buttonText, buttonIcon = widget.buttonIcon, buttonHint = widget.buttonHint;
            if (buttonName === 'title') {
                isOnlyButtons = false;
                children.push(_vdomJs.createElement("h2", {
                    className: "fc-toolbar-title",
                    id: props.titleId
                }, props.title));
            } else {
                var isPressed = buttonName === props.activeButton;
                var isDisabled = !props.isTodayEnabled && buttonName === 'today' || !props.isPrevEnabled && buttonName === 'prev' || !props.isNextEnabled && buttonName === 'next';
                var buttonClasses = [
                    "fc-" + buttonName + "-button",
                    theme.getClass('button')
                ];
                if (isPressed) buttonClasses.push(theme.getClass('buttonActive'));
                children.push(_vdomJs.createElement("button", {
                    type: "button",
                    title: typeof buttonHint === 'function' ? buttonHint(props.navUnit) : buttonHint,
                    disabled: isDisabled,
                    "aria-pressed": isPressed,
                    className: buttonClasses.join(' '),
                    onClick: buttonClick
                }, buttonText || (buttonIcon ? _vdomJs.createElement("span", {
                    className: buttonIcon
                }) : '')));
            }
        }
        if (children.length > 1) {
            var groupClassName = isOnlyButtons && theme.getClass('buttonGroup') || '';
            return _vdomJs.createElement.apply(void 0, _tslib.__spreadArray([
                'div',
                {
                    className: groupClassName
                }
            ], children));
        }
        return children[0];
    };
    return ToolbarSection1;
}(BaseComponent);
var Toolbar = function(_super) {
    _tslib.__extends(Toolbar1, _super);
    function Toolbar1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toolbar1.prototype.render = function() {
        var _a = this.props, model = _a.model, extraClassName = _a.extraClassName;
        var forceLtr = false;
        var startContent;
        var endContent;
        var sectionWidgets = model.sectionWidgets;
        var centerContent = sectionWidgets.center;
        if (sectionWidgets.left) {
            forceLtr = true;
            startContent = sectionWidgets.left;
        } else startContent = sectionWidgets.start;
        if (sectionWidgets.right) {
            forceLtr = true;
            endContent = sectionWidgets.right;
        } else endContent = sectionWidgets.end;
        var classNames = [
            extraClassName || '',
            'fc-toolbar',
            forceLtr ? 'fc-toolbar-ltr' : '', 
        ];
        return _vdomJs.createElement("div", {
            className: classNames.join(' ')
        }, this.renderSection('start', startContent || []), this.renderSection('center', centerContent || []), this.renderSection('end', endContent || []));
    };
    Toolbar1.prototype.renderSection = function(key, widgetGroups) {
        var props = this.props;
        return _vdomJs.createElement(ToolbarSection, {
            key: key,
            widgetGroups: widgetGroups,
            title: props.title,
            navUnit: props.navUnit,
            activeButton: props.activeButton,
            isTodayEnabled: props.isTodayEnabled,
            isPrevEnabled: props.isPrevEnabled,
            isNextEnabled: props.isNextEnabled,
            titleId: props.titleId
        });
    };
    return Toolbar1;
}(BaseComponent);
// TODO: do function component?
var ViewContainer = function(_super) {
    _tslib.__extends(ViewContainer1, _super);
    function ViewContainer1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            availableWidth: null
        };
        _this.handleEl = function(el) {
            _this.el = el;
            setRef(_this.props.elRef, el);
            _this.updateAvailableWidth();
        };
        _this.handleResize = function() {
            _this.updateAvailableWidth();
        };
        return _this;
    }
    ViewContainer1.prototype.render = function() {
        var _a = this, props = _a.props, state = _a.state;
        var aspectRatio = props.aspectRatio;
        var classNames = [
            'fc-view-harness',
            aspectRatio || props.liquid || props.height ? 'fc-view-harness-active' // harness controls the height
             : 'fc-view-harness-passive'
        ];
        var height = '';
        var paddingBottom = '';
        if (aspectRatio) {
            if (state.availableWidth !== null) height = state.availableWidth / aspectRatio;
            else // while waiting to know availableWidth, we can't set height to *zero*
            // because will cause lots of unnecessary scrollbars within scrollgrid.
            // BETTER: don't start rendering ANYTHING yet until we know container width
            // NOTE: why not always use paddingBottom? Causes height oscillation (issue 5606)
            paddingBottom = 1 / aspectRatio * 100 + "%";
        } else height = props.height || '';
        return _vdomJs.createElement("div", {
            "aria-labelledby": props.labeledById,
            ref: this.handleEl,
            className: classNames.join(' '),
            style: {
                height: height,
                paddingBottom: paddingBottom
            }
        }, props.children);
    };
    ViewContainer1.prototype.componentDidMount = function() {
        this.context.addResizeHandler(this.handleResize);
    };
    ViewContainer1.prototype.componentWillUnmount = function() {
        this.context.removeResizeHandler(this.handleResize);
    };
    ViewContainer1.prototype.updateAvailableWidth = function() {
        if (this.el && this.props.aspectRatio // aspectRatio is the only height setting that needs availableWidth
        ) this.setState({
            availableWidth: this.el.offsetWidth
        });
    };
    return ViewContainer1;
}(BaseComponent);
/*
Detects when the user clicks on an event within a DateComponent
*/ var EventClicking = function(_super) {
    _tslib.__extends(EventClicking1, _super);
    function EventClicking1(settings) {
        var _this = _super.call(this, settings) || this;
        _this.handleSegClick = function(ev, segEl) {
            var component = _this.component;
            var context = component.context;
            var seg = getElSeg(segEl);
            if (seg && component.isValidSegDownEl(ev.target)) {
                // our way to simulate a link click for elements that can't be <a> tags
                // grab before trigger fired in case trigger trashes DOM thru rerendering
                var hasUrlContainer = elementClosest(ev.target, '.fc-event-forced-url');
                var url = hasUrlContainer ? hasUrlContainer.querySelector('a[href]').href : '';
                context.emitter.trigger('eventClick', {
                    el: segEl,
                    event: new EventApi(component.context, seg.eventRange.def, seg.eventRange.instance),
                    jsEvent: ev,
                    view: context.viewApi
                });
                if (url && !ev.defaultPrevented) window.location.href = url;
            }
        };
        _this.destroy = listenBySelector(settings.el, 'click', '.fc-event', _this.handleSegClick);
        return _this;
    }
    return EventClicking1;
}(Interaction);
/*
Triggers events and adds/removes core classNames when the user's pointer
enters/leaves event-elements of a component.
*/ var EventHovering = function(_super) {
    _tslib.__extends(EventHovering1, _super);
    function EventHovering1(settings) {
        var _this = _super.call(this, settings) || this;
        // for simulating an eventMouseLeave when the event el is destroyed while mouse is over it
        _this.handleEventElRemove = function(el) {
            if (el === _this.currentSegEl) _this.handleSegLeave(null, _this.currentSegEl);
        };
        _this.handleSegEnter = function(ev, segEl) {
            if (getElSeg(segEl)) {
                _this.currentSegEl = segEl;
                _this.triggerEvent('eventMouseEnter', ev, segEl);
            }
        };
        _this.handleSegLeave = function(ev, segEl) {
            if (_this.currentSegEl) {
                _this.currentSegEl = null;
                _this.triggerEvent('eventMouseLeave', ev, segEl);
            }
        };
        _this.removeHoverListeners = listenToHoverBySelector(settings.el, '.fc-event', _this.handleSegEnter, _this.handleSegLeave);
        return _this;
    }
    EventHovering1.prototype.destroy = function() {
        this.removeHoverListeners();
    };
    EventHovering1.prototype.triggerEvent = function(publicEvName, ev, segEl) {
        var component = this.component;
        var context = component.context;
        var seg = getElSeg(segEl);
        if (!ev || component.isValidSegDownEl(ev.target)) context.emitter.trigger(publicEvName, {
            el: segEl,
            event: new EventApi(context, seg.eventRange.def, seg.eventRange.instance),
            jsEvent: ev,
            view: context.viewApi
        });
    };
    return EventHovering1;
}(Interaction);
var CalendarContent = function(_super) {
    _tslib.__extends(CalendarContent1, _super);
    function CalendarContent1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buildViewContext = memoize(buildViewContext);
        _this.buildViewPropTransformers = memoize(buildViewPropTransformers);
        _this.buildToolbarProps = memoize(buildToolbarProps);
        _this.headerRef = _vdomJs.createRef();
        _this.footerRef = _vdomJs.createRef();
        _this.interactionsStore = {
        };
        // eslint-disable-next-line
        _this.state = {
            viewLabelId: getUniqueDomId()
        };
        // Component Registration
        // -----------------------------------------------------------------------------------------------------------------
        _this.registerInteractiveComponent = function(component, settingsInput) {
            var settings = parseInteractionSettings(component, settingsInput);
            var DEFAULT_INTERACTIONS = [
                EventClicking,
                EventHovering, 
            ];
            var interactionClasses = DEFAULT_INTERACTIONS.concat(_this.props.pluginHooks.componentInteractions);
            var interactions = interactionClasses.map(function(TheInteractionClass) {
                return new TheInteractionClass(settings);
            });
            _this.interactionsStore[component.uid] = interactions;
            interactionSettingsStore[component.uid] = settings;
        };
        _this.unregisterInteractiveComponent = function(component) {
            for(var _i = 0, _a = _this.interactionsStore[component.uid]; _i < _a.length; _i++){
                var listener = _a[_i];
                listener.destroy();
            }
            delete _this.interactionsStore[component.uid];
            delete interactionSettingsStore[component.uid];
        };
        // Resizing
        // -----------------------------------------------------------------------------------------------------------------
        _this.resizeRunner = new DelayedRunner(function() {
            _this.props.emitter.trigger('_resize', true); // should window resizes be considered "forced" ?
            _this.props.emitter.trigger('windowResize', {
                view: _this.props.viewApi
            });
        });
        _this.handleWindowResize = function(ev) {
            var options = _this.props.options;
            if (options.handleWindowResize && ev.target === window // avoid jqui events
            ) _this.resizeRunner.request(options.windowResizeDelay);
        };
        return _this;
    }
    /*
    renders INSIDE of an outer div
    */ CalendarContent1.prototype.render = function() {
        var props = this.props;
        var toolbarConfig = props.toolbarConfig, options = props.options;
        var toolbarProps = this.buildToolbarProps(props.viewSpec, props.dateProfile, props.dateProfileGenerator, props.currentDate, getNow(props.options.now, props.dateEnv), props.viewTitle);
        var viewVGrow = false;
        var viewHeight = '';
        var viewAspectRatio;
        if (props.isHeightAuto || props.forPrint) viewHeight = '';
        else if (options.height != null) viewVGrow = true;
        else if (options.contentHeight != null) viewHeight = options.contentHeight;
        else viewAspectRatio = Math.max(options.aspectRatio, 0.5); // prevent from getting too tall
        var viewContext = this.buildViewContext(props.viewSpec, props.viewApi, props.options, props.dateProfileGenerator, props.dateEnv, props.theme, props.pluginHooks, props.dispatch, props.getCurrentData, props.emitter, props.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
        var viewLabelId = toolbarConfig.header && toolbarConfig.header.hasTitle ? this.state.viewLabelId : '';
        return _vdomJs.createElement(ViewContextType.Provider, {
            value: viewContext
        }, toolbarConfig.header && _vdomJs.createElement(Toolbar, _tslib.__assign({
            ref: this.headerRef,
            extraClassName: "fc-header-toolbar",
            model: toolbarConfig.header,
            titleId: viewLabelId
        }, toolbarProps)), _vdomJs.createElement(ViewContainer, {
            liquid: viewVGrow,
            height: viewHeight,
            aspectRatio: viewAspectRatio,
            labeledById: viewLabelId
        }, this.renderView(props), this.buildAppendContent()), toolbarConfig.footer && _vdomJs.createElement(Toolbar, _tslib.__assign({
            ref: this.footerRef,
            extraClassName: "fc-footer-toolbar",
            model: toolbarConfig.footer,
            titleId: ""
        }, toolbarProps)));
    };
    CalendarContent1.prototype.componentDidMount = function() {
        var props = this.props;
        this.calendarInteractions = props.pluginHooks.calendarInteractions.map(function(CalendarInteractionClass) {
            return new CalendarInteractionClass(props);
        });
        window.addEventListener('resize', this.handleWindowResize);
        var propSetHandlers = props.pluginHooks.propSetHandlers;
        for(var propName in propSetHandlers)propSetHandlers[propName](props[propName], props);
    };
    CalendarContent1.prototype.componentDidUpdate = function(prevProps) {
        var props = this.props;
        var propSetHandlers = props.pluginHooks.propSetHandlers;
        for(var propName in propSetHandlers)if (props[propName] !== prevProps[propName]) propSetHandlers[propName](props[propName], props);
    };
    CalendarContent1.prototype.componentWillUnmount = function() {
        window.removeEventListener('resize', this.handleWindowResize);
        this.resizeRunner.clear();
        for(var _i = 0, _a = this.calendarInteractions; _i < _a.length; _i++){
            var interaction = _a[_i];
            interaction.destroy();
        }
        this.props.emitter.trigger('_unmount');
    };
    CalendarContent1.prototype.buildAppendContent = function() {
        var props = this.props;
        var children = props.pluginHooks.viewContainerAppends.map(function(buildAppendContent) {
            return buildAppendContent(props);
        });
        return _vdomJs.createElement.apply(void 0, _tslib.__spreadArray([
            _vdomJs.Fragment,
            {
            }
        ], children));
    };
    CalendarContent1.prototype.renderView = function(props) {
        var pluginHooks = props.pluginHooks;
        var viewSpec = props.viewSpec;
        var viewProps = {
            dateProfile: props.dateProfile,
            businessHours: props.businessHours,
            eventStore: props.renderableEventStore,
            eventUiBases: props.eventUiBases,
            dateSelection: props.dateSelection,
            eventSelection: props.eventSelection,
            eventDrag: props.eventDrag,
            eventResize: props.eventResize,
            isHeightAuto: props.isHeightAuto,
            forPrint: props.forPrint
        };
        var transformers = this.buildViewPropTransformers(pluginHooks.viewPropsTransformers);
        for(var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++){
            var transformer = transformers_1[_i];
            _tslib.__assign(viewProps, transformer.transform(viewProps, props));
        }
        var ViewComponent = viewSpec.component;
        return _vdomJs.createElement(ViewComponent, _tslib.__assign({
        }, viewProps));
    };
    return CalendarContent1;
}(PureComponent);
function buildToolbarProps(viewSpec, dateProfile, dateProfileGenerator, currentDate, now, title) {
    // don't force any date-profiles to valid date profiles (the `false`) so that we can tell if it's invalid
    var todayInfo = dateProfileGenerator.build(now, undefined, false); // TODO: need `undefined` or else INFINITE LOOP for some reason
    var prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate, false);
    var nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate, false);
    return {
        title: title,
        activeButton: viewSpec.type,
        navUnit: viewSpec.singleUnit,
        isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, now),
        isPrevEnabled: prevInfo.isValid,
        isNextEnabled: nextInfo.isValid
    };
}
// Plugin
// -----------------------------------------------------------------------------------------------------------------
function buildViewPropTransformers(theClasses) {
    return theClasses.map(function(TheClass) {
        return new TheClass();
    });
}
var CalendarRoot = function(_super) {
    _tslib.__extends(CalendarRoot1, _super);
    function CalendarRoot1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            forPrint: false
        };
        _this.handleBeforePrint = function() {
            _this.setState({
                forPrint: true
            });
        };
        _this.handleAfterPrint = function() {
            _this.setState({
                forPrint: false
            });
        };
        return _this;
    }
    CalendarRoot1.prototype.render = function() {
        var props = this.props;
        var options = props.options;
        var forPrint = this.state.forPrint;
        var isHeightAuto = forPrint || options.height === 'auto' || options.contentHeight === 'auto';
        var height = !isHeightAuto && options.height != null ? options.height : '';
        var classNames = [
            'fc',
            forPrint ? 'fc-media-print' : 'fc-media-screen',
            "fc-direction-" + options.direction,
            props.theme.getClass('root'), 
        ];
        if (!getCanVGrowWithinCell()) classNames.push('fc-liquid-hack');
        return props.children(classNames, height, isHeightAuto, forPrint);
    };
    CalendarRoot1.prototype.componentDidMount = function() {
        var emitter = this.props.emitter;
        emitter.on('_beforeprint', this.handleBeforePrint);
        emitter.on('_afterprint', this.handleAfterPrint);
    };
    CalendarRoot1.prototype.componentWillUnmount = function() {
        var emitter = this.props.emitter;
        emitter.off('_beforeprint', this.handleBeforePrint);
        emitter.off('_afterprint', this.handleAfterPrint);
    };
    return CalendarRoot1;
}(BaseComponent);
// Computes a default column header formatting string if `colFormat` is not explicitly defined
function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
    // if more than one week row, or if there are a lot of columns with not much space,
    // put just the day numbers will be in each cell
    if (!datesRepDistinctDays || dayCnt > 10) return createFormatter({
        weekday: 'short'
    }); // "Sat"
    if (dayCnt > 1) return createFormatter({
        weekday: 'short',
        month: 'numeric',
        day: 'numeric',
        omitCommas: true
    }); // "Sat 11/12"
    return createFormatter({
        weekday: 'long'
    }); // "Saturday"
}
var CLASS_NAME = 'fc-col-header-cell'; // do the cushion too? no
function renderInner$1(hookProps) {
    return hookProps.text;
}
var TableDateCell = function(_super) {
    _tslib.__extends(TableDateCell1, _super);
    function TableDateCell1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableDateCell1.prototype.render = function() {
        var _a = this.context, dateEnv = _a.dateEnv, options = _a.options, theme = _a.theme, viewApi = _a.viewApi;
        var props = this.props;
        var date = props.date, dateProfile = props.dateProfile;
        var dayMeta = getDateMeta(date, props.todayRange, null, dateProfile);
        var classNames = [
            CLASS_NAME
        ].concat(getDayClassNames(dayMeta, theme));
        var text = dateEnv.format(date, props.dayHeaderFormat);
        // if colCnt is 1, we are already in a day-view and don't need a navlink
        var navLinkAttrs = !dayMeta.isDisabled && props.colCnt > 1 ? buildNavLinkAttrs(this.context, date) : {
        };
        var hookProps = _tslib.__assign(_tslib.__assign(_tslib.__assign({
            date: dateEnv.toDate(date),
            view: viewApi
        }, props.extraHookProps), {
            text: text
        }), dayMeta);
        return _vdomJs.createElement(RenderHook, {
            hookProps: hookProps,
            classNames: options.dayHeaderClassNames,
            content: options.dayHeaderContent,
            defaultContent: renderInner$1,
            didMount: options.dayHeaderDidMount,
            willUnmount: options.dayHeaderWillUnmount
        }, function(rootElRef, customClassNames, innerElRef, innerContent) {
            return _vdomJs.createElement("th", _tslib.__assign({
                ref: rootElRef,
                role: "columnheader",
                className: classNames.concat(customClassNames).join(' '),
                "data-date": !dayMeta.isDisabled ? formatDayString(date) : undefined,
                colSpan: props.colSpan
            }, props.extraDataAttrs), _vdomJs.createElement("div", {
                className: "fc-scrollgrid-sync-inner"
            }, !dayMeta.isDisabled && _vdomJs.createElement("a", _tslib.__assign({
                ref: innerElRef,
                className: [
                    'fc-col-header-cell-cushion',
                    props.isSticky ? 'fc-sticky' : '', 
                ].join(' ')
            }, navLinkAttrs), innerContent)));
        });
    };
    return TableDateCell1;
}(BaseComponent);
var WEEKDAY_FORMAT = createFormatter({
    weekday: 'long'
});
var TableDowCell = function(_super) {
    _tslib.__extends(TableDowCell1, _super);
    function TableDowCell1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableDowCell1.prototype.render = function() {
        var props = this.props;
        var _a = this.context, dateEnv = _a.dateEnv, theme = _a.theme, viewApi = _a.viewApi, options = _a.options;
        var date = addDays(new Date(259200000), props.dow); // start with Sun, 04 Jan 1970 00:00:00 GMT
        var dateMeta = {
            dow: props.dow,
            isDisabled: false,
            isFuture: false,
            isPast: false,
            isToday: false,
            isOther: false
        };
        var classNames = [
            CLASS_NAME
        ].concat(getDayClassNames(dateMeta, theme), props.extraClassNames || []);
        var text = dateEnv.format(date, props.dayHeaderFormat);
        var hookProps = _tslib.__assign(_tslib.__assign(_tslib.__assign(_tslib.__assign({
            date: date
        }, dateMeta), {
            view: viewApi
        }), props.extraHookProps), {
            text: text
        });
        return _vdomJs.createElement(RenderHook, {
            hookProps: hookProps,
            classNames: options.dayHeaderClassNames,
            content: options.dayHeaderContent,
            defaultContent: renderInner$1,
            didMount: options.dayHeaderDidMount,
            willUnmount: options.dayHeaderWillUnmount
        }, function(rootElRef, customClassNames, innerElRef, innerContent) {
            return _vdomJs.createElement("th", _tslib.__assign({
                ref: rootElRef,
                role: "columnheader",
                className: classNames.concat(customClassNames).join(' '),
                colSpan: props.colSpan
            }, props.extraDataAttrs), _vdomJs.createElement("div", {
                className: "fc-scrollgrid-sync-inner"
            }, _vdomJs.createElement("a", {
                "aria-label": dateEnv.format(date, WEEKDAY_FORMAT),
                className: [
                    'fc-col-header-cell-cushion',
                    props.isSticky ? 'fc-sticky' : '', 
                ].join(' '),
                ref: innerElRef
            }, innerContent)));
        });
    };
    return TableDowCell1;
}(BaseComponent);
var NowTimer = function(_super) {
    _tslib.__extends(NowTimer1, _super);
    function NowTimer1(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.initialNowDate = getNow(context.options.now, context.dateEnv);
        _this.initialNowQueriedMs = new Date().valueOf();
        _this.state = _this.computeTiming().currentState;
        return _this;
    }
    NowTimer1.prototype.render = function() {
        var _a = this, props = _a.props, state = _a.state;
        return props.children(state.nowDate, state.todayRange);
    };
    NowTimer1.prototype.componentDidMount = function() {
        this.setTimeout();
    };
    NowTimer1.prototype.componentDidUpdate = function(prevProps) {
        if (prevProps.unit !== this.props.unit) {
            this.clearTimeout();
            this.setTimeout();
        }
    };
    NowTimer1.prototype.componentWillUnmount = function() {
        this.clearTimeout();
    };
    NowTimer1.prototype.computeTiming = function() {
        var _a = this, props = _a.props, context = _a.context;
        var unroundedNow = addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs);
        var currentUnitStart = context.dateEnv.startOf(unroundedNow, props.unit);
        var nextUnitStart = context.dateEnv.add(currentUnitStart, createDuration(1, props.unit));
        var waitMs = nextUnitStart.valueOf() - unroundedNow.valueOf();
        // there is a max setTimeout ms value (https://stackoverflow.com/a/3468650/96342)
        // ensure no longer than a day
        waitMs = Math.min(86400000, waitMs);
        return {
            currentState: {
                nowDate: currentUnitStart,
                todayRange: buildDayRange(currentUnitStart)
            },
            nextState: {
                nowDate: nextUnitStart,
                todayRange: buildDayRange(nextUnitStart)
            },
            waitMs: waitMs
        };
    };
    NowTimer1.prototype.setTimeout = function() {
        var _this = this;
        var _a = this.computeTiming(), nextState = _a.nextState, waitMs = _a.waitMs;
        this.timeoutId = setTimeout(function() {
            _this.setState(nextState, function() {
                _this.setTimeout();
            });
        }, waitMs);
    };
    NowTimer1.prototype.clearTimeout = function() {
        if (this.timeoutId) clearTimeout(this.timeoutId);
    };
    NowTimer1.contextType = ViewContextType;
    return NowTimer1;
}(_vdomJs.Component);
function buildDayRange(date) {
    var start = startOfDay(date);
    var end = addDays(start, 1);
    return {
        start: start,
        end: end
    };
}
var DayHeader = function(_super) {
    _tslib.__extends(DayHeader1, _super);
    function DayHeader1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createDayHeaderFormatter = memoize(createDayHeaderFormatter);
        return _this;
    }
    DayHeader1.prototype.render = function() {
        var context = this.context;
        var _a = this.props, dates = _a.dates, dateProfile = _a.dateProfile, datesRepDistinctDays = _a.datesRepDistinctDays, renderIntro = _a.renderIntro;
        var dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, datesRepDistinctDays, dates.length);
        return _vdomJs.createElement(NowTimer, {
            unit: "day"
        }, function(nowDate, todayRange) {
            return _vdomJs.createElement("tr", {
                role: "row"
            }, renderIntro && renderIntro('day'), dates.map(function(date) {
                return datesRepDistinctDays ? _vdomJs.createElement(TableDateCell, {
                    key: date.toISOString(),
                    date: date,
                    dateProfile: dateProfile,
                    todayRange: todayRange,
                    colCnt: dates.length,
                    dayHeaderFormat: dayHeaderFormat
                }) : _vdomJs.createElement(TableDowCell, {
                    key: date.getUTCDay(),
                    dow: date.getUTCDay(),
                    dayHeaderFormat: dayHeaderFormat
                });
            }));
        });
    };
    return DayHeader1;
}(BaseComponent);
function createDayHeaderFormatter(explicitFormat, datesRepDistinctDays, dateCnt) {
    return explicitFormat || computeFallbackHeaderFormat(datesRepDistinctDays, dateCnt);
}
var DaySeriesModel = function() {
    function DaySeriesModel1(range, dateProfileGenerator) {
        var date = range.start;
        var end = range.end;
        var indices = [];
        var dates = [];
        var dayIndex = -1;
        while(date < end){
            if (dateProfileGenerator.isHiddenDay(date)) indices.push(dayIndex + 0.5); // mark that it's between indices
            else {
                dayIndex += 1;
                indices.push(dayIndex);
                dates.push(date);
            }
            date = addDays(date, 1);
        }
        this.dates = dates;
        this.indices = indices;
        this.cnt = dates.length;
    }
    DaySeriesModel1.prototype.sliceRange = function(range) {
        var firstIndex = this.getDateDayIndex(range.start); // inclusive first index
        var lastIndex = this.getDateDayIndex(addDays(range.end, -1)); // inclusive last index
        var clippedFirstIndex = Math.max(0, firstIndex);
        var clippedLastIndex = Math.min(this.cnt - 1, lastIndex);
        // deal with in-between indices
        clippedFirstIndex = Math.ceil(clippedFirstIndex); // in-between starts round to next cell
        clippedLastIndex = Math.floor(clippedLastIndex); // in-between ends round to prev cell
        if (clippedFirstIndex <= clippedLastIndex) return {
            firstIndex: clippedFirstIndex,
            lastIndex: clippedLastIndex,
            isStart: firstIndex === clippedFirstIndex,
            isEnd: lastIndex === clippedLastIndex
        };
        return null;
    };
    // Given a date, returns its chronolocial cell-index from the first cell of the grid.
    // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
    // If before the first offset, returns a negative number.
    // If after the last offset, returns an offset past the last cell offset.
    // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
    DaySeriesModel1.prototype.getDateDayIndex = function(date) {
        var indices = this.indices;
        var dayOffset = Math.floor(diffDays(this.dates[0], date));
        if (dayOffset < 0) return indices[0] - 1;
        if (dayOffset >= indices.length) return indices[indices.length - 1] + 1;
        return indices[dayOffset];
    };
    return DaySeriesModel1;
}();
var DayTableModel = function() {
    function DayTableModel1(daySeries, breakOnWeeks) {
        var dates = daySeries.dates;
        var daysPerRow;
        var firstDay;
        var rowCnt;
        if (breakOnWeeks) {
            // count columns until the day-of-week repeats
            firstDay = dates[0].getUTCDay();
            for(daysPerRow = 1; daysPerRow < dates.length; daysPerRow += 1){
                if (dates[daysPerRow].getUTCDay() === firstDay) break;
            }
            rowCnt = Math.ceil(dates.length / daysPerRow);
        } else {
            rowCnt = 1;
            daysPerRow = dates.length;
        }
        this.rowCnt = rowCnt;
        this.colCnt = daysPerRow;
        this.daySeries = daySeries;
        this.cells = this.buildCells();
        this.headerDates = this.buildHeaderDates();
    }
    DayTableModel1.prototype.buildCells = function() {
        var rows = [];
        for(var row = 0; row < this.rowCnt; row += 1){
            var cells = [];
            for(var col = 0; col < this.colCnt; col += 1)cells.push(this.buildCell(row, col));
            rows.push(cells);
        }
        return rows;
    };
    DayTableModel1.prototype.buildCell = function(row, col) {
        var date = this.daySeries.dates[row * this.colCnt + col];
        return {
            key: date.toISOString(),
            date: date
        };
    };
    DayTableModel1.prototype.buildHeaderDates = function() {
        var dates = [];
        for(var col = 0; col < this.colCnt; col += 1)dates.push(this.cells[0][col].date);
        return dates;
    };
    DayTableModel1.prototype.sliceRange = function(range) {
        var colCnt = this.colCnt;
        var seriesSeg = this.daySeries.sliceRange(range);
        var segs = [];
        if (seriesSeg) {
            var firstIndex = seriesSeg.firstIndex, lastIndex = seriesSeg.lastIndex;
            var index = firstIndex;
            while(index <= lastIndex){
                var row = Math.floor(index / colCnt);
                var nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
                segs.push({
                    row: row,
                    firstCol: index % colCnt,
                    lastCol: (nextIndex - 1) % colCnt,
                    isStart: seriesSeg.isStart && index === firstIndex,
                    isEnd: seriesSeg.isEnd && nextIndex - 1 === lastIndex
                });
                index = nextIndex;
            }
        }
        return segs;
    };
    return DayTableModel1;
}();
var Slicer = function() {
    function Slicer1() {
        this.sliceBusinessHours = memoize(this._sliceBusinessHours);
        this.sliceDateSelection = memoize(this._sliceDateSpan);
        this.sliceEventStore = memoize(this._sliceEventStore);
        this.sliceEventDrag = memoize(this._sliceInteraction);
        this.sliceEventResize = memoize(this._sliceInteraction);
        this.forceDayIfListItem = false; // hack
    }
    Slicer1.prototype.sliceProps = function(props, dateProfile, nextDayThreshold, context) {
        var extraArgs = [];
        for(var _i = 4; _i < arguments.length; _i++)extraArgs[_i - 4] = arguments[_i];
        var eventUiBases = props.eventUiBases;
        var eventSegs = this.sliceEventStore.apply(this, _tslib.__spreadArray([
            props.eventStore,
            eventUiBases,
            dateProfile,
            nextDayThreshold
        ], extraArgs));
        return {
            dateSelectionSegs: this.sliceDateSelection.apply(this, _tslib.__spreadArray([
                props.dateSelection,
                eventUiBases,
                context
            ], extraArgs)),
            businessHourSegs: this.sliceBusinessHours.apply(this, _tslib.__spreadArray([
                props.businessHours,
                dateProfile,
                nextDayThreshold,
                context
            ], extraArgs)),
            fgEventSegs: eventSegs.fg,
            bgEventSegs: eventSegs.bg,
            eventDrag: this.sliceEventDrag.apply(this, _tslib.__spreadArray([
                props.eventDrag,
                eventUiBases,
                dateProfile,
                nextDayThreshold
            ], extraArgs)),
            eventResize: this.sliceEventResize.apply(this, _tslib.__spreadArray([
                props.eventResize,
                eventUiBases,
                dateProfile,
                nextDayThreshold
            ], extraArgs)),
            eventSelection: props.eventSelection
        }; // TODO: give interactionSegs?
    };
    Slicer1.prototype.sliceNowDate = function(date, context) {
        var extraArgs = [];
        for(var _i = 2; _i < arguments.length; _i++)extraArgs[_i - 2] = arguments[_i];
        return this._sliceDateSpan.apply(this, _tslib.__spreadArray([
            {
                range: {
                    start: date,
                    end: addMs(date, 1)
                },
                allDay: false
            },
            {
            },
            context
        ], extraArgs));
    };
    Slicer1.prototype._sliceBusinessHours = function(businessHours, dateProfile, nextDayThreshold, context) {
        var extraArgs = [];
        for(var _i = 4; _i < arguments.length; _i++)extraArgs[_i - 4] = arguments[_i];
        if (!businessHours) return [];
        return this._sliceEventStore.apply(this, _tslib.__spreadArray([
            expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), context),
            {
            },
            dateProfile,
            nextDayThreshold
        ], extraArgs)).bg;
    };
    Slicer1.prototype._sliceEventStore = function(eventStore, eventUiBases, dateProfile, nextDayThreshold) {
        var extraArgs = [];
        for(var _i = 4; _i < arguments.length; _i++)extraArgs[_i - 4] = arguments[_i];
        if (eventStore) {
            var rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
            return {
                bg: this.sliceEventRanges(rangeRes.bg, extraArgs),
                fg: this.sliceEventRanges(rangeRes.fg, extraArgs)
            };
        }
        return {
            bg: [],
            fg: []
        };
    };
    Slicer1.prototype._sliceInteraction = function(interaction, eventUiBases, dateProfile, nextDayThreshold) {
        var extraArgs = [];
        for(var _i = 4; _i < arguments.length; _i++)extraArgs[_i - 4] = arguments[_i];
        if (!interaction) return null;
        var rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
        return {
            segs: this.sliceEventRanges(rangeRes.fg, extraArgs),
            affectedInstances: interaction.affectedEvents.instances,
            isEvent: interaction.isEvent
        };
    };
    Slicer1.prototype._sliceDateSpan = function(dateSpan, eventUiBases, context) {
        var extraArgs = [];
        for(var _i = 3; _i < arguments.length; _i++)extraArgs[_i - 3] = arguments[_i];
        if (!dateSpan) return [];
        var eventRange = fabricateEventRange(dateSpan, eventUiBases, context);
        var segs = this.sliceRange.apply(this, _tslib.__spreadArray([
            dateSpan.range
        ], extraArgs));
        for(var _a = 0, segs_1 = segs; _a < segs_1.length; _a++){
            var seg = segs_1[_a];
            seg.eventRange = eventRange;
        }
        return segs;
    };
    /*
    "complete" seg means it has component and eventRange
    */ Slicer1.prototype.sliceEventRanges = function(eventRanges, extraArgs) {
        var segs = [];
        for(var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++){
            var eventRange = eventRanges_1[_i];
            segs.push.apply(segs, this.sliceEventRange(eventRange, extraArgs));
        }
        return segs;
    };
    /*
    "complete" seg means it has component and eventRange
    */ Slicer1.prototype.sliceEventRange = function(eventRange, extraArgs) {
        var dateRange = eventRange.range;
        // hack to make multi-day events that are being force-displayed as list-items to take up only one day
        if (this.forceDayIfListItem && eventRange.ui.display === 'list-item') dateRange = {
            start: dateRange.start,
            end: addDays(dateRange.start, 1)
        };
        var segs = this.sliceRange.apply(this, _tslib.__spreadArray([
            dateRange
        ], extraArgs));
        for(var _i = 0, segs_2 = segs; _i < segs_2.length; _i++){
            var seg = segs_2[_i];
            seg.eventRange = eventRange;
            seg.isStart = eventRange.isStart && seg.isStart;
            seg.isEnd = eventRange.isEnd && seg.isEnd;
        }
        return segs;
    };
    return Slicer1;
}();
/*
for incorporating slotMinTime/slotMaxTime if appropriate
TODO: should be part of DateProfile!
TimelineDateProfile already does this btw
*/ function computeActiveRange(dateProfile, isComponentAllDay) {
    var range = dateProfile.activeRange;
    if (isComponentAllDay) return range;
    return {
        start: addMs(range.start, dateProfile.slotMinTime.milliseconds),
        end: addMs(range.end, dateProfile.slotMaxTime.milliseconds - 86400000)
    };
}
// high-level segmenting-aware tester functions
// ------------------------------------------------------------------------------------------------------------------------
function isInteractionValid(interaction, dateProfile, context) {
    var instances = interaction.mutatedEvents.instances;
    for(var instanceId in instances){
        if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) return false;
    }
    return isNewPropsValid({
        eventDrag: interaction
    }, context); // HACK: the eventDrag props is used for ALL interactions
}
function isDateSelectionValid(dateSelection, dateProfile, context) {
    if (!rangeContainsRange(dateProfile.validRange, dateSelection.range)) return false;
    return isNewPropsValid({
        dateSelection: dateSelection
    }, context);
}
function isNewPropsValid(newProps, context) {
    var calendarState = context.getCurrentData();
    var props = _tslib.__assign({
        businessHours: calendarState.businessHours,
        dateSelection: '',
        eventStore: calendarState.eventStore,
        eventUiBases: calendarState.eventUiBases,
        eventSelection: '',
        eventDrag: null,
        eventResize: null
    }, newProps);
    return (context.pluginHooks.isPropsValid || isPropsValid)(props, context);
}
function isPropsValid(state, context, dateSpanMeta, filterConfig) {
    if (dateSpanMeta === void 0) dateSpanMeta = {
    };
    if (state.eventDrag && !isInteractionPropsValid(state, context, dateSpanMeta, filterConfig)) return false;
    if (state.dateSelection && !isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig)) return false;
    return true;
}
// Moving Event Validation
// ------------------------------------------------------------------------------------------------------------------------
function isInteractionPropsValid(state, context, dateSpanMeta, filterConfig) {
    var currentState = context.getCurrentData();
    var interaction = state.eventDrag; // HACK: the eventDrag props is used for ALL interactions
    var subjectEventStore = interaction.mutatedEvents;
    var subjectDefs = subjectEventStore.defs;
    var subjectInstances = subjectEventStore.instances;
    var subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ? state.eventUiBases : {
        '': currentState.selectionConfig
    });
    if (filterConfig) subjectConfigs = mapHash(subjectConfigs, filterConfig);
    // exclude the subject events. TODO: exclude defs too?
    var otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances);
    var otherDefs = otherEventStore.defs;
    var otherInstances = otherEventStore.instances;
    var otherConfigs = compileEventUis(otherDefs, state.eventUiBases);
    for(var subjectInstanceId in subjectInstances){
        var subjectInstance = subjectInstances[subjectInstanceId];
        var subjectRange = subjectInstance.range;
        var subjectConfig = subjectConfigs[subjectInstance.defId];
        var subjectDef = subjectDefs[subjectInstance.defId];
        // constraint
        if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, context)) return false;
        // overlap
        var eventOverlap = context.options.eventOverlap;
        var eventOverlapFunc = typeof eventOverlap === 'function' ? eventOverlap : null;
        for(var otherInstanceId in otherInstances){
            var otherInstance = otherInstances[otherInstanceId];
            // intersect! evaluate
            if (rangesIntersect(subjectRange, otherInstance.range)) {
                var otherOverlap = otherConfigs[otherInstance.defId].overlap;
                // consider the other event's overlap. only do this if the subject event is a "real" event
                if (otherOverlap === false && interaction.isEvent) return false;
                if (subjectConfig.overlap === false) return false;
                if (eventOverlapFunc && !eventOverlapFunc(new EventApi(context, otherDefs[otherInstance.defId], otherInstance), new EventApi(context, subjectDef, subjectInstance))) return false;
            }
        }
        // allow (a function)
        var calendarEventStore = currentState.eventStore; // need global-to-calendar, not local to component (splittable)state
        for(var _i = 0, _a = subjectConfig.allows; _i < _a.length; _i++){
            var subjectAllow = _a[_i];
            var subjectDateSpan = _tslib.__assign(_tslib.__assign({
            }, dateSpanMeta), {
                range: subjectInstance.range,
                allDay: subjectDef.allDay
            });
            var origDef = calendarEventStore.defs[subjectDef.defId];
            var origInstance = calendarEventStore.instances[subjectInstanceId];
            var eventApi = void 0;
            if (origDef) eventApi = new EventApi(context, origDef, origInstance);
            else eventApi = new EventApi(context, subjectDef); // no instance, because had no dates
            if (!subjectAllow(buildDateSpanApiWithContext(subjectDateSpan, context), eventApi)) return false;
        }
    }
    return true;
}
// Date Selection Validation
// ------------------------------------------------------------------------------------------------------------------------
function isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig) {
    var relevantEventStore = state.eventStore;
    var relevantDefs = relevantEventStore.defs;
    var relevantInstances = relevantEventStore.instances;
    var selection = state.dateSelection;
    var selectionRange = selection.range;
    var selectionConfig = context.getCurrentData().selectionConfig;
    if (filterConfig) selectionConfig = filterConfig(selectionConfig);
    // constraint
    if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, context)) return false;
    // overlap
    var selectOverlap = context.options.selectOverlap;
    var selectOverlapFunc = typeof selectOverlap === 'function' ? selectOverlap : null;
    for(var relevantInstanceId in relevantInstances){
        var relevantInstance = relevantInstances[relevantInstanceId];
        // intersect! evaluate
        if (rangesIntersect(selectionRange, relevantInstance.range)) {
            if (selectionConfig.overlap === false) return false;
            if (selectOverlapFunc && !selectOverlapFunc(new EventApi(context, relevantDefs[relevantInstance.defId], relevantInstance), null)) return false;
        }
    }
    // allow (a function)
    for(var _i = 0, _a = selectionConfig.allows; _i < _a.length; _i++){
        var selectionAllow = _a[_i];
        var fullDateSpan = _tslib.__assign(_tslib.__assign({
        }, dateSpanMeta), selection);
        if (!selectionAllow(buildDateSpanApiWithContext(fullDateSpan, context), null)) return false;
    }
    return true;
}
// Constraint Utils
// ------------------------------------------------------------------------------------------------------------------------
function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, context) {
    for(var _i = 0, constraints_1 = constraints; _i < constraints_1.length; _i++){
        var constraint = constraints_1[_i];
        if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, context), subjectRange)) return false;
    }
    return true;
}
function constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, context) {
    if (constraint === 'businessHours') return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, context));
    if (typeof constraint === 'string') return eventStoreToRanges(filterEventStoreDefs(otherEventStore, function(eventDef) {
        return eventDef.groupId === constraint;
    }));
    if (typeof constraint === 'object' && constraint) return eventStoreToRanges(expandRecurring(constraint, subjectRange, context));
    return []; // if it's false
}
// TODO: move to event-store file?
function eventStoreToRanges(eventStore) {
    var instances = eventStore.instances;
    var ranges = [];
    for(var instanceId in instances)ranges.push(instances[instanceId].range);
    return ranges;
}
// TODO: move to geom file?
function anyRangesContainRange(outerRanges, innerRange) {
    for(var _i = 0, outerRanges_1 = outerRanges; _i < outerRanges_1.length; _i++){
        var outerRange = outerRanges_1[_i];
        if (rangeContainsRange(outerRange, innerRange)) return true;
    }
    return false;
}
var VISIBLE_HIDDEN_RE = /^(visible|hidden)$/;
var Scroller = function(_super) {
    _tslib.__extends(Scroller1, _super);
    function Scroller1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleEl = function(el) {
            _this.el = el;
            setRef(_this.props.elRef, el);
        };
        return _this;
    }
    Scroller1.prototype.render = function() {
        var props = this.props;
        var liquid = props.liquid, liquidIsAbsolute = props.liquidIsAbsolute;
        var isAbsolute = liquid && liquidIsAbsolute;
        var className = [
            'fc-scroller'
        ];
        if (liquid) {
            if (liquidIsAbsolute) className.push('fc-scroller-liquid-absolute');
            else className.push('fc-scroller-liquid');
        }
        return _vdomJs.createElement("div", {
            ref: this.handleEl,
            className: className.join(' '),
            style: {
                overflowX: props.overflowX,
                overflowY: props.overflowY,
                left: isAbsolute && -(props.overcomeLeft || 0) || '',
                right: isAbsolute && -(props.overcomeRight || 0) || '',
                bottom: isAbsolute && -(props.overcomeBottom || 0) || '',
                marginLeft: !isAbsolute && -(props.overcomeLeft || 0) || '',
                marginRight: !isAbsolute && -(props.overcomeRight || 0) || '',
                marginBottom: !isAbsolute && -(props.overcomeBottom || 0) || '',
                maxHeight: props.maxHeight || ''
            }
        }, props.children);
    };
    Scroller1.prototype.needsXScrolling = function() {
        if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) return false;
        // testing scrollWidth>clientWidth is unreliable cross-browser when pixel heights aren't integers.
        // much more reliable to see if children are taller than the scroller, even tho doesn't account for
        // inner-child margins and absolute positioning
        var el = this.el;
        var realClientWidth = this.el.getBoundingClientRect().width - this.getYScrollbarWidth();
        var children = el.children;
        for(var i = 0; i < children.length; i += 1){
            var childEl = children[i];
            if (childEl.getBoundingClientRect().width > realClientWidth) return true;
        }
        return false;
    };
    Scroller1.prototype.needsYScrolling = function() {
        if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) return false;
        // testing scrollHeight>clientHeight is unreliable cross-browser when pixel heights aren't integers.
        // much more reliable to see if children are taller than the scroller, even tho doesn't account for
        // inner-child margins and absolute positioning
        var el = this.el;
        var realClientHeight = this.el.getBoundingClientRect().height - this.getXScrollbarWidth();
        var children = el.children;
        for(var i = 0; i < children.length; i += 1){
            var childEl = children[i];
            if (childEl.getBoundingClientRect().height > realClientHeight) return true;
        }
        return false;
    };
    Scroller1.prototype.getXScrollbarWidth = function() {
        if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) return 0;
        return this.el.offsetHeight - this.el.clientHeight; // only works because we guarantee no borders. TODO: add to CSS with important?
    };
    Scroller1.prototype.getYScrollbarWidth = function() {
        if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) return 0;
        return this.el.offsetWidth - this.el.clientWidth; // only works because we guarantee no borders. TODO: add to CSS with important?
    };
    return Scroller1;
}(BaseComponent);
/*
TODO: somehow infer OtherArgs from masterCallback?
TODO: infer RefType from masterCallback if provided
*/ var RefMap = function() {
    function RefMap1(masterCallback) {
        var _this = this;
        this.masterCallback = masterCallback;
        this.currentMap = {
        };
        this.depths = {
        };
        this.callbackMap = {
        };
        this.handleValue = function(val, key) {
            var _a = _this, depths = _a.depths, currentMap = _a.currentMap;
            var removed = false;
            var added = false;
            if (val !== null) {
                // for bug... ACTUALLY: can probably do away with this now that callers don't share numeric indices anymore
                removed = key in currentMap;
                currentMap[key] = val;
                depths[key] = (depths[key] || 0) + 1;
                added = true;
            } else {
                depths[key] -= 1;
                if (!depths[key]) {
                    delete currentMap[key];
                    delete _this.callbackMap[key];
                    removed = true;
                }
            }
            if (_this.masterCallback) {
                if (removed) _this.masterCallback(null, String(key));
                if (added) _this.masterCallback(val, String(key));
            }
        };
    }
    RefMap1.prototype.createRef = function(key) {
        var _this = this;
        var refCallback = this.callbackMap[key];
        if (!refCallback) refCallback = this.callbackMap[key] = function(val) {
            _this.handleValue(val, String(key));
        };
        return refCallback;
    };
    // TODO: check callers that don't care about order. should use getAll instead
    // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
    // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"
    RefMap1.prototype.collect = function(startIndex, endIndex, step) {
        return collectFromHash(this.currentMap, startIndex, endIndex, step);
    };
    RefMap1.prototype.getAll = function() {
        return hashValuesToArray(this.currentMap);
    };
    return RefMap1;
}();
function computeShrinkWidth(chunkEls) {
    var shrinkCells = findElements(chunkEls, '.fc-scrollgrid-shrink');
    var largestWidth = 0;
    for(var _i = 0, shrinkCells_1 = shrinkCells; _i < shrinkCells_1.length; _i++){
        var shrinkCell = shrinkCells_1[_i];
        largestWidth = Math.max(largestWidth, computeSmallestCellWidth(shrinkCell));
    }
    return Math.ceil(largestWidth); // <table> elements work best with integers. round up to ensure contents fits
}
function getSectionHasLiquidHeight(props, sectionConfig) {
    return props.liquid && sectionConfig.liquid; // does the section do liquid-height? (need to have whole scrollgrid liquid-height as well)
}
function getAllowYScrolling(props, sectionConfig) {
    return sectionConfig.maxHeight != null || getSectionHasLiquidHeight(props, sectionConfig); // if the section is liquid height, it might condense enough to require scrollbars
}
// TODO: ONLY use `arg`. force out internal function to use same API
function renderChunkContent(sectionConfig, chunkConfig, arg, isHeader) {
    var expandRows = arg.expandRows;
    var content = typeof chunkConfig.content === 'function' ? chunkConfig.content(arg) : _vdomJs.createElement('table', {
        role: 'presentation',
        className: [
            chunkConfig.tableClassName,
            sectionConfig.syncRowHeights ? 'fc-scrollgrid-sync-table' : '', 
        ].join(' '),
        style: {
            minWidth: arg.tableMinWidth,
            width: arg.clientWidth,
            height: expandRows ? arg.clientHeight : ''
        }
    }, arg.tableColGroupNode, _vdomJs.createElement(isHeader ? 'thead' : 'tbody', {
        role: 'presentation'
    }, typeof chunkConfig.rowContent === 'function' ? chunkConfig.rowContent(arg) : chunkConfig.rowContent));
    return content;
}
function isColPropsEqual(cols0, cols1) {
    return isArraysEqual(cols0, cols1, isPropsEqual);
}
function renderMicroColGroup(cols, shrinkWidth) {
    var colNodes = [];
    /*
    for ColProps with spans, it would have been great to make a single <col span="">
    HOWEVER, Chrome was getting messing up distributing the width to <td>/<th> elements with colspans.
    SOLUTION: making individual <col> elements makes Chrome behave.
    */ for(var _i = 0, cols_1 = cols; _i < cols_1.length; _i++){
        var colProps = cols_1[_i];
        var span = colProps.span || 1;
        for(var i = 0; i < span; i += 1)colNodes.push(_vdomJs.createElement("col", {
            style: {
                width: colProps.width === 'shrink' ? sanitizeShrinkWidth(shrinkWidth) : colProps.width || '',
                minWidth: colProps.minWidth || ''
            }
        }));
    }
    return _vdomJs.createElement.apply(void 0, _tslib.__spreadArray([
        'colgroup',
        {
        }
    ], colNodes));
}
function sanitizeShrinkWidth(shrinkWidth) {
    /* why 4? if we do 0, it will kill any border, which are needed for computeSmallestCellWidth
    4 accounts for 2 2-pixel borders. TODO: better solution? */ return shrinkWidth == null ? 4 : shrinkWidth;
}
function hasShrinkWidth(cols) {
    for(var _i = 0, cols_2 = cols; _i < cols_2.length; _i++){
        var col = cols_2[_i];
        if (col.width === 'shrink') return true;
    }
    return false;
}
function getScrollGridClassNames(liquid, context) {
    var classNames = [
        'fc-scrollgrid',
        context.theme.getClass('table'), 
    ];
    if (liquid) classNames.push('fc-scrollgrid-liquid');
    return classNames;
}
function getSectionClassNames(sectionConfig, wholeTableVGrow) {
    var classNames = [
        'fc-scrollgrid-section',
        "fc-scrollgrid-section-" + sectionConfig.type,
        sectionConfig.className
    ];
    if (wholeTableVGrow && sectionConfig.liquid && sectionConfig.maxHeight == null) classNames.push('fc-scrollgrid-section-liquid');
    if (sectionConfig.isSticky) classNames.push('fc-scrollgrid-section-sticky');
    return classNames;
}
function renderScrollShim(arg) {
    return _vdomJs.createElement("div", {
        className: "fc-scrollgrid-sticky-shim",
        style: {
            width: arg.clientWidth,
            minWidth: arg.tableMinWidth
        }
    });
}
function getStickyHeaderDates(options) {
    var stickyHeaderDates = options.stickyHeaderDates;
    if (stickyHeaderDates == null || stickyHeaderDates === 'auto') stickyHeaderDates = options.height === 'auto' || options.viewHeight === 'auto';
    return stickyHeaderDates;
}
function getStickyFooterScrollbar(options) {
    var stickyFooterScrollbar = options.stickyFooterScrollbar;
    if (stickyFooterScrollbar == null || stickyFooterScrollbar === 'auto') stickyFooterScrollbar = options.height === 'auto' || options.viewHeight === 'auto';
    return stickyFooterScrollbar;
}
var SimpleScrollGrid = function(_super) {
    _tslib.__extends(SimpleScrollGrid1, _super);
    function SimpleScrollGrid1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.processCols = memoize(function(a) {
            return a;
        }, isColPropsEqual); // so we get same `cols` props every time
        // yucky to memoize VNodes, but much more efficient for consumers
        _this.renderMicroColGroup = memoize(renderMicroColGroup);
        _this.scrollerRefs = new RefMap();
        _this.scrollerElRefs = new RefMap(_this._handleScrollerEl.bind(_this));
        _this.state = {
            shrinkWidth: null,
            forceYScrollbars: false,
            scrollerClientWidths: {
            },
            scrollerClientHeights: {
            }
        };
        // TODO: can do a really simple print-view. dont need to join rows
        _this.handleSizing = function() {
            _this.setState(_tslib.__assign({
                shrinkWidth: _this.computeShrinkWidth()
            }, _this.computeScrollerDims()));
        };
        return _this;
    }
    SimpleScrollGrid1.prototype.render = function() {
        var _a = this, props = _a.props, state = _a.state, context = _a.context;
        var sectionConfigs = props.sections || [];
        var cols = this.processCols(props.cols);
        var microColGroupNode = this.renderMicroColGroup(cols, state.shrinkWidth);
        var classNames = getScrollGridClassNames(props.liquid, context);
        if (props.collapsibleWidth) classNames.push('fc-scrollgrid-collapsible');
        // TODO: make DRY
        var configCnt = sectionConfigs.length;
        var configI = 0;
        var currentConfig;
        var headSectionNodes = [];
        var bodySectionNodes = [];
        var footSectionNodes = [];
        while(configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'header'){
            headSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
            configI += 1;
        }
        while(configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'body'){
            bodySectionNodes.push(this.renderSection(currentConfig, microColGroupNode, false));
            configI += 1;
        }
        while(configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'footer'){
            footSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
            configI += 1;
        }
        // firefox bug: when setting height on table and there is a thead or tfoot,
        // the necessary height:100% on the liquid-height body section forces the *whole* table to be taller. (bug #5524)
        // use getCanVGrowWithinCell as a way to detect table-stupid firefox.
        // if so, use a simpler dom structure, jam everything into a lone tbody.
        var isBuggy = !getCanVGrowWithinCell();
        var roleAttrs = {
            role: 'rowgroup'
        };
        return _vdomJs.createElement('table', {
            role: 'grid',
            className: classNames.join(' '),
            style: {
                height: props.height
            }
        }, Boolean(!isBuggy && headSectionNodes.length) && _vdomJs.createElement.apply(void 0, _tslib.__spreadArray([
            'thead',
            roleAttrs
        ], headSectionNodes)), Boolean(!isBuggy && bodySectionNodes.length) && _vdomJs.createElement.apply(void 0, _tslib.__spreadArray([
            'tbody',
            roleAttrs
        ], bodySectionNodes)), Boolean(!isBuggy && footSectionNodes.length) && _vdomJs.createElement.apply(void 0, _tslib.__spreadArray([
            'tfoot',
            roleAttrs
        ], footSectionNodes)), isBuggy && _vdomJs.createElement.apply(void 0, _tslib.__spreadArray(_tslib.__spreadArray(_tslib.__spreadArray([
            'tbody',
            roleAttrs
        ], headSectionNodes), bodySectionNodes), footSectionNodes)));
    };
    SimpleScrollGrid1.prototype.renderSection = function(sectionConfig, microColGroupNode, isHeader) {
        if ('outerContent' in sectionConfig) return _vdomJs.createElement(_vdomJs.Fragment, {
            key: sectionConfig.key
        }, sectionConfig.outerContent);
        return _vdomJs.createElement("tr", {
            key: sectionConfig.key,
            role: "presentation",
            className: getSectionClassNames(sectionConfig, this.props.liquid).join(' ')
        }, this.renderChunkTd(sectionConfig, microColGroupNode, sectionConfig.chunk, isHeader));
    };
    SimpleScrollGrid1.prototype.renderChunkTd = function(sectionConfig, microColGroupNode, chunkConfig, isHeader) {
        if ('outerContent' in chunkConfig) return chunkConfig.outerContent;
        var props = this.props;
        var _a = this.state, forceYScrollbars = _a.forceYScrollbars, scrollerClientWidths = _a.scrollerClientWidths, scrollerClientHeights = _a.scrollerClientHeights;
        var needsYScrolling = getAllowYScrolling(props, sectionConfig); // TODO: do lazily. do in section config?
        var isLiquid = getSectionHasLiquidHeight(props, sectionConfig);
        // for `!props.liquid` - is WHOLE scrollgrid natural height?
        // TODO: do same thing in advanced scrollgrid? prolly not b/c always has horizontal scrollbars
        var overflowY = !props.liquid ? 'visible' : forceYScrollbars ? 'scroll' : !needsYScrolling ? 'hidden' : 'auto';
        var sectionKey = sectionConfig.key;
        var content = renderChunkContent(sectionConfig, chunkConfig, {
            tableColGroupNode: microColGroupNode,
            tableMinWidth: '',
            clientWidth: !props.collapsibleWidth && scrollerClientWidths[sectionKey] !== undefined ? scrollerClientWidths[sectionKey] : null,
            clientHeight: scrollerClientHeights[sectionKey] !== undefined ? scrollerClientHeights[sectionKey] : null,
            expandRows: sectionConfig.expandRows,
            syncRowHeights: false,
            rowSyncHeights: [],
            reportRowHeightChange: function() {
            }
        }, isHeader);
        return _vdomJs.createElement(isHeader ? 'th' : 'td', {
            ref: chunkConfig.elRef,
            role: 'presentation'
        }, _vdomJs.createElement("div", {
            className: "fc-scroller-harness" + (isLiquid ? ' fc-scroller-harness-liquid' : '')
        }, _vdomJs.createElement(Scroller, {
            ref: this.scrollerRefs.createRef(sectionKey),
            elRef: this.scrollerElRefs.createRef(sectionKey),
            overflowY: overflowY,
            overflowX: !props.liquid ? 'visible' : 'hidden' /* natural height? */ ,
            maxHeight: sectionConfig.maxHeight,
            liquid: isLiquid,
            liquidIsAbsolute: true
        }, content)));
    };
    SimpleScrollGrid1.prototype._handleScrollerEl = function(scrollerEl, key) {
        var section = getSectionByKey(this.props.sections, key);
        if (section) setRef(section.chunk.scrollerElRef, scrollerEl);
    };
    SimpleScrollGrid1.prototype.componentDidMount = function() {
        this.handleSizing();
        this.context.addResizeHandler(this.handleSizing);
    };
    SimpleScrollGrid1.prototype.componentDidUpdate = function() {
        // TODO: need better solution when state contains non-sizing things
        this.handleSizing();
    };
    SimpleScrollGrid1.prototype.componentWillUnmount = function() {
        this.context.removeResizeHandler(this.handleSizing);
    };
    SimpleScrollGrid1.prototype.computeShrinkWidth = function() {
        return hasShrinkWidth(this.props.cols) ? computeShrinkWidth(this.scrollerElRefs.getAll()) : 0;
    };
    SimpleScrollGrid1.prototype.computeScrollerDims = function() {
        var scrollbarWidth = getScrollbarWidths();
        var _a = this, scrollerRefs = _a.scrollerRefs, scrollerElRefs = _a.scrollerElRefs;
        var forceYScrollbars = false;
        var scrollerClientWidths = {
        };
        var scrollerClientHeights = {
        };
        for(var sectionKey in scrollerRefs.currentMap){
            var scroller = scrollerRefs.currentMap[sectionKey];
            if (scroller && scroller.needsYScrolling()) {
                forceYScrollbars = true;
                break;
            }
        }
        for(var _i = 0, _b = this.props.sections; _i < _b.length; _i++){
            var section = _b[_i];
            var sectionKey = section.key;
            var scrollerEl = scrollerElRefs.currentMap[sectionKey];
            if (scrollerEl) {
                var harnessEl = scrollerEl.parentNode; // TODO: weird way to get this. need harness b/c doesn't include table borders
                scrollerClientWidths[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().width - (forceYScrollbars ? scrollbarWidth.y // use global because scroller might not have scrollbars yet but will need them in future
                 : 0));
                scrollerClientHeights[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().height);
            }
        }
        return {
            forceYScrollbars: forceYScrollbars,
            scrollerClientWidths: scrollerClientWidths,
            scrollerClientHeights: scrollerClientHeights
        };
    };
    return SimpleScrollGrid1;
}(BaseComponent);
SimpleScrollGrid.addStateEquality({
    scrollerClientWidths: isPropsEqual,
    scrollerClientHeights: isPropsEqual
});
function getSectionByKey(sections, key) {
    for(var _i = 0, sections_1 = sections; _i < sections_1.length; _i++){
        var section = sections_1[_i];
        if (section.key === key) return section;
    }
    return null;
}
var EventRoot = function(_super) {
    _tslib.__extends(EventRoot1, _super);
    function EventRoot1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.elRef = _vdomJs.createRef();
        return _this;
    }
    EventRoot1.prototype.render = function() {
        var _a = this, props = _a.props, context = _a.context;
        var options = context.options;
        var seg = props.seg;
        var eventRange = seg.eventRange;
        var ui = eventRange.ui;
        var hookProps = {
            event: new EventApi(context, eventRange.def, eventRange.instance),
            view: context.viewApi,
            timeText: props.timeText,
            textColor: ui.textColor,
            backgroundColor: ui.backgroundColor,
            borderColor: ui.borderColor,
            isDraggable: !props.disableDragging && computeSegDraggable(seg, context),
            isStartResizable: !props.disableResizing && computeSegStartResizable(seg, context),
            isEndResizable: !props.disableResizing && computeSegEndResizable(seg),
            isMirror: Boolean(props.isDragging || props.isResizing || props.isDateSelecting),
            isStart: Boolean(seg.isStart),
            isEnd: Boolean(seg.isEnd),
            isPast: Boolean(props.isPast),
            isFuture: Boolean(props.isFuture),
            isToday: Boolean(props.isToday),
            isSelected: Boolean(props.isSelected),
            isDragging: Boolean(props.isDragging),
            isResizing: Boolean(props.isResizing)
        };
        var standardClassNames = getEventClassNames(hookProps).concat(ui.classNames);
        return _vdomJs.createElement(RenderHook, {
            hookProps: hookProps,
            classNames: options.eventClassNames,
            content: options.eventContent,
            defaultContent: props.defaultContent,
            didMount: options.eventDidMount,
            willUnmount: options.eventWillUnmount,
            elRef: this.elRef
        }, function(rootElRef, customClassNames, innerElRef, innerContent) {
            return props.children(rootElRef, standardClassNames.concat(customClassNames), innerElRef, innerContent, hookProps);
        });
    };
    EventRoot1.prototype.componentDidMount = function() {
        setElSeg(this.elRef.current, this.props.seg);
    };
    /*
    need to re-assign seg to the element if seg changes, even if the element is the same
    */ EventRoot1.prototype.componentDidUpdate = function(prevProps) {
        var seg = this.props.seg;
        if (seg !== prevProps.seg) setElSeg(this.elRef.current, seg);
    };
    return EventRoot1;
}(BaseComponent);
// should not be a purecomponent
var StandardEvent = function(_super) {
    _tslib.__extends(StandardEvent1, _super);
    function StandardEvent1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StandardEvent1.prototype.render = function() {
        var _a = this, props = _a.props, context = _a.context;
        var seg = props.seg;
        var timeFormat = context.options.eventTimeFormat || props.defaultTimeFormat;
        var timeText = buildSegTimeText(seg, timeFormat, context, props.defaultDisplayEventTime, props.defaultDisplayEventEnd);
        return _vdomJs.createElement(EventRoot, {
            seg: seg,
            timeText: timeText,
            disableDragging: props.disableDragging,
            disableResizing: props.disableResizing,
            defaultContent: props.defaultContent || renderInnerContent$1,
            isDragging: props.isDragging,
            isResizing: props.isResizing,
            isDateSelecting: props.isDateSelecting,
            isSelected: props.isSelected,
            isPast: props.isPast,
            isFuture: props.isFuture,
            isToday: props.isToday
        }, function(rootElRef, classNames, innerElRef, innerContent, hookProps) {
            return _vdomJs.createElement("a", _tslib.__assign({
                className: props.extraClassNames.concat(classNames).join(' '),
                style: {
                    borderColor: hookProps.borderColor,
                    backgroundColor: hookProps.backgroundColor
                },
                ref: rootElRef
            }, getSegAnchorAttrs(seg, context)), _vdomJs.createElement("div", {
                className: "fc-event-main",
                ref: innerElRef,
                style: {
                    color: hookProps.textColor
                }
            }, innerContent), hookProps.isStartResizable && _vdomJs.createElement("div", {
                className: "fc-event-resizer fc-event-resizer-start"
            }), hookProps.isEndResizable && _vdomJs.createElement("div", {
                className: "fc-event-resizer fc-event-resizer-end"
            }));
        });
    };
    return StandardEvent1;
}(BaseComponent);
function renderInnerContent$1(innerProps) {
    return _vdomJs.createElement("div", {
        className: "fc-event-main-frame"
    }, innerProps.timeText && _vdomJs.createElement("div", {
        className: "fc-event-time"
    }, innerProps.timeText), _vdomJs.createElement("div", {
        className: "fc-event-title-container"
    }, _vdomJs.createElement("div", {
        className: "fc-event-title fc-sticky"
    }, innerProps.event.title || _vdomJs.createElement(_vdomJs.Fragment, null, "\u00A0"))));
}
var NowIndicatorRoot = function(props) {
    return _vdomJs.createElement(ViewContextType.Consumer, null, function(context) {
        var options = context.options;
        var hookProps = {
            isAxis: props.isAxis,
            date: context.dateEnv.toDate(props.date),
            view: context.viewApi
        };
        return _vdomJs.createElement(RenderHook, {
            hookProps: hookProps,
            classNames: options.nowIndicatorClassNames,
            content: options.nowIndicatorContent,
            didMount: options.nowIndicatorDidMount,
            willUnmount: options.nowIndicatorWillUnmount
        }, props.children);
    });
};
var DAY_NUM_FORMAT = createFormatter({
    day: 'numeric'
});
var DayCellContent = function(_super) {
    _tslib.__extends(DayCellContent1, _super);
    function DayCellContent1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayCellContent1.prototype.render = function() {
        var _a = this, props = _a.props, context = _a.context;
        var options = context.options;
        var hookProps = refineDayCellHookProps({
            date: props.date,
            dateProfile: props.dateProfile,
            todayRange: props.todayRange,
            showDayNumber: props.showDayNumber,
            extraProps: props.extraHookProps,
            viewApi: context.viewApi,
            dateEnv: context.dateEnv
        });
        return _vdomJs.createElement(ContentHook, {
            hookProps: hookProps,
            content: options.dayCellContent,
            defaultContent: props.defaultContent
        }, props.children);
    };
    return DayCellContent1;
}(BaseComponent);
function refineDayCellHookProps(raw) {
    var date = raw.date, dateEnv = raw.dateEnv;
    var dayMeta = getDateMeta(date, raw.todayRange, null, raw.dateProfile);
    return _tslib.__assign(_tslib.__assign(_tslib.__assign({
        date: dateEnv.toDate(date),
        view: raw.viewApi
    }, dayMeta), {
        dayNumberText: raw.showDayNumber ? dateEnv.format(date, DAY_NUM_FORMAT) : ''
    }), raw.extraProps);
}
var DayCellRoot = function(_super) {
    _tslib.__extends(DayCellRoot1, _super);
    function DayCellRoot1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.refineHookProps = memoizeObjArg(refineDayCellHookProps);
        _this.normalizeClassNames = buildClassNameNormalizer();
        return _this;
    }
    DayCellRoot1.prototype.render = function() {
        var _a = this, props = _a.props, context = _a.context;
        var options = context.options;
        var hookProps = this.refineHookProps({
            date: props.date,
            dateProfile: props.dateProfile,
            todayRange: props.todayRange,
            showDayNumber: props.showDayNumber,
            extraProps: props.extraHookProps,
            viewApi: context.viewApi,
            dateEnv: context.dateEnv
        });
        var classNames = getDayClassNames(hookProps, context.theme).concat(hookProps.isDisabled ? [] // don't use custom classNames if disabled
         : this.normalizeClassNames(options.dayCellClassNames, hookProps));
        var dataAttrs = hookProps.isDisabled ? {
        } : {
            'data-date': formatDayString(props.date)
        };
        return _vdomJs.createElement(MountHook, {
            hookProps: hookProps,
            didMount: options.dayCellDidMount,
            willUnmount: options.dayCellWillUnmount,
            elRef: props.elRef
        }, function(rootElRef) {
            return props.children(rootElRef, classNames, dataAttrs, hookProps.isDisabled);
        });
    };
    return DayCellRoot1;
}(BaseComponent);
function renderFill(fillType) {
    return _vdomJs.createElement("div", {
        className: "fc-" + fillType
    });
}
var BgEvent = function(props) {
    return _vdomJs.createElement(EventRoot, {
        defaultContent: renderInnerContent,
        seg: props.seg /* uselesss i think */ ,
        timeText: "",
        disableDragging: true,
        disableResizing: true,
        isDragging: false,
        isResizing: false,
        isDateSelecting: false,
        isSelected: false,
        isPast: props.isPast,
        isFuture: props.isFuture,
        isToday: props.isToday
    }, function(rootElRef, classNames, innerElRef, innerContent, hookProps) {
        return _vdomJs.createElement("div", {
            ref: rootElRef,
            className: [
                'fc-bg-event'
            ].concat(classNames).join(' '),
            style: {
                backgroundColor: hookProps.backgroundColor
            }
        }, innerContent);
    });
};
function renderInnerContent(props) {
    var title = props.event.title;
    return title && _vdomJs.createElement("div", {
        className: "fc-event-title"
    }, props.event.title);
}
var WeekNumberRoot = function(props) {
    return _vdomJs.createElement(ViewContextType.Consumer, null, function(context) {
        var dateEnv = context.dateEnv, options = context.options;
        var date = props.date;
        var format = options.weekNumberFormat || props.defaultFormat;
        var num = dateEnv.computeWeekNumber(date); // TODO: somehow use for formatting as well?
        var text = dateEnv.format(date, format);
        var hookProps = {
            num: num,
            text: text,
            date: date
        };
        return _vdomJs.createElement(RenderHook, {
            hookProps: hookProps,
            classNames: options.weekNumberClassNames,
            content: options.weekNumberContent,
            defaultContent: renderInner,
            didMount: options.weekNumberDidMount,
            willUnmount: options.weekNumberWillUnmount
        }, props.children);
    });
};
function renderInner(innerProps) {
    return innerProps.text;
}
var PADDING_FROM_VIEWPORT = 10;
var Popover = function(_super) {
    _tslib.__extends(Popover1, _super);
    function Popover1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            titleId: getUniqueDomId()
        };
        _this.handleRootEl = function(el) {
            _this.rootEl = el;
            if (_this.props.elRef) setRef(_this.props.elRef, el);
        };
        // Triggered when the user clicks *anywhere* in the document, for the autoHide feature
        _this.handleDocumentMouseDown = function(ev) {
            // only hide the popover if the click happened outside the popover
            var target = getEventTargetViaRoot(ev);
            if (!_this.rootEl.contains(target)) _this.handleCloseClick();
        };
        _this.handleDocumentKeyDown = function(ev) {
            if (ev.key === 'Escape') _this.handleCloseClick();
        };
        _this.handleCloseClick = function() {
            var onClose = _this.props.onClose;
            if (onClose) onClose();
        };
        return _this;
    }
    Popover1.prototype.render = function() {
        var _a = this.context, theme = _a.theme, options = _a.options;
        var _b = this, props = _b.props, state = _b.state;
        var classNames = [
            'fc-popover',
            theme.getClass('popover'), 
        ].concat(props.extraClassNames || []);
        return _vdomJs.createPortal(_vdomJs.createElement("div", _tslib.__assign({
            id: props.id,
            className: classNames.join(' '),
            "aria-labelledby": state.titleId
        }, props.extraAttrs, {
            ref: this.handleRootEl
        }), _vdomJs.createElement("div", {
            className: 'fc-popover-header ' + theme.getClass('popoverHeader')
        }, _vdomJs.createElement("span", {
            className: "fc-popover-title",
            id: state.titleId
        }, props.title), _vdomJs.createElement("span", {
            className: 'fc-popover-close ' + theme.getIconClass('close'),
            title: options.closeHint,
            onClick: this.handleCloseClick
        })), _vdomJs.createElement("div", {
            className: 'fc-popover-body ' + theme.getClass('popoverContent')
        }, props.children)), props.parentEl);
    };
    Popover1.prototype.componentDidMount = function() {
        document.addEventListener('mousedown', this.handleDocumentMouseDown);
        document.addEventListener('keydown', this.handleDocumentKeyDown);
        this.updateSize();
    };
    Popover1.prototype.componentWillUnmount = function() {
        document.removeEventListener('mousedown', this.handleDocumentMouseDown);
        document.removeEventListener('keydown', this.handleDocumentKeyDown);
    };
    Popover1.prototype.updateSize = function() {
        var isRtl = this.context.isRtl;
        var _a = this.props, alignmentEl = _a.alignmentEl, alignGridTop = _a.alignGridTop;
        var rootEl = this.rootEl;
        var alignmentRect = computeClippedClientRect(alignmentEl);
        if (alignmentRect) {
            var popoverDims = rootEl.getBoundingClientRect();
            // position relative to viewport
            var popoverTop = alignGridTop ? elementClosest(alignmentEl, '.fc-scrollgrid').getBoundingClientRect().top : alignmentRect.top;
            var popoverLeft = isRtl ? alignmentRect.right - popoverDims.width : alignmentRect.left;
            // constrain
            popoverTop = Math.max(popoverTop, PADDING_FROM_VIEWPORT);
            popoverLeft = Math.min(popoverLeft, document.documentElement.clientWidth - PADDING_FROM_VIEWPORT - popoverDims.width);
            popoverLeft = Math.max(popoverLeft, PADDING_FROM_VIEWPORT);
            var origin_1 = rootEl.offsetParent.getBoundingClientRect();
            applyStyle(rootEl, {
                top: popoverTop - origin_1.top,
                left: popoverLeft - origin_1.left
            });
        }
    };
    return Popover1;
}(BaseComponent);
var MorePopover = function(_super) {
    _tslib.__extends(MorePopover1, _super);
    function MorePopover1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleRootEl = function(rootEl) {
            _this.rootEl = rootEl;
            if (rootEl) _this.context.registerInteractiveComponent(_this, {
                el: rootEl,
                useEventCenter: false
            });
            else _this.context.unregisterInteractiveComponent(_this);
        };
        return _this;
    }
    MorePopover1.prototype.render = function() {
        var _a = this.context, options = _a.options, dateEnv = _a.dateEnv;
        var props = this.props;
        var startDate = props.startDate, todayRange = props.todayRange, dateProfile = props.dateProfile;
        var title = dateEnv.format(startDate, options.dayPopoverFormat);
        return _vdomJs.createElement(DayCellRoot, {
            date: startDate,
            dateProfile: dateProfile,
            todayRange: todayRange,
            elRef: this.handleRootEl
        }, function(rootElRef, dayClassNames, dataAttrs) {
            return _vdomJs.createElement(Popover, {
                elRef: rootElRef,
                id: props.id,
                title: title,
                extraClassNames: [
                    'fc-more-popover'
                ].concat(dayClassNames),
                extraAttrs: dataAttrs /* TODO: make these time-based when not whole-day? */ ,
                parentEl: props.parentEl,
                alignmentEl: props.alignmentEl,
                alignGridTop: props.alignGridTop,
                onClose: props.onClose
            }, _vdomJs.createElement(DayCellContent, {
                date: startDate,
                dateProfile: dateProfile,
                todayRange: todayRange
            }, function(innerElRef, innerContent) {
                return innerContent && _vdomJs.createElement("div", {
                    className: "fc-more-popover-misc",
                    ref: innerElRef
                }, innerContent);
            }), props.children);
        });
    };
    MorePopover1.prototype.queryHit = function(positionLeft, positionTop, elWidth, elHeight) {
        var _a = this, rootEl = _a.rootEl, props = _a.props;
        if (positionLeft >= 0 && positionLeft < elWidth && positionTop >= 0 && positionTop < elHeight) return {
            dateProfile: props.dateProfile,
            dateSpan: _tslib.__assign({
                allDay: true,
                range: {
                    start: props.startDate,
                    end: props.endDate
                }
            }, props.extraDateSpan),
            dayEl: rootEl,
            rect: {
                left: 0,
                top: 0,
                right: elWidth,
                bottom: elHeight
            },
            layer: 1
        };
        return null;
    };
    return MorePopover1;
}(DateComponent);
var MoreLinkRoot = function(_super) {
    _tslib.__extends(MoreLinkRoot1, _super);
    function MoreLinkRoot1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.linkElRef = _vdomJs.createRef();
        _this.state = {
            isPopoverOpen: false,
            popoverId: getUniqueDomId()
        };
        _this.handleClick = function(ev) {
            var _a1 = _this, props = _a1.props, context = _a1.context;
            var moreLinkClick = context.options.moreLinkClick;
            var date = computeRange(props).start;
            function buildPublicSeg(seg) {
                var _a = seg.eventRange, def = _a.def, instance = _a.instance, range = _a.range;
                return {
                    event: new EventApi(context, def, instance),
                    start: context.dateEnv.toDate(range.start),
                    end: context.dateEnv.toDate(range.end),
                    isStart: seg.isStart,
                    isEnd: seg.isEnd
                };
            }
            if (typeof moreLinkClick === 'function') moreLinkClick = moreLinkClick({
                date: date,
                allDay: Boolean(props.allDayDate),
                allSegs: props.allSegs.map(buildPublicSeg),
                hiddenSegs: props.hiddenSegs.map(buildPublicSeg),
                jsEvent: ev,
                view: context.viewApi
            });
            if (!moreLinkClick || moreLinkClick === 'popover') _this.setState({
                isPopoverOpen: true
            });
            else if (typeof moreLinkClick === 'string') context.calendarApi.zoomTo(date, moreLinkClick);
        };
        _this.handlePopoverClose = function() {
            _this.setState({
                isPopoverOpen: false
            });
        };
        return _this;
    }
    MoreLinkRoot1.prototype.render = function() {
        var _this = this;
        var _a = this, props = _a.props, state = _a.state;
        return _vdomJs.createElement(ViewContextType.Consumer, null, function(context) {
            var viewApi = context.viewApi, options = context.options, calendarApi = context.calendarApi;
            var moreLinkText = options.moreLinkText;
            var moreCnt = props.moreCnt;
            var range = computeRange(props);
            var text = typeof moreLinkText === 'function' // TODO: eventually use formatWithOrdinals
             ? moreLinkText.call(calendarApi, moreCnt) : "+" + moreCnt + " " + moreLinkText;
            var title = formatWithOrdinals(options.moreLinkHint, [
                moreCnt
            ], text);
            var hookProps = {
                num: moreCnt,
                shortText: "+" + moreCnt,
                text: text,
                view: viewApi
            };
            return _vdomJs.createElement(_vdomJs.Fragment, null, Boolean(props.moreCnt) && _vdomJs.createElement(RenderHook, {
                elRef: _this.linkElRef,
                hookProps: hookProps,
                classNames: options.moreLinkClassNames,
                content: options.moreLinkContent,
                defaultContent: props.defaultContent || renderMoreLinkInner,
                didMount: options.moreLinkDidMount,
                willUnmount: options.moreLinkWillUnmount
            }, function(rootElRef, customClassNames, innerElRef, innerContent) {
                return props.children(rootElRef, [
                    'fc-more-link'
                ].concat(customClassNames), innerElRef, innerContent, _this.handleClick, title, state.isPopoverOpen, state.isPopoverOpen ? state.popoverId : '');
            }), state.isPopoverOpen && _vdomJs.createElement(MorePopover, {
                id: state.popoverId,
                startDate: range.start,
                endDate: range.end,
                dateProfile: props.dateProfile,
                todayRange: props.todayRange,
                extraDateSpan: props.extraDateSpan,
                parentEl: _this.parentEl,
                alignmentEl: props.alignmentElRef.current,
                alignGridTop: props.alignGridTop,
                onClose: _this.handlePopoverClose
            }, props.popoverContent()));
        });
    };
    MoreLinkRoot1.prototype.componentDidMount = function() {
        this.updateParentEl();
    };
    MoreLinkRoot1.prototype.componentDidUpdate = function() {
        this.updateParentEl();
    };
    MoreLinkRoot1.prototype.updateParentEl = function() {
        if (this.linkElRef.current) this.parentEl = elementClosest(this.linkElRef.current, '.fc-view-harness');
    };
    return MoreLinkRoot1;
}(BaseComponent);
function renderMoreLinkInner(props) {
    return props.text;
}
function computeRange(props) {
    if (props.allDayDate) return {
        start: props.allDayDate,
        end: addDays(props.allDayDate, 1)
    };
    var hiddenSegs = props.hiddenSegs;
    return {
        start: computeEarliestSegStart(hiddenSegs),
        end: computeLatestSegEnd(hiddenSegs)
    };
}
function computeEarliestSegStart(segs) {
    return segs.reduce(pickEarliestStart).eventRange.range.start;
}
function pickEarliestStart(seg0, seg1) {
    return seg0.eventRange.range.start < seg1.eventRange.range.start ? seg0 : seg1;
}
function computeLatestSegEnd(segs) {
    return segs.reduce(pickLatestEnd).eventRange.range.end;
}
function pickLatestEnd(seg0, seg1) {
    return seg0.eventRange.range.end > seg1.eventRange.range.end ? seg0 : seg1;
}
// exports
// --------------------------------------------------------------------------------------------------
var version = '5.10.1'; // important to type it, so .d.ts has generic string

},{"./main.css":"g6qfj","tslib":"lRdW5","./vdom.js":"kQX1k","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6qfj":[function() {},{}],"kQX1k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-enable */ parcelHelpers.export(exports, "Component", ()=>Component
);
parcelHelpers.export(exports, "Fragment", ()=>Fragment
);
parcelHelpers.export(exports, "createContext", ()=>createContext
);
parcelHelpers.export(exports, "createElement", ()=>createElement
);
parcelHelpers.export(exports, "createPortal", ()=>createPortal
);
parcelHelpers.export(exports, "createRef", ()=>createRef
);
parcelHelpers.export(exports, "flushToDom", ()=>flushToDom
);
parcelHelpers.export(exports, "render", ()=>render
);
parcelHelpers.export(exports, "unmountComponentAtNode", ()=>unmountComponentAtNode
);
/// <reference types="@fullcalendar/core-preact" />
if (typeof FullCalendarVDom === 'undefined') throw new Error('Please import the top-level fullcalendar lib before attempting to import a plugin.');
var Component = FullCalendarVDom.Component;
var createElement = FullCalendarVDom.createElement;
var render = FullCalendarVDom.render;
var createRef = FullCalendarVDom.createRef;
var Fragment = FullCalendarVDom.Fragment;
var createContext = FullCalendarVDom.createContext;
var createPortal = FullCalendarVDom.createPortal;
var flushToDom = FullCalendarVDom.flushToDom;
var unmountComponentAtNode = FullCalendarVDom.unmountComponentAtNode;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8tgFI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*!
FullCalendar v5.10.1
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/ var _tslib = require("tslib");
var _rrule = require("rrule");
var _common = require("@fullcalendar/common");
var RRULE_EVENT_REFINERS = {
    rrule: _common.identity,
    exrule: _common.identity,
    exdate: _common.identity,
    duration: _common.createDuration
};
var recurring = {
    parse: function(eventProps, dateEnv) {
        if (eventProps.rrule != null) {
            var eventRRuleData = parseEventRRule(eventProps, dateEnv);
            if (eventRRuleData) return {
                typeData: {
                    rruleSet: eventRRuleData.rruleSet,
                    isTimeZoneSpecified: eventRRuleData.isTimeZoneSpecified
                },
                allDayGuess: !eventRRuleData.isTimeSpecified,
                duration: eventProps.duration
            };
        }
        return null;
    },
    expand: function(eventRRuleData, framingRange, dateEnv) {
        var dates;
        if (eventRRuleData.isTimeZoneSpecified) dates = eventRRuleData.rruleSet.between(dateEnv.toDate(framingRange.start), dateEnv.toDate(framingRange.end), true).map(function(date) {
            return dateEnv.createMarker(date);
        }); // convert UTC-zoned-date to locale datemarker
        else // when no timezone in given start/end, the rrule lib will assume UTC,
        // which is same as our DateMarkers. no need to manipulate
        dates = eventRRuleData.rruleSet.between(framingRange.start, framingRange.end, true);
        return dates;
    }
};
var main = _common.createPlugin({
    recurringTypes: [
        recurring
    ],
    eventRefiners: RRULE_EVENT_REFINERS
});
function parseEventRRule(eventProps, dateEnv) {
    var rruleSet;
    var isTimeSpecified = false;
    var isTimeZoneSpecified = false;
    if (typeof eventProps.rrule === 'string') {
        var res = parseRRuleString(eventProps.rrule);
        rruleSet = res.rruleSet;
        isTimeSpecified = res.isTimeSpecified;
        isTimeZoneSpecified = res.isTimeZoneSpecified;
    }
    if (typeof eventProps.rrule === 'object' && eventProps.rrule) {
        var res = parseRRuleObject(eventProps.rrule, dateEnv);
        rruleSet = new _rrule.RRuleSet();
        rruleSet.rrule(res.rrule);
        isTimeSpecified = res.isTimeSpecified;
        isTimeZoneSpecified = res.isTimeZoneSpecified;
    }
    // convery to arrays. TODO: general util?
    var exdateInputs = [].concat(eventProps.exdate || []);
    var exruleInputs = [].concat(eventProps.exrule || []);
    for(var _i = 0, exdateInputs_1 = exdateInputs; _i < exdateInputs_1.length; _i++){
        var exdateInput = exdateInputs_1[_i];
        var res = _common.parseMarker(exdateInput);
        isTimeSpecified = isTimeSpecified || !res.isTimeUnspecified;
        isTimeZoneSpecified = isTimeZoneSpecified || res.timeZoneOffset !== null;
        rruleSet.exdate(new Date(res.marker.valueOf() - (res.timeZoneOffset || 0) * 60000));
    }
    // TODO: exrule is deprecated. what to do? (https://icalendar.org/iCalendar-RFC-5545/a-3-deprecated-features.html)
    for(var _a = 0, exruleInputs_1 = exruleInputs; _a < exruleInputs_1.length; _a++){
        var exruleInput = exruleInputs_1[_a];
        var res = parseRRuleObject(exruleInput, dateEnv);
        isTimeSpecified = isTimeSpecified || res.isTimeSpecified;
        isTimeZoneSpecified = isTimeZoneSpecified || res.isTimeZoneSpecified;
        rruleSet.exrule(res.rrule);
    }
    return {
        rruleSet: rruleSet,
        isTimeSpecified: isTimeSpecified,
        isTimeZoneSpecified: isTimeZoneSpecified
    };
}
function parseRRuleObject(rruleInput, dateEnv) {
    var isTimeSpecified = false;
    var isTimeZoneSpecified = false;
    function processDateInput(dateInput) {
        if (typeof dateInput === 'string') {
            var markerData = _common.parseMarker(dateInput);
            if (markerData) {
                isTimeSpecified = isTimeSpecified || !markerData.isTimeUnspecified;
                isTimeZoneSpecified = isTimeZoneSpecified || markerData.timeZoneOffset !== null;
                return new Date(markerData.marker.valueOf() - (markerData.timeZoneOffset || 0) * 60000); // NOT DRY
            }
            return null;
        }
        return dateInput; // TODO: what about number timestamps?
    }
    var rruleOptions = _tslib.__assign(_tslib.__assign({
    }, rruleInput), {
        dtstart: processDateInput(rruleInput.dtstart),
        until: processDateInput(rruleInput.until),
        freq: convertConstant(rruleInput.freq),
        wkst: rruleInput.wkst == null ? (dateEnv.weekDow - 1 + 7) % 7 // convert Sunday-first to Monday-first
         : convertConstant(rruleInput.wkst),
        byweekday: convertConstants(rruleInput.byweekday)
    });
    return {
        rrule: new _rrule.RRule(rruleOptions),
        isTimeSpecified: isTimeSpecified,
        isTimeZoneSpecified: isTimeZoneSpecified
    };
}
function parseRRuleString(str) {
    var rruleSet = _rrule.rrulestr(str, {
        forceset: true
    });
    var analysis = analyzeRRuleString(str);
    return _tslib.__assign({
        rruleSet: rruleSet
    }, analysis);
}
function analyzeRRuleString(str) {
    var isTimeSpecified = false;
    var isTimeZoneSpecified = false;
    function processMatch(whole, introPart, datePart) {
        var result = _common.parseMarker(datePart);
        isTimeSpecified = isTimeSpecified || !result.isTimeUnspecified;
        isTimeZoneSpecified = isTimeZoneSpecified || result.timeZoneOffset !== null;
    }
    str.replace(/\b(DTSTART:)([^\n]*)/, processMatch);
    str.replace(/\b(EXDATE:)([^\n]*)/, processMatch);
    str.replace(/\b(UNTIL=)([^;\n]*)/, processMatch);
    return {
        isTimeSpecified: isTimeSpecified,
        isTimeZoneSpecified: isTimeZoneSpecified
    };
}
function convertConstants(input) {
    if (Array.isArray(input)) return input.map(convertConstant);
    return convertConstant(input);
}
function convertConstant(input) {
    if (typeof input === 'string') return _rrule.RRule[input.toUpperCase()];
    return input;
}
exports.default = main;

},{"tslib":"lRdW5","rrule":"3a2Xh","@fullcalendar/common":"2E3LE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3a2Xh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rrulestr", ()=>_rrulestr.rrulestr
);
parcelHelpers.export(exports, "Frequency", ()=>_types.Frequency
);
parcelHelpers.export(exports, "Weekday", ()=>_weekday.Weekday
);
parcelHelpers.export(exports, "RRule", ()=>_rruleDefault.default
);
parcelHelpers.export(exports, "RRuleSet", ()=>_rrulesetDefault.default
);
/*!
 * rrule.js - Library for working with recurrence rules for calendar dates.
 * https://github.com/jakubroztocil/rrule
 *
 * Copyright 2010, Jakub Roztocil and Lars Schoning
 * Licenced under the BSD licence.
 * https://github.com/jakubroztocil/rrule/blob/master/LICENCE
 *
 * Based on:
 * python-dateutil - Extensions to the standard Python datetime module.
 * Copyright (c) 2003-2011 - Gustavo Niemeyer <gustavo@niemeyer.net>
 * Copyright (c) 2012 - Tomi Pieviläinen <tomi.pievilainen@iki.fi>
 * https://github.com/jakubroztocil/rrule/blob/master/LICENCE
 *
 */ var _rrule = require("./rrule");
var _rruleDefault = parcelHelpers.interopDefault(_rrule);
var _rruleset = require("./rruleset");
var _rrulesetDefault = parcelHelpers.interopDefault(_rruleset);
var _rrulestr = require("./rrulestr");
var _types = require("./types");
var _weekday = require("./weekday");
exports.default = _rruleDefault.default;

},{"./rrule":"hNQhL","./rruleset":"571AO","./rrulestr":"bqgH6","./types":"gIncR","./weekday":"ggPwj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hNQhL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Days", ()=>Days
);
parcelHelpers.export(exports, "DEFAULT_OPTIONS", ()=>DEFAULT_OPTIONS
);
parcelHelpers.export(exports, "defaultKeys", ()=>defaultKeys
);
var _dateutil = require("./dateutil");
var _dateutilDefault = parcelHelpers.interopDefault(_dateutil);
var _iterresult = require("./iterresult");
var _iterresultDefault = parcelHelpers.interopDefault(_iterresult);
var _callbackiterresult = require("./callbackiterresult");
var _callbackiterresultDefault = parcelHelpers.interopDefault(_callbackiterresult);
var _index = require("./nlp/index");
var _types = require("./types");
var _parseoptions = require("./parseoptions");
var _parsestring = require("./parsestring");
var _optionstostring = require("./optionstostring");
var _cache = require("./cache");
var _weekday = require("./weekday");
var _index1 = require("./iter/index");
var Days = {
    MO: new _weekday.Weekday(0),
    TU: new _weekday.Weekday(1),
    WE: new _weekday.Weekday(2),
    TH: new _weekday.Weekday(3),
    FR: new _weekday.Weekday(4),
    SA: new _weekday.Weekday(5),
    SU: new _weekday.Weekday(6)
};
var DEFAULT_OPTIONS = {
    freq: _types.Frequency.YEARLY,
    dtstart: null,
    interval: 1,
    wkst: Days.MO,
    count: null,
    until: null,
    tzid: null,
    bysetpos: null,
    bymonth: null,
    bymonthday: null,
    bynmonthday: null,
    byyearday: null,
    byweekno: null,
    byweekday: null,
    bynweekday: null,
    byhour: null,
    byminute: null,
    bysecond: null,
    byeaster: null
};
var defaultKeys = Object.keys(DEFAULT_OPTIONS);
/**
 *
 * @param {Options?} options - see <http://labix.org/python-dateutil/#head-cf004ee9a75592797e076752b2a889c10f445418>
 *        The only required option is `freq`, one of RRule.YEARLY, RRule.MONTHLY, ...
 * @constructor
 */ var RRule = function() {
    function RRule1(options, noCache) {
        if (options === void 0) options = {
        };
        if (noCache === void 0) noCache = false;
        // RFC string
        this._cache = noCache ? null : new _cache.Cache();
        // used by toString()
        this.origOptions = _parseoptions.initializeOptions(options);
        var parsedOptions = _parseoptions.parseOptions(options).parsedOptions;
        this.options = parsedOptions;
    }
    RRule1.parseText = function(text, language) {
        return _index.parseText(text, language);
    };
    RRule1.fromText = function(text, language) {
        return _index.fromText(text, language);
    };
    RRule1.fromString = function(str) {
        return new RRule1(RRule1.parseString(str) || undefined);
    };
    RRule1.prototype._iter = function(iterResult) {
        return _index1.iter(iterResult, this.options);
    };
    RRule1.prototype._cacheGet = function(what, args) {
        if (!this._cache) return false;
        return this._cache._cacheGet(what, args);
    };
    RRule1.prototype._cacheAdd = function(what, value, args) {
        if (!this._cache) return;
        return this._cache._cacheAdd(what, value, args);
    };
    /**
     * @param {Function} iterator - optional function that will be called
     *                   on each date that is added. It can return false
     *                   to stop the iteration.
     * @return Array containing all recurrences.
     */ RRule1.prototype.all = function(iterator) {
        if (iterator) return this._iter(new _callbackiterresultDefault.default('all', {
        }, iterator));
        var result = this._cacheGet('all');
        if (result === false) {
            result = this._iter(new _iterresultDefault.default('all', {
            }));
            this._cacheAdd('all', result);
        }
        return result;
    };
    /**
     * Returns all the occurrences of the rrule between after and before.
     * The inc keyword defines what happens if after and/or before are
     * themselves occurrences. With inc == True, they will be included in the
     * list, if they are found in the recurrence set.
     * @return Array
     */ RRule1.prototype.between = function(after, before, inc, iterator) {
        if (inc === void 0) inc = false;
        if (!_dateutilDefault.default.isValidDate(after) || !_dateutilDefault.default.isValidDate(before)) throw new Error('Invalid date passed in to RRule.between');
        var args = {
            before: before,
            after: after,
            inc: inc
        };
        if (iterator) return this._iter(new _callbackiterresultDefault.default('between', args, iterator));
        var result = this._cacheGet('between', args);
        if (result === false) {
            result = this._iter(new _iterresultDefault.default('between', args));
            this._cacheAdd('between', result, args);
        }
        return result;
    };
    /**
     * Returns the last recurrence before the given datetime instance.
     * The inc keyword defines what happens if dt is an occurrence.
     * With inc == True, if dt itself is an occurrence, it will be returned.
     * @return Date or null
     */ RRule1.prototype.before = function(dt, inc) {
        if (inc === void 0) inc = false;
        if (!_dateutilDefault.default.isValidDate(dt)) throw new Error('Invalid date passed in to RRule.before');
        var args = {
            dt: dt,
            inc: inc
        };
        var result = this._cacheGet('before', args);
        if (result === false) {
            result = this._iter(new _iterresultDefault.default('before', args));
            this._cacheAdd('before', result, args);
        }
        return result;
    };
    /**
     * Returns the first recurrence after the given datetime instance.
     * The inc keyword defines what happens if dt is an occurrence.
     * With inc == True, if dt itself is an occurrence, it will be returned.
     * @return Date or null
     */ RRule1.prototype.after = function(dt, inc) {
        if (inc === void 0) inc = false;
        if (!_dateutilDefault.default.isValidDate(dt)) throw new Error('Invalid date passed in to RRule.after');
        var args = {
            dt: dt,
            inc: inc
        };
        var result = this._cacheGet('after', args);
        if (result === false) {
            result = this._iter(new _iterresultDefault.default('after', args));
            this._cacheAdd('after', result, args);
        }
        return result;
    };
    /**
     * Returns the number of recurrences in this set. It will have go trough
     * the whole recurrence, if this hasn't been done before.
     */ RRule1.prototype.count = function() {
        return this.all().length;
    };
    /**
     * Converts the rrule into its string representation
     * @see <http://www.ietf.org/rfc/rfc2445.txt>
     * @return String
     */ RRule1.prototype.toString = function() {
        return _optionstostring.optionsToString(this.origOptions);
    };
    /**
     * Will convert all rules described in nlp:ToText
     * to text.
     */ RRule1.prototype.toText = function(gettext, language, dateFormatter) {
        return _index.toText(this, gettext, language, dateFormatter);
    };
    RRule1.prototype.isFullyConvertibleToText = function() {
        return _index.isFullyConvertible(this);
    };
    /**
     * @return a RRule instance with the same freq and options
     *          as this one (cache is not cloned)
     */ RRule1.prototype.clone = function() {
        return new RRule1(this.origOptions);
    };
    // RRule class 'constants'
    RRule1.FREQUENCIES = [
        'YEARLY',
        'MONTHLY',
        'WEEKLY',
        'DAILY',
        'HOURLY',
        'MINUTELY',
        'SECONDLY'
    ];
    RRule1.YEARLY = _types.Frequency.YEARLY;
    RRule1.MONTHLY = _types.Frequency.MONTHLY;
    RRule1.WEEKLY = _types.Frequency.WEEKLY;
    RRule1.DAILY = _types.Frequency.DAILY;
    RRule1.HOURLY = _types.Frequency.HOURLY;
    RRule1.MINUTELY = _types.Frequency.MINUTELY;
    RRule1.SECONDLY = _types.Frequency.SECONDLY;
    RRule1.MO = Days.MO;
    RRule1.TU = Days.TU;
    RRule1.WE = Days.WE;
    RRule1.TH = Days.TH;
    RRule1.FR = Days.FR;
    RRule1.SA = Days.SA;
    RRule1.SU = Days.SU;
    RRule1.parseString = _parsestring.parseString;
    RRule1.optionsToString = _optionstostring.optionsToString;
    return RRule1;
}();
exports.default = RRule;

},{"./dateutil":"8L9ZE","./iterresult":"koGmZ","./callbackiterresult":"1mURn","./nlp/index":"eqEKu","./types":"gIncR","./parseoptions":"7IooI","./parsestring":"HkutZ","./optionstostring":"f4AHJ","./cache":"xppZb","./weekday":"ggPwj","./iter/index":"eg5U9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8L9ZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dateutil", ()=>dateutil
);
var _helpers = require("./helpers");
var dateutil;
(function(dateutil1) {
    dateutil1.MONTH_DAYS = [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];
    /**
     * Number of milliseconds of one day
     */ dateutil1.ONE_DAY = 86400000;
    /**
     * @see: <http://docs.python.org/library/datetime.html#datetime.MAXYEAR>
     */ dateutil1.MAXYEAR = 9999;
    /**
     * Python uses 1-Jan-1 as the base for calculating ordinals but we don't
     * want to confuse the JS engine with milliseconds > Number.MAX_NUMBER,
     * therefore we use 1-Jan-1970 instead
     */ dateutil1.ORDINAL_BASE = new Date(Date.UTC(1970, 0, 1));
    /**
     * Python: MO-SU: 0 - 6
     * JS: SU-SAT 0 - 6
     */ dateutil1.PY_WEEKDAYS = [
        6,
        0,
        1,
        2,
        3,
        4,
        5
    ];
    /**
     * py_date.timetuple()[7]
     */ dateutil1.getYearDay = function(date) {
        var dateNoTime = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
        return Math.ceil((dateNoTime.valueOf() - new Date(date.getUTCFullYear(), 0, 1).valueOf()) / dateutil1.ONE_DAY) + 1;
    };
    dateutil1.isLeapYear = function(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    };
    dateutil1.isDate = function(value) {
        return value instanceof Date;
    };
    dateutil1.isValidDate = function(value) {
        return dateutil1.isDate(value) && !isNaN(value.getTime());
    };
    /**
     * @return {Number} the date's timezone offset in ms
     */ dateutil1.tzOffset = function(date) {
        return date.getTimezoneOffset() * 60000;
    };
    /**
     * @see: <http://www.mcfedries.com/JavaScript/DaysBetween.asp>
     */ dateutil1.daysBetween = function(date1, date2) {
        // The number of milliseconds in one day
        // Convert both dates to milliseconds
        var date1ms = date1.getTime() - dateutil1.tzOffset(date1);
        var date2ms = date2.getTime() - dateutil1.tzOffset(date2);
        // Calculate the difference in milliseconds
        var differencems = date1ms - date2ms;
        // Convert back to days and return
        return Math.round(differencems / dateutil1.ONE_DAY);
    };
    /**
     * @see: <http://docs.python.org/library/datetime.html#datetime.date.toordinal>
     */ dateutil1.toOrdinal = function(date) {
        return dateutil1.daysBetween(date, dateutil1.ORDINAL_BASE);
    };
    /**
     * @see - <http://docs.python.org/library/datetime.html#datetime.date.fromordinal>
     */ dateutil1.fromOrdinal = function(ordinal) {
        return new Date(dateutil1.ORDINAL_BASE.getTime() + ordinal * dateutil1.ONE_DAY);
    };
    dateutil1.getMonthDays = function(date) {
        var month = date.getUTCMonth();
        return month === 1 && dateutil1.isLeapYear(date.getUTCFullYear()) ? 29 : dateutil1.MONTH_DAYS[month];
    };
    /**
     * @return {Number} python-like weekday
     */ dateutil1.getWeekday = function(date) {
        return dateutil1.PY_WEEKDAYS[date.getUTCDay()];
    };
    /**
     * @see: <http://docs.python.org/library/calendar.html#calendar.monthrange>
     */ dateutil1.monthRange = function(year, month) {
        var date = new Date(Date.UTC(year, month, 1));
        return [
            dateutil1.getWeekday(date),
            dateutil1.getMonthDays(date)
        ];
    };
    /**
     * @see: <http://docs.python.org/library/datetime.html#datetime.datetime.combine>
     */ dateutil1.combine = function(date, time) {
        time = time || date;
        return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds()));
    };
    dateutil1.clone = function(date) {
        var dolly = new Date(date.getTime());
        return dolly;
    };
    dateutil1.cloneDates = function(dates) {
        var clones = [];
        for(var i = 0; i < dates.length; i++)clones.push(dateutil1.clone(dates[i]));
        return clones;
    };
    /**
     * Sorts an array of Date or dateutil.Time objects
     */ dateutil1.sort = function(dates) {
        dates.sort(function(a, b) {
            return a.getTime() - b.getTime();
        });
    };
    dateutil1.timeToUntilString = function(time, utc) {
        if (utc === void 0) utc = true;
        var date = new Date(time);
        return [
            _helpers.padStart(date.getUTCFullYear().toString(), 4, '0'),
            _helpers.padStart(date.getUTCMonth() + 1, 2, '0'),
            _helpers.padStart(date.getUTCDate(), 2, '0'),
            'T',
            _helpers.padStart(date.getUTCHours(), 2, '0'),
            _helpers.padStart(date.getUTCMinutes(), 2, '0'),
            _helpers.padStart(date.getUTCSeconds(), 2, '0'),
            utc ? 'Z' : ''
        ].join('');
    };
    dateutil1.untilStringToDate = function(until) {
        var re = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/;
        var bits = re.exec(until);
        if (!bits) throw new Error("Invalid UNTIL value: " + until);
        return new Date(Date.UTC(parseInt(bits[1], 10), parseInt(bits[2], 10) - 1, parseInt(bits[3], 10), parseInt(bits[5], 10) || 0, parseInt(bits[6], 10) || 0, parseInt(bits[7], 10) || 0));
    };
})(dateutil || (dateutil = {
}));
exports.default = dateutil;

},{"./helpers":"9yiPH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9yiPH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPresent", ()=>isPresent
);
parcelHelpers.export(exports, "isNumber", ()=>isNumber
);
parcelHelpers.export(exports, "isWeekdayStr", ()=>isWeekdayStr
);
parcelHelpers.export(exports, "isArray", ()=>isArray
);
parcelHelpers.export(exports, "range", ()=>range
);
parcelHelpers.export(exports, "clone", ()=>clone
);
parcelHelpers.export(exports, "repeat", ()=>repeat
);
parcelHelpers.export(exports, "toArray", ()=>toArray
);
parcelHelpers.export(exports, "padStart", ()=>padStart
);
parcelHelpers.export(exports, "split", ()=>split
);
parcelHelpers.export(exports, "pymod", ()=>pymod
);
parcelHelpers.export(exports, "divmod", ()=>divmod
);
parcelHelpers.export(exports, "empty", ()=>empty
);
parcelHelpers.export(exports, "notEmpty", ()=>notEmpty
);
parcelHelpers.export(exports, "includes", ()=>includes
);
// =============================================================================
// Helper functions
// =============================================================================
var _weekday = require("./weekday");
var isPresent = function(value) {
    return value !== null && value !== undefined;
};
var isNumber = function(value) {
    return typeof value === 'number';
};
var isWeekdayStr = function(value) {
    return _weekday.ALL_WEEKDAYS.indexOf(value) >= 0;
};
var isArray = Array.isArray;
var range = function(start, end) {
    if (end === void 0) end = start;
    if (arguments.length === 1) {
        end = start;
        start = 0;
    }
    var rang = [];
    for(var i = start; i < end; i++)rang.push(i);
    return rang;
};
var clone = function(array) {
    return [].concat(array);
};
var repeat = function(value, times) {
    var i = 0;
    var array = [];
    if (isArray(value)) for(; i < times; i++)array[i] = [].concat(value);
    else for(; i < times; i++)array[i] = value;
    return array;
};
var toArray = function(item) {
    if (isArray(item)) return item;
    return [
        item
    ];
};
function padStart(item, targetLength, padString) {
    if (padString === void 0) padString = ' ';
    var str = String(item);
    targetLength = targetLength >> 0;
    if (str.length > targetLength) return String(str);
    targetLength = targetLength - str.length;
    if (targetLength > padString.length) padString += repeat(padString, targetLength / padString.length);
    return padString.slice(0, targetLength) + String(str);
}
var split = function(str, sep, num) {
    var splits = str.split(sep);
    return num ? splits.slice(0, num).concat([
        splits.slice(num).join(sep)
    ]) : splits;
};
var pymod = function(a, b) {
    var r = a % b;
    // If r and b differ in sign, add b to wrap the result to the correct sign.
    return r * b < 0 ? r + b : r;
};
var divmod = function(a, b) {
    return {
        div: Math.floor(a / b),
        mod: pymod(a, b)
    };
};
var empty = function(obj) {
    return !isPresent(obj) || obj.length === 0;
};
var notEmpty = function(obj) {
    return !empty(obj);
};
var includes = function(arr, val) {
    return notEmpty(arr) && arr.indexOf(val) !== -1;
};

},{"./weekday":"ggPwj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ggPwj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ALL_WEEKDAYS", ()=>ALL_WEEKDAYS
);
parcelHelpers.export(exports, "Weekday", ()=>Weekday
);
var ALL_WEEKDAYS = [
    'MO',
    'TU',
    'WE',
    'TH',
    'FR',
    'SA',
    'SU'
];
var Weekday = function() {
    function Weekday1(weekday, n) {
        if (n === 0) throw new Error("Can't create weekday with n == 0");
        this.weekday = weekday;
        this.n = n;
    }
    Weekday1.fromStr = function(str) {
        return new Weekday1(ALL_WEEKDAYS.indexOf(str));
    };
    // __call__ - Cannot call the object directly, do it through
    // e.g. RRule.TH.nth(-1) instead,
    Weekday1.prototype.nth = function(n) {
        return this.n === n ? this : new Weekday1(this.weekday, n);
    };
    // __eq__
    Weekday1.prototype.equals = function(other) {
        return this.weekday === other.weekday && this.n === other.n;
    };
    // __repr__
    Weekday1.prototype.toString = function() {
        var s = ALL_WEEKDAYS[this.weekday];
        if (this.n) s = (this.n > 0 ? '+' : '') + String(this.n) + s;
        return s;
    };
    Weekday1.prototype.getJsWeekday = function() {
        return this.weekday === 6 ? 0 : this.weekday + 1;
    };
    return Weekday1;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"koGmZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This class helps us to emulate python's generators, sorta.
 */ var IterResult = function() {
    function IterResult1(method, args) {
        this.minDate = null;
        this.maxDate = null;
        this._result = [];
        this.total = 0;
        this.method = method;
        this.args = args;
        if (method === 'between') {
            this.maxDate = args.inc ? args.before : new Date(args.before.getTime() - 1);
            this.minDate = args.inc ? args.after : new Date(args.after.getTime() + 1);
        } else if (method === 'before') this.maxDate = args.inc ? args.dt : new Date(args.dt.getTime() - 1);
        else if (method === 'after') this.minDate = args.inc ? args.dt : new Date(args.dt.getTime() + 1);
    }
    /**
     * Possibly adds a date into the result.
     *
     * @param {Date} date - the date isn't necessarly added to the result
     *                      list (if it is too late/too early)
     * @return {Boolean} true if it makes sense to continue the iteration
     *                   false if we're done.
     */ IterResult1.prototype.accept = function(date) {
        ++this.total;
        var tooEarly = this.minDate && date < this.minDate;
        var tooLate = this.maxDate && date > this.maxDate;
        if (this.method === 'between') {
            if (tooEarly) return true;
            if (tooLate) return false;
        } else if (this.method === 'before') {
            if (tooLate) return false;
        } else if (this.method === 'after') {
            if (tooEarly) return true;
            this.add(date);
            return false;
        }
        return this.add(date);
    };
    /**
     *
     * @param {Date} date that is part of the result.
     * @return {Boolean} whether we are interested in more values.
     */ IterResult1.prototype.add = function(date) {
        this._result.push(date);
        return true;
    };
    /**
     * 'before' and 'after' return only one date, whereas 'all'
     * and 'between' an array.
     * @return {Date,Array?}
     */ IterResult1.prototype.getValue = function() {
        var res = this._result;
        switch(this.method){
            case 'all':
            case 'between':
                return res;
            case 'before':
            case 'after':
            default:
                return res.length ? res[res.length - 1] : null;
        }
    };
    IterResult1.prototype.clone = function() {
        return new IterResult1(this.method, this.args);
    };
    return IterResult1;
}();
exports.default = IterResult;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mURn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tslib = require("tslib");
var _iterresult = require("./iterresult");
var _iterresultDefault = parcelHelpers.interopDefault(_iterresult);
/**
 * IterResult subclass that calls a callback function on each add,
 * and stops iterating when the callback returns false.
 */ var CallbackIterResult = function(_super) {
    _tslib.__extends(CallbackIterResult1, _super);
    function CallbackIterResult1(method, args, iterator) {
        var _this = _super.call(this, method, args) || this;
        _this.iterator = iterator;
        return _this;
    }
    CallbackIterResult1.prototype.add = function(date) {
        if (this.iterator(date, this._result.length)) {
            this._result.push(date);
            return true;
        }
        return false;
    };
    return CallbackIterResult1;
}(_iterresultDefault.default);
exports.default = CallbackIterResult;

},{"tslib":"iT5OF","./iterresult":"koGmZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iT5OF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends
);
parcelHelpers.export(exports, "__assign", ()=>__assign
);
parcelHelpers.export(exports, "__rest", ()=>__rest
);
parcelHelpers.export(exports, "__decorate", ()=>__decorate
);
parcelHelpers.export(exports, "__param", ()=>__param
);
parcelHelpers.export(exports, "__metadata", ()=>__metadata
);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter
);
parcelHelpers.export(exports, "__generator", ()=>__generator
);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding
);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar
);
parcelHelpers.export(exports, "__values", ()=>__values
);
parcelHelpers.export(exports, "__read", ()=>__read
);
parcelHelpers.export(exports, "__spread", ()=>__spread
);
parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays
);
parcelHelpers.export(exports, "__await", ()=>__await
);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator
);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator
);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues
);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject
);
parcelHelpers.export(exports, "__importStar", ()=>__importStar
);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault
);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet
);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {
    };
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
}
function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function __exportStar(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
    return i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
}
function __asyncDelegator(o) {
    var i, p;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
    return i = {
    }, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    privateMap.set(receiver, value);
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eqEKu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromText", ()=>fromText
);
parcelHelpers.export(exports, "parseText", ()=>_parsetextDefault.default
);
parcelHelpers.export(exports, "isFullyConvertible", ()=>isFullyConvertible
);
parcelHelpers.export(exports, "toText", ()=>toText
);
var _totext = require("./totext");
var _totextDefault = parcelHelpers.interopDefault(_totext);
var _parsetext = require("./parsetext");
var _parsetextDefault = parcelHelpers.interopDefault(_parsetext);
var _index = require("../index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _types = require("../types");
var _i18N = require("./i18n");
var _i18NDefault = parcelHelpers.interopDefault(_i18N);
/*!
* rrule.js - Library for working with recurrence rules for calendar dates.
* https://github.com/jakubroztocil/rrule
*
* Copyright 2010, Jakub Roztocil and Lars Schoning
* Licenced under the BSD licence.
* https://github.com/jakubroztocil/rrule/blob/master/LICENCE
*
*/ /**
 *
 * Implementation of RRule.fromText() and RRule::toText().
 *
 *
 * On the client side, this file needs to be included
 * when those functions are used.
 *
 */ // =============================================================================
// fromText
// =============================================================================
/**
 * Will be able to convert some of the below described rules from
 * text format to a rule object.
 *
 *
 * RULES
 *
 * Every ([n])
 *       day(s)
 *     | [weekday], ..., (and) [weekday]
 *     | weekday(s)
 *     | week(s)
 *     | month(s)
 *     | [month], ..., (and) [month]
 *     | year(s)
 *
 *
 * Plus 0, 1, or multiple of these:
 *
 * on [weekday], ..., (or) [weekday] the [monthday], [monthday], ... (or) [monthday]
 *
 * on [weekday], ..., (and) [weekday]
 *
 * on the [monthday], [monthday], ... (and) [monthday] (day of the month)
 *
 * on the [nth-weekday], ..., (and) [nth-weekday] (of the month/year)
 *
 *
 * Plus 0 or 1 of these:
 *
 * for [n] time(s)
 *
 * until [date]
 *
 * Plus (.)
 *
 *
 * Definitely no supported for parsing:
 *
 * (for year):
 *     in week(s) [n], ..., (and) [n]
 *
 *     on the [yearday], ..., (and) [n] day of the year
 *     on day [yearday], ..., (and) [n]
 *
 *
 * NON-TERMINALS
 *
 * [n]: 1, 2 ..., one, two, three ..
 * [month]: January, February, March, April, May, ... December
 * [weekday]: Monday, ... Sunday
 * [nth-weekday]: first [weekday], 2nd [weekday], ... last [weekday], ...
 * [monthday]: first, 1., 2., 1st, 2nd, second, ... 31st, last day, 2nd last day, ..
 * [date]:
 *     [month] (0-31(,) ([year])),
 *     (the) 0-31.(1-12.([year])),
 *     (the) 0-31/(1-12/([year])),
 *     [weekday]
 *
 * [year]: 0000, 0001, ... 01, 02, ..
 *
 * Definitely not supported for parsing:
 *
 * [yearday]: first, 1., 2., 1st, 2nd, second, ... 366th, last day, 2nd last day, ..
 *
 * @param {String} text
 * @return {Object, Boolean} the rule, or null.
 */ var fromText = function(text, language) {
    if (language === void 0) language = _i18NDefault.default;
    return new _indexDefault.default(_parsetextDefault.default(text, language) || undefined);
};
var common = [
    'count',
    'until',
    'interval',
    'byweekday',
    'bymonthday',
    'bymonth'
];
_totextDefault.default.IMPLEMENTED = [];
_totextDefault.default.IMPLEMENTED[_types.Frequency.HOURLY] = common;
_totextDefault.default.IMPLEMENTED[_types.Frequency.MINUTELY] = common;
_totextDefault.default.IMPLEMENTED[_types.Frequency.DAILY] = [
    'byhour'
].concat(common);
_totextDefault.default.IMPLEMENTED[_types.Frequency.WEEKLY] = common;
_totextDefault.default.IMPLEMENTED[_types.Frequency.MONTHLY] = common;
_totextDefault.default.IMPLEMENTED[_types.Frequency.YEARLY] = [
    'byweekno',
    'byyearday'
].concat(common);
// =============================================================================
// Export
// =============================================================================
var toText = function(rrule, gettext, language, dateFormatter) {
    return new _totextDefault.default(rrule, gettext, language, dateFormatter).toString();
};
var isFullyConvertible = _totextDefault.default.isFullyConvertible;

},{"./totext":"h928u","./parsetext":"9R5KL","../index":"3a2Xh","../types":"gIncR","./i18n":"fEd3v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h928u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _i18N = require("./i18n");
var _i18NDefault = parcelHelpers.interopDefault(_i18N);
var _index = require("../index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _helpers = require("../helpers");
// =============================================================================
// Helper functions
// =============================================================================
/**
 * Return true if a value is in an array
 */ var contains = function(arr, val) {
    return arr.indexOf(val) !== -1;
};
var defaultGetText = function(id) {
    return id.toString();
};
var defaultDateFormatter = function(year, month, day) {
    return month + " " + day + ", " + year;
};
/**
 *
 * @param {RRule} rrule
 * Optional:
 * @param {Function} gettext function
 * @param {Object} language definition
 * @constructor
 */ var ToText = function() {
    function ToText1(rrule, gettext, language, dateFormatter) {
        if (gettext === void 0) gettext = defaultGetText;
        if (language === void 0) language = _i18NDefault.default;
        if (dateFormatter === void 0) dateFormatter = defaultDateFormatter;
        this.text = [];
        this.language = language || _i18NDefault.default;
        this.gettext = gettext;
        this.dateFormatter = dateFormatter;
        this.rrule = rrule;
        this.options = rrule.options;
        this.origOptions = rrule.origOptions;
        if (this.origOptions.bymonthday) {
            var bymonthday = [].concat(this.options.bymonthday);
            var bynmonthday = [].concat(this.options.bynmonthday);
            bymonthday.sort(function(a, b) {
                return a - b;
            });
            bynmonthday.sort(function(a, b) {
                return b - a;
            });
            // 1, 2, 3, .., -5, -4, -3, ..
            this.bymonthday = bymonthday.concat(bynmonthday);
            if (!this.bymonthday.length) this.bymonthday = null;
        }
        if (_helpers.isPresent(this.origOptions.byweekday)) {
            var byweekday = !_helpers.isArray(this.origOptions.byweekday) ? [
                this.origOptions.byweekday
            ] : this.origOptions.byweekday;
            var days = String(byweekday);
            this.byweekday = {
                allWeeks: byweekday.filter(function(weekday) {
                    return !weekday.n;
                }),
                someWeeks: byweekday.filter(function(weekday) {
                    return Boolean(weekday.n);
                }),
                isWeekdays: days.indexOf('MO') !== -1 && days.indexOf('TU') !== -1 && days.indexOf('WE') !== -1 && days.indexOf('TH') !== -1 && days.indexOf('FR') !== -1 && days.indexOf('SA') === -1 && days.indexOf('SU') === -1,
                isEveryDay: days.indexOf('MO') !== -1 && days.indexOf('TU') !== -1 && days.indexOf('WE') !== -1 && days.indexOf('TH') !== -1 && days.indexOf('FR') !== -1 && days.indexOf('SA') !== -1 && days.indexOf('SU') !== -1
            };
            var sortWeekDays = function(a, b) {
                return a.weekday - b.weekday;
            };
            this.byweekday.allWeeks.sort(sortWeekDays);
            this.byweekday.someWeeks.sort(sortWeekDays);
            if (!this.byweekday.allWeeks.length) this.byweekday.allWeeks = null;
            if (!this.byweekday.someWeeks.length) this.byweekday.someWeeks = null;
        } else this.byweekday = null;
    }
    /**
     * Test whether the rrule can be fully converted to text.
     * @param {RRule} rrule
     * @return {Boolean}
     */ ToText1.isFullyConvertible = function(rrule) {
        var canConvert = true;
        if (!(rrule.options.freq in ToText1.IMPLEMENTED)) return false;
        if (rrule.origOptions.until && rrule.origOptions.count) return false;
        for(var key in rrule.origOptions){
            if (contains([
                'dtstart',
                'wkst',
                'freq'
            ], key)) return true;
            if (!contains(ToText1.IMPLEMENTED[rrule.options.freq], key)) return false;
        }
        return canConvert;
    };
    ToText1.prototype.isFullyConvertible = function() {
        return ToText1.isFullyConvertible(this.rrule);
    };
    /**
     * Perform the conversion. Only some of the frequencies are supported.
     * If some of the rrule's options aren't supported, they'll
     * be omitted from the output an "(~ approximate)" will be appended.
     * @return {*}
     */ ToText1.prototype.toString = function() {
        var gettext = this.gettext;
        if (!(this.options.freq in ToText1.IMPLEMENTED)) return gettext('RRule error: Unable to fully convert this rrule to text');
        this.text = [
            gettext('every')
        ];
        // @ts-ignore
        this[_indexDefault.default.FREQUENCIES[this.options.freq]]();
        if (this.options.until) {
            this.add(gettext('until'));
            var until = this.options.until;
            this.add(this.dateFormatter(until.getUTCFullYear(), this.language.monthNames[until.getUTCMonth()], until.getUTCDate()));
        } else if (this.options.count) this.add(gettext('for')).add(this.options.count.toString()).add(this.plural(this.options.count) ? gettext('times') : gettext('time'));
        if (!this.isFullyConvertible()) this.add(gettext('(~ approximate)'));
        return this.text.join('');
    };
    ToText1.prototype.HOURLY = function() {
        var gettext = this.gettext;
        if (this.options.interval !== 1) this.add(this.options.interval.toString());
        this.add(this.plural(this.options.interval) ? gettext('hours') : gettext('hour'));
    };
    ToText1.prototype.MINUTELY = function() {
        var gettext = this.gettext;
        if (this.options.interval !== 1) this.add(this.options.interval.toString());
        this.add(this.plural(this.options.interval) ? gettext('minutes') : gettext('minute'));
    };
    ToText1.prototype.DAILY = function() {
        var gettext = this.gettext;
        if (this.options.interval !== 1) this.add(this.options.interval.toString());
        if (this.byweekday && this.byweekday.isWeekdays) this.add(this.plural(this.options.interval) ? gettext('weekdays') : gettext('weekday'));
        else this.add(this.plural(this.options.interval) ? gettext('days') : gettext('day'));
        if (this.origOptions.bymonth) {
            this.add(gettext('in'));
            this._bymonth();
        }
        if (this.bymonthday) this._bymonthday();
        else if (this.byweekday) this._byweekday();
        else if (this.origOptions.byhour) this._byhour();
    };
    ToText1.prototype.WEEKLY = function() {
        var gettext = this.gettext;
        if (this.options.interval !== 1) this.add(this.options.interval.toString()).add(this.plural(this.options.interval) ? gettext('weeks') : gettext('week'));
        if (this.byweekday && this.byweekday.isWeekdays) {
            if (this.options.interval === 1) this.add(this.plural(this.options.interval) ? gettext('weekdays') : gettext('weekday'));
            else this.add(gettext('on')).add(gettext('weekdays'));
        } else if (this.byweekday && this.byweekday.isEveryDay) this.add(this.plural(this.options.interval) ? gettext('days') : gettext('day'));
        else {
            if (this.options.interval === 1) this.add(gettext('week'));
            if (this.origOptions.bymonth) {
                this.add(gettext('in'));
                this._bymonth();
            }
            if (this.bymonthday) this._bymonthday();
            else if (this.byweekday) this._byweekday();
        }
    };
    ToText1.prototype.MONTHLY = function() {
        var gettext = this.gettext;
        if (this.origOptions.bymonth) {
            if (this.options.interval !== 1) {
                this.add(this.options.interval.toString()).add(gettext('months'));
                if (this.plural(this.options.interval)) this.add(gettext('in'));
            }
            this._bymonth();
        } else {
            if (this.options.interval !== 1) this.add(this.options.interval.toString());
            this.add(this.plural(this.options.interval) ? gettext('months') : gettext('month'));
        }
        if (this.bymonthday) this._bymonthday();
        else if (this.byweekday && this.byweekday.isWeekdays) this.add(gettext('on')).add(gettext('weekdays'));
        else if (this.byweekday) this._byweekday();
    };
    ToText1.prototype.YEARLY = function() {
        var gettext = this.gettext;
        if (this.origOptions.bymonth) {
            if (this.options.interval !== 1) {
                this.add(this.options.interval.toString());
                this.add(gettext('years'));
            }
            this._bymonth();
        } else {
            if (this.options.interval !== 1) this.add(this.options.interval.toString());
            this.add(this.plural(this.options.interval) ? gettext('years') : gettext('year'));
        }
        if (this.bymonthday) this._bymonthday();
        else if (this.byweekday) this._byweekday();
        if (this.options.byyearday) this.add(gettext('on the')).add(this.list(this.options.byyearday, this.nth, gettext('and'))).add(gettext('day'));
        if (this.options.byweekno) this.add(gettext('in')).add(this.plural(this.options.byweekno.length) ? gettext('weeks') : gettext('week')).add(this.list(this.options.byweekno, undefined, gettext('and')));
    };
    ToText1.prototype._bymonthday = function() {
        var gettext = this.gettext;
        if (this.byweekday && this.byweekday.allWeeks) this.add(gettext('on')).add(this.list(this.byweekday.allWeeks, this.weekdaytext, gettext('or'))).add(gettext('the')).add(this.list(this.bymonthday, this.nth, gettext('or')));
        else this.add(gettext('on the')).add(this.list(this.bymonthday, this.nth, gettext('and')));
    // this.add(gettext('DAY'))
    };
    ToText1.prototype._byweekday = function() {
        var gettext = this.gettext;
        if (this.byweekday.allWeeks && !this.byweekday.isWeekdays) this.add(gettext('on')).add(this.list(this.byweekday.allWeeks, this.weekdaytext));
        if (this.byweekday.someWeeks) {
            if (this.byweekday.allWeeks) this.add(gettext('and'));
            this.add(gettext('on the')).add(this.list(this.byweekday.someWeeks, this.weekdaytext, gettext('and')));
        }
    };
    ToText1.prototype._byhour = function() {
        var gettext = this.gettext;
        this.add(gettext('at')).add(this.list(this.origOptions.byhour, undefined, gettext('and')));
    };
    ToText1.prototype._bymonth = function() {
        this.add(this.list(this.options.bymonth, this.monthtext, this.gettext('and')));
    };
    ToText1.prototype.nth = function(n) {
        n = parseInt(n.toString(), 10);
        var nth;
        var npos;
        var gettext = this.gettext;
        if (n === -1) return gettext('last');
        npos = Math.abs(n);
        switch(npos){
            case 1:
            case 21:
            case 31:
                nth = npos + gettext('st');
                break;
            case 2:
            case 22:
                nth = npos + gettext('nd');
                break;
            case 3:
            case 23:
                nth = npos + gettext('rd');
                break;
            default:
                nth = npos + gettext('th');
        }
        return n < 0 ? nth + ' ' + gettext('last') : nth;
    };
    ToText1.prototype.monthtext = function(m) {
        return this.language.monthNames[m - 1];
    };
    ToText1.prototype.weekdaytext = function(wday) {
        var weekday = _helpers.isNumber(wday) ? (wday + 1) % 7 : wday.getJsWeekday();
        return (wday.n ? this.nth(wday.n) + ' ' : '') + this.language.dayNames[weekday];
    };
    ToText1.prototype.plural = function(n) {
        return n % 100 !== 1;
    };
    ToText1.prototype.add = function(s) {
        this.text.push(' ');
        this.text.push(s);
        return this;
    };
    ToText1.prototype.list = function(arr, callback, finalDelim, delim) {
        if (delim === void 0) delim = ',';
        if (!_helpers.isArray(arr)) arr = [
            arr
        ];
        var delimJoin = function(array, delimiter, finalDelimiter) {
            var list = '';
            for(var i = 0; i < array.length; i++){
                if (i !== 0) {
                    if (i === array.length - 1) list += ' ' + finalDelimiter + ' ';
                    else list += delimiter + ' ';
                }
                list += array[i];
            }
            return list;
        };
        callback = callback || function(o) {
            return o.toString();
        };
        var self = this;
        var realCallback = function(arg) {
            return callback && callback.call(self, arg);
        };
        if (finalDelim) return delimJoin(arr.map(realCallback), delim, finalDelim);
        else return arr.map(realCallback).join(delim + ' ');
    };
    return ToText1;
}();
exports.default = ToText;

},{"./i18n":"fEd3v","../index":"3a2Xh","../helpers":"9yiPH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fEd3v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// =============================================================================
// i18n
// =============================================================================
var ENGLISH = {
    dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ],
    monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    tokens: {
        'SKIP': /^[ \r\n\t]+|^\.$/,
        'number': /^[1-9][0-9]*/,
        'numberAsText': /^(one|two|three)/i,
        'every': /^every/i,
        'day(s)': /^days?/i,
        'weekday(s)': /^weekdays?/i,
        'week(s)': /^weeks?/i,
        'hour(s)': /^hours?/i,
        'minute(s)': /^minutes?/i,
        'month(s)': /^months?/i,
        'year(s)': /^years?/i,
        'on': /^(on|in)/i,
        'at': /^(at)/i,
        'the': /^the/i,
        'first': /^first/i,
        'second': /^second/i,
        'third': /^third/i,
        'nth': /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
        'last': /^last/i,
        'for': /^for/i,
        'time(s)': /^times?/i,
        'until': /^(un)?til/i,
        'monday': /^mo(n(day)?)?/i,
        'tuesday': /^tu(e(s(day)?)?)?/i,
        'wednesday': /^we(d(n(esday)?)?)?/i,
        'thursday': /^th(u(r(sday)?)?)?/i,
        'friday': /^fr(i(day)?)?/i,
        'saturday': /^sa(t(urday)?)?/i,
        'sunday': /^su(n(day)?)?/i,
        'january': /^jan(uary)?/i,
        'february': /^feb(ruary)?/i,
        'march': /^mar(ch)?/i,
        'april': /^apr(il)?/i,
        'may': /^may/i,
        'june': /^june?/i,
        'july': /^july?/i,
        'august': /^aug(ust)?/i,
        'september': /^sep(t(ember)?)?/i,
        'october': /^oct(ober)?/i,
        'november': /^nov(ember)?/i,
        'december': /^dec(ember)?/i,
        'comma': /^(,\s*|(and|or)\s*)+/i
    }
};
exports.default = ENGLISH;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9R5KL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _i18N = require("./i18n");
var _i18NDefault = parcelHelpers.interopDefault(_i18N);
var _index = require("../index");
var _indexDefault = parcelHelpers.interopDefault(_index);
// =============================================================================
// Parser
// =============================================================================
var Parser = function() {
    function Parser1(rules) {
        this.done = true;
        this.rules = rules;
    }
    Parser1.prototype.start = function(text) {
        this.text = text;
        this.done = false;
        return this.nextSymbol();
    };
    Parser1.prototype.isDone = function() {
        return this.done && this.symbol === null;
    };
    Parser1.prototype.nextSymbol = function() {
        var best;
        var bestSymbol;
        var p = this;
        this.symbol = null;
        this.value = null;
        do {
            if (this.done) return false;
            var rule = void 0;
            best = null;
            for(var name_1 in this.rules){
                rule = this.rules[name_1];
                var match = rule.exec(p.text);
                if (match) {
                    if (best === null || match[0].length > best[0].length) {
                        best = match;
                        bestSymbol = name_1;
                    }
                }
            }
            if (best != null) {
                this.text = this.text.substr(best[0].length);
                if (this.text === '') this.done = true;
            }
            if (best == null) {
                this.done = true;
                this.symbol = null;
                this.value = null;
                return;
            }
        // @ts-ignore
        }while (bestSymbol === 'SKIP')
        // @ts-ignore
        this.symbol = bestSymbol;
        this.value = best;
        return true;
    };
    Parser1.prototype.accept = function(name) {
        if (this.symbol === name) {
            if (this.value) {
                var v = this.value;
                this.nextSymbol();
                return v;
            }
            this.nextSymbol();
            return true;
        }
        return false;
    };
    Parser1.prototype.acceptNumber = function() {
        return this.accept('number');
    };
    Parser1.prototype.expect = function(name) {
        if (this.accept(name)) return true;
        throw new Error('expected ' + name + ' but found ' + this.symbol);
    };
    return Parser1;
}();
function parseText(text, language) {
    if (language === void 0) language = _i18NDefault.default;
    var options = {
    };
    var ttr = new Parser(language.tokens);
    if (!ttr.start(text)) return null;
    S();
    function S() {
        // every [n]
        ttr.expect('every');
        var n = ttr.acceptNumber();
        if (n) options.interval = parseInt(n[0], 10);
        if (ttr.isDone()) throw new Error('Unexpected end');
        switch(ttr.symbol){
            case 'day(s)':
                options.freq = _indexDefault.default.DAILY;
                if (ttr.nextSymbol()) {
                    AT();
                    F();
                }
                break;
            // FIXME Note: every 2 weekdays != every two weeks on weekdays.
            // DAILY on weekdays is not a valid rule
            case 'weekday(s)':
                options.freq = _indexDefault.default.WEEKLY;
                options.byweekday = [
                    _indexDefault.default.MO,
                    _indexDefault.default.TU,
                    _indexDefault.default.WE,
                    _indexDefault.default.TH,
                    _indexDefault.default.FR
                ];
                ttr.nextSymbol();
                F();
                break;
            case 'week(s)':
                options.freq = _indexDefault.default.WEEKLY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'hour(s)':
                options.freq = _indexDefault.default.HOURLY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'minute(s)':
                options.freq = _indexDefault.default.MINUTELY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'month(s)':
                options.freq = _indexDefault.default.MONTHLY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'year(s)':
                options.freq = _indexDefault.default.YEARLY;
                if (ttr.nextSymbol()) {
                    ON();
                    F();
                }
                break;
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
            case 'saturday':
            case 'sunday':
                options.freq = _indexDefault.default.WEEKLY;
                var key = ttr.symbol.substr(0, 2).toUpperCase();
                options.byweekday = [
                    _indexDefault.default[key]
                ];
                if (!ttr.nextSymbol()) return;
                // TODO check for duplicates
                while(ttr.accept('comma')){
                    if (ttr.isDone()) throw new Error('Unexpected end');
                    var wkd = decodeWKD();
                    if (!wkd) {
                        throw new Error('Unexpected symbol ' + ttr.symbol + ', expected weekday');
                    }
                    // @ts-ignore
                    options.byweekday.push(_indexDefault.default[wkd]);
                    ttr.nextSymbol();
                }
                MDAYs();
                F();
                break;
            case 'january':
            case 'february':
            case 'march':
            case 'april':
            case 'may':
            case 'june':
            case 'july':
            case 'august':
            case 'september':
            case 'october':
            case 'november':
            case 'december':
                options.freq = _indexDefault.default.YEARLY;
                options.bymonth = [
                    decodeM()
                ];
                if (!ttr.nextSymbol()) return;
                // TODO check for duplicates
                while(ttr.accept('comma')){
                    if (ttr.isDone()) throw new Error('Unexpected end');
                    var m = decodeM();
                    if (!m) {
                        throw new Error('Unexpected symbol ' + ttr.symbol + ', expected month');
                    }
                    options.bymonth.push(m);
                    ttr.nextSymbol();
                }
                ON();
                F();
                break;
            default:
                throw new Error('Unknown symbol');
        }
    }
    function ON() {
        var on = ttr.accept('on');
        var the = ttr.accept('the');
        if (!(on || the)) return;
        do {
            var nth = decodeNTH();
            var wkd = decodeWKD();
            var m = decodeM();
            // nth <weekday> | <weekday>
            if (nth) {
                // ttr.nextSymbol()
                if (wkd) {
                    ttr.nextSymbol();
                    if (!options.byweekday) options.byweekday = [];
                    // @ts-ignore
                    options.byweekday.push(_indexDefault.default[wkd].nth(nth));
                } else {
                    if (!options.bymonthday) options.bymonthday = [];
                    // @ts-ignore
                    options.bymonthday.push(nth);
                    ttr.accept('day(s)');
                }
            // <weekday>
            } else if (wkd) {
                ttr.nextSymbol();
                if (!options.byweekday) options.byweekday = [];
                // @ts-ignore
                options.byweekday.push(_indexDefault.default[wkd]);
            } else if (ttr.symbol === 'weekday(s)') {
                ttr.nextSymbol();
                if (!options.byweekday) {
                    options.byweekday = [
                        _indexDefault.default.MO,
                        _indexDefault.default.TU,
                        _indexDefault.default.WE,
                        _indexDefault.default.TH,
                        _indexDefault.default.FR
                    ];
                }
            } else if (ttr.symbol === 'week(s)') {
                ttr.nextSymbol();
                var n = ttr.acceptNumber();
                if (!n) {
                    throw new Error('Unexpected symbol ' + ttr.symbol + ', expected week number');
                }
                options.byweekno = [
                    parseInt(n[0], 10)
                ];
                while(ttr.accept('comma')){
                    n = ttr.acceptNumber();
                    if (!n) {
                        throw new Error('Unexpected symbol ' + ttr.symbol + '; expected monthday');
                    }
                    options.byweekno.push(parseInt(n[0], 10));
                }
            } else if (m) {
                ttr.nextSymbol();
                if (!options.bymonth) options.bymonth = [];
                // @ts-ignore
                options.bymonth.push(m);
            } else {
                return;
            }
        }while (ttr.accept('comma') || ttr.accept('the') || ttr.accept('on'))
    }
    function AT() {
        var at = ttr.accept('at');
        if (!at) return;
        do {
            var n = ttr.acceptNumber();
            if (!n) {
                throw new Error('Unexpected symbol ' + ttr.symbol + ', expected hour');
            }
            options.byhour = [
                parseInt(n[0], 10)
            ];
            while(ttr.accept('comma')){
                n = ttr.acceptNumber();
                if (!n) {
                    throw new Error('Unexpected symbol ' + ttr.symbol + '; expected hour');
                }
                options.byhour.push(parseInt(n[0], 10));
            }
        }while (ttr.accept('comma') || ttr.accept('at'))
    }
    function decodeM() {
        switch(ttr.symbol){
            case 'january':
                return 1;
            case 'february':
                return 2;
            case 'march':
                return 3;
            case 'april':
                return 4;
            case 'may':
                return 5;
            case 'june':
                return 6;
            case 'july':
                return 7;
            case 'august':
                return 8;
            case 'september':
                return 9;
            case 'october':
                return 10;
            case 'november':
                return 11;
            case 'december':
                return 12;
            default:
                return false;
        }
    }
    function decodeWKD() {
        switch(ttr.symbol){
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
            case 'saturday':
            case 'sunday':
                return ttr.symbol.substr(0, 2).toUpperCase();
            default:
                return false;
        }
    }
    function decodeNTH() {
        switch(ttr.symbol){
            case 'last':
                ttr.nextSymbol();
                return -1;
            case 'first':
                ttr.nextSymbol();
                return 1;
            case 'second':
                ttr.nextSymbol();
                return ttr.accept('last') ? -2 : 2;
            case 'third':
                ttr.nextSymbol();
                return ttr.accept('last') ? -3 : 3;
            case 'nth':
                var v = parseInt(ttr.value[1], 10);
                if (v < -366 || v > 366) throw new Error('Nth out of range: ' + v);
                ttr.nextSymbol();
                return ttr.accept('last') ? -v : v;
            default:
                return false;
        }
    }
    function MDAYs() {
        ttr.accept('on');
        ttr.accept('the');
        var nth = decodeNTH();
        if (!nth) return;
        options.bymonthday = [
            nth
        ];
        ttr.nextSymbol();
        while(ttr.accept('comma')){
            nth = decodeNTH();
            if (!nth) {
                throw new Error('Unexpected symbol ' + ttr.symbol + '; expected monthday');
            }
            options.bymonthday.push(nth);
            ttr.nextSymbol();
        }
    }
    function F() {
        if (ttr.symbol === 'until') {
            var date = Date.parse(ttr.text);
            if (!date) throw new Error('Cannot parse until date:' + ttr.text);
            options.until = new Date(date);
        } else if (ttr.accept('for')) {
            options.count = parseInt(ttr.value[0], 10);
            ttr.expect('number');
        // ttr.expect('times')
        }
    }
    return options;
}
exports.default = parseText;

},{"./i18n":"fEd3v","../index":"3a2Xh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gIncR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Frequency", ()=>Frequency
);
parcelHelpers.export(exports, "freqIsDailyOrGreater", ()=>freqIsDailyOrGreater
);
var Frequency;
(function(Frequency1) {
    Frequency1[Frequency1["YEARLY"] = 0] = "YEARLY";
    Frequency1[Frequency1["MONTHLY"] = 1] = "MONTHLY";
    Frequency1[Frequency1["WEEKLY"] = 2] = "WEEKLY";
    Frequency1[Frequency1["DAILY"] = 3] = "DAILY";
    Frequency1[Frequency1["HOURLY"] = 4] = "HOURLY";
    Frequency1[Frequency1["MINUTELY"] = 5] = "MINUTELY";
    Frequency1[Frequency1["SECONDLY"] = 6] = "SECONDLY";
})(Frequency || (Frequency = {
}));
function freqIsDailyOrGreater(freq) {
    return freq < Frequency.HOURLY;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7IooI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initializeOptions", ()=>initializeOptions
);
parcelHelpers.export(exports, "parseOptions", ()=>parseOptions
);
parcelHelpers.export(exports, "buildTimeset", ()=>buildTimeset
);
var _tslib = require("tslib");
var _types = require("./types");
var _helpers = require("./helpers");
var _rrule = require("./rrule");
var _rruleDefault = parcelHelpers.interopDefault(_rrule);
var _dateutil = require("./dateutil");
var _dateutilDefault = parcelHelpers.interopDefault(_dateutil);
var _weekday = require("./weekday");
var _datetime = require("./datetime");
function initializeOptions(options) {
    var invalid = [];
    var keys = Object.keys(options);
    // Shallow copy for options and origOptions and check for invalid
    for(var _i = 0, keys_1 = keys; _i < keys_1.length; _i++){
        var key = keys_1[_i];
        if (!_helpers.includes(_rrule.defaultKeys, key)) invalid.push(key);
        if (_dateutilDefault.default.isDate(options[key]) && !_dateutilDefault.default.isValidDate(options[key])) invalid.push(key);
    }
    if (invalid.length) throw new Error('Invalid options: ' + invalid.join(', '));
    return _tslib.__assign({
    }, options);
}
function parseOptions(options) {
    var opts = _tslib.__assign(_tslib.__assign({
    }, _rrule.DEFAULT_OPTIONS), initializeOptions(options));
    if (_helpers.isPresent(opts.byeaster)) opts.freq = _rruleDefault.default.YEARLY;
    if (!(_helpers.isPresent(opts.freq) && _rruleDefault.default.FREQUENCIES[opts.freq])) throw new Error("Invalid frequency: " + opts.freq + " " + options.freq);
    if (!opts.dtstart) opts.dtstart = new Date(new Date().setMilliseconds(0));
    if (!_helpers.isPresent(opts.wkst)) opts.wkst = _rruleDefault.default.MO.weekday;
    else if (_helpers.isNumber(opts.wkst)) ;
    else opts.wkst = opts.wkst.weekday;
    if (_helpers.isPresent(opts.bysetpos)) {
        if (_helpers.isNumber(opts.bysetpos)) opts.bysetpos = [
            opts.bysetpos
        ];
        for(var i = 0; i < opts.bysetpos.length; i++){
            var v = opts.bysetpos[i];
            if (v === 0 || !(v >= -366 && v <= 366)) throw new Error("bysetpos must be between 1 and 366, or between -366 and -1");
        }
    }
    if (!(Boolean(opts.byweekno) || _helpers.notEmpty(opts.byweekno) || _helpers.notEmpty(opts.byyearday) || Boolean(opts.bymonthday) || _helpers.notEmpty(opts.bymonthday) || _helpers.isPresent(opts.byweekday) || _helpers.isPresent(opts.byeaster))) switch(opts.freq){
        case _rruleDefault.default.YEARLY:
            if (!opts.bymonth) opts.bymonth = opts.dtstart.getUTCMonth() + 1;
            opts.bymonthday = opts.dtstart.getUTCDate();
            break;
        case _rruleDefault.default.MONTHLY:
            opts.bymonthday = opts.dtstart.getUTCDate();
            break;
        case _rruleDefault.default.WEEKLY:
            opts.byweekday = [
                _dateutilDefault.default.getWeekday(opts.dtstart)
            ];
            break;
    }
    // bymonth
    if (_helpers.isPresent(opts.bymonth) && !_helpers.isArray(opts.bymonth)) opts.bymonth = [
        opts.bymonth
    ];
    // byyearday
    if (_helpers.isPresent(opts.byyearday) && !_helpers.isArray(opts.byyearday) && _helpers.isNumber(opts.byyearday)) opts.byyearday = [
        opts.byyearday
    ];
    // bymonthday
    if (!_helpers.isPresent(opts.bymonthday)) {
        opts.bymonthday = [];
        opts.bynmonthday = [];
    } else if (_helpers.isArray(opts.bymonthday)) {
        var bymonthday = [];
        var bynmonthday = [];
        for(var i = 0; i < opts.bymonthday.length; i++){
            var v = opts.bymonthday[i];
            if (v > 0) bymonthday.push(v);
            else if (v < 0) bynmonthday.push(v);
        }
        opts.bymonthday = bymonthday;
        opts.bynmonthday = bynmonthday;
    } else if (opts.bymonthday < 0) {
        opts.bynmonthday = [
            opts.bymonthday
        ];
        opts.bymonthday = [];
    } else {
        opts.bynmonthday = [];
        opts.bymonthday = [
            opts.bymonthday
        ];
    }
    // byweekno
    if (_helpers.isPresent(opts.byweekno) && !_helpers.isArray(opts.byweekno)) opts.byweekno = [
        opts.byweekno
    ];
    // byweekday / bynweekday
    if (!_helpers.isPresent(opts.byweekday)) opts.bynweekday = null;
    else if (_helpers.isNumber(opts.byweekday)) {
        opts.byweekday = [
            opts.byweekday
        ];
        opts.bynweekday = null;
    } else if (_helpers.isWeekdayStr(opts.byweekday)) {
        opts.byweekday = [
            _weekday.Weekday.fromStr(opts.byweekday).weekday
        ];
        opts.bynweekday = null;
    } else if (opts.byweekday instanceof _weekday.Weekday) {
        if (!opts.byweekday.n || opts.freq > _rruleDefault.default.MONTHLY) {
            opts.byweekday = [
                opts.byweekday.weekday
            ];
            opts.bynweekday = null;
        } else {
            opts.bynweekday = [
                [
                    opts.byweekday.weekday,
                    opts.byweekday.n
                ]
            ];
            opts.byweekday = null;
        }
    } else {
        var byweekday = [];
        var bynweekday = [];
        for(var i = 0; i < opts.byweekday.length; i++){
            var wday = opts.byweekday[i];
            if (_helpers.isNumber(wday)) {
                byweekday.push(wday);
                continue;
            } else if (_helpers.isWeekdayStr(wday)) {
                byweekday.push(_weekday.Weekday.fromStr(wday).weekday);
                continue;
            }
            if (!wday.n || opts.freq > _rruleDefault.default.MONTHLY) byweekday.push(wday.weekday);
            else bynweekday.push([
                wday.weekday,
                wday.n
            ]);
        }
        opts.byweekday = _helpers.notEmpty(byweekday) ? byweekday : null;
        opts.bynweekday = _helpers.notEmpty(bynweekday) ? bynweekday : null;
    }
    // byhour
    if (!_helpers.isPresent(opts.byhour)) opts.byhour = opts.freq < _rruleDefault.default.HOURLY ? [
        opts.dtstart.getUTCHours()
    ] : null;
    else if (_helpers.isNumber(opts.byhour)) opts.byhour = [
        opts.byhour
    ];
    // byminute
    if (!_helpers.isPresent(opts.byminute)) opts.byminute = opts.freq < _rruleDefault.default.MINUTELY ? [
        opts.dtstart.getUTCMinutes()
    ] : null;
    else if (_helpers.isNumber(opts.byminute)) opts.byminute = [
        opts.byminute
    ];
    // bysecond
    if (!_helpers.isPresent(opts.bysecond)) opts.bysecond = opts.freq < _rruleDefault.default.SECONDLY ? [
        opts.dtstart.getUTCSeconds()
    ] : null;
    else if (_helpers.isNumber(opts.bysecond)) opts.bysecond = [
        opts.bysecond
    ];
    return {
        parsedOptions: opts
    };
}
function buildTimeset(opts) {
    var millisecondModulo = opts.dtstart.getTime() % 1000;
    if (!_types.freqIsDailyOrGreater(opts.freq)) return [];
    var timeset = [];
    opts.byhour.forEach(function(hour) {
        opts.byminute.forEach(function(minute) {
            opts.bysecond.forEach(function(second) {
                timeset.push(new _datetime.Time(hour, minute, second, millisecondModulo));
            });
        });
    });
    return timeset;
}

},{"tslib":"iT5OF","./types":"gIncR","./helpers":"9yiPH","./rrule":"hNQhL","./dateutil":"8L9ZE","./weekday":"ggPwj","./datetime":"jXIyx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jXIyx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Time", ()=>Time
);
parcelHelpers.export(exports, "DateTime", ()=>DateTime
);
var _tslib = require("tslib");
var _types = require("./types");
var _helpers = require("./helpers");
var _dateutil = require("./dateutil");
var Time = function() {
    function Time1(hour, minute, second, millisecond) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.millisecond = millisecond || 0;
    }
    Time1.prototype.getHours = function() {
        return this.hour;
    };
    Time1.prototype.getMinutes = function() {
        return this.minute;
    };
    Time1.prototype.getSeconds = function() {
        return this.second;
    };
    Time1.prototype.getMilliseconds = function() {
        return this.millisecond;
    };
    Time1.prototype.getTime = function() {
        return (this.hour * 3600 + this.minute * 60 + this.second) * 1000 + this.millisecond;
    };
    return Time1;
}();
var DateTime = function(_super) {
    _tslib.__extends(DateTime1, _super);
    function DateTime1(year, month, day, hour, minute, second, millisecond) {
        var _this = _super.call(this, hour, minute, second, millisecond) || this;
        _this.year = year;
        _this.month = month;
        _this.day = day;
        return _this;
    }
    DateTime1.fromDate = function(date) {
        return new this(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.valueOf() % 1000);
    };
    DateTime1.prototype.getWeekday = function() {
        return _dateutil.dateutil.getWeekday(new Date(this.getTime()));
    };
    DateTime1.prototype.getTime = function() {
        return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond)).getTime();
    };
    DateTime1.prototype.getDay = function() {
        return this.day;
    };
    DateTime1.prototype.getMonth = function() {
        return this.month;
    };
    DateTime1.prototype.getYear = function() {
        return this.year;
    };
    DateTime1.prototype.addYears = function(years) {
        this.year += years;
    };
    DateTime1.prototype.addMonths = function(months) {
        this.month += months;
        if (this.month > 12) {
            var yearDiv = Math.floor(this.month / 12);
            var monthMod = _helpers.pymod(this.month, 12);
            this.month = monthMod;
            this.year += yearDiv;
            if (this.month === 0) {
                this.month = 12;
                --this.year;
            }
        }
    };
    DateTime1.prototype.addWeekly = function(days, wkst) {
        if (wkst > this.getWeekday()) this.day += -(this.getWeekday() + 1 + (6 - wkst)) + days * 7;
        else this.day += -(this.getWeekday() - wkst) + days * 7;
        this.fixDay();
    };
    DateTime1.prototype.addDaily = function(days) {
        this.day += days;
        this.fixDay();
    };
    DateTime1.prototype.addHours = function(hours, filtered, byhour) {
        if (filtered) // Jump to one iteration before next day
        this.hour += Math.floor((23 - this.hour) / hours) * hours;
        while(true){
            this.hour += hours;
            var _a = _helpers.divmod(this.hour, 24), dayDiv = _a.div, hourMod = _a.mod;
            if (dayDiv) {
                this.hour = hourMod;
                this.addDaily(dayDiv);
            }
            if (_helpers.empty(byhour) || _helpers.includes(byhour, this.hour)) break;
        }
    };
    DateTime1.prototype.addMinutes = function(minutes, filtered, byhour, byminute) {
        if (filtered) // Jump to one iteration before next day
        this.minute += Math.floor((1439 - (this.hour * 60 + this.minute)) / minutes) * minutes;
        while(true){
            this.minute += minutes;
            var _a = _helpers.divmod(this.minute, 60), hourDiv = _a.div, minuteMod = _a.mod;
            if (hourDiv) {
                this.minute = minuteMod;
                this.addHours(hourDiv, false, byhour);
            }
            if ((_helpers.empty(byhour) || _helpers.includes(byhour, this.hour)) && (_helpers.empty(byminute) || _helpers.includes(byminute, this.minute))) break;
        }
    };
    DateTime1.prototype.addSeconds = function(seconds, filtered, byhour, byminute, bysecond) {
        if (filtered) // Jump to one iteration before next day
        this.second += Math.floor((86399 - (this.hour * 3600 + this.minute * 60 + this.second)) / seconds) * seconds;
        while(true){
            this.second += seconds;
            var _a = _helpers.divmod(this.second, 60), minuteDiv = _a.div, secondMod = _a.mod;
            if (minuteDiv) {
                this.second = secondMod;
                this.addMinutes(minuteDiv, false, byhour, byminute);
            }
            if ((_helpers.empty(byhour) || _helpers.includes(byhour, this.hour)) && (_helpers.empty(byminute) || _helpers.includes(byminute, this.minute)) && (_helpers.empty(bysecond) || _helpers.includes(bysecond, this.second))) break;
        }
    };
    DateTime1.prototype.fixDay = function() {
        if (this.day <= 28) return;
        var daysinmonth = _dateutil.dateutil.monthRange(this.year, this.month - 1)[1];
        if (this.day <= daysinmonth) return;
        while(this.day > daysinmonth){
            this.day -= daysinmonth;
            ++this.month;
            if (this.month === 13) {
                this.month = 1;
                ++this.year;
                if (this.year > _dateutil.dateutil.MAXYEAR) return;
            }
            daysinmonth = _dateutil.dateutil.monthRange(this.year, this.month - 1)[1];
        }
    };
    DateTime1.prototype.add = function(options, filtered) {
        var freq = options.freq, interval = options.interval, wkst = options.wkst, byhour = options.byhour, byminute = options.byminute, bysecond = options.bysecond;
        switch(freq){
            case _types.Frequency.YEARLY:
                return this.addYears(interval);
            case _types.Frequency.MONTHLY:
                return this.addMonths(interval);
            case _types.Frequency.WEEKLY:
                return this.addWeekly(interval, wkst);
            case _types.Frequency.DAILY:
                return this.addDaily(interval);
            case _types.Frequency.HOURLY:
                return this.addHours(interval, filtered, byhour);
            case _types.Frequency.MINUTELY:
                return this.addMinutes(interval, filtered, byhour, byminute);
            case _types.Frequency.SECONDLY:
                return this.addSeconds(interval, filtered, byhour, byminute, bysecond);
        }
    };
    return DateTime1;
}(Time);

},{"tslib":"iT5OF","./types":"gIncR","./helpers":"9yiPH","./dateutil":"8L9ZE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"HkutZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseString", ()=>parseString
);
parcelHelpers.export(exports, "parseDtstart", ()=>parseDtstart
);
var _tslib = require("tslib");
var _types = require("./types");
var _weekday = require("./weekday");
var _dateutil = require("./dateutil");
var _dateutilDefault = parcelHelpers.interopDefault(_dateutil);
var _rrule = require("./rrule");
function parseString(rfcString) {
    var options = rfcString.split('\n').map(parseLine).filter(function(x) {
        return x !== null;
    });
    return _tslib.__assign(_tslib.__assign({
    }, options[0]), options[1]);
}
function parseDtstart(line) {
    var options = {
    };
    var dtstartWithZone = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(line);
    if (!dtstartWithZone) return options;
    var _ = dtstartWithZone[0], tzid = dtstartWithZone[1], dtstart = dtstartWithZone[2];
    if (tzid) options.tzid = tzid;
    options.dtstart = _dateutilDefault.default.untilStringToDate(dtstart);
    return options;
}
function parseLine(rfcString) {
    rfcString = rfcString.replace(/^\s+|\s+$/, '');
    if (!rfcString.length) return null;
    var header = /^([A-Z]+?)[:;]/.exec(rfcString.toUpperCase());
    if (!header) return parseRrule(rfcString);
    var _ = header[0], key = header[1];
    switch(key.toUpperCase()){
        case 'RRULE':
        case 'EXRULE':
            return parseRrule(rfcString);
        case 'DTSTART':
            return parseDtstart(rfcString);
        default:
            throw new Error("Unsupported RFC prop " + key + " in " + rfcString);
    }
}
function parseRrule(line) {
    var strippedLine = line.replace(/^RRULE:/i, '');
    var options = parseDtstart(strippedLine);
    var attrs = line.replace(/^(?:RRULE|EXRULE):/i, '').split(';');
    attrs.forEach(function(attr) {
        var _a = attr.split('='), key = _a[0], value = _a[1];
        switch(key.toUpperCase()){
            case 'FREQ':
                options.freq = _types.Frequency[value.toUpperCase()];
                break;
            case 'WKST':
                options.wkst = _rrule.Days[value.toUpperCase()];
                break;
            case 'COUNT':
            case 'INTERVAL':
            case 'BYSETPOS':
            case 'BYMONTH':
            case 'BYMONTHDAY':
            case 'BYYEARDAY':
            case 'BYWEEKNO':
            case 'BYHOUR':
            case 'BYMINUTE':
            case 'BYSECOND':
                var num = parseNumber(value);
                var optionKey = key.toLowerCase();
                // @ts-ignore
                options[optionKey] = num;
                break;
            case 'BYWEEKDAY':
            case 'BYDAY':
                options.byweekday = parseWeekday(value);
                break;
            case 'DTSTART':
            case 'TZID':
                // for backwards compatibility
                var dtstart = parseDtstart(line);
                options.tzid = dtstart.tzid;
                options.dtstart = dtstart.dtstart;
                break;
            case 'UNTIL':
                options.until = _dateutilDefault.default.untilStringToDate(value);
                break;
            case 'BYEASTER':
                options.byeaster = Number(value);
                break;
            default:
                throw new Error("Unknown RRULE property '" + key + "'");
        }
    });
    return options;
}
function parseNumber(value) {
    if (value.indexOf(',') !== -1) {
        var values = value.split(',');
        return values.map(parseIndividualNumber);
    }
    return parseIndividualNumber(value);
}
function parseIndividualNumber(value) {
    if (/^[+-]?\d+$/.test(value)) return Number(value);
    return value;
}
function parseWeekday(value) {
    var days = value.split(',');
    return days.map(function(day) {
        if (day.length === 2) // MO, TU, ...
        return _rrule.Days[day]; // wday instanceof Weekday
        // -1MO, +3FR, 1SO, 13TU ...
        var parts = day.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
        var n = Number(parts[1]);
        var wdaypart = parts[2];
        var wday = _rrule.Days[wdaypart].weekday;
        return new _weekday.Weekday(wday, n);
    });
}

},{"tslib":"iT5OF","./types":"gIncR","./weekday":"ggPwj","./dateutil":"8L9ZE","./rrule":"hNQhL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4AHJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "optionsToString", ()=>optionsToString
);
var _rrule = require("./rrule");
var _rruleDefault = parcelHelpers.interopDefault(_rrule);
var _helpers = require("./helpers");
var _weekday = require("./weekday");
var _dateutil = require("./dateutil");
var _dateutilDefault = parcelHelpers.interopDefault(_dateutil);
var _datewithzone = require("./datewithzone");
function optionsToString(options) {
    var rrule = [];
    var dtstart = '';
    var keys = Object.keys(options);
    var defaultKeys = Object.keys(_rrule.DEFAULT_OPTIONS);
    for(var i = 0; i < keys.length; i++){
        if (keys[i] === 'tzid') continue;
        if (!_helpers.includes(defaultKeys, keys[i])) continue;
        var key = keys[i].toUpperCase();
        var value = options[keys[i]];
        var outValue = '';
        if (!_helpers.isPresent(value) || _helpers.isArray(value) && !value.length) continue;
        switch(key){
            case 'FREQ':
                outValue = _rruleDefault.default.FREQUENCIES[options.freq];
                break;
            case 'WKST':
                if (_helpers.isNumber(value)) outValue = new _weekday.Weekday(value).toString();
                else outValue = value.toString();
                break;
            case 'BYWEEKDAY':
                /*
                NOTE: BYWEEKDAY is a special case.
                RRule() deconstructs the rule.options.byweekday array
                into an array of Weekday arguments.
                On the other hand, rule.origOptions is an array of Weekdays.
                We need to handle both cases here.
                It might be worth change RRule to keep the Weekdays.
      
                Also, BYWEEKDAY (used by RRule) vs. BYDAY (RFC)
      
                */ key = 'BYDAY';
                outValue = _helpers.toArray(value).map(function(wday) {
                    if (wday instanceof _weekday.Weekday) return wday;
                    if (_helpers.isArray(wday)) return new _weekday.Weekday(wday[0], wday[1]);
                    return new _weekday.Weekday(wday);
                }).toString();
                break;
            case 'DTSTART':
                dtstart = buildDtstart(value, options.tzid);
                break;
            case 'UNTIL':
                outValue = _dateutilDefault.default.timeToUntilString(value, !options.tzid);
                break;
            default:
                if (_helpers.isArray(value)) {
                    var strValues = [];
                    for(var j = 0; j < value.length; j++)strValues[j] = String(value[j]);
                    outValue = strValues.toString();
                } else outValue = String(value);
        }
        if (outValue) rrule.push([
            key,
            outValue
        ]);
    }
    var rules = rrule.map(function(_a) {
        var key = _a[0], value = _a[1];
        return key + "=" + value.toString();
    }).join(';');
    var ruleString = '';
    if (rules !== '') ruleString = "RRULE:" + rules;
    return [
        dtstart,
        ruleString
    ].filter(function(x) {
        return !!x;
    }).join('\n');
}
function buildDtstart(dtstart, tzid) {
    if (!dtstart) return '';
    return 'DTSTART' + new _datewithzone.DateWithZone(new Date(dtstart), tzid).toString();
}

},{"./rrule":"hNQhL","./helpers":"9yiPH","./weekday":"ggPwj","./dateutil":"8L9ZE","./datewithzone":"1ZYSd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ZYSd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DateWithZone", ()=>DateWithZone
);
var _dateutil = require("./dateutil");
var _dateutilDefault = parcelHelpers.interopDefault(_dateutil);
var _luxon = require("luxon");
var DateWithZone = function() {
    function DateWithZone1(date, tzid) {
        this.date = date;
        this.tzid = tzid;
    }
    Object.defineProperty(DateWithZone1.prototype, "isUTC", {
        get: function() {
            return !this.tzid || this.tzid.toUpperCase() === 'UTC';
        },
        enumerable: true,
        configurable: true
    });
    DateWithZone1.prototype.toString = function() {
        var datestr = _dateutilDefault.default.timeToUntilString(this.date.getTime(), this.isUTC);
        if (!this.isUTC) return ";TZID=" + this.tzid + ":" + datestr;
        return ":" + datestr;
    };
    DateWithZone1.prototype.getTime = function() {
        return this.date.getTime();
    };
    DateWithZone1.prototype.rezonedDate = function() {
        if (this.isUTC) return this.date;
        try {
            var datetime = _luxon.DateTime.fromJSDate(this.date);
            var rezoned = datetime.setZone(this.tzid, {
                keepLocalTime: true
            });
            return rezoned.toJSDate();
        } catch (e) {
            if (e instanceof TypeError) console.error('Using TZID without Luxon available is unsupported. Returned times are in UTC, not the requested time zone');
            return this.date;
        }
    };
    return DateWithZone1;
}();

},{"./dateutil":"8L9ZE","luxon":"dpK6X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dpK6X":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
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
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent1, args1, Class1) {
    if (_isNativeReflectConstruct()) _construct = Reflect.construct;
    else _construct = function _construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class2) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class2);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n1 = Object.prototype.toString.call(o).slice(8, -1);
    if (n1 === "Object" && o.constructor) n1 = o.constructor.name;
    if (n1 === "Map" || n1 === "Set") return Array.from(n1);
    if (n1 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n1)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _createForOfIteratorHelperLoose(o) {
    var i = 0;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function() {
            if (i >= o.length) return {
                done: true
            };
            return {
                done: false,
                value: o[i++]
            };
        };
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    i = o[Symbol.iterator]();
    return i.next.bind(i);
}
// these aren't really private, but nor are they really useful to document
/**
 * @private
 */ var LuxonError = /*#__PURE__*/ function(_Error) {
    _inheritsLoose(LuxonError1, _Error);
    function LuxonError1() {
        return _Error.apply(this, arguments) || this;
    }
    return LuxonError1;
}(/*#__PURE__*/ _wrapNativeSuper(Error));
/**
 * @private
 */ var InvalidDateTimeError = /*#__PURE__*/ function(_LuxonError) {
    _inheritsLoose(InvalidDateTimeError1, _LuxonError);
    function InvalidDateTimeError1(reason) {
        return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
    }
    return InvalidDateTimeError1;
}(LuxonError);
/**
 * @private
 */ var InvalidIntervalError = /*#__PURE__*/ function(_LuxonError2) {
    _inheritsLoose(InvalidIntervalError1, _LuxonError2);
    function InvalidIntervalError1(reason) {
        return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
    }
    return InvalidIntervalError1;
}(LuxonError);
/**
 * @private
 */ var InvalidDurationError = /*#__PURE__*/ function(_LuxonError3) {
    _inheritsLoose(InvalidDurationError1, _LuxonError3);
    function InvalidDurationError1(reason) {
        return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
    }
    return InvalidDurationError1;
}(LuxonError);
/**
 * @private
 */ var ConflictingSpecificationError = /*#__PURE__*/ function(_LuxonError4) {
    _inheritsLoose(ConflictingSpecificationError1, _LuxonError4);
    function ConflictingSpecificationError1() {
        return _LuxonError4.apply(this, arguments) || this;
    }
    return ConflictingSpecificationError1;
}(LuxonError);
/**
 * @private
 */ var InvalidUnitError = /*#__PURE__*/ function(_LuxonError5) {
    _inheritsLoose(InvalidUnitError1, _LuxonError5);
    function InvalidUnitError1(unit) {
        return _LuxonError5.call(this, "Invalid unit " + unit) || this;
    }
    return InvalidUnitError1;
}(LuxonError);
/**
 * @private
 */ var InvalidArgumentError = /*#__PURE__*/ function(_LuxonError6) {
    _inheritsLoose(InvalidArgumentError1, _LuxonError6);
    function InvalidArgumentError1() {
        return _LuxonError6.apply(this, arguments) || this;
    }
    return InvalidArgumentError1;
}(LuxonError);
/**
 * @private
 */ var ZoneIsAbstractError = /*#__PURE__*/ function(_LuxonError7) {
    _inheritsLoose(ZoneIsAbstractError1, _LuxonError7);
    function ZoneIsAbstractError1() {
        return _LuxonError7.call(this, "Zone is an abstract class") || this;
    }
    return ZoneIsAbstractError1;
}(LuxonError);
/**
 * @private
 */ var n = "numeric", s = "short", l = "long";
var DATE_SHORT = {
    year: n,
    month: n,
    day: n
};
var DATE_MED = {
    year: n,
    month: s,
    day: n
};
var DATE_MED_WITH_WEEKDAY = {
    year: n,
    month: s,
    day: n,
    weekday: s
};
var DATE_FULL = {
    year: n,
    month: l,
    day: n
};
var DATE_HUGE = {
    year: n,
    month: l,
    day: n,
    weekday: l
};
var TIME_SIMPLE = {
    hour: n,
    minute: n
};
var TIME_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n
};
var TIME_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    timeZoneName: l
};
var TIME_24_SIMPLE = {
    hour: n,
    minute: n,
    hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23', always 24-hour.
 */ var TIME_24_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n,
    hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23 EDT', always 24-hour.
 */ var TIME_24_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hour12: false,
    timeZoneName: s
};
/**
 * {@link toLocaleString}; format like '09:30:23 Eastern Daylight Time', always 24-hour.
 */ var TIME_24_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hour12: false,
    timeZoneName: l
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
 */ var DATETIME_SHORT = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
 */ var DATETIME_SHORT_WITH_SECONDS = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n,
    second: n
};
var DATETIME_MED = {
    year: n,
    month: s,
    day: n,
    hour: n,
    minute: n
};
var DATETIME_MED_WITH_SECONDS = {
    year: n,
    month: s,
    day: n,
    hour: n,
    minute: n,
    second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
    year: n,
    month: s,
    day: n,
    weekday: s,
    hour: n,
    minute: n
};
var DATETIME_FULL = {
    year: n,
    month: l,
    day: n,
    hour: n,
    minute: n,
    timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
    year: n,
    month: l,
    day: n,
    hour: n,
    minute: n,
    second: n,
    timeZoneName: s
};
var DATETIME_HUGE = {
    year: n,
    month: l,
    day: n,
    weekday: l,
    hour: n,
    minute: n,
    timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
    year: n,
    month: l,
    day: n,
    weekday: l,
    hour: n,
    minute: n,
    second: n,
    timeZoneName: l
};
/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/ /**
 * @private
 */ // TYPES
function isUndefined(o) {
    return typeof o === "undefined";
}
function isNumber(o) {
    return typeof o === "number";
}
function isInteger(o) {
    return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
    return typeof o === "string";
}
function isDate(o) {
    return Object.prototype.toString.call(o) === "[object Date]";
} // CAPABILITIES
function hasIntl() {
    try {
        return typeof Intl !== "undefined" && Intl.DateTimeFormat;
    } catch (e) {
        return false;
    }
}
function hasFormatToParts() {
    return !isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
}
function hasRelative() {
    try {
        return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
    } catch (e) {
        return false;
    }
} // OBJECTS AND ARRAYS
function maybeArray(thing) {
    return Array.isArray(thing) ? thing : [
        thing
    ];
}
function bestBy(arr, by, compare) {
    if (arr.length === 0) return undefined;
    return arr.reduce(function(best, next) {
        var pair = [
            by(next),
            next
        ];
        if (!best) return pair;
        else if (compare(best[0], pair[0]) === best[0]) return best;
        else return pair;
    }, null)[1];
}
function pick(obj, keys) {
    return keys.reduce(function(a, k) {
        a[k] = obj[k];
        return a;
    }, {
    });
}
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
} // NUMBERS AND STRINGS
function integerBetween(thing, bottom, top) {
    return isInteger(thing) && thing >= bottom && thing <= top;
} // x % n but takes the sign of n instead of x
function floorMod(x, n2) {
    return x - n2 * Math.floor(x / n2);
}
function padStart(input, n3) {
    if (n3 === void 0) n3 = 2;
    var minus = input < 0 ? "-" : "";
    var target = minus ? input * -1 : input;
    var result;
    if (target.toString().length < n3) result = ("0".repeat(n3) + target).slice(-n3);
    else result = target.toString();
    return "" + minus + result;
}
function parseInteger(string) {
    if (isUndefined(string) || string === null || string === "") return undefined;
    else return parseInt(string, 10);
}
function parseMillis(fraction) {
    // Return undefined (instead of 0) in these cases, where fraction is not set
    if (isUndefined(fraction) || fraction === null || fraction === "") return undefined;
    else {
        var f = parseFloat("0." + fraction) * 1000;
        return Math.floor(f);
    }
}
function roundTo(number, digits, towardZero) {
    if (towardZero === void 0) towardZero = false;
    var factor = Math.pow(10, digits), rounder = towardZero ? Math.trunc : Math.round;
    return rounder(number * factor) / factor;
} // DATE BASICS
function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
    var modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
    if (modMonth === 2) return isLeapYear(modYear) ? 29 : 28;
    else return [
        31,
        null,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ][modMonth - 1];
} // covert a calendar object to a local timestamp (epoch, but with the offset baked in)
function objToLocalTS(obj) {
    var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that
    if (obj.year < 100 && obj.year >= 0) {
        d = new Date(d);
        d.setUTCFullYear(d.getUTCFullYear() - 1900);
    }
    return +d;
}
function weeksInWeekYear(weekYear) {
    var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
    return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
    if (year > 99) return year;
    else return year > 60 ? 1900 + year : 2000 + year;
} // PARSING
function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
    if (timeZone === void 0) timeZone = null;
    var date = new Date(ts), intlOpts = {
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    };
    if (timeZone) intlOpts.timeZone = timeZone;
    var modified = Object.assign({
        timeZoneName: offsetFormat
    }, intlOpts), intl = hasIntl();
    if (intl && hasFormatToParts()) {
        var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function(m) {
            return m.type.toLowerCase() === "timezonename";
        });
        return parsed ? parsed.value : null;
    } else if (intl) {
        // this probably doesn't work for all locales
        var without = new Intl.DateTimeFormat(locale, intlOpts).format(date), included = new Intl.DateTimeFormat(locale, modified).format(date), diffed = included.substring(without.length), trimmed = diffed.replace(/^[, \u200e]+/, "");
        return trimmed;
    } else return null;
} // signedOffset('-5', '30') -> -330
function signedOffset(offHourStr, offMinuteStr) {
    var offHour = parseInt(offHourStr, 10); // don't || this because we want to preserve -0
    if (Number.isNaN(offHour)) offHour = 0;
    var offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
    return offHour * 60 + offMinSigned;
} // COERCION
function asNumber(value) {
    var numericValue = Number(value);
    if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
    return numericValue;
}
function normalizeObject(obj, normalizer, nonUnitKeys) {
    var normalized = {
    };
    for(var u in obj)if (hasOwnProperty(obj, u)) {
        if (nonUnitKeys.indexOf(u) >= 0) continue;
        var v = obj[u];
        if (v === undefined || v === null) continue;
        normalized[normalizer(u)] = asNumber(v);
    }
    return normalized;
}
function formatOffset(offset1, format) {
    var hours = Math.trunc(Math.abs(offset1 / 60)), minutes = Math.trunc(Math.abs(offset1 % 60)), sign = offset1 >= 0 ? "+" : "-";
    switch(format){
        case "short":
            return "" + sign + padStart(hours, 2) + ":" + padStart(minutes, 2);
        case "narrow":
            return "" + sign + hours + (minutes > 0 ? ":" + minutes : "");
        case "techie":
            return "" + sign + padStart(hours, 2) + padStart(minutes, 2);
        default:
            throw new RangeError("Value format " + format + " is out of range for property format");
    }
}
function timeObject(obj) {
    return pick(obj, [
        "hour",
        "minute",
        "second",
        "millisecond"
    ]);
}
var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
function stringify(obj) {
    return JSON.stringify(obj, Object.keys(obj).sort());
}
/**
 * @private
 */ var monthsLong = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
var monthsNarrow = [
    "J",
    "F",
    "M",
    "A",
    "M",
    "J",
    "J",
    "A",
    "S",
    "O",
    "N",
    "D"
];
function months(length) {
    switch(length){
        case "narrow":
            return [].concat(monthsNarrow);
        case "short":
            return [].concat(monthsShort);
        case "long":
            return [].concat(monthsLong);
        case "numeric":
            return [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
            ];
        case "2-digit":
            return [
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12"
            ];
        default:
            return null;
    }
}
var weekdaysLong = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
var weekdaysShort = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
];
var weekdaysNarrow = [
    "M",
    "T",
    "W",
    "T",
    "F",
    "S",
    "S"
];
function weekdays(length) {
    switch(length){
        case "narrow":
            return [].concat(weekdaysNarrow);
        case "short":
            return [].concat(weekdaysShort);
        case "long":
            return [].concat(weekdaysLong);
        case "numeric":
            return [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ];
        default:
            return null;
    }
}
var meridiems = [
    "AM",
    "PM"
];
var erasLong = [
    "Before Christ",
    "Anno Domini"
];
var erasShort = [
    "BC",
    "AD"
];
var erasNarrow = [
    "B",
    "A"
];
function eras(length) {
    switch(length){
        case "narrow":
            return [].concat(erasNarrow);
        case "short":
            return [].concat(erasShort);
        case "long":
            return [].concat(erasLong);
        default:
            return null;
    }
}
function meridiemForDateTime(dt) {
    return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
    return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
    return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
    return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric, narrow) {
    if (numeric === void 0) numeric = "always";
    if (narrow === void 0) narrow = false;
    var units = {
        years: [
            "year",
            "yr."
        ],
        quarters: [
            "quarter",
            "qtr."
        ],
        months: [
            "month",
            "mo."
        ],
        weeks: [
            "week",
            "wk."
        ],
        days: [
            "day",
            "day",
            "days"
        ],
        hours: [
            "hour",
            "hr."
        ],
        minutes: [
            "minute",
            "min."
        ],
        seconds: [
            "second",
            "sec."
        ]
    };
    var lastable = [
        "hours",
        "minutes",
        "seconds"
    ].indexOf(unit) === -1;
    if (numeric === "auto" && lastable) {
        var isDay = unit === "days";
        switch(count){
            case 1:
                return isDay ? "tomorrow" : "next " + units[unit][0];
            case -1:
                return isDay ? "yesterday" : "last " + units[unit][0];
            case 0:
                return isDay ? "today" : "this " + units[unit][0];
        }
    }
    var isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
    return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
}
function formatString(knownFormat) {
    // these all have the offsets removed because we don't have access to them
    // without all the intl stuff this is backfilling
    var filtered = pick(knownFormat, [
        "weekday",
        "era",
        "year",
        "month",
        "day",
        "hour",
        "minute",
        "second",
        "timeZoneName",
        "hour12"
    ]), key = stringify(filtered), dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";
    switch(key){
        case stringify(DATE_SHORT):
            return "M/d/yyyy";
        case stringify(DATE_MED):
            return "LLL d, yyyy";
        case stringify(DATE_MED_WITH_WEEKDAY):
            return "EEE, LLL d, yyyy";
        case stringify(DATE_FULL):
            return "LLLL d, yyyy";
        case stringify(DATE_HUGE):
            return "EEEE, LLLL d, yyyy";
        case stringify(TIME_SIMPLE):
            return "h:mm a";
        case stringify(TIME_WITH_SECONDS):
            return "h:mm:ss a";
        case stringify(TIME_WITH_SHORT_OFFSET):
            return "h:mm a";
        case stringify(TIME_WITH_LONG_OFFSET):
            return "h:mm a";
        case stringify(TIME_24_SIMPLE):
            return "HH:mm";
        case stringify(TIME_24_WITH_SECONDS):
            return "HH:mm:ss";
        case stringify(TIME_24_WITH_SHORT_OFFSET):
            return "HH:mm";
        case stringify(TIME_24_WITH_LONG_OFFSET):
            return "HH:mm";
        case stringify(DATETIME_SHORT):
            return "M/d/yyyy, h:mm a";
        case stringify(DATETIME_MED):
            return "LLL d, yyyy, h:mm a";
        case stringify(DATETIME_FULL):
            return "LLLL d, yyyy, h:mm a";
        case stringify(DATETIME_HUGE):
            return dateTimeHuge;
        case stringify(DATETIME_SHORT_WITH_SECONDS):
            return "M/d/yyyy, h:mm:ss a";
        case stringify(DATETIME_MED_WITH_SECONDS):
            return "LLL d, yyyy, h:mm:ss a";
        case stringify(DATETIME_MED_WITH_WEEKDAY):
            return "EEE, d LLL yyyy, h:mm a";
        case stringify(DATETIME_FULL_WITH_SECONDS):
            return "LLLL d, yyyy, h:mm:ss a";
        case stringify(DATETIME_HUGE_WITH_SECONDS):
            return "EEEE, LLLL d, yyyy, h:mm:ss a";
        default:
            return dateTimeHuge;
    }
}
function stringifyTokens(splits, tokenToString) {
    var s1 = "";
    for(var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done;){
        var token = _step.value;
        if (token.literal) s1 += token.val;
        else s1 += tokenToString(token.val);
    }
    return s1;
}
var _macroTokenToFormatOpts = {
    D: DATE_SHORT,
    DD: DATE_MED,
    DDD: DATE_FULL,
    DDDD: DATE_HUGE,
    t: TIME_SIMPLE,
    tt: TIME_WITH_SECONDS,
    ttt: TIME_WITH_SHORT_OFFSET,
    tttt: TIME_WITH_LONG_OFFSET,
    T: TIME_24_SIMPLE,
    TT: TIME_24_WITH_SECONDS,
    TTT: TIME_24_WITH_SHORT_OFFSET,
    TTTT: TIME_24_WITH_LONG_OFFSET,
    f: DATETIME_SHORT,
    ff: DATETIME_MED,
    fff: DATETIME_FULL,
    ffff: DATETIME_HUGE,
    F: DATETIME_SHORT_WITH_SECONDS,
    FF: DATETIME_MED_WITH_SECONDS,
    FFF: DATETIME_FULL_WITH_SECONDS,
    FFFF: DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */ var Formatter = /*#__PURE__*/ function() {
    Formatter1.create = function create(locale, opts) {
        if (opts === void 0) opts = {
        };
        return new Formatter1(locale, opts);
    };
    Formatter1.parseFormat = function parseFormat(fmt) {
        var current = null, currentFull = "", bracketed = false;
        var splits = [];
        for(var i = 0; i < fmt.length; i++){
            var c = fmt.charAt(i);
            if (c === "'") {
                if (currentFull.length > 0) splits.push({
                    literal: bracketed,
                    val: currentFull
                });
                current = null;
                currentFull = "";
                bracketed = !bracketed;
            } else if (bracketed) currentFull += c;
            else if (c === current) currentFull += c;
            else {
                if (currentFull.length > 0) splits.push({
                    literal: false,
                    val: currentFull
                });
                currentFull = c;
                current = c;
            }
        }
        if (currentFull.length > 0) splits.push({
            literal: bracketed,
            val: currentFull
        });
        return splits;
    };
    Formatter1.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
        return _macroTokenToFormatOpts[token];
    };
    function Formatter1(locale, formatOpts) {
        this.opts = formatOpts;
        this.loc = locale;
        this.systemLoc = null;
    }
    var _proto = Formatter1.prototype;
    _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
        if (this.systemLoc === null) this.systemLoc = this.loc.redefaultToSystem();
        var df = this.systemLoc.dtFormatter(dt, Object.assign({
        }, this.opts, opts));
        return df.format();
    };
    _proto.formatDateTime = function formatDateTime(dt, opts) {
        if (opts === void 0) opts = {
        };
        var df = this.loc.dtFormatter(dt, Object.assign({
        }, this.opts, opts));
        return df.format();
    };
    _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
        if (opts === void 0) opts = {
        };
        var df = this.loc.dtFormatter(dt, Object.assign({
        }, this.opts, opts));
        return df.formatToParts();
    };
    _proto.resolvedOptions = function resolvedOptions(dt, opts) {
        if (opts === void 0) opts = {
        };
        var df = this.loc.dtFormatter(dt, Object.assign({
        }, this.opts, opts));
        return df.resolvedOptions();
    };
    _proto.num = function num(n4, p) {
        if (p === void 0) p = 0;
        // we get some perf out of doing this here, annoyingly
        if (this.opts.forceSimple) return padStart(n4, p);
        var opts = Object.assign({
        }, this.opts);
        if (p > 0) opts.padTo = p;
        return this.loc.numberFormatter(opts).format(n4);
    };
    _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
        var _this = this;
        var knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && hasFormatToParts(), string = function string(opts, extract) {
            return _this.loc.extract(dt, opts, extract);
        }, formatOffset1 = function formatOffset(opts) {
            if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) return "Z";
            return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
        }, meridiem = function meridiem() {
            return knownEnglish ? meridiemForDateTime(dt) : string({
                hour: "numeric",
                hour12: true
            }, "dayperiod");
        }, month = function month(length, standalone) {
            return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
                month: length
            } : {
                month: length,
                day: "numeric"
            }, "month");
        }, weekday = function weekday(length, standalone) {
            return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
                weekday: length
            } : {
                weekday: length,
                month: "long",
                day: "numeric"
            }, "weekday");
        }, maybeMacro = function maybeMacro(token) {
            var formatOpts = Formatter1.macroTokenToFormatOpts(token);
            if (formatOpts) return _this.formatWithSystemDefault(dt, formatOpts);
            else return token;
        }, era = function era(length) {
            return knownEnglish ? eraForDateTime(dt, length) : string({
                era: length
            }, "era");
        }, tokenToString = function tokenToString(token) {
            // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
            switch(token){
                // ms
                case "S":
                    return _this.num(dt.millisecond);
                case "u":
                case "SSS":
                    return _this.num(dt.millisecond, 3);
                // seconds
                case "s":
                    return _this.num(dt.second);
                case "ss":
                    return _this.num(dt.second, 2);
                // minutes
                case "m":
                    return _this.num(dt.minute);
                case "mm":
                    return _this.num(dt.minute, 2);
                // hours
                case "h":
                    return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
                case "hh":
                    return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
                case "H":
                    return _this.num(dt.hour);
                case "HH":
                    return _this.num(dt.hour, 2);
                // offset
                case "Z":
                    // like +6
                    return formatOffset1({
                        format: "narrow",
                        allowZ: _this.opts.allowZ
                    });
                case "ZZ":
                    // like +06:00
                    return formatOffset1({
                        format: "short",
                        allowZ: _this.opts.allowZ
                    });
                case "ZZZ":
                    // like +0600
                    return formatOffset1({
                        format: "techie",
                        allowZ: _this.opts.allowZ
                    });
                case "ZZZZ":
                    // like EST
                    return dt.zone.offsetName(dt.ts, {
                        format: "short",
                        locale: _this.loc.locale
                    });
                case "ZZZZZ":
                    // like Eastern Standard Time
                    return dt.zone.offsetName(dt.ts, {
                        format: "long",
                        locale: _this.loc.locale
                    });
                // zone
                case "z":
                    // like America/New_York
                    return dt.zoneName;
                // meridiems
                case "a":
                    return meridiem();
                // dates
                case "d":
                    return useDateTimeFormatter ? string({
                        day: "numeric"
                    }, "day") : _this.num(dt.day);
                case "dd":
                    return useDateTimeFormatter ? string({
                        day: "2-digit"
                    }, "day") : _this.num(dt.day, 2);
                // weekdays - standalone
                case "c":
                    // like 1
                    return _this.num(dt.weekday);
                case "ccc":
                    // like 'Tues'
                    return weekday("short", true);
                case "cccc":
                    // like 'Tuesday'
                    return weekday("long", true);
                case "ccccc":
                    // like 'T'
                    return weekday("narrow", true);
                // weekdays - format
                case "E":
                    // like 1
                    return _this.num(dt.weekday);
                case "EEE":
                    // like 'Tues'
                    return weekday("short", false);
                case "EEEE":
                    // like 'Tuesday'
                    return weekday("long", false);
                case "EEEEE":
                    // like 'T'
                    return weekday("narrow", false);
                // months - standalone
                case "L":
                    // like 1
                    return useDateTimeFormatter ? string({
                        month: "numeric",
                        day: "numeric"
                    }, "month") : _this.num(dt.month);
                case "LL":
                    // like 01, doesn't seem to work
                    return useDateTimeFormatter ? string({
                        month: "2-digit",
                        day: "numeric"
                    }, "month") : _this.num(dt.month, 2);
                case "LLL":
                    // like Jan
                    return month("short", true);
                case "LLLL":
                    // like January
                    return month("long", true);
                case "LLLLL":
                    // like J
                    return month("narrow", true);
                // months - format
                case "M":
                    // like 1
                    return useDateTimeFormatter ? string({
                        month: "numeric"
                    }, "month") : _this.num(dt.month);
                case "MM":
                    // like 01
                    return useDateTimeFormatter ? string({
                        month: "2-digit"
                    }, "month") : _this.num(dt.month, 2);
                case "MMM":
                    // like Jan
                    return month("short", false);
                case "MMMM":
                    // like January
                    return month("long", false);
                case "MMMMM":
                    // like J
                    return month("narrow", false);
                // years
                case "y":
                    // like 2014
                    return useDateTimeFormatter ? string({
                        year: "numeric"
                    }, "year") : _this.num(dt.year);
                case "yy":
                    // like 14
                    return useDateTimeFormatter ? string({
                        year: "2-digit"
                    }, "year") : _this.num(dt.year.toString().slice(-2), 2);
                case "yyyy":
                    // like 0012
                    return useDateTimeFormatter ? string({
                        year: "numeric"
                    }, "year") : _this.num(dt.year, 4);
                case "yyyyyy":
                    // like 000012
                    return useDateTimeFormatter ? string({
                        year: "numeric"
                    }, "year") : _this.num(dt.year, 6);
                // eras
                case "G":
                    // like AD
                    return era("short");
                case "GG":
                    // like Anno Domini
                    return era("long");
                case "GGGGG":
                    return era("narrow");
                case "kk":
                    return _this.num(dt.weekYear.toString().slice(-2), 2);
                case "kkkk":
                    return _this.num(dt.weekYear, 4);
                case "W":
                    return _this.num(dt.weekNumber);
                case "WW":
                    return _this.num(dt.weekNumber, 2);
                case "o":
                    return _this.num(dt.ordinal);
                case "ooo":
                    return _this.num(dt.ordinal, 3);
                case "q":
                    // like 1
                    return _this.num(dt.quarter);
                case "qq":
                    // like 01
                    return _this.num(dt.quarter, 2);
                case "X":
                    return _this.num(Math.floor(dt.ts / 1000));
                case "x":
                    return _this.num(dt.ts);
                default:
                    return maybeMacro(token);
            }
        };
        return stringifyTokens(Formatter1.parseFormat(fmt), tokenToString);
    };
    _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
        var _this2 = this;
        var tokenToField = function tokenToField(token) {
            switch(token[0]){
                case "S":
                    return "millisecond";
                case "s":
                    return "second";
                case "m":
                    return "minute";
                case "h":
                    return "hour";
                case "d":
                    return "day";
                case "M":
                    return "month";
                case "y":
                    return "year";
                default:
                    return null;
            }
        }, tokenToString = function tokenToString(lildur) {
            return function(token) {
                var mapped = tokenToField(token);
                if (mapped) return _this2.num(lildur.get(mapped), token.length);
                else return token;
            };
        }, tokens = Formatter1.parseFormat(fmt), realTokens = tokens.reduce(function(found, _ref) {
            var literal = _ref.literal, val = _ref.val;
            return literal ? found : found.concat(val);
        }, []), collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function(t) {
            return t;
        }));
        return stringifyTokens(tokens, tokenToString(collapsed));
    };
    return Formatter1;
}();
var Invalid = /*#__PURE__*/ function() {
    function Invalid1(reason, explanation) {
        this.reason = reason;
        this.explanation = explanation;
    }
    var _proto = Invalid1.prototype;
    _proto.toMessage = function toMessage() {
        if (this.explanation) return this.reason + ": " + this.explanation;
        else return this.reason;
    };
    return Invalid1;
}();
/**
 * @interface
 */ var Zone = /*#__PURE__*/ function() {
    function Zone1() {
    }
    var _proto = Zone1.prototype;
    /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */ _proto.offsetName = function offsetName(ts, opts) {
        throw new ZoneIsAbstractError();
    };
    _proto.formatOffset = function formatOffset(ts, format) {
        throw new ZoneIsAbstractError();
    };
    _proto.offset = function offset(ts) {
        throw new ZoneIsAbstractError();
    };
    _proto.equals = function equals(otherZone) {
        throw new ZoneIsAbstractError();
    };
    _createClass(Zone1, [
        {
            key: "type",
            /**
     * The type of zone
     * @abstract
     * @type {string}
     */ get: function get() {
                throw new ZoneIsAbstractError();
            }
        },
        {
            key: "name",
            get: function get() {
                throw new ZoneIsAbstractError();
            }
        },
        {
            key: "universal",
            get: function get() {
                throw new ZoneIsAbstractError();
            }
        },
        {
            key: "isValid",
            get: function get() {
                throw new ZoneIsAbstractError();
            }
        }
    ]);
    return Zone1;
}();
var singleton = null;
/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */ var LocalZone = /*#__PURE__*/ function(_Zone) {
    _inheritsLoose(LocalZone1, _Zone);
    function LocalZone1() {
        return _Zone.apply(this, arguments) || this;
    }
    var _proto = LocalZone1.prototype;
    /** @override **/ _proto.offsetName = function offsetName(ts, _ref) {
        var format = _ref.format, locale = _ref.locale;
        return parseZoneInfo(ts, format, locale);
    };
    _proto.formatOffset = function formatOffset$1(ts, format) {
        return formatOffset(this.offset(ts), format);
    };
    _proto.offset = function offset(ts) {
        return -new Date(ts).getTimezoneOffset();
    };
    _proto.equals = function equals(otherZone) {
        return otherZone.type === "local";
    };
    _createClass(LocalZone1, [
        {
            key: "type",
            /** @override **/ get: function get() {
                return "local";
            }
        },
        {
            key: "name",
            get: function get() {
                if (hasIntl()) return new Intl.DateTimeFormat().resolvedOptions().timeZone;
                else return "local";
            }
        },
        {
            key: "universal",
            get: function get() {
                return false;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return true;
            }
        }
    ], [
        {
            key: "instance",
            /**
     * Get a singleton instance of the local zone
     * @return {LocalZone}
     */ get: function get() {
                if (singleton === null) singleton = new LocalZone1();
                return singleton;
            }
        }
    ]);
    return LocalZone1;
}(Zone);
var matchingRegex = RegExp("^" + ianaRegex.source + "$");
var dtfCache = {
};
function makeDTF(zone) {
    if (!dtfCache[zone]) dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
        hour12: false,
        timeZone: zone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    return dtfCache[zone];
}
var typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
};
function hackyOffset(dtf, date) {
    var formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted), fMonth = parsed[1], fDay = parsed[2], fYear = parsed[3], fHour = parsed[4], fMinute = parsed[5], fSecond = parsed[6];
    return [
        fYear,
        fMonth,
        fDay,
        fHour,
        fMinute,
        fSecond
    ];
}
function partsOffset(dtf, date) {
    var formatted = dtf.formatToParts(date), filled = [];
    for(var i = 0; i < formatted.length; i++){
        var _formatted$i = formatted[i], type = _formatted$i.type, value = _formatted$i.value, pos = typeToPos[type];
        if (!isUndefined(pos)) filled[pos] = parseInt(value, 10);
    }
    return filled;
}
var ianaZoneCache = {
};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */ var IANAZone = /*#__PURE__*/ function(_Zone) {
    _inheritsLoose(IANAZone1, _Zone);
    /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */ IANAZone1.create = function create(name) {
        if (!ianaZoneCache[name]) ianaZoneCache[name] = new IANAZone1(name);
        return ianaZoneCache[name];
    };
    IANAZone1.resetCache = function resetCache() {
        ianaZoneCache = {
        };
        dtfCache = {
        };
    };
    IANAZone1.isValidSpecifier = function isValidSpecifier(s2) {
        return !!(s2 && s2.match(matchingRegex));
    };
    IANAZone1.isValidZone = function isValidZone(zone) {
        try {
            new Intl.DateTimeFormat("en-US", {
                timeZone: zone
            }).format();
            return true;
        } catch (e) {
            return false;
        }
    } // Etc/GMT+8 -> -480
    ;
    IANAZone1.parseGMTOffset = function parseGMTOffset(specifier) {
        if (specifier) {
            var match1 = specifier.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);
            if (match1) return -60 * parseInt(match1[1]);
        }
        return null;
    };
    function IANAZone1(name) {
        var _this;
        _this = _Zone.call(this) || this;
        /** @private **/ _this.zoneName = name;
        /** @private **/ _this.valid = IANAZone1.isValidZone(name);
        return _this;
    }
    /** @override **/ var _proto = IANAZone1.prototype;
    /** @override **/ _proto.offsetName = function offsetName(ts, _ref) {
        var format = _ref.format, locale = _ref.locale;
        return parseZoneInfo(ts, format, locale, this.name);
    };
    _proto.formatOffset = function formatOffset$1(ts, format) {
        return formatOffset(this.offset(ts), format);
    };
    _proto.offset = function offset(ts) {
        var date = new Date(ts);
        if (isNaN(date)) return NaN;
        var dtf = makeDTF(this.name), _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date), year = _ref2[0], month = _ref2[1], day = _ref2[2], hour = _ref2[3], minute = _ref2[4], second = _ref2[5], adjustedHour = hour === 24 ? 0 : hour;
        var asUTC = objToLocalTS({
            year: year,
            month: month,
            day: day,
            hour: adjustedHour,
            minute: minute,
            second: second,
            millisecond: 0
        });
        var asTS = +date;
        var over = asTS % 1000;
        asTS -= over >= 0 ? over : 1000 + over;
        return (asUTC - asTS) / 60000;
    };
    _proto.equals = function equals(otherZone) {
        return otherZone.type === "iana" && otherZone.name === this.name;
    };
    _createClass(IANAZone1, [
        {
            key: "type",
            get: function get() {
                return "iana";
            }
        },
        {
            key: "name",
            get: function get() {
                return this.zoneName;
            }
        },
        {
            key: "universal",
            get: function get() {
                return false;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return this.valid;
            }
        }
    ]);
    return IANAZone1;
}(Zone);
var singleton$1 = null;
/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */ var FixedOffsetZone = /*#__PURE__*/ function(_Zone) {
    _inheritsLoose(FixedOffsetZone1, _Zone);
    /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */ FixedOffsetZone1.instance = function instance(offset2) {
        return offset2 === 0 ? FixedOffsetZone1.utcInstance : new FixedOffsetZone1(offset2);
    };
    FixedOffsetZone1.parseSpecifier = function parseSpecifier(s3) {
        if (s3) {
            var r = s3.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (r) return new FixedOffsetZone1(signedOffset(r[1], r[2]));
        }
        return null;
    };
    _createClass(FixedOffsetZone1, null, [
        {
            key: "utcInstance",
            /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */ get: function get() {
                if (singleton$1 === null) singleton$1 = new FixedOffsetZone1(0);
                return singleton$1;
            }
        }
    ]);
    function FixedOffsetZone1(offset3) {
        var _this;
        _this = _Zone.call(this) || this;
        /** @private **/ _this.fixed = offset3;
        return _this;
    }
    /** @override **/ var _proto = FixedOffsetZone1.prototype;
    /** @override **/ _proto.offsetName = function offsetName() {
        return this.name;
    };
    _proto.formatOffset = function formatOffset$1(ts, format) {
        return formatOffset(this.fixed, format);
    };
    /** @override **/ _proto.offset = function offset() {
        return this.fixed;
    };
    _proto.equals = function equals(otherZone) {
        return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
    };
    _createClass(FixedOffsetZone1, [
        {
            key: "type",
            get: function get() {
                return "fixed";
            }
        },
        {
            key: "name",
            get: function get() {
                return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
            }
        },
        {
            key: "universal",
            get: function get() {
                return true;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return true;
            }
        }
    ]);
    return FixedOffsetZone1;
}(Zone);
/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */ var InvalidZone = /*#__PURE__*/ function(_Zone) {
    _inheritsLoose(InvalidZone1, _Zone);
    function InvalidZone1(zoneName) {
        var _this;
        _this = _Zone.call(this) || this;
        /**  @private */ _this.zoneName = zoneName;
        return _this;
    }
    /** @override **/ var _proto = InvalidZone1.prototype;
    /** @override **/ _proto.offsetName = function offsetName() {
        return null;
    };
    _proto.formatOffset = function formatOffset() {
        return "";
    };
    _proto.offset = function offset() {
        return NaN;
    };
    _proto.equals = function equals() {
        return false;
    };
    _createClass(InvalidZone1, [
        {
            key: "type",
            get: function get() {
                return "invalid";
            }
        },
        {
            key: "name",
            get: function get() {
                return this.zoneName;
            }
        },
        {
            key: "universal",
            get: function get() {
                return false;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return false;
            }
        }
    ]);
    return InvalidZone1;
}(Zone);
/**
 * @private
 */ function normalizeZone(input, defaultZone1) {
    var offset4;
    if (isUndefined(input) || input === null) return defaultZone1;
    else if (input instanceof Zone) return input;
    else if (isString(input)) {
        var lowered = input.toLowerCase();
        if (lowered === "local") return defaultZone1;
        else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;
        else if ((offset4 = IANAZone.parseGMTOffset(input)) != null) // handle Etc/GMT-4, which V8 chokes on
        return FixedOffsetZone.instance(offset4);
        else if (IANAZone.isValidSpecifier(lowered)) return IANAZone.create(input);
        else return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
    } else if (isNumber(input)) return FixedOffsetZone.instance(input);
    else if (typeof input === "object" && input.offset && typeof input.offset === "number") // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
    else return new InvalidZone(input);
}
var now = function now() {
    return Date.now();
}, defaultZone = null, // not setting this directly to LocalZone.instance bc loading order issues
defaultLocale = null, defaultNumberingSystem = null, defaultOutputCalendar = null, throwOnInvalid = false;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */ var Settings = /*#__PURE__*/ function() {
    function Settings1() {
    }
    /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */ Settings1.resetCaches = function resetCaches() {
        Locale.resetCache();
        IANAZone.resetCache();
    };
    _createClass(Settings1, null, [
        {
            key: "now",
            /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */ get: function get() {
                return now;
            },
            set: function set(n5) {
                now = n5;
            }
        },
        {
            key: "defaultZoneName",
            get: function get() {
                return Settings1.defaultZone.name;
            },
            set: function set(z) {
                if (!z) defaultZone = null;
                else defaultZone = normalizeZone(z);
            }
        },
        {
            key: "defaultZone",
            get: function get() {
                return defaultZone || LocalZone.instance;
            }
        },
        {
            key: "defaultLocale",
            get: function get() {
                return defaultLocale;
            },
            set: function set(locale) {
                defaultLocale = locale;
            }
        },
        {
            key: "defaultNumberingSystem",
            get: function get() {
                return defaultNumberingSystem;
            },
            set: function set(numberingSystem) {
                defaultNumberingSystem = numberingSystem;
            }
        },
        {
            key: "defaultOutputCalendar",
            get: function get() {
                return defaultOutputCalendar;
            },
            set: function set(outputCalendar) {
                defaultOutputCalendar = outputCalendar;
            }
        },
        {
            key: "throwOnInvalid",
            get: function get() {
                return throwOnInvalid;
            },
            set: function set(t) {
                throwOnInvalid = t;
            }
        }
    ]);
    return Settings1;
}();
var intlDTCache = {
};
function getCachedDTF(locString, opts) {
    if (opts === void 0) opts = {
    };
    var key = JSON.stringify([
        locString,
        opts
    ]);
    var dtf = intlDTCache[key];
    if (!dtf) {
        dtf = new Intl.DateTimeFormat(locString, opts);
        intlDTCache[key] = dtf;
    }
    return dtf;
}
var intlNumCache = {
};
function getCachedINF(locString, opts) {
    if (opts === void 0) opts = {
    };
    var key = JSON.stringify([
        locString,
        opts
    ]);
    var inf = intlNumCache[key];
    if (!inf) {
        inf = new Intl.NumberFormat(locString, opts);
        intlNumCache[key] = inf;
    }
    return inf;
}
var intlRelCache = {
};
function getCachedRTF(locString, opts) {
    if (opts === void 0) opts = {
    };
    var _opts = opts, base = _opts.base, cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, [
        "base"
    ]); // exclude `base` from the options
    var key = JSON.stringify([
        locString,
        cacheKeyOpts
    ]);
    var inf = intlRelCache[key];
    if (!inf) {
        inf = new Intl.RelativeTimeFormat(locString, opts);
        intlRelCache[key] = inf;
    }
    return inf;
}
var sysLocaleCache = null;
function systemLocale() {
    if (sysLocaleCache) return sysLocaleCache;
    else if (hasIntl()) {
        var computedSys = new Intl.DateTimeFormat().resolvedOptions().locale; // node sometimes defaults to "und". Override that because that is dumb
        sysLocaleCache = !computedSys || computedSys === "und" ? "en-US" : computedSys;
        return sysLocaleCache;
    } else {
        sysLocaleCache = "en-US";
        return sysLocaleCache;
    }
}
function parseLocaleString(localeStr) {
    // I really want to avoid writing a BCP 47 parser
    // see, e.g. https://github.com/wooorm/bcp-47
    // Instead, we'll do this:
    // a) if the string has no -u extensions, just leave it alone
    // b) if it does, use Intl to resolve everything
    // c) if Intl fails, try again without the -u
    var uIndex = localeStr.indexOf("-u-");
    if (uIndex === -1) return [
        localeStr
    ];
    else {
        var options;
        var smaller = localeStr.substring(0, uIndex);
        try {
            options = getCachedDTF(localeStr).resolvedOptions();
        } catch (e) {
            options = getCachedDTF(smaller).resolvedOptions();
        }
        var _options = options, numberingSystem = _options.numberingSystem, calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it
        return [
            smaller,
            numberingSystem,
            calendar
        ];
    }
}
function intlConfigString(localeStr, numberingSystem, outputCalendar) {
    if (hasIntl()) {
        if (outputCalendar || numberingSystem) {
            localeStr += "-u";
            if (outputCalendar) localeStr += "-ca-" + outputCalendar;
            if (numberingSystem) localeStr += "-nu-" + numberingSystem;
            return localeStr;
        } else return localeStr;
    } else return [];
}
function mapMonths(f) {
    var ms = [];
    for(var i = 1; i <= 12; i++){
        var dt = DateTime.utc(2016, i, 1);
        ms.push(f(dt));
    }
    return ms;
}
function mapWeekdays(f) {
    var ms = [];
    for(var i = 1; i <= 7; i++){
        var dt = DateTime.utc(2016, 11, 13 + i);
        ms.push(f(dt));
    }
    return ms;
}
function listStuff(loc, length, defaultOK, englishFn, intlFn) {
    var mode = loc.listingMode(defaultOK);
    if (mode === "error") return null;
    else if (mode === "en") return englishFn(length);
    else return intlFn(length);
}
function supportsFastNumbers(loc) {
    if (loc.numberingSystem && loc.numberingSystem !== "latn") return false;
    else return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || hasIntl() && new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
}
/**
 * @private
 */ var PolyNumberFormatter = /*#__PURE__*/ function() {
    function PolyNumberFormatter1(intl, forceSimple, opts) {
        this.padTo = opts.padTo || 0;
        this.floor = opts.floor || false;
        if (!forceSimple && hasIntl()) {
            var intlOpts = {
                useGrouping: false
            };
            if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
            this.inf = getCachedINF(intl, intlOpts);
        }
    }
    var _proto = PolyNumberFormatter1.prototype;
    _proto.format = function format(i) {
        if (this.inf) {
            var fixed = this.floor ? Math.floor(i) : i;
            return this.inf.format(fixed);
        } else {
            // to match the browser's numberformatter defaults
            var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
            return padStart(_fixed, this.padTo);
        }
    };
    return PolyNumberFormatter1;
}();
/**
 * @private
 */ var PolyDateFormatter = /*#__PURE__*/ function() {
    function PolyDateFormatter1(dt, intl, opts) {
        this.opts = opts;
        this.hasIntl = hasIntl();
        var z;
        if (dt.zone.universal && this.hasIntl) {
            // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
            // That is why fixed-offset TZ is set to that unless it is:
            // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
            // 2. Unsupported by the browser:
            //    - some do not support Etc/
            //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
            var gmtOffset = -1 * (dt.offset / 60);
            var offsetZ = gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset;
            var isOffsetZoneSupported = IANAZone.isValidZone(offsetZ);
            if (dt.offset !== 0 && isOffsetZoneSupported) {
                z = offsetZ;
                this.dt = dt;
            } else {
                // Not all fixed-offset zones like Etc/+4:30 are present in tzdata.
                // So we have to make do. Two cases:
                // 1. The format options tell us to show the zone. We can't do that, so the best
                // we can do is format the date in UTC.
                // 2. The format options don't tell us to show the zone. Then we can adjust them
                // the time and tell the formatter to show it to us in UTC, so that the time is right
                // and the bad zone doesn't show up.
                z = "UTC";
                if (opts.timeZoneName) this.dt = dt;
                else this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60000);
            }
        } else if (dt.zone.type === "local") this.dt = dt;
        else {
            this.dt = dt;
            z = dt.zone.name;
        }
        if (this.hasIntl) {
            var intlOpts = Object.assign({
            }, this.opts);
            if (z) intlOpts.timeZone = z;
            this.dtf = getCachedDTF(intl, intlOpts);
        }
    }
    var _proto2 = PolyDateFormatter1.prototype;
    _proto2.format = function format() {
        if (this.hasIntl) return this.dtf.format(this.dt.toJSDate());
        else {
            var tokenFormat = formatString(this.opts), loc = Locale.create("en-US");
            return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
        }
    };
    _proto2.formatToParts = function formatToParts() {
        if (this.hasIntl && hasFormatToParts()) return this.dtf.formatToParts(this.dt.toJSDate());
        else // This is kind of a cop out. We actually could do this for English. However, we couldn't do it for intl strings
        // and IMO it's too weird to have an uncanny valley like that
        return [];
    };
    _proto2.resolvedOptions = function resolvedOptions() {
        if (this.hasIntl) return this.dtf.resolvedOptions();
        else return {
            locale: "en-US",
            numberingSystem: "latn",
            outputCalendar: "gregory"
        };
    };
    return PolyDateFormatter1;
}();
/**
 * @private
 */ var PolyRelFormatter = /*#__PURE__*/ function() {
    function PolyRelFormatter1(intl, isEnglish, opts) {
        this.opts = Object.assign({
            style: "long"
        }, opts);
        if (!isEnglish && hasRelative()) this.rtf = getCachedRTF(intl, opts);
    }
    var _proto3 = PolyRelFormatter1.prototype;
    _proto3.format = function format(count, unit) {
        if (this.rtf) return this.rtf.format(count, unit);
        else return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    };
    _proto3.formatToParts = function formatToParts(count, unit) {
        if (this.rtf) return this.rtf.formatToParts(count, unit);
        else return [];
    };
    return PolyRelFormatter1;
}();
/**
 * @private
 */ var Locale = /*#__PURE__*/ function() {
    Locale1.fromOpts = function fromOpts(opts) {
        return Locale1.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
    };
    Locale1.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
        if (defaultToEN === void 0) defaultToEN = false;
        var specifiedLocale = locale || Settings.defaultLocale, // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
        localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale()), numberingSystemR = numberingSystem || Settings.defaultNumberingSystem, outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
        return new Locale1(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
    };
    Locale1.resetCache = function resetCache() {
        sysLocaleCache = null;
        intlDTCache = {
        };
        intlNumCache = {
        };
        intlRelCache = {
        };
    };
    Locale1.fromObject = function fromObject(_temp) {
        var _ref = _temp === void 0 ? {
        } : _temp, locale = _ref.locale, numberingSystem = _ref.numberingSystem, outputCalendar = _ref.outputCalendar;
        return Locale1.create(locale, numberingSystem, outputCalendar);
    };
    function Locale1(locale, numbering, outputCalendar, specifiedLocale) {
        var _parseLocaleString = parseLocaleString(locale), parsedLocale = _parseLocaleString[0], parsedNumberingSystem = _parseLocaleString[1], parsedOutputCalendar = _parseLocaleString[2];
        this.locale = parsedLocale;
        this.numberingSystem = numbering || parsedNumberingSystem || null;
        this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
        this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
        this.weekdaysCache = {
            format: {
            },
            standalone: {
            }
        };
        this.monthsCache = {
            format: {
            },
            standalone: {
            }
        };
        this.meridiemCache = null;
        this.eraCache = {
        };
        this.specifiedLocale = specifiedLocale;
        this.fastNumbersCached = null;
    }
    var _proto4 = Locale1.prototype;
    _proto4.listingMode = function listingMode(defaultOK) {
        if (defaultOK === void 0) defaultOK = true;
        var intl = hasIntl(), hasFTP = intl && hasFormatToParts(), isActuallyEn = this.isEnglish(), hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
        if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOK) return "error";
        else if (!hasFTP || isActuallyEn && hasNoWeirdness) return "en";
        else return "intl";
    };
    _proto4.clone = function clone(alts) {
        if (!alts || Object.getOwnPropertyNames(alts).length === 0) return this;
        else return Locale1.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    };
    _proto4.redefaultToEN = function redefaultToEN(alts) {
        if (alts === void 0) alts = {
        };
        return this.clone(Object.assign({
        }, alts, {
            defaultToEN: true
        }));
    };
    _proto4.redefaultToSystem = function redefaultToSystem(alts) {
        if (alts === void 0) alts = {
        };
        return this.clone(Object.assign({
        }, alts, {
            defaultToEN: false
        }));
    };
    _proto4.months = function months$1(length, format, defaultOK) {
        var _this = this;
        if (format === void 0) format = false;
        if (defaultOK === void 0) defaultOK = true;
        return listStuff(this, length, defaultOK, months, function() {
            var intl = format ? {
                month: length,
                day: "numeric"
            } : {
                month: length
            }, formatStr = format ? "format" : "standalone";
            if (!_this.monthsCache[formatStr][length]) _this.monthsCache[formatStr][length] = mapMonths(function(dt) {
                return _this.extract(dt, intl, "month");
            });
            return _this.monthsCache[formatStr][length];
        });
    };
    _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
        var _this2 = this;
        if (format === void 0) format = false;
        if (defaultOK === void 0) defaultOK = true;
        return listStuff(this, length, defaultOK, weekdays, function() {
            var intl = format ? {
                weekday: length,
                year: "numeric",
                month: "long",
                day: "numeric"
            } : {
                weekday: length
            }, formatStr = format ? "format" : "standalone";
            if (!_this2.weekdaysCache[formatStr][length]) _this2.weekdaysCache[formatStr][length] = mapWeekdays(function(dt) {
                return _this2.extract(dt, intl, "weekday");
            });
            return _this2.weekdaysCache[formatStr][length];
        });
    };
    _proto4.meridiems = function meridiems$1(defaultOK) {
        var _this3 = this;
        if (defaultOK === void 0) defaultOK = true;
        return listStuff(this, undefined, defaultOK, function() {
            return meridiems;
        }, function() {
            // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
            // for AM and PM. This is probably wrong, but it's makes parsing way easier.
            if (!_this3.meridiemCache) {
                var intl = {
                    hour: "numeric",
                    hour12: true
                };
                _this3.meridiemCache = [
                    DateTime.utc(2016, 11, 13, 9),
                    DateTime.utc(2016, 11, 13, 19)
                ].map(function(dt) {
                    return _this3.extract(dt, intl, "dayperiod");
                });
            }
            return _this3.meridiemCache;
        });
    };
    _proto4.eras = function eras$1(length, defaultOK) {
        var _this4 = this;
        if (defaultOK === void 0) defaultOK = true;
        return listStuff(this, length, defaultOK, eras, function() {
            var intl = {
                era: length
            }; // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
            // to definitely enumerate them.
            if (!_this4.eraCache[length]) _this4.eraCache[length] = [
                DateTime.utc(-40, 1, 1),
                DateTime.utc(2017, 1, 1)
            ].map(function(dt) {
                return _this4.extract(dt, intl, "era");
            });
            return _this4.eraCache[length];
        });
    };
    _proto4.extract = function extract(dt, intlOpts, field) {
        var df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find(function(m) {
            return m.type.toLowerCase() === field;
        });
        return matching ? matching.value : null;
    };
    _proto4.numberFormatter = function numberFormatter(opts) {
        if (opts === void 0) opts = {
        };
        // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
        // (in contrast, the rest of the condition is used heavily)
        return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
    };
    _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
        if (intlOpts === void 0) intlOpts = {
        };
        return new PolyDateFormatter(dt, this.intl, intlOpts);
    };
    _proto4.relFormatter = function relFormatter(opts) {
        if (opts === void 0) opts = {
        };
        return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
    };
    _proto4.isEnglish = function isEnglish() {
        return this.locale === "en" || this.locale.toLowerCase() === "en-us" || hasIntl() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
    };
    _proto4.equals = function equals(other) {
        return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
    };
    _createClass(Locale1, [
        {
            key: "fastNumbers",
            get: function get() {
                if (this.fastNumbersCached == null) this.fastNumbersCached = supportsFastNumbers(this);
                return this.fastNumbersCached;
            }
        }
    ]);
    return Locale1;
}();
/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */ function combineRegexes() {
    for(var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++)regexes[_key] = arguments[_key];
    var full = regexes.reduce(function(f, r) {
        return f + r.source;
    }, "");
    return RegExp("^" + full + "$");
}
function combineExtractors() {
    for(var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)extractors[_key2] = arguments[_key2];
    return function(m) {
        return extractors.reduce(function(_ref, ex) {
            var mergedVals = _ref[0], mergedZone = _ref[1], cursor = _ref[2];
            var _ex = ex(m, cursor), val = _ex[0], zone = _ex[1], next = _ex[2];
            return [
                Object.assign(mergedVals, val),
                mergedZone || zone,
                next
            ];
        }, [
            {
            },
            null,
            1
        ]).slice(0, 2);
    };
}
function parse(s4) {
    if (s4 == null) return [
        null,
        null
    ];
    for(var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)patterns[_key3 - 1] = arguments[_key3];
    for(var _i = 0, _patterns = patterns; _i < _patterns.length; _i++){
        var _patterns$_i = _patterns[_i], regex = _patterns$_i[0], extractor = _patterns$_i[1];
        var m = regex.exec(s4);
        if (m) return extractor(m);
    }
    return [
        null,
        null
    ];
}
function simpleParse() {
    for(var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)keys[_key4] = arguments[_key4];
    return function(match2, cursor) {
        var ret = {
        };
        var i;
        for(i = 0; i < keys.length; i++)ret[keys[i]] = parseInteger(match2[cursor + i]);
        return [
            ret,
            null,
            cursor + i
        ];
    };
} // ISO and SQL parsing
var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?"), isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?"), isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/, isoOrdinalRegex = /(\d{4})-?(\d{3})/, extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"), extractISOOrdinalData = simpleParse("year", "ordinal"), sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/, // dumbed-down version of the ISO one
sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?"), sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");
function int(match3, pos, fallback) {
    var m = match3[pos];
    return isUndefined(m) ? fallback : parseInteger(m);
}
function extractISOYmd(match4, cursor) {
    var item = {
        year: int(match4, cursor),
        month: int(match4, cursor + 1, 1),
        day: int(match4, cursor + 2, 1)
    };
    return [
        item,
        null,
        cursor + 3
    ];
}
function extractISOTime(match5, cursor) {
    var item = {
        hours: int(match5, cursor, 0),
        minutes: int(match5, cursor + 1, 0),
        seconds: int(match5, cursor + 2, 0),
        milliseconds: parseMillis(match5[cursor + 3])
    };
    return [
        item,
        null,
        cursor + 4
    ];
}
function extractISOOffset(match6, cursor) {
    var local = !match6[cursor] && !match6[cursor + 1], fullOffset = signedOffset(match6[cursor + 1], match6[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
    return [
        {
        },
        zone,
        cursor + 3
    ];
}
function extractIANAZone(match7, cursor) {
    var zone = match7[cursor] ? IANAZone.create(match7[cursor]) : null;
    return [
        {
        },
        zone,
        cursor + 1
    ];
} // ISO time parsing
var isoTimeOnly = RegExp("^T?" + isoTimeBaseRegex.source + "$"); // ISO duration parsing
var isoDuration = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function extractISODuration(match8) {
    var s5 = match8[0], yearStr = match8[1], monthStr = match8[2], weekStr = match8[3], dayStr = match8[4], hourStr = match8[5], minuteStr = match8[6], secondStr = match8[7], millisecondsStr = match8[8];
    var hasNegativePrefix = s5[0] === "-";
    var negativeSeconds = secondStr && secondStr[0] === "-";
    var maybeNegate = function maybeNegate(num, force) {
        if (force === void 0) force = false;
        return num !== undefined && (force || num && hasNegativePrefix) ? -num : num;
    };
    return [
        {
            years: maybeNegate(parseInteger(yearStr)),
            months: maybeNegate(parseInteger(monthStr)),
            weeks: maybeNegate(parseInteger(weekStr)),
            days: maybeNegate(parseInteger(dayStr)),
            hours: maybeNegate(parseInteger(hourStr)),
            minutes: maybeNegate(parseInteger(minuteStr)),
            seconds: maybeNegate(parseInteger(secondStr), secondStr === "-0"),
            milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
        }
    ];
} // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
var obsOffsets = {
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480
};
function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = {
        year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
        month: monthsShort.indexOf(monthStr) + 1,
        day: parseInteger(dayStr),
        hour: parseInteger(hourStr),
        minute: parseInteger(minuteStr)
    };
    if (secondStr) result.second = parseInteger(secondStr);
    if (weekdayStr) result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
    return result;
} // RFC 2822/5322
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function extractRFC2822(match9) {
    var weekdayStr = match9[1], dayStr = match9[2], monthStr = match9[3], yearStr = match9[4], hourStr = match9[5], minuteStr = match9[6], secondStr = match9[7], obsOffset = match9[8], milOffset = match9[9], offHourStr = match9[10], offMinuteStr = match9[11], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    var offset5;
    if (obsOffset) offset5 = obsOffsets[obsOffset];
    else if (milOffset) offset5 = 0;
    else offset5 = signedOffset(offHourStr, offMinuteStr);
    return [
        result,
        new FixedOffsetZone(offset5)
    ];
}
function preprocessRFC2822(s6) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s6.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
} // http date
var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function extractRFC1123Or850(match10) {
    var weekdayStr = match10[1], dayStr = match10[2], monthStr = match10[3], yearStr = match10[4], hourStr = match10[5], minuteStr = match10[6], secondStr = match10[7], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [
        result,
        FixedOffsetZone.utcInstance
    ];
}
function extractASCII(match11) {
    var weekdayStr = match11[1], monthStr = match11[2], dayStr = match11[3], hourStr = match11[4], minuteStr = match11[5], secondStr = match11[6], yearStr = match11[7], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [
        result,
        FixedOffsetZone.utcInstance
    ];
}
var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
var extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
/**
 * @private
 */ function parseISODate(s7) {
    return parse(s7, [
        isoYmdWithTimeExtensionRegex,
        extractISOYmdTimeAndOffset
    ], [
        isoWeekWithTimeExtensionRegex,
        extractISOWeekTimeAndOffset
    ], [
        isoOrdinalWithTimeExtensionRegex,
        extractISOOrdinalDateAndTime
    ], [
        isoTimeCombinedRegex,
        extractISOTimeAndOffset
    ]);
}
function parseRFC2822Date(s8) {
    return parse(preprocessRFC2822(s8), [
        rfc2822,
        extractRFC2822
    ]);
}
function parseHTTPDate(s9) {
    return parse(s9, [
        rfc1123,
        extractRFC1123Or850
    ], [
        rfc850,
        extractRFC1123Or850
    ], [
        ascii,
        extractASCII
    ]);
}
function parseISODuration(s10) {
    return parse(s10, [
        isoDuration,
        extractISODuration
    ]);
}
var extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s11) {
    return parse(s11, [
        isoTimeOnly,
        extractISOTimeOnly
    ]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s12) {
    return parse(s12, [
        sqlYmdWithTimeExtensionRegex,
        extractISOYmdTimeOffsetAndIANAZone
    ], [
        sqlTimeCombinedRegex,
        extractISOTimeOffsetAndIANAZone
    ]);
}
var INVALID = "Invalid Duration"; // unit conversion constants
var lowOrderMatrix = {
    weeks: {
        days: 7,
        hours: 168,
        minutes: 10080,
        seconds: 604800,
        milliseconds: 604800000
    },
    days: {
        hours: 24,
        minutes: 1440,
        seconds: 86400,
        milliseconds: 86400000
    },
    hours: {
        minutes: 60,
        seconds: 3600,
        milliseconds: 3600000
    },
    minutes: {
        seconds: 60,
        milliseconds: 60000
    },
    seconds: {
        milliseconds: 1000
    }
}, casualMatrix = Object.assign({
    years: {
        quarters: 4,
        months: 12,
        weeks: 52,
        days: 365,
        hours: 8760,
        minutes: 525600,
        seconds: 31536000,
        milliseconds: 31536000000
    },
    quarters: {
        months: 3,
        weeks: 13,
        days: 91,
        hours: 2184,
        minutes: 131040,
        seconds: 7862400,
        milliseconds: 7862400000
    },
    months: {
        weeks: 4,
        days: 30,
        hours: 720,
        minutes: 43200,
        seconds: 2592000,
        milliseconds: 2592000000
    }
}, lowOrderMatrix), daysInYearAccurate = 365.2425, daysInMonthAccurate = 30.436875, accurateMatrix = Object.assign({
    years: {
        quarters: 4,
        months: 12,
        weeks: daysInYearAccurate / 7,
        days: daysInYearAccurate,
        hours: daysInYearAccurate * 24,
        minutes: daysInYearAccurate * 1440,
        seconds: daysInYearAccurate * 86400,
        milliseconds: daysInYearAccurate * 86400000
    },
    quarters: {
        months: 3,
        weeks: daysInYearAccurate / 28,
        days: daysInYearAccurate / 4,
        hours: daysInYearAccurate * 24 / 4,
        minutes: daysInYearAccurate * 1440 / 4,
        seconds: daysInYearAccurate * 86400 / 4,
        milliseconds: daysInYearAccurate * 86400000 / 4
    },
    months: {
        weeks: daysInMonthAccurate / 7,
        days: daysInMonthAccurate,
        hours: daysInMonthAccurate * 24,
        minutes: daysInMonthAccurate * 1440,
        seconds: daysInMonthAccurate * 86400,
        milliseconds: daysInMonthAccurate * 86400000
    }
}, lowOrderMatrix); // units ordered by size
var orderedUnits = [
    "years",
    "quarters",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds"
];
var reverseUnits = orderedUnits.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"
function clone(dur, alts, clear) {
    if (clear === void 0) clear = false;
    // deep merge for vals
    var conf = {
        values: clear ? alts.values : Object.assign({
        }, dur.values, alts.values || {
        }),
        loc: dur.loc.clone(alts.loc),
        conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
    };
    return new Duration(conf);
}
function antiTrunc(n6) {
    return n6 < 0 ? Math.floor(n6) : Math.ceil(n6);
} // NB: mutates parameters
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
    var conv = matrix[toUnit][fromUnit], raw = fromMap[fromUnit] / conv, sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]), // ok, so this is wild, but see the matrix in the tests
    added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
    toMap[toUnit] += added;
    fromMap[fromUnit] -= added * conv;
} // NB: mutates parameters
function normalizeValues(matrix, vals) {
    reverseUnits.reduce(function(previous, current) {
        if (!isUndefined(vals[current])) {
            if (previous) convert(matrix, vals, previous, vals, current);
            return current;
        } else return previous;
    }, null);
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration.years}, {@link Duration.months}, {@link Duration.weeks}, {@link Duration.days}, {@link Duration.hours}, {@link Duration.minutes}, {@link Duration.seconds}, {@link Duration.milliseconds} accessors.
 * * **Configuration** See  {@link Duration.locale} and {@link Duration.numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration.plus}, {@link Duration.minus}, {@link Duration.normalize}, {@link Duration.set}, {@link Duration.reconfigure}, {@link Duration.shiftTo}, and {@link Duration.negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration.as}, {@link Duration.toISO}, {@link Duration.toFormat}, and {@link Duration.toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */ var Duration = /*#__PURE__*/ function() {
    /**
   * @private
   */ function Duration1(config) {
        var accurate = config.conversionAccuracy === "longterm" || false;
        /**
     * @access private
     */ this.values = config.values;
        /**
     * @access private
     */ this.loc = config.loc || Locale.create();
        /**
     * @access private
     */ this.conversionAccuracy = accurate ? "longterm" : "casual";
        /**
     * @access private
     */ this.invalid = config.invalid || null;
        /**
     * @access private
     */ this.matrix = accurate ? accurateMatrix : casualMatrix;
        /**
     * @access private
     */ this.isLuxonDuration = true;
    }
    /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */ Duration1.fromMillis = function fromMillis(count, opts) {
        return Duration1.fromObject(Object.assign({
            milliseconds: count
        }, opts));
    };
    Duration1.fromObject = function fromObject(obj) {
        if (obj == null || typeof obj !== "object") throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
        return new Duration1({
            values: normalizeObject(obj, Duration1.normalizeUnit, [
                "locale",
                "numberingSystem",
                "conversionAccuracy",
                "zone" // a bit of debt; it's super inconvenient internally not to be able to blindly pass this
            ]),
            loc: Locale.fromObject(obj),
            conversionAccuracy: obj.conversionAccuracy
        });
    };
    Duration1.fromISO = function fromISO(text, opts) {
        var _parseISODuration = parseISODuration(text), parsed = _parseISODuration[0];
        if (parsed) {
            var obj = Object.assign(parsed, opts);
            return Duration1.fromObject(obj);
        } else return Duration1.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    };
    Duration1.fromISOTime = function fromISOTime(text, opts) {
        var _parseISOTimeOnly = parseISOTimeOnly(text), parsed = _parseISOTimeOnly[0];
        if (parsed) {
            var obj = Object.assign(parsed, opts);
            return Duration1.fromObject(obj);
        } else return Duration1.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    };
    Duration1.invalid = function invalid(reason, explanation) {
        if (explanation === void 0) explanation = null;
        if (!reason) throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
        var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
        if (Settings.throwOnInvalid) throw new InvalidDurationError(invalid);
        else return new Duration1({
            invalid: invalid
        });
    };
    Duration1.normalizeUnit = function normalizeUnit(unit) {
        var normalized = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds"
        }[unit ? unit.toLowerCase() : unit];
        if (!normalized) throw new InvalidUnitError(unit);
        return normalized;
    };
    Duration1.isDuration = function isDuration(o) {
        return o && o.isLuxonDuration || false;
    };
    var _proto = Duration1.prototype;
    /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration.shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */ _proto.toFormat = function toFormat(fmt, opts) {
        if (opts === void 0) opts = {
        };
        // reverse-compat since 1.2; we always round down now, never up, and we do it by default
        var fmtOpts = Object.assign({
        }, opts, {
            floor: opts.round !== false && opts.floor !== false
        });
        return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
    };
    _proto.toObject = function toObject(opts) {
        if (opts === void 0) opts = {
        };
        if (!this.isValid) return {
        };
        var base = Object.assign({
        }, this.values);
        if (opts.includeConfig) {
            base.conversionAccuracy = this.conversionAccuracy;
            base.numberingSystem = this.loc.numberingSystem;
            base.locale = this.loc.locale;
        }
        return base;
    };
    _proto.toISO = function toISO() {
        // we could use the formatter, but this is an easier way to get the minimum string
        if (!this.isValid) return null;
        var s13 = "P";
        if (this.years !== 0) s13 += this.years + "Y";
        if (this.months !== 0 || this.quarters !== 0) s13 += this.months + this.quarters * 3 + "M";
        if (this.weeks !== 0) s13 += this.weeks + "W";
        if (this.days !== 0) s13 += this.days + "D";
        if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s13 += "T";
        if (this.hours !== 0) s13 += this.hours + "H";
        if (this.minutes !== 0) s13 += this.minutes + "M";
        if (this.seconds !== 0 || this.milliseconds !== 0) // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
        s13 += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
        if (s13 === "P") s13 += "T0S";
        return s13;
    };
    _proto.toISOTime = function toISOTime(opts) {
        if (opts === void 0) opts = {
        };
        if (!this.isValid) return null;
        var millis = this.toMillis();
        if (millis < 0 || millis >= 86400000) return null;
        opts = Object.assign({
            suppressMilliseconds: false,
            suppressSeconds: false,
            includePrefix: false,
            format: "extended"
        }, opts);
        var value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
        var fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
        if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
            fmt += opts.format === "basic" ? "ss" : ":ss";
            if (!opts.suppressMilliseconds || value.milliseconds !== 0) fmt += ".SSS";
        }
        var str = value.toFormat(fmt);
        if (opts.includePrefix) str = "T" + str;
        return str;
    };
    _proto.toJSON = function toJSON() {
        return this.toISO();
    };
    _proto.toString = function toString() {
        return this.toISO();
    };
    _proto.toMillis = function toMillis() {
        return this.as("milliseconds");
    };
    _proto.valueOf = function valueOf() {
        return this.toMillis();
    };
    _proto.plus = function plus(duration) {
        if (!this.isValid) return this;
        var dur = friendlyDuration(duration), result = {
        };
        for(var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step; !(_step = _iterator()).done;){
            var k = _step.value;
            if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) result[k] = dur.get(k) + this.get(k);
        }
        return clone(this, {
            values: result
        }, true);
    };
    _proto.minus = function minus(duration) {
        if (!this.isValid) return this;
        var dur = friendlyDuration(duration);
        return this.plus(dur.negate());
    };
    _proto.mapUnits = function mapUnits(fn) {
        if (!this.isValid) return this;
        var result = {
        };
        for(var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++){
            var k = _Object$keys[_i];
            result[k] = asNumber(fn(this.values[k], k));
        }
        return clone(this, {
            values: result
        }, true);
    };
    _proto.get = function get(unit) {
        return this[Duration1.normalizeUnit(unit)];
    };
    _proto.set = function set(values) {
        if (!this.isValid) return this;
        var mixed = Object.assign(this.values, normalizeObject(values, Duration1.normalizeUnit, []));
        return clone(this, {
            values: mixed
        });
    };
    _proto.reconfigure = function reconfigure(_temp) {
        var _ref = _temp === void 0 ? {
        } : _temp, locale = _ref.locale, numberingSystem = _ref.numberingSystem, conversionAccuracy = _ref.conversionAccuracy;
        var loc = this.loc.clone({
            locale: locale,
            numberingSystem: numberingSystem
        }), opts = {
            loc: loc
        };
        if (conversionAccuracy) opts.conversionAccuracy = conversionAccuracy;
        return clone(this, opts);
    };
    _proto.as = function as(unit) {
        return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
    };
    _proto.normalize = function normalize() {
        if (!this.isValid) return this;
        var vals = this.toObject();
        normalizeValues(this.matrix, vals);
        return clone(this, {
            values: vals
        }, true);
    };
    _proto.shiftTo = function shiftTo() {
        for(var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++)units[_key] = arguments[_key];
        if (!this.isValid) return this;
        if (units.length === 0) return this;
        units = units.map(function(u) {
            return Duration1.normalizeUnit(u);
        });
        var built = {
        }, accumulated = {
        }, vals = this.toObject();
        var lastUnit;
        for(var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits), _step2; !(_step2 = _iterator2()).done;){
            var k = _step2.value;
            if (units.indexOf(k) >= 0) {
                lastUnit = k;
                var own = 0; // anything we haven't boiled down yet should get boiled to this unit
                for(var ak in accumulated){
                    own += this.matrix[ak][k] * accumulated[ak];
                    accumulated[ak] = 0;
                } // plus anything that's already in this unit
                if (isNumber(vals[k])) own += vals[k];
                var i = Math.trunc(own);
                built[k] = i;
                accumulated[k] = own - i; // we'd like to absorb these fractions in another unit
                // plus anything further down the chain that should be rolled up in to this
                for(var down in vals)if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) convert(this.matrix, vals, down, built, k);
                 // otherwise, keep it in the wings to boil it later
            } else if (isNumber(vals[k])) accumulated[k] = vals[k];
        } // anything leftover becomes the decimal for the last unit
        // lastUnit must be defined since units is not empty
        for(var key in accumulated)if (accumulated[key] !== 0) built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
        return clone(this, {
            values: built
        }, true).normalize();
    };
    _proto.negate = function negate() {
        if (!this.isValid) return this;
        var negated = {
        };
        for(var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++){
            var k = _Object$keys2[_i2];
            negated[k] = -this.values[k];
        }
        return clone(this, {
            values: negated
        }, true);
    };
    /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */ _proto.equals = function equals(other) {
        if (!this.isValid || !other.isValid) return false;
        if (!this.loc.equals(other.loc)) return false;
        function eq(v1, v2) {
            // Consider 0 and undefined as equal
            if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
            return v1 === v2;
        }
        for(var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits), _step3; !(_step3 = _iterator3()).done;){
            var u = _step3.value;
            if (!eq(this.values[u], other.values[u])) return false;
        }
        return true;
    };
    _createClass(Duration1, [
        {
            key: "locale",
            get: function get() {
                return this.isValid ? this.loc.locale : null;
            }
        },
        {
            key: "numberingSystem",
            get: function get() {
                return this.isValid ? this.loc.numberingSystem : null;
            }
        },
        {
            key: "years",
            get: function get() {
                return this.isValid ? this.values.years || 0 : NaN;
            }
        },
        {
            key: "quarters",
            get: function get() {
                return this.isValid ? this.values.quarters || 0 : NaN;
            }
        },
        {
            key: "months",
            get: function get() {
                return this.isValid ? this.values.months || 0 : NaN;
            }
        },
        {
            key: "weeks",
            get: function get() {
                return this.isValid ? this.values.weeks || 0 : NaN;
            }
        },
        {
            key: "days",
            get: function get() {
                return this.isValid ? this.values.days || 0 : NaN;
            }
        },
        {
            key: "hours",
            get: function get() {
                return this.isValid ? this.values.hours || 0 : NaN;
            }
        },
        {
            key: "minutes",
            get: function get() {
                return this.isValid ? this.values.minutes || 0 : NaN;
            }
        },
        {
            key: "seconds",
            get: function get() {
                return this.isValid ? this.values.seconds || 0 : NaN;
            }
        },
        {
            key: "milliseconds",
            get: function get() {
                return this.isValid ? this.values.milliseconds || 0 : NaN;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return this.invalid === null;
            }
        },
        {
            key: "invalidReason",
            get: function get() {
                return this.invalid ? this.invalid.reason : null;
            }
        },
        {
            key: "invalidExplanation",
            get: function get() {
                return this.invalid ? this.invalid.explanation : null;
            }
        }
    ]);
    return Duration1;
}();
function friendlyDuration(durationish) {
    if (isNumber(durationish)) return Duration.fromMillis(durationish);
    else if (Duration.isDuration(durationish)) return durationish;
    else if (typeof durationish === "object") return Duration.fromObject(durationish);
    else throw new InvalidArgumentError("Unknown duration argument " + durationish + " of type " + typeof durationish);
}
var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end
function validateStartEnd(start, end) {
    if (!start || !start.isValid) return Interval.invalid("missing or invalid start");
    else if (!end || !end.isValid) return Interval.invalid("missing or invalid end");
    else if (end < start) return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
    else return null;
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
 * * **Accessors** Use {@link start} and {@link end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge}, {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
 * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}.
 * * **Output** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toISODate}, {@link toISOTime}, {@link toFormat}, and {@link toDuration}.
 */ var Interval = /*#__PURE__*/ function() {
    /**
   * @private
   */ function Interval1(config) {
        /**
     * @access private
     */ this.s = config.start;
        /**
     * @access private
     */ this.e = config.end;
        /**
     * @access private
     */ this.invalid = config.invalid || null;
        /**
     * @access private
     */ this.isLuxonInterval = true;
    }
    /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */ Interval1.invalid = function invalid(reason, explanation) {
        if (explanation === void 0) explanation = null;
        if (!reason) throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
        var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
        if (Settings.throwOnInvalid) throw new InvalidIntervalError(invalid);
        else return new Interval1({
            invalid: invalid
        });
    };
    Interval1.fromDateTimes = function fromDateTimes(start, end) {
        var builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
        var validateError = validateStartEnd(builtStart, builtEnd);
        if (validateError == null) return new Interval1({
            start: builtStart,
            end: builtEnd
        });
        else return validateError;
    };
    Interval1.after = function after(start, duration) {
        var dur = friendlyDuration(duration), dt = friendlyDateTime(start);
        return Interval1.fromDateTimes(dt, dt.plus(dur));
    };
    Interval1.before = function before(end, duration) {
        var dur = friendlyDuration(duration), dt = friendlyDateTime(end);
        return Interval1.fromDateTimes(dt.minus(dur), dt);
    };
    Interval1.fromISO = function fromISO(text, opts) {
        var _split = (text || "").split("/", 2), s14 = _split[0], e = _split[1];
        if (s14 && e) {
            var start, startIsValid;
            try {
                start = DateTime.fromISO(s14, opts);
                startIsValid = start.isValid;
            } catch (e1) {
                startIsValid = false;
            }
            var end, endIsValid;
            try {
                end = DateTime.fromISO(e, opts);
                endIsValid = end.isValid;
            } catch (e2) {
                endIsValid = false;
            }
            if (startIsValid && endIsValid) return Interval1.fromDateTimes(start, end);
            if (startIsValid) {
                var dur = Duration.fromISO(e, opts);
                if (dur.isValid) return Interval1.after(start, dur);
            } else if (endIsValid) {
                var _dur = Duration.fromISO(s14, opts);
                if (_dur.isValid) return Interval1.before(end, _dur);
            }
        }
        return Interval1.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    };
    Interval1.isInterval = function isInterval(o) {
        return o && o.isLuxonInterval || false;
    };
    var _proto = Interval1.prototype;
    /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */ _proto.length = function length(unit) {
        if (unit === void 0) unit = "milliseconds";
        return this.isValid ? this.toDuration.apply(this, [
            unit
        ]).get(unit) : NaN;
    };
    _proto.count = function count(unit) {
        if (unit === void 0) unit = "milliseconds";
        if (!this.isValid) return NaN;
        var start = this.start.startOf(unit), end = this.end.startOf(unit);
        return Math.floor(end.diff(start, unit).get(unit)) + 1;
    };
    _proto.hasSame = function hasSame(unit) {
        return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
    };
    _proto.isEmpty = function isEmpty() {
        return this.s.valueOf() === this.e.valueOf();
    };
    _proto.isAfter = function isAfter(dateTime) {
        if (!this.isValid) return false;
        return this.s > dateTime;
    };
    _proto.isBefore = function isBefore(dateTime) {
        if (!this.isValid) return false;
        return this.e <= dateTime;
    };
    _proto.contains = function contains(dateTime) {
        if (!this.isValid) return false;
        return this.s <= dateTime && this.e > dateTime;
    };
    _proto.set = function set(_temp) {
        var _ref = _temp === void 0 ? {
        } : _temp, start = _ref.start, end = _ref.end;
        if (!this.isValid) return this;
        return Interval1.fromDateTimes(start || this.s, end || this.e);
    };
    _proto.splitAt = function splitAt() {
        var _this = this;
        if (!this.isValid) return [];
        for(var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++)dateTimes[_key] = arguments[_key];
        var sorted = dateTimes.map(friendlyDateTime).filter(function(d) {
            return _this.contains(d);
        }).sort(), results = [];
        var s15 = this.s, i = 0;
        while(s15 < this.e){
            var added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
            results.push(Interval1.fromDateTimes(s15, next));
            s15 = next;
            i += 1;
        }
        return results;
    };
    _proto.splitBy = function splitBy(duration) {
        var dur = friendlyDuration(duration);
        if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) return [];
        var s16 = this.s, idx = 1, next;
        var results = [];
        while(s16 < this.e){
            var added = this.start.plus(dur.mapUnits(function(x) {
                return x * idx;
            }));
            next = +added > +this.e ? this.e : added;
            results.push(Interval1.fromDateTimes(s16, next));
            s16 = next;
            idx += 1;
        }
        return results;
    };
    _proto.divideEqually = function divideEqually(numberOfParts) {
        if (!this.isValid) return [];
        return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
    };
    _proto.overlaps = function overlaps(other) {
        return this.e > other.s && this.s < other.e;
    };
    _proto.abutsStart = function abutsStart(other) {
        if (!this.isValid) return false;
        return +this.e === +other.s;
    };
    _proto.abutsEnd = function abutsEnd(other) {
        if (!this.isValid) return false;
        return +other.e === +this.s;
    };
    _proto.engulfs = function engulfs(other) {
        if (!this.isValid) return false;
        return this.s <= other.s && this.e >= other.e;
    };
    _proto.equals = function equals(other) {
        if (!this.isValid || !other.isValid) return false;
        return this.s.equals(other.s) && this.e.equals(other.e);
    };
    _proto.intersection = function intersection(other) {
        if (!this.isValid) return this;
        var s17 = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
        if (s17 >= e) return null;
        else return Interval1.fromDateTimes(s17, e);
    };
    _proto.union = function union(other) {
        if (!this.isValid) return this;
        var s18 = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
        return Interval1.fromDateTimes(s18, e);
    };
    Interval1.merge = function merge(intervals) {
        var _intervals$sort$reduc = intervals.sort(function(a, b) {
            return a.s - b.s;
        }).reduce(function(_ref2, item) {
            var sofar = _ref2[0], current = _ref2[1];
            if (!current) return [
                sofar,
                item
            ];
            else if (current.overlaps(item) || current.abutsStart(item)) return [
                sofar,
                current.union(item)
            ];
            else return [
                sofar.concat([
                    current
                ]),
                item
            ];
        }, [
            [],
            null
        ]), found = _intervals$sort$reduc[0], final = _intervals$sort$reduc[1];
        if (final) found.push(final);
        return found;
    };
    Interval1.xor = function xor(intervals) {
        var _Array$prototype;
        var start = null, currentCount = 0;
        var results = [], ends = intervals.map(function(i) {
            return [
                {
                    time: i.s,
                    type: "s"
                },
                {
                    time: i.e,
                    type: "e"
                }
            ];
        }), flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends), arr = flattened.sort(function(a, b) {
            return a.time - b.time;
        });
        for(var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;){
            var i1 = _step.value;
            currentCount += i1.type === "s" ? 1 : -1;
            if (currentCount === 1) start = i1.time;
            else {
                if (start && +start !== +i1.time) results.push(Interval1.fromDateTimes(start, i1.time));
                start = null;
            }
        }
        return Interval1.merge(results);
    };
    _proto.difference = function difference() {
        var _this2 = this;
        for(var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)intervals[_key2] = arguments[_key2];
        return Interval1.xor([
            this
        ].concat(intervals)).map(function(i) {
            return _this2.intersection(i);
        }).filter(function(i) {
            return i && !i.isEmpty();
        });
    };
    _proto.toString = function toString() {
        if (!this.isValid) return INVALID$1;
        return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
    };
    _proto.toISO = function toISO(opts) {
        if (!this.isValid) return INVALID$1;
        return this.s.toISO(opts) + "/" + this.e.toISO(opts);
    };
    _proto.toISODate = function toISODate() {
        if (!this.isValid) return INVALID$1;
        return this.s.toISODate() + "/" + this.e.toISODate();
    };
    _proto.toISOTime = function toISOTime(opts) {
        if (!this.isValid) return INVALID$1;
        return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
    };
    _proto.toFormat = function toFormat(dateFormat, _temp2) {
        var _ref3 = _temp2 === void 0 ? {
        } : _temp2, _ref3$separator = _ref3.separator, separator = _ref3$separator === void 0 ? " – " : _ref3$separator;
        if (!this.isValid) return INVALID$1;
        return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
    };
    _proto.toDuration = function toDuration(unit, opts) {
        if (!this.isValid) return Duration.invalid(this.invalidReason);
        return this.e.diff(this.s, unit, opts);
    };
    _proto.mapEndpoints = function mapEndpoints(mapFn) {
        return Interval1.fromDateTimes(mapFn(this.s), mapFn(this.e));
    };
    _createClass(Interval1, [
        {
            key: "start",
            get: function get() {
                return this.isValid ? this.s : null;
            }
        },
        {
            key: "end",
            get: function get() {
                return this.isValid ? this.e : null;
            }
        },
        {
            key: "isValid",
            get: function get() {
                return this.invalidReason === null;
            }
        },
        {
            key: "invalidReason",
            get: function get() {
                return this.invalid ? this.invalid.reason : null;
            }
        },
        {
            key: "invalidExplanation",
            get: function get() {
                return this.invalid ? this.invalid.explanation : null;
            }
        }
    ]);
    return Interval1;
}();
/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */ var Info = /*#__PURE__*/ function() {
    function Info1() {
    }
    /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */ Info1.hasDST = function hasDST(zone) {
        if (zone === void 0) zone = Settings.defaultZone;
        var proto = DateTime.now().setZone(zone).set({
            month: 12
        });
        return !zone.universal && proto.offset !== proto.set({
            month: 6
        }).offset;
    };
    Info1.isValidIANAZone = function isValidIANAZone(zone) {
        return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
    };
    Info1.normalizeZone = function normalizeZone$1(input) {
        return normalizeZone(input, Settings.defaultZone);
    };
    Info1.months = function months(length, _temp) {
        if (length === void 0) length = "long";
        var _ref = _temp === void 0 ? {
        } : _temp, _ref$locale = _ref.locale, locale = _ref$locale === void 0 ? null : _ref$locale, _ref$numberingSystem = _ref.numberingSystem, numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem, _ref$locObj = _ref.locObj, locObj = _ref$locObj === void 0 ? null : _ref$locObj, _ref$outputCalendar = _ref.outputCalendar, outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;
        return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
    };
    Info1.monthsFormat = function monthsFormat(length, _temp2) {
        if (length === void 0) length = "long";
        var _ref2 = _temp2 === void 0 ? {
        } : _temp2, _ref2$locale = _ref2.locale, locale = _ref2$locale === void 0 ? null : _ref2$locale, _ref2$numberingSystem = _ref2.numberingSystem, numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem, _ref2$locObj = _ref2.locObj, locObj = _ref2$locObj === void 0 ? null : _ref2$locObj, _ref2$outputCalendar = _ref2.outputCalendar, outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;
        return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
    };
    Info1.weekdays = function weekdays(length, _temp3) {
        if (length === void 0) length = "long";
        var _ref3 = _temp3 === void 0 ? {
        } : _temp3, _ref3$locale = _ref3.locale, locale = _ref3$locale === void 0 ? null : _ref3$locale, _ref3$numberingSystem = _ref3.numberingSystem, numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem, _ref3$locObj = _ref3.locObj, locObj = _ref3$locObj === void 0 ? null : _ref3$locObj;
        return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
    };
    Info1.weekdaysFormat = function weekdaysFormat(length, _temp4) {
        if (length === void 0) length = "long";
        var _ref4 = _temp4 === void 0 ? {
        } : _temp4, _ref4$locale = _ref4.locale, locale = _ref4$locale === void 0 ? null : _ref4$locale, _ref4$numberingSystem = _ref4.numberingSystem, numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem, _ref4$locObj = _ref4.locObj, locObj = _ref4$locObj === void 0 ? null : _ref4$locObj;
        return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
    };
    Info1.meridiems = function meridiems(_temp5) {
        var _ref5 = _temp5 === void 0 ? {
        } : _temp5, _ref5$locale = _ref5.locale, locale = _ref5$locale === void 0 ? null : _ref5$locale;
        return Locale.create(locale).meridiems();
    };
    Info1.eras = function eras(length, _temp6) {
        if (length === void 0) length = "short";
        var _ref6 = _temp6 === void 0 ? {
        } : _temp6, _ref6$locale = _ref6.locale, locale = _ref6$locale === void 0 ? null : _ref6$locale;
        return Locale.create(locale, null, "gregory").eras(length);
    };
    Info1.features = function features() {
        var intl = false, intlTokens = false, zones = false, relative = false;
        if (hasIntl()) {
            intl = true;
            intlTokens = hasFormatToParts();
            relative = hasRelative();
            try {
                zones = new Intl.DateTimeFormat("en", {
                    timeZone: "America/New_York"
                }).resolvedOptions().timeZone === "America/New_York";
            } catch (e) {
                zones = false;
            }
        }
        return {
            intl: intl,
            intlTokens: intlTokens,
            zones: zones,
            relative: relative
        };
    };
    return Info1;
}();
function dayDiff(earlier, later) {
    var utcDayStart = function utcDayStart(dt) {
        return dt.toUTC(0, {
            keepLocalTime: true
        }).startOf("day").valueOf();
    }, ms = utcDayStart(later) - utcDayStart(earlier);
    return Math.floor(Duration.fromMillis(ms).as("days"));
}
function highOrderDiffs(cursor, later, units) {
    var differs = [
        [
            "years",
            function(a, b) {
                return b.year - a.year;
            }
        ],
        [
            "quarters",
            function(a, b) {
                return b.quarter - a.quarter;
            }
        ],
        [
            "months",
            function(a, b) {
                return b.month - a.month + (b.year - a.year) * 12;
            }
        ],
        [
            "weeks",
            function(a, b) {
                var days = dayDiff(a, b);
                return (days - days % 7) / 7;
            }
        ],
        [
            "days",
            dayDiff
        ]
    ];
    var results = {
    };
    var lowestOrder, highWater;
    for(var _i = 0, _differs = differs; _i < _differs.length; _i++){
        var _differs$_i = _differs[_i], unit = _differs$_i[0], differ = _differs$_i[1];
        if (units.indexOf(unit) >= 0) {
            var _cursor$plus;
            lowestOrder = unit;
            var delta = differ(cursor, later);
            highWater = cursor.plus((_cursor$plus = {
            }, _cursor$plus[unit] = delta, _cursor$plus));
            if (highWater > later) {
                var _cursor$plus2;
                cursor = cursor.plus((_cursor$plus2 = {
                }, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
                delta -= 1;
            } else cursor = highWater;
            results[unit] = delta;
        }
    }
    return [
        cursor,
        results,
        highWater,
        lowestOrder
    ];
}
function _diff(earlier, later, units, opts) {
    var _highOrderDiffs = highOrderDiffs(earlier, later, units), cursor = _highOrderDiffs[0], results = _highOrderDiffs[1], highWater = _highOrderDiffs[2], lowestOrder = _highOrderDiffs[3];
    var remainingMillis = later - cursor;
    var lowerOrderUnits = units.filter(function(u) {
        return [
            "hours",
            "minutes",
            "seconds",
            "milliseconds"
        ].indexOf(u) >= 0;
    });
    if (lowerOrderUnits.length === 0) {
        if (highWater < later) {
            var _cursor$plus3;
            highWater = cursor.plus((_cursor$plus3 = {
            }, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
        }
        if (highWater !== cursor) results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
    var duration = Duration.fromObject(Object.assign(results, opts));
    if (lowerOrderUnits.length > 0) {
        var _Duration$fromMillis;
        return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
    } else return duration;
}
var numberingSystems = {
    arab: "[\u0660-\u0669]",
    arabext: "[\u06F0-\u06F9]",
    bali: "[\u1B50-\u1B59]",
    beng: "[\u09E6-\u09EF]",
    deva: "[\u0966-\u096F]",
    fullwide: "[\uFF10-\uFF19]",
    gujr: "[\u0AE6-\u0AEF]",
    hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
    khmr: "[\u17E0-\u17E9]",
    knda: "[\u0CE6-\u0CEF]",
    laoo: "[\u0ED0-\u0ED9]",
    limb: "[\u1946-\u194F]",
    mlym: "[\u0D66-\u0D6F]",
    mong: "[\u1810-\u1819]",
    mymr: "[\u1040-\u1049]",
    orya: "[\u0B66-\u0B6F]",
    tamldec: "[\u0BE6-\u0BEF]",
    telu: "[\u0C66-\u0C6F]",
    thai: "[\u0E50-\u0E59]",
    tibt: "[\u0F20-\u0F29]",
    latn: "\\d"
};
var numberingSystemsUTF16 = {
    arab: [
        1632,
        1641
    ],
    arabext: [
        1776,
        1785
    ],
    bali: [
        6992,
        7001
    ],
    beng: [
        2534,
        2543
    ],
    deva: [
        2406,
        2415
    ],
    fullwide: [
        65296,
        65303
    ],
    gujr: [
        2790,
        2799
    ],
    khmr: [
        6112,
        6121
    ],
    knda: [
        3302,
        3311
    ],
    laoo: [
        3792,
        3801
    ],
    limb: [
        6470,
        6479
    ],
    mlym: [
        3430,
        3439
    ],
    mong: [
        6160,
        6169
    ],
    mymr: [
        4160,
        4169
    ],
    orya: [
        2918,
        2927
    ],
    tamldec: [
        3046,
        3055
    ],
    telu: [
        3174,
        3183
    ],
    thai: [
        3664,
        3673
    ],
    tibt: [
        3872,
        3881
    ]
}; // eslint-disable-next-line
var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
    var value = parseInt(str, 10);
    if (isNaN(value)) {
        value = "";
        for(var i = 0; i < str.length; i++){
            var code = str.charCodeAt(i);
            if (str[i].search(numberingSystems.hanidec) !== -1) value += hanidecChars.indexOf(str[i]);
            else for(var key in numberingSystemsUTF16){
                var _numberingSystemsUTF = numberingSystemsUTF16[key], min = _numberingSystemsUTF[0], max = _numberingSystemsUTF[1];
                if (code >= min && code <= max) value += code - min;
            }
        }
        return parseInt(value, 10);
    } else return value;
}
function digitRegex(_ref, append) {
    var numberingSystem = _ref.numberingSystem;
    if (append === void 0) append = "";
    return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
}
var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
function intUnit(regex, post) {
    if (post === void 0) post = function post(i) {
        return i;
    };
    return {
        regex: regex,
        deser: function deser(_ref) {
            var s19 = _ref[0];
            return post(parseDigits(s19));
        }
    };
}
var NBSP = String.fromCharCode(160);
var spaceOrNBSP = "( |" + NBSP + ")";
var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
function fixListRegex(s20) {
    // make dots optional and also make them literal
    // make space and non breakable space characters interchangeable
    return s20.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}
function stripInsensitivities(s21) {
    return s21.replace(/\./g, "") // ignore dots that were made optional
    .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
    .toLowerCase();
}
function oneOf(strings, startIndex) {
    if (strings === null) return null;
    else return {
        regex: RegExp(strings.map(fixListRegex).join("|")),
        deser: function deser(_ref2) {
            var s22 = _ref2[0];
            return strings.findIndex(function(i) {
                return stripInsensitivities(s22) === stripInsensitivities(i);
            }) + startIndex;
        }
    };
}
function offset(regex, groups) {
    return {
        regex: regex,
        deser: function deser(_ref3) {
            var h = _ref3[1], m = _ref3[2];
            return signedOffset(h, m);
        },
        groups: groups
    };
}
function simple(regex) {
    return {
        regex: regex,
        deser: function deser(_ref4) {
            var s23 = _ref4[0];
            return s23;
        }
    };
}
function escapeToken(value) {
    // eslint-disable-next-line no-useless-escape
    return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function unitForToken(token, loc) {
    var one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = function literal(t) {
        return {
            regex: RegExp(escapeToken(t.val)),
            deser: function deser(_ref5) {
                var s24 = _ref5[0];
                return s24;
            },
            literal: true
        };
    }, unitate = function unitate(t) {
        if (token.literal) return literal(t);
        switch(t.val){
            // era
            case "G":
                return oneOf(loc.eras("short", false), 0);
            case "GG":
                return oneOf(loc.eras("long", false), 0);
            // years
            case "y":
                return intUnit(oneToSix);
            case "yy":
                return intUnit(twoToFour, untruncateYear);
            case "yyyy":
                return intUnit(four);
            case "yyyyy":
                return intUnit(fourToSix);
            case "yyyyyy":
                return intUnit(six);
            // months
            case "M":
                return intUnit(oneOrTwo);
            case "MM":
                return intUnit(two);
            case "MMM":
                return oneOf(loc.months("short", true, false), 1);
            case "MMMM":
                return oneOf(loc.months("long", true, false), 1);
            case "L":
                return intUnit(oneOrTwo);
            case "LL":
                return intUnit(two);
            case "LLL":
                return oneOf(loc.months("short", false, false), 1);
            case "LLLL":
                return oneOf(loc.months("long", false, false), 1);
            // dates
            case "d":
                return intUnit(oneOrTwo);
            case "dd":
                return intUnit(two);
            // ordinals
            case "o":
                return intUnit(oneToThree);
            case "ooo":
                return intUnit(three);
            // time
            case "HH":
                return intUnit(two);
            case "H":
                return intUnit(oneOrTwo);
            case "hh":
                return intUnit(two);
            case "h":
                return intUnit(oneOrTwo);
            case "mm":
                return intUnit(two);
            case "m":
                return intUnit(oneOrTwo);
            case "q":
                return intUnit(oneOrTwo);
            case "qq":
                return intUnit(two);
            case "s":
                return intUnit(oneOrTwo);
            case "ss":
                return intUnit(two);
            case "S":
                return intUnit(oneToThree);
            case "SSS":
                return intUnit(three);
            case "u":
                return simple(oneToNine);
            // meridiem
            case "a":
                return oneOf(loc.meridiems(), 0);
            // weekYear (k)
            case "kkkk":
                return intUnit(four);
            case "kk":
                return intUnit(twoToFour, untruncateYear);
            // weekNumber (W)
            case "W":
                return intUnit(oneOrTwo);
            case "WW":
                return intUnit(two);
            // weekdays
            case "E":
            case "c":
                return intUnit(one);
            case "EEE":
                return oneOf(loc.weekdays("short", false, false), 1);
            case "EEEE":
                return oneOf(loc.weekdays("long", false, false), 1);
            case "ccc":
                return oneOf(loc.weekdays("short", true, false), 1);
            case "cccc":
                return oneOf(loc.weekdays("long", true, false), 1);
            // offset/zone
            case "Z":
            case "ZZ":
                return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);
            case "ZZZ":
                return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
            // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
            // because we don't have any way to figure out what they are
            case "z":
                return simple(/[a-z_+-/]{1,256}?/i);
            default:
                return literal(t);
        }
    };
    var unit = unitate(token) || {
        invalidReason: MISSING_FTP
    };
    unit.token = token;
    return unit;
}
var partTypeStyleToTokenVal = {
    year: {
        "2-digit": "yy",
        numeric: "yyyyy"
    },
    month: {
        numeric: "M",
        "2-digit": "MM",
        short: "MMM",
        long: "MMMM"
    },
    day: {
        numeric: "d",
        "2-digit": "dd"
    },
    weekday: {
        short: "EEE",
        long: "EEEE"
    },
    dayperiod: "a",
    dayPeriod: "a",
    hour: {
        numeric: "h",
        "2-digit": "hh"
    },
    minute: {
        numeric: "m",
        "2-digit": "mm"
    },
    second: {
        numeric: "s",
        "2-digit": "ss"
    }
};
function tokenForPart(part, locale, formatOpts) {
    var type = part.type, value = part.value;
    if (type === "literal") return {
        literal: true,
        val: value
    };
    var style = formatOpts[type];
    var val = partTypeStyleToTokenVal[type];
    if (typeof val === "object") val = val[style];
    if (val) return {
        literal: false,
        val: val
    };
    return undefined;
}
function buildRegex(units) {
    var re = units.map(function(u) {
        return u.regex;
    }).reduce(function(f, r) {
        return f + "(" + r.source + ")";
    }, "");
    return [
        "^" + re + "$",
        units
    ];
}
function match(input, regex, handlers) {
    var matches = input.match(regex);
    if (matches) {
        var all = {
        };
        var matchIndex = 1;
        for(var i in handlers)if (hasOwnProperty(handlers, i)) {
            var h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
            if (!h.literal && h.token) all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
            matchIndex += groups;
        }
        return [
            matches,
            all
        ];
    } else return [
        matches,
        {
        }
    ];
}
function dateTimeFromMatches(matches) {
    var toField = function toField(token) {
        switch(token){
            case "S":
                return "millisecond";
            case "s":
                return "second";
            case "m":
                return "minute";
            case "h":
            case "H":
                return "hour";
            case "d":
                return "day";
            case "o":
                return "ordinal";
            case "L":
            case "M":
                return "month";
            case "y":
                return "year";
            case "E":
            case "c":
                return "weekday";
            case "W":
                return "weekNumber";
            case "k":
                return "weekYear";
            case "q":
                return "quarter";
            default:
                return null;
        }
    };
    var zone;
    if (!isUndefined(matches.Z)) zone = new FixedOffsetZone(matches.Z);
    else if (!isUndefined(matches.z)) zone = IANAZone.create(matches.z);
    else zone = null;
    if (!isUndefined(matches.q)) matches.M = (matches.q - 1) * 3 + 1;
    if (!isUndefined(matches.h)) {
        if (matches.h < 12 && matches.a === 1) matches.h += 12;
        else if (matches.h === 12 && matches.a === 0) matches.h = 0;
    }
    if (matches.G === 0 && matches.y) matches.y = -matches.y;
    if (!isUndefined(matches.u)) matches.S = parseMillis(matches.u);
    var vals = Object.keys(matches).reduce(function(r, k) {
        var f = toField(k);
        if (f) r[f] = matches[k];
        return r;
    }, {
    });
    return [
        vals,
        zone
    ];
}
var dummyDateTimeCache = null;
function getDummyDateTime() {
    if (!dummyDateTimeCache) dummyDateTimeCache = DateTime.fromMillis(1555555555555);
    return dummyDateTimeCache;
}
function maybeExpandMacroToken(token, locale) {
    if (token.literal) return token;
    var formatOpts = Formatter.macroTokenToFormatOpts(token.val);
    if (!formatOpts) return token;
    var formatter = Formatter.create(locale, formatOpts);
    var parts = formatter.formatDateTimeParts(getDummyDateTime());
    var tokens = parts.map(function(p) {
        return tokenForPart(p, locale, formatOpts);
    });
    if (tokens.includes(undefined)) return token;
    return tokens;
}
function expandMacroTokens(tokens, locale) {
    var _Array$prototype;
    return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function(t) {
        return maybeExpandMacroToken(t, locale);
    }));
}
/**
 * @private
 */ function explainFromTokens(locale, input, format) {
    var tokens = expandMacroTokens(Formatter.parseFormat(format), locale), units = tokens.map(function(t) {
        return unitForToken(t, locale);
    }), disqualifyingUnit = units.find(function(t) {
        return t.invalidReason;
    });
    if (disqualifyingUnit) return {
        input: input,
        tokens: tokens,
        invalidReason: disqualifyingUnit.invalidReason
    };
    else {
        var _buildRegex = buildRegex(units), regexString = _buildRegex[0], handlers = _buildRegex[1], regex = RegExp(regexString, "i"), _match = match(input, regex, handlers), rawMatches = _match[0], matches = _match[1], _ref6 = matches ? dateTimeFromMatches(matches) : [
            null,
            null
        ], result = _ref6[0], zone = _ref6[1];
        if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
        return {
            input: input,
            tokens: tokens,
            regex: regex,
            rawMatches: rawMatches,
            matches: matches,
            result: result,
            zone: zone
        };
    }
}
function parseFromTokens(locale, input, format) {
    var _explainFromTokens = explainFromTokens(locale, input, format), result = _explainFromTokens.result, zone = _explainFromTokens.zone, invalidReason = _explainFromTokens.invalidReason;
    return [
        result,
        zone,
        invalidReason
    ];
}
var nonLeapLadder = [
    0,
    31,
    59,
    90,
    120,
    151,
    181,
    212,
    243,
    273,
    304,
    334
], leapLadder = [
    0,
    31,
    60,
    91,
    121,
    152,
    182,
    213,
    244,
    274,
    305,
    335
];
function unitOutOfRange(unit, value) {
    return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
}
function dayOfWeek(year, month, day) {
    var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
    return js === 0 ? 7 : js;
}
function computeOrdinal(year, month, day) {
    return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}
function uncomputeOrdinal(year, ordinal) {
    var table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex(function(i) {
        return i < ordinal;
    }), day = ordinal - table[month0];
    return {
        month: month0 + 1,
        day: day
    };
}
/**
 * @private
 */ function gregorianToWeek(gregObj) {
    var year = gregObj.year, month = gregObj.month, day = gregObj.day, ordinal = computeOrdinal(year, month, day), weekday = dayOfWeek(year, month, day);
    var weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
    if (weekNumber < 1) {
        weekYear = year - 1;
        weekNumber = weeksInWeekYear(weekYear);
    } else if (weekNumber > weeksInWeekYear(year)) {
        weekYear = year + 1;
        weekNumber = 1;
    } else weekYear = year;
    return Object.assign({
        weekYear: weekYear,
        weekNumber: weekNumber,
        weekday: weekday
    }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
    var weekYear = weekData.weekYear, weekNumber = weekData.weekNumber, weekday = weekData.weekday, weekdayOfJan4 = dayOfWeek(weekYear, 1, 4), yearInDays = daysInYear(weekYear);
    var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
    if (ordinal < 1) {
        year = weekYear - 1;
        ordinal += daysInYear(year);
    } else if (ordinal > yearInDays) {
        year = weekYear + 1;
        ordinal -= daysInYear(weekYear);
    } else year = weekYear;
    var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal.month, day = _uncomputeOrdinal.day;
    return Object.assign({
        year: year,
        month: month,
        day: day
    }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
    var year = gregData.year, month = gregData.month, day = gregData.day, ordinal = computeOrdinal(year, month, day);
    return Object.assign({
        year: year,
        ordinal: ordinal
    }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
    var year = ordinalData.year, ordinal = ordinalData.ordinal, _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal2.month, day = _uncomputeOrdinal2.day;
    return Object.assign({
        year: year,
        month: month,
        day: day
    }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
    var validYear = isInteger(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)), validWeekday = integerBetween(obj.weekday, 1, 7);
    if (!validYear) return unitOutOfRange("weekYear", obj.weekYear);
    else if (!validWeek) return unitOutOfRange("week", obj.week);
    else if (!validWeekday) return unitOutOfRange("weekday", obj.weekday);
    else return false;
}
function hasInvalidOrdinalData(obj) {
    var validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
    if (!validYear) return unitOutOfRange("year", obj.year);
    else if (!validOrdinal) return unitOutOfRange("ordinal", obj.ordinal);
    else return false;
}
function hasInvalidGregorianData(obj) {
    var validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
    if (!validYear) return unitOutOfRange("year", obj.year);
    else if (!validMonth) return unitOutOfRange("month", obj.month);
    else if (!validDay) return unitOutOfRange("day", obj.day);
    else return false;
}
function hasInvalidTimeData(obj) {
    var hour = obj.hour, minute = obj.minute, second = obj.second, millisecond = obj.millisecond;
    var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
    if (!validHour) return unitOutOfRange("hour", hour);
    else if (!validMinute) return unitOutOfRange("minute", minute);
    else if (!validSecond) return unitOutOfRange("second", second);
    else if (!validMillisecond) return unitOutOfRange("millisecond", millisecond);
    else return false;
}
var INVALID$2 = "Invalid DateTime";
var MAX_DATE = 8640000000000000;
function unsupportedZone(zone) {
    return new Invalid("unsupported zone", "the zone \"" + zone.name + "\" is not supported");
} // we cache week data on the DT object and this intermediates the cache
function possiblyCachedWeekData(dt) {
    if (dt.weekData === null) dt.weekData = gregorianToWeek(dt.c);
    return dt.weekData;
} // clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function clone$1(inst, alts) {
    var current = {
        ts: inst.ts,
        zone: inst.zone,
        c: inst.c,
        o: inst.o,
        loc: inst.loc,
        invalid: inst.invalid
    };
    return new DateTime(Object.assign({
    }, current, alts, {
        old: current
    }));
} // find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function fixOffset(localTS, o, tz) {
    // Our UTC time is just a guess because our offset is just a guess
    var utcGuess = localTS - o * 60000; // Test whether the zone matches the offset for this ts
    var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done
    if (o === o2) return [
        utcGuess,
        o
    ];
     // If not, change the ts by the difference in the offset
    utcGuess -= (o2 - o) * 60000; // If that gives us the local time we want, we're done
    var o3 = tz.offset(utcGuess);
    if (o2 === o3) return [
        utcGuess,
        o2
    ];
     // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
    return [
        localTS - Math.min(o2, o3) * 60000,
        Math.max(o2, o3)
    ];
} // convert an epoch timestamp into a calendar object with the given offset
function tsToObj(ts, offset6) {
    ts += offset6 * 60000;
    var d = new Date(ts);
    return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate(),
        hour: d.getUTCHours(),
        minute: d.getUTCMinutes(),
        second: d.getUTCSeconds(),
        millisecond: d.getUTCMilliseconds()
    };
} // convert a calendar object to a epoch timestamp
function objToTS(obj, offset7, zone) {
    return fixOffset(objToLocalTS(obj), offset7, zone);
} // create a new DT instance by adding a duration, adjusting for DSTs
function adjustTime(inst, dur) {
    var oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = Object.assign({
    }, inst.c, {
        year: year,
        month: month,
        day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
    }), millisToAdd = Duration.fromObject({
        years: dur.years - Math.trunc(dur.years),
        quarters: dur.quarters - Math.trunc(dur.quarters),
        months: dur.months - Math.trunc(dur.months),
        weeks: dur.weeks - Math.trunc(dur.weeks),
        days: dur.days - Math.trunc(dur.days),
        hours: dur.hours,
        minutes: dur.minutes,
        seconds: dur.seconds,
        milliseconds: dur.milliseconds
    }).as("milliseconds"), localTS = objToLocalTS(c);
    var _fixOffset = fixOffset(localTS, oPre, inst.zone), ts = _fixOffset[0], o = _fixOffset[1];
    if (millisToAdd !== 0) {
        ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same
        o = inst.zone.offset(ts);
    }
    return {
        ts: ts,
        o: o
    };
} // helper useful in turning the results of parsing into real dates
// by handling the zone options
function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
    var setZone = opts.setZone, zone = opts.zone;
    if (parsed && Object.keys(parsed).length !== 0) {
        var interpretationZone = parsedZone || zone, inst = DateTime.fromObject(Object.assign(parsed, opts, {
            zone: interpretationZone,
            // setZone is a valid option in the calling methods, but not in fromObject
            setZone: undefined
        }));
        return setZone ? inst : inst.setZone(zone);
    } else return DateTime.invalid(new Invalid("unparsable", "the input \"" + text + "\" can't be parsed as " + format));
} // if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function toTechFormat(dt, format, allowZ) {
    if (allowZ === void 0) allowZ = true;
    return dt.isValid ? Formatter.create(Locale.create("en-US"), {
        allowZ: allowZ,
        forceSimple: true
    }).formatDateTimeFromString(dt, format) : null;
} // technical time formats (e.g. the time part of ISO 8601), take some options
// and this commonizes their handling
function toTechTimeFormat(dt, _ref) {
    var _ref$suppressSeconds = _ref.suppressSeconds, suppressSeconds = _ref$suppressSeconds === void 0 ? false : _ref$suppressSeconds, _ref$suppressMillisec = _ref.suppressMilliseconds, suppressMilliseconds = _ref$suppressMillisec === void 0 ? false : _ref$suppressMillisec, includeOffset = _ref.includeOffset, _ref$includePrefix = _ref.includePrefix, includePrefix = _ref$includePrefix === void 0 ? false : _ref$includePrefix, _ref$includeZone = _ref.includeZone, includeZone = _ref$includeZone === void 0 ? false : _ref$includeZone, _ref$spaceZone = _ref.spaceZone, spaceZone = _ref$spaceZone === void 0 ? false : _ref$spaceZone, _ref$format = _ref.format, format = _ref$format === void 0 ? "extended" : _ref$format;
    var fmt = format === "basic" ? "HHmm" : "HH:mm";
    if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
        fmt += format === "basic" ? "ss" : ":ss";
        if (!suppressMilliseconds || dt.millisecond !== 0) fmt += ".SSS";
    }
    if ((includeZone || includeOffset) && spaceZone) fmt += " ";
    if (includeZone) fmt += "z";
    else if (includeOffset) fmt += format === "basic" ? "ZZZ" : "ZZ";
    var str = toTechFormat(dt, fmt);
    if (includePrefix) str = "T" + str;
    return str;
} // defaults for unspecified units in the supported calendars
var defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}, defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}, defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
}; // Units in the supported calendars, sorted by bigness
var orderedUnits$1 = [
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
], orderedWeekUnits = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond"
], orderedOrdinalUnits = [
    "year",
    "ordinal",
    "hour",
    "minute",
    "second",
    "millisecond"
]; // standardize case and plurality in units
function normalizeUnit(unit) {
    var normalized = {
        year: "year",
        years: "year",
        month: "month",
        months: "month",
        day: "day",
        days: "day",
        hour: "hour",
        hours: "hour",
        minute: "minute",
        minutes: "minute",
        quarter: "quarter",
        quarters: "quarter",
        second: "second",
        seconds: "second",
        millisecond: "millisecond",
        milliseconds: "millisecond",
        weekday: "weekday",
        weekdays: "weekday",
        weeknumber: "weekNumber",
        weeksnumber: "weekNumber",
        weeknumbers: "weekNumber",
        weekyear: "weekYear",
        weekyears: "weekYear",
        ordinal: "ordinal"
    }[unit.toLowerCase()];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
} // this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function quickDT(obj, zone) {
    // assume we have the higher-order units
    for(var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step; !(_step = _iterator()).done;){
        var u = _step.value;
        if (isUndefined(obj[u])) obj[u] = defaultUnitValues[u];
    }
    var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
    if (invalid) return DateTime.invalid(invalid);
    var tsNow = Settings.now(), offsetProvis = zone.offset(tsNow), _objToTS = objToTS(obj, offsetProvis, zone), ts = _objToTS[0], o = _objToTS[1];
    return new DateTime({
        ts: ts,
        zone: zone,
        o: o
    });
}
function diffRelative(start, end, opts) {
    var round = isUndefined(opts.round) ? true : opts.round, format = function format(c, unit) {
        c = roundTo(c, round || opts.calendary ? 0 : 2, true);
        var formatter = end.loc.clone(opts).relFormatter(opts);
        return formatter.format(c, unit);
    }, differ = function differ(unit) {
        if (opts.calendary) {
            if (!end.hasSame(start, unit)) return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
            else return 0;
        } else return end.diff(start, unit).get(unit);
    };
    if (opts.unit) return format(differ(opts.unit), opts.unit);
    for(var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2; !(_step2 = _iterator2()).done;){
        var unit1 = _step2.value;
        var count = differ(unit1);
        if (Math.abs(count) >= 1) return format(count, unit1);
    }
    return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}. To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}. To create one from a custom string format, use {@link fromFormat}. To create one from a native JS date, use {@link fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month},
 * {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
 * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale}, {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link toRelative}, {@link toRelativeCalendar}, {@link toJSON}, {@link toISO}, {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link toMillis} and {@link toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */ var DateTime = /*#__PURE__*/ function() {
    /**
   * @access private
   */ function DateTime1(config) {
        var zone = config.zone || Settings.defaultZone;
        var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
        /**
     * @access private
     */ this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
        var c = null, o = null;
        if (!invalid) {
            var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
            if (unchanged) {
                var _ref2 = [
                    config.old.c,
                    config.old.o
                ];
                c = _ref2[0];
                o = _ref2[1];
            } else {
                var ot = zone.offset(this.ts);
                c = tsToObj(this.ts, ot);
                invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
                c = invalid ? null : c;
                o = invalid ? null : ot;
            }
        }
        /**
     * @access private
     */ this._zone = zone;
        /**
     * @access private
     */ this.loc = config.loc || Locale.create();
        /**
     * @access private
     */ this.invalid = invalid;
        /**
     * @access private
     */ this.weekData = null;
        /**
     * @access private
     */ this.c = c;
        /**
     * @access private
     */ this.o = o;
        /**
     * @access private
     */ this.isLuxonDateTime = true;
    } // CONSTRUCT
    /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */ DateTime1.now = function now() {
        return new DateTime1({
        });
    };
    DateTime1.local = function local(year, month, day, hour, minute, second, millisecond) {
        if (isUndefined(year)) return DateTime1.now();
        else return quickDT({
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute,
            second: second,
            millisecond: millisecond
        }, Settings.defaultZone);
    };
    DateTime1.utc = function utc(year, month, day, hour, minute, second, millisecond) {
        if (isUndefined(year)) return new DateTime1({
            ts: Settings.now(),
            zone: FixedOffsetZone.utcInstance
        });
        else return quickDT({
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute,
            second: second,
            millisecond: millisecond
        }, FixedOffsetZone.utcInstance);
    };
    DateTime1.fromJSDate = function fromJSDate(date, options) {
        if (options === void 0) options = {
        };
        var ts = isDate(date) ? date.valueOf() : NaN;
        if (Number.isNaN(ts)) return DateTime1.invalid("invalid input");
        var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
        if (!zoneToUse.isValid) return DateTime1.invalid(unsupportedZone(zoneToUse));
        return new DateTime1({
            ts: ts,
            zone: zoneToUse,
            loc: Locale.fromObject(options)
        });
    };
    DateTime1.fromMillis = function fromMillis(milliseconds, options) {
        if (options === void 0) options = {
        };
        if (!isNumber(milliseconds)) throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
        else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
        return DateTime1.invalid("Timestamp out of range");
        else return new DateTime1({
            ts: milliseconds,
            zone: normalizeZone(options.zone, Settings.defaultZone),
            loc: Locale.fromObject(options)
        });
    };
    DateTime1.fromSeconds = function fromSeconds(seconds, options) {
        if (options === void 0) options = {
        };
        if (!isNumber(seconds)) throw new InvalidArgumentError("fromSeconds requires a numerical input");
        else return new DateTime1({
            ts: seconds * 1000,
            zone: normalizeZone(options.zone, Settings.defaultZone),
            loc: Locale.fromObject(options)
        });
    };
    DateTime1.fromObject = function fromObject(obj) {
        var zoneToUse = normalizeZone(obj.zone, Settings.defaultZone);
        if (!zoneToUse.isValid) return DateTime1.invalid(unsupportedZone(zoneToUse));
        var tsNow = Settings.now(), offsetProvis = zoneToUse.offset(tsNow), normalized = normalizeObject(obj, normalizeUnit, [
            "zone",
            "locale",
            "outputCalendar",
            "numberingSystem"
        ]), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = Locale.fromObject(obj); // cases:
        // just a weekday -> this week's instance of that weekday, no worries
        // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
        // (gregorian month or day) + ordinal -> error
        // otherwise just use weeks or ordinals or gregorian, depending on what's specified
        if ((containsGregor || containsOrdinal) && definiteWeekDef) throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        if (containsGregorMD && containsOrdinal) throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
        var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor; // configure ourselves to deal with gregorian dates or week stuff
        var units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
        if (useWeekData) {
            units = orderedWeekUnits;
            defaultValues = defaultWeekUnitValues;
            objNow = gregorianToWeek(objNow);
        } else if (containsOrdinal) {
            units = orderedOrdinalUnits;
            defaultValues = defaultOrdinalUnitValues;
            objNow = gregorianToOrdinal(objNow);
        } else {
            units = orderedUnits$1;
            defaultValues = defaultUnitValues;
        } // set default values for missing stuff
        var foundFirst = false;
        for(var _iterator3 = _createForOfIteratorHelperLoose(units), _step3; !(_step3 = _iterator3()).done;){
            var u = _step3.value;
            var v = normalized[u];
            if (!isUndefined(v)) foundFirst = true;
            else if (foundFirst) normalized[u] = defaultValues[u];
            else normalized[u] = objNow[u];
        } // make sure the values we have are in range
        var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
        if (invalid) return DateTime1.invalid(invalid);
         // compute the actual time
        var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse), tsFinal = _objToTS2[0], offsetFinal = _objToTS2[1], inst = new DateTime1({
            ts: tsFinal,
            zone: zoneToUse,
            o: offsetFinal,
            loc: loc
        }); // gregorian data + weekday serves only to validate
        if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) return DateTime1.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
        return inst;
    };
    DateTime1.fromISO = function fromISO(text, opts) {
        if (opts === void 0) opts = {
        };
        var _parseISODate = parseISODate(text), vals = _parseISODate[0], parsedZone = _parseISODate[1];
        return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
    };
    DateTime1.fromRFC2822 = function fromRFC2822(text, opts) {
        if (opts === void 0) opts = {
        };
        var _parseRFC2822Date = parseRFC2822Date(text), vals = _parseRFC2822Date[0], parsedZone = _parseRFC2822Date[1];
        return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
    };
    DateTime1.fromHTTP = function fromHTTP(text, opts) {
        if (opts === void 0) opts = {
        };
        var _parseHTTPDate = parseHTTPDate(text), vals = _parseHTTPDate[0], parsedZone = _parseHTTPDate[1];
        return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
    };
    DateTime1.fromFormat = function fromFormat(text, fmt, opts) {
        if (opts === void 0) opts = {
        };
        if (isUndefined(text) || isUndefined(fmt)) throw new InvalidArgumentError("fromFormat requires an input string and a format");
        var _opts = opts, _opts$locale = _opts.locale, locale = _opts$locale === void 0 ? null : _opts$locale, _opts$numberingSystem = _opts.numberingSystem, numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem, localeToUse = Locale.fromOpts({
            locale: locale,
            numberingSystem: numberingSystem,
            defaultToEN: true
        }), _parseFromTokens = parseFromTokens(localeToUse, text, fmt), vals = _parseFromTokens[0], parsedZone = _parseFromTokens[1], invalid = _parseFromTokens[2];
        if (invalid) return DateTime1.invalid(invalid);
        else return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text);
    };
    DateTime1.fromString = function fromString(text, fmt, opts) {
        if (opts === void 0) opts = {
        };
        return DateTime1.fromFormat(text, fmt, opts);
    };
    DateTime1.fromSQL = function fromSQL(text, opts) {
        if (opts === void 0) opts = {
        };
        var _parseSQL = parseSQL(text), vals = _parseSQL[0], parsedZone = _parseSQL[1];
        return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
    };
    DateTime1.invalid = function invalid(reason, explanation) {
        if (explanation === void 0) explanation = null;
        if (!reason) throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
        var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
        if (Settings.throwOnInvalid) throw new InvalidDateTimeError(invalid);
        else return new DateTime1({
            invalid: invalid
        });
    };
    DateTime1.isDateTime = function isDateTime(o) {
        return o && o.isLuxonDateTime || false;
    } // INFO
    ;
    var _proto = DateTime1.prototype;
    _proto.get = function get(unit) {
        return this[unit];
    };
    /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */ _proto.resolvedLocaleOpts = function resolvedLocaleOpts(opts) {
        if (opts === void 0) opts = {
        };
        var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this), locale = _Formatter$create$res.locale, numberingSystem = _Formatter$create$res.numberingSystem, calendar = _Formatter$create$res.calendar;
        return {
            locale: locale,
            numberingSystem: numberingSystem,
            outputCalendar: calendar
        };
    } // TRANSFORM
    ;
    _proto.toUTC = function toUTC(offset8, opts) {
        if (offset8 === void 0) offset8 = 0;
        if (opts === void 0) opts = {
        };
        return this.setZone(FixedOffsetZone.instance(offset8), opts);
    };
    _proto.toLocal = function toLocal() {
        return this.setZone(Settings.defaultZone);
    };
    _proto.setZone = function setZone(zone, _temp) {
        var _ref3 = _temp === void 0 ? {
        } : _temp, _ref3$keepLocalTime = _ref3.keepLocalTime, keepLocalTime = _ref3$keepLocalTime === void 0 ? false : _ref3$keepLocalTime, _ref3$keepCalendarTim = _ref3.keepCalendarTime, keepCalendarTime = _ref3$keepCalendarTim === void 0 ? false : _ref3$keepCalendarTim;
        zone = normalizeZone(zone, Settings.defaultZone);
        if (zone.equals(this.zone)) return this;
        else if (!zone.isValid) return DateTime1.invalid(unsupportedZone(zone));
        else {
            var newTS = this.ts;
            if (keepLocalTime || keepCalendarTime) {
                var offsetGuess = zone.offset(this.ts);
                var asObj = this.toObject();
                var _objToTS3 = objToTS(asObj, offsetGuess, zone);
                newTS = _objToTS3[0];
            }
            return clone$1(this, {
                ts: newTS,
                zone: zone
            });
        }
    };
    _proto.reconfigure = function reconfigure(_temp2) {
        var _ref4 = _temp2 === void 0 ? {
        } : _temp2, locale = _ref4.locale, numberingSystem = _ref4.numberingSystem, outputCalendar = _ref4.outputCalendar;
        var loc = this.loc.clone({
            locale: locale,
            numberingSystem: numberingSystem,
            outputCalendar: outputCalendar
        });
        return clone$1(this, {
            loc: loc
        });
    };
    _proto.setLocale = function setLocale(locale) {
        return this.reconfigure({
            locale: locale
        });
    };
    _proto.set = function set(values) {
        if (!this.isValid) return this;
        var normalized = normalizeObject(values, normalizeUnit, []), settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
        if ((containsGregor || containsOrdinal) && definiteWeekDef) throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        if (containsGregorMD && containsOrdinal) throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
        var mixed;
        if (settingWeekStuff) mixed = weekToGregorian(Object.assign(gregorianToWeek(this.c), normalized));
        else if (!isUndefined(normalized.ordinal)) mixed = ordinalToGregorian(Object.assign(gregorianToOrdinal(this.c), normalized));
        else {
            mixed = Object.assign(this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
            // use the last day of the right month
            if (isUndefined(normalized.day)) mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
        }
        var _objToTS4 = objToTS(mixed, this.o, this.zone), ts = _objToTS4[0], o = _objToTS4[1];
        return clone$1(this, {
            ts: ts,
            o: o
        });
    };
    _proto.plus = function plus(duration) {
        if (!this.isValid) return this;
        var dur = friendlyDuration(duration);
        return clone$1(this, adjustTime(this, dur));
    };
    _proto.minus = function minus(duration) {
        if (!this.isValid) return this;
        var dur = friendlyDuration(duration).negate();
        return clone$1(this, adjustTime(this, dur));
    };
    _proto.startOf = function startOf(unit) {
        if (!this.isValid) return this;
        var o = {
        }, normalizedUnit = Duration.normalizeUnit(unit);
        switch(normalizedUnit){
            case "years":
                o.month = 1;
            // falls through
            case "quarters":
            case "months":
                o.day = 1;
            // falls through
            case "weeks":
            case "days":
                o.hour = 0;
            // falls through
            case "hours":
                o.minute = 0;
            // falls through
            case "minutes":
                o.second = 0;
            // falls through
            case "seconds":
                o.millisecond = 0;
                break;
        }
        if (normalizedUnit === "weeks") o.weekday = 1;
        if (normalizedUnit === "quarters") {
            var q = Math.ceil(this.month / 3);
            o.month = (q - 1) * 3 + 1;
        }
        return this.set(o);
    };
    _proto.endOf = function endOf(unit) {
        var _this$plus;
        return this.isValid ? this.plus((_this$plus = {
        }, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
    } // OUTPUT
    ;
    _proto.toFormat = function toFormat(fmt, opts) {
        if (opts === void 0) opts = {
        };
        return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID$2;
    };
    _proto.toLocaleString = function toLocaleString(opts) {
        if (opts === void 0) opts = DATE_SHORT;
        return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID$2;
    };
    _proto.toLocaleParts = function toLocaleParts(opts) {
        if (opts === void 0) opts = {
        };
        return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
    };
    _proto.toISO = function toISO(opts) {
        if (opts === void 0) opts = {
        };
        if (!this.isValid) return null;
        return this.toISODate(opts) + "T" + this.toISOTime(opts);
    };
    _proto.toISODate = function toISODate(_temp3) {
        var _ref5 = _temp3 === void 0 ? {
        } : _temp3, _ref5$format = _ref5.format, format = _ref5$format === void 0 ? "extended" : _ref5$format;
        var fmt = format === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";
        if (this.year > 9999) fmt = "+" + fmt;
        return toTechFormat(this, fmt);
    };
    _proto.toISOWeekDate = function toISOWeekDate() {
        return toTechFormat(this, "kkkk-'W'WW-c");
    };
    _proto.toISOTime = function toISOTime(_temp4) {
        var _ref6 = _temp4 === void 0 ? {
        } : _temp4, _ref6$suppressMillise = _ref6.suppressMilliseconds, suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise, _ref6$suppressSeconds = _ref6.suppressSeconds, suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds, _ref6$includeOffset = _ref6.includeOffset, includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset, _ref6$includePrefix = _ref6.includePrefix, includePrefix = _ref6$includePrefix === void 0 ? false : _ref6$includePrefix, _ref6$format = _ref6.format, format = _ref6$format === void 0 ? "extended" : _ref6$format;
        return toTechTimeFormat(this, {
            suppressSeconds: suppressSeconds,
            suppressMilliseconds: suppressMilliseconds,
            includeOffset: includeOffset,
            includePrefix: includePrefix,
            format: format
        });
    };
    _proto.toRFC2822 = function toRFC2822() {
        return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
    };
    _proto.toHTTP = function toHTTP() {
        return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    };
    _proto.toSQLDate = function toSQLDate() {
        return toTechFormat(this, "yyyy-MM-dd");
    };
    _proto.toSQLTime = function toSQLTime(_temp5) {
        var _ref7 = _temp5 === void 0 ? {
        } : _temp5, _ref7$includeOffset = _ref7.includeOffset, includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset, _ref7$includeZone = _ref7.includeZone, includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone;
        return toTechTimeFormat(this, {
            includeOffset: includeOffset,
            includeZone: includeZone,
            spaceZone: true
        });
    };
    _proto.toSQL = function toSQL(opts) {
        if (opts === void 0) opts = {
        };
        if (!this.isValid) return null;
        return this.toSQLDate() + " " + this.toSQLTime(opts);
    };
    _proto.toString = function toString() {
        return this.isValid ? this.toISO() : INVALID$2;
    };
    _proto.valueOf = function valueOf() {
        return this.toMillis();
    };
    _proto.toMillis = function toMillis() {
        return this.isValid ? this.ts : NaN;
    };
    _proto.toSeconds = function toSeconds() {
        return this.isValid ? this.ts / 1000 : NaN;
    };
    _proto.toJSON = function toJSON() {
        return this.toISO();
    };
    _proto.toBSON = function toBSON() {
        return this.toJSDate();
    };
    _proto.toObject = function toObject(opts) {
        if (opts === void 0) opts = {
        };
        if (!this.isValid) return {
        };
        var base = Object.assign({
        }, this.c);
        if (opts.includeConfig) {
            base.outputCalendar = this.outputCalendar;
            base.numberingSystem = this.loc.numberingSystem;
            base.locale = this.loc.locale;
        }
        return base;
    };
    _proto.toJSDate = function toJSDate() {
        return new Date(this.isValid ? this.ts : NaN);
    } // COMPARE
    ;
    _proto.diff = function diff(otherDateTime, unit, opts) {
        if (unit === void 0) unit = "milliseconds";
        if (opts === void 0) opts = {
        };
        if (!this.isValid || !otherDateTime.isValid) return Duration.invalid(this.invalid || otherDateTime.invalid, "created by diffing an invalid DateTime");
        var durOpts = Object.assign({
            locale: this.locale,
            numberingSystem: this.numberingSystem
        }, opts);
        var units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = _diff(earlier, later, units, durOpts);
        return otherIsLater ? diffed.negate() : diffed;
    };
    _proto.diffNow = function diffNow(unit, opts) {
        if (unit === void 0) unit = "milliseconds";
        if (opts === void 0) opts = {
        };
        return this.diff(DateTime1.now(), unit, opts);
    };
    _proto.until = function until(otherDateTime) {
        return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
    };
    _proto.hasSame = function hasSame(otherDateTime, unit) {
        if (!this.isValid) return false;
        var inputMs = otherDateTime.valueOf();
        var otherZoneDateTime = this.setZone(otherDateTime.zone, {
            keepLocalTime: true
        });
        return otherZoneDateTime.startOf(unit) <= inputMs && inputMs <= otherZoneDateTime.endOf(unit);
    };
    _proto.equals = function equals(other) {
        return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
    };
    _proto.toRelative = function toRelative(options) {
        if (options === void 0) options = {
        };
        if (!this.isValid) return null;
        var base = options.base || DateTime1.fromObject({
            zone: this.zone
        }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
        var units = [
            "years",
            "months",
            "days",
            "hours",
            "minutes",
            "seconds"
        ];
        var unit = options.unit;
        if (Array.isArray(options.unit)) {
            units = options.unit;
            unit = undefined;
        }
        return diffRelative(base, this.plus(padding), Object.assign(options, {
            numeric: "always",
            units: units,
            unit: unit
        }));
    };
    _proto.toRelativeCalendar = function toRelativeCalendar(options) {
        if (options === void 0) options = {
        };
        if (!this.isValid) return null;
        return diffRelative(options.base || DateTime1.fromObject({
            zone: this.zone
        }), this, Object.assign(options, {
            numeric: "auto",
            units: [
                "years",
                "months",
                "days"
            ],
            calendary: true
        }));
    };
    DateTime1.min = function min() {
        for(var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++)dateTimes[_key] = arguments[_key];
        if (!dateTimes.every(DateTime1.isDateTime)) throw new InvalidArgumentError("min requires all arguments be DateTimes");
        return bestBy(dateTimes, function(i) {
            return i.valueOf();
        }, Math.min);
    };
    DateTime1.max = function max() {
        for(var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)dateTimes[_key2] = arguments[_key2];
        if (!dateTimes.every(DateTime1.isDateTime)) throw new InvalidArgumentError("max requires all arguments be DateTimes");
        return bestBy(dateTimes, function(i) {
            return i.valueOf();
        }, Math.max);
    } // MISC
    ;
    DateTime1.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
        if (options === void 0) options = {
        };
        var _options = options, _options$locale = _options.locale, locale = _options$locale === void 0 ? null : _options$locale, _options$numberingSys = _options.numberingSystem, numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys, localeToUse = Locale.fromOpts({
            locale: locale,
            numberingSystem: numberingSystem,
            defaultToEN: true
        });
        return explainFromTokens(localeToUse, text, fmt);
    };
    DateTime1.fromStringExplain = function fromStringExplain(text, fmt, options) {
        if (options === void 0) options = {
        };
        return DateTime1.fromFormatExplain(text, fmt, options);
    } // FORMAT PRESETS
    ;
    _createClass(DateTime1, [
        {
            key: "isValid",
            get: function get() {
                return this.invalid === null;
            }
        },
        {
            key: "invalidReason",
            get: function get() {
                return this.invalid ? this.invalid.reason : null;
            }
        },
        {
            key: "invalidExplanation",
            get: function get() {
                return this.invalid ? this.invalid.explanation : null;
            }
        },
        {
            key: "locale",
            get: function get() {
                return this.isValid ? this.loc.locale : null;
            }
        },
        {
            key: "numberingSystem",
            get: function get() {
                return this.isValid ? this.loc.numberingSystem : null;
            }
        },
        {
            key: "outputCalendar",
            get: function get() {
                return this.isValid ? this.loc.outputCalendar : null;
            }
        },
        {
            key: "zone",
            get: function get() {
                return this._zone;
            }
        },
        {
            key: "zoneName",
            get: function get() {
                return this.isValid ? this.zone.name : null;
            }
        },
        {
            key: "year",
            get: function get() {
                return this.isValid ? this.c.year : NaN;
            }
        },
        {
            key: "quarter",
            get: function get() {
                return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
            }
        },
        {
            key: "month",
            get: function get() {
                return this.isValid ? this.c.month : NaN;
            }
        },
        {
            key: "day",
            get: function get() {
                return this.isValid ? this.c.day : NaN;
            }
        },
        {
            key: "hour",
            get: function get() {
                return this.isValid ? this.c.hour : NaN;
            }
        },
        {
            key: "minute",
            get: function get() {
                return this.isValid ? this.c.minute : NaN;
            }
        },
        {
            key: "second",
            get: function get() {
                return this.isValid ? this.c.second : NaN;
            }
        },
        {
            key: "millisecond",
            get: function get() {
                return this.isValid ? this.c.millisecond : NaN;
            }
        },
        {
            key: "weekYear",
            get: function get() {
                return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
            }
        },
        {
            key: "weekNumber",
            get: function get() {
                return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
            }
        },
        {
            key: "weekday",
            get: function get() {
                return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
            }
        },
        {
            key: "ordinal",
            get: function get() {
                return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
            }
        },
        {
            key: "monthShort",
            get: function get() {
                return this.isValid ? Info.months("short", {
                    locObj: this.loc
                })[this.month - 1] : null;
            }
        },
        {
            key: "monthLong",
            get: function get() {
                return this.isValid ? Info.months("long", {
                    locObj: this.loc
                })[this.month - 1] : null;
            }
        },
        {
            key: "weekdayShort",
            get: function get() {
                return this.isValid ? Info.weekdays("short", {
                    locObj: this.loc
                })[this.weekday - 1] : null;
            }
        },
        {
            key: "weekdayLong",
            get: function get() {
                return this.isValid ? Info.weekdays("long", {
                    locObj: this.loc
                })[this.weekday - 1] : null;
            }
        },
        {
            key: "offset",
            get: function get() {
                return this.isValid ? +this.o : NaN;
            }
        },
        {
            key: "offsetNameShort",
            get: function get() {
                if (this.isValid) return this.zone.offsetName(this.ts, {
                    format: "short",
                    locale: this.locale
                });
                else return null;
            }
        },
        {
            key: "offsetNameLong",
            get: function get() {
                if (this.isValid) return this.zone.offsetName(this.ts, {
                    format: "long",
                    locale: this.locale
                });
                else return null;
            }
        },
        {
            key: "isOffsetFixed",
            get: function get() {
                return this.isValid ? this.zone.universal : null;
            }
        },
        {
            key: "isInDST",
            get: function get() {
                if (this.isOffsetFixed) return false;
                else return this.offset > this.set({
                    month: 1
                }).offset || this.offset > this.set({
                    month: 5
                }).offset;
            }
        },
        {
            key: "isInLeapYear",
            get: function get() {
                return isLeapYear(this.year);
            }
        },
        {
            key: "daysInMonth",
            get: function get() {
                return daysInMonth(this.year, this.month);
            }
        },
        {
            key: "daysInYear",
            get: function get() {
                return this.isValid ? daysInYear(this.year) : NaN;
            }
        },
        {
            key: "weeksInWeekYear",
            get: function get() {
                return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
            }
        }
    ], [
        {
            key: "DATE_SHORT",
            get: function get() {
                return DATE_SHORT;
            }
        },
        {
            key: "DATE_MED",
            get: function get() {
                return DATE_MED;
            }
        },
        {
            key: "DATE_MED_WITH_WEEKDAY",
            get: function get() {
                return DATE_MED_WITH_WEEKDAY;
            }
        },
        {
            key: "DATE_FULL",
            get: function get() {
                return DATE_FULL;
            }
        },
        {
            key: "DATE_HUGE",
            get: function get() {
                return DATE_HUGE;
            }
        },
        {
            key: "TIME_SIMPLE",
            get: function get() {
                return TIME_SIMPLE;
            }
        },
        {
            key: "TIME_WITH_SECONDS",
            get: function get() {
                return TIME_WITH_SECONDS;
            }
        },
        {
            key: "TIME_WITH_SHORT_OFFSET",
            get: function get() {
                return TIME_WITH_SHORT_OFFSET;
            }
        },
        {
            key: "TIME_WITH_LONG_OFFSET",
            get: function get() {
                return TIME_WITH_LONG_OFFSET;
            }
        },
        {
            key: "TIME_24_SIMPLE",
            get: function get() {
                return TIME_24_SIMPLE;
            }
        },
        {
            key: "TIME_24_WITH_SECONDS",
            get: function get() {
                return TIME_24_WITH_SECONDS;
            }
        },
        {
            key: "TIME_24_WITH_SHORT_OFFSET",
            get: function get() {
                return TIME_24_WITH_SHORT_OFFSET;
            }
        },
        {
            key: "TIME_24_WITH_LONG_OFFSET",
            get: function get() {
                return TIME_24_WITH_LONG_OFFSET;
            }
        },
        {
            key: "DATETIME_SHORT",
            get: function get() {
                return DATETIME_SHORT;
            }
        },
        {
            key: "DATETIME_SHORT_WITH_SECONDS",
            get: function get() {
                return DATETIME_SHORT_WITH_SECONDS;
            }
        },
        {
            key: "DATETIME_MED",
            get: function get() {
                return DATETIME_MED;
            }
        },
        {
            key: "DATETIME_MED_WITH_SECONDS",
            get: function get() {
                return DATETIME_MED_WITH_SECONDS;
            }
        },
        {
            key: "DATETIME_MED_WITH_WEEKDAY",
            get: function get() {
                return DATETIME_MED_WITH_WEEKDAY;
            }
        },
        {
            key: "DATETIME_FULL",
            get: function get() {
                return DATETIME_FULL;
            }
        },
        {
            key: "DATETIME_FULL_WITH_SECONDS",
            get: function get() {
                return DATETIME_FULL_WITH_SECONDS;
            }
        },
        {
            key: "DATETIME_HUGE",
            get: function get() {
                return DATETIME_HUGE;
            }
        },
        {
            key: "DATETIME_HUGE_WITH_SECONDS",
            get: function get() {
                return DATETIME_HUGE_WITH_SECONDS;
            }
        }
    ]);
    return DateTime1;
}();
function friendlyDateTime(dateTimeish) {
    if (DateTime.isDateTime(dateTimeish)) return dateTimeish;
    else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) return DateTime.fromJSDate(dateTimeish);
    else if (dateTimeish && typeof dateTimeish === "object") return DateTime.fromObject(dateTimeish);
    else throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
}
var VERSION = "1.28.1";
exports.DateTime = DateTime;
exports.Duration = Duration;
exports.FixedOffsetZone = FixedOffsetZone;
exports.IANAZone = IANAZone;
exports.Info = Info;
exports.Interval = Interval;
exports.InvalidZone = InvalidZone;
exports.LocalZone = LocalZone;
exports.Settings = Settings;
exports.VERSION = VERSION;
exports.Zone = Zone;

},{}],"xppZb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Cache", ()=>Cache
);
var _iterresult = require("./iterresult");
var _iterresultDefault = parcelHelpers.interopDefault(_iterresult);
var _dateutil = require("./dateutil");
var _dateutilDefault = parcelHelpers.interopDefault(_dateutil);
var _helpers = require("./helpers");
var Cache = function() {
    function Cache1() {
        this.all = false;
        this.before = [];
        this.after = [];
        this.between = [];
    }
    /**
     * @param {String} what - all/before/after/between
     * @param {Array,Date} value - an array of dates, one date, or null
     * @param {Object?} args - _iter arguments
     */ Cache1.prototype._cacheAdd = function(what, value, args) {
        if (value) value = value instanceof Date ? _dateutilDefault.default.clone(value) : _dateutilDefault.default.cloneDates(value);
        if (what === 'all') this.all = value;
        else {
            args._value = value;
            this[what].push(args);
        }
    };
    /**
     * @return false - not in the cache
     *         null  - cached, but zero occurrences (before/after)
     *         Date  - cached (before/after)
     *         []    - cached, but zero occurrences (all/between)
     *         [Date1, DateN] - cached (all/between)
     */ Cache1.prototype._cacheGet = function(what, args) {
        var cached = false;
        var argsKeys = args ? Object.keys(args) : [];
        var findCacheDiff = function(item) {
            for(var i = 0; i < argsKeys.length; i++){
                var key = argsKeys[i];
                if (String(args[key]) !== String(item[key])) return true;
            }
            return false;
        };
        var cachedObject = this[what];
        if (what === 'all') cached = this.all;
        else if (_helpers.isArray(cachedObject)) // Let's see whether we've already called the
        // 'what' method with the same 'args'
        for(var i1 = 0; i1 < cachedObject.length; i1++){
            var item1 = cachedObject[i1];
            if (argsKeys.length && findCacheDiff(item1)) continue;
            cached = item1._value;
            break;
        }
        if (!cached && this.all) {
            // Not in the cache, but we already know all the occurrences,
            // so we can find the correct dates from the cached ones.
            var iterResult = new _iterresultDefault.default(what, args);
            for(var i1 = 0; i1 < this.all.length; i1++){
                if (!iterResult.accept(this.all[i1])) break;
            }
            cached = iterResult.getValue();
            this._cacheAdd(what, cached, args);
        }
        return _helpers.isArray(cached) ? _dateutilDefault.default.cloneDates(cached) : cached instanceof Date ? _dateutilDefault.default.clone(cached) : cached;
    };
    return Cache1;
}();

},{"./iterresult":"koGmZ","./dateutil":"8L9ZE","./helpers":"9yiPH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eg5U9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "iter", ()=>iter
);
var _types = require("../types");
var _dateutil = require("../dateutil");
var _dateutilDefault = parcelHelpers.interopDefault(_dateutil);
var _index = require("../iterinfo/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _rrule = require("../rrule");
var _rruleDefault = parcelHelpers.interopDefault(_rrule);
var _parseoptions = require("../parseoptions");
var _helpers = require("../helpers");
var _datewithzone = require("../datewithzone");
var _poslist = require("./poslist");
var _datetime = require("../datetime");
function iter(iterResult, options) {
    var dtstart = options.dtstart, freq = options.freq, interval = options.interval, until = options.until, bysetpos = options.bysetpos;
    var count = options.count;
    if (count === 0 || interval === 0) return emitResult(iterResult);
    var counterDate = _datetime.DateTime.fromDate(dtstart);
    var ii = new _indexDefault.default(options);
    ii.rebuild(counterDate.year, counterDate.month);
    var timeset = makeTimeset(ii, counterDate, options);
    while(true){
        var _a = ii.getdayset(freq)(counterDate.year, counterDate.month, counterDate.day), dayset = _a[0], start = _a[1], end = _a[2];
        var filtered = removeFilteredDays(dayset, start, end, ii, options);
        if (_helpers.notEmpty(bysetpos)) {
            var poslist = _poslist.buildPoslist(bysetpos, timeset, start, end, ii, dayset);
            for(var j = 0; j < poslist.length; j++){
                var res = poslist[j];
                if (until && res > until) return emitResult(iterResult);
                if (res >= dtstart) {
                    var rezonedDate = rezoneIfNeeded(res, options);
                    if (!iterResult.accept(rezonedDate)) return emitResult(iterResult);
                    if (count) {
                        --count;
                        if (!count) return emitResult(iterResult);
                    }
                }
            }
        } else for(var j = start; j < end; j++){
            var currentDay = dayset[j];
            if (!_helpers.isPresent(currentDay)) continue;
            var date = _dateutilDefault.default.fromOrdinal(ii.yearordinal + currentDay);
            for(var k = 0; k < timeset.length; k++){
                var time = timeset[k];
                var res = _dateutilDefault.default.combine(date, time);
                if (until && res > until) return emitResult(iterResult);
                if (res >= dtstart) {
                    var rezonedDate = rezoneIfNeeded(res, options);
                    if (!iterResult.accept(rezonedDate)) return emitResult(iterResult);
                    if (count) {
                        --count;
                        if (!count) return emitResult(iterResult);
                    }
                }
            }
        }
        if (options.interval === 0) return emitResult(iterResult);
        // Handle frequency and interval
        counterDate.add(options, filtered);
        if (counterDate.year > _dateutilDefault.default.MAXYEAR) return emitResult(iterResult);
        if (!_types.freqIsDailyOrGreater(freq)) timeset = ii.gettimeset(freq)(counterDate.hour, counterDate.minute, counterDate.second, 0);
        ii.rebuild(counterDate.year, counterDate.month);
    }
}
function isFiltered(ii, currentDay, options) {
    var bymonth = options.bymonth, byweekno = options.byweekno, byweekday = options.byweekday, byeaster = options.byeaster, bymonthday = options.bymonthday, bynmonthday = options.bynmonthday, byyearday = options.byyearday;
    return _helpers.notEmpty(bymonth) && !_helpers.includes(bymonth, ii.mmask[currentDay]) || _helpers.notEmpty(byweekno) && !ii.wnomask[currentDay] || _helpers.notEmpty(byweekday) && !_helpers.includes(byweekday, ii.wdaymask[currentDay]) || _helpers.notEmpty(ii.nwdaymask) && !ii.nwdaymask[currentDay] || byeaster !== null && !_helpers.includes(ii.eastermask, currentDay) || (_helpers.notEmpty(bymonthday) || _helpers.notEmpty(bynmonthday)) && !_helpers.includes(bymonthday, ii.mdaymask[currentDay]) && !_helpers.includes(bynmonthday, ii.nmdaymask[currentDay]) || _helpers.notEmpty(byyearday) && (currentDay < ii.yearlen && !_helpers.includes(byyearday, currentDay + 1) && !_helpers.includes(byyearday, -ii.yearlen + currentDay) || currentDay >= ii.yearlen && !_helpers.includes(byyearday, currentDay + 1 - ii.yearlen) && !_helpers.includes(byyearday, -ii.nextyearlen + currentDay - ii.yearlen));
}
function rezoneIfNeeded(date, options) {
    return new _datewithzone.DateWithZone(date, options.tzid).rezonedDate();
}
function emitResult(iterResult) {
    return iterResult.getValue();
}
function removeFilteredDays(dayset, start, end, ii, options) {
    var filtered = false;
    for(var dayCounter = start; dayCounter < end; dayCounter++){
        var currentDay = dayset[dayCounter];
        filtered = isFiltered(ii, currentDay, options);
        if (filtered) dayset[currentDay] = null;
    }
    return filtered;
}
function makeTimeset(ii, counterDate, options) {
    var freq = options.freq, byhour = options.byhour, byminute = options.byminute, bysecond = options.bysecond;
    if (_types.freqIsDailyOrGreater(freq)) return _parseoptions.buildTimeset(options);
    if (freq >= _rruleDefault.default.HOURLY && _helpers.notEmpty(byhour) && !_helpers.includes(byhour, counterDate.hour) || freq >= _rruleDefault.default.MINUTELY && _helpers.notEmpty(byminute) && !_helpers.includes(byminute, counterDate.minute) || freq >= _rruleDefault.default.SECONDLY && _helpers.notEmpty(bysecond) && !_helpers.includes(bysecond, counterDate.second)) return [];
    return ii.gettimeset(freq)(counterDate.hour, counterDate.minute, counterDate.second, counterDate.millisecond);
}

},{"../types":"gIncR","../dateutil":"8L9ZE","../iterinfo/index":"4Jnjf","../rrule":"hNQhL","../parseoptions":"7IooI","../helpers":"9yiPH","../datewithzone":"1ZYSd","./poslist":"7qSfs","../datetime":"jXIyx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Jnjf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dateutil = require("../dateutil");
var _dateutilDefault = parcelHelpers.interopDefault(_dateutil);
var _helpers = require("../helpers");
var _types = require("../types");
var _yearinfo = require("./yearinfo");
var _monthinfo = require("./monthinfo");
var _easter = require("./easter");
var _datetime = require("../datetime");
// =============================================================================
// Iterinfo
// =============================================================================
var Iterinfo = function() {
    function Iterinfo1(options) {
        this.options = options;
    }
    Iterinfo1.prototype.rebuild = function(year, month) {
        var options = this.options;
        if (year !== this.lastyear) this.yearinfo = _yearinfo.rebuildYear(year, options);
        if (_helpers.notEmpty(options.bynweekday) && (month !== this.lastmonth || year !== this.lastyear)) {
            var _a = this.yearinfo, yearlen = _a.yearlen, mrange = _a.mrange, wdaymask = _a.wdaymask;
            this.monthinfo = _monthinfo.rebuildMonth(year, month, yearlen, mrange, wdaymask, options);
        }
        if (_helpers.isPresent(options.byeaster)) this.eastermask = _easter.easter(year, options.byeaster);
    };
    Object.defineProperty(Iterinfo1.prototype, "lastyear", {
        get: function() {
            return this.monthinfo ? this.monthinfo.lastyear : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterinfo1.prototype, "lastmonth", {
        get: function() {
            return this.monthinfo ? this.monthinfo.lastmonth : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterinfo1.prototype, "yearlen", {
        get: function() {
            return this.yearinfo.yearlen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterinfo1.prototype, "yearordinal", {
        get: function() {
            return this.yearinfo.yearordinal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterinfo1.prototype, "mrange", {
        get: function() {
            return this.yearinfo.mrange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterinfo1.prototype, "wdaymask", {
        get: function() {
            return this.yearinfo.wdaymask;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterinfo1.prototype, "mmask", {
        get: function() {
            return this.yearinfo.mmask;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterinfo1.prototype, "wnomask", {
        get: function() {
            return this.yearinfo.wnomask;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterinfo1.prototype, "nwdaymask", {
        get: function() {
            return this.monthinfo ? this.monthinfo.nwdaymask : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterinfo1.prototype, "nextyearlen", {
        get: function() {
            return this.yearinfo.nextyearlen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterinfo1.prototype, "mdaymask", {
        get: function() {
            return this.yearinfo.mdaymask;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Iterinfo1.prototype, "nmdaymask", {
        get: function() {
            return this.yearinfo.nmdaymask;
        },
        enumerable: true,
        configurable: true
    });
    Iterinfo1.prototype.ydayset = function() {
        return [
            _helpers.range(this.yearlen),
            0,
            this.yearlen
        ];
    };
    Iterinfo1.prototype.mdayset = function(_, month, __) {
        var start = this.mrange[month - 1];
        var end = this.mrange[month];
        var set = _helpers.repeat(null, this.yearlen);
        for(var i = start; i < end; i++)set[i] = i;
        return [
            set,
            start,
            end
        ];
    };
    Iterinfo1.prototype.wdayset = function(year, month, day) {
        // We need to handle cross-year weeks here.
        var set = _helpers.repeat(null, this.yearlen + 7);
        var i = _dateutilDefault.default.toOrdinal(new Date(Date.UTC(year, month - 1, day))) - this.yearordinal;
        var start = i;
        for(var j = 0; j < 7; j++){
            set[i] = i;
            ++i;
            if (this.wdaymask[i] === this.options.wkst) break;
        }
        return [
            set,
            start,
            i
        ];
    };
    Iterinfo1.prototype.ddayset = function(year, month, day) {
        var set = _helpers.repeat(null, this.yearlen);
        var i = _dateutilDefault.default.toOrdinal(new Date(Date.UTC(year, month - 1, day))) - this.yearordinal;
        set[i] = i;
        return [
            set,
            i,
            i + 1
        ];
    };
    Iterinfo1.prototype.htimeset = function(hour, _, second, millisecond) {
        var _this = this;
        var set = [];
        this.options.byminute.forEach(function(minute) {
            set = set.concat(_this.mtimeset(hour, minute, second, millisecond));
        });
        _dateutilDefault.default.sort(set);
        return set;
    };
    Iterinfo1.prototype.mtimeset = function(hour, minute, _, millisecond) {
        var set = this.options.bysecond.map(function(second) {
            return new _datetime.Time(hour, minute, second, millisecond);
        });
        _dateutilDefault.default.sort(set);
        return set;
    };
    Iterinfo1.prototype.stimeset = function(hour, minute, second, millisecond) {
        return [
            new _datetime.Time(hour, minute, second, millisecond)
        ];
    };
    Iterinfo1.prototype.getdayset = function(freq) {
        switch(freq){
            case _types.Frequency.YEARLY:
                return this.ydayset.bind(this);
            case _types.Frequency.MONTHLY:
                return this.mdayset.bind(this);
            case _types.Frequency.WEEKLY:
                return this.wdayset.bind(this);
            case _types.Frequency.DAILY:
                return this.ddayset.bind(this);
            default:
                return this.ddayset.bind(this);
        }
    };
    Iterinfo1.prototype.gettimeset = function(freq) {
        switch(freq){
            case _types.Frequency.HOURLY:
                return this.htimeset.bind(this);
            case _types.Frequency.MINUTELY:
                return this.mtimeset.bind(this);
            case _types.Frequency.SECONDLY:
                return this.stimeset.bind(this);
        }
    };
    return Iterinfo1;
}();
exports.default = Iterinfo;

},{"../dateutil":"8L9ZE","../helpers":"9yiPH","../types":"gIncR","./yearinfo":"alFQ7","./monthinfo":"cUdv7","./easter":"dhFr9","../datetime":"jXIyx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"alFQ7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rebuildYear", ()=>rebuildYear
);
var _tslib = require("tslib");
var _dateutil = require("../dateutil");
var _dateutilDefault = parcelHelpers.interopDefault(_dateutil);
var _helpers = require("../helpers");
var _masks = require("../masks");
function rebuildYear(year, options) {
    var firstyday = new Date(Date.UTC(year, 0, 1));
    var yearlen = _dateutilDefault.default.isLeapYear(year) ? 366 : 365;
    var nextyearlen = _dateutilDefault.default.isLeapYear(year + 1) ? 366 : 365;
    var yearordinal = _dateutilDefault.default.toOrdinal(firstyday);
    var yearweekday = _dateutilDefault.default.getWeekday(firstyday);
    var result = _tslib.__assign(_tslib.__assign({
        yearlen: yearlen,
        nextyearlen: nextyearlen,
        yearordinal: yearordinal,
        yearweekday: yearweekday
    }, baseYearMasks(year)), {
        wnomask: null
    });
    if (_helpers.empty(options.byweekno)) return result;
    result.wnomask = _helpers.repeat(0, yearlen + 7);
    var firstwkst;
    var wyearlen;
    var no1wkst = firstwkst = _helpers.pymod(7 - yearweekday + options.wkst, 7);
    if (no1wkst >= 4) {
        no1wkst = 0;
        // Number of days in the year, plus the days we got
        // from last year.
        wyearlen = result.yearlen + _helpers.pymod(yearweekday - options.wkst, 7);
    } else // Number of days in the year, minus the days we
    // left in last year.
    wyearlen = yearlen - no1wkst;
    var div = Math.floor(wyearlen / 7);
    var mod = _helpers.pymod(wyearlen, 7);
    var numweeks = Math.floor(div + mod / 4);
    for(var j = 0; j < options.byweekno.length; j++){
        var n = options.byweekno[j];
        if (n < 0) n += numweeks + 1;
        if (!(n > 0 && n <= numweeks)) continue;
        var i = void 0;
        if (n > 1) {
            i = no1wkst + (n - 1) * 7;
            if (no1wkst !== firstwkst) i -= 7 - firstwkst;
        } else i = no1wkst;
        for(var k = 0; k < 7; k++){
            result.wnomask[i] = 1;
            i++;
            if (result.wdaymask[i] === options.wkst) break;
        }
    }
    if (_helpers.includes(options.byweekno, 1)) {
        // Check week number 1 of next year as well
        // orig-TODO : Check -numweeks for next year.
        var i = no1wkst + numweeks * 7;
        if (no1wkst !== firstwkst) i -= 7 - firstwkst;
        if (i < yearlen) // If week starts in next year, we
        // don't care about it.
        for(var j = 0; j < 7; j++){
            result.wnomask[i] = 1;
            i += 1;
            if (result.wdaymask[i] === options.wkst) break;
        }
    }
    if (no1wkst) {
        // Check last week number of last year as
        // well. If no1wkst is 0, either the year
        // started on week start, or week number 1
        // got days from last year, so there are no
        // days from last year's last week number in
        // this year.
        var lnumweeks = void 0;
        if (!_helpers.includes(options.byweekno, -1)) {
            var lyearweekday = _dateutilDefault.default.getWeekday(new Date(Date.UTC(year - 1, 0, 1)));
            var lno1wkst = _helpers.pymod(7 - lyearweekday.valueOf() + options.wkst, 7);
            var lyearlen = _dateutilDefault.default.isLeapYear(year - 1) ? 366 : 365;
            var weekst = void 0;
            if (lno1wkst >= 4) {
                lno1wkst = 0;
                weekst = lyearlen + _helpers.pymod(lyearweekday - options.wkst, 7);
            } else weekst = yearlen - no1wkst;
            lnumweeks = Math.floor(52 + _helpers.pymod(weekst, 7) / 4);
        } else lnumweeks = -1;
        if (_helpers.includes(options.byweekno, lnumweeks)) for(var i = 0; i < no1wkst; i++)result.wnomask[i] = 1;
    }
    return result;
}
function baseYearMasks(year) {
    var yearlen = _dateutilDefault.default.isLeapYear(year) ? 366 : 365;
    var firstyday = new Date(Date.UTC(year, 0, 1));
    var wday = _dateutilDefault.default.getWeekday(firstyday);
    if (yearlen === 365) return {
        mmask: _masks.M365MASK,
        mdaymask: _masks.MDAY365MASK,
        nmdaymask: _masks.NMDAY365MASK,
        wdaymask: _masks.WDAYMASK.slice(wday),
        mrange: _masks.M365RANGE
    };
    return {
        mmask: _masks.M366MASK,
        mdaymask: _masks.MDAY366MASK,
        nmdaymask: _masks.NMDAY366MASK,
        wdaymask: _masks.WDAYMASK.slice(wday),
        mrange: _masks.M366RANGE
    };
}

},{"tslib":"iT5OF","../dateutil":"8L9ZE","../helpers":"9yiPH","../masks":"9xT6w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9xT6w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WDAYMASK", ()=>WDAYMASK
);
parcelHelpers.export(exports, "M365MASK", ()=>M365MASK
);
parcelHelpers.export(exports, "M365RANGE", ()=>M365RANGE
);
parcelHelpers.export(exports, "M366MASK", ()=>M366MASK
);
parcelHelpers.export(exports, "M366RANGE", ()=>M366RANGE
);
parcelHelpers.export(exports, "MDAY365MASK", ()=>MDAY365MASK
);
parcelHelpers.export(exports, "MDAY366MASK", ()=>MDAY366MASK
);
parcelHelpers.export(exports, "NMDAY365MASK", ()=>NMDAY365MASK
);
parcelHelpers.export(exports, "NMDAY366MASK", ()=>NMDAY366MASK
);
var _tslib = require("tslib");
var _helpers = require("./helpers");
// =============================================================================
// Date masks
// =============================================================================
// Every mask is 7 days longer to handle cross-year weekly periods.
var M365MASK = _tslib.__spreadArrays(_helpers.repeat(1, 31), _helpers.repeat(2, 28), _helpers.repeat(3, 31), _helpers.repeat(4, 30), _helpers.repeat(5, 31), _helpers.repeat(6, 30), _helpers.repeat(7, 31), _helpers.repeat(8, 31), _helpers.repeat(9, 30), _helpers.repeat(10, 31), _helpers.repeat(11, 30), _helpers.repeat(12, 31), _helpers.repeat(1, 7));
var M366MASK = _tslib.__spreadArrays(_helpers.repeat(1, 31), _helpers.repeat(2, 29), _helpers.repeat(3, 31), _helpers.repeat(4, 30), _helpers.repeat(5, 31), _helpers.repeat(6, 30), _helpers.repeat(7, 31), _helpers.repeat(8, 31), _helpers.repeat(9, 30), _helpers.repeat(10, 31), _helpers.repeat(11, 30), _helpers.repeat(12, 31), _helpers.repeat(1, 7));
var M28 = _helpers.range(1, 29);
var M29 = _helpers.range(1, 30);
var M30 = _helpers.range(1, 31);
var M31 = _helpers.range(1, 32);
var MDAY366MASK = _tslib.__spreadArrays(M31, M29, M31, M30, M31, M30, M31, M31, M30, M31, M30, M31, M31.slice(0, 7));
var MDAY365MASK = _tslib.__spreadArrays(M31, M28, M31, M30, M31, M30, M31, M31, M30, M31, M30, M31, M31.slice(0, 7));
var NM28 = _helpers.range(-28, 0);
var NM29 = _helpers.range(-29, 0);
var NM30 = _helpers.range(-30, 0);
var NM31 = _helpers.range(-31, 0);
var NMDAY366MASK = _tslib.__spreadArrays(NM31, NM29, NM31, NM30, NM31, NM30, NM31, NM31, NM30, NM31, NM30, NM31, NM31.slice(0, 7));
var NMDAY365MASK = _tslib.__spreadArrays(NM31, NM28, NM31, NM30, NM31, NM30, NM31, NM31, NM30, NM31, NM30, NM31, NM31.slice(0, 7));
var M366RANGE = [
    0,
    31,
    60,
    91,
    121,
    152,
    182,
    213,
    244,
    274,
    305,
    335,
    366
];
var M365RANGE = [
    0,
    31,
    59,
    90,
    120,
    151,
    181,
    212,
    243,
    273,
    304,
    334,
    365
];
var WDAYMASK = function() {
    var wdaymask = [];
    for(var i = 0; i < 55; i++)wdaymask = wdaymask.concat(_helpers.range(7));
    return wdaymask;
}();

},{"tslib":"iT5OF","./helpers":"9yiPH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cUdv7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rebuildMonth", ()=>rebuildMonth
);
var _rrule = require("../rrule");
var _rruleDefault = parcelHelpers.interopDefault(_rrule);
var _helpers = require("../helpers");
function rebuildMonth(year, month, yearlen, mrange, wdaymask, options) {
    var result = {
        lastyear: year,
        lastmonth: month,
        nwdaymask: []
    };
    var ranges = [];
    if (options.freq === _rruleDefault.default.YEARLY) {
        if (_helpers.empty(options.bymonth)) ranges = [
            [
                0,
                yearlen
            ]
        ];
        else for(var j = 0; j < options.bymonth.length; j++){
            month = options.bymonth[j];
            ranges.push(mrange.slice(month - 1, month + 1));
        }
    } else if (options.freq === _rruleDefault.default.MONTHLY) ranges = [
        mrange.slice(month - 1, month + 1)
    ];
    if (_helpers.empty(ranges)) return result;
    // Weekly frequency won't get here, so we may not
    // care about cross-year weekly periods.
    result.nwdaymask = _helpers.repeat(0, yearlen);
    for(var j = 0; j < ranges.length; j++){
        var rang = ranges[j];
        var first = rang[0];
        var last = rang[1] - 1;
        for(var k = 0; k < options.bynweekday.length; k++){
            var i = void 0;
            var _a = options.bynweekday[k], wday = _a[0], n = _a[1];
            if (n < 0) {
                i = last + (n + 1) * 7;
                i -= _helpers.pymod(wdaymask[i] - wday, 7);
            } else {
                i = first + (n - 1) * 7;
                i += _helpers.pymod(7 - wdaymask[i] + wday, 7);
            }
            if (first <= i && i <= last) result.nwdaymask[i] = 1;
        }
    }
    return result;
}

},{"../rrule":"hNQhL","../helpers":"9yiPH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dhFr9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easter", ()=>easter
);
function easter(y, offset) {
    if (offset === void 0) offset = 0;
    var a = y % 19;
    var b = Math.floor(y / 100);
    var c = y % 100;
    var d = Math.floor(b / 4);
    var e = b % 4;
    var f = Math.floor((b + 8) / 25);
    var g = Math.floor((b - f + 1) / 3);
    var h = Math.floor(19 * a + b - d - g + 15) % 30;
    var i = Math.floor(c / 4);
    var k = c % 4;
    var l = Math.floor(32 + 2 * e + 2 * i - h - k) % 7;
    var m = Math.floor((a + 11 * h + 22 * l) / 451);
    var month = Math.floor((h + l - 7 * m + 114) / 31);
    var day = (h + l - 7 * m + 114) % 31 + 1;
    var date = Date.UTC(y, month - 1, day + offset);
    var yearStart = Date.UTC(y, 0, 1);
    return [
        Math.ceil((date - yearStart) / 86400000)
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7qSfs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildPoslist", ()=>buildPoslist
);
var _dateutil = require("../dateutil");
var _dateutilDefault = parcelHelpers.interopDefault(_dateutil);
var _helpers = require("../helpers");
function buildPoslist(bysetpos, timeset, start, end, ii, dayset) {
    var poslist = [];
    for(var j = 0; j < bysetpos.length; j++){
        var daypos = void 0;
        var timepos = void 0;
        var pos = bysetpos[j];
        if (pos < 0) {
            daypos = Math.floor(pos / timeset.length);
            timepos = _helpers.pymod(pos, timeset.length);
        } else {
            daypos = Math.floor((pos - 1) / timeset.length);
            timepos = _helpers.pymod(pos - 1, timeset.length);
        }
        var tmp = [];
        for(var k = start; k < end; k++){
            var val = dayset[k];
            if (!_helpers.isPresent(val)) continue;
            tmp.push(val);
        }
        var i = void 0;
        if (daypos < 0) i = tmp.slice(daypos)[0];
        else i = tmp[daypos];
        var time = timeset[timepos];
        var date = _dateutilDefault.default.fromOrdinal(ii.yearordinal + i);
        var res = _dateutilDefault.default.combine(date, time);
        // XXX: can this ever be in the array?
        // - compare the actual date instead?
        if (!_helpers.includes(poslist, res)) poslist.push(res);
    }
    _dateutilDefault.default.sort(poslist);
    return poslist;
}

},{"../dateutil":"8L9ZE","../helpers":"9yiPH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"571AO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tslib = require("tslib");
var _rrule = require("./rrule");
var _rruleDefault = parcelHelpers.interopDefault(_rrule);
var _dateutil = require("./dateutil");
var _dateutilDefault = parcelHelpers.interopDefault(_dateutil);
var _helpers = require("./helpers");
var _iterset = require("./iterset");
var _rrulestr = require("./rrulestr");
var _optionstostring = require("./optionstostring");
function createGetterSetter(fieldName) {
    var _this = this;
    return function(field) {
        if (field !== undefined) _this["_" + fieldName] = field;
        if (_this["_" + fieldName] !== undefined) return _this["_" + fieldName];
        for(var i = 0; i < _this._rrule.length; i++){
            var field_1 = _this._rrule[i].origOptions[fieldName];
            if (field_1) return field_1;
        }
    };
}
var RRuleSet = function(_super) {
    _tslib.__extends(RRuleSet1, _super);
    /**
     *
     * @param {Boolean?} noCache
     *  The same stratagy as RRule on cache, default to false
     * @constructor
     */ function RRuleSet1(noCache) {
        if (noCache === void 0) noCache = false;
        var _this = _super.call(this, {
        }, noCache) || this;
        _this.dtstart = createGetterSetter.apply(_this, [
            'dtstart'
        ]);
        _this.tzid = createGetterSetter.apply(_this, [
            'tzid'
        ]);
        _this._rrule = [];
        _this._rdate = [];
        _this._exrule = [];
        _this._exdate = [];
        return _this;
    }
    RRuleSet1.prototype._iter = function(iterResult) {
        return _iterset.iterSet(iterResult, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid());
    };
    /**
     * Adds an RRule to the set
     *
     * @param {RRule}
     */ RRuleSet1.prototype.rrule = function(rrule) {
        _addRule(rrule, this._rrule);
    };
    /**
     * Adds an EXRULE to the set
     *
     * @param {RRule}
     */ RRuleSet1.prototype.exrule = function(rrule) {
        _addRule(rrule, this._exrule);
    };
    /**
     * Adds an RDate to the set
     *
     * @param {Date}
     */ RRuleSet1.prototype.rdate = function(date) {
        _addDate(date, this._rdate);
    };
    /**
     * Adds an EXDATE to the set
     *
     * @param {Date}
     */ RRuleSet1.prototype.exdate = function(date) {
        _addDate(date, this._exdate);
    };
    /**
     * Get list of included rrules in this recurrence set.
     *
     * @return List of rrules
     */ RRuleSet1.prototype.rrules = function() {
        return this._rrule.map(function(e) {
            return _rrulestr.rrulestr(e.toString());
        });
    };
    /**
     * Get list of excluded rrules in this recurrence set.
     *
     * @return List of exrules
     */ RRuleSet1.prototype.exrules = function() {
        return this._exrule.map(function(e) {
            return _rrulestr.rrulestr(e.toString());
        });
    };
    /**
     * Get list of included datetimes in this recurrence set.
     *
     * @return List of rdates
     */ RRuleSet1.prototype.rdates = function() {
        return this._rdate.map(function(e) {
            return new Date(e.getTime());
        });
    };
    /**
     * Get list of included datetimes in this recurrence set.
     *
     * @return List of exdates
     */ RRuleSet1.prototype.exdates = function() {
        return this._exdate.map(function(e) {
            return new Date(e.getTime());
        });
    };
    RRuleSet1.prototype.valueOf = function() {
        var result = [];
        if (!this._rrule.length && this._dtstart) result = result.concat(_optionstostring.optionsToString({
            dtstart: this._dtstart
        }));
        this._rrule.forEach(function(rrule) {
            result = result.concat(rrule.toString().split('\n'));
        });
        this._exrule.forEach(function(exrule) {
            result = result.concat(exrule.toString().split('\n').map(function(line) {
                return line.replace(/^RRULE:/, 'EXRULE:');
            }).filter(function(line) {
                return !/^DTSTART/.test(line);
            }));
        });
        if (this._rdate.length) result.push(rdatesToString('RDATE', this._rdate, this.tzid()));
        if (this._exdate.length) result.push(rdatesToString('EXDATE', this._exdate, this.tzid()));
        return result;
    };
    /**
     * to generate recurrence field such as:
     *   DTSTART:19970902T010000Z
     *   RRULE:FREQ=YEARLY;COUNT=2;BYDAY=TU
     *   RRULE:FREQ=YEARLY;COUNT=1;BYDAY=TH
     */ RRuleSet1.prototype.toString = function() {
        return this.valueOf().join('\n');
    };
    /**
     * Create a new RRuleSet Object completely base on current instance
     */ RRuleSet1.prototype.clone = function() {
        var rrs = new RRuleSet1(!!this._cache);
        this._rrule.forEach(function(rule) {
            return rrs.rrule(rule.clone());
        });
        this._exrule.forEach(function(rule) {
            return rrs.exrule(rule.clone());
        });
        this._rdate.forEach(function(date) {
            return rrs.rdate(new Date(date.getTime()));
        });
        this._exdate.forEach(function(date) {
            return rrs.exdate(new Date(date.getTime()));
        });
        return rrs;
    };
    return RRuleSet1;
}(_rruleDefault.default);
exports.default = RRuleSet;
function _addRule(rrule, collection) {
    if (!(rrule instanceof _rruleDefault.default)) throw new TypeError(String(rrule) + ' is not RRule instance');
    if (!_helpers.includes(collection.map(String), String(rrule))) collection.push(rrule);
}
function _addDate(date, collection) {
    if (!(date instanceof Date)) throw new TypeError(String(date) + ' is not Date instance');
    if (!_helpers.includes(collection.map(Number), Number(date))) {
        collection.push(date);
        _dateutilDefault.default.sort(collection);
    }
}
function rdatesToString(param, rdates, tzid) {
    var isUTC = !tzid || tzid.toUpperCase() === 'UTC';
    var header = isUTC ? param + ":" : param + ";TZID=" + tzid + ":";
    var dateString = rdates.map(function(rdate) {
        return _dateutilDefault.default.timeToUntilString(rdate.valueOf(), isUTC);
    }).join(',');
    return "" + header + dateString;
}

},{"tslib":"iT5OF","./rrule":"hNQhL","./dateutil":"8L9ZE","./helpers":"9yiPH","./iterset":"h8fjz","./rrulestr":"bqgH6","./optionstostring":"f4AHJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h8fjz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "iterSet", ()=>iterSet
);
var _datewithzone = require("./datewithzone");
var _index = require("./iter/index");
var _dateutil = require("./dateutil");
var _dateutilDefault = parcelHelpers.interopDefault(_dateutil);
function iterSet(iterResult, _rrule, _exrule, _rdate, _exdate, tzid) {
    var _exdateHash = {
    };
    var _accept = iterResult.accept;
    function evalExdate(after, before) {
        _exrule.forEach(function(rrule) {
            rrule.between(after, before, true).forEach(function(date) {
                _exdateHash[Number(date)] = true;
            });
        });
    }
    _exdate.forEach(function(date) {
        var zonedDate = new _datewithzone.DateWithZone(date, tzid).rezonedDate();
        _exdateHash[Number(zonedDate)] = true;
    });
    iterResult.accept = function(date) {
        var dt = Number(date);
        if (isNaN(dt)) return _accept.call(this, date);
        if (!_exdateHash[dt]) {
            evalExdate(new Date(dt - 1), new Date(dt + 1));
            if (!_exdateHash[dt]) {
                _exdateHash[dt] = true;
                return _accept.call(this, date);
            }
        }
        return true;
    };
    if (iterResult.method === 'between') {
        evalExdate(iterResult.args.after, iterResult.args.before);
        iterResult.accept = function(date) {
            var dt = Number(date);
            if (!_exdateHash[dt]) {
                _exdateHash[dt] = true;
                return _accept.call(this, date);
            }
            return true;
        };
    }
    for(var i = 0; i < _rdate.length; i++){
        var zonedDate = new _datewithzone.DateWithZone(_rdate[i], tzid).rezonedDate();
        if (!iterResult.accept(new Date(zonedDate.getTime()))) break;
    }
    _rrule.forEach(function(rrule) {
        _index.iter(iterResult, rrule.options);
    });
    var res = iterResult._result;
    _dateutilDefault.default.sort(res);
    switch(iterResult.method){
        case 'all':
        case 'between':
            return res;
        case 'before':
            return res.length && res[res.length - 1] || null;
        case 'after':
        default:
            return res.length && res[0] || null;
    }
}

},{"./datewithzone":"1ZYSd","./iter/index":"eg5U9","./dateutil":"8L9ZE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bqgH6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseInput", ()=>parseInput
);
parcelHelpers.export(exports, "rrulestr", ()=>rrulestr
);
var _tslib = require("tslib");
var _rrule = require("./rrule");
var _rruleDefault = parcelHelpers.interopDefault(_rrule);
var _rruleset = require("./rruleset");
var _rrulesetDefault = parcelHelpers.interopDefault(_rruleset);
var _dateutil = require("./dateutil");
var _dateutilDefault = parcelHelpers.interopDefault(_dateutil);
var _helpers = require("./helpers");
var _parsestring = require("./parsestring");
/**
 * RRuleStr
 *  To parse a set of rrule strings
 */ var DEFAULT_OPTIONS = {
    dtstart: null,
    cache: false,
    unfold: false,
    forceset: false,
    compatible: false,
    tzid: null
};
function parseInput(s, options) {
    var rrulevals = [];
    var rdatevals = [];
    var exrulevals = [];
    var exdatevals = [];
    var _a1 = _parsestring.parseDtstart(s), dtstart = _a1.dtstart, tzid = _a1.tzid;
    var lines = splitIntoLines(s, options.unfold);
    lines.forEach(function(line) {
        if (!line) return;
        var _a = breakDownLine(line), name = _a.name, parms = _a.parms, value = _a.value;
        switch(name.toUpperCase()){
            case 'RRULE':
                if (parms.length) throw new Error("unsupported RRULE parm: " + parms.join(','));
                rrulevals.push(_parsestring.parseString(line));
                break;
            case 'RDATE':
                var _b = /RDATE(?:;TZID=([^:=]+))?/i.exec(line), _ = _b[0], rdateTzid = _b[1];
                if (rdateTzid && !tzid) tzid = rdateTzid;
                rdatevals = rdatevals.concat(parseRDate(value, parms));
                break;
            case 'EXRULE':
                if (parms.length) throw new Error("unsupported EXRULE parm: " + parms.join(','));
                exrulevals.push(_parsestring.parseString(value));
                break;
            case 'EXDATE':
                exdatevals = exdatevals.concat(parseRDate(value, parms));
                break;
            case 'DTSTART':
                break;
            default:
                throw new Error('unsupported property: ' + name);
        }
    });
    return {
        dtstart: dtstart,
        tzid: tzid,
        rrulevals: rrulevals,
        rdatevals: rdatevals,
        exrulevals: exrulevals,
        exdatevals: exdatevals
    };
}
function buildRule(s, options) {
    var _a = parseInput(s, options), rrulevals = _a.rrulevals, rdatevals = _a.rdatevals, exrulevals = _a.exrulevals, exdatevals = _a.exdatevals, dtstart = _a.dtstart, tzid = _a.tzid;
    var noCache = options.cache === false;
    if (options.compatible) {
        options.forceset = true;
        options.unfold = true;
    }
    if (options.forceset || rrulevals.length > 1 || rdatevals.length || exrulevals.length || exdatevals.length) {
        var rset_1 = new _rrulesetDefault.default(noCache);
        rset_1.dtstart(dtstart);
        rset_1.tzid(tzid || undefined);
        rrulevals.forEach(function(val) {
            rset_1.rrule(new _rruleDefault.default(groomRruleOptions(val, dtstart, tzid), noCache));
        });
        rdatevals.forEach(function(date) {
            rset_1.rdate(date);
        });
        exrulevals.forEach(function(val) {
            rset_1.exrule(new _rruleDefault.default(groomRruleOptions(val, dtstart, tzid), noCache));
        });
        exdatevals.forEach(function(date) {
            rset_1.exdate(date);
        });
        if (options.compatible && options.dtstart) rset_1.rdate(dtstart);
        return rset_1;
    }
    var val1 = rrulevals[0] || {
    };
    return new _rruleDefault.default(groomRruleOptions(val1, val1.dtstart || options.dtstart || dtstart, val1.tzid || options.tzid || tzid), noCache);
}
function rrulestr(s, options) {
    if (options === void 0) options = {
    };
    return buildRule(s, initializeOptions(options));
}
function groomRruleOptions(val, dtstart, tzid) {
    return _tslib.__assign(_tslib.__assign({
    }, val), {
        dtstart: dtstart,
        tzid: tzid
    });
}
function initializeOptions(options) {
    var invalid = [];
    var keys = Object.keys(options);
    var defaultKeys = Object.keys(DEFAULT_OPTIONS);
    keys.forEach(function(key) {
        if (!_helpers.includes(defaultKeys, key)) invalid.push(key);
    });
    if (invalid.length) throw new Error('Invalid options: ' + invalid.join(', '));
    return _tslib.__assign(_tslib.__assign({
    }, DEFAULT_OPTIONS), options);
}
function extractName(line) {
    if (line.indexOf(':') === -1) return {
        name: 'RRULE',
        value: line
    };
    var _a = _helpers.split(line, ':', 1), name = _a[0], value = _a[1];
    return {
        name: name,
        value: value
    };
}
function breakDownLine(line) {
    var _a = extractName(line), name = _a.name, value = _a.value;
    var parms = name.split(';');
    if (!parms) throw new Error('empty property name');
    return {
        name: parms[0].toUpperCase(),
        parms: parms.slice(1),
        value: value
    };
}
function splitIntoLines(s, unfold) {
    if (unfold === void 0) unfold = false;
    s = s && s.trim();
    if (!s) throw new Error('Invalid empty string');
    // More info about 'unfold' option
    // Go head to http://www.ietf.org/rfc/rfc2445.txt
    if (!unfold) return s.split(/\s/);
    var lines = s.split('\n');
    var i = 0;
    while(i < lines.length){
        // TODO
        var line = lines[i] = lines[i].replace(/\s+$/g, '');
        if (!line) lines.splice(i, 1);
        else if (i > 0 && line[0] === ' ') {
            lines[i - 1] += line.slice(1);
            lines.splice(i, 1);
        } else i += 1;
    }
    return lines;
}
function validateDateParm(parms) {
    parms.forEach(function(parm) {
        if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(parm)) throw new Error('unsupported RDATE/EXDATE parm: ' + parm);
    });
}
function parseRDate(rdateval, parms) {
    validateDateParm(parms);
    return rdateval.split(',').map(function(datestr) {
        return _dateutilDefault.default.untilStringToDate(datestr);
    });
}

},{"tslib":"iT5OF","./rrule":"hNQhL","./rruleset":"571AO","./dateutil":"8L9ZE","./helpers":"9yiPH","./parsestring":"HkutZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8pL9M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DayGridView", ()=>DayTableView
);
parcelHelpers.export(exports, "DayTable", ()=>DayTable
);
parcelHelpers.export(exports, "DayTableSlicer", ()=>DayTableSlicer
);
parcelHelpers.export(exports, "Table", ()=>Table
);
parcelHelpers.export(exports, "TableView", ()=>TableView
);
parcelHelpers.export(exports, "buildDayTableModel", ()=>buildDayTableModel
);
/*!
FullCalendar v5.10.1
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/ var _mainCss = require("./main.css");
var _common = require("@fullcalendar/common");
var _tslib = require("tslib");
/* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/ // It is a manager for a Table subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.
var TableView = function(_super) {
    _tslib.__extends(TableView1, _super);
    function TableView1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headerElRef = _common.createRef();
        return _this;
    }
    TableView1.prototype.renderSimpleLayout = function(headerRowContent, bodyContent) {
        var _a = this, props = _a.props, context = _a.context;
        var sections = [];
        var stickyHeaderDates = _common.getStickyHeaderDates(context.options);
        if (headerRowContent) sections.push({
            type: 'header',
            key: 'header',
            isSticky: stickyHeaderDates,
            chunk: {
                elRef: this.headerElRef,
                tableClassName: 'fc-col-header',
                rowContent: headerRowContent
            }
        });
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            chunk: {
                content: bodyContent
            }
        });
        return _common.createElement(_common.ViewRoot, {
            viewSpec: context.viewSpec
        }, function(rootElRef, classNames) {
            return _common.createElement("div", {
                ref: rootElRef,
                className: [
                    'fc-daygrid'
                ].concat(classNames).join(' ')
            }, _common.createElement(_common.SimpleScrollGrid, {
                liquid: !props.isHeightAuto && !props.forPrint,
                collapsibleWidth: props.forPrint,
                cols: [],
                sections: sections
            }));
        });
    };
    TableView1.prototype.renderHScrollLayout = function(headerRowContent, bodyContent, colCnt, dayMinWidth) {
        var ScrollGrid = this.context.pluginHooks.scrollGridImpl;
        if (!ScrollGrid) throw new Error('No ScrollGrid implementation');
        var _a = this, props = _a.props, context = _a.context;
        var stickyHeaderDates = !props.forPrint && _common.getStickyHeaderDates(context.options);
        var stickyFooterScrollbar = !props.forPrint && _common.getStickyFooterScrollbar(context.options);
        var sections = [];
        if (headerRowContent) sections.push({
            type: 'header',
            key: 'header',
            isSticky: stickyHeaderDates,
            chunks: [
                {
                    key: 'main',
                    elRef: this.headerElRef,
                    tableClassName: 'fc-col-header',
                    rowContent: headerRowContent
                }
            ]
        });
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            chunks: [
                {
                    key: 'main',
                    content: bodyContent
                }
            ]
        });
        if (stickyFooterScrollbar) sections.push({
            type: 'footer',
            key: 'footer',
            isSticky: true,
            chunks: [
                {
                    key: 'main',
                    content: _common.renderScrollShim
                }
            ]
        });
        return _common.createElement(_common.ViewRoot, {
            viewSpec: context.viewSpec
        }, function(rootElRef, classNames) {
            return _common.createElement("div", {
                ref: rootElRef,
                className: [
                    'fc-daygrid'
                ].concat(classNames).join(' ')
            }, _common.createElement(ScrollGrid, {
                liquid: !props.isHeightAuto && !props.forPrint,
                collapsibleWidth: props.forPrint,
                colGroups: [
                    {
                        cols: [
                            {
                                span: colCnt,
                                minWidth: dayMinWidth
                            }
                        ]
                    }
                ],
                sections: sections
            }));
        });
    };
    return TableView1;
}(_common.DateComponent);
function splitSegsByRow(segs, rowCnt) {
    var byRow = [];
    for(var i = 0; i < rowCnt; i += 1)byRow[i] = [];
    for(var _i = 0, segs_1 = segs; _i < segs_1.length; _i++){
        var seg = segs_1[_i];
        byRow[seg.row].push(seg);
    }
    return byRow;
}
function splitSegsByFirstCol(segs, colCnt) {
    var byCol = [];
    for(var i = 0; i < colCnt; i += 1)byCol[i] = [];
    for(var _i = 0, segs_2 = segs; _i < segs_2.length; _i++){
        var seg = segs_2[_i];
        byCol[seg.firstCol].push(seg);
    }
    return byCol;
}
function splitInteractionByRow(ui, rowCnt) {
    var byRow = [];
    if (!ui) for(var i = 0; i < rowCnt; i += 1)byRow[i] = null;
    else {
        for(var i = 0; i < rowCnt; i += 1)byRow[i] = {
            affectedInstances: ui.affectedInstances,
            isEvent: ui.isEvent,
            segs: []
        };
        for(var _i = 0, _a = ui.segs; _i < _a.length; _i++){
            var seg = _a[_i];
            byRow[seg.row].segs.push(seg);
        }
    }
    return byRow;
}
var TableCellTop = function(_super) {
    _tslib.__extends(TableCellTop1, _super);
    function TableCellTop1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableCellTop1.prototype.render = function() {
        var props = this.props;
        var navLinkAttrs = _common.buildNavLinkAttrs(this.context, props.date);
        return _common.createElement(_common.DayCellContent, {
            date: props.date,
            dateProfile: props.dateProfile,
            todayRange: props.todayRange,
            showDayNumber: props.showDayNumber,
            extraHookProps: props.extraHookProps,
            defaultContent: renderTopInner
        }, function(innerElRef, innerContent) {
            return (innerContent || props.forceDayTop) && _common.createElement("div", {
                className: "fc-daygrid-day-top",
                ref: innerElRef
            }, _common.createElement("a", _tslib.__assign({
                id: props.dayNumberId,
                className: "fc-daygrid-day-number"
            }, navLinkAttrs), innerContent || _common.createElement(_common.Fragment, null, "\u00A0")));
        });
    };
    return TableCellTop1;
}(_common.BaseComponent);
function renderTopInner(props) {
    return props.dayNumberText;
}
var DEFAULT_TABLE_EVENT_TIME_FORMAT = _common.createFormatter({
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: true,
    meridiem: 'narrow'
});
function hasListItemDisplay(seg) {
    var display = seg.eventRange.ui.display;
    return display === 'list-item' || display === 'auto' && !seg.eventRange.def.allDay && seg.firstCol === seg.lastCol && seg.isStart && seg.isEnd // "
    ;
}
var TableBlockEvent = function(_super) {
    _tslib.__extends(TableBlockEvent1, _super);
    function TableBlockEvent1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableBlockEvent1.prototype.render = function() {
        var props = this.props;
        return _common.createElement(_common.StandardEvent, _tslib.__assign({
        }, props, {
            extraClassNames: [
                'fc-daygrid-event',
                'fc-daygrid-block-event',
                'fc-h-event'
            ],
            defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT,
            defaultDisplayEventEnd: props.defaultDisplayEventEnd,
            disableResizing: !props.seg.eventRange.def.allDay
        }));
    };
    return TableBlockEvent1;
}(_common.BaseComponent);
var TableListItemEvent = function(_super) {
    _tslib.__extends(TableListItemEvent1, _super);
    function TableListItemEvent1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableListItemEvent1.prototype.render = function() {
        var _a = this, props = _a.props, context = _a.context;
        var timeFormat = context.options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
        var timeText = _common.buildSegTimeText(props.seg, timeFormat, context, true, props.defaultDisplayEventEnd);
        return _common.createElement(_common.EventRoot, {
            seg: props.seg,
            timeText: timeText,
            defaultContent: renderInnerContent,
            isDragging: props.isDragging,
            isResizing: false,
            isDateSelecting: false,
            isSelected: props.isSelected,
            isPast: props.isPast,
            isFuture: props.isFuture,
            isToday: props.isToday
        }, function(rootElRef, classNames, innerElRef, innerContent) {
            return _common.createElement("a", _tslib.__assign({
                className: [
                    'fc-daygrid-event',
                    'fc-daygrid-dot-event'
                ].concat(classNames).join(' '),
                ref: rootElRef
            }, _common.getSegAnchorAttrs(props.seg, context)), innerContent);
        });
    };
    return TableListItemEvent1;
}(_common.BaseComponent);
function renderInnerContent(innerProps) {
    return _common.createElement(_common.Fragment, null, _common.createElement("div", {
        className: "fc-daygrid-event-dot",
        style: {
            borderColor: innerProps.borderColor || innerProps.backgroundColor
        }
    }), innerProps.timeText && _common.createElement("div", {
        className: "fc-event-time"
    }, innerProps.timeText), _common.createElement("div", {
        className: "fc-event-title"
    }, innerProps.event.title || _common.createElement(_common.Fragment, null, "\u00A0")));
}
var TableCellMoreLink = function(_super) {
    _tslib.__extends(TableCellMoreLink1, _super);
    function TableCellMoreLink1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.compileSegs = _common.memoize(compileSegs);
        return _this;
    }
    TableCellMoreLink1.prototype.render = function() {
        var props = this.props;
        var _a = this.compileSegs(props.singlePlacements), allSegs = _a.allSegs, invisibleSegs = _a.invisibleSegs;
        return _common.createElement(_common.MoreLinkRoot, {
            dateProfile: props.dateProfile,
            todayRange: props.todayRange,
            allDayDate: props.allDayDate,
            moreCnt: props.moreCnt,
            allSegs: allSegs,
            hiddenSegs: invisibleSegs,
            alignmentElRef: props.alignmentElRef,
            alignGridTop: props.alignGridTop,
            extraDateSpan: props.extraDateSpan,
            popoverContent: function() {
                var isForcedInvisible = (props.eventDrag ? props.eventDrag.affectedInstances : null) || (props.eventResize ? props.eventResize.affectedInstances : null) || {
                };
                return _common.createElement(_common.Fragment, null, allSegs.map(function(seg) {
                    var instanceId = seg.eventRange.instance.instanceId;
                    return _common.createElement("div", {
                        className: "fc-daygrid-event-harness",
                        key: instanceId,
                        style: {
                            visibility: isForcedInvisible[instanceId] ? 'hidden' : ''
                        }
                    }, hasListItemDisplay(seg) ? _common.createElement(TableListItemEvent, _tslib.__assign({
                        seg: seg,
                        isDragging: false,
                        isSelected: instanceId === props.eventSelection,
                        defaultDisplayEventEnd: false
                    }, _common.getSegMeta(seg, props.todayRange))) : _common.createElement(TableBlockEvent, _tslib.__assign({
                        seg: seg,
                        isDragging: false,
                        isResizing: false,
                        isDateSelecting: false,
                        isSelected: instanceId === props.eventSelection,
                        defaultDisplayEventEnd: false
                    }, _common.getSegMeta(seg, props.todayRange))));
                }));
            }
        }, function(rootElRef, classNames, innerElRef, innerContent, handleClick, title, isExpanded, popoverId) {
            return _common.createElement("a", _tslib.__assign({
                ref: rootElRef,
                className: [
                    'fc-daygrid-more-link'
                ].concat(classNames).join(' '),
                title: title,
                "aria-expanded": isExpanded,
                "aria-controls": popoverId
            }, _common.createAriaClickAttrs(handleClick)), innerContent);
        });
    };
    return TableCellMoreLink1;
}(_common.BaseComponent);
function compileSegs(singlePlacements) {
    var allSegs = [];
    var invisibleSegs = [];
    for(var _i = 0, singlePlacements_1 = singlePlacements; _i < singlePlacements_1.length; _i++){
        var placement = singlePlacements_1[_i];
        allSegs.push(placement.seg);
        if (!placement.isVisible) invisibleSegs.push(placement.seg);
    }
    return {
        allSegs: allSegs,
        invisibleSegs: invisibleSegs
    };
}
var DEFAULT_WEEK_NUM_FORMAT = _common.createFormatter({
    week: 'narrow'
});
var TableCell = function(_super) {
    _tslib.__extends(TableCell1, _super);
    function TableCell1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootElRef = _common.createRef();
        _this.state = {
            dayNumberId: _common.getUniqueDomId()
        };
        _this.handleRootEl = function(el) {
            _common.setRef(_this.rootElRef, el);
            _common.setRef(_this.props.elRef, el);
        };
        return _this;
    }
    TableCell1.prototype.render = function() {
        var _a = this, context = _a.context, props = _a.props, state = _a.state, rootElRef = _a.rootElRef;
        var date = props.date, dateProfile = props.dateProfile;
        var navLinkAttrs = _common.buildNavLinkAttrs(context, date, 'week');
        return _common.createElement(_common.DayCellRoot, {
            date: date,
            dateProfile: dateProfile,
            todayRange: props.todayRange,
            showDayNumber: props.showDayNumber,
            extraHookProps: props.extraHookProps,
            elRef: this.handleRootEl
        }, function(dayElRef, dayClassNames, rootDataAttrs, isDisabled) {
            return _common.createElement("td", _tslib.__assign({
                ref: dayElRef,
                role: "gridcell",
                className: [
                    'fc-daygrid-day'
                ].concat(dayClassNames, props.extraClassNames || []).join(' ')
            }, rootDataAttrs, props.extraDataAttrs, props.showDayNumber ? {
                'aria-labelledby': state.dayNumberId
            } : {
            }), _common.createElement("div", {
                className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
                ref: props.innerElRef /* different from hook system! RENAME */ 
            }, props.showWeekNumber && _common.createElement(_common.WeekNumberRoot, {
                date: date,
                defaultFormat: DEFAULT_WEEK_NUM_FORMAT
            }, function(weekElRef, weekClassNames, innerElRef, innerContent) {
                return _common.createElement("a", _tslib.__assign({
                    ref: weekElRef,
                    className: [
                        'fc-daygrid-week-number'
                    ].concat(weekClassNames).join(' ')
                }, navLinkAttrs), innerContent);
            }), !isDisabled && _common.createElement(TableCellTop, {
                date: date,
                dateProfile: dateProfile,
                showDayNumber: props.showDayNumber,
                dayNumberId: state.dayNumberId,
                forceDayTop: props.forceDayTop,
                todayRange: props.todayRange,
                extraHookProps: props.extraHookProps
            }), _common.createElement("div", {
                className: "fc-daygrid-day-events",
                ref: props.fgContentElRef
            }, props.fgContent, _common.createElement("div", {
                className: "fc-daygrid-day-bottom",
                style: {
                    marginTop: props.moreMarginTop
                }
            }, _common.createElement(TableCellMoreLink, {
                allDayDate: date,
                singlePlacements: props.singlePlacements,
                moreCnt: props.moreCnt,
                alignmentElRef: rootElRef,
                alignGridTop: !props.showDayNumber,
                extraDateSpan: props.extraDateSpan,
                dateProfile: props.dateProfile,
                eventSelection: props.eventSelection,
                eventDrag: props.eventDrag,
                eventResize: props.eventResize,
                todayRange: props.todayRange
            }))), _common.createElement("div", {
                className: "fc-daygrid-day-bg"
            }, props.bgContent)));
        });
    };
    return TableCell1;
}(_common.DateComponent);
function computeFgSegPlacement(segs, dayMaxEvents, dayMaxEventRows, strictOrder, eventInstanceHeights, maxContentHeight, cells) {
    var hierarchy = new DayGridSegHierarchy();
    hierarchy.allowReslicing = true;
    hierarchy.strictOrder = strictOrder;
    if (dayMaxEvents === true || dayMaxEventRows === true) {
        hierarchy.maxCoord = maxContentHeight;
        hierarchy.hiddenConsumes = true;
    } else if (typeof dayMaxEvents === 'number') hierarchy.maxStackCnt = dayMaxEvents;
    else if (typeof dayMaxEventRows === 'number') {
        hierarchy.maxStackCnt = dayMaxEventRows;
        hierarchy.hiddenConsumes = true;
    }
    // create segInputs only for segs with known heights
    var segInputs = [];
    var unknownHeightSegs = [];
    for(var i = 0; i < segs.length; i += 1){
        var seg = segs[i];
        var instanceId = seg.eventRange.instance.instanceId;
        var eventHeight = eventInstanceHeights[instanceId];
        if (eventHeight != null) segInputs.push({
            index: i,
            thickness: eventHeight,
            span: {
                start: seg.firstCol,
                end: seg.lastCol + 1
            }
        });
        else unknownHeightSegs.push(seg);
    }
    var hiddenEntries = hierarchy.addSegs(segInputs);
    var segRects = hierarchy.toRects();
    var _a = placeRects(segRects, segs, cells), singleColPlacements = _a.singleColPlacements, multiColPlacements = _a.multiColPlacements, leftoverMargins = _a.leftoverMargins;
    var moreCnts = [];
    var moreMarginTops = [];
    // add segs with unknown heights
    for(var _i = 0, unknownHeightSegs_1 = unknownHeightSegs; _i < unknownHeightSegs_1.length; _i++){
        var seg = unknownHeightSegs_1[_i];
        multiColPlacements[seg.firstCol].push({
            seg: seg,
            isVisible: false,
            isAbsolute: true,
            absoluteTop: 0,
            marginTop: 0
        });
        for(var col = seg.firstCol; col <= seg.lastCol; col += 1)singleColPlacements[col].push({
            seg: resliceSeg(seg, col, col + 1, cells),
            isVisible: false,
            isAbsolute: false,
            absoluteTop: 0,
            marginTop: 0
        });
    }
    // add the hidden entries
    for(var col = 0; col < cells.length; col += 1)moreCnts.push(0);
    for(var _b = 0, hiddenEntries_1 = hiddenEntries; _b < hiddenEntries_1.length; _b++){
        var hiddenEntry = hiddenEntries_1[_b];
        var seg = segs[hiddenEntry.index];
        var hiddenSpan = hiddenEntry.span;
        multiColPlacements[hiddenSpan.start].push({
            seg: resliceSeg(seg, hiddenSpan.start, hiddenSpan.end, cells),
            isVisible: false,
            isAbsolute: true,
            absoluteTop: 0,
            marginTop: 0
        });
        for(var col = hiddenSpan.start; col < hiddenSpan.end; col += 1){
            moreCnts[col] += 1;
            singleColPlacements[col].push({
                seg: resliceSeg(seg, col, col + 1, cells),
                isVisible: false,
                isAbsolute: false,
                absoluteTop: 0,
                marginTop: 0
            });
        }
    }
    // deal with leftover margins
    for(var col = 0; col < cells.length; col += 1)moreMarginTops.push(leftoverMargins[col]);
    return {
        singleColPlacements: singleColPlacements,
        multiColPlacements: multiColPlacements,
        moreCnts: moreCnts,
        moreMarginTops: moreMarginTops
    };
}
// rects ordered by top coord, then left
function placeRects(allRects, segs, cells) {
    var rectsByEachCol = groupRectsByEachCol(allRects, cells.length);
    var singleColPlacements = [];
    var multiColPlacements = [];
    var leftoverMargins = [];
    for(var col = 0; col < cells.length; col += 1){
        var rects = rectsByEachCol[col];
        // compute all static segs in singlePlacements
        var singlePlacements = [];
        var currentHeight = 0;
        var currentMarginTop = 0;
        for(var _i = 0, rects_1 = rects; _i < rects_1.length; _i++){
            var rect = rects_1[_i];
            var seg = segs[rect.index];
            singlePlacements.push({
                seg: resliceSeg(seg, col, col + 1, cells),
                isVisible: true,
                isAbsolute: false,
                absoluteTop: rect.levelCoord,
                marginTop: rect.levelCoord - currentHeight
            });
            currentHeight = rect.levelCoord + rect.thickness;
        }
        // compute mixed static/absolute segs in multiPlacements
        var multiPlacements = [];
        currentHeight = 0;
        currentMarginTop = 0;
        for(var _a = 0, rects_2 = rects; _a < rects_2.length; _a++){
            var rect = rects_2[_a];
            var seg = segs[rect.index];
            var isAbsolute = rect.span.end - rect.span.start > 1; // multi-column?
            var isFirstCol = rect.span.start === col;
            currentMarginTop += rect.levelCoord - currentHeight; // amount of space since bottom of previous seg
            currentHeight = rect.levelCoord + rect.thickness; // height will now be bottom of current seg
            if (isAbsolute) {
                currentMarginTop += rect.thickness;
                if (isFirstCol) multiPlacements.push({
                    seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
                    isVisible: true,
                    isAbsolute: true,
                    absoluteTop: rect.levelCoord,
                    marginTop: 0
                });
            } else if (isFirstCol) {
                multiPlacements.push({
                    seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
                    isVisible: true,
                    isAbsolute: false,
                    absoluteTop: rect.levelCoord,
                    marginTop: currentMarginTop
                });
                currentMarginTop = 0;
            }
        }
        singleColPlacements.push(singlePlacements);
        multiColPlacements.push(multiPlacements);
        leftoverMargins.push(currentMarginTop);
    }
    return {
        singleColPlacements: singleColPlacements,
        multiColPlacements: multiColPlacements,
        leftoverMargins: leftoverMargins
    };
}
function groupRectsByEachCol(rects, colCnt) {
    var rectsByEachCol = [];
    for(var col = 0; col < colCnt; col += 1)rectsByEachCol.push([]);
    for(var _i = 0, rects_3 = rects; _i < rects_3.length; _i++){
        var rect = rects_3[_i];
        for(var col = rect.span.start; col < rect.span.end; col += 1)rectsByEachCol[col].push(rect);
    }
    return rectsByEachCol;
}
function resliceSeg(seg, spanStart, spanEnd, cells) {
    if (seg.firstCol === spanStart && seg.lastCol === spanEnd - 1) return seg;
    var eventRange = seg.eventRange;
    var origRange = eventRange.range;
    var slicedRange = _common.intersectRanges(origRange, {
        start: cells[spanStart].date,
        end: _common.addDays(cells[spanEnd - 1].date, 1)
    });
    return _tslib.__assign(_tslib.__assign({
    }, seg), {
        firstCol: spanStart,
        lastCol: spanEnd - 1,
        eventRange: {
            def: eventRange.def,
            ui: _tslib.__assign(_tslib.__assign({
            }, eventRange.ui), {
                durationEditable: false
            }),
            instance: eventRange.instance,
            range: slicedRange
        },
        isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(),
        isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf()
    });
}
var DayGridSegHierarchy = function(_super) {
    _tslib.__extends(DayGridSegHierarchy1, _super);
    function DayGridSegHierarchy1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // config
        _this.hiddenConsumes = false;
        // allows us to keep hidden entries in the hierarchy so they take up space
        _this.forceHidden = {
        };
        return _this;
    }
    DayGridSegHierarchy1.prototype.addSegs = function(segInputs) {
        var _this = this;
        var hiddenSegs = _super.prototype.addSegs.call(this, segInputs);
        var entriesByLevel = this.entriesByLevel;
        var excludeHidden = function(entry) {
            return !_this.forceHidden[_common.buildEntryKey(entry)];
        };
        // remove the forced-hidden segs
        for(var level = 0; level < entriesByLevel.length; level += 1)entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
        return hiddenSegs;
    };
    DayGridSegHierarchy1.prototype.handleInvalidInsertion = function(insertion, entry, hiddenEntries) {
        var _a = this, entriesByLevel = _a.entriesByLevel, forceHidden = _a.forceHidden;
        var touchingEntry = insertion.touchingEntry, touchingLevel = insertion.touchingLevel, touchingLateral = insertion.touchingLateral;
        if (this.hiddenConsumes && touchingEntry) {
            var touchingEntryId = _common.buildEntryKey(touchingEntry);
            // if not already hidden
            if (!forceHidden[touchingEntryId]) {
                if (this.allowReslicing) {
                    var placeholderEntry = _tslib.__assign(_tslib.__assign({
                    }, touchingEntry), {
                        span: _common.intersectSpans(touchingEntry.span, entry.span)
                    });
                    var placeholderEntryId = _common.buildEntryKey(placeholderEntry);
                    forceHidden[placeholderEntryId] = true;
                    entriesByLevel[touchingLevel][touchingLateral] = placeholderEntry; // replace touchingEntry with our placeholder
                    this.splitEntry(touchingEntry, entry, hiddenEntries); // split up the touchingEntry, reinsert it
                } else {
                    forceHidden[touchingEntryId] = true;
                    hiddenEntries.push(touchingEntry);
                }
            }
        }
        return _super.prototype.handleInvalidInsertion.call(this, insertion, entry, hiddenEntries);
    };
    return DayGridSegHierarchy1;
}(_common.SegHierarchy);
var TableRow = function(_super) {
    _tslib.__extends(TableRow1, _super);
    function TableRow1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cellElRefs = new _common.RefMap(); // the <td>
        _this.frameElRefs = new _common.RefMap(); // the fc-daygrid-day-frame
        _this.fgElRefs = new _common.RefMap(); // the fc-daygrid-day-events
        _this.segHarnessRefs = new _common.RefMap(); // indexed by "instanceId:firstCol"
        _this.rootElRef = _common.createRef();
        _this.state = {
            framePositions: null,
            maxContentHeight: null,
            eventInstanceHeights: {
            }
        };
        return _this;
    }
    TableRow1.prototype.render = function() {
        var _this = this;
        var _a = this, props = _a.props, state = _a.state, context = _a.context;
        var options = context.options;
        var colCnt = props.cells.length;
        var businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
        var bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
        var highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
        var mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);
        var _b = computeFgSegPlacement(_common.sortEventSegs(props.fgEventSegs, options.eventOrder), props.dayMaxEvents, props.dayMaxEventRows, options.eventOrderStrict, state.eventInstanceHeights, state.maxContentHeight, props.cells), singleColPlacements = _b.singleColPlacements, multiColPlacements = _b.multiColPlacements, moreCnts = _b.moreCnts, moreMarginTops = _b.moreMarginTops;
        var isForcedInvisible = props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {
        };
        return _common.createElement("tr", {
            ref: this.rootElRef,
            role: "row"
        }, props.renderIntro && props.renderIntro(), props.cells.map(function(cell, col) {
            var normalFgNodes = _this.renderFgSegs(col, props.forPrint ? singleColPlacements[col] : multiColPlacements[col], props.todayRange, isForcedInvisible);
            var mirrorFgNodes = _this.renderFgSegs(col, buildMirrorPlacements(mirrorSegsByCol[col], multiColPlacements), props.todayRange, {
            }, Boolean(props.eventDrag), Boolean(props.eventResize), false);
            return _common.createElement(TableCell, {
                key: cell.key,
                elRef: _this.cellElRefs.createRef(cell.key),
                innerElRef: _this.frameElRefs.createRef(cell.key),
                dateProfile: props.dateProfile,
                date: cell.date,
                showDayNumber: props.showDayNumbers,
                showWeekNumber: props.showWeekNumbers && col === 0,
                forceDayTop: props.showWeekNumbers /* even displaying weeknum for row, not necessarily day */ ,
                todayRange: props.todayRange,
                eventSelection: props.eventSelection,
                eventDrag: props.eventDrag,
                eventResize: props.eventResize,
                extraHookProps: cell.extraHookProps,
                extraDataAttrs: cell.extraDataAttrs,
                extraClassNames: cell.extraClassNames,
                extraDateSpan: cell.extraDateSpan,
                moreCnt: moreCnts[col],
                moreMarginTop: moreMarginTops[col],
                singlePlacements: singleColPlacements[col],
                fgContentElRef: _this.fgElRefs.createRef(cell.key),
                fgContent: _common.createElement(_common.Fragment, null, _common.createElement(_common.Fragment, null, normalFgNodes), _common.createElement(_common.Fragment, null, mirrorFgNodes)),
                bgContent: _common.createElement(_common.Fragment, null, _this.renderFillSegs(highlightSegsByCol[col], 'highlight'), _this.renderFillSegs(businessHoursByCol[col], 'non-business'), _this.renderFillSegs(bgEventSegsByCol[col], 'bg-event'))
            });
        }));
    };
    TableRow1.prototype.componentDidMount = function() {
        this.updateSizing(true);
    };
    TableRow1.prototype.componentDidUpdate = function(prevProps, prevState) {
        var currentProps = this.props;
        this.updateSizing(!_common.isPropsEqual(prevProps, currentProps));
    };
    TableRow1.prototype.getHighlightSegs = function() {
        var props = this.props;
        if (props.eventDrag && props.eventDrag.segs.length) return props.eventDrag.segs;
        if (props.eventResize && props.eventResize.segs.length) return props.eventResize.segs;
        return props.dateSelectionSegs;
    };
    TableRow1.prototype.getMirrorSegs = function() {
        var props = this.props;
        if (props.eventResize && props.eventResize.segs.length) return props.eventResize.segs;
        return [];
    };
    TableRow1.prototype.renderFgSegs = function(col, segPlacements, todayRange, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
        var context = this.context;
        var eventSelection = this.props.eventSelection;
        var framePositions = this.state.framePositions;
        var defaultDisplayEventEnd = this.props.cells.length === 1; // colCnt === 1
        var isMirror = isDragging || isResizing || isDateSelecting;
        var nodes = [];
        if (framePositions) for(var _i = 0, segPlacements_1 = segPlacements; _i < segPlacements_1.length; _i++){
            var placement = segPlacements_1[_i];
            var seg = placement.seg;
            var instanceId = seg.eventRange.instance.instanceId;
            var key = instanceId + ':' + col;
            var isVisible = placement.isVisible && !isForcedInvisible[instanceId];
            var isAbsolute = placement.isAbsolute;
            var left = '';
            var right = '';
            if (isAbsolute) {
                if (context.isRtl) {
                    right = 0;
                    left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
                } else {
                    left = 0;
                    right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
                }
            }
            /*
                known bug: events that are force to be list-item but span multiple days still take up space in later columns
                todo: in print view, for multi-day events, don't display title within non-start/end segs
                */ nodes.push(_common.createElement("div", {
                className: 'fc-daygrid-event-harness' + (isAbsolute ? ' fc-daygrid-event-harness-abs' : ''),
                key: key,
                ref: isMirror ? null : this.segHarnessRefs.createRef(key),
                style: {
                    visibility: isVisible ? '' : 'hidden',
                    marginTop: isAbsolute ? '' : placement.marginTop,
                    top: isAbsolute ? placement.absoluteTop : '',
                    left: left,
                    right: right
                }
            }, hasListItemDisplay(seg) ? _common.createElement(TableListItemEvent, _tslib.__assign({
                seg: seg,
                isDragging: isDragging,
                isSelected: instanceId === eventSelection,
                defaultDisplayEventEnd: defaultDisplayEventEnd
            }, _common.getSegMeta(seg, todayRange))) : _common.createElement(TableBlockEvent, _tslib.__assign({
                seg: seg,
                isDragging: isDragging,
                isResizing: isResizing,
                isDateSelecting: isDateSelecting,
                isSelected: instanceId === eventSelection,
                defaultDisplayEventEnd: defaultDisplayEventEnd
            }, _common.getSegMeta(seg, todayRange)))));
        }
        return nodes;
    };
    TableRow1.prototype.renderFillSegs = function(segs, fillType) {
        var isRtl = this.context.isRtl;
        var todayRange = this.props.todayRange;
        var framePositions = this.state.framePositions;
        var nodes = [];
        if (framePositions) for(var _i = 0, segs_1 = segs; _i < segs_1.length; _i++){
            var seg = segs_1[_i];
            var leftRightCss = isRtl ? {
                right: 0,
                left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol]
            } : {
                left: 0,
                right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol]
            };
            nodes.push(_common.createElement("div", {
                key: _common.buildEventRangeKey(seg.eventRange),
                className: "fc-daygrid-bg-harness",
                style: leftRightCss
            }, fillType === 'bg-event' ? _common.createElement(_common.BgEvent, _tslib.__assign({
                seg: seg
            }, _common.getSegMeta(seg, todayRange))) : _common.renderFill(fillType)));
        }
        return _common.createElement.apply(void 0, _tslib.__spreadArray([
            _common.Fragment,
            {
            }
        ], nodes));
    };
    TableRow1.prototype.updateSizing = function(isExternalSizingChange) {
        var _a = this, props = _a.props, frameElRefs = _a.frameElRefs;
        if (!props.forPrint && props.clientWidth !== null // positioning ready?
        ) {
            if (isExternalSizingChange) {
                var frameEls = props.cells.map(function(cell) {
                    return frameElRefs.currentMap[cell.key];
                });
                if (frameEls.length) {
                    var originEl = this.rootElRef.current;
                    this.setState({
                        framePositions: new _common.PositionCache(originEl, frameEls, true, false)
                    });
                }
            }
            var oldInstanceHeights = this.state.eventInstanceHeights;
            var newInstanceHeights = this.queryEventInstanceHeights();
            var limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
            this.setState({
                // HACK to prevent oscillations of events being shown/hidden from max-event-rows
                // Essentially, once you compute an element's height, never null-out.
                // TODO: always display all events, as visibility:hidden?
                eventInstanceHeights: _tslib.__assign(_tslib.__assign({
                }, oldInstanceHeights), newInstanceHeights),
                maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null
            });
        }
    };
    TableRow1.prototype.queryEventInstanceHeights = function() {
        var segElMap = this.segHarnessRefs.currentMap;
        var eventInstanceHeights = {
        };
        // get the max height amongst instance segs
        for(var key in segElMap){
            var height = Math.round(segElMap[key].getBoundingClientRect().height);
            var instanceId = key.split(':')[0]; // deconstruct how renderFgSegs makes the key
            eventInstanceHeights[instanceId] = Math.max(eventInstanceHeights[instanceId] || 0, height);
        }
        return eventInstanceHeights;
    };
    TableRow1.prototype.computeMaxContentHeight = function() {
        var firstKey = this.props.cells[0].key;
        var cellEl = this.cellElRefs.currentMap[firstKey];
        var fcContainerEl = this.fgElRefs.currentMap[firstKey];
        return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
    };
    TableRow1.prototype.getCellEls = function() {
        var elMap = this.cellElRefs.currentMap;
        return this.props.cells.map(function(cell) {
            return elMap[cell.key];
        });
    };
    return TableRow1;
}(_common.DateComponent);
TableRow.addStateEquality({
    eventInstanceHeights: _common.isPropsEqual
});
function buildMirrorPlacements(mirrorSegs, colPlacements) {
    if (!mirrorSegs.length) return [];
    var topsByInstanceId = buildAbsoluteTopHash(colPlacements); // TODO: cache this at first render?
    return mirrorSegs.map(function(seg) {
        return {
            seg: seg,
            isVisible: true,
            isAbsolute: true,
            absoluteTop: topsByInstanceId[seg.eventRange.instance.instanceId],
            marginTop: 0
        };
    });
}
function buildAbsoluteTopHash(colPlacements) {
    var topsByInstanceId = {
    };
    for(var _i = 0, colPlacements_1 = colPlacements; _i < colPlacements_1.length; _i++){
        var placements = colPlacements_1[_i];
        for(var _a = 0, placements_1 = placements; _a < placements_1.length; _a++){
            var placement = placements_1[_a];
            topsByInstanceId[placement.seg.eventRange.instance.instanceId] = placement.absoluteTop;
        }
    }
    return topsByInstanceId;
}
var Table = function(_super) {
    _tslib.__extends(Table1, _super);
    function Table1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.splitBusinessHourSegs = _common.memoize(splitSegsByRow);
        _this.splitBgEventSegs = _common.memoize(splitSegsByRow);
        _this.splitFgEventSegs = _common.memoize(splitSegsByRow);
        _this.splitDateSelectionSegs = _common.memoize(splitSegsByRow);
        _this.splitEventDrag = _common.memoize(splitInteractionByRow);
        _this.splitEventResize = _common.memoize(splitInteractionByRow);
        _this.rowRefs = new _common.RefMap();
        _this.handleRootEl = function(rootEl) {
            _this.rootEl = rootEl;
            if (rootEl) _this.context.registerInteractiveComponent(_this, {
                el: rootEl,
                isHitComboAllowed: _this.props.isHitComboAllowed
            });
            else _this.context.unregisterInteractiveComponent(_this);
        };
        return _this;
    }
    Table1.prototype.render = function() {
        var _this = this;
        var props = this.props;
        var dateProfile = props.dateProfile, dayMaxEventRows = props.dayMaxEventRows, dayMaxEvents = props.dayMaxEvents, expandRows = props.expandRows;
        var rowCnt = props.cells.length;
        var businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
        var bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
        var fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
        var dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
        var eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
        var eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
        var limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true;
        // if rows can't expand to fill fixed height, can't do balanced-height event limit
        // TODO: best place to normalize these options?
        if (limitViaBalanced && !expandRows) {
            limitViaBalanced = false;
            dayMaxEventRows = null;
            dayMaxEvents = null;
        }
        var classNames = [
            'fc-daygrid-body',
            limitViaBalanced ? 'fc-daygrid-body-balanced' : 'fc-daygrid-body-unbalanced',
            expandRows ? '' : 'fc-daygrid-body-natural'
        ];
        return _common.createElement("div", {
            className: classNames.join(' '),
            ref: this.handleRootEl,
            style: {
                // these props are important to give this wrapper correct dimensions for interactions
                // TODO: if we set it here, can we avoid giving to inner tables?
                width: props.clientWidth,
                minWidth: props.tableMinWidth
            }
        }, _common.createElement(_common.NowTimer, {
            unit: "day"
        }, function(nowDate, todayRange) {
            return _common.createElement(_common.Fragment, null, _common.createElement("table", {
                role: "presentation",
                className: "fc-scrollgrid-sync-table",
                style: {
                    width: props.clientWidth,
                    minWidth: props.tableMinWidth,
                    height: expandRows ? props.clientHeight : ''
                }
            }, props.colGroupNode, _common.createElement("tbody", {
                role: "presentation"
            }, props.cells.map(function(cells, row) {
                return _common.createElement(TableRow, {
                    ref: _this.rowRefs.createRef(row),
                    key: cells.length ? cells[0].date.toISOString() : row // in case there are no cells (like when resource view is loading)
                    ,
                    showDayNumbers: rowCnt > 1,
                    showWeekNumbers: props.showWeekNumbers,
                    todayRange: todayRange,
                    dateProfile: dateProfile,
                    cells: cells,
                    renderIntro: props.renderRowIntro,
                    businessHourSegs: businessHourSegsByRow[row],
                    eventSelection: props.eventSelection,
                    bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay),
                    fgEventSegs: fgEventSegsByRow[row],
                    dateSelectionSegs: dateSelectionSegsByRow[row],
                    eventDrag: eventDragByRow[row],
                    eventResize: eventResizeByRow[row],
                    dayMaxEvents: dayMaxEvents,
                    dayMaxEventRows: dayMaxEventRows,
                    clientWidth: props.clientWidth,
                    clientHeight: props.clientHeight,
                    forPrint: props.forPrint
                });
            }))));
        }));
    };
    // Hit System
    // ----------------------------------------------------------------------------------------------------
    Table1.prototype.prepareHits = function() {
        this.rowPositions = new _common.PositionCache(this.rootEl, this.rowRefs.collect().map(function(rowObj) {
            return rowObj.getCellEls()[0];
        }), false, true);
        this.colPositions = new _common.PositionCache(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), true, false);
    };
    Table1.prototype.queryHit = function(positionLeft, positionTop) {
        var _a = this, colPositions = _a.colPositions, rowPositions = _a.rowPositions;
        var col = colPositions.leftToIndex(positionLeft);
        var row = rowPositions.topToIndex(positionTop);
        if (row != null && col != null) {
            var cell = this.props.cells[row][col];
            return {
                dateProfile: this.props.dateProfile,
                dateSpan: _tslib.__assign({
                    range: this.getCellRange(row, col),
                    allDay: true
                }, cell.extraDateSpan),
                dayEl: this.getCellEl(row, col),
                rect: {
                    left: colPositions.lefts[col],
                    right: colPositions.rights[col],
                    top: rowPositions.tops[row],
                    bottom: rowPositions.bottoms[row]
                },
                layer: 0
            };
        }
        return null;
    };
    Table1.prototype.getCellEl = function(row, col) {
        return this.rowRefs.currentMap[row].getCellEls()[col]; // TODO: not optimal
    };
    Table1.prototype.getCellRange = function(row, col) {
        var start = this.props.cells[row][col].date;
        var end = _common.addDays(start, 1);
        return {
            start: start,
            end: end
        };
    };
    return Table1;
}(_common.DateComponent);
function isSegAllDay(seg) {
    return seg.eventRange.def.allDay;
}
var DayTableSlicer = function(_super) {
    _tslib.__extends(DayTableSlicer1, _super);
    function DayTableSlicer1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.forceDayIfListItem = true;
        return _this;
    }
    DayTableSlicer1.prototype.sliceRange = function(dateRange, dayTableModel) {
        return dayTableModel.sliceRange(dateRange);
    };
    return DayTableSlicer1;
}(_common.Slicer);
var DayTable = function(_super) {
    _tslib.__extends(DayTable1, _super);
    function DayTable1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slicer = new DayTableSlicer();
        _this.tableRef = _common.createRef();
        return _this;
    }
    DayTable1.prototype.render = function() {
        var _a = this, props = _a.props, context = _a.context;
        return _common.createElement(Table, _tslib.__assign({
            ref: this.tableRef
        }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), {
            dateProfile: props.dateProfile,
            cells: props.dayTableModel.cells,
            colGroupNode: props.colGroupNode,
            tableMinWidth: props.tableMinWidth,
            renderRowIntro: props.renderRowIntro,
            dayMaxEvents: props.dayMaxEvents,
            dayMaxEventRows: props.dayMaxEventRows,
            showWeekNumbers: props.showWeekNumbers,
            expandRows: props.expandRows,
            headerAlignElRef: props.headerAlignElRef,
            clientWidth: props.clientWidth,
            clientHeight: props.clientHeight,
            forPrint: props.forPrint
        }));
    };
    return DayTable1;
}(_common.DateComponent);
var DayTableView = function(_super) {
    _tslib.__extends(DayTableView1, _super);
    function DayTableView1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buildDayTableModel = _common.memoize(buildDayTableModel);
        _this.headerRef = _common.createRef();
        _this.tableRef = _common.createRef();
        return _this;
    }
    DayTableView1.prototype.render = function() {
        var _this = this;
        var _a = this.context, options = _a.options, dateProfileGenerator = _a.dateProfileGenerator;
        var props = this.props;
        var dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
        var headerContent = options.dayHeaders && _common.createElement(_common.DayHeader, {
            ref: this.headerRef,
            dateProfile: props.dateProfile,
            dates: dayTableModel.headerDates,
            datesRepDistinctDays: dayTableModel.rowCnt === 1
        });
        var bodyContent = function(contentArg) {
            return _common.createElement(DayTable, {
                ref: _this.tableRef,
                dateProfile: props.dateProfile,
                dayTableModel: dayTableModel,
                businessHours: props.businessHours,
                dateSelection: props.dateSelection,
                eventStore: props.eventStore,
                eventUiBases: props.eventUiBases,
                eventSelection: props.eventSelection,
                eventDrag: props.eventDrag,
                eventResize: props.eventResize,
                nextDayThreshold: options.nextDayThreshold,
                colGroupNode: contentArg.tableColGroupNode,
                tableMinWidth: contentArg.tableMinWidth,
                dayMaxEvents: options.dayMaxEvents,
                dayMaxEventRows: options.dayMaxEventRows,
                showWeekNumbers: options.weekNumbers,
                expandRows: !props.isHeightAuto,
                headerAlignElRef: _this.headerElRef,
                clientWidth: contentArg.clientWidth,
                clientHeight: contentArg.clientHeight,
                forPrint: props.forPrint
            });
        };
        return options.dayMinWidth ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth) : this.renderSimpleLayout(headerContent, bodyContent);
    };
    return DayTableView1;
}(TableView);
function buildDayTableModel(dateProfile, dateProfileGenerator) {
    var daySeries = new _common.DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
    return new _common.DayTableModel(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}
var TableDateProfileGenerator = function(_super) {
    _tslib.__extends(TableDateProfileGenerator1, _super);
    function TableDateProfileGenerator1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Computes the date range that will be rendered.
    TableDateProfileGenerator1.prototype.buildRenderRange = function(currentRange, currentRangeUnit, isRangeAllDay) {
        var dateEnv = this.props.dateEnv;
        var renderRange = _super.prototype.buildRenderRange.call(this, currentRange, currentRangeUnit, isRangeAllDay);
        var start = renderRange.start;
        var end = renderRange.end;
        var endOfWeek;
        // year and month views should be aligned with weeks. this is already done for week
        if (/^(year|month)$/.test(currentRangeUnit)) {
            start = dateEnv.startOfWeek(start);
            // make end-of-week if not already
            endOfWeek = dateEnv.startOfWeek(end);
            if (endOfWeek.valueOf() !== end.valueOf()) end = _common.addWeeks(endOfWeek, 1);
        }
        // ensure 6 weeks
        if (this.props.monthMode && this.props.fixedWeekCount) {
            var rowCnt = Math.ceil(_common.diffWeeks(start, end));
            end = _common.addWeeks(end, 6 - rowCnt);
        }
        return {
            start: start,
            end: end
        };
    };
    return TableDateProfileGenerator1;
}(_common.DateProfileGenerator);
var main = _common.createPlugin({
    initialView: 'dayGridMonth',
    views: {
        dayGrid: {
            component: DayTableView,
            dateProfileGeneratorClass: TableDateProfileGenerator
        },
        dayGridDay: {
            type: 'dayGrid',
            duration: {
                days: 1
            }
        },
        dayGridWeek: {
            type: 'dayGrid',
            duration: {
                weeks: 1
            }
        },
        dayGridMonth: {
            type: 'dayGrid',
            duration: {
                months: 1
            },
            monthMode: true,
            fixedWeekCount: true
        }
    }
});
exports.default = main;

},{"./main.css":"efynY","@fullcalendar/common":"2E3LE","tslib":"lRdW5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"efynY":[function() {},{}],"hbTZq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventGenerator", ()=>eventGenerator
);
var _rrule = require("rrule");
const routeARule = new _rrule.RRule({
    dtstart: new Date(Date.UTC(2021, 7, 4)),
    freq: _rrule.RRule.WEEKLY,
    interval: 2,
    byweekday: [
        1,
        2,
        3,
        4,
        5
    ],
    until: new Date(new Date().setMonth(new Date().getMonth() + 6))
});
const routeBRule = new _rrule.RRule({
    dtstart: new Date(Date.UTC(2021, 7, 11)),
    freq: _rrule.RRule.WEEKLY,
    interval: 2,
    byweekday: [
        1,
        2,
        3,
        4,
        5
    ],
    until: new Date(new Date().setMonth(new Date().getMonth() + 6))
});
const oddAddressRule = new _rrule.RRule({
    dtstart: new Date(Date.UTC(2021, 7)),
    freq: _rrule.RRule.WEEKLY,
    interval: 1,
    bymonth: [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ],
    byweekday: [
        2,
        6
    ],
    until: new Date(new Date().setMonth(new Date().getMonth() + 6))
});
const evenAddressRule = new _rrule.RRule({
    dtstart: new Date(Date.UTC(2021, 7)),
    freq: _rrule.RRule.WEEKLY,
    interval: 1,
    bymonth: [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ],
    byweekday: [
        0,
        3
    ],
    until: new Date(new Date().setMonth(new Date().getMonth() + 6))
});
const novToFebruaryRule = new _rrule.RRule({
    dtstart: new Date(Date.UTC(2021, 7)),
    freq: _rrule.RRule.WEEKLY,
    interval: 1,
    bymonth: [
        1,
        2,
        11,
        12
    ],
    byweekday: [
        0,
        6
    ],
    until: new Date(new Date().setMonth(new Date().getMonth() + 6))
});
const eventGenerator = (type)=>{
    // array to hold events
    const eventArray = [];
    // generate events for FullCalendar and return them
    switch(type){
        case 'A':
            routeARule.all().forEach((event)=>{
                eventArray.push({
                    start: event,
                    allDay: true,
                    overlap: false,
                    display: 'background',
                    backgroundColor: '#51586E'
                });
            });
            return eventArray;
        case 'B':
            routeBRule.all().forEach((event)=>{
                eventArray.push({
                    start: event,
                    allDay: true,
                    overlap: false,
                    display: 'background',
                    backgroundColor: '#51586E'
                });
            });
            return eventArray;
        case 'ODD':
            const allOddRules = [
                ...oddAddressRule.all(),
                ...novToFebruaryRule.all()
            ];
            allOddRules.forEach((event)=>{
                eventArray.push({
                    start: event,
                    allDay: true,
                    overlap: false,
                    display: 'background',
                    backgroundColor: '#DBC381'
                });
            });
            return eventArray;
        case 'EVEN':
            const allEvenRules = [
                ...evenAddressRule.all(),
                ...novToFebruaryRule.all()
            ];
            allEvenRules.forEach((event)=>{
                eventArray.push({
                    start: event,
                    allDay: true,
                    overlap: false,
                    display: 'background',
                    backgroundColor: '#DBC381'
                });
            });
            return eventArray;
    }
};

},{"rrule":"3a2Xh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kn9T2","k0hny"], null, "parcelRequire630b")

//# sourceMappingURL=Calendar.1f0746f0.js.map
