const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

const N = +input[0];

for (i = 1; i <= N; i++) {
  const A = +input[i].split(" ")[0];
  const B = +input[i].split(" ")[1];
  console.log(A + B);
}
