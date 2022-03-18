(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("uuid"), require("canvg"));
	else if(typeof define === 'function' && define.amd)
		define(["uuid", "canvg"], factory);
	else if(typeof exports === 'object')
		exports["MMEditor"] = factory(require("uuid"), require("canvg"));
	else
		root["MMEditor"] = factory(root["uuid"], root["canvg"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__62__, __WEBPACK_EXTERNAL_MODULE__262__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 505);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ┌────────────────────────────────────────────────────────────┐ \\
// │ Eve 0.5.4 - JavaScript Events Library                      │ \\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
// └────────────────────────────────────────────────────────────┘ \\

(function (glob) {
    var version = "0.5.4",
        has = "hasOwnProperty",
        separator = /[\.\/]/,
        comaseparator = /\s*,\s*/,
        wildcard = "*",
        numsort = function (a, b) {
            return a - b;
        },
        current_event,
        stop,
        events = {n: {}},
        firstDefined = function () {
            for (var i = 0, ii = this.length; i < ii; i++) {
                if (typeof this[i] != "undefined") {
                    return this[i];
                }
            }
        },
        lastDefined = function () {
            var i = this.length;
            while (--i) {
                if (typeof this[i] != "undefined") {
                    return this[i];
                }
            }
        },
        objtos = Object.prototype.toString,
        Str = String,
        isArray = Array.isArray || function (ar) {
            return ar instanceof Array || objtos.call(ar) == "[object Array]";
        },
    /*\
     * eve
     [ method ]

     * Fires event with given `name`, given scope and other parameters.

     - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
     - scope (object) context for the event handlers
     - varargs (...) the rest of arguments will be sent to event handlers

     = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
    \*/
        eve = function (name, scope) {
            var oldstop = stop,
                args = Array.prototype.slice.call(arguments, 2),
                listeners = eve.listeners(name),
                z = 0,
                l,
                indexed = [],
                queue = {},
                out = [],
                ce = current_event;
            out.firstDefined = firstDefined;
            out.lastDefined = lastDefined;
            current_event = name;
            stop = 0;
            for (var i = 0, ii = listeners.length; i < ii; i++) if ("zIndex" in listeners[i]) {
                indexed.push(listeners[i].zIndex);
                if (listeners[i].zIndex < 0) {
                    queue[listeners[i].zIndex] = listeners[i];
                }
            }
            indexed.sort(numsort);
            while (indexed[z] < 0) {
                l = queue[indexed[z++]];
                out.push(l.apply(scope, args));
                if (stop) {
                    stop = oldstop;
                    return out;
                }
            }
            for (i = 0; i < ii; i++) {
                l = listeners[i];
                if ("zIndex" in l) {
                    if (l.zIndex == indexed[z]) {
                        out.push(l.apply(scope, args));
                        if (stop) {
                            break;
                        }
                        do {
                            z++;
                            l = queue[indexed[z]];
                            l && out.push(l.apply(scope, args));
                            if (stop) {
                                break;
                            }
                        } while (l)
                    } else {
                        queue[l.zIndex] = l;
                    }
                } else {
                    out.push(l.apply(scope, args));
                    if (stop) {
                        break;
                    }
                }
            }
            stop = oldstop;
            current_event = ce;
            return out;
        };
    // Undocumented. Debug only.
    eve._events = events;
    /*\
     * eve.listeners
     [ method ]

     * Internal method which gives you array of all event handlers that will be triggered by the given `name`.

     - name (string) name of the event, dot (`.`) or slash (`/`) separated

     = (array) array of event handlers
    \*/
    eve.listeners = function (name) {
        var names = isArray(name) ? name : name.split(separator),
            e = events,
            item,
            items,
            k,
            i,
            ii,
            j,
            jj,
            nes,
            es = [e],
            out = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            nes = [];
            for (j = 0, jj = es.length; j < jj; j++) {
                e = es[j].n;
                items = [e[names[i]], e[wildcard]];
                k = 2;
                while (k--) {
                    item = items[k];
                    if (item) {
                        nes.push(item);
                        out = out.concat(item.f || []);
                    }
                }
            }
            es = nes;
        }
        return out;
    };
    /*\
     * eve.separator
     [ method ]

     * If for some reasons you don’t like default separators (`.` or `/`) you can specify yours
     * here. Be aware that if you pass a string longer than one character it will be treated as
     * a list of characters.

     - separator (string) new separator. Empty string resets to default: `.` or `/`.
    \*/
    eve.separator = function (sep) {
        if (sep) {
            sep = Str(sep).replace(/(?=[\.\^\]\[\-])/g, "\\");
            sep = "[" + sep + "]";
            separator = new RegExp(sep);
        } else {
            separator = /[\.\/]/;
        }
    };
    /*\
     * eve.on
     [ method ]
     **
     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
     | eve.on("*.under.*", f);
     | eve("mouse.under.floor"); // triggers f
     * Use @eve to trigger the listener.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     - name (array) if you don’t want to use separators, you can use array of strings
     - f (function) event handler function
     **
     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment.
     > Example:
     | eve.on("mouse", eatIt)(2);
     | eve.on("mouse", scream);
     | eve.on("mouse", catchIt)(1);
     * This will ensure that `catchIt` function will be called before `eatIt`.
     *
     * If you want to put your handler before non-indexed handlers, specify a negative value.
     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
    \*/
    eve.on = function (name, f) {
        if (typeof f != "function") {
            return function () {};
        }
        var names = isArray(name) ? isArray(name[0]) ? name : [name] : Str(name).split(comaseparator);
        for (var i = 0, ii = names.length; i < ii; i++) {
            (function (name) {
                var names = isArray(name) ? name : Str(name).split(separator),
                    e = events,
                    exist;
                for (var i = 0, ii = names.length; i < ii; i++) {
                    e = e.n;
                    e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {n: {}});
                }
                e.f = e.f || [];
                for (i = 0, ii = e.f.length; i < ii; i++) if (e.f[i] == f) {
                    exist = true;
                    break;
                }
                !exist && e.f.push(f);
            }(names[i]));
        }
        return function (zIndex) {
            if (+zIndex == +zIndex) {
                f.zIndex = +zIndex;
            }
        };
    };
    /*\
     * eve.f
     [ method ]
     **
     * Returns function that will fire given event with optional arguments.
     * Arguments that will be passed to the result function will be also
     * concated to the list of final arguments.
     | el.onclick = eve.f("click", 1, 2);
     | eve.on("click", function (a, b, c) {
     |     console.log(a, b, c); // 1, 2, [event object]
     | });
     - event (string) event name
     - varargs (…) and any other arguments
     = (function) possible event handler function
    \*/
    eve.f = function (event) {
        var attrs = [].slice.call(arguments, 1);
        return function () {
            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
        };
    };
    /*\
     * eve.stop
     [ method ]
     **
     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
    \*/
    eve.stop = function () {
        stop = 1;
    };
    /*\
     * eve.nt
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     - subname (string) #optional subname of the event
     **
     = (string) name of the event, if `subname` is not specified
     * or
     = (boolean) `true`, if current event’s name contains `subname`
    \*/
    eve.nt = function (subname) {
        var cur = isArray(current_event) ? current_event.join(".") : current_event;
        if (subname) {
            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(cur);
        }
        return cur;
    };
    /*\
     * eve.nts
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     **
     = (array) names of the event
    \*/
    eve.nts = function () {
        return isArray(current_event) ? current_event : current_event.split(separator);
    };
    /*\
     * eve.off
     [ method ]
     **
     * Removes given function from the list of event listeners assigned to given name.
     * If no arguments specified all the events will be cleared.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
    \*/
    /*\
     * eve.unbind
     [ method ]
     **
     * See @eve.off
    \*/
    eve.off = eve.unbind = function (name, f) {
        if (!name) {
            eve._events = events = {n: {}};
            return;
        }
        var names = isArray(name) ? isArray(name[0]) ? name : [name] : Str(name).split(comaseparator);
        if (names.length > 1) {
            for (var i = 0, ii = names.length; i < ii; i++) {
                eve.off(names[i], f);
            }
            return;
        }
        names = isArray(name) ? name : Str(name).split(separator);
        var e,
            key,
            splice,
            i, ii, j, jj,
            cur = [events],
            inodes = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            for (j = 0; j < cur.length; j += splice.length - 2) {
                splice = [j, 1];
                e = cur[j].n;
                if (names[i] != wildcard) {
                    if (e[names[i]]) {
                        splice.push(e[names[i]]);
                        inodes.unshift({
                            n: e,
                            name: names[i]
                        });
                    }
                } else {
                    for (key in e) if (e[has](key)) {
                        splice.push(e[key]);
                        inodes.unshift({
                            n: e,
                            name: key
                        });
                    }
                }
                cur.splice.apply(cur, splice);
            }
        }
        for (i = 0, ii = cur.length; i < ii; i++) {
            e = cur[i];
            while (e.n) {
                if (f) {
                    if (e.f) {
                        for (j = 0, jj = e.f.length; j < jj; j++) if (e.f[j] == f) {
                            e.f.splice(j, 1);
                            break;
                        }
                        !e.f.length && delete e.f;
                    }
                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                        var funcs = e.n[key].f;
                        for (j = 0, jj = funcs.length; j < jj; j++) if (funcs[j] == f) {
                            funcs.splice(j, 1);
                            break;
                        }
                        !funcs.length && delete e.n[key].f;
                    }
                } else {
                    delete e.f;
                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                        delete e.n[key].f;
                    }
                }
                e = e.n;
            }
        }
        // prune inner nodes in path
        prune: for (i = 0, ii = inodes.length; i < ii; i++) {
            e = inodes[i];
            for (key in e.n[e.name].f) {
                // not empty (has listeners)
                continue prune;
            }
            for (key in e.n[e.name].n) {
                // not empty (has children)
                continue prune;
            }
            // is empty
            delete e.n[e.name];
        }
    };
    /*\
     * eve.once
     [ method ]
     **
     * Binds given event handler with a given name to only run once then unbind itself.
     | eve.once("login", f);
     | eve("login"); // triggers f
     | eve("login"); // no listeners
     * Use @eve to trigger the listener.
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) same return function as @eve.on
    \*/
    eve.once = function (name, f) {
        var f2 = function () {
            eve.off(name, f2);
            return f.apply(this, arguments);
        };
        return eve.on(name, f2);
    };
    /*\
     * eve.version
     [ property (string) ]
     **
     * Current version of the library.
    \*/
    eve.version = version;
    eve.toString = function () {
        return "You are running Eve " + version;
    };
    glob.eve = eve;
     true && module.exports ? module.exports = eve :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () { return eve; }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(typeof window != "undefined" ? window : this);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var getOwnPropertyDescriptor = __webpack_require__(41).f;
var createNonEnumerableProperty = __webpack_require__(43);
var redefine = __webpack_require__(21);
var setGlobal = __webpack_require__(137);
var copyConstructorProperties = __webpack_require__(265);
var isForced = __webpack_require__(101);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(171)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* global window */

var lodash;

if (true) {
  try {
    lodash = {
      cloneDeep: __webpack_require__(438),
      constant: __webpack_require__(162),
      defaults: __webpack_require__(439),
      each: __webpack_require__(227),
      filter: __webpack_require__(230),
      find: __webpack_require__(440),
      flatten: __webpack_require__(257),
      forEach: __webpack_require__(228),
      forIn: __webpack_require__(447),
      has:  __webpack_require__(241),
      isUndefined: __webpack_require__(242),
      last: __webpack_require__(448),
      map: __webpack_require__(243),
      mapValues: __webpack_require__(449),
      max: __webpack_require__(450),
      merge: __webpack_require__(452),
      min: __webpack_require__(458),
      minBy: __webpack_require__(459),
      now: __webpack_require__(460),
      pick: __webpack_require__(461),
      range: __webpack_require__(466),
      reduce: __webpack_require__(245),
      sortBy: __webpack_require__(469),
      uniqueId: __webpack_require__(474),
      values: __webpack_require__(250),
      zipObject: __webpack_require__(475),
    };
  } catch (e) {
    // continue regardless of error
  }
}

if (!lodash) {
  lodash = window._;
}

module.exports = lodash;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument === 'function';
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var shared = __webpack_require__(94);
var hasOwn = __webpack_require__(18);
var uid = __webpack_require__(95);
var NATIVE_SYMBOL = __webpack_require__(135);
var USE_SYMBOL_AS_UID = __webpack_require__(172);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
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

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(268);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(6);

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : isCallable(it);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(15);
var IE8_DOM_DEFINE = __webpack_require__(174);
var anObject = __webpack_require__(13);
var toPropertyKey = __webpack_require__(92);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint "no-console": off */



var _ = __webpack_require__(5);
var Graph = __webpack_require__(26).Graph;

module.exports = {
  addDummyNode: addDummyNode,
  simplify: simplify,
  asNonCompoundGraph: asNonCompoundGraph,
  successorWeights: successorWeights,
  predecessorWeights: predecessorWeights,
  intersectRect: intersectRect,
  buildLayerMatrix: buildLayerMatrix,
  normalizeRanks: normalizeRanks,
  removeEmptyRanks: removeEmptyRanks,
  addBorderNode: addBorderNode,
  maxRank: maxRank,
  partition: partition,
  time: time,
  notime: notime
};

/*
 * Adds a dummy node to the graph and return v.
 */
function addDummyNode(g, type, attrs, name) {
  var v;
  do {
    v = _.uniqueId(name);
  } while (g.hasNode(v));

  attrs.dummy = type;
  g.setNode(v, attrs);
  return v;
}

/*
 * Returns a new graph with only simple edges. Handles aggregation of data
 * associated with multi-edges.
 */
function simplify(g) {
  var simplified = new Graph().setGraph(g.graph());
  _.forEach(g.nodes(), function(v) { simplified.setNode(v, g.node(v)); });
  _.forEach(g.edges(), function(e) {
    var simpleLabel = simplified.edge(e.v, e.w) || { weight: 0, minlen: 1 };
    var label = g.edge(e);
    simplified.setEdge(e.v, e.w, {
      weight: simpleLabel.weight + label.weight,
      minlen: Math.max(simpleLabel.minlen, label.minlen)
    });
  });
  return simplified;
}

function asNonCompoundGraph(g) {
  var simplified = new Graph({ multigraph: g.isMultigraph() }).setGraph(g.graph());
  _.forEach(g.nodes(), function(v) {
    if (!g.children(v).length) {
      simplified.setNode(v, g.node(v));
    }
  });
  _.forEach(g.edges(), function(e) {
    simplified.setEdge(e, g.edge(e));
  });
  return simplified;
}

function successorWeights(g) {
  var weightMap = _.map(g.nodes(), function(v) {
    var sucs = {};
    _.forEach(g.outEdges(v), function(e) {
      sucs[e.w] = (sucs[e.w] || 0) + g.edge(e).weight;
    });
    return sucs;
  });
  return _.zipObject(g.nodes(), weightMap);
}

function predecessorWeights(g) {
  var weightMap = _.map(g.nodes(), function(v) {
    var preds = {};
    _.forEach(g.inEdges(v), function(e) {
      preds[e.v] = (preds[e.v] || 0) + g.edge(e).weight;
    });
    return preds;
  });
  return _.zipObject(g.nodes(), weightMap);
}

/*
 * Finds where a line starting at point ({x, y}) would intersect a rectangle
 * ({x, y, width, height}) if it were pointing at the rectangle's center.
 */
function intersectRect(rect, point) {
  var x = rect.x;
  var y = rect.y;

  // Rectangle intersection algorithm from:
  // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
  var dx = point.x - x;
  var dy = point.y - y;
  var w = rect.width / 2;
  var h = rect.height / 2;

  if (!dx && !dy) {
    throw new Error("Not possible to find intersection inside of the rectangle");
  }

  var sx, sy;
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    // Intersection is top or bottom of rect.
    if (dy < 0) {
      h = -h;
    }
    sx = h * dx / dy;
    sy = h;
  } else {
    // Intersection is left or right of rect.
    if (dx < 0) {
      w = -w;
    }
    sx = w;
    sy = w * dy / dx;
  }

  return { x: x + sx, y: y + sy };
}

/*
 * Given a DAG with each node assigned "rank" and "order" properties, this
 * function will produce a matrix with the ids of each node.
 */
function buildLayerMatrix(g) {
  var layering = _.map(_.range(maxRank(g) + 1), function() { return []; });
  _.forEach(g.nodes(), function(v) {
    var node = g.node(v);
    var rank = node.rank;
    if (!_.isUndefined(rank)) {
      layering[rank][node.order] = v;
    }
  });
  return layering;
}

/*
 * Adjusts the ranks for all nodes in the graph such that all nodes v have
 * rank(v) >= 0 and at least one node w has rank(w) = 0.
 */
function normalizeRanks(g) {
  var min = _.min(_.map(g.nodes(), function(v) { return g.node(v).rank; }));
  _.forEach(g.nodes(), function(v) {
    var node = g.node(v);
    if (_.has(node, "rank")) {
      node.rank -= min;
    }
  });
}

function removeEmptyRanks(g) {
  // Ranks may not start at 0, so we need to offset them
  var offset = _.min(_.map(g.nodes(), function(v) { return g.node(v).rank; }));

  var layers = [];
  _.forEach(g.nodes(), function(v) {
    var rank = g.node(v).rank - offset;
    if (!layers[rank]) {
      layers[rank] = [];
    }
    layers[rank].push(v);
  });

  var delta = 0;
  var nodeRankFactor = g.graph().nodeRankFactor;
  _.forEach(layers, function(vs, i) {
    if (_.isUndefined(vs) && i % nodeRankFactor !== 0) {
      --delta;
    } else if (delta) {
      _.forEach(vs, function(v) { g.node(v).rank += delta; });
    }
  });
}

function addBorderNode(g, prefix, rank, order) {
  var node = {
    width: 0,
    height: 0
  };
  if (arguments.length >= 4) {
    node.rank = rank;
    node.order = order;
  }
  return addDummyNode(g, "border", node, prefix);
}

function maxRank(g) {
  return _.max(_.map(g.nodes(), function(v) {
    var rank = g.node(v).rank;
    if (!_.isUndefined(rank)) {
      return rank;
    }
  }));
}

/*
 * Partition a collection into two groups: `lhs` and `rhs`. If the supplied
 * function returns true for an entry it goes into `lhs`. Otherwise it goes
 * into `rhs.
 */
function partition(collection, fn) {
  var result = { lhs: [], rhs: [] };
  _.forEach(collection, function(value) {
    if (fn(value)) {
      result.lhs.push(value);
    } else {
      result.rhs.push(value);
    }
  });
  return result;
}

/*
 * Returns a new function that wraps `fn` with a timer. The wrapper logs the
 * time it takes to execute the function.
 */
function time(name, fn) {
  var start = _.now();
  try {
    return fn();
  } finally {
    console.log(name + " time: " + (_.now() - start) + "ms");
  }
}

function notime(name, fn) {
  return fn();
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(19);

var hasOwnProperty = {}.hasOwnProperty;

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(38);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(102);

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var isCallable = __webpack_require__(6);
var hasOwn = __webpack_require__(18);
var createNonEnumerableProperty = __webpack_require__(43);
var setGlobal = __webpack_require__(137);
var inspectSource = __webpack_require__(97);
var InternalStateModule = __webpack_require__(44);
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__(67).CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* global window */

var lodash;

if (true) {
  try {
    lodash = {
      clone: __webpack_require__(326),
      constant: __webpack_require__(162),
      each: __webpack_require__(227),
      filter: __webpack_require__(230),
      has:  __webpack_require__(241),
      isArray: __webpack_require__(9),
      isEmpty: __webpack_require__(402),
      isFunction: __webpack_require__(86),
      isUndefined: __webpack_require__(242),
      keys: __webpack_require__(40),
      map: __webpack_require__(243),
      reduce: __webpack_require__(245),
      size: __webpack_require__(405),
      transform: __webpack_require__(411),
      union: __webpack_require__(412),
      values: __webpack_require__(250)
    };
  } catch (e) {
    // continue regardless of error
  }
}

if (!lodash) {
  lodash = window._;
}

module.exports = lodash;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(91);
var requireObjectCoercible = __webpack_require__(38);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__(100);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* global window */

var graphlib;

if (true) {
  try {
    graphlib = __webpack_require__(324);
  } catch (e) {
    // continue regardless of error
  }
}

if (!graphlib) {
  graphlib = window.graphlib;
}

module.exports = graphlib;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(210);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var forEach = __webpack_require__(182);

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var DOMIterables = __webpack_require__(183);
var DOMTokenListPrototype = __webpack_require__(184);
var forEach = __webpack_require__(182);
var createNonEnumerableProperty = __webpack_require__(43);

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var fails = __webpack_require__(3);
var isArray = __webpack_require__(55);
var isObject = __webpack_require__(14);
var toObject = __webpack_require__(19);
var lengthOfArrayLike = __webpack_require__(25);
var createProperty = __webpack_require__(106);
var arraySpeciesCreate = __webpack_require__(105);
var arrayMethodHasSpeciesSupport = __webpack_require__(80);
var wellKnownSymbol = __webpack_require__(7);
var V8_VERSION = __webpack_require__(64);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var isCallable = __webpack_require__(6);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(86),
    isLength = __webpack_require__(156);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(382),
    baseMatchesProperty = __webpack_require__(392),
    identity = __webpack_require__(51),
    isArray = __webpack_require__(9),
    property = __webpack_require__(399);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(33);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(213),
    baseKeys = __webpack_require__(158),
    isArrayLike = __webpack_require__(35);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(15);
var propertyIsEnumerableModule = __webpack_require__(133);
var createPropertyDescriptor = __webpack_require__(63);
var toIndexedObject = __webpack_require__(24);
var toPropertyKey = __webpack_require__(92);
var hasOwn = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(174);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(6);
var tryToString = __webpack_require__(173);

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(15);
var definePropertyModule = __webpack_require__(16);
var createPropertyDescriptor = __webpack_require__(63);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(264);
var global = __webpack_require__(4);
var isObject = __webpack_require__(14);
var createNonEnumerableProperty = __webpack_require__(43);
var hasOwn = __webpack_require__(18);
var shared = __webpack_require__(136);
var sharedKey = __webpack_require__(98);
var hiddenKeys = __webpack_require__(66);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(13);
var defineProperties = __webpack_require__(179);
var enumBugKeys = __webpack_require__(138);
var hiddenKeys = __webpack_require__(66);
var html = __webpack_require__(180);
var documentCreateElement = __webpack_require__(96);
var sharedKey = __webpack_require__(98);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var $filter = __webpack_require__(71).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(80);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var $parseInt = __webpack_require__(298);

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(337),
    getValue = __webpack_require__(342);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(57),
    getRawTag = __webpack_require__(338),
    objectToString = __webpack_require__(339);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(213),
    baseKeysIn = __webpack_require__(362),
    isArrayLike = __webpack_require__(35);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(169)["default"];

var assertThisInitialized = __webpack_require__(8);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__(42);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(53);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(27);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(27),
    stubFalse = __webpack_require__(358);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(155)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(367),
    Map = __webpack_require__(152),
    Promise = __webpack_require__(368),
    Set = __webpack_require__(222),
    WeakMap = __webpack_require__(369),
    baseGetTag = __webpack_require__(49),
    toSource = __webpack_require__(211);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(49),
    isObjectLike = __webpack_require__(32);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(266);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__62__;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var userAgent = __webpack_require__(39);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(15);
var hasOwn = __webpack_require__(18);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(176);
var enumBugKeys = __webpack_require__(138);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(2);
var $indexOf = __webpack_require__(177).indexOf;
var arrayMethodIsStrict = __webpack_require__(70);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(3);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(72);
var IndexedObject = __webpack_require__(91);
var toObject = __webpack_require__(19);
var lengthOfArrayLike = __webpack_require__(25);
var arraySpeciesCreate = __webpack_require__(105);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__(42);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aCallable(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var global = __webpack_require__(4);
var getBuiltIn = __webpack_require__(33);
var IS_PURE = __webpack_require__(65);
var DESCRIPTORS = __webpack_require__(15);
var NATIVE_SYMBOL = __webpack_require__(135);
var fails = __webpack_require__(3);
var hasOwn = __webpack_require__(18);
var isArray = __webpack_require__(55);
var isCallable = __webpack_require__(6);
var isObject = __webpack_require__(14);
var isSymbol = __webpack_require__(93);
var anObject = __webpack_require__(13);
var toObject = __webpack_require__(19);
var toIndexedObject = __webpack_require__(24);
var toPropertyKey = __webpack_require__(92);
var $toString = __webpack_require__(20);
var createPropertyDescriptor = __webpack_require__(63);
var nativeObjectCreate = __webpack_require__(45);
var objectKeys = __webpack_require__(103);
var getOwnPropertyNamesModule = __webpack_require__(68);
var getOwnPropertyNamesExternal = __webpack_require__(185);
var getOwnPropertySymbolsModule = __webpack_require__(139);
var getOwnPropertyDescriptorModule = __webpack_require__(41);
var definePropertyModule = __webpack_require__(16);
var propertyIsEnumerableModule = __webpack_require__(133);
var redefine = __webpack_require__(21);
var shared = __webpack_require__(94);
var sharedKey = __webpack_require__(98);
var hiddenKeys = __webpack_require__(66);
var uid = __webpack_require__(95);
var wellKnownSymbol = __webpack_require__(7);
var wrappedWellKnownSymbolModule = __webpack_require__(186);
var defineWellKnownSymbol = __webpack_require__(270);
var setToStringTag = __webpack_require__(74);
var InternalStateModule = __webpack_require__(44);
var $forEach = __webpack_require__(71).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = $toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (isCallable($replacer)) value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  var valueOf = $Symbol[PROTOTYPE].valueOf;
  redefine($Symbol[PROTOTYPE], TO_PRIMITIVE, function () {
    return valueOf.apply(this, arguments);
  });
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(16).f;
var hasOwn = __webpack_require__(18);
var wellKnownSymbol = __webpack_require__(7);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !hasOwn(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var fails = __webpack_require__(3);
var toIndexedObject = __webpack_require__(24);
var nativeGetOwnPropertyDescriptor = __webpack_require__(41).f;
var DESCRIPTORS = __webpack_require__(15);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(15);
var ownKeys = __webpack_require__(175);
var toIndexedObject = __webpack_require__(24);
var getOwnPropertyDescriptorModule = __webpack_require__(41);
var createProperty = __webpack_require__(106);

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(15);
var defineProperties = __webpack_require__(179);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(15);
var objectDefinePropertyModile = __webpack_require__(16);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var exec = __webpack_require__(107);

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var wellKnownSymbol = __webpack_require__(7);
var V8_VERSION = __webpack_require__(64);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(141);
var redefine = __webpack_require__(21);
var toString = __webpack_require__(275);

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var $map = __webpack_require__(71).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(80);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var toObject = __webpack_require__(19);
var nativeKeys = __webpack_require__(103);
var fails = __webpack_require__(3);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var global = __webpack_require__(4);
var isCallable = __webpack_require__(6);
var userAgent = __webpack_require__(39);

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (isCallable(handler) ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(49),
    isObject = __webpack_require__(23);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(119),
    baseAssignValue = __webpack_require__(120);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(357),
    isObjectLike = __webpack_require__(32);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(359),
    baseUnary = __webpack_require__(122),
    nodeUtil = __webpack_require__(157);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(60);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var classof = __webpack_require__(53);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(134);
var isSymbol = __webpack_require__(93);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(6);
var getBuiltIn = __webpack_require__(33);
var USE_SYMBOL_AS_UID = __webpack_require__(172);

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && Object(it) instanceof $Symbol;
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(65);
var store = __webpack_require__(136);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.18.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 95 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var isObject = __webpack_require__(14);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(6);
var store = __webpack_require__(136);

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(94);
var uid = __webpack_require__(95);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(34);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(34);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var isCallable = __webpack_require__(6);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(141);
var isCallable = __webpack_require__(6);
var classofRaw = __webpack_require__(53);
var wellKnownSymbol = __webpack_require__(7);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(176);
var enumBugKeys = __webpack_require__(138);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var assign = __webpack_require__(267);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(269);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__(92);
var definePropertyModule = __webpack_require__(16);
var createPropertyDescriptor = __webpack_require__(63);

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var toString = __webpack_require__(20);
var regexpFlags = __webpack_require__(187);
var stickyHelpers = __webpack_require__(188);
var shared = __webpack_require__(94);
var create = __webpack_require__(45);
var getInternalState = __webpack_require__(44).get;
var UNSUPPORTED_DOT_ALL = __webpack_require__(272);
var UNSUPPORTED_NCG = __webpack_require__(273);

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  // eslint-disable-next-line max-statements -- TODO
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = patchedExec.call(raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = str.slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str.charAt(re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(142);
var isRegExp = __webpack_require__(297);
var anObject = __webpack_require__(13);
var requireObjectCoercible = __webpack_require__(38);
var speciesConstructor = __webpack_require__(195);
var advanceStringIndex = __webpack_require__(143);
var toLength = __webpack_require__(100);
var toString = __webpack_require__(20);
var getMethod = __webpack_require__(54);
var callRegExpExec = __webpack_require__(144);
var regexpExec = __webpack_require__(107);
var stickyHelpers = __webpack_require__(188);
var fails = __webpack_require__(3);

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? splitter.call(separator, O, limit)
        : internalSplit.call(toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? S.slice(q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(15);
var FUNCTION_NAME_EXISTS = __webpack_require__(67).EXISTS;
var defineProperty = __webpack_require__(16).f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(38);
var toString = __webpack_require__(20);
var whitespaces = __webpack_require__(111);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),
/* 111 */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(21);

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = __webpack_require__(67).PROPER;
var redefine = __webpack_require__(21);
var anObject = __webpack_require__(13);
var $toString = __webpack_require__(20);
var fails = __webpack_require__(3);
var flags = __webpack_require__(187);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(115),
    stackClear = __webpack_require__(332),
    stackDelete = __webpack_require__(333),
    stackGet = __webpack_require__(334),
    stackHas = __webpack_require__(335),
    stackSet = __webpack_require__(336);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(327),
    listCacheDelete = __webpack_require__(328),
    listCacheGet = __webpack_require__(329),
    listCacheHas = __webpack_require__(330),
    listCacheSet = __webpack_require__(331);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(56);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(48);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(351);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(120),
    eq = __webpack_require__(56);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(212);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 122 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(214);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(163),
    createBaseEach = __webpack_require__(380);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(127),
    toKey = __webpack_require__(90);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(9),
    isKey = __webpack_require__(166),
    stringToPath = __webpack_require__(394),
    toString = __webpack_require__(237);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(51),
    overRest = __webpack_require__(246),
    setToString = __webpack_require__(247);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(56),
    isArrayLike = __webpack_require__(35),
    isIndex = __webpack_require__(121),
    isObject = __webpack_require__(23);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(5);

module.exports = {
  longestPath: longestPath,
  slack: slack
};

/*
 * Initializes ranks for the input graph using the longest path algorithm. This
 * algorithm scales well and is fast in practice, it yields rather poor
 * solutions. Nodes are pushed to the lowest layer possible, leaving the bottom
 * ranks wide and leaving edges longer than necessary. However, due to its
 * speed, this algorithm is good for getting an initial ranking that can be fed
 * into other algorithms.
 *
 * This algorithm does not normalize layers because it will be used by other
 * algorithms in most cases. If using this algorithm directly, be sure to
 * run normalize at the end.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG.
 *    2. Input graph node labels can be assigned properties.
 *
 * Post-conditions:
 *
 *    1. Each node will be assign an (unnormalized) "rank" property.
 */
function longestPath(g) {
  var visited = {};

  function dfs(v) {
    var label = g.node(v);
    if (_.has(visited, v)) {
      return label.rank;
    }
    visited[v] = true;

    var rank = _.min(_.map(g.outEdges(v), function(e) {
      return dfs(e.w) - g.edge(e).minlen;
    }));

    if (rank === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
        rank === undefined || // return value of _.map([]) for Lodash 4
        rank === null) { // return value of _.map([null])
      rank = 0;
    }

    return (label.rank = rank);
  }

  _.forEach(g.sources(), dfs);
}

/*
 * Returns the amount of slack for the given edge. The slack is defined as the
 * difference between the length of the edge and its minimum length.
 */
function slack(g, e) {
  return g.node(e.w).rank - g.node(e.v).rank - g.edge(e).minlen;
}


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var getBuiltIn = __webpack_require__(33);
var aConstructor = __webpack_require__(178);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(14);
var create = __webpack_require__(45);
var bind = __webpack_require__(181);
var fails = __webpack_require__(3);

var nativeConstruct = getBuiltIn('Reflect', 'construct');

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});
var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aConstructor(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var isSymbol = __webpack_require__(93);
var getMethod = __webpack_require__(54);
var ordinaryToPrimitive = __webpack_require__(263);
var wellKnownSymbol = __webpack_require__(7);

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(64);
var fails = __webpack_require__(3);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var setGlobal = __webpack_require__(137);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);

module.exports = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 138 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 139 */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var isCallable = __webpack_require__(6);
var classof = __webpack_require__(102);
var getBuiltIn = __webpack_require__(33);
var inspectSource = __webpack_require__(97);

var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = constructorRegExp.exec;
var INCORRECT_TO_STRING = !constructorRegExp.exec(function () { /* empty */ });

var isConstructorModern = function (argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(Object, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function (argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
    // we can't check .prototype since constructors produced by .bind haven't it
  } return INCORRECT_TO_STRING || !!exec.call(constructorRegExp, inspectSource(argument));
};

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(7);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(79);
var redefine = __webpack_require__(21);
var regexpExec = __webpack_require__(107);
var fails = __webpack_require__(3);
var wellKnownSymbol = __webpack_require__(7);
var createNonEnumerableProperty = __webpack_require__(43);

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(190).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var isCallable = __webpack_require__(6);
var classof = __webpack_require__(53);
var regexpExec = __webpack_require__(107);

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = exec.call(R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return regexpExec.call(R, S);
  throw TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(13);
var aPossiblePrototype = __webpack_require__(278);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (it instanceof Constructor) return it;
  throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var isArrayIteratorMethod = __webpack_require__(279);
var lengthOfArrayLike = __webpack_require__(25);
var bind = __webpack_require__(72);
var getIterator = __webpack_require__(280);
var getIteratorMethod = __webpack_require__(193);
var iteratorClose = __webpack_require__(281);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError(String(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(53);
var global = __webpack_require__(4);

module.exports = classof(global.process) == 'process';


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(7);
var create = __webpack_require__(45);
var definePropertyModule = __webpack_require__(16);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var IS_PURE = __webpack_require__(65);
var FunctionName = __webpack_require__(67);
var isCallable = __webpack_require__(6);
var createIteratorConstructor = __webpack_require__(289);
var getPrototypeOf = __webpack_require__(201);
var setPrototypeOf = __webpack_require__(145);
var setToStringTag = __webpack_require__(74);
var createNonEnumerableProperty = __webpack_require__(43);
var redefine = __webpack_require__(21);
var wellKnownSymbol = __webpack_require__(7);
var Iterators = __webpack_require__(82);
var IteratorsCore = __webpack_require__(200);

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return nativeIterator.call(this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(22);

module.exports = Graph;

var DEFAULT_EDGE_NAME = "\x00";
var GRAPH_NODE = "\x00";
var EDGE_KEY_DELIM = "\x01";

// Implementation notes:
//
//  * Node id query functions should return string ids for the nodes
//  * Edge id query functions should return an "edgeObj", edge object, that is
//    composed of enough information to uniquely identify an edge: {v, w, name}.
//  * Internally we use an "edgeId", a stringified form of the edgeObj, to
//    reference edges. This is because we need a performant way to look these
//    edges up and, object properties, which have string keys, are the closest
//    we're going to get to a performant hashtable in JavaScript.

function Graph(opts) {
  this._isDirected = _.has(opts, "directed") ? opts.directed : true;
  this._isMultigraph = _.has(opts, "multigraph") ? opts.multigraph : false;
  this._isCompound = _.has(opts, "compound") ? opts.compound : false;

  // Label for the graph itself
  this._label = undefined;

  // Defaults to be set when creating a new node
  this._defaultNodeLabelFn = _.constant(undefined);

  // Defaults to be set when creating a new edge
  this._defaultEdgeLabelFn = _.constant(undefined);

  // v -> label
  this._nodes = {};

  if (this._isCompound) {
    // v -> parent
    this._parent = {};

    // v -> children
    this._children = {};
    this._children[GRAPH_NODE] = {};
  }

  // v -> edgeObj
  this._in = {};

  // u -> v -> Number
  this._preds = {};

  // v -> edgeObj
  this._out = {};

  // v -> w -> Number
  this._sucs = {};

  // e -> edgeObj
  this._edgeObjs = {};

  // e -> label
  this._edgeLabels = {};
}

/* Number of nodes in the graph. Should only be changed by the implementation. */
Graph.prototype._nodeCount = 0;

/* Number of edges in the graph. Should only be changed by the implementation. */
Graph.prototype._edgeCount = 0;


/* === Graph functions ========= */

Graph.prototype.isDirected = function() {
  return this._isDirected;
};

Graph.prototype.isMultigraph = function() {
  return this._isMultigraph;
};

Graph.prototype.isCompound = function() {
  return this._isCompound;
};

Graph.prototype.setGraph = function(label) {
  this._label = label;
  return this;
};

Graph.prototype.graph = function() {
  return this._label;
};


/* === Node functions ========== */

Graph.prototype.setDefaultNodeLabel = function(newDefault) {
  if (!_.isFunction(newDefault)) {
    newDefault = _.constant(newDefault);
  }
  this._defaultNodeLabelFn = newDefault;
  return this;
};

Graph.prototype.nodeCount = function() {
  return this._nodeCount;
};

Graph.prototype.nodes = function() {
  return _.keys(this._nodes);
};

Graph.prototype.sources = function() {
  var self = this;
  return _.filter(this.nodes(), function(v) {
    return _.isEmpty(self._in[v]);
  });
};

Graph.prototype.sinks = function() {
  var self = this;
  return _.filter(this.nodes(), function(v) {
    return _.isEmpty(self._out[v]);
  });
};

Graph.prototype.setNodes = function(vs, value) {
  var args = arguments;
  var self = this;
  _.each(vs, function(v) {
    if (args.length > 1) {
      self.setNode(v, value);
    } else {
      self.setNode(v);
    }
  });
  return this;
};

Graph.prototype.setNode = function(v, value) {
  if (_.has(this._nodes, v)) {
    if (arguments.length > 1) {
      this._nodes[v] = value;
    }
    return this;
  }

  this._nodes[v] = arguments.length > 1 ? value : this._defaultNodeLabelFn(v);
  if (this._isCompound) {
    this._parent[v] = GRAPH_NODE;
    this._children[v] = {};
    this._children[GRAPH_NODE][v] = true;
  }
  this._in[v] = {};
  this._preds[v] = {};
  this._out[v] = {};
  this._sucs[v] = {};
  ++this._nodeCount;
  return this;
};

Graph.prototype.node = function(v) {
  return this._nodes[v];
};

Graph.prototype.hasNode = function(v) {
  return _.has(this._nodes, v);
};

Graph.prototype.removeNode =  function(v) {
  var self = this;
  if (_.has(this._nodes, v)) {
    var removeEdge = function(e) { self.removeEdge(self._edgeObjs[e]); };
    delete this._nodes[v];
    if (this._isCompound) {
      this._removeFromParentsChildList(v);
      delete this._parent[v];
      _.each(this.children(v), function(child) {
        self.setParent(child);
      });
      delete this._children[v];
    }
    _.each(_.keys(this._in[v]), removeEdge);
    delete this._in[v];
    delete this._preds[v];
    _.each(_.keys(this._out[v]), removeEdge);
    delete this._out[v];
    delete this._sucs[v];
    --this._nodeCount;
  }
  return this;
};

Graph.prototype.setParent = function(v, parent) {
  if (!this._isCompound) {
    throw new Error("Cannot set parent in a non-compound graph");
  }

  if (_.isUndefined(parent)) {
    parent = GRAPH_NODE;
  } else {
    // Coerce parent to string
    parent += "";
    for (var ancestor = parent;
      !_.isUndefined(ancestor);
      ancestor = this.parent(ancestor)) {
      if (ancestor === v) {
        throw new Error("Setting " + parent+ " as parent of " + v +
                        " would create a cycle");
      }
    }

    this.setNode(parent);
  }

  this.setNode(v);
  this._removeFromParentsChildList(v);
  this._parent[v] = parent;
  this._children[parent][v] = true;
  return this;
};

Graph.prototype._removeFromParentsChildList = function(v) {
  delete this._children[this._parent[v]][v];
};

Graph.prototype.parent = function(v) {
  if (this._isCompound) {
    var parent = this._parent[v];
    if (parent !== GRAPH_NODE) {
      return parent;
    }
  }
};

Graph.prototype.children = function(v) {
  if (_.isUndefined(v)) {
    v = GRAPH_NODE;
  }

  if (this._isCompound) {
    var children = this._children[v];
    if (children) {
      return _.keys(children);
    }
  } else if (v === GRAPH_NODE) {
    return this.nodes();
  } else if (this.hasNode(v)) {
    return [];
  }
};

Graph.prototype.predecessors = function(v) {
  var predsV = this._preds[v];
  if (predsV) {
    return _.keys(predsV);
  }
};

Graph.prototype.successors = function(v) {
  var sucsV = this._sucs[v];
  if (sucsV) {
    return _.keys(sucsV);
  }
};

Graph.prototype.neighbors = function(v) {
  var preds = this.predecessors(v);
  if (preds) {
    return _.union(preds, this.successors(v));
  }
};

Graph.prototype.isLeaf = function (v) {
  var neighbors;
  if (this.isDirected()) {
    neighbors = this.successors(v);
  } else {
    neighbors = this.neighbors(v);
  }
  return neighbors.length === 0;
};

Graph.prototype.filterNodes = function(filter) {
  var copy = new this.constructor({
    directed: this._isDirected,
    multigraph: this._isMultigraph,
    compound: this._isCompound
  });

  copy.setGraph(this.graph());

  var self = this;
  _.each(this._nodes, function(value, v) {
    if (filter(v)) {
      copy.setNode(v, value);
    }
  });

  _.each(this._edgeObjs, function(e) {
    if (copy.hasNode(e.v) && copy.hasNode(e.w)) {
      copy.setEdge(e, self.edge(e));
    }
  });

  var parents = {};
  function findParent(v) {
    var parent = self.parent(v);
    if (parent === undefined || copy.hasNode(parent)) {
      parents[v] = parent;
      return parent;
    } else if (parent in parents) {
      return parents[parent];
    } else {
      return findParent(parent);
    }
  }

  if (this._isCompound) {
    _.each(copy.nodes(), function(v) {
      copy.setParent(v, findParent(v));
    });
  }

  return copy;
};

/* === Edge functions ========== */

Graph.prototype.setDefaultEdgeLabel = function(newDefault) {
  if (!_.isFunction(newDefault)) {
    newDefault = _.constant(newDefault);
  }
  this._defaultEdgeLabelFn = newDefault;
  return this;
};

Graph.prototype.edgeCount = function() {
  return this._edgeCount;
};

Graph.prototype.edges = function() {
  return _.values(this._edgeObjs);
};

Graph.prototype.setPath = function(vs, value) {
  var self = this;
  var args = arguments;
  _.reduce(vs, function(v, w) {
    if (args.length > 1) {
      self.setEdge(v, w, value);
    } else {
      self.setEdge(v, w);
    }
    return w;
  });
  return this;
};

/*
 * setEdge(v, w, [value, [name]])
 * setEdge({ v, w, [name] }, [value])
 */
Graph.prototype.setEdge = function() {
  var v, w, name, value;
  var valueSpecified = false;
  var arg0 = arguments[0];

  if (typeof arg0 === "object" && arg0 !== null && "v" in arg0) {
    v = arg0.v;
    w = arg0.w;
    name = arg0.name;
    if (arguments.length === 2) {
      value = arguments[1];
      valueSpecified = true;
    }
  } else {
    v = arg0;
    w = arguments[1];
    name = arguments[3];
    if (arguments.length > 2) {
      value = arguments[2];
      valueSpecified = true;
    }
  }

  v = "" + v;
  w = "" + w;
  if (!_.isUndefined(name)) {
    name = "" + name;
  }

  var e = edgeArgsToId(this._isDirected, v, w, name);
  if (_.has(this._edgeLabels, e)) {
    if (valueSpecified) {
      this._edgeLabels[e] = value;
    }
    return this;
  }

  if (!_.isUndefined(name) && !this._isMultigraph) {
    throw new Error("Cannot set a named edge when isMultigraph = false");
  }

  // It didn't exist, so we need to create it.
  // First ensure the nodes exist.
  this.setNode(v);
  this.setNode(w);

  this._edgeLabels[e] = valueSpecified ? value : this._defaultEdgeLabelFn(v, w, name);

  var edgeObj = edgeArgsToObj(this._isDirected, v, w, name);
  // Ensure we add undirected edges in a consistent way.
  v = edgeObj.v;
  w = edgeObj.w;

  Object.freeze(edgeObj);
  this._edgeObjs[e] = edgeObj;
  incrementOrInitEntry(this._preds[w], v);
  incrementOrInitEntry(this._sucs[v], w);
  this._in[w][e] = edgeObj;
  this._out[v][e] = edgeObj;
  this._edgeCount++;
  return this;
};

Graph.prototype.edge = function(v, w, name) {
  var e = (arguments.length === 1
    ? edgeObjToId(this._isDirected, arguments[0])
    : edgeArgsToId(this._isDirected, v, w, name));
  return this._edgeLabels[e];
};

Graph.prototype.hasEdge = function(v, w, name) {
  var e = (arguments.length === 1
    ? edgeObjToId(this._isDirected, arguments[0])
    : edgeArgsToId(this._isDirected, v, w, name));
  return _.has(this._edgeLabels, e);
};

Graph.prototype.removeEdge = function(v, w, name) {
  var e = (arguments.length === 1
    ? edgeObjToId(this._isDirected, arguments[0])
    : edgeArgsToId(this._isDirected, v, w, name));
  var edge = this._edgeObjs[e];
  if (edge) {
    v = edge.v;
    w = edge.w;
    delete this._edgeLabels[e];
    delete this._edgeObjs[e];
    decrementOrRemoveEntry(this._preds[w], v);
    decrementOrRemoveEntry(this._sucs[v], w);
    delete this._in[w][e];
    delete this._out[v][e];
    this._edgeCount--;
  }
  return this;
};

Graph.prototype.inEdges = function(v, u) {
  var inV = this._in[v];
  if (inV) {
    var edges = _.values(inV);
    if (!u) {
      return edges;
    }
    return _.filter(edges, function(edge) { return edge.v === u; });
  }
};

Graph.prototype.outEdges = function(v, w) {
  var outV = this._out[v];
  if (outV) {
    var edges = _.values(outV);
    if (!w) {
      return edges;
    }
    return _.filter(edges, function(edge) { return edge.w === w; });
  }
};

Graph.prototype.nodeEdges = function(v, w) {
  var inEdges = this.inEdges(v, w);
  if (inEdges) {
    return inEdges.concat(this.outEdges(v, w));
  }
};

function incrementOrInitEntry(map, k) {
  if (map[k]) {
    map[k]++;
  } else {
    map[k] = 1;
  }
}

function decrementOrRemoveEntry(map, k) {
  if (!--map[k]) { delete map[k]; }
}

function edgeArgsToId(isDirected, v_, w_, name) {
  var v = "" + v_;
  var w = "" + w_;
  if (!isDirected && v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM +
             (_.isUndefined(name) ? DEFAULT_EDGE_NAME : name);
}

function edgeArgsToObj(isDirected, v_, w_, name) {
  var v = "" + v_;
  var w = "" + w_;
  if (!isDirected && v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  var edgeObj =  { v: v, w: w };
  if (name) {
    edgeObj.name = name;
  }
  return edgeObj;
}

function edgeObjToId(isDirected, edgeObj) {
  return edgeArgsToId(isDirected, edgeObj.v, edgeObj.w, edgeObj.name);
}


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(48),
    root = __webpack_require__(27);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(343),
    mapCacheDelete = __webpack_require__(350),
    mapCacheGet = __webpack_require__(352),
    mapCacheHas = __webpack_require__(353),
    mapCacheSet = __webpack_require__(354);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 154 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 156 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(210);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(155)(module)))

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(123),
    nativeKeys = __webpack_require__(360);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(217),
    stubArray = __webpack_require__(218);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 160 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(223);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 162 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(164),
    keys = __webpack_require__(40);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(379);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 165 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(9),
    isSymbol = __webpack_require__(60);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(160),
    isFlattenable = __webpack_require__(413);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(60);

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

module.exports = baseExtremum;


/***/ }),
/* 169 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

/*
Copyright (c) 2012-2014 Chris Pettitt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

module.exports = {
  graphlib: __webpack_require__(26),

  layout: __webpack_require__(437),
  debug: __webpack_require__(498),
  util: {
    time: __webpack_require__(17).time,
    notime: __webpack_require__(17).notime
  },
  version: __webpack_require__(499)
};


/***/ }),
/* 171 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(135);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(15);
var fails = __webpack_require__(3);
var createElement = __webpack_require__(96);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(33);
var getOwnPropertyNamesModule = __webpack_require__(68);
var getOwnPropertySymbolsModule = __webpack_require__(139);
var anObject = __webpack_require__(13);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(18);
var toIndexedObject = __webpack_require__(24);
var indexOf = __webpack_require__(177).indexOf;
var hiddenKeys = __webpack_require__(66);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(24);
var toAbsoluteIndex = __webpack_require__(99);
var lengthOfArrayLike = __webpack_require__(25);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var isConstructor = __webpack_require__(140);
var tryToString = __webpack_require__(173);

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(15);
var definePropertyModule = __webpack_require__(16);
var anObject = __webpack_require__(13);
var objectKeys = __webpack_require__(103);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(33);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(42);
var isObject = __webpack_require__(14);

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aCallable(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(71).forEach;
var arrayMethodIsStrict = __webpack_require__(70);

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),
/* 183 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(96);

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var toIndexedObject = __webpack_require__(24);
var $getOwnPropertyNames = __webpack_require__(68).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(7);

exports.f = wellKnownSymbol;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(13);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var global = __webpack_require__(4);

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

exports.UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(142);
var fails = __webpack_require__(3);
var anObject = __webpack_require__(13);
var isCallable = __webpack_require__(6);
var toIntegerOrInfinity = __webpack_require__(34);
var toLength = __webpack_require__(100);
var toString = __webpack_require__(20);
var requireObjectCoercible = __webpack_require__(38);
var advanceStringIndex = __webpack_require__(143);
var getMethod = __webpack_require__(54);
var getSubstitution = __webpack_require__(274);
var regExpExec = __webpack_require__(144);
var wellKnownSymbol = __webpack_require__(7);

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue === 'string' &&
        replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 &&
        replaceValue.indexOf('$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = toString(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(34);
var toString = __webpack_require__(20);
var requireObjectCoercible = __webpack_require__(38);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(21);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(33);
var definePropertyModule = __webpack_require__(16);
var wellKnownSymbol = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(15);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(102);
var getMethod = __webpack_require__(54);
var Iterators = __webpack_require__(82);
var wellKnownSymbol = __webpack_require__(7);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(7);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var aConstructor = __webpack_require__(178);
var wellKnownSymbol = __webpack_require__(7);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var isCallable = __webpack_require__(6);
var fails = __webpack_require__(3);
var bind = __webpack_require__(72);
var html = __webpack_require__(180);
var createElement = __webpack_require__(96);
var IS_IOS = __webpack_require__(197);
var IS_NODE = __webpack_require__(148);

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins -- safe
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var argumentsLength = arguments.length;
    var i = 1;
    while (argumentsLength > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (isCallable(fn) ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(39);

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(42);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(24);
var addToUnscopables = __webpack_require__(149);
var Iterators = __webpack_require__(82);
var InternalStateModule = __webpack_require__(44);
var defineIterator = __webpack_require__(150);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(3);
var isCallable = __webpack_require__(6);
var create = __webpack_require__(45);
var getPrototypeOf = __webpack_require__(201);
var redefine = __webpack_require__(21);
var wellKnownSymbol = __webpack_require__(7);
var IS_PURE = __webpack_require__(65);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(18);
var isCallable = __webpack_require__(6);
var toObject = __webpack_require__(19);
var sharedKey = __webpack_require__(98);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(290);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var hiddenKeys = __webpack_require__(66);
var isObject = __webpack_require__(14);
var hasOwn = __webpack_require__(18);
var defineProperty = __webpack_require__(16).f;
var getOwnPropertyNamesModule = __webpack_require__(68);
var getOwnPropertyNamesExternalModule = __webpack_require__(185);
var uid = __webpack_require__(95);
var FREEZING = __webpack_require__(293);

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = [].splice;
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice.call(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(6);
var isObject = __webpack_require__(14);
var setPrototypeOf = __webpack_require__(145);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var $find = __webpack_require__(71).find;
var addToUnscopables = __webpack_require__(149);

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var isArray = __webpack_require__(55);
var isConstructor = __webpack_require__(140);
var isObject = __webpack_require__(14);
var toAbsoluteIndex = __webpack_require__(99);
var lengthOfArrayLike = __webpack_require__(25);
var toIndexedObject = __webpack_require__(24);
var createProperty = __webpack_require__(106);
var wellKnownSymbol = __webpack_require__(7);
var arrayMethodHasSpeciesSupport = __webpack_require__(80);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var isArray = __webpack_require__(55);

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var toAbsoluteIndex = __webpack_require__(99);
var toIntegerOrInfinity = __webpack_require__(34);
var lengthOfArrayLike = __webpack_require__(25);
var toObject = __webpack_require__(19);
var arraySpeciesCreate = __webpack_require__(105);
var createProperty = __webpack_require__(106);
var arrayMethodHasSpeciesSupport = __webpack_require__(80);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),
/* 208 */
/***/ (function(module, exports) {

var valueOf = 1.0.valueOf;

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  return valueOf.call(value);
};


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(114),
    arrayEach = __webpack_require__(154),
    assignValue = __webpack_require__(119),
    baseAssign = __webpack_require__(355),
    baseAssignIn = __webpack_require__(361),
    cloneBuffer = __webpack_require__(215),
    copyArray = __webpack_require__(216),
    copySymbols = __webpack_require__(364),
    copySymbolsIn = __webpack_require__(365),
    getAllKeys = __webpack_require__(220),
    getAllKeysIn = __webpack_require__(366),
    getTag = __webpack_require__(59),
    initCloneArray = __webpack_require__(370),
    initCloneByTag = __webpack_require__(371),
    initCloneObject = __webpack_require__(225),
    isArray = __webpack_require__(9),
    isBuffer = __webpack_require__(58),
    isMap = __webpack_require__(375),
    isObject = __webpack_require__(23),
    isSet = __webpack_require__(377),
    keys = __webpack_require__(40),
    keysIn = __webpack_require__(50);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(171)))

/***/ }),
/* 211 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(48);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(356),
    isArguments = __webpack_require__(88),
    isArray = __webpack_require__(9),
    isBuffer = __webpack_require__(58),
    isIndex = __webpack_require__(121),
    isTypedArray = __webpack_require__(89);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 214 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(27);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(155)(module)))

/***/ }),
/* 216 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 217 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 218 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(160),
    getPrototype = __webpack_require__(124),
    getSymbols = __webpack_require__(159),
    stubArray = __webpack_require__(218);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(221),
    getSymbols = __webpack_require__(159),
    keys = __webpack_require__(40);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(160),
    isArray = __webpack_require__(9);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(48),
    root = __webpack_require__(27);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(27);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(161);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(226),
    getPrototype = __webpack_require__(124),
    isPrototype = __webpack_require__(123);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(228);


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(154),
    baseEach = __webpack_require__(125),
    castFunction = __webpack_require__(229),
    isArray = __webpack_require__(9);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(51);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(217),
    baseFilter = __webpack_require__(381),
    baseIteratee = __webpack_require__(36),
    isArray = __webpack_require__(9);

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(384),
    isObjectLike = __webpack_require__(32);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(233),
    arraySome = __webpack_require__(387),
    cacheHas = __webpack_require__(234);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(153),
    setCacheAdd = __webpack_require__(385),
    setCacheHas = __webpack_require__(386);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 234 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 236 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(397);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(398),
    hasPath = __webpack_require__(239);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(127),
    isArguments = __webpack_require__(88),
    isArray = __webpack_require__(9),
    isIndex = __webpack_require__(121),
    isLength = __webpack_require__(156),
    toKey = __webpack_require__(90);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 240 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var baseHas = __webpack_require__(401),
    hasPath = __webpack_require__(239);

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;


/***/ }),
/* 242 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(128),
    baseIteratee = __webpack_require__(36),
    baseMap = __webpack_require__(244),
    isArray = __webpack_require__(9);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(125),
    isArrayLike = __webpack_require__(35);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(403),
    baseEach = __webpack_require__(125),
    baseIteratee = __webpack_require__(36),
    baseReduce = __webpack_require__(404),
    isArray = __webpack_require__(9);

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(414);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(415),
    shortOut = __webpack_require__(416);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 248 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(35),
    isObjectLike = __webpack_require__(32);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(425),
    keys = __webpack_require__(40);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(22);
var PriorityQueue = __webpack_require__(252);

module.exports = dijkstra;

var DEFAULT_WEIGHT_FUNC = _.constant(1);

function dijkstra(g, source, weightFn, edgeFn) {
  return runDijkstra(g, String(source),
    weightFn || DEFAULT_WEIGHT_FUNC,
    edgeFn || function(v) { return g.outEdges(v); });
}

function runDijkstra(g, source, weightFn, edgeFn) {
  var results = {};
  var pq = new PriorityQueue();
  var v, vEntry;

  var updateNeighbors = function(edge) {
    var w = edge.v !== v ? edge.v : edge.w;
    var wEntry = results[w];
    var weight = weightFn(edge);
    var distance = vEntry.distance + weight;

    if (weight < 0) {
      throw new Error("dijkstra does not allow negative edge weights. " +
                      "Bad edge: " + edge + " Weight: " + weight);
    }

    if (distance < wEntry.distance) {
      wEntry.distance = distance;
      wEntry.predecessor = v;
      pq.decrease(w, distance);
    }
  };

  g.nodes().forEach(function(v) {
    var distance = v === source ? 0 : Number.POSITIVE_INFINITY;
    results[v] = { distance: distance };
    pq.add(v, distance);
  });

  while (pq.size() > 0) {
    v = pq.removeMin();
    vEntry = results[v];
    if (vEntry.distance === Number.POSITIVE_INFINITY) {
      break;
    }

    edgeFn(v).forEach(updateNeighbors);
  }

  return results;
}


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(22);

module.exports = PriorityQueue;

/**
 * A min-priority queue data structure. This algorithm is derived from Cormen,
 * et al., "Introduction to Algorithms". The basic idea of a min-priority
 * queue is that you can efficiently (in O(1) time) get the smallest key in
 * the queue. Adding and removing elements takes O(log n) time. A key can
 * have its priority decreased in O(log n) time.
 */
function PriorityQueue() {
  this._arr = [];
  this._keyIndices = {};
}

/**
 * Returns the number of elements in the queue. Takes `O(1)` time.
 */
PriorityQueue.prototype.size = function() {
  return this._arr.length;
};

/**
 * Returns the keys that are in the queue. Takes `O(n)` time.
 */
PriorityQueue.prototype.keys = function() {
  return this._arr.map(function(x) { return x.key; });
};

/**
 * Returns `true` if **key** is in the queue and `false` if not.
 */
PriorityQueue.prototype.has = function(key) {
  return _.has(this._keyIndices, key);
};

/**
 * Returns the priority for **key**. If **key** is not present in the queue
 * then this function returns `undefined`. Takes `O(1)` time.
 *
 * @param {Object} key
 */
PriorityQueue.prototype.priority = function(key) {
  var index = this._keyIndices[key];
  if (index !== undefined) {
    return this._arr[index].priority;
  }
};

/**
 * Returns the key for the minimum element in this queue. If the queue is
 * empty this function throws an Error. Takes `O(1)` time.
 */
PriorityQueue.prototype.min = function() {
  if (this.size() === 0) {
    throw new Error("Queue underflow");
  }
  return this._arr[0].key;
};

/**
 * Inserts a new key into the priority queue. If the key already exists in
 * the queue this function returns `false`; otherwise it will return `true`.
 * Takes `O(n)` time.
 *
 * @param {Object} key the key to add
 * @param {Number} priority the initial priority for the key
 */
PriorityQueue.prototype.add = function(key, priority) {
  var keyIndices = this._keyIndices;
  key = String(key);
  if (!_.has(keyIndices, key)) {
    var arr = this._arr;
    var index = arr.length;
    keyIndices[key] = index;
    arr.push({key: key, priority: priority});
    this._decrease(index);
    return true;
  }
  return false;
};

/**
 * Removes and returns the smallest key in the queue. Takes `O(log n)` time.
 */
PriorityQueue.prototype.removeMin = function() {
  this._swap(0, this._arr.length - 1);
  var min = this._arr.pop();
  delete this._keyIndices[min.key];
  this._heapify(0);
  return min.key;
};

/**
 * Decreases the priority for **key** to **priority**. If the new priority is
 * greater than the previous priority, this function will throw an Error.
 *
 * @param {Object} key the key for which to raise priority
 * @param {Number} priority the new priority for the key
 */
PriorityQueue.prototype.decrease = function(key, priority) {
  var index = this._keyIndices[key];
  if (priority > this._arr[index].priority) {
    throw new Error("New priority is greater than current priority. " +
        "Key: " + key + " Old: " + this._arr[index].priority + " New: " + priority);
  }
  this._arr[index].priority = priority;
  this._decrease(index);
};

PriorityQueue.prototype._heapify = function(i) {
  var arr = this._arr;
  var l = 2 * i;
  var r = l + 1;
  var largest = i;
  if (l < arr.length) {
    largest = arr[l].priority < arr[largest].priority ? l : largest;
    if (r < arr.length) {
      largest = arr[r].priority < arr[largest].priority ? r : largest;
    }
    if (largest !== i) {
      this._swap(i, largest);
      this._heapify(largest);
    }
  }
};

PriorityQueue.prototype._decrease = function(index) {
  var arr = this._arr;
  var priority = arr[index].priority;
  var parent;
  while (index !== 0) {
    parent = index >> 1;
    if (arr[parent].priority < priority) {
      break;
    }
    this._swap(index, parent);
    index = parent;
  }
};

PriorityQueue.prototype._swap = function(i, j) {
  var arr = this._arr;
  var keyIndices = this._keyIndices;
  var origArrI = arr[i];
  var origArrJ = arr[j];
  arr[i] = origArrJ;
  arr[j] = origArrI;
  keyIndices[origArrJ.key] = i;
  keyIndices[origArrI.key] = j;
};


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(22);

module.exports = tarjan;

function tarjan(g) {
  var index = 0;
  var stack = [];
  var visited = {}; // node id -> { onStack, lowlink, index }
  var results = [];

  function dfs(v) {
    var entry = visited[v] = {
      onStack: true,
      lowlink: index,
      index: index++
    };
    stack.push(v);

    g.successors(v).forEach(function(w) {
      if (!_.has(visited, w)) {
        dfs(w);
        entry.lowlink = Math.min(entry.lowlink, visited[w].lowlink);
      } else if (visited[w].onStack) {
        entry.lowlink = Math.min(entry.lowlink, visited[w].index);
      }
    });

    if (entry.lowlink === entry.index) {
      var cmpt = [];
      var w;
      do {
        w = stack.pop();
        visited[w].onStack = false;
        cmpt.push(w);
      } while (v !== w);
      results.push(cmpt);
    }
  }

  g.nodes().forEach(function(v) {
    if (!_.has(visited, v)) {
      dfs(v);
    }
  });

  return results;
}


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(22);

module.exports = topsort;
topsort.CycleException = CycleException;

function topsort(g) {
  var visited = {};
  var stack = {};
  var results = [];

  function visit(node) {
    if (_.has(stack, node)) {
      throw new CycleException();
    }

    if (!_.has(visited, node)) {
      stack[node] = true;
      visited[node] = true;
      _.each(g.predecessors(node), visit);
      delete stack[node];
      results.push(node);
    }
  }

  _.each(g.sinks(), visit);

  if (_.size(visited) !== g.nodeCount()) {
    throw new CycleException();
  }

  return results;
}

function CycleException() {}
CycleException.prototype = new Error(); // must be an instance of Error to pass testing

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(22);

module.exports = dfs;

/*
 * A helper that preforms a pre- or post-order traversal on the input graph
 * and returns the nodes in the order they were visited. If the graph is
 * undirected then this algorithm will navigate using neighbors. If the graph
 * is directed then this algorithm will navigate using successors.
 *
 * Order must be one of "pre" or "post".
 */
function dfs(g, vs, order) {
  if (!_.isArray(vs)) {
    vs = [vs];
  }

  var navigation = (g.isDirected() ? g.successors : g.neighbors).bind(g);

  var acc = [];
  var visited = {};
  _.each(vs, function(v) {
    if (!g.hasNode(v)) {
      throw new Error("Graph does not have node: " + v);
    }

    doDfs(g, v, order === "post", visited, navigation, acc);
  });
  return acc;
}

function doDfs(g, v, postorder, visited, navigation, acc) {
  if (!_.has(visited, v)) {
    visited[v] = true;

    if (!postorder) { acc.push(v); }
    _.each(navigation(v), function(w) {
      doDfs(g, w, postorder, visited, navigation, acc);
    });
    if (postorder) { acc.push(v); }
  }
}


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(444);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(167);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(120),
    eq = __webpack_require__(56);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),
/* 259 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),
/* 260 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}

module.exports = baseLt;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(5);
var Graph = __webpack_require__(26).Graph;
var slack = __webpack_require__(131).slack;

module.exports = feasibleTree;

/*
 * Constructs a spanning tree with tight edges and adjusted the input node's
 * ranks to achieve this. A tight edge is one that is has a length that matches
 * its "minlen" attribute.
 *
 * The basic structure for this function is derived from Gansner, et al., "A
 * Technique for Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a DAG.
 *    2. Graph must be connected.
 *    3. Graph must have at least one node.
 *    5. Graph nodes must have been previously assigned a "rank" property that
 *       respects the "minlen" property of incident edges.
 *    6. Graph edges must have a "minlen" property.
 *
 * Post-conditions:
 *
 *    - Graph nodes will have their rank adjusted to ensure that all edges are
 *      tight.
 *
 * Returns a tree (undirected graph) that is constructed using only "tight"
 * edges.
 */
function feasibleTree(g) {
  var t = new Graph({ directed: false });

  // Choose arbitrary node from which to start our tree
  var start = g.nodes()[0];
  var size = g.nodeCount();
  t.setNode(start, {});

  var edge, delta;
  while (tightTree(t, g) < size) {
    edge = findMinSlackEdge(t, g);
    delta = t.hasNode(edge.v) ? slack(g, edge) : -slack(g, edge);
    shiftRanks(t, g, delta);
  }

  return t;
}

/*
 * Finds a maximal tree of tight edges and returns the number of nodes in the
 * tree.
 */
function tightTree(t, g) {
  function dfs(v) {
    _.forEach(g.nodeEdges(v), function(e) {
      var edgeV = e.v,
        w = (v === edgeV) ? e.w : edgeV;
      if (!t.hasNode(w) && !slack(g, e)) {
        t.setNode(w, {});
        t.setEdge(v, w, {});
        dfs(w);
      }
    });
  }

  _.forEach(t.nodes(), dfs);
  return t.nodeCount();
}

/*
 * Finds the edge with the smallest slack that is incident on tree and returns
 * it.
 */
function findMinSlackEdge(t, g) {
  return _.minBy(g.edges(), function(e) {
    if (t.hasNode(e.v) !== t.hasNode(e.w)) {
      return slack(g, e);
    }
  });
}

function shiftRanks(t, g, delta) {
  _.forEach(t.nodes(), function(v) {
    g.node(v).rank += delta;
  });
}


/***/ }),
/* 262 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__262__;

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(6);
var isObject = __webpack_require__(14);

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = fn.call(input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var isCallable = __webpack_require__(6);
var inspectSource = __webpack_require__(97);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(18);
var ownKeys = __webpack_require__(175);
var getOwnPropertyDescriptorModule = __webpack_require__(41);
var definePropertyModule = __webpack_require__(16);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 266 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(15);
var fails = __webpack_require__(3);
var objectKeys = __webpack_require__(103);
var getOwnPropertySymbolsModule = __webpack_require__(139);
var propertyIsEnumerableModule = __webpack_require__(133);
var toObject = __webpack_require__(19);
var IndexedObject = __webpack_require__(91);

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(55);
var isConstructor = __webpack_require__(140);
var isObject = __webpack_require__(14);
var wellKnownSymbol = __webpack_require__(7);

var SPECIES = wellKnownSymbol('species');

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(271);
var hasOwn = __webpack_require__(18);
var wrappedWellKnownSymbolModule = __webpack_require__(186);
var defineProperty = __webpack_require__(16).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);

module.exports = global;


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var global = __webpack_require__(4);

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var global = __webpack_require__(4);

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(19);

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(141);
var classof = __webpack_require__(102);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var IS_PURE = __webpack_require__(65);
var global = __webpack_require__(4);
var getBuiltIn = __webpack_require__(33);
var NativePromise = __webpack_require__(277);
var redefine = __webpack_require__(21);
var redefineAll = __webpack_require__(191);
var setPrototypeOf = __webpack_require__(145);
var setToStringTag = __webpack_require__(74);
var setSpecies = __webpack_require__(192);
var aCallable = __webpack_require__(42);
var isCallable = __webpack_require__(6);
var isObject = __webpack_require__(14);
var anInstance = __webpack_require__(146);
var inspectSource = __webpack_require__(97);
var iterate = __webpack_require__(147);
var checkCorrectnessOfIteration = __webpack_require__(194);
var speciesConstructor = __webpack_require__(195);
var task = __webpack_require__(196).set;
var microtask = __webpack_require__(282);
var promiseResolve = __webpack_require__(285);
var hostReportErrors = __webpack_require__(286);
var newPromiseCapabilityModule = __webpack_require__(198);
var perform = __webpack_require__(287);
var InternalStateModule = __webpack_require__(44);
var isForced = __webpack_require__(101);
var wellKnownSymbol = __webpack_require__(7);
var IS_BROWSER = __webpack_require__(288);
var IS_NODE = __webpack_require__(148);
var V8_VERSION = __webpack_require__(64);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var NativePromisePrototype = NativePromise && NativePromise.prototype;
var PromiseConstructor = NativePromise;
var PromiseConstructorPrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructorPrototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aCallable(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromiseConstructorPrototype = PromiseConstructor.prototype;
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructorPrototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromise) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          nativeThen.call(that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });

      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
      redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);
    }
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);

module.exports = global.Promise;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(6);

module.exports = function (argument) {
  if (typeof argument === 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(7);
var Iterators = __webpack_require__(82);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__(42);
var anObject = __webpack_require__(13);
var getIteratorMethod = __webpack_require__(193);

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(iteratorMethod.call(argument));
  throw TypeError(String(argument) + ' is not iterable');
};


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var getMethod = __webpack_require__(54);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = innerResult.call(iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var getOwnPropertyDescriptor = __webpack_require__(41).f;
var macrotask = __webpack_require__(196).set;
var IS_IOS = __webpack_require__(197);
var IS_IOS_PEBBLE = __webpack_require__(283);
var IS_WEBOS_WEBKIT = __webpack_require__(284);
var IS_NODE = __webpack_require__(148);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(39);
var global = __webpack_require__(4);

module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(39);

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var isObject = __webpack_require__(14);
var newPromiseCapability = __webpack_require__(198);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 287 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 288 */
/***/ (function(module, exports) {

module.exports = typeof window == 'object';


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(200).IteratorPrototype;
var create = __webpack_require__(45);
var createPropertyDescriptor = __webpack_require__(63);
var setToStringTag = __webpack_require__(74);
var Iterators = __webpack_require__(82);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(292);
var collectionStrong = __webpack_require__(294);

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var global = __webpack_require__(4);
var isForced = __webpack_require__(101);
var redefine = __webpack_require__(21);
var InternalMetadataModule = __webpack_require__(202);
var iterate = __webpack_require__(147);
var anInstance = __webpack_require__(146);
var isCallable = __webpack_require__(6);
var isObject = __webpack_require__(14);
var fails = __webpack_require__(3);
var checkCorrectnessOfIteration = __webpack_require__(194);
var setToStringTag = __webpack_require__(74);
var inheritIfRequired = __webpack_require__(203);

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(16).f;
var create = __webpack_require__(45);
var redefineAll = __webpack_require__(191);
var bind = __webpack_require__(72);
var anInstance = __webpack_require__(146);
var iterate = __webpack_require__(147);
var defineIterator = __webpack_require__(150);
var setSpecies = __webpack_require__(192);
var DESCRIPTORS = __webpack_require__(15);
var fastKey = __webpack_require__(202).fastKey;
var InternalStateModule = __webpack_require__(44);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(190).charAt;
var toString = __webpack_require__(20);
var InternalStateModule = __webpack_require__(44);
var defineIterator = __webpack_require__(150);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var DOMIterables = __webpack_require__(183);
var DOMTokenListPrototype = __webpack_require__(184);
var ArrayIteratorMethods = __webpack_require__(199);
var createNonEnumerableProperty = __webpack_require__(43);
var wellKnownSymbol = __webpack_require__(7);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var classof = __webpack_require__(53);
var wellKnownSymbol = __webpack_require__(7);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var fails = __webpack_require__(3);
var toString = __webpack_require__(20);
var trim = __webpack_require__(110).trim;
var whitespaces = __webpack_require__(111);

var $parseInt = global.parseInt;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var fill = __webpack_require__(300);
var addToUnscopables = __webpack_require__(149);

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(19);
var toAbsoluteIndex = __webpack_require__(99);
var lengthOfArrayLike = __webpack_require__(25);

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = lengthOfArrayLike(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var aCallable = __webpack_require__(42);
var toObject = __webpack_require__(19);
var lengthOfArrayLike = __webpack_require__(25);
var toString = __webpack_require__(20);
var fails = __webpack_require__(3);
var internalSort = __webpack_require__(302);
var arrayMethodIsStrict = __webpack_require__(70);
var FF = __webpack_require__(303);
var IE_OR_EDGE = __webpack_require__(304);
var V8 = __webpack_require__(64);
var WEBKIT = __webpack_require__(305);

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort.call(array) : nativeSort.call(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) items.push(array[index]);
    }

    items = internalSort(items, getSortCompare(comparefn));
    itemsLength = items.length;
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) delete array[index++];

    return array;
  }
});


/***/ }),
/* 302 */
/***/ (function(module, exports) {

// TODO: use something more complex like timsort?
var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    mergeSort(array.slice(0, middle), comparefn),
    mergeSort(array.slice(middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;
  var result = [];

  while (lindex < llength || rindex < rlength) {
    if (lindex < llength && rindex < rlength) {
      result.push(comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]);
    } else {
      result.push(lindex < llength ? left[lindex++] : right[rindex++]);
    }
  } return result;
};

module.exports = mergeSort;


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(39);

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var UA = __webpack_require__(39);

module.exports = /MSIE|Trident/.test(UA);


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(39);

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),
/* 306 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiAgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxnIGlkPSIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgoJCTxyZWN0IGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PC9yZWN0PgoJCTxyZWN0IGlkPSJSZWN0YW5nbGUiIHN0cm9rZT0iI2FiZiIgIHg9Ii0xIiB5PSItMSIgd2lkdGg9IjJweCIgaGVpZ2h0PSIycHgiPjwvcmVjdD4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var $parseFloat = __webpack_require__(308);

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != $parseFloat }, {
  parseFloat: $parseFloat
});


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var fails = __webpack_require__(3);
var toString = __webpack_require__(20);
var trim = __webpack_require__(110).trim;
var whitespaces = __webpack_require__(111);

var $parseFloat = global.parseFloat;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseFloat(Object(ITERATOR)); }));

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(toString(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var IndexedObject = __webpack_require__(91);
var toIndexedObject = __webpack_require__(24);
var arrayMethodIsStrict = __webpack_require__(70);

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(142);
var anObject = __webpack_require__(13);
var toLength = __webpack_require__(100);
var toString = __webpack_require__(20);
var requireObjectCoercible = __webpack_require__(38);
var getMethod = __webpack_require__(54);
var advanceStringIndex = __webpack_require__(143);
var regExpExec = __webpack_require__(144);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : getMethod(regexp, MATCH);
      return matcher ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var toIntegerOrInfinity = __webpack_require__(34);
var thisNumberValue = __webpack_require__(208);
var repeat = __webpack_require__(312);
var fails = __webpack_require__(3);

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String(data[index]);
      s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(34);
var toString = __webpack_require__(20);
var requireObjectCoercible = __webpack_require__(38);

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var fails = __webpack_require__(3);
var toObject = __webpack_require__(19);
var toPrimitive = __webpack_require__(134);

var FORCED = fails(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
});

// `Date.prototype.toJSON` method
// https://tc39.es/ecma262/#sec-date.prototype.tojson
$({ target: 'Date', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O, 'number');
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$({ target: 'URL', proto: true, enumerable: true }, {
  toJSON: function toJSON() {
    return URL.prototype.toString.call(this);
  }
});


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var lastIndexOf = __webpack_require__(316);

// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-lastindexof -- safe */
var toIndexedObject = __webpack_require__(24);
var toIntegerOrInfinity = __webpack_require__(34);
var lengthOfArrayLike = __webpack_require__(25);
var arrayMethodIsStrict = __webpack_require__(70);

var min = Math.min;
var $lastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return $lastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = lengthOfArrayLike(O);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : $lastIndexOf;


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);
var bind = __webpack_require__(181);

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(15);
var global = __webpack_require__(4);
var isForced = __webpack_require__(101);
var redefine = __webpack_require__(21);
var hasOwn = __webpack_require__(18);
var inheritIfRequired = __webpack_require__(203);
var isSymbol = __webpack_require__(93);
var toPrimitive = __webpack_require__(134);
var fails = __webpack_require__(3);
var getOwnPropertyNames = __webpack_require__(68).f;
var getOwnPropertyDescriptor = __webpack_require__(41).f;
var defineProperty = __webpack_require__(16).f;
var thisNumberValue = __webpack_require__(208);
var trim = __webpack_require__(110).trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue === 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    var dummy = this;
    // check on 1..constructor(foo) case
    return dummy instanceof NumberWrapper && fails(function () { thisNumberValue(dummy); })
      ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(NativeNumber, key = keys[j]) && !hasOwn(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var flattenIntoArray = __webpack_require__(320);
var toObject = __webpack_require__(19);
var lengthOfArrayLike = __webpack_require__(25);
var toIntegerOrInfinity = __webpack_require__(34);
var arraySpeciesCreate = __webpack_require__(105);

// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg));
    return A;
  }
});


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(55);
var lengthOfArrayLike = __webpack_require__(25);
var bind = __webpack_require__(72);

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        elementLen = lengthOfArrayLike(element);
        targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(2);

// `Date.now` method
// https://tc39.es/ecma262/#sec-date.now
$({ target: 'Date', stat: true }, {
  now: function now() {
    return new Date().getTime();
  }
});


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var $trim = __webpack_require__(110).trim;
var forcedStringTrimMethod = __webpack_require__(323);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

var PROPER_FUNCTION_NAME = __webpack_require__(67).PROPER;
var fails = __webpack_require__(3);
var whitespaces = __webpack_require__(111);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014, Chris Pettitt
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 * may be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var lib = __webpack_require__(325);

module.exports = {
  Graph: lib.Graph,
  json: __webpack_require__(427),
  alg: __webpack_require__(428),
  version: lib.version
};


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

// Includes only the "core" of graphlib
module.exports = {
  Graph: __webpack_require__(151),
  version: __webpack_require__(426)
};


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(209);

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),
/* 327 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(116);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(116);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(116);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(116);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(115);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 333 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 334 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 335 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(115),
    Map = __webpack_require__(152),
    MapCache = __webpack_require__(153);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(86),
    isMasked = __webpack_require__(340),
    isObject = __webpack_require__(23),
    toSource = __webpack_require__(211);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(57);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 339 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(341);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(27);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 342 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(344),
    ListCache = __webpack_require__(115),
    Map = __webpack_require__(152);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(345),
    hashDelete = __webpack_require__(346),
    hashGet = __webpack_require__(347),
    hashHas = __webpack_require__(348),
    hashSet = __webpack_require__(349);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(117);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 346 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(117);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(117);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(117);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(118);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 351 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(118);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(118);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(118);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(87),
    keys = __webpack_require__(40);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 356 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(49),
    isObjectLike = __webpack_require__(32);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 358 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(49),
    isLength = __webpack_require__(156),
    isObjectLike = __webpack_require__(32);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(214);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(87),
    keysIn = __webpack_require__(50);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(23),
    isPrototype = __webpack_require__(123),
    nativeKeysIn = __webpack_require__(363);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 363 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(87),
    getSymbols = __webpack_require__(159);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(87),
    getSymbolsIn = __webpack_require__(219);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(221),
    getSymbolsIn = __webpack_require__(219),
    keysIn = __webpack_require__(50);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(48),
    root = __webpack_require__(27);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(48),
    root = __webpack_require__(27);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(48),
    root = __webpack_require__(27);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 370 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(161),
    cloneDataView = __webpack_require__(372),
    cloneRegExp = __webpack_require__(373),
    cloneSymbol = __webpack_require__(374),
    cloneTypedArray = __webpack_require__(224);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(161);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 373 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(57);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(376),
    baseUnary = __webpack_require__(122),
    nodeUtil = __webpack_require__(157);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(59),
    isObjectLike = __webpack_require__(32);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(378),
    baseUnary = __webpack_require__(122),
    nodeUtil = __webpack_require__(157);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(59),
    isObjectLike = __webpack_require__(32);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),
/* 379 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(35);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(125);

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(383),
    getMatchData = __webpack_require__(391),
    matchesStrictComparable = __webpack_require__(236);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(114),
    baseIsEqual = __webpack_require__(231);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(114),
    equalArrays = __webpack_require__(232),
    equalByTag = __webpack_require__(388),
    equalObjects = __webpack_require__(390),
    getTag = __webpack_require__(59),
    isArray = __webpack_require__(9),
    isBuffer = __webpack_require__(58),
    isTypedArray = __webpack_require__(89);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 385 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 386 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 387 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(57),
    Uint8Array = __webpack_require__(223),
    eq = __webpack_require__(56),
    equalArrays = __webpack_require__(232),
    mapToArray = __webpack_require__(389),
    setToArray = __webpack_require__(165);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 389 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(220);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(235),
    keys = __webpack_require__(40);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(231),
    get = __webpack_require__(393),
    hasIn = __webpack_require__(238),
    isKey = __webpack_require__(166),
    isStrictComparable = __webpack_require__(235),
    matchesStrictComparable = __webpack_require__(236),
    toKey = __webpack_require__(90);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(126);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(395);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(396);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(153);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(57),
    arrayMap = __webpack_require__(128),
    isArray = __webpack_require__(9),
    isSymbol = __webpack_require__(60);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 398 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(240),
    basePropertyDeep = __webpack_require__(400),
    isKey = __webpack_require__(166),
    toKey = __webpack_require__(90);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(126);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 401 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

module.exports = baseHas;


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(158),
    getTag = __webpack_require__(59),
    isArguments = __webpack_require__(88),
    isArray = __webpack_require__(9),
    isArrayLike = __webpack_require__(35),
    isBuffer = __webpack_require__(58),
    isPrototype = __webpack_require__(123),
    isTypedArray = __webpack_require__(89);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),
/* 403 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 404 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;


/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(158),
    getTag = __webpack_require__(59),
    isArrayLike = __webpack_require__(35),
    isString = __webpack_require__(406),
    stringSize = __webpack_require__(407);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length;
  }
  var tag = getTag(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return baseKeys(collection).length;
}

module.exports = size;


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(49),
    isArray = __webpack_require__(9),
    isObjectLike = __webpack_require__(32);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

var asciiSize = __webpack_require__(408),
    hasUnicode = __webpack_require__(409),
    unicodeSize = __webpack_require__(410);

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

module.exports = stringSize;


/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(240);

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

module.exports = asciiSize;


/***/ }),
/* 409 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 410 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

module.exports = unicodeSize;


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(154),
    baseCreate = __webpack_require__(226),
    baseForOwn = __webpack_require__(163),
    baseIteratee = __webpack_require__(36),
    getPrototype = __webpack_require__(124),
    isArray = __webpack_require__(9),
    isBuffer = __webpack_require__(58),
    isFunction = __webpack_require__(86),
    isObject = __webpack_require__(23),
    isTypedArray = __webpack_require__(89);

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object),
      isArrLike = isArr || isBuffer(object) || isTypedArray(object);

  iteratee = baseIteratee(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [];
    }
    else if (isObject(object)) {
      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
    }
    else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

module.exports = transform;


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(167),
    baseRest = __webpack_require__(129),
    baseUniq = __webpack_require__(417),
    isArrayLikeObject = __webpack_require__(249);

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

module.exports = union;


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(57),
    isArguments = __webpack_require__(88),
    isArray = __webpack_require__(9);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 414 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(162),
    defineProperty = __webpack_require__(212),
    identity = __webpack_require__(51);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 416 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(233),
    arrayIncludes = __webpack_require__(418),
    arrayIncludesWith = __webpack_require__(422),
    cacheHas = __webpack_require__(234),
    createSet = __webpack_require__(423),
    setToArray = __webpack_require__(165);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(419);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(248),
    baseIsNaN = __webpack_require__(420),
    strictIndexOf = __webpack_require__(421);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 420 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 421 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 422 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(222),
    noop = __webpack_require__(424),
    setToArray = __webpack_require__(165);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),
/* 424 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(128);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),
/* 426 */
/***/ (function(module, exports) {

module.exports = '2.1.8';


/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(22);
var Graph = __webpack_require__(151);

module.exports = {
  write: write,
  read: read
};

function write(g) {
  var json = {
    options: {
      directed: g.isDirected(),
      multigraph: g.isMultigraph(),
      compound: g.isCompound()
    },
    nodes: writeNodes(g),
    edges: writeEdges(g)
  };
  if (!_.isUndefined(g.graph())) {
    json.value = _.clone(g.graph());
  }
  return json;
}

function writeNodes(g) {
  return _.map(g.nodes(), function(v) {
    var nodeValue = g.node(v);
    var parent = g.parent(v);
    var node = { v: v };
    if (!_.isUndefined(nodeValue)) {
      node.value = nodeValue;
    }
    if (!_.isUndefined(parent)) {
      node.parent = parent;
    }
    return node;
  });
}

function writeEdges(g) {
  return _.map(g.edges(), function(e) {
    var edgeValue = g.edge(e);
    var edge = { v: e.v, w: e.w };
    if (!_.isUndefined(e.name)) {
      edge.name = e.name;
    }
    if (!_.isUndefined(edgeValue)) {
      edge.value = edgeValue;
    }
    return edge;
  });
}

function read(json) {
  var g = new Graph(json.options).setGraph(json.value);
  _.each(json.nodes, function(entry) {
    g.setNode(entry.v, entry.value);
    if (entry.parent) {
      g.setParent(entry.v, entry.parent);
    }
  });
  _.each(json.edges, function(entry) {
    g.setEdge({ v: entry.v, w: entry.w, name: entry.name }, entry.value);
  });
  return g;
}


/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  components: __webpack_require__(429),
  dijkstra: __webpack_require__(251),
  dijkstraAll: __webpack_require__(430),
  findCycles: __webpack_require__(431),
  floydWarshall: __webpack_require__(432),
  isAcyclic: __webpack_require__(433),
  postorder: __webpack_require__(434),
  preorder: __webpack_require__(435),
  prim: __webpack_require__(436),
  tarjan: __webpack_require__(253),
  topsort: __webpack_require__(254)
};


/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(22);

module.exports = components;

function components(g) {
  var visited = {};
  var cmpts = [];
  var cmpt;

  function dfs(v) {
    if (_.has(visited, v)) return;
    visited[v] = true;
    cmpt.push(v);
    _.each(g.successors(v), dfs);
    _.each(g.predecessors(v), dfs);
  }

  _.each(g.nodes(), function(v) {
    cmpt = [];
    dfs(v);
    if (cmpt.length) {
      cmpts.push(cmpt);
    }
  });

  return cmpts;
}


/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

var dijkstra = __webpack_require__(251);
var _ = __webpack_require__(22);

module.exports = dijkstraAll;

function dijkstraAll(g, weightFunc, edgeFunc) {
  return _.transform(g.nodes(), function(acc, v) {
    acc[v] = dijkstra(g, v, weightFunc, edgeFunc);
  }, {});
}


/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(22);
var tarjan = __webpack_require__(253);

module.exports = findCycles;

function findCycles(g) {
  return _.filter(tarjan(g), function(cmpt) {
    return cmpt.length > 1 || (cmpt.length === 1 && g.hasEdge(cmpt[0], cmpt[0]));
  });
}


/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(22);

module.exports = floydWarshall;

var DEFAULT_WEIGHT_FUNC = _.constant(1);

function floydWarshall(g, weightFn, edgeFn) {
  return runFloydWarshall(g,
    weightFn || DEFAULT_WEIGHT_FUNC,
    edgeFn || function(v) { return g.outEdges(v); });
}

function runFloydWarshall(g, weightFn, edgeFn) {
  var results = {};
  var nodes = g.nodes();

  nodes.forEach(function(v) {
    results[v] = {};
    results[v][v] = { distance: 0 };
    nodes.forEach(function(w) {
      if (v !== w) {
        results[v][w] = { distance: Number.POSITIVE_INFINITY };
      }
    });
    edgeFn(v).forEach(function(edge) {
      var w = edge.v === v ? edge.w : edge.v;
      var d = weightFn(edge);
      results[v][w] = { distance: d, predecessor: v };
    });
  });

  nodes.forEach(function(k) {
    var rowK = results[k];
    nodes.forEach(function(i) {
      var rowI = results[i];
      nodes.forEach(function(j) {
        var ik = rowI[k];
        var kj = rowK[j];
        var ij = rowI[j];
        var altDistance = ik.distance + kj.distance;
        if (altDistance < ij.distance) {
          ij.distance = altDistance;
          ij.predecessor = kj.predecessor;
        }
      });
    });
  });

  return results;
}


/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

var topsort = __webpack_require__(254);

module.exports = isAcyclic;

function isAcyclic(g) {
  try {
    topsort(g);
  } catch (e) {
    if (e instanceof topsort.CycleException) {
      return false;
    }
    throw e;
  }
  return true;
}


/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

var dfs = __webpack_require__(255);

module.exports = postorder;

function postorder(g, vs) {
  return dfs(g, vs, "post");
}


/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

var dfs = __webpack_require__(255);

module.exports = preorder;

function preorder(g, vs) {
  return dfs(g, vs, "pre");
}


/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(22);
var Graph = __webpack_require__(151);
var PriorityQueue = __webpack_require__(252);

module.exports = prim;

function prim(g, weightFunc) {
  var result = new Graph();
  var parents = {};
  var pq = new PriorityQueue();
  var v;

  function updateNeighbors(edge) {
    var w = edge.v === v ? edge.w : edge.v;
    var pri = pq.priority(w);
    if (pri !== undefined) {
      var edgeWeight = weightFunc(edge);
      if (edgeWeight < pri) {
        parents[w] = v;
        pq.decrease(w, edgeWeight);
      }
    }
  }

  if (g.nodeCount() === 0) {
    return result;
  }

  _.each(g.nodes(), function(v) {
    pq.add(v, Number.POSITIVE_INFINITY);
    result.setNode(v);
  });

  // Start from an arbitrary node
  pq.decrease(g.nodes()[0], 0);

  var init = false;
  while (pq.size() > 0) {
    v = pq.removeMin();
    if (_.has(parents, v)) {
      result.setEdge(v, parents[v]);
    } else if (init) {
      throw new Error("Input graph is not connected: " + g);
    } else {
      init = true;
    }

    g.nodeEdges(v).forEach(updateNeighbors);
  }

  return result;
}


/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(5);
var acyclic = __webpack_require__(477);
var normalize = __webpack_require__(480);
var rank = __webpack_require__(481);
var normalizeRanks = __webpack_require__(17).normalizeRanks;
var parentDummyChains = __webpack_require__(483);
var removeEmptyRanks = __webpack_require__(17).removeEmptyRanks;
var nestingGraph = __webpack_require__(484);
var addBorderSegments = __webpack_require__(485);
var coordinateSystem = __webpack_require__(486);
var order = __webpack_require__(487);
var position = __webpack_require__(496);
var util = __webpack_require__(17);
var Graph = __webpack_require__(26).Graph;

module.exports = layout;

function layout(g, opts) {
  var time = opts && opts.debugTiming ? util.time : util.notime;
  time("layout", function() {
    var layoutGraph = 
      time("  buildLayoutGraph", function() { return buildLayoutGraph(g); });
    time("  runLayout",        function() { runLayout(layoutGraph, time); });
    time("  updateInputGraph", function() { updateInputGraph(g, layoutGraph); });
  });
}

function runLayout(g, time) {
  time("    makeSpaceForEdgeLabels", function() { makeSpaceForEdgeLabels(g); });
  time("    removeSelfEdges",        function() { removeSelfEdges(g); });
  time("    acyclic",                function() { acyclic.run(g); });
  time("    nestingGraph.run",       function() { nestingGraph.run(g); });
  time("    rank",                   function() { rank(util.asNonCompoundGraph(g)); });
  time("    injectEdgeLabelProxies", function() { injectEdgeLabelProxies(g); });
  time("    removeEmptyRanks",       function() { removeEmptyRanks(g); });
  time("    nestingGraph.cleanup",   function() { nestingGraph.cleanup(g); });
  time("    normalizeRanks",         function() { normalizeRanks(g); });
  time("    assignRankMinMax",       function() { assignRankMinMax(g); });
  time("    removeEdgeLabelProxies", function() { removeEdgeLabelProxies(g); });
  time("    normalize.run",          function() { normalize.run(g); });
  time("    parentDummyChains",      function() { parentDummyChains(g); });
  time("    addBorderSegments",      function() { addBorderSegments(g); });
  time("    order",                  function() { order(g); });
  time("    insertSelfEdges",        function() { insertSelfEdges(g); });
  time("    adjustCoordinateSystem", function() { coordinateSystem.adjust(g); });
  time("    position",               function() { position(g); });
  time("    positionSelfEdges",      function() { positionSelfEdges(g); });
  time("    removeBorderNodes",      function() { removeBorderNodes(g); });
  time("    normalize.undo",         function() { normalize.undo(g); });
  time("    fixupEdgeLabelCoords",   function() { fixupEdgeLabelCoords(g); });
  time("    undoCoordinateSystem",   function() { coordinateSystem.undo(g); });
  time("    translateGraph",         function() { translateGraph(g); });
  time("    assignNodeIntersects",   function() { assignNodeIntersects(g); });
  time("    reversePoints",          function() { reversePointsForReversedEdges(g); });
  time("    acyclic.undo",           function() { acyclic.undo(g); });
}

/*
 * Copies final layout information from the layout graph back to the input
 * graph. This process only copies whitelisted attributes from the layout graph
 * to the input graph, so it serves as a good place to determine what
 * attributes can influence layout.
 */
function updateInputGraph(inputGraph, layoutGraph) {
  _.forEach(inputGraph.nodes(), function(v) {
    var inputLabel = inputGraph.node(v);
    var layoutLabel = layoutGraph.node(v);

    if (inputLabel) {
      inputLabel.x = layoutLabel.x;
      inputLabel.y = layoutLabel.y;

      if (layoutGraph.children(v).length) {
        inputLabel.width = layoutLabel.width;
        inputLabel.height = layoutLabel.height;
      }
    }
  });

  _.forEach(inputGraph.edges(), function(e) {
    var inputLabel = inputGraph.edge(e);
    var layoutLabel = layoutGraph.edge(e);

    inputLabel.points = layoutLabel.points;
    if (_.has(layoutLabel, "x")) {
      inputLabel.x = layoutLabel.x;
      inputLabel.y = layoutLabel.y;
    }
  });

  inputGraph.graph().width = layoutGraph.graph().width;
  inputGraph.graph().height = layoutGraph.graph().height;
}

var graphNumAttrs = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"];
var graphDefaults = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" };
var graphAttrs = ["acyclicer", "ranker", "rankdir", "align"];
var nodeNumAttrs = ["width", "height"];
var nodeDefaults = { width: 0, height: 0 };
var edgeNumAttrs = ["minlen", "weight", "width", "height", "labeloffset"];
var edgeDefaults = {
  minlen: 1, weight: 1, width: 0, height: 0,
  labeloffset: 10, labelpos: "r"
};
var edgeAttrs = ["labelpos"];

/*
 * Constructs a new graph from the input graph, which can be used for layout.
 * This process copies only whitelisted attributes from the input graph to the
 * layout graph. Thus this function serves as a good place to determine what
 * attributes can influence layout.
 */
function buildLayoutGraph(inputGraph) {
  var g = new Graph({ multigraph: true, compound: true });
  var graph = canonicalize(inputGraph.graph());

  g.setGraph(_.merge({},
    graphDefaults,
    selectNumberAttrs(graph, graphNumAttrs),
    _.pick(graph, graphAttrs)));

  _.forEach(inputGraph.nodes(), function(v) {
    var node = canonicalize(inputGraph.node(v));
    g.setNode(v, _.defaults(selectNumberAttrs(node, nodeNumAttrs), nodeDefaults));
    g.setParent(v, inputGraph.parent(v));
  });

  _.forEach(inputGraph.edges(), function(e) {
    var edge = canonicalize(inputGraph.edge(e));
    g.setEdge(e, _.merge({},
      edgeDefaults,
      selectNumberAttrs(edge, edgeNumAttrs),
      _.pick(edge, edgeAttrs)));
  });

  return g;
}

/*
 * This idea comes from the Gansner paper: to account for edge labels in our
 * layout we split each rank in half by doubling minlen and halving ranksep.
 * Then we can place labels at these mid-points between nodes.
 *
 * We also add some minimal padding to the width to push the label for the edge
 * away from the edge itself a bit.
 */
function makeSpaceForEdgeLabels(g) {
  var graph = g.graph();
  graph.ranksep /= 2;
  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    edge.minlen *= 2;
    if (edge.labelpos.toLowerCase() !== "c") {
      if (graph.rankdir === "TB" || graph.rankdir === "BT") {
        edge.width += edge.labeloffset;
      } else {
        edge.height += edge.labeloffset;
      }
    }
  });
}

/*
 * Creates temporary dummy nodes that capture the rank in which each edge's
 * label is going to, if it has one of non-zero width and height. We do this
 * so that we can safely remove empty ranks while preserving balance for the
 * label's position.
 */
function injectEdgeLabelProxies(g) {
  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    if (edge.width && edge.height) {
      var v = g.node(e.v);
      var w = g.node(e.w);
      var label = { rank: (w.rank - v.rank) / 2 + v.rank, e: e };
      util.addDummyNode(g, "edge-proxy", label, "_ep");
    }
  });
}

function assignRankMinMax(g) {
  var maxRank = 0;
  _.forEach(g.nodes(), function(v) {
    var node = g.node(v);
    if (node.borderTop) {
      node.minRank = g.node(node.borderTop).rank;
      node.maxRank = g.node(node.borderBottom).rank;
      maxRank = _.max(maxRank, node.maxRank);
    }
  });
  g.graph().maxRank = maxRank;
}

function removeEdgeLabelProxies(g) {
  _.forEach(g.nodes(), function(v) {
    var node = g.node(v);
    if (node.dummy === "edge-proxy") {
      g.edge(node.e).labelRank = node.rank;
      g.removeNode(v);
    }
  });
}

function translateGraph(g) {
  var minX = Number.POSITIVE_INFINITY;
  var maxX = 0;
  var minY = Number.POSITIVE_INFINITY;
  var maxY = 0;
  var graphLabel = g.graph();
  var marginX = graphLabel.marginx || 0;
  var marginY = graphLabel.marginy || 0;

  function getExtremes(attrs) {
    var x = attrs.x;
    var y = attrs.y;
    var w = attrs.width;
    var h = attrs.height;
    minX = Math.min(minX, x - w / 2);
    maxX = Math.max(maxX, x + w / 2);
    minY = Math.min(minY, y - h / 2);
    maxY = Math.max(maxY, y + h / 2);
  }

  _.forEach(g.nodes(), function(v) { getExtremes(g.node(v)); });
  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    if (_.has(edge, "x")) {
      getExtremes(edge);
    }
  });

  minX -= marginX;
  minY -= marginY;

  _.forEach(g.nodes(), function(v) {
    var node = g.node(v);
    node.x -= minX;
    node.y -= minY;
  });

  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    _.forEach(edge.points, function(p) {
      p.x -= minX;
      p.y -= minY;
    });
    if (_.has(edge, "x")) { edge.x -= minX; }
    if (_.has(edge, "y")) { edge.y -= minY; }
  });

  graphLabel.width = maxX - minX + marginX;
  graphLabel.height = maxY - minY + marginY;
}

function assignNodeIntersects(g) {
  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    var nodeV = g.node(e.v);
    var nodeW = g.node(e.w);
    var p1, p2;
    if (!edge.points) {
      edge.points = [];
      p1 = nodeW;
      p2 = nodeV;
    } else {
      p1 = edge.points[0];
      p2 = edge.points[edge.points.length - 1];
    }
    edge.points.unshift(util.intersectRect(nodeV, p1));
    edge.points.push(util.intersectRect(nodeW, p2));
  });
}

function fixupEdgeLabelCoords(g) {
  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    if (_.has(edge, "x")) {
      if (edge.labelpos === "l" || edge.labelpos === "r") {
        edge.width -= edge.labeloffset;
      }
      switch (edge.labelpos) {
      case "l": edge.x -= edge.width / 2 + edge.labeloffset; break;
      case "r": edge.x += edge.width / 2 + edge.labeloffset; break;
      }
    }
  });
}

function reversePointsForReversedEdges(g) {
  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    if (edge.reversed) {
      edge.points.reverse();
    }
  });
}

function removeBorderNodes(g) {
  _.forEach(g.nodes(), function(v) {
    if (g.children(v).length) {
      var node = g.node(v);
      var t = g.node(node.borderTop);
      var b = g.node(node.borderBottom);
      var l = g.node(_.last(node.borderLeft));
      var r = g.node(_.last(node.borderRight));

      node.width = Math.abs(r.x - l.x);
      node.height = Math.abs(b.y - t.y);
      node.x = l.x + node.width / 2;
      node.y = t.y + node.height / 2;
    }
  });

  _.forEach(g.nodes(), function(v) {
    if (g.node(v).dummy === "border") {
      g.removeNode(v);
    }
  });
}

function removeSelfEdges(g) {
  _.forEach(g.edges(), function(e) {
    if (e.v === e.w) {
      var node = g.node(e.v);
      if (!node.selfEdges) {
        node.selfEdges = [];
      }
      node.selfEdges.push({ e: e, label: g.edge(e) });
      g.removeEdge(e);
    }
  });
}

function insertSelfEdges(g) {
  var layers = util.buildLayerMatrix(g);
  _.forEach(layers, function(layer) {
    var orderShift = 0;
    _.forEach(layer, function(v, i) {
      var node = g.node(v);
      node.order = i + orderShift;
      _.forEach(node.selfEdges, function(selfEdge) {
        util.addDummyNode(g, "selfedge", {
          width: selfEdge.label.width,
          height: selfEdge.label.height,
          rank: node.rank,
          order: i + (++orderShift),
          e: selfEdge.e,
          label: selfEdge.label
        }, "_se");
      });
      delete node.selfEdges;
    });
  });
}

function positionSelfEdges(g) {
  _.forEach(g.nodes(), function(v) {
    var node = g.node(v);
    if (node.dummy === "selfedge") {
      var selfNode = g.node(node.e.v);
      var x = selfNode.x + selfNode.width / 2;
      var y = selfNode.y;
      var dx = node.x - x;
      var dy = selfNode.height / 2;
      g.setEdge(node.e, node.label);
      g.removeNode(v);
      node.label.points = [
        { x: x + 2 * dx / 3, y: y - dy },
        { x: x + 5 * dx / 6, y: y - dy },
        { x: x +     dx    , y: y },
        { x: x + 5 * dx / 6, y: y + dy },
        { x: x + 2 * dx / 3, y: y + dy }
      ];
      node.label.x = node.x;
      node.label.y = node.y;
    }
  });
}

function selectNumberAttrs(obj, attrs) {
  return _.mapValues(_.pick(obj, attrs), Number);
}

function canonicalize(attrs) {
  var newAttrs = {};
  _.forEach(attrs, function(v, k) {
    newAttrs[k.toLowerCase()] = v;
  });
  return newAttrs;
}


/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(209);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(129),
    eq = __webpack_require__(56),
    isIterateeCall = __webpack_require__(130),
    keysIn = __webpack_require__(50);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(441),
    findIndex = __webpack_require__(442);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(36),
    isArrayLike = __webpack_require__(35),
    keys = __webpack_require__(40);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(248),
    baseIteratee = __webpack_require__(36),
    toInteger = __webpack_require__(443);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(256);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__(445),
    isObject = __webpack_require__(23),
    isSymbol = __webpack_require__(60);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(446);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),
/* 446 */
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(164),
    castFunction = __webpack_require__(229),
    keysIn = __webpack_require__(50);

/**
 * Iterates over own and inherited enumerable string keyed properties of an
 * object and invokes `iteratee` for each property. The iteratee is invoked
 * with three arguments: (value, key, object). Iteratee functions may exit
 * iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forInRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forIn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
 */
function forIn(object, iteratee) {
  return object == null
    ? object
    : baseFor(object, castFunction(iteratee), keysIn);
}

module.exports = forIn;


/***/ }),
/* 448 */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(120),
    baseForOwn = __webpack_require__(163),
    baseIteratee = __webpack_require__(36);

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

var baseExtremum = __webpack_require__(168),
    baseGt = __webpack_require__(451),
    identity = __webpack_require__(51);

/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */
function max(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, baseGt)
    : undefined;
}

module.exports = max;


/***/ }),
/* 451 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

module.exports = baseGt;


/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(453),
    createAssigner = __webpack_require__(457);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(114),
    assignMergeValue = __webpack_require__(258),
    baseFor = __webpack_require__(164),
    baseMergeDeep = __webpack_require__(454),
    isObject = __webpack_require__(23),
    keysIn = __webpack_require__(50),
    safeGet = __webpack_require__(259);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(258),
    cloneBuffer = __webpack_require__(215),
    cloneTypedArray = __webpack_require__(224),
    copyArray = __webpack_require__(216),
    initCloneObject = __webpack_require__(225),
    isArguments = __webpack_require__(88),
    isArray = __webpack_require__(9),
    isArrayLikeObject = __webpack_require__(249),
    isBuffer = __webpack_require__(58),
    isFunction = __webpack_require__(86),
    isObject = __webpack_require__(23),
    isPlainObject = __webpack_require__(455),
    isTypedArray = __webpack_require__(89),
    safeGet = __webpack_require__(259),
    toPlainObject = __webpack_require__(456);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(49),
    getPrototype = __webpack_require__(124),
    isObjectLike = __webpack_require__(32);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(87),
    keysIn = __webpack_require__(50);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(129),
    isIterateeCall = __webpack_require__(130);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

var baseExtremum = __webpack_require__(168),
    baseLt = __webpack_require__(260),
    identity = __webpack_require__(51);

/**
 * Computes the minimum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => undefined
 */
function min(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, baseLt)
    : undefined;
}

module.exports = min;


/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

var baseExtremum = __webpack_require__(168),
    baseIteratee = __webpack_require__(36),
    baseLt = __webpack_require__(260);

/**
 * This method is like `_.min` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * // The `_.property` iteratee shorthand.
 * _.minBy(objects, 'n');
 * // => { 'n': 1 }
 */
function minBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, baseIteratee(iteratee, 2), baseLt)
    : undefined;
}

module.exports = minBy;


/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(27);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(462),
    flatRest = __webpack_require__(465);

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(463),
    hasIn = __webpack_require__(238);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(126),
    baseSet = __webpack_require__(464),
    castPath = __webpack_require__(127);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(119),
    castPath = __webpack_require__(127),
    isIndex = __webpack_require__(121),
    isObject = __webpack_require__(23),
    toKey = __webpack_require__(90);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(257),
    overRest = __webpack_require__(246),
    setToString = __webpack_require__(247);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

var createRange = __webpack_require__(467);

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

module.exports = range;


/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

var baseRange = __webpack_require__(468),
    isIterateeCall = __webpack_require__(130),
    toFinite = __webpack_require__(256);

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

module.exports = createRange;


/***/ }),
/* 468 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

module.exports = baseRange;


/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(167),
    baseOrderBy = __webpack_require__(470),
    baseRest = __webpack_require__(129),
    isIterateeCall = __webpack_require__(130);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(128),
    baseGet = __webpack_require__(126),
    baseIteratee = __webpack_require__(36),
    baseMap = __webpack_require__(244),
    baseSortBy = __webpack_require__(471),
    baseUnary = __webpack_require__(122),
    compareMultiple = __webpack_require__(472),
    identity = __webpack_require__(51),
    isArray = __webpack_require__(9);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),
/* 471 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__(473);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(60);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(237);

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

module.exports = uniqueId;


/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(119),
    baseZipObject = __webpack_require__(476);

/**
 * This method is like `_.fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 0.4.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.zipObject(['a', 'b'], [1, 2]);
 * // => { 'a': 1, 'b': 2 }
 */
function zipObject(props, values) {
  return baseZipObject(props || [], values || [], assignValue);
}

module.exports = zipObject;


/***/ }),
/* 476 */
/***/ (function(module, exports) {

/**
 * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
 *
 * @private
 * @param {Array} props The property identifiers.
 * @param {Array} values The property values.
 * @param {Function} assignFunc The function to assign values.
 * @returns {Object} Returns the new object.
 */
function baseZipObject(props, values, assignFunc) {
  var index = -1,
      length = props.length,
      valsLength = values.length,
      result = {};

  while (++index < length) {
    var value = index < valsLength ? values[index] : undefined;
    assignFunc(result, props[index], value);
  }
  return result;
}

module.exports = baseZipObject;


/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(5);
var greedyFAS = __webpack_require__(478);

module.exports = {
  run: run,
  undo: undo
};

function run(g) {
  var fas = (g.graph().acyclicer === "greedy"
    ? greedyFAS(g, weightFn(g))
    : dfsFAS(g));
  _.forEach(fas, function(e) {
    var label = g.edge(e);
    g.removeEdge(e);
    label.forwardName = e.name;
    label.reversed = true;
    g.setEdge(e.w, e.v, label, _.uniqueId("rev"));
  });

  function weightFn(g) {
    return function(e) {
      return g.edge(e).weight;
    };
  }
}

function dfsFAS(g) {
  var fas = [];
  var stack = {};
  var visited = {};

  function dfs(v) {
    if (_.has(visited, v)) {
      return;
    }
    visited[v] = true;
    stack[v] = true;
    _.forEach(g.outEdges(v), function(e) {
      if (_.has(stack, e.w)) {
        fas.push(e);
      } else {
        dfs(e.w);
      }
    });
    delete stack[v];
  }

  _.forEach(g.nodes(), dfs);
  return fas;
}

function undo(g) {
  _.forEach(g.edges(), function(e) {
    var label = g.edge(e);
    if (label.reversed) {
      g.removeEdge(e);

      var forwardName = label.forwardName;
      delete label.reversed;
      delete label.forwardName;
      g.setEdge(e.w, e.v, label, forwardName);
    }
  });
}


/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(5);
var Graph = __webpack_require__(26).Graph;
var List = __webpack_require__(479);

/*
 * A greedy heuristic for finding a feedback arc set for a graph. A feedback
 * arc set is a set of edges that can be removed to make a graph acyclic.
 * The algorithm comes from: P. Eades, X. Lin, and W. F. Smyth, "A fast and
 * effective heuristic for the feedback arc set problem." This implementation
 * adjusts that from the paper to allow for weighted edges.
 */
module.exports = greedyFAS;

var DEFAULT_WEIGHT_FN = _.constant(1);

function greedyFAS(g, weightFn) {
  if (g.nodeCount() <= 1) {
    return [];
  }
  var state = buildState(g, weightFn || DEFAULT_WEIGHT_FN);
  var results = doGreedyFAS(state.graph, state.buckets, state.zeroIdx);

  // Expand multi-edges
  return _.flatten(_.map(results, function(e) {
    return g.outEdges(e.v, e.w);
  }), true);
}

function doGreedyFAS(g, buckets, zeroIdx) {
  var results = [];
  var sources = buckets[buckets.length - 1];
  var sinks = buckets[0];

  var entry;
  while (g.nodeCount()) {
    while ((entry = sinks.dequeue()))   { removeNode(g, buckets, zeroIdx, entry); }
    while ((entry = sources.dequeue())) { removeNode(g, buckets, zeroIdx, entry); }
    if (g.nodeCount()) {
      for (var i = buckets.length - 2; i > 0; --i) {
        entry = buckets[i].dequeue();
        if (entry) {
          results = results.concat(removeNode(g, buckets, zeroIdx, entry, true));
          break;
        }
      }
    }
  }

  return results;
}

function removeNode(g, buckets, zeroIdx, entry, collectPredecessors) {
  var results = collectPredecessors ? [] : undefined;

  _.forEach(g.inEdges(entry.v), function(edge) {
    var weight = g.edge(edge);
    var uEntry = g.node(edge.v);

    if (collectPredecessors) {
      results.push({ v: edge.v, w: edge.w });
    }

    uEntry.out -= weight;
    assignBucket(buckets, zeroIdx, uEntry);
  });

  _.forEach(g.outEdges(entry.v), function(edge) {
    var weight = g.edge(edge);
    var w = edge.w;
    var wEntry = g.node(w);
    wEntry["in"] -= weight;
    assignBucket(buckets, zeroIdx, wEntry);
  });

  g.removeNode(entry.v);

  return results;
}

function buildState(g, weightFn) {
  var fasGraph = new Graph();
  var maxIn = 0;
  var maxOut = 0;

  _.forEach(g.nodes(), function(v) {
    fasGraph.setNode(v, { v: v, "in": 0, out: 0 });
  });

  // Aggregate weights on nodes, but also sum the weights across multi-edges
  // into a single edge for the fasGraph.
  _.forEach(g.edges(), function(e) {
    var prevWeight = fasGraph.edge(e.v, e.w) || 0;
    var weight = weightFn(e);
    var edgeWeight = prevWeight + weight;
    fasGraph.setEdge(e.v, e.w, edgeWeight);
    maxOut = Math.max(maxOut, fasGraph.node(e.v).out += weight);
    maxIn  = Math.max(maxIn,  fasGraph.node(e.w)["in"]  += weight);
  });

  var buckets = _.range(maxOut + maxIn + 3).map(function() { return new List(); });
  var zeroIdx = maxIn + 1;

  _.forEach(fasGraph.nodes(), function(v) {
    assignBucket(buckets, zeroIdx, fasGraph.node(v));
  });

  return { graph: fasGraph, buckets: buckets, zeroIdx: zeroIdx };
}

function assignBucket(buckets, zeroIdx, entry) {
  if (!entry.out) {
    buckets[0].enqueue(entry);
  } else if (!entry["in"]) {
    buckets[buckets.length - 1].enqueue(entry);
  } else {
    buckets[entry.out - entry["in"] + zeroIdx].enqueue(entry);
  }
}


/***/ }),
/* 479 */
/***/ (function(module, exports) {

/*
 * Simple doubly linked list implementation derived from Cormen, et al.,
 * "Introduction to Algorithms".
 */

module.exports = List;

function List() {
  var sentinel = {};
  sentinel._next = sentinel._prev = sentinel;
  this._sentinel = sentinel;
}

List.prototype.dequeue = function() {
  var sentinel = this._sentinel;
  var entry = sentinel._prev;
  if (entry !== sentinel) {
    unlink(entry);
    return entry;
  }
};

List.prototype.enqueue = function(entry) {
  var sentinel = this._sentinel;
  if (entry._prev && entry._next) {
    unlink(entry);
  }
  entry._next = sentinel._next;
  sentinel._next._prev = entry;
  sentinel._next = entry;
  entry._prev = sentinel;
};

List.prototype.toString = function() {
  var strs = [];
  var sentinel = this._sentinel;
  var curr = sentinel._prev;
  while (curr !== sentinel) {
    strs.push(JSON.stringify(curr, filterOutLinks));
    curr = curr._prev;
  }
  return "[" + strs.join(", ") + "]";
};

function unlink(entry) {
  entry._prev._next = entry._next;
  entry._next._prev = entry._prev;
  delete entry._next;
  delete entry._prev;
}

function filterOutLinks(k, v) {
  if (k !== "_next" && k !== "_prev") {
    return v;
  }
}


/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(5);
var util = __webpack_require__(17);

module.exports = {
  run: run,
  undo: undo
};

/*
 * Breaks any long edges in the graph into short segments that span 1 layer
 * each. This operation is undoable with the denormalize function.
 *
 * Pre-conditions:
 *
 *    1. The input graph is a DAG.
 *    2. Each node in the graph has a "rank" property.
 *
 * Post-condition:
 *
 *    1. All edges in the graph have a length of 1.
 *    2. Dummy nodes are added where edges have been split into segments.
 *    3. The graph is augmented with a "dummyChains" attribute which contains
 *       the first dummy in each chain of dummy nodes produced.
 */
function run(g) {
  g.graph().dummyChains = [];
  _.forEach(g.edges(), function(edge) { normalizeEdge(g, edge); });
}

function normalizeEdge(g, e) {
  var v = e.v;
  var vRank = g.node(v).rank;
  var w = e.w;
  var wRank = g.node(w).rank;
  var name = e.name;
  var edgeLabel = g.edge(e);
  var labelRank = edgeLabel.labelRank;

  if (wRank === vRank + 1) return;

  g.removeEdge(e);

  var dummy, attrs, i;
  for (i = 0, ++vRank; vRank < wRank; ++i, ++vRank) {
    edgeLabel.points = [];
    attrs = {
      width: 0, height: 0,
      edgeLabel: edgeLabel, edgeObj: e,
      rank: vRank
    };
    dummy = util.addDummyNode(g, "edge", attrs, "_d");
    if (vRank === labelRank) {
      attrs.width = edgeLabel.width;
      attrs.height = edgeLabel.height;
      attrs.dummy = "edge-label";
      attrs.labelpos = edgeLabel.labelpos;
    }
    g.setEdge(v, dummy, { weight: edgeLabel.weight }, name);
    if (i === 0) {
      g.graph().dummyChains.push(dummy);
    }
    v = dummy;
  }

  g.setEdge(v, w, { weight: edgeLabel.weight }, name);
}

function undo(g) {
  _.forEach(g.graph().dummyChains, function(v) {
    var node = g.node(v);
    var origLabel = node.edgeLabel;
    var w;
    g.setEdge(node.edgeObj, origLabel);
    while (node.dummy) {
      w = g.successors(v)[0];
      g.removeNode(v);
      origLabel.points.push({ x: node.x, y: node.y });
      if (node.dummy === "edge-label") {
        origLabel.x = node.x;
        origLabel.y = node.y;
        origLabel.width = node.width;
        origLabel.height = node.height;
      }
      v = w;
      node = g.node(v);
    }
  });
}


/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var rankUtil = __webpack_require__(131);
var longestPath = rankUtil.longestPath;
var feasibleTree = __webpack_require__(261);
var networkSimplex = __webpack_require__(482);

module.exports = rank;

/*
 * Assigns a rank to each node in the input graph that respects the "minlen"
 * constraint specified on edges between nodes.
 *
 * This basic structure is derived from Gansner, et al., "A Technique for
 * Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a connected DAG
 *    2. Graph nodes must be objects
 *    3. Graph edges must have "weight" and "minlen" attributes
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have a "rank" attribute based on the results of the
 *       algorithm. Ranks can start at any index (including negative), we'll
 *       fix them up later.
 */
function rank(g) {
  switch(g.graph().ranker) {
  case "network-simplex": networkSimplexRanker(g); break;
  case "tight-tree": tightTreeRanker(g); break;
  case "longest-path": longestPathRanker(g); break;
  default: networkSimplexRanker(g);
  }
}

// A fast and simple ranker, but results are far from optimal.
var longestPathRanker = longestPath;

function tightTreeRanker(g) {
  longestPath(g);
  feasibleTree(g);
}

function networkSimplexRanker(g) {
  networkSimplex(g);
}


/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(5);
var feasibleTree = __webpack_require__(261);
var slack = __webpack_require__(131).slack;
var initRank = __webpack_require__(131).longestPath;
var preorder = __webpack_require__(26).alg.preorder;
var postorder = __webpack_require__(26).alg.postorder;
var simplify = __webpack_require__(17).simplify;

module.exports = networkSimplex;

// Expose some internals for testing purposes
networkSimplex.initLowLimValues = initLowLimValues;
networkSimplex.initCutValues = initCutValues;
networkSimplex.calcCutValue = calcCutValue;
networkSimplex.leaveEdge = leaveEdge;
networkSimplex.enterEdge = enterEdge;
networkSimplex.exchangeEdges = exchangeEdges;

/*
 * The network simplex algorithm assigns ranks to each node in the input graph
 * and iteratively improves the ranking to reduce the length of edges.
 *
 * Preconditions:
 *
 *    1. The input graph must be a DAG.
 *    2. All nodes in the graph must have an object value.
 *    3. All edges in the graph must have "minlen" and "weight" attributes.
 *
 * Postconditions:
 *
 *    1. All nodes in the graph will have an assigned "rank" attribute that has
 *       been optimized by the network simplex algorithm. Ranks start at 0.
 *
 *
 * A rough sketch of the algorithm is as follows:
 *
 *    1. Assign initial ranks to each node. We use the longest path algorithm,
 *       which assigns ranks to the lowest position possible. In general this
 *       leads to very wide bottom ranks and unnecessarily long edges.
 *    2. Construct a feasible tight tree. A tight tree is one such that all
 *       edges in the tree have no slack (difference between length of edge
 *       and minlen for the edge). This by itself greatly improves the assigned
 *       rankings by shorting edges.
 *    3. Iteratively find edges that have negative cut values. Generally a
 *       negative cut value indicates that the edge could be removed and a new
 *       tree edge could be added to produce a more compact graph.
 *
 * Much of the algorithms here are derived from Gansner, et al., "A Technique
 * for Drawing Directed Graphs." The structure of the file roughly follows the
 * structure of the overall algorithm.
 */
function networkSimplex(g) {
  g = simplify(g);
  initRank(g);
  var t = feasibleTree(g);
  initLowLimValues(t);
  initCutValues(t, g);

  var e, f;
  while ((e = leaveEdge(t))) {
    f = enterEdge(t, g, e);
    exchangeEdges(t, g, e, f);
  }
}

/*
 * Initializes cut values for all edges in the tree.
 */
function initCutValues(t, g) {
  var vs = postorder(t, t.nodes());
  vs = vs.slice(0, vs.length - 1);
  _.forEach(vs, function(v) {
    assignCutValue(t, g, v);
  });
}

function assignCutValue(t, g, child) {
  var childLab = t.node(child);
  var parent = childLab.parent;
  t.edge(child, parent).cutvalue = calcCutValue(t, g, child);
}

/*
 * Given the tight tree, its graph, and a child in the graph calculate and
 * return the cut value for the edge between the child and its parent.
 */
function calcCutValue(t, g, child) {
  var childLab = t.node(child);
  var parent = childLab.parent;
  // True if the child is on the tail end of the edge in the directed graph
  var childIsTail = true;
  // The graph's view of the tree edge we're inspecting
  var graphEdge = g.edge(child, parent);
  // The accumulated cut value for the edge between this node and its parent
  var cutValue = 0;

  if (!graphEdge) {
    childIsTail = false;
    graphEdge = g.edge(parent, child);
  }

  cutValue = graphEdge.weight;

  _.forEach(g.nodeEdges(child), function(e) {
    var isOutEdge = e.v === child,
      other = isOutEdge ? e.w : e.v;

    if (other !== parent) {
      var pointsToHead = isOutEdge === childIsTail,
        otherWeight = g.edge(e).weight;

      cutValue += pointsToHead ? otherWeight : -otherWeight;
      if (isTreeEdge(t, child, other)) {
        var otherCutValue = t.edge(child, other).cutvalue;
        cutValue += pointsToHead ? -otherCutValue : otherCutValue;
      }
    }
  });

  return cutValue;
}

function initLowLimValues(tree, root) {
  if (arguments.length < 2) {
    root = tree.nodes()[0];
  }
  dfsAssignLowLim(tree, {}, 1, root);
}

function dfsAssignLowLim(tree, visited, nextLim, v, parent) {
  var low = nextLim;
  var label = tree.node(v);

  visited[v] = true;
  _.forEach(tree.neighbors(v), function(w) {
    if (!_.has(visited, w)) {
      nextLim = dfsAssignLowLim(tree, visited, nextLim, w, v);
    }
  });

  label.low = low;
  label.lim = nextLim++;
  if (parent) {
    label.parent = parent;
  } else {
    // TODO should be able to remove this when we incrementally update low lim
    delete label.parent;
  }

  return nextLim;
}

function leaveEdge(tree) {
  return _.find(tree.edges(), function(e) {
    return tree.edge(e).cutvalue < 0;
  });
}

function enterEdge(t, g, edge) {
  var v = edge.v;
  var w = edge.w;

  // For the rest of this function we assume that v is the tail and w is the
  // head, so if we don't have this edge in the graph we should flip it to
  // match the correct orientation.
  if (!g.hasEdge(v, w)) {
    v = edge.w;
    w = edge.v;
  }

  var vLabel = t.node(v);
  var wLabel = t.node(w);
  var tailLabel = vLabel;
  var flip = false;

  // If the root is in the tail of the edge then we need to flip the logic that
  // checks for the head and tail nodes in the candidates function below.
  if (vLabel.lim > wLabel.lim) {
    tailLabel = wLabel;
    flip = true;
  }

  var candidates = _.filter(g.edges(), function(edge) {
    return flip === isDescendant(t, t.node(edge.v), tailLabel) &&
           flip !== isDescendant(t, t.node(edge.w), tailLabel);
  });

  return _.minBy(candidates, function(edge) { return slack(g, edge); });
}

function exchangeEdges(t, g, e, f) {
  var v = e.v;
  var w = e.w;
  t.removeEdge(v, w);
  t.setEdge(f.v, f.w, {});
  initLowLimValues(t);
  initCutValues(t, g);
  updateRanks(t, g);
}

function updateRanks(t, g) {
  var root = _.find(t.nodes(), function(v) { return !g.node(v).parent; });
  var vs = preorder(t, root);
  vs = vs.slice(1);
  _.forEach(vs, function(v) {
    var parent = t.node(v).parent,
      edge = g.edge(v, parent),
      flipped = false;

    if (!edge) {
      edge = g.edge(parent, v);
      flipped = true;
    }

    g.node(v).rank = g.node(parent).rank + (flipped ? edge.minlen : -edge.minlen);
  });
}

/*
 * Returns true if the edge is in the tree.
 */
function isTreeEdge(tree, u, v) {
  return tree.hasEdge(u, v);
}

/*
 * Returns true if the specified node is descendant of the root node per the
 * assigned low and lim attributes in the tree.
 */
function isDescendant(tree, vLabel, rootLabel) {
  return rootLabel.low <= vLabel.lim && vLabel.lim <= rootLabel.lim;
}


/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(5);

module.exports = parentDummyChains;

function parentDummyChains(g) {
  var postorderNums = postorder(g);

  _.forEach(g.graph().dummyChains, function(v) {
    var node = g.node(v);
    var edgeObj = node.edgeObj;
    var pathData = findPath(g, postorderNums, edgeObj.v, edgeObj.w);
    var path = pathData.path;
    var lca = pathData.lca;
    var pathIdx = 0;
    var pathV = path[pathIdx];
    var ascending = true;

    while (v !== edgeObj.w) {
      node = g.node(v);

      if (ascending) {
        while ((pathV = path[pathIdx]) !== lca &&
               g.node(pathV).maxRank < node.rank) {
          pathIdx++;
        }

        if (pathV === lca) {
          ascending = false;
        }
      }

      if (!ascending) {
        while (pathIdx < path.length - 1 &&
               g.node(pathV = path[pathIdx + 1]).minRank <= node.rank) {
          pathIdx++;
        }
        pathV = path[pathIdx];
      }

      g.setParent(v, pathV);
      v = g.successors(v)[0];
    }
  });
}

// Find a path from v to w through the lowest common ancestor (LCA). Return the
// full path and the LCA.
function findPath(g, postorderNums, v, w) {
  var vPath = [];
  var wPath = [];
  var low = Math.min(postorderNums[v].low, postorderNums[w].low);
  var lim = Math.max(postorderNums[v].lim, postorderNums[w].lim);
  var parent;
  var lca;

  // Traverse up from v to find the LCA
  parent = v;
  do {
    parent = g.parent(parent);
    vPath.push(parent);
  } while (parent &&
           (postorderNums[parent].low > low || lim > postorderNums[parent].lim));
  lca = parent;

  // Traverse from w to LCA
  parent = w;
  while ((parent = g.parent(parent)) !== lca) {
    wPath.push(parent);
  }

  return { path: vPath.concat(wPath.reverse()), lca: lca };
}

function postorder(g) {
  var result = {};
  var lim = 0;

  function dfs(v) {
    var low = lim;
    _.forEach(g.children(v), dfs);
    result[v] = { low: low, lim: lim++ };
  }
  _.forEach(g.children(), dfs);

  return result;
}


/***/ }),
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(5);
var util = __webpack_require__(17);

module.exports = {
  run: run,
  cleanup: cleanup
};

/*
 * A nesting graph creates dummy nodes for the tops and bottoms of subgraphs,
 * adds appropriate edges to ensure that all cluster nodes are placed between
 * these boundries, and ensures that the graph is connected.
 *
 * In addition we ensure, through the use of the minlen property, that nodes
 * and subgraph border nodes to not end up on the same rank.
 *
 * Preconditions:
 *
 *    1. Input graph is a DAG
 *    2. Nodes in the input graph has a minlen attribute
 *
 * Postconditions:
 *
 *    1. Input graph is connected.
 *    2. Dummy nodes are added for the tops and bottoms of subgraphs.
 *    3. The minlen attribute for nodes is adjusted to ensure nodes do not
 *       get placed on the same rank as subgraph border nodes.
 *
 * The nesting graph idea comes from Sander, "Layout of Compound Directed
 * Graphs."
 */
function run(g) {
  var root = util.addDummyNode(g, "root", {}, "_root");
  var depths = treeDepths(g);
  var height = _.max(_.values(depths)) - 1; // Note: depths is an Object not an array
  var nodeSep = 2 * height + 1;

  g.graph().nestingRoot = root;

  // Multiply minlen by nodeSep to align nodes on non-border ranks.
  _.forEach(g.edges(), function(e) { g.edge(e).minlen *= nodeSep; });

  // Calculate a weight that is sufficient to keep subgraphs vertically compact
  var weight = sumWeights(g) + 1;

  // Create border nodes and link them up
  _.forEach(g.children(), function(child) {
    dfs(g, root, nodeSep, weight, height, depths, child);
  });

  // Save the multiplier for node layers for later removal of empty border
  // layers.
  g.graph().nodeRankFactor = nodeSep;
}

function dfs(g, root, nodeSep, weight, height, depths, v) {
  var children = g.children(v);
  if (!children.length) {
    if (v !== root) {
      g.setEdge(root, v, { weight: 0, minlen: nodeSep });
    }
    return;
  }

  var top = util.addBorderNode(g, "_bt");
  var bottom = util.addBorderNode(g, "_bb");
  var label = g.node(v);

  g.setParent(top, v);
  label.borderTop = top;
  g.setParent(bottom, v);
  label.borderBottom = bottom;

  _.forEach(children, function(child) {
    dfs(g, root, nodeSep, weight, height, depths, child);

    var childNode = g.node(child);
    var childTop = childNode.borderTop ? childNode.borderTop : child;
    var childBottom = childNode.borderBottom ? childNode.borderBottom : child;
    var thisWeight = childNode.borderTop ? weight : 2 * weight;
    var minlen = childTop !== childBottom ? 1 : height - depths[v] + 1;

    g.setEdge(top, childTop, {
      weight: thisWeight,
      minlen: minlen,
      nestingEdge: true
    });

    g.setEdge(childBottom, bottom, {
      weight: thisWeight,
      minlen: minlen,
      nestingEdge: true
    });
  });

  if (!g.parent(v)) {
    g.setEdge(root, top, { weight: 0, minlen: height + depths[v] });
  }
}

function treeDepths(g) {
  var depths = {};
  function dfs(v, depth) {
    var children = g.children(v);
    if (children && children.length) {
      _.forEach(children, function(child) {
        dfs(child, depth + 1);
      });
    }
    depths[v] = depth;
  }
  _.forEach(g.children(), function(v) { dfs(v, 1); });
  return depths;
}

function sumWeights(g) {
  return _.reduce(g.edges(), function(acc, e) {
    return acc + g.edge(e).weight;
  }, 0);
}

function cleanup(g) {
  var graphLabel = g.graph();
  g.removeNode(graphLabel.nestingRoot);
  delete graphLabel.nestingRoot;
  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    if (edge.nestingEdge) {
      g.removeEdge(e);
    }
  });
}


/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(5);
var util = __webpack_require__(17);

module.exports = addBorderSegments;

function addBorderSegments(g) {
  function dfs(v) {
    var children = g.children(v);
    var node = g.node(v);
    if (children.length) {
      _.forEach(children, dfs);
    }

    if (_.has(node, "minRank")) {
      node.borderLeft = [];
      node.borderRight = [];
      for (var rank = node.minRank, maxRank = node.maxRank + 1;
        rank < maxRank;
        ++rank) {
        addBorderNode(g, "borderLeft", "_bl", v, node, rank);
        addBorderNode(g, "borderRight", "_br", v, node, rank);
      }
    }
  }

  _.forEach(g.children(), dfs);
}

function addBorderNode(g, prop, prefix, sg, sgNode, rank) {
  var label = { width: 0, height: 0, rank: rank, borderType: prop };
  var prev = sgNode[prop][rank - 1];
  var curr = util.addDummyNode(g, "border", label, prefix);
  sgNode[prop][rank] = curr;
  g.setParent(curr, sg);
  if (prev) {
    g.setEdge(prev, curr, { weight: 1 });
  }
}


/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(5);

module.exports = {
  adjust: adjust,
  undo: undo
};

function adjust(g) {
  var rankDir = g.graph().rankdir.toLowerCase();
  if (rankDir === "lr" || rankDir === "rl") {
    swapWidthHeight(g);
  }
}

function undo(g) {
  var rankDir = g.graph().rankdir.toLowerCase();
  if (rankDir === "bt" || rankDir === "rl") {
    reverseY(g);
  }

  if (rankDir === "lr" || rankDir === "rl") {
    swapXY(g);
    swapWidthHeight(g);
  }
}

function swapWidthHeight(g) {
  _.forEach(g.nodes(), function(v) { swapWidthHeightOne(g.node(v)); });
  _.forEach(g.edges(), function(e) { swapWidthHeightOne(g.edge(e)); });
}

function swapWidthHeightOne(attrs) {
  var w = attrs.width;
  attrs.width = attrs.height;
  attrs.height = w;
}

function reverseY(g) {
  _.forEach(g.nodes(), function(v) { reverseYOne(g.node(v)); });

  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    _.forEach(edge.points, reverseYOne);
    if (_.has(edge, "y")) {
      reverseYOne(edge);
    }
  });
}

function reverseYOne(attrs) {
  attrs.y = -attrs.y;
}

function swapXY(g) {
  _.forEach(g.nodes(), function(v) { swapXYOne(g.node(v)); });

  _.forEach(g.edges(), function(e) {
    var edge = g.edge(e);
    _.forEach(edge.points, swapXYOne);
    if (_.has(edge, "x")) {
      swapXYOne(edge);
    }
  });
}

function swapXYOne(attrs) {
  var x = attrs.x;
  attrs.x = attrs.y;
  attrs.y = x;
}


/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(5);
var initOrder = __webpack_require__(488);
var crossCount = __webpack_require__(489);
var sortSubgraph = __webpack_require__(490);
var buildLayerGraph = __webpack_require__(494);
var addSubgraphConstraints = __webpack_require__(495);
var Graph = __webpack_require__(26).Graph;
var util = __webpack_require__(17);

module.exports = order;

/*
 * Applies heuristics to minimize edge crossings in the graph and sets the best
 * order solution as an order attribute on each node.
 *
 * Pre-conditions:
 *
 *    1. Graph must be DAG
 *    2. Graph nodes must be objects with a "rank" attribute
 *    3. Graph edges must have the "weight" attribute
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have an "order" attribute based on the results of the
 *       algorithm.
 */
function order(g) {
  var maxRank = util.maxRank(g),
    downLayerGraphs = buildLayerGraphs(g, _.range(1, maxRank + 1), "inEdges"),
    upLayerGraphs = buildLayerGraphs(g, _.range(maxRank - 1, -1, -1), "outEdges");

  var layering = initOrder(g);
  assignOrder(g, layering);

  var bestCC = Number.POSITIVE_INFINITY,
    best;

  for (var i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest) {
    sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2);

    layering = util.buildLayerMatrix(g);
    var cc = crossCount(g, layering);
    if (cc < bestCC) {
      lastBest = 0;
      best = _.cloneDeep(layering);
      bestCC = cc;
    }
  }

  assignOrder(g, best);
}

function buildLayerGraphs(g, ranks, relationship) {
  return _.map(ranks, function(rank) {
    return buildLayerGraph(g, rank, relationship);
  });
}

function sweepLayerGraphs(layerGraphs, biasRight) {
  var cg = new Graph();
  _.forEach(layerGraphs, function(lg) {
    var root = lg.graph().root;
    var sorted = sortSubgraph(lg, root, cg, biasRight);
    _.forEach(sorted.vs, function(v, i) {
      lg.node(v).order = i;
    });
    addSubgraphConstraints(lg, cg, sorted.vs);
  });
}

function assignOrder(g, layering) {
  _.forEach(layering, function(layer) {
    _.forEach(layer, function(v, i) {
      g.node(v).order = i;
    });
  });
}


/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(5);

module.exports = initOrder;

/*
 * Assigns an initial order value for each node by performing a DFS search
 * starting from nodes in the first rank. Nodes are assigned an order in their
 * rank as they are first visited.
 *
 * This approach comes from Gansner, et al., "A Technique for Drawing Directed
 * Graphs."
 *
 * Returns a layering matrix with an array per layer and each layer sorted by
 * the order of its nodes.
 */
function initOrder(g) {
  var visited = {};
  var simpleNodes = _.filter(g.nodes(), function(v) {
    return !g.children(v).length;
  });
  var maxRank = _.max(_.map(simpleNodes, function(v) { return g.node(v).rank; }));
  var layers = _.map(_.range(maxRank + 1), function() { return []; });

  function dfs(v) {
    if (_.has(visited, v)) return;
    visited[v] = true;
    var node = g.node(v);
    layers[node.rank].push(v);
    _.forEach(g.successors(v), dfs);
  }

  var orderedVs = _.sortBy(simpleNodes, function(v) { return g.node(v).rank; });
  _.forEach(orderedVs, dfs);

  return layers;
}


/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(5);

module.exports = crossCount;

/*
 * A function that takes a layering (an array of layers, each with an array of
 * ordererd nodes) and a graph and returns a weighted crossing count.
 *
 * Pre-conditions:
 *
 *    1. Input graph must be simple (not a multigraph), directed, and include
 *       only simple edges.
 *    2. Edges in the input graph must have assigned weights.
 *
 * Post-conditions:
 *
 *    1. The graph and layering matrix are left unchanged.
 *
 * This algorithm is derived from Barth, et al., "Bilayer Cross Counting."
 */
function crossCount(g, layering) {
  var cc = 0;
  for (var i = 1; i < layering.length; ++i) {
    cc += twoLayerCrossCount(g, layering[i-1], layering[i]);
  }
  return cc;
}

function twoLayerCrossCount(g, northLayer, southLayer) {
  // Sort all of the edges between the north and south layers by their position
  // in the north layer and then the south. Map these edges to the position of
  // their head in the south layer.
  var southPos = _.zipObject(southLayer,
    _.map(southLayer, function (v, i) { return i; }));
  var southEntries = _.flatten(_.map(northLayer, function(v) {
    return _.sortBy(_.map(g.outEdges(v), function(e) {
      return { pos: southPos[e.w], weight: g.edge(e).weight };
    }), "pos");
  }), true);

  // Build the accumulator tree
  var firstIndex = 1;
  while (firstIndex < southLayer.length) firstIndex <<= 1;
  var treeSize = 2 * firstIndex - 1;
  firstIndex -= 1;
  var tree = _.map(new Array(treeSize), function() { return 0; });

  // Calculate the weighted crossings
  var cc = 0;
  _.forEach(southEntries.forEach(function(entry) {
    var index = entry.pos + firstIndex;
    tree[index] += entry.weight;
    var weightSum = 0;
    while (index > 0) {
      if (index % 2) {
        weightSum += tree[index + 1];
      }
      index = (index - 1) >> 1;
      tree[index] += entry.weight;
    }
    cc += entry.weight * weightSum;
  }));

  return cc;
}


/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(5);
var barycenter = __webpack_require__(491);
var resolveConflicts = __webpack_require__(492);
var sort = __webpack_require__(493);

module.exports = sortSubgraph;

function sortSubgraph(g, v, cg, biasRight) {
  var movable = g.children(v);
  var node = g.node(v);
  var bl = node ? node.borderLeft : undefined;
  var br = node ? node.borderRight: undefined;
  var subgraphs = {};

  if (bl) {
    movable = _.filter(movable, function(w) {
      return w !== bl && w !== br;
    });
  }

  var barycenters = barycenter(g, movable);
  _.forEach(barycenters, function(entry) {
    if (g.children(entry.v).length) {
      var subgraphResult = sortSubgraph(g, entry.v, cg, biasRight);
      subgraphs[entry.v] = subgraphResult;
      if (_.has(subgraphResult, "barycenter")) {
        mergeBarycenters(entry, subgraphResult);
      }
    }
  });

  var entries = resolveConflicts(barycenters, cg);
  expandSubgraphs(entries, subgraphs);

  var result = sort(entries, biasRight);

  if (bl) {
    result.vs = _.flatten([bl, result.vs, br], true);
    if (g.predecessors(bl).length) {
      var blPred = g.node(g.predecessors(bl)[0]),
        brPred = g.node(g.predecessors(br)[0]);
      if (!_.has(result, "barycenter")) {
        result.barycenter = 0;
        result.weight = 0;
      }
      result.barycenter = (result.barycenter * result.weight +
                           blPred.order + brPred.order) / (result.weight + 2);
      result.weight += 2;
    }
  }

  return result;
}

function expandSubgraphs(entries, subgraphs) {
  _.forEach(entries, function(entry) {
    entry.vs = _.flatten(entry.vs.map(function(v) {
      if (subgraphs[v]) {
        return subgraphs[v].vs;
      }
      return v;
    }), true);
  });
}

function mergeBarycenters(target, other) {
  if (!_.isUndefined(target.barycenter)) {
    target.barycenter = (target.barycenter * target.weight +
                         other.barycenter * other.weight) /
                        (target.weight + other.weight);
    target.weight += other.weight;
  } else {
    target.barycenter = other.barycenter;
    target.weight = other.weight;
  }
}


/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(5);

module.exports = barycenter;

function barycenter(g, movable) {
  return _.map(movable, function(v) {
    var inV = g.inEdges(v);
    if (!inV.length) {
      return { v: v };
    } else {
      var result = _.reduce(inV, function(acc, e) {
        var edge = g.edge(e),
          nodeU = g.node(e.v);
        return {
          sum: acc.sum + (edge.weight * nodeU.order),
          weight: acc.weight + edge.weight
        };
      }, { sum: 0, weight: 0 });

      return {
        v: v,
        barycenter: result.sum / result.weight,
        weight: result.weight
      };
    }
  });
}



/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(5);

module.exports = resolveConflicts;

/*
 * Given a list of entries of the form {v, barycenter, weight} and a
 * constraint graph this function will resolve any conflicts between the
 * constraint graph and the barycenters for the entries. If the barycenters for
 * an entry would violate a constraint in the constraint graph then we coalesce
 * the nodes in the conflict into a new node that respects the contraint and
 * aggregates barycenter and weight information.
 *
 * This implementation is based on the description in Forster, "A Fast and
 * Simple Hueristic for Constrained Two-Level Crossing Reduction," thought it
 * differs in some specific details.
 *
 * Pre-conditions:
 *
 *    1. Each entry has the form {v, barycenter, weight}, or if the node has
 *       no barycenter, then {v}.
 *
 * Returns:
 *
 *    A new list of entries of the form {vs, i, barycenter, weight}. The list
 *    `vs` may either be a singleton or it may be an aggregation of nodes
 *    ordered such that they do not violate constraints from the constraint
 *    graph. The property `i` is the lowest original index of any of the
 *    elements in `vs`.
 */
function resolveConflicts(entries, cg) {
  var mappedEntries = {};
  _.forEach(entries, function(entry, i) {
    var tmp = mappedEntries[entry.v] = {
      indegree: 0,
      "in": [],
      out: [],
      vs: [entry.v],
      i: i
    };
    if (!_.isUndefined(entry.barycenter)) {
      tmp.barycenter = entry.barycenter;
      tmp.weight = entry.weight;
    }
  });

  _.forEach(cg.edges(), function(e) {
    var entryV = mappedEntries[e.v];
    var entryW = mappedEntries[e.w];
    if (!_.isUndefined(entryV) && !_.isUndefined(entryW)) {
      entryW.indegree++;
      entryV.out.push(mappedEntries[e.w]);
    }
  });

  var sourceSet = _.filter(mappedEntries, function(entry) {
    return !entry.indegree;
  });

  return doResolveConflicts(sourceSet);
}

function doResolveConflicts(sourceSet) {
  var entries = [];

  function handleIn(vEntry) {
    return function(uEntry) {
      if (uEntry.merged) {
        return;
      }
      if (_.isUndefined(uEntry.barycenter) ||
          _.isUndefined(vEntry.barycenter) ||
          uEntry.barycenter >= vEntry.barycenter) {
        mergeEntries(vEntry, uEntry);
      }
    };
  }

  function handleOut(vEntry) {
    return function(wEntry) {
      wEntry["in"].push(vEntry);
      if (--wEntry.indegree === 0) {
        sourceSet.push(wEntry);
      }
    };
  }

  while (sourceSet.length) {
    var entry = sourceSet.pop();
    entries.push(entry);
    _.forEach(entry["in"].reverse(), handleIn(entry));
    _.forEach(entry.out, handleOut(entry));
  }

  return _.map(_.filter(entries, function(entry) { return !entry.merged; }),
    function(entry) {
      return _.pick(entry, ["vs", "i", "barycenter", "weight"]);
    });

}

function mergeEntries(target, source) {
  var sum = 0;
  var weight = 0;

  if (target.weight) {
    sum += target.barycenter * target.weight;
    weight += target.weight;
  }

  if (source.weight) {
    sum += source.barycenter * source.weight;
    weight += source.weight;
  }

  target.vs = source.vs.concat(target.vs);
  target.barycenter = sum / weight;
  target.weight = weight;
  target.i = Math.min(source.i, target.i);
  source.merged = true;
}


/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(5);
var util = __webpack_require__(17);

module.exports = sort;

function sort(entries, biasRight) {
  var parts = util.partition(entries, function(entry) {
    return _.has(entry, "barycenter");
  });
  var sortable = parts.lhs,
    unsortable = _.sortBy(parts.rhs, function(entry) { return -entry.i; }),
    vs = [],
    sum = 0,
    weight = 0,
    vsIndex = 0;

  sortable.sort(compareWithBias(!!biasRight));

  vsIndex = consumeUnsortable(vs, unsortable, vsIndex);

  _.forEach(sortable, function (entry) {
    vsIndex += entry.vs.length;
    vs.push(entry.vs);
    sum += entry.barycenter * entry.weight;
    weight += entry.weight;
    vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
  });

  var result = { vs: _.flatten(vs, true) };
  if (weight) {
    result.barycenter = sum / weight;
    result.weight = weight;
  }
  return result;
}

function consumeUnsortable(vs, unsortable, index) {
  var last;
  while (unsortable.length && (last = _.last(unsortable)).i <= index) {
    unsortable.pop();
    vs.push(last.vs);
    index++;
  }
  return index;
}

function compareWithBias(bias) {
  return function(entryV, entryW) {
    if (entryV.barycenter < entryW.barycenter) {
      return -1;
    } else if (entryV.barycenter > entryW.barycenter) {
      return 1;
    }

    return !bias ? entryV.i - entryW.i : entryW.i - entryV.i;
  };
}


/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(5);
var Graph = __webpack_require__(26).Graph;

module.exports = buildLayerGraph;

/*
 * Constructs a graph that can be used to sort a layer of nodes. The graph will
 * contain all base and subgraph nodes from the request layer in their original
 * hierarchy and any edges that are incident on these nodes and are of the type
 * requested by the "relationship" parameter.
 *
 * Nodes from the requested rank that do not have parents are assigned a root
 * node in the output graph, which is set in the root graph attribute. This
 * makes it easy to walk the hierarchy of movable nodes during ordering.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG
 *    2. Base nodes in the input graph have a rank attribute
 *    3. Subgraph nodes in the input graph has minRank and maxRank attributes
 *    4. Edges have an assigned weight
 *
 * Post-conditions:
 *
 *    1. Output graph has all nodes in the movable rank with preserved
 *       hierarchy.
 *    2. Root nodes in the movable layer are made children of the node
 *       indicated by the root attribute of the graph.
 *    3. Non-movable nodes incident on movable nodes, selected by the
 *       relationship parameter, are included in the graph (without hierarchy).
 *    4. Edges incident on movable nodes, selected by the relationship
 *       parameter, are added to the output graph.
 *    5. The weights for copied edges are aggregated as need, since the output
 *       graph is not a multi-graph.
 */
function buildLayerGraph(g, rank, relationship) {
  var root = createRootNode(g),
    result = new Graph({ compound: true }).setGraph({ root: root })
      .setDefaultNodeLabel(function(v) { return g.node(v); });

  _.forEach(g.nodes(), function(v) {
    var node = g.node(v),
      parent = g.parent(v);

    if (node.rank === rank || node.minRank <= rank && rank <= node.maxRank) {
      result.setNode(v);
      result.setParent(v, parent || root);

      // This assumes we have only short edges!
      _.forEach(g[relationship](v), function(e) {
        var u = e.v === v ? e.w : e.v,
          edge = result.edge(u, v),
          weight = !_.isUndefined(edge) ? edge.weight : 0;
        result.setEdge(u, v, { weight: g.edge(e).weight + weight });
      });

      if (_.has(node, "minRank")) {
        result.setNode(v, {
          borderLeft: node.borderLeft[rank],
          borderRight: node.borderRight[rank]
        });
      }
    }
  });

  return result;
}

function createRootNode(g) {
  var v;
  while (g.hasNode((v = _.uniqueId("_root"))));
  return v;
}


/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(5);

module.exports = addSubgraphConstraints;

function addSubgraphConstraints(g, cg, vs) {
  var prev = {},
    rootPrev;

  _.forEach(vs, function(v) {
    var child = g.parent(v),
      parent,
      prevChild;
    while (child) {
      parent = g.parent(child);
      if (parent) {
        prevChild = prev[parent];
        prev[parent] = child;
      } else {
        prevChild = rootPrev;
        rootPrev = child;
      }
      if (prevChild && prevChild !== child) {
        cg.setEdge(prevChild, child);
        return;
      }
      child = parent;
    }
  });

  /*
  function dfs(v) {
    var children = v ? g.children(v) : g.children();
    if (children.length) {
      var min = Number.POSITIVE_INFINITY,
          subgraphs = [];
      _.each(children, function(child) {
        var childMin = dfs(child);
        if (g.children(child).length) {
          subgraphs.push({ v: child, order: childMin });
        }
        min = Math.min(min, childMin);
      });
      _.reduce(_.sortBy(subgraphs, "order"), function(prev, curr) {
        cg.setEdge(prev.v, curr.v);
        return curr;
      });
      return min;
    }
    return g.node(v).order;
  }
  dfs(undefined);
  */
}


/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(5);
var util = __webpack_require__(17);
var positionX = __webpack_require__(497).positionX;

module.exports = position;

function position(g) {
  g = util.asNonCompoundGraph(g);

  positionY(g);
  _.forEach(positionX(g), function(x, v) {
    g.node(v).x = x;
  });
}

function positionY(g) {
  var layering = util.buildLayerMatrix(g);
  var rankSep = g.graph().ranksep;
  var prevY = 0;
  _.forEach(layering, function(layer) {
    var maxHeight = _.max(_.map(layer, function(v) { return g.node(v).height; }));
    _.forEach(layer, function(v) {
      g.node(v).y = prevY + maxHeight / 2;
    });
    prevY += maxHeight + rankSep;
  });
}



/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(5);
var Graph = __webpack_require__(26).Graph;
var util = __webpack_require__(17);

/*
 * This module provides coordinate assignment based on Brandes and Köpf, "Fast
 * and Simple Horizontal Coordinate Assignment."
 */

module.exports = {
  positionX: positionX,
  findType1Conflicts: findType1Conflicts,
  findType2Conflicts: findType2Conflicts,
  addConflict: addConflict,
  hasConflict: hasConflict,
  verticalAlignment: verticalAlignment,
  horizontalCompaction: horizontalCompaction,
  alignCoordinates: alignCoordinates,
  findSmallestWidthAlignment: findSmallestWidthAlignment,
  balance: balance
};

/*
 * Marks all edges in the graph with a type-1 conflict with the "type1Conflict"
 * property. A type-1 conflict is one where a non-inner segment crosses an
 * inner segment. An inner segment is an edge with both incident nodes marked
 * with the "dummy" property.
 *
 * This algorithm scans layer by layer, starting with the second, for type-1
 * conflicts between the current layer and the previous layer. For each layer
 * it scans the nodes from left to right until it reaches one that is incident
 * on an inner segment. It then scans predecessors to determine if they have
 * edges that cross that inner segment. At the end a final scan is done for all
 * nodes on the current rank to see if they cross the last visited inner
 * segment.
 *
 * This algorithm (safely) assumes that a dummy node will only be incident on a
 * single node in the layers being scanned.
 */
function findType1Conflicts(g, layering) {
  var conflicts = {};

  function visitLayer(prevLayer, layer) {
    var
      // last visited node in the previous layer that is incident on an inner
      // segment.
      k0 = 0,
      // Tracks the last node in this layer scanned for crossings with a type-1
      // segment.
      scanPos = 0,
      prevLayerLength = prevLayer.length,
      lastNode = _.last(layer);

    _.forEach(layer, function(v, i) {
      var w = findOtherInnerSegmentNode(g, v),
        k1 = w ? g.node(w).order : prevLayerLength;

      if (w || v === lastNode) {
        _.forEach(layer.slice(scanPos, i +1), function(scanNode) {
          _.forEach(g.predecessors(scanNode), function(u) {
            var uLabel = g.node(u),
              uPos = uLabel.order;
            if ((uPos < k0 || k1 < uPos) &&
                !(uLabel.dummy && g.node(scanNode).dummy)) {
              addConflict(conflicts, u, scanNode);
            }
          });
        });
        scanPos = i + 1;
        k0 = k1;
      }
    });

    return layer;
  }

  _.reduce(layering, visitLayer);
  return conflicts;
}

function findType2Conflicts(g, layering) {
  var conflicts = {};

  function scan(south, southPos, southEnd, prevNorthBorder, nextNorthBorder) {
    var v;
    _.forEach(_.range(southPos, southEnd), function(i) {
      v = south[i];
      if (g.node(v).dummy) {
        _.forEach(g.predecessors(v), function(u) {
          var uNode = g.node(u);
          if (uNode.dummy &&
              (uNode.order < prevNorthBorder || uNode.order > nextNorthBorder)) {
            addConflict(conflicts, u, v);
          }
        });
      }
    });
  }


  function visitLayer(north, south) {
    var prevNorthPos = -1,
      nextNorthPos,
      southPos = 0;

    _.forEach(south, function(v, southLookahead) {
      if (g.node(v).dummy === "border") {
        var predecessors = g.predecessors(v);
        if (predecessors.length) {
          nextNorthPos = g.node(predecessors[0]).order;
          scan(south, southPos, southLookahead, prevNorthPos, nextNorthPos);
          southPos = southLookahead;
          prevNorthPos = nextNorthPos;
        }
      }
      scan(south, southPos, south.length, nextNorthPos, north.length);
    });

    return south;
  }

  _.reduce(layering, visitLayer);
  return conflicts;
}

function findOtherInnerSegmentNode(g, v) {
  if (g.node(v).dummy) {
    return _.find(g.predecessors(v), function(u) {
      return g.node(u).dummy;
    });
  }
}

function addConflict(conflicts, v, w) {
  if (v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }

  var conflictsV = conflicts[v];
  if (!conflictsV) {
    conflicts[v] = conflictsV = {};
  }
  conflictsV[w] = true;
}

function hasConflict(conflicts, v, w) {
  if (v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  return _.has(conflicts[v], w);
}

/*
 * Try to align nodes into vertical "blocks" where possible. This algorithm
 * attempts to align a node with one of its median neighbors. If the edge
 * connecting a neighbor is a type-1 conflict then we ignore that possibility.
 * If a previous node has already formed a block with a node after the node
 * we're trying to form a block with, we also ignore that possibility - our
 * blocks would be split in that scenario.
 */
function verticalAlignment(g, layering, conflicts, neighborFn) {
  var root = {},
    align = {},
    pos = {};

  // We cache the position here based on the layering because the graph and
  // layering may be out of sync. The layering matrix is manipulated to
  // generate different extreme alignments.
  _.forEach(layering, function(layer) {
    _.forEach(layer, function(v, order) {
      root[v] = v;
      align[v] = v;
      pos[v] = order;
    });
  });

  _.forEach(layering, function(layer) {
    var prevIdx = -1;
    _.forEach(layer, function(v) {
      var ws = neighborFn(v);
      if (ws.length) {
        ws = _.sortBy(ws, function(w) { return pos[w]; });
        var mp = (ws.length - 1) / 2;
        for (var i = Math.floor(mp), il = Math.ceil(mp); i <= il; ++i) {
          var w = ws[i];
          if (align[v] === v &&
              prevIdx < pos[w] &&
              !hasConflict(conflicts, v, w)) {
            align[w] = v;
            align[v] = root[v] = root[w];
            prevIdx = pos[w];
          }
        }
      }
    });
  });

  return { root: root, align: align };
}

function horizontalCompaction(g, layering, root, align, reverseSep) {
  // This portion of the algorithm differs from BK due to a number of problems.
  // Instead of their algorithm we construct a new block graph and do two
  // sweeps. The first sweep places blocks with the smallest possible
  // coordinates. The second sweep removes unused space by moving blocks to the
  // greatest coordinates without violating separation.
  var xs = {},
    blockG = buildBlockGraph(g, layering, root, reverseSep),
    borderType = reverseSep ? "borderLeft" : "borderRight";

  function iterate(setXsFunc, nextNodesFunc) {
    var stack = blockG.nodes();
    var elem = stack.pop();
    var visited = {};
    while (elem) {
      if (visited[elem]) {
        setXsFunc(elem);
      } else {
        visited[elem] = true;
        stack.push(elem);
        stack = stack.concat(nextNodesFunc(elem));
      }

      elem = stack.pop();
    }
  }

  // First pass, assign smallest coordinates
  function pass1(elem) {
    xs[elem] = blockG.inEdges(elem).reduce(function(acc, e) {
      return Math.max(acc, xs[e.v] + blockG.edge(e));
    }, 0);
  }

  // Second pass, assign greatest coordinates
  function pass2(elem) {
    var min = blockG.outEdges(elem).reduce(function(acc, e) {
      return Math.min(acc, xs[e.w] - blockG.edge(e));
    }, Number.POSITIVE_INFINITY);

    var node = g.node(elem);
    if (min !== Number.POSITIVE_INFINITY && node.borderType !== borderType) {
      xs[elem] = Math.max(xs[elem], min);
    }
  }

  iterate(pass1, blockG.predecessors.bind(blockG));
  iterate(pass2, blockG.successors.bind(blockG));

  // Assign x coordinates to all nodes
  _.forEach(align, function(v) {
    xs[v] = xs[root[v]];
  });

  return xs;
}


function buildBlockGraph(g, layering, root, reverseSep) {
  var blockGraph = new Graph(),
    graphLabel = g.graph(),
    sepFn = sep(graphLabel.nodesep, graphLabel.edgesep, reverseSep);

  _.forEach(layering, function(layer) {
    var u;
    _.forEach(layer, function(v) {
      var vRoot = root[v];
      blockGraph.setNode(vRoot);
      if (u) {
        var uRoot = root[u],
          prevMax = blockGraph.edge(uRoot, vRoot);
        blockGraph.setEdge(uRoot, vRoot, Math.max(sepFn(g, v, u), prevMax || 0));
      }
      u = v;
    });
  });

  return blockGraph;
}

/*
 * Returns the alignment that has the smallest width of the given alignments.
 */
function findSmallestWidthAlignment(g, xss) {
  return _.minBy(_.values(xss), function (xs) {
    var max = Number.NEGATIVE_INFINITY;
    var min = Number.POSITIVE_INFINITY;

    _.forIn(xs, function (x, v) {
      var halfWidth = width(g, v) / 2;

      max = Math.max(x + halfWidth, max);
      min = Math.min(x - halfWidth, min);
    });

    return max - min;
  });
}

/*
 * Align the coordinates of each of the layout alignments such that
 * left-biased alignments have their minimum coordinate at the same point as
 * the minimum coordinate of the smallest width alignment and right-biased
 * alignments have their maximum coordinate at the same point as the maximum
 * coordinate of the smallest width alignment.
 */
function alignCoordinates(xss, alignTo) {
  var alignToVals = _.values(alignTo),
    alignToMin = _.min(alignToVals),
    alignToMax = _.max(alignToVals);

  _.forEach(["u", "d"], function(vert) {
    _.forEach(["l", "r"], function(horiz) {
      var alignment = vert + horiz,
        xs = xss[alignment],
        delta;
      if (xs === alignTo) return;

      var xsVals = _.values(xs);
      delta = horiz === "l" ? alignToMin - _.min(xsVals) : alignToMax - _.max(xsVals);

      if (delta) {
        xss[alignment] = _.mapValues(xs, function(x) { return x + delta; });
      }
    });
  });
}

function balance(xss, align) {
  return _.mapValues(xss.ul, function(ignore, v) {
    if (align) {
      return xss[align.toLowerCase()][v];
    } else {
      var xs = _.sortBy(_.map(xss, v));
      return (xs[1] + xs[2]) / 2;
    }
  });
}

function positionX(g) {
  var layering = util.buildLayerMatrix(g);
  var conflicts = _.merge(
    findType1Conflicts(g, layering),
    findType2Conflicts(g, layering));

  var xss = {};
  var adjustedLayering;
  _.forEach(["u", "d"], function(vert) {
    adjustedLayering = vert === "u" ? layering : _.values(layering).reverse();
    _.forEach(["l", "r"], function(horiz) {
      if (horiz === "r") {
        adjustedLayering = _.map(adjustedLayering, function(inner) {
          return _.values(inner).reverse();
        });
      }

      var neighborFn = (vert === "u" ? g.predecessors : g.successors).bind(g);
      var align = verticalAlignment(g, adjustedLayering, conflicts, neighborFn);
      var xs = horizontalCompaction(g, adjustedLayering,
        align.root, align.align, horiz === "r");
      if (horiz === "r") {
        xs = _.mapValues(xs, function(x) { return -x; });
      }
      xss[vert + horiz] = xs;
    });
  });

  var smallestWidth = findSmallestWidthAlignment(g, xss);
  alignCoordinates(xss, smallestWidth);
  return balance(xss, g.graph().align);
}

function sep(nodeSep, edgeSep, reverseSep) {
  return function(g, v, w) {
    var vLabel = g.node(v);
    var wLabel = g.node(w);
    var sum = 0;
    var delta;

    sum += vLabel.width / 2;
    if (_.has(vLabel, "labelpos")) {
      switch (vLabel.labelpos.toLowerCase()) {
      case "l": delta = -vLabel.width / 2; break;
      case "r": delta = vLabel.width / 2; break;
      }
    }
    if (delta) {
      sum += reverseSep ? delta : -delta;
    }
    delta = 0;

    sum += (vLabel.dummy ? edgeSep : nodeSep) / 2;
    sum += (wLabel.dummy ? edgeSep : nodeSep) / 2;

    sum += wLabel.width / 2;
    if (_.has(wLabel, "labelpos")) {
      switch (wLabel.labelpos.toLowerCase()) {
      case "l": delta = wLabel.width / 2; break;
      case "r": delta = -wLabel.width / 2; break;
      }
    }
    if (delta) {
      sum += reverseSep ? delta : -delta;
    }
    delta = 0;

    return sum;
  };
}

function width(g, v) {
  return g.node(v).width;
}


/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(5);
var util = __webpack_require__(17);
var Graph = __webpack_require__(26).Graph;

module.exports = {
  debugOrdering: debugOrdering
};

/* istanbul ignore next */
function debugOrdering(g) {
  var layerMatrix = util.buildLayerMatrix(g);

  var h = new Graph({ compound: true, multigraph: true }).setGraph({});

  _.forEach(g.nodes(), function(v) {
    h.setNode(v, { label: v });
    h.setParent(v, "layer" + g.node(v).rank);
  });

  _.forEach(g.edges(), function(e) {
    h.setEdge(e.v, e.w, {}, e.name);
  });

  _.forEach(layerMatrix, function(layer, i) {
    var layerV = "layer" + i;
    h.setNode(layerV, { rank: "same" });
    _.reduce(layer, function(u, v) {
      h.setEdge(u, v, { style: "invis" });
      return v;
    });
  });

  return h;
}


/***/ }),
/* 499 */
/***/ (function(module, exports) {

module.exports = "0.8.5";


/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(501);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(503)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(502)(false);
// imports


// module
exports.push([module.i, "@keyframes dashing {\n  from {\n    stroke-dashoffset: 200;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n.mm-editor {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.mm-editor .mm-editor-back {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 0;\n  left: 0;\n  top: 0;\n}\n.mm-editor .mm-minimap {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: #fff;\n  border: 1px solid #cecece;\n  border-radius: 5px;\n  overflow: hidden;\n  width: 160px;\n  height: 127px;\n}\n.mm-editor .mm-minimap .drag-rect {\n  position: absolute;\n  left: 0px;\n  box-sizing: content-box;\n  top: 0px;\n  border: 2px solid #08c;\n  cursor: pointer;\n  transition: all 200ms ease;\n}\n.mm-editor .mm-minimap .drag-point {\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n  border: 2px solid #08c;\n  background: #fff;\n  position: absolute;\n  right: -5px;\n  bottom: -5px;\n  cursor: nwse-resize;\n}\n.mm-editor > .mm-editor-svg {\n  cursor: grab;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.mm-editor > .mm-editor-svg svg {\n  outline: none;\n}\n.mm-editor > .mm-editor-svg * {\n  transition: x, y, transform, cx, cy, width, stroke, height, fill 400ms;\n  outline: none;\n}\n.mm-editor > .mm-editor-svg .mm-node {\n  cursor: move;\n}\n.mm-editor > .mm-editor-svg .mm-node .mm-node-shape:hover > .icon-node {\n  stroke: #4c79ff;\n}\n.mm-editor > .mm-editor-svg .mm-node .mm-node-shape.active > .icon-node {\n  transition: stroke 400ms;\n  stroke: #4c79ff;\n}\n.mm-editor > .mm-editor-svg .mm-node .mm-node-shape.success .icon-node {\n  stroke: green;\n  fill: #fff;\n}\n.mm-editor > .mm-editor-svg .mm-node .mm-node-shape.error .icon-node {\n  stroke: red;\n}\n.mm-editor > .mm-editor-svg .mm-node .mm-node-shape.running .icon-node {\n  stroke: #4c79ff;\n}\n.mm-editor > .mm-editor-svg .mm-line.active .mm-line-shape {\n  stroke-width: 5px;\n  opacity: 0.5;\n}\n.mm-editor > .mm-editor-svg .mm-line.active .mm-line-arrow {\n  opacity: 0.5;\n}\n.mm-editor > .mm-editor-svg .mm-line:hover .mm-line-shape {\n  stroke-width: 5px;\n  opacity: 0.5;\n}\n.mm-editor > .mm-editor-svg .mm-line:hover .mm-line-arrow {\n  opacity: 0.5;\n}\n.mm-editor > .mm-editor-svg .mm-line.running .mm-line-shape path {\n  stroke-dasharray: 5 !important;\n  animation: dashing 5s linear infinite;\n}\n.mm-editor > .mm-editor-svg .mm-line .mm-line-shape {\n  cursor: pointer;\n}\n.mm-editor > .mm-editor-svg .mm-line .mm-line-arrow {\n  cursor: crosshair;\n}\n.mm-editor > .mm-editor-svg .mm-line .mm-line-label text {\n  text-anchor: middle;\n}\n.mm-editor > .mm-editor-svg .anchor-line {\n  stroke: #4c79ff;\n}\n.mm-editor > .mm-editor-svg .link-points-g .mm-link-points:hover,\n.mm-editor > .mm-editor-svg .link-points-g .mm-link-points.hover {\n  fill: #4c79ff;\n  cursor: crosshair;\n}\n.mm-editor > .mm-editor-html {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.mm-editor .anchor-back {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.mm-node-wrapper {\n  border: 1px solid #08c;\n  border-radius: 8px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  background-color: #fff;\n  align-items: center;\n}\n", ""]);

// exports


/***/ }),
/* 502 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(504);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 504 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 505 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Event", function() { return /* reexport */ Utils_Event; });
__webpack_require__.d(__webpack_exports__, "MMEditor", function() { return /* binding */ MMEditor_MMEditor; });
__webpack_require__.d(__webpack_exports__, "Schema", function() { return /* reexport */ Model_Schema; });
__webpack_require__.d(__webpack_exports__, "Snap", function() { return /* reexport */ snap_svg; });
__webpack_require__.d(__webpack_exports__, "Graph", function() { return /* reexport */ Shape_Graph; });
__webpack_require__.d(__webpack_exports__, "Controller", function() { return /* reexport */ Utils_Controller; });
__webpack_require__.d(__webpack_exports__, "eve", function() { return /* reexport */ eve_default.a; });
__webpack_require__.d(__webpack_exports__, "mina", function() { return /* reexport */ Snap_mina; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(132);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(10);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(11);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(8);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(61);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(52);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(37);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(28);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(1);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(12);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(189);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(276);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(199);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(291);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(295);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(296);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(108);

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__(47);

// CONCATENATED MODULE: ./src/Shape/Nodes/DefaultNodes.js



/**
 * @interface DefaultNode
 */
var DefaultNode = {
  adsorb: [20, 20],
  //磁吸的范围
  linkPoints: [{
    x: 0.5,
    y: 0
  }, {
    x: 0.5,
    y: 1
  }],
  shapeBBox: undefined,

  /**
   * 默认渲染函数 data,snapPaper
   */
  render: function render(data, snapPaper) {
    var node = snapPaper.rect(0, 0, 100, 40);
    var text = snapPaper.text(20, 25, data.name);
    node.attr({
      fill: "#fff",
      stroke: "#000",
      rx: 5,
      ry: 5
    });
    return snapPaper.group(node, text);
  },

  /**
   * 渲染连接点 (node, linkPoint, circle)
   */
  renderLinkPoint: function renderLinkPoint(node, linkPoint, circle) {
    circle = circle || node.paper.circle(0, 0, 5, 5);
    var box = node.shape.getBBox();
    var x = linkPoint.x * box.w + parseInt(node.data.x, 10);
    var y = linkPoint.y * box.h + parseInt(node.data.y, 10);
    circle.attr({
      cx: x,
      cy: y,
      fill: "#fff",
      display: "none",
      stroke: "#08c",
      "class": "mm-link-points"
    });
    circle.data = linkPoint;
    circle.data.box = box;
    circle.data.type = "input";
    circle.x = x;
    circle.y = y;
    circle.local = {
      x: linkPoint.x * box.w,
      y: linkPoint.y * box.h
    };
    return circle;
  },

  /**
   * 更新渲染点
   * @param  {} node
   * @param  {} linkPoint
   * @param  {} refreshSize
   */
  updateLinkPoint: function updateLinkPoint(node, linkPoint, refreshSize) {
    if (refreshSize) {
      var box = node.shape.getBBox();
      linkPoint.local.x = linkPoint.data.x * box.w;
      linkPoint.local.y = linkPoint.data.y * box.h;
    }

    var local = linkPoint.local;
    var x = local.x + node.data.x;
    var y = local.y + node.data.y;
    linkPoint.attr({
      cx: x,
      cy: y
    });
    linkPoint.x = x;
    linkPoint.y = y;
  }
};
/* harmony default export */ var DefaultNodes = (DefaultNode);
// CONCATENATED MODULE: ./src/Shape/Nodes/IconNode.js



/**
 * @interface IconNode
 * @implements {DefaultNode}
 */
var IconNode = {
  adsorb: [20, 20],
  linkPoints: [{
    x: 0.5,
    y: 0
  }, {
    x: 0.5,
    y: 1
  }],
  shapeBBox: undefined,

  /**
   * @param  {} data
   * @param  {} snapPaper
   */
  render: function render(data, snapPaper) {
    var node = snapPaper.rect(0, 0, 180, 32);
    var text = snapPaper.text(40, 21, data.name);
    var icon = snapPaper.image(data.iconPath, 5, 4, 24, 24);
    icon.node.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    node.attr({
      "class": "icon-node",
      fill: "#EAEEFA",
      stroke: "#CCD9FD",
      rx: 17,
      ry: 17
    });
    return snapPaper.group(node, text, icon);
  },

  /**
   * @param  {} node
   * @param  {} linkPoint
   * @param  {} circle
   */
  renderLinkPoint: function renderLinkPoint(node, linkPoint, circle) {
    circle = circle || node.paper.circle(0, 0, 5, 5);
    var box = node.shape.getBBox();
    var x = linkPoint.x * box.w + parseInt(node.data.x || 0, 10);
    var y = linkPoint.y * box.h + parseInt(node.data.y || 0, 10);
    circle.attr({
      cx: x,
      cy: y,
      fill: "#fff",
      display: "none",
      stroke: "#08c",
      "class": "mm-link-points"
    });
    circle.data = linkPoint;
    circle.data.box = box;
    circle.data.type = "input";
    circle.x = x;
    circle.y = y;
    circle.local = {
      x: linkPoint.x * box.w,
      y: linkPoint.y * box.h
    };
    return circle;
  },

  /**
   * 更新渲染点
   * @param  {} node
   * @param  {} linkPoint
   * @param  {} refreshSize
   */
  updateLinkPoint: function updateLinkPoint(node, linkPoint, refreshSize) {
    if (refreshSize) {
      var box = node.shape.getBBox();
      linkPoint.local.x = linkPoint.data.x * box.w;
      linkPoint.local.y = linkPoint.data.y * box.h;
    }

    var local = linkPoint.local;
    var x = local.x + node.data.x;
    var y = local.y + node.data.y;
    linkPoint.attr({
      cx: x,
      cy: y
    });
    linkPoint.x = x;
    linkPoint.y = y;
  }
};
/* harmony default export */ var Nodes_IconNode = (IconNode);
// CONCATENATED MODULE: ./src/Shape/Nodes/DomNode.js
var DomNode_this = undefined;





/**
 * @interface DomNode
 * @implements {DefaultNode}
 */
var DomNode = {
  adsorb: [20, 20],
  //磁吸的范围
  linkPoints: [{
    x: 0,
    y: 0.5
  }, {
    x: 1,
    y: 0.5
  }, {
    x: 0.5,
    y: 0
  }, {
    x: 0.5,
    y: 1
  }],
  render: function render(data, snapPaper) {
    var dom = DomNode_this.paper.el('foreignObject', {
      width: data.width,
      height: data.height
    });

    dom.node.innerHTML = "<div style=\"width:".concat(data.width, "px;height:").concat(data.height, "\" class=\"mm-node-wrapper\">\n\t\t\t<div class=\"node-text\">").concat(data.name, "</div>\n\t\t</div>");

    var group = DomNode_this.paper.group(dom);

    return group;
  },

  /**
   * 渲染连接点 (node, linkPoint, circle)
   */
  renderLinkPoint: function renderLinkPoint(node, linkPoint, circle) {
    circle = circle || node.paper.circle(0, 0, 5, 5);
    var box = node.shape.getBBox();
    var x = linkPoint.x * box.w + parseInt(node.data.x, 10);
    var y = linkPoint.y * box.h + parseInt(node.data.y, 10);
    circle.attr({
      cx: x,
      cy: y,
      fill: "#fff",
      display: "none",
      stroke: "#08c",
      "class": "mm-link-points"
    });
    circle.data = linkPoint;
    circle.data.box = box;
    circle.data.type = "input";
    circle.x = x;
    circle.y = y;
    circle.local = {
      x: linkPoint.x * box.w,
      y: linkPoint.y * box.h
    };
    return circle;
  },

  /**
   * 更新渲染点
   * @param  {} node
   * @param  {} linkPoint
   * @param  {} refreshSize
   */
  updateLinkPoint: function updateLinkPoint(node, linkPoint, refreshSize) {
    if (refreshSize) {
      var box = node.shape.getBBox();
      linkPoint.local.x = linkPoint.data.x * box.w;
      linkPoint.local.y = linkPoint.data.y * box.h;
    }

    var local = linkPoint.local;
    var x = local.x + node.data.x;
    var y = local.y + node.data.y;
    linkPoint.attr({
      cx: x,
      cy: y
    });
    linkPoint.x = x;
    linkPoint.y = y;
  }
};
/* harmony default export */ var Nodes_DomNode = (DomNode);
// CONCATENATED MODULE: ./src/Shape/Node.js









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
























/**
 * @class
 */

var Node_Node = /*#__PURE__*/function () {
  function Node(graph) {
    var _this = this;

    classCallCheck_default()(this, Node);

    defineProperty_default()(this, "addNode", function () {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (typeof data.uuid === 'undefined') {
        data.uuid = Object(external_uuid_["v1"])();
      }

      if (data.uuid.indexOf && data.uuid.indexOf('-') > -1) {
        data.uuid = data.uuid.replace(/-/g, '');
      }

      var node = _this.renderNode(data);
      /**
       * @event Graph#node:change - 节点变化事件
       * @property {Object} node
       */


      _this.graph.fire('node:change', {
        node: node
      });

      return node;
    });

    defineProperty_default()(this, "deleteNode", function (node) {
      var _deleteNode$linkPoint, _deleteNode$fromLines, _deleteNode$toLines;

      var uuid = node;

      if (node.data) {
        uuid = node.data.uuid;
      }

      var deleteNode = _this.nodes[uuid];
      delete _this.nodes[uuid];
      /**
       * @event Graph#node:remove - 移除节点事件
       */

      _this.graph.fire('node:remove', {
        node: deleteNode,
        uuid: uuid
      });

      (_deleteNode$linkPoint = deleteNode.linkPoints) === null || _deleteNode$linkPoint === void 0 ? void 0 : _deleteNode$linkPoint.forEach(function (point) {
        point.undrag();
        point.unhover();
        point.remove();
        point = null;
      });
      (_deleteNode$fromLines = deleteNode.fromLines) === null || _deleteNode$fromLines === void 0 ? void 0 : _deleteNode$fromLines.forEach(function (lineId) {
        _this.graph.line.deleteLine(lineId, true, true);
      });
      (_deleteNode$toLines = deleteNode.toLines) === null || _deleteNode$toLines === void 0 ? void 0 : _deleteNode$toLines.forEach(function (lineId) {
        _this.graph.line.deleteLine(lineId, true, true);
      });
      deleteNode.undrag();
      deleteNode.unhover();
      deleteNode.unclick();
      deleteNode.remove();
    });

    this.graph = graph;
    this.nodes = {};
    this.paper = graph.editor.paper;
    this.nodeG = this.paper.g();
    this.linkPointsG = this.paper.g();
    this.linkPointsG.addClass('link-points-g');
    this.initDefs();
    this.listenEvent();
    this.actives = {};
    this.shapes = {
      "default": DefaultNodes,
      iconNode: Nodes_IconNode,
      domNode: Nodes_DomNode
    };
  }

  createClass_default()(Node, [{
    key: "initDefs",
    value: function initDefs() {
      this.shadow = this.paper.filter(snap_svg.filter.shadow(3, 1, 0.3));
    } // 监听事件

  }, {
    key: "listenEvent",
    value: function listenEvent() {
      var _this2 = this;

      this.graph.on('paper:click', function () {
        _this2.unActive();
      });
      this.graph.on('line:click', function () {
        _this2.unActive();
      });
      this.graph.on('copy', function () {
        var activeNode = _objectSpread({}, _this2.actives);

        var newActiveNode = {};

        for (var node in activeNode) {
          newActiveNode[node] = _objectSpread(_objectSpread({}, activeNode[node]), {}, {
            data: JSON.parse(JSON.stringify(activeNode[node].data))
          });
        }

        _this2.copyNode = newActiveNode;
      });
      this.graph.on('paste', function () {
        _this2.unActive();

        for (var key in _this2.copyNode) {
          var node = _this2.copyNode[key];

          var newData = _objectSpread({}, node.data);

          newData.x += 20 + Math.random() * 20;
          newData.y += 20 + Math.random() * 20;
          delete newData.uuid;

          var newNode = _this2.addNode(newData);

          _this2.setActive(newNode);
        }
      });
    }
    /**
     * 注册node
     * @param {string} type 形状名称
     * @param {object} data 复写的形状方法
     * @param {string} extend 继承的形状，默认为default
     */

  }, {
    key: "registeNode",
    value: function registeNode(type, data) {
      var extend = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
      this.shapes[type] = Object.assign({}, this.shapes[extend], data);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        _this3.tmpLinkPoints = []; //先缓存获取所有节点渲染后触发，避免重绘

        Object.keys(data).map(function (key) {
          _this3.renderNode(data[key]);
        });
        _this3.timeout = setTimeout(function () {
          _this3.tmpLinkPoints.forEach(function (_ref) {
            var node = _ref.node,
                shape = _ref.shape;

            _this3.addNodeLinkPoints(node, shape);
          });

          _this3.tmpLinkPoints = undefined;
          resolve();
        }, 0);
      });
    }
    /**
     * 添加节点
     * @param {object} data
     */

  }, {
    key: "renderNode",
    value:
    /**
     * 渲染新节点
     */
    function renderNode(item) {
      var key = item.uuid;
      var shape = this.shapes[item.type || 'default'];
      shape.paper = this.paper;
      var nodeItem = shape.render(item, this.paper);
      var node = this.paper.g(nodeItem);
      node.shape = nodeItem;
      node.shape.attr({
        "class": 'mm-node-shape'
      });
      this.nodes[item.uuid] = node;
      node.node.setAttribute('class', "mm-node ".concat(item.className || ''));
      node.node.setAttribute('data-id', key);
      node.node.setAttribute('transform', "translate(".concat(item.x || 0, ",").concat(item.y || 0, ")"));
      node.toLines = new Set();
      node.fromLines = new Set();
      node.data = item; // 是否缓存

      this.tmpLinkPoints ? this.tmpLinkPoints.push({
        node: node,
        shape: shape
      }) : this.addNodeLinkPoints(node, shape);
      this.addNodeEvent(node);
      this.nodeG.node.appendChild(node.node);
      return node;
    }
    /**
    	 * 根据数据更新节点位置
    	 * @param {*} nodeData 
    	 * @param {*} rerenderShape 
    	 */

  }, {
    key: "updateNode",
    value: function updateNode() {
      var nodeData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var rerenderShape = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var uuid = nodeData;

      if (nodeData.uuid) {
        uuid = nodeData.uuid;
      } else {
        nodeData = this.nodes[uuid].data;
      }

      var node = this.nodes[uuid];
      var shape = this.shapes[nodeData.type || 'default'];

      if (rerenderShape) {
        // TODO: remove this.paper
        shape.render(nodeData, this.paper, node);
      }

      node.attr({
        "class": "mm-node ".concat(nodeData.className || '')
      });
      node.transform("translate(".concat(nodeData.x, " ,").concat(nodeData.y, ")"));
      node.data = nodeData;
      node.linkPointsTypes.forEach(function (linkPoint, index) {
        shape.renderLinkPoint(node, linkPoint, node.linkPoints[index]);
      });
    }
    /**
     * 给节点添加连线点
     * @param {node} node
     */

  }, {
    key: "addNodeLinkPoints",
    value: function addNodeLinkPoints(node, shape) {
      var _this4 = this;

      node.linkPoints = [];
      node.linkPointsTypes = shape.linkPoints;

      if (!shape.linkPoints) {
        return false;
      }

      shape.linkPoints.forEach(function (linkPoint, index) {
        if (shape.renderLinkPoint) {
          var newCircle = shape.renderLinkPoint(node, linkPoint);
          node.linkPoints.push(newCircle);
          newCircle.attr({
            'data-node-id': node.data.uuid,
            'data-index': index
          });

          _this4.linkPointsG.append(newCircle);

          _this4.graph.line.addLinkPointEvent(newCircle, node, index);

          _this4.addLinkHoverEvent(newCircle, node, index);
        }
      });
    }
  }, {
    key: "addLinkHoverEvent",
    value: function addLinkHoverEvent(point, node) {
      var _this5 = this;

      point.hover(function () {
        if (_this5.graph.linkStatus === 'lineing') return false;
        node.linkPoints.forEach(function (point) {
          point.attr({
            display: 'block'
          });
        });
      }, function () {
        if (_this5.graph.linkStatus === 'lineing') return false;

        if (_this5.actives[node.data.uuid]) {
          return false;
        }

        node.linkPoints.forEach(function (point) {
          point.attr({
            display: 'none'
          });
        });
      });
    }
  }, {
    key: "panNode",
    value: function panNode(node, info, dx, dy) {
      var _this6 = this;

      var x = (node.startX || 0) + dx / info.scalex;
      var y = (node.startY || 0) + dy / info.scalex;
      var newXY = this.graph.anchorLine.check(x, y);

      if (newXY) {
        x = newXY.x;
        y = newXY.y;
      }

      node.data.x = x;
      node.data.y = y;
      node.linkPoints.forEach(function (circle) {
        _this6.shapes[node.data.type || 'default'].updateLinkPoint(node, circle);
      });
      node.node.setAttribute('transform', "translate(".concat(x, " ,").concat(y, ")"));
    }
    /**
     * 给节点添加事件
     * @param {*} node
     */

  }, {
    key: "addNodeEvent",
    value: function addNodeEvent(node) {
      var _this7 = this;

      node.shape.drag(function (dx, dy) {
        var transform = _this7.paper.transform();

        var info = transform.globalMatrix.split();

        if (_this7.actives[node.data.uuid]) {
          for (var key in _this7.actives) {
            _this7.panNode(_this7.actives[key], info, dx, dy);

            _this7.graph.fire('node:move', {
              node: _this7.actives[key]
            });
          }
        } else {
          _this7.panNode(node, info, dx, dy);
          /**
           * @event Graph#node:move 节点移动事件
           */


          _this7.graph.fire('node:move', {
            node: node
          });
        }
      }, function (x, y, e) {
        // 拖动时是否有选中其他
        for (var key in _this7.actives) {
          _this7.actives[key].startX = _this7.actives[key].data.x;
          _this7.actives[key].startY = _this7.actives[key].data.y;
        }

        _this7.graph.anchorLine.makeAllAnchors(node);

        node.bbox = node.getBBox();
        node.clientX = e.clientX;
        node.clientY = e.clientY; // 提前获得bbox避免重绘

        node.startX = node.data.x;
        node.startY = node.data.y;
      }, function (e) {
        _this7.graph.anchorLine.hidePath();

        if (node.startX === node.data.x && node.startY === node.data.y) {
          return false;
        }

        _this7.graph.fire('node:change', {
          node: node
        });
      });
      node.shape.click(function (event) {
        if (Math.abs(event.clientX - node.clientX) < 2 && Math.abs(event.clientY - node.clientY) < 2) {
          if (event.shiftKey) {
            if (_this7.actives[node.data.uuid]) {
              _this7.unActive(node);
            } else {
              _this7.setActive(node);
            }
          } else {
            _this7.unActive();

            _this7.setActive(node);
          }
          /**
           * @event Graph#node:click - 节点点击事件
           */


          _this7.graph.fire('node:click', {
            node: node,
            event: event
          });
        }
      });
      node.hover(function (event) {
        /**
         * @event Graph#node:mouseenter - 节点进入事件
         */
        _this7.graph.fire('node:mouseenter', {
          node: node,
          event: event
        });

        if (_this7.graph.mode === 'view') return;
        if (_this7.graph.linkStatus === 'lineing') return false;
        node.linkPoints.forEach(function (point) {
          point.node.style.display = 'block';
        });
      }, function (event) {
        /**
         * @event Graph#node:mouseleave 
         */
        _this7.graph.fire('node:mouseleave', {
          node: node,
          event: event
        });

        if (_this7.graph.mode === 'view') return;
        if (_this7.graph.linkStatus === 'lineing') return false;

        if (_this7.actives[node.data.uuid]) {
          return false;
        }

        node.linkPoints.forEach(function (point) {
          point.node.style.display = 'none';
        });
      });
    }
    /**
     *
     * @param {*} node node为空时全选
     */

  }, {
    key: "setActive",
    value: function setActive(node) {
      var nodes = node ? defineProperty_default()({}, node.data.uuid, node) : this.nodes;

      for (var key in nodes) {
        node = nodes[key];
        node.shape.addClass('active');
        node.shape.attr({
          filter: this.shadow
        });
        this.actives[node.data.uuid] = node;
        node.linkPoints.forEach(function (point) {
          point.node.style.display = 'block';
        });
      }
    }
    /**
     *
     * @param {*} node 传node就取消选中这个node,没有就全部取消选中
     */

  }, {
    key: "unActive",
    value: function unActive(node) {
      if (node) {
        delete this.actives[node.data.uuid];
        this.unActiveNode(node);
      } else {
        for (var key in this.actives) {
          this.unActiveNode(this.actives[key]);
        }

        this.actives = {};
      }
      /**
       * @event Graph#node:unactive 
       */


      this.graph.fire('node:unactive', {
        node: node
      });
    }
  }, {
    key: "unActiveNode",
    value: function unActiveNode(node) {
      node.shape.removeClass('active');
      node.shape.attr({
        filter: null
      });
      node.linkPoints.forEach(function (point) {
        point.node.style.display = 'none';
      });
    }
    /**
     *
     */

  }, {
    key: "clear",
    value: function clear() {
      var nodes = this.nodes;
      clearTimeout(this.timeout);

      for (var key in nodes) {
        this.deleteNode(nodes[key], true);
      }
    }
  }]);

  return Node;
}();

/* harmony default export */ var Shape_Node = (Node_Node);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(204);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(205);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__(299);

// CONCATENATED MODULE: ./src/Shape/Lines/Line.js

















function Line_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Line_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Line_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Line_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * graph.line.shapes
 * @interface DefaultLine
 */

var DefaultLine = {
  arcRatio: 4,

  /**
   * @param  {} data
   * @param  {} allNodesMap
   * @param  {} line
   */
  render: function render(data, allNodesMap, line) {
    var from = data.from,
        to = data.to,
        _data$fromPoint = data.fromPoint,
        fromPoint = _data$fromPoint === void 0 ? 0 : _data$fromPoint,
        _data$toPoint = data.toPoint,
        toPoint = _data$toPoint === void 0 ? 0 : _data$toPoint;
    var fromNode = allNodesMap[from];
    var toNode = allNodesMap[to];
    var fromPointNode = fromNode.linkPoints[fromPoint];
    var toPointNode = toNode.linkPoints[toPoint];
    var fromX = fromPointNode.x;
    var fromY = fromPointNode.y;
    var toX = toPointNode.x;
    var toY = toPointNode.y;
    var pathString = this.makePath(fromX, fromY, toX, toY, fromPointNode, toPointNode);
    var path = line ? line.path : this.paper.path();
    path.attr(Line_objectSpread({
      d: pathString,
      strokeDasharray: "10",
      fill: "transparent",
      stroke: "rgba(178,190,205,0.7)"
    }, data.style || {}));
    path.animate({
      strokeDasharray: "0"
    }, 300);
    var labelGroup = this.renderLabel(data, allNodesMap, path, line ? line.labelGroup : null);

    if (!line) {
      line = this.paper.group();
      line.append(path);
    }

    labelGroup && line.append(labelGroup);
    line.labelGroup = labelGroup;
    line.path = path;
    return {
      path: line,
      data: {
        fromX: fromX,
        fromY: fromY,
        toX: toX,
        toY: toY
      }
    };
  },

  /**
   * @param  {} fromX
   * @param  {} fromY
   * @param  {} toX
   * @param  {} toY
   * @param  {} fromPointNode
   * @param  {} toPointNode
   */
  makePath: function makePath(fromX, fromY, toX, toY, fromPointNode, toPointNode) {
    var edgeX = fromX;
    var edgeY = fromY;
    var endX = toX;
    var endY = toY;
    var arrowStartSpace = 0; // 顶部距离node节点的距离

    var arrEndSpace = 8; // 底部距离node节点的距离

    var arrowEndSpace = 5; // 箭头占用的空间
    // 根据连接点位置生成控制点
    // 上右下左的控制点分别为 (x,上偏移) (右偏移,y)  (x,下偏移) (左偏移,y)

    var startControlPoint = [edgeX, edgeY];
    var endControlPoint = [endX, endY];
    var startAngel = this.getPointDirect(fromPointNode);
    var endAngel = this.getPointDirect(toPointNode);
    var offsetLength = Math.sqrt(Math.pow(edgeX - endX, 2) + Math.pow(edgeY - endY, 2)) / this.arcRatio; // 连接点的距离的一半作为控制点的长度

    startControlPoint[0] += (1 / startAngel < 0 ? -1 : 1) * Math.cos(startAngel) * offsetLength;
    startControlPoint[1] += -Math.sin(startAngel) * offsetLength; // svg坐标系倒置需要给y坐标加负号

    endControlPoint[0] += (1 / endAngel < 0 ? -1 : 1) * Math.cos(endAngel) * offsetLength;
    endControlPoint[1] += -Math.sin(endAngel) * offsetLength; // svg坐标系倒置需要给y坐标加负号

    if (fromPointNode.data.y === 1) {
      edgeY += arrowStartSpace;
    } else if (fromPointNode.data.y === 0) {
      edgeY -= arrowStartSpace;
    } else if (fromPointNode.data.x === 0) {
      edgeX -= arrowStartSpace;
    } else if (fromPointNode.data.x === 1) {
      edgeX += arrowStartSpace;
    }

    if (toPointNode.data.y === 1) {
      endY += arrEndSpace;
      toY += arrowEndSpace;
    } else if (toPointNode.data.y === 0) {
      endY -= arrEndSpace;
      toY -= arrowEndSpace;
    } else if (toPointNode.data.x === 0) {
      endX -= arrEndSpace;
      toX -= arrowEndSpace;
    } else if (toPointNode.data.x === 1) {
      endX += arrEndSpace;
      toX += arrowEndSpace;
    }

    var pathString = "M".concat(fromX, " ").concat(fromY, " T ").concat(edgeX, " ").concat(edgeY);
    var toPointString = "".concat(endX, " ").concat(endY, " T ").concat(toX, " ").concat(toY, " ");
    var path = "".concat(pathString, "C").concat(startControlPoint[0], " ").concat(startControlPoint[1], " ").concat(endControlPoint[0], " ").concat(endControlPoint[1], " ").concat(toPointString);
    return path;
  },
  //没用了
  getPointDirect: function getPointDirect(pointNode) {
    var point2center = [pointNode.data.x, pointNode.data.y];
    var angel = 0;

    if (point2center[1] === 0) {
      angel = Math.PI / 2;
    } else if (point2center[1] === 1) {
      angel = -Math.PI / 2;
    } else if (point2center[0] === 0) {
      angel = Math.PI;
    } else if (point2center[0] === 1) {
      angel = -Math.PI;
    } else {
      // arctan求角度
      angel = Math.atan((point2center[1] - 0.5) / (point2center[0] - 0.5)) + (point2center[0] - 0.5 < 0 ? Math.PI : 0);
    }

    return angel || 0;
  },

  /**
   * @param  {} data
   * @param  {} allNodesMap
   * @param  {} arrow
   */
  renderArrow: function renderArrow(data, allNodesMap, arrow) {
    var to = data.to,
        _data$toPoint2 = data.toPoint,
        toPoint = _data$toPoint2 === void 0 ? 0 : _data$toPoint2;
    var toNode = allNodesMap[to];
    var toPointNode = toNode.linkPoints[toPoint];
    var toLinkPoint = toNode.linkPointsTypes[toPoint];
    var angle = 0;

    if (toLinkPoint.y <= 0) {
      angle = 180;
    } else if (toLinkPoint.x >= 1) {
      angle = 270;
    } else if (toLinkPoint.x <= 0) {
      angle = 90;
    }

    var toX = toPointNode.x;
    var toY = toPointNode.y;
    var pathString = "M".concat(-5, " ", 10, "L", 0, " ", 0, "L", 5, " ", 10, "Z");
    var path = arrow ? arrow : this.paper.path(); // 进行角度的中心变换

    var matrix = new snap_svg.Matrix();
    matrix.translate(toX, toY);
    matrix.rotate(angle, 0, 0);
    path.attr(Line_objectSpread({
      "class": "mm-line-arrow",
      d: pathString,
      fill: "rgba(178,190,205,0.7)",
      transform: matrix.toString()
    }, data.arrowStyle));
    path.angle = angle;
    return path;
  },

  /** 是否渲染文字
   * @param  {} data
   * @param  {} allNodesMap
   * @param  {} lineShapePath
   * @param  {} labelGroup 是否已有文字对象
   */
  renderLabel: function renderLabel(data, allNodesMap, lineShapePath, labelGroup) {
    var fromX = data.fromX,
        toX = data.toX,
        labelCfg = data.labelCfg;
    var label = data.label;

    if (!label) {
      labelGroup && labelGroup.remove();
      return null;
    }

    ;
    var totalLabel = label; // label 样式

    var _ref = labelCfg || {},
        _ref$refX = _ref.refX,
        refX = _ref$refX === void 0 ? 0 : _ref$refX,
        _ref$refY = _ref.refY,
        refY = _ref$refY === void 0 ? 0 : _ref$refY,
        autoRotate = _ref.autoRotate,
        _ref$showNum = _ref.showNum,
        showNum = _ref$showNum === void 0 ? 20 : _ref$showNum,
        _ref$style = _ref.style,
        style = _ref$style === void 0 ? {
      fill: "#333",
      stroke: "#fff",
      fontSize: "12px"
    } : _ref$style; // 获取旋转角度 暂时不支持


    var totalLen = lineShapePath.getTotalLength();
    var pointLen = lineShapePath.getPointAtLength(totalLen / 2);

    var _ref2 = pointLen || {},
        alpha = _ref2.alpha,
        xPoint = _ref2.x,
        yPoint = _ref2.y;

    if (label && label.length > showNum && showNum) {
      label = label.slice(0, showNum) + "...";
    }

    if (!labelGroup) {
      var textCreate = this.paper.text(0, 0, label);
      var rectCreate = this.paper.rect();
      labelGroup = this.paper.group(rectCreate, textCreate);
    }

    var rect = labelGroup[0];
    var text = labelGroup[1];
    var x = xPoint + (refX || 0);
    var y = yPoint + (refY || 0);
    text.attr({
      text: label || "",
      fill: style.fill,
      fontSize: style.fontSize,
      textAnchor: "middle",
      dominantBaseline: "middle",
      x: x,
      y: y
    });

    if (!text.bbox || text.oldText !== label) {
      text.oldText = label;
      text.bbox = text.getBBox();
    } // 性能优化


    var _text$bbox = text.bbox,
        width = _text$bbox.width,
        height = _text$bbox.height;
    rect.attr({
      fill: style.stroke,
      width: width,
      height: height,
      stroke: "transparent",
      x: x - width * 0.5,
      y: y - height * 0.5
    });
    labelGroup.attr({
      "class": "mm-line-label",
      'data-label': encodeURI(totalLabel)
    });

    if (autoRotate) {
      // 文字顺序方向
      if (fromX < toX || fromX === toX) {
        alpha += 180;
      }

      labelGroup.attr({
        transform: "rotate(".concat(alpha, ",").concat(xPoint + (refX || 0), ",").concat(yPoint + (refY || 0), ")")
      });
    }

    return labelGroup;
  },

  /**
   * @param  {} data
   */
  checkNewLine: function checkNewLine(data) {
    var from = data.from,
        to = data.to;

    if (from === to) {
      return false;
    }

    return true;
  }
};
/* harmony default export */ var Lines_Line = (DefaultLine);
// CONCATENATED MODULE: ./src/Shape/Lines/PolyLine.js














function PolyLine_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function PolyLine_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PolyLine_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PolyLine_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * @interface PolyLine
 * @implements {DefaultLine}
 */


var PolyLine = PolyLine_objectSpread(PolyLine_objectSpread({}, Lines_Line), {}, {
  gapDistance: 30,
  rankDir: "tb",

  /**
   * @param  {number} fromX
   * @param  {number} fromY
   * @param  {number} toX
   * @param  {number} toY
   * @param  {object} fromPointNode
   * @param  {object} toPointNode
   */
  makePath: function makePath(fromX, fromY, toX, toY, fromPointNode, toPointNode, fromNode, toNode) {
    // 折线
    var fromBBox = fromNode.getBBox();
    var toBBox = toNode.getBBox();
    var fromCenter = {
      x: fromBBox.x + fromBBox.width / 2,
      y: fromBBox.y + fromBBox.height / 2
    };
    var toCenter = {
      x: toBBox.x + toBBox.width / 2,
      y: toBBox.y + toBBox.height / 2
    }; // 找到点的方向

    var fromDirection = this.getDirection({
      x: fromX,
      y: fromY
    }, fromBBox, fromCenter);
    var endDiretion = this.getDirection({
      x: toX,
      toY: toY
    }, toBBox, toCenter); // 对应方向的坐标要加间隔值

    var startPos = {
      x: fromX,
      y: fromY
    };
    var endPos = {
      x: toX,
      y: toY
    };
    this.makeGap(fromDirection, startPos);
    this.makeGap(endDiretion, endPos);
    var paths = [startPos];
    var centerY, centerX;
    var directions = ['bottom', 'top', 'left', 'right'];
    var fromIndex = directions.indexOf(fromDirection) > 1;
    var endIndex = directions.indexOf(endDiretion) > 1;

    if (fromIndex === endIndex) {
      centerY = (startPos.y + endPos.y) / 2;
      paths.push({
        x: startPos.x,
        y: centerY
      }, {
        x: endPos.x,
        y: centerY
      });
    } else {
      centerX = (startPos.x + endPos.x) / 2;
      paths.push({
        x: centerX,
        y: startPos.y
      }, {
        x: centerX,
        y: endPos.y
      });
    }

    paths.push(endPos);
    var path = "M".concat(fromX, " ").concat(fromY, " ");
    paths.map(function (item) {
      path += "L".concat(item.x, " ").concat(item.y, " ");
    });
    path += "L".concat(toX, " ").concat(toY);
    return path;
  },
  makeGap: function makeGap(direction, pos) {
    if (direction === "left") {
      pos.x -= this.gapDistance;
    } else if (direction === 'right') {
      pos.x += this.gapDistance;
    }

    if (direction === "top") {
      pos.y -= this.gapDistance;
    } else if (direction === 'bottom') {
      pos.y += this.gapDistance;
    }

    return pos;
  },
  getDirection: function getDirection(_ref, bbox, center) {
    var x = _ref.x,
        y = _ref.y;
    var leftTop = {
      x: bbox.x,
      y: bbox.y
    };
    var leftBottom = {
      x: bbox.x,
      y: bbox.y + bbox.height
    }; // 左上到右下的直线表达式

    var leftTopC = function leftTopC(x, y) {
      var k = (leftTop.y - center.y) / (leftTop.x - center.x);
      var c = center.y - center.x * k;

      if (x || x === 0) {
        return k * x + c;
      } else {
        if (k === 0) {
          return x;
        }

        return (y - c) / k;
      }
    }; // 左下到右上的直线表达式


    var leftBottomC = function leftBottomC(x, y) {
      var k = (leftBottom.y - center.y) / (leftBottom.x - center.x);
      var c = center.y - center.x * k;

      if (x) {
        return k * x + c;
      } else {
        if (k === 0) {
          return x;
        }

        return (y - c) / k;
      }
    };

    var ltY = leftTopC(x);
    var lbY = leftBottomC(x);

    if (y < ltY && y > lbY) {
      return 'left';
    } else if (y > ltY && y > lbY) {
      return 'bottom';
    } else if (y < lbY && y > ltY) {
      return 'right';
    } else {
      return 'top';
    }
  }
});

/* harmony default export */ var Lines_PolyLine = (PolyLine);
// CONCATENATED MODULE: ./src/Shape/Line.js










function Shape_Line_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Shape_Line_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Shape_Line_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Shape_Line_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














/**
 * @class
 */

var Line_Line = /*#__PURE__*/function () {
  function Line(graph) {
    var _this = this;

    classCallCheck_default()(this, Line);

    defineProperty_default()(this, "updateActiveLine", function (g) {
      var _this$graph = _this.graph,
          hoverLinkPoint = _this$graph.hoverLinkPoint,
          nodes = _this$graph.node.nodes;
      var data = g.data;
      var _data$shape = data.shape,
          shape = _data$shape === void 0 ? 'default' : _data$shape,
          oldTo = data.to,
          oldToPoint = data.toPoint,
          uuid = data.uuid;
      var line = _this.lines[uuid];

      if (hoverLinkPoint) {
        var toElement = hoverLinkPoint.toElement || hoverLinkPoint.node;
        var beforeData = Object.assign({}, line.data);
        var to = toElement.getAttribute('data-node-id');
        var toPoint = parseInt(toElement.getAttribute('data-index'), 10);

        if (_this.shapes[shape].checkNewLine(Shape_Line_objectSpread(Shape_Line_objectSpread({}, data), {}, {
          to: to,
          toPoint: toPoint
        }), _this.graph.editor) && !(oldTo == to && toPoint == oldToPoint)) {
          Object.assign(line.data, {
            to: to,
            toPoint: toPoint
          }); // 删除节点入口关联的线，给新链接的节点加上入口线

          nodes[oldTo].fromLines["delete"](uuid);
          nodes[to].fromLines.add(uuid);
          /**
           * @event Graph#line:change
           */

          _this.graph.fire('line:change', {
            line: line,
            type: 'change',
            before: beforeData
          });
        } else {
          /**
           * @event Graph#line:drop
           */
          _this.graph.fire('line:drop', {
            line: g
          });
        }

        hoverLinkPoint.removeClass && hoverLinkPoint.removeClass('hover');
      }

      _this.updateLine(uuid);
    });

    defineProperty_default()(this, "checkNewLine", function (e) {
      var hoverLinkPoint = _this.graph.hoverLinkPoint;

      if (hoverLinkPoint) {
        var toElement = hoverLinkPoint.toElement || hoverLinkPoint.node;
        var toNodeId = toElement.getAttribute('data-node-id');
        var toPoint = toElement.getAttribute('data-index');
        var _this$tempLineData = _this.tempLineData,
            from = _this$tempLineData.from,
            _this$tempLineData$fr = _this$tempLineData.fromPoint,
            fromPoint = _this$tempLineData$fr === void 0 ? 0 : _this$tempLineData$fr,
            to = _this$tempLineData.to;
        var data = Object.assign({
          uuid: Object(external_uuid_["v1"])(),
          to: toNodeId,
          toPoint: toPoint
        }, _this.tempLineData);
        if (_this.lines[data.uuid]) return;

        _this.graph.fire("line:beforeAdd", {
          line: data
        });

        if (_this.shapes[data.type || 'default'].checkNewLine(data, _this.graph.editor)) {
          _this.addLine(data);
        }

        hoverLinkPoint.removeClass && hoverLinkPoint.removeClass('hover');
        _this.graph.hoverLinkPoint = undefined;
      }
    });

    defineProperty_default()(this, "calcLinkPoint", function (x, y) {
      var adsorb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [20, 20];

      var newXY = _this.allLinkPointsXY.find(function (item) {
        if (Math.abs(x - item[0]) < adsorb[0] && Math.abs(y - item[1]) < adsorb[1]) {
          _this.graph.hoverLinkPoint && _this.graph.hoverLinkPoint.removeClass && _this.graph.hoverLinkPoint.removeClass('hover');
          _this.graph.hoverLinkPoint = item[2];
          item[2].addClass('hover');
          return item;
        }
      });

      if (!newXY) {
        _this.graph.hoverLinkPoint && _this.graph.hoverLinkPoint.removeClass('hover');
      }

      return newXY;
    });

    defineProperty_default()(this, "makeAdsorbPoints", function () {
      var linkPoints = _this.paper.selectAll('.mm-link-points');

      _this.allLinkPointsXY = [];
      linkPoints.forEach(function (item) {
        var x = parseInt(item.attr('cx'));
        var y = parseInt(item.attr('cy'));

        _this.allLinkPointsXY.push([x, y, item]);
      });
    });

    defineProperty_default()(this, "addLinkPointEvent", function (point, node, index) {
      if (_this.graph.mode === 'view') return;
      point.drag(function (dx, dy) {
        var _this$tempLineData2 = _this.tempLineData,
            fromX = _this$tempLineData2.fromX,
            fromY = _this$tempLineData2.fromY;

        var transform = _this.paper.transform();

        var info = transform.globalMatrix.split();
        var x = (fromX || 0) + dx / info.scalex + 1;
        var y = (fromY || 0) + dy / info.scalex - 1; // 计算磁吸坐标

        var adsorb = _this.graph.node.shapes[node.data.type].adsorb;

        var newXY = _this.calcLinkPoint(x, y, adsorb);

        if (newXY) {
          x = newXY[0];
          y = newXY[1];
        }

        _this.shapes.tempLine.renderPath({
          fromX: fromX,
          fromY: fromY,
          x: x,
          y: y
        }, _this.tempLine);
      }, function () {
        _this.tempLineData = {
          from: node.data.uuid,
          fromPoint: index,
          fromX: point.x,
          fromY: point.y
        };

        _this.makeAdsorbPoints();

        _this.tempLine = _this.shapes.tempLine.render(_this.paper);

        _this.graph.fire('line:drag');
      }, function (e) {
        var hoverLinkPoint = _this.graph.hoverLinkPoint;
        var toNode = null;

        if (hoverLinkPoint) {
          var toElement = hoverLinkPoint.toElement || hoverLinkPoint.node;
          var toNodeId = toElement.getAttribute('data-node-id');
          toNode = _this.node.nodes[toNodeId];
        }

        _this.checkNewLine(e);

        _this.tempLine.remove();
        /**
         * @event Graph#line:drop
         */


        _this.graph.fire('line:drop', {
          fromNode: node,
          toNode: toNode,
          event: e
        });
      });
    });

    this.graph = graph;
    this.node = graph.node;
    this.paper = graph.editor.paper;
    this.lines = [];
    this.lineG = this.paper.g();
    this.allLinkPointsXY = [];
    this.shapes = {
      "default": Lines_Line,
      polyline: Lines_PolyLine,
      tempLine: {
        render: function render(paper) {
          var path = paper.path();
          path.attr({
            stroke: '#abc',
            strokeDasharray: '10 10'
          });
          return path;
        },
        renderPath: function renderPath(_ref, line) {
          var fromX = _ref.fromX,
              fromY = _ref.fromY,
              x = _ref.x,
              y = _ref.y;
          line.attr({
            d: "M".concat(fromX, " ").concat(fromY, "L").concat(x, " ").concat(y)
          });
        }
      }
    };
    this.listenEvent();
  } // 监听事件


  createClass_default()(Line, [{
    key: "listenEvent",
    value: function listenEvent() {
      var _this2 = this;

      this.graph.on('paper:click', function () {
        _this2.unActiveLine();
      });
      this.graph.on('node:click', function () {
        _this2.unActiveLine();
      });
    }
    /**
     * 添加线
     * @param {*} data
     */

  }, {
    key: "addLine",
    value: function addLine(data) {
      /**
       * @event Graph#line:beforeadd
       */
      this.graph.fire('line:beforeadd', {
        data: data,
        type: 'add'
      });
      var line = this.renderLine(data);
      /**
       * @event Graph#line:add
       */

      this.graph.fire('line:add', {
        line: line,
        type: 'add'
      });
    }
    /**
     * 添加虚拟的连线，用于新建链接
     * @param {*} lineData
     */

  }, {
    key: "addTempLine",
    value: function addTempLine(lineData) {
      this.tempLine = this.paper.path();
      this.tempLine.data = lineData;
    }
    /**
     * 跟下该node的线
     * @param {ele} node
     */

  }, {
    key: "updateByNode",
    value: function updateByNode(node) {
      var _this3 = this;

      node.fromLines.forEach(function (lineId) {
        _this3.updateLine(lineId);
      });
      node.toLines.forEach(function (lineId) {
        _this3.updateLine(lineId);
      });
    }
    /**
     * 重绘某个线
     * @param {*} data
     */

  }, {
    key: "updateLine",
    value: function updateLine(data) {
      var rerenderShape = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var lineId;
      var lineData;

      if (data.uuid) {
        lineId = lineData.uuid;
        lineData = data;
      } else {
        lineId = data;
        lineData = {
          uuid: lineId
        };
      }

      var line = this.lines[lineId];
      var nodes = this.graph.node.nodes;
      var _line$data = line.data,
          type = _line$data.type,
          _line$data$className = _line$data.className,
          className = _line$data$className === void 0 ? '' : _line$data$className;

      if (rerenderShape) {
        var _this$shapes$render = this.shapes[type || 'default'].render(line.data, nodes, line.shape),
            _data = _this$shapes$render.data;

        line.arrow = this.shapes[type || 'default'].renderArrow(line.data, nodes, line.arrow);
        line.attr({
          "class": "mm-line ".concat(className || '')
        });
        line.data = Object.assign(line.data, lineData ? lineData : {}, _data);
      } else {
        line.data = Object.assign(line.data, lineData ? lineData : {});
      }

      if (this.activeLine === line) {
        this.setActiveLine(line);
      }
    }
    /**
     * 添加线
     * @param {*} lineData
     */

  }, {
    key: "renderLine",
    value: function renderLine(lineData) {
      var key = lineData.uuid;
      var nodes = this.node.nodes;
      var shape = this.shapes[lineData.type || 'default'];
      shape.paper = this.paper;
      var newLine = shape.render(lineData, nodes);
      var arrow = shape.renderArrow(lineData, nodes); // const label = shape.renderLabel(lineData, nodes, newLine.path);

      var g = this.paper.g();
      g.append(newLine.path);
      g.append(arrow); // g.append(label);

      g.data = Object.assign(lineData, {
        uuid: key
      }, newLine.data);
      g.shape = newLine.path;
      g.arrow = arrow;

      if (lineData.arrow2 && shape.renderArrow2) {
        g.arrow2 = shape.renderArrow(lineData, nodes);
      } // g.label = label;


      g.attr({
        "class": "mm-line ".concat(lineData.className || '')
      });
      newLine.path.attr({
        "class": 'mm-line-shape'
      });
      this.addToNodes(nodes, g);
      this.addLineEvents(g);
      this.lines[key] = g;
      this.lineG.node.appendChild(g.node);
      return g;
    }
    /**
     * 删除线
     */

  }, {
    key: "deleteLine",
    value: function deleteLine(data, notEvent, byNode) {
      var uuid = data;

      if (data.data) {
        uuid = data.data.uuid;
      }

      var nodes = this.node.nodes;
      var line = this.lines[uuid];
      if (!line) return; //这里有可能被删除node时的关联删除线了

      delete this.lines[uuid]; // 删除关联线

      var _line$data2 = line.data,
          from = _line$data2.from,
          to = _line$data2.to;
      nodes[from] && nodes[from].toLines["delete"](uuid);
      nodes[to] && nodes[to].fromLines["delete"](uuid);
      !notEvent && // 是否由删除节点触发的线删除操作

      /**
       * @event Graph#line:remove
       */
      this.graph.fire('line:remove', {
        line: line,
        uuid: uuid,
        before: line.data,
        byNode: byNode,
        type: 'remove'
      });
      line.arrow.remove();
      line.arrow.undrag();
      line.arrow = null;
      line.unclick();
      line.remove();
      this.activeLine = null;
    }
  }, {
    key: "getLineId",
    value: function getLineId(lineData) {
      var from = lineData.from,
          to = lineData.to,
          _lineData$fromPoint = lineData.fromPoint,
          fromPoint = _lineData$fromPoint === void 0 ? 0 : _lineData$fromPoint,
          _lineData$toPoint = lineData.toPoint,
          toPoint = _lineData$toPoint === void 0 ? 0 : _lineData$toPoint;
      return "".concat(from, ".").concat(fromPoint, "=").concat(to, ".").concat(toPoint);
    }
    /**
     * 更新线为
     * @param {*} line
     * @param {*} x
     * @param {*} y
     */

  }, {
    key: "registeLine",
    value:
    /**
     * 注册线
     * @param {*} data
     */
    function registeLine(data) {
      var type = data.type;
      this.shapes[type] = Object.assign({}, this.shapes['default'], data);
    }
    /**
     * 渲染
     * @param {*} lines
     */

  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var lines = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      Object.keys(lines).map(function (key) {
        var item = lines[key];

        _this4.renderLine(item);
      });
    }
    /**
     *
     * @param {*} nodes
     * @param {*} g
     */

  }, {
    key: "addToNodes",
    value: function addToNodes(nodes, g) {
      var _g$data = g.data,
          from = _g$data.from,
          to = _g$data.to;
      var id = g.data.uuid;
      nodes[from].toLines.add(id);
      nodes[to].fromLines.add(id);
    }
    /**
     *
     * @param {*} line
     */

  }, {
    key: "setActiveLine",
    value: function setActiveLine(line) {
      this.unActiveLine();
      this.activeLine = line;
      this.activeLine.addClass('active');
    }
    /**
     * 取消激活
     */

  }, {
    key: "unActiveLine",
    value: function unActiveLine() {
      if (this.activeLine) {
        this.activeLine.removeClass('active');
      }

      this.activeLine = null;
    } // 计算磁吸

  }, {
    key: "addLineEvents",
    value:
    /**
     * 绑定线拖动事件
     * @param {*} g
     */
    function addLineEvents(g) {
      var _this5 = this;

      g.shape.hover(function (event) {
        /**
         * @event Graph#line:mouseenter
         */
        _this5.graph.fire('line:mouseenter', {
          line: g,
          event: event
        });
      }, function (event) {
        /**
         * @event Graph#line:mouseleave
         */
        _this5.graph.fire('line:mouseleave', {
          line: g,
          event: event
        });
      });
      g.shape.click(function (e) {
        _this5.setActiveLine(g);
        /**
         * @event Graph#line:click
         */


        _this5.graph.fire('line:click', {
          line: g,
          event: e
        });
      });
      if (this.graph.mode === 'view') return; // 箭头拖拽

      g.arrow.drag(function (dx, dy) {
        var _this5$tempLineData = _this5.tempLineData,
            fromX = _this5$tempLineData.fromX,
            fromY = _this5$tempLineData.fromY,
            toX = _this5$tempLineData.toX,
            toY = _this5$tempLineData.toY;

        var transform = _this5.paper.transform();

        var info = transform.globalMatrix.split();
        var x = (toX || 0) + dx / info.scalex + 1;
        var y = (toY || 0) + dy / info.scalex - 1; // 计算磁吸坐标

        var adsorb = _this5.graph.line.shapes[g.data.type || 'default'].adsorb;

        var newXY = _this5.calcLinkPoint(x, y, adsorb);

        if (newXY) {
          x = newXY[0];
          y = newXY[1];
        }

        _this5.shapes.tempLine.renderPath({
          fromX: fromX,
          fromY: fromY,
          x: x,
          y: y
        }, _this5.tempLine);
      }, function () {
        var data = g.data;
        var fromX = data.fromX,
            fromY = data.fromY,
            toX = data.toX,
            toY = data.toY,
            from = data.from,
            fromPoint = data.fromPoint;
        _this5.tempLineData = {
          from: from,
          fromPoint: fromPoint,
          fromX: fromX,
          toX: toX,
          fromY: fromY,
          toY: toY
        };

        _this5.makeAdsorbPoints();

        g.attr({
          display: "none"
        });
        data.status = 'active';
        /**
         * @event Graph#line:drag
         */

        _this5.tempLine = _this5.shapes.tempLine.render(_this5.paper);

        _this5.graph.fire('line:drag');
      }, function (e) {
        g.attr({
          display: "block"
        });

        _this5.tempLine.remove();

        _this5.updateActiveLine(g);
      });
    }
    /**
     * 节点的新增线逻辑
     */

  }, {
    key: "clear",
    value:
    /**
     *
     */
    function clear() {
      var lines = this.lines;

      for (var key in lines) {
        this.deleteLine(lines[key], true);
      }
    }
  }]);

  return Line;
}();

/* harmony default export */ var Shape_Line = (Line_Line);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(301);

// CONCATENATED MODULE: ./src/Utils/Event.js








/**
 * @class
 */
var Event_Event = /*#__PURE__*/function () {
  function Event() {
    classCallCheck_default()(this, Event);

    defineProperty_default()(this, "events", {});

    defineProperty_default()(this, "dispatch", this.fire);
  }

  createClass_default()(Event, [{
    key: "on",
    value:
    /**
     * 箭头
     * @param {*} event 
     * @param {*} func 
     * @param {*=} index 
     */
    function on(event, func, index) {
      if (!this.events[event]) {
        this.events[event] = [];
      }

      index = index || this.events[event].length;
      this.events[event].push({
        index: index,
        func: func
      }); // 按照index顺序执行

      this.events[event].sort(function (a, b) {
        return a.index > b.index;
      });
    }
    /**
     * 
     * @param {*} event 
     * @param {*} data 
     */

  }, {
    key: "fire",
    value: function fire(event, data) {
      var events = this.events[event] || [];
      events.forEach(function (item) {
        item.func(data);
      });
    }
    /**
     * 关闭绑定的事件
     * @param {*} event 
     * @param {*} offFunc 不传清空所有
     */

  }, {
    key: "off",
    value: function off(event, offFunc) {
      this.events[event] = this.events[event].filter(function (func) {
        return offFunc !== func;
      });
    }
    /**
     * 清空
     */

  }, {
    key: "clear",
    value: function clear() {
      delete this.events;
    }
  }]);

  return Event;
}();

/* harmony default export */ var Utils_Event = (Event_Event);
// CONCATENATED MODULE: ./src/Shape/Animation.js


/**
 * @namespace Aniamtion
 */

/* harmony default export */ var Shape_Animation = ({
  /**
   * @prop {function} Aniamtion.createRadialGradient
   * @param {*} color 
   * @param {*} color2 
   * @memberof Aniamtion
   * @returns {Snap.Element}
   */
  createRadialGradient: function createRadialGradient() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#f4c708';
    var color2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#f7e69a';
    var radialGradient = document.createElementNS('http://www.w3.org/2000/svg', radialGradient);
    radialGradient.innerHTML = "<stop offset=\"0%\" stop-color=\"".concat(color, "\"></stop>\n\t\t\t<stop offset=\"100%\" stop-color=\"").concat(color2, "\"></stop>\n\t\t\t<animate attributeName=\"fy\" dur=\"700ms\" from=\"90%\" to=\"0%\" repeatCount=\"indefinite\" />");
    var ele = snap_svg(radialGradient);
    ele.attr({
      fy: '90%'
    });
    return ele;
  }
});
// CONCATENATED MODULE: ./src/Shape/AnchorLine.js





/**
 * @class
 */
var AnchorLine_AchorLine = /*#__PURE__*/function () {
  function AchorLine(graph) {
    classCallCheck_default()(this, AchorLine);

    this.graph = graph;
    this.anchorLines = {};
    this.paper = graph.editor.paper;
    this.anchorDistance = graph.editor.config.anchorDistance || 5;
    this.anchorXLength = graph.editor.config.anchorXLength || 10;
    this.anchorYLength = graph.editor.config.anchorYLength || 10;
    this.hideAchorLine = graph.editor.config.hideAchorLine;
    this.hideAchor = graph.editor.config.hideAchor;
    this.anchors = [];
    this.path = this.paper.path();
    this.path.attr({
      "class": 'anchor-line'
    });
  }
  /**
   * 生成所有的吸附线位置
   */


  createClass_default()(AchorLine, [{
    key: "makeAllAnchors",
    value: function makeAllAnchors(origin) {
      if (this.hideAchorLine) return;
      this.node = origin;
      var anchors = [];
      var nodes = this.graph.node.nodes;

      for (var key in nodes) {
        if (origin.data.uuid === key) continue;
        var node = nodes[key];
        var bbox = node.getBBox(); // 缓存bbox

        node.bbox = bbox;
        var x = bbox.x,
            y = bbox.y,
            width = bbox.width,
            height = bbox.height;
        anchors.push({
          x: x,
          y: y
        }, {
          x: x + width,
          y: y
        }, {
          x: x + width,
          y: y + height
        }, {
          x: x,
          y: y + height
        }, {
          x: x + width / 2,
          y: y + height / 2
        });
      }

      this.anchors = anchors;
    }
  }, {
    key: "checkAchor",
    value: function checkAchor(x, y) {
      var anchorXLength = this.anchorXLength,
          anchorYLength = this.anchorYLength;
      var x5 = x % anchorXLength;
      var y5 = y % anchorYLength;

      if (x5 < anchorXLength / 2) {
        x = Math.floor(x / anchorXLength) * anchorXLength;
      } else {
        x = Math.ceil(x / anchorXLength) * anchorXLength;
      }

      if (y5 < anchorYLength / 2) {
        y = Math.floor(y / anchorYLength) * anchorYLength;
      } else {
        y = Math.ceil(y / anchorYLength) * anchorYLength;
      }

      return {
        x: x,
        y: y
      };
    }
    /**
     * 画节点
     * @param {*} node
     */

  }, {
    key: "check",
    value: function check(x, y) {
      var _this = this;

      if (!this.hideAchorLine) {
        var bbox = this.node.bbox;
        var width = bbox.width,
            height = bbox.height;
        var tl = {
          x: x,
          y: y
        };
        var tr = {
          x: x + width,
          y: y
        };
        var br = {
          x: x + width,
          y: y + height
        };
        var bl = {
          x: x,
          y: y + height
        };
        var cc = {
          x: x + width / 2,
          y: y + height / 2
        };
        var nowPoints = [tl, tr, br, bl, cc];
        var _final = {};
        var newXY = {
          x: x,
          y: y
        };
        var coordFlag = '';
        var anchor = this.anchors.find(function (anchor) {
          return nowPoints.find(function (point, index) {
            var deltaY = anchor.y - point.y;
            var deltaX = anchor.x - point.x;

            if (Math.abs(deltaX) < _this.anchorDistance) {
              _final.x = anchor.x;
              newXY.x += deltaX;
              coordFlag = 'x';
              return true;
            }

            if (Math.abs(deltaY) < _this.anchorDistance) {
              _final.y = anchor.y;
              newXY.y += deltaY;
              coordFlag = 'y';
              return true;
            }
          });
        });

        if (!anchor) {
          this.path.node.style.display = 'none';
          if (!this.hideAchor) return this.checkAchor(x, y);
          return {
            x: x,
            y: y
          };
        } // 中心点坐标补齐


        if (_final.x === undefined) {
          _final.x = cc.x;
        } else {
          _final.y = cc.y;
        }

        var path = "M".concat(_final.x, ",").concat(_final.y, " L").concat(anchor.x, ",").concat(anchor.y);
        this.path.node.setAttribute('d', path);
        this.path.node.style.display = 'block';

        if (!this.hideAchor) {
          var anchorXY = this.checkAchor(newXY.x, newXY.y);
          anchorXY[coordFlag] = newXY[coordFlag];
          return anchorXY;
        }

        return newXY;
      }

      if (!this.hideAchor) return this.checkAchor(x, y);
      return {
        x: x,
        y: y
      };
    }
    /**
     * 隐藏线
     */

  }, {
    key: "hidePath",
    value: function hidePath() {
      this.path.attr({
        style: 'display: none'
      });
    }
  }]);

  return AchorLine;
}();

/* harmony default export */ var AnchorLine = (AnchorLine_AchorLine);
// CONCATENATED MODULE: ./src/Shape/Graph.js














function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var backSvg = __webpack_require__(306);
/**
 * @class
 * @extends Event
 */


var Graph_Graph = /*#__PURE__*/function (_Event) {
  inherits_default()(Graph, _Event);

  var _super = _createSuper(Graph);

  function Graph(editor) {
    var _this;

    classCallCheck_default()(this, Graph);

    _this = _super.call(this);

    defineProperty_default()(assertThisInitialized_default()(_this), "onKeyDown", function (e) {
      if (["TEXTAREA", "INPUT"].indexOf(document.activeElement.tagName) > -1 && document.activeElement.getAttribute("contenteditable") !== "false") {
        return;
      }

      if (e.key === 'Backspace') {
        var deleteKeys = [];

        for (var key in _this.node.actives) {
          // 不触发事件
          _this.node.deleteNode(_this.node.actives[key]);

          delete _this.node.actives[key];
          deleteKeys.push(key);
        }

        _this.line.activeLine && _this.line.deleteLine(_this.line.activeLine);
        /**
         * @event Graph#delete
         * @type {Object}
         */

        _this.fire('delete', {
          event: e,
          deleteKeys: deleteKeys
        });
      }

      if (e.keyCode === 'C'.charCodeAt(0) && (e.metaKey || e.ctrlKey)) {
        /**
        			 * @event Graph#copy
        			 * @type {Object}
        			 */
        _this.fire('copy', {
          event: e
        });
      }

      if (e.keyCode === 'V'.charCodeAt(0) && (e.metaKey || e.ctrlKey)) {
        /**
         * @event Graph#paste
         * @type {Object}
         */
        _this.fire('paste', {
          event: e
        });
      }

      if (e.keyCode === 'Z'.charCodeAt(0) && (e.metaKey || e.ctrlKey) && !e.shiftKey) {
        _this.editor.schema.undo();
      }

      if (e.keyCode === 'Z'.charCodeAt(0) && (e.metaKey || e.ctrlKey) && e.shiftKey) {
        _this.editor.schema.redo();
      }

      e.preventDefault();
      return false;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onLinkPointHover", function (ele) {
      _this.hoverLinkPoint = ele;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onLinkPointOut", function (ele) {
      _this.hoverLinkPoint = undefined;
    });

    _this.editor = editor;
    /**
     * @property {Node} node
     */

    _this.node = new Shape_Node(assertThisInitialized_default()(_this));
    /**
     * @property {Line} line
     */

    _this.line = new Shape_Line(assertThisInitialized_default()(_this));
    /**
    * @prop {AnchorLine} anchorLine
    */

    _this.anchorLine = new AnchorLine(assertThisInitialized_default()(_this));

    _this.node.linkPointsG.before(_this.line.lineG);
    /**
     * @prop {Animation} animation
     */


    _this.animation = Shape_Animation; // 模式：操作、查看模式

    _this.mode = editor.config.mode;

    _this.listenEvents();

    if (_this.editor.config.showBackGrid) {
      _this.addBack();
    }

    return _this;
  }

  createClass_default()(Graph, [{
    key: "addBack",
    value: function addBack() {
      this.editor.container.select('.mm-editor-back').node.style.backgroundImage = "url(".concat(backSvg, ")");
    }
  }, {
    key: "listenEvents",
    value: function listenEvents() {
      var _this2 = this;

      this.on('node:move', function (_ref) {
        var node = _ref.node;

        _this2.line.updateByNode(node);
      });
      this.editor.svg.attr({
        tabindex: '0'
      });
      this.editor.svg.click(function (e) {
        if (e.target.tagName === 'svg') {
          _this2.fire('paper:click', e);
        }
      }); // 查看模式不能删除节点、线条；如果存在部分可操作则自己在业务中监听处理相关逻辑

      if (this.mode !== 'view') {
        document.addEventListener('keydown', this.onKeyDown);
      }

      this.on('line:drag', function () {
        _this2.linkStatus = 'lineing';

        for (var key in _this2.node.nodes) {
          var node = _this2.node.nodes[key];
          node.linkPoints.forEach(function (point) {
            point.attr({
              display: 'block'
            });
          });
        }
      });
      this.on('line:drop', function () {
        _this2.linkStatus = 'none';

        for (var key in _this2.node.nodes) {
          var node = _this2.node.nodes[key];
          node.linkPoints.forEach(function (point) {
            point.attr({
              display: 'none'
            });
          });
        }
      });
    } //todo:

  }, {
    key: "addLinkHoverEvent",
    value:
    /**
     * 添加链接点事件
     */
    function addLinkHoverEvent() {
      var _this3 = this;

      var linkPoints = this.editor.paper.selectAll('.mm-link-points');
      linkPoints.forEach(function (point) {
        point.mouseover(_this3.onLinkPointHover);
        point.mouseout(_this3.onLinkPointOut);
      });
    }
  }, {
    key: "offLinkHoverEvent",
    value:
    /**
     * 关闭线hover事件
     */
    function offLinkHoverEvent() {
      var _this4 = this;

      var linkPoints = this.editor.paper.selectAll('.mm-link-points');
      linkPoints.forEach(function (point) {
        point.unmouseover(_this4.onLinkPointHover);
        point.unmouseout(_this4.onLinkPointOut);
      });
      this.hoverLinkPoint = undefined;
    }
    /**
     *
     * @param {*} data
     */

  }, {
    key: "render",
    value: function () {
      var _render = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(data) {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                /**
                 * @event Graph#beforeRender 渲染之前触发
                 */
                this.fire('beforeRender');
                this.data = data;
                _context.next = 4;
                return this.node.render(data.nodesMap);

              case 4:
                _context.next = 6;
                return this.line.render(data.linesMap);

              case 6:
                /**
                 * @event Graph#render  渲染后触发
                 */
                this.fire('render');

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function render(_x) {
        return _render.apply(this, arguments);
      }

      return render;
    }()
    /**
     * 清空画布
     */

  }, {
    key: "clearGraph",
    value: function clearGraph() {
      this.line.clear();
      this.node.clear();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.clearGraph();
      this.clear();
      document.removeEventListener('keydown', this.onKeyDown);
    }
  }]);

  return Graph;
}(Utils_Event);

/* harmony default export */ var Shape_Graph = (Graph_Graph);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(169);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-float.js
var es_parse_float = __webpack_require__(307);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__(206);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(207);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(309);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(310);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-json.js
var es_date_to_json = __webpack_require__(313);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.to-json.js
var web_url_to_json = __webpack_require__(314);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.last-index-of.js
var es_array_last_index_of = __webpack_require__(315);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.bind.js
var es_function_bind = __webpack_require__(317);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(318);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat.js
var es_array_flat = __webpack_require__(319);

// EXTERNAL MODULE: ./node_modules/eve/eve.js
var eve_eve = __webpack_require__(0);
var eve_default = /*#__PURE__*/__webpack_require__.n(eve_eve);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.now.js
var es_date_now = __webpack_require__(321);

// CONCATENATED MODULE: ./src/Snap/mina.js







var animations = {},
    requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
  setTimeout(callback, 16, new Date().getTime());
  return true;
},
    requestID,
    isArray = Array.isArray || function (a) {
  return a instanceof Array || Object.prototype.toString.call(a) == "[object Array]";
},
    mina_idgen = 0,
    mina_idprefix = "M" + (+new Date()).toString(36),
    mina_ID = function ID() {
  return mina_idprefix + (mina_idgen++).toString(36);
},
    diff = function diff(a, b, A, B) {
  if (isArray(a)) {
    res = [];

    for (var i = 0, ii = a.length; i < ii; i++) {
      res[i] = diff(a[i], b, A[i], B);
    }

    return res;
  }

  var dif = (A - a) / (B - b);
  return function (bb) {
    return a + dif * (bb - b);
  };
},
    timer = Date.now || function () {
  return +new Date();
},
    sta = function sta(val) {
  var a = this;

  if (val == null) {
    return a.s;
  }

  var ds = a.s - val;
  a.b += a.dur * ds;
  a.B += a.dur * ds;
  a.s = val;
},
    speed = function speed(val) {
  var a = this;

  if (val == null) {
    return a.spd;
  }

  a.spd = val;
},
    duration = function duration(val) {
  var a = this;

  if (val == null) {
    return a.dur;
  }

  a.s = a.s * val / a.dur;
  a.dur = val;
},
    stopit = function stopit() {
  var a = this;
  delete animations[a.id];
  a.update();
  eve("mina.stop." + a.id, a);
},
    pause = function pause() {
  var a = this;

  if (a.pdif) {
    return;
  }

  delete animations[a.id];
  a.update();
  a.pdif = a.get() - a.b;
},
    resume = function resume() {
  var a = this;

  if (!a.pdif) {
    return;
  }

  a.b = a.get() - a.pdif;
  delete a.pdif;
  animations[a.id] = a;
  mina_frame();
},
    update = function update() {
  var a = this,
      res;

  if (isArray(a.start)) {
    res = [];

    for (var j = 0, jj = a.start.length; j < jj; j++) {
      res[j] = +a.start[j] + (a.end[j] - a.start[j]) * a.easing(a.s);
    }
  } else {
    res = +a.start + (a.end - a.start) * a.easing(a.s);
  }

  a.set(res);
},
    mina_frame = function frame(timeStamp) {
  // Manual invokation?
  if (!timeStamp) {
    // Frame loop stopped?
    if (!requestID) {
      // Start frame loop...
      requestID = requestAnimFrame(frame);
    }

    return;
  }

  var len = 0;

  for (var i in animations) {
    if (animations.hasOwnProperty(i)) {
      var a = animations[i],
          b = a.get(),
          res;
      len++;
      a.s = (b - a.b) / (a.dur / a.spd);

      if (a.s >= 1) {
        delete animations[i];
        a.s = 1;
        len--;

        (function (a) {
          setTimeout(function () {
            eve("mina.finish." + a.id, a);
          });
        })(a);
      }

      a.update();
    }
  }

  requestID = len ? requestAnimFrame(frame) : false;
},

/*\
	* mina
	[ method ]
	**
	* Generic animation of numbers
	**
	- a (number) start _slave_ number
	- A (number) end _slave_ number
	- b (number) start _master_ number (start time in general case)
	- B (number) end _master_ number (end time in general case)
	- get (function) getter of _master_ number (see @mina.time)
	- set (function) setter of _slave_ number
	- easing (function) #optional easing function, default is @mina.linear
	= (object) animation descriptor
	o {
	o         id (string) animation id,
	o         start (number) start _slave_ number,
	o         end (number) end _slave_ number,
	o         b (number) start _master_ number,
	o         s (number) animation status (0..1),
	o         dur (number) animation duration,
	o         spd (number) animation speed,
	o         get (function) getter of _master_ number (see @mina.time),
	o         set (function) setter of _slave_ number,
	o         easing (function) easing function, default is @mina.linear,
	o         status (function) status getter/setter,
	o         speed (function) speed getter/setter,
	o         duration (function) duration getter/setter,
	o         stop (function) animation stopper
	o         pause (function) pauses the animation
	o         resume (function) resumes the animation
	o         update (function) calles setter with the right value of the animation
	o }
\*/
mina = function mina(a, A, b, B, get, set, easing) {
  var anim = {
    id: mina_ID(),
    start: a,
    end: A,
    b: b,
    s: 0,
    dur: B - b,
    spd: 1,
    get: get,
    set: set,
    easing: easing || mina.linear,
    status: sta,
    speed: speed,
    duration: duration,
    stop: stopit,
    pause: pause,
    resume: resume,
    update: update
  };
  animations[anim.id] = anim;
  var len = 0,
      i;

  for (i in animations) {
    if (animations.hasOwnProperty(i)) {
      len++;

      if (len == 2) {
        break;
      }
    }
  }

  len == 1 && mina_frame();
  return anim;
};
/*\
	* mina.time
	[ method ]
	**
	* Returns the current time. Equivalent to:
	| function () {
	|     return (new Date).getTime();
	| }
\*/


mina.time = timer;
/*\
	* mina.getById
	[ method ]
	**
	* Returns an animation by its id
	- id (string) animation's id
	= (object) See @mina
\*/

mina.getById = function (id) {
  return animations[id] || null;
};
/*\
	* mina.linear
	[ method ]
	**
	* Default linear easing
	- n (number) input 0..1
	= (number) output 0..1
\*/


mina.linear = function (n) {
  return n;
};
/*\
	* mina.easeout
	[ method ]
	**
	* Easeout easing
	- n (number) input 0..1
	= (number) output 0..1
\*/


mina.easeout = function (n) {
  return Math.pow(n, 1.7);
};
/*\
	* mina.easein
	[ method ]
	**
	* Easein easing
	- n (number) input 0..1
	= (number) output 0..1
\*/


mina.easein = function (n) {
  return Math.pow(n, 0.48);
};
/*\
	* mina.easeinout
	[ method ]
	**
	* Easeinout easing
	- n (number) input 0..1
	= (number) output 0..1
\*/


mina.easeinout = function (n) {
  if (n == 1) {
    return 1;
  }

  if (n == 0) {
    return 0;
  }

  var q = 0.48 - n / 1.04,
      Q = Math.sqrt(0.1734 + q * q),
      x = Q - q,
      X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1),
      y = -Q - q,
      Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1),
      t = X + Y + 0.5;
  return (1 - t) * 3 * t * t + t * t * t;
};
/*\
	* mina.backin
	[ method ]
	**
	* Backin easing
	- n (number) input 0..1
	= (number) output 0..1
\*/


mina.backin = function (n) {
  if (n == 1) {
    return 1;
  }

  var s = 1.70158;
  return n * n * ((s + 1) * n - s);
};
/*\
	* mina.backout
	[ method ]
	**
	* Backout easing
	- n (number) input 0..1
	= (number) output 0..1
\*/


mina.backout = function (n) {
  if (n == 0) {
    return 0;
  }

  n = n - 1;
  var s = 1.70158;
  return n * n * ((s + 1) * n + s) + 1;
};
/*\
	* mina.elastic
	[ method ]
	**
	* Elastic easing
	- n (number) input 0..1
	= (number) output 0..1
\*/


mina.elastic = function (n) {
  if (n == !!n) {
    return n;
  }

  return Math.pow(2, -10 * n) * Math.sin((n - 0.075) * (2 * Math.PI) / 0.3) + 1;
};
/*\
	* mina.bounce
	[ method ]
	**
	* Bounce easing
	- n (number) input 0..1
	= (number) output 0..1
\*/


mina.bounce = function (n) {
  var s = 7.5625,
      p = 2.75,
      l;

  if (n < 1 / p) {
    l = s * n * n;
  } else {
    if (n < 2 / p) {
      n -= 1.5 / p;
      l = s * n * n + 0.75;
    } else {
      if (n < 2.5 / p) {
        n -= 2.25 / p;
        l = s * n * n + 0.9375;
      } else {
        n -= 2.625 / p;
        l = s * n * n + 0.984375;
      }
    }
  }

  return l;
};

/* harmony default export */ var Snap_mina = (mina);
// CONCATENATED MODULE: ./src/Snap/snap.svg.js
































var snap_svg_Snap = function (root) {
  /*\
   * Snap
   [ method ]
   **
   * Creates a drawing surface or wraps existing SVG element.
   **
   - width (number|string) width of surface
   - height (number|string) height of surface
   * or
   - DOM (SVGElement) element to be wrapped into Snap structure
   * or
   - array (array) array of elements (will return set of elements)
   * or
   - query (string) CSS query selector
   = (object) @Element
  \*/
  function Snap(w) {
    var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (w) {
      if (w.nodeType) {
        return wrap(w);
      }

      if (is(w, "array") && Snap.set) {
        return Snap.set.apply(Snap, w);
      }

      if (w instanceof Element) {
        return w;
      }

      if (h == null) {
        // try {
        w = glob.doc.querySelector(String(w));
        return wrap(w); // } catch (e) {
        // return null;
        // }
      }
    }

    w = w == null ? "100%" : w;
    h = h == null ? "100%" : h;
    return new Paper(w, h);
  }

  Snap.toString = function () {
    return "Snap v" + this.version;
  };

  Snap._ = {};
  var glob = {
    win: root.window,
    doc: root.window.document
  };
  Snap._.glob = glob;

  var has = "hasOwnProperty",
      Str = String,
      toFloat = parseFloat,
      toInt = parseInt,
      math = Math,
      mmax = math.max,
      mmin = math.min,
      abs = math.abs,
      pow = math.pow,
      PI = math.PI,
      round = math.round,
      E = "",
      S = " ",
      objectToString = Object.prototype.toString,
      ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
      colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
      bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
      separator = Snap._.separator = /[,\s]+/,
      whitespace = /[\s]/g,
      commaSpaces = /[\s]*,[\s]*/,
      hsrg = {
    hs: 1,
    rg: 1
  },
      pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
      tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
      pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/ig,
      idgen = 0,
      idprefix = "S" + (+new Date()).toString(36),
      ID = function ID(el) {
    return (el && el.type ? el.type : E) + idprefix + (idgen++).toString(36);
  },
      xlink = "http://www.w3.org/1999/xlink",
      xmlns = "http://www.w3.org/2000/svg",
      hub = {},

  /*\
   * Snap.url
   [ method ]
   **
   * Wraps path into `"url('<path>')"`.
   - value (string) path
   = (string) wrapped path
  \*/
  URL = Snap.url = function (url) {
    return "url('#" + url + "')";
  };

  function $(el, attr) {
    if (attr) {
      if (el == "#text") {
        el = glob.doc.createTextNode(attr.text || attr["#text"] || "");
      }

      if (el == "#comment") {
        el = glob.doc.createComment(attr.text || attr["#text"] || "");
      }

      if (typeof el == "string") {
        el = $(el);
      }

      if (typeof attr == "string") {
        if (el.nodeType == 1) {
          if (attr.substring(0, 6) == "xlink:") {
            return el.getAttributeNS(xlink, attr.substring(6));
          }

          if (attr.substring(0, 4) == "xml:") {
            return el.getAttributeNS(xmlns, attr.substring(4));
          }

          return el.getAttribute(attr);
        } else if (attr == "text") {
          return el.nodeValue;
        } else {
          return null;
        }
      }

      if (el.nodeType == 1) {
        for (var key in attr) {
          if (attr[has](key)) {
            var val = Str(attr[key]);

            if (val) {
              if (key.substring(0, 6) == "xlink:") {
                el.setAttributeNS(xlink, key.substring(6), val);
              } else if (key.substring(0, 4) == "xml:") {
                el.setAttributeNS(xmlns, key.substring(4), val);
              } else {
                el.setAttribute(key, val);
              }
            } else {
              el.removeAttribute(key);
            }
          }
        }
      } else if ("text" in attr) {
        el.nodeValue = attr.text;
      }
    } else {
      el = glob.doc.createElementNS(xmlns, el);
    }

    return el;
  }

  Snap._.$ = $;
  Snap._.id = ID;

  function getAttrs(el) {
    var attrs = el.attributes,
        name,
        out = {};

    for (var i = 0; i < attrs.length; i++) {
      if (attrs[i].namespaceURI == xlink) {
        name = "xlink:";
      } else {
        name = "";
      }

      name += attrs[i].name;
      out[name] = attrs[i].textContent;
    }

    return out;
  }

  function is(o, type) {
    type = Str.prototype.toLowerCase.call(type);

    if (type == "finite") {
      return isFinite(o);
    }

    if (type == "array" && (o instanceof Array || Array.isArray && Array.isArray(o))) {
      return true;
    }

    return type == "null" && o === null || type == typeof_default()(o) && o !== null || type == "object" && o === Object(o) || objectToString.call(o).slice(8, -1).toLowerCase() == type;
  }
  /*\
   * Snap.format
   [ method ]
   **
   * Replaces construction of type `{<name>}` to the corresponding argument
   **
   - token (string) string to format
   - json (object) object which properties are used as a replacement
   = (string) formatted string
   > Usage
   | // this draws a rectangular shape equivalent to "M10,20h40v50h-40z"
   | paper.path(Snap.format("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
   |     x: 10,
   |     y: 20,
   |     dim: {
   |         width: 40,
   |         height: 50,
   |         "negative width": -40
   |     }
   | }));
  \*/


  Snap.format = function () {
    var tokenRegex = /\{([^\}]+)\}/g,
        objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
        // matches .xxxxx or ["xxxxx"] to run over object properties
    replacer = function replacer(all, key, obj) {
      var res = obj;
      key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
        name = name || quotedName;

        if (res) {
          if (name in res) {
            res = res[name];
          }

          typeof res == "function" && isFunc && (res = res());
        }
      });
      res = (res == null || res == obj ? all : res) + "";
      return res;
    };

    return function (str, obj) {
      return Str(str).replace(tokenRegex, function (all, key) {
        return replacer(all, key, obj);
      });
    };
  }();

  function clone(obj) {
    if (typeof obj == "function" || Object(obj) !== obj) {
      return obj;
    }

    var res = new obj.constructor();

    for (var key in obj) {
      if (obj[has](key)) {
        res[key] = clone(obj[key]);
      }
    }

    return res;
  }

  Snap._.clone = clone;

  function repush(array, item) {
    for (var i = 0, ii = array.length; i < ii; i++) {
      if (array[i] === item) {
        return array.push(array.splice(i, 1)[0]);
      }
    }
  }

  function cacher(f, scope, postprocessor) {
    function newf() {
      var arg = Array.prototype.slice.call(arguments, 0),
          args = arg.join("\u2400"),
          cache = newf.cache = newf.cache || {},
          count = newf.count = newf.count || [];

      if (cache[has](args)) {
        repush(count, args);
        return postprocessor ? postprocessor(cache[args]) : cache[args];
      }

      count.length >= 1e3 && delete cache[count.shift()];
      count.push(args);
      cache[args] = f.apply(scope, arg);
      return postprocessor ? postprocessor(cache[args]) : cache[args];
    }

    return newf;
  }

  Snap._.cacher = cacher;

  function angle(x1, y1, x2, y2, x3, y3) {
    if (x3 == null) {
      var x = x1 - x2,
          y = y1 - y2;

      if (!x && !y) {
        return 0;
      }

      return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
    } else {
      return angle(x1, y1, x3, y3) - angle(x2, y2, x3, y3);
    }
  }

  function rad(deg) {
    return deg % 360 * PI / 180;
  }

  function deg(rad) {
    return rad * 180 / PI % 360;
  }

  function x_y() {
    return this.x + S + this.y;
  }

  function x_y_w_h() {
    return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
  }
  /*\
   * Snap.rad
   [ method ]
   **
   * Transform angle to radians
   - deg (number) angle in degrees
   = (number) angle in radians
  \*/


  Snap.rad = rad;
  /*\
   * Snap.deg
   [ method ]
   **
   * Transform angle to degrees
   - rad (number) angle in radians
   = (number) angle in degrees
  \*/

  Snap.deg = deg;
  /*\
   * Snap.sin
   [ method ]
   **
   * Equivalent to `Math.sin()` only works with degrees, not radians.
   - angle (number) angle in degrees
   = (number) sin
  \*/

  Snap.sin = function (angle) {
    return math.sin(Snap.rad(angle));
  };
  /*\
   * Snap.tan
   [ method ]
   **
   * Equivalent to `Math.tan()` only works with degrees, not radians.
   - angle (number) angle in degrees
   = (number) tan
  \*/


  Snap.tan = function (angle) {
    return math.tan(Snap.rad(angle));
  };
  /*\
   * Snap.cos
   [ method ]
   **
   * Equivalent to `Math.cos()` only works with degrees, not radians.
   - angle (number) angle in degrees
   = (number) cos
  \*/


  Snap.cos = function (angle) {
    return math.cos(Snap.rad(angle));
  };
  /*\
   * Snap.asin
   [ method ]
   **
   * Equivalent to `Math.asin()` only works with degrees, not radians.
   - num (number) value
   = (number) asin in degrees
  \*/


  Snap.asin = function (num) {
    return Snap.deg(math.asin(num));
  };
  /*\
   * Snap.acos
   [ method ]
   **
   * Equivalent to `Math.acos()` only works with degrees, not radians.
   - num (number) value
   = (number) acos in degrees
  \*/


  Snap.acos = function (num) {
    return Snap.deg(math.acos(num));
  };
  /*\
   * Snap.atan
   [ method ]
   **
   * Equivalent to `Math.atan()` only works with degrees, not radians.
   - num (number) value
   = (number) atan in degrees
  \*/


  Snap.atan = function (num) {
    return Snap.deg(math.atan(num));
  };
  /*\
   * Snap.atan2
   [ method ]
   **
   * Equivalent to `Math.atan2()` only works with degrees, not radians.
   - num (number) value
   = (number) atan2 in degrees
  \*/


  Snap.atan2 = function (num) {
    return Snap.deg(math.atan2(num));
  };
  /*\
   * Snap.angle
   [ method ]
   **
   * Returns an angle between two or three points
   - x1 (number) x coord of first point
   - y1 (number) y coord of first point
   - x2 (number) x coord of second point
   - y2 (number) y coord of second point
   - x3 (number) #optional x coord of third point
   - y3 (number) #optional y coord of third point
   = (number) angle in degrees
  \*/


  Snap.angle = angle;
  /*\
   * Snap.len
   [ method ]
   **
   * Returns distance between two points
   - x1 (number) x coord of first point
   - y1 (number) y coord of first point
   - x2 (number) x coord of second point
   - y2 (number) y coord of second point
   = (number) distance
  \*/

  Snap.len = function (x1, y1, x2, y2) {
    return Math.sqrt(Snap.len2(x1, y1, x2, y2));
  };
  /*\
   * Snap.len2
   [ method ]
   **
   * Returns squared distance between two points
   - x1 (number) x coord of first point
   - y1 (number) y coord of first point
   - x2 (number) x coord of second point
   - y2 (number) y coord of second point
   = (number) distance
  \*/


  Snap.len2 = function (x1, y1, x2, y2) {
    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
  };
  /*\
   * Snap.closestPoint
   [ method ]
   **
   * Returns closest point to a given one on a given path.
   - path (Element) path element
   - x (number) x coord of a point
   - y (number) y coord of a point
   = (object) in format
   {
  	x (number) x coord of the point on the path
  	y (number) y coord of the point on the path
  	length (number) length of the path to the point
  	distance (number) distance from the given point to the path
   }
  \*/
  // Copied from http://bl.ocks.org/mbostock/8027637


  Snap.closestPoint = function (path, x, y) {
    function distance2(p) {
      var dx = p.x - x,
          dy = p.y - y;
      return dx * dx + dy * dy;
    }

    var pathNode = path.node,
        pathLength = pathNode.getTotalLength(),
        precision = pathLength / pathNode.pathSegList.numberOfItems * .125,
        best,
        bestLength,
        bestDistance = Infinity; // linear scan for coarse approximation

    for (var scan, scanLength = 0, scanDistance; scanLength <= pathLength; scanLength += precision) {
      if ((scanDistance = distance2(scan = pathNode.getPointAtLength(scanLength))) < bestDistance) {
        best = scan;
        bestLength = scanLength;
        bestDistance = scanDistance;
      }
    } // binary search for precise estimate


    precision *= .5;

    while (precision > .5) {
      var before, after, beforeLength, afterLength, beforeDistance, afterDistance;

      if ((beforeLength = bestLength - precision) >= 0 && (beforeDistance = distance2(before = pathNode.getPointAtLength(beforeLength))) < bestDistance) {
        best = before;
        bestLength = beforeLength;
        bestDistance = beforeDistance;
      } else if ((afterLength = bestLength + precision) <= pathLength && (afterDistance = distance2(after = pathNode.getPointAtLength(afterLength))) < bestDistance) {
        best = after;
        bestLength = afterLength;
        bestDistance = afterDistance;
      } else {
        precision *= .5;
      }
    }

    best = {
      x: best.x,
      y: best.y,
      length: bestLength,
      distance: Math.sqrt(bestDistance)
    };
    return best;
  };
  /*\
   * Snap.is
   [ method ]
   **
   * Handy replacement for the `typeof` operator
   - o (…) any object or primitive
   - type (string) name of the type, e.g., `string`, `function`, `number`, etc.
   = (boolean) `true` if given value is of given type
  \*/


  Snap.is = is;
  /*\
   * Snap.snapTo
   [ method ]
   **
   * Snaps given value to given grid
   - values (array|number) given array of values or step of the grid
   - value (number) value to adjust
   - tolerance (number) #optional maximum distance to the target value that would trigger the snap. Default is `10`.
   = (number) adjusted value
  \*/

  Snap.snapTo = function (values, value, tolerance) {
    tolerance = is(tolerance, "finite") ? tolerance : 10;

    if (is(values, "array")) {
      var i = values.length;

      while (i--) {
        if (abs(values[i] - value) <= tolerance) {
          return values[i];
        }
      }
    } else {
      values = +values;
      var rem = value % values;

      if (rem < tolerance) {
        return value - rem;
      }

      if (rem > values - tolerance) {
        return value - rem + values;
      }
    }

    return value;
  }; // Colour

  /*\
   * Snap.getRGB
   [ method ]
   **
   * Parses color string as RGB object
   - color (string) color string in one of the following formats:
   # <ul>
   #     <li>Color name (<code>red</code>, <code>green</code>, <code>cornflowerblue</code>, etc)</li>
   #     <li>#••• — shortened HTML color: (<code>#000</code>, <code>#fc0</code>, etc.)</li>
   #     <li>#•••••• — full length HTML color: (<code>#000000</code>, <code>#bd2300</code>)</li>
   #     <li>rgb(•••, •••, •••) — red, green and blue channels values: (<code>rgb(200,&nbsp;100,&nbsp;0)</code>)</li>
   #     <li>rgba(•••, •••, •••, •••) — also with opacity</li>
   #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>)</li>
   #     <li>rgba(•••%, •••%, •••%, •••%) — also with opacity</li>
   #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>)</li>
   #     <li>hsba(•••, •••, •••, •••) — also with opacity</li>
   #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
   #     <li>hsba(•••%, •••%, •••%, •••%) — also with opacity</li>
   #     <li>hsl(•••, •••, •••) — hue, saturation and luminosity values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;0.5)</code>)</li>
   #     <li>hsla(•••, •••, •••, •••) — also with opacity</li>
   #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
   #     <li>hsla(•••%, •••%, •••%, •••%) — also with opacity</li>
   # </ul>
   * Note that `%` can be used any time: `rgb(20%, 255, 50%)`.
   = (object) RGB object in the following format:
   o {
   o     r (number) red,
   o     g (number) green,
   o     b (number) blue,
   o     hex (string) color in HTML/CSS format: #••••••,
   o     error (boolean) true if string can't be parsed
   o }
  \*/


  Snap.getRGB = cacher(function (colour) {
    if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
      return {
        r: -1,
        g: -1,
        b: -1,
        hex: "none",
        error: 1,
        toString: rgbtoString
      };
    }

    if (colour == "none") {
      return {
        r: -1,
        g: -1,
        b: -1,
        hex: "none",
        toString: rgbtoString
      };
    }

    !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = _toHex(colour));

    if (!colour) {
      return {
        r: -1,
        g: -1,
        b: -1,
        hex: "none",
        error: 1,
        toString: rgbtoString
      };
    }

    var res,
        red,
        green,
        blue,
        opacity,
        t,
        values,
        rgb = colour.match(colourRegExp);

    if (rgb) {
      if (rgb[2]) {
        blue = toInt(rgb[2].substring(5), 16);
        green = toInt(rgb[2].substring(3, 5), 16);
        red = toInt(rgb[2].substring(1, 3), 16);
      }

      if (rgb[3]) {
        blue = toInt((t = rgb[3].charAt(3)) + t, 16);
        green = toInt((t = rgb[3].charAt(2)) + t, 16);
        red = toInt((t = rgb[3].charAt(1)) + t, 16);
      }

      if (rgb[4]) {
        values = rgb[4].split(commaSpaces);
        red = toFloat(values[0]);
        values[0].slice(-1) == "%" && (red *= 2.55);
        green = toFloat(values[1]);
        values[1].slice(-1) == "%" && (green *= 2.55);
        blue = toFloat(values[2]);
        values[2].slice(-1) == "%" && (blue *= 2.55);
        rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
        values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
      }

      if (rgb[5]) {
        values = rgb[5].split(commaSpaces);
        red = toFloat(values[0]);
        values[0].slice(-1) == "%" && (red /= 100);
        green = toFloat(values[1]);
        values[1].slice(-1) == "%" && (green /= 100);
        blue = toFloat(values[2]);
        values[2].slice(-1) == "%" && (blue /= 100);
        (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
        rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
        values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
        return Snap.hsb2rgb(red, green, blue, opacity);
      }

      if (rgb[6]) {
        values = rgb[6].split(commaSpaces);
        red = toFloat(values[0]);
        values[0].slice(-1) == "%" && (red /= 100);
        green = toFloat(values[1]);
        values[1].slice(-1) == "%" && (green /= 100);
        blue = toFloat(values[2]);
        values[2].slice(-1) == "%" && (blue /= 100);
        (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
        rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
        values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
        return Snap.hsl2rgb(red, green, blue, opacity);
      }

      red = mmin(math.round(red), 255);
      green = mmin(math.round(green), 255);
      blue = mmin(math.round(blue), 255);
      opacity = mmin(mmax(opacity, 0), 1);
      rgb = {
        r: red,
        g: green,
        b: blue,
        toString: rgbtoString
      };
      rgb.hex = "#" + (16777216 | blue | green << 8 | red << 16).toString(16).slice(1);
      rgb.opacity = is(opacity, "finite") ? opacity : 1;
      return rgb;
    }

    return {
      r: -1,
      g: -1,
      b: -1,
      hex: "none",
      error: 1,
      toString: rgbtoString
    };
  }, Snap);
  /*\
   * Snap.hsb
   [ method ]
   **
   * Converts HSB values to a hex representation of the color
   - h (number) hue
   - s (number) saturation
   - b (number) value or brightness
   = (string) hex representation of the color
  \*/

  Snap.hsb = cacher(function (h, s, b) {
    return Snap.hsb2rgb(h, s, b).hex;
  });
  /*\
   * Snap.hsl
   [ method ]
   **
   * Converts HSL values to a hex representation of the color
   - h (number) hue
   - s (number) saturation
   - l (number) luminosity
   = (string) hex representation of the color
  \*/

  Snap.hsl = cacher(function (h, s, l) {
    return Snap.hsl2rgb(h, s, l).hex;
  });
  /*\
   * Snap.rgb
   [ method ]
   **
   * Converts RGB values to a hex representation of the color
   - r (number) red
   - g (number) green
   - b (number) blue
   = (string) hex representation of the color
  \*/

  Snap.rgb = cacher(function (r, g, b, o) {
    if (is(o, "finite")) {
      var round = math.round;
      return "rgba(" + [round(r), round(g), round(b), +o.toFixed(2)] + ")";
    }

    return "#" + (16777216 | b | g << 8 | r << 16).toString(16).slice(1);
  });

  var _toHex = function toHex(color) {
    var i = glob.doc.getElementsByTagName("head")[0] || glob.doc.getElementsByTagName("svg")[0],
        red = "rgb(255, 0, 0)";
    _toHex = cacher(function (color) {
      if (color.toLowerCase() == "red") {
        return red;
      }

      i.style.color = red;
      i.style.color = color;
      var out = glob.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
      return out == red ? null : out;
    });
    return _toHex(color);
  },
      hsbtoString = function hsbtoString() {
    return "hsb(" + [this.h, this.s, this.b] + ")";
  },
      hsltoString = function hsltoString() {
    return "hsl(" + [this.h, this.s, this.l] + ")";
  },
      rgbtoString = function rgbtoString() {
    return this.opacity == 1 || this.opacity == null ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
  },
      prepareRGB = function prepareRGB(r, g, b) {
    if (g == null && is(r, "object") && "r" in r && "g" in r && "b" in r) {
      b = r.b;
      g = r.g;
      r = r.r;
    }

    if (g == null && is(r, string)) {
      var clr = Snap.getRGB(r);
      r = clr.r;
      g = clr.g;
      b = clr.b;
    }

    if (r > 1 || g > 1 || b > 1) {
      r /= 255;
      g /= 255;
      b /= 255;
    }

    return [r, g, b];
  },
      packageRGB = function packageRGB(r, g, b, o) {
    r = math.round(r * 255);
    g = math.round(g * 255);
    b = math.round(b * 255);
    var rgb = {
      r: r,
      g: g,
      b: b,
      opacity: is(o, "finite") ? o : 1,
      hex: Snap.rgb(r, g, b),
      toString: rgbtoString
    };
    is(o, "finite") && (rgb.opacity = o);
    return rgb;
  };
  /*\
   * Snap.color
   [ method ]
   **
   * Parses the color string and returns an object featuring the color's component values
   - clr (string) color string in one of the supported formats (see @Snap.getRGB)
   = (object) Combined RGB/HSB object in the following format:
   o {
   o     r (number) red,
   o     g (number) green,
   o     b (number) blue,
   o     hex (string) color in HTML/CSS format: #••••••,
   o     error (boolean) `true` if string can't be parsed,
   o     h (number) hue,
   o     s (number) saturation,
   o     v (number) value (brightness),
   o     l (number) lightness
   o }
  \*/


  Snap.color = function (clr) {
    var rgb;

    if (is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
      rgb = Snap.hsb2rgb(clr);
      clr.r = rgb.r;
      clr.g = rgb.g;
      clr.b = rgb.b;
      clr.opacity = 1;
      clr.hex = rgb.hex;
    } else if (is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
      rgb = Snap.hsl2rgb(clr);
      clr.r = rgb.r;
      clr.g = rgb.g;
      clr.b = rgb.b;
      clr.opacity = 1;
      clr.hex = rgb.hex;
    } else {
      if (is(clr, "string")) {
        clr = Snap.getRGB(clr);
      }

      if (is(clr, "object") && "r" in clr && "g" in clr && "b" in clr && !("error" in clr)) {
        rgb = Snap.rgb2hsl(clr);
        clr.h = rgb.h;
        clr.s = rgb.s;
        clr.l = rgb.l;
        rgb = Snap.rgb2hsb(clr);
        clr.v = rgb.b;
      } else {
        clr = {
          hex: "none"
        };
        clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
        clr.error = 1;
      }
    }

    clr.toString = rgbtoString;
    return clr;
  };
  /*\
   * Snap.hsb2rgb
   [ method ]
   **
   * Converts HSB values to an RGB object
   - h (number) hue
   - s (number) saturation
   - v (number) value or brightness
   = (object) RGB object in the following format:
   o {
   o     r (number) red,
   o     g (number) green,
   o     b (number) blue,
   o     hex (string) color in HTML/CSS format: #••••••
   o }
  \*/


  Snap.hsb2rgb = function (h, s, v, o) {
    if (is(h, "object") && "h" in h && "s" in h && "b" in h) {
      v = h.b;
      s = h.s;
      o = h.o;
      h = h.h;
    }

    h *= 360;
    var R, G, B, X, C;
    h = h % 360 / 60;
    C = v * s;
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = v - C;
    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    return packageRGB(R, G, B, o);
  };
  /*\
   * Snap.hsl2rgb
   [ method ]
   **
   * Converts HSL values to an RGB object
   - h (number) hue
   - s (number) saturation
   - l (number) luminosity
   = (object) RGB object in the following format:
   o {
   o     r (number) red,
   o     g (number) green,
   o     b (number) blue,
   o     hex (string) color in HTML/CSS format: #••••••
   o }
  \*/


  Snap.hsl2rgb = function (h, s, l, o) {
    if (is(h, "object") && "h" in h && "s" in h && "l" in h) {
      l = h.l;
      s = h.s;
      h = h.h;
    }

    if (h > 1 || s > 1 || l > 1) {
      h /= 360;
      s /= 100;
      l /= 100;
    }

    h *= 360;
    var R, G, B, X, C;
    h = h % 360 / 60;
    C = 2 * s * (l < .5 ? l : 1 - l);
    X = C * (1 - abs(h % 2 - 1));
    R = G = B = l - C / 2;
    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];
    return packageRGB(R, G, B, o);
  };
  /*\
   * Snap.rgb2hsb
   [ method ]
   **
   * Converts RGB values to an HSB object
   - r (number) red
   - g (number) green
   - b (number) blue
   = (object) HSB object in the following format:
   o {
   o     h (number) hue,
   o     s (number) saturation,
   o     b (number) brightness
   o }
  \*/


  Snap.rgb2hsb = function (r, g, b) {
    b = prepareRGB(r, g, b);
    r = b[0];
    g = b[1];
    b = b[2];
    var H, S, V, C;
    V = mmax(r, g, b);
    C = V - mmin(r, g, b);
    H = C == 0 ? null : V == r ? (g - b) / C : V == g ? (b - r) / C + 2 : (r - g) / C + 4;
    H = (H + 360) % 6 * 60 / 360;
    S = C == 0 ? 0 : C / V;
    return {
      h: H,
      s: S,
      b: V,
      toString: hsbtoString
    };
  };
  /*\
   * Snap.rgb2hsl
   [ method ]
   **
   * Converts RGB values to an HSL object
   - r (number) red
   - g (number) green
   - b (number) blue
   = (object) HSL object in the following format:
   o {
   o     h (number) hue,
   o     s (number) saturation,
   o     l (number) luminosity
   o }
  \*/


  Snap.rgb2hsl = function (r, g, b) {
    b = prepareRGB(r, g, b);
    r = b[0];
    g = b[1];
    b = b[2];
    var H, S, L, M, m, C;
    M = mmax(r, g, b);
    m = mmin(r, g, b);
    C = M - m;
    H = C == 0 ? null : M == r ? (g - b) / C : M == g ? (b - r) / C + 2 : (r - g) / C + 4;
    H = (H + 360) % 6 * 60 / 360;
    L = (M + m) / 2;
    S = C == 0 ? 0 : L < .5 ? C / (2 * L) : C / (2 - 2 * L);
    return {
      h: H,
      s: S,
      l: L,
      toString: hsltoString
    };
  }; // Transformations

  /*\
   * Snap.parsePathString
   [ method ]
   **
   * Utility method
   **
   * Parses given path string into an array of arrays of path segments
   - pathString (string|array) path string or array of segments (in the last case it is returned straight away)
   = (array) array of segments
  \*/


  Snap.parsePathString = function (pathString) {
    if (!pathString) {
      return null;
    }

    var pth = Snap.path(pathString);

    if (pth.arr) {
      return Snap.path.clone(pth.arr);
    }

    var paramCounts = {
      a: 7,
      c: 6,
      o: 2,
      h: 1,
      l: 2,
      m: 2,
      r: 4,
      q: 4,
      s: 4,
      t: 2,
      v: 1,
      u: 3,
      z: 0
    },
        data = [];

    if (is(pathString, "array") && is(pathString[0], "array")) {
      // rough assumption
      data = Snap.path.clone(pathString);
    }

    if (!data.length) {
      Str(pathString).replace(pathCommand, function (a, b, c) {
        var params = [],
            name = b.toLowerCase();
        c.replace(pathValues, function (a, b) {
          b && params.push(+b);
        });

        if (name == "m" && params.length > 2) {
          data.push([b].concat(params.splice(0, 2)));
          name = "l";
          b = b == "m" ? "l" : "L";
        }

        if (name == "o" && params.length == 1) {
          data.push([b, params[0]]);
        }

        if (name == "r") {
          data.push([b].concat(params));
        } else while (params.length >= paramCounts[name]) {
          data.push([b].concat(params.splice(0, paramCounts[name])));

          if (!paramCounts[name]) {
            break;
          }
        }
      });
    }

    data.toString = Snap.path.toString;
    pth.arr = Snap.path.clone(data);
    return data;
  };
  /*\
   * Snap.parseTransformString
   [ method ]
   **
   * Utility method
   **
   * Parses given transform string into an array of transformations
   - TString (string|array) transform string or array of transformations (in the last case it is returned straight away)
   = (array) array of transformations
  \*/


  var parseTransformString = Snap.parseTransformString = function (TString) {
    if (!TString) {
      return null;
    }

    var paramCounts = {
      r: 3,
      s: 4,
      t: 2,
      m: 6
    },
        data = [];

    if (is(TString, "array") && is(TString[0], "array")) {
      // rough assumption
      data = Snap.path.clone(TString);
    }

    if (!data.length) {
      Str(TString).replace(tCommand, function (a, b, c) {
        var params = [],
            name = b.toLowerCase();
        c.replace(pathValues, function (a, b) {
          b && params.push(+b);
        });
        data.push([b].concat(params));
      });
    }

    data.toString = Snap.path.toString;
    return data;
  };

  function svgTransform2string(tstr) {
    var res = [];
    tstr = tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (all, name, params) {
      params = params.split(/\s*,\s*|\s+/);

      if (name == "rotate" && params.length == 1) {
        params.push(0, 0);
      }

      if (name == "scale") {
        if (params.length > 2) {
          params = params.slice(0, 2);
        } else if (params.length == 2) {
          params.push(0, 0);
        }

        if (params.length == 1) {
          params.push(params[0], 0, 0);
        }
      }

      if (name == "skewX") {
        res.push(["m", 1, 0, math.tan(rad(params[0])), 1, 0, 0]);
      } else if (name == "skewY") {
        res.push(["m", 1, math.tan(rad(params[0])), 0, 1, 0, 0]);
      } else {
        res.push([name.charAt(0)].concat(params));
      }

      return all;
    });
    return res;
  }

  Snap._.svgTransform2string = svgTransform2string;
  Snap._.rgTransform = /^[a-z][\s]*-?\.?\d/i;

  function transform2matrix(tstr, bbox) {
    var tdata = parseTransformString(tstr),
        m = new Snap.Matrix();

    if (tdata) {
      for (var i = 0, ii = tdata.length; i < ii; i++) {
        var t = tdata[i],
            tlen = t.length,
            command = Str(t[0]).toLowerCase(),
            absolute = t[0] != command,
            inver = absolute ? m.invert() : 0,
            x1,
            y1,
            x2,
            y2,
            bb;

        if (command == "t" && tlen == 2) {
          m.translate(t[1], 0);
        } else if (command == "t" && tlen == 3) {
          if (absolute) {
            x1 = inver.x(0, 0);
            y1 = inver.y(0, 0);
            x2 = inver.x(t[1], t[2]);
            y2 = inver.y(t[1], t[2]);
            m.translate(x2 - x1, y2 - y1);
          } else {
            m.translate(t[1], t[2]);
          }
        } else if (command == "r") {
          if (tlen == 2) {
            bb = bb || bbox;
            m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
          } else if (tlen == 4) {
            if (absolute) {
              x2 = inver.x(t[2], t[3]);
              y2 = inver.y(t[2], t[3]);
              m.rotate(t[1], x2, y2);
            } else {
              m.rotate(t[1], t[2], t[3]);
            }
          }
        } else if (command == "s") {
          if (tlen == 2 || tlen == 3) {
            bb = bb || bbox;
            m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
          } else if (tlen == 4) {
            if (absolute) {
              x2 = inver.x(t[2], t[3]);
              y2 = inver.y(t[2], t[3]);
              m.scale(t[1], t[1], x2, y2);
            } else {
              m.scale(t[1], t[1], t[2], t[3]);
            }
          } else if (tlen == 5) {
            if (absolute) {
              x2 = inver.x(t[3], t[4]);
              y2 = inver.y(t[3], t[4]);
              m.scale(t[1], t[2], x2, y2);
            } else {
              m.scale(t[1], t[2], t[3], t[4]);
            }
          }
        } else if (command == "m" && tlen == 7) {
          m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
        }
      }
    }

    return m;
  }

  Snap._.transform2matrix = transform2matrix;
  Snap._unit2px = unit2px;
  var contains = glob.doc.contains || glob.doc.compareDocumentPosition ? function (a, b) {
    var adown = a.nodeType == 9 ? a.documentElement : a,
        bup = b && b.parentNode;
    return a == bup || !!(bup && bup.nodeType == 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
  } : function (a, b) {
    if (b) {
      while (b) {
        b = b.parentNode;

        if (b == a) {
          return true;
        }
      }
    }

    return false;
  };

  function getSomeDefs(el) {
    var p = el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || el.node.parentNode && wrap(el.node.parentNode) || Snap.select("svg") || Snap(0, 0),
        pdefs = p.select("defs"),
        defs = pdefs == null ? false : pdefs.node;

    if (!defs) {
      defs = make("defs", p.node).node;
    }

    return defs;
  }

  function getSomeSVG(el) {
    return el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || Snap.select("svg");
  }

  Snap._.getSomeDefs = getSomeDefs;
  Snap._.getSomeSVG = getSomeSVG;

  function unit2px(el, name, value) {
    var svg = getSomeSVG(el).node,
        out = {},
        mgr = svg.querySelector(".svg---mgr");

    if (!mgr) {
      mgr = $("rect");
      $(mgr, {
        x: -9e9,
        y: -9e9,
        width: 10,
        height: 10,
        "class": "svg---mgr",
        fill: "none"
      });
      svg.appendChild(mgr);
    }

    function getW(val) {
      if (val == null) {
        return E;
      }

      if (val == +val) {
        return val;
      }

      $(mgr, {
        width: val
      });

      try {
        return mgr.getBBox().width;
      } catch (e) {
        return 0;
      }
    }

    function getH(val) {
      if (val == null) {
        return E;
      }

      if (val == +val) {
        return val;
      }

      $(mgr, {
        height: val
      });

      try {
        return mgr.getBBox().height;
      } catch (e) {
        return 0;
      }
    }

    function set(nam, f) {
      if (name == null) {
        out[nam] = f(el.attr(nam) || 0);
      } else if (nam == name) {
        out = f(value == null ? el.attr(nam) || 0 : value);
      }
    }

    switch (el.type) {
      case "rect":
        set("rx", getW);
        set("ry", getH);

      case "image":
        set("width", getW);
        set("height", getH);

      case "text":
        set("x", getW);
        set("y", getH);
        break;

      case "circle":
        set("cx", getW);
        set("cy", getH);
        set("r", getW);
        break;

      case "ellipse":
        set("cx", getW);
        set("cy", getH);
        set("rx", getW);
        set("ry", getH);
        break;

      case "line":
        set("x1", getW);
        set("x2", getW);
        set("y1", getH);
        set("y2", getH);
        break;

      case "marker":
        set("refX", getW);
        set("markerWidth", getW);
        set("refY", getH);
        set("markerHeight", getH);
        break;

      case "radialGradient":
        set("fx", getW);
        set("fy", getH);
        break;

      case "tspan":
        set("dx", getW);
        set("dy", getH);
        break;

      default:
        set(name, getW);
    }

    svg.removeChild(mgr);
    return out;
  }
  /*\
   * Snap.select
   [ method ]
   **
   * Wraps a DOM element specified by CSS selector as @Element
   - query (string) CSS selector of the element
   = (Element) the current element
  \*/


  Snap.select = function (query) {
    query = Str(query).replace(/([^\\]):/g, "$1\\:");
    return wrap(glob.doc.querySelector(query));
  };
  /*\
   * Snap.selectAll
   [ method ]
   **
   * Wraps DOM elements specified by CSS selector as set or array of @Element
   - query (string) CSS selector of the element
   = (Element) the current element
  \*/


  Snap.selectAll = function (query) {
    var nodelist = glob.doc.querySelectorAll(query),
        set = (Snap.set || Array)();

    for (var i = 0; i < nodelist.length; i++) {
      set.push(wrap(nodelist[i]));
    }

    return set;
  };

  function add2group(list) {
    if (!is(list, "array")) {
      list = Array.prototype.slice.call(arguments, 0);
    }

    var i = 0,
        j = 0,
        node = this.node;

    while (this[i]) {
      delete this[i++];
    }

    for (i = 0; i < list.length; i++) {
      if (list[i].type == "set") {
        list[i].forEach(function (el) {
          node.appendChild(el.node);
        });
      } else {
        node.appendChild(list[i].node);
      }
    }

    var children = node.childNodes;

    for (i = 0; i < children.length; i++) {
      this[j++] = wrap(children[i]);
    }

    return this;
  } // Hub garbage collector every 10s


  setInterval(function () {
    for (var key in hub) {
      if (hub[has](key)) {
        var el = hub[key],
            node = el.node;

        if (el.type != "svg" && !node.ownerSVGElement || el.type == "svg" && (!node.parentNode || "ownerSVGElement" in node.parentNode && !node.ownerSVGElement)) {
          delete hub[key];
        }
      }
    }
  }, 1e4);

  function Element(el) {
    if (el.snap in hub) {
      return hub[el.snap];
    }

    var svg;

    try {
      svg = el.ownerSVGElement;
    } catch (e) {}
    /*\
     * Element.node
     [ property (object) ]
     **
     * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
     > Usage
     | // draw a circle at coordinate 10,10 with radius of 10
     | var c = paper.circle(10, 10, 10);
     | c.node.onclick = function () {
     |     c.attr("fill", "red");
     | };
    \*/


    this.node = el;

    if (svg) {
      this.paper = new Paper(svg);
    }
    /*\
     * Element.type
     [ property (string) ]
     **
     * SVG tag name of the given element.
    \*/


    this.type = el.tagName || el.nodeName;
    var id = this.id = ID(this);
    this.anims = {};
    this._ = {
      transform: []
    };
    el.snap = id;
    hub[id] = this;

    if (this.type == "g") {
      this.add = add2group;
    }

    if (this.type in {
      g: 1,
      mask: 1,
      pattern: 1,
      symbol: 1
    }) {
      for (var method in Paper.prototype) {
        if (Paper.prototype[has](method)) {
          this[method] = Paper.prototype[method];
        }
      }
    }
  }
  /*\
  	* Element.attr
  	[ method ]
  	**
  	* Gets or sets given attributes of the element.
  	**
  	- params (object) contains key-value pairs of attributes you want to set
  	* or
  	- param (string) name of the attribute
  	= (Element) the current element
  	* or
  	= (string) value of attribute
  	> Usage
  	| el.attr({
  	|     fill: "#fc0",
  	|     stroke: "#000",
  	|     strokeWidth: 2, // CamelCase...
  	|     "fill-opacity": 0.5, // or dash-separated names
  	|     width: "*=2" // prefixed values
  	| });
  	| console.log(el.attr("fill")); // #fc0
  	* Prefixed values in format `"+=10"` supported. All four operations
  	* (`+`, `-`, `*` and `/`) could be used. Optionally you can use units for `+`
  	* and `-`: `"+=2em"`.
   \*/


  Element.prototype.attr = function (params, value) {
    var el = this,
        node = el.node;
    this.params = this.params || {};

    if (!params) {
      if (node.nodeType != 1) {
        return {
          text: node.nodeValue
        };
      }

      var attr = node.attributes,
          out = {};

      for (var i = 0, ii = attr.length; i < ii; i++) {
        out[attr[i].nodeName] = attr[i].nodeValue;
      }

      return out;
    }

    if (is(params, "string")) {
      if (arguments.length > 1) {
        var json = {};
        json[params] = value;
        params = json;
      } else {
        return eve_default()("snap.util.getattr." + params, el).firstDefined();
      }
    }

    for (var att in params) {
      eve_default()("snap.util.attr." + att, el, params[att]);
    }

    return el;
  };
  /*\
   * Snap.parse
   [ method ]
   **
   * Parses SVG fragment and converts it into a @Fragment
   **
   - svg (string) SVG string
   = (Fragment) the @Fragment
  \*/


  Snap.parse = function (svg) {
    var f = glob.doc.createDocumentFragment(),
        full = true,
        div = glob.doc.createElement("div");
    svg = Str(svg);

    if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
      svg = "<svg>" + svg + "</svg>";
      full = false;
    }

    div.innerHTML = svg;
    svg = div.getElementsByTagName("svg")[0];

    if (svg) {
      if (full) {
        f = svg;
      } else {
        while (svg.firstChild) {
          f.appendChild(svg.firstChild);
        }
      }
    }

    return new Fragment(f);
  };

  function Fragment(frag) {
    this.node = frag;
  }
  /*\
   * Snap.fragment
   [ method ]
   **
   * Creates a DOM fragment from a given list of elements or strings
   **
   - varargs (…) SVG string
   = (Fragment) the @Fragment
  \*/


  Snap.fragment = function () {
    var args = Array.prototype.slice.call(arguments, 0),
        f = glob.doc.createDocumentFragment();

    for (var i = 0, ii = args.length; i < ii; i++) {
      var item = args[i];

      if (item.node && item.node.nodeType) {
        f.appendChild(item.node);
      }

      if (item.nodeType) {
        f.appendChild(item);
      }

      if (typeof item == "string") {
        f.appendChild(Snap.parse(item).node);
      }
    }

    return new Fragment(f);
  };

  function make(name, parent) {
    var res = $(name);
    parent.appendChild(res);
    var el = wrap(res);
    return el;
  }

  function Paper(w, h) {
    var res,
        desc,
        defs,
        proto = Paper.prototype;

    if (w && w.tagName && w.tagName.toLowerCase() == "svg") {
      if (w.snap in hub) {
        return hub[w.snap];
      }

      var doc = w.ownerDocument;
      res = new Element(w);
      desc = w.getElementsByTagName("desc")[0];
      defs = w.getElementsByTagName("defs")[0];

      if (!desc) {
        desc = $("desc");
        desc.appendChild(doc.createTextNode("Created with Snap"));
        res.node.appendChild(desc);
      }

      if (!defs) {
        defs = $("defs");
        res.node.appendChild(defs);
      }

      res.defs = defs;

      for (var key in proto) {
        if (proto[has](key)) {
          res[key] = proto[key];
        }
      }

      res.paper = res.root = res;
    } else {
      res = make("svg", glob.doc.body);
      $(res.node, {
        height: h,
        version: 1.1,
        width: w,
        xmlns: xmlns
      });
    }

    return res;
  }

  function wrap(dom) {
    if (!dom) {
      return dom;
    }

    if (dom instanceof Element || dom instanceof Fragment) {
      return dom;
    }

    if (dom.tagName && dom.tagName.toLowerCase() == "svg") {
      return new Paper(dom);
    }

    if (dom.tagName && dom.tagName.toLowerCase() == "object" && dom.type == "image/svg+xml") {
      return new Paper(dom.contentDocument.getElementsByTagName("svg")[0]);
    }

    return new Element(dom);
  }

  Snap._.make = make;
  Snap._.wrap = wrap;
  /*\
   * Paper.el
   [ method ]
   **
   * Creates an element on paper with a given name and no attributes
   **
   - name (string) tag name
   - attr (object) attributes
   = (Element) the current element
   > Usage
   | var c = paper.circle(10, 10, 10); // is the same as...
   | var c = paper.el("circle").attr({
   |     cx: 10,
   |     cy: 10,
   |     r: 10
   | });
   | // and the same as
   | var c = paper.el("circle", {
   |     cx: 10,
   |     cy: 10,
   |     r: 10
   | });
  \*/

  Paper.prototype.el = function (name, attr) {
    var el = make(name, this.node);
    attr && el.attr(attr);
    return el;
  };
  /*\
   * Element.children
   [ method ]
   **
   * Returns array of all the children of the element.
   = (array) array of Elements
  \*/


  Element.prototype.children = function () {
    var out = [],
        ch = this.node.childNodes;

    for (var i = 0, ii = ch.length; i < ii; i++) {
      out[i] = Snap(ch[i]);
    }

    return out;
  };

  function jsonFiller(root, o) {
    for (var i = 0, ii = root.length; i < ii; i++) {
      var item = {
        type: root[i].type,
        attr: root[i].attr()
      },
          children = root[i].children();
      o.push(item);

      if (children.length) {
        jsonFiller(children, item.childNodes = []);
      }
    }
  }
  /*\
   * Element.toJSON
   [ method ]
   **
   * Returns object representation of the given element and all its children.
   = (object) in format
   o {
   o     type (string) this.type,
   o     attr (object) attributes map,
   o     childNodes (array) optional array of children in the same format
   o }
  \*/


  Element.prototype.toJSON = function () {
    var out = [];
    jsonFiller([this], out);
    return out[0];
  }; // default


  eve_default.a.on("snap.util.getattr", function () {
    var att = eve_default.a.nt();
    att = att.substring(att.lastIndexOf(".") + 1);
    var css = att.replace(/[A-Z]/g, function (letter) {
      return "-" + letter.toLowerCase();
    });

    if (cssAttr[has](css)) {
      // 简单点，不要重绘
      return this.node.style[css] || this.node.getAttribute(css); //this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(css);
    } else {
      return $(this.node, att);
    }
  });
  var cssAttr = {
    "alignment-baseline": 0,
    "baseline-shift": 0,
    "clip": 0,
    "clip-path": 0,
    "clip-rule": 0,
    "color": 0,
    "color-interpolation": 0,
    "color-interpolation-filters": 0,
    "color-profile": 0,
    "color-rendering": 0,
    "cursor": 0,
    "direction": 0,
    "display": 0,
    "dominant-baseline": 0,
    "enable-background": 0,
    "fill": 0,
    "fill-opacity": 0,
    "fill-rule": 0,
    "filter": 0,
    "flood-color": 0,
    "flood-opacity": 0,
    "font": 0,
    "font-family": 0,
    "font-size": 0,
    "font-size-adjust": 0,
    "font-stretch": 0,
    "font-style": 0,
    "font-variant": 0,
    "font-weight": 0,
    "glyph-orientation-horizontal": 0,
    "glyph-orientation-vertical": 0,
    "image-rendering": 0,
    "kerning": 0,
    "letter-spacing": 0,
    "lighting-color": 0,
    "marker": 0,
    "marker-end": 0,
    "marker-mid": 0,
    "marker-start": 0,
    "mask": 0,
    "opacity": 0,
    "overflow": 0,
    "pointer-events": 0,
    "shape-rendering": 0,
    "stop-color": 0,
    "stop-opacity": 0,
    "stroke": 0,
    "stroke-dasharray": 0,
    "stroke-dashoffset": 0,
    "stroke-linecap": 0,
    "stroke-linejoin": 0,
    "stroke-miterlimit": 0,
    "stroke-opacity": 0,
    "stroke-width": 0,
    "text-anchor": 0,
    "text-decoration": 0,
    "text-rendering": 0,
    "unicode-bidi": 0,
    "visibility": 0,
    "word-spacing": 0,
    "writing-mode": 0
  };
  eve_default.a.on("snap.util.attr", function (value) {
    var att = eve_default.a.nt(),
        attr = {};
    att = att.substring(att.lastIndexOf(".") + 1);
    attr[att] = value;
    var style = att.replace(/-(\w)/gi, function (all, letter) {
      return letter.toUpperCase();
    }),
        css = att.replace(/[A-Z]/g, function (letter) {
      return "-" + letter.toLowerCase();
    });

    if (cssAttr[has](css)) {
      // if (this.node.style[style] !== value) {// 同样的值避免重绘
      this.node.style[style] = value == null ? E : value; // }
    } else {
      $(this.node, attr);
    }
  });

  (function (proto) {})(Paper.prototype); // simple ajax

  /*\
   * Snap.ajax
   [ method ]
   **
   * Simple implementation of Ajax
   **
   - url (string) URL
   - postData (object|string) data for post request
   - callback (function) callback
   - scope (object) #optional scope of callback
   * or
   - url (string) URL
   - callback (function) callback
   - scope (object) #optional scope of callback
   = (XMLHttpRequest) the XMLHttpRequest object, just in case
  \*/


  Snap.ajax = function (url, postData, callback, scope) {
    var req = new XMLHttpRequest(),
        id = ID();

    if (req) {
      if (is(postData, "function")) {
        scope = callback;
        callback = postData;
        postData = null;
      } else if (is(postData, "object")) {
        var pd = [];

        for (var key in postData) {
          if (postData.hasOwnProperty(key)) {
            pd.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
          }
        }

        postData = pd.join("&");
      }

      req.open(postData ? "POST" : "GET", url, true);

      if (postData) {
        req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      }

      if (callback) {
        eve_default.a.once("snap.ajax." + id + ".0", callback);
        eve_default.a.once("snap.ajax." + id + ".200", callback);
        eve_default.a.once("snap.ajax." + id + ".304", callback);
      }

      req.onreadystatechange = function () {
        if (req.readyState != 4) return;
        eve_default()("snap.ajax." + id + "." + req.status, scope, req);
      };

      if (req.readyState == 4) {
        return req;
      }

      req.send(postData);
      return req;
    }
  };
  /*\
   * Snap.load
   [ method ]
   **
   * Loads external SVG file as a @Fragment (see @Snap.ajax for more advanced AJAX)
   **
   - url (string) URL
   - callback (function) callback
   - scope (object) #optional scope of callback
  \*/


  Snap.load = function (url, callback, scope) {
    Snap.ajax(url, function (req) {
      var f = Snap.parse(req.responseText);
      scope ? callback.call(scope, f) : callback(f);
    });
  };

  var getOffset = function getOffset(elem) {
    var box = elem.getBoundingClientRect(),
        doc = elem.ownerDocument,
        body = doc.body,
        docElem = doc.documentElement,
        clientTop = docElem.clientTop || body.clientTop || 0,
        clientLeft = docElem.clientLeft || body.clientLeft || 0,
        top = box.top + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop) - clientTop,
        left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
    return {
      y: top,
      x: left
    };
  };
  /*\
   * Snap.getElementByPoint
   [ method ]
   **
   * Returns you topmost element under given point.
   **
   = (object) Snap element object
   - x (number) x coordinate from the top left corner of the window
   - y (number) y coordinate from the top left corner of the window
   > Usage
   | Snap.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
  \*/


  Snap.getElementByPoint = function (x, y) {
    var paper = this,
        svg = paper.canvas,
        target = glob.doc.elementFromPoint(x, y);

    if (glob.win.opera && target.tagName == "svg") {
      var so = getOffset(target),
          sr = target.createSVGRect();
      sr.x = x - so.x;
      sr.y = y - so.y;
      sr.width = sr.height = 1;
      var hits = target.getIntersectionList(sr, null);

      if (hits.length) {
        target = hits[hits.length - 1];
      }
    }

    if (!target) {
      return null;
    }

    return wrap(target);
  };
  /*\
   * Snap.plugin
   [ method ]
   **
   * Let you write plugins. You pass in a function with five arguments, like this:
   | Snap.plugin(function (Snap, Element, Paper, global, Fragment) {
   |     Snap.newmethod = function () {};
   |     Element.prototype.newmethod = function () {};
   |     Paper.prototype.newmethod = function () {};
   | });
   * Inside the function you have access to all main objects (and their
   * prototypes). This allow you to extend anything you want.
   **
   - f (function) your plugin body
  \*/


  Snap.plugin = function (f) {
    f(Snap, Element, Paper, glob, Fragment);
  };

  glob.win.Snap = Snap;
  return Snap;
}(window || undefined); // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


snap_svg_Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
  var elproto = Element.prototype,
      is = Snap.is,
      Str = String,
      unit2px = Snap._unit2px,
      $ = Snap._.$,
      make = Snap._.make,
      getSomeDefs = Snap._.getSomeDefs,
      has = "hasOwnProperty",
      wrap = Snap._.wrap;
  /*\
   * Element.getBBox
   [ method ]
   **
   * Returns the bounding box descriptor for the given element
   **
   = (object) bounding box descriptor:
   o {
   o     cx: (number) x of the center,
   o     cy: (number) x of the center,
   o     h: (number) height,
   o     height: (number) height,
   o     path: (string) path command for the box,
   o     r0: (number) radius of a circle that fully encloses the box,
   o     r1: (number) radius of the smallest circle that can be enclosed,
   o     r2: (number) radius of the largest circle that can be enclosed,
   o     vb: (string) box as a viewbox command,
   o     w: (number) width,
   o     width: (number) width,
   o     x2: (number) x of the right side,
   o     x: (number) x of the left side,
   o     y2: (number) y of the bottom edge,
   o     y: (number) y of the top edge
   o }
  \*/

  elproto.getBBox = function (isWithoutTransform) {
    if (this.type == "tspan") {
      return Snap._.box(this.node.getClientRects().item(0));
    }

    if (!Snap.Matrix || !Snap.path) {
      return this.node.getBBox();
    }

    var el = this,
        m = new Snap.Matrix();

    if (el.removed) {
      return Snap._.box();
    }

    while (el.type == "use") {
      if (!isWithoutTransform) {
        m = m.add(el.transform().localMatrix.translate(el.attr("x") || 0, el.attr("y") || 0));
      }

      if (el.original) {
        el = el.original;
      } else {
        var href = el.attr("xlink:href");
        el = el.original = el.node.ownerDocument.getElementById(href.substring(href.indexOf("#") + 1));
      }
    }

    var _ = el._,
        pathfinder = Snap.path.get[el.type] || Snap.path.get.deflt;

    try {
      if (isWithoutTransform) {
        _.bboxwt = pathfinder ? Snap.path.getBBox(el.realPath = pathfinder(el)) : Snap._.box(el.node.getBBox());
        return Snap._.box(_.bboxwt);
      } else {
        el.realPath = pathfinder(el);
        el.matrix = el.transform().localMatrix;
        _.bbox = Snap.path.getBBox(Snap.path.map(el.realPath, m.add(el.matrix)));
        return Snap._.box(_.bbox);
      }
    } catch (e) {
      // Firefox doesn’t give you bbox of hidden element
      return Snap._.box();
    }
  };

  var propString = function propString() {
    return this.string;
  };

  function extractTransform(el, tstr) {
    if (tstr == null) {
      var doReturn = true;

      if (el.type == "linearGradient" || el.type == "radialGradient") {
        tstr = el.node.getAttribute("gradientTransform");
      } else if (el.type == "pattern") {
        tstr = el.node.getAttribute("patternTransform");
      } else {
        tstr = el.node.getAttribute("transform");
      }

      if (!tstr) {
        return new Snap.Matrix();
      }

      tstr = Snap._.svgTransform2string(tstr);
    } else {
      if (!Snap._.rgTransform.test(tstr)) {
        tstr = Snap._.svgTransform2string(tstr);
      } else {
        tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || "");
      }

      if (is(tstr, "array")) {
        tstr = Snap.path ? Snap.path.toString.call(tstr) : Str(tstr);
      }

      el._.transform = tstr;
    }

    var m = Snap._.transform2matrix(tstr, el.getBBox(1));

    if (doReturn) {
      return m;
    } else {
      el.matrix = m;
    }
  }
  /*\
   * Element.transform
   [ method ]
   **
   * Gets or sets transformation of the element
   **
   - tstr (string) transform string in Snap or SVG format
   = (Element) the current element
   * or
   = (object) transformation descriptor:
   o {
   o     string (string) transform string,
   o     globalMatrix (Matrix) matrix of all transformations applied to element or its parents,
   o     localMatrix (Matrix) matrix of transformations applied only to the element,
   o     diffMatrix (Matrix) matrix of difference between global and local transformations,
   o     global (string) global transformation as string,
   o     local (string) local transformation as string,
   o     toString (function) returns `string` property
   o }
  \*/


  elproto.transform = function (tstr) {
    var _ = this._;

    if (tstr == null) {
      var papa = this,
          global = new Snap.Matrix(this.node.getCTM()),
          local = extractTransform(this),
          ms = [local],
          m = new Snap.Matrix(),
          i,
          localString = local.toTransformString(),
          string = Str(local) == Str(this.matrix) ? Str(_.transform) : localString;

      while (papa.type != "svg" && (papa = papa.parent())) {
        ms.push(extractTransform(papa));
      }

      i = ms.length;

      while (i--) {
        m.add(ms[i]);
      }

      return {
        string: string,
        globalMatrix: global,
        totalMatrix: m,
        localMatrix: local,
        diffMatrix: global.clone().add(local.invert()),
        global: global.toTransformString(),
        total: m.toTransformString(),
        local: localString,
        toString: propString
      };
    }

    if (tstr instanceof Snap.Matrix) {
      this.matrix = tstr;
      this._.transform = tstr.toTransformString();
    } else {
      extractTransform(this, tstr);
    }

    if (this.node) {
      if (this.type == "linearGradient" || this.type == "radialGradient") {
        $(this.node, {
          gradientTransform: this.matrix
        });
      } else if (this.type == "pattern") {
        $(this.node, {
          patternTransform: this.matrix
        });
      } else {
        $(this.node, {
          transform: this.matrix
        });
      }
    }

    return this;
  };
  /*\
   * Element.parent
   [ method ]
   **
   * Returns the element's parent
   **
   = (Element) the parent element
  \*/


  elproto.parent = function () {
    return wrap(this.node.parentNode);
  };
  /*\
   * Element.append
   [ method ]
   **
   * Appends the given element to current one
   **
   - el (Element|Set) element to append
   = (Element) the parent element
  \*/

  /*\
   * Element.add
   [ method ]
   **
   * See @Element.append
  \*/


  elproto.append = elproto.add = function (el) {
    if (el) {
      if (el.type == "set") {
        var it = this;
        el.forEach(function (el) {
          it.add(el);
        });
        return this;
      }

      el = wrap(el);
      this.node.appendChild(el.node);
      el.paper = this.paper;
    }

    return this;
  };
  /*\
   * Element.appendTo
   [ method ]
   **
   * Appends the current element to the given one
   **
   - el (Element) parent element to append to
   = (Element) the child element
  \*/


  elproto.appendTo = function (el) {
    if (el) {
      el = wrap(el);
      el.append(this);
    }

    return this;
  };
  /*\
   * Element.prepend
   [ method ]
   **
   * Prepends the given element to the current one
   **
   - el (Element) element to prepend
   = (Element) the parent element
  \*/


  elproto.prepend = function (el) {
    if (el) {
      if (el.type == "set") {
        var it = this,
            first;
        el.forEach(function (el) {
          if (first) {
            first.after(el);
          } else {
            it.prepend(el);
          }

          first = el;
        });
        return this;
      }

      el = wrap(el);
      var parent = el.parent();
      this.node.insertBefore(el.node, this.node.firstChild);
      this.add && this.add();
      el.paper = this.paper;
      this.parent() && this.parent().add();
      parent && parent.add();
    }

    return this;
  };
  /*\
   * Element.prependTo
   [ method ]
   **
   * Prepends the current element to the given one
   **
   - el (Element) parent element to prepend to
   = (Element) the child element
  \*/


  elproto.prependTo = function (el) {
    el = wrap(el);
    el.prepend(this);
    return this;
  };
  /*\
   * Element.before
   [ method ]
   **
   * Inserts given element before the current one
   **
   - el (Element) element to insert
   = (Element) the parent element
  \*/


  elproto.before = function (el) {
    if (el.type == "set") {
      var it = this;
      el.forEach(function (el) {
        var parent = el.parent();
        it.node.parentNode.insertBefore(el.node, it.node);
        parent && parent.add();
      });
      this.parent().add();
      return this;
    }

    el = wrap(el);
    var parent = el.parent();
    this.node.parentNode.insertBefore(el.node, this.node);
    this.parent() && this.parent().add();
    parent && parent.add();
    el.paper = this.paper;
    return this;
  };
  /*\
   * Element.after
   [ method ]
   **
   * Inserts given element after the current one
   **
   - el (Element) element to insert
   = (Element) the parent element
  \*/


  elproto.after = function (el) {
    el = wrap(el);
    var parent = el.parent();

    if (this.node.nextSibling) {
      this.node.parentNode.insertBefore(el.node, this.node.nextSibling);
    } else {
      this.node.parentNode.appendChild(el.node);
    }

    this.parent() && this.parent().add();
    parent && parent.add();
    el.paper = this.paper;
    return this;
  };
  /*\
   * Element.insertBefore
   [ method ]
   **
   * Inserts the element after the given one
   **
   - el (Element) element next to whom insert to
   = (Element) the parent element
  \*/


  elproto.insertBefore = function (el) {
    el = wrap(el);
    var parent = this.parent();
    el.node.parentNode.insertBefore(this.node, el.node);
    this.paper = el.paper;
    parent && parent.add();
    el.parent() && el.parent().add();
    return this;
  };
  /*\
   * Element.insertAfter
   [ method ]
   **
   * Inserts the element after the given one
   **
   - el (Element) element next to whom insert to
   = (Element) the parent element
  \*/


  elproto.insertAfter = function (el) {
    el = wrap(el);
    var parent = this.parent();
    el.node.parentNode.insertBefore(this.node, el.node.nextSibling);
    this.paper = el.paper;
    parent && parent.add();
    el.parent() && el.parent().add();
    return this;
  };
  /*\
   * Element.remove
   [ method ]
   **
   * Removes element from the DOM
   = (Element) the detached element
  \*/


  elproto.remove = function () {
    var parent = this.parent();
    this.node.parentNode && this.node.parentNode.removeChild(this.node);
    delete this.paper;
    this.removed = true;
    parent && parent.add();
    return this;
  };
  /*\
   * Element.select
   [ method ]
   **
   * Gathers the nested @Element matching the given set of CSS selectors
   **
   - query (string) CSS selector
   = (Element) result of query selection
  \*/


  elproto.select = function (query) {
    return wrap(this.node.querySelector(query));
  };
  /*\
   * Element.selectAll
   [ method ]
   **
   * Gathers nested @Element objects matching the given set of CSS selectors
   **
   - query (string) CSS selector
   = (Set|array) result of query selection
  \*/


  elproto.selectAll = function (query) {
    var nodelist = this.node.querySelectorAll(query),
        set = (Snap.set || Array)();

    for (var i = 0; i < nodelist.length; i++) {
      set.push(wrap(nodelist[i]));
    }

    return set;
  };
  /*\
   * Element.asPX
   [ method ]
   **
   * Returns given attribute of the element as a `px` value (not %, em, etc.)
   **
   - attr (string) attribute name
   - value (string) #optional attribute value
   = (Element) result of query selection
  \*/


  elproto.asPX = function (attr, value) {
    if (value == null) {
      value = this.attr(attr);
    } // 老子不兼容px以外的单位


    return parseInt(value.replace("px", "")); // return +unit2px(this, attr, value);
  }; // SIERRA Element.use(): I suggest adding a note about how to access the original element the returned <use> instantiates. It's a part of SVG with which ordinary web developers may be least familiar.

  /*\
   * Element.use
   [ method ]
   **
   * Creates a `<use>` element linked to the current element
   **
   = (Element) the `<use>` element
  \*/


  elproto.use = function () {
    var use,
        id = this.node.id;

    if (!id) {
      id = this.id;
      $(this.node, {
        id: id
      });
    }

    if (this.type == "linearGradient" || this.type == "radialGradient" || this.type == "pattern") {
      use = make(this.type, this.node.parentNode);
    } else {
      use = make("use", this.node.parentNode);
    }

    $(use.node, {
      "xlink:href": "#" + id
    });
    use.original = this;
    return use;
  };

  function fixids(el) {
    var els = el.selectAll("*"),
        it,
        url = /^\s*url\(("|'|)(.*)\1\)\s*$/,
        ids = [],
        uses = {};

    function urltest(it, name) {
      var val = $(it.node, name);
      val = val && val.match(url);
      val = val && val[2];

      if (val && val.charAt() == "#") {
        val = val.substring(1);
      } else {
        return;
      }

      if (val) {
        uses[val] = (uses[val] || []).concat(function (id) {
          var attr = {};
          attr[name] = Snap.url(id);
          $(it.node, attr);
        });
      }
    }

    function linktest(it) {
      var val = $(it.node, "xlink:href");

      if (val && val.charAt() == "#") {
        val = val.substring(1);
      } else {
        return;
      }

      if (val) {
        uses[val] = (uses[val] || []).concat(function (id) {
          it.attr("xlink:href", "#" + id);
        });
      }
    }

    for (var i = 0, ii = els.length; i < ii; i++) {
      it = els[i];
      urltest(it, "fill");
      urltest(it, "stroke");
      urltest(it, "filter");
      urltest(it, "mask");
      urltest(it, "clip-path");
      linktest(it);
      var oldid = $(it.node, "id");

      if (oldid) {
        $(it.node, {
          id: it.id
        });
        ids.push({
          old: oldid,
          id: it.id
        });
      }
    }

    for (i = 0, ii = ids.length; i < ii; i++) {
      var fs = uses[ids[i].old];

      if (fs) {
        for (var j = 0, jj = fs.length; j < jj; j++) {
          fs[j](ids[i].id);
        }
      }
    }
  }
  /*\
   * Element.clone
   [ method ]
   **
   * Creates a clone of the element and inserts it after the element
   **
   = (Element) the clone
  \*/


  elproto.clone = function () {
    var clone = wrap(this.node.cloneNode(true));

    if ($(clone.node, "id")) {
      $(clone.node, {
        id: clone.id
      });
    }

    fixids(clone);
    clone.insertAfter(this);
    return clone;
  };
  /*\
   * Element.toDefs
   [ method ]
   **
   * Moves element to the shared `<defs>` area
   **
   = (Element) the element
  \*/


  elproto.toDefs = function () {
    var defs = getSomeDefs(this);
    defs.appendChild(this.node);
    return this;
  };
  /*\
   * Element.toPattern
   [ method ]
   **
   * Creates a `<pattern>` element from the current element
   **
   * To create a pattern you have to specify the pattern rect:
   - x (string|number)
   - y (string|number)
   - width (string|number)
   - height (string|number)
   = (Element) the `<pattern>` element
   * You can use pattern later on as an argument for `fill` attribute:
   | var p = paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
   |         fill: "none",
   |         stroke: "#bada55",
   |         strokeWidth: 5
   |     }).pattern(0, 0, 10, 10),
   |     c = paper.circle(200, 200, 100);
   | c.attr({
   |     fill: p
   | });
  \*/


  elproto.pattern = elproto.toPattern = function (x, y, width, height) {
    var p = make("pattern", getSomeDefs(this));

    if (x == null) {
      x = this.getBBox();
    }

    if (is(x, "object") && "x" in x) {
      y = x.y;
      width = x.width;
      height = x.height;
      x = x.x;
    }

    $(p.node, {
      x: x,
      y: y,
      width: width,
      height: height,
      patternUnits: "userSpaceOnUse",
      id: p.id,
      viewBox: [x, y, width, height].join(" ")
    });
    p.node.appendChild(this.node);
    return p;
  }; // SIERRA Element.marker(): clarify what a reference point is. E.g., helps you offset the object from its edge such as when centering it over a path.
  // SIERRA Element.marker(): I suggest the method should accept default reference point values.  Perhaps centered with (refX = width/2) and (refY = height/2)? Also, couldn't it assume the element's current _width_ and _height_? And please specify what _x_ and _y_ mean: offsets? If so, from where?  Couldn't they also be assigned default values?

  /*\
   * Element.marker
   [ method ]
   **
   * Creates a `<marker>` element from the current element
   **
   * To create a marker you have to specify the bounding rect and reference point:
   - x (number)
   - y (number)
   - width (number)
   - height (number)
   - refX (number)
   - refY (number)
   = (Element) the `<marker>` element
   * You can specify the marker later as an argument for `marker-start`, `marker-end`, `marker-mid`, and `marker` attributes. The `marker` attribute places the marker at every point along the path, and `marker-mid` places them at every point except the start and end.
  \*/
  // TODO add usage for markers


  elproto.marker = function (x, y, width, height, refX, refY) {
    var p = make("marker", getSomeDefs(this));

    if (x == null) {
      x = this.getBBox();
    }

    if (is(x, "object") && "x" in x) {
      y = x.y;
      width = x.width;
      height = x.height;
      refX = x.refX || x.cx;
      refY = x.refY || x.cy;
      x = x.x;
    }

    $(p.node, {
      viewBox: [x, y, width, height].join(" "),
      markerWidth: width,
      markerHeight: height,
      orient: "auto",
      refX: refX || 0,
      refY: refY || 0,
      id: p.id
    });
    p.node.appendChild(this.node);
    return p;
  };

  var eldata = {};
  /*\
   * Element.data
   [ method ]
   **
   * Adds or retrieves given value associated with given key. (Don’t confuse
   * with `data-` attributes)
   *
   * See also @Element.removeData
   - key (string) key to store data
   - value (any) #optional value to store
   = (object) @Element
   * or, if value is not specified:
   = (any) value
   > Usage
   | for (var i = 0, i < 5, i++) {
   |     paper.circle(10 + 15 * i, 10, 10)
   |          .attr({fill: "#000"})
   |          .data("i", i)
   |          .click(function () {
   |             alert(this.data("i"));
   |          });
   | }
  \*/

  elproto.data = function (key, value) {
    var data = eldata[this.id] = eldata[this.id] || {};

    if (arguments.length == 0) {
      eve_default()("snap.data.get." + this.id, this, data, null);
      return data;
    }

    if (arguments.length == 1) {
      if (Snap.is(key, "object")) {
        for (var i in key) {
          if (key[has](i)) {
            this.data(i, key[i]);
          }
        }

        return this;
      }

      eve_default()("snap.data.get." + this.id, this, data[key], key);
      return data[key];
    }

    data[key] = value;
    eve_default()("snap.data.set." + this.id, this, value, key);
    return this;
  };
  /*\
   * Element.removeData
   [ method ]
   **
   * Removes value associated with an element by given key.
   * If key is not provided, removes all the data of the element.
   - key (string) #optional key
   = (object) @Element
  \*/


  elproto.removeData = function (key) {
    if (key == null) {
      eldata[this.id] = {};
    } else {
      eldata[this.id] && delete eldata[this.id][key];
    }

    return this;
  };
  /*\
   * Element.outerSVG
   [ method ]
   **
   * Returns SVG code for the element, equivalent to HTML's `outerHTML`.
   *
   * See also @Element.innerSVG
   = (string) SVG code for the element
  \*/

  /*\
   * Element.toString
   [ method ]
   **
   * See @Element.outerSVG
  \*/


  elproto.outerSVG = elproto.toString = toString(1);
  /*\
   * Element.innerSVG
   [ method ]
   **
   * Returns SVG code for the element's contents, equivalent to HTML's `innerHTML`
   = (string) SVG code for the element
  \*/

  elproto.innerSVG = toString();

  function toString(type) {
    return function () {
      var res = type ? "<" + this.type : "",
          attr = this.node.attributes,
          chld = this.node.childNodes;

      if (type) {
        for (var i = 0, ii = attr.length; i < ii; i++) {
          res += " " + attr[i].name + '="' + attr[i].value.replace(/"/g, '\\"') + '"';
        }
      }

      if (chld.length) {
        type && (res += ">");

        for (i = 0, ii = chld.length; i < ii; i++) {
          if (chld[i].nodeType == 3) {
            res += chld[i].nodeValue;
          } else if (chld[i].nodeType == 1) {
            res += wrap(chld[i]).toString();
          }
        }

        type && (res += "</" + this.type + ">");
      } else {
        type && (res += "/>");
      }

      return res;
    };
  }

  elproto.toDataURL = function () {
    if (window && window.btoa) {
      var bb = this.getBBox(),
          svg = Snap.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
        x: +bb.x.toFixed(3),
        y: +bb.y.toFixed(3),
        width: +bb.width.toFixed(3),
        height: +bb.height.toFixed(3),
        contents: this.outerSVG()
      });
      return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
    }
  };
  /*\
   * Fragment.select
   [ method ]
   **
   * See @Element.select
  \*/


  Fragment.prototype.select = elproto.select;
  /*\
   * Fragment.selectAll
   [ method ]
   **
   * See @Element.selectAll
  \*/

  Fragment.prototype.selectAll = elproto.selectAll;
}); // Copyright (c) 2016 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

snap_svg_Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
  var elproto = Element.prototype,
      is = Snap.is,
      Str = String,
      has = "hasOwnProperty";

  function slice(from, to, f) {
    return function (arr) {
      var res = arr.slice(from, to);

      if (res.length == 1) {
        res = res[0];
      }

      return f ? f(res) : res;
    };
  }

  var Animation = function Animation(attr, ms, easing, callback) {
    if (typeof easing == "function" && !easing.length) {
      callback = easing;
      easing = Snap_mina.linear;
    }

    this.attr = attr;
    this.dur = ms;
    easing && (this.easing = easing);
    callback && (this.callback = callback);
  };

  Snap._.Animation = Animation;
  /*\
   * Snap.animation
   [ method ]
   **
   * Creates an animation object
   **
   - attr (object) attributes of final destination
   - duration (number) duration of the animation, in milliseconds
   - easing (function) #optional one of easing functions of @mina or custom one
   - callback (function) #optional callback function that fires when animation ends
   = (object) animation object
  \*/

  Snap.animation = function (attr, ms, easing, callback) {
    return new Animation(attr, ms, easing, callback);
  };
  /*\
   * Element.inAnim
   [ method ]
   **
   * Returns a set of animations that may be able to manipulate the current element
   **
   = (object) in format:
   o {
   o     anim (object) animation object,
   o     mina (object) @mina object,
   o     curStatus (number) 0..1 — status of the animation: 0 — just started, 1 — just finished,
   o     status (function) gets or sets the status of the animation,
   o     stop (function) stops the animation
   o }
  \*/


  elproto.inAnim = function () {
    var el = this,
        res = [];

    for (var id in el.anims) {
      if (el.anims[has](id)) {
        (function (a) {
          res.push({
            anim: new Animation(a._attrs, a.dur, a.easing, a._callback),
            mina: a,
            curStatus: a.status(),
            status: function status(val) {
              return a.status(val);
            },
            stop: function stop() {
              a.stop();
            }
          });
        })(el.anims[id]);
      }
    }

    return res;
  };
  /*\
   * Snap.animate
   [ method ]
   **
   * Runs generic animation of one number into another with a caring function
   **
   - from (number|array) number or array of numbers
   - to (number|array) number or array of numbers
   - setter (function) caring function that accepts one number argument
   - duration (number) duration, in milliseconds
   - easing (function) #optional easing function from @mina or custom
   - callback (function) #optional callback function to execute when animation ends
   = (object) animation object in @mina format
   o {
   o     id (string) animation id, consider it read-only,
   o     duration (function) gets or sets the duration of the animation,
   o     easing (function) easing,
   o     speed (function) gets or sets the speed of the animation,
   o     status (function) gets or sets the status of the animation,
   o     stop (function) stops the animation
   o }
   | var rect = Snap().rect(0, 0, 10, 10);
   | Snap.animate(0, 10, function (val) {
   |     rect.attr({
   |         x: val
   |     });
   | }, 1000);
   | // in given context is equivalent to
   | rect.animate({x: 10}, 1000);
  \*/


  Snap.animate = function (from, to, setter, ms, easing, callback) {
    if (typeof easing == "function" && !easing.length) {
      callback = easing;
      easing = Snap_mina.linear;
    }

    var now = Snap_mina.time(),
        anim = Snap_mina(from, to, now, now + ms, Snap_mina.time, setter, easing);
    callback && eve_default.a.once("mina.finish." + anim.id, callback);
    return anim;
  };
  /*\
   * Element.stop
   [ method ]
   **
   * Stops all the animations for the current element
   **
   = (Element) the current element
  \*/


  elproto.stop = function () {
    var anims = this.inAnim();

    for (var i = 0, ii = anims.length; i < ii; i++) {
      anims[i].stop();
    }

    return this;
  };
  /*\
   * Element.animate
   [ method ]
   **
   * Animates the given attributes of the element
   **
   - attrs (object) key-value pairs of destination attributes
   - duration (number) duration of the animation in milliseconds
   - easing (function) #optional easing function from @mina or custom
   - callback (function) #optional callback function that executes when the animation ends
   = (Element) the current element
  \*/


  elproto.animate = function (attrs, ms, easing, callback) {
    if (typeof easing == "function" && !easing.length) {
      callback = easing;
      easing = Snap_mina.linear;
    }

    if (attrs instanceof Animation) {
      callback = attrs.callback;
      easing = attrs.easing;
      ms = attrs.dur;
      attrs = attrs.attr;
    }

    var fkeys = [],
        tkeys = [],
        keys = {},
        from,
        to,
        f,
        eq,
        el = this;

    for (var key in attrs) {
      if (attrs[has](key)) {
        if (el.equal) {
          eq = el.equal(key, Str(attrs[key]));
          from = eq.from;
          to = eq.to;
          f = eq.f;
        } else {
          from = +el.attr(key);
          to = +attrs[key];
        }

        var len = is(from, "array") ? from.length : 1;
        keys[key] = slice(fkeys.length, fkeys.length + len, f);
        fkeys = fkeys.concat(from);
        tkeys = tkeys.concat(to);
      }
    }

    var now = Snap_mina.time(),
        anim = Snap_mina(fkeys, tkeys, now, now + ms, Snap_mina.time, function (val) {
      var attr = {};

      for (var key in keys) {
        if (keys[has](key)) {
          attr[key] = keys[key](val);
        }
      }

      el.attr(attr);
    }, easing);
    el.anims[anim.id] = anim;
    anim._attrs = attrs;
    anim._callback = callback;
    eve_default()("snap.animcreated." + el.id, anim);
    eve_default.a.once("mina.finish." + anim.id, function () {
      eve_default.a.off("mina.*." + anim.id);
      delete el.anims[anim.id];
      callback && callback.call(el);
    });
    eve_default.a.once("mina.stop." + anim.id, function () {
      eve_default.a.off("mina.*." + anim.id);
      delete el.anims[anim.id];
    });
    return el;
  };
}); // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

snap_svg_Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
  var objectToString = Object.prototype.toString,
      Str = String,
      math = Math,
      E = "";

  function Matrix(a, b, c, d, e, f) {
    if (b == null && objectToString.call(a) == "[object SVGMatrix]") {
      this.a = a.a;
      this.b = a.b;
      this.c = a.c;
      this.d = a.d;
      this.e = a.e;
      this.f = a.f;
      return;
    }

    if (a != null) {
      this.a = +a;
      this.b = +b;
      this.c = +c;
      this.d = +d;
      this.e = +e;
      this.f = +f;
    } else {
      this.a = 1;
      this.b = 0;
      this.c = 0;
      this.d = 1;
      this.e = 0;
      this.f = 0;
    }
  }

  (function (matrixproto) {
    /*\
     * Matrix.add
     [ method ]
     **
     * Adds the given matrix to existing one
     - a (number)
     - b (number)
     - c (number)
     - d (number)
     - e (number)
     - f (number)
     * or
     - matrix (object) @Matrix
    \*/
    matrixproto.add = function (a, b, c, d, e, f) {
      if (a && a instanceof Matrix) {
        return this.add(a.a, a.b, a.c, a.d, a.e, a.f);
      }

      var aNew = a * this.a + b * this.c,
          bNew = a * this.b + b * this.d;
      this.e += e * this.a + f * this.c;
      this.f += e * this.b + f * this.d;
      this.c = c * this.a + d * this.c;
      this.d = c * this.b + d * this.d;
      this.a = aNew;
      this.b = bNew;
      return this;
    };
    /*\
     * Matrix.multLeft
     [ method ]
     **
     * Multiplies a passed affine transform to the left: M * this.
     - a (number)
     - b (number)
     - c (number)
     - d (number)
     - e (number)
     - f (number)
     * or
     - matrix (object) @Matrix
    \*/


    Matrix.prototype.multLeft = function (a, b, c, d, e, f) {
      if (a && a instanceof Matrix) {
        return this.multLeft(a.a, a.b, a.c, a.d, a.e, a.f);
      }

      var aNew = a * this.a + c * this.b,
          cNew = a * this.c + c * this.d,
          eNew = a * this.e + c * this.f + e;
      this.b = b * this.a + d * this.b;
      this.d = b * this.c + d * this.d;
      this.f = b * this.e + d * this.f + f;
      this.a = aNew;
      this.c = cNew;
      this.e = eNew;
      return this;
    };
    /*\
     * Matrix.invert
     [ method ]
     **
     * Returns an inverted version of the matrix
     = (object) @Matrix
    \*/


    matrixproto.invert = function () {
      var me = this,
          x = me.a * me.d - me.b * me.c;
      return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
    };
    /*\
     * Matrix.clone
     [ method ]
     **
     * Returns a copy of the matrix
     = (object) @Matrix
    \*/


    matrixproto.clone = function () {
      return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
    };
    /*\
     * Matrix.translate
     [ method ]
     **
     * Translate the matrix
     - x (number) horizontal offset distance
     - y (number) vertical offset distance
    \*/


    matrixproto.translate = function (x, y) {
      this.e += x * this.a + y * this.c;
      this.f += x * this.b + y * this.d;
      return this;
    };
    /*\
     * Matrix.scale
     [ method ]
     **
     * Scales the matrix
     - x (number) amount to be scaled, with `1` resulting in no change
     - y (number) #optional amount to scale along the vertical axis. (Otherwise `x` applies to both axes.)
     - cx (number) #optional horizontal origin point from which to scale
     - cy (number) #optional vertical origin point from which to scale
     * Default cx, cy is the middle point of the element.
    \*/


    matrixproto.scale = function (x, y, cx, cy) {
      y == null && (y = x);
      (cx || cy) && this.translate(cx, cy);
      this.a *= x;
      this.b *= x;
      this.c *= y;
      this.d *= y;
      (cx || cy) && this.translate(-cx, -cy);
      return this;
    };
    /*\
     * Matrix.rotate
     [ method ]
     **
     * Rotates the matrix
     - a (number) angle of rotation, in degrees
     - x (number) horizontal origin point from which to rotate
     - y (number) vertical origin point from which to rotate
    \*/


    matrixproto.rotate = function (a, x, y) {
      a = Snap.rad(a);
      x = x || 0;
      y = y || 0;
      var cos = +math.cos(a).toFixed(9),
          sin = +math.sin(a).toFixed(9);
      this.add(cos, sin, -sin, cos, x, y);
      return this.add(1, 0, 0, 1, -x, -y);
    };
    /*\
     * Matrix.skewX
     [ method ]
     **
     * Skews the matrix along the x-axis
     - x (number) Angle to skew along the x-axis (in degrees).
    \*/


    matrixproto.skewX = function (x) {
      return this.skew(x, 0);
    };
    /*\
     * Matrix.skewY
     [ method ]
     **
     * Skews the matrix along the y-axis
     - y (number) Angle to skew along the y-axis (in degrees).
    \*/


    matrixproto.skewY = function (y) {
      return this.skew(0, y);
    };
    /*\
     * Matrix.skew
     [ method ]
     **
     * Skews the matrix
     - y (number) Angle to skew along the y-axis (in degrees).
     - x (number) Angle to skew along the x-axis (in degrees).
    \*/


    matrixproto.skew = function (x, y) {
      x = x || 0;
      y = y || 0;
      x = Snap.rad(x);
      y = Snap.rad(y);
      var c = math.tan(x).toFixed(9);
      var b = math.tan(y).toFixed(9);
      return this.add(1, b, c, 1, 0, 0);
    };
    /*\
     * Matrix.x
     [ method ]
     **
     * Returns x coordinate for given point after transformation described by the matrix. See also @Matrix.y
     - x (number)
     - y (number)
     = (number) x
    \*/


    matrixproto.x = function (x, y) {
      return x * this.a + y * this.c + this.e;
    };
    /*\
     * Matrix.y
     [ method ]
     **
     * Returns y coordinate for given point after transformation described by the matrix. See also @Matrix.x
     - x (number)
     - y (number)
     = (number) y
    \*/


    matrixproto.y = function (x, y) {
      return x * this.b + y * this.d + this.f;
    };

    matrixproto.get = function (i) {
      return +this[Str.fromCharCode(97 + i)].toFixed(4);
    };

    matrixproto.toString = function () {
      return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
    };

    matrixproto.offset = function () {
      return [this.e.toFixed(4), this.f.toFixed(4)];
    };

    function norm(a) {
      return a[0] * a[0] + a[1] * a[1];
    }

    function normalize(a) {
      var mag = math.sqrt(norm(a));
      a[0] && (a[0] /= mag);
      a[1] && (a[1] /= mag);
    }
    /*\
     * Matrix.determinant
     [ method ]
     **
     * Finds determinant of the given matrix.
     = (number) determinant
    \*/


    matrixproto.determinant = function () {
      return this.a * this.d - this.b * this.c;
    };
    /*\
     * Matrix.split
     [ method ]
     **
     * Splits matrix into primitive transformations
     = (object) in format:
     o dx (number) translation by x
     o dy (number) translation by y
     o scalex (number) scale by x
     o scaley (number) scale by y
     o shear (number) shear
     o rotate (number) rotation in deg
     o isSimple (boolean) could it be represented via simple transformations
    \*/


    matrixproto.split = function () {
      var out = {}; // translation

      out.dx = this.e;
      out.dy = this.f; // scale and shear

      var row = [[this.a, this.b], [this.c, this.d]];
      out.scalex = math.sqrt(norm(row[0]));
      normalize(row[0]);
      out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
      row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];
      out.scaley = math.sqrt(norm(row[1]));
      normalize(row[1]);
      out.shear /= out.scaley;

      if (this.determinant() < 0) {
        out.scalex = -out.scalex;
      } // rotation


      var sin = row[0][1],
          cos = row[1][1];

      if (cos < 0) {
        out.rotate = Snap.deg(math.acos(cos));

        if (sin < 0) {
          out.rotate = 360 - out.rotate;
        }
      } else {
        out.rotate = Snap.deg(math.asin(sin));
      }

      out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
      out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
      out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
      return out;
    };
    /*\
     * Matrix.toTransformString
     [ method ]
     **
     * Returns transform string that represents given matrix
     = (string) transform string
    \*/


    matrixproto.toTransformString = function (shorter) {
      var s = shorter || this.split();

      if (!+s.shear.toFixed(9)) {
        s.scalex = +s.scalex.toFixed(4);
        s.scaley = +s.scaley.toFixed(4);
        s.rotate = +s.rotate.toFixed(4);
        return (s.dx || s.dy ? "t" + [+s.dx.toFixed(4), +s.dy.toFixed(4)] : E) + (s.rotate ? "r" + [+s.rotate.toFixed(4), 0, 0] : E) + (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E);
      } else {
        return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
      }
    };
  })(Matrix.prototype);
  /*\
   * Snap.Matrix
   [ method ]
   **
   * Matrix constructor, extend on your own risk.
   * To create matrices use @Snap.matrix.
  \*/


  Snap.Matrix = Matrix;
  /*\
   * Snap.matrix
   [ method ]
   **
   * Utility method
   **
   * Returns a matrix based on the given parameters
   - a (number)
   - b (number)
   - c (number)
   - d (number)
   - e (number)
   - f (number)
   * or
   - svgMatrix (SVGMatrix)
   = (object) @Matrix
  \*/

  Snap.matrix = function (a, b, c, d, e, f) {
    return new Matrix(a, b, c, d, e, f);
  };
}); // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

snap_svg_Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
  var has = "hasOwnProperty",
      make = Snap._.make,
      wrap = Snap._.wrap,
      is = Snap.is,
      getSomeDefs = Snap._.getSomeDefs,
      reURLValue = /^url\((['"]?)([^)]+)\1\)$/,
      $ = Snap._.$,
      URL = Snap.url,
      Str = String,
      separator = Snap._.separator,
      E = "";
  /*\
   * Snap.deurl
   [ method ]
   **
   * Unwraps path from `"url(<path>)"`.
   - value (string) url path
   = (string) unwrapped path
  \*/

  Snap.deurl = function (value) {
    var res = String(value).match(reURLValue);
    return res ? res[2] : value;
  }; // Attributes event handlers


  eve_default.a.on("snap.util.attr.mask", function (value) {
    if (value instanceof Element || value instanceof Fragment) {
      eve_default.a.stop();

      if (value instanceof Fragment && value.node.childNodes.length == 1) {
        value = value.node.firstChild;
        getSomeDefs(this).appendChild(value);
        value = wrap(value);
      }

      if (value.type == "mask") {
        var mask = value;
      } else {
        mask = make("mask", getSomeDefs(this));
        mask.node.appendChild(value.node);
      }

      !mask.node.id && $(mask.node, {
        id: mask.id
      });
      $(this.node, {
        mask: URL(mask.id)
      });
    }
  });

  (function (clipIt) {
    eve_default.a.on("snap.util.attr.clip", clipIt);
    eve_default.a.on("snap.util.attr.clip-path", clipIt);
    eve_default.a.on("snap.util.attr.clipPath", clipIt);
  })(function (value) {
    if (value instanceof Element || value instanceof Fragment) {
      eve_default.a.stop();
      var clip,
          node = value.node;

      while (node) {
        if (node.nodeName === "clipPath") {
          clip = new Element(node);
          break;
        }

        if (node.nodeName === "svg") {
          clip = undefined;
          break;
        }

        node = node.parentNode;
      }

      if (!clip) {
        clip = make("clipPath", getSomeDefs(this));
        clip.node.appendChild(value.node);
        !clip.node.id && $(clip.node, {
          id: clip.id
        });
      }

      $(this.node, {
        "clip-path": URL(clip.node.id || clip.id)
      });
    }
  });

  function fillStroke(name) {
    return function (value) {
      eve_default.a.stop();

      if (value instanceof Fragment && value.node.childNodes.length == 1 && (value.node.firstChild.tagName == "radialGradient" || value.node.firstChild.tagName == "linearGradient" || value.node.firstChild.tagName == "pattern")) {
        value = value.node.firstChild;
        getSomeDefs(this).appendChild(value);
        value = wrap(value);
      }

      if (value instanceof Element) {
        if (value.type == "radialGradient" || value.type == "linearGradient" || value.type == "pattern") {
          if (!value.node.id) {
            $(value.node, {
              id: value.id
            });
          }

          var fill = URL(value.node.id);
        } else {
          fill = value.attr(name);
        }
      } else {
        fill = Snap.color(value);

        if (fill.error) {
          var grad = Snap(getSomeDefs(this).ownerSVGElement).gradient(value);

          if (grad) {
            if (!grad.node.id) {
              $(grad.node, {
                id: grad.id
              });
            }

            fill = URL(grad.node.id);
          } else {
            fill = value;
          }
        } else {
          fill = Str(fill);
        }
      }

      var attrs = {};
      attrs[name] = fill;
      $(this.node, attrs);
      this.node.style[name] = E;
    };
  }

  eve_default.a.on("snap.util.attr.fill", fillStroke("fill"));
  eve_default.a.on("snap.util.attr.stroke", fillStroke("stroke"));
  var gradrg = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
  eve_default.a.on("snap.util.grad.parse", function parseGrad(string) {
    string = Str(string);
    var tokens = string.match(gradrg);

    if (!tokens) {
      return null;
    }

    var type = tokens[1],
        params = tokens[2],
        stops = tokens[3];
    params = params.split(/\s*,\s*/).map(function (el) {
      return +el == el ? +el : el;
    });

    if (params.length == 1 && params[0] == 0) {
      params = [];
    }

    stops = stops.split("-");
    stops = stops.map(function (el) {
      el = el.split(":");
      var out = {
        color: el[0]
      };

      if (el[1]) {
        out.offset = parseFloat(el[1]);
      }

      return out;
    });
    var len = stops.length,
        start = 0,
        j = 0;

    function seed(i, end) {
      var step = (end - start) / (i - j);

      for (var k = j; k < i; k++) {
        stops[k].offset = +(+start + step * (k - j)).toFixed(2);
      }

      j = i;
      start = end;
    }

    len--;

    for (var i = 0; i < len; i++) {
      if ("offset" in stops[i]) {
        seed(i, stops[i].offset);
      }
    }

    stops[len].offset = stops[len].offset || 100;
    seed(len, stops[len].offset);
    return {
      type: type,
      params: params,
      stops: stops
    };
  });
  eve_default.a.on("snap.util.attr.d", function (value) {
    eve_default.a.stop();

    if (is(value, "array") && is(value[0], "array")) {
      value = Snap.path.toString.call(value);
    }

    value = Str(value);

    if (value.match(/[ruo]/i)) {
      value = Snap.path.toAbsolute(value);
    }

    $(this.node, {
      d: value
    });
  })(-1);
  eve_default.a.on("snap.util.attr.#text", function (value) {
    eve_default.a.stop();
    value = Str(value);
    var txt = glob.doc.createTextNode(value);

    while (this.node.firstChild) {
      this.node.removeChild(this.node.firstChild);
    }

    this.node.appendChild(txt);
  })(-1);
  eve_default.a.on("snap.util.attr.path", function (value) {
    eve_default.a.stop();
    this.attr({
      d: value
    });
  })(-1);
  eve_default.a.on("snap.util.attr.class", function (value) {
    eve_default.a.stop();
    this.node.className.baseVal = value;
  })(-1);
  eve_default.a.on("snap.util.attr.viewBox", function (value) {
    var vb;

    if (is(value, "object") && "x" in value) {
      vb = [value.x, value.y, value.width, value.height].join(" ");
    } else if (is(value, "array")) {
      vb = value.join(" ");
    } else {
      vb = value;
    }

    $(this.node, {
      viewBox: vb
    });
    eve_default.a.stop();
  })(-1);
  eve_default.a.on("snap.util.attr.transform", function (value) {
    this.transform(value);
    eve_default.a.stop();
  })(-1);
  eve_default.a.on("snap.util.attr.r", function (value) {
    if (this.type == "rect") {
      eve_default.a.stop();
      $(this.node, {
        rx: value,
        ry: value
      });
    }
  })(-1);
  eve_default.a.on("snap.util.attr.textpath", function (value) {
    eve_default.a.stop();

    if (this.type == "text") {
      var id, tp, node;

      if (!value && this.textPath) {
        tp = this.textPath;

        while (tp.node.firstChild) {
          this.node.appendChild(tp.node.firstChild);
        }

        tp.remove();
        delete this.textPath;
        return;
      }

      if (is(value, "string")) {
        var defs = getSomeDefs(this),
            path = wrap(defs.parentNode).path(value);
        defs.appendChild(path.node);
        id = path.id;
        path.attr({
          id: id
        });
      } else {
        value = wrap(value);

        if (value instanceof Element) {
          id = value.attr("id");

          if (!id) {
            id = value.id;
            value.attr({
              id: id
            });
          }
        }
      }

      if (id) {
        tp = this.textPath;
        node = this.node;

        if (tp) {
          tp.attr({
            "xlink:href": "#" + id
          });
        } else {
          tp = $("textPath", {
            "xlink:href": "#" + id
          });

          while (node.firstChild) {
            tp.appendChild(node.firstChild);
          }

          node.appendChild(tp);
          this.textPath = wrap(tp);
        }
      }
    }
  })(-1);
  eve_default.a.on("snap.util.attr.text", function (value) {
    if (this.type == "text") {
      var i = 0,
          node = this.node,
          tuner = function tuner(chunk) {
        var out = $("tspan");

        if (is(chunk, "array")) {
          for (var i = 0; i < chunk.length; i++) {
            out.appendChild(tuner(chunk[i]));
          }
        } else {
          out.appendChild(glob.doc.createTextNode(chunk));
        }

        out.normalize && out.normalize();
        return out;
      };

      while (node.firstChild) {
        node.removeChild(node.firstChild);
      }

      var tuned = tuner(value);

      while (tuned.firstChild) {
        node.appendChild(tuned.firstChild);
      }
    }

    eve_default.a.stop();
  })(-1);

  function setFontSize(value) {
    eve_default.a.stop();

    if (value == +value) {
      value += "px";
    }

    this.node.style.fontSize = value;
  }

  eve_default.a.on("snap.util.attr.fontSize", setFontSize)(-1);
  eve_default.a.on("snap.util.attr.font-size", setFontSize)(-1);
  eve_default.a.on("snap.util.getattr.transform", function () {
    eve_default.a.stop();
    return this.transform();
  })(-1);
  eve_default.a.on("snap.util.getattr.textpath", function () {
    eve_default.a.stop();
    return this.textPath;
  })(-1); // Markers

  (function () {
    function getter(end) {
      return function () {
        eve_default.a.stop();
        var style = glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + end);

        if (style == "none") {
          return style;
        } else {
          return Snap(glob.doc.getElementById(style.match(reURLValue)[1]));
        }
      };
    }

    function setter(end) {
      return function (value) {
        eve_default.a.stop();
        var name = "marker" + end.charAt(0).toUpperCase() + end.substring(1);

        if (value == "" || !value) {
          this.node.style[name] = "none";
          return;
        }

        if (value.type == "marker") {
          var id = value.node.id;

          if (!id) {
            $(value.node, {
              id: value.id
            });
          }

          this.node.style[name] = URL(id);
          return;
        }
      };
    }

    eve_default.a.on("snap.util.getattr.marker-end", getter("end"))(-1);
    eve_default.a.on("snap.util.getattr.markerEnd", getter("end"))(-1);
    eve_default.a.on("snap.util.getattr.marker-start", getter("start"))(-1);
    eve_default.a.on("snap.util.getattr.markerStart", getter("start"))(-1);
    eve_default.a.on("snap.util.getattr.marker-mid", getter("mid"))(-1);
    eve_default.a.on("snap.util.getattr.markerMid", getter("mid"))(-1);
    eve_default.a.on("snap.util.attr.marker-end", setter("end"))(-1);
    eve_default.a.on("snap.util.attr.markerEnd", setter("end"))(-1);
    eve_default.a.on("snap.util.attr.marker-start", setter("start"))(-1);
    eve_default.a.on("snap.util.attr.markerStart", setter("start"))(-1);
    eve_default.a.on("snap.util.attr.marker-mid", setter("mid"))(-1);
    eve_default.a.on("snap.util.attr.markerMid", setter("mid"))(-1);
  })();

  eve_default.a.on("snap.util.getattr.r", function () {
    if (this.type == "rect" && $(this.node, "rx") == $(this.node, "ry")) {
      eve_default.a.stop();
      return $(this.node, "rx");
    }
  })(-1);

  function textExtract(node) {
    var out = [];
    var children = node.childNodes;

    for (var i = 0, ii = children.length; i < ii; i++) {
      var chi = children[i];

      if (chi.nodeType == 3) {
        out.push(chi.nodeValue);
      }

      if (chi.tagName == "tspan") {
        if (chi.childNodes.length == 1 && chi.firstChild.nodeType == 3) {
          out.push(chi.firstChild.nodeValue);
        } else {
          out.push(textExtract(chi));
        }
      }
    }

    return out;
  }

  eve_default.a.on("snap.util.getattr.text", function () {
    if (this.type == "text" || this.type == "tspan") {
      eve_default.a.stop();
      var out = textExtract(this.node);
      return out.length == 1 ? out[0] : out;
    }
  })(-1);
  eve_default.a.on("snap.util.getattr.#text", function () {
    return this.node.textContent;
  })(-1);
  eve_default.a.on("snap.util.getattr.fill", function (internal) {
    if (internal) {
      return;
    }

    eve_default.a.stop();
    var value = eve_default()("snap.util.getattr.fill", this, true).firstDefined();
    return Snap(Snap.deurl(value)) || value;
  })(-1);
  eve_default.a.on("snap.util.getattr.stroke", function (internal) {
    if (internal) {
      return;
    }

    eve_default.a.stop();
    var value = eve_default()("snap.util.getattr.stroke", this, true).firstDefined();
    return Snap(Snap.deurl(value)) || value;
  })(-1);
  eve_default.a.on("snap.util.getattr.viewBox", function () {
    eve_default.a.stop();
    var vb = $(this.node, "viewBox");

    if (vb) {
      vb = vb.split(separator);
      return Snap._.box(+vb[0], +vb[1], +vb[2], +vb[3]);
    } else {
      return;
    }
  })(-1);
  eve_default.a.on("snap.util.getattr.points", function () {
    var p = $(this.node, "points");
    eve_default.a.stop();

    if (p) {
      return p.split(separator);
    } else {
      return;
    }
  })(-1);
  eve_default.a.on("snap.util.getattr.path", function () {
    var p = $(this.node, "d");
    eve_default.a.stop();
    return p;
  })(-1);
  eve_default.a.on("snap.util.getattr.class", function () {
    return this.node.className.baseVal;
  })(-1);

  function getFontSize() {
    eve_default.a.stop();
    return this.node.style.fontSize;
  }

  eve_default.a.on("snap.util.getattr.fontSize", getFontSize)(-1);
  eve_default.a.on("snap.util.getattr.font-size", getFontSize)(-1);
}); // Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

snap_svg_Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
  var rgNotSpace = /\S+/g,
      rgBadSpace = /[\t\r\n\f]/g,
      rgTrim = /(^\s+|\s+$)/g,
      Str = String,
      elproto = Element.prototype;
  /*\
   * Element.addClass
   [ method ]
   **
   * Adds given class name or list of class names to the element.
   - value (string) class name or space separated list of class names
   **
   = (Element) original element.
  \*/

  elproto.addClass = function (value) {
    var classes = Str(value || "").match(rgNotSpace) || [],
        elem = this.node,
        className = elem.className.baseVal,
        curClasses = className.match(rgNotSpace) || [],
        j,
        pos,
        clazz,
        finalValue;

    if (classes.length) {
      j = 0;

      while (clazz = classes[j++]) {
        pos = curClasses.indexOf(clazz);

        if (!~pos) {
          curClasses.push(clazz);
        }
      }

      finalValue = curClasses.join(" ");

      if (className != finalValue) {
        elem.className.baseVal = finalValue;
      }
    }

    return this;
  };
  /*\
   * Element.removeClass
   [ method ]
   **
   * Removes given class name or list of class names from the element.
   - value (string) class name or space separated list of class names
   **
   = (Element) original element.
  \*/


  elproto.removeClass = function (value) {
    var classes = Str(value || "").match(rgNotSpace) || [],
        elem = this.node,
        className = elem.className.baseVal,
        curClasses = className.match(rgNotSpace) || [],
        j,
        pos,
        clazz,
        finalValue;

    if (curClasses.length) {
      j = 0;

      while (clazz = classes[j++]) {
        pos = curClasses.indexOf(clazz);

        if (~pos) {
          curClasses.splice(pos, 1);
        }
      }

      finalValue = curClasses.join(" ");

      if (className != finalValue) {
        elem.className.baseVal = finalValue;
      }
    }

    return this;
  };
  /*\
   * Element.hasClass
   [ method ]
   **
   * Checks if the element has a given class name in the list of class names applied to it.
   - value (string) class name
   **
   = (boolean) `true` if the element has given class
  \*/


  elproto.hasClass = function (value) {
    var elem = this.node,
        className = elem.className.baseVal,
        curClasses = className.match(rgNotSpace) || [];
    return !!~curClasses.indexOf(value);
  };
  /*\
   * Element.toggleClass
   [ method ]
   **
   * Add or remove one or more classes from the element, depending on either
   * the class’s presence or the value of the `flag` argument.
   - value (string) class name or space separated list of class names
   - flag (boolean) value to determine whether the class should be added or removed
   **
   = (Element) original element.
  \*/


  elproto.toggleClass = function (value, flag) {
    if (flag != null) {
      if (flag) {
        return this.addClass(value);
      } else {
        return this.removeClass(value);
      }
    }

    var classes = (value || "").match(rgNotSpace) || [],
        elem = this.node,
        className = elem.className.baseVal,
        curClasses = className.match(rgNotSpace) || [],
        j,
        pos,
        clazz,
        finalValue;
    j = 0;

    while (clazz = classes[j++]) {
      pos = curClasses.indexOf(clazz);

      if (~pos) {
        curClasses.splice(pos, 1);
      } else {
        curClasses.push(clazz);
      }
    }

    finalValue = curClasses.join(" ");

    if (className != finalValue) {
      elem.className.baseVal = finalValue;
    }

    return this;
  };
}); // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

snap_svg_Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
  var operators = {
    "+": function _(x, y) {
      return x + y;
    },
    "-": function _(x, y) {
      return x - y;
    },
    "/": function _(x, y) {
      return x / y;
    },
    "*": function _(x, y) {
      return x * y;
    }
  },
      Str = String,
      reUnit = /[a-z]+$/i,
      reAddon = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;

  function getNumber(val) {
    return val;
  }

  function getUnit(unit) {
    return function (val) {
      return +val.toFixed(3) + unit;
    };
  }

  eve_default.a.on("snap.util.attr", function (val) {
    var plus = Str(val).match(reAddon);

    if (plus) {
      var evnt = eve_default.a.nt(),
          name = evnt.substring(evnt.lastIndexOf(".") + 1),
          a = this.attr(name),
          atr = {};
      eve_default.a.stop();
      var unit = plus[3] || "",
          aUnit = a.match(reUnit),
          op = operators[plus[1]];

      if (aUnit && aUnit == unit) {
        val = op(parseFloat(a), +plus[2]);
      } else {
        a = this.asPX(name);
        val = op(this.asPX(name), this.asPX(name, plus[2] + unit));
      }

      if (isNaN(a) || isNaN(val)) {
        return;
      }

      atr[name] = val;
      this.attr(atr);
    }
  })(-10);
  eve_default.a.on("snap.util.equal", function (name, b) {
    var A,
        B,
        a = Str(this.attr(name) || ""),
        el = this,
        bplus = Str(b).match(reAddon);

    if (bplus) {
      eve_default.a.stop();
      var unit = bplus[3] || "",
          aUnit = a.match(reUnit),
          op = operators[bplus[1]];

      if (aUnit && aUnit == unit) {
        return {
          from: parseFloat(a),
          to: op(parseFloat(a), +bplus[2]),
          f: getUnit(aUnit)
        };
      } else {
        a = this.asPX(name);
        return {
          from: a,
          to: op(a, this.asPX(name, bplus[2] + unit)),
          f: getNumber
        };
      }
    }
  })(-10);
}); // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

snap_svg_Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
  var proto = Paper.prototype,
      is = Snap.is;
  /*\
   * Paper.rect
   [ method ]
   *
   * Draws a rectangle
   **
   - x (number) x coordinate of the top left corner
   - y (number) y coordinate of the top left corner
   - width (number) width
   - height (number) height
   - rx (number) #optional horizontal radius for rounded corners, default is 0
   - ry (number) #optional vertical radius for rounded corners, default is rx or 0
   = (object) the `rect` element
   **
   > Usage
   | // regular rectangle
   | var c = paper.rect(10, 10, 50, 50);
   | // rectangle with rounded corners
   | var c = paper.rect(40, 40, 50, 50, 10);
  \*/

  proto.rect = function (x, y, w, h, rx, ry) {
    var attr;

    if (ry == null) {
      ry = rx;
    }

    if (is(x, "object") && x == "[object Object]") {
      attr = x;
    } else if (x != null) {
      attr = {
        x: x,
        y: y,
        width: w,
        height: h
      };

      if (rx != null) {
        attr.rx = rx;
        attr.ry = ry;
      }
    }

    return this.el("rect", attr);
  };
  /*\
   * Paper.circle
   [ method ]
   **
   * Draws a circle
   **
   - x (number) x coordinate of the centre
   - y (number) y coordinate of the centre
   - r (number) radius
   = (object) the `circle` element
   **
   > Usage
   | var c = paper.circle(50, 50, 40);
  \*/


  proto.circle = function (cx, cy, r) {
    var attr;

    if (is(cx, "object") && cx == "[object Object]") {
      attr = cx;
    } else if (cx != null) {
      attr = {
        cx: cx,
        cy: cy,
        r: r
      };
    }

    return this.el("circle", attr);
  };

  var preload = function () {
    function onerror() {
      this.parentNode.removeChild(this);
    }

    return function (src, f) {
      var img = glob.doc.createElement("img"),
          body = glob.doc.body;
      img.style.cssText = "position:absolute;left:-9999em;top:-9999em";

      img.onload = function () {
        f.call(img);
        img.onload = img.onerror = null;
        body.removeChild(img);
      };

      img.onerror = onerror;
      body.appendChild(img);
      img.src = src;
    };
  }();
  /*\
   * Paper.image
   [ method ]
   **
   * Places an image on the surface
   **
   - src (string) URI of the source image
   - x (number) x offset position
   - y (number) y offset position
   - width (number) width of the image
   - height (number) height of the image
   = (object) the `image` element
   * or
   = (object) Snap element object with type `image`
   **
   > Usage
   | var c = paper.image("apple.png", 10, 10, 80, 80);
  \*/


  proto.image = function (src, x, y, width, height) {
    var el = this.el("image");

    if (is(src, "object") && "src" in src) {
      el.attr(src);
    } else if (src != null) {
      var set = {
        "xlink:href": src,
        preserveAspectRatio: "none"
      };

      if (x != null && y != null) {
        set.x = x;
        set.y = y;
      }

      if (width != null && height != null) {
        set.width = width;
        set.height = height;
      } else {
        preload(src, function () {
          Snap._.$(el.node, {
            width: this.offsetWidth,
            height: this.offsetHeight
          });
        });
      }

      Snap._.$(el.node, set);
    }

    return el;
  };
  /*\
   * Paper.ellipse
   [ method ]
   **
   * Draws an ellipse
   **
   - x (number) x coordinate of the centre
   - y (number) y coordinate of the centre
   - rx (number) horizontal radius
   - ry (number) vertical radius
   = (object) the `ellipse` element
   **
   > Usage
   | var c = paper.ellipse(50, 50, 40, 20);
  \*/


  proto.ellipse = function (cx, cy, rx, ry) {
    var attr;

    if (is(cx, "object") && cx == "[object Object]") {
      attr = cx;
    } else if (cx != null) {
      attr = {
        cx: cx,
        cy: cy,
        rx: rx,
        ry: ry
      };
    }

    return this.el("ellipse", attr);
  }; // SIERRA Paper.path(): Unclear from the link what a Catmull-Rom curveto is, and why it would make life any easier.

  /*\
   * Paper.path
   [ method ]
   **
   * Creates a `<path>` element using the given string as the path's definition
   - pathString (string) #optional path string in SVG format
   * Path string consists of one-letter commands, followed by comma seprarated arguments in numerical form. Example:
   | "M10,20L30,40"
   * This example features two commands: `M`, with arguments `(10, 20)` and `L` with arguments `(30, 40)`. Uppercase letter commands express coordinates in absolute terms, while lowercase commands express them in relative terms from the most recently declared coordinates.
   *
   # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a> or <a href="https://developer.mozilla.org/en/SVG/Tutorial/Paths">article about path strings at MDN</a>.</p>
   # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
   # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
   # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
   # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
   # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
   # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
   # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
   # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
   # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
   # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
   # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
   # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
   * * _Catmull-Rom curveto_ is a not standard SVG command and added to make life easier.
   * Note: there is a special case when a path consists of only three commands: `M10,10R…z`. In this case the path connects back to its starting point.
   > Usage
   | var c = paper.path("M10 10L90 90");
   | // draw a diagonal line:
   | // move to 10,10, line to 90,90
  \*/


  proto.path = function (d) {
    var attr;

    if (is(d, "object") && !is(d, "array")) {
      attr = d;
    } else if (d) {
      attr = {
        d: d
      };
    }

    return this.el("path", attr);
  };
  /*\
   * Paper.g
   [ method ]
   **
   * Creates a group element
   **
   - varargs (…) #optional elements to nest within the group
   = (object) the `g` element
   **
   > Usage
   | var c1 = paper.circle(),
   |     c2 = paper.rect(),
   |     g = paper.g(c2, c1); // note that the order of elements is different
   * or
   | var c1 = paper.circle(),
   |     c2 = paper.rect(),
   |     g = paper.g();
   | g.add(c2, c1);
  \*/

  /*\
   * Paper.group
   [ method ]
   **
   * See @Paper.g
  \*/


  proto.group = proto.g = function (first) {
    var attr,
        el = this.el("g");

    if (arguments.length == 1 && first && !first.type) {
      el.attr(first);
    } else if (arguments.length) {
      el.add(Array.prototype.slice.call(arguments, 0));
    }

    return el;
  };
  /*\
   * Paper.svg
   [ method ]
   **
   * Creates a nested SVG element.
   - x (number) @optional X of the element
   - y (number) @optional Y of the element
   - width (number) @optional width of the element
   - height (number) @optional height of the element
   - vbx (number) @optional viewbox X
   - vby (number) @optional viewbox Y
   - vbw (number) @optional viewbox width
   - vbh (number) @optional viewbox height
   **
   = (object) the `svg` element
   **
  \*/


  proto.svg = function (x, y, width, height, vbx, vby, vbw, vbh) {
    var attrs = {};

    if (is(x, "object") && y == null) {
      attrs = x;
    } else {
      if (x != null) {
        attrs.x = x;
      }

      if (y != null) {
        attrs.y = y;
      }

      if (width != null) {
        attrs.width = width;
      }

      if (height != null) {
        attrs.height = height;
      }

      if (vbx != null && vby != null && vbw != null && vbh != null) {
        attrs.viewBox = [vbx, vby, vbw, vbh];
      }
    }

    return this.el("svg", attrs);
  };
  /*\
   * Paper.mask
   [ method ]
   **
   * Equivalent in behaviour to @Paper.g, except it’s a mask.
   **
   = (object) the `mask` element
   **
  \*/


  proto.mask = function (first) {
    var attr,
        el = this.el("mask");

    if (arguments.length == 1 && first && !first.type) {
      el.attr(first);
    } else if (arguments.length) {
      el.add(Array.prototype.slice.call(arguments, 0));
    }

    return el;
  };
  /*\
   * Paper.ptrn
   [ method ]
   **
   * Equivalent in behaviour to @Paper.g, except it’s a pattern.
   - x (number) @optional X of the element
   - y (number) @optional Y of the element
   - width (number) @optional width of the element
   - height (number) @optional height of the element
   - vbx (number) @optional viewbox X
   - vby (number) @optional viewbox Y
   - vbw (number) @optional viewbox width
   - vbh (number) @optional viewbox height
   **
   = (object) the `pattern` element
   **
  \*/


  proto.ptrn = function (x, y, width, height, vx, vy, vw, vh) {
    if (is(x, "object")) {
      var attr = x;
    } else {
      attr = {
        patternUnits: "userSpaceOnUse"
      };

      if (x) {
        attr.x = x;
      }

      if (y) {
        attr.y = y;
      }

      if (width != null) {
        attr.width = width;
      }

      if (height != null) {
        attr.height = height;
      }

      if (vx != null && vy != null && vw != null && vh != null) {
        attr.viewBox = [vx, vy, vw, vh];
      } else {
        attr.viewBox = [x || 0, y || 0, width || 0, height || 0];
      }
    }

    return this.el("pattern", attr);
  };
  /*\
   * Paper.use
   [ method ]
   **
   * Creates a <use> element.
   - id (string) @optional id of element to link
   * or
   - id (Element) @optional element to link
   **
   = (object) the `use` element
   **
  \*/


  proto.use = function (id) {
    if (id != null) {
      if (id instanceof Element) {
        if (!id.attr("id")) {
          id.attr({
            id: Snap._.id(id)
          });
        }

        id = id.attr("id");
      }

      if (String(id).charAt() == "#") {
        id = id.substring(1);
      }

      return this.el("use", {
        "xlink:href": "#" + id
      });
    } else {
      return Element.prototype.use.call(this);
    }
  };
  /*\
   * Paper.symbol
   [ method ]
   **
   * Creates a <symbol> element.
   - vbx (number) @optional viewbox X
   - vby (number) @optional viewbox Y
   - vbw (number) @optional viewbox width
   - vbh (number) @optional viewbox height
   = (object) the `symbol` element
   **
  \*/


  proto.symbol = function (vx, vy, vw, vh) {
    var attr = {};

    if (vx != null && vy != null && vw != null && vh != null) {
      attr.viewBox = [vx, vy, vw, vh];
    }

    return this.el("symbol", attr);
  };
  /*\
   * Paper.text
   [ method ]
   **
   * Draws a text string
   **
   - x (number) x coordinate position
   - y (number) y coordinate position
   - text (string|array) The text string to draw or array of strings to nest within separate `<tspan>` elements
   = (object) the `text` element
   **
   > Usage
   | var t1 = paper.text(50, 50, "Snap");
   | var t2 = paper.text(50, 50, ["S","n","a","p"]);
   | // Text path usage
   | t1.attr({textpath: "M10,10L100,100"});
   | // or
   | var pth = paper.path("M10,10L100,100");
   | t1.attr({textpath: pth});
  \*/


  proto.text = function (x, y, text) {
    var attr = {};

    if (is(x, "object")) {
      attr = x;
    } else if (x != null) {
      attr = {
        x: x,
        y: y,
        text: text || ""
      };
    }

    return this.el("text", attr);
  };
  /*\
   * Paper.line
   [ method ]
   **
   * Draws a line
   **
   - x1 (number) x coordinate position of the start
   - y1 (number) y coordinate position of the start
   - x2 (number) x coordinate position of the end
   - y2 (number) y coordinate position of the end
   = (object) the `line` element
   **
   > Usage
   | var t1 = paper.line(50, 50, 100, 100);
  \*/


  proto.line = function (x1, y1, x2, y2) {
    var attr = {};

    if (is(x1, "object")) {
      attr = x1;
    } else if (x1 != null) {
      attr = {
        x1: x1,
        x2: x2,
        y1: y1,
        y2: y2
      };
    }

    return this.el("line", attr);
  };
  /*\
   * Paper.polyline
   [ method ]
   **
   * Draws a polyline
   **
   - points (array) array of points
   * or
   - varargs (…) points
   = (object) the `polyline` element
   **
   > Usage
   | var p1 = paper.polyline([10, 10, 100, 100]);
   | var p2 = paper.polyline(10, 10, 100, 100);
  \*/


  proto.polyline = function (points) {
    if (arguments.length > 1) {
      points = Array.prototype.slice.call(arguments, 0);
    }

    var attr = {};

    if (is(points, "object") && !is(points, "array")) {
      attr = points;
    } else if (points != null) {
      attr = {
        points: points
      };
    }

    return this.el("polyline", attr);
  };
  /*\
   * Paper.polygon
   [ method ]
   **
   * Draws a polygon. See @Paper.polyline
  \*/


  proto.polygon = function (points) {
    if (arguments.length > 1) {
      points = Array.prototype.slice.call(arguments, 0);
    }

    var attr = {};

    if (is(points, "object") && !is(points, "array")) {
      attr = points;
    } else if (points != null) {
      attr = {
        points: points
      };
    }

    return this.el("polygon", attr);
  }; // gradients


  (function () {
    var $ = Snap._.$; // gradients' helpers

    /*\
     * Element.stops
     [ method ]
     **
     * Only for gradients!
     * Returns array of gradient stops elements.
     = (array) the stops array.
    \*/

    function Gstops() {
      return this.selectAll("stop");
    }
    /*\
     * Element.addStop
     [ method ]
     **
     * Only for gradients!
     * Adds another stop to the gradient.
     - color (string) stops color
     - offset (number) stops offset 0..100
     = (object) gradient element
    \*/


    function GaddStop(color, offset) {
      var stop = $("stop"),
          attr = {
        offset: +offset + "%"
      };
      color = Snap.color(color);
      attr["stop-color"] = color.hex;

      if (color.opacity < 1) {
        attr["stop-opacity"] = color.opacity;
      }

      $(stop, attr);
      var stops = this.stops(),
          inserted;

      for (var i = 0; i < stops.length; i++) {
        var stopOffset = parseFloat(stops[i].attr("offset"));

        if (stopOffset > offset) {
          this.node.insertBefore(stop, stops[i].node);
          inserted = true;
          break;
        }
      }

      if (!inserted) {
        this.node.appendChild(stop);
      }

      return this;
    }

    function GgetBBox() {
      if (this.type == "linearGradient") {
        var x1 = $(this.node, "x1") || 0,
            x2 = $(this.node, "x2") || 1,
            y1 = $(this.node, "y1") || 0,
            y2 = $(this.node, "y2") || 0;
        return Snap._.box(x1, y1, math.abs(x2 - x1), math.abs(y2 - y1));
      } else {
        var cx = this.node.cx || .5,
            cy = this.node.cy || .5,
            r = this.node.r || 0;
        return Snap._.box(cx - r, cy - r, r * 2, r * 2);
      }
    }
    /*\
     * Element.setStops
     [ method ]
     **
     * Only for gradients!
     * Updates stops of the gradient based on passed gradient descriptor. See @Ppaer.gradient
     - str (string) gradient descriptor part after `()`.
     = (object) gradient element
     | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
     | g.setStops("#fff-#000-#f00-#fc0");
    \*/


    function GsetStops(str) {
      var grad = str,
          stops = this.stops();

      if (typeof str == "string") {
        grad = eve_default()("snap.util.grad.parse", null, "l(0,0,0,1)" + str).firstDefined().stops;
      }

      if (!Snap.is(grad, "array")) {
        return;
      }

      for (var i = 0; i < stops.length; i++) {
        if (grad[i]) {
          var color = Snap.color(grad[i].color),
              attr = {
            "offset": grad[i].offset + "%"
          };
          attr["stop-color"] = color.hex;

          if (color.opacity < 1) {
            attr["stop-opacity"] = color.opacity;
          }

          stops[i].attr(attr);
        } else {
          stops[i].remove();
        }
      }

      for (i = stops.length; i < grad.length; i++) {
        this.addStop(grad[i].color, grad[i].offset);
      }

      return this;
    }

    function gradient(defs, str) {
      var grad = eve_default()("snap.util.grad.parse", null, str).firstDefined(),
          el;

      if (!grad) {
        return null;
      }

      grad.params.unshift(defs);

      if (grad.type.toLowerCase() == "l") {
        el = gradientLinear.apply(0, grad.params);
      } else {
        el = gradientRadial.apply(0, grad.params);
      }

      if (grad.type != grad.type.toLowerCase()) {
        $(el.node, {
          gradientUnits: "userSpaceOnUse"
        });
      }

      var stops = grad.stops,
          len = stops.length;

      for (var i = 0; i < len; i++) {
        var stop = stops[i];
        el.addStop(stop.color, stop.offset);
      }

      return el;
    }

    function gradientLinear(defs, x1, y1, x2, y2) {
      var el = Snap._.make("linearGradient", defs);

      el.stops = Gstops;
      el.addStop = GaddStop;
      el.getBBox = GgetBBox;
      el.setStops = GsetStops;

      if (x1 != null) {
        $(el.node, {
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2
        });
      }

      return el;
    }

    function gradientRadial(defs, cx, cy, r, fx, fy) {
      var el = Snap._.make("radialGradient", defs);

      el.stops = Gstops;
      el.addStop = GaddStop;
      el.getBBox = GgetBBox;

      if (cx != null) {
        $(el.node, {
          cx: cx,
          cy: cy,
          r: r
        });
      }

      if (fx != null && fy != null) {
        $(el.node, {
          fx: fx,
          fy: fy
        });
      }

      return el;
    }
    /*\
     * Paper.gradient
     [ method ]
     **
     * Creates a gradient element
     **
     - gradient (string) gradient descriptor
     > Gradient Descriptor
     * The gradient descriptor is an expression formatted as
     * follows: `<type>(<coords>)<colors>`.  The `<type>` can be
     * either linear or radial.  The uppercase `L` or `R` letters
     * indicate absolute coordinates offset from the SVG surface.
     * Lowercase `l` or `r` letters indicate coordinates
     * calculated relative to the element to which the gradient is
     * applied.  Coordinates specify a linear gradient vector as
     * `x1`, `y1`, `x2`, `y2`, or a radial gradient as `cx`, `cy`,
     * `r` and optional `fx`, `fy` specifying a focal point away
     * from the center of the circle. Specify `<colors>` as a list
     * of dash-separated CSS color values.  Each color may be
     * followed by a custom offset value, separated with a colon
     * character.
     > Examples
     * Linear gradient, relative from top-left corner to bottom-right
     * corner, from black through red to white:
     | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
     * Linear gradient, absolute from (0, 0) to (100, 100), from black
     * through red at 25% to white:
     | var g = paper.gradient("L(0, 0, 100, 100)#000-#f00:25-#fff");
     * Radial gradient, relative from the center of the element with radius
     * half the width, from black to white:
     | var g = paper.gradient("r(0.5, 0.5, 0.5)#000-#fff");
     * To apply the gradient:
     | paper.circle(50, 50, 40).attr({
     |     fill: g
     | });
     = (object) the `gradient` element
    \*/


    proto.gradient = function (str) {
      return gradient(this.defs, str);
    };

    proto.gradientLinear = function (x1, y1, x2, y2) {
      return gradientLinear(this.defs, x1, y1, x2, y2);
    };

    proto.gradientRadial = function (cx, cy, r, fx, fy) {
      return gradientRadial(this.defs, cx, cy, r, fx, fy);
    };
    /*\
     * Paper.toString
     [ method ]
     **
     * Returns SVG code for the @Paper
     = (string) SVG code for the @Paper
    \*/


    proto.toString = function () {
      var doc = this.node.ownerDocument,
          f = doc.createDocumentFragment(),
          d = doc.createElement("div"),
          svg = this.node.cloneNode(true),
          res;
      f.appendChild(d);
      d.appendChild(svg);

      Snap._.$(svg, {
        xmlns: "http://www.w3.org/2000/svg"
      });

      res = d.innerHTML;
      f.removeChild(f.firstChild);
      return res;
    };
    /*\
     * Paper.toDataURL
     [ method ]
     **
     * Returns SVG code for the @Paper as Data URI string.
     = (string) Data URI string
    \*/


    proto.toDataURL = function () {
      if (window && window.btoa) {
        return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)));
      }
    };
    /*\
     * Paper.clear
     [ method ]
     **
     * Removes all child nodes of the paper, except <defs>.
    \*/


    proto.clear = function () {
      var node = this.node.firstChild,
          next;

      while (node) {
        next = node.nextSibling;

        if (node.tagName != "defs") {
          node.parentNode.removeChild(node);
        } else {
          proto.clear.call({
            node: node
          });
        }

        node = next;
      }
    };
  })();
}); // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

snap_svg_Snap.plugin(function (Snap, Element, Paper, glob) {
  var elproto = Element.prototype,
      is = Snap.is,
      clone = Snap._.clone,
      has = "hasOwnProperty",
      p2s = /,?([a-z]),?/gi,
      toFloat = parseFloat,
      math = Math,
      PI = math.PI,
      mmin = math.min,
      mmax = math.max,
      pow = math.pow,
      abs = math.abs;

  function paths(ps) {
    var p = paths.ps = paths.ps || {}; // if (p[ps]) {
    //     p[ps].sleep = 100;
    // } else {
    //     p[ps] = {
    //         sleep: 100
    //     };
    // }
    // setTimeout(function () {
    //     for (var key in p) if (p[has](key) && key != ps) {
    //         p[key].sleep--;
    //         !p[key].sleep && delete p[key];
    //     }
    // });

    return {}; //p[ps];
  }

  function box(x, y, width, height) {
    if (x == null) {
      x = y = width = height = 0;
    }

    if (y == null) {
      y = x.y;
      width = x.width;
      height = x.height;
      x = x.x;
    }

    return {
      x: x,
      y: y,
      width: width,
      w: width,
      height: height,
      h: height,
      x2: x + width,
      y2: y + height,
      cx: x + width / 2,
      cy: y + height / 2,
      r1: math.min(width, height) / 2,
      r2: math.max(width, height) / 2,
      r0: math.sqrt(width * width + height * height) / 2,
      path: rectPath(x, y, width, height),
      vb: [x, y, width, height].join(" ")
    };
  }

  function toString() {
    return this.join(",").replace(p2s, "$1");
  }

  function pathClone(pathArray) {
    var res = clone(pathArray);
    res.toString = toString;
    return res;
  }

  function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
    if (length == null) {
      return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
    } else {
      return findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
    }
  }

  function getLengthFactory(istotal, subpath) {
    function O(val) {
      return +(+val).toFixed(3);
    }

    return Snap._.cacher(function (path, length, onlystart) {
      if (path instanceof Element) {
        path = path.attr("d");
      }

      path = path2curve(path);
      var x,
          y,
          p,
          l,
          sp = "",
          subpaths = {},
          point,
          len = 0;

      for (var i = 0, ii = path.length; i < ii; i++) {
        p = path[i];

        if (p[0] == "M") {
          x = +p[1];
          y = +p[2];
        } else {
          l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);

          if (len + l > length) {
            if (subpath && !subpaths.start) {
              point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
              sp += ["C" + O(point.start.x), O(point.start.y), O(point.m.x), O(point.m.y), O(point.x), O(point.y)];

              if (onlystart) {
                return sp;
              }

              subpaths.start = sp;
              sp = ["M" + O(point.x), O(point.y) + "C" + O(point.n.x), O(point.n.y), O(point.end.x), O(point.end.y), O(p[5]), O(p[6])].join();
              len += l;
              x = +p[5];
              y = +p[6];
              continue;
            }

            if (!istotal && !subpath) {
              point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
              return point;
            }
          }

          len += l;
          x = +p[5];
          y = +p[6];
        }

        sp += p.shift() + p;
      }

      subpaths.end = sp;
      point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
      return point;
    }, null, Snap._.clone);
  }

  var getTotalLength = getLengthFactory(1),
      getPointAtLength = getLengthFactory(),
      getSubpathsAtLength = getLengthFactory(0, 1);

  function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
    var t1 = 1 - t,
        t13 = pow(t1, 3),
        t12 = pow(t1, 2),
        t2 = t * t,
        t3 = t2 * t,
        x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
        y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
        mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
        my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
        nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
        ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
        ax = t1 * p1x + t * c1x,
        ay = t1 * p1y + t * c1y,
        cx = t1 * c2x + t * p2x,
        cy = t1 * c2y + t * p2y,
        alpha = 90 - math.atan2(mx - nx, my - ny) * 180 / PI; // (mx > nx || my < ny) && (alpha += 180);

    return {
      x: x,
      y: y,
      m: {
        x: mx,
        y: my
      },
      n: {
        x: nx,
        y: ny
      },
      start: {
        x: ax,
        y: ay
      },
      end: {
        x: cx,
        y: cy
      },
      alpha: alpha
    };
  }

  function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
    if (!Snap.is(p1x, "array")) {
      p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
    }

    var bbox = curveDim.apply(null, p1x);
    return box(bbox.min.x, bbox.min.y, bbox.max.x - bbox.min.x, bbox.max.y - bbox.min.y);
  }

  function isPointInsideBBox(bbox, x, y) {
    return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
  }

  function isBBoxIntersect(bbox1, bbox2) {
    bbox1 = box(bbox1);
    bbox2 = box(bbox2);
    return isPointInsideBBox(bbox2, bbox1.x, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2) || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x) && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
  }

  function base3(t, p1, p2, p3, p4) {
    var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
        t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
    return t * t2 - 3 * p1 + 3 * p2;
  }

  function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
    if (z == null) {
      z = 1;
    }

    z = z > 1 ? 1 : z < 0 ? 0 : z;
    var z2 = z / 2,
        n = 12,
        Tvalues = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816],
        Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472],
        sum = 0;

    for (var i = 0; i < n; i++) {
      var ct = z2 * Tvalues[i] + z2,
          xbase = base3(ct, x1, x2, x3, x4),
          ybase = base3(ct, y1, y2, y3, y4),
          comb = xbase * xbase + ybase * ybase;
      sum += Cvalues[i] * math.sqrt(comb);
    }

    return z2 * sum;
  }

  function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
    if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
      return;
    }

    var t = 1,
        step = t / 2,
        t2 = t - step,
        l,
        e = .01;
    l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);

    while (abs(l - ll) > e) {
      step /= 2;
      t2 += (l < ll ? 1 : -1) * step;
      l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
    }

    return t2;
  }

  function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
    if (mmax(x1, x2) < mmin(x3, x4) || mmin(x1, x2) > mmax(x3, x4) || mmax(y1, y2) < mmin(y3, y4) || mmin(y1, y2) > mmax(y3, y4)) {
      return;
    }

    var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
        ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
        denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

    if (!denominator) {
      return;
    }

    var px = nx / denominator,
        py = ny / denominator,
        px2 = +px.toFixed(2),
        py2 = +py.toFixed(2);

    if (px2 < +mmin(x1, x2).toFixed(2) || px2 > +mmax(x1, x2).toFixed(2) || px2 < +mmin(x3, x4).toFixed(2) || px2 > +mmax(x3, x4).toFixed(2) || py2 < +mmin(y1, y2).toFixed(2) || py2 > +mmax(y1, y2).toFixed(2) || py2 < +mmin(y3, y4).toFixed(2) || py2 > +mmax(y3, y4).toFixed(2)) {
      return;
    }

    return {
      x: px,
      y: py
    };
  }

  function inter(bez1, bez2) {
    return interHelper(bez1, bez2);
  }

  function interCount(bez1, bez2) {
    return interHelper(bez1, bez2, 1);
  }

  function interHelper(bez1, bez2, justCount) {
    var bbox1 = bezierBBox(bez1),
        bbox2 = bezierBBox(bez2);

    if (!isBBoxIntersect(bbox1, bbox2)) {
      return justCount ? 0 : [];
    }

    var l1 = bezlen.apply(0, bez1),
        l2 = bezlen.apply(0, bez2),
        n1 = ~~(l1 / 8),
        n2 = ~~(l2 / 8),
        dots1 = [],
        dots2 = [],
        xy = {},
        res = justCount ? 0 : [];

    for (var i = 0; i < n1 + 1; i++) {
      var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
      dots1.push({
        x: p.x,
        y: p.y,
        t: i / n1
      });
    }

    for (i = 0; i < n2 + 1; i++) {
      p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
      dots2.push({
        x: p.x,
        y: p.y,
        t: i / n2
      });
    }

    for (i = 0; i < n1; i++) {
      for (var j = 0; j < n2; j++) {
        var di = dots1[i],
            di1 = dots1[i + 1],
            dj = dots2[j],
            dj1 = dots2[j + 1],
            ci = abs(di1.x - di.x) < .001 ? "y" : "x",
            cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
            is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);

        if (is) {
          if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
            continue;
          }

          xy[is.x.toFixed(4)] = is.y.toFixed(4);
          var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
              t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);

          if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
            if (justCount) {
              res++;
            } else {
              res.push({
                x: is.x,
                y: is.y,
                t1: t1,
                t2: t2
              });
            }
          }
        }
      }
    }

    return res;
  }

  function pathIntersection(path1, path2) {
    return interPathHelper(path1, path2);
  }

  function pathIntersectionNumber(path1, path2) {
    return interPathHelper(path1, path2, 1);
  }

  function interPathHelper(path1, path2, justCount) {
    path1 = path2curve(path1);
    path2 = path2curve(path2);
    var x1,
        y1,
        x2,
        y2,
        x1m,
        y1m,
        x2m,
        y2m,
        bez1,
        bez2,
        res = justCount ? 0 : [];

    for (var i = 0, ii = path1.length; i < ii; i++) {
      var pi = path1[i];

      if (pi[0] == "M") {
        x1 = x1m = pi[1];
        y1 = y1m = pi[2];
      } else {
        if (pi[0] == "C") {
          bez1 = [x1, y1].concat(pi.slice(1));
          x1 = bez1[6];
          y1 = bez1[7];
        } else {
          bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
          x1 = x1m;
          y1 = y1m;
        }

        for (var j = 0, jj = path2.length; j < jj; j++) {
          var pj = path2[j];

          if (pj[0] == "M") {
            x2 = x2m = pj[1];
            y2 = y2m = pj[2];
          } else {
            if (pj[0] == "C") {
              bez2 = [x2, y2].concat(pj.slice(1));
              x2 = bez2[6];
              y2 = bez2[7];
            } else {
              bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
              x2 = x2m;
              y2 = y2m;
            }

            var intr = interHelper(bez1, bez2, justCount);

            if (justCount) {
              res += intr;
            } else {
              for (var k = 0, kk = intr.length; k < kk; k++) {
                intr[k].segment1 = i;
                intr[k].segment2 = j;
                intr[k].bez1 = bez1;
                intr[k].bez2 = bez2;
              }

              res = res.concat(intr);
            }
          }
        }
      }
    }

    return res;
  }

  function isPointInsidePath(path, x, y) {
    var bbox = pathBBox(path);
    return isPointInsideBBox(bbox, x, y) && interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
  }

  function pathBBox(path) {
    var pth = paths(path);

    if (pth.bbox) {
      return clone(pth.bbox);
    }

    if (!path) {
      return box();
    }

    path = path2curve(path);
    var x = 0,
        y = 0,
        X = [],
        Y = [],
        p;

    for (var i = 0, ii = path.length; i < ii; i++) {
      p = path[i];

      if (p[0] == "M") {
        x = p[1];
        y = p[2];
        X.push(x);
        Y.push(y);
      } else {
        var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
        X = X.concat(dim.min.x, dim.max.x);
        Y = Y.concat(dim.min.y, dim.max.y);
        x = p[5];
        y = p[6];
      }
    }

    var xmin = mmin.apply(0, X),
        ymin = mmin.apply(0, Y),
        xmax = mmax.apply(0, X),
        ymax = mmax.apply(0, Y),
        bb = box(xmin, ymin, xmax - xmin, ymax - ymin);
    pth.bbox = clone(bb);
    return bb;
  }

  function rectPath(x, y, w, h, r) {
    if (r) {
      return [["M", +x + +r, y], ["l", w - r * 2, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, h - r * 2], ["a", r, r, 0, 0, 1, -r, r], ["l", r * 2 - w, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, r * 2 - h], ["a", r, r, 0, 0, 1, r, -r], ["z"]];
    }

    var res = [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
    res.toString = toString;
    return res;
  }

  function ellipsePath(x, y, rx, ry, a) {
    if (a == null && ry == null) {
      ry = rx;
    }

    x = +x;
    y = +y;
    rx = +rx;
    ry = +ry;

    if (a != null) {
      var rad = Math.PI / 180,
          x1 = x + rx * Math.cos(-ry * rad),
          x2 = x + rx * Math.cos(-a * rad),
          y1 = y + rx * Math.sin(-ry * rad),
          y2 = y + rx * Math.sin(-a * rad),
          res = [["M", x1, y1], ["A", rx, rx, 0, +(a - ry > 180), 0, x2, y2]];
    } else {
      res = [["M", x, y], ["m", 0, -ry], ["a", rx, ry, 0, 1, 1, 0, 2 * ry], ["a", rx, ry, 0, 1, 1, 0, -2 * ry], ["z"]];
    }

    res.toString = toString;
    return res;
  }

  var unit2px = Snap._unit2px,
      getPath = {
    path: function path(el) {
      return el.attr("path");
    },
    circle: function circle(el) {
      var attr = unit2px(el);
      return ellipsePath(attr.cx, attr.cy, attr.r);
    },
    ellipse: function ellipse(el) {
      var attr = unit2px(el);
      return ellipsePath(attr.cx || 0, attr.cy || 0, attr.rx, attr.ry);
    },
    rect: function rect(el) {
      var attr = unit2px(el);
      return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height, attr.rx, attr.ry);
    },
    image: function image(el) {
      var attr = unit2px(el);
      return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height);
    },
    line: function line(el) {
      return "M" + [el.attr("x1") || 0, el.attr("y1") || 0, el.attr("x2"), el.attr("y2")];
    },
    polyline: function polyline(el) {
      return "M" + el.attr("points");
    },
    polygon: function polygon(el) {
      return "M" + el.attr("points") + "z";
    },
    deflt: function deflt(el) {
      var bbox = el.node.getBBox();
      return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
    }
  };

  function pathToRelative(pathArray) {
    var pth = paths(pathArray),
        lowerCase = String.prototype.toLowerCase;

    if (pth.rel) {
      return pathClone(pth.rel);
    }

    if (!Snap.is(pathArray, "array") || !Snap.is(pathArray && pathArray[0], "array")) {
      pathArray = Snap.parsePathString(pathArray);
    }

    var res = [],
        x = 0,
        y = 0,
        mx = 0,
        my = 0,
        start = 0;

    if (pathArray[0][0] == "M") {
      x = pathArray[0][1];
      y = pathArray[0][2];
      mx = x;
      my = y;
      start++;
      res.push(["M", x, y]);
    }

    for (var i = start, ii = pathArray.length; i < ii; i++) {
      var r = res[i] = [],
          pa = pathArray[i];

      if (pa[0] != lowerCase.call(pa[0])) {
        r[0] = lowerCase.call(pa[0]);

        switch (r[0]) {
          case "a":
            r[1] = pa[1];
            r[2] = pa[2];
            r[3] = pa[3];
            r[4] = pa[4];
            r[5] = pa[5];
            r[6] = +(pa[6] - x).toFixed(3);
            r[7] = +(pa[7] - y).toFixed(3);
            break;

          case "v":
            r[1] = +(pa[1] - y).toFixed(3);
            break;

          case "m":
            mx = pa[1];
            my = pa[2];

          default:
            for (var j = 1, jj = pa.length; j < jj; j++) {
              r[j] = +(pa[j] - (j % 2 ? x : y)).toFixed(3);
            }

        }
      } else {
        r = res[i] = [];

        if (pa[0] == "m") {
          mx = pa[1] + x;
          my = pa[2] + y;
        }

        for (var k = 0, kk = pa.length; k < kk; k++) {
          res[i][k] = pa[k];
        }
      }

      var len = res[i].length;

      switch (res[i][0]) {
        case "z":
          x = mx;
          y = my;
          break;

        case "h":
          x += +res[i][len - 1];
          break;

        case "v":
          y += +res[i][len - 1];
          break;

        default:
          x += +res[i][len - 2];
          y += +res[i][len - 1];
      }
    }

    res.toString = toString;
    pth.rel = pathClone(res);
    return res;
  }

  function pathToAbsolute(pathArray) {
    var pth = paths(pathArray);

    if (pth.abs) {
      return pathClone(pth.abs);
    }

    if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) {
      // rough assumption
      pathArray = Snap.parsePathString(pathArray);
    }

    if (!pathArray || !pathArray.length) {
      return [["M", 0, 0]];
    }

    var res = [],
        x = 0,
        y = 0,
        mx = 0,
        my = 0,
        start = 0,
        pa0;

    if (pathArray[0][0] == "M") {
      x = +pathArray[0][1];
      y = +pathArray[0][2];
      mx = x;
      my = y;
      start++;
      res[0] = ["M", x, y];
    }

    var crz = pathArray.length == 3 && pathArray[0][0] == "M" && pathArray[1][0].toUpperCase() == "R" && pathArray[2][0].toUpperCase() == "Z";

    for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
      res.push(r = []);
      pa = pathArray[i];
      pa0 = pa[0];

      if (pa0 != pa0.toUpperCase()) {
        r[0] = pa0.toUpperCase();

        switch (r[0]) {
          case "A":
            r[1] = pa[1];
            r[2] = pa[2];
            r[3] = pa[3];
            r[4] = pa[4];
            r[5] = pa[5];
            r[6] = +pa[6] + x;
            r[7] = +pa[7] + y;
            break;

          case "V":
            r[1] = +pa[1] + y;
            break;

          case "H":
            r[1] = +pa[1] + x;
            break;

          case "R":
            var dots = [x, y].concat(pa.slice(1));

            for (var j = 2, jj = dots.length; j < jj; j++) {
              dots[j] = +dots[j] + x;
              dots[++j] = +dots[j] + y;
            }

            res.pop();
            res = res.concat(catmullRom2bezier(dots, crz));
            break;

          case "O":
            res.pop();
            dots = ellipsePath(x, y, pa[1], pa[2]);
            dots.push(dots[0]);
            res = res.concat(dots);
            break;

          case "U":
            res.pop();
            res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
            r = ["U"].concat(res[res.length - 1].slice(-2));
            break;

          case "M":
            mx = +pa[1] + x;
            my = +pa[2] + y;

          default:
            for (j = 1, jj = pa.length; j < jj; j++) {
              r[j] = +pa[j] + (j % 2 ? x : y);
            }

        }
      } else if (pa0 == "R") {
        dots = [x, y].concat(pa.slice(1));
        res.pop();
        res = res.concat(catmullRom2bezier(dots, crz));
        r = ["R"].concat(pa.slice(-2));
      } else if (pa0 == "O") {
        res.pop();
        dots = ellipsePath(x, y, pa[1], pa[2]);
        dots.push(dots[0]);
        res = res.concat(dots);
      } else if (pa0 == "U") {
        res.pop();
        res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
        r = ["U"].concat(res[res.length - 1].slice(-2));
      } else {
        for (var k = 0, kk = pa.length; k < kk; k++) {
          r[k] = pa[k];
        }
      }

      pa0 = pa0.toUpperCase();

      if (pa0 != "O") {
        switch (r[0]) {
          case "Z":
            x = +mx;
            y = +my;
            break;

          case "H":
            x = r[1];
            break;

          case "V":
            y = r[1];
            break;

          case "M":
            mx = r[r.length - 2];
            my = r[r.length - 1];

          default:
            x = r[r.length - 2];
            y = r[r.length - 1];
        }
      }
    }

    res.toString = toString;
    pth.abs = pathClone(res);
    return res;
  }

  function l2c(x1, y1, x2, y2) {
    return [x1, y1, x2, y2, x2, y2];
  }

  function q2c(x1, y1, ax, ay, x2, y2) {
    var _13 = 1 / 3,
        _23 = 2 / 3;

    return [_13 * x1 + _23 * ax, _13 * y1 + _23 * ay, _13 * x2 + _23 * ax, _13 * y2 + _23 * ay, x2, y2];
  }

  function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
    // for more information of where this math came from visit:
    // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
    var _120 = PI * 120 / 180,
        rad = PI / 180 * (+angle || 0),
        res = [],
        xy,
        rotate = Snap._.cacher(function (x, y, rad) {
      var X = x * math.cos(rad) - y * math.sin(rad),
          Y = x * math.sin(rad) + y * math.cos(rad);
      return {
        x: X,
        y: Y
      };
    });

    if (!rx || !ry) {
      return [x1, y1, x2, y2, x2, y2];
    }

    if (!recursive) {
      xy = rotate(x1, y1, -rad);
      x1 = xy.x;
      y1 = xy.y;
      xy = rotate(x2, y2, -rad);
      x2 = xy.x;
      y2 = xy.y;
      var cos = math.cos(PI / 180 * angle),
          sin = math.sin(PI / 180 * angle),
          x = (x1 - x2) / 2,
          y = (y1 - y2) / 2;
      var h = x * x / (rx * rx) + y * y / (ry * ry);

      if (h > 1) {
        h = math.sqrt(h);
        rx = h * rx;
        ry = h * ry;
      }

      var rx2 = rx * rx,
          ry2 = ry * ry,
          k = (large_arc_flag == sweep_flag ? -1 : 1) * math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
          cx = k * rx * y / ry + (x1 + x2) / 2,
          cy = k * -ry * x / rx + (y1 + y2) / 2,
          f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
          f2 = math.asin(((y2 - cy) / ry).toFixed(9));
      f1 = x1 < cx ? PI - f1 : f1;
      f2 = x2 < cx ? PI - f2 : f2;
      f1 < 0 && (f1 = PI * 2 + f1);
      f2 < 0 && (f2 = PI * 2 + f2);

      if (sweep_flag && f1 > f2) {
        f1 = f1 - PI * 2;
      }

      if (!sweep_flag && f2 > f1) {
        f2 = f2 - PI * 2;
      }
    } else {
      f1 = recursive[0];
      f2 = recursive[1];
      cx = recursive[2];
      cy = recursive[3];
    }

    var df = f2 - f1;

    if (abs(df) > _120) {
      var f2old = f2,
          x2old = x2,
          y2old = y2;
      f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
      x2 = cx + rx * math.cos(f2);
      y2 = cy + ry * math.sin(f2);
      res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
    }

    df = f2 - f1;
    var c1 = math.cos(f1),
        s1 = math.sin(f1),
        c2 = math.cos(f2),
        s2 = math.sin(f2),
        t = math.tan(df / 4),
        hx = 4 / 3 * rx * t,
        hy = 4 / 3 * ry * t,
        m1 = [x1, y1],
        m2 = [x1 + hx * s1, y1 - hy * c1],
        m3 = [x2 + hx * s2, y2 - hy * c2],
        m4 = [x2, y2];
    m2[0] = 2 * m1[0] - m2[0];
    m2[1] = 2 * m1[1] - m2[1];

    if (recursive) {
      return [m2, m3, m4].concat(res);
    } else {
      res = [m2, m3, m4].concat(res).join().split(",");
      var newres = [];

      for (var i = 0, ii = res.length; i < ii; i++) {
        newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
      }

      return newres;
    }
  }

  function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
    var t1 = 1 - t;
    return {
      x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
      y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
    };
  } // Returns bounding box of cubic bezier curve.
  // Source: http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
  // Original version: NISHIO Hirokazu
  // Modifications: https://github.com/timo22345


  function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
    var tvalues = [],
        bounds = [[], []],
        a,
        b,
        c,
        t,
        t1,
        t2,
        b2ac,
        sqrtb2ac;

    for (var i = 0; i < 2; ++i) {
      if (i == 0) {
        b = 6 * x0 - 12 * x1 + 6 * x2;
        a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
        c = 3 * x1 - 3 * x0;
      } else {
        b = 6 * y0 - 12 * y1 + 6 * y2;
        a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
        c = 3 * y1 - 3 * y0;
      }

      if (abs(a) < 1e-12) {
        if (abs(b) < 1e-12) {
          continue;
        }

        t = -c / b;

        if (0 < t && t < 1) {
          tvalues.push(t);
        }

        continue;
      }

      b2ac = b * b - 4 * c * a;
      sqrtb2ac = math.sqrt(b2ac);

      if (b2ac < 0) {
        continue;
      }

      t1 = (-b + sqrtb2ac) / (2 * a);

      if (0 < t1 && t1 < 1) {
        tvalues.push(t1);
      }

      t2 = (-b - sqrtb2ac) / (2 * a);

      if (0 < t2 && t2 < 1) {
        tvalues.push(t2);
      }
    }

    var x,
        y,
        j = tvalues.length,
        jlen = j,
        mt;

    while (j--) {
      t = tvalues[j];
      mt = 1 - t;
      bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
      bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
    }

    bounds[0][jlen] = x0;
    bounds[1][jlen] = y0;
    bounds[0][jlen + 1] = x3;
    bounds[1][jlen + 1] = y3;
    bounds[0].length = bounds[1].length = jlen + 2;
    return {
      min: {
        x: mmin.apply(0, bounds[0]),
        y: mmin.apply(0, bounds[1])
      },
      max: {
        x: mmax.apply(0, bounds[0]),
        y: mmax.apply(0, bounds[1])
      }
    };
  }

  function path2curve(path, path2) {
    var pth = !path2 && paths(path);

    if (!path2 && pth.curve) {
      return pathClone(pth.curve);
    }

    var p = pathToAbsolute(path),
        p2 = path2 && pathToAbsolute(path2),
        attrs = {
      x: 0,
      y: 0,
      bx: 0,
      by: 0,
      X: 0,
      Y: 0,
      qx: null,
      qy: null
    },
        attrs2 = {
      x: 0,
      y: 0,
      bx: 0,
      by: 0,
      X: 0,
      Y: 0,
      qx: null,
      qy: null
    },
        processPath = function processPath(path, d, pcom) {
      var nx, ny;

      if (!path) {
        return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
      }

      !(path[0] in {
        T: 1,
        Q: 1
      }) && (d.qx = d.qy = null);

      switch (path[0]) {
        case "M":
          d.X = path[1];
          d.Y = path[2];
          break;

        case "A":
          path = ["C"].concat(a2c.apply(0, [d.x, d.y].concat(path.slice(1))));
          break;

        case "S":
          if (pcom == "C" || pcom == "S") {
            // In "S" case we have to take into account, if the previous command is C/S.
            nx = d.x * 2 - d.bx; // And reflect the previous

            ny = d.y * 2 - d.by; // command's control point relative to the current point.
          } else {
            // or some else or nothing
            nx = d.x;
            ny = d.y;
          }

          path = ["C", nx, ny].concat(path.slice(1));
          break;

        case "T":
          if (pcom == "Q" || pcom == "T") {
            // In "T" case we have to take into account, if the previous command is Q/T.
            d.qx = d.x * 2 - d.qx; // And make a reflection similar

            d.qy = d.y * 2 - d.qy; // to case "S".
          } else {
            // or something else or nothing
            d.qx = d.x;
            d.qy = d.y;
          }

          path = ["C"].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
          break;

        case "Q":
          d.qx = path[1];
          d.qy = path[2];
          path = ["C"].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
          break;

        case "L":
          path = ["C"].concat(l2c(d.x, d.y, path[1], path[2]));
          break;

        case "H":
          path = ["C"].concat(l2c(d.x, d.y, path[1], d.y));
          break;

        case "V":
          path = ["C"].concat(l2c(d.x, d.y, d.x, path[1]));
          break;

        case "Z":
          path = ["C"].concat(l2c(d.x, d.y, d.X, d.Y));
          break;
      }

      return path;
    },
        fixArc = function fixArc(pp, i) {
      if (pp[i].length > 7) {
        pp[i].shift();
        var pi = pp[i];

        while (pi.length) {
          pcoms1[i] = "A"; // if created multiple C:s, their original seg is saved

          p2 && (pcoms2[i] = "A"); // the same as above

          pp.splice(i++, 0, ["C"].concat(pi.splice(0, 6)));
        }

        pp.splice(i, 1);
        ii = mmax(p.length, p2 && p2.length || 0);
      }
    },
        fixM = function fixM(path1, path2, a1, a2, i) {
      if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
        path2.splice(i, 0, ["M", a2.x, a2.y]);
        a1.bx = 0;
        a1.by = 0;
        a1.x = path1[i][1];
        a1.y = path1[i][2];
        ii = mmax(p.length, p2 && p2.length || 0);
      }
    },
        pcoms1 = [],
        // path commands of original path p
    pcoms2 = [],
        // path commands of original path p2
    pfirst = "",
        // temporary holder for original path command
    pcom = ""; // holder for previous path command of original path


    for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
      p[i] && (pfirst = p[i][0]); // save current path command

      if (pfirst != "C") // C is not saved yet, because it may be result of conversion
        {
          pcoms1[i] = pfirst; // Save current path command

          i && (pcom = pcoms1[i - 1]); // Get previous path command pcom
        }

      p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

      if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
      // which may produce multiple C:s
      // so we have to make sure that C is also C in original path

      fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

      if (p2) {
        // the same procedures is done to p2
        p2[i] && (pfirst = p2[i][0]);

        if (pfirst != "C") {
          pcoms2[i] = pfirst;
          i && (pcom = pcoms2[i - 1]);
        }

        p2[i] = processPath(p2[i], attrs2, pcom);

        if (pcoms2[i] != "A" && pfirst == "C") {
          pcoms2[i] = "C";
        }

        fixArc(p2, i);
      }

      fixM(p, p2, attrs, attrs2, i);
      fixM(p2, p, attrs2, attrs, i);
      var seg = p[i],
          seg2 = p2 && p2[i],
          seglen = seg.length,
          seg2len = p2 && seg2.length;
      attrs.x = seg[seglen - 2];
      attrs.y = seg[seglen - 1];
      attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
      attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
      attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
      attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
      attrs2.x = p2 && seg2[seg2len - 2];
      attrs2.y = p2 && seg2[seg2len - 1];
    }

    if (!p2) {
      pth.curve = pathClone(p);
    }

    return p2 ? [p, p2] : p;
  }

  function mapPath(path, matrix) {
    if (!matrix) {
      return path;
    }

    var x, y, i, j, ii, jj, pathi;
    path = path2curve(path);

    for (i = 0, ii = path.length; i < ii; i++) {
      pathi = path[i];

      for (j = 1, jj = pathi.length; j < jj; j += 2) {
        x = matrix.x(pathi[j], pathi[j + 1]);
        y = matrix.y(pathi[j], pathi[j + 1]);
        pathi[j] = x;
        pathi[j + 1] = y;
      }
    }

    return path;
  } // http://schepers.cc/getting-to-the-point


  function catmullRom2bezier(crp, z) {
    var d = [];

    for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
      var p = [{
        x: +crp[i - 2],
        y: +crp[i - 1]
      }, {
        x: +crp[i],
        y: +crp[i + 1]
      }, {
        x: +crp[i + 2],
        y: +crp[i + 3]
      }, {
        x: +crp[i + 4],
        y: +crp[i + 5]
      }];

      if (z) {
        if (!i) {
          p[0] = {
            x: +crp[iLen - 2],
            y: +crp[iLen - 1]
          };
        } else if (iLen - 4 == i) {
          p[3] = {
            x: +crp[0],
            y: +crp[1]
          };
        } else if (iLen - 2 == i) {
          p[2] = {
            x: +crp[0],
            y: +crp[1]
          };
          p[3] = {
            x: +crp[2],
            y: +crp[3]
          };
        }
      } else {
        if (iLen - 4 == i) {
          p[3] = p[2];
        } else if (!i) {
          p[0] = {
            x: +crp[i],
            y: +crp[i + 1]
          };
        }
      }

      d.push(["C", (-p[0].x + 6 * p[1].x + p[2].x) / 6, (-p[0].y + 6 * p[1].y + p[2].y) / 6, (p[1].x + 6 * p[2].x - p[3].x) / 6, (p[1].y + 6 * p[2].y - p[3].y) / 6, p[2].x, p[2].y]);
    }

    return d;
  } // export


  Snap.path = paths;
  /*\
   * Snap.path.getTotalLength
   [ method ]
   **
   * Returns the length of the given path in pixels
   **
   - path (string) SVG path string
   **
   = (number) length
  \*/

  Snap.path.getTotalLength = getTotalLength;
  /*\
   * Snap.path.getPointAtLength
   [ method ]
   **
   * Returns the coordinates of the point located at the given length along the given path
   **
   - path (string) SVG path string
   - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
   **
   = (object) representation of the point:
   o {
   o     x: (number) x coordinate,
   o     y: (number) y coordinate,
   o     alpha: (number) angle of derivative
   o }
  \*/

  Snap.path.getPointAtLength = getPointAtLength;
  /*\
   * Snap.path.getSubpath
   [ method ]
   **
   * Returns the subpath of a given path between given start and end lengths
   **
   - path (string) SVG path string
   - from (number) length, in pixels, from the start of the path to the start of the segment
   - to (number) length, in pixels, from the start of the path to the end of the segment
   **
   = (string) path string definition for the segment
  \*/

  Snap.path.getSubpath = function (path, from, to) {
    if (this.getTotalLength(path) - to < 1e-6) {
      return getSubpathsAtLength(path, from).end;
    }

    var a = getSubpathsAtLength(path, to, 1);
    return from ? getSubpathsAtLength(a, from).end : a;
  };
  /*\
   * Element.getTotalLength
   [ method ]
   **
   * Returns the length of the path in pixels (only works for `path` elements)
   = (number) length
  \*/


  elproto.getTotalLength = function () {
    if (this.node.getTotalLength) {
      return this.node.getTotalLength();
    }
  }; // SIERRA Element.getPointAtLength()/Element.getTotalLength(): If a <path> is broken into different segments, is the jump distance to the new coordinates set by the _M_ or _m_ commands calculated as part of the path's total length?

  /*\
   * Element.getPointAtLength
   [ method ]
   **
   * Returns coordinates of the point located at the given length on the given path (only works for `path` elements)
   **
   - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
   **
   = (object) representation of the point:
   o {
   o     x: (number) x coordinate,
   o     y: (number) y coordinate,
   o     alpha: (number) angle of derivative
   o }
  \*/


  elproto.getPointAtLength = function (length) {
    return getPointAtLength(this.attr("d"), length);
  }; // SIERRA Element.getSubpath(): Similar to the problem for Element.getPointAtLength(). Unclear how this would work for a segmented path. Overall, the concept of _subpath_ and what I'm calling a _segment_ (series of non-_M_ or _Z_ commands) is unclear.

  /*\
   * Element.getSubpath
   [ method ]
   **
   * Returns subpath of a given element from given start and end lengths (only works for `path` elements)
   **
   - from (number) length, in pixels, from the start of the path to the start of the segment
   - to (number) length, in pixels, from the start of the path to the end of the segment
   **
   = (string) path string definition for the segment
  \*/


  elproto.getSubpath = function (from, to) {
    return Snap.path.getSubpath(this.attr("d"), from, to);
  };

  Snap._.box = box;
  /*\
   * Snap.path.findDotsAtSegment
   [ method ]
   **
   * Utility method
   **
   * Finds dot coordinates on the given cubic beziér curve at the given t
   - p1x (number) x of the first point of the curve
   - p1y (number) y of the first point of the curve
   - c1x (number) x of the first anchor of the curve
   - c1y (number) y of the first anchor of the curve
   - c2x (number) x of the second anchor of the curve
   - c2y (number) y of the second anchor of the curve
   - p2x (number) x of the second point of the curve
   - p2y (number) y of the second point of the curve
   - t (number) position on the curve (0..1)
   = (object) point information in format:
   o {
   o     x: (number) x coordinate of the point,
   o     y: (number) y coordinate of the point,
   o     m: {
   o         x: (number) x coordinate of the left anchor,
   o         y: (number) y coordinate of the left anchor
   o     },
   o     n: {
   o         x: (number) x coordinate of the right anchor,
   o         y: (number) y coordinate of the right anchor
   o     },
   o     start: {
   o         x: (number) x coordinate of the start of the curve,
   o         y: (number) y coordinate of the start of the curve
   o     },
   o     end: {
   o         x: (number) x coordinate of the end of the curve,
   o         y: (number) y coordinate of the end of the curve
   o     },
   o     alpha: (number) angle of the curve derivative at the point
   o }
  \*/

  Snap.path.findDotsAtSegment = findDotsAtSegment;
  /*\
   * Snap.path.bezierBBox
   [ method ]
   **
   * Utility method
   **
   * Returns the bounding box of a given cubic beziér curve
   - p1x (number) x of the first point of the curve
   - p1y (number) y of the first point of the curve
   - c1x (number) x of the first anchor of the curve
   - c1y (number) y of the first anchor of the curve
   - c2x (number) x of the second anchor of the curve
   - c2y (number) y of the second anchor of the curve
   - p2x (number) x of the second point of the curve
   - p2y (number) y of the second point of the curve
   * or
   - bez (array) array of six points for beziér curve
   = (object) bounding box
   o {
   o     x: (number) x coordinate of the left top point of the box,
   o     y: (number) y coordinate of the left top point of the box,
   o     x2: (number) x coordinate of the right bottom point of the box,
   o     y2: (number) y coordinate of the right bottom point of the box,
   o     width: (number) width of the box,
   o     height: (number) height of the box
   o }
  \*/

  Snap.path.bezierBBox = bezierBBox;
  /*\
   * Snap.path.isPointInsideBBox
   [ method ]
   **
   * Utility method
   **
   * Returns `true` if given point is inside bounding box
   - bbox (string) bounding box
   - x (string) x coordinate of the point
   - y (string) y coordinate of the point
   = (boolean) `true` if point is inside
  \*/

  Snap.path.isPointInsideBBox = isPointInsideBBox;

  Snap.closest = function (x, y, X, Y) {
    var r = 100,
        b = box(x - r / 2, y - r / 2, r, r),
        inside = [],
        getter = X[0].hasOwnProperty("x") ? function (i) {
      return {
        x: X[i].x,
        y: X[i].y
      };
    } : function (i) {
      return {
        x: X[i],
        y: Y[i]
      };
    },
        found = 0;

    while (r <= 1e6 && !found) {
      for (var i = 0, ii = X.length; i < ii; i++) {
        var xy = getter(i);

        if (isPointInsideBBox(b, xy.x, xy.y)) {
          found++;
          inside.push(xy);
          break;
        }
      }

      if (!found) {
        r *= 2;
        b = box(x - r / 2, y - r / 2, r, r);
      }
    }

    if (r == 1e6) {
      return;
    }

    var len = Infinity,
        res;

    for (i = 0, ii = inside.length; i < ii; i++) {
      var l = Snap.len(x, y, inside[i].x, inside[i].y);

      if (len > l) {
        len = l;
        inside[i].len = l;
        res = inside[i];
      }
    }

    return res;
  };
  /*\
   * Snap.path.isBBoxIntersect
   [ method ]
   **
   * Utility method
   **
   * Returns `true` if two bounding boxes intersect
   - bbox1 (string) first bounding box
   - bbox2 (string) second bounding box
   = (boolean) `true` if bounding boxes intersect
  \*/


  Snap.path.isBBoxIntersect = isBBoxIntersect;
  /*\
   * Snap.path.intersection
   [ method ]
   **
   * Utility method
   **
   * Finds intersections of two paths
   - path1 (string) path string
   - path2 (string) path string
   = (array) dots of intersection
   o [
   o     {
   o         x: (number) x coordinate of the point,
   o         y: (number) y coordinate of the point,
   o         t1: (number) t value for segment of path1,
   o         t2: (number) t value for segment of path2,
   o         segment1: (number) order number for segment of path1,
   o         segment2: (number) order number for segment of path2,
   o         bez1: (array) eight coordinates representing beziér curve for the segment of path1,
   o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
   o     }
   o ]
  \*/

  Snap.path.intersection = pathIntersection;
  Snap.path.intersectionNumber = pathIntersectionNumber;
  /*\
   * Snap.path.isPointInside
   [ method ]
   **
   * Utility method
   **
   * Returns `true` if given point is inside a given closed path.
   *
   * Note: fill mode doesn’t affect the result of this method.
   - path (string) path string
   - x (number) x of the point
   - y (number) y of the point
   = (boolean) `true` if point is inside the path
  \*/

  Snap.path.isPointInside = isPointInsidePath;
  /*\
   * Snap.path.getBBox
   [ method ]
   **
   * Utility method
   **
   * Returns the bounding box of a given path
   - path (string) path string
   = (object) bounding box
   o {
   o     x: (number) x coordinate of the left top point of the box,
   o     y: (number) y coordinate of the left top point of the box,
   o     x2: (number) x coordinate of the right bottom point of the box,
   o     y2: (number) y coordinate of the right bottom point of the box,
   o     width: (number) width of the box,
   o     height: (number) height of the box
   o }
  \*/

  Snap.path.getBBox = pathBBox;
  Snap.path.get = getPath;
  /*\
   * Snap.path.toRelative
   [ method ]
   **
   * Utility method
   **
   * Converts path coordinates into relative values
   - path (string) path string
   = (array) path string
  \*/

  Snap.path.toRelative = pathToRelative;
  /*\
   * Snap.path.toAbsolute
   [ method ]
   **
   * Utility method
   **
   * Converts path coordinates into absolute values
   - path (string) path string
   = (array) path string
  \*/

  Snap.path.toAbsolute = pathToAbsolute;
  /*\
   * Snap.path.toCubic
   [ method ]
   **
   * Utility method
   **
   * Converts path to a new path where all segments are cubic beziér curves
   - pathString (string|array) path string or array of segments
   = (array) array of segments
  \*/

  Snap.path.toCubic = path2curve;
  /*\
   * Snap.path.map
   [ method ]
   **
   * Transform the path string with the given matrix
   - path (string) path string
   - matrix (object) see @Matrix
   = (string) transformed path string
  \*/

  Snap.path.map = mapPath;
  Snap.path.toString = toString;
  Snap.path.clone = pathClone;
}); // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

snap_svg_Snap.plugin(function (Snap, Element, Paper, glob) {
  var mmax = Math.max,
      mmin = Math.min; // Set

  var Set = function Set(items) {
    this.items = [];
    this.bindings = {};
    this.length = 0;
    this.type = "set";

    if (items) {
      for (var i = 0, ii = items.length; i < ii; i++) {
        if (items[i]) {
          this[this.items.length] = this.items[this.items.length] = items[i];
          this.length++;
        }
      }
    }
  },
      setproto = Set.prototype;
  /*\
   * Set.push
   [ method ]
   **
   * Adds each argument to the current set
   = (object) original element
  \*/


  setproto.push = function () {
    var item, len;

    for (var i = 0, ii = arguments.length; i < ii; i++) {
      item = arguments[i];

      if (item) {
        len = this.items.length;
        this[len] = this.items[len] = item;
        this.length++;
      }
    }

    return this;
  };
  /*\
   * Set.pop
   [ method ]
   **
   * Removes last element and returns it
   = (object) element
  \*/


  setproto.pop = function () {
    this.length && delete this[this.length--];
    return this.items.pop();
  };
  /*\
   * Set.forEach
   [ method ]
   **
   * Executes given function for each element in the set
   *
   * If the function returns `false`, the loop stops running.
   **
   - callback (function) function to run
   - thisArg (object) context object for the callback
   = (object) Set object
  \*/


  setproto.forEach = function (callback, thisArg) {
    for (var i = 0, ii = this.items.length; i < ii; i++) {
      if (callback.call(thisArg, this.items[i], i) === false) {
        return this;
      }
    }

    return this;
  };
  /*\
   * Set.animate
   [ method ]
   **
   * Animates each element in set in sync.
   *
   **
   - attrs (object) key-value pairs of destination attributes
   - duration (number) duration of the animation in milliseconds
   - easing (function) #optional easing function from @mina or custom
   - callback (function) #optional callback function that executes when the animation ends
   * or
   - animation (array) array of animation parameter for each element in set in format `[attrs, duration, easing, callback]`
   > Usage
   | // animate all elements in set to radius 10
   | set.animate({r: 10}, 500, mina.easein);
   | // or
   | // animate first element to radius 10, but second to radius 20 and in different time
   | set.animate([{r: 10}, 500, mina.easein], [{r: 20}, 1500, mina.easein]);
   = (Element) the current element
  \*/


  setproto.animate = function (attrs, ms, easing, callback) {
    if (typeof easing == "function" && !easing.length) {
      callback = easing;
      easing = Snap_mina.linear;
    }

    if (attrs instanceof Snap._.Animation) {
      callback = attrs.callback;
      easing = attrs.easing;
      ms = easing.dur;
      attrs = attrs.attr;
    }

    var args = arguments;

    if (Snap.is(attrs, "array") && Snap.is(args[args.length - 1], "array")) {
      var each = true;
    }

    var begin,
        handler = function handler() {
      if (begin) {
        this.b = begin;
      } else {
        begin = this.b;
      }
    },
        cb = 0,
        set = this,
        callbacker = callback && function () {
      if (++cb == set.length) {
        callback.call(this);
      }
    };

    return this.forEach(function (el, i) {
      eve_default.a.once("snap.animcreated." + el.id, handler);

      if (each) {
        args[i] && el.animate.apply(el, args[i]);
      } else {
        el.animate(attrs, ms, easing, callbacker);
      }
    });
  };
  /*\
   * Set.remove
   [ method ]
   **
   * Removes all children of the set.
   *
   = (object) Set object
  \*/


  setproto.remove = function () {
    while (this.length) {
      this.pop().remove();
    }

    return this;
  };
  /*\
   * Set.bind
   [ method ]
   **
   * Specifies how to handle a specific attribute when applied
   * to a set.
   *
   **
   - attr (string) attribute name
   - callback (function) function to run
   * or
   - attr (string) attribute name
   - element (Element) specific element in the set to apply the attribute to
   * or
   - attr (string) attribute name
   - element (Element) specific element in the set to apply the attribute to
   - eattr (string) attribute on the element to bind the attribute to
   = (object) Set object
  \*/


  setproto.bind = function (attr, a, b) {
    var data = {};

    if (typeof a == "function") {
      this.bindings[attr] = a;
    } else {
      var aname = b || attr;

      this.bindings[attr] = function (v) {
        data[aname] = v;
        a.attr(data);
      };
    }

    return this;
  };
  /*\
   * Set.attr
   [ method ]
   **
   * Equivalent of @Element.attr.
   = (object) Set object
  \*/


  setproto.attr = function (value) {
    var unbound = {};

    for (var k in value) {
      if (this.bindings[k]) {
        this.bindings[k](value[k]);
      } else {
        unbound[k] = value[k];
      }
    }

    for (var i = 0, ii = this.items.length; i < ii; i++) {
      this.items[i].attr(unbound);
    }

    return this;
  };
  /*\
   * Set.clear
   [ method ]
   **
   * Removes all elements from the set
  \*/


  setproto.clear = function () {
    while (this.length) {
      this.pop();
    }
  };
  /*\
   * Set.splice
   [ method ]
   **
   * Removes range of elements from the set
   **
   - index (number) position of the deletion
   - count (number) number of element to remove
   - insertion… (object) #optional elements to insert
   = (object) set elements that were deleted
  \*/


  setproto.splice = function (index, count, insertion) {
    index = index < 0 ? mmax(this.length + index, 0) : index;
    count = mmax(0, mmin(this.length - index, count));
    var tail = [],
        todel = [],
        args = [],
        i;

    for (i = 2; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    for (i = 0; i < count; i++) {
      todel.push(this[index + i]);
    }

    for (; i < this.length - index; i++) {
      tail.push(this[index + i]);
    }

    var arglen = args.length;

    for (i = 0; i < arglen + tail.length; i++) {
      this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
    }

    i = this.items.length = this.length -= count - arglen;

    while (this[i]) {
      delete this[i++];
    }

    return new Set(todel);
  };
  /*\
   * Set.exclude
   [ method ]
   **
   * Removes given element from the set
   **
   - element (object) element to remove
   = (boolean) `true` if object was found and removed from the set
  \*/


  setproto.exclude = function (el) {
    for (var i = 0, ii = this.length; i < ii; i++) {
      if (this[i] == el) {
        this.splice(i, 1);
        return true;
      }
    }

    return false;
  };
  /*\
   * Set.insertAfter
   [ method ]
   **
   * Inserts set elements after given element.
   **
   - element (object) set will be inserted after this element
   = (object) Set object
  \*/


  setproto.insertAfter = function (el) {
    var i = this.items.length;

    while (i--) {
      this.items[i].insertAfter(el);
    }

    return this;
  };
  /*\
   * Set.getBBox
   [ method ]
   **
   * Union of all bboxes of the set. See @Element.getBBox.
   = (object) bounding box descriptor. See @Element.getBBox.
  \*/


  setproto.getBBox = function () {
    var x = [],
        y = [],
        x2 = [],
        y2 = [];

    for (var i = this.items.length; i--;) {
      if (!this.items[i].removed) {
        var box = this.items[i].getBBox();
        x.push(box.x);
        y.push(box.y);
        x2.push(box.x + box.width);
        y2.push(box.y + box.height);
      }
    }

    x = mmin.apply(0, x);
    y = mmin.apply(0, y);
    x2 = mmax.apply(0, x2);
    y2 = mmax.apply(0, y2);
    return {
      x: x,
      y: y,
      x2: x2,
      y2: y2,
      width: x2 - x,
      height: y2 - y,
      cx: x + (x2 - x) / 2,
      cy: y + (y2 - y) / 2
    };
  };
  /*\
   * Set.insertAfter
   [ method ]
   **
   * Creates a clone of the set.
   **
   = (object) New Set object
  \*/


  setproto.clone = function (s) {
    s = new Set();

    for (var i = 0, ii = this.items.length; i < ii; i++) {
      s.push(this.items[i].clone());
    }

    return s;
  };

  setproto.toString = function () {
    return "Snap\u2018s set";
  };

  setproto.type = "set"; // export

  /*\
   * Snap.Set
   [ property ]
   **
   * Set constructor.
  \*/

  Snap.Set = Set;
  /*\
   * Snap.set
   [ method ]
   **
   * Creates a set and fills it with list of arguments.
   **
   = (object) New Set object
   | var r = paper.rect(0, 0, 10, 10),
   |     s1 = Snap.set(), // empty set
   |     s2 = Snap.set(r, paper.circle(100, 100, 20)); // prefilled set
  \*/

  Snap.set = function () {
    var set = new Set();

    if (arguments.length) {
      set.push.apply(set, Array.prototype.slice.call(arguments, 0));
    }

    return set;
  };
}); // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

snap_svg_Snap.plugin(function (Snap, Element, Paper, glob) {
  var names = {},
      reUnit = /[%a-z]+$/i,
      Str = String;
  names.stroke = names.fill = "colour";

  function getEmpty(item) {
    var l = item[0];

    switch (l.toLowerCase()) {
      case "t":
        return [l, 0, 0];

      case "m":
        return [l, 1, 0, 0, 1, 0, 0];

      case "r":
        if (item.length == 4) {
          return [l, 0, item[2], item[3]];
        } else {
          return [l, 0];
        }

      case "s":
        if (item.length == 5) {
          return [l, 1, 1, item[3], item[4]];
        } else if (item.length == 3) {
          return [l, 1, 1];
        } else {
          return [l, 1];
        }

    }
  }

  function equaliseTransform(t1, t2, getBBox) {
    t1 = t1 || new Snap.Matrix();
    t2 = t2 || new Snap.Matrix();
    t1 = Snap.parseTransformString(t1.toTransformString()) || [];
    t2 = Snap.parseTransformString(t2.toTransformString()) || [];
    var maxlength = Math.max(t1.length, t2.length),
        from = [],
        to = [],
        i = 0,
        j,
        jj,
        tt1,
        tt2;

    for (; i < maxlength; i++) {
      tt1 = t1[i] || getEmpty(t2[i]);
      tt2 = t2[i] || getEmpty(tt1);

      if (tt1[0] != tt2[0] || tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3]) || tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4])) {
        t1 = Snap._.transform2matrix(t1, getBBox());
        t2 = Snap._.transform2matrix(t2, getBBox());
        from = [["m", t1.a, t1.b, t1.c, t1.d, t1.e, t1.f]];
        to = [["m", t2.a, t2.b, t2.c, t2.d, t2.e, t2.f]];
        break;
      }

      from[i] = [];
      to[i] = [];

      for (j = 0, jj = Math.max(tt1.length, tt2.length); j < jj; j++) {
        j in tt1 && (from[i][j] = tt1[j]);
        j in tt2 && (to[i][j] = tt2[j]);
      }
    }

    return {
      from: path2array(from),
      to: path2array(to),
      f: getPath(from)
    };
  }

  function getNumber(val) {
    return val;
  }

  function getUnit(unit) {
    return function (val) {
      return +val.toFixed(3) + unit;
    };
  }

  function getViewBox(val) {
    return val.join(" ");
  }

  function getColour(clr) {
    return Snap.rgb(clr[0], clr[1], clr[2], clr[3]);
  }

  function getPath(path) {
    var k = 0,
        i,
        ii,
        j,
        jj,
        out,
        a,
        b = [];

    for (i = 0, ii = path.length; i < ii; i++) {
      out = "[";
      a = ['"' + path[i][0] + '"'];

      for (j = 1, jj = path[i].length; j < jj; j++) {
        a[j] = "val[" + k++ + "]";
      }

      out += a + "]";
      b[i] = out;
    } // return Function("val", "return Snap.path.toString.call([" + b + "])");
    // return function (val) { return Snap.path.toString.call([eval(b[0])])}


    return function (val) {
      return Snap.path.toString.call([new Function("val", "return " + b[0])(val)]);
    };
  }

  function path2array(path) {
    var out = [];

    for (var i = 0, ii = path.length; i < ii; i++) {
      for (var j = 1, jj = path[i].length; j < jj; j++) {
        out.push(path[i][j]);
      }
    }

    return out;
  }

  function isNumeric(obj) {
    return isFinite(obj);
  }

  function arrayEqual(arr1, arr2) {
    if (!Snap.is(arr1, "array") || !Snap.is(arr2, "array")) {
      return false;
    }

    return arr1.toString() == arr2.toString();
  }

  Element.prototype.equal = function (name, b) {
    return eve_default()("snap.util.equal", this, name, b).firstDefined();
  };

  eve_default.a.on("snap.util.equal", function (name, b) {
    var A,
        B,
        a = Str(this.attr(name) || ""),
        el = this;

    if (names[name] == "colour") {
      A = Snap.color(a);
      B = Snap.color(b);
      return {
        from: [A.r, A.g, A.b, A.opacity],
        to: [B.r, B.g, B.b, B.opacity],
        f: getColour
      };
    }

    if (name == "viewBox") {
      A = this.attr(name).vb.split(" ").map(Number);
      B = b.split(" ").map(Number);
      return {
        from: A,
        to: B,
        f: getViewBox
      };
    }

    if (name == "transform" || name == "gradientTransform" || name == "patternTransform") {
      if (typeof b == "string") {
        b = Str(b).replace(/\.{3}|\u2026/g, a);
      }

      a = this.matrix;

      if (!Snap._.rgTransform.test(b)) {
        b = Snap._.transform2matrix(Snap._.svgTransform2string(b), this.getBBox());
      } else {
        b = Snap._.transform2matrix(b, this.getBBox());
      }

      return equaliseTransform(a, b, function () {
        return el.getBBox(1);
      });
    }

    if (name == "d" || name == "path") {
      A = Snap.path.toCubic(a, b);
      return {
        from: path2array(A[0]),
        to: path2array(A[1]),
        f: getPath(A[0])
      };
    }

    if (name == "points") {
      A = Str(a).split(Snap._.separator);
      B = Str(b).split(Snap._.separator);
      return {
        from: A,
        to: B,
        f: function f(val) {
          return val;
        }
      };
    }

    if (isNumeric(a) && isNumeric(b)) {
      return {
        from: parseFloat(a),
        to: parseFloat(b),
        f: getNumber
      };
    }

    var aUnit = a.match(reUnit),
        bUnit = Str(b).match(reUnit);

    if (aUnit && arrayEqual(aUnit, bUnit)) {
      return {
        from: parseFloat(a),
        to: parseFloat(b),
        f: getUnit(aUnit)
      };
    } else {
      return {
        from: this.asPX(name),
        to: this.asPX(name, b),
        f: getNumber
      };
    }
  });
}); // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

snap_svg_Snap.plugin(function (Snap, Element, Paper, glob) {
  var elproto = Element.prototype,
      has = "hasOwnProperty",
      supportsTouch = ("createTouch" in glob.doc),
      events = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"],
      touchMap = {
    mousedown: "touchstart",
    mousemove: "touchmove",
    mouseup: "touchend"
  },
      getScroll = function getScroll(xy, el) {
    var name = xy == "y" ? "scrollTop" : "scrollLeft",
        doc = el && el.node ? el.node.ownerDocument : glob.doc;
    return doc[name in doc.documentElement ? "documentElement" : "body"][name];
  },
      preventDefault = function preventDefault() {
    this.returnValue = false;
  },
      preventTouch = function preventTouch() {
    return this.originalEvent.preventDefault();
  },
      stopPropagation = function stopPropagation() {
    this.cancelBubble = true;
  },
      stopTouch = function stopTouch() {
    return this.originalEvent.stopPropagation();
  },
      addEvent = function addEvent(obj, type, fn, element) {
    var realName = supportsTouch && touchMap[type] ? touchMap[type] : type,
        f = function f(e) {
      // 不要帮用户太多，
      // var scrollY = getScroll("y", element),
      //     scrollX = getScroll("x", element);
      if (supportsTouch && touchMap[has](type)) {
        for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
          if (e.targetTouches[i].target == obj || obj.contains(e.targetTouches[i].target)) {
            var olde = e;
            e = e.targetTouches[i];
            e.originalEvent = olde;
            e.preventDefault = preventTouch;
            e.stopPropagation = stopTouch;
            break;
          }
        }
      }

      var x = e.clientX,
          y = e.clientY;
      return fn.call(element, e, x, y);
    };

    if (type !== realName) {
      obj.addEventListener(type, f, false);
    }

    obj.addEventListener(realName, f, false);
    return function () {
      if (type !== realName) {
        obj.removeEventListener(type, f, false);
      }

      obj.removeEventListener(realName, f, false);
      return true;
    };
  },
      drag = [],
      dragMove = function dragMove(e) {
    var x = e.clientX,
        y = e.clientY,
        // scrollY = getScroll("y"),
    // scrollX = getScroll("x"),
    dragi,
        j = drag.length;

    while (j--) {
      dragi = drag[j];

      if (supportsTouch) {
        var i = e.touches && e.touches.length,
            touch;

        while (i--) {
          touch = e.touches[i];

          if (touch.identifier == dragi.el._drag.id || dragi.el.node.contains(touch.target)) {
            x = touch.clientX;
            y = touch.clientY;
            (e.originalEvent ? e.originalEvent : e).preventDefault();
            break;
          }
        }
      } else {
        e.preventDefault();
      }

      var node = dragi.el.node,
          o,
          next = node.nextSibling,
          parent = node.parentNode,
          display = node.style.display; // glob.win.opera && parent.removeChild(node);
      // node.style.display = "none";
      // o = dragi.el.paper.getElementByPoint(x, y);
      // node.style.display = display;
      // glob.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
      // o && eve("snap.drag.over." + dragi.el.id, dragi.el, o);
      // x += scrollX;
      // y += scrollY;

      eve_default()("snap.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
    }
  },
      dragUp = function dragUp(e) {
    Snap.unmousemove(dragMove).unmouseup(dragUp);
    var i = drag.length,
        dragi;

    while (i--) {
      dragi = drag[i];
      dragi.el._drag = {};
      eve_default()("snap.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
      eve_default.a.off("snap.drag.*." + dragi.el.id);
    }

    drag = [];
  };
  /*\
   * Element.click
   [ method ]
   **
   * Adds a click event handler to the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.unclick
   [ method ]
   **
   * Removes a click event handler from the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.dblclick
   [ method ]
   **
   * Adds a double click event handler to the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.undblclick
   [ method ]
   **
   * Removes a double click event handler from the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.mousedown
   [ method ]
   **
   * Adds a mousedown event handler to the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.unmousedown
   [ method ]
   **
   * Removes a mousedown event handler from the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.mousemove
   [ method ]
   **
   * Adds a mousemove event handler to the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.unmousemove
   [ method ]
   **
   * Removes a mousemove event handler from the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.mouseout
   [ method ]
   **
   * Adds a mouseout event handler to the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.unmouseout
   [ method ]
   **
   * Removes a mouseout event handler from the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.mouseover
   [ method ]
   **
   * Adds a mouseover event handler to the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.unmouseover
   [ method ]
   **
   * Removes a mouseover event handler from the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.mouseup
   [ method ]
   **
   * Adds a mouseup event handler to the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.unmouseup
   [ method ]
   **
   * Removes a mouseup event handler from the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.touchstart
   [ method ]
   **
   * Adds a touchstart event handler to the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.untouchstart
   [ method ]
   **
   * Removes a touchstart event handler from the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.touchmove
   [ method ]
   **
   * Adds a touchmove event handler to the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.untouchmove
   [ method ]
   **
   * Removes a touchmove event handler from the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.touchend
   [ method ]
   **
   * Adds a touchend event handler to the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.untouchend
   [ method ]
   **
   * Removes a touchend event handler from the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.touchcancel
   [ method ]
   **
   * Adds a touchcancel event handler to the element
   - handler (function) handler for the event
   = (object) @Element
  \*/

  /*\
   * Element.untouchcancel
   [ method ]
   **
   * Removes a touchcancel event handler from the element
   - handler (function) handler for the event
   = (object) @Element
  \*/


  for (var i = events.length; i--;) {
    (function (eventName) {
      Snap[eventName] = elproto[eventName] = function (fn, scope) {
        if (Snap.is(fn, "function")) {
          this.events = this.events || [];
          this.events.push({
            name: eventName,
            f: fn,
            unbind: addEvent(this.node || document, eventName, fn, scope || this)
          });
        } else {
          for (var i = 0, ii = this.events.length; i < ii; i++) {
            if (this.events[i].name == eventName) {
              try {
                this.events[i].f.call(this);
              } catch (e) {}
            }
          }
        }

        return this;
      };

      Snap["un" + eventName] = elproto["un" + eventName] = function (fn) {
        var events = this.events || [],
            l = events.length;

        while (l--) {
          if (events[l].name == eventName && (events[l].f == fn || !fn)) {
            events[l].unbind();
            events.splice(l, 1);
            !events.length && delete this.events;
            return this;
          }
        }

        return this;
      };
    })(events[i]);
  }
  /*\
   * Element.hover
   [ method ]
   **
   * Adds hover event handlers to the element
   - f_in (function) handler for hover in
   - f_out (function) handler for hover out
   - icontext (object) #optional context for hover in handler
   - ocontext (object) #optional context for hover out handler
   = (object) @Element
  \*/


  elproto.hover = function (f_in, f_out, scope_in, scope_out) {
    return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
  };
  /*\
   * Element.unhover
   [ method ]
   **
   * Removes hover event handlers from the element
   - f_in (function) handler for hover in
   - f_out (function) handler for hover out
   = (object) @Element
  \*/


  elproto.unhover = function (f_in, f_out) {
    return this.unmouseover(f_in).unmouseout(f_out);
  };

  var draggable = []; // SIERRA unclear what _context_ refers to for starting, ending, moving the drag gesture.
  // SIERRA Element.drag(): _x position of the mouse_: Where are the x/y values offset from?
  // SIERRA Element.drag(): much of this member's doc appears to be duplicated for some reason.
  // SIERRA Unclear about this sentence: _Additionally following drag events will be triggered: drag.start.<id> on start, drag.end.<id> on end and drag.move.<id> on every move._ Is there a global _drag_ object to which you can assign handlers keyed by an element's ID?

  /*\
   * Element.drag
   [ method ]
   **
   * Adds event handlers for an element's drag gesture
   **
   - onmove (function) handler for moving
   - onstart (function) handler for drag start
   - onend (function) handler for drag end
   - mcontext (object) #optional context for moving handler
   - scontext (object) #optional context for drag start handler
   - econtext (object) #optional context for drag end handler
   * Additionaly following `drag` events are triggered: `drag.start.<id>` on start,
   * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element is dragged over another element
   * `drag.over.<id>` fires as well.
   *
   * Start event and start handler are called in specified context or in context of the element with following parameters:
   o x (number) x position of the mouse
   o y (number) y position of the mouse
   o event (object) DOM event object
   * Move event and move handler are called in specified context or in context of the element with following parameters:
   o dx (number) shift by x from the start point
   o dy (number) shift by y from the start point
   o x (number) x position of the mouse
   o y (number) y position of the mouse
   o event (object) DOM event object
   * End event and end handler are called in specified context or in context of the element with following parameters:
   o event (object) DOM event object
   = (object) @Element
  \*/

  elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
    var el = this;

    if (!arguments.length) {
      var origTransform;
      return el.drag(function (dx, dy) {
        this.attr({
          transform: origTransform + (origTransform ? "T" : "t") + [dx, dy]
        });
      }, function () {
        origTransform = this.transform().local;
      });
    }

    function start(e, x, y) {
      (e.originalEvent || e).preventDefault();
      el._drag.x = x;
      el._drag.y = y;
      el._drag.id = e.identifier;
      !drag.length && Snap.mousemove(dragMove).mouseup(dragUp);
      drag.push({
        el: el,
        move_scope: move_scope,
        start_scope: start_scope,
        end_scope: end_scope
      });
      onstart && eve_default.a.on("snap.drag.start." + el.id, onstart);
      onmove && eve_default.a.on("snap.drag.move." + el.id, onmove);
      onend && eve_default.a.on("snap.drag.end." + el.id, onend);
      eve_default()("snap.drag.start." + el.id, start_scope || move_scope || el, x, y, e);
    }

    function init(e, x, y) {
      eve_default()("snap.draginit." + el.id, el, e, x, y);
    }

    eve_default.a.on("snap.draginit." + el.id, start);
    el._drag = {};
    draggable.push({
      el: el,
      start: start,
      init: init
    });
    el.mousedown(init);
    return el;
  };
  /*
   * Element.onDragOver
   [ method ]
   **
   * Shortcut to assign event handler for `drag.over.<id>` event, where `id` is the element's `id` (see @Element.id)
   - f (function) handler for event, first argument would be the element you are dragging over
  \*/
  // elproto.onDragOver = function (f) {
  //     f ? eve.on("snap.drag.over." + this.id, f) : eve.unbind("snap.drag.over." + this.id);
  // };

  /*\
   * Element.undrag
   [ method ]
   **
   * Removes all drag event handlers from the given element
  \*/


  elproto.undrag = function () {
    var i = draggable.length;

    while (i--) {
      if (draggable[i].el == this) {
        this.unmousedown(draggable[i].init);
        draggable.splice(i, 1);
        eve_default.a.unbind("snap.drag.*." + this.id);
        eve_default.a.unbind("snap.draginit." + this.id);
      }
    }

    !draggable.length && Snap.unmousemove(dragMove).unmouseup(dragUp);
    return this;
  };
}); // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

snap_svg_Snap.plugin(function (Snap, Element, Paper, glob) {
  var elproto = Element.prototype,
      pproto = Paper.prototype,
      rgurl = /^\s*url\((.+)\)/,
      Str = String,
      $ = Snap._.$;
  Snap.filter = {};
  /*\
   * Paper.filter
   [ method ]
   **
   * Creates a `<filter>` element
   **
   - filstr (string) SVG fragment of filter provided as a string
   = (object) @Element
   * Note: It is recommended to use filters embedded into the page inside an empty SVG element.
   > Usage
   | var f = paper.filter('<feGaussianBlur stdDeviation="2"/>'),
   |     c = paper.circle(10, 10, 10).attr({
   |         filter: f
   |     });
  \*/

  pproto.filter = function (filstr) {
    var paper = this;

    if (paper.type != "svg") {
      paper = paper.paper;
    }

    var f = Snap.parse(Str(filstr)),
        id = Snap._.id(),
        width = paper.node.offsetWidth,
        height = paper.node.offsetHeight,
        filter = $("filter");

    $(filter, {
      id: id,
      filterUnits: "userSpaceOnUse"
    });
    filter.appendChild(f.node);
    paper.defs.appendChild(filter);
    return new Element(filter);
  };

  eve_default.a.on("snap.util.getattr.filter", function () {
    eve_default.a.stop();
    var p = $(this.node, "filter");

    if (p) {
      var match = Str(p).match(rgurl);
      return match && Snap.select(match[1]);
    }
  });
  eve_default.a.on("snap.util.attr.filter", function (value) {
    if (value instanceof Element && value.type == "filter") {
      eve_default.a.stop();
      var id = value.node.id;

      if (!id) {
        $(value.node, {
          id: value.id
        });
        id = value.id;
      }

      $(this.node, {
        filter: Snap.url(id)
      });
    }

    if (!value || value == "none") {
      eve_default.a.stop();
      this.node.removeAttribute("filter");
    }
  });
  /*\
   * Snap.filter.blur
   [ method ]
   **
   * Returns an SVG markup string for the blur filter
   **
   - x (number) amount of horizontal blur, in pixels
   - y (number) #optional amount of vertical blur, in pixels
   = (string) filter representation
   > Usage
   | var f = paper.filter(Snap.filter.blur(5, 10)),
   |     c = paper.circle(10, 10, 10).attr({
   |         filter: f
   |     });
  \*/

  Snap.filter.blur = function (x, y) {
    if (x == null) {
      x = 2;
    }

    var def = y == null ? x : [x, y];
    return Snap.format('\<feGaussianBlur stdDeviation="{def}"/>', {
      def: def
    });
  };

  Snap.filter.blur.toString = function () {
    return this();
  };
  /*\
   * Snap.filter.shadow
   [ method ]
   **
   * Returns an SVG markup string for the shadow filter
   **
   - dx (number) #optional horizontal shift of the shadow, in pixels
   - dy (number) #optional vertical shift of the shadow, in pixels
   - blur (number) #optional amount of blur
   - color (string) #optional color of the shadow
   - opacity (number) #optional `0..1` opacity of the shadow
   * or
   - dx (number) #optional horizontal shift of the shadow, in pixels
   - dy (number) #optional vertical shift of the shadow, in pixels
   - color (string) #optional color of the shadow
   - opacity (number) #optional `0..1` opacity of the shadow
   * which makes blur default to `4`. Or
   - dx (number) #optional horizontal shift of the shadow, in pixels
   - dy (number) #optional vertical shift of the shadow, in pixels
   - opacity (number) #optional `0..1` opacity of the shadow
   = (string) filter representation
   > Usage
   | var f = paper.filter(Snap.filter.shadow(0, 2, .3)),
   |     c = paper.circle(10, 10, 10).attr({
   |         filter: f
   |     });
  \*/


  Snap.filter.shadow = function (dx, dy, blur, color, opacity) {
    if (opacity == null) {
      if (color == null) {
        opacity = blur;
        blur = 4;
        color = "#000";
      } else {
        opacity = color;
        color = blur;
        blur = 4;
      }
    }

    if (blur == null) {
      blur = 4;
    }

    if (opacity == null) {
      opacity = 1;
    }

    if (dx == null) {
      dx = 0;
      dy = 2;
    }

    if (dy == null) {
      dy = dx;
    }

    color = Snap.color(color);
    return Snap.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
      color: color,
      dx: dx,
      dy: dy,
      blur: blur,
      opacity: opacity
    });
  };

  Snap.filter.shadow.toString = function () {
    return this();
  };
  /*\
   * Snap.filter.grayscale
   [ method ]
   **
   * Returns an SVG markup string for the grayscale filter
   **
   - amount (number) amount of filter (`0..1`)
   = (string) filter representation
  \*/


  Snap.filter.grayscale = function (amount) {
    if (amount == null) {
      amount = 1;
    }

    return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
      a: 0.2126 + 0.7874 * (1 - amount),
      b: 0.7152 - 0.7152 * (1 - amount),
      c: 0.0722 - 0.0722 * (1 - amount),
      d: 0.2126 - 0.2126 * (1 - amount),
      e: 0.7152 + 0.2848 * (1 - amount),
      f: 0.0722 - 0.0722 * (1 - amount),
      g: 0.2126 - 0.2126 * (1 - amount),
      h: 0.0722 + 0.9278 * (1 - amount)
    });
  };

  Snap.filter.grayscale.toString = function () {
    return this();
  };
  /*\
   * Snap.filter.sepia
   [ method ]
   **
   * Returns an SVG markup string for the sepia filter
   **
   - amount (number) amount of filter (`0..1`)
   = (string) filter representation
  \*/


  Snap.filter.sepia = function (amount) {
    if (amount == null) {
      amount = 1;
    }

    return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
      a: 0.393 + 0.607 * (1 - amount),
      b: 0.769 - 0.769 * (1 - amount),
      c: 0.189 - 0.189 * (1 - amount),
      d: 0.349 - 0.349 * (1 - amount),
      e: 0.686 + 0.314 * (1 - amount),
      f: 0.168 - 0.168 * (1 - amount),
      g: 0.272 - 0.272 * (1 - amount),
      h: 0.534 - 0.534 * (1 - amount),
      i: 0.131 + 0.869 * (1 - amount)
    });
  };

  Snap.filter.sepia.toString = function () {
    return this();
  };
  /*\
   * Snap.filter.saturate
   [ method ]
   **
   * Returns an SVG markup string for the saturate filter
   **
   - amount (number) amount of filter (`0..1`)
   = (string) filter representation
  \*/


  Snap.filter.saturate = function (amount) {
    if (amount == null) {
      amount = 1;
    }

    return Snap.format('<feColorMatrix type="saturate" values="{amount}"/>', {
      amount: 1 - amount
    });
  };

  Snap.filter.saturate.toString = function () {
    return this();
  };
  /*\
   * Snap.filter.hueRotate
   [ method ]
   **
   * Returns an SVG markup string for the hue-rotate filter
   **
   - angle (number) angle of rotation
   = (string) filter representation
  \*/


  Snap.filter.hueRotate = function (angle) {
    angle = angle || 0;
    return Snap.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
      angle: angle
    });
  };

  Snap.filter.hueRotate.toString = function () {
    return this();
  };
  /*\
   * Snap.filter.invert
   [ method ]
   **
   * Returns an SVG markup string for the invert filter
   **
   - amount (number) amount of filter (`0..1`)
   = (string) filter representation
  \*/


  Snap.filter.invert = function (amount) {
    if (amount == null) {
      amount = 1;
    } //        <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" color-interpolation-filters="sRGB"/>


    return Snap.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
      amount: amount,
      amount2: 1 - amount
    });
  };

  Snap.filter.invert.toString = function () {
    return this();
  };
  /*\
   * Snap.filter.brightness
   [ method ]
   **
   * Returns an SVG markup string for the brightness filter
   **
   - amount (number) amount of filter (`0..1`)
   = (string) filter representation
  \*/


  Snap.filter.brightness = function (amount) {
    if (amount == null) {
      amount = 1;
    }

    return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
      amount: amount
    });
  };

  Snap.filter.brightness.toString = function () {
    return this();
  };
  /*\
   * Snap.filter.contrast
   [ method ]
   **
   * Returns an SVG markup string for the contrast filter
   **
   - amount (number) amount of filter (`0..1`)
   = (string) filter representation
  \*/


  Snap.filter.contrast = function (amount) {
    if (amount == null) {
      amount = 1;
    }

    return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
      amount: amount,
      amount2: .5 - amount / 2
    });
  };

  Snap.filter.contrast.toString = function () {
    return this();
  };
}); // Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

snap_svg_Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
  var box = Snap._.box,
      is = Snap.is,
      firstLetter = /^[^a-z]*([tbmlrc])/i,
      toString = function toString() {
    return "T" + this.dx + "," + this.dy;
  };
  /*\
   * Element.getAlign
   [ method ]
   **
   * Returns shift needed to align the element relatively to given element.
   * If no elements specified, parent `<svg>` container will be used.
   - el (object) @optional alignment element
   - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
   = (object|string) Object in format `{dx: , dy: }` also has a string representation as a transformation string
   > Usage
   | el.transform(el.getAlign(el2, "top"));
   * or
   | var dy = el.getAlign(el2, "top").dy;
  \*/


  Element.prototype.getAlign = function (el, way) {
    if (way == null && is(el, "string")) {
      way = el;
      el = null;
    }

    el = el || this.paper;
    var bx = el.getBBox ? el.getBBox() : box(el),
        bb = this.getBBox(),
        out = {};
    way = way && way.match(firstLetter);
    way = way ? way[1].toLowerCase() : "c";

    switch (way) {
      case "t":
        out.dx = 0;
        out.dy = bx.y - bb.y;
        break;

      case "b":
        out.dx = 0;
        out.dy = bx.y2 - bb.y2;
        break;

      case "m":
        out.dx = 0;
        out.dy = bx.cy - bb.cy;
        break;

      case "l":
        out.dx = bx.x - bb.x;
        out.dy = 0;
        break;

      case "r":
        out.dx = bx.x2 - bb.x2;
        out.dy = 0;
        break;

      default:
        out.dx = bx.cx - bb.cx;
        out.dy = 0;
        break;
    }

    out.toString = toString;
    return out;
  };
  /*\
   * Element.align
   [ method ]
   **
   * Aligns the element relatively to given one via transformation.
   * If no elements specified, parent `<svg>` container will be used.
   - el (object) @optional alignment element
   - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
   = (object) this element
   > Usage
   | el.align(el2, "top");
   * or
   | el.align("middle");
  \*/


  Element.prototype.align = function (el, way) {
    return this.transform("..." + this.getAlign(el, way));
  };
}); // Copyright (c) 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

snap_svg_Snap.plugin(function (Snap, Element, Paper, glob) {
  // Colours are from https://www.materialui.co
  var red = "#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000",
      pink = "#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162",
      purple = "#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF",
      deeppurple = "#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA",
      indigo = "#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE",
      blue = "#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF",
      lightblue = "#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA",
      cyan = "#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4",
      teal = "#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5",
      green = "#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853",
      lightgreen = "#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17",
      lime = "#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00",
      yellow = "#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600",
      amber = "#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00",
      orange = "#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00",
      deeporange = "#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00",
      brown = "#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723",
      grey = "#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121",
      bluegrey = "#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238";
  /*\
   * Snap.mui
   [ property ]
   **
   * Contain Material UI colours.
   | Snap().rect(0, 0, 10, 10).attr({fill: Snap.mui.deeppurple, stroke: Snap.mui.amber[600]});
   # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
  \*/

  Snap.mui = {};
  /*\
   * Snap.flat
   [ property ]
   **
   * Contain Flat UI colours.
   | Snap().rect(0, 0, 10, 10).attr({fill: Snap.flat.carrot, stroke: Snap.flat.wetasphalt});
   # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
  \*/

  Snap.flat = {};

  function saveColor(colors) {
    colors = colors.split(/(?=#)/);
    var color = new String(colors[5]);
    color[50] = colors[0];
    color[100] = colors[1];
    color[200] = colors[2];
    color[300] = colors[3];
    color[400] = colors[4];
    color[500] = colors[5];
    color[600] = colors[6];
    color[700] = colors[7];
    color[800] = colors[8];
    color[900] = colors[9];

    if (colors[10]) {
      color.A100 = colors[10];
      color.A200 = colors[11];
      color.A400 = colors[12];
      color.A700 = colors[13];
    }

    return color;
  }

  Snap.mui.red = saveColor(red);
  Snap.mui.pink = saveColor(pink);
  Snap.mui.purple = saveColor(purple);
  Snap.mui.deeppurple = saveColor(deeppurple);
  Snap.mui.indigo = saveColor(indigo);
  Snap.mui.blue = saveColor(blue);
  Snap.mui.lightblue = saveColor(lightblue);
  Snap.mui.cyan = saveColor(cyan);
  Snap.mui.teal = saveColor(teal);
  Snap.mui.green = saveColor(green);
  Snap.mui.lightgreen = saveColor(lightgreen);
  Snap.mui.lime = saveColor(lime);
  Snap.mui.yellow = saveColor(yellow);
  Snap.mui.amber = saveColor(amber);
  Snap.mui.orange = saveColor(orange);
  Snap.mui.deeporange = saveColor(deeporange);
  Snap.mui.brown = saveColor(brown);
  Snap.mui.grey = saveColor(grey);
  Snap.mui.bluegrey = saveColor(bluegrey);
  Snap.flat.turquoise = "#1abc9c";
  Snap.flat.greensea = "#16a085";
  Snap.flat.sunflower = "#f1c40f";
  Snap.flat.orange = "#f39c12";
  Snap.flat.emerland = "#2ecc71";
  Snap.flat.nephritis = "#27ae60";
  Snap.flat.carrot = "#e67e22";
  Snap.flat.pumpkin = "#d35400";
  Snap.flat.peterriver = "#3498db";
  Snap.flat.belizehole = "#2980b9";
  Snap.flat.alizarin = "#e74c3c";
  Snap.flat.pomegranate = "#c0392b";
  Snap.flat.amethyst = "#9b59b6";
  Snap.flat.wisteria = "#8e44ad";
  Snap.flat.clouds = "#ecf0f1";
  Snap.flat.silver = "#bdc3c7";
  Snap.flat.wetasphalt = "#34495e";
  Snap.flat.midnightblue = "#2c3e50";
  Snap.flat.concrete = "#95a5a6";
  Snap.flat.asbestos = "#7f8c8d";
  /*\
   * Snap.importMUIColors
   [ method ]
   **
   * Imports Material UI colours into global object.
   | Snap.importMUIColors();
   | Snap().rect(0, 0, 10, 10).attr({fill: deeppurple, stroke: amber[600]});
   # For colour reference: <a href="https://www.materialui.co">https://www.materialui.co</a>.
  \*/

  Snap.importMUIColors = function () {
    for (var color in Snap.mui) {
      if (Snap.mui.hasOwnProperty(color)) {
        window[color] = Snap.mui[color];
      }
    }
  };
});
snap_svg_Snap.mina = Snap_mina;
/* harmony default export */ var snap_svg = (snap_svg_Snap);

// CONCATENATED MODULE: ./src/Utils/Controller.js













function Controller_createSuper(Derived) { var hasNativeReflectConstruct = Controller_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Controller_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


/**
 * 控制器
 * @class
 * @extends Event
 */

var Controller_Controller = /*#__PURE__*/function (_Event) {
  inherits_default()(Controller, _Event);

  var _super = Controller_createSuper(Controller);

  function Controller(editor) {
    var _this;

    classCallCheck_default()(this, Controller);

    _this = _super.call(this);

    defineProperty_default()(assertThisInitialized_default()(_this), "onWheel", function (e) {
      if (_this.status === 'disabled') {
        return;
      }

      e.preventDefault();

      if (e.ctrlKey) {
        // 双指
        var newScale = Math.max(1 - e.deltaY * _this.scaleRatio, 0.1);

        _this.zoom(newScale, e.offsetX, e.offsetY);
      } else {
        _this.pan(-e.deltaX, -e.deltaY);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "panStart", function (ev) {
      if (ev.target.tagName !== "svg" || _this.status === 'disabled') {
        return;
      }

      ev.preventDefault();
      _this.startPosition = {
        x: ev.clientX,
        y: ev.clientY
      };
      _this.matrix = _this.svg.mousemove(_this.panning);
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "panStop", function (ev) {
      ev.preventDefault();

      _this.svg.unmousemove(_this.panning); // this.svg.unmouseup(this.panStop);


      _this.editor.fire("panEnd", {
        event: ev
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "zoom", function (newScale) {
      var cx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var cy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      _this.scale *= newScale;
      var dis = [(cx - _this.x) * (newScale - 1), (cy - _this.y) * (newScale - 1)];
      _this.x -= dis[0];
      _this.y -= dis[1];

      _this.update();

      _this.editor.fire("zoom", {
        scale: newScale
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "zoomTo", function (newScale) {
      _this.scale = newScale;

      _this.update();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "transform", function (newScale) {
      var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      _this.scale = newScale;
      _this.x = x;
      _this.y = y;

      _this.update();

      _this.editor.fire("panning");

      _this.editor.fire("zoom");
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "panning", function (ev) {
      ev.preventDefault();
      var p1 = {
        x: ev.clientX,
        y: ev.clientY
      };
      var p2 = _this.startPosition;
      var deltaP = [p1.x - p2.x, p1.y - p2.y];
      _this.x += deltaP[0];
      _this.y += deltaP[1];

      _this.update();

      _this.startPosition = p1;

      _this.editor.fire("panning", {
        event: ev
      });
    });

    _this.editor = editor;
    _this.paper = editor.paper;
    _this.svg = editor.svg;
    /**
     * 缩放比例系数
     * @type {number}
     */

    _this.scaleRatio = 0.01;
    _this.scale = 1;
    _this.x = 0;
    _this.y = 0;
    /**
     * 所有吸附节点
     */

    _this.achors = [];

    _this.listenEvents();

    return _this;
  }
  /**
   * 自适应,支持
   */


  createClass_default()(Controller, [{
    key: "autoFit",
    value: function autoFit() {
      var _this2 = this;

      var center = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var vertical = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var data = this.editor.schema.getData();
      this.x = 0;
      this.y = 0;
      this.paper.transform("scale(".concat(this.scale, ")"));
      var width = this.editor.dom.node.clientWidth;
      var height = this.editor.dom.node.clientHeight;
      var bbox = this.paper.getBBox();
      var dx = ((width - bbox.width) / 2 - bbox.x) / this.scale;
      var dy = ((height - bbox.height) / 2 - bbox.y) / this.scale;
      data.nodes.forEach(function (node) {
        if (center) node.x += dx;
        if (vertical) node.y += dy;
      });
      this.editor.schema.setData(data);
      this.editor.fire("autofit", {
        data: data
      });
      setTimeout(function () {
        _this2.paper.node.style.transition = null;
      }, 200);
    }
  }, {
    key: "listenEvents",
    value: function listenEvents() {
      this.svg.mousedown(this.panStart);
      this.svg.mouseup(this.panStop);
      this.svg.node.addEventListener('mouseleave', this.panStop);
      this.svg.node.addEventListener("wheel", this.onWheel);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.svg.unmousedown(this.panStart);
      this.svg.node.removeEventListener('mouseleave', this.panStop);
      this.svg.node.removeEventListener("wheel", this.onWheel);
    }
    /**
     * 禁用滚轮缩放
     */

  }, {
    key: "disableWheel",
    value: function disableWheel() {
      this.svg.node.removeEventListener("wheel", this.onWheel);
    }
    /**
     * 禁用鼠标移动
     */

  }, {
    key: "disablePan",
    value: function disablePan() {
      this.svg.unmousedown(this.panStart);
    }
    /**
     * 移动到指定位置
     * @param  {number} x
     * @param  {number} y
     */

  }, {
    key: "pan",
    value: function pan(x, y) {
      this.x += x;
      this.y += y;
      this.update();
      this.editor.fire("panning");
    }
    /**
     * 移动到指定位置
     * @param {*} x 
     * @param {*} y 
     */

  }, {
    key: "moveTo",
    value: function moveTo(x, y) {
      this.x = x;
      this.y = y;
      this.update();
    }
  }, {
    key: "disable",
    value: function disable() {
      this.status = 'disabled';
    }
  }, {
    key: "enable",
    value: function enable() {
      this.status = 'enable';
    }
    /**
     * 更新最新的matrix
     */

  }, {
    key: "update",
    value: function update() {
      this.paper.transform("matrix(".concat(this.scale, ",0,0,").concat(this.scale, ",").concat(this.x, ",").concat(this.y, ")"));
    }
  }]);

  return Controller;
}(Utils_Event);

/* harmony default export */ var Utils_Controller = (Controller_Controller);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(322);

// CONCATENATED MODULE: ./src/Model/History.js






/**
 * 历史记录堆栈管理类
 * @class
 */
var History_History = /*#__PURE__*/function () {
  /**
   * @prop {number} index
   */

  /**
   * @prop {array} schemaList
   */
  function History(schema) {
    classCallCheck_default()(this, History);

    defineProperty_default()(this, "index", -1);

    defineProperty_default()(this, "schemaList", []);

    this.schema = schema;
  }
  /**
   * @param  {} data
   */


  createClass_default()(History, [{
    key: "push",
    value: function push(data) {
      if (this.index !== -1 && this.index < this.schemaList.length - 1) {
        // 删除后面会被覆盖的历史记录
        this.schemaList.splice(this.index + 1, this.schemaList.length - this.index - 1);
      }

      this.schemaList.push(JSON.stringify(data).trim(" "));
      this.index++;
      this.schema.editor.fire("change");
    }
  }, {
    key: "pop",
    value: function pop() {
      this.schemaList.pop();
      this.index--;
      this.schema.editor.fire("change");
    }
    /**
     * @param  {} index
     * @param  {} data
     */

  }, {
    key: "replace",
    value: function replace(index, data) {
      this.schemaList[this.index + index] = data;
    } // 重做

  }, {
    key: "redo",
    value: function redo() {
      this.schema.data = JSON.parse(this.schemaList[++this.index]);
      this.schema.editor.fire("change");
    } // 撤销

  }, {
    key: "undo",
    value: function undo() {
      this.schema.data = JSON.parse(this.schemaList[--this.index]);
      this.schema.editor.fire("change");
    }
  }, {
    key: "clear",
    value: function clear() {
      this.schemaList = [];
      this.index = -1;
    }
  }]);

  return History;
}();

/* harmony default export */ var Model_History = (History_History);
// EXTERNAL MODULE: ./node_modules/dagre/index.js
var dagre = __webpack_require__(170);
var dagre_default = /*#__PURE__*/__webpack_require__.n(dagre);

// CONCATENATED MODULE: ./src/Model/Schema.js












function Schema_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Schema_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Schema_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Schema_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












/**
 * @class
 */

var Schema_Schema = /*#__PURE__*/function () {
  /**
   * 
   * @param {MMEditor} editor - MMEditor实例
   */
  function Schema(editor) {
    classCallCheck_default()(this, Schema);

    this.data = {
      nodesMap: [],
      linesMap: []
    };
    /**
    * @property {MMEditor} editor
    */

    this.editor = editor;
    /**
     * @property {History} history
     */

    this.history = new Model_History(this);
    this.listenEvents();
  }
  /**
   * 格式化有向图
   */


  createClass_default()(Schema, [{
    key: "format",
    value: function format() {
      var nodes = this.editor.graph.node.nodes;
      var lines = this.editor.graph.line.lines;
      var res = {
        nodes: [],
        lines: []
      };
      var g = new dagre_default.a.graphlib.Graph();
      var option = Object.assign({
        nodesep: 50,
        rankdir: 'TB',
        ranksep: 50,
        align: 'UL'
      }, this.editor.config.dagreOption);
      g.setGraph(option);
      var _this$editor$config$d = this.editor.config.dagreOption.center,
          center = _this$editor$config$d === void 0 ? true : _this$editor$config$d;
      g.setDefaultEdgeLabel(function () {
        return {};
      });

      for (var key in nodes) {
        var node = nodes[key];
        var data = node.data;

        if (!data.width || !data.height) {
          var bbox = node.getBBox();
          data.width = bbox.width;
          data.height = bbox.height;
        }

        g.setNode(key, Schema_objectSpread({}, data));
      }

      for (var _key in lines) {
        var line = lines[_key];
        var _data = line.data;
        g.setEdge(_data.from, _data.to);
        res.lines.push(_data);
      }

      dagre_default.a.layout(g);
      g.nodes().forEach(function (key) {
        var nodeData = g.node(key);

        if (center) {
          if (option.rankdir.indexOf('T') < 0) {
            // 左右布局
            nodeData.y -= nodeData.height / 2;
          } else {
            //上下布局
            nodeData.x -= nodeData.width / 2;
          }
        }

        res.nodes.push(nodeData);
      }); // 触发format事件，保存历史

      this.setData(res);
      /**
       * @event MMEditor#format
       * @type {Object}
       * @property {Object} data
       */

      this.editor.fire("format", {
        data: res
      });
    }
  }, {
    key: "listenEvents",
    value: function listenEvents() {
      var _this = this;

      var historyChangeEvents = ["node:change", "node:add", "line:change", "line:add", "line:remove", "delete"];
      historyChangeEvents.forEach(function (event) {
        _this.editor.graph.on(event, function () {
          _this.history.push(_this.getNowDataMap());
        }, 9999);
      });
    }
    /**
     * 历史入栈最新数据
     */

  }, {
    key: "pushHistory",
    value: function pushHistory() {
      this.history.push(this.getNowDataMap());
    }
    /**
     * 历史出栈
     */

  }, {
    key: "popHistory",
    value: function popHistory() {
      this.history.pop();
    }
    /**
     * 获取当前最新的map
     */

  }, {
    key: "getNowDataMap",
    value: function getNowDataMap() {
      var nodes = this.editor.graph.node.nodes;
      var lines = this.editor.graph.line.lines;
      var nodesMap = {};
      var linesMap = {};

      for (var uuid in nodes) {
        nodesMap[uuid] = nodes[uuid].data;
      }

      for (var _uuid in lines) {
        linesMap[_uuid] = lines[_uuid].data;
      }

      this.data = {
        nodesMap: nodesMap,
        linesMap: linesMap
      };
      return this.data;
    }
    /**
     * @param {flowData} data
     */

  }, {
    key: "setData",
    value: function () {
      var _setData = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(data) {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.parseData(data); // 解析数据

                this.editor.graph.clearGraph();
                _context.next = 4;
                return this.renderData(data);

              case 4:
                /**
                 * @event MMEditor#load
                 * @type {Object}
                 */
                this.editor.fire("load", data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setData(_x) {
        return _setData.apply(this, arguments);
      }

      return setData;
    }()
    /**
     * @param  {flowData} data
     */

  }, {
    key: "setInitData",
    value: function () {
      var _setInitData = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(data) {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.setData(data);

              case 2:
                this.history.clear();
                this.history.push(this.data);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setInitData(_x2) {
        return _setInitData.apply(this, arguments);
      }

      return setInitData;
    }()
    /**
     * 解析数据
     * @param {flowData} data
     */

  }, {
    key: "parseData",
    value: function parseData(_ref) {
      var _ref$nodes = _ref.nodes,
          nodes = _ref$nodes === void 0 ? [] : _ref$nodes,
          _ref$lines = _ref.lines,
          lines = _ref$lines === void 0 ? [] : _ref$lines;
      var nodesMap = {};
      var linesMap = {};
      nodes.forEach(function (item) {
        item.x = parseInt(item.x, 10);
        item.y = parseInt(item.y, 10);
        nodesMap[item.uuid] = item;
      });
      lines.forEach(function (item) {
        var from = item.from,
            to = item.to,
            _item$fromPoint = item.fromPoint,
            fromPoint = _item$fromPoint === void 0 ? 0 : _item$fromPoint,
            _item$toPoint = item.toPoint,
            toPoint = _item$toPoint === void 0 ? 0 : _item$toPoint,
            uuid = item.uuid;
        linesMap[uuid ? uuid : Object(external_uuid_["v1"])()] = item;
      });
      this.data = {
        nodesMap: nodesMap,
        linesMap: linesMap
      };
    }
    /**
     * 渲染数据
     */

  }, {
    key: "renderData",
    value: function () {
      var _renderData = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.editor.graph.render(this.data);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function renderData() {
        return _renderData.apply(this, arguments);
      }

      return renderData;
    }()
    /**
     * 重做
     */

  }, {
    key: "redo",
    value: function () {
      var _redo = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.editor.graph.clearGraph();
                this.history.redo();
                _context4.next = 4;
                return this.renderData(this.data);

              case 4:
                this.editor.fire("redo");

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function redo() {
        return _redo.apply(this, arguments);
      }

      return redo;
    }()
    /**
     * 撤销
     */

  }, {
    key: "undo",
    value: function () {
      var _undo = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.editor.graph.clearGraph();
                this.history.undo();
                _context5.next = 4;
                return this.renderData(this.data);

              case 4:
                this.editor.fire("undo");

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function undo() {
        return _undo.apply(this, arguments);
      }

      return undo;
    }()
    /**
     * 获取数据
     */

  }, {
    key: "getData",
    value: function getData() {
      var _this$data = this.data,
          nodesMap = _this$data.nodesMap,
          linesMap = _this$data.linesMap;
      return {
        nodes: Object.keys(nodesMap).map(function (key) {
          return nodesMap[key];
        }),
        lines: Object.keys(linesMap).map(function (key) {
          return linesMap[key];
        })
      };
    }
  }]);

  return Schema;
}();

/* harmony default export */ var Model_Schema = (Schema_Schema);
// EXTERNAL MODULE: external "canvg"
var external_canvg_ = __webpack_require__(262);
var external_canvg_default = /*#__PURE__*/__webpack_require__.n(external_canvg_);

// CONCATENATED MODULE: ./src/Plugins/Minimap.js
















 // 使用html

/**
 * @class
 */

var Minimap_MiniMap = /*#__PURE__*/function () {
  function MiniMap(editor) {
    var _this = this;

    classCallCheck_default()(this, MiniMap);

    defineProperty_default()(this, "resetDrag", function () {
      var _this$editor$controll = _this.editor.controller,
          x = _this$editor$controll.x,
          y = _this$editor$controll.y,
          scale = _this$editor$controll.scale;
      var padding = _this.padding;
      if (!_this.svgBBox) return;
      /**
       * 这里虽然坐标整体都缩小了10倍，但是用户画布放大的scale倍，在这个坐标系下永远都是1倍，不会随着用户放大而放大，
       * 所以这里求得的左上角便宜坐标实际上还是标准倍率吸下的，需要再放大用户的倍率才能得到最终的效果，
       * 用户画布=》缩小10倍画布到用户scale*this.sclae=》还原回基准this.scale
       */

      _this.drag.node.style.left = -x / scale / _this.scale + padding + 'px';
      _this.drag.node.style.top = -y / scale / _this.scale + padding + 'px';
      _this.dragBBox = {
        width: _this.svgBBox.width / _this.scale / scale,
        height: _this.svgBBox.height / _this.scale / scale
      };
      _this.drag.node.style.width = _this.dragBBox.width + 'px';
      _this.drag.node.style.height = _this.dragBBox.height + 'px'; // 这里需要考虑width太大的情况，这种时候需要引入一个新变量把图的缩小倍数变小,this.limitScale
    });

    defineProperty_default()(this, "render", function () {
      clearTimeout(_this.timeout);
      _this.timeout = setTimeout( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.renderCanvas();

                _this.resetDrag();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })), 200);
    });

    this.editor = editor;
    var _editor$config$minima = editor.config.minimap,
        minimap = _editor$config$minima === void 0 ? [] : _editor$config$minima;
    this.width = minimap.width || 160;
    this.height = minimap.height || 160;
    this.padding = minimap.padding || 20;
    this.scale = minimap.scale || 10;
  }

  createClass_default()(MiniMap, [{
    key: "init",
    value: function init() {
      var dom = "<div class=\"mm-minimap\" >\n\t\t\t<canvas width=\"100%\" height=\"100%\"></canvas>\n\t\t\t<div class=\"drag-rect\" style=\"left:".concat(this.padding, "px;top:").concat(this.padding, "px\">\n\t\t\t\t<div class=\"drag-point\"></div>\n\t\t\t</div>\n\t\t</div>");
      var can = document.createElement("div");
      can.innerHTML = dom;
      this.container = can.querySelector(".mm-minimap");
      this.editor.container.append(this.container);
      this.canvas = this.container.querySelector("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.drag = snap_svg(this.container.querySelector(".drag-rect"));
      this.dragPoint = snap_svg(this.container.querySelector(".drag-point"));
      var bbox = this.container.getBoundingClientRect();
      this.width = bbox.width;
      this.height = bbox.height;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.initEvent();
    }
  }, {
    key: "initEvent",
    value: function initEvent() {
      var _this2 = this;

      var controller = this.editor.controller;
      this.canvas.addEventListener('click', function (e) {
        var left = e.offsetX - _this2.dragBBox.width / 2;
        var top = e.offsetY - _this2.dragBBox.height / 2;
        _this2.drag.node.style.left = left + "px";
        _this2.drag.node.style.top = top + "px";
        controller.moveTo(-(left - _this2.padding) * _this2.scale * controller.scale, -(top - _this2.padding) * _this2.scale * controller.scale);

        _this2.resetDrag();
      });
      this.drag.drag(function (dx, dy) {
        var dleft = dx + _this2.dragStart.x;
        var dtop = dy + _this2.dragStart.y;
        var left = Math.min(Math.max(dleft, 0), _this2.width - _this2.dragBBox.width + _this2.padding * 2);
        var top = Math.min(Math.max(dtop, 0), _this2.height - _this2.dragBBox.height + _this2.padding * 2);
        _this2.drag.node.style.left = left + "px";
        _this2.drag.node.style.top = top + "px";
        controller.moveTo(-(left - _this2.padding) * _this2.scale * controller.scale, -(top - _this2.padding) * _this2.scale * controller.scale);
      }, function () {
        var style = _this2.drag.node.style;
        _this2.dragStart = {
          x: style.left ? parseInt(style.left.split("px")[0]) : 0,
          y: style.top ? parseInt(style.top.split("px")[0]) : 0
        };
      });
      this.dragPoint.drag(function (dx, dy) {
        var ratio = _this2.svgBBox.width / _this2.svgBBox.height;
        var height = Math.max(dy + _this2.dragStartBBox.height, 10);
        var width = height * ratio;
        _this2.drag.node.style.width = width + 'px';
        _this2.drag.node.style.height = height + 'px';
        controller.scale = _this2.svgBBox.width / (width * _this2.scale);
        controller.update();
      }, function (x, y, e) {
        e.preventDefault();
        e.stopPropagation();
        _this2.dragStartBBox = _this2.drag.node.getBoundingClientRect();
        return false;
      });
      this.editor.on("change", this.render);
      this.editor.on("format", this.render);
      this.editor.on("autofit", this.resetDrag);
      this.editor.on("panning", this.resetDrag);
      this.editor.on("zoom", this.resetDrag);
    }
    /**
     * 重新计算拖拽框位置
     */

  }, {
    key: "renderCanvas",
    value: function () {
      var _renderCanvas = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var node, svgBBox, images, matrix, svg, paperBBox, x, y, m;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                node = this.editor.svg.node;
                svgBBox = node.getBoundingClientRect();
                images = node.querySelectorAll("image") || [];
                images.forEach(function (img) {
                  img.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
                });
                matrix = this.editor.paper.node.getAttribute('transform');
                this.editor.paper.node.setAttribute('transform', '');
                svg = node.innerHTML;
                this.editor.paper.node.setAttribute('transform', matrix);
                paperBBox = this.editor.paper.node.getBBox();
                this.scale = this.limitScale || Math.max(paperBBox.width / (this.width - this.padding * 2), paperBBox.height / (this.height - this.padding * 2), 10);
                x = this.padding;
                y = this.padding;
                m = new snap_svg.Matrix();
                m.translate(x, y);
                m.scale(1 / this.scale);
                this.svgBBox = svgBBox;
                _context2.next = 18;
                return external_canvg_default.a.fromString(this.ctx, "<g transform=\"".concat(m.toString(), "\" class=\"minimap-graph\">").concat(svg, "</g>"), {
                  ignoreMouse: true,
                  ignoreDimensions: true,
                  ignoreAnimation: true
                });

              case 18:
                this.converting = _context2.sent;
                this.converting.render();

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function renderCanvas() {
        return _renderCanvas.apply(this, arguments);
      }

      return renderCanvas;
    }()
  }, {
    key: "destroy",
    value: function destroy() {
      clearTimeout(this.timeout);
      this.editor.off("change", this.render);
      this.editor.off("format", this.render);
      this.editor.off("autofit", this.resetDrag);
      this.editor.off("panning", this.resetDrag);
      this.editor.off("zoom", this.resetDrag);
      this.drag.undrag();
      this.dragPoint.undrag();
      this.drag.remove();
      this.dragPoint.remove();
    }
  }]);

  return MiniMap;
}();

/* harmony default export */ var Minimap = (Minimap_MiniMap);
// CONCATENATED MODULE: ./src/Utils/util.js
/**
 * @namespace Utils
 */
/* harmony default export */ var util = ({
  /**
   * 获取最新的domRect
   * @instance 
   * @memberof Utils
   * @param {*} str 
   * @param {*} callback 
   * @returns {DOMRect}
   */
  getDOMRect: function getDOMRect(str, callback) {
    var div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.visibility = 'hidden';
    div.innerHTML = str;
    document.body.appendChild(div);
    var rect = div.getBoundingClientRect(); // document.body.removeChild(div);

    return rect;
  },
  getSVGBBox: function getSVGBBox() {}
});
// EXTERNAL MODULE: ./src/index.less
var src = __webpack_require__(500);

// CONCATENATED MODULE: ./src/MMEditor.js









function MMEditor_createSuper(Derived) { var hasNativeReflectConstruct = MMEditor_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function MMEditor_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









/**
 * @class 
 * @extends Event
 */

var MMEditor_MMEditor = /*#__PURE__*/function (_Event) {
  inherits_default()(MMEditor, _Event);

  var _super = MMEditor_createSuper(MMEditor);

  // /**
  //  * 初始化配置
  //  * @param {Object} config - 初始化配置.
  //  * @param {boolean} config.hideAchor - 是否隐藏磁吸.
  //  * @param {boolean} config.hideAchorLine - 是否隐藏磁吸线
  //  * @param {string} config.anchorDistance - 磁吸距离
  //  * @param {boolean} config.showBackGrid - 是否展示网格
  //  * @param {boolean} config.showMiniMap - 是否隐藏小地图
  //  * @param {string} config.mode - 模式是否只读，可选 view
  //  * @param {Object} config.dagreOption - dagre的配置
  //  */
  function MMEditor(config) {
    var _this;

    classCallCheck_default()(this, MMEditor);

    _this = _super.call(this);
    _this.config = Object.assign({
      hideAchor: false,
      hideAchorLine: false,
      anchorDistance: 5,
      showBackGrid: true,
      showMiniMap: false,
      mode: undefined,
      dagreOption: {}
    }, config);
    if (!config.dom) return possibleConstructorReturn_default()(_this);
    /**
    * @property {HTMLElement} dom 容器
    */

    _this.dom = _this.initDom(config.dom);
    /**
     * @property {Snap.Element} svg
     */

    _this.svg = snap_svg(_this.dom.select("svg"));
    /**
     * @property {Snap.Element} paper
     */

    _this.paper = _this.svg.g();

    _this.paper.addClass("mm-editor-paper");
    /**
     * @property {HTMLElement} container 实例dom
     */


    _this.container = _this.dom.select(".mm-editor");

    _this.resize();
    /**
     * @property {Graph} graph 画布
     */


    _this.graph = new Shape_Graph(assertThisInitialized_default()(_this));
    /**
    * @property {Controller} controller 控制器
    */

    _this.controller = new Utils_Controller(assertThisInitialized_default()(_this));
    /**
     * @property {Schema} schema 数据管理器
     */

    _this.schema = new Model_Schema(assertThisInitialized_default()(_this));

    if (_this.config.showMiniMap) {
      /**
       * @property {Minimap?} minimap 小地图
       */
      _this.minimap = new Minimap(assertThisInitialized_default()(_this));

      _this.minimap.init();
    }

    return _this;
  }

  createClass_default()(MMEditor, [{
    key: "initDom",
    value: function initDom(dom) {
      dom.innerHTML = "<div class=\"mm-editor ".concat(this.config.mode || '', "\" >\n\t\t\t\t<div class=\"mm-editor-back\" ></div>\n\t\t\t\t<div class=\"mm-editor-svg\" >\n\t\t\t\t\t<svg  />\n\t\t\t\t</div>\n\t\t\t</div>");
      return snap_svg(dom);
    }
    /**
     * 重新布局
     */

  }, {
    key: "resize",
    value: function resize() {
      var _this$config = this.config,
          width = _this$config.width,
          height = _this$config.height;
      this.svg.attr({
        width: width || "100%",
        height: height || "100%"
      });
    }
    /**
     * 销毁函数
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.minimap && this.minimap.destroy();
      this.graph.destroy();
      this.graph = undefined;
      this.svg.remove();
      this.dom.innerHTML = undefined;
      this.controller.clear();
      this.controller = undefined;
      this.schema = undefined;
      this.clear();
    }
    /**
     * 重绘 
     */

  }, {
    key: "repaint",
    value: function repaint() {
      this.graph.clearGraph();
      this.graph.render(this.schema.data);
    }
  }]);

  return MMEditor;
}(Utils_Event);

MMEditor_MMEditor.Event = Utils_Event;
MMEditor_MMEditor.Schema = Model_Schema;
MMEditor_MMEditor.Snap = snap_svg;
MMEditor_MMEditor.Graph = Shape_Graph;
MMEditor_MMEditor.Controller = Utils_Controller;
MMEditor_MMEditor.Util = util;
/* harmony default export */ var src_MMEditor = __webpack_exports__["default"] = (MMEditor_MMEditor);


/***/ })
/******/ ])["default"];
});