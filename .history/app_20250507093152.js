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

function removeVogais(str) {
    return str.replace(/[aeiou]/gi, '');
}

readline.question('Digite uma frase: ', (frase) => {
    console.log("Resultado:", removeVogais(frase));
    readline.close();
});