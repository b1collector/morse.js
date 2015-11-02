//var b = require("bonescript");
var promise = require("bluebird");
var morse = require("./morse.js");

var unitTime = 2000;
var pin = "P8_10";
//b.pinMode(pin, b.OUTPUT);

var dot = function () {
//    b.digitalWrite(pin, 1);
console.log(".")
    return promise.delay(unitTime);
};

var dash = function () {
//    b.digitalWrite(pin, 1);
console.log("_");
    return promise.delay(unitTime * 3);
};

var interElementGap = function () {
//    b.digitalWrite(pin, 0);
console.log(" ");
    return promise.delay(unitTime);
};

var shortGap = function () {
//    b.digitialWrite(pin, 0);
console.log("   ");
    return promise.delay(unitTime * 3)
};

var mediumGap = function () {
//   b.digitalWrite(pin, 0);
console.log("       ");
   return promise.delay(unitTime * 7);
};

promise.each(morse.toMorse(dot, dash, interElementGap, shortGap, mediumGap, "a"), function (f) { return f();});

