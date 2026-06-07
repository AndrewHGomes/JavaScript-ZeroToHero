/*
Aula 1: Operadores de Atribuição Básica e Aritméticos
Conceito
Operadores são símbolos que sinalizam ao motor do JavaScript a execução de uma operação matemática, lógica ou de manipulação de dados sobre um ou mais operandos.
Os Aritméticos realizam cálculos matemáticos padrão, enquanto o operador de Atribuição Básica (=) injeta o valor avaliado à direita na referência de memória à esquerda.
+ (Adição / Concatenação)
- (Subtração)
* (Multiplicação)
/ (Divisão)
% (Resto da Divisão / Módulo)
** (Exponenciação)

Debaixo do Capô
Os operadores aritméticos trabalham sobre valores numéricos. Antes da operação ocorrer, o JavaScript pode realizar conversões implícitas de tipo dependendo dos operandos envolvidos.
Nos operadores -, *, /, %, **, os operandos são normalmente convertidos para Number. Caso a conversão não seja possível, o resultado será NaN.
O operador + possui comportamento especial:
- Se ambos os operandos forem números, realiza adição matemática.
- Se pelo menos um operando for string, realiza concatenação de texto após converter o outro operando para string.
Como o tipo Number utiliza o padrão IEEE 754 de dupla precisão, operações com números decimais podem apresentar pequenas imprecisões, como 0.1 + 0.2 resultar em 0.30000000000000004.
*/

const precoBase = 100;
const desconto = 15;
const taxaImposto = 0.05; // 5%

const precoComDesconto = precoBase - desconto;
const valorImposto = precoComDesconto * taxaImposto;
const precoFinal = precoComDesconto + valorImposto;

console.log(precoFinal); // 89.25

// Exercício 1: Operadores de Atribuição Básica e Aritméticos
const quantidadeItens = 58;
const pesoPorItem = 50;
const calculoPesoTotal = quantidadeItens * pesoPorItem;
const taxaFretePorKg = 3.5;
const valorTotalDaCarga = calculoPesoTotal * taxaFretePorKg;
const limitePesoContainer = 100;
const sobra = calculoPesoTotal % limitePesoContainer;

console.log(
  quantidadeItens,
  pesoPorItem,
  calculoPesoTotal,
  taxaFretePorKg,
  valorTotalDaCarga,
  limitePesoContainer,
  sobra,
);

//=======================================================

/*
Aula 2: Operadores de Atribuição Composta e Incremento/Decremento
Conceito
Operadores de Atribuição Composta combinam uma operação aritmética com uma atribuição em um único passo, reduzindo a verbosidade do código. Os operadores de Incremento (++) e Decremento (--) somam ou subtraem exatamente 1 de uma variável numérica, podendo ser utilizados de forma prefixada ou posfixada.
Atribuição Composta: +=, -=, *=, /=, %=, **=
Incremento/Decremento: ++, --

Debaixo do Capô
Uma expressão como:
x += y
produz o mesmo resultado de:
x = x + y
embora a especificação trate a avaliação de forma mais cuidadosa para garantir que a expressão da esquerda seja resolvida apenas uma vez.
Nos operadores ++ e -- existe diferença entre valor retornado e valor armazenado:
x++  -> retorna o valor atual e depois altera a variável.
++x  -> altera a variável primeiro e retorna o novo valor.
Essa diferença só é perceptível quando o resultado da expressão é utilizado.
*/

let pontuacao = 10;

pontuacao += 5; // Equivalente a: pontuacao = pontuacao + 5 -> 15
pontuacao *= 2; // Equivalente a: pontuacao = pontuacao * 2 -> 30

let jogadas = 0;
console.log(jogadas++); // Imprime 0 (Retorna o valor atual, depois incrementa na memória)
console.log(jogadas); // Imprime 1 (valor já atualizado)
console.log(++jogadas); // Imprime 2 (Incrementa na memória, depois retorna)

// Exercício 2: Operadores de Atribuição Composta e Incremento/Decremento
let estoquePecas = 150;
estoquePecas += 50;
estoquePecas -= 4;

let caixasProntas = 0;
console.log(++caixasProntas);

//=======================================================

