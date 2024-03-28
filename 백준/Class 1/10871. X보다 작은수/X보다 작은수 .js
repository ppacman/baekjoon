const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

const standard = +input[0].split(" ")[1];

const list = input[1].split(" ");

const result = list.filter((number) => number < standard);
console.log(result.join(" "));
