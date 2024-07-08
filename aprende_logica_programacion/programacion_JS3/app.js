alert('Juego: Adivina el Número');
// Variables
let numeroUsuario = 0; // Valor introducido por el usuario
let intentos = 1; // Se inicializa en 1 porque el usuario al menos va a jugar una vez

// Se le pide al usuario el numero maximo con el que quiere jugar
let numeroRangoMayor = parseInt(prompt('Indique entre 1 y que numero quiere jugar: '));
let numeroSecreto = Math.floor(Math.random() * numeroRangoMayor) + 1; // Valor a encontrar por el usuario

// Se le pide al usuario el numero maximo de intentos con los que quiere jugar
let maximoIntentos = parseInt(prompt('Indique el numero maximo de intentos con los que quiere jugar: '));

// Instruccion necesaria para permitirle al usuario jugar mas de una vez
while (numeroUsuario != numeroSecreto) {
    // Se le pide al usuario el numero que debe adivinar
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroRangoMayor} por favor: `));

    // Instruccion necesaria para saber cuando se gana el juego
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el numero es ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
    } else {
        // Se le brinda al usuario una ayuda para que puedo dar con el numero en cuention
        if (numeroUsuario < numeroSecreto){
            alert('No hacertaste, el numero es mayor.');
        } else {
            alert('No hacertaste, el numero es menor.');
        }
        // Se incrementa el contador cuando no hay un acierto
        intentos++;
        //palabraVeces = 'veces';
        if (intentos > maximoIntentos) {
            alert(`¡Perdise! Haz superado el numero maximos de ${intentos} intentos. El numero a adivinar era ${numeroSecreto}.`)
            break;
        }
    };
}