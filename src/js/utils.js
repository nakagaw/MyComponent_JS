var MYAPP = MYAPP || {};

MYAPP.consoleTip = (function () {
    var _headerHiehgt = document.querySelector("[data-js-hook='sticky-header']").clientHeight;
    document.querySelector("[data-js-element='console-tip']").setAttribute("style", "margin-top:" + _headerHiehgt + "px");
}());

MYAPP.windowSize = function () {
    var _target = document.getElementById("window-size");
    _target.innerHTML = "window size : " + window.innerWidth + " px × " + window.innerHeight + " px";
};
MYAPP.windowSize();
window.onresize = MYAPP.windowSize; // （）あるとリアルタイムじゃない

MYAPP.cursurPoint = function (event) {
    var _moveEvent = event || window.event; // IE対応
    var _target = document.getElementById("cursor-point");
    _target.innerHTML = "pointer : x : " + _moveEvent.clientX + " y : " + _moveEvent.clientY;
};
window.onmousemove = MYAPP.cursurPoint;

MYAPP.pageScroll = function () {
    var _target = document.getElementById("page-scroll");
    var winScrollMaxY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    _target.innerHTML = "page scroll : " + window.scrollY + "/" + winScrollMaxY + "px";
};
window.addEventListener( "scroll", MYAPP.pageScroll, false);

MYAPP.stickyHeader = function () {
    var _element = document.querySelector("[data-js-hook='sticky-header']");
    if (_element.clientHeight < window.scrollY) {
        return _element.classList.add("is_fixed");
    } else {
        return _element.classList.remove("is_fixed");
    }
};
window.addEventListener( "scroll", MYAPP.stickyHeader, false);