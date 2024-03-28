const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

const Age = 17;
const Weight = 80;

for (i = 0; i < input.length; i++) {
  const line = input[i];
  if (line == "# 0 0") {
    break;
  }
  const [name, age, weight] = line.split(" ");
  if (+age > Age || +weight >= Weight) {
    console.log(`${name} Senior`);
  } else {
    console.log(`${name} Junior`);
  }
}
