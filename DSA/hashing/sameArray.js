//Check if Two Arrays Are Equal


let arr1 = [1, 2, 3, 2]
let arr2 = [2, 1, 2, 3]



function sameArray(arr1,arr2){

    let map = new Map();


    if(arr1.length != arr2.length){
        return false
    }

for(let i = 0;i<arr1.length;i++){
    map.set(arr1[i],(map.get(arr1[i])|| 0)+1)
}

for(let i = 0;i<arr2.length;i++){
    if(!map.has(arr2[i]) || (map.get(arr2[i]) === 0 )){
        return false
    }
   if(map.has(arr2[i]) && map.get(arr2[i])){
        map.set(arr2[i],(map.get(arr2[i])-1))
   }
  

}
 return true


}

console.log(sameArray(arr1,arr2));
 