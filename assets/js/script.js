
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
    if (computerChoice === 2 && playerChoice === "paper") {
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
    if (moves === 0) {
        document.getElementById("movesLeft").innerHTML = "Game Over";
    }
    else {

        document.getElementById("movesLeft").innerHTML = moves;
    }


}

//if (playerChoice === rock || playerChoice === paper || playerChoice === scissors) {
// Update score only on valid player choices
// let score = parseInt(document.getElementById("score").innerHTML);
//score++
//  ;
// document.getElementById("score").innerHTML = score;
// console.log("Score:", score); // Informative console output
//} 
//function endGame() {

//}




















