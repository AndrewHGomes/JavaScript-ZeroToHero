/*
AULA 1: O Conceito de Função e Declaração Básica
Explicação Sucinta
Imagine uma função como uma caixa de ferramentas ou uma receita de bolo. Em vez de você escrever os mesmos passos toda vez que precisa realizar uma tarefa, você guarda esses passos dentro de um "nome". Quando você chama esse nome, o JavaScript executa todo o conteúdo guardado lá dentro.
A função serve para reutilização de código e organização.

Debaixo do Capô
Quando você define uma função usando a palavra-chave function (conhecida como Function Declaration), o motor do JavaScript (como o V8 do Chrome) faz algo chamado Hoisting (Içamento).
Isso significa que, durante a fase de compilação, o JavaScript "levanta" a definição da função para o topo do seu arquivo. Por isso, você consegue chamar uma função antes mesmo da linha onde ela foi declarada. O motor reserva um espaço na memória para o corpo da função e associa esse bloco ao nome que você escolheu.
*/

// Declarando a função
function saudar() {
  // O corpo da função: o que ela faz
  console.log("Olá! Seja bem-vindo ao curso de Funções no JavaScript!");
}

// Invocando (chamando) a função para ela ser executada
saudar();

// EXERCÍCIO 1: O Conceito de Função e Declaração Básica
function apresentarDesenvolvedor() {
  console.log("Meu nome é Andrew.");
  console.log("Sou desenvolvedor JavaScript.");
  console.log("Meu objetivo é ser especialista na linguagem.");
}

apresentarDesenvolvedor();

//=================================================================

/*
AULA 2: Parâmetros e Argumentos
Explicação Sucinta
Se as funções da Aula 01 eram receitas fixas, agora vamos torná-las dinâmicas.
Parâmetros são como "variáveis locais" que você define nos parênteses da função para que ela possa receber dados de fora. Argumentos são os valores reais que você passa para esses parâmetros quando chama a função.
Isso permite que a mesma função processe informações diferentes.

Debaixo do Capô
Quando você passa um argumento para uma função, o JavaScript realiza uma passagem por valor (para tipos primitivos como Strings e Numbers). Internamente, o motor cria uma nova entrada no Execution Context (Contexto de Execução) daquela função, atribuindo o valor do argumento à variável definida no parâmetro.
Se você não passar um argumento para um parâmetro definido, o JavaScript não quebra; ele simplesmente atribui undefined a esse parâmetro.
*/

// 'nome' é o parâmetro (o molde)
function saudarUsuario(nome) {
  console.log(`Olá, ${nome}!`);
}

// o valor passado é o argumento (o dado real)
saudarUsuario("Andrew");
saudarUsuario("Henrique");
saudarUsuario(); // undefined

// EXERCÍCIO 2: Parâmetros e Argumentos
function configurarPC(tipo, processador, memoriaRAM, armazenamento) {
  console.log(
    `Configurando PC ${tipo} com ${processador}, ${memoriaRAM} de RAM e ${armazenamento} de SSD.`,
  );
}

configurarPC("Gamer", "Ryzen 7", "32GB", "1TB");
configurarPC("Office", "i7", "16GB", "240GB");
configurarPC("Server", "Xeon E5", "16GB", "500GB");

//=================================================================

/*
AULA 3: O Retorno (return)
Explicação Sucinta
Até agora, nossas funções apenas "faziam barulho" (exibiam coisas no console). Mas na vida real, funções geralmente processam algo e nos devolvem um resultado.
A palavra-chave return serve para enviar um valor de volta para quem chamou a função. Pense na função como um assistente: você pede para ele calcular algo, e ele te entrega um papel com o resultado final. Importante: Quando o JavaScript encontra um return, a função para de executar imediatamente; nada abaixo dele é lido.

Debaixo do Capô
Quando uma função encontra o return, o motor do JavaScript encerra o Execution Context (Contexto de Execução) daquela função e remove-a da Call Stack (Pilha de Chamadas). O valor retornado é colocado no lugar onde a função foi invocada.
Se uma função não tiver a palavra return, ela retornará undefined por padrão.
*/

