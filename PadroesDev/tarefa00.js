// Interface comum para produtos
class Computer {
  constructor(ram, hdd, cpu, type) {
    this.ram = ram;
    this.hdd = hdd;
    this.cpu = cpu;
    this.type = type;
  }

  toString() {
    return `RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz, Type: ${this.type}`;
  }
}

// Fábrica abstrata
class ComputerFactory {
  createComputer(ram, hdd, cpu) {
    throw new Error("createComputer must be implemented by concrete factories");
  }
}

// Fábrica concreta para PCs
class PCFactory extends ComputerFactory {
  createComputer(ram, hdd, cpu) {
    return new Computer(ram, hdd, cpu, "PC");
  }
}

// Fábrica concreta para Servidores
class ServerFactory extends ComputerFactory {
  createComputer(ram, hdd, cpu) {
    return new Computer(ram, hdd, cpu, "Server");
  }
}

// Uso da fábrica
const pcFactory = new PCFactory();
const serverFactory = new ServerFactory();

const pc = pcFactory.createComputer(8, 500, 3.0);
const server = serverFactory.createComputer(16, 1000, 4.0);

console.log(pc.toString());
console.log(server.toString());
