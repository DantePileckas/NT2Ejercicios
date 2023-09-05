//Ctrl + K, J

//Información
const personajesSimpsons = [
{ nombre: "Homero", edad: 39, rol: "Padre" },
{ nombre: "Marge", edad: 36, rol: "Madre" },
{ nombre: "Bart", edad: 10, rol: "Hijo" },
{ nombre: "Lisa", edad: 8, rol: "Hija" },
{ nombre: "Maggie", edad: 1, rol: "Hija" },
{ nombre: "Ned", edad: 35, rol: "Vecino" },
{ nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
{ nombre: "Milhouse", edad: 10, rol: "Amigo" },
{ nombre: "Nelson", edad: 12, rol: "Bravucón" },
{ nombre: "Martin", edad: 10, rol: "Compañero de clase" }
];

//Ejercicio 1 - Mostrar personajes menores de 18 años
const personajesMenoresDe18 = personajesSimpsons.filter(personaje => personaje.edad < 18);

console.log(personajesMenoresDe18);

//Ejercicio 2 - Sumar edades de los personajes

const sumaEdades = personajesMenoresDe18.reduce((totalEdad, personaje) => totalEdad + personaje.edad, 0);

console.log("La suma de las edades de los personajes menores de 18 años es:", sumaEdades);

//Ejercicio 3: Obtener los nombres de los personajes
