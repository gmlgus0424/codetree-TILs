function min(a, b, c) {
    let minVal = a;
    if (minVal > b) minVal = b;
    if (minVal > c) minVal = c;

    return minVal;
}


const fs = require("fs");
let [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

console.log(min(a, b, c));