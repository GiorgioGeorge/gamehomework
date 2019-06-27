//array containing letters of then alphabet should probably include notice or alert to make sure guesses are entered in lowercase
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//variables for win and loss tracking
var numberOfWins = 0;
var numberOfLosses = 0;
var guessesLeft = 10;

//letter randomizer
var computerLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(computerLetter);



document.onkeypress = function(event){
    var userLetter = event.key;

    if(userLetter === computerLetter){
        numberOfWins++;
        alert("YOU WIN!");
    }
    else{
        guessesLeft--;
        alert("INCORRECT GUESS!")
    }
    if(guessesLeft = 0){
        numberOfLosses++;
        alert("TOO MANY INCORRECT GUESSES! YOU LOSE!")
    }

}
    document.getElementById("numberOfWins").innerHTML = "Number of Wins: " + numberOfWins;
    document.getElementById("numberOfLosses").innerHTML = "Number of Losses: " + numberOfLosses;
    document.getElementById("guessesLeft").innerHTML= "Guesses Left: " + guessesLeft;