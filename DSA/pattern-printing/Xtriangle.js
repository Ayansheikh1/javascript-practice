// X Pattern using Stars

// Import prompt-sync package to take user input
let prompt = require("prompt-sync")();

// Take input from user and convert it into a Number
let n = Number(prompt("Enter a number: "));

// Outer loop → controls rows
for (let i = 1; i <= n; i++) {

    // Inner loop → controls columns
    for (let j = 1; j <= n; j++) {

        // Print star when:
        // 1. Row number equals column number
        // 2. Sum of row and column equals n + 1
        if (i == j || i + j == n + 1) {

            // Print star
            process.stdout.write("* ");

        } else {

            // Print spaces
            process.stdout.write("  ");
        }
    }

    // Move cursor to next line after one row
    console.log();
}