import {Cookie} from "./cookie.js";

(function () {

    var _tab_element = document.querySelector("[data-js-hook='tab']");
    var _tab_nav_list = _tab_element.querySelectorAll("[data-js-tab-nav]");
    var _tab_content_list = _tab_element.querySelectorAll("[data-js-tab-content]");

    var _savedActiveTabNumber = Cookie.get("myComponentTabNumber"); //get cookie and active the tab
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
        return Cookie.set("myComponentTabNumber", _thisTabNumber, 90, "localhost", "/"); // cookie name and tab num, keep dates
    }

    // Each tabs addEventListener
    for (var k = 0; k < _tab_nav_list.length; k++) {
        // console.log(_tab_nav_list[k]);
        _tab_nav_list[k].addEventListener("click", tabClick, false);
    }
}());