const person1: { name: string; age: number } = {
  name: "Aniket Jain",
  age: 23,
};

type objectType = { name: string; age: number };
const person2: objectType = {
  name: "Ankit Sharma",
  age: 21,
};

console.log("Person1 Data :", person1);
console.log("Name of person1 :", person1.name);
console.log("Age of person1 :", person1.age);

console.log("\nPerson2 Data :", person2);
console.log("Name of person2 :", person2.name);
console.log("Age of person2 :", person2.age);
