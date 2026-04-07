/*
AULA 1: O Loop while
O while (enquanto) é a estrutura de repetição mais básica do JavaScript. Ele executa um bloco de código repetidamente enquanto uma condição específica for verdadeira (true).

Debaixo do capô
O motor do JavaScript avalia a expressão booleana entre parênteses. Se for true, o bloco {} é executado. Após a execução, o ponteiro volta ao topo e reavalia a condição. Esse ciclo se repete até que a expressão retorne false. Se a condição nunca se tornar falsa, ocorre um Infinite Loop, travando a thread de execução.
*/

let estoque = 5;

// O loop continua enquanto houver itens
while (estoque > 0) {
  console.log(`Item despachado. Restam: ${estoque} unidades.`);

  // Atualização do estado para evitar loop infinito
  estoque--;
}

console.log("Processamento de estoque finalizado.");

// EXERCÍCIO 1: O Loop while
let tentativas = 0;
const maxTentativas = 3;

while (tentativas < maxTentativas) {
  tentativas++;
  console.log(`Tentativa ${tentativas} de ${maxTentativas}.`);
}

console.log("Acesso bloqueado");

//============================================================

/*
AULA 2: O Loop do...while
O do...while é o "primo" do while, mas com uma diferença crucial: ele garante que o bloco de código seja executado pelo menos uma vez, mesmo que a condição seja falsa desde o início.

Debaixo do Capô
O motor do JS executa o código dentro do bloco do {} primeiro.
Só depois da primeira execução é que ele avalia a condição no while (condição).
Se a condição for true, ele repete o bloco. Se for false, ele para.
É a única estrutura de loop que termina com um ponto e vírgula ; após a condição.
*/

let carregando = false;

do {
  console.log("Verificando atualizações no servidor...");
  // Mesmo que 'carregando' seja false, ele executa esta linha uma vez.
} while (carregando);

// EXERCÍCIO 2: O Loop do...while
let temperatura = 30;

do {
  console.log(`Temperatura atual: ${temperatura}°C`);
  temperatura -= 2;
} while (temperatura > 25);

//============================================================

/*
AULA 3: O Loop for (O Padrão da Indústria)
O for é a estrutura de repetição mais utilizada quando sabemos (ou podemos calcular) o limite da repetição. Ele é mais compacto que o while porque agrupa três responsabilidades em uma única linha.

Debaixo do Capô
A sintaxe for (inicialização; condição; expressão-final) funciona assim:
Inicialização: Executada apenas uma vez antes do loop começar. Geralmente cria a variável de controle (ex: let i = 0).
Condição: Avaliada antes de cada iteração. Se true, o bloco executa. Se false, o loop termina.
Expressão-final: Executada após o bloco de código, antes da próxima verificação da condição. Geralmente usada para incrementar a variável.
*/

// i (index) é a convenção padrão para contadores
for (let i = 1; i < 3; i++) {
  console.log(`Processando lote ID: ${i}`);
}

// EXERCÍCIO 3: O Loop for (O Padrão da Indústria)
for (let i = 0; i <= 10; i++) {
  console.log(`Página ${i} gerada.`);

  if (i === 5) {
    console.log(`Página 5: Aplicando marca d'água`);
  }
}

//============================================================

/*
AULA 4: Interrompendo e Pulando (break e continue)
Às vezes, precisamos de um controle mais fino sobre o fluxo do loop. Para isso, o JavaScript nos dá duas palavras-chave poderosas:
break: Interrompe o loop imediatamente e sai dele.
continue: Interrompe a iteração atual e pula direto para a próxima (reavaliando a condição).

Debaixo do Capô
Quando o motor encontra um break, ele move o "ponteiro" de execução para a primeira linha após o fechamento do loop }.
Quando encontra um continue, ele ignora todo o código restante abaixo dele dentro do bloco e dispara a Expressão-final do for (ou volta para a condição no while).
*/

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // Pula o número 3
  if (i === 5) break; // Para o loop ao chegar no 5

  console.log(`Valor: ${i}`); // Saída: 1, 2, 4
}

// EXERCÍCIO 4: Interrompendo e Pulando (break e continue)
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) continue;

  console.log(`Processando transação PAR: ${i}`);

  if (i === 14) {
    console.log(`Transação crítica encontrada (${i}). Abortando...`);
    break;
  }
}

//============================================================

