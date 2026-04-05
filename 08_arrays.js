/*
AULA 1: O Conceito e a Anatomia do Array
O que é um Array?
Em JavaScript, um Array é uma estrutura de dados do tipo lista. Pense nele como uma caixa organizada com divisórias numeradas, onde você pode guardar qualquer tipo de dado (strings, números, objetos e até outros arrays). Diferente de variáveis comuns que guardam um único valor, o array permite agrupar coleções sob um único nome de variável.

Debaixo do Capô
Embora pareçam listas lineares, Arrays em JavaScript são, na verdade, objetos especializados.
Índices como Chaves: O motor do JavaScript (V8, SpiderMonkey) utiliza índices numéricos (começando em 0) como chaves de propriedades.
Alocação Dinâmica: Ao contrário de linguagens como C ou Java, os arrays em JS são dinâmicos; eles crescem ou diminuem de tamanho automaticamente e não exigem que você defina o tamanho no momento da criação.
Propriedade .length: O JavaScript mantém uma propriedade especial chamada length, que não conta necessariamente os elementos, mas sim o valor do "maior índice ocupado + 1".
No padrão moderno (ES6+), priorizamos const para declarar arrays, pois embora os dados internos possam mudar, a referência à estrutura do array geralmente deve permanecer constante.
*/

// Declaração literal (forma recomendada)
const colaboradores = ["Andrew", "Carlos", "Matheus"];

// Acessando dados via índice (Base 0)
console.log(colaboradores[0]); // Saída: Andrew

// Verificando o tamanho da lista
console.log(colaboradores.length); // Saída: 3

// Modificando um item específico
colaboradores[1] = "Alexandre";
console.log(colaboradores); // Saída: ["Andrew", "Alexandre", "Matheus"]

// EXERCÍCIO 1: O Conceito e a Anatomia do Array
const estoqueLivros = [
  "Bíblia",
  "As Seis Lições",
  "O Mínimo Sobre Economia",
  "Bases da Fé Cristã",
  "O Jardim das Aflições",
];

console.log(estoqueLivros[2]);

estoqueLivros[0] = "Bíblia Sagrada";

console.log(estoqueLivros.length);
console.log(estoqueLivros[estoqueLivros.length - 1]);
console.log(estoqueLivros.at(-1));

//=====================================================================

/*
AULA 2: Métodos de Inserção e Remoção (Otimização de Lógica)
Agora que sabemos criar e acessar, precisamos manipular o tamanho desse Array de forma dinâmica, sem atribuir valores manualmente a índices específicos.
Métodos de Extremidade
Para manter a organização e performance, o JavaScript oferece métodos nativos para adicionar ou remover itens das pontas do array:
push(): Adiciona um ou mais elementos ao final do array.
pop(): Remove o último elemento e o retorna.
unshift(): Adiciona um ou mais elementos ao início do array.
shift(): Remove o primeiro elemento e o retorna.

Debaixo do Capô
Performance: push e pop são extremamente rápidos porque não alteram o índice de mais ninguém.
Custo Computacional: unshift e shift são mais "caros". Quando você remove o primeiro elemento, o motor do JS precisa reindexar todos os outros itens (o que era 1 vira 0, o 2 vira 1, etc.). Em listas gigantescas, isso pode ter impacto de performance.
*/

const fila = ["Janico", "Rafael"];

// Chegou um novo cliente
fila.push("Viviane");

// O primeiro da fila foi atendido
const atendido = fila.shift();

console.log(atendido); // Janico
console.log(fila); // ["Rafael", "Viviane"]

// EXERCÍCIO 2: Métodos de Inserção e Remoção (Otimização de Lógica)
const tarefas = [];

tarefas.push("Estudar JavaScript");
tarefas.push("Estudar Go");
tarefas.push("Estudar SQL");
tarefas.unshift("Responder e-mail urgente");

const tarefaConcluida = tarefas.pop();

tarefas.shift();

console.log(tarefas);
console.log(tarefaConcluida);

//=====================================================================

