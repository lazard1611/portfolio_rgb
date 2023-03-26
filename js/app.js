(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["app"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main_global.scss */ "./src/scss/main_global.scss");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var _js_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/App */ "./src/js/App.js");
// scss
 // js


 // import pageWidgetInit from 'dev_vendors/dev_widget';


var styles = ['color: #fff', 'background: #cf8e1f'].join(';');
var message = 'Developed by Glivera-team https://glivera-team.com/'; // eslint-disable-next-line no-console

console.info('%c%s', styles, message); // -------------------  dev widget
// pageWidgetInit();
// if (GLOBAL_VARS.projectDevStatus) {
// }
// -------------------  dev widget###
// -------------------  import sprite_icons svg

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__("./src/images/icons/sprite_icons sync recursive \\.svg$")); // -------------------  import sprite_icons svg###
// -------------------  init App

(0,utils__WEBPACK_IMPORTED_MODULE_1__.documentReady)(function () {
  var appInit = new _js_App__WEBPACK_IMPORTED_MODULE_3__["default"]();
}); // -------------------  init App##

/***/ }),

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! layout/Layout */ "./src/js/layout/Layout.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.$htmlTag = document.querySelector('html');
    this.pageClass = this.$htmlTag.dataset.templateName && this.$htmlTag.dataset.templateName.length > 0 ? this.$htmlTag.dataset.templateName : null;
    this.init = this.init.bind(this);
    this.init();
  }

  _createClass(App, [{
    key: "importPage",
    value: function importPage() {
      if (this.pageClass && this.pageClass !== null) {
        __webpack_require__("./src/js/pages lazy recursive ^\\.\\/.*$")("./".concat(this.pageClass)).then(function (_ref) {
          var pageClass = _ref.default;
          var newPage = new pageClass();
          newPage.init();
        }).catch(function (error) {
          console.error('Failed to load page, check data-template-name at root if correct');
          console.dir(error, error.stack);
        });
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      var initLayout = new layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"]();
      setTimeout(function () {
        _this.importPage();
      }, 0);
    }
  }]);

  return App;
}();



/***/ }),

/***/ "./src/js/components/Cookie.js":
/*!*************************************!*\
  !*** ./src/js/components/Cookie.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_cookie_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_cookie.scss */ "./src/scss/components/_cookie.scss");
/* harmony import */ var _CookieBtns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CookieBtns */ "./src/js/components/CookieBtns.js");



var Cookie = function Cookie() {
  (0,_CookieBtns__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cookie);

/***/ }),

/***/ "./src/js/components/CookieBtns.js":
/*!*****************************************!*\
  !*** ./src/js/components/CookieBtns.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CookieBtn = function CookieBtn() {
  var closeBtn = document.querySelector('.cookieClose');
  var cookieSection = document.querySelector('.cookie');
  var acceptBtn = document.querySelector('.cookieAccept');
  var cookieAcceptMob = document.querySelector('.cookieAcceptMob');
  var body = document.querySelector('body');

  if (cookieSection) {
    closeBtn.addEventListener('click', function () {
      cookieSection.classList.add('cookie--close_mod');
    });
    acceptBtn.addEventListener('click', function () {
      cookieSection.classList.add('cookie--accept_mod');
    });
    cookieAcceptMob.addEventListener('click', function () {
      body.classList.add('body--mobile_cookie');
      cookieSection.classList.add('cookie--accept_mod');
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CookieBtn);

/***/ }),

