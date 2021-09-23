var pacientes = document.querySelectorAll('.paciente')
var tabela = document.querySelector('table')

tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeOut')    //criado o fadeOUt no css
    var alvoEvento = event.target
    var paiDoAlvo = alvoEvento.parentNode  //tr = paciente = remover

    setTimeout(function(){      //vai deletar o paciente depois de 200ms
        paiDoAlvo.remove()  
    }, 200)             //200ms - 200 milisegundos
  
})



//pacientes.forEach(function(paciente){
//    paciente.addEventListener('dblclick', function(){ //dbl doubleclick - dois cliques 
//        this.remove()       //this. contexto. Atrela ao evento. 
//        //no caso this.remove() - o paciente que foi clicado vai ser removido
//    })
//})