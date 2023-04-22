function Animal(name,gender) {
    this.name = name;
    this.gender = gender;
}

Animal.prototype.sound = function() {
    console.log(`I'm alive and my name is ${this.name}`);
}

Animal.prototype.greet = function() {
    console.log(`Hi my name is ${this.name}`);
}

//prototypical inheritance
function Dog(name,gender,size) {
    this.super = Animal;
    this.super(name,gender);
    this.size = size;
}

//We have to assing an instance of the prototype to inheritance
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

//override
Dog.prototype.sound = function() {
    console.log(`I'm a dog and my sound is a bark`);
}

Dog.prototype.bark = function() {
    console.log('guau guau');
}

const rabbit = new Animal('Rabbit','male');
const dog = new Dog('Kika','female','small');

console.log(rabbit);
console.log(dog);

rabbit.sound();
dog.greet();
dog.sound();
dog.bark();