
function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);
  
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    let mensagem = "";

    if (media === 0) {
      mensagem = "Infelizmente você zerou a prova :(";
  } else if (media <= 3) {
      mensagem = `Você obteve nota: ${media.toFixed(2)}<br>Caramba, deu ruim, estude um pouco mais e tente novamente!`;
  } else if (media <= 5.9) {
      mensagem = `Você obteve nota: ${media.toFixed(2)}<br>Quase lá... falta pouco para a média.`;
  } else if (media <= 7) {
      mensagem = `Você obteve nota: ${media.toFixed(2)}<br>Você conseguiu passar da média minima.`;
  } else if (media <= 9) {
      mensagem = `Você obteve nota: ${media.toFixed(2)}<br>Notão!`;
  } else {
      mensagem = `Você obteve nota: ${media.toFixed(2)}<br>Hoje é seu aniversário? Porque você está de parabéns`;
  }


    // evite mexer na linha de código abaixo!
    document.getElementById("situacaoAluno").innerHTML = mensagem;
  }