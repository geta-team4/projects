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
        <div id="game-header">
            <h1>
                <span id="game-header-text-rock">Rock,</span>
                <span id="game-header-text-paper">Paper,</span>
                <span id="game-header-text-scissors">Scissors!</span>
            </h1>
        </div>
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
            <h1>Settings</h1>
            <div class="settings-content">
                <input type="radio" id="infinite-mode" name="game-type" onchange="toggleGameMode()" value="Infinite" ${gameModeNormal == true ? "checked" : ""}>
                <label for="male">Infinite</label><br>
                <input type="radio" id="bestof-mode" name="game-type" onchange="toggleGameMode()" value="Best of N" ${gameModeNormal == false ? "checked" : ""}>
                <label for="game-type">Best of N</label><br>
                <input type="text" placeholder=${bestOfCount != 0 ? bestOfCount : "Enter&nbsp;a&nbsp;number..."} onchange="bestOfCount = parseInt(this.value)"  ${gameModeNormal == true ? "disabled" : ""}></input>
            </div>
        </div>
        
        <div id="action">
            <div class="action-elements">
                <img src="./rock.svg" class="action-buttons" onclick="playerAction('rock')" />
                <img src="./scissors.svg" class="action-buttons" onclick="playerAction('rock')" />
                <img src="./paper.svg" class="action-buttons" onclick="playerAction('rock')" />
            </div>
        </div>
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
    // sjekke hvem som hadde h??yeste score.
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

    if (rounds >= bestOfCount && gameModeNormal == false) {
        checkIfGameWon();
    }

    updateView();
}

function computerAction() {
    let randomInt = getRandomInt(0, moves.length - 1);

    computerMove = moves[randomInt];
}

updateView();