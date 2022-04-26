//Strict mode
/*function puedesDetectarElProblema() {
    "use strict";
    for (let contador = 0; contador < 10; contador++) { // <- Contador is not defined
        console.log("Feliz feliz"); 
    }
}
    
puedesDetectarElProblema();

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
}

function transferir(desde, cantidad) {
    if (cuentas[desde] < cantidad) return;
    let progreso = 0;
    try {
        cuentas[desde] -= cantidad;
        progreso = 1;
        cuentas[obtenerCuenta()] += cantidad;
        progreso = 2;
    } finally {
        if (progreso == 1) {
            cuentas[desde] += cantidad;
        }
    } 
}
*/

//retry
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

/*const caja = {
    bloqueada: true,
    desbloquear() { this.bloqueada = false; },
    bloquear() { this.bloqueada = true;  },
    _contenido: [],
    get contenido() {
        if (this.bloqueada) throw new Error("Bloqueada!");
        return this._contenido;
    }
 };

 function */

    

