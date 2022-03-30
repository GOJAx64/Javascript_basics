
/*//Define square to hold a function value
const square = function(x) {
    return x * x;
};
console.log(square(12));

//Declare future to ba a function
console.log("The future says:", future());
function future() {
    return "You will never have flying cars";
}

//A less verbose function value
const pow = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
};

const square1 = (x) => { return x * x; };
const square2 = x => x * x;


console.log(pow(2,10));
console.log(square1(3));
console.log(square2(3));*/


//Minimun
const min = (n1, n2) => {
    if (n1 < n2) {
        return n1;
    }
    else return n2;
};

console.log(min(8,6));


//Recursion
function isPair(n){
    if(n == 0) {
        return true;
    }
    else if(n == 1) {
        return false;
    }
    else if(n < 0) {
        return isPair(n+2);
    }
    else {
        return isPair(n-2);
    }
}

console.log(isPair(44));


// Counting letters
const countLetter = function(word, letter) {
    let count = 0;
    for(let i = 0; i < word.length; i++) {
        if(word[i] == letter) {
            count++;
        }
    }
    return count;
};

console.log(countLetter('hola esta es una prueba','a'));