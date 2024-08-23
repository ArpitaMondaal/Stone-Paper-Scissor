let userScore=0;
let compScore=0;

let Main = document.querySelector(".main");
let Pic = document.querySelectorAll(".pic");
let Stone = document.querySelector("#stone");
let Paper = document.querySelector("#paper");
let Scissor = document.querySelector("#scissor");
let choices = document.querySelectorAll(".logo-btn");
let msgBox = document.querySelector(".msg-box");
let msg = document.querySelector(".msg");
let userScorePara= document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const opt=["stone","paper","scissor"];
    const randomIndex= Math.floor(Math.random()*3);
    return opt[randomIndex];
}

const playGame=(userChoice)=>{
 const compChoice=genCompChoice();
 console.log("Computer choice was "+compChoice);

 if(userChoice === compChoice){
    drawGame();
 }
 else{
    let userWin = true;
    if(userChoice==="stone"){
        userWin= compChoice === "paper" ? false :true;
    }
    else if (userChoice==="paper"){
        userWin= compChoice === "stone" ? true : false;
    }
    else{
        userWin = compChoice === "stone" ? false : true;
    }
    showWinner(userWin, userChoice , compChoice );
 }
}

const drawGame=()=>{
    console.log("Game draw ")
    msg.innerText= " Game Draw ";
    msgBox.style.backgroundColor="#5e548e";
}
 
showWinner = (userWin, userChoice , compChoice)=>{
    if(userWin===true){
        console.log("you win")
        msg.innerText=`You Win !! Your ${userChoice} beats ${compChoice} `;
        msgBox.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText= userScore;
    }
    else{
        console.log("you loose")
        msg.innerText= `You Loose !! ${compChoice} beats your ${userChoice} `;
        msgBox.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("Your choice was "+userChoice);
        playGame(userChoice);
    });
});