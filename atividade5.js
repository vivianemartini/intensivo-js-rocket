//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. 
//Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let boolean  = true


function isBoolean(){
    if (typeof boolean == 'boolean') {
        console.log("É um booleano")
    } else {
        console.log("Não é um booleano")
    }    
}

isBoolean()
