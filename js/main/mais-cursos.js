listaMaisCursos = []

dados.maisCursos.forEach(curso => {
    listaMaisCursos.push(`
    <li><a href="${curso.link}" target="_blank">${curso.nome}</a> - ${curso.instituicao} (${curso.ano}).</li>
    `
    )
})

document.querySelector(".lista-mais-cursos").innerHTML = `${listaMaisCursos.join("")}`