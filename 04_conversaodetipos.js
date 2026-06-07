/*
Aula 1: Conversão Explícita vs. Implícita (Coerção)
Conceito
A conversão de tipo é o processo de transformar um valor de um tipo de dado para outro (ex: String para Number). Ela ocorre de duas formas:
Explícita (Type Casting): Quando você, o desenvolvedor, define claramente a intenção de transformar o dado usando funções nativas.
Implícita (Type Coercion): Quando o motor do JavaScript converte o tipo automaticamente para conseguir executar uma operação.

Debaixo do capô
O JavaScript não "quebra" facilmente ao encontrar tipos incompatíveis. Em vez disso, ele tenta ser "útil" disparando algoritmos internos de conversão (como o ToPrimitive, ToString ou ToNumber). Na conversão explícita, você invoca esses algoritmos diretamente. Na implícita, o contexto da operação (como o uso de um operador aritmético) força o motor a decidir qual conversão aplicar para evitar um erro.
*/

const entradaUsuario = "42";

// Explícita: Intencional e clara
const idadeNumero = Number(entradaUsuario);

// Implícita: O operador '-' força a string a virar número
const calculoInvisivel = entradaUsuario - 10; // Resultado: 32 (Number)

// Exercício 1: Conversão Explícita vs. Implícita (Coerção)
const numeroString = "14.5";
const stringNumero = Number(numeroString);
const subtracaoComString = numeroString - 5;

console.log(numeroString, typeof numeroString);
console.log(stringNumero, typeof stringNumero);
console.log(subtracaoComString, typeof subtracaoComString);

//=======================================================

/*
Aula 2: Conversão de String para Number (Explícita)
Agora que você conhece a diferença entre o explícito e o implícito, vamos mergulhar nas ferramentas que o JavaScript nos dá para converter valores para números de forma manual. Existem três formas principais, cada uma com um comportamento específico.
Conceito
A conversão explícita para número é geralmente feita por:
Number(valor): O construtor mais comum. Tenta converter o valor inteiro.
parseInt(valor): tenta interpretar a string a partir do início e extrai a parte inteira até encontrar um caractere inválido.
parseFloat(valor): Similar ao parseInt, mas mantém as casas decimais (pontos flutuantes).

Debaixo do capô
O Number() é mais rigoroso: se a string contiver qualquer caractere não numérico (além do sinal de ponto ou espaços nas extremidades), ele desiste e retorna NaN (Not a Number). Já o parseInt e parseFloat são mais "permissivos": eles fazem o parsing (análise sintática). Se a string começar com números, eles os capturam até encontrar o primeiro caractere não numérico, ignorando o resto.
*/

const preco = "15.99px";

console.log(Number(preco)); // NaN (Rigoroso: tem 'px')
console.log(parseInt(preco)); // 15 (Extrai o inteiro e para no '.')
console.log(parseFloat(preco)); // 15.99 (Extrai o número com decimais e para no 'p')

// Exercício 2: Conversão de String para Number (Explícita)
const input = "100.50 unidades";
const inputComNumber = Number(input);
const inputComParseInt = parseInt(input);
const inputComParseFloat = parseFloat(input);

console.log(inputComNumber); // É mais rigoroso ao encontrar qualquer caractere que não seja numérico, retornando NaN
console.log(inputComParseInt);
console.log(inputComParseFloat);

//=======================================================

/*
Aula 3: Conversão para Boolean (Truthful e Falsy)
Entender como valores se transformam em booleanos é vital para o controle de fluxo (if/else) e lógica condicional.
Conceito
Qualquer valor em JavaScript pode ser convertido para um booleano (true ou false).
Explícita: Usando a função Boolean(valor).
Implícita: Quando o valor é usado em um contexto lógico (como um if ou operadores lógicos).

Debaixo do capô
O JavaScript utiliza uma lista restrita de valores que são considerados Falsy (convertem para false). Todo o resto é Truthy (converte para true).
Os 8 valores Falsy são:
false
0
-0
0n
"" (String vazia)
null
undefined
NaN
*/

const nome = "";
const usuarioLogado = Boolean(nome);

console.log(usuarioLogado); // false (String vazia é Falsy)

if (100) {
  console.log("Números diferentes de zero são Truthy");
}

// Exercício 3: Conversão para Boolean (Truthful e Falsy)
const valores = [0, "0", "", null, undefined, [], {}];

console.log(valores);

valores.forEach((valor) => {
  console.log(`${valor} = ${Boolean(valor)}`);
});

//=======================================================

/*
Aula 4: Conversão para String (Explícita)
Agora que saímos dos números e booleanos, vamos ver como transformar dados de volta em texto.
Conceito
A conversão para string é necessária para exibir dados na interface ou concatenar mensagens.
String(valor): A forma global e mais segura. Converte qualquer coisa para sua representação em texto.
.toString(): Um método presente na maioria dos objetos e tipos primitivos (exceto null e undefined).

Debaixo do capô
O String() funciona como uma "capa" que chama internamente o algoritmo ToString. Já o método .toString() é herdado do protótipo do objeto. A grande diferença prática reside no comportamento com valores nulos:
String(null) resulta na string "null".
null.toString() resulta em um TypeError, pois você não pode acessar métodos de algo que não existe.
*/

