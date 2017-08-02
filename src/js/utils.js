var MYAPP = MYAPP || {};

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

MYAPP.StickyHeader = function () {
    var _element = document.querySelector("[data-js-hook='sticky-header']");
    if (_element.clientHeight < window.scrollY) {
        return _element.classList.add("is_fixed");
    } else {
        return _element.classList.remove("is_fixed");
    }
};
window.addEventListener( "scroll", MYAPP.StickyHeader, false);