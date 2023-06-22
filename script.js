let playersChoice = "";
let computerChoice = "";
let score = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayersChoice() {
    const playersChoice = prompt("Rock, Paper, or Scissors? Pick one!").toLowerCase();
    return playersChoice
}


function game() {
    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        console.log(computerChoice)
        playersChoice = getPlayersChoice();
        if (playersChoice !== "rock" && playersChoice !== "paper" && playersChoice !== "scissors")  {
            console.log("Try again");
            i--;
            continue;
        }
        console.log(computerChoice)
        playGame(playersChoice, computerChoice);
    }
    return alert("Your score is " + score + "/5");
}


function playGame(playerSelection, computerSelection)   {
    switch(true) {
        case (computerSelection === "rock" && playerSelection === "rock"):
            alert("It's a tie!");
            break;
        case (computerSelection === "rock" && playerSelection === "paper"):
            alert("You lost! Paper beats rock")
            break;
        case (computerSelection === "rock" && playerSelection === "scissors"):
            alert("You won! Rock beats scissors");
            score++;
            break;
        case (computerSelection === "paper" && playerSelection === "paper"):
            alert("It's a tie!");
            break;
        case (computerSelection === "paper" && playerSelection === "rock"):
            alert("You won! Paper beats rock!");
            score++;
            break;
        case (computerSelection === "paper" && playerSelection === "scissors"):
            alert("You lost! Scissors beats paper");
            break;
        case (computerSelection === "scissors" && playerSelection === "scissors"):
            alert("It's a tie!");
            break;
        case (computerSelection === "scissors" && playerSelection === "rock"):
            alert("You lost! Rock beats scissors");
            break;
        case (computerSelection === "scissors" && playerSelection === "paper"):
            alert("You won! Scissors beats paper");
            score++;
            break;
    }
}

game();


