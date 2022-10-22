sketchpad = document.querySelector("#sketchpad");

let BoxesPerRow = 16;

let numOfBoxes = BoxesPerRow * BoxesPerRow;

for (let i = 0; i < numOfBoxes; i++) {
  const gridDivs = document.createElement("div");
  sketchpad.appendChild(gridDivs);
  gridDivs.setAttribute("id", "gridBox-" + (i + 1));
  gridDivs.classList.add("gridBoxes");
};

const allGridBoxes = document.querySelectorAll(".gridBoxes");

let isMouseDown = false;

window.addEventListener("mousedown", function (event) {
  isMouseDown = true;
});

window.addEventListener("mouseup", function (event) {
  isMouseDown = false;
});

allGridBoxes.forEach((gridBox) => {
  gridBox.addEventListener("mousemove", () => {
    if (isMouseDown) {
      gridBox.style.backgroundColor = "black";
    }
  });

  gridBox.addEventListener("click", () => {
    gridBox.style.backgroundColor = "black";
  })
});

let sketchpadSize = 600;

sketchpad.setAttribute("style", `width: ${sketchpadSize}px; height: ${sketchpadSize}px;`)

for (let i = 0; i < numOfBoxes; i++) {
  let gridBox = document.querySelector(`#gridBox-${i + 1}`)
  gridBox.setAttribute("style", `width: ${sketchpadSize / BoxesPerRow}px; 
    height: ${sketchpadSize / BoxesPerRow}px`); // 500 = total width(px) of the sketchpad.
};
