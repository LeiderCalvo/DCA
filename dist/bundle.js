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

/***/ "./src/components/Button/Button.ts":
/*!*****************************************!*\
  !*** ./src/components/Button/Button.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeButton\": () => (/* binding */ AttributeButton),\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\nvar AttributeButton;\n(function (AttributeButton) {\n    AttributeButton[\"btn_text\"] = \"btn_text\";\n})(AttributeButton || (AttributeButton = {}));\nclass Button extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            btn_text: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = '';\n        const button = this.ownerDocument.createElement('button');\n        button.innerText = `${this.btn_text}`;\n        button.addEventListener('click', () => {\n            button.innerText = \"No like\";\n        });\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(button);\n    }\n}\ncustomElements.define('app-button', Button);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Button/Button.ts?");

/***/ }),

/***/ "./src/components/Card/Card.ts":
/*!*************************************!*\
  !*** ./src/components/Card/Card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeCard\": () => (/* binding */ AttributeCard),\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Button/Button */ \"./src/components/Button/Button.ts\");\n/* harmony import */ var _Figure_Figure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Figure/Figure */ \"./src/components/Figure/Figure.ts\");\n\n\nvar AttributeCard;\n(function (AttributeCard) {\n    AttributeCard[\"anime_name\"] = \"anime_name\";\n    AttributeCard[\"url\"] = \"url\";\n    AttributeCard[\"btn_text\"] = \"btn_text\";\n})(AttributeCard || (AttributeCard = {}));\nclass Card extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            anime_name: null,\n            url: null,\n            btn_text: null\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    constructor() {\n        super();\n        this.anime_name = \"\";\n        this.url = \"\";\n        this.btn_text = \"\";\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = '';\n        const container = this.ownerDocument.createElement('section');\n        const figure = this.ownerDocument.createElement('app-figure');\n        figure.setAttribute(_Figure_Figure__WEBPACK_IMPORTED_MODULE_1__.AttributeFigure.anime_name, this.anime_name);\n        figure.setAttribute(_Figure_Figure__WEBPACK_IMPORTED_MODULE_1__.AttributeFigure.url, this.url);\n        const button = this.ownerDocument.createElement('app-button');\n        button.setAttribute(_Button_Button__WEBPACK_IMPORTED_MODULE_0__.AttributeButton.btn_text, this.btn_text);\n        container.appendChild(figure);\n        container.appendChild(button);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(container);\n    }\n}\ncustomElements.define('app-card', Card);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Card/Card.ts?");

/***/ }),

/***/ "./src/components/Figure/Figure.ts":
/*!*****************************************!*\
  !*** ./src/components/Figure/Figure.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeFigure\": () => (/* binding */ AttributeFigure),\n/* harmony export */   \"default\": () => (/* binding */ Figure)\n/* harmony export */ });\nvar AttributeFigure;\n(function (AttributeFigure) {\n    AttributeFigure[\"anime_name\"] = \"anime_name\";\n    AttributeFigure[\"url\"] = \"url\";\n})(AttributeFigure || (AttributeFigure = {}));\nclass Figure extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            anime_name: null,\n            url: null\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n                <section>\r\n                <h1>${this.anime_name}</h1>\r\n                <img src=\"${this.url}\">\r\n                </section>\r\n            `;\n        }\n    }\n}\ncustomElements.define('app-figure', Figure);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Figure/Figure.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* reexport safe */ _Button_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"Card\": () => (/* reexport safe */ _Card_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Figure\": () => (/* reexport safe */ _Figure_Figure__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Figure_Figure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Figure/Figure */ \"./src/components/Figure/Figure.ts\");\n/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card/Card */ \"./src/components/Card/Card.ts\");\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button/Button */ \"./src/components/Button/Button.ts\");\n\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _screens_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/dashboard */ \"./src/screens/dashboard.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('app-dashboard');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/screens/dashboard.ts":
/*!**********************************!*\
  !*** ./src/screens/dashboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getData */ \"./src/services/getData.ts\");\n/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card/Card */ \"./src/components/Card/Card.ts\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/export */ \"./src/components/export.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nclass Dashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const data = yield (0,_services_getData__WEBPACK_IMPORTED_MODULE_0__.getData)();\n            this.render(data);\n        });\n    }\n    render(data) {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = '';\n        data.forEach((e) => {\n            var _a;\n            const card = this.ownerDocument.createElement('app-card');\n            card.setAttribute(_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__.AttributeCard.anime_name, e.anime_name);\n            card.setAttribute(_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__.AttributeCard.url, e.url);\n            card.setAttribute(_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__.AttributeCard.btn_text, \"Dar like\");\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(card);\n        });\n    }\n}\ncustomElements.define('app-dashboard', Dashboard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/dashboard.ts?");

/***/ }),

/***/ "./src/services/getData.ts":
/*!*********************************!*\
  !*** ./src/services/getData.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction getData() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const data = yield fetch('https://nekos.best/api/v2/hug?amount=5').then(res => res.json());\n            console.log(data);\n            return data.results;\n        }\n        catch (error) {\n            console.error(error);\n        }\n    });\n}\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/getData.ts?");

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