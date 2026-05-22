// Left Rotate Array by K Positions

// Import prompt-sync package
let prompt = require('prompt-sync')();

// Take value of k from user
let k = Number(prompt("Enter value of k: "));

// Original array
let arr = [1, 2, 3, 4, 5];

// If k is greater than array length
k = k % arr.length;


// ------------------------------
// METHOD 1 : Using Nested Loops
// ------------------------------

for (let j = 0; j < k; j++) {

    // Store first element
    let copy = arr[0];

    // Shift elements left
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }

    // Place first element at end
    arr[arr.length - 1] = copy;
}

console.log("Using Loop Rotation:", arr);


// -----------------------------------
// METHOD 2 : Using Formula + Temp Array
// -----------------------------------

let arr1 = [1, 2, 3, 4, 5];

// Create temporary array
let temp = new Array(arr1.length);

// Store rotated elements
for (let i = 0; i < arr1.length; i++) {

    temp[i] = arr1[(i + k) % arr1.length];
}

// Print rotated array
console.log("Using Formula Method:", temp);