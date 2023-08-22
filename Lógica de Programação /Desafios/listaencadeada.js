// Crie uma lista encadeada em que cada elemento representa uma pessoa.

// Ela precisa conter informações como nome, idade e referência ao filho dela.

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.filho = null;
    }
}

class ListaEncadeada {
    constructor() {
        this.head = null;
    }

    adicionarPessoa(nome, idade) {
        const novaPessoa = new Pessoa(nome, idade);
        
        if (!this.head) {
            this.head = novaPessoa;
        } else {
            let atual = this.head;
            while (atual.filho) {
                atual = atual.filho;
            }
            atual.filho = novaPessoa;
        }
    }

    exibirPessoas() {
        let atual = this.head;
        while (atual) {
            console.log(`Nome: ${atual.nome}, Idade: ${atual.idade}`);
            if (atual.filho) {
                console.log(`  Filho: ${atual.filho.nome}`);
            }
            atual = atual.filho;
        }
    }
}

const lista = new ListaEncadeada();
lista.adicionarPessoa("João", 73);
lista.adicionarPessoa("Elizangela", 42);
lista.adicionarPessoa("Samara", 22);
lista.adicionarPessoa("Joaquim", 1);

lista.exibirPessoas();