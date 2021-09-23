var titulo = document.querySelector('.primeirotitulo')
titulo.innerHTML = "Aparecida Nutricionista"


var pacientes = document.querySelectorAll('.paciente')

for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector('.info-peso')
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector('.info-altura')
    var altura = tdAltura.textContent

    var tdImc = paciente.querySelector('.info-imc')

    var pesoEhValido = validaPeso(peso)  //true ou false
    var alturaEhValida = validaAltura(altura)

    if(!pesoEhValido) {
        console.log('Peso inválido')
        pesoEhValido = false
        tdImc.textContent = 'Peso inválido'
        paciente.classList.add('paciente-invalido')         //foi criado no css um paciente-invalido com backgroundColor red
    }
    if(!alturaEhValida) {
        console.log('Altura inválida')
        alturaEhValida = false
        tdImc.textContent = 'Altura Inválida'
        paciente.style.backgroundColor = 'orange'       //HardCoded. Não é boa pratica. Já que estilo fica no css! 
    }

    if(alturaEhValida && pesoEhValido) {
        var imc = calculaIMC(peso, altura)
        tdImc.textContent = imc
    }
}

function validaPeso(peso) {
    if(peso >= 0 && peso < 1000) {
        return true
    } else {
        return false
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.0) {
        return true
    } else {
        return false
    }
}

function calculaIMC(peso, altura) {     //vamos usar em varias partes do codigo
    var imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}