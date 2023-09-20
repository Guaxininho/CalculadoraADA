const teclas = document.querySelectorAll(".tecla");

visor.value = 0;

for (let i = 0; i < teclas.length; i++) {
  teclas[i].addEventListener("click", () => {
    if (visor.value === "0") {
      visor.value = "";
    }
    visor.value = visor.value + teclas[i].innerHTML;
  });
}

igual.addEventListener("click", () => {
  if (/([÷x\-\+].*){2,}/.test(visor.value)) {
    visor.style.fontSize = "2rem";
    visor.style.textAlign = "center";
    visor.style.backgroundColor = "red";
    visor.value = "Refaça a conta com apenas 1 operador";
    setTimeout(() => {
      visor.style.fontSize = "7rem";
      visor.style.textAlign = "right";
      visor.style.backgroundColor = "#d1d5df";
      visor.value = "0";
    }, 2000);
    return;
  }
  if (visor.value.includes("÷")) {
    let operacao = visor.value.split("÷");
    let resultado = operacao[0] / operacao[1];
    visor.value = resultado;
  } else if (visor.value.includes("x")) {
    let operacao = visor.value.split("x");
    let resultado = operacao[0] * operacao[1];
    visor.value = resultado;
  } else if (visor.value.includes("-")) {
    let operacao = visor.value.split("-");
    let resultado = operacao[0] - operacao[1];
    visor.value = resultado;
  } else if (visor.value.includes("+")) {
    let operacao = visor.value.split("+");
    let resultado = parseInt(operacao[0]) + parseInt(operacao[1]);
    visor.value = resultado;
  }

  visor.value > "20"
    ? (body.style.backgroundColor = "green")
    : (body.style.backgroundColor = "orange");
});
