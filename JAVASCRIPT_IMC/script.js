let input_peso = document.querySelector('.peso')
let input_altura = document.querySelector('.altura')
let input_nome = document.querySelector('.nome')
let botao = document.querySelector('.botao')
let resposta = document.querySelector('.resultado')

botao.addEventListener('click', calculo)

function calculo(){

    let peso = Number(input_peso.value)
    let altura = Number(input_altura.value)
    let nome = input_nome.value
    let imc = peso / (altura * altura)

    {

        if(imc <= 18){

            resposta.textContent = 'Olá ' + nome + ' Seu IMC é: ' + imc + ' = Baixo peso'

        }

        else if(imc <= 24.9){

            resposta.textContent = 'Olá ' + nome + ' Seu IMC é: ' + imc + ' = Peso normal'

        }

        else if(imc <= 29.9){

            resposta.textContent = 'Olá ' + nome + ' Seu IMC é: ' + imc + ' = Sobrepeso'

        }

        else if(imc <= 34.9){

            resposta.textContent = 'Olá ' + nome + ' Seu IMC é: ' + imc + ' = Obesidade grau I'

        }

        else if(imc <= 39.9){

            resposta.textContent = 'Olá ' + nome + ' Seu IMC é: ' + imc + ' = Obesidade grau II'

        }

        else{

            resposta.textContent = 'Olá ' + nome + ' Seu IMC é: ' + imc + ' = Obesidade grau III'

        }

    }

}

//me inspirei na att de java que fizemos por isso usei if e else.