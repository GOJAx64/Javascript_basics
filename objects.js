/*//This is a prototype where we can create an object with especifically features
//The "prototype" rabbit acts as a container for properties that are shared by all rabbits.
let prototypeRabbit = {
    talk(line) {
        console.log('The rabbit ' + this.type + ' says '  + line);
    }
};

let killerRabbit = Object.create(prototypeRabbit); 
killerRabbit.type = "killer"; 
killerRabbit.talk("SKREEEE!");


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
 

//Maps
let ages = new Map(); 
ages.set("Boris", 39); 
ages.set("Liang", 22); 
ages.set("Júlia", 62);

console.log('Júlia is ' +ages.get("Júlia") + ' years old');
console.log("Jacks's age is known?", ages.has("Jack"));
console.log(ages.has("toString"));*/


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
    
}