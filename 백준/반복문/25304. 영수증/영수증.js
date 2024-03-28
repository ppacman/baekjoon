const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

const N = +input[1];
let Total = 0;
for (i = 2; i <= N + 1; i++) {
  Total += +input[i].split(" ")[0] * +input[i].split(" ")[1];
}

if (+input[0] === Total) {
  console.log("Yes");
} else {
  console.log("No");
}
