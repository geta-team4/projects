// Model.
let playerMove = "UNSET";
let computerMove = "UNSET";
let moves = ["rock", "paper", "scissors"];

// View.
function updateView() {
    document.getElementById("app").innerHTML = `
        <div id="board">
            <p>Player:&nbsp;&nbsp;&nbsp${playerMove}</p>
            <p>Computer:&nbsp;${computerMove}</p>
        </div>
        <button onclick="playerAction('rock')">Rock</button>
        <button onclick="playerAction('paper')">Paper</button>
        <button onclick="playerAction('scissors')">Scissors</button>
    `;
}

// Controller.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function playerAction(moveName) {
    playerMove = moveName;

    computerAction();

    updateView();
}

function computerAction() {
    let randomInt = getRandomInt(0, moves.length - 1);

    computerMove = moves[randomInt];
}

updateView();