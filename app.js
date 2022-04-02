let buttons = document.querySelector(".buttons");
const diplayResult = document.querySelector(".display-result");
const displayScore = document.querySelector(".display-score");
let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
    let responses = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return responses[randomIndex];
}
// // const winningConditions = {
// //     "rock" : "scissors",
// //     "paper" : "rock",
// //     "scissors": "paper"
// // }
// // const losingConditions = {
// //     "rock" : "paper",
// //     "paper" : "scrissors",
// //     "scissors": "rock"
// // }

// // // playRoundGeneric(winningConditions,losingConditions,"rock",computerPlay())
// // playRoundGeneric = (winningConditions,losingConditions,playerSelection, computerSelection) => {
// //     if (playerSelection === computerSelection) {
// //         return "It's a tie!"
// //     }
// //     for(const key in winningConditions){
// //         if (playerSelection === key && computerSelection === winningConditions[key]){
// //             return `You win! ${playerSelection} beats ${computerSelection}` 
// //         }
// //     }
// //     for(const key in losingConditions){
// //         if (playerSelection === key && computerSelection === winningConditions[key]){
// //             return `You win! ${playerSelection} beats ${computerSelection}` 
// //         }
// //     }

// // }
const playGame = (event) => {
    const playerSelection = event.target.className;
    const computerSelection = computerPlay();
    diplayResult.innerText =  playRound(playerSelection, computerSelection);
    game();
}

const playRound = (playerSelection, computerSelection) => {
    
    
    if (playerSelection === computerSelection) {
        displayScore.innerText = `your score: ${playerScore}  computer score: ${computerScore}`;
        return "It's a tie!"
    }
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore++;
            displayScore.innerText = `your score: ${playerScore}  computer score: ${computerScore}`;
            return `You win! ${playerSelection} beats ${computerSelection}`;
       
        
    }
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
            computerScore++;
            displayScore.innerText = `your score: ${playerScore}  computer score: ${computerScore}`;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        
    }

    throw `Invalid inputs! playerSelection: ${playerSelection} computerSelection: ${computerSelection}`

}
const game = () => {
    if (playerScore === 5) {
        displayScore.innerText = "You are the winner!";

        playerScore = 0;
        computerScore = 0;
    }

    if (computerScore === 5) {
        displayScore.innerText = "You lose, the computer wins!";

        playerScore = 0;
        computerScore = 0;
    }

}

for(let i = 0; i < buttons.children.length; i++){
    
    let button = buttons.children[i];
    console.log(button);
    button.addEventListener("click", playGame);
}


