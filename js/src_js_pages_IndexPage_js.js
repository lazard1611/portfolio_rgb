"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_IndexPage_js"],{

/***/ "./src/js/components/AnimEl.js":
/*!*************************************!*\
  !*** ./src/js/components/AnimEl.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");



var AnimEl = function AnimEl() {
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var $fadeEl = document.querySelectorAll('.fadeEl');
  var $scaleEl = document.querySelectorAll('.scaleEl');

  if (typeof $fadeEl !== 'undefined' && $fadeEl.length) {
    // console.log($fadeEl);
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($fadeEl, {
      y: 100,
      opacity: 0
    });
    setTimeout(function () {
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["default"].batch($fadeEl, {
        start: '15% bottom',
        onEnter: function onEnter(batch) {
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            ease: 'none'
          });
        }
      });
    }, 100);
  }

  if (typeof $scaleEl !== 'undefined' && $scaleEl.length) {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].set($scaleEl, {
      scaleX: 0.3,
      scaleY: 0.3,
      opacity: 0
    });
    setTimeout(function () {
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["default"].batch($scaleEl, {
        start: '75% bottom',
        onEnter: function onEnter(batch) {
          gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(batch, {
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.ease'
          });
        }
      });
    }, 100);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimEl);

/***/ }),

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

/***/ "./src/js/components/ContactUs.js":
/*!****************************************!*\
  !*** ./src/js/components/ContactUs.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ScssComponents_contact_us_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_contact_us.scss */ "./src/scss/components/_contact_us.scss");


/***/ }),

/***/ "./src/js/components/DevPartner.js":
/*!*****************************************!*\
  !*** ./src/js/components/DevPartner.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _DevPartnerCube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DevPartnerCube */ "./src/js/components/DevPartnerCube.js");
/* harmony import */ var ScssComponents_dev_partner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/_dev_partner.scss */ "./src/scss/components/_dev_partner.scss");





var DevPartner = function DevPartner() {
  var $devCube = document.querySelectorAll('.devCube');
  var $section = document.querySelector('.dev_partner');
  var devArr = [];
  $devCube.forEach(function (el) {
    var obj = {
      el: el,
      bg: el.querySelector('.dev_partner_cube__img_wrap'),
      bgIn: el.querySelector('.dev_partner_cube__img_wrap_in'),
      icon: el.querySelector('.dev_partner_cube__icon_wrap'),
      text: el.querySelector('.dev_partner_cube__text')
    };
    devArr.push(obj);
  });
  devArr.forEach(function (el) {
    var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
      paused: false,
      scrollTrigger: {
        trigger: $section,
        start: 'top 25%'
      }
    });
    tl.addLabel('start').fromTo([el.bg, el.bgIn], {
      opacity: 0,
      xPercent: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([100, -100])
    }, {
      opacity: 1,
      xPercent: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([0, 0]),
      duration: 1,
      ease: 'power2.out'
    }, 'start');

    if (el.icon) {
      tl.fromTo([el.icon, el.text], {
        opacity: 0,
        x: 20
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out'
      }, 'start+=.3');
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DevPartner);

/***/ }),

/***/ "./src/js/components/DevPartnerCube.js":
/*!*********************************************!*\
  !*** ./src/js/components/DevPartnerCube.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ScssComponents_dev_partner_cube_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_dev_partner_cube.scss */ "./src/scss/components/_dev_partner_cube.scss");


/***/ }),

/***/ "./src/js/components/FeaturesSection.js":
/*!**********************************************!*\
  !*** ./src/js/components/FeaturesSection.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_features_section_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_features_section.scss */ "./src/scss/components/_features_section.scss");


var FeaturesSection = function FeaturesSection() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturesSection);

/***/ }),

/***/ "./src/js/components/Hero.js":
/*!***********************************!*\
  !*** ./src/js/components/Hero.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/index */ "./src/js/utils/index.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


 // import 'ScssComponents/_hero.scss';

