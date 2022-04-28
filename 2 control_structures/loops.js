//JavaScript has the do-while, while and for loops

const mySelf = {
    name: "Alberto",
    lastName: "Garcia",
    age: 22
}

for(const property in mySelf) {
    console.log(`Key: ${property}, Value: ${mySelf[property]}`);
}

const array = [1,2,3,4,5,6,7,8,9,0];

for(const item of array) {
    console.log(item);
}

let string = "Hello world";

for(const char of string) {
    console.log(char);
}

console.log("\n\n******* break *******");
for(let i = 0; i < array.length; i++) {
    if(i == 5) {
        break;
    }
    console.log(array[i]);
}

console.log("\n\n******* continue *******");
for(let i = 0; i < array.length; i++) {
    if(i == 5) {
        continue;
    }
    console.log(array[i]);
}
