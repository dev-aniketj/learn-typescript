"use strict";
function fun1() {
    //   return 100;    // error
    return "hello";
}
console.log(fun1());
function add(n1, n2) {
    return `sum of ${n1 + n2}`;
}
console.log(add(54, 23));
const a = 101;
const b = "aniket";
function returnNum() {
    // return b;   // error
    return a;
}
console.log("returnNum() :", returnNum());
