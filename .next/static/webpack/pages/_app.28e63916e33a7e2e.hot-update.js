"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./styles/Global.ts":
/*!**************************!*\
  !*** ./styles/Global.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalStyle\": function() { return /* binding */ GlobalStyle; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    *{\\n        margin: 0; padding:0;\\n        box-sizing: border-box;\\n        text-decoration: none;\\n        transition: all .5s linear;\\n        outline: none;\\n        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\\n    }\\n    ul{\\n        list-style-type: none;\\n    }\\n    body{\\n        background-color: #eee;\\n        font-size: 93.5%;\\n    }\\n    button{\\n        cursor: pointer;\\n        border: none;\\n    }\\n\\n    section{\\n        padding: 2rem 12% ;\\n    }\\n    section:nth-child(even){\\n        background-color: #eee;\\n    }\\n    .bar{\\n        display: none;\\n    }\\n    .menu-mobile{\\n        display: none;\\n    }\\n    @media (max-width:768px){\\n        html{\\n            font-size: 80.6%;\\n        }\\n        nav .menu{\\n            display: none;\\n        }\\n         .menu-mobile{\\n            display: block;\\n            a{\\n                color: #eee;\\n            }\\n            a:hover{\\n                color: #B28756;\\n            }\\n            z-index: 8;\\n            position: fixed;\\n            right: 0;top:0;bottom:0;\\n            background-color   :rgba(0,0,0,0.8) ;\\n            font-size:1.7rem;\\n            padding: 2.8rem;\\n            wi\\n            li{\\n                margin:1rem 0 ;\\n            }\\n        }\\n        section{\\n            padding: 1rem 10%;\\n        }\\n        .bar{\\n            display: block;\\n            cursor: pointer;\\n        }\\n        .header{\\n            display: flex;\\n            justify-content: space-between;\\n            padding: 0 3rem;\\n        }\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(_templateObject());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvR2xvYmFsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFFL0MsSUFBTUMsV0FBVyxHQUFDRCxvRUFBaUIsbUJBd0V6QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9HbG9iYWwudHM/YmU0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlPWNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gICAgKntcclxuICAgICAgICBtYXJnaW46IDA7IHBhZGRpbmc6MDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGxpbmVhcjtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OidHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBib2R5e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgZm9udC1zaXplOiA5My41JTtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIHNlY3Rpb257XHJcbiAgICAgICAgcGFkZGluZzogMnJlbSAxMiUgO1xyXG4gICAgfVxyXG4gICAgc2VjdGlvbjpudGgtY2hpbGQoZXZlbil7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIH1cclxuICAgIC5iYXJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5tZW51LW1vYmlsZXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgICAgIGh0bWx7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODAuNiU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdiAubWVudXtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgIC5tZW51LW1vYmlsZXtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2VlZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNCMjg3NTY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgei1pbmRleDogODtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICByaWdodDogMDt0b3A6MDtib3R0b206MDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAgIDpyZ2JhKDAsMCwwLDAuOCkgO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MS43cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyLjhyZW07XHJcbiAgICAgICAgICAgIHdpXHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjFyZW0gMCA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2VjdGlvbntcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAxMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAzcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDsiXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJHbG9iYWxTdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Global.ts\n");

/***/ })

});