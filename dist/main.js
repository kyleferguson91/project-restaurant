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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutMaker\": () => (/* binding */ aboutMaker)\n/* harmony export */ });\nfunction aboutMaker() {\r\n    const about = document.createElement('div')\r\n\r\n    about.classList.add('aboutmenu')\r\n    about.classList.add('mainabout')\r\n    const innerabout = document.createElement('div')\r\n    about.appendChild(innerabout)\r\n\r\n\r\n    const homeTitle = document.createElement('p')\r\n    homeTitle.textContent = \"The Picklery and The Butcher\"\r\n    homeTitle.classList.add('hometext')\r\n    homeTitle.classList.add('homemenutext')\r\n\r\n    innerabout.appendChild(homeTitle)\r\n\r\n    \r\n    const quote = document.createElement('p')\r\n    quote.textContent = \"Come see what the fuss is about\"\r\n    quote.classList.add('quote')\r\n    quote.classList.add('menuquote')\r\n    quote.classList.add('aboutcontact')\r\n    innerabout.appendChild(quote)\r\n\r\n    \r\n    const quote1 = document.createElement('p')\r\n    quote1.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod\"\r\n    quote1.classList.add('quote')\r\n    quote1.classList.add('menuquote')\r\n    quote1.classList.add('details')\r\n \r\n    innerabout.appendChild(quote1)\r\n    \r\n\r\n\r\n    return about\r\n}\n\n//# sourceURL=webpack://project-restaurant/./src/about.js?");

/***/ }),

