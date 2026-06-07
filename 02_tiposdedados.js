/*
Aula 1: O Tipo Primitivo Number e o IEEE 754
Conceito
Em JavaScript, ao contrário de linguagens como C# ou Java, não existem tipos numéricos separados para inteiros (int) e números de ponto flutuante (float). Todos os números pertencem a um único tipo primitivo: Number. Ele representa tanto 42 quanto 3.14.

Debaixo do Capô
O JavaScript armazena todos os Numbers como números de ponto flutuante de precisão dupla de 64 bits, seguindo o padrão internacional IEEE 754.
Destes 64 bits: 1 bit é para o sinal (positivo/negativo), 11 bits para o expoente e 52 bits para a mantissa (o valor real).
A Armadilha da Precisão: Como a base binária não consegue representar exatamente certas frações decimais (como 0.1 ou 0.2), operações simples podem gerar resíduos matemáticos estranhos, como 0.1 + 0.2 === 0.30000000000000004.
Valores Especiais: O tipo Number também inclui três valores simbólicos: Infinity, -Infinity e NaN (Not a Number, que ironicamente possui o tipo... number).
*/

// Operações financeiras ou de alta precisão exigem cuidado no JS
const precoArroz = 0.1;
const precoFeijao = 0.2;

const totalDesejado = 0.3;
const totalCalculado = precoArroz + precoFeijao;

// Isso resultará em 'false' devido à imprecisão do IEEE 754
const osValoresSaoIguais = totalCalculado === totalDesejado;

// Uma abordagem comum é trabalhar com unidades inteiras menores (como centavos) ou controlar explicitamente o arredondamento quando necessário.
const totalFormatado = Number(totalCalculado.toFixed(2)); // Retorna 0.30
const totalAlternativo = (precoArroz * 100 + precoFeijao * 100) / 100;

console.log(totalFormatado);
console.log(totalAlternativo);

// Exercício 1: O Tipo Primitivo Number e o IEEE 754
const limitePesoElevador = 450;

const passageiro1 = 75.45;
const passageiro2 = 120.32;
const passageiro3 = 80.23;

const somaDosPesos = Number(
  (passageiro1 * 100 + passageiro2 * 100 + passageiro3 * 100) / 100,
);

const pesosSomados = Number(
  (passageiro1 + passageiro2 + passageiro3).toFixed(2),
);

const verificacaoDoTotal = somaDosPesos <= limitePesoElevador;
const totalVerificado = pesosSomados <= limitePesoElevador;

const operacaoInvalida = "texto" * 14;
const verificandoOperacaoInvalida = isNaN(operacaoInvalida);

console.log(somaDosPesos, typeof somaDosPesos);
console.log(pesosSomados, typeof pesosSomados);
console.log(verificacaoDoTotal, totalVerificado);
console.log(operacaoInvalida, typeof operacaoInvalida);
console.log(verificandoOperacaoInvalida, typeof verificandoOperacaoInvalida);

//=======================================================

/*
Aula 2: O Tipo Primitivo String e a Imutabilidade
Conceito
O tipo primitivo String é utilizado para representar dados textuais. Em JavaScript, uma string é uma sequência ordenada de valores numéricos de 16 bits codificados em UTF-16. Strings podem ser criadas com aspas simples ('), aspas duplas (") ou crases (`\), que ativam as Template Literals.

Debaixo do Capô
O ponto mais crucial sobre Strings (e todos os outros primitivos) é que eles são estritamente imutáveis.
Quando você cria uma string e depois tenta modificar um caractere dela diretamente (ex: texto[0] = 'X'), o JavaScript falha silenciosamente (ou lança um erro em Strict Mode) e não altera o valor.
Qualquer método que pareça "modificar" uma string (como .toUpperCase(), .replace(), .substring()) na verdade não altera a string original. O mecanismo do JavaScript aloca um novo espaço na memória, gera uma string completamente nova com as modificações e a retorna. Se você não capturar esse retorno em uma nova variável ou reatribuição, o resultado é descartado.
*/

