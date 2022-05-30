const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const [W, H, X, Y, P] = input[0].split(" ").map(Number);

const r = H / 2;
const [x1, y1] = [X, Y+r];
const [x2, y2] = [X+W, Y+r];

let cnt = 0;
for (let i=1; i<=P; i++) {
    const [x3, y3] = input[i].split(" ").map(Number);
    
    if (x3 < x1 || x3 > x2) {
        if (x3 < x1) distanceBtwPoints([x3, y3], [x1, y1]) <= r ? cnt++ : null;
        else distanceBtwPoints([x3, y3], [x2, y2]) <= r ? cnt++ : null;
    } else {
        if (y3 <= y1 + r && y3 >= y1 - r) cnt++;
    }
}

function distanceBtwPoints(point1, point2) {
    return Math.sqrt((point1[0] - point2[0]) * (point1[0] - point2[0]) + (point1[1] - point2[1]) * (point1[1] - point2[1]))
}

console.log(cnt);