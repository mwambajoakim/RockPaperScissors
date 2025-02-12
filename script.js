"use strict";

//Create function for computer choice
function getComputerChoice() { 

//Get random numbers
let rand = Math.floor(Math.random() * 10);

//Exclusively get three numbers; 1, 2, and 3
if (rand === 0 && rand >= 4) {
    return;
}

else {
    //Assign "Rock" to 1
    if (rand === 1) {
        return "Rock";
    }
    //Assign "Paper" to 2
    else if (rand === 2) {
        return "Paper";
    }
    //Assign "Scissors" to 3
    else if (rand === 3) {
        return "Scissors";
    }
    }
}


//Define a function for the Human choice
function getHumanChoice() {

//Create Variable where human choice will be stored after filling prompt
let choice = window.prompt();

//Display  human's choice according to what they chose
if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
    return choice;
}
}

let humanScore = 0;
let computerScore = 0;

//Create a function for playing rounds
function playRound(humanSelection, computerSelection) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    if (humanSelection === "Paper" && computerSelection === "Rock") {
        console.log("You won!");
    }

    else if (humanSelection === "Rock" &&  computerSelection === "Paper") {
        console.log("You lost. Paper wins!");
    }

    else if (humanSelection === "Scissors" &&  computerSelection === "Paper") {
        concole.log("You won!");
    }

    else if (humanSelection === "Paper" &&  computerSelection === "Scissors") {
         console.log("You lost. Scissors wins!");
    }

    else if (humanSelection === "Rock" &&  computerSelection === "Scissors") {
        console.log("You won!");
    }

    else if (humanSelection === "Scissors" &&  computerSelection === "Rock") {
        console.log("You lost. Rock wins");
    }

}


console.log(getHumanChoice());
console.log(getComputerChoice());


console.log(playRound(humanSelection, computerSelection));