/*
Aula 3: Operadores de Comparação Relacional e Igualdade
Conceito
Operadores de comparação avaliam a relação entre dois operandos e sempre retornam um valor booleano (true ou false). Eles são divididos em relacionais (grandeza) e de igualdade.
Relacionais: > (Maior que), < (Menor que), >= (Maior ou igual), <= (Menor ou igual)
Igualdade Ampla (Abstrata): == (Igual a), != (Diferente de)
Igualdade Estrita (Estrita): === (Idêntico a), !== (Não idêntico a)

Debaixo do Capô
O operador === compara tipo e valor sem realizar conversões implícitas.
Já o operador == segue um conjunto complexo de regras definido pela especificação ECMAScript. Dependendo dos tipos envolvidos, ele pode converter um ou ambos os operandos antes da comparação.
Embora muitas comparações com == pareçam funcionar corretamente, algumas combinações produzem resultados surpreendentes devido às regras de coerção. Por esse motivo, o uso de === é geralmente recomendado.
Nas comparações relacionais entre strings, o JavaScript compara os caracteres de acordo com seus valores Unicode, realizando uma comparação lexicográfica.
*/

const stringNumero = "42";
const numero = 42;

console.log(stringNumero == numero); // true  -> Coerção converteu a string em número
console.log(stringNumero === numero); // false -> Tipos diferentes (String vs Number)

console.log("TypeScript" > "JavaScript"); // true -> "J" vem antes de "T" no Unicode

// Exercício 3: Operadores de Comparação Relacional e Igualdade
const idadeMinimaPermitida = "20";
const idadeUsuario = 20;
const comparacaoIdade = idadeMinimaPermitida === idadeUsuario;

const perfilRequerido = "admin";
const perfilUsuario = "User";
const comparacaoPerfil = perfilUsuario !== perfilRequerido;

console.log(comparacaoIdade, comparacaoPerfil);

//=======================================================

/*
Aula 4: Operadores Lógicos (Short-Circuit)
Conceito
Operadores lógicos são utilizados para conectar múltiplos booleanos ou valores de qualquer tipo, determinando a lógica final da expressão. Em JavaScript, eles têm um comportamento especial chamado Curto-Circuito (Short-Circuit): eles não retornam necessariamente um booleano, mas sim o valor do último operando avaliado.
&& (AND / E)
|| (OR / OU)
! (NOT / NEGAÇÃO)

Debaixo do Capô
Os operadores && e || utilizam avaliação de curto-circuito (short-circuit evaluation).
&&:
- Avalia os operandos da esquerda para a direita.
- Retorna o primeiro valor falsy encontrado.
- Se todos forem truthy, retorna o último valor.
||:
- Avalia os operandos da esquerda para a direita.
- Retorna o primeiro valor truthy encontrado.
- Se nenhum for truthy, retorna o último valor.
Por esse motivo, esses operadores não retornam necessariamente booleanos. Eles retornam um dos operandos originais da expressão.
O operador ! converte o valor para booleano e inverte o resultado.
*/

// Uso clássico de fallback com ||
const nomeUsuario = "";
const nomeExibicao = nomeUsuario || "Convidado";
// "" é falsy, o motor salta e retorna o próximo valor: "Convidado"

// Uso de salvaguarda com &&
const usuarioAutenticacao = true;
const renderizarPainel = usuarioAutenticacao && "Painel Ativo";
// true é truthy, o motor continua e retorna o último: "Painel Ativo"

// Exercício 4: Operadores Lógicos (Short-Circuit)
const saldoConta = 0;
const possuiGarantia = true;
const limitePadrao = "R$ 1000";

const saldoExibicao = saldoConta || "Sem saldo disponível";
const creditoAprovado = possuiGarantia && limitePadrao;

console.log(saldoExibicao, creditoAprovado);

//=======================================================

/*
Aula 5: Operador de Coalescência Nula (??)
Conceito
O operador de Coalescência Nula (??) é um operador lógico projetado especificamente para resolver uma limitação histórica do operador || quando lidamos com valores padrões (fallbacks). Enquanto o || reage a qualquer valor falsy, o ?? só reage especificamente a dois valores: null ou undefined.

Debaixo do Capô
Ao utilizar expressao1 ?? expressao2, o motor do JavaScript avalia se o resultado de expressao1 possui o valor primitivo null ou undefined.
Se for null ou undefined, o motor faz o curto-circuito e retorna expressao2.
Se for qualquer outro valor (incluindo valores falsy válidos como 0, "" ou false), o motor ignora o segundo termo e retorna o valor de expressao1.
Isso impede que valores numéricos legítimos (como o número 0) ou strings vazias intencionais sejam acidentalmente sobrescritas pelo valor padrão.
*/

const configuracaoVolume = 0; // O usuário silenciou o app intencionalmente

const volumeComOR = configuracaoVolume || 50;
// Como 0 é falsy, o || aplica o padrão. Resultado: 50 (Incorreto para o cenário)

const volumeComCoalescencia = configuracaoVolume ?? 50;
// Como 0 NÃO é null nem undefined, o ?? mantém o valor. Resultado: 0 (Correto)

