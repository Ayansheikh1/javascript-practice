// Q. Write a JavaScript program to create a number guessing game (1–100).

// Generate a random number between 1 and 100
let random = Math.floor(Math.random() * 100) + 1;

let guess = 0; // Variable to store user's guess

// Loop until user guesses the correct number
while (guess !== random) {

    // Take input from user
    guess = Number(prompt("Guess a number between 1 and 100:"));

    // Validate input
    if (isNaN(guess) || guess < 1 || guess > 100) {
        console.log("Not valid, try again between 1-100");
        continue; // Skip rest of loop and ask again
    }

    // Compare guess with random number
    if (guess > random) {
        console.log("Too high, try again");
    } else if (guess < random) {
        console.log("Too low, try again");
    } else {
        // Correct guess
        console.log("Congrats 🎊! The number was:", guess);
    }
}