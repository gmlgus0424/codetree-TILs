let fs = require('fs');
let N = Number(fs.readFileSync(0).toString().split("\n"));





let star = '';
let result ='';

for (let i = 0; i < N; i++) {
    star += '*';
    result += star + '\n';
}

console.log(result);