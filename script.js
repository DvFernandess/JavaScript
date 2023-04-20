let operacaoAtual = "";
let valorAtual = 0;
let valorAnterior = 0;
let resultado = document.getElementById("resultado");

function adicionarNumero(numero) {
  valorAtual = valorAtual.toString() + numero.toString();
  atualizarTela();
}

function atualizarTela() {
  resultado.value = valorAtual;
}

function limpar() {
  valorAtual = "0";
  operacaoAtual = "";
  atualizarTela();
}

function back() {
  valorAtual = valorAtual.slice(0, -1);
  atualizarTela();
}

function calcular(operacao) {
  if (operacao === "+") {
    valorAnterior = parseFloat(valorAtual);
    valorAtual = "";
    operacaoAtual = "+";
  } else if (operacao === "-") {
    valorAnterior = parseFloat(valorAtual);
    valorAtual = "";
    operacaoAtual = "-";
  } else if (operacao === "*") {
    valorAnterior = parseFloat(valorAtual);
    valorAtual = "";
    operacaoAtual = "*";
  } else if (operacao === "/") {
    valorAnterior = parseFloat(valorAtual);
    valorAtual = "";
    operacaoAtual = "/";
  } else if (operacao === "=") {
    valorAtual = parseFloat(valorAtual);
    if (operacaoAtual === "+") {
      valorAtual = valorAnterior + valorAtual;
    } else if (operacaoAtual === "-") {
      valorAtual = valorAnterior - valorAtual;
    } else if (operacaoAtual === "*") {
      valorAtual = valorAnterior * valorAtual;
    } else if (operacaoAtual === "/") {
      valorAtual = valorAnterior / valorAtual;
    }
    operacaoAtual = "";
    valorAnterior = 0;
    atualizarTela();
  }
}