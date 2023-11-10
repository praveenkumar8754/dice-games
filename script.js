// script.js

let currentPlayer = 1; // Initialize the current player
let score1 = 0; // Initialize the score for Player 1
let score2 = 0; // Initialize the score for Player 2

function rolldice(player) {
    // Your logic for rolling the dice goes here
    // You can use the player parameter to determine which player is rolling

    // For example:
    const diceValue = Math.floor(Math.random() * 6) + 1; // Generate a random dice value (1 to 6)
    const diceImage = document.getElementById('dice-image');

    // Update the dice image source based on the dice value
    diceImage.src = `./Images/dice${diceValue}.png`;

    // Check for the win condition before updating the score
    if (currentPlayer === 1) {
        score1 += diceValue;
        document.getElementById('Score-1').innerText = score1;
        if (score1 >= 30) {
            alert('Player-1 wins!');
            reset(); // Reset the game after someone wins
            return;
        }
    } else {
        score2 += diceValue;
        document.getElementById('Score-2').innerText = score2;
        if (score2 >= 30) {
            alert('Player-2 wins!');
            reset(); // Reset the game after someone wins
            return;
        }
    }

    // Switch to the next player
    currentPlayer = 3 - currentPlayer; // Switch between 1 and 2
    document.getElementById('Player').innerText = `Player-${currentPlayer} to Play`;
}

function reset() {
    // Your logic for resetting the game goes here
    // For example, reset the scores to zero

    score1 = 0;
    score2 = 0;
    document.getElementById('Score-1').innerText = '0';
    document.getElementById('Score-2').innerText = '0';

    // Reset the dice image to the initial one
    const diceImage = document.getElementById('dice-image');
    diceImage.src = './Images/dice1.png';

    // Reset the current player to Player-1
    currentPlayer = 1;
    document.getElementById('Player').innerText = 'Player-1 to Play';
}
