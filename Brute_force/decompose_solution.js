const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin", "utf-8").trim());

function solution(n) {
    let init = N - (N + "").length*9;
    init = init <= 0 ? 1 : init;
    
    for (let i=init; i<n; i++) {
        let iStr;
        let decompose = i;
        if (i >= 10) {
            iStr = i.toString();
            for (let j=0; j<iStr.length; j++) {
                decompose += parseInt(iStr[j]);
            }
        } else {
            decompose += i;
        }
    
        if (decompose == n) {
            return i;
        }
    }
    return 0;
}

console.log(solution(N));