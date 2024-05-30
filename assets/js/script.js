const playerScore = document.getElementById("player1Score");
const computerScore = document.getElementById("computerScore");

const cpmputer = document.getElementById("computers choice");

const player = document.getElementById("players choice");
const result = document.getElementById("result");
const gameWinner = document.getElementById("gamewinner");
const choice = ["rock", "paper", "scissor"];
let moves = parseInt(document.getElementById("movesLeft").innerHTML);

function gameChoice(playerChoice) {

    let computerChoice = choice[Math.floor(Math.random() * 3)];
    document.getElementById("computers choice").innerHTML = "Computer's Choice" + " " + "is" + " " + computerChoice;
    let result = "";
    if (playerChoice === computerChoice) {
        result = "Its a Tie!";
    }
    else if (playerChoice === "rock" && computerChoice === "scissor") {
        result = " Player Wins!";
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        result = " Player Wins!";
    }
    else if (playerChoice === "scissor" && computerChoice === "paper") {
        result = " Player Wins!";
    }
    else {
        result = " Computer Wins!";
    }

    document.getElementById("result").innerHTML = result;
}








// let rock = document.getElementsByClassName("rock").innerHTML;
/*
    let paper = document.getElementsByClassName("paper").innerHTML;
    let scissors = document.getElementsByClassName("scissor").innerHTML;
    const playerChoice = ("rock", "paper", "scissor");
    const choice = ("Rock", "Paper", "Scissor");
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        document.getElementById("computers choice").innerHTML = "Rock";
    } else if (computerChoice === 1) {
        document.getElementById("computers choice").innerHTML = "Paper";
    } else {
        document.getElementById("computers choice").innerHTML = "Scissor";
    }

    if (playerChoice === "scissor" && computerChoice === 1) {
        document.getElementById("result").innerHTML = "player wins!";
    }

    else if (playerChoice === "rock" && computerChoice === 2) {
        document.getElementById("result").innerHTML = "player wins!";
    }

    else if (playerChoice === "paper" && computerChoice === 0) {
        document.getElementById("result").innerHTML = "player wins!";
    }
    else if (computerChoice === 2 && playerChoice === "paper") {
        document.getElementById("result").innerHTML = "computer wins!";
    }
    else if (computerChoice === 1 && playerChoice === "rock") {
        document.getElementById("result").innerHTML = "computer wins!";
    }
    else if (computerChoice === 0 && playerChoice === "scissor") {
        document.getElementById("result").innerHTML = "computer wins!";
    }

    else {
        document.getElementById("result").innerHTML = "its a Tie!";
    }



}

function moveLeft() {

    let moves = parseInt(document.getElementById("movesLeft").innerHTML);

    moves = moves - 1;
    if (moves > 0) {
        document.getElementById("movesLeft").innerHTML = moves;
    } else {
        // Target the specific element within the class "game" to hide
        document.querySelector(".game").style.display = "none";
        // Update the gameover element's display
        document.getElementById("gameover").style.display = "block";
    }

}

const reloadButton = document.getElementsByClassName("reload");

// Add an event listener for the click event
function reload() {
    let reload = document.getElementsByClassName("reload").innerHTML;
    // Reload the page using window.location.reload()
    window.location.reload();
};


const winningConditions = {
    "Rock": "scissors",
    "Paper": "rock",
    "Scissors": "paper"
};

let gameWinner = "";

if (winningConditions[playerChoice] === computerChoice) {
    gameWinner = "Player wins!";
} else if (computerChoice === winningConditions[playerChoice]) {
    gameWinner = "Computer wins!";
} else {
    gameWinner = "It's a tie!";
}

// Update the game winner display or handle scores as needed (replace placeholder)
document.getElementById("gamewinner").innerHTML = gameWinner;

// Helper function to validate player and computer choices (optional)
function isValidChoice(choice) {
    return ["Rock", "Paper", "Scissors"].includes(choice);
}


let computerscore = 0;
computerscore++;

document.getElementById("computerScore").innerHTML = computerscore;*/
