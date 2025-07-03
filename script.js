let sectionInicio = document.querySelector(".section-inicio");
let sectionNome = document.querySelector(".section-nome");
let sectionFinal = document.querySelector(".section-final");

let botaoAceitar = document.querySelector(".btn-aceitar");
let botaoContinuar = document.querySelector(".btn-continuar");
let campoNome = document.querySelector(".campo-nome");

let avatarNome = document.querySelectorAll(".avatar-nome").forEach(el => {
  el.innerText = "ANT0NIO";
});

botaoAceitar.addEventListener("click", function () {
  sectionNome.style.display = "block";
  sectionNome.scrollIntoView({ behavior: "smooth" });
  
});

botaoContinuar.addEventListener("click", () => {
  let nomeDigitado = campoNome.value;
  if (nomeDigitado == "") {
    return;
  }

  sectionFinal.style.display = "block";
  document.getElementById("nome-usuario").innerText = nomeDigitado;
  sectionFinal.scrollIntoView({ behavior: "smooth" });
});