/***/ "./src/js/components/Menu.js":
/*!***********************************!*\
  !*** ./src/js/components/Menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_menu_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_menu.scss */ "./src/scss/components/_menu.scss");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Menu = /*#__PURE__*/function () {
  function Menu($header) {
    _classCallCheck(this, Menu);

    this.$triggers = document.querySelectorAll(this.SELECTORS.trigger);
    this.$menu = document.querySelector(this.SELECTORS.menu);
    this.$header = $header;
    this.init();
  }

  _createClass(Menu, [{
    key: "SELECTORS",
    get: function get() {
      return {
        trigger: '.menuTrigger',
        menu: '.menu'
      };
    }
  }, {
    key: "CLASSNAMES",
    get: function get() {
      return {
        bodyActiveMenu: 'body--active_menu'
      };
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      if (!this.$triggers || !this.$menu) return null;
      this.outsideClickHandler = this.outsideClickHandler.bind(this);
      this.toggleHandler = this.toggleHandler.bind(this);
      this.openHandler = this.openHandler.bind(this);
      this.closeHandler = this.closeHandler.bind(this);
      this.$triggers.forEach(function ($trigger) {
        $trigger.addEventListener('click', _this.toggleHandler);
      });
      return null;
    }
  }, {
    key: "openHandler",
    value: function openHandler() {
      document.body.classList.add(this.CLASSNAMES.bodyActiveMenu);
      document.body.addEventListener('click', this.outsideClickHandler);
    }
  }, {
    key: "closeHandler",
    value: function closeHandler() {
      document.body.classList.remove(this.CLASSNAMES.bodyActiveMenu);
      document.body.removeEventListener('click', this.outsideClickHandler);
    }
  }, {
    key: "outsideClickHandler",
    value: function outsideClickHandler(e) {
      if (!e.target.contains(this.$menu) && !this.$header.contains(e.target)) {
        this.closeHandler();
      }
    }
  }, {
    key: "toggleHandler",
    value: function toggleHandler() {
      if (document.body.classList.contains(this.CLASSNAMES.bodyActiveMenu)) {
        this.closeHandler();
      } else {
        this.openHandler();
      }
    }
  }]);

  return Menu;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/js/layout/Footer.js":
/*!*********************************!*\
  !*** ./src/js/layout/Footer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssLayout_footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssLayout/_footer.scss */ "./src/scss/layout/_footer.scss");


var Footer = function Footer() {
  var $footer = document.querySelector('.footer');

  if (typeof $footer !== 'undefined' && $footer != null) {// console.log('init footer');
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/js/layout/Header.js":
/*!*********************************!*\
  !*** ./src/js/layout/Header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssLayout_header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssLayout/_header.scss */ "./src/scss/layout/_header.scss");
/* harmony import */ var components_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Menu */ "./src/js/components/Menu.js");



var Header = function Header() {
  var $header = document.querySelector('.header');

  if (typeof $header !== 'undefined' && $header != null) {
    var menu = new components_Menu__WEBPACK_IMPORTED_MODULE_1__["default"]($header);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/js/layout/Layout.js":
/*!*********************************!*\
  !*** ./src/js/layout/Layout.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/js/layout/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./src/js/layout/Footer.js");
/* harmony import */ var _components_Cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Cookie */ "./src/js/components/Cookie.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// ------------------- imports
 // ------------------- imports###
// ------------------  import layout
// import buttonToOpenCalendly from '../components/buttonToOpenCalendly';



 // import 'swiper/css';
// import 'ScssComponents/_hero.scss';
// import 'ScssComponents/_team_hero.scss';
// import 'ScssComponents/_showcase_hero.scss';
// import 'ScssComponents/_showcases_list.scss';
// @import '../components/not_found';

 // ------------------  import layout###
// ------------------  import styles
// ------------------  import styles###

var Layout = /*#__PURE__*/function () {
  function Layout() {
    _classCallCheck(this, Layout);

    this.$body = document.body;
    this.init = this.init.bind(this);
    this.init();
  }

  _createClass(Layout, [{
    key: "loadFunc",
    value: function loadFunc() {
      (0,utils__WEBPACK_IMPORTED_MODULE_0__.calcViewportHeight)();
      (0,_Header__WEBPACK_IMPORTED_MODULE_1__["default"])();
      (0,_Footer__WEBPACK_IMPORTED_MODULE_2__["default"])(); // buttonToOpenCalendly();

      (0,_components_Cookie__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      (0,utils__WEBPACK_IMPORTED_MODULE_0__.pageLoad)(function () {
        _this.loadFunc();
      });
      (0,utils__WEBPACK_IMPORTED_MODULE_0__.onWindowResize)(function () {
        (0,utils__WEBPACK_IMPORTED_MODULE_0__.calcViewportHeight)();
      });
    }
  }]);

  return Layout;
}();



/***/ }),

/***/ "./src/js/utils/constants.js":
/*!***********************************!*\
  !*** ./src/js/utils/constants.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLOBAL_VARS": () => (/* binding */ GLOBAL_VARS)
