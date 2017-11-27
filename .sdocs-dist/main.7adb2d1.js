/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************************************************!*\
  !*** ./node_modules/vue-loader/lib/component-normalizer.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
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


/***/ }),
/* 2 */
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(/*! ./listToStyles */ 33)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/*!*********************************!*\
  !*** ../sources/utils/mixin.js ***!
  \*********************************/
/*! exports provided: createMixins, optionMixins, optionsMixins, elementMixins */
/*! exports used: createMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createMixins;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_common_js__ = __webpack_require__(/*! ../mixins/common.js */ 73);


function createMixins(types) {
  let ret = {
    props: {},
    computed: {}
  };
  let hasProps = false;
  let hasComputed = false;
  for (let it of types) {
    if (__WEBPACK_IMPORTED_MODULE_0__mixins_common_js__["a" /* default */].props[it]) {
      ret.props[it] = __WEBPACK_IMPORTED_MODULE_0__mixins_common_js__["a" /* default */].props[it];
      hasProps = true;
    }
    let modify = `${it}Modifier`;
    if (__WEBPACK_IMPORTED_MODULE_0__mixins_common_js__["a" /* default */].computed[modify]) {
      ret.computed[modify] = __WEBPACK_IMPORTED_MODULE_0__mixins_common_js__["a" /* default */].computed[modify];
      hasComputed = true;
    }
  }
  if (!hasProps) {
    delete ret.props;
  }
  if (!hasComputed) {
    delete ret.computed;
  }

  return ret;
}

const optionMixins = createMixins(['textField', 'valueField', 'value']);
/* unused harmony export optionMixins */

const optionsMixins = createMixins(['textField', 'valueField', 'options', 'value']);
/* unused harmony export optionsMixins */

const elementMixins = createMixins(['color', 'size', 'state', 'disabled']);
/* unused harmony export elementMixins */


/***/ }),
/* 4 */
/*!************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_duplex.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.



/*<replacement>*/

var processNextTick = __webpack_require__(/*! process-nextick-args */ 10);
/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var util = __webpack_require__(/*! core-util-is */ 7);
util.inherits = __webpack_require__(/*! inherits */ 8);
/*</replacement>*/

var Readable = __webpack_require__(/*! ./_stream_readable */ 20);
var Writable = __webpack_require__(/*! ./_stream_writable */ 15);

util.inherits(Duplex, Readable);

var keys = objectKeys(Writable.prototype);
for (var v = 0; v < keys.length; v++) {
  var method = keys[v];
  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  processNextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  processNextTick(cb, err);
};

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

/***/ }),
/* 5 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 6 */
/*!******************************************************************!*\
  !*** /Users/charlie/code/s-docs/node_modules/process/browser.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 7 */
/*!***********************************************!*\
  !*** ./node_modules/core-util-is/lib/util.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../../s-docs/node_modules/buffer/index.js */ 11).Buffer))

/***/ }),
/* 8 */
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 9 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/*!****************************************************!*\
  !*** ./node_modules/process-nextick-args/index.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (!process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = nextTick;
} else {
  module.exports = process.nextTick;
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../s-docs/node_modules/process/browser.js */ 6)))

/***/ }),
/* 11 */
/*!***************************************************************!*\
  !*** /Users/charlie/code/s-docs/node_modules/buffer/index.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ 86)
var ieee754 = __webpack_require__(/*! ieee754 */ 87)
var isArray = __webpack_require__(/*! isarray */ 19)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ 9)))

/***/ }),
/* 12 */
/*!****************************************************************!*\
  !*** /Users/charlie/code/s-docs/node_modules/events/events.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 13 */
/*!**********************************************************!*\
  !*** ./node_modules/readable-stream/readable-browser.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./lib/_stream_readable.js */ 20);
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(/*! ./lib/_stream_writable.js */ 15);
exports.Duplex = __webpack_require__(/*! ./lib/_stream_duplex.js */ 4);
exports.Transform = __webpack_require__(/*! ./lib/_stream_transform.js */ 24);
exports.PassThrough = __webpack_require__(/*! ./lib/_stream_passthrough.js */ 95);


/***/ }),
/* 14 */
/*!*******************************************!*\
  !*** ./node_modules/safe-buffer/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(/*! buffer */ 11)
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),
/* 15 */
/*!**************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_writable.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, setImmediate, global) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.



/*<replacement>*/

var processNextTick = __webpack_require__(/*! process-nextick-args */ 10);
/*</replacement>*/

module.exports = Writable;

/* <replacement> */
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = __webpack_require__(/*! core-util-is */ 7);
util.inherits = __webpack_require__(/*! inherits */ 8);
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: __webpack_require__(/*! util-deprecate */ 94)
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(/*! ./internal/streams/stream */ 21);
/*</replacement>*/

/*<replacement>*/
var Buffer = __webpack_require__(/*! safe-buffer */ 14).Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*</replacement>*/

var destroyImpl = __webpack_require__(/*! ./internal/streams/destroy */ 22);

util.inherits(Writable, Stream);

function nop() {}

function WritableState(options, stream) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ 4);

  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // if _final has been called
  this.finalCalled = false;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // has it been destroyed
  this.destroyed = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ 4);

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;

    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  processNextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    processNextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = _isUint8Array(chunk) && !state.objectMode;

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    processNextTick(cb, er);
    // this can emit finish, and it will always happen
    // after error
    processNextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;
    if (err) {
      stream.emit('error', err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      processNextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }
  if (state.corkedRequestsFree) {
    state.corkedRequestsFree.next = corkReq;
  } else {
    state.corkedRequestsFree = corkReq;
  }
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  get: function () {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});

Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../../s-docs/node_modules/process/browser.js */ 6), __webpack_require__(/*! ./../../../../../s-docs/node_modules/timers-browserify/main.js */ 92).setImmediate, __webpack_require__(/*! ./../../../../../s-docs/node_modules/webpack/buildin/global.js */ 9)))

/***/ }),
/* 16 */
/*!*****************************************!*\
  !*** ../docs_lib/MaybeLongCodeMixin.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    _initMaybeLongCode() {
      let elsLongDemoBox = this.$el.querySelectorAll('.__maybe-long-code');

      if (elsLongDemoBox && elsLongDemoBox.length) {
        Array.from(elsLongDemoBox).map(el => {
          do {
            el = el.previousSibling;
            if (el && el.nodeType === 1 && el.tagName.toLowerCase() === 'pre') {
              return el;
            }
          } while (el);
        }).filter(n => n != null).forEach(el => {
          el.classList.add('__too-long-hl-code');
          el.addEventListener('click', function () {
            el.classList.remove('__too-long-hl-code');
          });
        });
      }
    }
  }
});

/***/ }),
/* 17 */
/*!*********************************!*\
  !*** ../sources/utils/index.js ***!
  \*********************************/
/*! exports provided: trust, makeOptions, getScrollBarSize, TransitionEndEvent, transitionEndTest, isVNode, getFirstComponentChild, pluckValidCircleIndex, camelCase, ucfirst, lcfirst, hyphenCase, pascalCase, default */
/*! exports used: hyphenCase, isVNode, trust */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = trust;
/* unused harmony export makeOptions */
/* unused harmony export getScrollBarSize */
/* unused harmony export transitionEndTest */
/* harmony export (immutable) */ __webpack_exports__["b"] = isVNode;
/* unused harmony export getFirstComponentChild */
/* unused harmony export pluckValidCircleIndex */
/* unused harmony export camelCase */
/* unused harmony export ucfirst */
/* unused harmony export lcfirst */
/* harmony export (immutable) */ __webpack_exports__["a"] = hyphenCase;
/* unused harmony export pascalCase */
const utils = {
  isEmpty(obj) {
    if (obj === null) return true;
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;
    if (typeof obj !== 'object') return true;
    let flag = true;
    Object.keys(obj).every(key => {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        flag = false;
        return false;
      }
      return true;
    });
    return flag;
  },

  isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  },

  getScroll(target, top) {
    if (typeof window === 'undefined') {
      return 0;
    }

    const prop = top ? 'pageYOffset' : 'pageXOffset';
    const method = top ? 'scrollTop' : 'scrollLeft';
    const isWindow = target === window;

    let ret = isWindow ? target[prop] : target[method];
    // ie6,7,8 standard mode
    if (isWindow && typeof ret !== 'number') {
      ret = window.document.documentElement[method];
    }

    return ret;
  }
};

function trust(val) {
  return val && val !== 'false' && val !== '0';
}

function makeOptions(arr) {
  return arr.map(name => {
    return {
      text: `is-${name}`,
      value: name
    };
  });
}

// For Modal scrollBar hidden
let cached;

function getScrollBarSize(fresh) {
  if (fresh || cached === undefined) {
    const inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    const outer = document.createElement('div');
    const outerStyle = outer.style;

    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';

    outer.appendChild(inner);

    document.body.appendChild(outer);

    const widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    let widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    cached = widthContained - widthScroll;
  }
  return cached;
}

const TransitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'oTransitionEnd otransitionend',
  transition: 'transitionend'
};
/* unused harmony export TransitionEndEvent */


function transitionEndTest() {
  const el = document.createElement('bootstrap');
  for (const name in TransitionEndEvent) {
    if (el.style[name] !== undefined) {
      return {
        end: TransitionEndEvent[name]
      };
    }
  }
  return false;
}

function isVNode(node) {
  return typeof node === 'object' && node.hasOwnProperty('componentOptions');
}

function getFirstComponentChild(children) {
  return children && children.filter(c => c && c.tag)[0];
}

/**
 * zero index base
 * @param step {Number}
 * @param ptrIndex {Number|null}
 * @param maxLen {Number}
 */
function pluckValidCircleIndex(step = 1, ptrIndex = null, maxLen) {
  if (step && maxLen && step < maxLen) {
    if (ptrIndex == null) {
      ptrIndex = step > 0 ? 0 : maxLen - 1;
    } else {
      ptrIndex = ptrIndex + step;
      ptrIndex = ptrIndex < 0 ? maxLen - 1 : ptrIndex >= maxLen ? 0 : ptrIndex;
    }
  }

  return ptrIndex;
}

/**
 * Camelize a hyphen-delimited string.
 */
const camelCaseRE = /[-_](\w)/g;

function camelCase(str) {
  return lcfirst(str.replace(camelCaseRE, (_, c) => c ? c.toUpperCase() : ''));
}

/**
 * Capitalize a string.
 */
function ucfirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * UnCapitalize a string.
 */
function lcfirst(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

const replaceAZRE = /([A-Z])/g;

/**
 * Hyphenate a camelCase string.
 */
function hyphenCase(str) {
  return camelCase(str).replace(replaceAZRE, '-$1').toLowerCase();
}

function pascalCase(str) {
  return ucfirst(camelCase(str));
}

/* unused harmony default export */ var _unused_webpack_default_export = (utils);

/***/ }),
/* 18 */
/*!*******************************************!*\
  !*** ../node_modules/is-type-of/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! core-util-is */ 7);
var isStearm = __webpack_require__(/*! isstream */ 88);
var isClass = __webpack_require__(/*! is-class */ 100);

/**
 * Expose all methods in core-util-is
 */

Object.keys(utils).map(function (name) {
  exports[transform(name)] = utils[name];
});

/**
 * Stream detected by isstream
 */

exports.stream = isStearm;
exports.readableStream = isStearm.isReadable;
exports.writableStream = isStearm.isWritable;
exports.duplexStream = isStearm.isDuplex;

/**
 * Class detected by is-class
 */
 exports.class = isClass;

/**
 * Extend method
 */

exports.finite = function (obj) {
  return Number.isFinite(obj);
};

exports.NaN = function (obj) {
  return Number.isNaN(obj);
};

exports.generator = function (obj) {
  return obj
    && 'function' === typeof obj.next
    && 'function' === typeof obj.throw;
};

exports.generatorFunction = function (obj) {
  return obj
    && obj.constructor
    && 'GeneratorFunction' === obj.constructor.name;
};

exports.asyncFunction = function (obj) {
  return obj
    && obj.constructor
    && 'AsyncFunction' === obj.constructor.name;
};

exports.promise = function (obj) {
  return obj
    && 'function' === typeof obj.then;
};

var MAX_INT_31 = Math.pow(2, 31);

exports.int = function (obj) {
  return utils.isNumber(obj)
    && obj % 1 === 0;
};

exports.int32 = function (obj) {
  return exports.int(obj)
    && obj < MAX_INT_31
    && obj >= -MAX_INT_31;
};

exports.long = function (obj) {
  return exports.int(obj)
    && (obj >= MAX_INT_31 || obj < -MAX_INT_31);
};

exports.Long = function (obj) {
  return exports.object(obj)
    && exports.number(obj.high)
    && exports.number(obj.low);
};

exports.double = function (obj) {
  return utils.isNumber(obj)
    && !isNaN(obj)
    && obj % 1 !== 0;
};

/**
 * override core-util-is
 */

exports.date = function isDate(obj) {
  return obj instanceof Date;
};

exports.regExp = function isRegExp(obj) {
  return obj instanceof RegExp;
};
exports.regexp = exports.regExp;

exports.error = function isError(obj) {
  return obj instanceof Error;
};

exports.array = function isArray(obj) {
  return Array.isArray(obj);
};

/**
 * transform isNull type to null
 * @param {[type]} m [description]
 * @return {[type]} [description]
 */

function transform(m) {
  var name = m.slice(2);
  name = name[0].toLowerCase() + name.slice(1);
  return name;
}


/***/ }),
/* 19 */
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 20 */
/*!**************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_readable.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var processNextTick = __webpack_require__(/*! process-nextick-args */ 10);
/*</replacement>*/

module.exports = Readable;

/*<replacement>*/
var isArray = __webpack_require__(/*! isarray */ 19);
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = __webpack_require__(/*! events */ 12).EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(/*! ./internal/streams/stream */ 21);
/*</replacement>*/

// TODO(bmeurer): Change this back to const once hole checks are
// properly optimized away early in Ignition+TurboFan.
/*<replacement>*/
var Buffer = __webpack_require__(/*! safe-buffer */ 14).Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*</replacement>*/

/*<replacement>*/
var util = __webpack_require__(/*! core-util-is */ 7);
util.inherits = __webpack_require__(/*! inherits */ 8);
/*</replacement>*/

/*<replacement>*/
var debugUtil = __webpack_require__(/*! util */ 90);
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = __webpack_require__(/*! ./internal/streams/BufferList */ 91);
var destroyImpl = __webpack_require__(/*! ./internal/streams/destroy */ 22);
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') {
    return emitter.prependListener(event, fn);
  } else {
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
  }
}

function ReadableState(options, stream) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ 4);

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__(/*! string_decoder/ */ 23).StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ 4);

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});

Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__(/*! string_decoder/ */ 23).StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    processNextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = { hasUnpiped: false };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, unpipeInfo);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this, unpipeInfo);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        processNextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    processNextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], self.emit.bind(self, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    processNextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../../s-docs/node_modules/webpack/buildin/global.js */ 9), __webpack_require__(/*! ./../../../../../s-docs/node_modules/process/browser.js */ 6)))

/***/ }),
/* 21 */
/*!*****************************************************************************!*\
  !*** ./node_modules/readable-stream/lib/internal/streams/stream-browser.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! events */ 12).EventEmitter;


/***/ }),
/* 22 */
/*!**********************************************************************!*\
  !*** ./node_modules/readable-stream/lib/internal/streams/destroy.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*<replacement>*/

var processNextTick = __webpack_require__(/*! process-nextick-args */ 10);
/*</replacement>*/

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
      processNextTick(emitErrorNT, this, err);
    }
    return;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      processNextTick(emitErrorNT, _this, err);
      if (_this._writableState) {
        _this._writableState.errorEmitted = true;
      }
    } else if (cb) {
      cb(err);
    }
  });
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy
};

/***/ }),
/* 23 */
/*!******************************************************************************************************!*\
  !*** /Users/charlie/code/s-docs/node_modules/node-libs-browser/node_modules/string_decoder/index.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Buffer = __webpack_require__(/*! buffer */ 11).Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
};


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}


/***/ }),
/* 24 */
/*!***************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_transform.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.



module.exports = Transform;

var Duplex = __webpack_require__(/*! ./_stream_duplex */ 4);

/*<replacement>*/
var util = __webpack_require__(/*! core-util-is */ 7);
util.inherits = __webpack_require__(/*! inherits */ 8);
/*</replacement>*/

util.inherits(Transform, Duplex);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) {
    return stream.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) stream.push(data);

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = new TransformState(this);

  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.once('prefinish', function () {
    if (typeof this._flush === 'function') this._flush(function (er, data) {
      done(stream, er, data);
    });else done(stream);
  });
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  var _this = this;

  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
    _this.emit('close');
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data !== null && data !== undefined) stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

  if (ts.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

/***/ }),
/* 25 */
/*!**********************************************!*\
  !*** ../sources/directives/click-outside.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(/*! vue */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


// @SECTION: implementation

const HANDLER = '_vue_clickaway_handler';

function bind(el, binding) {
  unbind(el);

  const callback = binding.value;
  if (typeof callback !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      __WEBPACK_IMPORTED_MODULE_0_vue___default.a.util.warn('v-' + binding.name + '="' + binding.expression + '" expects a function value, ' + 'got ' + callback);
    }
    return;
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  var initialMacrotaskEnded = false;
  setTimeout(function () {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function (ev) {
    // @NOTE: IE 5.0+
    // @REFERENCE: https://developer.mozilla.org/en/docs/Web/API/Node/contains
    if (initialMacrotaskEnded && !el.contains(ev.target)) {
      return callback(ev);
    }
  };

  document.documentElement.addEventListener('click', el[HANDLER], false);
}

function unbind(el) {
  document.documentElement.removeEventListener('click', el[HANDLER], false);
  delete el[HANDLER];
}

/* harmony default export */ __webpack_exports__["a"] = ({
  bind: bind,
  update: function (el, binding) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding);
  },
  unbind: unbind
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../s-docs/node_modules/process/browser.js */ 6)))

/***/ }),
/* 26 */
/*!**********************************************!*\
  !*** ../packages/common/mixinFormElement.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sources_utils_mixin__ = __webpack_require__(/*! ../../sources/utils/mixin */ 3);


/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [Object(__WEBPACK_IMPORTED_MODULE_0__sources_utils_mixin__["a" /* createMixins */])(['size'])],

  props: {
    expanded: Boolean,
    loading: Boolean,
    icon: [Boolean, String],

    // Native options to use in HTML5 validation
    autocomplete: String,
    maxlength: [Number, String]
  },

  methods: {},

  computed: {
    parentField() {
      let parent = this.$parent;
      for (let i = 0; i < 3; i++) {
        if (parent && parent.$options.name !== 'VField') {
          parent = parent.$parent;
        }
      }
      return parent;
    },

    /**
     * Get the type prop from parent if it's a Field.
     */
    statusType() {
      if (!this.parentField) return;

      return this.parentField.typeModifier;
    }
  }
});

/***/ }),
/* 27 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided:  */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(/*! vue */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(/*! vue-router */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(/*! ./routes */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_summary_container_vue__ = __webpack_require__(/*! ./components/summary_container.vue */ 188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_summary_container_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_summary_container_vue__);





// global
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('SummarySidebar', __WEBPACK_IMPORTED_MODULE_3__components_summary_container_vue___default.a);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: __WEBPACK_IMPORTED_MODULE_2__routes__["a" /* routes */]
});

var elContent = null;

router.beforeEach(function (to, from, next) {
  if (elContent != null) {
    elContent.scrollTop = 0;
  }

  next();
});

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#sdoc',
  name: 'SDocApp',
  data: function data() {
    return {
      hideSidebar: false
    };
  },
  mounted: function mounted() {
    elContent = document.querySelector('section.content');
  },

  router: router
});

