/*
AULA 1: Operadores de Atribuição e Aritméticos Básicos
O Conceito
Operadores são símbolos que instruem o motor do JavaScript a realizar uma operação específica em um ou mais valores (operandos).
Atribuição (=): Define um valor a uma variável.
Aritméticos: Realizam cálculos matemáticos padrão: Adição (+), Subtração (-), Multiplicação (*) e Divisão (/).

Debaixo do Capô
Quando você escreve let x = 5 + 2, o JavaScript segue uma precedência:
Ele resolve a expressão à direita do sinal de igual primeiro.
O motor aloca um espaço na memória para o resultado (7).
O operador de atribuição (=) vincula o identificador x a esse endereço de memória.
Nota interessante: O operador + também é usado para concatenação de strings, o que pode gerar comportamentos peculiares se você misturar tipos (coerção).
*/

// Atribuição simples
let preco = 100;

// Operações aritméticas
let desconto = 15;

let precoFinal = preco - desconto; // 85
console.log(preco, desconto, precoFinal);

let quantidade = 3;

let totalCompra = precoFinal * quantidade; // 255
console.log(precoFinal, quantidade, totalCompra);

// EXERCÍCIO 1: Operadores de Atribuição e Aritméticos Básicos
let cafeMocha = "Mocha";
let precoMocha = 12.95;
let quantidadeMocha = 2;

let valorSemImpostos = precoMocha * quantidadeMocha;
let taxaDeServico = (valorSemImpostos * 10) / 100;

let valorTotal = valorSemImpostos + taxaDeServico;

console.log(
  `Olá! Os ${quantidadeMocha} Mochas vão sair por R$ ${valorTotal.toFixed(2)}`,
);

//===================================================================

/*
AULA 2: Operadores de Atribuição Composta e Resto da Divisão
Agora que você domina o básico, vamos otimizar a escrita e conhecer um operador essencial para algoritmos de lógica.
O Conceito
Atribuição Composta: São atalhos para atualizar o valor de uma variável baseando-se no valor anterior dela. Em vez de x = x + 5, usamos x += 5. Funciona para todos os aritméticos (+=, -=, *=, /=).
Resto da Divisão (Módulo %): Retorna o que sobra de uma divisão inteira. Útil para descobrir se um número é par/ímpar ou para criar ciclos.

Debaixo do Capô
Os operadores compostos não são apenas "açúcar sintático". Eles ajudam o motor do JS a identificar que a operação ocorre no mesmo local da memória, embora para tipos primitivos o resultado final seja uma nova atribuição.Já o operador % trabalha com o algoritmo da divisão de Euclides: para $10 \% 3$, o JS calcula quantas vezes o $3$ cabe no $10$ (cabe $3$ vezes, totalizando $9$) e retorna a diferença ($1$).
*/

let pontos = 10;
console.log(pontos);

pontos += 5; // Mesma coisa que: pontos = pontos + 5 (Resultado: 15)
console.log(pontos);

pontos *= 2; // Mesma coisa que: pontos = pontos * 2 (Resultado: 30)
console.log(pontos);

let resto = 10 % 3; // Resultado: 1 (O 3 cabe 3 vezes no 10 e sobra 1)
console.log(resto);

// EXERCÍCIO 2: Operadores de Atribuição Composta e Resto da Divisão
let estoque = 20;

estoque -= 5;
console.log(estoque);

estoque *= 3;
console.log(estoque);

let sobra = estoque % 7;

console.log(`Estoque atual: ${estoque} | Sobra após distribuição: ${sobra}`);

//===================================================================

/*
AULA 3: Operadores de Incremento, Decremento e Exponenciação
Agora vamos refinar ainda mais a forma como alteramos valores unitários e lidamos com potências.
O Conceito
Incremento (++) e Decremento (--): Adicionam ou subtraem exatamente 1 de uma variável.
Exponenciação (**): Eleva um número à potência de outro (ex: $2^3$).

Debaixo do Capô
O incremento/decremento possui duas formas: Postfix (x++) e Prefix (++x).
No Postfix (x++), o JavaScript retorna o valor atual e só depois aumenta 1.
No Prefix (++x), ele aumenta 1 primeiro e retorna o valor já atualizado.
O operador ** foi introduzido no ES2016 para substituir o antigo Math.pow(), tornando a leitura matemática muito mais natural no código.
*/

