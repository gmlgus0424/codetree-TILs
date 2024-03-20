let fs = require('fs');
let n = fs.readFileSync('/dev/stdin').toString().split('\n');



function star(n){
    if(n===0){
    return
    }
     star (n-1)
    
    console.log("HelloWorld")
}
star(n)