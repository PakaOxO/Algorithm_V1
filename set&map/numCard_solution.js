const [ N, arr1, M, arr2 ] = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const cards = arr1.split(" ").map(Number);
cards.sort((a, b) => {return a - b});
const input = arr2.split(" ").map(Number);

const result = [];
let mid = Math.floor(N / 2);

function binarySearch(target, data, min, max) {
    if (min > max) {
        result.push(0);
        return;
    }
    const mid = Math.floor((max + min) / 2);
    
    if (target === data[mid]) {
        result.push(1);
        return;
    } else {
        if (target > data[mid]) {
            binarySearch(target, data, mid+1, max);
        } else {
            binarySearch(target, data, min, mid-1);
        }
    }
}

for (let i=0; i<M; i++) {
    binarySearch(input[i], cards, 0, N-1);
}

console.log(result.join(" "));
