const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const pascalsTriangle = Array.from(new Array(30+1), () => new Array(30+1).fill(0));
/* 파스칼 삼각형 그리기 */
pascalsTriangle[0][0] = 1;
pascalsTriangle[1][0] = 1;
pascalsTriangle[1][1] = 1;

for (let i=2; i<=30; i++) {
    for (let j=0; j<=i; j++) {
        if (j === 0 || j === i) pascalsTriangle[i][j] = 1;
        else pascalsTriangle[i][j] = pascalsTriangle[i-1][j-1] + pascalsTriangle[i-1][j];
    }
}

const result = [];
for (let i=1; i<input.length; i++) {
    const [K, N] = input[i].split(' ').map(Number);
    result.push(pascalsTriangle[N][K]);
}

console.log(result.join('\n'));