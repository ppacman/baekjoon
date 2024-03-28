const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

const First = +input[0];
const Second = input[1];
const SecondArr = Second.split("");

console.log(First * +SecondArr[2]);
console.log(First * +SecondArr[1]);
console.log(First * +SecondArr[0]);
console.log(First * +Second);
