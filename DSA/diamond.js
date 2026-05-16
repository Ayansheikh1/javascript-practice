let prompt = require("prompt-sync")();
let n = prompt("enter a number");

for(let i = 1; i <= n; i++){
    for(let j = 1; j<=n-i; j++){
        process.stdout.write(" ");
    }
    for(let j = 1; j<= 2*i-1;j++){
        process.stdout.write("*");
    }

    console.log()
}


for(let i = n-1; i >= 1; i--){
    for(let j = 1; j<=n-i; j++){
        process.stdout.write(" ");
    }
    for(let j = 1; j<= 2*i-1;j++){
        process.stdout.write("*");
    }

    console.log()
}