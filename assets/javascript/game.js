// Character Info
let deadpool = {
    "name": "Deadpool",
    "hitPoints": 500,
    "maxHitPoints": 500,
    "healing": true,
    "healPoints": 100,
    "healCounter": 8,
    "maxHeals": 8,
    "attack": [75, 78, 79, 80, 81, 82, 85, 100],
    "counterAttack": [70, 73, 75, 80, 95, 100],
    "pic": '<img src = "assets/images/deadpoolProfile.jpg">',
};

let wolverine = {
    "name": "Wolverine",
    "hitPoints": 550,
    "maxHitPoints": 550,
    "healing": true,
    "healPoints": 100,
    "healCounter": 5,
    "maxHeals": 5,
    "attack": [50, 55, 60, 65, 80, 100, 110, 115],
    "counterAttack": [70, 75, 80, 95, 100],
    "pic": '<img src = "assets/images/wolverineProfile.jpg">',
};

let hulk = {
    "name": "Hulk",
    "hitPoints": 625,
    "maxHitPoints": 625,
    "healing": false,
    "attack": [90, 100, 110, 150],
    "counterAttack": [80, 95, 100, 110],
    "2ndLife": false,
    "pic": '<img src = "assets/images/hulkProfile.jpg">',
};

//Store atacker and defender names
let attacker = [];
let defender1 = [];
let defender2 = [];
let combatant = [];
let charChosen = false;
let opp1Chosen = false;
let opp2Chosen = false;
let opp1Defeated = false;
let defender1chosen = false;
let defender2chosen = false;
let inCombat = false;
let winCounter = 0;

//audio files
let startSound = document.createElement("audio")
startSound.setAttribute("src", "assets/audio/startSound.mp3")

let deadSelect = document.createElement("audio")
deadSelect.setAttribute("src", "assets/audio/deadSelect.mp3");

let wolverineSelect = document.createElement("audio")
wolverineSelect.setAttribute("src", "assets/audio/wolverineSelect.mp3");

let hulkSelect = document.createElement("audio")
hulkSelect.setAttribute("src", "assets/audio/hulkSelect.mp3")


//Sets up the DOM for game start
function startGame() {

    
    startSound.play();
    document.getElementById("p1Name").innerHTML = deadpool["name"];
    document.getElementById("p1Pic").innerHTML = deadpool["pic"];
    document.getElementById("p1HP").innerHTML = `HP - ${deadpool["hitPoints"]}`;
    document.getElementById("p2Name").innerHTML = wolverine["name"];
    document.getElementById("p2Pic").innerHTML = wolverine["pic"];
    document.getElementById("p2HP").innerHTML = `HP - ${wolverine["hitPoints"]}`;
    document.getElementById("p3Name").innerHTML = hulk["name"];
    document.getElementById("p3Pic").innerHTML = hulk["pic"];
    document.getElementById("p3HP").innerHTML = `HP - ${hulk["hitPoints"]}`;
    document.getElementById("defender-row").style.display = 'none';
    document.getElementById("combat-row").style.display = 'none';
    document.getElementById("playAgain").style.display = 'none';
    document.getElementById("chooseTitle").textContent = "Choose your Character";
    document.getElementById("chooseTitle").style.display = 'block';
    //document.body.style.background = 'URL("assets/images/background.jpg")';
    // document.body.style.background = "contain";
};

startGame();

//Character selection
$("#p1Pic").on("click", function () {
    if (charChosen === false) {
        deadSelect.play();
        charChosen = true;
        attacker = deadpool;
        defender1 = wolverine;
        defender2 = hulk;
        $("#p2Name").empty();
        $("#p2Pic").empty();
        $("#p2HP").empty();
        $("#p3Name").empty();
        $("#p3Pic").empty();
        $("#p3HP").empty();
        document.getElementById("p2").style.display = 'none';
        document.getElementById("p3").style.display = 'none';
        document.getElementById("defender1Name").innerHTML = defender1["name"];
        document.getElementById("defender1Profile").innerHTML = defender1["pic"];
        document.getElementById("defender1HitPoints").innerHTML = `HP - ${defender1["hitPoints"]}`;
        document.getElementById("defender2Name").innerHTML = defender2["name"];
        document.getElementById("defender2Profile").innerHTML = defender2["pic"];
        document.getElementById("defender2HitPoints").innerHTML = `HP - ${defender2["hitPoints"]}`;
        document.getElementById("defender-row").style.display = 'block';
        document.getElementById("chooseTitle").textContent = "Your Character"

    };
});

