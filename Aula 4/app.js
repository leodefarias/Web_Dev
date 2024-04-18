function calcular() {
    const inputElement = document.getElementById('livros');
    const quantidadeLivros = parseInt(inputElement.value);
  
    if (isNaN(quantidadeLivros)) {
        console.log('Valor não válido');
        document.getElementById('total').innerText = 'Valor não válido'
        return;
    }
  
    let resultado;
    if (quantidadeLivros < 7) {
        resultado = quantidadeLivros * 22;
        document.getElementById('total').innerText = resultado
        return
    } else {
         resultado = quantidadeLivros * 15;
         document.getElementById('total').innerText = resultado
         return
    }
}