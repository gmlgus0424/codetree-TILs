const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());


function printStar(n) {
    if (n === 0) {
        return;
    }

    process.stdout.write(n + " ");
    printStar(n - 1);
    process.stdout.write(n + " ");
}

printStar(n);