function somar(a, b) {
  return a + b; // A função "cospe" o resultado para fora
}

// O resultado é guardado em uma variável
let resultadoLet = somar(8, 6);
console.log(resultadoLet);

const resultadoConst = somar(100, 21);
console.log(resultadoConst);

// EXERCÍCIO 3: O Retorno (return)
function calcularPrecoComDesconto(precoOriginal, porcentagemDesconto) {
  const valorDoDesconto = (precoOriginal * porcentagemDesconto) / 100;
  return valorDoDesconto;
}

const meuDesconto = calcularPrecoComDesconto(100, 15);
console.log(`O valor economizado foi de R$ ${meuDesconto.toFixed(2)}`);

//=================================================================

/*
AULA 4: Expressões de Função (Function Expressions)
Explicação Sucinta
Até agora, usamos a Function Declaration (function nome() {}). Mas, em JavaScript, funções são objetos de primeira classe. Isso significa que elas podem ser tratadas como qualquer outro valor: você pode atribuir uma função a uma variável.
Quando fazemos isso, chamamos de Function Expression. A principal diferença visual é que a função pode ser "anônima" (sem nome próprio), pois o nome da variável passa a ser o identificador para chamá-la.

Debaixo do Capô
Aqui está a grande diferença para a Aula 01: Function Expressions não sofrem Hoisting da mesma forma.
Enquanto a Declaration é "içada" para o topo, a Expression segue a regra das variáveis (let ou const). Se você tentar chamar uma função dessas antes da linha onde a variável foi declarada, o JavaScript lançará um erro (ReferenceError). O motor entende que a variável existe, mas ela ainda não foi inicializada com a função.
*/

// A função não tem nome (anônima), a variável 'multiplicar' a controla
const multiplicar = function (a, b) {
  return a * b;
};

console.log(multiplicar(4, 3)); // 12

// EXERCÍCIO 4: Expressões de Função (Function Expressions)
// console.log(converterEmMoeda(10)); // ReferenceError: Cannot access 'converterEmMoeda' before initialization

const converterEmMoeda = function (valor) {
  return `R$ ${valor.toFixed(2)}`;
};

console.log(converterEmMoeda(14));

//=================================================================

/*
AULA 5: Arrow Functions (Funções de Seta)
Explicação Sucinta
Introduzidas no ES6 (2015), as Arrow Functions são uma forma mais curta e moderna de escrever funções. Elas utilizam o símbolo => (daí o nome "seta").
Além de serem visualmente mais limpas, elas possuem características especiais de retorno: se a função tiver apenas uma linha, você pode omitir as chaves {} e a palavra return. Isso é chamado de Retorno Implícito.

Debaixo do Capô
As Arrow Functions não são apenas um "atalho sintático". A principal diferença técnica está no comportamento da palavra-chave this (que veremos em aulas avançadas). Diferente das funções normais, as Arrow Functions não criam seu próprio contexto de this; elas "herdam" o contexto de onde foram criadas.
Além disso, como são atribuídas a variáveis, elas também não sofrem hoisting, comportando-se como as Function Expressions da aula anterior.
*/

// Versão clássica (Function Expression)
const dobrar = function (n) {
  return n * 2;
};

console.log(dobrar(2));

// Versão Arrow Function (com retorno implícito)
const arrowDobrar = (n) => n * 2;

console.log(arrowDobrar(4));

// EXERCÍCIO 5: Arrow Functions (Funções de Seta)
const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2;

const media = calcularMedia(8, 5);

console.log(`A média final é: ${media}`);

//=================================================================

