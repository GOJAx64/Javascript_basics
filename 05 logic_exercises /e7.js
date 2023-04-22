/*21) Programa una función que dado un array numérico devuelve otro array con 
los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/
const arrayToSquares = numbers => {
    const squares = new Array();

    numbers.forEach(element => { 
        squares.push(element*element);
    });

    return squares;
}

console.log("Exercise 21");
console.log(arrayToSquares([1,4,5]));

/*22) Programa una función que dado un array devuelva el número mas alto y el 
más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/

const majorAndMinor = numbers => {
    let major = Math.max(...numbers);
    let minor = Math.min(...numbers);
    return  {
        major,
        minor
    }
}

console.log("\nExercise 22");
let array = majorAndMinor([1, 4, 5, 99, -60]);
console.log(`Major= ${array.major}, Minor= ${array.minor}`);


/*23) Programa una función que dado un array de números devuelva un objeto con 
2 arreglos en el primero almacena los números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/

const evensAndOdds = numbers => {
    const evens = new Array();
    const odds = new Array();

    numbers.forEach(element => {
        if(element % 2 === 0) {
            evens.push(element);
        } else {
            odds.push(element);
        }
    });

    return {evens, odds}
}

console.log("\nExercise 23");
const obj = evensAndOdds([1,2,3,4,5,6,7,8,9,0]);
console.log(`Pairs= ${obj.evens}`);
console.log(`Odds= ${obj.odds}`);