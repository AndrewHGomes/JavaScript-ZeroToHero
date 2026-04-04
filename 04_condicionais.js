/*
AULA 1: A Estrutura de Decisão Simples (if)
O Conceito
No dia a dia, tomamos decisões baseadas em condições: "Se estiver chovendo, eu pego o guarda-chuva". No JavaScript, o if funciona da mesma forma. Ele define um bloco de código que só será executado se uma condição for verdadeira (true). Se for falsa (false), o JavaScript ignora esse bloco e continua a execução normalmente.

Por baixo do capô
Quando o JavaScript encontra um if:
Ele avalia o que está dentro dos parênteses ().
O resultado é convertido para true ou false.
Se for true, o código dentro das chaves { } é executado.
Se for false, esse bloco é ignorado e a execução continua depois dele.
*/

const temperatura = 30;

if (temperatura > 25) {
  console.log("Está calor! Beba água.");
}

console.log("Fim do programa.");

// EXERCÍCIO 1: A Estrutura de Decisão Simples (if)
const idade = 15;

if (idade >= 18) {
  console.log("Entrada permitida: Você é maior de idade.");
}

//=============================================================

/*
AULA 2: A Bifurcação (else)
O Conceito
Se o if representa o "Se...", o else representa o "Caso contrário...".
Ele define um caminho alternativo quando a condição do if não é satisfeita.
Em uma estrutura if/else, apenas um dos blocos será executado.

Por baixo do capô
O JavaScript avalia a condição do if.
Se for true, executa o bloco do if e ignora o else.
Se for false, ignora o bloco do if e executa o else.
Isso garante que sempre haverá uma resposta.
*/

const senhaCorreta = "1234";
const tentativa = "5555";

if (tentativa === senhaCorreta) {
  console.log("Acesso concedido!");
} else {
  console.log("Senha incorreta. Tente novamente.");
}

// EXERCÍCIO 2: A Bifurcação (else)
const outraIdade = 19;

if (outraIdade >= 18) {
  console.log("Entrada permitida: Você é maior de idade.");
} else {
  console.log("Entrada negada: Este filme é para maiores de 18 anos.");
}

//=============================================================

/*
AULA 3: Múltiplas Condições (else if)
O Conceito
Nem todas as decisões têm apenas duas opções. Às vezes precisamos testar várias possibilidades.
O else if permite adicionar novas condições que só serão verificadas se as anteriores forem falsas.

Por baixo do capô
O JavaScript testa as condições de cima para baixo.
Quando encontra a primeira condição verdadeira, executa o bloco correspondente e ignora o restante da estrutura.
Se nenhuma condição for verdadeira, o bloco else (se existir) será executado.
*/

const nota = 75;

if (nota >= 90) {
  console.log("Excelente! Nota A.");
} else if (nota >= 70) {
  console.log("Bom trabalho! Nota B.");
} else {
  console.log("Precisa estudar mais.");
}

// EXERCÍCIO 3: Múltiplas Condições (else if)
const idadeCliente = 18;

if (idadeCliente < 12) {
  console.log("Ingresso Infantil (Meia-entrada).");
} else if (idadeCliente <= 17) {
  console.log("Ingresso Juvenil (30% de desconto)");
} else if (idadeCliente >= 60) {
  console.log("Ingresso Idoso (Gratuito)");
} else {
  console.log("Ingresso Integral");
}

//=============================================================

/*
AULA 4: Operadores Lógicos (&& e ||)
O Conceito
Algumas decisões dependem de mais de uma condição.

O operador && (E) exige que todas as condições sejam verdadeiras.
O operador || (OU) exige que pelo menos uma das condições seja verdadeira.

Por baixo do capô
No operador &&, se a primeira condição for false, o JavaScript não precisa avaliar a segunda.
No operador ||, se a primeira condição for true, a segunda também não precisa ser avaliada.
Esse comportamento evita trabalho desnecessário.
*/

const temIngresso = true;
const essaIdade = 20;

if (temIngresso && essaIdade >= 18) {
  console.log("Pode entrar na festa VIP.");
} else {
  console.log("Barrado na entrada.");
}

const ehEstudante = false;
const ehIdoso = true;

if (ehEstudante || ehIdoso) {
  console.log("Tem direito a meia-entrada.");
}

// EXERCÍCIO 4: Operadores Lógicos (&& e ||)
const rendaMensal = 2500;
const scoreCredito = 500;
const temHistoricoNegativo = true;

if (temHistoricoNegativo) {
  console.log("Empréstimo NEGADO!");
} else if (rendaMensal > 2000 && scoreCredito > 700) {
  console.log("Empréstimo APROVADO!");
}

//=============================================================

