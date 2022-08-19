(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("uuid"), require("dagre"), require("canvg"));
	else if(typeof define === 'function' && define.amd)
		define(["uuid", "dagre", "canvg"], factory);
	else if(typeof exports === 'object')
		exports["VEditor"] = factory(require("uuid"), require("dagre"), require("canvg"));
	else
		root["VEditor"] = factory(root["uuid"], root["dagre"], root["canvg"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__459__, __WEBPACK_EXTERNAL_MODULE__987__, __WEBPACK_EXTERNAL_MODULE__973__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 274:
/***/ ((module, exports, __webpack_require__) => {

exports = module.exports = __webpack_require__(252)(false);
// imports


// module
exports.push([module.id, "@keyframes dashing {\n  from {\n    stroke-dashoffset: 200;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n.ve-editor {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.ve-editor .ve-editor-back {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 0;\n  left: 0;\n  top: 0;\n}\n.ve-editor .ve-minimap {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: #fff;\n  border: 1px solid #cecece;\n  border-radius: 5px;\n  overflow: hidden;\n  width: 160px;\n  height: 127px;\n}\n.ve-editor .ve-minimap .drag-rect {\n  position: absolute;\n  left: 0px;\n  box-sizing: content-box;\n  top: 0px;\n  border: 2px solid #08c;\n  cursor: pointer;\n  transition: all 200ms ease;\n}\n.ve-editor .ve-minimap .drag-point {\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n  border: 2px solid #08c;\n  background: #fff;\n  position: absolute;\n  right: -5px;\n  bottom: -5px;\n  cursor: nwse-resize;\n}\n.ve-editor > .ve-editor-svg {\n  cursor: grab;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.ve-editor > .ve-editor-svg svg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  outline: none;\n}\n.ve-editor > .ve-editor-svg * {\n  transition: x, y, transform, cx, cy, width, stroke, height, fill 400ms;\n  outline: none;\n}\n.ve-editor > .ve-editor-svg .ve-node:hover .ve-link-points,\n.ve-editor > .ve-editor-svg .ve-node.active .ve-link-points {\n  display: block;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-link-points {\n  cursor: crosshair;\n  display: none;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-link-points:hover,\n.ve-editor > .ve-editor-svg .ve-node .ve-link-points.hover {\n  fill: #4c79ff;\n  cursor: crosshair;\n  display: block;\n}\n.ve-editor > .ve-editor-svg .ve-node.active .icon-node {\n  transition: stroke 400ms;\n  stroke: #4c79ff;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-node-shape {\n  cursor: move;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-node-shape:hover > .icon-node {\n  stroke: #4c79ff;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-node-shape.success .icon-node {\n  stroke: green;\n  fill: #fff;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-node-shape.error .icon-node {\n  stroke: red;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-node-shape.running .icon-node {\n  stroke: #4c79ff;\n}\n.ve-editor > .ve-editor-svg .ve-line .ve-line-path {\n  transition: stroke-dasharray 300ms ease-out;\n}\n.ve-editor > .ve-editor-svg .ve-line .ve-shdow-path {\n  stroke: transparent;\n  stroke-width: 3;\n  fill: none;\n}\n.ve-editor > .ve-editor-svg .ve-line.active .ve-line-shape,\n.ve-editor > .ve-editor-svg .ve-line:hover .ve-line-shape {\n  opacity: 0.5;\n}\n.ve-editor > .ve-editor-svg .ve-line.active .ve-line-arrow,\n.ve-editor > .ve-editor-svg .ve-line:hover .ve-line-arrow {\n  opacity: 0.5;\n}\n.ve-editor > .ve-editor-svg .ve-line.running .ve-line-path {\n  stroke-dasharray: 5 !important;\n  animation: dashing 5s linear infinite;\n}\n.ve-editor > .ve-editor-svg .ve-line .ve-line-shape {\n  cursor: pointer;\n}\n.ve-editor > .ve-editor-svg .ve-line .ve-line-arrow {\n  cursor: crosshair;\n}\n.ve-editor > .ve-editor-svg .ve-line .ve-line-label text {\n  text-anchor: middle;\n}\n.ve-editor > .ve-editor-svg .anchor-line {\n  stroke: #4c79ff;\n}\n.ve-editor > .ve-editor-svg .ve-paper-lineing .ve-link-points {\n  display: block;\n}\n.ve-editor > .ve-editor-html {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.ve-editor .anchor-back {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.ve-node-wrapper {\n  border: 1px solid #08c;\n  border-radius: 8px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  background-color: #fff;\n  align-items: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 252:
/***/ ((module) => {

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

/***/ 176:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(274);

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(723)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 723:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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

var	fixUrls = __webpack_require__(947);

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

/***/ 947:
/***/ ((module) => {


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

/***/ 27:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiAgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxnIGlkPSIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgoJCTxyZWN0IGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PC9yZWN0PgoJCTxyZWN0IGlkPSJSZWN0YW5nbGUiIHN0cm9rZT0iI2FiZiIgIHg9Ii0xIiB5PSItMSIgd2lkdGg9IjJweCIgaGVpZ2h0PSIycHgiPjwvcmVjdD4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ 973:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__973__;

/***/ }),

/***/ 987:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__987__;

/***/ }),

/***/ 459:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__459__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src_0)
});

// UNUSED EXPORTS: AnchorLine, Controller, DefaultLine, DefaultNode, Event, Graph, History, Line, Minimap, Node, Schema, Utils, VEditor

// NAMESPACE OBJECT: ./src/Utils/dom.ts
var dom_namespaceObject = {};
__webpack_require__.r(dom_namespaceObject);
__webpack_require__.d(dom_namespaceObject, {
  "animate": () => (animate),
  "createSVGElement": () => (createSVGElement),
  "drag": () => (drag),
  "getAngle": () => (getAngle),
  "getDOMRect": () => (getDOMRect),
  "getEase": () => (getEase),
  "setAttrs": () => (setAttrs),
  "setTransform": () => (setTransform),
  "svgWrapper": () => (svgWrapper)
});

;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/******************************************************************************
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
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
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
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
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
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(459);
;// CONCATENATED MODULE: ./src/Utils/vector.ts
function normalize(v) {
    var length = Math.sqrt(v.x * v.x + v.y * v.y);
    return {
        x: v.x / length,
        y: v.y / length
    };
}
function addVector() {
    var vectors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        vectors[_i] = arguments[_i];
    }
    return vectors.reduce(function (pre, cur) {
        return {
            x: pre.x + cur.x,
            y: pre.y + cur.y
        };
    }, {
        x: 0, y: 0
    });
}
function getVectorLength(v) {
    var length = Math.sqrt(v.x * v.x + v.y * v.y);
    return length;
}
function subVector(v0, v1) {
    return {
        x: v1.x - v0.x,
        y: v1.y - v0.y
    };
}
function multiple(v, t) {
    return {
        x: v.x * t,
        y: v.y * t
    };
}


;// CONCATENATED MODULE: ./src/Utils/BezierLine.ts


var BezierLine = /** @class */ (function () {
    function BezierLine() {
        this.lengths = [];
    }
    BezierLine.prototype.setControl = function (v0, v1, v2, v3) {
        this.v0 = v0;
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
    };
    BezierLine.prototype.getPoint = function (t) {
        var _a = this, v0 = _a.v0, v1 = _a.v1, v2 = _a.v2, v3 = _a.v3;
        var pos = addVector(multiple(__assign({}, v0), Math.pow(1 - t, 3)), multiple(__assign({}, v1), Math.pow(1 - t, 2) * 3 * t), multiple(__assign({}, v2), 3 * (1 - t) * Math.pow(t, 2)), multiple(__assign({}, v3), Math.pow(t, 3)));
        return pos;
    };
    // 这里使用简单的前后点来计算角度
    BezierLine.prototype.getAngle = function (t) {
        var pre = this.getPoint(Math.max(0, t - 0.001));
        var next = this.getPoint(Math.min(1, t + 0.001));
        var angle = Math.atan2(next.y - pre.y, next.x - pre.x);
        return angle;
    };
    /**
     * @param n 指定点的个数
     * @returns
     */
    BezierLine.prototype.getSpacedPoints = function (n) {
        var points = [];
        this.getLengths(n); // 缓存起来
        for (var i = 0; i <= n; i++) {
            var t = this.getUtoTmapping(i / n);
            points.push(this.getPoint(t));
        }
        return points;
    };
    /**
     * 返回缓存长度数组
     * @param n 分割点的个数
     * @returns
     */
    BezierLine.prototype.getLengths = function (n) {
        if (n === void 0) { n = 100; }
        var length = 0;
        var prePos = __assign({}, this.v0);
        this.lengths = [__assign(__assign({}, this.v0), { length: 0 })];
        for (var i = 1; i <= n; i++) {
            var pos = this.getPoint(i / n);
            length += getVectorLength(subVector(pos, prePos));
            this.lengths.push(__assign(__assign({}, pos), { length: length }));
            prePos = pos;
        }
        return this;
    };
    /**
     * 获取线总长度
     * @param n
     * @returns
     */
    BezierLine.prototype.getLength = function (n) {
        this.getLengths(n);
        return this.lengths[this.lengths.length - 1].length;
    };
    // TODO: 根据总长度算出一定比例的长度所对应的t值，
    // 这个等距划分的算法不很准确，可以改进成，记录每个线段起止点，然后利用累进线段长度和斜率来计算等距点，
    // 但是某些弧度特别大的线可能需要取点密一点才有用，不过也非常有效了
    BezierLine.prototype.getUtoTmapping = function (u) {
        var lengths = this.lengths;
        var length = lengths[lengths.length - 1].length;
        var targetLength = u * length;
        var nextIndex;
        var nowIndex = 0;
        lengths.find(function (item, index) {
            if (item.length >= targetLength) {
                nextIndex = index;
                return true;
            }
            else {
                nowIndex = index;
                return false;
            }
        });
        var nextPoint = this.lengths[nextIndex];
        var nowPoint = this.lengths[nowIndex];
        var restRatio = u === 0 ? 0 : (targetLength - nowPoint.length) / (nextPoint.length - nowPoint.length);
        var t = (nowIndex + Math.max(restRatio, 0)) / (this.lengths.length - 1);
        return t;
    };
    return BezierLine;
}());
/* harmony default export */ const Utils_BezierLine = (BezierLine);

;// CONCATENATED MODULE: ./src/Utils/dom.ts

function getDOMRect(str, callback) {
    var div = document.createElement("div");
    div.style.position = "fixed";
    div.style.visibility = "hidden";
    div.innerHTML = str;
    document.body.appendChild(div);
    var rect = div.getBoundingClientRect();
    // document.body.removeChild(div);
    return rect;
}
function svgWrapper(svgString, parent) {
    var svg = createSVGElement("svg");
    svg.innerHTML = svgString;
    if (parent)
        parent.appendChild(svg.children[0]);
    return svg.children[0];
}
function createSVGElement(name, parent) {
    var svg = window.document.createElementNS("http://www.w3.org/2000/svg", name);
    if (parent) {
        parent.appendChild(svg);
    }
    return svg;
}
function setAttrs(dom, attrs) {
    for (var key in attrs) {
        if (key === "className") {
            return dom.setAttribute("class", attrs[key]);
        }
        if (attrs.hasOwnProperty(key)) {
            dom.setAttribute(key, attrs[key]);
        }
    }
}
function setTransform(scale, translateX, translateY) {
    return "translate(".concat(translateX, ",").concat(translateY, ") scale(").concat(scale, ")");
}
function animate(start, end, callback, duration, endCallback, easeType) {
    if (easeType === void 0) { easeType = "ease-in"; }
    var startTime = Date.now();
    var endTime = startTime + duration;
    var bezierLine = getEase(easeType);
    var aniamteFrame;
    var step = function () {
        var now = Date.now();
        if (now >= endTime) {
            callback(end);
            if (typeof endCallback === "function")
                endCallback();
            return;
        }
        var y = bezierLine.getPoint((now - startTime) / duration).y;
        callback(start + y * (end - start));
        aniamteFrame = requestAnimationFrame(step);
    };
    step();
    return aniamteFrame;
}
function getEase(easeType) {
    var bezierLine = new Utils_BezierLine();
    switch (easeType) {
        case "ease":
            bezierLine.setControl({ x: 0, y: 0 }, { x: 0.25, y: 0.1 }, { x: 0.25, y: 1 }, { x: 1, y: 1 });
        case "ease-in":
            bezierLine.setControl({ x: 0, y: 0 }, { x: 0.42, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 1 });
        case "ease-out":
            bezierLine.setControl({ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0.58, y: 1 }, { x: 1, y: 1 });
        case "ease-in-out":
            bezierLine.setControl({ x: 0, y: 0 }, { x: 0.42, y: 0 }, { x: 0.58, y: 1 }, { x: 1, y: 1 });
        default:
            bezierLine.setControl({ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 1 });
    }
    return bezierLine;
}
function drag(node, dragMove, dragStart, dragEnd) {
    function onDragStart(e) {
        dragStart(e);
        document.addEventListener("mousemove", onDragMove);
        document.addEventListener("mouseup", onDragEnd);
    }
    function onDragMove(e) {
        dragMove(e);
        if (node && !node.parentElement) {
            _destroy();
        }
    }
    function onDragEnd(e) {
        dragEnd(e);
        document.removeEventListener("mousemove", onDragMove);
        document.removeEventListener("mouseup", onDragEnd);
    }
    node.addEventListener("mousedown", onDragStart);
    var _destroy = function () {
        node.removeEventListener("mousedown", onDragStart);
        document.removeEventListener("mousemove", onDragMove);
        document.removeEventListener("mouseup", onDragEnd);
        node = undefined;
    };
    return _destroy;
}
function getAngle(from, to) {
    var dx = to.x - from.x;
    var dy = to.y - from.y;
    return (Math.atan2(dy, dx) * 180) / Math.PI;
}

;// CONCATENATED MODULE: ./src/Utils/svg.ts



var SVGHelper = __assign(__assign({}, dom_namespaceObject), { rect: function (x, y, w, h, rx, ry) {
        if (rx === void 0) { rx = 0; }
        if (ry === void 0) { ry = 0; }
        var svgString = "<rect x=\"".concat(x, "\" y=\"").concat(y, "\" width=\"").concat(w, "\" height=\"").concat(h, "\" rx=\"").concat(rx, "\" ry=\"").concat(ry, "\" />");
        return svgWrapper(svgString);
    }, text: function (x, y, text) {
        if (text === void 0) { text = ''; }
        return svgWrapper("<text x=\"".concat(x, "\" y=\"").concat(y, "\">").concat(text, "</text>"));
    }, circle: function (cx, cy, r) {
        return svgWrapper("<circle cx=\"".concat(cx, "\" cy=\"").concat(cy, "\" r=\"").concat(r, "\" />"));
    }, image: function (src, x, y, w, h) {
        return svgWrapper("<image x=\"".concat(x, "\" y=\"").concat(y, "\" width=\"").concat(w, "\" height=\"").concat(h, "\" xlink:href=\"").concat(src, "\" />"));
    }, path: function (d) {
        if (d === void 0) { d = ""; }
        return svgWrapper("<path d=\"".concat(d, "\" />"));
    }, group: function () {
        var others = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            others[_i] = arguments[_i];
        }
        var group = createSVGElement("g");
        others && others.forEach(function (item) {
            group.appendChild(item);
        });
        return group;
    } });


;// CONCATENATED MODULE: ./src/Shape/Nodes/DefaultNodes.ts


var DefaultNode = {
    adsorb: [20, 20],
    linkPoints: [
        { x: 0.5, y: 0 },
        { x: 0.5, y: 1 },
    ],
    /**
     * 默认渲染函数 data,snapPaper
     */
    render: function (instanceNode) {
        var node, text;
        var data = instanceNode.data;
        if (instanceNode.shape) {
            instanceNode.shape.remove();
        }
        else {
            node = SVGHelper.rect(0, 0, 100, 40);
            text = SVGHelper.text(20, 25, data.name);
        }
        setAttrs(node, {
            fill: "#fff",
            stroke: "#000",
            rx: 5,
            ry: 5,
        });
        return SVGHelper.group(node, text);
    },
    /**
     * 渲染连接点 (node, linkPoint, circle)
     */
    renderLinkPoint: function (node, instance) {
        var linkPoint = instance.data;
        if (!instance.dom) {
            instance.dom = SVGHelper.circle(0, 0, 5);
        }
        var circle = instance.dom;
        var box = node.shapeBBox || node.shape.getBBox();
        node.shapeBBox = box;
        var x = (linkPoint.isPixel ? linkPoint.x : linkPoint.x * box.width);
        var y = (linkPoint.isPixel ? linkPoint.y : linkPoint.y * box.height);
        setAttrs(circle, {
            cx: x,
            cy: y,
            fill: "#fff",
            stroke: "#08c",
            class: "ve-link-points",
        });
        if (!instance.data) {
            instance.data = linkPoint;
        }
        instance.x = x + node.data.x;
        instance.y = y + node.data.y;
        instance.local = {
            x: linkPoint.isPixel ? linkPoint.x : (linkPoint.x * box.width),
            y: linkPoint.isPixel ? linkPoint.y : (linkPoint.y * box.height),
        };
        return instance;
    },
    destroy: function (node) {
        var _a;
        (_a = node.shape) === null || _a === void 0 ? void 0 : _a.remove();
    },
};
/* harmony default export */ const DefaultNodes = (DefaultNode);

;// CONCATENATED MODULE: ./src/Shape/Nodes/IconNode.ts
var _this = undefined;



var IconNode = {
    adsorb: [20, 20],
    linkPoints: [
        { x: 0.5, y: 0 },
        { x: 0.5, y: 1 },
    ],
    render: function (instanceNode) {
        var data = instanceNode.data, shape = instanceNode.shape;
        if (shape) {
            shape.remove();
        }
        var node = SVGHelper.rect(0, 0, 180, 32);
        var text = SVGHelper.text(40, 21, data.name);
        var icon = SVGHelper.image(data.iconPath, 5, 4, 24, 24);
        icon.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        setAttrs(node, {
            class: "icon-node",
            fill: "#EAEEFA",
            stroke: "#CCD9FD",
            rx: 17,
            ry: 17,
        });
        return SVGHelper.group(node, text, icon);
    },
    renderLinkPoint: function (node, instance) {
        return DefaultNodes.renderLinkPoint.call(_this, node, instance);
    },
};
/* harmony default export */ const Nodes_IconNode = (IconNode);

;// CONCATENATED MODULE: ./src/Shape/Nodes/DomNode.ts
var DomNode_this = undefined;



var DomNode = {
    adsorb: [20, 20],
    linkPoints: [
        { x: 0, y: 0.5 },
        { x: 1, y: 0.5 },
        { x: 0.5, y: 0 },
        { x: 0.5, y: 1 },
    ],
    render: function (instanceNode) {
        var data = instanceNode.data, shape = instanceNode.shape;
        if (shape) {
            shape.remove();
        }
        var dom = svgWrapper("<foreignObject width=".concat(data.width, " height=").concat(data.height, " >\n\t\t<div style=\"width:").concat(data.width, "px;height:").concat(data.height, "\" class=\"ve-node-wrapper\">\n\t\t\t<div class=\"node-text\">").concat(data.name, "</div>\n\t\t</div>\n\t\t</foreignObject>"));
        var group = SVGHelper.group(dom);
        return group;
    },
    renderLinkPoint: function (node, instance) {
        return DefaultNodes.renderLinkPoint.call(DomNode_this, node, instance);
    },
};
/* harmony default export */ const Nodes_DomNode = (DomNode);

;// CONCATENATED MODULE: ./src/Shape/Node.ts







/**
 * @class Node
 */
var Node = /** @class */ (function () {
    function Node(graph) {
        var _this = this;
        /**
         * 添加节点
         * @param {object} data
         */
        this.addNode = function (data) {
            if (!data.uuid) {
                data.uuid = (0,external_uuid_.v1)();
                _this.graph.editor.fire("node:makeuuid", data);
            }
            if (data.uuid.indexOf && data.uuid.indexOf("-") > -1) {
                data.uuid = data.uuid.replace(/-/g, "");
            }
            var node = _this.renderNode(data);
            /**
             * @event Graph#node:change - 节点变化事件
             * @property {Object} node
             */
            _this.graph.fire("node:change", { node: node });
            return node;
        };
        /**
         * 删除节点
         *  @param {object} data
         */
        this.deleteNode = function (input) {
            var _a, _b, _c;
            var uuid = typeof input === "string" ? input : input.uuid;
            var deleteNode = _this.nodes[uuid];
            var nodeRender = _this.shapes[deleteNode.data.type || "default"];
            nodeRender.destroy && nodeRender.destroy(deleteNode);
            delete _this.nodes[uuid];
            /**
             * @event Graph#node:remove - 移除节点事件
             */
            _this.graph.fire("node:remove", { node: deleteNode, uuid: uuid });
            (_a = deleteNode.linkPoints) === null || _a === void 0 ? void 0 : _a.forEach(function (point) {
                point.dom.remove();
                point = null;
            });
            (_b = deleteNode.fromLines) === null || _b === void 0 ? void 0 : _b.forEach(function (lineId) {
                _this.graph.line.deleteLine(lineId, true, true);
            });
            (_c = deleteNode.toLines) === null || _c === void 0 ? void 0 : _c.forEach(function (lineId) {
                _this.graph.line.deleteLine(lineId, true, true);
            });
            deleteNode._destroys.forEach(function (func) { return func(); });
            deleteNode.dom.remove();
        };
        this.graph = graph;
        this.nodes = {};
        this.paper = graph.editor.paper;
        this.nodeG = createSVGElement("g", this.paper);
        this.nodeG.classList.add("ve-nodes");
        this.initDefs();
        this.listenEvent();
        this.actives = {};
        this.shapes = {
            default: DefaultNodes,
            iconNode: Nodes_IconNode,
            domNode: Nodes_DomNode,
        };
    }
    Node.prototype.initDefs = function () {
        this.shadow = svgWrapper("<defs>\n\t\t\t<filter id=\"ve-black-shadow\" filterUnits=\"userSpaceOnUse\">\n                <feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"4\"></feGaussianBlur>\n                <feGaussianBlur stdDeviation=\"3\" />\n                <feOffset dx=\"0\" dy=\"0\" result=\"offsetblur\"></feOffset>\n                <feFlood flood-color=\"#333333\"></feFlood>\n                <feComposite in2=\"offsetblur\" operator=\"in\"></feComposite>\n                <feComponentTransfer>\n                    <feFuncA type=\"linear\" slope=\"0.3\"></feFuncA>\n                </feComponentTransfer>\n                <feMerge>\n                <feMergeNode />\n                <feMergeNode in=\"SourceGraphic\" />\n                </feMerge>\n            </filter>\n\t\t</defs>", this.paper);
    };
    // 监听事件
    Node.prototype.listenEvent = function () {
        var _this = this;
        this.graph.on("paper:click", function () {
            _this.unActive();
        });
        this.graph.on("line:click", function () {
            _this.unActive();
        });
        this.graph.on("copy", function () {
            var activeNode = __assign({}, _this.actives);
            var newActiveNode = {};
            for (var node in activeNode) {
                newActiveNode[node] = __assign(__assign({}, activeNode[node]), { data: JSON.parse(JSON.stringify(activeNode[node].data)) });
            }
            _this.copyNode = newActiveNode;
        });
        this.graph.on("paste", function () {
            _this.unActive();
            for (var key in _this.copyNode) {
                var node = _this.copyNode[key];
                var newData = __assign({}, node.data);
                newData.x += 20 + Math.random() * 20;
                newData.y += 20 + Math.random() * 20;
                delete newData.uuid;
                var newNode = _this.addNode(newData);
                _this.setActive(newNode);
            }
        });
    };
    Node.prototype.registeNode = function (type, data, extend) {
        if (extend === void 0) { extend = "default"; }
        this.shapes[type] = Object.assign({}, this.shapes[extend], data);
    };
    Node.prototype.render = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return new Promise(function (resolve, reject) {
            _this.tmpLinkPoints = []; //先缓存获取所有节点渲染后触发，避免重绘
            Object.keys(data).map(function (key) {
                _this.renderNode(data[key]);
            });
            _this.timeout = setTimeout(function () {
                _this.tmpLinkPoints.forEach(function (node) {
                    _this.addNodeLinkPoints(node);
                });
                _this.tmpLinkPoints = undefined;
                resolve(true);
            }, 0);
        });
    };
    /**
     * 渲染新节点
     */
    Node.prototype.renderNode = function (item) {
        var key = item.uuid;
        var shape = this.shapes[item.type || "default"];
        shape.paper = this.paper;
        var node = {
            dom: undefined,
            toLines: new Set(),
            fromLines: new Set(),
            _destroys: [],
            data: item,
            linkPoints: []
        };
        var nodeShape = shape.render(node);
        var dom = SVGHelper.group(nodeShape);
        node.shape = nodeShape;
        node.dom = dom;
        node.linkPointsTypes = item.linkPointsTypes;
        nodeShape.classList.add("ve-node-shape");
        dom.setAttribute("class", "ve-node ".concat(item.className || ""));
        dom.setAttribute("data-id", key);
        dom.setAttribute("transform", "translate(".concat(item.x || 0, ",").concat(item.y || 0, ")"));
        this.nodeG.appendChild(dom);
        this.nodes[item.uuid] = node;
        // 是否缓存
        this.tmpLinkPoints
            ? this.tmpLinkPoints.push(node)
            : this.addNodeLinkPoints(node);
        this.addNodeEvent(node);
        return node;
    };
    Node.prototype.update = function () {
        for (var nodeId in this.nodes) {
            this.updateNode(nodeId, true);
        }
    };
    /**
     * 根据数据更新节点位置
     */
    Node.prototype.updateNode = function (input, rerenderShape) {
        if (rerenderShape === void 0) { rerenderShape = false; }
        var nodeData;
        if (typeof input !== "object") {
            nodeData = this.nodes[input].data;
        }
        else {
            nodeData = input;
        }
        if (!nodeData)
            return;
        var uuid = nodeData.uuid;
        var node = this.nodes[uuid];
        var shape = this.shapes[nodeData.type || "default"];
        if (rerenderShape) {
            var nodeShape = shape.render(node);
            node.shape = nodeShape;
            node.dom.prepend(nodeShape);
        }
        setAttrs(node.dom, {
            class: "ve-node ".concat(nodeData.className || ""),
        });
        node.dom.setAttribute("transform", "translate(".concat(nodeData.x, " ,").concat(nodeData.y, ")"));
        node.data = nodeData;
        if (rerenderShape) {
            node.linkPoints.forEach(function (linkPoint) {
                shape.renderLinkPoint(node, linkPoint);
            });
        }
    };
    /**
     * 给节点添加连线点
     * @param {node} node
     */
    Node.prototype.addNodeLinkPoints = function (node) {
        var _this = this;
        node.linkPoints = [];
        var shape = this.shapes[node.data.type || "default"];
        node.linkPointsTypes = node.linkPointsTypes || this.shapes[node.data.type].linkPoints;
        if (!node.linkPointsTypes) {
            return false;
        }
        node.linkPointsTypes.forEach(function (linkPoint, index) {
            if (shape.renderLinkPoint) {
                var instancePoint = {
                    data: __assign({}, linkPoint),
                    dom: undefined,
                    x: 0,
                    y: 0,
                };
                shape.renderLinkPoint(node, instancePoint);
                instancePoint.index = index;
                instancePoint.nodeId = node.data.uuid;
                node.linkPoints.push(instancePoint);
                setAttrs(instancePoint.dom, {
                    "data-node-id": node.data.uuid,
                    "data-index": index,
                });
                node.dom.append(instancePoint.dom);
                _this.graph.line.addLinkPointEvent(instancePoint);
            }
        });
    };
    Node.prototype.updateLinkPoints = function (node) {
        var _a;
        (_a = node.linkPoints) === null || _a === void 0 ? void 0 : _a.forEach(function (point) {
            point.dom.remove();
            point = null;
        });
        this.addNodeLinkPoints(node);
    };
    Node.prototype.panNode = function (node, dx, dy) {
        var _this = this;
        var controller = this.graph.editor.controller;
        var scale = controller.scale;
        var x = (node.startX || 0) + dx / scale;
        var y = (node.startY || 0) + dy / scale;
        var newXY = this.graph.anchorLine.check(x, y);
        if (newXY) {
            x = newXY.x;
            y = newXY.y;
        }
        node.data.x = x;
        node.data.y = y;
        node.linkPoints.forEach(function (circle) {
            _this.shapes[node.data.type || "default"].renderLinkPoint(node, circle);
        });
        node.dom.setAttribute("transform", "translate(".concat(x, " ,").concat(y, ")"));
    };
    /**
     * 给节点添加事件
     * @param {*} node
     */
    Node.prototype.addNodeEvent = function (node) {
        var _this = this;
        node._destroys.push(SVGHelper.drag(node.dom, function (e) {
            var dx = e.clientX - node.clientX;
            var dy = e.clientY - node.clientY;
            if (_this.actives[node.data.uuid]) {
                for (var key in _this.actives) {
                    _this.panNode(_this.actives[key], dx, dy);
                    /**
                     * @event Graph#node:move on node move event
                     */
                    _this.graph.fire("node:move", {
                        node: _this.actives[key],
                    });
                }
            }
            else {
                _this.panNode(node, dx, dy);
                /**
                 * @event Graph#node:move
                 */
                _this.graph.fire("node:move", { node: node });
            }
        }, function (e) {
            // 拖动时是否有选中其他
            for (var key in _this.actives) {
                _this.actives[key].startX = _this.actives[key].data.x;
                _this.actives[key].startY = _this.actives[key].data.y;
            }
            _this.graph.anchorLine.makeAllAnchors(node);
            node.clientX = e.clientX;
            node.clientY = e.clientY;
            // 提前获得bbox避免重绘
            node.startX = node.data.x;
            node.startY = node.data.y;
            /**
            * @event Graph#node:startmove start move
            */
            _this.graph.fire("node:startmove", { node: node });
        }, function (e) {
            _this.graph.anchorLine.hidePath();
            if (node.startX === node.data.x &&
                node.startY === node.data.y) {
                return false;
            }
            /**
            * @event Graph#node:endmove end move
            */
            _this.graph.fire("node:endmove", { node: node });
            _this.graph.fire("node:change", { node: node });
        }));
        node.dom.addEventListener("click", function (event) {
            if (Math.abs(event.clientX - node.clientX) < 2 &&
                Math.abs(event.clientY - node.clientY) < 2) {
                if (event.shiftKey) {
                    if (_this.actives[node.data.uuid]) {
                        _this.unActive(node);
                    }
                    else {
                        _this.setActive(node);
                    }
                }
                else {
                    _this.unActive();
                    _this.setActive(node);
                }
                /**
                 * @event Graph#node:click - 节点点击事件
                 */
                _this.graph.fire("node:click", { node: node, event: event });
            }
        });
        node.dom.addEventListener("mouseenter", function (event) {
            /**
             * @event Graph#node:mouseenter - 节点进入事件
             */
            _this.graph.fire("node:mouseenter", { node: node, event: event });
        });
        node.dom.addEventListener("mouseleave", function (event) {
            /**
             * @event Graph#node:mouseleave
             */
            _this.graph.fire("node:mouseleave", { node: node, event: event });
        });
    };
    Node.prototype.setActive = function (node) {
        var _a;
        var nodes = node
            ? (_a = {},
                _a[node.data.uuid] = node,
                _a) : this.nodes;
        for (var key in nodes) {
            node = nodes[key];
            node.dom.classList.add("active");
            setAttrs(node.shape, {
                filter: "url(#ve-black-shadow)",
            });
            this.actives[node.data.uuid] = node;
        }
    };
    Node.prototype.unActive = function (node) {
        if (node) {
            delete this.actives[node.data.uuid];
            this.unActiveNode(node);
        }
        else {
            for (var key in this.actives) {
                this.unActiveNode(this.actives[key]);
            }
            this.actives = {};
        }
        /**
         * @event Graph#node:unactive
         */
        this.graph.fire("node:unactive", { node: node });
    };
    Node.prototype.unActiveNode = function (node) {
        node.dom.classList.remove("active");
        setAttrs(node.dom, {
            filter: null,
        });
    };
    /**
     *
     */
    Node.prototype.clear = function () {
        var nodes = this.nodes;
        clearTimeout(this.timeout);
        for (var key in nodes) {
            this.deleteNode(nodes[key].data);
        }
    };
    return Node;
}());
/* harmony default export */ const Shape_Node = (Node);

;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/common.js
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/mat2d.js

/**
 * 2x3 Matrix
 * @module mat2d
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b,
 *  c, d,
 *  tx, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, b, 0,
 *  c, d, 0,
 *  tx, ty, 1]
 * </pre>
 * The last column is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */

function create() {
  var out = new ARRAY_TYPE(6);

  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[4] = 0;
    out[5] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */

function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */

function fromValues(a, b, c, d, tx, ty) {
  var out = new glMatrix.ARRAY_TYPE(6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */

function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */

function invert(out, a) {
  var aa = a[0],
      ab = a[1],
      ac = a[2],
      ad = a[3];
  var atx = a[4],
      aty = a[5];
  var det = aa * ad - ab * ac;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}
/**
 * Calculates the determinant of a mat2d
 *
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}
/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}
/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/

function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/

function translate(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2d} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat2d} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2d
 *
 * @param {ReadonlyMat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")";
}
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {ReadonlyMat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
}
/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}
/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function mat2d_equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}
/**
 * Alias for {@link mat2d.multiply}
 * @function
 */

var mul = (/* unused pure expression or super */ null && (multiply));
/**
 * Alias for {@link mat2d.subtract}
 * @function
 */

var sub = (/* unused pure expression or super */ null && (subtract));
;// CONCATENATED MODULE: ./src/Utils/Event.ts
var Event = /** @class */ (function () {
    function Event() {
        this.events = {};
        this.dispatch = this.fire;
    }
    /**
     * 箭头
     */
    Event.prototype.on = function (event, func, index) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        index = index || this.events[event].length;
        this.events[event].push({ index: index, func: func });
        // 按照index顺序执行
        this.events[event].sort(function (a, b) { return a.index > b.index; });
    };
    Event.prototype.fire = function (event, data) {
        var events = this.events[event] || [];
        try {
            events.forEach(function (item) {
                item.func(data);
            });
        }
        catch (e) {
            console.warn(e);
        }
    };
    /**
     * 关闭绑定的事件
     */
    Event.prototype.off = function (event, offFunc) {
        if (!offFunc) {
            this.events[event] = [];
        }
        else {
            this.events[event] = this.events[event].filter(function (func) { return offFunc !== func.func; });
        }
    };
    /**
     * 清空
     */
    Event.prototype.clear = function () {
        delete this.events;
    };
    return Event;
}());
/* harmony default export */ const Utils_Event = (Event);

;// CONCATENATED MODULE: ./src/Utils/path.ts
var Path = /** @class */ (function () {
    function Path(d) {
        this.d = d;
    }
    Path.prototype.getTotalLength = function () {
        return this.getLength(this.d);
    };
    Path.prototype.getPointAtLength = function (length) {
        return this.getLength(this.d, length);
    };
    Path.prototype.getLength = function (d, length) {
        var path = this.path2curve(d);
        var x, y, p, l, sp = "", point, len = 0;
        for (var i = 0, ii = path.length; i < ii; i++) {
            p = path[i];
            if (p[0] == "M") {
                x = +p[1];
                y = +p[2];
            }
            else {
                l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                if (typeof length !== "undefined" && len + l > length) {
                    point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                    return point;
                }
                len += l;
                x = +p[5];
                y = +p[6];
            }
            sp += p.shift() + p;
        }
        point =
            typeof length == "undefined"
                ? len
                : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
        return point;
    };
    Path.prototype.path2curve = function (path) {
        var p = this.pathToAbsolute(path), attrs = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null,
        }, processPath = function (path, d, pcom) {
            var nx, ny;
            if (!path) {
                return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
            }
            !(path[0] in { T: 1, Q: 1 }) && (d.qx = d.qy = null);
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
                    }
                    else {
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
                    }
                    else {
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
        }, fixArc = function (pp, i) {
            if (pp[i].length > 7) {
                pp[i].shift();
                var pi = pp[i];
                while (pi.length) {
                    pcoms1[i] = "A"; // if created multiple C:s, their original seg is saved
                    pp.splice(i++, 0, ["C"].concat(pi.splice(0, 6)));
                }
                pp.splice(i, 1);
                ii = Math.max(p.length);
            }
        }, pcoms1 = [], // path commands of original path p
        pcoms2 = [], // path commands of original path p2
        pfirst = "", // temporary holder for original path command
        pcom = ""; // holder for previous path command of original path
        for (var i = 0, ii = p.length; i < ii; i++) {
            p[i] && (pfirst = p[i][0]); // save current path command
            if (pfirst != "C") {
                // C is not saved yet, because it may be result of conversion
                pcoms1[i] = pfirst; // Save current path command
                i && (pcom = pcoms1[i - 1]); // Get previous path command pcom
            }
            p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath
            if (pcoms1[i] != "A" && pfirst == "C")
                pcoms1[i] = "C"; // A is the only command
            // which may produce multiple C:s
            // so we have to make sure that C is also C in original path
            fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1
            var seg = p[i], seglen = seg.length;
            attrs.x = seg[seglen - 2];
            attrs.y = seg[seglen - 1];
            attrs.bx = parseFloat(seg[seglen - 4]) || attrs.x;
            attrs.by = parseFloat(seg[seglen - 3]) || attrs.y;
        }
        return p;
    };
    Path.prototype.pathToAbsolute = function (pathString) {
        var pathArray = this.parsePathString(pathString);
        if (!pathArray || !pathArray.length) {
            return [["M", 0, 0]];
        }
        var res = [], x = 0, y = 0, mx = 0, my = 0, start = 0, pa0;
        if (pathArray[0][0] == "M") {
            x = +pathArray[0][1];
            y = +pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res[0] = ["M", x, y];
        }
        for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
            res.push((r = []));
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
                    case "M":
                        mx = +pa[1] + x;
                        my = +pa[2] + y;
                    default:
                        for (var j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +pa[j] + (j % 2 ? x : y);
                        }
                }
            }
            else {
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
        return res;
    };
    Path.prototype.parsePathString = function (d) {
        if (!d) {
            return null;
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
            z: 0,
        }, data = [];
        if (!data.length) {
            d.replace(Path.pathCommand, function (a, b, c) {
                var params = [], name = b.toLowerCase();
                c.replace(Path.pathValues, function (a, b) {
                    b && params.push(+b);
                    return a;
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
                }
                else
                    while (params.length >= paramCounts[name]) {
                        data.push([b].concat(params.splice(0, paramCounts[name])));
                        if (!paramCounts[name]) {
                            break;
                        }
                    }
                return a;
            });
        }
        return data;
    };
    Path.pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi;
    Path.tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi;
    Path.pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi;
    return Path;
}());
/* harmony default export */ const Utils_path = (Path);
var PI = Math.PI;
function l2c(x1, y1, x2, y2) {
    return [x1, y1, x2, y2, x2, y2];
}
function q2c(x1, y1, ax, ay, x2, y2) {
    var _13 = 1 / 3, _23 = 2 / 3;
    return [
        _13 * x1 + _23 * ax,
        _13 * y1 + _23 * ay,
        _13 * x2 + _23 * ax,
        _13 * y2 + _23 * ay,
        x2,
        y2,
    ];
}
function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
    // for more information of where this math came from visit:
    // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
    var _120 = (PI * 120) / 180, rad = (PI / 180) * (+angle || 0), res = [], xy, rotate = function (x, y, rad) {
        var X = x * Math.cos(rad) - y * Math.sin(rad), Y = x * Math.sin(rad) + y * Math.cos(rad);
        return { x: X, y: Y };
    };
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
        var x = (x1 - x2) / 2, y = (y1 - y2) / 2;
        var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
        if (h > 1) {
            h = Math.sqrt(h);
            rx = h * rx;
            ry = h * ry;
        }
        var rx2 = rx * rx, ry2 = ry * ry, k = (large_arc_flag == sweep_flag ? -1 : 1) *
            Math.sqrt(Math.abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) /
                (rx2 * y * y + ry2 * x * x))), cx = (k * rx * y) / ry + (x1 + x2) / 2, cy = (k * -ry * x) / rx + (y1 + y2) / 2, f1 = Math.asin(+((y1 - cy) / ry).toFixed(9)), f2 = Math.asin(+((y2 - cy) / ry).toFixed(9));
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
    }
    else {
        f1 = recursive[0];
        f2 = recursive[1];
        cx = recursive[2];
        cy = recursive[3];
    }
    var df = f2 - f1;
    if (Math.abs(df) > _120) {
        var f2old = f2, x2old = x2, y2old = y2;
        f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
        x2 = cx + rx * Math.cos(f2);
        y2 = cy + ry * Math.sin(f2);
        res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [
            f2,
            f2old,
            cx,
            cy,
        ]);
    }
    df = f2 - f1;
    var c1 = Math.cos(f1), s1 = Math.sin(f1), c2 = Math.cos(f2), s2 = Math.sin(f2), t = Math.tan(df / 4), hx = (4 / 3) * rx * t, hy = (4 / 3) * ry * t, m1 = [x1, y1], m2 = [x1 + hx * s1, y1 - hy * c1], m3 = [x2 + hx * s2, y2 - hy * c2], m4 = [x2, y2];
    m2[0] = 2 * m1[0] - m2[0];
    m2[1] = 2 * m1[1] - m2[1];
    if (recursive) {
        return [m2, m3, m4].concat(res);
    }
    else {
        res = [m2, m3, m4].concat(res).join().split(",");
        var newres = [];
        for (var i = 0, ii = res.length; i < ii; i++) {
            newres[i] =
                i % 2
                    ? rotate(res[i - 1], res[i], rad).y
                    : rotate(res[i], res[i + 1], rad).x;
        }
        return newres;
    }
}
function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
    var t1 = 1 - t, t13 = Math.pow(t1, 3), t12 = Math.pow(t1, 2), t2 = t * t, t3 = t2 * t, x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x, y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y, mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x), my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y), nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x), ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y), ax = t1 * p1x + t * c1x, ay = t1 * p1y + t * c1y, cx = t1 * c2x + t * p2x, cy = t1 * c2y + t * p2y, alpha = 90 - (Math.atan2(mx - nx, my - ny) * 180) / PI;
    // (mx > nx || my < ny) && (alpha += 180);
    return {
        x: x,
        y: y,
        m: { x: mx, y: my },
        n: { x: nx, y: ny },
        start: { x: ax, y: ay },
        end: { x: cx, y: cy },
        alpha: alpha,
    };
}
function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
    if (length === undefined) {
        return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
    }
    else {
        return findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
    }
}
function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
    if (z === void 0) { z = 1; }
    z = z > 1 ? 1 : z < 0 ? 0 : z;
    var z2 = z / 2, n = 12, Tvalues = [
        -0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699,
        -0.9041, 0.9041, -0.9816, 0.9816,
    ], Cvalues = [
        0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601,
        0.1069, 0.1069, 0.0472, 0.0472,
    ], sum = 0;
    for (var i = 0; i < n; i++) {
        var ct = z2 * Tvalues[i] + z2, xbase = base3(ct, x1, x2, x3, x4), ybase = base3(ct, y1, y2, y3, y4), comb = xbase * xbase + ybase * ybase;
        sum += Cvalues[i] * Math.sqrt(comb);
    }
    return z2 * sum;
}
function base3(t, p1, p2, p3, p4) {
    var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4, t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
    return t * t2 - 3 * p1 + 3 * p2;
}
function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
    if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
        return;
    }
    var t = 1, step = t / 2, t2 = t - step, l, e = 0.01;
    l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
    while (Math.abs(l - ll) > e) {
        step /= 2;
        t2 += (l < ll ? 1 : -1) * step;
        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
    }
    return t2;
}
function O(val) {
    return +(+val).toFixed(3);
}

