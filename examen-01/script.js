document.addEventListener("DOMContentLoaded", () => {
    const pantalla = document.querySelector(".pantalla");
    const botones = document.querySelectorAll(".boton, .botonOperador");

    botones.forEach(boton => {
      boton.addEventListener("click", () => {
        const valor = boton.innerText;

        if (pantalla.innerText !== valor) {
          pantalla.innerText = valor;
        }
      });
    });
  });