// Problem Statement:
// A chocolate factory packs chocolates into packets.
// Here, packets are represented using an array of integers.
//
// Empty packets are represented by 0.
// The task is to move all empty packets (0s)
// to the end of the array while maintaining
// the order of non-zero elements.
//
// Example:
// Input:
// [4,5,0,1,9,0,5,0]
//
// Output:
// [4,5,1,9,5,0,0,0]


let N = 8;

// Input array
let arr = [4, 5, 0, 1, 9, 0, 5, 0];

// i -> used for traversing array
// j -> points to position where next non-zero element should be placed
let i = 0;
let j = 0;

// Traverse the array
while (i < N) {

    // Check if current element is non-zero
    if (arr[i] !== 0) {

        // Swap current element with arr[j]
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        // Move j to next position
        j++;
    }

    // Move to next element
    i++;
}

// Print final array
console.log(arr);

// Output:
// [4,5,1,9,5,0,0,0]