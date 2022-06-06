const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
input.shift();

const arr = [];
input.sort((a, b) => {return a - b}).reduce((acc, curr) => {
    arr.push(curr - acc);
    return curr;
});

function getGCD(a, b) {
    if (b === 0) return a;
    else return getGCD(b, a % b);
}

const gcd = arr.reduce((acc, curr) => {
   return getGCD(acc, curr);
});

const result = [];
for (let i=1; i*i<=gcd; i++) {
    if (gcd % i === 0) {
        if (gcd === i * i) {
            result.push(i);
        } else {
            result.push(i);
            result.push(gcd / i);
        }
    }
}
result.sort((a, b) => {return a - b});
result.shift();
console.log(result.join(' '));