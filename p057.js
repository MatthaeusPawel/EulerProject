const loopcount = 1000;


function countDigits(x) {
   return String(x).length;
}

let fraction = {};
fraction.nom = 5;
fraction.denom = 2;

function recursion(_frac) {
    return { nom: 2*_frac.nom + _frac.denom, denom: _frac.nom }
}

function finalStep (_frac)  {
    return { nom: _frac.nom + _frac.denom, denom: _frac.nom}
}

function getTenExp(x){
    return Math.floor(Math.log10(x))
}


function checkAdmissibility (_frac) {
    if (getTenExp(_frac.nom) > getTenExp(_frac.denom)){
        return 1;
    }
    return 0;
}

function printFrac(_frac){
    console.log(String(_frac.nom) + '/' + String(_frac.denom));
}


let foundNumbers = 0;

for (let i = 1; i <= loopcount; ++i){
    let tmp = finalStep(fraction)
    if (checkAdmissibility(tmp) == 1){
        foundNumbers ++;
    }
    fraction = recursion(fraction);
    
    let sizeOfExponents = getTenExp(fraction.nom) 
    if (sizeOfExponents > 10){
        fraction.nom /= 10**(sizeOfExponents - 10);
        fraction.denom /= 10**(sizeOfExponents - 10);
    }
}



console.log(foundNumbers);