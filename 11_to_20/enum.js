"use strict";
var Languages;
(function (Languages) {
    Languages[Languages["C"] = 0] = "C";
    Languages[Languages["C++"] = 1] = "C++";
    Languages[Languages["Java"] = 2] = "Java";
    Languages[Languages["PHP"] = 3] = "PHP";
    Languages[Languages["JS"] = 4] = "JS";
    Languages[Languages["Python"] = 5] = "Python";
})(Languages || (Languages = {}));
console.log(Languages);
console.log(Languages.Java); // 2
console.log(Languages[0]); //C
console.log(Languages[4]); //JS
