//convert normal funcion into an arrow function
// function greet(name){
// return "Hello, " + name;
// }

const greet = (name) => {
    return "Hello, " + name;
}
console.log(greet("Ayan"));


//Use destructing to extract firstName and age from
//const person = { firstName: "Ayan", age:22, city: "Nagpur"};

const person = { firstName: "Ayan", age:22, city: "Nagpur"};

const {firstName , age} =  person;
console.log(firstName);
console.log(age);





//use the spread operator to copy an array and add extra element

const numbers = [1,2,3,4,5,6];
const newNumbers = [...numbers,7,8];
console.log(newNumbers);



//combine two objects using spread operator
const obj1 = {name: "ayan", age: 22};
const obj2 = {city: "nagpur", course: "javascript"};

const combined = {...obj1, ...obj2};
console.log(combined);






//wwrite a small function using template literals to display

function introduce(name, age , course){
    return `Hello ${name}, you are ${age} years old and learning ${course}`;
}

console.log(introduce("Ayan" ,22 , "Javascript"));