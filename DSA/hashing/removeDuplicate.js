let arr = [1,3,1,3,4,6,8,6,6,8,6];

let set = new Set();

for(let i = 0;i<arr.length;i++){
    if(set.has(arr[i])){
            set.delete(arr[i])
    }else{
            set.add(arr[i])
    }
}

console.log(set)