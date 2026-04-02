/*
AULA 1: O Conceito de Espaço e Identificação
O que é uma Variável?
Imagine que você está organizando uma mudança. Você tem várias caixas vazias. Para não se perder, você cola uma etiqueta em uma caixa escrita "livros" e coloca seus livros dentro dela.
No JavaScript, uma variável é essa caixa com etiqueta. Ela é um contêiner onde guardamos uma informação (o valor) para que possamos usá-la ou alterá-la mais tarde no código, referenciando-a pelo nome que demos à etiqueta (o identificador).

Debaixo do Capô
Quando você declara uma variável, o JavaScript solicita ao sistema operacional um pequeno pedaço da Memória RAM do computador.
O Identificador (nome da variável) é um ponteiro amigável para humanos.
O Endereço de Memória é onde os bits reais estão guardados.
O motor do JS (como o V8 do Chrome) gerencia esse mapeamento para que você não precise lidar com endereços hexadecimais complexos.
*/

// 1. Declaração: Criamos a "caixa" com o nome
let variavel;

// 2. Atribuição: Colocamos o valor dentro da caixa
variavel = "Um texto simples";

// 3. Uso: Chamamos o nome da caixa para ver o que tem dentro
console.log(variavel); // Saída: Um texto simples

// EXERCÍCIO 1: O Conceito de Espaço e Identificação
let nomeDoProduto;
let precoDoProduto = 150;

nomeDoProduto = "Teclado";

console.log(nomeDoProduto, precoDoProduto);

precoDoProduto = 180;

console.log(nomeDoProduto, precoDoProduto);

//============================================================

/*
AULA 2: A Diferença entre let, const e o "Fantasma" var
Agora que você sabe que uma variável é um espaço na memória, precisamos falar sobre as regras de acesso e permissões desse espaço. No JavaScript moderno, temos três palavras-chave, mas focaremos nas duas principais e entenderemos por que a terceira é evitada.
O Conceito: Mutabilidade vs. Imutabilidade
let: Permite que você altere o valor da "caixa" quantas vezes quiser (como você fez com o preço do produto).
const (de constant): Cria uma variável cujo valor não pode ser alterado após a primeira atribuição. É uma caixa lacrada.
var: A forma antiga (pré-2015). Ela tem comportamentos estranhos de escopo que causam bugs imprevisíveis. Regra de ouro: Evite-a em projetos modernos.

2. Debaixo do Capô: Proteção de Memória
Quando você usa const, o motor do JavaScript (V8) marca aquele endereço de memória como somente leitura. Se você tentar forçar uma nova escrita ali, o motor interrompe a execução e lança um erro de tipo (TypeError), protegendo a integridade dos dados que você decidiu que deveriam ser fixos.
*/

const cpf = "123.456.789-00"; // Informação que não deve mudar
let saldo = 100; // Informação que muda constantemente

saldo = 150.0; // Ok!
// cpf = "000"; // Erro! O JS impedirá a execução aqui.

// EXERCÍCIO 2: A Diferença entre let, const e o "Fantasma" var
const idDoUsuario = 14;
let emailDoUsuario = "soueu@email.com";

console.log(idDoUsuario, emailDoUsuario);

emailDoUsuario = "mudei@email.com";
console.log(emailDoUsuario);

// idDoUsuario = 41; // TypeError: Assignment to constant variable

// const declararSemAtribuir; // SyntaxError: Missing initializer in const declaration

//============================================================

/*
AULA 3: Tipagem Primitiva (A Natureza dos Dados)
Até agora, tratamos as variáveis como "caixas", mas o que colocamos dentro delas tem texturas e formas diferentes. No JavaScript, embora não precisemos dizer o tipo da variável ao declará-la (ela é dinamicamente tipada), os valores possuem tipos.
O Conceito: Tipos Primitivos
Existem alguns tipos fundamentais que são a base de tudo:
String: Textos (sempre entre aspas: ' ', " " ou ``  ).
Number: Números (inteiros como 10 ou decimais/pontos flutuantes como 10.5).
Boolean: Valores lógicos. Só existem dois: true (verdadeiro) ou false (falso).
Undefined: Quando uma variável foi declarada, mas ainda não recebeu um valor (a caixa está vazia).
Null: Uma atribuição intencional para dizer que a variável está vazia (ausência de valor).

Debaixo do Capô: Tipagem Dinâmica
O JavaScript é uma linguagem de tipagem dinâmica e fraca.
Dinâmica: A mesma "caixa" (let) pode guardar uma String agora e um Number depois. O motor JS descobre o tipo em tempo de execução.
Fraca: Ele tenta ser "legal" demais e faz conversões automáticas (coerção), o que às vezes gera confusão (ex: somar um texto com um número).
*/

