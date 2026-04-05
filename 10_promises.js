/*
AULA 1: O Surgimento da Promise e o Estado Pendente
O Conceito
Uma Promise (Promessa) é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. Imagine como um "ticket" de uma lanchonete: você paga pelo pedido e recebe um ticket. O ticket não é o lanche, mas a garantia de que, no futuro, você receberá o lanche ou um aviso de que o ingrediente acabou.

Debaixo do Capô
Quando você cria uma new Promise, o motor do JavaScript a coloca imediatamente em um estado interno chamado Pending (Pendente).
Executor: A função que você passa para o construtor é executada imediatamente de forma síncrona.
Controle: O JavaScript fornece dois "gatilhos" (funções) para essa Promise: resolve e reject.
Imutabilidade: Uma vez que a Promise muda de estado (de pending para fulfilled ou rejected), ela se torna "settled" (liquidada) e nunca mais pode mudar de valor ou de estado.
*/

// Criando uma promessa que simula um processo de verificação
const verificarEstoque = new Promise((resolve, reject) => {
  const temNoEstoque = true;

  // Simulando um delay (assincronismo)
  setTimeout(() => {
    if (temNoEstoque) {
      // Mudando o estado para 'fulfilled' (resolvida)
      resolve("Produto pronto para envio");
    } else {
      // Mudando o estado para 'rejected' (rejeitada)
      reject("Produto fora de estoque");
    }
  }, 1500);
});

console.log(verificarEstoque); // No console aparecerá: Promise { <pending> }

// EXERCÍCIO 1: O Surgimento da Promise e o Estado Pendente
function autenticarUsuario(usuario) {
  return new Promise((resolve, reject) => {
    const nome = "admin";

    setTimeout(() => {
      if (nome === "admin") {
        resolve(`Acesso permitido para ${usuario}`);
      } else {
        reject(`ERRO: Usuário ${usuario} não encontrado`);
      }
    }, 2000);
  });
}

console.log(autenticarUsuario("admin"));

//==================================================

/*
AULA 2: Consumindo o Sucesso com .then()
Agora que sabemos criar uma Promise, precisamos aprender a "ouvir" quando ela termina. Como vimos, o console.log(autenticarUsuario()) mostra apenas o objeto Promise, não o valor dentro dela.
O Conceito
O método .then() é um "escritor de contratos". Você diz à Promise: "Quando você terminar com sucesso (resolve), execute esta função aqui". Ele é o principal mecanismo para lidar com o fluxo de dados assíncronos sem travar a execução do código.

Debaixo do Capô
Microtasks: Quando uma Promise é resolvida, o callback dentro do .then() não é executado imediatamente como uma função normal. Ele é enviado para uma fila especial chamada Microtask Queue.
Prioridade: O JavaScript termina de executar todo o código síncrono atual antes de olhar para essa fila. Por isso, o .then() sempre será executado "depois", mesmo que o tempo de espera seja 0ms.
Retorno: O .then() sempre retorna uma nova Promise, o que permite o encadeamento (assunto para aulas futuras).
*/

const processarPagamento = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(250);
  }, 1000);
});

// Consumindo o resultado
processarPagamento.then((valor) => {
  console.log(`Pagamento de R$ ${valor.toFixed(2)} processado com sucesso!`);
});

console.log("Linha síncrona: Mas executada antes do .then()");

// EXERCÍCIO 2: Consumindo o Sucesso com .then()
function carregarPerfil(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nome: "Andrew", status: "Ativo" });
    }, 1500);
  });
}

carregarPerfil(2).then((obj) => {
  console.log(`Perfil de ${obj.nome} carregado (ID: ${obj.id})`);
});

console.log("Fim do script síncrono");

//==================================================