// Exercício 5: Operador de Coalescência Nula (??)
const pontuacaoSalva = 0;
const exibirChat = false;
const apelidoIdentificador = null;
const pontuacaoFinal = pontuacaoSalva ?? 100;
const statusChat = exibirChat ?? true;
const exibicaoNome = apelidoIdentificador ?? "Jogador Anônimo";

//=======================================================

/*
Aula 6: Operador Condicional Ternário (?:)
Conceito
O operador Condicional Ternário é o único operador do JavaScript que recebe três operandos. Ele funciona como uma expressão compacta de tomada de decisão, avaliando uma condição lógica e retornando um valor se essa condição for verdadeira, ou outro valor se for falsa.
A estrutura básica é: condicao ? valor_se_verdadeiro : valor_se_falso

Debaixo do Capô
Ao contrário de uma estrutura de controle de fluxo tradicional (como o if...else, que é uma instrução/statement), o operador ternário é uma expressão (expression). Isso significa que debaixo do capô o motor do JavaScript avalia a condição, executa a coerção booleana dela (acionando o algoritmo ToBoolean) e, imediatamente, retorna um valor que pode ser injetado diretamente em uma atribuição de variável ou retorno de função.
O motor executa apenas o bloco escolhido pela condição, ignorando completamente a avaliação da outra expressão (lazy evaluation).
*/

const velocidade = 110;
const limiteVelocidade = 100;

// O motor avalia a comparação, gera true e injeta a primeira string na const
const statusMulta = velocidade > limiteVelocidade ? "Multado" : "Regular";

console.log(statusMulta); // "Multado"

// Exercício 6: Operador Condicional Ternário (?:)
const pesoAtualCarga = 1200;
const limiteCargaElevador = 1000;

const statusElevador =
  pesoAtualCarga > limiteCargaElevador
    ? "Bloqueado por excesso de peso"
    : "Liberação autorizada";

//=======================================================

/*
Aula 7: Operadores Unários (typeof, delete, void e +/- Unários)
Conceito
Operadores unários são aqueles que operam em apenas um operando. Enquanto você já conhece o operador de negação (!), existem outros operadores unários cruciais para checagem, manipulação de tipos e gerenciamento de propriedades.
typeof: Retorna uma string indicando o tipo do operando.
+ (Unário): Converte explicitamente o operando em um número.
- (Unário): Converte o operando em um número e inverte o seu sinal matemático.
delete: Remove uma propriedade de um objeto.

Debaixo do Capô
typeof: O motor do JavaScript lê as tags de tipo binário internas do valor em memória. Existe um bug histórico famoso na especificação: typeof null retorna "object". Isso ocorre porque, nas primeiras versões do JS, os valores eram representados em blocos de 32 bits, onde os 3 bits mais baixos indicavam o tipo (e 000 representava um objeto). Como o ponteiro para null era inteiramente composto por zeros, o motor o lia erroneamente como um objeto. Esse bug nunca foi corrigido para não quebrar a retrocompatibilidade da web.
+ Unário:
O operador + unário tenta converter seu operando para Number utilizando as mesmas regras gerais de conversão numérica da linguagem.
Exemplos:
+"10"     // 10
+true     // 1
+false    // 0
+null     // 0
+"abc"    // NaN
Ele é frequentemente utilizado como uma forma curta de conversão numérica.
*/

const stringIdade = "25";
const idadeNumerica = +stringIdade; // Converte para o tipo Number: 25

console.log(typeof idadeNumerica); // "number"
console.log(typeof null); // "object" (O bug histórico)

const usuario = { nome: "Andrew", cargo: "Dev Web" };
delete usuario.cargo; // Remove a propriedade do objeto
console.log(usuario.cargo); // undefined

// Exercício 7: Operadores Unários (typeof, delete, void e +/- Unários)
const payloadBruto = {
  idTexto: "1054",
  tokenSessao: "xyz123",
};

const idNumerico = +payloadBruto.idTexto;
delete payloadBruto.tokenSessao;

const tipoId = typeof idNumerico;

console.log(payloadBruto, idNumerico, tipoId);

//=======================================================

