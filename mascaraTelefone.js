//máscara para campos de telefone:
function aplicarMascaraTelefone(elementId) {
    const telefoneInput = document.getElementById(elementId);

    if (telefoneInput) {
        const formatarValor = function() {
            let valor = telefoneInput.value;

            //remove qualquer caractere não numérico
            valor = valor.replace(/\D/g, '');

            let valorFormatado = '';

            //aplica a máscara base: (99) 9 ou (99) 99...
            if (valor.length > 0) {
                valorFormatado = '(' + valor.substring(0, 2);
                if (valor.length > 2) {
                    valorFormatado += ') ' + valor.substring(2, 7); 
                }
                if (valor.length > 7) {
                    //decide se é 9 dígitos (celular) ou 8 dígitos (fixo)
                    if (valor.length === 11) { //celular (DDD + 5 dígitos iniciais + 4 finais)
                        valorFormatado = '(' + valor.substring(0, 2) + ') ' + valor.substring(2, 7) + '-' + valor.substring(7, 11);
                    } else if (valor.length === 10) { //fixo (DDD + 4 dígitos iniciais + 4 finais)
                        valorFormatado = '(' + valor.substring(0, 2) + ') ' + valor.substring(2, 6) + '-' + valor.substring(6, 10);
                    } else { //ainda digitando, ou menos de 10/11 dígitos
                        //mantém a parte atual para dígitos intermediários
                        valorFormatado = '(' + valor.substring(0, 2) + ') ' + valor.substring(2);
                    }
                }
            }
            
            telefoneInput.value = valorFormatado;
        };

        telefoneInput.addEventListener("input", formatarValor);

        telefoneInput.addEventListener("blur", formatarValor);

        formatarValor(); //chamada inicial caso o valor já exista na página
    }
}