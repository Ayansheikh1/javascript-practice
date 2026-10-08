//Frequency Counter

const numbers = [1, 2, 2, 3, 1, 2, 4];

let map = new Map();

for(let i = 0;i<numbers.length;i++){
    if(map.has(numbers[i])){
        map.set(numbers[i],map.get(numbers[i])+1)
    }else{
        map.set(numbers[i],1)
    }

    //map.set(numbers[i],map.get(numbers[i]) || 0 + 1)
}

console.log(map);
