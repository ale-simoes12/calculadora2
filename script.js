let campo = document.getElementById("fname");


let apenasNumeros = true;
let existeOperador = false;
let existeIgual = false;
const regexOperador = /^[+\-*/]$/;
const regexNumero = /^-?\d*\.?\d+$/;
let lista = "";

campo.addEventListener("keydown", function (event) {
    ///verificar se é operador
    console.log(lista);

    if (lista == "") {
        apenasNumeros = true;
    }

    if (regexOperador.test(event.key)) {
        if (lista.length == 0) {
            console.log("caiu");
            event.preventDefault();
        }

        if (lista[0] == "-" && lista.length == 1) {
            event.preventDefault();
        }

        else if (apenasNumeros == false && existeOperador == false) {
            console.log("add");
            existeOperador = true;
            lista += event.key;
        } else {
            event.preventDefault();
        }
    }

    ///verificar se é numero
    else if (regexNumero.test(event.key)) {
        if (existeIgual == true) {
            event.preventDefault();
        }
        lista += event.key;
        apenasNumeros = false;
    }

    ///verificar se é igaul
    else if (event.key == "=") {
        console.log("caiu");
        let ultimoElemento = lista[lista.length - 1];

        if (
            existeOperador == true &&
            regexNumero.test(ultimoElemento) &&
            existeIgual == false
        ) {
            event.preventDefault();
            existeIgual = true;
            // lista += event.key;
            apenasNumeros = true;
            existeOperador = false;
            existeIgual = false;
            fazerOperacao();

        } else {
            event.preventDefault();
        }

    }

    else if (event.key == "Backspace") {
        console.log("caiu");
        let ultimoElemento = lista[lista.length - 1];
        lista = lista.slice(0, -1);
        console.log(lista);
        if (regexOperador.test(ultimoElemento)) {
            existeOperador = false;
        }
    }

    else {
        event.preventDefault();
    }

});



///TECLADO VIRTUAL

function enviarNumero(numero) {
    lista += numero;
    campo.value += numero;
    apenasNumeros = false;
}



function enviarOperador(operador) {
    if (lista.length == 0) {
        console.log("caiu");
       return;
    }

    if (lista[0] == "-" && lista.length == 1) {
       return;
    }
    else if (apenasNumeros == false && existeOperador == false) {
        existeOperador = true;
        lista += operador;
        campo.value += operador;
    }
    else {
        return;
    }
}




function efetuarOperacao() {
    let ultimoElemento = lista[lista.length - 1];
    if (
        existeOperador == true &&
        regexNumero.test(ultimoElemento) &&
        existeIgual == false
    ) {
        fazerOperacao();
    }

}


function fazerOperacao() {
    let numero1 = "";
    let numero2 = "";
    let operador = "";
    let segundaParte = false;

    console.log("opercao", lista);
    for (let i = 0; i < lista.length; i++) {

        if (regexOperador.test(lista[i]) && i != 0) {
            segundaParte = true;
            operador = lista[i];
        }
        else {
            if (segundaParte == false) {
                numero1 += lista[i];
            }
            else {
                numero2 += lista[i];
            }
        }
    }


    if (operador == "+") {
        soma(numero1, numero2);
        existeOperador = false;
        apenasNumeros = false;

    }
    if (operador == "-") {
        subtracao(numero1, numero2);
        existeOperador = false;
        apenasNumeros = false;
    }

    if (operador == "/") {
        divisao(numero1, numero2);
        existeOperador = false;
        apenasNumeros = false;
    }
    if (operador == "*") {
        multiplicacao(numero1, numero2);
        existeOperador = false;
        apenasNumeros = false;
    }


    console.log("numero1", numero1);
    console.log("numero2", numero2);


}





function soma(numero1, numero2) {
    let resultado = parseInt(numero1) + parseInt(numero2);
    lista = String(resultado);
    console.log(lista);
    campo.value = lista;
}



function subtracao(numero1, numero2) {
    let resultado = parseInt(numero1) - parseInt(numero2);
    lista = String(resultado);
    campo.value = lista;

}



function multiplicacao(numero1, numero2) {
    let resultado = parseInt(numero1) * parseInt(numero2);
    lista = String(resultado);
    campo.value = lista;
}



function divisao(numero1, numero2) {
    let resultado = parseInt(numero1) / parseInt(numero2);
    lista = String(resultado);
    campo.value = resultado;
}



function limpar(){
    lista = "";
    campo.value = lista;
    apenasNumeros = true;
    existeOperador = false;
    existeIgual = false;

}












