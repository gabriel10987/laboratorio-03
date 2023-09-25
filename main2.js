
// Variables 
// let (cambiante)
// const (no cambiante)

let nombre = "Gabriel";
nombre = "Alejandro";
console.log(nombre)

// Se imprime Alejandro 

// Las variables que son declaradas fuera de funciones son globales

// Las varibales que se declaran a dentro de la función, if o bucle 
// solo se puden usar dentro de dicha función, if, o bucle

function hola(){
    let nombre = "Alejandro";
    console.log(nombre);
}

hola();
console.log(nombre);

// Se imprimen ambos (Gabriel, Alejandro)

//________________________________________________________________

// Template Strings
// Formas de juntar hilos y variables de una manera sencilla

function saludar(nombre1){
    return 'Mi nombre es ${nombre}';   // back tiks
}

console.log(saludar(nombre));

//______________________________________________________________

// Funciones flecha
// Podemos escribir funciones de una manera corta
// También podemos pasar funciones anónimas a métodos de raíz

const nombre3 = "Gabriel";
const saludar = (nombre) => {
    return 'Mi nombre es ${nombre}';
}

console.log(saludar(nombre));

// Otra forma más corta

const saludar = (nombre) => 'Mi nombre es ${nombre}';


//________________________________________________________________

// Métodos de Arrays (Map y forEach)
// Ayudan a iterar sobre arrays o modificarlas de una manera muy fácil
// sin tener que utilizar bucles complicados

const numeros = [1, 2, 3, 4, 5];

// forEach
numeros.forEach(numero => {
    console.log(numero);
});

// Map
const potencias = numeros.map(numero => numero * numero);
console.log(potencias);