/*
AULA 3: Localização e Verificação de Elementos
Muitas vezes, antes de manipular um array, precisamos saber se algo está lá ou onde algo está.
Métodos de Busca
indexOf(elemento): Retorna o primeiro índice onde o elemento pode ser encontrado. Se não existir, retorna -1.
lastIndexOf(elemento): Igual ao anterior, mas começa a procurar do fim para o início.
includes(elemento): (ES6) Retorna um booleano (true ou false). É a forma mais legível de verificar a existência de um item.

Debaixo do Capô
Esses métodos realizam uma busca chamada Linear Search (Busca Linear). O motor do JavaScript percorre o array do índice 0 em diante, comparando cada item usando o operador de igualdade estrita (===).
Nota importante: Isso significa que [1, 2].includes("1") retornará false, pois o número 1 não é estritamente igual à string "1".
*/

const frutas = ["Jaboticaba", "Banana", "Manga", "Banana"];

const temBanana = frutas.includes("Banana"); // true
const posicaoBanana = frutas.indexOf("Banana"); // 1
const ultimaBanana = frutas.lastIndexOf("Banana"); // 3

if (frutas.indexOf("Pera") === -1) {
  console.log("Fruta não encontrada no estoque.");
}

// EXERCÍCIO 3: Localização e Verificação de Elementos
const convidados = ["Irvin", "Eliza", "Steice", "Eliza", "Renan"];

const estaNaLista = convidados.includes("Silvio");

console.log(convidados.indexOf("Steice"));
console.log(convidados.lastIndexOf("Eliza"));

if (convidados.indexOf("Jonas") === -1) {
  console.log("Atenção: Convidado não encontrado.");
}

//=====================================================================

/*
AULA 4: O Método splice() (A "Navio Suíço" dos Arrays)
Até agora, mexemos apenas nas extremidades. Mas e se precisarmos operar no meio do array?
O que é o splice()?
O splice() é um método versátil que pode remover, substituir ou adicionar elementos em qualquer posição. Ele altera o array original (é um método mutável).
Sintaxe: array.splice(início, quantidadeParaRemover, item1, item2, ...)
Início: O índice onde a operação começa.
Quantidade: Quantos itens deletar a partir dali (se for 0, nenhum é removido).
Itens (opcional): O que você quer inserir naquele lugar.

Debaixo do Capô
O splice() é uma operação custosa em termos de memória. Se você remove um item no índice 2 de um array de 1000 itens, o motor do JS precisa mover os 997 itens restantes para "fechar o buraco". É excelente pela flexibilidade, mas deve ser usado com consciência em listas massivas.
*/

const meses = ["Jan", "Fev", "Abr", "Mai"];

// Adicionando 'Março' no índice 2, removendo 0 itens
meses.splice(2, 0, "Mar");
// ['Jan', 'Fev', 'Mar', 'Abr', 'Mai']

// Substituindo 'Mai' por 'Jun'
// (índice 4, remove 1 item, adiciona 'Junho')
meses.splice(4, 1, "Jun");

// EXERCÍCIO 4: O Método splice() (A "Navio Suíço" dos Arrays)
const playlist = [
  "It's not my time",
  "Here without you",
  "Savior",
  "Ugly",
  "Hey you",
];

playlist.splice(2, 1);
playlist.splice(1, 0, "Dare you to move");
playlist.splice(3, 2, "Animal i have become");

console.log(playlist);

//=====================================================================

/*
AULA 5: Fatiamento e Imutabilidade com slice()
Diferente do splice() (com P de "Pica-pau" que altera a árvore), o slice() (com S de "Shadow/Sombra") é imutável. Ele não mexe no array original; ele cria uma cópia de uma parte dele.
O que é o slice()?
Ele extrai uma seção de um array e retorna um novo array. É a ferramenta ideal quando você quer "ler" um pedaço da lista sem estragar a lista original.
Sintaxe: array.slice(início, fim)
Início: Índice onde começa a extração.
Fim (opcional): Índice antes do qual a extração termina. O elemento no índice fim não é incluído.
Se o fim for omitido, ele vai até o final do array.
Aceita valores negativos (ex: -2 pega os dois últimos).

Debaixo do Capô
O slice() realiza o que chamamos de Shallow Copy (Cópia Rasa). Ele aloca um novo espaço na memória para o novo array e copia as referências dos elementos. Para tipos primitivos (strings, números), é uma cópia real. Para objetos, ele copia a referência (falaremos disso mais tarde).
*/

