function getPlayerNames() {
    const player1Name = document.getElementById('p1name').value;
    const player2Name = document.getElementById('p2name').value;
    localStorage.setItem('player1', player1Name);
    localStorage.setItem('player2', player2Name);



    window.location.href = "rock-paper-scissors.html";
}
function displayPlayerNames() {
    const player1Name = localStorage.getItem('player1');
    const player2Name = localStorage.getItem('player2');

    if (player1Name && player2Name) {
        document.getElementById("player1Score").textContent = player1Name;
        document.getElementById("player2Score").textContent = player2Name;
    } else {
        document.getElementById("player1Score").textContent = "Player1";
        document.getElementById("player2Score").textContent = "player2";
    }
}
let rock = document.getElementsByClassName
    ("rock").innerHTML;
let paper = document.getElementsByClassName
    ("paper").innerHTML;
let scissors = document.getElementsByClassName
    ("scissor").innerHTML;
let rock2 = document.getElementsByClassName
    ("rock2").innerHTML;
let paper2 = document.getElementsByClassName
    ("paper2").innerHTML;
let scissors2 = document.getElementsByClassName
    ("scissor2").innerHTML;


function player1Move(button) {
    let player1Move = prompt(rock, paper, scissors);
    const turnsElement = document.getElementById("turns");

    turnsElement.innerHTML = "Player 2 Turn";
    const resultElement = document.getElementById("result");

    resultElement.innerHTML = "player 1 is winner";



}
function player2Move(button) {
    let player2Move = prompt(rock2, paper2, scissors2);
    const turnsElement = document.getElementById("turns");

    // Assuming you want to simply replace the content:
    turnsElement.innerHTML = "Player 1 Turn";



}




