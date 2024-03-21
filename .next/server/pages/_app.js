/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/infura */ \"wagmi/providers/infura\");\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.goerli\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__.alchemyProvider)({\n        apiKey: \"7DJ4nBslp-trlbKbdSqF-1rJppAcSk6e\"\n    }),\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_7__.jsonRpcProvider)({\n        rpc: ()=>({\n                http: \"https://eth-sepolia.g.alchemy.com/v2/7DJ4nBslp-trlbKbdSqF-1rJppAcSk6e\",\n                priority: 1\n            })\n    })\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"Custom Dex\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            chains: chains,\n            theme: myTheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\deshm\\\\OneDrive\\\\Desktop\\\\New folder\\\\CryptoScout\\\\aryan -2\\\\uniswap-tokem-marketplace-starter-file\\\\pages\\\\_app.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\deshm\\\\OneDrive\\\\Desktop\\\\New folder\\\\CryptoScout\\\\aryan -2\\\\uniswap-tokem-marketplace-starter-file\\\\pages\\\\_app.js\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\deshm\\\\OneDrive\\\\Desktop\\\\New folder\\\\CryptoScout\\\\aryan -2\\\\uniswap-tokem-marketplace-starter-file\\\\pages\\\\_app.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNFO0FBQ1U7QUFNWDtBQUUwQztBQUNoQjtBQUNGO0FBQ0U7QUFFMUQsTUFBTSxFQUFFWSxNQUFNLEdBQUVDLFFBQVEsR0FBRSxHQUFHUCxzREFBZSxDQUMxQztJQUFDRCwrQ0FBWTtDQUFDLEVBQ2Q7SUFDRUksd0VBQWUsQ0FBQztRQUNkTSxNQUFNLEVBQUUsa0NBQWtDO0tBQzNDLENBQUM7SUFDRkosd0VBQWUsQ0FBQztRQUNkSyxHQUFHLEVBQUUsSUFBTSxDQUFDO2dCQUNWQyxJQUFJLEVBQUUsdUVBQXVFO2dCQUM3RUMsUUFBUSxFQUFFLENBQUM7YUFDWixDQUFDO0tBQ0gsQ0FBQztDQVlILENBQ0Y7QUFFRCxNQUFNLEVBQUVDLFVBQVUsR0FBRSxHQUFHbEIseUVBQWlCLENBQUM7SUFDdkNtQixPQUFPLEVBQUUsWUFBWTtJQUNyQlIsTUFBTTtDQUNQLENBQUM7QUFFRixNQUFNUyxXQUFXLEdBQUdkLG1EQUFZLENBQUM7SUFDL0JlLFdBQVcsRUFBRSxJQUFJO0lBQ2pCSCxVQUFVO0lBQ1ZOLFFBQVE7Q0FDVCxDQUFDO0FBS0YsTUFBTVUsT0FBTyxHQUFHdkIsbURBQUssQ0FBQ0kscUVBQWEsRUFBRSxFQUFFO0lBQ3JDb0IsTUFBTSxFQUFFO1FBQ05DLFdBQVcsRUFBRSxTQUFTO1FBQ3RCQyxxQkFBcUIsRUFBRSxNQUFNO0tBQzlCO0NBQ0YsQ0FBQztBQUNGLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDckIsOENBQVc7UUFBQ3NCLE1BQU0sRUFBRVQsV0FBVztrQkFDOUIsNEVBQUNuQixzRUFBa0I7WUFBQ1UsTUFBTSxFQUFFQSxNQUFNO1lBQUVtQixLQUFLLEVBQUVSLE9BQU87c0JBQ2hELDRFQUFDSyxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7OztnQkFDVDs7Ozs7WUFDVCxDQUNkO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pc3dhcC10b2tlbi1tYXJrZXRwbGFjZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IG1lcmdlIGZyb20gXCJsb2Rhc2gvbWVyZ2VcIjtcclxuaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RGVmYXVsdFdhbGxldHMsXHJcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxyXG4gIGRhcmtUaGVtZSxcclxuICBtaWRuaWdodFRoZW1lLFxyXG59IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XHJcblxyXG5pbXBvcnQgeyBjaGFpbiwgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnIH0gZnJvbSBcIndhZ21pXCI7XHJcbmltcG9ydCB7IGFsY2hlbXlQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvYWxjaGVteVwiO1xyXG5pbXBvcnQgeyBpbmZ1cmFQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvaW5mdXJhXCI7XHJcbmltcG9ydCB7IGpzb25ScGNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvanNvblJwY1wiO1xyXG5cclxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXHJcbiAgW2NoYWluLmdvZXJsaV0sXHJcbiAgW1xyXG4gICAgYWxjaGVteVByb3ZpZGVyKHsgLy8gVXNlIGFsY2hlbXlQcm92aWRlciBpbnN0ZWFkIG9mIGluZnVyYVByb3ZpZGVyXHJcbiAgICAgIGFwaUtleTogXCI3REo0bkJzbHAtdHJsYktiZFNxRi0xckpwcEFjU2s2ZVwiLCAvLyBSZXBsYWNlIHdpdGggeW91ciBBbGNoZW15IEFQSSBrZXlcclxuICAgIH0pLFxyXG4gICAganNvblJwY1Byb3ZpZGVyKHtcclxuICAgICAgcnBjOiAoKSA9PiAoe1xyXG4gICAgICAgIGh0dHA6IFwiaHR0cHM6Ly9ldGgtc2Vwb2xpYS5nLmFsY2hlbXkuY29tL3YyLzdESjRuQnNscC10cmxiS2JkU3FGLTFySnBwQWNTazZlXCIsXHJcbiAgICAgICAgcHJpb3JpdHk6IDEsXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBpbmZ1cmFQcm92aWRlcih7XHJcbiAgICAvLyAgIGFwaUtleTogXCI0NDM5NzJkYzZiZWM0M2Q2OTQyYjEzMWE4OTI0NDgwNlwiLFxyXG4gICAgLy8gICBwcmlvcml0eTogMVxyXG4gICAgLy8gfSksXHJcbiAgICAvLyBqc29uUnBjUHJvdmlkZXIoe1xyXG4gICAgLy8gICBycGM6ICgpID0+ICh7XHJcbiAgICAvLyAgICAgaHR0cDogXCJodHRwczovL3NlcG9saWEuaW5mdXJhLmlvL3YzLzQ0Mzk3MmRjNmJlYzQzZDY5NDJiMTMxYTg5MjQ0ODA2XCIsXHJcbiAgICAvLyAgICAgcHJpb3JpdHk6IDEsXHJcbiAgICAvLyAgIH0pLFxyXG4gICAgLy8gfSlcclxuICBdXHJcbilcclxuXHJcbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xyXG4gIGFwcE5hbWU6IFwiQ3VzdG9tIERleFwiLFxyXG4gIGNoYWlucyxcclxufSk7XHJcblxyXG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XHJcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXHJcbiAgY29ubmVjdG9ycyxcclxuICBwcm92aWRlcixcclxufSlcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IG15VGhlbWUgPSBtZXJnZShtaWRuaWdodFRoZW1lKCksIHtcclxuICBjb2xvcnM6IHtcclxuICAgIGFjY2VudENvbG9yOiBcIiMxODE4MWJcIixcclxuICAgIGFjY2VudENvbG9yRm9yZWdyb3VuZDogXCIjZmZmXCIsXHJcbiAgfSxcclxufSk7XHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XHJcbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9IHRoZW1lPXtteVRoZW1lfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxyXG4gICAgPC9XYWdtaUNvbmZpZz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIm1lcmdlIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJkYXJrVGhlbWUiLCJtaWRuaWdodFRoZW1lIiwiY2hhaW4iLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsImFsY2hlbXlQcm92aWRlciIsImluZnVyYVByb3ZpZGVyIiwianNvblJwY1Byb3ZpZGVyIiwiY2hhaW5zIiwicHJvdmlkZXIiLCJnb2VybGkiLCJhcGlLZXkiLCJycGMiLCJodHRwIiwicHJpb3JpdHkiLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJteVRoZW1lIiwiY29sb3JzIiwiYWNjZW50Q29sb3IiLCJhY2NlbnRDb2xvckZvcmVncm91bmQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/alchemy");

/***/ }),

/***/ "wagmi/providers/infura":
/*!*****************************************!*\
  !*** external "wagmi/providers/infura" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/infura");

/***/ }),

/***/ "wagmi/providers/jsonRpc":
/*!******************************************!*\
  !*** external "wagmi/providers/jsonRpc" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();