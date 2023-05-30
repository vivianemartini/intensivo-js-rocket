//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. 
//Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const number = 7


function isOdd(){
    if (number % 2 == 0) {
        console.log("É um número ímpar")
    } else {
        console.log("Não é um número ímpar")
    }    
}

isOdd()