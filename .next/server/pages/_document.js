"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(859);
/* harmony import */ var _utils_AppConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(305);



// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__["default"] {
    render() {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            lang: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_2__/* .AppConfig.locale */ .X.locale,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);


/***/ }),

/***/ 305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ AppConfig)
/* harmony export */ });
const AppConfig = {
    site_name: 'OCC Office',
    title: 'OCC',
    description: 'OCC Office',
    url: '',
    locale: 'en',
    author: 'Anonymous',
    pagination_size: 5
};


/***/ }),

/***/ 140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859], () => (__webpack_exec__(641)));
module.exports = __webpack_exports__;

})();