// Import prompt-sync package to take user input
let prompt = require("prompt-sync")();

// Take input from user and convert it into a Number
let n = Number(prompt("Enter a number: "));

// Outer loop → controls rows
for (let i = 1; i <= n; i++) {

    // Inner loop → controls columns
     // j <= i means stars increase row by row
    for (let j = 1; j <= i; j++) {

        // Print "*" without moving to next line
        process.stdout.write("*");
    }

    // Move cursor to next line after one row is printed
    console.log();
}


// Outer loop → controls rows
for (let i = 1; i <= n; i++) {

    // Inner loop → prints numbers from 1 to i
    for (let j = 1; j <= i; j++) {

        // Print numbers in same line
        process.stdout.write(j + " ");
    }

    // Move to next line
    console.log();
}

// Alphabet Character Triangle Pattern

// Outer loop → controls rows
for (let i = 1; i <= n; i++) {

    // ASCII value of 'A'
    let ascii = 65;

    // Inner loop → prints alphabets in each row
    for (let j = 1; j <= i; j++) {

        // Convert ASCII value into character and print it
        process.stdout.write(String.fromCharCode(ascii) + " ");

        // Move to next alphabet
        ascii++;
    }

    // Move cursor to next line after one row
    console.log();
}