/* harmony export */ });
var GLOBAL_VARS = {
  degree: 0.0174532925,
  mediaPoint1: 1024,
  mediaPoint2: 768,
  mediaPoint3: 480,
  mediaPoint4: 320,
  projectDevStatus: "development" === 'development',
  calendlyLoaded: false
};

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "debounceImmediate": () => (/* binding */ debounceImmediate),
/* harmony export */   "calcViewportHeight": () => (/* binding */ calcViewportHeight),
/* harmony export */   "calcRemValue": () => (/* binding */ calcRemValue),
/* harmony export */   "calcMobileRemValue": () => (/* binding */ calcMobileRemValue),
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt),
/* harmony export */   "getRandom": () => (/* binding */ getRandom),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "getWindowSize": () => (/* binding */ getWindowSize),
/* harmony export */   "onWindowResize": () => (/* binding */ onWindowResize),
/* harmony export */   "onOrientationChange": () => (/* binding */ onOrientationChange),
/* harmony export */   "onWindowScroll": () => (/* binding */ onWindowScroll),
/* harmony export */   "documentReady": () => (/* binding */ documentReady),
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var ismobilejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ismobilejs */ "./node_modules/ismobilejs/esm/index.js");

function debounce(delay, fn) {
  var timerId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(function () {
      fn.apply(void 0, args);
      timerId = null;
    }, delay);
  };
}
function debounceImmediate(delay, fn) {
  var fired = false;
  return function () {
    if (!fired) {
      fn.apply(void 0, arguments);
      fired = true;
      setTimeout(function () {
        fired = false;
      }, delay);
    }
  };
}
var calcViewportHeight = function calcViewportHeight() {
  var isMobileData = (0,ismobilejs__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var isApple = isMobileData.apple.phone;
  var isAndroid = isMobileData.android.phone;
  var isSeven = isMobileData.seven_inch;

  if (isApple || isAndroid || isSeven) {
    var vh = window.innerHeight * 0.01; // console.log(vh);

    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  }
};
var calcRemValue = function calcRemValue(_ref) {
  var windowWidth = _ref.windowWidth,
      windowHeight = _ref.windowHeight;
  var remValue = windowWidth * 0.5625 > windowHeight ? windowHeight / 800 * 10 : windowWidth / 1440 * 10;
  document.documentElement.style.setProperty('--rem', "".concat(remValue, "px"));
};
var calcMobileRemValue = function calcMobileRemValue(_ref2) {
  var windowHeight = _ref2.windowHeight;
  var mobileRemValue = windowHeight / 800 * 10;
  document.documentElement.style.setProperty('--mobile-rem', "".concat(mobileRemValue, "px"));
};
var getRandomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
var getRandom = function getRandom(min, max) {
  return Math.random() * (max - min) + min;
};
function isFunction(func) {
  return func instanceof Function;
}
function getWindowSize() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  return {
    windowWidth: windowWidth,
    windowHeight: windowHeight
  };
}
var onWindowResize = function onWindowResize(cb) {
  if (!cb && !isFunction(cb)) return;

  var handleResize = function handleResize() {
    cb();
  };

  window.addEventListener('resize', debounce(15, handleResize));
  handleResize();
};
var onOrientationChange = function onOrientationChange(cb) {
  if (!cb && !isFunction(cb)) return;

  var handleChange = function handleChange() {
    cb();
  };

  window.addEventListener('orientationchange', debounce(15, handleChange));
  handleChange();
};
var onWindowScroll = function onWindowScroll(cb) {
  if (!cb && !isFunction(cb)) return;

  var handleScroll = function handleScroll() {
    cb(window.pageYOffset);
  };

  window.addEventListener('scroll', debounce(15, handleScroll));
  handleScroll();
};
var documentReady = function documentReady(cb) {
  if (!cb && !isFunction(cb)) return;
  document.addEventListener('DOMContentLoaded', cb);
};
var pageLoad = function pageLoad(cb) {
  if (!cb && !isFunction(cb)) return;
  window.addEventListener('load', cb);
};

