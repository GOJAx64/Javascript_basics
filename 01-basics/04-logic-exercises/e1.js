/*1) Programa una función que cuente el número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10.*/

function countCharacters(str) {
    if(typeof str == "string") {
        return str.length;
    } else return 0;
}

console.log('Exercise 1');
console.log(countCharacters("Hello world =)"));
console.log(countCharacters(100));
console.log(countCharacters(null));
console.log(countCharacters(true));

/*2) Programa una función que te devuelva el texto recortado según el número de caracteres 
indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

const sliceString = (str,len) => (str) ? console.log(str.slice(0,len)):console.log("There is no string");;

console.log('\n Exercise 2');
sliceString("Hello world",5);
sliceString("Hello world");
sliceString();

/*3) Programa una función que dada una String te devuelva un Array de textos separados 
por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

const splitString = (str,separetor) => {
    (str) ? console.log(str.split(separetor)) : console.log("There is no string");;
}

console.log('\n Exercise 3');
splitString("Hello world","");
splitString("Hello world"," ");
splitString("Hello world");
splitString();

/*4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/
const repeatString = (str,count) => {
    if(Math.sign(count) === -1) return console.log("The count does not can be negative");
    (str) ? console.log(str.repeat(count)) : console.log("There is no string");
}

console.log('\n Exercise 4');
repeatString("Hello world",-1);
repeatString("Hello world",5);
repeatString("Hello world");
repeatString();