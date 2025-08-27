

function createGrid(){
    // Input number and submit
    let sizeInput = document.getElementById("sizeInput").value;
    console.log(sizeInput)
    

    // container
    const container = document.querySelector("#container");

    let grid = sizeInput * sizeInput
    console.log(grid)
    const gridSize = 700;

    const square = document.querySelector(".square");

    for (let i = 0; i < grid; i++){
        const square = document.createElement("div");
        square.classList.add("square")
        square.style.width = `${gridSize/sizeInput}px`;
        square.style.height = `${gridSize/sizeInput}px`;
        container.appendChild(square);
    }
}


document.getElementById('numSubmit').onclick = createGrid;