var Hero = function Hero() {
  // console.log('hero');
  var $wordsWrap = document.querySelectorAll('.heroWordWrap');
  var $words = document.querySelectorAll('.heroWord');
  var $videos = document.querySelectorAll('.heroVideo');
  var wordsArr = [];
  var isMobile;
  var videoDuration = 5;
  var easingValue = 'power2.out';
  var ACTIVE_VIDEO_CLASS = 'hero_video__in--active';

  var checkIsMobile = function checkIsMobile() {
    isMobile = window.innerWidth < utils_constants__WEBPACK_IMPORTED_MODULE_1__.GLOBAL_VARS.mediaPoint2;
  };

  (0,utils_index__WEBPACK_IMPORTED_MODULE_0__.onWindowResize)(checkIsMobile);

  if ($words.length) {
    $words.forEach(function (el) {
      var obj = {
        el: el,
        title: el.querySelector('.heroWordText'),
        titleIn: el.querySelector('.heroWordTextIn'),
        dot: el.querySelector('.heroWordDot')
      };
      wordsArr.push(obj);
    });
    var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
      paused: false,
      delay: 0,
      repeat: -1,
      repeatDelay: 0,
      ease: 'power2.out'
    });
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set($wordsWrap, {
      opacity: 1
    });

    if (!isMobile) {
      $videos.forEach(function (video) {
        var videoSource = video.dataset.src;
        video.setAttribute('src', videoSource);
      });
    }

    wordsArr.forEach(function (item, index) {
      tl.fromTo([item.title, item.titleIn, item.dot], {
        yPercent: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([-105, 105, 0]),
        xPercent: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([0, 0, 150]),
        opacity: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([1, 1, 0])
      }, {
        yPercent: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([0, 0, 0]),
        xPercent: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([0, 0, 0]),
        opacity: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([1, 1, 1]),
        duration: 0.8,
        ease: easingValue,
        onStart: function onStart() {
          if (!isMobile) {
            $videos[index].play();
            $videos[index].classList.add(ACTIVE_VIDEO_CLASS);
          }
        }
      }).to([item.title, item.titleIn, item.dot], {
        yPercent: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([-105, 105, 0]),
        xPercent: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([0, 0, 200]),
        opacity: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([1, 1, 0]),
        duration: 0.6,
        ease: easingValue,
        onComplete: function onComplete() {
          if (!isMobile) {
            $videos[index].pause();
            $videos[index].currentTime = 0;
            $videos[index].classList.remove(ACTIVE_VIDEO_CLASS);
          }
        }
      }, "+=".concat(videoDuration));
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

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

/***/ "./src/js/components/WhatToRead.js":
/*!*****************************************!*\
  !*** ./src/js/components/WhatToRead.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_what_to_read_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_what_to_read.scss */ "./src/scss/components/_what_to_read.scss");


var WhatToRead = function WhatToRead() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhatToRead);

/***/ }),

/***/ "./src/js/components/WorkSpace.js":
/*!****************************************!*\
  !*** ./src/js/components/WorkSpace.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/index */ "./src/js/utils/index.js");
/* harmony import */ var ScssComponents_work_space_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/_work_space.scss */ "./src/scss/components/_work_space.scss");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");




