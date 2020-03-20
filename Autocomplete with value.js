var inicial_crm_estado = "";

$("#txtEstadoCRM").autocomplete({
    source: "../uf-list.php",
    minLength: 0,
    select: function(event, ui) {
        $("#txtEstadoCRM").val(ui.item.codigo);
        $("#txtEstadoCRMDescricao").val(ui.item.descricao);
        // Caso a descrição seja muito grande, põe inteira no tooltip
        $("#txtEstadoCRMDescricao").attr("title", ui.item.descricao);
    },
    change: function(event, ui) {
        if ($.isBlank(ui.item)){
            $("#txtEstadoCRM").val("");
            $("#txtEstadoCRMDescricao").val("");
        }
    }
});
$("#txtEstadoCRM").on("autocompleteopen", function (){
    // O valor da variável inicial_crm_estado deve ser setado na Busca do registro
    if (!$.isBlank(inicial_crm_estado)){
        var menu = $(this).autocomplete("widget");
        for (var i = 0; i < $(menu[0].children).length; i++) {
            if(menu[0].children[i].innerText.substring(0,2).indexOf(inicial_crm_estado) > -1) {
                $(menu[0].children[i]).click();
                $("#txtEstadoCRMDescricao").focus();
                break;
            }
        }
        inicial_crm_estado = "";
    }
});

/// Essas linhas abaixo ficam após a Busca do registro
if (!$.isBlank(dados.crm_estado)){
    inicial_crm_estado = dados.crm_estado;
    $("#txtEstadoCRM").autocomplete("search", dados.crm_estado);
}