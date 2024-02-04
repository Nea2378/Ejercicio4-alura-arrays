//Crea una lista vacia con el nombre listaGenerica.
let listaGenerica = [];

//Crea una lista de lenguages de programacion llamada
//lenguajesDeProgramacion.
let lenguagesDeProgramacion = [`JavaScript`, `C`, `C++`, `Kotlin`, `Python`];

//Agrega a la lista lenguagesDeProgramacion los siguientes elementos.
lenguagesDeProgramacion.push(`Java`, `Ruby`, `GoLang`);

//Crea una funcion que muestre en la consola todos los elementos
//de la lista lenguagesDeProgramacion por separado.
function mostrarLenguagesSeparadamente() {
    for (let i = 0;  i < lenguagesDeProgramacion.length; i++) {
        console.log(lenguagesDeProgramacion[i]);
    }
}

mostrarLenguagesSeparadamente;

//Crea una funcion que muestre en la consola todos los
//elementos de la lista lenguagesDeProgramacion 
//de manera inversa.
function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
    }
    
}

mostrarLenguagesReversoSeparadamente;

//Crea una funcion que calcule la media de los 
//elementos en una lista de numeros.
function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma =+ lista[i];
    }
    return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log(`Media:`, media);

//Crea una funcion que muestre en la consola
//el numero mayor y menor en una lista.
function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];

    for (let i = 1; i < lista.length; i++){
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }

    console.log(`Mayor:`, mayor);
    console.log(`Menor:`, menor);
}

let numero = [15, 8, 25, 5, 12]; //numeros en la correcta
encontrarMayorMenor(numeros);

//Crea una funcion que retorne la suma de todos los elementos
//en una lista.
function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}

let numeross = [15, 8, 25, 5, 12]; //numeros
let suma =  calcularSuma(numeros);
console.log(`Suma:`, suma);

//Crea una funcion que reciba una lista como parametro
//y retorne el indice de un elemento tambien pasado como
//parametro. Si ese elemento no existe en la lista
// retorna -1.
function encontrarIndiceElemento(lista, elemento){
    for (let i = 0; i < lista.length; i++) {
        if  (lista[i] === elemento){
            return i; // retorna el indice del elemento encontrado
        }
    }
    return -1; // Retorna el -1 si el elemento no se encuentra en la lista
}