/*
AULA 6: Escopo de Bloco e Funções (Scope)
Explicação Sucinta
O Escopo determina a visibilidade de uma variável. Imagine que uma função é uma casa com vidros fumê: quem está dentro da casa consegue ver o que está no quintal (fora), mas quem está no quintal não consegue ver o que está dentro da casa.
Escopo Global: Variáveis declaradas fora de qualquer função.
Escopo Local: Variáveis declaradas dentro de uma função. Elas "nascem" quando a função inicia e "morrem" quando ela termina.

Debaixo do Capô
O motor do JavaScript utiliza algo chamado Lexical Environment (Ambiente Léxico). Quando você tenta acessar uma variável dentro de uma função, o motor primeiro procura no escopo interno (local). Se não encontra, ele sobe um degrau para o escopo "pai" (externo) e assim por diante, até chegar no escopo global. Esse caminho de busca é chamado de Scope Chain (Cadeia de Escopo).
*/

let meuNome = "Andrew"; // Escopo Global

function testarEscopo() {
  let sobrenome = "Gomes"; // Escopo Local
  console.log(meuNome); // Acessa o global com sucesso
}

testarEscopo();
// console.log(sobrenome); // Erro! sobrenome não existe fora da função

// EXERCÍCIO 6: Escopo de Bloco e Funções (Scope)
let statusSistema = "Inativo";

function ligarSistema() {
  let codigoDeSeguranca = 1234;
  statusSistema = "Ativo";

  console.log(`Sistema ${statusSistema} com código ${codigoDeSeguranca}`);
}

ligarSistema();
// console.log(codigoDeSeguranca); // ReferenceError: codigoDeSeguranca is not defined

//=================================================================

/*
AULA 7: Parâmetros Padrão (Default Parameters)
Explicação Sucinta
E se você chamar uma função que espera um argumento, mas esquecer de passá-lo? Como vimos na Aula 02, o JavaScript atribuiria undefined.
Os Parâmetros Padrão permitem que você defina um valor "reserva" diretamente na declaração da função. Se o argumento não for enviado (ou for undefined), a função usará esse valor pré-definido em vez de quebrar ou exibir um erro.

Debaixo do Capô
Quando a função é invocada, o motor do JavaScript verifica se o valor passado para cada parâmetro é estritamente undefined. Se for, ele avalia a expressão padrão definida no cabeçalho da função e a atribui ao parâmetro. Isso acontece no momento da execução, o que significa que o valor padrão pode até ser o resultado de outra função (embora isso seja um uso mais avançado).
*/

// O parâmetro 'vontade' tem um valor padrão
function beberAgua(quantidade, vontade = "muita") {
  console.log(`Bebendo ${quantidade}ml de água com ${vontade} vontade`);
}

beberAgua(500);
beberAgua(250, "pouca");

// EXERCÍCIO 7: Parâmetros Padrão (Default Parameters)
function criarUsuario(
  nome = "Anônimo",
  email = "Não informado",
  nivelAcesso = "Leitor",
) {
  return `Nome: ${nome} | E-mail: ${email} | Acesso: ${nivelAcesso}`;
}

console.log(criarUsuario());
console.log(criarUsuario("Andrew"));
console.log(criarUsuario("Henrique", "rick@email.com", "VIP"));

//=================================================================

/*
AULA 8: Funções de Ordem Superior (Higher-Order Functions - Parte 1: Callbacks)
Explicação Sucinta
Em JavaScript, funções são tratadas como Cidadãs de Primeira Classe. Isso significa que você pode passar uma função como se fosse um simples número ou string para dentro de outra função.
Uma Callback é uma função que é passada como argumento para outra e que será "chamada de volta" em algum momento. É como se você desse o seu telefone para uma empresa e dissesse: "Assim que o produto chegar, me ligue (execute essa ação)".

Debaixo do Capô
Quando você passa uma função B como argumento para a função A, a função A recebe a referência de memória da função B. O motor do JavaScript não executa B imediatamente; ele apenas guarda o "endereço" dela. Somente quando a função A decide invocar esse parâmetro (usando os parênteses ()), o motor pula para o contexto de execução da função
*/

const logSaudar = (nome) => console.log(`Olá, ${nome}!`);

