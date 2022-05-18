const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const [ N, M ] = input[0].split(" ").map(Number);

const data = input.slice(1, N+1);
const questions = input.slice(N+1);

const lib = {};
data.forEach((val, idx) => lib[val] = idx);

let answer = "";
for (let i=0; i<questions.length; i++) {
    if (parseInt(questions[i]) >= 1 || parseInt(questions[i]) < N + 1) {
        answer += data[questions[i] - 1] + "\n";
    } else {
        answer += (lib[questions[i]] + 1) + "\n";
    }
}
console.log(answer);