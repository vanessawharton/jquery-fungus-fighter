$(document).ready(onReady);

let arcaneScepterCost = 12;
let arcaneScepterDamage = 14;
let dragonBladeCost = 38;
let dragonBladeDamage = 47;
let entangleCost = 23;
let entangleDamage = 9;
let fungusHP = 100;
let starFireCost = 33;
let starFireDamage = 25;
let userAP = 100;

function onReady() {
    $('#attack-btn arcane-sceptre').on('click', aSAttack);
    $('#attack-btn dragon-blade').on('click', dBAttack);
    $('#attack-btn entagle').on('click', eAttack);
    $('#attack-btn star-fire').on('click', sFAttack);
}

function aSAttack(){
    userAP - arcaneScepterCost;
    fungusHP - arcaneScepterDamage;
    if userAP < 0, userAP = 0;
    if fungusHP < 0, fungusHP = 0;
    render();
    return "Attack with Arcane Scepter! Bzz!"
}

function dBAttack(){
    userAP - dragonBladeCost;
    fungusHP - dragonBladeDamage;
    if userAP < 0, userAP = 0;
    if fungusHP < 0, fungusHP = 0;
    render();
    return "Attack with Dragon Blade! Scorch!"
}

function eAttack(){
    userAP - entangleCost;
    fungusHP - entangleDamage;
    if userAP < 0, userAP = 0;
    if fungusHP < 0, fungusHP = 0;
    render();
    return "Attack with Entangle! Whoa!"
}

function sFAttack(){
    userAP - starFireCost;
    fungusHP - starFireDamage;
    if userAP < 0, userAP = 0;
    if fungusHP < 0, fungusHP = 0;
    render();
    return "Attack with Star Fire! Sizzle!"
}

function render(){
    $('#ap-text').html(`
        <p>
            AP: ${userAP}
        </p>
    `)
    $('#hp-text').html(`
        <p>
            HP: ${fungusHP}
        </p>
    `)
}

// Render state changes to the DOM

// Update the text above the attack buttons (eg, "100 AP")
// Update the text above the enemy fungus (eg, "100 HP")
// If the Freaky Fungus runs out of HP, the monster is dead and you win! Replace the walk class with a dead class on the freaky-fungus element, to make them fall over and die.
// If you run out of AP, the monster wins and humanity is doomed 😢 Replace the walk class with a jump class on the freaky-fungus element, to make them jump for the glory of the fungal race.
// You may no longer attack, if AP is 0. Give all of the attack buttons a disabled attribute, so they may no longer be used.