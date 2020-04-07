listaFormacoes = []

dados.formacoes.forEach(formacao => {
    listaFormacoes.push(`
    <li>
        <p><strong>${formacao.nome}</strong> | ${formacao.instituicao}, ${formacao.ano}</p>
    </li>
    `
    )
})

document.querySelector(".lista-formacoes").innerHTML = `${listaFormacoes.join("")}`