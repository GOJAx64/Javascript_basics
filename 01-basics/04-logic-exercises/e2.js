/*5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

const reverseString = (str) => {
    let localStr = "";
    
    if(typeof str === "string"){
        for(let i = str.length-1; i >= 0; i--) {
            localStr += str[i];
        }
        return localStr;
    }
    else {
        return `${str} is not a string`;
    }
}

console.log('Exercise 5');
console.log(reverseString("Hello world :)"));
console.log(reverseString(3));

/*6) Programa una función para contar el número de veces que se repite una palabra 
en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

const findWord = (str,word) => {
    if(typeof str === "string"){
        console.log(str.match(word).length);
    } 
    else {
        return `${str} is not a string`;
    }
}

str = "Hellor world see you world";
word = /world/g;

console.log('\nExercise 6');
findWord(str,word);


/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

const isPalindrome = (str) => {
    if(typeof str === "string") {
        str = str.toLowerCase();
        str = str.replace(/ /g,''); 
        for(let i = 0, j = str.length-1; i < j; i++, j--) {
            if(str[i] != str[j]){
                return false;
            }
        }
        return true;
    } 
    else {
        return `${str} is not a string`;
    }
}

console.log('\nExercise 7');
console.log(isPalindrome('salas'));
console.log(isPalindrome("Dabale arroz a la zorra el abad"));

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
 pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

 const removePattern = (str,pattern) => {
    if(typeof str === "string" && typeof pattern === "object") {
        str = str.replace(pattern,'');
        return str;
    }
    else {
        return `${str} or ${pattern} are not a string`;
    }
 }

 str = "xyz1, xyz2, xyz3, xyz4 y xyz5";
 pattern = /xyz/g;

 console.log('\nExercise 8');
 console.log(removePattern(str,pattern));