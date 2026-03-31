/*
Aula 01: O Conceito de Variável e let
Explicação Sucinta
Pense em uma variável como uma caixa com uma etiqueta (o nome). Você guarda um valor dentro dessa caixa para poder usá-lo ou alterá-lo mais tarde no seu programa. Sem variáveis, o computador "esqueceria" os dados imediatamente após processá-los.

Debaixo do Capô
Quando você declara uma variável em JavaScript, o motor (como o V8 do Chrome) solicita ao sistema operacional um pequeno espaço na Memória RAM.
Identificador: É o nome que você deu (a etiqueta).
Endereço de Memória: O JavaScript mapeia o seu nome para um endereço hexadecimal real na memória.
Atribuição: O símbolo = não significa "igualdade matemática", mas sim uma operação de atribuição, onde o fluxo de dados vai da direita para a esquerda, preenchendo o espaço reservado.
*/

// Declaramos a variável 'idade' e atribuímos o valor 25
let variavel = "valor da variável";
console.log(`Atribuição: ${variavel}`);

// Podemos alterar o valor dessa "caixa" depois
variavel = "outro valor";
console.log(`Reatribuição: ${variavel}`);

// Exercício 01: O Conceito de Variável e let
let pontuacaoAtual = 0;
let nomeJogador = "Andrew";

pontuacaoAtual = 50;

console.log(`O jogador ${nomeJogador} agora tem ${pontuacaoAtual} pontos.`);

//===========================================================

/*
Aula 02: Constantes com const
Agora que vimos que variáveis podem mudar, precisamos falar sobre o oposto: valores que não devem ser alterados.
Explicação Sucinta
A palavra-chave const (de constant) é usada para declarar variáveis cujo valor não pode ser reatribuído após a definição inicial. É a "caixa lacrada". Se você tentar colocar algo novo lá dentro, o JavaScript travará e emitirá um erro.

Debaixo do Capô
Diferente do let, quando o motor do JavaScript encontra um const, ele cria uma proteção no nível de ligação (binding).
O endereço de memória é reservado e o identificador (nome) fica permanentemente "amarrado" àquele valor inicial. Isso ajuda na performance e, principalmente, na segurança do código, evitando que você sobrescreva dados importantes por acidente (como uma chave de API ou o valor de PI).
*/

const cpf = "123.456.789-00";

// Se tentarmos fazer isso:
// cpf = "000.000.000-00";
// O JavaScript lançará um: "TypeError: Assignment to constant variable."

// Exercício 02: Constantes com const
const codigoProduto = "PROD123";
let preco = 100;

// codigoProduto = "123PROD"; // "TypeError: Assignment to constant variable."
preco = 150;

console.log(`Poduto: ${codigoProduto} | Preço: R$ ${preco.toFixed(2)}`);

//===========================================================

/*
Aula 03: Tipagem Dinâmica e o Operador typeof
Antes de avançarmos para escopos complexos, precisamos entender o que as variáveis guardam.
Explicação Sucinta
O JavaScript é uma linguagem de tipagem dinâmica. Isso significa que você não precisa dizer ao código que uma variável é um "número" ou uma "letra". O tipo é definido pelo valor que está dentro da caixa, e não pela caixa em si. Além disso, uma variável let pode começar guardando um número e terminar guardando um texto sem problemas.

Debaixo do Capô
Diferente de linguagens como C++ ou Java (tipagem estática), onde o tamanho do espaço na RAM é reservado com base no tipo (ex: 4 bytes para um inteiro), o motor do JavaScript armazena o valor junto com uma "etiqueta" interna de tipo. Sempre que você acessa a variável, o motor verifica essa etiqueta para saber como processar o dado. O operador typeof é a ferramenta que nos permite ler essa "etiqueta" em tempo de execução.
*/

let informacao = 42;
console.log(`${informacao} | ${typeof informacao}`); // Saída: "number"

informacao = "Agora sou um texto";
console.log(`${informacao} | ${typeof informacao}`); // Saída: "string"

// Exercício 03: Tipagem Dinâmica e o Operador typeof
let valorGenerico;
console.log(valorGenerico, typeof valorGenerico);

valorGenerico = 14;
console.log(valorGenerico, typeof valorGenerico);

valorGenerico = "texto aqui";
console.log(valorGenerico, typeof valorGenerico);

valorGenerico = false;
console.log(valorGenerico, typeof valorGenerico);

//===========================================================

/*
Aula 04: Escopo de Bloco (Onde a variável "vive")
Agora entramos em um dos conceitos que mais causa confusão em iniciantes, mas que separa os amadores dos profissionais.
Explicação Sucinta
O Escopo determina a visibilidade de uma variável. Imagine que um bloco de código (tudo que está entre { chaves }) é uma sala com vidros espelhados: quem está dentro da sala consegue ver o que está fora, mas quem está fora não consegue ver o que está dentro.
Variáveis declaradas com let e const respeitam o escopo de bloco.

Debaixo do Capô
Quando o motor JavaScript entra em um bloco {...}, ele cria um novo Ambiente Lexical (Lexical Environment). As variáveis declaradas ali dentro só existem enquanto aquele bloco estiver sendo executado. Assim que o motor sai do bloco, esse ambiente é destruído e a memória é liberada (via Garbage Collector). Se você tentar acessar uma variável de dentro do bloco estando do lado de fora, o motor buscará na "tabela de nomes" do escopo atual, não a encontrará e lançará um ReferenceError.
*/

let fora = "Escopo Global";

{
  let dentro = "Escopo Local";
  console.log(fora); // Funciona! (Olhou para fora)
  console.log(dentro); // Funciona! (Está dentro)
}

