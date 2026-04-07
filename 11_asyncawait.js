/*
AULA 1: A Anatomia da Função async
Explicação Sucinta
A palavra-chave async transforma uma função comum em uma função assíncrona. A principal característica é que ela passa a retornar, obrigatoriamente, uma Promise. Se você retornar um valor simples (como uma string), o JavaScript o envolve em uma promessa resolvida automaticamente.

Debaixo do Capô
Quando o motor do JS encontra async, ele prepara o contexto daquela função para lidar com suspensões. O valor retornado é passado para o método interno Promise.resolve(). Isso garante que qualquer função async possa ser encadeada com .then() ou consumida por outro await em qualquer lugar do código.
*/

async function saudar() {
  return "Olá, Andrew!";
}

saudar().then((resposta) => console.log(resposta));

// EXERCÍCIO 1: A anatomia da função async
async function somarAsync(a, b) {
  return a + b;
}

somarAsync(8, 6).then((resposta) => console.log(resposta));

//===================================================================

/*
AULA 2: O Operador await (A Pausa Dramática)
Explicação Sucinta
O await só pode ser usado dentro de funções async. Ele faz o JavaScript "esperar" que uma Promise seja resolvida antes de seguir para a próxima linha de código. Ele elimina a necessidade de usar .then() e deixa o código com uma aparência síncrona e limpa.

Debaixo do Capô
O await não trava a execução do navegador (a Main Thread). Ele pausa a execução apenas daquela função específica, liberando o Event Loop para processar outras tarefas (cliques, animações, outras requisições). Quando a Promise é liquidada, a função retoma do ponto exato onde parou, com o valor já extraído.
*/

function buscarDados() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dados do usuário...");
    }, 2000);
  });
}

async function execucao() {
  console.log("Iniciando buscas...");

  const resultado = await buscarDados();

  console.log("Resultado recebido:", resultado);
  console.log("Fim da execução.");
}

execucao();

// EXERCÍCIO 2: O Operador await (A Pausa Dramática)
function verificarSenha() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Senha correta.");
    }, 1500);
  });
}

async function processarLogin() {
  console.log("Verificando...");

  const login = await verificarSenha();

  console.log("Login realizado:", login);
}

processarLogin();

//===================================================================

/*
AULA 3: Tratamento de Erros com try...catch
Explicação Sucinta
Para capturar rejeições (erros) em funções async, utilizamos o bloco tradicional try...catch. Se a Promise que você está aguardando (await) falhar ou for rejeitada, o fluxo de execução pula imediatamente para o bloco catch, onde o erro pode ser tratado.

Debaixo do Capô
O await traduz uma rejeição de Promise em uma exceção lançável. Isso unifica o tratamento de erros no JavaScript: o mesmo bloco catch que captura um erro de sintaxe ou uma variável inexistente agora também captura falhas de rede, sem a necessidade de encadear múltiplos métodos .catch().
*/

function apiSimulada(sucesso) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      sucesso ? resolve("Dados obtidos!") : reject("ERRO: Servidor Offline.");
    }, 1000);
  });
}

async function buscar() {
  try {
    const resposta = await apiSimulada(false);
    console.log(resposta);
  } catch (erro) {
    console.error("Capturado no catch:", erro);
  }
}

buscar();

// EXERCÍCIO 3: Tratamento de Erros com try...catch
function verificarEstoque(item) {
  return new Promise((resolve, reject) => {
    item === "Motorola One Fusion"
      ? resolve("Item disponível")
      : reject("Item esgotado");
  });
}

async function realizarCompra(item) {
  try {
    const resposta = await verificarEstoque(item);
    console.log(resposta);
  } catch (erro) {
    console.error("Algo errado:", erro);
  }
}

realizarCompra("Motorola One Fusion");
realizarCompra("Samsung S 21");

//===================================================================

/*
AULA 4: A Armadilha do Sequencial (Async Waterfall)
Explicação Sucinta
Um erro comum é usar await em tarefas independentes uma após a outra. Isso cria um "efeito cascata" (waterfall), onde a segunda tarefa só começa quando a primeira termina, dobrando o tempo de espera desnecessariamente.

Debaixo do Capô
Para resolver isso, iniciamos as Promises antes de aplicar o await. Ao chamar as funções sem o await na frente, o motor do JS dispara as operações assíncronas em paralelo. Usamos o await posteriormente apenas para coletar os resultados que já estão sendo processados simultaneamente.
*/

async function carregarDadosRapido() {
  const promessaUsuario = pegarUsuario(); // Inicia agora
  const promessaPosts = pegarPosts(); // Inicia agora também

  const usuario = await promessaUsuario; // Espera a conclusão
  const posts = await promessaPosts; // Coleta o resultado
}

// EXERCÍCIO 4: A Armadilha do Sequencial (Async Waterfall)
function esquentarPao() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pão quentinho!");
    }, 2000);
  });
}

function fazerCafe() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Café pronto!");
    }, 2000);
  });
}

async function prepararCafeDaManha() {
  const promessaPaoQuente = esquentarPao();
  const promessaCafePronto = fazerCafe();

  const pao = await promessaPaoQuente;
  const cafe = await promessaCafePronto;

  console.log(pao);
  console.log(cafe);
}

prepararCafeDaManha();

//===================================================================

/*
AULA 5: O Elegante Promise.all com await
Explicação Sucinta
A forma mais profissional de lidar com múltiplas promessas paralelas é combinando await com Promise.all. Isso permite disparar várias funções de uma vez e receber os resultados já "desestruturados" em variáveis individuais de forma limpa.

Debaixo do Capô
O Promise.all aguarda o grupo inteiro. Se todas as promessas resolverem, o await entrega o array de resultados. Se uma única falhar, o await lança a exceção imediatamente para o catch, garantindo que o sistema não processe dados incompletos (comportamento fail-fast).
*/

async function buscarTudo() {
  try {
    const [user, posts, fotos] = await Promise.all([
      pegarUsuario(),
      pegarPosts(),
      pegarFotos(),
    ]);
    console.log(user, posts, fotos);
  } catch (e) {
    console.error(e);
  }
}

// EXERCÍCIO 5: O Elegante Promise.all
function checarHardware() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hardware checado!"), 1000);
  });
}

function carregarSO() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("SO carregado!"), 1000);
  });
}

function conectarInternet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Erro na conexão de internet"), 1000);
  });
}

async function bootComputador() {
  try {
    const [hardware, SO, internet] = await Promise.all([
      checarHardware(),
      carregarSO(),
      conectarInternet(),
    ]);

    console.log(hardware, SO, internet);
  } catch (erro) {
    console.error("FALHA NO BOOT:", erro);
  }
}

bootComputador();
