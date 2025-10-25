//Count how many keys are in an object using Object.keys().
const student = {
    name: "ayan",
    age: 23,
    course: "javascipt"
}
let count = Object.keys(student).length;
console.log(count);
















//Create a nested object and access a deep property.
const superstar = {
    name: "Ayan",
    age: 23,
    adderess:{
        city:"Ralegaon",
        state: "Maharastra",
        country: "India",
        contact: {
            phone: 9876543210,
            email: "ayan@example.com"
        }
    }

}

console.log(superstar.adderess.contact.email);