var WorkSpace = function WorkSpace() {
  var $workSpaceSection = document.querySelector('.workSpaceSection');

  if (typeof $workSpaceSection !== 'undefined' && $workSpaceSection != null) {
    var elRect;
    var mousePos = {
      x: 0,
      y: 0
    };
    var mouseEnterEvent = false;

    var rectFunc = function rectFunc(e) {
      elRect = $workSpaceSection.getBoundingClientRect();
    };

    (0,utils_index__WEBPACK_IMPORTED_MODULE_0__.onWindowResize)(rectFunc);
    var $orbits = document.querySelector('[data-name="orbits"]');
    var $otherElements = document.querySelector('[data-name="other_elements"]');
    var $otherElementsInArray = $workSpaceSection.querySelectorAll('[data-name="other_elements_in"]');
    var $elCenter = $workSpaceSection.querySelector('[data-name="center_element"]');
    var $orbit1 = $workSpaceSection.querySelector('[data-name="orbit_1"]');
    var $orbit2 = $workSpaceSection.querySelector('[data-name="orbit_2"]');
    var $orbit3 = $workSpaceSection.querySelector('[data-name="orbit_3"]');
    var $phpEl = $workSpaceSection.querySelector('[data-name="php_el_3"]');
    var $nextEl = $workSpaceSection.querySelector('[data-name="next_el_3"]');
    var $nodeEl = $workSpaceSection.querySelector('[data-name="node_el_4"]');
    var $reactEl = $workSpaceSection.querySelector('[data-name="react_el_4"]');
    var $decorsArray = $workSpaceSection.querySelectorAll('[data-name="decor_el_6"]');
    var $wordpressEl = $workSpaceSection.querySelector('[data-name="wordpress_el_3"]');
    var $wooEl = $workSpaceSection.querySelector('[data-name="woo_el_4"]');
    var $decors2Array = $workSpaceSection.querySelectorAll('[data-name="decor_el_5"]');
    var rotateTl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
      paused: true,
      repeat: -1,
      defaults: {
        ease: 'none',
        transformOrigin: '50% 50%',
        duration: 200
      }
    });
    rotateTl.addLabel('start').to($orbits, {
      rotation: -360
    }, 'start').to($otherElements, {
      rotation: -360
    }, 'start').to($otherElementsInArray, {
      rotation: 360
    }, 'start');
    $workSpaceSection.addEventListener('mousemove', function (e) {
      mousePos.moved = true;
      mousePos.x = e.clientX / window.innerWidth;
      mousePos.y = e.clientY / window.innerHeight;
    });

    var parallaxInit = function parallaxInit(target, durationTime, movement, onlyVertical) {
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(target, {
        x: onlyVertical ? 0 : mousePos.x * movement,
        y: mousePos.y * movement,
        duration: durationTime,
        ease: 'sine'
      });
    };

    var tickerFunc = function tickerFunc() {
      if (mousePos.moved) {
        // console.log('123');
        parallaxInit($elCenter, 1, 1); // parallaxInit($orbit1, 0.7, 2);

        parallaxInit($orbit2, 0.7, -4, true);
        parallaxInit($orbit3, 0.7, 3, true);
        parallaxInit($phpEl, 0.3, 9);
        parallaxInit($nextEl, 0.3, 15);
        parallaxInit($wordpressEl, 0.3, 5);
        parallaxInit($wooEl, 0.3, -6);
        parallaxInit($reactEl, 0.3, -9);
        parallaxInit($nodeEl, 0.3, -14);
        $decorsArray.forEach(function (el, index) {
          parallaxInit(el, 0.3, index + 1);
        });
        $decors2Array.forEach(function (el, index) {
          parallaxInit(el, 0.3, index * -2 - 3);
        });
      }

      mousePos.moved = false;
    };

    $workSpaceSection.addEventListener('mouseenter', function () {
      if (!mouseEnterEvent) {
        mouseEnterEvent = true;
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].ticker.add(tickerFunc); // rotateTl.play();
      }
    });
    $workSpaceSection.addEventListener('mouseleave', function () {
      if (mouseEnterEvent) {
        mouseEnterEvent = false;
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].ticker.remove(tickerFunc); // rotateTl.pause();
      }
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkSpace);

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

