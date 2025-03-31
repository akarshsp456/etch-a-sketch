
let num = 16;

const container = document.querySelector("#container");
let square = new Array(num);
let size = 700/num;

for(let i=0; i<num*num; i++){
    square[i] = document.createElement("div");
    square[i].classList.add("square");

    square[i].style.width = size + "px";
    square[i].style.height = size + "px";
    square[i].style.border = "solid black 1px";
    square[i].style.boxSizing = "border-box";

    container.appendChild(square[i]);
}


