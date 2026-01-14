const main = document.querySelector(".container");

for(let i = 1; i <= 256; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    main.appendChild(square);
}