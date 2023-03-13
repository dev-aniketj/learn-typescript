class User {
  name: string = "";
  email: string = "";
  age: number = 0;

  printUserData() {
    console.log(
      `Name of the Person is ${this.name}.\nEmail of the Person is ${this.email}\nAge of the Person is ${this.age}`
    );
  }
}

const user1 = new User();
user1.name = "Aniket";
user1.email = "aniket@gmail.com";
user1.age = 23;

user1.printUserData();
