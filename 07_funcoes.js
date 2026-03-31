// AULA - Função Básica
function saudar() {
  console.log("Olá, galera!");
}

saudar();

// EXERCÍCIO - Função Básica
function avisar() {
  console.log("ATENÇÃO: O sistema está carregando...");
}

avisar();

//======================================================

// AULA - Parâmetros e Argumentos
function darBoasVindas(nome) {
  console.log(`Seja bem-vindo, ${nome}!`);
}

darBoasVindas("Andrew");
darBoasVindas("Gemini");

// EXERCÍCIO - Parâmetros e Argumentos
function somarDois(numero) {
  console.log(numero + 2);
}

somarDois(8);

//======================================================

// AULA - O Retorno (return)
function calcularDobro(n) {
  return n * 2;
}

const resultado = calcularDobro(14);
console.log(resultado);

// EXERCÍCIO - O Retorno (return)
function obterMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

const mediaFinal = obterMedia(8.5, 7.5);
console.log(mediaFinal);

//======================================================

// AULA - Função anônima
const dizerMeuNome = function (nome) {
  return `Meu nome é ${nome}`;
};

const andrew = dizerMeuNome("Andrew");
console.log(andrew);

//======================================================

// AULA - Arrow Functions
const multiplicar = (n1, n2) => n1 * n2;

const por5 = multiplicar(2, 5);
console.log(por5);

const por2 = multiplicar(2, 2);
console.log(por2);

// EXERCÍCIO - Arrow Functions
const verMedia = (n1, n2) => (n1 + n2) / 2;

console.log(verMedia(5.5, 8));

//======================================================

// AULA - Parâmetros Padrão (Default Parameters)
const verificar = (nome = "Usuário") => `Bem-vindo ${nome}!`;

console.log(verificar("Benedito"));
console.log(verificar());

// EXERCÍCIO - Parâmetros Padrão (Default Parameters)
const calcularPotencia = (base, expoente = 2) => base ** expoente;

console.log(calcularPotencia(5));
console.log(calcularPotencia(2, 3));

//======================================================

// AULA - Funções de Alta Ordem (Callbacks)
const executarOperacao = (a, b, operacao) => operacao(a, b);

const adicao = (a, b) => a + b;
const exponenciacao = (a, b) => a ** b;

console.log(executarOperacao(8, 6, adicao));
console.log(executarOperacao(20, 2, exponenciacao));

// EXERCÍCIO - Funções de Alta Ordem (Callbacks)
const formatarMensagem = (texto, funcaoFormatadora) => funcaoFormatadora(texto);

const caixaAlta = (texto) => texto.toUpperCase();

console.log(formatarMensagem("javascript é vida!", caixaAlta));

//======================================================

// AULA - Escopo (Scope)
const global = "Variável global";

function deOlhoNoEscopo() {
  const local = "Variável local";

  console.log(global);
  console.log(local);
}

deOlhoNoEscopo();
// console.log(local); ERRO!

// EXERCÍCIO - Escopo (Scope)
const usuario = "Admin";

function alterarUsuario() {
  const usuario = "Visitante";

  console.log(usuario);
}

console.log(usuario);
alterarUsuario();
