const N = +require("fs").readFileSync("/dev/stdin", "utf-8").trim();

function solution(n) {
    const isRowFilled = new Array(n).fill(0);
    const isLeftDigFilled = new Array(n * 2 - 1).fill(0);
    const isRightDigFilled = new Array(n * 2 - 1).fill(0);
    // const pos = new Array(n).fill(-1);
    let result = 0;

    function setQueen(col) {
        for (let row=0; row<n; row++) {
            if (!isRowFilled[row] && !isLeftDigFilled[col + row] && !isRightDigFilled[col - row + n - 1]) {
                // pos[col] = row;
                if (col === n - 1) {
                    result++;
                } else {
                    isRowFilled[row] = isLeftDigFilled[col + row] = isRightDigFilled[col - row + n - 1] = 1;
                    setQueen(col + 1);
                    isRowFilled[row] = isLeftDigFilled[col + row] = isRightDigFilled[col - row + n - 1] = 0;
              
                }
            }
        }
    }

    setQueen(0);

    return result;
}

console.log(solution(N));