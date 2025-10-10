let suma = 0;

// Pedimos las 5 notas
for (let i = 1; i <= 5; i++) {
  let nota = parseFloat(prompt("Ingresa la nota " + i + ":"));
  suma += nota;
}

// Calculamos el promedio
let promedio = suma / 5;

// Mostramos si aprueba o reprueba
if (promedio >= 4.0) {
  alert("Promedio: " + promedio.toFixed(2) + " probado");
} else {
  alert("Promedio: " + promedio.toFixed(2) + " Reprobado");
}