// 'executarAcao' é a Higher-Order Function
// 'callback' é o parâmetro que receberá a função
function processarUsuario(nome, callback) {
  console.log("Processando dados...");
  callback(nome);
}

processarUsuario("Andrew Gomes", logSaudar);

// EXERCÍCIO 8: Funções de Ordem Superior (Higher-Order Functions - Parte 1: Callbacks)
const enviarSMS = (texto) => console.log(`Enviando SMS: ${texto}`);
const enviarEmail = (texto) => console.log(`Enviando E-mail: ${texto}`);

function gerarNotificacao(mensagem, metodoEnvio) {
  const mensagemTransformada = mensagem.toUpperCase();
  metodoEnvio(mensagemTransformada);
}

gerarNotificacao("Mensagem de SMS", enviarSMS);
gerarNotificacao("Mensagem de E-mail", enviarEmail);

//=================================================================

/*
AULA 9: Funções Anônimas em Callbacks
Explicação Sucinta
Muitas vezes, você precisará de uma callback que será usada apenas uma vez, em um lugar específico. Em vez de declarar uma função com nome (como enviarSMS) e depois passá-la, você pode escrever a função diretamente dentro dos parênteses da função que a recebe.
Isso é o que chamamos de passar uma Função Anônima (ou uma Arrow Function "on-the-fly"). Isso evita "poluir" seu código com nomes de funções que nunca mais serão chamadas em outro lugar.

Debaixo do Capô
Quando você define uma função anônima diretamente no argumento, o JavaScript cria esse objeto de função na memória apenas naquele instante. Ela não tem um identificador (nome) no escopo global ou local; ela existe apenas como o valor de um parâmetro dentro da Higher-Order Function. Assim que a função principal termina de executar, essa função anônima geralmente é marcada para limpeza pelo Garbage Collector.
*/

function executarOperacao(a, b, operacao) {
  return operacao(a, b);
}

// Passando uma função anônima diretamente
const resultadoOperacao = executarOperacao(10, 5, function (x, y) {
  return x + y;
});

console.log(resultadoOperacao); // 15

// Versão Arrow Function
const resultadoArrow = executarOperacao(10, 5, (x, y) => x * y);

console.log(resultadoArrow); // 50

// EXERCÍCIO 9: Funções Anônimas em Callbacks
function processarNumeros(a, b, callback) {
  return callback(a, b);
}

console.log(processarNumeros(8, 6, (a, b) => a + b));
console.log(processarNumeros(8, 6, (a, b) => a - b));
console.log(processarNumeros(8, 6, (a, b) => a * b));

//=================================================================

/*
AULA 10: Closures (Fechamentos)
Explicação Sucinta
Uma Closure ocorre quando uma função "se lembra" do ambiente (escopo) em que foi criada, mesmo após esse escopo ter terminado de ser executado.
Imagine que uma função pai cria uma variável e depois cria uma função filha. A função filha "carrega uma mochila" contendo as variáveis que estavam ao seu redor no momento do seu nascimento. Mesmo que você leve essa função filha para longe (retornando-a para ser usada em outro arquivo ou variável), ela ainda terá acesso aos itens dentro daquela "mochila".

Debaixo do Capô
Tecnicamente, quando uma função é declarada, ela armazena uma referência ao seu Lexical Environment (Ambiente Léxico).
Normalmente, quando uma função termina de executar, o JavaScript limpa suas variáveis da memória (Garbage Collection). Porém, se houver uma função interna (filha) que ainda faz referência a essas variáveis e essa função filha for retornada ou armazenada fora, o JavaScript mantém o escopo pai vivo na memória. Isso cria uma "bolha" de estado privado que só aquela função filha consegue acessar.
*/

function criarContador() {
  let contador = 0;

  return function () {
    return ++contador;
  };
}

const meuContador = criarContador();

console.log(meuContador()); // 1
console.log(meuContador()); // 2
console.log(meuContador()); // 3
// Note que não temos como acessar a variável 'contador' diretamente.
// Ela está protegida pela Closure!

