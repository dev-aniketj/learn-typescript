// function tryReturn() {
//   console.log("never return anything");
//   return true;
// }

// tryReturn();

function apiError(msg: string, code: number): never {
  throw { message: msg, status: code };
}

console.log(apiError("server side error", 502));
