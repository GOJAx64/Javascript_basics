//These looks better in a navegator console
console.clear();
console.log(console);
console.error('This is a error');
console.warn('This is a warning');
console.info('This is a informative message');

let name = 'Alberto', lastName = 'García', age = 22;
console.log('Hi my name is %s %s and I am %d years old',name,lastName,age);

/*console.log(Window); works with a HTML file
console.log(Document);
console.dir(window);
console.dir(document);*/

console.group('Courses');
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');
console.groupEnd();

console.table(Object.entries(console).sort());

const numbers = [1,2,3,4,5],
    vocals = ['a','e','i','o','u'];


const dog = {
    name: 'Kika',
    race: 'Chihuahua',
    age: 9
};

console.table(numbers);
console.table(vocals);
console.table(dog);


console.time('TimeExecution');

const myArray = Array(1000000);
for(let i = 0; i < myArray.length; i++) {
    myArray[i] = i;
}

console.timeEnd('TimeExecution');

for(let i = 0; i < 10; i++) {
    console.count("Iteration");
    console.log(i);
}

let x = 3, y = 2, proveXY = "X is more than Y";

console.assert(x < y, {x,y,proveXY});