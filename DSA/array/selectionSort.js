let arr = [3,5,1,10,6];

let n= arr.length;
for(let i = 0;i<n-1;i++){
    let minIndex = i;
    for(let j =i+1; j<n;j++){
        if(arr[j]<arr[minIndex]){
            minIndex = j;
        }
    }
    if(minIndex!=i){
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}


console.log(arr)