const hardware = ["SSD", "RAM", "CPU", "GPU", "Fonte"];

const essenciais = hardware.slice(0, 3);
// Retorna ['SSD', 'RAM', 'CPU'] -> O índice 3 (GPU) ficou de fora.

const ultimosDois = hardware.slice(-2);
// Retorna ['GPU', 'Fonte']

console.log(hardware.length); // Continua sendo 5! Nada mudou aqui.

// EXERCÍCIO 5: Fatiamento e Imutabilidade com slice()
const posts = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6"];

const paginaUm = posts.slice(0, 3);
const ultimoPost = posts.slice(-1);

console.log(posts);
console.log(paginaUm);
console.log(ultimoPost);
// O array posts permanece intacto porque o slice não altera os dados na memória original; ele lê os valores e os projeta em um novo endereço de memória (novo array).

//=====================================================================

/*
AULA 6: Transformação de Dados com map()
Entramos agora no território da Programação Funcional. O map() é um dos métodos mais utilizados no dia a dia de um desenvolvedor JS moderno.
O que é o map()?
O map() percorre cada item do array, executa uma função em cima deles e retorna um novo array com os resultados dessa transformação. O array original continua igual.
Sintaxe: const novoArray = array.map((elemento, índice) => { ... retorno })

Debaixo do Capô
O map() é um iterador de alta ordem. Internamente, ele cria um novo array vazio com o mesmo length do original. Para cada iteração, o valor retornado pela sua função é colocado na mesma posição correspondente do novo array.
Importante: Se você esquecer de dar o return dentro da função do map, o novo array será preenchido com undefined.
*/

const precos = [10, 25, 50];

const precosFormatados = precos.map(
  (preco) => `R$ ${preco.toFixed(2).replace(".", ",")}`,
);

console.log(precosFormatados); // ["R$ 10,00", "R$ 25,00", "R$ 50,00"]
console.log(precos); // [10, 25, 50] (Intacto)

// EXERCÍCIO 6: Transformação de Dados com map()
const usuarios = ["andrew", "viviane", "janico", "cleusa"];

const usuariosVip = usuarios.map((usuario) => `VIP: ${usuario.toUpperCase()}`);

console.log(usuarios);
console.log(usuariosVip);

//=====================================================================

/*
AULA 7: Filtragem de Dados com filter()
Se o map() transforma, o filter() seleciona. Ele é o seu "porteiro" ou "peneira".
O que é o filter()?
O filter() percorre o array e testa cada elemento contra uma condição lógica. Ele retorna um novo array contendo apenas os elementos que passaram no teste (ou seja, onde a função retornou true).
Sintaxe: const filtrados = array.filter((elemento) => { ... return booleano })

Debaixo do Capô
Assim como o map(), o filter() é um método de alta ordem e imutável.
Ele cria um novo array.
Diferente do map(), o novo array pode ter um length menor que o original (ou até vazio, se ninguém passar no teste).
Se a sua função retornar true, o elemento é copiado (a referência) para o novo array. Se retornar false, ele é ignorado.
*/

const produtos = [
  { nome: "Teclado", preco: 150 },
  { nome: "Mouse", preco: 40 },
  { nome: "Monitor", preco: 800 },
];

// Queremos apenas produtos abaixo de 100 reais
const abaixoDe100 = produtos.filter((produto) => produto.preco < 100);

console.log(abaixoDe100); // [ { nome: 'Mouse', preco: 40 } ]

// EXERCÍCIO 7: Filtragem de Dados com filter()
const notas = [8.5, 4.2, 7.0, 3.5, 6.8, 10, 5.5];

const notasBaixas = notas
  .filter((nota) => nota < 6)
  .map((nota) => `Reprovado: ${nota}`);

const notasAltas = notas.filter((nota) => nota >= 9);

console.log(notas);
console.log(notasBaixas);
console.log(notasAltas);

//=====================================================================

