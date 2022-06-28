// const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n").map((item) => item.split(" "));
//const input = "0 3 5 4 6 9 2 7 8\n7 8 2 1 0 5 6 0 9\n0 6 0 2 7 8 1 3 5\n3 2 1 0 4 6 8 9 7\n8 0 4 9 1 3 5 0 6\n5 9 6 8 2 0 4 1 3\n9 1 7 6 5 2 0 8 0\n6 0 3 7 0 1 9 5 2\n2 5 8 3 9 4 7 6 0".trim().split("\n").map((item) => item.split(" "));

/* 처음에 틀린 반례, 그냥 return으로 빠져나가려 해서 복수의 답을 찾고 있었음.. */
const input = "0 0 0 0 0 0 0 0 0\n7 8 2 1 3 5 6 4 9\n4 6 9 2 7 8 1 3 5\n3 2 1 5 4 6 8 9 7\n0 0 0 0 0 0 0 0 0\n5 9 6 8 2 7 4 1 3\n9 1 7 6 5 2 3 8 4\n6 4 3 7 8 1 9 5 2\n0 0 0 0 0 0 0 0 0".trim().split("\n").map((item) => item.split(" "));


function solution(board) {
    const zero = checkZero();
    const n = zero.length;
    sudoku(0);

    function sudoku(cnt) {
        /* 스도쿠 종료 */
        if (cnt === n) {
            const result = [];
            for (let i=0; i<9; i++) {
                const col = board[i].join(" ");
                result.push(col);
            }
            console.log(result.join("\n"));
            // return;
            process.exit(0);
        }

        const col = zero[cnt][0];
        const row = zero[cnt][1];

        for (let i=1; i<=9; i++) {
            if (checkCanInsert(col, row, i)) {
                board[col][row] = i;
                sudoku(cnt+1);
                board[col][row] = 0;
            }
        }
    }

    function checkCanInsert(col, row, val) {
        /* 행 체크 */
        for (let i=0; i<9; i++) {
            if (board[col][i] == val) return false;
        }

        /* 열 체크 */
        for (let i=0; i<9; i++) {
            if (board[i][row] == val) return false;
        }

        /* 블럭 체크 */
        const blockInitCol = Math.floor(col / 3) * 3;
        const blockInitRow = Math.floor(row / 3) * 3;
        for (let i=blockInitCol; i<blockInitCol+3; i++) {
            for (let j=blockInitRow; j<blockInitRow+3; j++) {
                if (board[i][j] == val) return false;
            }
        }

        return true;
    }

    function checkZero() {
        const posZero = [];
        for (let i=0; i<9; i++) {
            for (let j=0; j<9; j++) {
                if (board[i][j] == 0) posZero.push([i, j]);
            }
        }
        return posZero;
    }
}

solution(input);;