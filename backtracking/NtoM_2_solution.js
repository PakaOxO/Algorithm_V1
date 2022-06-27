const [N, M] = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split(" ").map(Number);

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
            if (result.indexOf(i+1) === -1) {
                result.push(i+1);
                dfs(i + 1);
                result.pop();
            }
        }
    }
    return answer;
}

console.log(solution(N, M));