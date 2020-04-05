listaRedesSociais = []

dados.redesSociais.forEach(dado => {
    listaRedesSociais.push(`
    <li title='${dado.nome}'><a href='${dado.link}' target="_blank"><i class='${dado.icone}'></i></a></li>
    `
    )
})

document.querySelector(".lista-redes-sociais").innerHTML = `${listaRedesSociais.join("")}`