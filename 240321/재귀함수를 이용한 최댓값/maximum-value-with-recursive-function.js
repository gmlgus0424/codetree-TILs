const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);


function aaa(n) {
    if (a === 0) return arr[0];

    return Math.max(aaa(a - 1), arr[a]);
}

console.log(aaa(n - 1));