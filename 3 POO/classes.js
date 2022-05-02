class Animal {
    constructor(name,gender) {
        this.name = name;
        this.gender = gender;
    }
    
    sound() {
        console.log(`I'm alive`);
    }
    
    greet() {
        console.log(`Hi my name is ${this.name}`);
    }
}

class Dog extends Animal {
    constructor(name,gender,size) {
        super(name,gender);
        this.size = size;
    }

    sound() {
        console.log(`I'm a dog and my sound it's a bark`);
    }

    bark() {
        console.log('guau guau');
    }
}

const rabbit = new Animal('Rabbit','male');
const dog = new Dog('Kika','female','small');

console.log(rabbit);
console.log(dog);

rabbit.sound();
rabbit.greet();

dog.greet();
dog.sound();
dog.bark();