const framework = "svelte";

// Tentativa de mutação direta no índice (Falha silenciosa)
framework[0] = "S";
console.log(framework); // Saída: 'svelte' (Não mudou!)

// Métodos geram novos valores na memória
const frameworkModificado = framework.toUpperCase();
console.log(framework); // Saída: 'svelte' (Original intacta)
console.log(frameworkModificado); // Saída: 'SVELTE' (Nova string criada)

// Exercício 2: O Tipo Primitivo String e a Imutabilidade
const meuUsuario = "   @andrew_gomes_dev   ";

const retirarEspacos = meuUsuario.trim();
const retirarArroba = retirarEspacos.slice(1);
const primeiraLetraMaiuscula = retirarArroba.replace(
  retirarArroba[0],
  retirarArroba[0].toUpperCase(),
);

console.log(meuUsuario, retirarEspacos, retirarArroba, primeiraLetraMaiuscula);

//=======================================================

/*
Aula 3: O Tipo Primitivo Boolean e a Tabela de Truthy/Falsy
Conceito
O tipo primitivo Boolean representa uma entidade lógica e pode conter apenas dois valores: true (verdadeiro) ou false (falso). É a base de qualquer estrutura de controle e tomada de decisão no código.

Debaixo do Capô
Em JavaScript, todo e qualquer valor carrega consigo um peso booleano intrínseco. Quando um valor de outro tipo (String, Number, Object, etc.) é colocado em um contexto onde um booleano é obrigatório (como um bloco if), o motor do JS avalia esse valor de forma binária com base em regras fixas na especificação do ECMAScript.
Os valores são divididos em duas categorias exatas:
Falsy (Valores falsos por natureza): Existem exatamente 8 valores que sempre se convertem para false:
false
0 (Zero numérico)
-0 (Zero negativo)
0n (BigInt zero)
"" ou '' (String vazia)
null
undefined
NaN
Truthy (Valores verdadeiros por natureza): Todo o resto. Isso inclui qualquer string com conteúdo (mesmo "false" ou "0"), qualquer número diferente de zero, objetos vazios ({}), arrays vazios ([]) e funções.
*/

const saldoEmConta = 0; // Tipo Number

// O motor do JS força 'saldoEmConta' a se converter em booleano no bloco 'if'
if (saldoEmConta) {
  console.log("Você tem dinheiro"); // Não executa, pois 0 é falsy
}

// Coerção explícita para Booleano usando o operador de dupla negação (!!)
const temSalto = !!saldoEmConta;
console.log(temSalto); // Saída: false

// Exercício 3: O Tipo Primitivo Boolean e a Tabela de Truthy/Falsy
const inputNomeProduto = "";
const inputQuantidade = 0;
const inputPreco = NaN;
const inputCupom = "0";

const validandoInputNomeProduto = Boolean(inputNomeProduto);
const validandoInputQuantidade = !!inputQuantidade;
const validandoInputPreco = Boolean(inputPreco);
const validandoInputCupom = !!inputCupom;

console.log(inputNomeProduto, validandoInputNomeProduto);
console.log(inputQuantidade, validandoInputQuantidade);
console.log(inputPreco, validandoInputPreco);
console.log(inputCupom, validandoInputCupom);

//=======================================================

/*
Aula 4: Os Primitivos de Ausência de Valor (Null e Undefined)
Conceito
undefined e null são dois tipos primitivos distintos que representam a ausência de valor, mas possuem semânticas e propósitos completamente diferentes na arquitetura da linguagem.
undefined: Significa que algo não foi definido ainda. É a ausência involuntária ou padrão de valor.
null: Significa que algo foi deliberadamente definido como vazio. É a ausência voluntária e intencional de valor.

Debaixo do Capô
O comportamento interno desses dois tipos revela algumas peculiaridades históricas do motor do JavaScript:
Inicialização Automática: Sempre que você declara uma variável usando let ou var e não atribui um valor inicial a ela, o próprio motor do JavaScript preenche o espaço de memória com o valor primitivo undefined. O mesmo acontece com funções que não possuem um comando return implícito ou explícito (elas retornam undefined).
Atribuição Manual: O valor null nunca é gerado automaticamente pelo motor do JS. Ele só existe se você, o desenvolvedor, atribuí-lo explicitamente à variável para indicar que ela está propositalmente vazia.
O Bug Histórico do typeof: Se você rodar typeof undefined, o retorno será "undefined". Porém, se você rodar typeof null, o motor retornará "object". Isso é um bug de design da primeira versão do JavaScript (1995) que nunca foi consertado para não quebrar a retrocompatibilidade da web mundial. Internamente, null é um primitivo, não um objeto.
*/

