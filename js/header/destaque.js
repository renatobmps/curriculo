function calculaIdade(data){
    nascimento = data.split("-")
    
    var nasc = `${nascimento[2]}/${nascimento[1]}/${nascimento[0]}`;
    console.log(`Nascimento: ${nasc}`);
    
    var dia = parseInt(new Date().getDate());
    var mes = parseInt(new Date().getMonth()+1);
    var ano = parseInt(new Date().getFullYear());
    console.log(`Hoje: ${dia}/${mes}/${ano}`)
    
    let idade = parseInt(0);
    
    if (mes >= nascimento[1]) {
        console.log("Mês atual é maior ou igual ao mes de nascimento")
        if (mes = nascimento[1] && dia <= nascimento[2]) {
            console.log("mes atual é igual ao mês de nasc. e o dia atual é menor ou igal ao dia de nascimento")
            semAniversario();
        } else {
            console.log("O mês atual é diferente do mês de nascimento ou o dia atual é maior que o dia do nascimento")
            comAniversario();
        }
    } else {
        console.log("O mês atual é menor do que o mês de nascimento")
        semAniversario();
    }
    function comAniversario() {
        idade = ano - nascimento[0];
        console.log(`${ano} - ${nascimento[0]} = ${idade}`)
    }
    function semAniversario() {
        idade = (ano - nascimento[0]) - 1;
        console.log(`${ano} - ${nascimento[0]} - 1 = ${idade}`)
    }
    
    return idade;
}

idade = calculaIdade(dados.pessoais.nascimento)

document.querySelector(".lista-destaque").innerHTML = `
<img class="img-thumbnail" src="img/${dados.pessoais.foto}" alt="Foto de ${dados.pessoais.nome}">
<h1 id="nome">${dados.pessoais.nome}</h1>
<p>${dados.pessoais.nascionalidade}, ${dados.pessoais.civil}, <span id="idade">${idade}</span> anos</p>
<p>${dados.pessoais.endereco}</p>

<h2>Objetivo<i class="material-icons">check</i></h2>
<p class="objetivo"><strong>${dados.pessoais.objetivo}</strong></p>
`