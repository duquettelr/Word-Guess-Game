



var wins = 0;

function game() {

    //@ts-check
    var character = ["mario", "yoshi", "peach", "bowser", "luigi", "kirby"];
    //allowable incorrect guesses
    var wrongGuess = 6;
    //choosing a random character
    var cpChoice = character[Math.floor(Math.random() * character.length)];
    //breaking the random chosen character down into an array
    var characterArr = cpChoice.split("");
    var yourGuess = [""];
    var totalGuess = 0;

    var word = document.getElementById("word");
    var remainingGuesses = document.getElementById("guessesLeft");
    var guessesTotal = document.getElementById("guessesTotal");
    var word2 = document.getElementById("word2");
    var totalWord = [];
    var totalWins = document.getElementById("totalWins");


    console.log(cpChoice);
    console.log(characterArr);
    console.log(characterArr[0]);

    // var word = document.getElementById("word");
    // var remainingGuesses = document.getElementById("guessesLeft");
    // var guessesTotal = document.getElementById("guessesTotal");
    // var word2 = document.getElementById("word2");



    for (var i = 0; i < characterArr.length; i++) {
        totalWord[i] = " _ ";
    }

    console.log(totalWord);
    document.getElementById("totalWord").innerHTML = totalWord.join(" ");

    document.onkeyup = function main(event) {
        word.textContent = event.key;
        word2.textContent = event.key;
        if (yourGuess.indexOf(event.key) !== -1) {
            return;
        }

        totalGuess = totalGuess + 1;
        guessesTotal.textContent = totalGuess;
        yourGuess.push(word2.textContent);
        console.log(yourGuess);
        document.getElementById("word2").innerHTML = yourGuess.toString();

        var bool = false;
        // in loop if match set bool = 1
        // outside end of loop if bool == false
        var boolLetterPool = false;

        for (var i = 0; i < characterArr.length; i++) {
            if (word.textContent === characterArr[i]) {
                console.log(word.textContent);

                var bool = true;
                // wrongGuess = wrongGuess + 0;
                // remainingGuesses.textContent = wrongGuess;

                totalWord[i] = word.textContent;
                console.log(totalWord[i]);
                document.getElementById("totalWord").innerHTML = totalWord.join(" ");
            }
        };


        if (totalWord.indexOf(" _ ") === -1) {
            wins = wins + 1;
            document.getElementById("totalWins").innerHTML = wins;
        }


        if (bool != true) {
            wrongGuess = wrongGuess - 1;

            remainingGuesses.textContent = wrongGuess;
            console.log(wrongGuess);
        }

        if (bool === true) {
            wrongGuess = wrongGuess;
            remainingGuesses.textContent = wrongGuess;
        }

        if (wrongGuess === 0) {
            game();
            document.getElementById("word2").innerHTML = "";
            document.getElementById("word").innerHTML = "...";
            wrongGuess = 0;
            totalWord = [""];
            totalGuess = 0;
            document.getElementById("guessesTotal").innerHTML = 0;

        }




    }





};

// function emptyYourGuess() {
//     document.getElementById("word2").innerHTML = "";
//     document.getElementById("word").innerHTML = "...";
//     wrongGuess = 0;
//     totalWord = [""];
//     totalGuess = 0;

// }

document.getElementById("reset").onclick = function () {
    game();
};






