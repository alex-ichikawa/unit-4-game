
//audio files
let startSound = document.createElement("audio")
startSound.setAttribute("src", "assets/audio/startSound.mp3");

let deadSelect = document.createElement("audio")
deadSelect.setAttribute("src", "assets/audio/deadSelect.mp3");

let wolverineSelect = document.createElement("audio")
wolverineSelect.setAttribute("src", "assets/audio/wolverineSelect.mp3");

let hulkSelect = document.createElement("audio")
hulkSelect.setAttribute("src", "assets/audio/hulkSelect.mp3");

let deadSpecial = document.createElement("audio")
deadSpecial.setAttribute("src", "assets/audio/deadSpecial.mp3");

let wolverineSpecial = document.createElement("audio")
wolverineSpecial.setAttribute("src", "assets/audio/wolverineSpecial.mp3");

let hulkSpecial = document.createElement("audio")
hulkSpecial.setAttribute("src", "assets/audio/hulkSpecial.mp3");

let deadLose = document.createElement("audio")
deadLose.setAttribute("src", "assets/audio/deadLose.mp3");

let wolverineLose = document.createElement("audio")
wolverineLose.setAttribute("src", "assets/audio/wolverineLose.mp3");

let hulkLose = document.createElement("audio")
hulkLose.setAttribute("src", "assets/audio/hulkLose.mp3");

let deadHeal = document.createElement("audio")
deadHeal.setAttribute("src", "assets/audio/deadHeal.mp3");

let wolverineHeal = document.createElement("audio")
wolverineHeal.setAttribute("src", "assets/audio/wolverineHeal.mp3");

let deadWin = document.createElement("audio")
deadWin.setAttribute("src", "assets/audio/deadWin.mp3");

let wolverineWin = document.createElement("audio")
wolverineWin.setAttribute("src", "assets/audio/wolverineWin.mp3");

let hulkWin = document.createElement("audio")
hulkWin.setAttribute("src", "assets/audio/hulkWin.mp3");

let punch1 = document.createElement("audio")
punch1.setAttribute("src", "assets/audio/punch1.mp3");

let punch2 = document.createElement("audio")
punch2.setAttribute("src", "assets/audio/punch2.mp3");

let punch3 = document.createElement("audio")
punch3.setAttribute("src", "assets/audio/punch3.mp3");

//punch sound arrays

punches = [punch1, punch2, punch3];


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
    "specialMove": "Katana-Rama",
    "specialCounter": 1,
    "specialDamage": 150,
    "selectAudio": deadSelect,
    "specialAudio": deadSpecial,
    "loseAudio": deadLose,
    "healAudio": deadHeal,
    "winAudio": deadWin,
    "choice1": false,
    "choice2": false,
};

let wolverine = {
    "name": "Wolverine",
    "hitPoints": 550,
    "maxHitPoints": 550,
    "healing": true,
    "healPoints": 100,
    "healCounter": 5,
    "maxHeals": 5,
    "attack": [75, 80, 100, 105, 110, 115],
    "counterAttack": [70, 75, 80, 95, 100],
    "pic": '<img src = "assets/images/wolverineProfile.jpg">',
    "specialMove": "Berserker Barrage",
    "specialCounter": 1,
    "specialDamage": 200,
    "selectAudio": wolverineSelect,
    "specialAudio": wolverineSpecial,
    "loseAudio": wolverineLose,
    "healAudio": wolverineHeal,
    "winAudio": wolverineWin,
    "choice1": false,
    "choice2": false,
};

let hulk = {
    "name": "Hulk",
    "hitPoints": 675,
    "maxHitPoints": 675,
    "healing": false,
    "attack": [90, 100, 110, 150],
    "counterAttack": [80, 95, 100, 110],
    "pic": '<img src = "assets/images/hulkProfile.jpg">',
    "specialMove": "Hulk Smash",
    "specialCounter": 1,
    "specialDamage": 300,
    "selectAudio": hulkSelect,
    "specialAudio": hulkSpecial,
    "loseAudio": hulkLose,
    "winAudio": hulkWin,
    "choice1": false,
    "choice2": false,
};

