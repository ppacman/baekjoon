const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

const A = input[0];
const B = input[1];
const Mi =
  +A.split(" ")[0] + +A.split(" ")[1] + +A.split(" ")[2] + +A.split(" ")[3];
const Ma =
  +B.split(" ")[0] + +B.split(" ")[1] + +B.split(" ")[2] + +B.split(" ")[3];

if (Mi < Ma) {
  console.log(Ma);
} else if (Mi > Ma) {
  console.log(Mi);
} else {
  console.log(Mi);
}
