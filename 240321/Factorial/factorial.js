const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function aaa(n) {
    if (n === 1) {
        return 1;
    }
    
    return aaa(n - 1) * n;
}

console.log(aaa(5));