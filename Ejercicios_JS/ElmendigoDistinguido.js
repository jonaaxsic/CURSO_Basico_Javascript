// Pedimos el precio del traje
let precio = parseFloat(prompt("Ingresa el precio del traje:"));
// Variable para guardar el descuento
let descuento = 0;
// Aplicamos el descuento según el precio
if (precio > 150000) {
  descuento = precio * 0.15; // 15% de descuento
}

if (precio <= 150000) {
  descuento = precio * 0.08; // 8% de descuento
}
// Calculamos el precio final
let precioFinal = precio - descuento;
// Mostramos los resultados
alert("Descuento aplicado: $" + descuento.toFixed(2) + "\nPrecio final: $" + precioFinal.toFixed(2));

console.log("Descuento aplicado: $" + descuento.toFixed(2));
console.log("Precio final: $" + precioFinal.toFixed(2));