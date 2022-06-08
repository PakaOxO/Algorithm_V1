let [N, K] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

function binominal(n, k) {
    let result = 1;
    if (k === 0) return result;
    if (n / 2 > k) {
        for (let i=0; i<k; i++) {
            result *= n;
            n--;
        }
        while (k > 0) {
            result /= k;
            k--;
        }
    } else {
        let temp = n - k;
        for (let i=0; i<temp; i++) {
            result *= n;
            n--;
        }
        while (temp > 0) {
            result /= temp;
            temp--;
        }
    }
    return result;
}
console.log(binominal(N, K));