// Solicita al usuario que ingrese los gastos estimados para cada categoría.
// Calcula el coste total sumando todos los gastos.
// Muestra el coste total al usuario.
// Ejemplo de entrada:
// Gastos de alojamiento: 200€, 
// Gastos de alimentación: 150€, 
// Gastos de entretenimiento: 100€.
//Salida esperada:
// El coste total del viaje es 450€.

//variable alojamiento
let alojamiento = parseFloat(promt("Ingrese el valor del alojamiento"));

// variable alimentación
let alimentación = parseFloat(promt("Ingrese el valor de la alimentación"));

// variable entretenimiento
let entretenimiento = parseFloat(promt("Ingrese el valor de la entretenimiento"));

let costeTotal = 
alimentación + alimentación + entretenimiento;
alert("El coste total del viaje es " + costeTotal.toFixed(2) + "$");





