const containers = document.querySelectorAll(".container");

const crop = 10;
const width = 54;
const height = 85;
const totalWidth = crop + width + crop;
const totalHeight = crop + height + crop;

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
