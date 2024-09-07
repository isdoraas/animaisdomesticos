
    function enviar() {
        let section = document.getElementById
        ("resultados-pesquisa");

        let campoPesquisa = document.getElementById
        ("campo-pesquisa").value

        if (campoPesquisa =="") {
            section.innerHTML = "<p>Nenhum resultado encontrado! Por favor pesquise algo</p>"
            return
        }

        campoPesquisa = campoPesquisa.toLowerCase()

        console.log(campoPesquisa);

         let resultados =""
         let nome ="";
         let descrição ="";

for (let dado of dados) {
    nome = dado.nome.toLowerCase()
    descrição = dado.descrição.toLowerCase()

    if (nome.includes(campoPesquisa) || descrição.includes(campoPesquisa)) {
        resultados += ` 
        <div class="item-resultado">
                <h2>
                <a href="#" target=" blank">${dado.nome}</a>
                </h2>
            <p class="descrição-meta"> ${dado.descrição}</p>
        <a href=${dado.link} target="_blank">Para mais informações</a>
            </div>
 `
    }
}

if (!resultados) {
    resultados = "<p>Nada foi encontrado! Por favor digite outro animal</p>"
}
section.innerHTML = resultados
}