/***/ "./src/js/components/showcase/ShowcaseItem.js":
/*!****************************************************!*\
  !*** ./src/js/components/showcase/ShowcaseItem.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var ShowcasesItem = /*#__PURE__*/function () {
  function ShowcasesItem(_ref) {
    var rootElement = _ref.rootElement;

    _classCallCheck(this, ShowcasesItem);

    this.$component = rootElement;

    if (!this.$component) {
      throw new Error('Element not found on page');
    }

    this.$image = this.$component.querySelector(this.SELECTORS.image);
    this.$content = this.$component.querySelector(this.SELECTORS.content);
    this.$bgDecors = this.$component.querySelectorAll(this.SELECTORS.bgDecor);
    this.$contentInnerEl = this.$component.querySelectorAll(this.SELECTORS.contentInnerItem);
    this.windowWidth = 0;
    this.DELAY_RESET_ANIMATION = 1;
    this.TIMELINE_TIME_SCALE = 1.3;
    this.ANIM_CONFIG = {
      baseEase: 'power2.out'
    };
    this.init();
  }

  _createClass(ShowcasesItem, [{
    key: "SELECTORS",
    get: function get() {
      return {
        image: '.showcaseItemImage',
        content: '.showcaseItemContent',
        bgDecor: '.showcaseItemBgDecor',
        contentInnerItem: '.showcaseItemContentEl'
      };
    }
  }, {
    key: "resetComponentStyle",
    value: function resetComponentStyle() {
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.$component, {
        zIndex: 'auto',
        delay: this.DELAY_RESET_ANIMATION
      });
    }
  }, {
    key: "createDesktopLeaveAnimation",
    value: function createDesktopLeaveAnimation() {
      var _this = this;

      var timeline = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
        onComplete: function onComplete() {
          _this.resetComponentStyle();

          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(_this.$content, {
            clearProps: 'all'
          });
        }
      });
      timeline.addLabel('start').to(this.$component, {
        zIndex: 1,
        duration: 0.01
      }).fromTo(this.$content, {
        opacity: 1
      }, {
        opacity: 0,
        duration: 1
      }, 'start');
      timeline.timeScale(this.TIMELINE_TIME_SCALE);
      return timeline;
    }
  }, {
    key: "createDesktopEnterAnimation",
    value: function createDesktopEnterAnimation() {
      var timeline = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
      timeline.addLabel('start').to(this.$component, {
        zIndex: 5,
        duration: 0.01
      }).fromTo(this.$bgDecors, {
        yPercent: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([100, -100])
      }, {
        yPercent: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([0, 0]),
        ease: 'power3.out',
        duration: 1.3
      }, 'start').fromTo([this.$image, this.$content], {
        y: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap(['0rem', '0rem']),
        opacity: 0
      }, {
        y: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap(['3rem', '-3rem']),
        opacity: 1,
        ease: this.ANIM_CONFIG.baseEase,
        stagger: 0.4,
        duration: 0.6
      }, 'start+=.8');
      timeline.timeScale(this.TIMELINE_TIME_SCALE);
      return timeline;
    }
  }, {
    key: "createMobileLeaveAnimation",
    value: function createMobileLeaveAnimation() {
      var _this2 = this;

      var timeline = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
        onComplete: function onComplete() {
          _this2.resetComponentStyle();

          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(_this2.$contentInnerEl, {
            clearProps: 'all',
            delay: _this2.DELAY_RESET_ANIMATION
          });
        }
      });
      timeline.addLabel('start').to(this.$component, {
        zIndex: 1,
        duration: 0.01
      }).fromTo(this.$contentInnerEl, {
        opacity: 1
      }, {
        opacity: 0,
        y: '-2rem',
        duration: 0.4,
        ease: this.ANIM_CONFIG.baseEase
      }, 'start');
      return timeline;
    }
  }, {
    key: "createMobileEnterAnimation",
    value: function createMobileEnterAnimation() {
      var timeline = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
      timeline.addLabel('start').to(this.$component, {
        zIndex: 5,
        duration: 0.01
      }).fromTo(this.$bgDecors[0], {
        yPercent: -100
      }, {
        yPercent: 0,
        ease: 'power3.out',
        duration: 1
      }, 'start').fromTo(this.$contentInnerEl, {
        y: '3rem',
        opacity: 0
      }, {
        y: '0rem',
        opacity: 1,
        stagger: 0.4,
        duration: 0.6,
        ease: this.ANIM_CONFIG.baseEase
      }, 'start+=.5');
      return timeline;
    }
  }, {
    key: "leaveAnimation",
    value: function leaveAnimation() {
      if (this.windowWidth >= utils_constants__WEBPACK_IMPORTED_MODULE_1__.GLOBAL_VARS.mediaPoint1) return this.createDesktopLeaveAnimation();
      return this.createMobileLeaveAnimation();
    }
  }, {
    key: "enterAnimation",
    value: function enterAnimation() {
      if (this.windowWidth >= utils_constants__WEBPACK_IMPORTED_MODULE_1__.GLOBAL_VARS.mediaPoint1) return this.createDesktopEnterAnimation();
      return this.createMobileEnterAnimation();
    }
  }, {
    key: "onResize",
    value: function onResize() {
      var _getWindowSize = (0,utils__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)(),
          windowWidth = _getWindowSize.windowWidth;

      this.windowWidth = windowWidth;
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      (0,utils__WEBPACK_IMPORTED_MODULE_0__.onWindowResize)(function () {
        _this3.onResize();
      });
    }
  }]);

  return ShowcasesItem;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowcasesItem);

/***/ }),

/***/ "./src/js/components/showcase/ShowcasesSlider.js":
/*!*******************************************************!*\
  !*** ./src/js/components/showcase/ShowcasesSlider.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_Observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap/Observer */ "./node_modules/gsap/Observer.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var _ShowcaseItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShowcaseItem */ "./src/js/components/showcase/ShowcaseItem.js");
/* harmony import */ var ScssComponents_showcases_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ScssComponents/_showcases.scss */ "./src/scss/components/_showcases.scss");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }









swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination]);
gsap__WEBPACK_IMPORTED_MODULE_5__["default"].registerPlugin(gsap_Observer__WEBPACK_IMPORTED_MODULE_6__["default"]);

