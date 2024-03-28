const fs = require("fs");

let input = fs.readFileSync("./input.txt").toString();

const answer = +input[0];
console.log(answer);

let a = 0;
let b = 0;

const A = fibonacci(30);

console.log(A);
console.log(a, b);
