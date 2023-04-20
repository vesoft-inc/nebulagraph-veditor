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
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 74:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes dashing {\n  from {\n    stroke-dashoffset: 200;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n.ve-editor {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.ve-editor .ve-editor-back {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 0;\n  left: 0;\n  top: 0;\n}\n.ve-editor .ve-minimap {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: #fff;\n  border: 1px solid #cecece;\n  border-radius: 5px;\n  overflow: hidden;\n  width: 160px;\n  height: 127px;\n}\n.ve-editor .ve-minimap .drag-rect {\n  position: absolute;\n  left: 0px;\n  box-sizing: content-box;\n  top: 0px;\n  border: 2px solid #08c;\n  cursor: pointer;\n  transition: all 200ms ease;\n}\n.ve-editor .ve-minimap .drag-point {\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n  border: 2px solid #08c;\n  background: #fff;\n  position: absolute;\n  right: -5px;\n  bottom: -5px;\n  cursor: nwse-resize;\n}\n.ve-editor > .ve-editor-svg {\n  cursor: grab;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.ve-editor > .ve-editor-svg svg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  outline: none;\n}\n.ve-editor > .ve-editor-svg .ve-node:hover .ve-link-points,\n.ve-editor > .ve-editor-svg .ve-node.active .ve-link-points {\n  display: block;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-link-points {\n  cursor: crosshair;\n  display: none;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-link-points:hover,\n.ve-editor > .ve-editor-svg .ve-node .ve-link-points.hover {\n  fill: #4c79ff;\n  cursor: crosshair;\n  display: block;\n}\n.ve-editor > .ve-editor-svg .ve-node.active .icon-node {\n  transition: stroke 400ms;\n  stroke: #4c79ff;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-node-shape {\n  cursor: move;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-node-shape:hover > .icon-node {\n  stroke: #4c79ff;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-node-shape.success .icon-node {\n  stroke: green;\n  fill: #fff;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-node-shape.error .icon-node {\n  stroke: red;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-node-shape.running .icon-node {\n  stroke: #4c79ff;\n}\n.ve-editor > .ve-editor-svg .ve-line .ve-line-path {\n  transition: stroke-dasharray 300ms ease-out;\n}\n.ve-editor > .ve-editor-svg .ve-line .ve-shdow-path {\n  stroke: transparent;\n  stroke-width: 5px;\n  fill: none;\n}\n.ve-editor > .ve-editor-svg .ve-line:hover .ve-line-shape {\n  opacity: 0.5;\n}\n.ve-editor > .ve-editor-svg .ve-line:hover .ve-line-arrow {\n  opacity: 0.5;\n}\n.ve-editor > .ve-editor-svg .ve-line.active .ve-line-arrow {\n  stroke: #4c79ff;\n}\n.ve-editor > .ve-editor-svg .ve-line.active path {\n  stroke: #4c79ff;\n}\n.ve-editor > .ve-editor-svg .ve-line.running .ve-line-path {\n  stroke-dasharray: 5 !important;\n  animation: dashing 5s linear infinite;\n}\n.ve-editor > .ve-editor-svg .ve-line .ve-line-shape {\n  cursor: pointer;\n}\n.ve-editor > .ve-editor-svg .ve-line .ve-line-arrow {\n  cursor: crosshair;\n}\n.ve-editor > .ve-editor-svg .ve-line .ve-line-label text {\n  text-anchor: middle;\n}\n.ve-editor > .ve-editor-svg .anchor-line {\n  stroke: #4c79ff;\n}\n.ve-editor > .ve-editor-svg .ve-paper-lineing .ve-link-points {\n  display: block;\n}\n.ve-editor > .ve-editor-html {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.ve-editor .anchor-back {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.ve-node-wrapper {\n  border: 1px solid #08c;\n  border-radius: 8px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  background-color: #fff;\n  align-items: center;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 81:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiAgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxnIGlkPSIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgoJCTxyZWN0IGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PC9yZWN0PgoJCTxyZWN0IGlkPSJSZWN0YW5nbGUiIHN0cm9rZT0iI2FiZiIgIHg9Ii0xIiB5PSItMSIgd2lkdGg9IjJweCIgaGVpZ2h0PSIycHgiPjwvcmVjdD4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ 973:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__973__;

/***/ }),

/***/ 987:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__987__;

/***/ }),

/***/ 459:
/***/ ((module) => {

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AnchorLine": () => (/* reexport */ AnchorLine_namespaceObject),
  "Controller": () => (/* reexport */ Controller_namespaceObject),
  "DefaultLine": () => (/* reexport */ Line_namespaceObject),
  "DefaultNode": () => (/* reexport */ DefaultNodes_namespaceObject),
  "Event": () => (/* reexport */ Event_namespaceObject),
  "Graph": () => (/* reexport */ Graph_namespaceObject),
  "History": () => (/* reexport */ History_namespaceObject),
  "Line": () => (/* reexport */ Shape_Line_namespaceObject),
  "Minimap": () => (/* reexport */ Minimap_namespaceObject),
  "Node": () => (/* reexport */ Node_namespaceObject),
  "Schema": () => (/* reexport */ Schema_namespaceObject),
  "Utils": () => (/* reexport */ Utils_namespaceObject),
  "VEditor": () => (/* reexport */ src_VEditor),
  "default": () => (/* binding */ src_0)
});

// NAMESPACE OBJECT: ./src/Utils/vector.ts
var vector_namespaceObject = {};
__webpack_require__.r(vector_namespaceObject);
__webpack_require__.d(vector_namespaceObject, {
  "addVector": () => (addVector),
  "getVectorLength": () => (getVectorLength),
  "multiple": () => (multiple),
  "normalize": () => (normalize),
  "subVector": () => (subVector)
});

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

// NAMESPACE OBJECT: ./src/Shape/Nodes/DefaultNodes.ts
var DefaultNodes_namespaceObject = {};
__webpack_require__.r(DefaultNodes_namespaceObject);
__webpack_require__.d(DefaultNodes_namespaceObject, {
  "default": () => (DefaultNodes)
});

// NAMESPACE OBJECT: ./src/Shape/Node.ts
var Node_namespaceObject = {};
__webpack_require__.r(Node_namespaceObject);
__webpack_require__.d(Node_namespaceObject, {
  "default": () => (Shape_Node)
});

// NAMESPACE OBJECT: ./src/Utils/Event.ts
var Event_namespaceObject = {};
__webpack_require__.r(Event_namespaceObject);
__webpack_require__.d(Event_namespaceObject, {
  "default": () => (Event)
});

// NAMESPACE OBJECT: ./src/Utils/index.ts
var Utils_namespaceObject = {};
__webpack_require__.r(Utils_namespaceObject);
__webpack_require__.d(Utils_namespaceObject, {
  "BezierLine": () => (Utils_BezierLine),
  "Event": () => (Event),
  "Path": () => (Path),
  "SVGHelper": () => (SVGHelper),
  "Vector2": () => (vector_namespaceObject),
  "dom": () => (dom_namespaceObject),
  "makeLineSort": () => (makeLineSort)
});

// NAMESPACE OBJECT: ./src/Shape/Lines/Line.ts
var Line_namespaceObject = {};
__webpack_require__.r(Line_namespaceObject);
__webpack_require__.d(Line_namespaceObject, {
  "default": () => (Lines_Line)
});

// NAMESPACE OBJECT: ./src/Shape/Line.ts
var Shape_Line_namespaceObject = {};
__webpack_require__.r(Shape_Line_namespaceObject);
__webpack_require__.d(Shape_Line_namespaceObject, {
  "default": () => (Shape_Line)
});

// NAMESPACE OBJECT: ./src/Shape/AnchorLine.ts
var AnchorLine_namespaceObject = {};
__webpack_require__.r(AnchorLine_namespaceObject);
__webpack_require__.d(AnchorLine_namespaceObject, {
  "default": () => (AnchorLine)
});

// NAMESPACE OBJECT: ./src/Shape/Graph.ts
var Graph_namespaceObject = {};
__webpack_require__.r(Graph_namespaceObject);
__webpack_require__.d(Graph_namespaceObject, {
  "default": () => (Shape_Graph)
});

// NAMESPACE OBJECT: ./src/Utils/Controller.ts
var Controller_namespaceObject = {};
__webpack_require__.r(Controller_namespaceObject);
__webpack_require__.d(Controller_namespaceObject, {
  "default": () => (Utils_Controller)
});

// NAMESPACE OBJECT: ./src/Model/History.ts
var History_namespaceObject = {};
__webpack_require__.r(History_namespaceObject);
__webpack_require__.d(History_namespaceObject, {
  "default": () => (Model_History)
});

// NAMESPACE OBJECT: ./src/Model/Schema.ts
var Schema_namespaceObject = {};
__webpack_require__.r(Schema_namespaceObject);
__webpack_require__.d(Schema_namespaceObject, {
  "default": () => (Model_Schema)
});

