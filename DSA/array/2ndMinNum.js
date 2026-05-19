// Array of numbers
let arr = [10, 20, 60, 90, 4, 8, 4, 100];

// Assume first two elements as minimum and second minimum
let min = Math.min(arr[0], arr[1]);
let sMin = Math.max(arr[0], arr[1]);

// Loop starts from index 2
// because first two elements are already processed
for (let i = 2; i < arr.length; i++) {

    // Check if current element is smaller than minimum
    if (arr[i] < min) {

        // Old minimum becomes second minimum
        sMin = min;

        // Update minimum
        min = arr[i];

    }

    // Check for second minimum
    // Conditions:
    // 1. Element should be smaller than current second minimum
    // 2. Element should not be equal to minimum
    else if (sMin > arr[i] && min != arr[i]) {

        // Update second minimum
        sMin = arr[i];
    }
}

// Print second minimum
console.log(sMin);


