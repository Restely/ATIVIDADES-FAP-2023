// Componente base: Sanduíche
class Sanduiche {
  cost() {
    return 0;
  }

  getDescription() {
    return 'Sanduíche';
  }
}

// Decorator base: IngredienteAdicional
class IngredienteAdicional extends Sanduiche {
  constructor(sanduiche) {
    super();
    this.sanduiche = sanduiche;
  }

  cost() {
    return this.sanduiche.cost();
  }

  getDescription() {
    return this.sanduiche.getDescription();
  }
}

// Concret Component: FrangoAssado
class FrangoAssado extends Sanduiche {
  cost() {
    return 4.50;
  }

  getDescription() {
    return 'Sanduíche de Frango Assado';
  }
}

// Concrete Decorator: Pepperoni
class Pepperoni extends IngredienteAdicional {
  cost() {
    return this.sanduiche.cost() + 0.99;
  }

  getDescription() {
    return `${this.sanduiche.getDescription()}, Pepperoni`;
  }
}

// Concrete Decorator: QueijoMussarelaRalado
class QueijoMussarelaRalado extends IngredienteAdicional {
  cost() {
    return this.sanduiche.cost() + 2.00;
  }

  getDescription() {
    return `${this.sanduiche.getDescription()}, Queijo Mussarela Ralado`;
  }
}

// Uso
const meuSanduiche = new FrangoAssado();
const sanduicheDecorado = new QueijoMussarelaRalado(new Pepperoni(meuSanduiche));

console.log(`${sanduicheDecorado.getDescription()} custa $${sanduicheDecorado.cost().toFixed(2)}.`);