// NAMESPACE OBJECT: ./src/Plugins/Minimap.ts
var Minimap_namespaceObject = {};
__webpack_require__.r(Minimap_namespaceObject);
__webpack_require__.d(Minimap_namespaceObject, {
  "default": () => (Minimap)
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
    const length = Math.sqrt(v.x * v.x + v.y * v.y);
    return {
        x: v.x / length,
        y: v.y / length
    };
}
function addVector(...vectors) {
    return vectors.reduce((pre, cur) => {
        return {
            x: pre.x + cur.x,
            y: pre.y + cur.y
        };
    }, {
        x: 0, y: 0
    });
}
function getVectorLength(v) {
    const length = Math.sqrt(v.x * v.x + v.y * v.y);
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

class BezierLine {
    constructor() {
        this.lengths = [];
    }
    setControl(v0, v1, v2, v3) {
        this.v0 = v0;
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
    }
    getPoint(t) {
        const { v0, v1, v2, v3 } = this;
        const pos = addVector(multiple(Object.assign({}, v0), Math.pow(1 - t, 3)), multiple(Object.assign({}, v1), Math.pow(1 - t, 2) * 3 * t), multiple(Object.assign({}, v2), 3 * (1 - t) * Math.pow(t, 2)), multiple(Object.assign({}, v3), Math.pow(t, 3)));
        return pos;
    }
    // 这里使用简单的前后点来计算角度
    getAngle(t) {
        const pre = this.getPoint(Math.max(0, t - 0.001));
        const next = this.getPoint(Math.min(1, t + 0.001));
        const angle = Math.atan2(next.y - pre.y, next.x - pre.x);
        return angle;
    }
    /**
     * @param n 指定点的个数
     * @returns
     */
    getSpacedPoints(n) {
        const points = [];
        this.getLengths(n); // 缓存起来
        for (let i = 0; i <= n; i++) {
            const t = this.getUtoTmapping(i / n);
            points.push(this.getPoint(t));
        }
        return points;
    }
    /**
     * 返回缓存长度数组
     * @param n 分割点的个数
     * @returns
     */
    getLengths(n = 100) {
        let length = 0;
        let prePos = Object.assign({}, this.v0);
        this.lengths = [Object.assign(Object.assign({}, this.v0), { length: 0 })];
        for (let i = 1; i <= n; i++) {
            const pos = this.getPoint(i / n);
            length += getVectorLength(subVector(pos, prePos));
            this.lengths.push(Object.assign(Object.assign({}, pos), { length }));
            prePos = pos;
        }
        return this;
    }
    /**
     * 获取线总长度
     * @param n
     * @returns
     */
    getLength(n) {
        this.getLengths(n);
        return this.lengths[this.lengths.length - 1].length;
    }
    // TODO: 根据总长度算出一定比例的长度所对应的t值，
    // 这个等距划分的算法不很准确，可以改进成，记录每个线段起止点，然后利用累进线段长度和斜率来计算等距点，
    // 但是某些弧度特别大的线可能需要取点密一点才有用，不过也非常有效了
    getUtoTmapping(u) {
        const lengths = this.lengths;
        const length = lengths[lengths.length - 1].length;
        const targetLength = u * length;
        let nextIndex;
        let nowIndex = 0;
        lengths.find((item, index) => {
            if (item.length >= targetLength) {
                nextIndex = index;
                return true;
            }
            else {
                nowIndex = index;
                return false;
            }
        });
        const nextPoint = this.lengths[nextIndex];
        const nowPoint = this.lengths[nowIndex];
        const restRatio = u === 0 ? 0 : (targetLength - nowPoint.length) / (nextPoint.length - nowPoint.length);
        const t = (nowIndex + Math.max(restRatio, 0)) / (this.lengths.length - 1);
        return t;
    }
}
/* harmony default export */ const Utils_BezierLine = (BezierLine);

;// CONCATENATED MODULE: ./src/Utils/dom.ts

function getDOMRect(str, callback) {
    const div = document.createElement("div");
    div.style.position = "fixed";
    div.style.visibility = "hidden";
    div.innerHTML = str;
    document.body.appendChild(div);
    const rect = div.getBoundingClientRect();
    // document.body.removeChild(div);
    return rect;
}
function svgWrapper(svgString, parent) {
    const svg = createSVGElement("svg");
    svg.innerHTML = svgString;
    if (parent)
        parent.appendChild(svg.children[0]);
    return svg.children[0];
}
function createSVGElement(name, parent) {
    const svg = window.document.createElementNS("http://www.w3.org/2000/svg", name);
    if (parent) {
        parent.appendChild(svg);
    }
    return svg;
}
function setAttrs(dom, attrs) {
    for (const key in attrs) {
        if (key === "className") {
            return dom.setAttribute("class", attrs[key]);
        }
        if (attrs.hasOwnProperty(key)) {
            dom.setAttribute(key, attrs[key]);
        }
    }
}
function setTransform(scale, translateX, translateY) {
    return `translate(${translateX},${translateY}) scale(${scale})`;
}
function animate(start, end, callback, duration, endCallback, easeType = "ease-in") {
    const startTime = Date.now();
    const endTime = startTime + duration;
    const bezierLine = getEase(easeType);
    let aniamteFrame;
    const step = () => {
        const now = Date.now();
        if (now >= endTime) {
            callback(end);
            if (typeof endCallback === "function")
                endCallback();
            return;
        }
        const { y } = bezierLine.getPoint((now - startTime) / duration);
        callback(start + y * (end - start));
        aniamteFrame = requestAnimationFrame(step);
    };
    step();
    return aniamteFrame;
}
function getEase(easeType) {
    const bezierLine = new Utils_BezierLine();
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
    const _destroy = () => {
        node.removeEventListener("mousedown", onDragStart);
        document.removeEventListener("mousemove", onDragMove);
        document.removeEventListener("mouseup", onDragEnd);
        node = undefined;
    };
    return _destroy;
}
function getAngle(from, to) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    return (Math.atan2(dy, dx) * 180) / Math.PI;
}

;// CONCATENATED MODULE: ./src/Utils/svg.ts


const SVGHelper = Object.assign(Object.assign({}, dom_namespaceObject), { rect: (x, y, w, h, rx = 0, ry = 0) => {
        const svgString = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" ry="${ry}" />`;
        return svgWrapper(svgString);
    }, text: (x, y, text = '') => {
        return svgWrapper(`<text x="${x}" y="${y}">${text}</text>`);
    }, circle: (cx, cy, r) => {
        return svgWrapper(`<circle cx="${cx}" cy="${cy}" r="${r}" />`);
    }, image: (src, x, y, w, h) => {
        return svgWrapper(`<image x="${x}" y="${y}" width="${w}" height="${h}" xlink:href="${src}" />`);
    }, path: (d = "") => {
        return svgWrapper(`<path d="${d}" />`);
    }, group: (...others) => {
        const group = createSVGElement("g");
        others && others.forEach(item => {
            group.appendChild(item);
        });
        return group;
    } });


;// CONCATENATED MODULE: ./src/Shape/Nodes/DefaultNodes.ts


const DefaultNode = {
    adsorb: [20, 20],
    linkPoints: [
        { x: 0.5, y: 0 },
        { x: 0.5, y: 1 },
    ],
    /**
     * 默认渲染函数 data,snapPaper
     */
    render: (instanceNode) => {
        let node, text;
        const { data } = instanceNode;
        // remove the old shape and create a new one every time
        if (instanceNode.shape) {
            instanceNode.shape.remove();
        }
        node = SVGHelper.rect(0, 0, 100, 40);
        text = SVGHelper.text(20, 25, data.name);
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
    renderLinkPoint: (node, instance) => {
        const { data: linkPoint } = instance;
        if (!instance.dom) {
            instance.dom = SVGHelper.circle(0, 0, 5);
        }
        const circle = instance.dom;
        const box = node.shapeBBox || node.shape.getBBox();
        node.shapeBBox = box;
        const x = (linkPoint.isPixel ? linkPoint.x : linkPoint.x * box.width);
        const y = (linkPoint.isPixel ? linkPoint.y : linkPoint.y * box.height);
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
    destroy: (node) => {
        var _a;
        (_a = node.shape) === null || _a === void 0 ? void 0 : _a.remove();
    },
};
/* harmony default export */ const DefaultNodes = (DefaultNode);

;// CONCATENATED MODULE: ./src/Shape/Nodes/IconNode.ts



const IconNode = {
    adsorb: [20, 20],
    linkPoints: [
        { x: 0.5, y: 0 },
        { x: 0.5, y: 1 },
    ],
    render: (instanceNode) => {
        const { data, shape } = instanceNode;
        if (shape) {
            shape.remove();
        }
        const node = SVGHelper.rect(0, 0, 180, 32);
        const text = SVGHelper.text(40, 21, data.name);
        const icon = SVGHelper.image(data.iconPath, 5, 4, 24, 24);
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
    renderLinkPoint: (node, instance) => {
        return DefaultNodes.renderLinkPoint.call(undefined, node, instance);
    },
};
/* harmony default export */ const Nodes_IconNode = (IconNode);

;// CONCATENATED MODULE: ./src/Shape/Nodes/DomNode.ts



const DomNode = {
    adsorb: [20, 20],
    linkPoints: [
        { x: 0, y: 0.5 },
        { x: 1, y: 0.5 },
        { x: 0.5, y: 0 },
        { x: 0.5, y: 1 },
    ],
    render: (instanceNode) => {
        const { data, shape } = instanceNode;
        if (shape) {
            shape.remove();
        }
        const dom = svgWrapper(`<foreignObject width=${data.width} height=${data.height} >
		<div style="width:${data.width}px;height:${data.height}" class="ve-node-wrapper">
			<div class="node-text">${data.name}</div>
		</div>
		</foreignObject>`);
        const group = SVGHelper.group(dom);
        return group;
    },
    renderLinkPoint: (node, instance) => {
        return DefaultNodes.renderLinkPoint.call(undefined, node, instance);
    },
};
/* harmony default export */ const Nodes_DomNode = (DomNode);

;// CONCATENATED MODULE: ./src/Shape/Node.ts






class Node {
    constructor(graph) {
        /**
         * 添加节点
         * @param {object} data
         */
        this.addNode = (data) => {
            if (!data.uuid) {
                data.uuid = (0,external_uuid_.v1)();
                this.graph.editor.fire("node:makeuuid", data);
            }
            if (data.uuid.indexOf && data.uuid.indexOf("-") > -1) {
                data.uuid = data.uuid.replace(/-/g, "");
            }
            const node = this.renderNode(data);
            /**
             * @event Graph#node:change - 节点变化事件
             * @property {Object} node
             */
            this.graph.fire("node:change", { node });
            return node;
        };
        /**
         * 删除节点
         *  @param {object} data
         */
        this.deleteNode = (input, noEvent = false) => {
            var _a, _b, _c;
            const uuid = typeof input === "string" ? input : input.uuid;
            const deleteNode = this.nodes[uuid];
            const nodeRender = this.shapes[deleteNode.data.type || "default"];
            nodeRender.destroy && nodeRender.destroy(deleteNode);
            delete this.nodes[uuid];
            /**
             * @event Graph#node:remove - 移除节点事件
             */
            if (!noEvent) {
                this.graph.fire("node:remove", { node: deleteNode, uuid });
            }
            (_a = deleteNode.linkPoints) === null || _a === void 0 ? void 0 : _a.forEach((point) => {
                point.dom.remove();
                point = null;
            });
            (_b = deleteNode.fromLines) === null || _b === void 0 ? void 0 : _b.forEach((lineId) => {
                this.graph.line.deleteLine(lineId, true, true);
            });
            (_c = deleteNode.toLines) === null || _c === void 0 ? void 0 : _c.forEach((lineId) => {
                this.graph.line.deleteLine(lineId, true, true);
            });
            deleteNode._destroys.forEach((func) => func());
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
    initDefs() {
        this.shadow = svgWrapper(`<defs>
			<filter id="ve-black-shadow" filterUnits="userSpaceOnUse">
                <feGaussianBlur in="SourceAlpha" stdDeviation="4"></feGaussianBlur>
                <feGaussianBlur stdDeviation="3" />
                <feOffset dx="0" dy="0" result="offsetblur"></feOffset>
                <feFlood flood-color="#333333"></feFlood>
                <feComposite in2="offsetblur" operator="in"></feComposite>
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3"></feFuncA>
                </feComponentTransfer>
                <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
		</defs>`, this.paper);
    }
    // 监听事件
    listenEvent() {
        this.graph.on("paper:click", () => {
            this.unActive();
        });
        this.graph.on("line:click", () => {
            this.unActive();
        });
        this.graph.on("copy", () => {
            const activeNode = Object.assign({}, this.actives);
            let newActiveNode = {};
            for (let node in activeNode) {
                newActiveNode[node] = Object.assign(Object.assign({}, activeNode[node]), { data: JSON.parse(JSON.stringify(activeNode[node].data)) });
            }
            this.copyNode = newActiveNode;
        });
        this.graph.on("paste", () => {
            this.unActive();
            for (let key in this.copyNode) {
                const node = this.copyNode[key];
                let newData = Object.assign({}, node.data);
                newData.x += 20 + Math.random() * 20;
                newData.y += 20 + Math.random() * 20;
                delete newData.uuid;
                const newNode = this.addNode(newData);
                this.setActive(newNode);
            }
        });
    }
    registeNode(type, data, extend = "default") {
        this.shapes[type] = Object.assign({}, this.shapes[extend], data);
    }
    render(data = {}) {
        return new Promise((resolve, reject) => {
            this.tmpLinkPoints = []; //先缓存获取所有节点渲染后触发，避免重绘
            Object.keys(data).map((key) => {
                this.renderNode(data[key]);
            });
            this.timeout = setTimeout(() => {
                this.tmpLinkPoints.forEach((node) => {
                    this.addNodeLinkPoints(node);
                });
                this.tmpLinkPoints = undefined;
                resolve(true);
            }, 0);
        });
    }
    /**
     * 渲染新节点
     */
    renderNode(item) {
        const key = item.uuid;
        const shape = this.shapes[item.type || "default"];
        shape.paper = this.paper;
        const node = {
            dom: undefined,
            toLines: new Set(),
            fromLines: new Set(),
            _destroys: [],
            data: item,
            linkPoints: []
        };
        const nodeShape = shape.render(node);
        const dom = SVGHelper.group(nodeShape);
        node.shape = nodeShape;
        node.dom = dom;
        node.linkPointsTypes = item.linkPointsTypes;
        nodeShape.classList.add("ve-node-shape");
        dom.setAttribute("class", `ve-node ${item.className || ""}`);
        dom.setAttribute("data-id", key);
        dom.setAttribute("transform", `translate(${item.x || 0},${item.y || 0})`);
        this.nodeG.appendChild(dom);
        this.nodes[item.uuid] = node;
        // 是否缓存
        this.tmpLinkPoints
            ? this.tmpLinkPoints.push(node)
            : this.addNodeLinkPoints(node);
        this.addNodeEvent(node);
        return node;
    }
    update() {
        for (const nodeId in this.nodes) {
            this.updateNode(nodeId, true);
        }
    }
    /**
     * 根据数据更新节点位置
     */
    updateNode(input, rerenderShape = false) {
        let nodeData;
        if (typeof input !== "object") {
            nodeData = this.nodes[input].data;
        }
        else {
            nodeData = input;
        }
        if (!nodeData)
            return;
        const { uuid } = nodeData;
        const node = this.nodes[uuid];
        const shape = this.shapes[nodeData.type || "default"];
        if (rerenderShape) {
            const nodeShape = shape.render(node);
            node.shape = nodeShape;
            node.dom.prepend(nodeShape);
        }
        setAttrs(node.dom, {
            class: `ve-node ${nodeData.className || ""} ${this.actives[uuid] ? "active" : ""}`,
        });
        node.dom.setAttribute("transform", `translate(${nodeData.x} ,${nodeData.y})`);
        node.data = nodeData;
        if (rerenderShape) {
            node.shapeBBox = undefined;
            node.linkPoints.forEach((linkPoint) => {
                shape.renderLinkPoint(node, linkPoint);
            });
        }
    }
    /**
     * 给节点添加连线点
     * @param {node} node
     */
    addNodeLinkPoints(node) {
        node.linkPoints = [];
        const shape = this.shapes[node.data.type || "default"];
        node.linkPointsTypes = node.linkPointsTypes || this.shapes[node.data.type].linkPoints;
        if (!node.linkPointsTypes) {
            return false;
        }
        node.linkPointsTypes.forEach((linkPoint, index) => {
            if (shape.renderLinkPoint) {
                const instancePoint = {
                    data: Object.assign({}, linkPoint),
                    dom: undefined,
                    x: 0,
                    y: 0,
                    nodeId: node.data.uuid,
                    index
                };
                shape.renderLinkPoint(node, instancePoint);
                node.linkPoints.push(instancePoint);
                setAttrs(instancePoint.dom, {
                    "data-node-id": node.data.uuid,
                    "data-index": index,
                });
                node.dom.append(instancePoint.dom);
                this.graph.line.addLinkPointEvent(instancePoint);
            }
        });
    }
    updateLinkPoints(node) {
        var _a;
        (_a = node.linkPoints) === null || _a === void 0 ? void 0 : _a.forEach((point) => {
            point.dom.remove();
            point = null;
        });
        this.addNodeLinkPoints(node);
    }
    panNode(node, dx, dy) {
        const { controller } = this.graph.editor;
        const { scale } = controller;
        let x = (node.startX || 0) + dx / scale;
        let y = (node.startY || 0) + dy / scale;
        const newXY = this.graph.anchorLine.check(x, y);
        if (newXY) {
            x = newXY.x;
            y = newXY.y;
        }
        node.data.x = x;
        node.data.y = y;
        node.linkPoints.forEach((circle) => {
            this.shapes[node.data.type || "default"].renderLinkPoint(node, circle);
        });
        node.dom.setAttribute("transform", `translate(${x} ,${y})`);
    }
    /**
     * 给节点添加事件
     * @param {*} node
     */
    addNodeEvent(node) {
        node._destroys.push(SVGHelper.drag(node.dom, (e) => {
            const dx = e.clientX - node.clientX;
            const dy = e.clientY - node.clientY;
            if (this.actives[node.data.uuid]) {
                for (let key in this.actives) {
                    this.panNode(this.actives[key], dx, dy);
                    /**
                     * @event Graph#node:move on node move event
                     */
                    this.graph.fire("node:move", {
                        node: this.actives[key],
                    });
                }
            }
            else {
                this.panNode(node, dx, dy);
                /**
                 * @event Graph#node:move
                 */
                this.graph.fire("node:move", { node });
            }
        }, (e) => {
            // 拖动时是否有选中其他
            for (let key in this.actives) {
                this.actives[key].startX = this.actives[key].data.x;
                this.actives[key].startY = this.actives[key].data.y;
            }
            this.graph.anchorLine.makeAllAnchors(node);
            node.clientX = e.clientX;
            node.clientY = e.clientY;
            // 提前获得bbox避免重绘
            node.startX = node.data.x;
            node.startY = node.data.y;
            /**
            * @event Graph#node:startmove start move
            */
            this.graph.fire("node:startmove", { node });
        }, (e) => {
            this.graph.anchorLine.hidePath();
            if (node.startX === node.data.x &&
                node.startY === node.data.y) {
                return false;
            }
            /**
            * @event Graph#node:endmove end move
            */
            this.graph.fire("node:endmove", { node });
            this.graph.fire("node:change", { node });
        }));
        node.dom.addEventListener("click", (event) => {
            if (Math.abs(event.clientX - node.clientX) < 2 &&
                Math.abs(event.clientY - node.clientY) < 2) {
                if (event.shiftKey) {
                    if (this.actives[node.data.uuid]) {
                        this.unActive(node);
                    }
                    else {
                        this.setActive(node);
                    }
                }
                else {
                    this.unActive();
                    this.setActive(node);
                }
                /**
                 * @event Graph#node:click - 节点点击事件
                 */
                this.graph.fire("node:click", { node, event });
            }
        });
        node.dom.addEventListener("mouseenter", (event) => {
            /**
             * @event Graph#node:mouseenter - 节点进入事件
             */
            this.graph.fire("node:mouseenter", { node, event });
        });
        node.dom.addEventListener("mouseleave", (event) => {
            /**
             * @event Graph#node:mouseleave
             */
            this.graph.fire("node:mouseleave", { node, event });
        });
    }
    setActive(node) {
        const nodes = node
            ? {
                [node.data.uuid]: node,
            }
            : this.nodes;
        for (let key in nodes) {
            node = nodes[key];
            node.dom.classList.add("active");
            setAttrs(node.shape, {
                filter: "url(#ve-black-shadow)",
            });
            this.actives[node.data.uuid] = node;
        }
        /**
         * @event Graph#node:unactive
         */
        this.graph.fire("node:active", { nodes });
    }
    unActive(node) {
        if (node) {
            delete this.actives[node.data.uuid];
            this.unActiveNode(node);
        }
        else {
            for (let key in this.actives) {
                this.unActiveNode(this.actives[key]);
            }
            this.actives = {};
        }
        /**
         * @event Graph#node:unactive
         */
        this.graph.fire("node:unactive", { node: node });
    }
    unActiveNode(node) {
        node.dom.classList.remove("active");
        setAttrs(node.dom, {
            filter: null,
        });
    }
    /**
     *
     */
    clear() {
        const { nodes } = this;
        clearTimeout(this.timeout);
        for (let key in nodes) {
            this.deleteNode(nodes[key].data, true);
        }
    }
}
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
class Event {
    constructor() {
        this.events = {};
        this.dispatch = this.fire;
    }
    /**
     * 箭头
     */
    on(event, func, index) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        index = index || this.events[event].length;
        this.events[event].push({ index, func });
        // 按照index顺序执行
        this.events[event].sort((a, b) => a.index > b.index);
    }
    fire(event, data) {
        const events = this.events[event] || [];
        try {
            events.forEach((item) => {
                item.func(data);
            });
        }
        catch (e) {
            console.warn(e);
        }
    }
    /**
     * 关闭绑定的事件
     */
    off(event, offFunc) {
        if (!offFunc) {
            this.events[event] = [];
        }
        else {
            this.events[event] = this.events[event].filter((func) => offFunc !== func.func);
        }
    }
    /**
     * 清空
     */
    clear() {
        delete this.events;
    }
}

;// CONCATENATED MODULE: ./src/Utils/path.ts
class Path {
    constructor(d) {
        this.d = d;
    }
    getTotalLength() {
        return this.getLength(this.d);
    }
    getPointAtLength(length) {
        return this.getLength(this.d, length);
    }
    getLength(d, length) {
        const path = this.path2curve(d);
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
    }
    path2curve(path) {
        let p = this.pathToAbsolute(path), attrs = {
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
            let seg = p[i], seglen = seg.length;
            attrs.x = seg[seglen - 2];
            attrs.y = seg[seglen - 1];
            attrs.bx = parseFloat(seg[seglen - 4]) || attrs.x;
            attrs.by = parseFloat(seg[seglen - 3]) || attrs.y;
        }
        return p;
    }
    pathToAbsolute(pathString) {
        const pathArray = this.parsePathString(pathString);
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
                        for (let j = 1, jj = pa.length; j < jj; j++) {
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
    }
    parsePathString(d) {
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
            d.replace(Path.pathCommand, (a, b, c) => {
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
    }
}
Path.pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi;
Path.tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi;
Path.pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi;
const PI = Math.PI;
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
function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z = 1) {
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







// makeLineSort by line's direction & rank to make the same direction be close
function makeLineSort(links) {
    // update link sort
    const sourceMap = {};
    links.forEach((link) => {
        const sourceId = link.from;
        const targetId = link.to;
        const sourceCommonId = `${sourceId}=>${targetId}`;
        const targetCommonId = `${targetId}=>${sourceId}`;
        const linkArr = sourceMap[sourceCommonId] || sourceMap[targetCommonId];
        if (!linkArr) {
            sourceMap[sourceCommonId] = [link];
        }
        else if (sourceMap[sourceCommonId]) {
            linkArr.unshift(link);
        }
        else if (sourceMap[targetCommonId]) {
            linkArr.push(link);
        }
    });
    // update link's graphIndex
    // 0 = only one line
    // if(source!==target)
    // -  unseem direction line
    // +  seem direction line
    Object.keys(sourceMap).forEach((key) => {
        if (sourceMap[key].length > 1) {
            const source = sourceMap[key][0].from;
            let status = true;
            let number = 1;
            while (sourceMap[key].length) {
                const link = status ? sourceMap[key].pop() : sourceMap[key].shift();
                link.graphIndex = number;
                // check direction
                if (link.from !== source) {
                    link.graphIndex *= -1;
                }
                number++;
                status = !status;
            }
        }
        else {
            const link = sourceMap[key][0];
            if (link.from === link.to) {
                link.graphIndex = 1;
            }
            else {
                link.graphIndex = 0;
            }
        }
    });
}

;// CONCATENATED MODULE: ./src/Shape/Lines/Line.ts




const DefaultLine = {
    arcRatio: 4,
    selfLoopRatio: 4,
    selfLoopRadius: 30,
    adsorb: [20, 20],
    startSpace: 8,
    endSpace: 8,
    render(line) {
        const { from, to, data } = line;
        const pathString = this.makePath(from, to, line);
        const shape = line.shape ? line.shape : SVGHelper.group();
        line.shape = shape;
        const path = line.path ? line.path : (line.path = SVGHelper.path());
        const shadowPath = line.shadowPath
            ? line.shadowPath
            : (line.shadowPath = SVGHelper.path());
        setAttrs(path, Object.assign({ d: pathString, class: "ve-line-path", "stroke-dasharray": "10", fill: "none", "stroke-width": 2, "pointer-events": "visiblepainted", stroke: "rgba(178,190,205,0.7)" }, (data.style || {})));
        setAttrs(shadowPath, {
            d: pathString,
            stroke: "transparent",
            fill: "none",
            "pointer-events": "visiblestroke",
        });
        line.pathData = new Path(pathString);
        shadowPath.setAttribute("class", "ve-shdow-path");
        animate(10, 0, (val) => setAttrs(path, {
            "stroke-dasharray": `${val}`,
        }), 300);
        shape.appendChild(shadowPath);
        shape.appendChild(path);
        this.renderLabel && this.renderLabel(line);
        return shape;
    },
    makePath(from, to, line) {
        const start = { x: from.x, y: from.y, };
        const end = { x: to.x, y: to.y, };
        let startControlPoint = { x: start.x, y: start.y };
        let endControlPoint = { x: end.x, y: end.y };
        const startSpace = this.startSpace; // 顶部距离node节点的距离
        const endSpace = this.endSpace; // 底部距离node节点的距离
        const startAngle = this.getPointAngle(from);
        const endAngle = this.getPointAngle(to);
        start.x += startSpace * Math.cos(startAngle);
        start.y += startSpace * Math.sin(startAngle);
        end.x += endSpace * Math.cos(endAngle);
        end.y += endSpace * Math.sin(endAngle);
        let path = '';
        const pathString = `M${from.x} ${from.y} T ${start.x} ${start.y}`;
        const toPointString = `${end.x} ${end.y} T ${to.x} ${to.y} `;
        if (from.nodeId === to.nodeId) {
            const selfLoopIndex = this.getSelfLoopLineIndex(line);
            const angle = (from.index === to.index) ? 0 : (Math.PI / (this.selfLoopRadius / 10 + selfLoopIndex));
            const dis = Math.sqrt(Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2));
            let radius = (dis / 2) / Math.sin(angle / 2);
            if (!radius) { // when from point and to point are the same
                radius = (selfLoopIndex / this.selfLoopRatio + 1) * this.selfLoopRadius;
                const topPos = {
                    x: start.x + radius * 2 * Math.cos(startAngle),
                    y: start.y + radius * 2 * Math.sin(startAngle),
                };
                path = `M${from.x} ${from.y} L${start.x} ${start.y} M${start.x} ${start.y} A ${radius} ${radius} 0 1 0 ${topPos.x} ${topPos.y}`;
                path += ` M${topPos.x} ${topPos.y} A ${radius} ${radius} 0 1 0 ${end.x} ${end.y} L${to.x} ${to.y}`;
            }
            else {
                path = `M${from.x} ${from.y} A ${radius} ${radius} 0 1 0 ${end.x} ${end.y} L${to.x} ${to.y}`;
            }
        }
        else {
            const offsetLength = Math.sqrt(Math.pow(start.x - end.x, 2) + Math.pow(start.y - end.y, 2)) / this.arcRatio; // 连接点的距离的一半作为控制点的长度
            startControlPoint.x += Math.cos(startAngle) * offsetLength;
            startControlPoint.y += Math.sin(startAngle) * offsetLength; // svg坐标系倒置需要给y坐标加负号
            endControlPoint.x += Math.cos(endAngle) * offsetLength;
            endControlPoint.y += Math.sin(endAngle) * offsetLength; // svg坐标系倒置需要给y坐标加负号
            path = `${pathString}C${startControlPoint.x} ${startControlPoint.y} ${endControlPoint.x} ${endControlPoint.y} ${toPointString}`;
        }
        line.bezierData = {
            from: start,
            to: end,
            startControlPoint,
            endControlPoint,
        };
        line.data.fromX = from.x;
        line.data.fromY = from.y;
        line.data.toX = to.x;
        line.data.toY = to.y;
        return path;
    },
    getSelfLoopLineIndex(line) {
        const { from, to } = line;
        const graph = this.graph;
        let index = 0;
        for (const lineId in graph.line.lines) {
            const each = graph.line.lines[lineId].data;
            if (each.from === each.to && each.from === from.nodeId && each.fromPoint === from.index && each.toPoint === to.index) {
                if (lineId === line.data.uuid) {
                    break;
                }
                index++;
            }
        }
        return index;
    },
    // get Angle for point in svg coordinate system 
    getPointAngle(pointNode) {
        const graph = this.graph;
        const node = graph.node.nodes[pointNode.nodeId];
        const p = [pointNode.data.x, pointNode.data.y];
        let c = [0.5, 0.5];
        if (pointNode.data.isPixel) {
            c = [node.shapeBBox.width / 2, node.shapeBBox.height / 2];
        }
        const a = [p[0] - c[0], p[1] - c[1]];
        let angle = Math.atan(a[1] / a[0]) + (a[0] < 0 ? Math.PI : 0);
        angle %= Math.PI * 2;
        if (angle > -Math.PI / 4 && angle < Math.PI / 4) {
            return 0;
        }
        else if (angle > Math.PI / 4 && angle < Math.PI * 3 / 4) {
            return Math.PI / 2;
        }
        else if (angle > Math.PI * 5 / 4 && angle < Math.PI * 7 / 4 || (angle < -Math.PI / 4)) {
            return -Math.PI / 2;
        }
        else {
            return Math.PI;
        }
    },
    renderArrow(line) {
        const { to } = line;
        const angle = this.getPointAngle(to);
        const pathString = `M${0} ${0}L${10} ${5}L${10} ${-5}Z`;
        const path = line.arrow ? line.arrow : SVGHelper.path();
        // 进行角度的中心变换
        const matrix = create();
        translate(matrix, matrix, [to.x, to.y]);
        rotate(matrix, matrix, angle);
        setAttrs(path, Object.assign({ class: "ve-line-arrow", d: pathString, fill: "rgba(178,190,205,0.7)", transform: `matrix(${matrix.join(",")})` }, line.data.arrowStyle));
        return path;
    },
    /** 是否渲染文字
     */
    renderLabel(line) {
        let { from, to, pathData, data: { label, labelCfg = {} }, } = line;
        if (!label) {
            if (line.label) {
                line.label.labelGroup.remove();
                line.label = null;
            }
            return null;
        }
        const totalLabel = label;
        // label 样式
        const { refX = 0, refY = 0, autoRotate, showNum = 20, style = {
            fill: "#333",
            stroke: "#fff",
            fontSize: "12px",
        }, } = labelCfg || {};
        const point = pathData.getPointAtLength(pathData.getTotalLength() / 2);
        let { x: xPoint, y: yPoint } = point || {};
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
        }
        line.shape.appendChild(line.label.labelGroup);
        const { text, textRect, textBBox, oldText, labelGroup } = line.label;
        const x = xPoint + (refX || 0);
        const y = yPoint + (refY || 0);
        text.textContent = label;
        setAttrs(text, {
            text: label || "",
            fill: style.fill,
            fontSize: style.fontSize,
            textAnchor: "middle",
            dominantBaseline: "middle",
            x,
            y,
        });
        if (!textBBox || oldText !== label) {
            line.oldText = label;
            line.label.textBBox = text.getBBox();
        }
        // 性能优化
        const { width, height } = line.label.textBBox;
        setAttrs(line.label.textRect, {
            fill: style.stroke,
            width,
            height,
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
            let angle = SVGHelper.getAngle(from, to);
            if (from.x < to.x || from.x === to.x) {
                angle += 180;
            }
            setAttrs(labelGroup, {
                transform: `rotate(${angle},${xPoint + (refX || 0)},${yPoint + (refY || 0)})`,
            });
        }
        return labelGroup;
    },
    checkNewLine(data) {
        const { from, to } = data;
        if (from === to) {
            return false;
        }
        return true;
    },
};
/* harmony default export */ const Lines_Line = (DefaultLine);

;// CONCATENATED MODULE: ./src/Shape/Lines/PolyLine.ts
/**
 * @interface PolyLine
 * @implements {DefaultLine}
 */


const PolyLine = Object.assign(Object.assign({}, Lines_Line), { startSpace: 1, arcRadius: 5, lineDistance: 50, makePath(from, to, line) {
        const start = { x: from.x, y: from.y, };
        const end = { x: to.x, y: to.y, };
        const startSpace = this.startSpace; // 顶部距离node节点的距离
        const endSpace = this.endSpace; // 底部距离node节点的距离
        const startAngle = this.getPointAngle(from);
        const endAngle = this.getPointAngle(to);
        start.x += startSpace * Math.cos(startAngle);
        start.y += startSpace * Math.sin(startAngle);
        end.x += endSpace * Math.cos(endAngle);
        end.y += endSpace * Math.sin(endAngle);
        const disX = Math.abs(end.x - start.x);
        const disY = Math.abs(end.y - start.y);
        const lineDistanceY = this.lineDistance || (disY * .5);
        const lineDistanceX = this.lineDistance || (disX * .5);
        const paths = [{
                x: start.x + lineDistanceX * Math.cos(startAngle) * (disX > 0 ? 1 : -1),
                y: start.y + lineDistanceY * Math.sin(startAngle),
                type: "L"
            }, {
                x: end.x + (disX - lineDistanceX) * Math.cos(endAngle) * (disX > 0 ? 1 : -1),
                y: end.y + (disY - lineDistanceY) * Math.sin(endAngle),
                type: "L"
            }];
        if (this.arcRadius !== 0 && (start.x !== end.x && start.y !== end.y)) {
            /**
             *   b-d----a
             *   |
             *   e
             *   |
             *   c
             */
            const a = Object.assign({}, paths[0]);
            const b = Object.assign({}, paths[1]);
            const c = Object.assign({}, end);
            const cb = normalize({
                x: b.x - c.x,
                y: b.y - c.y,
            });
            const ab = normalize({
                x: b.x - a.x,
                y: b.y - a.y,
            });
            const d = {
                x: b.x - ab.x * this.arcRadius,
                y: b.y - ab.y * this.arcRadius,
            };
            const e = {
                x: b.x - cb.x * this.arcRadius,
                y: b.y - cb.y * this.arcRadius,
            };
            // use cross product to determine clockwise or anti-clockwise
            // crossProduct = cb*ab*sin(theta),  theta is the angle between cb and ab
            const crossVal = cb.x * ab.y - cb.y * ab.x;
            const clockwise = crossVal > 0 ? 1 : 0;
            const arcPath = `L${d.x} ${d.y} A${this.arcRadius} ${this.arcRadius} 0 0 ${clockwise} ${e.x} ${e.y} `;
            paths[paths.length - 1] = {
                path: arcPath,
            };
        }
        let path = `M${start.x} ${start.y} `;
        paths.map((item) => {
            if (item.path) {
                path += item.path;
            }
            else {
                path += `L${item.x} ${item.y} `;
            }
        });
        path += `L${end.x} ${end.y}`;
        return path;
    } });
/* harmony default export */ const Lines_PolyLine = (PolyLine);

;// CONCATENATED MODULE: ./src/Shape/Lines/ForceLine.ts






/**
 * notice: only for circle node, cause the force line is render by circle-node's radius
 */
const ForceLine = Object.assign(Object.assign({}, Lines_Line), { endSpace: 12, startSpace: 3, selfLoopRadius: 70, curvatrueRatio: 30, radius: 30, // the radius of the node; notice: ForceLine only support circle node
    makePath(from, to, line) {
        let start = { x: from.x, y: from.y, };
        let end = { x: to.x, y: to.y, };
        let startControlPoint = { x: start.x, y: start.y };
        let endControlPoint = { x: end.x, y: end.y };
        let path = '';
        if (from.nodeId === to.nodeId) {
            const selfLoopIndex = this.getSelfLoopLineIndex(line);
            const offsetLength = ((selfLoopIndex + 1) * this.selfLoopRadius + this.radius);
            startControlPoint = {
                x: start.x - offsetLength * Math.cos(Math.PI / 4),
                y: start.y - offsetLength * Math.sin(Math.PI / 4),
            };
            endControlPoint = {
                x: end.x + offsetLength * Math.cos(Math.PI / 4),
                y: end.y - offsetLength * Math.sin(Math.PI / 4),
            };
            path = `M${start.x} ${start.y} C ${startControlPoint.x} ${startControlPoint.y} ${endControlPoint.x} ${endControlPoint.y} ${end.x} ${end.y}`;
        }
        else {
            const graph = this.graph;
            const nodes = graph.node.nodes;
            const startNode = nodes[from.nodeId];
            const endNode = nodes[to.nodeId];
            const angle = Math.atan((to.y - from.y) / (to.x - from.x)) + ((to.x - from.x) < 0 ? Math.PI : 0);
            const startOffsetLength = this.radius + this.startSpace; // start offset length
            const endOffsetLength = this.radius + this.endSpace; // end offset length
            start = {
                x: startNode.data.x + this.radius + startOffsetLength * Math.cos(angle),
                y: startNode.data.y + this.radius + startOffsetLength * Math.sin(angle),
            };
            end = {
                x: endNode.data.x + this.radius - endOffsetLength * Math.cos(angle),
                y: endNode.data.y + this.radius - endOffsetLength * Math.sin(angle),
            };
            const start2endVec = {
                x: end.x - start.x,
                y: end.y - start.y,
            };
            const normal = normalize(start2endVec);
            const centerNormal = {
                x: -normal.y,
                y: normal.x
            };
            const length = getVectorLength(start2endVec);
            const graphIndex = line.data.graphIndex || 0;
            const direction = graphIndex % 2 === 0;
            const curvature = (direction ? 1 : -1) * (graphIndex > 0 ? 1 : -1) * (Math.ceil(Math.abs(graphIndex) / 2));
            if (curvature === 0) {
                startControlPoint = Object.assign({}, start);
                endControlPoint = Object.assign({}, end);
            }
            else {
                startControlPoint = {
                    x: (from.x + to.x) * .5 + centerNormal.x * this.curvatrueRatio * curvature,
                    y: (from.y + to.y) * .5 + centerNormal.y * this.curvatrueRatio * curvature,
                };
                endControlPoint = startControlPoint;
                const bezierLine = new Path(`M${from.x} ${from.y} C ${startControlPoint.x} ${startControlPoint.y} ${endControlPoint.x} ${endControlPoint.y} ${to.x} ${to.y}`);
                start = bezierLine.getPointAtLength(startOffsetLength);
                end = bezierLine.getPointAtLength(bezierLine.getTotalLength() - endOffsetLength);
            }
            path = `M${start.x} ${start.y} Q ${startControlPoint.x} ${startControlPoint.y} ${end.x} ${end.y}`;
        }
        line.bezierData = {
            from: start,
            to: end,
            startControlPoint,
            endControlPoint,
        };
        return path;
    },
    renderArrow(line) {
        const { bezierData } = line;
        const { from, to } = bezierData;
        let coord, angle;
        // self loop
        if (line.from.nodeId === line.to.nodeId) {
            const point = line.pathData.getPointAtLength(line.path.getTotalLength() - this.radius - 10);
            angle = point.alpha / 180 * Math.PI;
            coord = point;
        }
        else {
            const point = line.pathData.getPointAtLength(line.path.getTotalLength());
            angle = point.alpha / 180 * Math.PI;
            coord = to;
        }
        const pathString = `M${0} ${5}L${0} ${-5}L${-10} ${0}Z`;
        const path = line.arrow ? line.arrow : SVGHelper.path();
        // 进行角度的中心变换
        const matrix = create();
        translate(matrix, matrix, [coord.x, coord.y]);
        rotate(matrix, matrix, angle);
        setAttrs(path, Object.assign({ class: "ve-line-arrow", d: pathString, fill: "rgba(178,190,205,0.7)", transform: `matrix(${matrix.join(",")})` }, line.data.arrowStyle));
        return path;
    },
    checkNewLine(data) {
        return true;
    } });
/* harmony default export */ const Lines_ForceLine = (ForceLine);

;// CONCATENATED MODULE: ./src/Shape/Line.ts






class Line {
    constructor(graph) {
        this.tempLineRender = {
            render: () => {
                const path = SVGHelper.path();
                this.paper.appendChild(path);
                setAttrs(path, {
                    stroke: "#abc",
                    "stroke-dasharray": "10 10",
                });
                return path;
            },
            renderPath: ({ fromX = 0, fromY = 0, x = 0, y = 0 }, line) => {
                setAttrs(line.dom, {
                    d: `M${fromX} ${fromY}L${x} ${y}`,
                });
            },
        };
        /**
         * 更新线为
         */
        this.updateActiveLine = (instanceLine) => {
            var _a;
            const { hoverLinkPoint } = this;
            const { node: { nodes }, } = this.graph;
            const { data } = instanceLine;
            const beforeData = Object.assign({}, data);
            const { type = "default", uuid } = data;
            if (hoverLinkPoint) {
                const to = hoverLinkPoint.nodeId;
                const toNode = nodes[data.to];
                const toPoint = hoverLinkPoint.index;
                if (this.shapes[type].checkNewLine(Object.assign(Object.assign({}, data), { to,
                    toPoint }), this.graph.editor) &&
                    !(data.to == to && toPoint == data.toPoint)) {
                    toNode.fromLines.delete(uuid);
                    Object.assign(data, { to, toPoint });
                    // 删除节点入口关联的线，给新链接的节点加上入口线
                    nodes[to].fromLines.add(uuid);
                    /**
                     * @event Graph#line:change
                     */
                    this.graph.fire("line:change", {
                        line: instanceLine,
                        type: "change",
                        before: beforeData,
                    });
                }
                (_a = hoverLinkPoint === null || hoverLinkPoint === void 0 ? void 0 : hoverLinkPoint.dom) === null || _a === void 0 ? void 0 : _a.classList.remove("hover");
            }
            this.updateLine(uuid);
        };
        /**
         * 检查是否生成新线
         */
        this.checkNewLine = () => {
            const { hoverLinkPoint } = this;
            if (hoverLinkPoint) {
                const toNodeId = hoverLinkPoint.nodeId;
                const toPoint = hoverLinkPoint.index;
                const data = Object.assign(this.tempLine.data, {
                    uuid: (0,external_uuid_.v1)(),
                    to: toNodeId,
                    toPoint,
                });
                if (this.lines[data.uuid])
                    return;
                this.graph.fire("line:beforeadd", { data });
                if (this.shapes[data.type || "default"].checkNewLine(data, this.graph.editor)) {
                    this.addLine(data);
                }
                hoverLinkPoint === null || hoverLinkPoint === void 0 ? void 0 : hoverLinkPoint.dom.classList.remove("hover");
                this.hoverLinkPoint = undefined;
            }
        };
        // 计算磁吸
        this.calcLinkPoint = (x, y, adsorb = [20, 20]) => {
            var _a;
            const newXY = this.allLinkPoints.find((item) => {
                var _a, _b;
                if (Math.abs(x - item.x) < adsorb[0] &&
                    Math.abs(y - item.y) < adsorb[1]) {
                    (_a = this.hoverLinkPoint) === null || _a === void 0 ? void 0 : _a.dom.classList.remove("hover");
                    this.hoverLinkPoint = item;
                    (_b = item.dom) === null || _b === void 0 ? void 0 : _b.classList.add("hover");
                    return item;
                }
            });
            if (!newXY) {
                (_a = this.hoverLinkPoint) === null || _a === void 0 ? void 0 : _a.dom.classList.remove("hover");
            }
            return newXY;
        };
        // 生成磁吸
        this.makeAdsorbPoints = () => {
            const { nodes } = this.graph.node;
            this.allLinkPoints = [];
            for (let key in nodes) {
                const node = nodes[key];
                const { linkPoints } = node;
                linkPoints.forEach((item) => {
                    this.allLinkPoints.push(item);
                });
            }
        };
        /**
         * 节点的新增线逻辑
         */
        this.addLinkPointEvent = (point) => {
            if (this.graph.editor.config.mode === "view")
                return;
            const { nodes } = this.graph.node;
            const node = nodes[point.nodeId];
            let startX;
            let startY;
            SVGHelper.drag(point.dom, (e) => {
                const { tempLine: { data: { fromX, fromY }, }, } = this;
                const { controller } = this.graph.editor;
                const { scale } = controller;
                const dx = e.clientX - startX;
                const dy = e.clientY - startY;
                let x = (fromX || 0) + dx / scale + 1;
                let y = (fromY || 0) + dy / scale - 1;
                // 计算磁吸坐标
                const { adsorb } = this.graph.node.shapes[node.data.type];
                const newXY = this.calcLinkPoint(x, y, adsorb);
                if (newXY) {
                    x = newXY.x;
                    y = newXY.y;
                }
                this.tempLineRender.renderPath({
                    fromX,
                    fromY,
                    x,
                    y,
                }, this.tempLine);
                e.stopPropagation();
                this.graph.fire("line:dragging");
            }, (e) => {
                startX = e.clientX;
                startY = e.clientY;
                this.makeAdsorbPoints();
                this.tempLine = {
                    dom: this.tempLineRender.render(),
                    data: {
                        from: node.data.uuid,
                        to: undefined,
                        fromPoint: point.index,
                        fromX: point.x,
                        fromY: point.y,
                    },
                };
                this.graph.fire("line:drag");
                e.stopPropagation();
            }, (e) => {
                const { hoverLinkPoint } = this;
                let toNode = null;
                if (hoverLinkPoint) {
                    toNode = hoverLinkPoint;
                }
                this.checkNewLine();
                this.tempLine.dom.remove();
                /**
                 * @event Graph#line:drop
                 */
                this.graph.fire("line:drop", {
                    fromNode: node,
                    toNodePoint: toNode,
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
            forceLine: Lines_ForceLine
        };
        this.listenEvent();
    }
    // 监听事件
    listenEvent() {
        this.graph.on("paper:click", () => {
            this.unActiveLine();
        });
        this.graph.on("node:click", () => {
            this.unActiveLine();
        });
    }
    /**
     * 添加线
     */
    addLine(data) {
        /**
         * @event Graph#line:beforeadd
         */
        this.graph.fire("line:beforeadd", { data, type: "add" });
        const line = this.renderLine(data);
        /**
         * @event Graph#line:add
         */
        this.graph.fire("line:add", { line, type: "add" });
    }
    /**
     * 跟下该node的线
     */
    updateByNode(node) {
        node.fromLines.forEach((lineId) => {
            this.updateLine(lineId, true);
        });
        node.toLines.forEach((lineId) => {
            this.updateLine(lineId, true);
        });
    }
    /**
     * 添加线
     */
    renderLine(lineData) {
        const key = lineData.uuid || (0,external_uuid_.v1)();
        const { nodes } = this.node;
        const shape = this.shapes[lineData.type || "default"];
        const { from, to, fromPoint = 0, toPoint = 0 } = lineData;
        const fromNode = nodes[from];
        const toNode = nodes[to];
        const fromPointNode = fromNode.linkPoints[fromPoint];
        const toPointNode = toNode.linkPoints[toPoint];
        const instanceLine = {
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
        const lineShape = shape.render(instanceLine);
        const arrow = shape.renderArrow(instanceLine);
        const g = SVGHelper.group(lineShape, arrow);
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
            class: `ve-line ${lineData.className || ""}`,
        });
        this.addToNodes(instanceLine);
        this.addLineEvents(instanceLine);
        this.lines[key] = instanceLine;
        this.lineG.appendChild(g);
        return instanceLine;
    }
    /**
     * redraw all lines
     */
    update() {
        Object.values(this.lines).forEach((line) => {
            this.updateLine(line.data.uuid);
        });
    }
    /**
     * 重绘某个线
     */
    updateLine(data, rerenderShape = true) {
        let lineId;
        let lineData;
        if (typeof data !== "string") {
            lineId = data.uuid;
            lineData = data;
        }
        else {
            lineId = data;
            lineData = this.lines[lineId].data;
        }
        const { nodes } = this.graph.node;
        const line = this.lines[lineId];
        const { data: { type, className = "", from, to, fromPoint = 0, toPoint = 0, }, } = line;
        line.from = nodes[from].linkPoints[fromPoint];
        line.to = nodes[to].linkPoints[toPoint];
        if (rerenderShape) {
            this.shapes[type || "default"].render(line);
            line.arrow = this.shapes[type || "default"].renderArrow(line);
            line.dom.setAttribute("class", `ve-line ${className || ""}`);
            Object.assign(line.data, lineData ? lineData : {});
        }
        else {
            Object.assign(line.data, lineData ? lineData : {});
        }
        if (this.activeLine === line) {
            this.setActiveLine(line);
        }
    }
    /**
     * 删除线
     */
    deleteLine(data, notEvent = false, byNode = false) {
        let line;
        if (typeof data === "string") {
            line = this.lines[data];
        }
        else {
            line = this.lines[data.uuid];
        }
        let uuid = line.data.uuid;
        const { nodes } = this.node;
        if (!line)
            return; //这里有可能被删除node时的关联删除线了
        delete this.lines[uuid];
        // 删除关联线
        const { from, to } = line.data;
        nodes[from] && nodes[from].toLines.delete(uuid);
        nodes[to] && nodes[to].fromLines.delete(uuid);
        !notEvent &&
            // 是否由删除节点触发的线删除操作
            /**
             * @event Graph#line:remove
             */
            this.graph.fire("line:remove", {
                line,
                uuid,
                before: line.data,
                byNode,
                type: "remove",
            });
        line.arrow.remove();
        line.arrow = null;
        line.dom.remove();
        this.activeLine = null;
    }
    /**
     * 注册线
     */
    registeLine(type, data) {
        this.shapes[type] = Object.assign({}, this.shapes["default"], data);
    }
    /**
     * 渲染
     */
    render(lines = {}) {
        Object.keys(lines).map((key) => {
            const item = lines[key];
            this.renderLine(item);
        });
    }
    addToNodes(instanceLine) {
        const { nodes } = this.graph.node;
        const { from, to } = instanceLine.data;
        const id = instanceLine.data.uuid;
        nodes[from].toLines.add(id);
        nodes[to].fromLines.add(id);
    }
    /**
     *
     */
    setActiveLine(line) {
        this.unActiveLine();
        this.activeLine = line;
        this.activeLine.dom.classList.add("active");
    }
    /**
     * 取消激活
     */
    unActiveLine() {
        if (this.activeLine) {
            this.activeLine.dom.classList.remove("active");
        }
        this.activeLine = null;
    }
    /**
     * 绑定线拖动事件
     */
    addLineEvents(g) {
        g.shape.addEventListener("mouseenter", (event) => {
            /**
             * @event Graph#line:mouseenter
             */
            this.graph.fire("line:mouseenter", { line: g, event });
        });
        g.shape.addEventListener("mouseleave", (event) => {
            /**
             * @event Graph#line:mouseleave
             */
            this.graph.fire("line:mouseleave", { line: g, event });
        });
        g.shape.addEventListener("click", (e) => {
            this.setActiveLine(g);
            /**
             * @event Graph#line:click
             */
            this.graph.fire("line:click", { line: g, event: e });
        });
        if (this.graph.editor.config.mode === "view")
            return;
        let startX;
        let startY;
        // 箭头拖拽
        SVGHelper.drag(g.arrow, (e) => {
            const { tempLine: { data: { fromX, fromY, toX, toY = 0 }, }, } = this;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            const { controller } = this.graph.editor;
            const { scale } = controller;
            let x = (toX || 0) + dx / scale + 1;
            let y = toY + dy / scale - 1;
            // 计算磁吸坐标
            const { adsorb } = this.graph.line.shapes[g.data.type || "default"];
            const newXY = this.calcLinkPoint(x, y, adsorb);
            if (newXY) {
                x = newXY.x;
                y = newXY.y;
            }
            this.tempLineRender.renderPath({
                fromX,
                fromY,
                x,
                y,
            }, this.tempLine);
            this.graph.fire("line:dragging");
        }, (e) => {
            const { data } = g;
            const { fromX = 0, fromY = 0, toX, toY, from, fromPoint, } = data;
            startX = e.clientX;
            startY = e.clientY;
            this.makeAdsorbPoints();
            g.dom.style.display = "none";
            data.status = "active";
            /**
             * @event Graph#line:drag
             */
            this.tempLine = {
                dom: this.tempLineRender.render(),
                data: {
                    from,
                    fromPoint,
                    fromX,
                    fromY,
                    to: null,
                    toX,
                    toY,
                },
            };
            this.graph.fire("line:drag");
        }, () => {
            g.dom.style.display = "block";
            this.tempLine.dom.remove();
            this.updateActiveLine(g);
            /**
             * @event Graph#line:drop
             */
            this.graph.fire("line:drop", { line: g });
        });
    }
    /**
     *
     */
    clear() {
        const { lines } = this;
        for (let key in lines) {
            this.deleteLine(lines[key].data, true);
        }
    }
}
/* harmony default export */ const Shape_Line = (Line);

;// CONCATENATED MODULE: ./src/Shape/AnchorLine.ts

/**
 * @class
 */
class AchorLine {
    constructor(graph) {
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
    makeAllAnchors(origin) {
        if (this.hideAchorLine)
            return;
        this.node = origin;
        const anchors = [];
        const { nodes } = this.graph.node;
        for (let key in nodes) {
            const node = nodes[key];
            const bbox = node.shape.getBBox(); // 缓存bbox
            node.shapeBBox = bbox;
            const { x, y, width, height } = bbox;
            anchors.push({
                x,
                y,
            }, {
                x: x + width,
                y,
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
    }
    checkAchor(x, y) {
        const { anchorXLength, anchorYLength } = this;
        const x5 = x % anchorXLength;
        const y5 = y % anchorYLength;
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
        return { x, y };
    }
    /**
     * 画节点
     */
    check(x, y) {
        if (!this.hideAchorLine) {
            this.node.shapeBBox = this.node.shapeBBox || this.node.shape.getBBox();
            const { width, height } = this.node.shapeBBox;
            const tl = { x, y };
            const tr = { x: x + width, y };
            const br = { x: x + width, y: y + height };
            const bl = { x, y: y + height };
            const cc = { x: x + width / 2, y: y + height / 2 };
            const nowPoints = [tl, tr, br, bl, cc];
            const final = { x: 0, y: 0 };
            let newXY = { x, y };
            let coordFlag = "";
            const anchor = this.anchors.find((anchor) => {
                return nowPoints.find((point, index) => {
                    const deltaY = anchor.y - point.y;
                    const deltaX = anchor.x - point.x;
                    if (Math.abs(deltaX) < this.anchorDistance) {
                        final.x = anchor.x;
                        newXY.x += deltaX;
                        coordFlag = "x";
                        return true;
                    }
                    if (Math.abs(deltaY) < this.anchorDistance) {
                        final.y = anchor.y;
                        newXY.y += deltaY;
                        coordFlag = "y";
                        return true;
                    }
                });
            });
            if (!anchor) {
                this.path.style.display = "none";
                if (!this.hideAchor)
                    return this.checkAchor(x, y);
                return { x, y };
            }
            // 中心点坐标补齐
            if (final.x === undefined) {
                final.x = cc.x;
            }
            else {
                final.y = cc.y;
            }
            const path = `M${final.x},${final.y} L${anchor.x},${anchor.y}`;
            this.path.setAttribute("d", path);
            this.path.style.display = "block";
            if (!this.hideAchor) {
                const anchorXY = this.checkAchor(newXY.x, newXY.y);
                anchorXY[coordFlag] = newXY[coordFlag];
                return anchorXY;
            }
            return newXY;
        }
        if (!this.hideAchor)
            return this.checkAchor(x, y);
        return { x, y };
    }
    /**
     * 隐藏线
     */
    hidePath() {
        this.path.style.display = "none";
    }
}
/* harmony default export */ const AnchorLine = (AchorLine);

;// CONCATENATED MODULE: ./src/Shape/Graph.ts






const backSvg = (__webpack_require__(27)/* ["default"] */ .Z);
class Graph extends Event {
    constructor(editor) {
        super();
        this.onKeyDown = (e) => {
            // 查看模式不能删除节点、线条；如果存在部分可操作则自己在业务中监听处理相关逻辑
            if (this.editor.config.mode === "view") {
                return;
            }
            if (["TEXTAREA", "INPUT"].indexOf(document.activeElement.tagName) >
                -1 &&
                document.activeElement.getAttribute("contenteditable") !== "false") {
                return;
            }
            if (e.key === "Backspace") {
                const deleteKeys = [];
                for (let key in this.node.actives) {
                    // 不触发事件
                    this.node.deleteNode(this.node.actives[key].data);
                    delete this.node.actives[key];
                    deleteKeys.push(key);
                }
                this.line.activeLine &&
                    this.line.deleteLine(this.line.activeLine.data);
                /**
                 * @event Graph#delete
                 * @type {Object}
                 */
                this.fire("delete", { event: e, deleteKeys });
            }
            if (e.keyCode === "C".charCodeAt(0) && (e.metaKey || e.ctrlKey)) {
                /**
                 * @event Graph#copy
                 * @type {Object}
                */
                if (!this.editor.config.disableCopy) {
                    this.fire("copy", { event: e });
                }
                return;
            }
            if (e.keyCode === "V".charCodeAt(0) && (e.metaKey || e.ctrlKey)) {
                /**
                 * @event Graph#paste
                 * @type {Object}
                */
                if (!this.editor.config.disableCopy) {
                    this.fire("paste", { event: e });
                }
                return;
            }
            if (e.keyCode === "Z".charCodeAt(0) &&
                (e.metaKey || e.ctrlKey) &&
                !e.shiftKey) {
                this.editor.schema.undo();
            }
            if (e.keyCode === "Z".charCodeAt(0) &&
                (e.metaKey || e.ctrlKey) &&
                e.shiftKey) {
                this.editor.schema.redo();
            }
            e.preventDefault();
            return false;
        };
        this.editor = editor;
        this.node = new Shape_Node(this);
        this.line = new Shape_Line(this);
        this.anchorLine = new AnchorLine(this);
        this.listenEvents();
        if (this.editor.config.showBackGrid) {
            this.addBack();
        }
    }
    addBack() {
        this.editor.container.querySelector(".ve-editor-back").style.backgroundImage = `url(${backSvg})`;
    }
    listenEvents() {
        this.on("node:move", ({ node }) => {
            this.line.updateByNode(node);
        });
        setAttrs(this.editor.svg, {
            tabindex: "0",
        });
        this.editor.svg.addEventListener("click", (e) => {
            if (e.target.tagName === "svg") {
                this.fire("paper:click", e);
            }
        });
        document.addEventListener("keydown", this.onKeyDown);
        this.on("line:drag", () => {
            this.linkStatus = "lineing";
            this.editor.paper.classList.add("ve-paper-lineing");
        });
        this.on("line:drop", () => {
            this.linkStatus = "none";
            this.editor.paper.classList.remove("ve-paper-lineing");
        });
    }
    render(data) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * @event Graph#beforeRender 渲染之前触发
             */
            this.fire("beforeRender");
            this.data = data;
            yield this.node.render(data.nodesMap);
            yield this.line.render(data.linesMap);
            /**
             * @event Graph#render  渲染后触发
             */
            this.fire("render");
        });
    }
    update() {
        this.node.update();
        this.line.update();
        /**
        * @event Graph#update  渲染后触发
        */
        this.fire("update");
    }
    /**
     * 清空画布
     */
    clearGraph() {
        this.line.clear();
        this.node.clear();
    }
    destroy() {
        this.clearGraph();
        this.clear();
        document.removeEventListener("keydown", this.onKeyDown);
    }
}
/* harmony default export */ const Shape_Graph = (Graph);

;// CONCATENATED MODULE: ./src/Utils/Controller.ts


/**
 * 控制器
 * @class
 * @extends Event
 */
class Controller extends Event {
    constructor(editor) {
        super();
        this.scaleRatio = 0.01;
        this.scale = 1;
        this.x = 0;
        this.y = 0;
        this.achors = [];
        this.disableScroll = false;
        this.onWheel = (e) => {
            if (this.status === "disabled") {
                return;
            }
            if (e.ctrlKey) {
                // 双指
                const newScale = Math.max(1 - e.deltaY * this.scaleRatio, 0.1);
                this.zoom(newScale, e.offsetX, e.offsetY);
            }
            else {
                if (this.disableScroll)
                    return;
                this.pan(-e.deltaX, -e.deltaY);
            }
            e.preventDefault();
        };
        this.panStart = (ev) => {
            if (ev.target.tagName !== "svg" ||
                this.status === "disabled") {
                return;
            }
            ev.preventDefault();
            this.startPosition = { x: ev.clientX, y: ev.clientY };
            this.svg.addEventListener("mousemove", this.panning);
        };
        this.panStop = (ev) => {
            ev.preventDefault();
            this.svg.removeEventListener("mousemove", this.panning);
            // this.svg.unmouseup(this.panStop);
            this.editor.fire("panEnd", { event: ev });
        };
        /**
         * 缩放
         * @param  {number} scale 当前基础上 缩放多少
         * @param  {number} cx=0 zoom 缩放中心点x
         * @param  {number} cy=0 zoom 缩放中心点y
         */
        this.zoom = (newScale, cx = 0, cy = 0) => {
            this.scale *= newScale;
            const dis = [
                (cx - this.x) * (newScale - 1),
                (cy - this.y) * (newScale - 1),
            ];
            this.x -= dis[0];
            this.y -= dis[1];
            this.update();
            this.editor.fire("zoom", { scale: newScale });
        };
        /**
         * 滚动到指定位置
         * @param {number} newScale
         */
        this.zoomTo = (newScale) => {
            this.scale = newScale;
            this.update();
        };
        /**
         * 做指定转换
         */
        this.transform = (newScale, x = 0, y = 0) => {
            this.scale = newScale;
            this.x = x;
            this.y = y;
            this.update();
            this.editor.fire("panning");
            this.editor.fire("zoom");
        };
        this.panning = (ev) => {
            ev.preventDefault();
            const p1 = { x: ev.clientX, y: ev.clientY };
            const p2 = this.startPosition;
            const deltaP = [p1.x - p2.x, p1.y - p2.y];
            this.x += deltaP[0];
            this.y += deltaP[1];
            this.update();
            this.startPosition = p1;
            this.editor.fire("panning", { event: ev });
        };
        this.editor = editor;
        this.paper = editor.paper;
        this.svg = editor.svg;
        this.listenEvents();
    }
    /**
     * auto fit to screen
     */
    autoFit(center = true, vertical = true) {
        const data = this.editor.schema.getData();
        setAttrs(this.paper, {
            transform: setTransform(this.scale, 0, 0),
        });
        this.paper.style.transition = "all 0.2s";
        const { width, height } = this.editor.dom.getBoundingClientRect();
        const bbox = this.paper.getBBox();
        const dx = ((width - bbox.width) / 2 - bbox.x);
        const dy = ((height - bbox.height) / 2 - bbox.y);
        data.nodes.forEach((node) => {
            if (center)
                node.x += dx;
            if (vertical)
                node.y += dy;
        });
        this.x = (width - width * this.scale) / 2;
        this.y = (height - height * this.scale) / 2;
        this.update();
        this.editor.graph.update();
        this.editor.fire("autofit", { data });
        setTimeout(() => {
            this.paper.style.transition = null;
        }, 200);
    }
    /**
     * auto fit to screen with scale
     */
    autoScale(padding = 40) {
        const { width, height } = this.editor.dom.getBoundingClientRect();
        const bbox = this.paper.getBBox();
        const scale = Math.max((bbox.width + padding) / width, (bbox.height + padding) / height);
        this.scale = 1 / Math.max(1, scale);
    }
    listenEvents() {
        this.svg.addEventListener("mousedown", this.panStart);
        this.svg.addEventListener("mouseup", this.panStop);
        this.svg.addEventListener("mouseleave", this.panStop);
        this.svg.addEventListener("wheel", this.onWheel);
    }
    clear() {
        this.svg.removeEventListener("mousedown", this.panStart);
        this.svg.removeEventListener("mouseup", this.panStop);
        this.svg.removeEventListener("mouseleave", this.panStop);
        this.svg.removeEventListener("wheel", this.onWheel);
    }
    /**
     * 禁用滚轮缩放
     */
    disableWheel() {
        this.svg.removeEventListener("wheel", this.onWheel);
    }
    /**
     * 禁用鼠标移动
     */
    disablePan() {
        this.svg.removeEventListener("mousedown", this.panStart);
    }
    /**
     * 移动到指定位置
     */
    pan(x, y) {
        this.x += x;
        this.y += y;
        this.update();
        this.editor.fire("panning");
    }
    /**
     * 移动到指定位置
     */
    moveTo(x, y) {
        this.x = x;
        this.y = y;
        this.update();
    }
    disable() {
        this.status = "disabled";
    }
    enable() {
        this.status = "enable";
    }
    /**
     * 更新最新的matrix
     */
    update() {
        setAttrs(this.paper, {
            transform: `matrix(${this.scale}, 0, 0, ${this.scale}, ${this.x}, ${this.y})`,
        });
    }
}
/* harmony default export */ const Utils_Controller = (Controller);

;// CONCATENATED MODULE: ./src/Model/History.ts
/**
 * History
 */
class History {
    constructor(schema) {
        this.index = -1;
        this.schemaList = [];
        this.schema = schema;
    }
    /**
     */
    push(data) {
        const json = JSON.stringify(data).trim();
        const last = this.schemaList[this.index];
        if (last === json) {
            return;
        }
        if (this.index !== -1 && this.index < (this.schemaList.length - 1)) { // 删除后面会被覆盖的历史记录
            this.schemaList.splice(this.index + 1, this.schemaList.length - this.index - 1);
        }
        this.schemaList.push(json);
        this.index++;
        this.schema.editor.fire("change");
    }
    pop() {
        this.schemaList.pop();
        this.index--;
        this.schema.editor.fire("change");
    }
    replace(index, data) {
        this.schemaList[this.index + index] = data;
    }
    // 重做
    redo() {
        if (this.index >= this.schemaList.length - 1) {
            return false;
        }
        this.schema.data = JSON.parse(this.schemaList[++this.index]);
        this.schema.editor.fire("change");
        return true;
    }
    // 撤销
    undo() {
        if (this.index < 1) {
            return false;
        }
        this.schema.data = JSON.parse(this.schemaList[--this.index]);
        this.schema.editor.fire("change");
        return true;
    }
    clear() {
        this.schemaList = [];
        this.index = -1;
    }
    reset() {
        if (this.schemaList.length <= 0) {
            return;
        }
        this.index = 0;
        this.schemaList = [this.schemaList[0]];
    }
}
/* harmony default export */ const Model_History = (History);

// EXTERNAL MODULE: external "dagre"
var external_dagre_ = __webpack_require__(987);
var external_dagre_default = /*#__PURE__*/__webpack_require__.n(external_dagre_);
;// CONCATENATED MODULE: ./src/Model/Schema.ts




class Schema {
    /**
     *
     * @param {VEditor} editor - VEditor实例
     */
    constructor(editor) {
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
     * format data with dagre
     */
    format() {
        const nodes = this.editor.graph.node.nodes;
        const lines = this.editor.graph.line.lines;
        const g = new (external_dagre_default()).graphlib.Graph();
        const option = Object.assign({
            nodesep: 50,
            rankdir: "TB",
            ranksep: 50,
            align: "UL",
        }, this.editor.config.dagreOption);
        g.setGraph(option);
        const { center = true } = this.editor.config.dagreOption;
        g.setDefaultEdgeLabel(function () {
            return {};
        });
        for (let key in nodes) {
            const node = nodes[key];
            const data = node.data;
            if (!data.width || !data.height) {
                const bbox = node.dom.getBBox();
                data.width = bbox.width;
                data.height = bbox.height;
            }
            g.setNode(key, Object.assign({}, data));
        }
        for (let key in lines) {
            const line = lines[key];
            const data = line.data;
            g.setEdge(data.from, data.to);
        }
        external_dagre_default().layout(g);
        g.nodes().forEach(function (key) {
            const nodeData = g.node(key);
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
            const node = nodes[nodeData.uuid];
            node.data.x = nodeData.x;
            node.data.y = nodeData.y;
        });
        // 触发format事件，保存历史
        this.editor.graph.update();
        /**
         * @event VEditor#format
         * @property {{data:VEditorData}} data
         */
        this.editor.fire("format", { data: this.makeNowDataMap() });
    }
    listenEvents() {
        const historyChangeEvents = [
            "node:change",
            "node:add",
            "line:change",
            "line:add",
            "line:remove",
            "delete",
        ];
        const editorEvents = ["autofit", "format"];
        historyChangeEvents.forEach((event) => {
            this.editor.graph.on(event, () => {
                this.history.push(this.makeNowDataMap());
            }, 9999);
        });
        editorEvents.forEach((event) => {
            this.editor.on(event, () => {
                this.history.push(this.makeNowDataMap());
            }, 9999);
        });
    }
    /**
     * 历史入栈最新数据
     */
    pushHistory() {
        this.history.push(this.makeNowDataMap());
    }
    /**
     * 历史出栈
     */
    popHistory() {
        this.history.pop();
    }
    /**
     * 获取当前最新的map
     * TODO: 数据引用有点混乱，应该去除掉nodesMap和linesMap，改为实时获取
     */
    makeNowDataMap() {
        const nodes = this.editor.graph.node.nodes;
        const lines = this.editor.graph.line.lines;
        let nodesMap = {};
        let linesMap = {};
        for (let uuid in nodes) {
            nodesMap[uuid] = nodes[uuid].data;
        }
        for (let uuid in lines) {
            linesMap[uuid] = lines[uuid].data;
        }
        this.data = {
            nodesMap,
            linesMap,
        };
        return this.data;
    }
    setData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.parseData(data); // 解析数据
            this.editor.graph.clearGraph();
            yield this.renderData();
            /**
             * @event VEditor#load
             * @type {Object}
             */
            this.editor.fire("load", data);
        });
    }
    setInitData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setData(data);
            this.history.clear();
            this.history.push(this.data);
        });
    }
    parseData({ nodes = [], lines = [] }) {
        let nodesMap = {};
        let linesMap = {};
        nodes.forEach((item) => {
            nodesMap[item.uuid] = item;
        });
        lines.forEach((item) => {
            const { uuid } = item;
            linesMap[uuid ? uuid : (0,external_uuid_.v1)()] = item;
        });
        this.data = {
            nodesMap,
            linesMap,
        };
    }
    /**
     * 渲染数据
     */
    renderData() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.editor.graph.render(this.data);
        });
    }
    /**
     * 重做
     */
    redo() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.history.redo()) {
                this.editor.graph.clearGraph();
                yield this.renderData();
                this.editor.fire("redo");
            }
        });
    }
    /**
     * 撤销
     */
    undo() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.history.undo()) {
                this.editor.graph.clearGraph();
                yield this.renderData();
                this.editor.fire("undo");
            }
        });
    }
    /**
     * 获取数据
     */
    getData() {
        this.makeNowDataMap();
        const { nodesMap, linesMap } = this.data;
        return {
            nodes: Object.keys(nodesMap).map((key) => nodesMap[key]),
            lines: Object.keys(linesMap).map((key) => linesMap[key]),
        };
    }
}
/* harmony default export */ const Model_Schema = (Schema);

