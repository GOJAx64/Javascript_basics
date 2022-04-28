//Strict mode
console.log("******* use strict *******");
function puedesDetectarElProblema() {
    "use strict";
    for (let contador = 0; contador < 10; contador++) { // <- Contador is not defined
        console.log("Feliz feliz"); 
    }
}  
puedesDetectarElProblema();

console.log("\n\n******* try-catch-finally *******");
function pedirDireccion(pregunta) {
    //let resultado = prompt(pregunta);  <- prompt is not defined
    if (resultado.toLowerCase() == "izquierda") return "I"; 
    if (resultado.toLowerCase() == "derecha") return "D"; 
    throw new Error("Dirección invalida: " + resultado);
}
    
function mirar() {
    if (pedirDireccion("Hacia que dirección quieres ir?") == "I") {
        return "una casa"; 
    } else {
        return "dos osos furiosos"; 
    }
}

try {
    console.log("Tu ves", mirar());
} catch (error) {
    console.log("Algo incorrecto sucedio: " + error);
} finally {
    console.log("Nos vemos vaquero del espacio");
}

//retry
console.log("\n\n******* Retry exercise *******");
function multiplication(x, y) {
    if (Math.random() < 0.21) {
        return x * y;
    } else {
        throw new TypeError("MultiplierUnitFailure");
    }
}

while(true) {
    try {
        console.log(multiplication(2,5));
        break;
    } catch(error) {
        console.log(error.message);
    }
}