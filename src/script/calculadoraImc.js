const calcular = document.getElementById('calcular')


function imc(){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(1)

        let classificacao = ''

        if (valorIMC < 18.5){
            classificacao = 'abaixo peso'
        }else if (valorIMC < 24.9){
            classificacao = 'peso normal'
        }else if (valorIMC < 29.9){
            classificacao = 'acima do peso'
        }else if(valorIMC < 34.9){
            classificacao = 'obeso  1'
        }else if(valorIMC < 39.9){
            classificacao = 'obeso  2'
        }else{
            classificacao = 'obeso  3'
        }

        resultado.textContent = `${nome} você pesa ${peso}kg e tem ${altura} de altura, 
        por esse motivo seu IMC é de ${valorIMC} esta ${classificacao}`
    }else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }
}

calcular.addEventListener('click', imc)