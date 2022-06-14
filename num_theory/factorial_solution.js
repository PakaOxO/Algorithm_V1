const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split(" ");

function countZero(num) {
    /*
        곱해서 10이 나오는 개수를 구하면됨
        1. 무조건 5의 배수가 2의 배수(짝수)보다 적음
        2. 5의 배수의 개수를 구하면 되는데, 25의 배수는 5가 2개씩, 125의 배수는 5가 3개씩 포함
        3. 5의 배수 안에는 25와 125의 배수가 포함되고, 25의 배수에는 125의 배수가 포함이 됨
        4. 따라서 125의 배수는 5가 3개씩 들어있지만 5의 배수를 카운팅하면서 1개, 25의 배수를 카운팅하면서 1개씩 중복 카운팅 됨
        5. 결국 5의 배수의 개수 + 25 배수의 개수 + 125 배수의 개수를 더하기만 하면됨
        6. 최대 N은 500까지라고 명시되어있으므로 625부터는 무시
    */
    return Math.floor(num / 5) + Math.floor(num / 25) + Math.floor(num / 125);
}

console.log(countZero(500));