let contador = 10;
console.log(contador);

contador++; // Agora é 11
console.log(contador);

--contador; // Agora voltou para 10
console.log(contador);

let base = 2;
console.log(base);

let expoente = 3;
console.log(expoente);

let resultado = base ** expoente; // 8 (2 * 2 * 2)
console.log(resultado);

// Curiosidade do Postfix vs Prefix
let a = 5;
console.log(a);

let b = a++; // b recebe 5, depois 'a' vira 6
console.log(a, b);

let c = ++a;
console.log(a, c); // 'a' vira 7, depois 'c' recebe 7

// EXERCÍCIO 3: Operadores de Incremento, Decremento e Exponenciação
let ladoQuadrado = 5;
let areaQuadrado = ladoQuadrado ** 2;

let totalLikes = 0;

totalLikes++;
totalLikes++;
totalLikes++;
totalLikes--;

console.log(`Área: ${areaQuadrado} | Likes: ${totalLikes}`);

//===================================================================

/*
AULA 4: Operadores de Comparação (Igualdade e Estrita Igualdade)
Agora entramos em um terreno onde muitos desenvolvedores iniciantes tropeçam: a diferença entre comparar "valor" e comparar "valor e tipo".
O Conceito
Os operadores de comparação servem para testar condições e sempre retornam um Booleano (true ou false).
Igualdade Ampla (==): Verifica se os valores são iguais, mas ignora o tipo (faz coerção).
Estrita Igualdade (===): Verifica se o valor e o tipo de dado são idênticos.
Diferença (!= e !==): Seguem a mesma lógica acima, mas para verificar se os valores são diferentes.

Debaixo do Capô
O operador == aciona um mecanismo interno chamado Coerção de Tipos. Se você comparar 5 == "5", o JavaScript tentará converter a string em número antes de comparar, resultando em true.
Já o === pula essa conversão. Ele primeiro olha o "rótulo" do tipo de dado. Se um é Number e o outro é String, ele nem olha o valor e já retorna false. No desenvolvimento moderno, o === é o padrão de ouro para evitar bugs imprevisíveis.
*/

console.log(10 == "10"); // true (O JS converteu a string para número)
console.log(10 === "10"); // false (Tipos diferentes: Number vs String)

let senhaDigitada = "1234";
let senhaNoBanco = 1234;

console.log(senhaDigitada === senhaNoBanco); // false (Segurança garantida!)
console.log(10 !== 5); // true (De fato, 10 é diferente de 5)

// EXERCÍCIO 4: Operadores de Comparação (Igualdade e Estrita Igualdade)
let idadeMinima = 18;
let idadeUsuario = "18";

let verificacaoAmpla = idadeMinima == idadeUsuario;
let verificacaoEstrita = idadeMinima === idadeUsuario;

let cupom = "PROMO10";
let cupomValido = cupom !== "GRATIS";

console.log(verificacaoAmpla, verificacaoEstrita, cupomValido);

//===================================================================

/*
AULA 5: Operadores de Comparação Relacional
Agora que sabemos se algo é igual ou diferente, vamos aprender a medir a magnitude: quem é maior, menor ou se eles empatam.
O Conceito
Os operadores relacionais comparam a ordem de grandeza entre valores:
Maior que (>): true se o da esquerda for maior.
Menor que (<): true se o da esquerda for menor.
Maior ou Igual (>=): true se o da esquerda for maior ou exatamente igual.
Menor ou Igual (<=): true se o da esquerda for menor or exatamente igual.

Debaixo do Capô
Assim como no ==, esses operadores também realizam coerção automática. Se você comparar 10 > "5", o JS converterá a string para número.
Curiosidade: Se você comparar duas strings, como "B" > "A", o JavaScript não olha o tamanho da palavra, mas sim a ordem alfabética (baseada na tabela Unicode/ASCII). Portanto, "Z" > "A" é true.
*/

console.log(15 > 10); // true
console.log(10 <= 10); // true
console.log(7 < 4); // false
console.log("20" > 10); // true (string vira número)
console.log("2" > "10"); // true (comparação lexicográfica!)

let alturaMinima = 1.6;
let alturaPessoa = 1.75;

let podeEntrarNoBrinquedo = alturaPessoa >= alturaMinima; // true