/*
AULA 5: Percorrendo Coleções (O Loop for...of)
Até agora, usamos contadores numéricos. Mas, no mundo real, loops servem majoritariamente para processar listas de dados (Arrays). O for...of foi introduzido (ES6) para tornar a leitura desses dados muito mais simples e elegante.

Debaixo do Capô
O JS cria uma variável temporária para cada item da coleção.
O motor acessa o iterador interno do objeto (como um Array).
A cada ciclo, ele extrai o valor do próximo elemento e o atribui à variável definida.
O loop termina automaticamente quando não houver mais elementos.
*/

const usuarios = ["Andrew", "Henrique", "Gomes"];

for (const nome of usuarios) {
  console.log(`Notificando usuário: ${nome}`);
}

// EXERCÍCIO 5: Percorrendo Coleções (O Loop for...of)
const precos = [10.5, 0, 45.0, 0, 12.9, 80.0];
let total = 0;

for (const preco of precos) {
  if (preco === 0) {
    console.log(`Brinde detectado: Preço R$ ${preco.toFixed(2)}`);
  } else {
    total += preco;
  }
}

console.log(
  `O valor total da compra é de R$ ${total.toFixed(2)}. Volte sempre!`,
);

//============================================================

/*
AULA 6: Inspecionando Propriedades (O Loop for...in)
Agora que você dominou a iteração de valores (com for...of), precisamos falar sobre a iteração de chaves (propriedades) de objetos. Para isso, usamos o for...in.

Debaixo do Capô
O for...in percorre todas as propriedades enumeráveis de um objeto. Ao contrário do for...of, que busca o conteúdo através de um iterador, o for...in mapeia os nomes das propriedades (strings).

Cuidado técnico: Ele também percorre propriedades herdadas através da cadeia de protótipos (prototype chain). Por isso, no dia a dia, ele é exclusivo para Objetos, enquanto o for...of é para Arrays/Coleções.
*/

const servidor = {
  ip: "192.168.0.1",
  status: "online",
  uptime: "450h",
};

// 'chave' representa o nome da propriedade (string)
for (const chave in servidor) {
  // Acessamos o valor dinamicamente usando colchetes
  console.log(`${chave.toUpperCase()}: ${servidor[chave]}`);
}

// EXERCÍCIO 6: Inspecionando Propriedades (O Loop for...in)
const configuracoes = {
  usuario: "Andrew",
  tema: "dark",
  idioma: "PT-BR",
  nivelAcesso: "admin",
  verificacaoDuasEtapas: true,
};

for (const chave in configuracoes) {
  if (chave === "nivelAcesso") {
    console.log(`[AUDITORIA] ${chave} encontrado: ${configuracoes[chave]}`);
  } else {
    console.log(`Configuração: ${chave} | Valor: ${configuracoes[chave]}`);
  }
}

//============================================================

/*
AULA 7: O Método forEach (O Loop Funcional)
Embora for, while e for...of sejam estruturas de controle de fluxo, o JavaScript moderno utiliza frequentemente o forEach. Ele não é uma palavra-chave do sistema, mas um método disponível em todos os Arrays.

Debaixo do Capô
O forEach é uma Higher-Order Function (Função de Alta Ordem). Ele recebe uma função de retorno (callback) e a executa para cada elemento do Array. O motor do JS gerencia o contador internamente e passa três argumentos para sua função: o valor, o índice e o próprio array.

Limitação Crítica: Você não pode usar break ou continue dentro de um forEach. Ele é projetado para percorrer a lista do início ao fim, obrigatoriamente.
*/

const logs = ["Erro 404", "Sucesso 200", "Erro 500"];

// elemento: o item atual | index: a posição (0, 1, 2...)
logs.forEach((mensagem, index) => {
  console.log(`${index + 1}: ${mensagem}`);
});

// EXERCÍCIO 7: O Método forEach (O Loop Funcional)
const novosSeguidores = ["Matheus", "Carlos", "Admin", "Alexandre", "Zé"];

novosSeguidores.forEach((seguidor, index) => {
  if (seguidor === "Admin") {
    console.log(
      `[SISTEMA] Conta de administrador detectada na posição #${index + 1}`,
    );
  } else {
    console.log(`Seguidor #${index + 1}: ${seguidor}, bem-vindo(a)!`);
  }
});

//============================================================

