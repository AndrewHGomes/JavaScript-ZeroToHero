// AULA - Arrays - O Conceito e a Criação
const frutas = ["Banana", "Abacate", "Jaboticaba"];

console.log(frutas);
console.log(frutas[1]);
console.log(frutas.length);

// EXERCÍCIO - Arrays - O Conceito e a Criação
const filmes = ["O Resgate", "Invocação do Mal", "Busca Implacável"];

filmes[1] = "Dupla Implacável";
console.log(filmes[2]);

//=============================================

// AULA - Manipulando as Extremidades (Push, Pop, Shift, Unshift)
const tarefasDoDia = ["Estudar JavaScript"];

tarefasDoDia.push("Estudar Golang");
tarefasDoDia.unshift("Estudar SQL");

console.log(tarefasDoDia);

tarefasDoDia.shift();
tarefasDoDia.pop();

console.log(tarefasDoDia);

// EXERCÍCIO - Manipulando as Extremidades (Push, Pop, Shift, Unshift)
const filaRestaurante = ["Andrew", "Viviane", "Janico", "Cleusa"];

filaRestaurante.push("Irvin");
filaRestaurante.shift();
filaRestaurante.unshift("Rafael");

console.log(filaRestaurante);

//=============================================

// AULA - O "Canivete Suíço" (Splice)
const cores = ["vermelho", "verde", "azul"];

cores.splice(1, 1, "amarelo");
console.log(cores);

cores.splice(2, 1);
console.log(cores);

// EXERCÍCIO - O "Canivete Suíço" (Splice)
const estoque = ["Monitor", "Teclado", "Mouse", "Gabinete"];

estoque.splice(1, 1);
estoque.splice(1, 0, "Headset", "Webcam");
estoque.splice(4, 1, "Fonte");

console.log(estoque);

//=============================================

// AULA - Fatiando e Unindo (Slice e Concat)
const letrasDoNome = ["a", "n", "d", "r", "e", "w"];

const fatiaDasLetras = letrasDoNome.slice(1, 3);

console.log(letrasDoNome);
console.log(fatiaDasLetras);

const misturado = letrasDoNome.concat(fatiaDasLetras);
console.log(misturado);

// EXERCÍCIO - Fatiando e Unindo (Slice e Concat)
const palco1 = ["Rock", "Pop", "Indie"];
const palco2 = ["Jazz", "Blues", "Samba"];

const lineupGeral = palco1.concat(palco2);
const preferidos = palco1.slice(1);

console.log(`O array não muda: ${palco1}`);

//=============================================

// AULA - Transformação Total (Map)
const numeros = [1, 2, 3, 4];

const numerosModificados = numeros.map(function (numero) {
  return numero.toString();
});

console.log(numeros);
console.log(numerosModificados);

// EXERCÍCIO - Transformação Total (Map)
const precosReais = [10, 25, 50, 100];

const precosFormatados = precosReais.map(function (preco) {
  return `R$ ${preco.toFixed(2)}`;
});

const precoComDesconto = precosReais.map(function (preco) {
  return `R$ ${(preco - (preco * 10) / 100).toFixed(2)}`;
});

console.log(precosReais);
console.log(precosFormatados);
console.log(precoComDesconto);

//=============================================

// AULA - O Filtro Seletivo (Filter)
const idades = [37, 40, 73, 69];

const idosos = idades.filter(function (idade) {
  return idade >= 60;
});

console.log(idosos);

// EXERCÍCIO - O Filtro Seletivo (Filter)
const produtos = [
  "iPhone",
  "Capa de Celular",
  "MacBook",
  "Película",
  "iPad",
  "Fone de Ouvido",
];

const produtosPremium = produtos.filter(function (produto) {
  return produto.length > 7;
});

const idadesPares = idades.filter(function (idade) {
  return idade % 2 === 0;
});

console.log(produtosPremium);
console.log(idadesPares);

//=============================================

// AULA - A Busca de Precisão (Find e FindIndex)
const usuarios = ["Irvin", "Steice", "Renan", "Eliza"];

const usuarioSelecionado = usuarios.find(function (usuario) {
  return usuario.startsWith("R");
});

const posicaoUsuario = usuarios.findIndex(function (usuario) {
  return usuario === "Eliza";
});

console.log(usuarioSelecionado);
console.log(posicaoUsuario);

// EXERCÍCIO - A Busca de Precisão (Find e FindIndex)
const pontuacoes = [45, 80, 120, 30, 90, 150];

const maiorQue100 = pontuacoes.find(function (pontuacao) {
  return pontuacao > 100;
});

const posicaoDo30 = pontuacoes.findIndex(function (pontacao) {
  return pontacao === 30;
});

const teste500 = pontuacoes.find(function (pontacao) {
  return pontacao === 500;
});

console.log(maiorQue100);
console.log(posicaoDo30);
console.log(teste500); // undefined

//=============================================

// AULA - O Acumulador Poderoso (Reduce)
const seraoAcumulados = [1, 2, 3, 4, 5];

const acumulando = seraoAcumulados.reduce(function (acumulador, atual) {
  return acumulador + atual;
}, 0);

console.log(acumulando);

// EXERCÍCIO - O Acumulador Poderoso (Reduce)
const vendasDia = [15.5, 40.0, 10.25, 55.0, 4.75];