/***/ }),
/* 28 */
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
  * vue-router v2.7.0
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also regiseter instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (index$1(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (index$1(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var normalizedPath = normalizePath(path, parent);
  var pathToRegexpOptions = route.pathToRegexpOptions || {};

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = index(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = {};
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
        offset = normalizeOffset(offset);
        position = getElementPosition(el, offset);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (resolvedDef.__esModule && resolvedDef.default) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      var current = this$1.current;
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  window.location.replace((base + "#" + path));
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.7.0';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../../s-docs/node_modules/process/browser.js */ 6)))

/***/ }),
/* 29 */
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! exports provided: routes */
/*! exports used: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_basis_color_size_vue__ = __webpack_require__(/*! ./pages/basis/color_size.vue */ 30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_basis_color_size_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_basis_color_size_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_basis_layout_vue__ = __webpack_require__(/*! ./pages/basis/layout.vue */ 36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_basis_layout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_basis_layout_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_basis_modifiers_vue__ = __webpack_require__(/*! ./pages/basis/modifiers.vue */ 41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_basis_modifiers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_basis_modifiers_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_elements_icon_vue__ = __webpack_require__(/*! ./pages/elements/icon.vue */ 45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_elements_icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_elements_icon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_elements_buttons_vue__ = __webpack_require__(/*! ./pages/elements/buttons.vue */ 47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_elements_buttons_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_elements_buttons_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_elements_form_vue__ = __webpack_require__(/*! ./pages/elements/form.vue */ 52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_elements_form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__pages_elements_form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_elements_input_vue__ = __webpack_require__(/*! ./pages/elements/input.vue */ 55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_elements_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__pages_elements_input_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_elements_select_vue__ = __webpack_require__(/*! ./pages/elements/select.vue */ 57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_elements_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__pages_elements_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_elements_textarea_vue__ = __webpack_require__(/*! ./pages/elements/textarea.vue */ 59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_elements_textarea_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__pages_elements_textarea_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_elements_form_misc_vue__ = __webpack_require__(/*! ./pages/elements/form_misc.vue */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_elements_form_misc_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__pages_elements_form_misc_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_elements_close_vue__ = __webpack_require__(/*! ./pages/elements/close.vue */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_elements_close_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__pages_elements_close_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_elements_box_vue__ = __webpack_require__(/*! ./pages/elements/box.vue */ 65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_elements_box_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__pages_elements_box_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_elements_notifications_vue__ = __webpack_require__(/*! ./pages/elements/notifications.vue */ 68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_elements_notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__pages_elements_notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_elements_content_vue__ = __webpack_require__(/*! ./pages/elements/content.vue */ 79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_elements_content_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__pages_elements_content_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_components_modal_vue__ = __webpack_require__(/*! ./pages/components/modal.vue */ 81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_components_modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__pages_components_modal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_components_dropdown_vue__ = __webpack_require__(/*! ./pages/components/dropdown.vue */ 103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_components_dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__pages_components_dropdown_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_components_sidebar_vue__ = __webpack_require__(/*! ./pages/components/sidebar.vue */ 108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_components_sidebar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__pages_components_sidebar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_components_navbar_vue__ = __webpack_require__(/*! ./pages/components/navbar.vue */ 112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_components_navbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__pages_components_navbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_components_message_vue__ = __webpack_require__(/*! ./pages/components/message.vue */ 116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_components_message_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__pages_components_message_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_components_card_vue__ = __webpack_require__(/*! ./pages/components/card.vue */ 128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_components_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__pages_components_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_components_tab_vue__ = __webpack_require__(/*! ./pages/components/tab.vue */ 130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_components_tab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__pages_components_tab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_customize_vue__ = __webpack_require__(/*! ./pages/customize.vue */ 135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_customize_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__pages_customize_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_examples2_vue__ = __webpack_require__(/*! ./pages/examples2.vue */ 137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_examples2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__pages_examples2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_readme_vue__ = __webpack_require__(/*! ./pages/readme.vue */ 186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_readme_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__pages_readme_vue__);

// generated by SUMMARY.md

























var routes = [{ path: '/pages/basis/color_size.md', component: __WEBPACK_IMPORTED_MODULE_0__pages_basis_color_size_vue___default.a }, { path: '/pages/basis/layout.md', component: __WEBPACK_IMPORTED_MODULE_1__pages_basis_layout_vue___default.a }, { path: '/pages/basis/modifiers.md', component: __WEBPACK_IMPORTED_MODULE_2__pages_basis_modifiers_vue___default.a }, { path: '/pages/elements/icon.md', component: __WEBPACK_IMPORTED_MODULE_3__pages_elements_icon_vue___default.a }, { path: '/pages/elements/buttons.md', component: __WEBPACK_IMPORTED_MODULE_4__pages_elements_buttons_vue___default.a }, { path: '/pages/elements/form.md', component: __WEBPACK_IMPORTED_MODULE_5__pages_elements_form_vue___default.a }, { path: '/pages/elements/input.md', component: __WEBPACK_IMPORTED_MODULE_6__pages_elements_input_vue___default.a }, { path: '/pages/elements/select.md', component: __WEBPACK_IMPORTED_MODULE_7__pages_elements_select_vue___default.a }, { path: '/pages/elements/textarea.md', component: __WEBPACK_IMPORTED_MODULE_8__pages_elements_textarea_vue___default.a }, { path: '/pages/elements/form_misc.md', component: __WEBPACK_IMPORTED_MODULE_9__pages_elements_form_misc_vue___default.a }, { path: '/pages/elements/close.md', component: __WEBPACK_IMPORTED_MODULE_10__pages_elements_close_vue___default.a }, { path: '/pages/elements/box.md', component: __WEBPACK_IMPORTED_MODULE_11__pages_elements_box_vue___default.a }, { path: '/pages/elements/notifications.md', component: __WEBPACK_IMPORTED_MODULE_12__pages_elements_notifications_vue___default.a }, { path: '/pages/elements/content.md', component: __WEBPACK_IMPORTED_MODULE_13__pages_elements_content_vue___default.a }, { path: '/pages/components/modal.md', component: __WEBPACK_IMPORTED_MODULE_14__pages_components_modal_vue___default.a }, { path: '/pages/components/dropdown.md', component: __WEBPACK_IMPORTED_MODULE_15__pages_components_dropdown_vue___default.a }, { path: '/pages/components/sidebar.md', component: __WEBPACK_IMPORTED_MODULE_16__pages_components_sidebar_vue___default.a }, { path: '/pages/components/navbar.md', component: __WEBPACK_IMPORTED_MODULE_17__pages_components_navbar_vue___default.a }, { path: '/pages/components/message.md', component: __WEBPACK_IMPORTED_MODULE_18__pages_components_message_vue___default.a }, { path: '/pages/components/card.md', component: __WEBPACK_IMPORTED_MODULE_19__pages_components_card_vue___default.a }, { path: '/pages/components/tab.md', component: __WEBPACK_IMPORTED_MODULE_20__pages_components_tab_vue___default.a }, { path: '/pages/customize.md', component: __WEBPACK_IMPORTED_MODULE_21__pages_customize_vue___default.a }, { path: '/pages/examples2.md', component: __WEBPACK_IMPORTED_MODULE_22__pages_examples2_vue___default.a }, { path: '/', component: __WEBPACK_IMPORTED_MODULE_23__pages_readme_vue___default.a }];



/***/ }),
/* 30 */
/*!************************************!*\
  !*** ./pages/basis/color_size.vue ***!
  \************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index?{"id":"data-v-6b7ec34a","scoped":false,"hasInlineConfig":false}!sass-loader?sourceMap!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./color_size.vue */ 31)

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./color_size.vue */ 34),
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-6b7ec34a"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./color_size.vue */ 35),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/basis/color_size.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] color_size.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b7ec34a", Component.options)
  } else {
    hotAPI.reload("data-v-6b7ec34a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 31 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-6b7ec34a","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/basis/color_size.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler?{"id":"data-v-6b7ec34a","scoped":false,"hasInlineConfig":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./color_size.vue */ 32);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ 2)("39e49f7e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6b7ec34a\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./color_size.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6b7ec34a\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./color_size.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 32 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-6b7ec34a","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/basis/color_size.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 1)();
// imports


// module
exports.push([module.i, "\n.sd-colors-presentation > .item {\n  padding: 15px 0;\n}\n.sd-colors-presentation > .item strong {\n    display: inline-block;\n    padding: 15px 20px;\n    min-width: 15%;\n    text-align: center;\n    margin-right: 15px;\n    margin-bottom: 15px;\n}\n.sd-colors-presentation .has-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.sd-colors-presentation .has-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.sd-colors-presentation .has-light {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.sd-colors-presentation .has-dark {\n  background-color: #363636;\n  color: whitesmoke;\n}\n.sd-colors-presentation .has-primary {\n  background-color: #1ca0f2;\n  color: #fff;\n}\n.sd-colors-presentation .has-info {\n  background-color: #b86bff;\n  color: #fff;\n}\n.sd-colors-presentation .has-success {\n  background-color: #23d160;\n  color: #fff;\n}\n.sd-colors-presentation .has-warning {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n.sd-colors-presentation .has-danger {\n  background-color: #ff3860;\n  color: #fff;\n}\n.sd-sizes-presentation .has-size-1 {\n  display: block;\n  font-size: 3rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-2 {\n  display: block;\n  font-size: 2.5rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-3 {\n  display: block;\n  font-size: 2rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-4 {\n  display: block;\n  font-size: 1.5rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-5 {\n  display: block;\n  font-size: 1.25rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-6 {\n  display: block;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-7 {\n  display: block;\n  font-size: 0.75rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-small {\n  display: block;\n  font-size: 0.75rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-normal {\n  display: block;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-medium {\n  display: block;\n  font-size: 1.25rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-large {\n  display: block;\n  font-size: 1.5rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-weight-light {\n  display: block;\n  font-weight: 300;\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n}\n.sd-sizes-presentation .has-weight-normal {\n  display: block;\n  font-weight: 400;\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n}\n.sd-sizes-presentation .has-weight-semibold {\n  display: block;\n  font-weight: 500;\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n}\n.sd-sizes-presentation .has-weight-bold {\n  display: block;\n  font-weight: 700;\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n}\n.sd-faces-presentation .has-face-primary {\n  display: block;\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n}\n.sd-faces-presentation .has-face-sans-serif {\n  display: block;\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n}\n.sd-faces-presentation .has-face-arial {\n  display: block;\n  font-family: \"Arial\";\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n}\n.sd-faces-presentation .has-face-monospace {\n  display: block;\n  font-family: monospace;\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n}\n.sd-radius-presentation > .item {\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  background-color: whitesmoke;\n  margin-right: 15px;\n  text-align: center;\n  line-height: 100px;\n  color: #121212;\n  font-size: 1rem;\n}\n.sd-radius-presentation > .item.r-small {\n    border-radius: 2px;\n}\n.sd-radius-presentation > .item.r-normal {\n    border-radius: 3px;\n}\n.sd-radius-presentation > .item.r-large {\n    border-radius: 5px;\n}\n", "", {"version":3,"sources":["/./pages/basis/color_size.vue"],"names":[],"mappings":";AACA;EACE,gBAAgB;CACjB;AACD;IACI,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,mBAAmB;IACnB,oBAAoB;CACvB;AACD;EACE,wBAAwB;EACxB,eAAe;CAChB;AACD;EACE,0BAA0B;EAC1B,aAAa;CACd;AACD;EACE,6BAA6B;EAC7B,eAAe;CAChB;AACD;EACE,0BAA0B;EAC1B,kBAAkB;CACnB;AACD;EACE,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,0BAA0B;EAC1B,0BAA0B;CAC3B;AACD;EACE,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,kBAAkB;EAClB,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,kBAAkB;EAClB,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,kBAAkB;EAClB,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,qLAAqL;EACrL,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,qLAAqL;EACrL,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,uBAAuB;EACvB,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,aAAa;EACb,cAAc;EACd,6BAA6B;EAC7B,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;EACf,gBAAgB;CACjB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,mBAAmB;CACtB","file":"color_size.vue","sourcesContent":["\n.sd-colors-presentation > .item {\n  padding: 15px 0;\n}\n.sd-colors-presentation > .item strong {\n    display: inline-block;\n    padding: 15px 20px;\n    min-width: 15%;\n    text-align: center;\n    margin-right: 15px;\n    margin-bottom: 15px;\n}\n.sd-colors-presentation .has-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.sd-colors-presentation .has-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.sd-colors-presentation .has-light {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.sd-colors-presentation .has-dark {\n  background-color: #363636;\n  color: whitesmoke;\n}\n.sd-colors-presentation .has-primary {\n  background-color: #1ca0f2;\n  color: #fff;\n}\n.sd-colors-presentation .has-info {\n  background-color: #b86bff;\n  color: #fff;\n}\n.sd-colors-presentation .has-success {\n  background-color: #23d160;\n  color: #fff;\n}\n.sd-colors-presentation .has-warning {\n  background-color: #ffdd57;\n  color: rgba(0, 0, 0, 0.7);\n}\n.sd-colors-presentation .has-danger {\n  background-color: #ff3860;\n  color: #fff;\n}\n.sd-sizes-presentation .has-size-1 {\n  display: block;\n  font-size: 3rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-2 {\n  display: block;\n  font-size: 2.5rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-3 {\n  display: block;\n  font-size: 2rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-4 {\n  display: block;\n  font-size: 1.5rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-5 {\n  display: block;\n  font-size: 1.25rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-6 {\n  display: block;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-7 {\n  display: block;\n  font-size: 0.75rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-small {\n  display: block;\n  font-size: 0.75rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-normal {\n  display: block;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-medium {\n  display: block;\n  font-size: 1.25rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-size-large {\n  display: block;\n  font-size: 1.5rem;\n  margin-bottom: 10px;\n}\n.sd-sizes-presentation .has-weight-light {\n  display: block;\n  font-weight: 300;\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n}\n.sd-sizes-presentation .has-weight-normal {\n  display: block;\n  font-weight: 400;\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n}\n.sd-sizes-presentation .has-weight-semibold {\n  display: block;\n  font-weight: 500;\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n}\n.sd-sizes-presentation .has-weight-bold {\n  display: block;\n  font-weight: 700;\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n}\n.sd-faces-presentation .has-face-primary {\n  display: block;\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n}\n.sd-faces-presentation .has-face-sans-serif {\n  display: block;\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n}\n.sd-faces-presentation .has-face-arial {\n  display: block;\n  font-family: \"Arial\";\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n}\n.sd-faces-presentation .has-face-monospace {\n  display: block;\n  font-family: monospace;\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n}\n.sd-radius-presentation > .item {\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  background-color: whitesmoke;\n  margin-right: 15px;\n  text-align: center;\n  line-height: 100px;\n  color: #121212;\n  font-size: 1rem;\n}\n.sd-radius-presentation > .item.r-small {\n    border-radius: 2px;\n}\n.sd-radius-presentation > .item.r-normal {\n    border-radius: 3px;\n}\n.sd-radius-presentation > .item.r-large {\n    border-radius: 5px;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 33 */
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 34 */
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./pages/basis/color_size.vue ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      colors: ['primary', 'info', 'success', 'warning', 'danger', 'light', 'dark'],
      sizeLevels: Array.from({ length: 7 }).map(function (n, i) {
        return i + 1;
      }),
      sizeLabels: ['small', 'normal', 'medium', 'large'],
      sizeWeights: ['light', 'normal', 'semibold', 'bold'],
      fontFaces: ['primary', 'sans-serif', 'arial', 'monospace']
    };
  }
});

/***/ }),
/* 35 */
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6b7ec34a"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/basis/color_size.vue ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("颜色(主题)")]), _vm._v(" "), _c('div', {
    staticClass: "sd-colors-presentation"
  }, [_c('div', {
    staticClass: "item"
  }, _vm._l((_vm.colors), function(it) {
    return _c('strong', {
      class: ("has-" + it)
    }, [_vm._v(_vm._s(it))])
  }))]), _vm._v(" "), _c('h2', [_vm._v("字体大小")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "sd-sizes-presentation"
  }, [_c('div', {
    staticClass: "item"
  }, _vm._l((_vm.sizeLevels), function(level) {
    return _c('span', {
      class: ("has-size-" + level)
    }, [_vm._v(" " + _vm._s(level) + "号 字体")])
  })), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, _vm._l((_vm.sizeLabels), function(level) {
    return _c('span', {
      class: ("has-size-" + level)
    }, [_vm._v(" " + _vm._s(level) + " 字体")])
  }))]), _vm._v(" "), _c('h2', [_vm._v("字体磅值")]), _vm._v(" "), _c('div', {
    staticClass: "sd-sizes-presentation"
  }, [_c('div', {
    staticClass: "item"
  }, _vm._l((_vm.sizeWeights), function(it) {
    return _c('span', {
      class: ("has-weight-" + it)
    }, [_vm._v("\n      " + _vm._s(it) + " 你好\n    ")])
  }))]), _vm._v(" "), _c('h2', [_vm._v("字体类型")]), _vm._v(" "), _c('div', {
    staticClass: "sd-faces-presentation"
  }, [_c('div', {
    staticClass: "item"
  }, _vm._l((_vm.fontFaces), function(it) {
    return _c('span', {
      class: ("has-face-" + it)
    }, [_vm._v("\n      " + _vm._s(it) + " 中国 の Cat\n    ")])
  }))]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h2', [_vm._v("圆角尺寸")]), _vm._v(" "), _vm._m(2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("尺寸分7个数量级别，4个语义级别，使用"), _c('code', [_vm._v("rem")]), _vm._v("相对根"), _c('code', [_vm._v("font-size: 16px")]), _vm._v("设置 .")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "tip"
  }, [_c('strong', [_vm._v("衬线体（Serif）")]), _vm._v(" "), _c('br'), _vm._v("\n  常用的中文衬线体：宋体（Simsun），仿宋（FangSong），楷体（KaiTi），华文仿宋（STFangSong），华文楷体（STKaiTi）。 "), _c('br'), _vm._v("\n  常见的英文衬线体：Times new Roman，Times "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('strong', [_vm._v("无衬线体（Sans-Serif）")]), _vm._v(" "), _c('br'), _vm._v("\n  常见的中文无衬线体：微软雅黑（Microsoft YaHei），黑体（SimHei），华文细黑（STXiHei） "), _c('br'), _vm._v("\n  常见的英文无衬线体：Tahoma，Arial，Helvetica，Verdana "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('strong', [_vm._v("等宽字体（monospace）")]), _vm._v(" "), _c('br'), _vm._v("\n  常见的等宽字体：Courier New，Courier\n")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "sd-radius-presentation"
  }, [_c('div', {
    staticClass: "item r-small"
  }, [_vm._v("small")]), _vm._v(" "), _c('div', {
    staticClass: "item r-normal"
  }, [_vm._v("normal")]), _vm._v(" "), _c('div', {
    staticClass: "item r-large"
  }, [_vm._v("large")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b7ec34a", module.exports)
  }
}

/***/ }),
/* 36 */
/*!********************************!*\
  !*** ./pages/basis/layout.vue ***!
  \********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index?{"id":"data-v-35cdb317","scoped":false,"hasInlineConfig":false}!sass-loader?sourceMap!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./layout.vue */ 37)

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./layout.vue */ 39),
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-35cdb317"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./layout.vue */ 40),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/basis/layout.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] layout.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35cdb317", Component.options)
  } else {
    hotAPI.reload("data-v-35cdb317", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 37 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-35cdb317","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/basis/layout.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler?{"id":"data-v-35cdb317","scoped":false,"hasInlineConfig":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./layout.vue */ 38);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ 2)("d04fdede", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-35cdb317\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./layout.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-35cdb317\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./layout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 38 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-35cdb317","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/basis/layout.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 1)();
// imports


// module
exports.push([module.i, "\n.sd-grid-block {\n  display: block;\n  padding: 35px 15px;\n  text-align: center;\n  background-color: whitesmoke;\n}\n", "", {"version":3,"sources":["/./pages/basis/layout.vue"],"names":[],"mappings":";AACA;EACE,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,6BAA6B;CAC9B","file":"layout.vue","sourcesContent":["\n.sd-grid-block {\n  display: block;\n  padding: 35px 15px;\n  text-align: center;\n  background-color: whitesmoke;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 39 */
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./pages/basis/layout.vue ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      flexCols: [1, 1],
      cols: Array.from({ length: 12 }).map(function (n, i) {
        return i + 1;
      }),
      grids: [[2, 3, 7], [3, 3, 6]]
    };
  }
});

/***/ }),
/* 40 */
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-35cdb317"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/basis/layout.vue ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("栅格")]), _vm._v(" "), _c('h4', [_vm._v("a. 默认弹性")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "v-cols is-multiline"
  }, _vm._l((_vm.flexCols), function(el) {
    return _c('div', {
      staticClass: "v-col sd-grid-column"
    }, [_vm._m(2, true)])
  })), _vm._v(" "), _c('button', {
    staticClass: "v-btn is-small is-light",
    on: {
      "click": function($event) {
        _vm.flexCols.push(true)
      }
    }
  }, [_vm._v("add column")]), _vm._v(" "), _c('h4', [_vm._v("b. 控制尺寸")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "v-container"
  }, [_vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "v-cols"
  }, _vm._l((_vm.grids[0]), function(el) {
    return _c('div', {
      staticClass: "v-col sd-grid-column",
      class: ("is-" + el)
    }, [_c('span', {
      staticClass: "sd-grid-block"
    }, [_c('code', [_vm._v(".is-" + _vm._s(el))])])])
  })), _vm._v(" "), _c('div', {
    staticClass: "v-cols"
  }, _vm._l((_vm.grids[1]), function(el) {
    return _c('div', {
      staticClass: "v-col sd-grid-column",
      class: ("is-" + el)
    }, [_c('span', {
      staticClass: "sd-grid-block"
    }, [_c('code', [_vm._v(".is-" + _vm._s(el))])])])
  }))]), _vm._v(" "), _c('p', [_vm._v("框架内置了些有语义の修饰符 .")]), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7), _vm._v(" "), _c('h4', [_vm._v("c. 控制间隙")]), _vm._v(" "), _vm._m(8), _vm._v(" "), _c('div', {
    staticClass: "v-cols is-gapless"
  }, _vm._l((_vm.cols), function(el) {
    return _c('div', {
      staticClass: "v-col sd-grid-column"
    }, [_c('span', {
      staticClass: "sd-grid-block"
    }, [_vm._v("\n      " + _vm._s(el) + "\n    ")])])
  })), _vm._v(" "), _vm._m(9), _vm._v(" "), _vm._m(10), _vm._v(" "), _vm._m(11), _vm._v(" "), _c('h4', [_vm._v("d. 其他修饰")]), _vm._v(" "), _vm._m(12)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("基于"), _c('code', [_vm._v("flexbox")]), _vm._v("的等分弹性列")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-cols is-multiline\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-col\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("code")]), _vm._v(">")]), _vm._v(".v-col"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("code")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "sd-grid-block"
  }, [_c('code', [_vm._v(".v-col")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("通过修饰符"), _c('code', [_vm._v("is-(1~12)")]), _vm._v("可以灵活控制列的尺寸 .")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-cols\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-col is-3\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-col is-3\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-col is-6\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-cols\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-col is-3\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-col\"")]), _vm._v(">")]), _vm._v("不设置将会撑满剩余空间"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-cols"
  }, [_c('div', {
    staticClass: "v-col is-3"
  }, [_c('span', {
    staticClass: "sd-grid-block"
  }, [_c('code', [_vm._v(".is-3")])])]), _vm._v(" "), _c('div', {
    staticClass: "v-col"
  }, [_c('span', {
    staticClass: "sd-grid-block"
  }, [_vm._v("\n          不设置将会撑满剩余空间\n        ")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "css"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-selector-attr"
    }
  }, [_vm._v("[v-col]")]), _c('span', {
    attrs: {
      "class": "hljs-selector-class"
    }
  }, [_vm._v(".is-three-quarters")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-selector-attr"
    }
  }, [_vm._v("[v-col]")]), _c('span', {
    attrs: {
      "class": "hljs-selector-class"
    }
  }, [_vm._v(".is-two-thirds")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-selector-attr"
    }
  }, [_vm._v("[v-col]")]), _c('span', {
    attrs: {
      "class": "hljs-selector-class"
    }
  }, [_vm._v(".is-half")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-selector-attr"
    }
  }, [_vm._v("[v-col]")]), _c('span', {
    attrs: {
      "class": "hljs-selector-class"
    }
  }, [_vm._v(".is-one-third")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-selector-attr"
    }
  }, [_vm._v("[v-col]")]), _c('span', {
    attrs: {
      "class": "hljs-selector-class"
    }
  }, [_vm._v(".is-one-quarter")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-selector-attr"
    }
  }, [_vm._v("[v-col]")]), _c('span', {
    attrs: {
      "class": "hljs-selector-class"
    }
  }, [_vm._v(".is-full")]), _vm._v(" // 强制占满行容器\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-cols"
  }, [_c('div', {
    staticClass: "v-col is-half sd-grid-column"
  }, [_c('span', {
    staticClass: "sd-grid-block"
  }, [_vm._v("\n      is-half\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "v-col is-half sd-grid-column"
  }, [_c('span', {
    staticClass: "sd-grid-block"
  }, [_vm._v("\n      is-half\n    ")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("通过修饰符"), _c('code', [_vm._v("[v-cols].is-gapless")]), _vm._v("可以取消间隙")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("通过修饰符"), _c('code', [_vm._v("[v-col].is-offset-(1~12)")]), _vm._v("可以偏移列间隙")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-cols"
  }, [_c('div', {
    staticClass: "v-col sd-grid-column is-3"
  }, [_c('span', {
    staticClass: "sd-grid-block"
  }, [_c('code', [_vm._v(".is-3")])])]), _vm._v(" "), _c('div', {
    staticClass: "v-col sd-grid-column is-offset-3"
  }, [_c('span', {
    staticClass: "sd-grid-block"
  }, [_c('code', [_vm._v(".is-offset-3")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("目前列之间的间隙为"), _c('code', [_vm._v("0.5rem")]), _vm._v(",即 "), _c('code', [_vm._v("16px * 0.5 * 2 = 16px")]), _vm._v(" . 如果希望调整这个参数，可以在Advanced章节中找到自定义的办法.\n{tip}")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "css"
    }
  }, [_c('code', [_vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-selector-attr"
    }
  }, [_vm._v("[v-cols]")]), _c('span', {
    attrs: {
      "class": "hljs-selector-class"
    }
  }, [_vm._v(".is-centered")]), _vm._v(" // 子元素水平居中\n"), _c('span', {
    attrs: {
      "class": "hljs-selector-attr"
    }
  }, [_vm._v("[v-cols]")]), _c('span', {
    attrs: {
      "class": "hljs-selector-class"
    }
  }, [_vm._v(".is-multiline")]), _vm._v(" // 子元素填充满后换行\n"), _c('span', {
    attrs: {
      "class": "hljs-selector-attr"
    }
  }, [_vm._v("[v-cols]")]), _c('span', {
    attrs: {
      "class": "hljs-selector-class"
    }
  }, [_vm._v(".is-vcentered")]), _vm._v(" // 子元素垂直居中\n\n")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-35cdb317", module.exports)
  }
}

/***/ }),
/* 41 */
/*!***********************************!*\
  !*** ./pages/basis/modifiers.vue ***!
  \***********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index?{"id":"data-v-7409b2c2","scoped":false,"hasInlineConfig":false}!sass-loader?sourceMap!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./modifiers.vue */ 42)

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  null,
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-7409b2c2"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./modifiers.vue */ 44),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/basis/modifiers.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] modifiers.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7409b2c2", Component.options)
  } else {
    hotAPI.reload("data-v-7409b2c2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 42 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-7409b2c2","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/basis/modifiers.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler?{"id":"data-v-7409b2c2","scoped":false,"hasInlineConfig":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modifiers.vue */ 43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ 2)("273a13b0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7409b2c2\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modifiers.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7409b2c2\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modifiers.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 43 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-7409b2c2","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/basis/modifiers.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 1)();
// imports


// module
exports.push([module.i, "\n.sd-btns-container .v-btn {\n  min-width: 80px;\n  margin-right: 5px;\n}\n", "", {"version":3,"sources":["/./pages/basis/modifiers.vue"],"names":[],"mappings":";AACA;EACE,gBAAgB;EAChB,kBAAkB;CACnB","file":"modifiers.vue","sourcesContent":["\n.sd-btns-container .v-btn {\n  min-width: 80px;\n  margin-right: 5px;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 44 */
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7409b2c2"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/basis/modifiers.vue ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("修饰符 Modifiers")]), _vm._v(" "), _c('p', [_vm._v("大部分元件"), _c('code', [_vm._v("Elements")]), _vm._v("都有可选的样式, 可以通过添加一个或多个修饰符类来控制，一般是以 "), _c('code', [_vm._v("is-")]), _vm._v(" 或 "), _c('code', [_vm._v("has-")]), _vm._v(" 开头。")]), _vm._v(" "), _c('p', {
    pre: true,
    attrs: {
      "class": "tip"
    }
  }, [_vm._v("\n  修饰符"), _c('code', [_vm._v("Modifier")]), _vm._v("特性，主要是借鉴（抄，逃）`Bulma`，也是整个框架的灵魂特性所在。为什么这么做呢? 仔细想想，其实我们在写样式时，最大的困难就是如何合理命名（语义化）以组织复用，\n  而修饰符的方式在一定程度上真的很好地解决了这个问题，在没有更完美的方案前，我们索性也这么做吧 :)\n")]), _vm._v(" "), _c('h4', [_vm._v("a. 颜色(color)")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("7种主要的颜色控制")])]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-primary\"")]), _vm._v(">")]), _vm._v("Primary"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-info\"")]), _vm._v(">")]), _vm._v("Info"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-success\"")]), _vm._v(">")]), _vm._v("Success"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-warning\"")]), _vm._v(">")]), _vm._v("Warning"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-danger\"")]), _vm._v(">")]), _vm._v("Danger"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-light\"")]), _vm._v(">")]), _vm._v("Light"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-black\"")]), _vm._v(">")]), _vm._v("Black"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "sd-btns-container"
  }, [_c('a', {
    staticClass: "v-btn is-primary"
  }, [_vm._v("Primary")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-info"
  }, [_vm._v("Info")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-success"
  }, [_vm._v("Success")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-warning"
  }, [_vm._v("Warning")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-danger"
  }, [_vm._v("Danger")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-light"
  }, [_vm._v("Light")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-black"
  }, [_vm._v("Black")])]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("这里只是以"), _c('code', [_vm._v("btn")]), _vm._v("元件为例，不同元件会有不同程度支持对应"), _c('code', [_vm._v("modifier")]), _vm._v(", 具体请参照对应文档 .")]), _vm._v("\n{tip}")]), _vm._v(" "), _c('h4', [_vm._v("b. 尺寸(size)")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("3种语义尺寸")])]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-small\"")]), _vm._v(">")]), _vm._v("Small"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-medium\"")]), _vm._v(">")]), _vm._v("Medium"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-large\"")]), _vm._v(">")]), _vm._v("Large"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "sd-btns-container"
  }, [_c('a', {
    staticClass: "v-btn is-small"
  }, [_vm._v("Small")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-medium"
  }, [_vm._v("Medium")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-large"
  }, [_vm._v("Large")])]), _vm._v(" "), _c('h4', [_vm._v("c. 风格(style)")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', [_vm._v("is-outlined")])])]), _vm._v(" "), _c('div', {
    staticClass: "sd-btns-container"
  }, [_c('a', {
    staticClass: "v-btn is-outlined is-info"
  }, [_vm._v("is-outlined")])]), _vm._v(" "), _c('h4', [_vm._v("d. 状态(state)")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("加载中 "), _c('code', [_vm._v("is-loading")])])]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-loading is-success\"")]), _vm._v(">")]), _vm._v("is-loading"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-loading is-success is-outlined\"")]), _vm._v(">")]), _vm._v("is-loading"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "sd-btns-container"
  }, [_c('a', {
    staticClass: "v-btn is-loading is-success"
  }, [_vm._v("is-loading")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-loading is-success is-outlined"
  }, [_vm._v("is-loading")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("不可用 "), _c('code', [_vm._v("is-disabled")]), _vm._v(" & "), _c('code', [_vm._v("[disabled]")])])]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-disabled\"")]), _vm._v(">")]), _vm._v("is-disabled"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("[disabled]"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "sd-btns-container"
  }, [_c('a', {
    staticClass: "v-btn is-disabled"
  }, [_vm._v("is-disabled")]), _vm._v(" "), _c('button', {
    staticClass: "v-btn",
    attrs: {
      "disabled": ""
    }
  }, [_vm._v("[disabled]")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7409b2c2", module.exports)
  }
}

/***/ }),
/* 45 */
/*!*********************************!*\
  !*** ./pages/elements/icon.vue ***!
  \*********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  null,
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-6a1cad45"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./icon.vue */ 46),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/elements/icon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] icon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a1cad45", Component.options)
  } else {
    hotAPI.reload("data-v-6a1cad45", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 46 */
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6a1cad45"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/elements/icon.vue ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("图标 Icons")]), _vm._v(" "), _c('p', [_vm._v("Vui只限制图标容器, 理论上所有的"), _c('code', [_vm._v("字体图标(icon font)")]), _vm._v("库都可以兼容引入，例如 Font Awesome，Material Icons 等 .")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("通过"), _c('code', [_vm._v(".has-icon")]), _vm._v("修饰的元素，用来作为字体图标(icon font)的占位容器，这是必须的 .")])]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-github\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm sd-with-icon-bg"
  }, [_c('span', {
    staticClass: "has-icon"
  }, [_c('i', {
    staticClass: "fa fa-github"
  })])]), _vm._v(" "), _c('p', {
    staticClass: "tip"
  }, [_vm._v("\n  默认"), _c('code', [_vm._v("has-icon")]), _vm._v("修饰的元素尺寸是 24px（1.5rem * 16px） 的方形容器，至于内嵌的字体图标（iconfont）大小交由图标库本身来控制，\n  例如 Font Awesome 图标库默认将会继承（font-size: inherit）父级设置的字体大小 .\n")]), _vm._v(" "), _c('h3', [_vm._v("a.颜色(colors)")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("支持7个主题色 .")])]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon has-text-primary\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-info-circle\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon has-text-info\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-chrome\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon has-text-danger\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-instagram\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n...\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('span', {
    staticClass: "has-icon has-text-primary"
  }, [_c('i', {
    staticClass: "fa fa-info-circle"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon has-text-info"
  }, [_c('i', {
    staticClass: "fa fa-chrome"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon has-text-danger"
  }, [_c('i', {
    staticClass: "fa fa-instagram"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon has-text-success"
  }, [_c('i', {
    staticClass: "fa fa-linux"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon has-text-warning"
  }, [_c('i', {
    staticClass: "fa fa-flash"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon has-text-black"
  }, [_c('i', {
    staticClass: "fa fa-git"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon has-text-light"
  }, [_c('i', {
    staticClass: "fa fa-share-alt-square"
  })])]), _vm._v(" "), _c('h3', [_vm._v("b.尺寸(sizes)")]), _vm._v(" "), _c('p', [_vm._v("只能控制图标容器大小 .")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("默认 "), _c('code', [_vm._v("1.5rem （24px）")])]), _vm._v(" "), _c('li', [_vm._v("最小 "), _c('code', [_vm._v("[has-icon].is-small : 1rem （16px）")])]), _vm._v(" "), _c('li', [_vm._v("中级 "), _c('code', [_vm._v("[has-icon].is-medium : 2rem （32px）")])]), _vm._v(" "), _c('li', [_vm._v("最大 "), _c('code', [_vm._v("[has-icon].is-large: 3rem （48px）")])])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box sd-with-icon-bg"
  }, [_c('span', {
    staticClass: "has-icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-github fa-fw"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon"
  }, [_c('i', {
    staticClass: "fa fa-fw fa-github"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-medium"
  }, [_c('i', {
    staticClass: "fa fa-2x fa-github"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-large"
  }, [_c('i', {
    staticClass: "fa fa-3x fa-github"
  })])]), _vm._v(" "), _c('h2', [_vm._v("iconfont.cn 支持")]), _vm._v(" "), _c('p', [_vm._v("目前很多项目使用了阿里巴巴的三方开源图标库"), _c('a', {
    attrs: {
      "href": "http://iconfont.cn"
    }
  }, [_vm._v("http://iconfont.cn")]), _vm._v("，如果直接引用唯一需要注意的地方就是\n"), _c('code', [_vm._v("iconfont")]), _vm._v("提供的默认字体大小为"), _c('code', [_vm._v("16px")]), _vm._v(" !")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "css"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-selector-class"
    }
  }, [_vm._v(".iconfont")]), _vm._v(" {\n  "), _c('span', {
    attrs: {
      "class": "hljs-attribute"
    }
  }, [_vm._v("font-family")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"iconfont\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-meta"
    }
  }, [_vm._v("!important")]), _vm._v(";\n  "), _c('span', {
    attrs: {
      "class": "hljs-attribute"
    }
  }, [_vm._v("font-size")]), _vm._v(":"), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("16px")]), _vm._v(";\n  "), _c('span', {
    attrs: {
      "class": "hljs-attribute"
    }
  }, [_vm._v("font-style")]), _vm._v(":normal;\n  "), _c('span', {
    attrs: {
      "class": "hljs-attribute"
    }
  }, [_vm._v("-webkit-font-smoothing")]), _vm._v(": antialiased;\n  "), _c('span', {
    attrs: {
      "class": "hljs-attribute"
    }
  }, [_vm._v("-moz-osx-font-smoothing")]), _vm._v(": grayscale;\n}\n")])]), _vm._v(" "), _c('p', [_vm._v("来一波 Iconfont .")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"iconfont icon-hf_shangcheng\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-medium\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"iconfont icon-hf_shangcheng\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-large has-text-danger\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"iconfont icon-hf_shangcheng\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box sd-with-icon-bg"
  }, [_c('span', {
    staticClass: "has-icon"
  }, [_c('i', {
    staticClass: "iconfont icon-hf_shangcheng"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-medium"
  }, [_c('i', {
    staticClass: "iconfont icon-hf_shangcheng"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-large has-text-danger"
  }, [_c('i', {
    staticClass: "iconfont icon-hf_shangcheng"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon"
  }, [_c('i', {
    staticClass: "iconfont icon-hf_haibei"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-medium"
  }, [_c('i', {
    staticClass: "iconfont icon-hf_haibei"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-large has-text-info"
  }, [_c('i', {
    staticClass: "iconfont icon-hf_haibei"
  })])]), _vm._v(" "), _c('p', {
    staticClass: "tip"
  }, [_vm._v("\n  以上图标本身大小, 以及容器底色 都是是手动控制的, 仅作为案例。还有就是如果你发现"), _c('code', [_vm._v("iconfont")]), _vm._v("字体图标在容器内未对齐，🙅不要慌...八成图标本身有问题，再看看吧，老铁 ...\n  "), _c('a', {
    attrs: {
      "target": "_blank",
      "href": "http://www.iconfont.cn/help/detail"
    }
  }, [_vm._v("http://www.iconfont.cn/help/detail")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6a1cad45", module.exports)
  }
}

/***/ }),
/* 47 */
/*!************************************!*\
  !*** ./pages/elements/buttons.vue ***!
  \************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index?{"id":"data-v-2f48ba65","scoped":false,"hasInlineConfig":false}!sass-loader?sourceMap!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./buttons.vue */ 48)

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./buttons.vue */ 50),
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-2f48ba65"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./buttons.vue */ 51),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/elements/buttons.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] buttons.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f48ba65", Component.options)
  } else {
    hotAPI.reload("data-v-2f48ba65", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 48 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-2f48ba65","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/elements/buttons.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler?{"id":"data-v-2f48ba65","scoped":false,"hasInlineConfig":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./buttons.vue */ 49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ 2)("2bbb1a54", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2f48ba65\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./buttons.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2f48ba65\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./buttons.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 49 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-2f48ba65","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/elements/buttons.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 1)();
// imports


// module
exports.push([module.i, "\n.sd-states-buttons .v-btn {\n  width: 10%;\n  margin-right: 10px;\n}\n", "", {"version":3,"sources":["/./pages/elements/buttons.vue"],"names":[],"mappings":";AACA;EACE,WAAW;EACX,mBAAmB;CACpB","file":"buttons.vue","sourcesContent":["\n.sd-states-buttons .v-btn {\n  width: 10%;\n  margin-right: 10px;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 50 */
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./pages/elements/buttons.vue ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isLoading: false
    };
  },


  methods: {
    _handleClick: function _handleClick() {
      this.isLoading = !this.isLoading;
    }
  }
});

/***/ }),
/* 51 */
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2f48ba65"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/elements/buttons.vue ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("按钮 Buttons")]), _vm._v(" "), _c('p', [_vm._v("按钮("), _c('code', [_vm._v("button")]), _vm._v(")在任何交互设计中都是非常重要的元件，一个好的交互按钮设计，可以大大增强界面的交互体验。\n通过在特定元素上添加"), _c('code', [_vm._v(".v-btn")]), _vm._v("类，可以设置一个基本的按钮。")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', [_vm._v("<a>")]), _vm._v(" 锚点链接")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("<button>")]), _vm._v(" 表单按钮")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("<input type=\"submit\">")]), _vm._v(" 提交按钮")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("<input type=\"reset\">")]), _vm._v(" 重设按钮")])]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_vm._v("/* 锚点按钮不具备聚焦(:focus)轮廓 */\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn\"")]), _vm._v(">")]), _vm._v("Basic Anchor Button"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn\"")]), _vm._v(">")]), _vm._v("Basic Button"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('a', {
    staticClass: "v-btn"
  }, [_vm._v("Basic Anchor Button")]), _vm._v(" "), _c('button', {
    staticClass: "v-btn"
  }, [_vm._v("Basic Button")]), _vm._v(" "), _c('input', {
    staticClass: "v-btn",
    attrs: {
      "type": "submit",
      "value": "Submit input"
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "v-btn",
    attrs: {
      "type": "reset",
      "value": "Reset input"
    }
  })]), _vm._v(" "), _c('h3', [_vm._v("a.颜色(colors)")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("灰色系按钮")])]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-white\"")]), _vm._v(">")]), _vm._v("White"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-light\"")]), _vm._v(">")]), _vm._v("Light"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-dark\"")]), _vm._v(">")]), _vm._v("Dark"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-black\"")]), _vm._v(">")]), _vm._v("Black"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-link\"")]), _vm._v(">")]), _vm._v("Link"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('a', {
    staticClass: "v-btn is-white"
  }, [_vm._v("White")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-light"
  }, [_vm._v("Light")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-dark"
  }, [_vm._v("Dark")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-black"
  }, [_vm._v("Black")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-link"
  }, [_vm._v("Link")])]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("带色系按钮")])]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-primary\"")]), _vm._v(">")]), _vm._v("Primary"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-info\"")]), _vm._v(">")]), _vm._v("Info"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-success\"")]), _vm._v(">")]), _vm._v("Success"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-warning\"")]), _vm._v(">")]), _vm._v("Warning"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-danger\"")]), _vm._v(">")]), _vm._v("Danger"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('a', {
    staticClass: "v-btn is-primary"
  }, [_vm._v("Primary")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-info"
  }, [_vm._v("Info")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-success"
  }, [_vm._v("Success")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-warning"
  }, [_vm._v("Warning")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-danger"
  }, [_vm._v("Danger")])]), _vm._v(" "), _c('h3', [_vm._v("b.尺寸(sizes)")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-small\"")]), _vm._v(">")]), _vm._v("Small"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn\"")]), _vm._v(">")]), _vm._v("Normal"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-medium\"")]), _vm._v(">")]), _vm._v("Medium"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-large\"")]), _vm._v(">")]), _vm._v("Large"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('a', {
    staticClass: "v-btn is-small"
  }, [_vm._v("Small")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn"
  }, [_vm._v("Normal")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-medium"
  }, [_vm._v("Medium")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-large"
  }, [_vm._v("Large")])]), _vm._v(" "), _c('h3', [_vm._v("c.风格(styles)")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("轮廓按钮")])]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-outlined\"")]), _vm._v(">")]), _vm._v("Outlined"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-primary is-outlined\"")]), _vm._v(">")]), _vm._v("Outlined"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-info is-outlined\"")]), _vm._v(">")]), _vm._v("Outlined"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-success is-outlined\"")]), _vm._v(">")]), _vm._v("Outlined"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-danger is-outlined\"")]), _vm._v(">")]), _vm._v("Outlined"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('a', {
    staticClass: "v-btn is-outlined"
  }, [_vm._v("Outlined")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-primary is-outlined"
  }, [_vm._v("Outlined")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-info is-outlined"
  }, [_vm._v("Outlined")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-success is-outlined"
  }, [_vm._v("Outlined")]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-danger is-outlined"
  }, [_vm._v("Outlined")])]), _vm._v(" "), _c('p', {
    staticClass: "tip"
  }, [_vm._v("\n  由于 "), _c('code', [_vm._v("warning")]), _vm._v("的主题色太亮，该风格轮廓按钮不建议使用 .\n")]), _vm._v(" "), _c('h3', [_vm._v("d.状态(states)")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("正常(normal) - 悬停(hover) - 激活(active) - 聚焦(focus)")])]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn\"")]), _vm._v(">")]), _vm._v("Normal"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-hovered\"")]), _vm._v(">")]), _vm._v("Hover"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-active\"")]), _vm._v(">")]), _vm._v("Active"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-focused\"")]), _vm._v(">")]), _vm._v("Focus"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-loading\"")]), _vm._v(">")]), _vm._v("Loading"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-loading\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("Disabled"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-loading is-disabled\"")]), _vm._v(">")]), _vm._v("Disabled Class"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    pre: true,
    attrs: {
      "class": "sd-states-buttons"
    }
  }, [_c('div', {
    attrs: {
      "class": "demo-box has-pad-sm"
    }
  }, [_c('a', {
    attrs: {
      "class": "v-btn"
    }
  }, [_vm._v("Normal")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-primary"
    }
  }, [_vm._v("Normal")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-info"
    }
  }, [_vm._v("Normal")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-success"
    }
  }, [_vm._v("Normal")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-warning"
    }
  }, [_vm._v("Normal")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-danger"
    }
  }, [_vm._v("Normal")])]), _vm._v(" "), _c('div', {
    attrs: {
      "class": "demo-box has-pad-sm"
    }
  }, [_c('a', {
    attrs: {
      "class": "v-btn is-hovered"
    }
  }, [_vm._v("Hover")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-primary is-hovered"
    }
  }, [_vm._v("Hover")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-info is-hovered"
    }
  }, [_vm._v("Hover")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-success is-hovered"
    }
  }, [_vm._v("Hover")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-warning is-hovered"
    }
  }, [_vm._v("Hover")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-danger is-hovered"
    }
  }, [_vm._v("Hover")])]), _vm._v(" "), _c('div', {
    attrs: {
      "class": "demo-box has-pad-sm"
    }
  }, [_c('a', {
    attrs: {
      "class": "v-btn is-focused"
    }
  }, [_vm._v("Focus")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-primary is-focused"
    }
  }, [_vm._v("Focus")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-info is-focused"
    }
  }, [_vm._v("Focus")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-success is-focused"
    }
  }, [_vm._v("Focus")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-warning is-focused"
    }
  }, [_vm._v("Focus")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-danger is-focused"
    }
  }, [_vm._v("Focus")])]), _vm._v(" "), _c('div', {
    attrs: {
      "class": "demo-box has-pad-sm"
    }
  }, [_c('a', {
    attrs: {
      "class": "v-btn is-active"
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-primary is-active"
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-info is-active"
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-success is-active"
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-warning is-active"
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-danger is-active"
    }
  }, [_vm._v("Active")])]), _vm._v(" "), _c('div', {
    attrs: {
      "class": "demo-box has-pad-sm"
    }
  }, [_c('a', {
    attrs: {
      "class": "v-btn is-loading"
    }
  }, [_vm._v("Loading")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-primary is-loading"
    }
  }, [_vm._v("Loading")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-info is-loading"
    }
  }, [_vm._v("Loading")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-success is-loading"
    }
  }, [_vm._v("Loading")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-warning is-loading"
    }
  }, [_vm._v("Loading")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-danger is-loading"
    }
  }, [_vm._v("Loading")])]), _vm._v(" "), _c('div', {
    attrs: {
      "class": "demo-box has-pad-sm"
    }
  }, [_c('a', {
    attrs: {
      "class": "v-btn",
      "title": "Disabled button",
      "disabled": ""
    }
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-primary is-disabled",
      "title": "Disabled button"
    }
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-info",
      "title": "Disabled button",
      "disabled": ""
    }
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-success",
      "title": "Disabled button",
      "disabled": ""
    }
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-warning",
      "title": "Disabled button",
      "disabled": ""
    }
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('a', {
    attrs: {
      "class": "v-btn is-danger",
      "title": "Disabled button",
      "disabled": ""
    }
  }, [_vm._v("Disabled")])])]), _vm._v(" "), _c('h3', [_vm._v("其他(Modifiers)")]), _vm._v(" "), _c('p', [_vm._v("通过组合适当的修饰符，已支持了如下一些特定功能")]), _vm._v(" "), _c('h4', [_vm._v("图标按钮(icon)")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-github\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("GitHub"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-primary\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-chrome fa-lg\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("Chrome"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box"
  }, [_c('a', {
    staticClass: "v-btn is-medium"
  }, [_c('span', {
    staticClass: "has-icon"
  }, [_c('i', {
    staticClass: "fa fa-github"
  })]), _vm._v(" "), _c('span', [_vm._v("GitHub")])]), _vm._v(" "), _c('a', {
    staticClass: "v-btn is-primary"
  }, [_c('span', {
    staticClass: "has-icon"
  }, [_c('i', {
    staticClass: "fa fa-chrome fa-lg"
  })]), _vm._v(" "), _c('span', [_vm._v("Chrome")])])]), _vm._v(" "), _c('h4', [_vm._v("按钮组(group buttons)")]), _vm._v(" "), _c('p', [_vm._v("Grouped按钮组是单行按钮布局(Base on "), _c('code', [_vm._v("Flex")]), _vm._v(")，主要由"), _c('code', [_vm._v("v-field")]), _vm._v("容器修饰符"), _c('code', [_vm._v("is-grouped")]), _vm._v("来控制"), _c('code', [_vm._v("v-control")]), _vm._v("容器布局做到的，这两个容器是必须的 .")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field is-grouped\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-primary\"")]), _vm._v(">")]), _vm._v("Submit"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control is-expanded\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn\"")]), _vm._v(">")]), _vm._v("Cancel"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('div', {
    staticClass: "v-field is-grouped"
  }, [_c('p', {
    staticClass: "v-control"
  }, [_c('a', {
    staticClass: "v-btn is-primary"
  }, [_c('span', {
    staticClass: "has-icon"
  }, [_c('i', {
    staticClass: "fa fa-rocket"
  })]), _vm._v(" "), _c('span', [_vm._v("\n          Biu Biu ...\n        ")])])]), _vm._v(" "), _c('p', {
    staticClass: "v-control is-expanded"
  }, [_c('a', {
    staticClass: "v-btn"
  }, [_c('span', {
    staticClass: "has-icon"
  }, [_c('i', {
    staticClass: "fa fa-power-off"
  })]), _vm._v(" "), _c('span', [_vm._v("\n          Power off\n        ")])])])])]), _vm._v(" "), _c('p', {
    staticClass: "tip"
  }, [_vm._v("\n  详细的 "), _c('code', [_vm._v("v-field")]), _vm._v(", "), _c('code', [_vm._v("v-control")]), _vm._v(" 用法说明以及设计概要将会在 Form 章节中讲解 .\n")]), _vm._v(" "), _c('h4', [_vm._v("附加按钮(addons buttons)")]), _vm._v(" "), _c('p', [_vm._v("Addon主要由"), _c('code', [_vm._v("v-field")]), _vm._v("容器修饰符"), _c('code', [_vm._v("has-addons")]), _vm._v("来控制"), _c('code', [_vm._v("v-control")]), _vm._v("容器样式做到的，这两个容器是必须的 .")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field has-addons has-addons-centered\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-backward\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon has-text-danger\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-play\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("Play"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n  ...\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('div', {
    staticClass: "v-field has-addons has-addons-centered"
  }, [_c('p', {
    staticClass: "v-control"
  }, [_c('a', {
    staticClass: "v-btn"
  }, [_c('span', {
    staticClass: "has-icon"
  }, [_c('i', {
    staticClass: "fa fa-backward"
  })]), _vm._v(" "), _c('span', [_vm._v("Back")])])]), _vm._v(" "), _c('p', {
    staticClass: "v-control"
  }, [_c('a', {
    staticClass: "v-btn"
  }, [_c('span', {
    staticClass: "has-icon has-text-danger"
  }, [_c('i', {
    staticClass: "fa fa-play"
  })]), _vm._v(" "), _c('span', [_vm._v("Play")])])]), _vm._v(" "), _c('p', {
    staticClass: "v-control"
  }, [_c('a', {
    staticClass: "v-btn"
  }, [_c('span', {
    staticClass: "has-icon"
  }, [_c('i', {
    staticClass: "fa fa-forward"
  })]), _vm._v(" "), _c('span', [_vm._v("Next")])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2f48ba65", module.exports)
  }
}

/***/ }),
/* 52 */
/*!*********************************!*\
  !*** ./pages/elements/form.vue ***!
  \*********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./form.vue */ 53),
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-9b573fe0"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./form.vue */ 54),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/elements/form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9b573fe0", Component.options)
  } else {
    hotAPI.reload("data-v-9b573fe0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 53 */
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./pages/elements/form.vue ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_docs_lib_MaybeLongCodeMixin__ = __webpack_require__(/*! docs_lib/MaybeLongCodeMixin */ 16);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

  mixins: [__WEBPACK_IMPORTED_MODULE_0_docs_lib_MaybeLongCodeMixin__["a" /* default */]],

  mounted: function mounted() {
    this._initMaybeLongCode();
  }
});

/***/ }),
/* 54 */
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9b573fe0"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/elements/form.vue ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("表单 Form")]), _vm._v(" "), _c('p', [_vm._v("Vui表单样式控制，并非局限"), _c('code', [_vm._v("form")]), _vm._v("元素，这里更多作为一个收录数据的抽象容器，通过父子修饰符共同协作，\n完成多样化!姑且，就把这种抽象叫做 "), _c('strong', [_vm._v("表单控制系统")]), _vm._v(" "), _c('code', [_vm._v("Form Controls")]), _vm._v("，那么既然是系统，就有一定的规矩了 .")]), _vm._v(" "), _c('p', [_vm._v("可被 直接或间接 管理的元件如下:")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', [_vm._v(".v-label")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v(".v-help")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v(".v-input")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v(".v-textarea")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v(".v-select")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v(".v-checkbox")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v(".v-radio")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v(".v-btn")])])]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-label\"")]), _vm._v(">")]), _vm._v("昵称"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-input\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"text\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"text input\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-label\"")]), _vm._v(">")]), _vm._v("真实姓名"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control has-icons-left has-icons-right\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-input is-success\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"text\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Text input\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Charlie\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-small is-left\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-user\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-small is-right\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-check\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-help is-success\"")]), _vm._v(">")]), _vm._v("This username is available"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-label\"")]), _vm._v(">")]), _vm._v("邮箱"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control has-icons-left has-icons-right\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-input is-danger\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"email\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Email input\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"hello@\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-small is-left\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-envelope\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-small is-right\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-warning\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-help is-danger\"")]), _vm._v(">")]), _vm._v("邮箱不可用提示 [v-help].is-danger"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-label\"")]), _vm._v(">")]), _vm._v("Subject"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-select\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("select")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("Select dropdown"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("With options"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("select")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-label\"")]), _vm._v(">")]), _vm._v("Message"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("textarea")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-textarea\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Textarea\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("textarea")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-checkbox\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"checkbox\"")]), _vm._v(">")]), _vm._v("\n      I agree to the "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("href")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"#\"")]), _vm._v(">")]), _vm._v("terms and conditions"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-label\"")]), _vm._v(">")]), _vm._v("\n    Joined ?\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-radio\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"radio\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"question\"")]), _vm._v(">")]), _vm._v("\n      Yes\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-radio\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"radio\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"question\"")]), _vm._v(">")]), _vm._v("\n      No\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field is-grouped\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-primary\"")]), _vm._v(">")]), _vm._v("Submit"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-link\"")]), _vm._v(">")]), _vm._v("Cancel"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box sd-form-example-cnt __maybe-long-code",
    attrs: {
      "pre": ""
    }
  }, [_c('div', {
    staticClass: "v-field"
  }, [_c('label', {
    staticClass: "v-label"
  }, [_vm._v("昵称")]), _vm._v(" "), _c('div', {
    staticClass: "v-control"
  }, [_c('input', {
    staticClass: "v-input",
    attrs: {
      "type": "text",
      "placeholder": "text input"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('label', {
    staticClass: "v-label"
  }, [_vm._v("真实姓名")]), _vm._v(" "), _c('div', {
    staticClass: "v-control has-icons-left has-icons-right"
  }, [_c('input', {
    staticClass: "v-input is-success",
    attrs: {
      "type": "text",
      "placeholder": "Text input",
      "value": "Charlie"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-small is-left"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-small is-right"
  }, [_c('i', {
    staticClass: "fa fa-check"
  })])]), _vm._v(" "), _c('p', {
    staticClass: "v-help is-success"
  }, [_vm._v("This username is available")])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('label', {
    staticClass: "v-label"
  }, [_vm._v("邮箱")]), _vm._v(" "), _c('div', {
    staticClass: "v-control has-icons-left has-icons-right"
  }, [_c('input', {
    staticClass: "v-input is-danger",
    attrs: {
      "type": "email",
      "placeholder": "Email input",
      "value": "hello@"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-small is-left"
  }, [_c('i', {
    staticClass: "fa fa-envelope"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-small is-right"
  }, [_c('i', {
    staticClass: "fa fa-warning"
  })])]), _vm._v(" "), _c('p', {
    staticClass: "v-help is-danger"
  }, [_vm._v("邮箱不可用提示 [v-help].is-danger")])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('label', {
    staticClass: "v-label"
  }, [_vm._v("Subject")]), _vm._v(" "), _c('div', {
    staticClass: "v-control"
  }, [_c('div', {
    staticClass: "v-select"
  }, [_c('select', [_c('option', [_vm._v("Select dropdown")]), _vm._v(" "), _c('option', [_vm._v("With options")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('label', {
    staticClass: "v-label"
  }, [_vm._v("Message")]), _vm._v(" "), _c('div', {
    staticClass: "v-control"
  }, [_c('textarea', {
    staticClass: "v-textarea",
    attrs: {
      "placeholder": "Textarea"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('label', {
    staticClass: "v-checkbox"
  }, [_c('input', {
    attrs: {
      "type": "checkbox"
    }
  }), _vm._v("\n        I agree to the "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("terms and conditions")])])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('label', {
    staticClass: "v-label"
  }, [_vm._v("\n      Joined ?\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "v-control"
  }, [_c('label', {
    staticClass: "v-radio"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "question"
    }
  }), _vm._v("\n        Yes\n      ")]), _vm._v(" "), _c('label', {
    staticClass: "v-radio"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "question"
    }
  }), _vm._v("\n        No\n      ")])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field is-grouped"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('button', {
    staticClass: "v-btn is-primary"
  }, [_vm._v("Submit")])]), _vm._v(" "), _c('div', {
    staticClass: "v-control"
  }, [_c('button', {
    staticClass: "v-btn is-link"
  }, [_vm._v("Cancel")])])])]), _vm._v(" "), _c('h3', [_vm._v("域容器 (Form field)")]), _vm._v(" "), _c('p', [_vm._v("由"), _c('code', [_vm._v("v-field")]), _vm._v("修饰, 算是 "), _c('strong', [_vm._v("表单控制系统")]), _vm._v(" 的基本组成单元，可直接管理以下元件")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', [_vm._v("v-label")]), _vm._v(" 输入控件的文本标签")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("v-control")]), _vm._v(" 控件的控制容器")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("v-help")]), _vm._v(" 交互帮助文本")])]), _vm._v(" "), _c('p', [_vm._v("多个"), _c('code', [_vm._v("v-field")]), _vm._v("同级容器具备一定的外间距，请注意 .")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-label\"")]), _vm._v(">")]), _vm._v("Label"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-input\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"text\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Text input\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-help\"")]), _vm._v(">")]), _vm._v("This is a help text"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('div', {
    staticClass: "v-field"
  }, [_c('label', {
    staticClass: "v-label"
  }, [_vm._v("Label")]), _vm._v(" "), _c('div', {
    staticClass: "v-control"
  }, [_c('input', {
    staticClass: "v-input",
    attrs: {
      "type": "text",
      "placeholder": "Text input"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "v-help"
  }, [_vm._v("This is a help text")])])]), _vm._v(" "), _c('h3', [_vm._v("控件容器(Form control)")]), _vm._v(" "), _c('p', [_vm._v("由"), _c('code', [_vm._v("v-control")]), _vm._v("修饰, 该容器用于单个控件包裹，拥有与内部控件同样的高度，目前支持以下控件")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', [_vm._v(".v-input")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v(".v-textarea")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v(".v-select")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v(".v-checkbox")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v(".v-radio")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v(".v-btn")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v(".has-icon")])])]), _vm._v(" "), _c('p', [_vm._v("当多个"), _c('code', [_vm._v("v-control")]), _vm._v("容器需要被管理时，可由 "), _c('code', [_vm._v("v-field")]), _vm._v("容器直接控制，这是必须的! 注意多个同级"), _c('code', [_vm._v("v-control")]), _vm._v("容器\n之间没有间距，是完全无缝堆叠的 !")]), _vm._v(" "), _c('p', [_vm._v("所以，可以通过"), _c('code', [_vm._v("[v-field].is-grouped")]), _vm._v("修饰符，可调整"), _c('code', [_vm._v("v-control")]), _vm._v("为水平布局, 默认以内容宽度为准依次排布 . 如果希望 "), _c('code', [_vm._v("v-control")]), _vm._v("\n弹性排列(flex: 1), 可使用 "), _c('code', [_vm._v("[v-control].is-expanded")]), _vm._v(" 修饰 .")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field is-grouped\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control is-expanded\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-input\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"text\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"[v-control].is-expanded\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-primary\"")]), _vm._v(">")]), _vm._v("\n      Search\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box sd-form-example-cnt"
  }, [_c('div', {
    staticClass: "v-field is-grouped"
  }, [_c('p', {
    staticClass: "v-control is-expanded"
  }, [_c('input', {
    staticClass: "v-input",
    attrs: {
      "type": "text",
      "placeholder": "[v-control].is-expanded"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "v-control"
  }, [_c('a', {
    staticClass: "v-btn is-primary"
  }, [_vm._v("\n        Search\n      ")])])])]), _vm._v(" "), _c('h3', [_vm._v("水平控制(Horizontal form)")]), _vm._v(" "), _c('p', [_vm._v("可以通过"), _c('code', [_vm._v("[v-field].is-horizontal")]), _vm._v("修饰, 两个直接容器")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', [_vm._v("v-field-label")]), _vm._v(" 作为 "), _c('code', [_vm._v("v-label")]), _vm._v("的容器，修饰符"), _c('code', [_vm._v("[v-field-label].is-(small|normal|medium|large)")]), _vm._v("可调整label尺寸(字体大小，相对容器的间距 ，可用于对齐 右侧的输入框)")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("v-field-body")]), _vm._v(" 作为 "), _c('code', [_vm._v("v-field")]), _vm._v("的容器")])]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field is-horizontal\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field-label is-normal\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-label\"")]), _vm._v(">")]), _vm._v("From"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field-body\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control is-expanded has-icons-left\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-input\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"text\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Name\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-small is-left\"")]), _vm._v(">")]), _vm._v("\n          "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-user\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control is-expanded has-icons-left has-icons-right\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-input is-success\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"email\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Email\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"alex@smith.com\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-small is-left\"")]), _vm._v(">")]), _vm._v("\n          "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-envelope\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-small is-right\"")]), _vm._v(">")]), _vm._v("\n          "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-check\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field is-horizontal\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field-label\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field-body\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field is-expanded\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field has-addons\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n          "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-static\"")]), _vm._v(">")]), _vm._v("\n            +86\n          "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control is-expanded\"")]), _vm._v(">")]), _vm._v("\n          "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-input\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"tel\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Your phone number\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-help\"")]), _vm._v(">")]), _vm._v("Do not enter the first zero"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field is-horizontal\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field-label is-normal\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-label\"")]), _vm._v(">")]), _vm._v("Department"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field-body\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field is-narrow\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-select is-fullwidth\"")]), _vm._v(">")]), _vm._v("\n          "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("select")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("Business development"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("Marketing"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("Sales"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("\n          "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("select")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field is-horizontal\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field-label\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-label\"")]), _vm._v(">")]), _vm._v("Joined ?"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field-body\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field is-narrow\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-radio\"")]), _vm._v(">")]), _vm._v("\n          "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"radio\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"member\"")]), _vm._v(">")]), _vm._v("\n          Yes\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-radio\"")]), _vm._v(">")]), _vm._v("\n          "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"radio\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"member\"")]), _vm._v(">")]), _vm._v("\n          No\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field is-horizontal\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field-label is-normal\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-label\"")]), _vm._v(">")]), _vm._v("Subject"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field-body\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-input is-danger\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"text\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"e.g. Partnership opportunity\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-help is-danger\"")]), _vm._v(">")]), _vm._v("\n        This field is required\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field is-horizontal\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field-label is-normal\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-label\"")]), _vm._v(">")]), _vm._v("Question"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field-body\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("textarea")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-textarea\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Explain how we can help you\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("textarea")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field is-horizontal\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field-label\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field-body\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-primary\"")]), _vm._v(">")]), _vm._v("\n          Send message\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box sd-form-example-cnt __maybe-long-code",
    attrs: {
      "pre": ""
    }
  }, [_c('div', {
    staticClass: "v-field is-horizontal"
  }, [_c('div', {
    staticClass: "v-field-label is-normal"
  }, [_c('label', {
    staticClass: "v-label"
  }, [_vm._v("From")])]), _vm._v(" "), _c('div', {
    staticClass: "v-field-body"
  }, [_c('div', {
    staticClass: "v-field"
  }, [_c('p', {
    staticClass: "v-control is-expanded has-icons-left"
  }, [_c('input', {
    staticClass: "v-input",
    attrs: {
      "type": "text",
      "placeholder": "Name"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-small is-left"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('p', {
    staticClass: "v-control is-expanded has-icons-left has-icons-right"
  }, [_c('input', {
    staticClass: "v-input is-success",
    attrs: {
      "type": "email",
      "placeholder": "Email",
      "value": "alex@smith.com"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-small is-left"
  }, [_c('i', {
    staticClass: "fa fa-envelope"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-small is-right"
  }, [_c('i', {
    staticClass: "fa fa-check"
  })])])])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field is-horizontal"
  }, [_c('div', {
    staticClass: "v-field-label"
  }), _vm._v(" "), _c('div', {
    staticClass: "v-field-body"
  }, [_c('div', {
    staticClass: "v-field is-expanded"
  }, [_c('div', {
    staticClass: "v-field has-addons"
  }, [_c('p', {
    staticClass: "v-control"
  }, [_c('a', {
    staticClass: "v-btn is-static"
  }, [_vm._v("\n              +86\n            ")])]), _vm._v(" "), _c('p', {
    staticClass: "v-control is-expanded"
  }, [_c('input', {
    staticClass: "v-input",
    attrs: {
      "type": "tel",
      "placeholder": "Your phone number"
    }
  })])]), _vm._v(" "), _c('p', {
    staticClass: "v-help"
  }, [_vm._v("Do not enter the first zero")])])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field is-horizontal"
  }, [_c('div', {
    staticClass: "v-field-label is-normal"
  }, [_c('label', {
    staticClass: "v-label"
  }, [_vm._v("Department")])]), _vm._v(" "), _c('div', {
    staticClass: "v-field-body"
  }, [_c('div', {
    staticClass: "v-field is-narrow"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('div', {
    staticClass: "v-select is-fullwidth"
  }, [_c('select', [_c('option', [_vm._v("Business development")]), _vm._v(" "), _c('option', [_vm._v("Marketing")]), _vm._v(" "), _c('option', [_vm._v("Sales")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field is-horizontal"
  }, [_c('div', {
    staticClass: "v-field-label"
  }, [_c('label', {
    staticClass: "v-label"
  }, [_vm._v("Joined ?")])]), _vm._v(" "), _c('div', {
    staticClass: "v-field-body"
  }, [_c('div', {
    staticClass: "v-field is-narrow"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('label', {
    staticClass: "v-radio"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "member"
    }
  }), _vm._v("\n            Yes\n          ")]), _vm._v(" "), _c('label', {
    staticClass: "v-radio"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "member"
    }
  }), _vm._v("\n            No\n          ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field is-horizontal"
  }, [_c('div', {
    staticClass: "v-field-label is-normal"
  }, [_c('label', {
    staticClass: "v-label"
  }, [_vm._v("Subject")])]), _vm._v(" "), _c('div', {
    staticClass: "v-field-body"
  }, [_c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('input', {
    staticClass: "v-input is-danger",
    attrs: {
      "type": "text",
      "placeholder": "e.g. Partnership opportunity"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "v-help is-danger"
  }, [_vm._v("\n          This field is required\n        ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field is-horizontal"
  }, [_c('div', {
    staticClass: "v-field-label is-normal"
  }, [_c('label', {
    staticClass: "v-label"
  }, [_vm._v("Question")])]), _vm._v(" "), _c('div', {
    staticClass: "v-field-body"
  }, [_c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('textarea', {
    staticClass: "v-textarea",
    attrs: {
      "placeholder": "Explain how we can help you"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field is-horizontal"
  }, [_c('div', {
    staticClass: "v-field-label"
  }), _vm._v(" "), _c('div', {
    staticClass: "v-field-body"
  }, [_c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('button', {
    staticClass: "v-btn is-primary"
  }, [_vm._v("\n            Send message\n          ")])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9b573fe0", module.exports)
  }
}

/***/ }),
/* 55 */
/*!**********************************!*\
  !*** ./pages/elements/input.vue ***!
  \**********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  null,
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-d6906da4"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./input.vue */ 56),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/elements/input.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] input.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d6906da4", Component.options)
  } else {
    hotAPI.reload("data-v-d6906da4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 56 */
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d6906da4"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/elements/input.vue ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("Input")]), _vm._v(" "), _c('p', [_vm._v("文本输入框，目前支持以下输入类型：")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', [_vm._v("type=\"text\"")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("type=\"password\"")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("type=\"email\"")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("type=\"tel\"")])])]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"text\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-input\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Text input\"")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('input', {
    staticClass: "v-input",
    attrs: {
      "type": "text",
      "placeholder": "Text input"
    }
  })]), _vm._v(" "), _c('h3', [_vm._v("颜色(colors)")]), _vm._v(" "), _c('p', [_vm._v("支持全部主题色"), _c('code', [_vm._v("[v-input].is-(colors)")]), _vm._v("修饰 .")]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('div', {
    staticClass: "v-field"
  }, [_c('p', {
    staticClass: "v-control"
  }, [_c('input', {
    staticClass: "v-input is-danger",
    attrs: {
      "type": "tel",
      "placeholder": ".is-danger"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('p', {
    staticClass: "v-control"
  }, [_c('input', {
    staticClass: "v-input is-primary",
    attrs: {
      "type": "email",
      "placeholder": ".is-primary"
    }
  })])])]), _vm._v(" "), _c('h3', [_vm._v("尺寸(sizes)")]), _vm._v(" "), _c('p', [_vm._v("支持尺寸控制"), _c('code', [_vm._v("[v-input].is-(small|medium|large)")]), _vm._v("修饰 .")]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('input', {
    staticClass: "v-input is-small",
    attrs: {
      "type": "text",
      "placeholder": "[v-input].is-small"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('input', {
    staticClass: "v-input",
    attrs: {
      "type": "text",
      "placeholder": "Default size"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('input', {
    staticClass: "v-input is-medium",
    attrs: {
      "type": "text",
      "placeholder": "[v-input].is-medium"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('input', {
    staticClass: "v-input is-large",
    attrs: {
      "type": "text",
      "placeholder": "[v-input].is-large"
    }
  })])])]), _vm._v(" "), _c('h3', [_vm._v("状态(states)")]), _vm._v(" "), _c('p', [_vm._v("通用状态支持 .")]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('input', {
    staticClass: "v-input",
    attrs: {
      "type": "text",
      "placeholder": "Default state"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('input', {
    staticClass: "v-input is-hovered",
    attrs: {
      "type": "text",
      "placeholder": "[v-input].is-hovered"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('input', {
    staticClass: "v-input is-focused",
    attrs: {
      "type": "text",
      "placeholder": "[v-input].is-focused"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control is-loading is-medium"
  }, [_c('input', {
    staticClass: "v-input is-info is-medium",
    attrs: {
      "type": "text",
      "placeholder": "[v-control].is-loading"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control is-loading is-large"
  }, [_c('input', {
    staticClass: "v-input is-danger is-large",
    attrs: {
      "type": "text",
      "placeholder": "[v-control].is-loading"
    }
  })])])]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control is-loading is-large\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-input is-danger is-large\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"text\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"[v-control].is-loading\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('p', {
    staticClass: "tip"
  }, [_c('code', [_vm._v("Loading")]), _vm._v("状态下，加载图标的大小是由 "), _c('code', [_vm._v("[v-control].is-large")]), _vm._v(" 修饰符控制，"), _c('code', [_vm._v("[v-input].is-large")]), _vm._v(" 尺寸修饰符只能调整\n  输入框的大小，请注意 !\n")]), _vm._v(" "), _c('h3', [_vm._v("其他(misc)")]), _vm._v(" "), _c('p', [_vm._v("附加字体图标，由控制容器"), _c('code', [_vm._v("v-control")]), _vm._v("的边界修饰符，配合字体图标容器"), _c('code', [_vm._v("has-icon")]), _vm._v("的位置修饰符 来确定 .")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', [_vm._v("[v-control].has-icons-left")])]), _vm._v(" "), _c('li', [_vm._v("and/or "), _c('code', [_vm._v("[v-control].has-icons-right")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("[has-icon].is-left")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("[has-icon].is-right")])])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('div', {
    staticClass: "v-field"
  }, [_c('p', {
    staticClass: "v-control has-icons-left has-icons-right"
  }, [_c('input', {
    staticClass: "v-input",
    attrs: {
      "type": "email",
      "placeholder": "Chrome"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-small is-left"
  }, [_c('i', {
    staticClass: "fa fa-chrome"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-small is-right"
  }, [_c('i', {
    staticClass: "fa fa-check"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('p', {
    staticClass: "v-control has-icons-left"
  }, [_c('input', {
    staticClass: "v-input",
    attrs: {
      "type": "password",
      "placeholder": "Password"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-small is-left"
  }, [_c('i', {
    staticClass: "fa fa-github"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "v-control has-icons-left has-icons-right"
  }, [_c('input', {
    staticClass: "v-input is-large",
    attrs: {
      "type": "email",
      "placeholder": "Email"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-medium is-left"
  }, [_c('i', {
    staticClass: "fa fa-envelope"
  })]), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-medium is-right"
  }, [_c('i', {
    staticClass: "fa fa-check"
  })])])]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control has-icons-left has-icons-right\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-input\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"email\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Chrome\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-small is-left\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-chrome\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-small is-right\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-check\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control has-icons-left\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-input\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"password\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Password\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-small is-left\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-github\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control has-icons-left has-icons-right\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-input is-large\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"email\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Email\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-medium is-left\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-envelope\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-medium is-right\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-check\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d6906da4", module.exports)
  }
}

/***/ }),
/* 57 */
/*!***********************************!*\
  !*** ./pages/elements/select.vue ***!
  \***********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  null,
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-4f86cf48"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./select.vue */ 58),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/elements/select.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] select.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f86cf48", Component.options)
  } else {
    hotAPI.reload("data-v-4f86cf48", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 58 */
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4f86cf48"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/elements/select.vue ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("Select")]), _vm._v(" "), _c('p', [_vm._v("下拉框的修饰符整体与"), _c('code', [_vm._v("input")]), _vm._v("类似，需要注意的是，该下拉框是内建原生"), _c('code', [_vm._v("select")]), _vm._v("样式的调整，并非模拟!")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-select\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("select")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("Select dropdown"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("With options"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("select")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('div', {
    staticClass: "v-select"
  }, [_c('select', [_c('option', [_vm._v("Select dropdown")]), _vm._v(" "), _c('option', [_vm._v("With options")])])])]), _vm._v(" "), _c('p', {
    staticClass: "tip"
  }, [_vm._v("\n  切记"), _c('code', [_vm._v("v-select")]), _vm._v(" 不是直接修饰在 "), _c('code', [_vm._v("< select >")]), _vm._v(" 元素上的，而是作为容器包裹住 "), _c('code', [_vm._v("select")]), _vm._v("\n  原生元素 !\n")]), _vm._v(" "), _c('h3', [_vm._v("颜色(colors)")]), _vm._v(" "), _c('p', [_vm._v("通过"), _c('code', [_vm._v("[v-select].is-(colors)")]), _vm._v("修饰 .")]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('div', {
    staticClass: "v-select is-primary"
  }, [_c('select', [_c('option', [_vm._v("Select dropdown")]), _vm._v(" "), _c('option', [_vm._v("With options")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('div', {
    staticClass: "v-select is-info"
  }, [_c('select', [_c('option', [_vm._v("Select dropdown")]), _vm._v(" "), _c('option', [_vm._v("With options")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('div', {
    staticClass: "v-select is-success"
  }, [_c('select', [_c('option', [_vm._v("Select dropdown")]), _vm._v(" "), _c('option', [_vm._v("With options")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('div', {
    staticClass: "v-select is-warning"
  }, [_c('select', [_c('option', [_vm._v("Select dropdown")]), _vm._v(" "), _c('option', [_vm._v("With options")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('div', {
    staticClass: "v-select is-danger"
  }, [_c('select', [_c('option', [_vm._v("Select dropdown")]), _vm._v(" "), _c('option', [_vm._v("With options")])])])])])]), _vm._v(" "), _c('h3', [_vm._v("尺寸(sizes)")]), _vm._v(" "), _c('p', [_vm._v("通过"), _c('code', [_vm._v("[v-select].is-(small|medium|large)")]), _vm._v("修饰 .")]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('div', {
    staticClass: "v-select is-small"
  }, [_c('select', [_c('option', [_vm._v("Select dropdown")]), _vm._v(" "), _c('option', [_vm._v("With options")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('div', {
    staticClass: "v-select"
  }, [_c('select', [_c('option', [_vm._v("Select dropdown")]), _vm._v(" "), _c('option', [_vm._v("With options")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('div', {
    staticClass: "v-select is-medium"
  }, [_c('select', [_c('option', [_vm._v("Select dropdown")]), _vm._v(" "), _c('option', [_vm._v("With options")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('div', {
    staticClass: "v-select is-large"
  }, [_c('select', [_c('option', [_vm._v("Select dropdown")]), _vm._v(" "), _c('option', [_vm._v("With options")])])])])])]), _vm._v(" "), _c('h3', [_vm._v("状态(states)")]), _vm._v(" "), _c('p', [_vm._v("同 "), _c('code', [_vm._v("input")]), _vm._v(" 基本一致 . 除了"), _c('code', [_vm._v("loading")]), _vm._v("状态下，"), _c('code', [_vm._v("is-loading")]), _vm._v("修饰符是在"), _c('code', [_vm._v("v-select")]), _vm._v("容器上 !")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-select is-loading\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("select")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("Select dropdown"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("With options"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("select")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('div', {
    staticClass: "v-select is-loading"
  }, [_c('select', [_c('option', [_vm._v("Select dropdown")]), _vm._v(" "), _c('option', [_vm._v("With options")])])])])]), _vm._v(" "), _c('h4', [_vm._v("ap.图标(icons)")]), _vm._v(" "), _c('p', [_vm._v("同"), _c('code', [_vm._v("input")]), _vm._v("基本一致 . 需要注意的是，图标不能放在右边...你懂得 !")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', [_vm._v("[v-control].has-icons-left")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("[v-select].is-(small|medium|large)")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("[has-icon].is-left")])])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control has-icons-left"
  }, [_c('div', {
    staticClass: "v-select"
  }, [_c('select', [_c('option', {
    attrs: {
      "selected": ""
    }
  }, [_vm._v("Country")]), _vm._v(" "), _c('option', [_vm._v("Select dropdown")]), _vm._v(" "), _c('option', [_vm._v("With options")])])]), _vm._v(" "), _c('div', {
    staticClass: "has-icon is-small is-left"
  }, [_c('i', {
    staticClass: "fa fa-globe"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control has-icons-left"
  }, [_c('div', {
    staticClass: "v-select is-large"
  }, [_c('select', [_c('option', {
    attrs: {
      "selected": ""
    }
  }, [_vm._v("Country")]), _vm._v(" "), _c('option', [_vm._v("Select dropdown")]), _vm._v(" "), _c('option', [_vm._v("With options")])])]), _vm._v(" "), _c('div', {
    staticClass: "has-icon is-large is-left"
  }, [_c('i', {
    staticClass: "fa fa-globe"
  })])])])]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control has-icons-left\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-select\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("select")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("selected")]), _vm._v(">")]), _vm._v("Country"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("Select dropdown"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("With options"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("select")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-small is-left\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-globe\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-field\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control has-icons-left\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-select is-large\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("select")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("selected")]), _vm._v(">")]), _vm._v("Country"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("Select dropdown"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("With options"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("option")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("select")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-large is-left\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-globe\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4f86cf48", module.exports)
  }
}

/***/ }),
/* 59 */
/*!*************************************!*\
  !*** ./pages/elements/textarea.vue ***!
  \*************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  null,
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-518d34f4"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./textarea.vue */ 60),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/elements/textarea.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] textarea.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-518d34f4", Component.options)
  } else {
    hotAPI.reload("data-v-518d34f4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 60 */
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-518d34f4"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/elements/textarea.vue ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("Textarea")]), _vm._v(" "), _c('p', [_vm._v("多行文本框修饰方式基本与"), _c('code', [_vm._v("input")]), _vm._v(", "), _c('code', [_vm._v("select")]), _vm._v("一致. 除了图标不能折腾，还有你懂得 ...")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("textarea")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-textarea is-danger\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"e.g. Hello world\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("textarea")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("textarea")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-textarea\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"e.g. Hello world\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("textarea")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("textarea")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-textarea is-primary is-large\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"e.g. Hello world\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("textarea")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("textarea")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-textarea is-success has-fixed-size is-small\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"这个框框不能缩放[v-textarea].has-fixed-size\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("textarea")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("textarea")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-textarea\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"Disabled\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("textarea")]), _vm._v(">")]), _vm._v("\n\n// 注意修饰位置\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control is-loading\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("textarea")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-textarea is-warning\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"注意我是在控制容器上😯 [v-control].is-loading\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("textarea")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('textarea', {
    staticClass: "v-textarea is-danger",
    attrs: {
      "placeholder": "e.g. Hello world"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('textarea', {
    staticClass: "v-textarea",
    attrs: {
      "placeholder": "e.g. Hello world"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('textarea', {
    staticClass: "v-textarea is-primary is-large",
    attrs: {
      "placeholder": "e.g. Hello world"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('textarea', {
    staticClass: "v-textarea is-success has-fixed-size is-small",
    attrs: {
      "placeholder": "这个框框不能缩放[v-textarea].has-fixed-size"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control is-loading"
  }, [_c('textarea', {
    staticClass: "v-textarea is-warning",
    attrs: {
      "placeholder": "注意我是在控制容器上😯 [v-control].is-loading"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('textarea', {
    staticClass: "v-textarea",
    attrs: {
      "placeholder": "Disabled",
      "disabled": ""
    }
  })])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-518d34f4", module.exports)
  }
}

/***/ }),
/* 61 */
/*!**************************************!*\
  !*** ./pages/elements/form_misc.vue ***!
  \**************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  null,
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-28f29f2a"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./form_misc.vue */ 62),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/elements/form_misc.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] form_misc.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28f29f2a", Component.options)
  } else {
    hotAPI.reload("data-v-28f29f2a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 62 */
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-28f29f2a"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/elements/form_misc.vue ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("Form Misc")]), _vm._v(" "), _c('p', [_vm._v("其他相关的form原生元素 .")]), _vm._v(" "), _c('h3', [_vm._v("复选框 checkbox")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-checkbox\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"checkbox\"")]), _vm._v(">")]), _vm._v("\n  Remember me\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('div', {
    staticClass: "v-field"
  }, [_c('label', {
    staticClass: "v-checkbox"
  }, [_c('input', {
    attrs: {
      "type": "checkbox"
    }
  }), _vm._v("\n      Remember me\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('label', {
    staticClass: "v-checkbox",
    attrs: {
      "disabled": ""
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "disabled": ""
    }
  }), _vm._v("\n      Save my preferences\n    ")])])]), _vm._v(" "), _c('h3', [_vm._v("单选框 radio")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-control\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-radio\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"radio\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"os\"")]), _vm._v(">")]), _vm._v("\n    OS X\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-radio\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"radio\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"os\"")]), _vm._v(">")]), _vm._v("\n    Linux\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-radio\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"radio\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"os\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("\n    Windows\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("label")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('label', {
    staticClass: "v-radio"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "os"
    }
  }), _vm._v("\n      OS X\n    ")]), _vm._v(" "), _c('label', {
    staticClass: "v-radio"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "os"
    }
  }), _vm._v("\n      Linux\n    ")]), _vm._v(" "), _c('label', {
    staticClass: "v-radio",
    attrs: {
      "disabled": ""
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "os",
      "disabled": ""
    }
  }), _vm._v("\n      Windows\n    ")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-28f29f2a", module.exports)
  }
}

/***/ }),
/* 63 */
/*!**********************************!*\
  !*** ./pages/elements/close.vue ***!
  \**********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  null,
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-1237885c"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./close.vue */ 64),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/elements/close.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] close.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1237885c", Component.options)
  } else {
    hotAPI.reload("data-v-1237885c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 64 */
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1237885c"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/elements/close.vue ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("关闭 Close")]), _vm._v(" "), _c('p', [_vm._v("由"), _c('code', [_vm._v("v-close")]), _vm._v("修饰, 因为后面有些基本的元件要用到, 索性就独立出来了 .")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-close\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box"
  }, [_c('a', {
    staticClass: "v-close"
  })]), _vm._v(" "), _c('h3', [_vm._v("颜色(Colors)")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-close\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-close is-primary\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-close is-info\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-close is-danger\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-close is-success\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box"
  }, [_c('a', {
    staticClass: "v-close"
  }), _vm._v(" "), _c('a', {
    staticClass: "v-close is-primary"
  }), _vm._v(" "), _c('a', {
    staticClass: "v-close is-info"
  }), _vm._v(" "), _c('a', {
    staticClass: "v-close is-danger"
  }), _vm._v(" "), _c('a', {
    staticClass: "v-close is-success"
  })]), _vm._v(" "), _c('h3', [_vm._v("尺寸(Sizes)")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-close is-small\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-close\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-close is-medium\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-close is-large\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box"
  }, [_c('a', {
    staticClass: "v-close is-small"
  }), _vm._v(" "), _c('a', {
    staticClass: "v-close"
  }), _vm._v(" "), _c('a', {
    staticClass: "v-close is-medium"
  }), _vm._v(" "), _c('a', {
    staticClass: "v-close is-large"
  })]), _vm._v(" "), _c('h3', [_vm._v("状态(States)")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', [_vm._v("is-transparent")]), _vm._v(" 透明背景")])]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-close is-transparent\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-close is-transparent is-danger is-large\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('a', {
    staticClass: "v-close is-transparent"
  }), _vm._v(" "), _c('a', {
    staticClass: "v-close is-transparent is-danger is-large"
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1237885c", module.exports)
  }
}

/***/ }),
/* 65 */
/*!********************************!*\
  !*** ./pages/elements/box.vue ***!
  \********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./box.vue */ 66),
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-c488eca2"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./box.vue */ 67),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/elements/box.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] box.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c488eca2", Component.options)
  } else {
    hotAPI.reload("data-v-c488eca2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 66 */
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./pages/elements/box.vue ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      searchVal: '',
      errPending: false
    };
  },


  methods: {
    _clickSearch: function _clickSearch() {
      if (this.searchVal.trim() === '') {
        var elInput = this.$el.querySelector('[name=s_key]');
        elInput.focus();
        this._notifyErr('请填写你要搜索的内容 🔍');
      } else {
        window.open('https://www.google.com.hk/search?q=' + encodeURIComponent(this.searchVal));
      }
    },
    _notifyErr: function _notifyErr(msg) {
      var _this = this;

      this.errPending = msg;

      setTimeout(function () {
        _this.errPending = '';
      }, 3000);
    }
  }
});

/***/ }),
/* 67 */
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c488eca2"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/elements/box.vue ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("块状盒子 Box")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "demo-box"
  }, [_c('div', {
    staticClass: "v-box"
  }, [_c('h1', [_vm._v("\n      hi, i am a Box :)\n    ")]), _vm._v(" "), _c('p', [_vm._v("\n      很久很久以前 ...\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "v-cols"
  }, [_c('div', {
    staticClass: "v-col is-8"
  }, [_c('div', {
    staticClass: "v-field is-grouped"
  }, [_c('div', {
    staticClass: "v-control is-expanded"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchVal),
      expression: "searchVal"
    }],
    staticClass: "v-input",
    class: {
      'is-danger': _vm.errPending
    },
    attrs: {
      "name": "s_key",
      "placeholder": "please input it"
    },
    domProps: {
      "value": (_vm.searchVal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchVal = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "v-control"
  }, [_c('button', {
    staticClass: "v-btn is-primary",
    on: {
      "click": _vm._clickSearch
    }
  }, [_vm._m(2), _vm._v(" "), _c('strong', [_vm._v("Search")])])])]), _vm._v(" "), _c('div', {
    staticClass: "v-field"
  }, [_c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errPending),
      expression: "errPending"
    }],
    staticClass: "v-help",
    class: {
      'is-danger': _vm.errPending
    }
  }, [_vm._v(_vm._s(_vm.errPending))])])])])]), _vm._v(" "), _vm._m(3)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("一个简单的容纳元件的抽象块状容器 , 拥有默认的 "), _c('code', [_vm._v("shadow")]), _vm._v(", "), _c('code', [_vm._v("border")]), _vm._v(", "), _c('code', [_vm._v("radius")]), _vm._v(", 及 "), _c('code', [_vm._v("padding")]), _vm._v(".")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-box\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("h1")]), _vm._v(">")]), _vm._v("\n    hi, i am a Box :)\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("h1")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n    很久很久以前 ...\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-box\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("h1")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("style")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"margin: 0\"")]), _vm._v(">")]), _vm._v("\n    hi, i am an "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("code")]), _vm._v(">")]), _vm._v("Anchor"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("code")]), _vm._v(">")]), _vm._v(" Box :)\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("h1")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "has-icon"
  }, [_c('i', {
    staticClass: "fa fa-search"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "v-box"
  }, [_c('h1', {
    staticStyle: {
      "margin": "0"
    }
  }, [_vm._v("\n      hi, i am an "), _c('code', [_vm._v("Anchor")]), _vm._v(" Box :)\n    ")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c488eca2", module.exports)
  }
}

/***/ }),
/* 68 */
/*!******************************************!*\
  !*** ./pages/elements/notifications.vue ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./notifications.vue */ 69),
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-2878bb4c"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./notifications.vue */ 78),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/elements/notifications.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] notifications.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2878bb4c", Component.options)
  } else {
    hotAPI.reload("data-v-2878bb4c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 69 */
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./pages/elements/notifications.vue ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_root_packages_notification__ = __webpack_require__(/*! root/packages/notification */ 70);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    _clickShowNotifications: function _clickShowNotifications() {
      var fn = ['info', 'success', 'alert', 'warn', 'error'][Math.floor(Math.random() * 5)];
      __WEBPACK_IMPORTED_MODULE_0_root_packages_notification__["a" /* default */][fn]('\n        I will never close automatically.\n        I will be close automatically.\n        I will never close automatically.\n      ', {
        title: '我是标题我怕谁'
      });
    }
  }
});

/***/ }),
/* 70 */
/*!*****************************************!*\
  !*** ../packages/notification/index.js ***!
  \*****************************************/
/*! exports provided: default, NotificationFactory */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NotificationFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(/*! vue */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__impl_vue__ = __webpack_require__(/*! ./impl.vue */ 71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__impl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__impl_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__impl_popup_vue__ = __webpack_require__(/*! ./impl_popup.vue */ 75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__impl_popup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__impl_popup_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__impl_vue___default.a; });
/**
 * Created by charlie on 9/30/16.
 */





let NotificationConstructor = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_2__impl_popup_vue___default.a);

let instance;
let instances = [];
let seed = 1;

const GUTTER_NOTICE = 16;

let NotificationFactory = function (options) {
  options = options || {};

  let userOnClose = options.onClose;
  let id = `v-notification_${seed}++`;

  options.onClose = function () {
    NotificationFactory.close(id, userOnClose);
  };

  instance = new NotificationConstructor({
    data: options
  });

  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);

  instance.vm.visible = true;
  instance.dom = instance.vm.$el;

  let topDist = 0;
  for (let i = 0, len = instances.length; i < len; i++) {
    topDist += instances[i].$el.offsetHeight + GUTTER_NOTICE;
  }
  topDist += GUTTER_NOTICE;
  instance.top = topDist;
  instances.push(instance);

  return instance;
};

NotificationFactory.close = function (id, userOnClose) {
  let index;
  let removedHeight;
  let len = instances.length;
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      index = i;
      removedHeight = instances[i].dom.offsetHeight;
      instances.splice(i, 1);
      break;
    }
  }

  if (len > 1) {
    for (let i = index; i < len - 1; i++) {
      instances[i].dom.style.top = parseInt(instances[i].dom.style.top, 10) - removedHeight - GUTTER_NOTICE + 'px';
    }
  }
};['alert', 'warn', 'error', 'info', 'success'].forEach(type => {
  NotificationFactory[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }

    options.type = type;
    options.title = options.title || '提示';

    return NotificationFactory(options);
  };
});

__WEBPACK_IMPORTED_MODULE_1__impl_vue___default.a.install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__impl_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_1__impl_vue___default.a);

  Vue.prototype.$VNotification = NotificationFactory;
};



/***/ }),
/* 71 */
/*!*****************************************!*\
  !*** ../packages/notification/impl.vue ***!
  \*****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../.sdocs/node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../.sdocs/node_modules/vue-loader/lib/selector?type=script&index=0!./impl.vue */ 72),
  /* template */
  __webpack_require__(/*! !../../.sdocs/node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-67bb4150"}!../../.sdocs/node_modules/vue-loader/lib/selector?type=template&index=0!./impl.vue */ 74),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/packages/notification/impl.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] impl.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67bb4150", Component.options)
  } else {
    hotAPI.reload("data-v-67bb4150", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 72 */
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../packages/notification/impl.vue ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sources_utils_mixin__ = __webpack_require__(/*! ../../sources/utils/mixin */ 3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VNotification',

  mixins: [Object(__WEBPACK_IMPORTED_MODULE_0__sources_utils_mixin__["a" /* createMixins */])(['color'])],

  props: {
    title: {
      type: String,
      'default': null
    },

    subtitle: {
      type: String,
      'default': null
    },

    message: {
      type: String
    },

    closable: {
      type: Boolean,
      'default': true
    }
  },

  methods: {
    _handleClose(e) {
      this.$emit('close', this, e);
    }
  }
});

/***/ }),
/* 73 */
/*!***********************************!*\
  !*** ../sources/mixins/common.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(/*! ../utils */ 17);


/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    color: {
      type: [Boolean, String],
      default: false
    },
    size: {
      type: [Boolean, String],
      default: false
    },
    extras: {
      type: Array,
      default: Array
    },
    state: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    hoverable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    magic: {
      type: String,
      'default': ''
    },
    flex: {
      type: [Boolean, String],
      default: false
    },
    col: {
      type: [Number, String],
      default: 0
    },
    offset: {
      type: [Number, String],
      default: 0
    },
    value: {
      type: [String, Number, Boolean, Object, Array],
      default: ''
    },
    textField: {
      type: String,
      default: 'text'
    },
    valueField: {
      type: String,
      default: 'value'
    },
    options: {
      type: Array,
      default: Array
    },
    option: {
      type: Object,
      default: Object
    },
    type: {
      type: [Number, String],
      default: 0
    },
    align: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    colorModifier() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* trust */])(this.color) ? `is-${this.color}` : '';
    },
    sizeModifier() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* trust */])(this.size) ? `is-${this.size}` : '';
    },
    extrasModifier() {
      if (!this.extras || !Array.isArray(this.extras)) {
        return '';
      }

      return this.extras.map(it => {
        return `is-${it}`;
      });
    },
    stateModifier() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* trust */])(this.state) ? `is-${this.state}` : '';
    },
    magicModifier() {
      if (!this.magic || !this.magic.trim()) {
        return '';
      }

      let magic = this.magic.split('-');

      magic = magic.map(n => {
        return `is-${Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* hyphenCase */])(n)}`;
      });

      return magic.join(' ');
    },
    colModifier() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* trust */])(this.col) ? `is-${this.col}` : '';
    },
    offsetModifier() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* trust */])(this.offset) ? `is-offset-${this.offset}` : '';
    },
    disabledModifier() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* trust */])(this.disabled) ? `is-disabled` : '';
    },
    activeModifier() {
      return this.active ? `is-active` : '';
    },
    hoverableModifier() {
      return this.hoverable ? `is-hoverable` : '';
    },
    flexModifier() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* trust */])(this.flex) ? `is-${this.flex}` : '';
    },
    typeModifier() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* trust */])(this.type) ? `is-${this.type}` : '';
    },
    alignModifier() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* trust */])(this.align) ? `is-${this.align}` : '';
    },
    blockModifier() {
      return this.block ? `is-block` : '';
    },
    inlineModifier() {
      return this.inline ? `is-inline` : '';
    },
    verticalModifier() {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* trust */])(this.vertical) ? `is-vertical` : '';
    }
  }
});

