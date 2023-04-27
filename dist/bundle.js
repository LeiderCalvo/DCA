/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ (() => {

eval("\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_export__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/store */ \"./src/types/store.ts\");\n\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_2__.addObserver)(this);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c, _d;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = \"\";\n        switch (_store_index__WEBPACK_IMPORTED_MODULE_2__.appState.screen) {\n            case _types_store__WEBPACK_IMPORTED_MODULE_3__.Screens.LOGIN:\n                const login = this.ownerDocument.createElement(\"h3\");\n                login.innerText = \"esta es la pantalla de login\";\n                const btn = this.ownerDocument.createElement(\"button\");\n                btn.innerText = \"¡No tienes cuenta? Registrate\";\n                btn.addEventListener(\"click\", () => {\n                    (0,_store_index__WEBPACK_IMPORTED_MODULE_2__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.navigate)(_types_store__WEBPACK_IMPORTED_MODULE_3__.Screens.DASHBOARD));\n                });\n                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(login);\n                (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(btn);\n                break;\n            case _types_store__WEBPACK_IMPORTED_MODULE_3__.Screens.SIGNUP:\n                const signup = this.ownerDocument.createElement(\"h3\");\n                signup.innerText = \"esta es la pantalla de signup\";\n                (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(signup);\n                break;\n            case _types_store__WEBPACK_IMPORTED_MODULE_3__.Screens.DASHBOARD:\n                const dashboard = this.ownerDocument.createElement(\"h3\");\n                dashboard.innerText = \"este es la pantalla de dashboard\";\n                (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(dashboard);\n                break;\n            default:\n                break;\n        }\n    }\n}\ncustomElements.define(\"app-container\", AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navigate\": () => (/* binding */ navigate)\n/* harmony export */ });\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\n\nconst navigate = (screen) => {\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_0__.NavigationActions.NAVIGATE,\n        payload: screen,\n    };\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addObserver\": () => (/* binding */ addObserver),\n/* harmony export */   \"appState\": () => (/* binding */ appState),\n/* harmony export */   \"dispatch\": () => (/* binding */ dispatch)\n/* harmony export */ });\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/storage */ \"./src/utils/storage.ts\");\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\n\n\n\nconst emptyState = {\n    screen: _types_store__WEBPACK_IMPORTED_MODULE_1__.Screens.LOGIN,\n};\nlet appState = _utils_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get({\n    key: _utils_storage__WEBPACK_IMPORTED_MODULE_0__.PersistanceKeys.STORE,\n    defaultValue: emptyState,\n});\nlet observers = [];\nconst persistStore = (state) => _utils_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set({ key: _utils_storage__WEBPACK_IMPORTED_MODULE_0__.PersistanceKeys.STORE, value: state });\nconst notifyObservers = () => observers.forEach((o) => o.render());\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(appState));\n    const newState = (0,_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer)(action, clone);\n    appState = newState;\n    persistStore(newState);\n    notifyObservers();\n};\nconst addObserver = (ref) => {\n    observers = [...observers, ref];\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\n\nconst reducer = (currentAction, currentState) => {\n    const { action, payload } = currentAction;\n    switch (action) {\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.NavigationActions.NAVIGATE:\n            return Object.assign(Object.assign({}, currentState), { screen: payload });\n        default:\n            return currentState;\n    }\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavigationActions\": () => (/* binding */ NavigationActions),\n/* harmony export */   \"Screens\": () => (/* binding */ Screens)\n/* harmony export */ });\nvar Screens;\n(function (Screens) {\n    Screens[\"LOGIN\"] = \"LOGIN\";\n    Screens[\"SIGNUP\"] = \"SIGNUP\";\n    Screens[\"DASHBOARD\"] = \"DASHBOARD\";\n})(Screens || (Screens = {}));\nvar NavigationActions;\n(function (NavigationActions) {\n    NavigationActions[\"NAVIGATE\"] = \"NAVIGATE\";\n})(NavigationActions || (NavigationActions = {}));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/types/store.ts?");

/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PersistanceKeys\": () => (/* binding */ PersistanceKeys),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar PersistanceKeys;\n(function (PersistanceKeys) {\n    PersistanceKeys[\"STORE\"] = \"STORE\";\n})(PersistanceKeys || (PersistanceKeys = {}));\nconst get = ({ key, defaultValue, }) => {\n    const value = localStorage.getItem(key) || sessionStorage.getItem(key);\n    return value ? JSON.parse(value) : defaultValue;\n};\nconst set = ({ key, value, session = false, }) => {\n    const storage = session ? sessionStorage : localStorage;\n    const parsed = JSON.stringify(value);\n    storage.setItem(key, parsed);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    get,\n    set,\n});\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/utils/storage.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;