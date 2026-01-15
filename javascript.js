const main = document.querySelector(".container");


function createBoard(number){

    for(let x = 1; x <= number; x++){
        const row = document.createElement("div");
        row.classList.add("row");


        for(let i = 1; i <= number; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
        
        main.appendChild(row);

    }};
};

function askforValidNumber(){
    let num;
    let userInput;
    const upperLimit = 1;
    const lowerLimit = 100;
    let isValid = false;

    while(!isValid){
        userInput = prompt("Enter the number of squares you would like: ");
        num = parseInt(userInput);
        
        if(num > 100 || num < 1 ){
            alert("Please enter a number between 1 and 100");
        }
        else if(num <= 100 && num >= 1){
            isValid = true;
        };

    };

    return num

};

const promptButton = document.querySelector(".prompt");

promptButton.addEventListener("click", ()=>{
    
    const itemDlt = document.querySelectorAll(".row");
    itemDlt.forEach(item=>{
        item.remove();
    });

    const userNumber = askforValidNumber();
    createBoard(userNumber);
    
    const squares = document.querySelectorAll(".square");
    
    squares.forEach((element)=>{
    element.addEventListener("mouseover",handleMouseEnter);
    element.addEventListener("mouseout",handleMouseLeave);
    });
});





function handleMouseEnter(){
    const element = event.target;
    element.classList.add("hovered");
}
function handleMouseLeave(){
    const element = event.target;
    element.classList.remove("hovered");
}





