function calcular() {
    tabuada = []
    let numero = document.getElementById('numero').value;
    for(i=1; i<=10; i++) {
        resultado = numero * i
        tabuada.push(`<h3>${numero} x ${i} = ${resultado}</h3>`)
    }
    tabuada = (tabuada.toString()).replaceAll(',' , ' ')
    
    tabela.innerHTML = tabuada
}