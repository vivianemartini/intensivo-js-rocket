//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. 
//Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const number = 6


function isEven(){
    if (number % 2 == 0) {
        console.log("É um número par")
    } else {
        console.log("Não é um número par")
    }    
}

isEven()