let ironMan ={
    "name": "Iron Man",
    "hitPoints": 600,
    "maxHitPoints": 600,
    "healing": false,
    "attack": [90, 100, 110, 150],
    "counterAttack": [80, 95, 100, 110],
    "pic": '<img src = "assets/images/hulkProfile.jpg">',
    "specialMove": "Hulk Smash",
    "specialCounter": 1,
    "specialDamage": 300,
    "selectAudio": hulkSelect,
    "specialAudio": hulkSpecial,
    "loseAudio": hulkLose,
    "winAudio": hulkWin,
    "choice1": false,
    "choice2": false,
};

//Store atacker and defender names
let attacker = [];
let attacker2 = [];
let clickName = [];
let clicked = [];
let defender1 = [];
let defender2 = [];
let combatant = [];
let charChosen = false;
let charChosen2 = false;
let opp1Chosen = false;
let opp2Chosen = false;
let opp1Defeated = false;
let defender1chosen = false;
let defender2chosen = false;
let inCombat = false;
let winCounter = 0;
let charArray = [deadpool, wolverine, hulk, ironMan];
let combatant1 = [];
let combatant2 = [];
let enemyAttacked = [];
let attacking = [];
let lossCounter = 0;
let specialSelected = false;


//Title Screen

function title() {
    document.body.style.background = 'URL("assets/images/background1.jpg") no-repeat';
    document.body.style.backgroundSize = "100%";
    document.getElementById("chooseTitle").style.display = 'none';
    document.getElementById("charRow").style.display = 'none';
    document.getElementById("defender-row").style.display = 'none';
    document.getElementById("combat-row").style.display = 'none';
};

title();


//Sets up the DOM for game start
function startGame() {

    
    startSound.play();
    document.getElementById("p1Name").innerHTML = deadpool["name"];
    document.getElementById("p1Pic").innerHTML = deadpool["pic"];
    document.getElementById("p1HP").innerHTML = `HP: ${deadpool["hitPoints"]}`;
    document.getElementById("p2Name").innerHTML = wolverine["name"];
    document.getElementById("p2Pic").innerHTML = wolverine["pic"];
    document.getElementById("p2HP").innerHTML = `HP: ${wolverine["hitPoints"]}`;
    document.getElementById("p3Name").innerHTML = hulk["name"];
    document.getElementById("p3Pic").innerHTML = hulk["pic"];
    document.getElementById("p3HP").innerHTML = `HP: ${hulk["hitPoints"]}`;
    document.getElementById("p4Name").innerHTML = ironMan["name"];
    document.getElementById("p4Pic").innerHTML = ironMan["pic"];
    document.getElementById("p4HP").innerHTML = `HP: ${ironMan["hitPoints"]}`;
    document.getElementById("defender-row").style.display = 'none';
    document.getElementById("combat-row").style.display = 'none';
    document.getElementById("playAgain").style.display = 'none';
    document.getElementById("chooseTitle").textContent = "Choose your Character";
    document.getElementById("chooseTitle").style.display = 'block';
    document.getElementById('top-row').style.display = 'inline-block';
    document.getElementById("charRow").style.display = 'inline-flex';
    document.getElementById("start").style.display = 'none';
    document.body.style.background = 'URL("assets/images/background2.jpg")';
    document.body.style.background = "contain";
};

//click to start game
$("#start").on("click", function() {
    startGame();
});

