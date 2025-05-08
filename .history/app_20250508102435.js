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


const menuDeCadastro = () => {
  console.log{
    `
    C) Create	(Cadastrar/Inserir)
    R) Read	(Buscar/Ler)
    U) Update	(Editar/Atualizar)
    D) Delete	(Excluir/Apagar)
    `
  };

  const menu = readline.question("Digite uma opção: ").toUpperCase()
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

// Exemplo de uso:
menuDeCadastro("C"); // Vai mostrar "Cadastrar"