/*
AULA 5: O Operador de Negação (!) e Valores Falsy/Truthy
O Conceito
O operador ! inverte um valor booleano: true vira false e false vira true.

Além disso, o JavaScript trata alguns valores como falsos (falsy), mesmo não sendo exatamente false:
0, "", null, undefined e NaN.
Qualquer outro valor é considerado verdadeiro (truthy).

Por baixo do capô
Quando um valor é usado em um if, o JavaScript tenta convertê-lo para true ou false.
Ao usar !, você inverte esse resultado.
Isso permite escrever condições como "se não estiver logado".
*/

const usuarioLogado = "";

if (!usuarioLogado) {
  console.log("Por favor, faça login para continuar.");
}

const estoque = 0;

if (estoque) {
  console.log("Produto disponível.");
} else {
  console.log("Produto esgotado.");
}

// EXERCÍCIO 5: O Operador de Negação (!) e Valores Falsy/Truthy
const salarioMensal = 2500;
const pontosCredito = 750;
const historicoNegativo = false;

if (!historicoNegativo && salarioMensal > 2000 && pontosCredito > 700) {
  console.log("Empréstimo APROVADO!");
} else {
  console.log("Empréstimo NEGADO");
}

//=============================================================

/*
AULA 6: Operador Ternário (A Decisão de Uma Linha)
O Conceito
O operador ternário é uma forma reduzida de escrever um if/else.
Ele possui três partes: condição, valor se verdadeiro e valor se falso.
É mais indicado para situações simples.

Por baixo do capô
Diferente do if, o ternário retorna um valor.
Por isso, ele pode ser usado diretamente em atribuições de variáveis.
*/

const velocidade = 110;
const limite = 100;

const statusMotorista = velocidade > limite ? "Multado" : "OK";
console.log(statusMotorista);

// EXERCÍCIO 6: Operador Ternário (A Decisão de Uma Linha)
const horario = 9;
const statusLoja = horario >= 9 && horario <= 18 ? "Aberta" : "Fechada";

console.log(`A loja está ${statusLoja}`);

//=============================================================

/*
AULA 7: Condicionais Aninhadas (Nesting)
O Conceito
Condicionais aninhadas acontecem quando um if está dentro de outro if.
A segunda condição só será avaliada se a primeira for verdadeira.

Por baixo do capô
O JavaScript primeiro resolve a condição externa.
Se ela for false, todo o bloco interno é ignorado.
Se for true, ele entra no bloco e continua avaliando as condições internas.
*/

const clienteLogado = true;
const temPremium = true;

if (clienteLogado) {
  if (temPremium) {
    console.log("Bem-vindo ao catálogo 4K!");
  } else {
    console.log("Bem-vindo! Assine o Premium para o 4K.");
  }
} else {
  console.log("Por favor, faça login.");
}

// EXERCÍCIO 7: Condicionais Aninhadas (Nesting)
const temSintomas = true;
const temperaturaCorpo = 37;
const idadePaciente = 37;

if (!temSintomas) {
  console.log("Liberado: Sem sinais de infecção.");
} else {
  if (temperaturaCorpo >= 38) {
    console.log("Encaminhar para o setor de FEBRE");
  } else {
    if (idadePaciente >= 60) {
      console.log("Encaminhar para triagem de GRUPO DE RISCO");
    } else {
      console.log("Encaminhar para triagem Geral");
    }
  }
}

//=============================================================

/*
AULA 8: O Poder da Refatoração (Guard Clauses)
O Conceito
Quando usamos muitos if aninhados, o código pode ficar difícil de ler.
Guard Clauses é uma técnica que trata os casos de erro primeiro, evitando vários níveis de aninhamento.

Por baixo do capô
O comportamento do JavaScript não muda, mas o fluxo fica mais direto.
Em vez de entrar em vários blocos, o código resolve os problemas logo no início e segue de forma linear.
*/

// Antes
const temUsuario = false;
const cartaoValido = false;

if (temUsuario) {
  if (cartaoValido) {
    console.log("Compra realizada");
  } else {
    console.log("Erro no cartão");
  }
}

// Depois
if (!temUsuario) {
  console.log("ERRO: Usuário não existe");
} else if (!cartaoValido) {
  console.log("Erro no cartão");
} else {
  console.log("Compra realizada");
}

// EXERCÍCIO 8: O Poder da Refatoração (Guard Clauses)
const existeSintomas = false;
const corpoTemperatura = 36.5;
const pacienteIdade = 60;

if (!existeSintomas) {
  console.log("Liberado: Sem sinais de infecção.");
} else if (corpoTemperatura >= 38) {
  console.log("Encaminhar para o setor de FEBRE");
} else if (corpoTemperatura < 38 && pacienteIdade >= 60) {
  console.log("Encaminhar para triagem de GRUPO DE RISCO");
} else if (corpoTemperatura < 38 && pacienteIdade < 60) {
  console.log("Encaminhar para triagem Geral");
}
