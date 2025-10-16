function displayUser({ name = "Guest", age = 18 } = {}) {
  console.log(`Name: ${name}, Age: ${age}`);
}

displayUser();
displayUser({ name: "Ayan" });
displayUser({ age: 21 });
displayUser({ name: "Riya", age: 25 });
