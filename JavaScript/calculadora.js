function calculadora() {
  num1 = parseFloat(prompt("Digite o primeiro número:"))
  num2 = parseFloat(prompt("Digite o segundo número:"))
  operacao = (prompt("Escolha a operação:(+)Soma. (-)Subtração. (*)Multiplicação. (/)Divisão"))

 if (operacao == "+") {
   return num1 + num2
 } 
 else if (operacao == "-") {
   return num1 - num2
 } 
 else if (operacao == "*") {
   return num1 * num2
 } 
 else if (operacao == "/") {
   if (num2 == 0) {
     return "erro"
   } else {
     return (num1/num2 + " , resto " + num1%num2) }
 } 
 
 }


console.log(calculadora())
