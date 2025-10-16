


//Declare three variables (name, age, isStudent) and print them using template literals.

let name = "ayan";
let age = 23;
let isStudent = true;
console.log(`My name is ${name}`);
console.log(`Age is : ${age}`);
console.log(`is a student: ${isStudent}`);

if(age>20){
    isStudent =false;
}
console.log(`is a student: ${isStudent}`);













//Write a loop to print numbers from 1 → 20.

for(let i=1; i>=20; i++){
    console.log(i);
}








//Find the sum of all numbers in an array [5, 10, 15, 20, 25].


const arr =[5,10,15,20,25];
let sum = 0;
arr.forEach(item => {
    return sum += item;
});
console.log(sum);






//Reverse a string (e.g., "hello" → "olleh").

let str = "hello";
let reversed = str.split('').reverse().join('');


console.log(reversed);

let reversed1 = "";
function reversedString(str){
    for(let i = str.length-1; i>=0; i--){
        reversed1 += str[i];
    }
    return reversed1;

}
console.log(reversedString("Ayan"));



//Count how many vowels are in a given string.

function countingVowels(str){
    return str.split('').filter(char => 'aeiouAeiou'.includes(char)).length;
}
console.log(countingVowels("hello"));