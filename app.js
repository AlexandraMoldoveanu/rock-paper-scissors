const computerPlay = () => {
    let responses = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()*3);
    return responses[randomIndex];
}
// const winningConditions = {
//     "rock" : "scissors",
//     "paper" : "rock",
//     "scissors": "paper"
// }
// const losingConditions = {
//     "rock" : "paper",
//     "paper" : "scrissors",
//     "scissors": "rock"
// }

// // playRoundGeneric(winningConditions,losingConditions,"rock",computerPlay())
// playRoundGeneric = (winningConditions,losingConditions,playerSelection, computerSelection) => {
//     if (playerSelection === computerSelection) {
//         return "It's a tie!"
//     }
//     for(const key in winningConditions){
//         if (playerSelection === key && computerSelection === winningConditions[key]){
//             return `You win! ${playerSelection} beats ${computerSelection}` 
//         }
//     }
//     for(const key in losingConditions){
//         if (playerSelection === key && computerSelection === winningConditions[key]){
//             return `You win! ${playerSelection} beats ${computerSelection}` 
//         }
//     }
    
// }

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

    throw `Invalid inputs! playerSelection: ${playerSelection} computerSelection: ${computerSelection}`

}
const game = () => {
    let numberOfGames = 5;
    let playerScore = 0;
    let computerScore = 0;
    let validOptions = ["rock", "paper", "scissors"]
    for( let i = 0; i < numberOfGames; i++ ){
        let playerSelection = prompt("chose an option!").toLowerCase();
       
        if(validOptions.indexOf(playerSelection) === -1  ){
            playerSelection = computerPlay();
            console.log(`You failed to chose a good option, so ${playerSelection} will be chosen for you`);
        }
        const computerSelection = computerPlay();
        let gameResult = playRound(playerSelection, computerSelection);
        console.log(playerSelection, computerSelection);
        if(gameResult.includes("win") ){
            playerScore ++ ;
        } 
        if(gameResult.includes("lose") ){
            computerScore ++ ;
        }

    }
    if(playerScore > computerScore ) {
        return "Congrats! You win!";
    } else if (playerScore < computerScore ){
        return "You lose!";
    }
    else {
        return "It's a tie!"
    }
    
    
    
}
  
  
  console.log(game());
 

 