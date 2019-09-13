//   Global Variables
var targetScore = "";
var roundScore = 0;
var wins = 0;
var losses = 0;
var crystalValue = 0;
var crystals = ["assets/images/crystalOne.jpg",
    "assets/images/crystalTwo.jpg",
    "assets/images/crystalThree.jpg",
    "assets/images/crystalFour.jpg"]

// The player will be shown a random number at the start of the game between 19 - 120..
function startGame() {
    targetScore = (19 + Math.floor(Math.random() * 121));
    $("#target-score").text(targetScore);
    console.log(targetScore);
}
startGame()



// When the player clicks on a crystal, it will add a specific amount of points to the player's total score with a random hidden value between 1 - 12.


function updateScore() {
crystalValue = 1 + Math.floor(Math.random() * 11);
for (var i = 0; i < crystals.each; i++)
console.log(crystalValue);
$("button").val(crystalValue);
// When they do click one, update the player's score counter.
roundScore += crystalValue
$("#scoreCount").text(roundScore);
}
// updateScore()

function winsLosses() {
    if (roundScore > targetScore){
        losses++;
        $("#losses").text(losses);
        alert("Game over");
        reset()
    } else if (roundScore === targetScore) {
        wins++;
        $("#wins").text(wins);
        alert("wins");
        reset()
    }
    
}



function reset() {
    updateScore();
    startGame();
    roundScore = 0;
    $("#scoreCount").text(roundScore);
}







$(".crystals").on("click", function () {
    updateScore(roundScore);
    winsLosses();
});


    


// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The app should show the number of games the player wins and loses. 
 //     function checkIfWon() {}



// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
    // function gameReset() {

    // }






