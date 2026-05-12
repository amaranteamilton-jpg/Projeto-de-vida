// Seleciona os botões e os conteúdos das abas
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

// Data do objetivo (exemplo)
const tempoObjetivo = new Date("2024-10-05T00:00:00");

// Função que calcula o tempo restante de forma correta
function calculaTempo(tempoObjetivo) {
  const agora = new Date();
  const diferenca = tempoObjetivo - agora; // em milissegundos

  if (diferenca <= 0) return "Objetivo alcançado!";

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  return `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

// Função para atualizar os contadores
function atualizarContadores() {
  contadores.forEach((contador) => {
    contador.textContent = calculaTempo(tempoObjetivo);
  });
}

// Atualiza os contadores a cada segundo
setInterval(atualizarContadores, 1000);

// Configura a troca de abas
botoes.forEach((botao, i) => {
  botao.addEventListener("click", () => {
    // Remove a classe ativo de todos os botões e abas
    botoes.forEach((b) => b.classList.remove("ativo"));
    textos.forEach((t) => t.classList.remove("ativo"));

    // Adiciona a classe ativo no botão e na aba clicados
    botao.classList.add("ativo");
    textos[i].classList.add("ativo");
  });
});

// Inicializa contadores
atualizarContadores();