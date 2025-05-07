// const readline = require("readline-sync");

// //pra receber valor
// readline.question('Ola, mundo?');

// //pra exibir na tela
// console.log();
const readline = require('readline-sync');

// Função que remove vogais (incluindo acentuadas)
function removerVogais(texto) {
  return texto.replace(/[aeiouáéíóúâêîôûãõàèìòùäëïöü]/gi, '');
}

// Pega o texto do argumento ou usa um padrão
const textoEntrada = process.argv.slice(2).join(' ') || 
                  "This website is for losers LOL!";

// Processa e mostra o resultado
const textoSaida = removerVogais(textoEntrada);
console.log("Texto original:", textoEntrada);