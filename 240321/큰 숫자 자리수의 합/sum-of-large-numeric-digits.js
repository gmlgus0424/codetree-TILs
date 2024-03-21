const fs = require("fs");
let [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

// n의 각 자릿수의 합을 반환합니다.
function sum(n) {
    if (n < 10) {
        return n;
    }

    return sum(parseInt(n / 10)) + n % 10;
}

console.log(sum(a * b * c));