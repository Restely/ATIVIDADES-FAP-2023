// Objeto Material: Carro
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  cor: "Prata",
  ligar: function() {
    console.log("O carro está ligado.");
  },
  acelerar: function() {
    console.log("Acelerando o carro.");
  },
  frear: function() {
    console.log("Freando o carro.");
  }
};

// Objeto Material: Livro
const livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  numPaginas: 1000,
  abrir: function() {
    console.log("Abrindo o livro.");
  },
  fechar: function() {
    console.log("Fechando o livro.");
  },
  ler: function() {
    console.log("Lendo o livro.");
  }
};

// Objeto Abstrato: Conta Bancária
const contaBancaria = {
  numeroConta: "123456",
  saldo: 1000,
  titular: "João",
  depositar: function(valor) {
    this.saldo += valor;
    console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);
  },
  sacar: function(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
    } else {
      console.log("Saldo insuficiente para realizar o saque.");
    }
  },
  consultarSaldo: function() {
    console.log(`Saldo atual: ${this.saldo}`);
  }
};

// Objeto Abstrato: Forma Geométrica
const formaGeometrica = {
  tipo: "Quadrado",
  area: 25,
  perimetro: 20,
  calcularArea: function() {
    console.log(`Área do ${this.tipo}: ${this.area}`);
  },
  calcularPerimetro: function() {
    console.log(`Perímetro do ${this.tipo}: ${this.perimetro}`);
  },
  desenhar: function() {
    console.log(`Desenhando o ${this.tipo}.`);
  }
};

// Demonstração
carro.ligar();
livro.ler();
contaBancaria.depositar(500);
formaGeometrica.calcularArea();
