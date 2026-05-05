const pr = prompt("enter a digits");


if(pr===null){
    console.log("cancelled")
} else{
    let n = Number(pr);
    if(isNaN(n)){
        console.log("invalid input");
    } else if(n<=0){
        console.log("number should be positive");
    } else{
        let rev =0;
        while(n>0){
            let rem = n%10;
            rev = rev*10 +rem;
            n= Math.floor(n/10);

        }
        console.log(rev);
        }
    }

