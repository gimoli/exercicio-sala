// const readline = require("readline-sync");

// //pra receber valor
// readline.question('Ola, mundo?');

// //pra exibir na tela
// console.log();
const readline = require('readline-sync');

function removeVogais(str) {
  const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let resultado = '';
  
  for (let char of str) {
      if (!vogais.includes(char)) {
          resultado += char;
      }
  }
  
  return resultado;
}