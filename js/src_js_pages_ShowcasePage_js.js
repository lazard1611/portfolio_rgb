"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_ShowcasePage_js"],{

/***/ "./src/js/components/CaseDescription.js":
/*!**********************************************!*\
  !*** ./src/js/components/CaseDescription.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_case_description_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_case_description.scss */ "./src/scss/components/_case_description.scss");


var CaseDescription = function CaseDescription() {
  var $li = document.querySelectorAll('.case_description ol li');
  $li.forEach(function (item) {
    var content = "<p>".concat(item.innerHTML, "</p>");
    item.innerHTML = content;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaseDescription);

/***/ }),

/***/ "./src/js/components/ShowcaseHero.js":
/*!*******************************************!*\
  !*** ./src/js/components/ShowcaseHero.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_Observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/Observer */ "./node_modules/gsap/Observer.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _buildSliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildSliders */ "./src/js/components/buildSliders.js");
// import 'ScssComponents/_showcase_hero.scss';






function ShowcaseHero() {
  var $hero = document.querySelector('.showcaseHero');
  if (!$hero) return null;
  gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap_Observer__WEBPACK_IMPORTED_MODULE_3__["default"]);
  gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__["default"]);
  var $bg = document.querySelector('.showcaseHeroBg');
  var $controls = document.querySelector('.showcaseHeroControls');
  var $content = document.querySelector('.showcaseHeroContent'); // const $image = document.querySelector('.showcase_hero__slider_item_in');

  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    paused: false,
    delay: 1
  });

  var initAnim = function initAnim() {
    var $image = document.querySelector('.swiper-slide-active .showcase_hero__slider_item_in');
    setTimeout(function () {
      tl.addLabel('start').fromTo($content, {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        ease: 'power2.out'
      }, 'start').fromTo($controls, {
        opacity: 0
      }, {
        opacity: 1,
        ease: 'power2.out'
      }, 'start').fromTo($bg, {
        yPercent: -100,
        opacity: 0
      }, {
        yPercent: 0,
        opacity: 1,
        ease: 'power2.out'
      }, 'start').fromTo($image, {
        opacity: 0,
        xPercent: 30
      }, {
        opacity: 1,
        xPercent: 0,
        ease: 'power2.out'
      }, '-=.2');
    }, 600);
  };

  var sliderClass = '.showcaseHeroSlider';
  var $totalSlideIndex = document.querySelectorAll('.showcaseHeroTotal');
  var $currentSlideIndex = document.querySelector('.showcaseHeroCurrent');
  var $prevBtn = document.querySelector('.showcaseHeroPrev');
  var $nextBtn = document.querySelector('.showcaseHeroNext');
  (0,_buildSliders__WEBPACK_IMPORTED_MODULE_1__["default"])(sliderClass);
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade]);
  var $slideEl = document.querySelectorAll(sliderClass);
  var $slideImages = document.querySelectorAll('.showcase_hero__slider_item_in');
  var currentIndex = 0;
  var sliderLength = $slideImages.length;
  var duration = 0.4;
  var AUTOPLAY_INTERVAL = 3000;
  var isAnimationActive = false;
  var autoPlayInterval = null;

  if (typeof $slideEl !== 'undefined' && $slideEl != null) {
    var sliderEl = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderClass, {
      observer: true,
      observeParents: true,
      speed: 600,
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      allowTouchMove: false,
      centeredSlides: false,
      pagination: {
        el: '.showcase_hero__progress_dots',
        type: 'progressbar'
      },
      on: {
        afterInit: function afterInit(slider) {
          var index = slider.slides.length;
          $totalSlideIndex.innerHTML = index;
          initAnim();
        },
        slideChange: function slideChange(slider) {
          var realIndex = slider.realIndex;
          $currentSlideIndex.innerHTML = realIndex + 1;
          currentIndex = realIndex;
        }
      }
    });

    var outAnimation = function outAnimation(index) {
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo($slideImages[index], {
        opacity: 1,
        xPercent: 0
      }, {
        opacity: 0,
        xPercent: -15,
        duration: duration,
        ease: 'power2.out',
        onStart: function onStart() {
          isAnimationActive = true;
        }
      });
    };

    var inAnimation = function inAnimation(index) {
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo($slideImages[index], {
        opacity: 0,
        xPercent: 0
      }, {
        opacity: 1,
        xPercent: 0,
        duration: duration * 1.5,
        ease: 'power2.in',
        onComplete: function onComplete() {
          setAutoplayInterval();
          isAnimationActive = false;
        }
      });
    };

    var clearAutoplayInterval = function clearAutoplayInterval() {
      clearInterval(autoPlayInterval);
    };

    var prevSlideHandler = function prevSlideHandler() {
      if (isAnimationActive) return;
      clearAutoplayInterval();
      outAnimation(currentIndex);
      setTimeout(function () {
        if (currentIndex === 0) {
          sliderEl.slideTo(sliderLength - 1);
          inAnimation(currentIndex);
        } else {
          sliderEl.slidePrev();
          inAnimation(currentIndex);
        }
      }, duration * 1000);
    };

    var nextSlideHandler = function nextSlideHandler() {
      if (isAnimationActive) return;
      clearAutoplayInterval();
      outAnimation(currentIndex);
      setTimeout(function () {
        if (currentIndex === sliderLength - 1) {
          sliderEl.slideTo(0);
          inAnimation(currentIndex);
        } else {
          sliderEl.slideNext();
          inAnimation(currentIndex);
        }
      }, duration * 1000 * 0.7);
    };

    var setAutoplayInterval = function setAutoplayInterval() {
      autoPlayInterval = setInterval(function () {
        nextSlideHandler();
      }, AUTOPLAY_INTERVAL);
    };

    $prevBtn.addEventListener('click', function () {
      prevSlideHandler();
    });
    $nextBtn.addEventListener('click', function () {
      nextSlideHandler();
    });
    gsap_Observer__WEBPACK_IMPORTED_MODULE_3__["default"].create({
      target: $slideEl,
      type: 'touch',
      tolerance: 50,
      onLeft: function onLeft() {
        return nextSlideHandler();
      },
      onRight: function onRight() {
        return prevSlideHandler();
      }
    });

    var _onLeave = function onLeave() {
      clearAutoplayInterval();
    };

    var _onEnter = function onEnter() {
      setAutoplayInterval();
    };

    var onViewHandler = function onViewHandler() {
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__["default"].batch($slideEl, {
        start: '15% bottom',
        onEnter: function onEnter() {
          return _onEnter();
        },
        onEnterBack: function onEnterBack() {
          return _onEnter();
        },
        onLeave: function onLeave() {
          return _onLeave();
        },
        onLeaveBack: function onLeaveBack() {
          return _onLeave();
        }
      });
    };

    onViewHandler();
  }

  return null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowcaseHero);

