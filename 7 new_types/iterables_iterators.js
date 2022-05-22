const iterable = [1, 2, 3, 4, 5];
//const iterable = "Hola Mundo";
//const iterable = new Set([1, 2, 3, 3, 4, 5]);
//const iterable = new Map([["nombre", "jon"], ["edad", 35]]);

//Access to the iterator of the iterable
const iterator = iterable[Symbol.iterator]();
console.log(iterable);
console.log(iterator);

let next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}