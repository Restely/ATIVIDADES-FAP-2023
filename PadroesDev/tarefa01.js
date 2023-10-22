// Classe abstrata Veículo
class Veiculo {
  constructor(modelo, marca, cor, numeroRodas) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numeroRodas = numeroRodas;
  }

  clone() {
    // Método clone utilizando o padrão Prototype
    return Object.create(this);
  }

  represent() {
    // Método represent para imprimir os atributos
    console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}`);
  }
}

// Subclasse Carro que herda de Veiculo
class Carro extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
    super(modelo, marca, cor, numeroRodas);
    this.numeroPortas = numeroPortas;
  }

  represent() {
    // Sobrescrevendo o método represent para incluir o número de portas
    console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}, Número de Portas: ${this.numeroPortas}`);
  }
}

// Subclasse Moto que herda de Veiculo
class Moto extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, cilindradas) {
    super(modelo, marca, cor, numeroRodas);
    this.cilindradas = cilindradas;
  }

  represent() {
    // Sobrescrevendo o método represent para incluir as cilindradas
    console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}, Cilindradas: ${this.cilindradas}`);
  }
}

// Classe Aplicação
class Aplicacao {
  constructor() {
    this.veiculos = [];
  }

  criarVeiculos() {
    // Criando seis veículos com dois tipos
    const carro1 = new Carro("Civic", "Honda", "Preto", 4, 4);
    const carro2 = new Carro("Fusca", "Volkswagen", "Azul", 4, 2);
    const moto1 = new Moto("CBR600", "Honda", "Vermelho", 2, 600);
    const moto2 = new Moto("Harley-Davidson", "Harley", "Preto", 2, 1200);
    const veiculo1 = new Veiculo("Model S", "Tesla", "Branco", 4);
    const veiculo2 = new Veiculo("X5", "BMW", "Prata", 4);

    this.veiculos.push(carro1, carro2, moto1, moto2, veiculo1, veiculo2);
  }

  imprimirVeiculos() {
    // Imprimindo os veículos
    this.veiculos.forEach((veiculo) => {
      veiculo.represent();
    });
  }
}

// Uso da aplicação
const app = new Aplicacao();
app.criarVeiculos();
app.imprimirVeiculos();