/***/ }),

/***/ "./src/js/components/Tools.js":
/*!************************************!*\
  !*** ./src/js/components/Tools.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_tools_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_tools.scss */ "./src/scss/components/_tools.scss");
/* harmony import */ var _ToolsSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToolsSlider */ "./src/js/components/ToolsSlider.js");



var Tools = function Tools() {
  (0,_ToolsSlider__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tools);

/***/ }),

/***/ "./src/js/components/ToolsSlider.js":
/*!******************************************!*\
  !*** ./src/js/components/ToolsSlider.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _buildSliders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildSliders */ "./src/js/components/buildSliders.js");



swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination]);

var ToolsSlider = function ToolsSlider() {
  var sliderClass = '.toolsSlider';
  (0,_buildSliders__WEBPACK_IMPORTED_MODULE_2__["default"])(sliderClass);
  var slideEl = document.querySelectorAll(sliderClass);

  if (typeof slideEl !== 'undefined' && slideEl != null) {
    var toolsSliderEl;

    var enableSlider = function enableSlider() {
      var $currentSlideIndex = document.querySelector('.toolsCurrent');
      var $totalSlideIndex = document.querySelector('.toolsTotal');
      toolsSliderEl = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](sliderClass, {
        observer: true,
        observeParents: true,
        speed: 800,
        slidesPerView: 2,
        pagination: {
          el: '.toolsProgress',
          type: 'progressbar',
          clickable: true
        },
        on: {
          init: function init(slider) {
            var index = slider.slides.length;
            $totalSlideIndex.innerHTML = index >= 10 ? index : "0".concat(index);
          },
          slideChange: function slideChange(slider) {
            var index = slider.realIndex + 2;
            $currentSlideIndex.innerHTML = index >= 10 ? index : "0".concat(index);
          }
        }
      });
    };

    var checkWindowWidth = function checkWindowWidth() {
      if (window.innerWidth < 768) {
        slideEl.forEach(function (element) {
          if (!element.classList.contains('swiper-initialized')) enableSlider();
        });
      } else {
        slideEl.forEach(function (element) {
          if (element.classList.contains('swiper-initialized')) {
            toolsSliderEl.destroy(true, true);
          }
        });
      }
    };

    checkWindowWidth();
    (0,utils__WEBPACK_IMPORTED_MODULE_0__.onWindowResize)(checkWindowWidth);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolsSlider);

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

