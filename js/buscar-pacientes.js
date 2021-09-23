//AJAX Importar / API / Json
var butaoAdicionar = document.querySelector('#buscar-paciente')
butaoAdicionar.addEventListener('click', function(){
    console.log('clicou')
    
    var xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')   //vai dar get no link
    //o load vai ser quando enviar a requisição e ter resposta (load) vai fazer a funcao xhr.responseText(= carregar o texto )
    xhr.addEventListener('load', function(){

        var erroAjax = document.querySelector("#erro-ajax")
        if(xhr.status == 200) {     //Se tudo ocorrer bem < status 200
            erroAjax.classList.add('invisivel')
            var resposta = xhr.responseText     //Typeof String
            var pacientes = JSON.parse(resposta)   //vai ler um json e transformar em js. Nesse caso um array
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente)
            });
        } else {
            erroAjax.classList.remove("invisivel")
            console.log(xhr.status) //Se der algum error
            console.log(xhr.responseText)

        }   
    })
    xhr.send()
})