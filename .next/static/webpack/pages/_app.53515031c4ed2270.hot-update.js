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

/***/ "./src/components/header/style.ts":
/*!****************************************!*\
  !*** ./src/components/header/style.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Banner\": function() { return /* binding */ Banner; },\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"NavContainer\": function() { return /* binding */ NavContainer; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\n    >div{\\n        color:#B28756;\\n        display: flex;\\n        //flex-direction: column;\\n        font-weight: 600;\\n        align-items: center;\\n        gap: .5rem;\\n        font-size: 1.3rem;\\n    }\\n\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 6rem;\\n    height: 70px;\\n    //B28756\\n    background-color: #000;\\n    padding: 1rem;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    font-weight:600;\\n    font-size: 1rem;\\n    ul{\\n        flex:1;\\n        justify-content: flex-end;\\n        list-style-type: none;\\n        display: flex;\\n        gap:1rem;\\n        flex-wrap: wrap;\\n    }\\n    .menu-mobile{\\n   \\n    a{\\n        text-decoration-line: none;\\n        color: #fff;\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    height: 90vh;\\n    >div{\\n       \\n       // background: url('../../../images/bg.jpg');\\n        position: absolute;\\n        top: 3.6rem;left:0;right:0;bottom:0;\\n        background-color   :rgba(0,0,0,0.8) ;\\n        z-index: 1;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n        .description{   \\n            text-align: center;\\n            h2{\\n                font-size: 3.6rem;\\n                font-weight: 1900;\\n            }\\n            .second{\\n                color: #B28756;\\n            }\\n            p{\\n                font-size: 1.5rem;\\n            }\\n      \\n            color: #fff;\\n        }\\n    }\\n \\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].header(_templateObject());\nvar NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav(_templateObject1());\nvar Banner = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvc3R5bGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBR2hDLElBQU1DLFNBQVMsR0FBR0QsZ0VBQWEsbUJBb0JyQyxDQUFDO0FBRUssSUFBTUcsWUFBWSxHQUFDSCw2REFBVSxvQkFpQm5DLENBQUM7QUFDSyxJQUFNSyxNQUFNLEdBQUdMLDZEQUFVLG9CQTZCL0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvc3R5bGUudHM/MGQ2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG5cclxuICAgID5kaXZ7XHJcbiAgICAgICAgY29sb3I6I0IyODc1NjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC8vZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiAuNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA2cmVtO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgLy9CMjg3NTZcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkNvbnRhaW5lcj1zdHlsZWQubmF2YFxyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgdWx7XHJcbiAgICAgICAgZmxleDoxO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOjFyZW07XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtbW9iaWxle1xyXG4gICBcclxuICAgIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBCYW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgPmRpdntcclxuICAgICAgIFxyXG4gICAgICAgLy8gYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9pbWFnZXMvYmcuanBnJyk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMy42cmVtO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgICA6cmdiYSgwLDAsMCwwLjgpIDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAuZGVzY3JpcHRpb257ICAgXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNnJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxOTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZWNvbmR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0IyODc1NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuIFxyXG5gOyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb250YWluZXIiLCJoZWFkZXIiLCJOYXZDb250YWluZXIiLCJuYXYiLCJCYW5uZXIiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header/style.ts\n");

/***/ })

});