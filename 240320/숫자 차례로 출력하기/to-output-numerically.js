let fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());


function printStar(n) {
    if (n === 0) {
        return;
    }
    printStar(n-1)
    process.stdout.write(n + " ");
}

function printStar2(n){
    if(n===0){
        return;
    }
     
    process.stdout.write(n + " ");
    printStar2(n-1)
}
printStar(n);
console.log();
printStar2(n);