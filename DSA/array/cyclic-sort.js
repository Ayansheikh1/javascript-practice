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