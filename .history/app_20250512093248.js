const readline = require("readline-sync");
//                                 SO ESTA FUNCIONANDO ATE O 3!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// //pra receber valor
// readline.question('Ola, mundo?');

// //pra exibir na tela
// console.log();
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
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

// 2-
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
          
          // 3 - Crie uma função vendaHotDogs que recebe n (quantidade de hotdogs). Dependendo da quantidade, o preço unitário varia:
          // Quantidade de hotdogs
          // Preço por unidade (centavos)
          // n < 5
          // 100
          // 5 ≤ n < 10
          // 95
          // n ≥ 10
          // 90
          
          function vendaHotDogs (n) {
            let precoUni;
            
            if ( n < 5) {
              precoUni = 100;
            }
            
            else if (n >= 5 && n < 10){
              precoUni = 95;
            }
            
            else {
              precoUni = 90;
            }
            
            
            console.log(`\nVocê comprou ${n} hotdog(s).`);
            console.log(`Preço unitário: ${precoUni} centavos`);
            
          }
          
          //4 - Escreva uma função que remova todas as vogais de uma string de entrada.
          // Exemplo:
          // "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!"
          
          function removeVogais(str) {
            return str.replace(/[aeiouAEIOU]/g, '');
          }
          
          // Solicita ao usuário para digitar a frase
          let frase = readline.question("Digite uma frase para remover as vogais: ");
          
          // Chama a função e exibe o resultado
          let resultado = removeVogais(frase);
          console.log("Frase sem vogais:", resultado);
          
          
          // 5- Faça uma função em que receba três argumentos
          // Dois números
// operador aritmético
// A partir desta função retorne o cálculo desejado com os dois números

function calculadora(numero1, numero2, operadorAritmetico) {
  switch (operadorAritmetico) {
    case "+":
      return numero1 + numero2;
    case "-":
      return numero1 - numero2;
    case "*":
      return numero1 * numero2;
    case "/":
      if (numero2 === 0) {
        return "Operação Invalida";
      }
      return numero1 / numero2;
    case "%":
      return numero1 % numero2;
    default:
      return "operação invalida";
  }
}
// const numero1 = readline.questionInt("Digite um numero:")
// const numero2 = readline.questionInt("Digite o segundo numero:")
// const operadorAritmetico = readline.question("Digite um operador:")

// console.log(`Resultado: ${numero1} ${operadorAritmetico} ${numero2} = ${calculadora(numero1, numero2, operadorAritmetico)}`); */

// 6- Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.
const listaNomes = () => {
  let nomes = [];
  let nomesInvertido = [];
  for (let i = 0; i < 7; i++) {
    let nome = readline.question(`Digite o nome da pessoa ${i + 1}:`);
    nomes.push(nome);
  }
  for (let i = 6; i >= 0; i--) {
    nomesInvertido.push(nomes[i]);
  }
  console.log("Nome das pessoas inversamente:");
  nomes.reverse().forEach((nome, index) => {
    console.log(`${index + 1}${nome}`);
  });
};

//7- Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)

//8-  Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor damulta, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

//9- Escreva um programa para calcular a redução do tempo de vida de um fumante. 
//Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

//10- Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. 
//O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. 
//Além disso, o cliente paga por Km percorrido. 
//Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. 
//No final, mostre o preço a ser pago de acordo com os dados a seguir:

// Carros populares
// Até 100 Km percorridos: R$ 0,20 por Km
// Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// Até 200 Km percorridos: R$ 0,30 por Km
// Acima de 200 Km percorridos: R$ 0,25 por Km

// BONUS:
// Escreva uma função que receba uma array  de numeros como argumento, a partir dela, retorne :
// A soma dos numeros
// Os numeros pares dentro da array
// A media dos numeros
// A ordem crescente dos numeros
// Todos os numeros multiplicados por 2

const arrayMethods = (array, option) => {
  let resultado;
  switch (option) {
    // A soma dos numeros
    case 1:
      resultado = array.reduce((acc, num) => {
        acc + num;
      }, 0);
      break;
    // Os numeros pares dentro da array
    case 2:
      resultado = array.filter((n) => {
        n % 2 === 0;
      });
      break;
    // A media dos numeros
    case 3:
      resultado = array.reduce((acc, num) => {
        acc + num;
      }, 0);
      resultado = resultado / array.length;
      break;
    case 4:
      // A ordem crescente dos numeros
      resultado = array.sort((a, b) => a - b);
      break;
    case 5:
      // Todos os numeros multiplicados por 2
      resultado = array.map((numero) => {
        return numero * 2;
      });
      break;
  }
  return resultado;
};

const listaNumeros = [12, 5, 3, 9];

console.log(arrayMethods(listaNumeros, 2));

// Crie uma função que retorne a quantidade de itens de um array

const qtdItensArray = (array) => {
  return array.length;
};

// Crie uma função que retorne todos os números pares deste array [1,2,3,4,5,6,7,8,9,10]

const numerosPares = (array) => {
  return array.filter((n) => n % 2 === 0);
};

// Crie uma função que transforme frases de snake_case para camelCase

// Crie uma função que retorne "true" caso todos os itens de um array obedecerem a uma condição

// Crie uma função em que verifica a força da senha:
// - Letra Maiuscula
// - numero
// - caractere especial
// - minimo 8 careteres (obrigatorio)

// forte: 4 requisitos
// medio: pelo menos 3 requisitos
// fraca: 2 requisitos
// muito fraca: 1 requisito
// invalida: 0 requisitos