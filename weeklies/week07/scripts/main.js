// Model
const BOSS_HP_TOTAL = 500;
const PLAYER_HP_TOTAL = 350;
let bossHP = 500;
let playerHP = 350;

// View
function updateView() {
    document.getElementById("app").innerHTML = `
        <div class="healthbar boss-healthbar">
            <p>${bossHP}/${BOSS_HP_TOTAL}</p>
            <div id="boss-health" class="health" style="width: ${bossHP}px;"></div>
            <div id="boss-health-lost" class="health-lost" style="width: ${BOSS_HP_TOTAL-bossHP}px;"></div>
        </div>
        <div class="boss-character">
            <img src="./img/dragon.png" height="500px" s/>
        </div>
        <div class="healthbar player-healthbar">
            <p>${playerHP}/${PLAYER_HP_TOTAL}</p>
            <div id="player-health" class="health" style="width: ${playerHP}px;"></div>
        </div>
        <br/><br/>
        <button class="attack-button" onClick="attackBoss()">Attack <img src="./img/sword.png" height="20px"></button>
    `;
}
// Controller

function bossAttackPlayer() {
    updateView();
}

function attackBoss() {
    let attackDmg = 42;
    if (bossHP <= attackDmg) {
        attackDmg = bossHP;
    }
    bossHP -= attackDmg;
    updateView();
}

updateView();
console.log("fafafafafa");

