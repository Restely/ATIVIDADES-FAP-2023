try {
  // Solicitar números ao usuário
  let numero1 = parseFloat(prompt("Digite o primeiro número:"));
  let numero2 = parseFloat(prompt("Digite o segundo número:"));

  // Verificar se o segundo número é zero
  if (numero2 === 0) {
    throw new Error("Erro: Divisão por zero não é permitida.");
  }

  // Realizar a operação
  let resultado = numero1 / numero2;

  // Exibir o resultado
  console.log(`Resultado da divisão: ${resultado}`);
} catch (erro) {
  // Capturar e tratar a exceção
  console.error(`Erro: ${erro.message}`);
} finally {
  // Executar este bloco independentemente de exceções
  console.log("Bloco Finally: Este bloco sempre é executado.");
}
