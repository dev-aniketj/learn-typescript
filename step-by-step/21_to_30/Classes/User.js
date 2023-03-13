var User = /** @class */ (function () {
    function User() {
        this.name = "";
        this.email = "";
        this.age = 0;
    }
    User.prototype.printUserData = function () {
        console.log("Name of the Person is ".concat(this.name, ".\nEmail of the Person is ").concat(this.email, "\nAge of the Person is ").concat(this.age));
    };
    return User;
}());
var user1 = new User();
user1.name = "Aniket";
user1.email = "aniket@gmail.com";
user1.age = 23;
user1.printUserData();
