function getComputerChoice() { 

let rand = Math.floor(Math.random() * 10);

if (rand === 0 && rand >= 4) {
    return;
}

else {
    if (rand === 1) {
        return "Rock";
    }

    else if (rand === 2) {
        return "Paper";
    }

    else if (rand === 3) {
        return "Scissors";
    }
}
}

console.log(getComputerChoice());

