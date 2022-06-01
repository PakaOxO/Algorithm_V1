const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const arr = input[1].split(" ");
arr.sort((a, b) => {return a - b});

console.log(arr[0]*arr[arr.length-1]);