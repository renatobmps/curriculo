listaMaisCursos = []

dados.maisCursos.forEach(curso => {
    listaMaisCursos.push(`
    <li><a href="${curso.link}" target="_blank">${curso.nome}</a> - ${curso.instituicao} (${curso.ano}).</li>
    `
    )
})

document.querySelector(".lista-mais-cursos").innerHTML = `${listaMaisCursos.join("")}`

/*
let html = `
<li>
    <a href="${this.link}" target="_blank">${this.nome}</a> - ${this.instituicao} (${this.ano}).
</li>
`

criaLista("listaMaisCursos", dados.maisCursos, html, "lista-mais-cursos", this)
*/