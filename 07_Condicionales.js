// Estructuras Condicionales 

/*las estructuras de control que permiten a tu programa.
ejecutar diferentes bloques de código según si una expresión es verdadera (true) o falsa (false).*/

// condicional if (si)
let edad = 18;

// Si la condición es verdadera, se ejecuta el código dentro del bloque.
if (edad >= 18) {
    console.log("¡Puedes votar y eres mayor de edad!");
}
// si la edad es mayor o igual a 18 ejecuta la accion


let alumno = "Juanito";
if (alumno == "Juanito"){
    console.log("el alumnos ingresado es:");
}


// IF ELSE (si , sino)
//Permite ejecutar un código si la condición es verdadera, y otro código si es falsa.

let temperatura = 25;

if (temperatura > 30) {
    console.log("Hace demasiado calor. ¡Enciende el aire!");
} else {
    console.log("La temperatura es agradable.");
}
// muestra si la temperatura es mayor de 30° hace calor si no la temperatura es agradable

// IF con operadores 

/*Los operadores AND (&&) y OR (||) permiten encadenar varias
condiciones simples para construir condiciones complejas*/

let epr1 = 6.5;
let epe1 = 4.5;
if(epr1 >= 4.0 && epe1 >= 4.0) {
alert("El alumno queda eximido");
}


// Ejercicios

// ingrese las condiciones de los if 

let num1 = 2;
let num2 = 12;

if (num1 < num2){
    console.log("numero 1 es mayor que numero 2");
}

if ( num2 < 0){
    console.log("el numero 2 es positivo");
}

if (num1 < 0 || num1 !== 0){
    console.log( " el num1 es negativo o distinto de cero");
}

if ( num1 + 1 < num2){
   console.log( "incrementar en 1 unidad de num1 no lo hace mayor o igual que num2");
}


// If - Else

let Variabledad = 18;
  if (Variabledad >= 18){
    console.log ("Eres Mayor de edad");
  } else{
    console.log("Eres menor de edad");
  }

  