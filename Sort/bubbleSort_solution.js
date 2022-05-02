/* 버블 정렬 사용 */
let input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n").slice(1);

for (let i=input.length-1; i>0; i--) {
    for (let j=0; j<i; j++) {
        if (parseInt(input[j]) > parseInt(input[j+1])) {
            let temp = input[j+1];
            input[j+1] = input[j];
            input[j] = temp;
        }
    }
}
console.log(input.join("\n"));