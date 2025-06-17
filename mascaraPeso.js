// Máscara para campos de peso (999.999 kg)
function aplicarMascaraPeso(elementId) {
    const pesoInput = document.getElementById(elementId);

    if (pesoInput) {
        const formatarValor = function() {
            let valor = pesoInput.value;

            // Remove qualquer caractere que não seja dígito ou ponto
            valor = valor.replace(/[^0-9.]/g, '');

            // Garante que só haja um ponto decimal
            const partes = valor.split('.');
            if (partes.length > 2) {
                valor = partes[0] + '.' + partes.slice(1).join('');
            }

            let formattedValue = '';

            if (valor.length > 0) {
                //Remove pontos extras para reformatar corretamente
                let numValor = valor.replace(/\./g, '');

                if (numValor.length <= 3) { // 999
                    formattedValue = numValor;
                } else if (numValor.length <= 6) { // 999.999
                    formattedValue = numValor.substring(0, numValor.length - 3) + '.' + numValor.substring(numValor.length - 3);
                } else { //Limita a 999.999
                    formattedValue = numValor.substring(0, 3) + '.' + numValor.substring(3, 6);
                }
            }

            pesoInput.value = formattedValue;
        };

        //Aplica a máscara no input (enquanto digita)
        pesoInput.addEventListener("input", formatarValor);

        //Aplica a máscara no blur (quando perde o foco), garantindo o formato final
        pesoInput.addEventListener("blur", formatarValor);

        //Chamada inicial para formatar o valor já existente ao carregar a página
        formatarValor();
    }
}
