// const readline = require("readline-sync");

// //pra receber valor
// readline.question('Ola, mundo?');

// //pra exibir na tela
// console.log();
const readline = require('readline-sync');

// 1. Dias da semanagit remote add origin https://github.com/gimoli/exercicio-sala.git
function diasDaSemana() {
  const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
  const num = readline.questionInt('Digite um número (1-7): ');
  console.log(num >= 1 && num <= 7 ? dias[num-1] : 'Número inválido!');
}

// 2. Menu CRUD
function menuCRUD() {
  const cadastros = [];
  
  while (true) {
    console.log('\n[C] Create\n[R] Read\n[U] Update\n[D] Delete\n[S] Sair');
    const op = readline.question('Opção: ').toUpperCase();
    
    if (op === 'C') cadastros.push(readline.question('Nome: '));
    else if (op === 'R') console.log(cadastros);
    else if (op === 'U') {
      const i = readline.questionInt('Índice: ');
      cadastros[i] = readline.question('Novo nome: ');
    }
    else if (op === 'D') cadastros.splice(readline.questionInt('Índice: '), 1);
    else if (op === 'S') break;
  }
}

// 3. Venda de Hotdogs
function vendaHotDogs(n) {
  const preco = n < 5 ? 100 : n < 10 ? 95 : 90;
  return n * preco;
}

// 4. Remover vogais
function removeVogais(str) {
  return str.replace(/[aeiou]/gi, '');
}

// 5. Calculadora
function calculadora(a, b, op) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    default: return 'Operador inválido';
  }
}

// 6. Nomes inversos
function nomesInversos() {
  const nomes = [];
  for (let i = 0; i < 7; i++) {
    nomes.push(readline.question(`Nome ${i+1}: `));
  }
  console.log(nomes.reverse());
}

// 7. Jokenpo
function jokenpo() {
  const opcoes = ['Pedra', 'Papel', 'Tesoura'];
  const jogadaPC = Math.floor(Math.random() * 3);
  const jogadaUser = readline.keyInSelect(opcoes, 'Escolha:');
  
  if (jogadaUser === -1) return;
  
  console.log(`Você: ${opcoes[jogadaUser]}\nPC: ${opcoes[jogadaPC]}`);
  
  if (jogadaUser === jogadaPC) console.log('Empate!');
  else if ((jogadaUser - jogadaPC + 3) % 3 === 1) console.log('Você ganhou!');
  else console.log('PC ganhou!');
}

// 8. Multa velocidade
function calculaMulta() {
  const velocidade = readline.questionFloat('Velocidade (km/h): ');
  if (velocidade > 80) {
    const multa = (velocidade - 80) * 5;
    console.log(`Multa: R$ ${multa.toFixed(2)}`);
  } else {
    console.log('Dentro do limite');
  }
}

// 9. Fumante
function tempoVidaFumante() {
  const cigarrosDia = readline.questionInt('Cigarros por dia: ');
  const anos = readline.questionInt('Anos fumando: ');
  const minutosPerdidos = cigarrosDia * 10 * anos * 365;
  console.log(`Dias perdidos: ${(minutosPerdidos / 1440).toFixed(0)}`);
}

// 10. Aluguel de carros
function aluguelCarro() {
  const tipo = readline.question('Tipo (popular/luxo): ').toLowerCase();
  const dias = readline.questionInt('Dias: ');
  const km = readline.questionFloat('Km: ');
  
  let total = tipo === 'popular' ? 90 * dias : 150 * dias;
  
  if (tipo === 'popular') {
    total += km <= 100 ? km * 0.2 : 100 * 0.2 + (km - 100) * 0.1;
  } else {
    total += km <= 200 ? km * 0.3 : 200 * 0.3 + (km - 200) * 0.25;
  }
  
  console.log(`Total: R$ ${total.toFixed(2)}`);
}

// Bônus: Operações com array
function operacoesArray(arr) {
  const soma = arr.reduce((a, b) => a + b, 0);
  const pares = arr.filter(n => n % 2 === 0);
  const media = soma / arr.length;
  const ordenado = [...arr].sort((a, b) => a - b);
  
  return { soma, pares, media, ordenado };
}

// Menu principal para executar as funções
function main() {
  console.log(`
  1. Dias da semana
  2. Menu CRUD
  3. Venda Hotdogs
  4. Remove vogais
  5. Calculadora
  6. Nomes inversos
  7. Jokenpo
  8. Multa velocidade
  9. Tempo vida fumante
  10. Aluguel carro
  11. Operações array (bônus)`);
  
  const opcao = readline.questionInt('Escolha uma função (1-11): ');
  
  switch (opcao) {
    case 1: diasDaSemana(); break;
    case 2: menuCRUD(); break;
    case 3: 
      const qtd = readline.questionInt('Quantidade de hotdogs: ');
      console.log(`Total: ${vendaHotDogs(qtd)} centavos`);
      break;
    case 4:
      const texto = readline.question('Digite um texto: ');
      console.log(removeVogais(texto));
      break;
    case 5:
      const a = readline.questionFloat('Número 1: ');
      const b = readline.questionFloat('Número 2: ');
      const op = readline.question('Operador (+, -, *, /): ');
      console.log(calculadora(a, b, op));
      break;
    case 6: nomesInversos(); break;
    case 7: jokenpo(); break;
    case 8: calculaMulta(); break;
    case 9: tempoVidaFumante(); break;
    case 10: aluguelCarro(); break;
    case 11:
      const nums = readline.question('Digite números separados por vírgula: ')
        .split(',').map(Number);
      console.log(operacoesArray(nums));
      break;
    default: console.log('Opção inválida!');
  }
}

// Inicia o programa
main();