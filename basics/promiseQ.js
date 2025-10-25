//Create a Promise that resolves after 3 seconds with "Data Loaded"


const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Data Loaded");
    },3000);
});

promise
.then(msg => console.log(msg))
.catch(err => console.error(err));
