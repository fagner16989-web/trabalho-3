// Variável global para controlar a opção selecionada
let algoritmoAtual = 'primo';

// Atualiza a interface gráfica ao mudar de algoritmo
function selecionarAlgoritmo(alg, btnElement) {
    algoritmoAtual = alg;

    // Atualiza o estado dos botões gráficos
    document.querySelectorAll('.alg-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    // Elementos de input
    const groupVal1 = document.getElementById('group-val1');
    const groupVal2 = document.getElementById('group-val2');
    const labelVal1 = document.getElementById('label-val1');
    const labelVal2 = document.getElementById('label-val2');
    const inputVal1 = document.getElementById('input-val1');

    groupVal2.classList.add('hidden');

    if (alg === 'primo' || alg === 'somatorio' || alg === 'fibonacci') {
        labelVal1.innerText = "Digite um número inteiro:";
        inputVal1.placeholder = "Ex: 10";
    } else if (alg === 'mdc') {
        groupVal2.classList.remove('hidden');
        labelVal1.innerText = "Primeiro Número (A):";
        labelVal2.innerText = "Segundo Número (B):";
        inputVal1.placeholder = "Ex: 24";
    } else if (alg === 'quicksort' || alg === 'contagem') {
        labelVal1.innerText = "Digite os números separados por vírgula:";
        inputVal1.placeholder = "Ex: 34, 7, 23, 32, 5, 62";
    }
}


// ==========================================
// MÓDULO BACKEND JAVASCRIPT / NODE.JS
// ==========================================
const BackendJS = {
    ehPrimo: function(n) {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    },

    calcularSomatorio: function(n) {
        let soma = 0;
        for (let i = 1; i <= n; i++) soma += i;
        return soma;
    },

    calcularFibonacci: function(n) {
        if (n <= 0) return "0";
        let a = 0, b = 1, seq = [0];
        for (let i = 1; i < n; i++) {
            seq.push(b);
            let temp = a + b;
            a = b;
            b = temp;
        }
        return seq.join(", ");
    },

    calcularMDC: function(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    },

    quicksort: function(arr) {
        if (arr.length <= 1) return arr;
        let pivo = arr[arr.length - 1];
        let esquerdos = [];
        let direitos = [];
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivo) esquerdos.push(arr[i]);
            else direitos.push(arr[i]);
        }
        return [...this.quicksort(esquerdos), pivo, ...this.quicksort(direitos)];
    },

    contarElementos: function(arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) count++;
        return count;
    }
};


// ==========================================
// FUNÇÃO DE EXECUÇÃO PRINCIPAL
// ==========================================
function executarBackend() {
    const backendSelecionado = document.querySelector('input[name="backend"]:checked').value;
    const val1 = document.getElementById('input-val1').value.trim();
    const val2 = document.getElementById('input-val2').value.trim();
    const output = document.getElementById('output-result');

    if (!val1) {
        output.innerText = "Por favor, preencha o campo de entrada!";
        return;
    }

    let res = "";
    const prefixoEnv = backendSelecionado === "java" ? "[BACKEND JAVA]: " : "[BACKEND JS]: ";

    // Execução dos Algoritmos (no vídeo de debug, faça o "Step Into" F11 aqui)
    switch (algoritmoAtual) {
        case 'primo':
            const numPrimo = parseInt(val1);
            res = `${numPrimo} ${BackendJS.ehPrimo(numPrimo) ? "é PRIMO" : "NÃO é primo"}`;
            break;

        case 'somatorio':
            const numSoma = parseInt(val1);
            res = `Somatório (1 a ${numSoma}) = ${BackendJS.calcularSomatorio(numSoma)}`;
            break;

        case 'fibonacci':
            const numFib = parseInt(val1);
            res = `Fibonacci (${numFib} termos): ${BackendJS.calcularFibonacci(numFib)}`;
            break;

        case 'mdc':
            const numA = parseInt(val1);
            const numB = parseInt(val2);
            if (isNaN(numB)) { output.innerText = "Insira o segundo número!"; return; }
            res = `MDC (${numA}, ${numB}) = ${BackendJS.calcularMDC(numA, numB)}`;
            break;

        case 'quicksort':
            const arrSort = val1.split(',').map(x => parseInt(x.trim())).filter(x => !isNaN(x));
            res = `Lista Ordenada: [ ${BackendJS.quicksort(arrSort).join(', ')} ]`;
            break;

        case 'contagem':
            const arrCount = val1.split(',').map(x => x.trim()).filter(x => x !== "");
            res = `Total de Elementos na Lista: ${BackendJS.contarElementos(arrCount)}`;
            break;
    }

    output.innerText = prefixoEnv + res;
}
