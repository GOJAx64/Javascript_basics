function Animal(name,gender) {
    this.name = name;
    this.gender = gender;
}

Animal.prototype.sound = function() {
    console.log(`I'm alive`);
}

Animal.prototype.greet = function() {
    console.log(`Hi my name is ${this.name}`);
}

const rabbit = new Animal('Rabbit','male');
const dog = new Animal('Dog','female');

console.log(rabbit);
console.log(dog);

rabbit.sound();
dog.greet();