/** Given an array arr[] of integers, where each element arr[i] represents the number of pages in the i-th book.
 *  You also have an integer k representing the number of students.
 *  The task is to allocate books to each student such that:

Each student receives atleast one book.
Each student is assigned a contiguous sequence of books.
No book is assigned to more than one student.
All books must be allocated.
The objective is to minimize the maximum number of pages assigned to any student. 
In other words, out of all possible allocations, 
find the arrangement where the student who receives the most pages still has the smallest possible maximum.
 If it is not possible to allocate books to all students, return -1;

*/

let arr = [12, 34, 67, 90];
const k = 2;

function isValid(arr,k,mid){
    let numberOfStudents = 1;
    let sum = 0;

    for(let i = 0;i<arr.length;i++){
        if(sum + arr[i] > mid){
            numberOfStudents++
            sum = arr[i]
            if(numberOfStudents>k){return false} 
        }else sum+=arr[i]
    }

    return true
}



function findPages(arr,k){

if(k>arr.length) return -1
let first = 0;
let last = 0;
let ans = -1;

for(let i = 0;i<arr.length;i++){
   first = Math.max(first,arr[i]);
   last += arr[i]; 
}
//define first as finding out max pages book which actually represent the minimum pages gets to each student  


while(first<=last){
    let mid = Math.floor((first+last)/2);
    if(isValid(arr,k,mid)){
        ans = mid;//we get possible answer so what we decreses nummber of pages from the last
        last = mid-1 
    }else{
        first = mid+1
    }
    
}

return ans

}

console.log(findPages(arr,k)) 