console.log(fora); // Funciona!
// console.log(dentro); // Erro! ReferenceError: dentro is not defined

// Exercício 04: Escopo de Bloco (Onde a variável "vive")
let usuario = "Admin";

{
  let senha = "4321";

  console.log(usuario);
  console.log(senha);
}

console.log(usuario);
// console.log(senha); // Erro! ReferenceError: dentro is not defined

//===========================================================

/*
Aula 05: O Problema do var (Hoisting e Escopo)
Embora usemos let e const hoje em dia, você encontrará muito var em códigos legados. Entender por que ele é "perigoso" é vital.
Explicação Sucinta
O var é o antepassado do let. Ele tem dois comportamentos estranhos:
Não respeita escopo de bloco: Ele só respeita escopo de funções (que veremos adiante). Se você declarar um var dentro de um { if } ou de um bloco comum, ele "vaza" para fora.
Hoisting (Içamento): Você pode usar uma variável var antes mesmo de declará-la na linha de código, e o JS não dará erro (ela apenas virá como undefined).

Debaixo do Capô
Durante a fase de Compilação/Parsing (antes do código rodar), o motor JS varre o arquivo em busca de declarações. Quando encontra um var, ele reserva o espaço na memória imediatamente no topo do escopo global ou da função. Isso é o Hoisting.
Já o let e o const também sofrem hoisting, mas ficam em uma "Zona Morta Temporal" (Temporal Dead Zone) até que a execução chegue na linha da declaração, impedindo o uso precoce e evitando bugs bizarros.
*/

console.log(nomeVar); // Saída: undefined (com 'let' daria erro!)
var nomeVar = "Zé";

{
  var vazou = "Estou dentro mas sou visto fora também";
}

console.log(vazou); // Saída: "Estou fora!" (com 'let' daria erro!)

// Exercício 05: O Problema do var (Hoisting e Escopo)
console.log(testeHoisting);
var testeHoisting = "testando hoisting";

{
  var segredoVazado = "vazou o segredo";
}

console.log(testeHoisting);
console.log(segredoVazado); // Vazou porque var não respeita blocos, a não ser de funções.

//===========================================================

/*
Aula 06: Tipos Primitivos vs. Referência (Mutabilidade)
Explicação Sucinta
Em JavaScript, as variáveis não guardam todas as coisas da mesma maneira.
Primitivos (String, Number, Boolean, null, undefined, Symbol, BigInt): A variável guarda o valor real. Se você copia uma variável para outra, você cria uma cópia independente.
Referência (Objects, Arrays, Functions): A variável não guarda o objeto em si, mas sim um "endereço" (um ponteiro) que diz onde esse objeto está na memória.

Debaixo do Capô
Stack (Pilha): É uma memória rápida e organizada onde o JS armazena tipos primitivos e os endereços (referências) de objetos.
Heap (Monte): É um espaço de memória maior e menos organizado onde os objetos complexos realmente vivem.
O Problema da Cópia: Quando você faz let a = [1], a guarda o endereço 0x001. Se você faz let b = a, b agora também guarda 0x001. Se você mudar o conteúdo em a, b também muda, pois ambos apontam para o mesmo lugar no Heap.
*/

// Primitivos: Cópia de valor
let x = 10;
let y = x; // y recebe o valor 10
y = 20; // muda y, mas x continua sendo 10

console.log(x, y); // 10, 20

let obj1 = { nome: "caixa" };
let obj2 = obj1; // obj2 aponta para o MESMO objeto que obj1
obj2.nome = "Alterado";

console.log(obj1.nome); // "Alterado" -> Atingiu o original!

// Exercício 06: Tipos Primitivos vs. Referência (Mutabilidade)
let original = 100;
let copia = original;

copia = 200;

console.log(original, copia);

let arrayOriginal = [1, 2, 3];
let arrayCopia = arrayOriginal;

arrayCopia.push(4);

console.log(arrayCopia);
console.log(arrayOriginal); // Aparece aqui pois

//===========================================================

/*
Aula 07: Convenções, Case Sensitivity e Naming
Antes de avançarmos para tipos globais complexos, precisamos entender as regras de "etiquetagem" do JavaScript.
Explicação Sucinta
JavaScript é Case Sensitive (diferencia maiúsculas de minúsculas). let teste e let Teste são duas caixas completamente diferentes. Além disso, a comunidade segue o padrão camelCase para nomear variáveis: a primeira palavra é minúscula e as seguintes começam com maiúscula.

Debaixo do Capô
O motor do JavaScript utiliza uma tabela de símbolos para gerenciar identificadores. Cada nome único que você cria é transformado em um token. Para o motor, os caracteres ASCII/Unicode de nomeUsuario e NomeUsuario geram hashes diferentes na tabela de símbolos, por isso são tratados como entidades distintas na memória.
Existem restrições físicas: nomes não podem começar com números e não podem ser Palavras Reservadas (como let, if, break), pois essas palavras já possuem instruções específicas mapeadas no interpretador.
*/

let usuarioLogado = true; // camelCase (Padrão JS)
let usuariologado = false; // Outra variável diferente

const PI = 3.14; // SCREAMING_SNAKE_CASE (Comum para constantes fixas)

// Erros comuns:
// let 1nome = "Erro"; // Não pode começar com número
// let let = "Erro";   // Palavra reservada

// Exercício 07: Convenções, Case Sensitivity e Naming
let minhaIdade = 37;
// console.log(minhaidade); // minhaidade is not defined

const BRASIL = "Brasil";

let corFundoTela = "dark";

let var1 = "Pode";
// let 1var = 'Não pode' // não podem começar com números
