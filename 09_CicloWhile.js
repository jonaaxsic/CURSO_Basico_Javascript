/* while (condiconal) {
   codigo que se ejecuta mientas la condicion sea true(verdadero)
} 
*/

let contador = 1; 

 while (contador <= 5); {
  console.log( "contador:" , contador);
    contador++; 
  
 }

 // condicion de entrada  de usuario 
 let password = "esomismo123";
 let intento = "";

 while (intento !== password){
  intento =prompt("ingresa la contraseña");
 }
 console.log("Acceso Correcto , Welcome");

  // Ejercicio 1
  // Crear un programa que solicite al usuario ingresar números hasta que ingrese un número negativo. Al finalizar, mostrar la suma de todos los números ingresados (excluyendo el número negativo).
  let numero = 0;
  let suma = 0;
  
// Condicion de entrada
  while (numero >= 0) {
    numero = parseInt(prompt("Ingresa un número (número negativo para terminar):"));
    if (numero >= 0) {
      suma += numero;
    }   
  }
  console.log("La suma de los números ingresados es:", suma);


  // Ejercicio 2
  // Simular una caja registradora que permita ingresar los precios de varios productos y calcule el total a pagar. El proceso termina cuando se ingresa un precio negativo.
  let totalPagar = 0;
  let precioProducto = 0;

  // Condicion de entrada
  while (precioProducto >= 0) {
    precioProducto = parseFloat(prompt("Ingresa el precio del producto (número negativo para terminar):"));
    if (precioProducto >= 0) {
      totalPagar += precioProducto;
    }
  }
  console.log("El total a pagar es:", totalPagar);