//combat row set up
function combatRowSetup() {
    document.getElementById("combatName").innerHTML = combatant1["name"];
    document.getElementById("combatProfile").innerHTML = combatant1["pic"];
    document.getElementById("combatHitPoints").innerHTML = `HP: ${combatant1["hitPoints"]}`;
    document.getElementById("combatName").className = `name combatant ${combatant1["name"]}`;
    document.getElementById("combatProfile").className = `pic combatant ${combatant1["name"]}`;
    document.getElementById("combatHitPoints").className = `hp combatant ${combatant1["name"]}`;
    document.getElementById("combatName2").innerHTML = combatant2["name"];
    document.getElementById("combatProfile2").innerHTML = combatant2["pic"];
    document.getElementById("combatHitPoints2").innerHTML = `HP: ${combatant2["hitPoints"]}`;
    document.getElementById("combatName2").className = `name combatant ${combatant2["name"]}`;
    document.getElementById("combatProfile2").className = `pic combatant ${combatant2["name"]}`;
    document.getElementById("combatHitPoints2").className = `hp combatant ${combatant2["name"]}`;
    document.getElementById("combat-row").style.display = 'inline-block';
    document.getElementById("combatant-row").style.display = 'inline-flex';
    document.getElementById("attackBut").style.display = 'block';
    document.getElementById("attackBut2").style.display = 'block';
    document.getElementById("chooseTitle").textContent = `${attacker["name"]} and ${attacker2["name"]} VS ${combatant1["name"]} and ${combatant2["name"]}`;
    document.getElementById("p3").style.display = 'block';
    document.getElementById("p4").style.display = 'block';
    if (attacker["healing"] === false) {
        document.getElementById("heal").style.display = 'none';
        document.getElementById("special").textContent = `${attacker["specialMove"]}: ${attacker["specialCounter"]}`;
    } else {
        document.getElementById("heal").textContent = `Heal: ${attacker["healCounter"]}`;
        document.getElementById("special").textContent = `${attacker["specialMove"]}: ${attacker["specialCounter"]}`;
    };
    if (attacker2["healing"] === false) {
        document.getElementById("heal2").style.display = 'none';
        document.getElementById("special2").textContent = `${attacker2["specialMove"]}: ${attacker2["specialCounter"]}`;
    } else {
        document.getElementById("heal2").textContent = `Heal: ${attacker2["healCounter"]}`;
        document.getElementById("special2").textContent = `${attacker2["specialMove"]}: ${attacker2["specialCounter"]}`;
    };

};

//remove attacker 1 from charArray
function removeAttk1() {
    let i = charArray.indexOf(attacker);
    charArray.splice(i, 1);
};

//remove attacker 2 from charArray
function removeAttk2() {
    let i = charArray.indexOf(attacker2);
    charArray.splice(i, 1);
    charRowSetup();
};

//sets up top row after selecting 2 characters
function charRowSetup() {
    document.getElementById("p1Name").innerHTML = attacker["name"];
    document.getElementById("p1Pic").innerHTML = attacker["pic"];
    document.getElementById("p1HP").innerHTML = `HP: ${attacker["hitPoints"]}`;
    document.getElementById("p1").className = `col-3 text-center ${attacker["name"]}`;
    document.getElementById("p1HP").className = `hp selected ${attacker["name"]}`;
    document.getElementById("attack").className = `actButn attack ${attacker["name"]}`;
    document.getElementById("special").className = `actButn special ${attacker["name"]}`;
    document.getElementById("heal").className = `actButn heal ${attacker["name"]}`;
   // document.getElementById("p1name").className = `p1Name ${attacker["name"]}`;
    document.getElementById("p2Name").innerHTML = attacker2["name"];
    document.getElementById("p2Pic").innerHTML = attacker2["pic"];
    document.getElementById("p2HP").innerHTML = `HP: ${attacker2["hitPoints"]}`;
    document.getElementById("attack2").className = `actButn attack ${attacker2["name"]}`;
    document.getElementById("special2").className = `actButn special ${attacker2["name"]}`;
    document.getElementById("heal2").className = `actButn heal ${attacker2["name"]}`;
    document.getElementById("p2").className = `col-3 text-center ${attacker2["name"]}`;
    document.getElementById("p2HP").className = `hp selected ${attacker2["name"]}`;
    defenderSelection();
};

//combatant selection
function defenderSelection() {
combatant1 = charArray[0];
combatant2 = charArray[1];
combatRowSetup();
};

//character slection function
function charSelect() {
    if (charChosen === false) {
        charChosen = true;
        attacker = clicked;
        clicked["choice1"] = true;
        //attacker["choice1"] = true;
    } else if (charChosen === true && attacker["name"] === clicked["name"] && charChosen2 === false) {
        charChosen = false;
        attacker["choice1"] = false;
        attacker = [];
        clicked = [];
        clickName = [];
        //document.getElementById("p1Name").className = "name";//removes class for css to unhighlight selected
        //document.getElementById("p1HP").className = "hp";//removes class for css to unhighlight selected
        document.getElementsByClassName("name selected")[0].className = "name";
        document.getElementsByClassName("hp selected")[0].className = "hp";
        
    } else if (charChosen === true && charChosen2 === false && attacker["choice1"] === true && clickName != attacker["name"]) {
        charChosen2 = true;
        attacker2 = clicked;
        clicked["choice2"] = true;
        // $("#p3Name").empty();
        // $("#p3Pic").empty();
        // $("#p3HP").empty();
        // $("#p4Name").empty();
        // $("#p4Pic").empty();
        // $("#p4HP").empty();
        $("#p3").empty();
        $("#p4").empty();
        // document.getElementById("p3").style.display = 'none';
        // document.getElementById("p4").style.display = 'none';
        document.getElementById("p1Name").className = "name selected"; //add class for css to highlight selected
        document.getElementById("p1HP").className = "hp selected"; //add class for css to highlight selected
        document.getElementById("p2Name").className = "name selected"; //add class for css to highlight selected
        document.getElementById("p2HP").className = "hp selected"; //add class for css to highlight selected
        removeAttk1();
        removeAttk2();
    };
};


