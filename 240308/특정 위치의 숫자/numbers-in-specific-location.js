// 변수 선언 및 입력
const fs = require("fs");

// 10개의 정수를 배열에 입력받아 저장합니다.
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

// 3번째, 5번째, 10번째 인덱스에 저장된 값 들의 합
console.log(input[2] + input[4] + input[9]);