/*
AULA 1. O que é uma Promise? (O Contrato)
Explicação Sucinta
Uma Promise é um objeto que representa um valor que você ainda não tem, mas espera receber no futuro. É um "contrato" de uma operação assíncrona. Diferente de uma função comum que retorna um valor imediatamente (ou undefined), a Promise retorna um "ticket" que pode estar em 3 estados: Pending (aguardando), Fulfilled (resolvida com sucesso) ou Rejected (rejeitada por um erro).

Debaixo do Capô
Diferente de callbacks tradicionais, Promises são objetos de primeira classe no motor do JS (V8/SpiderMonkey). Quando você cria uma new Promise, o JS reserva um espaço na memória para dois "slots" internos ocultos: [[PromiseState]] e [[PromiseResult]]. O motor garante que, uma vez que o estado mude de Pending para qualquer outro, ele nunca mais poderá ser alterado. Isso traz previsibilidade ao fluxo assíncrono que os callbacks antigos não tinham.
*/

// Criando a promessa (O Produtor)
const promessaDeCafe = new Promise((resolve, reject) => {
  const maquinaQuebrada = false;

  if (!maquinaQuebrada) {
    resolve("Café está pronto e quentinho!"); // Sucesso
  } else {
    reject("A máquina quebrou."); // Falha
  }
});

// Lendo a promessa (O Consumidor)
promessaDeCafe
  .then((valor) => {
    console.log(valor); // Executa se houver resolve
  })
  .catch((erro) => {
    console.error(erro); // Executa se houver reject
  })
  .finally(() => {
    console.log("A Promise terminou"); // Executa sempre
  });

// EXERCÍCIO 1. O que é uma Promise? (O Contrato)
function sortearNumero() {
  const numeroGerado = Math.random().toFixed(1);

  return new Promise((resolve, reject) => {
    if (numeroGerado < 0.5) {
      resolve(`Número: ${numeroGerado} | Você venceu!`);
    } else {
      reject(`Número: ${numeroGerado} | Você perdeu!`);
    }
  });
}

sortearNumero()
  .then((resultado) => {
    console.log("Resultado:", resultado);
  })
  .catch((erro) => {
    console.error("Resultado:", erro);
  })
  .finally(() => {
    console.log("Fim dessa rodada.");
  });

//====================================================

/*
AULA 2. Microtasks e o Event Loop (A Fila de Prioridade)
Explicação Sucinta
O JavaScript é single-threaded (executa uma coisa por vez). Para não travar o navegador enquanto espera algo demorado, ele usa o Event Loop. A grande sacada das Promises é que elas não entram na fila comum de eventos (Macrotasks, como o setTimeout); elas entram em uma fila especial de Microtasks. Essa fila tem prioridade total: o JS só olha para o próximo item do código principal ou do setTimeout depois que a fila de Microtasks estiver completamente vazia.

Debaixo do Capô
Quando uma Promise é resolvida, o seu callback (.then) não roda imediatamente. Ele é enviado para a Microtask Queue.
O motor do JS segue esta ordem:
Call Stack: Executa todo o código síncrono atual.
Microtask Queue: Executa TODOS os .then() e .catch() que estiverem prontos.
Renderização: O navegador atualiza a tela (se necessário).
Macrotask Queue: Executa o próximo setTimeout, setInterval ou evento de clique.
Isso explica por que uma Promise resolvida com 0ms de espera ainda rodará depois de um console.log que está no final do arquivo, mas antes de um setTimeout(..., 0).
*/

console.log("1 - Início do script (Síncrono)");

setTimeout(() => {
  console.log("2 - setTimeout (Macrotask)");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("3 - Promise 1 (Microtask)");
  })
  .then(() => {
    console.log("4 - Promise 2 (Microtask - Encadeada)");
  });

console.log("5 - Fim do script (Sícrono)");

/* SAÍDA ESPERADA:
1. Início do script
5. Fim do script
3. Promise 1
4. Promise 2
2. setTimeout
*/

// EXERCÍCIO 2. Microtasks e o Event Loop (A Fila de Prioridade)
console.log("Passo 1 - log normal");

setTimeout(() => {
  console.log("Passo 2 - setTimeout");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Passo 3 - Promise 1");
  })
  .then(() => {
    console.log("Passo 4 - Promise 2");
  });

console.log("Passo 5 - log final");

/* SAÍDA ESPERADA:
Passo 1 - log normal
Passo 5 - log final
Passo 3 - Promise 1
Passo 4 - Promise 2
Passo 2 - setTimeout
*/

//====================================================

