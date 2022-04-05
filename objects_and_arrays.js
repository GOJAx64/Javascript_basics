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

let numbers = numbersInRange(5,1,-1);
console.log(numbers);
console.log(sumOfNumbers(numbers));