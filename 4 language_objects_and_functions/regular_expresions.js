let string = "Lorem ipsum dolor 4sit amet consectetur adipisicing elit. Ducimus deleniti maiores corrupti adipisci numquam, blanditiis voluptatem commodi dignissimos? Quod architecto quisquam ea hic? Quos ab laborum amet sequi, architecto eveniet.";

let exp1= new RegExp('Lorem','ig');
console.log(exp1.test(string));
console.log(exp1.exec(string));

//let exp2 = /Lorem/ig;
let exp2 = /[0-9]/ig;
console.log(exp2.test(string));
console.log(exp2.exec(string));