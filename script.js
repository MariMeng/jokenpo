let ptUsuario = 0;
let ptPc = 0;
let ptEmpate = 0;

function jogar(jogadaUsuario) {
  const opcoes = ["Pedra", "Papel", "Tesoura"];
  const jogadaPC = opcoes[Math.floor(Math.random() * 3)];

  document.getElementById("jogada-usuario").textContent = jogadaUsuario;
  document.getElementById("jogada-pc").textContent = jogadaPC;

  const resultadoEl = document.getElementById("resultado");
  let resultado = "";

  if ( (jogadaUsuario === "Pedra" && jogadaPC === "Tesoura") ||
    (jogadaUsuario === "Papel" && jogadaPC === "Pedra") ||
    (jogadaUsuario === "Tesoura" && jogadaPC === "Papel")
  ) {
    alert("Você ganhou!");
    resultado = "[ Você ganhou! ]";
    resultadoEl.style.color = "green";
    resultadoEl.style.fontWeight = "bold";
    ptUsuario++;
  } else if (jogadaUsuario === jogadaPC) {
    alert("Empate com o PC!");
    resultado = "[ Empate! ]";
    resultadoEl.style.color = "gray";
    resultadoEl.style.fontWeight = "bold";
    ptEmpate++;
  } else {
    alert("Você Perdeu.");
    resultado = "[ Você perdeu! ]";
    resultadoEl.style.color = "red";
    resultadoEl.style.fontWeight = "bold";
    ptPc++;
  }


  document.getElementById("resultado").textContent = resultado;
  document.getElementById("pontos-usuario").textContent = ptUsuario;
  document.getElementById("pontos-pc").textContent = ptPc;
  document.getElementById("pontos-empate").textContent = ptEmpate;
}


