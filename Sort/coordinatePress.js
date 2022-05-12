const [N, input] = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n").map(a => a.split(" "));

const tempArr = input.slice();
const mySet = [...new Set([...tempArr])];
mySet.sort((a, b) => {return a - b});

let answer = "";
const lib = {};
mySet.forEach((val, idx) => lib[val] = idx);

for (let i=0; i<N; i++) {
    answer += `${lib[input[i]]} `;
}


console.log(answer.trim());