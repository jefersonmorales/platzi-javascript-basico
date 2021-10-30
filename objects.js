var autos = {
    marca: "seat ibiza",
    modelo: 2015,
    color: "gris",
    combustible: "gasolina"
}

autos.color();
//gris

var autos = {
    marca: "seat",
    modelo: "ibiza",
    age: 2015,
    color: "gris",
    combustible: "gasolina",
    detalleAuto: function(){
        return `Auto ${this.modelo} ${this.age}`
    }
}
console.log(autos.detalleAuto());
// Auto ibiza 2015