/*
AULA 8: Transformação de Dados (O Loop .map)
O forEach serve para "fazer algo" com cada item (causar efeitos colaterais). No entanto, quando o objetivo é gerar uma nova lista baseada na original, o padrão da indústria é o .map().

Debaixo do Capô
Assim como o forEach, o .map() percorre o Array. A diferença fundamental é que ele sempre retorna um novo Array de mesmo tamanho. A cada iteração, o valor que você retorna da função callback é "empurrado" para dentro desse novo Array. O Array original permanece intacto (imutabilidade).
*/

const numeros = [1, 2, 3];

// Criando um novo array com os valores dobrados
const dobrados = numeros.map((numero) => numero * 2);

console.log(numeros, dobrados);

// EXERCÍCIO 8: Transformação de Dados (O Loop .map)
const precosDolar = [100, 250, 15, 36, 2100];
const taxaCambio = 5.5;

const precosReais = precosDolar.map(
  (dolar) =>
    `R$ ${Number(dolar * taxaCambio)
      .toFixed(2)
      .replace(".", ",")}`,
);

console.log(precosReais);

//============================================================

/*
AULA 9: Refinando Listas (O Loop .filter)
Dando continuidade aos métodos de Array (que internamente são loops), chegamos ao .filter(). Como o nome sugere, ele serve para filtrar elementos de uma lista com base em uma condição.

Debaixo do Capô
O .filter() percorre cada elemento do array e executa uma função de retorno (callback). Essa função deve retornar um valor booleano (true ou false).
Se retornar true, o elemento é incluído no novo array.
Se retornar false, o elemento é descartado.
Assim como o .map(), ele não altera o array original, retornando uma nova coleção que pode ter um tamanho menor ou igual à original.
*/

const idades = [12, 18, 22, 15, 30];

// Retorna apenas quem tem 18 anos ou mais
const adultos = idades.filter((idade) => idade >= 18);

console.log(idades, adultos);

// EXERCÍCIO 9: Refinando Listas (O Loop .filter)
const candidatos = [
  { nome: "Andrew", anosExperiencia: 1.5 },
  { nome: "Matheus", anosExperiencia: 5 },
  { nome: "Carlos", anosExperiencia: 3 },
  { nome: "Zé", anosExperiencia: 1 },
  { nome: "Alexandre", anosExperiencia: 0 },
  { nome: "Henrique", anosExperiencia: 3.5 },
];

// Separado filter de forEach para a variável candidatosQualificados ser útil.
const candidatosQualificados = candidatos.filter(
  (candidato) => candidato.anosExperiencia >= 3,
);

candidatosQualificados.forEach((candidato) =>
  console.log(
    `Candidato(a) ${candidato.nome}, com ${candidato.anosExperiencia} de experiência, foi aprovado para a próxima fase.`,
  ),
);

//============================================================

/*
AULA 10: Consolidação de Dados (O Loop .reduce)
Chegamos ao "chefão" dos métodos de array. O .reduce() é o loop mais versátil e, para muitos, o mais complexo. Ele serve para reduzir um array inteiro a um único valor (que pode ser um número, uma string, um objeto ou até outro array).

Debaixo do Capô
O .reduce() executa uma função de callback que aceita dois parâmetros principais: o acumulador (acc) e o valor atual (cur).
O acumulador guarda o resultado da iteração anterior.
O valor atual é o elemento que está sendo processado agora.
Valor Inicial: Você deve passar um segundo argumento ao .reduce para definir com quanto o acumulador começa. Se for uma soma, começa com 0. Se for uma lista, com [].
*/

const paraSomar = [10, 20, 30];

// acc: acumulador | num: item atual
const somaTotal = paraSomar.reduce((soma, atual) => soma + atual, 0); // 0 é o valor inicial do acc

console.log(somaTotal); // 60

// EXERCÍCIO 10: Consolidação de Dados (O Loop .reduce)
const vendas = [
  { produto: "Mouse", valor: 50 },
  { produto: "Teclado", valor: 130 },
  { produto: "Monitor", valor: 865 },
  { produto: "Fonte", valor: 450 },
  { produto: "Webcam", valor: 110 },
];

const valorGeralDeVendas = vendas.reduce((soma, atual) => {
  console.log(`Por enquanto: R$ ${soma.toFixed(2).replace(".", ",")}`);
  return soma + atual.valor;
}, 0);

console.log(`VALOR TOTAL: ${valorGeralDeVendas.toFixed(2).replace(".", ",")}`);
