let value: "abc" | 123;

// value= 'xyz'    // error
// it can only take either 'abc' or 123

value = 123;
console.log(value);

value = "abc";
console.log(value);
