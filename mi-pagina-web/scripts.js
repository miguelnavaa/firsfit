const pantalla = document.getElementById("pantalla");
let operacion = "";

// Agregar eventos a todos los botones
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const valor = btn.innerText;

    if (valor === "CE") {
      operacion = "";
      pantalla.innerText = "0";
      return;
    }

    if (valor === "=") {
      try {
        // Reemplazar símbolos por operadores reales
        const resultado = eval(operacion.replace(/÷/g, "/").replace(/×/g, "*").replace(/−/g, "-"));
        pantalla.innerText = resultado;
        operacion = resultado.toString();
      } catch {
        pantalla.innerText = "Error";
        operacion = "";
      }
      return;
    }

    operacion += valor;
    pantalla.innerText = operacion;
  });
});