let carrinhoId;
console.log(carrinhoId); // Saída: undefined (o JS atribuiu automaticamente)

let usuarioLogado = null; // O desenvolvedor diz explicitamente: "No momento, não temos nenhum usuário logado"

console.log(typeof carrinhoId); // Saída: "undefined"
console.log(typeof usuarioLogado); // Saída: "object" (Bug histórico!)

// Exercício 4: Os Primitivos de Ausência de Valor (Null e Undefined)
let enderecoSecundario;
let cartaoCreditoVinculado = null;

const geradoPeloSistema = enderecoSecundario === undefined;

const tipoDeEnderecoSecundario = typeof enderecoSecundario;
const tipoDeCartaoCreditoVinculado = typeof cartaoCreditoVinculado;

console.log(geradoPeloSistema);
console.log(tipoDeEnderecoSecundario);
console.log(tipoDeCartaoCreditoVinculado);

//=======================================================

/*
Aula 5: Os Primitivos Modernos (BigInt e Symbol)
Conceito
Introduzidos em especificações mais recentes do ECMAScript (ES6 e ES2020), o Symbol e o BigInt vieram resolver limitações históricas da linguagem.
Symbol: É um tipo de dado cujas instâncias são únicas e imutáveis. Ele serve primariamente para criar identificadores únicos para propriedades de objetos que nunca irão colidir.BigInt: É um tipo numérico que pode representar números inteiros com precisão arbitrária, quebrando o limite de tamanho seguro imposto pelo tipo Number.

Debaixo do Capô
O Teto do Number: Como vimos na Aula 1, o padrão IEEE 754 reserva apenas 52 bits para o valor real. Isso significa que o maior número inteiro que o tipo Number consegue representar com total segurança é $2^{53} - 1$ (disponível na constante Number.MAX_SAFE_INTEGER, que equivale a 9007199254740991). Qualquer operação matemática com números maiores que este limite começará a perder dígitos e falhar. O BigInt aloca memória dinamicamente para aceitar números de qualquer tamanho. Eles são criados adicionando um sufixo n ao final do número (ex: 10n) ou chamando BigInt().
Identificadores Únicos: O Symbol é gerado invocando a função de fábrica Symbol(). Cada chamada a Symbol() produz um valor único, mesmo que dois símbolos recebam exatamente a mesma descrição textual. Eles não aceitam o operador new pois são valores primitivos, não objetos.
*/

// Estouro de limite do Number
const max = Number.MAX_SAFE_INTEGER;
console.log(max + 1 === max + 2); // Saída: true (O motor perdeu a precisão!)

// Resolução com BigInt
const maxBig = 9007199254740991n;
console.log(maxBig + 1n === maxBig + 2n); // Saída: false (Precisão garantida)

// Unicidade com Symbol
const s1 = Symbol("id");
const s2 = Symbol("id");
console.log(s1 === s2); // Saída: false (Identificadores únicos na memória)

// Exercício 5: Os Primitivos Modernos (BigInt e Symbol)
const idInterno = Symbol("id-transacao");
const outroId = Symbol("id-transacao");

const saoIguais = idInterno === outroId;
console.log("SÃO IGUAIS?", saoIguais);

const valorMovimentado = 15000000000000000000n;
console.log(valorMovimentado + 5n);

//=======================================================

