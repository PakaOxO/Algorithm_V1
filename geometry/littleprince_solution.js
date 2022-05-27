const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

let [ x1, y1, x2, y2 ] = [ 0, 0, 0, 0 ];
let orbit = 0;
let orbitCnt = 0;
let cnt = 0;
let result = "";
for (let i=1; i<input.length; i++) {
    if (input[i].split(" ").length === 4) { 
        [ x1, y1, x2, y2, ] = input[i].split(" ").map(Number);
        cnt = 0;
        orbit = 0;
        continue;
    }
    
    let [ cx, cy, r ] = [ 0, 0, 0 ];
    if (input[i].split(" ").length === 1) {
        cnt = 0;
        orbitCnt = parseInt(input[i]);
    } else {
        [ cx, cy, r ] = input[i].split(" ").map(Number);
        orbit++;
        const distance1 = (cx - x1) * (cx - x1) + (cy - y1) * (cy - y1);
        const distance2 = (cx - x2) * (cx - x2) + (cy - y2) * (cy - y2);
        
        if (distance1 > r * r && distance2 < r * r) {
            cnt++;
        } else if (distance1 < r * r && distance2 > r * r) {
            cnt++;
        }
        
        if (orbitCnt === orbit) result += `${cnt}\n`;
    }
}
console.log(result);