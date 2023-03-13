class User {
  private name: string = "";
  private email: string = "";
  private age: number = 0;

  setName(name: string) {
    this.name = name;
  }
  setEmail(email: string) {
    this.email = email;
  }
  setAge(age: number) {
    this.age = age;
  }

  printUserData() {
    console.log(
      `Name of the Person is ${this.name}.\nEmail of the Person is ${this.email}\nAge of the Person is ${this.age}`
    );
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
