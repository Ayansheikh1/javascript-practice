//brute force
function isPrime(n){
    if(n<=1) return false
    for(let i = 2;i<n;i++){
        if(n%i==0) return false
    }
    return true
}

console.log(isPrime(7)) // O(n)


    //Optimised - till sqrt(n)
function isPrime2(n){
    if(n<=1) return false
    if(n===2) return true
    if(n%2==0) return false //even numbers
    for(let i = 3;i<Math.floor(Math.sqrt(n));i+=2){
        if(n%i==0) return false
    }
    return true
}

console.log(isPrime2(7)) //O(√n)