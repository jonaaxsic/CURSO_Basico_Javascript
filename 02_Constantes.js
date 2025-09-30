/* En JavaScript, una constante es un identificador cuyo valor
 no puede ser reasignado una vez que ha sido inicializado.
 Para declarar una constante, utilizamos la palabra clave 'const'
*/

// Correcto: Declarar e inicializar
const PI = 3.14159;
console.log(PI); // 3.14159



const nombre = "Elena";
console.log(nombre); // Elena
// Intento de reasignación (causará un error)
// nombre = "Laura"; // TypeError: Assignment to constant variable.


// Con un objeto
const usuario = {
  nombre: "Pedro",
  edad: 30
};

console.log(usuario.nombre); // Pedro

// Puedes cambiar las propiedades internas del objeto
usuario.edad = 31;
usuario.ciudad = "Valparaíso"; // Puedes añadir nuevas propiedades
console.log(usuario); // { nombre: 'Pedro', edad: 31, ciudad: 'Valparaíso' }

// Lo que NO puedes hacer es reasignar 'usuario' a un nuevo objeto
// usuario = { nombre: "Ana", edad: 25 }; por que ya tiene asignado a 'Pedro'

// Con un array
const colores = ["rojo", "verde", "azul"];
console.log(colores); // ["rojo", "verde", "azul"]

// Puedes modificar los elementos del array
colores[0] = "amarillo";
colores.push("morado"); // Puedes añadir nuevos elementos
console.log(colores); // ["amarillo", "verde", "azul", "morado"]

// Lo que NO puedes hacer es reasignar 'colores' a un nuevo array
// colores = ["blanco", "negro"]; por que ya tine los valores:["rojo","verde","azul"]