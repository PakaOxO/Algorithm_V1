const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();
let arr = input.split("\n").map(Number);
arr.shift()
arr.sort((a, b) => {return a - b});

console.log(arr.join("\n"));