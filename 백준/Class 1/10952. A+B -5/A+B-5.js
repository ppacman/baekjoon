let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  if (input[i] == "0 0") {
    return;
  }
  let numbers = input[i].split(" ");
  console.log(Number(numbers[0]) + Number(numbers[1]));
}
