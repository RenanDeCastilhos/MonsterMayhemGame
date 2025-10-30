document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById("grid");
    const players = document.querySelectorAll(".player");
    const playerText = document.getElementById("current-player");
    const player1Monsters = document.getElementById("player1-monsters");
    const player2Monsters = document.getElementById("player2-monsters");
    const resetButton = document.getElementById("reset-button");

    const hexagonWidth = 60;
    const hexagonHeight = 69;
    const gridSizeX = 10; // Adjust grid size
    const gridSizeY = 10; // Adjust grid size
    const spacingX = 10; // Adjust spacing between hexagons

    let currentPlayer = 1; // Start with player 1
    let gameEnded = false; // Flag to indicate if the game has ended
    let monsterLocations = []; // Locations of the monsters
    let player1MonstersCount = 0;
    let player2MonstersCount = 0;

    // Function to switch between players
    function switchPlayer() {
        currentPlayer = currentPlayer === 1 ? 2 : 1; // Toggle between players
        players.forEach(player => player.classList.toggle("active"));
        playerText.textContent = `Current Player: Player ${currentPlayer}`;
    }

    // Add click event to players to switch between them
    players.forEach(player => player.addEventListener("click", switchPlayer));

    // Function to hide the monsters in random hexagons
    function hideMonsters() {
        monsterLocations = [];
        while (monsterLocations.length < 5) {
            const randomRow = Math.floor(Math.random() * gridSizeY);
            const randomCol = Math.floor(Math.random() * gridSizeX);
            const newMonsterLocation = { row: randomRow, col: randomCol };
            if (!monsterLocations.some(loc => loc.row === newMonsterLocation.row && loc.col === newMonsterLocation.col)) {
                monsterLocations.push(newMonsterLocation);
            }
        }
    }

    // Function to reset the game
    function resetGame() {
        hideMonsters(); // Hide the monsters in new locations
        playerText.textContent = "Current Player: Player 1"; // Reset player text
        players.forEach(player => player.classList.remove("winner")); // Remove winner class from players
        players[1].classList.remove("active"); // Ensure player 2 is not active
        currentPlayer = 1; // Reset current player to player 1
        players[0].classList.add("active"); // Set player 1 as active
        gameEnded = false; // Reset game flag
        player1MonstersCount = 0;
        player2MonstersCount = 0;
        player1Monsters.innerHTML = '';
        player2Monsters.innerHTML = '';
        grid.innerHTML = ''; // Clear the grid

        // Generate hexagonal grid
        for (let row = 0; row < gridSizeY; row++) {
            for (let col = 0; col < gridSizeX; col++) {
                const hexagon = document.createElement("div");
                hexagon.classList.add("hexagon");
                hexagon.dataset.row = row;
                hexagon.dataset.col = col;
                hexagon.style.left = `${col * (hexagonWidth + spacingX) + (row % 2 === 0 ? 0 : (hexagonWidth + spacingX) / 2)}px`;
                hexagon.style.top = `${row * hexagonHeight * 0.75}px`;
                // Ensure hexagons stay within the grid
                if (col * (hexagonWidth + spacingX) + (row % 2 === 0 ? 0 : (hexagonWidth + spacingX) / 2) + hexagonWidth <= grid.offsetWidth &&
                    row * hexagonHeight * 0.75 + hexagonHeight <= grid.offsetHeight) {
                    grid.appendChild(hexagon);
                }
                hexagon.addEventListener("mouseenter", highlightHexagon);
                hexagon.addEventListener("mouseleave", resetHexagonHighlight);
                hexagon.addEventListener("click", toggleHexagonSelection);
            }
        }

        // Initialize game state
        hideMonsters();
    }

    // Function to highlight hexagon on mouseenter
    function highlightHexagon(event) {
        event.target.style.borderColor = "red"; // Example: Change border color
    }

    // Function to reset hexagon highlight on mouseleave
    function resetHexagonHighlight(event) {
        if (!event.target.classList.contains("monster-found") && !event.target.classList.contains(`player${currentPlayer}`)) {
            event.target.style.borderColor = ""; // Reset border color on mouse leave
        }
    }

    // Function to toggle hexagon selection on click
    function toggleHexagonSelection(event) {
        const hexagon = event.target;
        if (gameEnded) return; // Ignore clicks if the game has ended

        const clickedLocation = { row: parseInt(hexagon.dataset.row), col: parseInt(hexagon.dataset.col) };
        if (monsterLocations.some(loc => loc.row === clickedLocation.row && loc.col === clickedLocation.col)) {
            hexagon.classList.add("monster-found");
            if (currentPlayer === 1) {
                player1MonstersCount++;
                player1Monsters.innerHTML += `<div class="monster-icon"></div>`;
            } else {
                player2MonstersCount++;
                player2Monsters.innerHTML += `<div class="monster-icon"></div>`;
            }

            if (player1MonstersCount === 3 || player2MonstersCount === 3) {
                playerText.textContent = `Player ${currentPlayer} Found 3 Monsters! Player ${currentPlayer} wins!`;
                players[currentPlayer - 1].classList.add("winner");
                gameEnded = true;
                alert(`Player ${currentPlayer} Found 3 Monsters! Player ${currentPlayer} is the winner!`);
                setTimeout(resetGame, 3000); // Reset the game after 3 seconds
                return;
            }
        } else {
            // Remove any additional classes before adding player class
            hexagon.classList.remove("monster-found");
            hexagon.classList.remove("player1");
            hexagon.classList.remove("player2");
            hexagon.classList.add(`player${currentPlayer}`); // Add player class
        }
        switchPlayer(); // Switch player after each move
    }

    // Add event listener to reset button
    resetButton.addEventListener("click", resetGame);

    // Initialize game
    resetGame();
});