// EXERCÍCIO 10: Closures (Fechamentos)
function criarGeradorDeMensagem(prefixo) {
  return function (conteudo) {
    console.log(`${prefixo} ${conteudo}`);
  };
}

const erro = criarGeradorDeMensagem("ERRO:");
const aviso = criarGeradorDeMensagem("AVISO:");

erro("Deu merda!");
aviso("Vai dar merda se continuar assim...");

//=================================================================

/*
AULA 11: IIFE (Immediately Invoked Function Expression)
Explicação Sucinta
Uma IIFE (abreviação para "Expressão de Função Invocada Imediatamente") é uma função que é executada no exato momento em que é definida.
Se a função comum é uma receita guardada para depois, a IIFE é um prato de "fast-food": você prepara e consome na mesma hora. Ela é muito usada para criar um escopo isolado, garantindo que as variáveis criadas ali dentro não "vazem" e não poluam o escopo global do seu projeto.

Debaixo do Capô
Para o motor do JavaScript entender uma IIFE, precisamos de dois pares de parênteses:
O primeiro envolve a função (function(){...}). Isso transforma a declaração em uma expressão, forçando o motor a tratá-la como um valor.
O segundo par () ao final é o que de fato invoca (chama) a função imediatamente.
Antigamente (antes do let e const), essa era a única forma segura de evitar que variáveis globais entrassem em conflito em projetos grandes.
*/

(function () {
  const mensagemSecreta = "Eu apareço assim que o script roda!";
  console.log(mensagemSecreta);
})();

// console.log(mensagemSecreta); // Erro! A variável está protegida pelo escopo da IIFE

// EXERCÍCIO 11: IIFE (Immediately Invoked Function Expression)
(function (nome) {
  const versao = "1.0.0";
  console.log(`Olá, ${nome}! Sistema iniciado na versão ${versao}`);
})("Andrew");

// console.log(versao); // ReferenceError: versao is not defined

//=================================================================

/*
AULA 12: O Objeto arguments vs. Operador Rest (...)
Explicação Sucinta
Às vezes, você não sabe quantos argumentos o usuário vai passar para a sua função. Imagine uma função para somar valores: ela deve somar 2, 5 ou 100 números?
Existem duas formas de lidar com isso:
arguments: Um objeto "mágico" disponível dentro de funções tradicionais que contém todos os argumentos passados. (Antigo e limitado).
Operador Rest (...): Uma forma moderna e elegante de dizer: "pegue o resto dos argumentos e coloque-os em um array real".

Debaixo do Capô
O arguments não é um array de verdade (é um objeto Array-like), o que significa que ele não tem métodos como .map() ou .filter().
Já o Rest Parameter (...variavel) cria um Array legítimo. Quando o motor do JS encontra o ..., ele empilha todos os argumentos excedentes em uma estrutura de dados de array no contexto de execução da função. Importante: o parâmetro Rest deve ser sempre o último na lista de parâmetros.
*/

// Forma Moderna (Rest)
function listarProdutos(categoria, ...produtos) {
  console.log(`Categoria: ${categoria}`);
  console.log(produtos); // 'produtos' já nasce como um Array []
}

listarProdutos("Eletrônicos", "Celular", "Notebook", "Desktop");

// EXERCÍCIO 12: O Objeto arguments vs. Operador Rest (...)
function somarTudo(...numeros) {
  let total = 0;

  for (const numero of numeros) {
    total += numero;
  }

  // numeros.forEach((numero) => (total += numero));

  return total;
}

const soma1 = somarTudo(8, 6);
const soma2 = somarTudo(4, 3, 4, 3);
const somaVazia = somarTudo();

console.log(soma1, soma2, somaVazia);

//=================================================================

