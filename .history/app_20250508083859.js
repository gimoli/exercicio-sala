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


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let dados = [];

function mostrarMenu() {
  console.log('\nMenu de Cadastro:');
  console.log('C) Cadastrar (Create)');
  console.log('R) Buscar (Read)');
  console.log('U) Atualizar (Update)');
  console.log('D) Apagar (Delete)');
  console.log('S) Sair');
  rl.question('Escolha uma opção: ', tratarOpcao);
}

function tratarOpcao(opcao) {
  const letra = opcao.trim().toUpperCase();

  switch (letra) {
    case 'C':
      rl.question('Digite o nome para cadastrar: ', (nome) => {
        dados.push(nome);
        console.log('Cadastrado com sucesso!');
        mostrarMenu();
      });
      break;

    case 'R':
      console.log('\nLista de cadastros:');
      dados.forEach((item, index) => {
        console.log(`${index}: ${item}`);
      });
      mostrarMenu();
      break;

    case 'U':
      rl.question('Digite o número do item que quer atualizar: ', (indice) => {
        if (dados[indice]) {
          rl.question('Digite o novo nome: ', (novoNome) => {
            dados[indice] = novoNome;
            console.log('Atualizado com sucesso!');
            mostrarMenu();
          });
        } else {
          console.log('Índice inválido!');
          mostrarMenu();
        }
      });
      break;

    case 'D':
      rl.question('Digite o número do item que quer apagar: ', (indice) => {
        if (dados[indice]) {
          dados.splice(indice, 1);
          console.log('Apagado com sucesso!');
        } else {
          console.log('Índice inválido!');
        }
        mostrarMenu();
      });
      break;

    case 'S':
      console.log('Encerrando...');
      rl.close();
      break;

    default:
      console.log('Opção inválida!');
      mostrarMenu();
  }
}

mostrarMenu();