/***/ }),

/***/ "./node_modules/ismobilejs/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/ismobilejs/esm/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _isMobile__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isMobile */ "./node_modules/ismobilejs/esm/isMobile.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ismobilejs/esm/isMobile.js":
/*!*************************************************!*\
  !*** ./node_modules/ismobilejs/esm/isMobile.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isMobile)
/* harmony export */ });
var appleIphone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var appleUniversal = /\biOS-universal(?:.+)Mac\b/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i;
var androidTablet = /Android/i;
var amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
var amazonTablet = /Silk/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i;
var otherBlackBerry = /BlackBerry/i;
var otherBlackBerry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i;
var isAppleTabletOnIos13 = function (navigator) {
    return (typeof navigator !== 'undefined' &&
        navigator.platform === 'MacIntel' &&
        typeof navigator.maxTouchPoints === 'number' &&
        navigator.maxTouchPoints > 1 &&
        typeof MSStream === 'undefined');
};
function createMatch(userAgent) {
    return function (regex) { return regex.test(userAgent); };
}
function isMobile(param) {
    var nav = {
        userAgent: '',
        platform: '',
        maxTouchPoints: 0
    };
    if (!param && typeof navigator !== 'undefined') {
        nav = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints || 0
        };
    }
    else if (typeof param === 'string') {
        nav.userAgent = param;
    }
    else if (param && param.userAgent) {
        nav = {
            userAgent: param.userAgent,
            platform: param.platform,
            maxTouchPoints: param.maxTouchPoints || 0
        };
    }
    var userAgent = nav.userAgent;
    var tmp = userAgent.split('[FBAN');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    tmp = userAgent.split('Twitter');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    var match = createMatch(userAgent);
    var result = {
        apple: {
            phone: match(appleIphone) && !match(windowsPhone),
            ipod: match(appleIpod),
            tablet: !match(appleIphone) &&
                (match(appleTablet) || isAppleTabletOnIos13(nav)) &&
                !match(windowsPhone),
            universal: match(appleUniversal),
            device: (match(appleIphone) ||
                match(appleIpod) ||
                match(appleTablet) ||
                match(appleUniversal) ||
                isAppleTabletOnIos13(nav)) &&
                !match(windowsPhone)
        },
        amazon: {
            phone: match(amazonPhone),
            tablet: !match(amazonPhone) && match(amazonTablet),
            device: match(amazonPhone) || match(amazonTablet)
        },
        android: {
            phone: (!match(windowsPhone) && match(amazonPhone)) ||
                (!match(windowsPhone) && match(androidPhone)),
            tablet: !match(windowsPhone) &&
                !match(amazonPhone) &&
                !match(androidPhone) &&
                (match(amazonTablet) || match(androidTablet)),
            device: (!match(windowsPhone) &&
                (match(amazonPhone) ||
                    match(amazonTablet) ||
                    match(androidPhone) ||
                    match(androidTablet))) ||
                match(/\bokhttp\b/i)
        },
        windows: {
            phone: match(windowsPhone),
            tablet: match(windowsTablet),
            device: match(windowsPhone) || match(windowsTablet)
        },
        other: {
            blackberry: match(otherBlackBerry),
            blackberry10: match(otherBlackBerry10),
            opera: match(otherOpera),
            firefox: match(otherFirefox),
            chrome: match(otherChrome),
            device: match(otherBlackBerry) ||
                match(otherBlackBerry10) ||
                match(otherOpera) ||
                match(otherFirefox) ||
                match(otherChrome)
        },
        any: false,
        phone: false,
        tablet: false
    };
    result.any =
        result.apple.device ||
            result.android.device ||
            result.windows.device ||
            result.other.device;
    result.phone =
        result.apple.phone || result.android.phone || result.windows.phone;
    result.tablet =
        result.apple.tablet || result.android.tablet || result.windows.tablet;
    return result;
}
//# sourceMappingURL=isMobile.js.map

