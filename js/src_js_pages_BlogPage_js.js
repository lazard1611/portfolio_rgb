"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_BlogPage_js"],{

/***/ "./src/js/components/Blog.js":
/*!***********************************!*\
  !*** ./src/js/components/Blog.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_blog_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_blog.scss */ "./src/scss/components/_blog.scss");


var Blog = function Blog() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

/***/ }),

/***/ "./src/js/components/LatestArticles.js":
/*!*********************************************!*\
  !*** ./src/js/components/LatestArticles.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_latest_articles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_latest_articles.scss */ "./src/scss/components/_latest_articles.scss");
/* harmony import */ var _LatestArticlesSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LatestArticlesSlider */ "./src/js/components/LatestArticlesSlider.js");



var LatestArticles = function LatestArticles() {
  (0,_LatestArticlesSlider__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LatestArticles);

/***/ }),

/***/ "./src/js/components/LatestArticlesSlider.js":
/*!***************************************************!*\
  !*** ./src/js/components/LatestArticlesSlider.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/index */ "./src/js/utils/index.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _buildSliders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buildSliders */ "./src/js/components/buildSliders.js");





var LatestArticlesSlider = function LatestArticlesSlider() {
  // console.log('slider'); //!
  var sliderClass = '.latestArticlesSlider';
  var currentSlider = document.querySelector(sliderClass);
  var sliderArrows = document.querySelector('.latest_articles__navigation');
  var sliderProgress = document.querySelector('.latest_articles_bottom');
  var isMobile;
  var isTablet;

  var checkIsMobile = function checkIsMobile() {
    isMobile = window.innerWidth < utils_constants__WEBPACK_IMPORTED_MODULE_1__.GLOBAL_VARS.mediaPoint2;
    isTablet = window.innerWidth < utils_constants__WEBPACK_IMPORTED_MODULE_1__.GLOBAL_VARS.mediaPoint1;
  };

  (0,utils_index__WEBPACK_IMPORTED_MODULE_0__.onWindowResize)(checkIsMobile);
  (0,_buildSliders__WEBPACK_IMPORTED_MODULE_3__["default"])(sliderClass);
  var slideEl = document.querySelectorAll(sliderClass);
  var sliderLength = document.querySelectorAll('.latestArticlesSlider .swiper-slide:not(.swiper-slide-duplicate)').length;
  setTimeout(function () {
    if (typeof slideEl !== 'undefined' && slideEl != null) {
      var $currentSlideIndex = document.querySelector('.latestArticlesCurrent');
      var $totalSlideIndex = document.querySelector('.latestArticlesTotal');
      var latestArticlesSliderEl = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](sliderClass, {
        modules: [swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination],
        observer: true,
        observeParents: true,
        speed: 800,
        navigation: {
          nextEl: '.latest_articles__navigation .latest_articles__arrow--next',
          prevEl: '.latest_articles__navigation .latest_articles__arrow--prev'
        },
        pagination: {
          el: '.latestArticlesProgress',
          type: 'progressbar',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 1.5
          },
          1024: {
            slidesPerView: 3,
            loop: false
          },
          1280: {
            slidesPerView: 4,
            loop: true
          }
        },
        on: {
          init: function init(slider) {
            var currentSlider = document.querySelector(sliderClass);
            var index = currentSlider.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length;
            $totalSlideIndex.innerHTML = index >= 10 ? index : "0".concat(index);
          },
          slideChange: function slideChange(slider) {
            var index = slider.realIndex + 1;
            $currentSlideIndex.innerHTML = index >= 10 ? index : "0".concat(index);
          }
        }
      });

      if (!isTablet && sliderLength < 5 || isTablet && sliderLength < 2) {
        latestArticlesSliderEl.destroy();
        currentSlider.classList.add('is-destroy');
        sliderArrows.classList.add('hidden');
        sliderProgress.classList.add('hidden');
      } else {
        latestArticlesSliderEl.init();
        currentSlider.classList.remove('is-destroy');
        sliderArrows.classList.remove('hidden');
        sliderProgress.classList.remove('hidden');
      }
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LatestArticlesSlider);

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

/***/ "./src/js/components/efficientWorkSlider.js":
/*!**************************************************!*\
  !*** ./src/js/components/efficientWorkSlider.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _buildSliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildSliders */ "./src/js/components/buildSliders.js");
/* harmony import */ var ScssComponents_efficient_work_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScssComponents/_efficient_work.scss */ "./src/scss/components/_efficient_work.scss");




