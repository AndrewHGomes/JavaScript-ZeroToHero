// AULA - Tipos de dados - O Tipo String
let nome = "Andrew";
let saudacao = "Olá, JavaScript!";
let template = `${saudacao} Meu nome é ${nome}.`;

console.log(template);

// EXERCÍCIO - Tipos de dados - O Tipo String
let cidade = "São José do Rio Pardo";
let ano = "2026";

console.log(`Neste ano de ${ano}, ${cidade} fará 161 anos de emancipação.`);

//==================================

// AULA - Tipos de dados - O Tipo Number
let idade = 37;
let preco = 99.9;
let calculoInvalido = "Oi" / 2;

console.log(typeof preco);
console.log(typeof calculoInvalido);

// EXERCÍCIO - Tipos de dados - O Tipo Number
let distanciaKm = 10;
let tempoHoras = 1.5;
let velocidadeMedia = distanciaKm / tempoHoras;

console.log(
  `A distância ${distanciaKm} km, dividida por ${tempoHoras} hs, dá uma velocidade média de ${velocidadeMedia.toFixed(2)} km/h`,
);

//==================================

// AULA - Tipos de dados - Tipos Boolean, Null e Undefined
let estaChovendo = false;
let resultado;
let contaCorrente = null;

console.log(typeof estaChovendo);
console.log(typeof resultado);
console.log(typeof contaCorrente);

// EXERCÍCIO - Tipos de dados - Tipos Boolean, Null e Undefined
let estaLogado = true;
let usuario;
let token = null;

console.log(typeof estaLogado);
console.log(typeof usuario);
console.log(typeof token);

//==================================

// AULA - Tipos de dados - O Tipo BigInt
let numeroComum = 9007199254740991;
let numeroGigante = 9007199254740991n;
let outroGigante = BigInt("9007199254740991");

console.log(numeroComum, typeof numeroComum);
console.log(numeroGigante, typeof numeroGigante);
console.log(outroGigante, typeof outroGigante);

// EXERCÍCIO - Tipos de dados - O Tipo BigInt
let idUsuario = 12345678987654321098n;
let novoId = idUsuario + 1n;
// let testando = idUsuario + 10; // TypeError: Cannot mix BigInt and other types, use explicit conversions

console.log(novoId);
// console.log(testando);
console.log(typeof idUsuario);

//==================================

// AULA - Tipos de dados - O Tipo Set
const numeros = new Set();

numeros.add(10);
numeros.add(20);
numeros.add(30);
numeros.add(20);

console.log(numeros);
console.log(numeros.size);
console.log(numeros.has(30));
console.log(typeof numeros);

// EXERCÍCIO - Tipos de dados - O Tipo Set
let convidados = ["Andrew", "Viviane", "Andrew", "Irvin", "Viviane"];

let setConvidados = new Set(convidados);

setConvidados.add("Janico");
setConvidados.add("Andrew");

console.log(convidados);
console.log(setConvidados);
console.log(setConvidados.has("Andrew"));

setConvidados.delete("Irvin");

console.log(setConvidados);

//==================================

// AULA - Tipos de dados - O Tipo Map
let seletor = new Map();

seletor.set("cor", "Azul");
seletor.set(10, "Dez");
seletor.set(true, "Verdadeiro");

console.log(seletor);
console.log(seletor.get(10));
console.log(seletor.size);

// EXERCÍCIO - Tipos de dados - O Tipo Map
const configuracoes = new Map();

configuracoes.set("tema", "escuro");
configuracoes.set(1, "Usuário Admin");
configuracoes.set(true, "Logado");

console.log(configuracoes.has("tema"));
console.log(configuracoes.get(1));
console.log(configuracoes.size);

configuracoes.delete(true);

console.log(configuracoes);

//==================================

// AULA - Tipos de dados - O Tipo Symbol (Identificadores Únicos)
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);

const cliente = {
  nome: "Andrew",
  [id1]: 12345,
};

console.log(cliente);
console.log(cliente[id1]);

// EXERCÍCIO - Tipos de dados - O Tipo Symbol (Identificadores Únicos)
const symbol1 = Symbol("chave");
const symbol2 = Symbol("chave");

console.log(symbol1 == symbol2);
console.log(symbol1 === symbol2);

const chaveSimbolica = Symbol("meu_segredo");

const cofre = {
  [chaveSimbolica]: "123456",
};

console.log(cofre);
console.log(cofre.chaveSimbolica);
console.log(cofre[chaveSimbolica]);

// EXERCÍCIO - Tipos de dados - O Tipo Symbol (Mentalizando)
const idUnico = Symbol("id");

const meuUsuario = {
  [idUnico]: "VIP-99",
  nome: "Henrique",
};

console.log(meuUsuario.idUnico);
console.log(meuUsuario[idUnico]);

for (let chave in meuUsuario) {
  console.log(chave, meuUsuario[chave]);
}

//==================================

// AULA - Tipos de dados - Imutabilidade - Valor vs Referência
let a = 10;
let b = a;
b = 20;
console.log(a);
console.log(b);

let obj1 = { nome: "Andrew" };
let obj2 = obj1;
obj2.nome = "Mestre do JS";

console.log(obj1.nome);
console.log(obj1);
console.log(obj2);

// EXERCÍCIO - Tipos de dados - Imutabilidade - Valor vs Referência
let original = 100;
let copia = original;

copia += 50;

console.log(original);
console.log(copia);

let listaOriginal = [1, 2, 3];
let listaCopia = listaOriginal;

listaCopia.push(4);

console.log(listaOriginal);

let listaClone = [...listaOriginal];

listaClone.push(5);

console.log(listaOriginal);
console.log(listaCopia);
console.log(listaClone);

let outroClone = [];

for (let index in listaOriginal) {
  outroClone.push(listaOriginal[index]);
}

outroClone.push(10);

console.log(listaOriginal);
console.log(listaCopia);
console.log(listaClone);
console.log(outroClone);

// O Desafio Final (Graduação)
const ID_INTERNO = Symbol("id");
const bancoDeDados = new Map();

bancoDeDados.set(ID_INTERNO, {
  usuario: "Andrew",
  pontos: 100n,
  conquistas: new Set(["Iniciante", "Explorador"]),
});

const dadosAntigos = bancoDeDados.get(ID_INTERNO);

const objetoAtualizado = {
  ...dadosAntigos,
  conquistas: new Set([...dadosAntigos.conquistas, "Hero"]),
};

bancoDeDados.set(ID_INTERNO, objetoAtualizado);

console.log(bancoDeDados.get(ID_INTERNO));
console.log(bancoDeDados.get(ID_INTERNO).usuario);
