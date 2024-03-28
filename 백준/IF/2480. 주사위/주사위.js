const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString().split(" ");

const [A, B, C] = input.sort((a, b) => a - b);
let price;

if (A === B && B === C) {
  price = A * 1000 + 10000;
} else if (A === B || B === C) {
  price = B * 100 + 1000;
} else {
  price = C * 100;
}

console.log(price);
