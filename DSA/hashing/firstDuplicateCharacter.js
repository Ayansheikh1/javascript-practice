// first duplicate character

let string = "abccde";


let map = new Map();


for(let i = 0; i< string.length;i++){
    map.set(string[i],(map.get(string[i]) || 0) + 1);
}

for(let i = 0;i <string.length;i++){
    if(map.get(string[i])>1){
        console.log(string[i]);
        break;
    }
}