/*
Aula 6: A Estrutura de Memória — Primitivos vs. Referência (Objetos)
Conceito
Até agora, trabalhamos apenas com tipos primitivos. Agora entraremos no universo dos Objetos (que engloba dicionários {}, Arrays [] e Funções). A diferença fundamental entre eles não está apenas no que eles fazem, mas em como eles residem na memória do computador.
Primitivos: São armazenados diretamente pelo seu valor.
Objetos: São armazenados por referência (um endereço de memória).

Debaixo do Capô
O motor do JavaScript gerencia a memória dividindo-a em duas estruturas principais: o Stack (Pilha) e o Heap (Monte).
O Stack (Memória Rápida e Estática): Em muitas Engines modernas, valores primitivos costumam ser tratados de forma mais direta e eficiente que objetos. No entanto, a especificação ECMAScript não exige uma implementação específica de Stack ou Heap.
O Heap (Memória Flexível e Dinâmica): Como os objetos podem crescer ou mudar de tamanho, eles não cabem no Stack de forma estática. O JavaScript cria o objeto real dentro do Heap. No Stack, ele guarda apenas o identificador da variável e um ponteiro (o endereço hexadecimal de onde o objeto está localizado no Heap).
A Armadilha da Cópia por Referência: Quando você copia um objeto para outra variável (const obj2 = obj1), você não está duplicando o objeto. Você está apenas copiando o endereço de memória. Ambas as variáveis agora apontam para o mesmíssimo objeto no Heap. Alterar obj2 modificará instantaneamente obj1.
*/

// Comportamento de Primitivos (Cópia por Valor)
let nome1 = "Andrew";
let nome2 = nome1; // Duplicado na pilha
nome2 = "Gomes";
console.log(nome1, nome2);

// Comportamento de Objetos (Cópia por Referência)
const usuario1 = { nome: "Andrew" };
const usuario2 = usuario1; // Copiou o ENDEREÇO de memória, não o objeto
usuario2.nome = "Gomes";
console.log(usuario1, usuario2);

// Exercício 6: A Estrutura de Memória — Primitivos vs. Referência (Objetos)
const usuarioOrigem = {
  id: 101,
  status: "ativo",
};

const usuarioDestino = usuarioOrigem;

usuarioDestino.status = "suspenso";

const cloneManual = {
  id: 101,
  status: "suspenso",
};

const comparacaoReferencia = usuarioOrigem === usuarioDestino;
const comparacaoClone = usuarioOrigem === cloneManual;

console.log(usuarioOrigem.status);
console.log(comparacaoReferencia);
console.log(comparacaoClone);

//=======================================================

/*
Aula 7: O Tipo Objeto — Literais e o Acesso a Propriedades
Conceito
Em JavaScript, quase tudo que não é um primitivo é um objeto (ou herda de um). Um objeto é uma coleção dinâmica de pares chave-valor, onde a chave (ou propriedade) é sempre uma String (ou Symbol) e o valor pode ser qualquer tipo de dado, incluindo outros objetos ou funções.

Debaixo do Capô
Quando você cria um objeto usando a sintaxe literal (const obj = {}), o motor do JavaScript cria um dicionário indexado na memória Heap.
Para acessar ou criar propriedades, existem duas sintaxes estruturais no motor:
Dot Notation (Notação por Ponto - obj.prop): É a mais limpa e performática, mas exige que o nome da propriedade seja um identificador válido (não pode começar com números, conter espaços ou caracteres especiais).
Bracket Notation (Notação por Colchetes - obj["prop"]): É a mais poderosa. O motor do JS avalia o que está dentro dos colchetes como uma expressão. Isso permite usar strings com espaços, caracteres especiais ou o valor contido dentro de uma variável dinâmica.
*/

const bancoDeDados = {
  "id-usuario": 45,
};

const chaveDinamica = "id-usuario";

// bancoDeDados.id-usuario; // Erro de sintaxe! O motor lê como uma subtração (-)
console.log(bancoDeDados[chaveDinamica]); // Saída: 45 (Funciona dinamicamente)

