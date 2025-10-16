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