
export default class Cookie {

    static set(name, value, expires, domain, path) {
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
    }

    static get(name) {
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
}

// export const Cookie = {
//     set: function(name, value, expires, domain, path) {
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
//     },
//     get: function(name) {
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
// };


