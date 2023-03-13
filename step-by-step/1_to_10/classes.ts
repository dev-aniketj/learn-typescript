export {};
class App {
  helloWorld() {
    console.warn("Hello World");
  }
  userName() {
    console.warn("My name is Aniket Jain.");
    console.warn("I am new in typescript.");
  }
}

// creating instance of the App class.
let obj = new App();
obj.helloWorld();
obj.userName();