var ShowcasesSlider = /*#__PURE__*/function () {
  function ShowcasesSlider(_ref) {
    var sliderId = _ref.sliderId;

    _classCallCheck(this, ShowcasesSlider);

    this.$component = document.querySelector(sliderId);

    if (!this.$component) {
      throw new Error('Element not found on page');
    }

    this.itemsInstance = [];
    this.sliderInstance = null;
    this.isAnimationActive = false;
    this.autoPlayInterval = null;
    this.AUTOPLAY_DELAY = 3800;
    this.onSlideChange = this.onSlideChange.bind(this);
    this.createDotSlider = this.createDotSlider.bind(this);
    this.init();
  }

  _createClass(ShowcasesSlider, [{
    key: "SELECTORS",
    get: function get() {
      return {
        component: '.showcaseSlider',
        showcaseItem: '.showcaseItem',
        currentIndexSlide: '.showcaseCurrent',
        prevArrow: '.showcasePrevArrow',
        nextArrow: '.showcaseNextArrow',
        sliderDots: '.showcaseDots',
        sliderDot: '.showcaseDot',
        sliderDotIn: '.showcaseDotIn'
      };
    }
  }, {
    key: "createDotSlider",
    value: function createDotSlider() {
      var _this = this;

      var FIRST_SLIDE_DURATION = 4.4;
      var DEFAULT_SLIDE_DURATION = 5.1;
      this.dotsTimeline = gsap__WEBPACK_IMPORTED_MODULE_5__["default"].timeline({
        paused: false,
        repeat: -1
      });
      this.$component.querySelectorAll(this.SELECTORS.sliderDotIn).forEach(function (item, index) {
        _this.dotsTimeline.addLabel("dot_".concat(index)).fromTo(item, {
          xPercent: -101
        }, {
          xPercent: 0,
          ease: 'none',
          duration: index === 0 ? FIRST_SLIDE_DURATION : DEFAULT_SLIDE_DURATION
        });
      });
    }
  }, {
    key: "createItemsInstance",
    value: function createItemsInstance() {
      var _this2 = this;

      var $sliderItems = this.$component.querySelectorAll(this.SELECTORS.showcaseItem);
      if (!$sliderItems.length) return;
      $sliderItems.forEach(function ($item) {
        _this2.itemsInstance.push(new _ShowcaseItem__WEBPACK_IMPORTED_MODULE_3__["default"]({
          rootElement: $item
        }));
      });
    }
  }, {
    key: "onSlideChange",
    value: function onSlideChange(slider) {
      var _this3 = this;

      if (this.isAnimationActive) return;
      var previousIndex = slider.previousIndex,
          realIndex = slider.realIndex;
      this.dotsTimeline.seek("dot_".concat(realIndex));
      var timeline = gsap__WEBPACK_IMPORTED_MODULE_5__["default"].timeline({
        onStart: function onStart() {
          _this3.isAnimationActive = true;

          _this3.updateCounter(realIndex);
        },
        onComplete: function onComplete() {
          _this3.isAnimationActive = false;

          _this3.setAutoplayInterval();
        }
      });
      var ENTER_ANIMATION_LABEL = this.windowWidth >= utils_constants__WEBPACK_IMPORTED_MODULE_1__.GLOBAL_VARS.mediaPoint1 ? 'start' : 'start+=.2';
      timeline.addLabel('start').add(this.itemsInstance[previousIndex].leaveAnimation(), 'start').add(this.itemsInstance[realIndex].enterAnimation(), ENTER_ANIMATION_LABEL);
      timeline.play();
    }
  }, {
    key: "clearAutoplayInterval",
    value: function clearAutoplayInterval() {
      clearInterval(this.autoPlayInterval);
    }
  }, {
    key: "setAutoplayInterval",
    value: function setAutoplayInterval() {
      var _this4 = this;

      this.autoPlayInterval = setInterval(function () {
        _this4.autoPlayHandler();
      }, this.AUTOPLAY_DELAY);
    }
  }, {
    key: "slidePrevHandler",
    value: function slidePrevHandler() {
      if (this.isAnimationActive) return;
      this.clearAutoplayInterval();

      if (this.sliderInstance.realIndex === 0) {
        this.sliderInstance.slideTo(this.sliderInstance.slides.length - 1);
      } else {
        this.sliderInstance.slidePrev();
      }
    }
  }, {
    key: "slideNextHandler",
    value: function slideNextHandler() {
      if (this.isAnimationActive) return;
      this.clearAutoplayInterval();

      if (this.sliderInstance.realIndex === this.sliderInstance.slides.length - 1) {
        this.sliderInstance.slideTo(0);
      } else {
        this.sliderInstance.slideNext();
      }
    }
  }, {
    key: "autoPlayHandler",
    value: function autoPlayHandler() {
      this.slideNextHandler();
    }
  }, {
    key: "updateCounter",
    value: function updateCounter(slideIndex) {
      if (!this.$currentIndexSlide) return;
      var updatedIndex = slideIndex + 1;
      this.$currentIndexSlide.innerHTML = updatedIndex >= 10 ? updatedIndex : "0".concat(updatedIndex);
    }
  }, {
    key: "initSwiper",
    value: function initSwiper() {
      var _this5 = this;

      this.$currentIndexSlide = this.$component.querySelector(this.SELECTORS.currentIndexSlide);
      var $totalAmountSlides = this.$component.querySelector('.showcaseTotal');
      var $prevEl = this.$component.querySelector(this.SELECTORS.prevArrow);
      var $nextEl = this.$component.querySelector(this.SELECTORS.nextArrow);
      var $dotsEl = this.$component.querySelector(this.SELECTORS.sliderDots);
      var $dotEl;
      this.sliderInstance = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](this.$component, {
        speed: 0,
        loop: false,
        allowTouchMove: false,
        centeredSlides: false,
        pagination: {
          el: $dotsEl,
          renderBullet: function renderBullet(index, className) {
            return "<div class=\"".concat(className, " showcaseDot\" data-index=").concat(index, "><div class=\"showcase__dot_in showcaseDotIn\"></div></div>");
          }
        },
        on: {
          init: function init(slider) {
            var index = slider.slides.length;
            $totalAmountSlides.innerHTML = index >= 10 ? index : "0".concat(index);
            $dotEl = _this5.$component.querySelectorAll(_this5.SELECTORS.sliderDot);

            _this5.createDotSlider();
          },
          slideChange: this.onSlideChange
        }
      });
      $prevEl.addEventListener('click', function () {
        _this5.slidePrevHandler();
      });
      $nextEl.addEventListener('click', function () {
        _this5.slideNextHandler();
      });
      $dotEl.forEach(function (item) {
        item.addEventListener('click', function () {
          if (_this5.isAnimationActive) return;
          var dotIndex = item.dataset.index;
          if (_this5.sliderInstance.realIndex === dotIndex) return; // this.dotsTimeline.seek(`dot_${dotIndex}`);

          _this5.clearAutoplayInterval();

          _this5.sliderInstance.slideTo(dotIndex);
        });
      });
      gsap_Observer__WEBPACK_IMPORTED_MODULE_6__["default"].create({
        target: this.$component,
        type: 'touch',
        tolerance: 50,
        onLeft: function onLeft() {
          return _this5.slideNextHandler();
        },
        onRight: function onRight() {
          return _this5.slidePrevHandler();
        }
      });
    }
  }, {
    key: "onViewHandler",
    value: function onViewHandler() {
      var _this6 = this;

      var _onLeave = function onLeave() {
        _this6.clearAutoplayInterval();
      };

      var _onEnter = function onEnter() {
        _this6.setAutoplayInterval();
      };

      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__["default"].batch(this.$component, {
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
    }
  }, {
    key: "init",
    value: function init() {
      this.createItemsInstance();
      this.initSwiper();
      this.onViewHandler();

      var _getWindowSize = (0,utils__WEBPACK_IMPORTED_MODULE_2__.getWindowSize)(),
          windowWidth = _getWindowSize.windowWidth;

      this.windowWidth = windowWidth;
    }
  }]);

  return ShowcasesSlider;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowcasesSlider);

/***/ }),

