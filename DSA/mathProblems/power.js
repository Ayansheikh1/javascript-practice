function power(x,n){
    if (n==0) return 1;
    let ans = power(x, parseInt(n/2) );
    if(n%2==0){
        return ans*ans
    }else{
        return ans*ans*x;
    }
}

console.log(power(2,10));