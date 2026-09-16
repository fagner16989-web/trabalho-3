// Função que calcula o fatorial de um número
function CalcularFatorial(numero) {
    let resultado = 1;
    
    // Laço para multiplicar os números de 1 até o valor informado
    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }
    
    return resultado;
}

// Função chamada pelo botão da página Web
function executarAlgoritmo() {
    let entrada = document.getElementById("numeroInput").value;
    let numero = parseInt(entrada);
    
    if (isNaN(numero) || numero < 0) {
        document.getElementById("resultado").innerText = "Por favor, digite um número válido!";
        return;
    }

    let res = CalcularFatorial(numero);
    document.getElementById("resultado").innerText = "O fatorial de " + numero + " é: " + res;
}