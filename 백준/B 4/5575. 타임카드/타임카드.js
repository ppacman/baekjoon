const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath, "utf8").toString().split("\n");

const result = [];

for (let i = 0; i < input.length; i++) {
  const startH = +input[i].split(" ")[0];
  const startM = +input[i].split(" ")[1];
  const startS = +input[i].split(" ")[2];
  const endH = +input[i].split(" ")[3];
  const endM = +input[i].split(" ")[4];
  const endS = +input[i].split(" ")[5];
  const startTimeInSeconds = startH * 3600 + startM * 60 + startS;
  const endTimeInSeconds = endH * 3600 + endM * 60 + endS;

  let workTimeInSeconds = endTimeInSeconds - startTimeInSeconds;

  const hours = Math.floor(workTimeInSeconds / 3600);
  workTimeInSeconds %= 3600;
  const minutes = Math.floor(workTimeInSeconds / 60);
  const seconds = workTimeInSeconds % 60;

  result.push([+hours, +minutes, +seconds]);
}

for (const time of result) {
  console.log(time.join(" "));
}
