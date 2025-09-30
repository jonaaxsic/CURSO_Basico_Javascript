// TIPOS DE DATOS PRIMITIVOS EN JAVASCRIPT

// numeros:
let numero = 1;       // numero int
let precio = 99.99;   // Decimal double
let temperatura = -5; //Negativo int


// string cadena de texto
let nombre = "jorge Nitales";
let saludo = 'Hola, ¿como estas?'
let mensajeCompleto = `Bienvenido, ${nombre}. Hoy es un buen día.`; // Plantilla literal con interpolación


//Boleanos
let esMayorDeEdad = true; // booleano verdadero o falso
let tienePermiso = false;
let estaLogeado = false;

//Undefined
let miVariable;
console.log(miVariable); // Salida: undefined

function noRetornaNada(){
  // no har 'return'
}
let resulrado = noRetornaNada();
console.log(resulrado); // salida undefined

// Null
let valorNulo = null;
console.log(valorNulo); // Salida: null

let elementoEncontrado = document.getElementById('no-existe');
console.log(elementoEncontrado); 
// Salida: null (si el elemento no se encuentra)