/***/ "./src/js/components/testimonialsSection/TestimonialClient.js":
/*!********************************************************************!*\
  !*** ./src/js/components/testimonialsSection/TestimonialClient.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var TestimonialClient = /*#__PURE__*/function () {
  function TestimonialClient(_ref) {
    var rootNode = _ref.rootNode;

    _classCallCheck(this, TestimonialClient);

    this.$component = rootNode || null;
    if (!this.$component) return;
    this.$readMoreOpenButton = this.$component.querySelector(this.SELECTORS.readMoreOpenButton);
    this.$readMoreHideButton = this.$component.querySelector(this.SELECTORS.readMoreHideButton);
    this.$textContainer = this.$component.querySelector(this.SELECTORS.textContainer);
    this.isComponentActive = false;
    this.isWithoutReadMoreStateActive = false;
    this.textContainerScrollHeight = 0;
    this.textContainerDefaultHeight = 0;
    this.handleClick = this.handleClick.bind(this);
    this.getTextContainerScrollHeight = this.getTextContainerScrollHeight.bind(this);
    this.onOrientationChange = this.onOrientationChange.bind(this);
    this.init();
  }

  _createClass(TestimonialClient, [{
    key: "SELECTORS",
    get: function get() {
      return {
        readMoreOpenButton: '.testimonialClientReadMoreOpenBtn',
        readMoreHideButton: '.testimonialClientReadMoreHideBtn',
        textContainer: '.testimonialClientTextContainer'
      };
    }
  }, {
    key: "CLASSNAMES",
    get: function get() {
      return {
        componentActiveState: 'testimonial_client--active_state',
        withoutReadMoreState: 'testimonial_client--without_more_mod'
      };
    }
  }, {
    key: "getTextContainerScrollHeight",
    value: function getTextContainerScrollHeight() {
      this.textContainerScrollHeight = this.$textContainer.scrollHeight;
    }
  }, {
    key: "setTextContainerDefaultHeight",
    value: function setTextContainerDefaultHeight() {
      this.textContainerDefaultHeight = this.$textContainer.offsetHeight;
    }
  }, {
    key: "slideUpAnimation",
    value: function slideUpAnimation() {
      this.$textContainer.style.height = null;
    }
  }, {
    key: "slideDownAnimation",
    value: function slideDownAnimation() {
      this.$textContainer.style.height = "".concat(this.textContainerScrollHeight, "px");
    }
  }, {
    key: "toggleComponentActiveState",
    value: function toggleComponentActiveState() {
      this.$component.classList.toggle(this.CLASSNAMES.componentActiveState);
      this.isComponentActive = !this.isComponentActive;
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.getTextContainerScrollHeight();

      if (this.isComponentActive) {
        this.slideUpAnimation();
      } else {
        this.slideDownAnimation();
      }

      this.toggleComponentActiveState();
    }
  }, {
    key: "onResize",
    value: function onResize() {
      if (this.isComponentActive) {
        this.slideUpAnimation();
        this.toggleComponentActiveState();
      }
    }
  }, {
    key: "onOrientationChange",
    value: function onOrientationChange() {
      var _this = this;

      // timeout for getting updated elements sizes
      setTimeout(function () {
        _this.getTextContainerScrollHeight();

        if (_this.textContainerScrollHeight <= _this.textContainerDefaultHeight && !_this.isWithoutReadMoreStateActive) {
          _this.$component.classList.add(_this.CLASSNAMES.withoutReadMoreState);

          _this.isWithoutReadMoreStateActive = true;
        } else if (_this.isWithoutReadMoreStateActive) {
          _this.$component.classList.remove(_this.CLASSNAMES.withoutReadMoreState);

          _this.isWithoutReadMoreStateActive = false;
        }
      }, 500);
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this2 = this;

      this.$readMoreOpenButton.addEventListener('click', this.handleClick);
      this.$readMoreHideButton.addEventListener('click', this.handleClick);
      (0,utils__WEBPACK_IMPORTED_MODULE_0__.onWindowResize)(function () {
        return _this2.onResize();
      });
      (0,utils__WEBPACK_IMPORTED_MODULE_0__.onOrientationChange)(function () {
        return _this2.onOrientationChange();
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (this.$readMoreOpenButton && this.$readMoreHideButton && this.$textContainer) {
        this.getTextContainerScrollHeight();
        this.setTextContainerDefaultHeight();
        this.addEventListeners();
        this.isWithoutReadMoreStateActive = this.textContainerScrollHeight <= this.textContainerDefaultHeight;
      } else {
        this.$component.classList.add(this.CLASSNAMES.withoutReadMoreState);
        this.isWithoutReadMoreStateActive = true;
      }
    }
  }]);

  return TestimonialClient;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialClient);

/***/ }),

