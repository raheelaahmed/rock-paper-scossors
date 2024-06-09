//declaring variables//
const playerScore = document.getElementById("player1Score");
const computerScore = document.getElementById("computerScore");
const computerChoiceDisplay = document.getElementById("computers-choice");
const resultDisplay = document.getElementById("result");
const gameWinner = document.getElementById("gamewinner");
const movesLeftDisplay = document.getElementById("movesLeft");
const choice = ["rock", "paper", "scissor"];
let moves = parseInt(movesLeft.innerHTML);
let playerScoreValue = 0;
let computerScoreValue = 0;
//player choice by button and computer choose randomly//
function gameChoice(playerChoice) {
    let computerChoice = choice[Math.floor(Math.random() * 3)];
    computerChoiceDisplay.innerHTML = "Computer's Choice is " + computerChoice;
    let result = "";
    //winner at  the end of each round//
    if (playerChoice === computerChoice) {
        result = "It's a Tie!";
    } else if ((playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")) {
        result = "Player Wins!";
        playerScoreValue++;
        playerScore.innerHTML = "Player Score: " + playerScoreValue;
    } else {
        result = "Computer Wins!";
        computerScoreValue++;
        computerScore.innerHTML = "Computer Score: " + computerScoreValue;
    }
    resultDisplay.innerHTML = result;
    if (playerScoreValue > computerScoreValue) {
        gameWinner.innerHTML = "You are Winner!";
    } else if (playerScoreValue < computerScoreValue) {
        gameWinner.innerHTML = "You Lost!";
    } else {
        gameWinner.innerHTML = "It's a Tie!";
    }
    moveLeft();
}

//calculation of remaining moves//
function moveLeft() {
    moves--;
    movesLeftDisplay.innerHTML = moves;
    if (moves <= 0) {
        document.querySelector(".game").style.display = "none";
        document.getElementById("gameover").style.display = "block";
    }
}
//restart button//
function reload() {
    window.location.reload();
}

const reloadButton = document.getElementsByClassName("reload")[0];
reloadButton.addEventListener("click", reload);

