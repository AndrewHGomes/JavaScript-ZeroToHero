// AULA - Objetos - A Anatomia Básica (O Literal)
const carro = {
  marca: "Ford",
  modelo: "Fiesta",
  ano: 2004,
};

console.log(carro.marca);

// EXERCÍCIO - Objetos - A Anatomia Básica (O Literal)
const usuario = {
  nome: "Andrew",
  idade: 37,
  estudante: true,
};

console.log(usuario.idade);

//================================================

// AULA - Manipulando Propriedades
const pet = {
  nome: "Vitória",
};

pet.especie = "cachorro";
pet.nome = "Vitória Princesa";
delete pet.especie;

console.log(pet);

// EXERCÍCIO - Manipulando Propriedades
const produto = {
  nome: "Teclado Mecânico",
  preco: 250,
};

produto.preco = 300;
produto.estoque = 15;
delete produto.nome;

console.log(produto);

//================================================

// AULA - Métodos (Ações do Objeto)
const pessoa = {
  nome: "Andrew",

  saudar: function () {
    console.log(`Olá, meu nome é ${this.nome}`);
  },
};

pessoa.saudar();

// EXERCÍCIO - Métodos (Ações do Objeto)
const calculadora = {
  numero1: 10,
  numero2: 5,

  somar: function () {
    return this.numero1 + this.numero2;
  },
};

console.log(calculadora.somar());

//================================================

// AULA - Objetos Aninhados (Objetos dentro de Objetos)
const desenvolvedor = {
  nome: "Andrew",
  tecnologias: {
    principal: "JavaScript",
    secundaria: "Golang",
  },
};

// EXERCÍCIO - Objetos Aninhados (Objetos dentro de Objetos)
const livro = {
  titulo: "As Seis Lições",
  autor: {
    nome: "Ludwig Von Mises",
  },
};

livro.autor.anoNascimento = 1881;
livro.autor.anoFalecimento = 1973;

console.log(livro);

//================================================

// AULA - Desestruturação (Destructuring)
const videogame = {
  nome: "PlayStation 5",
  marca: "Sony",
  valor: 4500,
};

const { nome, valor } = videogame;

console.log(nome);
console.log(valor);

// EXERCÍCIO - Desestruturação (Destructuring)
const filme = {
  titulo: "Inception",
  diretor: "Christopher Nolan",
  lancamento: 2010,
  oscar: 4,
};

const { titulo, diretor, oscar } = filme;

console.log(
  `O filme ${titulo} foi dirigido por ${diretor} e ganhou ${oscar} Oscars`,
);

const { bilheteria } = filme;

console.log(`Teste (undefined): ${bilheteria}`);

//================================================

// AULA - Shorthand (Sintaxe Curta) e Computed Names
const modelo = "Motorola One Fusion Plus";
const preco = 1250;

const celular = { modelo, preco };
console.log(celular);

const categoria = "esporte";

const item = {
  [categoria]: "Futebol",
};

console.log(item);

// EXERCÍCIO - Shorthand (Sintaxe Curta) e Computed Names
const cor = "Azul";
const tamanho = "G";

const camiseta = {
  cor,
  tamanho,
};

const chaveDinamica = "id";

// camiseta["id"] = 999;          // Quer esse ou
camiseta[chaveDinamica] = 999; // Quer esse?

console.log(camiseta);

//================================================

// AULA - Percorrendo Objetos (Loops)
const situacao = {
  // Usei situacao pois status está preterido por algum motivo
  forca: 10,
  agilidade: 5,
  inteligencia: 15,
};

for (let habilidade in situacao) {
  console.log(`${habilidade}: ${situacao[habilidade]}`);
}

// EXERCÍCIO - Percorrendo Objetos (Loops)
const notas = {
  matematica: 8,
  portugues: 7,
  historia: 9,
  fisica: 6,
};

for (let materia in notas) {
  console.log(`Na matéria ${materia}, a nota foi ${notas[materia]}`);
}

const salvandoMaterias = Object.keys(notas);
console.log(salvandoMaterias);

const salvandoNotas = Object.values(notas);
console.log(salvandoNotas);

//================================================

// AULA - Spread Operator (Espalhando e Clonando)
const base = {
  hp: 100,
  mp: 50,
};

const guerreiro = {
  ...base,
  classe: "Guerreiro",
  hp: 150,
};

console.log(base);
console.log(guerreiro);

// EXERCÍCIO - Spread Operator (Espalhando e Clonando)
const configuracoesPadrao = {
  tema: "claro",
  notificacoes: true,
  volume: 50,
};

const usuarioCustom = {
  tema: "escuro",
  volume: 80,
};

const configuracoesFinais = {
  ...configuracoesPadrao,
  ...usuarioCustom,
};

configuracoesFinais.ultimoLogin = new Date();

console.log(configuracoesFinais);

//================================================

// AULA - Optional Chaining (?.)
const euMesmo = {
  nome: "Andrew",
};

console.log(euMesmo.endereco?.rua);

// EXERCÍCIO - Optional Chaining (?.)
const apiResponse = {
  id: 1,
  perfil: {
    social: {
      linkedin: "@andrew-henrique-gomes",
    },
  },
};

const apiResponseIncompleta = {
  id: 2,
};

console.log(apiResponse.perfil.social.linkedin);
console.log(apiResponseIncompleta.perfil?.social.linkedin);
console.log(apiResponse.usuario?.dizerOla());

//================================================

// AULA - Nullish Coalescing Operator (??)
const config = {
  tempoEspera: 0,
  usuario: null,
};

const espera = config.tempoEspera ?? 30;
const nomeUsuario = config.usuario ?? "Convidado";

console.log(config);
console.log(espera);
console.log(nomeUsuario);

// EXERCÍCIO - Nullish Coalescing Operator (??)
const jogo = {
  vidas: 0,
  nickname: null,
  dificuldade: "Hard",
};

const vidasRestantes = jogo.vidas ?? 3;
const nomeExibido = jogo.nickname ?? "Player 1";
const volumeSom = jogo.config?.audio ?? 0.5;

console.log(vidasRestantes);
console.log(nomeExibido);
console.log(volumeSom);

//================================================

// AULA - Congelando Objetos (Object.freeze)
const configuracaoImutavel = {
  versao: "1.0",
};

Object.freeze(configuracaoImutavel);

configuracaoImutavel.versao = "2.0";
console.log(configuracaoImutavel.versao);

// EXERCÍCIO - Congelando Objetos (Object.freeze)
const regrasDeOuro = {
  gravidade: 9.8,
  estado: "ativado",
};

Object.freeze(regrasDeOuro);

regrasDeOuro.gravidade = 10;
regrasDeOuro.tentativa = "hack";

console.log(regrasDeOuro);
console.log(Object.isFrozen(regrasDeOuro));
