function getComputerChoice() {
    const choice = ["Rock","Paper","Scissor"]
    const randomChoice = Math.floor(Math.random() * choice.length)
    return choice[randomChoice]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()
    computerSelection = computerSelection.toUpperCase()
    
    if (playerSelection === computerSelection){
        console.log("It's a tie!")
        return "It's a Tie!"
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
            (playerSelection === "SCISSOR" && computerSelection === "PAPER") ||
            (playerSelection === "PAPER" && computerSelection === "ROCK")) {
        console.log(`You win this round! Computer chose ${computerSelection}.`) 
        return "You win!"
    } else {
        console.log(`You lose this round! Computer chose ${computerSelection}.`)  
        return "You lose!"
    }
}

function playGame() {
    let playerScore = 0
    let computerScore = 0

    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter Choice (Paper,Rock,Scissor) : ")
        const computerSelection = getComputerChoice()
        const roundResult = playRound(playerSelection, computerSelection)
        console.log(`Round : ${i + 1} Result : ${roundResult}`)

        if (roundResult === "You win!") {
            playerScore++
        } else if (roundResult === "You lose!") {
            computerScore++
        }
    }

    console.log(`Your Score : ${playerScore}, Computer Score: ${computerScore}`)
}

playGame()