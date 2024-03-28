const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

const Number = +input[0];

for (k = 1; k <= Number; k++) {
  let Total = 0;
  const A = input[k].split("X").filter((value) => value);
  for (i = 0; i < A.length; i++) {
    const B = A[i].length;

    for (j = 1; j <= B; j++) {
      Total += j;
    }
  }
  console.log(Total);
}