/***/ }),
/* 74 */
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-67bb4150"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../packages/notification/impl.vue ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-notification",
    class: [_vm.colorModifier]
  }, [(_vm.title != null) ? _c('h1', {
    staticClass: "has-title"
  }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]) : _vm._e(), _vm._v(" "), (_vm.subtitle != null) ? _c('h2', {
    staticClass: "has-subtitle"
  }, [_vm._v("\n    " + _vm._s(_vm.subtitle) + "\n  ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "has-content"
  }, [_vm._t("default", [_vm._v("\n      " + _vm._s(_vm.message) + "\n    ")])], 2), _vm._v(" "), _vm._t("close", [(_vm.closable) ? _c('a', {
    staticClass: "v-close",
    on: {
      "click": _vm._handleClose
    }
  }) : _vm._e()])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-67bb4150", module.exports)
  }
}

/***/ }),
/* 75 */
/*!***********************************************!*\
  !*** ../packages/notification/impl_popup.vue ***!
  \***********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../.sdocs/node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../.sdocs/node_modules/vue-loader/lib/selector?type=script&index=0!./impl_popup.vue */ 76),
  /* template */
  __webpack_require__(/*! !../../.sdocs/node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-59728c7d"}!../../.sdocs/node_modules/vue-loader/lib/selector?type=template&index=0!./impl_popup.vue */ 77),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/packages/notification/impl_popup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] impl_popup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59728c7d", Component.options)
  } else {
    hotAPI.reload("data-v-59728c7d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 76 */
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../packages/notification/impl_popup.vue ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const typeMaps = {
  success: 'success',
  info: 'info',
  warn: 'warning',
  error: 'danger',
  alert: 'alert'
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VNotificationPopup',

  data() {
    return {
      visible: false,
      title: '',
      message: '',
      duration: 4000,
      type: '',
      onClose: null,
      closed: false,
      top: null,
      timer: null
    };
  },

  computed: {
    typeClass() {
      return this.type && typeMaps[this.type] ? typeMaps[this.type] : '';
    }
  },

  watch: {
    closed: function (newVal) {
      if (true === newVal) {
        this.visible = false;
      }
    }
  },

  methods: {
    _afterAnimatedLeave() {
      // Clear
      this.$nextTick(() => {
        this.$destroy();
        this.$el.parentNode.removeChild(this.$el);
      });
    },
    _handleClose() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this._handleClose();
          }
        }, this.duration);
      }
    }
  },

  created() {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this._handleClose();
        }
      }, this.duration);
    }
  }
});

