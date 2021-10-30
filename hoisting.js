// cuando las variables y funciones se declaran antes que se procese cualquier tipo de codigo.

console.log(miNombre);
// undefined
var miNombre = "Jeferson";


// esto es lo que pasa cuando no definimos la variable.
var miNombre = undefined; // esto es lo que hace el navegador por nosotros
console.log(miNombre + "Soy ese hoisting");
miNombre = "jeferson";
// undefinedSoy ese hoisting   =>  este es el ejemplo de hoisting, primero se esta dando el valor "undefined" que el navegador da por nosotros y despues el valor que le estamos dando
// "jeferson"  =>  regresa el valor que ya le estoy dando



// con funciones

hey();

function hey() {
    console.log("Hola " + myName);
}
var myName = "steven";
//Hola undefined ==> esto es porque estamos declarando antes de que se procese el tipo de codigo.