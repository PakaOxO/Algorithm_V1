// const [N, M] = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split(" ").map(Number);
const [N, M] = [3, 3];

function solution(n, m) {
    let answer = "";
    const result = [];
    dfs(0);

    function dfs(start) {
        if (result.length === m) {
            answer += `${result.join(" ")}\n`;
            return;
        }

        for (let i=start; i<n; i++) {
            result.push(i+1);
            dfs(i);
            result.pop();
        }
    }
    return answer;
}

console.log(solution(N, M));