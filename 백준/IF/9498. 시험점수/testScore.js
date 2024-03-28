const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString().split(" ");

const SCORE = +input[0];

if (SCORE >= 90) {
  console.log("A");
} else if (SCORE >= 80) {
  console.log("B");
} else if (SCORE >= 70) {
  console.log("C");
} else if (SCORE >= 60) {
  console.log("D");
} else {
  console.log("F");
}
