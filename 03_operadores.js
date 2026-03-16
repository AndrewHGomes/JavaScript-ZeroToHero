// AULA - Operadores Aritméticos Básicos
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// EXERCÍCIO - Operadores Aritméticos Básicos
let n1 = 20;
let n2 = 10;
let n3 = 2;

let resultado = (n1 + n2) / n3;

console.log(resultado);

//==================================

// AULA - Resto da Divisão e Exponenciação
console.log(10 % 3);
console.log(2 ** 3);

// EXERCÍCIO - Resto da Divisão e Exponenciação
let bombons = 25;
let amigos = 4;

let sobra = bombons % amigos;

let calculoQuadrado = 5 ** 2;

console.log(sobra);
console.log(calculoQuadrado);

//==================================

// AULA - Incremento e Decremento
let contador = 5;
contador++;
console.log(contador);

let preco = 10;
console.log(preco++);
console.log(preco);

let estoque = 20;
console.log(--estoque);

// EXERCÍCIO - Incremento e Decremento
let pontos = 10;
console.log(++pontos);

let vidas = 3;
console.log(vidas--);
console.log(vidas);

//==================================

// AULA - Atribuição Composta
let saldo = 100;

saldo += 50;
saldo -= 20;
saldo *= 2;

console.log(saldo);

// EXERCÍCIO - Atribuição Composta
let xp = 500;

xp += 75;
xp -= 120;
xp *= 2;

console.log(xp);

//==================================

// AULA - Operadores de Comparação (Parte 1)
console.log("5" == 5);
console.log("5" === 5);
console.log("5" != 5);
console.log("5" !== 5);

// EXERCÍCIO - Operadores de Comparação (Parte 1)
const idadeMinima = 18;
const idadeUsuario = "18";

const comparacaoFraca = idadeMinima == idadeUsuario;
const comparacaoForte = idadeMinima === idadeUsuario;

const ehDiferente = 10 === 11;

console.log(comparacaoFraca);
console.log(comparacaoForte);
console.log(ehDiferente);

//==================================

// AULA - Operadores de Comparação (Parte 2) - Relacionais
let velocidade = 80;
let limite = 60;

console.log(velocidade > limite);
console.log(velocidade <= 40);

// EXERCÍCIO - Operadores de Comparação (Parte 2) - Relacionais
const valorCarrinho = 150;
const freteGratis = valorCarrinho >= 200;
const noEstoque = 5;
const podeComprar = noEstoque > 0;

console.log(freteGratis);
console.log(podeComprar);

//==================================

// AULA - Operadores Lógicos
let temIdade = true;
let temConvite = false;

console.log(temIdade && temConvite);
console.log(temIdade || temConvite);
console.log(!temIdade);
console.log(!temConvite);

// EXERCÍCIO - Operadores Lógicos
const usuarioLogado = true;
const assinantePremium = false;
const temCupom = true;

const podeAcessar = usuarioLogado && assinantePremium;
const temDesconto = assinantePremium || temCupom;
const bloquearAcesso = !usuarioLogado;

console.log(podeAcessar);
console.log(temDesconto);
console.log(bloquearAcesso);