;// CONCATENATED MODULE: ./src/Utils/index.ts










;// CONCATENATED MODULE: ./src/Shape/Lines/Line.ts






var DefaultLine = {
    arcRatio: 4,
    adsorb: [20, 20],
    render: function (line) {
        var from = line.from, to = line.to, data = line.data;
        var pathString = this.makePath(from, to, line);
        var shape = line.shape ? line.shape : SVGHelper.group();
        line.shape = shape;
        var path = line.path ? line.path : (line.path = SVGHelper.path());
        var shadowPath = line.shadowPath
            ? line.shadowPath
            : (line.shadowPath = SVGHelper.path());
        setAttrs(path, __assign({ d: pathString, class: "ve-line-path", "stroke-dasharray": "10", fill: "transparent", "stroke-width": 2, stroke: "rgba(178,190,205,0.7)" }, (data.style || {})));
        setAttrs(shadowPath, {
            d: pathString,
            stroke: "transparent",
            fill: "none",
        });
        line.pathData = new Utils_path(pathString);
        shadowPath.setAttribute("class", "ve-shdow-path");
        animate(10, 0, function (val) {
            return setAttrs(path, {
                "stroke-dasharray": "".concat(val),
            });
        }, 300);
        shape.appendChild(shadowPath);
        shape.appendChild(path);
        this.renderLabel && this.renderLabel(line);
        return shape;
    },
    makePath: function (from, to, line) {
        var edgeX = from.x;
        var edgeY = from.y;
        var endX = to.x;
        var endY = to.y;
        var toX = to.x;
        var toY = to.y;
        var arrowStartSpace = 0; // 顶部距离node节点的距离
        var arrEndSpace = 8; // 底部距离node节点的距离
        // 根据连接点位置生成控制点
        // 上右下左的控制点分别为 (x,上偏移) (右偏移,y)  (x,下偏移) (左偏移,y)
        var startControlPoint = { x: edgeX, y: edgeY };
        var endControlPoint = { x: endX, y: endY };
        var startAngel = this.getPointDirect(from);
        var endAngel = this.getPointDirect(to);
        var offsetLength = Math.sqrt(Math.pow(edgeX - endX, 2) + Math.pow(edgeY - endY, 2)) /
            this.arcRatio; // 连接点的距离的一半作为控制点的长度
        startControlPoint.x +=
            (1 / startAngel < 0 ? -1 : 1) * Math.cos(startAngel) * offsetLength;
        startControlPoint.y += -Math.sin(startAngel) * offsetLength; // svg坐标系倒置需要给y坐标加负号
        endControlPoint.x +=
            (1 / endAngel < 0 ? -1 : 1) * Math.cos(endAngel) * offsetLength;
        endControlPoint.y += -Math.sin(endAngel) * offsetLength; // svg坐标系倒置需要给y坐标加负号
        if (from.data.y === 1) {
            edgeY += arrowStartSpace;
        }
        else if (from.data.y === 0) {
            edgeY -= arrowStartSpace;
        }
        else if (from.data.x === 0) {
            edgeX -= arrowStartSpace;
        }
        else if (from.data.x === 1) {
            edgeX += arrowStartSpace;
        }
        if (to.data.y === 1) {
            endY += arrEndSpace;
        }
        else if (to.data.y === 0) {
            endY -= arrEndSpace;
        }
        else if (to.data.x === 0) {
            endX -= arrEndSpace;
        }
        else if (to.data.x === 1) {
            endX += arrEndSpace;
        }
        var pathString = "M".concat(from.x, " ").concat(from.y, " T ").concat(edgeX, " ").concat(edgeY);
        var toPointString = "".concat(endX, " ").concat(endY, " T ").concat(toX, " ").concat(toY, " ");
        var path = "".concat(pathString, "C").concat(startControlPoint.x, " ").concat(startControlPoint.y, " ").concat(endControlPoint.x, " ").concat(endControlPoint.y, " ").concat(toPointString);
        line.bezierData = {
            from: {
                x: edgeX,
                y: edgeY,
            },
            to: {
                x: endX,
                y: endY,
            },
            startControlPoint: startControlPoint,
            endControlPoint: endControlPoint,
        };
        line.data.fromX = from.x;
        line.data.fromY = from.y;
        line.data.toX = to.x;
        line.data.toY = to.y;
        return path;
    },
    //没用了
    getPointDirect: function (pointNode) {
        var point2center = [pointNode.data.x, pointNode.data.y];
        var angel = 0;
        if (point2center[1] === 0) {
            angel = Math.PI / 2;
        }
        else if (point2center[1] === 1) {
            angel = -Math.PI / 2;
        }
        else if (point2center[0] === 0) {
            angel = Math.PI;
        }
        else if (point2center[0] === 1) {
            angel = -Math.PI;
        }
        else {
            // arctan求角度
            angel =
                Math.atan((point2center[1] - 0.5) / (point2center[0] - 0.5)) +
                    (point2center[0] - 0.5 < 0 ? Math.PI : 0);
        }
        return angel || 0;
    },
    renderArrow: function (line) {
        var to = line.to;
        var angle = 0;
        if (to.data.y <= 0) {
            angle = 180;
        }
        else if (to.data.x >= 1) {
            angle = 270;
        }
        else if (to.data.x <= 0) {
            angle = 90;
        }
        var pathString = "M".concat(-5, " ").concat(10, "L").concat(0, " ").concat(0, "L").concat(5, " ").concat(10, "Z");
        var path = line.arrow ? line.arrow : SVGHelper.path();
        // 进行角度的中心变换
        var matrix = create();
        translate(matrix, matrix, [to.x, to.y]);
        rotate(matrix, matrix, (angle * Math.PI) / 180);
        setAttrs(path, __assign({ class: "ve-line-arrow", d: pathString, fill: "rgba(178,190,205,0.7)", transform: "matrix(".concat(matrix.join(","), ")") }, line.data.arrowStyle));
        return path;
    },
    /** 是否渲染文字
     */
    renderLabel: function (line) {
        var from = line.from, to = line.to, _a = line.bezierData, startControlPoint = _a.startControlPoint, endControlPoint = _a.endControlPoint, _b = line.data, label = _b.label, _c = _b.labelCfg, labelCfg = _c === void 0 ? {} : _c;
        if (!label) {
            if (line.label) {
                line.label.labelGroup.remove();
                line.label = null;
            }
            return null;
        }
        var totalLabel = label;
        // label 样式
        var _d = labelCfg || {}, _e = _d.refX, refX = _e === void 0 ? 0 : _e, _f = _d.refY, refY = _f === void 0 ? 0 : _f, autoRotate = _d.autoRotate, _g = _d.showNum, showNum = _g === void 0 ? 20 : _g, _h = _d.style, style = _h === void 0 ? {
            fill: "#333",
            stroke: "#fff",
            fontSize: "12px",
        } : _h;
        var bezier = new Utils_BezierLine();
        bezier.setControl(from, startControlPoint, endControlPoint, to);
        var point = bezier.getPoint(0.5);
        var _j = point || {}, xPoint = _j.x, yPoint = _j.y;
        if (label && label.length > showNum && showNum) {
            label = label.slice(0, showNum) + "...";
        }
        if (!line.label) {
            line.label = {
                textRect: SVGHelper.rect(0, 0, 10, 10),
                text: SVGHelper.text(0, 0, label),
                labelGroup: null,
            };
            line.label.labelGroup = SVGHelper.group(line.label.textRect, line.label.text);
            line.shape.appendChild(line.label.labelGroup);
        }
        var _k = line.label, text = _k.text, textRect = _k.textRect, textBBox = _k.textBBox, oldText = _k.oldText, labelGroup = _k.labelGroup;
        var x = xPoint + (refX || 0);
        var y = yPoint + (refY || 0);
        setAttrs(text, {
            text: label || "",
            fill: style.fill,
            fontSize: style.fontSize,
            textAnchor: "middle",
            dominantBaseline: "middle",
            x: x,
            y: y,
        });
        if (!textBBox || oldText !== label) {
            line.oldText = label;
            line.label.textBBox = text.getBBox();
        }
        // 性能优化
        var _l = line.label.textBBox, width = _l.width, height = _l.height;
        setAttrs(line.label.textRect, {
            fill: style.stroke,
            width: width,
            height: height,
            stroke: "transparent",
            x: x - width * 0.5,
            y: y - height * 0.5,
        });
        setAttrs(labelGroup, {
            class: "ve-line-label",
            "data-label": encodeURI(totalLabel),
        });
        if (autoRotate) {
            // 文字顺序方向
            var angle = SVGHelper.getAngle(from, to);
            if (from.x < to.x || from.x === to.x) {
                angle += 180;
            }
            setAttrs(labelGroup, {
                transform: "rotate(".concat(angle, ",").concat(xPoint + (refX || 0), ",").concat(yPoint + (refY || 0), ")"),
            });
        }
        return labelGroup;
    },
    checkNewLine: function (data) {
        var from = data.from, to = data.to;
        if (from === to) {
            return false;
        }
        return true;
    },
};
/* harmony default export */ const Lines_Line = (DefaultLine);

