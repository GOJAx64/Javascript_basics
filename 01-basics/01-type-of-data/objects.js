//This is a prototype where we can create an object with especifically features
//The "prototype" rabbit acts as a container for properties that are shared by all rabbits.
let prototypeRabbit = {
    talk(line) {
        console.log('The rabbit ' + this.type + ' says '  + line);
    }
};

let killerRabbit = Object.create(prototypeRabbit); 
killerRabbit.type = "killer"; 
killerRabbit.talk("SKREEEE!");

const myObject = {
    name: 'object',
    count: 1,
    greets() {
        console.log("Hello");
    },
    sayYourName() {
        console.log(`Hello my name is ${this.name}`);
    }
}

console.log(myObject.name);
console.log(myObject['count']);
myObject.greets();
myObject.sayYourName();
console.log(Object.keys(myObject));
console.log(Object.values(myObject));
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nombre'));
console.log(`\n\n *******Exercises*****`);
//Classes
class Rabbit {
    constructor(type) {
      this.type = type;
    }
    talk(line) {
        console.log('The rabbit ' + this.type + ' says ' + line);
    } 
}

let killerRabbit2 = new Rabbit("killer"); 
let blackRabbit = new Rabbit("black");

blackRabbit.talk("hello");

//A type of vector
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    more(point) {
        let newPoint = [];
        newPoint.push(this.x + point[0]);
        newPoint.push(this.y + point[1]);

        return newPoint;
    }

    less(point) {
        let newPoint = [];
        newPoint.push(this.x - point[0]);
        newPoint.push(this.y - point[1]);

        return newPoint;
    }

    get longitud() {
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
    }
}

let point = new Vector(2,2);
console.log(point.more([2,2]));
console.log(point.longitud);


class Set {
    constructor() {
        this.items = [];
    }

    add(item){
        if(!this.has(item)) {
            this.items.push(item);
        }
    }

    delete(item) {
        let index = this.items.indexOf(item);
        
        if(index != -1) {
            this.items.splice(index,1);
        }
    }

    has(item) {
        let index = this.items.indexOf(item);

        if(index != -1) {
            return true;
        } else {
            return false;
        }
    }

    toString() {
        return this.items.toString();
    }

    from() {
        let iterator = this.items[Symbol.iterator]();
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.next());
    }
}

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(4);
mySet.add(1);
console.log(mySet.toString());
mySet.delete(5);
mySet.delete(1);
console.log(mySet.toString());
mySet.from();
console.log(mySet.has(1));
console.log(mySet.has(2));
console.log(mySet.has(5));