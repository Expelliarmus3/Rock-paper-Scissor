
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

function playRound(humanChoice, computerChoice) {
  // your code here!
    let humanScore=0;
    let computerScore=0;
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
