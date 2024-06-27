function displaynum(value) {
    const inputField = document.querySelector('input[name="texto1"]');
    const currentValue = inputField.value;

    if (value === '=') {
        // Avalie a expressão e atualize o campo de entrada com o resultado
        try {
            const result = eval(currentValue);
            inputField.value = result;
        } catch (error) {
            inputField.value = 'Erro';
        }
    } else {
        // Adicione o valor do botão ao campo de entrada
        inputField.value += value;
    }
}