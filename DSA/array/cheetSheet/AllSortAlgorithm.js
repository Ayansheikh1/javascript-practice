//Bubble Sort
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





















//Cyclic Sort
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