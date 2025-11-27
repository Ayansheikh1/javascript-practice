function salutation() {
    let name = 'Ayan';

    function greet() {
        console.log(`Hello ${name}!`);
    }
    return greet;
}

let wish = salutation();
wish();


// local variable is generally only
//  present during the function's execution.
//  It means that when salutation() execution is completed, the name variable is no longer accessible. 
// In this case, when we execute wish(), the reference to greet(), the name variable still exists. 
// A closure is a function that preserves the outer scope in its inner scope.