/*24) Programa una función que dado un arreglo de números devuelva un objeto 
con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente 
y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá 
{ asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/

const sortArrays = numbers => {
  return {
    asc: numbers.map(item => item).sort(),
    desc: numbers.map(item => item).sort().reverse()
  }
}

console.log('Exercise 24');

let arrays = sortArrays([7,5,7,8,6]);
console.log(`Ascending sort: ${arrays.asc} and Descending sort: ${arrays.desc}`)


/*25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. 
miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/

const deleteDuplicates = items =>  Array.from(new Set(items)) 
console.log('\nExercise 25');
console.log(deleteDuplicates(["x", 10, "x", 2, "10", 10, true, true]));

/*26) Programa una función que dado un arreglo de números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/

const average = numbers => {
    let sum = 0;
    numbers.forEach(element => sum += element);
    return sum / numbers.length;
}

console.log('\nExercise 26');
console.log(average([9,8,7,6,5,4,3,2,1,0]));

/* 27) Programa una clase llamada Pelicula.
    La clase recibirá un objeto al momento de instanciarse con los siguentes datos: 
    id de la película en IMDB, titulo, director, año de estreno, país o países de origen, 
    géneros y calificación en IMBD.
        - Todos los datos del objeto son obligatorios.
        - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y 
          los 7 restantes números.
        - Valida que el título no rebase los 100 caracteres.
        - Valida que el director no rebase los 50 caracteres.
        - Valida que el año de estreno sea un número entero de 4 dígitos.
        - Valida que el país o paises sea introducidos en forma de arreglo.
        - Valida que los géneros sean introducidos en forma de arreglo.
        - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
        - Crea un método estático que devuelva los géneros aceptados*.
        - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
        - Crea un método que devuelva toda la ficha técnica de la película.
        - Apartir de un arreglo con la información de 3 películas genera 3 instancias de 
          la clase de forma automatizada e imprime la ficha técnica de cada película.
    * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, 
      Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, 
      Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, 
      War, Western.
    */