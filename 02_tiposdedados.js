/*
AULA 1: A Tipagem Dinâmica e o Operador typeof
Explicação Sucinta
JavaScript é uma linguagem de tipagem dinâmica e fraca. Isso significa que você não precisa declarar o tipo de uma variável; o motor do JS o determina em tempo de execução com base no valor atribuído. Além disso, uma mesma variável pode assumir diferentes tipos ao longo do código.

Debaixo do Capô
Ao atribuir um valor, o motor (como o V8) o armazena junto com uma "etiqueta" de tipo.
Primitivos: São imutáveis e, conceitualmente, tratados como valores diretos. Ao “alterar” um primitivo, você na verdade cria um novo valor.
O operador typeof: É uma operação unária que retorna uma string indicando o tipo do dado.
*/

let variavel = "Olá, mundo!";
console.log(variavel, typeof variavel);

variavel = 14;
console.log(variavel, typeof variavel);

variavel = true;
console.log(variavel, typeof variavel);

// EXERCÍCIO 1: A Tipagem Dinâmica e o Operador typeof
let valor;
console.log(valor, typeof valor);

valor = 22;
console.log(valor, typeof valor);

valor = "Um texto qualquer";
console.log(valor, typeof valor);

console.log(typeof typeof 10);

//==========================================================

/*
AULA 2: Primitivos I - Strings e a Imutabilidade
Explicação Sucinta
Strings são sequências de caracteres usadas para representar texto. No ES6+, podem ser declaradas com aspas simples ('), duplas (") ou template literals (`), que permitem interpolação e múltiplas linhas.

Debaixo do Capô
Strings são imutáveis. Métodos como toUpperCase() não alteram o valor original, mas retornam uma nova string. Se o retorno não for armazenado, o valor original permanece inalterado.
*/

let curso = "JavaScript";

// Tentando alterar um caractere (não funciona e não gera erro em modo não-estrito)
curso[0] = "Y";
console.log(curso); // "JavaScript" - Continua igual!

// A "alteração" é na verdade uma reatribuição
let novoCurso = curso.replace("Java", "Type");
console.log(novoCurso);
console.log(curso);

// EXERCÍCIO 2: Primitivos I - Strings e a Imutabilidade
let tecnologia = "Svelte";
let objetivo = "Aprender";
let odeio = "React";
let frase = `Meu objetivo é ${objetivo} ${tecnologia}, pois não gostei de ${odeio}!`;

console.log(frase);

tecnologia[0] = "s";
console.log(tecnologia);

console.log(`A frase tem ${frase.length} caracteres, incluindo espaços.`);

//==========================================================

/*
AULA 3: Primitivos II - Number e as nuances flutuantes
Explicação Sucinta
No JavaScript, todos os números são do tipo number, representados como ponto flutuante de dupla precisão (IEEE 754). O tipo inclui também Infinity, -Infinity e NaN.

Debaixo do Capô
Devido ao padrão IEEE 754, operações decimais podem gerar pequenas imprecisões (ex: 0.1 + 0.2).
NaN é um valor especial que representa uma operação inválida, mas ainda é do tipo number.
*/

let positivo = 14;
let decimal = 22.5;
let negativo = -100;
let operacaoInvalida = "texto" / 5;

console.log(operacaoInvalida); // NaN
console.log(typeof NaN); // "number"

let divisaoPorZero = 14 / 0;
console.log(divisaoPorZero); // Infinity

// EXERCÍCIO 3: Primitivos II - Number e as nuances flutuantes
let num1 = 0.1;
let num2 = 0.2;
let soma = num1 + num2;

console.log(soma);
console.log(soma.toFixed(1));

console.log(Math.sqrt(negativo));

//==========================================================