$("#p2Pic").on("click", function () {
    if (charChosen === false) {
        wolverineSelect.play();
        charChosen = true;
        attacker = wolverine;
        defender1 = deadpool;
        defender2 = hulk;
        document.getElementById("p1Name").innerHTML = attacker["name"];
        document.getElementById("p1Pic").innerHTML = attacker["pic"];
        document.getElementById("p1HP").innerHTML = `HP - ${attacker["hitPoints"]}`;
        $("#p2Name").empty();
        $("#p2Pic").empty();
        $("#p2HP").empty();
        $("#p3Name").empty();
        $("#p3Pic").empty();
        $("#p3HP").empty();
        document.getElementById("p2").style.display = 'none';
        document.getElementById("p3").style.display = 'none';
        document.getElementById("defender1Name").innerHTML = defender1["name"];
        document.getElementById("defender1Profile").innerHTML = defender1["pic"];
        document.getElementById("defender1HitPoints").innerHTML = `HP - ${defender1["hitPoints"]}`;
        document.getElementById("defender2Name").innerHTML = defender2["name"];
        document.getElementById("defender2Profile").innerHTML = defender2["pic"];
        document.getElementById("defender2HitPoints").innerHTML = `HP - ${defender2["hitPoints"]}`;
        document.getElementById("defender-row").style.display = 'block';

    };
});

$("#p3Pic").on("click", function () {
    if (charChosen === false) {
        hulkSelect.play();
        charChosen = true;
        attacker = hulk;
        defender1 = deadpool;
        defender2 = wolverine;
        document.getElementById("p1Name").innerHTML = attacker["name"];
        document.getElementById("p1Pic").innerHTML = attacker["pic"];
        document.getElementById("p1HP").innerHTML = `HP - ${attacker["hitPoints"]}`;
        $("#p2Name").empty();
        $("#p2Pic").empty();
        $("#p2HP").empty();
        $("#p3Name").empty();
        $("#p3Pic").empty();
        $("#p3HP").empty();
        document.getElementById("p2").style.display = 'none';
        document.getElementById("p3").style.display = 'none';
        document.getElementById("defender1Name").innerHTML = defender1["name"];
        document.getElementById("defender1Profile").innerHTML = defender1["pic"];
        document.getElementById("defender1HitPoints").innerHTML = `HP - ${defender1["hitPoints"]}`;
        document.getElementById("defender2Name").innerHTML = defender2["name"];
        document.getElementById("defender2Profile").innerHTML = defender2["pic"];
        document.getElementById("defender2HitPoints").innerHTML = `HP - ${defender2["hitPoints"]}`;
        document.getElementById("defender-row").style.display = 'block';

    };
});

//chose first opponent

$("#defender1Profile").on("click", function () {
    if (charChosen === true && opp1Chosen === false) {
        opp1Chosen = true;
        defender1chosen = true;
        combatant = defender1;
        document.getElementById("defender1Name").innerHTML = defender2["name"];
        document.getElementById("defender1Profile").innerHTML = defender2["pic"];
        document.getElementById("defender1HitPoints").innerHTML = `HP - ${defender2["hitPoints"]}`;
        document.getElementById("combatName").innerHTML = defender1["name"];
        document.getElementById("combatProfile").innerHTML = defender1["pic"];
        document.getElementById("combatHitPoints").innerHTML = `HP - ${defender1["hitPoints"]}`;
        $("#defender2Name").empty();
        $("#defender2Profile").empty();
        $("#defender2HitPoints").empty();
        document.getElementById("defender-row").style.display = 'none';
        document.getElementById("combat-row").style.display = 'block';
        document.getElementById("combatTitle").textContent = `${attacker["name"]} versus ${defender1["name"]}`;
        if (attacker["healing"] === false) {
            document.getElementById("heal").style.display = 'none';
            document.getElementById("attack").style.display = 'inline';
        } else {
            document.getElementById("heal").style.display = 'inline';
            document.getElementById("heal").textContent = `Heal - ${attacker["healCounter"]}`;
            document.getElementById("attack").style.display = 'inline';
        };
    };
});

$("#defender2Profile").on("click", function () {
    if (charChosen === true && opp1Chosen === false) {
        opp1Chosen = true;
        defender2chosen = true;
        combatant = defender2;
        document.getElementById("combatName").innerHTML = defender2["name"];
        document.getElementById("combatProfile").innerHTML = defender2["pic"];
        document.getElementById("combatHitPoints").innerHTML = `HP - ${defender2["hitPoints"]}`;
        $("#defender2Name").empty();
        $("#defender2Profile").empty();
        $("#defender2HitPoints").empty();
        document.getElementById("defender-row").style.display = 'none';
        document.getElementById("combat-row").style.display = 'block';
        document.getElementById("combatTitle").textContent = `${attacker["name"]} versus ${defender2["name"]}`;
        if (attacker["healing"] === false) {
            document.getElementById("heal").style.display = 'none';
            document.getElementById("attack").style.display = 'inline';
        } else {
            document.getElementById("heal").style.display = 'inline';
            document.getElementById("heal").textContent = `Heal - ${attacker["healCounter"]}`;
            document.getElementById("attack").style.display = 'inline';
        };
    };
});