const id = 1010;
console.log(String(id)); // "1010"
console.log(id.toString()); // "1010"

const ativo = true;
console.log(String(ativo)); // "true"
console.log(ativo.toString()); // "true"

// Exercício 4: Conversão para String (Explícita)
const vazia = null;
const stringVazia = String(vazia);
// const toStringVazia = vazia.toString(); // TypeError: Cannot read properties of null (reading 'toString')

const user = { id: 1 };
const stringUser = String(user);
console.log(user, stringUser); // { id: 1 } [object Object]

//=======================================================

/*
Aula 5: Coerção de Tipos em Operações Aritméticas (A Adição)
Até agora vimos conversões explícitas. Vamos entrar no território da Coerção Implícita, começando pelo operador mais "perigoso": o +.
Conceito
Diferente da subtração, multiplicação ou divisão (que sempre tentam converter os operandos para Number), o operador + tem uma dupla função em JavaScript: Adição numérica ou Concatenação de strings.

Debaixo do capô
O motor segue uma regra prioritária: se qualquer um dos operandos for uma String, o JavaScript converterá o outro operando para String também e os juntará (concatenação). Se nenhum dos operandos for String, o JavaScript tenta converter ambos para Number e realiza a soma numérica.
Number + Number = Soma
String + Qualquer Coisa = Concatenação
Boolean + Number = Soma (onde true = 1 e false = 0)
*/

console.log(5 + "5"); // "55" (String)
console.log(10 + 20); // 30   (Number)
console.log(true + 2); // 3    (Number: 1 + 2)
console.log(null + 5); // 5    (Number: 0 + 5)

// Exercício 5: Coerção de Tipos em Operações Aritméticas (A Adição)
console.log("10" + 20); // "1020"
console.log(true + 7); // 8
console.log(false + 10); // 10
console.log(null + "vazio"); // "nullvazio"
console.log(5 + 5 + "5"); // 105 - Da esquerda para a direita somando, depois concatena

//=======================================================

/*
Aula 6: Coerção em Operadores de Comparação (== vs ===)
Este é um dos tópicos que mais causa bugs em produção para quem não domina os fundamentos.
Conceito
Existem duas formas de comparar igualdade em JavaScript:
Igualdade Ampla (==): Compara os valores, mas permite coerção de tipos antes da comparação.
Igualdade Estrita (===): Compara o valor e o tipo. Não permite coerção. Se os tipos forem diferentes, retorna false imediatamente.

Debaixo do capô
Quando você usa ==, o JavaScript executa o algoritmo Abstract Equality Comparison. Se os tipos forem diferentes (ex: String e Number), ele tenta converter ambos para um tipo comum (geralmente Number) para então compará-los.
"5" == 5 vira 5 == 5 (true).
true == 1 vira 1 == 1 (true).
null == undefined é uma regra especial que sempre retorna true, mas eles não são iguais a mais nada.
*/

console.log(10 == "10"); // true (Coerção acontece)
console.log(10 === "10"); // false (Tipos diferentes: Number vs String)

console.log(1 == true); // true
console.log(1 === true); // false

// Exercício 6: Coerção em Operadores de Comparação (== vs ===)
console.log(0 == false, 0 === false); // 0 == false → true - 0 === false → false
console.log("" == 0, "" === 0); // "" == 0 → true - "" === 0 → false
console.log(null == undefined, null === undefined); // null == undefined → true - null === undefined → false.
console.log(NaN == NaN, NaN === NaN);
/*
O NaN (acrônimo para Not-a-Number) não é igual a ele mesmo porque a norma matemática de computação (IEEE-754) o define como um valor indefinido. Como ele representa um "erro" ou uma operação impossível e não um número em si, fazê-lo ser diferente de qualquer valor, incluindo ele mesmo, previne erros lógicos em cálculos
*/

//=======================================================

/*
Aula 7: Coerção em Operadores Lógicos (&& e ||)
Para fechar o domínio fundamental, precisamos entender que os operadores && (AND) e || (OR) não retornam apenas true ou false.
Conceito
Diferente de linguagens como C# ou Java, em JavaScript os operadores lógicos retornam o valor de um dos operandos.
|| (OU): Retorna o primeiro valor Truthy que encontrar. Se todos forem Falsy, retorna o último.
&& (E): Retorna o primeiro valor Falsy que encontrar. Se todos forem Truthy, retorna o último.

Debaixo do capô
O motor do JavaScript avalia o operando da esquerda. Ele o converte implicitamente para booleano (usando as regras de Falsy/Truthy da Aula 3).
No operador ||, se o primeiro operando for truthy, ele é retornado imediatamente.
No operador &&, se o primeiro operando for falsy, ele é retornado imediatamente.
*/

const nomeDaPessoa = "" || "Convidado";
console.log(nomeDaPessoa); // "Convidado" (Pois "" é Falsy)

