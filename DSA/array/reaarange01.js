// Sort 0s and 1s using Two Pointer Technique

// Original array
let arr = [0, 1, 1, 0, 1, 0, 1, 0];

// i → used for traversing array
// j → used for placing 0s at correct position
let i = 0, j = 0;

// Loop runs until end of array
while (i < arr.length) {

    // Check if current element is 0
    if (arr[i] === 0) {

        // Swap arr[i] with arr[j]
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        // Move j forward
        // because next 0 should come after current 0
        j++;
    }

    // Move i forward for traversal
    i++;
}



// Print sorted array
console.log(arr);