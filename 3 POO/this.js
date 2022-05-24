console.log(this);
//console.log(window);
//console.log(this === window);

this.name = "Global context";
console.log(this.name);

function print() {
    console.log(this.name);
}

print();
const obj = {
    name: "Object context",
    print: function () {
        console.log(this.name);
    }
}

obj.print();
const obj2 = {
    name: "Contexto Objeto 2",
    print
}

obj2.print();
const obj3 = {
    name: "Contexto Objeto 3",
    print: () => {
    console.log(this.name);
    }
}

obj3.print();

function Person(name) {
    const that = this;
    //this.name = name;
    that.name = name;
    //return console.log(this.name);
    //return function () {
    //console.log(this.name);
    //}
    //return () => console.log(this.name);
    return function () {
        console.log(that.name);
    }
}

let beto = new Person("Beto");
beto();