/*
AULA 1. O que é uma Classe?
Explicação Sucinta
Uma Classe é um "molde" ou um "projeto" para criar objetos. Se você tem uma fábrica de carros, a classe é o diagrama azul (o desenho técnico), e o carro que sai da linha de montagem é o objeto (a instância). Ela agrupa dados (propriedades) e comportamentos (métodos) em uma única unidade.

Debaixo do Capô (The Prototype Secret)
No JavaScript, classes são "açúcar sintático" (syntactic sugar). Isso significa que a palavra class é apenas uma forma mais bonita de escrever algo que já existia: as Funções Construtoras e a Herança Prototipal.
Quando você define uma classe, o JS cria uma função e armazena os métodos no objeto prototype dessa função, para que todas as instâncias compartilhem o mesmo espaço na memória para os métodos, em vez de recriá-los para cada objeto.
*/

// Definindo o molde (Classe)
class Personagem {
  // O constructor é o primeiro método executado ao criar um objeto
  // Ele serve para inicializar as propriedades
  constructor(nome, nivel) {
    this.nome = nome; // "this" refere-se à instância que está sendo criada
    this.nivel = nivel;
  }

  // Isso é um método. Ele define o que o objeto "faz"
  saudar() {
    console.log(`Olá, eu sou o ${this.nome} e estou no nível ${this.nivel}!`);
  }
}

// Criando instâncias (objetos reais baseados no molde)
const heroi = new Personagem("Aragorn", 20);
const mago = new Personagem("Gandalf", 50);

heroi.saudar(); // Saída: Olá, eu sou o Aragorn e estou no nível 20!
mago.saudar(); // Saída: Olá, eu sou o Gandalf e estou no nível 50!

// EXERCÍCIO 1. O que é uma Classe?
class Livro {
  constructor(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }

  detalhes() {
    console.log(
      `O livro ${this.titulo} foi escrito por ${this.autor} e tem ${this.paginas} páginas.`,
    );
  }
}

const asSeisLicoes = new Livro("As Seis Lições", "Ludwig Von Mises", 184);
const minimoSobreEconomia = new Livro(
  "O Mínimo Sobre Economia",
  "Rodrigo Constantino",
  196,
);

asSeisLicoes.detalhes();
minimoSobreEconomia.detalhes();

//===================================================================

/*
AULA 2. Encapsulamento: Campos Privados (#) e Getters/Setters
Explicação Sucinta
O Encapsulamento serve para "esconder" a complexidade interna e proteger os dados.
Campos Privados (#): Variáveis que só podem ser lidas ou alteradas dentro da classe. Ninguém de fora consegue tocá-las.
Getters e Setters: Métodos especiais que fingem ser propriedades. O get lê um valor (podendo tratá-lo antes) e o set altera um valor (podendo validá-lo).

Debaixo do Capô
Antigamente, desenvolvedores JS usavam um underline _nome para indicar que algo era privado, mas era apenas uma convenção visual (mentirinha). Com a chegada dos Private Class Features (ES2022), o motor do JavaScript (V8) realmente bloqueia o acesso em nível de memória. Se você tentar acessar #propriedade fora da classe, o JS lançará um erro de sintaxe antes mesmo do código rodar.
*/

class ContaBancaria {
  // Declarando um campo privado (obrigatório declarar fora do constructor)
  #saldo = 0;

  constructor(titular) {
    this.titular = titular;
  }

  // Getter: Permite ler o saldo, mas não alterá-lo diretamente
  get saldo() {
    return `R$ ${this.#saldo.toFixed(2)}`;
  }

  // Setter: Permite alterar o saldo, mas com uma regra de validação
  set deposito(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    } else {
      console.log("O valor do depósito de ser positivo!");
    }
  }
}

const minhaConta = new ContaBancaria("Andrew");
minhaConta.deposito = 100; // Usa o setter como se fosse uma variável
console.log(minhaConta.saldo); // Usa o getter. Saída: R$ 100.00

// console.log(minhaConta.#saldo); // ERRO! O motor do JS impede o acesso.

// EXERCÍCIO 2. Encapsulamento: Campos Privados (#) e Getters/Setters
class Usuario {
  #senha;