// Exercício 7: O Tipo Objeto — Literais e o Acesso a Propriedades
const metricaNome = "quantidade_acessos";
const dashboard = {};

dashboard.usuario = "admin";
dashboard[metricaNome] = 350;
dashboard["ultimo-acesso"] = "2026-06-02";

console.log(dashboard);

//=======================================================

/*
Aula 8: Mutabilidade de Objetos e Métodos de Prevenção (Object.freeze)
Conceito
Diferente dos primitivos, objetos são mutáveis por padrão. Mesmo que você declare um objeto usando const, isso apenas impede que a variável seja reatribuída (ou seja, ela não pode apontar para outro endereço de memória). No entanto, o conteúdo de dentro do objeto no Heap ainda pode ser livremente alterado, adicionado ou deletado. Para impedir isso, o JavaScript fornece métodos nativos de controle de mutabilidade, como o Object.freeze().

Debaixo do Capô
Quando você passa um objeto para Object.freeze(obj), o motor do JavaScript altera internamente as configurações das propriedades desse objeto (chamadas de Property Descriptors), mudando a flag writable para false e configurable para false.
Isso impede que novas propriedades sejam criadas, que propriedades existentes sejam alteradas ou que sejam deletadas.
Em modo normal, tentativas de alteração falham silenciosamente. Em "use strict", um erro é lançado.
A Armadilha do Freeze Raso (Shallow Freeze): O Object.freeze() só congela o primeiro nível do objeto. Se o objeto congelado contiver outro objeto aninhado (uma referência), as propriedades desse objeto interno ainda poderão ser modificadas, pois o ponteiro do primeiro nível não mudou, mas o objeto apontado no segundo nível continua livre.
*/

const configuracao = Object.freeze({
  idioma: "pt-br",
  tema: { visual: "escuro" },
});

configuracao.idioma = "en"; // Falha silenciosamente, o valor continua "pt-br"
configuracao.tema.visual = "claro"; // Funciona! O segundo nível não é congelado.
console.log(configuracao);

// Exercício 8: Mutabilidade de Objetos e Métodos de Prevenção
const sistemaSeguranca = {
  nivelAcesso: 3,
  modulos: { portaria: true, financeiro: false },
};

Object.freeze(sistemaSeguranca);

sistemaSeguranca.nivelAcesso = 5;
sistemaSeguranca.modulos.financeiro = true;

console.log(sistemaSeguranca.nivelAcesso);
console.log(sistemaSeguranca.modulos.financeiro);

//=======================================================

/*
Aula 9: O Tipo Objeto — Arrays e Métodos de Mutação vs. Imutabilidade
Conceito
Em JavaScript, um Array não é um tipo de dado primitivo separado; ele é uma instância especial do tipo Object. A diferença é que, em vez de chaves alfanuméricas arbitrárias, os Arrays utilizam índices numéricos sequenciais (armazenados internamente como strings "0", "1", etc.) e possuem propriedades e métodos nativos para manipulação de listas, além da propriedade mágica .length.

Debaixo do Capô
Por serem objetos no Heap, os Arrays herdam o comportamento de mutabilidade. No entanto, o ecossistema JS moderno divide os métodos de array em duas filosofias cruciais:
Métodos Mutadores (Modificam o Array Original): Operações como .push(), .pop(), .shift(), .unshift() e .splice() alteram os dados diretamente no espaço de memória existente do array. Eles são eficientes em termos de memória, mas podem causar efeitos colaterais indesejados se o array for compartilhado por referência.
Métodos Imutáveis (Geram um Novo Array): Operações como .concat(), .slice() e operadores como o Spread ([...]) não tocam no array original. O motor do JS aloca um novo espaço no Heap, copia os elementos necessários para lá e retorna a referência desse novo array.
*/

const numeros = [1, 2, 3];

// Abordagem Mutadora
numeros.push(4); // Altera o array 'numeros' diretamente

// Abordagem Imutável
const novosNumeros = numeros.concat(5); // 'numeros' continua igual; um novo array é criado no Heap

