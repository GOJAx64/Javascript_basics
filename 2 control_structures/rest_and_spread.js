function add(a,b,...c) { //Rest parameter [...n]
    let result = a + b;

    c.forEach(function(n){ //Anonymous function
        result += n;
    });

    return result;
}
console.log('****** REST PARAMETER ******')
console.log(add(1,2));
console.log(add(1,2,3));
console.log(add(1,2,3,4));
console.log('\n\n ****** SPREAD OPERATOR ******')
const arr1 = [0,1,2,3,4];
const arr2 = [5,6,7,8,9];

const arr3 = [arr1,arr2]; 
console.log(arr3);

const arr4 = [...arr1,...arr2]; // spread operator
console.log(arr4);

