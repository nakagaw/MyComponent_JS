webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

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


var _cookie = __webpack_require__(4);

(function () {

    var _tab_element = document.querySelector("[data-js-hook='tab']");
    var _tab_nav_list = _tab_element.querySelectorAll("[data-js-tab-nav]");
    var _tab_content_list = _tab_element.querySelectorAll("[data-js-tab-content]");

    var _savedActiveTabNumber = _cookie.Cookie.get("myComponentTabNumber"); //get cookie and active the tab
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
        return _cookie.Cookie.set("myComponentTabNumber", _thisTabNumber, 90, "localhost", "/"); // cookie name and tab num, keep dates
    }

    // Each tabs addEventListener
    for (var k = 0; k < _tab_nav_list.length; k++) {
        // console.log(_tab_nav_list[k]);
        _tab_nav_list[k].addEventListener("click", tabClick, false);
    }
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Cookie = exports.Cookie = {
    set: function set(name, value, expires, domain, path) {
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
    get: function get(name) {
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

/***/ })
],[0]);
//# sourceMappingURL=app.bundle.js.map