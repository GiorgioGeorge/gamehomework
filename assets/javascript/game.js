//Variables
var letters = "abcdefghijklmnopqrstuvwxyz";
var randomLetter = randomLetter;
var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];



//random letter generator random letter generator
randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randomLetter);


function computerGuess() {
      randomLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(randomLetter);

}
//event key
document.onkeyup = function (event) {
      var playerGuess = event.key;

      //game logic
      if (playerGuess === randomLetter) {
            won++;
            attempts = 10;
            usedArray = [];
            alert("WINNER! YOU WIN!")

      }
      
      computerGuess();
      if (playerGuess !== randomLetter) {
            attempts--;

      }

      if (attempts == 0) {
            lost++;
            usedArray = []
            attempts = 10;
            alert("YOU LOSE! LOSER!")
      }


      if (usedArray.indexOf(playerGuess) >= 0) {

      } else {

            usedArray.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = usedArray;
            console.log(usedArray);

      }
      //OUTPUT TO HTML
      document.getElementById('hoomanWins').innerHTML = won;
      document.getElementById('compooterWins').innerHTML = lost;
      document.getElementById('guessesLeft').innerHTML = attempts;

}
