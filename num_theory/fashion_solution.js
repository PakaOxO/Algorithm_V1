const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

function solution(input) {
    const q_cnt = input.shift();
    let idx = 0;
    let answer = [];
    for (let i=0; i<q_cnt; i++) {
        const cnt = +input[idx++];
        const map = new Map();
        let result = 1;

        for (let j=0; j<cnt; j++) {
            const [_, type] = input[idx++].split(' ');

            if (map.get(type) !== undefined) map.set(type, map.get(type)+1);
            else map.set(type, 1);
        }

        for (let type of map.keys()) {
            result *= (map.get(type) + 1);
        }
        answer.push(result - 1);
    }
    return answer;
}

console.log(solution(input));