//Character selection
$("#p1Pic").on("click", function () {
    if (charChosen2 === false) {
        deadpool["selectAudio"].play();
        //attacker = deadpool;
        clickName = deadpool["name"];
        clicked = deadpool;
        //deadpool["choice1"] = true;
        //defender1 = wolverine;
       // defender2 = hulk;
        document.getElementById("p1Name").className = "name selected"; //add class for css to highlight selected
        document.getElementById("p1HP").className = "hp selected"; //add class for css to highlight selected
       /* $("#p2Name").empty();
        $("#p2Pic").empty();
        $("#p2HP").empty();
        $("#p3Name").empty();
        $("#p3Pic").empty();
        $("#p3HP").empty();
        document.getElementById("p2").style.display = 'none';
        document.getElementById("p3").style.display = 'none';
        document.getElementById("defender1Name").innerHTML = defender1["name"];
        document.getElementById("defender1Profile").innerHTML = defender1["pic"];
        document.getElementById("defender1HitPoints").innerHTML = `HP: ${defender1["hitPoints"]}`;
        document.getElementById("defender2Name").innerHTML = defender2["name"];
        document.getElementById("defender2Profile").innerHTML = defender2["pic"];
        document.getElementById("defender2HitPoints").innerHTML = `HP: ${defender2["hitPoints"]}`;
        document.getElementById("defender-row").style.display = 'block';
        document.getElementById("chooseTitle").textContent = "Your Character";
        document.getElementById("special").textContent = `${attacker["specialMove"]}: ${attacker["specialCounter"]}`; */
        charSelect();

    };
});

$("#p2Pic").on("click", function () {
    if (charChosen2 === false) {
        wolverine["selectAudio"].play();
        //charChosen = true;
        //attacker = wolverine;
        clickName = wolverine["name"];
        clicked = wolverine;
       // wolverine["choice1"] = true
        //defender1 = deadpool;
        //defender2 = hulk;
        document.getElementById("p2Name").className = "name selected"; //add class for css to highlight selected
        document.getElementById("p2HP").className = "hp selected"; //add class for css to highlight selected
      /*  document.getElementById("p1Name").innerHTML = attacker["name"];
        document.getElementById("p1Pic").innerHTML = attacker["pic"];
        document.getElementById("p1HP").innerHTML = `HP: ${attacker["hitPoints"]}`;
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
        document.getElementById("defender1HitPoints").innerHTML = `HP: ${defender1["hitPoints"]}`;
        document.getElementById("defender2Name").innerHTML = defender2["name"];
        document.getElementById("defender2Profile").innerHTML = defender2["pic"];
        document.getElementById("defender2HitPoints").innerHTML = `HP: ${defender2["hitPoints"]}`;
        document.getElementById("defender-row").style.display = 'block';
        document.getElementById("chooseTitle").textContent = "Your Character";
        document.getElementById("special").textContent = `${attacker["specialMove"]}: ${attacker["specialCounter"]}`; */
        charSelect();
    };
});

