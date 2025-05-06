const readline = require("readline-sync");

//pra receber valor
readline.question('Ola, mundo?');

//pra exibir na tela
console.log();

const readline = require("readline-sync");

// Recebe o valor (igual ao exemplo do professor)
const numero = readline.question("Digite um numero de 1 a 7: ");

// Array com os dias
const diasDaSemana = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo"
];

// Converte para número e exibe o resultado
console.log(diasDaSemana[numero - 1]);