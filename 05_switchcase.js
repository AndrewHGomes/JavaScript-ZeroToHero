/*
AULA 1: A Sintaxe Básica e a Comparação Estrita
O Conceito
O switch avalia uma expressão uma única vez e compara o resultado com diferentes cláusulas case. Se houver uma correspondência, o bloco de código associado é executado. O default serve como um "fallback" (reserva), caso nenhuma correspondência seja encontrada.

Debaixo do Capô
Diferente de algumas outras linguagens, o JavaScript utiliza a comparação estrita (operador ===) para validar os casos. Isso significa que o interpretador verifica tanto o valor quanto o tipo do dado. Além disso, o motor do JS executa o código sequencialmente após encontrar um case verdadeiro até encontrar a palavra-chave break ou o fim do bloco.
*/

const cargoUsuario = "admin";

switch (cargoUsuario) {
  case "admin":
    console.log("Acesso total ao sistema.");
    break;
  case "editor":
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

const acao = "atualizar";

switch (acao) {
  case "criar": {
    const mensagem = "Criando registro...";
    console.log(mensagem);
    break;
  }
  case "atualizar": {
    const mensagem = "Atualizando registro...";
    console.log(mensagem);
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

const pontuacao = 85;

switch (true) {
  case pontuacao >= 90:
    console.log("Grau A");
    break;
  case pontuacao >= 80:
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
AULA 5: A Ordem do Default e a Continuidade de Fluxo
O Conceito
Quase sempre colocamos o default no final do switch, mas ele não precisa estar lá. O default pode ser colocado em qualquer posição. Se ele for colocado no topo ou no meio e não tiver um break, o JavaScript executará o default (caso nenhum case anterior combine) e continuará "caindo" nos próximos cases abaixo dele, independentemente de os valores combinarem.

Debaixo do Capô
O motor do JS faz duas passagens lógicas:
Primeiro, ele procura por uma correspondência exata nos cases.
Se não encontrar nenhuma, ele pula para a linha do default.
Uma vez dentro do default, se não houver um break, ele segue a execução sequencial (fall-through) para os blocos de baixo, ignorando as validações dos case subsequentes.
*/

const nivelAcesso = "visitante";

switch (nivelAcesso) {
  default:
    console.log("Log: Acesso padrão gerado.");
  // Sem break, ele vai executar o próximo case mesmo sendo "admin"
  case "admin":
    console.log("Exibindo Painel de Controle.");
    break;
}

// Resultado para "visitante":
// Log: Acesso padrão gerado.
// Exibindo Painel de Controle.

// EXERCÍCIO 5: A Ordem do Default e a Continuidade de Fluxo
const statusAlerta = "desconhecido";

switch (statusAlerta) {
  default:
    console.log("Registrando log simples...");
  case "critico":
    console.log("DISPARANDO ALARME SONORO!");
    break;
}

//=========================================================

/*
AULA 6: Switch com Expressões e Coerção de Tipos
O Conceito
Diferente de outras estruturas onde o valor do case é uma constante estática, no JavaScript o case pode aceitar expressões. Você pode realizar cálculos ou chamadas de métodos dentro da cláusula case. No entanto, a regra de ouro permanece: o resultado dessa expressão será comparado com o valor do switch usando comparação estrita (===).

Debaixo do Capô
O interpretador avalia a expressão principal do switch uma vez. Depois, ele avalia cada expressão de cada case sequencialmente. Se o valor do switch for um Number 10 e o seu case resultar em uma String "10", a correspondência falhará. Não há coerção implícita de tipos (como ocorre com ==).
*/

const base = 10;
const multiplicador = 2;

switch (20) {
  case "20":
    console.log("Isso nunca será executado se o switch for número.");
    break;
  case base * multiplicador:
    console.log("A expressão resultou em 20!");
    break;
  default:
    console.log("Não existe");
    break;
}

// EXERCÍCIO 6: Switch com Expressões e Coerção de Tipos
const referencia = 5;
const entrada = 15;

switch (entrada) {
  case referencia * 2:
    console.log("Valor é o dobro");
    break;
  case referencia * 3:
    console.log("Valor é o triplo");
    break;
  case "15":
    console.log("String 15");
    break;
  default:
    console.log("Sem correspondência");
    break;
}

//=========================================================

/*
AULA 7: Armadilhas Comuns e Comportamentos Inesperados
O Conceito
Apesar de sua sintaxe simples, o switch possui algumas armadilhas clássicas que podem gerar bugs silenciosos. Esses problemas geralmente estão relacionados à execução sequencial dos cases, à comparação estrita e à ordem das condições.

Debaixo do Capô
O switch segue três regras principais: comparação com ===, execução contínua após encontrar um case válido (até um break), e avaliação de cima para baixo. Quando o desenvolvedor ignora essas regras, o código pode se comportar de forma diferente do esperado.

Exemplos de Armadilhas:
1. Esquecer o break: Causa o "atropelamento" dos cases seguintes.
2. Comparação de Tipos: switch(1) não entra no case "1".
3. Variáveis Compartilhadas: Tentar usar 'const x' em dois cases sem blocos {}.
*/

const valor = "1";

switch (valor) {
  case 1:
    console.log("Isso não executa devido ao tipo (Number vs String)");
    break;
  case "1":
    console.log("Isso executa!");
  // Se esquecer o break aqui...
  case "2":
    console.log("Isso também executaria se o de cima não tivesse break!");
    break;
}

// EXERCÍCIO 7: Identificando Armadilhas
const nivelFruta = 1;

switch (nivelFruta) {
  case 1: {
    const nome = "Maçã";
    console.log(nome);
    break;
  }
  case 2: {
    const nome = "Pera"; // Sem as chaves {}, isso daria erro de redeclaração
    console.log(nome);
    break;
  }
  default:
    console.log("Fruta desconhecida");
    break;
}
