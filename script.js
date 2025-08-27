const container = document.querySelector("#container");
const square = document.querySelector(".square");
const info = document.querySelector("#info");

function createGrid(){
    container.innerHTML =""; // Removes all of the elements within the element container.
    info.innerHTML = ""; 

    // Input number and submit
    let sizeInput = document.getElementById("sizeInput").value; // let sizeInput be equal to the value inputted
    if(sizeInput > 100){
        info.innerHTML = "Numbers bigger then 100 will not be used";
        console.log("Numbers bigger then 100 will not be used");
        return
    }

    // container
    

    let grid = sizeInput * sizeInput
    console.log(grid)
    const containerSize = 700;

    for (let i = 0; i < grid; i++){
        const square = document.createElement("div"); // Creates a sqaure in the container
        square.classList.add("square") // Adds a classname (sqaure) to the sqaure div
        square.style.width = `${containerSize/sizeInput}px`; // sets the width of each sqaure
        square.style.height = `${containerSize/sizeInput}px`; // sets the height of each sqaure
        container.appendChild(square); // Appends the sqaure to the container 
        
        // Changes background to black when hovering.
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    }
}

function resetGrid(){
    info.innerHTML = ""; 
    container.innerHTML = "";
}

// Reset Grid
document.getElementById('reset').onclick = resetGrid;

// Clicking button with ID numSubmit creates a grid
document.getElementById('numSubmit').onclick = createGrid;
