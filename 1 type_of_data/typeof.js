console.log(typeof 4.5) // → number 
console.log(typeof "x") // → string
console.log(typeof true) // → boolean
console.log(typeof false) // → boolean

//undefined is a value for variables that it has not been initialized
let variable;
console.log(typeof variable); // → undefined

//null is a special valor that indicates the ausence of a value or reference
variable = null;
console.log(variable); // → null 
console.log(typeof variable); // → object by (null)

//NaN = Not a  Number, when we make operations between diferents types of variables
variable = "hello" * 3.3;
console.log(variable); // → NaN

variable = {};
console.log(typeof variable)// → object