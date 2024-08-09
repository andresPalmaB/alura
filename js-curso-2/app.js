let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del desafio";

function mostrarPorConsola(){
    console.log("El boton fue clicado");
}

function ejecutarPrompt(){
    let nombreCiudad = prompt("Digita el nombre de una ciudad de Brazil: ");
    alert(`Estuve en ${nombreCiudad} y me acorde  de ti.`);
}

function ejecutarAlerta(){
    alert("Yo amo JavaScript");
}

function ejecutarSuma(){
    let num1 = parseInt(prompt("Digite el primer numero entero:"));
    let num2 = parseInt(prompt("Digite el segundo numero entero:"));
    alert(`El resultado de la suma es ${num1 + num2}`)
}