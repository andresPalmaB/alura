function indiceMasaCorporal(peso, altura){
    return parseFloat((peso / altura).toFixed(2));
}

function factorial(numero){
    if (numero > 1) {
        return numero * factorial(numero - 1);
    } else {
        return numero;
    }
}

function convertirDolaresPesos(valor) {
    return parseFloat((valor * 4057.50).toFixed(2));
}

function calculoAreaPerimetroCuadrado(alto, ancho){
    let area = alto * ancho;
    let perimetro = (alto * 2) + (ancho * 2);

    return `El area de la sala rectangular es: ${parseFloat(area.toFixed(2))}. El perimetro de la sala rectangular es: ${parseFloat(perimetro.toFixed(2))}`;
}

function calculoAreaPerimetroCirculo(radio){
    let area = Math.PI * Math.pow(radio, 2);
    let perimetro = 2 * Math.PI * radio;

    return `El area de la sala circular es: ${parseFloat(area.toFixed(2))}. El perimetro de la sala circular es: ${parseFloat(perimetro.toFixed(2))}`;
}

function tablaMultiplicar(numero){
    let mensaje = '';
    for (let i = 1; i < 11; i++) {
        mensaje += `${i} x ${numero} = ${i*numero}\n`;
    }
    return mensaje;
}

console.log(indiceMasaCorporal(110, 1.86));
console.log(factorial(5));
console.log(convertirDolaresPesos(126));
console.log(calculoAreaPerimetroCuadrado(6, 14));
console.log(calculoAreaPerimetroCirculo(2.27));
console.log(tablaMultiplicar(6));