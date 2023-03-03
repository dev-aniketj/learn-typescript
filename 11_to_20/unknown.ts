// any
let data1: any;
data1 = 20;
data1 = "hello";

let n1: string = data1;

// unknown
let data2: unknown;
data2 = true;
data2 = 20;
data2 = "world";

let n2: string = "";
// n2 = data2;
if (typeof data2 === "string") {
  n2 = data2;
}

console.log(n2);
