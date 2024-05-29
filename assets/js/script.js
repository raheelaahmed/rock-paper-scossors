
let player;
let computerChoice;
let playerChoice;








function gameChoice() {
    let rock = document.getElementsByClassName("rock").innerHTML;

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

let winner = document.querySelector("result");
winner = "computer wins!";
let winnerp = document.querySelector("result");
winnerp = "player wins!";
if (winner >= 4) {
    document.getElementById("gamewinner").innerHTML = "computer wins";
}
else if (winnerp >= 4) {
    document.getElementById("gamewinner").innerHTML = "player wins";
}
else {
    document.getElementById("gamewinner").innerHTML = "Its a Tie";
}




























