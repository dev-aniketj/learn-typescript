"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.helloWorld = function () {
        console.warn("Hello World");
    };
    App.prototype.userName = function () {
        console.warn("My name is Aniket Jain.");
        console.warn("I am new in typescript.");
    };
    return App;
}());
// creating instance of the App class.
var obj = new App();
obj.helloWorld();
obj.userName();
