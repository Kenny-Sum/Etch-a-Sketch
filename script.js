let numInput;

document.getElementById("numSubmit").onclick = function(){
    numInput = document.getElementById("numInput").value;
    console.log(numInput);
}



// container
const container = document.querySelector("#container");

i = 0
j = 2*2

while (i < j){
    const div = document.createElement("div");
    container.appendChild(div);
    i ++
}

