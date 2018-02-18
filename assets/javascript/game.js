// global variables
// ============================================================
// arrays and variables

var wordOptions = ["jake", "finn", "bubblegum", "marciline", "rainicorn", "peppermint", "tart"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// functions
// ===========================================================

function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    // reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // get the right numbers of blanks
    for (var i= 0; i<numBlanks; i++){
        blanksAndSuccesses.push("_");
    }

// update html
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("winCounter").innerHTML = winCount;
document.getElementById("lossCounter").innerHTML = lossCount;

    // testing and debugging
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter){
    // check if letter exists

    var isLetterInWord = false;
    for (var i= 0; i < numBlanks; i++){
        if(selectedWord[i] == letter){
            isLetterInWord = true;
        }
    }

    // check where word exists
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if(selectedWord[i] == letter){
                blanksAndSuccesses[i] = letter;
            }
        }
    }
   else {
       wrongLetters.push(letter);
       guessesLeft--
   }

   console.log(blanksAndSuccesses);
   
}

function roundComplete(){
    console.log("Win Count: " + winCount + "| Loss Count: " + lossCount + " | Guesses Left" + guessesLeft );
    // update HTML
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
    // check if user won
    if (lettersinWord.toString() == blanksAndSuccesses.toString()){
        winCount++;
        alert("You Won!");

        // update HTML
        document.getElementById("winCounter").innerHTML= winCount;

        startGame();
    }
    // check if user lost
    else if(guessesLeft == 0) {
        lossCount++;
        alert("You Lost!");

        // update HTML
        document.getElementById("lossCounter").innerHTML = lossCount;
        startGame();
    }
}

// main process
// ===========================================================
startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    // testing and debugging
    console.log(letterGuessed)
}