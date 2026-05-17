// Equilateral Triangle Star Pattern

// Import prompt-sync package to take user input
let prompt = require("prompt-sync")();

// Take input from user and convert it into a Number
let n = Number(prompt("Enter a number: "));

// Outer loop → controls rows
for (let i = 1; i <= n; i++) {

    // First inner loop → prints spaces
    // Spaces decrease row by row
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(" ");
    }

    // Second inner loop → prints stars
    // (2 * i - 1) prints odd number of stars
    for (let j = 1; j <= 2 * i - 1; j++) {
        process.stdout.write("*");
    }

    // Move cursor to next line after one row
    console.log();
}