/*
AULA 8: Redução e Acúmulo com reduce()
Chegamos ao "chefão" dos métodos de array. O reduce() é o mais poderoso e, para muitos, o mais difícil de entender inicialmente.
O que é o reduce()?
Enquanto o map e o filter retornam novos arrays, o reduce() tem como objetivo reduzir todo o array a um único valor (que pode ser um número, uma string, um objeto ou até outro array).
Sintaxe: array.reduce((acumulador, elementoAtual) => { ... return novoAcumulador }, valorInicial)

Debaixo do Capô
Imagine uma bola de neve descendo a montanha.
O valorInicial é o tamanho inicial da bola.
O acumulador é o estado atual da bola a cada volta.
O elementoAtual é a neve nova que a bola encontra no caminho.
A cada iteração, você decide como a "neve nova" altera a "bola de neve" e o resultado dessa operação vira o acumulador para a próxima rodada.
*/

const carrinho = [10.5, 20.0, 5.0];

// acumulador começa em 0
const total = carrinho.reduce((soma, precoAtual) => soma + precoAtual, 0);

console.log(total.toFixed(2)); // 35.50

// EXERCÍCIO 8: Redução e Acúmulo com reduce()
const vendas = [1200.5, 450.0, 90.1, 2500.0, 800.0];

const faturamentoTotal = vendas.reduce(
  (soma, valorAtual) => soma + valorAtual,
  0,
);

const maiorVenda = vendas.reduce((valor, vendaAtual) => {
  if (valor > vendaAtual) {
    return valor;
  }

  return vendaAtual;
}, vendas[0]);

console.log(faturamentoTotal);
console.log(maiorVenda);

//=====================================================================

/*
AULA 9: Ordenação com sort() e reverse()
Agora que sabemos transformar, filtrar e reduzir, precisamos organizar os dados.
O que são esses métodos?
sort(): Ordena os elementos de um array. Atenção: Por padrão, ele converte os elementos em strings e os ordena conforme a tabela Unicode (alfabética).
reverse(): Inverte a ordem dos itens (o último vira o primeiro, etc.).

Debaixo do Capô (O Perigo)
Estes métodos são mutáveis. Eles alteram o array original "in-place" (no local).
Além disso, o sort() tem um comportamento traiçoeiro com números:
[1, 10, 2].sort() resulta em [1, 10, 2] porque, como string, "10" vem antes de "2". Para resolver isso, passamos uma função de comparação.
Para ordenar números corretamente, usamos a lógica (a, b) => a - b.
Se o resultado for negativo, a vem antes de b.
Se for positivo, b vem antes de a.
*/

const numeros = [40, 100, 1, 5, 25];

// Ordenação Crescente
numeros.sort((a, b) => a - b);

console.log(numeros); // [1, 5, 25, 40, 100]

// Inverter a ordem
numeros.reverse();

console.log(numeros); // [100, 40, 25, 5, 1]

// EXERCÍCIO 9: Ordenação com sort() e reverse()
const pontuacoes = [450, 1200, 100, 980, 7500, 300];

pontuacoes.sort((a, b) => b - a);

const jogadores = ["Viviane", "Sophia", "Renan", "Irvin"];

jogadores.sort();
console.log(jogadores);

jogadores.reverse();

console.log(pontuacoes);
console.log(jogadores);

//=====================================================================

/*
Aula 10: Verificação de Condições com every() e some()
Às vezes não queremos transformar ou filtrar, mas sim fazer uma pergunta de "Sim ou Não" para o array inteiro.
O que são esses métodos?
every(): Verifica se TODOS os elementos do array passam em um teste. Retorna true apenas se 100% dos itens forem aprovados.
some(): Verifica se AO MENOS UM elemento do array passa no teste. Se encontrar um único culpado (ou herói), já retorna true.

Debaixo do Capô (Curto-circuito)
Estes métodos são extremamente performáticos por causa do Short-circuiting:
O every() para de rodar no momento em que encontra o primeiro item que falha (retorna false).
O some() para de rodar no momento em que encontra o primeiro item que passa (retorna true).
Eles não percorrem o resto do array desnecessariamente.
*/

const idades = [18, 21, 30, 15, 40];

// Todos são maiores de idade?
const todosAdultos = idades.every((idade) => idade >= 18); // false (por causa do 15)

