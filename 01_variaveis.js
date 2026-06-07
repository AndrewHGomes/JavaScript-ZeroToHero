/*
Aula 1: O que é uma Variável e o Espaço na Memória
Conceito
No nível mais básico, uma variável é um identificador associado a um valor durante a execução de um programa. Em JavaScript, declaramos variáveis para armazenar, recuperar e manipular informações ao longo da execução do código.

Debaixo do Capô
Quando você declara uma variável, a Engine do JavaScript cria um vínculo (binding) entre o identificador escolhido e um valor armazenado em suas estruturas internas de execução.
A especificação da linguagem não define exatamente como a memória deve ser organizada, permitindo que cada Engine implemente suas próprias otimizações.
Quando uma variável é acessada pelo nome, a Engine consulta esse vínculo para recuperar o valor associado.
*/

// Declarando a variável e atribuindo um valor inicial
let statusUsuario = "online";

// Sobreescrevendo o valor no mesmo endereço de memória
statusUsuario = "ocupado";

// Exercício 1: O que é uma Variável e o Espaço na Memória
let statusAtualEntrega = "processando";
statusAtualEntrega = "enviado";

//=======================================================

/*
Aula 2: Identificadores (Nomenclatura e Regras Técnicas)
Conceito
O nome que damos a uma variável é chamado de identificador. Em JavaScript, você tem a liberdade de escolher os nomes das suas variáveis, mas a linguagem impõe regras rígidas (que causam erros de sintaxe se violadas) e a comunidade adota convenções para manter o código legível.

Debaixo do Capô
O Parser da Engine do JavaScript (a etapa que analisa o código antes da execução) verifica se os identificadores seguem as regras definidas pela linguagem. Se encontrar uma violação de sintaxe, como um identificador iniciado por número ou o uso indevido de uma palavra reservada, a Engine interrompe o processamento e lança um SyntaxError antes da execução do código.
As regras estritas do JavaScript para identificadores são:
Deve começar com uma letra, sublinhado (_) ou cifrão ($).
Não pode começar com números.
Não pode conter espaços ou determinados caracteres especiais, como hifens (-).
Não pode ser uma Palavra Reservada (ex: let, if, for, function).
São case-sensitive (sensíveis a maiúsculas e minúsculas): status e Status são identificadores diferentes.
Tecnicamente, JavaScript permite diversos caracteres Unicode em identificadores, incluindo letras acentuadas, mas a prática mais comum é utilizar nomes sem acentuação para manter compatibilidade e legibilidade.
*/

// Identificadores válidos
let nomeCompleto = "Andrew Henrique Gomes"; // camelCase (Convenção padrão)
let _id_interno = 1024;
let $preco = 99.9;

// Identificadores INVÁLIDOS (causam SyntaxError)
// let 1nome = "Andrew";
// let nome-usuario = "Viviane";
// let let = "teste";

// Exercício 2: Identificadores (Nomenclatura e Regras Técnicas)
let primeiroUsuario = "Janico";
let precoTotal = 150.0;
let classe = "Premium";
let nomeDoProduto = "Teclado Mecânico";

//=======================================================

/*
Aula 3: O Sistema de Tipagem (Dinâmico e Fraco)
Conceito
JavaScript é uma linguagem de tipagem dinâmica e fracamente tipada.
Dinâmica: Você não precisa declarar de qual tipo (texto, número, booleano) a variável é. O tipo é inferido automaticamente com base no valor atribuído e pode mudar em tempo de execução.
Fraca: A linguagem permite operações entre tipos diferentes sem lançar erros imediatamente, realizando conversões implícitas por debaixo dos panos.

Debaixo do Capô
Em JavaScript, o tipo está associado ao valor armazenado, e não ao identificador da variável. Isso significa que uma mesma variável pode referenciar valores de tipos diferentes ao longo da execução.
Internamente, a Engine mantém informações suficientes para identificar o tipo atual de cada valor. Quando uma operação envolve tipos diferentes, o JavaScript pode aplicar um mecanismo chamado Coerção de Tipos (Type Coercion).
Essa coerção não acontece de forma aleatória: a linguagem possui regras específicas que determinam como os valores devem ser convertidos antes da operação ser executada. Por isso, expressões como 5 + "5" resultam na string "55", pois o número é convertido para texto antes da concatenação.
*/

