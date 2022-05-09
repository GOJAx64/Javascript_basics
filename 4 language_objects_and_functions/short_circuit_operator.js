//Short circuit OR - when the left value always can validated to true, 
//it will be the value that will be loaded
function greet(name) {
    name = name || "Unknown";
    console.log(`Hello ${name}`);
}
console.log('OR')
greet('Alberto');
greet();
console.log(false || "Hello");
console.log(undefined || "Hello");
console.log(null || "Hello");
console.log(0 || "Hello");
console.log(-2 || "Hello");
console.log(19 || "Hello");
console.log(true || "Hello");

//Short circuit AND - when the left value always can validated to false, 
//it will be the value that will be loaded
console.log('\nAND')
console.log(false && "Hello");
console.log(undefined && "Hello");
console.log(null && "Hello");
console.log(0 && "Hello");
console.log(-2 && "Hello");
console.log(19 && "Hello");
console.log(true && "Hello");