  constructor(email, senha) {
    this.email = email;
    this.#senha = senha;
  }

  get emailFormatado() {
    return this.email.toLowerCase();
  }

  set senha(novaSenha) {
    if (novaSenha.length >= 8) {
      this.#senha = novaSenha;
      console.log("Senha alterada com sucesso!");
    } else {
      console.error(
        "SENHA MUITO CURTA! A nova senha deve ter pelo menos 8 dígitos.",
      );
    }
  }
}

const viviane = new Usuario("VIVI@email.com", "12345678");
console.log(viviane.email);
console.log(viviane.emailFormatado);
viviane.senha = "159753";
viviane.senha = "87654321";

//===================================================================

/*
AULA 3. Herança e o uso do super
Explicação Sucinta
A Herança permite que uma classe "herde" características de outra. Se você tem uma classe Animal, pode criar uma classe Cachorro que aproveita tudo de Animal, mas adiciona coisas específicas (como latir). A palavra-chave extends faz a conexão, e o super() chama o construtor da "classe pai".

Debaixo do Capô
Quando usamos extends, o JavaScript configura a Cadeia de Protótipos (Prototype Chain). Se você chama um método no Cachorro e ele não existe lá, o motor do JS sobe um degrau e procura no Animal. O super() é obrigatório porque ele garante que o this da classe pai seja inicializado corretamente antes de você tentar usar o this na classe filha.
*/

// Classe Pai (Superclasse)
class Dispositivo {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    this.ligado = true;
    console.log(`${this.nome} está ligado!`);
  }
}

class Smartphone extends Dispositivo {
  constructor(nome, modelo) {
    // Chama o constructor da classe pai (Dispositivo)
    super(nome);
    this.modelo = modelo;
  }

  // Podemos criar métodos específicos ou "sobrescrever" os do pai
  tirarFoto() {
    if (this.ligado) {
      console.log(`Foto tirada com o ${this.modelo}`);
    } else {
      console.log("Ligue o celular primeiro.");
    }
  }
}

const meuCelular = new Smartphone("Motorola", "Moto One Fusion Plus");
meuCelular.ligar(); // Método herdado do pai
meuCelular.tirarFoto(); // Método próprio da filha

// EXERCÍCIO 3. Herança e o uso do super
class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  receberAumento(valor) {
    this.salario += valor;
    return `R$ ${this.salario.toFixed(2)}`;
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, departamento) {
    super(nome, salario);
    this.departamento = departamento;
  }

  receberAumento(valor) {
    super.receberAumento(valor + 500);
    return `R$ ${this.salario.toFixed(2)}`;
  }
}

const funcionario = new Funcionario("Henrique", 3000);
funcionario.receberAumento(500);
console.log(funcionario);

const gerente = new Gerente("Irvin", 5000, "Desenvolvimento Web");
gerente.receberAumento(1000);
console.log(gerente);

//===================================================================

/*
AULA 4. Métodos e Propriedades Estáticas (static)
Explicação Sucinta
O modificador static define propriedades ou métodos que pertencem à classe em si, e não aos objetos (instâncias) criados por ela. É como uma ferramenta que fica na prateleira da fábrica (Classe), em vez de ser um acessório que vem dentro de cada carro (Instância).

Debaixo do Capô
Normalmente, métodos são adicionados ao prototype da classe. Métodos estáticos, porém, são adicionados diretamente ao objeto construtor.
Instância: this.metodo() busca no protótipo.
Estático: Classe.metodo() acessa diretamente a função.
Isso economiza memória quando você precisa de uma função utilitária que não depende dos dados específicos de um objeto (não usa o this da instância).
*/

class CalculadoraFinanceira {
  static taxaBase = 0.05; // Propriedade estática

  // Método estático: utilitário que não precisa de 'new'
  static calcularJuros(valor) {
    // Note que não usamos 'this' para propriedades da instância aqui
    return valor * CalculadoraFinanceira.taxaBase;
  }
}

console.log(CalculadoraFinanceira.taxaBase); // 0.05
console.log(CalculadoraFinanceira.calcularJuros(1000)); // 50

// Se tentar fazer: const calc = new CalculadoraFinanceira();
// calc.calcularJuros(1000); -> Erro! O método não pertence ao objeto 'calc'.

