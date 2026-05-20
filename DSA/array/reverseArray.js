// Reverse Array using Extra Space

// Original array
let arr = [10, 20, 30, 40, 50];

// Create a new empty array with same length
let temp = new Array(arr.length);

// Variable j is used for temp array indexing
let j = 0;

// Loop starts from last index of original array
for (let i = arr.length - 1; i >= 0; i--) {

    // Copy elements into temp array
    temp[j] = arr[i];

    // Move temp array index forward
    j++;
}

// Print reversed array
console.log(temp);




