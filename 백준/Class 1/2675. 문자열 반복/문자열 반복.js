const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().split("\n");
for (i = 0; i < input.length; i++) {
  const line = input[i];
  let result = "";
  if (line.split(" ")[1] !== undefined) {
    T = line.split(" ")[0];
    W = line.split(" ")[1].split("");
    for (j = 0; j < W.length; j++) {
      for (k = 0; k < T; k++) {
        result = result + W[j];
      }
    }
    console.log(result);
  }
}
