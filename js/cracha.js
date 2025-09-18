const containers = document.querySelectorAll(".container");
const roundConers = document.querySelectorAll(".blue-area")
let colaborador = document.querySelector(".funcionario")
const nameUser = document.querySelector("#name")

const crop = 5;
const width = 55;
const height = 85;
const totalWidth = crop + width + crop;
const totalHeight = crop + height + crop;
const bordas = 2

colaborador.textContent = nameUser.value


containers.forEach(container => {
  container.style.width = totalWidth + "mm";
  container.style.height = totalHeight + "mm";
  container.style.gridTemplateColumns = `${crop}mm ${width}mm ${crop}mm`;
  container.style.gridTemplateRows = `${crop}mm ${height}mm ${crop}mm`;

  const corners = container.querySelectorAll(".corner");
  corners.forEach(corner => {
    corner.style.width = crop + "mm";
    corner.style.height = crop + "mm";
  });
});

roundConers.forEach(roundConer =>{
  roundConer.style.borderRadius = `${bordas}mm`
})