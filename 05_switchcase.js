/*
AULA 1: A Sintaxe Básica e a Comparação Estrita
O Conceito
O switch avalia uma expressão uma única vez e compara o resultado com diferentes cláusulas case. Se houver uma correspondência, o bloco de código associado é executado. O default serve como um "fallback" (reserva), caso nenhuma correspondência seja encontrada.

Debaixo do Capô
Diferente de algumas outras linguagens, o JavaScript utiliza a comparação estrita (operador ===) para validar os casos. Isso significa que o interpretador verifica tanto o valor quanto o tipo do dado. Além disso, o motor do JS executa o código sequencialmente após encontrar um case verdadeiro até encontrar a palavra-chave break ou o fim do bloco.
*/

const userRole = "admin";

switch (userRole) {
  case "admin":
    console.log("Acesso total ao sistema.");
    break; // Interrompe a execução para não "vazar" para o próximo case
  case "edito":
    console.log("Acesso apenas para edição de conteúdo.");
    break;
  default:
    console.log("Perfil de convidado: acesso restrito.");
    break;
}

// EXERCÍCIO 1: A Sintaxe Básica e a Comparação Estrita
const httpStatus = 404;

switch (httpStatus) {
  case 200:
    console.log("Sucesso");
    break;
  case 404:
    console.log("Erro do cliente");
    break;
  case 500:
    console.log("Erro do servidor");
    break;
  default:
    console.log("Status desconhecido");
    break;
}

//=========================================================

/*
AULA 2: Fall-through (Agrupamento de Casos)
O Conceito
Embora o "vazamento" de um case para outro seja geralmente um erro, ele pode ser usado intencionalmente para agrupar múltiplos valores que devem executar a mesma lógica. Isso evita a repetição de código (princípio DRY - Don't Repeat Yourself).

Debaixo do Capô
Quando o motor do JavaScript encontra um case correspondente e não encontra um break, ele simplesmente ignora a verificação do próximo case e executa o código que está lá dentro. Ele continuará executando cada instrução subsequente até encontrar um break ou o fechamento } do switch.
*/

const dia = "Segunda";

switch (dia) {
  case "Segunda":
  case "Terça":
  case "Quarta":
  case "Quinta":
  case "Sexta":
    console.log("Dia útil. Hora de trabalhar");
    break;
  case "Sábado":
  case "Domingo":
    console.log("Final de semana! Descanso merecido.");
    break;
  default:
    console.log("Dia inválido.");
    break;
}

// EXERCÍCIO 2: Fall-through (Agrupamento de Casos)
const produto = "Monitor";

switch (produto) {
  case "Maçã":
  case "Banana":
  case "Morango":
    console.log("Categoria: Frutas");
    break;
  case "Cenoura":
  case "Batata":
  case "Brócolis":
    console.log("Categoria: Legumes");
    break;
  case "Monitor":
  case "Teclado":
    console.log("Categoria: Eletrônicos");
    break;
  default:
    console.log("Categoria: Outros");
    break;
}

//=========================================================

/*
AULA 3: Switch Expressions e Blocos de Escopo
O Conceito
Por padrão, o switch compartilha o mesmo escopo de bloco para todos os seus casos. Isso significa que, se você declarar uma variável com let ou const dentro de um case, e tentar declarar outra com o mesmo nome em outro case, o JavaScript lançará um erro de sintaxe (Redeclaration error). Para isolar variáveis por caso, usamos chaves {} para criar blocos léxicos.

Debaixo do Capô
O switch cria um único bloco de código entre suas chaves principais {...}. Variáveis declaradas ali "sobem" ou existem para todo o corpo do switch. Ao envolver o conteúdo de um case com um par de chaves próprio, você cria um escopo de bloco aninhado, permitindo o uso de nomes de variáveis idênticos em diferentes casos sem conflitos.
*/

const action = "update";

switch (action) {
  case "create": {
    const message = "Criando registro..."; // Escopo isolado
    console.log(message);
    break;
  }
  case "update": {
    const message = "Atualizando registro..."; // Sem conflito com o 'message' acima
    console.log(message);
    break;
  }
  default:
    console.log("Ação desconhecida.");
    break;
}

// EXERCÍCIO 3: Switch Expressions e Blocos de Escopo
const operacao = "divisão";
const n1 = 5;
const n2 = 10;

switch (operacao) {
  case "soma": {
    const resultado = n1 + n2;
    console.log(`${n1} + ${n2} = ${resultado}`);
    break;
  }
  case "multiplicação": {
    const resultado = n1 * n2;
    console.log(`${n1} x ${n2} = ${resultado}`);
    break;
  }
  default:
    console.log("ERRO: Operação inválida");
    break;
}

//=========================================================

/*
AULA 4: Switch (true) e Condicionais Dinâmicas
O Conceito
O switch tradicional compara um valor contra cláusulas. O switch (true) inverte essa lógica: ele compara o valor booleano true contra expressões lógicas nos cases. O primeiro case que resultar em uma expressão verdadeira (true === true) será executado.

Debaixo do Capô
O JavaScript avalia a expressão de cada case individualmente, da esquerda para a direita e de cima para baixo. É uma forma de escrever múltiplos if/else if de maneira mais organizada, permitindo o uso de operadores de comparação (>, <, >=, <=, &&, ||) que o switch comum não suporta.
*/

const score = 85;

switch (true) {
  case score >= 90:
    console.log("Grau A");
    break;
  case score >= 80:
    console.log("Grau B");
    break;
  default:
    console.log("Grau C ou inferior");
    break;
}

// EXERCÍCIO 4: Expressões Complexas e Casos Dinâmicos
const idade = -5;

switch (true) {
  case idade >= 0 && idade < 13:
    console.log("Criança");
    break;
  case idade >= 13 && idade <= 17:
    console.log("Adolescente");
    break;
  case idade >= 18 && idade <= 64:
    console.log("Adulto");
    break;
  case idade >= 65:
    console.log("Idoso");
    break;
  default:
    console.log("Idade inválida");
    break;
}

//=========================================================

/*
AULA 5: Otimização com Objetos (O "Pattern" Moderno)
O Conceito
Em JavaScript moderno, quando o switch começa a ficar muito grande ou complexo, desenvolvedores sêniores costumam substituí-lo por um Object Literal. Isso transforma uma estrutura de controle de fluxo em uma estrutura de dados, tornando o código mais limpo, fácil de testar e com performance ligeiramente superior para grandes volumes de casos.

Debaixo do Capô
Enquanto o switch percorre os casos sequencialmente ($O(n)$), o acesso a uma propriedade de objeto é uma busca direta via hash table ($O(1)$). Além disso, essa abordagem permite usar funções de primeira classe (armazenar funções dentro do objeto) para executar lógicas específicas.
*/

function getStatusMessage(status) {
  const messages = {
    success: "Operação realizada!",
    error: "Algo deu errado.",
    loading: "Carregando...",
  };

  // O uso do operador || serve como o "default" do switch
  return messages[status] || "Status desconhecido";
}

console.log(getStatusMessage("loading"));

// EXERCÍCIO 5: Otimização com Objetos (O "Pattern" Moderno)
const executarOperacao = (a, b, operador) => {
  const operacoes = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  return operacoes[operador](a, b) || "Operação inválida";
};

console.log(executarOperacao(10, 2, "x"));
