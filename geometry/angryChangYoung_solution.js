const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [ N, W, H ] = input[0].split(" ").map(Number);
const digonal_len = Math.sqrt(W*W + H*H);

let answer = "";
for (let i=1; i<=N; i++) {
    if (parseInt(input[i]) <= digonal_len) answer += "DA\n";
    else answer += "NE\n";
}

console.log(answer);