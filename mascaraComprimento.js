// Máscara para campos de comprimento (99.99 cm)
function aplicarMascaraComprimento(elementId) {
    const comprimentoInput = document.getElementById(elementId);

    if (comprimentoInput) {
        const formatarValor = function() {
            let valor = comprimentoInput.value;

            // Remove qualquer caractere que não seja dígito ou ponto
            valor = valor.replace(/[^0-9.]/g, '');

            // Garante que só haja um ponto decimal
            const partes = valor.split('.');
            if (partes.length > 2) {
                valor = partes[0] + '.' + partes.slice(1).join('');
            }

            let formattedValue = '';

            if (valor.length > 0) {
                // Remove pontos extras para reformatar corretamente
                let numValor = valor.replace(/\./g, '');

                if (numValor.length <= 2) { // 99
                    formattedValue = numValor;
                } else if (numValor.length <= 4) { // 99.99
                    formattedValue = numValor.substring(0, numValor.length - 2) + '.' + numValor.substring(numValor.length - 2);
                } else { // Limita a 99.99
                    formattedValue = numValor.substring(0, 2) + '.' + numValor.substring(2, 4);
                }
            }

            comprimentoInput.value = formattedValue;
        };

        // Aplica a máscara no input (enquanto digita)
        comprimentoInput.addEventListener("input", formatarValor);

        // Aplica a máscara no blur (quando perde o foco), garantindo o formato final
        comprimentoInput.addEventListener("blur", formatarValor);

        // Chamada inicial para formatar o valor já existente ao carregar a página
        formatarValor();
    }
}