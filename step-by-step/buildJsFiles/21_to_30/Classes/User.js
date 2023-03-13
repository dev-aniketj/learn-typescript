"use strict";
class User {
    constructor() {
        this.name = "";
        this.email = "";
        this.age = 0;
    }
    setName(name) {
        this.name = name;
    }
    setEmail(email) {
        this.email = email;
    }
    setAge(age) {
        this.age = age;
    }
    printUserData() {
        console.log(`Name of the Person is ${this.name}.\nEmail of the Person is ${this.email}\nAge of the Person is ${this.age}`);
    }
}
// const user1 = new User();
// user1.name = "Aniket";
// user1.email = "aniket@gmail.com";
// user1.age = 23;
// user1.printUserData();
const user2 = new User();
user2.setName("Aniket");
user2.setEmail("aniket@gmail.com");
user2.setAge(23);
user2.printUserData();
