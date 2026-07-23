let arr = [7,4,5,1,2,6,3];

let i = 0;
while(i<arr.length){
    let correctIndex = arr[i]-1;
    if(arr[i]!== arr[correctIndex]){
        let temp = arr[i];
        arr[i] = arr[correctIndex];
        arr[correctIndex] = temp;
    }else{
        i++
    }
}

console.log(arr) 

//cyclic sort is a sorting algorithm that is used to sort an array of integers in the range from 1 to n, where n is the length of the array. The algorithm works by iterating through the array and placing each element in its correct position. If an element is not in its correct position, it is swapped with the element that is currently in that position. This process continues until all elements are in their correct positions.
//time complexity - O(n) - The algorithm makes a single pass through the array, and each element is swapped at most once, resulting in linear time complexity.