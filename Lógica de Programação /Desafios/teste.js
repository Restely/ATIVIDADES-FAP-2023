     class Investidor {
        constructor() {
            this.nomeUsuario = "";
            this.idadeUsuario = 0;
            this.rendaMensal = "";
            this.profissao = "";
            this.formacao = "";
            this.aporteMensalRendaFixa = 0;
            this.aporteMensalRendaVariavel = 0;
            this.taxaSelic = 13.25; // Taxa Selic atual (5% ao ano)
            this.tempoInvestimento = 10; // Tempo de investimento em anos
        }
    
        capturarDadosUsuario() {
            this.nomeUsuario = prompt(`Digite seu nome: `);
            this.idadeUsuario = this.obterNumero (`${this.nomeUsuario}, digite sua idade: `);
            this.rendaMensal = this.obterNumero(`${this.nomeUsuario}, digite sua renda mensal: `);
            this.profissao = prompt(`${this.nomeUsuario}, digite sua profissão: `);
            this.formacao = prompt(`${this.nomeUsuario}, digite sua formação acadêmica: `);
            this.aporteMensalRendaFixa = this.obterNumero(`${this.nomeUsuario}, digite o valor investindo mensalmente em renda fixa: `);
            this.aporteMensalRendaVariavel = this.obterNumero(`${this.nomeUsuario}, digite o valor investindo mensalmente em renda variável: `);
        }
         
        obterNumero(mensagem) {
            let numero
             while (isNaN(numero) || numero === null){
                  numero = parseFloat(prompt(mensagem))
             }
               return numero
             }  
    
        calcularRentabilidade() {
            const rentabilidadeRendaFixa = this.aporteMensalRendaFixa * Math.pow(1 + this.taxaSelic, this.tempoInvestimento) - this.aporteMensalRendaFixa;
            const rentabilidadeRendaVariavel = this.aporteMensalRendaVariavel * Math.pow(1 + this.taxaSelic, this.tempoInvestimento) - this.aporteMensalRendaVariavel;
    
            return {
                nomeUsuario: this.nomeUsuario,
                idadeUsuario: this.idadeUsuario,
                rendaMensal: this.rendaMensal,
                profissao: this.profissao,
                formacao: this.formacao,
                aporteMensalRendaFixa: this.aporteMensalRendaFixa,
                aporteMensalRendaVariavel: this.aporteMensalRendaVariavel,
                rentabilidadeRendaFixa,
                rentabilidadeRendaVariavel
            };
        }
    
        imprimirInformacoes() {
            const infoInvestimentos = this.calcularRentabilidade();
            console.log("Informações do Investidor:");
            console.log(infoInvestimentos);
        }
    }
        // Criar um objeto Investidor e capturar os dados do usuário
        const investidor = new Investidor();
        investidor.capturarDadosUsuario();
       
        // Calcular e imprimir as informações de rentabilidade
        investidor.imprimirInformacoes();