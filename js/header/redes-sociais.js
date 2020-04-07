listaRedesSociais = []

dados.redesSociais.forEach(dado => {
    listaRedesSociais.push(`
    <li title='${dado.nome}'><a href='${dado.link}' target="_blank" class="rede-${dado.nome}"><i class='${dado.icone}'></i></a></li>
    `
    )
})

document.querySelector(".lista-redes-sociais").innerHTML = `${listaRedesSociais.join("")}`

dados.redesSociais.forEach(dado => {
    document.querySelector(`.rede-${dado.nome}`).addEventListener("mouseover", () => {
        document.querySelector(`.rede-${dado.nome}`).style = `color: ${dado.cor}`
    })
})
dados.redesSociais.forEach(dado => {
    document.querySelector(`.rede-${dado.nome}`).addEventListener("mouseout", () => {
        document.querySelector(`.rede-${dado.nome}`).style = `color: inerit; transition: .5s all`
    })
})