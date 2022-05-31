const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

let result = "";
for (let i=0; i<input.length; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    
    if (a === 0 && b === 0) break;
    if (a > b) {
        a % b === 0 ? result += "multiple\n" : result += "neither\n";
    } else {
        b % a === 0 ? result += "factor\n" : result += "neither\n";
    }
}
console.log(result);