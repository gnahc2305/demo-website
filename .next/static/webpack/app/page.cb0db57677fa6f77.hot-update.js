"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./sections/Explore.jsx":
/*!******************************!*\
  !*** ./sections/Explore.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n\n\n\n\n\n\n\nconst Explore = ()=>{\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"].paddings),\n        id: \"explore\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_4__.staggerContainer,\n            initial: \"hidden\",\n            whileInView: \"show\",\n            viewport: {\n                once: false,\n                amount: 0.25\n            },\n            className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"].innerWidth, \" mx-auto flex flex-col\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.TypingText, {\n                    title: \"| The World\",\n                    textStyles: \"text-center\"\n                }, void 0, false, {\n                    fileName: \"/home/andres/repos/landing_page/sections/Explore.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.TitleText, {\n                    title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            \"Choose The world you want\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                className: \"md:block hidden\"\n                            }, void 0, false, void 0, void 0),\n                            \"to explore\"\n                        ]\n                    }, void 0, true),\n                    textStyles: \"text-center\"\n                }, void 0, false, {\n                    fileName: \"/home/andres/repos/landing_page/sections/Explore.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5\",\n                    children: _constants__WEBPACK_IMPORTED_MODULE_5__.exploreWorlds.map(world, (index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.ExploreCard, {\n                            ...world,\n                            index: index,\n                            active: active,\n                            handleClick: setActive\n                        }, world.id, false, {\n                            fileName: \"/home/andres/repos/landing_page/sections/Explore.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/andres/repos/landing_page/sections/Explore.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/andres/repos/landing_page/sections/Explore.jsx\",\n            lineNumber: 15,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/andres/repos/landing_page/sections/Explore.jsx\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Explore;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Explore);\nvar _c;\n$RefreshReg$(_c, \"Explore\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9FeHBsb3JlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVpQztBQUNNO0FBQzRCO0FBRXBDO0FBQ29CO0FBQ047QUFFN0MsTUFBTVEsVUFBVSxJQUFNO2tCQUdwQiw4REFBQ0M7UUFBUUMsV0FBVyxHQUFtQixPQUFoQkwsd0RBQWU7UUFBSU8sSUFBRztrQkFDM0MsNEVBQUNYLHFEQUFVO1lBQ1RhLFVBQVVSLDJEQUFnQkE7WUFDMUJTLFNBQVE7WUFDUkMsYUFBWTtZQUNaQyxVQUFVO2dCQUFFQyxNQUFNLEtBQUs7Z0JBQUVDLFFBQVE7WUFBSztZQUN0Q1QsV0FBVyxHQUFxQixPQUFsQkwsMERBQWlCLEVBQUM7OzhCQUVoQyw4REFBQ0gsbURBQVVBO29CQUFDbUIsT0FBTTtvQkFBY0MsWUFBVzs7Ozs7OzhCQUMzQyw4REFBQ2xCLGtEQUFTQTtvQkFDUmlCLHFCQUNFOzs0QkFBRTswQ0FFQSw4REFBQ0U7Z0NBQUdiLFdBQVU7OzRCQUFvQjs7O29CQUl0Q1ksWUFBVzs7Ozs7OzhCQUdiLDhEQUFDVDtvQkFBSUgsV0FBVTs4QkFDWkgseURBQWlCLENBQUNrQixPQUFPLENBQUNDLHNCQUN6Qiw4REFBQ3ZCLG9EQUFXQTs0QkFFVCxHQUFHc0IsS0FBSzs0QkFDVEMsT0FBT0E7NEJBQ1BDLFFBQVFBOzRCQUNSQyxhQUFhQzsyQkFKUkosTUFBTWIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXpCO0tBcENNSjtBQXNDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZWN0aW9ucy9FeHBsb3JlLmpzeD83MGJjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IFR5cGluZ1RleHQsIEV4cGxvcmVDYXJkLCBUaXRsZVRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXNcIjtcbmltcG9ydCB7IHN0YWdnZXJDb250YWluZXIgfSBmcm9tIFwiLi4vdXRpbHMvbW90aW9uXCI7XG5pbXBvcnQgeyBleHBsb3JlV29ybGRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBFeHBsb3JlID0gKCkgPT4ge1xuXG4gIFxuICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5wYWRkaW5nc31gfSBpZD1cImV4cGxvcmVcIj5cbiAgICA8bW90aW9uLmRpdlxuICAgICAgdmFyaWFudHM9e3N0YWdnZXJDb250YWluZXJ9XG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgIHdoaWxlSW5WaWV3PVwic2hvd1wiXG4gICAgICB2aWV3cG9ydD17eyBvbmNlOiBmYWxzZSwgYW1vdW50OiAwLjI1IH19XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbm5lcldpZHRofSBteC1hdXRvIGZsZXggZmxleC1jb2xgfVxuICAgID5cbiAgICAgIDxUeXBpbmdUZXh0IHRpdGxlPVwifCBUaGUgV29ybGRcIiB0ZXh0U3R5bGVzPVwidGV4dC1jZW50ZXJcIiAvPlxuICAgICAgPFRpdGxlVGV4dFxuICAgICAgICB0aXRsZT17XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIENob29zZSBUaGUgd29ybGQgeW91IHdhbnRcbiAgICAgICAgICAgIDxiciBjbGFzc05hbWU9XCJtZDpibG9jayBoaWRkZW5cIiAvPlxuICAgICAgICAgICAgdG8gZXhwbG9yZVxuICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICAgIHRleHRTdHlsZXM9XCJ0ZXh0LWNlbnRlclwiXG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LVs1MHB4XSBmbGV4IGxnOmZsZXgtcm93IGZsZXgtY29sIG1pbi1oLVs3MHZoXSBnYXAtNVwiPlxuICAgICAgICB7ZXhwbG9yZVdvcmxkcy5tYXAod29ybGQsIChpbmRleCkgPT4gKFxuICAgICAgICAgIDxFeHBsb3JlQ2FyZFxuICAgICAgICAgICAga2V5PXt3b3JsZC5pZH1cbiAgICAgICAgICAgIHsuLi53b3JsZH1cbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlfVxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e3NldEFjdGl2ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgPC9zZWN0aW9uPlxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIm1vdGlvbiIsIlR5cGluZ1RleHQiLCJFeHBsb3JlQ2FyZCIsIlRpdGxlVGV4dCIsInN0eWxlcyIsInN0YWdnZXJDb250YWluZXIiLCJleHBsb3JlV29ybGRzIiwiRXhwbG9yZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwYWRkaW5ncyIsImlkIiwiZGl2IiwidmFyaWFudHMiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJhbW91bnQiLCJpbm5lcldpZHRoIiwidGl0bGUiLCJ0ZXh0U3R5bGVzIiwiYnIiLCJtYXAiLCJ3b3JsZCIsImluZGV4IiwiYWN0aXZlIiwiaGFuZGxlQ2xpY2siLCJzZXRBY3RpdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/Explore.jsx\n"));

/***/ })

});