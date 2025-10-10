/* Solicita al usuario que indique la edad de su perro en año calculadoraDeGastos.js
Calcula la edad del perro en años humanos multiplicando la edad del perro por 7.*
Muestra la edad del perro en años humanos al usuario.
Ejemplo de entrada: Edad del perro: 5 años.
Salida esperada: La edad del perro en años humanos es 35 años. 
*/


let edadPerro = parseInt(prompt("Indica la edad de tu perro en años: "));
let edadHumana = edadPerro * 7;
console.log("La edad de tu perro en años humanos es: " + edadHumana + " años");
