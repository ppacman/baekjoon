const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

const A = +input[0];
const B = input[1].split("");
let S = 0;
for (i = 0; i < A; i++) {
  S += parseInt(B[i]);
}

console.log(S);
