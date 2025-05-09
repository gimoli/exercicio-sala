const readline = require("readline-sync");

// //pra receber valor
// readline.question('Ola, mundo?');

// //pra exibir na tela
// console.log();
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function removerVogais(texto) {
//   return texto.replace(/[aeiou]/gi, '');
// }

// readline.question('Digite seu texto: ', (texto) => {
//   console.log('\nResultado:', removerVogais(texto));
//   readline.close();
// });

// 1 - Solicita ao usuário um número de 1 a 7
let numero = parseInt(readline.question("Digite um numero de 1 a 7: "));

// Array com os dias da semana (índice 0 é Segunda-feira)
let diasDaSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];

// Verifica se o número está entre 1 e 7
if (numero >= 1 && numero <= 7) {
    console.log("O dia correspondente é:", diasDaSemana[numero - 1]);
} else {
    console.log("Número inválido. Por favor, digite um número de 1 a 7.");
}

//2-
const menuDeCadastro = () => {
  console.log(
    `
    C) Create   (Cadastrar/Inserir)
    R) Read     (Buscar/Ler)
    U) Update   (Editar/Atualizar)
    D) Delete   (Excluir/Apagar)
    `
  );

  const menu = readline.question("Digite uma opção: ").toUpperCase();

  switch (menu) {
    case "C":
      console.log("Cadastrar");
      break;
    case "R":
      console.log("Ler");
      break;
    case "U":
      console.log("Atualizar");
      break;
    case "D":
      console.log("Deletar");
      break;
    default:
      console.log("Opção inválida");
  }
};

menuDeCadastro();
