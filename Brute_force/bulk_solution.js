const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n").map((e, i) => {
    if (i !== 0) return e.split(" ").map(Number);
});
const N = input.length-1;
let rank = new Array(N).fill(1);

for (let i=1; i<=N; i++) {
    for (let j=1; j<=N; j++) {
        if (i == j) continue;
        if (input[j][0] < input[i][0] && input[j][1] < input[i][1]) rank[j-1]++;
    }
}
console.log(rank.join(" "));