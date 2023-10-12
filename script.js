function verificadorRanking(vitorias, derrotas) {
    let rankingVitorias = vitorias - derrotas
    return rankingVitorias
}

function verificadorNivel(rankingVitorias) {
    let nivel = ' '
    if (rankingVitorias <= 10) {
        nivel = 'Ferro'
        return nivel
    } else if (rankingVitorias > 10 && rankingVitorias <= 20) {
        nivel = 'Bronze'
        return nivel
    } else if (rankingVitorias > 20 && rankingVitorias <= 50) {
        nivel = 'Prata'
        return nivel
    } else if (rankingVitorias > 50 && rankingVitorias <= 80) {
        nivel = 'Ouro'
        return nivel
    } else if (rankingVitorias > 80 && rankingVitorias <= 90) {
        nivel = 'Diamante'
        return nivel
    } else if (rankingVitorias > 90 && rankingVitorias <= 100) {
        nivel = 'Lendário'
        return nivel
    } else {
        nivel = 'Imortal'
        return nivel
    }
}

let listaHerois = [['Superman', 'Batman', 'Mulher Maravilha', 'Lanterna Verde', 'Flash'], [151, 120, 105, 80, 85], [50, 40, 35, 60, 65]]

for (let i = 0; i < listaHerois[0].length; i++) {
    let heroi = listaHerois[0][i]
    let vitorias = listaHerois[1][i]
    let derrotas = listaHerois[2][i]
    let rankingVitorias = verificadorRanking(vitorias, derrotas)
    let nivel = verificadorNivel(rankingVitorias)
    console.log(`${heroi} tem ${rankingVitorias} vitorias e está no nivel ${nivel}.`)
}

console.log('>>>>>>>>>> Fim do Programa! <<<<<<<<<<')