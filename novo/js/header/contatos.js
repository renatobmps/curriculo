listaContatos = []

dados.contatos.forEach(contato => {
    listaContatos.push(`
    <li title="${contato.nome}">
        <a href="${contato.link}" target="_blank"><i class="${contato.icone}"></i>${contato.texto}</a>
    </li>
    `
    )
})

document.querySelector(".lista-contatos").innerHTML = `${listaContatos.join("")}`