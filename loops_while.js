var trabajadores = ["Maria", "segio", "Carlos", "Rosa"];

function saludarTrabajadores(trabajador){
    console.log(`Hola ${trabajador}`);
    // Hola Maria, Hola segio, Hola Carlos, Hola Rosa
}

while(trabajadores.length > 0) {
    console.log(trabajadores);
    // ["Maria", "segio", "Carlos", "Rosa"];
    // ["Maria", "segio", "Carlos"];
    // ["Maria", "segio"];
    // ["Maria"];
    var trabajador = trabajadores.shift();
    saludarTrabajadores(trabajador);
}
