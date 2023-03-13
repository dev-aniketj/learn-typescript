"use strict";
class Person {
    constructor(userName, userEmail, userAge) {
        this.name = "";
        this.email = "";
        this.age = 0;
        if (userName != null) {
            this.name = userName;
        }
        if (userEmail != null) {
            this.email = userEmail;
        }
        if (userAge != null) {
            this.age = userAge;
        }
    }
    printUserDetails() {
        console.log(`\nMy name is ${this.name}`);
        console.log(`My email is ${this.email}`);
        console.log(`My age is ${this.age}`);
    }
}
const obj1 = new Person();
obj1.printUserDetails();
const obj2 = new Person("Aniket");
obj2.printUserDetails();
const obj3 = new Person("Ayush", "ayush@gmail.com");
obj3.printUserDetails();
const obj4 = new Person("Mohit", "mohit@gmail.com", 21);
obj4.printUserDetails();
