/*12) Programa una función que determine si un número es primo (aquel que 
solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/
const isPrime = (number) => {
    prime = true;
    if(typeof number === 'number') {
        for(let i = 2; i < number; i++) {
            if(number % i === 0) {
                prime = false;
                break;
            }
        }
    }
    return prime;
}

console.log('Exercise 12');
console.log(isPrime(7));
console.log(isPrime(2));
console.log(isPrime(1));
console.log(isPrime(12));
console.log(isPrime(13));

/*13) Programa una función que determine si un número es par o impar, 
pe. miFuncion(29) devolverá Impar.*/

const isOddOrEven = (number) => {
    if(number % 2 == 0){
        console.log("Is Even number")
    }
    else {
        console.log("Is Odd number")
    }
}

console.log('\nExercise 13');
isOddOrEven(13);
isOddOrEven(26);
isOddOrEven(77);
isOddOrEven(1);
isOddOrEven(132);

/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F.*/

const conversion = (grades,base) => (base === 'c') ? (grades*1.8)+32 : (grades-32) * 0.5556;


console.log('\nExercise 14');
console.log(conversion(0,'c'));
console.log(conversion(75,'f'));
console.log(conversion(50,'c'));