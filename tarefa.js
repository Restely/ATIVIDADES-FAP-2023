
function saudacao() {
  console.log("Olá! Bem-vindo à calculadora!");
}


function soma(a, b) {
  return a + b;
}


const multiplicacao = (a, b) => a * b;


saudacao();

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

let resultadoSoma = soma(numero1, numero2);
console.log(`A soma é: ${resultadoSoma}`);

let resultadoMultiplicacao = multiplicacao(numero1, numero2);
console.log(`A multiplicação é: ${resultadoMultiplicacao}`);
