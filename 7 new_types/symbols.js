let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id === id2)
console.log(id, id2);
console.log(typeof id, typeof id2);

const NAME = Symbol("NAME");
const GREET = Symbol("GREET");

const person = {
    [NAME]: "Beto",
    edad: 35
};

console.log(person);
person.NAME = "Alberto García"
console.log(person);
console.log(person.NAME);
console.log(person[NAME]);

person[GREET] = function () {
    console.log(`Hola`);
}

console.log(person);
person[GREET]();

for (let propiedad in person) {
    console.log(propiedad);
    console.log(person[propiedad]);
}
console.log(Object.getOwnPropertySymbols(person));