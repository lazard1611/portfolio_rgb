"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_SinglePost_js"],{

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

/***/ "./src/js/components/PostContent.js":
/*!******************************************!*\
  !*** ./src/js/components/PostContent.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_post_content_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_post_content.scss */ "./src/scss/components/_post_content.scss");
/* harmony import */ var ScssComponents_subscription_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/_subscription.scss */ "./src/scss/components/_subscription.scss");
/* harmony import */ var _subscriptionForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscriptionForm */ "./src/js/components/subscriptionForm.js");
/* harmony import */ var _postSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postSidebar */ "./src/js/components/postSidebar.js");





var PostContent = function PostContent() {
  (0,_subscriptionForm__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_postSidebar__WEBPACK_IMPORTED_MODULE_3__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostContent);

/***/ }),

/***/ "./src/js/components/PostHero.js":
/*!***************************************!*\
  !*** ./src/js/components/PostHero.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_post_hero_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_post_hero.scss */ "./src/scss/components/_post_hero.scss");


var PostHero = function PostHero() {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostHero);

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

/***/ "./src/js/components/postSidebar.js":
/*!******************************************!*\
  !*** ./src/js/components/postSidebar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js");




var postSidebar = function postSidebar() {
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["default"]);
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var $sidebar = document.querySelector('.postSidebar');
  var $socialSidebar = document.querySelector('.postSocials');
  var $section = document.querySelector('.postSection');
  var windowHeight = window.innerHeight;
  var sidebarActiveClass = 'post_content__sidebar_list--active';
  var sidebarFinishClass = 'post_content__sidebar_list--finish';
  var socialActiveClass = 'post_content__social--active';
  var socialFinishClass = 'post_content__social--finish';

  var initSidebar = function initSidebar(el, section, activeClass, finishClass) {
    var sidebarHeight = el.offsetHeight;
    var sidebarBottomOffset = windowHeight - sidebarHeight;
    gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["default"].matchMedia({
      '(min-width: 1024px)': function minWidth1024px() {
        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["default"].batch(section, {
          start: 'top top',
          end: "bottom+=".concat(sidebarBottomOffset, " bottom"),
          onEnter: function onEnter() {
            el.classList.add(activeClass);
          },
          onEnterBack: function onEnterBack() {
            el.classList.add(activeClass);
            el.classList.remove(finishClass);
          },
          onLeave: function onLeave() {
            el.classList.remove(activeClass);
            el.classList.add(finishClass);
          },
          onLeaveBack: function onLeaveBack() {
            el.classList.remove(activeClass);
          }
        });
      }
    });
  };

  if ($section) {
    initSidebar($sidebar, $section, sidebarActiveClass, sidebarFinishClass);
    initSidebar($socialSidebar, $section, socialActiveClass, socialFinishClass);
  } // anchors


  var $anchorLinks = document.querySelectorAll('.post_content__sidebar_link');
  $anchorLinks.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      var href = item.getAttribute('href');
      var topY = document.querySelector(href).getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(window, 0.6, {
        scrollTo: {
          y: topY,
          autoKill: false
        },
        ease: 'none'
      });
    });
  });
  var $anchors = document.querySelector('.post_content__article').querySelectorAll('h2, h3');
  console.log($anchors);
  $anchors.forEach(function (item) {
    gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["default"].batch(item, {
      start: 'top top',
      end: 'bottom bottom',
      onEnter: function onEnter() {
        setActiveAnchorLink(item);
      },
      onEnterBack: function onEnterBack() {
        setActiveAnchorLink(item);
      }
    });
  });

  var setActiveAnchorLink = function setActiveAnchorLink(item) {
    var id = item.getAttribute('id');
    var link = document.querySelector("[href=\"#".concat(id, "\"]"));
    $anchorLinks.forEach(function (el) {
      return el.classList.remove('post_content__sidebar_link--active');
    });
    link.classList.add('post_content__sidebar_link--active');
  }; // social link - copy article url


  var socialLinkCopy = document.querySelector('.post_content__social_link--link');

  if (socialLinkCopy) {
    socialLinkCopy.addEventListener('click', function (e) {
      e.preventDefault();
      navigator.clipboard.writeText(window.location.href);
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postSidebar);

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

/***/ "./src/js/pages/SinglePost.js":
/*!************************************!*\
  !*** ./src/js/pages/SinglePost.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SinglePost)
/* harmony export */ });
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var _components_PostHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostHero */ "./src/js/components/PostHero.js");
/* harmony import */ var _components_PostContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostContent */ "./src/js/components/PostContent.js");
/* harmony import */ var _components_LatestArticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LatestArticles */ "./src/js/components/LatestArticles.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }







