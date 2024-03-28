const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

const A = input[1].split(" ");
const N = input[0];

console.log(Math.min.apply(null, A), Math.max.apply(null, A));
