const [N, M] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split(' ');

function solution(n, m) {
    const r = n - m;
    if (m === 0 || r === 0) return 0;

    function divide5(n) {
        let result = 0;
        while (n >= 5) {
            result += Math.floor(n / 5);
            n /= 5;
        }
        return result;
    }

    function divide2(n) {
        let result = 0;
        while (n >= 2) {
            result += Math.floor(n / 2);
            n /= 2;
        }
        return result;
    }

    return Math.min(divide5(n) - (divide5(m) + divide5(r)),divide2(n) - (divide2(m) + divide2(r)));
}

console.log(solution(N, M));