// EXERCÍCIO 5: Operadores de Comparação Relacional
let limiteDePeso = 1000;
let pesoCargaAtual = 1000;

let estaSobrecarregado = pesoCargaAtual > limiteDePeso;
let podeSeguirViagem = pesoCargaAtual <= limiteDePeso;

let cidadeA = "Berlin";
let cidadeB = "Amsterdam";

let ordemAlfabetica = cidadeA > cidadeB;

console.log(`Está sobrecarregado? ${estaSobrecarregado}`);
console.log(`Pode seguir viagem? ${podeSeguirViagem}`);
console.log(`Ordem alfabética (${cidadeA} > ${cidadeB}): ${ordemAlfabetica}`);
console.log("Berlin" > "Amsterdam"); // true (porque "B" vem depois de "A")

//===================================================================

/*
AULA 6: Operadores Lógicos (AND, OR, NOT)
Até agora, comparamos apenas uma coisa por vez. Mas e se você precisar verificar se o usuário tem idade mínima E se ele pagou a entrada? É aqui que entra a lógica booleana.
O Conceito
Os operadores lógicos permitem combinar ou inverter valores booleanos:
AND (&&): Retorna true apenas se todos os lados forem verdadeiros.
OR (||): Retorna true se ao menos um dos lados for verdadeiro.
NOT (!): Inverte o valor (o que é true vira false e vice-versa).

Debaixo do Capô
O JavaScript utiliza uma técnica chamada Curto-Circuito (Short-circuit):
No &&, se o primeiro valor for false, ele nem olha o segundo (pois o resultado já será false).
No ||, se o primeiro valor for true, ele já para por ali (pois o resultado já será true).
Isso é usado para performance e para evitar erros em códigos mais complexos.
*/

let temIdade = true;
let temIngresso = false;

// AND: Precisa dos dois
console.log(temIdade && temIngresso); // false

// OR: Precisa de pelo menos um
console.log(temIdade || temIngresso);

// NOT: Inversão
console.log(!temIdade);
console.log(!temIngresso);

// EXERCÍCIO 6: Operadores Lógicos (AND, OR, NOT)
let receitaMensal = 3000;
let temNomeLimpo = false;
let temGarantia = true;

let emprestimoAprovado = receitaMensal > 2000 && (temNomeLimpo || temGarantia);
let alertaSeguranca = !temNomeLimpo;

console.log(
  `Empréstimo aprovado? ${emprestimoAprovado} | Alerta de segurança? ${alertaSeguranca}`,
);

//===================================================================

/*
AULA 7: Operador Ternário (Condicional)
Agora vamos conhecer o único operador do JavaScript que trabalha com três operandos. Ele é uma forma elegante e compacta de tomar decisões simples.
O Conceito
O operador ternário (? :) funciona como um atalho para uma estrutura de decisão. Ele avalia uma condição e retorna um valor se for verdadeira e outro se for falsa.
Sintaxe: condição ? valor_se_verdadeiro : valor_se_falso

Debaixo do Capô
Diferente de um bloco if/else (que é uma instrução), o operador ternário é uma expressão. Isso significa que ele sempre retorna um valor que pode ser atribuído diretamente a uma variável ou usado dentro de um console.log ou template literal. O motor do JS avalia a condição e "descarta" o caminho que não foi tomado.
*/

let algumaIdade = 15;
let verificaIdade = algumaIdade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(algumaIdade, verificaIdade); // 15 Menor de idade

// Também pode ser usado dentro de strings
console.log(`O usuário está ${algumaIdade >= 18 ? "liberado" : "bloqueado"}`);

// EXERCÍCIO 7: Operador Ternário (Condicional)
let valorCompra = 150;
let isClienteVIP = false;

let freteGratis = valorCompra >= 200 || isClienteVIP ? "GRÁTIS" : "R$ 20,00";

let mensagemFinal =
  freteGratis === "GRÁTIS"
    ? "Obrigado por comprar conosco!"
    : "Adicione mais itens para ganhar frete grátis.";

console.log(`Valor do frete: ${freteGratis} | Mensagem: ${mensagemFinal}`);

//===================================================================

