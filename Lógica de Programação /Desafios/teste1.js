somaS = 0 
somaC = 0
somaN = 0
somaB = 0
somaNulo = 0


    function sport (){
       
            for(i=0; i<6; i++){
            soma += i
            }
            return somaS
    }

    function santinhaC (){
        
        for(c=0; c<6; c++){
        soma += c
        }
        return somaC
    }

    function barbieD (){
       
        for(n=0; n<6; n++){
        soma += n
        }   
        return somaN 
    }

    function votoBranco(){
        
        for(b=0; b<6; b++){
        soma += b
        }
        return somaB
    }

    function Nulos(){
        if (votacao != 889 || votacao != 847 || votacao != 515 ){
            for(e; e<6; e++){
            soma += e
            }
            return somaNulo

        } if (isNaN (votacao)){
            alert("Voto inválido. Tente Novamente")
            eleicao()
        }
    }

    
    

function eleicao (){
    alert ("Candidatos: \n Seu Sport - 889 \n Santinha - 847 \n Barbie - 515 \n " )
    votacao = parseInt(prompt("DIGITE O NÚMERO DO SEU CANDIDATO PARA VOTAR: "))

    switch (votacao){

        case 889:
            sport()
            encerrar()
            break

        case 847:
           santinhaC()
           encerrar()
           break

        case 515: 
        barbieD()
        encerrar()
        break

        case 0:
            votoBranco()
            encerrar()
            break

        default :
           Nulos()
           encerrar()
           break
    }
 }

 for (let i=0; i<6; i++){ //para repetir apenas 5 vezes
    eleicao()
}
    console.log("Seu Sport:" + somaS)
    console.log ("Santinha: "+ somaC)
    console.log ("Dona Barbie: "+ somaN)
    console.log ("Branco: "+ somaB)
    console.log ("Nulos: "+ somaNulo)