/***/ }),
/* 77 */
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-59728c7d"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../packages/notification/impl_popup.vue ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "enter-active-class": "animated bounceInRight",
      "leave-active-class": "animated fadeOut"
    },
    on: {
      "after-leave": _vm._afterAnimatedLeave
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "v-notification-popup",
    style: ({
      top: _vm.top ? _vm.top + 'px' : 'auto'
    }),
    on: {
      "mouseenter": function($event) {
        _vm.clearTimer()
      },
      "mouseleave": function($event) {
        _vm.startTimer()
      }
    }
  }, [_c('div', {
    staticClass: "v-notification",
    class: [("is-" + _vm.typeClass)]
  }, [_c('h2', {
    staticClass: "has-title"
  }, [_vm._v("\n        " + _vm._s(_vm.title) + "\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "has-content"
  }, [_vm._v("\n        " + _vm._s(_vm.message) + "\n      ")]), _vm._v(" "), _c('a', {
    staticClass: "v-close",
    on: {
      "click": _vm._handleClose
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-59728c7d", module.exports)
  }
}

/***/ }),
/* 78 */
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2878bb4c"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/elements/notifications.vue ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("通知 Notifications")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "demo-box"
  }, [_c('button', {
    staticClass: "v-btn",
    on: {
      "click": _vm._clickShowNotifications
    }
  }, [_vm._v("\n    click me to show random notifications\n  ")])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h3', [_vm._v("颜色(Colors)")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("由"), _c('code', [_vm._v("v-notification")]), _vm._v("修饰，可交互带关闭("), _c('code', [_vm._v("close")]), _vm._v(")按钮的通知元件 . 需要与 "), _c('code', [_vm._v("v-message")]), _vm._v(" 区别下，消息类组件，通常不带交互设计 .")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"notification\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"delete\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(">")]), _vm._v("\n  Lorem ipsum dolor sit amet, consectetur\n  adipiscing elit lorem ipsum dolor. "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("strong")]), _vm._v(">")]), _vm._v("Pellentesque risus mi"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("strong")]), _vm._v(">")]), _vm._v(", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("felis venenatis"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v(" efficitur. Sit amet,\n  consectetur adipiscing elit\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('div', {
    staticClass: "v-notification"
  }, [_c('button', {
    staticClass: "v-close is-transparent is-medium"
  }), _vm._v("\n    Lorem ipsum dolor sit amet, consectetur\n    adipiscing elit lorem ipsum dolor. "), _c('strong', [_vm._v("Pellentesque risus mi")]), _vm._v(", tempus quis placerat ut, porta nec nulla.\n    Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum "), _c('a', [_vm._v("felis venenatis")]), _vm._v(" efficitur. Sit amet,\n    consectetur adipiscing elit .\n    "), _c('h5', {
    staticStyle: {
      "margin": "10px 0"
    }
  }, [_vm._v("\n      我们都是中国人 ~\n    ")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_vm._v("支持主题色")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "demo-box has-pad-sm",
    attrs: {
      "pre": ""
    }
  }, [_c('div', {
    staticClass: "v-notification is-light"
  }, [_c('button', {
    staticClass: "v-close"
  }), _vm._v("\n    Lorem ipsum dolor sit amet, consectetur\n    adipiscing elit lorem ipsum dolor. "), _c('strong', [_vm._v("Pellentesque risus mi")]), _vm._v(", tempus quis placerat ut, porta nec nulla.\n    Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum "), _c('a', [_vm._v("felis venenatis")]), _vm._v(" efficitur. Sit amet,\n    consectetur adipiscing elit .\n    "), _c('h5', {
    staticStyle: {
      "margin": "10px 0"
    }
  }, [_vm._v("\n      我们都是中国人 ~\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "v-notification is-black"
  }, [_c('button', {
    staticClass: "v-close"
  }), _vm._v("\n    Lorem ipsum dolor sit amet, consectetur\n    adipiscing elit lorem ipsum dolor. "), _c('strong', [_vm._v("Pellentesque risus mi")]), _vm._v(", tempus quis placerat ut, porta nec nulla.\n    Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum "), _c('a', [_vm._v("felis venenatis")]), _vm._v(" efficitur. Sit amet,\n    consectetur adipiscing elit .\n    "), _c('h5', {
    staticStyle: {
      "margin": "10px 0"
    }
  }, [_vm._v("\n      我们都是中国人 ~\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "v-notification is-success"
  }, [_c('button', {
    staticClass: "v-close"
  }), _vm._v("\n    Lorem ipsum dolor sit amet, consectetur\n    adipiscing elit lorem ipsum dolor. "), _c('strong', [_vm._v("Pellentesque risus mi")]), _vm._v(", tempus quis placerat ut, porta nec nulla.\n    Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum "), _c('a', [_vm._v("felis venenatis")]), _vm._v(" efficitur. Sit amet,\n    consectetur adipiscing elit .\n    "), _c('h5', {
    staticStyle: {
      "margin": "10px 0"
    }
  }, [_vm._v("\n      我们都是中国人 ~\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "v-notification is-warning"
  }, [_c('button', {
    staticClass: "v-close"
  }), _vm._v("\n    Lorem ipsum dolor sit amet, consectetur\n    adipiscing elit lorem ipsum dolor. "), _c('strong', [_vm._v("Pellentesque risus mi")]), _vm._v(", tempus quis placerat ut, porta nec nulla.\n    Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum "), _c('a', [_vm._v("felis venenatis")]), _vm._v(" efficitur. Sit amet,\n    consectetur adipiscing elit .\n    "), _c('h5', {
    staticStyle: {
      "margin": "10px 0"
    }
  }, [_vm._v("\n      我们都是中国人 ~\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "v-notification is-danger"
  }, [_c('button', {
    staticClass: "v-close"
  }), _vm._v("\n    Lorem ipsum dolor sit amet, consectetur\n    adipiscing elit lorem ipsum dolor. "), _c('strong', [_vm._v("Pellentesque risus mi")]), _vm._v(", tempus quis placerat ut, porta nec nulla.\n    Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum "), _c('a', [_vm._v("felis venenatis")]), _vm._v(" efficitur. Sit amet,\n    consectetur adipiscing elit .\n    "), _c('h5', {
    staticStyle: {
      "margin": "10px 0"
    }
  }, [_vm._v("\n      我们都是中国人 ~\n    ")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2878bb4c", module.exports)
  }
}

/***/ }),
/* 79 */
/*!************************************!*\
  !*** ./pages/elements/content.vue ***!
  \************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  null,
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-7fe9f35d"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./content.vue */ 80),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/elements/content.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] content.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fe9f35d", Component.options)
  } else {
    hotAPI.reload("data-v-7fe9f35d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 80 */
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7fe9f35d"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/elements/content.vue ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("富文本内容块 Content")]), _vm._v(" "), _c('p', [_vm._v("由"), _c('code', [_vm._v("v-content")]), _vm._v("修饰，有语意的标签将会携带默认格式，具体样式由设计约定 .")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7fe9f35d", module.exports)
  }
}

/***/ }),
/* 81 */
/*!************************************!*\
  !*** ./pages/components/modal.vue ***!
  \************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./modal.vue */ 82),
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-fa11fe20"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./modal.vue */ 102),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/components/modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fa11fe20", Component.options)
  } else {
    hotAPI.reload("data-v-fa11fe20", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 82 */
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./pages/components/modal.vue ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_packages_modal__ = __webpack_require__(/*! packages/modal */ 83);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      modalVisible: false,
      modalVisible2: false,
      dgVal: '',
      dgErr: ''
    };
  },


  methods: {
    _handleDgVal: function _handleDgVal() {
      var _this = this;

      if (this.dgVal.trim() === '') {
        document.querySelector('input[name=dg]').select();
        return;
      }

      // async value
      var p = new Promise(function (resolve, reject) {
        setTimeout(function () {
          reject('you got an error [' + _this.dgVal + ']');
        }, 3000);
      });

      p.then(function (res) {
        alert(res);
      }, function (err) {
        _this.dgErr = err;
      });

      this.$refs.modal2.$emit('dimission', p);
    }
  },

  components: {
    VModal: __WEBPACK_IMPORTED_MODULE_0_packages_modal__["a" /* default */]
  }
});

/***/ }),
/* 83 */
/*!**********************************!*\
  !*** ../packages/modal/index.js ***!
  \**********************************/
/*! exports provided: modalShared, open, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export open */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(/*! vue */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__impl_vue__ = __webpack_require__(/*! ./impl.vue */ 84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__impl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__impl_vue__);
/**
 * User: charlie
 * Date: 17/10/2017 2:05 PM
 **/




/* istanbul ignore next */
__WEBPACK_IMPORTED_MODULE_1__impl_vue___default.a.install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__impl_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_1__impl_vue___default.a);
};

const modalShared = {
  rootCtx: null
};
/* unused harmony export modalShared */


function open($slots, options = {}, slotData = {}) {
  let _onResolved = () => {};
  let _onRejected = () => {};

  const Dialog = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
    name: 'XVDialog',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__impl_vue___default.a],
    parent: modalShared.rootCtx, // setup `context` shared data
    beforeCreate() {
      if (typeof $slots === 'string') {
        $slots = {
          default: $slots
        };
      }

      // compile slots to vNodes
      Object.keys($slots).forEach(k => {
        const renderer = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.compile($slots[k]);
        const slotCtx = {
          data() {
            slotData = typeof slotData === 'function' ? slotData.call(this) : slotData;

            if (slotData) {
              slotData.onResolved = _onResolved;
              slotData.onRejected = _onRejected;
            }

            return slotData;
          },
          render: renderer.render,
          staticRenderFns: renderer.staticRenderFns,
          components: options.components || {},
          computed: options.computed || {},
          methods: Object.assign(options.methods || {}, {
            getTopDialog() {
              let dialog = this.$parent || null;

              while (dialog) {
                if (dialog.$options.name === 'XVDialog') {
                  break;
                }

                dialog = dialog.$parent;
              }

              return dialog;
            }
          })

          // setup array
        };$slots[k] = [this.$createElement(slotCtx)];
      });

      Object.assign(this.$slots, $slots);
    }
  });

  const _defaults = {
    propsData: {
      visible: true
    }

    // @todo merge strategy
  };if (options.propsData) {
    Object.assign(_defaults.propsData, options.propsData);
    delete options.propsData;
  }

  const vm = new Dialog(Object.assign(_defaults, options));

  return new Promise((resolve, reject) => {
    _onResolved = resolve;
    _onRejected = reject;

    // render it
    vm.$mount();

    document.body.appendChild(vm.$el);

    function forceDestroyElement() {
      // vm.visible = false
      vm.$destroy();
      vm.$el.parentNode.removeChild(vm.$el);
    }

    // preConfirm ?:> ok
    vm.$on('ok', e => {
      resolve(e);
      vm.$emit('close');
    });

    vm.$on('close', e => {
      (!e || e === 'esc' || e === 'cancel') && forceDestroyElement();
    });

    // Fatal error !!
    vm.$on('error', e => {
      reject(e);
      vm.$emit('close');
    });
  });
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1__impl_vue___default.a);

