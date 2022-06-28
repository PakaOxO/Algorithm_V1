// const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");
// const input = "3\n3 4 5\n1 0 1 0".trim().split("\n");
const input = "6\n1 2 3 4 5 6\n2 1 1 1".trim().split("\n");

function b14888(v) {
    const [N, nums, operators] = v.map((item) => item.split(" ").map((item) => +item));
    const operation = [];
    const results = [];

    dfs();
    console.log(results);
    console.log(`${Math.max(...results)}\n${Math.min(...results)}`);
    return;

    function dfs() {
        if (hasNoOperators(operators)) {
            console.log(operation);
            results.push(calculate(operation));
            return;
        }

        for (let i=0; i<operators.length; i++) {
            if (operators[i] !== 0) {
                operators[i]--;
                operation.push(i);
                dfs();
                operators[i]++;
                operation.pop(i);
            }
        }
    }

    function hasNoOperators(o) {
        const sum = o.reduce((acc, curr) => acc + curr);
        if (sum === 0) return true;
        return false;
    }

    function calculate(o) {
        let result = nums[0];
        for (let i=1; i<nums.length; i++) {
            if (o[i-1] === 0) result += nums[i];
            else if (o[i-1] === 1) result -= nums[i];
            else if (o[i-1] === 2) result *= nums[i];
            else if (o[i-1] === 3) {
                if (result < 0) {
                    result = -Math.floor(-result / nums[i]);
                } else {
                    result = Math.floor(result / nums[i]);
                }
            }
        }
        return result;
    }
}

b14888(input);