//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. 
//Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let string  = 'hello'


function isString(){
    if (typeof string == 'string') {
        console.log("É uma string")
    } else {
        console.log("Não é uma string")
    }    
}

isString()
