let pontosUsuario = 0;
let pontosPC = 0;

function jogar(jogadaUsuario) {
  const opcoes = ["Pedra", "Papel", "Tesoura"];
  const jogadaPC = opcoes[Math.floor(Math.random() * 3)];

  // Atualiza jogadas
  document.getElementById("jogada-usuario").textContent = jogadaUsuario;
  document.getElementById("jogada-pc").textContent = jogadaPC;

  const resultadoEl = document.getElementById("resultado");
  let resultado = "";

  if (
    (jogadaUsuario === "Pedra" && jogadaPC === "Tesoura") ||
    (jogadaUsuario === "Papel" && jogadaPC === "Pedra") ||
    (jogadaUsuario === "Tesoura" && jogadaPC === "Papel")
  ) {
    resultado = "[ Você ganhou! ]";
    resultadoEl.style.color = "green";
    resultadoEl.style.fontWeight = "bold";
    pontosUsuario++;
  } else if (jogadaUsuario === jogadaPC) {
    resultado = "[ Empate! ]";
    resultadoEl.style.color = "gray";
    resultadoEl.style.fontWeight = "bold";
  } else {
    resultado = "[ Você perdeu! ]";
    resultadoEl.style.color = "red";
    resultadoEl.style.fontWeight = "bold";
    pontosPC++;
  }

  // Atualiza resultados e pontuação
  document.getElementById("resultado").textContent = resultado;
  document.getElementById("pontos-usuario").textContent = pontosUsuario;
  document.getElementById("pontos-pc").textContent = pontosPC;
}


