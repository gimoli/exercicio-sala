// const readline = require("readline-sync");

// //pra receber valor
// readline.question('Ola, mundo?');

// //pra exibir na tela
// console.log();
const readline = require('readline-sync');

// 1. Dias da semana
function diasDaSemana() {
  const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
  const num = readline.questionInt('Digite um número (1-7): ');
  console.log(num >= 1 && num <= 7 ? dias[num-1] : 'Número inválido!');
}

// 2. Menu CRUD
function menuCRUD() {
  const cadastros = [];
  
  while (true) {
    console.log('\n[C] Cadastrar\n[L] Listar\n[E] Editar\n[R] Remover\n[S] Sair');
    const op = readline.question('Opcao: ').toUpperCase();
    
    if (op === 'C') cadastros.push(readline.question('Nome: '));
    else if (op === 'L') console.log(cadastros.length ? cadastros : 'Lista vazia!');
    else if (op === 'E') {
      const i = readline.questionInt('Índice: ');
      if(i >= 0 && i < cadastros.length){
        cadastros[i] = readline.question('Novo nome: ');
      }
      else{
        console.log("Índice inválido!");
      }
    }
    else if (op === 'R') {
      const i = readline.questionInt('Índice: ');
      if(i >= 0 && i < cadastros.length){
        cadastros.splice(i, 1);
      }
      else{
        console.log("Índice inválido!");
      }
    }
    else if (op === 'S') break;
     else {
        console.log("Opção inválida. Tente novamente.");
    }
  }

}

// 3. Venda de Hotdogs
function vendaHotDogs() {
  const qtd = readline.questionInt('Quantos hotdogs? ');
  const preco = qtd < 5 ? 100 : qtd < 10 ? 95 : 90;
  console.log(`Total: R$ ${(qtd * preco / 100).toFixed(2)}`);
}

// 4. Remover vogais
function removeVogais() {
  const texto = readline.question('Digite um texto: ');
  console.log(texto.replace(/[aeiou]/gi, ''));
}

// 5. Calculadora
function calculadora() {
  const a = readline.questionFloat('Número 1: ');
  const b = readline.questionFloat('Número 2: ');
  const op = readline.question('Operador (+, -, *, /): ');
  
  let resultado;
  if (op === '+') resultado = a + b;
  else if (op === '-') resultado = a - b;
  else if (op === '*') resultado = a * b;
  else if (op === '/') resultado = a / b;
  else resultado = 'Operador inválido';
  
  console.log('Resultado:', resultado);
}

// 6. Nomes inversos
function nomesInversos() {
  const nomes = [];
  for (let i = 0; i < 7; i++) {
    nomes.push(readline.question(`Nome ${i+1}: `));
  }
  console.log('Nomes na ordem inversa:', nomes.reverse());
}

// 7. Jokenpo
function jokenpo() {
  const opcoes = ['Pedra', 'Papel', 'Tesoura'];
  const jogadaPC = Math.floor(Math.random() * 3);
  const jogadaUser = readline.keyInSelect(opcoes, 'Escolha:');
  
  if (jogadaUser === -1) return;
  
  console.log(`Você: ${opcoes[jogadaUser]} × PC: ${opcoes[jogadaPC]}`);
  
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
  const diasPerdidos = (cigarrosDia * 10 * anos * 365) / 1440;
  console.log(`Dias de vida perdidos: ${Math.round(diasPerdidos)}`);
}

// 10. Aluguel de carros
function aluguelCarro() {
  const tipo = readline.question('Tipo (popular/luxo): ').toLowerCase();
  const dias = readline.questionInt('Dias alugados: ');
  const km = readline.questionFloat('Km rodados: ');
  
  let total = tipo === 'popular' ? 90 * dias : 150 * dias;
  
  if (tipo === 'popular') {
    total += km <= 100 ? km * 0.2 : 20 + (km - 100) * 0.1;
  } else {
    total += km <= 200 ? km * 0.3 : 60 + (km - 200) * 0.25;
  }
  
  console.log(`Total a pagar: R$ ${total.toFixed(2)}`);
}

// 11. Operações com array (Bônus)
function operacoesArray() {
  const nums = readline.question('Digite números separados por vírgula: ')
    .split(',').map(Number);
  
  console.log('Soma:', nums.reduce((a, b) => a + b, 0));
  console.log('Pares:', nums.filter(n => n % 2 === 0));
  console.log('Média:', (nums.reduce((a, b) => a + b, 0) / nums.length));
  console.log('Ordenados:', [...nums].sort((a, b) => a - b));
}

/************************
 * TESTANDO AS FUNÇÕES   *
 * Descomente a que quiser *
 ************************/

diasDaSemana();
 menuCRUD();
// vendaHotDogs();
// removeVogais();
// calculadora();
// nomesInversos();
// jokenpo();
// calculaMulta();
// tempoVidaFumante();
// aluguelCarro();
// operacoesArray();
