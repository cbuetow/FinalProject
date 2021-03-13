$(document).ready(function () {
    $("button#reroll").click(reroll);
    $("button#end-turn").click(endTurn);
    $("button#start-turn").click(startTurn);
    $("span.images").click(toggleHeld);
    $("span.images").click(drawDie);

    let diceFaceArray = ["Chicken", "Cow", "Human", "Raygun", "Tank", "Tank"];
    let diceRollArray = [];

    // set scores to zero
    let humanScore = 0;
    let chickenScore = 0;
    let cowScore = 0;

    $("p#scoreHumans").text(`Humans: ${humanScore}`);
    $("p#scoreChickens").text(`Chickens: ${chickenScore}`);
    $("p#scoreCows").text(`Cows: ${cowScore}`);

    let rerollsRemaining = 2;
    $("p#rollsRemaining").text(`Rerolls Remaining: ${rerollsRemaining}`);

    $("img#chicken.png").show();

    function getRandomDieFace() {
        let randomDieFaceNumber = Math.floor(Math.random() * 6) + 1;
        let arrayPick = diceFaceArray[randomDieFaceNumber];
        $("")
    }

    function createDieObject(index) {
        let chickenDie = {
            face: 'img/chicken.png',
            held: false,
            toggleHeld: function () {
                // if die is clicked, change held status to true
                held = !held;
            }
        }
        let cowDie = {
            face: 'img/cow.png',
            held: false,
            toggleHeld: function () {
                held = !held;
            }
        }
        let humanDie = {
            face: 'img/human.png',
            held: false,
            toggleHeld: function () {
                held = !held;
            }
        }
        let raygunDie = {
            face: 'img/raygun.png',
            held: false,
            toggleHeld: function () {
                held = !held;
            }
        }
        let tankDie = {
            face: 'img/tank.png',
            held: true
        }

    }

    function sortDice(a, b) {
        if (a.held < b.held)
            return -1;
        else if (a.held > b.held)
            return 1;
        else
            return 0;
    }

    function rollAllDice() {

    }

    function drawDie() {
        $("span.images").css({"border-style": "outset", "border-color": "royalblue", "border-width": "5px"});
    }

    function drawAllDice() {

    }

    function toggleHeld() {
        if (held === false)
        {
            $("span.images").css({"border-style": "outset", "border-color": "royalblue", "border-width": "5px"});
        }
    }

    function startTurn() {
        $("button.score, button#start-turn").hide();
        $("button#reroll, button#end-turn").show();
    }

    function lost() {

    }

    function endTurn() {
        $("button#reroll, button#end-turn").hide();
        // if tank > raygun, display "NO POINTS THIS TURN" message

        // if raygun > tank, display "`You scored ${pointsScored} points for ${collectorScored}!`
    }

    function reroll() {
        rerollsRemaining--;
        $("p#rollsRemaining").text(`Rerolls Remaining: ${rerollsRemaining}`);
        if (rerollsRemaining === 0)
        {
            endTurn();
        }
    }

    function endGame() {
        if (rerollsRemaining === 0)
        {
            $("button").hide();
            $("p#gameOver").text("Game Over!");
        }

    }

    function scoreCows(){

    }

    function scoreChickens() {

    }

    function scoreHumans() {

    }


});