"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_Page404_js"],{

/***/ "./src/js/components/NotFound.js":
/*!***************************************!*\
  !*** ./src/js/components/NotFound.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_not_found_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_not_found.scss */ "./src/scss/components/_not_found.scss");


var NotFound = function NotFound() {
  var isSafari = window.navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
  var notFoundElement = document.querySelector('.not_found');

  if (isSafari) {
    notFoundElement.classList.add('is_safari');
  } else {
    notFoundElement.classList.remove('is_safari');
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ }),

/***/ "./src/js/pages/Page404.js":
/*!*********************************!*\
  !*** ./src/js/pages/Page404.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TeamPage)
/* harmony export */ });
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var components_NotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NotFound */ "./src/js/components/NotFound.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






var TeamPage = /*#__PURE__*/function () {
  function TeamPage() {
    _classCallCheck(this, TeamPage);

    this.init = this.init.bind(this);
  }

  _createClass(TeamPage, [{
    key: "loadFunc",
    value: function loadFunc() {
      (0,components_NotFound__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      setTimeout(function () {
        _this.loadFunc();
      });
    }
  }]);

  return TeamPage;
}();



/***/ }),

/***/ "./src/scss/components/_not_found.scss":
/*!*********************************************!*\
  !*** ./src/scss/components/_not_found.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_Page404_js.js.map