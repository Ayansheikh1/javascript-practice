//Create an object car with properties (brand, model, year) and a method getInfo().
const car = {
    brand: "BMW",
    model: "M5",
    year: 2025, 
    getInfo: function(){
        return `${this.brand} ${this.model} ${this.year}`;
    }
}

console.log(car.getInfo())


//Create an array of student objects and print all names

const students = [
    {name: "ayan" , age: 23},
    {name: "ashar", age: 19}, 
    {name: "anam", age: 25}
];
students.forEach(student => console.log(student.name));