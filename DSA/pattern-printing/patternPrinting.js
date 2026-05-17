// Import prompt-sync package to take user input
let prompt = require("prompt-sync")();

// Take input from user and convert it into a Number
let n = Number(prompt("Enter a number: "));

// Outer loop → controls rows
for (let i = 1; i <= n; i++) {

    // Inner loop → controls columns
    for (let j = 1; j <= n; j++) {

        // Print "*" without moving to next line
        process.stdout.write("*");
    }

    // Move cursor to next line after one row is printed
    console.log();
}