let randomWord = ["Rock", "Paper", "Scissors"];

/*function random() {
    randomWord[Math.floor(Math.random() * randomWord.length)];
}
random = random(randomWord);  */

function randomInt(limit) {
    return Math.floor(Math.random() * Math.floor(limit));
}

function computerPlay() {
    let index = randomInt(randomWord.length);
    return index;
}
console.log(computerPlay);

/* let playerSelection = prompt("Enter your selection.");
if (playerSelection === computerPlay(choices)) {
    prompt("Congratulations! You won!")
} else {
    prompt("Dun dun dun. You lost. Try again.")
}

let computerSelection;

/*Output to console a random string: "Rock", "Paper" or
"Scissors"
 It needs to randomize, not print out the same result
 over and over. */