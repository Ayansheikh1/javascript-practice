const arr = [3,5,1,10,6];
let n = arr.length;

for(let i = 0;i<n-1;i++){
    let minIndex = i;
    for(let j= i+1;j<n;j++){
        if(arr[j]<arr[minIndex]){
            minIndex = j
        }

    }
    if(arr[i]!=arr[minIndex]){
        let temp = arr[i];
        arr[i]= arr[minIndex];
        arr[minIndex]= temp;
    }
}

console.log(arr)
/**
 * what we do --
 *  first we start a loop with index 0 and assuming that our minimum value is on index 0,
 * after that we compare each element with other and find out the minimum element index and return it through another nested loop 
 * and finallly swap element with minimum and sort an array into ascendeing order
 * 
 * 
 * 
 */