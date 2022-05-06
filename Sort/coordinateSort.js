const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
input.shift();

const coordinates = input.map((a) => {
    const coordinate = a.split(" ");
    return {x: parseInt(coordinate[0]), y: parseInt(coordinate[1])};
});

coordinates.sort((a, b) => {
   if (a.x - b.x == 0) {
       return a.y - b.y;
   } else {
       return a.x - b.x;
   }
});

let answer = "";
for (let i=0; i<coordinates.length; i++) {
    answer += `${coordinates[i].x} ${coordinates[i].y}\n`;
}
console.log(answer);