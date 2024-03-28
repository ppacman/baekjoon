const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString().split(" ");

const Number = +input[0];

result = "";

for (i = 1; i <= Number; i++) {
  for (j = 1; j <= i; j++) {
    result += "*";
  }
  for (j = Number; j >= i; j--) {}
}

console.log(result);
