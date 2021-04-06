// Model.
let playerMove;
let computerMove;

// View.
function updateView() {
    document.getElementById("app").innerHTML = `
        <div id="board">
            <p>Player:&nbsp;&nbsp;&nbsp${playerMove}</p>
            <p>Computer:&nbsp;${computerMove}</p>
        </div>
        <button>Rock</button>
        <button>Paper</button>
        <button>Scissor</button>
    `;
}

// Controller.
function player() {

}

function computer() {

}

updateView();