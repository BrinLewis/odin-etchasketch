sketchpad = document.querySelector("#sketchpad");

for (let i = 0; i < 256; i++) {
  gridDivs = document.createElement("div");
  sketchpad.appendChild(gridDivs);
  gridDivs.setAttribute("id", "gridBlock-" + (i + 1));
  gridDivs.classList.add("gridBlocks");
}
