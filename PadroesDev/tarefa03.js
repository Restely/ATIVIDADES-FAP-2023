// Interface alvo: Galinha
class Galinha {
  cacarejar() {
    console.log('Cocoricó!');
  }
}

// Adaptee: Pato
class Pato {
  grasnar() {
    console.log('Quack!');
  }
  voar() {
    console.log('Voando como um pato!');
  }
}

// Adaptador: AdaptadorPato
class AdaptadorPato extends Galinha {
  constructor(pato) {
    super();
    this.pato = pato;
  }

  cacarejar() {
    this.pato.grasnar(); // O método grasnar do pato será usado como cacarejar
  }
}

// Cliente: AdaptadorPatoDemo
class AdaptadorPatoDemo {
  static testarAdaptador(adaptador) {
    console.log('Testando o adaptador:');
    adaptador.cacarejar(); // Chamando o método cacarejar do adaptador
  }
}

// Uso
const pato = new Pato(); // Objeto do tipo Pato
const adaptador = new AdaptadorPato(pato); // Adaptador que permite que o pato seja usado como uma galinha

AdaptadorPatoDemo.testarAdaptador(adaptador);

