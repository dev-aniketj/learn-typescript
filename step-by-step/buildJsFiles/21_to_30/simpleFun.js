"use strict";
function printMsg(msg) {
    let z = 30;
    let x = 10, y = 20;
    console.log("Sum of x and y is", x + y);
    //   console.log(msg)
}
function apple(data) {
    let num = 30;
    if (data == num) {
        return true;
    }
    else {
        console.info("not return any thing");
        // return false
    }
}
function switchEx(value) {
    switch (value) {
        case "a":
            console.log("apple");
            break;
        case "b":
            console.log("banana");
        //   break;
        default:
            break;
    }
}
printMsg("Hello World");
apple("40");
