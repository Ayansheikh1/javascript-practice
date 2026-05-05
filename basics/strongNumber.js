// Q. Write a JavaScript program to check whether a number is a Strong Number or not.

const pr = prompt("Enter a number:");

if (pr === null) {
    // User clicked cancel
    console.log("Cancelled");
} else {
    let n = Number(pr); // Convert input to number

    if (isNaN(n)) {
        // Check for invalid input (non-numeric)
        console.log("Invalid input");
    } else if (n <= 0) {
        // Strong number is defined for positive numbers
        console.log("Number should be positive");
    } else {
        let sum = 0;      // To store sum of factorials of digits
        let copy = n;     // Store original number for comparison

        // Loop through each digit of the number
        while (n > 0) {
            var rem = n % 10; // Extract last digit

            let fact = 1; // Initialize factorial

            // Calculate factorial of the digit
            for (let i = 1; i <= rem; i++) {
                fact = fact * i;
            }

            sum = sum + fact; // Add factorial to sum

            n = Math.floor(n / 10); // Remove last digit
        }

        // Check if sum of factorials equals original number
        if (sum === copy) {
            console.log("Strong Number");
        } else {
            console.log("Not Strong Number");
        }
    }
}