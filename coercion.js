// implicitas =>  el lenguaje nos ayuda y cambia un tipo de valor a otro tipo de valor. De un tipo numero a tipo string y al reves

var a = 4 + "7"; // 47
//esto esta haciendo una concatacion debido que el signo de mas hace una concatacion y es un string
var b = 4 * "7"; // 28
// esto pasa para porque ya no se esta haciendo la concatacion debido a que el signo es *



// explicita => la forma en que obligamos a que un valor de un tipo cambie a otro valor de otro tipo si necesitamos que ese valor sea de un tipo distinto

var a = 20; // Number
var b = a + ""; // string
var c = String(a); // string
c; // 20
var d = Number(c); // number
d; //20