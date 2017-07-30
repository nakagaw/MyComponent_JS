

// var testXXX = function () {
//     return alert("Hello world XXX");
// };
// document.addEventListener( "DOMContentLoaded", testXXX, false);

// function testZZZ() {
//     return alert("Hello world ZZZ");
// }
// document.addEventListener( "DOMContentLoaded", testZZZ, false);

// クロージャを利用した外部から見えない名前空間
// var obj = (function() {
//     // 関数の外部かららこの名前にアクセスできない
//     // 事実上、プライベートな変数
//     // 通常、関数の呼び出しが終わればアクセスできない名前だが、返り値の無名関数の中から使える
//     var position = { x : 2 , y : 3 , };

//     // 関数の外部からアクセスできないプライベート関数
//     // 名前をsumにしても問題ないが、余計な混乱を避けるため別名
//     function sum_internal(a,b) {
//         return Number(a) + Number(b);
//     }

//     // 上記2つの名前を強引に使うだけの憑依的な返り値
//     return {
//         sum : function(a,b) { return sum_internal(a,b); },
//         x : position.x,
//     };
// })();
// console.log(obj.sum(3, 4));
// console.log(obj.x);
// var MYAPP = "test";

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


// // プロトタイプ継承の見本
// var Quo = function(string) {
//     this.status = string;
// };
// Quo.prototype.get_status = function() {
//     return this.status;
// };
// var myQuo = new Quo("confused");
// document.getElementById("test").innerHTML = myQuo.get_status();


// var myObject = {
//     myProperty: "Hello!!",
//     myMethod: function() {
//         var that = this; // that で this = myObject への参照を保持
//         var myMethod2 = function() {
//             console.log(that.myProperty); // 出力： "Hello!!"
//             console.log(this); // 出力： undefined（ES5以前はバグで window）
//             var myMethod3 = function() {
//                 console.log(this); // 出力： undefined（ES5以前はバグで window）
//             }();
//         }();
//     }
// };
// myObject.myMethod();

