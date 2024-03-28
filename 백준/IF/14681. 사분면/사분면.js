const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(0).toString().split("\n");

const X = +input[0];
const Y = +input[1];

if (X > 0 && Y > 0) {
  console.log(1);
} else if (X > 0 && Y < 0) {
  console.log(4);
} else if (X < 0 && Y > 0) {
  console.log(2);
} else if (X < 0 && Y < 0) {
  console.log(3);
}
