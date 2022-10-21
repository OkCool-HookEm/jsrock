const choices = ["rock", "paper", "scissors"];
//const playerSelection = playerChoice();
//const computerSelection = getComputerChoice();
//let playerScore = 0;
//let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function playerChoice() {
    let input = prompt("Rock, Paper, or Scissors?", "");
    input = input.toLowerCase();
    return(input);
}


function winConditions(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "Tie";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
            return ("Computer");
        } else if (computerSelection === "paper" && playerSelection === "rock") {
            return ("Computer");
        } else if (computerSelection === "rock" && playerSelection === "scissors") {
            return ("Computer");
         } else {
            return("Player");
        } 
}

function playRound(playerSelection, computerSelection) {
    //console.log(playerChoice());
    //console.log(getComputerChoice());
    const result = winConditions(playerSelection, computerSelection);
    if (result === "Tie") {
        return ("It is a tie!");
    } else if (result === "Computer") {
        return ("Computer wins!");
    } else {
        if (result === "Player") {
            return ("You win!");
        }
    } 
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (winConditions(playerSelection, computerSelection) === "Computer") {
            computerScore++;
        } else if (winConditions(playerSelection, computerSelection) === "Player") {
            playerScore++;
        } else tieScore++;
    } if (playerScore > computerScore && tieScore) {
        console.log("You win!");
    } else if (computerScore > playerScore && tieScore) {
        console.log("Computer wins!");
    } else console.log("No winner!");
}

game();