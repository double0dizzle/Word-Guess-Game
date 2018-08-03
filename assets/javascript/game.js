var words = ["pedal", "pump", "gears", "helmet", "carbon", "trail"];
    var answer = words[Math.floor(Math.random() * words.length)];
    var answerArray = [];
    var wrongGuess = [];
    for (var i = 0; i < answer.length; i++) {
            answerArray[i] = "_";
        }
    
    //var name = prompt("Hello. What's your name?");
    //var challenge = confirm("Nice to meet you " + name + ". I'll bet you your bike you can't guess my word.");
    //if (challenge) {
    //   alert("You have 10 guesses to win my bike, or lose yours. Good luck.");
    //} else {
      //  alert("See ya later!"); 
            
        
        
    //}

    document.onkeyup = function (event) {
        // console.log(event)
        var guess = event.key;
        var score = 0;
       
        function updateScore() {
        document.querySelector("#guesses").innerHTML = "Guesses: " + score;
          }
        //if(guess) {
          //  score++;
          //updateScore();
        //}
      
       

        var remainingLetters = answer.length;

    


        
        var bet = true 

        if (bet) {
    
        
           

            if (remainingLetters > 0) {
                

                var goodGuess = false

                    for (var j = 0; j < answer.length; j++) {
                        console.log("f loop")
                        console.log(answer[j])
                        console.log(guess);
                        if (answer[j] === guess) { 
                            goodGuess = true
                            console.log("correctletterguessed")
                            answerArray[j] = guess;
                            remainingLetters--;
                            
                           
                            
                        }
                    }
                    console.log(goodGuess)
                    if(!goodGuess) {
                        wrongGuess.push(guess)
                        console.log(wrongGuess)
                        
                        
                    }
                    document.getElementById("word").innerHTML = answerArray.join(" ");
                    score++;
                    updateScore();
            
            }



            document.getElementById("word").innerHTML = answerArray.join(" ");
            
         

        } document.getElementById("game").textContent = wrongGuess;
        score++;
            updateScore();

        
}

//The guess counter is set up, but must register to update with every guess from the user.
//A proper gamestop must be coded as well for when the player guesses the word, or runs out of guesses.



