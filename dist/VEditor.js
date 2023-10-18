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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes dashing {\n  from {\n    stroke-dashoffset: 200;\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n.ve-editor {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.ve-editor .ve-editor-back {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 0;\n  left: 0;\n  top: 0;\n}\n.ve-editor .ve-minimap {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: #fff;\n  border: 1px solid #cecece;\n  border-radius: 5px;\n  overflow: hidden;\n  width: 160px;\n  height: 127px;\n}\n.ve-editor .ve-minimap .drag-rect {\n  position: absolute;\n  left: 0px;\n  box-sizing: content-box;\n  top: 0px;\n  border: 2px solid #08c;\n  cursor: pointer;\n  transition: all 200ms ease;\n}\n.ve-editor .ve-minimap .drag-point {\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n  border: 2px solid #08c;\n  background: #fff;\n  position: absolute;\n  right: -5px;\n  bottom: -5px;\n  cursor: nwse-resize;\n}\n.ve-editor > .ve-editor-svg {\n  cursor: grab;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.ve-editor > .ve-editor-svg svg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  outline: none;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-node-shape:focus {\n  outline: none;\n}\n.ve-editor > .ve-editor-svg .ve-node:hover .ve-link-points,\n.ve-editor > .ve-editor-svg .ve-node.active .ve-link-points {\n  display: block;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-link-points {\n  cursor: crosshair;\n  display: none;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-link-points:hover,\n.ve-editor > .ve-editor-svg .ve-node .ve-link-points.hover {\n  fill: #4c79ff;\n  cursor: crosshair;\n  display: block;\n}\n.ve-editor > .ve-editor-svg .ve-node.active .icon-node {\n  transition: stroke 400ms;\n  stroke: #4c79ff;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-node-shape {\n  cursor: move;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-node-shape:hover > .icon-node {\n  stroke: #4c79ff;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-node-shape.success .icon-node {\n  stroke: green;\n  fill: #fff;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-node-shape.error .icon-node {\n  stroke: red;\n}\n.ve-editor > .ve-editor-svg .ve-node .ve-node-shape.running .icon-node {\n  stroke: #4c79ff;\n}\n.ve-editor > .ve-editor-svg .ve-line .ve-line-path {\n  transition: stroke-dasharray 300ms ease-out;\n}\n.ve-editor > .ve-editor-svg .ve-line .ve-shdow-path {\n  stroke: transparent;\n  stroke-width: 5px;\n  fill: none;\n}\n.ve-editor > .ve-editor-svg .ve-line:hover .ve-line-shape {\n  opacity: 0.5;\n}\n.ve-editor > .ve-editor-svg .ve-line:hover .ve-line-arrow {\n  opacity: 0.5;\n}\n.ve-editor > .ve-editor-svg .ve-line.active .ve-line-arrow {\n  stroke: #4c79ff;\n}\n.ve-editor > .ve-editor-svg .ve-line.active path {\n  stroke: #4c79ff;\n}\n.ve-editor > .ve-editor-svg .ve-line.running .ve-line-path {\n  stroke-dasharray: 5 !important;\n  animation: dashing 5s linear infinite;\n}\n.ve-editor > .ve-editor-svg .ve-line .ve-line-shape {\n  cursor: pointer;\n}\n.ve-editor > .ve-editor-svg .ve-line .ve-line-arrow {\n  cursor: crosshair;\n}\n.ve-editor > .ve-editor-svg .ve-line .ve-line-label text {\n  text-anchor: middle;\n}\n.ve-editor > .ve-editor-svg .anchor-line {\n  stroke: #4c79ff;\n}\n.ve-editor > .ve-editor-svg .ve-paper-lineing .ve-link-points {\n  display: block;\n}\n.ve-editor > .ve-editor-html {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.ve-editor .anchor-back {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.ve-node-wrapper {\n  border: 1px solid #08c;\n  border-radius: 8px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  background-color: #fff;\n  align-items: center;\n}\n", ""]);
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

/***/ 887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "glMatrix": () => (/* reexport */ common_namespaceObject),
  "mat2": () => (/* reexport */ mat2_namespaceObject),
  "mat2d": () => (/* reexport */ mat2d_namespaceObject),
  "mat3": () => (/* reexport */ mat3_namespaceObject),
  "mat4": () => (/* reexport */ mat4_namespaceObject),
  "quat": () => (/* reexport */ quat_namespaceObject),
  "quat2": () => (/* reexport */ quat2_namespaceObject),
  "vec2": () => (/* reexport */ vec2_namespaceObject),
  "vec3": () => (/* reexport */ vec3_namespaceObject),
  "vec4": () => (/* reexport */ vec4_namespaceObject)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/common.js
var common_namespaceObject = {};
__webpack_require__.r(common_namespaceObject);
__webpack_require__.d(common_namespaceObject, {
  "ARRAY_TYPE": () => (ARRAY_TYPE),
  "EPSILON": () => (EPSILON),
  "RANDOM": () => (RANDOM),
  "equals": () => (equals),
  "setMatrixArrayType": () => (setMatrixArrayType),
  "toRadian": () => (toRadian)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/mat2.js
var mat2_namespaceObject = {};
__webpack_require__.r(mat2_namespaceObject);
__webpack_require__.d(mat2_namespaceObject, {
  "LDU": () => (LDU),
  "add": () => (add),
  "adjoint": () => (adjoint),
  "clone": () => (clone),
  "copy": () => (copy),
  "create": () => (create),
  "determinant": () => (determinant),
  "equals": () => (mat2_equals),
  "exactEquals": () => (exactEquals),
  "frob": () => (frob),
  "fromRotation": () => (fromRotation),
  "fromScaling": () => (fromScaling),
  "fromValues": () => (fromValues),
  "identity": () => (identity),
  "invert": () => (invert),
  "mul": () => (mul),
  "multiply": () => (multiply),
  "multiplyScalar": () => (multiplyScalar),
  "multiplyScalarAndAdd": () => (multiplyScalarAndAdd),
  "rotate": () => (rotate),
  "scale": () => (scale),
  "set": () => (set),
  "str": () => (str),
  "sub": () => (sub),
  "subtract": () => (subtract),
  "transpose": () => (transpose)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/mat2d.js
var mat2d_namespaceObject = {};
__webpack_require__.r(mat2d_namespaceObject);
__webpack_require__.d(mat2d_namespaceObject, {
  "add": () => (mat2d_add),
  "clone": () => (mat2d_clone),
  "copy": () => (mat2d_copy),
  "create": () => (mat2d_create),
  "determinant": () => (mat2d_determinant),
  "equals": () => (mat2d_equals),
  "exactEquals": () => (mat2d_exactEquals),
  "frob": () => (mat2d_frob),
  "fromRotation": () => (mat2d_fromRotation),
  "fromScaling": () => (mat2d_fromScaling),
  "fromTranslation": () => (fromTranslation),
  "fromValues": () => (mat2d_fromValues),
  "identity": () => (mat2d_identity),
  "invert": () => (mat2d_invert),
  "mul": () => (mat2d_mul),
  "multiply": () => (mat2d_multiply),
  "multiplyScalar": () => (mat2d_multiplyScalar),
  "multiplyScalarAndAdd": () => (mat2d_multiplyScalarAndAdd),
  "rotate": () => (mat2d_rotate),
  "scale": () => (mat2d_scale),
  "set": () => (mat2d_set),
  "str": () => (mat2d_str),
  "sub": () => (mat2d_sub),
  "subtract": () => (mat2d_subtract),
  "translate": () => (translate)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/mat3.js
var mat3_namespaceObject = {};
__webpack_require__.r(mat3_namespaceObject);
__webpack_require__.d(mat3_namespaceObject, {
  "add": () => (mat3_add),
  "adjoint": () => (mat3_adjoint),
  "clone": () => (mat3_clone),
  "copy": () => (mat3_copy),
  "create": () => (mat3_create),
  "determinant": () => (mat3_determinant),
  "equals": () => (mat3_equals),
  "exactEquals": () => (mat3_exactEquals),
  "frob": () => (mat3_frob),
  "fromMat2d": () => (fromMat2d),
  "fromMat4": () => (fromMat4),
  "fromQuat": () => (fromQuat),
  "fromRotation": () => (mat3_fromRotation),
  "fromScaling": () => (mat3_fromScaling),
  "fromTranslation": () => (mat3_fromTranslation),
  "fromValues": () => (mat3_fromValues),
  "identity": () => (mat3_identity),
  "invert": () => (mat3_invert),
  "mul": () => (mat3_mul),
  "multiply": () => (mat3_multiply),
  "multiplyScalar": () => (mat3_multiplyScalar),
  "multiplyScalarAndAdd": () => (mat3_multiplyScalarAndAdd),
  "normalFromMat4": () => (normalFromMat4),
  "projection": () => (projection),
  "rotate": () => (mat3_rotate),
  "scale": () => (mat3_scale),
  "set": () => (mat3_set),
  "str": () => (mat3_str),
  "sub": () => (mat3_sub),
  "subtract": () => (mat3_subtract),
  "translate": () => (mat3_translate),
  "transpose": () => (mat3_transpose)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/mat4.js
var mat4_namespaceObject = {};
__webpack_require__.r(mat4_namespaceObject);
__webpack_require__.d(mat4_namespaceObject, {
  "add": () => (mat4_add),
  "adjoint": () => (mat4_adjoint),
  "clone": () => (mat4_clone),
  "copy": () => (mat4_copy),
  "create": () => (mat4_create),
  "determinant": () => (mat4_determinant),
  "equals": () => (mat4_equals),
  "exactEquals": () => (mat4_exactEquals),
  "frob": () => (mat4_frob),
  "fromQuat": () => (mat4_fromQuat),
  "fromQuat2": () => (fromQuat2),
  "fromRotation": () => (mat4_fromRotation),
  "fromRotationTranslation": () => (fromRotationTranslation),
  "fromRotationTranslationScale": () => (fromRotationTranslationScale),
  "fromRotationTranslationScaleOrigin": () => (fromRotationTranslationScaleOrigin),
  "fromScaling": () => (mat4_fromScaling),
  "fromTranslation": () => (mat4_fromTranslation),
  "fromValues": () => (mat4_fromValues),
  "fromXRotation": () => (fromXRotation),
  "fromYRotation": () => (fromYRotation),
  "fromZRotation": () => (fromZRotation),
  "frustum": () => (frustum),
  "getRotation": () => (getRotation),
  "getScaling": () => (getScaling),
  "getTranslation": () => (getTranslation),
  "identity": () => (mat4_identity),
  "invert": () => (mat4_invert),
  "lookAt": () => (lookAt),
  "mul": () => (mat4_mul),
  "multiply": () => (mat4_multiply),
  "multiplyScalar": () => (mat4_multiplyScalar),
  "multiplyScalarAndAdd": () => (mat4_multiplyScalarAndAdd),
  "ortho": () => (ortho),
  "orthoNO": () => (orthoNO),
  "orthoZO": () => (orthoZO),
  "perspective": () => (perspective),
  "perspectiveFromFieldOfView": () => (perspectiveFromFieldOfView),
  "perspectiveNO": () => (perspectiveNO),
  "perspectiveZO": () => (perspectiveZO),
  "rotate": () => (mat4_rotate),
  "rotateX": () => (rotateX),
  "rotateY": () => (rotateY),
  "rotateZ": () => (rotateZ),
  "scale": () => (mat4_scale),
  "set": () => (mat4_set),
  "str": () => (mat4_str),
  "sub": () => (mat4_sub),
  "subtract": () => (mat4_subtract),
  "targetTo": () => (targetTo),
  "translate": () => (mat4_translate),
  "transpose": () => (mat4_transpose)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/vec3.js
var vec3_namespaceObject = {};
__webpack_require__.r(vec3_namespaceObject);
__webpack_require__.d(vec3_namespaceObject, {
  "add": () => (vec3_add),
  "angle": () => (angle),
  "bezier": () => (bezier),
  "ceil": () => (ceil),
  "clone": () => (vec3_clone),
  "copy": () => (vec3_copy),
  "create": () => (vec3_create),
  "cross": () => (cross),
  "dist": () => (dist),
  "distance": () => (distance),
  "div": () => (div),
  "divide": () => (divide),
  "dot": () => (vec3_dot),
  "equals": () => (vec3_equals),
  "exactEquals": () => (vec3_exactEquals),
  "floor": () => (floor),
  "forEach": () => (forEach),
  "fromValues": () => (vec3_fromValues),
  "hermite": () => (hermite),
  "inverse": () => (inverse),
  "len": () => (len),
  "length": () => (vec3_length),
  "lerp": () => (lerp),
  "max": () => (max),
  "min": () => (min),
  "mul": () => (vec3_mul),
  "multiply": () => (vec3_multiply),
  "negate": () => (negate),
  "normalize": () => (normalize),
  "random": () => (random),
  "rotateX": () => (vec3_rotateX),
  "rotateY": () => (vec3_rotateY),
  "rotateZ": () => (vec3_rotateZ),
  "round": () => (round),
  "scale": () => (vec3_scale),
  "scaleAndAdd": () => (scaleAndAdd),
  "set": () => (vec3_set),
  "sqrDist": () => (sqrDist),
  "sqrLen": () => (sqrLen),
  "squaredDistance": () => (squaredDistance),
  "squaredLength": () => (squaredLength),
  "str": () => (vec3_str),
  "sub": () => (vec3_sub),
  "subtract": () => (vec3_subtract),
  "transformMat3": () => (transformMat3),
  "transformMat4": () => (transformMat4),
  "transformQuat": () => (transformQuat),
  "zero": () => (zero)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/vec4.js
var vec4_namespaceObject = {};
__webpack_require__.r(vec4_namespaceObject);
__webpack_require__.d(vec4_namespaceObject, {
  "add": () => (vec4_add),
  "ceil": () => (vec4_ceil),
  "clone": () => (vec4_clone),
  "copy": () => (vec4_copy),
  "create": () => (vec4_create),
  "cross": () => (vec4_cross),
  "dist": () => (vec4_dist),
  "distance": () => (vec4_distance),
  "div": () => (vec4_div),
  "divide": () => (vec4_divide),
  "dot": () => (dot),
  "equals": () => (vec4_equals),
  "exactEquals": () => (vec4_exactEquals),
  "floor": () => (vec4_floor),
  "forEach": () => (vec4_forEach),
  "fromValues": () => (vec4_fromValues),
  "inverse": () => (vec4_inverse),
  "len": () => (vec4_len),
  "length": () => (vec4_length),
  "lerp": () => (vec4_lerp),
  "max": () => (vec4_max),
  "min": () => (vec4_min),
  "mul": () => (vec4_mul),
  "multiply": () => (vec4_multiply),
  "negate": () => (vec4_negate),
  "normalize": () => (vec4_normalize),
  "random": () => (vec4_random),
  "round": () => (vec4_round),
  "scale": () => (vec4_scale),
  "scaleAndAdd": () => (vec4_scaleAndAdd),
  "set": () => (vec4_set),
  "sqrDist": () => (vec4_sqrDist),
  "sqrLen": () => (vec4_sqrLen),
  "squaredDistance": () => (vec4_squaredDistance),
  "squaredLength": () => (vec4_squaredLength),
  "str": () => (vec4_str),
  "sub": () => (vec4_sub),
  "subtract": () => (vec4_subtract),
  "transformMat4": () => (vec4_transformMat4),
  "transformQuat": () => (vec4_transformQuat),
  "zero": () => (vec4_zero)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/quat.js
var quat_namespaceObject = {};
__webpack_require__.r(quat_namespaceObject);
__webpack_require__.d(quat_namespaceObject, {
  "add": () => (quat_add),
  "calculateW": () => (calculateW),
  "clone": () => (quat_clone),
  "conjugate": () => (conjugate),
  "copy": () => (quat_copy),
  "create": () => (quat_create),
  "dot": () => (quat_dot),
  "equals": () => (quat_equals),
  "exactEquals": () => (quat_exactEquals),
  "exp": () => (exp),
  "fromEuler": () => (fromEuler),
  "fromMat3": () => (fromMat3),
  "fromValues": () => (quat_fromValues),
  "getAngle": () => (getAngle),
  "getAxisAngle": () => (getAxisAngle),
  "identity": () => (quat_identity),
  "invert": () => (quat_invert),
  "len": () => (quat_len),
  "length": () => (quat_length),
  "lerp": () => (quat_lerp),
  "ln": () => (ln),
  "mul": () => (quat_mul),
  "multiply": () => (quat_multiply),
  "normalize": () => (quat_normalize),
  "pow": () => (pow),
  "random": () => (quat_random),
  "rotateX": () => (quat_rotateX),
  "rotateY": () => (quat_rotateY),
  "rotateZ": () => (quat_rotateZ),
  "rotationTo": () => (rotationTo),
  "scale": () => (quat_scale),
  "set": () => (quat_set),
  "setAxes": () => (setAxes),
  "setAxisAngle": () => (setAxisAngle),
  "slerp": () => (slerp),
  "sqlerp": () => (sqlerp),
  "sqrLen": () => (quat_sqrLen),
  "squaredLength": () => (quat_squaredLength),
  "str": () => (quat_str)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/quat2.js
var quat2_namespaceObject = {};
__webpack_require__.r(quat2_namespaceObject);
__webpack_require__.d(quat2_namespaceObject, {
  "add": () => (quat2_add),
  "clone": () => (quat2_clone),
  "conjugate": () => (quat2_conjugate),
  "copy": () => (quat2_copy),
  "create": () => (quat2_create),
  "dot": () => (quat2_dot),
  "equals": () => (quat2_equals),
  "exactEquals": () => (quat2_exactEquals),
  "fromMat4": () => (quat2_fromMat4),
  "fromRotation": () => (quat2_fromRotation),
  "fromRotationTranslation": () => (quat2_fromRotationTranslation),
  "fromRotationTranslationValues": () => (fromRotationTranslationValues),
  "fromTranslation": () => (quat2_fromTranslation),
  "fromValues": () => (quat2_fromValues),
  "getDual": () => (getDual),
  "getReal": () => (getReal),
  "getTranslation": () => (quat2_getTranslation),
  "identity": () => (quat2_identity),
  "invert": () => (quat2_invert),
  "len": () => (quat2_len),
  "length": () => (quat2_length),
  "lerp": () => (quat2_lerp),
  "mul": () => (quat2_mul),
  "multiply": () => (quat2_multiply),
  "normalize": () => (quat2_normalize),
  "rotateAroundAxis": () => (rotateAroundAxis),
  "rotateByQuatAppend": () => (rotateByQuatAppend),
  "rotateByQuatPrepend": () => (rotateByQuatPrepend),
  "rotateX": () => (quat2_rotateX),
  "rotateY": () => (quat2_rotateY),
  "rotateZ": () => (quat2_rotateZ),
  "scale": () => (quat2_scale),
  "set": () => (quat2_set),
  "setDual": () => (setDual),
  "setReal": () => (setReal),
  "sqrLen": () => (quat2_sqrLen),
  "squaredLength": () => (quat2_squaredLength),
  "str": () => (quat2_str),
  "translate": () => (quat2_translate)
});

// NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/vec2.js
var vec2_namespaceObject = {};
__webpack_require__.r(vec2_namespaceObject);
__webpack_require__.d(vec2_namespaceObject, {
  "add": () => (vec2_add),
  "angle": () => (vec2_angle),
  "ceil": () => (vec2_ceil),
  "clone": () => (vec2_clone),
  "copy": () => (vec2_copy),
  "create": () => (vec2_create),
  "cross": () => (vec2_cross),
  "dist": () => (vec2_dist),
  "distance": () => (vec2_distance),
  "div": () => (vec2_div),
  "divide": () => (vec2_divide),
  "dot": () => (vec2_dot),
  "equals": () => (vec2_equals),
  "exactEquals": () => (vec2_exactEquals),
  "floor": () => (vec2_floor),
  "forEach": () => (vec2_forEach),
  "fromValues": () => (vec2_fromValues),
  "inverse": () => (vec2_inverse),
  "len": () => (vec2_len),
  "length": () => (vec2_length),
  "lerp": () => (vec2_lerp),
  "max": () => (vec2_max),
  "min": () => (vec2_min),
  "mul": () => (vec2_mul),
  "multiply": () => (vec2_multiply),
  "negate": () => (vec2_negate),
  "normalize": () => (vec2_normalize),
  "random": () => (vec2_random),
  "rotate": () => (vec2_rotate),
  "round": () => (vec2_round),
  "scale": () => (vec2_scale),
  "scaleAndAdd": () => (vec2_scaleAndAdd),
  "set": () => (vec2_set),
  "sqrDist": () => (vec2_sqrDist),
  "sqrLen": () => (vec2_sqrLen),
  "squaredDistance": () => (vec2_squaredDistance),
  "squaredLength": () => (vec2_squaredLength),
  "str": () => (vec2_str),
  "sub": () => (vec2_sub),
  "subtract": () => (vec2_subtract),
  "transformMat2": () => (transformMat2),
  "transformMat2d": () => (transformMat2d),
  "transformMat3": () => (vec2_transformMat3),
  "transformMat4": () => (vec2_transformMat4),
  "zero": () => (vec2_zero)
});

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
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/mat2.js

/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */

function create() {
  var out = new ARRAY_TYPE(4);

  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */

function clone(a) {
  var out = new ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */

function fromValues(m00, m01, m10, m11) {
  var out = new ARRAY_TYPE(4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */

function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    var a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}
/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3]; // Calculate the determinant

  var det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] = a0 * det;
  return out;
}
/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  var a0 = a[0];
  out[0] = a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a0;
  return out;
}
/**
 * Calculates the determinant of a mat2
 *
 * @param {ReadonlyMat2} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}
/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}
/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/

function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2
 *
 * @param {ReadonlyMat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Returns Frobenius norm of a mat2
 *
 * @param {ReadonlyMat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3]);
}
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {ReadonlyMat2} L the lower triangular matrix
 * @param {ReadonlyMat2} D the diagonal matrix
 * @param {ReadonlyMat2} U the upper triangular matrix
 * @param {ReadonlyMat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2] / a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}
/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function mat2_equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Alias for {@link mat2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat2.subtract}
 * @function
 */

var sub = subtract;
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

function mat2d_create() {
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

function mat2d_clone(a) {
  var out = new ARRAY_TYPE(6);
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

function mat2d_copy(out, a) {
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

function mat2d_identity(out) {
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

function mat2d_fromValues(a, b, c, d, tx, ty) {
  var out = new ARRAY_TYPE(6);
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

function mat2d_set(out, a, b, c, d, tx, ty) {
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

function mat2d_invert(out, a) {
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

function mat2d_determinant(a) {
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

function mat2d_multiply(out, a, b) {
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

function mat2d_rotate(out, a, rad) {
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

function mat2d_scale(out, a, v) {
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

function mat2d_fromRotation(out, rad) {
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

function mat2d_fromScaling(out, v) {
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

function mat2d_str(a) {
  return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")";
}
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {ReadonlyMat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function mat2d_frob(a) {
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

function mat2d_add(out, a, b) {
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

function mat2d_subtract(out, a, b) {
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

function mat2d_multiplyScalar(out, a, b) {
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

function mat2d_multiplyScalarAndAdd(out, a, b, scale) {
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

function mat2d_exactEquals(a, b) {
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
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}
/**
 * Alias for {@link mat2d.multiply}
 * @function
 */

var mat2d_mul = mat2d_multiply;
/**
 * Alias for {@link mat2d.subtract}
 * @function
 */

var mat2d_sub = mat2d_subtract;
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/mat3.js

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function mat3_create() {
  var out = new ARRAY_TYPE(9);

  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function mat3_clone(a) {
  var out = new ARRAY_TYPE(9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function mat3_copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function mat3_fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new ARRAY_TYPE(9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function mat3_set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function mat3_identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function mat3_transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function mat3_invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function mat3_adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */

function mat3_determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function mat3_multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {mat3} out
 */

function mat3_translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function mat3_rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function mat3_scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat3} out
 */

function mat3_fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function mat3_fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat3} out
 */

function mat3_fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */

function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function mat3_str(a) {
  return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function mat3_frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function mat3_add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function mat3_subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function mat3_multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function mat3_multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function mat3_exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function mat3_equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mat3_mul = mat3_multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var mat3_sub = mat3_subtract;
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/mat4.js

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function mat4_create() {
  var out = new ARRAY_TYPE(16);

  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function mat4_clone(a) {
  var out = new ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function mat4_copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function mat4_fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function mat4_set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function mat4_identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function mat4_transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function mat4_invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function mat4_adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */

function mat4_determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function mat4_multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */

function mat4_translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function mat4_scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function mat4_rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function mat4_fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */

function mat4_fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function mat4_fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new ARRAY_TYPE(3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function mat4_fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspectiveNO(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Alias for {@link mat4.perspectiveNO}
 * @function
 */

var perspective = perspectiveNO;
/**
 * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspectiveZO(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = far * nf;
    out[14] = far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function orthoNO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Alias for {@link mat4.orthoNO}
 * @function
 */

var ortho = orthoNO;
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function orthoZO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = near * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
    return mat4_identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function mat4_str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function mat4_frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function mat4_add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function mat4_subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function mat4_multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function mat4_multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function mat4_exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function mat4_equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mat4_mul = mat4_multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var mat4_sub = mat4_subtract;
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/vec3.js

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function vec3_create() {
  var out = new ARRAY_TYPE(3);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function vec3_clone(a) {
  var out = new ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function vec3_length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function vec3_fromValues(x, y, z) {
  var out = new ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */

function vec3_copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function vec3_set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function vec3_add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function vec3_subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function vec3_multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function vec3_scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function vec3_dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = RANDOM() * 2.0 * Math.PI;
  var z = RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function vec3_rotateX(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function vec3_rotateY(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function vec3_rotateZ(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      bx = b[0],
      by = b[1],
      bz = b[2],
      mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
      mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
      mag = mag1 * mag2,
      cosine = mag && vec3_dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function vec3_str(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function vec3_exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function vec3_equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var vec3_sub = vec3_subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var vec3_mul = vec3_multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = vec3_length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = vec3_create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/vec4.js

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function vec4_create() {
  var out = new ARRAY_TYPE(4);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */

function vec4_clone(a) {
  var out = new ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */

function vec4_fromValues(x, y, z, w) {
  var out = new ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the source vector
 * @returns {vec4} out
 */

function vec4_copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function vec4_set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function vec4_add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function vec4_subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function vec4_multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function vec4_divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to ceil
 * @returns {vec4} out
 */

function vec4_ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to floor
 * @returns {vec4} out
 */

function vec4_floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function vec4_min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function vec4_max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to round
 * @returns {vec4} out
 */

function vec4_round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function vec4_scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */

function vec4_scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} distance between a and b
 */

function vec4_distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} squared distance between a and b
 */

function vec4_squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function vec4_length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function vec4_squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to negate
 * @returns {vec4} out
 */

function vec4_negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to invert
 * @returns {vec4} out
 */

function vec4_inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to normalize
 * @returns {vec4} out
 */

function vec4_normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {ReadonlyVec4} result the receiving vector
 * @param {ReadonlyVec4} U the first vector
 * @param {ReadonlyVec4} V the second vector
 * @param {ReadonlyVec4} W the third vector
 * @returns {vec4} result
 */

function vec4_cross(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0],
      B = v[0] * w[2] - v[2] * w[0],
      C = v[0] * w[3] - v[3] * w[0],
      D = v[1] * w[2] - v[2] * w[1],
      E = v[1] * w[3] - v[3] * w[1],
      F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */

function vec4_lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */

function vec4_random(out, scale) {
  scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;

  var v1, v2, v3, v4;
  var s1, s2;

  do {
    v1 = RANDOM() * 2 - 1;
    v2 = RANDOM() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);

  do {
    v3 = RANDOM() * 2 - 1;
    v4 = RANDOM() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec4} out
 */

function vec4_transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec4} out
 */

function vec4_transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3]; // calculate quat * vec

  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */

function vec4_zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function vec4_str(a) {
  return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function vec4_exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function vec4_equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Alias for {@link vec4.subtract}
 * @function
 */

var vec4_sub = vec4_subtract;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */

var vec4_mul = vec4_multiply;
/**
 * Alias for {@link vec4.divide}
 * @function
 */

var vec4_div = vec4_divide;
/**
 * Alias for {@link vec4.distance}
 * @function
 */

var vec4_dist = vec4_distance;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */

var vec4_sqrDist = vec4_squaredDistance;
/**
 * Alias for {@link vec4.length}
 * @function
 */

var vec4_len = vec4_length;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */

var vec4_sqrLen = vec4_squaredLength;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var vec4_forEach = function () {
  var vec = vec4_create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/quat.js




/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

function quat_create() {
  var out = new ARRAY_TYPE(4);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function quat_identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyVec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {ReadonlyQuat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */

function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);

  if (s > EPSILON) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }

  return rad;
}
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat} a     Origin unit quaternion
 * @param  {ReadonlyQuat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */

function getAngle(a, b) {
  var dotproduct = quat_dot(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 */

function quat_multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function quat_rotateX(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function quat_rotateY(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function quat_rotateZ(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate W component of
 * @returns {quat} out
 */

function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function exp(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function ln(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */

function pow(out, a, b) {
  ln(out, a);
  quat_scale(out, out, b);
  exp(out, out);
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > EPSILON) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Generates a random unit quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function quat_random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = RANDOM();
  var u2 = RANDOM();
  var u3 = RANDOM();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate inverse of
 * @returns {quat} out
 */

function quat_invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate conjugate of
 * @returns {quat} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyMat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */

function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
/**
 * Returns a string representation of a quatenion
 *
 * @param {ReadonlyQuat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function quat_str(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */

var quat_clone = vec4_clone;
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

var quat_fromValues = vec4_fromValues;
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the source quaternion
 * @returns {quat} out
 * @function
 */

var quat_copy = vec4_copy;
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

var quat_set = vec4_set;
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 * @function
 */

var quat_add = vec4_add;
/**
 * Alias for {@link quat.multiply}
 * @function
 */

var quat_mul = quat_multiply;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {ReadonlyQuat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

var quat_scale = vec4_scale;
/**
 * Calculates the dot product of two quat's
 *
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var quat_dot = dot;
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

var quat_lerp = vec4_lerp;
/**
 * Calculates the length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate length of
 * @returns {Number} length of a
 */

var quat_length = vec4_length;
/**
 * Alias for {@link quat.length}
 * @function
 */

var quat_len = quat_length;
/**
 * Calculates the squared length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var quat_squaredLength = vec4_squaredLength;
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */

var quat_sqrLen = quat_squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var quat_normalize = vec4_normalize;
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat} a The first quaternion.
 * @param {ReadonlyQuat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var quat_exactEquals = vec4_exactEquals;
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat} a The first vector.
 * @param {ReadonlyQuat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var quat_equals = vec4_equals;
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {ReadonlyVec3} a the initial vector
 * @param {ReadonlyVec3} b the destination vector
 * @returns {quat} out
 */

var rotationTo = function () {
  var tmpvec3 = vec3_create();
  var xUnitVec3 = vec3_fromValues(1, 0, 0);
  var yUnitVec3 = vec3_fromValues(0, 1, 0);
  return function (out, a, b) {
    var dot = vec3_dot(a, b);

    if (dot < -0.999999) {
      cross(tmpvec3, xUnitVec3, a);
      if (len(tmpvec3) < 0.000001) cross(tmpvec3, yUnitVec3, a);
      normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return quat_normalize(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {ReadonlyQuat} c the third operand
 * @param {ReadonlyQuat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

var sqlerp = function () {
  var temp1 = quat_create();
  var temp2 = quat_create();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {ReadonlyVec3} view  the vector representing the viewing direction
 * @param {ReadonlyVec3} right the vector representing the local "right" direction
 * @param {ReadonlyVec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

var setAxes = function () {
  var matr = mat3_create();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return quat_normalize(out, fromMat3(out, matr));
  };
}();
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/quat2.js



/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */

/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */

function quat2_create() {
  var dq = new ARRAY_TYPE(8);

  if (ARRAY_TYPE != Float32Array) {
    dq[0] = 0;
    dq[1] = 0;
    dq[2] = 0;
    dq[4] = 0;
    dq[5] = 0;
    dq[6] = 0;
    dq[7] = 0;
  }

  dq[3] = 1;
  return dq;
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */

function quat2_clone(a) {
  var dq = new ARRAY_TYPE(8);
  dq[0] = a[0];
  dq[1] = a[1];
  dq[2] = a[2];
  dq[3] = a[3];
  dq[4] = a[4];
  dq[5] = a[5];
  dq[6] = a[6];
  dq[7] = a[7];
  return dq;
}
/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */

function quat2_fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
  var dq = new ARRAY_TYPE(8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  dq[4] = x2;
  dq[5] = y2;
  dq[6] = z2;
  dq[7] = w2;
  return dq;
}
/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
  var dq = new ARRAY_TYPE(8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  var ax = x2 * 0.5,
      ay = y2 * 0.5,
      az = z2 * 0.5;
  dq[4] = ax * w1 + ay * z1 - az * y1;
  dq[5] = ay * w1 + az * x1 - ax * z1;
  dq[6] = az * w1 + ax * y1 - ay * x1;
  dq[7] = -ax * x1 - ay * y1 - az * z1;
  return dq;
}
/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q a normalized quaternion
 * @param {ReadonlyVec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function quat2_fromRotationTranslation(out, q, t) {
  var ax = t[0] * 0.5,
      ay = t[1] * 0.5,
      az = t[2] * 0.5,
      bx = q[0],
      by = q[1],
      bz = q[2],
      bw = q[3];
  out[0] = bx;
  out[1] = by;
  out[2] = bz;
  out[3] = bw;
  out[4] = ax * bw + ay * bz - az * by;
  out[5] = ay * bw + az * bx - ax * bz;
  out[6] = az * bw + ax * by - ay * bx;
  out[7] = -ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Creates a dual quat from a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyVec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function quat2_fromTranslation(out, t) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = t[0] * 0.5;
  out[5] = t[1] * 0.5;
  out[6] = t[2] * 0.5;
  out[7] = 0;
  return out;
}
/**
 * Creates a dual quat from a quaternion
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function quat2_fromRotation(out, q) {
  out[0] = q[0];
  out[1] = q[1];
  out[2] = q[2];
  out[3] = q[3];
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {ReadonlyMat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */

function quat2_fromMat4(out, a) {
  //TODO Optimize this
  var outer = quat_create();
  getRotation(outer, a);
  var t = new ARRAY_TYPE(3);
  getTranslation(t, a);
  quat2_fromRotationTranslation(out, outer, t);
  return out;
}
/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */

function quat2_copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  return out;
}
/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */

function quat2_identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */

function quat2_set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
  out[0] = x1;
  out[1] = y1;
  out[2] = z1;
  out[3] = w1;
  out[4] = x2;
  out[5] = y2;
  out[6] = z2;
  out[7] = w2;
  return out;
}
/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} real part
 */

var getReal = quat_copy;
/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} dual part
 */

function getDual(out, a) {
  out[0] = a[4];
  out[1] = a[5];
  out[2] = a[6];
  out[3] = a[7];
  return out;
}
/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */

var setReal = quat_copy;
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */

function setDual(out, q) {
  out[4] = q[0];
  out[5] = q[1];
  out[6] = q[2];
  out[7] = q[3];
  return out;
}
/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {ReadonlyQuat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */

function quat2_getTranslation(out, a) {
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3];
  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  return out;
}
/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {quat2} out
 */

function quat2_translate(out, a, v) {
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3],
      bx1 = v[0] * 0.5,
      by1 = v[1] * 0.5,
      bz1 = v[2] * 0.5,
      ax2 = a[4],
      ay2 = a[5],
      az2 = a[6],
      aw2 = a[7];
  out[0] = ax1;
  out[1] = ay1;
  out[2] = az1;
  out[3] = aw1;
  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
  return out;
}
/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function quat2_rotateX(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  quat_rotateX(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function quat2_rotateY(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  quat_rotateY(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function quat2_rotateZ(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  quat_rotateZ(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @returns {quat2} out
 */

function rotateByQuatAppend(out, a, q) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
  ax = a[4];
  ay = a[5];
  az = a[6];
  aw = a[7];
  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */

function rotateByQuatPrepend(out, q, a) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      bx = a[0],
      by = a[1],
      bz = a[2],
      bw = a[3];
  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
  bx = a[4];
  by = a[5];
  bz = a[6];
  bw = a[7];
  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
  return out;
}
/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */

function rotateAroundAxis(out, a, axis, rad) {
  //Special case for rad = 0
  if (Math.abs(rad) < EPSILON) {
    return quat2_copy(out, a);
  }

  var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
  rad = rad * 0.5;
  var s = Math.sin(rad);
  var bx = s * axis[0] / axisLength;
  var by = s * axis[1] / axisLength;
  var bz = s * axis[2] / axisLength;
  var bw = Math.cos(rad);
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3];
  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  out[4] = ax * bw + aw * bx + ay * bz - az * by;
  out[5] = ay * bw + aw * by + az * bx - ax * bz;
  out[6] = az * bw + aw * bz + ax * by - ay * bx;
  out[7] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 * @function
 */

function quat2_add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  return out;
}
/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 */

function quat2_multiply(out, a, b) {
  var ax0 = a[0],
      ay0 = a[1],
      az0 = a[2],
      aw0 = a[3],
      bx1 = b[4],
      by1 = b[5],
      bz1 = b[6],
      bw1 = b[7],
      ax1 = a[4],
      ay1 = a[5],
      az1 = a[6],
      aw1 = a[7],
      bx0 = b[0],
      by0 = b[1],
      bz0 = b[2],
      bw0 = b[3];
  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
  return out;
}
/**
 * Alias for {@link quat2.multiply}
 * @function
 */

var quat2_mul = quat2_multiply;
/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */

function quat2_scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  return out;
}
/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var quat2_dot = quat_dot;
/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */

function quat2_lerp(out, a, b, t) {
  var mt = 1 - t;
  if (quat2_dot(a, b) < 0) t = -t;
  out[0] = a[0] * mt + b[0] * t;
  out[1] = a[1] * mt + b[1] * t;
  out[2] = a[2] * mt + b[2] * t;
  out[3] = a[3] * mt + b[3] * t;
  out[4] = a[4] * mt + b[4] * t;
  out[5] = a[5] * mt + b[5] * t;
  out[6] = a[6] * mt + b[6] * t;
  out[7] = a[7] * mt + b[7] * t;
  return out;
}
/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */

function quat2_invert(out, a) {
  var sqlen = quat2_squaredLength(a);
  out[0] = -a[0] / sqlen;
  out[1] = -a[1] / sqlen;
  out[2] = -a[2] / sqlen;
  out[3] = a[3] / sqlen;
  out[4] = -a[4] / sqlen;
  out[5] = -a[5] / sqlen;
  out[6] = -a[6] / sqlen;
  out[7] = a[7] / sqlen;
  return out;
}
/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */

function quat2_conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  out[4] = -a[4];
  out[5] = -a[5];
  out[6] = -a[6];
  out[7] = a[7];
  return out;
}
/**
 * Calculates the length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */

var quat2_length = quat_length;
/**
 * Alias for {@link quat2.length}
 * @function
 */

var quat2_len = quat2_length;
/**
 * Calculates the squared length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var quat2_squaredLength = quat_squaredLength;
/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */

var quat2_sqrLen = quat2_squaredLength;
/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */

function quat2_normalize(out, a) {
  var magnitude = quat2_squaredLength(a);

  if (magnitude > 0) {
    magnitude = Math.sqrt(magnitude);
    var a0 = a[0] / magnitude;
    var a1 = a[1] / magnitude;
    var a2 = a[2] / magnitude;
    var a3 = a[3] / magnitude;
    var b0 = a[4];
    var b1 = a[5];
    var b2 = a[6];
    var b3 = a[7];
    var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = (b0 - a0 * a_dot_b) / magnitude;
    out[5] = (b1 - a1 * a_dot_b) / magnitude;
    out[6] = (b2 - a2 * a_dot_b) / magnitude;
    out[7] = (b3 - a3 * a_dot_b) / magnitude;
  }

  return out;
}
/**
 * Returns a string representation of a dual quatenion
 *
 * @param {ReadonlyQuat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */

function quat2_str(a) {
  return "quat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ")";
}
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat2} a the first dual quaternion.
 * @param {ReadonlyQuat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */

function quat2_exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat2} a the first dual quat.
 * @param {ReadonlyQuat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */

function quat2_equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/vec2.js

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function vec2_create() {
  var out = new ARRAY_TYPE(2);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {ReadonlyVec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function vec2_clone(a) {
  var out = new ARRAY_TYPE(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function vec2_fromValues(x, y) {
  var out = new ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the source vector
 * @returns {vec2} out
 */

function vec2_copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function vec2_set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function vec2_add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function vec2_subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function vec2_multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function vec2_divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to ceil
 * @returns {vec2} out
 */

function vec2_ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to floor
 * @returns {vec2} out
 */

function vec2_floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function vec2_min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function vec2_max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to round
 * @returns {vec2} out
 */

function vec2_round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function vec2_scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function vec2_scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} distance between a and b
 */

function vec2_distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function vec2_squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function vec2_length(a) {
  var x = a[0],
      y = a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function vec2_squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to negate
 * @returns {vec2} out
 */

function vec2_negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to invert
 * @returns {vec2} out
 */

function vec2_inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to normalize
 * @returns {vec2} out
 */

function vec2_normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function vec2_dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec3} out
 */

function vec2_cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function vec2_lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function vec2_random(out, scale) {
  scale = scale || 1.0;
  var r = RANDOM() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat3} m matrix to transform with
 * @returns {vec2} out
 */

function vec2_transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec2} out
 */

function vec2_transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {ReadonlyVec2} a The vec2 point to rotate
 * @param {ReadonlyVec2} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec2} out
 */

function vec2_rotate(out, a, b, rad) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(rad),
      cosC = Math.cos(rad); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {ReadonlyVec2} a The first operand
 * @param {ReadonlyVec2} b The second operand
 * @returns {Number} The angle in radians
 */

function vec2_angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1],
      // mag is the product of the magnitudes of a and b
  mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2),
      // mag &&.. short circuits if mag == 0
  cosine = mag && (x1 * x2 + y1 * y2) / mag; // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1

  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */

function vec2_zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function vec2_str(a) {
  return "vec2(" + a[0] + ", " + a[1] + ")";
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function vec2_exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function vec2_equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */

var vec2_len = vec2_length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

var vec2_sub = vec2_subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

var vec2_mul = vec2_multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

var vec2_div = vec2_divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

var vec2_dist = vec2_distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

var vec2_sqrDist = vec2_squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

var vec2_sqrLen = vec2_squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var vec2_forEach = function () {
  var vec = vec2_create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();
;// CONCATENATED MODULE: ./node_modules/gl-matrix/esm/index.js












/***/ }),

/***/ 750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(777);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


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

/***/ 777:
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

/***/ 340:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
exports["default"] = History;


/***/ }),

/***/ 502:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(655);
const History_1 = tslib_1.__importDefault(__webpack_require__(340));
const dagre_1 = tslib_1.__importDefault(__webpack_require__(987));
const uuid_1 = __webpack_require__(459);
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
        this.history = new History_1.default(this);
        this.listenEvents();
    }
    /**
     * format data with dagre
     */
    format() {
        const nodes = this.editor.graph.node.nodes;
        const lines = this.editor.graph.line.lines;
        const g = new dagre_1.default.graphlib.Graph();
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
        dagre_1.default.layout(g);
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
            linesMap[uuid ? uuid : (0, uuid_1.v1)()] = item;
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.editor.graph.render(this.data);
        });
    }
    /**
     * 重做
     */
    redo() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
exports["default"] = Schema;


/***/ }),

/***/ 863:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(655);
const svg_1 = __webpack_require__(612);
const canvg_1 = __webpack_require__(973);
const gl_matrix_1 = __webpack_require__(887);
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
            this.timeout = setTimeout(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        svg_1.SVGHelper.drag(this.drag, (e) => {
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
        svg_1.SVGHelper.drag(this.dragPoint, (e) => {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
            const m = gl_matrix_1.mat2d.create();
            gl_matrix_1.mat2d.translate(m, m, [x, y]);
            gl_matrix_1.mat2d.scale(m, m, [1 / this.scale, 1 / this.scale]);
            this.svgBBox = svgBBox;
            this.converting = yield canvg_1.Canvg.fromString(this.ctx, `<g transform="matrix(${m.toString()})" class="minimap-graph">${svg}</g>`, {
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
exports["default"] = MiniMap;


/***/ }),

/***/ 365:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const svg_1 = __webpack_require__(612);
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
        this.path = svg_1.SVGHelper.path();
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
exports["default"] = AchorLine;


/***/ }),

/***/ 765:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(655);
const Node_1 = tslib_1.__importDefault(__webpack_require__(127));
const Line_1 = tslib_1.__importDefault(__webpack_require__(69));
const AnchorLine_1 = tslib_1.__importDefault(__webpack_require__(365));
const dom_1 = __webpack_require__(14);
const Utils = tslib_1.__importStar(__webpack_require__(894));
const backSvg = (__webpack_require__(27)/* ["default"] */ .Z);
class Graph extends Utils.Event {
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
        this.node = new Node_1.default(this);
        this.line = new Line_1.default(this);
        this.anchorLine = new AnchorLine_1.default(this);
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
        (0, dom_1.setAttrs)(this.editor.svg, {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
exports["default"] = Graph;


/***/ }),

/***/ 69:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(655);
const Line_1 = tslib_1.__importDefault(__webpack_require__(207));
const PolyLine_1 = tslib_1.__importDefault(__webpack_require__(925));
const uuid_1 = __webpack_require__(459);
const svg_1 = __webpack_require__(612);
const dom_1 = __webpack_require__(14);
const ForceLine_1 = tslib_1.__importDefault(__webpack_require__(850));
class Line {
    constructor(graph) {
        this.tempLineRender = {
            render: () => {
                const path = svg_1.SVGHelper.path();
                this.paper.appendChild(path);
                (0, dom_1.setAttrs)(path, {
                    stroke: "#abc",
                    "stroke-dasharray": "10 10",
                });
                return path;
            },
            renderPath: ({ fromX = 0, fromY = 0, x = 0, y = 0 }, line) => {
                (0, dom_1.setAttrs)(line.dom, {
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
                    uuid: (0, uuid_1.v1)(),
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
            svg_1.SVGHelper.drag(point.dom, (e) => {
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
        this.lineG = (0, dom_1.createSVGElement)("g", this.paper);
        this.paper.prepend(this.lineG);
        this.lineG.classList.add("ve-lines");
        this.allLinkPoints = [];
        this.shapes = {
            default: Line_1.default,
            polyline: PolyLine_1.default,
            forceLine: ForceLine_1.default
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
        const key = lineData.uuid || (0, uuid_1.v1)();
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
        const g = svg_1.SVGHelper.group(lineShape, arrow);
        (0, dom_1.setAttrs)(lineShape, {
            class: "ve-line-shape",
        });
        instanceLine.dom = g;
        instanceLine.shape = lineShape;
        instanceLine.arrow = arrow;
        lineData.arrow2 && shape.renderArrow2
            ? (instanceLine.arrow2 = shape.renderArrow2(instanceLine))
            : undefined;
        (0, dom_1.setAttrs)(g, {
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
        if (!line)
            return; //这里有可能被删除node时的关联删除线了
        let uuid = line.data.uuid;
        const { nodes } = this.node;
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
    registeLine(type, data, extend = "default") {
        this.shapes[type] = Object.assign({}, this.shapes[extend], data);
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
        svg_1.SVGHelper.drag(g.arrow, (e) => {
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
exports["default"] = Line;


/***/ }),

/***/ 850:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(655);
const dom_1 = __webpack_require__(14);
const svg_1 = __webpack_require__(612);
const gl_matrix_1 = __webpack_require__(887);
const Line_1 = tslib_1.__importDefault(__webpack_require__(207));
const vector_1 = __webpack_require__(951);
const Utils_1 = __webpack_require__(894);
/**
 * notice: only for circle node, cause the force line is render by circle-node's radius
 */
const ForceLine = Object.assign(Object.assign({}, Line_1.default), { endSpace: 12, startSpace: 3, selfLoopRadius: 70, curvatrueRatio: 30, radius: 30, // the radius of the node; notice: ForceLine only support circle node
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
            const normal = (0, vector_1.normalize)(start2endVec);
            const centerNormal = {
                x: -normal.y,
                y: normal.x
            };
            const length = (0, vector_1.getVectorLength)(start2endVec);
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
                const bezierLine = new Utils_1.Path(`M${from.x} ${from.y} C ${startControlPoint.x} ${startControlPoint.y} ${endControlPoint.x} ${endControlPoint.y} ${to.x} ${to.y}`);
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
        const path = line.arrow ? line.arrow : svg_1.SVGHelper.path();
        // 进行角度的中心变换
        const matrix = gl_matrix_1.mat2d.create();
        gl_matrix_1.mat2d.translate(matrix, matrix, [coord.x, coord.y]);
        gl_matrix_1.mat2d.rotate(matrix, matrix, angle);
        (0, dom_1.setAttrs)(path, Object.assign({ class: "ve-line-arrow", d: pathString, fill: "rgba(178,190,205,0.7)", transform: `matrix(${matrix.join(",")})` }, line.data.arrowStyle));
        return path;
    },
    checkNewLine(data) {
        return true;
    } });
exports["default"] = ForceLine;


/***/ }),

/***/ 207:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const dom_1 = __webpack_require__(14);
const svg_1 = __webpack_require__(612);
const gl_matrix_1 = __webpack_require__(887);
const Utils_1 = __webpack_require__(894);
const __1 = __webpack_require__(607);
const DefaultLine = {
    arcRatio: 4,
    selfLoopRatio: 4,
    selfLoopRadius: 30,
    adsorb: [20, 20],
    startSpace: 8,
    endSpace: 8,
    startGap: 0,
    endGap: 0,
    render(line) {
        const { from, to, data } = line;
        const pathString = this.makePath(from, to, line);
        const shape = line.shape ? line.shape : svg_1.SVGHelper.group();
        line.shape = shape;
        const path = line.path ? line.path : (line.path = svg_1.SVGHelper.path());
        const shadowPath = line.shadowPath
            ? line.shadowPath
            : (line.shadowPath = svg_1.SVGHelper.path());
        (0, dom_1.setAttrs)(path, Object.assign({ d: pathString, class: "ve-line-path", "stroke-dasharray": data.width || "10", fill: "none", "stroke-width": 2, "pointer-events": "visiblepainted", stroke: "rgba(178,190,205,0.7)" }, (data.style || {})));
        (0, dom_1.setAttrs)(shadowPath, {
            d: pathString,
            stroke: "transparent",
            fill: "none",
            "pointer-events": "visiblestroke",
        });
        line.pathData = new Utils_1.Path(pathString);
        shadowPath.setAttribute("class", "ve-shdow-path");
        (0, dom_1.animate)(10, 0, (val) => (0, dom_1.setAttrs)(path, {
            "stroke-dasharray": `${val}`,
        }), 300);
        shape.appendChild(shadowPath);
        shape.appendChild(path);
        this.renderLabel && this.renderLabel(line);
        return shape;
    },
    makePath(from, to, line) {
        from = Object.assign({}, from);
        to = Object.assign({}, to);
        const start = { x: from.x, y: from.y, };
        const end = { x: to.x, y: to.y, };
        let startControlPoint = { x: start.x, y: start.y };
        let endControlPoint = { x: end.x, y: end.y };
        const startAngle = this.getPointAngle(from);
        const endAngle = this.getPointAngle(to);
        from.x += this.startGap * Math.cos(startAngle);
        from.y += this.startGap * Math.sin(startAngle);
        to.x += this.endGap * Math.cos(endAngle);
        to.y += this.endGap * Math.sin(endAngle);
        start.x += (this.startSpace + this.startGap) * Math.cos(startAngle);
        start.y += (this.startSpace + this.startGap) * Math.sin(startAngle);
        end.x += (this.endSpace + this.endGap) * Math.cos(endAngle);
        end.y += (this.endSpace + this.endGap) * Math.sin(endAngle);
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
        var _a, _b, _c;
        if (!line) {
            return __1.Utils.SVGHelper.path();
        }
        const { to, data } = line;
        const angle = this.getPointAngle(to);
        const width = ((_a = data.data) === null || _a === void 0 ? void 0 : _a.arrowWidth) || 10;
        const height = ((_b = data.data) === null || _b === void 0 ? void 0 : _b.arrowHeight) || 10;
        const pathString = `M${0} ${0}L${height} ${width / 2}L${height} ${-width / 2}Z`;
        const path = line.arrow ? line.arrow : svg_1.SVGHelper.path();
        // 进行角度的中心变换
        const matrix = gl_matrix_1.mat2d.create();
        gl_matrix_1.mat2d.translate(matrix, matrix, [to.x, to.y]);
        gl_matrix_1.mat2d.rotate(matrix, matrix, angle);
        (0, dom_1.setAttrs)(path, Object.assign({ class: "ve-line-arrow", d: pathString, fill: ((_c = data.data) === null || _c === void 0 ? void 0 : _c.arrowColor) || "rgba(178,190,205,0.7)", transform: `matrix(${matrix.join(",")})` }, line.data.arrowStyle));
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
                textRect: svg_1.SVGHelper.rect(0, 0, 10, 10),
                text: svg_1.SVGHelper.text(0, 0, label),
                labelGroup: null,
            };
            line.label.labelGroup = svg_1.SVGHelper.group(line.label.textRect, line.label.text);
        }
        line.shape.appendChild(line.label.labelGroup);
        const { text, textRect, textBBox, oldText, labelGroup } = line.label;
        const x = xPoint + (refX || 0);
        const y = yPoint + (refY || 0);
        text.textContent = label;
        (0, dom_1.setAttrs)(text, {
            text: label || "",
            fill: style.fill,
            "dominant-baseline": "middle",
            "alignment-baseline": "after-edge",
            x,
            y,
        });
        if (!textBBox || oldText !== label) {
            line.oldText = label;
            line.label.textBBox = text.getBBox();
        }
        // 性能优化
        const { width, height } = line.label.textBBox;
        (0, dom_1.setAttrs)(line.label.textRect, {
            fill: style.stroke,
            width,
            height,
            stroke: "transparent",
            x: x - width * 0.5,
            y: y - height - 1,
        });
        (0, dom_1.setAttrs)(labelGroup, {
            class: "ve-line-label",
            "data-label": encodeURI(totalLabel),
        });
        //fix text vertical middle
        labelGroup.style.transform = `translate(0px,${height / 2}px)`;
        if (autoRotate) {
            // 文字顺序方向
            let angle = svg_1.SVGHelper.getAngle(from, to);
            if (from.x < to.x || from.x === to.x) {
                angle += 180;
            }
            (0, dom_1.setAttrs)(labelGroup, {
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
exports["default"] = DefaultLine;


/***/ }),

/***/ 925:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(655);
/**
 * @interface PolyLine
 * @implements {DefaultLine}
 */
const vector_1 = __webpack_require__(951);
const Line_1 = tslib_1.__importDefault(__webpack_require__(207));
const PolyLine = Object.assign(Object.assign({}, Line_1.default), { startSpace: 1, arcRadius: 5, lineDistance: 50, makePath(from, to, line) {
        const start = { x: from.x, y: from.y, };
        const end = { x: to.x, y: to.y, };
        const startAngle = this.getPointAngle(from);
        const endAngle = this.getPointAngle(to);
        start.x += this.startGap * Math.cos(startAngle);
        start.y += this.startGap * Math.sin(startAngle);
        end.x += this.endGap * Math.cos(endAngle);
        end.y += this.endGap * Math.sin(endAngle);
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
            const cb = (0, vector_1.normalize)({
                x: b.x - c.x,
                y: b.y - c.y,
            });
            const ab = (0, vector_1.normalize)({
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
exports["default"] = PolyLine;


/***/ }),

/***/ 127:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(655);
const uuid_1 = __webpack_require__(459);
const DefaultNodes_1 = tslib_1.__importDefault(__webpack_require__(874));
const IconNode_1 = tslib_1.__importDefault(__webpack_require__(304));
const DomNode_1 = tslib_1.__importDefault(__webpack_require__(138));
const dom_1 = __webpack_require__(14);
const svg_1 = __webpack_require__(612);
class Node {
    constructor(graph) {
        /**
         * 添加节点
         * @param {object} data
         */
        this.addNode = (data) => {
            if (!data.uuid) {
                data.uuid = (0, uuid_1.v1)();
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
        this.nodeG = (0, dom_1.createSVGElement)("g", this.paper);
        this.nodeG.classList.add("ve-nodes");
        this.initDefs();
        this.listenEvent();
        this.actives = {};
        this.shapes = {
            default: DefaultNodes_1.default,
            iconNode: IconNode_1.default,
            domNode: DomNode_1.default,
        };
    }
    initDefs() {
        this.shadow = (0, dom_1.svgWrapper)(`<defs>
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
        const dom = svg_1.SVGHelper.group(nodeShape);
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
        (0, dom_1.setAttrs)(node.dom, {
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
                (0, dom_1.setAttrs)(instancePoint.dom, {
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
        node._destroys.push(svg_1.SVGHelper.drag(node.dom, (e) => {
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
            (0, dom_1.setAttrs)(node.shape, {
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
        (0, dom_1.setAttrs)(node.dom, {
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
exports["default"] = Node;


/***/ }),

/***/ 874:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const dom_1 = __webpack_require__(14);
const svg_1 = __webpack_require__(612);
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
        node = svg_1.SVGHelper.rect(0, 0, 100, 40);
        text = svg_1.SVGHelper.text(20, 25, data.name);
        (0, dom_1.setAttrs)(node, {
            fill: "#fff",
            stroke: "#000",
            rx: 5,
            ry: 5,
        });
        return svg_1.SVGHelper.group(node, text);
    },
    /**
     * 渲染连接点 (node, linkPoint, circle)
     */
    renderLinkPoint: (node, instance) => {
        const { data: linkPoint } = instance;
        if (!instance.dom) {
            instance.dom = svg_1.SVGHelper.circle(0, 0, 5);
        }
        const circle = instance.dom;
        const box = node.shapeBBox || node.shape.getBBox();
        node.shapeBBox = box;
        const x = (linkPoint.isPixel ? linkPoint.x : linkPoint.x * box.width);
        const y = (linkPoint.isPixel ? linkPoint.y : linkPoint.y * box.height);
        (0, dom_1.setAttrs)(circle, {
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
exports["default"] = DefaultNode;


/***/ }),

/***/ 138:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(655);
const dom_1 = __webpack_require__(14);
const svg_1 = __webpack_require__(612);
const DefaultNodes_1 = tslib_1.__importDefault(__webpack_require__(874));
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
        const dom = (0, dom_1.svgWrapper)(`<foreignObject width=${data.width} height=${data.height} >
		<div style="width:${data.width}px;height:${data.height}" class="ve-node-wrapper">
			<div class="node-text">${data.name}</div>
		</div>
		</foreignObject>`);
        const group = svg_1.SVGHelper.group(dom);
        return group;
    },
    renderLinkPoint: (node, instance) => {
        return DefaultNodes_1.default.renderLinkPoint.call(this, node, instance);
    },
};
exports["default"] = DomNode;


/***/ }),

/***/ 304:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(655);
const dom_1 = __webpack_require__(14);
const svg_1 = __webpack_require__(612);
const DefaultNodes_1 = tslib_1.__importDefault(__webpack_require__(874));
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
        const node = svg_1.SVGHelper.rect(0, 0, 180, 32);
        const text = svg_1.SVGHelper.text(40, 21, data.name);
        const icon = svg_1.SVGHelper.image(data.iconPath, 5, 4, 24, 24);
        icon.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        (0, dom_1.setAttrs)(node, {
            class: "icon-node",
            fill: "#EAEEFA",
            stroke: "#CCD9FD",
            rx: 17,
            ry: 17,
        });
        return svg_1.SVGHelper.group(node, text, icon);
    },
    renderLinkPoint: (node, instance) => {
        return DefaultNodes_1.default.renderLinkPoint.call(this, node, instance);
    },
};
exports["default"] = IconNode;


/***/ }),

/***/ 5:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const vector_1 = __webpack_require__(951);
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
        const pos = (0, vector_1.addVector)((0, vector_1.multiple)(Object.assign({}, v0), Math.pow(1 - t, 3)), (0, vector_1.multiple)(Object.assign({}, v1), Math.pow(1 - t, 2) * 3 * t), (0, vector_1.multiple)(Object.assign({}, v2), 3 * (1 - t) * Math.pow(t, 2)), (0, vector_1.multiple)(Object.assign({}, v3), Math.pow(t, 3)));
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
            length += (0, vector_1.getVectorLength)((0, vector_1.subVector)(pos, prePos));
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
exports["default"] = BezierLine;


/***/ }),

/***/ 369:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(655);
const dom_1 = __webpack_require__(14);
const Utils = tslib_1.__importStar(__webpack_require__(894));
/**
 * 控制器
 * @class
 * @extends Event
 */
class Controller extends Utils.Event {
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
        (0, dom_1.setAttrs)(this.paper, {
            transform: (0, dom_1.setTransform)(this.scale, 0, 0),
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
        (0, dom_1.setAttrs)(this.paper, {
            transform: `matrix(${this.scale}, 0, 0, ${this.scale}, ${this.x}, ${this.y})`,
        });
    }
}
exports["default"] = Controller;


/***/ }),

/***/ 281:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
exports["default"] = Event;


/***/ }),

/***/ 14:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAngle = exports.drag = exports.getEase = exports.animate = exports.setTransform = exports.setAttrs = exports.createSVGElement = exports.svgWrapper = exports.getDOMRect = void 0;
const tslib_1 = __webpack_require__(655);
const BezierLine_1 = tslib_1.__importDefault(__webpack_require__(5));
function getDOMRect(str) {
    const div = document.createElement("div");
    div.style.position = "fixed";
    div.style.visibility = "hidden";
    div.innerHTML = str;
    document.body.appendChild(div);
    const rect = div.getBoundingClientRect();
    document.body.removeChild(div);
    return rect;
}
exports.getDOMRect = getDOMRect;
function svgWrapper(svgString, parent) {
    const svg = createSVGElement("svg");
    svg.innerHTML = svgString;
    if (parent)
        parent.appendChild(svg.children[0]);
    return svg.children[0];
}
exports.svgWrapper = svgWrapper;
function createSVGElement(name, parent) {
    const svg = window.document.createElementNS("http://www.w3.org/2000/svg", name);
    if (parent) {
        parent.appendChild(svg);
    }
    return svg;
}
exports.createSVGElement = createSVGElement;
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
exports.setAttrs = setAttrs;
function setTransform(scale, translateX, translateY) {
    return `translate(${translateX},${translateY}) scale(${scale})`;
}
exports.setTransform = setTransform;
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
exports.animate = animate;
function getEase(easeType) {
    const bezierLine = new BezierLine_1.default();
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
exports.getEase = getEase;
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
exports.drag = drag;
function getAngle(from, to) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    return (Math.atan2(dy, dx) * 180) / Math.PI;
}
exports.getAngle = getAngle;


/***/ }),

/***/ 894:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeLineSort = exports.Path = exports.BezierLine = exports.Event = exports.Vector2 = exports.dom = exports.SVGHelper = void 0;
const tslib_1 = __webpack_require__(655);
var svg_1 = __webpack_require__(612);
Object.defineProperty(exports, "SVGHelper", ({ enumerable: true, get: function () { return svg_1.SVGHelper; } }));
exports.dom = tslib_1.__importStar(__webpack_require__(14));
exports.Vector2 = tslib_1.__importStar(__webpack_require__(951));
tslib_1.__exportStar(__webpack_require__(42), exports);
var Event_1 = __webpack_require__(281);
Object.defineProperty(exports, "Event", ({ enumerable: true, get: function () { return tslib_1.__importDefault(Event_1).default; } }));
var BezierLine_1 = __webpack_require__(5);
Object.defineProperty(exports, "BezierLine", ({ enumerable: true, get: function () { return tslib_1.__importDefault(BezierLine_1).default; } }));
var path_1 = __webpack_require__(221);
Object.defineProperty(exports, "Path", ({ enumerable: true, get: function () { return tslib_1.__importDefault(path_1).default; } }));
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
exports.makeLineSort = makeLineSort;


/***/ }),

/***/ 221:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
exports["default"] = Path;
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


/***/ }),

/***/ 612:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SVGHelper = void 0;
const tslib_1 = __webpack_require__(655);
const dom_1 = __webpack_require__(14);
const DOMHelper = tslib_1.__importStar(__webpack_require__(14));
const SVGHelper = Object.assign(Object.assign({}, DOMHelper), { rect: (x, y, w, h, rx = 0, ry = 0) => {
        const svgString = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" ry="${ry}" />`;
        return (0, dom_1.svgWrapper)(svgString);
    }, text: (x, y, text = '') => {
        return (0, dom_1.svgWrapper)(`<text x="${x}" y="${y}">${text}</text>`);
    }, circle: (cx, cy, r) => {
        return (0, dom_1.svgWrapper)(`<circle cx="${cx}" cy="${cy}" r="${r}" />`);
    }, image: (src, x, y, w, h) => {
        return (0, dom_1.svgWrapper)(`<image x="${x}" y="${y}" width="${w}" height="${h}" xlink:href="${src}" />`);
    }, path: (d = "") => {
        return (0, dom_1.svgWrapper)(`<path d="${d}" />`);
    }, group: (...others) => {
        const group = (0, dom_1.createSVGElement)("g");
        others && others.forEach(item => {
            group.appendChild(item);
        });
        return group;
    } });
exports.SVGHelper = SVGHelper;


/***/ }),

/***/ 42:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 951:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.subVector = exports.getVectorLength = exports.multiple = exports.addVector = exports.normalize = void 0;
function normalize(v) {
    const length = Math.sqrt(v.x * v.x + v.y * v.y);
    return {
        x: v.x / length,
        y: v.y / length
    };
}
exports.normalize = normalize;
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
exports.addVector = addVector;
function getVectorLength(v) {
    const length = Math.sqrt(v.x * v.x + v.y * v.y);
    return length;
}
exports.getVectorLength = getVectorLength;
function subVector(v0, v1) {
    return {
        x: v1.x - v0.x,
        y: v1.y - v0.y
    };
}
exports.subVector = subVector;
function multiple(v, t) {
    return {
        x: v.x * t,
        y: v.y * t
    };
}
exports.multiple = multiple;


/***/ }),

/***/ 569:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(655);
const Graph_1 = tslib_1.__importDefault(__webpack_require__(765));
const Controller_1 = tslib_1.__importDefault(__webpack_require__(369));
const Schema_1 = tslib_1.__importDefault(__webpack_require__(502));
const Minimap_1 = tslib_1.__importDefault(__webpack_require__(863));
__webpack_require__(750);
const dom_1 = __webpack_require__(14);
const Utils = tslib_1.__importStar(__webpack_require__(894));
/**
 * @class
 * @extends Utils.Event
 */
class VEditor extends Utils.Event {
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
        this.paper = (0, dom_1.createSVGElement)("g", this.svg);
        this.paper.classList.add("ve-editor-paper");
        /**
         * @property {HTMLElement} container 实例dom
         */
        this.container = this.dom.querySelector(".ve-editor");
        this.resize();
        /**
         * @property {Graph} graph 画布
         */
        this.graph = new Graph_1.default(this);
        /**
         * @property {Controller} controller 控制器
         */
        this.controller = new Controller_1.default(this);
        /**
         * @property {Schema} schema 数据管理器
         */
        this.schema = new Schema_1.default(this);
        if (this.config.showMiniMap) {
            /**
             * @property {Minimap?} minimap 小地图
             */
            this.minimap = new Minimap_1.default(this);
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
        (0, dom_1.setAttrs)(this.svg, {
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
exports["default"] = VEditor;


/***/ }),

/***/ 607:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VEditor = exports.Event = exports.Minimap = exports.Controller = exports.AnchorLine = exports.History = exports.Graph = exports.DefaultNode = exports.DefaultLine = exports.Schema = exports.Line = exports.Node = exports.Utils = void 0;
const tslib_1 = __webpack_require__(655);
const VEditor_1 = tslib_1.__importDefault(__webpack_require__(569));
exports.VEditor = VEditor_1.default;
exports.Utils = tslib_1.__importStar(__webpack_require__(894));
exports.Node = tslib_1.__importStar(__webpack_require__(127));
exports.Line = tslib_1.__importStar(__webpack_require__(69));
exports.Schema = tslib_1.__importStar(__webpack_require__(502));
exports.DefaultLine = tslib_1.__importStar(__webpack_require__(207));
exports.DefaultNode = tslib_1.__importStar(__webpack_require__(874));
tslib_1.__exportStar(__webpack_require__(569), exports);
exports.Graph = tslib_1.__importStar(__webpack_require__(765));
exports.History = tslib_1.__importStar(__webpack_require__(340));
exports.AnchorLine = tslib_1.__importStar(__webpack_require__(365));
exports.Controller = tslib_1.__importStar(__webpack_require__(369));
exports.Minimap = tslib_1.__importStar(__webpack_require__(863));
exports.Event = tslib_1.__importStar(__webpack_require__(281));
exports["default"] = VEditor_1.default;


/***/ }),

/***/ 655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(607);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});