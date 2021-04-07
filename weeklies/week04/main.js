// Model.
let playerMove = "No move";
let playerScore = 0;
let computerMove = "No move";
let computerScore = 0;
let moves = ["rock", "paper", "scissors"];
let roundWinner = "";
let gameModeNormal = true;
let gameWinner = "";
let bestOfCount = 0;
let rounds = 0;

// View.
function updateView() {
    let bestOfCountElement = `
        <input type="text" placeholder=${bestOfCount != 0 ? bestOfCount : "Enter a number"} onchange="bestOfCount = parseInt(this.value)"></input>
    `;

    let gameWinnerElement = `
        <h1>${gameWinner}</h1>
    `;

    document.getElementById("app").innerHTML = `
        <div id="board">
            <p>Player:&nbsp;&nbsp;&nbsp${playerMove}</p>
            <p>Computer:&nbsp;${computerMove}</p>
            <br/><hr/>
            <p>Player score:&nbsp;&nbsp;&nbsp${playerScore}</p>
            <p>Computer score:&nbsp;${computerScore}</p>
            <p>Round result: ${roundWinner}</p>
            ${gameWinner != "" ? gameWinnerElement : ""}
        </div>
        <div id="settings">
            <input type="radio" id="infinite-mode" name="game-type" onchange="toggleGameMode()" value="Infinite" ${gameModeNormal == true ? "checked" : ""}>
            <label for="male">Infinite</label><br>
            <input type="radio" id="bestof-mode" name="game-type" onchange="toggleGameMode()" value="Best of N" ${gameModeNormal == false ? "checked" : ""}>
            <label for="game-type">Best of N</label><br>
            ${gameModeNormal == true ? "" : bestOfCountElement}
        </div>
        <button onclick="playerAction('rock')">Rock</button>
        <button onclick="playerAction('scissors')">Scissors</button>
        <button onclick="playerAction('paper')">Paper</button>
    `;

    if (gameWinner != "") {   
        resetGame();
        gameWinner = "";
    }
        
}

// Controller.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetGame() {
    if (gameWinner != "") {
        playerScore = 0;
        computerScore = 0;
        rounds = 0;
    }
}

function toggleGameMode() {
    gameModeNormal == true ? gameModeNormal = false : gameModeNormal = true;
    
    updateView();
}

function determineWinningMove(moveA, moveB) {
    // If draw, return null as neither win.
    if (moveA == moveB) return null;

    if (moveA == "rock") {
        if (moveB == "paper") {
            return moveB;
        } else {
            return moveA
        }
    } else if (moveA == "paper") {
        if (moveB == "scissors") {
            return moveB;
        } else {
            return moveA
        }
    } else if (moveA == "scissors") {
        if (moveB == "rock") {
            return moveB;
        } else {
            return moveA
        }
    }
}

function checkIfGameWon() {
    // sjekke hvem som hadde høyeste score.
    if (playerScore > computerScore) {
        gameWinner = "Player won the game!";
    } else if (playerScore == computerScore) {
        gameWinner = "Draw! No one wins...";
    } else {
        gameWinner = "Computer won the game!";
    }
}

function playerAction(moveName) {
    playerMove = moveName;

    computerAction();

    let winningMove = determineWinningMove(playerMove, computerMove);

    if (winningMove == null) {
        roundWinner = "Draw!";
    } else {
        if (winningMove == playerMove) {
            roundWinner = "Player wins!";
            playerScore++;
        } else {
            roundWinner = "Computer wins!";
            computerScore++;
        }
    }

    rounds++;

    if (rounds >= bestOfCount) {
        checkIfGameWon();
    }

    updateView();
}

function computerAction() {
    let randomInt = getRandomInt(0, moves.length - 1);

    computerMove = moves[randomInt];
}

updateView();