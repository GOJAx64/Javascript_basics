/*15) Programa una función para convertir números de base binaria a decimal y viceversa,
pe. miFuncion(100,2) devolverá 4 base 10.*/


/*16) Programa una función que devuelva el monto final después de aplicar un descuento 
a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.*/

const discount = (amount, percentage) =>  amount - (amount * (percentage/100));

console.log(discount(1000,20));
console.log(discount(500,20));
console.log(discount(750,20));
console.log(discount(1000,50));
console.log(discount(10,20));
console.log(discount(666,23));

/*17) Programa una función que dada una fecha válida determine cuantos años han pasado 
hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/