const situacao = "Ativo" && 100;
console.log(situacao); // 100 (Ambos são Truthy, retorna o último)

// Exercício 7: Coerção em Operadores Lógicos (&& e ||)
function obterConfiguracao(obj) {
  return {
    corFinal: obj.corDigitada || "preto",
    podeAcessar: obj.logado && "Dashboard",
  };
}

console.log(
  obterConfiguracao({
    corDigitada: "",
    logado: true,
  }),
);

const resultadoEmQuestao = "Vendido" && 0 && "Estoque"; // Encontrou o 1º falsy que encontrou, no caso o zero
console.log(resultadoEmQuestao);

//=======================================================

/*
Aula 8: Coerção para Número em Operações Não Aditivas
Para encerrar o módulo de operadores aritméticos, vamos observar como o JavaScript lida com a subtração (-), multiplicação (*), divisão (/) e o operador unário de soma (+).
Conceito
Diferente do operador + (que tem a ambiguidade da concatenação), os operadores -, *, / e % têm apenas uma função: matemática.

Debaixo do capô
Sempre que o JavaScript encontra esses operadores, ele força a conversão de ambos os operandos para o tipo Number. Se a conversão falhar (como tentar converter uma string com letras para número), o resultado será NaN.
Um caso especial é o Operador Unário Plus (+): colocar um sinal de mais antes de um valor é a forma mais curta (e muito usada profissionalmente) de forçar uma conversão explícita para número.
O operador + unário executa o mesmo processo de conversão numérica usado internamente pelo JavaScript através do algoritmo ToNumber().
*/

console.log("100" - "50"); // 50 (Ambas viram Number)
console.log("10" * 2); // 20
console.log(+"42"); // 42 (Conversão rápida via unário)
console.log("10" / "dois"); // NaN (Pois Number("dois") é NaN)

// Exercício 8: Coerção para Número em Operações Não Aditivas
const a = "20";
const b = "4";
const c = true;
const d = null;

console.log(a / b);
console.log(a - c);
console.log(b * d); // null é forçado a se tornar um número, logo ele é transformado em 0 (o mesmo vale para valores booleanos como false).
console.log(+"123.45" + 10);

//=======================================================

/*
Aula 9: O Algoritmo ToPrimitive e Objetos
Até agora, focamos em tipos primitivos. Mas o que acontece quando tentamos converter um Objeto ou Array para um número ou string? É aqui que o bicho pega e onde separamos os amadores dos especialistas.
Conceito
Quando um objeto precisa ser convertido em um primitivo (ex: obj + 10), o JavaScript utiliza um algoritmo interno chamado ToPrimitive. Ele não chuta um tipo; ele segue uma ordem de preferência tentando executar métodos específicos do objeto.

Debaixo do capô
O motor busca por três métodos principais no objeto, nesta ordem:
[Symbol.toPrimitive](hint): Se existir, ele manda em tudo.
valueOf(): Geralmente retorna o próprio objeto (a menos que seja um objeto de data).
toString(): Retorna a string "[object Object]" para objetos comuns e uma string com vírgulas para arrays.
Curiosidade crucial: Para Arrays, o valueOf() retorna o próprio array, então ele pula para o toString(). Por isso [] + 10 vira "10" (pois [].toString() é "").
*/

const pessoa = {
  nome: "Andrew",
  valueOf() {
    return 100;
  },
};

console.log(pessoa + 50); // 150 (Ele usou o valueOf)

const listaNumerica = [1, 2, 3];
console.log(listaNumerica + "!"); // "1,2,3!" (Usou o toString do Array)

// Exercício 9: O Algoritmo ToPrimitive e Objetos
const produto = {
  nome: "Teclado",
  preco: 150,

  valueOf() {
    return this.preco;
  },

  toString() {
    return `Produto: ${this.nome}`;
  },
};

console.log(produto + 20);
console.log(String(produto));

//=======================================================

/*
Aula 10: O Operador Unário (+) e o Objeto Date
Para finalizar em conversões, precisamos olhar para as Datas, que quebram a regra padrão dos objetos.
Conceito
Entre os objetos nativos tradicionais do JavaScript, Date é o caso mais conhecido que prefere conversões para string quando o hint é "default".

Debaixo do capô
O algoritmo ToPrimitive possui um parâmetro interno chamado hint (dica).
Para a maioria dos objetos, o hint padrão é "number".
Para o objeto Date, o hint padrão é "string".
Isso significa que data + 10 resulta em uma concatenação de texto, a menos que você force a conversão numérica explicitamente.
*/

const agora = new Date();

console.log(agora + 10); // "Thu Jun 04 2026 13:37:11 GMT-0300 (Horário Padrão de Brasília)10" (String)
console.log(Number(agora)); // 1780591031183 (Timestamp - Milissegundos)
console.log(+agora); // 1780591031183 (Mesmo resultado, via unário)

// Exercício 10: O Operador Unário (+) e o Objeto Date
const dataInicial = new Date();
console.log(+dataInicial + 1000);

const misterio = [[]];
console.log(Number(misterio));
