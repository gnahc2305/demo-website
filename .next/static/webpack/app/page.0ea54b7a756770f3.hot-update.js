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

/***/ "./components/ExploreCard.jsx":
/*!************************************!*\
  !*** ./components/ExploreCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\nconst ExploreCard = (param)=>/*#__PURE__*/ {\n    let { id , imgUrl , title , index , active , handleClick  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.fadeIn)(\"right\", \"spring\", index * 0.5, 0.75),\n        className: \"\".concat(active === id ? \"lg:flex-[3.5] flex-[10]\" : \"lg:flex-[0.5] flex-[2]\", \" relative flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imgUrl,\n                alt: title,\n                className: \"absolute w-full h-full object-cover rounded-[24px]\"\n            }, void 0, false, {\n                fileName: \"/home/andres/repos/landing_page/components/ExploreCard.jsx\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, undefined),\n            active !== id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/andres/repos/landing_page/components/ExploreCard.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].flexCenter, \" w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/headset.svg\",\n                            alt: \"headset\",\n                            className: \"w-1/2 h-1/2 object-contain\"\n                        }, void 0, false, {\n                            fileName: \"/home/andres/repos/landing_page/components/ExploreCard.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/andres/repos/landing_page/components/ExploreCard.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-normal text-[16px] \",\n                        children: \"Enter the Metaverse\"\n                    }, void 0, false, {\n                        fileName: \"/home/andres/repos/landing_page/components/ExploreCard.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/andres/repos/landing_page/components/ExploreCard.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/andres/repos/landing_page/components/ExploreCard.jsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ExploreCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExploreCard);\nvar _c;\n$RefreshReg$(_c, \"ExploreCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGxvcmVDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRXVDO0FBRVI7QUFDVTtBQUV6QyxNQUFNRyxjQUFjLHVCQUNsQjtRQURtQixFQUFFQyxHQUFFLEVBQUVDLE9BQU0sRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRUMsWUFBVyxFQUFFO1dBQ3BFLDhEQUFDVCxxREFBVTtRQUNUVyxVQUFVVCxxREFBTUEsQ0FBQyxTQUFTLFVBQVVLLFFBQVEsS0FBSztRQUNqREssV0FBVyxHQUVWLE9BRENKLFdBQVdKLEtBQUssNEJBQTRCLHdCQUF3QixFQUNyRTs7MEJBRUQsOERBQUNTO2dCQUNDQyxLQUFLVDtnQkFDTFUsS0FBS1Q7Z0JBQ0xNLFdBQVU7Ozs7OztZQUdYSixXQUFXSixtQkFDViw4REFBQ1k7Z0JBQUdKLFdBQVU7MEJBQ1hOOzs7OzswQ0FHSCw4REFBQ0k7Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDRjt3QkFBSUUsV0FBVyxHQUFxQixPQUFsQlgsMERBQWlCLEVBQUM7a0NBQ25DLDRFQUFDWTs0QkFDQ0MsS0FBSTs0QkFDSkMsS0FBSTs0QkFDSkgsV0FBVTs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUNNO3dCQUFFTixXQUFVO2tDQUEyQjs7Ozs7Ozs7Ozs7eUJBSTNDOzs7Ozs7O0FBQ1M7S0EvQlJUO0FBa0NOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRXhwbG9yZUNhcmQuanN4PzIzY2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlc1wiO1xuaW1wb3J0IHsgZmFkZUluIH0gZnJvbSBcIi4uL3V0aWxzL21vdGlvblwiO1xuXG5jb25zdCBFeHBsb3JlQ2FyZCA9ICh7IGlkLCBpbWdVcmwsIHRpdGxlLCBpbmRleCwgYWN0aXZlLCBoYW5kbGVDbGljayB9KSA9PiAoXG4gIDxtb3Rpb24uZGl2XG4gICAgdmFyaWFudHM9e2ZhZGVJbihcInJpZ2h0XCIsIFwic3ByaW5nXCIsIGluZGV4ICogMC41LCAwLjc1KX1cbiAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgYWN0aXZlID09PSBpZCA/IFwibGc6ZmxleC1bMy41XSBmbGV4LVsxMF1cIiA6IFwibGc6ZmxleC1bMC41XSBmbGV4LVsyXVwiXG4gICAgfSByZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4tdy1bMTcwcHhdIGgtWzcwMHB4XSB0cmFuc2l0aW9uLVtmbGV4XSBkdXJhdGlvbi1bMC43c10gZWFzZS1vdXQtZmxleCBjdXJzb3ItcG9pbnRlcmB9XG4gID5cbiAgICA8aW1nXG4gICAgICBzcmM9e2ltZ1VybH1cbiAgICAgIGFsdD17dGl0bGV9XG4gICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciByb3VuZGVkLVsyNHB4XVwiXG4gICAgLz5cblxuICAgIHthY3RpdmUgIT09IGlkID8gKFxuICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgc206dGV4dC1bMjZweF0gdGV4dC1bMThweF0gdGV4dC13aGl0ZSBhYnNvbHV0ZSB6LTAgbGc6Ym90dG9tLTIwIGxnOnJvdGF0ZS1bLTkwZGVnXSBsZzpvcmlnaW4tWzAsMF1cIj5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9oMz5cbiAgICApIDogKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBwLTgganVzdGlmeS1zdGFydCB3LWZ1bGwgZmxleC1jb2wgYmctW3JnYmEoMCwwLDAsMC41KV0gcm91bmRlZC1iLVsyNHB4XVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmZsZXhDZW50ZXJ9IHctWzYwcHhdIGgtWzYwcHhdIHJvdW5kZWQtWzI0cHhdIGdsYXNzbW9ycGhpc20gbWItWzE2cHhdYH0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiL2hlYWRzZXQuc3ZnXCJcbiAgICAgICAgICAgIGFsdD1cImhlYWRzZXRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzIgaC0xLzIgb2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LVsxNnB4XSBcIj5cbiAgICAgICAgICBFbnRlciB0aGUgTWV0YXZlcnNlXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gIDwvbW90aW9uLmRpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxvcmVDYXJkO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInN0eWxlcyIsImZhZGVJbiIsIkV4cGxvcmVDYXJkIiwiaWQiLCJpbWdVcmwiLCJ0aXRsZSIsImluZGV4IiwiYWN0aXZlIiwiaGFuZGxlQ2xpY2siLCJkaXYiLCJ2YXJpYW50cyIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImgzIiwiZmxleENlbnRlciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ExploreCard.jsx\n"));

/***/ })

});