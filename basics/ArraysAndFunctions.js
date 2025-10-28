//Find the maximum number in an array without using Math.max.

function maxNumber(arr){
    let max = arr[0];
    for(let i=1;i < arr.length; i++){
        if(arr[i]> max){
            max = arr[i];
        }
    }
    return max;
}


console.log(maxNumber([1,3,90,10]));


function maxNum(arry){
    return arry.reduce((max,curr) => (curr>max ? curr : max), arry[0]);//use 2 value accumuator(initial value here is 10) and current value 
}
console.log(maxNum([10,3,7,5]));





//Create a function that checks if a number is prime or not.
function isPrime(num){
    if(num<=1)return false; // 1 or 0 are not prime
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false; 
        }
    }
    return true;
}
console.log(isPrime(10));
console.log(isPrime(11));



//Write a function that returns the average of all numbers in an array.


function average(array){
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        sum += array[i];
    }
    return sum/array.length;
}
console.log(average([1,2,3]));


//Remove duplicates from an array using the Set Object

function removeDuplicate(ar){
    return [...new Set(ar)]; //new Set(arr) → Creates a Set, which automatically stores only unique values.
//[...new Set(arr)] → Converts the Set back into an array using the spread operator ....


}
const num = [1,2,2,3,4,4,5,5];
const uniqueNum = removeDuplicate(num);
console.log(uniqueNum);








//Merge two arrays and sort them in ascending order.
function mergeAndSort(arr1,arr2){
    const mergeArray = [...arr1,  ...arr2]; //or arr1.concat(arr2); using concat

    //sort in asecding order
    mergeArray.sort((a,b) => a - b);

    return mergeArray;
    }

    const array1 =[3,1,4];
    const array2 =[2,5,6];
    console.log(mergeAndSort(array1,array2));



//Create an array of numbers and print each using forEach().


const numbers = [1,2,3,4,5,6,7,8,9,0];
numbers.forEach(num => console.log(num));

// Multiply each element by 2 using map().
const mappedArray = numbers.map((x) => x * 2);
console.log(mappedArray);


//Filter out numbers greater than 50 using filter()
const array3 = [40,30,3,0,1,50,62,73,82];
const result = array3.filter((arr) => arr > 50);
console.log(result);


// Find the sum of all numbers using reduce().

const sumOfAllNum = numbers.reduce((acc,curr) => { console.log(acc,curr); return acc + curr}); //accumulator save the sum 
console.log(sumOfAllNum);



// Find the first even number using find().

const firstEven = array3.find((num) => num % 2 != 0 );
console.log(firstEven);






 //Given an array of users, extract all usernames using map().

const users = [
    {username: "ayan" , age: 22},
    {username: "Anam" , age:25},
    {username: "ashar", age: 18}
];

const usernames = users.map((user) => user.username );
console.log(usernames);






 //From the same array, filter users aged below 25.


 const below25 = users.filter((user) => user.age < 25);
 console.log(below25);







 //Check if all users are above 18 using every().


 const allAbove18 = users.every(user => user.age > 18);
 console.log(allAbove18);







 //Sort an array of scores in descending order.


const scores = [25, 30 ,15, 10, 40 ,8];
const sortedScore = scores.sort((a,b) => b - a);
console.group(sortedScore);




 //Reverse an array without using the reverse method (manual way).

 const manualReverse =[];
 const array4 = [1,2,3,4,5,6,7,8,9];
 for(let i = array4.length -1 ; i >= 0; i--){
    manualReverse.push(array4[i]); //push method use to insert value in an array
 }
console.log(manualReverse);