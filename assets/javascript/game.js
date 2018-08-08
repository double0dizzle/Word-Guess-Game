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
    function reset() {

        var words = ["pedal", "pump", "gears", "helmet", "carbon", "trail"];
    var answer = words[Math.floor(Math.random() * words.length)];
    var answerArray = [];
    var wrongGuess = [];
    for (var i = 0; i < answer.length; i++) {
            answerArray[i] = "_";
        }
        
    var guesses = 0;
    document.onkeyup = function (event) {
        // console.log(event)
        var guess = event.key;
        var remainingLetters = answer.length;
        var bet = true 

        if (bet) {

            if (guess) {
                guesses++;
                document.getElementById("guesses").innerHTML= guesses;
                console.log("guesses" + guesses);
                //updateScore();
            }

            if(guesses > 10) {
                alert("You lose!");
                reset();
                //$("#w").text(wins);
                //reset();
            }
            if(remainingLetters === 1) {
                alert("You win!")
                reset();
            }
    
            if (remainingLetters > 0) {
                

                var goodGuess = false

                    for (var j = 0; j < answer.length; j++) {
                        
                    
                        if (answer[j] === guess) { 
                            goodGuess = true
                            
                            answerArray[j] = guess;
                            remainingLetters--;
                        }
                    }
                    // console.log(goodGuess)
                    if(!goodGuess) {
                        wrongGuess.push(guess)
                        console.log(wrongGuess)
                     }
                     document.getElementById("word").innerHTML = answerArray.join(" ");
            }
        document.getElementById("word").innerHTML = answerArray.join(" ");
    } document.getElementById("game").textContent = wrongGuess;
}
}
        
    var guesses = 0;
    document.onkeyup = function (event) {
        // console.log(event)
        var guess = event.key;
        
        

    
       
       
        
      
       

        var remainingLetters = answer.length;


        
        var bet = true 

        if (bet) {

            if (guess) {
                guesses++;
                document.getElementById("guesses").innerHTML= guesses;
                console.log("guesses" + guesses);
                //updateScore();
            }

            if(guesses > 10) {
                alert("You lose!");
                reset();
                //$("#w").text(wins);
                //reset();
            }
            if(remainingLetters === 0) {
                alert("You win!")
                reset();
            }
    
        
           

            if (remainingLetters > 0) {
                

                var goodGuess = false

                    for (var j = 0; j < answer.length; j++) {
                        // console.log("f loop")
                        // console.log(answer[j])
                        // console.log(guess);
                    
                        if (answer[j] === guess) { 
                            goodGuess = true
                            // console.log("correctletterguessed")
                            answerArray[j] = guess;
                            remainingLetters--;
                        }
                        

                       
                    }
                    // console.log(goodGuess)
                    if(!goodGuess) {
                        wrongGuess.push(guess)
                        console.log(wrongGuess)
                    
                        
                        
                    }

                

                

                    document.getElementById("word").innerHTML = answerArray.join(" ");
                    
                    
            
            }



            document.getElementById("word").innerHTML = answerArray.join(" ");
            
         

        } document.getElementById("game").textContent = wrongGuess;
        //document.getElementById("game").textContent = remainingLetters;
        
        
            

        
}

//The guess counter is set up, but must register to update with every guess from the user, not just their wrong guesses.
//A proper gamestop must be coded as well for when the player guesses the word, or runs out of guesses. This is done.
//A win alert must go off when the remaining letters reach zero, and the guesses are <=10.



