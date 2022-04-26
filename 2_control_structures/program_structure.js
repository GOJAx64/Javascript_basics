//Cycle of a triangle
let myString = '#';

while(myString.length < 8){
    console.log(myString + '\n');
    myString = myString + '#';
}

//FizzBuzz
let i = 1;

while(i < 101) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }
    else if(i % 3 == 0) {
        console.log('Fizz');
    }
    else if(i % 5 == 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
    i++;
}


//Chessboard
myString = '';
let height = 8; //parameters
let width = 10;

let limit = (height * width) + 1;

for(let row = 0, i = 0; i < limit; i++) {
    if(i % width == 0 && i > 0) {
        if (row == 0) {
            myString = myString + '\n';
            row = 1;
        }
        else {
            myString = myString + '\n ';
            row = 0;
        }
    }
    else if(i % 2 == 0) {
        myString = myString + ' ';
    }
    else{
        myString = myString + '#';
    }
}

console.log(myString);


