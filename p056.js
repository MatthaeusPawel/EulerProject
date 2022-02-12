
function computeDigitalSum(n){
    let result = 0;
    
    for (d of n.toString().split(""))
        result += parseInt(d);
    
    return result;
}

let currentPair  = []
let currentMax = 0;

for (a = 0n; a < 100n; a+=1n){
    for (b = 0n; b < 100n; b+=1n){
        currentDigitSum = computeDigitalSum(a**b);

        if (currentMax < currentDigitSum){
            currentPair = [a,b];
            currentMax = currentDigitSum;
        }
    }
        
}

console.log(currentPair);
console.log(currentMax);
/* 
for (a = 0n; a < 100n; a+=1n){
    for (b = 5n; b < 6n; b+=1n){
        console.log("a=", a, ", b=", b,"; b**a = ", b**a);
    }
} */