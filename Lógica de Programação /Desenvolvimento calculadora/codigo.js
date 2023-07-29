function calculadora() {
     num1 = parseFloat(prompt("Digite o primeiro número:"))
     num2 = parseFloat(prompt("Digite o segundo número:"))
     operacao = parseInt(prompt("Escolha a operação:1-Soma. 2-Subtração. 3-Multiplicação. 4-Divisão"))
  
    if (operacao == 1) {
      return num1 + num2
    } 
    else if (operacao == 2) {
      return num1 - num2
    } 
    else if (operacao == 3) {
      return num1 * num2
    } 
    else if (operacao == 4) {
      if (num2 == 0) {
        return "erro"
      } else {
        return num1/num2  }
    } 
    else {
      return "0"
    }
  }

  resultado = calculadora()
  alert(resultado)
