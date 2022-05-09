const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const N = parseInt(input[0]);
input.shift();
const coordinates = input.map(a => a.split(" "));

coordinates.sort((a, b) => {
   if (a[1] !== b[1]) {
       return parseInt(a[1]) - parseInt(b[1]);
   } else {
       return parseInt(a[0]) - parseInt(b[0]);
   }
});

const result = coordinates.map(a => a.join(" ")).join("\n");
console.log(result);