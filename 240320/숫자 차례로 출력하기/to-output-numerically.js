let fs = require('fs');
let n = fs.readFileSync().toString().trim();


function printStar(n) {
    if (n === 0) {
        return;
    }
    printStar(n-1)
    process.stdout.write(n + " ");
}

function star(n){
    if(n===0){
        return
    }
     
    process.stdout.write(n + " ");
    printStar(n-1)
}
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (n) => {
  n = parseInt(n);
  printStar(n);
  console.log("");
  star(n);
  rl.close();
});