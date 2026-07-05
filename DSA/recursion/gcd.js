
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

console.log(gcd(20,32))