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
console.log(arr)