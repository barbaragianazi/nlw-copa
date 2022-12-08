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
    `;
}

function cartaoJogoConcluido(data, dia, jogos) {
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
      `;
}

function criarJogo(time1, hora, time2) {
  return `
    <li>
        <img src="assets/bandeiras/${time1}.svg" alt="bandeira do ${time1}">
        <strong>${hora}h</strong>
        <img src="assets/bandeiras/${time2}.svg" alt="bandeira da ${time2}">
    </li>`;
}

function jogoConcluido(time1, golsTime1, time2, golsTime2) {
  return `
      <li>
          <img src="assets/bandeiras/${time1}.svg" alt="bandeira do ${time1}">
          <strong>${golsTime1} X ${golsTime2}</strong>
          <img src="assets/bandeiras/${time2}.svg" alt="bandeira da ${time2}">
      </li>`;
}

document.querySelector("#cardsQuartasFinal").innerHTML = criarCartao(
  "09/12",
  "sexta",
  criarJogo("brasil", "12", "croacia")
);

document.querySelector("#cardsOitavasFinal").innerHTML = criarCartao(
  "05/12",
  "segunda",
  jogoConcluido("brasil", "4", "coreiadosul", "1")
);

document.querySelector("#cardsFaseGrupos").innerHTML =
  criarCartao("24/11", "quinta", jogoConcluido("brasil", "2", "servia", "0")) +
  criarCartao("28/11", "segunda", jogoConcluido("brasil", "1", "suica", "0")) +
  criarCartao("02/12", "sexta", jogoConcluido("camaroes", "1", "brasil", "0"));

let trocarTemaAzul = document.getElementById("temaAzul");
let trocarTemaAmarelo = document.getElementById("temaAmarelo");
let trocarTemaVerde = document.getElementById("temaVerde");
let body = document.querySelector("body");

trocarTemaAzul.addEventListener("click", () => {
  body.classList.remove("verde");
  body.classList.remove("amarelo");
  body.classList.add("azul");
});
trocarTemaAmarelo.addEventListener("click", () => {
  body.classList.remove("azul");
  body.classList.remove("verde");
  body.classList.add("amarelo");
});
trocarTemaVerde.addEventListener("click", () => {
  body.classList.remove("azul");
  body.classList.remove("amarelo");
  body.classList.add("verde");
});
