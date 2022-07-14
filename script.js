'use strict';
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
    document.querySelector(".message").innerText = message;
}

document.querySelector(".again").addEventListener("click", function () {
    secretNum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".number").innerText = "?";
    document.querySelector(".message").innerText = "Start guessing...";
    document.body.style.backgroundColor = "#222";
    document.querySelector(".score").innerText = 20;
    document.querySelector(".guess").value = "";
    score = 20;
});

document.querySelector(".check").addEventListener("click", function () {
    const myGuess = Number(document.querySelector(".guess").value);
    if (!myGuess) {
        displayMessage("Enter a number!😑");
    } else if (myGuess === secretNum) {
        displayMessage("Congratulations!🎉");
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").innerText = highscore;
        }
        document.body.style.backgroundColor = "#60b347";
        document.querySelector(".number").innerText = secretNum;
    } else if (myGuess !== secretNum) {
        if (score > 1) {
            displayMessage(myGuess > secretNum ? "Too high!📈" : "Too low!📉");
            score--;
            document.querySelector(".score").innerText = score;
        } else {
            displayMessage("You lost the game!🎃");
            document.querySelector(".score").innerText = 0;
        }
    }
});

