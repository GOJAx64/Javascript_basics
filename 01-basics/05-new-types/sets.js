const numbers = new Set([1,2,3,4,4,2,4,5]);

console.log(numbers);
console.log(numbers.size);

numbers.add(5);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(9);
numbers.add(5);
numbers.add(true);
numbers.add(true);
numbers.add(false);
numbers.add(false);

console.log(numbers);

for(item of numbers) {
    console.log(item);
}

numbers.forEach(item => console.log((item)));

let array = Array.from(numbers);

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

numbers.delete(1);
numbers.delete(2);
numbers.delete(3);
numbers.delete(true);

console.log(numbers);
console.log(numbers.has(1));
console.log(numbers.has(2));
console.log(numbers.has(4));
console.log(numbers.has(5));
console.log(numbers.has(false));

numbers.clear();
console.log(numbers);