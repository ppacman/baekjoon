const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString().split(" ");

const YEAR = +input[0];

if (YEAR % 4 === 0) {
  if (YEAR % 100 !== 0 || YEAR % 400 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
} else console.log(0);
