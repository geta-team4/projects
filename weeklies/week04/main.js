// Model.
let playerMove = "UNSET";
let computerMove = "UNSET";

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
function playerAction(moveName = "rock") {
    playerMove = moveName;

    updateView();
}

function computerAction(moveName) {

}

updateView();