let dado = 10; // O tipo na memória é Number
dado = "Texto"; // Dinâmico: agora o tipo na memória mudou para String

let resultado = 5 + "5";
// Fracamente tipado: o JS coage o número 5 em string e concatena.
// resultado vira a string "55" ao invés de quebrar o sistema.

// Exercício 3: O Sistema de Tipagem (Dinâmico e Fraco)
let container = 42;
let resultadoMistura = container + "9";

container = true;

//=======================================================

/*
Aula 4: Declaração Clássica vs. Moderna (var vs. let) - O Início do Escopo
Conceito
Historicamente, o JavaScript utilizava apenas a palavra-chave var para declarar variáveis. Com a modernização da linguagem (ES6), foram introduzidos o let (e o const, que veremos a seguir). A diferença crucial entre var e let reside nas regras de escopo (onde a variável existe e pode ser acessada) e no comportamento de redeclaração.
var: Possui escopo de função e permite que você redeclare a mesma variável no mesmo arquivo sem gerar erros.
let: Possui escopo de bloco (qualquer código entre { }) e proíbe terminantemente a redeclaração da mesma variável no mesmo escopo.

Debaixo do Capô
Quando a Engine do JavaScript entra em um bloco de código (como um if ou um laço for), o comportamento do identificador depende da palavra-chave utilizada.
Com var: a declaração pertence ao escopo da função mais próxima ou ao escopo global caso não exista função envolvida. Por isso, blocos delimitados por { } não criam isolamento para variáveis declaradas com var.
Com let: a Engine cria um ambiente léxico associado ao bloco atual. O identificador fica acessível apenas dentro daquele bloco. Após a saída do bloco, esse ambiente deixa de ser acessível pela execução normal do programa.
Se você tentar redeclarar o mesmo identificador com let dentro do mesmo escopo, a Engine interrompe o processamento com um erro de sintaxe para evitar ambiguidades e sobrescritas acidentais.
*/

// Exemplo com var (Permissivo e perigoso)
var taxa = 10;
var taxa = 20; // Aceito pela Engine. O valor antigo foi apagado silenciosamente.

// Exemplo de Escopo de Bloco com let
let statusConexao = "ativa";

if (true) {
  let statusConexao = "em espera"; // Válido! Esta variável só existe dentro deste IF.
}

// Aqui fora, o statusConexao original continua intacto como "ativa".

// Exercício 4: Declaração Clássica vs. Moderna (var vs. let) - O Início do Escopo
let nivelAcesso = "comum";

{
  let nivelAcesso = "admin";
}

//=======================================================

/*
Aula 5: Imutabilidade Pragmática com const
Conceito
A palavra-chave const (de constante) é usada para declarar variáveis cujo identificador não pode ser reatribuído. Ao contrário do let, uma variável declarada com const exige um valor inicial obrigatório no exato momento da declaração e proíbe que você use o operador de atribuição (=) nela novamente. Ela compartilha exatamente as mesmas regras de escopo de bloco do let.

Debaixo do Capô
Quando a Engine do JavaScript encontra uma declaração const, ela cria um vínculo (binding) que deve receber um valor imediatamente e que não pode ser reatribuído posteriormente.
Isso significa que o identificador continuará apontando para o mesmo valor ou referência durante toda a sua existência. Caso uma instrução tente utilizar o operador de atribuição (=) para associar outro valor ao mesmo identificador, a Engine interrompe a execução e lança um TypeError.
É importante notar que a imutabilidade se aplica ao vínculo criado pela declaração const, e não necessariamente ao conteúdo do valor armazenado. Objetos e arrays declarados com const continuam podendo ter suas propriedades ou elementos modificados.
*/

const PI = 3.14159; // Obrigatório inicializar
// PI = 3.14; // Gera um TypeError: Assignment to constant variable

const CONFIG_PRODUCAO = true;

// Exercício 5: Imutabilidade Pragmática com const
const URL_CONEXAO = "localhost:5432";
const PORTA = 5432;

//=======================================================