// Exercício 9: O Tipo Objeto — Arrays e Métodos de Mutação vs. Imutabilidade
const filaEspera = ["Andrew", "Viviane", "Janico"];
filaEspera.push("Cleusa");

const filaAtualizada = filaEspera.slice(1);

console.log(filaEspera);
console.log(filaAtualizada);

//=======================================================

/*
Aula 10: Coerção de Tipos (Type Coercion) — O Lado Implícito
Conceito
JavaScript é uma linguagem dinamicamente e fracamente tipada. Isso significa que o motor do JS não impede que você realize operações entre tipos totalmente diferentes (como somar um número com uma string). Em vez de quebrar e lançar um erro, o motor realiza a Coerção Implícita: ele adivinha e converte automaticamente um dos valores debaixo dos panos para que a operação faça sentido lógico segundo as regras da especificação do ECMAScript.

Debaixo do Capô
O motor do JavaScript utiliza três algoritmos abstratos internos principais para realizar essas conversões forçadas: ToPrimitive, ToNumber e ToString.
O Peso da String (Operador +): O operador de adição serve tanto para somar matemática quanto para concatenar textos. A regra interna dita: se pelo menos um dos lados da operação for uma String, o motor converterá o outro lado para String também e os juntará.
A Força Matemática (Operadores -, *, /): Ao contrário do +, esses operadores só possuem utilidade matemática. Portanto, se você tentar usá-los com uma string, o motor forçará a conversão dessa string para um Number. Se a string não contiver um número válido (ex: "texto"), o resultado da conversão será NaN.
*/

console.log(5 + "5"); // Saída: "55" (O número 5 vira string e concatena)
console.log(10 - "2"); // Saída: 8 (A string "2" vira o número 2)
console.log(10 * "dois"); // Saída: NaN (A string "dois" não se converte em número válido)

// Exercício 10: Coerção de Tipos (Type Coercion) — O Lado Implícito
const scoreInicial = 100;
const bonus = "50";
const penalidade = "cinco";

const resultado1 = scoreInicial + bonus;
const resultado2 = scoreInicial - bonus;
const resultado3 = scoreInicial * penalidade;

console.log(resultado1, typeof resultado1);
console.log(resultado2, typeof resultado2);
console.log(resultado3, typeof resultado3);

//=======================================================

/*
Aula 11: Conversão de Tipos (Typecasting) — O Lado Explícito
Conceito
Para evitar as surpresas e os comportamentos imprevisíveis da coerção implícita vistos na aula anterior, desenvolvedores utilizam a Conversão Explícita (Typecasting). Trata-se do ato de forçar manualmente a transformação de um valor de um tipo para outro, utilizando as funções construtoras nativas da linguagem como funções de conversão limpas.

Debaixo do Capô
O JavaScript disponibiliza funções globais que batem diretamente com seus tipos primitivos correspondentes: String(), Number() e Boolean().
Number(valor) vs parseInt(valor): Number() tenta converter o valor de forma estrita. Se houver caracteres incompatíveis com uma representação numérica válida (como "10px"), ele retorna NaN.
String(valor): Converte qualquer tipo de dado de forma previsível em sua representação textual (até mesmo null vira "null" e undefined vira "undefined").
Boolean(valor): Aplica diretamente as regras de Truthy e Falsy que estudamos na Aula 3, sem adivinhações do motor.
*/

const tamanho = "16px";

console.log(Number(tamanho)); // Saída: NaN (Estrito)
console.log(parseInt(tamanho)); // Saída: 16 (Extrai o número inteiro inicial)

// Exercício 11: Conversão de Tipos (Typecasting) — O Lado Explícito
const inputLargura = "800px";
const inputAtivo = "false";
const codigoErro = 0;

const larguraNumerica = parseInt(inputLargura);
const booleanoReal = Boolean(inputAtivo);
const textoErro = String(codigoErro);

console.log(larguraNumerica, typeof larguraNumerica);
console.log(booleanoReal, typeof booleanoReal);
console.log(textoErro, typeof textoErro);

//=======================================================

