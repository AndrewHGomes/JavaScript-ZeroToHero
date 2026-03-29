// AULA - A anatomia da função async
async function saudar() {
  return "Olá, Andrew!";
}

saudar().then((resposta) => console.log(resposta));

// EXERCÍCIO - A anatomia da função async
async function somarAsync(a, b) {
  return a + b;
}

somarAsync(8, 6).then((resposta) => console.log(resposta));

//======================================

// AULA - O Operador await (A Pausa Dramática)
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

// EXERCÍCIO - O Operador await (A Pausa Dramática)
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

//======================================

// AULA - Tratamento de Erros com try...catch
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

// EXERCÍCIO - Tratamento de Erros com try...catch
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

//======================================

// AULA - A Armadilha do Sequencial (Async Waterfall)
async function carregarDadosLento() {
  const usuario = await pegarUsuario();
  const posts = await pegarUsuario();
}

async function carregarDadosRapido() {
  const promessaUsuario = pegarUsuario();
  const promessaPosts = pegarPosts();

  const usuario = await promessaUsuario;
  const posts = await promessaPosts;
}

// EXERCÍCIO - A Armadilha do Sequencial (Async Waterfall)
function esquentarPao() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pão quentinho!");
    }, 2000);
  });
}

function fazerCafe() {
  return new Promise((resolve, reject) => {
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

//======================================

// AULA - O Elegante Promise.all
async function buscarTudo() {
  const [user, posts, fotos] = await Promise.all([
    pegarUsuario(),
    pegarPosts(),
    pegarFotos(),
  ]);

  console.log(user, posts, fotos);
}

// EXERCÍCIO - O Elegante Promise.all
function checarHardware() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("Hardware checado!");
      } else {
        reject("Alguma Promise deu erro");
      }
    }, 1000);
  });
}

function carregarSO() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("SO carregado!");
      } else {
        reject("Alguma Promise deu erro");
      }
    }, 1000);
  });
}

function conectarInternet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        resolve("Internet conectada!");
      } else {
        reject("Alguma Promise deu erro");
      }
    }, 1000);
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
    console.error("ERRO:", erro);
  }
}

bootComputador();
