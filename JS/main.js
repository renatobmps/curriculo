var titulos = document.querySelectorAll("h2");
console.log(titulos);

for(var i = 0 ; i <  titulos.length ; i++){
    var titulo = titulos[i];
    titulo.classList.add("titulo");
}