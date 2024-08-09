//Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesProgramacion.push('Java');
lenguajesProgramacion.push('Ruby');
lenguajesProgramacion.push('GoLang');

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion"
function mostrarPorConsola(){
    lenguajesProgramacion.forEach(element => {
        console.log(element);
    });
}
mostrarPorConsola();

//Crea una función que calcule el promedio de los elementos en una lista de números.
let listaNumero = [14, 24, 18, 42, 7, 13, 5, 9, 15];
function calcularPromedio(){
    let promedio = 0;
    listaNumero.forEach(element => {
        promedio += element;
    });
    console.log(promedio/listaNumero.length);
}
calcularPromedio();

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function numMenorMayor(){
    let menor = 99;
    let mayor = 0;
    listaNumero.forEach(element => {
        if (element > mayor) {
            mayor = element;
        }
        if (element < menor) {
            menor = element;
        }
    });
    console.log(`El numero mayor de la lista es: ${mayor}`);
    console.log(`El numero menor de la lista es: ${menor}`);
}
numMenorMayor();

//Crea una función que devuelva la suma de todos los elementos en una lista.
function calcularSumaElementosLista(){
    let suma = 0;
    listaNumero.forEach(element => {
        suma += element;
    });
    console.log(suma);
}
calcularSumaElementosLista();

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function allarElemento(elemento){
    let index = -1;
    for (let i = 0; i < listaNumero.length; i++) {
        if (listaNumero.includes(elemento)) {
            index = listaNumero.indexOf(elemento);
        }
    }
    console.log(index);
}
allarElemento(14);
allarElemento(100);

//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
let listaNumero2 = [2, 34, 11, 21, 1, 37, 45, 19, 35];
function sumaDeListas(listaNumero, listaNumero2){
    let listaNumerosSumada = [];
    for (let i = 0; i < listaNumero.length; i++) {
        listaNumerosSumada.push(listaNumero[i] + listaNumero2[i]);
    }
    console.log(listaNumero);
    console.log(listaNumero2);
    console.log(listaNumerosSumada);
}
sumaDeListas(listaNumero, listaNumero2)

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function listaCuadrado(listaNumero){
    let listaNumerosCuadrados = []
    listaNumero.forEach(element => {
        listaNumerosCuadrados.push(Math.pow(element, 2));
    });
    console.log(listaNumerosCuadrados);
}
listaCuadrado(listaNumero);