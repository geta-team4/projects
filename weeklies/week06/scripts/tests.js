function updateView() {} // Dummy function.

QUnit.test("encodeToMorseCode - Check that characters encode correctly.", function (assert) {
    assert.equal(encodeToMorseCode('a'), '.-', "'a' → '.-'");
    assert.equal(encodeToMorseCode('b'), '-...', "'b' → '-...'");
    assert.equal(encodeToMorseCode('c'), '-.-.', "'c' → '-.-.'");
    assert.equal(encodeToMorseCode('d'), '-..', "'d' → '-..'");
    assert.equal(encodeToMorseCode('e'), '.', "'e' → '.'");
    assert.equal(encodeToMorseCode('f'), '..-.', "'f' → '..-.'");
    assert.equal(encodeToMorseCode('g'), '--.', "'g' → '--.'");
    assert.equal(encodeToMorseCode('h'), '....', "'h' → '....'");
    assert.equal(encodeToMorseCode('i'), '..', "'i' → '..'");
    assert.equal(encodeToMorseCode('j'), '.---', "'j' → '.---'");
    assert.equal(encodeToMorseCode('k'), '-.-', "'k' → '-.-'");
    assert.equal(encodeToMorseCode('l'), '.-..', "'l' → '.-..'");
    assert.equal(encodeToMorseCode('m'), '--', "'m' → '--'");
    assert.equal(encodeToMorseCode('n'), '-.', "'n' → '-.'");
    assert.equal(encodeToMorseCode('o'), '---', "'o' → '---'");
    assert.equal(encodeToMorseCode('p'), '.--.', "'p' → '.--.'");
    assert.equal(encodeToMorseCode('q'), '--.-', "'q' → '--.-'");
    assert.equal(encodeToMorseCode('r'), '.-.', "'r' → '.-.'");
    assert.equal(encodeToMorseCode('s'), '...', "'s' → '...'");
    assert.equal(encodeToMorseCode('t'), '-', "'t' → '-'");
    assert.equal(encodeToMorseCode('u'), '..-', "'u' → '..-'");
    assert.equal(encodeToMorseCode('v'), '...-', "'v' → '...-'");
    assert.equal(encodeToMorseCode('w'), '.--', "'w' → '.--'");
    assert.equal(encodeToMorseCode('x'), '-..-', "'x' → '-..-'");
    assert.equal(encodeToMorseCode('y'), '-.--', "'y' → '-.--'");
    assert.equal(encodeToMorseCode('z'), '--..', "'z' → '--..'");
    assert.equal(encodeToMorseCode('æ'), '·−·−', "'æ' → '·−·−'");
    assert.equal(encodeToMorseCode('ø'), '−−−·', "'ø' → '−−−·'");
    assert.equal(encodeToMorseCode('å'), '·−−·−', "'å' → '·−−·−'");
    assert.equal(encodeToMorseCode(' '), ' ', "' ' → ' '");
    
    
    
});