/*
Aula 12: Comparações de Igualdade — Ampla (==) vs. Estrita (===)
Conceito
A compreensão sobre coerção de tipos que você adquiriu nas últimas aulas é a chave para decifrar a maior fonte de bugs para iniciantes em JavaScript: a diferença entre os operadores de igualdade ampla (==) e igualdade estrita (===).
O operador == compara apenas o valor, permitindo coerção de tipos.
O operador === compara o valor e o tipo, proibindo qualquer coerção.

Debaixo do Capô
Quando você utiliza o operador ===, o motor do JS executa o algoritmo interno Strict Equality Comparison. Ele verifica os tipos: se forem diferentes, retorna false imediatamente. Se forem iguais, compara os valores (ou os endereços de memória, no caso de objetos).
Quando você utiliza o operador ==, o motor executa o algoritmo Abstract Equality Comparison. Se os tipos das variáveis forem diferentes, o motor não desiste. Ele aplica regras complexas de coerção implícita para tentar forçar os dois lados a chegarem a um tipo comum (geralmente convertendo ambos para números) antes de fazer a comparação final.
*/

console.log(5 == "5"); // Saída: true (A string "5" é coagida para o número 5 antes da comparação)
console.log(5 === "5"); // Saída: false (Tipos diferentes: number vs string, o motor nem olha o valor)

// Uma das bizarrices do algoritmo abstrato (==) devido à tabela de Truthy/Falsy:
console.log([] == 0); // Saída: true (O array vazio é coagido a uma string vazia "", que depois é coagida ao número 0)
console.log([] === 0); // Saída: false (Tipos diferentes: object vs number)

// Exercício 12: Comparações de Igualdade — Ampla (==) vs. Estrita (===)
const stringNum = "1n";
const bigIntNum = 1n;
const numeroPuro = 1;

const comparacao1 = stringNum == bigIntNum;
const pegadinhaComparacao1 = parseInt(stringNum) == bigIntNum; // parseInt("1n") retorna 1, pois a leitura para no primeiro caractere inválido.
const comparacao2 = numeroPuro == bigIntNum;
const comparacao3 = numeroPuro === bigIntNum;

console.log(comparacao1, pegadinhaComparacao1, comparacao2, comparacao3);

//=======================================================

/*
Aula 13: O Operador typeof e suas Peculiaridades
Conceito
O operador typeof é uma ferramenta unária (que opera sobre apenas um operando) utilizada para avaliar uma expressão e retornar uma string indicando o tipo de dado do valor resultante. É a primeira linha de defesa para checagem de tipos em JavaScript runtime.

Debaixo do Capô
O comportamento do typeof expõe diretamente como o motor do JavaScript representa os valores internamente. Na engine original do JS, os valores eram armazenados em unidades de tipo compostas por um marcador de tipo (tag) e o valor real.
A tag para objetos era 000.O valor null era representado como o ponteiro nulo (referência a um endereço de memória vazio), que em muitas plataformas correspondia a um bloco inteiro de zeros (000000...).
Devido a essa coincidência de zeros na tag de identificação, o motor lia null e achava que se tratava de um objeto, gerando o famoso retorno "object".
Aqui está a tabela exata de retornos que o motor gera para cada tipo que estudamos até aqui:
Tipo do Valor                  | Retorno do typeof
Undefined                      | "undefined" 
Null                           | "object" (Bug histórico)
Boolean                        | "boolean"
Number                         | "number"
BigInt                         | "bigint"
String                         | "string"
Symbol                         | "symbol"
Função                         | "function" (Apesar de ser um objeto no Heap)
Qualquer outro Objeto ({}, []) | "object"
*/

// Exercício 13: O Operador typeof e suas Peculiaridades
const valorA = null;
const valorB = () => {};
const valorC = [];

const tipoA = typeof valorA;
const tipoB = typeof valorB;
const tipoC = typeof valorC;

console.log(valorA, tipoA);
console.log(valorB, tipoB);
console.log(valorC, tipoC);

//=======================================================