/*
AULA 3. Chaining (Encadeamento) e Retorno de Valores
Explicação Sucinta
O .then() não serve apenas para mostrar um valor; ele sempre retorna uma nova Promise. Isso permite criar sequências de operações (pipelines). Se você retornar um valor simples dentro de um .then(), a próxima Promise da cadeia será resolvida com esse valor. Se você retornar uma nova Promise, a cadeia "espera" essa promessa resolver para continuar.

Debaixo do Capô
Quando você faz promise.then(cb1).then(cb2), o JS cria uma estrutura ligada. O resultado de cb1 é passado como entrada para cb2. Se cb1 lança um erro ou retorna uma Promise rejeitada, o motor pula todos os .then() subsequentes até encontrar o primeiro .catch(). Esse comportamento de "encapsulamento automático" garante que o fluxo assíncrono seja tratado como uma lista de tarefas linear, evitando o antigo Callback Hell.
*/

// Exemplo de Pipeline Assíncrono
Promise.resolve(10)
  .then((numero) => {
    console.log("Recebi o número:", numero); // 10
    return numero * 2; // Retornando um valor simples
  })
  .then((dobro) => {
    console.log("O dobro é:", dobro); // 20
    // Retornando uma NOVA Promise dentro da cadeia
    return new Promise((resolve) => {
      resolve(dobro + 5);
    });
  })
  .then((resultadoFinal) => {
    console.log("Resultado final:", resultadoFinal); // 25
  });

// EXERCÍCIO 3. Chaining (Encadeamento) e Retorno de Valores
Promise.resolve({
  id: 1,
  item: "Teclado",
  preco: 200,
})
  .then((obj) => {
    console.log("Pedido:", obj);
    return { ...obj, imposto: 40 };
  })
  .then((obj) => {
    console.log("Pedido:", obj);
    return obj.preco - 10;
  })
  .then((valor) => {
    console.log("Valor final: R$", valor.toFixed(2));
  })
  .catch((erro) => {
    console.error("ERRO:", erro);
  });

//====================================================

/*
AULA 4. Tratamento de Erros e Recuperação (Catch & Finally)
Explicação Sucinta
O .catch() não é apenas um "exibidor de erros". Ele é um capturador que interrompe a queda livre de uma exceção. Se algo der errado em qualquer .then() anterior, o JS pula direto para o primeiro .catch() que encontrar. A parte interessante: você pode "recuperar" a corrente dentro de um catch, retornando um valor de backup para que os .then() seguintes continuem rodando. O .finally() é o porto seguro: ele roda independente de sucesso ou falha, ideal para limpezas (como fechar um carregamento).

Debaixo do Capô
Quando uma Promise é rejeitada, o motor procura na cadeia o próximo handler do tipo onRejected. Se você não tiver um .catch(), o erro se torna uma "Uncaught Promise Rejection", o que pode travar processos em ambientes como Node.js. O .finally(cb) é diferente: ele não recebe argumentos e o valor que ele retorna é ignorado (a menos que ele lance um novo erro), preservando o resultado ou o erro da Promise anterior para o próximo passo.
*/

function buscarDados() {
  return new Promise((resolve, reject) => {
    const erro = true;
    erro ? resolve("Dados OK") : reject("Erro de Conexão");
  });
}

buscarDados()
  .then((resposta) => console.log(resposta))
  .catch((erro) => {
    console.warn("Tratando a resposta...", erro);
    return "Dados de cache (backup)"; // Recuperando a cadeia!
  })
  .then((resultado) => console.log("Fluxo seguiu:", resultado)) // Isso roda se o catch retornar algo
  .finally(() => console.log("Finalizado.")); // Sempre roda

// EXERCÍCIO 4. Tratamento de Erros e Recuperação (Catch & Finally)
function tentarLogin(senha) {
  return new Promise((resolve, reject) => {
    if (senha === "1234") {
      resolve("Acesso Permitido");
    } else {
      reject("Senha incorreta");
    }
  });
}

tentarLogin("4321")
  .then((resposta) => console.log(resposta))
  .catch((erro) => {
    console.warn("ERRO:", erro);
    return "Entrando como convidado";
  })
  .then((status) => console.log("Status atual:", status))
  .finally(() => console.log("Verificação encerrada!"));

//====================================================

/*
AULA 5. Promessas em Paralelo: Promise.all
Explicação Sucinta
Imagine que você precisa carregar três arquivos independentes. Em vez de esperar o primeiro terminar para começar o segundo, você pode disparar todos ao mesmo tempo. O Promise.all recebe um array de Promises e retorna uma única Promise que só resolve quando todas as promessas do array forem resolvidas. Se uma sequer falhar, a Promise principal é rejeitada imediatamente (política de "tudo ou nada").

Debaixo do Capô
O Promise.all é um iterador assíncrono. Ele inicia todas as operações simultaneamente. O motor do JS mantém um contador interno e um array de resultados. À medida que cada Promise resolve, o valor é colocado na posição exata do array original. Isso é muito mais performático do que sequencializar tarefas que não dependem uma da outra.
*/

