// AULA - if
const idade = 20;

if (idade >= 18) {
  console.log("Você pode dirigir!");
}

// EXERCÍCIO - if
const saldo = 3.53;

if (saldo > 0) {
  console.log(`Conta positiva: R$ ${saldo}`);
}

//============================================

// AULA - else
const clima = "chuva";

if (clima === "sol") {
  console.log("Vamos à praia!");
} else {
  console.log("Melhor estudar JavaScript...");
}

// EXERCÍCIO - else
const temperatura = 27;

if (temperatura >= 30) {
  console.log("Está uma calor danado.");
} else {
  console.log("Até que tá agradável hoje.");
}

//============================================

// AULA - else if
const nota = 6.5;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Bom trabalho");
} else {
  console.log("Precisa estudar mais");
}

// EXERCÍCIO - else if
const corSemaforo = "azul";

if (corSemaforo === "Verde" || corSemaforo === "verde") {
  console.log("Siga!");
} else if (corSemaforo === "Amarelo" || corSemaforo === "amarelo") {
  console.log("Atenção!");
} else if (corSemaforo === "Vermelho" || corSemaforo === "vermelho") {
  console.log("Pare!");
} else {
  console.log("Cor inválida");
}

//============================================

// AULA - Truthy e Falsy
const nome = "";

if (nome) {
  console.log("Usuário logado!");
} else {
  console.log("Por favor, digite seu nome...");
}

// EXERCÍCIO - Truthy e Falsy
const estoque = 0;

if (estoque) {
  console.log("Produto disponível");
} else {
  console.log("Estoque esgotado");
}

//============================================

// AULA - Operador Ternário ? :
const idadeParaVotar = 15;

const verificar = idadeParaVotar === 18 ? "Pode votar" : "Ainda não pode votar";

console.log(verificar);

// EXERCÍCIO - Operador Ternário ? :
const velocidade = 90;

const mensagem = velocidade > 80 ? "Multado" : "Dentro do limite";

console.log(mensagem);

//===========================================

// AULA - Early Return (Retorno Precoce)
function verificacaoCnh(idade) {
  if (idade > 21) {
    return "Pode ter CNH categorias D ou E";
  } else {
    return "Ainda não pode ter CNH categorias D ou E";
  }
}

console.log(verificacaoCnh(20));

function cnhVerificacao(idade) {
  if (idade > 21) return "Pode ter CNH categorias D ou E";

  return "Ainda não pode ter CNH categorias D ou E";
}

console.log(cnhVerificacao(33));

// EXERCÍCIO - Early Return (Retorno Precoce)
function statusPagamento(pago) {
  if (pago) return "Obrigado! Compra confirmada.";

  return "Erro: Pagamento pendente.";
}

console.log(statusPagamento(true));

//===========================================

// AULA - Object Mapping (Mapeamento de Objetos)
const acoesSemaforo = {
  verde: "Siga!",
  amarelo: "Atenção!",
  vermelho: "Pare!",
};

const cor = "amarelo";

const acao = acoesSemaforo[cor] || "Cor inválida";

console.log(acao);

// EXERCÍCIO - Object Mapping (Mapeamento de Objetos)
const precos = {
  maca: "5.50",
  banana: "3.00",
  uva: "10.00",
};

const frutaDesejada = "uva";

const texto = precos[frutaDesejada] || "Fruta não encontrada";

console.log(texto);

//===========================================

// AULA - Avaliação de Curto-Circuito
const usuarioLogado = true;

usuarioLogado && console.log("Enviando email de boas-vindas");

const nomeDigitado = "";

const nomeExibicao = nomeDigitado || "Visitante";

console.log(nomeExibicao);

// EXERCÍCIO - Avaliação de Curto-Circuito
const carrinhoCheio = false;

carrinhoCheio && console.log("Finalizando compra...");

const cupom = "Aquele";
const cupomAplicado = cupom || "Sem cupom";

console.log(cupomAplicado);

//===========================================

// AULA - Operador de Coalescência Nula
const curtidas = 0;

const exibicao1 = curtidas || "Sem curtidas";
const exibicao2 = curtidas ?? "Sem curtidas";

console.log(exibicao1, exibicao2);

// EXERCÍCIO - Operador de Coalescência Nula
const volumeUsuario = 0;

const ajuste1 = volumeUsuario || 50;
const ajuste2 = volumeUsuario ?? 50;

console.log(ajuste1, ajuste2);
