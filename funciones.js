// Son conjunto de sentencias que usamos para generar acciones con valores guardados en variables. Se pueden conocer como tareas



// Funcion Declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:
function miFuncion() {
    return 3;
}


// Funcion expresiva ... se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima. Se nombra la variable y no la funcion.
var miFuncion = function(a, b) {
    return a + b; // necesito poner los parametros necesarios para ser llamados
}
miFuncion();

//  ------------------------------------------------------- //

function saludarEstudiantes(estudiante) {
    console.log(estudiante);
}
saludarEstudiantes("jeferson");
//jeferson


// generar plantilla
function saludarEstudiante(estudiante) {
    var saludo = `Hi ${estudiante}`
    return saludo;
}
saludarEstudiante("Arturo")
//Hi Arturo

function sumar(a, b) {
    return a * b;
}
sumar(2,6);
//12

// Diferencias:
// A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.
// 
// Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.