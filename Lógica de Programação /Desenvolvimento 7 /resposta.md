Instruções do projeto
Um aluno do ensino fundamental precisa fazer como tarefa de casa a tabuada de alguns números inteiros, como nos exemplos em anexo.

Para ajudar esse aluno, você deve elaborar um algoritmo que solicite que seja digitado um número inteiro e que no final imprima o resultado da tabuada desse número.

------------RESOLUÇÃO------------

var num = prompt ("Digite um numero que gostaria de ver a tabuada: ")

for(i = 1; i <= 10; i++){
var resultado = num * i
document.write (num + " x " + i + " = " + resultado)
}
