class Base {
  addTwoNumbers(num1: number, num2: number) {
    console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
  }
}
class Derived extends Base {}

const der1 = new Derived();
der1.addTwoNumbers(15, 22);
