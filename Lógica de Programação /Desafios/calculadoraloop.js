/*Faça uma função calculadora que os números e as operações serão realizadas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair
Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.
Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 
É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. */

function calculadora() {
let operacao

while (operacao != 0){

operacao = parseInt(prompt("Escolha a operação:1-Soma. 2-Subtração. 3-Multiplicação. 4-Divisão.  0-SAIR"))

if(operacao == 0){
  console.log ("Você saiu...")
  break
} 
else if (operacao > 4){
  console.log ("Essa operação não existe")
  calculadora()
  break
}

num1 = parseFloat(prompt("Digite o primeiro número:"))
num2 = parseFloat(prompt("Digite o segundo número:"))
  
   if (operacao == 1) {
     console.log (num1 + num2)
   } 
   else if (operacao == 2) {
     console.log (num1 - num2)
   } 
   else if (operacao == 3) {
    console.log (num1 * num2)
   } 
   else if (operacao == 4) {
     if (num2 == 0) {
      console.log ("erro")
     } else {
      console.log (num1/num2)  }
   } 
  }
}

calculadora();
  
 

