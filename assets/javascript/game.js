$(document).ready(function(){
// create words and random selector
// number of underscores correlates to the randomly selected word in the array
var secretWords = ['Jake', 'Finn', 'Bubblegum', 'Marciline', 'Rainicorn', 'Peppermint', 'Tart'],
    random = Math.floor(Math.random() * secretWords.length),
    randomWord = secretWords[random];
var result = "";
var answer = [];
function blanksFromWord(word) {

  
  for (var i = 0; i < secretWords.length; i++) {
    result += "_";
  }
  return result;
}
$(".card-text").html(result)
//console.log(randomWord);//
//console.log(blanksFromWord(randomWord));//
// (blanksFromRandom(randomWord))
//first, I'm going to give the letters that can be picked
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetLetters = secretWords.length;
        
        //The playing loop
        while (alphabetLetters > 0) {
            //This will be the players progress
            alert("This is the number of remaining letters:\n" + answer.join(" "));
            
            //Prompt for player to guess
            var guess = prompt("Guess a letter or click 'Cancel' to stop the game.");
            if (prompt === null) {
                //Game has ended because player left
                break;
            } else if (guess.length !== 1) {
                alert("Please enter one single letter.");
            } else {
                //Update match with guess
                for (var j = 0; j < word.length; j++) {
                    if (word[j] === guess) {
                        answer[j] = guess;
                        remainingLetters--;
                    }
                }
            }
            //End of playing loop
        }
        
        //Show answer and congratulate the player
        alert(answer.join(" "));
alert("Good work! The right answer is " + word);
});
//now I need to figure out how to get the above to run inside the card

//lines 25 -45 are googlefu and I have no idea what I am doing. At all. 
//line 15 jquery attempt?? sigh. I tried.