const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [ N, M ] = input[0].split(' ').map(Number);
const a = input[1].split(' ');
const b = new Set([...input[2].split(' ')]);

let kyoCnt = 0;
for (let i=0; i<N; i++) {
    if (b.has(a[i])) kyoCnt++;
}

console.log(N + M - (2 * kyoCnt));