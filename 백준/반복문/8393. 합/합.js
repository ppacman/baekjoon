const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString();
let Total = 0;
for (i = 1; i <= +input; i++) {
  Total += i;
}
console.log(Total);
