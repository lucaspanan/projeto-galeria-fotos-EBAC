$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
})
$('#Cancelar').click(function(){
    $('form').slideUp();
})

    $('form').on('submit' , function(e){
        e.preventDefault();
        const NovaImg = $('#img-nova').val();
        const NovoItem= $('<li style= "display: none;"></li>');
        $(`<img src="${NovaImg}" />`).appendTo(NovoItem);
        $(`
            <div class="img-link"> 
            <a href="${NovaImg}" target="_blank" title="ver imagem no tamanho real">ver imagem</a> </div>`).appendTo(NovoItem);

        $(NovoItem).appendTo('ul');
        $(NovoItem).fadeIn()
        $('#img-nova').val('') 
    });
});
