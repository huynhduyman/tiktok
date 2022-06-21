"use strict";
exports.id = 562;
exports.ids = [562];
exports.modules = {

/***/ 4562:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1247);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8847);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7280);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4331);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const WalletConnectionProvider = ({
  children
}) => {
  const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => _utils_const__WEBPACK_IMPORTED_MODULE_4__/* .SOLANA_HOST */ .VH, []);
  const wallets = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => [new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.PhantomWalletAdapter()], []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.ConnectionProvider, {
    endpoint: endpoint,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.WalletProvider, {
      wallets: wallets,
      autoConnect: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__.WalletModalProvider, {
        children: children
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletConnectionProvider);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;