const input = require('fs').readFileSync('dev/stdin', 'utf-8').trim().split('\n');
const N = parseInt(input[0]);
const M = parseInt(input[2]);

const cards = input[1].split(' ').map(Number);
cards.sort((a, b) => {return a - b});
const lists = input[3].split(' ').map(Number);

const myMap = new Map();
cards.forEach((val) => {
   if (!myMap.has(val)) myMap.set(val, 1);
   else myMap.set(val, myMap.get(val)+1);
});

const results = [];
lists.forEach((val) => {
   if (myMap.has(val)) results.push(myMap.get(val)); 
   else results.push(0);
});

console.log(results.join(" "));