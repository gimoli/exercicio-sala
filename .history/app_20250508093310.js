// const readline = require("readline-sync");

// //pra receber valor
// readline.question('Ola, mundo?');

// //pra exibir na tela
// console.log();
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function removerVogais(texto) {
  return texto.replace(/[aeiou]/gi, '');
}

readline.question('Digite seu texto: ', (texto) => {
  console.log('\nResultado:', removerVogais(texto));
  readline.close();
});


const menuDeCadastro = () => {
  console.log
  '
  case "C"
  case "C"
case "C"
  case "C"
  '
}