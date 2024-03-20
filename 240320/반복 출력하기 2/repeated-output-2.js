let fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());



function star(n){
    if(n===0){
    return
    }
     star (n-1)
    
    console.log("HelloWorld")
}
star(n)