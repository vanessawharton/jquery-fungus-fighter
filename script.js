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
    console.log("She's ready!");
    render();
    $('#attack-btn arcane-sceptre').on('click', aSAttack);
    $('#attack-btn dragon-blade').on('click', dBAttack);
    $('#attack-btn entagle').on('click', eAttack);
    $('#attack-btn star-fire').on('click', sFAttack);
}

function aSAttack(){
    console.log('AS Attack check', aSAttack);
    userAP - arcaneScepterCost;
    fungusHP - arcaneScepterDamage;
    if (userAP < 0){
        userAP = 0;
    }
    if (fungusHP < 0){
        fungusHP = 0;
    }
    render();
}

function dBAttack(){
    userAP - dragonBladeCost;
    fungusHP - dragonBladeDamage;
    if (userAP < 0){
        userAP = 0;
    }
    if (fungusHP < 0){
        fungusHP = 0;
    }
    render();
    return "Attack with Dragon Blade! Scorch!"
}

function eAttack(){
    userAP - entangleCost;
    fungusHP - entangleDamage;
    if (userAP < 0){
        userAP = 0;
    }
    if (fungusHP < 0){
        fungusHP = 0;
    }
    render();
    return "Attack with Entangle! Whoa!"
}

function sFAttack(){
    userAP - starFireCost;
    fungusHP - starFireDamage;
    if (userAP < 0){
        userAP = 0;
    }
    if (fungusHP < 0){
        fungusHP = 0;
    }
    render();
    return "Attack with Star Fire! Sizzle!"
}

function render(){
    $('#ap-text').html(`
        AP: ${userAP}
    `)
    $('#hp-text').html(`
        HP: ${fungusHP}
    `)
}

function youWin(){
    if (fungusHP = 0){
        $('#freaky-fungus-walk').replaceClass('freaky-fungus dead');
    }
}
function youLose(){
    if (userAP = 0){
        $('freaky-fungus-walk').replaceClass('freaky-fungus jump');

        $('#attack-btn arcane-sceptre').prop('disabled, true');
        $('#attack-btn dragon-blade').prop('disabled, true');
        $('#attack-btn entagle').prop('disabled, true');
        $('#attack-btn star-fire').prop('disabled, true');
    }
}