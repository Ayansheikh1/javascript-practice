// Merge Two Sorted Arrays

// First sorted array
let arr1 = [1, 2, 3, 4, 8];

// Second sorted array
let arr2 = [5, 6, 7, 9];

// Create new array to store merged result
let merge = new Array(arr1.length + arr2.length);

// i → pointer for arr1
// j → pointer for arr2
// k → pointer for merged array
let i = 0, j = 0, k = 0;

/*
Compare elements from both arrays
and place smaller element into merge array
*/
while (i < arr1.length && j < arr2.length) {

    // If element in arr1 is smaller
    if (arr1[i] < arr2[j]) {

        // Store element into merge array
        merge[k++] = arr1[i++];

    } else {

        // Store element from arr2
        merge[k++] = arr2[j++];
    }
}

/*
Copy remaining elements of arr1
if any elements are left
*/
while (i < arr1.length) {

    merge[k++] = arr1[i++];
}

/*
Copy remaining elements of arr2
if any elements are left
*/
while (j < arr2.length) {

    merge[k++] = arr2[j++];
}








// Print merged sorted array
console.log(merge);