const fs = require("fs");
let [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number); cookie=(n,m)=>{
    let gcd= 1;

    for(let i=2; i<Math.min(n,m); i++){
        if (n %i ===0 && m%i===0){
            gcd= i;
        }
    }
    process.stdout.write(gcd + "\n");
}

cookie(n, m);