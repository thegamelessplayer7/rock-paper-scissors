function computerPlay() {
let options = ["rock", "paper", "scissors"];
let randomOption = Math.floor(Math.random()*options.length);
let randomWord = options[randomOption];
return randomWord;
}

const computerSelection = computerPlay();
let playerSelection = prompt("Rock, paper or scissors?");
let message;
//let selection = playerSelection.toLowerCase();


function singleRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection.toLowerCase()) {
        message = "You can't choose the same thing! Try again."
    } else if (computerSelection === "rock" && playerSelection.toLowerCase() === "scissors") {
        message = "You lose! Rock beats scissors!"
    } else if (computerSelection === "scissors" && playerSelection.toLowerCase() === "paper") {
        message = "You lose! Scissors beats paper!"
    } else if (computerSelection === "paper" && playerSelection.toLowerCase() === "rock") {
        message = "You lose! Paper beats rock!";
    } else if (computerSelection === "scissors" && playerSelection.toLowerCase() === "rock") {
        message = "You win! Rock beats scissors!";
    } else if (computerSelection === "paper" && playerSelection.toLowerCase() === "scissors") {
        message = "You win! Scissors beats paper!" 
    } else if (computerSelection === "rock" && playerSelection.toLowerCase() === "paper") {
        message = "You win! Paper beats rock!"
    }
    return message;
}
// Run the singleRound function five times. 
// Check if the Player won. Check if the Computer won. 
// If the Player won, add it to playerWin. If the Computer won, add it to computerWin.
// If playerWin >= 3, the Player won the game. If computerWin >= 3, the Computer won the game.
function game() {
    let round = singleRound(playerSelection, computerSelection);
}