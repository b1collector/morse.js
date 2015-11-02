// morse.js
// ========

var _ = require("lodash");

module.exports = {
    toMorse: toMorse    
};

// a -> a -> a -> b -> [a]
function toMorse(dot, dash, interElementGap, shortGap, mediumGap, str) {
    var letterLookup = {
        "a":[dot, interElementGap, dash, shortGap],
        "b":[dash, interElementGap, dot, interElementGap, dot, interElementGap, dot, shortGap],
        "c":[dash, interElementGap, dot, interElementGap, dash, interElementGap, dot, shortGap],
        "d":[dash, interElementGap, dot, interElementGap, dot, shortGap],
        "e":[dot, shortGap],
        "f":[dot, interElementGap, dot, interElementGap, dash, interElementGap, dot, shortGap],
        "g":[dash, interElementGap, dash, interElementGap, dot, shortGap],
        "h":[dot, interElementGap, dot, interElementGap, dot, interElementGap, dot, shortGap],
        "i":[dot, interElementGap, dot, shortGap],
        "j":[dot, interElementGap, dash, interElementGap, dash, interElementGap, dash, shortGap],
        "k":[dash, interElementGap, dot, interElementGap, dash, shortGap],
        "l":[dot, interElementGap, dash, interElementGap, dot, interElementGap, dot, shortGap],
        "m":[dash, interElementGap, dash, shortGap],
        "n":[dash, interElementGap, dot, shortGap],
        "o":[dash, interElementGap, dash, interElementGap, dash, shortGap],
        "p":[dot, interElementGap, dash, interElementGap, dash, interElementGap, dot, shortGap],
        "q":[dash, interElementGap, dash, interElementGap, dot, interElementGap, dash, shortGap],
        "r":[dot, interElementGap, dash, interElementGap, dot, shortGap],
        "s":[dot, interElementGap, dot, interElementGap, dot, shortGap],
        "t":[dash, shortGap],
        "u":[dot, interElementGap, dot, interElementGap, dash, shortGap],
        "v":[dot, interElementGap, dot, interElementGap, dot, interElementGap, dash, shortGap],
        "w":[dot, interElementGap, dash, interElementGap, dash, shortGap],
        "x":[dash, interElementGap, dot, interElementGap, dot, interElementGap, dash, shortGap],
        "y":[dash, interElementGap, dot, interElementGap, dash, interElementGap, dash, shortGap],
        "z":[dash, interElementGap, dash, interElementGap, dot, interElementGap, dot, shortGap],
        "1":[dot, interElementGap, dash, interElementGap, dash, interElementGap, dash, interElementGap, dash, shortGap],
        "2":[dot, interElementGap, dot, interElementGap, dash, interElementGap, dash, interElementGap, dash, shortGap],
        "3":[dot, interElementGap, dot, interElementGap, dot, interElementGap, dash, interElementGap, dash, shortGap],
        "4":[dot, interElementGap, dot, interElementGap, dot, interElementGap, dot, interElementGap, dash, shortGap],
        "5":[dot, interElementGap, dot, interElementGap, dot, interElementGap, dot ,dot, shortGap],
        "6":[dash, interElementGap, dot, interElementGap, dot, interElementGap, dot, interElementGap, dot, shortGap],
        "7":[dash, interElementGap, dash, interElementGap, dot, interElementGap, dot, interElementGap, dot, shortGap],
        "8":[dash, interElementGap, dash, interElementGap, dash, interElementGap, dot, interElementGap, dot, shortGap],
        "9":[dash, interElementGap, dash, interElementGap, dash, interElementGap, dash, interElementGap, dot, shortGap],
        "0":[dash, interElementGap, dash, interElementGap, dash, interElementGap, dash, interElementGap, dash, shortGap],
        " ":[mediumGap]
    };

    return _(str)
       .map(function (val) { console.log(val); return val })
       .map(function (val) { return letterLookup[val.toLowerCase()]; })
       .map(function (val) { console.log(val); return val })
       .flattenDeep()
       .map(function (val) { console.log(val); return val })
       .value();
}

