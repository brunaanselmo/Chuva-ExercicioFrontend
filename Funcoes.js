var secaocompartilhar = document.getElementById("secao-compartilhar");
var formulario = document.getElementById("formulario");
var discussoes = document.getElementById("discussoes");

var pontos = document.getElementById("pontos");
var vermais = document.getElementById("ver-tudo");
var textotodo = document.getElementById("texto-todo");

var enviartopico = document.getElementById("topico");
var topicoexpandido = document.getElementById("topico-expandido");

var footer = document.getElementById("footer");

function mostraFormulario1() {
  var tamanho = window.getComputedStyle(footer).top;
  var top = parseInt(tamanho) + 123;
  footer.style.top = `${top}px`;
  secaocompartilhar.style.display = "none";
  formulario.style.display = "block";
}

function mostraFormulario2() {
  formulario.style.display = "block";
  enviartopico.style.display = "none";
}

function verMais() {
  var tamanho = window.getComputedStyle(footer).top;
  var top = parseInt(tamanho) + 300;
  footer.style.top = `${top}px`;
  pontos.style.display = "none";
  textotodo.style.display = "inline";
  discussoes.style.top = "1115px";
  vermais.style.display = "none";
}

function enviaFormulario() {
  formulario.style.display = "none";
  enviartopico.style.display = "block";
}

function mostraRespostas() {
  var tamanho = window.getComputedStyle(footer).top;
  var top = parseInt(tamanho) + 600;
  footer.style.top = `${top}px`;
  topicoexpandido.style.display = "block";
}