;// CONCATENATED MODULE: ./src/Shape/Lines/PolyLine.ts


var PolyLine = __assign(__assign({}, Lines_Line), { gapDistance: 30, rankDir: "tb", makePath: function (from, to, line) {
        // 折线
        var fromBBox = from.dom.getBBox();
        var toBBox = to.dom.getBBox();
        var fromCenter = {
            x: fromBBox.x + fromBBox.width / 2,
            y: fromBBox.y + fromBBox.height / 2,
        };
        var toCenter = {
            x: toBBox.x + toBBox.width / 2,
            y: toBBox.y + toBBox.height / 2,
        };
        // 找到点的方向
        var fromDirection = this.getDirection({ x: from.x, y: from.y }, fromBBox, fromCenter);
        var endDiretion = this.getDirection({ x: to.x, y: to.y }, toBBox, toCenter);
        // 对应方向的坐标要加间隔值
        var startPos = { x: from.x, y: from.y };
        var endPos = { x: to.x, y: to.y };
        this.makeGap(fromDirection, startPos);
        this.makeGap(endDiretion, endPos);
        var paths = [startPos];
        var centerY, centerX;
        var directions = ["bottom", "top", "left", "right"];
        var fromIndex = directions.indexOf(fromDirection) > 1;
        var endIndex = directions.indexOf(endDiretion) > 1;
        if (fromIndex === endIndex) {
            centerY = (startPos.y + endPos.y) / 2;
            paths.push({
                x: startPos.x,
                y: centerY,
            }, {
                x: endPos.x,
                y: centerY,
            });
        }
        else {
            centerX = (startPos.x + endPos.x) / 2;
            paths.push({
                x: centerX,
                y: startPos.y,
            }, {
                x: centerX,
                y: endPos.y,
            });
        }
        paths.push(endPos);
        var path = "M".concat(from.x, " ").concat(from.y, " ");
        paths.map(function (item) {
            path += "L".concat(item.x, " ").concat(item.y, " ");
        });
        path += "L".concat(to.x, " ").concat(to.y);
        return path;
    }, makeGap: function (direction, pos) {
        if (direction === "left") {
            pos.x -= this.gapDistance;
        }
        else if (direction === "right") {
            pos.x += this.gapDistance;
        }
        if (direction === "top") {
            pos.y -= this.gapDistance;
        }
        else if (direction === "bottom") {
            pos.y += this.gapDistance;
        }
        return pos;
    }, getDirection: function (_a, bbox, center) {
        var x = _a.x, y = _a.y;
        var leftTop = { x: bbox.x, y: bbox.y };
        var leftBottom = { x: bbox.x, y: bbox.y + bbox.height };
        // 左上到右下的直线表达式
        var leftTopC = function (x, y) {
            var k = (leftTop.y - center.y) / (leftTop.x - center.x);
            var c = center.y - center.x * k;
            if (x || x === 0) {
                return k * x + c;
            }
            else {
                if (k === 0) {
                    return x;
                }
                return (y - c) / k;
            }
        };
        // 左下到右上的直线表达式
        var leftBottomC = function (x, y) {
            var k = (leftBottom.y - center.y) / (leftBottom.x - center.x);
            var c = center.y - center.x * k;
            if (x) {
                return k * x + c;
            }
            else {
                if (k === 0) {
                    return x;
                }
                return (y - c) / k;
            }
        };
        var ltY = leftTopC(x);
        var lbY = leftBottomC(x);
        if (y < ltY && y > lbY) {
            return "left";
        }
        else if (y > ltY && y > lbY) {
            return "bottom";
        }
        else if (y < lbY && y > ltY) {
            return "right";
        }
        else {
            return "top";
        }
    } });
