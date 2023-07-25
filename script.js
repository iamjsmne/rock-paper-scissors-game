const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const playerChoice = document.querySelector("#playerChoice"); 
const computerChoice = document.querySelector("#computerChoice");
const buttons = document.querySelectorAll("div.playerSelection button");
const playAgainBtn = document.querySelector("#playAgain")
const resultMessage = document.querySelector("#result");

let playerSelection = "";
let computerSelection = "";
let pScore = 0;
let cScore = 0;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        checkWinner();
        playerSelection = button.id;
        game();
    });
});


function getComputerChoice() {
    const choiceArr = ["rock", "paper", "scissors"];
    return computerSelection = choiceArr[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        resultMessage.textContent = "It's a tie!";
    } else if ((playerSelection === "rock" && computerSelection  === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")) {
        resultMessage.textContent = "You lost!";
        cScore++;
    } else {
        resultMessage.textContent = "You won!";
        pScore++;
    }
}

function game() {
    getComputerChoice();
    playRound(playerSelection, computerSelection);
    scoreBoard();
    checkWinner();
}

function scoreBoard() {
    //display players and computers choice selection
    playerChoice.textContent = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerChoice.textContent = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    //display the current score
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}

function checkWinner() {
    if (pScore === 5 || cScore === 5) {
        if (pScore === 5) {
            resultMessage.textContent = "Awesome! You Won!";
        } else {
            resultMessage.textContent = "You Lost! Try Again!"
        }
        buttons.addEventListener('click', disableButton);
    }
}

const disableButton = () => {
    buttons.disabled = true;
}

//reset the game
playAgainBtn.addEventListener('click', () => location.reload());