const somandoVendas = vendasDia.reduce(function (acumulador, atual) {
  return acumulador + atual;
}, 0);

const maiorVenda = vendasDia.reduce(function (acumulador, atual) {
  // if (acumulador > atual) return acumulador;

  // return atual;

  return acumulador > atual ? acumulador : atual;
});

console.log(somandoVendas);
console.log(maiorVenda);

//=============================================

// AULA - Verificação Rápida (Every e Some)
const notas = [7, 8, 3, 9];

const algumReprovado = notas.some(function (nota) {
  return nota < 5;
});

const todosAprovados = notas.every(function (nota) {
  return nota >= 5;
});

console.log(algumReprovado);
console.log(todosAprovados);

// EXERCÍCIO - Verificação Rápida (Every e Some)
const mensagens = ["Olá", "Tudo bem?", "Oferta", "Cerveja", "Promoção"];

const verificarSpam = mensagens.some(function (mensagem) {
  return mensagem === "Oferta" || mensagem === "Promoção";
});

const convidados = [18, 21, 25, 30, 22];

const todosSaoMaiores18 = convidados.every(function (convidado) {
  return convidado >= 18;
});

console.log(verificarSpam);
console.log(todosSaoMaiores18);

//=============================================

// AULA - Organização e Limpeza (Sort e Reverse)
const algumasLetras = ["d", "a", "c", "b"];
console.log(algumasLetras);

algumasLetras.sort();
console.log(algumasLetras);

algumasLetras.reverse();
console.log(algumasLetras);

// EXERCÍCIO - Organização e Limpeza (Sort e Reverse)
const placar = [10, 50, 20, 8, 100];

placar.sort((a, b) => a - b);
console.log(placar);

const top3 = placar.slice(2);
console.log(top3);

frutas.reverse();
console.log(frutas);

//=============================================

// AULA - Arrays de Objetos (O Mundo Real)
const clientes = [
  { nome: "Andrew", premium: true },
  { nome: "Irvin", premium: false },
  { nome: "Janico", premium: true },
];

const clientesPremium = clientes
  .filter((cliente) => cliente.premium)
  .map((cliente) => cliente.nome);

// EXERCÍCIO - Arrays de Objetos (O Mundo Real)
const carrinho = [
  { produto: "Teclado", preco: 150, categoria: "Periféricos" },
  { produto: "Mouse", preco: 80, categoria: "Periféricos" },
  { produto: "Monitor", preco: 900, categoria: "Hardware" },
  { produto: "SSD", preco: 250, categoria: "Hardware" },
];

const apenasHardware = carrinho.filter(
  (produto) => produto.categoria === "Hardware",
);

console.log(apenasHardware);

const produtoMouse = carrinho.find((produto) => produto.produto === "Mouse");

console.log(produtoMouse);

const precoTotalCarrinho = carrinho.reduce(function (acumulador, atual) {
  return acumulador + atual.preco;
}, 0);

console.log(`R$ ${precoTotalCarrinho.toFixed(2)}`);

//=============================================

// AULA - Destruturação e Spread Operator
const nomesTrabalho = ["Carlos", "Matheus", "Alexandre", "Zé"];
console.log(nomesTrabalho);

const novosNomes = [...nomesTrabalho, "Bruno", "Andrew"];
console.log(novosNomes);

const [nome0, nome1] = nomesTrabalho;

console.log(nome0);
console.log(nome1);

// EXERCÍCIO - Destruturação e Spread Operator
const grupoA = ["Maria", "José"];
const grupoB = ["Paulo", "Marcelo"];

const todosOsAlunos = [...grupoA, ...grupoB, "Andrew"];
console.log(todosOsAlunos);

const coordenadas = [10, 20, 30];

const [x, y, z] = coordenadas;

const novoCarrinho = [
  ...carrinho,
  { produto: "Webcam", preco: 250, categoria: "Periféricos" },
];

console.log(novoCarrinho);

//=============================================

// Nível Final: O Desafio do "Hero" (Algoritmo Combinado)
const pedidos = [
  {
    id: 1,
    cliente: "Andrew",
    itens: ["Monitor", "Mouse"],
    total: 980,
    status: "pago",
  },
  {
    id: 2,
    cliente: "Irvin",
    itens: ["Teclado"],
    total: 150,
    status: "pendente",
  },
  {
    id: 3,
    cliente: "Janico",
    itens: ["Headset", "Webcam"],
    total: 500,
    status: "pago",
  },
  { id: 4, cliente: "Steice", itens: ["SSD"], total: 250, status: "pago" },
  {
    id: 5,
    cliente: "Eliza",
    itens: ["Gabinete"],
    total: 400,
    status: "pendente",
  },
];

const pedidosPagos = pedidos.filter((pedido) => pedido.status === "pago");
console.log(pedidosPagos);

const relatorioFinanceiro = pedidosPagos.map((pedido) => {
  return `${pedido.cliente} pagou R$ ${pedido.total.toFixed(2)}`;
});
console.log(relatorioFinanceiro);

const faturamentoPedidos = pedidosPagos.reduce((acumulador, atual) => {
  return acumulador + atual.total;
}, 0);
console.log(`R$ ${faturamentoPedidos.toFixed(2)}`);

const pedidoIrvin = pedidos.find((pedido) => pedido.cliente === "Irvin");
console.log(pedidoIrvin);
