///////////////////
// Crystals     //
//    Collector //
/////////////////
// 
// Pseudo Code
// 
//  - Four cristals displayed on page, all containing hidden random # from 1 - 12
//  - Player is given a random number at start of every game
// 
//  - Once a crystal is selected:
//      -   add specific amount of points to players total
//      -   
// 
//
//  -   If Solved:
//      -   add to wins
//      -   start new game
// 
//  -   If go over total:
//      -   add to losses
//      -   start new game

// Global Variables
var losses = 0;
var wins = 0;
var totalScore = 0;
var randomNumber = 0;
var jewelArray = [];
var $randNum = $('#randomNumber');
var $totalScore = $('#total');
var $wins = $('#win');
var $losses = $('#loss');
var $crystal1 = $('#crystal1');
var $crystal2 = $('#crystal2');
var $crystal3 = $('#crystal3');
var $crystal4 = $('#crystal4');

// start game function
var startGame = function() {
    //  reset total score
    totalScore = 0;

    // reset jewwlArray
    jewelArray = [];

    // generate randomNumber 19 - 120
    randomNumber = Math.floor(Math.random() * 120) + 19;
    $randNum.html(randomNumber);

    // creates random 4 numbers from 1-12 and pushes to jewlArray
    for (i = 0; i < 4; i++) {
        jewlNum = Math.floor(Math.random() * 12) + 1;
        jewelArray.push(jewlNum);
    }

    // update total score
    $totalScore.html(totalScore);

}; // end startGame

var roundComplete = function() {

    // event listener for value of img being clicked
    // add to total score

    $crystal1.click(function() {
        totalScore = jewelArray[0] + totalScore;
        // update total score
        $totalScore.html(totalScore);
        checkWin();
    });
    $crystal2.click(function() {
        totalScore = jewelArray[1] + totalScore;
        // update total score
        $totalScore.html(totalScore);
        checkWin();
    });
    $crystal3.click(function() {
        totalScore = jewelArray[2] + totalScore;
        // update total score
        $totalScore.html(totalScore);
        checkWin();

    });
    $crystal4.click(function() {
        totalScore = jewelArray[3] + totalScore;
        // update total score
        $totalScore.html(totalScore);
        checkWin();
    });
    console.log("total score is: " + totalScore + " Random Number is " + randomNumber);


    // function to check if player wins or losses
    var checkWin = function() {
            // if total === randomNumber, win!
            if (totalScore === randomNumber) {
                wins++;
                $wins.html(wins);
                window.alert("You won! Click 'OK' for next round.");
                startGame();
                // else if total > randomNumber, lose!
            } else if (totalScore > randomNumber) {
                losses++;
                $losses.html(losses);
                window.alert("You Lost.");
                startGame();
            }
        } // end checkWin
}; // end roundComplete


// once page loads, game starts
window.onload = startGame();

// once page loads, game starts
$(document).ready(function() {
    roundComplete();

    // update wins
    $wins.append("Wins: " + wins);

    // update losses
    $losses.append("Losses: " + losses);
});