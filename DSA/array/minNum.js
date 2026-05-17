// Array of numbers
let arr = [10, 40, 70, 90, 5, 20];

// Assume first element is the minimum initially
let min = arr[0];

// Loop through the entire array
for (let i = 0; i < arr.length; i++) {

    // Check if current element is smaller than min
    if (arr[i] < min) {

        // Update min with smaller value
        min = arr[i];
    }
}

// Print the smallest element in array
console.log(min);