// Existe algum menor de idade?
const temMenor = idades.some((idade) => idade < 18); // true

// EXERCÍCIO 10: Verificação de Condições com every() e some()
const temperaturas = [25, 28, 30, 32, 27];

const segurancaOk = temperaturas.every((temperatura) => temperatura < 35);

const estoque = [10, 0, 5, 8, 12];

const temItemEsgotado = estoque.some((item) => item === 0);

console.log(`O galpão está seguro? ${segurancaOk}`);
console.log(`Algum item esgotado? ${temItemEsgotado}`);

//=====================================================================

/*
AULA 11: Localização de Elementos Complexos com find() e findIndex()
Até agora, usamos indexOf e includes para procurar valores simples (como strings e números). Mas e se precisarmos procurar algo dentro de um objeto?
O que são esses métodos?
find(): Percorre o array e retorna o primeiro elemento que satisfizer a condição. Se não encontrar nada, retorna undefined.
findIndex(): Faz o mesmo, mas em vez de retornar o item, retorna o índice (posição) dele. Se não encontrar, retorna -1.

Por que usá-los?
Diferente do filter(), que cria uma lista com todos os resultados, o find() para no primeiro que encontrar. É ideal para buscar usuários por ID, produtos por código de barras, etc.
*/

const clientes = [
  { id: 1, nome: "Andrew" },
  { id: 2, nome: "Viviane" },
  { id: 3, nome: "Janico" },
];

const clienteProcurado = clientes.find((cliente) => cliente.id === 2);
console.log(clienteProcurado.nome);

const indiceCliente = clientes.findIndex(
  (cliente) => cliente.nome === "Janico",
);
console.log(indiceCliente);

// EXERCÍCIO 11: Localização de Elementos Complexos com find() e findIndex()
const quartos = [
  { numero: 1, disponivel: false },
  { numero: 2, disponivel: true },
  { numero: 3, disponivel: true },
  { numero: 4, disponivel: false },
];

const quartoLivre = quartos.find((quarto) => quarto.disponivel === true);
console.log(quartoLivre);

const hospedes = ["Andrew", "Kátia", "Orlando", "Irvin"];

const indexOrlando = hospedes.findIndex((hospede) => hospede === "Orlando");
console.log(indexOrlando);

//=====================================================================

/*
AULA 12: Concatenação e Transformação em String
Nesta aula, veremos como unir listas e como converter nossos arrays em textos formatados para exibição.
O que são esses métodos?
concat(): Une dois ou mais arrays e retorna um novo array. Ele não altera os arrays originais.
join(separador): Pega todos os elementos do array e os junta em uma única String. O separador define o que ficará entre os itens (vírgula, traço, espaço, etc.).

Debaixo do Capô
O concat() cria uma nova referência na memória. No JavaScript moderno (ES6+), muitos desenvolvedores preferem usar o Spread Operator ([...]), mas o concat ainda é muito comum em códigos legados e funcionais.
O join() é o oposto do método de string .split(). Se você não passar nenhum separador, ele usará a vírgula por padrão.
*/

const hardwares = ["SSD", "CPU"];
const perifericos = ["Teclado", "Mouse"];

// Concatenando
const setupCompleto = hardwares.concat(perifericos);
// ["SSD", "CPU", "Teclado", "Mouse"]

// Transformando em String para um relatório
const listaTexto = setupCompleto.join(" - ");
console.log(`Itens comprados: ${listaTexto}`);
// Itens comprados: SSD - CPU - Teclado - Mouse

// EXERCÍCIO 12: Concatenação e Transformação em String
const listaA = ["Viviane", "Janico"];
const listaB = ["Rafael", "Cleusa"];

const convidadosTodos = listaB.concat(listaA);

const mensagem = convidadosTodos.join(", ");

console.log(`Os convidados são: ${mensagem}`);

//=====================================================================

