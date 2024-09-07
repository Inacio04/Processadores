//console.log("Hello world");  <- só ta aqui ainda pq eu sou fã dele 

function pesquisar(){
let section = document.getElementById("resultados-pesquisa");
console.log(section);

let campoPesquisa = document.getElementById ("campo-pesquisa").value;

console.log(campoPesquisa)

if (campoPesquisa == ""){

    section.innerHTML="<p class='texto-branco'>Digite AMD ou Intel para ver os resultados</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

for(let dado of dados){

    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLocaleLowerCase()

    if (titulo.includes(campoPesquisa) ||  descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

        resultados += `
        <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank"> Especificações Técnicas </a>
        </div>
        ` ; 

    }
console.log(dado.titulo.includes(campoPesquisa))

} //resumindo  esse mano aqui é um modelo de div só que ele coloca dados no lugar certo

if (!resultados) {
 resultados = "<p class='texto-branco'>Nada foi encontrado, ou você não digitou nada correspondente.</p>"
}


section.innerHTML = resultados;
}

