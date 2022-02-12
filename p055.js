
let i = 123;

function reverseNumber(_number) {
    return parseInt(_number.toString().split("").reverse().join(""));
}

function checkPalindrome(_number){
    numberAsString = _number.toString();
    numberlength = numberAsString.length;

    for (i=0; i <= numberlength/2; ++i){
        if (numberAsString[i] != numberAsString[numberlength-i-1])
            return false;
    }
    
    return true;
}

function checkNextIteration(n, iteration){
    if (iteration == 50)
        return 1;
    let newN = n+reverseNumber(n)
    if (checkPalindrome(newN) == true)
        return 0;

    return checkNextIteration(newN, iteration+1);
}

let result=0;
for (n = 0; n < 10000; ++n){
    result += checkNextIteration(n, 0);  

}

console.log(result);