/***/ }),
/* 84 */
/*!**********************************!*\
  !*** ../packages/modal/impl.vue ***!
  \**********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../.sdocs/node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../.sdocs/node_modules/vue-loader/lib/selector?type=script&index=0!./impl.vue */ 85),
  /* template */
  __webpack_require__(/*! !../../.sdocs/node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-0eac5c66"}!../../.sdocs/node_modules/vue-loader/lib/selector?type=template&index=0!./impl.vue */ 101),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/packages/modal/impl.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] impl.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0eac5c66", Component.options)
  } else {
    hotAPI.reload("data-v-0eac5c66", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 85 */
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../packages/modal/impl.vue ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_type_of__ = __webpack_require__(/*! is-type-of */ 18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_type_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_is_type_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sources_utils_mixin__ = __webpack_require__(/*! ../../sources/utils/mixin */ 3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VModal',

  mixins: [Object(__WEBPACK_IMPORTED_MODULE_1__sources_utils_mixin__["a" /* createMixins */])(['size'])],

  props: {
    title: String,
    visible: {
      type: Boolean,
      required: true
    },
    confirmText: {
      type: String,
      'default': '确定'
    },
    cancelText: {
      type: String,
      'default': '取消'
    },
    preConfirm: {
      type: Function,
      'default': Function
    },
    closable: {
      type: Boolean,
      'default': true
    },
    isCard: {
      type: Boolean,
      'default': false
    }
  },

  data() {
    return {};
  },

  created() {
    // handle events
    this.$on('dimission', e => {
      if (__WEBPACK_IMPORTED_MODULE_0_is_type_of___default.a.string(e)) {
        switch (e) {
          case 'close':
            this.$emit('close');
            break;
          case 'esc':
          case 'cancel':
            this.$emit('close', e);
            break;
          case 'confirm':
            Promise.resolve(this.preConfirm.call(this)).then(res => {
              this.$emit('ok', res);
            }).catch(err => {
              // Handle error by `preConfirm` hook
            });
            break;
        }
      } else if (__WEBPACK_IMPORTED_MODULE_0_is_type_of___default.a.promise(e)) {
        e.then(() => {
          this.$emit('close');
        }, err => {
          this.$emit('error');
          console.debug(err);
        });
      }
    });
  },

  mounted() {
    // Esc close
    document.addEventListener('keyup', this._handleEscClose, false);
  },

  computed: {
    _visible() {
      return this.visible;
    }
  },

  methods: {
    _handleClose() {
      this.closable && this.$emit('dimission', 'close');
    },

    _handleEscClose(e) {
      if (this._visible && this.closable) {
        if (e.keyCode === 27) {
          this.$emit('dimission', 'esc');
        }
      }
    }
  },

  beforeDestroy() {
    // Clear listeners
    document.removeEventListener('keyup', this._handleEscClose, false);
  }
});

/***/ }),
/* 86 */
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 87 */
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 88 */
/*!*******************************************!*\
  !*** ./node_modules/isstream/isstream.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var stream = __webpack_require__(/*! stream */ 89)


function isStream (obj) {
  return obj instanceof stream.Stream
}


function isReadable (obj) {
  return isStream(obj) && typeof obj._read == 'function' && typeof obj._readableState == 'object'
}


function isWritable (obj) {
  return isStream(obj) && typeof obj._write == 'function' && typeof obj._writableState == 'object'
}


function isDuplex (obj) {
  return isReadable(obj) && isWritable(obj)
}


module.exports            = isStream
module.exports.isReadable = isReadable
module.exports.isWritable = isWritable
module.exports.isDuplex   = isDuplex


/***/ }),
/* 89 */
/*!**************************************************************************!*\
  !*** /Users/charlie/code/s-docs/node_modules/stream-browserify/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = __webpack_require__(/*! events */ 12).EventEmitter;
var inherits = __webpack_require__(/*! inherits */ 8);

inherits(Stream, EE);
Stream.Readable = __webpack_require__(/*! readable-stream/readable.js */ 13);
Stream.Writable = __webpack_require__(/*! readable-stream/writable.js */ 96);
Stream.Duplex = __webpack_require__(/*! readable-stream/duplex.js */ 97);
Stream.Transform = __webpack_require__(/*! readable-stream/transform.js */ 98);
Stream.PassThrough = __webpack_require__(/*! readable-stream/passthrough.js */ 99);

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};


/***/ }),
/* 90 */
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 91 */
/*!*************************************************************************!*\
  !*** ./node_modules/readable-stream/lib/internal/streams/BufferList.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*<replacement>*/

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = __webpack_require__(/*! safe-buffer */ 14).Buffer;
/*</replacement>*/

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

module.exports = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  return BufferList;
}();

/***/ }),
/* 92 */
/*!*************************************************************************!*\
  !*** /Users/charlie/code/s-docs/node_modules/timers-browserify/main.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ 93);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 93 */
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../s-docs/node_modules/webpack/buildin/global.js */ 9), __webpack_require__(/*! ./../../../../s-docs/node_modules/process/browser.js */ 6)))

/***/ }),
/* 94 */
/*!************************************************!*\
  !*** ./node_modules/util-deprecate/browser.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../s-docs/node_modules/webpack/buildin/global.js */ 9)))

/***/ }),
/* 95 */
/*!*****************************************************************!*\
  !*** ./node_modules/readable-stream/lib/_stream_passthrough.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.



module.exports = PassThrough;

var Transform = __webpack_require__(/*! ./_stream_transform */ 24);

/*<replacement>*/
var util = __webpack_require__(/*! core-util-is */ 7);
util.inherits = __webpack_require__(/*! inherits */ 8);
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),
/* 96 */
/*!**********************************************************!*\
  !*** ./node_modules/readable-stream/writable-browser.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/_stream_writable.js */ 15);


/***/ }),
/* 97 */
/*!********************************************************!*\
  !*** ./node_modules/readable-stream/duplex-browser.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/_stream_duplex.js */ 4);


/***/ }),
/* 98 */
/*!***************************************************!*\
  !*** ./node_modules/readable-stream/transform.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./readable */ 13).Transform


/***/ }),
/* 99 */
/*!*****************************************************!*\
  !*** ./node_modules/readable-stream/passthrough.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./readable */ 13).PassThrough


/***/ }),
/* 100 */
/*!********************************************!*\
  !*** ../node_modules/is-class/is-class.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

(function(root) {
  var toString = Function.prototype.toString;

  function fnBody(fn) {
    return toString.call(fn).replace(/^[^{]*{\s*/,'').replace(/\s*}[^}]*$/,'');
  }

  function isClass(fn) {
    return (typeof fn === 'function' &&
            (/^class\s/.test(toString.call(fn)) ||
              (/^.*classCallCheck\(/.test(fnBody(fn)))) // babel.js
            );
  }

  if (true) {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isClass;
    }
    exports.isClass = isClass;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isClass;
    });
  } else {
    root.isClass = isClass;
  }

})(this);



/***/ }),
/* 101 */
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0eac5c66"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../packages/modal/impl.vue ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (!_vm.isCard) ? _c('div', {
    staticClass: "v-modal",
    class: {
      'is-active': _vm._visible
    }
  }, [_c('div', {
    staticClass: "v-modal-overlay"
  }), _vm._v(" "), _c('div', {
    staticClass: "v-modal-content",
    class: [_vm.sizeModifier]
  }, [_vm._t("default")], 2), _vm._v(" "), _c('button', {
    staticClass: "v-modal-close",
    on: {
      "click": _vm._handleClose
    }
  })]) : _c('div', {
    staticClass: "v-modal",
    class: {
      'is-active': _vm._visible
    }
  }, [_c('div', {
    staticClass: "v-modal-overlay"
  }), _vm._v(" "), _c('div', {
    staticClass: "v-modal-card",
    class: [_vm.sizeModifier]
  }, [_c('header', {
    staticClass: "v-modal-card-head"
  }, [_vm._t("header", [_c('div', {
    staticClass: "v-modal-card-title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('button', {
    staticClass: "v-close",
    on: {
      "click": _vm._handleClose
    }
  })])], 2), _vm._v(" "), _c('section', {
    staticClass: "v-modal-card-body"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('footer', {
    staticClass: "v-modal-card-foot"
  }, [_vm._t("footer", [_c('button', {
    staticClass: "v-btn is-primary",
    on: {
      "click": function($event) {
        _vm.$emit('dimission', 'confirm')
      }
    }
  }, [_vm._v(_vm._s(_vm.confirmText))]), _vm._v(" "), _c('button', {
    staticClass: "v-btn is-link",
    on: {
      "click": function($event) {
        _vm.$emit('dimission', 'cancel')
      }
    }
  }, [_vm._v(_vm._s(_vm.cancelText))])])], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0eac5c66", module.exports)
  }
}

/***/ }),
/* 102 */
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-fa11fe20"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/components/modal.vue ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("弹框 Modal")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "demo-box"
  }, [_c('button', {
    staticClass: "v-btn",
    on: {
      "click": function($event) {
        _vm.modalVisible = !_vm.modalVisible
      }
    }
  }, [_vm._v("show Modal\n  ")]), _vm._v(" "), _c('button', {
    staticClass: "v-btn is-primary",
    on: {
      "click": function($event) {
        _vm.modalVisible2 = !_vm.modalVisible2
      }
    }
  }, [_vm._v("show Card Modal\n  ")])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h4', [_vm._v("基本结构")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h4', [_vm._v("卡片式")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('v-modal', {
    attrs: {
      "visible": _vm.modalVisible
    },
    on: {
      "close": function($event) {
        _vm.modalVisible = false
      }
    }
  }, [_c('div', {
    staticClass: "v-box"
  }, [_c('h2', [_vm._v("\n      this is my modal component\n    ")])])]), _vm._v(" "), _c('v-modal', {
    ref: "modal2",
    attrs: {
      "visible": _vm.modalVisible2,
      "is-card": true,
      "title": "天若有情，天亦老 !"
    },
    on: {
      "close": function($event) {
        _vm.modalVisible2 = false
      }
    }
  }, [_c('div', {
    staticClass: "sd-card-bd"
  }, [_c('div', {
    staticClass: "v-field"
  }, [_c('div', {
    staticClass: "v-control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.dgVal),
      expression: "dgVal"
    }],
    staticClass: "v-input is-large",
    attrs: {
      "type": "text",
      "name": "dg",
      "placeholder": "hello world"
    },
    domProps: {
      "value": (_vm.dgVal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.dgVal = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "v-help is-danger"
  }, [_vm._v("\n        " + _vm._s(_vm.dgErr) + "\n      ")])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('button', {
    staticClass: "v-btn is-warning is-large",
    on: {
      "click": _vm._handleDgVal
    }
  }, [_vm._v("\n      Get Value and close modal\n    ")])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("由"), _c('code', [_vm._v("v-model")]), _vm._v("修饰，带遮罩层"), _c('code', [_vm._v("v-model-overlay")]), _vm._v("以及关闭"), _c('code', [_vm._v("v-modal-close")]), _vm._v("，内容区域"), _c('code', [_vm._v("v-modal-content")]), _vm._v("\n完全居中的弹出层容器!")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "tip"
  }, [_vm._v("\n  注意，弹框是显隐是由修饰符 "), _c('code', [_vm._v("[v-modal].is-active")]), _vm._v(" 控制 . 动态控制需要js编程 .\n")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-modal\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-modal-overlay\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-modal-content\"")]), _vm._v(">")]), _vm._v("\n    // default modal content\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-modal-close\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-modal\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-modal-overlay\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-modal-card\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("header")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-modal-card-head\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-modal-card-title\"")]), _vm._v(">")]), _c('span', [_vm._v("{{")]), _vm._v(" title "), _c('span', [_vm._v("}}")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-close\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("header")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("section")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-modal-card-body\"")]), _vm._v(">")]), _vm._v("\n      // default content\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("section")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("footer")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-modal-card-foot\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-primary\"")]), _vm._v(">")]), _vm._v("Save changes"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-link\"")]), _vm._v(">")]), _vm._v("Cancel"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("footer")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fa11fe20", module.exports)
  }
}

/***/ }),
/* 103 */
/*!***************************************!*\
  !*** ./pages/components/dropdown.vue ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index?{"id":"data-v-5f56601e","scoped":false,"hasInlineConfig":false}!sass-loader?sourceMap!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./dropdown.vue */ 104)

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./dropdown.vue */ 106),
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-5f56601e"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./dropdown.vue */ 107),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/components/dropdown.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dropdown.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f56601e", Component.options)
  } else {
    hotAPI.reload("data-v-5f56601e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 104 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-5f56601e","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/components/dropdown.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler?{"id":"data-v-5f56601e","scoped":false,"hasInlineConfig":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dropdown.vue */ 105);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ 2)("66f8cdf8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5f56601e\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dropdown.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5f56601e\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dropdown.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 105 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-5f56601e","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/components/dropdown.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 1)();
// imports


// module
exports.push([module.i, "\na.v-dropdown-item {\n  text-decoration: none;\n}\nhr.v-dropdown-divider {\n  margin: 0.5rem 0;\n  border: none;\n}\n", "", {"version":3,"sources":["/./pages/components/dropdown.vue"],"names":[],"mappings":";AACA;EACE,sBAAsB;CACvB;AACD;EACE,iBAAiB;EACjB,aAAa;CACd","file":"dropdown.vue","sourcesContent":["\na.v-dropdown-item {\n  text-decoration: none;\n}\nhr.v-dropdown-divider {\n  margin: 0.5rem 0;\n  border: none;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 106 */
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./pages/components/dropdown.vue ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_docs_lib_MaybeLongCodeMixin__ = __webpack_require__(/*! docs_lib/MaybeLongCodeMixin */ 16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sources_directives_click_outside__ = __webpack_require__(/*! sources/directives/click-outside */ 25);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0_docs_lib_MaybeLongCodeMixin__["a" /* default */]],

  data: function data() {
    return {
      activeA: false,
      activeB: false
    };
  },
  mounted: function mounted() {
    this._initMaybeLongCode();
  },


  methods: {
    _handleClickOutside: function _handleClickOutside(f) {
      try {
        this['active' + f] = false;
      } catch (e) {}
    }
  },

  directives: {
    ClickOutside: __WEBPACK_IMPORTED_MODULE_1_sources_directives_click_outside__["a" /* default */]
  }
});

/***/ }),
/* 107 */
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5f56601e"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/components/dropdown.vue ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("下拉框 Dropdown")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "demo-box __maybe-long-code has-pad-sm"
  }, [_c('div', {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: (function () { return _vm._handleClickOutside('A'); }),
      expression: "() => _handleClickOutside('A')"
    }],
    staticClass: "v-dropdown",
    class: {
      'is-active': _vm.activeA
    }
  }, [_c('div', {
    staticClass: "v-dropdown-trigger"
  }, [_c('button', {
    staticClass: "v-btn",
    attrs: {
      "aria-haspopup": "true",
      "aria-controls": "v-dropdown-menu"
    },
    on: {
      "click": function($event) {
        _vm.activeA = !_vm.activeA
      }
    }
  }, [_c('span', [_vm._v("Dropdown button")]), _vm._v(" "), _vm._m(4)])]), _vm._v(" "), _vm._m(5)])]), _vm._v(" "), _c('h2', [_vm._v("悬停切换 / 手动切换")]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c('div', {
    staticClass: "demo-box",
    attrs: {
      "pre": ""
    }
  }, [_c('div', {
    staticClass: "v-dropdown is-hoverable"
  }, [_c('div', {
    staticClass: "v-dropdown-trigger"
  }, [_c('button', {
    staticClass: "v-btn is-warning",
    attrs: {
      "aria-haspopup": "true",
      "aria-controls": "v-dropdown-menu"
    },
    on: {
      "click": function($event) {
        _vm.activeA = !_vm.activeA
      }
    }
  }, [_c('span', [_vm._v("Hover Me")]), _vm._v(" "), _vm._m(7)])]), _vm._v(" "), _vm._m(8)])]), _vm._v(" "), _c('h2', [_vm._v("菜单对齐")]), _vm._v(" "), _vm._m(9), _vm._v(" "), _vm._m(10), _vm._v(" "), _vm._m(11), _vm._v(" "), _c('div', {
    staticClass: "demo-box"
  }, [_vm._m(12), _vm._v(" "), _c('div', {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: (function () { return _vm._handleClickOutside('B'); }),
      expression: "() => _handleClickOutside('B')"
    }],
    staticClass: "v-dropdown is-up is-right",
    class: {
      'is-active': _vm.activeB
    },
    staticStyle: {
      "float": "right"
    }
  }, [_c('div', {
    staticClass: "v-dropdown-trigger"
  }, [_c('button', {
    staticClass: "v-btn is-light",
    attrs: {
      "aria-haspopup": "true",
      "aria-controls": "v-dropdown-menu"
    },
    on: {
      "click": function($event) {
        _vm.activeB = !_vm.activeB
      }
    }
  }, [_c('span', [_vm._v("Click Me")]), _vm._v(" "), _vm._m(13)])]), _vm._v(" "), _vm._m(14)])]), _vm._v(" "), _vm._m(15)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("下拉框组件 "), _c('code', [_vm._v("v-dropdown")]), _vm._v(" 主要是由 下拉按钮"), _c('code', [_vm._v("v-btn")]), _vm._v(" 以及 下拉菜单"), _c('code', [_vm._v("v-dropdown-menu")]), _vm._v(" 组成的一个容器 , 大体层级结构如下 .")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_c('code', [_vm._v("v-dropdown")]), _vm._v(" 主容器")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("v-dropdown-trigger")]), _vm._v(" 放置"), _c('code', [_vm._v("v-btn")]), _vm._v("的触发容器")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("v-dropdown-menu")]), _vm._v(" 菜单容器，可切换，默认是隐藏的")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("v-dropdown-content")]), _vm._v(" 菜单内容盒子，具备默认白色背景"), _c('code', [_vm._v("background")]), _vm._v(", 阴影"), _c('code', [_vm._v("shadow")]), _vm._v(" 样式")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("v-dropdown-item")]), _vm._v(" 下拉条目, 可以是 "), _c('code', [_vm._v("a")]), _vm._v(" or "), _c('code', [_vm._v("div")])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("v-dropdown-divider")]), _vm._v(" 一条浅灰色水平分割线")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-dropdown is-active\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-dropdown-trigger\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("aria-haspopup")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"true\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("aria-controls")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-dropdown-menu\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("Dropdown button"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-small\"")]), _vm._v(">")]), _vm._v("\n          "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-angle-down\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("aria-hidden")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"true\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-dropdown-menu\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("role")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"menu\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-dropdown-content\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("href")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"#\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-dropdown-item\"")]), _vm._v(">")]), _vm._v("\n        Dropdown item\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-dropdown-item\"")]), _vm._v(">")]), _vm._v("\n        Other dropdown item\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("href")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"#\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-dropdown-item is-active\"")]), _vm._v(">")]), _vm._v("\n        Active dropdown item\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("href")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"#\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-dropdown-item\"")]), _vm._v(">")]), _vm._v("\n        Other dropdown item\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("hr")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-dropdown-divider\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("href")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"#\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-dropdown-item\"")]), _vm._v(">")]), _vm._v("\n        With a divider\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("走一波，注意 菜单切换是由 修饰符 "), _c('code', [_vm._v("[v-dropdown].is-active")]), _vm._v(" 控制 ~")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "has-icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-angle-down",
    attrs: {
      "aria-hidden": "true"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-dropdown-menu",
    attrs: {
      "role": "menu"
    }
  }, [_c('div', {
    staticClass: "v-dropdown-content"
  }, [_c('a', {
    staticClass: "v-dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n          Dropdown item\n        ")]), _vm._v(" "), _c('a', {
    staticClass: "v-dropdown-item"
  }, [_vm._v("\n          Other dropdown item\n        ")]), _vm._v(" "), _c('a', {
    staticClass: "v-dropdown-item is-active",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n          Active dropdown item\n        ")]), _vm._v(" "), _c('a', {
    staticClass: "v-dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n          Other dropdown item\n        ")]), _vm._v(" "), _c('hr', {
    staticClass: "v-dropdown-divider"
  }), _vm._v(" "), _c('a', {
    staticClass: "v-dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n          With a divider\n        ")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_c('code', [_vm._v("[v-dropdown].is-hoverable")]), _vm._v(" 修饰符可以完成悬停切换，这个是CSS实现")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("[v-dropdown].is-active")]), _vm._v(" 修饰符可以完成手动切换，需要js额外处理切换逻辑")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "has-icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-angle-down",
    attrs: {
      "aria-hidden": "true"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-dropdown-menu",
    attrs: {
      "role": "menu"
    }
  }, [_c('div', {
    staticClass: "v-dropdown-content"
  }, [_c('p', {
    staticStyle: {
      "padding": "0 5px"
    }
  }, [_vm._v("You can insert "), _c('strong', [_vm._v("any type of content")]), _vm._v(" within the dropdown menu.")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_vm._v("由"), _c('code', [_vm._v("[v-dropdown].is-right")]), _vm._v(" 修饰符控制水平对齐，默认左对齐 .")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "demo-box",
    attrs: {
      "pre": ""
    }
  }, [_c('div', {
    staticClass: "v-dropdown is-hoverable"
  }, [_c('div', {
    staticClass: "v-dropdown-trigger"
  }, [_c('button', {
    staticClass: "v-btn is-warning",
    attrs: {
      "aria-haspopup": "true",
      "aria-controls": "v-dropdown-menu"
    }
  }, [_c('span', [_vm._v("Hover Me")]), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-angle-down",
    attrs: {
      "aria-hidden": "true"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "v-dropdown-menu",
    attrs: {
      "role": "menu"
    }
  }, [_c('div', {
    staticClass: "v-dropdown-content"
  }, [_c('p', {
    staticStyle: {
      "padding": "0 5px"
    }
  }, [_vm._v("You can insert "), _c('strong', [_vm._v("any type of content")]), _vm._v(" within the dropdown menu.")])])])]), _vm._v(" "), _c('div', {
    staticClass: "v-dropdown is-hoverable is-right",
    staticStyle: {
      "float": "right"
    }
  }, [_c('div', {
    staticClass: "v-dropdown-trigger"
  }, [_c('button', {
    staticClass: "v-btn is-warning",
    attrs: {
      "aria-haspopup": "true",
      "aria-controls": "v-dropdown-menu"
    }
  }, [_c('span', [_vm._v("Hover Me")]), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-angle-down",
    attrs: {
      "aria-hidden": "true"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "v-dropdown-menu",
    attrs: {
      "role": "menu"
    }
  }, [_c('div', {
    staticClass: "v-dropdown-content"
  }, [_c('p', {
    staticStyle: {
      "padding": "0 5px"
    }
  }, [_vm._v("You can insert "), _c('strong', [_vm._v("any type of content")]), _vm._v(" within the dropdown menu.")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_vm._v("由"), _c('code', [_vm._v("[v-dropdown].is-up")]), _vm._v(" 修饰符控制垂直对其，默认底部对其 .")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-dropdown is-hoverable is-up"
  }, [_c('div', {
    staticClass: "v-dropdown-trigger"
  }, [_c('button', {
    staticClass: "v-btn is-warning",
    attrs: {
      "aria-haspopup": "true",
      "aria-controls": "v-dropdown-menu"
    }
  }, [_c('span', [_vm._v("Hover Me")]), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-angle-up",
    attrs: {
      "aria-hidden": "true"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "v-dropdown-menu",
    attrs: {
      "role": "menu"
    }
  }, [_c('div', {
    staticClass: "v-dropdown-content"
  }, [_c('p', {
    staticStyle: {
      "padding": "0 5px"
    }
  }, [_vm._v("You can insert "), _c('strong', [_vm._v("any type of content")]), _vm._v(" within the dropdown menu.")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "has-icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-angle-up",
    attrs: {
      "aria-hidden": "true"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-dropdown-menu",
    attrs: {
      "role": "menu"
    }
  }, [_c('div', {
    staticClass: "v-dropdown-content"
  }, [_c('p', {
    staticStyle: {
      "padding": "0 5px"
    }
  }, [_vm._v("You can insert "), _c('strong', [_vm._v("any type of content")]), _vm._v(" within the dropdown menu.")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"demo-box\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-dropdown is-hoverable is-up\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-dropdown-trigger\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-btn is-warning\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("aria-haspopup")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"true\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("aria-controls")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-dropdown-menu\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("Hover Me"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-small\"")]), _vm._v(">")]), _vm._v("\n          "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-angle-up\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("aria-hidden")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"true\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-dropdown-menu\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("role")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"menu\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-dropdown-content\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("style")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"padding:0 5px\"")]), _vm._v(">")]), _vm._v("You can insert "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("strong")]), _vm._v(">")]), _vm._v("any type of content"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("strong")]), _vm._v(">")]), _vm._v(" within the dropdown menu."), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5f56601e", module.exports)
  }
}

/***/ }),
/* 108 */
/*!**************************************!*\
  !*** ./pages/components/sidebar.vue ***!
  \**************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index?{"id":"data-v-4a13435f","scoped":false,"hasInlineConfig":false}!sass-loader?sourceMap!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./sidebar.vue */ 109)

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  null,
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-4a13435f"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./sidebar.vue */ 111),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/components/sidebar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] sidebar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a13435f", Component.options)
  } else {
    hotAPI.reload("data-v-4a13435f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 109 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-4a13435f","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/components/sidebar.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler?{"id":"data-v-4a13435f","scoped":false,"hasInlineConfig":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./sidebar.vue */ 110);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ 2)("d0e1f9fc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4a13435f\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./sidebar.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4a13435f\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./sidebar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 110 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-4a13435f","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/components/sidebar.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 1)();
// imports


// module
exports.push([module.i, "\n.sd-sidebar-local p {\n  margin: 0;\n  line-height: inherit;\n}\n.sd-sidebar-local .v-sidebar-list {\n  margin: 0;\n  padding: 0;\n}\n.sd-sidebar-local .is-4 {\n  background-color: #f2f2f2;\n}\n", "", {"version":3,"sources":["/./pages/components/sidebar.vue"],"names":[],"mappings":";AACA;EACE,UAAU;EACV,qBAAqB;CACtB;AACD;EACE,UAAU;EACV,WAAW;CACZ;AACD;EACE,0BAA0B;CAC3B","file":"sidebar.vue","sourcesContent":["\n.sd-sidebar-local p {\n  margin: 0;\n  line-height: inherit;\n}\n.sd-sidebar-local .v-sidebar-list {\n  margin: 0;\n  padding: 0;\n}\n.sd-sidebar-local .is-4 {\n  background-color: #f2f2f2;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 111 */
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4a13435f"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/components/sidebar.vue ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("侧边栏 Sidebar")]), _vm._v(" "), _c('p', [_vm._v("一个简单的侧边栏组件，由"), _c('code', [_vm._v("v-sidebar")]), _vm._v("修饰, 支持任意垂直菜单布局 .")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("aside")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-sidebar\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-sidebar-label\"")]), _vm._v(">")]), _vm._v("\n    Label A\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("ul")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-sidebar-list\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("Link Item A"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("Link Item B"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("ul")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-sidebar-label\"")]), _vm._v(">")]), _vm._v("\n    Label B\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("ul")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-sidebar-list\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("Link Item A"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"is-active\"")]), _vm._v(">")]), _vm._v("Active Item B"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("ul")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("Inner Item A"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("Inner Item B"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("ul")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("ul")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("aside")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box sd-sidebar-local",
    attrs: {
      "pre": ""
    }
  }, [_c('div', {
    staticClass: "v-box"
  }, [_c('div', {
    staticClass: "v-cols is-gapless"
  }, [_c('div', {
    staticClass: "v-col is-4"
  }, [_c('aside', {
    staticClass: "v-sidebar"
  }, [_c('p', {
    staticClass: "v-sidebar-label"
  }, [_vm._v("\n            Label A\n          ")]), _vm._v(" "), _c('ul', {
    staticClass: "v-sidebar-list"
  }, [_c('li', [_c('a', [_vm._v("Link Item A")])]), _vm._v(" "), _c('li', [_c('a', [_vm._v("Link Item B")])])]), _vm._v(" "), _c('p', {
    staticClass: "v-sidebar-label"
  }, [_vm._v("\n            Label B\n          ")]), _vm._v(" "), _c('ul', {
    staticClass: "v-sidebar-list"
  }, [_c('li', [_c('a', [_vm._v("Link Item A")])]), _vm._v(" "), _c('li', [_c('a', {
    staticClass: "is-active"
  }, [_vm._v("Active Item B")]), _vm._v(" "), _c('ul', [_c('li', [_c('a', [_vm._v("Inner Item A")])]), _vm._v(" "), _c('li', [_c('a', [_vm._v("Inner Item B")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "v-col"
  }, [_c('main', {
    staticStyle: {
      "padding": "0 1rem"
    }
  }, [_c('h2', {
    staticStyle: {
      "margin": "0"
    }
  }, [_vm._v("\n            Vui\n          ")]), _vm._v(" "), _c('p', [_vm._v("\n            Yet a really simple UI framework :)\n          ")])])])])])]), _vm._v(" "), _c('h3', [_vm._v("其他")]), _vm._v(" "), _c('p', [_vm._v("支持 "), _c('code', [_vm._v("[v-sidebar].is-(small|medium|large)")]), _vm._v(" 尺寸修饰符 .")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4a13435f", module.exports)
  }
}

/***/ }),
/* 112 */
/*!*************************************!*\
  !*** ./pages/components/navbar.vue ***!
  \*************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index?{"id":"data-v-280819dd","scoped":false,"hasInlineConfig":false}!sass-loader?sourceMap!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./navbar.vue */ 113)

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  null,
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-280819dd"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./navbar.vue */ 115),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/components/navbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] navbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-280819dd", Component.options)
  } else {
    hotAPI.reload("data-v-280819dd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 113 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-280819dd","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/components/navbar.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler?{"id":"data-v-280819dd","scoped":false,"hasInlineConfig":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./navbar.vue */ 114);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ 2)("302ec32f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-280819dd\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./navbar.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-280819dd\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./navbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 114 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-280819dd","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/components/navbar.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 1)();
// imports


// module
exports.push([module.i, "\n.sd-navbar-wrap {\n  margin: -1.25rem;\n}\n", "", {"version":3,"sources":["/./pages/components/navbar.vue"],"names":[],"mappings":";AACA;EACE,iBAAiB;CAClB","file":"navbar.vue","sourcesContent":["\n.sd-navbar-wrap {\n  margin: -1.25rem;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 115 */
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-280819dd"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/components/navbar.vue ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("导航栏 Navbar")]), _vm._v(" "), _c('p', [_vm._v("由"), _c('code', [_vm._v("v-navbar")]), _vm._v("修饰，主要用于水平布局的导航类容器，Vui尽可能只控制布局，不去约束内部导航样式，以降低复杂度，提高通用性 .\n基本的层级结构如下:")]), _vm._v(" "), _c('ul', [_c('li', [_c('code', [_vm._v("v-navbar")]), _vm._v(" 主容器\n"), _c('ul', [_c('li', [_c('code', [_vm._v("v-navbar-brand")]), _vm._v(" 一个左侧容器，一直可见，可用于放置Logo, 链接，图标 什么的 ...\n"), _c('ul', [_c('li', [_c('code', [_vm._v("v-navbar-item")]), _vm._v(" 一个垂直撑满的条目容器, 子元素会默认完全居中 "), _c('code', [_vm._v("align-items: center")])])])]), _vm._v(" "), _c('li', [_c('code', [_vm._v("v-navbar-menu")]), _vm._v(" 一个右侧容器，desktop设备一直可见(目前只支持desktop)\n"), _c('ul', [_c('li', [_c('code', [_vm._v("v-navbar-start")]), _vm._v(" 菜单下左容器，可放置什么导航链接之类的 ...")]), _vm._v(" "), _c('li', [_c('code', [_vm._v("v-navbar-end")]), _vm._v(" 菜单下右容器，可放置什么用户头像设置之类的 ...\n"), _c('ul', [_c('li', [_c('code', [_vm._v("v-navbar-item")]), _vm._v(" 看上边")])])])])])])])]), _vm._v(" "), _c('p', [_vm._v("回头补一个层级透视图吧 .")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-navbar has-shadow\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-navbar-brand\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-navbar-item\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon has-text-success\"")]), _vm._v(">")]), _vm._v("\n          "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-wechat fa-2x\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-navbar-menu\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-navbar-end\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-navbar-item\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon\"")]), _vm._v(">")]), _vm._v("\n              "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-github fa-2x\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "demo-box",
    attrs: {
      "pre": ""
    }
  }, [_c('div', {
    staticClass: "v-box",
    staticStyle: {
      "min-height": "300px",
      "overflow": "hidden"
    }
  }, [_c('div', {
    staticClass: "sd-navbar-wrap"
  }, [_c('div', {
    staticClass: "v-navbar has-shadow"
  }, [_c('div', {
    staticClass: "v-navbar-brand"
  }, [_c('span', {
    staticClass: "v-navbar-item"
  }, [_c('span', {
    staticClass: "has-icon has-text-success"
  }, [_c('i', {
    staticClass: "fa fa-wechat fa-2x"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "v-navbar-menu"
  }, [_c('div', {
    staticClass: "v-navbar-end"
  }, [_c('div', {
    staticClass: "v-navbar-item"
  }, [_c('span', {
    staticClass: "has-icon"
  }, [_c('i', {
    staticClass: "fa fa-github fa-2x"
  })])])])])])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin": "2.25rem",
      "padding": "6rem 0",
      "text-align": "center"
    }
  }, [_c('strong', {
    staticStyle: {
      "color": "#999",
      "font-weight": "normal"
    }
  }, [_vm._v("Yet a really simple and impressive UI Framework .")])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-280819dd", module.exports)
  }
}

/***/ }),
/* 116 */
/*!**************************************!*\
  !*** ./pages/components/message.vue ***!
  \**************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./message.vue */ 117),
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-2e83ea8a"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./message.vue */ 127),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/components/message.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] message.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e83ea8a", Component.options)
  } else {
    hotAPI.reload("data-v-2e83ea8a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 117 */
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./pages/components/message.vue ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_packages_message__ = __webpack_require__(/*! packages/message */ 118);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    _showMsg: function _showMsg() {
      var fn = ['success', 'warning', 'info', 'error'][Math.floor(Math.random() * 4)];
      var h = this.$createElement;
      __WEBPACK_IMPORTED_MODULE_0_packages_message__["a" /* default */][fn]({
        size: 'small',
        message: '你有一个快递要收了 ....'
      });
    }
  }
});

/***/ }),
/* 118 */
/*!************************************!*\
  !*** ../packages/message/index.js ***!
  \************************************/
/*! exports provided: default, MessageFactory */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MessageFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(/*! vue */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__impl_vue__ = __webpack_require__(/*! ./impl.vue */ 119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__impl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__impl_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__impl_popup_vue__ = __webpack_require__(/*! ./impl_popup.vue */ 122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__impl_popup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__impl_popup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sources_utils_popup__ = __webpack_require__(/*! ../../sources/utils/popup */ 125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sources_utils_index__ = __webpack_require__(/*! ../../sources/utils/index */ 17);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__impl_vue___default.a; });






const MessageConstructor = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_2__impl_popup_vue___default.a);

let instance;
let instances = [];
let seed = 1;

const MessageFactory = function (options) {
  if (__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$isServer) return;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  let userOnClose = options.onClose;
  let id = 'v_message_' + seed++;

  options.onClose = function () {
    MessageFactory.close(id, userOnClose);
  };
  instance = new MessageConstructor({
    data: options
  });
  instance.id = id;
  if (Object(__WEBPACK_IMPORTED_MODULE_4__sources_utils_index__["b" /* isVNode */])(instance.message)) {
    instance.$slots.default = [instance.message];
    instance.message = null;
  }
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);

  instance.vm.open();

  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = __WEBPACK_IMPORTED_MODULE_3__sources_utils_popup__["a" /* default */].nextZIndex();
  instances.push(instance);

  return instance.vm;
};

['success', 'warn', 'info', 'error'].forEach(type => {
  MessageFactory[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return MessageFactory(options);
  };
});

MessageFactory.close = function (id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
};

MessageFactory.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

__WEBPACK_IMPORTED_MODULE_1__impl_vue___default.a.install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__impl_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_1__impl_vue___default.a);

  Vue.prototype.$VMessage = MessageFactory;
};



/***/ }),
/* 119 */
/*!************************************!*\
  !*** ../packages/message/impl.vue ***!
  \************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../.sdocs/node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../.sdocs/node_modules/vue-loader/lib/selector?type=script&index=0!./impl.vue */ 120),
  /* template */
  __webpack_require__(/*! !../../.sdocs/node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-35f16d68"}!../../.sdocs/node_modules/vue-loader/lib/selector?type=template&index=0!./impl.vue */ 121),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/packages/message/impl.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] impl.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35f16d68", Component.options)
  } else {
    hotAPI.reload("data-v-35f16d68", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 120 */
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../packages/message/impl.vue ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sources_utils_mixin__ = __webpack_require__(/*! ../../sources/utils/mixin */ 3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VMessage',

  mixins: [Object(__WEBPACK_IMPORTED_MODULE_0__sources_utils_mixin__["a" /* createMixins */])(['size', 'color'])],

  props: {
    message: String,

    title: {
      type: String,
      'default': null
    },

    closable: {
      type: Boolean,
      'default': true
    }
  },

  methods: {
    _handleClose(e) {
      this.$emit('close', this, e);
    }
  }
});

/***/ }),
/* 121 */
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-35f16d68"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../packages/message/impl.vue ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('article', {
    staticClass: "v-message",
    class: [_vm.sizeModifier, _vm.colorModifier]
  }, [(_vm.title != null) ? _c('div', {
    staticClass: "v-message-header"
  }, [_c('strong', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), (_vm.closable) ? _c('span', {
    staticClass: "v-close",
    on: {
      "click": _vm._handleClose
    }
  }) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "v-message-body"
  }, [_vm._t("default", [_c('div', {
    staticClass: "has-message"
  }, [_vm._v("\n        " + _vm._s(_vm.message) + "\n      ")])])], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-35f16d68", module.exports)
  }
}

