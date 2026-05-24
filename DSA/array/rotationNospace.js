// Left Rotate Array using Reversal Algorithm

// Import prompt-sync package
let prompt = require('prompt-sync')();

// Take value of k from user
let k = Number(prompt("Enter k : "));

// Original array
let arr = [1, 2, 3, 4, 5];

// Step 1 → Reverse first k elements
reverse(0, k - 1);

// Step 2 → Reverse remaining elements
reverse(k, arr.length - 1);

// Step 3 → Reverse entire array
reverse(0, arr.length - 1);

// Function to reverse array elements
function reverse(i, j) {

    // Continue until pointers meet
    while (i < j) {

        // Swap elements
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        // Move pointers
        i++;
        j--;
    }
}

// Print rotated array
console.log(arr);