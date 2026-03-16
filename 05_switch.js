// AULA - Switch/Case - A Estrutura Básica
const fruta = "Maçã";

switch (fruta) {
  case "Banana":
    console.log("R$ 5.00 o quilo.");
    break;
  case "Maçã":
    console.log("R$ 8.00 o quilo.");
    break;
  default:
    console.log("Não temos essa fruta hoje.");
}

// EXERCÍCIO - Switch/Case - A Estrutura Básica
const diaSemana = new Date().getDay();

switch (diaSemana) {
  case 0:
    console.log("É Domingo.");
    break;
  case 1:
    console.log("É Segunda-feira.");
    break;
  case 2:
    console.log("É Terça-feira.");
    break;
  case 3:
    console.log("É Quarta-feira.");
    break;
  case 4:
    console.log("É Quinta-feira.");
    break;
  case 5:
    console.log("É Sexta-feira.");
    break;
  case 6:
    console.log("É Sábado.");
    break;
  default:
    console.log("Dia inexistente");
}

//==================================

// AULA - Agrupamento de Casos (Case Grouping)
const clima = "chuva";

switch (clima) {
  case "chuva":
  case "tempestade":
    console.log("Melhor pegar guarda-chuva e capa de chuva!");
    break;
  case "sol":
  case "limpo":
    console.log("Melhor usar protetor solar!");
    break;
  default:
    console.log("Clima indefinido.");
}

// EXERCÍCIO - Agrupamento de Casos (Case Grouping)
const hora = 14;

switch (hora) {
  case 8:
  case 9:
  case 10:
  case 11:
    console.log("Turno da manhã.");
    break;
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    console.log("Turno da tarde.");
    break;
  default:
    console.log("Fora do horário comercial.");
}

//==================================

// AULA - Comparação Estrita (Strict Typing)
const nota = "10";

switch (nota) {
  case 10:
    console.log("Nota máxima!");
    break;
  default:
    console.log("Nota não reconhecida.");
}

// EXERCÍCIO - Comparação Estrita (Strict Typing)
const codigoProduto = "100";

switch (codigoProduto) {
  case 100:
    console.log("100 - number");
    break;
  default:
    console.log("Código inválido - Verifique o tipo de dado.");
}

//==================================

// AULA - Switch com Expressões (O Truque do true)
const preco = 150;

switch (true) {
  case preco < 50:
    console.log("Barato");
    break;
  case preco >= 50 && preco <= 200:
    console.log("Preço justo");
    break;
  default:
    console.log("Muito caro");
}

// EXERCÍCIO - Switch com Expressões (O Truque do true)
const pontos = 50;

switch (true) {
  case pontos < 10:
    console.log("Iniciante");
    break;
  case pontos >= 10 && pontos <= 20:
    console.log("Intermediário");
    break;
  default:
    console.log("Profissional");
}

//==================================

// AULA - O Perigo do Escopo (Blocos { })
const tipo = "A";

// switch (tipo) {
//   case "A":
//     let msg = "Opção A"; // Erro se o case B também tiver let msg
//     console.log(msg);
//     break;
//   case "B":
//     let msg = "Opção B"; // SyntaxError: Identifier 'msg' has already been declared
//     console.log(msg);
//     break;
// }

// A Solução (Nível Avançado):
switch (tipo) {
  case "A": {
    let msg = "Opção A";
    console.log(msg);
    break;
  }

  case "B": {
    let msg = "Opção B";
    console.log(msg);
    break;
  }
}

// EXERCÍCIO - O Perigo do Escopo (Blocos { })
const operacao = "Soma";

switch (operacao) {
  case "Soma": {
    let resultado = 10 + 5;
    console.log(`O resultado é ${resultado}`);
    break;
  }

  case "Subtracao": {
    let resultado = 10 - 5;
    console.log(`O resultado é ${resultado}`);
    break;
  }

  default:
    console.log("Não existe essa operação.");
}