/***/ "./src/js/components/showcase/index.js":
/*!*********************************************!*\
  !*** ./src/js/components/showcase/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcasesSlider": () => (/* reexport safe */ _ShowcasesSlider__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _ShowcasesSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowcasesSlider */ "./src/js/components/showcase/ShowcasesSlider.js");



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

/***/ "./src/js/components/testimonialsSection/logoSlider.js":
/*!*************************************************************!*\
  !*** ./src/js/components/testimonialsSection/logoSlider.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/scss */ "./node_modules/swiper/swiper.scss");
/* harmony import */ var ScssComponents_logos_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScssComponents/_logos.scss */ "./src/scss/components/_logos.scss");



swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_0__.FreeMode]);

var logoSlider = function logoSlider() {
  var $logoSlider = document.querySelector('.logoSlider');

  if (typeof $logoSlider !== 'undefined' && $logoSlider != null) {
    var logoSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($logoSlider, {
      slidesPerView: 'auto',
      a11y: true,
      loop: true,
      speed: 4000,
      autoplay: {
        delay: 1
      },
      breakpoints: {
        1024: {
          loop: false,
          autoplay: false
        }
      }
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logoSlider);

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

/***/ "./src/js/components/testimonialsSection/testimonialsSection.js":
/*!**********************************************************************!*\
  !*** ./src/js/components/testimonialsSection/testimonialsSection.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_testimonials_section_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_testimonials_section.scss */ "./src/scss/components/_testimonials_section.scss");
/* harmony import */ var ScssComponents_review_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/_review.scss */ "./src/scss/components/_review.scss");
/* harmony import */ var _logoSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logoSlider */ "./src/js/components/testimonialsSection/logoSlider.js");
/* harmony import */ var _testimonialsSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testimonialsSlider */ "./src/js/components/testimonialsSection/testimonialsSlider.js");
/* harmony import */ var _testimonialClients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testimonialClients */ "./src/js/components/testimonialsSection/testimonialClients.js");
// scss

 // js





