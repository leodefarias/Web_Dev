let valorFinal;

function calcular() {
    let livros = parseInt(document.getElementById('livros').value);
    valorFinal = livros * precoUnitario;
    console.log(valorFinal)
    if (livros > 7) {
        precoUnitario = 22;
    } else {
        precoUnitario = 15;
    }
    
    let resultado = `O valor final é R$ ${livros * precoUnitario},00`;
    document.getElementById('total').innerText= resultado;
}