let inteligenciaArtificial = "Gemini";
console.log(inteligenciaArtificial, typeof inteligenciaArtificial); // "string"

let numeroQualquer = 14;
console.log(numeroQualquer, typeof numeroQualquer); // "number"

let estaLigado = true;
console.log(estaLigado, typeof estaLigado); // "boolean"

// EXERCÍCIO 3: Tipagem Primitiva (A Natureza dos Dados)
const nomeDoPersonagem = "Henrique";
let nivelDoPersonagem = 50;
let estaVivo = true;
let inventario;
let cla = null;

console.log(nomeDoPersonagem, typeof nomeDoPersonagem);
console.log(nivelDoPersonagem, typeof nivelDoPersonagem);
console.log(estaVivo, typeof estaVivo);
console.log(inventario, typeof inventario);
console.log(cla, typeof cla);

//============================================================

/*
AULA 4: Naming & Case Sensitivity (A Arte de Dar Nomes)
Agora que você já sabe como criar e o que colocar nas variáveis, precisamos falar sobre as regras gramaticais e de etiqueta. Como o JS é uma linguagem muito flexível, ele te dá corda para se enforcar se você não seguir as convenções.
O Conceito: Case Sensitivity e Regras de Ouro
JavaScript é Case-Sensitive. Isso significa que nome, Nome e NOME são três caixas completamente diferentes e independentes na memória.
Regras obrigatórias (Sintaxe):
Não pode começar com números (Ex: 1usuario é inválido).
Não pode conter espaços.
Pode conter letras, números, $ e _.
Não pode usar palavras reservadas (você não pode criar uma variável chamada let let ou let const).
Regra de Etiqueta (Convenção):
camelCase: Começa com minúscula e a cada nova palavra, a primeira letra é maiúscula. Ex: estaVivo, precoDoProdutoImportado.

Debaixo do Capô: Identificadores e Tokens
O analisador léxico do motor JS transforma seu código em "Tokens". Se ele encontra let 1usuario, o motor tenta processar o 1 como um número antes de entender que era um nome, gerando um conflito de lógica interna no parser, resultando em um SyntaxError imediato.
*/

let Usuario = "Viviane";
let usuario = "Andrew";

console.log(Usuario); // Viviane
console.log(usuario); // Andrew

// let 1lugar = "Ouro"; // SyntaxError!

// EXERCÍCIO 4: Naming & Case Sensitivity (A Arte de Dar Nomes)
let nomeDoUsuario = "Carlos";
const primeiroLugarNoPodio = "Marcos";
let estadoCivil = "Solteiro";
let numero10 = 10;

let cidade = "Pirassununga";
let Cidade = "São José do Rio Pardo";

console.log(cidade);
console.log(Cidade);

// let 1erro proposital = 'Erro proposital'; // SyntaxError: Invalid or unexpected token

//============================================================

/*
AULA 5: O Valor da "Nada" (Null vs. Undefined vs. Not Defined)
Muitos desenvolvedores confundem esses três estados, mas eles contam histórias diferentes sobre o que está acontecendo na memória do seu computador.
O Conceito: Três tipos de "Vazio"
undefined: Significa que a variável foi declarada (a caixa existe), mas ninguém colocou nada dentro dela ainda. É o estado natural de uma variável let recém-nascida.
null: É um valor de atribuição. Você, o programador, diz explicitamente: "Esta caixa deve estar vazia agora". É comum usar para "limpar" uma variável.
not defined: Isso não é um tipo de dado, é um erro de referência (ReferenceError). Significa que você está tentando usar uma caixa que sequer foi fabricada (não foi declarada).

Debaixo do Capô: A busca no Escopo
Quando você chama uma variável, o motor do JS faz uma busca.
Se ele acha a etiqueta, mas o valor é um ponteiro para o vazio, ele retorna undefined.
Se ele acha a etiqueta e o valor aponta para o objeto null, ele retorna null.
Se ele percorre todo o seu código e não encontra a etiqueta, o motor entra em pânico e interrompe o programa com um ReferenceError.
*/

let computador;
console.log(computador); // udefined (caixa vazia)

