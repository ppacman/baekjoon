const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

const Number = +input[0];
let answer = "";
for (i = 1; i <= Number; i++) {
  answer += +input[i].split(" ")[0] + +input[i].split(" ")[1] + "\n";
}
console.log(answer);
