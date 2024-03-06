const fs = require("fs");

const Square = (n) => {
  if (n < 5) {
    console.log("tiny");
  } else {
    let area = n * n;
    console.log(area);
  }
};

// 입력
const input = fs.readFileSync(0).toString().trim();

// 입력값을 숫자로 변환하여 Square 함수 호출
Square(Number(input));