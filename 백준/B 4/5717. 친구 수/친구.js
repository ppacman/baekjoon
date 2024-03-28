const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

for (i = 0; i < input.length; i++) {
  line = input[i];
  if (line === "0 0") {
    return;
  }
  console.log(+input[i].split(" ")[0] + +input[i].split(" ")[1]);
}
