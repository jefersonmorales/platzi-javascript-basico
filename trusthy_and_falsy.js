// Si no tenemos un valor, el valor es falso. - Hay una lista de valores falsos y una de valores verdaderos

// false
console.log(Boolean());
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(NaN)); // se entiende como not a number
console.log(Boolean(undefined));
console.log(Boolean(false));
console.log(Boolean("")); // string vacio


// true
console.log(Boolean(" ")); // string con espacio
console.log(Boolean([])); // aunque este vacio
console.log(Boolean({})); // aunque este vacio
console.log(Boolean(function() {})); // cualquier funcion es verdadera
console.log(Boolean(true))