// AULA - Variáveis - O que é uma variável e o let
let nome = "Andrew";
console.log(nome);

// Reatribuição de valor
nome = "Andrew Gomes";
console.log(nome);

// EXERCÍCIO - Variáveis - O que é uma variável e o let
let clima = "Ensolarado";
clima = "Chuvoso";

let temperatura = 25;

console.log(`Hoje o clima está ${clima} e faz ${temperatura}°C.`);

//======================================

// AULA - A imutabilidade com const
const cpf = "012.345.678-99";
const dataNascimento = "22/08/1988";

console.log(cpf);
console.log(dataNascimento);

// EXERCÍCIO - A imutabilidade com const
const PI = 3.14;
const nascimento = 1988;

const anoAtual = new Date().getFullYear();
let idade = anoAtual - nascimento;

// PI = 4; // ERRO: Assignment to constant variable

console.log("Valor de PI:", PI);
console.log("Dados:", [PI, nascimento, anoAtual, idade]);

//======================================

// AULA - Escopo de bloco (Block Scope)
let global = "Eu sou global";

{
  let local = "Eu sou local";

  console.log(global);
  console.log(local);
}

console.log(global);
// console.log(local); // ERRO: local is not defined

// EXERCÍCIO - Escopo com var vs let
let usuario = "Andrew";

{
  var saudacao;
  // let saudacao;

  console.log(`${saudacao}, ${usuario}!`);
}

console.log(saudacao);
// Com let → ERRO: saudacao is not defined
// Com var → HOISTING: undefined

//======================================

// AULA - Shadowing (Sombreamento de variáveis)
let linguagem = "JavaScript";

{
  let linguagem = "Golang";
  console.log(`Dentro do bloco: ${linguagem}`);
}

console.log(`Fora do bloco: ${linguagem}`);

// EXERCÍCIO - Shadowing (Sombreamento)
let nivel = 1;

{
  let nivel = 10;

  {
    let nivel = 50;
    console.log("Nível interno:", nivel);
  }

  console.log("Nível externo:", nivel);
}

console.log("Nível global:", nivel);

//======================================

// AULA - Hoisting (Içamento)
console.log(amigo);
var amigo = "Svelte";

// console.log(inimigo); // ERRO
let inimigo = "React";

// EXERCÍCIO - Hoisting
console.log(pais);
var pais = "Brasil";

// console.log(cidade); // ERRO
let cidade = "São José do Rio Pardo";

//======================================

// AULA - (Node.js) Global vs GlobalThis
var projeto = "Hero";
let versao = "1.0";

console.log(global.projeto);
console.log(globalThis.projeto);

// EXERCÍCIO - (Node.js) Global vs GlobalThis
var framework = "Node";

console.log(global.framework);
console.log(globalThis.framework);

// variável global implícita (má prática)
sistema = "Windows";

console.log(global.sistema);

//======================================

// AULA - Temporal Dead Zone (TDZ)
{
  // console.log(carro); // ERRO: acesso antes da declaração

  let carro = "Ferrari";
  console.log(carro);
}

// EXERCÍCIO - Temporal Dead Zone
{
  // console.log(minhaVar); // ERRO

  let minhaVar = "Teste";
  console.log(minhaVar);
}

//======================================

// AULA - Convenção de nomenclatura
// camelCase → variáveis
let nomeDoUsuario = "Andrew";

// UPPER_CASE → constantes
const VERSAO_DO_SISTEMA = "2.0.4";

// exemplo de uso
console.log(nomeDoUsuario);
console.log(VERSAO_DO_SISTEMA);