/*
AULA 4: Primitivos III - Booleans e os conceitos de "Truthy" e "Falsy"
Explicação Sucinta
O tipo boolean possui apenas dois valores: true e false, usados em controle de fluxo.

Debaixo do Capô
JavaScript realiza coerção de tipo em contextos booleanos. Valores são automaticamente convertidos para true ou false.
Valores Falsy: false, 0, -0, 0n, "", null, undefined e NaN.
Todos os demais são considerados Truthy.
*/

let logado = true;
let nome = ""; // String vazia

console.log(Boolean(logado)); // true
console.log(Boolean(nome)); // false (Falsy)
console.log(Boolean(42)); // true (Truthy)

// EXERCÍCIO 4: Primitivos III - Booleans e os conceitos de "Truthy" e "Falsy"
let usuarioAtivo = true;
let saldo = 0;

console.log(Boolean(usuarioAtivo));
console.log(Boolean(saldo));

console.log(!!saldo === Boolean(saldo));

let stringEspaco = " ";
console.log(typeof stringEspaco, Boolean(stringEspaco), !!stringEspaco);

//==========================================================

/*
AULA 5: Primitivos IV - Null e Undefined (As Ausências)
Explicação Sucinta
undefined indica que uma variável foi declarada, mas não inicializada.
null é uma atribuição intencional de ausência de valor.

Debaixo do Capô
typeof null retorna "object" por um erro histórico da linguagem que foi mantido por compatibilidade.
*/

let indefinida;
console.log(indefinida, typeof indefinida); // undefined - undefined

let nula = null;
console.log(nula, typeof nula); // null - object (O famoso erro histórico)

// EXERCÍCIO 5: Primitivos IV - Null e Undefined (As Ausências)
let contato;
let endereco = null;

console.log(contato, typeof contato);
console.log(endereco, typeof endereco);

console.log(contato == endereco);
console.log(contato === endereco);

console.log(10 + null);
console.log(10 + undefined);

//==========================================================

/*
AULA 6: Primitivos V - BigInt (Grandes Inteiros)
Explicação Sucinta
BigInt permite representar inteiros maiores que o limite seguro do tipo number (2^53 - 1), mantendo precisão.

Debaixo do Capô
BigInt cresce dinamicamente conforme necessário. Não pode ser misturado com number em operações aritméticas sem conversão explícita.
*/

let numeroGrande = 9876543210123456789876543210n;
console.log(numeroGrande, typeof numeroGrande); // "bigint"

let outroGrade = BigInt("0123456789876543210123456789");
console.log(outroGrade, typeof outroGrade); // "bigint"

// EXERCÍCIO 6: Primitivos V - BigInt (Grandes Inteiros)
let limiteSeguro = Number.MAX_SAFE_INTEGER;
console.log(limiteSeguro);

let grandeNumero = BigInt(limiteSeguro) + 2n;
console.log(grandeNumero, typeof grandeNumero);

console.log(10n == 10);
console.log(10n === 10);

//==========================================================

/*
AULA 7: Primitivos VI - Symbol (Identificadores Únicos)
Explicação Sucinta
Symbol é um tipo primitivo cujos valores são únicos e imutáveis, mesmo quando possuem a mesma descrição. É usado principalmente como chave de propriedades de objetos.

Debaixo do Capô
Cada chamada a Symbol() gera um identificador único. Propriedades com Symbol não são enumeradas em loops comuns.
*/

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2); // false - Cada Symbol é único!
console.log(id1 === id2); // false - Cada Symbol é único!

const usuario = {
  nome: "Fulano de Tal",
  [id1]: 123, // Chave única usando Symbol
  [id2]: 456, // Chave única usando Symbol
};

console.log(usuario);
console.log(usuario[id1]); // 123
console.log(usuario[id2]); // 456

// EXERCÍCIO 7: Primitivos VI - Symbol (Identificadores Únicos)

const simboloA = Symbol("key");
const simboloB = Symbol("key");

console.log(simboloA == simboloB);
console.log(simboloA === simboloB);

const cofre = {
  [simboloA]: "Segredo 1",
};

