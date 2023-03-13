function add(n1: number, n2: number) {
  return n1 + n2;
}
function mul(n1: number, n2: number) {
  return n1 * n2;
}
function msg(s1: string) {
  console.log(s1);
}

console.warn(add(10, 20));
console.warn(mul(4, 2.4123));
msg("Today, I am learning new language, TypeScript.");
