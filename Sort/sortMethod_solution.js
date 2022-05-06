let input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("").sort((a, b) => {return b - a});

console.log(input.join(""));