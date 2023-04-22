function* iterable() {
    yield "hello";
    console.log("Hello console");
    yield "Hello 2";
    console.log("Continue with more instructions from our code");
    yield "Hello 3";
    yield "Hello 4";
}

let iterator = iterable();
for (let y of iterator) {
    console.log(y);
}

const arr = [...iterable()]; //spread operator
console.log(arr);


function square(value) {
    setTimeout(() => {
        return console.log({ value, resultado: value * value });
    }, Math.random() * 1000);
}

function* generator() {
    console.log("Start Generator");
    yield square(0);
    yield square(1);
    yield square(2);
    yield square(3);
    yield square(4);
    yield square(5);
    console.log("Finish Generator");
}

let gen = generator();
for (let y of gen) {
    console.log(y);
}