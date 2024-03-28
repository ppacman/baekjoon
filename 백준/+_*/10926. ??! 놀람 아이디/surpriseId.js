const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString().trim();

console.log(`${input}??1`);
