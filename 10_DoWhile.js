// Ciclo do while 

// sintaxis 
/* 
 do {
  Codigo que se ejecuta almenos una vez
 } while {Condicion};

*/


// ejemplo basicos 

let numero = 1;
// se ejecuta la variable numero  y despues evalua la condicion
do {
  console.log("numero:",numero);
  numero++;
  // evalua la condicion y  la ejecuta hasta que sea < o = a 5
} while (numero <= 5); 

let valorX = 10;

while ( valorX < 5){
  console.log("esto no se ejecuta");
}

do {
  console.log("esto se ejecuta al menos una vez");
} while( valorX < 5);
// la salida muestra que se ejecuta al menos una vez

// Ejercicio 1 
// Sumar numeros hasta que el total supere los 50

let sumaTotal = 0;
do {
  let numero = parseInt(prompt("ingrese un valor para sumar:"));
  sumaTotal += numero;
  console.log("sumaTotal:", sumaTotal);
} while (sumaTotal <= 50);
// la salida muestra que se ejecuta al menos una vez
console.log ("El total de la suma es:", sumaTotal);


// ejercio 2 
// Simular un dado hasta optener el numero 6

let dado;
do {
  dado = Math.floor(Math.random() * 6) 
  + 1;
  console.log("tiraste el dado", dado);
} while (dado !== 6);
console.log("sacaste un 6 bien");