$("#p3Pic").on("click", function () {
    if (charChosen2 === false) {
        hulk["selectAudio"].play();
       // charChosen = true;
        //attacker = hulk;
        clickName = hulk["name"];
        clicked = hulk;
        //hulk["choice1"] = true
       // defender1 = deadpool;
       // defender2 = wolverine;
        document.getElementById("p3Name").className = "name selected"; //add class for css to highlight selected
        document.getElementById("p3HP").className = "hp selected"; //add class for css to highlight selected
      /*document.getElementById("p1Name").innerHTML = attacker["name"];
        document.getElementById("p1Pic").innerHTML = attacker["pic"];
        document.getElementById("p1HP").innerHTML = `HP: ${attacker["hitPoints"]}`;
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
        document.getElementById("defender1HitPoints").innerHTML = `HP: ${defender1["hitPoints"]}`;
        document.getElementById("defender2Name").innerHTML = defender2["name"];
        document.getElementById("defender2Profile").innerHTML = defender2["pic"];
        document.getElementById("defender2HitPoints").innerHTML = `HP: ${defender2["hitPoints"]}`;
        document.getElementById("defender-row").style.display = 'block';
        document.getElementById("chooseTitle").textContent = "Your Character";
        document.getElementById("special").textContent = `${attacker["specialMove"]}: ${attacker["specialCounter"]}`; */
        charSelect();
    };
});

$("#p4Pic").on("click", function () {
    if (charChosen2 === false) {
        ironMan["selectAudio"].play();
       // charChosen = true;
        //attacker = hulk;
        clickName = ironMan["name"];
        clicked = ironMan;
        //hulk["choice1"] = true
       // defender1 = deadpool;
       // defender2 = wolverine;
        document.getElementById("p4Name").className = "name selected"; //add class for css to highlight selected
        document.getElementById("p4HP").className = "hp selected"; //add class for css to highlight selected
      /*document.getElementById("p1Name").innerHTML = attacker["name"];
        document.getElementById("p1Pic").innerHTML = attacker["pic"];
        document.getElementById("p1HP").innerHTML = `HP: ${attacker["hitPoints"]}`;
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
        document.getElementById("defender1HitPoints").innerHTML = `HP: ${defender1["hitPoints"]}`;
        document.getElementById("defender2Name").innerHTML = defender2["name"];
        document.getElementById("defender2Profile").innerHTML = defender2["pic"];
        document.getElementById("defender2HitPoints").innerHTML = `HP: ${defender2["hitPoints"]}`;
        document.getElementById("defender-row").style.display = 'block';
        document.getElementById("chooseTitle").textContent = "Your Character";
        document.getElementById("special").textContent = `${attacker["specialMove"]}: ${attacker["specialCounter"]}`; */
        charSelect();
    };
});

//Combat

//defender auto heals when health is below 50 and above 0
function healCheck() {
    if (enemyAttacked["healing"] === true && enemyAttacked["hitPoints"] < 75 && enemyAttacked["healCounter"] > 0 && enemyAttacked["hitPoints"] > 0) {
        enemyAttacked["hitPoints"] = enemyAttacked["hitPoints"] + enemyAttacked["healPoints"];
        document.getElementsByClassName(`hp combatant ${enemyAttacked["name"]}`)[0].innerHTML = `HP: ${enemyAttacked["hitPoints"]}`;
        document.getElementById("combatText2").textContent = `${enemyAttacked["name"]} used their super heaing and healed ${enemyAttacked["healPoints"]} hit points!`;
        enemyAttacked["healCounter"]--;
        counterAttack();
    } else counterAttack();
};

//computer counter attack 
function counterAttack() {
    if (enemyAttacked["hitPoints"] <= 0) {
        winLose();
        //if random number is equal to 7 and speclial counter > 0 then performs special attack
    } else if ((Math.floor(Math.random() * 10)) === 7 && enemyAttacked["specialCounter"] > 0) {
        enemyAttacked["specialAudio"].play();
        attacking["hitPoints"] = attacking["hitPoints"] - enemyAttacked["specialDamage"];
        document.getElementsByClassName(`hp selected ${attacking["name"]}`)[0].innerHTML = `HP: ${attacking["hitPoints"]}`;
        document.getElementById('combatText3').textContent = `${enemyAttacked["name"]} hit you with ${enemyAttacked["specialMove"]} for ${enemyAttacked["specialDamage"]} damage`;
        enemyAttacked["specialCounter"]--;
        winLose();
    } else {
        let attackCounter = enemyAttacked["counterAttack"][Math.floor(Math.random() * enemyAttacked.counterAttack.length)];
        attacking["hitPoints"] = attacking["hitPoints"] - attackCounter;
        document.getElementsByClassName(`hp selected ${attacking["name"]}`)[0].innerHTML = `HP: ${attacking["hitPoints"]}`;
        document.getElementById('combatText3').textContent = `${enemyAttacked["name"]} hit your for ${attackCounter} damage`;
        winLose();
    };
};

