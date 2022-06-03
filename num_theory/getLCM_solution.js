const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
input.shift();

function getGCD(a, b) {
    if (b === 0) return a;
    else return getGCD(b, a % b);
}

function getLCM(a, b) {
    const gcd = getGCD(a, b);
    return a * b / gcd;
}

let result = "";
for (let i=0; i<input.length; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    result += `${getLCM(a, b)}\n`;
}

console.log(result);