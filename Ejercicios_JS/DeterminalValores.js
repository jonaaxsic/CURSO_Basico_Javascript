// Pedimos al usuario las tres cantidades
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));


// Determinamos cuál es el mayor
let mayor;
if (num1 > num2 && num1 > num3) {
  mayor = num1;
} else if (num2 > num1 && num2 > num3) {
  mayor = num2;
} else if (num3 > num1 && num3 > num2) {
  mayor = num3;
} else {
  mayor = "Los números son iguales o hay empates.";
}


alert("El número mayor es: " + mayor);
console.log("El número mayor es: " + mayor);

 //**********************************
 
// lo mismo pero de otra forma 
// script.js

let num4 = parseFloat(prompt("Ingresa el primer número:"));
let num5 = parseFloat(prompt("Ingresa el segundo número:"));
let num6 = parseFloat(prompt("Ingresa el tercer número:"));

let numeroMayor = num4; // suponemos que el primero es el mayor

if (num5 > mayor) {
  mayor = num5;
}
if (num6 > mayor) {
  mayor = num6;
}

alert("El número mayor es: " + mayor);
console.log("El número mayor es: " + mayor);