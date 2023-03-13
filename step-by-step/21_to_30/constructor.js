var Person = /** @class */ (function () {
    function Person(userName, userEmail, userAge) {
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
    Person.prototype.printUserDetails = function () {
        console.log("\nMy name is ".concat(this.name));
        console.log("My email is ".concat(this.email));
        console.log("My age is ".concat(this.age));
    };
    return Person;
}());
var obj1 = new Person();
obj1.printUserDetails();
var obj2 = new Person("Aniket");
obj2.printUserDetails();
var obj3 = new Person("Ayush", "ayush@gmail.com");
obj3.printUserDetails();
var obj4 = new Person("Mohit", "mohit@gmail.com", 21);
obj4.printUserDetails();
