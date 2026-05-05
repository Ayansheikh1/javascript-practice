const pr = prompt("enter ")

if (pr === null) {
  console.log("Cancelled");
} else {
  const n = Number(pr);

  if (Number.isNaN(n)) {
    console.log("Invalid input");
  } else if (n <= 0) {
    console.log("Number should be positive");
  } else {
    console.log(isPrime(n));
  }
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  

  const limit = Math.sqrt(n); // compute once


  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}