function auto(marca, modelo, annio, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.color = color;
}


// este operado genera una nueva instancia de nuestro funcion constructora y una instacio es generar un objeto que deriva de otro objeto
var autoNuevo = new auto("Tesla", "Model 3", 2020, "red");
autoNuevo
// auto { marca: 'Tesla', modelo: 'Model 3', annio: 2020, color: 'red' }
var autoNuevo2 = new auto("Kia", "Sportage", 2021, "blanco");
autoNuevo2;
// auto { marca: 'Kia', modelo: 'Sportage', annio: 2021, color: 'blanco' }
var autoNuevo3 = new auto("Seat", "ibiza", 2015, "red");