/*
AULA 3: Lidando com Falhas com .catch()
Nem tudo são flores no mundo assíncrono. Servidores caem, usuários não são encontrados e permissões são negadas. Precisamos de um mecanismo para capturar esses erros sem quebrar a aplicação.
O Conceito
O método .catch() é o guardião dos erros. Se em algum momento a Promise invocar o reject(), o fluxo pula todos os .then() subsequentes e cai direto no primeiro .catch() que encontrar. É o equivalente ao bloco catch do tradicional try/catch, mas para Promises.

Debaixo do Capô
Propagação de Erro: Se uma Promise for rejeitada e não houver um .catch(), o JavaScript lançará um erro do tipo Uncaught (in promise), o que pode interromper processos em certos ambientes.
Bubbling: O erro "borbulha". Você não precisa de um tratamento de erro para cada passo; um único .catch() ao final de uma corrente pode capturar erros de qualquer elo anterior.
Recuperação: Curiosidade técnica: o .catch() também retorna uma Promise. Se você retornar algo de dentro de um .catch(), a próxima etapa da corrente será considerada "sucesso".
*/

const conectarBanco = new Promise((resolve, reject) => {
  const online = false;

  setTimeout(() => {
    online ? resolve("DB Conectado") : reject(new Error("Falha na conexão"));
  }, 1000);
});

conectarBanco
  .then((msg) => console.log(msg))
  .catch((erro) => console.error(`Alerta: ${erro.message}`));
// Usar 'new Error' é uma boa prática para manter o rastro da pilha (stack trace)

// EXERCÍCIO 3: Lidando com Falhas com .catch()
function aplicarDesconto(codigo, valorOriginal) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (codigo === "PROMO10") {
        resolve(valorOriginal - 10);
      } else {
        reject(new Error("Cupom inválido"));
      }
    }, 500);
  });
}

aplicarDesconto("PROMO10", 100)
  .then((valor) => console.log(`O valor é: R$ ${valor.toFixed(2)}`))
  .catch((erro) => console.error(`Algo deu errado: ${erro.message}`));

aplicarDesconto("CUPOMERRADO", 100)
  .then((valor) => console.log(`O valor é: R$ ${valor.toFixed(2)}`))
  .catch((erro) => console.error(`Algo deu errado: ${erro.message}`));

//==================================================

/*
AULA 4: O Encadeamento (Chaining) e a Transformação de Dados
Esta é, possivelmente, a aula mais importante para entender o poder real das Promises.
O Conceito
Como mencionado na Aula 2, o método .then() sempre retorna uma nova Promise. Isso nos permite criar uma "esteira de produção" (pipeline). O valor retornado por um .then() torna-se a entrada do próximo .then().

Debaixo do Capô
Valor Retornado: Se você retorna um valor simples (string, número, objeto) dentro de um .then(), o JS automaticamente envolve esse valor em uma Promise resolvida.
Promise Retornada: Se você retornar uma outra Promise dentro de um .then(), o próximo elo da corrente esperará essa Promise resolver para ser executado. Isso evita o famoso "Callback Hell".
Sincronia na Cadeia: Cada elo da corrente aguarda a conclusão do anterior. Se o passo 1 falhar, ele pula os próximos .then() e vai para o .catch().
*/

const buscarUsuario = () => Promise.resolve({ id: 1, nome: "Henrique" });

buscarUsuario()
  .then((usuario) => {
    console.log(`Usuário encontrado: ${usuario.nome}`);
    return usuario.id; // Passando apenas o ID para o próximo elo
  })
  .then((id) => {
    // Retornando um valor transformado
    return `Relatório do ID ${id} gerado`;
  })
  .then((relatorio) => {
    console.log(relatorio);
  });

// EXERCÍCIO 4: O Encadeamento (Chaining) e a Transformação de Dados
function validarPedido(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve({ item, preco: 50 });
      } else {
        reject(new Error("Sua compra deu erro"));
      }
    }, 1000);
  });
}

validarPedido("Mouse")
  .then((pedido) => {
    return { ...pedido, preco: pedido.preco + 15 };
  })
  .then((pedidoAtualizado) => {
    return `Item: ${pedidoAtualizado.item} | Total: R$ ${pedidoAtualizado.preco.toFixed(
      2,
    )}`;
  })
  .then((str) => {
    console.log(str);
  })
  .catch((erro) => {
    console.error(`ERRO: ${erro.message}`);
  });

//==================================================

