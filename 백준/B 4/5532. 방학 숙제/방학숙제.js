const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

const A = Math.ceil(+input[1] / +input[3]);
const B = Math.ceil(+input[2] / +input[4]);

if (A > B) {
  console.log(+input[0] - A);
} else {
  console.log(+input[0] - B);
}
