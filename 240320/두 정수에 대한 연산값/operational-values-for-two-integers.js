const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function changeNumber(a, b) {
    if (a > b) {
        b *= 2;
        a += 25;
    } else {
        a *= 2;
        b += 25;
    }

    return [a, b];
}

[a, b] = changeNumber(a, b);

console.log(a, b);