function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacao").value;
    const resultado = document.getElementById("resultado");

    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Digite os dois números!";
        return;
    }

    let total;

    if (operacao === "soma") {
        total = num1 + num2;
    } else if (operacao === "subtracao") {
        total = num1 - num2;
    } else if (operacao === "multiplicacao") {
        total = num1 * num2;
    } else if (operacao === "divisao") {
        if (num2 === 0) {
            resultado.textContent = "Não é possível dividir por zero!";
            return;
        }
        total = num1 / num2;
    }

    resultado.textContent = "Resultado: " + total;
}