sketchpad = document.querySelector("#sketchpad");

let BoxesPerRow = 16; // Default value

let numOfBoxes = BoxesPerRow * BoxesPerRow;

for (let i = 0; i < numOfBoxes; i++) { //Loop to create an inputted number of boxes
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
//isMouseDown makes it so that you can only draw on the sketchpad while the mouse is held down.

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
    height: ${sketchpadSize / BoxesPerRow}px`);
};
// Sets the size of each box to fit perfectly within the sketchpad
