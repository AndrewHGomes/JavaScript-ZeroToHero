/*
AULA 1: Objetos - A Anatomia Básica (O Literal)
Explicação Sucinta
Um objeto é uma coleção de dados relacionados e/ou funcionalidades, que geralmente consistem em diversas propriedades e métodos. Ao contrário de um Array (que é uma lista indexada por números), o Objeto usa chaves (nomes) para acessar os valores.

Debaixo do Capô
No JavaScript, quase tudo é um objeto. Quando você cria um objeto literal, o motor do JS aloca um espaço na memória Heap. Diferente dos tipos primitivos, objetos são passados por referência. Isso significa que se você atribuir o objeto 'carro' a uma nova variável, ambas apontarão para o mesmo lugar na memória.
*/

const carro = {
  marca: "Ford",
  modelo: "Fiesta",
  ano: 2004,
};

console.log(carro.marca);

// EXERCÍCIO 1: Objetos - A Anatomia Básica
const usuario = {
  nome: "Andrew",
  idade: 37,
  estudante: true,
};

console.log(usuario.idade);

//===================================================================

/*
AULA 2: Manipulando Propriedades
Explicação Sucinta
Objetos no JS são dinâmicos. Você pode adicionar novas propriedades, alterar valores de propriedades existentes ou remover propriedades completamente usando a notação de ponto (.) ou colchetes ([]).

Debaixo do Capô
O motor do JavaScript (V8) utiliza "Hidden Classes" (classes ocultas) para otimizar o acesso às propriedades. Quando você deleta uma propriedade com 'delete', o objeto pode se tornar um pouco mais lento para o motor processar, pois ele quebra essa estrutura otimizada, transformando o objeto em um "dicionário" genérico.
*/

const pet = {
  nome: "Vitória",
};

pet.especie = "cachorro"; // Adicionando
pet.nome = "Vitória Princesa"; // Alterando
delete pet.especie; // Removendo

// EXERCÍCIO 2: Manipulando Propriedades
const produto = {
  nome: "Teclado Mecânico",
  preco: 250,
};

produto.preco = 300;
produto.estoque = 15;
delete produto.nome;

console.log(produto);

//===================================================================

/*
AULA 3: Métodos (Ações do Objeto)
Explicação Sucinta
Métodos são funções anexadas a propriedades de um objeto. Eles representam as ações que aquele objeto pode realizar. Para acessar as propriedades do próprio objeto dentro de um método, usamos a palavra-chave 'this'.

Debaixo do Capô
O valor de 'this' dentro de um método comum aponta para o objeto que "chamou" o método. Nota importante: Arrow Functions não possuem seu próprio 'this'. Se você usar uma arrow function como método, o 'this' não apontará para o seu objeto, mas sim para o escopo de fora.
*/

const pessoa = {
  nome: "Andrew",
  saudar: function () {
    console.log(`Olá, meu nome é ${this.nome}`);
  },
};

pessoa.saudar();

// EXERCÍCIO 3: Métodos (Ações do Objeto)
const calculadora = {
  numero1: 10,
  numero2: 5,
  somar: function () {
    return this.numero1 + this.numero2;
  },
};

console.log(calculadora.somar());

//===================================================================

/*
AULA 4: Objetos Aninhados
Explicação Sucinta
Propriedades de um objeto podem conter outros objetos. Isso permite criar estruturas de dados complexas e hierárquicas, como um perfil de usuário que contém um objeto de endereço ou configurações.

Debaixo do Capô
Cada "nível" de aninhamento é uma nova referência de objeto na memória. Para o motor do JS acessar 'livro.autor.nome', ele precisa primeiro resolver a referência de 'livro', depois a de 'autor' para só então chegar na string 'nome'.
*/

const desenvolvedor = {
  nome: "Andrew",
  tecnologias: {
    principal: "JavaScript",
    secundaria: "Golang",
  },
};

// EXERCÍCIO 4: Objetos Aninhados
const livro = {
  titulo: "As Seis Lições",
  autor: {
    nome: "Ludwig Von Mises",
  },
};

livro.autor.anoNascimento = 1881;
livro.autor.anoFalecimento = 1973;

console.log(livro);

//===================================================================

/*
AULA 5: Desestruturação (Destructuring)
Explicação Sucinta
A desestruturação é uma sintaxe que permite extrair valores de objetos e armazená-los em variáveis de forma rápida e legível. Se você tentar extrair uma chave que não existe, o valor será 'undefined'.

Debaixo do Capô
A desestruturação é um "açúcar sintático". Por trás das câmeras, o JS está apenas criando variáveis e atribuindo os valores do objeto a elas. Ela não altera o objeto original.
*/

const videogame = {
  nome: "PlayStation 5",
  marca: "Sony",
  valor: 4500,
};

const { nome, valor } = videogame;

// EXERCÍCIO 5: Desestruturação
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

//===================================================================

/*
AULA 6: Shorthand e Computed Names
Explicação Sucinta
Shorthand: Se o nome da variável é igual ao nome da chave, você pode omitir o valor. 
Computed Names: Permite usar uma expressão ou variável dentro de colchetes [] para definir dinamicamente o nome de uma chave.

Debaixo do Capô
Nomes computados são avaliados em tempo de execução. Isso é fundamental para bibliotecas e frameworks que precisam lidar com chaves dinâmicas que não conhecemos enquanto escrevemos o código.
*/

