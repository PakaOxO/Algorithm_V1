const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();
const N = input.length;

const mySet = new Set();
for (let left=0; left<N; left++) {
    let right = left;
    while (right < N) {
        const word = input.slice(left, right+1);
        if (!mySet.has(word)) {
            mySet.add(word);
        }
        right++;
    }
}

console.log(mySet.size);