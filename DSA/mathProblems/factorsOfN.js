function factors(n) {
    for(let i = 1; i * i <= n; i++) {   // loop till √n
        if(n % i === 0) {
            console.log(i);              // first factor of pair
            if(n/i !== i ) {            // avoid printing duplicate for perfect square
                console.log(n / i);      // second factor of pair
            }
        }
    }
}

 factors(36); //unsorted



function factors2(n) {
    for(let i = 1; i * i <= n; i++) {   // loop till √n
        if(n % i === 0) {
            console.log(i);              // first factor of pair
        }

    }

    for(let i=Math.floor(Math.sqrt(n)); i>=1; i--) { // loop till √n
        if(n % i === 0) {
            if(n/i != i)
            console.log(n/i);           
        }
        
    }
}

factors2(36); //sorted