/*
AULA 8: Operadores de Coalescência Nula e Optional Chaining (Intro)
Para fechar o grupo dos operadores de seleção e fluxo, vamos ver como o JavaScript moderno lida com valores "ausentes" (null ou undefined) sem quebrar o código.
O Conceito
Coalescência Nula (??): Retorna o valor da direita apenas se o da esquerda for estritamente null ou undefined. Se o valor for 0, "" ou false, ele mantém o valor da esquerda.
Diferença do OR (||): O || aceita qualquer valor "falsy" (como 0 ou "") para pular para o próximo valor. O ?? é mais rigoroso e seguro para configurações e números.

Debaixo do Capô
O ?? foi criado para resolver um problema histórico: se você queria definir um valor padrão para uma variável que podia ser 0, o || tratava o 0 como falso e aplicava o padrão erroneamente. O ?? checa especificamente o tipo interno do dado antes de decidir o "fallback".
*/

let personalizacaoUsuario = 0; // O usuário escolheu 0 de brilho

let brilho1 = personalizacaoUsuario || 50; // Retorna 50 (porque 0 é 'falsy')
let brilho2 = personalizacaoUsuario ?? 50; // Retorna 0 (porque 0 não é null/undefined)

console.log(brilho1, brilho2);

let nomeDeAlguem = null;
console.log(nomeDeAlguem ?? "Usuário Anônimo"); // "Usuário Anônimo"

// EXERCÍCIO 8: Operadores de Coalescência Nula e Optional Chaining (Intro)
let preferenciaVolume = 0;
let avatarPadrao = null;

let volumeFinal = preferenciaVolume ?? 100;
let displayAvatar = avatarPadrao ?? "default.png";

let nickname;
let nomeParaExibir = nickname || "Convidado";

console.log(
  `Volume: ${volumeFinal} | Avatar: ${displayAvatar} | Nome: ${nomeParaExibir}`,
);

//===================================================================

/*
AULA 9: Operadores de Tipo e Deletar (typeof e delete)
O Conceito
typeof: Retorna uma string que diz qual é o tipo de dado do operando. É um operador unário (atua sobre apenas um valor).
delete: Remove uma propriedade de um objeto. Se a remoção for bem-sucedida, a propriedade deixa de existir (não vira apenas undefined, ela some da estrutura).

Debaixo do Capô
O typeof lê as "tags de tipo" que o motor do JavaScript armazena junto com o valor na memória. Curiosidade: no JS original, os valores eram armazenados em unidades de 32 bits. O código para "objeto" era 000. Como o valor null era representado por um ponteiro nulo (todos os bits em zero), o typeof passou a ler null como um objeto. Esse bug permanece até hoje por questões de retrocompatibilidade.
Já o delete remove a ligação entre a chave e o valor no mapa do objeto, permitindo que o Garbage Collector (coletor de lixo) limpe o valor da memória se não houver outras referências a ele.
*/

let minhaIdade = 37;
let meuNome = "Dev";
let ativo = true;

console.log(typeof minhaIdade); // "number"
console.log(typeof meuNome); // "string"
console.log(typeof (10 > 5)); // "boolean" (ele avalia a expressão primeiro)

// Usando delete (em um objeto simples para contexto)
let objUsuario = {
  id: 1,
  token: "abc123secreto",
  nome: "Gomes",
};

console.log(objUsuario.token); // "abc123secreto"

delete objUsuario.token; // Remove a propriedade sensível

console.log(objUsuario.token); // undefined (a propriedade não existe mais)
console.log(objUsuario); // { id: 1, nome: "Gomes" }

// EXERCÍCIO 9: Operadores de Tipo e Deletar (typeof e delete)
let entrada = null;
let tipoEntrada = typeof entrada;
console.log(tipoEntrada); // "object"

let sessao = {
  usuario: "Eu mesmo",
  id: 14,
  senha: "4321dcba",
};

delete sessao.senha;

console.log(typeof tipoEntrada === typeof "string"); // true

console.log(sessao);

//===================================================================