/*
Aula 6: Hoisting (O Mecanismo de Elevação)
Conceito
Hoisting (içamento ou elevação) é um comportamento padrão do JavaScript onde as declarações de variáveis e funções são "puxadas" para o topo do seu escopo de execução antes que o código comece a rodar de fato. No entanto, o var se comporta de maneira radicalmente diferente do let e do const durante esse processo, gerando um estado conhecido como Temporal Dead Zone (TDZ).

Debaixo do Capô
O Hoisting não move fisicamente o seu código. Ele acontece porque a Engine prepara o contexto de execução antes de começar a executar as instruções linha por linha.
Durante essa preparação, os identificadores declarados são registrados internamente.
Se for um var, o identificador é criado e inicializado com o valor undefined.
Se for um let ou const, o identificador é criado, mas permanece em estado não inicializado até que a declaração correspondente seja alcançada durante a execução.
A Temporal Dead Zone (TDZ) é o intervalo entre o início do escopo e a linha onde o let ou const é inicializado. Durante esse período, o identificador existe, mas qualquer tentativa de acesso resulta em um ReferenceError.
*/

// O que acontece com 'var' por baixo dos panos:
console.log(exemploVar); // Retorna 'undefined' (Não quebra o código)
var exemploVar = "Dado";

// O que acontece com 'let' (Temporal Dead Zone):
// console.log(exemploLet); // Dispara ReferenceError: Cannot access 'exemploLet' before initialization
let exemploLet = "Dado seguro";

// Exercício 6: Hoisting (O Mecanismo de Elevação)
// Cenário A:
console.log(token);
var token = "ax982";

// Cenário B:
// console.log(chaveApi);
let chaveApi = "secret_123";

let diagnosticoVar = "undefined";
let diagnosticoLet =
  "ReferenceError: Cannot access 'chaveApi' before initialization";

//=======================================================

/*
Aula 7: Escopo Global, de Função e de Bloco (A Hierarquia de Acesso)
Conceito
O Escopo determina a visibilidade e a acessibilidade das variáveis em diferentes partes do seu código. Em JavaScript, os escopos funcionam como uma engrenagem de "mão única": as estruturas internas conseguem enxergar e acessar variáveis criadas fora delas (no escopo pai/global), mas o inverso é impossível.
Temos três níveis principais:
Escopo Global: Variáveis declaradas fora de qualquer função ou bloco. Ficam visíveis em qualquer parte do arquivo.
Escopo de Função: Variáveis declaradas dentro de uma function. Normalmente ficam acessíveis apenas durante a execução da função, embora possam continuar existindo quando preservadas por closures.
Escopo de Bloco: Variáveis delimitadas por { } (como em estruturas if, for). Apenas let e const respeitam esse limite.

Debaixo do Capô
Quando a Engine tenta ler o valor de uma variável, ela cria uma cadeia de resolução chamada Scope Chain (Cadeia de Escopos).
Se você pede o valor de um identificador dentro de uma função, a Engine procura primeiro no ambiente léxico local (dentro dela). Se não encontrar, ela dá um passo para trás e procura no escopo imediatamente superior (escopo pai), repetindo o processo até chegar ao Escopo Global. Se não encontrar nem no Global, ela joga um ReferenceError.
Variáveis declaradas com var dentro de blocos não respeitam o escopo de bloco. Em vez disso, elas pertencem ao escopo da função mais próxima ou ao escopo global, o que pode ampliar sua visibilidade além do necessário e dificultar a manutenção do código.
*/

const global = "Acessível por todos";

function testarEscopo() {
  const funcao = "Apenas dentro da função";

  if (true) {
    var vazouDoBloco = "Inseguro";
    const seguroNoBloco = "Protegido";
  }

  console.log(vazouDoBloco); // Funciona! 'var' não respeita o blobo
  // console.log(seguroNoBloco); // Erro! Protegido pelo bloco
}

// Exercício 7: Escopo Global, de Função e de Bloco (A Hierarquia de Acesso)
const idSessao = "global_01";

function gerenciarSessao() {
  const idSessao = "funcao_02";

  if (true) {
    const idSessao = "bloco_03";
  }
}

gerenciarSessao();

//=======================================================