var efficientWorkSlider = function efficientWorkSlider() {
  var sliderClass = '.efficientWorkSlider';
  (0,_buildSliders__WEBPACK_IMPORTED_MODULE_1__["default"])(sliderClass);
  var slideEl = document.querySelectorAll(sliderClass);

  if (typeof slideEl !== 'undefined' && slideEl != null) {
    var $currentSlideIndex = document.querySelector('.efficientWorkCurrent');
    var $totalSlideIndex = document.querySelector('.efficientWorkTotal');
    var efficientWorkSliderEl = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderClass, {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
      observer: true,
      observeParents: true,
      speed: 800,
      loop: true,
      watchOverflow: true,
      watchSlidesProgress: true,
      centeredSlides: false,
      navigation: {
        nextEl: '.efficient_work_navigation .efficient_work_arrow--next',
        prevEl: '.efficient_work_navigation .efficient_work_arrow--prev'
      },
      pagination: {
        el: '.efficientWorkProgress',
        type: 'progressbar',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 'auto',
          spaceBetween: 0
        }
      },
      on: {
        init: function init(slider) {
          var currentSlider = document.querySelector(sliderClass);
          var index = currentSlider.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length;
          $totalSlideIndex.innerHTML = index >= 10 ? index : "0".concat(index);
        },
        slideChange: function slideChange(slider) {
          var index = slider.realIndex + 1;
          $currentSlideIndex.innerHTML = index >= 10 ? index : "0".concat(index);
        }
      }
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (efficientWorkSlider);

/***/ }),

/***/ "./src/js/components/subscriptionForm.js":
/*!***********************************************!*\
  !*** ./src/js/components/subscriptionForm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var subscriptionForm = function subscriptionForm() {
  var $success = document.querySelector('.subscriptionSuccess');
  var $fields = document.querySelectorAll('.subscriptionFormField');
  var errorState = 'subscription_form__field--error_state';
  var typingState = 'subscription_form__field--typing_state';
  var errorMessage = 'Incorrect e-mail';

  var isValid = function isValid(e, $input) {
    e.preventDefault();
    if (!$input.getAttribute('type') === 'email') return null;
    var value = $input.value;
    var res = String(value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return res;
  };

  var throwError = function throwError($wrapper, $input) {
    $wrapper.classList.add(errorState);
    $input.value = '';
    $input.setAttribute('placeholder', errorMessage);
  };

  var handleSubmit = function handleSubmit($wrapper) {
    $wrapper.classList.remove(errorState);

    if ($success) {
      $success.classList.add('subscription_success--open_state');
    }
  };

  $fields.forEach(function ($field) {
    var $trigger = $field.querySelector('.subscriptionFormSubmit');
    var $input = $field.querySelector('.subscriptionFormInput');
    var placeholder = $input.getAttribute('placeholder');
    $input.addEventListener('input', function () {
      if ($input.value !== '') {
        $field.classList.add(typingState);
      } else {
        $input.setAttribute('placeholder', placeholder);
        $field.classList.remove(errorState);
        $field.classList.remove(typingState);
      }
    });
    $trigger.addEventListener('click', function (e) {
      if (isValid(e, $input) !== null) {
        handleSubmit($field);
      } else {
        throwError($field, $input);
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subscriptionForm);

/***/ }),

/***/ "./src/js/pages/BlogPage.js":
/*!**********************************!*\
  !*** ./src/js/pages/BlogPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogPage)
/* harmony export */ });
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var _components_LatestArticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LatestArticles */ "./src/js/components/LatestArticles.js");
/* harmony import */ var _components_Blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Blog */ "./src/js/components/Blog.js");
/* harmony import */ var ScssComponents_subscription_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ScssComponents/_subscription.scss */ "./src/scss/components/_subscription.scss");
/* harmony import */ var _components_subscriptionForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/subscriptionForm */ "./src/js/components/subscriptionForm.js");
/* harmony import */ var _components_efficientWorkSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/efficientWorkSlider */ "./src/js/components/efficientWorkSlider.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


 // components







var BlogPage = /*#__PURE__*/function () {
  function BlogPage() {
    _classCallCheck(this, BlogPage);

    this.init = this.init.bind(this);
  }

  _createClass(BlogPage, [{
    key: "loadFunc",
    value: function loadFunc() {
      (0,_components_Blog__WEBPACK_IMPORTED_MODULE_3__["default"])();
      (0,_components_LatestArticles__WEBPACK_IMPORTED_MODULE_2__["default"])();
      (0,_components_subscriptionForm__WEBPACK_IMPORTED_MODULE_5__["default"])();
      (0,_components_efficientWorkSlider__WEBPACK_IMPORTED_MODULE_6__["default"])();
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

  return BlogPage;
}();



/***/ }),

/***/ "./src/scss/components/_blog.scss":
/*!****************************************!*\
  !*** ./src/scss/components/_blog.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_efficient_work.scss":
/*!**************************************************!*\
  !*** ./src/scss/components/_efficient_work.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_latest_articles.scss":
/*!***************************************************!*\
  !*** ./src/scss/components/_latest_articles.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_subscription.scss":
/*!************************************************!*\
  !*** ./src/scss/components/_subscription.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_BlogPage_js.js.map