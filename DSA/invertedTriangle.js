// Inverted Triangle Star Pattern

// Import prompt-sync package to take user input
let prompt = require("prompt-sync")();

// Take input from user and convert it into a Number
let n = Number(prompt("Enter a number: "));

// Outer loop → controls rows
for (let i = 1; i <= n; i++) {

    // Inner loop → prints stars in decreasing order
    // n - i + 1 decreases stars row by row
    for (let j = 1; j <= n - i + 1; j++) {

        // Print "*" on same line
        process.stdout.write("* ");
    }

    // Move cursor to next line after one row is completed
    console.log();
}