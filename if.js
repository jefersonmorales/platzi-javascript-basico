// Condiciones para validar si algo es falso o verdadero

// (debe estar lo que queremos validar. y debe ser algo verdadero para que algo suceda)
// {debe estar lo que queremos que haga si es verdadero}

if (true) {
    console.log("Hola");
} else {
    console.log("Soy falso");
}

if (true) {
    console.log("Hola");
} else if (true_other) {
    console.log("other");
} else {
    console.log("Soy falso");
}


// se pueden aplicar varios "else if";
var edad = 18;

if(edad === 18) {
    console.log("Puede votar, te felicitamos por tu primera votacion");
} else if (edad > 18 ) {
    console.log("Puedes votar nuevamente");
} else {
    console.log("Aun no puedes votar");
}


// operador ternario

condition ? true : false;

var numero = 1;
resultado = numero === 1 ? "Soy un uno " : "no soy un 1";
// soy un uno
var numero = 2;
resultado = numero === 1 ? "Soy un uno " : "no soy un 1";
// no soy un 1