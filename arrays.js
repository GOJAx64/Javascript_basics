//Sum of a range
const numbersInRange = (begin, end, step) => {
    let numbers = [];
    let i = begin;

    if(!step)  step = 1

    if(begin < end) {
        while(i <= end) {
            numbers.push(i);
            i += step;
        }
    }
    else{
        while(i >= end) {
            numbers.push(i);
            i += step;
        }
    }
    return numbers;
}

const sumOfNumbers = (numbers) => {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

let numbers = numbersInRange(1,5);
//console.log(numbers);
//console.log(sumOfNumbers(numbers));


//Reversing an array
const reversingArray = array => {
    let newArray = [];
    for(let i = array.length-1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

const reversingArrayinPlace = array => {
    let aux;
    for(let i = 0, j = array.length-1; i < j; i++, j--) {
        aux = array[j];
        array[j] = array[i];
        array[i] = aux;
    }
    return array;
}

console.log(reversingArray(numbers));
console.log(numbers);
console.log(reversingArrayinPlace(numbers));
console.log(numbers);