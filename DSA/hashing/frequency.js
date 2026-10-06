let arr = [1,3,5,7,8,1,1,2,3,7,5,6]

let map = new Map();

for(let i = 0;i<arr.length;i++){
    // if(map.has(arr[i])){
    //     map.set(arr[i],map.get(arr[i])+1)
    // }else{
    //     map.set(arr[i], 1)
    // }

    map.set(arr[i], (map.get(arr[i]) || 0)+1)
}
console.log(map);
