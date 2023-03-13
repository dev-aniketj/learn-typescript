"use strict";
class User {
    addData(user) {
        return `${user} is added`;
    }
}
let user1 = new User();
let result = user1.addData("Aniket");
console.log(result);
