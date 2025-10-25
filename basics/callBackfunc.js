//Write a callback function that prints “Task Completed” after greeting.
function greet(name, callback){
    console.log("Hello ",name);
    callback();
}

function showCompletion(){
    console.log("Task Completed");
}

greet("Ayan" , showCompletion);