// EXERCÍCIO 4. Métodos e Propriedades Estáticas (static)
class Configuracao {
  static nomeApp = "Sistema Ultra";
  static versao = "1.0.0";

  static exibirInfo() {
    return `APP: ${Configuracao.nomeApp} | VERSÃO: ${Configuracao.versao}`;
  }
}

console.log(Configuracao.nomeApp);
console.log(Configuracao.versao);

console.log(Configuracao.exibirInfo());

//===================================================================

/*
AULA 5. Polimorfismo
Explicação Sucinta
O Polimorfismo (do grego "muitas formas") é a capacidade de diferentes classes filhas responderem a uma mesma "chamada" de método de maneiras específicas. É o que permite que você trate objetos diferentes como se fossem o mesmo tipo base, mas cada um executa sua própria lógica interna.

Debaixo do Capô
No JavaScript, o polimorfismo acontece através da Sobrescrita de Métodos (Method Overriding). Quando você chama objeto.falar(), o motor do JS procura esse método primeiro na instância, depois na classe dela, e vai subindo a cadeia de protótipos. O polimorfismo "brilha" porque o JS não exige que você defina interfaces rígidas; se o método existe no objeto, ele o executa.
*/

class Instrumento {
  tocar() {
    return "Fazendo algum som...";
  }
}

class Violao extends Instrumento {
  tocar() {
    return `Tocando acordes de violão`; // Sobrescreve o pai
  }
}

class Bateria extends Instrumento {
  tocar() {
    return `Tum-dum-tss`; // Sobrescreve o pai
  }
}

// Uma função que não sabe qual instrumento vai receber,
// mas sabe que qualquer instrumento tem o método .tocar()
function iniciarConcerto(instrumento) {
  console.log(instrumento.tocar());
}

iniciarConcerto(new Instrumento());
iniciarConcerto(new Violao()); // Tocando acordes...
iniciarConcerto(new Bateria()); // Tum-dum-tss

// EXERCÍCIO 5. Polimorfismo
class Notificacao {
  enviar(mensagem) {
    console.log(`Enviando notificação genérica: ${mensagem}`);
  }
}

class Email extends Notificacao {
  enviar(mensagem) {
    console.log(`Enviando E-mail: ${mensagem}`);
  }
}

class SMS extends Notificacao {
  enviar(mensagem) {
    console.log(`Enviando SMS: ${mensagem}`);
  }
}

const notificacoes = [new Email(), new SMS()];

for (const notificacao of notificacoes) {
  notificacao.enviar("Olá, usuário! Como vai?");
}

notificacoes.forEach((notificacao) => {
  notificacao.enviar("Olá, cliente! Tudo bem?");
});

//===================================================================

/*
AULA 6. Mixins: Composição sobre Herança
Explicação Sucinta
O JavaScript não permite herança múltipla (uma classe não pode dar um extends em duas classes ao mesmo tempo). Os Mixins são uma técnica para contornar isso. Eles permitem que você "copie" comportamentos (métodos) de diferentes fontes para dentro de uma classe, promovendo a composição. É como se, em vez de o objeto "ser" algo, ele "tivesse" habilidades específicas.

Debaixo do Capô
Diferente da Herança, que usa a Cadeia de Protótipos ([[Prototype]]), os Mixins geralmente utilizam o método Object.assign(). Esse método copia as propriedades e métodos de um objeto de origem para o protótipo da classe de destino. Como o JS trata funções como objetos de primeira classe, podemos simplesmente injetar essas funções no prototype da nossa classe em tempo de execução.
*/

// Definindo um Mixin (um objeto com habilidades)
const Falante = {
  falar(frase) {
    console.log(`[${this.nome} diz]: ${frase}`);
  },
};

const Corredor = {
  correr(velocidade) {
    console.log(`${this.nome} está correndo a ${velocidade}km/h!`);
  },
};

class Robo {
  constructor(nome) {
    this.nome = nome;
  }
}

// "Injetando" as habilidades no protótipo da classe Robo
// Isso faz com que todos os robôs tenham acesso a falar e correr
Object.assign(Robo.prototype, Falante, Corredor);

const r2d2 = new Robo("R2-D2");

