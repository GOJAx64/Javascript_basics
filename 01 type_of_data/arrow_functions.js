/*  Declared function:
    hello(); // We can call the function previous definition in the document
    function hello() {
        console.log('Hello');
    }

    Expressed function:
    const greet = function() {
        console.log('Hello');
    }
    greet(); // We assing a anonymous function to a variable/const,
                we can't call it before the definition in the document
*/

const numbers = [1,2,3,4,5];
numbers.forEach((item,index) => console.log(`${item} is at ${index} position`));


const add = (a,b) => a + b; //implicit return
console.log(add(2,3));

const greet = person => console.log(`Hi ${person}`);
greet('Alberto');

const aFunctionWithSomeLines = () => {
    console.log('One');
    console.log('Two');
    console.log('Three');
}

// We don't have to use arrow functions in objects, because take a global context,
// and ignore the local context of its object.