/*
Aula 8: Tipos de Dados - O Abismo entre Primitivos e Referência
Conceito
Em JavaScript, o comportamento de uma variável ao ser copiada ou manipulada depende da natureza do valor armazenado.
Primitivos: Number, String, Boolean, Undefined, Null, Symbol e BigInt. Quando copiados, produzem um novo valor independente.
Objetos (Referência): Object, Array e Function. Quando copiados, a nova variável passa a compartilhar a mesma referência para o objeto original.

Debaixo do Capô
A especificação do JavaScript não determina exatamente como a memória deve ser organizada internamente, permitindo que cada Engine utilize suas próprias otimizações.
Conceitualmente, valores primitivos se comportam como cópias independentes. Quando você atribui um primitivo para outra variável, alterações posteriores em uma delas não afetam a outra.
Objetos, arrays e funções se comportam de forma diferente. Quando uma variável recebe um objeto já existente, ela passa a compartilhar a mesma referência para esse objeto. Assim, alterações feitas através de qualquer uma das variáveis serão observadas por todas as referências que apontam para o mesmo valor.
*/

// Comportamento Primitivo (Stack)
let x = 10;
let y = x; // O valor 10 é duplicado na Stack
y = 20; // x continua sendo 10

// Comportamento de Referência (Heap)
let obj1 = { valor: 50 };
let obj2 = obj1; // Copia apenas o endereço do Heap

obj2.valor = 99;
console.log(obj1.valor); // Retorna 99! Ambos apontavam para o mesmo lugar.

// Exercício 8: Tipos de Dados - O Abismo entre Primitivos e Referência
const carrinhoOriginal = {
  id: 101,
  status: "aberto",
};

const carrinhoTentativaCopia = carrinhoOriginal;
carrinhoTentativaCopia.status = "finalizado";

const resultadoImpacto = carrinhoOriginal.status;
// carrinhoOriginal = "Outra coisa"; // TypeError! Tentou mudar o ponteiro.

//=======================================================

/*
Aula 9 (Final): GlobalThis, Mutabilidade de Escopo e Garbage Collection
Conceito
Para esgotar variáveis, precisamos entender onde elas existem quando estão fora de escopos locais e como a memória é recuperada pelo JavaScript.
O Objeto Global (globalThis): globalThis é uma referência padronizada ao objeto global do ambiente de execução. Dependendo do ambiente e da forma como o código é executado, determinadas declarações globais podem se tornar propriedades desse objeto.
Coleta de Lixo (Garbage Collection): O JavaScript gerencia a memória automaticamente. Quando um valor deixa de ser alcançável pelo programa, ele se torna elegível para remoção pelo coletor de lixo.

Debaixo do Capô
Motores JavaScript modernos utilizam algoritmos de coleta de lixo baseados no conceito de alcançabilidade, sendo o Mark-and-Sweep um dos modelos mais conhecidos.
Fase 1 (Mark): o coletor parte de referências consideradas ativas e marca tudo o que ainda pode ser alcançado.
Fase 2 (Sweep): os valores que não foram marcados são considerados inacessíveis e tornam-se candidatos à recuperação de memória.
Em alguns ambientes não estritos, criar uma variável sem utilizar let, const ou var pode resultar na criação de uma propriedade global implícita. Como ela permanece acessível a partir do objeto global, pode manter dados vivos por mais tempo do que o necessário e aumentar o consumo de memória da aplicação.
*/

// Vazamento de memória clássico por esquecimento de palavra-chave
function criarDados() {
  dadosInseguros = "Isso virou global implicitamente";
}

criarDados();
// Mesmo após a função terminar, 'dadosInseguros' continua vivo na RAM ocupando espaço.

// Exercício 9: GlobalThis, Mutabilidade de Escopo e Garbage Collection
let tokenSessao = "xyz123";
var codigoAcesso = "9988";

function processarAcesso() {
  payloadBruto = { user: "admin" };
}
processarAcesso();

let causaVazamento =
  "Por não ter palavra-chave 'var', 'let' ou 'const', 'payloadBruto' se fixou ao globalThis, gerando memory leak";
let anexaAoGlobal = "codigoAcesso e payloadBruto";
