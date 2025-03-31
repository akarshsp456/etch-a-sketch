const container = document.querySelector("#container");
const restart = document.querySelector(".restart"); // Move outside to avoid multiple bindings
function getRandomRGBColor(){
    let r= Math.floor(Math.random() * 256);
    let g= Math.floor(Math.random() * 256);
    let b= Math.floor(Math.random() * 256);
    return {r,g,b};

}

function makeGrid(num = 16) {
    container.innerHTML = ''; // Clear container first

    let size = 700 / num;

    for (let i = 0; i < num * num; i++) {
        let square = document.createElement("div");
        square.classList.add("square");

        square.style.width = size + "px";
        square.style.height = size + "px";
        square.style.border = "solid black 1px";
        square.style.boxSizing = "border-box";
        let color = getRandomRGBColor();
        let opacity = 0;

        square.addEventListener("mouseover", () => {
            if(opacity<1){
                
                opacity+= 0.1;
                square.style.backgroundColor = `rgba(${color.r},${color.g},${color.b},${opacity})`;
            }
        });

        container.appendChild(square);
    }
}

// Attach event listener once
restart.addEventListener("click", () => {
    let inpNum = prompt("How many grids do you need?");
    inpNum = parseInt(inpNum);

    if (!inpNum || inpNum <= 0 || inpNum>=100) {
        alert("Please enter a valid number greater than 0 and less than 100");
        return;
    }

    makeGrid(inpNum);
});

makeGrid();



