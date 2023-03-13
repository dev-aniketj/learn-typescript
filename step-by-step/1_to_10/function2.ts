function checkType(num1: number, num2: number) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    console.log("Both are numbers");
  } else {
    console.log(new Error("values are not numbers"));
  }
}

checkType(10, "20");
checkType(10, 321.1223);