/* harmony default export */ const Lines_PolyLine = (PolyLine);

;// CONCATENATED MODULE: ./src/Shape/Line.ts






/**
 * @class
 */
var Line = /** @class */ (function () {
    function Line(graph) {
        var _this = this;
        this.tempLineRender = {
            render: function () {
                var path = SVGHelper.path();
                _this.paper.appendChild(path);
                setAttrs(path, {
                    stroke: "#abc",
                    "stroke-dasharray": "10 10",
                });
                return path;
            },
            renderPath: function (_a, line) {
                var _b = _a.fromX, fromX = _b === void 0 ? 0 : _b, _c = _a.fromY, fromY = _c === void 0 ? 0 : _c, _d = _a.x, x = _d === void 0 ? 0 : _d, _e = _a.y, y = _e === void 0 ? 0 : _e;
                setAttrs(line.dom, {
                    d: "M".concat(fromX, " ").concat(fromY, "L").concat(x, " ").concat(y),
                });
            },
        };
        /**
         * 更新线为
         */
        this.updateActiveLine = function (instanceLine) {
            var _a;
            var hoverLinkPoint = _this.hoverLinkPoint;
            var nodes = _this.graph.node.nodes;
            var data = instanceLine.data;
            var beforeData = __assign({}, data);
            var _b = data.type, type = _b === void 0 ? "default" : _b, uuid = data.uuid;
            if (hoverLinkPoint) {
                var to = hoverLinkPoint.nodeId;
                var toNode = nodes[data.to];
                var toPoint = hoverLinkPoint.index;
                if (_this.shapes[type].checkNewLine(__assign(__assign({}, data), { to: to, toPoint: toPoint }), _this.graph.editor) &&
                    !(data.to == to && toPoint == data.toPoint)) {
                    toNode.fromLines.delete(uuid);
                    Object.assign(data, { to: to, toPoint: toPoint });
                    // 删除节点入口关联的线，给新链接的节点加上入口线
                    nodes[to].fromLines.add(uuid);
                    /**
                     * @event Graph#line:change
                     */
                    _this.graph.fire("line:change", {
                        line: instanceLine,
                        type: "change",
                        before: beforeData,
                    });
                }
                else {
                    /**
                     * @event Graph#line:drop
                     */
                    _this.graph.fire("line:drop", { line: instanceLine });
                }
                (_a = hoverLinkPoint === null || hoverLinkPoint === void 0 ? void 0 : hoverLinkPoint.dom) === null || _a === void 0 ? void 0 : _a.classList.remove("hover");
            }
            _this.updateLine(uuid);
        };
        /**
         * 检查是否生成新线
         */
        this.checkNewLine = function () {
            var hoverLinkPoint = _this.hoverLinkPoint;
            if (hoverLinkPoint) {
                var toNodeId = hoverLinkPoint.nodeId;
                var toPoint = hoverLinkPoint.index;
                var data = Object.assign(_this.tempLine.data, {
                    uuid: (0,external_uuid_.v1)(),
                    to: toNodeId,
                    toPoint: toPoint,
                });
                if (_this.lines[data.uuid])
                    return;
                _this.graph.fire("line:beforeAdd", { line: data });
                if (_this.shapes[data.type || "default"].checkNewLine(data, _this.graph.editor)) {
                    _this.addLine(data);
                }
                hoverLinkPoint === null || hoverLinkPoint === void 0 ? void 0 : hoverLinkPoint.dom.classList.remove("hover");
                _this.hoverLinkPoint = undefined;
            }
        };
        // 计算磁吸
        this.calcLinkPoint = function (x, y, adsorb) {
            var _a;
            if (adsorb === void 0) { adsorb = [20, 20]; }
            var newXY = _this.allLinkPoints.find(function (item) {
                var _a, _b;
                if (Math.abs(x - item.x) < adsorb[0] &&
                    Math.abs(y - item.y) < adsorb[1]) {
                    (_a = _this.hoverLinkPoint) === null || _a === void 0 ? void 0 : _a.dom.classList.remove("hover");
                    _this.hoverLinkPoint = item;
                    (_b = item.dom) === null || _b === void 0 ? void 0 : _b.classList.add("hover");
                    return item;
                }
            });
            if (!newXY) {
                (_a = _this.hoverLinkPoint) === null || _a === void 0 ? void 0 : _a.dom.classList.remove("hover");
            }
            return newXY;
        };
        // 生成磁吸
        this.makeAdsorbPoints = function () {
            var nodes = _this.graph.node.nodes;
            _this.allLinkPoints = [];
            for (var key in nodes) {
                var node = nodes[key];
                var linkPoints = node.linkPoints;
                linkPoints.forEach(function (item) {
                    _this.allLinkPoints.push(item);
                });
            }
        };
        /**
         * 节点的新增线逻辑
         */
        this.addLinkPointEvent = function (point) {
            if (_this.graph.mode === "view")
                return;
            var nodes = _this.graph.node.nodes;
            var node = nodes[point.nodeId];
            var startX;
            var startY;
            SVGHelper.drag(point.dom, function (e) {
                var _a = _this.tempLine.data, fromX = _a.fromX, fromY = _a.fromY;
                var controller = _this.graph.editor.controller;
                var scale = controller.scale;
                var dx = e.clientX - startX;
                var dy = e.clientY - startY;
                var x = (fromX || 0) + dx / scale + 1;
                var y = (fromY || 0) + dy / scale - 1;
                // 计算磁吸坐标
                var adsorb = _this.graph.node.shapes[node.data.type].adsorb;
                var newXY = _this.calcLinkPoint(x, y, adsorb);
                if (newXY) {
                    x = newXY.x;
                    y = newXY.y;
                }
                _this.tempLineRender.renderPath({
                    fromX: fromX,
                    fromY: fromY,
                    x: x,
                    y: y,
                }, _this.tempLine);
                e.stopPropagation();
            }, function (e) {
                startX = e.clientX;
                startY = e.clientY;
                _this.makeAdsorbPoints();
                _this.tempLine = {
                    dom: _this.tempLineRender.render(),
                    data: {
                        from: node.data.uuid,
                        to: undefined,
                        fromPoint: point.index,
                        fromX: point.x,
                        fromY: point.y,
                    },
                };
                _this.graph.fire("line:drag");
                e.stopPropagation();
            }, function (e) {
                var hoverLinkPoint = _this.hoverLinkPoint;
                var toNode = null;
                if (hoverLinkPoint) {
                    toNode = hoverLinkPoint;
                }
                _this.checkNewLine();
                _this.tempLine.dom.remove();
                /**
                 * @event Graph#line:drop
                 */
                _this.graph.fire("line:drop", {
                    fromNode: node,
                    toNode: toNode,
                    event: e,
                });
                e.stopPropagation();
            });
        };
        this.graph = graph;
        this.node = graph.node;
        this.paper = graph.editor.paper;
        this.lines = {};
        this.lineG = createSVGElement("g", this.paper);
        this.paper.prepend(this.lineG);
        this.lineG.classList.add("ve-lines");
        this.allLinkPoints = [];
        this.shapes = {
            default: Lines_Line,
            polyline: Lines_PolyLine,
        };
        this.listenEvent();
    }
    // 监听事件
    Line.prototype.listenEvent = function () {
        var _this = this;
        this.graph.on("paper:click", function () {
            _this.unActiveLine();
        });
        this.graph.on("node:click", function () {
            _this.unActiveLine();
        });
    };
    /**
     * 添加线
     */
    Line.prototype.addLine = function (data) {
        /**
         * @event Graph#line:beforeadd
         */
        this.graph.fire("line:beforeadd", { data: data, type: "add" });
        var line = this.renderLine(data);
        /**
         * @event Graph#line:add
         */
        this.graph.fire("line:add", { line: line, type: "add" });
    };
    /**
     * 跟下该node的线
     */
    Line.prototype.updateByNode = function (node) {
        var _this = this;
        node.fromLines.forEach(function (lineId) {
            _this.updateLine(lineId, true);
        });
        node.toLines.forEach(function (lineId) {
            _this.updateLine(lineId, true);
        });
    };
    /**
     * 添加线
     */
    Line.prototype.renderLine = function (lineData) {
        var key = lineData.uuid || (0,external_uuid_.v1)();
        var nodes = this.node.nodes;
        var shape = this.shapes[lineData.type || "default"];
        var from = lineData.from, to = lineData.to, _a = lineData.fromPoint, fromPoint = _a === void 0 ? 0 : _a, _b = lineData.toPoint, toPoint = _b === void 0 ? 0 : _b;
        var fromNode = nodes[from];
        var toNode = nodes[to];
        var fromPointNode = fromNode.linkPoints[fromPoint];
        var toPointNode = toNode.linkPoints[toPoint];
        var instanceLine = {
            arrow: null,
            dom: null,
            shape: null,
            arrow2: undefined,
            pathData: undefined,
            data: Object.assign(lineData, {
                uuid: key,
            }),
            from: fromPointNode,
            to: toPointNode,
        };
        shape.graph = this.graph; // mount graph to shape
        var lineShape = shape.render(instanceLine);
        var arrow = shape.renderArrow(instanceLine);
        var g = SVGHelper.group(lineShape, arrow);
        setAttrs(lineShape, {
            class: "ve-line-shape",
        });
        instanceLine.dom = g;
        instanceLine.shape = lineShape;
        instanceLine.arrow = arrow;
        lineData.arrow2 && shape.renderArrow2
            ? (instanceLine.arrow2 = shape.renderArrow2(instanceLine))
            : undefined;
        setAttrs(g, {
            class: "ve-line ".concat(lineData.className || ""),
        });
        this.addToNodes(instanceLine);
        this.addLineEvents(instanceLine);
        this.lines[key] = instanceLine;
        this.lineG.appendChild(g);
        return instanceLine;
    };
    /**
     * redraw all lines
     */
    Line.prototype.update = function () {
        var _this = this;
        Object.values(this.lines).forEach(function (line) {
            _this.updateLine(line.data.uuid);
        });
    };
    /**
     * 重绘某个线
     */
    Line.prototype.updateLine = function (data, rerenderShape) {
        if (rerenderShape === void 0) { rerenderShape = true; }
        var lineId;
        var lineData;
        if (typeof data !== "string") {
            lineId = data.uuid;
            lineData = data;
        }
        else {
            lineId = data;
            lineData = this.lines[lineId].data;
        }
        var nodes = this.graph.node.nodes;
        var line = this.lines[lineId];
        var _a = line.data, type = _a.type, _b = _a.className, className = _b === void 0 ? "" : _b, from = _a.from, to = _a.to, _c = _a.fromPoint, fromPoint = _c === void 0 ? 0 : _c, _d = _a.toPoint, toPoint = _d === void 0 ? 0 : _d;
        line.from = nodes[from].linkPoints[fromPoint];
        line.to = nodes[to].linkPoints[toPoint];
        if (rerenderShape) {
            this.shapes[type || "default"].render(line);
            line.arrow = this.shapes[type || "default"].renderArrow(line);
            line.dom.setAttribute("class", "ve-line ".concat(className || ""));
            Object.assign(line.data, lineData ? lineData : {});
        }
        else {
            Object.assign(line.data, lineData ? lineData : {});
        }
        if (this.activeLine === line) {
            this.setActiveLine(line);
        }
    };
    /**
     * 删除线
     */
    Line.prototype.deleteLine = function (data, notEvent, byNode) {
        if (notEvent === void 0) { notEvent = false; }
        if (byNode === void 0) { byNode = false; }
        var line;
        if (typeof data === "string") {
            line = this.lines[data];
        }
        else {
            line = this.lines[data.uuid];
        }
        var uuid = line.data.uuid;
        var nodes = this.node.nodes;
        if (!line)
            return; //这里有可能被删除node时的关联删除线了
        delete this.lines[uuid];
        // 删除关联线
        var _a = line.data, from = _a.from, to = _a.to;
        nodes[from] && nodes[from].toLines.delete(uuid);
        nodes[to] && nodes[to].fromLines.delete(uuid);
        !notEvent &&
            // 是否由删除节点触发的线删除操作
            /**
             * @event Graph#line:remove
             */
            this.graph.fire("line:remove", {
                line: line,
                uuid: uuid,
                before: line.data,
                byNode: byNode,
                type: "remove",
            });
        line.arrow.remove();
        line.arrow = null;
        line.dom.remove();
        this.activeLine = null;
    };
    /**
     * 注册线
     */
    Line.prototype.registeLine = function (type, data) {
        this.shapes[type] = Object.assign({}, this.shapes["default"], data);
    };
    /**
     * 渲染
     */
    Line.prototype.render = function (lines) {
        var _this = this;
        if (lines === void 0) { lines = {}; }
        Object.keys(lines).map(function (key) {
            var item = lines[key];
            _this.renderLine(item);
        });
    };
    Line.prototype.addToNodes = function (instanceLine) {
        var nodes = this.graph.node.nodes;
        var _a = instanceLine.data, from = _a.from, to = _a.to;
        var id = instanceLine.data.uuid;
        nodes[from].toLines.add(id);
        nodes[to].fromLines.add(id);
    };
    /**
     *
     */
    Line.prototype.setActiveLine = function (line) {
        this.unActiveLine();
        this.activeLine = line;
        this.activeLine.dom.classList.add("active");
    };
    /**
     * 取消激活
     */
    Line.prototype.unActiveLine = function () {
        if (this.activeLine) {
            this.activeLine.dom.classList.remove("active");
        }
        this.activeLine = null;
    };
    /**
     * 绑定线拖动事件
     */
    Line.prototype.addLineEvents = function (g) {
        var _this = this;
        g.shape.addEventListener("mouseenter", function (event) {
            /**
             * @event Graph#line:mouseenter
             */
            _this.graph.fire("line:mouseenter", { line: g, event: event });
        });
        g.shape.addEventListener("mouseleave", function (event) {
            /**
             * @event Graph#line:mouseleave
             */
            _this.graph.fire("line:mouseleave", { line: g, event: event });
        });
        g.shape.addEventListener("click", function (e) {
            _this.setActiveLine(g);
            /**
             * @event Graph#line:click
             */
            _this.graph.fire("line:click", { line: g, event: e });
        });
        if (this.graph.mode === "view")
            return;
        var startX;
        var startY;
        // 箭头拖拽
        SVGHelper.drag(g.arrow, function (e) {
            var _a = _this.tempLine.data, fromX = _a.fromX, fromY = _a.fromY, toX = _a.toX, _b = _a.toY, toY = _b === void 0 ? 0 : _b;
            var dx = e.clientX - startX;
            var dy = e.clientY - startY;
            var controller = _this.graph.editor.controller;
            var scale = controller.scale;
            var x = (toX || 0) + dx / scale + 1;
            var y = toY + dy / scale - 1;
            // 计算磁吸坐标
            var adsorb = _this.graph.line.shapes[g.data.type || "default"].adsorb;
            var newXY = _this.calcLinkPoint(x, y, adsorb);
            if (newXY) {
                x = newXY.x;
                y = newXY.y;
            }
            _this.tempLineRender.renderPath({
                fromX: fromX,
                fromY: fromY,
                x: x,
                y: y,
            }, _this.tempLine);
        }, function (e) {
            var data = g.data;
            var _a = data.fromX, fromX = _a === void 0 ? 0 : _a, _b = data.fromY, fromY = _b === void 0 ? 0 : _b, toX = data.toX, toY = data.toY, from = data.from, fromPoint = data.fromPoint;
            startX = e.clientX;
            startY = e.clientY;
            _this.makeAdsorbPoints();
            g.dom.style.display = "none";
            data.status = "active";
            /**
             * @event Graph#line:drag
             */
            _this.tempLine = {
                dom: _this.tempLineRender.render(),
                data: {
                    from: from,
                    fromPoint: fromPoint,
                    fromX: fromX,
                    fromY: fromY,
                    to: null,
                    toX: toX,
                    toY: toY,
                },
            };
            _this.graph.fire("line:drag");
        }, function () {
            g.dom.style.display = "block";
            _this.tempLine.dom.remove();
            _this.updateActiveLine(g);
        });
    };
    /**
     *
     */
    Line.prototype.clear = function () {
        var lines = this.lines;
        for (var key in lines) {
            this.deleteLine(lines[key].data, true);
        }
    };
    return Line;
}());
/* harmony default export */ const Shape_Line = (Line);

