const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력 
const n = Number(input[0]);
const a = input[1].trim().split(' ').map(Number);
const b = input[2].trim().split(' ').map(Number);


function aaa() {

//주어진 조건 
    for (let i = 0; i < n; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

// 정렬
a.sort((a, b) => a - b);
b.sort((a, b) => a - b);


if (aaa()) {
    console.log("Yes");
} else {
    console.log("No");
}