r2d2.falar("Beep Boop!"); // Saída: [R2-D2 diz]: Beep Boop!
r2d2.correr(5); // Saída: R2-D2 está correndo a 5km/h!
// Nota: R2-D2 não "é" um Humano ou Atleta, ele apenas "tem" as habilidades

// EXERCÍCIO 6. Mixins: Composição sobre Herança
class PersonagemRPG {
  constructor(nome) {
    this.nome = nome;
  }
}

const Voador = {
  voar() {
    console.log("Posso voar");
  },
};

const Nadador = {
  nadar() {
    console.log("Posso nadar");
  },
};

class Dragao extends PersonagemRPG {
  constructor(nome) {
    super(nome);
  }
}

Object.assign(Dragao.prototype, Voador, Nadador);

const dragao = new Dragao("Shenlong");

dragao.voar();
dragao.nadar();

console.log(dragao);

//===================================================================

/*
AULA 7. Instanciação e Operadores de Tipo (instanceof)
Explicação Sucinta
O operador instanceof permite verificar se um objeto foi criado a partir de uma classe específica ou de uma classe que herda dela. É a ferramenta de "segurança" para garantir que você está lidando com o tipo correto de dado antes de executar um método que pode não existir em outros objetos.

Debaixo do Capô
O instanceof não olha apenas para a classe imediata. Ele percorre toda a Cadeia de Protótipos (Prototype Chain). Se você tem Dragao extends PersonagemRPG, um objeto de Dragao retornará true tanto para instanceof Dragao quanto para instanceof PersonagemRPG. O motor do JS verifica se o prototype da classe informada aparece em qualquer lugar na linha sucessória do objeto.
*/

class Veiculo {}
class Carro extends Veiculo {}
class Moto extends Veiculo {}

const meuFiesta = new Carro();

console.log(meuFiesta instanceof Carro); // true (Instância direta)
console.log(meuFiesta instanceof Veiculo); // true (Herança/Cadeia de Protótipo)
console.log(meuFiesta instanceof Moto); // false (Caminhos diferentes na árvore)
console.log(meuFiesta instanceof Object); // true (Tudo no JS herda de Object)

// Utilidade prática:
function lavarVeiculo(veiculo) {
  if (!(veiculo instanceof Veiculo)) {
    throw new Error("Isso não é um veículo válido para lavagem!");
  }

  console.log("Iniciando lavagem...");
}

//===================================================================

/*
AULA 8. Factory Functions vs Classes
Explicação Sucinta
Embora estejamos focados em Classes, é vital saber que no JavaScript moderno existe uma alternativa comum: as Factory Functions (Funções Fábrica). Enquanto a Classe usa o new e o this, a Factory é apenas uma função que retorna um novo objeto. Elas são muito usadas quando se quer evitar as armadilhas do this ou criar objetos privados sem a sintaxe de #.

Debaixo do Capô
Classes exigem o operador new, que cria um novo contexto de memória e vincula o this. Se você esquecer o new em uma classe, o JS lança um erro. Já as Factories são funções normais; elas são mais flexíveis, mas podem ser levemente menos performáticas em criações de milhares de objetos, pois não compartilham métodos via protótipo da mesma forma automática que as classes.
*/

// Abordagem com Classe
class UserClass {
  constructor(nome) {
    this.nome = nome;
  }

  saudar() {
    console.log(`Olá, sou ${this.nome}!`);
  }
}

// Abordagem com Factory (Sem 'new', sem 'this' obrigatório)
function createUserfactory(nome) {
  return {
    nome,
    saudar: () => console.log(`Olá, sou ${nome}!`),
  };
}

const user1 = new UserClass("Viviane");
const user2 = createUserfactory("Andrew");

console.log(user1);
user1.saudar();

console.log(user2);
user2.saudar();

// EXERCÍCIO 7 & 8. Validação e Fábrica
class Transporte {}

class Caminhao extends Transporte {}

function criarEntrega(tipo) {
  if (tipo === "pesado") {
    return new Caminhao();
  } else {
    return {
      info: "entrega simples",
    };
  }
}

function aceitarApenasTransporte(objeto) {
  if (objeto instanceof Transporte) {
    console.log("Transporte aceito.");
  } else {
    console.log("Tipo inválido.");
  }
}

