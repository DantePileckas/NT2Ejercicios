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