const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function aaa(n) {
    if (n === 1) {
        return 1;
    }
    if(n===2){
        return 2;
    }
 
 return n+aaa(n-2)
}

console.log(aaa(n));