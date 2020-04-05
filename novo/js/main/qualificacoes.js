listaQualificacoes = []

dados.qualificacoes.forEach(qualificacao => {
    listaQualificacoes.push(`
    <li>${qualificacao.conteudo}</li>
    `
    )
})

document.querySelector(".lista-qualificacoes").innerHTML = `${listaQualificacoes.join("")}`