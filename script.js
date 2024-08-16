const chaves = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function criptografar() {
    const input = document.getElementById('input').value.toLowerCase();
    let resultado = '';

    for (let i = 0; i < input.length; i++) {
        resultado += chaves[input[i]] || input[i];
    }

    document.getElementById('output').value = resultado;
}

function removeSpecialChars() {
    const inputText = document.getElementById("input");
    inputText.value = input.value.replace(/[^a-z\s]/g, '');
}

function descriptografar() {
    const input = document.getElementById('input').value.toLowerCase();
    let resultado = input;

    for (const [chave, valor] of Object.entries(chaves)) {
        resultado = resultado.replaceAll(valor, chave);
    }

    document.getElementById('output').value = resultado;
}

function copiar() {
    const output = document.getElementById('output');
    output.select();
    output.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(output.value);
    alert('Texto copiado com sucesso!');
}