/*
Aula 13: Achatamento com flat() e flatMap()
Às vezes, recebemos dados "bagunçados", onde um array contém outros arrays dentro dele. Isso é o que chamamos de Array Multidimensional.
O que são esses métodos?
flat(nível): "Achata" o array, trazendo os elementos dos subarrays para o array principal. O nível (opcional) diz até que profundidade você quer entrar (o padrão é 1).
flatMap(): É a combinação perfeita de um map() seguido de um flat(). Ele primeiro transforma cada elemento e depois achata o resultado em um único nível.

Debaixo do Capô
O flat() é extremamente útil para limpar dados de APIs que retornam categorias e subcategorias misturadas.
Se você tiver um array infinitamente fundo, pode usar flat(Infinity).
*/

const numerosMisturados = [1, 2, [3, 4, [5, 6]]];

// Achata apenas o primeiro nível
console.log(numerosMisturados.flat());

// Achata tudo
console.log(numerosMisturados.flat(2));

// Exemplo de flatMap
const frases = ["Olá mundo", "JS é legal"];

const palavras = frases.flatMap((frase) => frase.split(" "));
// ["Olá", "mundo", "JS", "é", "legal"]

// EXERCÍCIO 13: Achatamento com flat() e flatMap()
const carrinhoFrutas = ["Banana", ["Maçã", "Pera"], "Manga"];

const carrinhoLimpeza = ["Sabão", ["Detergente", ["Desinfetante"]]];

const organizandoFrutas = carrinhoFrutas.flat();

const organizandoLimpeza = carrinhoLimpeza.flat(2);

const algumasFrutas = ["uva", "morango"];

const duplicandoFrutas = algumasFrutas.flatMap((fruta) => [fruta, fruta]);

console.log(organizandoFrutas);
console.log(organizandoLimpeza);
console.log(duplicandoFrutas);

//=====================================================================

/*
AULA 14: Referência vs. Cópia (O Coração do JS)
Esta não é apenas uma aula de método, mas uma aula de comportamento da memória. Entender isso separa os iniciantes dos desenvolvedores seniores.

O Problema da Referência
Em JavaScript, Arrays são objetos. Quando você atribui um array a uma nova variável, você não está criando uma cópia, mas sim um "atalho" (referência) para o mesmo lugar na memória.
*/

const original = [1, 2, 3];
const tentativaCopia = original; // Referência!

tentativaCopia.push(4);
console.log(original); // [1, 2, 3, 4] -> O original mudou!

/*
Como criar cópias reais?
Para evitar bugs onde você altera um dado sem querer, usamos estratégias de cópia:
Spread Operator ([...]): A forma mais moderna e limpa.
Array.from(): Útil para converter outras estruturas em arrays.
slice(): Como vimos antes, sem argumentos ele copia o array todo.

Shallow Copy (Cópia Rasa) vs Deep Copy (Cópia Profunda)
Shallow Copy: Os métodos acima copiam apenas o "primeiro nível". Se houver um objeto dentro do array, a referência desse objeto ainda será a mesma.
Deep Copy: Para copiar tudo (incluindo objetos internos), usamos structuredClone(array).
*/

// EXERCÍCIO 14: Referência vs. Cópia (O Coração do JS)
const precosOriginais = [100, 250, 500];

const precosPromocao = [...precosOriginais];
precosPromocao.push(75);

const algunsProdutos = [{ nome: "Camisa", preco: 50 }];

const produtosBackup = structuredClone(algunsProdutos);

console.log(precosOriginais);
console.log(precosPromocao);
console.log(algunsProdutos);
console.log(produtosBackup);

//=====================================================================

/*
AULA 15: Iteração com forEach()
Para fechar com chave de ouro, precisamos falar sobre o método mais "direto" para percorrer um array quando não precisamos transformar os dados, mas sim realizar uma ação (como imprimir algo ou salvar no banco).
O que é o forEach()?
O forEach() executa uma função para cada elemento do array. Diferente do map, ele não retorna nada (undefined). Ele é usado para causar "efeitos colaterais" (side effects).

Por que não usar sempre ele?
Embora seja simples, ele tem limitações importantes:
Não é interrompível: Você não pode usar break ou continue dentro dele (como faria em um for tradicional).
Não é assíncrono por natureza: Ele não espera por promises
*/

const notificacoes = ["E-mail enviado", "SMS confirmado", "Push ignorado"];

notificacoes.forEach((mensagem, indice) => {
  console.log(`LOG #${indice + 1}: ${mensagem}`);
});