//chose second opponent
// Not using...decided on different combat flow
/*
$("#defender1Profile").on("click", function() {
    if (opp1Defeated === true && defender1chosen === false && opp2Chosen === false) {
        opp2Chosen = true;
        combatant = defender1;
        document.getElementById("combatName").innerHTML = defender1["name"];
        document.getElementById("combatProfile").innerHTML = defender1["pic"];
        document.getElementById("combatHitPoints").innerHTML = defender1["hitPoints"];
        $("#defender1Name").empty();
        $("#defender1Profile").empty();
        $("#defender1HitPoints").empty();
        document.getElementById("defender-row").style.display = 'none';
        document.getElementById("combat-row").style.display = 'block';
        if (attacker["healing"] === false) {
            document.getElementById("heal").style.display = 'none';
        };
    };
});

$("#defender1Profile").on("click", function() {
    if (opp1Defeated === true && defender1chosen === true && opp2Chosen === false) {
        opp2Chosen = true;
        combatant = defender2
        document.getElementById("combatName").innerHTML = defender2["name"];
        document.getElementById("combatProfile").innerHTML = defender2["pic"];
        document.getElementById("combatHitPoints").innerHTML = defender2["hitPoints"];
        $("#defender1Name").empty();
        $("#defender1Profile").empty();
        $("#defender1HitPoints").empty();
        document.getElementById("defender-row").style.display = 'none';
        document.getElementById("combat-row").style.display = 'block';
        if (attacker["healing"] === false) {
            document.getElementById("heal").style.display = 'none';
        };
    };
});
*/

//Combat

//defender auto heals when health is below 50 and above 0
function healCheck() {
    if (combatant["healing"] === true && combatant["hitPoints"] < 75 && combatant["healCounter"] > 0 && combatant["hitPoints"] > 0) {
        combatant["hitPoints"] = combatant["hitPoints"] + combatant["healPoints"];
        document.getElementById("combatHitPoints").innerHTML = `HP - ${combatant["hitPoints"]}`;
        document.getElementById("combatText2").textContent = `${combatant["name"]} used their super heaing and healed ${combatant["healPoints"]} hit points!`;
        combatant["healCounter"]--;
        counterAttack();
    } else counterAttack();
};

//computer counter attack
function counterAttack() {
    if (combatant["hitPoints"] <= 0) {
        winLose();
    } else {
        let attackCounter = combatant["counterAttack"][Math.floor(Math.random() * combatant.counterAttack.length)];
        attacker["hitPoints"] = attacker["hitPoints"] - attackCounter;
        document.getElementById("p1HP").innerHTML = `HP - ${attacker["hitPoints"]}`;
        document.getElementById('combatText3').textContent = `${combatant["name"]} hit your for ${attackCounter} damage`;
        winLose();
    };
};

//player healing logic
$("#heal").on("click", function () {
    if (attacker["healing"] === true && attacker["healCounter"] > 0 && attacker["hitPoints"] === attacker["maxHitPoints"]) {
        $("#combatText1").empty();
        $("#combatText3").empty();
        document.getElementById("combatText2").textContent = 'You are already at full health';
    } else if (attacker["healing"] === true && attacker["healCounter"] > 0 && attacker["hitPoints"] <= (attacker["maxHitPoints"] - attacker["healPoints"])) {
        $("#combatText1").empty();
        $("#combatText3").empty();
        attacker["hitPoints"] = attacker["hitPoints"] + attacker["healPoints"];
        document.getElementById("p1HP").innerHTML = `HP - ${attacker["hitPoints"]}`;
        document.getElementById("combatText2").textContent = `You healed ${attacker["healPoints"]} hit points`;
        attacker["healCounter"]--;
        document.getElementById("heal").textContent = `Heal - ${attacker["healCounter"]}`;
    } else if (attacker["healing"] === true && attacker["healCounter"] > 0 && attacker["hitPoints"] > (attacker["maxHitPoints"] - attacker["healPoints"])) {
        $("#combatText1").empty();
        $("#combatText3").empty();
        document.getElementById("combatText2").textContent = `You healed ${attacker["maxHitPoints"] - attacker["hitPoints"]} hit points`;
        attacker["hitPoints"] = attacker["maxHitPoints"];
        document.getElementById("p1HP").innerHTML = `HP - ${attacker["hitPoints"]}`;
        attacker["healCounter"]--;
        document.getElementById("heal").textContent = `Heal - ${attacker["healCounter"]}`;
    };
});

