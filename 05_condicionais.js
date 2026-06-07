/*
Aula 1: O Bloco if e a Coerção para Booleano
Conceito
O if é a estrutura condicional mais básica do JavaScript. Ele avalia uma expressão entre parênteses. Se o resultado dessa expressão for verdadeiro (ou avaliado como verdadeiro), o bloco de código dentro das chaves {} é executado. Se for falso, o JavaScript simplesmente ignora o bloco e segue adiante.

Debaixo do Capô
Quando o JavaScript avalia a expressão dentro do if(expressão), ele não exige puramente um valor booleano (true ou false). Internamente, o motor do JS força uma conversão implícita do valor para booleano (ToBoolean abstract operation (ECMAScript spec)).
Valores que se tornam false são chamados de Falsy (como 0, "", null, undefined, NaN e o próprio false). Qualquer outro valor é considerado Truthy e avaliado como true.
*/

const saldoEmCentavos = 2500; // R$ 25,00

if (saldoEmCentavos > 0) {
  console.log("A conta possui saldo positivo.");
}

// Exercício 1: O Bloco if e a Coerção para Booleano
const tamanhoArquivoBytes = 14;

if (tamanhoArquivoBytes > 0) {
  console.log("Arquivo válido para upload.");
}

//=======================================================

/*
Aula 2: O Bloco else e a Bifurcação de Caminhos
Conceito
O else é a extensão natural do if. Ele define um bloco de código alternativo que será executado apenas se a condição testada no if for avaliada como falsa. Juntos, eles criam uma bifurcação: o fluxo do programa obrigatoriamente seguirá por um caminho ou pelo outro, nunca pelos dois.

Debaixo do Capô
Na engine do JavaScript, o if...else funciona como um desvio de fluxo no grafo de execução. Quando a expressão do if resulta em um valor falsy, o ponteiro de execução ignora o bloco subsequente e salta diretamente para o endereço de memória onde inicia o bloco else. Isso evita processamento desnecessário, pois o JS não precisa reavaliar nenhuma nova condição para executar o else.
*/

const idadeUsuario = 16;

if (idadeUsuario >= 18) {
  console.log("Acesso concedido.");
} else {
  console.log("Acesso negado: Usuário menor de idade.");
}

// Exercício 2: O Bloco else e a Bifurcação de Caminhos
const temperaturaEmCelsius = 20;

if (temperaturaEmCelsius >= 25) {
  console.log("Alerta: Resfriamento ativado.");
} else {
  console.log("Sistema operando em temperatura segura.");
}

//=======================================================

/*
Aula 3: O Encadeamento com else if
Conceito
Quando precisamos testar mais de duas possibilidades exclusivas, utilizamos o else if. Ele permite encadear novas condições em ordem sequencial. O JavaScript testará cada condição de cima para baixo; a primeira que for verdadeira disparará o seu bloco de código correspondente, e todas as condições seguintes serão completamente ignoradas.

Debaixo do Capô
O else if não é uma palavra-chave única no JavaScript. O motor lê essa estrutura como um else que contém um novo if imediatamente aninhado dentro dele, mas sem a necessidade de abrir novas chaves adicionais para o else externo.
Em termos de performance, o encadeamento funciona como um circuito de tomada de decisão sequencial. Se a primeira condição for true, o JavaScript não gasta ciclos de CPU avaliando as expressões dos else if subsequentes. Ele salta direto para o final de toda a estrutura.
*/

const velocidadeKmh = 90;

if (velocidadeKmh > 110) {
  console.log("Infração grave: Acima da velocidade máxima.");
} else if (velocidadeKmh < 40) {
  console.log("Infração leve: Abaixo da velocidade mínima.");
} else {
  console.log("Velocidade permitida.");
}

// Exercício 3: O Encadeamento com else if
const tempoEsperaEmMinutos = 60;

if (tempoEsperaEmMinutos > 60) {
  console.log(`Prioridade: Crítica. Atendimento imediato.`);
} else if (tempoEsperaEmMinutos > 30) {
  console.log(`Prioridade: Alta. Encaminhar para fila prioritária.`);
} else {
  console.log(`Prioridade: Normal. Aguardar na fila padrão.`);
}

