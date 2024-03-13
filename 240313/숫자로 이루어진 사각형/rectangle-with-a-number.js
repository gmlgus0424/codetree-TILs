const fs = require("fs");
let rowNum = Number(fs.readFileSync(0).toString().trim());


function printNum(n) {
    let cnt = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            process.stdout.write(cnt + " ");
            cnt += 1;
            if (cnt === 10) {
                cnt = 1;
            }
        }
        process.stdout.write("\n");
    }
}

printNum(rowNum);