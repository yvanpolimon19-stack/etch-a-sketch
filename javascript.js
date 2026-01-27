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
    let randomNumber = Math.random()
    if(randomNumber < 0.333){
        const element = event.target;
        element.classList.add("hovered-red");
        /*controlOpacity(element);*/
    }
    else if(randomNumber < 0.666){
        const element = event.target;
        element.classList.add("hovered-blue");
        /*controlOpacity(element);*/
    }
    else{
        const element = event.target;
        element.classList.add("hovered-green");
        /*controlOpacity(element);*/
    }
}
function handleMouseLeave(){
    const element = event.target;
    element.className = "";
}

/*function controlOpacity(el){
    let currentOpacity = parseFloat(el.style.opacity) || 0; 
    el.style.opacity = Math.min(currentOpacity + 0.1, 1); 

}
*/



