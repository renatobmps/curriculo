let site = document.querySelector("#site")
listaSite = []
let header = document.querySelector("header")
listaHeader = []
let main = document.querySelector("main")
listaMain = []
let footer = document.querySelector("footer")
listaFooter = []

function limpa() {
    document.querySelector("#formacao").classList.add("invisivel")
    document.querySelector("#experiencia").classList.add("invisivel")
    document.querySelector("#qualificacoes").classList.add("invisivel")
    document.querySelector("#mais-cursos").classList.add("invisivel")

    document.querySelector("#botao-formacao").classList.remove("active")
    document.querySelector("#botao-experiencia").classList.remove("active")
    document.querySelector("#botao-qualificacoes").classList.remove("active")
    document.querySelector("#botao-mais-cursos").classList.remove("active")
}

document.querySelector("#botao-formacao").addEventListener("click", () => {
    limpa()
    document.querySelector("#formacao").classList.remove("invisivel")
    document.querySelector("#botao-formacao").classList.add("active")
})
document.querySelector("#botao-experiencia").addEventListener("click", () => {
    limpa()
    document.querySelector("#experiencia").classList.remove("invisivel")
    document.querySelector("#botao-experiencia").classList.add("active")
})
document.querySelector("#botao-qualificacoes").addEventListener("click", () => {
    limpa()
    document.querySelector("#qualificacoes").classList.remove("invisivel")
    document.querySelector("#botao-qualificacoes").classList.add("active")
})
document.querySelector("#botao-mais-cursos").addEventListener("click", () => {
    limpa()
    document.querySelector("#mais-cursos").classList.remove("invisivel")
    document.querySelector("#botao-mais-cursos").classList.add("active")
})