var testimonialsSection = function testimonialsSection() {
  (0,_logoSlider__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_testimonialsSlider__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_testimonialClients__WEBPACK_IMPORTED_MODULE_4__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testimonialsSection);

/***/ }),

/***/ "./src/js/components/testimonialsSection/testimonialsSlider.js":
/*!*********************************************************************!*\
  !*** ./src/js/components/testimonialsSection/testimonialsSlider.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css/effect-fade */ "./node_modules/swiper/modules/effect-fade/effect-fade.min.css");
/* harmony import */ var ScssComponents_testimonial_slider_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScssComponents/_testimonial_slider.scss */ "./src/scss/components/_testimonial_slider.scss");
/* harmony import */ var ScssComponents_slider_controls_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ScssComponents/_slider_controls.scss */ "./src/scss/components/_slider_controls.scss");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");






swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination]);

var testimonialsSlider = function testimonialsSlider() {
  var $testimonialSliders = document.querySelectorAll('.testimonialSlider');
  var $currentSlideIndex = document.querySelector('.testimonial_slider__pagination_count--current');
  var $totalSlideIndex = document.querySelector('.testimonial_slider__pagination_count--total');
  if (!$testimonialSliders.length) return;

  var _getWindowSize = (0,utils__WEBPACK_IMPORTED_MODULE_4__.getWindowSize)(),
      windowWidth = _getWindowSize.windowWidth;

  $testimonialSliders.forEach(function ($slider) {
    var $prevButton = $slider.querySelector('.swiper-button-prev');
    var $nextButton = $slider.querySelector('.swiper-button-next');
    var $dots = $slider.parentElement.querySelector('.testimonial_slider__pagination_dots');
    var allowTouchMove = !(windowWidth >= utils_constants__WEBPACK_IMPORTED_MODULE_5__.GLOBAL_VARS.mediaPoint1);
    var swiperInstance = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($slider, {
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      allowTouchMove: allowTouchMove,
      loop: true,
      navigation: {
        prevEl: $prevButton,
        nextEl: $nextButton
      },
      pagination: {
        el: $dots,
        type: 'progressbar',
        clickable: true
      },
      on: {
        init: function init(slider) {
          if ($totalSlideIndex) {
            var index = slider.slides.length - 2; // -2 for real value with "loop: true"

            $totalSlideIndex.innerHTML = index >= 10 ? index : "0".concat(index);
          }
        },
        slideChange: function slideChange(slider) {
          if ($currentSlideIndex) {
            var index = slider.realIndex + 1;
            $currentSlideIndex.innerHTML = index >= 10 ? index : "0".concat(index);
          }
        }
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testimonialsSlider);

/***/ }),

/***/ "./src/js/pages/IndexPage.js":
/*!***********************************!*\
  !*** ./src/js/pages/IndexPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndexPage)
/* harmony export */ });
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var components_testimonialsSection_testimonialsSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/testimonialsSection/testimonialsSection */ "./src/js/components/testimonialsSection/testimonialsSection.js");
/* harmony import */ var components_WhatToRead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/WhatToRead */ "./src/js/components/WhatToRead.js");
/* harmony import */ var components_OurProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/OurProducts */ "./src/js/components/OurProducts.js");
/* harmony import */ var components_FeaturesSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/FeaturesSection */ "./src/js/components/FeaturesSection.js");
/* harmony import */ var components_WorkSpace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/WorkSpace */ "./src/js/components/WorkSpace.js");
/* harmony import */ var components_LatestArticles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/LatestArticles */ "./src/js/components/LatestArticles.js");
/* harmony import */ var components_DevPartner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/DevPartner */ "./src/js/components/DevPartner.js");
/* harmony import */ var components_showcase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/showcase */ "./src/js/components/showcase/index.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Hero */ "./src/js/components/Hero.js");
/* harmony import */ var _components_Blog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Blog */ "./src/js/components/Blog.js");
/* harmony import */ var _components_ContactUs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ContactUs */ "./src/js/components/ContactUs.js");
/* harmony import */ var _components_AnimEl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/AnimEl */ "./src/js/components/AnimEl.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


 // components














