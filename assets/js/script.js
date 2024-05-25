function getPlayerNames() {
    const player1Name = document.getElementById('p1name').value;
    const player2Name = document.getElementById('p2name').value;

    // Optional: Basic validation (e.g., check if names are empty)

    window.location.href = "rock-paper-scissors.html";
}

document.getElementById("player1Score").innerHTML = document.getElementById('p1name').value;
document.getElementById("player2Score").innerHTML = document.getElementById('p2name').value;