//=======================================================

/*
Aula 4: Operadores de Igualdade e Identidade (== vs ===)
Conceito
Para tomar decisões, as expressões dentro do if frequentemente comparam valores. No JavaScript, existem duas formas principais de testar a igualdade: o operador de igualdade ampla (==) e o operador de igualdade estrita (===).
A regra de ouro no JavaScript moderno é: use sempre ===. O operador de estrita igualdade garante que o código só execute se os valores e os tipos forem idênticos, evitando bugs silenciosos e comportamentos imprevisíveis.

Debaixo do Capô
Igualdade Ampla (==): Antes de comparar, o motor do JavaScript tenta converter os valores para um tipo comum (Coerção Implícita). Por isso, 5 == "5" resulta em true, pois a string é convertida em número antes da checagem.
Igualdade Estrita (===): O motor realiza uma verificação em duas etapas. Primeiro, ele checa os tipos de dados. Se os tipos forem diferentes (por exemplo, Number e String), ele retorna false imediatamente, sem converter os valores. Se forem iguais, ele compara os valores na memória.
*/

const statusRequisicao = 200;

// Má prática: aceita a string "200" devido à coerção
if (statusRequisicao == "200") {
  console.log("Ignora o tipo: Executa com aviso de má prática.");
}

// Boa prática: valida valor E tipo estritamente
if (statusRequisicao === 200) {
  console.log("Sucesso: Tipos e valores idênticos.");
}

// Exercício 4: Operadores de Igualdade e Identidade (== vs ===)
const statusPagamento = "2";

if (statusPagamento === 2) {
  console.log("Pagamento confirmado via API.");
} else {
  console.log("Status inválido ou formato incorreto.");
}

//=======================================================

/*
Aula 5: Operadores Lógicos - O Operador AND (&&) e o Curto-Circuito
Conceito
Muitas vezes, uma única comparação não é suficiente para tomar uma decisão. O operador lógico AND (&&) permite combinar duas ou mais condições dentro do mesmo if. O bloco de código só será executado se todas as condições combinadas forem verdadeiras ao mesmo tempo.

Debaixo do Capô
O motor do JavaScript avalia expressões com && da esquerda para a direita utilizando uma estratégia de otimização chamada Avaliação de Curto-Circuito (Short-Circuit Evaluation).
Se a primeira condição for avaliada como falsy, o motor do JS para a execução imediatamente e ignora o resto da expressão. Ele não perde tempo testando as próximas condições, pois sabe que, matematicamente, a expressão inteira já falhou.
*/

const temToken = true;
const usuarioAtivo = false;

// O motor checa 'temToken' (true), avança, checa 'usuarioAtivo' (false). Falhou.
if (temToken && usuarioAtivo) {
  console.log("Acesso liberado ao painel.");
} else {
  console.log("Acesso bloqueado.");
}

// Exercício 5: Operadores Lógicos - O Operador AND (&&) e o Curto-Circuito
const scoreCredito = 720;
const possuiPendencias = false;

if (scoreCredito >= 700 && possuiPendencias === false) {
  console.log("Crédito pré-aprovado com sucesso.");
} else {
  console.log("Análise manual necessária.");
}

//=======================================================

/*
Aula 6: Operadores Lógicos - O Operador OR (||) e o Curto-Circuito
Conceito
O operador lógico OR (||), ou "OU", permite que o bloco if seja executado se pelo menos uma das condições combinadas for verdadeira. Ao contrário do &&, ele só falha e direciona o fluxo para o else se todas as condições avaliadas forem falsas.

Debaixo do Capô
O operador || também se aproveita da Avaliação de Curto-Circuito, mas com a lógica inversa do &&. O motor do JavaScript avalia as expressões da esquerda para a direita. No momento em que ele encontra a primeira condição verdadeira (truthy), ele interrompe imediatamente o restante da leitura.
Como basta uma condição ser verdadeira para validar todo o bloco, o JS não gasta processamento avaliando as demais condições à direita se a primeira já for satisfatória.
*/

