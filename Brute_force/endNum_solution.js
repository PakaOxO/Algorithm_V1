const N = parseInt(require("fs").readFileSync("/dev/stdin", "utf-8").trim());

function getTheEndNumber(n) {
    let cnt = 1;
    let num = 666;
    
    while (cnt !== n) {
        num++;
        let temp = num;
        
        while (temp !== 0) {
            if (temp % 1000 == 666) {
                cnt++;
                break;
            } else {
                temp = Math.floor(temp / 10);
            }
        }
    }
    return num;
}

console.log(getTheEndNumber(N));