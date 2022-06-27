// const [N, M] = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split(" ").map(Number);
const [N, M] = [4, 2];

function solution(n, m) {
    let answer = "";
    const result = [];
    dfs();

    function dfs() {
        if (result.length === m) {
            answer += `${result.join(" ")}\n`;
            return;
        }

        for (let i=0; i<n; i++) {
            result.push(i+1);
            dfs();
            result.pop();
        }
    }
    return answer;
}

console.log(solution(N, M));