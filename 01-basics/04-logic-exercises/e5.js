/*15) Programa una función para convertir números de base binaria a decimal y viceversa,
pe. miFuncion(100,2) devolverá 4 base 10.*/

const conversion = (number,base) => base === 2 ?  parseInt(number,base) : parseInt(number.toString(2));

console.log("Exercise 15");
console.log(conversion(100,2));
console.log(conversion(4,10));

/*16) Programa una función que devuelva el monto final después de aplicar un descuento 
a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.*/

const discount = (amount, percentage) =>  amount - (amount * (percentage/100));


console.log("\nExercise 16");
console.log(discount(1000,20));
console.log(discount(500,20));
console.log(discount(750,20));
console.log(discount(1000,50));
console.log(discount(10,20));
console.log(discount(666,23));

/*17) Programa una función que dada una fecha válida determine cuantos años han pasado 
hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/

const yearsHasPassed = date => Math.floor((new Date().getTime()-date.getTime())/(1000*60*60*24*365));

console.log("\nExercise 17");
console.log(yearsHasPassed(new Date(1950,1,2)));