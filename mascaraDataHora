// Máscara para campos de data (DD/MM/YYYY)
function aplicarMascaraData(elementId) {
    const dataInput = document.getElementById(elementId);

    if (dataInput) {
        const formatarValor = function() {
            let valor = dataInput.value;

            // Remove qualquer caractere que não seja dígito
            valor = valor.replace(/\D/g, '');

            let formattedValue = '';

            if (valor.length > 0) {
                if (valor.length <= 2) { // DD
                    formattedValue = valor;
                } else if (valor.length <= 4) { // DD/MM
                    formattedValue = valor.substring(0, 2) + '/' + valor.substring(2, 4);
                } else { // DD/MM/YYYY (limita em 8 dígitos para o ano)
                    formattedValue = valor.substring(0, 2) + '/' + valor.substring(2, 4) + '/' + valor.substring(4, 8);
                }
            }

            dataInput.value = formattedValue;
        };

        // Aplica a máscara no input (enquanto digita)
        dataInput.addEventListener("input", formatarValor);

        // Aplica a máscara no blur (quando perde o foco), garantindo o formato final
        dataInput.addEventListener("blur", formatarValor);

        // Chamada inicial para formatar o valor já existente ao carregar a página
        formatarValor();
    }
}

// Máscara para campos de hora (HH:MI)
function aplicarMascaraHora(elementId) {
    const horaInput = document.getElementById(elementId);

    if (horaInput) {
        const formatarValor = function() {
            let valor = horaInput.value;

            // Remove qualquer caractere que não seja dígito
            valor = valor.replace(/\D/g, '');

            let formattedValue = '';

            if (valor.length > 0) {
                if (valor.length <= 2) { // HH
                    formattedValue = valor;
                } else { // HH:MI (limita em 4 dígitos)
                    formattedValue = valor.substring(0, 2) + ':' + valor.substring(2, 4);
                }
            }

            horaInput.value = formattedValue;
        };

        // Aplica a máscara no input (enquanto digita)
        horaInput.addEventListener("input", formatarValor);

        // Aplica a máscara no blur (quando perde o foco), garantindo o formato final
        horaInput.addEventListener("blur", formatarValor);

        // Chamada inicial para formatar o valor já existente ao carregar a página
        formatarValor();
    }
}