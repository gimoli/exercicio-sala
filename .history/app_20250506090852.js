const readline = require("readline-sync");

//pra receber valor
readline.question('Ola, mundo?');

//pra exibir na tela
console.log();

const readline = require("readline-sync");

const diasDaSemana = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo"
];

const numero = readline.questionInt("Digite um número de 1 a 7: ");

if (numero >= 1 && numero <= 7) {
    console.log(diasDaSemana[numero - 1]);
} else {
    console.log("Número inválido!");
}