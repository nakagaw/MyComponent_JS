/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MYAPP = MYAPP || {};

MYAPP.ConsoleTip = function () {
    var _headerHiehgt = document.querySelector("[data-js-hook='sticky-header']").clientHeight;
    document.querySelector("[data-js-element='console-tip']").setAttribute("style", "margin-top:" + _headerHiehgt + "px");
}();

MYAPP.WindowSize = function () {
    var _target = document.getElementById("window-size");
    _target.innerHTML = "window size : " + window.innerWidth + " px × " + window.innerHeight + " px";
};
MYAPP.WindowSize();
window.onresize = MYAPP.WindowSize; // （）あるとリアルタイムじゃない

MYAPP.CursurPoint = function (event) {
    var _moveEvent = event || window.event; // IE対応
    var _target = document.getElementById("cursor-point");
    _target.innerHTML = "pointer : x : " + _moveEvent.clientX + " y : " + _moveEvent.clientY;
};
window.onmousemove = MYAPP.CursurPoint;

MYAPP.PageScroll = function () {
    var _target = document.getElementById("page-scroll");
    var winScrollMaxY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    _target.innerHTML = "page scroll : " + window.scrollY + "/" + winScrollMaxY + "px";
};
window.addEventListener("scroll", MYAPP.PageScroll, false);

MYAPP.StickyHeader = function () {
    var _element = document.querySelector("[data-js-hook='sticky-header']");
    if (_element.clientHeight < window.scrollY) {
        return _element.classList.add("is_fixed");
    } else {
        return _element.classList.remove("is_fixed");
    }
};
window.addEventListener("scroll", MYAPP.StickyHeader, false);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// export default class Cookie {
//     setCookie(name, value, expires, domain, path) {
//         var _cookieData = "";
//         // add each arguments
//         _cookieData += name + "=" + encodeURIComponent(value) + "; domain=" + domain + "; path=" + path;
//         if(expires) {
//             var _exp = new Date();
//             _exp.setDate(_exp.getDate() + expires);
//             _cookieData += "; expires=" + _exp.toGMTString();
//         }
//         // console.log("_cookieData=" + _cookieData);
//         document.cookie = _cookieData;
//     }

//     getCookie(name) {
//         var _cList = document.cookie.replace(/\s+/g, "").split(";"); // and delete Half-width spaces
//         for (var i = 0; i < _cList.length; i++) {
//             var _cName = _cList[i].split("=");
//             // back value with decode
//             if(_cName[0] == name) {
//                 return decodeURIComponent(_cName[1]);
//             }
//         }
//         return null; // if not found name
//     }
// }


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MYAPP = MYAPP || {};

MYAPP.Cookie = {
    setCookie: function setCookie(name, value, expires, domain, path) {
        var _cookieData = "";
        // add each arguments
        _cookieData += name + "=" + encodeURIComponent(value) + "; domain=" + domain + "; path=" + path;
        if (expires) {
            var _exp = new Date();
            _exp.setDate(_exp.getDate() + expires);
            _cookieData += "; expires=" + _exp.toGMTString();
        }
        // console.log("_cookieData=" + _cookieData);
        document.cookie = _cookieData;
    },
    getCookie: function getCookie(name) {
        var _cList = document.cookie.replace(/\s+/g, "").split(";"); // and delete Half-width spaces
        for (var i = 0; i < _cList.length; i++) {
            var _cName = _cList[i].split("=");
            // back value with decode
            if (_cName[0] == name) {
                return decodeURIComponent(_cName[1]);
            }
        }
        return null; // if not found name
    }
};

MYAPP.Tab = function () {

    var _tab_element = document.querySelector("[data-js-hook='tab']");
    var _tab_nav_list = _tab_element.querySelectorAll("[data-js-tab-nav]");
    var _tab_content_list = _tab_element.querySelectorAll("[data-js-tab-content]");

    var _savedActiveTabNumber = MYAPP.Cookie.getCookie("myComponentTabNumber"); //get cookie and active the tab
    tabClick(_tab_element.querySelector("[data-js-tab-nav='" + _savedActiveTabNumber + "']"));

    function tabClick(elm) {
        var _thisTab;
        if (elm instanceof HTMLElement) {
            _thisTab = elm;
        } else if (elm === null) {
            return;
        } else {
            _thisTab = elm.target;
        }
        var _thisTabNumber = _thisTab.getAttribute("data-js-tab-nav");
        var _thisTabContent = _tab_element.querySelector("[data-js-tab-content='" + _thisTabNumber + "']");

        // if the tab has .is_active, remove roop
        for (var i = 0; i < _tab_nav_list.length; i++) {
            if (_tab_nav_list[i].classList.contains("is_active")) {
                _tab_nav_list[i].classList.remove("is_active");
            }
        }
        // if the content has .is_active, remove roop
        for (var j = 0; j < _tab_content_list.length; j++) {
            if (_tab_content_list[j].classList.contains("is_active")) {
                _tab_content_list[j].classList.remove("is_active");
            }
        }

        _thisTab.classList.add("is_active");
        _thisTabContent.classList.add("is_active");
        MYAPP.Cookie.setCookie("myComponentTabNumber", _thisTabNumber, 90, "localhost", "/"); // cookie name and tab num, keep dates
    }

    // Each tabs addEventListener
    for (var k = 0; k < _tab_nav_list.length; k++) {
        // console.log(_tab_nav_list[k]);
        _tab_nav_list[k].addEventListener("click", tabClick, false);
    }
}();

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map