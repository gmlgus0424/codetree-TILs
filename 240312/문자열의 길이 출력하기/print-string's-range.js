// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let [str1, str2]= input;

let len1 = str1.length;
let len2 = str2.length;

console.log(len1 + len2);