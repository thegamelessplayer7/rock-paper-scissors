function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    let randomOption = Math.floor(Math.random()*options.length);
    let randomWord = options[randomOption];
    return randomWord;
}

let computerSelection = computerPlay();
let playerSelection;
let message;

function singleRound(playerSelection, computerSelection) {
    if(computerSelection === playerSelection.toLowerCase()) {
        message = "You can't choose the same thing! Try again."
    } else if (computerSelection === "rock" && playerSelection.toLowerCase() === "scissors") {
        message = "You lose! Rock beats scissors!";
    } else if (computerSelection === "scissors" && playerSelection.toLowerCase() === "paper") {
        message = "You lose! Scissors beats paper!";
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

// Run the singleRound function five times
// Check if the Player won. Check if the Computer won.
// If the player won, add it to playerWin. If the Computer won, add it to computerWin.
// If playerWin >= 3, the Player won the game. If computerWin >= 3, the Computer won the game.

function game() {
    computerSelection = computerPlay();
    playerSelection = prompt("Rock, paper or scissors? Choose one.");
    let computerWin = 0;
    let playerWin = 0;
    let result;
    round = singleRound(playerSelection, computerSelection);
    console.log(singleRound(playerSelection, computerSelection));
    if (round.charAt(4) === "l") {
        computerWin++;
    } else if (round.charAt(4) === "w") {
        playerWin++;
    }

    computerSelection = computerPlay();
    playerSelection = prompt("Rock, paper or scissors? Choose one.");
    roundTwo = singleRound(playerSelection, computerSelection);
    console.log(singleRound(playerSelection, computerSelection));
    if (roundTwo.charAt(4) === "l") {
        computerWin++;
    } else if (roundTwo.charAt(4) === "w") {
        playerWin++;
    }

    computerSelection = computerPlay();
    playerSelection = prompt("Rock, paper or scissors? Choose one.");
    roundThree = singleRound(playerSelection, computerSelection);
    console.log(singleRound(playerSelection, computerSelection));
    if (roundThree.charAt(4) === "l") {
        computerWin++;
    } else if (roundThree.charAt(4) === "w") {
        playerWin++;
    }

    computerSelection = computerPlay();
    playerSelection = prompt("Rock, paper or scissors? Choose one.");
    roundFour = singleRound(playerSelection, computerSelection);
    console.log(singleRound(playerSelection, computerSelection));
    if (roundFour.charAt(4) === "l") {
        computerWin++;
    } else if (roundFour.charAt(4) === "w") {
        playerWin++;
    }

    computerSelection = computerPlay();
    playerSelection = prompt("Rock, paper or scissors? Choose one.");
    roundFive = singleRound(playerSelection, computerSelection);
    console.log(singleRound(playerSelection, computerSelection));
    if (roundFive.charAt(4) === "l") {
        computerWin++;
    } else if (roundFive.charAt(4) === "w") {
        playerWin++;
    }

    if (computerWin > playerWin) {
        result = "Sorry, but you lost. Better luck next time.";
    } else if (computerWin < playerWin) {
        result = "Wow, you won! Congratulations!";
    } else {
        result = "It's a draw. Play again.";
    }
    return result;
}
console.log(game());

// this is a change