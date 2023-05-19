console.log(this);
this.place = "Global Context";

function greet(greets, whom) {
    console.log(`${greets} ${whom} from ${this.place}`);
}

greet("Hello", "kika");
const obj = {
    place: "Object context"
}

greet.call(obj, "Hello", "Beto");
greet.call(null, "Hello", "Beto");
greet.call(this, "Hello", "Beto");
greet.apply(obj, ["Goodbye", "García"]);
greet.apply(null, ["Goodbye", "García"]);
greet.apply(this, ["Goodbye", "García"]);

this.name = "Window";

const persona = {
    name: "Beto",
    greet: function () {
    console.log(`Hello ${this.name}`)
    }
}

persona.greet();
const anotherPerson = {
    greet: persona.greet.bind(this)
}

anotherPerson.greet();