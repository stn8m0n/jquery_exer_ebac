$(document).ready(function(){
   $('#send-button').click('submit', function (){
       $('list').slideDown();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();

        const novaTarefa = $("#novo").val(); 
        const novoItem = $(`<li style="display:none">${novaTarefa}</li>`);

        $("#lista-tarefas").append(novoItem);
        $(novoItem).fadeIn();
      });
});