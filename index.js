
const container = document.getElementById("container");

function makeRows(rows, cols) {
  
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

const cell = document.querySelectorAll(".grid-item")

cell.forEach((div) => {
    div.addEventListener('mouseover', () => {
        console.log("OVER")
        div.setAttribute("style", "background: red;")
    })
    div.addEventListener('mouseout', () => {
        console.log("OUT")
    })
})

