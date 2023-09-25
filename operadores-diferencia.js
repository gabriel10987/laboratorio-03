let a = 3, b = 2, c = 3;

let z = a != c; // se revisa el valor sin importar el tipo
console.log(z);

z = a !== c; // revisa los valores pero también los tipos
console.log(z);