;// CONCATENATED MODULE: ./src/Shape/AnchorLine.ts

/**
 * @class
 */
var AchorLine = /** @class */ (function () {
    function AchorLine(graph) {
        this.graph = graph;
        this.anchorLines = {};
        this.paper = graph.editor.paper;
        this.anchorDistance = graph.editor.config.anchorDistance || 5;
        this.anchorXLength = graph.editor.config.anchorXLength || 10;
        this.anchorYLength = graph.editor.config.anchorYLength || 10;
        this.hideAchorLine = graph.editor.config.hideAchorLine;
        this.hideAchor = graph.editor.config.hideAchor;
        this.anchors = [];
        this.path = SVGHelper.path();
        this.path.classList.add("anchor-line");
    }
    /**
     * 生成所有的吸附线位置
     */
    AchorLine.prototype.makeAllAnchors = function (origin) {
        if (this.hideAchorLine)
            return;
        this.node = origin;
        var anchors = [];
        var nodes = this.graph.node.nodes;
        for (var key in nodes) {
            var node = nodes[key];
            var bbox = node.shape.getBBox(); // 缓存bbox
            node.shapeBBox = bbox;
            var x = bbox.x, y = bbox.y, width = bbox.width, height = bbox.height;
            anchors.push({
                x: x,
                y: y,
            }, {
                x: x + width,
                y: y,
            }, {
                x: x + width,
                y: y + height,
            }, {
                x: x,
                y: y + height,
            }, {
                x: x + width / 2,
                y: y + height / 2,
            });
        }
        this.anchors = anchors;
    };
    AchorLine.prototype.checkAchor = function (x, y) {
        var _a = this, anchorXLength = _a.anchorXLength, anchorYLength = _a.anchorYLength;
        var x5 = x % anchorXLength;
        var y5 = y % anchorYLength;
        if (x5 < anchorXLength / 2) {
            x = Math.floor(x / anchorXLength) * anchorXLength;
        }
        else {
            x = Math.ceil(x / anchorXLength) * anchorXLength;
        }
        if (y5 < anchorYLength / 2) {
            y = Math.floor(y / anchorYLength) * anchorYLength;
        }
        else {
            y = Math.ceil(y / anchorYLength) * anchorYLength;
        }
        return { x: x, y: y };
    };
    /**
     * 画节点
     */
    AchorLine.prototype.check = function (x, y) {
        var _this = this;
        if (!this.hideAchorLine) {
            var shapeBBox = this.node.shapeBBox;
            var width = shapeBBox.width, height = shapeBBox.height;
            var tl = { x: x, y: y };
            var tr = { x: x + width, y: y };
            var br = { x: x + width, y: y + height };
            var bl = { x: x, y: y + height };
            var cc = { x: x + width / 2, y: y + height / 2 };
            var nowPoints_1 = [tl, tr, br, bl, cc];
            var final_1 = { x: 0, y: 0 };
            var newXY_1 = { x: x, y: y };
            var coordFlag_1 = "";
            var anchor = this.anchors.find(function (anchor) {
                return nowPoints_1.find(function (point, index) {
                    var deltaY = anchor.y - point.y;
                    var deltaX = anchor.x - point.x;
                    if (Math.abs(deltaX) < _this.anchorDistance) {
                        final_1.x = anchor.x;
                        newXY_1.x += deltaX;
                        coordFlag_1 = "x";
                        return true;
                    }
                    if (Math.abs(deltaY) < _this.anchorDistance) {
                        final_1.y = anchor.y;
                        newXY_1.y += deltaY;
                        coordFlag_1 = "y";
                        return true;
                    }
                });
            });
            if (!anchor) {
                this.path.style.display = "none";
                if (!this.hideAchor)
                    return this.checkAchor(x, y);
                return { x: x, y: y };
            }
            // 中心点坐标补齐
            if (final_1.x === undefined) {
                final_1.x = cc.x;
            }
            else {
                final_1.y = cc.y;
            }
            var path = "M".concat(final_1.x, ",").concat(final_1.y, " L").concat(anchor.x, ",").concat(anchor.y);
            this.path.setAttribute("d", path);
            this.path.style.display = "block";
            if (!this.hideAchor) {
                var anchorXY = this.checkAchor(newXY_1.x, newXY_1.y);
                anchorXY[coordFlag_1] = newXY_1[coordFlag_1];
                return anchorXY;
            }
            return newXY_1;
        }
        if (!this.hideAchor)
            return this.checkAchor(x, y);
        return { x: x, y: y };
    };
    /**
     * 隐藏线
     */
    AchorLine.prototype.hidePath = function () {
        this.path.style.display = "none";
    };
    return AchorLine;
}());
/* harmony default export */ const AnchorLine = (AchorLine);