/***/ "./src/borders.js":
/*!************************!*\
  !*** ./src/borders.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"border\": () => (/* binding */ border)\n/* harmony export */ });\nfunction border() {\r\n\r\n for (let i = 0; i<2; i++) {\r\n   let border =  document.createElement('div')\r\n   border.classList.add('border')\r\n   return border\r\n }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://project-restaurant/./src/borders.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cont\": () => (/* binding */ cont)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\nfunction cont() {\r\n\r\n    //change up the active content based on the selected link\r\n\r\n    const links = document.querySelectorAll('a')\r\n    console.log(links)\r\n    let contentsect = document.createElement('div')\r\n\r\n    \r\n    contentsect.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.homeMaker)())\r\n\r\n\r\n\r\nlet link = document.querySelectorAll('a')\r\nlink.forEach((elem,ind,arr) => {\r\n    elem.addEventListener('click', (e) => {\r\n        console.log(e.target.textContent)\r\n\r\n        \r\n         \r\n        if (contentsect.classList.contains(e.target.textContent)) {\r\n         console.log(\"page equal to choice\")\r\n         // do nothing selection the same\r\n      \r\n         \r\n        }\r\n\r\n        else {\r\n            console.log(\"change to this page now\")\r\n            // clear the console display\r\n            contentsect.classList = \"\";\r\n      \r\n            // now update it based on what was clicked\r\n\r\n            if (e.target.textContent == \"Menu\") {\r\n              contentsect.innerHTML = ''\r\n                contentsect.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuMaker)())\r\n                console.log('change to menu')\r\n                contentsect.classList.add('Menu')\r\n         \r\n            }\r\n            \r\n            else if (e.target.textContent == \"Home\") {\r\n                contentsect.innerHTML = ''\r\n                console.log('change to Home')\r\n                contentsect.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.homeMaker)())\r\n                contentsect.classList.add('Home')\r\n           \r\n               \r\n\r\n\r\n\r\n            }\r\n\r\n            else if (e.target.textContent == \"About\") {\r\n                contentsect.innerHTML = ''\r\n                console.log('change to About')\r\n                contentsect.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_2__.aboutMaker)())\r\n                contentsect.classList.add('About')\r\n            }\r\n            \r\n        }\r\n\r\n\r\n\r\n    })\r\n})\r\n\r\n\r\n\r\n\r\n\r\nreturn contentsect\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack://project-restaurant/./src/content.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"foot\": () => (/* binding */ foot)\n/* harmony export */ });\nfunction foot() {\r\n    const footer = document.createElement('div')\r\n\r\nfooter.classList.add('footer')\r\n\r\nconst footerText = document.createElement('p')\r\nfooterText.textContent = \"Designed by Fizzle Boch Productions © 2022\"\r\nfooter.appendChild(footerText)\r\n\r\nreturn footer\r\n}\n\n//# sourceURL=webpack://project-restaurant/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"heads\": () => (/* binding */ heads)\n/* harmony export */ });\nfunction heads() {\r\n    const header = document.createElement('div')\r\n\r\nheader.classList.add('header')\r\n\r\n\r\n\r\nconst nav = document.createElement('ul')\r\n\r\n\r\nlet linksarr = [\"Home\", \"Menu\", \"About\"]\r\nlet myHTML = \"\"\r\nfor (let i = 0; i<3; i++) {\r\nmyHTML += `<li class=\"liststyle\"><a href=\"#\" class=\"linkstyle\">${linksarr[i]}</a></li>`\r\n}\r\nheader.innerHTML = myHTML\r\nreturn header\r\n}\n\n//# sourceURL=webpack://project-restaurant/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeMaker\": () => (/* binding */ homeMaker)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\nfunction homeMaker() {\r\n    const home = document.createElement('div')\r\n    home.classList.add('Home')\r\n    home.classList.add('mainhome')\r\n    const homebox = document.createElement('div')\r\n    homebox.classList.add('homebox')\r\n    home.appendChild(homebox)\r\n    \r\n    const homeTitle = document.createElement('p')\r\n    homeTitle.textContent = \"The Picklery and The Butcher\"\r\n    homeTitle.classList.add('hometext')\r\n    homebox.appendChild(homeTitle)\r\n\r\n    const line = document.createElement('div')\r\n    line.classList.add('line')\r\n    homebox.appendChild(line)\r\n\r\n    const quote = document.createElement('p')\r\n    quote.textContent = \"The best steak in town\"\r\n    quote.classList.add('quote')\r\n    homebox.appendChild(quote)\r\n\r\n\r\n\r\n    const menubutton = document.createElement('button')\r\n    menubutton.textContent = \"View the Menu\"\r\n    menubutton.classList.add('menubutton')\r\n    homebox.appendChild(menubutton)\r\n    menubutton.addEventListener('click', (e) => {\r\n        let contentsect = document.querySelector('.Home')\r\n        contentsect.innerHTML = ''\r\n        contentsect.classList = \"\"\r\n        console.log('change to Menu')\r\n        contentsect.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_0__.menuMaker)())\r\n        contentsect.classList.add('Menu')\r\n   \r\n    })\r\n\r\n\r\n\r\n\r\n    return home\r\n}\n\n//# sourceURL=webpack://project-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"webpack1\")\r\n\r\n;(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)()\r\n\r\n\r\ndocument.addEventListener('keydown', (e) => {\r\n  if (e.keyCode == 9) {\r\n    console.log(\"tab here\")\r\n    \r\n\r\n    if (document.querySelector('.mainhome')) {\r\n     \r\n        const parent =  document.querySelector('.mainhome').parentElement\r\n        parent.removeChild(document.querySelector('.mainhome'))\r\n        parent.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__.menuMaker)())\r\n       \r\n    }\r\n\r\n    else if (document.querySelector('.mainmenu')) {\r\n        const parent =  document.querySelector('.mainmenu').parentElement\r\n        parent.removeChild(document.querySelector('.mainmenu'))\r\n        parent.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_3__.aboutMaker)())\r\n\r\n    }\r\n\r\n    else if (document.querySelector('.mainabout')) {\r\n        const parent =  document.querySelector('.mainabout').parentElement\r\n        parent.removeChild(document.querySelector('.mainabout'))\r\n        parent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.homeMaker)())\r\n       \r\n\r\n    }\r\n\r\n\r\n  }\r\n})\n\n//# sourceURL=webpack://project-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuMaker\": () => (/* binding */ menuMaker)\n/* harmony export */ });\nfunction menuMaker() {\r\n    const menu = document.createElement('div')\r\n    menu.classList.add('Menu')\r\n    menu.classList.add('outermenu')\r\n    menu.classList.add('mainmenu')\r\n    const innermenu = document.createElement('div')\r\n    menu.appendChild(innermenu)\r\n    innermenu.classList.add('innermenu')\r\n\r\n\r\n    const homeTitle = document.createElement('p')\r\n    homeTitle.textContent = \"The Picklery and The Butcher\"\r\n    homeTitle.classList.add('hometext')\r\n    homeTitle.classList.add('homemenutext')\r\n    innermenu.appendChild(homeTitle)\r\n\r\n    \r\n    const quote = document.createElement('p')\r\n    quote.textContent = \"Menu\"\r\n    quote.classList.add('quote')\r\n    quote.classList.add('menuquote')\r\n    innermenu.appendChild(quote)\r\n\r\n    \r\n    const line = document.createElement('div')\r\n    line.classList.add('menuline')\r\n    innermenu.appendChild(line)\r\n\r\n   \r\n    const menugrid = document.createElement('div')\r\n    menugrid.classList.add('menugrid')\r\n    innermenu.appendChild(menugrid)\r\n\r\nlet choices = [\"Steak of Ban-Taman\", \"Burning Ring Cheerios\", \"Nuts and Bolterra Shum\"]\r\n\r\n    for (let i = 0; i<3; i++) {\r\n        const cell = document.createElement('div')\r\n        cell.classList.add('menuitem')\r\n        const title = document.createElement('p')\r\n        title.classList.add('menuitem1')\r\n        cell.appendChild(title)\r\n      \r\n        const line = document.createElement('div')\r\n        line.classList.add('menuline1')\r\n        cell.appendChild(line)\r\n\r\n        title.textContent = `${choices[i]}`\r\n        menugrid.appendChild(cell)\r\n\r\n        let description = document.createElement('p')\r\n        description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet'\r\n        cell.appendChild(description)\r\n        description.classList.add('menudescriptions')\r\n\r\n        let price = document.createElement('p')\r\n        price.classList.add('menuprice')\r\n        price.textContent = \"20\"\r\n        cell.appendChild(price)\r\n\r\n    }\r\n\r\n    return menu\r\n}\n\n//# sourceURL=webpack://project-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n/* harmony import */ var _borders_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./borders.js */ \"./src/borders.js\");\n\r\n\r\n\r\n\r\nfunction pageLoad() {\r\n\r\nconst mainLayout = document.querySelector('#content')\r\nmainLayout.classList.add('mainContainer')\r\n\r\n\r\nmainLayout.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_0__.heads)())\r\nmainLayout.appendChild((0,_borders_js__WEBPACK_IMPORTED_MODULE_3__.border)())\r\n\r\nmainLayout.appendChild((0,_content_js__WEBPACK_IMPORTED_MODULE_2__.cont)())\r\nmainLayout.appendChild((0,_borders_js__WEBPACK_IMPORTED_MODULE_3__.border)())\r\nmainLayout.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_1__.foot)())\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack://project-restaurant/./src/pageLoad.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;