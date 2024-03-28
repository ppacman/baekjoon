const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString().split(" ");

let H = +input[0];
let M = +input[1];

if (M - 45 < 0) {
  M = 60 + (M - 45);
  H = H - 1;

  if (H < 0) {
    H = 23;
  }
} else {
  M = M - 45;
}
console.log(H, M);
