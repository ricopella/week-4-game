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

    // generate randomNumber 19 - 120
    randomNumber = Math.floor(Math.random() * 120) + 19;
    $randNum.html(randomNumber);
    console.log(randomNumber);


    // creates random 4 numbers from 1-12 and pushes to jewlArray
    for (i = 0; i < 4; i++) {
        jewlNum = Math.floor(Math.random() * 12) + 1;
        jewelArray.push(jewlNum);
    }

    console.log(jewelArray);

    // set individual values for all 4 images from the jewlArray
    $crystal1.val(jewelArray[0]);
    $crystal2.val(jewelArray[1]);
    $crystal3.val(jewelArray[2]);
    $crystal4.val(jewelArray[3]);

    //  Update html on page

    // update total score
    $totalScore.html(totalScore);

    // update wins
    $wins.html(wins);

    // update losses
    $losses.html(losses);

}

var roundComplete = function() {

    // add event listeners for each button being clicked
    $crystal1.click(function() {
        totalScore = jewelArray[0] + totalScore;
        // update total score
        $totalScore.html(totalScore);
    });
    $crystal2.click(function() {
        totalScore = jewelArray[1] + totalScore;
        // update total score
        $totalScore.html(totalScore);
    });
    $crystal3.click(function() {
        totalScore = jewelArray[2] + totalScore;
        // update total score
        $totalScore.html(totalScore);
    });
    $crystal4.click(function() {
        totalScore = jewelArray[3] + totalScore;
        // update total score
        $totalScore.html(totalScore);
    });

    // if total === randomNumber, win!

    // else if total > randomNumber, lose!


}

// once page loads, game starts
window.onload = startGame();

// once page loads, game starts
$(document).ready(function() {
    roundComplete();
});