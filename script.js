let pontosUsuario = 0;
let pontosPC = 0;

function jogar(jogadaUsuario) {
  const opcoes = ["Pedra", "Papel", "Tesoura"];
  const jogadaPC = opcoes[Math.floor(Math.random() * 3)];

  // Atualiza jogadas
  document.getElementById("jogada-usuario").textContent = jogadaUsuario;
  document.getElementById("jogada-pc").textContent = jogadaPC;

  let resultado = "";

  if (
    (jogadaUsuario === "Pedra" && jogadaPC === "Tesoura") ||
    (jogadaUsuario === "Papel" && jogadaPC === "Pedra") ||
    (jogadaUsuario === "Tesoura" && jogadaPC === "Papel")
  ) {
    resultado = "Você ganhou!";
    pontosUsuario++;
  } else if (jogadaUsuario === jogadaPC) {
    resultado = "Empate!";
  } else {
    resultado = "Você perdeu!";
    pontosPC++;
  }

  // Atualiza resultados e pontuação
  document.getElementById("resultado").textContent = resultado;
  document.getElementById("pontos-usuario").textContent = pontosUsuario;
  document.getElementById("pontos-pc").textContent = pontosPC;
}

function reiniciarJogo() {
  pontosUsuario = 0;
  pontosPC = 0;
  document.getElementById("jogada-usuario").textContent = "-";
  document.getElementById("jogada-pc").textContent = "-";
  document.getElementById("resultado").textContent = "-";
  document.getElementById("pontos-usuario").textContent = "0";
  document.getElementById("pontos-pc").textContent = "0";
}
