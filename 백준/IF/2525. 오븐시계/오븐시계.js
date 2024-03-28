const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

let A = +input[0].split(" ")[0];
let B = +input[0].split(" ")[1];
const T = +input[1];

let H = Math.floor((60 * A + B + T) / 60);
let M = (A * 60 + B + T) % 60;
if (H >= 24) {
  H = H - 24;
}

console.log(H, M);
