// OBJETOS


 // 1) Creando un objeto que representa a una persona en una constante
const persona = {
  nombre: "Ana",
  edad: 28,             
  esEstudiante: true,   
  hobbies: ["leer", "cocinar", "programar"], 
  direccion: 
  {// Propiedad 'direccion' con otro objeto anidado
      calle: "Avenida Siempre Viva",
      numero: 742,
      comuna: "Providencia" // Recordando nuestra ubicación en Santiago :)
  },


   // funcion saludar 
  saludar: function() { // Propiedad 'saludar' con una función (método)
    console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años." + " soy de la comuna de " + this.direccion.comuna);
  }
};

 // salida de todos los datos de la persona 
console.log(persona);

//salida con parametros 
console.log(persona.edad); // salida la edad 
console.log(persona.nombre); // salida el nombre de la persona 
/****************************************************************/


// 2) Notación de corchetes ([]): Útil cuando el nombre de la propiedad es dinámico

console.log(persona["esEstudiante"]); // Salida: true

const prop = "edad";
console.log(persona[prop]);// Salida: 28 (usando una variable para el nombre de la propiedad)

/* Si tuvieras una propiedad con un espacio (no recomendado, pero posible)
const otroObjeto = { "nombre completo": "Juan Soto" };
 console.log(otroObjeto["nombre completo"]);*/
/****************************************************************/

 

// 3) modificacion de propiedades 

 // Modificar una propiedad existente
persona.edad = 29;
console.log(persona.edad); // Salida: 29

// Añadir una nueva propiedad
persona.email = "ana@ejemplo.com";
console.log(persona.email); // Salida: ana@ejemplo.com

// También puedes usar la notación de corchetes para modificar/añadir
persona["esEstudiante"] = false;
console.log(persona.esEstudiante); // Salida: false

// eliminar una propieda de un objeto 
delete persona.email;
console.log(persona.email); // salida undefined
/****************************************************************/

// 4) objetos como array 
const productos = [
  { id: 1, nombre: "Laptop", precio: 1200, stock: 10 },
  { id: 2, nombre: "Mouse", precio: 25, stock: 50 },
  { id: 3, nombre: "Teclado", precio: 75, stock: 30 }
];
console.log(productos[0].nombre); // Accede al nombre del primer producto: Salida: Laptop
console.log(productos[2].precio); // Accede al precio del tercer producto: Salida: 75
// Iterar sobre un array de objetos (¡un adelanto de bucles!)
console.log("\nLista de Productos:");
for (let i = 0; i < productos.length; i++) {
  console.log(`- ${productos[i].nombre} ($${productos[i].precio})`);
}
/* Salida:
- Laptop ($1200)
- Mouse ($25)
- Teclado ($75)
*/

/****************************************************************/

// ejercicio 1:  crear objeto 'libro' 
const libro = {
  titulo:" Cien años de soledad",
  autor: "Gabriel Garcia Marquez",
  añoPublicacion: 1967,
  genero:"realismo Magico",
  disponible:true,
  mostrarInfo: function(){
    console.log(`"${this.titulo}" de ${this.autor} (${this.añoPublicacion}) - Género: ${this.genero}`);
  }
};

// mostrar algunas propiedades 
console.log("titulo del libro", libro.titulo);
console.log ("autor", libro.autor);
// llamar a la funcion mostrarInfo 
libro.mostrarInfo();

// Ejercicio 2: Modifica una propiedad y añade una nueva
libro.disponible = false; // ya no esta disponible
libro.editorial = "Sudamericana"; // añade una nueva propiedad
// mostrar en consola 
console.log("¿Libro disponible?", libro.disponible);
console.log("Editorial:", libro.editorial);



// Ejercicio 3: Crea un array de objetos para representar estudiantes
const estudiantes = [
  {
      id: 101,
      nombre: "Sofía",
      edad: 20,
      carrera: "Ingeniería Informática"
  },
  {
      id: 102,
      nombre: "Javier",
      edad: 22,
      carrera: "Diseño Gráfico"
  },
  {
      id: 103,
      nombre: "Camila",
      edad: 19,
      carrera: "Periodismo"
  }
];

console.log("\nInformación de Estudiantes:");
// Itera sobre el array de estudiantes y muestra sus nombres y carreras
for (let i = 0; i < estudiantes.length; i++) {
  console.log(`ID: ${estudiantes[i].id}, Nombre: ${estudiantes[i].nombre}, Carrera: ${estudiantes[i].carrera}`);
}

// Accede al nombre del segundo estudiante usando notación de corchetes y una variable
const indiceSegundo = 1;
console.log("\nNombre del segundo estudiante:", estudiantes[indiceSegundo]["nombre"]);



