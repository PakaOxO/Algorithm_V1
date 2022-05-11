const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
input.shift();

const users = input.map(a => a.split(" "));

users.sort((a, b) => {return parseInt(a[0]) - parseInt(b[0]);})
console.log(users.map(a => a.join(" ")).join("\n"));