/***/ }),

/***/ "./src/scss/components/_cookie.scss":
/*!******************************************!*\
  !*** ./src/scss/components/_cookie.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_menu.scss":
/*!****************************************!*\
  !*** ./src/scss/components/_menu.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/layout/_footer.scss":
/*!**************************************!*\
  !*** ./src/scss/layout/_footer.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/layout/_header.scss":
/*!**************************************!*\
  !*** ./src/scss/layout/_header.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/main_global.scss":
/*!***********************************!*\
  !*** ./src/scss/main_global.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/images/icons/sprite_icons/arrow.svg":
/*!*************************************************!*\
  !*** ./src/images/icons/sprite_icons/arrow.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "arrow-usage",
      viewBox: "0 0 22 22",
      url: "/images/sprite/" + "sprite.svg#arrow-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/arrow_left.svg":
/*!******************************************************!*\
  !*** ./src/images/icons/sprite_icons/arrow_left.svg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "arrow_left-usage",
      viewBox: "0 0 180 330",
      url: "/images/sprite/" + "sprite.svg#arrow_left-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/arrow_right.svg":
/*!*******************************************************!*\
  !*** ./src/images/icons/sprite_icons/arrow_right.svg ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "arrow_right-usage",
      viewBox: "0 0 180 330",
      url: "/images/sprite/" + "sprite.svg#arrow_right-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/at.svg":
/*!**********************************************!*\
  !*** ./src/images/icons/sprite_icons/at.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "at-usage",
      viewBox: "0 0 78 78",
      url: "/images/sprite/" + "sprite.svg#at-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/bell.svg":
/*!************************************************!*\
  !*** ./src/images/icons/sprite_icons/bell.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "bell-usage",
      viewBox: "0 0 28.071 28",
      url: "/images/sprite/" + "sprite.svg#bell-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/bike.svg":
/*!************************************************!*\
  !*** ./src/images/icons/sprite_icons/bike.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "bike-usage",
      viewBox: "0 0 114 72",
      url: "/images/sprite/" + "sprite.svg#bike-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/check.svg":
/*!*************************************************!*\
  !*** ./src/images/icons/sprite_icons/check.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "check-usage",
      viewBox: "0 0 18.6 18.6",
      url: "/images/sprite/" + "sprite.svg#check-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/clock.svg":
/*!*************************************************!*\
  !*** ./src/images/icons/sprite_icons/clock.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "clock-usage",
      viewBox: "0 0 100 100",
      url: "/images/sprite/" + "sprite.svg#clock-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/close.svg":
/*!*************************************************!*\
  !*** ./src/images/icons/sprite_icons/close.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "close-usage",
      viewBox: "0 0 17.83 17.83",
      url: "/images/sprite/" + "sprite.svg#close-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/cloud.svg":
/*!*************************************************!*\
  !*** ./src/images/icons/sprite_icons/cloud.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "cloud-usage",
      viewBox: "0 0 89.99 78",
      url: "/images/sprite/" + "sprite.svg#cloud-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/cookie-close.svg":
/*!********************************************************!*\
  !*** ./src/images/icons/sprite_icons/cookie-close.svg ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "cookie-close-usage",
      viewBox: "0 0 17.83 17.83",
      url: "/images/sprite/" + "sprite.svg#cookie-close-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/cup.svg":
/*!***********************************************!*\
  !*** ./src/images/icons/sprite_icons/cup.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "cup-usage",
      viewBox: "0 0 78 84",
      url: "/images/sprite/" + "sprite.svg#cup-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/facebook.svg":
/*!****************************************************!*\
  !*** ./src/images/icons/sprite_icons/facebook.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "facebook-usage",
      viewBox: "0 0 10 21",
      url: "/images/sprite/" + "sprite.svg#facebook-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/faces.svg":
/*!*************************************************!*\
  !*** ./src/images/icons/sprite_icons/faces.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "faces-usage",
      viewBox: "0 0 96 66",
      url: "/images/sprite/" + "sprite.svg#faces-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/fire.svg":
/*!************************************************!*\
  !*** ./src/images/icons/sprite_icons/fire.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "fire-usage",
      viewBox: "0 0 26 34",
      url: "/images/sprite/" + "sprite.svg#fire-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/heart.svg":
/*!*************************************************!*\
  !*** ./src/images/icons/sprite_icons/heart.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "heart-usage",
      viewBox: "0 0 38 33",
      url: "/images/sprite/" + "sprite.svg#heart-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/lemon.svg":
/*!*************************************************!*\
  !*** ./src/images/icons/sprite_icons/lemon.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "lemon-usage",
      viewBox: "0 0 24 36",
      url: "/images/sprite/" + "sprite.svg#lemon-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/link.svg":
/*!************************************************!*\
  !*** ./src/images/icons/sprite_icons/link.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "link-usage",
      viewBox: "0 0 23.72 24.12",
      url: "/images/sprite/" + "sprite.svg#link-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/list.svg":
/*!************************************************!*\
  !*** ./src/images/icons/sprite_icons/list.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "list-usage",
      viewBox: "0 0 66 78",
      url: "/images/sprite/" + "sprite.svg#list-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/magic.svg":
/*!*************************************************!*\
  !*** ./src/images/icons/sprite_icons/magic.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "magic-usage",
      viewBox: "0 0 100 100",
      url: "/images/sprite/" + "sprite.svg#magic-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/mark_blue.svg":
/*!*****************************************************!*\
  !*** ./src/images/icons/sprite_icons/mark_blue.svg ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "mark_blue-usage",
      viewBox: "0 0 51 52",
      url: "/images/sprite/" + "sprite.svg#mark_blue-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/mark_red.svg":
/*!****************************************************!*\
  !*** ./src/images/icons/sprite_icons/mark_red.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "mark_red-usage",
      viewBox: "0 0 51 52",
      url: "/images/sprite/" + "sprite.svg#mark_red-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/menu.svg":
/*!************************************************!*\
  !*** ./src/images/icons/sprite_icons/menu.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "menu-usage",
      viewBox: "0 0 18.48 18.48",
      url: "/images/sprite/" + "sprite.svg#menu-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/moon.svg":
/*!************************************************!*\
  !*** ./src/images/icons/sprite_icons/moon.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "moon-usage",
      viewBox: "0 0 22 22",
      url: "/images/sprite/" + "sprite.svg#moon-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/paperplane.svg":
/*!******************************************************!*\
  !*** ./src/images/icons/sprite_icons/paperplane.svg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "paperplane-usage",
      viewBox: "0 0 105.34 72.96",
      url: "/images/sprite/" + "sprite.svg#paperplane-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/pixel_arrow.svg":
/*!*******************************************************!*\
  !*** ./src/images/icons/sprite_icons/pixel_arrow.svg ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "pixel_arrow-usage",
      viewBox: "0 0 22 22",
      url: "/images/sprite/" + "sprite.svg#pixel_arrow-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/right_angle_arrow.svg":
/*!*************************************************************!*\
  !*** ./src/images/icons/sprite_icons/right_angle_arrow.svg ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "right_angle_arrow-usage",
      viewBox: "0 0 8.041 13.566",
      url: "/images/sprite/" + "sprite.svg#right_angle_arrow-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/sun.svg":
/*!***********************************************!*\
  !*** ./src/images/icons/sprite_icons/sun.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "sun-usage",
      viewBox: "0 0 22 22",
      url: "/images/sprite/" + "sprite.svg#sun-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/team.svg":
/*!************************************************!*\
  !*** ./src/images/icons/sprite_icons/team.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "team-usage",
      viewBox: "0 0 100 100",
      url: "/images/sprite/" + "sprite.svg#team-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/tickIcon.svg":
/*!****************************************************!*\
  !*** ./src/images/icons/sprite_icons/tickIcon.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "tickIcon-usage",
      viewBox: "0 0 32 32",
      url: "/images/sprite/" + "sprite.svg#tickIcon-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/twitter.svg":
/*!***************************************************!*\
  !*** ./src/images/icons/sprite_icons/twitter.svg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "twitter-usage",
      viewBox: "0 0 19 17",
      url: "/images/sprite/" + "sprite.svg#twitter-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons/whatsapp.svg":
/*!****************************************************!*\
  !*** ./src/images/icons/sprite_icons/whatsapp.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "whatsapp-usage",
      viewBox: "0 0 24 24",
      url: "/images/sprite/" + "sprite.svg#whatsapp-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite_icons sync recursive \\.svg$":
/*!****************************************************!*\
  !*** ./src/images/icons/sprite_icons/ sync \.svg$ ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./arrow.svg": "./src/images/icons/sprite_icons/arrow.svg",
	"./arrow_left.svg": "./src/images/icons/sprite_icons/arrow_left.svg",
	"./arrow_right.svg": "./src/images/icons/sprite_icons/arrow_right.svg",
	"./at.svg": "./src/images/icons/sprite_icons/at.svg",
	"./bell.svg": "./src/images/icons/sprite_icons/bell.svg",
	"./bike.svg": "./src/images/icons/sprite_icons/bike.svg",
	"./check.svg": "./src/images/icons/sprite_icons/check.svg",
	"./clock.svg": "./src/images/icons/sprite_icons/clock.svg",
	"./close.svg": "./src/images/icons/sprite_icons/close.svg",
	"./cloud.svg": "./src/images/icons/sprite_icons/cloud.svg",
	"./cookie-close.svg": "./src/images/icons/sprite_icons/cookie-close.svg",
	"./cup.svg": "./src/images/icons/sprite_icons/cup.svg",
	"./facebook.svg": "./src/images/icons/sprite_icons/facebook.svg",
	"./faces.svg": "./src/images/icons/sprite_icons/faces.svg",
	"./fire.svg": "./src/images/icons/sprite_icons/fire.svg",
	"./heart.svg": "./src/images/icons/sprite_icons/heart.svg",
	"./lemon.svg": "./src/images/icons/sprite_icons/lemon.svg",
	"./link.svg": "./src/images/icons/sprite_icons/link.svg",
	"./list.svg": "./src/images/icons/sprite_icons/list.svg",
	"./magic.svg": "./src/images/icons/sprite_icons/magic.svg",
	"./mark_blue.svg": "./src/images/icons/sprite_icons/mark_blue.svg",
	"./mark_red.svg": "./src/images/icons/sprite_icons/mark_red.svg",
	"./menu.svg": "./src/images/icons/sprite_icons/menu.svg",
	"./moon.svg": "./src/images/icons/sprite_icons/moon.svg",
	"./paperplane.svg": "./src/images/icons/sprite_icons/paperplane.svg",
	"./pixel_arrow.svg": "./src/images/icons/sprite_icons/pixel_arrow.svg",
	"./right_angle_arrow.svg": "./src/images/icons/sprite_icons/right_angle_arrow.svg",
	"./sun.svg": "./src/images/icons/sprite_icons/sun.svg",
	"./team.svg": "./src/images/icons/sprite_icons/team.svg",
	"./tickIcon.svg": "./src/images/icons/sprite_icons/tickIcon.svg",
	"./twitter.svg": "./src/images/icons/sprite_icons/twitter.svg",
	"./whatsapp.svg": "./src/images/icons/sprite_icons/whatsapp.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/icons/sprite_icons sync recursive \\.svg$";

/***/ }),

