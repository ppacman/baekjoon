const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

let Total = 0;

for (i = 0; i < input.length; i++) {
  if (input[i] < 40) {
    Total += 40;
  } else {
    Total += +input[i];
  }
}
const Average = Math.floor(Total / input.length);

console.log(Average);
