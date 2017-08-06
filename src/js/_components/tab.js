import Cookie from "./cookie.js";

(function () {
    var _tabs = document.querySelectorAll("[data-js-tab]");
    for (var h = 1; h <= _tabs.length; h++) {
        var _tab_element_number = "[data-js-tab='" + h + "']";
        CookieTab(_tab_element_number, h);
    }
}());

function CookieTab(tabElm, tabNum) {
    var _tab_element = document.querySelector(tabElm);
    var _tab_nav_list = _tab_element.querySelectorAll("[data-js-tab-nav]");
    var _tab_content_list = _tab_element.querySelectorAll("[data-js-tab-content]");

    var _saved_active_tab_number = Cookie.get("myComponentTabNumber_" + tabNum); //get cookie and active the tab
    tabClick(_tab_element.querySelector("[data-js-tab-nav='" + _saved_active_tab_number + "']"));

    function tabClick(elm) {
        var _this_tab;
        if( elm instanceof HTMLElement ) {
            _this_tab = elm;
        } else if( elm === null ) {
            return;
        } else {
            _this_tab = elm.target;
        }
        var _this_tab_number = _this_tab.getAttribute("data-js-tab-nav");
        var _this_tab_content = _tab_element.querySelector("[data-js-tab-content='" + _this_tab_number + "']");

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

        _this_tab.classList.add("is_active");
        _this_tab_content.classList.add("is_active");
        return Cookie.set("myComponentTabNumber_" + tabNum, _this_tab_number, 90, "localhost", "/"); // cookie name and tab num, keep dates
    }

    // Each tabs addEventListener
    for (var k = 0; k < _tab_nav_list.length; k++) {
        // console.log(_tab_nav_list[k]);
        _tab_nav_list[k].addEventListener("click", tabClick, false);
    }
}