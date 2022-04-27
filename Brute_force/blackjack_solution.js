const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin", "utf-8").trim());

let process = [];
let cnt = 0;
function hanoi(n, from, via, to) {
    if (n == 1) {
        move(1, from, to);
    } else {
        hanoi(n - 1, from, to, via);
        move(n, from, to);
        hanoi(n - 1, via, from, to);
    }
}

function move(n, from, to) {
    process.push(`${from} ${to}`);
    cnt++;
}

function solution(n) {
    let result = "";
    hanoi(n, 1, 2, 3);
    
    result += `${cnt}\n`;
    for (let i=0; i<cnt; i++) {
        result += `${process[i]}\n`;
    }
    return result;
}

console.log(solution(N));