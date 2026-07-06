
//Sieve of Eratosthene
function seive(n){
    let isPrime = new Array(n+1).fill(true); // initially mark all as prime 
    isPrime[0] = false;
    isPrime[1] = false;

    for(let i = 2;i< Math.floor(Math.sqrt(n));i++){
        if(isPrime[i]){ //if prime then mark false to multiple factor
            for(let j = i*i; j<=n; j+=i){ 
                isPrime[j] = false; 
            }
        }
    }

    for(let i= 0;i<n;i++){
        if(isPrime[i]) process.stdout.write(i +" ");  //traverse array
    }
}


seive(20)