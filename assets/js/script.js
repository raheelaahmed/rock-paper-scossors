function getPlayerNames() {
    const player1Name = document.getElementById('p1name').value;
    const player2Name = document.getElementById('p2name').value;

    document.getElementById('player1Score').textContent = player1Name;
    document.getElementById('player2Score').textContent = player2Name;

    // You can now proceed with the game logic (assuming you have it implemented)
}