/*
AULA 13: Funções Recursivas
Explicação Sucinta
Uma função recursiva é uma função que chama a si mesma.
Parece um loop infinito, mas para funcionar corretamente, toda recursão precisa de duas coisas:
Caso Base: Uma condição de parada (o momento em que ela para de se chamar).
Passo Recursivo: A chamada da própria função com um dado modificado para chegar mais perto do caso base.
É como descer uma escada: você faz o mesmo movimento (descer um degrau) até chegar no chão (caso base).

Debaixo do Capô
Cada vez que uma função chama a si mesma, o JavaScript adiciona uma nova "camada" (um novo Contexto de Execução) na Call Stack (Pilha de Chamadas).
Se você esquecer o caso base, a pilha cresce até estourar o limite de memória, gerando o famoso erro: RangeError: Maximum call stack size exceeded. Quando o caso base é atingido, o motor começa a "resolver" as funções de cima para baixo, devolvendo os valores para as chamadas anteriores.
*/

function contagemRegressiva(numero) {
  // Caso Base
  if (numero <= 0) {
    console.log("Decolar!");
    return;
  }

  console.log(numero);
  // Passo Recursivo (chamando a si mesma com um número menor)
  contagemRegressiva(numero - 1);
}

contagemRegressiva(3);
// Saída: 3, 2, 1, Decolar!

// EXERCÍCIO 13: Funções Recursivas
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  return numero * calcularFatorial(numero - 1);
}

console.log(calcularFatorial(5));

//=================================================================

/*
AULA 14: O Objeto de Contexto this (Básico)
Explicação Sucinta
A palavra-chave this é uma das mais "famosas" (e às vezes confusas) do JavaScript. Em termos simples, o this é uma referência ao objeto que está executando a função no momento.
Imagine que o this é o pronome "eu". Se eu (Gemini) digo "eu estou respondendo", o "eu" se refere a mim. Se você diz "eu estou estudando", o "eu" se refere a você. O significado de this muda dependendo de quem chama a função.

Debaixo do Capô
O valor de this não é fixado no momento da escrita do código (para funções tradicionais), mas sim no momento da execução.
Quando uma função é chamada como um método de um objeto (ex: objeto.funcao()), o motor do JavaScript define o this como sendo o objeto antes do ponto. Se a função for chamada "solta" no escopo global, o this apontará para o objeto global (window no navegador ou global no Node.js).
*/

const usuario = {
  nome: "Andrew",

  saudar() {
    // O 'this' aqui aponta para o objeto 'usuario'
    console.log(`Olá, meu nome é ${this.nome}`);
  },
};

usuario.saudar(); // Saída: Olá, meu nome é Andrew

const outraPessoa = {
  nome: "Henrique",
};

// Podemos "emprestar" a função
outraPessoa.dizerNome = usuario.saudar;
outraPessoa.dizerNome(); // Olá, meu nome é Henrique (o 'this' mudou!)

// EXERCÍCIO 14: O Objeto de Contexto this (Básico)
const contaBancaria = {
  titular: "Janico",
  saldo: 3500,

  depositar(valor) {
    this.saldo += valor;
  },

  resumo() {
    console.log(
      `Titular: ${this.titular} | Saldo: R$ ${this.saldo.toFixed(2)}`,
    );
  },
};

console.log(contaBancaria);

contaBancaria.depositar(250);
contaBancaria.resumo();

//=================================================================

/*
AULA 15: O this em Arrow Functions (O Pulo do Gato)
Explicação Sucinta
Lembra que na Aula 14 eu disse para não usar Arrow Functions em métodos? Aqui está o motivo: Arrow Functions não possuem seu próprio this.
Enquanto uma função comum decide quem é o this na hora da chamada (dependendo de quem está "antes do ponto"), a Arrow Function decide quem é o this na hora da criação. Ela captura o this do escopo onde foi escrita e nunca mais o solta. É o que chamamos de Lexical this.

Debaixo do Capô
Quando o motor do JavaScript cria uma Arrow Function, ele não cria um novo contexto para a palavra-chave this. Ele simplesmente olha para o "pai" (o escopo externo) e herda o this que estiver lá.
Isso é incrível para callbacks (como dentro de um setTimeout), mas é péssimo para métodos de objetos, porque o "pai" de um objeto geralmente é o escopo global (window ou global), e não o próprio objeto.
*/

