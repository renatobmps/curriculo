var data = new Date();
var dia = parseInt(data.getDate());
var mes = parseInt(data.getMonth()+1);
var ano = parseInt(data.getFullYear());
var hoje = dia+"/"+mes+"/"+ano;
console.log("Data atual: "+hoje);

var diaNasc = parseInt(16);
var mesNasc = parseInt(11);
var anoNasc = parseInt(1993);
var nascimento = diaNasc+"/"+mesNasc+"/"+anoNasc;
console.log("Nascimento: "+nascimento);

var idade = parseInt(0);

if (mes >= mesNasc) {
    if (mes = mesNasc && dia <= diaNasc) {
        semAniversario();
    } else {
        comAniversario();
    }
} else {
    semAniversario();
}

function comAniversario() {
    idade = idade = ano - anoNasc;
}
function semAniversario() {
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