/*
AULA 5: Composição e Orquestração com Promise.all
Até agora, vimos processos em série (um após o outro). Mas e se precisarmos disparar várias tarefas ao mesmo tempo e esperar que todas terminem?
O Conceito
Promise.all é um método que recebe um iterável (geralmente um Array) de Promises e retorna uma única Promise. Essa Promise "mestre" só resolve quando todas as Promises do array forem resolvidas. Se qualquer uma falhar, a Promise mestre falha imediatamente (comportamento conhecido como fail-fast).

Debaixo do Capô
Paralelismo Simulado: As operações iniciam quase simultaneamente (dentro do limite do event loop). O JS não espera a primeira terminar para começar a segunda.
Sincronização de Resultados: O Promise.all mantém a ordem dos resultados. Se você passou [p1, p2, p3], o .then() receberá um array [res1, res2, res3], não importa qual terminou primeiro cronologicamente.
Agregação: É ideal para situações onde uma etapa depende de vários dados independentes (ex: carregar dados de um usuário e, ao mesmo tempo, carregar a lista de produtos).
*/

const carregarTexto = () =>
  new Promise((res) => setTimeout(() => res("Texto"), 1000));

const carregarImagem = () =>
  new Promise((res) => setTimeout(() => res("Imagem"), 500));

Promise.all([carregarTexto(), carregarImagem()])
  .then((resultados) => {
    const [txt, img] = resultados;
    console.log(`Página montada com: ${txt} e ${img}`);
  })
  .catch((erro) => console.error("Falha ao carregar componentes"));

// EXERCÍCIO 5: Composição e Orquestração com Promise.all
const getUsuario = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Usuário Admin");
    }, 1000);
  });
};

const getPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Post 1", "Post 2"]);
    }, 2000);
  });
};

const getMetricas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(5000);
    }, 500);
  });
};

Promise.all([getUsuario(), getPosts(), getMetricas()]).then((respostas) => {
  const [usuario, posts, metricas] = respostas;
  console.log(
    `Dashboard de ${usuario} com ${posts.length} posts e ${metricas} visualizações`,
  );
});

//==================================================

/*
AULA 6: A Resiliência do Promise.allSettled
Na aula anterior, vimos que o Promise.all é "tudo ou nada". Mas e se você estiver carregando uma lista de notificações e uma delas falhar? Você gostaria que o dashboard inteiro parasse de funcionar por causa de um detalhe?
O Conceito
Introduzido no ES2020, o Promise.allSettled espera que todas as Promises terminem, independentemente de terem sido resolvidas ou rejeitadas. Ele nunca cai no .catch() por causa de uma falha individual; ele sempre resolve com um array de objetos descrevendo o destino de cada promessa.

Debaixo do Capô
Estrutura de Resposta: Cada item do array resultante será um objeto com uma propriedade status ("fulfilled" ou "rejected").
Dados: * Se for "fulfilled", ele terá a propriedade value.
Se for "rejected", ele terá a propriedade reason.
Não-Curto-Circuito: Diferente do all, ele não para no primeiro erro. Ele é o método mais "paciente" da família.
*/

const p1 = Promise.resolve("Sucesso!");
const p2 = Promise.reject("Erro crítico!");

Promise.allSettled([p1, p2]).then((resultados) => {
  resultados.forEach((res, index) => {
    if (res.status === "fulfilled") {
      console.log(`Tarefa ${index + 1} passou: ${res.value}`);
    } else {
      console.log(`Tarefa ${index + 1} falhou: ${res.reason}`);
    }
  });
});

// EXERCÍCIO 6: A Resiliência do Promise.allSettled
function enviarRelatorios(servidor) {
  return new Promise((resolve, reject) => {
    if (servidor === "Servidor 2") {
      setTimeout(() => {
        reject(new Error("Conexão Perdida"));
      }, 1000);
    } else {
      setTimeout(() => {
        resolve("Dados Recebidos");
      }, 1000);
    }
  });
}

const servidores = ["Servidor 1", "Servidor 2", "Servidor 3"];
const promessas = servidores.map((server) => enviarRelatorios(server));

Promise.allSettled(promessas).then((respostas) => {
  respostas.forEach((resposta, index) => {
    const nomeDoServidor = servidores[index];
    if (resposta.status === "fulfilled") {
      console.log(`Sucesso no ${nomeDoServidor}: ${resposta.value}`);
    } else {
      console.log(`Falha no ${nomeDoServidor}: ${resposta.reason}`);
    }
  });
});

