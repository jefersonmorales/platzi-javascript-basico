var trabajadores = [
    { nombre: "Jeferson", apellido: "Morales", puesto: "Agente" },
    { nombre: "Carolina", apellido: "Folleco", puesto: "Supervisor"},
    { nombre: "Jessica", apellido: "Rodriguez", puesto: "Agente"},
    { nombre: "Luis", apellido: "Hernandez", puesto: "Agente"},
    { nombre: "Tania", apellido: "Contraras", puesto: "Supervisor"},
    { nombre: "Alan", apellido: "Sanchez", puesto: "Supervisor"},
];


// Filter


var supervisores = trabajadores.filter(function(trabajador){
    return trabajador.puesto == "Supervisor"
});

supervisores;
//    { nombre: "Carolina", apellido: "Folleco", puesto: "Supervisor"},
//    { nombre: "Tania", apellido: "Contraras", puesto: "Supervisor"},
//    { nombre: "Alan", apellido: "Sanchez", puesto: "Supervisor"},

     // ---------------------------------------------------- //

// Map

var nombreTrabajadores = trabajadores.map(function(trabajador){
    return trabajador.nombre
});

nombreTrabajadores;
// ['Jeferson', 'Carolina', 'Jessica', 'Luis', 'Tania', 'Alan']


     // ---------------------------------------------------- //


// find -> validar si es true o false. Si es true lo regresa

var encontrarTrabajador = trabajadores.find(function(trabajador) {
    return trabajador.nombre === "Jessica"
});

encontrarTrabajador; // como es verdadero lo regresa
// { nombre: 'Jessica', apellido: 'Rodriguez', puesto: 'Agente' }


     // ---------------------------------------------------- //


// forEach

trabajadores.forEach(function(trabajador){
    console.log(trabajador.nombre);
});
// Jeferson
// Carolina
// Jessica
// Luis
// Tania
// Alan


     // ---------------------------------------------------- //


// some(). Solo nos dice si es verdadero o no. Si en la lista hay agentes regresa true
var agentes = trabajadores.some(function(trabajador){
    return trabajador.puesto == "Agente";
});
agentes //true