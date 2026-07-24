/**
 * Bubble Sort Algorithm
 * Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name because smaller elements "bubble" to the top of the list.
 * 
 * Time Complexity: O(n^2) in the average and worst case, O(n) in the best case (when the array is already sorted).
 * Space Complexity: O(1) - Bubble Sort is an in-place sorting algorithm.   
 * 
 */
let arr1 = [5, 3, 8, 1];
let n = arr1.length;
for(let i = 0; i<n-1;i++){ //outer loop for number of passes i<n-1 -- because after n-1 passes, the array will be sorted
    for(let j = 0; j<n-1-i;j++){ //inner loop for comparing adjacent elements j<n-1-i -- because after each pass, the largest element is placed at the end of the array, so we can ignore the last i elements which are already sorted
        if(arr1[j]>arr1[j+1]){//if the current element is greater than the next element, swap them
            let temp = arr1[j];
            arr1[j] = arr1[j+1];
            arr1[j+1] = temp
        }
    }
}
console.log("bubble sort : ",arr1);
console.log();





















/** 
 * Cyclic Sort Algorithm
 * Cyclic Sort is a sorting algorithm that is used to sort an array of integers in the range from 1 to n, where n is the length of the array. The algorithm works by iterating through the array and placing each element in its correct position. If an element is not in its correct position, it is swapped with the element that is currently in that position. This process continues until all elements are in their correct positions.
 * Time Complexity: O(n) - The algorithm makes a single pass through the array, and each element is swapped at most once, resulting in linear time complexity.
 * Space Complexity: O(1) - Cyclic Sort is an in-place sorting algorithm.
 */

let arr = [7,4,5,1,2,6,3]; //1 to n
let i = 0; //initialize index to 0
while(i<arr.length){ 
    let correctIndex = arr[i] -1; //correct index of the current element
    if(arr[i] != arr[correctIndex]){ //if the current element is not at its correct index, swap it with the element at its correct index
        let temp = arr[i];
        arr[i] = arr[correctIndex];
        arr[correctIndex] = temp;

    }else{
        i++; //if the current element is at its correct index, move to the next index
    }
}
console.log("cyclic sort: ",arr)