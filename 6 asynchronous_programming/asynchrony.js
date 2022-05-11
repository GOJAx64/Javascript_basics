//Synchrony JavaScript
/*console.log("Begin");

function two() {
  console.log("Two");
}

function one() {
  console.log("One");
  two();
  console.log("Three");
}

one();
console.log("End");*/

//Asynchrony JavaScript
console.log("Inicio");
function dos() {
  setTimeout(function () {
    console.log("Dos");
  }, 1000);
}

function uno() {
  setTimeout(function () {
    console.log("Uno");
  }, 0);
  dos();
  console.log("Tres");
}

uno();
console.log("Fin");