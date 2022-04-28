const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

let arrCnt = [];
for (let y=1; y<=N-7; y++) {
    for (let x=0; x<=M-8; x++) {
        let cnt1 = 0;
        let cnt2 = 0;
        
        for (let b=y; b<y+8; b++) {
            for (let a=x; a<x+8; a++) {
                if ((a + b) % 2 == 0) {
                    if (input[b][a] == 'W') {
                        cnt1++;
                    } else if (input[b][a] == 'B') {
                        cnt2++;
                    }
                } else {
                    if (input[b][a] == 'B') {
                        cnt1++
                    } else if (input[b][a] == 'W') {
                        cnt2++;
                    }
                }
            }
        }
        arrCnt.push(Math.min(cnt1, cnt2));
    }
}
console.log(Math.min(...arrCnt));