aceitarApenasTransporte(criarEntrega("pesado"));
aceitarApenasTransporte(criarEntrega("simples"));

//===================================================================

/*
AULA 9. Perda de Contexto e o Método bind()
Explicação Sucinta
Quando você retira um método de dentro de uma classe e o passa como uma referência (por exemplo, em um setTimeout ou um evento), o this dentro desse método "esquece" a quem pertencia. O this torna-se undefined (em strict mode) ou aponta para o objeto global. O .bind() serve para "amarrar" permanentemente o this ao objeto original.

Debaixo do Capô
No JS, o valor de this é definido no momento da chamada da função, não na sua definição (chamado de Call-site). Quando você faz const acao = player.atacar, você está apenas copiando o corpo da função. Ao chamar acao(), não há nenhum objeto à esquerda do ponto, então o motor do JS perde a referência. O .bind(contexto) cria uma nova função interna (uma exotic function object) que força o this a ser sempre o que você passou.
*/

class Heroi {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Eu sou o ${this.nome}`);
  }
}

const thor = new Heroi("Thor");

// 1. Chamada direta: funciona (this é thor)
thor.falar();

// 2. Referência: o 'this' se perde
const falarSolto = thor.falar;
// falarSolto(); // ERRO! this.nome é undefined

// 3. Usando .bind() para fixar o contexto
const falarFixado = thor.falar.bind(thor);
falarFixado(); // Funciona: "Eu sou o Thor"

//===================================================================

/*
AULA 10. Arrow Functions em Classes (Auto-bind)
Explicação Sucinta
Uma forma moderna de evitar o .bind() é declarar métodos usando Arrow Functions diretamente como propriedades da classe. Arrow functions não possuem seu próprio this; elas "herdam" o this do escopo onde foram criadas (o constructor da classe).

Debaixo do Capô
Ao usar atacar = () => { ... } dentro de uma classe, o JavaScript não coloca esse método no prototype. Em vez disso, ele o adiciona diretamente em cada instância criada, dentro do constructor. Isso garante que o this sempre será a instância, mas consome um pouco mais de memória, já que cada objeto terá sua própria cópia da função em vez de compartilhá-la pelo protótipo.
*/

class Vilao {
  constructor(nome) {
    this.nome = nome;
  }

  rir = () => console.log(`${this.nome} diz: MUAHAHAHA!`);
}

const esqueleto = new Vilao("Esqueleto");
const risada = esqueleto.rir;
risada();

// EXERCÍCIO 9 & 10. O Mistério do This
class Temporizador {
  constructor() {
    this.segundos = 0;
  }

  contar() {
    this.segundos += 1;
    console.log(this.segundos);
  }

  iniciarAutoBind = () => this.contar();
}

const meuTreino = new Temporizador();
const acao = meuTreino.contar;
// acao();
const acaoCorrigida = meuTreino.contar.bind(meuTreino);
acaoCorrigida();

//===================================================================

/*
AULA 11. Membros Privados Estáticos e Blocos Estáticos
Explicação Sucinta
Assim como instâncias têm campos privados (#), a classe em si também pode ter segredos que só os métodos estáticos conhecem. Além disso, existe o Static Initialization Block, um bloco de código que roda apenas uma vez, assim que a classe é carregada pelo motor do JS, ideal para configurações complexas.

Debaixo do Capô
O Bloco Estático (static { ... }) resolve um problema antigo: como inicializar variáveis estáticas que precisam de lógica (como um try/catch ou loops)? Antes, fazíamos isso fora da classe. Agora, o escopo é protegido e ocorre no momento da criação do "objeto função" da classe na memória.
*/

class BaseDeDados {
  static #stringConexao; // Privado e da classe

  static {
    const env = "PROD";

    if (env === "PROD") {
      this.#stringConexao = "ssl://db.com:5432";
    } else {
      this.#stringConexao = "localhost:5432";
    }

    console.log("Classe BaseDeDados inicializada!");
  }

  static conectar() {
    console.log(`Conectando em ${this.#stringConexao}`);
  }
}

BaseDeDados.conectar();
// BaseDeDados.#stringConexao; // ERRO! Privado