/*
AULA 10: Operadores de Bitwise (Binários) - Uma introdução prática
Entramos agora em um nível mais profundo. Esses operadores raramente são usados no dia a dia de um desenvolvedor web comum, mas são fundamentais para performance extrema, criptografia, permissões de sistemas e manipulação de cores ou arquivos.
O Conceito
Operadores de bitwise tratam seus operandos não como números decimais (base 10), mas como uma sequência de 32 bits (zeros e uns).
AND (&): Retorna 1 se ambos os bits forem 1.
OR (|): Retorna 1 se pelo menos um dos bits for 1.
XOR (^): Retorna 1 se os bits forem diferentes.
NOT (~): Inverte os bits (0 vira 1, 1 vira 0).

Debaixo do Capô
Embora o JavaScript armazene números como pontos flutuantes de 64 bits (padrão IEEE 754), quando você usa um operador de bitwise, o motor do JS converte temporariamente o número para um inteiro de 32 bits com sinal. Após a operação bit a bit, ele converte o resultado de volta para o formato numérico padrão.
Exemplo rápido: O número 5 em binário é 0101. O número 3 é 0011.
5 & 3 resulta em 0001 (que é 1 em decimal).
*/

let x = 5; // binário: 0101
let y = 3; // binário: 0011

console.log(x & y); // 1
console.log(x | y); // 7

// Uso comum: Flags de permissão
const READ = 1; // 0001
const WRITE = 2; // 0010
const EXEC = 4; // 0100

let minhasPermissoes = READ | WRITE; // 0011 (Valor 3)
console.log(minhasPermissoes);

// Verificar se tenho permissão de escrita
let podeEscrever = (minhasPermissoes & WRITE) === WRITE;
console.log(podeEscrever); // true

// EXERCÍCIO 10: Operadores de Bitwise (Binários) - Uma introdução prática
const SOM = 1;
const MUSICA = 2;
const REPLAY = 4;
let configuracaoAtual = 0;

configuracaoAtual = SOM | REPLAY;

let musicaEstaAtiva = (configuracaoAtual & MUSICA) !== 0;

console.log(configuracaoAtual); // 5
console.log(musicaEstaAtiva); // false

//===================================================================

/*
AULA 11: Operadores de Deslocamento (Bitwise Shift)
Ainda no universo binário, vamos aprender como "empurrar" os bits para os lados. Isso equivale a multiplicações ou divisões ultra rápidas por potências de 2.
O Conceito
Os operadores de deslocamento movem os bits de um número para a esquerda ou para a direita:
Left Shift (<<): Move os bits para a esquerda, preenchendo com zeros à direita. Deslocar 1 posição à esquerda dobra o valor.
Right Shift (>>): Move os bits para a direita, mantendo o sinal (positivo ou negativo). Deslocar 1 posição à direita corta o valor pela metade (divisão inteira).
Unsigned Right Shift (>>>): Move para a direita, mas preenche com zeros à esquerda, ignorando o sinal.

Debaixo do Capô
Quando você faz 5 << 1, o binário 0101 (5) torna-se 1010 (10). Para o processador, mover bits é uma das operações mais baratas e rápidas que existem, muito mais que uma multiplicação aritmética comum. É por isso que em motores de jogos ou processamento de imagem, você verá muito disso.
*/

let numero_base = 2; // Binário: 0010

// Deslocando 2 posições para a esquerda
let esquerda = numero_base << 2;
// 0010 vira 1000 (Valor 8)
console.log(esquerda);

let direita = numero_base >> 1;
// 0010 vira 0001 (Valor 1)
console.log(direita);

// EXERCÍCIO 11: Operadores de Deslocamento (Bitwise Shift)
let baseDeDados = 64;
let resultadoDivisao = baseDeDados >> 2; // 16

let multiplicador = 5;
let resultadoMultiplicacao = multiplicador << 4; // 80

console.log(resultadoDivisao, resultadoMultiplicacao);

// NOTA PESSOAL (não precisa levar em consideração): Nunca vou usar essas 2 últimas aulas, pois não entendi nada dessa frescura.

//===================================================================

/*
AULA 12: Precedência de Operadores (A Ordem do Caos)
Sabe quando você tem uma conta enorme como 2 + 3 * 4? Quem ganha? É sobre isso que vamos falar.
O Conceito
A precedência define a ordem em que os operadores são avaliados. Se você não conhecer essa ordem, o JavaScript vai entregar um resultado totalmente diferente do que você planejou.
Parênteses (): Sempre têm a maior prioridade.
Multiplicação/Divisão: Ganham de Adição/Subtração.
Lógicos: O && (AND) é avaliado antes do || (OR).

Debaixo do Capô
O motor do JavaScript utiliza uma tabela interna de prioridades (de 1 a 20). Operadores com números maiores são executados primeiro. Quando os operadores têm a mesma prioridade (como + e -), ele avalia da esquerda para a direita (associatividade).
*/

