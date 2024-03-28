const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

console.log(Math.max(...input));
for (i = 0; i < input.length; i++) {
  if (+input[i] === Math.max(...input)) {
    console.log(i + 1);
  }
}
