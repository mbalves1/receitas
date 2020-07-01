$(document).ready(function(){

    $( "#adiciona" ).click(function() {
            
       
        $( ".divbotao" ).append( $(`<div class="form-inline mt-3 "> <label for="" class="input-group-text">Ingrediente </label>
        <input type="text" id="busca" class="form-control busca  form-inline"><button class="btn btn-danger mr-2" id="botaoInput"></button></div>`));
    });

    $(this).on('click', '#botaoInput', function(){
        $(this).parent().remove()

    })


})