/*
Aula 14: Objetos Wrappers (Empacotadores) — Como Primitivos Têm Métodos?
Conceito
Se você prestou atenção na Aula 2, aprendeu que strings são primitivos e primitivos são apenas valores puros e imutáveis na pilha de memória (Stack). Sendo assim, surge o grande paradoxo do JavaScript: como é possível que uma string primitiva consiga acessar propriedades e métodos como "texto".toUpperCase() ou "texto".length se ela não é um objeto? A resposta está nos Objetos Wrappers (Empacotadores).

Debaixo do Capô
Sempre que você tenta acessar uma propriedade ou método em um tipo primitivo (com exceção de null e undefined), o motor do JavaScript executa um processo temporário e invisível chamado Autoboxing:
O motor cria, em tempo de execução no Heap, um objeto empacotador temporário correspondente ao tipo (usando os construtores ocultos String(), Number() ou Boolean()).
Esse objeto temporário envolve o seu valor primitivo, dando a ele acesso instantâneo aos métodos do protótipo do objeto.
O método é executado e retorna o resultado.
O descarte: Imediatamente após a execução daquela linha, o objeto temporário é destruído pelo Garbage Collector (Coletor de Lixo) da linguagem para economizar memória, e o valor volta a ser um primitivo puro no Stack.
*/

const nome = "Andrew";

// O que você escreve:
console.log(nome.toUpperCase());

// O que o motor do JS faz debaixo do capô (simulação aproximada):
// const temp = new String(nome);
// console.log(temp.toUpperCase());
// temp = null; // (Destruído da memória Heap)

const texto = "teste";
texto.id = 10; // O JS cria o wrapper, injeta o id = 10 nele, e destrói o wrapper na sequência.
console.log(texto.id); // Saída: undefined (Um NOVO wrapper foi criado para ler o id, e este novo não tem a propriedade)

// Exercício 14: Objetos Wrappers (Empacotadores) — Como Primitivos Têm Métodos?
let usuarioCodigo = 99;
usuarioCodigo.tipo = "admin";

const resultadoLeitura = usuarioCodigo.tipo;
const stringFormatada = usuarioCodigo.toFixed(2);

console.log(resultadoLeitura, stringFormatada);

//=======================================================

/*
Aula 15: Métodos Avançados de Strings e Regex (Expressões Regulares)
Conceito
Agora que entendemos como os métodos funcionam sob o capô através dos wrappers, podemos explorar o poder de manipulação de dados textuais de nível avançado. O JavaScript possui métodos integrados na instância de String que aceitam tanto strings literais quanto Expressões Regulares (Regex) para realizar buscas, substituições e extrações complexas de padrões textuais.

Debaixo do Capô
Quando você utiliza métodos como .replace(), .replaceAll() ou .match(), o motor do JavaScript ativa o seu submódulo de parsing de texto.
Se você passa uma string literal para o .replace("a", "b"), o motor faz uma busca simples e substitui apenas a primeira ocorrência que encontrar no texto.
Para buscas globais complexas ou que ignoram maiúsculas/minúsculas, o motor exige o uso de uma expressão regular com suas respectivas flags (como /padrão/g para global ou /padrão/i para case-insensitive).
O método .match(regex) analisa a string e retorna um Array contendo todas as ocorrências encontradas que batem com o padrão, ou null se nenhuma for encontrada.
*/

const anuncio = "Cadeiras e Mesas";

// Substituição simples (muda apenas o primeiro 'e')
console.log(anuncio.replace("e", "X")); // Saída: "CadXiras e Mesas"

// Substituição via Regex Global (muda todos os 'e')
console.log(anuncio.replace(/e/g, "X")); // Saída: "CadXiras X MXsas"

// Exercício 15: Métodos Avançados de Strings e Regex
const logSistema = "ERRO: Acesso negado em 2026-06-02. ERRO: Token expirado";
const mensagemLimpa = logSistema.replace(/ERRO/g, "AVISO");
const dataExtraida = logSistema.match(/(\d{4}-\d{2}-\d{2})/);

console.log(mensagemLimpa);
console.log(dataExtraida[0]);
