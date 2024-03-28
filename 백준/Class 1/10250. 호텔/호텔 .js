const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

const T = +input[0];
let floor, room, customer;
for (i = 1; i < T + 1; i++) {
  floor = +input[i].split(" ")[0];
  customer = +input[i].split(" ")[2];
  let A = customer % floor.toString();
  let B = Math.ceil(customer / floor).toString();
  if (A == "0") {
    A = floor;
  }
  if (B < 10) {
    B = "0" + B;
  }
  console.log(+(A + B));
}
