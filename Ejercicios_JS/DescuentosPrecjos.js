/*
Solicita al usuario que inserte el precio original del producto.
Solicita al usuario que inserte el porcentaje de descuento a aplicar (por ejemplo, 10 para un descuento del 10%).
Utiliza una función para calcular el precio final después de aplicar el descuento.
Muestra el precio final al usuario.
*/



/* function para calcula el precio final con descuento con 2 parametros precioOriginal y descuentos
*/
function calPrecioFinal(precioOriginal, descuento) {
  
  // Calcula la cantidad con descuento
  let cantDescuento = (precioOriginal * descuento) / 100;
  // Calcula el precio final restando el descuento al precio original
  let precioFinal = (precioOriginal - cantDescuento );
  // Retorna el precio final redondeado a dos decimales
  return precioFinal.toFixed(2);
}

// Solicitar al usuario que inserte el precio original del producto
let precioOriginal = parseFloat(prompt("Ingrese el precio Origonal: "));

// solicitar el % de descuento a aplicar 
let descuentos = parseFloat(prompt("Ingrese el % de descuento a aplicar :"));

// calcular precio final llamamdo a la funcion
let precioFinal = calPrecioFinal(precioOriginal, descuento);

// Muestra el precio final al usuario
console.log("El precio final del producto después de aplicar un descuento del " + descuento + "% es: " + precioFinal + " euros.");
