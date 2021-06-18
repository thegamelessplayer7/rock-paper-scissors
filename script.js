function computerPlay() {
let options = ["rock", "paper", "scissors"];
let randomOption = Math.floor(Math.random()*options.length);
let randomWord = options[randomOption];
return randomWord;
}

const computerSelection = computerPlay();
let playerSelection = "scissors";
let message;

function singleRound() {
    if (computerSelection === "rock" && playerSelection === "scissors") {
        message = "You lose! Rock beats scissors!"
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        message = "You lose! Scissors beats paper!"
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        message = "You lose! Paper beats rock!";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        message = "You win! Rock beats scissors!";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        message = "You win! Scissors beats paper!" 
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        message = "You win! Paper beats rock!"
    }
    return message;
}