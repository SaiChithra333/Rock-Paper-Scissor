let userScore = 0;
let compScore = 0;

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".images");

const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}
const drawgame = ()=>{
    msg.innerText ="Game is a tie.Play again";
    msg.style.backgroundColor = "rgb(25, 25, 61)";
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText=`You won! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compscorepara.innerText=compScore;
        msg.innerText=`You lost! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame = (userchoice)=>{
    const compchoice = gencompchoice();
    if(userchoice==compchoice)
    drawgame();
else{
    let userwin = true;
    if(userchoice==="rock"){
        userwin = compchoice === "paper" ? false : true ;
    }
    else if(userchoice==="paper"){
        userwin = compchoice === "scissors" ? false : true;
    }
    else{
        userwin = compchoice === "rock" ? false :true;
    }
    showwinner(userwin,userchoice,compchoice);
}
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});