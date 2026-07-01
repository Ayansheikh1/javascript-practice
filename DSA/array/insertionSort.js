const arr = [5, 3, 8, 1];
let n = arr.length;

for (i = 1; i < n; i++) {

    let key = arr[i];   // pick current element (card from table)
    let j = i - 1;      // start comparing from last element of sorted part

    // shift all elements GREATER than key → one position to the right
    // to make space for key insertion
    while (arr[j] > key && j >= 0) {  // ⚠️ still wrong: arr[j] not arr[i]
        arr[j + 1] = arr[j];  // shift element right
        j--;                  // move one step left in sorted part
    }
    // j is now pointing to element SMALLER than key
    // so insert key just after j → at j+1
    arr[j + 1] = key;  // insert key at correct position
}

console.log(arr);  // sorted array