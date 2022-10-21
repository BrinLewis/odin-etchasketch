sketchpad = document.querySelector("#sketchpad");

let blocksPerRow = 16;

let numOfBlocks = blocksPerRow * blocksPerRow;

for (let i = 0; i < numOfBlocks; i++) {
  const gridDivs = document.createElement("div");
  sketchpad.appendChild(gridDivs);
  gridDivs.setAttribute("id", "gridBlock-" + (i + 1));
  gridDivs.classList.add("gridBlocks");
};

const allGridBlocks = document.querySelectorAll(".gridBlocks");

let isMouseDown = false;

sketchpad.addEventListener("mousedown", function (event) {
  isMouseDown = true;
});

sketchpad.addEventListener("mouseup", function (event) {
  isMouseDown = false;
});

allGridBlocks.forEach((gridBlock) => {
  gridBlock.addEventListener("mousemove", () => {
    if (isMouseDown) {
      gridBlock.style.backgroundColor = "black";
    }
  });
});

for (let i = 0; i < numOfBlocks; i++) {
  let gridBlock = document.querySelector(`#gridBlock-${i + 1}`)
  gridBlock.setAttribute("style", `width: ${500 / blocksPerRow}px; 
    height: ${500 / blocksPerRow}px`); // 500 = total width(px) of the sketchpad.
};