let usuarioLogado = "Andrew";
console.log(usuarioLogado); // Andrew

usuarioLogado = null; // Andrew saiu do sistema, limpamos a variável
console.log(usuarioLogado);

// console.log(telefone); // ReferenceError: telefone is not defined

// EXERCÍCIO 5: O Valor da "Nada" (Null vs. Undefined vs. Not Defined)
let temperatura;
console.log(temperatura, typeof temperatura);

temperatura = 25;
console.log(temperatura, typeof temperatura);

temperatura = null;
console.log(temperatura, typeof temperatura);

// console.log(umidade); // ReferenceError: umidade is not defined

//============================================================

/*
AULA 6: Escopo - Onde as Variáveis Vivem?
Agora que você já sabe criar e nomear variáveis, precisamos entender a hierarquia e a visibilidade. Nem toda variável está disponível em todos os lugares.
O Conceito: Escopo Global vs. Escopo de Bloco
Imagine que o seu código é um prédio comercial:
Escopo Global: É a calçada. Todo mundo que entra no prédio consegue ver o que está na calçada.
Escopo de Bloco: É uma sala trancada dentro de um andar. O que acontece lá dentro, fica lá dentro. No JS, um "bloco" é definido por chaves { ... }.

Debaixo do Capô: A Pilha de Escopo (Scope Chain)
Quando você pede ao JavaScript para usar uma variável, ele olha primeiro para a "sala" (bloco) onde ele está. Se não encontrar, ele sai para o corredor, depois para o andar, até chegar na "calçada" (Global).
Importante: Ele nunca olha para dentro de outras salas, apenas para fora.
let e const respeitam as chaves {}. Se você as criar dentro de um bloco, elas morrem quando o bloco termina.
*/

let global = "Eu sou global";

{
  let bloco = "Eu sou de bloco";
  console.log(global); // Funciona! Ele olhou para fora.
  console.log(bloco); // Funciona! Ele está dentro do bloco.
}

console.log(global); // Funciona!
// console.log(bloco); // Erro! 'bloco' is not defined. A sala foi destruída.

// EXERCÍCIO 6: Escopo - Onde as Variáveis Vivem?
let algumUsuario = "Henrique";

{
  const senhaDesseUsuario = 54321;

  // console.log(algumUsuario); // ReferenceError: Cannot access 'algumUsuario' before initialization // TDZ (Temporal Dead Zone)
  console.log(senhaDesseUsuario);

  let algumUsuario = "Andrew"; // Erro acima ocorre depois da criação dessa variável dentro deste escopo, antes não (Shadowing (Sombreamento))

  console.log(algumUsuario); // Andrew
}

console.log(algumUsuario); // Henrique
// console.log(senhaDesseUsuario); // ReferenceError: senhaDesseUsuario is not defined

//============================================================

/*
AULA 7: Hoisting (O Grande "Içamento")
Para encerrar o ciclo de "como as variáveis nascem e vivem", precisamos entender como o JavaScript lê o seu arquivo. Você pode imaginar que ele lê de cima para baixo, linha por linha, mas não é exatamente assim.
O Conceito: Declaração vs. Atribuição
O motor do JS lê o código em duas passadas:
Fase de Compilação/Criação: Ele percorre o código procurando por declarações de variáveis e funções.
Fase de Execução: Ele executa os comandos (atribuições, cálculos, console.log).
Hoisting é o comportamento de "puxar" as declarações para o topo do seu escopo antes da execução.

Debaixo do Capô: O comportamento por palavra-chave
var: É içada e inicializada com undefined. Você pode usá-la antes de declarar (embora seja péssima prática).
let e const: São içadas, mas NÃO são inicializadas. Elas entram na "Zona Morta Temporal". Se você tentar acessá-las antes da linha da declaração, o código quebra.
*/

console.log(nomeVar); // undefined (Hoisting com var)
var nomeVar = "Andrew Gomes";

// console.log(nomeLet); // ReferenceError (Hoisting sem inicialização - TDZ)
let nomeLet = "Viviane Rodrigues";

// EXERCÍCIO 7: Hoisting (O Grande "Içamento")
console.log(testeVar);
var testeVar = "Eu fui içado";

// console.log(testeLet); // ReferenceError: Cannot access 'testeLet' before initialization
let testeLet = "Vou dar erro pois estou na TDZ";

{
  // console.log(testeConst); // ReferenceError: Cannot access 'testeConst' before initialization
  const testeConst = "Também entro na TDZ e vou dar erro";
}

