const campo = document.getElementById("fname");

let apenasNumeros = true;
let existeOperador = false;
let existeIgual = false;
const regexOperador = /^[+\-*/]$/;
const regexNumero = /^-?\d*\.?\d+$/;
let lista = "";

campo.addEventListener("keydown", function (event) {
    ///verificar se é operador
    if (regexOperador.test(event.key)) {
        if (apenasNumeros == false && existeOperador == false) {
            existeOperador == true;
            lista += event.key;
            console.log("operador");
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
        let ultimoElemento = lista[lista.length - 1];
        if (
            existeOperador == true &&
            regexNumero.test(ultimoElemento) &&
            existeIgual == true
        ) {
            existeIgual = true;
            lista += event.key;
        } else {
            event.preventDefault();
        }
    } else {
        console.log("else");
        event.preventDefault();
    }

    console.log(lista);

    // if(apenasNumeros && !regexNumero.test(event.key) ){
    //     event.preventDefault();
    // }

    // if(regexNumero.test(event.key)){
    //     lista+= event.key;
    //     apenasNumeros = false;
    //     operador = true;

    // }

    // if(!regexNumero.test(event.key) && !regexOperador.test(event.key) ){
    //     event.preventDefault();
    // }

    // if(regexOperador.test(event.key) && operador ==false ){
    //     event.preventDefault();
    // }

    // if(regexOperador.test(event.key) && operador ==true ){
    //     lista+= event.key;
    //     operador = false;
    // }
    // console.log(lista);

    // if(isNaN(event.key)){
    //     if(apenasNumeros || !regexOperador.test(event.key)  ){
    //         event.preventDefault();
    //     }

    // }

    // if(regexNumero.test(event.key)){
    //     apenasNumeros = false;
    // }

    // console.log('Tecla pressionada:', event.key);
    // if(event.key  == "+"){

    // }
    // if(event.key  == "/"){

    // }

    // if(event.key  == "*"){

    // }

    // if(event.key  == "-"){

    // }]

    console.log("Código da tecla:", event.code);
});