const modelo = "Motorola One Fusion Plus";
const preco = 1250;
const celular = { modelo, preco }; // Shorthand

const categoria = "esporte";
const item = { [categoria]: "Futebol" }; // Computed Name

// EXERCÍCIO 6: Shorthand e Computed Names
const cor = "Azul";
const tamanho = "G";
const camiseta = { cor, tamanho };

const chaveDinamica = "id";
camiseta[chaveDinamica] = 999;

console.log(camiseta);

//===================================================================

/*
AULA 7: Percorrendo Objetos (Loops)
Explicação Sucinta
Diferente de Arrays, objetos não são iteráveis com 'for...of' diretamente. Usamos 'for...in' para percorrer as chaves, ou métodos como Object.keys(), Object.values() e Object.entries() para transformá-los em arrays.

Debaixo do Capô
O 'for...in' percorre não apenas as propriedades do objeto, mas também propriedades herdadas através da cadeia de protótipos. Por isso, em códigos modernos, é mais comum transformar o objeto em array (keys/values) para ter mais controle.
*/

const situacao = { forca: 10, agilidade: 5, inteligencia: 15 };

for (let habilidade in situacao) {
  console.log(`${habilidade}: ${situacao[habilidade]}`);
}

// EXERCÍCIO 7: Percorrendo Objetos
const notas = { matematica: 8, portugues: 7, historia: 9 };

const salvandoMaterias = Object.keys(notas);
const salvandoNotas = Object.values(notas);

//===================================================================

/*
AULA 8: Spread Operator (Espalhando e Clonando)
Explicação Sucinta
O operador de espalhamento (...) permite copiar todas as propriedades de um objeto para outro. É a forma principal de criar cópias e fundir objetos (como configurações padrão + configurações do usuário).

Debaixo do Capô
O Spread realiza uma "Shallow Copy" (Cópia Rasa). Ele copia os valores primitivos, mas se houver um objeto aninhado, ele copia apenas a referência. Ou seja: se você mudar o objeto aninhado no clone, ele mudará no original também.
*/

const base = { hp: 100, mp: 50 };
const guerreiro = { ...base, classe: "Guerreiro", hp: 150 };

// EXERCÍCIO 8: Spread Operator
const configuracoesPadrao = { tema: "claro", volume: 50 };
const usuarioCustom = { tema: "escuro", volume: 80 };

const configuracoesFinais = { ...configuracoesPadrao, ...usuarioCustom };

//===================================================================

/*
AULA 9: Optional Chaining (?.)
Explicação Sucinta
O encadeamento opcional permite ler o valor de uma propriedade localizada profundamente em uma cadeia de objetos conectados sem ter que validar se cada referência na cadeia é válida.

Debaixo do Capô
Se a referência antes do ?. for null ou undefined, a expressão "curto-circuita" e retorna undefined, em vez de lançar um erro que trava toda a aplicação.
*/

const euMesmo = { nome: "Andrew" };
console.log(euMesmo.endereco?.rua); // Retorna undefined ao invés de dar erro

// EXERCÍCIO 9: Optional Chaining
const apiResponse = { perfil: { social: { linkedin: "@andrew" } } };
const incompleta = { id: 2 };

console.log(incompleta.perfil?.social.linkedin);

//===================================================================

/*
AULA 10: Nullish Coalescing Operator (??)
Explicação Sucinta
É um operador lógico que retorna o operando do lado direito quando o do lado esquerdo é null ou undefined. Diferente do OR (||), ele não considera 0 ou "" (strings vazias) como valores inválidos.

Debaixo do Capô
Este operador foi criado especificamente para lidar com valores "falsy" do JS. Muitas vezes o valor 0 é uma resposta válida (ex: 0 vidas), e o operador || o substituiria erroneamente pelo valor padrão.
*/

const config = { tempoEspera: 0 };
const espera = config.tempoEspera ?? 30; // Retorna 0 (valor válido)

// EXERCÍCIO 10: Nullish Coalescing
const jogo = { vidas: 0, nickname: null };
const vidasRestantes = jogo.vidas ?? 3;
const nomeExibido = jogo.nickname ?? "Player 1";

//===================================================================

/*
AULA 11: Congelando Objetos (Object.freeze)
Explicação Sucinta
O método Object.freeze() "congela" um objeto. Isso impede que novas propriedades sejam adicionadas, propriedades existentes sejam removidas ou valores de propriedades existentes sejam alterados.

Debaixo do Capô
O congelamento é permanente e irreversível para aquele objeto. No entanto, é um congelamento "raso" (shallow). Se houver um objeto dentro do objeto congelado, esse objeto interno ainda pode ser alterado, a menos que também seja congelado.
*/

const configImutavel = { versao: "1.0" };
Object.freeze(configImutavel);
configImutavel.versao = "2.0"; // Não fará nada

// EXERCÍCIO 11: Congelando Objetos
const regrasDeOuro = { gravidade: 9.8 };
Object.freeze(regrasDeOuro);
console.log(Object.isFrozen(regrasDeOuro)); // true