//player 1 healing logic
$("#heal").on("click", function () {
    //if (enemyAttacked)
    if (attacker["healing"] === true && attacker["healCounter"] > 0 && attacker["hitPoints"] === attacker["maxHitPoints"]) {
        $("#combatText1").empty();
        $("#combatText3").empty();
        document.getElementById("combatText2").textContent = 'You are already at full health';
    } else if (attacker["healing"] === true && attacker["healCounter"] > 0 && attacker["hitPoints"] <= (attacker["maxHitPoints"] - attacker["healPoints"])) {
        attacker["healAudio"].play();
        $("#combatText1").empty();
        $("#combatText3").empty();
        attacker["hitPoints"] = attacker["hitPoints"] + attacker["healPoints"];
        document.getElementById("p1HP").innerHTML = `HP: ${attacker["hitPoints"]}`;
        document.getElementById("combatText2").textContent = `You healed ${attacker["healPoints"]} hit points`;
        attacker["healCounter"]--;
        document.getElementById("heal").textContent = `Heal: ${attacker["healCounter"]}`;
    } else if (attacker["healing"] === true && attacker["healCounter"] > 0 && attacker["hitPoints"] > (attacker["maxHitPoints"] - attacker["healPoints"])) {
        attacker["healAudio"].play();
        $("#combatText1").empty();
        $("#combatText3").empty();
        document.getElementById("combatText2").textContent = `You healed ${attacker["maxHitPoints"] - attacker["hitPoints"]} hit points`;
        attacker["hitPoints"] = attacker["maxHitPoints"];
        document.getElementById("p1HP").innerHTML = `HP: ${attacker["hitPoints"]}`;
        attacker["healCounter"]--;
        document.getElementById("heal").textContent = `Heal: ${attacker["healCounter"]}`;
    };
});

//player 2 healing logic
$("#heal2").on("click", function () {
    //if (enemyAttacked)
    if (attacker2["healing"] === true && attacker2["healCounter"] > 0 && attacker2["hitPoints"] === attacker2["maxHitPoints"]) {
        $("#combatText1").empty();
        $("#combatText3").empty();
        document.getElementById("combatText2").textContent = 'You are already at full health';
    } else if (attacker2["healing"] === true && attacker2["healCounter"] > 0 && attacker2["hitPoints"] <= (attacker2["maxHitPoints"] - attacker2["healPoints"])) {
        attacker2["healAudio"].play();
        $("#combatText1").empty();
        $("#combatText3").empty();
        attacker2["hitPoints"] = attacker2["hitPoints"] + attacker2["healPoints"];
        document.getElementById("p2HP").innerHTML = `HP: ${attacker2["hitPoints"]}`;
        document.getElementById("combatText2").textContent = `You healed ${attacker2["healPoints"]} hit points`;
        attacker2["healCounter"]--;
        document.getElementById("heal2").textContent = `Heal: ${attacker2["healCounter"]}`;
    } else if (attacker2["healing"] === true && attacker2["healCounter"] > 0 && attacker2["hitPoints"] > (attacker2["maxHitPoints"] - attacker2["healPoints"])) {
        attacker2["healAudio"].play();
        $("#combatText1").empty();
        $("#combatText3").empty();
        document.getElementById("combatText2").textContent = `You healed ${attacker2["maxHitPoints"] - attacker2["hitPoints"]} hit points`;
        attacker2["hitPoints"] = attacker2["maxHitPoints"];
        document.getElementById("p2HP").innerHTML = `HP: ${attacker2["hitPoints"]}`;
        attacker2["healCounter"]--;
        document.getElementById("heal2").textContent = `Heal: ${attacker2["healCounter"]}`;
    };
});

//winLose logic

