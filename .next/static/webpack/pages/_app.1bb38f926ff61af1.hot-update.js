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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ \"./node_modules/lodash/merge.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"./node_modules/wagmi/providers/alchemy/dist/wagmi-providers-alchemy.esm.js\");\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/infura */ \"./node_modules/wagmi/providers/infura/dist/wagmi-providers-infura.esm.js\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"./node_modules/wagmi/providers/jsonRpc/dist/wagmi-providers-jsonRpc.esm.js\");\n\n\n\n\n\n\n\n\n\n\nvar ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_7__.chain.sepolia\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__.alchemyProvider)({\n        apiKey: \"7DJ4nBslp-trlbKbdSqF-1rJppAcSk6e\"\n    }),\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_6__.jsonRpcProvider)({\n        rpc: function() {\n            return {\n                http: \"https://eth-sepolia.g.alchemy.com/v2/7DJ4nBslp-trlbKbdSqF-1rJppAcSk6e\",\n                priority: 1\n            };\n        }\n    })\n]), chains = ref.chains, provider = ref.provider;\nvar connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.getDefaultWallets)({\n    appName: \"Custom Dex\",\n    chains: chains\n}).connectors;\nvar wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.createClient)({\n    autoConnect: true,\n    connectors: connectors,\n    provider: provider\n});\nvar myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_7__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.RainbowKitProvider, {\n            chains: chains,\n            theme: myTheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, pageProps), void 0, false, {\n                fileName: \"C:\\\\Users\\\\deshm\\\\OneDrive\\\\Desktop\\\\New folder\\\\CryptoScout\\\\aryan -2\\\\uniswap-tokem-marketplace-starter-file\\\\pages\\\\_app.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\deshm\\\\OneDrive\\\\Desktop\\\\New folder\\\\CryptoScout\\\\aryan -2\\\\uniswap-tokem-marketplace-starter-file\\\\pages\\\\_app.js\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\deshm\\\\OneDrive\\\\Desktop\\\\New folder\\\\CryptoScout\\\\aryan -2\\\\uniswap-tokem-marketplace-starter-file\\\\pages\\\\_app.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUErQjtBQUNFO0FBQ1U7QUFNWDtBQUUwQztBQUNoQjtBQUNGO0FBQ0U7QUFFMUQsSUFBNkJNLEdBd0I1QixHQXhCNEJBLHNEQUFlLENBQzFDO0lBQUNELGdEQUFhO0NBQUMsRUFDZjtJQUNFSSx3RUFBZSxDQUFDO1FBQ2RJLE1BQU0sRUFBRSxrQ0FBa0M7S0FDM0MsQ0FBQztJQUNGRix3RUFBZSxDQUFDO1FBQ2RHLEdBQUcsRUFBRTttQkFBTztnQkFDVkMsSUFBSSxFQUFFLHVFQUF1RTtnQkFDN0VDLFFBQVEsRUFBRSxDQUFDO2FBQ1o7U0FBQztLQUNILENBQUM7Q0FZSCxDQUNGLEVBeEJPQyxNQUFNLEdBQWVYLEdBd0I1QixDQXhCT1csTUFBTSxFQUFFQyxRQUFRLEdBQUtaLEdBd0I1QixDQXhCZVksUUFBUTtBQTBCeEIsSUFBTSxVQUFZLEdBQUtqQix5RUFBaUIsQ0FBQztJQUN2Q21CLE9BQU8sRUFBRSxZQUFZO0lBQ3JCSCxNQUFNLEVBQU5BLE1BQU07Q0FDUCxDQUFDLENBSE1FLFVBQVU7QUFLbEIsSUFBTUUsV0FBVyxHQUFHZCxtREFBWSxDQUFDO0lBQy9CZSxXQUFXLEVBQUUsSUFBSTtJQUNqQkgsVUFBVSxFQUFWQSxVQUFVO0lBQ1ZELFFBQVEsRUFBUkEsUUFBUTtDQUNULENBQUM7QUFLRixJQUFNSyxPQUFPLEdBQUd2QixtREFBSyxDQUFDSSxxRUFBYSxFQUFFLEVBQUU7SUFDckNvQixNQUFNLEVBQUU7UUFDTkMsV0FBVyxFQUFFLFNBQVM7UUFDdEJDLHFCQUFxQixFQUFFLE1BQU07S0FDOUI7Q0FDRixDQUFDO0FBQ0YsU0FBU0MsS0FBSyxDQUFDLEtBQXdCLEVBQUU7UUFBeEJDLFNBQVMsR0FBWCxLQUF3QixDQUF0QkEsU0FBUyxFQUFFQyxTQUFTLEdBQXRCLEtBQXdCLENBQVhBLFNBQVM7SUFDbkMscUJBQ0UsOERBQUNyQiw4Q0FBVztRQUFDc0IsTUFBTSxFQUFFVCxXQUFXO2tCQUM5Qiw0RUFBQ25CLHNFQUFrQjtZQUFDZSxNQUFNLEVBQUVBLE1BQU07WUFBRWMsS0FBSyxFQUFFUixPQUFPO3NCQUNoRCw0RUFBQ0ssU0FBUyxxRkFBS0MsU0FBUzs7OztvQkFBSTs7Ozs7Z0JBQ1Q7Ozs7O1lBQ1QsQ0FDZDtDQUNIO0FBUlFGLEtBQUFBLEtBQUs7QUFVZCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IG1lcmdlIGZyb20gXCJsb2Rhc2gvbWVyZ2VcIjtcclxuaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RGVmYXVsdFdhbGxldHMsXHJcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxyXG4gIGRhcmtUaGVtZSxcclxuICBtaWRuaWdodFRoZW1lLFxyXG59IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XHJcblxyXG5pbXBvcnQgeyBjaGFpbiwgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnIH0gZnJvbSBcIndhZ21pXCI7XHJcbmltcG9ydCB7IGFsY2hlbXlQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvYWxjaGVteVwiO1xyXG5pbXBvcnQgeyBpbmZ1cmFQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvaW5mdXJhXCI7XHJcbmltcG9ydCB7IGpzb25ScGNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvanNvblJwY1wiO1xyXG5cclxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXHJcbiAgW2NoYWluLnNlcG9saWFdLFxyXG4gIFtcclxuICAgIGFsY2hlbXlQcm92aWRlcih7IC8vIFVzZSBhbGNoZW15UHJvdmlkZXIgaW5zdGVhZCBvZiBpbmZ1cmFQcm92aWRlclxyXG4gICAgICBhcGlLZXk6IFwiN0RKNG5Cc2xwLXRybGJLYmRTcUYtMXJKcHBBY1NrNmVcIiwgLy8gUmVwbGFjZSB3aXRoIHlvdXIgQWxjaGVteSBBUEkga2V5XHJcbiAgICB9KSxcclxuICAgIGpzb25ScGNQcm92aWRlcih7XHJcbiAgICAgIHJwYzogKCkgPT4gKHtcclxuICAgICAgICBodHRwOiBcImh0dHBzOi8vZXRoLXNlcG9saWEuZy5hbGNoZW15LmNvbS92Mi83REo0bkJzbHAtdHJsYktiZFNxRi0xckpwcEFjU2s2ZVwiLFxyXG4gICAgICAgIHByaW9yaXR5OiAxLFxyXG4gICAgICB9KSxcclxuICAgIH0pXHJcblxyXG4gICAgLy8gaW5mdXJhUHJvdmlkZXIoe1xyXG4gICAgLy8gICBhcGlLZXk6IFwiNDQzOTcyZGM2YmVjNDNkNjk0MmIxMzFhODkyNDQ4MDZcIixcclxuICAgIC8vICAgcHJpb3JpdHk6IDFcclxuICAgIC8vIH0pLFxyXG4gICAgLy8ganNvblJwY1Byb3ZpZGVyKHtcclxuICAgIC8vICAgcnBjOiAoKSA9PiAoe1xyXG4gICAgLy8gICAgIGh0dHA6IFwiaHR0cHM6Ly9zZXBvbGlhLmluZnVyYS5pby92My80NDM5NzJkYzZiZWM0M2Q2OTQyYjEzMWE4OTI0NDgwNlwiLFxyXG4gICAgLy8gICAgIHByaW9yaXR5OiAxLFxyXG4gICAgLy8gICB9KSxcclxuICAgIC8vIH0pXHJcbiAgXVxyXG4pXHJcblxyXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcclxuICBhcHBOYW1lOiBcIkN1c3RvbSBEZXhcIixcclxuICBjaGFpbnMsXHJcbn0pO1xyXG5cclxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4gIGF1dG9Db25uZWN0OiB0cnVlLFxyXG4gIGNvbm5lY3RvcnMsXHJcbiAgcHJvdmlkZXIsXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBteVRoZW1lID0gbWVyZ2UobWlkbmlnaHRUaGVtZSgpLCB7XHJcbiAgY29sb3JzOiB7XHJcbiAgICBhY2NlbnRDb2xvcjogXCIjMTgxODFiXCIsXHJcbiAgICBhY2NlbnRDb2xvckZvcmVncm91bmQ6IFwiI2ZmZlwiLFxyXG4gIH0sXHJcbn0pO1xyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdhZ21pQ29uZmlnIGNsaWVudD17d2FnbWlDbGllbnR9PlxyXG4gICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfSB0aGVtZT17bXlUaGVtZX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cclxuICAgIDwvV2FnbWlDb25maWc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJtZXJnZSIsImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZGFya1RoZW1lIiwibWlkbmlnaHRUaGVtZSIsImNoYWluIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJhbGNoZW15UHJvdmlkZXIiLCJpbmZ1cmFQcm92aWRlciIsImpzb25ScGNQcm92aWRlciIsInNlcG9saWEiLCJhcGlLZXkiLCJycGMiLCJodHRwIiwicHJpb3JpdHkiLCJjaGFpbnMiLCJwcm92aWRlciIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIm15VGhlbWUiLCJjb2xvcnMiLCJhY2NlbnRDb2xvciIsImFjY2VudENvbG9yRm9yZWdyb3VuZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});