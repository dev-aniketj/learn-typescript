// void type function
function printData() {
  console.log("hello world");
}
function todayDate() {
  const date = new Date();
  const today =
    date.getDate() +
    "/" +
    date.getMonth() +
    "/" +
    date.getFullYear().toString().slice(-2);
  console.log(today);
}

printData();
todayDate();
