// Abaixo temos:
//	um array completo com todas as cirurgias (arrayItems) Abdominoplastia, Blefaroplastia Completa, Blefaroplastia Superior ou Inferior, etc
//	um array apenas com insumos desta cirurgia (item.subItems) anestesistas, auxiliares, hospital, etc
//	um array final com alguns

// Objetivo: Agrupar os subItems bem como seus valores e parcelas

var itensAgrupados = [];
$.each(arrayItems, function(i, item) {
	$.each(item.subItems, function(j, subitem) {
		// Verifica se já existe esse item no array itensAgrupados
		if (itensAgrupados.some(el => el.item === subitem.descricao)){
			// Pega a posição do item no array
			var indexauxiliar = itensAgrupados.findIndex(el => el.item === subitem.descricao);
			itensAgrupados[indexauxiliar].valor = parseFloat(subitem.valor) + parseFloat(itensAgrupados[indexauxiliar].valor);
		}
		else{
			itensAgrupados.push({
				"item": subitem.descricao,
				"parcelas": subitem.parcelas,
				"valor": parseFloat(subitem.valor)
			});
		}
	});
});