/***/ }),
/* 122 */
/*!******************************************!*\
  !*** ../packages/message/impl_popup.vue ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../.sdocs/node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../.sdocs/node_modules/vue-loader/lib/selector?type=script&index=0!./impl_popup.vue */ 123),
  /* template */
  __webpack_require__(/*! !../../.sdocs/node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-0bffa779"}!../../.sdocs/node_modules/vue-loader/lib/selector?type=template&index=0!./impl_popup.vue */ 124),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/packages/message/impl_popup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] impl_popup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0bffa779", Component.options)
  } else {
    hotAPI.reload("data-v-0bffa779", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 123 */
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../packages/message/impl_popup.vue ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_type_of__ = __webpack_require__(/*! is-type-of */ 18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_type_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_is_type_of__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const typeMaps = {
  success: 'success',
  info: 'info',
  warn: 'warning',
  error: 'danger'
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VMessagePopup',

  data() {
    return {
      message: '',
      type: '',
      size: 'normal', // small, medium, large
      visible: false,
      onClose: null,
      duration: 3000,
      timer: null,
      closed: false // immediate `close` state to ignore animation pending
    };
  },

  watch: {
    'closed'(a) {
      if (a) {
        this.visible = false;
      }
    }
  },

  computed: {
    typeClass() {
      return this.type && typeMaps[this.type] ? typeMaps[this.type] : '';
    }
  },

  methods: {
    _destroyElement() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },

    _afterAnimatedLeave() {
      // Clear
      this.$nextTick(() => {
        this._destroyElement();
      });
    },

    close() {
      this.closed = true;

      if (__WEBPACK_IMPORTED_MODULE_0_is_type_of___default.a.function(this.onClose)) {
        this.onClose(this);
      }
    },

    open() {
      if (!this.visible) {
        this.closed = false;
        this.visible = true;

        this._startTimer();
      }
    },

    _clearTimer() {
      clearTimeout(this.timer);
    },

    _startTimer(e) {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, __WEBPACK_IMPORTED_MODULE_0_is_type_of___default.a.object(e) ? 1000 : this.duration);
      }
    }
  }
});

/***/ }),
/* 124 */
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0bffa779"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../packages/message/impl_popup.vue ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "enter-active-class": "animated fadeInDown",
      "leave-active-class": "animated fadeOutUp"
    },
    on: {
      "after-leave": _vm._afterAnimatedLeave
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "v-message-popup"
  }, [_c('article', {
    staticClass: "v-message",
    class: [("is-" + _vm.typeClass), ("is-" + _vm.size)],
    on: {
      "mouseenter": _vm._clearTimer,
      "mouseleave": _vm._startTimer
    }
  }, [_c('div', {
    staticClass: "v-message-body"
  }, [_vm._t("default", [_c('div', {
    staticClass: "has-message"
  }, [_vm._v("\n            " + _vm._s(_vm.message) + "\n          ")])])], 2)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0bffa779", module.exports)
  }
}

/***/ }),
/* 125 */
/*!*********************************!*\
  !*** ../sources/utils/popup.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(/*! vue */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(/*! ./dom */ 126);



let hasModal = false;

const getModal = function () {
  if (__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$isServer) return;

  let modalDom = PopupManager.modalDom;

  if (modalDom) {
    hasModal = true;
  } else {
    hasModal = false;
    modalDom = document.createElement('div');
    PopupManager.modalDom = modalDom;

    modalDom.addEventListener('touchmove', function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    modalDom.addEventListener('click', function () {
      PopupManager.doOnModalClick && PopupManager.doOnModalClick();
    });
  }

  return modalDom;
};

const instances = {};

const PopupManager = {
  zIndex: 2000,

  modalFade: true,

  getInstance: function (id) {
    return instances[id];
  },

  register: function (id, instance) {
    if (id && instance) {
      instances[id] = instance;
    }
  },

  deregister: function (id) {
    if (id) {
      instances[id] = null;
      delete instances[id];
    }
  },

  nextZIndex: function () {
    return PopupManager.zIndex++;
  },

  modalStack: [],

  doOnModalClick: function () {
    const topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topItem) return;

    const instance = PopupManager.getInstance(topItem.id);
    if (instance && instance.closeOnClickModal) {
      instance.close();
    }
  },

  openModal: function (id, zIndex, dom, modalClass, modalFade) {
    if (__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$isServer) return;
    if (!id || zIndex === undefined) return;
    this.modalFade = modalFade;

    const modalStack = this.modalStack;

    for (let i = 0, j = modalStack.length; i < j; i++) {
      const item = modalStack[i];
      if (item.id === id) {
        return;
      }
    }

    const modalDom = getModal();

    Object(__WEBPACK_IMPORTED_MODULE_1__dom__["a" /* addClass */])(modalDom, 'v-modal');

    if (this.modalFade && !hasModal) {
      Object(__WEBPACK_IMPORTED_MODULE_1__dom__["a" /* addClass */])(modalDom, 'v-modal-enter');
    }

    if (modalClass) {
      let classArr = modalClass.trim().split(/\s+/);
      classArr.forEach(item => Object(__WEBPACK_IMPORTED_MODULE_1__dom__["a" /* addClass */])(modalDom, item));
    }

    setTimeout(() => {
      Object(__WEBPACK_IMPORTED_MODULE_1__dom__["b" /* removeClass */])(modalDom, 'v-modal-enter');
    }, 200);

    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modalDom);
    } else {
      document.body.appendChild(modalDom);
    }

    if (zIndex) {
      modalDom.style.zIndex = zIndex;
    }
    modalDom.style.display = '';

    this.modalStack.push({ id: id, zIndex: zIndex, modalClass: modalClass });
  },

  closeModal: function (id) {
    const modalStack = this.modalStack;
    const modalDom = getModal();

    if (modalStack.length > 0) {
      const topItem = modalStack[modalStack.length - 1];
      if (topItem.id === id) {
        if (topItem.modalClass) {
          let classArr = topItem.modalClass.trim().split(/\s+/);
          classArr.forEach(item => Object(__WEBPACK_IMPORTED_MODULE_1__dom__["b" /* removeClass */])(modalDom, item));
        }

        modalStack.pop();
        if (modalStack.length > 0) {
          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
        }
      } else {
        for (let i = modalStack.length - 1; i >= 0; i--) {
          if (modalStack[i].id === id) {
            modalStack.splice(i, 1);
            break;
          }
        }
      }
    }

    if (modalStack.length === 0) {
      if (this.modalFade) {
        Object(__WEBPACK_IMPORTED_MODULE_1__dom__["a" /* addClass */])(modalDom, 'v-modal-leave');
      }
      setTimeout(() => {
        if (modalStack.length === 0) {
          if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);
          modalDom.style.display = 'none';
          PopupManager.modalDom = undefined;
        }
        Object(__WEBPACK_IMPORTED_MODULE_1__dom__["b" /* removeClass */])(modalDom, 'v-modal-leave');
      }, 200);
    }
  }
};

const getTopPopup = function () {
  if (__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$isServer) return;
  if (PopupManager.modalStack.length > 0) {
    const topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topPopup) return;
    return PopupManager.getInstance(topPopup.id);
  }
};

if (!__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$isServer) {
  // handle `esc` key when the popup is shown
  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
      const topPopup = getTopPopup();

      if (topPopup && topPopup.closeOnPressEscape) {
        topPopup.handleClose ? topPopup.handleClose() : topPopup.handleAction ? topPopup.handleAction('cancel') : topPopup.close();
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = (PopupManager);

/***/ }),
/* 126 */
/*!*******************************!*\
  !*** ../sources/utils/dom.js ***!
  \*******************************/
/*! exports provided: on, off, once, isElement, isVisibleInBody, isDisabled, reflow, hasClass, addClass, removeClass */
/*! exports used: addClass, removeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isElement */
/* unused harmony export isVisibleInBody */
/* unused harmony export isDisabled */
/* unused harmony export reflow */
/* unused harmony export hasClass */
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["b"] = removeClass;
const isServer = Vue.prototype.$isServer;

/* istanbul ignore next */
const on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();
/* unused harmony export on */


/* istanbul ignore next */
const off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();
/* unused harmony export off */


/* istanbul ignore next */
const once = function (el, event, fn) {
  let listener = function () {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};
/* unused harmony export once */


// Determine if an element is an HTML Element
function isElement(el) {
  return el && el.nodeType === Node.ELEMENT_NODE;
}

// Determine if an HTML element is visible - Faster than CSS check
function isVisibleInBody(el) {
  return isElement(el) && document.body.contains(el) && el.getBoundingClientRect().height > 0 && el.getBoundingClientRect().width > 0;
}

// Determine if an element is disabled
function isDisabled(el) {
  return !isElement(el) || el.disabled || el.classList.contains('disabled') || Boolean(el.getAttribute('disabled'));
}

// Cause/wait-for an element to reflow it's content (adjusting it's height/width)
function reflow(el) {
  // requesting an elements offsetHeight will trigger a reflow of the element content
  return isElement(el) && el.offsetHeight;
}

/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}

/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) return;
  let curClass = el.className;
  let classes = (cls || '').split(' ');

  for (let i = 0, j = classes.length; i < j; i++) {
    let clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) return;
  let classes = cls.split(' ');
  let curClass = ' ' + el.className + ' ';

  for (let i = 0, j = classes.length; i < j; i++) {
    let clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}

/***/ }),
/* 127 */
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2e83ea8a"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/components/message.vue ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("消息框 Messages")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "demo-box"
  }, [_c('button', {
    staticClass: "v-btn",
    on: {
      "click": _vm._showMsg
    }
  }, [_vm._v("\n    show popup message\n  ")])]), _vm._v(" "), _vm._m(2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("由"), _c('code', [_vm._v("v-message")]), _vm._v("修饰的一个消息容器 .")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("article")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-message\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-message-body\"")]), _vm._v(">")]), _vm._v("\n    😈    这是一个病毒链接 "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("href")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"\"")]), _vm._v(">")]), _vm._v("http://www.baidu.com"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v(" ...\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("article")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("article")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-message is-warning\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-message-body\"")]), _vm._v(">")]), _vm._v("\n    💔   你的快递被人拿走了 ...\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("article")]), _vm._v(">")]), _vm._v("\n")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "demo-box"
  }, [_c('article', {
    staticClass: "v-message"
  }, [_c('div', {
    staticClass: "v-message-body"
  }, [_vm._v("\n      😈    这是一个病毒链接 "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("http://www.baidu.com")]), _vm._v(" ...\n    ")])]), _vm._v(" "), _c('article', {
    staticClass: "v-message is-warning"
  }, [_c('div', {
    staticClass: "v-message-body"
  }, [_vm._v("\n      💔   你的快递被人拿走了 ...\n    ")])]), _vm._v(" "), _c('article', {
    staticClass: "v-message is-primary"
  }, [_c('div', {
    staticClass: "v-message-body"
  }, [_vm._v("\n     👼   都是天使惹的祸 ...\n    ")])]), _vm._v(" "), _c('article', {
    staticClass: "v-message is-danger"
  }, [_c('div', {
    staticClass: "v-message-body"
  }, [_vm._v("\n      🌎   地球快爆炸了，快跑 ...\n    ")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2e83ea8a", module.exports)
  }
}

/***/ }),
/* 128 */
/*!***********************************!*\
  !*** ./pages/components/card.vue ***!
  \***********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  null,
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-07c1421d"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./card.vue */ 129),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/components/card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07c1421d", Component.options)
  } else {
    hotAPI.reload("data-v-07c1421d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 129 */
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-07c1421d"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/components/card.vue ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("卡片块 Card")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-07c1421d", module.exports)
  }
}

/***/ }),
/* 130 */
/*!**********************************!*\
  !*** ./pages/components/tab.vue ***!
  \**********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index?{"id":"data-v-5104a098","scoped":false,"hasInlineConfig":false}!sass-loader?sourceMap!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./tab.vue */ 131)

var Component = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./tab.vue */ 133),
  /* template */
  __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-5104a098"}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./tab.vue */ 134),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/components/tab.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tab.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5104a098", Component.options)
  } else {
    hotAPI.reload("data-v-5104a098", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 131 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-5104a098","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/components/tab.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler?{"id":"data-v-5104a098","scoped":false,"hasInlineConfig":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tab.vue */ 132);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ 2)("7f35e810", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5104a098\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tab.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5104a098\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tab.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 132 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-5104a098","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/components/tab.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 1)();
// imports


// module
exports.push([module.i, "\n.v-tabs ul {\n  margin: 0;\n  padding: 0;\n}\n.is-grouped .v-btn {\n  margin-right: .5rem;\n}\n", "", {"version":3,"sources":["/./pages/components/tab.vue"],"names":[],"mappings":";AACA;EACE,UAAU;EACV,WAAW;CACZ;AACD;EACE,oBAAoB;CACrB","file":"tab.vue","sourcesContent":["\n.v-tabs ul {\n  margin: 0;\n  padding: 0;\n}\n.is-grouped .v-btn {\n  margin-right: .5rem;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 133 */
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./pages/components/tab.vue ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      alignModifier: '',
      sizeModifier: '',
      styleModifier: '',
      fullwidthModifier: ''
    };
  },


  methods: {
    _handleAlign: function _handleAlign(mode) {
      this.alignModifier = mode;
    },
    _handleSize: function _handleSize(mode) {
      this.sizeModifier = mode;
    }
  },

  computed: {
    _alignCls: function _alignCls() {
      return 'is-' + this.alignModifier;
    },
    _sizeCls: function _sizeCls() {
      return 'is-' + this.sizeModifier;
    }
  }
});

/***/ }),
/* 134 */
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5104a098"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/components/tab.vue ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("选项卡 Tabs")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "demo-box has-pad-sm"
  }, [_c('h4', [_vm._v("😈  点击下面按钮，玩一波  😈")]), _vm._v(" "), _c('h4', [_vm._v("\n    # 对齐方式\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "v-field is-grouped"
  }, [_c('button', {
    staticClass: "v-btn is-small is-link",
    on: {
      "click": function($event) {
        _vm._handleAlign('reset')
      }
    }
  }, [_vm._v("默认")]), _vm._v(" "), _c('button', {
    staticClass: "v-btn is-small is-info",
    on: {
      "click": function($event) {
        _vm._handleAlign('centered')
      }
    }
  }, [_vm._v("[v-tabs].is-centered")]), _vm._v(" "), _c('button', {
    staticClass: "v-btn is-small is-light",
    on: {
      "click": function($event) {
        _vm._handleAlign('right')
      }
    }
  }, [_vm._v("[v-tabs].is-right")])]), _vm._v(" "), _c('h4', [_vm._v("\n    # 尺寸大小\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "v-field is-grouped"
  }, [_c('button', {
    staticClass: "v-btn is-small is-link",
    on: {
      "click": function($event) {
        _vm._handleSize('default')
      }
    }
  }, [_vm._v("默认")]), _vm._v(" "), _c('button', {
    staticClass: "v-btn is-small",
    on: {
      "click": function($event) {
        _vm._handleSize('small')
      }
    }
  }, [_vm._v("[v-tabs].is-small")]), _vm._v(" "), _c('button', {
    staticClass: "v-btn is-small is-primary",
    on: {
      "click": function($event) {
        _vm._handleSize('medium')
      }
    }
  }, [_vm._v("[v-tabs].is-medium")]), _vm._v(" "), _c('button', {
    staticClass: "v-btn is-small is-light",
    on: {
      "click": function($event) {
        _vm._handleSize('large')
      }
    }
  }, [_vm._v("[v-tabs].is-large")])]), _vm._v(" "), _c('h4', [_vm._v("\n    # 边框样式\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "v-field is-grouped"
  }, [_c('button', {
    staticClass: "v-btn is-small is-link",
    on: {
      "click": function($event) {
        _vm.styleModifier = ''
      }
    }
  }, [_vm._v("默认")]), _vm._v(" "), _c('button', {
    staticClass: "v-btn is-small",
    on: {
      "click": function($event) {
        _vm.styleModifier = 'boxed'
      }
    }
  }, [_vm._v("[v-tabs].is-boxed")]), _vm._v(" "), _c('button', {
    staticClass: "v-btn is-small is-warning",
    on: {
      "click": function($event) {
        _vm.styleModifier = 'toggle'
      }
    }
  }, [_vm._v("[v-tabs].is-toggle")]), _vm._v(" "), _c('button', {
    staticClass: "v-btn is-small is-black",
    on: {
      "click": function($event) {
        _vm.fullwidthModifier = (_vm.fullwidthModifier ? '' : 'fullwidth')
      }
    }
  }, [_vm._v("[v-tabs].is-fullwidth")])]), _vm._v(" "), _c('hr', {
    staticStyle: {
      "border-color": "transparent"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "v-tabs",
    class: [_vm._alignCls, _vm._sizeCls, ("is-" + _vm.styleModifier), ("is-" + _vm.fullwidthModifier)]
  }, [_vm._m(1)])]), _vm._v(" "), _vm._m(2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("由"), _c('code', [_vm._v("v-tabs")]), _vm._v("修饰，水平布局，且带可切换状态条目的容器 .")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', {
    staticClass: "is-active"
  }, [_c('a', [_vm._v("Pictures")])]), _vm._v(" "), _c('li', [_c('a', [_vm._v("Music")])]), _vm._v(" "), _c('li', [_c('a', [_c('span', {
    staticClass: "has-icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-github"
  })]), _vm._v(" "), _c('span', [_vm._v("Github")])])]), _vm._v(" "), _c('li', [_c('a', [_vm._v("Documents")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs",
      "data-lang": "html"
    }
  }, [_c('code', [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"v-tabs is-centered\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("ul")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"is-active\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("Pictures"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("Music"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n          "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"has-icon is-small\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"fa fa-github\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("i")]), _vm._v(">")]), _vm._v("\n          "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("Github"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _vm._v("Documents"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("a")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("li")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("ul")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5104a098", module.exports)
  }
}

/***/ }),
/* 135 */
/*!*****************************!*\
  !*** ./pages/customize.vue ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  null,
  /* template */
  __webpack_require__(/*! !../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-d0582012"}!../node_modules/vue-loader/lib/selector?type=template&index=0!./customize.vue */ 136),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/customize.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] customize.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d0582012", Component.options)
  } else {
    hotAPI.reload("data-v-d0582012", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 136 */
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d0582012"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/customize.vue ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("Customize")]), _vm._v(" "), _c('p', [_vm._v("Sooner ~~ 😯")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('pre', [_c('code', [_vm._v("But still you also could checkout the source code :)\n")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d0582012", module.exports)
  }
}

/***/ }),
/* 137 */
/*!*****************************!*\
  !*** ./pages/examples2.vue ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap&-autoprefixer!../node_modules/vue-loader/lib/style-compiler/index?{"id":"data-v-a03c0486","scoped":false,"hasInlineConfig":false}!sass-loader?sourceMap!../node_modules/vue-loader/lib/selector?type=styles&index=0!./examples2.vue */ 138)

var Component = __webpack_require__(/*! ../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../node_modules/vue-loader/lib/selector?type=script&index=0!./examples2.vue */ 140),
  /* template */
  __webpack_require__(/*! !../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-a03c0486"}!../node_modules/vue-loader/lib/selector?type=template&index=0!./examples2.vue */ 185),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/examples2.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] examples2.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a03c0486", Component.options)
  } else {
    hotAPI.reload("data-v-a03c0486", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 138 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-a03c0486","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/examples2.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader?sourceMap&-autoprefixer!../node_modules/vue-loader/lib/style-compiler?{"id":"data-v-a03c0486","scoped":false,"hasInlineConfig":false}!../node_modules/sass-loader/lib/loader.js?sourceMap!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./examples2.vue */ 139);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ 2)("ce11994e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a03c0486\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/sass-loader/lib/loader.js?sourceMap!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./examples2.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a03c0486\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/sass-loader/lib/loader.js?sourceMap!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./examples2.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 139 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-a03c0486","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/examples2.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ 1)();
// imports


// module
exports.push([module.i, "\n.v-table {\n  display: table !important;\n}\n.my-x-table thead > tr th:first-child {\n  width: 80px;\n}\n", "", {"version":3,"sources":["/./pages/examples2.vue"],"names":[],"mappings":";AACA;EACE,0BAA0B;CAC3B;AACD;EACE,YAAY;CACb","file":"examples2.vue","sourcesContent":["\n.v-table {\n  display: table !important;\n}\n.my-x-table thead > tr th:first-child {\n  width: 80px;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 140 */
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./pages/examples2.vue ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_packages_dropdown__ = __webpack_require__(/*! packages/dropdown */ 141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_packages_table__ = __webpack_require__(/*! packages/table */ 149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_packages_switch__ = __webpack_require__(/*! packages/switch */ 153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_packages_pagination__ = __webpack_require__(/*! packages/pagination */ 159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_packages_form__ = __webpack_require__(/*! packages/form */ 163);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      formData: {
        price: '请选择价格',
        isCheap: true,
        note: 'hello',
        tag: null,
        schoolCheck: [],
        isOwn: null
      },
      page: 6,
      tableCols: ['__select|', 'first', 'second|第二'],
      tableRows: [{
        first: 'a',
        second: 'b'
      }]
    };
  },


  methods: {
    _addRow: function _addRow() {
      this.tableRows.push({
        first: 'cc',
        second: 'dd'
      });
    },
    _handleOnPage: function _handleOnPage(page) {
      var _this = this;

      console.debug('async ...', page);
      this.$refs.pager.disabled = true;
      setTimeout(function (n) {
        _this.$refs.pager.disabled = false;
      }, 3000);
    }
  },

  components: {
    Dropdown: __WEBPACK_IMPORTED_MODULE_0_packages_dropdown__["b" /* default */],
    DropdownItem: __WEBPACK_IMPORTED_MODULE_0_packages_dropdown__["a" /* DropdownItem */],
    VTable: __WEBPACK_IMPORTED_MODULE_1_packages_table__["a" /* default */], VSwitch: __WEBPACK_IMPORTED_MODULE_2_packages_switch__["a" /* default */],
    VForm: __WEBPACK_IMPORTED_MODULE_4_packages_form__["f" /* default */], VField: __WEBPACK_IMPORTED_MODULE_4_packages_form__["b" /* Field */], VInput: __WEBPACK_IMPORTED_MODULE_4_packages_form__["c" /* Input */],
    VSelect: __WEBPACK_IMPORTED_MODULE_4_packages_form__["e" /* Select */], VCheckbox: __WEBPACK_IMPORTED_MODULE_4_packages_form__["a" /* Checkbox */], VRadio: __WEBPACK_IMPORTED_MODULE_4_packages_form__["d" /* Radio */],
    VPagination: __WEBPACK_IMPORTED_MODULE_3_packages_pagination__["a" /* default */]
  }
});

/***/ }),
/* 141 */
/*!*************************************!*\
  !*** ../packages/dropdown/index.js ***!
  \*************************************/
/*! exports provided: default, DropdownItem */
/*! exports used: DropdownItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__impl_vue__ = __webpack_require__(/*! ./impl.vue */ 142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__impl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__impl_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__impl_item_vue__ = __webpack_require__(/*! ./impl_item.vue */ 145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__impl_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__impl_item_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__impl_item_vue___default.a; });
/**
 * User: charlie
 * Date: 17/10/2017 2:05 PM
 **/



__WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a.install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__impl_item_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_1__impl_item_vue___default.a);
};



/***/ }),
/* 142 */
/*!*************************************!*\
  !*** ../packages/dropdown/impl.vue ***!
  \*************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../.sdocs/node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../.sdocs/node_modules/vue-loader/lib/selector?type=script&index=0!./impl.vue */ 143),
  /* template */
  __webpack_require__(/*! !../../.sdocs/node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-20ebcaea"}!../../.sdocs/node_modules/vue-loader/lib/selector?type=template&index=0!./impl.vue */ 144),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/packages/dropdown/impl.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] impl.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20ebcaea", Component.options)
  } else {
    hotAPI.reload("data-v-20ebcaea", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 143 */
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../packages/dropdown/impl.vue ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sources_utils_mixin__ = __webpack_require__(/*! ../../sources/utils/mixin */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sources_directives_click_outside__ = __webpack_require__(/*! ../../sources/directives/click-outside */ 25);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VDropdown',

  mixins: [Object(__WEBPACK_IMPORTED_MODULE_0__sources_utils_mixin__["a" /* createMixins */])(['disabled', 'hoverable', 'magic'])],

  props: {
    value: {
      type: [String, Number, Boolean, Symbol, Object],
      'default': null
    }
  },

  data() {
    return {
      selected: this.value,
      active: false
    };
  },

  created() {
    this.$on('item-selected', val => {
      this.selected = val;
      this.active = false;
    });
  },

  watch: {
    'selected'(val) {
      this.$emit('input', val);
      this.$emit('change', val);
    },

    'value'(val) {
      if (val === this.selected) return;

      console.debug('new', val, 'selected', this.selected);
      // support v-model
      this.$emit('item-selected', val);
    }
  },

  methods: {
    _handleClickOutside() {
      this.active = false;
    },

    _handleToggle() {
      if (this.disabled || this.hoverable) return;

      this.active = !this.active;
    }
  },

  computed: {
    _dropdownModifiers() {
      let cls = [];

      cls.push(this.disabledModifier);
      cls.push(this.hoverableModifier);

      return cls;
    }
  },

  directives: {
    ClickOutside: __WEBPACK_IMPORTED_MODULE_1__sources_directives_click_outside__["a" /* default */]
  }
});

/***/ }),
/* 144 */
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-20ebcaea"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../packages/dropdown/impl.vue ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: (_vm._handleClickOutside),
      expression: "_handleClickOutside"
    }],
    staticClass: "v-dropdown",
    class: [
      _vm.magicModifier,
      _vm._dropdownModifiers, {
        'is-active': _vm.active
      }
    ]
  }, [_c('div', {
    ref: "trigger",
    staticClass: "v-dropdown-trigger",
    on: {
      "click": _vm._handleToggle
    }
  }, [_vm._t("trigger")], 2), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "v-ani-menu"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.active || _vm.hoverable),
      expression: "active || hoverable"
    }],
    ref: "dropdownMenu",
    staticClass: "v-dropdown-menu"
  }, [_c('div', {
    staticClass: "v-dropdown-content"
  }, [_vm._t("default")], 2)])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-20ebcaea", module.exports)
  }
}