console.log(cofre["key"]);
console.log(cofre[simboloA]);

console.log(simboloB, typeof simboloB);

//==========================================================

/*
AULA 8: Tipos de Referência - O Gigante Object
Explicação Sucinta
Objetos são coleções de dados e comportamentos. Arrays, funções e datas são variações de objetos.

Debaixo do Capô
Objetos são manipulados por referência. Ao copiar um objeto, você copia sua referência, não o valor. Alterações afetam todas as variáveis que apontam para ele.
*/

let pessoa = { nome: "Henrique" };
let outraPessoa = pessoa; // Copiou a referência (o endereço)

outraPessoa.nome = "Andrew";

console.log(pessoa.nome); // "Andrew" - O original foi afetado!
console.log(pessoa === outraPessoa); // true - Apontam para o mesmo lugar

// EXERCÍCIO 8: Tipos de Referência - O Gigante Object
let carro = {
  marca: "Ford",
  ligado: true,
};

let copiaCarro = carro;

copiaCarro.marca = "Volkswagen";

console.log(carro.marca);
console.log(copiaCarro.marca);

const objA = {
  id: 1,
};

const objB = {
  id: 1,
};

console.log(objA == objB);
console.log(objA === objB); // São diferentes pois cada um aponta para uma referência diferente

//==========================================================

/*
AULA 9: O Elo Perdido - Wrapper Objects (Auto-boxing)
Explicação Sucinta
Primitivos não possuem métodos, mas o JavaScript permite acessá-los como se tivessem.

Debaixo do Capô
Ao acessar um método, o JS cria temporariamente um objeto wrapper (ex: String), executa a operação e o descarta. Propriedades adicionadas manualmente não persistem.
*/

let inteligenciaArtificial = "gemini";
console.log(inteligenciaArtificial.toUpperCase()); // "GEMINI"

// O que acontece internamente por um breve instante:
// (new String("gemini")).toUpperCase() -> retorna "GEMINI" e some da memória.

// EXERCÍCIO 9: O Elo Perdido - Wrapper Objects (Auto-boxing)
let fraseFinal = "Fim da aula";

fraseFinal.autor = "Eu";
console.log(fraseFinal.autor); // JS embrulha em um wrapper no caso de métodos que vem de níveis acima na Prototype Chain (Objeto String), mas não para propriedades criadas em strings como se fossem objetos literais.

//==========================================================

/*
AULA 10: Object.is() e as Exceções da Igualdade
Explicação Sucinta
Object.is() compara valores com maior precisão que === em casos específicos como NaN e 0/-0.

Debaixo do Capô
NaN não é igual a si mesmo com ===.
0 e -0 são considerados iguais com ===.
Object.is() trata esses casos corretamente e não realiza coerção de tipo.
*/

console.log(NaN == NaN); // false (Surpresa!)
console.log(NaN === NaN); // false (Surpresa!)

console.log(Object.is(NaN, NaN)); // true (Preciso)

console.log(0 === -1 * 0); // true
console.log(Object.is(0, -0)); // false (Diferencia o sinal na memória)

//==========================================================

/*
AULA 11: O "Bug" da Função e do Array
Explicação Sucinta
O operador typeof possui comportamentos específicos para diferentes tipos de referência.

Debaixo do Capô
Arrays são objetos especializados, portanto typeof [] retorna "object".
Funções também são objetos, mas typeof retorna "function" por convenção da linguagem.
*/

// Exercício Final
let checarNaN = 0 / 0;
console.log(checarNaN === checarNaN);
console.log(Object.is(checarNaN, checarNaN));

function minhaFuncao() {}
let arrayTest = [];

console.log(minhaFuncao, typeof minhaFuncao);
console.log(arrayTest, typeof arrayTest);

let str = new String("ABC");
console.log(str, typeof str); // 'str' é um objeto wrapper (String), não um primitivo
