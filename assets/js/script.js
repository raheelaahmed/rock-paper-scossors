const playerScore = document.getElementById("player1Score");
const computerScore = document.getElementById("computerScore");

const cpmputer = document.getElementById("computers choice");

const player = document.getElementById("players choice");
const result = document.getElementById("result");
const gameWinner = document.getElementById("gamewinner");
const choice = ["rock", "paper", "scissor"];
let moves = parseInt(document.getElementById("movesLeft").innerHTML);
let playerscore = 0;
let computerscore = 0;


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

    if (result == " Player Wins!") {
        playerscore++;
        playerScore.innerHTML = "Player Score:" + " " + playerscore;
    }
    else if (result == " Computer Wins!") {
        computerscore++;
        computerScore.innerHTML = "Computer Score" + " " + computerscore;

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


