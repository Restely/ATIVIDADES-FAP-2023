
/*Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.*/

function nomeCompleto(){
 do {
nome = prompt ("Insira seu nome completo: ")
if (!nome){
  alert ("Campo vazio")
}
} while (!nome) 
return nome
}

function anoNascimento(){
 do{
  ano = parseInt(prompt ("Insira seu ano de nascimento (AAAA)"))
  if (isNaN(ano) || ano > 2021 || ano < 1922 || !ano) {
    alert ("Dados incorretos")
  }
 }while (isNaN(ano) || ano > 2021 || ano < 1922 || !ano)
   return ano
}

function calcularIdade(ano){
const esseAno = 2022
return (esseAno - anoNascimento())
}

function resultado(){
  document.write (nomeCompleto() + ", " + calcularIdade() + " anos.")
}

resultado()
