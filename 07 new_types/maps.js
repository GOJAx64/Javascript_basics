//Maps
let ages = new Map(); 
ages.set("Boris", 39); 
ages.set("Liang", 22); 
ages.set("Júlia", 62);

console.log('Júlia is ' +ages.get("Júlia") + ' years old');
console.log("Jacks's age is known?", ages.has("Jack"));
console.log(ages.has("toString"));

for( let [key,value] of ages) {
    console.log(`Key= ${key}, value= ${value}`);
}