/*
Aula 8: Operadores de Bitwise (Manipulação de Bits)
Conceito
Operadores de Bitwise (Bit a Bit) tratam seus operandos não como números decimais, mas como uma sequência de 32 bits (zeros e uns). Eles realizam operações lógicas diretamente na menor unidade de dados em nível de hardware.
& (AND Bit a Bit): Retorna 1 se ambos os bits forem 1.
| (OR Bit a Bit): Retorna 1 se pelo menos um dos bits for 1.
^ (XOR / OU Exclusivo Bit a Bit): Retorna 1 se os bits forem diferentes.
~ (NOT / Inversão Bit a Bit): Inverte todos os bits do operando.
<< (Deslocamento à Esquerda / Left Shift): Desloca os bits para a esquerda, preenchendo com zeros à direita.
>> (Deslocamento à Direita com Sinal): Desloca os bits para a direita, mantendo o bit de sinal.

Debaixo do Capô
Antes de executar operadores bit a bit, o JavaScript converte os operandos para inteiros de 32 bits com sinal.
Por isso, operações bitwise podem produzir resultados inesperados quando utilizadas com números muito grandes ou com valores fracionários.
Historicamente, deslocamentos de bits eram usados como alternativa para multiplicações por potências de dois. Atualmente, os motores JavaScript modernos realizam diversas otimizações internas, então essa técnica deve ser utilizada principalmente quando a manipulação de bits fizer parte da lógica do problema.
*/

// Operação AND Bit a Bit (&)
// 5 em binário: 00000000000000000000000000000101
// 3 em binário: 00000000000000000000000000000011
// ----------------------------------------------
// Resultado  : 00000000000000000000000000000001 (que é 1 em decimal)

console.log(5 & 3); // 1

// Multiplicação ultra rápida por potências de 2 com Shift
const numeroBase = 4;
console.log(numeroBase << 1); // 8  (4 * 2^1)
console.log(numeroBase << 3); // 32 (4 * 2^3)

// Exercício 8: Operadores de Bitwise (Manipulação de Bits)
let coordenadaX = 12;
coordenadaX <<= 2;

const mascaraPermissao = 5;
const idVerificacao = 1;
const resultadoBitwise = mascaraPermissao & idVerificacao;

//=======================================================

/*
Aula 9: Precedência de Operadores e Associatividade
Conceito
Precedência de Operadores determina a ordem em que os operadores são avaliados em uma expressão complexa (quais têm "prioridade" sobre os outros). Quando os operadores possuem exatamente o mesmo nível de precedência, a Associatividade entra em ação para definir se a execução ocorre da esquerda para a direita ou da direita para a esquerda.

Debaixo do Capô
O JavaScript possui uma tabela de precedência que define quais operadores são avaliados antes dos outros.
Por exemplo:
* e / possuem precedência maior que + e -.
Parênteses sempre podem ser utilizados para tornar a ordem de avaliação explícita e melhorar a legibilidade do código.
Quando operadores possuem a mesma precedência, entra em ação a associatividade, que determina se a avaliação ocorre da esquerda para a direita ou da direita para a esquerda.
*/

// Exemplo de Precedência
const resultado1 = 10 + 5 * 2;
// O motor executa primeiro 5 * 2 (nível 14) -> 10. Depois soma 10 (nível 13) -> 20.

const resultado2 = (10 + 5) * 2;
// O agrupamento () eleva a precedência. Executa 10 + 5 -> 15. Depois multiplica -> 30.

// Exemplo de Associatividade à Direita
let x, y, z;
x = y = z = 5;
// O motor avalia z = 5, que retorna 5. Depois y = 5, depois x = 5. Todos recebem 5.

// Exercício 9: Precedência de Operadores e Associatividade
const basePreco = 500;
const taxaExtra = 50;
const fatorAltaTemporada = 1.2;
const cupomDescontoFixo = 30;
const valorPassagemAerea =
  (basePreco + taxaExtra) * fatorAltaTemporada - cupomDescontoFixo;

console.log(valorPassagemAerea);

//=======================================================

/*
Aula 10: Operador de Encadeamento Opcional (?.) — Avançado
Conceito
O operador de Encadeamento Opcional (?.) permite ler o valor de uma propriedade localizada profundamente dentro de uma cadeia de objetos conectados, sem que o motor do JavaScript quebre a execução do código caso uma das referências no caminho seja null ou undefined.

Debaixo do Capô
Antes deste operador, tentar acessar objeto.perfil.endereco.rua quando perfil era null fazia o motor disparar um erro fatal de runtime: TypeError: Cannot read properties of null. Esse erro interrompia imediatamente o script.
Com o ?., o motor altera drasticamente seu fluxo de avaliação. Ao encontrar a expressão objeto?.perfil, o motor verifica se a referência imediatamente à esquerda é nullish (null ou undefined).
Se for nula/indefinida, o motor faz um curto-circuito instantâneo, para de avaliar o restante da linha à direita e retorna imediatamente undefined.
Se não for nula, o motor avança para a próxima propriedade normalmente.
*/

