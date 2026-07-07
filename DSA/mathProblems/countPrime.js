
//Sieve of Eratosthene
function sieve(n){
    let arr = new Array(n+1).fill(true);//mark evry number at first as prime

    for(let i =2;i*i<n;i++){
        if(arr[i]){
            for(let j = i*i;j<=n;j+=i){
                //mark multiple factor of that number to False
                arr[j] = false; 
            }
        }
    }

    for(let i = 2;i<=n;i++){
        if(arr[i]) process.stdout.write(i+" ")
    } // traverse the array and print those who still mark as true-->which are a prime numbers.
}

sieve(100)