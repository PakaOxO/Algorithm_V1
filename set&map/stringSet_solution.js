const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const [ N, M ] = input[0].split(" ").map(Number);

const mySet = new Set();
for (let i=1; i<N+1; i++) {
    mySet.add(input[i]);
}
let cnt = 0;
for (let i=N+1; i<M+N+1; i++) {
    if (mySet.has(input[i])) cnt++;
}

console.log(cnt);