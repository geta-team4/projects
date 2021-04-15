// Model
const morseCodeArray =  [ '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
                          '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
                          '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
                          '-.--', '--..', ' ', '·-·-', '---·', '·--·-']; //4 siste er space, æ ,ø og å
const validInputs = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', 'Æ', 'Ø', 'Å',]
let encodedString = "";
const ASCII_OFFSET = 65;
let lastInput = "";

// View
function updateView() {
    document.getElementById('app').innerHTML = `
        <img src="img/morse.png" width="" height="" /><br /><br /><br />
        <input type="text" class="user-input" placeholder="${lastInput}" onChange="userInput(this.value)" />
        <div class="result">${encodedString}</div>
    `;
}

// Controller
function encodeToMorseCode(c) {
    if (typeof(c) !== "string") return '';

    if (validInputs.includes(c.toUpperCase()) == false) return '';

    let charToEncode = c.toUpperCase();
    let result = "";
    let morseIndex = 0;

    if (charToEncode == ' ') {
        morseIndex = morseCodeArray.length -4;
    } else if (charToEncode == 'Æ') {
        morseIndex = morseCodeArray.length -3;
    } else if (charToEncode == 'Ø') {
        morseIndex = morseCodeArray.length -2;
    } else if (charToEncode == 'Å') {
        morseIndex = morseCodeArray.length -1;
    } else {
        morseIndex = charToEncode.charCodeAt(0) - ASCII_OFFSET;
    }


    result = morseCodeArray[morseIndex];

    return result;
}

function userInput(s) {
    lastInput = s;
    encodedString = "";

    for (let char of s) {
        encodedString += encodeToMorseCode(char);
    }

    updateView();
}

updateView();