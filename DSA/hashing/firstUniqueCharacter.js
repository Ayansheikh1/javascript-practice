let string = "aabbcdd";


let map = new Map();


for(let i = 0;i<string.length;i++){
    if(map.has(string[i])){
        map.set(string[i],map.get(string[i]) +1)
    }else{
        map.set(string[i],1)
    }
}

for(let i = 0;i<string.length;i++){
    if(map.get(string[i]) === 1){
        console.log(string[i])
    }
}