var IndexPage = /*#__PURE__*/function () {
  function IndexPage() {
    _classCallCheck(this, IndexPage);

    this.init = this.init.bind(this);
  }

  _createClass(IndexPage, [{
    key: "loadFunc",
    value: function loadFunc() {
      (0,_components_AnimEl__WEBPACK_IMPORTED_MODULE_13__["default"])();
      (0,components_testimonialsSection_testimonialsSection__WEBPACK_IMPORTED_MODULE_2__["default"])();
      (0,components_OurProducts__WEBPACK_IMPORTED_MODULE_4__["default"])();
      (0,components_FeaturesSection__WEBPACK_IMPORTED_MODULE_5__["default"])();
      (0,components_WorkSpace__WEBPACK_IMPORTED_MODULE_6__["default"])();
      (0,components_DevPartner__WEBPACK_IMPORTED_MODULE_8__["default"])();
      (0,components_WhatToRead__WEBPACK_IMPORTED_MODULE_3__["default"])();
      (0,_components_Blog__WEBPACK_IMPORTED_MODULE_11__["default"])();
      (0,components_LatestArticles__WEBPACK_IMPORTED_MODULE_7__["default"])();
      (0,components_WhatToRead__WEBPACK_IMPORTED_MODULE_3__["default"])();
      var showcaseSlider = new components_showcase__WEBPACK_IMPORTED_MODULE_9__.ShowcasesSlider({
        sliderId: '#showcaseSlider'
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      (0,_components_Hero__WEBPACK_IMPORTED_MODULE_10__["default"])();
      setTimeout(function () {
        _this.loadFunc();
      });
    }
  }]);

  return IndexPage;
}();



/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade/effect-fade.min.css":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade/effect-fade.min.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/swiper/swiper.scss":
/*!*****************************************!*\
  !*** ./node_modules/swiper/swiper.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_blog.scss":
/*!****************************************!*\
  !*** ./src/scss/components/_blog.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_contact_us.scss":
/*!**********************************************!*\
  !*** ./src/scss/components/_contact_us.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_dev_partner.scss":
/*!***********************************************!*\
  !*** ./src/scss/components/_dev_partner.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_dev_partner_cube.scss":
/*!****************************************************!*\
  !*** ./src/scss/components/_dev_partner_cube.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_features_section.scss":
/*!****************************************************!*\
  !*** ./src/scss/components/_features_section.scss ***!
  \****************************************************/
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

/***/ "./src/scss/components/_logos.scss":
/*!*****************************************!*\
  !*** ./src/scss/components/_logos.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_our_products.scss":
/*!************************************************!*\
  !*** ./src/scss/components/_our_products.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_review.scss":
/*!******************************************!*\
  !*** ./src/scss/components/_review.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_showcases.scss":
/*!*********************************************!*\
  !*** ./src/scss/components/_showcases.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_slider_controls.scss":
/*!***************************************************!*\
  !*** ./src/scss/components/_slider_controls.scss ***!
  \***************************************************/
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

/***/ "./src/scss/components/_testimonial_slider.scss":
/*!******************************************************!*\
  !*** ./src/scss/components/_testimonial_slider.scss ***!
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

/***/ "./src/scss/components/_what_to_read.scss":
/*!************************************************!*\
  !*** ./src/scss/components/_what_to_read.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_work_space.scss":
/*!**********************************************!*\
  !*** ./src/scss/components/_work_space.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_IndexPage_js.js.map