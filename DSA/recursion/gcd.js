//gcd - bruteforce method
function gcd1(a,b){
    for(let i = Math.min(a,b);i>=1;i--){
        if(a%i==0 && b%i==0){
            return i;
        }
    }

} 
console.log("GCD USING BRUTE FORCE METHOD = "+gcd1(48,18));








//Iterative method - Euclidean algorithm
let a= 32, b= 20;

while(b!==0){
   let temp = b;
   b = a%b;
   a = temp
}

console.log(a)


//Recursive method

function gcd(a,b){
    if(b==0) return a
    return gcd(b,a%b);
}

console.log("GCD USING Euclidean algorithm = "+gcd(20,32))