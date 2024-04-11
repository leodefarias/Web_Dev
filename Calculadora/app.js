function somar(){
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);
    let resultado = document.getElementById('resultado')
    let soma = n1 + n2;
    console.log(soma)
    resultado.innerText = soma;
}

function subtrair(){
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);
    let resultado = document.getElementById('resultado')
    let subtração = n1 - n2;
    console.log(subtração)
    resultado.innerText = subtração;
}

function dividir(){
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);
    if (numero2 === 0) {
        document.getElementById('resultado').innerText = 'Erro: divisão por zero';
    } else {
        let resultado = document.getElementById('resultado')
        let divisão = n1 / n2;
        console.log(divisão)
        resultado.innerText = divisão;
    }
}

function multiplicar(){
    let n1 = parseFloat(document.getElementById('numero1').value);
    let n2 = parseFloat(document.getElementById('numero2').value);
    let resultado = document.getElementById('resultado')
    let multiplicação = n1 * n2;
    console.log(multiplicação)
    resultado.innerText = multiplicação;
}