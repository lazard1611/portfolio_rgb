"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_ShowcasesPage_js"],{

/***/ "./src/js/components/OurProducts.js":
/*!******************************************!*\
  !*** ./src/js/components/OurProducts.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_our_products_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_our_products.scss */ "./src/scss/components/_our_products.scss");
/* harmony import */ var _OurProductsSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OurProductsSlider */ "./src/js/components/OurProductsSlider.js");



var OurProducts = function OurProducts() {
  (0,_OurProductsSlider__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OurProducts);

/***/ }),

/***/ "./src/js/components/OurProductsSlider.js":
/*!************************************************!*\
  !*** ./src/js/components/OurProductsSlider.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/index */ "./src/js/utils/index.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _buildSliders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buildSliders */ "./src/js/components/buildSliders.js");





var OurProductsSlider = function OurProductsSlider() {
  var sliderClass = '.ourProductsSlider';
  var $currentSlideIndex = document.querySelector('.ourProductsCurrent');
  var $totalSlideIndex = document.querySelector('.ourProductsTotal');
  var currentSlider = document.querySelector(sliderClass);
  var sliderArrows = document.querySelector('.our_products__navigation');
  var sliderProgress = document.querySelector('.our_products_bottom');
  var isMobile;
  var isTablet;

  var checkIsMobile = function checkIsMobile() {
    isMobile = window.innerWidth < utils_constants__WEBPACK_IMPORTED_MODULE_1__.GLOBAL_VARS.mediaPoint2;
    isTablet = window.innerWidth < utils_constants__WEBPACK_IMPORTED_MODULE_1__.GLOBAL_VARS.mediaPoint1;
  };

  (0,utils_index__WEBPACK_IMPORTED_MODULE_0__.onWindowResize)(checkIsMobile);
  (0,_buildSliders__WEBPACK_IMPORTED_MODULE_3__["default"])(sliderClass);
  var slideEl = document.querySelectorAll(sliderClass);
  var sliderLength = document.querySelectorAll('.ourProductsSlider .swiper-slide:not(.swiper-slide-duplicate)').length;

  if (typeof slideEl !== 'undefined' && slideEl != null) {
    var OurProductsSliderEl = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](sliderClass, {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination],
      observer: true,
      observeParents: true,
      speed: 800,
      navigation: {
        nextEl: '.our_products__navigation .our_products__arrow--next',
        prevEl: '.our_products__navigation .our_products__arrow--prev'
      },
      pagination: {
        el: '.ourProductsProgress',
        type: 'progressbar',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1.126
        },
        768: {
          slidesPerView: 1.27
        },
        1024: {
          slidesPerView: 2,
          loop: false
        },
        1280: {
          slidesPerView: 3,
          loop: true
        }
      },
      on: {
        init: function init(slider) {
          var index = currentSlider.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length;
          $totalSlideIndex.innerHTML = index >= 10 ? index : "0".concat(index);
        },
        slideChange: function slideChange(slider) {
          var index = slider.realIndex + 1;
          $currentSlideIndex.innerHTML = index >= 10 ? index : "0".concat(index);
        }
      }
    });

    if (!isTablet && sliderLength < 4 || isTablet && sliderLength < 2) {
      OurProductsSliderEl.destroy();
      currentSlider.classList.add('is-destroy');
      sliderArrows.classList.add('hidden');
      sliderProgress.classList.add('hidden');
    } else {
      OurProductsSliderEl.init();
      currentSlider.classList.remove('is-destroy');
      sliderArrows.classList.remove('hidden');
      sliderProgress.classList.remove('hidden');
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OurProductsSlider);

/***/ }),

/***/ "./src/js/components/Showcases.js":
/*!****************************************!*\
  !*** ./src/js/components/Showcases.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import 'ScssComponents/_showcases_list.scss';
var Showcases = function Showcases() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Showcases);

/***/ }),

/***/ "./src/js/components/buildSliders.js":
/*!*******************************************!*\
  !*** ./src/js/components/buildSliders.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var buildSliders = function buildSliders(sliderClass) {
  var sliders = document.querySelectorAll("".concat(sliderClass, ":not(.swiper)"));

  if (sliders) {
    sliders.forEach(function (slider) {
      var el = slider;
      var htmlStructure = "<div class=\"swiper-wrapper\">".concat(slider.innerHTML, "</div>");
      el.classList.add('swiper');
      el.innerHTML = htmlStructure;
      var slides = el.querySelector('.swiper-wrapper').children;
      Array.from(slides).forEach(function (slide) {
        return slide.classList.add('swiper-slide');
      });
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildSliders);

/***/ }),

/***/ "./src/js/pages/ShowcasesPage.js":
/*!***************************************!*\
  !*** ./src/js/pages/ShowcasesPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowcasePage)
/* harmony export */ });
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var components_Showcases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Showcases */ "./src/js/components/Showcases.js");
/* harmony import */ var components_OurProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/OurProducts */ "./src/js/components/OurProducts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


 // components




var ShowcasePage = /*#__PURE__*/function () {
  function ShowcasePage() {
    _classCallCheck(this, ShowcasePage);

    this.init = this.init.bind(this);
  }

  _createClass(ShowcasePage, [{
    key: "loadFunc",
    value: function loadFunc() {
      (0,components_Showcases__WEBPACK_IMPORTED_MODULE_2__["default"])();
      (0,components_OurProducts__WEBPACK_IMPORTED_MODULE_3__["default"])();
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

  return ShowcasePage;
}();



/***/ }),

/***/ "./src/scss/components/_our_products.scss":
/*!************************************************!*\
  !*** ./src/scss/components/_our_products.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_ShowcasesPage_js.js.map