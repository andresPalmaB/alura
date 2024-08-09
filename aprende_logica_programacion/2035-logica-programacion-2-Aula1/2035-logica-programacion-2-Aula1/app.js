let numeroAleatorio = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
let maximoJuegos = 5;
let contadorJuegos = 0;

function editarElementHTML(tag, text){
    let elementHtml = document.querySelector(tag);
    elementHtml.innerHTML = text;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valueNumber').value);
    if (numeroDeUsuario === numeroAleatorio){
        editarElementHTML('p', `Acertaste el numero secreto en ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intento').setAttribute('disabled', true)
    } else {
        if (numeroAleatorio > numeroDeUsuario){
            editarElementHTML('p', 'El numero Secreto es Mayor.');
        } else {
            editarElementHTML('p', 'El numero Secreto es Menor.');
        }
        intentos++;
        limpiarInput();
    }
    return;
}

function initialConditions(){
    editarElementHTML('h1', "Juego del numero Secreto");
    editarElementHTML('p', `Indica un numero del 1 al ${numeroMaximo}:`);
    document.getElementById('valueNumber').placeholder = `Numero de juegos restantes ${maximoJuegos - contadorJuegos}`;
    numeroAleatorio = generarNumeroSecreto();
    intentos = 1;
}

function newGame() {
    //Limpiar caja
    limpiarInput();
    //Indicar mensaje de intervalo de numero
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    if (!(contadorJuegos == maximoJuegos)){
        document.getElementById('intento').removeAttribute('disabled');
    }
    initialConditions();
    //Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limpiarInput(){
    document.getElementById('valueNumber').value = '';
    document.getElementById('valueNumber').placeholder = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor((Math.random() * numeroMaximo) + 1);

    console.log(numeroGenerado)
    if (contadorJuegos == maximoJuegos){
        editarElementHTML('p', `Haz jugado el numero maximo de juegos que es ${maximoJuegos}`);
        document.getElementById('intento').setAttribute('disabled', true);
    } else {
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            contadorJuegos++;
            return numeroGenerado
        }
    }
}

initialConditions();