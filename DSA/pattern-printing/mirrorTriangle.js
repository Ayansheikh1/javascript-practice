// Mirror Triangle Star Pattern

// Import prompt-sync package to take user input
let prompt = require("prompt-sync")();

// Take input from user and convert it into a Number
let n = Number(prompt("Enter a number: "));

// Outer loop → controls rows
for (let i = 1; i <= n; i++) {

    // First inner loop → prints spaces
    // Spaces decrease row by row
    for (let j = 1; j <= n - i; j++) {

        // Print spaces for right alignment
        process.stdout.write("  ");
    }

    // Second inner loop → prints stars
    // Stars increase row by row
    for (let j = 1; j <= i; j++) {

        // Print stars
        process.stdout.write(" *");
    }

    // Move cursor to next line after one row
    console.log();
}