const ehAdministrador = true;
const possuiChaveAcesso = false;

// O motor avalia 'ehAdministrador' como true.
// Ele ignora completamente 'possuiChaveAcesso' e entra direto no bloco do if.
if (ehAdministrador || possuiChaveAcesso) {
  console.log("Autenticação aceita no sistema.");
} else {
  console.log("Acesso negado.");
}

// Exercício 6: Operadores Lógicos - O Operador OR (||) e o Curto-Circuito
const idadePassageiro = 25;
const possuiBilheteBusiness = false;

if (idadePassageiro >= 60 || possuiBilheteBusiness === true) {
  console.log("Encaminhar para o portão de embarque prioritário.");
} else {
  console.log("Encaminhar para a fila de embarque padrão.");
}

//=======================================================

/*
Aula 7: O Operador de Negação Lógica (!)
Conceito
O operador de inversão ou negação lógica, representado pelo ponto de exclamação (!), é um operador unário (atua sobre um único elemento). Sua função dentro de uma condicional é inverter o valor booleano ou o estado truthy/falsy da expressão que vem logo em seguida. Ele transforma true em false e false em true.

Debaixo do Capô
Quando o motor do JavaScript processa o operador !, ele realiza duas etapas instantâneas:
Força a conversão do valor subsequente para um booleano puro (Type Coercion idêntica à que o if faz).
Inverte o bit resultante desse booleano.
Por conta desse comportamento, o operador ! é amplamente utilizado em desenvolvimento profissional para verificar cenários negativos de forma direta (ex: se um sistema não está ativo, se um arquivo não foi encontrado), o que costuma deixar o código mais limpo do que compará-lo explicitamente com === false.
*/

const sistemaManutencao = false;

// O '!' converte false para true. O bloco será executado.
if (!sistemaManutencao) {
  console.log("Sistema operando normalmente. Permitir requisições.");
}

// Exercício 7: O Operador de Negação Lógica (!)
const carrinhoPossuiItens = false;

if (!carrinhoPossuiItens) {
  console.log("Atenção: Adicione itens ao carrinho antes de finalizar.");
} else {
  console.log("Direcionando para o checkout.");
}

//=======================================================

/*
Aula 8: Condicionais Aninhadas (Nested Ifs)
Conceito
Nem todas as decisões na programação são lineares. Às vezes, uma condição só faz sentido ser avaliada se uma condição anterior já tiver sido totalmente satisfeita. Para isso, colocamos uma estrutura if completa dentro do bloco de código de outro if. Isso é chamado de aninhamento.

Debaixo do Capô
Para o motor do JavaScript, o aninhamento nada mais é do que uma árvore de decisão hierárquica. O motor avalia o if externo. Se ele falhar, todo o bloco interno é sumariamente ignorado pela engine (salto de memória). Se ele passar, o ponteiro de execução entra no escopo local daquele bloco e começa uma avaliação condicional totalmente nova.
Embora seja útil para criar filtros rígidos em etapas, o aninhamento excessivo prejudica a leitura do código (gerando o antipadrão conhecido como Pyramid of Doom).
*/

const usuarioLogado = true;
const assinaturaAtiva = false;

if (usuarioLogado) {
  // Este bloco condicional só existe na memória de execução se usuarioLogado for true
  if (assinaturaAtiva) {
    console.log("Liberar catálogo premium.");
  } else {
    console.log("Redirecionar para a página de planos.");
  }
} else {
  console.log("Redirecionar para a tela de login.");
}

// Exercício 8: Condicionais Aninhadas (Nested Ifs)
const senhaMestraCorreta = true;
const dispositivoTokenAprovado = false;

if (senhaMestraCorreta === true) {
  if (dispositivoTokenAprovado === true) {
    console.log("Acesso autorizado. Cofre liberado.");
  } else {
    console.log("Código de token inválido. Acesso bloqueado.");
  }
} else {
  console.log("Senha mestra incorreta. Sistema de segurança alertado.");
}

