/*
Aula 1: O Que é e para que Serve o Switch/Case (A Estrutura Básica)
Conceito
O switch é uma estrutura de controle de fluxo condicional. Ele avalia uma expressão uma única vez e compara o resultado dessa expressão com múltiplos valores possíveis (chamados de case). Quando encontra uma correspondência exata, o JavaScript executa o bloco de código associado. Ele é uma alternativa mais limpa e legível ao encadeamento excessivo de if / else if / else quando precisamos comparar uma mesma variável com vários valores estáticos.

Debaixo do Capô
Diferente de um encadeamento de if/else (onde cada condição é avaliada sequencialmente até uma ser verdadeira), o motor do JavaScript avalia a expressão do switch apenas uma vez.
A expressão interna do switch(expressao) é resolvida e seu valor é guardado em memória.
O motor faz uma comparação estrita (identidade e tipo, equivalente ao operador ===) entre o valor guardado e o valor de cada case.
Se houver correspondência, o ponteiro de execução salta diretamente para o bloco daquele case.
switch (perfilUsuario): Define a variável que será analisada.
case 'admin':: Verifica se perfilUsuario === 'admin'.
break;: Interrompe a execução do switch. Sem ele, o JavaScript continuaria executando os cases de baixo mesmo sem testar a condição (comportamento conhecido como fall-through).
default:: O bloco padrão. Funciona como o else final, executado se nenhuma correspondência for encontrada.
*/

const perfilUsuario = "admin";

// Erro clássico: Esquecer o break
switch (perfilUsuario) {
  case "admin":
    console.log("Vai passar");
  case "editor":
    console.log("por todos");
  case "visitante":
    console.log("os cases");
  default:
    console.log("Deu tudo errado");
}

// Maneira correta: Lembrar do break
switch (perfilUsuario) {
  case "admin":
    console.log("Acesso total ao sistema concedido.");
    break;
  case "editor":
    console.log("Permissão para criar e editar conteúdo.");
    break;
  case "visitante":
    console.log("Acesso apenas para leitura.");
    break;
  default:
    console.log("Perfil não reconhecido. Acesso negado.");
    break;
}

// Exercício 1: O Que é e para que Serve o Switch/Case (A Estrutura Básica)
const statusPedido = "enviado";

switch (statusPedido) {
  case "criado":
    console.log("Aguardando confirmação de pagamento.");
    break;
  case "pago":
    console.log("Pagamento aprovado. Preparando envio.");
    break;
  case "enviado":
    console.log("Pedido enviado. Acompanhe pelo código de rastreio.");
    break;
  case "entregue":
    console.log("Pedido entregue com sucesso.");
    break;
  default:
    console.log("Status de pedido inválido.");
}

//=======================================================

/*
Aula 2: O Comportamento Fall-Through (Agrupamento de Casos)
Conceito
Por padrão, quando o JavaScript encontra uma correspondência em um case, ele executa o bloco de código associado e continua descendo pelos próximos cases de forma sequencial, ignorando as validações, até encontrar uma palavra-chave break ou o fim do bloco switch.
Embora esquecer o break seja um erro comum, podemos transformar esse comportamento (chamado de fall-through) em um recurso poderoso: agrupar múltiplos casos que devem executar a mesma ação.

Debaixo do Capô
Quando o motor do JavaScript faz a comparação estrita e encontra o case correspondente, ele altera o ponteiro de execução para a primeira linha daquele bloco.
Se o bloco não terminar com break, o motor simplesmente avança para a próxima instrução na memória. Como as palavras-chave case valor: subsequentes são apenas rótulos (labels) de sinalização e não testes condicionais ativos após a primeira correspondência, o interpretador passa direto por eles e executa o código que estiver lá dentro.
Se diaSemana for 'Segunda-feira', o motor entra no primeiro case. Como não há código nem break, ele cai (fall-through) pelos próximos cases até achar o console.log e o break na 'Sexta-feira'.
*/

const diaDaSemana = "Domingo";

