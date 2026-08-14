
function getComputerChoice(){
    let compChoice= Math.floor(Math.random() * 3);
    if (compChoice==0){
        return "rock";
    }
    else if(compChoice==1){
        return "paper";
    }
    else{
        return "scissor"
    }
    console.log(compChoice);
}

function getHumanChoice(){
    let playerChoice= prompt("Enter your move (rock/paper/scissor):");
    return playerChoice.toLowerCase();
    console.log(playerChoice);
}

function playGame() {
  // your code here!

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
  
    if (humanSelection==computerSelection){
        console.log("Draw");
        alert(`Draw\nComputer score= ${computerScore } Human score= ${humanScore}`);
    }
    else if(humanSelection=="rock" && computerSelection=="paper" || humanSelection=="paper" && computerSelection=="scissor" || humanSelection=="scissor" && computerSelection=="rock"){
        console.log("Computer wins!!");
        computerScore++;
        alert(`Computer win!!\nComputer score= ${computerScore } Human score= ${humanScore}`);
    }
    else{
        console.log("You win!!");
        humanScore++;
        alert(`You win!!\nComputer score= ${computerScore } Human score= ${humanScore}`);
    }
}


let humanScore=0;
let computerScore=0;

function playRound(){
    for(let i=0;i<5;i++){
        playGame();
    }
    alert(`Final Score\nComputer score= ${computerScore } Human score= ${humanScore}`);
    if(humanScore<computerScore){
        alert("Computer Won!")
    }
    else if(humanScore==computerScore){
        alert("Draw match");
    }
    else{
        alert("You won!!")
    }
}

playRound();