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
        this.race = null;
    }

    sound() {
        console.log(`I'm a dog and my sound it's a bark`);
    }

    bark() {
        console.log('guau guau');
    }

    //We can call this method without an instance of the object
    static whatAreYou() {
        console.log('I am a dog, the best friend of the humans');
    }

    set setRace(race) {
        this.race = race;
    }

    get getRace() {
        return this.race;
    }
}

Dog.whatAreYou();
const rabbit = new Animal('Rabbit','male');
const dog = new Dog('Kika','female','small');

console.log(rabbit);
console.log(dog);

rabbit.sound();
rabbit.greet();

dog.greet();
dog.sound();
dog.bark();
dog.setRace = 'Chihuahua';
console.log(dog.getRace);