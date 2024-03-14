function add(n) {
   let add =0;
   for(let i=1; i<=n ; i++) add +=i
   return parseInt(add/10)
}

const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();

console.log(add(n));