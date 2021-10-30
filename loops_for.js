var trabajadores = ["Juan Rebolledo", "Carlos Jimenez", "Cristina Morales", "Paola Martinez"];

function saludarTrabajadores(trabajador) {
    console.log(`Hola ${trabajador}`);
}

for(var i = 0; i < trabajadores.length; i++) {
    saludarTrabajadores(trabajadores[i])
}
// "Hola Juan Rebolledo", "Hola Carlos Jimenez", "Hola Cristina Morales", "Hola Paola Martinez"

for(var trabajador of trabajadores){
    saludarTrabajadores(trabajador)
}
// "Hola Juan Rebolledo", "Hola Carlos Jimenez", "Hola Cristina Morales", "Hola Paola Martinez"