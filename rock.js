let playerScore = 0;
let computerScore = 0;
let roundCount = 1;

const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const roundCountSpan = document.getElementById("round-count");
const resultMessageDiv = document.getElementById("result-message");
const finalResultDiv = document.getElementById("final-result");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = [Math.floor(Math.random() * choices.length)];
    return choices[randomIndex]
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        playerScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
}

function playGame(playerChoice) {
    if (playerScore >= 3 || computerScore >= 3 || roundCount > 5) {
        finalResultDiv.textContent = "Game Over! Please refresh to play again.";
        return;
        finalResultDiv.style.animation = "popAndReduce 1.5s ease-in-out infinite";
    }

    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);

    resultMessageDiv.textContent = `Round ${roundCount}: ${result}(Computer chose ${computerChoice})`;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    roundCountSpan.textContent = roundCount;

    if (playerScore === 3) {
        finalResultDiv.textContent = "Congratulations! You win the game!";
    } else if (computerScore === 3) {
        finalResultDiv.textContent = "Computer wins the game! Better luck next time!";
    } else if (roundCount === 5 && playerScore!== 3 && computerScore !== 3) {
        if (playerScore > computerScore) {
            finalResultDiv.textContent = "You win the game!";
        } else if (computerScore > playerScore) {
            finalResultDiv.textContent = "Computer wins the game! Better luck next time!";
        } else {
            finalResultDiv.textContent = "Game Over! It's a draw!";
        }
    }

    roundCount++;
}
