const main = document.querySelector(".container");



function handleMouseEnter(){
    const element = event.target;
    element.classList.add("hovered");
}
function handleMouseLeave(){
    const element = event.target;
    element.classList.remove("hovered");
}


for(let i = 1; i <= 256; i++){
    const square = document.createElement("div");
    
    square.classList.add("square");

    main.appendChild(square);
};

const squares = document.querySelectorAll(".square");
squares.forEach((element)=>{
    element.addEventListener("mouseover",handleMouseEnter);
    element.addEventListener("mouseout",handleMouseLeave);
});