// EXTERNAL MODULE: external "canvg"
var external_canvg_ = __webpack_require__(973);
;// CONCATENATED MODULE: ./src/Plugins/Minimap.ts




class MiniMap {
    constructor(editor) {
        /**
         * 重新计算拖拽框位置
         */
        this.resetDrag = () => {
            const { x, y, scale } = this.editor.controller;
            const { padding } = this;
            if (!this.svgBBox)
                return;
            /**
             * 这里虽然坐标整体都缩小了10倍，但是用户画布放大的scale倍，在这个坐标系下永远都是1倍，不会随着用户放大而放大，
             * 所以这里求得的左上角便宜坐标实际上还是标准倍率吸下的，需要再放大用户的倍率才能得到最终的效果，
             * 用户画布=>缩小10倍画布到用户scale*this.sclae=>还原回基准this.scale
             */
            this.drag.style.left = -x / scale / this.scale + padding + "px";
            this.drag.style.top = -y / scale / this.scale + padding + "px";
            this.dragBBox = {
                width: this.svgBBox.width / this.scale / scale,
                height: this.svgBBox.height / this.scale / scale,
            };
            this.drag.style.width = this.dragBBox.width + "px";
            this.drag.style.height = this.dragBBox.height + "px";
            // 这里需要考虑width太大的情况，这种时候需要引入一个新变量把图的缩小倍数变小,this.limitScale
        };
        /**
         * 重新渲染小地图
         */
        this.render = () => {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                this.renderCanvas();
                this.resetDrag();
            }), 200);
        };
        this.editor = editor;
        const { minimap = [] } = editor.config;
        this.width = minimap.width || 160;
        this.height = minimap.height || 160;
        this.padding = minimap.padding || 20;
        this.scale = minimap.scale || 10;
    }
    init() {
        const dom = `<div class="ve-minimap" >
			<canvas width="100%" height="100%"></canvas>
			<div class="drag-rect" style="left:${this.padding}px;top:${this.padding}px">
				<div class="drag-point"></div>
			</div>
		</div>`;
        const can = document.createElement("div");
        can.innerHTML = dom;
        this.container = can.querySelector(".ve-minimap");
        this.editor.container.append(this.container);
        this.canvas = this.container.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.drag = this.container.querySelector(".drag-rect");
        this.dragPoint = this.container.querySelector(".drag-point");
        const bbox = this.container.getBoundingClientRect();
        this.width = bbox.width;
        this.height = bbox.height;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.initEvent();
    }
    initEvent() {
        const { controller } = this.editor;
        this.canvas.addEventListener("click", (e) => {
            const left = e.offsetX - this.dragBBox.width / 2;
            const top = e.offsetY - this.dragBBox.height / 2;
            this.drag.style.left = left + "px";
            this.drag.style.top = top + "px";
            controller.moveTo(-(left - this.padding) * this.scale * controller.scale, -(top - this.padding) * this.scale * controller.scale);
            this.resetDrag();
        });
        let clientX = 0;
        let clientY = 0;
        SVGHelper.drag(this.drag, (e) => {
            const dx = e.clientX - clientX;
            const dy = e.clientY - clientY;
            const dleft = dx + this.dragStart.x;
            const dtop = dy + this.dragStart.y;
            const left = Math.min(Math.max(dleft, 0), this.width - this.dragBBox.width + this.padding * 2);
            const top = Math.min(Math.max(dtop, 0), this.height - this.dragBBox.height + this.padding * 2);
            this.drag.style.left = left + "px";
            this.drag.style.top = top + "px";
            controller.moveTo(-(left - this.padding) * this.scale * controller.scale, -(top - this.padding) * this.scale * controller.scale);
        }, (e) => {
            clientX = e.clientX;
            clientY = e.clientY;
            const { style } = this.drag;
            this.dragStart = {
                x: style.left ? parseInt(style.left.split("px")[0]) : 0,
                y: style.top ? parseInt(style.top.split("px")[0]) : 0,
            };
        }, () => { });
        let pointClientX = 0;
        let pointClientY = 0;
        SVGHelper.drag(this.dragPoint, (e) => {
            const dx = e.clientX - pointClientX;
            const dy = e.clientY - pointClientY;
            const ratio = this.svgBBox.width / this.svgBBox.height;
            let height = Math.max(dy + this.dragStartBBox.height, 10);
            let width = height * ratio;
            this.drag.style.width = width + "px";
            this.drag.style.height = height + "px";
            controller.scale = this.svgBBox.width / (width * this.scale);
            controller.update();
        }, (e) => {
            pointClientX = e.clientX;
            pointClientY = e.clientY;
            e.preventDefault();
            e.stopPropagation();
            this.dragStartBBox = this.drag.getBoundingClientRect();
            return false;
        }, () => { });
        this.editor.on("change", this.render);
        this.editor.on("format", this.render);
        this.editor.on("autofit", this.resetDrag);
        this.editor.on("panning", this.resetDrag);
        this.editor.on("zoom", this.resetDrag);
    }
    renderCanvas() {
        return __awaiter(this, void 0, void 0, function* () {
            const node = this.editor.svg;
            const svgBBox = node.getBoundingClientRect();
            const images = node.querySelectorAll("image") || [];
            images.forEach((img) => {
                img.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
            });
            const matrix = this.editor.paper.getAttribute("transform");
            this.editor.paper.setAttribute("transform", "");
            const svg = node.innerHTML;
            if (matrix)
                this.editor.paper.setAttribute("transform", matrix);
            const paperBBox = this.editor.paper.getBBox();
            this.scale =
                this.limitScale ||
                    Math.max(paperBBox.width / (this.width - this.padding * 2), paperBBox.height / (this.height - this.padding * 2), 10);
            const x = this.padding;
            const y = this.padding;
            const m = create();
            translate(m, m, [x, y]);
            scale(m, m, [1 / this.scale, 1 / this.scale]);
            this.svgBBox = svgBBox;
            this.converting = yield external_canvg_.Canvg.fromString(this.ctx, `<g transform="matrix(${m.toString()})" class="minimap-graph">${svg}</g>`, {
                ignoreMouse: true,
                ignoreDimensions: true,
                ignoreAnimation: true,
            });
            this.converting.render();
        });
    }
    destroy() {
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
    }
}
/* harmony default export */ const Minimap = (MiniMap);

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/index.less
var cjs_js_src = __webpack_require__(74);
;// CONCATENATED MODULE: ./src/index.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(cjs_js_src/* default */.Z, options);




       /* harmony default export */ const src = (cjs_js_src/* default */.Z && cjs_js_src/* default.locals */.Z.locals ? cjs_js_src/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/VEditor.ts







/**
 * @class
 * @extends Utils.Event
 */
class VEditor extends Event {
    /**
     * @param {VEditorOptions} options 配置项
     */
    constructor(config) {
        super();
        this.config = Object.assign({
            hideAchor: false,
            hideAchorLine: false,
            anchorDistance: 5,
            showBackGrid: true,
            showMiniMap: false,
            mode: undefined,
            dagreOption: {},
        }, config);
        if (!config.dom)
            return;
        /**
         * @property {HTMLElement} dom 容器
         */
        this.dom = this.initDom(config.dom);
        /**
         * @property {Snap.Element} svg
         */
        this.svg = this.dom.querySelector("svg");
        /**
         * @property {Snap.Element} paper
         */
        this.paper = createSVGElement("g", this.svg);
        this.paper.classList.add("ve-editor-paper");
        /**
         * @property {HTMLElement} container 实例dom
         */
        this.container = this.dom.querySelector(".ve-editor");
        this.resize();
        /**
         * @property {Graph} graph 画布
         */
        this.graph = new Shape_Graph(this);
        /**
         * @property {Controller} controller 控制器
         */
        this.controller = new Utils_Controller(this);
        /**
         * @property {Schema} schema 数据管理器
         */
        this.schema = new Model_Schema(this);
        if (this.config.showMiniMap) {
            /**
             * @property {Minimap?} minimap 小地图
             */
            this.minimap = new Minimap(this);
            this.minimap.init();
        }
    }
    initDom(dom) {
        dom.innerHTML = `<div class="ve-editor ${this.config.mode || ""}" >
				<div class="ve-editor-back" ></div>
				<div class="ve-editor-svg" >
					<svg  />
				</div>
			</div>`;
        return dom;
    }
    resize() {
        const { width, height } = this.config;
        setAttrs(this.svg, {
            width: width || "100%",
            height: height || "100%",
        });
    }
    /**
     * destroy
     */
    destroy() {
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
     * repaint
     */
    repaint() {
        this.graph.clearGraph();
        this.graph.render(this.schema.data);
    }
}
/* harmony default export */ const src_VEditor = (VEditor);

;// CONCATENATED MODULE: ./src/index.ts















/* harmony default export */ const src_0 = (src_VEditor);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});