sketchpad = document.querySelector("#sketchpad");

let BoxesPerRow = 16; // Default value

let numOfBoxes = BoxesPerRow * BoxesPerRow;

let sketchpadSize = 600;

sketchpad.setAttribute("style", `width: ${sketchpadSize}px; height: ${sketchpadSize}px;`)

function createBoxes(numOfBoxes) {
  for (let i = 0; i < numOfBoxes; i++) { //Loop to create an inputted number of boxes
    const gridDiv = document.createElement("div");
    sketchpad.appendChild(gridDiv);
    gridDiv.setAttribute("id", "gridDiv-" + (i + 1));
    gridDiv.classList.add("gridBoxes");
    gridDiv.setAttribute("style", `width: ${sketchpadSize / BoxesPerRow}px; 
    height: ${sketchpadSize / BoxesPerRow}px`)

    gridDiv.addEventListener("mousemove", () => {
      if (isMouseDown) {
        gridDiv.style.backgroundColor = "black";
      }
    });
  
    gridDiv.addEventListener("click", () => {
      gridDiv.style.backgroundColor = "black";
    })
  }
};

createBoxes(numOfBoxes);

const allGridDivs = document.querySelectorAll(".gridBoxes");

let isMouseDown = false;

window.addEventListener("mousedown", function (event) {
  isMouseDown = true;
});

window.addEventListener("mouseup", function (event) {
  isMouseDown = false;
});
//isMouseDown makes it so that you can only draw on the sketchpad while the mouse is held down.

function clearGrid() {
  gridBoxes = document.querySelectorAll(".gridBoxes")
  gridBoxes.forEach(gridBox => gridBox.remove())
}

let gridBoxes = document.querySelectorAll(".gridBoxes")
const btnContainer = document.querySelector("#btnContainer");
btnContainer.setAttribute("style", `width: ${sketchpadSize}px;`);

const gridBtn = document.querySelector("#gridBtn");
const clearBtn = document.querySelector("#clearBtn");

gridBtn.addEventListener("click", () => {
  let newGridSize = parseInt(prompt("What size grid would you like? Max: 50"));

  if (isNaN(newGridSize)) {
    return alert("That is not a valid number");
  } else if (newGridSize > 50) {
    return alert("Your number was above the specified amount");
  } else if (newGridSize < 1) {
    return alert("How can a grid have less than one square in it?")
  } else {
    clearGrid();
    BoxesPerRow = newGridSize;
    numOfBoxes = BoxesPerRow * BoxesPerRow;
    createBoxes(numOfBoxes);
  }

});

clearBtn.addEventListener("click", () => {
  gridBoxes = document.querySelectorAll(".gridBoxes")
  gridBoxes.forEach((gridBox) => {
    gridBox.style.backgroundColor = "white";
  });
});