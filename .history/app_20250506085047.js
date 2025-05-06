const readline = require("readline-sync");

//pra receber valor
readline.question('Ola, mundo?');

//pra exibir na tela
console.log();

const diasDaSemana = [
    "Segunda-feira", 
    "Terça-feira", 
    "Quarta-feira", 
    "Quinta-feira", 
    "Sexta-feira", 
    "Sábado", 
    "Domingo"
];

const numero = parseInt(prompt("Digite um número de 1 a 7:"));
const resultado = (numero >= 1 && numero <= 7) 
    ? diasDaSemana[numero - 1] 
    : "Número inválido! Digite um número de 1 a 7.";

console.log(resultado);