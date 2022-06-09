let [N, K] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

function binominalCoefficient(n, k) {
    const pascalsTriangle = Array.from(new Array(N+1), () => new Array(N+1).fill(0));
    /* 파스칼 삼각형 그리기 */
    pascalsTriangle[0][0] = 1;
    pascalsTriangle[1][0] = 1;
    pascalsTriangle[1][1] = 1;

    for (let i=2; i<=n; i++) {
        for (let j=0; j<=i; j++) {
            if (j === 0 || j === i) pascalsTriangle[i][j] = 1;
            else pascalsTriangle[i][j] = pascalsTriangle[i-1][j-1] + pascalsTriangle[i-1][j];
        }
    }
    return pascalsTriangle[n, k];
}


/* 점화식 사용 */
function binominalCoefficient(n, k) {
    if (k === 0 || k === n) {
        return 1;
    }
    else {
        return binominalCoefficient(n-1, k-1) + binominalCoefficient(n-1, k);
    }
}
console.log(binominalCoefficient(N, K));
