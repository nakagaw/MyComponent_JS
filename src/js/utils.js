var MYAPP = MYAPP || {};


MYAPP.StickyHeader = function () {
    var _element = document.querySelector("[data-js-hook='sticky-header']");
    if (_element.clientHeight < window.scrollY) {
        return _element.classList.add("is_fixed");
    } else {
        return _element.classList.remove("is_fixed");
    }
};
window.addEventListener( "scroll", MYAPP.StickyHeader, false);

MYAPP.Tooltip = (function () {

    var resizeTimer;
    // 既に resizeTimer が動作していたら clear
    if (resizeTimer !== undefined) {
        clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(function () {
        function replaceTooltip(elm) {
            var _tooltip = elm.currentTarget;
            var _element = _tooltip.getElementsByClassName("tooltip__text")[0];
            var _windowInnerWidth = document.body.clientWidth; // El. width minus scrollbar width
            var _elementRect = _element.getBoundingClientRect();
            var _elementWidth = _elementRect.width;
            var _elementL = _elementRect.left;
            var _elementR = _elementRect.right;
            // var _elementT = _elementRect.top;
            // var _elementHeight = _elementRect.height;
            console.log("_elementWidth : " + _elementWidth);
            console.log("_elementL : " + _elementL);
            console.log("_elementR : " + _elementR);
            console.log("_windowInnerWidth : " + _windowInnerWidth);
            console.count("count");

            if (_windowInnerWidth < _elementR) {
                 _element.classList.add("is_left");
            } else if(_windowInnerWidth - _elementWidth < _elementWidth){
                _element.classList.add("is_centered");
            } else {
                _element.classList.remove("is_centered");
                _element.classList.remove("is_left");
                if (_elementL < 0) {
                     _element.classList.add("is_centered");
                } else {
                    _element.classList.remove("is_centered");
                }
            }
        }

        // Each tooltip addEventListener
        var _all_tooltips = getElements("tooltip");
        for (var t = 0; t < _all_tooltips.length; t++) {
            // console.log(_all_tooltips[t]);
            _all_tooltips[t].addEventListener("mouseover", replaceTooltip, false);
        }
    }, 3000);
}());

// DOM のメモ化
function getElements(name) {
    if(!getElements.cache) getElements.cache = {};
    return getElements.cache[name] = getElements.cache[name] || document.getElementsByClassName(name);
}

// アサートテスト
function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("test-results").appendChild(li);
}





// get values
MYAPP.ConsoleTip = (function () {
    var _headerHiehgt = document.querySelector("[data-js-hook='sticky-header']").clientHeight;
    document.querySelector("[data-js-element='console-tip']").setAttribute("style", "margin-top:" + _headerHiehgt + "px");
}());

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
window.addEventListener( "scroll", MYAPP.PageScroll, false);



