function sortear() {
    opcoes = ['pedra', 'papel', 'tesoura']
    let numero = Number((Math.random() * opcoes.length()))
    computador = opcoes[numero]
}

function jogar(escolha) {
    sortear()
    if (escolha === computador) {
        resultado.innerHTML = 'empate';
    } else if ((escolha === 'pedra' && computador === 'tesoura') ||
               (escolha === 'papel' && computador === 'pedra') ||
               (escolha === 'tesoura' && computador === 'papel')) {
        resultado.innerHTML = `Jogador ganhou(${escolha})`;
    } else {
        resultado.innerHTML = `Jogador perdeu(${escolha})`;
    }
}