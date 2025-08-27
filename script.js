

function createGrid(){
    // Input number and submit
    let sizeInput = document.getElementById("sizeInput").value;
    console.log(sizeInput)
    

    // container
    const container = document.querySelector("#container");

    let grid = sizeInput * sizeInput
    console.log(grid)

    for (let i = 0; i < grid; i++){
        const div = document.createElement("div");
        container.appendChild(div);
    }
}


document.getElementById('numSubmit').onclick = createGrid;
