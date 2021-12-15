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
/***/ (() => {

eval("// tesis\r\nlet once = true;\r\n\r\ndocument.querySelectorAll(\".modal-container img\").forEach(element => {\r\n    element.addEventListener(\"click\", function(e){\r\n        e.stopPropagation();\r\n        if(once){\r\n            this.parentNode.classList.add(\"active\");\r\n            once = false;\r\n        }        \r\n    })\r\n})\r\n\r\ndocument.querySelectorAll(\".modal-container\").forEach(element => {\r\n    element.addEventListener(\"click\", function(e){\r\n        if(once == false){\r\n            this.classList.remove(\"active\");\r\n            once = true;\r\n        }\r\n    })\r\n})\n\n//# sourceURL=webpack://my-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;