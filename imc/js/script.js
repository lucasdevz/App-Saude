//Dom

const nome = document.querySelector('#nome')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')

//Eventos

botao.addEventListener('click', imc)

//Função

function imc(){
    n = nome.value
    p = Number(peso.value)
    a = Number(altura.value)

    calculo = p/(a*a)

    if(calculo<18.5){
        situacao = 'Magreza'
    }
    else if(calculo>=18.5 && calculo<25){
        situacao = 'Parabéns, peso ideal'
    }
    else if(calculo>=25 && calculo<30){
        situacao = 'Sobrepeso'
    }
    else{
        situacao = 'obesidade'
    }

    resultado.innerHTML = `Sr(a) ${n} o seu imc é ${calculo.toFixed(1)} a sua situação é de ${situacao}`

}