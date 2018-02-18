// set variables
var secretWords = ['Jake', 'Finn', 'Bubblegum', 'Marciline', 'Rainicorn', 'Peppermint', 'Tart'];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// lets get it started

function startGame () {
	selectedWord = secretWords[Math.floor(Math.random() * secretWords.length)];
	lettersinWord = selectedWord.split("");
	numBlanks = lettersinWord.length;

	// Reset or play again
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	// Populate blanks and success with correct number of blanks

	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}
  document.getElementByID("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementByID("numGuesses").innerHTML = guessesLeft;
  document.getElementByID("winCounter").innerHTML = winCount;
  document.getElementByID("lossCounter").innerHTML = lossCount;

  // testing
  console.log(selectedWord);
  console.log(lettersinWord);
  console.log(numBlanks);
  console.log(blanksAndSuccesses);

}

function checkLetters(letter){
	var isLetterInWord = false;

	for (var i=0; i < numBlanks; i++) {
		if(selectedWord[i] == letter){
			isLetterInWord = true;
		}
	}

	if(isLetterInWord){
		for (var i=0; i<numBlanks; i++) {
		if(selectedWord[i] == letter) {
				console.log("TEST");
			blanksAndSuccesses[i] == letter;
	}
	
		}
	}
	else {
		wrongLetters.push(letter);
		numGuesses--
	}

	function roundComplete(){
		console.log("Win Count: " + winCount + "| Loss Count: " + lossCount + "| Guesses Left " + guessesLeft);
	
	document.getElementByID("numGuesses").innerHTML = guessesLeft;
    document.getElementByID("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementByID("wrongGuesses").innerHTML = wrongLetters.join(" "); 


	if (lettersinWord.toString()== blanksAndSuccesses.toString()){
		winCount++;
		alert ("You Won!");

		document.getElementByID("winCounter").innerHTML = winCount;
		startGame();
	}

	else {
		lossCount++;
		alert("You lost!");

		document.getElementByID("lossCounter").innerHTML = lossCount;
		startGame();
	}

	}
}

// game play

startGame();

// key clicks
document.onkeyup = function (event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
}