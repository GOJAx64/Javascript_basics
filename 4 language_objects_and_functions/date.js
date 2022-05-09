console.log(Date());

let date = new Date();
console.log(date);
//Day of the month
console.log(`Day of the current month: ${date.getDate()}`);
//Days of the week S M T W T F S -> 0 1 2 3 4 5 6
console.log(`Day (Sunday to Saturday 0-6): ${date.getDay()}`);
//Month -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(`Month: ${date.getMonth()}`);
console.log(`Year: ${date.getFullYear()}`);
console.log(`Hour: ${date.getHours()}`);
console.log(`Minutes: ${date.getMinutes()}`);
console.log(`Seconds: ${date.getSeconds()}`);
console.log(`Milliseconds: ${date.getMilliseconds()}`);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.getTimezoneOffset());
console.log(date.getUTCDate()); //Day in London UTC 01
console.log(date.getUTCHours()); //Hours in London
console.log(Date.now()); // Seconds has passed since January 1st, 1970
console.log(new Date(2000,0,2));
//moment.js good library