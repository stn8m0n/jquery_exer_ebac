$(document).ready(function(){
   $("#send-button").click('submit'function(){
       $('#list').slideDown();
    });
    $("form").on("submit", function (e) {
        e.preventDefault();
        const novaTarefa = $("#novo").val(); // Corrigido para "novaTarefa"
        const novoItem = $(`<ol style="display:none">${novaTarefa}</ol>`); // Corrigido para `<li>`
        $("#lista-tarefas").append(novoItem); // Adicionando o novo item à lista
        $(novoItem).fadeIn();
      });
});