//===================================================================

/*
AULA 12. Padrão Singleton com Classes
Explicação Sucinta
O Singleton é um padrão de projeto que garante que uma classe tenha apenas uma única instância em toda a aplicação. Se você tentar criar uma nova, ele retorna a que já foi criada. É muito útil para gerenciadores de estado, logs ou configurações globais.

Debaixo do Capô
Para implementar isso, usamos uma propriedade estática privada para armazenar a instância. No constructor, verificamos se essa instância já existe. Se existir, retornamos a existente (o JS permite retornar um objeto específico no constructor, ignorando o new).
*/

class ConfiguracaoGlobal {
  static #instancia;

  constructor() {
    if (ConfiguracaoGlobal.#instancia) {
      return ConfiguracaoGlobal.#instancia;
    }

    this.tema = "escuro";
    ConfiguracaoGlobal.#instancia = this;
  }
}

const config1 = new ConfiguracaoGlobal();
const config2 = new ConfiguracaoGlobal();

console.log(config1 === config2); // true! São o mesmíssimo objeto na memória.

// EXERCÍCIO 11 & 12. O Cofre e a Instância Única
class Cofre {
  static #instancia;
  static #senhaMestra;

  static {
    Cofre.#senhaMestra = "12345";
  }

  constructor() {
    if (Cofre.#instancia) {
      return Cofre.#instancia;
    }

    Cofre.#instancia = this;
  }

  abrir(senha) {
    if (senha === Cofre.#senhaMestra) {
      console.log("Senha confere!");
    } else {
      console.log("Totalmente errado");
    }
  }
}

const cofre1 = new Cofre();
cofre1.abrir("12345");

const cofre2 = new Cofre();
cofre2.abrir("54321");

//===================================================================

/*
AULA 13. O Poder do this Estático e Sobrescrita Estática
Explicação Sucinta
Assim como métodos comuns podem ser sobrescritos, métodos static também podem. Além disso, dentro de um método estático, a palavra this não aponta para o objeto criado (instância), mas para a própria Classe. Isso permite criar "Fábricas" dentro da classe.

Debaixo do Capô
No JS, classes são objetos. Quando você define static metodo(), você está adicionando uma propriedade à função construtora. Quando uma classe Filha estende uma Pai, o protótipo da função Filha é a função Pai. Isso cria uma Cadeia de Protótipos Estática, permitindo que Filha.metodoEstatico() funcione mesmo que só esteja definido no Pai.
*/

class Animal {
  static categoria = "Ser Vivo";

  static criarGenerico() {
    // Aqui, 'this' é a classe que chamou o método
    return new this("Desconhecido");
  }

  constructor(nome) {
    this.nome = nome;
  }
}

class Gato extends Animal {}

const pet = Gato.criarGenerico();
console.log(pet instanceof Gato); // true! O 'this' estático entendeu que era Gato.

//===================================================================

/*
AULA 14. Private Branding (Verificação de campos privados)
Explicação Sucinta
Às vezes você precisa saber se um objeto realmente pertence a uma classe específica para acessar seus campos privados sem que o código quebre. Usamos o operador in junto com o campo privado (#campo in objeto).

Debaixo do Capô
Campos privados não são propriedades normais que aparecem no Object.keys(). Eles são armazenados em uma "tabela" interna do motor V8 vinculada à instância. Tentar acessar #campo em um objeto que não o possui gera um erro fatal. O operador in para campos privados verifica essa "marca" (branding) de forma segura.
*/

class CofreSecreto {
  #segredo = "shhh";

  static comparar(obj1, obj2) {
    // Verifica se 'obj2' tem a marca privada desta classe
    if (#segredo in obj1 && #segredo in obj2) {
      return obj1.#segredo === obj2.#segredo;
    }

    return false;
  }
}

// EXERCÍCIO 14. O Sistema de Identidade
class Documento {
  #idInterno;

  constructor() {
    this.#idInterno = "1a2b3c";
  }

  static validar(obj) {
    if (#idInterno in obj) {
      return true;
    }

    return false;
  }
}

class RG extends Documento {}
class Passaporte {}

console.log(Documento.validar(new RG()));
console.log(Documento.validar(new Passaporte()));
