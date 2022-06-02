const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split(" ");
const [a, b] = [parseInt(input[0]), parseInt(input[1])];

function getGCD(a, b) {
    if (b === 0) return a;
    else return getGCD(b, a % b);
}

const gcd = getGCD(a, b);
const lcm = a * b / gcd;
ß
console.log(`${gcd}\n${lcm}`);