//=======================================================

/*
Aula 9: O Cláusula Guarda (Guard Clauses)
Conceito
Como vimos na aula anterior, o aninhamento excessivo cria códigos complexos e difíceis de ler (a chamada pirâmide). A Cláusula Guarda é uma técnica de refatoração para resolver isso. Em vez de aninhar o fluxo principal de sucesso dentro de múltiplos if positivos, nós invertemos a lógica: testamos as condições de erro ou falha primeiro e saímos do fluxo imediatamente.
Embora seja muito associada ao uso da palavra-chave return dentro de funções (assunto que veremos no futuro), o conceito central se aplica à estrutura lógica de decisões: limpar os caminhos inválidos o mais rápido possível para manter o fluxo principal linear.

Debaixo do Capô
Em vez de fazer o motor do JavaScript empilhar escopos locais e contextos complexos na memória de execução (com blocos dentro de blocos), a Cláusula Guarda força um desvio de fluxo imediato para fora do bloco de decisão assim que um critério de rejeição é atingido. Isso reduz a complexidade ciclomática do algoritmo e deixa caminhos alternativos isolados.
*/

const usuarioBanido = true;
const contaVerificada = true;

// Em vez de aninhar se a conta é verificada, "guardamos" o fluxo contra o banimento primeiro
if (usuarioBanido) {
  console.log("Acesso negado: Usuário está banido.");
} else if (!contaVerificada) {
  console.log("Acesso negado: Conta necessita de verificação.");
} else {
  // Fluxo principal corre livre de aninhamentos complexos
  console.log("Bem-vindo ao sistema.");
}

// Exercício 9: O Cláusula Guarda (Guard Clauses)
if (!senhaMestraCorreta) {
  console.log("Senha mestra incorreta. Sistema de segurança alertado.");
} else if (!dispositivoTokenAprovado) {
  console.log("Código de token inválido. Acesso bloqueado.");
} else {
  console.log("Acesso autorizado. Cofre liberado.");
}

//=======================================================

/*
Aula 10: Precedência de Operadores e Agrupamento com Parênteses
Conceito
Quando construímos condicionais complexas no if misturando operadores &&, || e !, o JavaScript segue uma ordem estrita de prioridade para avaliar o que executa primeiro. Para ditar manualmente qual parte da expressão lógica deve ser processada antes, utilizamos o agrupamento por parênteses ().

Debaixo do Capô
O motor do JavaScript possui uma tabela interna fixa de Precedência de Operadores. Em uma expressão condicional mista:
O operador de negação ! tem a maior prioridade e roda primeiro.
O operador && tem prioridade média e roda em seguida.
O operador || tem a menor prioridade e roda por último.
Se você escrever if (A || B && C), o JS vai processar primeiro B && C e depois fará o || com A. Se a intenção era avaliar se A ou B acontecem antes de validar C, o código falhará silenciosamente. Os parênteses quebram essa regra nativa, forçando o motor a isolar e resolver aquela subexpressão primeiro.
*/

const ehGerente = false;
const temCartaoCorporativo = true;
const sistemaAberto = true;

// Sem parênteses: avalia primeiro (temCartaoCorporativo && sistemaAberto) -> true.
// Depois faz o || com ehGerente. O resultado final seria true.

// Com parênteses: controlamos a precedência da união de perfis antes do contexto do sistema
if ((ehGerente || temCartaoCorporativo) && sistemaAberto) {
  console.log("Transação corporativa autorizada.");
} else {
  console.log("Falha na validação dos critérios de segurança.");
}

// Exercício 10: Precedência de Operadores e Agrupamento com Parênteses
const valorCarrinho = 150;
const possuiCupom = false;
const ehClientePrime = true;

if ((valorCarrinho > 200 || possuiCupom === true) && ehClientePrime) {
  console.log("Frete grátis aplicado ao pedido.");
} else {
  console.log("Valor de frete padrão calculado.");
}
