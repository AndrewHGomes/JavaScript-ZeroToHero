// AULA - Promise e seus Estados
const minhaPromise = new Promise((resolve, reject) => {
  const sucesso = true;

  if (sucesso) {
    resolve("Operação foi um sucesso!");
  } else {
    reject("Algo deu errado no caminho.");
  }
});

console.log(minhaPromise);

// EXERCÍCIO - Promise e seus Estados
function fazerCafe(temPo) {
  return new Promise((resolve, reject) => {
    if (temPo) {
      resolve("O café está pronto!");
    } else {
      reject("Não tem pó de café, precisamos comprar.");
    }
  });
}

console.log(fazerCafe(true));

//=======================================

// AULA - Consumindo com .then() e .catch()
function estudarJavaScript(teveAula) {
  return new Promise((resolve, reject) => {
    if (teveAula) {
      resolve("Bora estudar!");
    } else {
      reject("Tenho que esperar a aula");
    }
  });
}

estudarJavaScript(false)
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.error(erro);
  });

// EXERCÍCIO - Consumindo com .then() e .catch()
function pedirPizza(estaDisponivel) {
  return new Promise((resolve, reject) => {
    if (estaDisponivel) {
      resolve("Está a caminho!");
    } else {
      reject("Pizzaria fechada!");
    }
  });
}

pedirPizza(false)
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.error(erro);
  });

//=======================================

// AULA - O Método .finally()
function ficarDeFolga(fimDeSemana) {
  return new Promise((resolve, reject) => {
    if (fimDeSemana) {
      resolve("Vou aproveitar para estudar...");
    } else {
      reject("Esperar acabar a semana.");
    }
  });
}

ficarDeFolga(false)
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((erro) => {
    console.error(erro);
  })
  .finally(() => {
    console.log("De qualquer maneira, o jeito é estudar!");
  });

// EXERCÍCIO - O Método .finally()
function carregarArquivo(arquivoExiste) {
  return new Promise((resolve, reject) => {
    if (arquivoExiste) {
      resolve("Arquivo carregado!");
    } else {
      reject("Erro ao carregar arquivo!");
    }
  });
}

carregarArquivo(true)
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((erro) => {
    console.error(erro);
  })
  .finally(() => {
    console.log("Conexão encerrada!");
  });

//=======================================

// AULA - Encadeamento (Chaining)
function dobrarValor(valor) {
  return new Promise((resolve) => {
    resolve(valor * 2);
  });
}

dobrarValor(10)
  .then((resultado) => {
    console.log(resultado);
    return resultado + 5;
  })
  .then((novoValor) => {
    console.log(novoValor);
    return "Fim da conta";
  })
  .then((texto) => {
    console.log(texto);
  });

// EXERCÍCIO - Encadeamento (Chaining)
function verificarEstoque(produto) {
  return new Promise((resolve) => {
    resolve(produto);
  });
}

verificarEstoque("Celular")
  .then((produto) => {
    return `Produto ${produto} embalado`;
  })
  .then((frase) => {
    return `${frase} e enviado para a transportadora.`;
  })
  .then((resultado) => {
    console.log(resultado);
  });

//=======================================

// AULA - Encadeando com Novas Promises
function buscarUsuario() {
  return new Promise((resolve) => resolve({ id: 1, nome: "Henrique" }));
}

function buscarPedidos(idUsuario) {
  return new Promise((resolve) => resolve(["Pizza", "Refrigerante"]));
}

buscarUsuario()
  .then((usuario) => {
    console.log(`Buscando pedidos do usuário ${usuario.id}...`);
    return buscarPedidos(usuario.id);
  })
  .then((pedidos) => {
    console.log(`Pedidos: ${pedidos}`);
  });

// EXERCÍCIO - Encadeando com Novas Promises
function autenticar(email) {
  return new Promise((resolve, reject) => {
    if (email === "admin@email.com") {
      resolve({ user: "Admin", token: "123" });
    } else {
      reject("Acesso Negado...");
    }
  });
}

function buscarDados(token) {
  return new Promise((resolve, reject) => {
    if (token === "123") {
      resolve("Dados ultra-secretos do servidor");
    } else {
      reject("Nada");
    }
  });
}

autenticar("admin@email.com")
  .then((dadosDoUsuario) => {
    return buscarDados(dadosDoUsuario.token);
  })
  .then((dadosSecretos) => {
    console.log(dadosSecretos);
  })
  .catch((erro) => {
    console.error(erro);
  });

//=======================================

// AULA - O Final: Promise.all()
const p1 = Promise.resolve("Foto carregada");
const p2 = Promise.resolve("Comentários carregados");
const p3 = Promise.resolve("Likes carregados");

Promise.all([p1, p2, p3])
  .then((resultados) => {
    console.log(resultados);
  })
  .catch((erro) => {
    console.error("Algum processo falhou", erro);
  });

// EXERCÍCIO - O Final: Promise.all()
function carregarMapa() {
  return new Promise((resolve) => resolve("Mapa carregado"));
}

function carregarPersonagem() {
  return new Promise((resolve) => resolve("Personagem carregado"));
}

function carregarInimigos() {
  return new Promise((resolve) => resolve("Inimigos carregados"));
}

Promise.all([carregarMapa(), carregarPersonagem(), carregarInimigos()])
  .then((respostas) => {
    console.log(`Jogo pronto: ${respostas}`);
  })
  .catch((erro) => {
    console.error("Erro:", erro);
  });