//============================================================

/*
AULA 8: Template Strings e a "Interpolação" de Variáveis
Saímos da teoria de memória e entramos na manipulação. Até agora, para exibir variáveis, usamos vírgulas no console.log. Mas e se precisarmos construir uma frase complexa misturando texto e variáveis?
O Conceito: Concatenação vs. Interpolação
Concatenação (Antigo/Manual): Usar o operador + para colar textos e variáveis. É fácil esquecer espaços e fica ilegível em frases longas.
Template Strings (Moderno): Usar o sinal de crase ( ` ) em vez de aspas. Com elas, você pode injetar variáveis diretamente no texto usando a sintaxe ${variavel}.

Debaixo do Capô: Processamento de Expressões
Quando o motor encontra ${ } dentro de crases, ele faz uma pausa na leitura do texto, resolve o que está dentro das chaves (pode ser uma variável, uma conta matemática ou uma função) e converte o resultado em uma String para "colar" no resto da frase.
*/

let algumProduto = "Mouse";
let precoDesseProduto = 120;

// Modo antigo (Concatenação):
console.log("O " + algumProduto + " custa R$" + precoDesseProduto);

// Modo moderno (Interpolação):
console.log(`O ${algumProduto} custa R$${precoDesseProduto}`);

// EXERCÍCIO 8: Template Strings e a "Interpolação" de Variáveis
let item = "Notebook";
let valorDoItem = 3500;
let desconto = 15;

console.log(
  `O item ${item} custa R$${valorDoItem}, mas com ${desconto}% de desconto, ele sai mais barato!`,
);

console.log(
  `O ${item} vai sair por R$${valorDoItem - (valorDoItem * desconto) / 100}`,
);

//============================================================

/*
AULA 9: Tipagem Fraca e Coerção (A "Mágica" Perigosa)
Lembra que eu mencionei que o JavaScript é "legal demais"? Chegou a hora de ver como isso pode gerar bugs se você não estiver atento. Como o JS não exige que você defina o tipo da variável, ele tenta adivinhar o que você quer fazer.
O Conceito: Coerção Implícita
A coerção é a conversão automática de um tipo de dado para outro.
Soma (+) com String: Se você somar um número com uma string, o JS entende que você quer concatenar (juntar textos), não somar matematicamente.
Outras Operações (-, *, /): Nessas, o JS tenta converter a string em número para realizar a conta.

Debaixo do Capô: Abstract Operations
Quando o motor encontra 5 + "5", ele aciona uma regra interna que diz: "Se um dos lados for String, converta o outro para String e junte-os". Já em 10 - "2", a regra diz: "Subtração não faz sentido em texto, então tente converter esse texto em número".
*/

console.log(5 + "5"); // "55" (Virou texto!)
console.log(10 - "2"); // 8 (Virou número!)
console.log("10" * "3"); // 30 (Virou número!)
console.log("Olá" - 2); // NaN (Not a Number - Ele tentou, mas falhou)

// EXERCÍCIO 9: Tipagem Fraca e Coerção (A "Mágica" Perigosa)
let idadeDoUsuario = "25";
let anosParaSoma = 5;

console.log(idadeDoUsuario + anosParaSoma);

console.log(Number(idadeDoUsuario) + anosParaSoma);

console.log(+idadeDoUsuario + anosParaSoma);

let multiplicacaoEstranha = "10" * 2;

console.log("10" * 2, typeof ("10" * 2));
console.log(multiplicacaoEstranha, typeof multiplicacaoEstranha);

//============================================================

/*
AULA 10: Atribuição por Valor vs. Referência (O Labirinto)
Esta é a aula que separa os iniciantes dos avançados. Até agora, lidamos com Primitivos (String, Number, Boolean). Agora vamos entender como o JS guarda isso na memória comparado a estruturas mais complexas.
O Conceito: Cópia vs. Apontamento
Tipos Primitivos (Valor): Quando você passa um valor primitivo para outra variável, o JS faz uma cópia real. São duas caixas independentes com o mesmo conteúdo.
Tipos de Objeto/Arrays (Referência): (Menciono apenas para contexto). Eles funcionam como um "atalho". Se você copiar a variável, ambas apontam para a mesma caixa. Se mudar em uma, muda na outra.

Debaixo do Capô: Stack vs. Heap
Os Primitivos vivem na Stack (Pilha), uma memória rápida onde o valor fica colado ao nome da variável.
Os Objetos vivem no Heap, uma memória maior e mais livre. A variável na Stack guarda apenas o "endereço" (ponteiro) de onde o objeto está no Heap.
*/

