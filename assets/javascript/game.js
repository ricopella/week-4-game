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

// start game function
var startGame = function() {

}

var roundComplete = function() {

}

// once page loads, game starts
$(document).ready(function() {
    startGame();
})