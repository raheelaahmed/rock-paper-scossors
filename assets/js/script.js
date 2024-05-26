function getPlayerNames() {
    const player1Name = document.getElementById('p1name').value;
    const player2Name = document.getElementById('p2name').value;
    localStorage.setItem('player1', player1Name);
    localStorage.setItem('player2', player2Name);

    // Optional: Basic validation (e.g., check if names are empty)

    window.location.href = "rock-paper-scissors.html";
}
function displayPlayerNames() {
    const player1Name = localStorage.getItem('player1');
    const player2Name = localStorage.getItem('player2');

    if (player1Name && player2Name) {
        document.getElementById("player1Score").textContent = player1Name + " " + "Score";
        document.getElementById("player2Score").textContent = player2Name + " " + "Score";
    } else {
        document.getElementById("player1Score").textContent = "Player1";
        document.getElementById("player2Score").textContent = "player2";
    }
}