function winLose() {
    console.log(attacking["hitPoints"]);
    if (winCounter === 0 && enemyAttacked["hitPoints"] <= 0) {
        document.getElementsByClassName(`name combatant ${enemyAttacked["name"]}`)[0].style.display = 'none';
        document.getElementsByClassName(`pic combatant ${enemyAttacked["name"]}`)[0].style.display = 'none';
        document.getElementsByClassName(`hp combatant ${enemyAttacked["name"]}`)[0].style.display = 'none';
        enemyAttacked["loseAudio"].play();
       /* document.getElementById("combatTitle").textContent = "Final Battle";
        document.getElementById("combatName").innerHTML = defender2["name"];
        document.getElementById("combatProfile").innerHTML = defender2["pic"];
        document.getElementById("combatHitPoints").innerHTML = `HP: ${defender2["hitPoints"]}`;
        document.getElementById('combatText1').textContent = `Prepare for the final battle`;
        document.getElementById("chooseTitle").textContent = `${attacker["name"]} versus ${defender2["name"]}`;
        combatant = defender2;*/
        winCounter++;
        enemyAttacked = [];
        attacking = [];
    /*} else if (defender2chosen === true && winCounter === 0 && combatant["hitPoints"] <= 0) {
        document.getElementById("combatTitle").textContent = "Final Battle";
        document.getElementById("combatName").innerHTML = defender1["name"];
        document.getElementById("combatProfile").innerHTML = defender1["pic"];
        document.getElementById("combatHitPoints").innerHTML = `HP: ${defender1["hitPoints"]}`;
        document.getElementById('combatText1').textContent = `Prepare for the final battle`;
        document.getElementById("chooseTitle").textContent = `${attacker["name"]} versus ${defender1["name"]}`;
        combatant = defender1;
        winCounter++;*/
    } else if (winCounter === 1 && enemyAttacked["hitPoints"] <= 0) {
        attacking["winAudio"].play();
        $("#combatText1").empty();
        $("#combatText2").empty();
        $("#combatText3").empty();
        document.getElementById("combatant").style.display = 'none';
        document.getElementById("heal").style.display = 'none';
        document.getElementById("attack").style.display = 'none';
        document.getElementById("special").style.display = 'none';
        document.getElementById("chooseTitle").style.display = 'none';
        document.getElementById("combatant2").style.display = 'none';
        document.getElementById("heal2").style.display = 'none';
        document.getElementById("attack2").style.display = 'none';
        document.getElementById("special2").style.display = 'none';
        document.getElementById("chooseTitle").style.display = 'none';
        document.getElementById("combatTitle").textContent = "You Win!";
        document.getElementById("playAgain").style.display = 'block';
        enemyAttacked = [];
        attacking = [];
    } else if (attacking["hitPoints"] <= 0 && lossCounter === 0) {
        attacking["loseAudio"].play();
        document.getElementsByClassName(`col-3 text-center ${attacking["name"]}`)[0].style.display = 'none';
        document.getElementsByClassName(`actButn attack ${attacking["name"]}`)[0].style.display = 'none';
        document.getElementsByClassName(`actButn special ${attacking["name"]}`)[0].style.display = 'none';
        document.getElementsByClassName(`actButn heal ${attacking["name"]}`)[0].style.display = 'none';
        lossCounter++;
        console.log(lossCounter);
        //$("#combatText1").empty();
        //$("#combatText2").empty();
        //$("#combatText3").empty();
       /* document.getElementById("combatant").style.display = 'none';
        document.getElementById("heal").style.display = 'none';
        document.getElementById("attack").style.display = 'none';
        document.getElementById("special").style.display = 'none';
        document.getElementById("combatTitle").style.display = 'none';
        document.getElementById("chooseTitle").textContent = "You Lose!";
        document.getElementById("playAgain").style.display = 'block';*/
    } else if (attacking["hitPoints"] <= 0 && lossCounter === 1) {
        console.log("you lose");
        attacking["loseAudio"].play();
        document.getElementById("chooseTitle").textContent = "You Lose!";
        document.getElementById("combat-row").style.display = 'none';
        document.getElementsByClassName(`col-3 text-center ${attacking["name"]}`)[0].style.display = 'none';
        document.getElementsByClassName(`actButn attack ${attacking["name"]}`)[0].style.display = 'none';
        document.getElementsByClassName(`actButn special ${attacking["name"]}`)[0].style.display = 'none';
        document.getElementsByClassName(`actButn heal ${attacking["name"]}`)[0].style.display = 'none';
        //$("#combatText1").empty();
        //$("#combatText2").empty();
        //$("#combatText3").empty();
        document.getElementById("combatant").style.display = 'none';
        document.getElementById("heal").style.display = 'none';
        document.getElementById("attack").style.display = 'none';
        document.getElementById("special").style.display = 'none';
        document.getElementById("heal2").style.display = 'none';
        document.getElementById("attack2").style.display = 'none';
        document.getElementById("special2").style.display = 'none';
        document.getElementById("combatTitle").style.display = 'none';
        document.getElementById("playAgain").style.display = 'block';
        enemyAttacked = [];
        attacking = [];
    } else {
        enemyAttacked = [];
        attacking = [];
    };
};

