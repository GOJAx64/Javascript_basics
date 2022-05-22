/*18) Programa una función que dada una cadena de texto cuente el número de vocales 
y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

console.log("Exercise 18");

const vocalAndConsonants = string => {
    let consonants = 0;
    let vocals = 0;

    string = string.toLocaleLowerCase();

    for(let letter of string) {
        if(/[aeiouáéíóüú]/.test(letter)) {
            vocals++;
        } else {
            consonants++;
        }
    }
    console.log(`Consonants = ${consonants}, Vocals = ${vocals}`);
}

vocalAndConsonants("Hello world");
vocalAndConsonants("Hola mundo");

/*19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/
const isValidName = name => (/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(name)) ? true: false;

console.log("\nExercise 19");
console.log(isValidName("Alberto García"));
console.log(isValidName("Alberto García3"));
console.log(isValidName("Alberto García@"));

/*20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.*/

const isValidEmail = email => {
    let expresion = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (expresion) ? true : false;
}

console.log("\nExercise 20");
console.log(isValidEmail("jonmircha@gmail.com"));
console.log(isValidEmail("beto@gmailcom"));