//==================================================

/*
AULA 7: A Corrida com Promise.race
Às vezes, não queremos esperar todos, nem nos importamos com todos. Só queremos o que chegar primeiro.
O Conceito
Promise.race (Corrida) recebe um array de Promises e retorna uma nova Promise que resolve ou rejeita assim que a primeira Promise do array terminar (ficar settled). Como em uma corrida real, só existe um vencedor, e os outros são ignorados pelo resultado final.

Debaixo do Capô
Vencedor Único: Se a primeira a terminar for um sucesso, a Promise mestre resolve. Se a primeira a terminar for um erro, a Promise mestre rejeita.
Não Cancelamento: Importante notar que o JS não cancela as outras Promises que perderam a corrida; elas continuam executando em background, mas o resultado delas nunca será entregue ao .then() ou .catch() do race.
Uso Comum: É o padrão ouro para criar Timeouts (limite de tempo) para operações que podem demorar demais.
*/

const carregarDados = new Promise((res) =>
  setTimeout(() => res("Dados da API"), 5000),
);

const timeout = new Promise((_, rej) =>
  setTimeout(() => rej(new Error("Tempo esgotado!")), 2000),
);

// Se a API demorar mais de 2s, o timeout vence a corrida e cai no catch
Promise.race([carregarDados, timeout])
  .then((res) => console.log(res))
  .catch((erro) => console.error(erro.message));

// EXERCÍCIO 7: A Corrida com Promise.race
function buscarNoServidor(nome, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Resposta do ${nome}`);
    }, delay);
  });
}

const servidorPrimario = buscarNoServidor("Primário", 2000);
const servidorSecundario = buscarNoServidor("Secundário", 500);

const arrayDeServidores = [servidorPrimario, servidorSecundario];

Promise.race(arrayDeServidores)
  .then((resultado) => {
    console.log(`O vencedor foi ${resultado}`);
  })
  .catch((erro) => {
    console.error(`Erro na corrida: ${erro.message}`);
  });

//==================================================

/*
AULA 8: O Método Promise.any (A busca pelo primeiro Sucesso)
Para fechar o domínio de métodos estáticos, precisamos falar do "primo otimista" do race.
O Conceito
Introduzido no ES2021, o Promise.any também é uma corrida, mas com uma regra diferente: ele ignora as rejeições e espera pelo primeiro sucesso (resolve). Ele só falha se todas as Promises do array forem rejeitadas.

Debaixo do Capô
Foco no Sucesso: Se a primeira Promise a terminar for um reject, o any não desiste. Ele continua esperando as próximas até encontrar um resolve.
O Erro Agregado: Se todas falharem, ele retorna um erro especial chamado AggregateError, que contém um array com todos os motivos das falhas na propriedade .errors.
Uso Comum: Tentar baixar um arquivo de vários mirrors (servidores espelhados). Se um cair, não importa, queremos o que estiver online.
*/

const mirror1 = Promise.reject("Servidor fora do ar");

const mirror2 = new Promise((res) =>
  setTimeout(() => res("Download concluído do Mirror 2"), 1000),
);

Promise.any([mirror1, mirror2])
  .then((res) => console.log(res)) // "Download concluído do Mirror 2"
  .catch((err) => console.error("Nenhum servidor disponível"));

// EXERCÍCIO 8: O Método Promise.any (A busca pelo primeiro Sucesso)
function tentarLogin(regiao, deveFalhar) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (deveFalhar) {
        reject(`Falha na região: ${regiao}`);
      } else {
        resolve(`Autenticado via ${regiao}`);
      }
    }, 1000);
  });
}

const eua = tentarLogin("EUA", true);
const europa = tentarLogin("Europa", true);
const brasil = tentarLogin("Brasil", false);

const regioes = [eua, europa, brasil];

Promise.any(regioes)
  .then((res) => console.log(`Sucesso: ${res}`))
  .catch((erro) =>
    console.log(`ERRO: Todos os bancos de dados falharam: ${erro.message}`),
  );
