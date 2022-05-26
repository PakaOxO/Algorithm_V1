const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const N = parseInt(input[0]);

const vertInfo = [0, 0, 0];
const horzInfo = [0, 0, 0];

const rectangle = [];

for (let i=1; i<input.length ; i++) {
    const [ direction, length ] = input[i].split(" ").map(Number);
    rectangle.push(length);
    if (direction < 3 && length > vertInfo[1]) {
        vertInfo[0] = direction;
        vertInfo[1] = length;
        vertInfo[2] = i-1;
    } else if (direction > 2 && length > horzInfo[1]) {
        horzInfo[0] = direction;
        horzInfo[1] = length;
        horzInfo[2] = i-1;
    }
}

let w = Math.abs(rectangle[vertInfo[2]-1 < 0 ? 5 : vertInfo[2]-1] - rectangle[vertInfo[2]+1 > 5 ? 0 : vertInfo[2]+1]);
let h = Math.abs(rectangle[horzInfo[2]-1 < 0 ? 5 : horzInfo[2]-1] - rectangle[horzInfo[2]+1 > 5 ? 0 : horzInfo[2]+1]);

const squareBig = vertInfo[1] * horzInfo[1];
const squareSmall = w * h;

console.log((squareBig - squareSmall) * N);