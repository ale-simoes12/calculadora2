const visor = document.querySelector(".visor");
let listaOperacao = [];
let isOperatorAnterior = true;
let pontoExiste = false;
let numeroOperacoes = 0;
let novaLista = [];

function capturarVisor(elementoVisor, isOperator) {
  if (isOperator) {
    if (isOperatorAnterior == true) {
      console.log("return");
      return;
    } else {
      isOperatorAnterior = true;
      pontoExiste = false;
      numeroOperacoes++;
    }
  } else {
    isOperatorAnterior = false;
  }
  listaOperacao.push(elementoVisor);
  visor.textContent += elementoVisor;
  
}

function adicionarPonto(ponto) {
  if (pontoExiste || isOperatorAnterior == true) {
    return;
  }
  pontoExiste = true;
  isOperatorAnterior = true;
  listaOperacao.push(ponto);
  visor.textContent += ponto;
}

function limpar() {
  visor.textContent = "";
  listaOperacao = [];
  isOperatorAnterior = true;
  pontoExiste = false;
  novaLista = [];
}

function efetuarOperacao() {
  const ultimoElemento = listaOperacao[listaOperacao.length - 1];
  if (ultimoElemento.match(/^[\.\+\/x\-]$/) || numeroOperacoes == 0) {
    return;
  }

  juntarNumero();
  let listasomas = [];

  ///calcular operacao x
  for (let i = 0; i < novaLista.length; i++) {
    if (String(novaLista[i]).match(/^[x\/]$/)) {
      const numeroFloatEsquerda = parseFloat(novaLista[i - 1]);
      const numeroFloatDireita = parseFloat(novaLista[i + 1]);
      // console.log(numeroFloatDireita);
      let resultado;
      if (novaLista[i] == "x") {
        resultado = numeroFloatEsquerda * numeroFloatDireita;
      }
      if (novaLista[i] == "/") {
        resultado = numeroFloatEsquerda / numeroFloatDireita;
      }

      if (i + 2 < novaLista.length && ["x", "/"].includes(novaLista[i + 2])) {
        novaLista[i - 1] = "z";
        novaLista[i] = "z";
        novaLista[i + 1] = resultado;
      } else {
        novaLista[i - 1] = "z";
        novaLista[i] = "z";
        novaLista[i + 1] = resultado;
      }
    }
  }

  for (let i = 0; i < novaLista.length; i++) {
    if (novaLista[i] != "z") {
      listasomas.push(novaLista[i]);
    }
  }

  let resultado = 0;
  for (let i = 0; i < listasomas.length; i++) {
    if (String(listasomas[i]).match(/^[+-]$/)) {
      const numeroFloatEsquerda = parseFloat(listasomas[i - 1]);
      const numeroFloatDireita = parseFloat(listasomas[i + 1]);
      console.log(numeroFloatDireita);
      // let resultado = 0;
      if (listasomas[i] == "+") {
        resultado = numeroFloatEsquerda + numeroFloatDireita;
      }
      if (listasomas[i] == "-") {
        resultado = numeroFloatEsquerda - numeroFloatDireita;
      }

      if (i + 2 < listasomas.length && ["+", "-"].includes(listasomas[i + 2])) {
        listasomas[i - 1] = "z";
        listasomas[i] = "z";
        listasomas[i + 1] = resultado;
      } else {
        listasomas[i - 1] = "z";
        listasomas[i] = "z";
        listasomas[i + 1] = resultado;
      }
    }
  }

  console.log(listasomas);

}

function juntarNumero() {
  let numero = "";
  // console.log(listaOperacao);
  for (let i = 0; i < listaOperacao.length; i++) {
    if (listaOperacao[i].match(/^[+\/x-]$/)) {
      novaLista.push(numero);
      novaLista.push(listaOperacao[i]);
      numero = "";
    } else {
      numero += listaOperacao[i];
    }
  }
  novaLista.push(numero);

  console.log(novaLista);
}

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
