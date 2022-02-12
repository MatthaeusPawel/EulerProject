const isPrime = num => {
    for (let i = 2; i*i < num; ++i)
        if (num % i === 0)  return false;
    return (num > 1);
}

let ratioSatisfied = true;
let n = 1;
let nsquared = n*n;

let numberOfPrimes = 0;
let totalNumber = 1;

while (ratioSatisfied){

    let nsquared = n*n;

    for (let k = 1; k < 4; ++k)
    {
        if (isPrime(nsquared + (n+1)*k))
            numberOfPrimes++;
        
    }
    totalNumber += 4;
    ratioSatisfied = (10*numberOfPrimes >= totalNumber);

    n += 2;
}

console.log(n);