//winLose logic

function winLose() {
    if (defender1chosen === true && winCounter === 0 && combatant["hitPoints"] <= 0) {
        document.getElementById("combatTitle").textContent = "Final Battle";
        document.getElementById("combatName").innerHTML = defender2["name"];
        document.getElementById("combatProfile").innerHTML = defender2["pic"];
        document.getElementById("combatHitPoints").innerHTML = `HP - ${defender2["hitPoints"]}`;
        document.getElementById('combatText1').textContent = `Prepare for the final battle`;
        document.getElementById("chooseTitle").textContent = `${attacker["name"]} versus ${defender2["name"]}`;
        combatant = defender2;
        winCounter++;
    } else if (defender2chosen === true && winCounter === 0 && combatant["hitPoints"] <= 0) {
        document.getElementById("combatTitle").textContent = "Final Battle";
        document.getElementById("combatName").innerHTML = defender1["name"];
        document.getElementById("combatProfile").innerHTML = defender1["pic"];
        document.getElementById("combatHitPoints").innerHTML = `HP - ${defender1["hitPoints"]}`;
        document.getElementById('combatText1').textContent = `Prepare for the final battle`;
        document.getElementById("chooseTitle").textContent = `${attacker["name"]} versus ${defender1["name"]}`;
        combatant = defender1;
        winCounter++;
    } else if (winCounter === 1 && combatant["hitPoints"] <= 0) {
      /*  $("#combatName").empty();
        $("#combatProfile").empty();
        $("#combatHitPoints").empty();*/
        $("#combatText1").empty();
        $("#combatText2").empty();
        $("#combatText3").empty();
        document.getElementById("combatant").style.display = 'none';
        document.getElementById("heal").style.display = 'none';
        document.getElementById("attack").style.display = 'none';
        document.getElementById("chooseTitle").style.display = 'none';
        document.getElementById("combatTitle").textContent = "You Win!";
        document.getElementById("playAgain").style.display = 'block';
    } else if (attacker["hitPoints"] <= 0) {
      /*  $("#combatName").empty();
        $("#combatProfile").empty();
        $("#combatHitPoints").empty(); */
        $("#combatText1").empty();
        $("#combatText2").empty();
        $("#combatText3").empty();
        document.getElementById("combatant").style.display = 'none';
        document.getElementById("heal").style.display = 'none';
        document.getElementById("attack").style.display = 'none';
        document.getElementById("chooseTitle").style.display = 'none';
        document.getElementById("combatTitle").textContent = "You Lose!";
        document.getElementById("playAgain").style.display = 'block';
    }
};

//attack button
$("#attack").on("click", function () {
    $("#combatText2").empty();
    $("#combatText3").empty();
    let yourAttack = attacker["attack"][Math.floor(Math.random() * attacker.attack.length)];
    //let attackCounter = combatant["counterAttack"][Math.floor(Math.random() * combatant.counterAttack.length)];
    combatant["hitPoints"] = combatant["hitPoints"] - yourAttack;
    //attacker["hitPoints"] = attacker["hitPoints"] - attackCounter;
    document.getElementById("combatHitPoints").innerHTML = `HP - ${combatant["hitPoints"]}`;
    //document.getElementById("p1HP").innerHTML = attacker["hitPoints"];
    //document.getElementById('combatText1').textContent = `You attacked ${combatant["name"]} for ${yourAttack} damage and they hit you back for ${attackCounter}`;
    document.getElementById('combatText1').textContent = `You attacked ${combatant["name"]} for ${yourAttack} damage`;
    healCheck();
});



$("#playAgain").on("click", function () {
    deadpool["hitPoints"] = deadpool["maxHitPoints"];
    deadpool["healCounter"] = deadpool["maxHeals"];
    wolverine["hitPoints"] = wolverine["maxHitPoints"];
    wolverine["healCounter"] = wolverine["maxHeals"];
    hulk["hitPoints"] = hulk["maxHitPoints"];
    attacker = [];
    defender1 = [];
    defender2 = [];
    combatant = [];
    charChosen = false;
    opp1Chosen = false;
    opp2Chosen = false;
    opp1Defeated = false;
    defender1chosen = false;
    defender2chosen = false;
    inCombat = false;
    winCounter = 0;
    document.getElementById("p2").style.display = 'block';
    document.getElementById("p3").style.display = 'block';
    document.getElementById("combatant").style.display = 'block';
    startGame();
});