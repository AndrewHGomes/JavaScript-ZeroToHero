// AULA - O Clássico while
let contador = 1;

while (contador <= 3) {
  console.log(`Contando: ${contador}`);
  contador++;
}

// EXERCÍCIO - O Clássico while
let numero = 2;

while (numero <= 10) {
  console.log(`Pares: ${numero}`);
  numero += 2;
}

//========================================

// AULA - O Robusto for
for (let i = 0; i < 3; i++) {
  console.log(`i é ${i}`);
}

// EXERCÍCIO - O Robusto for
for (let i = 5; i >= 0; i--) {
  console.log(`Regressiva: ${i}`);
}

//========================================

// AULA - O Peculiar do...while
let dw = 10;

do {
  console.log("Vai aparecer ao menos uma vez mesmo sendo falso...");
  dw++;
} while (dw < 5);

// EXERCÍCIO - O Peculiar do...while
let tentativas = 1;

do {
  console.log(`${tentativas}ª tentativa.`);
  tentativas++;
} while (tentativas <= 3);

//========================================

// AULA - O Prático for...of
let numeros = [1, 2, 3, 4, 5];

for (let numero of numeros) {
  console.log(`Este é o número: ${numero}`);
}

// EXERCÍCIO - O Prático for...of
let nomes = ["Andrew", "Viviane", "Janico", "Cleusa"];

for (let nome of nomes) {
  console.log(`Bem-vindo(a), ${nome}!`);
}

//========================================

// AULA - O Investigador for...in
const carro = {
  marca: "Ford",
  modelo: "Fiesta",
  ano: 2004,
};

for (let chave in carro) {
  console.log(`${chave} - ${carro[chave]}`);
}

// EXERCÍCIO - O Investigador for...in
const usuario = {
  nome: "Andrew",
  idade: 37,
  cidade: "São José do Rio Pardo",
};

for (let chave in usuario) {
  console.log(`O campo ${chave.toUpperCase()} tem o valor ${usuario[chave]}`);
}

//========================================

// AULA - O Interruptor break e o Pulo continue
for (let i = 0; i <= 10; i++) {
  if (i === 3) continue;
  if (i === 6) break;

  console.log(`Valor de i: ${i}`);
}

// EXERCÍCIO - O Interruptor break e o Pulo continue
const compras = ["Arroz", "Feijão", "Chocolate", "Batata", "Macarrão"];

for (let item of compras) {
  if (item === "Chocolate") continue;
  if (item === "Batata") break;

  console.log(`O ítem é ${item}`);
}

//========================================

// AULA - O Elegante forEach
const linguagens = ["HTML", "CSS", "JavaScript", "GO", "SQL"];

linguagens.forEach(function (linguagem, index) {
  console.log(`${index + 1}ª: ${linguagem}`);
});

// EXERCÍCIO - O Elegante forEach
const estoque = [
  { nome: "Teclado", quantidade: 15 },
  { nome: "Mouse", quantidade: 18 },
  { nome: "Monitor", quantidade: 2 },
  { nome: "Webcam", quantidade: 3 },
];

estoque.forEach(function (item, index) {
  if (item.quantidade < 10) {
    console.log(
      `ALERTA: O produto ${item.nome} está com estoque baixo: (${item.quantidade} unidades).`,
    );
  } else {
    console.log(`${item.nome}: Estoque OK (${item.quantidade} unidades).`);
  }
});