/***/ "./src/js/components/testimonialsSection/testimonialClients.js":
/*!*********************************************************************!*\
  !*** ./src/js/components/testimonialsSection/testimonialClients.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_testimonial_client_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_testimonial_client.scss */ "./src/scss/components/_testimonial_client.scss");
/* harmony import */ var _TestimonialClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TestimonialClient */ "./src/js/components/testimonialsSection/TestimonialClient.js");



var testimonialClients = function testimonialClients() {
  var $testimonialClients = document.querySelectorAll('.testimonialClient');
  if (!$testimonialClients.length) return;
  $testimonialClients.forEach(function ($client) {
    var clientInstance = new _TestimonialClient__WEBPACK_IMPORTED_MODULE_1__["default"]({
      rootNode: $client
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testimonialClients);

/***/ }),

/***/ "./src/js/components/testimonialsSection/testimonialsCase.js":
/*!*******************************************************************!*\
  !*** ./src/js/components/testimonialsSection/testimonialsCase.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_testimonials_section_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_testimonials_section.scss */ "./src/scss/components/_testimonials_section.scss");
/* harmony import */ var ScssComponents_review_v2_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/_review_v2.scss */ "./src/scss/components/_review_v2.scss");
/* harmony import */ var _testimonialClients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimonialClients */ "./src/js/components/testimonialsSection/testimonialClients.js");
// scss

 // js



var testimonialsCase = function testimonialsCase() {
  (0,_testimonialClients__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testimonialsCase);

/***/ }),

/***/ "./src/js/pages/ShowcasePage.js":
/*!**************************************!*\
  !*** ./src/js/pages/ShowcasePage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowcasePage)
/* harmony export */ });
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var _components_ShowcaseHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ShowcaseHero */ "./src/js/components/ShowcaseHero.js");
/* harmony import */ var _components_Tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Tools */ "./src/js/components/Tools.js");
/* harmony import */ var _components_CaseDescription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CaseDescription */ "./src/js/components/CaseDescription.js");
/* harmony import */ var _components_testimonialsSection_testimonialsCase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/testimonialsSection/testimonialsCase */ "./src/js/components/testimonialsSection/testimonialsCase.js");
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
      // ShowcaseHero();
      (0,_components_Tools__WEBPACK_IMPORTED_MODULE_3__["default"])();
      (0,_components_CaseDescription__WEBPACK_IMPORTED_MODULE_4__["default"])();
      (0,_components_testimonialsSection_testimonialsCase__WEBPACK_IMPORTED_MODULE_5__["default"])();
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      (0,_components_ShowcaseHero__WEBPACK_IMPORTED_MODULE_2__["default"])();
      setTimeout(function () {
        _this.loadFunc();
      });
    }
  }]);

  return ShowcasePage;
}();



/***/ }),

/***/ "./src/scss/components/_case_description.scss":
/*!****************************************************!*\
  !*** ./src/scss/components/_case_description.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_review_v2.scss":
/*!*********************************************!*\
  !*** ./src/scss/components/_review_v2.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_testimonial_client.scss":
/*!******************************************************!*\
  !*** ./src/scss/components/_testimonial_client.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_testimonials_section.scss":
/*!********************************************************!*\
  !*** ./src/scss/components/_testimonials_section.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_tools.scss":
/*!*****************************************!*\
  !*** ./src/scss/components/_tools.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_ShowcasePage_js.js.map