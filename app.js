const container = document.getElementById("container")

function formGrid(gridDimension) {
    container.innerHTML = "";
    const rows = gridDimension;
    const columns = gridDimension;
    container.style.setProperty("--rows", rows);
    container.style.setProperty("--columns", columns);

    for (let i = 0; i < (rows*columns); i++) {
        const cell = document.createElement("div");
        cell.cellIndex = i;
        cell.onmouseover = function() {
            onHoverChangeColor(this.cellIndex);
        }
        container.appendChild(cell).className = "cell";
    };
};
formGrid(16);

function onHoverChangeColor(presentIndex) {
    const cellList = container.getElementsByClassName("cell");
    cellList[presentIndex].style.backgroundColor = "blue";
};

function changeGridDimension() {
    const gridDimension = prompt("How many squares per side?");
    while (isNaN(gridDimension) || gridDimension < 1 || gridDimension > 100) {
        alert("Enter a number from 1 to 100.");
        gridDimension = prompt("How many?")
    }
    console.log(gridDimension);
    formGrid(gridDimension);
}
