var data = new Date();
var dia = parseInt(data.getDate());
var mes = parseInt(data.getMonth()+1);
var ano = parseInt(data.getFullYear());
console.log("Data atual: "+dia+"/"+mes+"/"+ano);
var diaNasc = parseInt(16);
var mesNasc = parseInt(11);
var anoNasc = parseInt(1993);
console.log("Nascimento: "+diaNasc+"/"+mesNasc+"/"+anoNasc);

var idade = parseInt(0);

if (mes >= mesNasc && dia >= diaNasc) {
    idade = ano - anoNasc;
}else{
    idade = (ano - anoNasc) - 1;
}


$(function inicializaSite() {
    console.log("jQuery funcionando ;)");
    $(".tooltip").tooltipster({
        theme: 'tooltipster-shadow'
    });
})
console.log("Idade: "+idade);

$("#idade").text(idade)