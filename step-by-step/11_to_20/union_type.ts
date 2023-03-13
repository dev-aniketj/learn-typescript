let data: number | string;

// data = true  // error bcoz of boolean
data = 123456;
console.log(data);

data = "aniket";
console.log(data);

function combine(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(combine(10, 20));
console.log(combine("aniket", "jain"));