;// CONCATENATED MODULE: ./src/Shape/Graph.ts






var backSvg = __webpack_require__(27);
var Graph = /** @class */ (function (_super) {
    __extends(Graph, _super);
    function Graph(editor) {
        var _this = _super.call(this) || this;
        _this.onKeyDown = function (e) {
            // 查看模式不能删除节点、线条；如果存在部分可操作则自己在业务中监听处理相关逻辑
            if (_this.mode === "view") {
                return;
            }
            if (["TEXTAREA", "INPUT"].indexOf(document.activeElement.tagName) >
                -1 &&
                document.activeElement.getAttribute("contenteditable") !== "false") {
                return;
            }
            if (e.key === "Backspace") {
                var deleteKeys = [];
                for (var key in _this.node.actives) {
                    // 不触发事件
                    _this.node.deleteNode(_this.node.actives[key].data);
                    delete _this.node.actives[key];
                    deleteKeys.push(key);
                }
                _this.line.activeLine &&
                    _this.line.deleteLine(_this.line.activeLine.data);
                /**
                 * @event Graph#delete
                 * @type {Object}
                 */
                _this.fire("delete", { event: e, deleteKeys: deleteKeys });
            }
            if (e.keyCode === "C".charCodeAt(0) && (e.metaKey || e.ctrlKey)) {
                /**
                 * @event Graph#copy
                 * @type {Object}
                 */
                _this.fire("copy", { event: e });
                return;
            }
            if (e.keyCode === "V".charCodeAt(0) && (e.metaKey || e.ctrlKey)) {
                /**
                 * @event Graph#paste
                 * @type {Object}
                 */
                _this.fire("paste", { event: e });
                return;
            }
            if (e.keyCode === "Z".charCodeAt(0) &&
                (e.metaKey || e.ctrlKey) &&
                !e.shiftKey) {
                _this.editor.schema.undo();
            }
            if (e.keyCode === "Z".charCodeAt(0) &&
                (e.metaKey || e.ctrlKey) &&
                e.shiftKey) {
                _this.editor.schema.redo();
            }
            e.preventDefault();
            return false;
        };
        _this.editor = editor;
        _this.node = new Shape_Node(_this);
        _this.line = new Shape_Line(_this);
        _this.anchorLine = new AnchorLine(_this);
        // 模式：操作、查看模式
        _this.mode = editor.config.mode;
        _this.listenEvents();
        if (_this.editor.config.showBackGrid) {
            _this.addBack();
        }
        return _this;
    }
    Graph.prototype.addBack = function () {
        this.editor.container.querySelector(".ve-editor-back").style.backgroundImage = "url(".concat(backSvg, ")");
    };
    Graph.prototype.listenEvents = function () {
        var _this = this;
        this.on("node:move", function (_a) {
            var node = _a.node;
            _this.line.updateByNode(node);
        });
        setAttrs(this.editor.svg, {
            tabindex: "0",
        });
        this.editor.svg.addEventListener("click", function (e) {
            if (e.target.tagName === "svg") {
                _this.fire("paper:click", e);
            }
        });
        document.addEventListener("keydown", this.onKeyDown);
        this.on("line:drag", function () {
            _this.linkStatus = "lineing";
            _this.editor.paper.classList.add("ve-paper-lineing");
        });
        this.on("line:drop", function () {
            _this.linkStatus = "none";
            _this.editor.paper.classList.remove("ve-paper-lineing");
        });
    };
    Graph.prototype.render = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        /**
                         * @event Graph#beforeRender 渲染之前触发
                         */
                        this.fire("beforeRender");
                        this.data = data;
                        return [4 /*yield*/, this.node.render(data.nodesMap)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.line.render(data.linesMap)];
                    case 2:
                        _a.sent();
                        /**
                         * @event Graph#render  渲染后触发
                         */
                        this.fire("render");
                        return [2 /*return*/];
                }
            });
        });
    };
    Graph.prototype.update = function () {
        this.node.update();
        this.line.update();
        /**
        * @event Graph#update  渲染后触发
        */
        this.fire("update");
    };
    /**
     * 清空画布
     */
    Graph.prototype.clearGraph = function () {
        this.line.clear();
        this.node.clear();
    };
    Graph.prototype.destroy = function () {
        this.clearGraph();
        this.clear();
        document.removeEventListener("keydown", this.onKeyDown);
    };
    return Graph;
}(Utils_Event));
/* harmony default export */ const Shape_Graph = (Graph);

