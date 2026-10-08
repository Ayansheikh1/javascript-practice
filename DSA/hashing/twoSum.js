// Given an array of integers and a target, return the indices of two numbers whose sum equals the target.
// Example
// Input:
// numbers = [2, 7, 11, 15]
// target = 9

// Output:
// [0, 1]


function twoSum(numbers,target){
    let map = new Map();

    for(let i = 0;i<numbers.length;i++){
        if(map.has(target- numbers[i])){
            return [i,map.get(target-numbers[i])]
        }else{
            map.set(numbers[i],i)
        }
    }
}

console.log(twoSum([2, 7, 11, 15],9));
