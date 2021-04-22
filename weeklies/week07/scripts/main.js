// Model
const BOSS_HP_TOTAL = 500;
const PLAYER_HP_TOTAL = 350;
let bossHP = 500;
let playerHP = 350;
let playerHasWon = null;
let gameOver = false;
let gameOverNotAlreadyNotified = true;
let bossDmgMultiplier = 5.25;
let bossCritDmgMultiplier = 7.0;
let playerDmgMultiplier = 2.50;
let playerCritDmgMultiplier = 3.50;
let combatLog = [];

// View
function updateView() { 
    document.getElementById("app").innerHTML = `
        <div class="healthbar boss-healthbar">
            <div class="health-text">${bossHP == BOSS_HP_TOTAL ? bossHP : bossHP.toFixed(2)} / ${BOSS_HP_TOTAL}</div>
            <div id="boss-health" class="health" style="width: ${bossHP}px;"></div>
            <div id="boss-health-lost" class="health-lost" style="width: ${BOSS_HP_TOTAL-bossHP}px;"></div>
        </div>
        <div class="boss-character">
            <img src="./img/dragon.png" height="500px" s/>
        </div>
        <div class="healthbar player-healthbar">
            <div class="health-text">${playerHP == PLAYER_HP_TOTAL ? playerHP :playerHP.toFixed(2)} / ${PLAYER_HP_TOTAL}</div>
            <div id="player-health" class="health" style="width: ${playerHP}px;"></div>
            <div id="player-health-lost" class="health-lost" style="width: ${PLAYER_HP_TOTAL-playerHP}px;"></div>
        </div>
        <br/><br/>
        <button class="attack-button" onClick="attackBoss()">Attack <img src="./img/sword.png" height="20px"></button>
        <br/>
        <div class="combat-log">
            <h3> Combat Log </h3>
            ${combatLog2HTML()}
        </div>
    `;
}

// Controller
function combatLog2HTML() {
    let myDiv = "";
    
    for (let i = combatLog.length -1; i > 0; i--) {
        myDiv += combatLog[i] + "<br/>";
    }

    return myDiv;
}

function checkIfGameOver() {
    if (gameOver) {
        updateView();
        if (gameOverNotAlreadyNotified) {
            let gameOverMsg = `Game Over: You ${playerHasWon ? "Won" : "Lost"}!`;
            combatLog.push("<br/>");
            combatLog.push(gameOverMsg);
            updateView();
            alert(gameOverMsg);
            if (gameOverNotAlreadyNotified == true) gameOverNotAlreadyNotified = false;
        }
        return true;
    }

    return false;
}

function hit() {
    return Math.random() < 0.5;
}

function crit() {
    return Math.random() < 0.5;
}

function dmg(playerAction) {
    if (crit()) {
        // Deal critical damage.
        return Math.random() * 10 * (playerAction ? playerCritDmgMultiplier : bossCritDmgMultiplier);
    } else {
        // Deal normal damage.
        return Math.random() * 10 * (playerAction ? playerDmgMultiplier : bossDmgMultiplier);
    }
}

function bossAttackPlayer() {
    if (checkIfGameOver()) return;
    if (bossHP <= 0) return;
    combatLog.push("Boss attacks Player.");
    
    if (hit()) {
        let dealtDmg = dmg();
        combatLog.push(`Boss hit Player for ${dealtDmg} damage!`);
        
        // Prevent underflow.
        if (playerHP <= dealtDmg) {
            playerHP = 0;
            playerHasWon = false;
            gameOver = true;
        } else {
            // Player deals damage to boss.
            playerHP -= dealtDmg;
        }
    } else {
        combatLog.push(`Boss missed!`);
    }
    
    checkIfGameOver();
    updateView();
}

function attackBoss() {
    if (checkIfGameOver()) return;
    if (playerHP <= 0) return;
    combatLog.push("Player attacks Boss.");
    
    if (hit()) {
        let dealtDmg = dmg();
        combatLog.push(`Player hit Boss for ${dealtDmg} damage!`);
        
        // Prevent underflow.
        if (bossHP <= dealtDmg) {
            bossHP = 0;
            playerHasWon = true;
            gameOver = true;
        } else {
            // Player deals damage to boss.
            bossHP -= dealtDmg;
        }
    
    } else {
        combatLog.push(`Player missed!`);
    }

    // Boss deal damage to player.
    bossAttackPlayer();

    checkIfGameOver();
    updateView();
}

updateView();