;// CONCATENATED MODULE: ./src/Utils/Controller.ts



/**
 * 控制器
 * @class
 * @extends Event
 */
var Controller = /** @class */ (function (_super) {
    __extends(Controller, _super);
    function Controller(editor) {
        var _this = _super.call(this) || this;
        _this.scaleRatio = 0.01;
        _this.scale = 1;
        _this.x = 0;
        _this.y = 0;
        _this.achors = [];
        _this.onWheel = function (e) {
            if (_this.status === "disabled") {
                return;
            }
            e.preventDefault();
            if (e.ctrlKey) {
                // 双指
                var newScale = Math.max(1 - e.deltaY * _this.scaleRatio, 0.1);
                _this.zoom(newScale, e.offsetX, e.offsetY);
            }
            else {
                _this.pan(-e.deltaX, -e.deltaY);
            }
        };
        _this.panStart = function (ev) {
            if (ev.target.tagName !== "svg" ||
                _this.status === "disabled") {
                return;
            }
            ev.preventDefault();
            _this.startPosition = { x: ev.clientX, y: ev.clientY };
            _this.svg.addEventListener("mousemove", _this.panning);
        };
        _this.panStop = function (ev) {
            ev.preventDefault();
            _this.svg.removeEventListener("mousemove", _this.panning);
            // this.svg.unmouseup(this.panStop);
            _this.editor.fire("panEnd", { event: ev });
        };
        /**
         * 缩放
         * @param  {number} scale 当前基础上 缩放多少
         * @param  {number} cx=0 zoom 缩放中心点x
         * @param  {number} cy=0 zoom 缩放中心点y
         */
        _this.zoom = function (newScale, cx, cy) {
            if (cx === void 0) { cx = 0; }
            if (cy === void 0) { cy = 0; }
            _this.scale *= newScale;
            var dis = [
                (cx - _this.x) * (newScale - 1),
                (cy - _this.y) * (newScale - 1),
            ];
            _this.x -= dis[0];
            _this.y -= dis[1];
            _this.update();
            _this.editor.fire("zoom", { scale: newScale });
        };
        /**
         * 滚动到指定位置
         * @param {number} newScale
         */
        _this.zoomTo = function (newScale) {
            _this.scale = newScale;
            _this.update();
        };
        /**
         * 做指定转换
         */
        _this.transform = function (newScale, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            _this.scale = newScale;
            _this.x = x;
            _this.y = y;
            _this.update();
            _this.editor.fire("panning");
            _this.editor.fire("zoom");
        };
        _this.panning = function (ev) {
            ev.preventDefault();
            var p1 = { x: ev.clientX, y: ev.clientY };
            var p2 = _this.startPosition;
            var deltaP = [p1.x - p2.x, p1.y - p2.y];
            _this.x += deltaP[0];
            _this.y += deltaP[1];
            _this.update();
            _this.startPosition = p1;
            _this.editor.fire("panning", { event: ev });
        };
        _this.editor = editor;
        _this.paper = editor.paper;
        _this.svg = editor.svg;
        _this.listenEvents();
        return _this;
    }
    /**
     * 自适应,支持
     */
    Controller.prototype.autoFit = function (center, vertical) {
        if (center === void 0) { center = true; }
        if (vertical === void 0) { vertical = true; }
        return __awaiter(this, void 0, void 0, function () {
            var data, _a, width, height, bbox, dx, dy;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = this.editor.schema.getData();
                        setAttrs(this.paper, {
                            transform: setTransform(this.scale, 0, 0),
                            transition: "all 0.2s",
                        });
                        _a = this.editor.dom.getBoundingClientRect(), width = _a.width, height = _a.height;
                        bbox = this.paper.getBBox();
                        dx = ((width - bbox.width) / 2 - bbox.x);
                        dy = ((height - bbox.height) / 2 - bbox.y);
                        data.nodes.forEach(function (node) {
                            if (center)
                                node.x += dx;
                            if (vertical)
                                node.y += dy;
                        });
                        this.x = (width - width * this.scale) / 2;
                        this.y = (height - height * this.scale) / 2;
                        this.update();
                        return [4 /*yield*/, this.editor.schema.setData(data)];
                    case 1:
                        _b.sent();
                        this.editor.fire("autofit", { data: data });
                        setTimeout(function () {
                            _this.paper.style.transition = null;
                        }, 200);
                        return [2 /*return*/];
                }
            });
        });
    };
    Controller.prototype.listenEvents = function () {
        this.svg.addEventListener("mousedown", this.panStart);
        this.svg.addEventListener("mouseup", this.panStop);
        this.svg.addEventListener("mouseleave", this.panStop);
        this.svg.addEventListener("wheel", this.onWheel);
    };
    Controller.prototype.clear = function () {
        this.svg.removeEventListener("mousedown", this.panStart);
        this.svg.removeEventListener("mouseup", this.panStop);
        this.svg.removeEventListener("mouseleave", this.panStop);
        this.svg.removeEventListener("wheel", this.onWheel);
    };
    /**
     * 禁用滚轮缩放
     */
    Controller.prototype.disableWheel = function () {
        this.svg.removeEventListener("wheel", this.onWheel);
    };
    /**
     * 禁用鼠标移动
     */
    Controller.prototype.disablePan = function () {
        this.svg.removeEventListener("mousedown", this.panStart);
    };
    /**
     * 移动到指定位置
     */
    Controller.prototype.pan = function (x, y) {
        this.x += x;
        this.y += y;
        this.update();
        this.editor.fire("panning");
    };
    /**
     * 移动到指定位置
     */
    Controller.prototype.moveTo = function (x, y) {
        this.x = x;
        this.y = y;
        this.update();
    };
    Controller.prototype.disable = function () {
        this.status = "disabled";
    };
    Controller.prototype.enable = function () {
        this.status = "enable";
    };
    /**
     * 更新最新的matrix
     */
    Controller.prototype.update = function () {
        setAttrs(this.paper, {
            transform: "matrix(".concat(this.scale, ", 0, 0, ").concat(this.scale, ", ").concat(this.x, ", ").concat(this.y, ")"),
        });
    };
    return Controller;
}(Utils_Event));
/* harmony default export */ const Utils_Controller = (Controller);

;// CONCATENATED MODULE: ./src/Model/History.ts
/**
 * History
 */
var History = /** @class */ (function () {
    function History(schema) {
        this.index = -1;
        this.schemaList = [];
        this.schema = schema;
    }
    /**
     */
    History.prototype.push = function (data) {
        if (this.index !== -1 && this.index < (this.schemaList.length - 1)) { // 删除后面会被覆盖的历史记录
            this.schemaList.splice(this.index + 1, this.schemaList.length - this.index - 1);
        }
        this.schemaList.push(JSON.stringify(data).trim());
        this.index++;
        this.schema.editor.fire("change");
    };
    History.prototype.pop = function () {
        this.schemaList.pop();
        this.index--;
        this.schema.editor.fire("change");
    };
    History.prototype.replace = function (index, data) {
        this.schemaList[this.index + index] = data;
    };
    // 重做
    History.prototype.redo = function () {
        this.schema.data = JSON.parse(this.schemaList[++this.index]);
        this.schema.editor.fire("change");
    };
    // 撤销
    History.prototype.undo = function () {
        this.schema.data = JSON.parse(this.schemaList[--this.index]);
        this.schema.editor.fire("change");
    };
    History.prototype.clear = function () {
        this.schemaList = [];
        this.index = -1;
    };
    return History;
}());
/* harmony default export */ const Model_History = (History);

// EXTERNAL MODULE: external "dagre"
var external_dagre_ = __webpack_require__(987);
var external_dagre_default = /*#__PURE__*/__webpack_require__.n(external_dagre_);
;// CONCATENATED MODULE: ./src/Model/Schema.ts




/**
 * Schema
 * @class
 */
var Schema = /** @class */ (function () {
    /**
     *
     * @param {VEditor} editor - VEditor实例
     */
    function Schema(editor) {
        this.data = {
            nodesMap: {},
            linesMap: {},
        };
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
    Schema.prototype.format = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nodes, lines, res, g, option, _a, center, key, node, data, bbox, key, line, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        nodes = this.editor.graph.node.nodes;
                        lines = this.editor.graph.line.lines;
                        res = {
                            nodes: [],
                            lines: [],
                        };
                        g = new (external_dagre_default()).graphlib.Graph();
                        option = Object.assign({
                            nodesep: 50,
                            rankdir: "TB",
                            ranksep: 50,
                            align: "UL",
                        }, this.editor.config.dagreOption);
                        g.setGraph(option);
                        _a = this.editor.config.dagreOption.center, center = _a === void 0 ? true : _a;
                        g.setDefaultEdgeLabel(function () {
                            return {};
                        });
                        for (key in nodes) {
                            node = nodes[key];
                            data = node.data;
                            if (!data.width || !data.height) {
                                bbox = node.dom.getBBox();
                                data.width = bbox.width;
                                data.height = bbox.height;
                            }
                            g.setNode(key, __assign({}, data));
                        }
                        for (key in lines) {
                            line = lines[key];
                            data = line.data;
                            g.setEdge(data.from, data.to);
                            res.lines.push(data);
                        }
                        external_dagre_default().layout(g);
                        g.nodes().forEach(function (key) {
                            var nodeData = g.node(key);
                            if (center) {
                                if (option.rankdir.indexOf("T") < 0) {
                                    // 左右布局
                                    nodeData.y -= nodeData.height / 2;
                                }
                                else {
                                    //上下布局
                                    nodeData.x -= nodeData.width / 2;
                                }
                            }
                            res.nodes.push(nodeData);
                        });
                        // 触发format事件，保存历史
                        return [4 /*yield*/, this.setData(res)];
                    case 1:
                        // 触发format事件，保存历史
                        _b.sent();
                        /**
                         * @event VEditor#format
                         * @type {Object}
                         * @property {Object} data
                         */
                        this.editor.fire("format", { data: res });
                        return [2 /*return*/];
                }
            });
        });
    };
    Schema.prototype.listenEvents = function () {
        var _this = this;
        var historyChangeEvents = [
            "node:change",
            "node:add",
            "line:change",
            "line:add",
            "line:remove",
            "delete",
        ];
        historyChangeEvents.forEach(function (event) {
            _this.editor.graph.on(event, function () {
                _this.history.push(_this.makeNowDataMap());
            }, 9999);
        });
    };
    /**
     * 历史入栈最新数据
     */
    Schema.prototype.pushHistory = function () {
        this.history.push(this.makeNowDataMap());
    };
    /**
     * 历史出栈
     */
    Schema.prototype.popHistory = function () {
        this.history.pop();
    };
    /**
     * 获取当前最新的map
     */
    Schema.prototype.makeNowDataMap = function () {
        var nodes = this.editor.graph.node.nodes;
        var lines = this.editor.graph.line.lines;
        var nodesMap = {};
        var linesMap = {};
        for (var uuid in nodes) {
            nodesMap[uuid] = nodes[uuid].data;
        }
        for (var uuid in lines) {
            linesMap[uuid] = lines[uuid].data;
        }
        this.data = {
            nodesMap: nodesMap,
            linesMap: linesMap,
        };
        return this.data;
    };
    Schema.prototype.setData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.parseData(data); // 解析数据
                        this.editor.graph.clearGraph();
                        return [4 /*yield*/, this.renderData()];
                    case 1:
                        _a.sent();
                        /**
                         * @event VEditor#load
                         * @type {Object}
                         */
                        this.editor.fire("load", data);
                        return [2 /*return*/];
                }
            });
        });
    };
    Schema.prototype.setInitData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setData(data)];
                    case 1:
                        _a.sent();
                        this.history.clear();
                        this.history.push(this.data);
                        return [2 /*return*/];
                }
            });
        });
    };
    Schema.prototype.parseData = function (_a) {
        var _b = _a.nodes, nodes = _b === void 0 ? [] : _b, _c = _a.lines, lines = _c === void 0 ? [] : _c;
        var nodesMap = {};
        var linesMap = {};
        nodes.forEach(function (item) {
            nodesMap[item.uuid] = item;
        });
        lines.forEach(function (item) {
            var uuid = item.uuid;
            linesMap[uuid ? uuid : (0,external_uuid_.v1)()] = item;
        });
        this.data = {
            nodesMap: nodesMap,
            linesMap: linesMap,
        };
    };
    /**
     * 渲染数据
     */
    Schema.prototype.renderData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editor.graph.render(this.data)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 重做
     */
    Schema.prototype.redo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.editor.graph.clearGraph();
                        this.history.redo();
                        return [4 /*yield*/, this.renderData()];
                    case 1:
                        _a.sent();
                        this.editor.fire("redo");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 撤销
     */
    Schema.prototype.undo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.editor.graph.clearGraph();
                        this.history.undo();
                        return [4 /*yield*/, this.renderData()];
                    case 1:
                        _a.sent();
                        this.editor.fire("undo");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 获取数据
     */
    Schema.prototype.getData = function () {
        this.makeNowDataMap();
        var _a = this.data, nodesMap = _a.nodesMap, linesMap = _a.linesMap;
        return {
            nodes: Object.keys(nodesMap).map(function (key) { return nodesMap[key]; }),
            lines: Object.keys(linesMap).map(function (key) { return linesMap[key]; }),
        };
    };
    return Schema;
}());
/* harmony default export */ const Model_Schema = (Schema);

