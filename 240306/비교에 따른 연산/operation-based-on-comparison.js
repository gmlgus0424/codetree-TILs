const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [a, b] = input[0].split(" ").map(Number);

if(a > b){
    console.log(a * b);
} else {
    console.log(Math.floor(b / a));
}