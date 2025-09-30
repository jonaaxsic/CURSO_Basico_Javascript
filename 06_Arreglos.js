// Arrays o Arreglos

/*Un array (o arreglo) es una estructura de datos que permite almacenar varios valores en una sola variable, organizados en posiciones llamadas índices.*/

let colores = ["Rojo", "Verde","Azul",];
let numeros = [ 10,20,30,40];
let arrayMixto = ["jonthan",35,true,null];

// Constructor Arrary (poco comun)
//se usa con variables iniciales 
let frutas = new array("manzana","sandia","pera");

// Acceder a un elemento del array 
/* en JS los arreglos estan idenzados en base 0 , por ende el primer elemento del arreglo se enceunta en el indice 0 el segundo en el 1 y asi sucesivamente.*/

let paises =["Chile","Brasil","Argentina","Uruguay"];

// acceder al primero "Chile"
let primerPais = paises[0];

// acceder a "Uruguay"
let cuartoPais = paises [3];


// Modificar un elemento de un array 
// se usa el indice para midificar el valor 
 let nombres = ["Jonathan","Javier","maria","ana"]

 nombres[2] = "Julieta"; // cambia a "maria" por "Julieta"


// Propiedad .length te dice cuantos elementos tiene el array 

let regiones = ["Coquimbo","Antofagasta","Temuco","Puerto Montt"];

let cantidad = regiones.length;
 // mostrara 4 elementos 

// Acceder al Ultimo elemento 
let ultimaRegion = regiones[regiones.length - 1];
// mostrara "Puerto Montt"

//RECORRER UN ARRAY 

// para recorrer un array se usa un bucle (for)

let platosTipicos =["Pastel Choclo","Empanadas", "Curanto",];

for (let i = 0; 1< platosTipicos.length; i++){
  console.log("el Plato tipico en el indice"+ i +"es" + platosTipicos[i]);
}


//  Bucle for...of  Recomendado para solo acceder los valores de los elementos

let postres = ["pastel", "gelatina", "helado"];

for (let postre of postres) {
  console.log("Me gustaría comer " + postre);
}
// Salida:
// Me gustaría comer pastel
// Me gustaría comer gelatina
// Me gustaría comer helado



// For each()
//Un método de array que ejecuta una función para cada elemento.

let ciudades = ["Madrid", "Barcelona", "Valencia"];

ciudades.forEach(function(ciudad, indice) {
  console.log("Ciudad " + (indice + 1) + ": " + ciudad);
});
// Salida:
// Ciudad 1: Madrid
// Ciudad 2: Barcelona
// Ciudad 3: Valencia