/***/ }),
/* 145 */
/*!******************************************!*\
  !*** ../packages/dropdown/impl_item.vue ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../.sdocs/node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../.sdocs/node_modules/vue-loader/lib/selector?type=script&index=0!./impl_item.vue */ 146),
  /* template */
  __webpack_require__(/*! !../../.sdocs/node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-2fea2f10"}!../../.sdocs/node_modules/vue-loader/lib/selector?type=template&index=0!./impl_item.vue */ 148),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/packages/dropdown/impl_item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] impl_item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2fea2f10", Component.options)
  } else {
    hotAPI.reload("data-v-2fea2f10", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 146 */
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../packages/dropdown/impl_item.vue ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sources_mixins_emitter__ = __webpack_require__(/*! ../../sources/mixins/emitter */ 147);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VDropdownItem',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__sources_mixins_emitter__["a" /* default */]],

  props: {
    value: {
      type: [String, Number, Boolean, Symbol, Object],
      'default': null
    },
    divider: Boolean,
    hasLink: Boolean,
    custom: Boolean,
    disabled: Boolean
  },

  methods: {
    _handleItemSelected() {
      this.vDispatch('VDropdown', 'item-selected', this.value);
    }
  },

  computed: {
    _isActive() {
      return this.value !== null && this.value === this.$parent.selected;
    }
  }
});

/***/ }),
/* 147 */
/*!************************************!*\
  !*** ../sources/mixins/emitter.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function broadcast(componentName, eventName, params, componentKey = 'name') {
  this.$children.forEach(child => {
    let name = child.$options[componentKey];

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    vDispatch(componentName, eventName, params, componentKey = 'name') {
      let parent = this.$parent || this.$root;
      let name = parent.$options[componentKey];

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options[componentKey];
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    vBroadcast(componentName, eventName, params, componentKey = 'name') {
      broadcast.call(this, componentName, eventName, params, componentKey);
    }
  }
});

/***/ }),
/* 148 */
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2fea2f10"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../packages/dropdown/impl_item.vue ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.divider) ? _c('hr', {
    staticClass: "v-dropdown-divider"
  }) : (!_vm.custom && !_vm.hasLink) ? _c('a', {
    staticClass: "v-dropdown-item",
    class: {
      'is-disabled': _vm.disabled,
      'is-active': _vm._isActive
    },
    on: {
      "click": _vm._handleItemSelected
    }
  }, [_vm._t("default")], 2) : _c('div', {
    class: {
      'v-dropdown-item': !_vm.hasLink,
      'is-disabled': _vm.disabled,
      'is-active': _vm._isActive,
      'has-link': _vm.hasLink
    },
    on: {
      "click": _vm._handleItemSelected
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2fea2f10", module.exports)
  }
}

/***/ }),
/* 149 */
/*!**********************************!*\
  !*** ../packages/table/index.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__impl_vue__ = __webpack_require__(/*! ./impl.vue */ 150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__impl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__impl_vue__);


__WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a.install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a);

/***/ }),
/* 150 */
/*!**********************************!*\
  !*** ../packages/table/impl.vue ***!
  \**********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../.sdocs/node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../.sdocs/node_modules/vue-loader/lib/selector?type=script&index=0!./impl.vue */ 151),
  /* template */
  __webpack_require__(/*! !../../.sdocs/node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-4dfe5f36"}!../../.sdocs/node_modules/vue-loader/lib/selector?type=template&index=0!./impl.vue */ 152),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/packages/table/impl.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] impl.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4dfe5f36", Component.options)
  } else {
    hotAPI.reload("data-v-4dfe5f36", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 151 */
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../packages/table/impl.vue ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const ORDER_ASC = 'asc';
const ORDER_DESC = 'desc';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VTable',

  props: {
    rows: {
      type: Array
    },
    columns: {
      type: Array,
      'default': []
    },
    options: {
      type: Object,
      'default'() {
        return {
          tableClasses: 'is-bordered is-striped'
        };
      }
    },
    sortable: {
      type: Boolean,
      'default': false
    }
  },

  data() {
    return {
      thColumns: [],
      tdColumns: [],
      sortableState: null,
      featureState: {}
    };
  },

  created() {
    if (this.sortable) {
      this.sortableState = {};
    }

    this._preparedLocalColumns();

    // `__` feature
    this.featureState.select_all_initialized = false;
    this._supportedPrefixFeature('__select');
  },

  watch: {
    'columns'() {
      this._preparedLocalColumns();
    },
    'rows'() {
      this._supportedPrefixFeature('__select');
    }
  },

  computed: {
    'v__selected_all': {
      get() {
        let switcher = false;

        if (this.featureState.select_all_initialized && this.rows.length) {
          switcher = this.rows.every(n => {
            return Boolean(n.v__selected);
          });
        }

        return switcher;
      },

      set(switcher) {
        console.log(switcher);
        if (this.featureState.select_all_initialized && this.rows.length) {
          this.rows.forEach(n => {
            n.v__selected = switcher;
          });
        }
      }
    }

  },

  methods: {
    _makeSortableColumnState(column, isDesc = true) {
      return {
        [`${column.toLowerCase()}`]: {
          isDesc
        }
      };
    },
    _supportedPrefixFeature(feat) {
      if (feat && !!~this.tdColumns.indexOf(feat)) {
        switch (feat.replace(/__/g, '')) {
          case 'select':
            this._injectRowItemField('v__selected', false);

            if (!this.featureState.select_all_initialized) {
              this.$set(this.featureState, 'select_all_initialized', true);
              this.$on('v-select-all', switcher => {
                this.v__selected_all = switcher;
              });
            }

            break;
        }
      }
    },
    _injectRowItemField(key, value) {
      this.rows && this.rows.forEach(it => {
        if (it && !it.hasOwnProperty(key)) {
          this.$set(it, key, value); // force set row field reactive
        }
      });
    },
    _preparedLocalColumns() {
      this.thColumns = [];
      this.tdColumns = [];
      Array.isArray(this.columns) && this.columns.forEach(it => {
        let tmp = null;
        if (it && !!~it.indexOf('|')) {
          tmp = it.split('|');
          tmp = [tmp[0].trim().toLowerCase(), tmp[1].trim()];
          this.tdColumns.push(tmp[0]);
          this.thColumns.push(tmp);
        } else {
          tmp = it.trim();
          this.thColumns.push([tmp, tmp]);
          this.tdColumns.push(tmp);
        }
      });
    },
    _orderByColumn(col, toggleDesc = false) {
      const k = col.toLowerCase();

      if (toggleDesc) {
        let s = this.sortableState[k];

        if (s == null) {
          s = this._makeSortableColumnState(col)[k];
        }

        // toggle order state
        s.isDesc = !s.isDesc;

        if (this.sortableState[k] !== s) {
          this.sortableState[k] = s;
        }
      }

      this.$emit('order-by-column', this.sortableState, k);
    },
    _headClick(col) {
      if (this.sortable) {
        this._orderByColumn(col, true);
      }
    }
  }
});

/***/ }),
/* 152 */
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4dfe5f36"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../packages/table/impl.vue ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', {
    staticClass: "v-table",
    class: this.options.tableClasses
  }, [_c('thead', [_c('tr', _vm._l((_vm.thColumns), function(cc) {
    return _c('th', {
      on: {
        "click": function($event) {
          _vm._headClick(cc, $event)
        }
      }
    }, [(("" + (cc[0].indexOf('__'))) == -1) ? _vm._t(("th-item-" + (cc[0])), [_c('span', [_vm._v(" " + _vm._s(cc[1]) + " ")])]) : _vm._e(), _vm._v(" "), (cc[0] === '__select') ? _vm._t("v__th-select", [_c('span', {
      staticClass: "v-th-select"
    }, [_c('label', {
      staticClass: "v-checkbox"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.v__selected_all),
        expression: "v__selected_all"
      }],
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": Array.isArray(_vm.v__selected_all) ? _vm._i(_vm.v__selected_all, null) > -1 : (_vm.v__selected_all)
      },
      on: {
        "__c": function($event) {
          var $$a = _vm.v__selected_all,
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.v__selected_all = $$a.concat([$$v]))
            } else {
              $$i > -1 && (_vm.v__selected_all = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
            }
          } else {
            _vm.v__selected_all = $$c
          }
        }
      }
    }), _vm._v("\n            " + _vm._s(cc[1]) + "\n          ")])])]) : _vm._e()], 2)
  }))]), _vm._v(" "), _c('tbody', _vm._l((_vm.rows), function(el, index) {
    return _c('tr', {
      class: {
        'is-selected': el.v__selected
      }
    }, _vm._l((_vm.tdColumns), function(c) {
      return _c('td', [(("" + (c.indexOf('__'))) == -1) ? _vm._t(("td-item-" + c), [_vm._v("\n        " + _vm._s(el[c]) + "\n      ")], {
        row: el,
        k: c,
        v: el[c],
        index: index
      }) : _vm._e(), _vm._v(" "), (c === '__select') ? _vm._t("v__td-select", [_c('span', {
        staticClass: "v-td-select"
      }, [_c('label', {
        staticClass: "v-checkbox"
      }, [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: (el.v__selected),
          expression: "el.v__selected"
        }],
        attrs: {
          "type": "checkbox"
        },
        domProps: {
          "checked": Array.isArray(el.v__selected) ? _vm._i(el.v__selected, null) > -1 : (el.v__selected)
        },
        on: {
          "__c": function($event) {
            var $$a = el.v__selected,
              $$el = $event.target,
              $$c = $$el.checked ? (true) : (false);
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v);
              if ($$el.checked) {
                $$i < 0 && (el.v__selected = $$a.concat([$$v]))
              } else {
                $$i > -1 && (el.v__selected = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
              }
            } else {
              el.v__selected = $$c
            }
          }
        }
      })])])], {
        row: el
      }) : _vm._e()], 2)
    }))
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4dfe5f36", module.exports)
  }
}

/***/ }),
/* 153 */
/*!***********************************!*\
  !*** ../packages/switch/index.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__impl_vue__ = __webpack_require__(/*! ./impl.vue */ 154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__impl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__impl_vue__);


__WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a.install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a);

/***/ }),
/* 154 */
/*!***********************************!*\
  !*** ../packages/switch/impl.vue ***!
  \***********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap&-autoprefixer!../../.sdocs/node_modules/vue-loader/lib/style-compiler/index?{"id":"data-v-ef37c7b2","scoped":false,"hasInlineConfig":false}!sass-loader?sourceMap!../../.sdocs/node_modules/vue-loader/lib/selector?type=styles&index=0!./impl.vue */ 155)

var Component = __webpack_require__(/*! ../../.sdocs/node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../.sdocs/node_modules/vue-loader/lib/selector?type=script&index=0!./impl.vue */ 157),
  /* template */
  __webpack_require__(/*! !../../.sdocs/node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-ef37c7b2"}!../../.sdocs/node_modules/vue-loader/lib/selector?type=template&index=0!./impl.vue */ 158),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/packages/switch/impl.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] impl.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ef37c7b2", Component.options)
  } else {
    hotAPI.reload("data-v-ef37c7b2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 155 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-ef37c7b2","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!../packages/switch/impl.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../.sdocs/node_modules/css-loader?sourceMap&-autoprefixer!../../.sdocs/node_modules/vue-loader/lib/style-compiler?{"id":"data-v-ef37c7b2","scoped":false,"hasInlineConfig":false}!../../.sdocs/node_modules/sass-loader/lib/loader.js?sourceMap!../../.sdocs/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./impl.vue */ 156);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../.sdocs/node_modules/vue-style-loader/lib/addStylesClient.js */ 2)("74ca922a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../.sdocs/node_modules/css-loader/index.js?sourceMap&-autoprefixer!../../.sdocs/node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-ef37c7b2\",\"scoped\":false,\"hasInlineConfig\":false}!../../.sdocs/node_modules/sass-loader/lib/loader.js?sourceMap!../../.sdocs/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./impl.vue", function() {
     var newContent = require("!!../../.sdocs/node_modules/css-loader/index.js?sourceMap&-autoprefixer!../../.sdocs/node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-ef37c7b2\",\"scoped\":false,\"hasInlineConfig\":false}!../../.sdocs/node_modules/sass-loader/lib/loader.js?sourceMap!../../.sdocs/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./impl.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 156 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-ef37c7b2","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!../packages/switch/impl.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../.sdocs/node_modules/css-loader/lib/css-base.js */ 1)();
// imports


// module
exports.push([module.i, "\n.v-switch {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.v-switch + .v-switch {\n    margin-left: 0.5em;\n}\n.v-switch .control-label {\n    padding-left: 0.5em;\n}\n.v-switch input[type=checkbox] {\n    display: none;\n}\n.v-switch input[type=checkbox] + .check {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      width: 2.75em;\n      height: 1.575em;\n      padding: 0.2em;\n      background: #b5b5b5;\n      border-radius: 1em;\n      transition: background 0.15s ease-out;\n}\n.v-switch input[type=checkbox] + .check:before {\n        content: \"\";\n        border-radius: 1em;\n        width: 1.175em;\n        height: 1.175em;\n        background: whitesmoke;\n        box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);\n        transition: width 0.15s ease-out, -webkit-transform 0.15s ease-out;\n        transition: transform 0.15s ease-out, width 0.15s ease-out;\n        transition: transform 0.15s ease-out, width 0.15s ease-out, -webkit-transform 0.15s ease-out;\n        will-change: transform;\n}\n.v-switch input[type=checkbox] + .check.is-elastic:before {\n        width: 1.75em;\n}\n.v-switch input[type=checkbox]:checked + .check {\n      background: #1ca0f2;\n}\n.v-switch input[type=checkbox]:checked + .check.is-white {\n        background: white;\n}\n.v-switch input[type=checkbox]:checked + .check.is-black {\n        background: #0a0a0a;\n}\n.v-switch input[type=checkbox]:checked + .check.is-light {\n        background: whitesmoke;\n}\n.v-switch input[type=checkbox]:checked + .check.is-dark {\n        background: #363636;\n}\n.v-switch input[type=checkbox]:checked + .check.is-primary {\n        background: #1ca0f2;\n}\n.v-switch input[type=checkbox]:checked + .check.is-info {\n        background: #b86bff;\n}\n.v-switch input[type=checkbox]:checked + .check.is-success {\n        background: #23d160;\n}\n.v-switch input[type=checkbox]:checked + .check.is-warning {\n        background: #ffdd57;\n}\n.v-switch input[type=checkbox]:checked + .check.is-danger {\n        background: #ff3860;\n}\n.v-switch input[type=checkbox]:checked + .check:before {\n        -webkit-transform: translate3d(100%, 0, 0);\n                transform: translate3d(100%, 0, 0);\n}\n.v-switch input[type=checkbox]:checked + .check.is-elastic:before {\n        -webkit-transform: translate3d(36.36364%, 0, 0);\n                transform: translate3d(36.36364%, 0, 0);\n}\n.v-switch:hover input[type=checkbox] + .check {\n    background: rgba(181, 181, 181, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check {\n    background: rgba(28, 160, 242, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check.is-white {\n      background: rgba(255, 255, 255, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check.is-black {\n      background: rgba(10, 10, 10, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check.is-light {\n      background: rgba(245, 245, 245, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check.is-dark {\n      background: rgba(54, 54, 54, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check.is-primary {\n      background: rgba(28, 160, 242, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check.is-info {\n      background: rgba(184, 107, 255, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check.is-success {\n      background: rgba(35, 209, 96, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check.is-warning {\n      background: rgba(255, 221, 87, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check.is-danger {\n      background: rgba(255, 56, 96, 0.9);\n}\n.v-switch:focus {\n    outline: none;\n}\n.v-switch:focus input[type=checkbox] + .check {\n      box-shadow: 0 0 0.5em rgba(122, 122, 122, 0.6);\n}\n.v-switch:focus input[type=checkbox]:checked + .check {\n      box-shadow: 0 0 0.5em rgba(28, 160, 242, 0.8);\n}\n.v-switch:focus input[type=checkbox]:checked + .check.is-white {\n        box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.8);\n}\n.v-switch:focus input[type=checkbox]:checked + .check.is-black {\n        box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.8);\n}\n.v-switch:focus input[type=checkbox]:checked + .check.is-light {\n        box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.8);\n}\n.v-switch:focus input[type=checkbox]:checked + .check.is-dark {\n        box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.8);\n}\n.v-switch:focus input[type=checkbox]:checked + .check.is-primary {\n        box-shadow: 0 0 0.5em rgba(28, 160, 242, 0.8);\n}\n.v-switch:focus input[type=checkbox]:checked + .check.is-info {\n        box-shadow: 0 0 0.5em rgba(184, 107, 255, 0.8);\n}\n.v-switch:focus input[type=checkbox]:checked + .check.is-success {\n        box-shadow: 0 0 0.5em rgba(35, 209, 96, 0.8);\n}\n.v-switch:focus input[type=checkbox]:checked + .check.is-warning {\n        box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.8);\n}\n.v-switch:focus input[type=checkbox]:checked + .check.is-danger {\n        box-shadow: 0 0 0.5em rgba(255, 56, 96, 0.8);\n}\n.v-switch.is-small {\n    border-radius: 2px;\n    font-size: 0.75rem;\n}\n.v-switch.is-medium {\n    font-size: 1.25rem;\n}\n.v-switch.is-large {\n    font-size: 1.5rem;\n}\n.v-switch[disabled] {\n    opacity: 0.5;\n    cursor: not-allowed;\n    color: #7a7a7a;\n}\n", "", {"version":3,"sources":["/../packages/switch/impl.vue"],"names":[],"mappings":";AACA;EACE,0BAA0B;EAC1B,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB,4BAA4B;EAC5B,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;CAC7B;AACD;IACI,mBAAmB;CACtB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,cAAc;CACjB;AACD;MACM,qBAAqB;MACrB,qBAAqB;MACrB,cAAc;MACd,0BAA0B;UACtB,uBAAuB;cACnB,oBAAoB;MAC5B,cAAc;MACd,gBAAgB;MAChB,eAAe;MACf,oBAAoB;MACpB,mBAAmB;MACnB,sCAAsC;CAC3C;AACD;QACQ,YAAY;QACZ,mBAAmB;QACnB,eAAe;QACf,gBAAgB;QAChB,uBAAuB;QACvB,6GAA6G;QAC7G,mEAAmE;QACnE,2DAA2D;QAC3D,6FAA6F;QAC7F,uBAAuB;CAC9B;AACD;QACQ,cAAc;CACrB;AACD;MACM,oBAAoB;CACzB;AACD;QACQ,kBAAkB;CACzB;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,uBAAuB;CAC9B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,2CAA2C;gBACnC,mCAAmC;CAClD;AACD;QACQ,gDAAgD;gBACxC,wCAAwC;CACvD;AACD;IACI,qCAAqC;CACxC;AACD;IACI,oCAAoC;CACvC;AACD;MACM,qCAAqC;CAC1C;AACD;MACM,kCAAkC;CACvC;AACD;MACM,qCAAqC;CAC1C;AACD;MACM,kCAAkC;CACvC;AACD;MACM,oCAAoC;CACzC;AACD;MACM,qCAAqC;CAC1C;AACD;MACM,mCAAmC;CACxC;AACD;MACM,oCAAoC;CACzC;AACD;MACM,mCAAmC;CACxC;AACD;IACI,cAAc;CACjB;AACD;MACM,+CAA+C;CACpD;AACD;MACM,8CAA8C;CACnD;AACD;QACQ,+CAA+C;CACtD;AACD;QACQ,4CAA4C;CACnD;AACD;QACQ,+CAA+C;CACtD;AACD;QACQ,4CAA4C;CACnD;AACD;QACQ,8CAA8C;CACrD;AACD;QACQ,+CAA+C;CACtD;AACD;QACQ,6CAA6C;CACpD;AACD;QACQ,8CAA8C;CACrD;AACD;QACQ,6CAA6C;CACpD;AACD;IACI,mBAAmB;IACnB,mBAAmB;CACtB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,aAAa;IACb,oBAAoB;IACpB,eAAe;CAClB","file":"impl.vue","sourcesContent":["\n.v-switch {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.v-switch + .v-switch {\n    margin-left: 0.5em;\n}\n.v-switch .control-label {\n    padding-left: 0.5em;\n}\n.v-switch input[type=checkbox] {\n    display: none;\n}\n.v-switch input[type=checkbox] + .check {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      width: 2.75em;\n      height: 1.575em;\n      padding: 0.2em;\n      background: #b5b5b5;\n      border-radius: 1em;\n      transition: background 0.15s ease-out;\n}\n.v-switch input[type=checkbox] + .check:before {\n        content: \"\";\n        border-radius: 1em;\n        width: 1.175em;\n        height: 1.175em;\n        background: whitesmoke;\n        box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);\n        transition: width 0.15s ease-out, -webkit-transform 0.15s ease-out;\n        transition: transform 0.15s ease-out, width 0.15s ease-out;\n        transition: transform 0.15s ease-out, width 0.15s ease-out, -webkit-transform 0.15s ease-out;\n        will-change: transform;\n}\n.v-switch input[type=checkbox] + .check.is-elastic:before {\n        width: 1.75em;\n}\n.v-switch input[type=checkbox]:checked + .check {\n      background: #1ca0f2;\n}\n.v-switch input[type=checkbox]:checked + .check.is-white {\n        background: white;\n}\n.v-switch input[type=checkbox]:checked + .check.is-black {\n        background: #0a0a0a;\n}\n.v-switch input[type=checkbox]:checked + .check.is-light {\n        background: whitesmoke;\n}\n.v-switch input[type=checkbox]:checked + .check.is-dark {\n        background: #363636;\n}\n.v-switch input[type=checkbox]:checked + .check.is-primary {\n        background: #1ca0f2;\n}\n.v-switch input[type=checkbox]:checked + .check.is-info {\n        background: #b86bff;\n}\n.v-switch input[type=checkbox]:checked + .check.is-success {\n        background: #23d160;\n}\n.v-switch input[type=checkbox]:checked + .check.is-warning {\n        background: #ffdd57;\n}\n.v-switch input[type=checkbox]:checked + .check.is-danger {\n        background: #ff3860;\n}\n.v-switch input[type=checkbox]:checked + .check:before {\n        -webkit-transform: translate3d(100%, 0, 0);\n                transform: translate3d(100%, 0, 0);\n}\n.v-switch input[type=checkbox]:checked + .check.is-elastic:before {\n        -webkit-transform: translate3d(36.36364%, 0, 0);\n                transform: translate3d(36.36364%, 0, 0);\n}\n.v-switch:hover input[type=checkbox] + .check {\n    background: rgba(181, 181, 181, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check {\n    background: rgba(28, 160, 242, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check.is-white {\n      background: rgba(255, 255, 255, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check.is-black {\n      background: rgba(10, 10, 10, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check.is-light {\n      background: rgba(245, 245, 245, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check.is-dark {\n      background: rgba(54, 54, 54, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check.is-primary {\n      background: rgba(28, 160, 242, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check.is-info {\n      background: rgba(184, 107, 255, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check.is-success {\n      background: rgba(35, 209, 96, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check.is-warning {\n      background: rgba(255, 221, 87, 0.9);\n}\n.v-switch:hover input[type=checkbox]:checked + .check.is-danger {\n      background: rgba(255, 56, 96, 0.9);\n}\n.v-switch:focus {\n    outline: none;\n}\n.v-switch:focus input[type=checkbox] + .check {\n      box-shadow: 0 0 0.5em rgba(122, 122, 122, 0.6);\n}\n.v-switch:focus input[type=checkbox]:checked + .check {\n      box-shadow: 0 0 0.5em rgba(28, 160, 242, 0.8);\n}\n.v-switch:focus input[type=checkbox]:checked + .check.is-white {\n        box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.8);\n}\n.v-switch:focus input[type=checkbox]:checked + .check.is-black {\n        box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.8);\n}\n.v-switch:focus input[type=checkbox]:checked + .check.is-light {\n        box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.8);\n}\n.v-switch:focus input[type=checkbox]:checked + .check.is-dark {\n        box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.8);\n}\n.v-switch:focus input[type=checkbox]:checked + .check.is-primary {\n        box-shadow: 0 0 0.5em rgba(28, 160, 242, 0.8);\n}\n.v-switch:focus input[type=checkbox]:checked + .check.is-info {\n        box-shadow: 0 0 0.5em rgba(184, 107, 255, 0.8);\n}\n.v-switch:focus input[type=checkbox]:checked + .check.is-success {\n        box-shadow: 0 0 0.5em rgba(35, 209, 96, 0.8);\n}\n.v-switch:focus input[type=checkbox]:checked + .check.is-warning {\n        box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.8);\n}\n.v-switch:focus input[type=checkbox]:checked + .check.is-danger {\n        box-shadow: 0 0 0.5em rgba(255, 56, 96, 0.8);\n}\n.v-switch.is-small {\n    border-radius: 2px;\n    font-size: 0.75rem;\n}\n.v-switch.is-medium {\n    font-size: 1.25rem;\n}\n.v-switch.is-large {\n    font-size: 1.5rem;\n}\n.v-switch[disabled] {\n    opacity: 0.5;\n    cursor: not-allowed;\n    color: #7a7a7a;\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 157 */
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../packages/switch/impl.vue ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sources_utils_mixin__ = __webpack_require__(/*! ../../sources/utils/mixin */ 3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VSwitch',

  mixins: [Object(__WEBPACK_IMPORTED_MODULE_0__sources_utils_mixin__["a" /* createMixins */])(['size', 'disabled', 'color'])],

  props: {
    name: String,
    value: {},
    nativeValue: {},
    trueValue: {
      type: [String, Number, Boolean, Object, Array, Symbol],
      'default': true
    },
    falseValue: {
      type: [String, Number, Boolean, Object, Array, Symbol],
      'default': false
    }
  },
  data() {
    return {
      localValue: this.value,
      isMouseDown: false
    };
  },
  watch: {
    /**
     * When v-model change, set internal value.
     */
    value(value) {
      this.localValue = value;
    },
    /**
     * Emit input event to update the user v-model.
     */
    localValue(value) {
      this.$emit('input', value);
    }
  }
});

/***/ }),
/* 158 */
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ef37c7b2"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../packages/switch/impl.vue ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    ref: "label",
    staticClass: "v-switch",
    class: [_vm.sizeModifier, _vm.disabledModifier],
    attrs: {
      "disabled": _vm.disabled,
      "tabindex": _vm.disabled ? false : 0
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13) && _vm._k($event.keyCode, "space", 32)) { return null; }
        $event.preventDefault();
        _vm.$refs.label.click()
      },
      "mousedown": function($event) {
        _vm.isMouseDown = true
      },
      "mouseup": function($event) {
        _vm.isMouseDown = false
      },
      "mouseout": function($event) {
        _vm.isMouseDown = false
      },
      "blur": function($event) {
        _vm.isMouseDown = false
      }
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.localValue),
      expression: "localValue"
    }],
    attrs: {
      "type": "checkbox",
      "name": _vm.name,
      "disabled": _vm.disabled,
      "true-value": _vm.trueValue,
      "false-value": _vm.falseValue
    },
    domProps: {
      "checked": Array.isArray(_vm.localValue) ? _vm._i(_vm.localValue, null) > -1 : _vm._q(_vm.localValue, _vm.trueValue)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.localValue,
          $$el = $event.target,
          $$c = $$el.checked ? (_vm.trueValue) : (_vm.falseValue);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.localValue = $$a.concat([$$v]))
          } else {
            $$i > -1 && (_vm.localValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.localValue = $$c
        }
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "check",
    class: [{
      'is-elastic': _vm.isMouseDown
    }, _vm.colorModifier]
  }), _vm._v(" "), _c('span', {
    staticClass: "control-label"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ef37c7b2", module.exports)
  }
}

/***/ }),
/* 159 */
/*!***************************************!*\
  !*** ../packages/pagination/index.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__impl_vue__ = __webpack_require__(/*! ./impl.vue */ 160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__impl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__impl_vue__);


__WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a.install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a);
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a);

/***/ }),
/* 160 */
/*!***************************************!*\
  !*** ../packages/pagination/impl.vue ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../.sdocs/node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../.sdocs/node_modules/vue-loader/lib/selector?type=script&index=0!./impl.vue */ 161),
  /* template */
  __webpack_require__(/*! !../../.sdocs/node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-d561d6fe"}!../../.sdocs/node_modules/vue-loader/lib/selector?type=template&index=0!./impl.vue */ 162),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/packages/pagination/impl.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] impl.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d561d6fe", Component.options)
  } else {
    hotAPI.reload("data-v-d561d6fe", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 161 */
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../packages/pagination/impl.vue ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sources_utils_mixin__ = __webpack_require__(/*! ../../sources/utils/mixin */ 3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VPagination',

  mixins: [Object(__WEBPACK_IMPORTED_MODULE_0__sources_utils_mixin__["a" /* createMixins */])(['size', 'align', 'disabled'])],

  props: {
    prevPageText: {
      type: String,
      'default': '上一页'
    },

    nextPageText: {
      type: String,
      'default': '下一页'
    },

    page: {
      type: Number,
      'default': null
    },

    total: {
      type: Number,
      'default': 0
    },

    limit: {
      type: Number,
      'default': 10
    },

    offset: {
      type: Number,
      'default': 3
    }
  },

  data() {
    return {
      localPage: this.page,
      localTotal: this.total || 0,
      currentSlideLabels: [],
      currentSlidePos: null
    };
  },

  watch: {
    'total'(val) {
      this.localTotal = val;
    },

    'page'(val) {
      if (val && val !== this.localPage) {
        this._onPage(val);
      }
    }
  },

  methods: {
    _onPage(n) {
      this.localPage = +n;
      this.$emit('on-page', this.localPage);
      this.$emit('update:page', this.localPage);
    },

    /**
     * @param delta {Number}
     * @private
     */
    _movePage(delta) {
      if (!this.pages || this.pages < 2) {
        return;
      }

      let to = (this.localPage || 0) + delta;

      if (delta > 0 && to > this.pages) {
        to = 1;
      } else if (delta < 0 && to <= 0) {
        to = this.pages;
      }

      this._onPage(to);
    }
  },

  computed: {
    pages() {
      return this.localTotal && this.localTotal <= this.limit ? 1 : Math.ceil(this.localTotal / this.limit);
    },

    slidePos() {
      if (this.pages && this.pages > this.offset + 2 + 2) {
        return Math.ceil((this.localPage || 1) / this.offset);
      }

      return null;
    },

    slideLabels() {
      console.debug('[Slide Labels Rebuild] Position@', this.slidePos);
      const labels = [];

      if (this.slidePos == null) {
        Array(this.pages).fill(1).forEach((n, i) => labels.push(n + i));
      } else {
        const starter = (this.slidePos - 1) * this.offset;
        Array(this.offset).fill(starter + 1).forEach((n, i) => {
          (n += i, this.pages >= n) && labels.push(n);
        });

        // header & footer
        labels[0] > 1 && labels.unshift(labels[0] - 1);
        labels[labels.length - 1] < this.pages && labels.push(labels[labels.length - 1] + 1);

        labels[0] !== 1 && (labels.unshift('DOT'), labels.unshift(1));
        labels[labels.length - 1] !== this.pages && (labels.push('DOT'), labels.push(this.pages));
      }

      return labels;
    }
  }
});

/***/ }),
/* 162 */
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d561d6fe"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../packages/pagination/impl.vue ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "v-pagination",
    class: [_vm.sizeModifier, _vm.alignModifier, _vm.disabledModifier]
  }, [_c('a', {
    staticClass: "v-pagination-previous",
    on: {
      "click": function($event) {
        _vm._movePage(-1)
      }
    }
  }, [_vm._v(_vm._s(_vm.prevPageText))]), _vm._v(" "), _c('a', {
    staticClass: "v-pagination-next",
    on: {
      "click": function($event) {
        _vm._movePage(1)
      }
    }
  }, [_vm._v(_vm._s(_vm.nextPageText))]), _vm._v(" "), _c('ul', {
    staticClass: "v-pagination-list"
  }, _vm._l((_vm.slideLabels), function(el) {
    return (_vm.slideLabels && _vm.slideLabels.length) ? _c('li', [(el === 'DOT') ? _c('span', {
      staticClass: "v-pagination-ellipsis"
    }, [_vm._v("…")]) : _c('a', {
      staticClass: "v-pagination-link",
      class: {
        'is-current': _vm.localPage === +el
      },
      on: {
        "click": function($event) {
          _vm._onPage(el)
        }
      }
    }, [_vm._v(_vm._s(el))])]) : _vm._e()
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d561d6fe", module.exports)
  }
}

/***/ }),
/* 163 */
/*!*********************************!*\
  !*** ../packages/form/index.js ***!
  \*********************************/
