const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [N, M] = [...input[0].split(" ")];
const cards = [...input[1].split(" ")];

let sum_list = [];
for (let i=0; i<N; i++) {
    for (let j=i+1; j<N; j++) {
        for (let k=j+1; k<N; k++) {
            const a = parseInt(cards[i]);
            const b = parseInt(cards[j]);
            const c = parseInt(cards[k]);
            
            if (a+b+c <= M) sum_list.push(a+b+c);
        }
    }
}
console.log(Math.max(...sum_list));