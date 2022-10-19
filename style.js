const choices = ["rock", "paper", "scissors"];
const playerSelection = playerChoice();
const computerSelection = getComputerChoice();
const winner = winConditions();

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function playerChoice() {
    let input = prompt("Rock, Paper, or Scissors?", "");
    input = input.toLowerCase();
    return(input);
}


function winConditions() {
    if (computerSelection === playerSelection) {
        return ("Tie");
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
            return ("Computer wins!");
        } else if (computerSelection === "paper" && playerSelection === "rock") {
            return ("Computer Wins!");
        } else if (computerSelection === "rock" && playerSelection === "scissors") {
            return ("Computer wins!");
         } else {
            return("You win!");
        } 
    }

function playRound() {
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(winner);
}

playRound();