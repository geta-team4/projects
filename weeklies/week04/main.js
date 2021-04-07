// Model.
let playerMove = "No move";
let playerScore = 0;
let computerMove = "No move";
let computerScore = 0;
let moves = ["rock", "paper", "scissors"];
let winner = "";

// View.
function updateView() {
    document.getElementById("app").innerHTML = `
        <div id="board">
            <p>Player:&nbsp;&nbsp;&nbsp${playerMove}</p>
            <p>Computer:&nbsp;${computerMove}</p>
            <br/><hr/>
            <p>Player score:&nbsp;&nbsp;&nbsp${playerScore}</p>
            <p>Computer score:&nbsp;${computerScore}</p>
            <p>Round result: ${winner}</p>
        </div>
        <button onclick="playerAction('rock')">Rock</button>
        <button onclick="playerAction('scissors')">Scissors</button>
        <button onclick="playerAction('paper')">Paper</button>
    `;
}

// Controller.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

function playerAction(moveName) {
    playerMove = moveName;

    computerAction();

    let winningMove = determineWinningMove(playerMove, computerMove);

    if (winningMove == null) {
        winner = "Draw!";
    } else {
        if (winningMove == playerMove) {
            winner = "Player wins!";
            playerScore++;
        } else {
            winner = "Computer wins!";
            computerScore++;
        }
    }


    updateView();
}

function computerAction() {
    let randomInt = getRandomInt(0, moves.length - 1);

    computerMove = moves[randomInt];
}

updateView();