// EXERCÍCIO 15: Iteração com forEach()
const vendasDia = [150.0, 20.5, 400.0, 10.0, 95.0];

const vendasMaioresQue50 = vendasDia.filter((venda) => venda > 50);

const somaDasMaioresQue50 = vendasMaioresQue50.reduce(
  (soma, vendaAtual) => soma + vendaAtual,
  0,
);

const logsUsuarios = ["usuario1", "usuario2", "usuario3"];

logsUsuarios.forEach((log) => {
  console.log(`PROCESSANDO LOG: ${log.toUpperCase()}`);
});

console.log(vendasDia);
console.log(vendasMaioresQue50);
console.log(somaDasMaioresQue50);
console.log(logsUsuarios);

//=====================================================================

/*
AULA 16: O Laço for...of (A Elegância da Iteração)
O que é o for...of?
Diferente do forEach, que é um método que recebe uma função de callback, o for...of é uma estrutura de controle (um loop real). Ele percorre os valores de cada elemento do array, um por um.

Debaixo do Capô: Por que usar for...of?A grande vantagem sobre o forEach é o controle total do fluxo:Interrupção: Você pode usar break para parar o loop ou continue para pular uma iteração.Assincronismo: Ele funciona perfeitamente com async/await. Se você precisa esperar uma resposta de API para cada item do array, o for...of é a escolha certa.Legibilidade: Não precisa lidar com índices ($[i]$) ou funções de seta se não quiser.

NÃO CONFUNDA:
for...in vs for...of (Não confunda!)
Essa é a maior "pegadinha" em entrevistas:
for...in: Itera sobre as chaves (índices/propriedades). No array, ele te daria 0, 1, 2....
for...of: Itera sobre os valores. No array, ele te dá o conteúdo: "Banana", "Maçã"....
*/

const arrayForOf = [1, 2, 3, 4, 5];

for (const numero of arrayForOf) {
  // Código a ser executado
  console.log(`Está em ${numero}`);
}

const sensores = [25, 30, 45, 90, 32]; // Temperaturas

for (const temp of sensores) {
  if (temp > 80) {
    console.log(
      `ALERTA: Temperatura de ${temp}°C detectada! Parando sistema...`,
    );
    break; // O for...of permite parar o loop aqui
  }
  console.log(`Sensor normal: ${temp}°C`);
}

// EXERCÍCIO 16: O Laço for...of (A Elegância da Iteração)
const itensEstoque = ["Monitor", "Teclado", "Cabo HDMI", "Esgotado", "Mouse"];

for (const item of itensEstoque) {
  console.log(`Verificando item: ${item}`);

  if (item === "Esgotado") {
    console.log("Interrompendo verificação técnica...");
    break;
  }
}

const curso = "JAVASCRIPT";

for (const letra of curso) {
  console.log(letra);
}

//=====================================================================

/*
AULA 17: Destruturação de Arrays (Sintaxe Moderna)
Para encerrar nossa enciclopédia de Arrays, vamos falar de açúcar sintático. A destruturação (Destructuring) permite extrair dados de arrays e atribuí-los a variáveis de forma rápida e elegante.
O que é Destruturação?
Em vez de acessar itens um por um via índice (arr[0], arr[1]), você "espelha" a estrutura do array do lado esquerdo da atribuição.

Recursos Avançados
Pular Itens: Use vírgulas vazias para ignorar elementos.
Valores Padrão: Evite undefined definindo um valor inicial.
Rest Operator (...): Pegue o "resto" do array em uma nova lista.
*/

const coordenadas = [10, 20];

// Forma antiga
const x = coordenadas[0];
const y = coordenadas[1];

// Com Destructuring (ES6)
const [eixoX, eixoY] = coordenadas;

const config = ["Dark Mode", "Português", "Ativo"];

const [tema, idioma, status = "Inativo"] = config;

console.log(tema); // "Dark Mode"

// EXERCÍCIO 17: Destruturação de Arrays (Sintaxe Moderna)
const resultadoCorrida = ["Andrew", "Viviane", "Rafael", "Janico", "Cleusa"];

const [campeao, vice, ...demaisCorredores] = resultadoCorrida;

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);
