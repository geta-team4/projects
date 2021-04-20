// Model
let bossHP;
let playerHP;

// View
function updateView() {
    document.getElementById("app").innerHTML = `
        <div class="healthbar boss-healthbar"></div>
        <div class="boss-character">
            <img src="./img/dragon.png" height="500px" onClick="attackBoss()"/>
        </div>
        <div class="healthbar player-healthbar"></div>
    `;
}
// Controller

updateView();