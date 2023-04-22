//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const randomNumber = () => 500 + (Math.round(Math.random()*100))

console.log('Exercise 9');
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());

/*10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/

const isCapicua = (number) => {
    str = number.toString();
    for(let i = 0, j = str.length-1; i < j; i++, j--) {
        if(str[i] != str[j]){
            return false;
        }
    }
    return true;
}

console.log('\nExercise 10');
console.log(isCapicua(2002));
console.log(isCapicua(2020));
console.log(isCapicua(999));
``
/*11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto de todos 
    los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

const factorial = (number) => {
    count = 1;
    for(let i = 1; i <= number; i++) {
        count *= i;
    }
    return count;
}

console.log('\nExercise 11');
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));