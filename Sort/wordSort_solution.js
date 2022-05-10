const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const N = parseInt(input.shift());

input.sort((a, b) => {
    if (a.length == b.length) {
        return a >= b ? 1 : -1;
    } else {
        return a.length - b.length;
    }
});

const result = [...new Set(input)];
console.log(result.join("\n"));