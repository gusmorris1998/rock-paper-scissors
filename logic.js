function fetchComputerDecision() {
    const rand = Math.random()

    if (rand < 1/3) { return "rock" }
    else if (rand >= 2/3) { return "paper" }
    else { return "scissors" }
}

function fetchHumanDecision() {
    var decision;

    while (decision != "rock" && decision != "paper" && decision != "scissors") {
        console.log("Enter rock, paper or scissors")
        decision = prompt("What is your choice")
    }

    return decision
}

function playGame() {
    var humanScore = 0;
    var computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) { console.log("Draw") }
        else if (humanChoice == "rock") {
            if (computerChoice == "paper") { console.log("Rock loses to paper, computer wins"); computerScore++ }
            else if (computerChoice == "scissors") { console.log("Rock beats scissors, human wins"); humanScore++ }
        }
        else if (humanChoice == "paper") {
            if (computerChoice == "scissors") { console.log("Paper loses to scissors, computer wins"); computer++ }
            else if (computerChoice == "rock") { console.log("Paper beats rock, human wins"); humanScore++ }
        }
        else if (humanChoice == "scissors") {
            if (computerChoice == "rock") { console.log("Scissors loses to rock, computer wins"); computerScore++}
            else if (computerChoice == "paper") { console.log("Scissors beats paper, human wins"); humanScore++ }
        }
    
        console.log("Computer Score: " + computerScore + " vs Human Score: " + humanScore)
    }
    
    for (let i = 0; i < 5; i++) {
        playRound(fetchHumanDecision(), fetchComputerDecision())
    }

    return (humanScore > computerScore ? "You Win: ": "You Lose: ") + humanScore + ":" + computerScore
}

console.log(playGame())