const meuCarro = {
  modelo: "Fiesta",
  ano: 2004,

  // Função Comum: this aponta para 'carro'
  mostrarInfo() {
    console.log(`${this.modelo} - ${this.ano}`);
  },

  // Arrow Function: this aponta para o escopo Global (geralmente undefined)
  arrowMostrarInfo: () => console.log(`${this.modelo} - ${this.ano}`),
};

meuCarro.mostrarInfo();
meuCarro.arrowMostrarInfo();

// EXERCÍCIO 15: O this em Arrow Functions (O Pulo do Gato)
const perfil = {
  username: "dev_javascript",

  exibirContextoComum() {
    console.log(this);
  },

  exibirContextoArrow: () => console.log(this),
};

perfil.exibirContextoComum();
perfil.exibirContextoArrow();

//=================================================================

/*
AULA 16: Currying (Transformação de Funções)
Explicação Sucinta
Currying é o processo de transformar uma função que recebe múltiplos argumentos em uma sequência de funções, onde cada uma recebe apenas um único argumento.
Em vez de somar(1, 2, 3), você faz somar(1)(2)(3).
Isso parece estranho à primeira vista, mas é extremamente útil para criar "funções parciais" (especializadas) que podem ser reutilizadas em diferentes partes do seu código sem repetir parâmetros que não mudam.

Debaixo do Capô
O Currying só é possível graças às Closures (Aula 10).
Quando você chama a primeira função, ela retorna uma segunda função. Essa segunda função "lembra" do primeiro argumento através da Closure. O motor do JavaScript mantém esses valores na memória até que a última função da cadeia seja chamada e o cálculo final seja realizado.
*/

// Função normal
const somarComum = (a, b) => a + b;

const curryingFunction = (a) => (b) => a + b;

const somar5 = curryingFunction(5);

console.log(somar5(10));
console.log(somar5(15));

// EXERCÍCIO 16: Currying (Transformação de Funções)
function aplicarTaxa(imposto) {
  return function teste(valorProduto) {
    return valorProduto + valorProduto * imposto;
  };
}

const taxaBrasil = aplicarTaxa(0.15);
const taxaEUA = aplicarTaxa(0.07);

console.log(taxaBrasil(100));
console.log(taxaEUA(100));

//=================================================================

/*
AULA 17: Funções de Composição (Pipe & Compose)
Explicação Sucinta
Na programação funcional, raramente uma função faz tudo. O ideal é ter funções pequenas que fazem apenas uma coisa. A Composição é o ato de encadear essas funções pequenas para formar uma tarefa complexa.
Imagine uma linha de montagem:
Uma função limpa o texto.
Outra função capitaliza o texto.
Outra função adiciona um prefixo.
O resultado de uma entra como argumento na próxima.

Debaixo do Capô
Quando compomos funções, estamos criando uma "pilha" de chamadas onde a execução acontece de dentro para fora (ou da direita para a esquerda). O motor do JavaScript resolve a função mais interna primeiro, pega o valor de retorno dela e o passa imediatamente como argumento para a função que a envolve.
*/

const gritar = (texto) => texto.toUpperCase();
const enfatizar = (texto) => `${texto}!!!`;

// Composição manual
const avisoUrgente = enfatizar(gritar("cuidado"));

console.log(avisoUrgente); // "CUIDADO!!!"

// EXERCÍCIO 17: Funções de Composição (Pipe & Compose)
const adicionarFrete = (valor) => (valor += 20);
const aplicarCupom = (valor) => (valor -= 10);
const formatarMoeda = (valor) => `R$ ${valor.toFixed(2)}`;

const resultadoFinal = formatarMoeda(aplicarCupom(adicionarFrete(100)));
console.log(resultadoFinal);
