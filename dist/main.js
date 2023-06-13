/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_operations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/operations.js */ \"./src/modules/operations.js\");\n/* harmony import */ var _modules_operations_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_operations_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst allList = JSON.parse(localStorage.getItem('todo')) || [];\nconst bkList = document.querySelector('.lists');\n(0,_modules_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(bkList, allList);\n\nconst edit = document.querySelector('.editTask');\nconst arrow = document.querySelector('.arrow');\narrow.addEventListener('click', () => {\n  if (edit.value !== '') {\n    (0,_modules_operations_js__WEBPACK_IMPORTED_MODULE_1__.addList)(allList, edit.value);\n    edit.value = '';\n    (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(bkList, allList);\n  }\n});\n\nbkList.addEventListener('click', (event) => {\n  const { target } = event;\n\n  if (target.classList.contains('delete')) {\n    const listItem = target.parentNode;\n    const listIndex = Array.from(bkList.children).indexOf(listItem);\n\n    (0,_modules_operations_js__WEBPACK_IMPORTED_MODULE_1__.removeList)(listIndex, allList);\n    listItem.remove();\n  }\n});\n\nbkList.addEventListener('input', (event) => {\n  const { target } = event;\n\n  if (target.classList.contains('list-desc')) {\n    const listItem = target.parentNode;\n    const listIndex = Array.from(bkList.children).indexOf(listItem);\n    const newDesc = target.textContent;\n\n    (0,_modules_operations_js__WEBPACK_IMPORTED_MODULE_1__.editList)(listIndex, newDesc, allList);\n  }\n});\n\n\n//# sourceURL=webpack://test-to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createListItem = (list) => {\n  const listItem = document.createElement('li');\n  const itemDiv = document.createElement('div');\n  const checkbox = document.createElement('input');\n  const label = document.createElement('label');\n  const deleteIcon = document.createElement('i');\n  itemDiv.className = `${list.index}`;\n  label.className = 'list-desc';\n  listItem.className = `items ${list.index}`;\n  checkbox.type = 'checkbox';\n  checkbox.id = `checkbox-${list.index}`;\n  checkbox.className = 'checkbox';\n  checkbox.name = `checkbox-${list.index}`;\n  checkbox.checked = list.completed;\n  label.textContent = list.description;\n  label.setAttribute('contenteditable', 'true');\n  deleteIcon.className = 'fa fa-trash delete';\n  itemDiv.appendChild(checkbox);\n  itemDiv.appendChild(label);\n  listItem.appendChild(itemDiv);\n  listItem.appendChild(deleteIcon);\n  return listItem;\n};\n\nconst displayList = (lists, allList) => {\n  lists.innerHTML = '';\n\n  allList.forEach((list) => {\n    const listItem = createListItem(list);\n    lists.appendChild(listItem);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayList);\n\n\n//# sourceURL=webpack://test-to-do-list/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/operations.js":
/*!***********************************!*\
  !*** ./src/modules/operations.js ***!
  \***********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://test-to-do-list/./src/modules/operations.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;