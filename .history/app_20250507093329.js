// const readline = require("readline-sync");

// //pra receber valor
// readline.question('Ola, mundo?');

// //pra exibir na tela
// console.log();
const readline = require('readline-sync');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function removerVogais(texto) {
  return texto.replace(/[aeiouáéíóúâêîôûãõàèìòùäëïöü]/gi, '');
}

readline.question('Digite um texto e pressione ENTER: ', (texto) => {
  const textoSemVogais = removerVogais(texto);
  console.log('Texto sem vogais:', textoSemVogais);
  readline.close();
});