switch (diaDaSemana) {
  case "Segunda-feira":
  case "Terça-feira":
  case "Quarta-feira":
  case "Quinta-feira":
  case "Sexta-feira":
    console.log("Dia de trabalhar.");
    break;
  case "Sábado":
  case "Domingo":
    console.log("Final de semana! Descanso.");
    break;
  default:
    console.log("Dia inválido.");
    break;
}

// Exercício 2: O Comportamento Fall-Through (Agrupamento de Casos)
const corPulseira = "Amarela";

switch (corPulseira) {
  case "Vermelha":
  case "Laranja":
    console.log("Atendimento imediato. Risco crítico.");
    break;
  case "Amarela":
  case "Verde":
    console.log("Atendimento intermediário. Aguarde na sala de espera.");
    break;
  case "Azul":
    console.log("Caso não urgente. Encaminhar para o posto de saúde.");
    break;
  default:
    console.log("Cor de pulseira inválida ou não identificada.");
}

//=======================================================

/*
Aula 3: A Expressão Condicional Verdadeira (switch (true))
Conceito
Até agora, vimos o switch testar uma única variável contra valores estáticos. No entanto, existe um padrão avançado em JavaScript onde passamos o valor booleano true diretamente na expressão do switch.
Isso muda a dinâmica da estrutura: em vez de comparar uma variável com valores fixos, o switch passa a avaliar expressões condicionais completas (com operadores lógicos, relacionais, etc.) dentro de cada case.

Debaixo do Capô
Lembra-se de que o motor do JavaScript avalia a expressão do switch uma vez e faz uma comparação estrita (===) com o resultado de cada case?
Quando escrevemos switch (true), o valor guardado na memória é o booleano true.
Ao chegar nos cases:
O motor executa a expressão contida no case (ex: case idade >= 18:).
Essa expressão é resolvida para um booleano (true ou false).
O motor faz a comparação estrita: true === (resultado do case).
Se o resultado do case for true, a correspondência é feita e o bloco é executado.
Isso transforma o switch em uma estrutura capaz de avaliar faixas de valores ou múltiplas variáveis diferentes em um único bloco.
Nota de Fluxo: A ordem dos cases importa muito aqui. Como o motor executa de cima para baixo, a primeira expressão que retornar true será a executada. Se pontuacao for 95, ela bate no primeiro case e para. Se invertêssemos a ordem colocando >= 50 no topo, o código entraria no bloco errado.
*/

const pontuacao = 85;

switch (true) {
  case pontuacao >= 90:
    console.log("Desempenho: Excelente (A).");
    break;
  case pontuacao >= 70:
    console.log("Desempenho: Bom (B).");
    break;
  case pontuacao >= 50:
    console.log("Desempenho: Regular (C).");
    break;
  default:
    console.log("Desempenho: Insuficiente (F).");
    break;
}

// Exercício 3: A Expressão Condicional Verdadeira (switch (true))
const valorCarrinho = 550;

switch (true) {
  case valorCarrinho >= 500:
    console.log("Frete Grátis + 10% de desconto na próxima compra.");
    break;
  case valorCarrinho >= 200:
    console.log("Frete Grátis.");
    break;
  case valorCarrinho > 0:
    console.log("Frete fixo de R$ 20,00.");
    break;
  case valorCarrinho <= 0:
    console.log("Carrinho vazio ou valor inválido.");
    break;
  default:
    console.log("Algo deu errado.");
    break;
}

//=======================================================

/*
Aula 4: Escopo de Bloco e Mascaramento de Variáveis (Shadowing)
Conceito
Ao declarar variáveis dentro de estruturas condicionais, o comportamento do switch/case pode pegar desenvolvedores desprevenidos. Diferente de um bloco if, onde cada condicional normalmente abre um par de chaves próprio { }, todo o corpo de um switch compartilha o mesmo escopo de bloco.

Debaixo do Capô
Em JavaScript, variáveis declaradas com let ou const possuem escopo de bloco (delimitado por chaves { }). No switch, as chaves envolvem a estrutura inteira e não os cases individuais.
Como o motor do JavaScript interpreta todo o interior do switch como um único bloco de código, tentar redeclarar uma variável com o mesmo nome em cases diferentes gera um erro de sintaxe impeditivo.
Para isolar variáveis por caso, precisamos criar escopos léxicos locais explicitamente envolvendo o código do case em chaves {}.
*/