/***/ "./src/js/pages lazy recursive ^\\.\\/.*$":
/*!******************************************************!*\
  !*** ./src/js/pages/ lazy ^\.\/.*$ namespace object ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./BlogPage": [
		"./src/js/pages/BlogPage.js",
		"vendors-node_modules_swiper_swiper_esm_js",
		"src_scss_components__latest_articles_scss",
		"src_js_pages_BlogPage_js"
	],
	"./BlogPage.js": [
		"./src/js/pages/BlogPage.js",
		"vendors-node_modules_swiper_swiper_esm_js",
		"src_scss_components__latest_articles_scss",
		"src_js_pages_BlogPage_js"
	],
	"./IndexPage": [
		"./src/js/pages/IndexPage.js",
		"vendors-node_modules_swiper_swiper_esm_js",
		"vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js",
		"src_scss_components__latest_articles_scss",
		"src_scss_components__testimonial_client_scss-src_scss_components__testimonials_section_scss",
		"src_scss_components__our_products_scss",
		"src_js_pages_IndexPage_js"
	],
	"./IndexPage.js": [
		"./src/js/pages/IndexPage.js",
		"vendors-node_modules_swiper_swiper_esm_js",
		"vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js",
		"src_scss_components__latest_articles_scss",
		"src_scss_components__testimonial_client_scss-src_scss_components__testimonials_section_scss",
		"src_scss_components__our_products_scss",
		"src_js_pages_IndexPage_js"
	],
	"./Page404": [
		"./src/js/pages/Page404.js",
		"src_js_pages_Page404_js"
	],
	"./Page404.js": [
		"./src/js/pages/Page404.js",
		"src_js_pages_Page404_js"
	],
	"./ShowcasePage": [
		"./src/js/pages/ShowcasePage.js",
		"vendors-node_modules_swiper_swiper_esm_js",
		"vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js",
		"src_scss_components__testimonial_client_scss-src_scss_components__testimonials_section_scss",
		"src_js_pages_ShowcasePage_js"
	],
	"./ShowcasePage.js": [
		"./src/js/pages/ShowcasePage.js",
		"vendors-node_modules_swiper_swiper_esm_js",
		"vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js",
		"src_scss_components__testimonial_client_scss-src_scss_components__testimonials_section_scss",
		"src_js_pages_ShowcasePage_js"
	],
	"./ShowcasesPage": [
		"./src/js/pages/ShowcasesPage.js",
		"vendors-node_modules_swiper_swiper_esm_js",
		"src_scss_components__our_products_scss",
		"src_js_pages_ShowcasesPage_js"
	],
	"./ShowcasesPage.js": [
		"./src/js/pages/ShowcasesPage.js",
		"vendors-node_modules_swiper_swiper_esm_js",
		"src_scss_components__our_products_scss",
		"src_js_pages_ShowcasesPage_js"
	],
	"./SinglePost": [
		"./src/js/pages/SinglePost.js",
		"vendors-node_modules_swiper_swiper_esm_js",
		"vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js",
		"src_scss_components__latest_articles_scss",
		"src_js_pages_SinglePost_js"
	],
	"./SinglePost.js": [
		"./src/js/pages/SinglePost.js",
		"vendors-node_modules_swiper_swiper_esm_js",
		"vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_index_js",
		"src_scss_components__latest_articles_scss",
		"src_js_pages_SinglePost_js"
	],
	"./TeamPage": [
		"./src/js/pages/TeamPage.js",
		"src_js_pages_TeamPage_js"
	],
	"./TeamPage.js": [
		"./src/js/pages/TeamPage.js",
		"src_js_pages_TeamPage_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/js/pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=app.js.map