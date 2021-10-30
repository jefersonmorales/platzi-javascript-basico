// scope global => variables, validaciones, funciones
// scope local => lo que esta dentro de la funcion. Si tengo una variable

// lo que esta en scope global no puede acceder a scope local. Pero un scope local puede acceder a todo lo que esta en un scope global.

var miNombre = "jeferson";

function nombre() {
    var miapellido = "Morales";
    console.log(miNombre + " " + miapellido);
    // jeferson Morales
}

miNombre;
// jeferson

miapellido;
// miapellido is not defined  ==> esto pasa porque miapellido esta dentro del scope local (nombre())