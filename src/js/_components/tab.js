var MYAPP = MYAPP || {};

MYAPP.Cookie = {
    setCookie(name, value, expires, domain, path) {
        var _cookieData = "";
        // add each arguments
        _cookieData += name + "=" + encodeURIComponent(value) + "; domain=" + domain + "; path=" + path;
        if(expires) {
            var _exp = new Date();
            _exp.setDate(_exp.getDate() + expires);
            _cookieData += "; expires=" + _exp.toGMTString();
        }
        // console.log("_cookieData=" + _cookieData);
        document.cookie = _cookieData;
    },
    getCookie(name) {
        var _cList = document.cookie.replace(/\s+/g, "").split(";"); // and delete Half-width spaces
        for (var i = 0; i < _cList.length; i++) {
            var _cName = _cList[i].split("=");
            // back value with decode
            if(_cName[0] == name) {
                return decodeURIComponent(_cName[1]);
            }
        }
        return null; // if not found name
    }
};

MYAPP.Tab = (function () {

    var _tab_element = document.querySelector("[data-js-hook='tab']");
    var _tab_nav_list = _tab_element.querySelectorAll("[data-js-tab-nav]");
    var _tab_content_list = _tab_element.querySelectorAll("[data-js-tab-content]");

    var _savedActiveTabNumber = MYAPP.Cookie.getCookie("myComponentTabNumber"); //get cookie and active the tab
    tabClick(_tab_element.querySelector("[data-js-tab-nav='" + _savedActiveTabNumber + "']"));

    function tabClick(elm) {
        var _thisTab;
        if( elm instanceof HTMLElement ) {
            _thisTab = elm;
        } else if( elm === null ) {
            return;
        } else {
            _thisTab = elm.target;
        }
        var _thisTabNumber = _thisTab.getAttribute("data-js-tab-nav");
        var _thisTabContent = _tab_element.querySelector("[data-js-tab-content='" + _thisTabNumber + "']");

        // if the tab has .is_active, remove roop
        for (var i = 0; i < _tab_nav_list.length; i++) {
            if(_tab_nav_list[i].classList.contains("is_active")) {
                _tab_nav_list[i].classList.remove("is_active");
            }
        }
        // if the content has .is_active, remove roop
        for (var j = 0; j < _tab_content_list.length; j++) {
            if(_tab_content_list[j].classList.contains("is_active")) {
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
}());