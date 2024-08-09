function mostrarConsola(elemento){
    console.log(elemento);
}

function mostrarNombre(nombre){
    console.log(`¡Hola, ${nombre}!`);
}

function duplicarNumero(numero){
    return numero * 2;
}

function promedio(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}

function numeroMayor(num1, num2){
    if (num2 > num1) {
        return num2;
    } else if(num1 > num2) {
        return num1;
    } else {
        return "Numeros Iguales";
    }
}

function potencia(numerp){
    return numerp * numerp
}

mostrarConsola("¡Hola, Mundo!");
mostrarNombre("Andres");
console.log(duplicarNumero(7));
console.log(promedio(14, 29, 48));
console.log(numeroMayor(14, 36));
console.log(potencia(6));