// EXTERNAL MODULE: external "canvg"
var external_canvg_ = __webpack_require__(973);
;// CONCATENATED MODULE: ./src/Plugins/Minimap.ts




var MiniMap = /** @class */ (function () {
    function MiniMap(editor) {
        var _this = this;
        /**
         * 重新计算拖拽框位置
         */
        this.resetDrag = function () {
            var _a = _this.editor.controller, x = _a.x, y = _a.y, scale = _a.scale;
            var padding = _this.padding;
            if (!_this.svgBBox)
                return;
            /**
             * 这里虽然坐标整体都缩小了10倍，但是用户画布放大的scale倍，在这个坐标系下永远都是1倍，不会随着用户放大而放大，
             * 所以这里求得的左上角便宜坐标实际上还是标准倍率吸下的，需要再放大用户的倍率才能得到最终的效果，
             * 用户画布=>缩小10倍画布到用户scale*this.sclae=>还原回基准this.scale
             */
            _this.drag.style.left = -x / scale / _this.scale + padding + "px";
            _this.drag.style.top = -y / scale / _this.scale + padding + "px";
            _this.dragBBox = {
                width: _this.svgBBox.width / _this.scale / scale,
                height: _this.svgBBox.height / _this.scale / scale,
            };
            _this.drag.style.width = _this.dragBBox.width + "px";
            _this.drag.style.height = _this.dragBBox.height + "px";
            // 这里需要考虑width太大的情况，这种时候需要引入一个新变量把图的缩小倍数变小,this.limitScale
        };
        /**
         * 重新渲染小地图
         */
        this.render = function () {
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.renderCanvas();
                    this.resetDrag();
                    return [2 /*return*/];
                });
            }); }, 200);
        };
        this.editor = editor;
        var _a = editor.config.minimap, minimap = _a === void 0 ? [] : _a;
        this.width = minimap.width || 160;
        this.height = minimap.height || 160;
        this.padding = minimap.padding || 20;
        this.scale = minimap.scale || 10;
    }
    MiniMap.prototype.init = function () {
        var dom = "<div class=\"ve-minimap\" >\n\t\t\t<canvas width=\"100%\" height=\"100%\"></canvas>\n\t\t\t<div class=\"drag-rect\" style=\"left:".concat(this.padding, "px;top:").concat(this.padding, "px\">\n\t\t\t\t<div class=\"drag-point\"></div>\n\t\t\t</div>\n\t\t</div>");
        var can = document.createElement("div");
        can.innerHTML = dom;
        this.container = can.querySelector(".ve-minimap");
        this.editor.container.append(this.container);
        this.canvas = this.container.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.drag = this.container.querySelector(".drag-rect");
        this.dragPoint = this.container.querySelector(".drag-point");
        var bbox = this.container.getBoundingClientRect();
        this.width = bbox.width;
        this.height = bbox.height;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.initEvent();
    };
    MiniMap.prototype.initEvent = function () {
        var _this = this;
        var controller = this.editor.controller;
        this.canvas.addEventListener("click", function (e) {
            var left = e.offsetX - _this.dragBBox.width / 2;
            var top = e.offsetY - _this.dragBBox.height / 2;
            _this.drag.style.left = left + "px";
            _this.drag.style.top = top + "px";
            controller.moveTo(-(left - _this.padding) * _this.scale * controller.scale, -(top - _this.padding) * _this.scale * controller.scale);
            _this.resetDrag();
        });
        var clientX = 0;
        var clientY = 0;
        SVGHelper.drag(this.drag, function (e) {
            var dx = e.clientX - clientX;
            var dy = e.clientY - clientY;
            var dleft = dx + _this.dragStart.x;
            var dtop = dy + _this.dragStart.y;
            var left = Math.min(Math.max(dleft, 0), _this.width - _this.dragBBox.width + _this.padding * 2);
            var top = Math.min(Math.max(dtop, 0), _this.height - _this.dragBBox.height + _this.padding * 2);
            _this.drag.style.left = left + "px";
            _this.drag.style.top = top + "px";
            controller.moveTo(-(left - _this.padding) * _this.scale * controller.scale, -(top - _this.padding) * _this.scale * controller.scale);
        }, function (e) {
            clientX = e.clientX;
            clientY = e.clientY;
            var style = _this.drag.style;
            _this.dragStart = {
                x: style.left ? parseInt(style.left.split("px")[0]) : 0,
                y: style.top ? parseInt(style.top.split("px")[0]) : 0,
            };
        }, function () { });
        var pointClientX = 0;
        var pointClientY = 0;
        SVGHelper.drag(this.dragPoint, function (e) {
            var dx = e.clientX - pointClientX;
            var dy = e.clientY - pointClientY;
            var ratio = _this.svgBBox.width / _this.svgBBox.height;
            var height = Math.max(dy + _this.dragStartBBox.height, 10);
            var width = height * ratio;
            _this.drag.style.width = width + "px";
            _this.drag.style.height = height + "px";
            controller.scale = _this.svgBBox.width / (width * _this.scale);
            controller.update();
        }, function (e) {
            pointClientX = e.clientX;
            pointClientY = e.clientY;
            e.preventDefault();
            e.stopPropagation();
            _this.dragStartBBox = _this.drag.getBoundingClientRect();
            return false;
        }, function () { });
        this.editor.on("change", this.render);
        this.editor.on("format", this.render);
        this.editor.on("autofit", this.resetDrag);
        this.editor.on("panning", this.resetDrag);
        this.editor.on("zoom", this.resetDrag);
    };
    MiniMap.prototype.renderCanvas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var node, svgBBox, images, matrix, svg, paperBBox, x, y, m, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        node = this.editor.svg;
                        svgBBox = node.getBoundingClientRect();
                        images = node.querySelectorAll("image") || [];
                        images.forEach(function (img) {
                            img.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
                        });
                        matrix = this.editor.paper.getAttribute("transform");
                        this.editor.paper.setAttribute("transform", "");
                        svg = node.innerHTML;
                        if (matrix)
                            this.editor.paper.setAttribute("transform", matrix);
                        paperBBox = this.editor.paper.getBBox();
                        this.scale =
                            this.limitScale ||
                                Math.max(paperBBox.width / (this.width - this.padding * 2), paperBBox.height / (this.height - this.padding * 2), 10);
                        x = this.padding;
                        y = this.padding;
                        m = create();
                        translate(m, m, [x, y]);
                        scale(m, m, [1 / this.scale, 1 / this.scale]);
                        this.svgBBox = svgBBox;
                        _a = this;
                        return [4 /*yield*/, external_canvg_.Canvg.fromString(this.ctx, "<g transform=\"matrix(".concat(m.toString(), ")\" class=\"minimap-graph\">").concat(svg, "</g>"), {
                                ignoreMouse: true,
                                ignoreDimensions: true,
                                ignoreAnimation: true,
                            })];
                    case 1:
                        _a.converting = _b.sent();
                        this.converting.render();
                        return [2 /*return*/];
                }
            });
        });
    };
    MiniMap.prototype.destroy = function () {
        clearTimeout(this.timeout);
        this.editor.off("change", this.render);
        this.editor.off("format", this.render);
        this.editor.off("autofit", this.resetDrag);
        this.editor.off("panning", this.resetDrag);
        this.editor.off("zoom", this.resetDrag);
        this.drag.remove();
        this.dragPoint.remove();
        this.drag.remove();
        this.dragPoint.remove();
    };
    return MiniMap;
}());
/* harmony default export */ const Minimap = (MiniMap);

// EXTERNAL MODULE: ./src/index.less
var src = __webpack_require__(176);
;// CONCATENATED MODULE: ./src/VEditor.ts








/**
 * @class
 * @extends Utils.Event
 */
var VEditor = /** @class */ (function (_super) {
    __extends(VEditor, _super);
    /**
     * @param {VEditorOptions} options 配置项
     */
    function VEditor(config) {
        var _this = _super.call(this) || this;
        _this.config = Object.assign({
            hideAchor: false,
            hideAchorLine: false,
            anchorDistance: 5,
            showBackGrid: true,
            showMiniMap: false,
            mode: undefined,
            dagreOption: {},
        }, config);
        if (!config.dom)
            return _this;
        /**
         * @property {HTMLElement} dom 容器
         */
        _this.dom = _this.initDom(config.dom);
        /**
         * @property {Snap.Element} svg
         */
        _this.svg = _this.dom.querySelector("svg");
        /**
         * @property {Snap.Element} paper
         */
        _this.paper = createSVGElement("g", _this.svg);
        _this.paper.classList.add("ve-editor-paper");
        /**
         * @property {HTMLElement} container 实例dom
         */
        _this.container = _this.dom.querySelector(".ve-editor");
        _this.resize();
        /**
         * @property {Graph} graph 画布
         */
        _this.graph = new Shape_Graph(_this);
        /**
         * @property {Controller} controller 控制器
         */
        _this.controller = new Utils_Controller(_this);
        /**
         * @property {Schema} schema 数据管理器
         */
        _this.schema = new Model_Schema(_this);
        if (_this.config.showMiniMap) {
            /**
             * @property {Minimap?} minimap 小地图
             */
            _this.minimap = new Minimap(_this);
            _this.minimap.init();
        }
        return _this;
    }
    VEditor.prototype.initDom = function (dom) {
        dom.innerHTML = "<div class=\"ve-editor ".concat(this.config.mode || "", "\" >\n\t\t\t\t<div class=\"ve-editor-back\" ></div>\n\t\t\t\t<div class=\"ve-editor-svg\" >\n\t\t\t\t\t<svg  />\n\t\t\t\t</div>\n\t\t\t</div>");
        return dom;
    };
    VEditor.prototype.resize = function () {
        var _a = this.config, width = _a.width, height = _a.height;
        setAttrs(this.svg, {
            width: width || "100%",
            height: height || "100%",
        });
    };
    /**
     * destroy
     */
    VEditor.prototype.destroy = function () {
        this.minimap && this.minimap.destroy();
        this.graph.destroy();
        this.graph = undefined;
        this.svg.remove();
        this.dom.innerHTML = undefined;
        this.controller.clear();
        this.controller = undefined;
        this.schema = undefined;
        this.clear();
    };
    /**
     * repaint
     */
    VEditor.prototype.repaint = function () {
        this.graph.clearGraph();
        this.graph.render(this.schema.data);
    };
    return VEditor;
}(Utils_Event));
/* harmony default export */ const src_VEditor = (VEditor);

;// CONCATENATED MODULE: ./src/index.ts





















/* harmony default export */ const src_0 = (src_VEditor);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});