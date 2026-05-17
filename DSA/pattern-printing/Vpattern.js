// V Pattern using Stars

// Import prompt-sync package to take user input
let prompt = require("prompt-sync")();

// Take input from user and convert it into a Number
let n = Number(prompt("Enter a number: "));

// Outer loop → controls rows
for (let i = 1; i <= n; i++) {

    // Inner loop → controls columns
    for (let j = 1; j <= 2 * n - 1; j++) {

        // Print star at left and right diagonal positions
        if (j == i || j == 2 * n - i) {

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