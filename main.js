// Seleciona os elementos
const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

// Datas dos objetivos - ATUALIZADAS PARA O FUTURO
const temposObjetivo = [
  new Date("2026-08-05T00:00:00"),   // Aba 1
  new Date("2026-11-01T00:00:00"),   // Aba 2
  new Date("2026-09-01T00:00:00"),   // Aba 3
  new Date("2026-01-01T00:00:00")    // Aba 4
];

// Formata número com zero à esquerda (07, 09, etc)
function formatarNumero(num) {
  return num < 10 ? `0${num}` : num;
}

// Calcula tempo restante
function calculaTempo(tempoObjetivo) {
  const agora = new Date();
  const diferenca = tempoObjetivo - agora;

  if (diferenca <= 0) return [0, 0, 0, 0];

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  return [dias, horas, minutos, segundos];
}

// Atualiza os contadores
function atualizarContadores() {
  abas.forEach((aba, index) => {
    const [dias, horas, minutos, segundos] = calculaTempo(temposObjetivo[index]);

    const contadorHTML = `
      <div class="contador-digito">
        <p class="contador-digito-numero">${dias}</p>
        <p class="contador-digito-texto">dias</p>
      </div>
      <div class="contador-digito">
        <p class="contador-digito-numero">${formatarNumero(horas)}</p>
        <p class="contador-digito-texto">horas</p>
      </div>
      <div class="contador-digito">
        <p class="contador-digito-numero">${formatarNumero(minutos)}</p>
        <p class="contador-digito-texto">min</p>
      </div>
      <div class="contador-digito">
        <p class="contador-digito-numero">${formatarNumero(segundos)}</p>
        <p class="contador-digito-texto">seg</p>
      </div>
    `;

    const contadorDiv = aba.querySelector(".contador");
    if (contadorDiv) {
      contadorDiv.innerHTML = contadorHTML;
    }
  });
}

// Troca de abas
botoes.forEach((botao, i) => {
  botao.addEventListener("click", () => {
    botoes.forEach(b => b.classList.remove("ativo"));
    abas.forEach(a => a.classList.remove("ativo"));

    botao.classList.add("ativo");
    abas[i].classList.add("ativo");
  });
});

// Inicialização
atualizarContadores();
setInterval(atualizarContadores, 1000);

console.log("✅ Contadores carregados com sucesso!");