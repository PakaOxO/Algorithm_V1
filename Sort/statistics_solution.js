const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const len = parseInt(input[0]);
let list = input.slice(1).map(Number).sort((a, b) => {return a - b});

function arithmeticMean(arr) {
    let sum = 0;
    const arrLen = arr.length;
    for (let i=0; i<arrLen; i++) {
        sum += arr[i];
    }
    
    return Math.round(sum / arrLen) == -0 ? 0 : Math.round(sum / arrLen);
}

function getMedian(arr) {
    return arr[Math.floor(arr.length / 2)];
}

function getMode(arr) {
    let returnVal = undefined;
    let tempArr = new Array(8001).fill(0);
    for (let i=0; i<arr.length; i++) {
        tempArr[arr[i]+4000]++;
    }
    
    let idx = tempArr.indexOf(Math.max(...tempArr));
    returnVal = idx - 4000;
    for (let j=idx+1; j<tempArr.length; j++) {
        if (tempArr[idx] == tempArr[j]) {
            returnVal = j - 4000;
            break;
        }
    }
    return returnVal;
}

function getMinMaxDiff(arr) {
    return arr[arr.length-1] - arr[0];
}

console.log(arithmeticMean(list));
console.log(getMedian(list));
console.log(getMode(list));
console.log(getMinMaxDiff(list));