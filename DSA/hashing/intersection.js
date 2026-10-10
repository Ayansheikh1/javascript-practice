//Intersection of two array

let nums1 = [1,2,2,1]
let nums2 = [2,2]


let set = new Set(nums1);

let ans = []

for(let i = 0;i<nums2.length;i++){
    if(set.has(nums2[i]) && !ans.includes(nums2[i])  ){
        ans.push(nums2[i])
    }
}

console.log(ans);

