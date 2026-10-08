// Given:
 const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

// Group words that are anagrams.
// Expected:
// [
//     ["eat", "tea", "ate"],
//     ["tan", "nat"],
//     ["bat"]
// ]


let map = new Map();



for(let i = 0;i< words.length;i++){
    let key = words[i].split("").sort().join("")

    if(map.has(key)){
       map.get(key).push(words[i])
    }else{
        map.set(key,[words[i]])
    }
} 

console.log(map)


