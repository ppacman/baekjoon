const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

const Try = +input[0];

for (i = 1; i <= Try; i++) {
  +input[i].split(" ")[0];
  console.log(
    `Case #${i}: ${+input[i].split(" ")[0] + +input[i].split(" ")[1]}`
  );
}
