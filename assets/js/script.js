//declaring variables//

//players score display//
const playerScore = document.getElementById("player1Score");
const computerScore = document.getElementById("computerScore");

//computers choice dispaly//
const computerChoiceDisplay = document.getElementById("computers-choice");

//result dispaly//

const resultDisplay = document.getElementById("result");

//game winner dispaly//
const gameWinner = document.getElementById("gamewinner");

//remaining moves dispaly//
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


    //game winner//
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
        //end game\\
        document.querySelector(".game").style.display = "none";

        document.getElementById("gameover").style.display = "block";

        document.getElementById("play").style.display = "none";
        document.getElementById("pop-up").style.display = "none";
    }
}


//restart button//
function reload() {
    window.location.reload();
}

const reloadButton = document.getElementsByClassName("reload")[0];
reloadButton.addEventListener("click", reload);


//pop up how to play//

function popUp() {
    let popup = document.getElementById("pop-up");
    popup = document.getElementById("pop-up").style.display = "block";

}


//popup=none on double clicking//
function popUpHidden() {
    let popup = document.getElementById("pop-up");
    popup = document.getElementById("pop-up").style.display = "none";

}


//popup for touch screens //
const button = document.getElementById("play");
let popup = document.getElementById("pop-up");
let clickTime = null; // Variable to track time of last click

button.addEventListener("touchstart", function () {
    const currentTime = new Date().getTime();

    if (clickTime && currentTime - clickTime < 250) {
        // Double tap detected (within 250ms)
        popup.style.display = "none";
    } else {
        // Single tap
        clickTime = currentTime; // Reset click time for double tap detection
    }
});


