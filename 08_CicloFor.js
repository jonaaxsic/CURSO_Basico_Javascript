// Ciclo For 

let mensaje = "Mensaje dentro de un bucle";
for(var i = 0; i < 5; i++) {
 alert(mensaje + " " + i);
}
// mostrara el mensajes 4 veces ya que la condiciones en < "menor" a 5 



// recorrer el array y mostrar el mes de cumpleaños
let mesesDelAño = ["enero", "febrero", "Marzo","Abril"];

for (let i = 0; 1< mesesDelAño.length; i++);{
  console.log("Estoy de cumpleaños" + i + "es"+ mesesDelAño[3]);
}

// Usando < menor que 
for (let i = 0; i<5; i++){
  console.log("i es menor que 5", i ); // imprime de 0 a 4
}


// Usando mayor que >
for ( let i = 5; i > 0; i--){
  console.log(" i es mayor que 0:" , i); // imprime de 5 hasta 1
}



// Usando == (igual a)
for ( let i = 0; i<10; i++){
  if (i == 5){
    console.log("i es igual a 5"); // solo imprime cuando i sea = 5
  }
}

// Usando !== distinto
for (let i = 0; i < 5; i++){
  if ( i !== 2){
    console.log("i es distinto de 2", i); // Imprime todos lo valores menos el 2
  }
}

// Usando && (and)
for (let i = 0; i < 10; i++) {
  if (i > 2 && i < 7) {
    console.log("i está entre 3 y 6:", i); // Solo imprime los valores que cumplen ambas condiciones (i > 2 y i < 7)
  }
}
