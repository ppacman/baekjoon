const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString().split(" ");

const T = +input / 4;

let String = "long int";
for (i = 1; i < T; i++) {
  String = "long " + String;
}
console.log(String);