let a = 10;
let b = a; // O JS cria uma CÓPIA do valor 10

b = 20; // Alteramos b

console.log(a); // 10 (Continua intacto!)
console.log(b); // 20

// EXERCÍCIO 10: Atribuição por Valor vs. Referência (O Labirinto)
let pontuacaoBase = 100;
let pontuacaoJogador1 = pontuacaoBase;
let pontuacaoJogador2 = pontuacaoBase;

pontuacaoJogador1 += 50;

console.log(pontuacaoBase, pontuacaoJogador1, pontuacaoJogador2); // Não afeta pois são caixas independentes, não recebem valor por referência

//============================================================

/*
AULA 11: Constantes de Objeto (O "Pulo do Gato")
Esta aula é um complemento crucial à anterior. Muitos alunos se confundem aqui: "Se const não deixa mudar o valor, por que eu consigo mudar as propriedades de um objeto?". Vamos entender essa "brecha".
O Conceito: O Cadeado está na Etiqueta, não no Conteúdo
Imagine que uma variável const é uma corrente prendendo uma caixa a um lugar na memória.
Se a caixa contém um Primitivo (um número), para mudar o número você teria que trocar a caixa inteira. A corrente (const) não deixa.
Se a caixa contém um Objeto, a corrente impede que você troque a caixa por outra caixa. Mas ela não te impede de abrir a tampa da caixa e mexer no que está lá dentro.

Debaixo do Capô: Imutabilidade da Referência
A const garante que o endereço de memória gravado na variável nunca mude.
Para Primitivos: O endereço é o valor.
Para Objetos: O endereço é apenas um ponteiro para onde o objeto está. Você pode mudar o objeto, desde que ele continue no mesmo "endereço".
*/

const pessoa = { nome: "Henrique" };

pessoa.nome = "Andrew"; // Funciona! Mexi "dentro" da caixa.
console.log(pessoa.nome); // "Andrew"

// pessoa = { nome: "Carlos" }; // ERRO! Tentei trocar a caixa (mudar o endereço).

// EXERCÍCIO 11: Constantes de Objeto (O "Pulo do Gato")
const servidor = {
  ip: "192.168.0.1",
  status: "online",
};

servidor.status = "offline"; // Pode mudar a propriedade do objeto, o que não pode é mudar o endereço

console.log(servidor);

// servidor = { // TypeError: Assignment to constant variable.
//   ip: "0.0.0.0",
// };

//============================================================

/*
AULA 12: Var, o "Zumbi" e o Hoisting de Escopo
Para fecharmos o ciclo de variáveis "puras" e você se tornar um verdadeiro "Hero" no assunto, precisamos entender por que o var quase destruiu o JavaScript antes de 2015. Esta é a aula sobre Vazamento de Escopo.
O Conceito: Escopo de Função vs. Escopo de Bloco
let e const respeitam qualquer par de chaves { }. Se você criar um let dentro de um if ou um for, ele morre ali.
var ignora blocos comuns. Ele só respeita o escopo de uma função ou o escopo global. Se você criar um var dentro de um if, ele "vaza" para fora e continua vivo.

Debaixo do Capô: Global Object Pollution
Quando você usa var no nível mais alto do seu código (fora de funções), o JavaScript o pendura no objeto global (no navegador, é o objeto window). Isso é perigoso porque você pode sobrescrever funcionalidades nativas do navegador sem querer.
*/

if (true) {
  var zumbi = "Eu não morro!";
  let humano = "Eu fico aqui.";
}

console.log(zumbi); // "Eu não morro!" (Vazou do bloco if!)
// console.log(humano); // ReferenceError (Comportamento correto)

// EXERCÍCIO 12: Var, o "Zumbi" e o Hoisting de Escopo
var testeVarZumbi = "Global";

{
  var testeVarZumbi = "Local";

  console.log(testeVarZumbi); // var não respeita blocos, ele vaza, sobrescreve e tem vários outros comportamentos estranhos
}

console.log(testeVarZumbi);

let testeLetZumbi = "Global";

{
  let testeLetZumbi = "Local";

  console.log(testeLetZumbi); // let respeita qualquer bloco (shadowing)
}

console.log(testeLetZumbi);
