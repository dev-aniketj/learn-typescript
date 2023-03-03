"use strict";
// function tryReturn() {
//   console.log("never return anything");
//   return true;
// }
// tryReturn();
function apiError(msg, code) {
    throw { message: msg, status: code };
}
console.log(apiError("server side error", 502));
