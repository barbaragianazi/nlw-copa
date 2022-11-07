let delay = -0.3;
function criarCartao(data, dia, jogos) {
    delay = delay + 0.3;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2 class="dataJogo"><span class="data">${data}</span> <span class="dia">${dia}</span></h2>
            <div class="jogos">
                <ul>
                    ${jogos}
                </ul>
            </div>
        </div>
    `
}

function criarJogo(time1, hora, time2) {
    return `
    <li>
        <img src="assets/bandeiras/${time1}.svg" alt="bandeira do ${time1}">
        <strong>${hora}h</strong>
        <img src="assets/bandeiras/${time2}.svg" alt="bandeira da ${time2}">
    </li>`
}

document.querySelector("#cards").innerHTML =
    criarCartao("24/11", "quinta", criarJogo('brasil', '16', 'servia')) +
    criarCartao("28/11", "segunda", criarJogo('brasil', '13', 'suica')) +
    criarCartao("02/12", "sexta", criarJogo('camaroes', '16', 'brasil'))

let trocarTemaAzul = document.getElementById("temaAzul");
let trocarTemaAmarelo = document.getElementById("temaAmarelo");
let trocarTemaVerde = document.getElementById("temaVerde");
let body = document.querySelector("body");

trocarTemaAzul.addEventListener("click", () => {
    body.classList.remove("verde");
    body.classList.remove("amarelo");
    body.classList.add("azul");
})
trocarTemaAmarelo.addEventListener("click", () => {
    body.classList.remove("azul");
    body.classList.remove("verde");
    body.classList.add("amarelo");
})
trocarTemaVerde.addEventListener("click", () => {
    body.classList.remove("azul");
    body.classList.remove("amarelo");
    body.classList.add("verde");
})
    ;
