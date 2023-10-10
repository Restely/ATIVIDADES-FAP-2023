function menuCalculadora() {
 alert("Escolha a operação:(1)Soma. (2)Subtração. (3)Multiplicação. (4)Divisão")
}

function calcular(num1,num2,operacao) {
  switch (operacao) {
    case 1:
      return num1 + num2
    case 2:
      return num1 - num2;
    case 3:
      return num1 * num2;
    case 4:
      if(num2 !== 0) {
       return num1 / num2;
      } else {
        return "Indefinido."
      }
    default:
      return "Opção inválida";
 } 
 }

 num1 = parseFloat(prompt("Insira o valor:"))
 num2 = parseFloat(prompt("Insira o segundo valor:"))
 menuCalculadora();

 operacao = parseInt(prompt("Insira a operação:"))
 console.log(calcular(num1,num2,operacao))
 
