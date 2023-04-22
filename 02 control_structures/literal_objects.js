/*  With literal objects: a object can get the properties based on a set of 
    variables in the program with not need to declare its values inside the 
    object and taken the values of the variables. */
let forename = "kika";
let age = 8;

const dog = {
    forename,
    age,
    bark() {
        console.log("Wuau wuau!!!");
    }
}

console.log(dog);
dog.bark();