const usuarioSemEndereco = {
  nome: "Andrew",
  configuracoes: null,
};

// Sem o ?., o código abaixo travaria o sistema com um TypeError
const temaEscolhido = usuarioSemEndereco.configuracoes?.layout?.tema;
console.log(temaEscolhido); // Retorna undefined de forma segura, sem travar o app!

// Exercício 10: Operador de Encadeamento Opcional (?.) — Avançado
const logAcessoBruto = {
  idLog: 9482,
  dispositivo: {
    navegador: "Chrome",
  },
};

const paisAcesso =
  logAcessoBruto.localizacao?.geografia?.pais ?? "Origem Desconhecida";

console.log(paisAcesso);

//=======================================================

/*
Aula 11: Operadores de Atribuição Lógica (||=, &&=, ??=) — Avançado
Conceito
Introduzidos recentemente na especificação do ECMAScript, os operadores de Atribuição Lógica unem as operações lógicas de curto-circuito (||, &&, ??) com o operador de atribuição (=). Eles servem para atualizar o valor de uma variável baseado no fato de o valor atual ser truthy, falsy ou nullish.
||=: Atribui se o valor atual for falsy.
&&=: Atribui se o valor atual for truthy.
??=: Atribui se o valor atual for nullish (null ou undefined).

Debaixo do Capô
Os operadores ||=, &&= e ??= combinam avaliação lógica com atribuição.
x ||= y
equivale conceitualmente a:
x || (x = y)
x &&= y
equivale conceitualmente a:
x && (x = y)
x ??= y
equivale conceitualmente a:
x ?? (x = y)
A principal vantagem é expressar a intenção de forma mais clara e evitar repetições da mesma referência.
*/

let usuarioNome = "";
usuarioNome ||= "Anônimo";
// "" é falsy -> o motor atribui "Anônimo" à variável.

let opcoesDefinidas = { tema: "escuro" };
opcoesDefinidas ??= { tema: "claro" };
// O objeto já existe (não é nullish) -> o motor ignora a atribuição à direita.

// Exercício 11: Operadores de Atribuição Lógica (||=, &&=, ??=) — Avançado
let notaRascunho = "";
let sessaoAtiva = true;
let configuracaoFonte = null;

notaRascunho ||= "Nota sem título";
sessaoAtiva &&= "Conectado";
configuracaoFonte ??= "Helvetica";

//=======================================================

/*
Aula 12: Operadores de Tipo Avançados (instanceof e in)
Conceito
Para fechar com chave de ouro o domínio completo de operadores, entramos no território de introspecção de objetos. Os operadores in e instanceof servem para checar a estrutura e a árvore genealógica de dados complexos (Objetos, Arrays, Instâncias).
in: Verifica se um objeto possui uma propriedade específica (retorna true ou false).
instanceof: Verifica se um objeto é uma instância de uma classe ou função construtora específica, subindo pela cadeia de protótipos.

Debaixo do Capô
Operador in: Quando você executa "propriedade" in objeto, o motor do JavaScript não olha apenas para as propriedades diretas criadas dentro daquele objeto. Se ele não encontrar a propriedade ali, ele começa a subir pela Cadeia de Protótipos (Prototype Chain), vasculhando o protótipo pai (__proto__) até chegar ao topo (Object.prototype). Portanto, propriedades herdadas implicitamente também retornam true.
Operador instanceof: O motor avalia se o protótipo armazenado na propriedade .prototype do construtor da direita (ex: Array.prototype) existe em qualquer lugar ao longo da cadeia de protótipos do objeto à esquerda.

Observação
instanceof depende da cadeia de protótipos.
Por isso:
[] instanceof Array
retorna true.
Porém, em cenários envolvendo múltiplos contextos globais (como iframes em navegadores), instanceof pode produzir resultados inesperados.
Quando o objetivo é verificar especificamente se um valor é um array, costuma-se preferir:
Array.isArray(valor)
*/

const lista = [1, 2, 3];

// instanceof checa a árvore genealógica
console.log(lista instanceof Array); // true  -> É uma instância direta de Array
console.log(lista instanceof Object); // true  -> Todo Array também herda de Object

// in checa chaves/propriedades ou índices
console.log("length" in lista); // true  -> Arrays possuem a propriedade length
console.log("0" in lista); // true  -> O índice 0 existe na lista

// Exercício 12: Operadores de Tipo Avançados (instanceof e in)
const dadosCompletos = ["alguns", "dados", "quaisquer"];

const isEstruturaArray = dadosCompletos instanceof Array;
const possuiMetodoMap = "map" in dadosCompletos;

console.log(isEstruturaArray, possuiMetodoMap);