var SinglePost = /*#__PURE__*/function () {
  function SinglePost() {
    _classCallCheck(this, SinglePost);

    this.init = this.init.bind(this);
  }

  _createClass(SinglePost, [{
    key: "loadFunc",
    value: function loadFunc() {
      (0,_components_PostHero__WEBPACK_IMPORTED_MODULE_2__["default"])();
      (0,_components_PostContent__WEBPACK_IMPORTED_MODULE_3__["default"])();
      (0,_components_LatestArticles__WEBPACK_IMPORTED_MODULE_4__["default"])();
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

  return SinglePost;
}();



/***/ }),

/***/ "./node_modules/gsap/ScrollToPlugin.js":
/*!*********************************************!*\
  !*** ./node_modules/gsap/ScrollToPlugin.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollToPlugin": () => (/* binding */ ScrollToPlugin),
/* harmony export */   "default": () => (/* binding */ ScrollToPlugin)
/* harmony export */ });
/*!
 * ScrollToPlugin 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var gsap,
    _coreInitted,
    _window,
    _docEl,
    _body,
    _toArray,
    _config,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _getGSAP = function _getGSAP() {
  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _max = function _max(element, axis) {
  var dim = axis === "x" ? "Width" : "Height",
      scroll = "scroll" + dim,
      client = "client" + dim;
  return element === _window || element === _docEl || element === _body ? Math.max(_docEl[scroll], _body[scroll]) - (_window["inner" + dim] || _docEl[client] || _body[client]) : element[scroll] - element["offset" + dim];
},
    _buildGetter = function _buildGetter(e, axis) {
  //pass in an element and an axis ("x" or "y") and it'll return a getter function for the scroll position of that element (like scrollTop or scrollLeft, although if the element is the window, it'll use the pageXOffset/pageYOffset or the documentElement's scrollTop/scrollLeft or document.body's. Basically this streamlines things and makes a very fast getter across browsers.
  var p = "scroll" + (axis === "x" ? "Left" : "Top");

  if (e === _window) {
    if (e.pageXOffset != null) {
      p = "page" + axis.toUpperCase() + "Offset";
    } else {
      e = _docEl[p] != null ? _docEl : _body;
    }
  }

  return function () {
    return e[p];
  };
},
    _clean = function _clean(value, index, target, targets) {
  _isFunction(value) && (value = value(index, target, targets));

  if (typeof value !== "object") {
    return _isString(value) && value !== "max" && value.charAt(1) !== "=" ? {
      x: value,
      y: value
    } : {
      y: value
    }; //if we don't receive an object as the parameter, assume the user intends "y".
  } else if (value.nodeType) {
    return {
      y: value,
      x: value
    };
  } else {
    var result = {},
        p;

    for (p in value) {
      result[p] = p !== "onAutoKill" && _isFunction(value[p]) ? value[p](index, target, targets) : value[p];
    }

    return result;
  }
},
    _getOffset = function _getOffset(element, container) {
  element = _toArray(element)[0];

  if (!element || !element.getBoundingClientRect) {
    return console.warn("scrollTo target doesn't exist. Using 0") || {
      x: 0,
      y: 0
    };
  }

  var rect = element.getBoundingClientRect(),
      isRoot = !container || container === _window || container === _body,
      cRect = isRoot ? {
    top: _docEl.clientTop - (_window.pageYOffset || _docEl.scrollTop || _body.scrollTop || 0),
    left: _docEl.clientLeft - (_window.pageXOffset || _docEl.scrollLeft || _body.scrollLeft || 0)
  } : container.getBoundingClientRect(),
      offsets = {
    x: rect.left - cRect.left,
    y: rect.top - cRect.top
  };

  if (!isRoot && container) {
    //only add the current scroll position if it's not the window/body.
    offsets.x += _buildGetter(container, "x")();
    offsets.y += _buildGetter(container, "y")();
  }

  return offsets;
},
    _parseVal = function _parseVal(value, target, axis, currentVal, offset) {
  return !isNaN(value) && typeof value !== "object" ? parseFloat(value) - offset : _isString(value) && value.charAt(1) === "=" ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) + currentVal - offset : value === "max" ? _max(target, axis) - offset : Math.min(_max(target, axis), _getOffset(value, target)[axis] - offset);
},
    _initCore = function _initCore() {
  gsap = _getGSAP();

  if (_windowExists() && gsap && document.body) {
    _window = window;
    _body = document.body;
    _docEl = document.documentElement;
    _toArray = gsap.utils.toArray;
    gsap.config({
      autoKillThreshold: 7
    });
    _config = gsap.config();
    _coreInitted = 1;
  }
};

var ScrollToPlugin = {
  version: "3.10.4",
  name: "scrollTo",
  rawVars: 1,
  register: function register(core) {
    gsap = core;

    _initCore();
  },
  init: function init(target, value, tween, index, targets) {
    _coreInitted || _initCore();
    var data = this,
        snapType = gsap.getProperty(target, "scrollSnapType");
    data.isWin = target === _window;
    data.target = target;
    data.tween = tween;
    value = _clean(value, index, target, targets);
    data.vars = value;
    data.autoKill = !!value.autoKill;
    data.getX = _buildGetter(target, "x");
    data.getY = _buildGetter(target, "y");
    data.x = data.xPrev = data.getX();
    data.y = data.yPrev = data.getY();

    if (snapType && snapType !== "none") {
      // disable scroll snapping to avoid strange behavior
      data.snap = 1;
      data.snapInline = target.style.scrollSnapType;
      target.style.scrollSnapType = "none";
    }

    if (value.x != null) {
      data.add(data, "x", data.x, _parseVal(value.x, target, "x", data.x, value.offsetX || 0), index, targets);

      data._props.push("scrollTo_x");
    } else {
      data.skipX = 1;
    }

    if (value.y != null) {
      data.add(data, "y", data.y, _parseVal(value.y, target, "y", data.y, value.offsetY || 0), index, targets);

      data._props.push("scrollTo_y");
    } else {
      data.skipY = 1;
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt,
        target = data.target,
        tween = data.tween,
        autoKill = data.autoKill,
        xPrev = data.xPrev,
        yPrev = data.yPrev,
        isWin = data.isWin,
        snap = data.snap,
        snapInline = data.snapInline,
        x,
        y,
        yDif,
        xDif,
        threshold;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    x = isWin || !data.skipX ? data.getX() : xPrev;
    y = isWin || !data.skipY ? data.getY() : yPrev;
    yDif = y - yPrev;
    xDif = x - xPrev;
    threshold = _config.autoKillThreshold;

    if (data.x < 0) {
      //can't scroll to a position less than 0! Might happen if someone uses a Back.easeOut or Elastic.easeOut when scrolling back to the top of the page (for example)
      data.x = 0;
    }

    if (data.y < 0) {
      data.y = 0;
    }

    if (autoKill) {
      //note: iOS has a bug that throws off the scroll by several pixels, so we need to check if it's within 7 pixels of the previous one that we set instead of just looking for an exact match.
      if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target, "x")) {
        data.skipX = 1; //if the user scrolls separately, we should stop tweening!
      }

      if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target, "y")) {
        data.skipY = 1; //if the user scrolls separately, we should stop tweening!
      }

      if (data.skipX && data.skipY) {
        tween.kill();
        data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
      }
    }

    if (isWin) {
      _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y);
    } else {
      data.skipY || (target.scrollTop = data.y);
      data.skipX || (target.scrollLeft = data.x);
    }

    if (snap && (ratio === 1 || ratio === 0)) {
      y = target.scrollTop;
      x = target.scrollLeft;
      snapInline ? target.style.scrollSnapType = snapInline : target.style.removeProperty("scroll-snap-type");
      target.scrollTop = y + 1; // bug in Safari causes the element to totally reset its scroll position when scroll-snap-type changes, so we need to set it to a slightly different value and then back again to work around this bug.

      target.scrollLeft = x + 1;
      target.scrollTop = y;
      target.scrollLeft = x;
    }

    data.xPrev = data.x;
    data.yPrev = data.y;
  },
  kill: function kill(property) {
    var both = property === "scrollTo";

    if (both || property === "scrollTo_x") {
      this.skipX = 1;
    }

    if (both || property === "scrollTo_y") {
      this.skipY = 1;
    }
  }
};
ScrollToPlugin.max = _max;
ScrollToPlugin.getOffset = _getOffset;
ScrollToPlugin.buildGetter = _buildGetter;
_getGSAP() && gsap.registerPlugin(ScrollToPlugin);


/***/ }),

/***/ "./src/scss/components/_latest_articles.scss":
/*!***************************************************!*\
  !*** ./src/scss/components/_latest_articles.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_post_content.scss":
/*!************************************************!*\
  !*** ./src/scss/components/_post_content.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_post_hero.scss":
/*!*********************************************!*\
  !*** ./src/scss/components/_post_hero.scss ***!
  \*********************************************/
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
//# sourceMappingURL=src_js_pages_SinglePost_js.js.map