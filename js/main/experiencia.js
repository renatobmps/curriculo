listaExperiencias = []

dados.experiencias.forEach(experiencia => {
    listaExperiencias.push(`
    <li>
        <p><strong>${experiencia.inicio} - ${experiencia.fim}</strong> | ${experiencia.empresa}</p>
        <p><strong>Cargo</strong>: ${experiencia.cargo}</p>
        <p><strong>Principais atividades</strong>: ${experiencia.atividades}</p>
    </li>
    `
    )
})

document.querySelector(".lista-experiencias").innerHTML = `${listaExperiencias.join("")}`