// Maneira errada
// switch (
//   expressao // <-- Início do escopo do bloco switch
// ) {
//   case A:
//     let x = 1;
//     break;
//   case B:
//     let x = 2; // SyntaxError: Identifier 'x' has already been declared
//     break;
// } // <-- Fim do escopo do bloco switch

// Maneira correta
const acao = "criar";

switch (acao) {
  case "criar": {
    const mensagem = "Registro criado com sucesso.";
    console.log(mensagem);
    break;
  }
  case "deletar": {
    const mensagem = "Registro removido.";
    console.log(mensagem);
    break;
  }
  default:
    console.log("Ação inválida.");
    break;
}

// Exercício 4: Escopo de Bloco e Mascaramento de Variáveis (Shadowing)
const tipoLog = "falha";

switch (tipoLog) {
  case "info": {
    const logFormatado = "[INFO]: Operação realizada com sucesso.";
    console.log(logFormatado);
    break;
  }
  case "warning": {
    const logFormatado = "[AVISO]: Uso de memória acima de 80%.";
    console.log(logFormatado);
    break;
  }
  case "error": {
    const logFormatado = "[ERRO]: Falha crítica ao conectar ao banco de dados.";
    console.log(logFormatado);
    break;
  }
  default: {
    // const logFormatado = "[LOG]: Tipo de log desconhecido."; // Para teste
    // console.log(logFormatado); // Para teste
    console.log("[LOG]: Tipo de log desconhecido.");
    break;
  }
}

//=======================================================

/*
Aula 5: Padrões Avançados e o Padrão de Substituição (Object Literal Lookup)
Conceito
Chegamos ao nível avançado. Embora o switch seja excelente para organizar fluxos, à medida que o número de casos cresce, ele pode se tornar visualmente verboso devido à repetição sistemática de palavras-chave como case, break e default.
Em JavaScript, desenvolvedores sêniores frequentemente substituem grandes estruturas switch puras por um padrão de arquitetura de código conhecido como Object Literal Lookup (Mapeamento via Objeto Literal), tratando funções ou dados como cidadãos de primeira classe.

Debaixo do Capô
Quando o motor do JavaScript avalia um switch, ele precisa percorrer os rótulos de memória sequencialmente (complexidade de tempo linear na pior das hipóteses, $O(n)$).Quando usamos um Objeto Literal, mapeamos chaves diretamente para seus respectivos valores ou funções:
O objeto é alocado em memória como uma tabela de espalhamento (hash table).
Para acessar o valor correspondente, usamos a notação de colchetes: objeto[chave].
O motor do JavaScript busca a chave diretamente na tabela de hash. O tempo de acesso é constante ($O(1)$), o que é computacionalmente ultraeficiente.
O operador de coalescência nula (??) ou o operador lógico OR (||) é anexado no final para simular o comportamento do default.
*/

const comando = "pausar";

// Abordagem tradicional
switch (comando) {
  case "play":
    console.log("Iniciando mídia...");
    break;
  case "pausar":
    console.log("Mídia pausada.");
    break;
  default:
    console.log("Comando desconhecido.");
    break;
}

// Abordagem avançada (Object Lookup)
const acoesMidia = {
  play: "Iniciando mídia...",
  pausar: "Mídia pausada.",
};

// Faz a busca direta. Se retornar undefined, assume o valor padrão.
const mensagem = acoesMidia[comando] ?? "Comando desconhecido.";
console.log(mensagem);

// Exercício 5: Padrões Avançados e o Padrão de Substituição (Object Literal Lookup)
const siglaMoeda = "BRL";

const siglaCorrespondente = {
  USD: "Dólar Americano ($)",
  EUR: "Euro (€)",
  BRL: "Real Brasileiro (R$)",
  JPY: "Iene Japonês (¥)",
};

const resultadoMoeda =
  siglaCorrespondente[siglaMoeda] ?? "Moeda estrangeira não suportada.";

console.log(resultadoMoeda);
