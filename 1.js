let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userpa=document.querySelector("#usersc");
const comppa=document.querySelector("#compsc");
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx]; 
   };

   const drawgame=()=>{
    console.log("It's a draw");
     msg.innerText="game was draw!";
     msg.style.backgroundColor = "#98f5e1";
     msg.style.color = "black";

};
const showwinner=(userwin, userchoice, compchoice)=>{
    if(userwin){
        console.log("you win");
        msg.innerText = `you win! your ${userchoice} beats ${compchoice} 😁`;
        msg.style.backgroundColor = "#f1c0e8";
        msg.style.color = "black";
        userscore++;
        userpa.innerText=userscore;
        
    }
    else{
        console.log("you lose");
        msg.innerText = `you lose!  ${compchoice} beats your ${userchoice}😢`;
        msg.style.backgroundColor = "#3D3A4B";
        msg.style.color = "white";
        compscore++;
        comppa.innerText=compscore++;
    }
    }
    const playgame = (userchoice) => { 
        console.log("userchoice=", userchoice);
    
        // To generate computer choice
        const compchoice = gencompchoice();
        console.log("comp choice=", compchoice);
    
        if (userchoice === compchoice) {
            // Draw game
            drawgame();
        } else {
            let userwin = true;
            
            if (userchoice === "rock") {
                userwin = (compchoice === "paper") ? false : true;
                userwin = (compchoice === "scissors") ? true : false;
    
            } else if (userchoice === "paper") {
                userwin = (compchoice === "rock") ? true : false;
                userwin = (compchoice === "scissors") ? false : true;
    
            } else {
                userwin = (compchoice === "rock") ? false:true;
                userwin=(compchoice==="paper")? true:false;
            }
            showwinner(userwin, userchoice, compchoice);

        }

    };

choices.forEach((choice) =>
    {
        const userchoice=choice.getAttribute("id");

        choice.addEventListener("click",()=>
    {
console.log("choice was clicked",userchoice);
playgame(userchoice);
    });

});