/*! exports provided: default, Field, Control, Input, Select, Checkbox, Radio */
/*! exports used: Checkbox, Field, Input, Radio, Select, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__impl_vue__ = __webpack_require__(/*! ./impl.vue */ 164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__impl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__impl_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__impl_field_vue__ = __webpack_require__(/*! ./impl_field.vue */ 167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__impl_field_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__impl_field_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__impl_control_vue__ = __webpack_require__(/*! ./impl_control.vue */ 170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__impl_control_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__impl_control_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__impl_input_vue__ = __webpack_require__(/*! ./impl_input.vue */ 173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__impl_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__impl_input_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__impl_select_vue__ = __webpack_require__(/*! ./impl_select.vue */ 176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__impl_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__impl_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__impl_checkbox_vue__ = __webpack_require__(/*! ./impl_checkbox.vue */ 179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__impl_checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__impl_checkbox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__impl_radio_vue__ = __webpack_require__(/*! ./impl_radio.vue */ 182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__impl_radio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__impl_radio_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__impl_field_vue___default.a; });
/* unused harmony reexport Control */
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__impl_input_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__impl_select_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__impl_checkbox_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__impl_radio_vue___default.a; });
/**
 * User: charlie
 * Date: 17/10/2017 2:21 PM
 **/









__WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a.install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__impl_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__impl_field_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_1__impl_field_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_2__impl_control_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_2__impl_control_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_3__impl_input_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_3__impl_input_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_4__impl_select_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_4__impl_select_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_5__impl_checkbox_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_5__impl_checkbox_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_6__impl_radio_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_6__impl_radio_vue___default.a);
};



/***/ }),
/* 164 */
/*!*********************************!*\
  !*** ../packages/form/impl.vue ***!
  \*********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../.sdocs/node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../.sdocs/node_modules/vue-loader/lib/selector?type=script&index=0!./impl.vue */ 165),
  /* template */
  __webpack_require__(/*! !../../.sdocs/node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-59bf3597"}!../../.sdocs/node_modules/vue-loader/lib/selector?type=template&index=0!./impl.vue */ 166),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/packages/form/impl.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] impl.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59bf3597", Component.options)
  } else {
    hotAPI.reload("data-v-59bf3597", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 165 */
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../packages/form/impl.vue ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VForm'
});

/***/ }),
/* 166 */
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-59bf3597"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../packages/form/impl.vue ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-form"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-59bf3597", module.exports)
  }
}

/***/ }),
/* 167 */
/*!***************************************!*\
  !*** ../packages/form/impl_field.vue ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../.sdocs/node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../.sdocs/node_modules/vue-loader/lib/selector?type=script&index=0!./impl_field.vue */ 168),
  /* template */
  __webpack_require__(/*! !../../.sdocs/node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-09ad48d2"}!../../.sdocs/node_modules/vue-loader/lib/selector?type=template&index=0!./impl_field.vue */ 169),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/packages/form/impl_field.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] impl_field.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-09ad48d2", Component.options)
  } else {
    hotAPI.reload("data-v-09ad48d2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 168 */
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../packages/form/impl_field.vue ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sources_utils_mixin__ = __webpack_require__(/*! ../../sources/utils/mixin */ 3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VField',

  mixins: [Object(__WEBPACK_IMPORTED_MODULE_0__sources_utils_mixin__["a" /* createMixins */])(['type', 'magic'])],

  props: {
    label: String,
    labelFor: String,
    message: [String, Array],
    grouped: Boolean,
    groupMultiline: Boolean,
    position: String, // centered , right, fullwidth
    horizontal: Boolean, // @todo implementation
    addons: {
      type: Boolean,
      'default': true // for convinces
    }
  },

  data() {
    return {
      localMessage: this.message
    };
  },

  computed: {
    /**
     * This is not kept like the others (is-small, etc.),
     * because since 'has-addons' is set automatically it
     * doesn't make sense to teach users what addons are exactly.
     */
    localPosition() {
      if (this.position === undefined) return;
      const position = this.position.split('-');
      if (position.length < 1) return;
      const prefix = this.grouped ? 'is-grouped-' : 'has-addons-';
      if (this.position) return prefix + position[1];
    },
    /**
     * Field has addons if there are more than one slot
     * (element / component) in the Field.
     * Or is grouped when prop is set.
     */
    fieldType() {
      if (this.grouped) {
        return 'is-grouped';
      } else if (this.$slots.default !== undefined && this.$slots.default.length > 1 && this.addons) {
        return 'has-addons';
      }
    },

    /**
     * Formatted message in case it's an array
     * (each element is separated by <br> tag)
     */
    formattedMessage() {
      if (this.localMessage) {
        if (Array.isArray(this.localMessage)) {
          return this.localMessage.filter(value => {
            if (value) {
              return value;
            }
          }).join(' <br> ');
        } else {
          return this.localMessage;
        }
      } else {
        return this.localMessage;
      }
    }
  }
});

/***/ }),
/* 169 */
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-09ad48d2"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../packages/form/impl_field.vue ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-field",
    class: [
      _vm.fieldType,
      _vm.localPosition,
      {
        'is-grouped-multiline': _vm.groupMultiline
      }
    ]
  }, [(_vm.label) ? _c('label', {
    staticClass: "v-label",
    attrs: {
      "for": _vm.labelFor
    }
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), (_vm.localMessage) ? _c('p', {
    staticClass: "v-help",
    class: [_vm.typeModifier],
    domProps: {
      "innerHTML": _vm._s(_vm.formattedMessage)
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-09ad48d2", module.exports)
  }
}

/***/ }),
/* 170 */
/*!*****************************************!*\
  !*** ../packages/form/impl_control.vue ***!
  \*****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../.sdocs/node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../.sdocs/node_modules/vue-loader/lib/selector?type=script&index=0!./impl_control.vue */ 171),
  /* template */
  __webpack_require__(/*! !../../.sdocs/node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-16cf93b5"}!../../.sdocs/node_modules/vue-loader/lib/selector?type=template&index=0!./impl_control.vue */ 172),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/packages/form/impl_control.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] impl_control.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16cf93b5", Component.options)
  } else {
    hotAPI.reload("data-v-16cf93b5", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 171 */
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../packages/form/impl_control.vue ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VControl'
});

/***/ }),
/* 172 */
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-16cf93b5"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../packages/form/impl_control.vue ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-control"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-16cf93b5", module.exports)
  }
}

/***/ }),
/* 173 */
/*!***************************************!*\
  !*** ../packages/form/impl_input.vue ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../.sdocs/node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../.sdocs/node_modules/vue-loader/lib/selector?type=script&index=0!./impl_input.vue */ 174),
  /* template */
  __webpack_require__(/*! !../../.sdocs/node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-240217a2"}!../../.sdocs/node_modules/vue-loader/lib/selector?type=template&index=0!./impl_input.vue */ 175),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/packages/form/impl_input.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] impl_input.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-240217a2", Component.options)
  } else {
    hotAPI.reload("data-v-240217a2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 174 */
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../packages/form/impl_input.vue ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_mixinFormElement__ = __webpack_require__(/*! ../common/mixinFormElement */ 26);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VInput',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__common_mixinFormElement__["a" /* default */]],

  props: {
    value: [Number, String],
    type: {
      type: String,
      'default': 'text'
    },
    passwordReveal: Boolean, // @todo
    hasCounter: {
      type: Boolean,
      'default': true
    }
  },

  data() {
    return {
      localValue: this.value,
      localType: this.type, // maybe write
      isPasswordVisible: false,
      _elementRef: this.type === 'textarea' ? 'textarea' : 'input'
    };
  },

  computed: {
    hasIconRight() {
      return this.passwordReveal || this.loading || this.statusType;
    },

    iconPosition() {
      if (this.icon && this.hasIconRight) {
        return 'has-icons-left has-icons-right';
      } else if (!this.icon && this.hasIconRight) {
        return 'has-icons-right';
      } else if (this.icon) {
        return 'has-icons-left';
      }
    },

    hasMessage() {
      return this.$parent.localMessage;
    },

    passwordVisibleIcon() {
      return !this.isPasswordVisible ? 'visibility' : 'visibility_off';
    },

    valueLength() {
      return this.localValue ? this.localValue.length : 0;
    }
  },

  watch: {
    /**
     * When v-model is changed:
     *   1. Set internal value.
     *   2. If it's invalid, validate again.
     */
    value(value) {
      this.localValue = value;
    },

    localValue(value) {
      this.$emit('input', value);
    }
  },

  methods: {
    /**
     * Toggle the visibility of a password-reveal input
     * by changing the type and focus the input right away.
     */
    _togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.localType = this.isPasswordVisible ? 'text' : 'password';
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    /**
     * Input's 'input' event listener, 'nextTick' is used to prevent event firing
     * before ui update, helps when using masks (Cleavejs and potentially others).
     */
    _handleInput(event) {
      this.$nextTick(() => {
        this.localValue = event.target.value;
      });
    }
  }
});

/***/ }),
/* 175 */
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-240217a2"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../packages/form/impl_input.vue ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-control",
    class: [_vm.iconPosition, {
      'is-expanded': _vm.expanded,
      'is-loading': _vm.loading,
      'is-clearfix': !_vm.hasMessage
    }]
  }, [(_vm.type !== 'textarea') ? _c('input', _vm._b({
    ref: "input",
    staticClass: "v-input",
    class: [_vm.statusType, _vm.sizeModifier],
    attrs: {
      "type": _vm.localType,
      "autocomplete": _vm.autocomplete,
      "maxlength": _vm.maxlength
    },
    domProps: {
      "value": _vm.localValue
    },
    on: {
      "input": _vm._handleInput,
      "blur": function($event) {
        _vm.$emit('blur', $event)
      },
      "focus": function($event) {
        _vm.$emit('focus', $event)
      }
    }
  }, 'input', _vm.$attrs, false)) : _c('textarea', _vm._b({
    ref: "textarea",
    staticClass: "v-textarea",
    class: [_vm.statusType, _vm.sizeModifier],
    attrs: {
      "maxlength": _vm.maxlength
    },
    domProps: {
      "value": _vm.localValue
    },
    on: {
      "input": _vm._handleInput,
      "blur": function($event) {
        _vm.$emit('blur', $event)
      },
      "focus": function($event) {
        _vm.$emit('focus', $event)
      }
    }
  }, 'textarea', _vm.$attrs, false)), _vm._v(" "), _vm._t("icon"), _vm._v(" "), (_vm.maxlength && _vm.hasCounter) ? _c('small', {
    staticClass: "v-help is-counter"
  }, [_vm._v(_vm._s(_vm.valueLength) + " / " + _vm._s(_vm.maxlength))]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-240217a2", module.exports)
  }
}

/***/ }),
/* 176 */
/*!****************************************!*\
  !*** ../packages/form/impl_select.vue ***!
  \****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../.sdocs/node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../.sdocs/node_modules/vue-loader/lib/selector?type=script&index=0!./impl_select.vue */ 177),
  /* template */
  __webpack_require__(/*! !../../.sdocs/node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-acf36158"}!../../.sdocs/node_modules/vue-loader/lib/selector?type=template&index=0!./impl_select.vue */ 178),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/packages/form/impl_select.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] impl_select.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-acf36158", Component.options)
  } else {
    hotAPI.reload("data-v-acf36158", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 177 */
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../packages/form/impl_select.vue ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_mixinFormElement__ = __webpack_require__(/*! ../common/mixinFormElement */ 26);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VSelect',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__common_mixinFormElement__["a" /* default */]],

  props: {
    value: {
      type: [String, Number, Boolean, Object, Array, Symbol],
      'default': null
    },
    placeholder: String,
    multiple: Boolean,
    nativeSize: [String, Number]
  },

  data() {
    return {
      selected: this.value,
      _elementRef: 'select'
    };
  },

  watch: {
    value(value) {
      this.selected = value;
    },

    selected(value) {
      this.$emit('input', value);
    }
  }
});

/***/ }),
/* 178 */
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-acf36158"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../packages/form/impl_select.vue ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "v-control",
    class: {
      'is-expanded': _vm.expanded,
      'has-icons-left': _vm.icon
    }
  }, [_c('span', {
    staticClass: "v-select",
    class: [_vm.sizeModifier, _vm.statusType, {
      'is-fullwidth': _vm.expanded,
      'is-loading': _vm.loading,
      'is-multiple': _vm.multiple,
      'is-empty': _vm.selected == null
    }]
  }, [_c('select', _vm._b({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selected),
      expression: "selected"
    }],
    ref: "select",
    attrs: {
      "multiple": _vm.multiple,
      "size": _vm.nativeSize
    },
    on: {
      "blur": function($event) {
        _vm.$emit('blur', $event)
      },
      "focus": function($event) {
        _vm.$emit('focus', $event)
      },
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.selected = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, 'select', _vm.$attrs, false), [(_vm.placeholder) ? _c('option', {
    attrs: {
      "selected": "",
      "disabled": "",
      "hidden": ""
    },
    domProps: {
      "value": null
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.placeholder) + "\n              ")]) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)]), _vm._v(" "), _vm._t("icon")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-acf36158", module.exports)
  }
}

/***/ }),
/* 179 */
/*!******************************************!*\
  !*** ../packages/form/impl_checkbox.vue ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../.sdocs/node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../.sdocs/node_modules/vue-loader/lib/selector?type=script&index=0!./impl_checkbox.vue */ 180),
  /* template */
  __webpack_require__(/*! !../../.sdocs/node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-780deaca"}!../../.sdocs/node_modules/vue-loader/lib/selector?type=template&index=0!./impl_checkbox.vue */ 181),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/packages/form/impl_checkbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] impl_checkbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-780deaca", Component.options)
  } else {
    hotAPI.reload("data-v-780deaca", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 180 */
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../packages/form/impl_checkbox.vue ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sources_utils_mixin__ = __webpack_require__(/*! ../../sources/utils/mixin */ 3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VCheckbox',

  mixins: [Object(__WEBPACK_IMPORTED_MODULE_0__sources_utils_mixin__["a" /* createMixins */])(['size', 'disabled'])],

  props: {
    value: {},
    nativeValue: {},
    nativeName: String,
    trueValue: {
      type: [String, Number, Boolean, Object, Array, Symbol],
      'default': true
    },
    falseValue: {
      type: [String, Number, Boolean, Object, Array, Symbol],
      'default': false
    }
  },

  data() {
    return {
      localValue: this.value
    };
  },

  watch: {
    value(value) {
      this.localValue = value;
    },

    localValue(value) {
      this.$emit('input', value);
    }
  }
});

/***/ }),
/* 181 */
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-780deaca"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../packages/form/impl_checkbox.vue ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    ref: "label",
    staticClass: "v-checkbox",
    class: [_vm.sizeModifier, _vm.disabledModifier],
    attrs: {
      "disabled": _vm.disabled,
      "tabindex": _vm.disabled ? false : 0
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13) && _vm._k($event.keyCode, "space", 32)) { return null; }
        $event.preventDefault();
        _vm.$refs.label.click()
      }
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.localValue),
      expression: "localValue"
    }],
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled,
      "name": _vm.nativeName,
      "true-value": _vm.trueValue,
      "false-value": _vm.falseValue
    },
    domProps: {
      "value": _vm.nativeValue,
      "checked": Array.isArray(_vm.localValue) ? _vm._i(_vm.localValue, _vm.nativeValue) > -1 : _vm._q(_vm.localValue, _vm.trueValue)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.localValue,
          $$el = $event.target,
          $$c = $$el.checked ? (_vm.trueValue) : (_vm.falseValue);
        if (Array.isArray($$a)) {
          var $$v = _vm.nativeValue,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.localValue = $$a.concat([$$v]))
          } else {
            $$i > -1 && (_vm.localValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.localValue = $$c
        }
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "v-control-label"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-780deaca", module.exports)
  }
}

/***/ }),
/* 182 */
/*!***************************************!*\
  !*** ../packages/form/impl_radio.vue ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../.sdocs/node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../.sdocs/node_modules/vue-loader/lib/selector?type=script&index=0!./impl_radio.vue */ 183),
  /* template */
  __webpack_require__(/*! !../../.sdocs/node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-f721595a"}!../../.sdocs/node_modules/vue-loader/lib/selector?type=template&index=0!./impl_radio.vue */ 184),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/packages/form/impl_radio.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] impl_radio.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f721595a", Component.options)
  } else {
    hotAPI.reload("data-v-f721595a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 183 */
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../packages/form/impl_radio.vue ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sources_utils_mixin__ = __webpack_require__(/*! ../../sources/utils/mixin */ 3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VRadio',

  mixins: [Object(__WEBPACK_IMPORTED_MODULE_0__sources_utils_mixin__["a" /* createMixins */])(['size', 'disabled'])],

  props: {
    value: {},
    nativeName: String,
    nativeValue: {}
  },

  data() {
    return {
      localValue: this.value
    };
  },

  watch: {
    value(value) {
      this.localValue = value;
    },
    localValue(value) {
      // only trigger input event
      if (value === this.nativeValue) {
        this.$emit('input', value);
      }
    }
  }
});

/***/ }),
/* 184 */
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f721595a"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../packages/form/impl_radio.vue ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    ref: "label",
    staticClass: "v-radio",
    class: [_vm.sizeModifier, _vm.disabledModifier],
    attrs: {
      "disabled": _vm.disabled,
      "tabindex": _vm.disabled ? false : 0
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13) && _vm._k($event.keyCode, "space", 32)) { return null; }
        $event.preventDefault();
        _vm.$refs.label.click()
      }
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.localValue),
      expression: "localValue"
    }],
    attrs: {
      "type": "radio",
      "disabled": _vm.disabled,
      "name": _vm.nativeName
    },
    domProps: {
      "value": _vm.nativeValue,
      "checked": _vm._q(_vm.localValue, _vm.nativeValue)
    },
    on: {
      "__c": function($event) {
        _vm.localValue = _vm.nativeValue
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "v-control-label"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f721595a", module.exports)
  }
}

/***/ }),
/* 185 */
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a03c0486"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/examples2.vue ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("Examples")]), _vm._v(" "), _c('div', {
    staticClass: "demo-box"
  }, [_c('v-pagination', {
    ref: "pager",
    attrs: {
      "page": _vm.page,
      "total": 99,
      "size": "small",
      "align": "centered"
    },
    on: {
      "update:page": function($event) {
        _vm.page = $event
      },
      "on-page": _vm._handleOnPage
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "demo-box"
  }, [_c('dropdown', {
    attrs: {
      "magic": "right"
    },
    model: {
      value: (_vm.formData.price),
      callback: function($$v) {
        _vm.formData.price = $$v
      },
      expression: "formData.price"
    }
  }, [_c('button', {
    staticClass: "v-btn is-warning",
    attrs: {
      "slot": "trigger",
      "aria-haspopup": "true",
      "aria-controls": "v-dropdown-menu"
    },
    slot: "trigger"
  }, [_c('span', [_vm._v(_vm._s(_vm.formData.price))]), _vm._v(" "), _c('span', {
    staticClass: "has-icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-angle-up",
    attrs: {
      "aria-hidden": "true"
    }
  })])]), _vm._v(" "), _c('dropdown-item', {
    attrs: {
      "value": "￥1"
    }
  }, [_vm._v("\n      hello world\n    ")]), _vm._v(" "), _c('dropdown-item', {
    attrs: {
      "divider": true
    }
  }), _vm._v(" "), _c('dropdown-item', {
    attrs: {
      "value": "￥2"
    }
  }, [_vm._v("\n      hello world\n    ")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "demo-box"
  }, [_c('v-table', {
    staticClass: "my-x-table",
    attrs: {
      "columns": _vm.tableCols,
      "rows": _vm.tableRows
    },
    scopedSlots: _vm._u([{
      key: "v-td-select",
      fn: function(ref) {
        var row = ref.row;

        return [_c('label', {
          staticClass: "v-checkbox"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: (row.v__selected),
            expression: "row.v__selected"
          }],
          attrs: {
            "type": "checkbox"
          },
          domProps: {
            "checked": Array.isArray(row.v__selected) ? _vm._i(row.v__selected, null) > -1 : (row.v__selected)
          },
          on: {
            "__c": function($event) {
              var $$a = row.v__selected,
                $$el = $event.target,
                $$c = $$el.checked ? (true) : (false);
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v);
                if ($$el.checked) {
                  $$i < 0 && (row.v__selected = $$a.concat([$$v]))
                } else {
                  $$i > -1 && (row.v__selected = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
                }
              } else {
                row.v__selected = $$c
              }
            }
          }
        })])]
      }
    }])
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm._addRow
    }
  }, [_vm._v("Add new Row")])], 1), _vm._v(" "), _c('div', {
    staticClass: "demo-box"
  }, [_c('v-form', [_c('v-field', {
    attrs: {
      "label": "username",
      "message": "我是帮助信息"
    }
  }, [_c('v-input', {
    attrs: {
      "has-counter": true,
      "maxlength": 10,
      "type": "textarea"
    },
    model: {
      value: (_vm.formData.note),
      callback: function($$v) {
        _vm.formData.note = $$v
      },
      expression: "formData.note"
    }
  })], 1), _vm._v(" "), _c('v-field', {
    attrs: {
      "type": "danger"
    }
  }, [_c('v-select', {
    attrs: {
      "placeholder": "--cities--"
    },
    model: {
      value: (_vm.formData.tag),
      callback: function($$v) {
        _vm.formData.tag = $$v
      },
      expression: "formData.tag"
    }
  }, [_c('option', {
    attrs: {
      "value": "666"
    }
  }, [_vm._v("666")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "888"
    }
  }, [_vm._v("888")])])], 1), _vm._v(" "), _c('v-field', [_c('div', {
    staticClass: "v-control"
  }, [_c('v-checkbox', {
    attrs: {
      "name": "a",
      "native-value": "香港中文大学"
    },
    model: {
      value: (_vm.formData.schoolCheck),
      callback: function($$v) {
        _vm.formData.schoolCheck = $$v
      },
      expression: "formData.schoolCheck"
    }
  }, [_vm._v("香港中文大学")]), _vm._v(" "), _c('v-checkbox', {
    attrs: {
      "name": "b",
      "native-value": "香港中文大学2"
    },
    model: {
      value: (_vm.formData.schoolCheck),
      callback: function($$v) {
        _vm.formData.schoolCheck = $$v
      },
      expression: "formData.schoolCheck"
    }
  }, [_vm._v("香港中文大学2")])], 1)]), _vm._v(" "), _c('v-field', [_c('div', {
    staticClass: "v-control"
  }, [_c('v-radio', {
    attrs: {
      "native-value": "1"
    },
    model: {
      value: (_vm.formData.isOwn),
      callback: function($$v) {
        _vm.formData.isOwn = $$v
      },
      expression: "formData.isOwn"
    }
  }, [_vm._v("是")]), _vm._v(" "), _c('v-radio', {
    attrs: {
      "native-value": "0"
    },
    model: {
      value: (_vm.formData.isOwn),
      callback: function($$v) {
        _vm.formData.isOwn = $$v
      },
      expression: "formData.isOwn"
    }
  }, [_vm._v("否")])], 1)])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "demo-box"
  }, [_c('h2', [_vm._v(_vm._s(_vm.formData.isCheap))]), _vm._v(" "), _c('v-switch', {
    attrs: {
      "color": "info"
    },
    model: {
      value: (_vm.formData.isCheap),
      callback: function($$v) {
        _vm.formData.isCheap = $$v
      },
      expression: "formData.isCheap"
    }
  }, [_c('strong', [_vm._v(" " + _vm._s(_vm.formData.isCheap ? '' : '不') + "符合饭菜标准 ")])])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a03c0486", module.exports)
  }
}

/***/ }),
/* 186 */
/*!**************************!*\
  !*** ./pages/readme.vue ***!
  \**************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  null,
  /* template */
  __webpack_require__(/*! !../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-450f3fac"}!../node_modules/vue-loader/lib/selector?type=template&index=0!./readme.vue */ 187),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/readme.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] readme.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-450f3fac", Component.options)
  } else {
    hotAPI.reload("data-v-450f3fac", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 187 */
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-450f3fac"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/readme.vue ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("vui")]), _vm._v(" "), _c('p', [_vm._v("Yet a really simple and impressive UI framework for "), _c('strong', [_vm._v("SavJS")]), _vm._v(" .")]), _vm._v(" "), _c('h2', [_vm._v("Get Started")]), _vm._v(" "), _c('h4', [_vm._v("From local npm")]), _vm._v(" "), _c('pre', [_c('code', [_vm._v("npm install @vui/core\n")])]), _vm._v(" "), _c('h2', [_vm._v("Design Philosophy")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Minimize rule, and all components are split as much as possible .")]), _vm._v(" "), _c('li', [_vm._v("Modifier rule, mainly used for the appearance control of components, refer to "), _c('a', {
    attrs: {
      "href": "http://bulma.io/documentation/modifiers/syntax/"
    }
  }, [_vm._v("Bulma")])]), _vm._v(" "), _c('li', [_vm._v("A simple reset, basically only a box model .")]), _vm._v(" "), _c('li', [_vm._v("Attention to the component structure prototype, it just defines the basic representation, and styling by the modifier .")])]), _vm._v(" "), _c('h2', [_vm._v("License")]), _vm._v(" "), _c('p', [_vm._v("MIT")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-450f3fac", module.exports)
  }
}

/***/ }),
/* 188 */
/*!******************************************!*\
  !*** ./components/summary_container.vue ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  __webpack_require__(/*! !babel-loader!../node_modules/vue-loader/lib/selector?type=script&index=0!./summary_container.vue */ 189),
  /* template */
  __webpack_require__(/*! !../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-84f85d80"}!../node_modules/vue-loader/lib/selector?type=template&index=0!./summary_container.vue */ 194),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/components/summary_container.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] summary_container.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-84f85d80", Component.options)
  } else {
    hotAPI.reload("data-v-84f85d80", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 189 */
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/summary_container.vue ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_summary_vue__ = __webpack_require__(/*! ../pages/summary.vue */ 190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_summary_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_summary_vue__);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {},


  components: {
    SummaryList: __WEBPACK_IMPORTED_MODULE_0__pages_summary_vue___default.a
  }
});

/***/ }),
/* 190 */
/*!***************************!*\
  !*** ./pages/summary.vue ***!
  \***************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap&-autoprefixer!../node_modules/vue-loader/lib/style-compiler/index?{"id":"data-v-36d8ce4c","scoped":false,"hasInlineConfig":false}!sass-loader?sourceMap!../node_modules/vue-loader/lib/selector?type=styles&index=0!./summary.vue */ 191)

var Component = __webpack_require__(/*! ../node_modules/vue-loader/lib/component-normalizer */ 0)(
  /* script */
  null,
  /* template */
  __webpack_require__(/*! !../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-36d8ce4c"}!../node_modules/vue-loader/lib/selector?type=template&index=0!./summary.vue */ 193),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/charlie/code/sav-vui/.sdocs/pages/summary.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] summary.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-36d8ce4c", Component.options)
  } else {
    hotAPI.reload("data-v-36d8ce4c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 191 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-36d8ce4c","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/summary.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader?sourceMap&-autoprefixer!../node_modules/vue-loader/lib/style-compiler?{"id":"data-v-36d8ce4c","scoped":false,"hasInlineConfig":false}!../node_modules/sass-loader/lib/loader.js?sourceMap!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./summary.vue */ 192);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ 2)("399b44a3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-36d8ce4c\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/sass-loader/lib/loader.js?sourceMap!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./summary.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js?sourceMap&-autoprefixer!../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-36d8ce4c\",\"scoped\":false,\"hasInlineConfig\":false}!../node_modules/sass-loader/lib/loader.js?sourceMap!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./summary.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 192 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap&-autoprefixer!./node_modules/vue-loader/lib/style-compiler?{"id":"data-v-36d8ce4c","scoped":false,"hasInlineConfig":false}!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pages/summary.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ 1)();
// imports
exports.push([module.i, "@import url(https://cdn.bootcss.com/animate.css/3.5.2/animate.css);", ""]);
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);", ""]);
exports.push([module.i, "@import url(https://at.alicdn.com/t/font_299456_81qcthgrkonu3di.css);", ""]);

// module

// exports


/***/ }),
/* 193 */
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-36d8ce4c"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./pages/summary.vue ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "markdown-section"
  }, [_c('h1', [_vm._v("Vui")]), _vm._v(" "), _c('ul', [_c('li', [_c('p', [_vm._v("Get Started")]), _vm._v(" "), _c('ul', [_c('li', [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Installation")])], 1)])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Basis(基件) {is-dropdown}")]), _vm._v(" "), _c('ul', [_c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/basis/color_size.md"
    }
  }, [_vm._v("Color & Size & Font")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/basis/layout.md"
    }
  }, [_vm._v("Grid & Layout")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/basis/modifiers.md"
    }
  }, [_vm._v("Modifier")])], 1)])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Elements(元件) {is-dropdown}")]), _vm._v(" "), _c('ul', [_c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/elements/icon.md"
    }
  }, [_vm._v("Icon")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/elements/buttons.md"
    }
  }, [_vm._v("Button")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/elements/form.md"
    }
  }, [_vm._v("Form")]), _vm._v(" "), _c('ul', [_c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/elements/input.md"
    }
  }, [_vm._v("- Input")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/elements/select.md"
    }
  }, [_vm._v("- Select")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/elements/textarea.md"
    }
  }, [_vm._v("- Textarea")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/elements/form_misc.md"
    }
  }, [_vm._v("- Misc")])], 1)])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/elements/close.md"
    }
  }, [_vm._v("Close")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/elements/box.md"
    }
  }, [_vm._v("Box")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/elements/notifications.md"
    }
  }, [_vm._v("Notification")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/elements/content.md"
    }
  }, [_vm._v("Content")])], 1)])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("Components(组件) {is-dropdown}")]), _vm._v(" "), _c('ul', [_c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/components/modal.md"
    }
  }, [_vm._v("Modal")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/components/dropdown.md"
    }
  }, [_vm._v("Dropdown")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/components/sidebar.md"
    }
  }, [_vm._v("Sidebar")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/components/navbar.md"
    }
  }, [_vm._v("Navbar")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/components/message.md"
    }
  }, [_vm._v("Message")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/components/card.md"
    }
  }, [_vm._v("Card")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/components/tab.md"
    }
  }, [_vm._v("Tabs")])], 1)])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('li', [_c('p', [_vm._v("Advanced(进阶)")]), _vm._v(" "), _c('ul', [_c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/customize.md"
    }
  }, [_vm._v("Customize")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    attrs: {
      "to": "/pages/examples2.md"
    }
  }, [_vm._v("Examples")])], 1)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('p', [_vm._v("Business(业务) {is-dropdown}")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Fuzzy")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-36d8ce4c", module.exports)
  }
}

/***/ }),
/* 194 */
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-84f85d80"}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./components/summary_container.vue ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('aside', {
    staticClass: "sidebar"
  }, [_c('div', {
    staticClass: "sidebar-nav"
  }, [_c('summary-list')], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-84f85d80", module.exports)
  }
}

/***/ })
/******/ ]);