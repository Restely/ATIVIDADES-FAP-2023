candidatoA=0
candidatoB=0
candidatoC=0
branco=0
nulos=0

function eleicao (){

 votacao = parseInt(prompt("Candidato A : 889 \n Candidato B : 847 \n Candidato C - 515 \n Para votar em branco : 0 \n DIGITE O NÚMERO DO SEU CANDIDATO PARA VOTAR: "))

 if(isNaN(votacao)){
     alert("Voto inválido. Tente novamente")
     eleicao()
     return
 }

 switch (votacao){

     case 889:
         candidatoA++
         break

     case 847:
        candidatoB++
        break

     case 515: 
        candidatoC++
     break

     case 0:
         branco++
         break

     default :
        nulos++
        break
 }
 resultado()
}

function resultado(){
 totalCandidatoA = candidatoA 
 totalCandidatoB = candidatoB 
 totalCandidatoC = candidatoC 
 totalBrancos = branco
 totalNulos = nulos
 vencedor = ""
 maiorVotos = 0

 if (totalCandidatoA > maiorVotos){
 vencedor = candidatoA
 maiorVotos = totalCandidatoA
 }
 if (totalCandidatoB > maiorVotos){
 vencedor = candidatoB
 maiorVotos = totalCandidatoB
 }
 if (totalCandidatoC > maiorVotos){
 vencedor = candidatoC
 maiorVotos = totalCandidatoC
 }
 if (totalBrancos > maiorVotos){
 vencedor = branco
 maiorVotos = totalBrancos
 }
 if(totalNulos > maiorVotos){
 vencedor = nulos
 }

 alert ("Resultado: \n Vencedor: " + vencedor + "\n Candidato A: " + totalCandidatoA + "\n Candidato B: " + totalCandidatoB + "\n Candidato C: " + totalCandidatoC + "\n Brancos: " + totalBrancos + "\n Nulos: " + totalNulos )

}

for (i=0; i<11; i++){ //para repetir 10x e definir o resultado
eleicao()
}