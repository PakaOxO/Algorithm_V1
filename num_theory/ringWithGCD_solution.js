const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
input.shift();

const numArr = input[0].split(' ').map(Number);

const N = numArr.shift();

function getGCD(a, b) {
    if (b === 0) return a;
    else return getGCD(b, a % b);
}

let result = [];
for (let i=0; i<numArr.length; i++) {
    const gcd = getGCD(N, numArr[i]);
    result.push(`${N/gcd}/${numArr[i]/gcd}`);
}
console.log(result.join('\n'));