let calculoErrado = 10 + 5 * 2; // 20 (5*2=10, 10+10=20)
let calculoCerto = (10 + 5) * 2; // 30 (Parênteses primeiro!)

let logica = true || (false && false); // true! Porque o && é processado antes.

// EXERCÍCIO 12: Precedência de Operadores (A Ordem do Caos)
let nota1 = 8;
let nota2 = 6;
let nota3 = 10;

let media = (nota1 + nota2 + nota3) / 3;

let presenca = true;
let filhoDeProfessor = true;

let ganhouBolsa = media >= 7 && (presenca || filhoDeProfessor);

console.log(media, ganhouBolsa);

//===================================================================

/*
AULA 13: Operadores de Agrupamento e Vírgula
Já vimos os parênteses para cálculos, mas eles e o operador de vírgula escondem segredos sobre como o JavaScript processa sequências de expressões.
O Conceito
Agrupamento (): Como você viu, ele força a maior precedência. Mas, tecnicamente, ele não é apenas para matemática; ele avalia qualquer expressão dentro dele e retorna o resultado.
Operador de Vírgula ,: Permite avaliar várias expressões (da esquerda para a direita) e retorna o valor da última expressão. É muito usado em loops ou para realizar várias ações em uma única linha.

Debaixo do Capô
O operador de agrupamento não "faz" nada no valor, ele apenas altera a árvore de análise (AST) do motor JS para priorizar aquele ramo. Já o operador de vírgula é um dos mais baixos na tabela de precedência (nível 1). Ele executa as expressões sequencialmente, mas "descarta" os resultados das primeiras, mantendo apenas a referência da última para a atribuição ou retorno.
*/

// Agrupamento com Strings
let saudacao = "Olá " + "Mundo";
console.log(saudacao);

// Operador de Vírgula
let umNumero = (10, 20, 30);
console.log(umNumero); // 30

let n1 = 1,
  n2 = 2,
  n3 = 3; // Uso comum da vírgula

// EXERCÍCIO 13: Operadores de Agrupamento e Vírgula
let pontuacao;
let resultadoFinal = ((pontuacao = 100), (pontuacao += 50), pontuacao * 2);

let expressao = ("texto" + 5) * 2; // NaN
console.log(expressao);

let expressao2 = "texto" + 5 * 2; // "texto10"
console.log(expressao2);

//===================================================================

/*
AULA 14: Operador de Propagação (Spread Operator ...)
Agora entramos no JavaScript Moderno (ES6+). Esse operador é um dos favoritos dos desenvolvedores hoje em dia.
O Conceito
O operador de propagação (...) "espalha" os elementos de um iterável (como um Array ou um Objeto) dentro de outro.
Em Arrays: Serve para copiar ou fundir listas.
Em Objetos: Serve para criar cópias de objetos alterando ou adicionando propriedades sem mexer no original.

Debaixo do Capô
O motor do JS percorre o iterável e copia os valores um a um para o novo destino. É importante notar que essa é uma cópia rasa (shallow copy). Se houver um objeto dentro do array, ele copiará apenas a referência, não o objeto interno inteiro.
*/

// Com Arrays
let frutas = ["Jaboticaba", "Abacate"];
let maisFrutas = ["Manga", "Pêra", ...frutas];

console.log(frutas);
console.log(maisFrutas);

// Com Objetos
let carro = {
  marca: "Ford",
  ano: 2004,
};

let novoCarro = {
  ...carro,
  ano: 2010,
  cor: "Preta",
};

console.log(carro);
console.log(novoCarro);

// EXERCÍCIO 14: Operador de Propagação (Spread Operator ...)
let lista1 = ["Pão", "Leite"];
let lista2 = ["Presunto", "Mussarela"];

let listaFinal = [...lista1, ...lista2];

let esteUsuario = {
  nome: "Viviane",
  idade: 40,
  email: "viane@email.com",
};

let esteUsuarioAtualizado = {
  ...esteUsuario,
  idade: 41,
  status: "ativo",
};

console.log(listaFinal);
console.log(esteUsuarioAtualizado);