//enemy 1 to attack
$("#combatProfile").on("click", function() {
    if (specialSelected === false) {
    enemyAttacked = combatant1
    enemyToAttack();
    } else {
        enemyAttacked = combatant1
        specialAttack();
    };
});

//enemy 2 to attack
$("#combatProfile2").on("click", function() {
    if (specialSelected === false) {
    enemyAttacked = combatant2;
    enemyToAttack();
    } else {
        enemyAttacked = combatant2;
        specialAttack();
    };
});

//enemy attack selection
function enemyToAttack() {
    if (attacking != '') {
    punches[(Math.floor(Math.random() * punches.length))].play();
    let yourAttack = attacking["attack"][Math.floor(Math.random() * attacking.attack.length)];
    enemyAttacked["hitPoints"] = enemyAttacked["hitPoints"] - yourAttack;
    document.getElementsByClassName(`hp combatant ${enemyAttacked["name"]}`)[0].innerHTML = `HP: ${enemyAttacked["hitPoints"]}`;
    document.getElementById('combatText1').textContent = `You attacked ${enemyAttacked["name"]} for ${yourAttack} damage`;
    document.getElementById('combatText1').textContent = `Select enemy to attack`;
    healCheck();
    };
};

//special attack
function specialAttack() {
    attacking["specialAudio"].play();
    $("#combatText2").empty();
    $("#combatText3").empty();
    enemyAttacked["hitPoints"] = enemyAttacked["hitPoints"] - attacking["specialDamage"];
    document.getElementsByClassName(`hp combatant ${enemyAttacked["name"]}`)[0].innerHTML = `HP: ${enemyAttacked["hitPoints"]}`;
    document.getElementById('combatText1').textContent = `You attacked ${enemyAttacked["name"]} with ${attacking["specialMove"]} for ${attacking["specialDamage"]} damage`;
    attacking["specialCounter"]--;
    //document.getElementById("special").textContent = `${attacking["specialMove"]}: ${attacking["specialCounter"]}`;
    document.getElementsByClassName(`actButn special ${attacking["name"]}`)[0].textContent = `${attacking["specialMove"]}: ${attacking["specialCounter"]}`;
    specialSelected = false;
    healCheck();
};

//attack button player 1
$("#attack").on("click", function () {
    $("#combatText2").empty();
    $("#combatText3").empty();
    attacking = attacker;
});

//attack button player 2
$("#attack2").on("click", function () {
     $("#combatText2").empty();
     $("#combatText3").empty();
     attacking = attacker2;
 });


//special player 1
$("#special").on("click", function () {
    attacking = attacker;
    if (attacking["specialCounter"] > 0) {
        $("#combatText2").empty();
        $("#combatText3").empty();
        specialSelected = true;
    } else {
        attacking = [];
    };
});

//special player 2
$("#special2").on("click", function () {
    attacking = attacker2;
    if (attacking["specialCounter"] > 0) {
        $("#combatText2").empty();
        $("#combatText3").empty();
        specialSelected = true;
    } else {
        attacking = [];
    };
});

$("#playAgain").on("click", function () {
    deadpool["hitPoints"] = deadpool["maxHitPoints"];
    deadpool["healCounter"] = deadpool["maxHeals"];
    deadpool["specialCounter"] = 1;
    wolverine["hitPoints"] = wolverine["maxHitPoints"];
    wolverine["healCounter"] = wolverine["maxHeals"];
    wolverine["specialCounter"] = 1;
    hulk["hitPoints"] = hulk["maxHitPoints"];   
    hulk["specialCounter"] = 1;
    ironMan["hitPoints"] = ironMan["maxHitPoints"];   
    ironMan["specialCounter"] = 1;
    attacker = [];
    attacker2 = [];
    combatant1 = [];
    combatant2 = [];
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
    document.getElementById("p1HP").className = `hp`;
    document.getElementById("p2HP").className = `hp`;
    document.getElementById("p1Name").className = "name";
    document.getElementById("p2Name").className = "name";
    lossCounter = 0;
    charChosen = false;
    charChosen2 = false;
    startGame();
});