const f1 = Promise.resolve("Foto 1");
const f2 = new Promise((resolve) => setTimeout(() => resolve("Foto 2"), 1000));
const f3 = Promise.resolve("Foto 3");

// Executando em paralelo
Promise.all([f1, f2, f3])
  // 'resultados' é um array: ["Foto 1", "Foto 2", "Foto 3"]
  .then((resultados) => console.log("Fotos carregadas:", resultados))
  .catch((erro) => console.log("ERRO:", erro));

// EXERCÍCIO 5. Promessas em Paralelo: Promise.all
const carregarUsuario = Promise.resolve({ nome: "Andrew" });
const carregarPosts = Promise.resolve(["Post 1", "Post 2"]);
const carregarConfig = Promise.resolve({ tema: "dark" });

Promise.all([carregarUsuario, carregarPosts, carregarConfig])
  .then(([usuario, post, config]) =>
    console.log(`${usuario.nome} carregou ${post} no tema ${config.tema}`),
  )
  .catch(() => console.log("Erro ao carregar dados"));

//====================================================

/*
AULA 6. Fast-Exit e Corridas: Promise.race e Promise.any
Explicação Sucinta
Às vezes você não quer esperar todos; você quer o primeiro.
Promise.race: Retorna a primeira Promise que terminar, seja ela um sucesso ou um erro. É uma corrida literal.
Promise.any: Retorna a primeira Promise que for resolvida com sucesso. Se uma falhar, ele ignora e espera a próxima. Ele só rejeita se todas falharem.

Debaixo do Capô
Diferente do all, esses métodos não precisam de um array de resultados. O motor do JS estabelece um "vencedor" e, assim que o estado da primeira Promise muda, ele resolve/rejeita a Promise principal e descarta o interesse nos outros resultados (embora as operações originais continuem rodando até o fim em segundo plano, o JS apenas ignora os retornos delas).
*/

const internetRapida = new Promise((resposta) =>
  setTimeout(() => resposta("Servidor A"), 500),
);
const internetLenta = new Promise((resposta) =>
  setTimeout(() => resposta("Servidor B"), 2000),
);

// Quem chegar primeiro vence
Promise.race([internetRapida, internetLenta]).then(
  (vencedor) => console.log("Respota vencedora:", vencedor), // "Servidor A"
);

//EXERCÍCIO 6. Fast-Exit e Corridas: Promise.race e Promise.any
function pegarDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dados da Nuvem");
    }, 2000);
  });
}

const timeout = new Promise((reject) =>
  setTimeout(() => reject("Tempo esgotado!"), 3000),
);

Promise.race([pegarDados(), timeout])
  .then((dados) => console.log(dados))
  .catch((erro) => console.error(erro));

//====================================================

/*
AULA 7. O Final do Caminho: Promise.allSettled
Explicação Sucinta
O Promise.all é pessimista (se um falha, ele desiste de tudo). O Promise.allSettled é o diplomata: ele espera todas as Promises terminarem, não importa se com sucesso ou com erro. Ele retorna um array de objetos descrevendo o destino de cada uma. É ideal quando você tem tarefas independentes e quer saber o que aconteceu com cada uma delas individualmente, sem que um erro interrompa o processo dos outros.

Debaixo do Capô
Diferente do all, o allSettled nunca rejeita a Promise principal (a menos que você passe algo que não seja iterável). Ele aguarda o "assentamento" (settlement) de cada item. O resultado é um array de objetos com o formato:
Para sucesso: { status: "fulfilled", value: valor }
Para erro: { status: "rejected", reason: motivo }
*/

const p1 = Promise.resolve("SUCESSO!");
const p2 = Promise.reject("FALHA!");

Promise.allSettled([p1, p2]).then((resultados) => {
  resultados.forEach((res) => {
    if (res.status === "fulfilled") {
      console.log("Ganhei:", res.value);
    } else {
      console.log("Perdi:", res.reason);
    }
  });
});

// EXERCÍCIO 7. O Final do Caminho: Promise.allSettled
const email1 = Promise.resolve("Enviado para João");
const email2 = Promise.reject("Erro: Email da Maria inválido");
const email3 = Promise.resolve("Enviado para José");

Promise.allSettled([email1, email2, email3]).then((respostas) => {
  respostas.forEach((res) => {
    if (res.status === "fulfilled") {
      console.log("Deu certo:", res.value);
    } else {
      console.log("Deu errado:", res.reason);
    }
  });
});
