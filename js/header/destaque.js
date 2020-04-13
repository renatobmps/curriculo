function calculaIdade(data){
    nascimento = data.split("-")
    
    var nasc = `${nascimento[2]}/${nascimento[1]}/${nascimento[0]}`;
    console.log(`Nascimento: ${nasc}`);
    
    var dia = parseInt(new Date().getDate());
    var mes = parseInt(new Date().getMonth()+1);
    var ano = parseInt(new Date().getFullYear());
    console.log(`Hoje: ${dia}/${mes}/${ano}`)
    
    idade = ano - nascimento[0]
    if(mes == nascimento[1] && dia < nascimento[2] || mes < nascimento[1]) {
        idade = idade - 1
        console.log(`${ano} - ${nascimento[0]} - 1 = ${idade}`)
    }else{
        console.log(`${ano} - ${nascimento[0]} = ${idade}`)
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